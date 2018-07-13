// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31201){if((e31201 instanceof Error)){
var e = e31201;
return "Error: Unable to stringify";
} else {
throw e31201;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31204 = arguments.length;
switch (G__31204) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31202_SHARP_){
if(typeof p1__31202_SHARP_ === 'string'){
return p1__31202_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31202_SHARP_);
}
}),args)], null)], null));

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
var args__4534__auto__ = [];
var len__4531__auto___31207 = arguments.length;
var i__4532__auto___31208 = (0);
while(true){
if((i__4532__auto___31208 < len__4531__auto___31207)){
args__4534__auto__.push((arguments[i__4532__auto___31208]));

var G__31209 = (i__4532__auto___31208 + (1));
i__4532__auto___31208 = G__31209;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31206){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31206));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31211 = arguments.length;
var i__4532__auto___31212 = (0);
while(true){
if((i__4532__auto___31212 < len__4531__auto___31211)){
args__4534__auto__.push((arguments[i__4532__auto___31212]));

var G__31213 = (i__4532__auto___31212 + (1));
i__4532__auto___31212 = G__31213;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31210){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31210));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31214){
var map__31215 = p__31214;
var map__31215__$1 = ((((!((map__31215 == null)))?(((((map__31215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31215):map__31215);
var message = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31215__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__26169__auto___31294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___31294,ch){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___31294,ch){
return (function (state_31266){
var state_val_31267 = (state_31266[(1)]);
if((state_val_31267 === (7))){
var inst_31262 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31268_31295 = state_31266__$1;
(statearr_31268_31295[(2)] = inst_31262);

(statearr_31268_31295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (1))){
var state_31266__$1 = state_31266;
var statearr_31269_31296 = state_31266__$1;
(statearr_31269_31296[(2)] = null);

(statearr_31269_31296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (4))){
var inst_31219 = (state_31266[(7)]);
var inst_31219__$1 = (state_31266[(2)]);
var state_31266__$1 = (function (){var statearr_31270 = state_31266;
(statearr_31270[(7)] = inst_31219__$1);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31219__$1)){
var statearr_31271_31297 = state_31266__$1;
(statearr_31271_31297[(1)] = (5));

} else {
var statearr_31272_31298 = state_31266__$1;
(statearr_31272_31298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (15))){
var inst_31226 = (state_31266[(8)]);
var inst_31241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31226);
var inst_31242 = cljs.core.first.call(null,inst_31241);
var inst_31243 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31242);
var inst_31244 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31243)].join('');
var inst_31245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31244);
var state_31266__$1 = state_31266;
var statearr_31273_31299 = state_31266__$1;
(statearr_31273_31299[(2)] = inst_31245);

(statearr_31273_31299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (13))){
var inst_31250 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31274_31300 = state_31266__$1;
(statearr_31274_31300[(2)] = inst_31250);

(statearr_31274_31300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (6))){
var state_31266__$1 = state_31266;
var statearr_31275_31301 = state_31266__$1;
(statearr_31275_31301[(2)] = null);

(statearr_31275_31301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (17))){
var inst_31248 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31276_31302 = state_31266__$1;
(statearr_31276_31302[(2)] = inst_31248);

(statearr_31276_31302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (3))){
var inst_31264 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31266__$1,inst_31264);
} else {
if((state_val_31267 === (12))){
var inst_31225 = (state_31266[(9)]);
var inst_31239 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31225,opts);
var state_31266__$1 = state_31266;
if(cljs.core.truth_(inst_31239)){
var statearr_31277_31303 = state_31266__$1;
(statearr_31277_31303[(1)] = (15));

} else {
var statearr_31278_31304 = state_31266__$1;
(statearr_31278_31304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (2))){
var state_31266__$1 = state_31266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31266__$1,(4),ch);
} else {
if((state_val_31267 === (11))){
var inst_31226 = (state_31266[(8)]);
var inst_31231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31232 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31226);
var inst_31233 = cljs.core.async.timeout.call(null,(1000));
var inst_31234 = [inst_31232,inst_31233];
var inst_31235 = (new cljs.core.PersistentVector(null,2,(5),inst_31231,inst_31234,null));
var state_31266__$1 = state_31266;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31266__$1,(14),inst_31235);
} else {
if((state_val_31267 === (9))){
var inst_31226 = (state_31266[(8)]);
var inst_31252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31253 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31226);
var inst_31254 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31253);
var inst_31255 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31254)].join('');
var inst_31256 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31255);
var state_31266__$1 = (function (){var statearr_31279 = state_31266;
(statearr_31279[(10)] = inst_31252);

return statearr_31279;
})();
var statearr_31280_31305 = state_31266__$1;
(statearr_31280_31305[(2)] = inst_31256);

