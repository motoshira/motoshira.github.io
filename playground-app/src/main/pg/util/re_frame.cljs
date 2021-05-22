(ns pg.util.re-frame
  (:require
   [re-frame.core :as rf]))

(defn >evt [event-v]
  (rf/dispatch event-v))

(defn <sub [query-v]
  @(rf/subscribe query-v))
