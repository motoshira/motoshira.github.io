(ns pg.core
  (:require
   [pg.views :as pg.v]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(def ^:private fn-compiler
  (r/create-compiler {:function-components true}))

(defn- MainComponent []
  [:div "Hello!"])

(defn ^:export init
  []
  "Entry point"
  (rdom/render [pg.v/MainComponent]
               (.getElementById js/document "root")
               fn-compiler))
