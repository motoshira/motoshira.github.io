(ns pg.core
  (:require
   [pg.views.core :as pg.v]
   [pg.route :as pg.r]
   [pg.config :as config]
   [pg.util.re-frame :refer [>evt]]
   [accountant.core :as acc]
   [re-frame.core :as rf]
   [pg.events :as pg.e]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [reitit.core :as reitit]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(def ^:private fn-compiler
  (r/create-compiler {:function-components true}))

(defn ^:export init
  []
  "Entry point"
  (rf/dispatch-sync [::pg.e/initialize-db])
  (acc/configure-navigation!
   {:nav-handler (fn [path] (>evt [::pg.e/setview-current-route (pg.r/match-path path)]))
    :path-exists? (fn [path] (boolean (reitit/match-by-path pg.r/route path)))})
  (acc/dispatch-current!)
  (dev-setup)
  (rdom/render [pg.v/MainComponent]
               (.getElementById js/document "root")
               fn-compiler))
