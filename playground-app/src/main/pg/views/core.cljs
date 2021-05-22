(ns pg.views.core
  (:require
   [pg.views.components :as pg.comp]
   [pg.util.re-frame :refer [>evt <sub]]
   [pg.route :as pg.r]
   [pg.subs :as pg.s]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]
   [reagent-material-ui.styles :as styles]))

(defmulti Contents identity)

;; About

(defmethod Contents ::default
  [_]
  [:div "Not found"])

(defmethod Contents ::pg.r/home
  [_]
  [:div "Welcome!"])

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
  (let [route (<sub [::pg.s/current-route])]
    (println route)
    [pg.comp/RootComponent
     [Contents route]]))
