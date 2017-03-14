// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-4";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38058 = [];
var len__29456__auto___38061 = arguments.length;
var i__29457__auto___38062 = (0);
while(true){
if((i__29457__auto___38062 < len__29456__auto___38061)){
args38058.push((arguments[i__29457__auto___38062]));

var G__38063 = (i__29457__auto___38062 + (1));
i__29457__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var G__38060 = args38058.length;
switch (G__38060) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38058.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29463__auto__ = [];
var len__29456__auto___38066 = arguments.length;
var i__29457__auto___38067 = (0);
while(true){
if((i__29457__auto___38067 < len__29456__auto___38066)){
args__29463__auto__.push((arguments[i__29457__auto___38067]));

var G__38068 = (i__29457__auto___38067 + (1));
i__29457__auto___38067 = G__38068;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38065){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38065));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29463__auto__ = [];
var len__29456__auto___38070 = arguments.length;
var i__29457__auto___38071 = (0);
while(true){
if((i__29457__auto___38071 < len__29456__auto___38070)){
args__29463__auto__.push((arguments[i__29457__auto___38071]));

var G__38072 = (i__29457__auto___38071 + (1));
i__29457__auto___38071 = G__38072;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38069){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38069));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38073 = cljs.core._EQ_;
var expr__38074 = (function (){var or__28381__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38077){if((e38077 instanceof Error)){
var e = e38077;
return false;
} else {
throw e38077;

}
}})();
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38073.call(null,"true",expr__38074))){
return true;
} else {
if(cljs.core.truth_(pred__38073.call(null,"false",expr__38074))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38074)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38079){if((e38079 instanceof Error)){
var e = e38079;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38079;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38080){
var map__38083 = p__38080;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var message = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28381__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28369__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28369__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28369__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30553__auto___38245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___38245,ch){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___38245,ch){
return (function (state_38214){
var state_val_38215 = (state_38214[(1)]);
if((state_val_38215 === (7))){
var inst_38210 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38216_38246 = state_38214__$1;
(statearr_38216_38246[(2)] = inst_38210);

(statearr_38216_38246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (1))){
var state_38214__$1 = state_38214;
var statearr_38217_38247 = state_38214__$1;
(statearr_38217_38247[(2)] = null);

(statearr_38217_38247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (4))){
var inst_38167 = (state_38214[(7)]);
var inst_38167__$1 = (state_38214[(2)]);
var state_38214__$1 = (function (){var statearr_38218 = state_38214;
(statearr_38218[(7)] = inst_38167__$1);

return statearr_38218;
})();
if(cljs.core.truth_(inst_38167__$1)){
var statearr_38219_38248 = state_38214__$1;
(statearr_38219_38248[(1)] = (5));

} else {
var statearr_38220_38249 = state_38214__$1;
(statearr_38220_38249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (15))){
var inst_38174 = (state_38214[(8)]);
var inst_38189 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38174);
var inst_38190 = cljs.core.first.call(null,inst_38189);
var inst_38191 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38190);
var inst_38192 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38191)].join('');
var inst_38193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38192);
var state_38214__$1 = state_38214;
var statearr_38221_38250 = state_38214__$1;
(statearr_38221_38250[(2)] = inst_38193);

(statearr_38221_38250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (13))){
var inst_38198 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38222_38251 = state_38214__$1;
(statearr_38222_38251[(2)] = inst_38198);

(statearr_38222_38251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (6))){
var state_38214__$1 = state_38214;
var statearr_38223_38252 = state_38214__$1;
(statearr_38223_38252[(2)] = null);

(statearr_38223_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (17))){
var inst_38196 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38224_38253 = state_38214__$1;
(statearr_38224_38253[(2)] = inst_38196);

(statearr_38224_38253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (3))){
var inst_38212 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38214__$1,inst_38212);
} else {
if((state_val_38215 === (12))){
var inst_38173 = (state_38214[(9)]);
var inst_38187 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38173,opts);
var state_38214__$1 = state_38214;
if(cljs.core.truth_(inst_38187)){
var statearr_38225_38254 = state_38214__$1;
(statearr_38225_38254[(1)] = (15));

} else {
var statearr_38226_38255 = state_38214__$1;
(statearr_38226_38255[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (2))){
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38214__$1,(4),ch);
} else {
if((state_val_38215 === (11))){
var inst_38174 = (state_38214[(8)]);
var inst_38179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38180 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38174);
var inst_38181 = cljs.core.async.timeout.call(null,(1000));
var inst_38182 = [inst_38180,inst_38181];
var inst_38183 = (new cljs.core.PersistentVector(null,2,(5),inst_38179,inst_38182,null));
var state_38214__$1 = state_38214;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38214__$1,(14),inst_38183);
} else {
if((state_val_38215 === (9))){
var inst_38174 = (state_38214[(8)]);
var inst_38200 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38201 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38174);
var inst_38202 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38201);
var inst_38203 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38202)].join('');
var inst_38204 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38203);
var state_38214__$1 = (function (){var statearr_38227 = state_38214;
(statearr_38227[(10)] = inst_38200);

return statearr_38227;
})();
var statearr_38228_38256 = state_38214__$1;
(statearr_38228_38256[(2)] = inst_38204);

