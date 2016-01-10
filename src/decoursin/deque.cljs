(ns decoursin.deque
  (:require [schema.core :as s]))

(declare deque)

(defprotocol IDeque
  (-push-front [this a] "push a onto the front")
  (-push-back [this a] "push a onto the back")
  (-pop-front [this] "pop the first element")
  (-pop-back [this] "pop the last element")
  (push-up [this] "push the deque up, removing top, adding default to the bottom")
  (push-down [this] "push the deque down, removing bottom, adding default to top"))
(defprotocol ISith
  (assoc-sith [this k sith] "just assoc, with key validation")
  (empty-at-location? [this location] "test whether or not there's a sith at location")
  (set-direction [this direction] "set the :direction entry for each sith")
  (is-empty? [this] "true if all 5 elements are empty")
  (get-first-non-empty-sith [this direction] "first non-empty sith from bottom or top, depending on direction"))

(def default (atom))

(defn set-default-in-deque!
  [a]
  (reset! default a))

(defn new-deque
  ([]
   (deque []))
  ([x-or-coll]
   (if (vector? x-or-coll)
     (deque x-or-coll)
     (deque (into [] x-or-coll)))))

;; TODO: primatic-schema this
(s/defn deque [v]
    (specify v
             IDeque
             (-push-front [this x]
               (println "deque -push-front")
               (new-deque (into [x] this)))
             (-push-back [this x]
               (println "deque -push-back")
               (new-deque (into [] (conj this x))))
             (-pop-front [this]
               (println "deque -pop-front")
               (new-deque (into [] (drop 1 this))))
             (-pop-back [this]
               (println "deque -pop-back")
               (new-deque (into [] (drop-last 1 this))))
             (push-down [this]
               (println "deque push-down")
               (assert (= 5 (count this)) (str "count is not 5: " this))
               (-> this
                   (-pop-back)
                   (-push-front @default)))
             (push-up [this]
               (println "deque push-up")
               (assert (= 5 (count this)) (str "count is not 5: " this))
               (-> this
                   (-pop-front)
                   (-push-back @default)))
             ISith
             (assoc-sith [this k sith]
               (println "deque assoc-sith: " k sith)
               (if (and (<= k 4) (>= k 0))
                 (new-deque (into [] (assoc v k sith)))
                 this))
             (empty-at-location? [this location]
               (println "deque empty at location?: " location)
               (if (and (>= location 0) (<= location 4))
                 (do
                   (empty? (get-in this [location :name])))
                 (do
                   false)))
             (set-direction [this direction]
               (println "deque set-direction | direction: " direction)
               (new-deque (mapv #(assoc % :direction direction) this)))
             (is-empty? [this]
               (println "deque is-empty?")
               (and
                (empty-at-location? this 0)
                (empty-at-location? this 1)
                (empty-at-location? this 2)
                (empty-at-location? this 3)
                (empty-at-location? this 4)))
             (get-first-non-empty-sith [this direction]
               (println "deque get-first-non-empty-sith, direction: " direction)
               (let [coll (if (= :down direction)
                            (reverse this)
                            this)]
                 (first (keep-indexed (fn [i m] (when (seq (:name m)) [m i])) coll))))
             ))
