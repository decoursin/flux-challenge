(ns verbling.handlers
    (:require [re-frame.core :as re-frame]
              [verbling.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))
