(ns pg.events
  (:require
   [pg.db :refer [init-db]]
   [pg.route :as pg.r]
   [pg.util.reitit :as u.r]
   [accountant.core :as acc]
   [re-frame.core :as rf]
   [reitit.core :as r]
   [reitit.frontend.easy :as rfe]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   (assoc init-db
          :route ::pg.r/home)))

(rf/reg-fx
 :push-state!
 (fn [route-kw]
   (rfe/push-state route-kw)))

(rf/reg-fx
 :logger
 (fn [kw]
   (.log js/console
         (str kw
              " dispatched"))))

(rf/reg-event-fx
 ::push-state
 [rf/trim-v]
 (fn [{:keys [:db]} [route-kw]]
   {:db db
    :logger ::push-state
    :push-state! route-kw}))

;; viewsからはこれを呼ぶ

(rf/reg-event-fx
 ::navigate
 [rf/trim-v]
 (fn [{:keys [:db]} [route-kw]]
   {:db (assoc db
               :route route-kw)
    :dispatch [::push-state route-kw]
    :logger ::mavigate}))
