// Compiled by ClojureScript 1.9.89 {}
goog.provide('popto_ui.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
popto_ui.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof popto_ui.app.read !== 'undefined'){
} else {
popto_ui.app.read = (function (){var method_table__29308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29309__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29310__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29311__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29312__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"popto-ui.app","read"),((function (method_table__29308__auto__,prefer_table__29309__auto__,method_cache__29310__auto__,cached_hierarchy__29311__auto__,hierarchy__29312__auto__){
return (function (env,key,params){
return key;
});})(method_table__29308__auto__,prefer_table__29309__auto__,method_cache__29310__auto__,cached_hierarchy__29311__auto__,hierarchy__29312__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29312__auto__,method_table__29308__auto__,prefer_table__29309__auto__,method_cache__29310__auto__,cached_hierarchy__29311__auto__));
})();
}
cljs.core._add_method.call(null,popto_ui.app.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__38201,key,params){
var map__38202 = p__38201;
var map__38202__$1 = ((((!((map__38202 == null)))?((((map__38202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38202):map__38202);
var env = map__38202__$1;
var state = cljs.core.get.call(null,map__38202__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__38204 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__38204,(0),null);
var value = cljs.core.nth.call(null,vec__38204,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,popto_ui.app.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__38207,key,p__38208){
var map__38209 = p__38207;
var map__38209__$1 = ((((!((map__38209 == null)))?((((map__38209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38209):map__38209);
var env = map__38209__$1;
var state = cljs.core.get.call(null,map__38209__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__38210 = p__38208;
var map__38210__$1 = ((((!((map__38210 == null)))?((((map__38210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38210):map__38210);
var start = cljs.core.get.call(null,map__38210__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__38210__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
popto_ui.app.AnimalsList = (function popto_ui$app$AnimalsList(){
var this__35517__auto__ = this;
React.Component.apply(this__35517__auto__,arguments);

if(!((this__35517__auto__.initLocalState == null))){
this__35517__auto__.state = this__35517__auto__.initLocalState();
} else {
this__35517__auto__.state = {};
}

return this__35517__auto__;
});

popto_ui.app.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x38217_38233 = popto_ui.app.AnimalsList.prototype;
x38217_38233.componentWillUpdate = ((function (x38217_38233){
return (function (next_props__35409__auto__,next_state__35410__auto__){
var this__35408__auto__ = this;
if(((!((this__35408__auto__ == null)))?(((false) || (this__35408__auto__.om$next$Ident$))?true:false):false)){
var ident__35412__auto___38234 = om.next.ident.call(null,this__35408__auto__,om.next.props.call(null,this__35408__auto__));
var next_ident__35413__auto___38235 = om.next.ident.call(null,this__35408__auto__,om.next._next_props.call(null,next_props__35409__auto__,this__35408__auto__));
if(cljs.core.not_EQ_.call(null,ident__35412__auto___38234,next_ident__35413__auto___38235)){
var idxr__35414__auto___38236 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35408__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35414__auto___38236 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35414__auto___38236),((function (idxr__35414__auto___38236,ident__35412__auto___38234,next_ident__35413__auto___38235,this__35408__auto__,x38217_38233){
return (function (indexes__35415__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35415__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35412__auto___38234], null),cljs.core.disj,this__35408__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35413__auto___38235], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35408__auto__);
});})(idxr__35414__auto___38236,ident__35412__auto___38234,next_ident__35413__auto___38235,this__35408__auto__,x38217_38233))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35408__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35408__auto__);
});})(x38217_38233))
;

x38217_38233.shouldComponentUpdate = ((function (x38217_38233){
return (function (next_props__35409__auto__,next_state__35410__auto__){
var this__35408__auto__ = this;
var next_children__35411__auto__ = next_props__35409__auto__.children;
var next_props__35409__auto____$1 = goog.object.get(next_props__35409__auto__,"omcljs$value");
var next_props__35409__auto____$2 = (function (){var G__38219 = next_props__35409__auto____$1;
if((next_props__35409__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38219);
} else {
return G__38219;
}
})();
var or__28383__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35408__auto__),next_props__35409__auto____$2);
if(or__28383__auto__){
return or__28383__auto__;
} else {
var or__28383__auto____$1 = (function (){var and__28371__auto__ = this__35408__auto__.state;
if(cljs.core.truth_(and__28371__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35408__auto__.state,"omcljs$state"),goog.object.get(next_state__35410__auto__,"omcljs$state"));
} else {
return and__28371__auto__;
}
})();
if(cljs.core.truth_(or__28383__auto____$1)){
return or__28383__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35408__auto__.props.children,next_children__35411__auto__);
}
}
});})(x38217_38233))
;

x38217_38233.componentWillUnmount = ((function (x38217_38233){
return (function (){
var this__35408__auto__ = this;
var r__35419__auto__ = om.next.get_reconciler.call(null,this__35408__auto__);
var cfg__35420__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35419__auto__);
var st__35421__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35420__auto__);
var indexer__35418__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35420__auto__);
if(cljs.core.truth_((function (){var and__28371__auto__ = !((st__35421__auto__ == null));
if(and__28371__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35421__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35408__auto__], null));
} else {
return and__28371__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35421__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35408__auto__);
} else {
}

if((indexer__35418__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35418__auto__,this__35408__auto__);
}
});})(x38217_38233))
;

x38217_38233.componentDidUpdate = ((function (x38217_38233){
return (function (prev_props__35416__auto__,prev_state__35417__auto__){
var this__35408__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35408__auto__);
});})(x38217_38233))
;

x38217_38233.isMounted = ((function (x38217_38233){
return (function (){
var this__35408__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35408__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38217_38233))
;

x38217_38233.componentWillMount = ((function (x38217_38233){
return (function (){
var this__35408__auto__ = this;
var indexer__35418__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35408__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35418__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35418__auto__,this__35408__auto__);
}
});})(x38217_38233))
;

x38217_38233.render = ((function (x38217_38233){
return (function (){
var this__35407__auto__ = this;
var this$ = this__35407__auto__;
var _STAR_reconciler_STAR_38220 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38221 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38222 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38223 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38224 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35407__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35407__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35407__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35407__auto__);

om.next._STAR_parent_STAR_ = this__35407__auto__;

try{var map__38225 = om.next.props.call(null,this$);
var map__38225__$1 = ((((!((map__38225 == null)))?((((map__38225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38225):map__38225);
var title = cljs.core.get.call(null,map__38225__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__38225__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return om.dom.div.call(null,null,om.dom.h2.call(null,null,title),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__38225,map__38225__$1,title,list,_STAR_reconciler_STAR_38220,_STAR_depth_STAR_38221,_STAR_shared_STAR_38222,_STAR_instrument_STAR_38223,_STAR_parent_STAR_38224,this$,this__35407__auto__,x38217_38233){
return (function (p__38227){
var vec__38228 = p__38227;
var i = cljs.core.nth.call(null,vec__38228,(0),null);
var name = cljs.core.nth.call(null,vec__38228,(1),null);
return om.dom.li.call(null,null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join(''));
});})(map__38225,map__38225__$1,title,list,_STAR_reconciler_STAR_38220,_STAR_depth_STAR_38221,_STAR_shared_STAR_38222,_STAR_instrument_STAR_38223,_STAR_parent_STAR_38224,this$,this__35407__auto__,x38217_38233))
,list)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38224;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38223;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38222;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38221;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38220;
}});})(x38217_38233))
;


popto_ui.app.AnimalsList.prototype.constructor = popto_ui.app.AnimalsList;

popto_ui.app.AnimalsList.prototype.constructor.displayName = "popto-ui.app/AnimalsList";

popto_ui.app.AnimalsList.prototype.om$isComponent = true;

var x38231_38237 = popto_ui.app.AnimalsList;
/** @nocollapse */
x38231_38237.om$next$IQueryParams$ = true;

/** @nocollapse */
x38231_38237.om$next$IQueryParams$params$arity$1 = ((function (x38231_38237){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x38231_38237))
;

/** @nocollapse */
x38231_38237.om$next$IQuery$ = true;

/** @nocollapse */
x38231_38237.om$next$IQuery$query$arity$1 = ((function (x38231_38237){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x38231_38237))
;


var x38232_38238 = popto_ui.app.AnimalsList.prototype;

x38232_38238.om$next$IQueryParams$ = true;


x38232_38238.om$next$IQueryParams$params$arity$1 = ((function (x38232_38238){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x38232_38238))
;


x38232_38238.om$next$IQuery$ = true;


x38232_38238.om$next$IQuery$query$arity$1 = ((function (x38232_38238){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x38232_38238))
;


popto_ui.app.AnimalsList.cljs$lang$type = true;

popto_ui.app.AnimalsList.cljs$lang$ctorStr = "popto-ui.app/AnimalsList";

popto_ui.app.AnimalsList.cljs$lang$ctorPrWriter = (function (this__35520__auto__,writer__35521__auto__,opt__35522__auto__){
return cljs.core._write.call(null,writer__35521__auto__,"popto-ui.app/AnimalsList");
});
popto_ui.app.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),popto_ui.app.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),popto_ui.app.read], null))], null));
om.next.add_root_BANG_.call(null,popto_ui.app.reconciler,popto_ui.app.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=app.js.map?rel=1489241010125