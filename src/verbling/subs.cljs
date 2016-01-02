(ns verbling.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :siths
 (fn [db [_]]
   (reaction (:siths @db))))
    ;; (map #(assoc % :name "therenow") @sith-db))))
