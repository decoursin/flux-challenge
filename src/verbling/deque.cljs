(ns verbling.deque
  (:require [schema.core :as s]))

;; TODO: rename top/front and back/bottom
(defprotocol IDeque
  (-push-front [this a] "push a onto the front")
  (-push-back [this a] "push a onto the back")
  (-pop-front [this] "pop the first element")
  (-pop-back [this] "pop the last element")
  (push-up [this] "push the deque up, removing top, adding default to the bottom")
  (push-down [this] "push the deque down, removing bottom, adding default to top")
  (push-front-and-pop-back [this a])
  (push-back-and-pop-front [this a]))
(defprotocol ISith
  (assoc-sith [this k v])
  (empty-at-location? [this location] "test whether or not there's a sith at location"))

  ;; IDeque
  ;; (pop-front [this]
  ;;            (println)))

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
               (push-front-and-pop-back this @default))
             (push-up [this]
               (println "push-up")
               (push-back-and-pop-front this @default))
             (push-back-and-pop-front [this x]
               (println "push-back-and-pop-front")
               (let [d (-push-back this x)
                     d (-pop-front d)]
                 (deque (into [] d))))
             (push-front-and-pop-back [this x]
               (println "push-front-and-pop-back")
               (let [d (-push-front this x)  
                     d (-pop-back d)]
                 (deque (into [] d))))
             ISith
             (assoc-sith [this k value]
               (println "assoc-sith")
               (deque (into [] (assoc v k value))))
             (empty-at-location? [this location]
               ;; location should be 0 <= location <= 5
               (println "empty at location?: " location)
               (println "name at this location? " (get-in this [location :name]))
               (println "true or false? " (empty? (get-in this [location :name])))
               (empty? (get-in this [location :name])))
             )))
