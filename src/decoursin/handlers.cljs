(ns decoursin.handlers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [schema.macros :as sm])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as client]
            [medley.core :refer [dissoc-in]]
            [cljs.core.async :refer [<! chan]]
            [cljs-http.core :as http]
            [decoursin.deque :refer [get-first-non-empty-sith is-empty?
                                    set-direction empty-at-location?
                                    assoc-sith push-down push-up]]
            [schema.core :as s]
            [decoursin.db :refer [Direction app-db empty-sith-template]]))

(def ^:const port 3000)

;;;;;;;;;;;;;;;;;;;;;;;;; Schemas

;;;;;;;;;;;;;;;;;;;;;;;;; Middleware

;; (defn check-and-throw
;;   "throw an exception if db doesn't match the schema."
;;   [a-schema db]
;;   (if-let [problems  (s/check a-schema db)]
;;     (throw (js/Error. (str "schema check failed: " problems)))))

;; ;; after an event handler has run, this middleware can check that
;; ;; it the value in app-db still correctly matches the schema.
;; (def check-schema-mw (after (partial check-and-throw schema)))


;;;;;;;;;;;;;;;;;;;;;;;; Public

(re-frame/register-handler
 :initialize-db
 re-frame/debug
 (fn [] app-db))

(s/defn dark-jedis-request :- s/Str
  [id :- s/Int]
  (let [url (str "http://localhost:" port "/dark-jedis/")]
    (println url)
    (if (nil? id)
      url
      (str url id))))

(s/defn load-sith [id :- s/Int]
  (println "load-sith id: " id)
  (let [cancel (chan 5)]
    [cancel
     (go (let [sith (:body (<! (client/get (dark-jedis-request id) {:accepts :json
                                                                    :with-credentials? false
                                                                    :cancel cancel})))]
           sith))]))

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
  (println "find-location: " sith "\n from: siths: " siths)
  (if (= :up (:direction sith))
    (+  1 (current-sith-position siths (get-in sith [:master :id])))
    (+ -1 (current-sith-position siths (get-in sith [:apprentice :id])))))

(re-frame/register-handler
 :update-siths
 re-frame/debug
 (fn [db [_ sith]]
   (let [siths (:siths db)
         location (find-location siths sith)
         buttons (:buttons db)]
     (-> db
         (assoc :siths (assoc-sith siths location sith))
         (dissoc-in [:requests (:direction sith)])
         ))))

(s/defn handle-set-sith
  [db [_
          id ;; For some reason, typing this results that direction is nil???
          direction; :- Direction
          location]]
  (s/validate (s/maybe s/Int) id)
  (println "db: " db)
  (let [siths (:siths db)
        request (get (:requests db) direction)] 
    (if (and id (empty-at-location? siths location)) ;; and is not already-pending
      (let [[cancel-channel sith-channel] (load-sith id)]
        (go (let [sith (<! sith-channel)
                  sith (assoc sith :direction direction)]
            (s/validate s/Int location)
            (re-frame/dispatch [:update-siths sith])))
        (assoc-in db [:requests direction] cancel-channel))
      db)))

(re-frame/register-handler
 :set-sith
 re-frame/debug
 handle-set-sith)

(s/defn cancel-request
  [request]
  (println "cancel-request: " request)
  (println "abort response? " (http/abort! request)))

(defn opposite-direction
  [direction]
  (case direction
    :up :down
    :down :up
    nil))

(s/defn cancel-obsolete-requests
  [requests siths direction]
  (println "cancel-obsolete-requests")
  (let [request (get requests (opposite-direction direction))
        [first-sith location] (get-first-non-empty-sith siths direction)
        remain (if (= :up direction)
                     location
                     (- 4 location))]
    (println "first-sith: " first-sith)
    (println "his direction: " direction)
    (println "his location: " location)
    (println "remain: " remain)
    (assoc
     requests direction
     (when (>= remain location)
       (do
         (println "canceling... ")
         (cancel-request request)
         request)))))

(defn shift [siths direction]
  (println "shifting... " direction)
  (if (= direction :up)
    (push-up siths)
    (push-down siths)))

(s/defn handle-button-click
  [db [_
          direction
          e]]
  (js/console.log e)
  (println "direction: " direction)
  (let [siths (-> (:siths db)
                  (shift direction)
                  (set-direction direction))
        request (cancel-obsolete-requests (:requests db) siths direction)]
    (-> db
        (assoc :siths siths)
        (assoc :requests request))))

(re-frame/register-handler
 :button-click
 re-frame/debug
 handle-button-click)

;;;;;;;;;;;;;;;;;;;;;;;;;;;; websocket handler

(s/defn handle-ws-message
  [old-planet [_ new-planet]]
  (clojure.walk/keywordize-keys new-planet))

(re-frame/register-handler
 :ws-message
 [re-frame/debug
  (re-frame/path :planet)]
 handle-ws-message)
