// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29449_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29449_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__29450 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29451 = null;
var count__29452 = (0);
var i__29453 = (0);
while(true){
if((i__29453 < count__29452)){
var n = cljs.core._nth.call(null,chunk__29451,i__29453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29454 = seq__29450;
var G__29455 = chunk__29451;
var G__29456 = count__29452;
var G__29457 = (i__29453 + (1));
seq__29450 = G__29454;
chunk__29451 = G__29455;
count__29452 = G__29456;
i__29453 = G__29457;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29450);
if(temp__5457__auto__){
var seq__29450__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29450__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29450__$1);
var G__29458 = cljs.core.chunk_rest.call(null,seq__29450__$1);
var G__29459 = c__4351__auto__;
var G__29460 = cljs.core.count.call(null,c__4351__auto__);
var G__29461 = (0);
seq__29450 = G__29458;
chunk__29451 = G__29459;
count__29452 = G__29460;
i__29453 = G__29461;
continue;
} else {
var n = cljs.core.first.call(null,seq__29450__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29462 = cljs.core.next.call(null,seq__29450__$1);
var G__29463 = null;
var G__29464 = (0);
var G__29465 = (0);
seq__29450 = G__29462;
chunk__29451 = G__29463;
count__29452 = G__29464;
i__29453 = G__29465;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29466){
var vec__29467 = p__29466;
var _ = cljs.core.nth.call(null,vec__29467,(0),null);
var v = cljs.core.nth.call(null,vec__29467,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__29470){
var vec__29471 = p__29470;
var k = cljs.core.nth.call(null,vec__29471,(0),null);
var v = cljs.core.nth.call(null,vec__29471,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__29483_29491 = cljs.core.seq.call(null,deps);
var chunk__29484_29492 = null;
var count__29485_29493 = (0);
var i__29486_29494 = (0);
while(true){
if((i__29486_29494 < count__29485_29493)){
var dep_29495 = cljs.core._nth.call(null,chunk__29484_29492,i__29486_29494);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29495;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29495));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29495,(depth + (1)),state);
} else {
}


var G__29496 = seq__29483_29491;
var G__29497 = chunk__29484_29492;
var G__29498 = count__29485_29493;
var G__29499 = (i__29486_29494 + (1));
seq__29483_29491 = G__29496;
chunk__29484_29492 = G__29497;
count__29485_29493 = G__29498;
i__29486_29494 = G__29499;
continue;
} else {
var temp__5457__auto___29500 = cljs.core.seq.call(null,seq__29483_29491);
if(temp__5457__auto___29500){
var seq__29483_29501__$1 = temp__5457__auto___29500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29483_29501__$1)){
var c__4351__auto___29502 = cljs.core.chunk_first.call(null,seq__29483_29501__$1);
var G__29503 = cljs.core.chunk_rest.call(null,seq__29483_29501__$1);
var G__29504 = c__4351__auto___29502;
var G__29505 = cljs.core.count.call(null,c__4351__auto___29502);
var G__29506 = (0);
seq__29483_29491 = G__29503;
chunk__29484_29492 = G__29504;
count__29485_29493 = G__29505;
i__29486_29494 = G__29506;
continue;
} else {
var dep_29507 = cljs.core.first.call(null,seq__29483_29501__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_29507;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29507));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29507,(depth + (1)),state);
} else {
}


var G__29508 = cljs.core.next.call(null,seq__29483_29501__$1);
var G__29509 = null;
var G__29510 = (0);
var G__29511 = (0);
seq__29483_29491 = G__29508;
chunk__29484_29492 = G__29509;
count__29485_29493 = G__29510;
i__29486_29494 = G__29511;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29487){
var vec__29488 = p__29487;
var seq__29489 = cljs.core.seq.call(null,vec__29488);
var first__29490 = cljs.core.first.call(null,seq__29489);
var seq__29489__$1 = cljs.core.next.call(null,seq__29489);
var x = first__29490;
var xs = seq__29489__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29488,seq__29489,first__29490,seq__29489__$1,x,xs,get_deps__$1){
return (function (p1__29474_SHARP_){
return clojure.set.difference.call(null,p1__29474_SHARP_,x);
});})(vec__29488,seq__29489,first__29490,seq__29489__$1,x,xs,get_deps__$1))
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
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29512 = cljs.core.seq.call(null,provides);
var chunk__29513 = null;
var count__29514 = (0);
var i__29515 = (0);
while(true){
if((i__29515 < count__29514)){
var prov = cljs.core._nth.call(null,chunk__29513,i__29515);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29516_29524 = cljs.core.seq.call(null,requires);
var chunk__29517_29525 = null;
var count__29518_29526 = (0);
var i__29519_29527 = (0);
while(true){
if((i__29519_29527 < count__29518_29526)){
var req_29528 = cljs.core._nth.call(null,chunk__29517_29525,i__29519_29527);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29528,prov);


var G__29529 = seq__29516_29524;
var G__29530 = chunk__29517_29525;
var G__29531 = count__29518_29526;
var G__29532 = (i__29519_29527 + (1));
seq__29516_29524 = G__29529;
chunk__29517_29525 = G__29530;
count__29518_29526 = G__29531;
i__29519_29527 = G__29532;
continue;
} else {
var temp__5457__auto___29533 = cljs.core.seq.call(null,seq__29516_29524);
if(temp__5457__auto___29533){
var seq__29516_29534__$1 = temp__5457__auto___29533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29516_29534__$1)){
var c__4351__auto___29535 = cljs.core.chunk_first.call(null,seq__29516_29534__$1);
var G__29536 = cljs.core.chunk_rest.call(null,seq__29516_29534__$1);
var G__29537 = c__4351__auto___29535;
var G__29538 = cljs.core.count.call(null,c__4351__auto___29535);
var G__29539 = (0);
seq__29516_29524 = G__29536;
chunk__29517_29525 = G__29537;
count__29518_29526 = G__29538;
i__29519_29527 = G__29539;
continue;
} else {
var req_29540 = cljs.core.first.call(null,seq__29516_29534__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29540,prov);


var G__29541 = cljs.core.next.call(null,seq__29516_29534__$1);
var G__29542 = null;
var G__29543 = (0);
var G__29544 = (0);
seq__29516_29524 = G__29541;
chunk__29517_29525 = G__29542;
count__29518_29526 = G__29543;
i__29519_29527 = G__29544;
continue;
}
} else {
}
}
break;
}


