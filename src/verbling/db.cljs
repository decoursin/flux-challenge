(ns verbling.db
  (:require [reagent.core :as reagent]
            [schema.core :as s]))

;;;;;;;;;;;;;;;;;;;;;;;;; Schemas

(def Direction (s/enum :up :down))

;; (def Sith {:id s/Int :direction Direction, :name s/Str, :homeworld {:name s/Str, :id s/Int} :master s/Int, :apprentice s/Int})

;;;;;;;;;;;;;;;;;;;;;;;; Public

;; Use deque-clojure instead?
(defn empty-sith-template []
  {:id -1 :direction nil, :name "", :homeworld {:name "", :id 0} :master -1, :apprentice -1})

(def siths
  (into [] (repeat 5 (empty-sith-template))))

(defonce app-db
  {:siths siths
   :buttons []})

(println "app-db: " app-db)
