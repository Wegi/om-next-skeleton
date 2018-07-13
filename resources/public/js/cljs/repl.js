// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30913){
var map__30914 = p__30913;
var map__30914__$1 = ((((!((map__30914 == null)))?(((((map__30914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30914):map__30914);
var m = map__30914__$1;
var n = cljs.core.get.call(null,map__30914__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30914__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30916_30938 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30917_30939 = null;
var count__30918_30940 = (0);
var i__30919_30941 = (0);
while(true){
if((i__30919_30941 < count__30918_30940)){
var f_30942 = cljs.core._nth.call(null,chunk__30917_30939,i__30919_30941);
cljs.core.println.call(null,"  ",f_30942);


var G__30943 = seq__30916_30938;
var G__30944 = chunk__30917_30939;
var G__30945 = count__30918_30940;
var G__30946 = (i__30919_30941 + (1));
seq__30916_30938 = G__30943;
chunk__30917_30939 = G__30944;
count__30918_30940 = G__30945;
i__30919_30941 = G__30946;
continue;
} else {
var temp__5457__auto___30947 = cljs.core.seq.call(null,seq__30916_30938);
if(temp__5457__auto___30947){
var seq__30916_30948__$1 = temp__5457__auto___30947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30916_30948__$1)){
var c__4351__auto___30949 = cljs.core.chunk_first.call(null,seq__30916_30948__$1);
var G__30950 = cljs.core.chunk_rest.call(null,seq__30916_30948__$1);
var G__30951 = c__4351__auto___30949;
var G__30952 = cljs.core.count.call(null,c__4351__auto___30949);
var G__30953 = (0);
seq__30916_30938 = G__30950;
chunk__30917_30939 = G__30951;
count__30918_30940 = G__30952;
i__30919_30941 = G__30953;
continue;
} else {
var f_30954 = cljs.core.first.call(null,seq__30916_30948__$1);
cljs.core.println.call(null,"  ",f_30954);


var G__30955 = cljs.core.next.call(null,seq__30916_30948__$1);
var G__30956 = null;
var G__30957 = (0);
var G__30958 = (0);
seq__30916_30938 = G__30955;
chunk__30917_30939 = G__30956;
count__30918_30940 = G__30957;
i__30919_30941 = G__30958;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30959 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30959);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30959)))?cljs.core.second.call(null,arglists_30959):arglists_30959));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__30920_30960 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30921_30961 = null;
var count__30922_30962 = (0);
var i__30923_30963 = (0);
while(true){
if((i__30923_30963 < count__30922_30962)){
var vec__30924_30964 = cljs.core._nth.call(null,chunk__30921_30961,i__30923_30963);
var name_30965 = cljs.core.nth.call(null,vec__30924_30964,(0),null);
var map__30927_30966 = cljs.core.nth.call(null,vec__30924_30964,(1),null);
var map__30927_30967__$1 = ((((!((map__30927_30966 == null)))?(((((map__30927_30966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30927_30966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30927_30966):map__30927_30966);
var doc_30968 = cljs.core.get.call(null,map__30927_30967__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30969 = cljs.core.get.call(null,map__30927_30967__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30965);

cljs.core.println.call(null," ",arglists_30969);

if(cljs.core.truth_(doc_30968)){
cljs.core.println.call(null," ",doc_30968);
} else {
}


var G__30970 = seq__30920_30960;
var G__30971 = chunk__30921_30961;
var G__30972 = count__30922_30962;
var G__30973 = (i__30923_30963 + (1));
seq__30920_30960 = G__30970;
chunk__30921_30961 = G__30971;
count__30922_30962 = G__30972;
i__30923_30963 = G__30973;
continue;
} else {
var temp__5457__auto___30974 = cljs.core.seq.call(null,seq__30920_30960);
if(temp__5457__auto___30974){
var seq__30920_30975__$1 = temp__5457__auto___30974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30920_30975__$1)){
var c__4351__auto___30976 = cljs.core.chunk_first.call(null,seq__30920_30975__$1);
var G__30977 = cljs.core.chunk_rest.call(null,seq__30920_30975__$1);
var G__30978 = c__4351__auto___30976;
var G__30979 = cljs.core.count.call(null,c__4351__auto___30976);
var G__30980 = (0);
seq__30920_30960 = G__30977;
chunk__30921_30961 = G__30978;
count__30922_30962 = G__30979;
i__30923_30963 = G__30980;
continue;
} else {
var vec__30929_30981 = cljs.core.first.call(null,seq__30920_30975__$1);
var name_30982 = cljs.core.nth.call(null,vec__30929_30981,(0),null);
var map__30932_30983 = cljs.core.nth.call(null,vec__30929_30981,(1),null);
var map__30932_30984__$1 = ((((!((map__30932_30983 == null)))?(((((map__30932_30983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30932_30983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30932_30983):map__30932_30983);
var doc_30985 = cljs.core.get.call(null,map__30932_30984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30986 = cljs.core.get.call(null,map__30932_30984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30982);

cljs.core.println.call(null," ",arglists_30986);

if(cljs.core.truth_(doc_30985)){
cljs.core.println.call(null," ",doc_30985);
} else {
}


var G__30987 = cljs.core.next.call(null,seq__30920_30975__$1);
var G__30988 = null;
var G__30989 = (0);
var G__30990 = (0);
seq__30920_30960 = G__30987;
chunk__30921_30961 = G__30988;
count__30922_30962 = G__30989;
i__30923_30963 = G__30990;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30934 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30935 = null;
var count__30936 = (0);
var i__30937 = (0);
while(true){
if((i__30937 < count__30936)){
var role = cljs.core._nth.call(null,chunk__30935,i__30937);
var temp__5457__auto___30991__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30991__$1)){
var spec_30992 = temp__5457__auto___30991__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30992));
} else {
}


var G__30993 = seq__30934;
var G__30994 = chunk__30935;
var G__30995 = count__30936;
var G__30996 = (i__30937 + (1));
seq__30934 = G__30993;
chunk__30935 = G__30994;
count__30936 = G__30995;
i__30937 = G__30996;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30934);
if(temp__5457__auto____$1){
var seq__30934__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30934__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30934__$1);
var G__30997 = cljs.core.chunk_rest.call(null,seq__30934__$1);
var G__30998 = c__4351__auto__;
var G__30999 = cljs.core.count.call(null,c__4351__auto__);
var G__31000 = (0);
seq__30934 = G__30997;
chunk__30935 = G__30998;
count__30936 = G__30999;
i__30937 = G__31000;
continue;
} else {
var role = cljs.core.first.call(null,seq__30934__$1);
var temp__5457__auto___31001__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31001__$2)){
var spec_31002 = temp__5457__auto___31001__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31002));
} else {
}


var G__31003 = cljs.core.next.call(null,seq__30934__$1);
var G__31004 = null;
var G__31005 = (0);
var G__31006 = (0);
seq__30934 = G__31003;
chunk__30935 = G__31004;
count__30936 = G__31005;
i__30937 = G__31006;
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

//# sourceMappingURL=repl.js.map?rel=1531486670732
