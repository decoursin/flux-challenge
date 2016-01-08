(ns decoursin.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]
              [reagent.ratom :refer [make-reaction]]))

(re-frame/register-sub
 :siths
 (fn [db [_]]
   (reaction (:siths @db))))

(re-frame/register-sub
 :planet
 (fn [db [_]]
   (reaction (:planet @db))))

;; (defn no-more-sith?
;;   [sith]
;;   (cond
;;     (nil? (get-in sith [:apprentice :id])) :up
;;     (nil? (get-in sith [:master :id])) :down
;;     :else false))

(defn is-a-sith
  "if the sith's :name is not the empty string,
   then s/he is a sith"
  [sith]
  (when-not (empty? (:name sith))
    sith))

(defn has-no-apprentice [sith]
  (when (nil? (get-in sith [:apprentice :id]))
    sith))

(defn has-no-master [sith]
  (when (nil? (get-in sith [:master :id]))
    sith))

(def sith-without-an-apprentice (comp (keep is-a-sith) (keep has-no-apprentice)))
(def sith-without-a-master (comp (keep is-a-sith) (keep has-no-master)))

(re-frame/register-sub
 
 :disable-up-button?
 (fn [db [_]]
   (reaction
    (let [siths (:siths @db)]
      (println "disable-up-button?")
      (if (not (empty? (sequence sith-without-an-apprentice siths)))
        true
        false)))))

(re-frame/register-sub
 :disable-down-button?
 (fn [db [_]]
   (reaction
    (let [siths (:siths @db)]
      (println "disable-down-button?")
      (if (not (empty? (sequence sith-without-a-master siths)))
        true
        false)))))

(re-frame/register-sub
 :freeze)
