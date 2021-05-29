(ns pg.views.components
  "各ページで共通のコンポーネント"
  (:require
   ["@material-ui/core/styles" :refer [makeStyles createMuiTheme ThemeProvider]]
   [applied-science.js-interop :as j]
   [pg.events :as events]
   [pg.route :as route]
   [pg.util.reitit :as u.r]
   [pg.util.re-frame :refer [>evt]]
   [accountant.core :as acc]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]
   [reagent-material-ui.styles :as styles]))


(defn Title [text]
  [mui/typography {:variant :h3}
   text])

(def ^:private navbar-styles
  (makeStyles
   (clj->js
    {:root {:justify-content :space-between}
     :title {:color :inherit
             :font-size "18px"}
     :button {:align-self :center
              :color :inherit}})))

(defn NavBar []
  "ナビゲーションバー"
  (let [classes (navbar-styles)
        navigate! (fn [route-kw] (>evt [::events/navigate route-kw]))]
    [:<>
     [mui/app-bar {:position :fixed}
      [mui/toolbar {:class-name (j/get classes :root)}
       [mui/button {:classes {:root (j/get classes :button)
                              :label (j/get classes :title)}
                    :on-click #(navigate! ::route/home)}
        "Playground"]
       [mui/grid {:xs 6
                  :container true
                  :justify :flex-end}
        (for [[label route-kw] [["About" ::route/about]
                                ["Works" ::route/works]
                                ["links" ::route/links]]]
          ^{:key label}
          [mui/grid {:item true}
           [mui/button {:class-name (j/get classes :button)
                        :key label
                        :on-click #(navigate! route-kw)}
            label]])]]]
     ;; スペース確保
     [mui/toolbar]]))

(def ^:private theme
   "各コンポーネントで共通のテーマ"
  (createMuiTheme
   (clj->js {:typography {:button {:text-transform :none}}})))

(def ^:private root-styles
  (makeStyles
   (clj->js
    {:root {:height "100vh"
            :width "100vw"}})))

(defn RootComponent
  "全てのページのRoot"
  [& children]
  (let [classes (root-styles)]
    [:> ThemeProvider {:theme theme}
     [mui/css-baseline]
     [:div {:class-name (j/get classes :root)}
      [NavBar]
      [mui/grid {:container true
                 :direction :row
                 :justify :center
                 :align-items :center}
       [mui/grid {:item true
                  :xs 9}
        [mui/paper
         children]]]]]))
