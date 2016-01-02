(ns verbling.my-deque-test
  (:require [clojure.test :refer :all]
            [verbling.my-deque :refer :all])
  (:import [verbling.my_deque Deque]))

(def v [2 3 4 5])
(def dq (deque [2 3 4 5]))

(deftest create-empty-deque
  (is (= verbling.my_deque.Deque (class (deque [])))))

(deftest to-list-test
  (is (= v (.to-list dq))))

(deftest push-front-test
  (is (= '(1 2 3 4 5) (.to-list (.push-front dq 1)))))

(deftest push-back-test
  (println ".pop-back: " (.pop-back dq))
  (println "class .pop-back: " (class (.pop-back dq)))
  (println "class .pop-back: " (class (drop 1 v)))
  (is (= '(2 3 4 5 6) (.to-list (.push-back dq 6)))))

(deftest pop-front-test
  (println ".pop-front: " (.pop-front dq))
  (println "class .pop-front: " (class (.pop-front dq)))
  (println "class .pop-front: " (class (drop 1 v)))
  (is (= (drop 1 v) (.pop-front dq))))

(deftest pop-back-test
  (is (= (drop-last 1 v) (.pop-back dq))))
