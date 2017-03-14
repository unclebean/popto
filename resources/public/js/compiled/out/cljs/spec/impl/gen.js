// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34631 = arguments.length;
var i__29457__auto___34632 = (0);
while(true){
if((i__29457__auto___34632 < len__29456__auto___34631)){
args__29463__auto__.push((arguments[i__29457__auto___34632]));

var G__34633 = (i__29457__auto___34632 + (1));
i__29457__auto___34632 = G__34633;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34630){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34630));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34635 = arguments.length;
var i__29457__auto___34636 = (0);
while(true){
if((i__29457__auto___34636 < len__29456__auto___34635)){
args__29463__auto__.push((arguments[i__29457__auto___34636]));

var G__34637 = (i__29457__auto___34636 + (1));
i__29457__auto___34636 = G__34637;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34634){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34634));
});

var g_QMARK__34638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34639 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34638){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34638))
,null));
var mkg_34640 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34638,g_34639){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34638,g_34639))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34638,g_34639,mkg_34640){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34638).call(null,x);
});})(g_QMARK__34638,g_34639,mkg_34640))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34638,g_34639,mkg_34640){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34640).call(null,gfn);
});})(g_QMARK__34638,g_34639,mkg_34640))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34638,g_34639,mkg_34640){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34639).call(null,generator);
});})(g_QMARK__34638,g_34639,mkg_34640))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34602__auto___34658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34602__auto___34658){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34659 = arguments.length;
var i__29457__auto___34660 = (0);
while(true){
if((i__29457__auto___34660 < len__29456__auto___34659)){
args__29463__auto__.push((arguments[i__29457__auto___34660]));

var G__34661 = (i__29457__auto___34660 + (1));
i__29457__auto___34660 = G__34661;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34658))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34658),args);
});})(g__34602__auto___34658))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34602__auto___34658){
return (function (seq34641){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34641));
});})(g__34602__auto___34658))
;


var g__34602__auto___34662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34602__auto___34662){
return (function cljs$spec$impl$gen$list(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34663 = arguments.length;
var i__29457__auto___34664 = (0);
while(true){
if((i__29457__auto___34664 < len__29456__auto___34663)){
args__29463__auto__.push((arguments[i__29457__auto___34664]));

var G__34665 = (i__29457__auto___34664 + (1));
i__29457__auto___34664 = G__34665;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34662))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34662),args);
});})(g__34602__auto___34662))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34602__auto___34662){
return (function (seq34642){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34642));
});})(g__34602__auto___34662))
;


var g__34602__auto___34666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34602__auto___34666){
return (function cljs$spec$impl$gen$map(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34667 = arguments.length;
var i__29457__auto___34668 = (0);
while(true){
if((i__29457__auto___34668 < len__29456__auto___34667)){
args__29463__auto__.push((arguments[i__29457__auto___34668]));

var G__34669 = (i__29457__auto___34668 + (1));
i__29457__auto___34668 = G__34669;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34666))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34666),args);
});})(g__34602__auto___34666))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34602__auto___34666){
return (function (seq34643){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34643));
});})(g__34602__auto___34666))
;


var g__34602__auto___34670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34602__auto___34670){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34671 = arguments.length;
var i__29457__auto___34672 = (0);
while(true){
if((i__29457__auto___34672 < len__29456__auto___34671)){
args__29463__auto__.push((arguments[i__29457__auto___34672]));

var G__34673 = (i__29457__auto___34672 + (1));
i__29457__auto___34672 = G__34673;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34670))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34670),args);
});})(g__34602__auto___34670))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34602__auto___34670){
return (function (seq34644){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34644));
});})(g__34602__auto___34670))
;


