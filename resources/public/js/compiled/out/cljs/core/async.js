// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30598 = [];
var len__29456__auto___30604 = arguments.length;
var i__29457__auto___30605 = (0);
while(true){
if((i__29457__auto___30605 < len__29456__auto___30604)){
args30598.push((arguments[i__29457__auto___30605]));

var G__30606 = (i__29457__auto___30605 + (1));
i__29457__auto___30605 = G__30606;
continue;
} else {
}
break;
}

var G__30600 = args30598.length;
switch (G__30600) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30598.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30601 = (function (f,blockable,meta30602){
this.f = f;
this.blockable = blockable;
this.meta30602 = meta30602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30603,meta30602__$1){
var self__ = this;
var _30603__$1 = this;
return (new cljs.core.async.t_cljs$core$async30601(self__.f,self__.blockable,meta30602__$1));
});

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30603){
var self__ = this;
var _30603__$1 = this;
return self__.meta30602;
});

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30602","meta30602",-263380635,null)], null);
});

cljs.core.async.t_cljs$core$async30601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30601";

cljs.core.async.t_cljs$core$async30601.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async30601");
});

cljs.core.async.__GT_t_cljs$core$async30601 = (function cljs$core$async$__GT_t_cljs$core$async30601(f__$1,blockable__$1,meta30602){
return (new cljs.core.async.t_cljs$core$async30601(f__$1,blockable__$1,meta30602));
});

}

