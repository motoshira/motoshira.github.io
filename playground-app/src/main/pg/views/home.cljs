(ns pg.views.home
  (:require
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
      ^{:key label}
      [:li [:a {:href "#"
                :on-click (fn [e]
                            (.preventDefault e)
                            (>evt [::pg.e/navigate route-kw]))}
            [c/Text label]]])]])
