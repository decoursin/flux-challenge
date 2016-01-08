(ns verbling.db
  (:require [reagent.core :as reagent]
            [schema.core :as s]
            [verbling.deque :refer [deque set-default-in-deque!]]))

;;;;;;;;;;;;;;;;;;;;;;;;; Schemas

(def Direction (s/enum :up :down))

;; (def Sith {:id s/Int :direction Direction, :name s/Str, :homeworld {:name s/Str, :id s/Int} :master s/Int, :apprentice s/Int})

;;;;;;;;;;;;;;;;;;;;;;;; Public

;; Use deque-clojure instead?
(defn empty-sith-template []
  {:id -1 :direction nil, :name "", :homeworld {:name "", :id 0} :master -1, :apprentice -1})

(def v
  (into [] (repeat 5 (empty-sith-template))))

(set-default-in-deque! (empty-sith-template))
(def siths (deque v))

(def app-db
  {:siths siths
   :requests {:up nil, :down nil}
   :planet {:id nil, :name nil}})

(println "app-db: " app-db)


