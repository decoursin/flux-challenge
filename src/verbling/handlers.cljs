(ns verbling.handlers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [schema.macros :as sm])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [schema.core :as s]
            [verbling.db :refer [Direction app-db empty-sith-template]]))

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

(re-frame/register-handler
 :update-siths
 [re-frame/debug
  (re-frame/path :siths)]
 (fn [old-siths [_ new-siths]]
   new-siths))
   ;; (assoc old-db :siths new-db)))

(s/defn dark-jedis-request :- s/Str
  [id :- s/Int]
  (let [url (str "http://localhost:" port "/dark-jedis/")]
    (println url)
    (if (nil? id)
      url
      (str url id))))

(s/defn load-sith [id :- s/Int]
  (println "load-sith id: " id)
  (go (let [sith (:body (<! (http/get (dark-jedis-request id)
                                      {:accepts :json :with-credentials? false})))]
        sith)))

(s/defn current-sith-position :- s/Int
  [db id]
  "Used to find where the sith having id=id is located
   in the db."
  (cond
    (= id (get-in db [0 :id])) 0
    (= id (get-in db [1 :id])) 1
    (= id (get-in db [2 :id])) 2
    (= id (get-in db [3 :id])) 3
    (= id (get-in db [4 :id])) 4
    :else -1))

(s/defn find-location :- s/Int
  [db sith]
  "Returns the location in the db
   where the sith should be placed [0-5]."
  (println "find-location: " sith)
  (if (= :down (:direction sith))
    (+  1 (current-sith-position db (get-in sith [:master :id])))
    (+ -1 (current-sith-position db (get-in sith [:apprentice :id])))))

(s/defn set-sith
  [siths [_
          id ;; For some reason, typing this results that direction is nil???
          direction :- Direction]]
  (s/validate (s/maybe s/Int) id)
  (when id
    (go (let [sith (<! (load-sith id))
              sith (assoc sith :direction direction)
              location (find-location siths sith)
              updated-siths (assoc siths location sith)]
          (s/validate s/Int location)
          (re-frame/dispatch [:update-siths updated-siths]))))
          ;; (swap! db #(assoc-in % [:siths location] sith)))))
    siths)

(re-frame/register-handler
 :set-sith
 [re-frame/debug
  (re-frame/path :siths)]
 set-sith)

;; (defn shift [buttons direction]
;;   (println "shifting... " direction)
;;   (if (= direction :up)
;;     (println "shift up.")
;;     (println "shift down."))
;;   (buttons))
    ;; (swap! db #(-> (into [] (drop 1 %))
    ;;                (conj (empty-sith-template))))
    ;; (swap! db #(->> (drop-last 1 %)
    ;;                (into [(empty-sith-template)])))))
  ;; (println @db))

;; (s/defn button-click
;;   [buttons [_ :- s/Keyword
;;             direction :- Direction
;;             e]]
;;   (js/console.log e)
;;   (shift buttons direction))

(re-frame/register-handler
 :button-click
 [re-frame/debug
  (re-frame/path :buttons)]
 (fn [db [_ direction]] (do (println "button-click: " db) db)))
 ;; button-click)
