(ns popto.app
  (:use [org.httpkit.server :only [run-server]])
  (:require  [clojure.tools.logging :as log]
             [compojure.core :refer :all]
             [compojure.route :as route]
             [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
             [ring.util.response :refer [response redirect]]
             [ring.middleware.reload :as reload]
             [ring.middleware.gzip :refer [wrap-gzip]]
             [environ.core :refer [env]]
             [buddy.core.nonce :as nonce]
             [buddy.auth.backends :as backends]
             [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
             [buddy.auth :refer [authenticated? throw-unauthorized]]
             [buddy.auth.accessrules :refer [restrict]]
             [buddy.sign.jwt :as jwt]
             [buddy.hashers :as hashers]
             [cheshire.core :as json])
  (:gen-class))

(def secret (nonce/random-bytes 32))
(def users {"admin" {:username "admin"
                     :hashed-password (hashers/encrypt "adminpass")
                     :roles #{:user :admin}}
            "user"  {:username "user"
                     :hashed-password (hashers/encrypt "userpass")
                     :roles #{:user}}})

(defn is-admin [{user :identity :as req}]
  (let []
    (.println System/out user)
    (contains? (apply hash-set (:roles user)) "admin")))
(defn admin-view [req]
  (response "ADMINS ONLY......aa...."))

(defn lookup-user [username password]
  (if-let [user (get users username)]
    (if (hashers/check password (get user :hashed-password))
      (dissoc user :hashed-password))))

(defn do-login [request]
  (let [username (get-in request [:form-params "username"])
        password (get-in request [:form-params "password"])]
    (if-let [user (lookup-user username password)]
      {:body (json/encode {:token (jwt/sign user "test")})}
      (redirect "/ui/login"))))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/ui/login" _ "login page..")
  (POST "/api/login" [] do-login)
  (GET "/ui/admin" [] (restrict admin-view {:handler is-admin :on-error (fn [req _] (redirect "/ui/login"))}))
  (route/not-found "Not Found"))

(def auth-backend (backends/jws {:secret "test"
                                 :token-name "i-Token"}))

(def disableCSRF (assoc-in site-defaults [:security :anti-forgery] false))

(def startup
  (->
      (if (= (env :currently) "dev")
                   (reload/wrap-reload (wrap-defaults app-routes disableCSRF))
                   (wrap-defaults app-routes disableCSRF))
      (wrap-authentication auth-backend)
      (wrap-authorization auth-backend)
      wrap-gzip
      ))

(defn init []
  (do
    (log/info "popto initialized...")
    (.println System/out "popto initialized...")))

(defn -main [& args]
    (do
      (init)
      (run-server startup {:port 3000})))