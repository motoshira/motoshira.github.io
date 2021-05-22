(ns pg.util.reitit
  (:require
   [reitit.core :as r]))

(defn match-path [route path]
  (-> (r/match-by-path route path)
      :data
      :name))
