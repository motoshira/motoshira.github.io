(ns pg.events
  (:require
   [pg.db :refer [init-db]]
   [pg.route :as pg.r]
   [re-frame.core :as rf]
   [reitit.core :as r]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (assoc init-db
          :route ::pg.r/home)))

(rf/reg-event-fx
 ::set-current-route
 [rf/trim-v]
 (fn [{:keys [:db]} [route]]
   (.log js/console (str "route:"
                         (:route db)
                         " -> "
                         route))
   {:db (assoc db :route route)}))
