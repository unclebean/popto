// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35912){
var map__35937 = p__35912;
var map__35937__$1 = ((((!((map__35937 == null)))?((((map__35937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35937):map__35937);
var m = map__35937__$1;
var n = cljs.core.get.call(null,map__35937__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35939_35961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35940_35962 = null;
var count__35941_35963 = (0);
var i__35942_35964 = (0);
while(true){
if((i__35942_35964 < count__35941_35963)){
var f_35965 = cljs.core._nth.call(null,chunk__35940_35962,i__35942_35964);
cljs.core.println.call(null,"  ",f_35965);

var G__35966 = seq__35939_35961;
var G__35967 = chunk__35940_35962;
var G__35968 = count__35941_35963;
var G__35969 = (i__35942_35964 + (1));
seq__35939_35961 = G__35966;
chunk__35940_35962 = G__35967;
count__35941_35963 = G__35968;
i__35942_35964 = G__35969;
continue;
} else {
var temp__4657__auto___35970 = cljs.core.seq.call(null,seq__35939_35961);
if(temp__4657__auto___35970){
var seq__35939_35971__$1 = temp__4657__auto___35970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35939_35971__$1)){
var c__29192__auto___35972 = cljs.core.chunk_first.call(null,seq__35939_35971__$1);
var G__35973 = cljs.core.chunk_rest.call(null,seq__35939_35971__$1);
var G__35974 = c__29192__auto___35972;
var G__35975 = cljs.core.count.call(null,c__29192__auto___35972);
var G__35976 = (0);
seq__35939_35961 = G__35973;
chunk__35940_35962 = G__35974;
count__35941_35963 = G__35975;
i__35942_35964 = G__35976;
continue;
} else {
var f_35977 = cljs.core.first.call(null,seq__35939_35971__$1);
cljs.core.println.call(null,"  ",f_35977);

var G__35978 = cljs.core.next.call(null,seq__35939_35971__$1);
var G__35979 = null;
var G__35980 = (0);
var G__35981 = (0);
seq__35939_35961 = G__35978;
chunk__35940_35962 = G__35979;
count__35941_35963 = G__35980;
i__35942_35964 = G__35981;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35982 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28381__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35982);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35982)))?cljs.core.second.call(null,arglists_35982):arglists_35982));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35943_35983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35944_35984 = null;
var count__35945_35985 = (0);
var i__35946_35986 = (0);
while(true){
if((i__35946_35986 < count__35945_35985)){
var vec__35947_35987 = cljs.core._nth.call(null,chunk__35944_35984,i__35946_35986);
var name_35988 = cljs.core.nth.call(null,vec__35947_35987,(0),null);
var map__35950_35989 = cljs.core.nth.call(null,vec__35947_35987,(1),null);
var map__35950_35990__$1 = ((((!((map__35950_35989 == null)))?((((map__35950_35989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35950_35989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35950_35989):map__35950_35989);
var doc_35991 = cljs.core.get.call(null,map__35950_35990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35992 = cljs.core.get.call(null,map__35950_35990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35988);

cljs.core.println.call(null," ",arglists_35992);

if(cljs.core.truth_(doc_35991)){
cljs.core.println.call(null," ",doc_35991);
} else {
}

var G__35993 = seq__35943_35983;
var G__35994 = chunk__35944_35984;
var G__35995 = count__35945_35985;
var G__35996 = (i__35946_35986 + (1));
seq__35943_35983 = G__35993;
chunk__35944_35984 = G__35994;
count__35945_35985 = G__35995;
i__35946_35986 = G__35996;
continue;
} else {
var temp__4657__auto___35997 = cljs.core.seq.call(null,seq__35943_35983);
if(temp__4657__auto___35997){
var seq__35943_35998__$1 = temp__4657__auto___35997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35943_35998__$1)){
var c__29192__auto___35999 = cljs.core.chunk_first.call(null,seq__35943_35998__$1);
var G__36000 = cljs.core.chunk_rest.call(null,seq__35943_35998__$1);
var G__36001 = c__29192__auto___35999;
var G__36002 = cljs.core.count.call(null,c__29192__auto___35999);
var G__36003 = (0);
seq__35943_35983 = G__36000;
chunk__35944_35984 = G__36001;
count__35945_35985 = G__36002;
i__35946_35986 = G__36003;
continue;
} else {
var vec__35952_36004 = cljs.core.first.call(null,seq__35943_35998__$1);
var name_36005 = cljs.core.nth.call(null,vec__35952_36004,(0),null);
var map__35955_36006 = cljs.core.nth.call(null,vec__35952_36004,(1),null);
var map__35955_36007__$1 = ((((!((map__35955_36006 == null)))?((((map__35955_36006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35955_36006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35955_36006):map__35955_36006);
var doc_36008 = cljs.core.get.call(null,map__35955_36007__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36009 = cljs.core.get.call(null,map__35955_36007__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36005);

cljs.core.println.call(null," ",arglists_36009);

if(cljs.core.truth_(doc_36008)){
cljs.core.println.call(null," ",doc_36008);
} else {
}

var G__36010 = cljs.core.next.call(null,seq__35943_35998__$1);
var G__36011 = null;
var G__36012 = (0);
var G__36013 = (0);
seq__35943_35983 = G__36010;
chunk__35944_35984 = G__36011;
count__35945_35985 = G__36012;
i__35946_35986 = G__36013;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35957 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35958 = null;
var count__35959 = (0);
var i__35960 = (0);
while(true){
if((i__35960 < count__35959)){
var role = cljs.core._nth.call(null,chunk__35958,i__35960);
var temp__4657__auto___36014__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36014__$1)){
var spec_36015 = temp__4657__auto___36014__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36015));
} else {
}

var G__36016 = seq__35957;
var G__36017 = chunk__35958;
var G__36018 = count__35959;
var G__36019 = (i__35960 + (1));
seq__35957 = G__36016;
chunk__35958 = G__36017;
count__35959 = G__36018;
i__35960 = G__36019;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35957);
if(temp__4657__auto____$1){
var seq__35957__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35957__$1)){
var c__29192__auto__ = cljs.core.chunk_first.call(null,seq__35957__$1);
var G__36020 = cljs.core.chunk_rest.call(null,seq__35957__$1);
var G__36021 = c__29192__auto__;
var G__36022 = cljs.core.count.call(null,c__29192__auto__);
var G__36023 = (0);
seq__35957 = G__36020;
chunk__35958 = G__36021;
count__35959 = G__36022;
i__35960 = G__36023;
continue;
} else {
var role = cljs.core.first.call(null,seq__35957__$1);
var temp__4657__auto___36024__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36024__$2)){
var spec_36025 = temp__4657__auto___36024__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36025));
} else {
}

var G__36026 = cljs.core.next.call(null,seq__35957__$1);
var G__36027 = null;
var G__36028 = (0);
var G__36029 = (0);
seq__35957 = G__36026;
chunk__35958 = G__36027;
count__35959 = G__36028;
i__35960 = G__36029;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489198968226