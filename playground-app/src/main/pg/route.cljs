(ns pg.route
  (:require
   [pg.util.re-frame :refer [>evt]]
   [pg.util.reitit :as u.r]
   [reitit.core :as r]
   [accountant.core :as acc]))

;; ルーティング

(def ^:private route
  (r/router
   ["/"
    ["home" ::home]
    ["about" ::about]
    ["works" ::works]
    ["links" ::links]]))

(defn match-path [path]
  (u.r/match-path route path))
