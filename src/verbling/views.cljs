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
  (println "sith component: " sith)
  (println "number: " location)
  (let [name (:name sith)
        homework (:homeworld sith)
        this (reagent/current-component)]
      (reagent/create-class
       {:component-did-mount #(println "COMPONENT DID MOUNT")
        ;; component-should-update *only for performance* they say
        :component-will-update (fn [this a b]
                                 (println "COMPONENT WILL UPDATE" a b))
        :component-did-update
        (fn [this]
          (println "COMPONENT DID UPDATE: " sith)
          (when (<= location 3)
            (let [sith (reagent/props this)
                  id (get-in sith [:apprentice :id])
                  location-of-apprentice (+ 1 location)]
              (when id 
                (re-frame/dispatch [:set-sith id (:direction sith) location-of-apprentice])))))

        :component-will-receive-props
        (fn [this new-props]
          (println "COMPONENT WILL RECEIVE PROPS: " new-props)
          true)
        ;; :component-did-update #(re-frame/dispatch [:loaded-sith-ui sith])

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

(defn main []
  (re-frame/dispatch [:set-sith 3616 :down 0])
  (let [silence-up-button (reagent/atom false)
        silence-down-button (reagent/atom false)
        siths (re-frame/subscribe [:siths])
        third #(nth % 2)
        fourth #(nth % 3)
        fifth #(nth % 4)] 
       (fn []
         (println "rendering main")
         [:div.css-root
          [:h1.css-planet-monitor "Obi-Wan currently on Tatooine"]
          [:section.css-scrollable-list
           [:ul.css-slots
            [sith-component (first @siths) 0]
            [sith-component (second @siths) 1]
            [sith-component (third @siths) 2]
            [sith-component (fourth @siths) 3]
            [sith-component (fifth @siths) 4]]
            ;; (for [sith @siths]
            ;;   [sith-component sith])]
           [:div.css-scroll-buttons
            [:button.css-button-up {;:class (when @silence-up-button "css-button-disabled")
                                    :on-click (fn [e] (re-frame/dispatch [:button-click :up e]))}]
            [:button.css-button-down {;:class (when @silence-down-button "css-button-disabled")
                                      :on-click (fn [e] (re-frame/dispatch [:button-click :down e]))}]]]])))

  ;; (let [name (re-frame/subscribe [:name])]
  ;;   (fn []
  ;;     [:div "Hello from " @name])))
