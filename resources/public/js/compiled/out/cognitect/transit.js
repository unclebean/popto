// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__34991_34995 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__34992_34996 = null;
var count__34993_34997 = (0);
var i__34994_34998 = (0);
while(true){
if((i__34994_34998 < count__34993_34997)){
var k_34999 = cljs.core._nth.call(null,chunk__34992_34996,i__34994_34998);
var v_35000 = (b[k_34999]);
(a[k_34999] = v_35000);

var G__35001 = seq__34991_34995;
var G__35002 = chunk__34992_34996;
var G__35003 = count__34993_34997;
var G__35004 = (i__34994_34998 + (1));
seq__34991_34995 = G__35001;
chunk__34992_34996 = G__35002;
count__34993_34997 = G__35003;
i__34994_34998 = G__35004;
continue;
} else {
var temp__4657__auto___35005 = cljs.core.seq.call(null,seq__34991_34995);
if(temp__4657__auto___35005){
var seq__34991_35006__$1 = temp__4657__auto___35005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34991_35006__$1)){
var c__29194__auto___35007 = cljs.core.chunk_first.call(null,seq__34991_35006__$1);
var G__35008 = cljs.core.chunk_rest.call(null,seq__34991_35006__$1);
var G__35009 = c__29194__auto___35007;
var G__35010 = cljs.core.count.call(null,c__29194__auto___35007);
var G__35011 = (0);
seq__34991_34995 = G__35008;
chunk__34992_34996 = G__35009;
count__34993_34997 = G__35010;
i__34994_34998 = G__35011;
continue;
} else {
var k_35012 = cljs.core.first.call(null,seq__34991_35006__$1);
var v_35013 = (b[k_35012]);
(a[k_35012] = v_35013);

var G__35014 = cljs.core.next.call(null,seq__34991_35006__$1);
var G__35015 = null;
var G__35016 = (0);
var G__35017 = (0);
seq__34991_34995 = G__35014;
chunk__34992_34996 = G__35015;
count__34993_34997 = G__35016;
i__34994_34998 = G__35017;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args35018 = [];
var len__29458__auto___35021 = arguments.length;
var i__29459__auto___35022 = (0);
while(true){
if((i__29459__auto___35022 < len__29458__auto___35021)){
args35018.push((arguments[i__29459__auto___35022]));

var G__35023 = (i__29459__auto___35022 + (1));
i__29459__auto___35022 = G__35023;
continue;
} else {
}
break;
}

var G__35020 = args35018.length;
switch (G__35020) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35018.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35025 = (i + (2));
var G__35026 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__35025;
ret = G__35026;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35027_35031 = cljs.core.seq.call(null,v);
var chunk__35028_35032 = null;
var count__35029_35033 = (0);
var i__35030_35034 = (0);
while(true){
if((i__35030_35034 < count__35029_35033)){
var x_35035 = cljs.core._nth.call(null,chunk__35028_35032,i__35030_35034);
ret.push(x_35035);

var G__35036 = seq__35027_35031;
var G__35037 = chunk__35028_35032;
var G__35038 = count__35029_35033;
var G__35039 = (i__35030_35034 + (1));
seq__35027_35031 = G__35036;
chunk__35028_35032 = G__35037;
count__35029_35033 = G__35038;
i__35030_35034 = G__35039;
continue;
} else {
var temp__4657__auto___35040 = cljs.core.seq.call(null,seq__35027_35031);
if(temp__4657__auto___35040){
var seq__35027_35041__$1 = temp__4657__auto___35040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35027_35041__$1)){
var c__29194__auto___35042 = cljs.core.chunk_first.call(null,seq__35027_35041__$1);
var G__35043 = cljs.core.chunk_rest.call(null,seq__35027_35041__$1);
var G__35044 = c__29194__auto___35042;
var G__35045 = cljs.core.count.call(null,c__29194__auto___35042);
var G__35046 = (0);
seq__35027_35031 = G__35043;
chunk__35028_35032 = G__35044;
count__35029_35033 = G__35045;
i__35030_35034 = G__35046;
continue;
} else {
var x_35047 = cljs.core.first.call(null,seq__35027_35041__$1);
ret.push(x_35047);

var G__35048 = cljs.core.next.call(null,seq__35027_35041__$1);
var G__35049 = null;
var G__35050 = (0);
var G__35051 = (0);
seq__35027_35031 = G__35048;
chunk__35028_35032 = G__35049;
count__35029_35033 = G__35050;
i__35030_35034 = G__35051;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35052_35056 = cljs.core.seq.call(null,v);
var chunk__35053_35057 = null;
var count__35054_35058 = (0);
var i__35055_35059 = (0);
while(true){
if((i__35055_35059 < count__35054_35058)){
var x_35060 = cljs.core._nth.call(null,chunk__35053_35057,i__35055_35059);
ret.push(x_35060);

var G__35061 = seq__35052_35056;
var G__35062 = chunk__35053_35057;
var G__35063 = count__35054_35058;
var G__35064 = (i__35055_35059 + (1));
seq__35052_35056 = G__35061;
chunk__35053_35057 = G__35062;
count__35054_35058 = G__35063;
i__35055_35059 = G__35064;
continue;
} else {
var temp__4657__auto___35065 = cljs.core.seq.call(null,seq__35052_35056);
if(temp__4657__auto___35065){
var seq__35052_35066__$1 = temp__4657__auto___35065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35052_35066__$1)){
var c__29194__auto___35067 = cljs.core.chunk_first.call(null,seq__35052_35066__$1);
var G__35068 = cljs.core.chunk_rest.call(null,seq__35052_35066__$1);
var G__35069 = c__29194__auto___35067;
var G__35070 = cljs.core.count.call(null,c__29194__auto___35067);
var G__35071 = (0);
seq__35052_35056 = G__35068;
chunk__35053_35057 = G__35069;
count__35054_35058 = G__35070;
i__35055_35059 = G__35071;
continue;
} else {
var x_35072 = cljs.core.first.call(null,seq__35052_35066__$1);
ret.push(x_35072);

var G__35073 = cljs.core.next.call(null,seq__35052_35066__$1);
var G__35074 = null;
var G__35075 = (0);
var G__35076 = (0);
seq__35052_35056 = G__35073;
chunk__35053_35057 = G__35074;
count__35054_35058 = G__35075;
i__35055_35059 = G__35076;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35077_35081 = cljs.core.seq.call(null,v);
var chunk__35078_35082 = null;
var count__35079_35083 = (0);
var i__35080_35084 = (0);
while(true){
if((i__35080_35084 < count__35079_35083)){
var x_35085 = cljs.core._nth.call(null,chunk__35078_35082,i__35080_35084);
ret.push(x_35085);

var G__35086 = seq__35077_35081;
var G__35087 = chunk__35078_35082;
var G__35088 = count__35079_35083;
var G__35089 = (i__35080_35084 + (1));
seq__35077_35081 = G__35086;
chunk__35078_35082 = G__35087;
count__35079_35083 = G__35088;
i__35080_35084 = G__35089;
continue;
} else {
var temp__4657__auto___35090 = cljs.core.seq.call(null,seq__35077_35081);
if(temp__4657__auto___35090){
var seq__35077_35091__$1 = temp__4657__auto___35090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35077_35091__$1)){
var c__29194__auto___35092 = cljs.core.chunk_first.call(null,seq__35077_35091__$1);
var G__35093 = cljs.core.chunk_rest.call(null,seq__35077_35091__$1);
var G__35094 = c__29194__auto___35092;
var G__35095 = cljs.core.count.call(null,c__29194__auto___35092);
var G__35096 = (0);
seq__35077_35081 = G__35093;
chunk__35078_35082 = G__35094;
count__35079_35083 = G__35095;
i__35080_35084 = G__35096;
continue;
} else {
var x_35097 = cljs.core.first.call(null,seq__35077_35091__$1);
ret.push(x_35097);

var G__35098 = cljs.core.next.call(null,seq__35077_35091__$1);
var G__35099 = null;
var G__35100 = (0);
var G__35101 = (0);
seq__35077_35081 = G__35098;
chunk__35078_35082 = G__35099;
count__35079_35083 = G__35100;
i__35080_35084 = G__35101;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args35102 = [];
var len__29458__auto___35117 = arguments.length;
var i__29459__auto___35118 = (0);
while(true){
if((i__29459__auto___35118 < len__29458__auto___35117)){
args35102.push((arguments[i__29459__auto___35118]));

var G__35119 = (i__29459__auto___35118 + (1));
i__29459__auto___35118 = G__35119;
continue;
} else {
}
break;
}

var G__35104 = args35102.length;
switch (G__35104) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35102.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__35105 = obj;
G__35105.push(kfn.call(null,k),vfn.call(null,v));

return G__35105;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x35106 = cljs.core.clone.call(null,handlers);
x35106.forEach = ((function (x35106,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__35107 = cljs.core.seq.call(null,coll);
var chunk__35108 = null;
var count__35109 = (0);
var i__35110 = (0);
while(true){
if((i__35110 < count__35109)){
var vec__35111 = cljs.core._nth.call(null,chunk__35108,i__35110);
var k = cljs.core.nth.call(null,vec__35111,(0),null);
var v = cljs.core.nth.call(null,vec__35111,(1),null);
f.call(null,v,k);

var G__35121 = seq__35107;
var G__35122 = chunk__35108;
var G__35123 = count__35109;
var G__35124 = (i__35110 + (1));
seq__35107 = G__35121;
chunk__35108 = G__35122;
count__35109 = G__35123;
i__35110 = G__35124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35107);
if(temp__4657__auto__){
var seq__35107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35107__$1)){
var c__29194__auto__ = cljs.core.chunk_first.call(null,seq__35107__$1);
var G__35125 = cljs.core.chunk_rest.call(null,seq__35107__$1);
var G__35126 = c__29194__auto__;
var G__35127 = cljs.core.count.call(null,c__29194__auto__);
var G__35128 = (0);
seq__35107 = G__35125;
chunk__35108 = G__35126;
count__35109 = G__35127;
i__35110 = G__35128;
continue;
} else {
var vec__35114 = cljs.core.first.call(null,seq__35107__$1);
var k = cljs.core.nth.call(null,vec__35114,(0),null);
var v = cljs.core.nth.call(null,vec__35114,(1),null);
f.call(null,v,k);

var G__35129 = cljs.core.next.call(null,seq__35107__$1);
var G__35130 = null;
var G__35131 = (0);
var G__35132 = (0);
seq__35107 = G__35129;
chunk__35108 = G__35130;
count__35109 = G__35131;
i__35110 = G__35132;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35106,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x35106;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args35133 = [];
var len__29458__auto___35139 = arguments.length;
var i__29459__auto___35140 = (0);
while(true){
if((i__29459__auto___35140 < len__29458__auto___35139)){
args35133.push((arguments[i__29459__auto___35140]));

var G__35141 = (i__29459__auto___35140 + (1));
i__29459__auto___35140 = G__35141;
continue;
} else {
}
break;
}

var G__35135 = args35133.length;
switch (G__35135) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35133.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit35136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit35136 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta35137){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta35137 = meta35137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit35136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35138,meta35137__$1){
var self__ = this;
var _35138__$1 = this;
return (new cognitect.transit.t_cognitect$transit35136(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta35137__$1));
});

cognitect.transit.t_cognitect$transit35136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35138){
var self__ = this;
var _35138__$1 = this;
return self__.meta35137;
});

cognitect.transit.t_cognitect$transit35136.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35136.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit35136.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35136.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit35136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta35137","meta35137",368082584,null)], null);
});

cognitect.transit.t_cognitect$transit35136.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit35136.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit35136";

cognitect.transit.t_cognitect$transit35136.cljs$lang$ctorPrWriter = (function (this__28989__auto__,writer__28990__auto__,opt__28991__auto__){
return cljs.core._write.call(null,writer__28990__auto__,"cognitect.transit/t_cognitect$transit35136");
});

cognitect.transit.__GT_t_cognitect$transit35136 = (function cognitect$transit$__GT_t_cognitect$transit35136(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35137){
return (new cognitect.transit.t_cognitect$transit35136(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35137));
});

}

return (new cognitect.transit.t_cognitect$transit35136(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__28383__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__28383__auto__)){
return or__28383__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1489205908303