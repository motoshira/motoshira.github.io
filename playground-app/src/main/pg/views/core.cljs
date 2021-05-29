(ns pg.views.core (:require
   [pg.util.re-frame :refer [>evt <sub]]
   [pg.route :as pg.r]
   [pg.subs :as pg.s]
   [pg.views.components :as pg.comp]
   [pg.views.home :refer [Home]]
   [pg.views.about :refer [About]]
   [pg.views.works :refer [Works]]
   [pg.views.links :refer [Links]]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]))

(defmulti Contents identity)

(defmethod Contents ::default
  [_]
  [:div "Not found"])

(defmethod Contents ::pg.r/home
  [_]
  [Home])

(defmethod Contents ::pg.r/about
  [_]
  [About])

(defmethod Contents ::pg.r/works
  [_]
  [Works])

(defmethod Contents ::pg.r/links
  [_]
  [Links])

(defn MainComponent
  []
  [pg.comp/RootComponent
   (let [route (<sub [::pg.s/current-route])]
     [Contents route])])
