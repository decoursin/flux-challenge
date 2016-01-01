(ns verbling.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [verbling.handlers]
              [verbling.subs]
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


(defn mount-root []
  (reagent/render [views/main]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (println "hi there")
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))

(init)
