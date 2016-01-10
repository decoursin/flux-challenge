(ns decoursin.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! chan close!]]
            [cljs-http.client :as client]
            [decoursin.db :as db :refer [Direction]]
            [decoursin.deque :refer [get-first-non-empty-sith is-empty?
                                    set-direction empty-at-location?
                                     assoc-sith push-down push-up]]
            [re-frame.core :as re-frame]
            [schema.core :as s]))

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
   where the sith should be placed [0-4],
   determined by where it's apprentice
   exclusive or master is located"
  [siths sith]
  (println "find-location")
  (if (= :up (:direction sith))
    (+  1 (current-sith-position siths (get-in sith [:master :id])))
    (+ -1 (current-sith-position siths (get-in sith [:apprentice :id])))))

(re-frame/register-handler
 :update-siths
 standard-middleware
 (fn [db [_ sith]]
   "We received a sith that was fetched from the server. Assoc
    it into it's location; and remove it from the pending requests
    because it's finished so no longer pending"
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
   "We're pending a request from the server for a sith with this id,
    add it to pending"
   (println ":handle-pending-requests")
   (assoc requests direction {:id id :channel cancel-chan})))

;;;;;;;;;;;;;;;;;;;;;;; set-sith handler

(s/defn fetch-sith
  "Fetch the sith from the server."
  [id :- s/Int]
  (println "fetch-sith | id: " id)
  (let [url (str "http://localhost:" port "/dark-jedis/" id)
        cancel-chan (chan 5)
        sith-chan (client/get url {:accepts :json
                                   :channel (chan 1 (map :body))
                                   :with-credentials? false
                                   :cancel cancel-chan})]
    [cancel-chan sith-chan]))

(s/defn handle-set-sith
  "In Re-frame, to change the db after asynchronous waiting,
   we must dispatch to a different handler to make the change;
   for this reason, in the when clause below, we dispatch
   to :update-siths and :update-pending-requests handlers. The
   :update-pending-requests dispatch must occur before we resolve
   the sith-channel using <!"
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
      (let [[cancel-chan sith-chan] (fetch-sith id)]
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
(s/defn opposite-direction
  "This is terrible haha and a hack of sorts. The problem is that
   we cancel the pending requests when scrolling in the opposite
   that they were loaded from"
  [direction]
  (case direction
    :up :down
    :down :up
    nil))

(s/defn cancel-obsolete-pending-request
  "A pending request is obsolete, after scroll, only when the position
   that a sith would be placed on the deque is no longer available
   due to scrolling while the sith is being fetched from the server. In
   this case, the sith's position, after scroll, is <0 or >4"
  [requests siths direction]
  (println "cancel-obsolete-pending-request")
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

(s/defn shift
  "Shift the deque up or down depending on direction. The result is
   that we remove from one side, and we add the default empty-sith-template
   to the other"
  [siths direction]
  (println "shift | direction: " direction)
  (if (= direction :up)
    (push-up siths)
    (push-down siths)))

(s/defn handle-button-click
  "Shift the deque up or down, depending on direction, and possibly
   cancel the only pending request in that direction"
  [db [_
          direction
          e]]
  (js/console.log e)
  (println ":handle-button-click | direction: " direction)
  (let [siths (-> (:siths db)
                  (shift direction)
                  (set-direction direction))
        request (cancel-obsolete-pending-request (:requests db) siths direction)]
    (-> db
        (assoc :siths siths)
        (assoc :requests request))))

(re-frame/register-handler
 :button-click
 standard-middleware
 handle-button-click)

;;;;;;;;;;;;;;;;;;;;;;;;;;;; websocket handler

(s/defn handle-ws-message
  "handle websocket messages, by updating the :planet field"
  [old-planet [_ new-planet]]
  (println ":handle-ws-message | new-planet: " new-planet)
  (clojure.walk/keywordize-keys new-planet))

(re-frame/register-handler
 :ws-message
 (re-frame/path :planet)
 handle-ws-message)
