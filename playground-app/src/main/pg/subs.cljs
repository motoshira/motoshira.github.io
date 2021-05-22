(ns pg.subs
  (:require
   [re-frame.core :as rf]))


(rf/reg-sub
 ::current-route
 (fn [db _]
   (:route db)))
