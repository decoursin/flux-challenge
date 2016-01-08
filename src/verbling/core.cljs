(ns verbling.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [verbling.handlers]
            [verbling.subs]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :as a]
            [verbling.views :as views]
            [verbling.config :as config]))

;; (when config/debug?
;;   (println "dev mode"))

;; (defn mount-root []
;;   (reagent/render [views/main-panel]
;;                   (.getElementById js/document "app")))

;; (defn ^:export init [] 
;;   (re-frame/dispatch-sync [:initialize-db])
;;   (mount-root))

(defn connect-to-websocket []
  (go-loop []
    (let [{:keys [ws-channel]} (<! (ws-ch "ws://localhost:4000"
                                          {:format :json
                                           :read-ch (a/chan 10)}))
          {:keys [message error]} (<! ws-channel)]
      (re-frame/dispatch [:ws-message message])
      (recur))))

(defn mount-root []
  (reagent/render [views/main]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (println "hi there")
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root)
  (connect-to-websocket))

(init)
