(ns popto-ui.app
  (:require
    [hipo.core :as hipo]
    [dommy.core :as dommy :refer-macros [sel1]]
    ;[goog.dom :as gdom]
    ;[om.next :as om :refer-macros [defui]]
    ;[om.dom :as dom]
    ))
(def dotsters ["blue" "red" "green" "penta" "star" "triangle" "yellow"])
(defn render-background []
  (dommy/append! (.-body js/document) (hipo/create [:div.game-canvas])))

(defn draw-dotsters [dotsters-style]
  (hipo/create [:div {:class (str "dotsters " dotsters-style)}])
  )

(defn init []
  (do
    (render-background)
    (let [drawer (partial dommy/append! (sel1 ".game-canvas"))]
      (apply drawer (map draw-dotsters (for [i (range 36)] (rand-nth dotsters))))
      )
    ))

(set! (.-onload js/window) init)
