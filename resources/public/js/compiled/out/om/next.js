// Compiled by ClojureScript 1.9.89 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__36329 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__36329,(0),null);
var vec__36332 = cljs.core.nth.call(null,vec__36329,(1),null);
var seq__36333 = cljs.core.seq.call(null,vec__36332);
var first__36334 = cljs.core.first.call(null,seq__36333);
var seq__36333__$1 = cljs.core.next.call(null,seq__36333);
var _ = first__36334;
var first__36334__$1 = cljs.core.first.call(null,seq__36333__$1);
var seq__36333__$2 = cljs.core.next.call(null,seq__36333__$1);
var sym = first__36334__$1;
var remaining = seq__36333__$2;
var post = vec__36332;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__36335 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__36335,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__36335,(1),null);
var G__36341 = cljs.core.seq.call(null,dt__$2);
var G__36342 = dt_SINGLEQUOTE___$1;
var G__36343 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__36341;
dt_SINGLEQUOTE_ = G__36342;
statics = G__36343;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__36338 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__36338,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__36338,(1),null);
var G__36344 = cljs.core.seq.call(null,dt__$2);
var G__36345 = dt_SINGLEQUOTE___$1;
var G__36346 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__36344;
dt_SINGLEQUOTE_ = G__36345;
statics = G__36346;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__36347 = null;
var G__36348 = dt_SINGLEQUOTE___$1;
var G__36349 = statics;
dt__$1 = G__36347;
dt_SINGLEQUOTE_ = G__36348;
statics = G__36349;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__4657__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__36350_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(p1__36350_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__4657__auto__)){
var invalid = temp__4657__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__36351){
var vec__36355 = p__36351;
var name = cljs.core.nth.call(null,vec__36355,(0),null);
var sig = cljs.core.nth.call(null,vec__36355,(1),null);
var method = vec__36355;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__36401){
var vec__36402 = p__36401;
var seq__36403 = cljs.core.seq.call(null,vec__36402);
var first__36404 = cljs.core.first.call(null,seq__36403);
var seq__36403__$1 = cljs.core.next.call(null,seq__36403);
var name = first__36404;
var first__36404__$1 = cljs.core.first.call(null,seq__36403__$1);
var seq__36403__$2 = cljs.core.next.call(null,seq__36403__$1);
var vec__36405 = first__36404__$1;
var this$ = cljs.core.nth.call(null,vec__36405,(0),null);
var args = vec__36405;
var body = seq__36403__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__36365__auto__","ret__36365__auto__",-133930289,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__36365__auto__","ret__36365__auto__",-133930289,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__36408){
var vec__36409 = p__36408;
var seq__36410 = cljs.core.seq.call(null,vec__36409);
var first__36411 = cljs.core.first.call(null,seq__36410);
var seq__36410__$1 = cljs.core.next.call(null,seq__36410);
var name = first__36411;
var first__36411__$1 = cljs.core.first.call(null,seq__36410__$1);
var seq__36410__$2 = cljs.core.next.call(null,seq__36410__$1);
var vec__36412 = first__36411__$1;
var this$ = cljs.core.nth.call(null,vec__36412,(0),null);
var next_props = cljs.core.nth.call(null,vec__36412,(1),null);
var args = vec__36412;
var body = seq__36410__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36366__auto__","this__36366__auto__",1332602956,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36367__auto__","next-props__36367__auto__",9434803,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36366__auto__","this__36366__auto__",1332602956,null)),(function (){var x__29217__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36367__auto__","next-props__36367__auto__",9434803,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36366__auto__","this__36366__auto__",1332602956,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__36415){
var vec__36416 = p__36415;
var seq__36417 = cljs.core.seq.call(null,vec__36416);
var first__36418 = cljs.core.first.call(null,seq__36417);
var seq__36417__$1 = cljs.core.next.call(null,seq__36417);
var name = first__36418;
var first__36418__$1 = cljs.core.first.call(null,seq__36417__$1);
var seq__36417__$2 = cljs.core.next.call(null,seq__36417__$1);
var vec__36419 = first__36418__$1;
var this$ = cljs.core.nth.call(null,vec__36419,(0),null);
var next_props = cljs.core.nth.call(null,vec__36419,(1),null);
var next_state = cljs.core.nth.call(null,vec__36419,(2),null);
var args = vec__36419;
var body = seq__36417__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36369__auto__","next-props__36369__auto__",-264685076,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36370__auto__","next-state__36370__auto__",297078697,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)),(function (){var x__29217__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36369__auto__","next-props__36369__auto__",-264685076,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36370__auto__","next-state__36370__auto__",297078697,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36370__auto__","next-state__36370__auto__",297078697,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__36371__auto__","ret__36371__auto__",1711818334,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36372__auto__","ident__36372__auto__",1476628813,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36373__auto__","next-ident__36373__auto__",-1655258713,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)),(function (){var x__29217__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36372__auto__","ident__36372__auto__",1476628813,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36373__auto__","next-ident__36373__auto__",-1655258713,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36374__auto__","idxr__36374__auto__",-894001399,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36374__auto__","idxr__36374__auto__",-894001399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36374__auto__","idxr__36374__auto__",-894001399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__36375__auto__","indexes__36375__auto__",-500333266,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__36375__auto__","indexes__36375__auto__",-500333266,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36372__auto__","ident__36372__auto__",1476628813,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36373__auto__","next-ident__36373__auto__",-1655258713,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__29217__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36368__auto__","this__36368__auto__",100346549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__36371__auto__","ret__36371__auto__",1711818334,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__36422){
var vec__36423 = p__36422;
var seq__36424 = cljs.core.seq.call(null,vec__36423);
var first__36425 = cljs.core.first.call(null,seq__36424);
var seq__36424__$1 = cljs.core.next.call(null,seq__36424);
var name = first__36425;
var first__36425__$1 = cljs.core.first.call(null,seq__36424__$1);
var seq__36424__$2 = cljs.core.next.call(null,seq__36424__$1);
var vec__36426 = first__36425__$1;
var this$ = cljs.core.nth.call(null,vec__36426,(0),null);
var prev_props = cljs.core.nth.call(null,vec__36426,(1),null);
var prev_state = cljs.core.nth.call(null,vec__36426,(2),null);
var args = vec__36426;
var body = seq__36424__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36376__auto__","this__36376__auto__",-1335393173,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__36377__auto__","prev-props__36377__auto__",1908216253,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__36378__auto__","prev-state__36378__auto__",-499953826,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36376__auto__","this__36376__auto__",-1335393173,null)),(function (){var x__29217__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__36377__auto__","prev-props__36377__auto__",1908216253,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36376__auto__","this__36376__auto__",-1335393173,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__36378__auto__","prev-state__36378__auto__",-499953826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),body,(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36376__auto__","this__36376__auto__",-1335393173,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__36429){
var vec__36430 = p__36429;
var seq__36431 = cljs.core.seq.call(null,vec__36430);
var first__36432 = cljs.core.first.call(null,seq__36431);
var seq__36431__$1 = cljs.core.next.call(null,seq__36431);
var name = first__36432;
var first__36432__$1 = cljs.core.first.call(null,seq__36431__$1);
var seq__36431__$2 = cljs.core.next.call(null,seq__36431__$1);
var vec__36433 = first__36432__$1;
var this$ = cljs.core.nth.call(null,vec__36433,(0),null);
var args = vec__36433;
var body = seq__36431__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36379__auto__","this__36379__auto__",-1962517553,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36379__auto__","this__36379__auto__",-1962517553,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36380__auto__","indexer__36380__auto__",1820848393,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36379__auto__","this__36379__auto__",-1962517553,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36380__auto__","indexer__36380__auto__",1820848393,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36380__auto__","indexer__36380__auto__",1820848393,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36379__auto__","this__36379__auto__",-1962517553,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__36436){
var vec__36437 = p__36436;
var seq__36438 = cljs.core.seq.call(null,vec__36437);
var first__36439 = cljs.core.first.call(null,seq__36438);
var seq__36438__$1 = cljs.core.next.call(null,seq__36438);
var name = first__36439;
var first__36439__$1 = cljs.core.first.call(null,seq__36438__$1);
var seq__36438__$2 = cljs.core.next.call(null,seq__36438__$1);
var vec__36440 = first__36439__$1;
var this$ = cljs.core.nth.call(null,vec__36440,(0),null);
var args = vec__36440;
var body = seq__36438__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__36382__auto__","r__36382__auto__",1598345332,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36383__auto__","cfg__36383__auto__",297701594,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__36382__auto__","r__36382__auto__",1598345332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36384__auto__","st__36384__auto__",-929550172,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36383__auto__","cfg__36383__auto__",297701594,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36385__auto__","indexer__36385__auto__",-1979609981,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36383__auto__","cfg__36383__auto__",297701594,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36384__auto__","st__36384__auto__",-929550172,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36384__auto__","st__36384__auto__",-929550172,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36384__auto__","st__36384__auto__",-929550172,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36385__auto__","indexer__36385__auto__",-1979609981,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36385__auto__","indexer__36385__auto__",-1979609981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36381__auto__","this__36381__auto__",-378623901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__36443){
var vec__36444 = p__36443;
var seq__36445 = cljs.core.seq.call(null,vec__36444);
var first__36446 = cljs.core.first.call(null,seq__36445);
var seq__36445__$1 = cljs.core.next.call(null,seq__36445);
var name = first__36446;
var first__36446__$1 = cljs.core.first.call(null,seq__36445__$1);
var seq__36445__$2 = cljs.core.next.call(null,seq__36445__$1);
var vec__36447 = first__36446__$1;
var this$ = cljs.core.nth.call(null,vec__36447,(0),null);
var args = vec__36447;
var body = seq__36445__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36386__auto__","this__36386__auto__",-1052616970,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36389__auto__","next-state__36389__auto__",-1484680086,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__36390__auto__","next-children__36390__auto__",-1724908823,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36389__auto__","next-state__36389__auto__",-1484680086,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__36390__auto__","next-children__36390__auto__",-1724908823,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__36389__auto__","next-state__36389__auto__",-1484680086,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36391__auto__","ident__36391__auto__",1396073234,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36392__auto__","next-ident__36392__auto__",1321680072,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__36388__auto__","next-props__36388__auto__",-132347122,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36391__auto__","ident__36391__auto__",1396073234,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36392__auto__","next-ident__36392__auto__",1321680072,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36393__auto__","idxr__36393__auto__",920304922,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36393__auto__","idxr__36393__auto__",920304922,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__36393__auto__","idxr__36393__auto__",920304922,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__36394__auto__","indexes__36394__auto__",1068573632,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__36394__auto__","indexes__36394__auto__",1068573632,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__36391__auto__","ident__36391__auto__",1396073234,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__36392__auto__","next-ident__36392__auto__",1321680072,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__29217__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__36395__auto__","prev-props__36395__auto__",429885044,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__36396__auto__","prev-state__36396__auto__",9742499,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__36398__auto__","r__36398__auto__",-2087900260,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36399__auto__","cfg__36399__auto__",-577300428,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__36398__auto__","r__36398__auto__",-2087900260,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36400__auto__","st__36400__auto__",-1760464425,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36399__auto__","cfg__36399__auto__",-577300428,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__36399__auto__","cfg__36399__auto__",-577300428,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36400__auto__","st__36400__auto__",-1760464425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36400__auto__","st__36400__auto__",-1760464425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__36400__auto__","st__36400__auto__",-1760464425,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__36397__auto__","indexer__36397__auto__",500509592,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36387__auto__","this__36387__auto__",837400164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__36450){
var map__36491 = p__36450;
var map__36491__$1 = ((((!((map__36491 == null)))?((((map__36491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36491):map__36491);
var reshape__$1 = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__36491,map__36491__$1,reshape__$1,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape__$1,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape__$1,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__36491,map__36491__$1,reshape__$1,defaults))
;
var add_defaults_step = ((function (map__36491,map__36491__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__36512){
var vec__36522 = p__36512;
var name = cljs.core.nth.call(null,vec__36522,(0),null);
var impl = cljs.core.nth.call(null,vec__36522,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__36525 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__36525,(0),null);
var vec__36528 = cljs.core.nth.call(null,vec__36525,(1),null);
var seq__36529 = cljs.core.seq.call(null,vec__36528);
var first__36530 = cljs.core.first.call(null,seq__36529);
var seq__36529__$1 = cljs.core.next.call(null,seq__36529);
var p = first__36530;
var after = seq__36529__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__36491,map__36491__$1,reshape__$1,defaults))
;
var add_defaults = ((function (map__36491,map__36491__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__36491,map__36491__$1,reshape__$1,defaults))
;
var add_object_protocol = ((function (map__36491,map__36491__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__36491,map__36491__$1,reshape__$1,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args36545 = [];
var len__29458__auto___36567 = arguments.length;
var i__29459__auto___36568 = (0);
while(true){
if((i__29459__auto___36568 < len__29458__auto___36567)){
args36545.push((arguments[i__29459__auto___36568]));

var G__36569 = (i__29459__auto___36568 + (1));
i__29459__auto___36568 = G__36569;
continue;
} else {
}
break;
}

var G__36547 = args36545.length;
switch (G__36547) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36545.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__36555){
var vec__36559 = p__36555;
var field = cljs.core.nth.call(null,vec__36559,(0),null);
var value = cljs.core.nth.call(null,vec__36559,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29217__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__36563 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__36563);
} else {
return G__36563;
}
})();
var map__36562 = om.next.collect_statics.call(null,forms__$1);
var map__36562__$1 = ((((!((map__36562 == null)))?((((map__36562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36562):map__36562);
var dt = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__29217__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36539__auto__","this__36539__auto__",140808474,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29217__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29217__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__36562,map__36562__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__36540_SHARP_){
return field_set_BANG_.call(null,name,p1__36540_SHARP_);
});})(docstring,forms__$1,map__36562,map__36562__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__36562,map__36562__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__36541_SHARP_){
var G__36566 = p1__36541_SHARP_;
if((p1__36541_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__36566,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__36566;
}
});})(docstring,forms__$1,map__36562,map__36562__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29217__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29217__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__29217__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29217__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36542__auto__","this__36542__auto__",699150237,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36543__auto__","writer__36543__auto__",-1048240439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__36544__auto__","opt__36544__auto__",-961993117,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36543__auto__","writer__36543__auto__",-1048240439,null)),(function (){var x__29217__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__29465__auto__ = [];
var len__29458__auto___36575 = arguments.length;
var i__29459__auto___36576 = (0);
while(true){
if((i__29459__auto___36576 < len__29458__auto___36575)){
args__29465__auto__.push((arguments[i__29459__auto___36576]));

var G__36577 = (i__29459__auto___36576 + (1));
i__29459__auto___36576 = G__36577;
continue;
} else {
}
break;
}

var argseq__29466__auto__ = ((((3) < args__29465__auto__.length))?(new cljs.core.IndexedSeq(args__29465__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29466__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq36571){
var G__36572 = cljs.core.first.call(null,seq36571);
var seq36571__$1 = cljs.core.next.call(null,seq36571);
var G__36573 = cljs.core.first.call(null,seq36571__$1);
var seq36571__$2 = cljs.core.next.call(null,seq36571__$1);
var G__36574 = cljs.core.first.call(null,seq36571__$2);
var seq36571__$3 = cljs.core.next.call(null,seq36571__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__36572,G__36573,G__36574,seq36571__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__29465__auto__ = [];
var len__29458__auto___36581 = arguments.length;
var i__29459__auto___36582 = (0);
while(true){
if((i__29459__auto___36582 < len__29458__auto___36581)){
args__29465__auto__.push((arguments[i__29459__auto___36582]));

var G__36583 = (i__29459__auto___36582 + (1));
i__29459__auto___36582 = G__36583;
continue;
} else {
}
break;
}

var argseq__29466__auto__ = ((((2) < args__29465__auto__.length))?(new cljs.core.IndexedSeq(args__29465__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29466__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__29217__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq36578){
var G__36579 = cljs.core.first.call(null,seq36578);
var seq36578__$1 = cljs.core.next.call(null,seq36578);
var G__36580 = cljs.core.first.call(null,seq36578__$1);
var seq36578__$2 = cljs.core.next.call(null,seq36578__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__36579,G__36580,seq36578__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__36586 = fn_scope;
var G__36586__$1 = (((G__36586 == null))?null:cljs.core.first.call(null,G__36586));
var G__36586__$2 = (((G__36586__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__36586__$1));
if((G__36586__$2 == null)){
return null;
} else {
return [cljs.core.str(G__36586__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29217__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__36584__auto__","l__36584__auto__",803191636,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__36584__auto__","l__36584__auto__",803191636,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__29217__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),(function (){var x__29217__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__29217__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__29217__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})())));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__36588 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__36588);
} else {
return G__36588;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__36589_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__36589_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__36589_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__36589_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__36590 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__36590;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__36623 = clojure.zip.down.call(null,loc);
var G__36624 = path__$1;
loc = G__36623;
path__$1 = G__36624;
continue;
} else {
var vec__36619 = path__$1;
var seq__36620 = cljs.core.seq.call(null,vec__36619);
var first__36621 = cljs.core.first.call(null,seq__36620);
var seq__36620__$1 = cljs.core.next.call(null,seq__36620);
var k = first__36621;
var ks = seq__36620__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__36622 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__36622);
} else {
return G__36622;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__36625 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__36626 = cljs.core.next.call(null,ks);
loc = G__36625;
path__$1 = G__36626;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__36627 = loc_SINGLEQUOTE_;
var G__36628 = ks;
loc = G__36627;
path__$1 = G__36628;
continue;
}
} else {
var G__36629 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__36630 = ks;
loc = G__36629;
path__$1 = G__36630;
continue;
}
} else {
var G__36631 = clojure.zip.right.call(null,loc);
var G__36632 = path__$1;
loc = G__36631;
path__$1 = G__36632;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__29217__auto__ = om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__29217__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto____$1);
})(),x__29217__auto__);
})():expr
));
var G__36634 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_.call(null,expr_meta)){
return cljs.core.with_meta.call(null,G__36634,expr_meta);
} else {
return G__36634;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__36638 = path;
var seq__36639 = cljs.core.seq.call(null,vec__36638);
var first__36640 = cljs.core.first.call(null,seq__36639);
var seq__36639__$1 = cljs.core.next.call(null,seq__36639);
var k = first__36640;
var ks = seq__36639__$1;
var match = ((function (vec__36638,seq__36639,first__36640,seq__36639__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__36638,seq__36639,first__36640,seq__36639__$1,k,ks))
;
var value = ((function (vec__36638,seq__36639,first__36640,seq__36639__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__36638,seq__36639,first__36640,seq__36639__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args36641 = [];
var len__29458__auto___36647 = arguments.length;
var i__29459__auto___36648 = (0);
while(true){
if((i__29459__auto___36648 < len__29458__auto___36647)){
args36641.push((arguments[i__29459__auto___36648]));

var G__36649 = (i__29459__auto___36648 + (1));
i__29459__auto___36648 = G__36649;
continue;
} else {
}
break;
}

var G__36643 = args36641.length;
switch (G__36643) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36641.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__28371__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__28371__auto__){
var and__28371__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__28371__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})())){
var vec__36644 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__36644,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__36644,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__36651 = focus_SINGLEQUOTE___$1;
var G__36652 = bound;
var G__36653 = cljs.core.conj.call(null,path,k);
focus = G__36651;
bound = G__36652;
path = G__36653;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next.ident[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$,props);
} else {
var m__29047__auto____$1 = (om.next.ident["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next.params[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$);
} else {
var m__29047__auto____$1 = (om.next.params["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next.query[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$);
} else {
var m__29047__auto____$1 = (om.next.query["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$,new_state);
} else {
var m__29047__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next._get_state[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$);
} else {
var m__29047__auto____$1 = (om.next._get_state["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next._get_rendered_state[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$);
} else {
var m__29047__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__29046__auto__ = (((this$ == null))?null:this$);
var m__29047__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,this$);
} else {
var m__29047__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__28371__auto__ = (x instanceof cljs.core.Symbol);
if(and__28371__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__28371__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__36654_SHARP_){
return om$next$bind_query.call(null,p1__36654_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__36657 = ret;
if(cljs.core.truth_((function (){var and__28371__auto__ = qm;
if(cljs.core.truth_(and__28371__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__28371__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__36657,qm);
} else {
return G__36657;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__36660 = om.next.get_reconciler.call(null,component);
var G__36660__$1 = (((G__36660 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__36660));
var G__36660__$2 = (((G__36660__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__36660__$1));
var G__36660__$3 = (((G__36660__$2 == null))?null:cljs.core.deref.call(null,G__36660__$2));
var G__36660__$4 = (((G__36660__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__36660__$3));
if((G__36660__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__36660__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args36661 = [];
var len__29458__auto___36664 = arguments.length;
var i__29459__auto___36665 = (0);
while(true){
if((i__29459__auto___36665 < len__29458__auto___36664)){
args36661.push((arguments[i__29459__auto___36665]));

var G__36666 = (i__29459__auto___36665 + (1));
i__29459__auto___36665 = G__36666;
continue;
} else {
}
break;
}

var G__36663 = args36661.length;
switch (G__36663) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36661.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),om.next.react_type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__36670_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__36670_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__36671 = component;
var G__36672 = class_path_query_data;
var G__36673 = cljs.core.pop.call(null,data_path);
component = G__36671;
class_path_query_data = G__36672;
data_path = G__36673;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__4655__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var query_data = temp__4655__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args36676 = [];
var len__29458__auto___36684 = arguments.length;
var i__29459__auto___36685 = (0);
while(true){
if((i__29459__auto___36685 < len__29458__auto___36684)){
args36676.push((arguments[i__29459__auto___36685]));

var G__36686 = (i__29459__auto___36685 + (1));
i__29459__auto___36685 = G__36686;
continue;
} else {
}
break;
}

var G__36678 = args36676.length;
switch (G__36678) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36676.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__36679){
var map__36680 = p__36679;
var map__36680__$1 = ((((!((map__36680 == null)))?((((map__36680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36680):map__36680);
var opts = map__36680__$1;
var validator = cljs.core.get.call(null,map__36680__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__36680__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__36680__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__36680,map__36680__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__28371__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__28371__auto__)){
return instrument_QMARK_;
} else {
return and__28371__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__36683 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__36683)].join('');
} else {
return G__36683;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__36688__i = 0, G__36688__a = new Array(arguments.length -  1);
while (G__36688__i < G__36688__a.length) {G__36688__a[G__36688__i] = arguments[G__36688__i + 1]; ++G__36688__i;}
  children = new cljs.core.IndexedSeq(G__36688__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__36689){
var props = cljs.core.first(arglist__36689);
var children = cljs.core.rest(arglist__36689);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__36680,map__36680__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args36690 = [];
var len__29458__auto___36693 = arguments.length;
var i__29459__auto___36694 = (0);
while(true){
if((i__29459__auto___36694 < len__29458__auto___36693)){
args36690.push((arguments[i__29459__auto___36694]));

var G__36695 = (i__29459__auto___36694 + (1));
i__29459__auto___36694 = G__36695;
continue;
} else {
}
break;
}

var G__36692 = args36690.length;
switch (G__36692) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36690.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args36697 = [];
var len__29458__auto___36700 = arguments.length;
var i__29459__auto___36701 = (0);
while(true){
if((i__29459__auto___36701 < len__29458__auto___36700)){
args36697.push((arguments[i__29459__auto___36701]));

var G__36702 = (i__29459__auto___36701 + (1));
i__29459__auto___36701 = G__36702;
continue;
} else {
}
break;
}

var G__36699 = args36697.length;
switch (G__36699) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36697.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__28383__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args36704 = [];
var len__29458__auto___36709 = arguments.length;
var i__29459__auto___36710 = (0);
while(true){
if((i__29459__auto___36710 < len__29458__auto___36709)){
args36704.push((arguments[i__29459__auto___36710]));

var G__36711 = (i__29459__auto___36710 + (1));
i__29459__auto___36710 = G__36711;
continue;
} else {
}
break;
}

var G__36706 = args36704.length;
switch (G__36706) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36704.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__36707 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__36707],null));
} else {
return G__36707;
}
})();
var G__36708 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__36708,ks);
} else {
return G__36708;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__36714 = c.state;
goog.object.set(G__36714,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__36714;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__36717 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__36717,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__36717;
}
} else {
var G__36718 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__36718,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__36718;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args36719 = [];
var len__29458__auto___36724 = arguments.length;
var i__29459__auto___36725 = (0);
while(true){
if((i__29459__auto___36725 < len__29458__auto___36724)){
args36719.push((arguments[i__29459__auto___36725]));

var G__36726 = (i__29459__auto___36725 + (1));
i__29459__auto___36725 = G__36726;
continue;
} else {
}
break;
}

var G__36721 = args36719.length;
switch (G__36721) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36719.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__36722 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__36722);
} else {
return G__36722;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__36723 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__36723],null));
} else {
return G__36723;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4655__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args36730 = [];
var len__29458__auto___36734 = arguments.length;
var i__29459__auto___36735 = (0);
while(true){
if((i__29459__auto___36735 < len__29458__auto___36734)){
args36730.push((arguments[i__29459__auto___36735]));

var G__36736 = (i__29459__auto___36735 + (1));
i__29459__auto___36735 = G__36736;
continue;
} else {
}
break;
}

var G__36732 = args36730.length;
switch (G__36732) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36730.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__28383__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args36738 = [];
var len__29458__auto___36748 = arguments.length;
var i__29459__auto___36749 = (0);
while(true){
if((i__29459__auto___36749 < len__29458__auto___36748)){
args36738.push((arguments[i__29459__auto___36749]));

var G__36750 = (i__29459__auto___36749 + (1));
i__29459__auto___36749 = G__36750;
continue;
} else {
}
break;
}

var G__36747 = args36738.length;
switch (G__36747) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__29477__auto__ = (new cljs.core.IndexedSeq(args36738.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__29477__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq36739){
var G__36740 = cljs.core.first.call(null,seq36739);
var seq36739__$1 = cljs.core.next.call(null,seq36739);
var G__36741 = cljs.core.first.call(null,seq36739__$1);
var seq36739__$2 = cljs.core.next.call(null,seq36739__$1);
var G__36742 = cljs.core.first.call(null,seq36739__$2);
var seq36739__$3 = cljs.core.next.call(null,seq36739__$2);
var G__36743 = cljs.core.first.call(null,seq36739__$3);
var seq36739__$4 = cljs.core.next.call(null,seq36739__$3);
var G__36744 = cljs.core.first.call(null,seq36739__$4);
var seq36739__$5 = cljs.core.next.call(null,seq36739__$4);
var G__36745 = cljs.core.first.call(null,seq36739__$5);
var seq36739__$6 = cljs.core.next.call(null,seq36739__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36740,G__36741,G__36742,G__36743,G__36744,G__36745,seq36739__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args36752 = [];
var len__29458__auto___36757 = arguments.length;
var i__29459__auto___36758 = (0);
while(true){
if((i__29459__auto___36758 < len__29458__auto___36757)){
args36752.push((arguments[i__29459__auto___36758]));

var G__36759 = (i__29459__auto___36758 + (1));
i__29459__auto___36758 = G__36759;
continue;
} else {
}
break;
}

var G__36754 = args36752.length;
switch (G__36754) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36752.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__36756 = component;
var G__36756__$1 = (((G__36756 == null))?null:G__36756.state);
if((G__36756__$1 == null)){
return null;
} else {
return goog.object.get(G__36756__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4657__auto__ = (function (){var G__36764 = c;
var G__36764__$1 = (((G__36764 == null))?null:G__36764.state);
if((G__36764__$1 == null)){
return null;
} else {
return goog.object.get(G__36764__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args36765 = [];
var len__29458__auto___36768 = arguments.length;
var i__29459__auto___36769 = (0);
while(true){
if((i__29459__auto___36769 < len__29458__auto___36768)){
args36765.push((arguments[i__29459__auto___36769]));

var G__36770 = (i__29459__auto___36769 + (1));
i__29459__auto___36769 = G__36770;
continue;
} else {
}
break;
}

var G__36767 = args36765.length;
switch (G__36767) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36765.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState({"omcljs$state": new_state},cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__36773,q,remotes){
var map__36780 = p__36773;
var map__36780__$1 = ((((!((map__36780 == null)))?((((map__36780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36780):map__36780);
var env = map__36780__$1;
var parser = cljs.core.get.call(null,map__36780__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__36780,map__36780__$1,env,parser){
return (function (p1__36772_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36772_SHARP_,parser.call(null,env,q,p1__36772_SHARP_)],null));
});})(map__36780,map__36780__$1,env,parser))
),cljs.core.filter.call(null,((function (map__36780,map__36780__$1,env,parser){
return (function (p__36782){
var vec__36783 = p__36782;
var _ = cljs.core.nth.call(null,vec__36783,(0),null);
var v = cljs.core.nth.call(null,vec__36783,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__36780,map__36780__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__36790 = cljs.core.next.call(null,exprs);
var G__36791 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__36786_SHARP_,p2__36787_SHARP_){
return add_focused_query.call(null,key,tgt,p1__36786_SHARP_,p2__36787_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__36789 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__36789,expr);
} else {
return G__36789;
}
})(),cs);
exprs = G__36790;
tx_SINGLEQUOTE_ = G__36791;
continue;
} else {
var G__36792 = cljs.core.next.call(null,exprs);
var G__36793 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__36792;
tx_SINGLEQUOTE_ = G__36793;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args36794 = [];
var len__29458__auto___36811 = arguments.length;
var i__29459__auto___36812 = (0);
while(true){
if((i__29459__auto___36812 < len__29458__auto___36811)){
args36794.push((arguments[i__29459__auto___36812]));

var G__36813 = (i__29459__auto___36812 + (1));
i__29459__auto___36812 = G__36813;
continue;
} else {
}
break;
}

var G__36796 = args36794.length;
switch (G__36796) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36794.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__36797,reads){
var map__36798 = p__36797;
var map__36798__$1 = ((((!((map__36798 == null)))?((((map__36798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36798):map__36798);
var params = cljs.core.get.call(null,map__36798__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__36798__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__28383__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__4657__auto___36815 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___36815)){
var l_36816 = temp__4657__auto___36815;
goog.log.info(l_36816,[cljs.core.str((function (){var temp__4657__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ident = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__28383__auto__ = c;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_36817 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_36818 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__28383__auto__ = rootq_36817;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_36818)){
} else {
var seq__36801_36819 = cljs.core.seq.call(null,sends_36818);
var chunk__36802_36820 = null;
var count__36803_36821 = (0);
var i__36804_36822 = (0);
while(true){
if((i__36804_36822 < count__36803_36821)){
var vec__36805_36823 = cljs.core._nth.call(null,chunk__36802_36820,i__36804_36822);
var remote_36824 = cljs.core.nth.call(null,vec__36805_36823,(0),null);
var __36825 = cljs.core.nth.call(null,vec__36805_36823,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_36824);

var G__36826 = seq__36801_36819;
var G__36827 = chunk__36802_36820;
var G__36828 = count__36803_36821;
var G__36829 = (i__36804_36822 + (1));
seq__36801_36819 = G__36826;
chunk__36802_36820 = G__36827;
count__36803_36821 = G__36828;
i__36804_36822 = G__36829;
continue;
} else {
var temp__4657__auto___36830 = cljs.core.seq.call(null,seq__36801_36819);
if(temp__4657__auto___36830){
var seq__36801_36831__$1 = temp__4657__auto___36830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36801_36831__$1)){
var c__29194__auto___36832 = cljs.core.chunk_first.call(null,seq__36801_36831__$1);
var G__36833 = cljs.core.chunk_rest.call(null,seq__36801_36831__$1);
var G__36834 = c__29194__auto___36832;
var G__36835 = cljs.core.count.call(null,c__29194__auto___36832);
var G__36836 = (0);
seq__36801_36819 = G__36833;
chunk__36802_36820 = G__36834;
count__36803_36821 = G__36835;
i__36804_36822 = G__36836;
continue;
} else {
var vec__36808_36837 = cljs.core.first.call(null,seq__36801_36831__$1);
var remote_36838 = cljs.core.nth.call(null,vec__36808_36837,(0),null);
var __36839 = cljs.core.nth.call(null,vec__36808_36837,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_36838);

var G__36840 = cljs.core.next.call(null,seq__36801_36831__$1);
var G__36841 = null;
var G__36842 = (0);
var G__36843 = (0);
seq__36801_36819 = G__36840;
chunk__36802_36820 = G__36841;
count__36803_36821 = G__36842;
i__36804_36822 = G__36843;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,sends_36818);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args36844 = [];
var len__29458__auto___36854 = arguments.length;
var i__29459__auto___36855 = (0);
while(true){
if((i__29459__auto___36855 < len__29458__auto___36854)){
args36844.push((arguments[i__29459__auto___36855]));

var G__36856 = (i__29459__auto___36855 + (1));
i__29459__auto___36855 = G__36856;
continue;
} else {
}
break;
}

var G__36853 = args36844.length;
switch (G__36853) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__29477__auto__ = (new cljs.core.IndexedSeq(args36844.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__29477__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq36845){
var G__36846 = cljs.core.first.call(null,seq36845);
var seq36845__$1 = cljs.core.next.call(null,seq36845);
var G__36847 = cljs.core.first.call(null,seq36845__$1);
var seq36845__$2 = cljs.core.next.call(null,seq36845__$1);
var G__36848 = cljs.core.first.call(null,seq36845__$2);
var seq36845__$3 = cljs.core.next.call(null,seq36845__$2);
var G__36849 = cljs.core.first.call(null,seq36845__$3);
var seq36845__$4 = cljs.core.next.call(null,seq36845__$3);
var G__36850 = cljs.core.first.call(null,seq36845__$4);
var seq36845__$5 = cljs.core.next.call(null,seq36845__$4);
var G__36851 = cljs.core.first.call(null,seq36845__$5);
var seq36845__$6 = cljs.core.next.call(null,seq36845__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36846,G__36847,G__36848,G__36849,G__36850,G__36851,seq36845__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__36860 = component.refs;
if((G__36860 == null)){
return null;
} else {
return goog.object.get(G__36860,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args36861 = [];
var len__29458__auto___36864 = arguments.length;
var i__29459__auto___36865 = (0);
while(true){
if((i__29459__auto___36865 < len__29458__auto___36864)){
args36861.push((arguments[i__29459__auto___36865]));

var G__36866 = (i__29459__auto___36865 + (1));
i__29459__auto___36865 = G__36866;
continue;
} else {
}
break;
}

var G__36863 = args36861.length;
switch (G__36863) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36861.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__29217__auto__ = om.next.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})();
while(true){
var temp__4655__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__36868 = p;
var G__36869 = cljs.core.cons.call(null,om.next.react_type.call(null,p),ret);
c__$1 = G__36868;
ret = G__36869;
continue;
} else {
var G__36870 = p;
var G__36871 = ret;
c__$1 = G__36870;
ret = G__36871;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__36872 = cljs.core.next.call(null,cp);
var G__36873 = ret;
var G__36874 = seen;
cp = G__36872;
ret = G__36873;
seen = G__36874;
continue;
} else {
var G__36875 = cljs.core.next.call(null,cp);
var G__36876 = cljs.core.conj.call(null,ret,c__$1);
var G__36877 = cljs.core.conj.call(null,seen,c__$1);
cp = G__36875;
ret = G__36876;
seen = G__36877;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__36879 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__36879)].join('');
} else {
return G__36879;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args36880 = [];
var len__29458__auto___36883 = arguments.length;
var i__29459__auto___36884 = (0);
while(true){
if((i__29459__auto___36884 < len__29458__auto___36883)){
args36880.push((arguments[i__29459__auto___36884]));

var G__36885 = (i__29459__auto___36884 + (1));
i__29459__auto___36884 = G__36885;
continue;
} else {
}
break;
}

var G__36882 = args36880.length;
switch (G__36882) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36880.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__4657__auto___36887 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4657__auto___36887)){
var old_reconciler_36888 = temp__4657__auto___36887;
om.next.remove_root_BANG_.call(null,old_reconciler_36888,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__29046__auto__ = (((c == null))?null:c);
var m__29047__auto__ = (om.next.tx_intercept[goog.typeOf(x__29046__auto__)]);
if(!((m__29047__auto__ == null))){
return m__29047__auto__.call(null,c,tx);
} else {
var m__29047__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__29047__auto____$1 == null))){
return m__29047__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__28371__auto__ = c;
if(cljs.core.truth_(and__28371__auto__)){
var and__28371__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__28371__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var old_state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__36904 = cljs.core.PersistentVector.EMPTY;
var G__36904__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__36904,c):G__36904);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__36904__$1,ref__$1);
} else {
return G__36904__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,xs,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
var seq__36905_36915 = cljs.core.seq.call(null,snds);
var chunk__36906_36916 = null;
var count__36907_36917 = (0);
var i__36908_36918 = (0);
while(true){
if((i__36908_36918 < count__36907_36917)){
var vec__36909_36919 = cljs.core._nth.call(null,chunk__36906_36916,i__36908_36918);
var remote_36920 = cljs.core.nth.call(null,vec__36909_36919,(0),null);
var __36921__$2 = cljs.core.nth.call(null,vec__36909_36919,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_36920);

var G__36922 = seq__36905_36915;
var G__36923 = chunk__36906_36916;
var G__36924 = count__36907_36917;
var G__36925 = (i__36908_36918 + (1));
seq__36905_36915 = G__36922;
chunk__36906_36916 = G__36923;
count__36907_36917 = G__36924;
i__36908_36918 = G__36925;
continue;
} else {
var temp__4657__auto___36926 = cljs.core.seq.call(null,seq__36905_36915);
if(temp__4657__auto___36926){
var seq__36905_36927__$1 = temp__4657__auto___36926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36905_36927__$1)){
var c__29194__auto___36928 = cljs.core.chunk_first.call(null,seq__36905_36927__$1);
var G__36929 = cljs.core.chunk_rest.call(null,seq__36905_36927__$1);
var G__36930 = c__29194__auto___36928;
var G__36931 = cljs.core.count.call(null,c__29194__auto___36928);
var G__36932 = (0);
seq__36905_36915 = G__36929;
chunk__36906_36916 = G__36930;
count__36907_36917 = G__36931;
i__36908_36918 = G__36932;
continue;
} else {
var vec__36912_36933 = cljs.core.first.call(null,seq__36905_36927__$1);
var remote_36934 = cljs.core.nth.call(null,vec__36912_36933,(0),null);
var __36935__$2 = cljs.core.nth.call(null,vec__36912_36933,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_36934);

var G__36936 = cljs.core.next.call(null,seq__36905_36927__$1);
var G__36937 = null;
var G__36938 = (0);
var G__36939 = (0);
seq__36905_36915 = G__36936;
chunk__36906_36916 = G__36937;
count__36907_36917 = G__36938;
i__36908_36918 = G__36939;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

var temp__4657__auto___36940 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___36940)){
var f_36941 = temp__4657__auto___36940;
var tx_data_36942 = cljs.core.merge.call(null,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg))], null));
f_36941.call(null,tx_data_36942,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ret","ret",-468222814),v,new cljs.core.Keyword(null,"sends","sends",-1708040810),snds], null));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__36951 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__36951,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__36951;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__36943_SHARP_){
return annotate.call(null,p1__36943_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__36952 = om.next.parent.call(null,c__$1);
c__$1 = G__36952;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args36953 = [];
var len__29458__auto___36963 = arguments.length;
var i__29459__auto___36964 = (0);
while(true){
if((i__29459__auto___36964 < len__29458__auto___36963)){
args36953.push((arguments[i__29459__auto___36964]));

var G__36965 = (i__29459__auto___36964 + (1));
i__29459__auto___36964 = G__36965;
continue;
} else {
}
break;
}

var G__36955 = args36953.length;
switch (G__36955) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36953.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__28383__auto__ = om.next.component_QMARK_.call(null,x);
if(or__28383__auto__){
return or__28383__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__36956 = tx;
if((function (){var and__28371__auto__ = om.next.component_QMARK_.call(null,x);
if(and__28371__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__28371__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__36956,om.next.get_ident.call(null,x));
} else {
return G__36956;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__35545__auto___36967 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__35545__auto___36967,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__36959 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__36959,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__36959,(1),null);
var G__36968 = om.next.parent.call(null,p);
var G__36969 = x_SINGLEQUOTE_;
var G__36970 = tx__$3;
p = G__36968;
x__$1 = G__36969;
tx__$2 = G__36970;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__36971){
var map__36974 = p__36971;
var map__36974__$1 = ((((!((map__36974 == null)))?((((map__36974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36974):map__36974);
var opts = map__36974__$1;
var read = cljs.core.get.call(null,map__36974__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__36974__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__36977 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__36977);
} else {
return G__36977;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__36980 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__36980);
} else {
return G__36980;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__36978_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__36978_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__28383__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__28383__auto__){
return or__28383__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__36981 = cljs.core.pop.call(null,cp);
var G__36982 = cljs.core.pop.call(null,data_path__$1);
var G__36983 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__36984 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__36981;
data_path__$1 = G__36982;
new_query__$1 = G__36983;
ret = G__36984;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__36992 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.react_type.call(null,G__36992);
} else {
return G__36992;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__35545__auto___37109 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__35545__auto___37109,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$], true),classpath);
var classpath__$1 = (function (){var G__37074 = classpath;
if((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__37074,class$);
} else {
return G__37074;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$)){
var root_query_37110 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_37110,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__28371__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__28371__auto__)){
var and__28371__auto____$1 = cljs.core.some.call(null,((function (and__28371__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__28371__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__28371__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__28371__auto____$1;
}
});})(and__28371__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__28371__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__28371__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__28371__auto__)){
var and__28371__auto____$1 = union_expr;
if(cljs.core.truth_(and__28371__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})();
if(cljs.core.truth_((function (){var or__28383__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__28383__auto__){
return or__28383__auto__;
} else {
var or__28383__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__28383__auto____$1)){
return or__28383__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__37075 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__37075__$1 = ((((!((map__37075 == null)))?((((map__37075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37075):map__37075);
var props = cljs.core.get.call(null,map__37075__$1,false);
var joins = cljs.core.get.call(null,map__37075__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__36985_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__36985_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$], true))));
});})(map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__37077 = cljs.core.seq.call(null,joins);
var chunk__37078 = null;
var count__37079 = (0);
var i__37080 = (0);
while(true){
if((i__37080 < count__37079)){
var join = cljs.core._nth.call(null,chunk__37078,i__37080);
var vec__37081_37111 = om.util.join_entry.call(null,join);
var prop_37112 = cljs.core.nth.call(null,vec__37081_37111,(0),null);
var query_SINGLEQUOTE__37113 = cljs.core.nth.call(null,vec__37081_37111,(1),null);
var prop_dispatch_key_37114 = om.next.get_dispatch_key.call(null,prop_37112);
var recursion_QMARK__37115 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__37113);
var union_recursion_QMARK__37116 = (function (){var and__28371__auto__ = recursion_QMARK__37115;
if(and__28371__auto__){
return union_expr;
} else {
return and__28371__auto__;
}
})();
var query_SINGLEQUOTE__37117__$1 = ((recursion_QMARK__37115)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__37113);
var path_SINGLEQUOTE__37118 = cljs.core.conj.call(null,path,prop_37112);
var rendered_path_SINGLEQUOTE__37119 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__37118));
var cs_37120 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__37119);
var cascade_query_QMARK__37121 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37120),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__37117__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_37120)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__37117__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__37122 = ((cascade_query_QMARK__37121)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37120)):query_SINGLEQUOTE__37117__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__37077,chunk__37078,count__37079,i__37080,vec__37081_37111,prop_37112,query_SINGLEQUOTE__37113,prop_dispatch_key_37114,recursion_QMARK__37115,union_recursion_QMARK__37116,query_SINGLEQUOTE__37117__$1,path_SINGLEQUOTE__37118,rendered_path_SINGLEQUOTE__37119,cs_37120,cascade_query_QMARK__37121,query_SINGLEQUOTE__SINGLEQUOTE__37122,join,map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__36986_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__36986_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_37114,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__37077,chunk__37078,count__37079,i__37080,vec__37081_37111,prop_37112,query_SINGLEQUOTE__37113,prop_dispatch_key_37114,recursion_QMARK__37115,union_recursion_QMARK__37116,query_SINGLEQUOTE__37117__$1,path_SINGLEQUOTE__37118,rendered_path_SINGLEQUOTE__37119,cs_37120,cascade_query_QMARK__37121,query_SINGLEQUOTE__SINGLEQUOTE__37122,join,map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__37121) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__37117__$1,query_SINGLEQUOTE__SINGLEQUOTE__37122))){
var cp__GT_q_SINGLEQUOTE__37123 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__37118,query_SINGLEQUOTE__SINGLEQUOTE__37122,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37123);
} else {
}

var class_SINGLEQUOTE__37124 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__37122));
if((recursion_QMARK__37115) && ((class_SINGLEQUOTE__37124 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37124,query_SINGLEQUOTE__SINGLEQUOTE__37122,path_SINGLEQUOTE__37118,classpath__$1,((recursion_QMARK__37115)?union_expr:null),union_keys);
}

var G__37125 = seq__37077;
var G__37126 = chunk__37078;
var G__37127 = count__37079;
var G__37128 = (i__37080 + (1));
seq__37077 = G__37125;
chunk__37078 = G__37126;
count__37079 = G__37127;
i__37080 = G__37128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37077);
if(temp__4657__auto__){
var seq__37077__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37077__$1)){
var c__29194__auto__ = cljs.core.chunk_first.call(null,seq__37077__$1);
var G__37129 = cljs.core.chunk_rest.call(null,seq__37077__$1);
var G__37130 = c__29194__auto__;
var G__37131 = cljs.core.count.call(null,c__29194__auto__);
var G__37132 = (0);
seq__37077 = G__37129;
chunk__37078 = G__37130;
count__37079 = G__37131;
i__37080 = G__37132;
continue;
} else {
var join = cljs.core.first.call(null,seq__37077__$1);
var vec__37084_37133 = om.util.join_entry.call(null,join);
var prop_37134 = cljs.core.nth.call(null,vec__37084_37133,(0),null);
var query_SINGLEQUOTE__37135 = cljs.core.nth.call(null,vec__37084_37133,(1),null);
var prop_dispatch_key_37136 = om.next.get_dispatch_key.call(null,prop_37134);
var recursion_QMARK__37137 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__37135);
var union_recursion_QMARK__37138 = (function (){var and__28371__auto__ = recursion_QMARK__37137;
if(and__28371__auto__){
return union_expr;
} else {
return and__28371__auto__;
}
})();
var query_SINGLEQUOTE__37139__$1 = ((recursion_QMARK__37137)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__37135);
var path_SINGLEQUOTE__37140 = cljs.core.conj.call(null,path,prop_37134);
var rendered_path_SINGLEQUOTE__37141 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__37140));
var cs_37142 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__37141);
var cascade_query_QMARK__37143 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37142),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__37139__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_37142)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__37139__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__37144 = ((cascade_query_QMARK__37143)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37142)):query_SINGLEQUOTE__37139__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__37077,chunk__37078,count__37079,i__37080,vec__37084_37133,prop_37134,query_SINGLEQUOTE__37135,prop_dispatch_key_37136,recursion_QMARK__37137,union_recursion_QMARK__37138,query_SINGLEQUOTE__37139__$1,path_SINGLEQUOTE__37140,rendered_path_SINGLEQUOTE__37141,cs_37142,cascade_query_QMARK__37143,query_SINGLEQUOTE__SINGLEQUOTE__37144,join,seq__37077__$1,temp__4657__auto__,map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__36986_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__36986_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_37136,cljs.core.PersistentHashSet.fromArray([class$], true)], true, false));
});})(seq__37077,chunk__37078,count__37079,i__37080,vec__37084_37133,prop_37134,query_SINGLEQUOTE__37135,prop_dispatch_key_37136,recursion_QMARK__37137,union_recursion_QMARK__37138,query_SINGLEQUOTE__37139__$1,path_SINGLEQUOTE__37140,rendered_path_SINGLEQUOTE__37141,cs_37142,cascade_query_QMARK__37143,query_SINGLEQUOTE__SINGLEQUOTE__37144,join,seq__37077__$1,temp__4657__auto__,map__37075,map__37075__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__37143) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__37139__$1,query_SINGLEQUOTE__SINGLEQUOTE__37144))){
var cp__GT_q_SINGLEQUOTE__37145 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__37140,query_SINGLEQUOTE__SINGLEQUOTE__37144,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37145);
} else {
}

var class_SINGLEQUOTE__37146 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__37144));
if((recursion_QMARK__37137) && ((class_SINGLEQUOTE__37146 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37146,query_SINGLEQUOTE__SINGLEQUOTE__37144,path_SINGLEQUOTE__37140,classpath__$1,((recursion_QMARK__37137)?union_expr:null),union_keys);
}

var G__37147 = cljs.core.next.call(null,seq__37077__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__37077 = G__37147;
chunk__37078 = G__37148;
count__37079 = G__37149;
i__37080 = G__37150;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__37087 = cljs.core.seq.call(null,query);
var chunk__37088 = null;
var count__37089 = (0);
var i__37090 = (0);
while(true){
if((i__37090 < count__37089)){
var vec__37091 = cljs.core._nth.call(null,chunk__37088,i__37090);
var prop = cljs.core.nth.call(null,vec__37091,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37091,(1),null);
var path_SINGLEQUOTE__37151 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__37152 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_37153 = cljs.core.filter.call(null,((function (seq__37087,chunk__37088,count__37089,i__37090,path_SINGLEQUOTE__37151,class_SINGLEQUOTE__37152,vec__37091,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__36987_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__37152,om.next.react_type.call(null,p1__36987_SHARP_));
});})(seq__37087,chunk__37088,count__37089,i__37090,path_SINGLEQUOTE__37151,class_SINGLEQUOTE__37152,vec__37091,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__37154 = (function (){var and__28371__auto__ = class_SINGLEQUOTE__37152;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37153),(1));
} else {
return and__28371__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__37155 = (cljs.core.truth_(cascade_query_QMARK__37154)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37153)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__28371__auto__ = cascade_query_QMARK__37154;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__37155);
} else {
return and__28371__auto__;
}
})())){
var qs_37156 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_37157 = cljs.core.first.call(null,qs_37156);
var qnode_37158 = clojure.zip.node.call(null,(function (){var G__37094 = q_37157;
if((class$ == null)){
return om.next.query_template.call(null,G__37094,path);
} else {
return G__37094;
}
})());
var new_query_37159 = cljs.core.assoc.call(null,qnode_37158,prop,query_SINGLEQUOTE__SINGLEQUOTE__37155);
var q_SINGLEQUOTE__37160 = (function (){var G__37095 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_37157),path),new_query_37159);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__37095),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__37095;
}
})();
var qs_SINGLEQUOTE__37161 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__37160], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_37157], true)),qs_37156);
var cp__GT_q_SINGLEQUOTE__37162 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__37161], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__37160),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37162);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37152,query_SINGLEQUOTE__SINGLEQUOTE__37155,path_SINGLEQUOTE__37151,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__37163 = seq__37087;
var G__37164 = chunk__37088;
var G__37165 = count__37089;
var G__37166 = (i__37090 + (1));
seq__37087 = G__37163;
chunk__37088 = G__37164;
count__37089 = G__37165;
i__37090 = G__37166;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37087);
if(temp__4657__auto__){
var seq__37087__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37087__$1)){
var c__29194__auto__ = cljs.core.chunk_first.call(null,seq__37087__$1);
var G__37167 = cljs.core.chunk_rest.call(null,seq__37087__$1);
var G__37168 = c__29194__auto__;
var G__37169 = cljs.core.count.call(null,c__29194__auto__);
var G__37170 = (0);
seq__37087 = G__37167;
chunk__37088 = G__37168;
count__37089 = G__37169;
i__37090 = G__37170;
continue;
} else {
var vec__37096 = cljs.core.first.call(null,seq__37087__$1);
var prop = cljs.core.nth.call(null,vec__37096,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37096,(1),null);
var path_SINGLEQUOTE__37171 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__37172 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_37173 = cljs.core.filter.call(null,((function (seq__37087,chunk__37088,count__37089,i__37090,path_SINGLEQUOTE__37171,class_SINGLEQUOTE__37172,vec__37096,prop,query_SINGLEQUOTE_,seq__37087__$1,temp__4657__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__36987_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__37172,om.next.react_type.call(null,p1__36987_SHARP_));
});})(seq__37087,chunk__37088,count__37089,i__37090,path_SINGLEQUOTE__37171,class_SINGLEQUOTE__37172,vec__37096,prop,query_SINGLEQUOTE_,seq__37087__$1,temp__4657__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__37174 = (function (){var and__28371__auto__ = class_SINGLEQUOTE__37172;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_37173),(1));
} else {
return and__28371__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__37175 = (cljs.core.truth_(cascade_query_QMARK__37174)?om.next.get_query.call(null,cljs.core.first.call(null,cs_37173)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__28371__auto__ = cascade_query_QMARK__37174;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__37175);
} else {
return and__28371__auto__;
}
})())){
var qs_37176 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_37177 = cljs.core.first.call(null,qs_37176);
var qnode_37178 = clojure.zip.node.call(null,(function (){var G__37099 = q_37177;
if((class$ == null)){
return om.next.query_template.call(null,G__37099,path);
} else {
return G__37099;
}
})());
var new_query_37179 = cljs.core.assoc.call(null,qnode_37178,prop,query_SINGLEQUOTE__SINGLEQUOTE__37175);
var q_SINGLEQUOTE__37180 = (function (){var G__37100 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_37177),path),new_query_37179);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__37100),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__37100;
}
})();
var qs_SINGLEQUOTE__37181 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__37180], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_37177], true)),qs_37176);
var cp__GT_q_SINGLEQUOTE__37182 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__37181], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__37180),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__37182);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__37172,query_SINGLEQUOTE__SINGLEQUOTE__37175,path_SINGLEQUOTE__37171,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__37183 = cljs.core.next.call(null,seq__37087__$1);
var G__37184 = null;
var G__37185 = (0);
var G__37186 = (0);
seq__37087 = G__37183;
chunk__37088 = G__37184;
count__37089 = G__37185;
i__37090 = G__37186;
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
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_.call(null,root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__35545__auto___37187 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__35545__auto___37187,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

var l__35545__auto___37188 = om.next._STAR_logger_STAR_;
if(cljs.core.some_QMARK_.call(null,cljs.core.second.call(null,ident))){
} else {
goog.log.error(l__35545__auto___37188,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("component "),cljs.core.str(c.constructor.displayName),cljs.core.str("'s ident ("),cljs.core.str(ident),cljs.core.str(") has a `nil` second element."),cljs.core.str(" This warning can be safely ignored if that is intended.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__37102 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__37102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__37102;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__37104 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__37104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__37104;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cs = temp__4655__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__4655__auto__,indexes__$1,___$1){
return (function (p1__36988_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__36988_SHARP_], null));
});})(temp__4655__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29005__auto__,k__29006__auto__){
var self__ = this;
var this__29005__auto____$1 = this;
return cljs.core._lookup.call(null,this__29005__auto____$1,k__29006__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29007__auto__,k36990,else__29008__auto__){
var self__ = this;
var this__29007__auto____$1 = this;
var G__37105 = (((k36990 instanceof cljs.core.Keyword))?k36990.fqn:null);
switch (G__37105) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36990,else__29008__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29019__auto__,writer__29020__auto__,opts__29021__auto__){
var self__ = this;
var this__29019__auto____$1 = this;
var pr_pair__29022__auto__ = ((function (this__29019__auto____$1){
return (function (keyval__29023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29020__auto__,cljs.core.pr_writer,""," ","",opts__29021__auto__,keyval__29023__auto__);
});})(this__29019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29020__auto__,pr_pair__29022__auto__,"#om.next.Indexer{",", ","}",opts__29021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = true;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36989){
var self__ = this;
var G__36989__$1 = this;
return (new cljs.core.RecordIter((0),G__36989__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29003__auto__){
var self__ = this;
var this__29003__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28999__auto__){
var self__ = this;
var this__28999__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29009__auto__){
var self__ = this;
var this__29009__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29000__auto__){
var self__ = this;
var this__29000__auto____$1 = this;
var h__28818__auto__ = self__.__hash;
if(!((h__28818__auto__ == null))){
return h__28818__auto__;
} else {
var h__28818__auto____$1 = cljs.core.hash_imap.call(null,this__29000__auto____$1);
self__.__hash = h__28818__auto____$1;

return h__28818__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29001__auto__,other__29002__auto__){
var self__ = this;
var this__29001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28371__auto__ = other__29002__auto__;
if(cljs.core.truth_(and__28371__auto__)){
var and__28371__auto____$1 = (this__29001__auto____$1.constructor === other__29002__auto__.constructor);
if(and__28371__auto____$1){
return cljs.core.equiv_map.call(null,this__29001__auto____$1,other__29002__auto__);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29014__auto__,k__29015__auto__){
var self__ = this;
var this__29014__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__29015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29014__auto____$1),self__.__meta),k__29015__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29015__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29012__auto__,k__29013__auto__,G__36989){
var self__ = this;
var this__29012__auto____$1 = this;
var pred__37106 = cljs.core.keyword_identical_QMARK_;
var expr__37107 = k__29013__auto__;
if(cljs.core.truth_(pred__37106.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__37107))){
return (new om.next.Indexer(G__36989,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37106.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__37107))){
return (new om.next.Indexer(self__.indexes,G__36989,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29013__auto__,G__36989),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29017__auto__){
var self__ = this;
var this__29017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29004__auto__,G__36989){
var self__ = this;
var this__29004__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__36989,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29010__auto__,entry__29011__auto__){
var self__ = this;
var this__29010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29011__auto__)){
return cljs.core._assoc.call(null,this__29010__auto____$1,cljs.core._nth.call(null,entry__29011__auto__,(0)),cljs.core._nth.call(null,entry__29011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29010__auto____$1,entry__29011__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__29039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__29039__auto__,writer__29040__auto__){
return cljs.core._write.call(null,writer__29040__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__36991){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__36991),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__36991),null,cljs.core.dissoc.call(null,G__36991,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args37190 = [];
var len__29458__auto___37193 = arguments.length;
var i__29459__auto___37194 = (0);
while(true){
if((i__29459__auto___37194 < len__29458__auto___37193)){
args37190.push((arguments[i__29459__auto___37194]));

var G__37195 = (i__29459__auto___37194 + (1));
i__29459__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var G__37192 = args37190.length;
switch (G__37192) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37190.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args37198 = [];
var len__29458__auto___37202 = arguments.length;
var i__29459__auto___37203 = (0);
while(true){
if((i__29459__auto___37203 < len__29458__auto___37202)){
args37198.push((arguments[i__29459__auto___37203]));

var G__37204 = (i__29459__auto___37203 + (1));
i__29459__auto___37203 = G__37204;
continue;
} else {
}
break;
}

var G__37200 = args37198.length;
switch (G__37200) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37198.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__37201 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__37201);
} else {
return G__37201;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__37197_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__37197_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist at the intersection of component path "),cljs.core.str(cp),cljs.core.str(" and data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__37226 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__37226,(0),null);
var sel = cljs.core.nth.call(null,vec__37226,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__37241 = cljs.core.next.call(null,q);
var G__37242 = ret;
q = G__37241;
ret = G__37242;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__37243 = cljs.core.next.call(null,q);
var G__37244 = cljs.core.assoc.call(null,ret,k,i);
q = G__37243;
ret = G__37244;
continue;
} else {
var G__37245 = cljs.core.next.call(null,q);
var G__37246 = cljs.core.assoc.call(null,ret,k,x);
q = G__37245;
ret = G__37246;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__37206_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__37206_SHARP_,refs,union_entry);
});})(q,ret,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__37208_SHARP_){
return om.next.ident.call(null,class$,p1__37208_SHARP_);
});})(q,ret,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__37233){
var vec__37234 = p__37233;
var i = cljs.core.nth.call(null,vec__37234,(0),null);
var x = cljs.core.nth.call(null,vec__37234,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__37237){
var vec__37238 = p__37237;
var i = cljs.core.nth.call(null,vec__37238,(0),null);
var x = cljs.core.nth.call(null,vec__37238,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__37226,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__37247 = cljs.core.next.call(null,q);
var G__37248 = cljs.core.assoc.call(null,ret,k,is);
q = G__37247;
ret = G__37248;
continue;
} else {
var G__37249 = cljs.core.next.call(null,q);
var G__37250 = cljs.core.assoc.call(null,ret,k,xs);
q = G__37249;
ret = G__37250;
continue;
}
} else {
if((v == null)){
var G__37251 = cljs.core.next.call(null,q);
var G__37252 = ret;
q = G__37251;
ret = G__37252;
continue;
} else {
var G__37253 = cljs.core.next.call(null,q);
var G__37254 = cljs.core.assoc.call(null,ret,k,v);
q = G__37253;
ret = G__37254;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__37255 = cljs.core.next.call(null,q);
var G__37256 = ret;
q = G__37255;
ret = G__37256;
continue;
} else {
var G__37257 = cljs.core.next.call(null,q);
var G__37258 = cljs.core.assoc.call(null,ret,k,v);
q = G__37257;
ret = G__37258;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args37259 = [];
var len__29458__auto___37262 = arguments.length;
var i__29459__auto___37263 = (0);
while(true){
if((i__29459__auto___37263 < len__29458__auto___37262)){
args37259.push((arguments[i__29459__auto___37263]));

var G__37264 = (i__29459__auto___37263 + (1));
i__29459__auto___37263 = G__37264;
continue;
} else {
}
break;
}

var G__37261 = args37259.length;
switch (G__37261) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37259.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__37269 = cljs.core.group_by.call(null,(function (p1__37266_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__37266_SHARP_));
}),res);
var map__37269__$1 = ((((!((map__37269 == null)))?((((map__37269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37269):map__37269);
var idents = cljs.core.get.call(null,map__37269__$1,true);
var rest = cljs.core.get.call(null,map__37269__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__37272 = node;
if(typeof node === 'number'){
return (G__37272 - (1));
} else {
return G__37272;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37277){
var vec__37278 = p__37277;
var k = cljs.core.nth.call(null,vec__37278,(0),null);
var q = cljs.core.nth.call(null,vec__37278,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__28371__auto__ = union_expr;
if(cljs.core.truth_(and__28371__auto__)){
return recurse_key;
} else {
return and__28371__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__37328 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__37328;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__37306 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__37306__$1 = ((((!((map__37306 == null)))?((((map__37306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37306):map__37306);
var props = cljs.core.get.call(null,map__37306__$1,false);
var joins = cljs.core.get.call(null,map__37306__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__37306,map__37306__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__37281_SHARP_){
var G__37308 = p1__37281_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__37281_SHARP_)){
return cljs.core.first.call(null,G__37308);
} else {
return G__37308;
}
});})(map__37306,map__37306__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__37309 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__37309,(0),null);
var sel = cljs.core.nth.call(null,vec__37309,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__37329 = cljs.core.next.call(null,joins__$1);
var G__37330 = cljs.core.assoc.call(null,ret,key,om$next$denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__37329;
ret = G__37330;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__37312 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__37312,recurse_key);
} else {
return G__37312;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__37313 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__37313,recurse_key);
} else {
return G__37313;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__37314 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__37314,cljs.core.first.call(null,ident));
} else {
return G__37314;
}
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__28371__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__28371__auto__){
return union_recur_QMARK_;
} else {
return and__28371__auto__;
}
})())){
return om$next$denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__37315 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__37282_SHARP_){
var or__28383__auto__ = om.util.join_QMARK_.call(null,p1__37282_SHARP_);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__37282_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__37282_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__37282_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__37315__$1 = ((((!((map__37315 == null)))?((((map__37315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37315):map__37315);
var props = cljs.core.get.call(null,map__37315__$1,false);
var joins = cljs.core.get.call(null,map__37315__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__37315,map__37315__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__37283_SHARP_){
var G__37317 = p1__37283_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__37283_SHARP_)){
return cljs.core.first.call(null,G__37317);
} else {
return G__37317;
}
});})(map__37315,map__37315__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__37321 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__37321);
} else {
return G__37321;
}
})();
var join__$2 = (function (){var G__37322 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__37322],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__37322;
}
})();
var vec__37318 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__37318,(0),null);
var sel = cljs.core.nth.call(null,vec__37318,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__37323 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__37323);
} else {
return G__37323;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__37331 = next;
v__$1 = G__37331;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__28371__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__28371__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__28371__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__28371__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__28371__auto__)){
return recurse_QMARK_;
} else {
return and__28371__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__37332 = cljs.core.next.call(null,joins__$1);
var G__37333 = ret;
joins__$1 = G__37332;
ret = G__37333;
continue;
} else {
if(graph_loop_QMARK_){
var G__37334 = cljs.core.next.call(null,joins__$1);
var G__37335 = ret;
joins__$1 = G__37334;
ret = G__37335;
continue;
} else {
if((v__$1 == null)){
var G__37336 = cljs.core.next.call(null,joins__$1);
var G__37337 = ret;
joins__$1 = G__37336;
ret = G__37337;
continue;
} else {
var G__37338 = cljs.core.next.call(null,joins__$1);
var G__37339 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__37338;
ret = G__37339;
continue;

}
}
}
} else {
var temp__4655__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__37315,map__37315__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__37324){
var vec__37325 = p__37324;
var k = cljs.core.nth.call(null,vec__37325,(0),null);
var identset = cljs.core.nth.call(null,vec__37325,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__37315,map__37315__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__4655__auto__)){
var looped_key = temp__4655__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args37340 = [];
var len__29458__auto___37343 = arguments.length;
var i__29459__auto___37344 = (0);
while(true){
if((i__29459__auto___37344 < len__29458__auto___37343)){
args37340.push((arguments[i__29459__auto___37344]));

var G__37345 = (i__29459__auto___37344 + (1));
i__29459__auto___37344 = G__37345;
continue;
} else {
}
break;
}

var G__37342 = args37340.length;
switch (G__37342) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37340.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__37370){
var vec__37374 = p__37370;
var k = cljs.core.nth.call(null,vec__37374,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__37374,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__37374,k,orig_paths){
return (function (p1__37347_SHARP_,p2__37348_SHARP_){
return cljs.core.assoc_in.call(null,p1__37347_SHARP_,cljs.core.conj.call(null,p2__37348_SHARP_,k),to_move);
});})(to_move,vec__37374,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value.call(null,join);
if(cljs.core.vector_QMARK_.call(null,joinvalue)){
return cljs.core.mapcat.call(null,((function (joinvalue){
return (function (p1__37377_SHARP_){
return om$next$move_roots.call(null,p1__37377_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
});})(joinvalue))
,joinvalue);
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__28371__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__28371__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__28371__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__28383__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__37382){
var vec__37383 = p__37382;
var jkey = cljs.core.nth.call(null,vec__37383,(0),null);
var jsel = cljs.core.nth.call(null,vec__37383,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__37407){
var vec__37411 = p__37407;
var expr = cljs.core.nth.call(null,vec__37411,(0),null);
var path = cljs.core.nth.call(null,vec__37411,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__37431 = config;
var map__37431__$1 = ((((!((map__37431 == null)))?((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37431):map__37431);
var merge_ident = cljs.core.get.call(null,map__37431__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__37431__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__37431,map__37431__$1,merge_ident,indexer){
return (function (p1__37414_SHARP_){
var and__28371__auto__ = om.util.join_QMARK_.call(null,p1__37414_SHARP_);
if(cljs.core.truth_(and__28371__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__37414_SHARP_));
} else {
return and__28371__auto__;
}
});})(map__37431,map__37431__$1,merge_ident,indexer))
,query));
var step = ((function (map__37431,map__37431__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__37440){
var vec__37444 = p__37440;
var ident = cljs.core.nth.call(null,vec__37444,(0),null);
var props = cljs.core.nth.call(null,vec__37444,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__28383__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__37431,map__37431__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__37450 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__37450,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__37450,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__28383__auto__ = query;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args37453 = [];
var len__29458__auto___37458 = arguments.length;
var i__29459__auto___37459 = (0);
while(true){
if((i__29459__auto___37459 < len__29458__auto___37458)){
args37453.push((arguments[i__29459__auto___37459]));

var G__37460 = (i__29459__auto___37459 + (1));
i__29459__auto___37459 = G__37460;
continue;
} else {
}
break;
}

var G__37455 = args37453.length;
switch (G__37455) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37453.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.call(null,reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__37456 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__37456__$1 = ((((!((map__37456 == null)))?((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37456):map__37456);
var keys = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if((remote == null)){
om.next.protocols.queue_BANG_.call(null,reconciler,keys);
} else {
}

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__28383__auto__ = query;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29005__auto__,k__29006__auto__){
var self__ = this;
var this__29005__auto____$1 = this;
return cljs.core._lookup.call(null,this__29005__auto____$1,k__29006__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29007__auto__,k37467,else__29008__auto__){
var self__ = this;
var this__29007__auto____$1 = this;
var G__37469 = (((k37467 instanceof cljs.core.Keyword))?k37467.fqn:null);
switch (G__37469) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37467,else__29008__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return om.next.protocols.queue_BANG_.call(null,this$__$1,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,ks);
} else {
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.call(null,this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.call(null,this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.next.protocols.reconcile_BANG_.call(null,this$__$1,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = ((!((remote == null)))?cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__37463_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__37463_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__37464_SHARP_,p2__37465_SHARP_){
return cljs.core.into.call(null,p1__37464_SHARP_,p2__37465_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__37470 = self__.config;
var map__37470__$1 = ((((!((map__37470 == null)))?((((map__37470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37470):map__37470);
var ui__GT_props = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__37472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__37473 = null;
var count__37474 = (0);
var i__37475 = (0);
while(true){
if((i__37475 < count__37474)){
var c = cljs.core._nth.call(null,chunk__37473,i__37475);
var props_change_QMARK__37483 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_37484 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_37485 = ui__GT_props.call(null,env,c);
var next_props_37486 = om.next.computed.call(null,next_raw_props_37485,computed_37484);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__37483)){
var next_props_37487__$1 = (((next_props_37486 == null))?(function (){var temp__4657__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var props = temp__4657__auto__;
return props;
} else {
return null;
}
})():next_props_37486);
c.componentWillReceiveProps({"omcljs$value": om.next.om_props.call(null,next_props_37487__$1,om.next.protocols.basis_t.call(null,this$__$1))});
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_37486,om.next.get_state.call(null,c)))){
if(!((next_props_37486 == null))){
om.next.update_component_BANG_.call(null,c,next_props_37486);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__37483)){
var temp__4657__auto___37488 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__4657__auto___37488)){
var update_path_37489 = temp__4657__auto___37488;
var p_37490 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_37490)){
var update_path_SINGLEQUOTE__37491 = cljs.core.subvec.call(null,update_path_37489,cljs.core.count.call(null,om.next.path.call(null,p_37490)));
om.next.update_props_BANG_.call(null,p_37490,cljs.core.assoc_in.call(null,om.next.props.call(null,p_37490),update_path_SINGLEQUOTE__37491,next_raw_props_37485));

om.next.merge_pending_props_BANG_.call(null,p_37490);

var G__37492 = om.next.parent.call(null,p_37490);
p_37490 = G__37492;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__37493 = seq__37472;
var G__37494 = chunk__37473;
var G__37495 = count__37474;
var G__37496 = (i__37475 + (1));
seq__37472 = G__37493;
chunk__37473 = G__37494;
count__37474 = G__37495;
i__37475 = G__37496;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37472);
if(temp__4657__auto__){
var seq__37472__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37472__$1)){
var c__29194__auto__ = cljs.core.chunk_first.call(null,seq__37472__$1);
var G__37497 = cljs.core.chunk_rest.call(null,seq__37472__$1);
var G__37498 = c__29194__auto__;
var G__37499 = cljs.core.count.call(null,c__29194__auto__);
var G__37500 = (0);
seq__37472 = G__37497;
chunk__37473 = G__37498;
count__37474 = G__37499;
i__37475 = G__37500;
continue;
} else {
var c = cljs.core.first.call(null,seq__37472__$1);
var props_change_QMARK__37501 = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_37502 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_37503 = ui__GT_props.call(null,env,c);
var next_props_37504 = om.next.computed.call(null,next_raw_props_37503,computed_37502);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__37501)){
var next_props_37505__$1 = (((next_props_37504 == null))?(function (){var temp__4657__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__4657__auto____$1)){
var props = temp__4657__auto____$1;
return props;
} else {
return null;
}
})():next_props_37504);
c.componentWillReceiveProps({"omcljs$value": om.next.om_props.call(null,next_props_37505__$1,om.next.protocols.basis_t.call(null,this$__$1))});
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_37504,om.next.get_state.call(null,c)))){
if(!((next_props_37504 == null))){
om.next.update_component_BANG_.call(null,c,next_props_37504);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__37501)){
var temp__4657__auto___37506__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__4657__auto___37506__$1)){
var update_path_37507 = temp__4657__auto___37506__$1;
var p_37508 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_37508)){
var update_path_SINGLEQUOTE__37509 = cljs.core.subvec.call(null,update_path_37507,cljs.core.count.call(null,om.next.path.call(null,p_37508)));
om.next.update_props_BANG_.call(null,p_37508,cljs.core.assoc_in.call(null,om.next.props.call(null,p_37508),update_path_SINGLEQUOTE__37509,next_raw_props_37503));

om.next.merge_pending_props_BANG_.call(null,p_37508);

var G__37510 = om.next.parent.call(null,p_37508);
p_37508 = G__37510;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__37511 = cljs.core.next.call(null,seq__37472__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__37472 = G__37511;
chunk__37473 = G__37512;
count__37474 = G__37513;
i__37475 = G__37514;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__28371__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__28371__auto__;
}
})())){
var new_state_37515 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_37516 = cljs.core.meta.call(null,new_state_37515);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_37515,refs_37516));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_37476 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_37477 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37478 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__4657__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37478;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37477;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37476;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__28383__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__28383__auto__ = target;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__37462_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__37462_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__28383__auto__ = target;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__4657__auto___37517 = om.next.get_query.call(null,(function (){var or__28383__auto__ = (function (){var and__28371__auto__ = target;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__28371__auto__;
}
})();
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___37517)){
var sel_37518 = temp__4657__auto___37517;
var env_37519 = om.next.to_env.call(null,self__.config);
var snds_37520 = om.next.gather_sends.call(null,env_37519,sel_37518,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_37520)){
} else {
var temp__4657__auto___37521__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___37521__$1)){
var send_37522 = temp__4657__auto___37521__$1;
send_37522.call(null,snds_37520,((function (send_37522,temp__4657__auto___37521__$1,env_37519,snds_37520,sel_37518,temp__4657__auto___37517,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.call(null,this$__$1,resp,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_37519,sel_37518));
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.call(null,this$__$1,resp,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_37519,sel_37518));
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(send_37522,temp__4657__auto___37521__$1,env_37519,snds_37520,sel_37518,temp__4657__auto___37517,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__28383__auto__ = c;
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29019__auto__,writer__29020__auto__,opts__29021__auto__){
var self__ = this;
var this__29019__auto____$1 = this;
var pr_pair__29022__auto__ = ((function (this__29019__auto____$1){
return (function (keyval__29023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29020__auto__,cljs.core.pr_writer,""," ","",opts__29021__auto__,keyval__29023__auto__);
});})(this__29019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29020__auto__,pr_pair__29022__auto__,"#om.next.Reconciler{",", ","}",opts__29021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = true;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37466){
var self__ = this;
var G__37466__$1 = this;
return (new cljs.core.RecordIter((0),G__37466__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29003__auto__){
var self__ = this;
var this__29003__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28999__auto__){
var self__ = this;
var this__28999__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29009__auto__){
var self__ = this;
var this__29009__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29000__auto__){
var self__ = this;
var this__29000__auto____$1 = this;
var h__28818__auto__ = self__.__hash;
if(!((h__28818__auto__ == null))){
return h__28818__auto__;
} else {
var h__28818__auto____$1 = cljs.core.hash_imap.call(null,this__29000__auto____$1);
self__.__hash = h__28818__auto____$1;

return h__28818__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29001__auto__,other__29002__auto__){
var self__ = this;
var this__29001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28371__auto__ = other__29002__auto__;
if(cljs.core.truth_(and__28371__auto__)){
var and__28371__auto____$1 = (this__29001__auto____$1.constructor === other__29002__auto__.constructor);
if(and__28371__auto____$1){
return cljs.core.equiv_map.call(null,this__29001__auto____$1,other__29002__auto__);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29014__auto__,k__29015__auto__){
var self__ = this;
var this__29014__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__29015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29014__auto____$1),self__.__meta),k__29015__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29015__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29012__auto__,k__29013__auto__,G__37466){
var self__ = this;
var this__29012__auto____$1 = this;
var pred__37479 = cljs.core.keyword_identical_QMARK_;
var expr__37480 = k__29013__auto__;
if(cljs.core.truth_(pred__37479.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__37480))){
return (new om.next.Reconciler(G__37466,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37479.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__37480))){
return (new om.next.Reconciler(self__.config,G__37466,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29013__auto__,G__37466),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29017__auto__){
var self__ = this;
var this__29017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29004__auto__,G__37466){
var self__ = this;
var this__29004__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__37466,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29010__auto__,entry__29011__auto__){
var self__ = this;
var this__29010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29011__auto__)){
return cljs.core._assoc.call(null,this__29010__auto____$1,cljs.core._nth.call(null,entry__29011__auto__,(0)),cljs.core._nth.call(null,entry__29011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29010__auto____$1,entry__29011__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__29039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__29039__auto__,writer__29040__auto__){
return cljs.core._write.call(null,writer__29040__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__37468){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__37468),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__37468),null,cljs.core.dissoc.call(null,G__37468,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__37523,c){
var map__37529 = p__37523;
var map__37529__$1 = ((((!((map__37529 == null)))?((((map__37529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37529):map__37529);
var env = map__37529__$1;
var parser = cljs.core.get.call(null,map__37529__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__37529__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__28371__auto__ = pathopt;
if(and__28371__auto__){
var and__28371__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__28371__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__28371__auto____$1;
}
} else {
return and__28371__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__4657__auto___37534 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___37534)){
var l_37535 = temp__4657__auto___37534;
var dt_37536 = (e - s);
var component_name_37537 = c.constructor.displayName;
if(((16) < dt_37536)){
goog.log.warning(l_37535,[cljs.core.str(component_name_37537),cljs.core.str(" query took "),cljs.core.str(dt_37536),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args37538 = [];
var len__29458__auto___37585 = arguments.length;
var i__29459__auto___37586 = (0);
while(true){
if((i__29459__auto___37586 < len__29458__auto___37585)){
args37538.push((arguments[i__29459__auto___37586]));

var G__37587 = (i__29459__auto___37586 + (1));
i__29459__auto___37586 = G__37587;
continue;
} else {
}
break;
}

var G__37540 = args37538.length;
switch (G__37540) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37538.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__37563){
var vec__37567 = p__37563;
var table = cljs.core.nth.call(null,vec__37567,(0),null);
var id = cljs.core.nth.call(null,vec__37567,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__37570){
var vec__37578 = p__37570;
var old = cljs.core.nth.call(null,vec__37578,(0),null);
var vec__37581 = cljs.core.nth.call(null,vec__37578,(1),null);
var _ = cljs.core.nth.call(null,vec__37581,(0),null);
var id = cljs.core.nth.call(null,vec__37581,(1),null);
var new$ = vec__37581;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__37584 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__37584,id_key,id);
} else {
return G__37584;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__37589_SHARP_){
return cljs.core.update_in.call(null,p1__37589_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__37590_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__37590_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__37601 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__37601);
} else {
return G__37601;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__37591_SHARP_){
return cljs.core.update_in.call(null,p1__37591_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__37602 = cljs.core.next.call(null,exprs);
var G__37603 = ret__$1;
exprs = G__37602;
ret__$1 = G__37603;
continue;
} else {
var G__37604 = cljs.core.next.call(null,exprs);
var G__37605 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__37604;
ret__$1 = G__37605;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__37606 = cljs.core.next.call(null,exprs);
var G__37607 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__37606;
ret__$1 = G__37607;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__37592_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__37592_SHARP_))),p1__37592_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__37608 = cljs.core.next.call(null,exprs);
var G__37609 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__37608;
ret__$1 = G__37609;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__37610 = cljs.core.next.call(null,exprs);
var G__37611 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__37610;
ret__$1 = G__37611;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__37593_SHARP_){
return cljs.core.update_in.call(null,p1__37593_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__28383__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__37612 = cljs.core.next.call(null,exprs);
var G__37613 = null;
exprs = G__37612;
ret__$1 = G__37613;
continue;
} else {
var G__37614 = cljs.core.next.call(null,exprs);
var G__37615 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__37614;
ret__$1 = G__37615;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__37621){
var map__37625 = p__37621;
var map__37625__$1 = ((((!((map__37625 == null)))?((((map__37625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37625):map__37625);
var config = map__37625__$1;
var root_render = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__37625,map__37625__$1,config){
return (function (p1__37618_SHARP_,p2__37619_SHARP_){
return ReactDOM.render(p1__37618_SHARP_,p2__37619_SHARP_);
});})(map__37625,map__37625__$1,config))
);
var normalize = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var tx_listen = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var pathopt = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__37616_SHARP_,p2__37617_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__37616_SHARP_,p2__37617_SHARP_);
});})(map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__37620_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__37620_SHARP_);
});})(map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__37625,map__37625__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__28383__auto__ = !(norm_QMARK_);
if(or__28383__auto__){
return or__28383__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$protocols$IReconciler$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args37630 = [];
var len__29458__auto___37633 = arguments.length;
var i__29459__auto___37634 = (0);
while(true){
if((i__29459__auto___37634 < len__29458__auto___37633)){
args37630.push((arguments[i__29459__auto___37634]));

var G__37635 = (i__29459__auto___37634 + (1));
i__29459__auto___37634 = G__37635;
continue;
} else {
}
break;
}

var G__37632 = args37630.length;
switch (G__37632) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37630.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args37637 = [];
var len__29458__auto___37640 = arguments.length;
var i__29459__auto___37641 = (0);
while(true){
if((i__29459__auto___37641 < len__29458__auto___37640)){
args37637.push((arguments[i__29459__auto___37641]));

var G__37642 = (i__29459__auto___37641 + (1));
i__29459__auto___37641 = G__37642;
continue;
} else {
}
break;
}

var G__37639 = args37637.length;
switch (G__37639) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37637.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args37644 = [];
var len__29458__auto___37647 = arguments.length;
var i__29459__auto___37648 = (0);
while(true){
if((i__29459__auto___37648 < len__29458__auto___37647)){
args37644.push((arguments[i__29459__auto___37648]));

var G__37649 = (i__29459__auto___37648 + (1));
i__29459__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var G__37646 = args37644.length;
switch (G__37646) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37644.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args37651 = [];
var len__29458__auto___37654 = arguments.length;
var i__29459__auto___37655 = (0);
while(true){
if((i__29459__auto___37655 < len__29458__auto___37654)){
args37651.push((arguments[i__29459__auto___37655]));

var G__37656 = (i__29459__auto___37655 + (1));
i__29459__auto___37655 = G__37656;
continue;
} else {
}
break;
}

var G__37653 = args37651.length;
switch (G__37653) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37651.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__29217__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29217__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map?rel=1489205922138