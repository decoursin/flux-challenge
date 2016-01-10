(ns decoursin.handlers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [schema.macros :as sm])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as client]
            [medley.core :refer [dissoc-in]]
            [cljs.core.async :refer [<! chan close!]]
            [cljs-http.core :as http]
            [decoursin.deque :refer [get-first-non-empty-sith is-empty?
                                    set-direction empty-at-location?
                                    assoc-sith push-down push-up]]
            [schema.core :as s]
            [decoursin.db :as db :refer [Direction empty-sith-template]]))

(def ^:const port 3000)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Middleware

(defn check-and-throw
  "throw an exception if db doesn't match the schema."
  [a-schema db]
  (if-let [problems  (s/check a-schema db)]
    (do
      (println "db: " db)
      (println "the-schema: " a-schema)
      (throw (js/Error. (str "schema check failed: " problems))))))

(def check-schema-mw (re-frame/after (partial check-and-throw db/schema)))

(def standard-middleware (when ^boolean goog.DEBUG
                            (comp re-frame/debug check-schema-mw)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Public

(re-frame/register-handler
 :initialize-db
 re-frame/debug
 (fn []
   (s/validate db/schema db/app-db)
   db/app-db))

;;;;;;;;;;;;;;;;;;;;;;;; update siths handler

(s/defn current-sith-position :- s/Int
  [siths id]
  "Used to find where the sith having id=id is located
   in the siths."
  (cond
    (= id (get-in siths [0 :id])) 0
    (= id (get-in siths [1 :id])) 1
    (= id (get-in siths [2 :id])) 2
    (= id (get-in siths [3 :id])) 3
    (= id (get-in siths [4 :id])) 4
    (is-empty? siths) -1
    :else -9999))

(s/defn find-location :- s/Int
  "Returns the location in the siths
   where the sith should be placed [0-5]."
  [siths sith]
  (println "find-location")
  (if (= :up (:direction sith))
    (+  1 (current-sith-position siths (get-in sith [:master :id])))
    (+ -1 (current-sith-position siths (get-in sith [:apprentice :id])))))

(re-frame/register-handler
 :update-siths
 standard-middleware
 (fn [db [_ sith]]
   (println ":handle-update-siths")
   (let [siths (:siths db)
         location (find-location siths sith)
         buttons (:buttons db)]
     (-> db
         (assoc :siths (assoc-sith siths location sith))
         (assoc-in [:requests (:direction sith)] {:id -1 :channel nil})))))

;;;;;;;;;;;;;;;;;;;;;;;; update pending request

(re-frame/register-handler
 :update-pending-requests
 [standard-middleware
  (re-frame/path :requests)]
 ;; TODO prismatic schema
 (fn [requests [_ cancel-chan direction id]]
   (println ":handle-pending-requests")
   (assoc requests direction {:id id :channel cancel-chan})))

;;;;;;;;;;;;;;;;;;;;;;; set-sith handler

(s/defn load-sith [id :- s/Int]
  (println "load-sith | id: " id)
  (let [url (str "http://localhost:" port "/dark-jedis/" id)
        cancel-chan (chan 5)
        sith-chan (client/get url {:accepts :json
                                   :channel (chan 1 (map :body))
                                   :with-credentials? false
                                   :cancel cancel-chan})]
    [cancel-chan sith-chan]))

(s/defn handle-set-sith
  [db [_
          id ;; For some reason, typing this results that direction is nil???
          direction; :- Direction
          location]]
  (s/validate (s/maybe s/Int) id)
  (println ":handle-set-sith")
  (let [siths (:siths db)
        pending (get (:requests db) direction)] 
    (when (and (pos? id) ;; valid sith?
             (empty-at-location? siths location) ;; is the sith  already in there?
             (not= id (:id pending))) ;; waiting for a response for this sith?
      ;; when, do
      (let [[cancel-chan sith-chan] (load-sith id)]
        (re-frame/dispatch [:update-pending-requests cancel-chan direction id])
        (go (let [new-sith (<! sith-chan)
                  new-sith (assoc new-sith :direction direction)]
            (re-frame/dispatch [:update-siths new-sith])))))
      ;; always
      db))

(re-frame/register-handler
 :set-sith
 standard-middleware
 handle-set-sith)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;; buttons clicks handler

(s/defn cancel-request!
  "closing the cancel channel, cancels
   the sith-chan. Search cljs-http issues for more"
  [channel]
  (println "cancelling request")
  (close! channel))

;; TODO: make this better use top/bottom instead.
(defn opposite-direction
  [direction]
  (case direction
    :up :down
    :down :up
    nil))

(s/defn cancel-obsolete-request
  [requests siths direction]
  (println "cancel-obsolete-request")
  (let [pending-request-chan (:channel (get requests (opposite-direction direction)))
        [first-sith location] (get-first-non-empty-sith siths direction)
        remain (if (= :up direction)
                 location
                 (- 4 location))]
    (if (and pending-request-chan (>= remain location))
      (do
        (cancel-request! pending-request-chan)
        (assoc requests (opposite-direction direction) {:id -1, :channel nil}))
      requests)))

(defn shift [siths direction]
  (println "shift | direction: " direction)
  (if (= direction :up)
    (push-up siths)
    (push-down siths)))

(s/defn handle-button-click
  [db [_
          direction
          e]]
  (js/console.log e)
  (println ":handle-button-click | direction: " direction)
  (let [siths (-> (:siths db)
                  (shift direction)
                  (set-direction direction))
        request (cancel-obsolete-request (:requests db) siths direction)]
    (-> db
        (assoc :siths siths)
        (assoc :requests request))))

(re-frame/register-handler
 :button-click
 standard-middleware
 handle-button-click)

;;;;;;;;;;;;;;;;;;;;;;;;;;;; websocket handler

(s/defn handle-ws-message
  [old-planet [_ new-planet]]
  (println ":handle-ws-message | new-planet: " new-planet)
  (clojure.walk/keywordize-keys new-planet))

(re-frame/register-handler
 :ws-message
 (re-frame/path :planet)
 handle-ws-message)
