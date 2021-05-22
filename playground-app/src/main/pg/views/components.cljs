(ns pg.views.components
  "各ページで共通のコンポーネント"
  (:require
   [pg.events :as events]
   [pg.route :as route]
   [pg.util.reitit :as u.r]
   [pg.util.re-frame :refer [>evt]]
   [reagent.core :as r]
   [reagent-material-ui.components :as mui]
   [reagent-material-ui.styles :as styles]))

;; ナビ

(defn Link
  ([props text]
   [mui/link props
    text])
  ([text] (Link nil text)))

(defn- navigate! [path]
  (>evt [::events/set-current-route (u.r/match-path route/route path)]))

(def ^:private navbar-styles
  (styles/make-styles
   {:root {:justify-content :space-between}
    :title {:color :inherit}
    :button {:align-self :center
             :color :inherit}}))

(defn NavBar []
  (let [classes (navbar-styles)]
    [:<>
     [mui/app-bar {:position :fixed}
      [mui/toolbar {:class-name (:root classes)}
       [Link {:variant "h6"
              :class-name (:title classes)
              :on-click #(navigate! :home)}
        "Playground"]
       [mui/grid {:xs 6
                  :container true
                  :justify :flex-end}
        ;; TODO: Linkの追加
        (for [[label path] [["About" "/about"]
                            ["Works" "/works"]
                            ["links" "/links"]]]
          ^{:key label}
          [mui/grid {:item true}
           [mui/button {:class-name (:button classes)
                        :key label
                        :on-click #(navigate! path)}
            label]])]]]
     ;; スペース確保
     [mui/toolbar]]))

(def ^:private root-styles
  (styles/make-styles
   {:root {:height "100vh"
           :width "100vw"}}))

(defn RootComponent
  [& children]
  (let [classes (root-styles)]
    [:div {:class-name (:root classes)}
     [NavBar]
     children]))
