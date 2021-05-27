(ns pg.views.core
  (:require
   [pg.util.re-frame :refer [>evt <sub]]
   [pg.route :as pg.r]
   [pg.subs :as pg.s]
   [pg.views.components :as pg.comp]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]))

(defmulti Contents identity)

(defmethod Contents ::default
  [_]
  [:div "Not found"])

(defmethod Contents ::pg.r/home
  [_]
  [:div "Welcome!"])

;; About

(defmethod Contents ::pg.r/about
  [_]
  [:div "About: TODO"])

(defmethod Contents ::pg.r/works
  [_]
  [:div "Works: TODO"])

(defmethod Contents ::pg.r/links
  [_]
  [:div "Links: TODO"])

(defn MainComponent
  []
  [pg.comp/RootComponent
   (let [route (<sub [::pg.s/current-route])]
     (println route)
     [Contents route])])
