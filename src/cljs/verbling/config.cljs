(ns verbling.config
  (:require [schema.core :as s]))

(def debug?
  ^boolean js/goog.DEBUG)

(when debug?
  (enable-console-print!))

(s/set-fn-validation! true)