(statearr_38228_38256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (5))){
var inst_38167 = (state_38214[(7)]);
var inst_38169 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38170 = (new cljs.core.PersistentArrayMap(null,2,inst_38169,null));
var inst_38171 = (new cljs.core.PersistentHashSet(null,inst_38170,null));
var inst_38172 = figwheel.client.focus_msgs.call(null,inst_38171,inst_38167);
var inst_38173 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38172);
var inst_38174 = cljs.core.first.call(null,inst_38172);
var inst_38175 = figwheel.client.autoload_QMARK_.call(null);
var state_38214__$1 = (function (){var statearr_38229 = state_38214;
(statearr_38229[(8)] = inst_38174);

(statearr_38229[(9)] = inst_38173);

return statearr_38229;
})();
if(cljs.core.truth_(inst_38175)){
var statearr_38230_38257 = state_38214__$1;
(statearr_38230_38257[(1)] = (8));

} else {
var statearr_38231_38258 = state_38214__$1;
(statearr_38231_38258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (14))){
var inst_38185 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38232_38259 = state_38214__$1;
(statearr_38232_38259[(2)] = inst_38185);

(statearr_38232_38259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (16))){
var state_38214__$1 = state_38214;
var statearr_38233_38260 = state_38214__$1;
(statearr_38233_38260[(2)] = null);

(statearr_38233_38260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (10))){
var inst_38206 = (state_38214[(2)]);
var state_38214__$1 = (function (){var statearr_38234 = state_38214;
(statearr_38234[(11)] = inst_38206);

return statearr_38234;
})();
var statearr_38235_38261 = state_38214__$1;
(statearr_38235_38261[(2)] = null);

(statearr_38235_38261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (8))){
var inst_38173 = (state_38214[(9)]);
var inst_38177 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38173,opts);
var state_38214__$1 = state_38214;
if(cljs.core.truth_(inst_38177)){
var statearr_38236_38262 = state_38214__$1;
(statearr_38236_38262[(1)] = (11));

} else {
var statearr_38237_38263 = state_38214__$1;
(statearr_38237_38263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30553__auto___38245,ch))
;
return ((function (switch__30399__auto__,c__30553__auto___38245,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____0 = (function (){
var statearr_38241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38241[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__);

(statearr_38241[(1)] = (1));

return statearr_38241;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____1 = (function (state_38214){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_38214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e38242){if((e38242 instanceof Object)){
var ex__30403__auto__ = e38242;
var statearr_38243_38264 = state_38214;
(statearr_38243_38264[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38265 = state_38214;
state_38214 = G__38265;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__ = function(state_38214){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____1.call(this,state_38214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30400__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___38245,ch))
})();
var state__30555__auto__ = (function (){var statearr_38244 = f__30554__auto__.call(null);
(statearr_38244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___38245);

return statearr_38244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___38245,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38266_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38266_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38269 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38269){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38268){if((e38268 instanceof Error)){
var e = e38268;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38269], null));
} else {
var e = e38268;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38269))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38270){
var map__38279 = p__38270;
var map__38279__$1 = ((((!((map__38279 == null)))?((((map__38279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38279):map__38279);
var opts = map__38279__$1;
var build_id = cljs.core.get.call(null,map__38279__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38279,map__38279__$1,opts,build_id){
return (function (p__38281){
var vec__38282 = p__38281;
var seq__38283 = cljs.core.seq.call(null,vec__38282);
var first__38284 = cljs.core.first.call(null,seq__38283);
var seq__38283__$1 = cljs.core.next.call(null,seq__38283);
var map__38285 = first__38284;
var map__38285__$1 = ((((!((map__38285 == null)))?((((map__38285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38285):map__38285);
var msg = map__38285__$1;
var msg_name = cljs.core.get.call(null,map__38285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38283__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38282,seq__38283,first__38284,seq__38283__$1,map__38285,map__38285__$1,msg,msg_name,_,map__38279,map__38279__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38282,seq__38283,first__38284,seq__38283__$1,map__38285,map__38285__$1,msg,msg_name,_,map__38279,map__38279__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38279,map__38279__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38293){
var vec__38294 = p__38293;
var seq__38295 = cljs.core.seq.call(null,vec__38294);
var first__38296 = cljs.core.first.call(null,seq__38295);
var seq__38295__$1 = cljs.core.next.call(null,seq__38295);
var map__38297 = first__38296;
var map__38297__$1 = ((((!((map__38297 == null)))?((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38297):map__38297);
var msg = map__38297__$1;
var msg_name = cljs.core.get.call(null,map__38297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38295__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38299){
var map__38311 = p__38299;
var map__38311__$1 = ((((!((map__38311 == null)))?((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);
var on_compile_warning = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38311__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38311,map__38311__$1,on_compile_warning,on_compile_fail){
return (function (p__38313){
var vec__38314 = p__38313;
var seq__38315 = cljs.core.seq.call(null,vec__38314);
var first__38316 = cljs.core.first.call(null,seq__38315);
var seq__38315__$1 = cljs.core.next.call(null,seq__38315);
var map__38317 = first__38316;
var map__38317__$1 = ((((!((map__38317 == null)))?((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38317):map__38317);
var msg = map__38317__$1;
var msg_name = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38315__$1;
var pred__38319 = cljs.core._EQ_;
var expr__38320 = msg_name;
if(cljs.core.truth_(pred__38319.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38320))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38319.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38320))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38311,map__38311__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__,msg_hist,msg_names,msg){
return (function (state_38528){
var state_val_38529 = (state_38528[(1)]);
if((state_val_38529 === (7))){
var inst_38456 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38456)){
var statearr_38530_38576 = state_38528__$1;
(statearr_38530_38576[(1)] = (8));

} else {
var statearr_38531_38577 = state_38528__$1;
(statearr_38531_38577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (20))){
var inst_38522 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38532_38578 = state_38528__$1;
(statearr_38532_38578[(2)] = inst_38522);

(statearr_38532_38578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (27))){
var inst_38518 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38533_38579 = state_38528__$1;
(statearr_38533_38579[(2)] = inst_38518);

(statearr_38533_38579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (1))){
var inst_38449 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38449)){
var statearr_38534_38580 = state_38528__$1;
(statearr_38534_38580[(1)] = (2));

} else {
var statearr_38535_38581 = state_38528__$1;
(statearr_38535_38581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (24))){
var inst_38520 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38536_38582 = state_38528__$1;
(statearr_38536_38582[(2)] = inst_38520);

(statearr_38536_38582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (4))){
var inst_38526 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38528__$1,inst_38526);
} else {
if((state_val_38529 === (15))){
var inst_38524 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38537_38583 = state_38528__$1;
(statearr_38537_38583[(2)] = inst_38524);

(statearr_38537_38583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (21))){
var inst_38483 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38538_38584 = state_38528__$1;
(statearr_38538_38584[(2)] = inst_38483);

(statearr_38538_38584[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (31))){
var inst_38507 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38507)){
var statearr_38539_38585 = state_38528__$1;
(statearr_38539_38585[(1)] = (34));

} else {
var statearr_38540_38586 = state_38528__$1;
(statearr_38540_38586[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (32))){
var inst_38516 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38541_38587 = state_38528__$1;
(statearr_38541_38587[(2)] = inst_38516);

(statearr_38541_38587[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (33))){
var inst_38505 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38542_38588 = state_38528__$1;
(statearr_38542_38588[(2)] = inst_38505);

(statearr_38542_38588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (13))){
var inst_38470 = figwheel.client.heads_up.clear.call(null);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(16),inst_38470);
} else {
if((state_val_38529 === (22))){
var inst_38487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38488 = figwheel.client.heads_up.append_warning_message.call(null,inst_38487);
var state_38528__$1 = state_38528;
var statearr_38543_38589 = state_38528__$1;
(statearr_38543_38589[(2)] = inst_38488);

(statearr_38543_38589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (36))){
var inst_38514 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38544_38590 = state_38528__$1;
(statearr_38544_38590[(2)] = inst_38514);

(statearr_38544_38590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (29))){
var inst_38498 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38545_38591 = state_38528__$1;
(statearr_38545_38591[(2)] = inst_38498);

(statearr_38545_38591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (6))){
var inst_38451 = (state_38528[(7)]);
var state_38528__$1 = state_38528;
var statearr_38546_38592 = state_38528__$1;
(statearr_38546_38592[(2)] = inst_38451);

(statearr_38546_38592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (28))){
var inst_38494 = (state_38528[(2)]);
var inst_38495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38496 = figwheel.client.heads_up.display_warning.call(null,inst_38495);
var state_38528__$1 = (function (){var statearr_38547 = state_38528;
(statearr_38547[(8)] = inst_38494);

return statearr_38547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(29),inst_38496);
} else {
if((state_val_38529 === (25))){
var inst_38492 = figwheel.client.heads_up.clear.call(null);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(28),inst_38492);
} else {
if((state_val_38529 === (34))){
var inst_38509 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(37),inst_38509);
} else {
if((state_val_38529 === (17))){
var inst_38476 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38548_38593 = state_38528__$1;
(statearr_38548_38593[(2)] = inst_38476);

(statearr_38548_38593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (3))){
var inst_38468 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38468)){
var statearr_38549_38594 = state_38528__$1;
(statearr_38549_38594[(1)] = (13));

} else {
var statearr_38550_38595 = state_38528__$1;
(statearr_38550_38595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (12))){
var inst_38464 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38551_38596 = state_38528__$1;
(statearr_38551_38596[(2)] = inst_38464);

(statearr_38551_38596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (2))){
var inst_38451 = (state_38528[(7)]);
var inst_38451__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38528__$1 = (function (){var statearr_38552 = state_38528;
(statearr_38552[(7)] = inst_38451__$1);

return statearr_38552;
})();
if(cljs.core.truth_(inst_38451__$1)){
var statearr_38553_38597 = state_38528__$1;
(statearr_38553_38597[(1)] = (5));

} else {
var statearr_38554_38598 = state_38528__$1;
(statearr_38554_38598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (23))){
var inst_38490 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38490)){
var statearr_38555_38599 = state_38528__$1;
(statearr_38555_38599[(1)] = (25));

} else {
var statearr_38556_38600 = state_38528__$1;
(statearr_38556_38600[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (35))){
var state_38528__$1 = state_38528;
var statearr_38557_38601 = state_38528__$1;
(statearr_38557_38601[(2)] = null);

(statearr_38557_38601[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (19))){
var inst_38485 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38485)){
var statearr_38558_38602 = state_38528__$1;
(statearr_38558_38602[(1)] = (22));

} else {
var statearr_38559_38603 = state_38528__$1;
(statearr_38559_38603[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (11))){
var inst_38460 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38560_38604 = state_38528__$1;
(statearr_38560_38604[(2)] = inst_38460);

(statearr_38560_38604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (9))){
var inst_38462 = figwheel.client.heads_up.clear.call(null);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(12),inst_38462);
} else {
if((state_val_38529 === (5))){
var inst_38453 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38528__$1 = state_38528;
var statearr_38561_38605 = state_38528__$1;
(statearr_38561_38605[(2)] = inst_38453);

(statearr_38561_38605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (14))){
var inst_38478 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38478)){
var statearr_38562_38606 = state_38528__$1;
(statearr_38562_38606[(1)] = (18));

} else {
var statearr_38563_38607 = state_38528__$1;
(statearr_38563_38607[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (26))){
var inst_38500 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38528__$1 = state_38528;
if(cljs.core.truth_(inst_38500)){
var statearr_38564_38608 = state_38528__$1;
(statearr_38564_38608[(1)] = (30));

} else {
var statearr_38565_38609 = state_38528__$1;
(statearr_38565_38609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (16))){
var inst_38472 = (state_38528[(2)]);
var inst_38473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38474 = figwheel.client.heads_up.display_exception.call(null,inst_38473);
var state_38528__$1 = (function (){var statearr_38566 = state_38528;
(statearr_38566[(9)] = inst_38472);

return statearr_38566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(17),inst_38474);
} else {
if((state_val_38529 === (30))){
var inst_38502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38503 = figwheel.client.heads_up.display_warning.call(null,inst_38502);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(33),inst_38503);
} else {
if((state_val_38529 === (10))){
var inst_38466 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38567_38610 = state_38528__$1;
(statearr_38567_38610[(2)] = inst_38466);

(statearr_38567_38610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (18))){
var inst_38480 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38481 = figwheel.client.heads_up.display_exception.call(null,inst_38480);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(21),inst_38481);
} else {
if((state_val_38529 === (37))){
var inst_38511 = (state_38528[(2)]);
var state_38528__$1 = state_38528;
var statearr_38568_38611 = state_38528__$1;
(statearr_38568_38611[(2)] = inst_38511);

(statearr_38568_38611[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38529 === (8))){
var inst_38458 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38528__$1 = state_38528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38528__$1,(11),inst_38458);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30553__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30399__auto__,c__30553__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____0 = (function (){
var statearr_38572 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38572[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__);

(statearr_38572[(1)] = (1));

return statearr_38572;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____1 = (function (state_38528){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_38528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e38573){if((e38573 instanceof Object)){
var ex__30403__auto__ = e38573;
var statearr_38574_38612 = state_38528;
(statearr_38574_38612[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38613 = state_38528;
state_38528 = G__38613;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__ = function(state_38528){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____1.call(this,state_38528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__,msg_hist,msg_names,msg))
})();
var state__30555__auto__ = (function (){var statearr_38575 = f__30554__auto__.call(null);
(statearr_38575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_38575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__,msg_hist,msg_names,msg))
);

return c__30553__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30553__auto___38676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___38676,ch){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___38676,ch){
return (function (state_38659){
var state_val_38660 = (state_38659[(1)]);
if((state_val_38660 === (1))){
var state_38659__$1 = state_38659;
var statearr_38661_38677 = state_38659__$1;
(statearr_38661_38677[(2)] = null);

(statearr_38661_38677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (2))){
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38659__$1,(4),ch);
} else {
if((state_val_38660 === (3))){
var inst_38657 = (state_38659[(2)]);
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38659__$1,inst_38657);
} else {
if((state_val_38660 === (4))){
var inst_38647 = (state_38659[(7)]);
var inst_38647__$1 = (state_38659[(2)]);
var state_38659__$1 = (function (){var statearr_38662 = state_38659;
(statearr_38662[(7)] = inst_38647__$1);

return statearr_38662;
})();
if(cljs.core.truth_(inst_38647__$1)){
var statearr_38663_38678 = state_38659__$1;
(statearr_38663_38678[(1)] = (5));

} else {
var statearr_38664_38679 = state_38659__$1;
(statearr_38664_38679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (5))){
var inst_38647 = (state_38659[(7)]);
var inst_38649 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38647);
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38659__$1,(8),inst_38649);
} else {
if((state_val_38660 === (6))){
var state_38659__$1 = state_38659;
var statearr_38665_38680 = state_38659__$1;
(statearr_38665_38680[(2)] = null);

(statearr_38665_38680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (7))){
var inst_38655 = (state_38659[(2)]);
var state_38659__$1 = state_38659;
var statearr_38666_38681 = state_38659__$1;
(statearr_38666_38681[(2)] = inst_38655);

(statearr_38666_38681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (8))){
var inst_38651 = (state_38659[(2)]);
var state_38659__$1 = (function (){var statearr_38667 = state_38659;
(statearr_38667[(8)] = inst_38651);

return statearr_38667;
})();
var statearr_38668_38682 = state_38659__$1;
(statearr_38668_38682[(2)] = null);

(statearr_38668_38682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30553__auto___38676,ch))
;
return ((function (switch__30399__auto__,c__30553__auto___38676,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30400__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30400__auto____0 = (function (){
var statearr_38672 = [null,null,null,null,null,null,null,null,null];
(statearr_38672[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30400__auto__);

(statearr_38672[(1)] = (1));

return statearr_38672;
});
var figwheel$client$heads_up_plugin_$_state_machine__30400__auto____1 = (function (state_38659){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_38659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e38673){if((e38673 instanceof Object)){
var ex__30403__auto__ = e38673;
var statearr_38674_38683 = state_38659;
(statearr_38674_38683[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38684 = state_38659;
state_38659 = G__38684;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30400__auto__ = function(state_38659){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30400__auto____1.call(this,state_38659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30400__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30400__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___38676,ch))
})();
var state__30555__auto__ = (function (){var statearr_38675 = f__30554__auto__.call(null);
(statearr_38675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___38676);

return statearr_38675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___38676,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__){
return (function (state_38705){
var state_val_38706 = (state_38705[(1)]);
if((state_val_38706 === (1))){
var inst_38700 = cljs.core.async.timeout.call(null,(3000));
var state_38705__$1 = state_38705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38705__$1,(2),inst_38700);
} else {
if((state_val_38706 === (2))){
var inst_38702 = (state_38705[(2)]);
var inst_38703 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38705__$1 = (function (){var statearr_38707 = state_38705;
(statearr_38707[(7)] = inst_38702);

return statearr_38707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38705__$1,inst_38703);
} else {
return null;
}
}
});})(c__30553__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____0 = (function (){
var statearr_38711 = [null,null,null,null,null,null,null,null];
(statearr_38711[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__);

(statearr_38711[(1)] = (1));

return statearr_38711;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____1 = (function (state_38705){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_38705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e38712){if((e38712 instanceof Object)){
var ex__30403__auto__ = e38712;
var statearr_38713_38715 = state_38705;
(statearr_38713_38715[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38716 = state_38705;
state_38705 = G__38716;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__ = function(state_38705){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____1.call(this,state_38705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30400__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__))
})();
var state__30555__auto__ = (function (){var statearr_38714 = f__30554__auto__.call(null);
(statearr_38714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__))
);

return c__30553__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38739){
var state_val_38740 = (state_38739[(1)]);
if((state_val_38740 === (1))){
var inst_38733 = cljs.core.async.timeout.call(null,(2000));
var state_38739__$1 = state_38739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38739__$1,(2),inst_38733);
} else {
if((state_val_38740 === (2))){
var inst_38735 = (state_38739[(2)]);
var inst_38736 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_38737 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38736);
var state_38739__$1 = (function (){var statearr_38741 = state_38739;
(statearr_38741[(7)] = inst_38735);

return statearr_38741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38739__$1,inst_38737);
} else {
return null;
}
}
});})(c__30553__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____0 = (function (){
var statearr_38745 = [null,null,null,null,null,null,null,null];
(statearr_38745[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__);

(statearr_38745[(1)] = (1));

return statearr_38745;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____1 = (function (state_38739){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_38739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e38746){if((e38746 instanceof Object)){
var ex__30403__auto__ = e38746;
var statearr_38747_38749 = state_38739;
(statearr_38747_38749[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38750 = state_38739;
state_38739 = G__38750;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__ = function(state_38739){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____1.call(this,state_38739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30555__auto__ = (function (){var statearr_38748 = f__30554__auto__.call(null);
(statearr_38748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_38748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__,figwheel_version,temp__4657__auto__))
);

return c__30553__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38751){
var map__38755 = p__38751;
var map__38755__$1 = ((((!((map__38755 == null)))?((((map__38755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38755):map__38755);
var file = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38757 = "";
var G__38757__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38757),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38757);
var G__38757__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38757__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38757__$1);
if(cljs.core.truth_((function (){var and__28369__auto__ = line;
if(cljs.core.truth_(and__28369__auto__)){
return column;
} else {
return and__28369__auto__;
}
})())){
return [cljs.core.str(G__38757__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38757__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38758){
var map__38765 = p__38758;
var map__38765__$1 = ((((!((map__38765 == null)))?((((map__38765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38765):map__38765);
var ed = map__38765__$1;
var formatted_exception = cljs.core.get.call(null,map__38765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38765__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38767_38771 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38768_38772 = null;
var count__38769_38773 = (0);
var i__38770_38774 = (0);
while(true){
if((i__38770_38774 < count__38769_38773)){
var msg_38775 = cljs.core._nth.call(null,chunk__38768_38772,i__38770_38774);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38775);

var G__38776 = seq__38767_38771;
var G__38777 = chunk__38768_38772;
var G__38778 = count__38769_38773;
var G__38779 = (i__38770_38774 + (1));
seq__38767_38771 = G__38776;
chunk__38768_38772 = G__38777;
count__38769_38773 = G__38778;
i__38770_38774 = G__38779;
continue;
} else {
var temp__4657__auto___38780 = cljs.core.seq.call(null,seq__38767_38771);
if(temp__4657__auto___38780){
var seq__38767_38781__$1 = temp__4657__auto___38780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38767_38781__$1)){
var c__29192__auto___38782 = cljs.core.chunk_first.call(null,seq__38767_38781__$1);
var G__38783 = cljs.core.chunk_rest.call(null,seq__38767_38781__$1);
var G__38784 = c__29192__auto___38782;
var G__38785 = cljs.core.count.call(null,c__29192__auto___38782);
var G__38786 = (0);
seq__38767_38771 = G__38783;
chunk__38768_38772 = G__38784;
count__38769_38773 = G__38785;
i__38770_38774 = G__38786;
continue;
} else {
var msg_38787 = cljs.core.first.call(null,seq__38767_38781__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38787);

var G__38788 = cljs.core.next.call(null,seq__38767_38781__$1);
var G__38789 = null;
var G__38790 = (0);
var G__38791 = (0);
seq__38767_38771 = G__38788;
chunk__38768_38772 = G__38789;
count__38769_38773 = G__38790;
i__38770_38774 = G__38791;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38792){
var map__38795 = p__38792;
var map__38795__$1 = ((((!((map__38795 == null)))?((((map__38795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38795):map__38795);
var w = map__38795__$1;
var message = cljs.core.get.call(null,map__38795__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28369__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28369__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28369__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38807 = cljs.core.seq.call(null,plugins);
var chunk__38808 = null;
var count__38809 = (0);
var i__38810 = (0);
while(true){
if((i__38810 < count__38809)){
var vec__38811 = cljs.core._nth.call(null,chunk__38808,i__38810);
var k = cljs.core.nth.call(null,vec__38811,(0),null);
var plugin = cljs.core.nth.call(null,vec__38811,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38817 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38807,chunk__38808,count__38809,i__38810,pl_38817,vec__38811,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38817.call(null,msg_hist);
});})(seq__38807,chunk__38808,count__38809,i__38810,pl_38817,vec__38811,k,plugin))
);
} else {
}

var G__38818 = seq__38807;
var G__38819 = chunk__38808;
var G__38820 = count__38809;
var G__38821 = (i__38810 + (1));
seq__38807 = G__38818;
chunk__38808 = G__38819;
count__38809 = G__38820;
i__38810 = G__38821;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38807);
if(temp__4657__auto__){
var seq__38807__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38807__$1)){
var c__29192__auto__ = cljs.core.chunk_first.call(null,seq__38807__$1);
var G__38822 = cljs.core.chunk_rest.call(null,seq__38807__$1);
var G__38823 = c__29192__auto__;
var G__38824 = cljs.core.count.call(null,c__29192__auto__);
var G__38825 = (0);
seq__38807 = G__38822;
chunk__38808 = G__38823;
count__38809 = G__38824;
i__38810 = G__38825;
continue;
} else {
var vec__38814 = cljs.core.first.call(null,seq__38807__$1);
var k = cljs.core.nth.call(null,vec__38814,(0),null);
var plugin = cljs.core.nth.call(null,vec__38814,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38826 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38807,chunk__38808,count__38809,i__38810,pl_38826,vec__38814,k,plugin,seq__38807__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38826.call(null,msg_hist);
});})(seq__38807,chunk__38808,count__38809,i__38810,pl_38826,vec__38814,k,plugin,seq__38807__$1,temp__4657__auto__))
);
} else {
}

var G__38827 = cljs.core.next.call(null,seq__38807__$1);
var G__38828 = null;
var G__38829 = (0);
var G__38830 = (0);
seq__38807 = G__38827;
chunk__38808 = G__38828;
count__38809 = G__38829;
i__38810 = G__38830;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38831 = [];
var len__29456__auto___38838 = arguments.length;
var i__29457__auto___38839 = (0);
while(true){
if((i__29457__auto___38839 < len__29456__auto___38838)){
args38831.push((arguments[i__29457__auto___38839]));

var G__38840 = (i__29457__auto___38839 + (1));
i__29457__auto___38839 = G__38840;
continue;
} else {
}
break;
}

var G__38833 = args38831.length;
switch (G__38833) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38831.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38834_38842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38835_38843 = null;
var count__38836_38844 = (0);
var i__38837_38845 = (0);
while(true){
if((i__38837_38845 < count__38836_38844)){
var msg_38846 = cljs.core._nth.call(null,chunk__38835_38843,i__38837_38845);
figwheel.client.socket.handle_incoming_message.call(null,msg_38846);

var G__38847 = seq__38834_38842;
var G__38848 = chunk__38835_38843;
var G__38849 = count__38836_38844;
var G__38850 = (i__38837_38845 + (1));
seq__38834_38842 = G__38847;
chunk__38835_38843 = G__38848;
count__38836_38844 = G__38849;
i__38837_38845 = G__38850;
continue;
} else {
var temp__4657__auto___38851 = cljs.core.seq.call(null,seq__38834_38842);
if(temp__4657__auto___38851){
var seq__38834_38852__$1 = temp__4657__auto___38851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38834_38852__$1)){
var c__29192__auto___38853 = cljs.core.chunk_first.call(null,seq__38834_38852__$1);
var G__38854 = cljs.core.chunk_rest.call(null,seq__38834_38852__$1);
var G__38855 = c__29192__auto___38853;
var G__38856 = cljs.core.count.call(null,c__29192__auto___38853);
var G__38857 = (0);
seq__38834_38842 = G__38854;
chunk__38835_38843 = G__38855;
count__38836_38844 = G__38856;
i__38837_38845 = G__38857;
continue;
} else {
var msg_38858 = cljs.core.first.call(null,seq__38834_38852__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38858);

var G__38859 = cljs.core.next.call(null,seq__38834_38852__$1);
var G__38860 = null;
var G__38861 = (0);
var G__38862 = (0);
seq__38834_38842 = G__38859;
chunk__38835_38843 = G__38860;
count__38836_38844 = G__38861;
i__38837_38845 = G__38862;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29463__auto__ = [];
var len__29456__auto___38867 = arguments.length;
var i__29457__auto___38868 = (0);
while(true){
if((i__29457__auto___38868 < len__29456__auto___38867)){
args__29463__auto__.push((arguments[i__29457__auto___38868]));

var G__38869 = (i__29457__auto___38868 + (1));
i__29457__auto___38868 = G__38869;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38864){
var map__38865 = p__38864;
var map__38865__$1 = ((((!((map__38865 == null)))?((((map__38865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38865):map__38865);
var opts = map__38865__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38863){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38863));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38871){if((e38871 instanceof Error)){
var e = e38871;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38871;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38875){
var map__38876 = p__38875;
var map__38876__$1 = ((((!((map__38876 == null)))?((((map__38876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38876):map__38876);
var msg_name = cljs.core.get.call(null,map__38876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489198971578