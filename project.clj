(defproject popto "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.24"]
                 [log4j/log4j "1.2.17" :exclusions [javax.mail/mail
                                                    javax.jms/jms
                                                    com.sun.jmdk/jmxtools
                                                    com.sun.jmx/jmxri]]
                 [http-kit "2.2.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-devel "1.1.8"]
                 [bk/ring-gzip "0.2.1"]
                 [compojure "1.5.2"]
                 [environ "1.1.0"]
                 [buddy/buddy-auth "1.4.1"]
                 [buddy/buddy-hashers "1.2.0"]
                 [cheshire "5.7.0"]]
  :plugins [[lein-ring "0.11.0"]
            [lein-environ "1.1.0"]]
  ; migration to http-kit disable lein-ring configuration
  ;:ring {:handler popto.app/startup
  ;       :init    popto.app/init
  ;       :port 8080}
  :uberjar-name "popto.jar"
  :main popto.app
  :env {:currently "prod"}
  :profiles {
             :dev {:env {:currently "dev"}
                   :dependencies [[org.clojure/tools.nrepl "0.2.12"]
                                  [ring/ring-mock "0.3.0"]
                                  ]}

             :uberjar {:aot :all}
             }
  )
