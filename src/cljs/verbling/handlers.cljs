(ns verbling.handlers
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [verbling.db :refer [sith-db]]))

(def ^:const port 3000)

(defn dark-jedis-request [id]
  (let [url (str "http://localhost:" port "/dark-jedis/")]
    (println url)
    (if (nil? id)
      url
      (str url id))))

(defn get-sith [id]
  (println "get-sith: " id)
  (go (let [sith (:body (<! (http/get (dark-jedis-request id)
                                      {:accepts :json :with-credentials? false})))]
        (println "found sith: " sith)
        sith)))

(defn handle-loaded-sith-ui [app-state [_ sith]]
  (println "NICCCCKKY :" sith)
  (println "NICCCCKKY :" app-state)
  (when (:name sith)
    (go (let [sith (<! (get-sith 3616))]
          (println "sith: " (:name sith))
          (swap! sith-db #(assoc-in % [0 :name] (:name sith)))
          (println "sith-db: " @sith-db)
          (println "first sith-db: " (:name (first @sith-db)))))))
        ;; (put! event-queue (assoc (Event. :new-sith :down sith) :init true)))));{:type :new-sith, :direction :down, :sith sith, :init true}))))
  ;; )

(re-frame/register-handler
 :loaded-sith-ui
 handle-loaded-sith-ui)
