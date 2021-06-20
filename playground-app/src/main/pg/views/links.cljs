(ns pg.views.links
  (:require
   [pg.views.components :as c]))

(defn Links []
  [:<>
   [c/Title "Links"]
   [c/Text
    [:ul
     [:li "Github: "]
     [:li "Twitter: "]]]])