var g__34602__auto___34674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34602__auto___34674){
return (function cljs$spec$impl$gen$set(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34675 = arguments.length;
var i__29457__auto___34676 = (0);
while(true){
if((i__29457__auto___34676 < len__29456__auto___34675)){
args__29463__auto__.push((arguments[i__29457__auto___34676]));

var G__34677 = (i__29457__auto___34676 + (1));
i__29457__auto___34676 = G__34677;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34674))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34674),args);
});})(g__34602__auto___34674))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34602__auto___34674){
return (function (seq34645){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34645));
});})(g__34602__auto___34674))
;


var g__34602__auto___34678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34602__auto___34678){
return (function cljs$spec$impl$gen$vector(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34679 = arguments.length;
var i__29457__auto___34680 = (0);
while(true){
if((i__29457__auto___34680 < len__29456__auto___34679)){
args__29463__auto__.push((arguments[i__29457__auto___34680]));

var G__34681 = (i__29457__auto___34680 + (1));
i__29457__auto___34680 = G__34681;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34678))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34678),args);
});})(g__34602__auto___34678))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34602__auto___34678){
return (function (seq34646){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34646));
});})(g__34602__auto___34678))
;


var g__34602__auto___34682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34602__auto___34682){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34683 = arguments.length;
var i__29457__auto___34684 = (0);
while(true){
if((i__29457__auto___34684 < len__29456__auto___34683)){
args__29463__auto__.push((arguments[i__29457__auto___34684]));

var G__34685 = (i__29457__auto___34684 + (1));
i__29457__auto___34684 = G__34685;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34682))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34682),args);
});})(g__34602__auto___34682))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34602__auto___34682){
return (function (seq34647){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34647));
});})(g__34602__auto___34682))
;


var g__34602__auto___34686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34602__auto___34686){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34687 = arguments.length;
var i__29457__auto___34688 = (0);
while(true){
if((i__29457__auto___34688 < len__29456__auto___34687)){
args__29463__auto__.push((arguments[i__29457__auto___34688]));

var G__34689 = (i__29457__auto___34688 + (1));
i__29457__auto___34688 = G__34689;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34686))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34686),args);
});})(g__34602__auto___34686))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34602__auto___34686){
return (function (seq34648){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34648));
});})(g__34602__auto___34686))
;


var g__34602__auto___34690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34602__auto___34690){
return (function cljs$spec$impl$gen$elements(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34691 = arguments.length;
var i__29457__auto___34692 = (0);
while(true){
if((i__29457__auto___34692 < len__29456__auto___34691)){
args__29463__auto__.push((arguments[i__29457__auto___34692]));

var G__34693 = (i__29457__auto___34692 + (1));
i__29457__auto___34692 = G__34693;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34690))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34690),args);
});})(g__34602__auto___34690))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34602__auto___34690){
return (function (seq34649){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34649));
});})(g__34602__auto___34690))
;


var g__34602__auto___34694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34602__auto___34694){
return (function cljs$spec$impl$gen$bind(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34695 = arguments.length;
var i__29457__auto___34696 = (0);
while(true){
if((i__29457__auto___34696 < len__29456__auto___34695)){
args__29463__auto__.push((arguments[i__29457__auto___34696]));

var G__34697 = (i__29457__auto___34696 + (1));
i__29457__auto___34696 = G__34697;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34694))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34694),args);
});})(g__34602__auto___34694))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34602__auto___34694){
return (function (seq34650){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34650));
});})(g__34602__auto___34694))
;


var g__34602__auto___34698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34602__auto___34698){
return (function cljs$spec$impl$gen$choose(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34699 = arguments.length;
var i__29457__auto___34700 = (0);
while(true){
if((i__29457__auto___34700 < len__29456__auto___34699)){
args__29463__auto__.push((arguments[i__29457__auto___34700]));

var G__34701 = (i__29457__auto___34700 + (1));
i__29457__auto___34700 = G__34701;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34698))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34698),args);
});})(g__34602__auto___34698))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34602__auto___34698){
return (function (seq34651){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34651));
});})(g__34602__auto___34698))
;


