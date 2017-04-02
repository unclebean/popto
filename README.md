#### he will be a template project for all clojure base web app

###### development with repl

- lein repl
  - (-main)

###### prepare uberjar
- lein uberjar

###### unit test
- lein test

###### project dependencies 
- [org.clojure/tools.logging] 
  [org.slf4j/slf4j-log4j12] 
  [log4j/log4j]
  integrate slf4j for clojure
- [http-kit]
  high performance http server
- [ring/ring-defaults]
  some common middleware of ring
- [ring/ring-devel]
  ring dev & debug 
- [bk/ring-gzip]
  ring gzip middleware
- [compojure]
  routing library for ring
- [environ]
  provide profile base environ value
- [buddy/buddy-auth] [buddy/buddy-hashers]
  security library
- [cheshire]
  json encode & decode
  
  
#### Doing... 

- integrate om for frontend
  
  good article
  [clojurescript 101](http://swannodette.github.io/2013/11/07/clojurescript-101)
  [clojurescript cheatsheet](http://cljs.info/cheatsheet/)
  [clojurescript DOM manipulation](http://davedellacosta.com/cljs-dom-survey)


