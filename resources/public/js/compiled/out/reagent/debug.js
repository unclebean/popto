// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__29609__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29610__i = 0, G__29610__a = new Array(arguments.length -  0);
while (G__29610__i < G__29610__a.length) {G__29610__a[G__29610__i] = arguments[G__29610__i + 0]; ++G__29610__i;}
  args = new cljs.core.IndexedSeq(G__29610__a,0);
} 
return G__29609__delegate.call(this,args);};
G__29609.cljs$lang$maxFixedArity = 0;
G__29609.cljs$lang$applyTo = (function (arglist__29611){
var args = cljs.core.seq(arglist__29611);
return G__29609__delegate(args);
});
G__29609.cljs$core$IFn$_invoke$arity$variadic = G__29609__delegate;
return G__29609;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29612__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29613__i = 0, G__29613__a = new Array(arguments.length -  0);
while (G__29613__i < G__29613__a.length) {G__29613__a[G__29613__i] = arguments[G__29613__i + 0]; ++G__29613__i;}
  args = new cljs.core.IndexedSeq(G__29613__a,0);
} 
return G__29612__delegate.call(this,args);};
G__29612.cljs$lang$maxFixedArity = 0;
G__29612.cljs$lang$applyTo = (function (arglist__29614){
var args = cljs.core.seq(arglist__29614);
return G__29612__delegate(args);
});
G__29612.cljs$core$IFn$_invoke$arity$variadic = G__29612__delegate;
return G__29612;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1489204423974