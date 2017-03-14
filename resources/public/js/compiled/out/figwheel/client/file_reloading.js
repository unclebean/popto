// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28381__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28381__auto__){
return or__28381__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28381__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33530_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33530_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33535 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33536 = null;
var count__33537 = (0);
var i__33538 = (0);
while(true){
if((i__33538 < count__33537)){
var n = cljs.core._nth.call(null,chunk__33536,i__33538);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33539 = seq__33535;
var G__33540 = chunk__33536;
var G__33541 = count__33537;
var G__33542 = (i__33538 + (1));
seq__33535 = G__33539;
chunk__33536 = G__33540;
count__33537 = G__33541;
i__33538 = G__33542;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33535);
if(temp__4657__auto__){
var seq__33535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33535__$1)){
var c__29192__auto__ = cljs.core.chunk_first.call(null,seq__33535__$1);
var G__33543 = cljs.core.chunk_rest.call(null,seq__33535__$1);
var G__33544 = c__29192__auto__;
var G__33545 = cljs.core.count.call(null,c__29192__auto__);
var G__33546 = (0);
seq__33535 = G__33543;
chunk__33536 = G__33544;
count__33537 = G__33545;
i__33538 = G__33546;
continue;
} else {
var n = cljs.core.first.call(null,seq__33535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33547 = cljs.core.next.call(null,seq__33535__$1);
var G__33548 = null;
var G__33549 = (0);
var G__33550 = (0);
seq__33535 = G__33547;
chunk__33536 = G__33548;
count__33537 = G__33549;
i__33538 = G__33550;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33601_33612 = cljs.core.seq.call(null,deps);
var chunk__33602_33613 = null;
var count__33603_33614 = (0);
var i__33604_33615 = (0);
while(true){
if((i__33604_33615 < count__33603_33614)){
var dep_33616 = cljs.core._nth.call(null,chunk__33602_33613,i__33604_33615);
topo_sort_helper_STAR_.call(null,dep_33616,(depth + (1)),state);

var G__33617 = seq__33601_33612;
var G__33618 = chunk__33602_33613;
var G__33619 = count__33603_33614;
var G__33620 = (i__33604_33615 + (1));
seq__33601_33612 = G__33617;
chunk__33602_33613 = G__33618;
count__33603_33614 = G__33619;
i__33604_33615 = G__33620;
continue;
} else {
var temp__4657__auto___33621 = cljs.core.seq.call(null,seq__33601_33612);
if(temp__4657__auto___33621){
var seq__33601_33622__$1 = temp__4657__auto___33621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33601_33622__$1)){
var c__29192__auto___33623 = cljs.core.chunk_first.call(null,seq__33601_33622__$1);
var G__33624 = cljs.core.chunk_rest.call(null,seq__33601_33622__$1);
var G__33625 = c__29192__auto___33623;
var G__33626 = cljs.core.count.call(null,c__29192__auto___33623);
var G__33627 = (0);
seq__33601_33612 = G__33624;
chunk__33602_33613 = G__33625;
count__33603_33614 = G__33626;
i__33604_33615 = G__33627;
continue;
} else {
var dep_33628 = cljs.core.first.call(null,seq__33601_33622__$1);
topo_sort_helper_STAR_.call(null,dep_33628,(depth + (1)),state);

var G__33629 = cljs.core.next.call(null,seq__33601_33622__$1);
var G__33630 = null;
var G__33631 = (0);
var G__33632 = (0);
seq__33601_33612 = G__33629;
chunk__33602_33613 = G__33630;
count__33603_33614 = G__33631;
i__33604_33615 = G__33632;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33605){
var vec__33609 = p__33605;
var seq__33610 = cljs.core.seq.call(null,vec__33609);
var first__33611 = cljs.core.first.call(null,seq__33610);
var seq__33610__$1 = cljs.core.next.call(null,seq__33610);
var x = first__33611;
var xs = seq__33610__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33609,seq__33610,first__33611,seq__33610__$1,x,xs,get_deps__$1){
return (function (p1__33551_SHARP_){
return clojure.set.difference.call(null,p1__33551_SHARP_,x);
});})(vec__33609,seq__33610,first__33611,seq__33610__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33645 = cljs.core.seq.call(null,provides);
var chunk__33646 = null;
var count__33647 = (0);
var i__33648 = (0);
while(true){
if((i__33648 < count__33647)){
var prov = cljs.core._nth.call(null,chunk__33646,i__33648);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33649_33657 = cljs.core.seq.call(null,requires);
var chunk__33650_33658 = null;
var count__33651_33659 = (0);
var i__33652_33660 = (0);
while(true){
if((i__33652_33660 < count__33651_33659)){
var req_33661 = cljs.core._nth.call(null,chunk__33650_33658,i__33652_33660);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33661,prov);

var G__33662 = seq__33649_33657;
var G__33663 = chunk__33650_33658;
var G__33664 = count__33651_33659;
var G__33665 = (i__33652_33660 + (1));
seq__33649_33657 = G__33662;
chunk__33650_33658 = G__33663;
count__33651_33659 = G__33664;
i__33652_33660 = G__33665;
continue;
} else {
var temp__4657__auto___33666 = cljs.core.seq.call(null,seq__33649_33657);
if(temp__4657__auto___33666){
var seq__33649_33667__$1 = temp__4657__auto___33666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33649_33667__$1)){
var c__29192__auto___33668 = cljs.core.chunk_first.call(null,seq__33649_33667__$1);
var G__33669 = cljs.core.chunk_rest.call(null,seq__33649_33667__$1);
var G__33670 = c__29192__auto___33668;
var G__33671 = cljs.core.count.call(null,c__29192__auto___33668);
var G__33672 = (0);
seq__33649_33657 = G__33669;
chunk__33650_33658 = G__33670;
count__33651_33659 = G__33671;
i__33652_33660 = G__33672;
continue;
} else {
var req_33673 = cljs.core.first.call(null,seq__33649_33667__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33673,prov);

var G__33674 = cljs.core.next.call(null,seq__33649_33667__$1);
var G__33675 = null;
var G__33676 = (0);
var G__33677 = (0);
seq__33649_33657 = G__33674;
chunk__33650_33658 = G__33675;
count__33651_33659 = G__33676;
i__33652_33660 = G__33677;
continue;
}
} else {
}
}
break;
}

var G__33678 = seq__33645;
var G__33679 = chunk__33646;
var G__33680 = count__33647;
var G__33681 = (i__33648 + (1));
seq__33645 = G__33678;
chunk__33646 = G__33679;
count__33647 = G__33680;
i__33648 = G__33681;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33645);
if(temp__4657__auto__){
var seq__33645__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33645__$1)){
var c__29192__auto__ = cljs.core.chunk_first.call(null,seq__33645__$1);
var G__33682 = cljs.core.chunk_rest.call(null,seq__33645__$1);
var G__33683 = c__29192__auto__;
var G__33684 = cljs.core.count.call(null,c__29192__auto__);
var G__33685 = (0);
seq__33645 = G__33682;
chunk__33646 = G__33683;
count__33647 = G__33684;
i__33648 = G__33685;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33645__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33653_33686 = cljs.core.seq.call(null,requires);
var chunk__33654_33687 = null;
var count__33655_33688 = (0);
var i__33656_33689 = (0);
while(true){
if((i__33656_33689 < count__33655_33688)){
var req_33690 = cljs.core._nth.call(null,chunk__33654_33687,i__33656_33689);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33690,prov);

var G__33691 = seq__33653_33686;
var G__33692 = chunk__33654_33687;
var G__33693 = count__33655_33688;
var G__33694 = (i__33656_33689 + (1));
seq__33653_33686 = G__33691;
chunk__33654_33687 = G__33692;
count__33655_33688 = G__33693;
i__33656_33689 = G__33694;
continue;
} else {
var temp__4657__auto___33695__$1 = cljs.core.seq.call(null,seq__33653_33686);
if(temp__4657__auto___33695__$1){
var seq__33653_33696__$1 = temp__4657__auto___33695__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33653_33696__$1)){
var c__29192__auto___33697 = cljs.core.chunk_first.call(null,seq__33653_33696__$1);
var G__33698 = cljs.core.chunk_rest.call(null,seq__33653_33696__$1);
var G__33699 = c__29192__auto___33697;
var G__33700 = cljs.core.count.call(null,c__29192__auto___33697);
var G__33701 = (0);
seq__33653_33686 = G__33698;
chunk__33654_33687 = G__33699;
count__33655_33688 = G__33700;
i__33656_33689 = G__33701;
continue;
} else {
var req_33702 = cljs.core.first.call(null,seq__33653_33696__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33702,prov);

var G__33703 = cljs.core.next.call(null,seq__33653_33696__$1);
var G__33704 = null;
var G__33705 = (0);
var G__33706 = (0);
seq__33653_33686 = G__33703;
chunk__33654_33687 = G__33704;
count__33655_33688 = G__33705;
i__33656_33689 = G__33706;
continue;
}
} else {
}
}
break;
}

