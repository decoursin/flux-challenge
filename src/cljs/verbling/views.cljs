(ns verbling.views
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [verbling.handlers :refer [get-sith]]
            [verbling.db :refer [sith-db]]
            [reagent.core :as reagent]))

(defn sith-component [{:keys [name homeworld] :as sith}]
  (println "sith component: " sith)
  ;; [(with-meta identity
     ;; {:component-did-update #(re-frame/dispatch [:loaded-sith-ui sith])})
   [:li.css-slot
    (when (not (empty? name))
      [:div 
       [:h3 name]
       [:h6 (str "Homeworld: " (:name homeworld))]])])

;; (defn button-click [direction e]
;;   (println "button clicked: " direction " event: " e)
;;   (let [queue-event (Event. :arrow direction nil)
;;         disabled? (aget (.-classList (.-target e)) 1)]
;;     (when (not disabled?)
;;       (put! event-queue queue-event))))


(defn run []
  (go (let [sith (<! (get-sith 3616))]
        (println "sith: " (:name sith))
        (swap! sith-db #(assoc-in % [0 :name] (:name sith))))))

(defn main []
  (let [silence-up-button (reagent/atom false)
        silence-down-button (reagent/atom false)
        siths (re-frame/subscribe [:siths])] 
    (run)
       (fn []
         (println "rendering main")
         [:div.css-root
          [:h1.css-planet-monitor "Obi-Wan currently on Tatooine"]
          [:section.css-scrollable-list
           [:ul.css-slots
            (for [sith @siths]
              [sith-component sith])]
           [:div.css-scroll-buttons
            [:button.css-button-up {:class (when @silence-up-button "css-button-disabled")}]
                                    ;; :on-click (partial button-click :up)}
            [:button.css-button-down {:class (when @silence-down-button "css-button-disabled")}]]]])))
;; :on-click (partial button-click :down)

  ;; (let [name (re-frame/subscribe [:name])]
  ;;   (fn []
  ;;     [:div "Hello from " @name])))
