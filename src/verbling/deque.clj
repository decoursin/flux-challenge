(ns verbling.deque)

(defprotocol IListable
  (-to-list [this] "returns list version of this."))
(defn to-list [coll] (-to-list coll))
(defprotocol IDeque
  (-singleton! [this a] "sets this with single element")
  (-push-front! [this a] "insert element at front")
  (-push-back! [this a] "insert element at back")
  (-pop-front! [this] "remove element at front")
  (-pop-back! [this] "remove element at back")
  (-empty! [this] "remove all elements")
  (-front [this] "get the first element")
  (-back [this] "get the last element"))
(defn singleton! [coll a] (-singleton! coll a))
(defn push-front! [coll a] (-push-front! coll a))
(defn push-back! [coll a] (-push-back! coll a))
(defn pop-front! [coll] (-pop-front! coll))
(defn pop-back! [coll] (-pop-back! coll))
(defn empty! [coll] (-empty! coll))
(defn front [coll] (-front coll))
(defn back [coll] (-back coll))

(defrecord DoublyLinkedNode [prev next data])

(deftype Deque [first-node last-node]
  IListable
  (-to-list [this]
    (println "to-list")
    (loop [node @last-node
           acc '()]
      (if (nil? node) acc
        (let [{prev :prev data :data} node]
          (recur @prev (cons data acc))))))
  IDeque
  (-singleton! [this a]
    (println "singleton!")
    (let [one-node (DoublyLinkedNode. (atom nil) (atom nil) a)]
      (reset! first-node one-node)
      (reset! last-node one-node)
      this))
  (-push-back! [this a]
    (println "push-back!")
    (if (empty? this)
      (-singleton! this a)
      (let [new-last-node (DoublyLinkedNode. (atom @last-node) (atom nil) a)
            {next-node :next} @last-node]
        (reset! next-node new-last-node)
        (reset! last-node new-last-node)
        this)))
  (-push-front! [this a]
    (println "push-front!")
    (if (empty? this)
      (-singleton! this a)
      (let [new-first-node (DoublyLinkedNode. (atom nil) (atom @first-node) a)
            {prev-node :prev} @first-node]
        (reset! prev-node new-first-node)
        (reset! first-node new-first-node)
        this)))
  (-pop-front! [this]
    (println "pop-front!")
    (if (empty? this)
      (throw (js/Error. "Can't pop-front an empty deque"))
      (let [new-first-node @(get @first-node :next)]
        (if (nil? new-first-node)
          (-empty! this)
          (do (reset! (get new-first-node :prev) nil)
              (reset! first-node new-first-node)
              this)))))
  (-pop-back! [this]
    (println "pop-back!")
    (if (empty? this)
      (throw (js/Error. "Can't pop-back an empty deque"))
      (let [new-last-node @(get @last-node :prev)]
        (if (nil? new-last-node)
          (-empty! this)
          (do (reset! (get new-last-node :next) nil)
              (reset! last-node new-last-node)
              this)))))
  (-empty! [this]
    (println "empty!")
    (reset! first-node nil)
    (reset! last-node nil)
    this)
  (-front [this]
    (println "front")
    (get @first-node :data))
  (-back [this]
    (println "back")
    (get @last-node :data))
  ISeq
  (-first [this]
    (println "first")
    (if (empty? this) nil
      (get @first-node :data)))
  (-rest [this]
    (println "rest")
    (if (empty? this) '()
      (rest (-to-list this))))
  ICollection
  (-conj [this a]
    (println "conj")
    (-push-back! this a))
  ISeqable
  (-seq [this]
    (println "seq")
    (if (nil? @first-node) nil
      this))
  Object
  (toString [this]
    (println "toString")
    (str (-to-list this)))
)

(defn deque [& lst]
  (into (Deque. (atom nil) (atom nil)) lst))
