(ns verbling.views
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [verbling.handlers :refer [load-sith]]
            [verbling.db :refer [Direction]]
            [schema.core :as s]
            [reagent.core :as reagent]))

(defn sith-component [sith location]
  (let [this (reagent/current-component)]
    (reagent/create-class
     {:component-did-mount #(println "COMPONENT DID MOUNT")
        ;; component-should-update *only for performance* they say
      ;; :component-will-update
      :component-did-update
      (fn [this]
        (println "COMPONENT DID UPDATE: " sith)
        (let [sith (reagent/props this)
              direction (:direction sith)
              [id location] (cond ;; id is either from the apprentice or master
                              (and (= :up direction) (<= location 4)) 
                              [(get-in sith [:apprentice :id])
                               (+  1 location)]

                              (and (= :down direction) (>= location 0))
                              [(get-in sith [:master :id])
                               (+  -1 location)])]
          (println "direction: " direction)
          (println "location: " location)
          (println "id: " id)
          (when id
            (re-frame/dispatch [:set-sith id direction location]))))

      :component-will-receive-props
      (fn [this new-props]
        (println "COMPONENT WILL RECEIVE PROPS: " new-props)
        true)

      :display-name "sith-component"

      :reagent-render
      (fn [{:keys [name homeworld] :as sith}]
        (println "reagent-render: " sith)
        [:li.css-slot
         ^{:key sith}
         (when (not (empty? name))
           [:div 
            [:h3 name]
            [:h6 (str "Homeworld: " (:name homeworld))]])])})))
              ;; [:h6 (str "Homeworld: " (:name homeworld))]])])})]))

;; (defn world-component [{:keys [id name]}]
;;   (println "world component")
;;   ;; (reagent/create-class
;;   ;;  {:component-did-update
;;   ;;   (fn [this]
;;   ;;     (println "world component-did-update")
;;   ;;     (let [world (reagent/props this)]
;;   ;;       (println "world: " world)
;;   ;;       (re-frame/dispatch [:obi-changed-planet wolr]))
;;       ;; )})
;;   [:div.]
;;   )

(defn main []
  (re-frame/dispatch [:set-sith 3616 :up 0])
  (let [disable-up-button (re-frame/subscribe [:disable-up-button?])
        disable-down-button (re-frame/subscribe [:disable-down-button?])
        siths (re-frame/subscribe [:siths])
        planet (re-frame/subscribe [:planet])
        third #(nth % 2)
        fourth #(nth % 3)
        fifth #(nth % 4)] 
    (fn []
      (println "rendering main: ")
      [:div.css-root
       [:h1.css-planet-monitor "Obi-Wan currently on " (:name @planet)]
       [:section.css-scrollable-list
        [:ul.css-slots
         ^{:Key (first  @siths)} [sith-component (first  @siths) 0]
         ^{:Key (second @siths)} [sith-component (second @siths) 1]
         ^{:Key (third  @siths)} [sith-component (third  @siths) 2]
         ^{:Key (fourth @siths)} [sith-component (fourth @siths) 3]
         ^{:Key (fifth  @siths)} [sith-component (fifth  @siths) 4]]
        [:div.css-scroll-buttons
         [:button.css-button-up {:class (when @disable-up-button "css-button-disabled")
                                 :on-click (fn [e] (re-frame/dispatch [:button-click :up e]))}]
         [:button.css-button-down {:class (when @disable-down-button "css-button-disabled")
                                   :on-click (fn [e] (re-frame/dispatch [:button-click :down e]))}]]]])))
