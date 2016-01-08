(ns decoursin.dev
  (:require [figwheel.client :as fw]
            [decoursin.core :as core]))
            ;; [clojure.browser.repl :as repl]))

(fw/start {:on-jsload core/mount-root
           :websocket-url "ws://localhost:3449/figwheel-ws"})
  ;; (:require [clojure.browser.repl :as repl]))

;; (defonce conn (repl/connect "http://localhost:3449/repl"))
