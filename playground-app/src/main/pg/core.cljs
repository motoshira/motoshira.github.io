(ns pg.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(def ^:private fn-compiler
  (r/create-compiler {:function-components true}))

(defn- MainComponent []
  [:div "Hello!"])

(defn ^:export init
  []
  (rdom/render [MainComponent]
               (.getElementById js/document "root")
               fn-compiler))