return (new cljs.core.async.t_cljs$core$async30601(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30610 = [];
var len__29456__auto___30613 = arguments.length;
var i__29457__auto___30614 = (0);
while(true){
if((i__29457__auto___30614 < len__29456__auto___30613)){
args30610.push((arguments[i__29457__auto___30614]));

var G__30615 = (i__29457__auto___30614 + (1));
i__29457__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var G__30612 = args30610.length;
switch (G__30612) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30610.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30617 = [];
var len__29456__auto___30620 = arguments.length;
var i__29457__auto___30621 = (0);
while(true){
if((i__29457__auto___30621 < len__29456__auto___30620)){
args30617.push((arguments[i__29457__auto___30621]));

var G__30622 = (i__29457__auto___30621 + (1));
i__29457__auto___30621 = G__30622;
continue;
} else {
}
break;
}

var G__30619 = args30617.length;
switch (G__30619) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30617.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30624 = [];
var len__29456__auto___30627 = arguments.length;
var i__29457__auto___30628 = (0);
while(true){
if((i__29457__auto___30628 < len__29456__auto___30627)){
args30624.push((arguments[i__29457__auto___30628]));

var G__30629 = (i__29457__auto___30628 + (1));
i__29457__auto___30628 = G__30629;
continue;
} else {
}
break;
}

var G__30626 = args30624.length;
switch (G__30626) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30624.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30631 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30631);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30631,ret){
return (function (){
return fn1.call(null,val_30631);
});})(val_30631,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30632 = [];
var len__29456__auto___30635 = arguments.length;
var i__29457__auto___30636 = (0);
while(true){
if((i__29457__auto___30636 < len__29456__auto___30635)){
args30632.push((arguments[i__29457__auto___30636]));

var G__30637 = (i__29457__auto___30636 + (1));
i__29457__auto___30636 = G__30637;
continue;
} else {
}
break;
}

var G__30634 = args30632.length;
switch (G__30634) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30632.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29296__auto___30639 = n;
var x_30640 = (0);
while(true){
if((x_30640 < n__29296__auto___30639)){
(a[x_30640] = (0));

var G__30641 = (x_30640 + (1));
x_30640 = G__30641;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30642 = (i + (1));
i = G__30642;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30646 = (function (alt_flag,flag,meta30647){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30647 = meta30647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30648,meta30647__$1){
var self__ = this;
var _30648__$1 = this;
return (new cljs.core.async.t_cljs$core$async30646(self__.alt_flag,self__.flag,meta30647__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30648){
var self__ = this;
var _30648__$1 = this;
return self__.meta30647;
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30647","meta30647",323979582,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30646";

cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async30646");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30646 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30646(alt_flag__$1,flag__$1,meta30647){
return (new cljs.core.async.t_cljs$core$async30646(alt_flag__$1,flag__$1,meta30647));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30646(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30652 = (function (alt_handler,flag,cb,meta30653){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30653 = meta30653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30654,meta30653__$1){
var self__ = this;
var _30654__$1 = this;
return (new cljs.core.async.t_cljs$core$async30652(self__.alt_handler,self__.flag,self__.cb,meta30653__$1));
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30654){
var self__ = this;
var _30654__$1 = this;
return self__.meta30653;
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30653","meta30653",1316082372,null)], null);
});

cljs.core.async.t_cljs$core$async30652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30652";

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async30652");
});

cljs.core.async.__GT_t_cljs$core$async30652 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30652(alt_handler__$1,flag__$1,cb__$1,meta30653){
return (new cljs.core.async.t_cljs$core$async30652(alt_handler__$1,flag__$1,cb__$1,meta30653));
});

}

return (new cljs.core.async.t_cljs$core$async30652(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30655_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30655_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30656_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30656_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28381__auto__ = wport;
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30657 = (i + (1));
i = G__30657;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28381__auto__ = ret;
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28369__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28369__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28369__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___30663 = arguments.length;
var i__29457__auto___30664 = (0);
while(true){
if((i__29457__auto___30664 < len__29456__auto___30663)){
args__29463__auto__.push((arguments[i__29457__auto___30664]));

var G__30665 = (i__29457__auto___30664 + (1));
i__29457__auto___30664 = G__30665;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((1) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29464__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30660){
var map__30661 = p__30660;
var map__30661__$1 = ((((!((map__30661 == null)))?((((map__30661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30661):map__30661);
var opts = map__30661__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30658){
var G__30659 = cljs.core.first.call(null,seq30658);
var seq30658__$1 = cljs.core.next.call(null,seq30658);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30659,seq30658__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30666 = [];
var len__29456__auto___30716 = arguments.length;
var i__29457__auto___30717 = (0);
while(true){
if((i__29457__auto___30717 < len__29456__auto___30716)){
args30666.push((arguments[i__29457__auto___30717]));

var G__30718 = (i__29457__auto___30717 + (1));
i__29457__auto___30717 = G__30718;
continue;
} else {
}
break;
}

var G__30668 = args30666.length;
switch (G__30668) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30666.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30553__auto___30720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___30720){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___30720){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30694_30721 = state_30692__$1;
(statearr_30694_30721[(2)] = inst_30688);

(statearr_30694_30721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30695_30722 = state_30692__$1;
(statearr_30695_30722[(2)] = null);

(statearr_30695_30722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30671 = (state_30692[(7)]);
var inst_30671__$1 = (state_30692[(2)]);
var inst_30672 = (inst_30671__$1 == null);
var state_30692__$1 = (function (){var statearr_30696 = state_30692;
(statearr_30696[(7)] = inst_30671__$1);

return statearr_30696;
})();
if(cljs.core.truth_(inst_30672)){
var statearr_30697_30723 = state_30692__$1;
(statearr_30697_30723[(1)] = (5));

} else {
var statearr_30698_30724 = state_30692__$1;
(statearr_30698_30724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var state_30692__$1 = state_30692;
var statearr_30699_30725 = state_30692__$1;
(statearr_30699_30725[(2)] = null);

(statearr_30699_30725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30671 = (state_30692[(7)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(11),to,inst_30671);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (12))){
var state_30692__$1 = state_30692;
var statearr_30700_30726 = state_30692__$1;
(statearr_30700_30726[(2)] = null);

(statearr_30700_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(4),from);
} else {
if((state_val_30693 === (11))){
var inst_30681 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30681)){
var statearr_30701_30727 = state_30692__$1;
(statearr_30701_30727[(1)] = (12));

} else {
var statearr_30702_30728 = state_30692__$1;
(statearr_30702_30728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var state_30692__$1 = state_30692;
var statearr_30703_30729 = state_30692__$1;
(statearr_30703_30729[(2)] = null);

(statearr_30703_30729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var state_30692__$1 = state_30692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30704_30730 = state_30692__$1;
(statearr_30704_30730[(1)] = (8));

} else {
var statearr_30705_30731 = state_30692__$1;
(statearr_30705_30731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30686 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30706_30732 = state_30692__$1;
(statearr_30706_30732[(2)] = inst_30686);

(statearr_30706_30732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30678 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30707_30733 = state_30692__$1;
(statearr_30707_30733[(2)] = inst_30678);

(statearr_30707_30733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30675 = cljs.core.async.close_BANG_.call(null,to);
var state_30692__$1 = state_30692;
var statearr_30708_30734 = state_30692__$1;
(statearr_30708_30734[(2)] = inst_30675);

(statearr_30708_30734[(1)] = (10));


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
});})(c__30553__auto___30720))
;
return ((function (switch__30399__auto__,c__30553__auto___30720){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_30712 = [null,null,null,null,null,null,null,null];
(statearr_30712[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_30712[(1)] = (1));

return statearr_30712;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_30692){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e30713){if((e30713 instanceof Object)){
var ex__30403__auto__ = e30713;
var statearr_30714_30735 = state_30692;
(statearr_30714_30735[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30736 = state_30692;
state_30692 = G__30736;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___30720))
})();
var state__30555__auto__ = (function (){var statearr_30715 = f__30554__auto__.call(null);
(statearr_30715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___30720);

return statearr_30715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___30720))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30924){
var vec__30925 = p__30924;
var v = cljs.core.nth.call(null,vec__30925,(0),null);
var p = cljs.core.nth.call(null,vec__30925,(1),null);
var job = vec__30925;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30553__auto___31111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results){
return (function (state_30932){
var state_val_30933 = (state_30932[(1)]);
if((state_val_30933 === (1))){
var state_30932__$1 = state_30932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30932__$1,(2),res,v);
} else {
if((state_val_30933 === (2))){
var inst_30929 = (state_30932[(2)]);
var inst_30930 = cljs.core.async.close_BANG_.call(null,res);
var state_30932__$1 = (function (){var statearr_30934 = state_30932;
(statearr_30934[(7)] = inst_30929);

return statearr_30934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30932__$1,inst_30930);
} else {
return null;
}
}
});})(c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results))
;
return ((function (switch__30399__auto__,c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_30938 = [null,null,null,null,null,null,null,null];
(statearr_30938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__);

(statearr_30938[(1)] = (1));

return statearr_30938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1 = (function (state_30932){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_30932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e30939){if((e30939 instanceof Object)){
var ex__30403__auto__ = e30939;
var statearr_30940_31112 = state_30932;
(statearr_30940_31112[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31113 = state_30932;
state_30932 = G__31113;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = function(state_30932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1.call(this,state_30932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results))
})();
var state__30555__auto__ = (function (){var statearr_30941 = f__30554__auto__.call(null);
(statearr_30941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31111);

return statearr_30941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___31111,res,vec__30925,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30942){
var vec__30943 = p__30942;
var v = cljs.core.nth.call(null,vec__30943,(0),null);
var p = cljs.core.nth.call(null,vec__30943,(1),null);
var job = vec__30943;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29296__auto___31114 = n;
var __31115 = (0);
while(true){
if((__31115 < n__29296__auto___31114)){
var G__30946_31116 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30946_31116) {
case "compute":
var c__30553__auto___31118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31115,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (__31115,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function (state_30959){
var state_val_30960 = (state_30959[(1)]);
if((state_val_30960 === (1))){
var state_30959__$1 = state_30959;
var statearr_30961_31119 = state_30959__$1;
(statearr_30961_31119[(2)] = null);

(statearr_30961_31119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (2))){
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30959__$1,(4),jobs);
} else {
if((state_val_30960 === (3))){
var inst_30957 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30959__$1,inst_30957);
} else {
if((state_val_30960 === (4))){
var inst_30949 = (state_30959[(2)]);
var inst_30950 = process.call(null,inst_30949);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30950)){
var statearr_30962_31120 = state_30959__$1;
(statearr_30962_31120[(1)] = (5));

} else {
var statearr_30963_31121 = state_30959__$1;
(statearr_30963_31121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (5))){
var state_30959__$1 = state_30959;
var statearr_30964_31122 = state_30959__$1;
(statearr_30964_31122[(2)] = null);

(statearr_30964_31122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (6))){
var state_30959__$1 = state_30959;
var statearr_30965_31123 = state_30959__$1;
(statearr_30965_31123[(2)] = null);

(statearr_30965_31123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (7))){
var inst_30955 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30966_31124 = state_30959__$1;
(statearr_30966_31124[(2)] = inst_30955);

(statearr_30966_31124[(1)] = (3));


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
});})(__31115,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
;
return ((function (__31115,switch__30399__auto__,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null];
(statearr_30970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1 = (function (state_30959){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_30959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e30971){if((e30971 instanceof Object)){
var ex__30403__auto__ = e30971;
var statearr_30972_31125 = state_30959;
(statearr_30972_31125[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31126 = state_30959;
state_30959 = G__31126;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = function(state_30959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1.call(this,state_30959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__;
})()
;})(__31115,switch__30399__auto__,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
})();
var state__30555__auto__ = (function (){var statearr_30973 = f__30554__auto__.call(null);
(statearr_30973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31118);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(__31115,c__30553__auto___31118,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
);


break;
case "async":
var c__30553__auto___31127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31115,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (__31115,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function (state_30986){
var state_val_30987 = (state_30986[(1)]);
if((state_val_30987 === (1))){
var state_30986__$1 = state_30986;
var statearr_30988_31128 = state_30986__$1;
(statearr_30988_31128[(2)] = null);

(statearr_30988_31128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (2))){
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(4),jobs);
} else {
if((state_val_30987 === (3))){
var inst_30984 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30986__$1,inst_30984);
} else {
if((state_val_30987 === (4))){
var inst_30976 = (state_30986[(2)]);
var inst_30977 = async.call(null,inst_30976);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30977)){
var statearr_30989_31129 = state_30986__$1;
(statearr_30989_31129[(1)] = (5));

} else {
var statearr_30990_31130 = state_30986__$1;
(statearr_30990_31130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (5))){
var state_30986__$1 = state_30986;
var statearr_30991_31131 = state_30986__$1;
(statearr_30991_31131[(2)] = null);

(statearr_30991_31131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (6))){
var state_30986__$1 = state_30986;
var statearr_30992_31132 = state_30986__$1;
(statearr_30992_31132[(2)] = null);

(statearr_30992_31132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (7))){
var inst_30982 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30993_31133 = state_30986__$1;
(statearr_30993_31133[(2)] = inst_30982);

(statearr_30993_31133[(1)] = (3));


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
});})(__31115,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
;
return ((function (__31115,switch__30399__auto__,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_30997 = [null,null,null,null,null,null,null];
(statearr_30997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__);

(statearr_30997[(1)] = (1));

return statearr_30997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1 = (function (state_30986){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_30986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e30998){if((e30998 instanceof Object)){
var ex__30403__auto__ = e30998;
var statearr_30999_31134 = state_30986;
(statearr_30999_31134[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31135 = state_30986;
state_30986 = G__31135;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = function(state_30986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1.call(this,state_30986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__;
})()
;})(__31115,switch__30399__auto__,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
})();
var state__30555__auto__ = (function (){var statearr_31000 = f__30554__auto__.call(null);
(statearr_31000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31127);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(__31115,c__30553__auto___31127,G__30946_31116,n__29296__auto___31114,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31136 = (__31115 + (1));
__31115 = G__31136;
continue;
} else {
}
break;
}

var c__30553__auto___31137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___31137,jobs,results,process,async){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___31137,jobs,results,process,async){
return (function (state_31022){
var state_val_31023 = (state_31022[(1)]);
if((state_val_31023 === (1))){
var state_31022__$1 = state_31022;
var statearr_31024_31138 = state_31022__$1;
(statearr_31024_31138[(2)] = null);

(statearr_31024_31138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (2))){
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31022__$1,(4),from);
} else {
if((state_val_31023 === (3))){
var inst_31020 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31022__$1,inst_31020);
} else {
if((state_val_31023 === (4))){
var inst_31003 = (state_31022[(7)]);
var inst_31003__$1 = (state_31022[(2)]);
var inst_31004 = (inst_31003__$1 == null);
var state_31022__$1 = (function (){var statearr_31025 = state_31022;
(statearr_31025[(7)] = inst_31003__$1);

return statearr_31025;
})();
if(cljs.core.truth_(inst_31004)){
var statearr_31026_31139 = state_31022__$1;
(statearr_31026_31139[(1)] = (5));

} else {
var statearr_31027_31140 = state_31022__$1;
(statearr_31027_31140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (5))){
var inst_31006 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31022__$1 = state_31022;
var statearr_31028_31141 = state_31022__$1;
(statearr_31028_31141[(2)] = inst_31006);

(statearr_31028_31141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (6))){
var inst_31008 = (state_31022[(8)]);
var inst_31003 = (state_31022[(7)]);
var inst_31008__$1 = cljs.core.async.chan.call(null,(1));
var inst_31009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31010 = [inst_31003,inst_31008__$1];
var inst_31011 = (new cljs.core.PersistentVector(null,2,(5),inst_31009,inst_31010,null));
var state_31022__$1 = (function (){var statearr_31029 = state_31022;
(statearr_31029[(8)] = inst_31008__$1);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31022__$1,(8),jobs,inst_31011);
} else {
if((state_val_31023 === (7))){
var inst_31018 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31030_31142 = state_31022__$1;
(statearr_31030_31142[(2)] = inst_31018);

(statearr_31030_31142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (8))){
var inst_31008 = (state_31022[(8)]);
var inst_31013 = (state_31022[(2)]);
var state_31022__$1 = (function (){var statearr_31031 = state_31022;
(statearr_31031[(9)] = inst_31013);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31022__$1,(9),results,inst_31008);
} else {
if((state_val_31023 === (9))){
var inst_31015 = (state_31022[(2)]);
var state_31022__$1 = (function (){var statearr_31032 = state_31022;
(statearr_31032[(10)] = inst_31015);

return statearr_31032;
})();
var statearr_31033_31143 = state_31022__$1;
(statearr_31033_31143[(2)] = null);

(statearr_31033_31143[(1)] = (2));


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
});})(c__30553__auto___31137,jobs,results,process,async))
;
return ((function (switch__30399__auto__,c__30553__auto___31137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_31037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__);

(statearr_31037[(1)] = (1));

return statearr_31037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1 = (function (state_31022){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31038){if((e31038 instanceof Object)){
var ex__30403__auto__ = e31038;
var statearr_31039_31144 = state_31022;
(statearr_31039_31144[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31145 = state_31022;
state_31022 = G__31145;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = function(state_31022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1.call(this,state_31022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___31137,jobs,results,process,async))
})();
var state__30555__auto__ = (function (){var statearr_31040 = f__30554__auto__.call(null);
(statearr_31040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31137);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___31137,jobs,results,process,async))
);


var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__,jobs,results,process,async){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__,jobs,results,process,async){
return (function (state_31078){
var state_val_31079 = (state_31078[(1)]);
if((state_val_31079 === (7))){
var inst_31074 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31080_31146 = state_31078__$1;
(statearr_31080_31146[(2)] = inst_31074);

(statearr_31080_31146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (20))){
var state_31078__$1 = state_31078;
var statearr_31081_31147 = state_31078__$1;
(statearr_31081_31147[(2)] = null);

(statearr_31081_31147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (1))){
var state_31078__$1 = state_31078;
var statearr_31082_31148 = state_31078__$1;
(statearr_31082_31148[(2)] = null);

(statearr_31082_31148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (4))){
var inst_31043 = (state_31078[(7)]);
var inst_31043__$1 = (state_31078[(2)]);
var inst_31044 = (inst_31043__$1 == null);
var state_31078__$1 = (function (){var statearr_31083 = state_31078;
(statearr_31083[(7)] = inst_31043__$1);

return statearr_31083;
})();
if(cljs.core.truth_(inst_31044)){
var statearr_31084_31149 = state_31078__$1;
(statearr_31084_31149[(1)] = (5));

} else {
var statearr_31085_31150 = state_31078__$1;
(statearr_31085_31150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (15))){
var inst_31056 = (state_31078[(8)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31078__$1,(18),to,inst_31056);
} else {
if((state_val_31079 === (21))){
var inst_31069 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31086_31151 = state_31078__$1;
(statearr_31086_31151[(2)] = inst_31069);

(statearr_31086_31151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (13))){
var inst_31071 = (state_31078[(2)]);
var state_31078__$1 = (function (){var statearr_31087 = state_31078;
(statearr_31087[(9)] = inst_31071);

return statearr_31087;
})();
var statearr_31088_31152 = state_31078__$1;
(statearr_31088_31152[(2)] = null);

(statearr_31088_31152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (6))){
var inst_31043 = (state_31078[(7)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(11),inst_31043);
} else {
if((state_val_31079 === (17))){
var inst_31064 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
if(cljs.core.truth_(inst_31064)){
var statearr_31089_31153 = state_31078__$1;
(statearr_31089_31153[(1)] = (19));

} else {
var statearr_31090_31154 = state_31078__$1;
(statearr_31090_31154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (3))){
var inst_31076 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31078__$1,inst_31076);
} else {
if((state_val_31079 === (12))){
var inst_31053 = (state_31078[(10)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(14),inst_31053);
} else {
if((state_val_31079 === (2))){
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(4),results);
} else {
if((state_val_31079 === (19))){
var state_31078__$1 = state_31078;
var statearr_31091_31155 = state_31078__$1;
(statearr_31091_31155[(2)] = null);

(statearr_31091_31155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (11))){
var inst_31053 = (state_31078[(2)]);
var state_31078__$1 = (function (){var statearr_31092 = state_31078;
(statearr_31092[(10)] = inst_31053);

return statearr_31092;
})();
var statearr_31093_31156 = state_31078__$1;
(statearr_31093_31156[(2)] = null);

(statearr_31093_31156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (9))){
var state_31078__$1 = state_31078;
var statearr_31094_31157 = state_31078__$1;
(statearr_31094_31157[(2)] = null);

(statearr_31094_31157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (5))){
var state_31078__$1 = state_31078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31095_31158 = state_31078__$1;
(statearr_31095_31158[(1)] = (8));

} else {
var statearr_31096_31159 = state_31078__$1;
(statearr_31096_31159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (14))){
var inst_31058 = (state_31078[(11)]);
var inst_31056 = (state_31078[(8)]);
var inst_31056__$1 = (state_31078[(2)]);
var inst_31057 = (inst_31056__$1 == null);
var inst_31058__$1 = cljs.core.not.call(null,inst_31057);
var state_31078__$1 = (function (){var statearr_31097 = state_31078;
(statearr_31097[(11)] = inst_31058__$1);

(statearr_31097[(8)] = inst_31056__$1);

return statearr_31097;
})();
if(inst_31058__$1){
var statearr_31098_31160 = state_31078__$1;
(statearr_31098_31160[(1)] = (15));

} else {
var statearr_31099_31161 = state_31078__$1;
(statearr_31099_31161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (16))){
var inst_31058 = (state_31078[(11)]);
var state_31078__$1 = state_31078;
var statearr_31100_31162 = state_31078__$1;
(statearr_31100_31162[(2)] = inst_31058);

(statearr_31100_31162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (10))){
var inst_31050 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31101_31163 = state_31078__$1;
(statearr_31101_31163[(2)] = inst_31050);

(statearr_31101_31163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (18))){
var inst_31061 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31102_31164 = state_31078__$1;
(statearr_31102_31164[(2)] = inst_31061);

(statearr_31102_31164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (8))){
var inst_31047 = cljs.core.async.close_BANG_.call(null,to);
var state_31078__$1 = state_31078;
var statearr_31103_31165 = state_31078__$1;
(statearr_31103_31165[(2)] = inst_31047);

(statearr_31103_31165[(1)] = (10));


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
}
}
}
}
});})(c__30553__auto__,jobs,results,process,async))
;
return ((function (switch__30399__auto__,c__30553__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_31107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__);

(statearr_31107[(1)] = (1));

return statearr_31107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1 = (function (state_31078){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31108){if((e31108 instanceof Object)){
var ex__30403__auto__ = e31108;
var statearr_31109_31166 = state_31078;
(statearr_31109_31166[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31167 = state_31078;
state_31078 = G__31167;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__ = function(state_31078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1.call(this,state_31078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__,jobs,results,process,async))
})();
var state__30555__auto__ = (function (){var statearr_31110 = f__30554__auto__.call(null);
(statearr_31110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_31110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__,jobs,results,process,async))
);

return c__30553__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31168 = [];
var len__29456__auto___31171 = arguments.length;
var i__29457__auto___31172 = (0);
while(true){
if((i__29457__auto___31172 < len__29456__auto___31171)){
args31168.push((arguments[i__29457__auto___31172]));

var G__31173 = (i__29457__auto___31172 + (1));
i__29457__auto___31172 = G__31173;
continue;
} else {
}
break;
}

var G__31170 = args31168.length;
switch (G__31170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31168.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31175 = [];
var len__29456__auto___31178 = arguments.length;
var i__29457__auto___31179 = (0);
while(true){
if((i__29457__auto___31179 < len__29456__auto___31178)){
args31175.push((arguments[i__29457__auto___31179]));

var G__31180 = (i__29457__auto___31179 + (1));
i__29457__auto___31179 = G__31180;
continue;
} else {
}
break;
}

var G__31177 = args31175.length;
switch (G__31177) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31175.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31182 = [];
var len__29456__auto___31235 = arguments.length;
var i__29457__auto___31236 = (0);
while(true){
if((i__29457__auto___31236 < len__29456__auto___31235)){
args31182.push((arguments[i__29457__auto___31236]));

var G__31237 = (i__29457__auto___31236 + (1));
i__29457__auto___31236 = G__31237;
continue;
} else {
}
break;
}

var G__31184 = args31182.length;
switch (G__31184) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31182.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30553__auto___31239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___31239,tc,fc){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___31239,tc,fc){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31212_31240 = state_31210__$1;
(statearr_31212_31240[(2)] = inst_31206);

(statearr_31212_31240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (1))){
var state_31210__$1 = state_31210;
var statearr_31213_31241 = state_31210__$1;
(statearr_31213_31241[(2)] = null);

(statearr_31213_31241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31187 = (state_31210[(7)]);
var inst_31187__$1 = (state_31210[(2)]);
var inst_31188 = (inst_31187__$1 == null);
var state_31210__$1 = (function (){var statearr_31214 = state_31210;
(statearr_31214[(7)] = inst_31187__$1);

return statearr_31214;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31215_31242 = state_31210__$1;
(statearr_31215_31242[(1)] = (5));

} else {
var statearr_31216_31243 = state_31210__$1;
(statearr_31216_31243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var state_31210__$1 = state_31210;
var statearr_31217_31244 = state_31210__$1;
(statearr_31217_31244[(2)] = null);

(statearr_31217_31244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31187 = (state_31210[(7)]);
var inst_31193 = p.call(null,inst_31187);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31193)){
var statearr_31218_31245 = state_31210__$1;
(statearr_31218_31245[(1)] = (9));

} else {
var statearr_31219_31246 = state_31210__$1;
(statearr_31219_31246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (12))){
var state_31210__$1 = state_31210;
var statearr_31220_31247 = state_31210__$1;
(statearr_31220_31247[(2)] = null);

(statearr_31220_31247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(4),ch);
} else {
if((state_val_31211 === (11))){
var inst_31187 = (state_31210[(7)]);
var inst_31197 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31210__$1,(8),inst_31197,inst_31187);
} else {
if((state_val_31211 === (9))){
var state_31210__$1 = state_31210;
var statearr_31221_31248 = state_31210__$1;
(statearr_31221_31248[(2)] = tc);

(statearr_31221_31248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (5))){
var inst_31190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31191 = cljs.core.async.close_BANG_.call(null,fc);
var state_31210__$1 = (function (){var statearr_31222 = state_31210;
(statearr_31222[(8)] = inst_31190);

return statearr_31222;
})();
var statearr_31223_31249 = state_31210__$1;
(statearr_31223_31249[(2)] = inst_31191);

(statearr_31223_31249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var inst_31204 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31224_31250 = state_31210__$1;
(statearr_31224_31250[(2)] = inst_31204);

(statearr_31224_31250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (10))){
var state_31210__$1 = state_31210;
var statearr_31225_31251 = state_31210__$1;
(statearr_31225_31251[(2)] = fc);

(statearr_31225_31251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (8))){
var inst_31199 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31199)){
var statearr_31226_31252 = state_31210__$1;
(statearr_31226_31252[(1)] = (12));

} else {
var statearr_31227_31253 = state_31210__$1;
(statearr_31227_31253[(1)] = (13));

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
});})(c__30553__auto___31239,tc,fc))
;
return ((function (switch__30399__auto__,c__30553__auto___31239,tc,fc){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_31231 = [null,null,null,null,null,null,null,null,null];
(statearr_31231[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_31231[(1)] = (1));

return statearr_31231;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_31210){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31232){if((e31232 instanceof Object)){
var ex__30403__auto__ = e31232;
var statearr_31233_31254 = state_31210;
(statearr_31233_31254[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31255 = state_31210;
state_31210 = G__31255;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___31239,tc,fc))
})();
var state__30555__auto__ = (function (){var statearr_31234 = f__30554__auto__.call(null);
(statearr_31234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31239);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___31239,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__){
return (function (state_31319){
var state_val_31320 = (state_31319[(1)]);
if((state_val_31320 === (7))){
var inst_31315 = (state_31319[(2)]);
var state_31319__$1 = state_31319;
var statearr_31321_31342 = state_31319__$1;
(statearr_31321_31342[(2)] = inst_31315);

(statearr_31321_31342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (1))){
var inst_31299 = init;
var state_31319__$1 = (function (){var statearr_31322 = state_31319;
(statearr_31322[(7)] = inst_31299);

return statearr_31322;
})();
var statearr_31323_31343 = state_31319__$1;
(statearr_31323_31343[(2)] = null);

(statearr_31323_31343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (4))){
var inst_31302 = (state_31319[(8)]);
var inst_31302__$1 = (state_31319[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var state_31319__$1 = (function (){var statearr_31324 = state_31319;
(statearr_31324[(8)] = inst_31302__$1);

return statearr_31324;
})();
if(cljs.core.truth_(inst_31303)){
var statearr_31325_31344 = state_31319__$1;
(statearr_31325_31344[(1)] = (5));

} else {
var statearr_31326_31345 = state_31319__$1;
(statearr_31326_31345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (6))){
var inst_31302 = (state_31319[(8)]);
var inst_31306 = (state_31319[(9)]);
var inst_31299 = (state_31319[(7)]);
var inst_31306__$1 = f.call(null,inst_31299,inst_31302);
var inst_31307 = cljs.core.reduced_QMARK_.call(null,inst_31306__$1);
var state_31319__$1 = (function (){var statearr_31327 = state_31319;
(statearr_31327[(9)] = inst_31306__$1);

return statearr_31327;
})();
if(inst_31307){
var statearr_31328_31346 = state_31319__$1;
(statearr_31328_31346[(1)] = (8));

} else {
var statearr_31329_31347 = state_31319__$1;
(statearr_31329_31347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (3))){
var inst_31317 = (state_31319[(2)]);
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31319__$1,inst_31317);
} else {
if((state_val_31320 === (2))){
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31319__$1,(4),ch);
} else {
if((state_val_31320 === (9))){
var inst_31306 = (state_31319[(9)]);
var inst_31299 = inst_31306;
var state_31319__$1 = (function (){var statearr_31330 = state_31319;
(statearr_31330[(7)] = inst_31299);

return statearr_31330;
})();
var statearr_31331_31348 = state_31319__$1;
(statearr_31331_31348[(2)] = null);

(statearr_31331_31348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (5))){
var inst_31299 = (state_31319[(7)]);
var state_31319__$1 = state_31319;
var statearr_31332_31349 = state_31319__$1;
(statearr_31332_31349[(2)] = inst_31299);

(statearr_31332_31349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (10))){
var inst_31313 = (state_31319[(2)]);
var state_31319__$1 = state_31319;
var statearr_31333_31350 = state_31319__$1;
(statearr_31333_31350[(2)] = inst_31313);

(statearr_31333_31350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (8))){
var inst_31306 = (state_31319[(9)]);
var inst_31309 = cljs.core.deref.call(null,inst_31306);
var state_31319__$1 = state_31319;
var statearr_31334_31351 = state_31319__$1;
(statearr_31334_31351[(2)] = inst_31309);

(statearr_31334_31351[(1)] = (10));


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
});})(c__30553__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30400__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30400__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$reduce_$_state_machine__30400__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$reduce_$_state_machine__30400__auto____1 = (function (state_31319){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__30403__auto__ = e31339;
var statearr_31340_31352 = state_31319;
(statearr_31340_31352[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31353 = state_31319;
state_31319 = G__31353;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30400__auto__ = function(state_31319){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30400__auto____1.call(this,state_31319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30400__auto____0;
cljs$core$async$reduce_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30400__auto____1;
return cljs$core$async$reduce_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__))
})();
var state__30555__auto__ = (function (){var statearr_31341 = f__30554__auto__.call(null);
(statearr_31341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__))
);

return c__30553__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31354 = [];
var len__29456__auto___31406 = arguments.length;
var i__29457__auto___31407 = (0);
while(true){
if((i__29457__auto___31407 < len__29456__auto___31406)){
args31354.push((arguments[i__29457__auto___31407]));

var G__31408 = (i__29457__auto___31407 + (1));
i__29457__auto___31407 = G__31408;
continue;
} else {
}
break;
}

var G__31356 = args31354.length;
switch (G__31356) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31354.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__){
return (function (state_31381){
var state_val_31382 = (state_31381[(1)]);
if((state_val_31382 === (7))){
var inst_31363 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31383_31410 = state_31381__$1;
(statearr_31383_31410[(2)] = inst_31363);

(statearr_31383_31410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (1))){
var inst_31357 = cljs.core.seq.call(null,coll);
var inst_31358 = inst_31357;
var state_31381__$1 = (function (){var statearr_31384 = state_31381;
(statearr_31384[(7)] = inst_31358);

return statearr_31384;
})();
var statearr_31385_31411 = state_31381__$1;
(statearr_31385_31411[(2)] = null);

(statearr_31385_31411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (4))){
var inst_31358 = (state_31381[(7)]);
var inst_31361 = cljs.core.first.call(null,inst_31358);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31381__$1,(7),ch,inst_31361);
} else {
if((state_val_31382 === (13))){
var inst_31375 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31386_31412 = state_31381__$1;
(statearr_31386_31412[(2)] = inst_31375);

(statearr_31386_31412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (6))){
var inst_31366 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
if(cljs.core.truth_(inst_31366)){
var statearr_31387_31413 = state_31381__$1;
(statearr_31387_31413[(1)] = (8));

} else {
var statearr_31388_31414 = state_31381__$1;
(statearr_31388_31414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (3))){
var inst_31379 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31381__$1,inst_31379);
} else {
if((state_val_31382 === (12))){
var state_31381__$1 = state_31381;
var statearr_31389_31415 = state_31381__$1;
(statearr_31389_31415[(2)] = null);

(statearr_31389_31415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (2))){
var inst_31358 = (state_31381[(7)]);
var state_31381__$1 = state_31381;
if(cljs.core.truth_(inst_31358)){
var statearr_31390_31416 = state_31381__$1;
(statearr_31390_31416[(1)] = (4));

} else {
var statearr_31391_31417 = state_31381__$1;
(statearr_31391_31417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (11))){
var inst_31372 = cljs.core.async.close_BANG_.call(null,ch);
var state_31381__$1 = state_31381;
var statearr_31392_31418 = state_31381__$1;
(statearr_31392_31418[(2)] = inst_31372);

(statearr_31392_31418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (9))){
var state_31381__$1 = state_31381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31393_31419 = state_31381__$1;
(statearr_31393_31419[(1)] = (11));

} else {
var statearr_31394_31420 = state_31381__$1;
(statearr_31394_31420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (5))){
var inst_31358 = (state_31381[(7)]);
var state_31381__$1 = state_31381;
var statearr_31395_31421 = state_31381__$1;
(statearr_31395_31421[(2)] = inst_31358);

(statearr_31395_31421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (10))){
var inst_31377 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31396_31422 = state_31381__$1;
(statearr_31396_31422[(2)] = inst_31377);

(statearr_31396_31422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (8))){
var inst_31358 = (state_31381[(7)]);
var inst_31368 = cljs.core.next.call(null,inst_31358);
var inst_31358__$1 = inst_31368;
var state_31381__$1 = (function (){var statearr_31397 = state_31381;
(statearr_31397[(7)] = inst_31358__$1);

return statearr_31397;
})();
var statearr_31398_31423 = state_31381__$1;
(statearr_31398_31423[(2)] = null);

(statearr_31398_31423[(1)] = (2));


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
});})(c__30553__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_31402 = [null,null,null,null,null,null,null,null];
(statearr_31402[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_31402[(1)] = (1));

return statearr_31402;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_31381){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31403){if((e31403 instanceof Object)){
var ex__30403__auto__ = e31403;
var statearr_31404_31424 = state_31381;
(statearr_31404_31424[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31425 = state_31381;
state_31381 = G__31425;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_31381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_31381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__))
})();
var state__30555__auto__ = (function (){var statearr_31405 = f__30554__auto__.call(null);
(statearr_31405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_31405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__))
);

return c__30553__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29044__auto__ = (((_ == null))?null:_);
var m__29045__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,_);
} else {
var m__29045__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29045__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,ch);
} else {
var m__29045__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m);
} else {
var m__29045__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31651 = (function (mult,ch,cs,meta31652){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31652 = meta31652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31653,meta31652__$1){
var self__ = this;
var _31653__$1 = this;
return (new cljs.core.async.t_cljs$core$async31651(self__.mult,self__.ch,self__.cs,meta31652__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31653){
var self__ = this;
var _31653__$1 = this;
return self__.meta31652;
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31652","meta31652",-1419003371,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31651";

cljs.core.async.t_cljs$core$async31651.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async31651");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31651 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31651(mult__$1,ch__$1,cs__$1,meta31652){
return (new cljs.core.async.t_cljs$core$async31651(mult__$1,ch__$1,cs__$1,meta31652));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31651(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30553__auto___31876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___31876,cs,m,dchan,dctr,done){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___31876,cs,m,dchan,dctr,done){
return (function (state_31788){
var state_val_31789 = (state_31788[(1)]);
if((state_val_31789 === (7))){
var inst_31784 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31790_31877 = state_31788__$1;
(statearr_31790_31877[(2)] = inst_31784);

(statearr_31790_31877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (20))){
var inst_31687 = (state_31788[(7)]);
var inst_31699 = cljs.core.first.call(null,inst_31687);
var inst_31700 = cljs.core.nth.call(null,inst_31699,(0),null);
var inst_31701 = cljs.core.nth.call(null,inst_31699,(1),null);
var state_31788__$1 = (function (){var statearr_31791 = state_31788;
(statearr_31791[(8)] = inst_31700);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31701)){
var statearr_31792_31878 = state_31788__$1;
(statearr_31792_31878[(1)] = (22));

} else {
var statearr_31793_31879 = state_31788__$1;
(statearr_31793_31879[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (27))){
var inst_31656 = (state_31788[(9)]);
var inst_31736 = (state_31788[(10)]);
var inst_31731 = (state_31788[(11)]);
var inst_31729 = (state_31788[(12)]);
var inst_31736__$1 = cljs.core._nth.call(null,inst_31729,inst_31731);
var inst_31737 = cljs.core.async.put_BANG_.call(null,inst_31736__$1,inst_31656,done);
var state_31788__$1 = (function (){var statearr_31794 = state_31788;
(statearr_31794[(10)] = inst_31736__$1);

return statearr_31794;
})();
if(cljs.core.truth_(inst_31737)){
var statearr_31795_31880 = state_31788__$1;
(statearr_31795_31880[(1)] = (30));

} else {
var statearr_31796_31881 = state_31788__$1;
(statearr_31796_31881[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (1))){
var state_31788__$1 = state_31788;
var statearr_31797_31882 = state_31788__$1;
(statearr_31797_31882[(2)] = null);

(statearr_31797_31882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (24))){
var inst_31687 = (state_31788[(7)]);
var inst_31706 = (state_31788[(2)]);
var inst_31707 = cljs.core.next.call(null,inst_31687);
var inst_31665 = inst_31707;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31788__$1 = (function (){var statearr_31798 = state_31788;
(statearr_31798[(13)] = inst_31668);

(statearr_31798[(14)] = inst_31665);

(statearr_31798[(15)] = inst_31667);

(statearr_31798[(16)] = inst_31666);

(statearr_31798[(17)] = inst_31706);

return statearr_31798;
})();
var statearr_31799_31883 = state_31788__$1;
(statearr_31799_31883[(2)] = null);

(statearr_31799_31883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (39))){
var state_31788__$1 = state_31788;
var statearr_31803_31884 = state_31788__$1;
(statearr_31803_31884[(2)] = null);

(statearr_31803_31884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (4))){
var inst_31656 = (state_31788[(9)]);
var inst_31656__$1 = (state_31788[(2)]);
var inst_31657 = (inst_31656__$1 == null);
var state_31788__$1 = (function (){var statearr_31804 = state_31788;
(statearr_31804[(9)] = inst_31656__$1);

return statearr_31804;
})();
if(cljs.core.truth_(inst_31657)){
var statearr_31805_31885 = state_31788__$1;
(statearr_31805_31885[(1)] = (5));

} else {
var statearr_31806_31886 = state_31788__$1;
(statearr_31806_31886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (15))){
var inst_31668 = (state_31788[(13)]);
var inst_31665 = (state_31788[(14)]);
var inst_31667 = (state_31788[(15)]);
var inst_31666 = (state_31788[(16)]);
var inst_31683 = (state_31788[(2)]);
var inst_31684 = (inst_31668 + (1));
var tmp31800 = inst_31665;
var tmp31801 = inst_31667;
var tmp31802 = inst_31666;
var inst_31665__$1 = tmp31800;
var inst_31666__$1 = tmp31802;
var inst_31667__$1 = tmp31801;
var inst_31668__$1 = inst_31684;
var state_31788__$1 = (function (){var statearr_31807 = state_31788;
(statearr_31807[(13)] = inst_31668__$1);

(statearr_31807[(14)] = inst_31665__$1);

(statearr_31807[(15)] = inst_31667__$1);

(statearr_31807[(16)] = inst_31666__$1);

(statearr_31807[(18)] = inst_31683);

return statearr_31807;
})();
var statearr_31808_31887 = state_31788__$1;
(statearr_31808_31887[(2)] = null);

(statearr_31808_31887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (21))){
var inst_31710 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31812_31888 = state_31788__$1;
(statearr_31812_31888[(2)] = inst_31710);

(statearr_31812_31888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (31))){
var inst_31736 = (state_31788[(10)]);
var inst_31740 = done.call(null,null);
var inst_31741 = cljs.core.async.untap_STAR_.call(null,m,inst_31736);
var state_31788__$1 = (function (){var statearr_31813 = state_31788;
(statearr_31813[(19)] = inst_31740);

return statearr_31813;
})();
var statearr_31814_31889 = state_31788__$1;
(statearr_31814_31889[(2)] = inst_31741);

(statearr_31814_31889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (32))){
var inst_31731 = (state_31788[(11)]);
var inst_31729 = (state_31788[(12)]);
var inst_31728 = (state_31788[(20)]);
var inst_31730 = (state_31788[(21)]);
var inst_31743 = (state_31788[(2)]);
var inst_31744 = (inst_31731 + (1));
var tmp31809 = inst_31729;
var tmp31810 = inst_31728;
var tmp31811 = inst_31730;
var inst_31728__$1 = tmp31810;
var inst_31729__$1 = tmp31809;
var inst_31730__$1 = tmp31811;
var inst_31731__$1 = inst_31744;
var state_31788__$1 = (function (){var statearr_31815 = state_31788;
(statearr_31815[(11)] = inst_31731__$1);

(statearr_31815[(12)] = inst_31729__$1);

(statearr_31815[(20)] = inst_31728__$1);

(statearr_31815[(22)] = inst_31743);

(statearr_31815[(21)] = inst_31730__$1);

return statearr_31815;
})();
var statearr_31816_31890 = state_31788__$1;
(statearr_31816_31890[(2)] = null);

(statearr_31816_31890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (40))){
var inst_31756 = (state_31788[(23)]);
var inst_31760 = done.call(null,null);
var inst_31761 = cljs.core.async.untap_STAR_.call(null,m,inst_31756);
var state_31788__$1 = (function (){var statearr_31817 = state_31788;
(statearr_31817[(24)] = inst_31760);

return statearr_31817;
})();
var statearr_31818_31891 = state_31788__$1;
(statearr_31818_31891[(2)] = inst_31761);

(statearr_31818_31891[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (33))){
var inst_31747 = (state_31788[(25)]);
var inst_31749 = cljs.core.chunked_seq_QMARK_.call(null,inst_31747);
var state_31788__$1 = state_31788;
if(inst_31749){
var statearr_31819_31892 = state_31788__$1;
(statearr_31819_31892[(1)] = (36));

} else {
var statearr_31820_31893 = state_31788__$1;
(statearr_31820_31893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (13))){
var inst_31677 = (state_31788[(26)]);
var inst_31680 = cljs.core.async.close_BANG_.call(null,inst_31677);
var state_31788__$1 = state_31788;
var statearr_31821_31894 = state_31788__$1;
(statearr_31821_31894[(2)] = inst_31680);

(statearr_31821_31894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (22))){
var inst_31700 = (state_31788[(8)]);
var inst_31703 = cljs.core.async.close_BANG_.call(null,inst_31700);
var state_31788__$1 = state_31788;
var statearr_31822_31895 = state_31788__$1;
(statearr_31822_31895[(2)] = inst_31703);

(statearr_31822_31895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (36))){
var inst_31747 = (state_31788[(25)]);
var inst_31751 = cljs.core.chunk_first.call(null,inst_31747);
var inst_31752 = cljs.core.chunk_rest.call(null,inst_31747);
var inst_31753 = cljs.core.count.call(null,inst_31751);
var inst_31728 = inst_31752;
var inst_31729 = inst_31751;
var inst_31730 = inst_31753;
var inst_31731 = (0);
var state_31788__$1 = (function (){var statearr_31823 = state_31788;
(statearr_31823[(11)] = inst_31731);

(statearr_31823[(12)] = inst_31729);

(statearr_31823[(20)] = inst_31728);

(statearr_31823[(21)] = inst_31730);

return statearr_31823;
})();
var statearr_31824_31896 = state_31788__$1;
(statearr_31824_31896[(2)] = null);

(statearr_31824_31896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (41))){
var inst_31747 = (state_31788[(25)]);
var inst_31763 = (state_31788[(2)]);
var inst_31764 = cljs.core.next.call(null,inst_31747);
var inst_31728 = inst_31764;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31788__$1 = (function (){var statearr_31825 = state_31788;
(statearr_31825[(11)] = inst_31731);

(statearr_31825[(27)] = inst_31763);

(statearr_31825[(12)] = inst_31729);

(statearr_31825[(20)] = inst_31728);

(statearr_31825[(21)] = inst_31730);

return statearr_31825;
})();
var statearr_31826_31897 = state_31788__$1;
(statearr_31826_31897[(2)] = null);

(statearr_31826_31897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (43))){
var state_31788__$1 = state_31788;
var statearr_31827_31898 = state_31788__$1;
(statearr_31827_31898[(2)] = null);

(statearr_31827_31898[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (29))){
var inst_31772 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31828_31899 = state_31788__$1;
(statearr_31828_31899[(2)] = inst_31772);

(statearr_31828_31899[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (44))){
var inst_31781 = (state_31788[(2)]);
var state_31788__$1 = (function (){var statearr_31829 = state_31788;
(statearr_31829[(28)] = inst_31781);

return statearr_31829;
})();
var statearr_31830_31900 = state_31788__$1;
(statearr_31830_31900[(2)] = null);

(statearr_31830_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (6))){
var inst_31720 = (state_31788[(29)]);
var inst_31719 = cljs.core.deref.call(null,cs);
var inst_31720__$1 = cljs.core.keys.call(null,inst_31719);
var inst_31721 = cljs.core.count.call(null,inst_31720__$1);
var inst_31722 = cljs.core.reset_BANG_.call(null,dctr,inst_31721);
var inst_31727 = cljs.core.seq.call(null,inst_31720__$1);
var inst_31728 = inst_31727;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31788__$1 = (function (){var statearr_31831 = state_31788;
(statearr_31831[(29)] = inst_31720__$1);

(statearr_31831[(30)] = inst_31722);

(statearr_31831[(11)] = inst_31731);

(statearr_31831[(12)] = inst_31729);

(statearr_31831[(20)] = inst_31728);

(statearr_31831[(21)] = inst_31730);

return statearr_31831;
})();
var statearr_31832_31901 = state_31788__$1;
(statearr_31832_31901[(2)] = null);

(statearr_31832_31901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (28))){
var inst_31728 = (state_31788[(20)]);
var inst_31747 = (state_31788[(25)]);
var inst_31747__$1 = cljs.core.seq.call(null,inst_31728);
var state_31788__$1 = (function (){var statearr_31833 = state_31788;
(statearr_31833[(25)] = inst_31747__$1);

return statearr_31833;
})();
if(inst_31747__$1){
var statearr_31834_31902 = state_31788__$1;
(statearr_31834_31902[(1)] = (33));

} else {
var statearr_31835_31903 = state_31788__$1;
(statearr_31835_31903[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (25))){
var inst_31731 = (state_31788[(11)]);
var inst_31730 = (state_31788[(21)]);
var inst_31733 = (inst_31731 < inst_31730);
var inst_31734 = inst_31733;
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31734)){
var statearr_31836_31904 = state_31788__$1;
(statearr_31836_31904[(1)] = (27));

} else {
var statearr_31837_31905 = state_31788__$1;
(statearr_31837_31905[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (34))){
var state_31788__$1 = state_31788;
var statearr_31838_31906 = state_31788__$1;
(statearr_31838_31906[(2)] = null);

(statearr_31838_31906[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (17))){
var state_31788__$1 = state_31788;
var statearr_31839_31907 = state_31788__$1;
(statearr_31839_31907[(2)] = null);

(statearr_31839_31907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (3))){
var inst_31786 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31788__$1,inst_31786);
} else {
if((state_val_31789 === (12))){
var inst_31715 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31840_31908 = state_31788__$1;
(statearr_31840_31908[(2)] = inst_31715);

(statearr_31840_31908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (2))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(4),ch);
} else {
if((state_val_31789 === (23))){
var state_31788__$1 = state_31788;
var statearr_31841_31909 = state_31788__$1;
(statearr_31841_31909[(2)] = null);

(statearr_31841_31909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (35))){
var inst_31770 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31842_31910 = state_31788__$1;
(statearr_31842_31910[(2)] = inst_31770);

(statearr_31842_31910[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (19))){
var inst_31687 = (state_31788[(7)]);
var inst_31691 = cljs.core.chunk_first.call(null,inst_31687);
var inst_31692 = cljs.core.chunk_rest.call(null,inst_31687);
var inst_31693 = cljs.core.count.call(null,inst_31691);
var inst_31665 = inst_31692;
var inst_31666 = inst_31691;
var inst_31667 = inst_31693;
var inst_31668 = (0);
var state_31788__$1 = (function (){var statearr_31843 = state_31788;
(statearr_31843[(13)] = inst_31668);

(statearr_31843[(14)] = inst_31665);

(statearr_31843[(15)] = inst_31667);

(statearr_31843[(16)] = inst_31666);

return statearr_31843;
})();
var statearr_31844_31911 = state_31788__$1;
(statearr_31844_31911[(2)] = null);

(statearr_31844_31911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (11))){
var inst_31665 = (state_31788[(14)]);
var inst_31687 = (state_31788[(7)]);
var inst_31687__$1 = cljs.core.seq.call(null,inst_31665);
var state_31788__$1 = (function (){var statearr_31845 = state_31788;
(statearr_31845[(7)] = inst_31687__$1);

return statearr_31845;
})();
if(inst_31687__$1){
var statearr_31846_31912 = state_31788__$1;
(statearr_31846_31912[(1)] = (16));

} else {
var statearr_31847_31913 = state_31788__$1;
(statearr_31847_31913[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (9))){
var inst_31717 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31848_31914 = state_31788__$1;
(statearr_31848_31914[(2)] = inst_31717);

(statearr_31848_31914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (5))){
var inst_31663 = cljs.core.deref.call(null,cs);
var inst_31664 = cljs.core.seq.call(null,inst_31663);
var inst_31665 = inst_31664;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31788__$1 = (function (){var statearr_31849 = state_31788;
(statearr_31849[(13)] = inst_31668);

(statearr_31849[(14)] = inst_31665);

(statearr_31849[(15)] = inst_31667);

(statearr_31849[(16)] = inst_31666);

return statearr_31849;
})();
var statearr_31850_31915 = state_31788__$1;
(statearr_31850_31915[(2)] = null);

(statearr_31850_31915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (14))){
var state_31788__$1 = state_31788;
var statearr_31851_31916 = state_31788__$1;
(statearr_31851_31916[(2)] = null);

(statearr_31851_31916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (45))){
var inst_31778 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31852_31917 = state_31788__$1;
(statearr_31852_31917[(2)] = inst_31778);

(statearr_31852_31917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (26))){
var inst_31720 = (state_31788[(29)]);
var inst_31774 = (state_31788[(2)]);
var inst_31775 = cljs.core.seq.call(null,inst_31720);
var state_31788__$1 = (function (){var statearr_31853 = state_31788;
(statearr_31853[(31)] = inst_31774);

return statearr_31853;
})();
if(inst_31775){
var statearr_31854_31918 = state_31788__$1;
(statearr_31854_31918[(1)] = (42));

} else {
var statearr_31855_31919 = state_31788__$1;
(statearr_31855_31919[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (16))){
var inst_31687 = (state_31788[(7)]);
var inst_31689 = cljs.core.chunked_seq_QMARK_.call(null,inst_31687);
var state_31788__$1 = state_31788;
if(inst_31689){
var statearr_31856_31920 = state_31788__$1;
(statearr_31856_31920[(1)] = (19));

} else {
var statearr_31857_31921 = state_31788__$1;
(statearr_31857_31921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (38))){
var inst_31767 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31858_31922 = state_31788__$1;
(statearr_31858_31922[(2)] = inst_31767);

(statearr_31858_31922[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (30))){
var state_31788__$1 = state_31788;
var statearr_31859_31923 = state_31788__$1;
(statearr_31859_31923[(2)] = null);

(statearr_31859_31923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (10))){
var inst_31668 = (state_31788[(13)]);
var inst_31666 = (state_31788[(16)]);
var inst_31676 = cljs.core._nth.call(null,inst_31666,inst_31668);
var inst_31677 = cljs.core.nth.call(null,inst_31676,(0),null);
var inst_31678 = cljs.core.nth.call(null,inst_31676,(1),null);
var state_31788__$1 = (function (){var statearr_31860 = state_31788;
(statearr_31860[(26)] = inst_31677);

return statearr_31860;
})();
if(cljs.core.truth_(inst_31678)){
var statearr_31861_31924 = state_31788__$1;
(statearr_31861_31924[(1)] = (13));

} else {
var statearr_31862_31925 = state_31788__$1;
(statearr_31862_31925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (18))){
var inst_31713 = (state_31788[(2)]);
var state_31788__$1 = state_31788;
var statearr_31863_31926 = state_31788__$1;
(statearr_31863_31926[(2)] = inst_31713);

(statearr_31863_31926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (42))){
var state_31788__$1 = state_31788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31788__$1,(45),dchan);
} else {
if((state_val_31789 === (37))){
var inst_31656 = (state_31788[(9)]);
var inst_31756 = (state_31788[(23)]);
var inst_31747 = (state_31788[(25)]);
var inst_31756__$1 = cljs.core.first.call(null,inst_31747);
var inst_31757 = cljs.core.async.put_BANG_.call(null,inst_31756__$1,inst_31656,done);
var state_31788__$1 = (function (){var statearr_31864 = state_31788;
(statearr_31864[(23)] = inst_31756__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31757)){
var statearr_31865_31927 = state_31788__$1;
(statearr_31865_31927[(1)] = (39));

} else {
var statearr_31866_31928 = state_31788__$1;
(statearr_31866_31928[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31789 === (8))){
var inst_31668 = (state_31788[(13)]);
var inst_31667 = (state_31788[(15)]);
var inst_31670 = (inst_31668 < inst_31667);
var inst_31671 = inst_31670;
var state_31788__$1 = state_31788;
if(cljs.core.truth_(inst_31671)){
var statearr_31867_31929 = state_31788__$1;
(statearr_31867_31929[(1)] = (10));

} else {
var statearr_31868_31930 = state_31788__$1;
(statearr_31868_31930[(1)] = (11));

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
});})(c__30553__auto___31876,cs,m,dchan,dctr,done))
;
return ((function (switch__30399__auto__,c__30553__auto___31876,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30400__auto__ = null;
var cljs$core$async$mult_$_state_machine__30400__auto____0 = (function (){
var statearr_31872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31872[(0)] = cljs$core$async$mult_$_state_machine__30400__auto__);

(statearr_31872[(1)] = (1));

return statearr_31872;
});
var cljs$core$async$mult_$_state_machine__30400__auto____1 = (function (state_31788){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_31788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e31873){if((e31873 instanceof Object)){
var ex__30403__auto__ = e31873;
var statearr_31874_31931 = state_31788;
(statearr_31874_31931[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31932 = state_31788;
state_31788 = G__31932;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30400__auto__ = function(state_31788){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30400__auto____1.call(this,state_31788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30400__auto____0;
cljs$core$async$mult_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30400__auto____1;
return cljs$core$async$mult_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___31876,cs,m,dchan,dctr,done))
})();
var state__30555__auto__ = (function (){var statearr_31875 = f__30554__auto__.call(null);
(statearr_31875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___31876);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___31876,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31933 = [];
var len__29456__auto___31936 = arguments.length;
var i__29457__auto___31937 = (0);
while(true){
if((i__29457__auto___31937 < len__29456__auto___31936)){
args31933.push((arguments[i__29457__auto___31937]));

var G__31938 = (i__29457__auto___31937 + (1));
i__29457__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var G__31935 = args31933.length;
switch (G__31935) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31933.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,ch);
} else {
var m__29045__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,ch);
} else {
var m__29045__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m);
} else {
var m__29045__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,state_map);
} else {
var m__29045__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29044__auto__ = (((m == null))?null:m);
var m__29045__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,m,mode);
} else {
var m__29045__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29463__auto__ = [];
var len__29456__auto___31950 = arguments.length;
var i__29457__auto___31951 = (0);
while(true){
if((i__29457__auto___31951 < len__29456__auto___31950)){
args__29463__auto__.push((arguments[i__29457__auto___31951]));

var G__31952 = (i__29457__auto___31951 + (1));
i__29457__auto___31951 = G__31952;
continue;
} else {
}
break;
}

var argseq__29464__auto__ = ((((3) < args__29463__auto__.length))?(new cljs.core.IndexedSeq(args__29463__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29464__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31944){
var map__31945 = p__31944;
var map__31945__$1 = ((((!((map__31945 == null)))?((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var opts = map__31945__$1;
var statearr_31947_31953 = state;
(statearr_31947_31953[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31945,map__31945__$1,opts){
return (function (val){
var statearr_31948_31954 = state;
(statearr_31948_31954[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31945,map__31945__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31949_31955 = state;
(statearr_31949_31955[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31940){
var G__31941 = cljs.core.first.call(null,seq31940);
var seq31940__$1 = cljs.core.next.call(null,seq31940);
var G__31942 = cljs.core.first.call(null,seq31940__$1);
var seq31940__$2 = cljs.core.next.call(null,seq31940__$1);
var G__31943 = cljs.core.first.call(null,seq31940__$2);
var seq31940__$3 = cljs.core.next.call(null,seq31940__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31941,G__31942,G__31943,seq31940__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32121 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32122){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32122 = meta32122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32123,meta32122__$1){
var self__ = this;
var _32123__$1 = this;
return (new cljs.core.async.t_cljs$core$async32121(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32122__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32123){
var self__ = this;
var _32123__$1 = this;
return self__.meta32122;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32122","meta32122",-101084968,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32121";

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32121");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32121 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32121(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32122){
return (new cljs.core.async.t_cljs$core$async32121(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32122));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32121(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30553__auto___32286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32223){
var state_val_32224 = (state_32223[(1)]);
if((state_val_32224 === (7))){
var inst_32139 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32225_32287 = state_32223__$1;
(statearr_32225_32287[(2)] = inst_32139);

(statearr_32225_32287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (20))){
var inst_32151 = (state_32223[(7)]);
var state_32223__$1 = state_32223;
var statearr_32226_32288 = state_32223__$1;
(statearr_32226_32288[(2)] = inst_32151);

(statearr_32226_32288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (27))){
var state_32223__$1 = state_32223;
var statearr_32227_32289 = state_32223__$1;
(statearr_32227_32289[(2)] = null);

(statearr_32227_32289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (1))){
var inst_32127 = (state_32223[(8)]);
var inst_32127__$1 = calc_state.call(null);
var inst_32129 = (inst_32127__$1 == null);
var inst_32130 = cljs.core.not.call(null,inst_32129);
var state_32223__$1 = (function (){var statearr_32228 = state_32223;
(statearr_32228[(8)] = inst_32127__$1);

return statearr_32228;
})();
if(inst_32130){
var statearr_32229_32290 = state_32223__$1;
(statearr_32229_32290[(1)] = (2));

} else {
var statearr_32230_32291 = state_32223__$1;
(statearr_32230_32291[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (24))){
var inst_32197 = (state_32223[(9)]);
var inst_32183 = (state_32223[(10)]);
var inst_32174 = (state_32223[(11)]);
var inst_32197__$1 = inst_32174.call(null,inst_32183);
var state_32223__$1 = (function (){var statearr_32231 = state_32223;
(statearr_32231[(9)] = inst_32197__$1);

return statearr_32231;
})();
if(cljs.core.truth_(inst_32197__$1)){
var statearr_32232_32292 = state_32223__$1;
(statearr_32232_32292[(1)] = (29));

} else {
var statearr_32233_32293 = state_32223__$1;
(statearr_32233_32293[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (4))){
var inst_32142 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32142)){
var statearr_32234_32294 = state_32223__$1;
(statearr_32234_32294[(1)] = (8));

} else {
var statearr_32235_32295 = state_32223__$1;
(statearr_32235_32295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (15))){
var inst_32168 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32168)){
var statearr_32236_32296 = state_32223__$1;
(statearr_32236_32296[(1)] = (19));

} else {
var statearr_32237_32297 = state_32223__$1;
(statearr_32237_32297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (21))){
var inst_32173 = (state_32223[(12)]);
var inst_32173__$1 = (state_32223[(2)]);
var inst_32174 = cljs.core.get.call(null,inst_32173__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32175 = cljs.core.get.call(null,inst_32173__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32176 = cljs.core.get.call(null,inst_32173__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32223__$1 = (function (){var statearr_32238 = state_32223;
(statearr_32238[(13)] = inst_32175);

(statearr_32238[(12)] = inst_32173__$1);

(statearr_32238[(11)] = inst_32174);

return statearr_32238;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32223__$1,(22),inst_32176);
} else {
if((state_val_32224 === (31))){
var inst_32205 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32205)){
var statearr_32239_32298 = state_32223__$1;
(statearr_32239_32298[(1)] = (32));

} else {
var statearr_32240_32299 = state_32223__$1;
(statearr_32240_32299[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (32))){
var inst_32182 = (state_32223[(14)]);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32223__$1,(35),out,inst_32182);
} else {
if((state_val_32224 === (33))){
var inst_32173 = (state_32223[(12)]);
var inst_32151 = inst_32173;
var state_32223__$1 = (function (){var statearr_32241 = state_32223;
(statearr_32241[(7)] = inst_32151);

return statearr_32241;
})();
var statearr_32242_32300 = state_32223__$1;
(statearr_32242_32300[(2)] = null);

(statearr_32242_32300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (13))){
var inst_32151 = (state_32223[(7)]);
var inst_32158 = inst_32151.cljs$lang$protocol_mask$partition0$;
var inst_32159 = (inst_32158 & (64));
var inst_32160 = inst_32151.cljs$core$ISeq$;
var inst_32161 = (inst_32159) || (inst_32160);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32161)){
var statearr_32243_32301 = state_32223__$1;
(statearr_32243_32301[(1)] = (16));

} else {
var statearr_32244_32302 = state_32223__$1;
(statearr_32244_32302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (22))){
var inst_32182 = (state_32223[(14)]);
var inst_32183 = (state_32223[(10)]);
var inst_32181 = (state_32223[(2)]);
var inst_32182__$1 = cljs.core.nth.call(null,inst_32181,(0),null);
var inst_32183__$1 = cljs.core.nth.call(null,inst_32181,(1),null);
var inst_32184 = (inst_32182__$1 == null);
var inst_32185 = cljs.core._EQ_.call(null,inst_32183__$1,change);
var inst_32186 = (inst_32184) || (inst_32185);
var state_32223__$1 = (function (){var statearr_32245 = state_32223;
(statearr_32245[(14)] = inst_32182__$1);

(statearr_32245[(10)] = inst_32183__$1);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32186)){
var statearr_32246_32303 = state_32223__$1;
(statearr_32246_32303[(1)] = (23));

} else {
var statearr_32247_32304 = state_32223__$1;
(statearr_32247_32304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (36))){
var inst_32173 = (state_32223[(12)]);
var inst_32151 = inst_32173;
var state_32223__$1 = (function (){var statearr_32248 = state_32223;
(statearr_32248[(7)] = inst_32151);

return statearr_32248;
})();
var statearr_32249_32305 = state_32223__$1;
(statearr_32249_32305[(2)] = null);

(statearr_32249_32305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (29))){
var inst_32197 = (state_32223[(9)]);
var state_32223__$1 = state_32223;
var statearr_32250_32306 = state_32223__$1;
(statearr_32250_32306[(2)] = inst_32197);

(statearr_32250_32306[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (6))){
var state_32223__$1 = state_32223;
var statearr_32251_32307 = state_32223__$1;
(statearr_32251_32307[(2)] = false);

(statearr_32251_32307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (28))){
var inst_32193 = (state_32223[(2)]);
var inst_32194 = calc_state.call(null);
var inst_32151 = inst_32194;
var state_32223__$1 = (function (){var statearr_32252 = state_32223;
(statearr_32252[(15)] = inst_32193);

(statearr_32252[(7)] = inst_32151);

return statearr_32252;
})();
var statearr_32253_32308 = state_32223__$1;
(statearr_32253_32308[(2)] = null);

(statearr_32253_32308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (25))){
var inst_32219 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32254_32309 = state_32223__$1;
(statearr_32254_32309[(2)] = inst_32219);

(statearr_32254_32309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (34))){
var inst_32217 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32255_32310 = state_32223__$1;
(statearr_32255_32310[(2)] = inst_32217);

(statearr_32255_32310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (17))){
var state_32223__$1 = state_32223;
var statearr_32256_32311 = state_32223__$1;
(statearr_32256_32311[(2)] = false);

(statearr_32256_32311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (3))){
var state_32223__$1 = state_32223;
var statearr_32257_32312 = state_32223__$1;
(statearr_32257_32312[(2)] = false);

(statearr_32257_32312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (12))){
var inst_32221 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else {
if((state_val_32224 === (2))){
var inst_32127 = (state_32223[(8)]);
var inst_32132 = inst_32127.cljs$lang$protocol_mask$partition0$;
var inst_32133 = (inst_32132 & (64));
var inst_32134 = inst_32127.cljs$core$ISeq$;
var inst_32135 = (inst_32133) || (inst_32134);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32135)){
var statearr_32258_32313 = state_32223__$1;
(statearr_32258_32313[(1)] = (5));

} else {
var statearr_32259_32314 = state_32223__$1;
(statearr_32259_32314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (23))){
var inst_32182 = (state_32223[(14)]);
var inst_32188 = (inst_32182 == null);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32188)){
var statearr_32260_32315 = state_32223__$1;
(statearr_32260_32315[(1)] = (26));

} else {
var statearr_32261_32316 = state_32223__$1;
(statearr_32261_32316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (35))){
var inst_32208 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32208)){
var statearr_32262_32317 = state_32223__$1;
(statearr_32262_32317[(1)] = (36));

} else {
var statearr_32263_32318 = state_32223__$1;
(statearr_32263_32318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (19))){
var inst_32151 = (state_32223[(7)]);
var inst_32170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32151);
var state_32223__$1 = state_32223;
var statearr_32264_32319 = state_32223__$1;
(statearr_32264_32319[(2)] = inst_32170);

(statearr_32264_32319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (11))){
var inst_32151 = (state_32223[(7)]);
var inst_32155 = (inst_32151 == null);
var inst_32156 = cljs.core.not.call(null,inst_32155);
var state_32223__$1 = state_32223;
if(inst_32156){
var statearr_32265_32320 = state_32223__$1;
(statearr_32265_32320[(1)] = (13));

} else {
var statearr_32266_32321 = state_32223__$1;
(statearr_32266_32321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (9))){
var inst_32127 = (state_32223[(8)]);
var state_32223__$1 = state_32223;
var statearr_32267_32322 = state_32223__$1;
(statearr_32267_32322[(2)] = inst_32127);

(statearr_32267_32322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (5))){
var state_32223__$1 = state_32223;
var statearr_32268_32323 = state_32223__$1;
(statearr_32268_32323[(2)] = true);

(statearr_32268_32323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (14))){
var state_32223__$1 = state_32223;
var statearr_32269_32324 = state_32223__$1;
(statearr_32269_32324[(2)] = false);

(statearr_32269_32324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (26))){
var inst_32183 = (state_32223[(10)]);
var inst_32190 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32183);
var state_32223__$1 = state_32223;
var statearr_32270_32325 = state_32223__$1;
(statearr_32270_32325[(2)] = inst_32190);

(statearr_32270_32325[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (16))){
var state_32223__$1 = state_32223;
var statearr_32271_32326 = state_32223__$1;
(statearr_32271_32326[(2)] = true);

(statearr_32271_32326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (38))){
var inst_32213 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32272_32327 = state_32223__$1;
(statearr_32272_32327[(2)] = inst_32213);

(statearr_32272_32327[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (30))){
var inst_32175 = (state_32223[(13)]);
var inst_32183 = (state_32223[(10)]);
var inst_32174 = (state_32223[(11)]);
var inst_32200 = cljs.core.empty_QMARK_.call(null,inst_32174);
var inst_32201 = inst_32175.call(null,inst_32183);
var inst_32202 = cljs.core.not.call(null,inst_32201);
var inst_32203 = (inst_32200) && (inst_32202);
var state_32223__$1 = state_32223;
var statearr_32273_32328 = state_32223__$1;
(statearr_32273_32328[(2)] = inst_32203);

(statearr_32273_32328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (10))){
var inst_32127 = (state_32223[(8)]);
var inst_32147 = (state_32223[(2)]);
var inst_32148 = cljs.core.get.call(null,inst_32147,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32149 = cljs.core.get.call(null,inst_32147,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32150 = cljs.core.get.call(null,inst_32147,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32151 = inst_32127;
var state_32223__$1 = (function (){var statearr_32274 = state_32223;
(statearr_32274[(16)] = inst_32149);

(statearr_32274[(7)] = inst_32151);

(statearr_32274[(17)] = inst_32148);

(statearr_32274[(18)] = inst_32150);

return statearr_32274;
})();
var statearr_32275_32329 = state_32223__$1;
(statearr_32275_32329[(2)] = null);

(statearr_32275_32329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (18))){
var inst_32165 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32276_32330 = state_32223__$1;
(statearr_32276_32330[(2)] = inst_32165);

(statearr_32276_32330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (37))){
var state_32223__$1 = state_32223;
var statearr_32277_32331 = state_32223__$1;
(statearr_32277_32331[(2)] = null);

(statearr_32277_32331[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (8))){
var inst_32127 = (state_32223[(8)]);
var inst_32144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32127);
var state_32223__$1 = state_32223;
var statearr_32278_32332 = state_32223__$1;
(statearr_32278_32332[(2)] = inst_32144);

(statearr_32278_32332[(1)] = (10));


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
});})(c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30399__auto__,c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30400__auto__ = null;
var cljs$core$async$mix_$_state_machine__30400__auto____0 = (function (){
var statearr_32282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32282[(0)] = cljs$core$async$mix_$_state_machine__30400__auto__);

(statearr_32282[(1)] = (1));

return statearr_32282;
});
var cljs$core$async$mix_$_state_machine__30400__auto____1 = (function (state_32223){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32283){if((e32283 instanceof Object)){
var ex__30403__auto__ = e32283;
var statearr_32284_32333 = state_32223;
(statearr_32284_32333[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_32223;
state_32223 = G__32334;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30400__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30400__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30400__auto____0;
cljs$core$async$mix_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30400__auto____1;
return cljs$core$async$mix_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30555__auto__ = (function (){var statearr_32285 = f__30554__auto__.call(null);
(statearr_32285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32286);

return statearr_32285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32286,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29044__auto__ = (((p == null))?null:p);
var m__29045__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29045__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29044__auto__ = (((p == null))?null:p);
var m__29045__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,p,v,ch);
} else {
var m__29045__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32335 = [];
var len__29456__auto___32338 = arguments.length;
var i__29457__auto___32339 = (0);
while(true){
if((i__29457__auto___32339 < len__29456__auto___32338)){
args32335.push((arguments[i__29457__auto___32339]));

var G__32340 = (i__29457__auto___32339 + (1));
i__29457__auto___32339 = G__32340;
continue;
} else {
}
break;
}

var G__32337 = args32335.length;
switch (G__32337) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32335.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29044__auto__ = (((p == null))?null:p);
var m__29045__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,p);
} else {
var m__29045__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29044__auto__ = (((p == null))?null:p);
var m__29045__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29044__auto__)]);
if(!((m__29045__auto__ == null))){
return m__29045__auto__.call(null,p,v);
} else {
var m__29045__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29045__auto____$1 == null))){
return m__29045__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32343 = [];
var len__29456__auto___32468 = arguments.length;
var i__29457__auto___32469 = (0);
while(true){
if((i__29457__auto___32469 < len__29456__auto___32468)){
args32343.push((arguments[i__29457__auto___32469]));

var G__32470 = (i__29457__auto___32469 + (1));
i__29457__auto___32469 = G__32470;
continue;
} else {
}
break;
}

var G__32345 = args32343.length;
switch (G__32345) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32343.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28381__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28381__auto__,mults){
return (function (p1__32342_SHARP_){
if(cljs.core.truth_(p1__32342_SHARP_.call(null,topic))){
return p1__32342_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32342_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28381__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32346 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32347){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32347 = meta32347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32348,meta32347__$1){
var self__ = this;
var _32348__$1 = this;
return (new cljs.core.async.t_cljs$core$async32346(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32347__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32348){
var self__ = this;
var _32348__$1 = this;
return self__.meta32347;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32347","meta32347",1075255117,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32346";

cljs.core.async.t_cljs$core$async32346.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32346");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32346 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32346(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32347){
return (new cljs.core.async.t_cljs$core$async32346(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32347));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32346(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30553__auto___32472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32472,mults,ensure_mult,p){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32472,mults,ensure_mult,p){
return (function (state_32420){
var state_val_32421 = (state_32420[(1)]);
if((state_val_32421 === (7))){
var inst_32416 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32422_32473 = state_32420__$1;
(statearr_32422_32473[(2)] = inst_32416);

(statearr_32422_32473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (20))){
var state_32420__$1 = state_32420;
var statearr_32423_32474 = state_32420__$1;
(statearr_32423_32474[(2)] = null);

(statearr_32423_32474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (1))){
var state_32420__$1 = state_32420;
var statearr_32424_32475 = state_32420__$1;
(statearr_32424_32475[(2)] = null);

(statearr_32424_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (24))){
var inst_32399 = (state_32420[(7)]);
var inst_32408 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32399);
var state_32420__$1 = state_32420;
var statearr_32425_32476 = state_32420__$1;
(statearr_32425_32476[(2)] = inst_32408);

(statearr_32425_32476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (4))){
var inst_32351 = (state_32420[(8)]);
var inst_32351__$1 = (state_32420[(2)]);
var inst_32352 = (inst_32351__$1 == null);
var state_32420__$1 = (function (){var statearr_32426 = state_32420;
(statearr_32426[(8)] = inst_32351__$1);

return statearr_32426;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32427_32477 = state_32420__$1;
(statearr_32427_32477[(1)] = (5));

} else {
var statearr_32428_32478 = state_32420__$1;
(statearr_32428_32478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (15))){
var inst_32393 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32429_32479 = state_32420__$1;
(statearr_32429_32479[(2)] = inst_32393);

(statearr_32429_32479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (21))){
var inst_32413 = (state_32420[(2)]);
var state_32420__$1 = (function (){var statearr_32430 = state_32420;
(statearr_32430[(9)] = inst_32413);

return statearr_32430;
})();
var statearr_32431_32480 = state_32420__$1;
(statearr_32431_32480[(2)] = null);

(statearr_32431_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (13))){
var inst_32375 = (state_32420[(10)]);
var inst_32377 = cljs.core.chunked_seq_QMARK_.call(null,inst_32375);
var state_32420__$1 = state_32420;
if(inst_32377){
var statearr_32432_32481 = state_32420__$1;
(statearr_32432_32481[(1)] = (16));

} else {
var statearr_32433_32482 = state_32420__$1;
(statearr_32433_32482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (22))){
var inst_32405 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32405)){
var statearr_32434_32483 = state_32420__$1;
(statearr_32434_32483[(1)] = (23));

} else {
var statearr_32435_32484 = state_32420__$1;
(statearr_32435_32484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (6))){
var inst_32401 = (state_32420[(11)]);
var inst_32399 = (state_32420[(7)]);
var inst_32351 = (state_32420[(8)]);
var inst_32399__$1 = topic_fn.call(null,inst_32351);
var inst_32400 = cljs.core.deref.call(null,mults);
var inst_32401__$1 = cljs.core.get.call(null,inst_32400,inst_32399__$1);
var state_32420__$1 = (function (){var statearr_32436 = state_32420;
(statearr_32436[(11)] = inst_32401__$1);

(statearr_32436[(7)] = inst_32399__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32401__$1)){
var statearr_32437_32485 = state_32420__$1;
(statearr_32437_32485[(1)] = (19));

} else {
var statearr_32438_32486 = state_32420__$1;
(statearr_32438_32486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (25))){
var inst_32410 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32439_32487 = state_32420__$1;
(statearr_32439_32487[(2)] = inst_32410);

(statearr_32439_32487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (17))){
var inst_32375 = (state_32420[(10)]);
var inst_32384 = cljs.core.first.call(null,inst_32375);
var inst_32385 = cljs.core.async.muxch_STAR_.call(null,inst_32384);
var inst_32386 = cljs.core.async.close_BANG_.call(null,inst_32385);
var inst_32387 = cljs.core.next.call(null,inst_32375);
var inst_32361 = inst_32387;
var inst_32362 = null;
var inst_32363 = (0);
var inst_32364 = (0);
var state_32420__$1 = (function (){var statearr_32440 = state_32420;
(statearr_32440[(12)] = inst_32386);

(statearr_32440[(13)] = inst_32363);

(statearr_32440[(14)] = inst_32364);

(statearr_32440[(15)] = inst_32361);

(statearr_32440[(16)] = inst_32362);

return statearr_32440;
})();
var statearr_32441_32488 = state_32420__$1;
(statearr_32441_32488[(2)] = null);

(statearr_32441_32488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (3))){
var inst_32418 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32420__$1,inst_32418);
} else {
if((state_val_32421 === (12))){
var inst_32395 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32442_32489 = state_32420__$1;
(statearr_32442_32489[(2)] = inst_32395);

(statearr_32442_32489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (2))){
var state_32420__$1 = state_32420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32420__$1,(4),ch);
} else {
if((state_val_32421 === (23))){
var state_32420__$1 = state_32420;
var statearr_32443_32490 = state_32420__$1;
(statearr_32443_32490[(2)] = null);

(statearr_32443_32490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (19))){
var inst_32401 = (state_32420[(11)]);
var inst_32351 = (state_32420[(8)]);
var inst_32403 = cljs.core.async.muxch_STAR_.call(null,inst_32401);
var state_32420__$1 = state_32420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32420__$1,(22),inst_32403,inst_32351);
} else {
if((state_val_32421 === (11))){
var inst_32361 = (state_32420[(15)]);
var inst_32375 = (state_32420[(10)]);
var inst_32375__$1 = cljs.core.seq.call(null,inst_32361);
var state_32420__$1 = (function (){var statearr_32444 = state_32420;
(statearr_32444[(10)] = inst_32375__$1);

return statearr_32444;
})();
if(inst_32375__$1){
var statearr_32445_32491 = state_32420__$1;
(statearr_32445_32491[(1)] = (13));

} else {
var statearr_32446_32492 = state_32420__$1;
(statearr_32446_32492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (9))){
var inst_32397 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32447_32493 = state_32420__$1;
(statearr_32447_32493[(2)] = inst_32397);

(statearr_32447_32493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (5))){
var inst_32358 = cljs.core.deref.call(null,mults);
var inst_32359 = cljs.core.vals.call(null,inst_32358);
var inst_32360 = cljs.core.seq.call(null,inst_32359);
var inst_32361 = inst_32360;
var inst_32362 = null;
var inst_32363 = (0);
var inst_32364 = (0);
var state_32420__$1 = (function (){var statearr_32448 = state_32420;
(statearr_32448[(13)] = inst_32363);

(statearr_32448[(14)] = inst_32364);

(statearr_32448[(15)] = inst_32361);

(statearr_32448[(16)] = inst_32362);

return statearr_32448;
})();
var statearr_32449_32494 = state_32420__$1;
(statearr_32449_32494[(2)] = null);

(statearr_32449_32494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (14))){
var state_32420__$1 = state_32420;
var statearr_32453_32495 = state_32420__$1;
(statearr_32453_32495[(2)] = null);

(statearr_32453_32495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (16))){
var inst_32375 = (state_32420[(10)]);
var inst_32379 = cljs.core.chunk_first.call(null,inst_32375);
var inst_32380 = cljs.core.chunk_rest.call(null,inst_32375);
var inst_32381 = cljs.core.count.call(null,inst_32379);
var inst_32361 = inst_32380;
var inst_32362 = inst_32379;
var inst_32363 = inst_32381;
var inst_32364 = (0);
var state_32420__$1 = (function (){var statearr_32454 = state_32420;
(statearr_32454[(13)] = inst_32363);

(statearr_32454[(14)] = inst_32364);

(statearr_32454[(15)] = inst_32361);

(statearr_32454[(16)] = inst_32362);

return statearr_32454;
})();
var statearr_32455_32496 = state_32420__$1;
(statearr_32455_32496[(2)] = null);

(statearr_32455_32496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (10))){
var inst_32363 = (state_32420[(13)]);
var inst_32364 = (state_32420[(14)]);
var inst_32361 = (state_32420[(15)]);
var inst_32362 = (state_32420[(16)]);
var inst_32369 = cljs.core._nth.call(null,inst_32362,inst_32364);
var inst_32370 = cljs.core.async.muxch_STAR_.call(null,inst_32369);
var inst_32371 = cljs.core.async.close_BANG_.call(null,inst_32370);
var inst_32372 = (inst_32364 + (1));
var tmp32450 = inst_32363;
var tmp32451 = inst_32361;
var tmp32452 = inst_32362;
var inst_32361__$1 = tmp32451;
var inst_32362__$1 = tmp32452;
var inst_32363__$1 = tmp32450;
var inst_32364__$1 = inst_32372;
var state_32420__$1 = (function (){var statearr_32456 = state_32420;
(statearr_32456[(13)] = inst_32363__$1);

(statearr_32456[(14)] = inst_32364__$1);

(statearr_32456[(15)] = inst_32361__$1);

(statearr_32456[(17)] = inst_32371);

(statearr_32456[(16)] = inst_32362__$1);

return statearr_32456;
})();
var statearr_32457_32497 = state_32420__$1;
(statearr_32457_32497[(2)] = null);

(statearr_32457_32497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (18))){
var inst_32390 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32458_32498 = state_32420__$1;
(statearr_32458_32498[(2)] = inst_32390);

(statearr_32458_32498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (8))){
var inst_32363 = (state_32420[(13)]);
var inst_32364 = (state_32420[(14)]);
var inst_32366 = (inst_32364 < inst_32363);
var inst_32367 = inst_32366;
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32367)){
var statearr_32459_32499 = state_32420__$1;
(statearr_32459_32499[(1)] = (10));

} else {
var statearr_32460_32500 = state_32420__$1;
(statearr_32460_32500[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__30553__auto___32472,mults,ensure_mult,p))
;
return ((function (switch__30399__auto__,c__30553__auto___32472,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_32464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32464[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_32464[(1)] = (1));

return statearr_32464;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_32420){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32465){if((e32465 instanceof Object)){
var ex__30403__auto__ = e32465;
var statearr_32466_32501 = state_32420;
(statearr_32466_32501[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32502 = state_32420;
state_32420 = G__32502;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_32420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_32420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32472,mults,ensure_mult,p))
})();
var state__30555__auto__ = (function (){var statearr_32467 = f__30554__auto__.call(null);
(statearr_32467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32472);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32472,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32503 = [];
var len__29456__auto___32506 = arguments.length;
var i__29457__auto___32507 = (0);
while(true){
if((i__29457__auto___32507 < len__29456__auto___32506)){
args32503.push((arguments[i__29457__auto___32507]));

var G__32508 = (i__29457__auto___32507 + (1));
i__29457__auto___32507 = G__32508;
continue;
} else {
}
break;
}

var G__32505 = args32503.length;
switch (G__32505) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32503.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32510 = [];
var len__29456__auto___32513 = arguments.length;
var i__29457__auto___32514 = (0);
while(true){
if((i__29457__auto___32514 < len__29456__auto___32513)){
args32510.push((arguments[i__29457__auto___32514]));

var G__32515 = (i__29457__auto___32514 + (1));
i__29457__auto___32514 = G__32515;
continue;
} else {
}
break;
}

var G__32512 = args32510.length;
switch (G__32512) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32510.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32517 = [];
var len__29456__auto___32588 = arguments.length;
var i__29457__auto___32589 = (0);
while(true){
if((i__29457__auto___32589 < len__29456__auto___32588)){
args32517.push((arguments[i__29457__auto___32589]));

var G__32590 = (i__29457__auto___32589 + (1));
i__29457__auto___32589 = G__32590;
continue;
} else {
}
break;
}

var G__32519 = args32517.length;
switch (G__32519) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32517.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30553__auto___32592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32558){
var state_val_32559 = (state_32558[(1)]);
if((state_val_32559 === (7))){
var state_32558__$1 = state_32558;
var statearr_32560_32593 = state_32558__$1;
(statearr_32560_32593[(2)] = null);

(statearr_32560_32593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (1))){
var state_32558__$1 = state_32558;
var statearr_32561_32594 = state_32558__$1;
(statearr_32561_32594[(2)] = null);

(statearr_32561_32594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (4))){
var inst_32522 = (state_32558[(7)]);
var inst_32524 = (inst_32522 < cnt);
var state_32558__$1 = state_32558;
if(cljs.core.truth_(inst_32524)){
var statearr_32562_32595 = state_32558__$1;
(statearr_32562_32595[(1)] = (6));

} else {
var statearr_32563_32596 = state_32558__$1;
(statearr_32563_32596[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (15))){
var inst_32554 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32564_32597 = state_32558__$1;
(statearr_32564_32597[(2)] = inst_32554);

(statearr_32564_32597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (13))){
var inst_32547 = cljs.core.async.close_BANG_.call(null,out);
var state_32558__$1 = state_32558;
var statearr_32565_32598 = state_32558__$1;
(statearr_32565_32598[(2)] = inst_32547);

(statearr_32565_32598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (6))){
var state_32558__$1 = state_32558;
var statearr_32566_32599 = state_32558__$1;
(statearr_32566_32599[(2)] = null);

(statearr_32566_32599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (3))){
var inst_32556 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32558__$1,inst_32556);
} else {
if((state_val_32559 === (12))){
var inst_32544 = (state_32558[(8)]);
var inst_32544__$1 = (state_32558[(2)]);
var inst_32545 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32544__$1);
var state_32558__$1 = (function (){var statearr_32567 = state_32558;
(statearr_32567[(8)] = inst_32544__$1);

return statearr_32567;
})();
if(cljs.core.truth_(inst_32545)){
var statearr_32568_32600 = state_32558__$1;
(statearr_32568_32600[(1)] = (13));

} else {
var statearr_32569_32601 = state_32558__$1;
(statearr_32569_32601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (2))){
var inst_32521 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32522 = (0);
var state_32558__$1 = (function (){var statearr_32570 = state_32558;
(statearr_32570[(9)] = inst_32521);

(statearr_32570[(7)] = inst_32522);

return statearr_32570;
})();
var statearr_32571_32602 = state_32558__$1;
(statearr_32571_32602[(2)] = null);

(statearr_32571_32602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (11))){
var inst_32522 = (state_32558[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32558,(10),Object,null,(9));
var inst_32531 = chs__$1.call(null,inst_32522);
var inst_32532 = done.call(null,inst_32522);
var inst_32533 = cljs.core.async.take_BANG_.call(null,inst_32531,inst_32532);
var state_32558__$1 = state_32558;
var statearr_32572_32603 = state_32558__$1;
(statearr_32572_32603[(2)] = inst_32533);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (9))){
var inst_32522 = (state_32558[(7)]);
var inst_32535 = (state_32558[(2)]);
var inst_32536 = (inst_32522 + (1));
var inst_32522__$1 = inst_32536;
var state_32558__$1 = (function (){var statearr_32573 = state_32558;
(statearr_32573[(7)] = inst_32522__$1);

(statearr_32573[(10)] = inst_32535);

return statearr_32573;
})();
var statearr_32574_32604 = state_32558__$1;
(statearr_32574_32604[(2)] = null);

(statearr_32574_32604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (5))){
var inst_32542 = (state_32558[(2)]);
var state_32558__$1 = (function (){var statearr_32575 = state_32558;
(statearr_32575[(11)] = inst_32542);

return statearr_32575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32558__$1,(12),dchan);
} else {
if((state_val_32559 === (14))){
var inst_32544 = (state_32558[(8)]);
var inst_32549 = cljs.core.apply.call(null,f,inst_32544);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32558__$1,(16),out,inst_32549);
} else {
if((state_val_32559 === (16))){
var inst_32551 = (state_32558[(2)]);
var state_32558__$1 = (function (){var statearr_32576 = state_32558;
(statearr_32576[(12)] = inst_32551);

return statearr_32576;
})();
var statearr_32577_32605 = state_32558__$1;
(statearr_32577_32605[(2)] = null);

(statearr_32577_32605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (10))){
var inst_32526 = (state_32558[(2)]);
var inst_32527 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32558__$1 = (function (){var statearr_32578 = state_32558;
(statearr_32578[(13)] = inst_32526);

return statearr_32578;
})();
var statearr_32579_32606 = state_32558__$1;
(statearr_32579_32606[(2)] = inst_32527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (8))){
var inst_32540 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32580_32607 = state_32558__$1;
(statearr_32580_32607[(2)] = inst_32540);

(statearr_32580_32607[(1)] = (5));


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
});})(c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30399__auto__,c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_32584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32584[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_32584[(1)] = (1));

return statearr_32584;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_32558){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32585){if((e32585 instanceof Object)){
var ex__30403__auto__ = e32585;
var statearr_32586_32608 = state_32558;
(statearr_32586_32608[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32609 = state_32558;
state_32558 = G__32609;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_32558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_32558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30555__auto__ = (function (){var statearr_32587 = f__30554__auto__.call(null);
(statearr_32587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32592);

return statearr_32587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32592,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32611 = [];
var len__29456__auto___32669 = arguments.length;
var i__29457__auto___32670 = (0);
while(true){
if((i__29457__auto___32670 < len__29456__auto___32669)){
args32611.push((arguments[i__29457__auto___32670]));

var G__32671 = (i__29457__auto___32670 + (1));
i__29457__auto___32670 = G__32671;
continue;
} else {
}
break;
}

var G__32613 = args32611.length;
switch (G__32613) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32611.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___32673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32673,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32673,out){
return (function (state_32645){
var state_val_32646 = (state_32645[(1)]);
if((state_val_32646 === (7))){
var inst_32624 = (state_32645[(7)]);
var inst_32625 = (state_32645[(8)]);
var inst_32624__$1 = (state_32645[(2)]);
var inst_32625__$1 = cljs.core.nth.call(null,inst_32624__$1,(0),null);
var inst_32626 = cljs.core.nth.call(null,inst_32624__$1,(1),null);
var inst_32627 = (inst_32625__$1 == null);
var state_32645__$1 = (function (){var statearr_32647 = state_32645;
(statearr_32647[(9)] = inst_32626);

(statearr_32647[(7)] = inst_32624__$1);

(statearr_32647[(8)] = inst_32625__$1);

return statearr_32647;
})();
if(cljs.core.truth_(inst_32627)){
var statearr_32648_32674 = state_32645__$1;
(statearr_32648_32674[(1)] = (8));

} else {
var statearr_32649_32675 = state_32645__$1;
(statearr_32649_32675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (1))){
var inst_32614 = cljs.core.vec.call(null,chs);
var inst_32615 = inst_32614;
var state_32645__$1 = (function (){var statearr_32650 = state_32645;
(statearr_32650[(10)] = inst_32615);

return statearr_32650;
})();
var statearr_32651_32676 = state_32645__$1;
(statearr_32651_32676[(2)] = null);

(statearr_32651_32676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (4))){
var inst_32615 = (state_32645[(10)]);
var state_32645__$1 = state_32645;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32645__$1,(7),inst_32615);
} else {
if((state_val_32646 === (6))){
var inst_32641 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32652_32677 = state_32645__$1;
(statearr_32652_32677[(2)] = inst_32641);

(statearr_32652_32677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (3))){
var inst_32643 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32645__$1,inst_32643);
} else {
if((state_val_32646 === (2))){
var inst_32615 = (state_32645[(10)]);
var inst_32617 = cljs.core.count.call(null,inst_32615);
var inst_32618 = (inst_32617 > (0));
var state_32645__$1 = state_32645;
if(cljs.core.truth_(inst_32618)){
var statearr_32654_32678 = state_32645__$1;
(statearr_32654_32678[(1)] = (4));

} else {
var statearr_32655_32679 = state_32645__$1;
(statearr_32655_32679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (11))){
var inst_32615 = (state_32645[(10)]);
var inst_32634 = (state_32645[(2)]);
var tmp32653 = inst_32615;
var inst_32615__$1 = tmp32653;
var state_32645__$1 = (function (){var statearr_32656 = state_32645;
(statearr_32656[(10)] = inst_32615__$1);

(statearr_32656[(11)] = inst_32634);

return statearr_32656;
})();
var statearr_32657_32680 = state_32645__$1;
(statearr_32657_32680[(2)] = null);

(statearr_32657_32680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (9))){
var inst_32625 = (state_32645[(8)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32645__$1,(11),out,inst_32625);
} else {
if((state_val_32646 === (5))){
var inst_32639 = cljs.core.async.close_BANG_.call(null,out);
var state_32645__$1 = state_32645;
var statearr_32658_32681 = state_32645__$1;
(statearr_32658_32681[(2)] = inst_32639);

(statearr_32658_32681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (10))){
var inst_32637 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32659_32682 = state_32645__$1;
(statearr_32659_32682[(2)] = inst_32637);

(statearr_32659_32682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (8))){
var inst_32626 = (state_32645[(9)]);
var inst_32624 = (state_32645[(7)]);
var inst_32615 = (state_32645[(10)]);
var inst_32625 = (state_32645[(8)]);
var inst_32629 = (function (){var cs = inst_32615;
var vec__32620 = inst_32624;
var v = inst_32625;
var c = inst_32626;
return ((function (cs,vec__32620,v,c,inst_32626,inst_32624,inst_32615,inst_32625,state_val_32646,c__30553__auto___32673,out){
return (function (p1__32610_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32610_SHARP_);
});
;})(cs,vec__32620,v,c,inst_32626,inst_32624,inst_32615,inst_32625,state_val_32646,c__30553__auto___32673,out))
})();
var inst_32630 = cljs.core.filterv.call(null,inst_32629,inst_32615);
var inst_32615__$1 = inst_32630;
var state_32645__$1 = (function (){var statearr_32660 = state_32645;
(statearr_32660[(10)] = inst_32615__$1);

return statearr_32660;
})();
var statearr_32661_32683 = state_32645__$1;
(statearr_32661_32683[(2)] = null);

(statearr_32661_32683[(1)] = (2));


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
});})(c__30553__auto___32673,out))
;
return ((function (switch__30399__auto__,c__30553__auto___32673,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_32665 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32665[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_32665[(1)] = (1));

return statearr_32665;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_32645){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32666){if((e32666 instanceof Object)){
var ex__30403__auto__ = e32666;
var statearr_32667_32684 = state_32645;
(statearr_32667_32684[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32685 = state_32645;
state_32645 = G__32685;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32673,out))
})();
var state__30555__auto__ = (function (){var statearr_32668 = f__30554__auto__.call(null);
(statearr_32668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32673);

return statearr_32668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32673,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32686 = [];
var len__29456__auto___32735 = arguments.length;
var i__29457__auto___32736 = (0);
while(true){
if((i__29457__auto___32736 < len__29456__auto___32735)){
args32686.push((arguments[i__29457__auto___32736]));

var G__32737 = (i__29457__auto___32736 + (1));
i__29457__auto___32736 = G__32737;
continue;
} else {
}
break;
}

var G__32688 = args32686.length;
switch (G__32688) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32686.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___32739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32739,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32739,out){
return (function (state_32712){
var state_val_32713 = (state_32712[(1)]);
if((state_val_32713 === (7))){
var inst_32694 = (state_32712[(7)]);
var inst_32694__$1 = (state_32712[(2)]);
var inst_32695 = (inst_32694__$1 == null);
var inst_32696 = cljs.core.not.call(null,inst_32695);
var state_32712__$1 = (function (){var statearr_32714 = state_32712;
(statearr_32714[(7)] = inst_32694__$1);

return statearr_32714;
})();
if(inst_32696){
var statearr_32715_32740 = state_32712__$1;
(statearr_32715_32740[(1)] = (8));

} else {
var statearr_32716_32741 = state_32712__$1;
(statearr_32716_32741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (1))){
var inst_32689 = (0);
var state_32712__$1 = (function (){var statearr_32717 = state_32712;
(statearr_32717[(8)] = inst_32689);

return statearr_32717;
})();
var statearr_32718_32742 = state_32712__$1;
(statearr_32718_32742[(2)] = null);

(statearr_32718_32742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (4))){
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32712__$1,(7),ch);
} else {
if((state_val_32713 === (6))){
var inst_32707 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32719_32743 = state_32712__$1;
(statearr_32719_32743[(2)] = inst_32707);

(statearr_32719_32743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (3))){
var inst_32709 = (state_32712[(2)]);
var inst_32710 = cljs.core.async.close_BANG_.call(null,out);
var state_32712__$1 = (function (){var statearr_32720 = state_32712;
(statearr_32720[(9)] = inst_32709);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32712__$1,inst_32710);
} else {
if((state_val_32713 === (2))){
var inst_32689 = (state_32712[(8)]);
var inst_32691 = (inst_32689 < n);
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32691)){
var statearr_32721_32744 = state_32712__$1;
(statearr_32721_32744[(1)] = (4));

} else {
var statearr_32722_32745 = state_32712__$1;
(statearr_32722_32745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (11))){
var inst_32689 = (state_32712[(8)]);
var inst_32699 = (state_32712[(2)]);
var inst_32700 = (inst_32689 + (1));
var inst_32689__$1 = inst_32700;
var state_32712__$1 = (function (){var statearr_32723 = state_32712;
(statearr_32723[(8)] = inst_32689__$1);

(statearr_32723[(10)] = inst_32699);

return statearr_32723;
})();
var statearr_32724_32746 = state_32712__$1;
(statearr_32724_32746[(2)] = null);

(statearr_32724_32746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (9))){
var state_32712__$1 = state_32712;
var statearr_32725_32747 = state_32712__$1;
(statearr_32725_32747[(2)] = null);

(statearr_32725_32747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (5))){
var state_32712__$1 = state_32712;
var statearr_32726_32748 = state_32712__$1;
(statearr_32726_32748[(2)] = null);

(statearr_32726_32748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (10))){
var inst_32704 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32727_32749 = state_32712__$1;
(statearr_32727_32749[(2)] = inst_32704);

(statearr_32727_32749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (8))){
var inst_32694 = (state_32712[(7)]);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32712__$1,(11),out,inst_32694);
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
});})(c__30553__auto___32739,out))
;
return ((function (switch__30399__auto__,c__30553__auto___32739,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32731[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_32712){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32732){if((e32732 instanceof Object)){
var ex__30403__auto__ = e32732;
var statearr_32733_32750 = state_32712;
(statearr_32733_32750[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32751 = state_32712;
state_32712 = G__32751;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_32712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_32712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32739,out))
})();
var state__30555__auto__ = (function (){var statearr_32734 = f__30554__auto__.call(null);
(statearr_32734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32739);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32739,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32759 = (function (map_LT_,f,ch,meta32760){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32760 = meta32760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32761,meta32760__$1){
var self__ = this;
var _32761__$1 = this;
return (new cljs.core.async.t_cljs$core$async32759(self__.map_LT_,self__.f,self__.ch,meta32760__$1));
});

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32761){
var self__ = this;
var _32761__$1 = this;
return self__.meta32760;
});

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32762 = (function (map_LT_,f,ch,meta32760,_,fn1,meta32763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32760 = meta32760;
this._ = _;
this.fn1 = fn1;
this.meta32763 = meta32763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32764,meta32763__$1){
var self__ = this;
var _32764__$1 = this;
return (new cljs.core.async.t_cljs$core$async32762(self__.map_LT_,self__.f,self__.ch,self__.meta32760,self__._,self__.fn1,meta32763__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32764){
var self__ = this;
var _32764__$1 = this;
return self__.meta32763;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32752_SHARP_){
return f1.call(null,(((p1__32752_SHARP_ == null))?null:self__.f.call(null,p1__32752_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32760","meta32760",-216632645,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32759","cljs.core.async/t_cljs$core$async32759",-858223658,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32763","meta32763",-566140623,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32762";

cljs.core.async.t_cljs$core$async32762.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32762");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32762 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32762(map_LT___$1,f__$1,ch__$1,meta32760__$1,___$2,fn1__$1,meta32763){
return (new cljs.core.async.t_cljs$core$async32762(map_LT___$1,f__$1,ch__$1,meta32760__$1,___$2,fn1__$1,meta32763));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32762(self__.map_LT_,self__.f,self__.ch,self__.meta32760,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28369__auto__ = ret;
if(cljs.core.truth_(and__28369__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28369__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32760","meta32760",-216632645,null)], null);
});

cljs.core.async.t_cljs$core$async32759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32759";

cljs.core.async.t_cljs$core$async32759.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32759");
});

cljs.core.async.__GT_t_cljs$core$async32759 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32759(map_LT___$1,f__$1,ch__$1,meta32760){
return (new cljs.core.async.t_cljs$core$async32759(map_LT___$1,f__$1,ch__$1,meta32760));
});

}

return (new cljs.core.async.t_cljs$core$async32759(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32768 = (function (map_GT_,f,ch,meta32769){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32769 = meta32769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32770,meta32769__$1){
var self__ = this;
var _32770__$1 = this;
return (new cljs.core.async.t_cljs$core$async32768(self__.map_GT_,self__.f,self__.ch,meta32769__$1));
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32770){
var self__ = this;
var _32770__$1 = this;
return self__.meta32769;
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32769","meta32769",1958057728,null)], null);
});

cljs.core.async.t_cljs$core$async32768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32768";

cljs.core.async.t_cljs$core$async32768.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32768");
});

cljs.core.async.__GT_t_cljs$core$async32768 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32768(map_GT___$1,f__$1,ch__$1,meta32769){
return (new cljs.core.async.t_cljs$core$async32768(map_GT___$1,f__$1,ch__$1,meta32769));
});

}

return (new cljs.core.async.t_cljs$core$async32768(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32774 = (function (filter_GT_,p,ch,meta32775){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32775 = meta32775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32776,meta32775__$1){
var self__ = this;
var _32776__$1 = this;
return (new cljs.core.async.t_cljs$core$async32774(self__.filter_GT_,self__.p,self__.ch,meta32775__$1));
});

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32776){
var self__ = this;
var _32776__$1 = this;
return self__.meta32775;
});

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32775","meta32775",-1597468622,null)], null);
});

cljs.core.async.t_cljs$core$async32774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32774";

cljs.core.async.t_cljs$core$async32774.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.core.async/t_cljs$core$async32774");
});

cljs.core.async.__GT_t_cljs$core$async32774 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32774(filter_GT___$1,p__$1,ch__$1,meta32775){
return (new cljs.core.async.t_cljs$core$async32774(filter_GT___$1,p__$1,ch__$1,meta32775));
});

}

return (new cljs.core.async.t_cljs$core$async32774(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32777 = [];
var len__29456__auto___32821 = arguments.length;
var i__29457__auto___32822 = (0);
while(true){
if((i__29457__auto___32822 < len__29456__auto___32821)){
args32777.push((arguments[i__29457__auto___32822]));

var G__32823 = (i__29457__auto___32822 + (1));
i__29457__auto___32822 = G__32823;
continue;
} else {
}
break;
}

var G__32779 = args32777.length;
switch (G__32779) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32777.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___32825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___32825,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___32825,out){
return (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_32826 = state_32800__$1;
(statearr_32802_32826[(2)] = inst_32796);

(statearr_32802_32826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var state_32800__$1 = state_32800;
var statearr_32803_32827 = state_32800__$1;
(statearr_32803_32827[(2)] = null);

(statearr_32803_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32782 = (state_32800[(7)]);
var inst_32782__$1 = (state_32800[(2)]);
var inst_32783 = (inst_32782__$1 == null);
var state_32800__$1 = (function (){var statearr_32804 = state_32800;
(statearr_32804[(7)] = inst_32782__$1);

return statearr_32804;
})();
if(cljs.core.truth_(inst_32783)){
var statearr_32805_32828 = state_32800__$1;
(statearr_32805_32828[(1)] = (5));

} else {
var statearr_32806_32829 = state_32800__$1;
(statearr_32806_32829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var inst_32782 = (state_32800[(7)]);
var inst_32787 = p.call(null,inst_32782);
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32787)){
var statearr_32807_32830 = state_32800__$1;
(statearr_32807_32830[(1)] = (8));

} else {
var statearr_32808_32831 = state_32800__$1;
(statearr_32808_32831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (2))){
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32800__$1,(4),ch);
} else {
if((state_val_32801 === (11))){
var inst_32790 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32809_32832 = state_32800__$1;
(statearr_32809_32832[(2)] = inst_32790);

(statearr_32809_32832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var state_32800__$1 = state_32800;
var statearr_32810_32833 = state_32800__$1;
(statearr_32810_32833[(2)] = null);

(statearr_32810_32833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (5))){
var inst_32785 = cljs.core.async.close_BANG_.call(null,out);
var state_32800__$1 = state_32800;
var statearr_32811_32834 = state_32800__$1;
(statearr_32811_32834[(2)] = inst_32785);

(statearr_32811_32834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var inst_32793 = (state_32800[(2)]);
var state_32800__$1 = (function (){var statearr_32812 = state_32800;
(statearr_32812[(8)] = inst_32793);

return statearr_32812;
})();
var statearr_32813_32835 = state_32800__$1;
(statearr_32813_32835[(2)] = null);

(statearr_32813_32835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32782 = (state_32800[(7)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32800__$1,(11),out,inst_32782);
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
});})(c__30553__auto___32825,out))
;
return ((function (switch__30399__auto__,c__30553__auto___32825,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_32817 = [null,null,null,null,null,null,null,null,null];
(statearr_32817[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_32817[(1)] = (1));

return statearr_32817;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_32800){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_32800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e32818){if((e32818 instanceof Object)){
var ex__30403__auto__ = e32818;
var statearr_32819_32836 = state_32800;
(statearr_32819_32836[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32837 = state_32800;
state_32800 = G__32837;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___32825,out))
})();
var state__30555__auto__ = (function (){var statearr_32820 = f__30554__auto__.call(null);
(statearr_32820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___32825);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___32825,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32838 = [];
var len__29456__auto___32841 = arguments.length;
var i__29457__auto___32842 = (0);
while(true){
if((i__29457__auto___32842 < len__29456__auto___32841)){
args32838.push((arguments[i__29457__auto___32842]));

var G__32843 = (i__29457__auto___32842 + (1));
i__29457__auto___32842 = G__32843;
continue;
} else {
}
break;
}

var G__32840 = args32838.length;
switch (G__32840) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32838.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__){
return (function (state_33010){
var state_val_33011 = (state_33010[(1)]);
if((state_val_33011 === (7))){
var inst_33006 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33012_33053 = state_33010__$1;
(statearr_33012_33053[(2)] = inst_33006);

(statearr_33012_33053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (20))){
var inst_32976 = (state_33010[(7)]);
var inst_32987 = (state_33010[(2)]);
var inst_32988 = cljs.core.next.call(null,inst_32976);
var inst_32962 = inst_32988;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33013 = state_33010;
(statearr_33013[(8)] = inst_32964);

(statearr_33013[(9)] = inst_32987);

(statearr_33013[(10)] = inst_32963);

(statearr_33013[(11)] = inst_32965);

(statearr_33013[(12)] = inst_32962);

return statearr_33013;
})();
var statearr_33014_33054 = state_33010__$1;
(statearr_33014_33054[(2)] = null);

(statearr_33014_33054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (1))){
var state_33010__$1 = state_33010;
var statearr_33015_33055 = state_33010__$1;
(statearr_33015_33055[(2)] = null);

(statearr_33015_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (4))){
var inst_32951 = (state_33010[(13)]);
var inst_32951__$1 = (state_33010[(2)]);
var inst_32952 = (inst_32951__$1 == null);
var state_33010__$1 = (function (){var statearr_33016 = state_33010;
(statearr_33016[(13)] = inst_32951__$1);

return statearr_33016;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_33017_33056 = state_33010__$1;
(statearr_33017_33056[(1)] = (5));

} else {
var statearr_33018_33057 = state_33010__$1;
(statearr_33018_33057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (15))){
var state_33010__$1 = state_33010;
var statearr_33022_33058 = state_33010__$1;
(statearr_33022_33058[(2)] = null);

(statearr_33022_33058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (21))){
var state_33010__$1 = state_33010;
var statearr_33023_33059 = state_33010__$1;
(statearr_33023_33059[(2)] = null);

(statearr_33023_33059[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (13))){
var inst_32964 = (state_33010[(8)]);
var inst_32963 = (state_33010[(10)]);
var inst_32965 = (state_33010[(11)]);
var inst_32962 = (state_33010[(12)]);
var inst_32972 = (state_33010[(2)]);
var inst_32973 = (inst_32965 + (1));
var tmp33019 = inst_32964;
var tmp33020 = inst_32963;
var tmp33021 = inst_32962;
var inst_32962__$1 = tmp33021;
var inst_32963__$1 = tmp33020;
var inst_32964__$1 = tmp33019;
var inst_32965__$1 = inst_32973;
var state_33010__$1 = (function (){var statearr_33024 = state_33010;
(statearr_33024[(8)] = inst_32964__$1);

(statearr_33024[(10)] = inst_32963__$1);

(statearr_33024[(14)] = inst_32972);

(statearr_33024[(11)] = inst_32965__$1);

(statearr_33024[(12)] = inst_32962__$1);

return statearr_33024;
})();
var statearr_33025_33060 = state_33010__$1;
(statearr_33025_33060[(2)] = null);

(statearr_33025_33060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (22))){
var state_33010__$1 = state_33010;
var statearr_33026_33061 = state_33010__$1;
(statearr_33026_33061[(2)] = null);

(statearr_33026_33061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (6))){
var inst_32951 = (state_33010[(13)]);
var inst_32960 = f.call(null,inst_32951);
var inst_32961 = cljs.core.seq.call(null,inst_32960);
var inst_32962 = inst_32961;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33027 = state_33010;
(statearr_33027[(8)] = inst_32964);

(statearr_33027[(10)] = inst_32963);

(statearr_33027[(11)] = inst_32965);

(statearr_33027[(12)] = inst_32962);

return statearr_33027;
})();
var statearr_33028_33062 = state_33010__$1;
(statearr_33028_33062[(2)] = null);

(statearr_33028_33062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (17))){
var inst_32976 = (state_33010[(7)]);
var inst_32980 = cljs.core.chunk_first.call(null,inst_32976);
var inst_32981 = cljs.core.chunk_rest.call(null,inst_32976);
var inst_32982 = cljs.core.count.call(null,inst_32980);
var inst_32962 = inst_32981;
var inst_32963 = inst_32980;
var inst_32964 = inst_32982;
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33029 = state_33010;
(statearr_33029[(8)] = inst_32964);

(statearr_33029[(10)] = inst_32963);

(statearr_33029[(11)] = inst_32965);

(statearr_33029[(12)] = inst_32962);

return statearr_33029;
})();
var statearr_33030_33063 = state_33010__$1;
(statearr_33030_33063[(2)] = null);

(statearr_33030_33063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (3))){
var inst_33008 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33010__$1,inst_33008);
} else {
if((state_val_33011 === (12))){
var inst_32996 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33031_33064 = state_33010__$1;
(statearr_33031_33064[(2)] = inst_32996);

(statearr_33031_33064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (2))){
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33010__$1,(4),in$);
} else {
if((state_val_33011 === (23))){
var inst_33004 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33032_33065 = state_33010__$1;
(statearr_33032_33065[(2)] = inst_33004);

(statearr_33032_33065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (19))){
var inst_32991 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33033_33066 = state_33010__$1;
(statearr_33033_33066[(2)] = inst_32991);

(statearr_33033_33066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (11))){
var inst_32976 = (state_33010[(7)]);
var inst_32962 = (state_33010[(12)]);
var inst_32976__$1 = cljs.core.seq.call(null,inst_32962);
var state_33010__$1 = (function (){var statearr_33034 = state_33010;
(statearr_33034[(7)] = inst_32976__$1);

return statearr_33034;
})();
if(inst_32976__$1){
var statearr_33035_33067 = state_33010__$1;
(statearr_33035_33067[(1)] = (14));

} else {
var statearr_33036_33068 = state_33010__$1;
(statearr_33036_33068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (9))){
var inst_32998 = (state_33010[(2)]);
var inst_32999 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33010__$1 = (function (){var statearr_33037 = state_33010;
(statearr_33037[(15)] = inst_32998);

return statearr_33037;
})();
if(cljs.core.truth_(inst_32999)){
var statearr_33038_33069 = state_33010__$1;
(statearr_33038_33069[(1)] = (21));

} else {
var statearr_33039_33070 = state_33010__$1;
(statearr_33039_33070[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (5))){
var inst_32954 = cljs.core.async.close_BANG_.call(null,out);
var state_33010__$1 = state_33010;
var statearr_33040_33071 = state_33010__$1;
(statearr_33040_33071[(2)] = inst_32954);

(statearr_33040_33071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (14))){
var inst_32976 = (state_33010[(7)]);
var inst_32978 = cljs.core.chunked_seq_QMARK_.call(null,inst_32976);
var state_33010__$1 = state_33010;
if(inst_32978){
var statearr_33041_33072 = state_33010__$1;
(statearr_33041_33072[(1)] = (17));

} else {
var statearr_33042_33073 = state_33010__$1;
(statearr_33042_33073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (16))){
var inst_32994 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33043_33074 = state_33010__$1;
(statearr_33043_33074[(2)] = inst_32994);

(statearr_33043_33074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (10))){
var inst_32963 = (state_33010[(10)]);
var inst_32965 = (state_33010[(11)]);
var inst_32970 = cljs.core._nth.call(null,inst_32963,inst_32965);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33010__$1,(13),out,inst_32970);
} else {
if((state_val_33011 === (18))){
var inst_32976 = (state_33010[(7)]);
var inst_32985 = cljs.core.first.call(null,inst_32976);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33010__$1,(20),out,inst_32985);
} else {
if((state_val_33011 === (8))){
var inst_32964 = (state_33010[(8)]);
var inst_32965 = (state_33010[(11)]);
var inst_32967 = (inst_32965 < inst_32964);
var inst_32968 = inst_32967;
var state_33010__$1 = state_33010;
if(cljs.core.truth_(inst_32968)){
var statearr_33044_33075 = state_33010__$1;
(statearr_33044_33075[(1)] = (10));

} else {
var statearr_33045_33076 = state_33010__$1;
(statearr_33045_33076[(1)] = (11));

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
}
}
}
}
}
}
});})(c__30553__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____0 = (function (){
var statearr_33049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33049[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__);

(statearr_33049[(1)] = (1));

return statearr_33049;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____1 = (function (state_33010){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33050){if((e33050 instanceof Object)){
var ex__30403__auto__ = e33050;
var statearr_33051_33077 = state_33010;
(statearr_33051_33077[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33078 = state_33010;
state_33010 = G__33078;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__ = function(state_33010){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____1.call(this,state_33010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__))
})();
var state__30555__auto__ = (function (){var statearr_33052 = f__30554__auto__.call(null);
(statearr_33052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_33052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__))
);

return c__30553__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33079 = [];
var len__29456__auto___33082 = arguments.length;
var i__29457__auto___33083 = (0);
while(true){
if((i__29457__auto___33083 < len__29456__auto___33082)){
args33079.push((arguments[i__29457__auto___33083]));

var G__33084 = (i__29457__auto___33083 + (1));
i__29457__auto___33083 = G__33084;
continue;
} else {
}
break;
}

var G__33081 = args33079.length;
switch (G__33081) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33079.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33086 = [];
var len__29456__auto___33089 = arguments.length;
var i__29457__auto___33090 = (0);
while(true){
if((i__29457__auto___33090 < len__29456__auto___33089)){
args33086.push((arguments[i__29457__auto___33090]));

var G__33091 = (i__29457__auto___33090 + (1));
i__29457__auto___33090 = G__33091;
continue;
} else {
}
break;
}

var G__33088 = args33086.length;
switch (G__33088) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33086.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33093 = [];
var len__29456__auto___33144 = arguments.length;
var i__29457__auto___33145 = (0);
while(true){
if((i__29457__auto___33145 < len__29456__auto___33144)){
args33093.push((arguments[i__29457__auto___33145]));

var G__33146 = (i__29457__auto___33145 + (1));
i__29457__auto___33145 = G__33146;
continue;
} else {
}
break;
}

var G__33095 = args33093.length;
switch (G__33095) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33093.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___33148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___33148,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___33148,out){
return (function (state_33119){
var state_val_33120 = (state_33119[(1)]);
if((state_val_33120 === (7))){
var inst_33114 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
var statearr_33121_33149 = state_33119__$1;
(statearr_33121_33149[(2)] = inst_33114);

(statearr_33121_33149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (1))){
var inst_33096 = null;
var state_33119__$1 = (function (){var statearr_33122 = state_33119;
(statearr_33122[(7)] = inst_33096);

return statearr_33122;
})();
var statearr_33123_33150 = state_33119__$1;
(statearr_33123_33150[(2)] = null);

(statearr_33123_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (4))){
var inst_33099 = (state_33119[(8)]);
var inst_33099__$1 = (state_33119[(2)]);
var inst_33100 = (inst_33099__$1 == null);
var inst_33101 = cljs.core.not.call(null,inst_33100);
var state_33119__$1 = (function (){var statearr_33124 = state_33119;
(statearr_33124[(8)] = inst_33099__$1);

return statearr_33124;
})();
if(inst_33101){
var statearr_33125_33151 = state_33119__$1;
(statearr_33125_33151[(1)] = (5));

} else {
var statearr_33126_33152 = state_33119__$1;
(statearr_33126_33152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (6))){
var state_33119__$1 = state_33119;
var statearr_33127_33153 = state_33119__$1;
(statearr_33127_33153[(2)] = null);

(statearr_33127_33153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (3))){
var inst_33116 = (state_33119[(2)]);
var inst_33117 = cljs.core.async.close_BANG_.call(null,out);
var state_33119__$1 = (function (){var statearr_33128 = state_33119;
(statearr_33128[(9)] = inst_33116);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33119__$1,inst_33117);
} else {
if((state_val_33120 === (2))){
var state_33119__$1 = state_33119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33119__$1,(4),ch);
} else {
if((state_val_33120 === (11))){
var inst_33099 = (state_33119[(8)]);
var inst_33108 = (state_33119[(2)]);
var inst_33096 = inst_33099;
var state_33119__$1 = (function (){var statearr_33129 = state_33119;
(statearr_33129[(7)] = inst_33096);

(statearr_33129[(10)] = inst_33108);

return statearr_33129;
})();
var statearr_33130_33154 = state_33119__$1;
(statearr_33130_33154[(2)] = null);

(statearr_33130_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (9))){
var inst_33099 = (state_33119[(8)]);
var state_33119__$1 = state_33119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33119__$1,(11),out,inst_33099);
} else {
if((state_val_33120 === (5))){
var inst_33099 = (state_33119[(8)]);
var inst_33096 = (state_33119[(7)]);
var inst_33103 = cljs.core._EQ_.call(null,inst_33099,inst_33096);
var state_33119__$1 = state_33119;
if(inst_33103){
var statearr_33132_33155 = state_33119__$1;
(statearr_33132_33155[(1)] = (8));

} else {
var statearr_33133_33156 = state_33119__$1;
(statearr_33133_33156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (10))){
var inst_33111 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
var statearr_33134_33157 = state_33119__$1;
(statearr_33134_33157[(2)] = inst_33111);

(statearr_33134_33157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (8))){
var inst_33096 = (state_33119[(7)]);
var tmp33131 = inst_33096;
var inst_33096__$1 = tmp33131;
var state_33119__$1 = (function (){var statearr_33135 = state_33119;
(statearr_33135[(7)] = inst_33096__$1);

return statearr_33135;
})();
var statearr_33136_33158 = state_33119__$1;
(statearr_33136_33158[(2)] = null);

(statearr_33136_33158[(1)] = (2));


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
});})(c__30553__auto___33148,out))
;
return ((function (switch__30399__auto__,c__30553__auto___33148,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_33140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33140[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_33140[(1)] = (1));

return statearr_33140;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_33119){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33141){if((e33141 instanceof Object)){
var ex__30403__auto__ = e33141;
var statearr_33142_33159 = state_33119;
(statearr_33142_33159[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33160 = state_33119;
state_33119 = G__33160;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_33119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_33119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___33148,out))
})();
var state__30555__auto__ = (function (){var statearr_33143 = f__30554__auto__.call(null);
(statearr_33143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___33148);

return statearr_33143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___33148,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33161 = [];
var len__29456__auto___33231 = arguments.length;
var i__29457__auto___33232 = (0);
while(true){
if((i__29457__auto___33232 < len__29456__auto___33231)){
args33161.push((arguments[i__29457__auto___33232]));

var G__33233 = (i__29457__auto___33232 + (1));
i__29457__auto___33232 = G__33233;
continue;
} else {
}
break;
}

var G__33163 = args33161.length;
switch (G__33163) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33161.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___33235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___33235,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___33235,out){
return (function (state_33201){
var state_val_33202 = (state_33201[(1)]);
if((state_val_33202 === (7))){
var inst_33197 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33203_33236 = state_33201__$1;
(statearr_33203_33236[(2)] = inst_33197);

(statearr_33203_33236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (1))){
var inst_33164 = (new Array(n));
var inst_33165 = inst_33164;
var inst_33166 = (0);
var state_33201__$1 = (function (){var statearr_33204 = state_33201;
(statearr_33204[(7)] = inst_33165);

(statearr_33204[(8)] = inst_33166);

return statearr_33204;
})();
var statearr_33205_33237 = state_33201__$1;
(statearr_33205_33237[(2)] = null);

(statearr_33205_33237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (4))){
var inst_33169 = (state_33201[(9)]);
var inst_33169__$1 = (state_33201[(2)]);
var inst_33170 = (inst_33169__$1 == null);
var inst_33171 = cljs.core.not.call(null,inst_33170);
var state_33201__$1 = (function (){var statearr_33206 = state_33201;
(statearr_33206[(9)] = inst_33169__$1);

return statearr_33206;
})();
if(inst_33171){
var statearr_33207_33238 = state_33201__$1;
(statearr_33207_33238[(1)] = (5));

} else {
var statearr_33208_33239 = state_33201__$1;
(statearr_33208_33239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (15))){
var inst_33191 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33209_33240 = state_33201__$1;
(statearr_33209_33240[(2)] = inst_33191);

(statearr_33209_33240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (13))){
var state_33201__$1 = state_33201;
var statearr_33210_33241 = state_33201__$1;
(statearr_33210_33241[(2)] = null);

(statearr_33210_33241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (6))){
var inst_33166 = (state_33201[(8)]);
var inst_33187 = (inst_33166 > (0));
var state_33201__$1 = state_33201;
if(cljs.core.truth_(inst_33187)){
var statearr_33211_33242 = state_33201__$1;
(statearr_33211_33242[(1)] = (12));

} else {
var statearr_33212_33243 = state_33201__$1;
(statearr_33212_33243[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (3))){
var inst_33199 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33201__$1,inst_33199);
} else {
if((state_val_33202 === (12))){
var inst_33165 = (state_33201[(7)]);
var inst_33189 = cljs.core.vec.call(null,inst_33165);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33201__$1,(15),out,inst_33189);
} else {
if((state_val_33202 === (2))){
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33201__$1,(4),ch);
} else {
if((state_val_33202 === (11))){
var inst_33181 = (state_33201[(2)]);
var inst_33182 = (new Array(n));
var inst_33165 = inst_33182;
var inst_33166 = (0);
var state_33201__$1 = (function (){var statearr_33213 = state_33201;
(statearr_33213[(7)] = inst_33165);

(statearr_33213[(10)] = inst_33181);

(statearr_33213[(8)] = inst_33166);

return statearr_33213;
})();
var statearr_33214_33244 = state_33201__$1;
(statearr_33214_33244[(2)] = null);

(statearr_33214_33244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (9))){
var inst_33165 = (state_33201[(7)]);
var inst_33179 = cljs.core.vec.call(null,inst_33165);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33201__$1,(11),out,inst_33179);
} else {
if((state_val_33202 === (5))){
var inst_33165 = (state_33201[(7)]);
var inst_33169 = (state_33201[(9)]);
var inst_33174 = (state_33201[(11)]);
var inst_33166 = (state_33201[(8)]);
var inst_33173 = (inst_33165[inst_33166] = inst_33169);
var inst_33174__$1 = (inst_33166 + (1));
var inst_33175 = (inst_33174__$1 < n);
var state_33201__$1 = (function (){var statearr_33215 = state_33201;
(statearr_33215[(12)] = inst_33173);

(statearr_33215[(11)] = inst_33174__$1);

return statearr_33215;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33216_33245 = state_33201__$1;
(statearr_33216_33245[(1)] = (8));

} else {
var statearr_33217_33246 = state_33201__$1;
(statearr_33217_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (14))){
var inst_33194 = (state_33201[(2)]);
var inst_33195 = cljs.core.async.close_BANG_.call(null,out);
var state_33201__$1 = (function (){var statearr_33219 = state_33201;
(statearr_33219[(13)] = inst_33194);

return statearr_33219;
})();
var statearr_33220_33247 = state_33201__$1;
(statearr_33220_33247[(2)] = inst_33195);

(statearr_33220_33247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (10))){
var inst_33185 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33221_33248 = state_33201__$1;
(statearr_33221_33248[(2)] = inst_33185);

(statearr_33221_33248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (8))){
var inst_33165 = (state_33201[(7)]);
var inst_33174 = (state_33201[(11)]);
var tmp33218 = inst_33165;
var inst_33165__$1 = tmp33218;
var inst_33166 = inst_33174;
var state_33201__$1 = (function (){var statearr_33222 = state_33201;
(statearr_33222[(7)] = inst_33165__$1);

(statearr_33222[(8)] = inst_33166);

return statearr_33222;
})();
var statearr_33223_33249 = state_33201__$1;
(statearr_33223_33249[(2)] = null);

(statearr_33223_33249[(1)] = (2));


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
});})(c__30553__auto___33235,out))
;
return ((function (switch__30399__auto__,c__30553__auto___33235,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_33201){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__30403__auto__ = e33228;
var statearr_33229_33250 = state_33201;
(statearr_33229_33250[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33251 = state_33201;
state_33201 = G__33251;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_33201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___33235,out))
})();
var state__30555__auto__ = (function (){var statearr_33230 = f__30554__auto__.call(null);
(statearr_33230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___33235);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___33235,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33252 = [];
var len__29456__auto___33326 = arguments.length;
var i__29457__auto___33327 = (0);
while(true){
if((i__29457__auto___33327 < len__29456__auto___33326)){
args33252.push((arguments[i__29457__auto___33327]));

var G__33328 = (i__29457__auto___33327 + (1));
i__29457__auto___33327 = G__33328;
continue;
} else {
}
break;
}

var G__33254 = args33252.length;
switch (G__33254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33252.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30553__auto___33330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___33330,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___33330,out){
return (function (state_33296){
var state_val_33297 = (state_33296[(1)]);
if((state_val_33297 === (7))){
var inst_33292 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33298_33331 = state_33296__$1;
(statearr_33298_33331[(2)] = inst_33292);

(statearr_33298_33331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (1))){
var inst_33255 = [];
var inst_33256 = inst_33255;
var inst_33257 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33296__$1 = (function (){var statearr_33299 = state_33296;
(statearr_33299[(7)] = inst_33257);

(statearr_33299[(8)] = inst_33256);

return statearr_33299;
})();
var statearr_33300_33332 = state_33296__$1;
(statearr_33300_33332[(2)] = null);

(statearr_33300_33332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (4))){
var inst_33260 = (state_33296[(9)]);
var inst_33260__$1 = (state_33296[(2)]);
var inst_33261 = (inst_33260__$1 == null);
var inst_33262 = cljs.core.not.call(null,inst_33261);
var state_33296__$1 = (function (){var statearr_33301 = state_33296;
(statearr_33301[(9)] = inst_33260__$1);

return statearr_33301;
})();
if(inst_33262){
var statearr_33302_33333 = state_33296__$1;
(statearr_33302_33333[(1)] = (5));

} else {
var statearr_33303_33334 = state_33296__$1;
(statearr_33303_33334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (15))){
var inst_33286 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33304_33335 = state_33296__$1;
(statearr_33304_33335[(2)] = inst_33286);

(statearr_33304_33335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (13))){
var state_33296__$1 = state_33296;
var statearr_33305_33336 = state_33296__$1;
(statearr_33305_33336[(2)] = null);

(statearr_33305_33336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (6))){
var inst_33256 = (state_33296[(8)]);
var inst_33281 = inst_33256.length;
var inst_33282 = (inst_33281 > (0));
var state_33296__$1 = state_33296;
if(cljs.core.truth_(inst_33282)){
var statearr_33306_33337 = state_33296__$1;
(statearr_33306_33337[(1)] = (12));

} else {
var statearr_33307_33338 = state_33296__$1;
(statearr_33307_33338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (3))){
var inst_33294 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33296__$1,inst_33294);
} else {
if((state_val_33297 === (12))){
var inst_33256 = (state_33296[(8)]);
var inst_33284 = cljs.core.vec.call(null,inst_33256);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33296__$1,(15),out,inst_33284);
} else {
if((state_val_33297 === (2))){
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33296__$1,(4),ch);
} else {
if((state_val_33297 === (11))){
var inst_33264 = (state_33296[(10)]);
var inst_33260 = (state_33296[(9)]);
var inst_33274 = (state_33296[(2)]);
var inst_33275 = [];
var inst_33276 = inst_33275.push(inst_33260);
var inst_33256 = inst_33275;
var inst_33257 = inst_33264;
var state_33296__$1 = (function (){var statearr_33308 = state_33296;
(statearr_33308[(7)] = inst_33257);

(statearr_33308[(8)] = inst_33256);

(statearr_33308[(11)] = inst_33274);

(statearr_33308[(12)] = inst_33276);

return statearr_33308;
})();
var statearr_33309_33339 = state_33296__$1;
(statearr_33309_33339[(2)] = null);

(statearr_33309_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (9))){
var inst_33256 = (state_33296[(8)]);
var inst_33272 = cljs.core.vec.call(null,inst_33256);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33296__$1,(11),out,inst_33272);
} else {
if((state_val_33297 === (5))){
var inst_33257 = (state_33296[(7)]);
var inst_33264 = (state_33296[(10)]);
var inst_33260 = (state_33296[(9)]);
var inst_33264__$1 = f.call(null,inst_33260);
var inst_33265 = cljs.core._EQ_.call(null,inst_33264__$1,inst_33257);
var inst_33266 = cljs.core.keyword_identical_QMARK_.call(null,inst_33257,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33267 = (inst_33265) || (inst_33266);
var state_33296__$1 = (function (){var statearr_33310 = state_33296;
(statearr_33310[(10)] = inst_33264__$1);

return statearr_33310;
})();
if(cljs.core.truth_(inst_33267)){
var statearr_33311_33340 = state_33296__$1;
(statearr_33311_33340[(1)] = (8));

} else {
var statearr_33312_33341 = state_33296__$1;
(statearr_33312_33341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (14))){
var inst_33289 = (state_33296[(2)]);
var inst_33290 = cljs.core.async.close_BANG_.call(null,out);
var state_33296__$1 = (function (){var statearr_33314 = state_33296;
(statearr_33314[(13)] = inst_33289);

return statearr_33314;
})();
var statearr_33315_33342 = state_33296__$1;
(statearr_33315_33342[(2)] = inst_33290);

(statearr_33315_33342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (10))){
var inst_33279 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33316_33343 = state_33296__$1;
(statearr_33316_33343[(2)] = inst_33279);

(statearr_33316_33343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (8))){
var inst_33256 = (state_33296[(8)]);
var inst_33264 = (state_33296[(10)]);
var inst_33260 = (state_33296[(9)]);
var inst_33269 = inst_33256.push(inst_33260);
var tmp33313 = inst_33256;
var inst_33256__$1 = tmp33313;
var inst_33257 = inst_33264;
var state_33296__$1 = (function (){var statearr_33317 = state_33296;
(statearr_33317[(7)] = inst_33257);

(statearr_33317[(14)] = inst_33269);

(statearr_33317[(8)] = inst_33256__$1);

return statearr_33317;
})();
var statearr_33318_33344 = state_33296__$1;
(statearr_33318_33344[(2)] = null);

(statearr_33318_33344[(1)] = (2));


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
});})(c__30553__auto___33330,out))
;
return ((function (switch__30399__auto__,c__30553__auto___33330,out){
return (function() {
var cljs$core$async$state_machine__30400__auto__ = null;
var cljs$core$async$state_machine__30400__auto____0 = (function (){
var statearr_33322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33322[(0)] = cljs$core$async$state_machine__30400__auto__);

(statearr_33322[(1)] = (1));

return statearr_33322;
});
var cljs$core$async$state_machine__30400__auto____1 = (function (state_33296){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33323){if((e33323 instanceof Object)){
var ex__30403__auto__ = e33323;
var statearr_33324_33345 = state_33296;
(statearr_33324_33345[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33346 = state_33296;
state_33296 = G__33346;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
cljs$core$async$state_machine__30400__auto__ = function(state_33296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30400__auto____1.call(this,state_33296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30400__auto____0;
cljs$core$async$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30400__auto____1;
return cljs$core$async$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___33330,out))
})();
var state__30555__auto__ = (function (){var statearr_33325 = f__30554__auto__.call(null);
(statearr_33325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___33330);

return statearr_33325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___33330,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489198965650