(statearr_31280_31305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (5))){
var inst_31219 = (state_31266[(7)]);
var inst_31221 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31222 = (new cljs.core.PersistentArrayMap(null,2,inst_31221,null));
var inst_31223 = (new cljs.core.PersistentHashSet(null,inst_31222,null));
var inst_31224 = figwheel.client.focus_msgs.call(null,inst_31223,inst_31219);
var inst_31225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31224);
var inst_31226 = cljs.core.first.call(null,inst_31224);
var inst_31227 = figwheel.client.autoload_QMARK_.call(null);
var state_31266__$1 = (function (){var statearr_31281 = state_31266;
(statearr_31281[(9)] = inst_31225);

(statearr_31281[(8)] = inst_31226);

return statearr_31281;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31282_31306 = state_31266__$1;
(statearr_31282_31306[(1)] = (8));

} else {
var statearr_31283_31307 = state_31266__$1;
(statearr_31283_31307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (14))){
var inst_31237 = (state_31266[(2)]);
var state_31266__$1 = state_31266;
var statearr_31284_31308 = state_31266__$1;
(statearr_31284_31308[(2)] = inst_31237);

(statearr_31284_31308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (16))){
var state_31266__$1 = state_31266;
var statearr_31285_31309 = state_31266__$1;
(statearr_31285_31309[(2)] = null);

(statearr_31285_31309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (10))){
var inst_31258 = (state_31266[(2)]);
var state_31266__$1 = (function (){var statearr_31286 = state_31266;
(statearr_31286[(11)] = inst_31258);

return statearr_31286;
})();
var statearr_31287_31310 = state_31266__$1;
(statearr_31287_31310[(2)] = null);

(statearr_31287_31310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31267 === (8))){
var inst_31225 = (state_31266[(9)]);
var inst_31229 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31225,opts);
var state_31266__$1 = state_31266;
if(cljs.core.truth_(inst_31229)){
var statearr_31288_31311 = state_31266__$1;
(statearr_31288_31311[(1)] = (11));

} else {
var statearr_31289_31312 = state_31266__$1;
(statearr_31289_31312[(1)] = (12));

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
});})(c__26169__auto___31294,ch))
;
return ((function (switch__25648__auto__,c__26169__auto___31294,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____0 = (function (){
var statearr_31290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31290[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__);

(statearr_31290[(1)] = (1));

return statearr_31290;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____1 = (function (state_31266){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_31266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object)){
var ex__25652__auto__ = e31291;
var statearr_31292_31313 = state_31266;
(statearr_31292_31313[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31314 = state_31266;
state_31266 = G__31314;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__ = function(state_31266){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____1.call(this,state_31266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25649__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___31294,ch))
})();
var state__26171__auto__ = (function (){var statearr_31293 = f__26170__auto__.call(null);
(statearr_31293[(6)] = c__26169__auto___31294);

return statearr_31293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___31294,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31315_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31315_SHARP_));
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
var base_path_31319 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31319){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31317 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31318 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31317,_STAR_print_fn_STAR_31318,sb,base_path_31319){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31317,_STAR_print_fn_STAR_31318,sb,base_path_31319))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31318;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31317;
}}catch (e31316){if((e31316 instanceof Error)){
var e = e31316;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31319], null));
} else {
var e = e31316;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31319))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31320){
var map__31321 = p__31320;
var map__31321__$1 = ((((!((map__31321 == null)))?(((((map__31321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31321):map__31321);
var opts = map__31321__$1;
var build_id = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31321,map__31321__$1,opts,build_id){
return (function (p__31323){
var vec__31324 = p__31323;
var seq__31325 = cljs.core.seq.call(null,vec__31324);
var first__31326 = cljs.core.first.call(null,seq__31325);
var seq__31325__$1 = cljs.core.next.call(null,seq__31325);
var map__31327 = first__31326;
var map__31327__$1 = ((((!((map__31327 == null)))?(((((map__31327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31327):map__31327);
var msg = map__31327__$1;
var msg_name = cljs.core.get.call(null,map__31327__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31325__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31324,seq__31325,first__31326,seq__31325__$1,map__31327,map__31327__$1,msg,msg_name,_,map__31321,map__31321__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31324,seq__31325,first__31326,seq__31325__$1,map__31327,map__31327__$1,msg,msg_name,_,map__31321,map__31321__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31321,map__31321__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31329){
var vec__31330 = p__31329;
var seq__31331 = cljs.core.seq.call(null,vec__31330);
var first__31332 = cljs.core.first.call(null,seq__31331);
var seq__31331__$1 = cljs.core.next.call(null,seq__31331);
var map__31333 = first__31332;
var map__31333__$1 = ((((!((map__31333 == null)))?(((((map__31333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);
var msg = map__31333__$1;
var msg_name = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31331__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31335){
var map__31336 = p__31335;
var map__31336__$1 = ((((!((map__31336 == null)))?(((((map__31336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31336):map__31336);
var on_compile_warning = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31336,map__31336__$1,on_compile_warning,on_compile_fail){
return (function (p__31338){
var vec__31339 = p__31338;
var seq__31340 = cljs.core.seq.call(null,vec__31339);
var first__31341 = cljs.core.first.call(null,seq__31340);
var seq__31340__$1 = cljs.core.next.call(null,seq__31340);
var map__31342 = first__31341;
var map__31342__$1 = ((((!((map__31342 == null)))?(((((map__31342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31342):map__31342);
var msg = map__31342__$1;
var msg_name = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31340__$1;
var pred__31344 = cljs.core._EQ_;
var expr__31345 = msg_name;
if(cljs.core.truth_(pred__31344.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31345))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31344.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31345))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31336,map__31336__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__,msg_hist,msg_names,msg){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31354 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31354)){
var statearr_31436_31483 = state_31434__$1;
(statearr_31436_31483[(1)] = (8));

} else {
var statearr_31437_31484 = state_31434__$1;
(statearr_31437_31484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (20))){
var inst_31428 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31438_31485 = state_31434__$1;
(statearr_31438_31485[(2)] = inst_31428);

(statearr_31438_31485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (27))){
var inst_31424 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31439_31486 = state_31434__$1;
(statearr_31439_31486[(2)] = inst_31424);

(statearr_31439_31486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var inst_31347 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31347)){
var statearr_31440_31487 = state_31434__$1;
(statearr_31440_31487[(1)] = (2));

} else {
var statearr_31441_31488 = state_31434__$1;
(statearr_31441_31488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (24))){
var inst_31426 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31442_31489 = state_31434__$1;
(statearr_31442_31489[(2)] = inst_31426);

(statearr_31442_31489[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (15))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31443_31490 = state_31434__$1;
(statearr_31443_31490[(2)] = inst_31430);

(statearr_31443_31490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (21))){
var inst_31383 = (state_31434[(2)]);
var inst_31384 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31385 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31384);
var state_31434__$1 = (function (){var statearr_31444 = state_31434;
(statearr_31444[(7)] = inst_31383);

return statearr_31444;
})();
var statearr_31445_31491 = state_31434__$1;
(statearr_31445_31491[(2)] = inst_31385);

(statearr_31445_31491[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (31))){
var inst_31413 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31413)){
var statearr_31446_31492 = state_31434__$1;
(statearr_31446_31492[(1)] = (34));

} else {
var statearr_31447_31493 = state_31434__$1;
(statearr_31447_31493[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (32))){
var inst_31422 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31448_31494 = state_31434__$1;
(statearr_31448_31494[(2)] = inst_31422);

(statearr_31448_31494[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (33))){
var inst_31409 = (state_31434[(2)]);
var inst_31410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31411 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31410);
var state_31434__$1 = (function (){var statearr_31449 = state_31434;
(statearr_31449[(8)] = inst_31409);

return statearr_31449;
})();
var statearr_31450_31495 = state_31434__$1;
(statearr_31450_31495[(2)] = inst_31411);

(statearr_31450_31495[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var inst_31368 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(16),inst_31368);
} else {
if((state_val_31435 === (22))){
var inst_31389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31390 = figwheel.client.heads_up.append_warning_message.call(null,inst_31389);
var state_31434__$1 = state_31434;
var statearr_31451_31496 = state_31434__$1;
(statearr_31451_31496[(2)] = inst_31390);

(statearr_31451_31496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (36))){
var inst_31420 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31452_31497 = state_31434__$1;
(statearr_31452_31497[(2)] = inst_31420);

(statearr_31452_31497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (29))){
var inst_31400 = (state_31434[(2)]);
var inst_31401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31402 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31401);
var state_31434__$1 = (function (){var statearr_31453 = state_31434;
(statearr_31453[(9)] = inst_31400);

return statearr_31453;
})();
var statearr_31454_31498 = state_31434__$1;
(statearr_31454_31498[(2)] = inst_31402);

(statearr_31454_31498[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31349 = (state_31434[(10)]);
var state_31434__$1 = state_31434;
var statearr_31455_31499 = state_31434__$1;
(statearr_31455_31499[(2)] = inst_31349);

(statearr_31455_31499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (28))){
var inst_31396 = (state_31434[(2)]);
var inst_31397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31398 = figwheel.client.heads_up.display_warning.call(null,inst_31397);
var state_31434__$1 = (function (){var statearr_31456 = state_31434;
(statearr_31456[(11)] = inst_31396);

return statearr_31456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(29),inst_31398);
} else {
if((state_val_31435 === (25))){
var inst_31394 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(28),inst_31394);
} else {
if((state_val_31435 === (34))){
var inst_31415 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(37),inst_31415);
} else {
if((state_val_31435 === (17))){
var inst_31374 = (state_31434[(2)]);
var inst_31375 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31376 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31375);
var state_31434__$1 = (function (){var statearr_31457 = state_31434;
(statearr_31457[(12)] = inst_31374);

return statearr_31457;
})();
var statearr_31458_31500 = state_31434__$1;
(statearr_31458_31500[(2)] = inst_31376);

(statearr_31458_31500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31366 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31366)){
var statearr_31459_31501 = state_31434__$1;
(statearr_31459_31501[(1)] = (13));

} else {
var statearr_31460_31502 = state_31434__$1;
(statearr_31460_31502[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (12))){
var inst_31362 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31461_31503 = state_31434__$1;
(statearr_31461_31503[(2)] = inst_31362);

(statearr_31461_31503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (2))){
var inst_31349 = (state_31434[(10)]);
var inst_31349__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31434__$1 = (function (){var statearr_31462 = state_31434;
(statearr_31462[(10)] = inst_31349__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31349__$1)){
var statearr_31463_31504 = state_31434__$1;
(statearr_31463_31504[(1)] = (5));

} else {
var statearr_31464_31505 = state_31434__$1;
(statearr_31464_31505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (23))){
var inst_31392 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31392)){
var statearr_31465_31506 = state_31434__$1;
(statearr_31465_31506[(1)] = (25));

} else {
var statearr_31466_31507 = state_31434__$1;
(statearr_31466_31507[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (35))){
var state_31434__$1 = state_31434;
var statearr_31467_31508 = state_31434__$1;
(statearr_31467_31508[(2)] = null);

(statearr_31467_31508[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (19))){
var inst_31387 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31387)){
var statearr_31468_31509 = state_31434__$1;
(statearr_31468_31509[(1)] = (22));

} else {
var statearr_31469_31510 = state_31434__$1;
(statearr_31469_31510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (11))){
var inst_31358 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31470_31511 = state_31434__$1;
(statearr_31470_31511[(2)] = inst_31358);

(statearr_31470_31511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31360 = figwheel.client.heads_up.clear.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(12),inst_31360);
} else {
if((state_val_31435 === (5))){
var inst_31351 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31434__$1 = state_31434;
var statearr_31471_31512 = state_31434__$1;
(statearr_31471_31512[(2)] = inst_31351);

(statearr_31471_31512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31378 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31378)){
var statearr_31472_31513 = state_31434__$1;
(statearr_31472_31513[(1)] = (18));

} else {
var statearr_31473_31514 = state_31434__$1;
(statearr_31473_31514[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (26))){
var inst_31404 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31404)){
var statearr_31474_31515 = state_31434__$1;
(statearr_31474_31515[(1)] = (30));

} else {
var statearr_31475_31516 = state_31434__$1;
(statearr_31475_31516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (16))){
var inst_31370 = (state_31434[(2)]);
var inst_31371 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31372 = figwheel.client.heads_up.display_exception.call(null,inst_31371);
var state_31434__$1 = (function (){var statearr_31476 = state_31434;
(statearr_31476[(13)] = inst_31370);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(17),inst_31372);
} else {
if((state_val_31435 === (30))){
var inst_31406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31407 = figwheel.client.heads_up.display_warning.call(null,inst_31406);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(33),inst_31407);
} else {
if((state_val_31435 === (10))){
var inst_31364 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31477_31517 = state_31434__$1;
(statearr_31477_31517[(2)] = inst_31364);

(statearr_31477_31517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (18))){
var inst_31380 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31381 = figwheel.client.heads_up.display_exception.call(null,inst_31380);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(21),inst_31381);
} else {
if((state_val_31435 === (37))){
var inst_31417 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31478_31518 = state_31434__$1;
(statearr_31478_31518[(2)] = inst_31417);

(statearr_31478_31518[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31356 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(11),inst_31356);
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
});})(c__26169__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25648__auto__,c__26169__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____0 = (function (){
var statearr_31479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31479[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__);

(statearr_31479[(1)] = (1));

return statearr_31479;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____1 = (function (state_31434){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e31480){if((e31480 instanceof Object)){
var ex__25652__auto__ = e31480;
var statearr_31481_31519 = state_31434;
(statearr_31481_31519[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31520 = state_31434;
state_31434 = G__31520;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__,msg_hist,msg_names,msg))
})();
var state__26171__auto__ = (function (){var statearr_31482 = f__26170__auto__.call(null);
(statearr_31482[(6)] = c__26169__auto__);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__,msg_hist,msg_names,msg))
);

return c__26169__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26169__auto___31549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___31549,ch){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___31549,ch){
return (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (1))){
var state_31535__$1 = state_31535;
var statearr_31537_31550 = state_31535__$1;
(statearr_31537_31550[(2)] = null);

(statearr_31537_31550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (2))){
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31535__$1,(4),ch);
} else {
if((state_val_31536 === (3))){
var inst_31533 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31535__$1,inst_31533);
} else {
if((state_val_31536 === (4))){
var inst_31523 = (state_31535[(7)]);
var inst_31523__$1 = (state_31535[(2)]);
var state_31535__$1 = (function (){var statearr_31538 = state_31535;
(statearr_31538[(7)] = inst_31523__$1);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31523__$1)){
var statearr_31539_31551 = state_31535__$1;
(statearr_31539_31551[(1)] = (5));

} else {
var statearr_31540_31552 = state_31535__$1;
(statearr_31540_31552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (5))){
var inst_31523 = (state_31535[(7)]);
var inst_31525 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31523);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31535__$1,(8),inst_31525);
} else {
if((state_val_31536 === (6))){
var state_31535__$1 = state_31535;
var statearr_31541_31553 = state_31535__$1;
(statearr_31541_31553[(2)] = null);

(statearr_31541_31553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (7))){
var inst_31531 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31542_31554 = state_31535__$1;
(statearr_31542_31554[(2)] = inst_31531);

(statearr_31542_31554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (8))){
var inst_31527 = (state_31535[(2)]);
var state_31535__$1 = (function (){var statearr_31543 = state_31535;
(statearr_31543[(8)] = inst_31527);

return statearr_31543;
})();
var statearr_31544_31555 = state_31535__$1;
(statearr_31544_31555[(2)] = null);

(statearr_31544_31555[(1)] = (2));


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
});})(c__26169__auto___31549,ch))
;
return ((function (switch__25648__auto__,c__26169__auto___31549,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25649__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25649__auto____0 = (function (){
var statearr_31545 = [null,null,null,null,null,null,null,null,null];
(statearr_31545[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25649__auto__);

(statearr_31545[(1)] = (1));

return statearr_31545;
});
var figwheel$client$heads_up_plugin_$_state_machine__25649__auto____1 = (function (state_31535){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_31535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e31546){if((e31546 instanceof Object)){
var ex__25652__auto__ = e31546;
var statearr_31547_31556 = state_31535;
(statearr_31547_31556[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31557 = state_31535;
state_31535 = G__31557;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25649__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25649__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25649__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25649__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___31549,ch))
})();
var state__26171__auto__ = (function (){var statearr_31548 = f__26170__auto__.call(null);
(statearr_31548[(6)] = c__26169__auto___31549);

return statearr_31548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___31549,ch))
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
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (1))){
var inst_31558 = cljs.core.async.timeout.call(null,(3000));
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31563__$1,(2),inst_31558);
} else {
if((state_val_31564 === (2))){
var inst_31560 = (state_31563[(2)]);
var inst_31561 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31563__$1 = (function (){var statearr_31565 = state_31563;
(statearr_31565[(7)] = inst_31560);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31563__$1,inst_31561);
} else {
return null;
}
}
});})(c__26169__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____0 = (function (){
var statearr_31566 = [null,null,null,null,null,null,null,null];
(statearr_31566[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__);

(statearr_31566[(1)] = (1));

return statearr_31566;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____1 = (function (state_31563){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_31563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e31567){if((e31567 instanceof Object)){
var ex__25652__auto__ = e31567;
var statearr_31568_31570 = state_31563;
(statearr_31568_31570[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31571 = state_31563;
state_31563 = G__31571;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25649__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__))
})();
var state__26171__auto__ = (function (){var statearr_31569 = f__26170__auto__.call(null);
(statearr_31569[(6)] = c__26169__auto__);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__))
);

return c__26169__auto__;
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
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31578){
var state_val_31579 = (state_31578[(1)]);
if((state_val_31579 === (1))){
var inst_31572 = cljs.core.async.timeout.call(null,(2000));
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31578__$1,(2),inst_31572);
} else {
if((state_val_31579 === (2))){
var inst_31574 = (state_31578[(2)]);
var inst_31575 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31576 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31575);
var state_31578__$1 = (function (){var statearr_31580 = state_31578;
(statearr_31580[(7)] = inst_31574);

return statearr_31580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31578__$1,inst_31576);
} else {
return null;
}
}
});})(c__26169__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____0 = (function (){
var statearr_31581 = [null,null,null,null,null,null,null,null];
(statearr_31581[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__);

(statearr_31581[(1)] = (1));

return statearr_31581;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____1 = (function (state_31578){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_31578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e31582){if((e31582 instanceof Object)){
var ex__25652__auto__ = e31582;
var statearr_31583_31585 = state_31578;
(statearr_31583_31585[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31586 = state_31578;
state_31578 = G__31586;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__ = function(state_31578){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____1.call(this,state_31578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26171__auto__ = (function (){var statearr_31584 = f__26170__auto__.call(null);
(statearr_31584[(6)] = c__26169__auto__);

return statearr_31584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__,figwheel_version,temp__5457__auto__))
);

return c__26169__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31587){
var map__31588 = p__31587;
var map__31588__$1 = ((((!((map__31588 == null)))?(((((map__31588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31588):map__31588);
var file = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31590 = "";
var G__31590__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31590),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31590);
var G__31590__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31590__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31590__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31590__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31590__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31591){
var map__31592 = p__31591;
var map__31592__$1 = ((((!((map__31592 == null)))?(((((map__31592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31592):map__31592);
var ed = map__31592__$1;
var formatted_exception = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31594_31598 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31595_31599 = null;
var count__31596_31600 = (0);
var i__31597_31601 = (0);
while(true){
if((i__31597_31601 < count__31596_31600)){
var msg_31602 = cljs.core._nth.call(null,chunk__31595_31599,i__31597_31601);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31602);


var G__31603 = seq__31594_31598;
var G__31604 = chunk__31595_31599;
var G__31605 = count__31596_31600;
var G__31606 = (i__31597_31601 + (1));
seq__31594_31598 = G__31603;
chunk__31595_31599 = G__31604;
count__31596_31600 = G__31605;
i__31597_31601 = G__31606;
continue;
} else {
var temp__5457__auto___31607 = cljs.core.seq.call(null,seq__31594_31598);
if(temp__5457__auto___31607){
var seq__31594_31608__$1 = temp__5457__auto___31607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31594_31608__$1)){
var c__4351__auto___31609 = cljs.core.chunk_first.call(null,seq__31594_31608__$1);
var G__31610 = cljs.core.chunk_rest.call(null,seq__31594_31608__$1);
var G__31611 = c__4351__auto___31609;
var G__31612 = cljs.core.count.call(null,c__4351__auto___31609);
var G__31613 = (0);
seq__31594_31598 = G__31610;
chunk__31595_31599 = G__31611;
count__31596_31600 = G__31612;
i__31597_31601 = G__31613;
continue;
} else {
var msg_31614 = cljs.core.first.call(null,seq__31594_31608__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31614);


var G__31615 = cljs.core.next.call(null,seq__31594_31608__$1);
var G__31616 = null;
var G__31617 = (0);
var G__31618 = (0);
seq__31594_31598 = G__31615;
chunk__31595_31599 = G__31616;
count__31596_31600 = G__31617;
i__31597_31601 = G__31618;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31619){
var map__31620 = p__31619;
var map__31620__$1 = ((((!((map__31620 == null)))?(((((map__31620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);
var w = map__31620__$1;
var message = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31622 = cljs.core.seq.call(null,plugins);
var chunk__31623 = null;
var count__31624 = (0);
var i__31625 = (0);
while(true){
if((i__31625 < count__31624)){
var vec__31626 = cljs.core._nth.call(null,chunk__31623,i__31625);
var k = cljs.core.nth.call(null,vec__31626,(0),null);
var plugin = cljs.core.nth.call(null,vec__31626,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31632 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31622,chunk__31623,count__31624,i__31625,pl_31632,vec__31626,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31632.call(null,msg_hist);
});})(seq__31622,chunk__31623,count__31624,i__31625,pl_31632,vec__31626,k,plugin))
);
} else {
}


var G__31633 = seq__31622;
var G__31634 = chunk__31623;
var G__31635 = count__31624;
var G__31636 = (i__31625 + (1));
seq__31622 = G__31633;
chunk__31623 = G__31634;
count__31624 = G__31635;
i__31625 = G__31636;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31622);
if(temp__5457__auto__){
var seq__31622__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31622__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31622__$1);
var G__31637 = cljs.core.chunk_rest.call(null,seq__31622__$1);
var G__31638 = c__4351__auto__;
var G__31639 = cljs.core.count.call(null,c__4351__auto__);
var G__31640 = (0);
seq__31622 = G__31637;
chunk__31623 = G__31638;
count__31624 = G__31639;
i__31625 = G__31640;
continue;
} else {
var vec__31629 = cljs.core.first.call(null,seq__31622__$1);
var k = cljs.core.nth.call(null,vec__31629,(0),null);
var plugin = cljs.core.nth.call(null,vec__31629,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31641 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31622,chunk__31623,count__31624,i__31625,pl_31641,vec__31629,k,plugin,seq__31622__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31641.call(null,msg_hist);
});})(seq__31622,chunk__31623,count__31624,i__31625,pl_31641,vec__31629,k,plugin,seq__31622__$1,temp__5457__auto__))
);
} else {
}


var G__31642 = cljs.core.next.call(null,seq__31622__$1);
var G__31643 = null;
var G__31644 = (0);
var G__31645 = (0);
seq__31622 = G__31642;
chunk__31623 = G__31643;
count__31624 = G__31644;
i__31625 = G__31645;
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
var G__31647 = arguments.length;
switch (G__31647) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31648_31653 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31649_31654 = null;
var count__31650_31655 = (0);
var i__31651_31656 = (0);
while(true){
if((i__31651_31656 < count__31650_31655)){
var msg_31657 = cljs.core._nth.call(null,chunk__31649_31654,i__31651_31656);
figwheel.client.socket.handle_incoming_message.call(null,msg_31657);


var G__31658 = seq__31648_31653;
var G__31659 = chunk__31649_31654;
var G__31660 = count__31650_31655;
var G__31661 = (i__31651_31656 + (1));
seq__31648_31653 = G__31658;
chunk__31649_31654 = G__31659;
count__31650_31655 = G__31660;
i__31651_31656 = G__31661;
continue;
} else {
var temp__5457__auto___31662 = cljs.core.seq.call(null,seq__31648_31653);
if(temp__5457__auto___31662){
var seq__31648_31663__$1 = temp__5457__auto___31662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31648_31663__$1)){
var c__4351__auto___31664 = cljs.core.chunk_first.call(null,seq__31648_31663__$1);
var G__31665 = cljs.core.chunk_rest.call(null,seq__31648_31663__$1);
var G__31666 = c__4351__auto___31664;
var G__31667 = cljs.core.count.call(null,c__4351__auto___31664);
var G__31668 = (0);
seq__31648_31653 = G__31665;
chunk__31649_31654 = G__31666;
count__31650_31655 = G__31667;
i__31651_31656 = G__31668;
continue;
} else {
var msg_31669 = cljs.core.first.call(null,seq__31648_31663__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31669);


var G__31670 = cljs.core.next.call(null,seq__31648_31663__$1);
var G__31671 = null;
var G__31672 = (0);
var G__31673 = (0);
seq__31648_31653 = G__31670;
chunk__31649_31654 = G__31671;
count__31650_31655 = G__31672;
i__31651_31656 = G__31673;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31678 = arguments.length;
var i__4532__auto___31679 = (0);
while(true){
if((i__4532__auto___31679 < len__4531__auto___31678)){
args__4534__auto__.push((arguments[i__4532__auto___31679]));

var G__31680 = (i__4532__auto___31679 + (1));
i__4532__auto___31679 = G__31680;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31675){
var map__31676 = p__31675;
var map__31676__$1 = ((((!((map__31676 == null)))?(((((map__31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31676):map__31676);
var opts = map__31676__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31674){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31674));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31681){if((e31681 instanceof Error)){
var e = e31681;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31681;

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
return (function (p__31682){
var map__31683 = p__31682;
var map__31683__$1 = ((((!((map__31683 == null)))?(((((map__31683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);
var msg_name = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1531486672627
