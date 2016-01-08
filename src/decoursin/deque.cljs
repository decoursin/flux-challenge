(ns decoursin.deque
  (:require [schema.core :as s]))

;; TODO: rename top/front and back/bottom
(defprotocol IDeque
  (-push-front [this a] "push a onto the front")
  (-push-back [this a] "push a onto the back")
  (-pop-front [this] "pop the first element")
  (-pop-back [this] "pop the last element")
  (push-up [this] "push the deque up, removing top, adding default to the bottom")
  (push-down [this] "push the deque down, removing bottom, adding default to top"))
(defprotocol ISith
  (assoc-sith [this k v])
  (empty-at-location? [this location] "test whether or not there's a sith at location")
  (set-direction [this direction] "set the :direction entry for each sith in v")
  (is-empty? [this] "true if all 5 elements are empty")
  (get-first-non-empty-sith [this direction] "first sith from bottom or top, depending on direction"))

(def default (atom))

(defn set-default-in-deque!
  [a]
  (reset! default a))

(defn deque
  [v]
  (let [v (if (vector? v)
            v
            (into [] v))]
    (specify v
             IDeque
             (-push-front [this x]
               (println "-push-front")
               (deque (into [x] this)))
             (-push-back [this x]
               (println "-push-back")
               (deque (into [] (conj this x))))
             (-pop-front [this]
               (println "-pop-front")
               (deque (into [] (drop 1 this))))
             (-pop-back [this]
               (println "-pop-back")
               (deque (into [] (drop-last 1 this))))
             (push-down [this]
               (println "push-down")
               (assert (= 5 (count this)) (str "count is not 5: " this))
               (-> this
                   (-pop-back)
                   (-push-front @default)))
             (push-up [this]
               (println "push-up")
               (assert (= 5 (count this)) (str "count is not 5: " this))
               (-> this
                   (-pop-front)
                   (-push-back @default)))
             ISith
             (assoc-sith [this k value]
               (println "assoc-sith: " k value)
               (if (and (<= k 4) (>= k 0))
                 (deque (into [] (assoc v k value)))
                 this))
             (empty-at-location? [this location]
               (println "empty at location?: " location)
               (println "name at this location? " (get-in this [location :name]))
               ;; location should be 0 <= location <= 4
               (if (and (>= location 0) (<= location 4))
                 (do
                   (println "true or false: " (empty? (get-in this [location :name])))
                   (empty? (get-in this [location :name])))
                 (do
                   (println "true or false: " false)
                   false)))
             (set-direction [this direction]
               (println "set-direction: " direction)
               (deque (mapv #(assoc % :direction direction) this)))
             (is-empty? [this]
               (and
                (empty-at-location? this 0)
                (empty-at-location? this 1)
                (empty-at-location? this 2)
                (empty-at-location? this 3)
                (empty-at-location? this 4)))
             (get-first-non-empty-sith [this direction]
               (println "get-first-non-empty-sith, direction: " direction)
               (let [coll (if (= :down direction)
                            (reverse this)
                            this)]
                 (first (keep-indexed (fn [i m] (when (not-empty (:name m)) [m i])) coll))))
             )))
