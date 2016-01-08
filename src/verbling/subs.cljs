(ns verbling.subs
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

(defn no-more-sith?
  [sith]
  (cond
    (nil? (get-in sith [:apprentice :id])) :up
    (nil? (get-in sith [:master :id])) :down
    :else false))

;; (defn siths-contain-bottom-most-sith [siths]
;;   (first (bottom-most-sith? siths))
  ;; (first (transduce (keep bottom-most-sith?) )))
;; (def siths-contain-top-most-sith)

(defn is-a-sith? [sith]
  (:name sith))
  ;; (if (not (nil? (:name sith)))
  ;;   true
  ;;   nil))

(defn has-an-apprentice? [sith]
  (get-in sith [:apprentice :id]))

(defn has-a-master? [sith]
  (get-in sith [:apprentice :id]))

(def sith-without-a-apprentice (comp (keep is-a-sith?) (keep has-an-apprentice?)))
(def sith-without-a-master (comp (keep is-a-sith?) (keep has-a-master?)))

(re-frame/register-sub
 :disable-up-button?
 (fn [db [_]]
   (reaction
    (let [siths (:siths @db)
          not-nil? (complement nil)]
      (println "disable-down-button?")
      (if (not (empty? (sequence sith-without-a-apprentice siths)))
        true
        false)))))
      ;; (println "disable-up-button?")
      ;; (if ())
      ;; (or
      ;;  (first
      ;;   (keep #(when (and (not-nil? (:name sith))
      ;;                     (nil? (get-in % [:apprentice :id])))
      ;;            true) siths))
      ;;  false)))))

(re-frame/register-sub
 :disable-down-button?
 (fn [db [_]]
   (reaction
    (let [siths (:siths @db)]
      (println "disable-down-button?")
      (if (not (empty? (sequence sith-without-a-master siths)))
        true
        false)))))
      ;; (or
      ;;  (first (keep #(when (nil? (get-in % [:master :id])) true) siths))
      ;;  false)))))
