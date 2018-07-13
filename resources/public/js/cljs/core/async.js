// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26229 = arguments.length;
switch (G__26229) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26230 = (function (f,blockable,meta26231){
this.f = f;
this.blockable = blockable;
this.meta26231 = meta26231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26232,meta26231__$1){
var self__ = this;
var _26232__$1 = this;
return (new cljs.core.async.t_cljs$core$async26230(self__.f,self__.blockable,meta26231__$1));
});

cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26232){
var self__ = this;
var _26232__$1 = this;
return self__.meta26231;
});

cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26231","meta26231",-899050767,null)], null);
});

cljs.core.async.t_cljs$core$async26230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26230";

cljs.core.async.t_cljs$core$async26230.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26230");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26230.
 */
cljs.core.async.__GT_t_cljs$core$async26230 = (function cljs$core$async$__GT_t_cljs$core$async26230(f__$1,blockable__$1,meta26231){
return (new cljs.core.async.t_cljs$core$async26230(f__$1,blockable__$1,meta26231));
});

}

return (new cljs.core.async.t_cljs$core$async26230(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__26236 = arguments.length;
switch (G__26236) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__26239 = arguments.length;
switch (G__26239) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26242 = arguments.length;
switch (G__26242) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26244 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26244);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26244,ret){
return (function (){
return fn1.call(null,val_26244);
});})(val_26244,ret))
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
var G__26246 = arguments.length;
switch (G__26246) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4408__auto___26248 = n;
var x_26249 = (0);
while(true){
if((x_26249 < n__4408__auto___26248)){
(a[x_26249] = (0));

var G__26250 = (x_26249 + (1));
x_26249 = G__26250;
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

var G__26251 = (i + (1));
i = G__26251;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26252 = (function (flag,meta26253){
this.flag = flag;
this.meta26253 = meta26253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26254,meta26253__$1){
var self__ = this;
var _26254__$1 = this;
return (new cljs.core.async.t_cljs$core$async26252(self__.flag,meta26253__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26254){
var self__ = this;
var _26254__$1 = this;
return self__.meta26253;
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26253","meta26253",865541659,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26252";

cljs.core.async.t_cljs$core$async26252.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26252");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26252.
 */
cljs.core.async.__GT_t_cljs$core$async26252 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26252(flag__$1,meta26253){
return (new cljs.core.async.t_cljs$core$async26252(flag__$1,meta26253));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26252(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26255 = (function (flag,cb,meta26256){
this.flag = flag;
this.cb = cb;
this.meta26256 = meta26256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26257,meta26256__$1){
var self__ = this;
var _26257__$1 = this;
return (new cljs.core.async.t_cljs$core$async26255(self__.flag,self__.cb,meta26256__$1));
});

cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26257){
var self__ = this;
var _26257__$1 = this;
return self__.meta26256;
});

cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26256","meta26256",-1733352060,null)], null);
});

cljs.core.async.t_cljs$core$async26255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26255";

cljs.core.async.t_cljs$core$async26255.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26255");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26255.
 */
cljs.core.async.__GT_t_cljs$core$async26255 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26255(flag__$1,cb__$1,meta26256){
return (new cljs.core.async.t_cljs$core$async26255(flag__$1,cb__$1,meta26256));
});

}

return (new cljs.core.async.t_cljs$core$async26255(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26258_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26258_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26259_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26260 = (i + (1));
i = G__26260;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___26266 = arguments.length;
var i__4532__auto___26267 = (0);
while(true){
if((i__4532__auto___26267 < len__4531__auto___26266)){
args__4534__auto__.push((arguments[i__4532__auto___26267]));

var G__26268 = (i__4532__auto___26267 + (1));
i__4532__auto___26267 = G__26268;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26263){
var map__26264 = p__26263;
var map__26264__$1 = ((((!((map__26264 == null)))?(((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26264):map__26264);
var opts = map__26264__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26261){
var G__26262 = cljs.core.first.call(null,seq26261);
var seq26261__$1 = cljs.core.next.call(null,seq26261);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26262,seq26261__$1);
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
var G__26270 = arguments.length;
switch (G__26270) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26169__auto___26316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___26316){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___26316){
return (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (7))){
var inst_26290 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26296_26317 = state_26294__$1;
(statearr_26296_26317[(2)] = inst_26290);

(statearr_26296_26317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (1))){
var state_26294__$1 = state_26294;
var statearr_26297_26318 = state_26294__$1;
(statearr_26297_26318[(2)] = null);

(statearr_26297_26318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (4))){
var inst_26273 = (state_26294[(7)]);
var inst_26273__$1 = (state_26294[(2)]);
var inst_26274 = (inst_26273__$1 == null);
var state_26294__$1 = (function (){var statearr_26298 = state_26294;
(statearr_26298[(7)] = inst_26273__$1);

return statearr_26298;
})();
if(cljs.core.truth_(inst_26274)){
var statearr_26299_26319 = state_26294__$1;
(statearr_26299_26319[(1)] = (5));

} else {
var statearr_26300_26320 = state_26294__$1;
(statearr_26300_26320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (13))){
var state_26294__$1 = state_26294;
var statearr_26301_26321 = state_26294__$1;
(statearr_26301_26321[(2)] = null);

(statearr_26301_26321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (6))){
var inst_26273 = (state_26294[(7)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(11),to,inst_26273);
} else {
if((state_val_26295 === (3))){
var inst_26292 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else {
if((state_val_26295 === (12))){
var state_26294__$1 = state_26294;
var statearr_26302_26322 = state_26294__$1;
(statearr_26302_26322[(2)] = null);

(statearr_26302_26322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (2))){
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(4),from);
} else {
if((state_val_26295 === (11))){
var inst_26283 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
if(cljs.core.truth_(inst_26283)){
var statearr_26303_26323 = state_26294__$1;
(statearr_26303_26323[(1)] = (12));

} else {
var statearr_26304_26324 = state_26294__$1;
(statearr_26304_26324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (9))){
var state_26294__$1 = state_26294;
var statearr_26305_26325 = state_26294__$1;
(statearr_26305_26325[(2)] = null);

(statearr_26305_26325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (5))){
var state_26294__$1 = state_26294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26306_26326 = state_26294__$1;
(statearr_26306_26326[(1)] = (8));

} else {
var statearr_26307_26327 = state_26294__$1;
(statearr_26307_26327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (14))){
var inst_26288 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26308_26328 = state_26294__$1;
(statearr_26308_26328[(2)] = inst_26288);

(statearr_26308_26328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (10))){
var inst_26280 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26309_26329 = state_26294__$1;
(statearr_26309_26329[(2)] = inst_26280);

(statearr_26309_26329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (8))){
var inst_26277 = cljs.core.async.close_BANG_.call(null,to);
var state_26294__$1 = state_26294;
var statearr_26310_26330 = state_26294__$1;
(statearr_26310_26330[(2)] = inst_26277);

(statearr_26310_26330[(1)] = (10));


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
});})(c__26169__auto___26316))
;
return ((function (switch__25648__auto__,c__26169__auto___26316){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_26311 = [null,null,null,null,null,null,null,null];
(statearr_26311[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_26311[(1)] = (1));

return statearr_26311;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_26294){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object)){
var ex__25652__auto__ = e26312;
var statearr_26313_26331 = state_26294;
(statearr_26313_26331[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26332 = state_26294;
state_26294 = G__26332;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___26316))
})();
var state__26171__auto__ = (function (){var statearr_26314 = f__26170__auto__.call(null);
(statearr_26314[(6)] = c__26169__auto___26316);

return statearr_26314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___26316))
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
return (function (p__26333){
var vec__26334 = p__26333;
var v = cljs.core.nth.call(null,vec__26334,(0),null);
var p = cljs.core.nth.call(null,vec__26334,(1),null);
var job = vec__26334;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26169__auto___26505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results){
return (function (state_26341){
var state_val_26342 = (state_26341[(1)]);
if((state_val_26342 === (1))){
var state_26341__$1 = state_26341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26341__$1,(2),res,v);
} else {
if((state_val_26342 === (2))){
var inst_26338 = (state_26341[(2)]);
var inst_26339 = cljs.core.async.close_BANG_.call(null,res);
var state_26341__$1 = (function (){var statearr_26343 = state_26341;
(statearr_26343[(7)] = inst_26338);

return statearr_26343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26341__$1,inst_26339);
} else {
return null;
}
}
});})(c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results))
;
return ((function (switch__25648__auto__,c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_26344 = [null,null,null,null,null,null,null,null];
(statearr_26344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__);

(statearr_26344[(1)] = (1));

return statearr_26344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1 = (function (state_26341){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26345){if((e26345 instanceof Object)){
var ex__25652__auto__ = e26345;
var statearr_26346_26506 = state_26341;
(statearr_26346_26506[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26507 = state_26341;
state_26341 = G__26507;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = function(state_26341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1.call(this,state_26341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results))
})();
var state__26171__auto__ = (function (){var statearr_26347 = f__26170__auto__.call(null);
(statearr_26347[(6)] = c__26169__auto___26505);

return statearr_26347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___26505,res,vec__26334,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26348){
var vec__26349 = p__26348;
var v = cljs.core.nth.call(null,vec__26349,(0),null);
var p = cljs.core.nth.call(null,vec__26349,(1),null);
var job = vec__26349;
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
var n__4408__auto___26508 = n;
var __26509 = (0);
while(true){
if((__26509 < n__4408__auto___26508)){
var G__26352_26510 = type;
var G__26352_26511__$1 = (((G__26352_26510 instanceof cljs.core.Keyword))?G__26352_26510.fqn:null);
switch (G__26352_26511__$1) {
case "compute":
var c__26169__auto___26513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26509,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (__26509,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function (state_26365){
var state_val_26366 = (state_26365[(1)]);
if((state_val_26366 === (1))){
var state_26365__$1 = state_26365;
var statearr_26367_26514 = state_26365__$1;
(statearr_26367_26514[(2)] = null);

(statearr_26367_26514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (2))){
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26365__$1,(4),jobs);
} else {
if((state_val_26366 === (3))){
var inst_26363 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26365__$1,inst_26363);
} else {
if((state_val_26366 === (4))){
var inst_26355 = (state_26365[(2)]);
var inst_26356 = process.call(null,inst_26355);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26356)){
var statearr_26368_26515 = state_26365__$1;
(statearr_26368_26515[(1)] = (5));

} else {
var statearr_26369_26516 = state_26365__$1;
(statearr_26369_26516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (5))){
var state_26365__$1 = state_26365;
var statearr_26370_26517 = state_26365__$1;
(statearr_26370_26517[(2)] = null);

(statearr_26370_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (6))){
var state_26365__$1 = state_26365;
var statearr_26371_26518 = state_26365__$1;
(statearr_26371_26518[(2)] = null);

(statearr_26371_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (7))){
var inst_26361 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26372_26519 = state_26365__$1;
(statearr_26372_26519[(2)] = inst_26361);

(statearr_26372_26519[(1)] = (3));


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
});})(__26509,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
;
return ((function (__26509,switch__25648__auto__,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_26373 = [null,null,null,null,null,null,null];
(statearr_26373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__);

(statearr_26373[(1)] = (1));

return statearr_26373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1 = (function (state_26365){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26374){if((e26374 instanceof Object)){
var ex__25652__auto__ = e26374;
var statearr_26375_26520 = state_26365;
(statearr_26375_26520[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26365;
state_26365 = G__26521;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = function(state_26365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1.call(this,state_26365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__;
})()
;})(__26509,switch__25648__auto__,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
})();
var state__26171__auto__ = (function (){var statearr_26376 = f__26170__auto__.call(null);
(statearr_26376[(6)] = c__26169__auto___26513);

return statearr_26376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(__26509,c__26169__auto___26513,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
);


break;
case "async":
var c__26169__auto___26522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26509,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (__26509,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function (state_26389){
var state_val_26390 = (state_26389[(1)]);
if((state_val_26390 === (1))){
var state_26389__$1 = state_26389;
var statearr_26391_26523 = state_26389__$1;
(statearr_26391_26523[(2)] = null);

(statearr_26391_26523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (2))){
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26389__$1,(4),jobs);
} else {
if((state_val_26390 === (3))){
var inst_26387 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26389__$1,inst_26387);
} else {
if((state_val_26390 === (4))){
var inst_26379 = (state_26389[(2)]);
var inst_26380 = async.call(null,inst_26379);
var state_26389__$1 = state_26389;
if(cljs.core.truth_(inst_26380)){
var statearr_26392_26524 = state_26389__$1;
(statearr_26392_26524[(1)] = (5));

} else {
var statearr_26393_26525 = state_26389__$1;
(statearr_26393_26525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (5))){
var state_26389__$1 = state_26389;
var statearr_26394_26526 = state_26389__$1;
(statearr_26394_26526[(2)] = null);

(statearr_26394_26526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (6))){
var state_26389__$1 = state_26389;
var statearr_26395_26527 = state_26389__$1;
(statearr_26395_26527[(2)] = null);

(statearr_26395_26527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26390 === (7))){
var inst_26385 = (state_26389[(2)]);
var state_26389__$1 = state_26389;
var statearr_26396_26528 = state_26389__$1;
(statearr_26396_26528[(2)] = inst_26385);

(statearr_26396_26528[(1)] = (3));


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
});})(__26509,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
;
return ((function (__26509,switch__25648__auto__,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_26397 = [null,null,null,null,null,null,null];
(statearr_26397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__);

(statearr_26397[(1)] = (1));

return statearr_26397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1 = (function (state_26389){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26398){if((e26398 instanceof Object)){
var ex__25652__auto__ = e26398;
var statearr_26399_26529 = state_26389;
(statearr_26399_26529[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26530 = state_26389;
state_26389 = G__26530;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = function(state_26389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1.call(this,state_26389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__;
})()
;})(__26509,switch__25648__auto__,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
})();
var state__26171__auto__ = (function (){var statearr_26400 = f__26170__auto__.call(null);
(statearr_26400[(6)] = c__26169__auto___26522);

return statearr_26400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(__26509,c__26169__auto___26522,G__26352_26510,G__26352_26511__$1,n__4408__auto___26508,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26352_26511__$1)].join('')));

}

var G__26531 = (__26509 + (1));
__26509 = G__26531;
continue;
} else {
}
break;
}

var c__26169__auto___26532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___26532,jobs,results,process,async){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___26532,jobs,results,process,async){
return (function (state_26422){
var state_val_26423 = (state_26422[(1)]);
if((state_val_26423 === (1))){
var state_26422__$1 = state_26422;
var statearr_26424_26533 = state_26422__$1;
(statearr_26424_26533[(2)] = null);

(statearr_26424_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (2))){
var state_26422__$1 = state_26422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26422__$1,(4),from);
} else {
if((state_val_26423 === (3))){
var inst_26420 = (state_26422[(2)]);
var state_26422__$1 = state_26422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26422__$1,inst_26420);
} else {
if((state_val_26423 === (4))){
var inst_26403 = (state_26422[(7)]);
var inst_26403__$1 = (state_26422[(2)]);
var inst_26404 = (inst_26403__$1 == null);
var state_26422__$1 = (function (){var statearr_26425 = state_26422;
(statearr_26425[(7)] = inst_26403__$1);

return statearr_26425;
})();
if(cljs.core.truth_(inst_26404)){
var statearr_26426_26534 = state_26422__$1;
(statearr_26426_26534[(1)] = (5));

} else {
var statearr_26427_26535 = state_26422__$1;
(statearr_26427_26535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (5))){
var inst_26406 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26422__$1 = state_26422;
var statearr_26428_26536 = state_26422__$1;
(statearr_26428_26536[(2)] = inst_26406);

(statearr_26428_26536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (6))){
var inst_26408 = (state_26422[(8)]);
var inst_26403 = (state_26422[(7)]);
var inst_26408__$1 = cljs.core.async.chan.call(null,(1));
var inst_26409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26410 = [inst_26403,inst_26408__$1];
var inst_26411 = (new cljs.core.PersistentVector(null,2,(5),inst_26409,inst_26410,null));
var state_26422__$1 = (function (){var statearr_26429 = state_26422;
(statearr_26429[(8)] = inst_26408__$1);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26422__$1,(8),jobs,inst_26411);
} else {
if((state_val_26423 === (7))){
var inst_26418 = (state_26422[(2)]);
var state_26422__$1 = state_26422;
var statearr_26430_26537 = state_26422__$1;
(statearr_26430_26537[(2)] = inst_26418);

(statearr_26430_26537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (8))){
var inst_26408 = (state_26422[(8)]);
var inst_26413 = (state_26422[(2)]);
var state_26422__$1 = (function (){var statearr_26431 = state_26422;
(statearr_26431[(9)] = inst_26413);

return statearr_26431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26422__$1,(9),results,inst_26408);
} else {
if((state_val_26423 === (9))){
var inst_26415 = (state_26422[(2)]);
var state_26422__$1 = (function (){var statearr_26432 = state_26422;
(statearr_26432[(10)] = inst_26415);

return statearr_26432;
})();
var statearr_26433_26538 = state_26422__$1;
(statearr_26433_26538[(2)] = null);

(statearr_26433_26538[(1)] = (2));


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
});})(c__26169__auto___26532,jobs,results,process,async))
;
return ((function (switch__25648__auto__,c__26169__auto___26532,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_26434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__);

(statearr_26434[(1)] = (1));

return statearr_26434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1 = (function (state_26422){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26435){if((e26435 instanceof Object)){
var ex__25652__auto__ = e26435;
var statearr_26436_26539 = state_26422;
(statearr_26436_26539[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26540 = state_26422;
state_26422 = G__26540;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = function(state_26422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1.call(this,state_26422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___26532,jobs,results,process,async))
})();
var state__26171__auto__ = (function (){var statearr_26437 = f__26170__auto__.call(null);
(statearr_26437[(6)] = c__26169__auto___26532);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___26532,jobs,results,process,async))
);


var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__,jobs,results,process,async){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__,jobs,results,process,async){
return (function (state_26475){
var state_val_26476 = (state_26475[(1)]);
if((state_val_26476 === (7))){
var inst_26471 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26477_26541 = state_26475__$1;
(statearr_26477_26541[(2)] = inst_26471);

(statearr_26477_26541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (20))){
var state_26475__$1 = state_26475;
var statearr_26478_26542 = state_26475__$1;
(statearr_26478_26542[(2)] = null);

(statearr_26478_26542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (1))){
var state_26475__$1 = state_26475;
var statearr_26479_26543 = state_26475__$1;
(statearr_26479_26543[(2)] = null);

(statearr_26479_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (4))){
var inst_26440 = (state_26475[(7)]);
var inst_26440__$1 = (state_26475[(2)]);
var inst_26441 = (inst_26440__$1 == null);
var state_26475__$1 = (function (){var statearr_26480 = state_26475;
(statearr_26480[(7)] = inst_26440__$1);

return statearr_26480;
})();
if(cljs.core.truth_(inst_26441)){
var statearr_26481_26544 = state_26475__$1;
(statearr_26481_26544[(1)] = (5));

} else {
var statearr_26482_26545 = state_26475__$1;
(statearr_26482_26545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (15))){
var inst_26453 = (state_26475[(8)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26475__$1,(18),to,inst_26453);
} else {
if((state_val_26476 === (21))){
var inst_26466 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26483_26546 = state_26475__$1;
(statearr_26483_26546[(2)] = inst_26466);

(statearr_26483_26546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (13))){
var inst_26468 = (state_26475[(2)]);
var state_26475__$1 = (function (){var statearr_26484 = state_26475;
(statearr_26484[(9)] = inst_26468);

return statearr_26484;
})();
var statearr_26485_26547 = state_26475__$1;
(statearr_26485_26547[(2)] = null);

(statearr_26485_26547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (6))){
var inst_26440 = (state_26475[(7)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26475__$1,(11),inst_26440);
} else {
if((state_val_26476 === (17))){
var inst_26461 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
if(cljs.core.truth_(inst_26461)){
var statearr_26486_26548 = state_26475__$1;
(statearr_26486_26548[(1)] = (19));

} else {
var statearr_26487_26549 = state_26475__$1;
(statearr_26487_26549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (3))){
var inst_26473 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26475__$1,inst_26473);
} else {
if((state_val_26476 === (12))){
var inst_26450 = (state_26475[(10)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26475__$1,(14),inst_26450);
} else {
if((state_val_26476 === (2))){
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26475__$1,(4),results);
} else {
if((state_val_26476 === (19))){
var state_26475__$1 = state_26475;
var statearr_26488_26550 = state_26475__$1;
(statearr_26488_26550[(2)] = null);

(statearr_26488_26550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (11))){
var inst_26450 = (state_26475[(2)]);
var state_26475__$1 = (function (){var statearr_26489 = state_26475;
(statearr_26489[(10)] = inst_26450);

return statearr_26489;
})();
var statearr_26490_26551 = state_26475__$1;
(statearr_26490_26551[(2)] = null);

(statearr_26490_26551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (9))){
var state_26475__$1 = state_26475;
var statearr_26491_26552 = state_26475__$1;
(statearr_26491_26552[(2)] = null);

(statearr_26491_26552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (5))){
var state_26475__$1 = state_26475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26492_26553 = state_26475__$1;
(statearr_26492_26553[(1)] = (8));

} else {
var statearr_26493_26554 = state_26475__$1;
(statearr_26493_26554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (14))){
var inst_26453 = (state_26475[(8)]);
var inst_26455 = (state_26475[(11)]);
var inst_26453__$1 = (state_26475[(2)]);
var inst_26454 = (inst_26453__$1 == null);
var inst_26455__$1 = cljs.core.not.call(null,inst_26454);
var state_26475__$1 = (function (){var statearr_26494 = state_26475;
(statearr_26494[(8)] = inst_26453__$1);

(statearr_26494[(11)] = inst_26455__$1);

return statearr_26494;
})();
if(inst_26455__$1){
var statearr_26495_26555 = state_26475__$1;
(statearr_26495_26555[(1)] = (15));

} else {
var statearr_26496_26556 = state_26475__$1;
(statearr_26496_26556[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (16))){
var inst_26455 = (state_26475[(11)]);
var state_26475__$1 = state_26475;
var statearr_26497_26557 = state_26475__$1;
(statearr_26497_26557[(2)] = inst_26455);

(statearr_26497_26557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (10))){
var inst_26447 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26498_26558 = state_26475__$1;
(statearr_26498_26558[(2)] = inst_26447);

(statearr_26498_26558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (18))){
var inst_26458 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26499_26559 = state_26475__$1;
(statearr_26499_26559[(2)] = inst_26458);

(statearr_26499_26559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (8))){
var inst_26444 = cljs.core.async.close_BANG_.call(null,to);
var state_26475__$1 = state_26475;
var statearr_26500_26560 = state_26475__$1;
(statearr_26500_26560[(2)] = inst_26444);

(statearr_26500_26560[(1)] = (10));


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
});})(c__26169__auto__,jobs,results,process,async))
;
return ((function (switch__25648__auto__,c__26169__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_26501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__);

(statearr_26501[(1)] = (1));

return statearr_26501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1 = (function (state_26475){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26502){if((e26502 instanceof Object)){
var ex__25652__auto__ = e26502;
var statearr_26503_26561 = state_26475;
(statearr_26503_26561[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26562 = state_26475;
state_26475 = G__26562;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__ = function(state_26475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1.call(this,state_26475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__,jobs,results,process,async))
})();
var state__26171__auto__ = (function (){var statearr_26504 = f__26170__auto__.call(null);
(statearr_26504[(6)] = c__26169__auto__);

return statearr_26504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__,jobs,results,process,async))
);

return c__26169__auto__;
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
var G__26564 = arguments.length;
switch (G__26564) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26567 = arguments.length;
switch (G__26567) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26570 = arguments.length;
switch (G__26570) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26169__auto___26619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___26619,tc,fc){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___26619,tc,fc){
return (function (state_26596){
var state_val_26597 = (state_26596[(1)]);
if((state_val_26597 === (7))){
var inst_26592 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
var statearr_26598_26620 = state_26596__$1;
(statearr_26598_26620[(2)] = inst_26592);

(statearr_26598_26620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (1))){
var state_26596__$1 = state_26596;
var statearr_26599_26621 = state_26596__$1;
(statearr_26599_26621[(2)] = null);

(statearr_26599_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (4))){
var inst_26573 = (state_26596[(7)]);
var inst_26573__$1 = (state_26596[(2)]);
var inst_26574 = (inst_26573__$1 == null);
var state_26596__$1 = (function (){var statearr_26600 = state_26596;
(statearr_26600[(7)] = inst_26573__$1);

return statearr_26600;
})();
if(cljs.core.truth_(inst_26574)){
var statearr_26601_26622 = state_26596__$1;
(statearr_26601_26622[(1)] = (5));

} else {
var statearr_26602_26623 = state_26596__$1;
(statearr_26602_26623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (13))){
var state_26596__$1 = state_26596;
var statearr_26603_26624 = state_26596__$1;
(statearr_26603_26624[(2)] = null);

(statearr_26603_26624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (6))){
var inst_26573 = (state_26596[(7)]);
var inst_26579 = p.call(null,inst_26573);
var state_26596__$1 = state_26596;
if(cljs.core.truth_(inst_26579)){
var statearr_26604_26625 = state_26596__$1;
(statearr_26604_26625[(1)] = (9));

} else {
var statearr_26605_26626 = state_26596__$1;
(statearr_26605_26626[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (3))){
var inst_26594 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26596__$1,inst_26594);
} else {
if((state_val_26597 === (12))){
var state_26596__$1 = state_26596;
var statearr_26606_26627 = state_26596__$1;
(statearr_26606_26627[(2)] = null);

(statearr_26606_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (2))){
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26596__$1,(4),ch);
} else {
if((state_val_26597 === (11))){
var inst_26573 = (state_26596[(7)]);
var inst_26583 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26596__$1,(8),inst_26583,inst_26573);
} else {
if((state_val_26597 === (9))){
var state_26596__$1 = state_26596;
var statearr_26607_26628 = state_26596__$1;
(statearr_26607_26628[(2)] = tc);

(statearr_26607_26628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (5))){
var inst_26576 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26577 = cljs.core.async.close_BANG_.call(null,fc);
var state_26596__$1 = (function (){var statearr_26608 = state_26596;
(statearr_26608[(8)] = inst_26576);

return statearr_26608;
})();
var statearr_26609_26629 = state_26596__$1;
(statearr_26609_26629[(2)] = inst_26577);

(statearr_26609_26629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (14))){
var inst_26590 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
var statearr_26610_26630 = state_26596__$1;
(statearr_26610_26630[(2)] = inst_26590);

(statearr_26610_26630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (10))){
var state_26596__$1 = state_26596;
var statearr_26611_26631 = state_26596__$1;
(statearr_26611_26631[(2)] = fc);

(statearr_26611_26631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26597 === (8))){
var inst_26585 = (state_26596[(2)]);
var state_26596__$1 = state_26596;
if(cljs.core.truth_(inst_26585)){
var statearr_26612_26632 = state_26596__$1;
(statearr_26612_26632[(1)] = (12));

} else {
var statearr_26613_26633 = state_26596__$1;
(statearr_26613_26633[(1)] = (13));

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
});})(c__26169__auto___26619,tc,fc))
;
return ((function (switch__25648__auto__,c__26169__auto___26619,tc,fc){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_26614 = [null,null,null,null,null,null,null,null,null];
(statearr_26614[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_26614[(1)] = (1));

return statearr_26614;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_26596){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object)){
var ex__25652__auto__ = e26615;
var statearr_26616_26634 = state_26596;
(statearr_26616_26634[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26635 = state_26596;
state_26596 = G__26635;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_26596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_26596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___26619,tc,fc))
})();
var state__26171__auto__ = (function (){var statearr_26617 = f__26170__auto__.call(null);
(statearr_26617[(6)] = c__26169__auto___26619);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___26619,tc,fc))
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
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__){
return (function (state_26656){
var state_val_26657 = (state_26656[(1)]);
if((state_val_26657 === (7))){
var inst_26652 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26658_26676 = state_26656__$1;
(statearr_26658_26676[(2)] = inst_26652);

(statearr_26658_26676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (1))){
var inst_26636 = init;
var state_26656__$1 = (function (){var statearr_26659 = state_26656;
(statearr_26659[(7)] = inst_26636);

return statearr_26659;
})();
var statearr_26660_26677 = state_26656__$1;
(statearr_26660_26677[(2)] = null);

(statearr_26660_26677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (4))){
var inst_26639 = (state_26656[(8)]);
var inst_26639__$1 = (state_26656[(2)]);
var inst_26640 = (inst_26639__$1 == null);
var state_26656__$1 = (function (){var statearr_26661 = state_26656;
(statearr_26661[(8)] = inst_26639__$1);

return statearr_26661;
})();
if(cljs.core.truth_(inst_26640)){
var statearr_26662_26678 = state_26656__$1;
(statearr_26662_26678[(1)] = (5));

} else {
var statearr_26663_26679 = state_26656__$1;
(statearr_26663_26679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (6))){
var inst_26639 = (state_26656[(8)]);
var inst_26636 = (state_26656[(7)]);
var inst_26643 = (state_26656[(9)]);
var inst_26643__$1 = f.call(null,inst_26636,inst_26639);
var inst_26644 = cljs.core.reduced_QMARK_.call(null,inst_26643__$1);
var state_26656__$1 = (function (){var statearr_26664 = state_26656;
(statearr_26664[(9)] = inst_26643__$1);

return statearr_26664;
})();
if(inst_26644){
var statearr_26665_26680 = state_26656__$1;
(statearr_26665_26680[(1)] = (8));

} else {
var statearr_26666_26681 = state_26656__$1;
(statearr_26666_26681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (3))){
var inst_26654 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26656__$1,inst_26654);
} else {
if((state_val_26657 === (2))){
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26656__$1,(4),ch);
} else {
if((state_val_26657 === (9))){
var inst_26643 = (state_26656[(9)]);
var inst_26636 = inst_26643;
var state_26656__$1 = (function (){var statearr_26667 = state_26656;
(statearr_26667[(7)] = inst_26636);

return statearr_26667;
})();
var statearr_26668_26682 = state_26656__$1;
(statearr_26668_26682[(2)] = null);

(statearr_26668_26682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (5))){
var inst_26636 = (state_26656[(7)]);
var state_26656__$1 = state_26656;
var statearr_26669_26683 = state_26656__$1;
(statearr_26669_26683[(2)] = inst_26636);

(statearr_26669_26683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (10))){
var inst_26650 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26670_26684 = state_26656__$1;
(statearr_26670_26684[(2)] = inst_26650);

(statearr_26670_26684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (8))){
var inst_26643 = (state_26656[(9)]);
var inst_26646 = cljs.core.deref.call(null,inst_26643);
var state_26656__$1 = state_26656;
var statearr_26671_26685 = state_26656__$1;
(statearr_26671_26685[(2)] = inst_26646);

(statearr_26671_26685[(1)] = (10));


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
});})(c__26169__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25649__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25649__auto____0 = (function (){
var statearr_26672 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26672[(0)] = cljs$core$async$reduce_$_state_machine__25649__auto__);

(statearr_26672[(1)] = (1));

return statearr_26672;
});
var cljs$core$async$reduce_$_state_machine__25649__auto____1 = (function (state_26656){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26673){if((e26673 instanceof Object)){
var ex__25652__auto__ = e26673;
var statearr_26674_26686 = state_26656;
(statearr_26674_26686[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26687 = state_26656;
state_26656 = G__26687;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25649__auto__ = function(state_26656){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25649__auto____1.call(this,state_26656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25649__auto____0;
cljs$core$async$reduce_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25649__auto____1;
return cljs$core$async$reduce_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__))
})();
var state__26171__auto__ = (function (){var statearr_26675 = f__26170__auto__.call(null);
(statearr_26675[(6)] = c__26169__auto__);

return statearr_26675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__))
);

return c__26169__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__,f__$1){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__,f__$1){
return (function (state_26693){
var state_val_26694 = (state_26693[(1)]);
if((state_val_26694 === (1))){
var inst_26688 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26693__$1,(2),inst_26688);
} else {
if((state_val_26694 === (2))){
var inst_26690 = (state_26693[(2)]);
var inst_26691 = f__$1.call(null,inst_26690);
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26693__$1,inst_26691);
} else {
return null;
}
}
});})(c__26169__auto__,f__$1))
;
return ((function (switch__25648__auto__,c__26169__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25649__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25649__auto____0 = (function (){
var statearr_26695 = [null,null,null,null,null,null,null];
(statearr_26695[(0)] = cljs$core$async$transduce_$_state_machine__25649__auto__);

(statearr_26695[(1)] = (1));

return statearr_26695;
});
var cljs$core$async$transduce_$_state_machine__25649__auto____1 = (function (state_26693){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26696){if((e26696 instanceof Object)){
var ex__25652__auto__ = e26696;
var statearr_26697_26699 = state_26693;
(statearr_26697_26699[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26700 = state_26693;
state_26693 = G__26700;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25649__auto__ = function(state_26693){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25649__auto____1.call(this,state_26693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25649__auto____0;
cljs$core$async$transduce_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25649__auto____1;
return cljs$core$async$transduce_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__,f__$1))
})();
var state__26171__auto__ = (function (){var statearr_26698 = f__26170__auto__.call(null);
(statearr_26698[(6)] = c__26169__auto__);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__,f__$1))
);

return c__26169__auto__;
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
var G__26702 = arguments.length;
switch (G__26702) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__){
return (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (7))){
var inst_26709 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26729_26750 = state_26727__$1;
(statearr_26729_26750[(2)] = inst_26709);

(statearr_26729_26750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (1))){
var inst_26703 = cljs.core.seq.call(null,coll);
var inst_26704 = inst_26703;
var state_26727__$1 = (function (){var statearr_26730 = state_26727;
(statearr_26730[(7)] = inst_26704);

return statearr_26730;
})();
var statearr_26731_26751 = state_26727__$1;
(statearr_26731_26751[(2)] = null);

(statearr_26731_26751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var inst_26704 = (state_26727[(7)]);
var inst_26707 = cljs.core.first.call(null,inst_26704);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(7),ch,inst_26707);
} else {
if((state_val_26728 === (13))){
var inst_26721 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26732_26752 = state_26727__$1;
(statearr_26732_26752[(2)] = inst_26721);

(statearr_26732_26752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var inst_26712 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26712)){
var statearr_26733_26753 = state_26727__$1;
(statearr_26733_26753[(1)] = (8));

} else {
var statearr_26734_26754 = state_26727__$1;
(statearr_26734_26754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (12))){
var state_26727__$1 = state_26727;
var statearr_26735_26755 = state_26727__$1;
(statearr_26735_26755[(2)] = null);

(statearr_26735_26755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var inst_26704 = (state_26727[(7)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26704)){
var statearr_26736_26756 = state_26727__$1;
(statearr_26736_26756[(1)] = (4));

} else {
var statearr_26737_26757 = state_26727__$1;
(statearr_26737_26757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (11))){
var inst_26718 = cljs.core.async.close_BANG_.call(null,ch);
var state_26727__$1 = state_26727;
var statearr_26738_26758 = state_26727__$1;
(statearr_26738_26758[(2)] = inst_26718);

(statearr_26738_26758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (9))){
var state_26727__$1 = state_26727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26739_26759 = state_26727__$1;
(statearr_26739_26759[(1)] = (11));

} else {
var statearr_26740_26760 = state_26727__$1;
(statearr_26740_26760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var inst_26704 = (state_26727[(7)]);
var state_26727__$1 = state_26727;
var statearr_26741_26761 = state_26727__$1;
(statearr_26741_26761[(2)] = inst_26704);

(statearr_26741_26761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (10))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26742_26762 = state_26727__$1;
(statearr_26742_26762[(2)] = inst_26723);

(statearr_26742_26762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (8))){
var inst_26704 = (state_26727[(7)]);
var inst_26714 = cljs.core.next.call(null,inst_26704);
var inst_26704__$1 = inst_26714;
var state_26727__$1 = (function (){var statearr_26743 = state_26727;
(statearr_26743[(7)] = inst_26704__$1);

return statearr_26743;
})();
var statearr_26744_26763 = state_26727__$1;
(statearr_26744_26763[(2)] = null);

(statearr_26744_26763[(1)] = (2));


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
});})(c__26169__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_26745 = [null,null,null,null,null,null,null,null];
(statearr_26745[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_26745[(1)] = (1));

return statearr_26745;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_26727){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26746){if((e26746 instanceof Object)){
var ex__25652__auto__ = e26746;
var statearr_26747_26764 = state_26727;
(statearr_26747_26764[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26765 = state_26727;
state_26727 = G__26765;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__))
})();
var state__26171__auto__ = (function (){var statearr_26748 = f__26170__auto__.call(null);
(statearr_26748[(6)] = c__26169__auto__);

return statearr_26748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__))
);

return c__26169__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26766 = (function (ch,cs,meta26767){
this.ch = ch;
this.cs = cs;
this.meta26767 = meta26767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26768,meta26767__$1){
var self__ = this;
var _26768__$1 = this;
return (new cljs.core.async.t_cljs$core$async26766(self__.ch,self__.cs,meta26767__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26768){
var self__ = this;
var _26768__$1 = this;
return self__.meta26767;
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26767","meta26767",2043981676,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26766";

cljs.core.async.t_cljs$core$async26766.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26766");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26766.
 */
cljs.core.async.__GT_t_cljs$core$async26766 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26766(ch__$1,cs__$1,meta26767){
return (new cljs.core.async.t_cljs$core$async26766(ch__$1,cs__$1,meta26767));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26766(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26169__auto___26988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___26988,cs,m,dchan,dctr,done){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___26988,cs,m,dchan,dctr,done){
return (function (state_26903){
var state_val_26904 = (state_26903[(1)]);
if((state_val_26904 === (7))){
var inst_26899 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26905_26989 = state_26903__$1;
(statearr_26905_26989[(2)] = inst_26899);

(statearr_26905_26989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (20))){
var inst_26802 = (state_26903[(7)]);
var inst_26814 = cljs.core.first.call(null,inst_26802);
var inst_26815 = cljs.core.nth.call(null,inst_26814,(0),null);
var inst_26816 = cljs.core.nth.call(null,inst_26814,(1),null);
var state_26903__$1 = (function (){var statearr_26906 = state_26903;
(statearr_26906[(8)] = inst_26815);

return statearr_26906;
})();
if(cljs.core.truth_(inst_26816)){
var statearr_26907_26990 = state_26903__$1;
(statearr_26907_26990[(1)] = (22));

} else {
var statearr_26908_26991 = state_26903__$1;
(statearr_26908_26991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (27))){
var inst_26844 = (state_26903[(9)]);
var inst_26771 = (state_26903[(10)]);
var inst_26851 = (state_26903[(11)]);
var inst_26846 = (state_26903[(12)]);
var inst_26851__$1 = cljs.core._nth.call(null,inst_26844,inst_26846);
var inst_26852 = cljs.core.async.put_BANG_.call(null,inst_26851__$1,inst_26771,done);
var state_26903__$1 = (function (){var statearr_26909 = state_26903;
(statearr_26909[(11)] = inst_26851__$1);

return statearr_26909;
})();
if(cljs.core.truth_(inst_26852)){
var statearr_26910_26992 = state_26903__$1;
(statearr_26910_26992[(1)] = (30));

} else {
var statearr_26911_26993 = state_26903__$1;
(statearr_26911_26993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (1))){
var state_26903__$1 = state_26903;
var statearr_26912_26994 = state_26903__$1;
(statearr_26912_26994[(2)] = null);

(statearr_26912_26994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (24))){
var inst_26802 = (state_26903[(7)]);
var inst_26821 = (state_26903[(2)]);
var inst_26822 = cljs.core.next.call(null,inst_26802);
var inst_26780 = inst_26822;
var inst_26781 = null;
var inst_26782 = (0);
var inst_26783 = (0);
var state_26903__$1 = (function (){var statearr_26913 = state_26903;
(statearr_26913[(13)] = inst_26780);

(statearr_26913[(14)] = inst_26783);

(statearr_26913[(15)] = inst_26782);

(statearr_26913[(16)] = inst_26821);

(statearr_26913[(17)] = inst_26781);

return statearr_26913;
})();
var statearr_26914_26995 = state_26903__$1;
(statearr_26914_26995[(2)] = null);

(statearr_26914_26995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (39))){
var state_26903__$1 = state_26903;
var statearr_26918_26996 = state_26903__$1;
(statearr_26918_26996[(2)] = null);

(statearr_26918_26996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (4))){
var inst_26771 = (state_26903[(10)]);
var inst_26771__$1 = (state_26903[(2)]);
var inst_26772 = (inst_26771__$1 == null);
var state_26903__$1 = (function (){var statearr_26919 = state_26903;
(statearr_26919[(10)] = inst_26771__$1);

return statearr_26919;
})();
if(cljs.core.truth_(inst_26772)){
var statearr_26920_26997 = state_26903__$1;
(statearr_26920_26997[(1)] = (5));

} else {
var statearr_26921_26998 = state_26903__$1;
(statearr_26921_26998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (15))){
var inst_26780 = (state_26903[(13)]);
var inst_26783 = (state_26903[(14)]);
var inst_26782 = (state_26903[(15)]);
var inst_26781 = (state_26903[(17)]);
var inst_26798 = (state_26903[(2)]);
var inst_26799 = (inst_26783 + (1));
var tmp26915 = inst_26780;
var tmp26916 = inst_26782;
var tmp26917 = inst_26781;
var inst_26780__$1 = tmp26915;
var inst_26781__$1 = tmp26917;
var inst_26782__$1 = tmp26916;
var inst_26783__$1 = inst_26799;
var state_26903__$1 = (function (){var statearr_26922 = state_26903;
(statearr_26922[(13)] = inst_26780__$1);

(statearr_26922[(14)] = inst_26783__$1);

(statearr_26922[(15)] = inst_26782__$1);

(statearr_26922[(17)] = inst_26781__$1);

(statearr_26922[(18)] = inst_26798);

return statearr_26922;
})();
var statearr_26923_26999 = state_26903__$1;
(statearr_26923_26999[(2)] = null);

(statearr_26923_26999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (21))){
var inst_26825 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26927_27000 = state_26903__$1;
(statearr_26927_27000[(2)] = inst_26825);

(statearr_26927_27000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (31))){
var inst_26851 = (state_26903[(11)]);
var inst_26855 = done.call(null,null);
var inst_26856 = cljs.core.async.untap_STAR_.call(null,m,inst_26851);
var state_26903__$1 = (function (){var statearr_26928 = state_26903;
(statearr_26928[(19)] = inst_26855);

return statearr_26928;
})();
var statearr_26929_27001 = state_26903__$1;
(statearr_26929_27001[(2)] = inst_26856);

(statearr_26929_27001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (32))){
var inst_26843 = (state_26903[(20)]);
var inst_26844 = (state_26903[(9)]);
var inst_26846 = (state_26903[(12)]);
var inst_26845 = (state_26903[(21)]);
var inst_26858 = (state_26903[(2)]);
var inst_26859 = (inst_26846 + (1));
var tmp26924 = inst_26843;
var tmp26925 = inst_26844;
var tmp26926 = inst_26845;
var inst_26843__$1 = tmp26924;
var inst_26844__$1 = tmp26925;
var inst_26845__$1 = tmp26926;
var inst_26846__$1 = inst_26859;
var state_26903__$1 = (function (){var statearr_26930 = state_26903;
(statearr_26930[(20)] = inst_26843__$1);

(statearr_26930[(9)] = inst_26844__$1);

(statearr_26930[(22)] = inst_26858);

(statearr_26930[(12)] = inst_26846__$1);

(statearr_26930[(21)] = inst_26845__$1);

return statearr_26930;
})();
var statearr_26931_27002 = state_26903__$1;
(statearr_26931_27002[(2)] = null);

(statearr_26931_27002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (40))){
var inst_26871 = (state_26903[(23)]);
var inst_26875 = done.call(null,null);
var inst_26876 = cljs.core.async.untap_STAR_.call(null,m,inst_26871);
var state_26903__$1 = (function (){var statearr_26932 = state_26903;
(statearr_26932[(24)] = inst_26875);

return statearr_26932;
})();
var statearr_26933_27003 = state_26903__$1;
(statearr_26933_27003[(2)] = inst_26876);

(statearr_26933_27003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (33))){
var inst_26862 = (state_26903[(25)]);
var inst_26864 = cljs.core.chunked_seq_QMARK_.call(null,inst_26862);
var state_26903__$1 = state_26903;
if(inst_26864){
var statearr_26934_27004 = state_26903__$1;
(statearr_26934_27004[(1)] = (36));

} else {
var statearr_26935_27005 = state_26903__$1;
(statearr_26935_27005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (13))){
var inst_26792 = (state_26903[(26)]);
var inst_26795 = cljs.core.async.close_BANG_.call(null,inst_26792);
var state_26903__$1 = state_26903;
var statearr_26936_27006 = state_26903__$1;
(statearr_26936_27006[(2)] = inst_26795);

(statearr_26936_27006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (22))){
var inst_26815 = (state_26903[(8)]);
var inst_26818 = cljs.core.async.close_BANG_.call(null,inst_26815);
var state_26903__$1 = state_26903;
var statearr_26937_27007 = state_26903__$1;
(statearr_26937_27007[(2)] = inst_26818);

(statearr_26937_27007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (36))){
var inst_26862 = (state_26903[(25)]);
var inst_26866 = cljs.core.chunk_first.call(null,inst_26862);
var inst_26867 = cljs.core.chunk_rest.call(null,inst_26862);
var inst_26868 = cljs.core.count.call(null,inst_26866);
var inst_26843 = inst_26867;
var inst_26844 = inst_26866;
var inst_26845 = inst_26868;
var inst_26846 = (0);
var state_26903__$1 = (function (){var statearr_26938 = state_26903;
(statearr_26938[(20)] = inst_26843);

(statearr_26938[(9)] = inst_26844);

(statearr_26938[(12)] = inst_26846);

(statearr_26938[(21)] = inst_26845);

return statearr_26938;
})();
var statearr_26939_27008 = state_26903__$1;
(statearr_26939_27008[(2)] = null);

(statearr_26939_27008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (41))){
var inst_26862 = (state_26903[(25)]);
var inst_26878 = (state_26903[(2)]);
var inst_26879 = cljs.core.next.call(null,inst_26862);
var inst_26843 = inst_26879;
var inst_26844 = null;
var inst_26845 = (0);
var inst_26846 = (0);
var state_26903__$1 = (function (){var statearr_26940 = state_26903;
(statearr_26940[(20)] = inst_26843);

(statearr_26940[(9)] = inst_26844);

(statearr_26940[(12)] = inst_26846);

(statearr_26940[(27)] = inst_26878);

(statearr_26940[(21)] = inst_26845);

return statearr_26940;
})();
var statearr_26941_27009 = state_26903__$1;
(statearr_26941_27009[(2)] = null);

(statearr_26941_27009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (43))){
var state_26903__$1 = state_26903;
var statearr_26942_27010 = state_26903__$1;
(statearr_26942_27010[(2)] = null);

(statearr_26942_27010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (29))){
var inst_26887 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26943_27011 = state_26903__$1;
(statearr_26943_27011[(2)] = inst_26887);

(statearr_26943_27011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (44))){
var inst_26896 = (state_26903[(2)]);
var state_26903__$1 = (function (){var statearr_26944 = state_26903;
(statearr_26944[(28)] = inst_26896);

return statearr_26944;
})();
var statearr_26945_27012 = state_26903__$1;
(statearr_26945_27012[(2)] = null);

(statearr_26945_27012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (6))){
var inst_26835 = (state_26903[(29)]);
var inst_26834 = cljs.core.deref.call(null,cs);
var inst_26835__$1 = cljs.core.keys.call(null,inst_26834);
var inst_26836 = cljs.core.count.call(null,inst_26835__$1);
var inst_26837 = cljs.core.reset_BANG_.call(null,dctr,inst_26836);
var inst_26842 = cljs.core.seq.call(null,inst_26835__$1);
var inst_26843 = inst_26842;
var inst_26844 = null;
var inst_26845 = (0);
var inst_26846 = (0);
var state_26903__$1 = (function (){var statearr_26946 = state_26903;
(statearr_26946[(20)] = inst_26843);

(statearr_26946[(9)] = inst_26844);

(statearr_26946[(29)] = inst_26835__$1);

(statearr_26946[(30)] = inst_26837);

(statearr_26946[(12)] = inst_26846);

(statearr_26946[(21)] = inst_26845);

return statearr_26946;
})();
var statearr_26947_27013 = state_26903__$1;
(statearr_26947_27013[(2)] = null);

(statearr_26947_27013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (28))){
var inst_26843 = (state_26903[(20)]);
var inst_26862 = (state_26903[(25)]);
var inst_26862__$1 = cljs.core.seq.call(null,inst_26843);
var state_26903__$1 = (function (){var statearr_26948 = state_26903;
(statearr_26948[(25)] = inst_26862__$1);

return statearr_26948;
})();
if(inst_26862__$1){
var statearr_26949_27014 = state_26903__$1;
(statearr_26949_27014[(1)] = (33));

} else {
var statearr_26950_27015 = state_26903__$1;
(statearr_26950_27015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (25))){
var inst_26846 = (state_26903[(12)]);
var inst_26845 = (state_26903[(21)]);
var inst_26848 = (inst_26846 < inst_26845);
var inst_26849 = inst_26848;
var state_26903__$1 = state_26903;
if(cljs.core.truth_(inst_26849)){
var statearr_26951_27016 = state_26903__$1;
(statearr_26951_27016[(1)] = (27));

} else {
var statearr_26952_27017 = state_26903__$1;
(statearr_26952_27017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (34))){
var state_26903__$1 = state_26903;
var statearr_26953_27018 = state_26903__$1;
(statearr_26953_27018[(2)] = null);

(statearr_26953_27018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (17))){
var state_26903__$1 = state_26903;
var statearr_26954_27019 = state_26903__$1;
(statearr_26954_27019[(2)] = null);

(statearr_26954_27019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (3))){
var inst_26901 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26903__$1,inst_26901);
} else {
if((state_val_26904 === (12))){
var inst_26830 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26955_27020 = state_26903__$1;
(statearr_26955_27020[(2)] = inst_26830);

(statearr_26955_27020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (2))){
var state_26903__$1 = state_26903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26903__$1,(4),ch);
} else {
if((state_val_26904 === (23))){
var state_26903__$1 = state_26903;
var statearr_26956_27021 = state_26903__$1;
(statearr_26956_27021[(2)] = null);

(statearr_26956_27021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (35))){
var inst_26885 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26957_27022 = state_26903__$1;
(statearr_26957_27022[(2)] = inst_26885);

(statearr_26957_27022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (19))){
var inst_26802 = (state_26903[(7)]);
var inst_26806 = cljs.core.chunk_first.call(null,inst_26802);
var inst_26807 = cljs.core.chunk_rest.call(null,inst_26802);
var inst_26808 = cljs.core.count.call(null,inst_26806);
var inst_26780 = inst_26807;
var inst_26781 = inst_26806;
var inst_26782 = inst_26808;
var inst_26783 = (0);
var state_26903__$1 = (function (){var statearr_26958 = state_26903;
(statearr_26958[(13)] = inst_26780);

(statearr_26958[(14)] = inst_26783);

(statearr_26958[(15)] = inst_26782);

(statearr_26958[(17)] = inst_26781);

return statearr_26958;
})();
var statearr_26959_27023 = state_26903__$1;
(statearr_26959_27023[(2)] = null);

(statearr_26959_27023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (11))){
var inst_26780 = (state_26903[(13)]);
var inst_26802 = (state_26903[(7)]);
var inst_26802__$1 = cljs.core.seq.call(null,inst_26780);
var state_26903__$1 = (function (){var statearr_26960 = state_26903;
(statearr_26960[(7)] = inst_26802__$1);

return statearr_26960;
})();
if(inst_26802__$1){
var statearr_26961_27024 = state_26903__$1;
(statearr_26961_27024[(1)] = (16));

} else {
var statearr_26962_27025 = state_26903__$1;
(statearr_26962_27025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (9))){
var inst_26832 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26963_27026 = state_26903__$1;
(statearr_26963_27026[(2)] = inst_26832);

(statearr_26963_27026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (5))){
var inst_26778 = cljs.core.deref.call(null,cs);
var inst_26779 = cljs.core.seq.call(null,inst_26778);
var inst_26780 = inst_26779;
var inst_26781 = null;
var inst_26782 = (0);
var inst_26783 = (0);
var state_26903__$1 = (function (){var statearr_26964 = state_26903;
(statearr_26964[(13)] = inst_26780);

(statearr_26964[(14)] = inst_26783);

(statearr_26964[(15)] = inst_26782);

(statearr_26964[(17)] = inst_26781);

return statearr_26964;
})();
var statearr_26965_27027 = state_26903__$1;
(statearr_26965_27027[(2)] = null);

(statearr_26965_27027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (14))){
var state_26903__$1 = state_26903;
var statearr_26966_27028 = state_26903__$1;
(statearr_26966_27028[(2)] = null);

(statearr_26966_27028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (45))){
var inst_26893 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26967_27029 = state_26903__$1;
(statearr_26967_27029[(2)] = inst_26893);

(statearr_26967_27029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (26))){
var inst_26835 = (state_26903[(29)]);
var inst_26889 = (state_26903[(2)]);
var inst_26890 = cljs.core.seq.call(null,inst_26835);
var state_26903__$1 = (function (){var statearr_26968 = state_26903;
(statearr_26968[(31)] = inst_26889);

return statearr_26968;
})();
if(inst_26890){
var statearr_26969_27030 = state_26903__$1;
(statearr_26969_27030[(1)] = (42));

} else {
var statearr_26970_27031 = state_26903__$1;
(statearr_26970_27031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (16))){
var inst_26802 = (state_26903[(7)]);
var inst_26804 = cljs.core.chunked_seq_QMARK_.call(null,inst_26802);
var state_26903__$1 = state_26903;
if(inst_26804){
var statearr_26971_27032 = state_26903__$1;
(statearr_26971_27032[(1)] = (19));

} else {
var statearr_26972_27033 = state_26903__$1;
(statearr_26972_27033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (38))){
var inst_26882 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26973_27034 = state_26903__$1;
(statearr_26973_27034[(2)] = inst_26882);

(statearr_26973_27034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (30))){
var state_26903__$1 = state_26903;
var statearr_26974_27035 = state_26903__$1;
(statearr_26974_27035[(2)] = null);

(statearr_26974_27035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (10))){
var inst_26783 = (state_26903[(14)]);
var inst_26781 = (state_26903[(17)]);
var inst_26791 = cljs.core._nth.call(null,inst_26781,inst_26783);
var inst_26792 = cljs.core.nth.call(null,inst_26791,(0),null);
var inst_26793 = cljs.core.nth.call(null,inst_26791,(1),null);
var state_26903__$1 = (function (){var statearr_26975 = state_26903;
(statearr_26975[(26)] = inst_26792);

return statearr_26975;
})();
if(cljs.core.truth_(inst_26793)){
var statearr_26976_27036 = state_26903__$1;
(statearr_26976_27036[(1)] = (13));

} else {
var statearr_26977_27037 = state_26903__$1;
(statearr_26977_27037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (18))){
var inst_26828 = (state_26903[(2)]);
var state_26903__$1 = state_26903;
var statearr_26978_27038 = state_26903__$1;
(statearr_26978_27038[(2)] = inst_26828);

(statearr_26978_27038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (42))){
var state_26903__$1 = state_26903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26903__$1,(45),dchan);
} else {
if((state_val_26904 === (37))){
var inst_26862 = (state_26903[(25)]);
var inst_26771 = (state_26903[(10)]);
var inst_26871 = (state_26903[(23)]);
var inst_26871__$1 = cljs.core.first.call(null,inst_26862);
var inst_26872 = cljs.core.async.put_BANG_.call(null,inst_26871__$1,inst_26771,done);
var state_26903__$1 = (function (){var statearr_26979 = state_26903;
(statearr_26979[(23)] = inst_26871__$1);

return statearr_26979;
})();
if(cljs.core.truth_(inst_26872)){
var statearr_26980_27039 = state_26903__$1;
(statearr_26980_27039[(1)] = (39));

} else {
var statearr_26981_27040 = state_26903__$1;
(statearr_26981_27040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26904 === (8))){
var inst_26783 = (state_26903[(14)]);
var inst_26782 = (state_26903[(15)]);
var inst_26785 = (inst_26783 < inst_26782);
var inst_26786 = inst_26785;
var state_26903__$1 = state_26903;
if(cljs.core.truth_(inst_26786)){
var statearr_26982_27041 = state_26903__$1;
(statearr_26982_27041[(1)] = (10));

} else {
var statearr_26983_27042 = state_26903__$1;
(statearr_26983_27042[(1)] = (11));

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
});})(c__26169__auto___26988,cs,m,dchan,dctr,done))
;
return ((function (switch__25648__auto__,c__26169__auto___26988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25649__auto__ = null;
var cljs$core$async$mult_$_state_machine__25649__auto____0 = (function (){
var statearr_26984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26984[(0)] = cljs$core$async$mult_$_state_machine__25649__auto__);

(statearr_26984[(1)] = (1));

return statearr_26984;
});
var cljs$core$async$mult_$_state_machine__25649__auto____1 = (function (state_26903){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_26903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e26985){if((e26985 instanceof Object)){
var ex__25652__auto__ = e26985;
var statearr_26986_27043 = state_26903;
(statearr_26986_27043[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27044 = state_26903;
state_26903 = G__27044;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25649__auto__ = function(state_26903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25649__auto____1.call(this,state_26903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25649__auto____0;
cljs$core$async$mult_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25649__auto____1;
return cljs$core$async$mult_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___26988,cs,m,dchan,dctr,done))
})();
var state__26171__auto__ = (function (){var statearr_26987 = f__26170__auto__.call(null);
(statearr_26987[(6)] = c__26169__auto___26988);

return statearr_26987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___26988,cs,m,dchan,dctr,done))
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
var G__27046 = arguments.length;
switch (G__27046) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27058 = arguments.length;
var i__4532__auto___27059 = (0);
while(true){
if((i__4532__auto___27059 < len__4531__auto___27058)){
args__4534__auto__.push((arguments[i__4532__auto___27059]));

var G__27060 = (i__4532__auto___27059 + (1));
i__4532__auto___27059 = G__27060;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27052){
var map__27053 = p__27052;
var map__27053__$1 = ((((!((map__27053 == null)))?(((((map__27053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27053):map__27053);
var opts = map__27053__$1;
var statearr_27055_27061 = state;
(statearr_27055_27061[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27053,map__27053__$1,opts){
return (function (val){
var statearr_27056_27062 = state;
(statearr_27056_27062[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27053,map__27053__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27057_27063 = state;
(statearr_27057_27063[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27048){
var G__27049 = cljs.core.first.call(null,seq27048);
var seq27048__$1 = cljs.core.next.call(null,seq27048);
var G__27050 = cljs.core.first.call(null,seq27048__$1);
var seq27048__$2 = cljs.core.next.call(null,seq27048__$1);
var G__27051 = cljs.core.first.call(null,seq27048__$2);
var seq27048__$3 = cljs.core.next.call(null,seq27048__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27049,G__27050,G__27051,seq27048__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27064 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27065){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27065 = meta27065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27066,meta27065__$1){
var self__ = this;
var _27066__$1 = this;
return (new cljs.core.async.t_cljs$core$async27064(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27065__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27066){
var self__ = this;
var _27066__$1 = this;
return self__.meta27065;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27065","meta27065",-796771128,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27064";

cljs.core.async.t_cljs$core$async27064.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27064");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27064.
 */
cljs.core.async.__GT_t_cljs$core$async27064 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27064(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27065){
return (new cljs.core.async.t_cljs$core$async27064(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27065));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27064(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26169__auto___27228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27168){
var state_val_27169 = (state_27168[(1)]);
if((state_val_27169 === (7))){
var inst_27083 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27170_27229 = state_27168__$1;
(statearr_27170_27229[(2)] = inst_27083);

(statearr_27170_27229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (20))){
var inst_27095 = (state_27168[(7)]);
var state_27168__$1 = state_27168;
var statearr_27171_27230 = state_27168__$1;
(statearr_27171_27230[(2)] = inst_27095);

(statearr_27171_27230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (27))){
var state_27168__$1 = state_27168;
var statearr_27172_27231 = state_27168__$1;
(statearr_27172_27231[(2)] = null);

(statearr_27172_27231[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (1))){
var inst_27070 = (state_27168[(8)]);
var inst_27070__$1 = calc_state.call(null);
var inst_27072 = (inst_27070__$1 == null);
var inst_27073 = cljs.core.not.call(null,inst_27072);
var state_27168__$1 = (function (){var statearr_27173 = state_27168;
(statearr_27173[(8)] = inst_27070__$1);

return statearr_27173;
})();
if(inst_27073){
var statearr_27174_27232 = state_27168__$1;
(statearr_27174_27232[(1)] = (2));

} else {
var statearr_27175_27233 = state_27168__$1;
(statearr_27175_27233[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (24))){
var inst_27119 = (state_27168[(9)]);
var inst_27142 = (state_27168[(10)]);
var inst_27128 = (state_27168[(11)]);
var inst_27142__$1 = inst_27119.call(null,inst_27128);
var state_27168__$1 = (function (){var statearr_27176 = state_27168;
(statearr_27176[(10)] = inst_27142__$1);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27142__$1)){
var statearr_27177_27234 = state_27168__$1;
(statearr_27177_27234[(1)] = (29));

} else {
var statearr_27178_27235 = state_27168__$1;
(statearr_27178_27235[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (4))){
var inst_27086 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27086)){
var statearr_27179_27236 = state_27168__$1;
(statearr_27179_27236[(1)] = (8));

} else {
var statearr_27180_27237 = state_27168__$1;
(statearr_27180_27237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (15))){
var inst_27113 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27113)){
var statearr_27181_27238 = state_27168__$1;
(statearr_27181_27238[(1)] = (19));

} else {
var statearr_27182_27239 = state_27168__$1;
(statearr_27182_27239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (21))){
var inst_27118 = (state_27168[(12)]);
var inst_27118__$1 = (state_27168[(2)]);
var inst_27119 = cljs.core.get.call(null,inst_27118__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27120 = cljs.core.get.call(null,inst_27118__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27121 = cljs.core.get.call(null,inst_27118__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27168__$1 = (function (){var statearr_27183 = state_27168;
(statearr_27183[(9)] = inst_27119);

(statearr_27183[(13)] = inst_27120);

(statearr_27183[(12)] = inst_27118__$1);

return statearr_27183;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27168__$1,(22),inst_27121);
} else {
if((state_val_27169 === (31))){
var inst_27150 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27150)){
var statearr_27184_27240 = state_27168__$1;
(statearr_27184_27240[(1)] = (32));

} else {
var statearr_27185_27241 = state_27168__$1;
(statearr_27185_27241[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (32))){
var inst_27127 = (state_27168[(14)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27168__$1,(35),out,inst_27127);
} else {
if((state_val_27169 === (33))){
var inst_27118 = (state_27168[(12)]);
var inst_27095 = inst_27118;
var state_27168__$1 = (function (){var statearr_27186 = state_27168;
(statearr_27186[(7)] = inst_27095);

return statearr_27186;
})();
var statearr_27187_27242 = state_27168__$1;
(statearr_27187_27242[(2)] = null);

(statearr_27187_27242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (13))){
var inst_27095 = (state_27168[(7)]);
var inst_27102 = inst_27095.cljs$lang$protocol_mask$partition0$;
var inst_27103 = (inst_27102 & (64));
var inst_27104 = inst_27095.cljs$core$ISeq$;
var inst_27105 = (cljs.core.PROTOCOL_SENTINEL === inst_27104);
var inst_27106 = ((inst_27103) || (inst_27105));
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27106)){
var statearr_27188_27243 = state_27168__$1;
(statearr_27188_27243[(1)] = (16));

} else {
var statearr_27189_27244 = state_27168__$1;
(statearr_27189_27244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (22))){
var inst_27127 = (state_27168[(14)]);
var inst_27128 = (state_27168[(11)]);
var inst_27126 = (state_27168[(2)]);
var inst_27127__$1 = cljs.core.nth.call(null,inst_27126,(0),null);
var inst_27128__$1 = cljs.core.nth.call(null,inst_27126,(1),null);
var inst_27129 = (inst_27127__$1 == null);
var inst_27130 = cljs.core._EQ_.call(null,inst_27128__$1,change);
var inst_27131 = ((inst_27129) || (inst_27130));
var state_27168__$1 = (function (){var statearr_27190 = state_27168;
(statearr_27190[(14)] = inst_27127__$1);

(statearr_27190[(11)] = inst_27128__$1);

return statearr_27190;
})();
if(cljs.core.truth_(inst_27131)){
var statearr_27191_27245 = state_27168__$1;
(statearr_27191_27245[(1)] = (23));

} else {
var statearr_27192_27246 = state_27168__$1;
(statearr_27192_27246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (36))){
var inst_27118 = (state_27168[(12)]);
var inst_27095 = inst_27118;
var state_27168__$1 = (function (){var statearr_27193 = state_27168;
(statearr_27193[(7)] = inst_27095);

return statearr_27193;
})();
var statearr_27194_27247 = state_27168__$1;
(statearr_27194_27247[(2)] = null);

(statearr_27194_27247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (29))){
var inst_27142 = (state_27168[(10)]);
var state_27168__$1 = state_27168;
var statearr_27195_27248 = state_27168__$1;
(statearr_27195_27248[(2)] = inst_27142);

(statearr_27195_27248[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (6))){
var state_27168__$1 = state_27168;
var statearr_27196_27249 = state_27168__$1;
(statearr_27196_27249[(2)] = false);

(statearr_27196_27249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (28))){
var inst_27138 = (state_27168[(2)]);
var inst_27139 = calc_state.call(null);
var inst_27095 = inst_27139;
var state_27168__$1 = (function (){var statearr_27197 = state_27168;
(statearr_27197[(7)] = inst_27095);

(statearr_27197[(15)] = inst_27138);

return statearr_27197;
})();
var statearr_27198_27250 = state_27168__$1;
(statearr_27198_27250[(2)] = null);

(statearr_27198_27250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (25))){
var inst_27164 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27199_27251 = state_27168__$1;
(statearr_27199_27251[(2)] = inst_27164);

(statearr_27199_27251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (34))){
var inst_27162 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27200_27252 = state_27168__$1;
(statearr_27200_27252[(2)] = inst_27162);

(statearr_27200_27252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (17))){
var state_27168__$1 = state_27168;
var statearr_27201_27253 = state_27168__$1;
(statearr_27201_27253[(2)] = false);

(statearr_27201_27253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (3))){
var state_27168__$1 = state_27168;
var statearr_27202_27254 = state_27168__$1;
(statearr_27202_27254[(2)] = false);

(statearr_27202_27254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (12))){
var inst_27166 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27168__$1,inst_27166);
} else {
if((state_val_27169 === (2))){
var inst_27070 = (state_27168[(8)]);
var inst_27075 = inst_27070.cljs$lang$protocol_mask$partition0$;
var inst_27076 = (inst_27075 & (64));
var inst_27077 = inst_27070.cljs$core$ISeq$;
var inst_27078 = (cljs.core.PROTOCOL_SENTINEL === inst_27077);
var inst_27079 = ((inst_27076) || (inst_27078));
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27079)){
var statearr_27203_27255 = state_27168__$1;
(statearr_27203_27255[(1)] = (5));

} else {
var statearr_27204_27256 = state_27168__$1;
(statearr_27204_27256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (23))){
var inst_27127 = (state_27168[(14)]);
var inst_27133 = (inst_27127 == null);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27133)){
var statearr_27205_27257 = state_27168__$1;
(statearr_27205_27257[(1)] = (26));

} else {
var statearr_27206_27258 = state_27168__$1;
(statearr_27206_27258[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (35))){
var inst_27153 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27153)){
var statearr_27207_27259 = state_27168__$1;
(statearr_27207_27259[(1)] = (36));

} else {
var statearr_27208_27260 = state_27168__$1;
(statearr_27208_27260[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (19))){
var inst_27095 = (state_27168[(7)]);
var inst_27115 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27095);
var state_27168__$1 = state_27168;
var statearr_27209_27261 = state_27168__$1;
(statearr_27209_27261[(2)] = inst_27115);

(statearr_27209_27261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (11))){
var inst_27095 = (state_27168[(7)]);
var inst_27099 = (inst_27095 == null);
var inst_27100 = cljs.core.not.call(null,inst_27099);
var state_27168__$1 = state_27168;
if(inst_27100){
var statearr_27210_27262 = state_27168__$1;
(statearr_27210_27262[(1)] = (13));

} else {
var statearr_27211_27263 = state_27168__$1;
(statearr_27211_27263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (9))){
var inst_27070 = (state_27168[(8)]);
var state_27168__$1 = state_27168;
var statearr_27212_27264 = state_27168__$1;
(statearr_27212_27264[(2)] = inst_27070);

(statearr_27212_27264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (5))){
var state_27168__$1 = state_27168;
var statearr_27213_27265 = state_27168__$1;
(statearr_27213_27265[(2)] = true);

(statearr_27213_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (14))){
var state_27168__$1 = state_27168;
var statearr_27214_27266 = state_27168__$1;
(statearr_27214_27266[(2)] = false);

(statearr_27214_27266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (26))){
var inst_27128 = (state_27168[(11)]);
var inst_27135 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27128);
var state_27168__$1 = state_27168;
var statearr_27215_27267 = state_27168__$1;
(statearr_27215_27267[(2)] = inst_27135);

(statearr_27215_27267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (16))){
var state_27168__$1 = state_27168;
var statearr_27216_27268 = state_27168__$1;
(statearr_27216_27268[(2)] = true);

(statearr_27216_27268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (38))){
var inst_27158 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27217_27269 = state_27168__$1;
(statearr_27217_27269[(2)] = inst_27158);

(statearr_27217_27269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (30))){
var inst_27119 = (state_27168[(9)]);
var inst_27120 = (state_27168[(13)]);
var inst_27128 = (state_27168[(11)]);
var inst_27145 = cljs.core.empty_QMARK_.call(null,inst_27119);
var inst_27146 = inst_27120.call(null,inst_27128);
var inst_27147 = cljs.core.not.call(null,inst_27146);
var inst_27148 = ((inst_27145) && (inst_27147));
var state_27168__$1 = state_27168;
var statearr_27218_27270 = state_27168__$1;
(statearr_27218_27270[(2)] = inst_27148);

(statearr_27218_27270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (10))){
var inst_27070 = (state_27168[(8)]);
var inst_27091 = (state_27168[(2)]);
var inst_27092 = cljs.core.get.call(null,inst_27091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27093 = cljs.core.get.call(null,inst_27091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27094 = cljs.core.get.call(null,inst_27091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27095 = inst_27070;
var state_27168__$1 = (function (){var statearr_27219 = state_27168;
(statearr_27219[(7)] = inst_27095);

(statearr_27219[(16)] = inst_27094);

(statearr_27219[(17)] = inst_27092);

(statearr_27219[(18)] = inst_27093);

return statearr_27219;
})();
var statearr_27220_27271 = state_27168__$1;
(statearr_27220_27271[(2)] = null);

(statearr_27220_27271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (18))){
var inst_27110 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27221_27272 = state_27168__$1;
(statearr_27221_27272[(2)] = inst_27110);

(statearr_27221_27272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (37))){
var state_27168__$1 = state_27168;
var statearr_27222_27273 = state_27168__$1;
(statearr_27222_27273[(2)] = null);

(statearr_27222_27273[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (8))){
var inst_27070 = (state_27168[(8)]);
var inst_27088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27070);
var state_27168__$1 = state_27168;
var statearr_27223_27274 = state_27168__$1;
(statearr_27223_27274[(2)] = inst_27088);

(statearr_27223_27274[(1)] = (10));


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
});})(c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25648__auto__,c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25649__auto__ = null;
var cljs$core$async$mix_$_state_machine__25649__auto____0 = (function (){
var statearr_27224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27224[(0)] = cljs$core$async$mix_$_state_machine__25649__auto__);

(statearr_27224[(1)] = (1));

return statearr_27224;
});
var cljs$core$async$mix_$_state_machine__25649__auto____1 = (function (state_27168){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27225){if((e27225 instanceof Object)){
var ex__25652__auto__ = e27225;
var statearr_27226_27275 = state_27168;
(statearr_27226_27275[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27276 = state_27168;
state_27168 = G__27276;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25649__auto__ = function(state_27168){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25649__auto____1.call(this,state_27168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25649__auto____0;
cljs$core$async$mix_$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25649__auto____1;
return cljs$core$async$mix_$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26171__auto__ = (function (){var statearr_27227 = f__26170__auto__.call(null);
(statearr_27227[(6)] = c__26169__auto___27228);

return statearr_27227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27278 = arguments.length;
switch (G__27278) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
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
var G__27282 = arguments.length;
switch (G__27282) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__27280_SHARP_){
if(cljs.core.truth_(p1__27280_SHARP_.call(null,topic))){
return p1__27280_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27280_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27283 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27284){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27284 = meta27284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27285,meta27284__$1){
var self__ = this;
var _27285__$1 = this;
return (new cljs.core.async.t_cljs$core$async27283(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27284__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27285){
var self__ = this;
var _27285__$1 = this;
return self__.meta27284;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27284","meta27284",-1711458742,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27283";

cljs.core.async.t_cljs$core$async27283.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27283");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27283.
 */
cljs.core.async.__GT_t_cljs$core$async27283 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27284){
return (new cljs.core.async.t_cljs$core$async27283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27284));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27283(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26169__auto___27403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27403,mults,ensure_mult,p){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27403,mults,ensure_mult,p){
return (function (state_27357){
var state_val_27358 = (state_27357[(1)]);
if((state_val_27358 === (7))){
var inst_27353 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27359_27404 = state_27357__$1;
(statearr_27359_27404[(2)] = inst_27353);

(statearr_27359_27404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (20))){
var state_27357__$1 = state_27357;
var statearr_27360_27405 = state_27357__$1;
(statearr_27360_27405[(2)] = null);

(statearr_27360_27405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (1))){
var state_27357__$1 = state_27357;
var statearr_27361_27406 = state_27357__$1;
(statearr_27361_27406[(2)] = null);

(statearr_27361_27406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (24))){
var inst_27336 = (state_27357[(7)]);
var inst_27345 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27336);
var state_27357__$1 = state_27357;
var statearr_27362_27407 = state_27357__$1;
(statearr_27362_27407[(2)] = inst_27345);

(statearr_27362_27407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (4))){
var inst_27288 = (state_27357[(8)]);
var inst_27288__$1 = (state_27357[(2)]);
var inst_27289 = (inst_27288__$1 == null);
var state_27357__$1 = (function (){var statearr_27363 = state_27357;
(statearr_27363[(8)] = inst_27288__$1);

return statearr_27363;
})();
if(cljs.core.truth_(inst_27289)){
var statearr_27364_27408 = state_27357__$1;
(statearr_27364_27408[(1)] = (5));

} else {
var statearr_27365_27409 = state_27357__$1;
(statearr_27365_27409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (15))){
var inst_27330 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27366_27410 = state_27357__$1;
(statearr_27366_27410[(2)] = inst_27330);

(statearr_27366_27410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (21))){
var inst_27350 = (state_27357[(2)]);
var state_27357__$1 = (function (){var statearr_27367 = state_27357;
(statearr_27367[(9)] = inst_27350);

return statearr_27367;
})();
var statearr_27368_27411 = state_27357__$1;
(statearr_27368_27411[(2)] = null);

(statearr_27368_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (13))){
var inst_27312 = (state_27357[(10)]);
var inst_27314 = cljs.core.chunked_seq_QMARK_.call(null,inst_27312);
var state_27357__$1 = state_27357;
if(inst_27314){
var statearr_27369_27412 = state_27357__$1;
(statearr_27369_27412[(1)] = (16));

} else {
var statearr_27370_27413 = state_27357__$1;
(statearr_27370_27413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (22))){
var inst_27342 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
if(cljs.core.truth_(inst_27342)){
var statearr_27371_27414 = state_27357__$1;
(statearr_27371_27414[(1)] = (23));

} else {
var statearr_27372_27415 = state_27357__$1;
(statearr_27372_27415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (6))){
var inst_27336 = (state_27357[(7)]);
var inst_27338 = (state_27357[(11)]);
var inst_27288 = (state_27357[(8)]);
var inst_27336__$1 = topic_fn.call(null,inst_27288);
var inst_27337 = cljs.core.deref.call(null,mults);
var inst_27338__$1 = cljs.core.get.call(null,inst_27337,inst_27336__$1);
var state_27357__$1 = (function (){var statearr_27373 = state_27357;
(statearr_27373[(7)] = inst_27336__$1);

(statearr_27373[(11)] = inst_27338__$1);

return statearr_27373;
})();
if(cljs.core.truth_(inst_27338__$1)){
var statearr_27374_27416 = state_27357__$1;
(statearr_27374_27416[(1)] = (19));

} else {
var statearr_27375_27417 = state_27357__$1;
(statearr_27375_27417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (25))){
var inst_27347 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27376_27418 = state_27357__$1;
(statearr_27376_27418[(2)] = inst_27347);

(statearr_27376_27418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (17))){
var inst_27312 = (state_27357[(10)]);
var inst_27321 = cljs.core.first.call(null,inst_27312);
var inst_27322 = cljs.core.async.muxch_STAR_.call(null,inst_27321);
var inst_27323 = cljs.core.async.close_BANG_.call(null,inst_27322);
var inst_27324 = cljs.core.next.call(null,inst_27312);
var inst_27298 = inst_27324;
var inst_27299 = null;
var inst_27300 = (0);
var inst_27301 = (0);
var state_27357__$1 = (function (){var statearr_27377 = state_27357;
(statearr_27377[(12)] = inst_27298);

(statearr_27377[(13)] = inst_27300);

(statearr_27377[(14)] = inst_27323);

(statearr_27377[(15)] = inst_27299);

(statearr_27377[(16)] = inst_27301);

return statearr_27377;
})();
var statearr_27378_27419 = state_27357__$1;
(statearr_27378_27419[(2)] = null);

(statearr_27378_27419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (3))){
var inst_27355 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27357__$1,inst_27355);
} else {
if((state_val_27358 === (12))){
var inst_27332 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27379_27420 = state_27357__$1;
(statearr_27379_27420[(2)] = inst_27332);

(statearr_27379_27420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (2))){
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27357__$1,(4),ch);
} else {
if((state_val_27358 === (23))){
var state_27357__$1 = state_27357;
var statearr_27380_27421 = state_27357__$1;
(statearr_27380_27421[(2)] = null);

(statearr_27380_27421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (19))){
var inst_27338 = (state_27357[(11)]);
var inst_27288 = (state_27357[(8)]);
var inst_27340 = cljs.core.async.muxch_STAR_.call(null,inst_27338);
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27357__$1,(22),inst_27340,inst_27288);
} else {
if((state_val_27358 === (11))){
var inst_27298 = (state_27357[(12)]);
var inst_27312 = (state_27357[(10)]);
var inst_27312__$1 = cljs.core.seq.call(null,inst_27298);
var state_27357__$1 = (function (){var statearr_27381 = state_27357;
(statearr_27381[(10)] = inst_27312__$1);

return statearr_27381;
})();
if(inst_27312__$1){
var statearr_27382_27422 = state_27357__$1;
(statearr_27382_27422[(1)] = (13));

} else {
var statearr_27383_27423 = state_27357__$1;
(statearr_27383_27423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (9))){
var inst_27334 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27384_27424 = state_27357__$1;
(statearr_27384_27424[(2)] = inst_27334);

(statearr_27384_27424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (5))){
var inst_27295 = cljs.core.deref.call(null,mults);
var inst_27296 = cljs.core.vals.call(null,inst_27295);
var inst_27297 = cljs.core.seq.call(null,inst_27296);
var inst_27298 = inst_27297;
var inst_27299 = null;
var inst_27300 = (0);
var inst_27301 = (0);
var state_27357__$1 = (function (){var statearr_27385 = state_27357;
(statearr_27385[(12)] = inst_27298);

(statearr_27385[(13)] = inst_27300);

(statearr_27385[(15)] = inst_27299);

(statearr_27385[(16)] = inst_27301);

return statearr_27385;
})();
var statearr_27386_27425 = state_27357__$1;
(statearr_27386_27425[(2)] = null);

(statearr_27386_27425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (14))){
var state_27357__$1 = state_27357;
var statearr_27390_27426 = state_27357__$1;
(statearr_27390_27426[(2)] = null);

(statearr_27390_27426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (16))){
var inst_27312 = (state_27357[(10)]);
var inst_27316 = cljs.core.chunk_first.call(null,inst_27312);
var inst_27317 = cljs.core.chunk_rest.call(null,inst_27312);
var inst_27318 = cljs.core.count.call(null,inst_27316);
var inst_27298 = inst_27317;
var inst_27299 = inst_27316;
var inst_27300 = inst_27318;
var inst_27301 = (0);
var state_27357__$1 = (function (){var statearr_27391 = state_27357;
(statearr_27391[(12)] = inst_27298);

(statearr_27391[(13)] = inst_27300);

(statearr_27391[(15)] = inst_27299);

(statearr_27391[(16)] = inst_27301);

return statearr_27391;
})();
var statearr_27392_27427 = state_27357__$1;
(statearr_27392_27427[(2)] = null);

(statearr_27392_27427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (10))){
var inst_27298 = (state_27357[(12)]);
var inst_27300 = (state_27357[(13)]);
var inst_27299 = (state_27357[(15)]);
var inst_27301 = (state_27357[(16)]);
var inst_27306 = cljs.core._nth.call(null,inst_27299,inst_27301);
var inst_27307 = cljs.core.async.muxch_STAR_.call(null,inst_27306);
var inst_27308 = cljs.core.async.close_BANG_.call(null,inst_27307);
var inst_27309 = (inst_27301 + (1));
var tmp27387 = inst_27298;
var tmp27388 = inst_27300;
var tmp27389 = inst_27299;
var inst_27298__$1 = tmp27387;
var inst_27299__$1 = tmp27389;
var inst_27300__$1 = tmp27388;
var inst_27301__$1 = inst_27309;
var state_27357__$1 = (function (){var statearr_27393 = state_27357;
(statearr_27393[(17)] = inst_27308);

(statearr_27393[(12)] = inst_27298__$1);

(statearr_27393[(13)] = inst_27300__$1);

(statearr_27393[(15)] = inst_27299__$1);

(statearr_27393[(16)] = inst_27301__$1);

return statearr_27393;
})();
var statearr_27394_27428 = state_27357__$1;
(statearr_27394_27428[(2)] = null);

(statearr_27394_27428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (18))){
var inst_27327 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27395_27429 = state_27357__$1;
(statearr_27395_27429[(2)] = inst_27327);

(statearr_27395_27429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (8))){
var inst_27300 = (state_27357[(13)]);
var inst_27301 = (state_27357[(16)]);
var inst_27303 = (inst_27301 < inst_27300);
var inst_27304 = inst_27303;
var state_27357__$1 = state_27357;
if(cljs.core.truth_(inst_27304)){
var statearr_27396_27430 = state_27357__$1;
(statearr_27396_27430[(1)] = (10));

} else {
var statearr_27397_27431 = state_27357__$1;
(statearr_27397_27431[(1)] = (11));

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
});})(c__26169__auto___27403,mults,ensure_mult,p))
;
return ((function (switch__25648__auto__,c__26169__auto___27403,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27398[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27398[(1)] = (1));

return statearr_27398;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27357){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27399){if((e27399 instanceof Object)){
var ex__25652__auto__ = e27399;
var statearr_27400_27432 = state_27357;
(statearr_27400_27432[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_27357;
state_27357 = G__27433;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27403,mults,ensure_mult,p))
})();
var state__26171__auto__ = (function (){var statearr_27401 = f__26170__auto__.call(null);
(statearr_27401[(6)] = c__26169__auto___27403);

return statearr_27401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27403,mults,ensure_mult,p))
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
var G__27435 = arguments.length;
switch (G__27435) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27438 = arguments.length;
switch (G__27438) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27441 = arguments.length;
switch (G__27441) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__26169__auto___27508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27480){
var state_val_27481 = (state_27480[(1)]);
if((state_val_27481 === (7))){
var state_27480__$1 = state_27480;
var statearr_27482_27509 = state_27480__$1;
(statearr_27482_27509[(2)] = null);

(statearr_27482_27509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (1))){
var state_27480__$1 = state_27480;
var statearr_27483_27510 = state_27480__$1;
(statearr_27483_27510[(2)] = null);

(statearr_27483_27510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (4))){
var inst_27444 = (state_27480[(7)]);
var inst_27446 = (inst_27444 < cnt);
var state_27480__$1 = state_27480;
if(cljs.core.truth_(inst_27446)){
var statearr_27484_27511 = state_27480__$1;
(statearr_27484_27511[(1)] = (6));

} else {
var statearr_27485_27512 = state_27480__$1;
(statearr_27485_27512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (15))){
var inst_27476 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
var statearr_27486_27513 = state_27480__$1;
(statearr_27486_27513[(2)] = inst_27476);

(statearr_27486_27513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (13))){
var inst_27469 = cljs.core.async.close_BANG_.call(null,out);
var state_27480__$1 = state_27480;
var statearr_27487_27514 = state_27480__$1;
(statearr_27487_27514[(2)] = inst_27469);

(statearr_27487_27514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (6))){
var state_27480__$1 = state_27480;
var statearr_27488_27515 = state_27480__$1;
(statearr_27488_27515[(2)] = null);

(statearr_27488_27515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (3))){
var inst_27478 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27480__$1,inst_27478);
} else {
if((state_val_27481 === (12))){
var inst_27466 = (state_27480[(8)]);
var inst_27466__$1 = (state_27480[(2)]);
var inst_27467 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27466__$1);
var state_27480__$1 = (function (){var statearr_27489 = state_27480;
(statearr_27489[(8)] = inst_27466__$1);

return statearr_27489;
})();
if(cljs.core.truth_(inst_27467)){
var statearr_27490_27516 = state_27480__$1;
(statearr_27490_27516[(1)] = (13));

} else {
var statearr_27491_27517 = state_27480__$1;
(statearr_27491_27517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (2))){
var inst_27443 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27444 = (0);
var state_27480__$1 = (function (){var statearr_27492 = state_27480;
(statearr_27492[(9)] = inst_27443);

(statearr_27492[(7)] = inst_27444);

return statearr_27492;
})();
var statearr_27493_27518 = state_27480__$1;
(statearr_27493_27518[(2)] = null);

(statearr_27493_27518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (11))){
var inst_27444 = (state_27480[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27480,(10),Object,null,(9));
var inst_27453 = chs__$1.call(null,inst_27444);
var inst_27454 = done.call(null,inst_27444);
var inst_27455 = cljs.core.async.take_BANG_.call(null,inst_27453,inst_27454);
var state_27480__$1 = state_27480;
var statearr_27494_27519 = state_27480__$1;
(statearr_27494_27519[(2)] = inst_27455);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (9))){
var inst_27444 = (state_27480[(7)]);
var inst_27457 = (state_27480[(2)]);
var inst_27458 = (inst_27444 + (1));
var inst_27444__$1 = inst_27458;
var state_27480__$1 = (function (){var statearr_27495 = state_27480;
(statearr_27495[(10)] = inst_27457);

(statearr_27495[(7)] = inst_27444__$1);

return statearr_27495;
})();
var statearr_27496_27520 = state_27480__$1;
(statearr_27496_27520[(2)] = null);

(statearr_27496_27520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (5))){
var inst_27464 = (state_27480[(2)]);
var state_27480__$1 = (function (){var statearr_27497 = state_27480;
(statearr_27497[(11)] = inst_27464);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27480__$1,(12),dchan);
} else {
if((state_val_27481 === (14))){
var inst_27466 = (state_27480[(8)]);
var inst_27471 = cljs.core.apply.call(null,f,inst_27466);
var state_27480__$1 = state_27480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27480__$1,(16),out,inst_27471);
} else {
if((state_val_27481 === (16))){
var inst_27473 = (state_27480[(2)]);
var state_27480__$1 = (function (){var statearr_27498 = state_27480;
(statearr_27498[(12)] = inst_27473);

return statearr_27498;
})();
var statearr_27499_27521 = state_27480__$1;
(statearr_27499_27521[(2)] = null);

(statearr_27499_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (10))){
var inst_27448 = (state_27480[(2)]);
var inst_27449 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27480__$1 = (function (){var statearr_27500 = state_27480;
(statearr_27500[(13)] = inst_27448);

return statearr_27500;
})();
var statearr_27501_27522 = state_27480__$1;
(statearr_27501_27522[(2)] = inst_27449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27481 === (8))){
var inst_27462 = (state_27480[(2)]);
var state_27480__$1 = state_27480;
var statearr_27502_27523 = state_27480__$1;
(statearr_27502_27523[(2)] = inst_27462);

(statearr_27502_27523[(1)] = (5));


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
});})(c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25648__auto__,c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27503[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27503[(1)] = (1));

return statearr_27503;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27480){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27504){if((e27504 instanceof Object)){
var ex__25652__auto__ = e27504;
var statearr_27505_27524 = state_27480;
(statearr_27505_27524[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27525 = state_27480;
state_27480 = G__27525;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26171__auto__ = (function (){var statearr_27506 = f__26170__auto__.call(null);
(statearr_27506[(6)] = c__26169__auto___27508);

return statearr_27506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27508,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27528 = arguments.length;
switch (G__27528) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___27582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27582,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27582,out){
return (function (state_27560){
var state_val_27561 = (state_27560[(1)]);
if((state_val_27561 === (7))){
var inst_27540 = (state_27560[(7)]);
var inst_27539 = (state_27560[(8)]);
var inst_27539__$1 = (state_27560[(2)]);
var inst_27540__$1 = cljs.core.nth.call(null,inst_27539__$1,(0),null);
var inst_27541 = cljs.core.nth.call(null,inst_27539__$1,(1),null);
var inst_27542 = (inst_27540__$1 == null);
var state_27560__$1 = (function (){var statearr_27562 = state_27560;
(statearr_27562[(7)] = inst_27540__$1);

(statearr_27562[(9)] = inst_27541);

(statearr_27562[(8)] = inst_27539__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27542)){
var statearr_27563_27583 = state_27560__$1;
(statearr_27563_27583[(1)] = (8));

} else {
var statearr_27564_27584 = state_27560__$1;
(statearr_27564_27584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (1))){
var inst_27529 = cljs.core.vec.call(null,chs);
var inst_27530 = inst_27529;
var state_27560__$1 = (function (){var statearr_27565 = state_27560;
(statearr_27565[(10)] = inst_27530);

return statearr_27565;
})();
var statearr_27566_27585 = state_27560__$1;
(statearr_27566_27585[(2)] = null);

(statearr_27566_27585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (4))){
var inst_27530 = (state_27560[(10)]);
var state_27560__$1 = state_27560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27560__$1,(7),inst_27530);
} else {
if((state_val_27561 === (6))){
var inst_27556 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27567_27586 = state_27560__$1;
(statearr_27567_27586[(2)] = inst_27556);

(statearr_27567_27586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (3))){
var inst_27558 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27560__$1,inst_27558);
} else {
if((state_val_27561 === (2))){
var inst_27530 = (state_27560[(10)]);
var inst_27532 = cljs.core.count.call(null,inst_27530);
var inst_27533 = (inst_27532 > (0));
var state_27560__$1 = state_27560;
if(cljs.core.truth_(inst_27533)){
var statearr_27569_27587 = state_27560__$1;
(statearr_27569_27587[(1)] = (4));

} else {
var statearr_27570_27588 = state_27560__$1;
(statearr_27570_27588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (11))){
var inst_27530 = (state_27560[(10)]);
var inst_27549 = (state_27560[(2)]);
var tmp27568 = inst_27530;
var inst_27530__$1 = tmp27568;
var state_27560__$1 = (function (){var statearr_27571 = state_27560;
(statearr_27571[(11)] = inst_27549);

(statearr_27571[(10)] = inst_27530__$1);

return statearr_27571;
})();
var statearr_27572_27589 = state_27560__$1;
(statearr_27572_27589[(2)] = null);

(statearr_27572_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (9))){
var inst_27540 = (state_27560[(7)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27560__$1,(11),out,inst_27540);
} else {
if((state_val_27561 === (5))){
var inst_27554 = cljs.core.async.close_BANG_.call(null,out);
var state_27560__$1 = state_27560;
var statearr_27573_27590 = state_27560__$1;
(statearr_27573_27590[(2)] = inst_27554);

(statearr_27573_27590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (10))){
var inst_27552 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27574_27591 = state_27560__$1;
(statearr_27574_27591[(2)] = inst_27552);

(statearr_27574_27591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (8))){
var inst_27540 = (state_27560[(7)]);
var inst_27530 = (state_27560[(10)]);
var inst_27541 = (state_27560[(9)]);
var inst_27539 = (state_27560[(8)]);
var inst_27544 = (function (){var cs = inst_27530;
var vec__27535 = inst_27539;
var v = inst_27540;
var c = inst_27541;
return ((function (cs,vec__27535,v,c,inst_27540,inst_27530,inst_27541,inst_27539,state_val_27561,c__26169__auto___27582,out){
return (function (p1__27526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27526_SHARP_);
});
;})(cs,vec__27535,v,c,inst_27540,inst_27530,inst_27541,inst_27539,state_val_27561,c__26169__auto___27582,out))
})();
var inst_27545 = cljs.core.filterv.call(null,inst_27544,inst_27530);
var inst_27530__$1 = inst_27545;
var state_27560__$1 = (function (){var statearr_27575 = state_27560;
(statearr_27575[(10)] = inst_27530__$1);

return statearr_27575;
})();
var statearr_27576_27592 = state_27560__$1;
(statearr_27576_27592[(2)] = null);

(statearr_27576_27592[(1)] = (2));


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
});})(c__26169__auto___27582,out))
;
return ((function (switch__25648__auto__,c__26169__auto___27582,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27577[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27577[(1)] = (1));

return statearr_27577;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27560){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27578){if((e27578 instanceof Object)){
var ex__25652__auto__ = e27578;
var statearr_27579_27593 = state_27560;
(statearr_27579_27593[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27594 = state_27560;
state_27560 = G__27594;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27582,out))
})();
var state__26171__auto__ = (function (){var statearr_27580 = f__26170__auto__.call(null);
(statearr_27580[(6)] = c__26169__auto___27582);

return statearr_27580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27582,out))
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
var G__27596 = arguments.length;
switch (G__27596) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___27641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27641,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27641,out){
return (function (state_27620){
var state_val_27621 = (state_27620[(1)]);
if((state_val_27621 === (7))){
var inst_27602 = (state_27620[(7)]);
var inst_27602__$1 = (state_27620[(2)]);
var inst_27603 = (inst_27602__$1 == null);
var inst_27604 = cljs.core.not.call(null,inst_27603);
var state_27620__$1 = (function (){var statearr_27622 = state_27620;
(statearr_27622[(7)] = inst_27602__$1);

return statearr_27622;
})();
if(inst_27604){
var statearr_27623_27642 = state_27620__$1;
(statearr_27623_27642[(1)] = (8));

} else {
var statearr_27624_27643 = state_27620__$1;
(statearr_27624_27643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (1))){
var inst_27597 = (0);
var state_27620__$1 = (function (){var statearr_27625 = state_27620;
(statearr_27625[(8)] = inst_27597);

return statearr_27625;
})();
var statearr_27626_27644 = state_27620__$1;
(statearr_27626_27644[(2)] = null);

(statearr_27626_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (4))){
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(7),ch);
} else {
if((state_val_27621 === (6))){
var inst_27615 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27627_27645 = state_27620__$1;
(statearr_27627_27645[(2)] = inst_27615);

(statearr_27627_27645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (3))){
var inst_27617 = (state_27620[(2)]);
var inst_27618 = cljs.core.async.close_BANG_.call(null,out);
var state_27620__$1 = (function (){var statearr_27628 = state_27620;
(statearr_27628[(9)] = inst_27617);

return statearr_27628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27620__$1,inst_27618);
} else {
if((state_val_27621 === (2))){
var inst_27597 = (state_27620[(8)]);
var inst_27599 = (inst_27597 < n);
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27599)){
var statearr_27629_27646 = state_27620__$1;
(statearr_27629_27646[(1)] = (4));

} else {
var statearr_27630_27647 = state_27620__$1;
(statearr_27630_27647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (11))){
var inst_27597 = (state_27620[(8)]);
var inst_27607 = (state_27620[(2)]);
var inst_27608 = (inst_27597 + (1));
var inst_27597__$1 = inst_27608;
var state_27620__$1 = (function (){var statearr_27631 = state_27620;
(statearr_27631[(10)] = inst_27607);

(statearr_27631[(8)] = inst_27597__$1);

return statearr_27631;
})();
var statearr_27632_27648 = state_27620__$1;
(statearr_27632_27648[(2)] = null);

(statearr_27632_27648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (9))){
var state_27620__$1 = state_27620;
var statearr_27633_27649 = state_27620__$1;
(statearr_27633_27649[(2)] = null);

(statearr_27633_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (5))){
var state_27620__$1 = state_27620;
var statearr_27634_27650 = state_27620__$1;
(statearr_27634_27650[(2)] = null);

(statearr_27634_27650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (10))){
var inst_27612 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27635_27651 = state_27620__$1;
(statearr_27635_27651[(2)] = inst_27612);

(statearr_27635_27651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (8))){
var inst_27602 = (state_27620[(7)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27620__$1,(11),out,inst_27602);
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
});})(c__26169__auto___27641,out))
;
return ((function (switch__25648__auto__,c__26169__auto___27641,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27636[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27636[(1)] = (1));

return statearr_27636;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27620){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object)){
var ex__25652__auto__ = e27637;
var statearr_27638_27652 = state_27620;
(statearr_27638_27652[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27653 = state_27620;
state_27620 = G__27653;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27641,out))
})();
var state__26171__auto__ = (function (){var statearr_27639 = f__26170__auto__.call(null);
(statearr_27639[(6)] = c__26169__auto___27641);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27641,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27655 = (function (f,ch,meta27656){
this.f = f;
this.ch = ch;
this.meta27656 = meta27656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27657,meta27656__$1){
var self__ = this;
var _27657__$1 = this;
return (new cljs.core.async.t_cljs$core$async27655(self__.f,self__.ch,meta27656__$1));
});

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27657){
var self__ = this;
var _27657__$1 = this;
return self__.meta27656;
});

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27658 = (function (f,ch,meta27656,_,fn1,meta27659){
this.f = f;
this.ch = ch;
this.meta27656 = meta27656;
this._ = _;
this.fn1 = fn1;
this.meta27659 = meta27659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27660,meta27659__$1){
var self__ = this;
var _27660__$1 = this;
return (new cljs.core.async.t_cljs$core$async27658(self__.f,self__.ch,self__.meta27656,self__._,self__.fn1,meta27659__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27660){
var self__ = this;
var _27660__$1 = this;
return self__.meta27659;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27654_SHARP_){
return f1.call(null,(((p1__27654_SHARP_ == null))?null:self__.f.call(null,p1__27654_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27656","meta27656",-886939797,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27655","cljs.core.async/t_cljs$core$async27655",-1287395841,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27659","meta27659",266059535,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27658";

cljs.core.async.t_cljs$core$async27658.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27658");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27658.
 */
cljs.core.async.__GT_t_cljs$core$async27658 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27658(f__$1,ch__$1,meta27656__$1,___$2,fn1__$1,meta27659){
return (new cljs.core.async.t_cljs$core$async27658(f__$1,ch__$1,meta27656__$1,___$2,fn1__$1,meta27659));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27658(self__.f,self__.ch,self__.meta27656,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27656","meta27656",-886939797,null)], null);
});

cljs.core.async.t_cljs$core$async27655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27655";

cljs.core.async.t_cljs$core$async27655.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27655");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27655.
 */
cljs.core.async.__GT_t_cljs$core$async27655 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27655(f__$1,ch__$1,meta27656){
return (new cljs.core.async.t_cljs$core$async27655(f__$1,ch__$1,meta27656));
});

}

return (new cljs.core.async.t_cljs$core$async27655(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27661 = (function (f,ch,meta27662){
this.f = f;
this.ch = ch;
this.meta27662 = meta27662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27663,meta27662__$1){
var self__ = this;
var _27663__$1 = this;
return (new cljs.core.async.t_cljs$core$async27661(self__.f,self__.ch,meta27662__$1));
});

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27663){
var self__ = this;
var _27663__$1 = this;
return self__.meta27662;
});

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27662","meta27662",539480244,null)], null);
});

cljs.core.async.t_cljs$core$async27661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27661";

cljs.core.async.t_cljs$core$async27661.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27661");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27661.
 */
cljs.core.async.__GT_t_cljs$core$async27661 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27661(f__$1,ch__$1,meta27662){
return (new cljs.core.async.t_cljs$core$async27661(f__$1,ch__$1,meta27662));
});

}

return (new cljs.core.async.t_cljs$core$async27661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27664 = (function (p,ch,meta27665){
this.p = p;
this.ch = ch;
this.meta27665 = meta27665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27666,meta27665__$1){
var self__ = this;
var _27666__$1 = this;
return (new cljs.core.async.t_cljs$core$async27664(self__.p,self__.ch,meta27665__$1));
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27666){
var self__ = this;
var _27666__$1 = this;
return self__.meta27665;
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27665","meta27665",-381192,null)], null);
});

cljs.core.async.t_cljs$core$async27664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27664";

cljs.core.async.t_cljs$core$async27664.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27664");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27664.
 */
cljs.core.async.__GT_t_cljs$core$async27664 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27664(p__$1,ch__$1,meta27665){
return (new cljs.core.async.t_cljs$core$async27664(p__$1,ch__$1,meta27665));
});

}

return (new cljs.core.async.t_cljs$core$async27664(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27668 = arguments.length;
switch (G__27668) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___27708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27708,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27708,out){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27691_27709 = state_27689__$1;
(statearr_27691_27709[(2)] = inst_27685);

(statearr_27691_27709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var state_27689__$1 = state_27689;
var statearr_27692_27710 = state_27689__$1;
(statearr_27692_27710[(2)] = null);

(statearr_27692_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27671 = (state_27689[(7)]);
var inst_27671__$1 = (state_27689[(2)]);
var inst_27672 = (inst_27671__$1 == null);
var state_27689__$1 = (function (){var statearr_27693 = state_27689;
(statearr_27693[(7)] = inst_27671__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27672)){
var statearr_27694_27711 = state_27689__$1;
(statearr_27694_27711[(1)] = (5));

} else {
var statearr_27695_27712 = state_27689__$1;
(statearr_27695_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (6))){
var inst_27671 = (state_27689[(7)]);
var inst_27676 = p.call(null,inst_27671);
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27676)){
var statearr_27696_27713 = state_27689__$1;
(statearr_27696_27713[(1)] = (8));

} else {
var statearr_27697_27714 = state_27689__$1;
(statearr_27697_27714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (2))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(4),ch);
} else {
if((state_val_27690 === (11))){
var inst_27679 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27698_27715 = state_27689__$1;
(statearr_27698_27715[(2)] = inst_27679);

(statearr_27698_27715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (9))){
var state_27689__$1 = state_27689;
var statearr_27699_27716 = state_27689__$1;
(statearr_27699_27716[(2)] = null);

(statearr_27699_27716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (5))){
var inst_27674 = cljs.core.async.close_BANG_.call(null,out);
var state_27689__$1 = state_27689;
var statearr_27700_27717 = state_27689__$1;
(statearr_27700_27717[(2)] = inst_27674);

(statearr_27700_27717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var inst_27682 = (state_27689[(2)]);
var state_27689__$1 = (function (){var statearr_27701 = state_27689;
(statearr_27701[(8)] = inst_27682);

return statearr_27701;
})();
var statearr_27702_27718 = state_27689__$1;
(statearr_27702_27718[(2)] = null);

(statearr_27702_27718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27671 = (state_27689[(7)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27689__$1,(11),out,inst_27671);
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
});})(c__26169__auto___27708,out))
;
return ((function (switch__25648__auto__,c__26169__auto___27708,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27703 = [null,null,null,null,null,null,null,null,null];
(statearr_27703[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27703[(1)] = (1));

return statearr_27703;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27689){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27704){if((e27704 instanceof Object)){
var ex__25652__auto__ = e27704;
var statearr_27705_27719 = state_27689;
(statearr_27705_27719[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27720 = state_27689;
state_27689 = G__27720;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27708,out))
})();
var state__26171__auto__ = (function (){var statearr_27706 = f__26170__auto__.call(null);
(statearr_27706[(6)] = c__26169__auto___27708);

return statearr_27706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27708,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27722 = arguments.length;
switch (G__27722) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__26169__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto__){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto__){
return (function (state_27785){
var state_val_27786 = (state_27785[(1)]);
if((state_val_27786 === (7))){
var inst_27781 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27787_27825 = state_27785__$1;
(statearr_27787_27825[(2)] = inst_27781);

(statearr_27787_27825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (20))){
var inst_27751 = (state_27785[(7)]);
var inst_27762 = (state_27785[(2)]);
var inst_27763 = cljs.core.next.call(null,inst_27751);
var inst_27737 = inst_27763;
var inst_27738 = null;
var inst_27739 = (0);
var inst_27740 = (0);
var state_27785__$1 = (function (){var statearr_27788 = state_27785;
(statearr_27788[(8)] = inst_27739);

(statearr_27788[(9)] = inst_27762);

(statearr_27788[(10)] = inst_27738);

(statearr_27788[(11)] = inst_27740);

(statearr_27788[(12)] = inst_27737);

return statearr_27788;
})();
var statearr_27789_27826 = state_27785__$1;
(statearr_27789_27826[(2)] = null);

(statearr_27789_27826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (1))){
var state_27785__$1 = state_27785;
var statearr_27790_27827 = state_27785__$1;
(statearr_27790_27827[(2)] = null);

(statearr_27790_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (4))){
var inst_27726 = (state_27785[(13)]);
var inst_27726__$1 = (state_27785[(2)]);
var inst_27727 = (inst_27726__$1 == null);
var state_27785__$1 = (function (){var statearr_27791 = state_27785;
(statearr_27791[(13)] = inst_27726__$1);

return statearr_27791;
})();
if(cljs.core.truth_(inst_27727)){
var statearr_27792_27828 = state_27785__$1;
(statearr_27792_27828[(1)] = (5));

} else {
var statearr_27793_27829 = state_27785__$1;
(statearr_27793_27829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (15))){
var state_27785__$1 = state_27785;
var statearr_27797_27830 = state_27785__$1;
(statearr_27797_27830[(2)] = null);

(statearr_27797_27830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (21))){
var state_27785__$1 = state_27785;
var statearr_27798_27831 = state_27785__$1;
(statearr_27798_27831[(2)] = null);

(statearr_27798_27831[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (13))){
var inst_27739 = (state_27785[(8)]);
var inst_27738 = (state_27785[(10)]);
var inst_27740 = (state_27785[(11)]);
var inst_27737 = (state_27785[(12)]);
var inst_27747 = (state_27785[(2)]);
var inst_27748 = (inst_27740 + (1));
var tmp27794 = inst_27739;
var tmp27795 = inst_27738;
var tmp27796 = inst_27737;
var inst_27737__$1 = tmp27796;
var inst_27738__$1 = tmp27795;
var inst_27739__$1 = tmp27794;
var inst_27740__$1 = inst_27748;
var state_27785__$1 = (function (){var statearr_27799 = state_27785;
(statearr_27799[(8)] = inst_27739__$1);

(statearr_27799[(10)] = inst_27738__$1);

(statearr_27799[(11)] = inst_27740__$1);

(statearr_27799[(14)] = inst_27747);

(statearr_27799[(12)] = inst_27737__$1);

return statearr_27799;
})();
var statearr_27800_27832 = state_27785__$1;
(statearr_27800_27832[(2)] = null);

(statearr_27800_27832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (22))){
var state_27785__$1 = state_27785;
var statearr_27801_27833 = state_27785__$1;
(statearr_27801_27833[(2)] = null);

(statearr_27801_27833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (6))){
var inst_27726 = (state_27785[(13)]);
var inst_27735 = f.call(null,inst_27726);
var inst_27736 = cljs.core.seq.call(null,inst_27735);
var inst_27737 = inst_27736;
var inst_27738 = null;
var inst_27739 = (0);
var inst_27740 = (0);
var state_27785__$1 = (function (){var statearr_27802 = state_27785;
(statearr_27802[(8)] = inst_27739);

(statearr_27802[(10)] = inst_27738);

(statearr_27802[(11)] = inst_27740);

(statearr_27802[(12)] = inst_27737);

return statearr_27802;
})();
var statearr_27803_27834 = state_27785__$1;
(statearr_27803_27834[(2)] = null);

(statearr_27803_27834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (17))){
var inst_27751 = (state_27785[(7)]);
var inst_27755 = cljs.core.chunk_first.call(null,inst_27751);
var inst_27756 = cljs.core.chunk_rest.call(null,inst_27751);
var inst_27757 = cljs.core.count.call(null,inst_27755);
var inst_27737 = inst_27756;
var inst_27738 = inst_27755;
var inst_27739 = inst_27757;
var inst_27740 = (0);
var state_27785__$1 = (function (){var statearr_27804 = state_27785;
(statearr_27804[(8)] = inst_27739);

(statearr_27804[(10)] = inst_27738);

(statearr_27804[(11)] = inst_27740);

(statearr_27804[(12)] = inst_27737);

return statearr_27804;
})();
var statearr_27805_27835 = state_27785__$1;
(statearr_27805_27835[(2)] = null);

(statearr_27805_27835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (3))){
var inst_27783 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27785__$1,inst_27783);
} else {
if((state_val_27786 === (12))){
var inst_27771 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27806_27836 = state_27785__$1;
(statearr_27806_27836[(2)] = inst_27771);

(statearr_27806_27836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (2))){
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27785__$1,(4),in$);
} else {
if((state_val_27786 === (23))){
var inst_27779 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27807_27837 = state_27785__$1;
(statearr_27807_27837[(2)] = inst_27779);

(statearr_27807_27837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (19))){
var inst_27766 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27808_27838 = state_27785__$1;
(statearr_27808_27838[(2)] = inst_27766);

(statearr_27808_27838[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (11))){
var inst_27751 = (state_27785[(7)]);
var inst_27737 = (state_27785[(12)]);
var inst_27751__$1 = cljs.core.seq.call(null,inst_27737);
var state_27785__$1 = (function (){var statearr_27809 = state_27785;
(statearr_27809[(7)] = inst_27751__$1);

return statearr_27809;
})();
if(inst_27751__$1){
var statearr_27810_27839 = state_27785__$1;
(statearr_27810_27839[(1)] = (14));

} else {
var statearr_27811_27840 = state_27785__$1;
(statearr_27811_27840[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (9))){
var inst_27773 = (state_27785[(2)]);
var inst_27774 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27785__$1 = (function (){var statearr_27812 = state_27785;
(statearr_27812[(15)] = inst_27773);

return statearr_27812;
})();
if(cljs.core.truth_(inst_27774)){
var statearr_27813_27841 = state_27785__$1;
(statearr_27813_27841[(1)] = (21));

} else {
var statearr_27814_27842 = state_27785__$1;
(statearr_27814_27842[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (5))){
var inst_27729 = cljs.core.async.close_BANG_.call(null,out);
var state_27785__$1 = state_27785;
var statearr_27815_27843 = state_27785__$1;
(statearr_27815_27843[(2)] = inst_27729);

(statearr_27815_27843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (14))){
var inst_27751 = (state_27785[(7)]);
var inst_27753 = cljs.core.chunked_seq_QMARK_.call(null,inst_27751);
var state_27785__$1 = state_27785;
if(inst_27753){
var statearr_27816_27844 = state_27785__$1;
(statearr_27816_27844[(1)] = (17));

} else {
var statearr_27817_27845 = state_27785__$1;
(statearr_27817_27845[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (16))){
var inst_27769 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
var statearr_27818_27846 = state_27785__$1;
(statearr_27818_27846[(2)] = inst_27769);

(statearr_27818_27846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (10))){
var inst_27738 = (state_27785[(10)]);
var inst_27740 = (state_27785[(11)]);
var inst_27745 = cljs.core._nth.call(null,inst_27738,inst_27740);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27785__$1,(13),out,inst_27745);
} else {
if((state_val_27786 === (18))){
var inst_27751 = (state_27785[(7)]);
var inst_27760 = cljs.core.first.call(null,inst_27751);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27785__$1,(20),out,inst_27760);
} else {
if((state_val_27786 === (8))){
var inst_27739 = (state_27785[(8)]);
var inst_27740 = (state_27785[(11)]);
var inst_27742 = (inst_27740 < inst_27739);
var inst_27743 = inst_27742;
var state_27785__$1 = state_27785;
if(cljs.core.truth_(inst_27743)){
var statearr_27819_27847 = state_27785__$1;
(statearr_27819_27847[(1)] = (10));

} else {
var statearr_27820_27848 = state_27785__$1;
(statearr_27820_27848[(1)] = (11));

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
});})(c__26169__auto__))
;
return ((function (switch__25648__auto__,c__26169__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____0 = (function (){
var statearr_27821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27821[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__);

(statearr_27821[(1)] = (1));

return statearr_27821;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____1 = (function (state_27785){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27822){if((e27822 instanceof Object)){
var ex__25652__auto__ = e27822;
var statearr_27823_27849 = state_27785;
(statearr_27823_27849[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27850 = state_27785;
state_27785 = G__27850;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__ = function(state_27785){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____1.call(this,state_27785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25649__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto__))
})();
var state__26171__auto__ = (function (){var statearr_27824 = f__26170__auto__.call(null);
(statearr_27824[(6)] = c__26169__auto__);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto__))
);

return c__26169__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27852 = arguments.length;
switch (G__27852) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27855 = arguments.length;
switch (G__27855) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27858 = arguments.length;
switch (G__27858) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___27905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27905,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27905,out){
return (function (state_27882){
var state_val_27883 = (state_27882[(1)]);
if((state_val_27883 === (7))){
var inst_27877 = (state_27882[(2)]);
var state_27882__$1 = state_27882;
var statearr_27884_27906 = state_27882__$1;
(statearr_27884_27906[(2)] = inst_27877);

(statearr_27884_27906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (1))){
var inst_27859 = null;
var state_27882__$1 = (function (){var statearr_27885 = state_27882;
(statearr_27885[(7)] = inst_27859);

return statearr_27885;
})();
var statearr_27886_27907 = state_27882__$1;
(statearr_27886_27907[(2)] = null);

(statearr_27886_27907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (4))){
var inst_27862 = (state_27882[(8)]);
var inst_27862__$1 = (state_27882[(2)]);
var inst_27863 = (inst_27862__$1 == null);
var inst_27864 = cljs.core.not.call(null,inst_27863);
var state_27882__$1 = (function (){var statearr_27887 = state_27882;
(statearr_27887[(8)] = inst_27862__$1);

return statearr_27887;
})();
if(inst_27864){
var statearr_27888_27908 = state_27882__$1;
(statearr_27888_27908[(1)] = (5));

} else {
var statearr_27889_27909 = state_27882__$1;
(statearr_27889_27909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (6))){
var state_27882__$1 = state_27882;
var statearr_27890_27910 = state_27882__$1;
(statearr_27890_27910[(2)] = null);

(statearr_27890_27910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (3))){
var inst_27879 = (state_27882[(2)]);
var inst_27880 = cljs.core.async.close_BANG_.call(null,out);
var state_27882__$1 = (function (){var statearr_27891 = state_27882;
(statearr_27891[(9)] = inst_27879);

return statearr_27891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27882__$1,inst_27880);
} else {
if((state_val_27883 === (2))){
var state_27882__$1 = state_27882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27882__$1,(4),ch);
} else {
if((state_val_27883 === (11))){
var inst_27862 = (state_27882[(8)]);
var inst_27871 = (state_27882[(2)]);
var inst_27859 = inst_27862;
var state_27882__$1 = (function (){var statearr_27892 = state_27882;
(statearr_27892[(7)] = inst_27859);

(statearr_27892[(10)] = inst_27871);

return statearr_27892;
})();
var statearr_27893_27911 = state_27882__$1;
(statearr_27893_27911[(2)] = null);

(statearr_27893_27911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (9))){
var inst_27862 = (state_27882[(8)]);
var state_27882__$1 = state_27882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27882__$1,(11),out,inst_27862);
} else {
if((state_val_27883 === (5))){
var inst_27859 = (state_27882[(7)]);
var inst_27862 = (state_27882[(8)]);
var inst_27866 = cljs.core._EQ_.call(null,inst_27862,inst_27859);
var state_27882__$1 = state_27882;
if(inst_27866){
var statearr_27895_27912 = state_27882__$1;
(statearr_27895_27912[(1)] = (8));

} else {
var statearr_27896_27913 = state_27882__$1;
(statearr_27896_27913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (10))){
var inst_27874 = (state_27882[(2)]);
var state_27882__$1 = state_27882;
var statearr_27897_27914 = state_27882__$1;
(statearr_27897_27914[(2)] = inst_27874);

(statearr_27897_27914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (8))){
var inst_27859 = (state_27882[(7)]);
var tmp27894 = inst_27859;
var inst_27859__$1 = tmp27894;
var state_27882__$1 = (function (){var statearr_27898 = state_27882;
(statearr_27898[(7)] = inst_27859__$1);

return statearr_27898;
})();
var statearr_27899_27915 = state_27882__$1;
(statearr_27899_27915[(2)] = null);

(statearr_27899_27915[(1)] = (2));


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
});})(c__26169__auto___27905,out))
;
return ((function (switch__25648__auto__,c__26169__auto___27905,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27882){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__25652__auto__ = e27901;
var statearr_27902_27916 = state_27882;
(statearr_27902_27916[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27917 = state_27882;
state_27882 = G__27917;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27905,out))
})();
var state__26171__auto__ = (function (){var statearr_27903 = f__26170__auto__.call(null);
(statearr_27903[(6)] = c__26169__auto___27905);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27905,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27919 = arguments.length;
switch (G__27919) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___27985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___27985,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___27985,out){
return (function (state_27957){
var state_val_27958 = (state_27957[(1)]);
if((state_val_27958 === (7))){
var inst_27953 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27959_27986 = state_27957__$1;
(statearr_27959_27986[(2)] = inst_27953);

(statearr_27959_27986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (1))){
var inst_27920 = (new Array(n));
var inst_27921 = inst_27920;
var inst_27922 = (0);
var state_27957__$1 = (function (){var statearr_27960 = state_27957;
(statearr_27960[(7)] = inst_27921);

(statearr_27960[(8)] = inst_27922);

return statearr_27960;
})();
var statearr_27961_27987 = state_27957__$1;
(statearr_27961_27987[(2)] = null);

(statearr_27961_27987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (4))){
var inst_27925 = (state_27957[(9)]);
var inst_27925__$1 = (state_27957[(2)]);
var inst_27926 = (inst_27925__$1 == null);
var inst_27927 = cljs.core.not.call(null,inst_27926);
var state_27957__$1 = (function (){var statearr_27962 = state_27957;
(statearr_27962[(9)] = inst_27925__$1);

return statearr_27962;
})();
if(inst_27927){
var statearr_27963_27988 = state_27957__$1;
(statearr_27963_27988[(1)] = (5));

} else {
var statearr_27964_27989 = state_27957__$1;
(statearr_27964_27989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (15))){
var inst_27947 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27965_27990 = state_27957__$1;
(statearr_27965_27990[(2)] = inst_27947);

(statearr_27965_27990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (13))){
var state_27957__$1 = state_27957;
var statearr_27966_27991 = state_27957__$1;
(statearr_27966_27991[(2)] = null);

(statearr_27966_27991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (6))){
var inst_27922 = (state_27957[(8)]);
var inst_27943 = (inst_27922 > (0));
var state_27957__$1 = state_27957;
if(cljs.core.truth_(inst_27943)){
var statearr_27967_27992 = state_27957__$1;
(statearr_27967_27992[(1)] = (12));

} else {
var statearr_27968_27993 = state_27957__$1;
(statearr_27968_27993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (3))){
var inst_27955 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27957__$1,inst_27955);
} else {
if((state_val_27958 === (12))){
var inst_27921 = (state_27957[(7)]);
var inst_27945 = cljs.core.vec.call(null,inst_27921);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27957__$1,(15),out,inst_27945);
} else {
if((state_val_27958 === (2))){
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27957__$1,(4),ch);
} else {
if((state_val_27958 === (11))){
var inst_27937 = (state_27957[(2)]);
var inst_27938 = (new Array(n));
var inst_27921 = inst_27938;
var inst_27922 = (0);
var state_27957__$1 = (function (){var statearr_27969 = state_27957;
(statearr_27969[(7)] = inst_27921);

(statearr_27969[(8)] = inst_27922);

(statearr_27969[(10)] = inst_27937);

return statearr_27969;
})();
var statearr_27970_27994 = state_27957__$1;
(statearr_27970_27994[(2)] = null);

(statearr_27970_27994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (9))){
var inst_27921 = (state_27957[(7)]);
var inst_27935 = cljs.core.vec.call(null,inst_27921);
var state_27957__$1 = state_27957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27957__$1,(11),out,inst_27935);
} else {
if((state_val_27958 === (5))){
var inst_27921 = (state_27957[(7)]);
var inst_27922 = (state_27957[(8)]);
var inst_27925 = (state_27957[(9)]);
var inst_27930 = (state_27957[(11)]);
var inst_27929 = (inst_27921[inst_27922] = inst_27925);
var inst_27930__$1 = (inst_27922 + (1));
var inst_27931 = (inst_27930__$1 < n);
var state_27957__$1 = (function (){var statearr_27971 = state_27957;
(statearr_27971[(12)] = inst_27929);

(statearr_27971[(11)] = inst_27930__$1);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27931)){
var statearr_27972_27995 = state_27957__$1;
(statearr_27972_27995[(1)] = (8));

} else {
var statearr_27973_27996 = state_27957__$1;
(statearr_27973_27996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (14))){
var inst_27950 = (state_27957[(2)]);
var inst_27951 = cljs.core.async.close_BANG_.call(null,out);
var state_27957__$1 = (function (){var statearr_27975 = state_27957;
(statearr_27975[(13)] = inst_27950);

return statearr_27975;
})();
var statearr_27976_27997 = state_27957__$1;
(statearr_27976_27997[(2)] = inst_27951);

(statearr_27976_27997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (10))){
var inst_27941 = (state_27957[(2)]);
var state_27957__$1 = state_27957;
var statearr_27977_27998 = state_27957__$1;
(statearr_27977_27998[(2)] = inst_27941);

(statearr_27977_27998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27958 === (8))){
var inst_27921 = (state_27957[(7)]);
var inst_27930 = (state_27957[(11)]);
var tmp27974 = inst_27921;
var inst_27921__$1 = tmp27974;
var inst_27922 = inst_27930;
var state_27957__$1 = (function (){var statearr_27978 = state_27957;
(statearr_27978[(7)] = inst_27921__$1);

(statearr_27978[(8)] = inst_27922);

return statearr_27978;
})();
var statearr_27979_27999 = state_27957__$1;
(statearr_27979_27999[(2)] = null);

(statearr_27979_27999[(1)] = (2));


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
});})(c__26169__auto___27985,out))
;
return ((function (switch__25648__auto__,c__26169__auto___27985,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_27980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_27957){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_27957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e27981){if((e27981 instanceof Object)){
var ex__25652__auto__ = e27981;
var statearr_27982_28000 = state_27957;
(statearr_27982_28000[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28001 = state_27957;
state_27957 = G__28001;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_27957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_27957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___27985,out))
})();
var state__26171__auto__ = (function (){var statearr_27983 = f__26170__auto__.call(null);
(statearr_27983[(6)] = c__26169__auto___27985);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___27985,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28003 = arguments.length;
switch (G__28003) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26169__auto___28073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26169__auto___28073,out){
return (function (){
var f__26170__auto__ = (function (){var switch__25648__auto__ = ((function (c__26169__auto___28073,out){
return (function (state_28045){
var state_val_28046 = (state_28045[(1)]);
if((state_val_28046 === (7))){
var inst_28041 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28047_28074 = state_28045__$1;
(statearr_28047_28074[(2)] = inst_28041);

(statearr_28047_28074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (1))){
var inst_28004 = [];
var inst_28005 = inst_28004;
var inst_28006 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28045__$1 = (function (){var statearr_28048 = state_28045;
(statearr_28048[(7)] = inst_28006);

(statearr_28048[(8)] = inst_28005);

return statearr_28048;
})();
var statearr_28049_28075 = state_28045__$1;
(statearr_28049_28075[(2)] = null);

(statearr_28049_28075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (4))){
var inst_28009 = (state_28045[(9)]);
var inst_28009__$1 = (state_28045[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var inst_28011 = cljs.core.not.call(null,inst_28010);
var state_28045__$1 = (function (){var statearr_28050 = state_28045;
(statearr_28050[(9)] = inst_28009__$1);

return statearr_28050;
})();
if(inst_28011){
var statearr_28051_28076 = state_28045__$1;
(statearr_28051_28076[(1)] = (5));

} else {
var statearr_28052_28077 = state_28045__$1;
(statearr_28052_28077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (15))){
var inst_28035 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28053_28078 = state_28045__$1;
(statearr_28053_28078[(2)] = inst_28035);

(statearr_28053_28078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (13))){
var state_28045__$1 = state_28045;
var statearr_28054_28079 = state_28045__$1;
(statearr_28054_28079[(2)] = null);

(statearr_28054_28079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (6))){
var inst_28005 = (state_28045[(8)]);
var inst_28030 = inst_28005.length;
var inst_28031 = (inst_28030 > (0));
var state_28045__$1 = state_28045;
if(cljs.core.truth_(inst_28031)){
var statearr_28055_28080 = state_28045__$1;
(statearr_28055_28080[(1)] = (12));

} else {
var statearr_28056_28081 = state_28045__$1;
(statearr_28056_28081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (3))){
var inst_28043 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28045__$1,inst_28043);
} else {
if((state_val_28046 === (12))){
var inst_28005 = (state_28045[(8)]);
var inst_28033 = cljs.core.vec.call(null,inst_28005);
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28045__$1,(15),out,inst_28033);
} else {
if((state_val_28046 === (2))){
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28045__$1,(4),ch);
} else {
if((state_val_28046 === (11))){
var inst_28009 = (state_28045[(9)]);
var inst_28013 = (state_28045[(10)]);
var inst_28023 = (state_28045[(2)]);
var inst_28024 = [];
var inst_28025 = inst_28024.push(inst_28009);
var inst_28005 = inst_28024;
var inst_28006 = inst_28013;
var state_28045__$1 = (function (){var statearr_28057 = state_28045;
(statearr_28057[(7)] = inst_28006);

(statearr_28057[(11)] = inst_28025);

(statearr_28057[(12)] = inst_28023);

(statearr_28057[(8)] = inst_28005);

return statearr_28057;
})();
var statearr_28058_28082 = state_28045__$1;
(statearr_28058_28082[(2)] = null);

(statearr_28058_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (9))){
var inst_28005 = (state_28045[(8)]);
var inst_28021 = cljs.core.vec.call(null,inst_28005);
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28045__$1,(11),out,inst_28021);
} else {
if((state_val_28046 === (5))){
var inst_28006 = (state_28045[(7)]);
var inst_28009 = (state_28045[(9)]);
var inst_28013 = (state_28045[(10)]);
var inst_28013__$1 = f.call(null,inst_28009);
var inst_28014 = cljs.core._EQ_.call(null,inst_28013__$1,inst_28006);
var inst_28015 = cljs.core.keyword_identical_QMARK_.call(null,inst_28006,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28016 = ((inst_28014) || (inst_28015));
var state_28045__$1 = (function (){var statearr_28059 = state_28045;
(statearr_28059[(10)] = inst_28013__$1);

return statearr_28059;
})();
if(cljs.core.truth_(inst_28016)){
var statearr_28060_28083 = state_28045__$1;
(statearr_28060_28083[(1)] = (8));

} else {
var statearr_28061_28084 = state_28045__$1;
(statearr_28061_28084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (14))){
var inst_28038 = (state_28045[(2)]);
var inst_28039 = cljs.core.async.close_BANG_.call(null,out);
var state_28045__$1 = (function (){var statearr_28063 = state_28045;
(statearr_28063[(13)] = inst_28038);

return statearr_28063;
})();
var statearr_28064_28085 = state_28045__$1;
(statearr_28064_28085[(2)] = inst_28039);

(statearr_28064_28085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (10))){
var inst_28028 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28065_28086 = state_28045__$1;
(statearr_28065_28086[(2)] = inst_28028);

(statearr_28065_28086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (8))){
var inst_28009 = (state_28045[(9)]);
var inst_28005 = (state_28045[(8)]);
var inst_28013 = (state_28045[(10)]);
var inst_28018 = inst_28005.push(inst_28009);
var tmp28062 = inst_28005;
var inst_28005__$1 = tmp28062;
var inst_28006 = inst_28013;
var state_28045__$1 = (function (){var statearr_28066 = state_28045;
(statearr_28066[(7)] = inst_28006);

(statearr_28066[(14)] = inst_28018);

(statearr_28066[(8)] = inst_28005__$1);

return statearr_28066;
})();
var statearr_28067_28087 = state_28045__$1;
(statearr_28067_28087[(2)] = null);

(statearr_28067_28087[(1)] = (2));


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
});})(c__26169__auto___28073,out))
;
return ((function (switch__25648__auto__,c__26169__auto___28073,out){
return (function() {
var cljs$core$async$state_machine__25649__auto__ = null;
var cljs$core$async$state_machine__25649__auto____0 = (function (){
var statearr_28068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28068[(0)] = cljs$core$async$state_machine__25649__auto__);

(statearr_28068[(1)] = (1));

return statearr_28068;
});
var cljs$core$async$state_machine__25649__auto____1 = (function (state_28045){
while(true){
var ret_value__25650__auto__ = (function (){try{while(true){
var result__25651__auto__ = switch__25648__auto__.call(null,state_28045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25651__auto__;
}
break;
}
}catch (e28069){if((e28069 instanceof Object)){
var ex__25652__auto__ = e28069;
var statearr_28070_28088 = state_28045;
(statearr_28070_28088[(5)] = ex__25652__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28089 = state_28045;
state_28045 = G__28089;
continue;
} else {
return ret_value__25650__auto__;
}
break;
}
});
cljs$core$async$state_machine__25649__auto__ = function(state_28045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25649__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25649__auto____1.call(this,state_28045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25649__auto____0;
cljs$core$async$state_machine__25649__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25649__auto____1;
return cljs$core$async$state_machine__25649__auto__;
})()
;})(switch__25648__auto__,c__26169__auto___28073,out))
})();
var state__26171__auto__ = (function (){var statearr_28071 = f__26170__auto__.call(null);
(statearr_28071[(6)] = c__26169__auto___28073);

return statearr_28071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26171__auto__);
});})(c__26169__auto___28073,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1531486661609