var G__33707 = cljs.core.next.call(null,seq__33645__$1);
var G__33708 = null;
var G__33709 = (0);
var G__33710 = (0);
seq__33645 = G__33707;
chunk__33646 = G__33708;
count__33647 = G__33709;
i__33648 = G__33710;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33715_33719 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33716_33720 = null;
var count__33717_33721 = (0);
var i__33718_33722 = (0);
while(true){
if((i__33718_33722 < count__33717_33721)){
var ns_33723 = cljs.core._nth.call(null,chunk__33716_33720,i__33718_33722);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33723);

var G__33724 = seq__33715_33719;
var G__33725 = chunk__33716_33720;
var G__33726 = count__33717_33721;
var G__33727 = (i__33718_33722 + (1));
seq__33715_33719 = G__33724;
chunk__33716_33720 = G__33725;
count__33717_33721 = G__33726;
i__33718_33722 = G__33727;
continue;
} else {
var temp__4657__auto___33728 = cljs.core.seq.call(null,seq__33715_33719);
if(temp__4657__auto___33728){
var seq__33715_33729__$1 = temp__4657__auto___33728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33715_33729__$1)){
var c__29192__auto___33730 = cljs.core.chunk_first.call(null,seq__33715_33729__$1);
var G__33731 = cljs.core.chunk_rest.call(null,seq__33715_33729__$1);
var G__33732 = c__29192__auto___33730;
var G__33733 = cljs.core.count.call(null,c__29192__auto___33730);
var G__33734 = (0);
seq__33715_33719 = G__33731;
chunk__33716_33720 = G__33732;
count__33717_33721 = G__33733;
i__33718_33722 = G__33734;
continue;
} else {
var ns_33735 = cljs.core.first.call(null,seq__33715_33729__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33735);

var G__33736 = cljs.core.next.call(null,seq__33715_33729__$1);
var G__33737 = null;
var G__33738 = (0);
var G__33739 = (0);
seq__33715_33719 = G__33736;
chunk__33716_33720 = G__33737;
count__33717_33721 = G__33738;
i__33718_33722 = G__33739;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28381__auto__ = goog.require__;
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33740__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33741__i = 0, G__33741__a = new Array(arguments.length -  0);
while (G__33741__i < G__33741__a.length) {G__33741__a[G__33741__i] = arguments[G__33741__i + 0]; ++G__33741__i;}
  args = new cljs.core.IndexedSeq(G__33741__a,0);
} 
return G__33740__delegate.call(this,args);};
G__33740.cljs$lang$maxFixedArity = 0;
G__33740.cljs$lang$applyTo = (function (arglist__33742){
var args = cljs.core.seq(arglist__33742);
return G__33740__delegate(args);
});
G__33740.cljs$core$IFn$_invoke$arity$variadic = G__33740__delegate;
return G__33740;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33744 = cljs.core._EQ_;
var expr__33745 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33744.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33745))){
var path_parts = ((function (pred__33744,expr__33745){
return (function (p1__33743_SHARP_){
return clojure.string.split.call(null,p1__33743_SHARP_,/[\/\\]/);
});})(pred__33744,expr__33745))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33744,expr__33745){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33747){if((e33747 instanceof Error)){
var e = e33747;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33747;

}
}})());
});
;})(path_parts,sep,root,pred__33744,expr__33745))
} else {
if(cljs.core.truth_(pred__33744.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33745))){
return ((function (pred__33744,expr__33745){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__33744,expr__33745){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33744,expr__33745))
);

return deferred.addErrback(((function (deferred,pred__33744,expr__33745){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33744,expr__33745))
);
});
;})(pred__33744,expr__33745))
} else {
return ((function (pred__33744,expr__33745){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33744,expr__33745))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33748,callback){
var map__33751 = p__33748;
var map__33751__$1 = ((((!((map__33751 == null)))?((((map__33751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33751):map__33751);
var file_msg = map__33751__$1;
var request_url = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33751,map__33751__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33751,map__33751__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__){
return (function (state_33775){
var state_val_33776 = (state_33775[(1)]);
if((state_val_33776 === (7))){
var inst_33771 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33777_33797 = state_33775__$1;
(statearr_33777_33797[(2)] = inst_33771);

(statearr_33777_33797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (1))){
var state_33775__$1 = state_33775;
var statearr_33778_33798 = state_33775__$1;
(statearr_33778_33798[(2)] = null);

(statearr_33778_33798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (4))){
var inst_33755 = (state_33775[(7)]);
var inst_33755__$1 = (state_33775[(2)]);
var state_33775__$1 = (function (){var statearr_33779 = state_33775;
(statearr_33779[(7)] = inst_33755__$1);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33755__$1)){
var statearr_33780_33799 = state_33775__$1;
(statearr_33780_33799[(1)] = (5));

} else {
var statearr_33781_33800 = state_33775__$1;
(statearr_33781_33800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (6))){
var state_33775__$1 = state_33775;
var statearr_33782_33801 = state_33775__$1;
(statearr_33782_33801[(2)] = null);

(statearr_33782_33801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (3))){
var inst_33773 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33775__$1,inst_33773);
} else {
if((state_val_33776 === (2))){
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33776 === (11))){
var inst_33767 = (state_33775[(2)]);
var state_33775__$1 = (function (){var statearr_33783 = state_33775;
(statearr_33783[(8)] = inst_33767);

return statearr_33783;
})();
var statearr_33784_33802 = state_33775__$1;
(statearr_33784_33802[(2)] = null);

(statearr_33784_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (9))){
var inst_33759 = (state_33775[(9)]);
var inst_33761 = (state_33775[(10)]);
var inst_33763 = inst_33761.call(null,inst_33759);
var state_33775__$1 = state_33775;
var statearr_33785_33803 = state_33775__$1;
(statearr_33785_33803[(2)] = inst_33763);

(statearr_33785_33803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (5))){
var inst_33755 = (state_33775[(7)]);
var inst_33757 = figwheel.client.file_reloading.blocking_load.call(null,inst_33755);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(8),inst_33757);
} else {
if((state_val_33776 === (10))){
var inst_33759 = (state_33775[(9)]);
var inst_33765 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33759);
var state_33775__$1 = state_33775;
var statearr_33786_33804 = state_33775__$1;
(statearr_33786_33804[(2)] = inst_33765);

(statearr_33786_33804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (8))){
var inst_33761 = (state_33775[(10)]);
var inst_33755 = (state_33775[(7)]);
var inst_33759 = (state_33775[(2)]);
var inst_33760 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33761__$1 = cljs.core.get.call(null,inst_33760,inst_33755);
var state_33775__$1 = (function (){var statearr_33787 = state_33775;
(statearr_33787[(9)] = inst_33759);

(statearr_33787[(10)] = inst_33761__$1);

return statearr_33787;
})();
if(cljs.core.truth_(inst_33761__$1)){
var statearr_33788_33805 = state_33775__$1;
(statearr_33788_33805[(1)] = (9));

} else {
var statearr_33789_33806 = state_33775__$1;
(statearr_33789_33806[(1)] = (10));

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
});})(c__30553__auto__))
;
return ((function (switch__30399__auto__,c__30553__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30400__auto__ = null;
var figwheel$client$file_reloading$state_machine__30400__auto____0 = (function (){
var statearr_33793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33793[(0)] = figwheel$client$file_reloading$state_machine__30400__auto__);

(statearr_33793[(1)] = (1));

return statearr_33793;
});
var figwheel$client$file_reloading$state_machine__30400__auto____1 = (function (state_33775){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33794){if((e33794 instanceof Object)){
var ex__30403__auto__ = e33794;
var statearr_33795_33807 = state_33775;
(statearr_33795_33807[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_33775;
state_33775 = G__33808;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30400__auto__ = function(state_33775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30400__auto____1.call(this,state_33775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30400__auto____0;
figwheel$client$file_reloading$state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30400__auto____1;
return figwheel$client$file_reloading$state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__))
})();
var state__30555__auto__ = (function (){var statearr_33796 = f__30554__auto__.call(null);
(statearr_33796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_33796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__))
);

return c__30553__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33809,callback){
var map__33812 = p__33809;
var map__33812__$1 = ((((!((map__33812 == null)))?((((map__33812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33812):map__33812);
var file_msg = map__33812__$1;
var namespace = cljs.core.get.call(null,map__33812__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33812,map__33812__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33812,map__33812__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33814){
var map__33817 = p__33814;
var map__33817__$1 = ((((!((map__33817 == null)))?((((map__33817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33817):map__33817);
var file_msg = map__33817__$1;
var namespace = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28369__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__28369__auto__){
var or__28381__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28381__auto__)){
return or__28381__auto__;
} else {
var or__28381__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28381__auto____$1)){
return or__28381__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28369__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33819,callback){
var map__33822 = p__33819;
var map__33822__$1 = ((((!((map__33822 == null)))?((((map__33822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33822):map__33822);
var file_msg = map__33822__$1;
var request_url = cljs.core.get.call(null,map__33822__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30553__auto___33926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto___33926,out){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto___33926,out){
return (function (state_33908){
var state_val_33909 = (state_33908[(1)]);
if((state_val_33909 === (1))){
var inst_33882 = cljs.core.seq.call(null,files);
var inst_33883 = cljs.core.first.call(null,inst_33882);
var inst_33884 = cljs.core.next.call(null,inst_33882);
var inst_33885 = files;
var state_33908__$1 = (function (){var statearr_33910 = state_33908;
(statearr_33910[(7)] = inst_33883);

(statearr_33910[(8)] = inst_33885);

(statearr_33910[(9)] = inst_33884);

return statearr_33910;
})();
var statearr_33911_33927 = state_33908__$1;
(statearr_33911_33927[(2)] = null);

(statearr_33911_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (2))){
var inst_33885 = (state_33908[(8)]);
var inst_33891 = (state_33908[(10)]);
var inst_33890 = cljs.core.seq.call(null,inst_33885);
var inst_33891__$1 = cljs.core.first.call(null,inst_33890);
var inst_33892 = cljs.core.next.call(null,inst_33890);
var inst_33893 = (inst_33891__$1 == null);
var inst_33894 = cljs.core.not.call(null,inst_33893);
var state_33908__$1 = (function (){var statearr_33912 = state_33908;
(statearr_33912[(11)] = inst_33892);

(statearr_33912[(10)] = inst_33891__$1);

return statearr_33912;
})();
if(inst_33894){
var statearr_33913_33928 = state_33908__$1;
(statearr_33913_33928[(1)] = (4));

} else {
var statearr_33914_33929 = state_33908__$1;
(statearr_33914_33929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (3))){
var inst_33906 = (state_33908[(2)]);
var state_33908__$1 = state_33908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33908__$1,inst_33906);
} else {
if((state_val_33909 === (4))){
var inst_33891 = (state_33908[(10)]);
var inst_33896 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33891);
var state_33908__$1 = state_33908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33908__$1,(7),inst_33896);
} else {
if((state_val_33909 === (5))){
var inst_33902 = cljs.core.async.close_BANG_.call(null,out);
var state_33908__$1 = state_33908;
var statearr_33915_33930 = state_33908__$1;
(statearr_33915_33930[(2)] = inst_33902);

(statearr_33915_33930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (6))){
var inst_33904 = (state_33908[(2)]);
var state_33908__$1 = state_33908;
var statearr_33916_33931 = state_33908__$1;
(statearr_33916_33931[(2)] = inst_33904);

(statearr_33916_33931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (7))){
var inst_33892 = (state_33908[(11)]);
var inst_33898 = (state_33908[(2)]);
var inst_33899 = cljs.core.async.put_BANG_.call(null,out,inst_33898);
var inst_33885 = inst_33892;
var state_33908__$1 = (function (){var statearr_33917 = state_33908;
(statearr_33917[(8)] = inst_33885);

(statearr_33917[(12)] = inst_33899);

return statearr_33917;
})();
var statearr_33918_33932 = state_33908__$1;
(statearr_33918_33932[(2)] = null);

(statearr_33918_33932[(1)] = (2));


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
});})(c__30553__auto___33926,out))
;
return ((function (switch__30399__auto__,c__30553__auto___33926,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____0 = (function (){
var statearr_33922 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33922[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__);

(statearr_33922[(1)] = (1));

return statearr_33922;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____1 = (function (state_33908){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_33908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e33923){if((e33923 instanceof Object)){
var ex__30403__auto__ = e33923;
var statearr_33924_33933 = state_33908;
(statearr_33924_33933[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33934 = state_33908;
state_33908 = G__33934;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__ = function(state_33908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____1.call(this,state_33908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto___33926,out))
})();
var state__30555__auto__ = (function (){var statearr_33925 = f__30554__auto__.call(null);
(statearr_33925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto___33926);

return statearr_33925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto___33926,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33935,opts){
var map__33939 = p__33935;
var map__33939__$1 = ((((!((map__33939 == null)))?((((map__33939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33939):map__33939);
var eval_body__$1 = cljs.core.get.call(null,map__33939__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28369__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28369__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28369__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33941){var e = e33941;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33942_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33942_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33951){
var vec__33952 = p__33951;
var k = cljs.core.nth.call(null,vec__33952,(0),null);
var v = cljs.core.nth.call(null,vec__33952,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33955){
var vec__33956 = p__33955;
var k = cljs.core.nth.call(null,vec__33956,(0),null);
var v = cljs.core.nth.call(null,vec__33956,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33962,p__33963){
var map__34210 = p__33962;
var map__34210__$1 = ((((!((map__34210 == null)))?((((map__34210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34210):map__34210);
var opts = map__34210__$1;
var before_jsload = cljs.core.get.call(null,map__34210__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34210__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34210__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34211 = p__33963;
var map__34211__$1 = ((((!((map__34211 == null)))?((((map__34211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34211):map__34211);
var msg = map__34211__$1;
var files = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34211__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30554__auto__ = (function (){var switch__30399__auto__ = ((function (c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (7))){
var inst_34227 = (state_34364[(7)]);
var inst_34225 = (state_34364[(8)]);
var inst_34226 = (state_34364[(9)]);
var inst_34228 = (state_34364[(10)]);
var inst_34233 = cljs.core._nth.call(null,inst_34226,inst_34228);
var inst_34234 = figwheel.client.file_reloading.eval_body.call(null,inst_34233,opts);
var inst_34235 = (inst_34228 + (1));
var tmp34366 = inst_34227;
var tmp34367 = inst_34225;
var tmp34368 = inst_34226;
var inst_34225__$1 = tmp34367;
var inst_34226__$1 = tmp34368;
var inst_34227__$1 = tmp34366;
var inst_34228__$1 = inst_34235;
var state_34364__$1 = (function (){var statearr_34369 = state_34364;
(statearr_34369[(7)] = inst_34227__$1);

(statearr_34369[(11)] = inst_34234);

(statearr_34369[(8)] = inst_34225__$1);

(statearr_34369[(9)] = inst_34226__$1);

(statearr_34369[(10)] = inst_34228__$1);

return statearr_34369;
})();
var statearr_34370_34456 = state_34364__$1;
(statearr_34370_34456[(2)] = null);

(statearr_34370_34456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (20))){
var inst_34268 = (state_34364[(12)]);
var inst_34276 = figwheel.client.file_reloading.sort_files.call(null,inst_34268);
var state_34364__$1 = state_34364;
var statearr_34371_34457 = state_34364__$1;
(statearr_34371_34457[(2)] = inst_34276);

(statearr_34371_34457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (27))){
var state_34364__$1 = state_34364;
var statearr_34372_34458 = state_34364__$1;
(statearr_34372_34458[(2)] = null);

(statearr_34372_34458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (1))){
var inst_34217 = (state_34364[(13)]);
var inst_34214 = before_jsload.call(null,files);
var inst_34215 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34216 = (function (){return ((function (inst_34217,inst_34214,inst_34215,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33959_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33959_SHARP_);
});
;})(inst_34217,inst_34214,inst_34215,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34217__$1 = cljs.core.filter.call(null,inst_34216,files);
var inst_34218 = cljs.core.not_empty.call(null,inst_34217__$1);
var state_34364__$1 = (function (){var statearr_34373 = state_34364;
(statearr_34373[(13)] = inst_34217__$1);

(statearr_34373[(14)] = inst_34215);

(statearr_34373[(15)] = inst_34214);

return statearr_34373;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34374_34459 = state_34364__$1;
(statearr_34374_34459[(1)] = (2));

} else {
var statearr_34375_34460 = state_34364__$1;
(statearr_34375_34460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (24))){
var state_34364__$1 = state_34364;
var statearr_34376_34461 = state_34364__$1;
(statearr_34376_34461[(2)] = null);

(statearr_34376_34461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (39))){
var inst_34318 = (state_34364[(16)]);
var state_34364__$1 = state_34364;
var statearr_34377_34462 = state_34364__$1;
(statearr_34377_34462[(2)] = inst_34318);

(statearr_34377_34462[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (46))){
var inst_34359 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34378_34463 = state_34364__$1;
(statearr_34378_34463[(2)] = inst_34359);

(statearr_34378_34463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (4))){
var inst_34262 = (state_34364[(2)]);
var inst_34263 = cljs.core.List.EMPTY;
var inst_34264 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34263);
var inst_34265 = (function (){return ((function (inst_34262,inst_34263,inst_34264,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33960_SHARP_){
var and__28369__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33960_SHARP_);
if(cljs.core.truth_(and__28369__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33960_SHARP_));
} else {
return and__28369__auto__;
}
});
;})(inst_34262,inst_34263,inst_34264,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34266 = cljs.core.filter.call(null,inst_34265,files);
var inst_34267 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34268 = cljs.core.concat.call(null,inst_34266,inst_34267);
var state_34364__$1 = (function (){var statearr_34379 = state_34364;
(statearr_34379[(12)] = inst_34268);

(statearr_34379[(17)] = inst_34264);

(statearr_34379[(18)] = inst_34262);

return statearr_34379;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34380_34464 = state_34364__$1;
(statearr_34380_34464[(1)] = (16));

} else {
var statearr_34381_34465 = state_34364__$1;
(statearr_34381_34465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (15))){
var inst_34252 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34382_34466 = state_34364__$1;
(statearr_34382_34466[(2)] = inst_34252);

(statearr_34382_34466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (21))){
var inst_34278 = (state_34364[(19)]);
var inst_34278__$1 = (state_34364[(2)]);
var inst_34279 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34278__$1);
var state_34364__$1 = (function (){var statearr_34383 = state_34364;
(statearr_34383[(19)] = inst_34278__$1);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(22),inst_34279);
} else {
if((state_val_34365 === (31))){
var inst_34362 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34364__$1,inst_34362);
} else {
if((state_val_34365 === (32))){
var inst_34318 = (state_34364[(16)]);
var inst_34323 = inst_34318.cljs$lang$protocol_mask$partition0$;
var inst_34324 = (inst_34323 & (64));
var inst_34325 = inst_34318.cljs$core$ISeq$;
var inst_34326 = (inst_34324) || (inst_34325);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34326)){
var statearr_34384_34467 = state_34364__$1;
(statearr_34384_34467[(1)] = (35));

} else {
var statearr_34385_34468 = state_34364__$1;
(statearr_34385_34468[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (40))){
var inst_34339 = (state_34364[(20)]);
var inst_34338 = (state_34364[(2)]);
var inst_34339__$1 = cljs.core.get.call(null,inst_34338,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34340 = cljs.core.get.call(null,inst_34338,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34341 = cljs.core.not_empty.call(null,inst_34339__$1);
var state_34364__$1 = (function (){var statearr_34386 = state_34364;
(statearr_34386[(20)] = inst_34339__$1);

(statearr_34386[(21)] = inst_34340);

return statearr_34386;
})();
if(cljs.core.truth_(inst_34341)){
var statearr_34387_34469 = state_34364__$1;
(statearr_34387_34469[(1)] = (41));

} else {
var statearr_34388_34470 = state_34364__$1;
(statearr_34388_34470[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (33))){
var state_34364__$1 = state_34364;
var statearr_34389_34471 = state_34364__$1;
(statearr_34389_34471[(2)] = false);

(statearr_34389_34471[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (13))){
var inst_34238 = (state_34364[(22)]);
var inst_34242 = cljs.core.chunk_first.call(null,inst_34238);
var inst_34243 = cljs.core.chunk_rest.call(null,inst_34238);
var inst_34244 = cljs.core.count.call(null,inst_34242);
var inst_34225 = inst_34243;
var inst_34226 = inst_34242;
var inst_34227 = inst_34244;
var inst_34228 = (0);
var state_34364__$1 = (function (){var statearr_34390 = state_34364;
(statearr_34390[(7)] = inst_34227);

(statearr_34390[(8)] = inst_34225);

(statearr_34390[(9)] = inst_34226);

(statearr_34390[(10)] = inst_34228);

return statearr_34390;
})();
var statearr_34391_34472 = state_34364__$1;
(statearr_34391_34472[(2)] = null);

(statearr_34391_34472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (22))){
var inst_34286 = (state_34364[(23)]);
var inst_34278 = (state_34364[(19)]);
var inst_34282 = (state_34364[(24)]);
var inst_34281 = (state_34364[(25)]);
var inst_34281__$1 = (state_34364[(2)]);
var inst_34282__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34281__$1);
var inst_34283 = (function (){var all_files = inst_34278;
var res_SINGLEQUOTE_ = inst_34281__$1;
var res = inst_34282__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34286,inst_34278,inst_34282,inst_34281,inst_34281__$1,inst_34282__$1,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33961_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33961_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34286,inst_34278,inst_34282,inst_34281,inst_34281__$1,inst_34282__$1,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34284 = cljs.core.filter.call(null,inst_34283,inst_34281__$1);
var inst_34285 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34286__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34285);
var inst_34287 = cljs.core.not_empty.call(null,inst_34286__$1);
var state_34364__$1 = (function (){var statearr_34392 = state_34364;
(statearr_34392[(26)] = inst_34284);

(statearr_34392[(23)] = inst_34286__$1);

(statearr_34392[(24)] = inst_34282__$1);

(statearr_34392[(25)] = inst_34281__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34287)){
var statearr_34393_34473 = state_34364__$1;
(statearr_34393_34473[(1)] = (23));

} else {
var statearr_34394_34474 = state_34364__$1;
(statearr_34394_34474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (36))){
var state_34364__$1 = state_34364;
var statearr_34395_34475 = state_34364__$1;
(statearr_34395_34475[(2)] = false);

(statearr_34395_34475[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (41))){
var inst_34339 = (state_34364[(20)]);
var inst_34343 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34344 = cljs.core.map.call(null,inst_34343,inst_34339);
var inst_34345 = cljs.core.pr_str.call(null,inst_34344);
var inst_34346 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34345)].join('');
var inst_34347 = figwheel.client.utils.log.call(null,inst_34346);
var state_34364__$1 = state_34364;
var statearr_34396_34476 = state_34364__$1;
(statearr_34396_34476[(2)] = inst_34347);

(statearr_34396_34476[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (43))){
var inst_34340 = (state_34364[(21)]);
var inst_34350 = (state_34364[(2)]);
var inst_34351 = cljs.core.not_empty.call(null,inst_34340);
var state_34364__$1 = (function (){var statearr_34397 = state_34364;
(statearr_34397[(27)] = inst_34350);

return statearr_34397;
})();
if(cljs.core.truth_(inst_34351)){
var statearr_34398_34477 = state_34364__$1;
(statearr_34398_34477[(1)] = (44));

} else {
var statearr_34399_34478 = state_34364__$1;
(statearr_34399_34478[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (29))){
var inst_34318 = (state_34364[(16)]);
var inst_34284 = (state_34364[(26)]);
var inst_34286 = (state_34364[(23)]);
var inst_34278 = (state_34364[(19)]);
var inst_34282 = (state_34364[(24)]);
var inst_34281 = (state_34364[(25)]);
var inst_34314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34317 = (function (){var all_files = inst_34278;
var res_SINGLEQUOTE_ = inst_34281;
var res = inst_34282;
var files_not_loaded = inst_34284;
var dependencies_that_loaded = inst_34286;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34318,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34314,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34316){
var map__34400 = p__34316;
var map__34400__$1 = ((((!((map__34400 == null)))?((((map__34400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34400):map__34400);
var namespace = cljs.core.get.call(null,map__34400__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34318,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34314,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34318__$1 = cljs.core.group_by.call(null,inst_34317,inst_34284);
var inst_34320 = (inst_34318__$1 == null);
var inst_34321 = cljs.core.not.call(null,inst_34320);
var state_34364__$1 = (function (){var statearr_34402 = state_34364;
(statearr_34402[(16)] = inst_34318__$1);

(statearr_34402[(28)] = inst_34314);

return statearr_34402;
})();
if(inst_34321){
var statearr_34403_34479 = state_34364__$1;
(statearr_34403_34479[(1)] = (32));

} else {
var statearr_34404_34480 = state_34364__$1;
(statearr_34404_34480[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (44))){
var inst_34340 = (state_34364[(21)]);
var inst_34353 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34340);
var inst_34354 = cljs.core.pr_str.call(null,inst_34353);
var inst_34355 = [cljs.core.str("not required: "),cljs.core.str(inst_34354)].join('');
var inst_34356 = figwheel.client.utils.log.call(null,inst_34355);
var state_34364__$1 = state_34364;
var statearr_34405_34481 = state_34364__$1;
(statearr_34405_34481[(2)] = inst_34356);

(statearr_34405_34481[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (6))){
var inst_34259 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34406_34482 = state_34364__$1;
(statearr_34406_34482[(2)] = inst_34259);

(statearr_34406_34482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (28))){
var inst_34284 = (state_34364[(26)]);
var inst_34311 = (state_34364[(2)]);
var inst_34312 = cljs.core.not_empty.call(null,inst_34284);
var state_34364__$1 = (function (){var statearr_34407 = state_34364;
(statearr_34407[(29)] = inst_34311);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34312)){
var statearr_34408_34483 = state_34364__$1;
(statearr_34408_34483[(1)] = (29));

} else {
var statearr_34409_34484 = state_34364__$1;
(statearr_34409_34484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (25))){
var inst_34282 = (state_34364[(24)]);
var inst_34298 = (state_34364[(2)]);
var inst_34299 = cljs.core.not_empty.call(null,inst_34282);
var state_34364__$1 = (function (){var statearr_34410 = state_34364;
(statearr_34410[(30)] = inst_34298);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34411_34485 = state_34364__$1;
(statearr_34411_34485[(1)] = (26));

} else {
var statearr_34412_34486 = state_34364__$1;
(statearr_34412_34486[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (34))){
var inst_34333 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34333)){
var statearr_34413_34487 = state_34364__$1;
(statearr_34413_34487[(1)] = (38));

} else {
var statearr_34414_34488 = state_34364__$1;
(statearr_34414_34488[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (17))){
var state_34364__$1 = state_34364;
var statearr_34415_34489 = state_34364__$1;
(statearr_34415_34489[(2)] = recompile_dependents);

(statearr_34415_34489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (3))){
var state_34364__$1 = state_34364;
var statearr_34416_34490 = state_34364__$1;
(statearr_34416_34490[(2)] = null);

(statearr_34416_34490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (12))){
var inst_34255 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34417_34491 = state_34364__$1;
(statearr_34417_34491[(2)] = inst_34255);

(statearr_34417_34491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (2))){
var inst_34217 = (state_34364[(13)]);
var inst_34224 = cljs.core.seq.call(null,inst_34217);
var inst_34225 = inst_34224;
var inst_34226 = null;
var inst_34227 = (0);
var inst_34228 = (0);
var state_34364__$1 = (function (){var statearr_34418 = state_34364;
(statearr_34418[(7)] = inst_34227);

(statearr_34418[(8)] = inst_34225);

(statearr_34418[(9)] = inst_34226);

(statearr_34418[(10)] = inst_34228);

return statearr_34418;
})();
var statearr_34419_34492 = state_34364__$1;
(statearr_34419_34492[(2)] = null);

(statearr_34419_34492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (23))){
var inst_34284 = (state_34364[(26)]);
var inst_34286 = (state_34364[(23)]);
var inst_34278 = (state_34364[(19)]);
var inst_34282 = (state_34364[(24)]);
var inst_34281 = (state_34364[(25)]);
var inst_34289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34291 = (function (){var all_files = inst_34278;
var res_SINGLEQUOTE_ = inst_34281;
var res = inst_34282;
var files_not_loaded = inst_34284;
var dependencies_that_loaded = inst_34286;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34289,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34290){
var map__34420 = p__34290;
var map__34420__$1 = ((((!((map__34420 == null)))?((((map__34420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34420):map__34420);
var request_url = cljs.core.get.call(null,map__34420__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34289,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34292 = cljs.core.reverse.call(null,inst_34286);
var inst_34293 = cljs.core.map.call(null,inst_34291,inst_34292);
var inst_34294 = cljs.core.pr_str.call(null,inst_34293);
var inst_34295 = figwheel.client.utils.log.call(null,inst_34294);
var state_34364__$1 = (function (){var statearr_34422 = state_34364;
(statearr_34422[(31)] = inst_34289);

return statearr_34422;
})();
var statearr_34423_34493 = state_34364__$1;
(statearr_34423_34493[(2)] = inst_34295);

(statearr_34423_34493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (35))){
var state_34364__$1 = state_34364;
var statearr_34424_34494 = state_34364__$1;
(statearr_34424_34494[(2)] = true);

(statearr_34424_34494[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (19))){
var inst_34268 = (state_34364[(12)]);
var inst_34274 = figwheel.client.file_reloading.expand_files.call(null,inst_34268);
var state_34364__$1 = state_34364;
var statearr_34425_34495 = state_34364__$1;
(statearr_34425_34495[(2)] = inst_34274);

(statearr_34425_34495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (11))){
var state_34364__$1 = state_34364;
var statearr_34426_34496 = state_34364__$1;
(statearr_34426_34496[(2)] = null);

(statearr_34426_34496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (9))){
var inst_34257 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34427_34497 = state_34364__$1;
(statearr_34427_34497[(2)] = inst_34257);

(statearr_34427_34497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (5))){
var inst_34227 = (state_34364[(7)]);
var inst_34228 = (state_34364[(10)]);
var inst_34230 = (inst_34228 < inst_34227);
var inst_34231 = inst_34230;
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34231)){
var statearr_34428_34498 = state_34364__$1;
(statearr_34428_34498[(1)] = (7));

} else {
var statearr_34429_34499 = state_34364__$1;
(statearr_34429_34499[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (14))){
var inst_34238 = (state_34364[(22)]);
var inst_34247 = cljs.core.first.call(null,inst_34238);
var inst_34248 = figwheel.client.file_reloading.eval_body.call(null,inst_34247,opts);
var inst_34249 = cljs.core.next.call(null,inst_34238);
var inst_34225 = inst_34249;
var inst_34226 = null;
var inst_34227 = (0);
var inst_34228 = (0);
var state_34364__$1 = (function (){var statearr_34430 = state_34364;
(statearr_34430[(7)] = inst_34227);

(statearr_34430[(32)] = inst_34248);

(statearr_34430[(8)] = inst_34225);

(statearr_34430[(9)] = inst_34226);

(statearr_34430[(10)] = inst_34228);

return statearr_34430;
})();
var statearr_34431_34500 = state_34364__$1;
(statearr_34431_34500[(2)] = null);

(statearr_34431_34500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (45))){
var state_34364__$1 = state_34364;
var statearr_34432_34501 = state_34364__$1;
(statearr_34432_34501[(2)] = null);

(statearr_34432_34501[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (26))){
var inst_34284 = (state_34364[(26)]);
var inst_34286 = (state_34364[(23)]);
var inst_34278 = (state_34364[(19)]);
var inst_34282 = (state_34364[(24)]);
var inst_34281 = (state_34364[(25)]);
var inst_34301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34303 = (function (){var all_files = inst_34278;
var res_SINGLEQUOTE_ = inst_34281;
var res = inst_34282;
var files_not_loaded = inst_34284;
var dependencies_that_loaded = inst_34286;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34301,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34302){
var map__34433 = p__34302;
var map__34433__$1 = ((((!((map__34433 == null)))?((((map__34433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34433):map__34433);
var namespace = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34301,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34304 = cljs.core.map.call(null,inst_34303,inst_34282);
var inst_34305 = cljs.core.pr_str.call(null,inst_34304);
var inst_34306 = figwheel.client.utils.log.call(null,inst_34305);
var inst_34307 = (function (){var all_files = inst_34278;
var res_SINGLEQUOTE_ = inst_34281;
var res = inst_34282;
var files_not_loaded = inst_34284;
var dependencies_that_loaded = inst_34286;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34301,inst_34303,inst_34304,inst_34305,inst_34306,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34284,inst_34286,inst_34278,inst_34282,inst_34281,inst_34301,inst_34303,inst_34304,inst_34305,inst_34306,state_val_34365,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34308 = setTimeout(inst_34307,(10));
var state_34364__$1 = (function (){var statearr_34435 = state_34364;
(statearr_34435[(33)] = inst_34301);

(statearr_34435[(34)] = inst_34306);

return statearr_34435;
})();
var statearr_34436_34502 = state_34364__$1;
(statearr_34436_34502[(2)] = inst_34308);

(statearr_34436_34502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (16))){
var state_34364__$1 = state_34364;
var statearr_34437_34503 = state_34364__$1;
(statearr_34437_34503[(2)] = reload_dependents);

(statearr_34437_34503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (38))){
var inst_34318 = (state_34364[(16)]);
var inst_34335 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34318);
var state_34364__$1 = state_34364;
var statearr_34438_34504 = state_34364__$1;
(statearr_34438_34504[(2)] = inst_34335);

(statearr_34438_34504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (30))){
var state_34364__$1 = state_34364;
var statearr_34439_34505 = state_34364__$1;
(statearr_34439_34505[(2)] = null);

(statearr_34439_34505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (10))){
var inst_34238 = (state_34364[(22)]);
var inst_34240 = cljs.core.chunked_seq_QMARK_.call(null,inst_34238);
var state_34364__$1 = state_34364;
if(inst_34240){
var statearr_34440_34506 = state_34364__$1;
(statearr_34440_34506[(1)] = (13));

} else {
var statearr_34441_34507 = state_34364__$1;
(statearr_34441_34507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (18))){
var inst_34272 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34272)){
var statearr_34442_34508 = state_34364__$1;
(statearr_34442_34508[(1)] = (19));

} else {
var statearr_34443_34509 = state_34364__$1;
(statearr_34443_34509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (42))){
var state_34364__$1 = state_34364;
var statearr_34444_34510 = state_34364__$1;
(statearr_34444_34510[(2)] = null);

(statearr_34444_34510[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (37))){
var inst_34330 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34445_34511 = state_34364__$1;
(statearr_34445_34511[(2)] = inst_34330);

(statearr_34445_34511[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (8))){
var inst_34238 = (state_34364[(22)]);
var inst_34225 = (state_34364[(8)]);
var inst_34238__$1 = cljs.core.seq.call(null,inst_34225);
var state_34364__$1 = (function (){var statearr_34446 = state_34364;
(statearr_34446[(22)] = inst_34238__$1);

return statearr_34446;
})();
if(inst_34238__$1){
var statearr_34447_34512 = state_34364__$1;
(statearr_34447_34512[(1)] = (10));

} else {
var statearr_34448_34513 = state_34364__$1;
(statearr_34448_34513[(1)] = (11));

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
}
});})(c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30399__auto__,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____0 = (function (){
var statearr_34452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34452[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__);

(statearr_34452[(1)] = (1));

return statearr_34452;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____1 = (function (state_34364){
while(true){
var ret_value__30401__auto__ = (function (){try{while(true){
var result__30402__auto__ = switch__30399__auto__.call(null,state_34364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30402__auto__;
}
break;
}
}catch (e34453){if((e34453 instanceof Object)){
var ex__30403__auto__ = e34453;
var statearr_34454_34514 = state_34364;
(statearr_34454_34514[(5)] = ex__30403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34515 = state_34364;
state_34364 = G__34515;
continue;
} else {
return ret_value__30401__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30400__auto__;
})()
;})(switch__30399__auto__,c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30555__auto__ = (function (){var statearr_34455 = f__30554__auto__.call(null);
(statearr_34455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30553__auto__);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30555__auto__);
});})(c__30553__auto__,map__34210,map__34210__$1,opts,before_jsload,on_jsload,reload_dependents,map__34211,map__34211__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30553__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34518,link){
var map__34521 = p__34518;
var map__34521__$1 = ((((!((map__34521 == null)))?((((map__34521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34521):map__34521);
var file = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34521,map__34521__$1,file){
return (function (p1__34516_SHARP_,p2__34517_SHARP_){
if(cljs.core._EQ_.call(null,p1__34516_SHARP_,p2__34517_SHARP_)){
return p1__34516_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34521,map__34521__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34527){
var map__34528 = p__34527;
var map__34528__$1 = ((((!((map__34528 == null)))?((((map__34528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34528):map__34528);
var match_length = cljs.core.get.call(null,map__34528__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34528__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34523_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34523_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34530 = [];
var len__29456__auto___34533 = arguments.length;
var i__29457__auto___34534 = (0);
while(true){
if((i__29457__auto___34534 < len__29456__auto___34533)){
args34530.push((arguments[i__29457__auto___34534]));

var G__34535 = (i__29457__auto___34534 + (1));
i__29457__auto___34534 = G__34535;
continue;
} else {
}
break;
}

var G__34532 = args34530.length;
switch (G__34532) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34530.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34537_SHARP_,p2__34538_SHARP_){
return cljs.core.assoc.call(null,p1__34537_SHARP_,cljs.core.get.call(null,p2__34538_SHARP_,key),p2__34538_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34539){
var map__34542 = p__34539;
var map__34542__$1 = ((((!((map__34542 == null)))?((((map__34542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34542):map__34542);
var f_data = map__34542__$1;
var file = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34544,files_msg){
var map__34551 = p__34544;
var map__34551__$1 = ((((!((map__34551 == null)))?((((map__34551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34551):map__34551);
var opts = map__34551__$1;
var on_cssload = cljs.core.get.call(null,map__34551__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34553_34557 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34554_34558 = null;
var count__34555_34559 = (0);
var i__34556_34560 = (0);
while(true){
if((i__34556_34560 < count__34555_34559)){
var f_34561 = cljs.core._nth.call(null,chunk__34554_34558,i__34556_34560);
figwheel.client.file_reloading.reload_css_file.call(null,f_34561);

var G__34562 = seq__34553_34557;
var G__34563 = chunk__34554_34558;
var G__34564 = count__34555_34559;
var G__34565 = (i__34556_34560 + (1));
seq__34553_34557 = G__34562;
chunk__34554_34558 = G__34563;
count__34555_34559 = G__34564;
i__34556_34560 = G__34565;
continue;
} else {
var temp__4657__auto___34566 = cljs.core.seq.call(null,seq__34553_34557);
if(temp__4657__auto___34566){
var seq__34553_34567__$1 = temp__4657__auto___34566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34553_34567__$1)){
var c__29192__auto___34568 = cljs.core.chunk_first.call(null,seq__34553_34567__$1);
var G__34569 = cljs.core.chunk_rest.call(null,seq__34553_34567__$1);
var G__34570 = c__29192__auto___34568;
var G__34571 = cljs.core.count.call(null,c__29192__auto___34568);
var G__34572 = (0);
seq__34553_34557 = G__34569;
chunk__34554_34558 = G__34570;
count__34555_34559 = G__34571;
i__34556_34560 = G__34572;
continue;
} else {
var f_34573 = cljs.core.first.call(null,seq__34553_34567__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34573);

var G__34574 = cljs.core.next.call(null,seq__34553_34567__$1);
var G__34575 = null;
var G__34576 = (0);
var G__34577 = (0);
seq__34553_34557 = G__34574;
chunk__34554_34558 = G__34575;
count__34555_34559 = G__34576;
i__34556_34560 = G__34577;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34551,map__34551__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__34551,map__34551__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489198966541