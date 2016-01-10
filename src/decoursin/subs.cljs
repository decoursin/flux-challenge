(ns decoursin.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]
            [decoursin.deque :refer [new-deque]]
            [schema.core :as s]
            [decoursin.db :as db]
            [clojure.walk :refer [keywordize-keys]]
            [reagent.ratom :refer [make-reaction]]))

(re-frame/register-sub
 :siths
 (fn [db [_]]
   (reaction
    (let [siths (:siths @db)
          planet (:name (:planet @db))]
      (into (new-deque)
            (map (fn [sith]
                   (if (= planet (get-in sith [:homeworld :name]))
                     (assoc sith :obi-wan-is-here true)
                     sith)))
            siths)))))

(re-frame/register-sub
 :planet
 (fn [db [_]]
   (reaction (:planet @db))))

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
   (let [siths (re-frame/subscribe [:siths])]
     (s/validate [db/Sith] @siths)
     (reaction
      (println "disable-up-button?")
      (if (or (not (empty? (sequence sith-without-an-apprentice @siths)))
              (some :obi-wan-is-here @siths))
        true
        false)))))

(re-frame/register-sub
 :disable-down-button?
 (fn [db [_]]
   (let [siths (re-frame/subscribe [:siths])]
     (reaction
      (println "disable-down-button?: " @siths)
       ;; some will work?
       ;; or if siths is empty
       ;; siths is no longer a deque?
      (if (or (not (empty? (sequence sith-without-a-master @siths)))
              (some :obi-wan-is-here @siths))
        true
        false)))))