var g__34602__auto___34702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34602__auto___34702){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34703 = arguments.length;
var i__29457__auto___34704 = (0);
while(true){
if((i__29457__auto___34704 < len__29456__auto___34703)){
args__29463__auto__.push((arguments[i__29457__auto___34704]));

var G__34705 = (i__29457__auto___34704 + (1));
i__29457__auto___34704 = G__34705;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34702))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34702),args);
});})(g__34602__auto___34702))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34602__auto___34702){
return (function (seq34652){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34652));
});})(g__34602__auto___34702))
;


var g__34602__auto___34706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34602__auto___34706){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34707 = arguments.length;
var i__29457__auto___34708 = (0);
while(true){
if((i__29457__auto___34708 < len__29456__auto___34707)){
args__29463__auto__.push((arguments[i__29457__auto___34708]));

var G__34709 = (i__29457__auto___34708 + (1));
i__29457__auto___34708 = G__34709;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34706))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34706),args);
});})(g__34602__auto___34706))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34602__auto___34706){
return (function (seq34653){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34653));
});})(g__34602__auto___34706))
;


var g__34602__auto___34710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34602__auto___34710){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34711 = arguments.length;
var i__29457__auto___34712 = (0);
while(true){
if((i__29457__auto___34712 < len__29456__auto___34711)){
args__29463__auto__.push((arguments[i__29457__auto___34712]));

var G__34713 = (i__29457__auto___34712 + (1));
i__29457__auto___34712 = G__34713;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34710))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34710),args);
});})(g__34602__auto___34710))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34602__auto___34710){
return (function (seq34654){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34654));
});})(g__34602__auto___34710))
;


var g__34602__auto___34714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34602__auto___34714){
return (function cljs$spec$impl$gen$sample(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34715 = arguments.length;
var i__29457__auto___34716 = (0);
while(true){
if((i__29457__auto___34716 < len__29456__auto___34715)){
args__29463__auto__.push((arguments[i__29457__auto___34716]));

var G__34717 = (i__29457__auto___34716 + (1));
i__29457__auto___34716 = G__34717;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34714))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34714),args);
});})(g__34602__auto___34714))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34602__auto___34714){
return (function (seq34655){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34655));
});})(g__34602__auto___34714))
;


var g__34602__auto___34718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34602__auto___34718){
return (function cljs$spec$impl$gen$return(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34719 = arguments.length;
var i__29457__auto___34720 = (0);
while(true){
if((i__29457__auto___34720 < len__29456__auto___34719)){
args__29463__auto__.push((arguments[i__29457__auto___34720]));

var G__34721 = (i__29457__auto___34720 + (1));
i__29457__auto___34720 = G__34721;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34718))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34718),args);
});})(g__34602__auto___34718))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34602__auto___34718){
return (function (seq34656){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34656));
});})(g__34602__auto___34718))
;


var g__34602__auto___34722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34602__auto___34722){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34723 = arguments.length;
var i__29457__auto___34724 = (0);
while(true){
if((i__29457__auto___34724 < len__29456__auto___34723)){
args__29463__auto__.push((arguments[i__29457__auto___34724]));

var G__34725 = (i__29457__auto___34724 + (1));
i__29457__auto___34724 = G__34725;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34602__auto___34722))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34602__auto___34722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34602__auto___34722),args);
});})(g__34602__auto___34722))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34602__auto___34722){
return (function (seq34657){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34657));
});})(g__34602__auto___34722))
;

var g__34615__auto___34747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34615__auto___34747){
return (function cljs$spec$impl$gen$any(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34748 = arguments.length;
var i__29457__auto___34749 = (0);
while(true){
if((i__29457__auto___34749 < len__29456__auto___34748)){
args__29463__auto__.push((arguments[i__29457__auto___34749]));

var G__34750 = (i__29457__auto___34749 + (1));
i__29457__auto___34749 = G__34750;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34747))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34747){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34747);
});})(g__34615__auto___34747))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34615__auto___34747){
return (function (seq34726){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34726));
});})(g__34615__auto___34747))
;


