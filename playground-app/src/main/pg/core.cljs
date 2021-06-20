(ns pg.core
  (:require
   [pg.views.core :as pg.v]
   [pg.route :as pg.r]
   [pg.config :as config]
   [pg.util.re-frame :refer [>evt <sub]]
   [re-frame.core :as rf]
   [pg.subs :as pg.s]
   [pg.events :as pg.e]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [reitit.core :as reitit]
   [reitit.frontend.easy :as rfe]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(def ^:private fn-compiler
  (r/create-compiler {:function-components true}))

(defn render-components! []
  (rdom/render [pg.v/MainComponent]
               (.getElementById js/document "root")
               fn-compiler))

(defn ^:export init []
  "Entry point"
  (rf/dispatch-sync [::pg.e/initialize-db])
  (dev-setup)
  (rfe/start! pg.r/route
              (fn [_ m]
                (println (str "match: " m)))
              {:use-fragment true})
  (render-components!))

(defn ^:dev/after-load refresh-components! []
  (render-components!)
  (.log js/console "Refresh components completed."))
