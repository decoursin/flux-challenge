(ns verbling.my-deque
  (:require [clojure.pprint :refer [pprint]]))

(declare deque)
  ;; (:require [verbling.db :refer [empty-sith-template]]))

(defprotocol IListable
  (to-list [this] "returns list verison of this."))
(defprotocol IDeque
  (push-front [this a] "insert element at front")
  (push-back [this a] "insert element at back")
  (pop-front [this] "remove element at front")
  (pop-back [this] "remove element at back")
  (front [this] "get the first element")
  (back [this] "get the last element")
  (deque-empty? [this] "is this empty?"))

(deftype Deque [v]
  IListable
  (to-list [this]
    (println "to-list")
    (pprint this)
    (apply list this))
  IDeque
  (push-front [this a]
    (println "push front")
    (deque (into [a] v)))
  (push-back [this a]
    (println "push back")
    (deque (conj v a)))
  (pop-front [this]
    (println "pop-front")
    (deque (into [] (drop 1 v))))
  (pop-back [this]
    (println "pop-back")
    (deque (into [] (drop-last 1 v))))
  (deque-empty? [this]
    (println "deque-empty?")
    (zero? (count v)))
  clojure.lang.ISeq
  (first [this]
    (println "first")
    (if (.deque-empty? this) nil
        (this 0)))
  (next [this]
    (println "next")
    (if (.deque-empty? this) nil
        (.pop-front this)))
  (more [this]
    (println "more")
    (if (.deque-empty? this)
        (.empty this)
        (.pop-front this)))
  clojure.lang.IPersistentCollection
  (empty [this]
    (println "empty")
    (Deque. []))
  (equiv [this that]
    ; called by =
    (println "equiv")
    (and (instance? Deque that)
         (= (.count this) (.count this))
         (loop [i (dec (.count this))]
           (or (< i 0)
               (and (= (this i) (that i))
                    (recur (dec i)))))))
  clojure.lang.Seqable
  (seq [this]
    (println "seq")
    (if (.deque-empty? this) nil
        (seq v)))
  clojure.lang.IFn
  (invoke [this index]
    (println "invoke " index)
    (if (< index (count v))
      (v index)))
  clojure.lang.ILookup
  (valAt [this index]
    (println "valAt " index)
    (this index))
  clojure.lang.Indexed
  (nth [this index]
    (println "nth " index)
    (.valAt this index))
  )

(defn deque [v]
  (Deque. v))

(def d (deque [3 4 5 6]))
(.pop-front d)
;; (.push-front d 1)

;; (.to-list d)