var g__34615__auto___34751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34615__auto___34751){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34752 = arguments.length;
var i__29457__auto___34753 = (0);
while(true){
if((i__29457__auto___34753 < len__29456__auto___34752)){
args__29463__auto__.push((arguments[i__29457__auto___34753]));

var G__34754 = (i__29457__auto___34753 + (1));
i__29457__auto___34753 = G__34754;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34751))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34751){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34751);
});})(g__34615__auto___34751))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34615__auto___34751){
return (function (seq34727){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34727));
});})(g__34615__auto___34751))
;


var g__34615__auto___34755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34615__auto___34755){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34756 = arguments.length;
var i__29457__auto___34757 = (0);
while(true){
if((i__29457__auto___34757 < len__29456__auto___34756)){
args__29463__auto__.push((arguments[i__29457__auto___34757]));

var G__34758 = (i__29457__auto___34757 + (1));
i__29457__auto___34757 = G__34758;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34755))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34755){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34755);
});})(g__34615__auto___34755))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34615__auto___34755){
return (function (seq34728){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34728));
});})(g__34615__auto___34755))
;


var g__34615__auto___34759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34615__auto___34759){
return (function cljs$spec$impl$gen$char(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34760 = arguments.length;
var i__29457__auto___34761 = (0);
while(true){
if((i__29457__auto___34761 < len__29456__auto___34760)){
args__29463__auto__.push((arguments[i__29457__auto___34761]));

var G__34762 = (i__29457__auto___34761 + (1));
i__29457__auto___34761 = G__34762;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34759))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34759){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34759);
});})(g__34615__auto___34759))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34615__auto___34759){
return (function (seq34729){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34729));
});})(g__34615__auto___34759))
;


var g__34615__auto___34763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34615__auto___34763){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34764 = arguments.length;
var i__29457__auto___34765 = (0);
while(true){
if((i__29457__auto___34765 < len__29456__auto___34764)){
args__29463__auto__.push((arguments[i__29457__auto___34765]));

var G__34766 = (i__29457__auto___34765 + (1));
i__29457__auto___34765 = G__34766;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34763))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34763){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34763);
});})(g__34615__auto___34763))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34615__auto___34763){
return (function (seq34730){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34730));
});})(g__34615__auto___34763))
;


var g__34615__auto___34767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34615__auto___34767){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34768 = arguments.length;
var i__29457__auto___34769 = (0);
while(true){
if((i__29457__auto___34769 < len__29456__auto___34768)){
args__29463__auto__.push((arguments[i__29457__auto___34769]));

var G__34770 = (i__29457__auto___34769 + (1));
i__29457__auto___34769 = G__34770;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34767))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34767){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34767);
});})(g__34615__auto___34767))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34615__auto___34767){
return (function (seq34731){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34731));
});})(g__34615__auto___34767))
;


var g__34615__auto___34771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34615__auto___34771){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34772 = arguments.length;
var i__29457__auto___34773 = (0);
while(true){
if((i__29457__auto___34773 < len__29456__auto___34772)){
args__29463__auto__.push((arguments[i__29457__auto___34773]));

var G__34774 = (i__29457__auto___34773 + (1));
i__29457__auto___34773 = G__34774;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34771))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34771){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34771);
});})(g__34615__auto___34771))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34615__auto___34771){
return (function (seq34732){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34732));
});})(g__34615__auto___34771))
;


var g__34615__auto___34775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34615__auto___34775){
return (function cljs$spec$impl$gen$double(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34776 = arguments.length;
var i__29457__auto___34777 = (0);
while(true){
if((i__29457__auto___34777 < len__29456__auto___34776)){
args__29463__auto__.push((arguments[i__29457__auto___34777]));

var G__34778 = (i__29457__auto___34777 + (1));
i__29457__auto___34777 = G__34778;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34775))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34775){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34775);
});})(g__34615__auto___34775))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34615__auto___34775){
return (function (seq34733){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34733));
});})(g__34615__auto___34775))
;