var G__29545 = seq__29512;
var G__29546 = chunk__29513;
var G__29547 = count__29514;
var G__29548 = (i__29515 + (1));
seq__29512 = G__29545;
chunk__29513 = G__29546;
count__29514 = G__29547;
i__29515 = G__29548;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29512);
if(temp__5457__auto__){
var seq__29512__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29512__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29512__$1);
var G__29549 = cljs.core.chunk_rest.call(null,seq__29512__$1);
var G__29550 = c__4351__auto__;
var G__29551 = cljs.core.count.call(null,c__4351__auto__);
var G__29552 = (0);
seq__29512 = G__29549;
chunk__29513 = G__29550;
count__29514 = G__29551;
i__29515 = G__29552;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29512__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29520_29553 = cljs.core.seq.call(null,requires);
var chunk__29521_29554 = null;
var count__29522_29555 = (0);
var i__29523_29556 = (0);
while(true){
if((i__29523_29556 < count__29522_29555)){
var req_29557 = cljs.core._nth.call(null,chunk__29521_29554,i__29523_29556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29557,prov);


var G__29558 = seq__29520_29553;
var G__29559 = chunk__29521_29554;
var G__29560 = count__29522_29555;
var G__29561 = (i__29523_29556 + (1));
seq__29520_29553 = G__29558;
chunk__29521_29554 = G__29559;
count__29522_29555 = G__29560;
i__29523_29556 = G__29561;
continue;
} else {
var temp__5457__auto___29562__$1 = cljs.core.seq.call(null,seq__29520_29553);
if(temp__5457__auto___29562__$1){
var seq__29520_29563__$1 = temp__5457__auto___29562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29520_29563__$1)){
var c__4351__auto___29564 = cljs.core.chunk_first.call(null,seq__29520_29563__$1);
var G__29565 = cljs.core.chunk_rest.call(null,seq__29520_29563__$1);
var G__29566 = c__4351__auto___29564;
var G__29567 = cljs.core.count.call(null,c__4351__auto___29564);
var G__29568 = (0);
seq__29520_29553 = G__29565;
chunk__29521_29554 = G__29566;
count__29522_29555 = G__29567;
i__29523_29556 = G__29568;
continue;
} else {
var req_29569 = cljs.core.first.call(null,seq__29520_29563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29569,prov);


var G__29570 = cljs.core.next.call(null,seq__29520_29563__$1);
var G__29571 = null;
var G__29572 = (0);
var G__29573 = (0);
seq__29520_29553 = G__29570;
chunk__29521_29554 = G__29571;
count__29522_29555 = G__29572;
i__29523_29556 = G__29573;
continue;
}
} else {
}
}
break;
}


