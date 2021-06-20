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
     "2021/4~　　株式会社トヨクモ"]]
   [c/SubTitle "興味のあること"]
   [c/Text
    [:<>
     [:ul
      [:li "Lisp言語族全般(Common Lisp,Clojure等)"
       [:ul
        [:li "REPLを活用した開発がとても気に入っています"]
        [:li "普段の趣味開発や競技プログラミングでも活用しています"]]]
      [:li "Web技術全般"]
      [:li "アルゴルズムを活用した計算量改善"
       [:ul
        [:li "競プロでかじった知識を開発に生かしていきたいですね(´・ω・｀)"]]]]]]])
