(defproject popto "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.89" :scope "provided"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.24"]
                 [log4j/log4j "1.2.17" :exclusions [javax.mail/mail
                                                    javax.jms/jms
                                                    com.sun.jmdk/jmxtools
                                                    com.sun.jmx/jmxri]]
                 [org.clojure/java.jdbc "0.6.1"]
                 [http-kit "2.2.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-devel "1.1.8"]
                 [bk/ring-gzip "0.2.1"]
                 [compojure "1.5.2"]
                 [environ "1.1.0"]
                 [buddy/buddy-auth "1.4.1"]
                 [buddy/buddy-hashers "1.2.0"]
                 [cheshire "5.7.0"]
                 [cljsjs/react "15.4.2-1"]
                 [cljsjs/react-dom "15.4.2-1"]
                 [sablono "0.7.7"]
                 [org.omcljs/om "1.0.0-alpha48"]
                 [prismatic/dommy "1.1.0"]
                 [hipo "0.5.2"]]
  :plugins [[lein-ring "0.11.0"]
            [lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.5"]]
  ; migration to http-kit disable lein-ring configuration
  ;:ring {:handler popto.app/startup
  ;       :init    popto.app/init
  ;       :port 8080}
  :uberjar-name "popto.jar"
  :main popto.app
  :env {:currently "prod"}
  :source-paths ["src" "src-ui"]
  :repl-options {:init-ns user}
  :cljsbuild {
              :builds [{:id "app"
                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-ui"]
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :figwheel true
                        :compiler {:main popto-ui.app
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}
                        }]}
  :figwheel {
             :http-server-root "public" ;; this will be in resources/
             :server-port 5309          ;; default is 3449
             :server-ip   "0.0.0.0"     ;; default is "localhost"

             ;; CSS reloading (optional)
             ;; :css-dirs has no default value
             ;; if :css-dirs is set figwheel will detect css file changes and
             ;; send them to the browser
             :css-dirs ["resources/public/css"]

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server
             :ring-handler user/http-handler
             }
  :profiles {
             :dev {:env {:currently "dev"}
                   :dependencies [[org.clojure/tools.nrepl "0.2.12"]
                                  [ring/ring-mock "0.3.0"]
                                  [com.h2database/h2 "1.4.192"]
                                  [figwheel "0.5.4-4"]
                                  [figwheel-sidecar "0.5.4-4"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.12"]]

                   :plugins [[lein-figwheel "0.5.4-4"]]
                   :source-paths ["dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   }
             :uberjar {:aot :all}
             }
  )
