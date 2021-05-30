(ns pg.views.about
  (:require
   [pg.views.components :as c]
   [reagent-material-ui.components :as mui]))

;; Blog以外はベタ書きする

(defn About []
  [:<>
   [c/Title "About"]
   [c/SubTitle "略歴"]
   [c/Text
    [:<>
     "2015/4~2021/3　金沢大学医薬保健学域医学類"
     [:br]
     "2021/4~現在　　株式会社トヨクモ"]]
   [c/SubTitle "なぜこの業界を選んだのか？"]
   [c/Text
    [:<>
     "=> "
     [mui/link {:href "#"}
      "就活体験記"]]]
   [c/SubTitle "興味のあること"]
   [c/Text
    [:ul
     [:li "Lisp言語族全般"
      [:ul
       [:li "Common Lisp"]
       [:li "Clojure/ClojureScript"]
       [:li "Scheme"]]]
     [:li "Web技術全般"
      [:ul
       [:li "新しいもの"]
       [:li "効率化"]
       [:li "より使いやすいもの・親しみやすいもの(UX)"]]]]]])
