(ns pg.views.works
  (:require
   [pg.views.components :as c]))

(defn Works []
  [:<>
   [c/Title "Works"]
   [c/Text "Coming Soon..."]])
