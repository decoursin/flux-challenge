(ns verbling.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]
              [verbling.db :refer [sith-db]]))

(re-frame/register-sub
 :siths
 (fn [db [_]]
   (reaction @sith-db)))
    ;; (map #(assoc % :name "therenow") @sith-db))))
