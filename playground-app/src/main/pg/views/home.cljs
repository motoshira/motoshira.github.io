(ns pg.views.home
  (:require
   [reagent-material-ui.components :as mui]
   [pg.views.components :as c]
   [pg.route :as pg.r]
   [pg.events :as pg.e]
   [pg.util.re-frame :refer [>evt]]))

(defn Home
  [_]
  [:<>
   [c/SubTitle "コンテンツ"]
   [:ul
    (for [[label route-kw] [["About" ::pg.r/about]
                            ["Works" ::pg.r/works]
                            ["Links" ::pg.r/links]]]
      [mui/link {:key label
                 :href "#"
                 :on-click (fn [e]
                            (.preventDefault e)
                             (>evt [::pg.e/navigate route-kw]))}
       [c/Text label]])]])
