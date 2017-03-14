(ns figwheel.connect (:require [popto-ui.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:5309/figwheel-ws"})

