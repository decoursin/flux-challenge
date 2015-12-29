(ns verbling.db
  (:require [reagent.core :as reagent]))

;; Use deque-clojure instead
(defn empty-sith-template []
  {:id -1 :name "", :homeworld {:name "", :id 0} :master -1, :apprentice -1})

(defonce sith-db
  (reagent/atom (into [] (repeat 5 (empty-sith-template)))))