var g__34615__auto___34779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34615__auto___34779){
return (function cljs$spec$impl$gen$int(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34780 = arguments.length;
var i__29457__auto___34781 = (0);
while(true){
if((i__29457__auto___34781 < len__29456__auto___34780)){
args__29463__auto__.push((arguments[i__29457__auto___34781]));

var G__34782 = (i__29457__auto___34781 + (1));
i__29457__auto___34781 = G__34782;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34779))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34779){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34779);
});})(g__34615__auto___34779))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34615__auto___34779){
return (function (seq34734){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34734));
});})(g__34615__auto___34779))
;


var g__34615__auto___34783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34615__auto___34783){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34784 = arguments.length;
var i__29457__auto___34785 = (0);
while(true){
if((i__29457__auto___34785 < len__29456__auto___34784)){
args__29463__auto__.push((arguments[i__29457__auto___34785]));

var G__34786 = (i__29457__auto___34785 + (1));
i__29457__auto___34785 = G__34786;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34783))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34783){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34783);
});})(g__34615__auto___34783))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34615__auto___34783){
return (function (seq34735){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34735));
});})(g__34615__auto___34783))
;


var g__34615__auto___34787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34615__auto___34787){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34788 = arguments.length;
var i__29457__auto___34789 = (0);
while(true){
if((i__29457__auto___34789 < len__29456__auto___34788)){
args__29463__auto__.push((arguments[i__29457__auto___34789]));

var G__34790 = (i__29457__auto___34789 + (1));
i__29457__auto___34789 = G__34790;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34787))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34787){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34787);
});})(g__34615__auto___34787))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34615__auto___34787){
return (function (seq34736){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34736));
});})(g__34615__auto___34787))
;


var g__34615__auto___34791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34615__auto___34791){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34792 = arguments.length;
var i__29457__auto___34793 = (0);
while(true){
if((i__29457__auto___34793 < len__29456__auto___34792)){
args__29463__auto__.push((arguments[i__29457__auto___34793]));

var G__34794 = (i__29457__auto___34793 + (1));
i__29457__auto___34793 = G__34794;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34791))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34791){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34791);
});})(g__34615__auto___34791))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34615__auto___34791){
return (function (seq34737){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34737));
});})(g__34615__auto___34791))
;


var g__34615__auto___34795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34615__auto___34795){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34796 = arguments.length;
var i__29457__auto___34797 = (0);
while(true){
if((i__29457__auto___34797 < len__29456__auto___34796)){
args__29463__auto__.push((arguments[i__29457__auto___34797]));

var G__34798 = (i__29457__auto___34797 + (1));
i__29457__auto___34797 = G__34798;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34795))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34795){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34795);
});})(g__34615__auto___34795))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34615__auto___34795){
return (function (seq34738){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34738));
});})(g__34615__auto___34795))
;


var g__34615__auto___34799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34615__auto___34799){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34800 = arguments.length;
var i__29457__auto___34801 = (0);
while(true){
if((i__29457__auto___34801 < len__29456__auto___34800)){
args__29463__auto__.push((arguments[i__29457__auto___34801]));

var G__34802 = (i__29457__auto___34801 + (1));
i__29457__auto___34801 = G__34802;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34799))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34799){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34799);
});})(g__34615__auto___34799))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34615__auto___34799){
return (function (seq34739){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34739));
});})(g__34615__auto___34799))
;


var g__34615__auto___34803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34615__auto___34803){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34804 = arguments.length;
var i__29457__auto___34805 = (0);
while(true){
if((i__29457__auto___34805 < len__29456__auto___34804)){
args__29463__auto__.push((arguments[i__29457__auto___34805]));

var G__34806 = (i__29457__auto___34805 + (1));
i__29457__auto___34805 = G__34806;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34803))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34803){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34803);
});})(g__34615__auto___34803))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34615__auto___34803){
return (function (seq34740){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34740));
});})(g__34615__auto___34803))
;


