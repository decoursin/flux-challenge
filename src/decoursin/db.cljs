(ns decoursin.db
  (:require [reagent.core :as reagent]
            [schema.core :as s]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [decoursin.deque :refer [new-deque set-default-in-deque!]]))

;;;;;;;;;;;;;;;;;;;;;;;;; Schemas

(def Direction (s/enum :up :down))

(def Sith {:id s/Num
           (s/optional-key :direction) (s/maybe Direction)
           :name s/Str
           (s/optional-key :obi-wan-is-here) s/Bool
           :homeworld {:name s/Str :id s/Num}
           :master {:url (s/maybe s/Str) :id (s/maybe s/Num)}
           :apprentice {:url (s/maybe s/Str) :id (s/maybe s/Num)}})

(def schema {:siths [Sith]
             :requests {:up (s/maybe ManyToManyChannel), :down (s/maybe ManyToManyChannel)}
             :planet {:id s/Num, :name s/Str}})

;;;;;;;;;;;;;;;;;;;;;;;; Public

(s/defn empty-sith-template []
  {:id -1
   :direction nil
   :name ""
   :obi-wan-is-here false
   :homeworld {:name "", :id -1}
   :master {:url "", :id -1}
   :apprentice {:url "", :id -1}})

(def v (into [] (repeat 5 (empty-sith-template))))
(set-default-in-deque! (empty-sith-template))
(def siths (new-deque v))

(def app-db
  {:siths siths
   :requests {:up nil, :down nil}
   :planet {:id -1, :name ""}})

(s/validate schema app-db)