var G__29574 = cljs.core.next.call(null,seq__29512__$1);
var G__29575 = null;
var G__29576 = (0);
var G__29577 = (0);
seq__29512 = G__29574;
chunk__29513 = G__29575;
count__29514 = G__29576;
i__29515 = G__29577;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29578_29582 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29579_29583 = null;
var count__29580_29584 = (0);
var i__29581_29585 = (0);
while(true){
if((i__29581_29585 < count__29580_29584)){
var ns_29586 = cljs.core._nth.call(null,chunk__29579_29583,i__29581_29585);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29586);


var G__29587 = seq__29578_29582;
var G__29588 = chunk__29579_29583;
var G__29589 = count__29580_29584;
var G__29590 = (i__29581_29585 + (1));
seq__29578_29582 = G__29587;
chunk__29579_29583 = G__29588;
count__29580_29584 = G__29589;
i__29581_29585 = G__29590;
continue;
} else {
var temp__5457__auto___29591 = cljs.core.seq.call(null,seq__29578_29582);
if(temp__5457__auto___29591){
var seq__29578_29592__$1 = temp__5457__auto___29591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29578_29592__$1)){
var c__4351__auto___29593 = cljs.core.chunk_first.call(null,seq__29578_29592__$1);
var G__29594 = cljs.core.chunk_rest.call(null,seq__29578_29592__$1);
var G__29595 = c__4351__auto___29593;
var G__29596 = cljs.core.count.call(null,c__4351__auto___29593);
var G__29597 = (0);
seq__29578_29582 = G__29594;
chunk__29579_29583 = G__29595;
count__29580_29584 = G__29596;
i__29581_29585 = G__29597;
continue;
} else {
var ns_29598 = cljs.core.first.call(null,seq__29578_29592__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29598);


var G__29599 = cljs.core.next.call(null,seq__29578_29592__$1);
var G__29600 = null;
var G__29601 = (0);
var G__29602 = (0);
seq__29578_29582 = G__29599;
chunk__29579_29583 = G__29600;
count__29580_29584 = G__29601;
i__29581_29585 = G__29602;
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
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
var G__29603__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29604__i = 0, G__29604__a = new Array(arguments.length -  0);
while (G__29604__i < G__29604__a.length) {G__29604__a[G__29604__i] = arguments[G__29604__i + 0]; ++G__29604__i;}
  args = new cljs.core.IndexedSeq(G__29604__a,0,null);
} 
return G__29603__delegate.call(this,args);};
G__29603.cljs$lang$maxFixedArity = 0;
G__29603.cljs$lang$applyTo = (function (arglist__29605){
var args = cljs.core.seq(arglist__29605);
return G__29603__delegate(args);
});
G__29603.cljs$core$IFn$_invoke$arity$variadic = G__29603__delegate;
return G__29603;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29606_SHARP_,p2__29607_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29606_SHARP_)].join('')),p2__29607_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29608_SHARP_,p2__29609_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29608_SHARP_)].join(''),p2__29609_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29610 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29610.addCallback(((function (G__29610){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29610))
);

G__29610.addErrback(((function (G__29610){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29610))
);

return G__29610;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29611){if((e29611 instanceof Error)){
var e = e29611;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29611;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29612){if((e29612 instanceof Error)){
var e = e29612;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29612;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29613 = cljs.core._EQ_;
var expr__29614 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29613.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29614))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29613.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29614))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29613.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29614))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29613,expr__29614){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29613,expr__29614))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29616,callback){
var map__29617 = p__29616;
var map__29617__$1 = ((((!((map__29617 == null)))?(((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var file_msg = map__29617__$1;
var request_url = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29617,map__29617__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29617,map__29617__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__){
return (function (state_29655){
var state_val_29656 = (state_29655[(1)]);
if((state_val_29656 === (7))){
var inst_29651 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29657_29683 = state_29655__$1;
(statearr_29657_29683[(2)] = inst_29651);

(statearr_29657_29683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (1))){
var state_29655__$1 = state_29655;
var statearr_29658_29684 = state_29655__$1;
(statearr_29658_29684[(2)] = null);

(statearr_29658_29684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (4))){
var inst_29621 = (state_29655[(7)]);
var inst_29621__$1 = (state_29655[(2)]);
var state_29655__$1 = (function (){var statearr_29659 = state_29655;
(statearr_29659[(7)] = inst_29621__$1);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29621__$1)){
var statearr_29660_29685 = state_29655__$1;
(statearr_29660_29685[(1)] = (5));

} else {
var statearr_29661_29686 = state_29655__$1;
(statearr_29661_29686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (15))){
var inst_29636 = (state_29655[(8)]);
var inst_29634 = (state_29655[(9)]);
var inst_29638 = inst_29636.call(null,inst_29634);
var state_29655__$1 = state_29655;
var statearr_29662_29687 = state_29655__$1;
(statearr_29662_29687[(2)] = inst_29638);

(statearr_29662_29687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (13))){
var inst_29645 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29663_29688 = state_29655__$1;
(statearr_29663_29688[(2)] = inst_29645);

(statearr_29663_29688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (6))){
var state_29655__$1 = state_29655;
var statearr_29664_29689 = state_29655__$1;
(statearr_29664_29689[(2)] = null);

(statearr_29664_29689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (17))){
var inst_29642 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
var statearr_29665_29690 = state_29655__$1;
(statearr_29665_29690[(2)] = inst_29642);

(statearr_29665_29690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (3))){
var inst_29653 = (state_29655[(2)]);
var state_29655__$1 = state_29655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29655__$1,inst_29653);
} else {
if((state_val_29656 === (12))){
var state_29655__$1 = state_29655;
var statearr_29666_29691 = state_29655__$1;
(statearr_29666_29691[(2)] = null);

(statearr_29666_29691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (2))){
var state_29655__$1 = state_29655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29655__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29656 === (11))){
var inst_29626 = (state_29655[(10)]);
var inst_29632 = figwheel.client.file_reloading.blocking_load.call(null,inst_29626);
var state_29655__$1 = state_29655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29655__$1,(14),inst_29632);
} else {
if((state_val_29656 === (9))){
var inst_29626 = (state_29655[(10)]);
var state_29655__$1 = state_29655;
if(cljs.core.truth_(inst_29626)){
var statearr_29667_29692 = state_29655__$1;
(statearr_29667_29692[(1)] = (11));

} else {
var statearr_29668_29693 = state_29655__$1;
(statearr_29668_29693[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (5))){
var inst_29627 = (state_29655[(11)]);
var inst_29621 = (state_29655[(7)]);
var inst_29626 = cljs.core.nth.call(null,inst_29621,(0),null);
var inst_29627__$1 = cljs.core.nth.call(null,inst_29621,(1),null);
var state_29655__$1 = (function (){var statearr_29669 = state_29655;
(statearr_29669[(11)] = inst_29627__$1);

(statearr_29669[(10)] = inst_29626);

return statearr_29669;
})();
if(cljs.core.truth_(inst_29627__$1)){
var statearr_29670_29694 = state_29655__$1;
(statearr_29670_29694[(1)] = (8));

} else {
var statearr_29671_29695 = state_29655__$1;
(statearr_29671_29695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (14))){
var inst_29636 = (state_29655[(8)]);
var inst_29626 = (state_29655[(10)]);
var inst_29634 = (state_29655[(2)]);
var inst_29635 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29636__$1 = cljs.core.get.call(null,inst_29635,inst_29626);
var state_29655__$1 = (function (){var statearr_29672 = state_29655;
(statearr_29672[(8)] = inst_29636__$1);

(statearr_29672[(9)] = inst_29634);

return statearr_29672;
})();
if(cljs.core.truth_(inst_29636__$1)){
var statearr_29673_29696 = state_29655__$1;
(statearr_29673_29696[(1)] = (15));

} else {
var statearr_29674_29697 = state_29655__$1;
(statearr_29674_29697[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (16))){
var inst_29634 = (state_29655[(9)]);
var inst_29640 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29634);
var state_29655__$1 = state_29655;
var statearr_29675_29698 = state_29655__$1;
(statearr_29675_29698[(2)] = inst_29640);

(statearr_29675_29698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (10))){
var inst_29647 = (state_29655[(2)]);
var state_29655__$1 = (function (){var statearr_29676 = state_29655;
(statearr_29676[(12)] = inst_29647);

return statearr_29676;
})();
var statearr_29677_29699 = state_29655__$1;
(statearr_29677_29699[(2)] = null);

(statearr_29677_29699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29656 === (8))){
var inst_29627 = (state_29655[(11)]);
var inst_29629 = eval(inst_29627);
var state_29655__$1 = state_29655;
var statearr_29678_29700 = state_29655__$1;
(statearr_29678_29700[(2)] = inst_29629);

(statearr_29678_29700[(1)] = (10));


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
});})(c__26169__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25649__auto__ = null;
var figwheel$client$file_reloading$state_machine__25649__auto____0 = (function (){
var statearr_29679 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29679[(0)] = figwheel$client$file_reloading$state_machine__25649__auto__);

(statearr_29679[(1)] = (1));

return statearr_29679;
});
var figwheel$client$file_reloading$state_machine__25649__auto____1 = (function (state_29655){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_29655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e29680){if((e29680 instanceof Object)){
var ex__25652__auto__ = e29680;
var statearr_29681_29701 = state_29655;
(statearr_29681_29701[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29702 = state_29655;
state_29655 = G__29702;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25649__auto__ = function(state_29655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25649__auto____1.call(this,state_29655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25649__auto____0;
figwheel$client$file_reloading$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25649__auto____1;
return figwheel$client$file_reloading$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__))
})();
var state__26171__auto__ = (function (){var statearr_29682 = f__26170__auto__.call(null);
(statearr_29682[(6)] = c__26169__auto__);

return statearr_29682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__))
);

return c__26169__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29704 = arguments.length;
switch (G__29704) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29706,callback){
var map__29707 = p__29706;
var map__29707__$1 = ((((!((map__29707 == null)))?(((((map__29707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29707):map__29707);
var file_msg = map__29707__$1;
var namespace = cljs.core.get.call(null,map__29707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29707,map__29707__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29707,map__29707__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29709){
var map__29710 = p__29709;
var map__29710__$1 = ((((!((map__29710 == null)))?(((((map__29710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);
var file_msg = map__29710__$1;
var namespace = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29712){
var map__29713 = p__29712;
var map__29713__$1 = ((((!((map__29713 == null)))?(((((map__29713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);
var file_msg = map__29713__$1;
var namespace = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29715,callback){
var map__29716 = p__29715;
var map__29716__$1 = ((((!((map__29716 == null)))?(((((map__29716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29716):map__29716);
var file_msg = map__29716__$1;
var request_url = cljs.core.get.call(null,map__29716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__26169__auto___29766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___29766,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___29766,out){
return (function (state_29751){
var state_val_29752 = (state_29751[(1)]);
if((state_val_29752 === (1))){
var inst_29725 = cljs.core.seq.call(null,files);
var inst_29726 = cljs.core.first.call(null,inst_29725);
var inst_29727 = cljs.core.next.call(null,inst_29725);
var inst_29728 = files;
var state_29751__$1 = (function (){var statearr_29753 = state_29751;
(statearr_29753[(7)] = inst_29726);

(statearr_29753[(8)] = inst_29727);

(statearr_29753[(9)] = inst_29728);

return statearr_29753;
})();
var statearr_29754_29767 = state_29751__$1;
(statearr_29754_29767[(2)] = null);

(statearr_29754_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (2))){
var inst_29734 = (state_29751[(10)]);
var inst_29728 = (state_29751[(9)]);
var inst_29733 = cljs.core.seq.call(null,inst_29728);
var inst_29734__$1 = cljs.core.first.call(null,inst_29733);
var inst_29735 = cljs.core.next.call(null,inst_29733);
var inst_29736 = (inst_29734__$1 == null);
var inst_29737 = cljs.core.not.call(null,inst_29736);
var state_29751__$1 = (function (){var statearr_29755 = state_29751;
(statearr_29755[(10)] = inst_29734__$1);

(statearr_29755[(11)] = inst_29735);

return statearr_29755;
})();
if(inst_29737){
var statearr_29756_29768 = state_29751__$1;
(statearr_29756_29768[(1)] = (4));

} else {
var statearr_29757_29769 = state_29751__$1;
(statearr_29757_29769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (3))){
var inst_29749 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29751__$1,inst_29749);
} else {
if((state_val_29752 === (4))){
var inst_29734 = (state_29751[(10)]);
var inst_29739 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29734);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29751__$1,(7),inst_29739);
} else {
if((state_val_29752 === (5))){
var inst_29745 = cljs.core.async.close_BANG_.call(null,out);
var state_29751__$1 = state_29751;
var statearr_29758_29770 = state_29751__$1;
(statearr_29758_29770[(2)] = inst_29745);

(statearr_29758_29770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (6))){
var inst_29747 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29759_29771 = state_29751__$1;
(statearr_29759_29771[(2)] = inst_29747);

(statearr_29759_29771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (7))){
var inst_29735 = (state_29751[(11)]);
var inst_29741 = (state_29751[(2)]);
var inst_29742 = cljs.core.async.put_BANG_.call(null,out,inst_29741);
var inst_29728 = inst_29735;
var state_29751__$1 = (function (){var statearr_29760 = state_29751;
(statearr_29760[(9)] = inst_29728);

(statearr_29760[(12)] = inst_29742);

return statearr_29760;
})();
var statearr_29761_29772 = state_29751__$1;
(statearr_29761_29772[(2)] = null);

(statearr_29761_29772[(1)] = (2));


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
});})(c__26169__auto___29766,out))
;
return ((function (switch__25648__auto__,c__26169__auto___29766,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____0 = (function (){
var statearr_29762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29762[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__);

(statearr_29762[(1)] = (1));

return statearr_29762;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____1 = (function (state_29751){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_29751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e29763){if((e29763 instanceof Object)){
var ex__25652__auto__ = e29763;
var statearr_29764_29773 = state_29751;
(statearr_29764_29773[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29751;
state_29751 = G__29774;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__ = function(state_29751){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____1.call(this,state_29751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___29766,out))
})();
var state__26171__auto__ = (function (){var statearr_29765 = f__26170__auto__.call(null);
(statearr_29765[(6)] = c__26169__auto___29766);

return statearr_29765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___29766,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29775,opts){
var map__29776 = p__29775;
var map__29776__$1 = ((((!((map__29776 == null)))?(((((map__29776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29776):map__29776);
var eval_body = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29778){var e = e29778;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29779_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29779_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__29780){
var vec__29781 = p__29780;
var k = cljs.core.nth.call(null,vec__29781,(0),null);
var v = cljs.core.nth.call(null,vec__29781,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29784){
var vec__29785 = p__29784;
var k = cljs.core.nth.call(null,vec__29785,(0),null);
var v = cljs.core.nth.call(null,vec__29785,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29791,p__29792){
var map__29793 = p__29791;
var map__29793__$1 = ((((!((map__29793 == null)))?(((((map__29793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);
var opts = map__29793__$1;
var before_jsload = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29794 = p__29792;
var map__29794__$1 = ((((!((map__29794 == null)))?(((((map__29794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);
var msg = map__29794__$1;
var files = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (7))){
var inst_29809 = (state_29948[(7)]);
var inst_29808 = (state_29948[(8)]);
var inst_29810 = (state_29948[(9)]);
var inst_29811 = (state_29948[(10)]);
var inst_29816 = cljs.core._nth.call(null,inst_29809,inst_29811);
var inst_29817 = figwheel.client.file_reloading.eval_body.call(null,inst_29816,opts);
var inst_29818 = (inst_29811 + (1));
var tmp29950 = inst_29809;
var tmp29951 = inst_29808;
var tmp29952 = inst_29810;
var inst_29808__$1 = tmp29951;
var inst_29809__$1 = tmp29950;
var inst_29810__$1 = tmp29952;
var inst_29811__$1 = inst_29818;
var state_29948__$1 = (function (){var statearr_29953 = state_29948;
(statearr_29953[(7)] = inst_29809__$1);

(statearr_29953[(8)] = inst_29808__$1);

(statearr_29953[(9)] = inst_29810__$1);

(statearr_29953[(11)] = inst_29817);

(statearr_29953[(10)] = inst_29811__$1);

return statearr_29953;
})();
var statearr_29954_30037 = state_29948__$1;
(statearr_29954_30037[(2)] = null);

(statearr_29954_30037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (20))){
var inst_29851 = (state_29948[(12)]);
var inst_29859 = figwheel.client.file_reloading.sort_files.call(null,inst_29851);
var state_29948__$1 = state_29948;
var statearr_29955_30038 = state_29948__$1;
(statearr_29955_30038[(2)] = inst_29859);

(statearr_29955_30038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (27))){
var state_29948__$1 = state_29948;
var statearr_29956_30039 = state_29948__$1;
(statearr_29956_30039[(2)] = null);

(statearr_29956_30039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (1))){
var inst_29800 = (state_29948[(13)]);
var inst_29797 = before_jsload.call(null,files);
var inst_29798 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29799 = (function (){return ((function (inst_29800,inst_29797,inst_29798,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29788_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29788_SHARP_);
});
;})(inst_29800,inst_29797,inst_29798,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29800__$1 = cljs.core.filter.call(null,inst_29799,files);
var inst_29801 = cljs.core.not_empty.call(null,inst_29800__$1);
var state_29948__$1 = (function (){var statearr_29957 = state_29948;
(statearr_29957[(14)] = inst_29797);

(statearr_29957[(13)] = inst_29800__$1);

(statearr_29957[(15)] = inst_29798);

return statearr_29957;
})();
if(cljs.core.truth_(inst_29801)){
var statearr_29958_30040 = state_29948__$1;
(statearr_29958_30040[(1)] = (2));

} else {
var statearr_29959_30041 = state_29948__$1;
(statearr_29959_30041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (24))){
var state_29948__$1 = state_29948;
var statearr_29960_30042 = state_29948__$1;
(statearr_29960_30042[(2)] = null);

(statearr_29960_30042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (39))){
var inst_29901 = (state_29948[(16)]);
var state_29948__$1 = state_29948;
var statearr_29961_30043 = state_29948__$1;
(statearr_29961_30043[(2)] = inst_29901);

(statearr_29961_30043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (46))){
var inst_29943 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29962_30044 = state_29948__$1;
(statearr_29962_30044[(2)] = inst_29943);

(statearr_29962_30044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (4))){
var inst_29845 = (state_29948[(2)]);
var inst_29846 = cljs.core.List.EMPTY;
var inst_29847 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29846);
var inst_29848 = (function (){return ((function (inst_29845,inst_29846,inst_29847,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29789_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29789_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29789_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29789_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_29845,inst_29846,inst_29847,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29849 = cljs.core.filter.call(null,inst_29848,files);
var inst_29850 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29851 = cljs.core.concat.call(null,inst_29849,inst_29850);
var state_29948__$1 = (function (){var statearr_29963 = state_29948;
(statearr_29963[(12)] = inst_29851);

(statearr_29963[(17)] = inst_29845);

(statearr_29963[(18)] = inst_29847);

return statearr_29963;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29964_30045 = state_29948__$1;
(statearr_29964_30045[(1)] = (16));

} else {
var statearr_29965_30046 = state_29948__$1;
(statearr_29965_30046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (15))){
var inst_29835 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29966_30047 = state_29948__$1;
(statearr_29966_30047[(2)] = inst_29835);

(statearr_29966_30047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (21))){
var inst_29861 = (state_29948[(19)]);
var inst_29861__$1 = (state_29948[(2)]);
var inst_29862 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29861__$1);
var state_29948__$1 = (function (){var statearr_29967 = state_29948;
(statearr_29967[(19)] = inst_29861__$1);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(22),inst_29862);
} else {
if((state_val_29949 === (31))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (32))){
var inst_29901 = (state_29948[(16)]);
var inst_29906 = inst_29901.cljs$lang$protocol_mask$partition0$;
var inst_29907 = (inst_29906 & (64));
var inst_29908 = inst_29901.cljs$core$ISeq$;
var inst_29909 = (cljs.core.PROTOCOL_SENTINEL === inst_29908);
var inst_29910 = ((inst_29907) || (inst_29909));
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29910)){
var statearr_29968_30048 = state_29948__$1;
(statearr_29968_30048[(1)] = (35));

} else {
var statearr_29969_30049 = state_29948__$1;
(statearr_29969_30049[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (40))){
var inst_29923 = (state_29948[(20)]);
var inst_29922 = (state_29948[(2)]);
var inst_29923__$1 = cljs.core.get.call(null,inst_29922,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29924 = cljs.core.get.call(null,inst_29922,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29925 = cljs.core.not_empty.call(null,inst_29923__$1);
var state_29948__$1 = (function (){var statearr_29970 = state_29948;
(statearr_29970[(20)] = inst_29923__$1);

(statearr_29970[(21)] = inst_29924);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29925)){
var statearr_29971_30050 = state_29948__$1;
(statearr_29971_30050[(1)] = (41));

} else {
var statearr_29972_30051 = state_29948__$1;
(statearr_29972_30051[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (33))){
var state_29948__$1 = state_29948;
var statearr_29973_30052 = state_29948__$1;
(statearr_29973_30052[(2)] = false);

(statearr_29973_30052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (13))){
var inst_29821 = (state_29948[(22)]);
var inst_29825 = cljs.core.chunk_first.call(null,inst_29821);
var inst_29826 = cljs.core.chunk_rest.call(null,inst_29821);
var inst_29827 = cljs.core.count.call(null,inst_29825);
var inst_29808 = inst_29826;
var inst_29809 = inst_29825;
var inst_29810 = inst_29827;
var inst_29811 = (0);
var state_29948__$1 = (function (){var statearr_29974 = state_29948;
(statearr_29974[(7)] = inst_29809);

(statearr_29974[(8)] = inst_29808);

(statearr_29974[(9)] = inst_29810);

(statearr_29974[(10)] = inst_29811);

return statearr_29974;
})();
var statearr_29975_30053 = state_29948__$1;
(statearr_29975_30053[(2)] = null);

(statearr_29975_30053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (22))){
var inst_29861 = (state_29948[(19)]);
var inst_29869 = (state_29948[(23)]);
var inst_29864 = (state_29948[(24)]);
var inst_29865 = (state_29948[(25)]);
var inst_29864__$1 = (state_29948[(2)]);
var inst_29865__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29864__$1);
var inst_29866 = (function (){var all_files = inst_29861;
var res_SINGLEQUOTE_ = inst_29864__$1;
var res = inst_29865__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29861,inst_29869,inst_29864,inst_29865,inst_29864__$1,inst_29865__$1,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29790_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29790_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29861,inst_29869,inst_29864,inst_29865,inst_29864__$1,inst_29865__$1,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29867 = cljs.core.filter.call(null,inst_29866,inst_29864__$1);
var inst_29868 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29869__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29868);
var inst_29870 = cljs.core.not_empty.call(null,inst_29869__$1);
var state_29948__$1 = (function (){var statearr_29976 = state_29948;
(statearr_29976[(23)] = inst_29869__$1);

(statearr_29976[(26)] = inst_29867);

(statearr_29976[(24)] = inst_29864__$1);

(statearr_29976[(25)] = inst_29865__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29870)){
var statearr_29977_30054 = state_29948__$1;
(statearr_29977_30054[(1)] = (23));

} else {
var statearr_29978_30055 = state_29948__$1;
(statearr_29978_30055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (36))){
var state_29948__$1 = state_29948;
var statearr_29979_30056 = state_29948__$1;
(statearr_29979_30056[(2)] = false);

(statearr_29979_30056[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (41))){
var inst_29923 = (state_29948[(20)]);
var inst_29927 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29928 = cljs.core.map.call(null,inst_29927,inst_29923);
var inst_29929 = cljs.core.pr_str.call(null,inst_29928);
var inst_29930 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29929)].join('');
var inst_29931 = figwheel.client.utils.log.call(null,inst_29930);
var state_29948__$1 = state_29948;
var statearr_29980_30057 = state_29948__$1;
(statearr_29980_30057[(2)] = inst_29931);

(statearr_29980_30057[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (43))){
var inst_29924 = (state_29948[(21)]);
var inst_29934 = (state_29948[(2)]);
var inst_29935 = cljs.core.not_empty.call(null,inst_29924);
var state_29948__$1 = (function (){var statearr_29981 = state_29948;
(statearr_29981[(27)] = inst_29934);

return statearr_29981;
})();
if(cljs.core.truth_(inst_29935)){
var statearr_29982_30058 = state_29948__$1;
(statearr_29982_30058[(1)] = (44));

} else {
var statearr_29983_30059 = state_29948__$1;
(statearr_29983_30059[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (29))){
var inst_29861 = (state_29948[(19)]);
var inst_29869 = (state_29948[(23)]);
var inst_29901 = (state_29948[(16)]);
var inst_29867 = (state_29948[(26)]);
var inst_29864 = (state_29948[(24)]);
var inst_29865 = (state_29948[(25)]);
var inst_29897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29900 = (function (){var all_files = inst_29861;
var res_SINGLEQUOTE_ = inst_29864;
var res = inst_29865;
var files_not_loaded = inst_29867;
var dependencies_that_loaded = inst_29869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29901,inst_29867,inst_29864,inst_29865,inst_29897,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29899){
var map__29984 = p__29899;
var map__29984__$1 = ((((!((map__29984 == null)))?(((((map__29984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);
var namespace = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29901,inst_29867,inst_29864,inst_29865,inst_29897,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29901__$1 = cljs.core.group_by.call(null,inst_29900,inst_29867);
var inst_29903 = (inst_29901__$1 == null);
var inst_29904 = cljs.core.not.call(null,inst_29903);
var state_29948__$1 = (function (){var statearr_29986 = state_29948;
(statearr_29986[(16)] = inst_29901__$1);

(statearr_29986[(28)] = inst_29897);

return statearr_29986;
})();
if(inst_29904){
var statearr_29987_30060 = state_29948__$1;
(statearr_29987_30060[(1)] = (32));

} else {
var statearr_29988_30061 = state_29948__$1;
(statearr_29988_30061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (44))){
var inst_29924 = (state_29948[(21)]);
var inst_29937 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29924);
var inst_29938 = cljs.core.pr_str.call(null,inst_29937);
var inst_29939 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29938)].join('');
var inst_29940 = figwheel.client.utils.log.call(null,inst_29939);
var state_29948__$1 = state_29948;
var statearr_29989_30062 = state_29948__$1;
(statearr_29989_30062[(2)] = inst_29940);

(statearr_29989_30062[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (6))){
var inst_29842 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29990_30063 = state_29948__$1;
(statearr_29990_30063[(2)] = inst_29842);

(statearr_29990_30063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (28))){
var inst_29867 = (state_29948[(26)]);
var inst_29894 = (state_29948[(2)]);
var inst_29895 = cljs.core.not_empty.call(null,inst_29867);
var state_29948__$1 = (function (){var statearr_29991 = state_29948;
(statearr_29991[(29)] = inst_29894);

return statearr_29991;
})();
if(cljs.core.truth_(inst_29895)){
var statearr_29992_30064 = state_29948__$1;
(statearr_29992_30064[(1)] = (29));

} else {
var statearr_29993_30065 = state_29948__$1;
(statearr_29993_30065[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (25))){
var inst_29865 = (state_29948[(25)]);
var inst_29881 = (state_29948[(2)]);
var inst_29882 = cljs.core.not_empty.call(null,inst_29865);
var state_29948__$1 = (function (){var statearr_29994 = state_29948;
(statearr_29994[(30)] = inst_29881);

return statearr_29994;
})();
if(cljs.core.truth_(inst_29882)){
var statearr_29995_30066 = state_29948__$1;
(statearr_29995_30066[(1)] = (26));

} else {
var statearr_29996_30067 = state_29948__$1;
(statearr_29996_30067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (34))){
var inst_29917 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29917)){
var statearr_29997_30068 = state_29948__$1;
(statearr_29997_30068[(1)] = (38));

} else {
var statearr_29998_30069 = state_29948__$1;
(statearr_29998_30069[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (17))){
var state_29948__$1 = state_29948;
var statearr_29999_30070 = state_29948__$1;
(statearr_29999_30070[(2)] = recompile_dependents);

(statearr_29999_30070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (3))){
var state_29948__$1 = state_29948;
var statearr_30000_30071 = state_29948__$1;
(statearr_30000_30071[(2)] = null);

(statearr_30000_30071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (12))){
var inst_29838 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_30001_30072 = state_29948__$1;
(statearr_30001_30072[(2)] = inst_29838);

(statearr_30001_30072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (2))){
var inst_29800 = (state_29948[(13)]);
var inst_29807 = cljs.core.seq.call(null,inst_29800);
var inst_29808 = inst_29807;
var inst_29809 = null;
var inst_29810 = (0);
var inst_29811 = (0);
var state_29948__$1 = (function (){var statearr_30002 = state_29948;
(statearr_30002[(7)] = inst_29809);

(statearr_30002[(8)] = inst_29808);

(statearr_30002[(9)] = inst_29810);

(statearr_30002[(10)] = inst_29811);

return statearr_30002;
})();
var statearr_30003_30073 = state_29948__$1;
(statearr_30003_30073[(2)] = null);

(statearr_30003_30073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (23))){
var inst_29861 = (state_29948[(19)]);
var inst_29869 = (state_29948[(23)]);
var inst_29867 = (state_29948[(26)]);
var inst_29864 = (state_29948[(24)]);
var inst_29865 = (state_29948[(25)]);
var inst_29872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29874 = (function (){var all_files = inst_29861;
var res_SINGLEQUOTE_ = inst_29864;
var res = inst_29865;
var files_not_loaded = inst_29867;
var dependencies_that_loaded = inst_29869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29872,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29873){
var map__30004 = p__29873;
var map__30004__$1 = ((((!((map__30004 == null)))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var request_url = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29872,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29875 = cljs.core.reverse.call(null,inst_29869);
var inst_29876 = cljs.core.map.call(null,inst_29874,inst_29875);
var inst_29877 = cljs.core.pr_str.call(null,inst_29876);
var inst_29878 = figwheel.client.utils.log.call(null,inst_29877);
var state_29948__$1 = (function (){var statearr_30006 = state_29948;
(statearr_30006[(31)] = inst_29872);

return statearr_30006;
})();
var statearr_30007_30074 = state_29948__$1;
(statearr_30007_30074[(2)] = inst_29878);

(statearr_30007_30074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (35))){
var state_29948__$1 = state_29948;
var statearr_30008_30075 = state_29948__$1;
(statearr_30008_30075[(2)] = true);

(statearr_30008_30075[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (19))){
var inst_29851 = (state_29948[(12)]);
var inst_29857 = figwheel.client.file_reloading.expand_files.call(null,inst_29851);
var state_29948__$1 = state_29948;
var statearr_30009_30076 = state_29948__$1;
(statearr_30009_30076[(2)] = inst_29857);

(statearr_30009_30076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (11))){
var state_29948__$1 = state_29948;
var statearr_30010_30077 = state_29948__$1;
(statearr_30010_30077[(2)] = null);

(statearr_30010_30077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (9))){
var inst_29840 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_30011_30078 = state_29948__$1;
(statearr_30011_30078[(2)] = inst_29840);

(statearr_30011_30078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (5))){
var inst_29810 = (state_29948[(9)]);
var inst_29811 = (state_29948[(10)]);
var inst_29813 = (inst_29811 < inst_29810);
var inst_29814 = inst_29813;
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29814)){
var statearr_30012_30079 = state_29948__$1;
(statearr_30012_30079[(1)] = (7));

} else {
var statearr_30013_30080 = state_29948__$1;
(statearr_30013_30080[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (14))){
var inst_29821 = (state_29948[(22)]);
var inst_29830 = cljs.core.first.call(null,inst_29821);
var inst_29831 = figwheel.client.file_reloading.eval_body.call(null,inst_29830,opts);
var inst_29832 = cljs.core.next.call(null,inst_29821);
var inst_29808 = inst_29832;
var inst_29809 = null;
var inst_29810 = (0);
var inst_29811 = (0);
var state_29948__$1 = (function (){var statearr_30014 = state_29948;
(statearr_30014[(7)] = inst_29809);

(statearr_30014[(8)] = inst_29808);

(statearr_30014[(32)] = inst_29831);

(statearr_30014[(9)] = inst_29810);

(statearr_30014[(10)] = inst_29811);

return statearr_30014;
})();
var statearr_30015_30081 = state_29948__$1;
(statearr_30015_30081[(2)] = null);

(statearr_30015_30081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (45))){
var state_29948__$1 = state_29948;
var statearr_30016_30082 = state_29948__$1;
(statearr_30016_30082[(2)] = null);

(statearr_30016_30082[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (26))){
var inst_29861 = (state_29948[(19)]);
var inst_29869 = (state_29948[(23)]);
var inst_29867 = (state_29948[(26)]);
var inst_29864 = (state_29948[(24)]);
var inst_29865 = (state_29948[(25)]);
var inst_29884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29886 = (function (){var all_files = inst_29861;
var res_SINGLEQUOTE_ = inst_29864;
var res = inst_29865;
var files_not_loaded = inst_29867;
var dependencies_that_loaded = inst_29869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29884,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29885){
var map__30017 = p__29885;
var map__30017__$1 = ((((!((map__30017 == null)))?(((((map__30017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);
var namespace = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29884,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29887 = cljs.core.map.call(null,inst_29886,inst_29865);
var inst_29888 = cljs.core.pr_str.call(null,inst_29887);
var inst_29889 = figwheel.client.utils.log.call(null,inst_29888);
var inst_29890 = (function (){var all_files = inst_29861;
var res_SINGLEQUOTE_ = inst_29864;
var res = inst_29865;
var files_not_loaded = inst_29867;
var dependencies_that_loaded = inst_29869;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29884,inst_29886,inst_29887,inst_29888,inst_29889,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29861,inst_29869,inst_29867,inst_29864,inst_29865,inst_29884,inst_29886,inst_29887,inst_29888,inst_29889,state_val_29949,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29891 = setTimeout(inst_29890,(10));
var state_29948__$1 = (function (){var statearr_30019 = state_29948;
(statearr_30019[(33)] = inst_29884);

(statearr_30019[(34)] = inst_29889);

return statearr_30019;
})();
var statearr_30020_30083 = state_29948__$1;
(statearr_30020_30083[(2)] = inst_29891);

(statearr_30020_30083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (16))){
var state_29948__$1 = state_29948;
var statearr_30021_30084 = state_29948__$1;
(statearr_30021_30084[(2)] = reload_dependents);

(statearr_30021_30084[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (38))){
var inst_29901 = (state_29948[(16)]);
var inst_29919 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29901);
var state_29948__$1 = state_29948;
var statearr_30022_30085 = state_29948__$1;
(statearr_30022_30085[(2)] = inst_29919);

(statearr_30022_30085[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (30))){
var state_29948__$1 = state_29948;
var statearr_30023_30086 = state_29948__$1;
(statearr_30023_30086[(2)] = null);

(statearr_30023_30086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (10))){
var inst_29821 = (state_29948[(22)]);
var inst_29823 = cljs.core.chunked_seq_QMARK_.call(null,inst_29821);
var state_29948__$1 = state_29948;
if(inst_29823){
var statearr_30024_30087 = state_29948__$1;
(statearr_30024_30087[(1)] = (13));

} else {
var statearr_30025_30088 = state_29948__$1;
(statearr_30025_30088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (18))){
var inst_29855 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29855)){
var statearr_30026_30089 = state_29948__$1;
(statearr_30026_30089[(1)] = (19));

} else {
var statearr_30027_30090 = state_29948__$1;
(statearr_30027_30090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (42))){
var state_29948__$1 = state_29948;
var statearr_30028_30091 = state_29948__$1;
(statearr_30028_30091[(2)] = null);

(statearr_30028_30091[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (37))){
var inst_29914 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_30029_30092 = state_29948__$1;
(statearr_30029_30092[(2)] = inst_29914);

(statearr_30029_30092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (8))){
var inst_29821 = (state_29948[(22)]);
var inst_29808 = (state_29948[(8)]);
var inst_29821__$1 = cljs.core.seq.call(null,inst_29808);
var state_29948__$1 = (function (){var statearr_30030 = state_29948;
(statearr_30030[(22)] = inst_29821__$1);

return statearr_30030;
})();
if(inst_29821__$1){
var statearr_30031_30093 = state_29948__$1;
(statearr_30031_30093[(1)] = (10));

} else {
var statearr_30032_30094 = state_29948__$1;
(statearr_30032_30094[(1)] = (11));

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
});})(c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25648__auto__,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____1 = (function (state_29948){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_29948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__25652__auto__ = e30034;
var statearr_30035_30095 = state_29948;
(statearr_30035_30095[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30096 = state_29948;
state_29948 = G__30096;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26171__auto__ = (function (){var statearr_30036 = f__26170__auto__.call(null);
(statearr_30036[(6)] = c__26169__auto__);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__,map__29793,map__29793__$1,opts,before_jsload,on_jsload,reload_dependents,map__29794,map__29794__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26169__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30099,link){
var map__30100 = p__30099;
var map__30100__$1 = ((((!((map__30100 == null)))?(((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var file = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30100,map__30100__$1,file){
return (function (p1__30097_SHARP_,p2__30098_SHARP_){
if(cljs.core._EQ_.call(null,p1__30097_SHARP_,p2__30098_SHARP_)){
return p1__30097_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30100,map__30100__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30103){
var map__30104 = p__30103;
var map__30104__$1 = ((((!((map__30104 == null)))?(((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var match_length = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30102_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30102_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30106_SHARP_,p2__30107_SHARP_){
return cljs.core.assoc.call(null,p1__30106_SHARP_,cljs.core.get.call(null,p2__30107_SHARP_,key),p2__30107_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30108 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30108);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30108);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30109,p__30110){
var map__30111 = p__30109;
var map__30111__$1 = ((((!((map__30111 == null)))?(((((map__30111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30111):map__30111);
var on_cssload = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30112 = p__30110;
var map__30112__$1 = ((((!((map__30112 == null)))?(((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var files_msg = map__30112__$1;
var files = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1531486667648