var g__34615__auto___34807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34615__auto___34807){
return (function cljs$spec$impl$gen$string(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34808 = arguments.length;
var i__29457__auto___34809 = (0);
while(true){
if((i__29457__auto___34809 < len__29456__auto___34808)){
args__29463__auto__.push((arguments[i__29457__auto___34809]));

var G__34810 = (i__29457__auto___34809 + (1));
i__29457__auto___34809 = G__34810;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34807))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34807){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34807);
});})(g__34615__auto___34807))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34615__auto___34807){
return (function (seq34741){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34741));
});})(g__34615__auto___34807))
;


var g__34615__auto___34811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34615__auto___34811){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34812 = arguments.length;
var i__29457__auto___34813 = (0);
while(true){
if((i__29457__auto___34813 < len__29456__auto___34812)){
args__29463__auto__.push((arguments[i__29457__auto___34813]));

var G__34814 = (i__29457__auto___34813 + (1));
i__29457__auto___34813 = G__34814;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34811))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34811){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34811);
});})(g__34615__auto___34811))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34615__auto___34811){
return (function (seq34742){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34742));
});})(g__34615__auto___34811))
;


var g__34615__auto___34815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34615__auto___34815){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34816 = arguments.length;
var i__29457__auto___34817 = (0);
while(true){
if((i__29457__auto___34817 < len__29456__auto___34816)){
args__29463__auto__.push((arguments[i__29457__auto___34817]));

var G__34818 = (i__29457__auto___34817 + (1));
i__29457__auto___34817 = G__34818;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34815))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34815){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34815);
});})(g__34615__auto___34815))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34615__auto___34815){
return (function (seq34743){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34743));
});})(g__34615__auto___34815))
;


var g__34615__auto___34819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34615__auto___34819){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34820 = arguments.length;
var i__29457__auto___34821 = (0);
while(true){
if((i__29457__auto___34821 < len__29456__auto___34820)){
args__29463__auto__.push((arguments[i__29457__auto___34821]));

var G__34822 = (i__29457__auto___34821 + (1));
i__29457__auto___34821 = G__34822;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34819))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34819){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34819);
});})(g__34615__auto___34819))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34615__auto___34819){
return (function (seq34744){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34744));
});})(g__34615__auto___34819))
;


var g__34615__auto___34823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34615__auto___34823){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34824 = arguments.length;
var i__29457__auto___34825 = (0);
while(true){
if((i__29457__auto___34825 < len__29456__auto___34824)){
args__29463__auto__.push((arguments[i__29457__auto___34825]));

var G__34826 = (i__29457__auto___34825 + (1));
i__29457__auto___34825 = G__34826;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34823))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34823){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34823);
});})(g__34615__auto___34823))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34615__auto___34823){
return (function (seq34745){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34745));
});})(g__34615__auto___34823))
;


var g__34615__auto___34827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34615__auto___34827){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34828 = arguments.length;
var i__29457__auto___34829 = (0);
while(true){
if((i__29457__auto___34829 < len__29456__auto___34828)){
args__29463__auto__.push((arguments[i__29457__auto___34829]));

var G__34830 = (i__29457__auto___34829 + (1));
i__29457__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});})(g__34615__auto___34827))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34615__auto___34827){
return (function (args){
return cljs.core.deref.call(null,g__34615__auto___34827);
});})(g__34615__auto___34827))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34615__auto___34827){
return (function (seq34746){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34746));
});})(g__34615__auto___34827))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__29463__auto__ = [];
var len__29456__auto___34833 = arguments.length;
var i__29457__auto___34834 = (0);
while(true){
if((i__29457__auto___34834 < len__29456__auto___34833)){
args__29463__auto__.push((arguments[i__29457__auto___34834]));

var G__34835 = (i__29457__auto___34834 + (1));
i__29457__auto___34834 = G__34835;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((0) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29464__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34831_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34831_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34832){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34832));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34836_SHARP_){
return (new Date(p1__34836_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489198966913