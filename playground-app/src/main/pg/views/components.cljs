(ns pg.views.components
  "各ページで共通のコンポーネント"
  (:require
   ["@material-ui/core/styles" :refer [makeStyles createMuiTheme ThemeProvider]]
   [clojure.string :refer [join]]
   ["@material-ui/system" :refer [spacing]]
   [applied-science.js-interop :as j]
   [pg.events :as events]
   [pg.route :as route]
   [pg.util.reitit :as u.r]
   [pg.util.re-frame :refer [>evt]]
   [accountant.core :as acc]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]))

(defn Title [text]
  [mui/box {:pt 7}
   [mui/typography {:variant :h3}
    text]])

(defn SubTitle [text]
  [mui/box {:pt 6}
   [mui/typography {:variant :h4}
    text]])

(defn Text [contents]
  [mui/box {:pt 3}
   [mui/typography contents]])

(def ^:private navbar-styles
  (makeStyles
   (clj->js
    {:root {:justify-content :space-between}
     :title {:color :inherit
             :white-space :nowrap
             :font-size "16px"}
     :container {:width "50%"}
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
                    :key "Home"
                    :on-click #(navigate! ::route/home)}
        "もとしらの遊び場"]
       [mui/grid {:container true
                  :justify :flex-end
                  :class-name (j/get classes :container)}
        (for [[label route-kw] [["About" ::route/about]
                                ["Works" ::route/works]
                                ["Links" ::route/links]]]
          [mui/grid {:key label
                     :item true
                     :xs 1}
           [mui/button {:class-name (j/get classes :button)
                        :key label
                        :on-click #(navigate! route-kw)}
            label]])]]]
     ;; スペース確保
     [mui/toolbar]]))

(def ^:private theme
   "各コンポーネントで共通のテーマ"
  (createMuiTheme
   (clj->js {:palette {:type :dark
                       :primary {:main "#03a9f4"}
                       :secondary {:main "#003676"}}
             :typography {:font-family (join ["sans-serif"]
                                             ",")

                          :button {:text-transform :none}}})))

(def ^:private root-styles
  (makeStyles
   (clj->js
    {:root {:height "100vh"
            :width "100vw"
            :overflow-x :hidden}
     :container {:height "90vh"}
     :paper {:height "100%"
             :width "100%"}})))

(defn RootComponent
  "全てのページのRoot"
  [child]
  (let [classes (root-styles)]
    [:> ThemeProvider {:theme theme}
     [mui/css-baseline]
     [:div {:class-name (j/get classes :root)}
      [NavBar]
      [mui/grid {:container true
                 :direction :row
                 :justify :center
                 :align-items :flex-start}
       [mui/grid {:item true
                  :xs 11
                  :class-name (j/get classes :container)}
        [mui/paper {:class-name (j/get classes :paper)}
         [mui/grid {:container true
                    :justify :center
                    :align-items :center}
          [mui/grid {:item true
                     :xs 10}
           child]]]]]]]))
