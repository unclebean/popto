(ns popto.dao.db-handler
  (:require [clojure.java.jdbc :as sql]))

(def db {:classname "org.h2.Driver"
         :subprotocol "h2"
         :subname "./devDB"})

(defn migrate []
  ; initial database DDL
  ; excute sql to create tabls
  )

(defn get-roles []
  ; get all roles
  )

(defn get-user-by-id [])


