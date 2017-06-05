// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8122 = [];
var len__5746__auto___8128 = arguments.length;
var i__5747__auto___8129 = (0);
while(true){
if((i__5747__auto___8129 < len__5746__auto___8128)){
args8122.push((arguments[i__5747__auto___8129]));

var G__8130 = (i__5747__auto___8129 + (1));
i__5747__auto___8129 = G__8130;
continue;
} else {
}
break;
}

var G__8124 = args8122.length;
switch (G__8124) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8122.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8125 = (function (f,blockable,meta8126){
this.f = f;
this.blockable = blockable;
this.meta8126 = meta8126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8127,meta8126__$1){
var self__ = this;
var _8127__$1 = this;
return (new cljs.core.async.t_cljs$core$async8125(self__.f,self__.blockable,meta8126__$1));
});

cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8127){
var self__ = this;
var _8127__$1 = this;
return self__.meta8126;
});

cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8126","meta8126",179290512,null)], null);
});

cljs.core.async.t_cljs$core$async8125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8125";

cljs.core.async.t_cljs$core$async8125.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async8125");
});

cljs.core.async.__GT_t_cljs$core$async8125 = (function cljs$core$async$__GT_t_cljs$core$async8125(f__$1,blockable__$1,meta8126){
return (new cljs.core.async.t_cljs$core$async8125(f__$1,blockable__$1,meta8126));
});

}

return (new cljs.core.async.t_cljs$core$async8125(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args8134 = [];
var len__5746__auto___8137 = arguments.length;
var i__5747__auto___8138 = (0);
while(true){
if((i__5747__auto___8138 < len__5746__auto___8137)){
args8134.push((arguments[i__5747__auto___8138]));

var G__8139 = (i__5747__auto___8138 + (1));
i__5747__auto___8138 = G__8139;
continue;
} else {
}
break;
}

var G__8136 = args8134.length;
switch (G__8136) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8134.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args8141 = [];
var len__5746__auto___8144 = arguments.length;
var i__5747__auto___8145 = (0);
while(true){
if((i__5747__auto___8145 < len__5746__auto___8144)){
args8141.push((arguments[i__5747__auto___8145]));

var G__8146 = (i__5747__auto___8145 + (1));
i__5747__auto___8145 = G__8146;
continue;
} else {
}
break;
}

var G__8143 = args8141.length;
switch (G__8143) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8141.length)].join('')));

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
var args8148 = [];
var len__5746__auto___8151 = arguments.length;
var i__5747__auto___8152 = (0);
while(true){
if((i__5747__auto___8152 < len__5746__auto___8151)){
args8148.push((arguments[i__5747__auto___8152]));

var G__8153 = (i__5747__auto___8152 + (1));
i__5747__auto___8152 = G__8153;
continue;
} else {
}
break;
}

var G__8150 = args8148.length;
switch (G__8150) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8148.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8155 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8155);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8155,ret){
return (function (){
return fn1.call(null,val_8155);
});})(val_8155,ret))
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
var args8156 = [];
var len__5746__auto___8159 = arguments.length;
var i__5747__auto___8160 = (0);
while(true){
if((i__5747__auto___8160 < len__5746__auto___8159)){
args8156.push((arguments[i__5747__auto___8160]));

var G__8161 = (i__5747__auto___8160 + (1));
i__5747__auto___8160 = G__8161;
continue;
} else {
}
break;
}

var G__8158 = args8156.length;
switch (G__8158) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8156.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__5591__auto___8163 = n;
var x_8164 = (0);
while(true){
if((x_8164 < n__5591__auto___8163)){
(a[x_8164] = (0));

var G__8165 = (x_8164 + (1));
x_8164 = G__8165;
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

var G__8166 = (i + (1));
i = G__8166;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8170 = (function (alt_flag,flag,meta8171){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8171 = meta8171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8172,meta8171__$1){
var self__ = this;
var _8172__$1 = this;
return (new cljs.core.async.t_cljs$core$async8170(self__.alt_flag,self__.flag,meta8171__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8172){
var self__ = this;
var _8172__$1 = this;
return self__.meta8171;
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8171","meta8171",-369654523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8170";

cljs.core.async.t_cljs$core$async8170.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async8170");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8170 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8170(alt_flag__$1,flag__$1,meta8171){
return (new cljs.core.async.t_cljs$core$async8170(alt_flag__$1,flag__$1,meta8171));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8170(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8176 = (function (alt_handler,flag,cb,meta8177){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8177 = meta8177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8178,meta8177__$1){
var self__ = this;
var _8178__$1 = this;
return (new cljs.core.async.t_cljs$core$async8176(self__.alt_handler,self__.flag,self__.cb,meta8177__$1));
});

cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8178){
var self__ = this;
var _8178__$1 = this;
return self__.meta8177;
});

cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8177","meta8177",-854907083,null)], null);
});

cljs.core.async.t_cljs$core$async8176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8176";

cljs.core.async.t_cljs$core$async8176.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async8176");
});

cljs.core.async.__GT_t_cljs$core$async8176 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8176(alt_handler__$1,flag__$1,cb__$1,meta8177){
return (new cljs.core.async.t_cljs$core$async8176(alt_handler__$1,flag__$1,cb__$1,meta8177));
});

}

return (new cljs.core.async.t_cljs$core$async8176(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8179_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8179_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8180_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8180_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4688__auto__ = wport;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8181 = (i + (1));
i = G__8181;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4688__auto__ = ret;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4676__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4676__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4676__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__5753__auto__ = [];
var len__5746__auto___8187 = arguments.length;
var i__5747__auto___8188 = (0);
while(true){
if((i__5747__auto___8188 < len__5746__auto___8187)){
args__5753__auto__.push((arguments[i__5747__auto___8188]));

var G__8189 = (i__5747__auto___8188 + (1));
i__5747__auto___8188 = G__8189;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8184){
var map__8185 = p__8184;
var map__8185__$1 = ((((!((map__8185 == null)))?((((map__8185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8185):map__8185);
var opts = map__8185__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8182){
var G__8183 = cljs.core.first.call(null,seq8182);
var seq8182__$1 = cljs.core.next.call(null,seq8182);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8183,seq8182__$1);
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
var args8190 = [];
var len__5746__auto___8240 = arguments.length;
var i__5747__auto___8241 = (0);
while(true){
if((i__5747__auto___8241 < len__5746__auto___8240)){
args8190.push((arguments[i__5747__auto___8241]));

var G__8242 = (i__5747__auto___8241 + (1));
i__5747__auto___8241 = G__8242;
continue;
} else {
}
break;
}

var G__8192 = args8190.length;
switch (G__8192) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8190.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8077__auto___8244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___8244){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___8244){
return (function (state_8216){
var state_val_8217 = (state_8216[(1)]);
if((state_val_8217 === (7))){
var inst_8212 = (state_8216[(2)]);
var state_8216__$1 = state_8216;
var statearr_8218_8245 = state_8216__$1;
(statearr_8218_8245[(2)] = inst_8212);

(statearr_8218_8245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (1))){
var state_8216__$1 = state_8216;
var statearr_8219_8246 = state_8216__$1;
(statearr_8219_8246[(2)] = null);

(statearr_8219_8246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (4))){
var inst_8195 = (state_8216[(7)]);
var inst_8195__$1 = (state_8216[(2)]);
var inst_8196 = (inst_8195__$1 == null);
var state_8216__$1 = (function (){var statearr_8220 = state_8216;
(statearr_8220[(7)] = inst_8195__$1);

return statearr_8220;
})();
if(cljs.core.truth_(inst_8196)){
var statearr_8221_8247 = state_8216__$1;
(statearr_8221_8247[(1)] = (5));

} else {
var statearr_8222_8248 = state_8216__$1;
(statearr_8222_8248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (13))){
var state_8216__$1 = state_8216;
var statearr_8223_8249 = state_8216__$1;
(statearr_8223_8249[(2)] = null);

(statearr_8223_8249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (6))){
var inst_8195 = (state_8216[(7)]);
var state_8216__$1 = state_8216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8216__$1,(11),to,inst_8195);
} else {
if((state_val_8217 === (3))){
var inst_8214 = (state_8216[(2)]);
var state_8216__$1 = state_8216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8216__$1,inst_8214);
} else {
if((state_val_8217 === (12))){
var state_8216__$1 = state_8216;
var statearr_8224_8250 = state_8216__$1;
(statearr_8224_8250[(2)] = null);

(statearr_8224_8250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (2))){
var state_8216__$1 = state_8216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8216__$1,(4),from);
} else {
if((state_val_8217 === (11))){
var inst_8205 = (state_8216[(2)]);
var state_8216__$1 = state_8216;
if(cljs.core.truth_(inst_8205)){
var statearr_8225_8251 = state_8216__$1;
(statearr_8225_8251[(1)] = (12));

} else {
var statearr_8226_8252 = state_8216__$1;
(statearr_8226_8252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (9))){
var state_8216__$1 = state_8216;
var statearr_8227_8253 = state_8216__$1;
(statearr_8227_8253[(2)] = null);

(statearr_8227_8253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (5))){
var state_8216__$1 = state_8216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8228_8254 = state_8216__$1;
(statearr_8228_8254[(1)] = (8));

} else {
var statearr_8229_8255 = state_8216__$1;
(statearr_8229_8255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (14))){
var inst_8210 = (state_8216[(2)]);
var state_8216__$1 = state_8216;
var statearr_8230_8256 = state_8216__$1;
(statearr_8230_8256[(2)] = inst_8210);

(statearr_8230_8256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (10))){
var inst_8202 = (state_8216[(2)]);
var state_8216__$1 = state_8216;
var statearr_8231_8257 = state_8216__$1;
(statearr_8231_8257[(2)] = inst_8202);

(statearr_8231_8257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8217 === (8))){
var inst_8199 = cljs.core.async.close_BANG_.call(null,to);
var state_8216__$1 = state_8216;
var statearr_8232_8258 = state_8216__$1;
(statearr_8232_8258[(2)] = inst_8199);

(statearr_8232_8258[(1)] = (10));


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
});})(c__8077__auto___8244))
;
return ((function (switch__7965__auto__,c__8077__auto___8244){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_8236 = [null,null,null,null,null,null,null,null];
(statearr_8236[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_8236[(1)] = (1));

return statearr_8236;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_8216){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8237){if((e8237 instanceof Object)){
var ex__7969__auto__ = e8237;
var statearr_8238_8259 = state_8216;
(statearr_8238_8259[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8260 = state_8216;
state_8216 = G__8260;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_8216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_8216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___8244))
})();
var state__8079__auto__ = (function (){var statearr_8239 = f__8078__auto__.call(null);
(statearr_8239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8244);

return statearr_8239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___8244))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__8444){
var vec__8445 = p__8444;
var v = cljs.core.nth.call(null,vec__8445,(0),null);
var p = cljs.core.nth.call(null,vec__8445,(1),null);
var job = vec__8445;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8077__auto___8627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results){
return (function (state_8450){
var state_val_8451 = (state_8450[(1)]);
if((state_val_8451 === (1))){
var state_8450__$1 = state_8450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8450__$1,(2),res,v);
} else {
if((state_val_8451 === (2))){
var inst_8447 = (state_8450[(2)]);
var inst_8448 = cljs.core.async.close_BANG_.call(null,res);
var state_8450__$1 = (function (){var statearr_8452 = state_8450;
(statearr_8452[(7)] = inst_8447);

return statearr_8452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8450__$1,inst_8448);
} else {
return null;
}
}
});})(c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results))
;
return ((function (switch__7965__auto__,c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_8456 = [null,null,null,null,null,null,null,null];
(statearr_8456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__);

(statearr_8456[(1)] = (1));

return statearr_8456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1 = (function (state_8450){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8457){if((e8457 instanceof Object)){
var ex__7969__auto__ = e8457;
var statearr_8458_8628 = state_8450;
(statearr_8458_8628[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8629 = state_8450;
state_8450 = G__8629;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = function(state_8450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1.call(this,state_8450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results))
})();
var state__8079__auto__ = (function (){var statearr_8459 = f__8078__auto__.call(null);
(statearr_8459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8627);

return statearr_8459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___8627,res,vec__8445,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8460){
var vec__8461 = p__8460;
var v = cljs.core.nth.call(null,vec__8461,(0),null);
var p = cljs.core.nth.call(null,vec__8461,(1),null);
var job = vec__8461;
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
var n__5591__auto___8630 = n;
var __8631 = (0);
while(true){
if((__8631 < n__5591__auto___8630)){
var G__8462_8632 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8462_8632) {
case "compute":
var c__8077__auto___8634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8631,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (__8631,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function (state_8475){
var state_val_8476 = (state_8475[(1)]);
if((state_val_8476 === (1))){
var state_8475__$1 = state_8475;
var statearr_8477_8635 = state_8475__$1;
(statearr_8477_8635[(2)] = null);

(statearr_8477_8635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (2))){
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8475__$1,(4),jobs);
} else {
if((state_val_8476 === (3))){
var inst_8473 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8475__$1,inst_8473);
} else {
if((state_val_8476 === (4))){
var inst_8465 = (state_8475[(2)]);
var inst_8466 = process.call(null,inst_8465);
var state_8475__$1 = state_8475;
if(cljs.core.truth_(inst_8466)){
var statearr_8478_8636 = state_8475__$1;
(statearr_8478_8636[(1)] = (5));

} else {
var statearr_8479_8637 = state_8475__$1;
(statearr_8479_8637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (5))){
var state_8475__$1 = state_8475;
var statearr_8480_8638 = state_8475__$1;
(statearr_8480_8638[(2)] = null);

(statearr_8480_8638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (6))){
var state_8475__$1 = state_8475;
var statearr_8481_8639 = state_8475__$1;
(statearr_8481_8639[(2)] = null);

(statearr_8481_8639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8476 === (7))){
var inst_8471 = (state_8475[(2)]);
var state_8475__$1 = state_8475;
var statearr_8482_8640 = state_8475__$1;
(statearr_8482_8640[(2)] = inst_8471);

(statearr_8482_8640[(1)] = (3));


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
});})(__8631,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
;
return ((function (__8631,switch__7965__auto__,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_8486 = [null,null,null,null,null,null,null];
(statearr_8486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__);

(statearr_8486[(1)] = (1));

return statearr_8486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1 = (function (state_8475){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8487){if((e8487 instanceof Object)){
var ex__7969__auto__ = e8487;
var statearr_8488_8641 = state_8475;
(statearr_8488_8641[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8642 = state_8475;
state_8475 = G__8642;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = function(state_8475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1.call(this,state_8475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__;
})()
;})(__8631,switch__7965__auto__,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
})();
var state__8079__auto__ = (function (){var statearr_8489 = f__8078__auto__.call(null);
(statearr_8489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8634);

return statearr_8489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(__8631,c__8077__auto___8634,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
);


break;
case "async":
var c__8077__auto___8643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__8631,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (__8631,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function (state_8502){
var state_val_8503 = (state_8502[(1)]);
if((state_val_8503 === (1))){
var state_8502__$1 = state_8502;
var statearr_8504_8644 = state_8502__$1;
(statearr_8504_8644[(2)] = null);

(statearr_8504_8644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8503 === (2))){
var state_8502__$1 = state_8502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8502__$1,(4),jobs);
} else {
if((state_val_8503 === (3))){
var inst_8500 = (state_8502[(2)]);
var state_8502__$1 = state_8502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8502__$1,inst_8500);
} else {
if((state_val_8503 === (4))){
var inst_8492 = (state_8502[(2)]);
var inst_8493 = async.call(null,inst_8492);
var state_8502__$1 = state_8502;
if(cljs.core.truth_(inst_8493)){
var statearr_8505_8645 = state_8502__$1;
(statearr_8505_8645[(1)] = (5));

} else {
var statearr_8506_8646 = state_8502__$1;
(statearr_8506_8646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8503 === (5))){
var state_8502__$1 = state_8502;
var statearr_8507_8647 = state_8502__$1;
(statearr_8507_8647[(2)] = null);

(statearr_8507_8647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8503 === (6))){
var state_8502__$1 = state_8502;
var statearr_8508_8648 = state_8502__$1;
(statearr_8508_8648[(2)] = null);

(statearr_8508_8648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8503 === (7))){
var inst_8498 = (state_8502[(2)]);
var state_8502__$1 = state_8502;
var statearr_8509_8649 = state_8502__$1;
(statearr_8509_8649[(2)] = inst_8498);

(statearr_8509_8649[(1)] = (3));


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
});})(__8631,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
;
return ((function (__8631,switch__7965__auto__,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_8513 = [null,null,null,null,null,null,null];
(statearr_8513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__);

(statearr_8513[(1)] = (1));

return statearr_8513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1 = (function (state_8502){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8514){if((e8514 instanceof Object)){
var ex__7969__auto__ = e8514;
var statearr_8515_8650 = state_8502;
(statearr_8515_8650[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8651 = state_8502;
state_8502 = G__8651;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = function(state_8502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1.call(this,state_8502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__;
})()
;})(__8631,switch__7965__auto__,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
})();
var state__8079__auto__ = (function (){var statearr_8516 = f__8078__auto__.call(null);
(statearr_8516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8643);

return statearr_8516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(__8631,c__8077__auto___8643,G__8462_8632,n__5591__auto___8630,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__8652 = (__8631 + (1));
__8631 = G__8652;
continue;
} else {
}
break;
}

var c__8077__auto___8653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___8653,jobs,results,process,async){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___8653,jobs,results,process,async){
return (function (state_8538){
var state_val_8539 = (state_8538[(1)]);
if((state_val_8539 === (1))){
var state_8538__$1 = state_8538;
var statearr_8540_8654 = state_8538__$1;
(statearr_8540_8654[(2)] = null);

(statearr_8540_8654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (2))){
var state_8538__$1 = state_8538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8538__$1,(4),from);
} else {
if((state_val_8539 === (3))){
var inst_8536 = (state_8538[(2)]);
var state_8538__$1 = state_8538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8538__$1,inst_8536);
} else {
if((state_val_8539 === (4))){
var inst_8519 = (state_8538[(7)]);
var inst_8519__$1 = (state_8538[(2)]);
var inst_8520 = (inst_8519__$1 == null);
var state_8538__$1 = (function (){var statearr_8541 = state_8538;
(statearr_8541[(7)] = inst_8519__$1);

return statearr_8541;
})();
if(cljs.core.truth_(inst_8520)){
var statearr_8542_8655 = state_8538__$1;
(statearr_8542_8655[(1)] = (5));

} else {
var statearr_8543_8656 = state_8538__$1;
(statearr_8543_8656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (5))){
var inst_8522 = cljs.core.async.close_BANG_.call(null,jobs);
var state_8538__$1 = state_8538;
var statearr_8544_8657 = state_8538__$1;
(statearr_8544_8657[(2)] = inst_8522);

(statearr_8544_8657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (6))){
var inst_8519 = (state_8538[(7)]);
var inst_8524 = (state_8538[(8)]);
var inst_8524__$1 = cljs.core.async.chan.call(null,(1));
var inst_8525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8526 = [inst_8519,inst_8524__$1];
var inst_8527 = (new cljs.core.PersistentVector(null,2,(5),inst_8525,inst_8526,null));
var state_8538__$1 = (function (){var statearr_8545 = state_8538;
(statearr_8545[(8)] = inst_8524__$1);

return statearr_8545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8538__$1,(8),jobs,inst_8527);
} else {
if((state_val_8539 === (7))){
var inst_8534 = (state_8538[(2)]);
var state_8538__$1 = state_8538;
var statearr_8546_8658 = state_8538__$1;
(statearr_8546_8658[(2)] = inst_8534);

(statearr_8546_8658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8539 === (8))){
var inst_8524 = (state_8538[(8)]);
var inst_8529 = (state_8538[(2)]);
var state_8538__$1 = (function (){var statearr_8547 = state_8538;
(statearr_8547[(9)] = inst_8529);

return statearr_8547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8538__$1,(9),results,inst_8524);
} else {
if((state_val_8539 === (9))){
var inst_8531 = (state_8538[(2)]);
var state_8538__$1 = (function (){var statearr_8548 = state_8538;
(statearr_8548[(10)] = inst_8531);

return statearr_8548;
})();
var statearr_8549_8659 = state_8538__$1;
(statearr_8549_8659[(2)] = null);

(statearr_8549_8659[(1)] = (2));


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
});})(c__8077__auto___8653,jobs,results,process,async))
;
return ((function (switch__7965__auto__,c__8077__auto___8653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_8553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__);

(statearr_8553[(1)] = (1));

return statearr_8553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1 = (function (state_8538){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8554){if((e8554 instanceof Object)){
var ex__7969__auto__ = e8554;
var statearr_8555_8660 = state_8538;
(statearr_8555_8660[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8661 = state_8538;
state_8538 = G__8661;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = function(state_8538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1.call(this,state_8538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___8653,jobs,results,process,async))
})();
var state__8079__auto__ = (function (){var statearr_8556 = f__8078__auto__.call(null);
(statearr_8556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8653);

return statearr_8556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___8653,jobs,results,process,async))
);


var c__8077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto__,jobs,results,process,async){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto__,jobs,results,process,async){
return (function (state_8594){
var state_val_8595 = (state_8594[(1)]);
if((state_val_8595 === (7))){
var inst_8590 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
var statearr_8596_8662 = state_8594__$1;
(statearr_8596_8662[(2)] = inst_8590);

(statearr_8596_8662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (20))){
var state_8594__$1 = state_8594;
var statearr_8597_8663 = state_8594__$1;
(statearr_8597_8663[(2)] = null);

(statearr_8597_8663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (1))){
var state_8594__$1 = state_8594;
var statearr_8598_8664 = state_8594__$1;
(statearr_8598_8664[(2)] = null);

(statearr_8598_8664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (4))){
var inst_8559 = (state_8594[(7)]);
var inst_8559__$1 = (state_8594[(2)]);
var inst_8560 = (inst_8559__$1 == null);
var state_8594__$1 = (function (){var statearr_8599 = state_8594;
(statearr_8599[(7)] = inst_8559__$1);

return statearr_8599;
})();
if(cljs.core.truth_(inst_8560)){
var statearr_8600_8665 = state_8594__$1;
(statearr_8600_8665[(1)] = (5));

} else {
var statearr_8601_8666 = state_8594__$1;
(statearr_8601_8666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (15))){
var inst_8572 = (state_8594[(8)]);
var state_8594__$1 = state_8594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8594__$1,(18),to,inst_8572);
} else {
if((state_val_8595 === (21))){
var inst_8585 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
var statearr_8602_8667 = state_8594__$1;
(statearr_8602_8667[(2)] = inst_8585);

(statearr_8602_8667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (13))){
var inst_8587 = (state_8594[(2)]);
var state_8594__$1 = (function (){var statearr_8603 = state_8594;
(statearr_8603[(9)] = inst_8587);

return statearr_8603;
})();
var statearr_8604_8668 = state_8594__$1;
(statearr_8604_8668[(2)] = null);

(statearr_8604_8668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (6))){
var inst_8559 = (state_8594[(7)]);
var state_8594__$1 = state_8594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8594__$1,(11),inst_8559);
} else {
if((state_val_8595 === (17))){
var inst_8580 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
if(cljs.core.truth_(inst_8580)){
var statearr_8605_8669 = state_8594__$1;
(statearr_8605_8669[(1)] = (19));

} else {
var statearr_8606_8670 = state_8594__$1;
(statearr_8606_8670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (3))){
var inst_8592 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8594__$1,inst_8592);
} else {
if((state_val_8595 === (12))){
var inst_8569 = (state_8594[(10)]);
var state_8594__$1 = state_8594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8594__$1,(14),inst_8569);
} else {
if((state_val_8595 === (2))){
var state_8594__$1 = state_8594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8594__$1,(4),results);
} else {
if((state_val_8595 === (19))){
var state_8594__$1 = state_8594;
var statearr_8607_8671 = state_8594__$1;
(statearr_8607_8671[(2)] = null);

(statearr_8607_8671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (11))){
var inst_8569 = (state_8594[(2)]);
var state_8594__$1 = (function (){var statearr_8608 = state_8594;
(statearr_8608[(10)] = inst_8569);

return statearr_8608;
})();
var statearr_8609_8672 = state_8594__$1;
(statearr_8609_8672[(2)] = null);

(statearr_8609_8672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (9))){
var state_8594__$1 = state_8594;
var statearr_8610_8673 = state_8594__$1;
(statearr_8610_8673[(2)] = null);

(statearr_8610_8673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (5))){
var state_8594__$1 = state_8594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8611_8674 = state_8594__$1;
(statearr_8611_8674[(1)] = (8));

} else {
var statearr_8612_8675 = state_8594__$1;
(statearr_8612_8675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (14))){
var inst_8574 = (state_8594[(11)]);
var inst_8572 = (state_8594[(8)]);
var inst_8572__$1 = (state_8594[(2)]);
var inst_8573 = (inst_8572__$1 == null);
var inst_8574__$1 = cljs.core.not.call(null,inst_8573);
var state_8594__$1 = (function (){var statearr_8613 = state_8594;
(statearr_8613[(11)] = inst_8574__$1);

(statearr_8613[(8)] = inst_8572__$1);

return statearr_8613;
})();
if(inst_8574__$1){
var statearr_8614_8676 = state_8594__$1;
(statearr_8614_8676[(1)] = (15));

} else {
var statearr_8615_8677 = state_8594__$1;
(statearr_8615_8677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (16))){
var inst_8574 = (state_8594[(11)]);
var state_8594__$1 = state_8594;
var statearr_8616_8678 = state_8594__$1;
(statearr_8616_8678[(2)] = inst_8574);

(statearr_8616_8678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (10))){
var inst_8566 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
var statearr_8617_8679 = state_8594__$1;
(statearr_8617_8679[(2)] = inst_8566);

(statearr_8617_8679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (18))){
var inst_8577 = (state_8594[(2)]);
var state_8594__$1 = state_8594;
var statearr_8618_8680 = state_8594__$1;
(statearr_8618_8680[(2)] = inst_8577);

(statearr_8618_8680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8595 === (8))){
var inst_8563 = cljs.core.async.close_BANG_.call(null,to);
var state_8594__$1 = state_8594;
var statearr_8619_8681 = state_8594__$1;
(statearr_8619_8681[(2)] = inst_8563);

(statearr_8619_8681[(1)] = (10));


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
});})(c__8077__auto__,jobs,results,process,async))
;
return ((function (switch__7965__auto__,c__8077__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_8623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__);

(statearr_8623[(1)] = (1));

return statearr_8623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1 = (function (state_8594){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8624){if((e8624 instanceof Object)){
var ex__7969__auto__ = e8624;
var statearr_8625_8682 = state_8594;
(statearr_8625_8682[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8683 = state_8594;
state_8594 = G__8683;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__ = function(state_8594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1.call(this,state_8594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto__,jobs,results,process,async))
})();
var state__8079__auto__ = (function (){var statearr_8626 = f__8078__auto__.call(null);
(statearr_8626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto__);

return statearr_8626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto__,jobs,results,process,async))
);

return c__8077__auto__;
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
var args8684 = [];
var len__5746__auto___8687 = arguments.length;
var i__5747__auto___8688 = (0);
while(true){
if((i__5747__auto___8688 < len__5746__auto___8687)){
args8684.push((arguments[i__5747__auto___8688]));

var G__8689 = (i__5747__auto___8688 + (1));
i__5747__auto___8688 = G__8689;
continue;
} else {
}
break;
}

var G__8686 = args8684.length;
switch (G__8686) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8684.length)].join('')));

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
var args8691 = [];
var len__5746__auto___8694 = arguments.length;
var i__5747__auto___8695 = (0);
while(true){
if((i__5747__auto___8695 < len__5746__auto___8694)){
args8691.push((arguments[i__5747__auto___8695]));

var G__8696 = (i__5747__auto___8695 + (1));
i__5747__auto___8695 = G__8696;
continue;
} else {
}
break;
}

var G__8693 = args8691.length;
switch (G__8693) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8691.length)].join('')));

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
var args8698 = [];
var len__5746__auto___8751 = arguments.length;
var i__5747__auto___8752 = (0);
while(true){
if((i__5747__auto___8752 < len__5746__auto___8751)){
args8698.push((arguments[i__5747__auto___8752]));

var G__8753 = (i__5747__auto___8752 + (1));
i__5747__auto___8752 = G__8753;
continue;
} else {
}
break;
}

var G__8700 = args8698.length;
switch (G__8700) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8698.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8077__auto___8755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___8755,tc,fc){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___8755,tc,fc){
return (function (state_8726){
var state_val_8727 = (state_8726[(1)]);
if((state_val_8727 === (7))){
var inst_8722 = (state_8726[(2)]);
var state_8726__$1 = state_8726;
var statearr_8728_8756 = state_8726__$1;
(statearr_8728_8756[(2)] = inst_8722);

(statearr_8728_8756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (1))){
var state_8726__$1 = state_8726;
var statearr_8729_8757 = state_8726__$1;
(statearr_8729_8757[(2)] = null);

(statearr_8729_8757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (4))){
var inst_8703 = (state_8726[(7)]);
var inst_8703__$1 = (state_8726[(2)]);
var inst_8704 = (inst_8703__$1 == null);
var state_8726__$1 = (function (){var statearr_8730 = state_8726;
(statearr_8730[(7)] = inst_8703__$1);

return statearr_8730;
})();
if(cljs.core.truth_(inst_8704)){
var statearr_8731_8758 = state_8726__$1;
(statearr_8731_8758[(1)] = (5));

} else {
var statearr_8732_8759 = state_8726__$1;
(statearr_8732_8759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (13))){
var state_8726__$1 = state_8726;
var statearr_8733_8760 = state_8726__$1;
(statearr_8733_8760[(2)] = null);

(statearr_8733_8760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (6))){
var inst_8703 = (state_8726[(7)]);
var inst_8709 = p.call(null,inst_8703);
var state_8726__$1 = state_8726;
if(cljs.core.truth_(inst_8709)){
var statearr_8734_8761 = state_8726__$1;
(statearr_8734_8761[(1)] = (9));

} else {
var statearr_8735_8762 = state_8726__$1;
(statearr_8735_8762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (3))){
var inst_8724 = (state_8726[(2)]);
var state_8726__$1 = state_8726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8726__$1,inst_8724);
} else {
if((state_val_8727 === (12))){
var state_8726__$1 = state_8726;
var statearr_8736_8763 = state_8726__$1;
(statearr_8736_8763[(2)] = null);

(statearr_8736_8763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (2))){
var state_8726__$1 = state_8726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8726__$1,(4),ch);
} else {
if((state_val_8727 === (11))){
var inst_8703 = (state_8726[(7)]);
var inst_8713 = (state_8726[(2)]);
var state_8726__$1 = state_8726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8726__$1,(8),inst_8713,inst_8703);
} else {
if((state_val_8727 === (9))){
var state_8726__$1 = state_8726;
var statearr_8737_8764 = state_8726__$1;
(statearr_8737_8764[(2)] = tc);

(statearr_8737_8764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (5))){
var inst_8706 = cljs.core.async.close_BANG_.call(null,tc);
var inst_8707 = cljs.core.async.close_BANG_.call(null,fc);
var state_8726__$1 = (function (){var statearr_8738 = state_8726;
(statearr_8738[(8)] = inst_8706);

return statearr_8738;
})();
var statearr_8739_8765 = state_8726__$1;
(statearr_8739_8765[(2)] = inst_8707);

(statearr_8739_8765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (14))){
var inst_8720 = (state_8726[(2)]);
var state_8726__$1 = state_8726;
var statearr_8740_8766 = state_8726__$1;
(statearr_8740_8766[(2)] = inst_8720);

(statearr_8740_8766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (10))){
var state_8726__$1 = state_8726;
var statearr_8741_8767 = state_8726__$1;
(statearr_8741_8767[(2)] = fc);

(statearr_8741_8767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8727 === (8))){
var inst_8715 = (state_8726[(2)]);
var state_8726__$1 = state_8726;
if(cljs.core.truth_(inst_8715)){
var statearr_8742_8768 = state_8726__$1;
(statearr_8742_8768[(1)] = (12));

} else {
var statearr_8743_8769 = state_8726__$1;
(statearr_8743_8769[(1)] = (13));

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
});})(c__8077__auto___8755,tc,fc))
;
return ((function (switch__7965__auto__,c__8077__auto___8755,tc,fc){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_8747 = [null,null,null,null,null,null,null,null,null];
(statearr_8747[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_8747[(1)] = (1));

return statearr_8747;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_8726){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8748){if((e8748 instanceof Object)){
var ex__7969__auto__ = e8748;
var statearr_8749_8770 = state_8726;
(statearr_8749_8770[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8771 = state_8726;
state_8726 = G__8771;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_8726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_8726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___8755,tc,fc))
})();
var state__8079__auto__ = (function (){var statearr_8750 = f__8078__auto__.call(null);
(statearr_8750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___8755);

return statearr_8750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___8755,tc,fc))
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
var c__8077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto__){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto__){
return (function (state_8835){
var state_val_8836 = (state_8835[(1)]);
if((state_val_8836 === (7))){
var inst_8831 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
var statearr_8837_8858 = state_8835__$1;
(statearr_8837_8858[(2)] = inst_8831);

(statearr_8837_8858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (1))){
var inst_8815 = init;
var state_8835__$1 = (function (){var statearr_8838 = state_8835;
(statearr_8838[(7)] = inst_8815);

return statearr_8838;
})();
var statearr_8839_8859 = state_8835__$1;
(statearr_8839_8859[(2)] = null);

(statearr_8839_8859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (4))){
var inst_8818 = (state_8835[(8)]);
var inst_8818__$1 = (state_8835[(2)]);
var inst_8819 = (inst_8818__$1 == null);
var state_8835__$1 = (function (){var statearr_8840 = state_8835;
(statearr_8840[(8)] = inst_8818__$1);

return statearr_8840;
})();
if(cljs.core.truth_(inst_8819)){
var statearr_8841_8860 = state_8835__$1;
(statearr_8841_8860[(1)] = (5));

} else {
var statearr_8842_8861 = state_8835__$1;
(statearr_8842_8861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (6))){
var inst_8818 = (state_8835[(8)]);
var inst_8815 = (state_8835[(7)]);
var inst_8822 = (state_8835[(9)]);
var inst_8822__$1 = f.call(null,inst_8815,inst_8818);
var inst_8823 = cljs.core.reduced_QMARK_.call(null,inst_8822__$1);
var state_8835__$1 = (function (){var statearr_8843 = state_8835;
(statearr_8843[(9)] = inst_8822__$1);

return statearr_8843;
})();
if(inst_8823){
var statearr_8844_8862 = state_8835__$1;
(statearr_8844_8862[(1)] = (8));

} else {
var statearr_8845_8863 = state_8835__$1;
(statearr_8845_8863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (3))){
var inst_8833 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8835__$1,inst_8833);
} else {
if((state_val_8836 === (2))){
var state_8835__$1 = state_8835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8835__$1,(4),ch);
} else {
if((state_val_8836 === (9))){
var inst_8822 = (state_8835[(9)]);
var inst_8815 = inst_8822;
var state_8835__$1 = (function (){var statearr_8846 = state_8835;
(statearr_8846[(7)] = inst_8815);

return statearr_8846;
})();
var statearr_8847_8864 = state_8835__$1;
(statearr_8847_8864[(2)] = null);

(statearr_8847_8864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (5))){
var inst_8815 = (state_8835[(7)]);
var state_8835__$1 = state_8835;
var statearr_8848_8865 = state_8835__$1;
(statearr_8848_8865[(2)] = inst_8815);

(statearr_8848_8865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (10))){
var inst_8829 = (state_8835[(2)]);
var state_8835__$1 = state_8835;
var statearr_8849_8866 = state_8835__$1;
(statearr_8849_8866[(2)] = inst_8829);

(statearr_8849_8866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8836 === (8))){
var inst_8822 = (state_8835[(9)]);
var inst_8825 = cljs.core.deref.call(null,inst_8822);
var state_8835__$1 = state_8835;
var statearr_8850_8867 = state_8835__$1;
(statearr_8850_8867[(2)] = inst_8825);

(statearr_8850_8867[(1)] = (10));


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
});})(c__8077__auto__))
;
return ((function (switch__7965__auto__,c__8077__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7966__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7966__auto____0 = (function (){
var statearr_8854 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8854[(0)] = cljs$core$async$reduce_$_state_machine__7966__auto__);

(statearr_8854[(1)] = (1));

return statearr_8854;
});
var cljs$core$async$reduce_$_state_machine__7966__auto____1 = (function (state_8835){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8855){if((e8855 instanceof Object)){
var ex__7969__auto__ = e8855;
var statearr_8856_8868 = state_8835;
(statearr_8856_8868[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8869 = state_8835;
state_8835 = G__8869;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7966__auto__ = function(state_8835){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7966__auto____1.call(this,state_8835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7966__auto____0;
cljs$core$async$reduce_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7966__auto____1;
return cljs$core$async$reduce_$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto__))
})();
var state__8079__auto__ = (function (){var statearr_8857 = f__8078__auto__.call(null);
(statearr_8857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto__);

return statearr_8857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto__))
);

return c__8077__auto__;
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
var args8870 = [];
var len__5746__auto___8922 = arguments.length;
var i__5747__auto___8923 = (0);
while(true){
if((i__5747__auto___8923 < len__5746__auto___8922)){
args8870.push((arguments[i__5747__auto___8923]));

var G__8924 = (i__5747__auto___8923 + (1));
i__5747__auto___8923 = G__8924;
continue;
} else {
}
break;
}

var G__8872 = args8870.length;
switch (G__8872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8870.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto__){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto__){
return (function (state_8897){
var state_val_8898 = (state_8897[(1)]);
if((state_val_8898 === (7))){
var inst_8879 = (state_8897[(2)]);
var state_8897__$1 = state_8897;
var statearr_8899_8926 = state_8897__$1;
(statearr_8899_8926[(2)] = inst_8879);

(statearr_8899_8926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (1))){
var inst_8873 = cljs.core.seq.call(null,coll);
var inst_8874 = inst_8873;
var state_8897__$1 = (function (){var statearr_8900 = state_8897;
(statearr_8900[(7)] = inst_8874);

return statearr_8900;
})();
var statearr_8901_8927 = state_8897__$1;
(statearr_8901_8927[(2)] = null);

(statearr_8901_8927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (4))){
var inst_8874 = (state_8897[(7)]);
var inst_8877 = cljs.core.first.call(null,inst_8874);
var state_8897__$1 = state_8897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8897__$1,(7),ch,inst_8877);
} else {
if((state_val_8898 === (13))){
var inst_8891 = (state_8897[(2)]);
var state_8897__$1 = state_8897;
var statearr_8902_8928 = state_8897__$1;
(statearr_8902_8928[(2)] = inst_8891);

(statearr_8902_8928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (6))){
var inst_8882 = (state_8897[(2)]);
var state_8897__$1 = state_8897;
if(cljs.core.truth_(inst_8882)){
var statearr_8903_8929 = state_8897__$1;
(statearr_8903_8929[(1)] = (8));

} else {
var statearr_8904_8930 = state_8897__$1;
(statearr_8904_8930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (3))){
var inst_8895 = (state_8897[(2)]);
var state_8897__$1 = state_8897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8897__$1,inst_8895);
} else {
if((state_val_8898 === (12))){
var state_8897__$1 = state_8897;
var statearr_8905_8931 = state_8897__$1;
(statearr_8905_8931[(2)] = null);

(statearr_8905_8931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (2))){
var inst_8874 = (state_8897[(7)]);
var state_8897__$1 = state_8897;
if(cljs.core.truth_(inst_8874)){
var statearr_8906_8932 = state_8897__$1;
(statearr_8906_8932[(1)] = (4));

} else {
var statearr_8907_8933 = state_8897__$1;
(statearr_8907_8933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (11))){
var inst_8888 = cljs.core.async.close_BANG_.call(null,ch);
var state_8897__$1 = state_8897;
var statearr_8908_8934 = state_8897__$1;
(statearr_8908_8934[(2)] = inst_8888);

(statearr_8908_8934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (9))){
var state_8897__$1 = state_8897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8909_8935 = state_8897__$1;
(statearr_8909_8935[(1)] = (11));

} else {
var statearr_8910_8936 = state_8897__$1;
(statearr_8910_8936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (5))){
var inst_8874 = (state_8897[(7)]);
var state_8897__$1 = state_8897;
var statearr_8911_8937 = state_8897__$1;
(statearr_8911_8937[(2)] = inst_8874);

(statearr_8911_8937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (10))){
var inst_8893 = (state_8897[(2)]);
var state_8897__$1 = state_8897;
var statearr_8912_8938 = state_8897__$1;
(statearr_8912_8938[(2)] = inst_8893);

(statearr_8912_8938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8898 === (8))){
var inst_8874 = (state_8897[(7)]);
var inst_8884 = cljs.core.next.call(null,inst_8874);
var inst_8874__$1 = inst_8884;
var state_8897__$1 = (function (){var statearr_8913 = state_8897;
(statearr_8913[(7)] = inst_8874__$1);

return statearr_8913;
})();
var statearr_8914_8939 = state_8897__$1;
(statearr_8914_8939[(2)] = null);

(statearr_8914_8939[(1)] = (2));


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
});})(c__8077__auto__))
;
return ((function (switch__7965__auto__,c__8077__auto__){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_8918 = [null,null,null,null,null,null,null,null];
(statearr_8918[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_8918[(1)] = (1));

return statearr_8918;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_8897){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_8897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e8919){if((e8919 instanceof Object)){
var ex__7969__auto__ = e8919;
var statearr_8920_8940 = state_8897;
(statearr_8920_8940[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8941 = state_8897;
state_8897 = G__8941;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_8897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_8897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto__))
})();
var state__8079__auto__ = (function (){var statearr_8921 = f__8078__auto__.call(null);
(statearr_8921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto__);

return statearr_8921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto__))
);

return c__8077__auto__;
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
var x__5343__auto__ = (((_ == null))?null:_);
var m__5344__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,_);
} else {
var m__5344__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,_);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5344__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m);
} else {
var m__5344__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async9163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9163 = (function (mult,ch,cs,meta9164){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9164 = meta9164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9165,meta9164__$1){
var self__ = this;
var _9165__$1 = this;
return (new cljs.core.async.t_cljs$core$async9163(self__.mult,self__.ch,self__.cs,meta9164__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9165){
var self__ = this;
var _9165__$1 = this;
return self__.meta9164;
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9164","meta9164",-1098479543,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9163";

cljs.core.async.t_cljs$core$async9163.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async9163");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9163 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9163(mult__$1,ch__$1,cs__$1,meta9164){
return (new cljs.core.async.t_cljs$core$async9163(mult__$1,ch__$1,cs__$1,meta9164));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9163(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8077__auto___9384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___9384,cs,m,dchan,dctr,done){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___9384,cs,m,dchan,dctr,done){
return (function (state_9296){
var state_val_9297 = (state_9296[(1)]);
if((state_val_9297 === (7))){
var inst_9292 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9298_9385 = state_9296__$1;
(statearr_9298_9385[(2)] = inst_9292);

(statearr_9298_9385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (20))){
var inst_9197 = (state_9296[(7)]);
var inst_9207 = cljs.core.first.call(null,inst_9197);
var inst_9208 = cljs.core.nth.call(null,inst_9207,(0),null);
var inst_9209 = cljs.core.nth.call(null,inst_9207,(1),null);
var state_9296__$1 = (function (){var statearr_9299 = state_9296;
(statearr_9299[(8)] = inst_9208);

return statearr_9299;
})();
if(cljs.core.truth_(inst_9209)){
var statearr_9300_9386 = state_9296__$1;
(statearr_9300_9386[(1)] = (22));

} else {
var statearr_9301_9387 = state_9296__$1;
(statearr_9301_9387[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (27))){
var inst_9237 = (state_9296[(9)]);
var inst_9168 = (state_9296[(10)]);
var inst_9239 = (state_9296[(11)]);
var inst_9244 = (state_9296[(12)]);
var inst_9244__$1 = cljs.core._nth.call(null,inst_9237,inst_9239);
var inst_9245 = cljs.core.async.put_BANG_.call(null,inst_9244__$1,inst_9168,done);
var state_9296__$1 = (function (){var statearr_9302 = state_9296;
(statearr_9302[(12)] = inst_9244__$1);

return statearr_9302;
})();
if(cljs.core.truth_(inst_9245)){
var statearr_9303_9388 = state_9296__$1;
(statearr_9303_9388[(1)] = (30));

} else {
var statearr_9304_9389 = state_9296__$1;
(statearr_9304_9389[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (1))){
var state_9296__$1 = state_9296;
var statearr_9305_9390 = state_9296__$1;
(statearr_9305_9390[(2)] = null);

(statearr_9305_9390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (24))){
var inst_9197 = (state_9296[(7)]);
var inst_9214 = (state_9296[(2)]);
var inst_9215 = cljs.core.next.call(null,inst_9197);
var inst_9177 = inst_9215;
var inst_9178 = null;
var inst_9179 = (0);
var inst_9180 = (0);
var state_9296__$1 = (function (){var statearr_9306 = state_9296;
(statearr_9306[(13)] = inst_9214);

(statearr_9306[(14)] = inst_9177);

(statearr_9306[(15)] = inst_9179);

(statearr_9306[(16)] = inst_9180);

(statearr_9306[(17)] = inst_9178);

return statearr_9306;
})();
var statearr_9307_9391 = state_9296__$1;
(statearr_9307_9391[(2)] = null);

(statearr_9307_9391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (39))){
var state_9296__$1 = state_9296;
var statearr_9311_9392 = state_9296__$1;
(statearr_9311_9392[(2)] = null);

(statearr_9311_9392[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (4))){
var inst_9168 = (state_9296[(10)]);
var inst_9168__$1 = (state_9296[(2)]);
var inst_9169 = (inst_9168__$1 == null);
var state_9296__$1 = (function (){var statearr_9312 = state_9296;
(statearr_9312[(10)] = inst_9168__$1);

return statearr_9312;
})();
if(cljs.core.truth_(inst_9169)){
var statearr_9313_9393 = state_9296__$1;
(statearr_9313_9393[(1)] = (5));

} else {
var statearr_9314_9394 = state_9296__$1;
(statearr_9314_9394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (15))){
var inst_9177 = (state_9296[(14)]);
var inst_9179 = (state_9296[(15)]);
var inst_9180 = (state_9296[(16)]);
var inst_9178 = (state_9296[(17)]);
var inst_9193 = (state_9296[(2)]);
var inst_9194 = (inst_9180 + (1));
var tmp9308 = inst_9177;
var tmp9309 = inst_9179;
var tmp9310 = inst_9178;
var inst_9177__$1 = tmp9308;
var inst_9178__$1 = tmp9310;
var inst_9179__$1 = tmp9309;
var inst_9180__$1 = inst_9194;
var state_9296__$1 = (function (){var statearr_9315 = state_9296;
(statearr_9315[(14)] = inst_9177__$1);

(statearr_9315[(15)] = inst_9179__$1);

(statearr_9315[(16)] = inst_9180__$1);

(statearr_9315[(18)] = inst_9193);

(statearr_9315[(17)] = inst_9178__$1);

return statearr_9315;
})();
var statearr_9316_9395 = state_9296__$1;
(statearr_9316_9395[(2)] = null);

(statearr_9316_9395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (21))){
var inst_9218 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9320_9396 = state_9296__$1;
(statearr_9320_9396[(2)] = inst_9218);

(statearr_9320_9396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (31))){
var inst_9244 = (state_9296[(12)]);
var inst_9248 = done.call(null,null);
var inst_9249 = cljs.core.async.untap_STAR_.call(null,m,inst_9244);
var state_9296__$1 = (function (){var statearr_9321 = state_9296;
(statearr_9321[(19)] = inst_9248);

return statearr_9321;
})();
var statearr_9322_9397 = state_9296__$1;
(statearr_9322_9397[(2)] = inst_9249);

(statearr_9322_9397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (32))){
var inst_9237 = (state_9296[(9)]);
var inst_9239 = (state_9296[(11)]);
var inst_9236 = (state_9296[(20)]);
var inst_9238 = (state_9296[(21)]);
var inst_9251 = (state_9296[(2)]);
var inst_9252 = (inst_9239 + (1));
var tmp9317 = inst_9237;
var tmp9318 = inst_9236;
var tmp9319 = inst_9238;
var inst_9236__$1 = tmp9318;
var inst_9237__$1 = tmp9317;
var inst_9238__$1 = tmp9319;
var inst_9239__$1 = inst_9252;
var state_9296__$1 = (function (){var statearr_9323 = state_9296;
(statearr_9323[(22)] = inst_9251);

(statearr_9323[(9)] = inst_9237__$1);

(statearr_9323[(11)] = inst_9239__$1);

(statearr_9323[(20)] = inst_9236__$1);

(statearr_9323[(21)] = inst_9238__$1);

return statearr_9323;
})();
var statearr_9324_9398 = state_9296__$1;
(statearr_9324_9398[(2)] = null);

(statearr_9324_9398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (40))){
var inst_9264 = (state_9296[(23)]);
var inst_9268 = done.call(null,null);
var inst_9269 = cljs.core.async.untap_STAR_.call(null,m,inst_9264);
var state_9296__$1 = (function (){var statearr_9325 = state_9296;
(statearr_9325[(24)] = inst_9268);

return statearr_9325;
})();
var statearr_9326_9399 = state_9296__$1;
(statearr_9326_9399[(2)] = inst_9269);

(statearr_9326_9399[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (33))){
var inst_9255 = (state_9296[(25)]);
var inst_9257 = cljs.core.chunked_seq_QMARK_.call(null,inst_9255);
var state_9296__$1 = state_9296;
if(inst_9257){
var statearr_9327_9400 = state_9296__$1;
(statearr_9327_9400[(1)] = (36));

} else {
var statearr_9328_9401 = state_9296__$1;
(statearr_9328_9401[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (13))){
var inst_9187 = (state_9296[(26)]);
var inst_9190 = cljs.core.async.close_BANG_.call(null,inst_9187);
var state_9296__$1 = state_9296;
var statearr_9329_9402 = state_9296__$1;
(statearr_9329_9402[(2)] = inst_9190);

(statearr_9329_9402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (22))){
var inst_9208 = (state_9296[(8)]);
var inst_9211 = cljs.core.async.close_BANG_.call(null,inst_9208);
var state_9296__$1 = state_9296;
var statearr_9330_9403 = state_9296__$1;
(statearr_9330_9403[(2)] = inst_9211);

(statearr_9330_9403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (36))){
var inst_9255 = (state_9296[(25)]);
var inst_9259 = cljs.core.chunk_first.call(null,inst_9255);
var inst_9260 = cljs.core.chunk_rest.call(null,inst_9255);
var inst_9261 = cljs.core.count.call(null,inst_9259);
var inst_9236 = inst_9260;
var inst_9237 = inst_9259;
var inst_9238 = inst_9261;
var inst_9239 = (0);
var state_9296__$1 = (function (){var statearr_9331 = state_9296;
(statearr_9331[(9)] = inst_9237);

(statearr_9331[(11)] = inst_9239);

(statearr_9331[(20)] = inst_9236);

(statearr_9331[(21)] = inst_9238);

return statearr_9331;
})();
var statearr_9332_9404 = state_9296__$1;
(statearr_9332_9404[(2)] = null);

(statearr_9332_9404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (41))){
var inst_9255 = (state_9296[(25)]);
var inst_9271 = (state_9296[(2)]);
var inst_9272 = cljs.core.next.call(null,inst_9255);
var inst_9236 = inst_9272;
var inst_9237 = null;
var inst_9238 = (0);
var inst_9239 = (0);
var state_9296__$1 = (function (){var statearr_9333 = state_9296;
(statearr_9333[(9)] = inst_9237);

(statearr_9333[(11)] = inst_9239);

(statearr_9333[(27)] = inst_9271);

(statearr_9333[(20)] = inst_9236);

(statearr_9333[(21)] = inst_9238);

return statearr_9333;
})();
var statearr_9334_9405 = state_9296__$1;
(statearr_9334_9405[(2)] = null);

(statearr_9334_9405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (43))){
var state_9296__$1 = state_9296;
var statearr_9335_9406 = state_9296__$1;
(statearr_9335_9406[(2)] = null);

(statearr_9335_9406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (29))){
var inst_9280 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9336_9407 = state_9296__$1;
(statearr_9336_9407[(2)] = inst_9280);

(statearr_9336_9407[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (44))){
var inst_9289 = (state_9296[(2)]);
var state_9296__$1 = (function (){var statearr_9337 = state_9296;
(statearr_9337[(28)] = inst_9289);

return statearr_9337;
})();
var statearr_9338_9408 = state_9296__$1;
(statearr_9338_9408[(2)] = null);

(statearr_9338_9408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (6))){
var inst_9228 = (state_9296[(29)]);
var inst_9227 = cljs.core.deref.call(null,cs);
var inst_9228__$1 = cljs.core.keys.call(null,inst_9227);
var inst_9229 = cljs.core.count.call(null,inst_9228__$1);
var inst_9230 = cljs.core.reset_BANG_.call(null,dctr,inst_9229);
var inst_9235 = cljs.core.seq.call(null,inst_9228__$1);
var inst_9236 = inst_9235;
var inst_9237 = null;
var inst_9238 = (0);
var inst_9239 = (0);
var state_9296__$1 = (function (){var statearr_9339 = state_9296;
(statearr_9339[(29)] = inst_9228__$1);

(statearr_9339[(9)] = inst_9237);

(statearr_9339[(11)] = inst_9239);

(statearr_9339[(20)] = inst_9236);

(statearr_9339[(21)] = inst_9238);

(statearr_9339[(30)] = inst_9230);

return statearr_9339;
})();
var statearr_9340_9409 = state_9296__$1;
(statearr_9340_9409[(2)] = null);

(statearr_9340_9409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (28))){
var inst_9255 = (state_9296[(25)]);
var inst_9236 = (state_9296[(20)]);
var inst_9255__$1 = cljs.core.seq.call(null,inst_9236);
var state_9296__$1 = (function (){var statearr_9341 = state_9296;
(statearr_9341[(25)] = inst_9255__$1);

return statearr_9341;
})();
if(inst_9255__$1){
var statearr_9342_9410 = state_9296__$1;
(statearr_9342_9410[(1)] = (33));

} else {
var statearr_9343_9411 = state_9296__$1;
(statearr_9343_9411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (25))){
var inst_9239 = (state_9296[(11)]);
var inst_9238 = (state_9296[(21)]);
var inst_9241 = (inst_9239 < inst_9238);
var inst_9242 = inst_9241;
var state_9296__$1 = state_9296;
if(cljs.core.truth_(inst_9242)){
var statearr_9344_9412 = state_9296__$1;
(statearr_9344_9412[(1)] = (27));

} else {
var statearr_9345_9413 = state_9296__$1;
(statearr_9345_9413[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (34))){
var state_9296__$1 = state_9296;
var statearr_9346_9414 = state_9296__$1;
(statearr_9346_9414[(2)] = null);

(statearr_9346_9414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (17))){
var state_9296__$1 = state_9296;
var statearr_9347_9415 = state_9296__$1;
(statearr_9347_9415[(2)] = null);

(statearr_9347_9415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (3))){
var inst_9294 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9296__$1,inst_9294);
} else {
if((state_val_9297 === (12))){
var inst_9223 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9348_9416 = state_9296__$1;
(statearr_9348_9416[(2)] = inst_9223);

(statearr_9348_9416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (2))){
var state_9296__$1 = state_9296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9296__$1,(4),ch);
} else {
if((state_val_9297 === (23))){
var state_9296__$1 = state_9296;
var statearr_9349_9417 = state_9296__$1;
(statearr_9349_9417[(2)] = null);

(statearr_9349_9417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (35))){
var inst_9278 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9350_9418 = state_9296__$1;
(statearr_9350_9418[(2)] = inst_9278);

(statearr_9350_9418[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (19))){
var inst_9197 = (state_9296[(7)]);
var inst_9201 = cljs.core.chunk_first.call(null,inst_9197);
var inst_9202 = cljs.core.chunk_rest.call(null,inst_9197);
var inst_9203 = cljs.core.count.call(null,inst_9201);
var inst_9177 = inst_9202;
var inst_9178 = inst_9201;
var inst_9179 = inst_9203;
var inst_9180 = (0);
var state_9296__$1 = (function (){var statearr_9351 = state_9296;
(statearr_9351[(14)] = inst_9177);

(statearr_9351[(15)] = inst_9179);

(statearr_9351[(16)] = inst_9180);

(statearr_9351[(17)] = inst_9178);

return statearr_9351;
})();
var statearr_9352_9419 = state_9296__$1;
(statearr_9352_9419[(2)] = null);

(statearr_9352_9419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (11))){
var inst_9177 = (state_9296[(14)]);
var inst_9197 = (state_9296[(7)]);
var inst_9197__$1 = cljs.core.seq.call(null,inst_9177);
var state_9296__$1 = (function (){var statearr_9353 = state_9296;
(statearr_9353[(7)] = inst_9197__$1);

return statearr_9353;
})();
if(inst_9197__$1){
var statearr_9354_9420 = state_9296__$1;
(statearr_9354_9420[(1)] = (16));

} else {
var statearr_9355_9421 = state_9296__$1;
(statearr_9355_9421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (9))){
var inst_9225 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9356_9422 = state_9296__$1;
(statearr_9356_9422[(2)] = inst_9225);

(statearr_9356_9422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (5))){
var inst_9175 = cljs.core.deref.call(null,cs);
var inst_9176 = cljs.core.seq.call(null,inst_9175);
var inst_9177 = inst_9176;
var inst_9178 = null;
var inst_9179 = (0);
var inst_9180 = (0);
var state_9296__$1 = (function (){var statearr_9357 = state_9296;
(statearr_9357[(14)] = inst_9177);

(statearr_9357[(15)] = inst_9179);

(statearr_9357[(16)] = inst_9180);

(statearr_9357[(17)] = inst_9178);

return statearr_9357;
})();
var statearr_9358_9423 = state_9296__$1;
(statearr_9358_9423[(2)] = null);

(statearr_9358_9423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (14))){
var state_9296__$1 = state_9296;
var statearr_9359_9424 = state_9296__$1;
(statearr_9359_9424[(2)] = null);

(statearr_9359_9424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (45))){
var inst_9286 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9360_9425 = state_9296__$1;
(statearr_9360_9425[(2)] = inst_9286);

(statearr_9360_9425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (26))){
var inst_9228 = (state_9296[(29)]);
var inst_9282 = (state_9296[(2)]);
var inst_9283 = cljs.core.seq.call(null,inst_9228);
var state_9296__$1 = (function (){var statearr_9361 = state_9296;
(statearr_9361[(31)] = inst_9282);

return statearr_9361;
})();
if(inst_9283){
var statearr_9362_9426 = state_9296__$1;
(statearr_9362_9426[(1)] = (42));

} else {
var statearr_9363_9427 = state_9296__$1;
(statearr_9363_9427[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (16))){
var inst_9197 = (state_9296[(7)]);
var inst_9199 = cljs.core.chunked_seq_QMARK_.call(null,inst_9197);
var state_9296__$1 = state_9296;
if(inst_9199){
var statearr_9364_9428 = state_9296__$1;
(statearr_9364_9428[(1)] = (19));

} else {
var statearr_9365_9429 = state_9296__$1;
(statearr_9365_9429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (38))){
var inst_9275 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9366_9430 = state_9296__$1;
(statearr_9366_9430[(2)] = inst_9275);

(statearr_9366_9430[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (30))){
var state_9296__$1 = state_9296;
var statearr_9367_9431 = state_9296__$1;
(statearr_9367_9431[(2)] = null);

(statearr_9367_9431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (10))){
var inst_9180 = (state_9296[(16)]);
var inst_9178 = (state_9296[(17)]);
var inst_9186 = cljs.core._nth.call(null,inst_9178,inst_9180);
var inst_9187 = cljs.core.nth.call(null,inst_9186,(0),null);
var inst_9188 = cljs.core.nth.call(null,inst_9186,(1),null);
var state_9296__$1 = (function (){var statearr_9368 = state_9296;
(statearr_9368[(26)] = inst_9187);

return statearr_9368;
})();
if(cljs.core.truth_(inst_9188)){
var statearr_9369_9432 = state_9296__$1;
(statearr_9369_9432[(1)] = (13));

} else {
var statearr_9370_9433 = state_9296__$1;
(statearr_9370_9433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (18))){
var inst_9221 = (state_9296[(2)]);
var state_9296__$1 = state_9296;
var statearr_9371_9434 = state_9296__$1;
(statearr_9371_9434[(2)] = inst_9221);

(statearr_9371_9434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (42))){
var state_9296__$1 = state_9296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9296__$1,(45),dchan);
} else {
if((state_val_9297 === (37))){
var inst_9255 = (state_9296[(25)]);
var inst_9168 = (state_9296[(10)]);
var inst_9264 = (state_9296[(23)]);
var inst_9264__$1 = cljs.core.first.call(null,inst_9255);
var inst_9265 = cljs.core.async.put_BANG_.call(null,inst_9264__$1,inst_9168,done);
var state_9296__$1 = (function (){var statearr_9372 = state_9296;
(statearr_9372[(23)] = inst_9264__$1);

return statearr_9372;
})();
if(cljs.core.truth_(inst_9265)){
var statearr_9373_9435 = state_9296__$1;
(statearr_9373_9435[(1)] = (39));

} else {
var statearr_9374_9436 = state_9296__$1;
(statearr_9374_9436[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9297 === (8))){
var inst_9179 = (state_9296[(15)]);
var inst_9180 = (state_9296[(16)]);
var inst_9182 = (inst_9180 < inst_9179);
var inst_9183 = inst_9182;
var state_9296__$1 = state_9296;
if(cljs.core.truth_(inst_9183)){
var statearr_9375_9437 = state_9296__$1;
(statearr_9375_9437[(1)] = (10));

} else {
var statearr_9376_9438 = state_9296__$1;
(statearr_9376_9438[(1)] = (11));

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
});})(c__8077__auto___9384,cs,m,dchan,dctr,done))
;
return ((function (switch__7965__auto__,c__8077__auto___9384,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7966__auto__ = null;
var cljs$core$async$mult_$_state_machine__7966__auto____0 = (function (){
var statearr_9380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9380[(0)] = cljs$core$async$mult_$_state_machine__7966__auto__);

(statearr_9380[(1)] = (1));

return statearr_9380;
});
var cljs$core$async$mult_$_state_machine__7966__auto____1 = (function (state_9296){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_9296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e9381){if((e9381 instanceof Object)){
var ex__7969__auto__ = e9381;
var statearr_9382_9439 = state_9296;
(statearr_9382_9439[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9440 = state_9296;
state_9296 = G__9440;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7966__auto__ = function(state_9296){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7966__auto____1.call(this,state_9296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7966__auto____0;
cljs$core$async$mult_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7966__auto____1;
return cljs$core$async$mult_$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___9384,cs,m,dchan,dctr,done))
})();
var state__8079__auto__ = (function (){var statearr_9383 = f__8078__auto__.call(null);
(statearr_9383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___9384);

return statearr_9383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___9384,cs,m,dchan,dctr,done))
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
var args9441 = [];
var len__5746__auto___9444 = arguments.length;
var i__5747__auto___9445 = (0);
while(true){
if((i__5747__auto___9445 < len__5746__auto___9444)){
args9441.push((arguments[i__5747__auto___9445]));

var G__9446 = (i__5747__auto___9445 + (1));
i__5747__auto___9445 = G__9446;
continue;
} else {
}
break;
}

var G__9443 = args9441.length;
switch (G__9443) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9441.length)].join('')));

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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,ch);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m);
} else {
var m__5344__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,state_map);
} else {
var m__5344__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,state_map);
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
var x__5343__auto__ = (((m == null))?null:m);
var m__5344__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,m,mode);
} else {
var m__5344__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5753__auto__ = [];
var len__5746__auto___9458 = arguments.length;
var i__5747__auto___9459 = (0);
while(true){
if((i__5747__auto___9459 < len__5746__auto___9458)){
args__5753__auto__.push((arguments[i__5747__auto___9459]));

var G__9460 = (i__5747__auto___9459 + (1));
i__5747__auto___9459 = G__9460;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((3) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5754__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9452){
var map__9453 = p__9452;
var map__9453__$1 = ((((!((map__9453 == null)))?((((map__9453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9453):map__9453);
var opts = map__9453__$1;
var statearr_9455_9461 = state;
(statearr_9455_9461[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9453,map__9453__$1,opts){
return (function (val){
var statearr_9456_9462 = state;
(statearr_9456_9462[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9453,map__9453__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9457_9463 = state;
(statearr_9457_9463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9448){
var G__9449 = cljs.core.first.call(null,seq9448);
var seq9448__$1 = cljs.core.next.call(null,seq9448);
var G__9450 = cljs.core.first.call(null,seq9448__$1);
var seq9448__$2 = cljs.core.next.call(null,seq9448__$1);
var G__9451 = cljs.core.first.call(null,seq9448__$2);
var seq9448__$3 = cljs.core.next.call(null,seq9448__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9449,G__9450,G__9451,seq9448__$3);
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
if(typeof cljs.core.async.t_cljs$core$async9627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9627 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9628){
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
this.meta9628 = meta9628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9629,meta9628__$1){
var self__ = this;
var _9629__$1 = this;
return (new cljs.core.async.t_cljs$core$async9627(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9628__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9629){
var self__ = this;
var _9629__$1 = this;
return self__.meta9628;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9628","meta9628",-311399646,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9627";

cljs.core.async.t_cljs$core$async9627.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async9627");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async9627 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9628){
return (new cljs.core.async.t_cljs$core$async9627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9628));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9627(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8077__auto___9790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9727){
var state_val_9728 = (state_9727[(1)]);
if((state_val_9728 === (7))){
var inst_9645 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9729_9791 = state_9727__$1;
(statearr_9729_9791[(2)] = inst_9645);

(statearr_9729_9791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (20))){
var inst_9657 = (state_9727[(7)]);
var state_9727__$1 = state_9727;
var statearr_9730_9792 = state_9727__$1;
(statearr_9730_9792[(2)] = inst_9657);

(statearr_9730_9792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (27))){
var state_9727__$1 = state_9727;
var statearr_9731_9793 = state_9727__$1;
(statearr_9731_9793[(2)] = null);

(statearr_9731_9793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (1))){
var inst_9633 = (state_9727[(8)]);
var inst_9633__$1 = calc_state.call(null);
var inst_9635 = (inst_9633__$1 == null);
var inst_9636 = cljs.core.not.call(null,inst_9635);
var state_9727__$1 = (function (){var statearr_9732 = state_9727;
(statearr_9732[(8)] = inst_9633__$1);

return statearr_9732;
})();
if(inst_9636){
var statearr_9733_9794 = state_9727__$1;
(statearr_9733_9794[(1)] = (2));

} else {
var statearr_9734_9795 = state_9727__$1;
(statearr_9734_9795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (24))){
var inst_9680 = (state_9727[(9)]);
var inst_9687 = (state_9727[(10)]);
var inst_9701 = (state_9727[(11)]);
var inst_9701__$1 = inst_9680.call(null,inst_9687);
var state_9727__$1 = (function (){var statearr_9735 = state_9727;
(statearr_9735[(11)] = inst_9701__$1);

return statearr_9735;
})();
if(cljs.core.truth_(inst_9701__$1)){
var statearr_9736_9796 = state_9727__$1;
(statearr_9736_9796[(1)] = (29));

} else {
var statearr_9737_9797 = state_9727__$1;
(statearr_9737_9797[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (4))){
var inst_9648 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9648)){
var statearr_9738_9798 = state_9727__$1;
(statearr_9738_9798[(1)] = (8));

} else {
var statearr_9739_9799 = state_9727__$1;
(statearr_9739_9799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (15))){
var inst_9674 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9674)){
var statearr_9740_9800 = state_9727__$1;
(statearr_9740_9800[(1)] = (19));

} else {
var statearr_9741_9801 = state_9727__$1;
(statearr_9741_9801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (21))){
var inst_9679 = (state_9727[(12)]);
var inst_9679__$1 = (state_9727[(2)]);
var inst_9680 = cljs.core.get.call(null,inst_9679__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9681 = cljs.core.get.call(null,inst_9679__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9682 = cljs.core.get.call(null,inst_9679__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9727__$1 = (function (){var statearr_9742 = state_9727;
(statearr_9742[(9)] = inst_9680);

(statearr_9742[(12)] = inst_9679__$1);

(statearr_9742[(13)] = inst_9681);

return statearr_9742;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_9727__$1,(22),inst_9682);
} else {
if((state_val_9728 === (31))){
var inst_9709 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9709)){
var statearr_9743_9802 = state_9727__$1;
(statearr_9743_9802[(1)] = (32));

} else {
var statearr_9744_9803 = state_9727__$1;
(statearr_9744_9803[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (32))){
var inst_9686 = (state_9727[(14)]);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9727__$1,(35),out,inst_9686);
} else {
if((state_val_9728 === (33))){
var inst_9679 = (state_9727[(12)]);
var inst_9657 = inst_9679;
var state_9727__$1 = (function (){var statearr_9745 = state_9727;
(statearr_9745[(7)] = inst_9657);

return statearr_9745;
})();
var statearr_9746_9804 = state_9727__$1;
(statearr_9746_9804[(2)] = null);

(statearr_9746_9804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (13))){
var inst_9657 = (state_9727[(7)]);
var inst_9664 = inst_9657.cljs$lang$protocol_mask$partition0$;
var inst_9665 = (inst_9664 & (64));
var inst_9666 = inst_9657.cljs$core$ISeq$;
var inst_9667 = (inst_9665) || (inst_9666);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9667)){
var statearr_9747_9805 = state_9727__$1;
(statearr_9747_9805[(1)] = (16));

} else {
var statearr_9748_9806 = state_9727__$1;
(statearr_9748_9806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (22))){
var inst_9687 = (state_9727[(10)]);
var inst_9686 = (state_9727[(14)]);
var inst_9685 = (state_9727[(2)]);
var inst_9686__$1 = cljs.core.nth.call(null,inst_9685,(0),null);
var inst_9687__$1 = cljs.core.nth.call(null,inst_9685,(1),null);
var inst_9688 = (inst_9686__$1 == null);
var inst_9689 = cljs.core._EQ_.call(null,inst_9687__$1,change);
var inst_9690 = (inst_9688) || (inst_9689);
var state_9727__$1 = (function (){var statearr_9749 = state_9727;
(statearr_9749[(10)] = inst_9687__$1);

(statearr_9749[(14)] = inst_9686__$1);

return statearr_9749;
})();
if(cljs.core.truth_(inst_9690)){
var statearr_9750_9807 = state_9727__$1;
(statearr_9750_9807[(1)] = (23));

} else {
var statearr_9751_9808 = state_9727__$1;
(statearr_9751_9808[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (36))){
var inst_9679 = (state_9727[(12)]);
var inst_9657 = inst_9679;
var state_9727__$1 = (function (){var statearr_9752 = state_9727;
(statearr_9752[(7)] = inst_9657);

return statearr_9752;
})();
var statearr_9753_9809 = state_9727__$1;
(statearr_9753_9809[(2)] = null);

(statearr_9753_9809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (29))){
var inst_9701 = (state_9727[(11)]);
var state_9727__$1 = state_9727;
var statearr_9754_9810 = state_9727__$1;
(statearr_9754_9810[(2)] = inst_9701);

(statearr_9754_9810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (6))){
var state_9727__$1 = state_9727;
var statearr_9755_9811 = state_9727__$1;
(statearr_9755_9811[(2)] = false);

(statearr_9755_9811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (28))){
var inst_9697 = (state_9727[(2)]);
var inst_9698 = calc_state.call(null);
var inst_9657 = inst_9698;
var state_9727__$1 = (function (){var statearr_9756 = state_9727;
(statearr_9756[(7)] = inst_9657);

(statearr_9756[(15)] = inst_9697);

return statearr_9756;
})();
var statearr_9757_9812 = state_9727__$1;
(statearr_9757_9812[(2)] = null);

(statearr_9757_9812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (25))){
var inst_9723 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9758_9813 = state_9727__$1;
(statearr_9758_9813[(2)] = inst_9723);

(statearr_9758_9813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (34))){
var inst_9721 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9759_9814 = state_9727__$1;
(statearr_9759_9814[(2)] = inst_9721);

(statearr_9759_9814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (17))){
var state_9727__$1 = state_9727;
var statearr_9760_9815 = state_9727__$1;
(statearr_9760_9815[(2)] = false);

(statearr_9760_9815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (3))){
var state_9727__$1 = state_9727;
var statearr_9761_9816 = state_9727__$1;
(statearr_9761_9816[(2)] = false);

(statearr_9761_9816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (12))){
var inst_9725 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9727__$1,inst_9725);
} else {
if((state_val_9728 === (2))){
var inst_9633 = (state_9727[(8)]);
var inst_9638 = inst_9633.cljs$lang$protocol_mask$partition0$;
var inst_9639 = (inst_9638 & (64));
var inst_9640 = inst_9633.cljs$core$ISeq$;
var inst_9641 = (inst_9639) || (inst_9640);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9641)){
var statearr_9762_9817 = state_9727__$1;
(statearr_9762_9817[(1)] = (5));

} else {
var statearr_9763_9818 = state_9727__$1;
(statearr_9763_9818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (23))){
var inst_9686 = (state_9727[(14)]);
var inst_9692 = (inst_9686 == null);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9692)){
var statearr_9764_9819 = state_9727__$1;
(statearr_9764_9819[(1)] = (26));

} else {
var statearr_9765_9820 = state_9727__$1;
(statearr_9765_9820[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (35))){
var inst_9712 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
if(cljs.core.truth_(inst_9712)){
var statearr_9766_9821 = state_9727__$1;
(statearr_9766_9821[(1)] = (36));

} else {
var statearr_9767_9822 = state_9727__$1;
(statearr_9767_9822[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (19))){
var inst_9657 = (state_9727[(7)]);
var inst_9676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9657);
var state_9727__$1 = state_9727;
var statearr_9768_9823 = state_9727__$1;
(statearr_9768_9823[(2)] = inst_9676);

(statearr_9768_9823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (11))){
var inst_9657 = (state_9727[(7)]);
var inst_9661 = (inst_9657 == null);
var inst_9662 = cljs.core.not.call(null,inst_9661);
var state_9727__$1 = state_9727;
if(inst_9662){
var statearr_9769_9824 = state_9727__$1;
(statearr_9769_9824[(1)] = (13));

} else {
var statearr_9770_9825 = state_9727__$1;
(statearr_9770_9825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (9))){
var inst_9633 = (state_9727[(8)]);
var state_9727__$1 = state_9727;
var statearr_9771_9826 = state_9727__$1;
(statearr_9771_9826[(2)] = inst_9633);

(statearr_9771_9826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (5))){
var state_9727__$1 = state_9727;
var statearr_9772_9827 = state_9727__$1;
(statearr_9772_9827[(2)] = true);

(statearr_9772_9827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (14))){
var state_9727__$1 = state_9727;
var statearr_9773_9828 = state_9727__$1;
(statearr_9773_9828[(2)] = false);

(statearr_9773_9828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (26))){
var inst_9687 = (state_9727[(10)]);
var inst_9694 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9687);
var state_9727__$1 = state_9727;
var statearr_9774_9829 = state_9727__$1;
(statearr_9774_9829[(2)] = inst_9694);

(statearr_9774_9829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (16))){
var state_9727__$1 = state_9727;
var statearr_9775_9830 = state_9727__$1;
(statearr_9775_9830[(2)] = true);

(statearr_9775_9830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (38))){
var inst_9717 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9776_9831 = state_9727__$1;
(statearr_9776_9831[(2)] = inst_9717);

(statearr_9776_9831[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (30))){
var inst_9680 = (state_9727[(9)]);
var inst_9687 = (state_9727[(10)]);
var inst_9681 = (state_9727[(13)]);
var inst_9704 = cljs.core.empty_QMARK_.call(null,inst_9680);
var inst_9705 = inst_9681.call(null,inst_9687);
var inst_9706 = cljs.core.not.call(null,inst_9705);
var inst_9707 = (inst_9704) && (inst_9706);
var state_9727__$1 = state_9727;
var statearr_9777_9832 = state_9727__$1;
(statearr_9777_9832[(2)] = inst_9707);

(statearr_9777_9832[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (10))){
var inst_9633 = (state_9727[(8)]);
var inst_9653 = (state_9727[(2)]);
var inst_9654 = cljs.core.get.call(null,inst_9653,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9655 = cljs.core.get.call(null,inst_9653,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9656 = cljs.core.get.call(null,inst_9653,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9657 = inst_9633;
var state_9727__$1 = (function (){var statearr_9778 = state_9727;
(statearr_9778[(16)] = inst_9655);

(statearr_9778[(17)] = inst_9656);

(statearr_9778[(7)] = inst_9657);

(statearr_9778[(18)] = inst_9654);

return statearr_9778;
})();
var statearr_9779_9833 = state_9727__$1;
(statearr_9779_9833[(2)] = null);

(statearr_9779_9833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (18))){
var inst_9671 = (state_9727[(2)]);
var state_9727__$1 = state_9727;
var statearr_9780_9834 = state_9727__$1;
(statearr_9780_9834[(2)] = inst_9671);

(statearr_9780_9834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (37))){
var state_9727__$1 = state_9727;
var statearr_9781_9835 = state_9727__$1;
(statearr_9781_9835[(2)] = null);

(statearr_9781_9835[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9728 === (8))){
var inst_9633 = (state_9727[(8)]);
var inst_9650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9633);
var state_9727__$1 = state_9727;
var statearr_9782_9836 = state_9727__$1;
(statearr_9782_9836[(2)] = inst_9650);

(statearr_9782_9836[(1)] = (10));


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
});})(c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7965__auto__,c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7966__auto__ = null;
var cljs$core$async$mix_$_state_machine__7966__auto____0 = (function (){
var statearr_9786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9786[(0)] = cljs$core$async$mix_$_state_machine__7966__auto__);

(statearr_9786[(1)] = (1));

return statearr_9786;
});
var cljs$core$async$mix_$_state_machine__7966__auto____1 = (function (state_9727){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_9727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e9787){if((e9787 instanceof Object)){
var ex__7969__auto__ = e9787;
var statearr_9788_9837 = state_9727;
(statearr_9788_9837[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9838 = state_9727;
state_9727 = G__9838;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7966__auto__ = function(state_9727){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7966__auto____1.call(this,state_9727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7966__auto____0;
cljs$core$async$mix_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7966__auto____1;
return cljs$core$async$mix_$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8079__auto__ = (function (){var statearr_9789 = f__8078__auto__.call(null);
(statearr_9789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___9790);

return statearr_9789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___9790,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5344__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v,ch);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args9839 = [];
var len__5746__auto___9842 = arguments.length;
var i__5747__auto___9843 = (0);
while(true){
if((i__5747__auto___9843 < len__5746__auto___9842)){
args9839.push((arguments[i__5747__auto___9843]));

var G__9844 = (i__5747__auto___9843 + (1));
i__5747__auto___9843 = G__9844;
continue;
} else {
}
break;
}

var G__9841 = args9839.length;
switch (G__9841) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9839.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p);
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
var x__5343__auto__ = (((p == null))?null:p);
var m__5344__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,p,v);
} else {
var m__5344__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,p,v);
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
var args9847 = [];
var len__5746__auto___9972 = arguments.length;
var i__5747__auto___9973 = (0);
while(true){
if((i__5747__auto___9973 < len__5746__auto___9972)){
args9847.push((arguments[i__5747__auto___9973]));

var G__9974 = (i__5747__auto___9973 + (1));
i__5747__auto___9973 = G__9974;
continue;
} else {
}
break;
}

var G__9849 = args9847.length;
switch (G__9849) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9847.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4688__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4688__auto__,mults){
return (function (p1__9846_SHARP_){
if(cljs.core.truth_(p1__9846_SHARP_.call(null,topic))){
return p1__9846_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__9846_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4688__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async9850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9850 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9851){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9851 = meta9851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9852,meta9851__$1){
var self__ = this;
var _9852__$1 = this;
return (new cljs.core.async.t_cljs$core$async9850(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9851__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9852){
var self__ = this;
var _9852__$1 = this;
return self__.meta9851;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9851","meta9851",1368210659,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9850";

cljs.core.async.t_cljs$core$async9850.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async9850");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async9850 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9851){
return (new cljs.core.async.t_cljs$core$async9850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9851));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9850(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8077__auto___9976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___9976,mults,ensure_mult,p){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___9976,mults,ensure_mult,p){
return (function (state_9924){
var state_val_9925 = (state_9924[(1)]);
if((state_val_9925 === (7))){
var inst_9920 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9926_9977 = state_9924__$1;
(statearr_9926_9977[(2)] = inst_9920);

(statearr_9926_9977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (20))){
var state_9924__$1 = state_9924;
var statearr_9927_9978 = state_9924__$1;
(statearr_9927_9978[(2)] = null);

(statearr_9927_9978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (1))){
var state_9924__$1 = state_9924;
var statearr_9928_9979 = state_9924__$1;
(statearr_9928_9979[(2)] = null);

(statearr_9928_9979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (24))){
var inst_9903 = (state_9924[(7)]);
var inst_9912 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9903);
var state_9924__$1 = state_9924;
var statearr_9929_9980 = state_9924__$1;
(statearr_9929_9980[(2)] = inst_9912);

(statearr_9929_9980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (4))){
var inst_9855 = (state_9924[(8)]);
var inst_9855__$1 = (state_9924[(2)]);
var inst_9856 = (inst_9855__$1 == null);
var state_9924__$1 = (function (){var statearr_9930 = state_9924;
(statearr_9930[(8)] = inst_9855__$1);

return statearr_9930;
})();
if(cljs.core.truth_(inst_9856)){
var statearr_9931_9981 = state_9924__$1;
(statearr_9931_9981[(1)] = (5));

} else {
var statearr_9932_9982 = state_9924__$1;
(statearr_9932_9982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (15))){
var inst_9897 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9933_9983 = state_9924__$1;
(statearr_9933_9983[(2)] = inst_9897);

(statearr_9933_9983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (21))){
var inst_9917 = (state_9924[(2)]);
var state_9924__$1 = (function (){var statearr_9934 = state_9924;
(statearr_9934[(9)] = inst_9917);

return statearr_9934;
})();
var statearr_9935_9984 = state_9924__$1;
(statearr_9935_9984[(2)] = null);

(statearr_9935_9984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (13))){
var inst_9879 = (state_9924[(10)]);
var inst_9881 = cljs.core.chunked_seq_QMARK_.call(null,inst_9879);
var state_9924__$1 = state_9924;
if(inst_9881){
var statearr_9936_9985 = state_9924__$1;
(statearr_9936_9985[(1)] = (16));

} else {
var statearr_9937_9986 = state_9924__$1;
(statearr_9937_9986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (22))){
var inst_9909 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
if(cljs.core.truth_(inst_9909)){
var statearr_9938_9987 = state_9924__$1;
(statearr_9938_9987[(1)] = (23));

} else {
var statearr_9939_9988 = state_9924__$1;
(statearr_9939_9988[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (6))){
var inst_9855 = (state_9924[(8)]);
var inst_9905 = (state_9924[(11)]);
var inst_9903 = (state_9924[(7)]);
var inst_9903__$1 = topic_fn.call(null,inst_9855);
var inst_9904 = cljs.core.deref.call(null,mults);
var inst_9905__$1 = cljs.core.get.call(null,inst_9904,inst_9903__$1);
var state_9924__$1 = (function (){var statearr_9940 = state_9924;
(statearr_9940[(11)] = inst_9905__$1);

(statearr_9940[(7)] = inst_9903__$1);

return statearr_9940;
})();
if(cljs.core.truth_(inst_9905__$1)){
var statearr_9941_9989 = state_9924__$1;
(statearr_9941_9989[(1)] = (19));

} else {
var statearr_9942_9990 = state_9924__$1;
(statearr_9942_9990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (25))){
var inst_9914 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9943_9991 = state_9924__$1;
(statearr_9943_9991[(2)] = inst_9914);

(statearr_9943_9991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (17))){
var inst_9879 = (state_9924[(10)]);
var inst_9888 = cljs.core.first.call(null,inst_9879);
var inst_9889 = cljs.core.async.muxch_STAR_.call(null,inst_9888);
var inst_9890 = cljs.core.async.close_BANG_.call(null,inst_9889);
var inst_9891 = cljs.core.next.call(null,inst_9879);
var inst_9865 = inst_9891;
var inst_9866 = null;
var inst_9867 = (0);
var inst_9868 = (0);
var state_9924__$1 = (function (){var statearr_9944 = state_9924;
(statearr_9944[(12)] = inst_9866);

(statearr_9944[(13)] = inst_9865);

(statearr_9944[(14)] = inst_9890);

(statearr_9944[(15)] = inst_9868);

(statearr_9944[(16)] = inst_9867);

return statearr_9944;
})();
var statearr_9945_9992 = state_9924__$1;
(statearr_9945_9992[(2)] = null);

(statearr_9945_9992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (3))){
var inst_9922 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9924__$1,inst_9922);
} else {
if((state_val_9925 === (12))){
var inst_9899 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9946_9993 = state_9924__$1;
(statearr_9946_9993[(2)] = inst_9899);

(statearr_9946_9993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (2))){
var state_9924__$1 = state_9924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9924__$1,(4),ch);
} else {
if((state_val_9925 === (23))){
var state_9924__$1 = state_9924;
var statearr_9947_9994 = state_9924__$1;
(statearr_9947_9994[(2)] = null);

(statearr_9947_9994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (19))){
var inst_9855 = (state_9924[(8)]);
var inst_9905 = (state_9924[(11)]);
var inst_9907 = cljs.core.async.muxch_STAR_.call(null,inst_9905);
var state_9924__$1 = state_9924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9924__$1,(22),inst_9907,inst_9855);
} else {
if((state_val_9925 === (11))){
var inst_9879 = (state_9924[(10)]);
var inst_9865 = (state_9924[(13)]);
var inst_9879__$1 = cljs.core.seq.call(null,inst_9865);
var state_9924__$1 = (function (){var statearr_9948 = state_9924;
(statearr_9948[(10)] = inst_9879__$1);

return statearr_9948;
})();
if(inst_9879__$1){
var statearr_9949_9995 = state_9924__$1;
(statearr_9949_9995[(1)] = (13));

} else {
var statearr_9950_9996 = state_9924__$1;
(statearr_9950_9996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (9))){
var inst_9901 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9951_9997 = state_9924__$1;
(statearr_9951_9997[(2)] = inst_9901);

(statearr_9951_9997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (5))){
var inst_9862 = cljs.core.deref.call(null,mults);
var inst_9863 = cljs.core.vals.call(null,inst_9862);
var inst_9864 = cljs.core.seq.call(null,inst_9863);
var inst_9865 = inst_9864;
var inst_9866 = null;
var inst_9867 = (0);
var inst_9868 = (0);
var state_9924__$1 = (function (){var statearr_9952 = state_9924;
(statearr_9952[(12)] = inst_9866);

(statearr_9952[(13)] = inst_9865);

(statearr_9952[(15)] = inst_9868);

(statearr_9952[(16)] = inst_9867);

return statearr_9952;
})();
var statearr_9953_9998 = state_9924__$1;
(statearr_9953_9998[(2)] = null);

(statearr_9953_9998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (14))){
var state_9924__$1 = state_9924;
var statearr_9957_9999 = state_9924__$1;
(statearr_9957_9999[(2)] = null);

(statearr_9957_9999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (16))){
var inst_9879 = (state_9924[(10)]);
var inst_9883 = cljs.core.chunk_first.call(null,inst_9879);
var inst_9884 = cljs.core.chunk_rest.call(null,inst_9879);
var inst_9885 = cljs.core.count.call(null,inst_9883);
var inst_9865 = inst_9884;
var inst_9866 = inst_9883;
var inst_9867 = inst_9885;
var inst_9868 = (0);
var state_9924__$1 = (function (){var statearr_9958 = state_9924;
(statearr_9958[(12)] = inst_9866);

(statearr_9958[(13)] = inst_9865);

(statearr_9958[(15)] = inst_9868);

(statearr_9958[(16)] = inst_9867);

return statearr_9958;
})();
var statearr_9959_10000 = state_9924__$1;
(statearr_9959_10000[(2)] = null);

(statearr_9959_10000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (10))){
var inst_9866 = (state_9924[(12)]);
var inst_9865 = (state_9924[(13)]);
var inst_9868 = (state_9924[(15)]);
var inst_9867 = (state_9924[(16)]);
var inst_9873 = cljs.core._nth.call(null,inst_9866,inst_9868);
var inst_9874 = cljs.core.async.muxch_STAR_.call(null,inst_9873);
var inst_9875 = cljs.core.async.close_BANG_.call(null,inst_9874);
var inst_9876 = (inst_9868 + (1));
var tmp9954 = inst_9866;
var tmp9955 = inst_9865;
var tmp9956 = inst_9867;
var inst_9865__$1 = tmp9955;
var inst_9866__$1 = tmp9954;
var inst_9867__$1 = tmp9956;
var inst_9868__$1 = inst_9876;
var state_9924__$1 = (function (){var statearr_9960 = state_9924;
(statearr_9960[(17)] = inst_9875);

(statearr_9960[(12)] = inst_9866__$1);

(statearr_9960[(13)] = inst_9865__$1);

(statearr_9960[(15)] = inst_9868__$1);

(statearr_9960[(16)] = inst_9867__$1);

return statearr_9960;
})();
var statearr_9961_10001 = state_9924__$1;
(statearr_9961_10001[(2)] = null);

(statearr_9961_10001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (18))){
var inst_9894 = (state_9924[(2)]);
var state_9924__$1 = state_9924;
var statearr_9962_10002 = state_9924__$1;
(statearr_9962_10002[(2)] = inst_9894);

(statearr_9962_10002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9925 === (8))){
var inst_9868 = (state_9924[(15)]);
var inst_9867 = (state_9924[(16)]);
var inst_9870 = (inst_9868 < inst_9867);
var inst_9871 = inst_9870;
var state_9924__$1 = state_9924;
if(cljs.core.truth_(inst_9871)){
var statearr_9963_10003 = state_9924__$1;
(statearr_9963_10003[(1)] = (10));

} else {
var statearr_9964_10004 = state_9924__$1;
(statearr_9964_10004[(1)] = (11));

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
});})(c__8077__auto___9976,mults,ensure_mult,p))
;
return ((function (switch__7965__auto__,c__8077__auto___9976,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_9968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9968[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_9968[(1)] = (1));

return statearr_9968;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_9924){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_9924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e9969){if((e9969 instanceof Object)){
var ex__7969__auto__ = e9969;
var statearr_9970_10005 = state_9924;
(statearr_9970_10005[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10006 = state_9924;
state_9924 = G__10006;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_9924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_9924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___9976,mults,ensure_mult,p))
})();
var state__8079__auto__ = (function (){var statearr_9971 = f__8078__auto__.call(null);
(statearr_9971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___9976);

return statearr_9971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___9976,mults,ensure_mult,p))
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
var args10007 = [];
var len__5746__auto___10010 = arguments.length;
var i__5747__auto___10011 = (0);
while(true){
if((i__5747__auto___10011 < len__5746__auto___10010)){
args10007.push((arguments[i__5747__auto___10011]));

var G__10012 = (i__5747__auto___10011 + (1));
i__5747__auto___10011 = G__10012;
continue;
} else {
}
break;
}

var G__10009 = args10007.length;
switch (G__10009) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10007.length)].join('')));

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
var args10014 = [];
var len__5746__auto___10017 = arguments.length;
var i__5747__auto___10018 = (0);
while(true){
if((i__5747__auto___10018 < len__5746__auto___10017)){
args10014.push((arguments[i__5747__auto___10018]));

var G__10019 = (i__5747__auto___10018 + (1));
i__5747__auto___10018 = G__10019;
continue;
} else {
}
break;
}

var G__10016 = args10014.length;
switch (G__10016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10014.length)].join('')));

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
var args10021 = [];
var len__5746__auto___10092 = arguments.length;
var i__5747__auto___10093 = (0);
while(true){
if((i__5747__auto___10093 < len__5746__auto___10092)){
args10021.push((arguments[i__5747__auto___10093]));

var G__10094 = (i__5747__auto___10093 + (1));
i__5747__auto___10093 = G__10094;
continue;
} else {
}
break;
}

var G__10023 = args10021.length;
switch (G__10023) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10021.length)].join('')));

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
var c__8077__auto___10096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10062){
var state_val_10063 = (state_10062[(1)]);
if((state_val_10063 === (7))){
var state_10062__$1 = state_10062;
var statearr_10064_10097 = state_10062__$1;
(statearr_10064_10097[(2)] = null);

(statearr_10064_10097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (1))){
var state_10062__$1 = state_10062;
var statearr_10065_10098 = state_10062__$1;
(statearr_10065_10098[(2)] = null);

(statearr_10065_10098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (4))){
var inst_10026 = (state_10062[(7)]);
var inst_10028 = (inst_10026 < cnt);
var state_10062__$1 = state_10062;
if(cljs.core.truth_(inst_10028)){
var statearr_10066_10099 = state_10062__$1;
(statearr_10066_10099[(1)] = (6));

} else {
var statearr_10067_10100 = state_10062__$1;
(statearr_10067_10100[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (15))){
var inst_10058 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
var statearr_10068_10101 = state_10062__$1;
(statearr_10068_10101[(2)] = inst_10058);

(statearr_10068_10101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (13))){
var inst_10051 = cljs.core.async.close_BANG_.call(null,out);
var state_10062__$1 = state_10062;
var statearr_10069_10102 = state_10062__$1;
(statearr_10069_10102[(2)] = inst_10051);

(statearr_10069_10102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (6))){
var state_10062__$1 = state_10062;
var statearr_10070_10103 = state_10062__$1;
(statearr_10070_10103[(2)] = null);

(statearr_10070_10103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (3))){
var inst_10060 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10062__$1,inst_10060);
} else {
if((state_val_10063 === (12))){
var inst_10048 = (state_10062[(8)]);
var inst_10048__$1 = (state_10062[(2)]);
var inst_10049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10048__$1);
var state_10062__$1 = (function (){var statearr_10071 = state_10062;
(statearr_10071[(8)] = inst_10048__$1);

return statearr_10071;
})();
if(cljs.core.truth_(inst_10049)){
var statearr_10072_10104 = state_10062__$1;
(statearr_10072_10104[(1)] = (13));

} else {
var statearr_10073_10105 = state_10062__$1;
(statearr_10073_10105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (2))){
var inst_10025 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10026 = (0);
var state_10062__$1 = (function (){var statearr_10074 = state_10062;
(statearr_10074[(7)] = inst_10026);

(statearr_10074[(9)] = inst_10025);

return statearr_10074;
})();
var statearr_10075_10106 = state_10062__$1;
(statearr_10075_10106[(2)] = null);

(statearr_10075_10106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (11))){
var inst_10026 = (state_10062[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10062,(10),Object,null,(9));
var inst_10035 = chs__$1.call(null,inst_10026);
var inst_10036 = done.call(null,inst_10026);
var inst_10037 = cljs.core.async.take_BANG_.call(null,inst_10035,inst_10036);
var state_10062__$1 = state_10062;
var statearr_10076_10107 = state_10062__$1;
(statearr_10076_10107[(2)] = inst_10037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (9))){
var inst_10026 = (state_10062[(7)]);
var inst_10039 = (state_10062[(2)]);
var inst_10040 = (inst_10026 + (1));
var inst_10026__$1 = inst_10040;
var state_10062__$1 = (function (){var statearr_10077 = state_10062;
(statearr_10077[(7)] = inst_10026__$1);

(statearr_10077[(10)] = inst_10039);

return statearr_10077;
})();
var statearr_10078_10108 = state_10062__$1;
(statearr_10078_10108[(2)] = null);

(statearr_10078_10108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (5))){
var inst_10046 = (state_10062[(2)]);
var state_10062__$1 = (function (){var statearr_10079 = state_10062;
(statearr_10079[(11)] = inst_10046);

return statearr_10079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10062__$1,(12),dchan);
} else {
if((state_val_10063 === (14))){
var inst_10048 = (state_10062[(8)]);
var inst_10053 = cljs.core.apply.call(null,f,inst_10048);
var state_10062__$1 = state_10062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10062__$1,(16),out,inst_10053);
} else {
if((state_val_10063 === (16))){
var inst_10055 = (state_10062[(2)]);
var state_10062__$1 = (function (){var statearr_10080 = state_10062;
(statearr_10080[(12)] = inst_10055);

return statearr_10080;
})();
var statearr_10081_10109 = state_10062__$1;
(statearr_10081_10109[(2)] = null);

(statearr_10081_10109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (10))){
var inst_10030 = (state_10062[(2)]);
var inst_10031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10062__$1 = (function (){var statearr_10082 = state_10062;
(statearr_10082[(13)] = inst_10030);

return statearr_10082;
})();
var statearr_10083_10110 = state_10062__$1;
(statearr_10083_10110[(2)] = inst_10031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10062__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10063 === (8))){
var inst_10044 = (state_10062[(2)]);
var state_10062__$1 = state_10062;
var statearr_10084_10111 = state_10062__$1;
(statearr_10084_10111[(2)] = inst_10044);

(statearr_10084_10111[(1)] = (5));


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
});})(c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7965__auto__,c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10088[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10088[(1)] = (1));

return statearr_10088;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10062){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10089){if((e10089 instanceof Object)){
var ex__7969__auto__ = e10089;
var statearr_10090_10112 = state_10062;
(statearr_10090_10112[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10113 = state_10062;
state_10062 = G__10113;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8079__auto__ = (function (){var statearr_10091 = f__8078__auto__.call(null);
(statearr_10091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10096);

return statearr_10091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10096,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args10115 = [];
var len__5746__auto___10171 = arguments.length;
var i__5747__auto___10172 = (0);
while(true){
if((i__5747__auto___10172 < len__5746__auto___10171)){
args10115.push((arguments[i__5747__auto___10172]));

var G__10173 = (i__5747__auto___10172 + (1));
i__5747__auto___10172 = G__10173;
continue;
} else {
}
break;
}

var G__10117 = args10115.length;
switch (G__10117) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10115.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10175,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10175,out){
return (function (state_10147){
var state_val_10148 = (state_10147[(1)]);
if((state_val_10148 === (7))){
var inst_10127 = (state_10147[(7)]);
var inst_10126 = (state_10147[(8)]);
var inst_10126__$1 = (state_10147[(2)]);
var inst_10127__$1 = cljs.core.nth.call(null,inst_10126__$1,(0),null);
var inst_10128 = cljs.core.nth.call(null,inst_10126__$1,(1),null);
var inst_10129 = (inst_10127__$1 == null);
var state_10147__$1 = (function (){var statearr_10149 = state_10147;
(statearr_10149[(7)] = inst_10127__$1);

(statearr_10149[(8)] = inst_10126__$1);

(statearr_10149[(9)] = inst_10128);

return statearr_10149;
})();
if(cljs.core.truth_(inst_10129)){
var statearr_10150_10176 = state_10147__$1;
(statearr_10150_10176[(1)] = (8));

} else {
var statearr_10151_10177 = state_10147__$1;
(statearr_10151_10177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (1))){
var inst_10118 = cljs.core.vec.call(null,chs);
var inst_10119 = inst_10118;
var state_10147__$1 = (function (){var statearr_10152 = state_10147;
(statearr_10152[(10)] = inst_10119);

return statearr_10152;
})();
var statearr_10153_10178 = state_10147__$1;
(statearr_10153_10178[(2)] = null);

(statearr_10153_10178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (4))){
var inst_10119 = (state_10147[(10)]);
var state_10147__$1 = state_10147;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10147__$1,(7),inst_10119);
} else {
if((state_val_10148 === (6))){
var inst_10143 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10154_10179 = state_10147__$1;
(statearr_10154_10179[(2)] = inst_10143);

(statearr_10154_10179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (3))){
var inst_10145 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10147__$1,inst_10145);
} else {
if((state_val_10148 === (2))){
var inst_10119 = (state_10147[(10)]);
var inst_10121 = cljs.core.count.call(null,inst_10119);
var inst_10122 = (inst_10121 > (0));
var state_10147__$1 = state_10147;
if(cljs.core.truth_(inst_10122)){
var statearr_10156_10180 = state_10147__$1;
(statearr_10156_10180[(1)] = (4));

} else {
var statearr_10157_10181 = state_10147__$1;
(statearr_10157_10181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (11))){
var inst_10119 = (state_10147[(10)]);
var inst_10136 = (state_10147[(2)]);
var tmp10155 = inst_10119;
var inst_10119__$1 = tmp10155;
var state_10147__$1 = (function (){var statearr_10158 = state_10147;
(statearr_10158[(10)] = inst_10119__$1);

(statearr_10158[(11)] = inst_10136);

return statearr_10158;
})();
var statearr_10159_10182 = state_10147__$1;
(statearr_10159_10182[(2)] = null);

(statearr_10159_10182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (9))){
var inst_10127 = (state_10147[(7)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10147__$1,(11),out,inst_10127);
} else {
if((state_val_10148 === (5))){
var inst_10141 = cljs.core.async.close_BANG_.call(null,out);
var state_10147__$1 = state_10147;
var statearr_10160_10183 = state_10147__$1;
(statearr_10160_10183[(2)] = inst_10141);

(statearr_10160_10183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (10))){
var inst_10139 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10161_10184 = state_10147__$1;
(statearr_10161_10184[(2)] = inst_10139);

(statearr_10161_10184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (8))){
var inst_10119 = (state_10147[(10)]);
var inst_10127 = (state_10147[(7)]);
var inst_10126 = (state_10147[(8)]);
var inst_10128 = (state_10147[(9)]);
var inst_10131 = (function (){var cs = inst_10119;
var vec__10124 = inst_10126;
var v = inst_10127;
var c = inst_10128;
return ((function (cs,vec__10124,v,c,inst_10119,inst_10127,inst_10126,inst_10128,state_val_10148,c__8077__auto___10175,out){
return (function (p1__10114_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10114_SHARP_);
});
;})(cs,vec__10124,v,c,inst_10119,inst_10127,inst_10126,inst_10128,state_val_10148,c__8077__auto___10175,out))
})();
var inst_10132 = cljs.core.filterv.call(null,inst_10131,inst_10119);
var inst_10119__$1 = inst_10132;
var state_10147__$1 = (function (){var statearr_10162 = state_10147;
(statearr_10162[(10)] = inst_10119__$1);

return statearr_10162;
})();
var statearr_10163_10185 = state_10147__$1;
(statearr_10163_10185[(2)] = null);

(statearr_10163_10185[(1)] = (2));


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
});})(c__8077__auto___10175,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10175,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10167[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10167[(1)] = (1));

return statearr_10167;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10147){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10168){if((e10168 instanceof Object)){
var ex__7969__auto__ = e10168;
var statearr_10169_10186 = state_10147;
(statearr_10169_10186[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10187 = state_10147;
state_10147 = G__10187;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10175,out))
})();
var state__8079__auto__ = (function (){var statearr_10170 = f__8078__auto__.call(null);
(statearr_10170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10175);

return statearr_10170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10175,out))
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
var args10188 = [];
var len__5746__auto___10237 = arguments.length;
var i__5747__auto___10238 = (0);
while(true){
if((i__5747__auto___10238 < len__5746__auto___10237)){
args10188.push((arguments[i__5747__auto___10238]));

var G__10239 = (i__5747__auto___10238 + (1));
i__5747__auto___10238 = G__10239;
continue;
} else {
}
break;
}

var G__10190 = args10188.length;
switch (G__10190) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10188.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10241,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10241,out){
return (function (state_10214){
var state_val_10215 = (state_10214[(1)]);
if((state_val_10215 === (7))){
var inst_10196 = (state_10214[(7)]);
var inst_10196__$1 = (state_10214[(2)]);
var inst_10197 = (inst_10196__$1 == null);
var inst_10198 = cljs.core.not.call(null,inst_10197);
var state_10214__$1 = (function (){var statearr_10216 = state_10214;
(statearr_10216[(7)] = inst_10196__$1);

return statearr_10216;
})();
if(inst_10198){
var statearr_10217_10242 = state_10214__$1;
(statearr_10217_10242[(1)] = (8));

} else {
var statearr_10218_10243 = state_10214__$1;
(statearr_10218_10243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (1))){
var inst_10191 = (0);
var state_10214__$1 = (function (){var statearr_10219 = state_10214;
(statearr_10219[(8)] = inst_10191);

return statearr_10219;
})();
var statearr_10220_10244 = state_10214__$1;
(statearr_10220_10244[(2)] = null);

(statearr_10220_10244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (4))){
var state_10214__$1 = state_10214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10214__$1,(7),ch);
} else {
if((state_val_10215 === (6))){
var inst_10209 = (state_10214[(2)]);
var state_10214__$1 = state_10214;
var statearr_10221_10245 = state_10214__$1;
(statearr_10221_10245[(2)] = inst_10209);

(statearr_10221_10245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (3))){
var inst_10211 = (state_10214[(2)]);
var inst_10212 = cljs.core.async.close_BANG_.call(null,out);
var state_10214__$1 = (function (){var statearr_10222 = state_10214;
(statearr_10222[(9)] = inst_10211);

return statearr_10222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10214__$1,inst_10212);
} else {
if((state_val_10215 === (2))){
var inst_10191 = (state_10214[(8)]);
var inst_10193 = (inst_10191 < n);
var state_10214__$1 = state_10214;
if(cljs.core.truth_(inst_10193)){
var statearr_10223_10246 = state_10214__$1;
(statearr_10223_10246[(1)] = (4));

} else {
var statearr_10224_10247 = state_10214__$1;
(statearr_10224_10247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (11))){
var inst_10191 = (state_10214[(8)]);
var inst_10201 = (state_10214[(2)]);
var inst_10202 = (inst_10191 + (1));
var inst_10191__$1 = inst_10202;
var state_10214__$1 = (function (){var statearr_10225 = state_10214;
(statearr_10225[(8)] = inst_10191__$1);

(statearr_10225[(10)] = inst_10201);

return statearr_10225;
})();
var statearr_10226_10248 = state_10214__$1;
(statearr_10226_10248[(2)] = null);

(statearr_10226_10248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (9))){
var state_10214__$1 = state_10214;
var statearr_10227_10249 = state_10214__$1;
(statearr_10227_10249[(2)] = null);

(statearr_10227_10249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (5))){
var state_10214__$1 = state_10214;
var statearr_10228_10250 = state_10214__$1;
(statearr_10228_10250[(2)] = null);

(statearr_10228_10250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (10))){
var inst_10206 = (state_10214[(2)]);
var state_10214__$1 = state_10214;
var statearr_10229_10251 = state_10214__$1;
(statearr_10229_10251[(2)] = inst_10206);

(statearr_10229_10251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10215 === (8))){
var inst_10196 = (state_10214[(7)]);
var state_10214__$1 = state_10214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10214__$1,(11),out,inst_10196);
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
});})(c__8077__auto___10241,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10241,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10233[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10233[(1)] = (1));

return statearr_10233;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10214){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10234){if((e10234 instanceof Object)){
var ex__7969__auto__ = e10234;
var statearr_10235_10252 = state_10214;
(statearr_10235_10252[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10253 = state_10214;
state_10214 = G__10253;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10241,out))
})();
var state__8079__auto__ = (function (){var statearr_10236 = f__8078__auto__.call(null);
(statearr_10236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10241);

return statearr_10236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10241,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10261 = (function (map_LT_,f,ch,meta10262){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10262 = meta10262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10263,meta10262__$1){
var self__ = this;
var _10263__$1 = this;
return (new cljs.core.async.t_cljs$core$async10261(self__.map_LT_,self__.f,self__.ch,meta10262__$1));
});

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10263){
var self__ = this;
var _10263__$1 = this;
return self__.meta10262;
});

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10264 = (function (map_LT_,f,ch,meta10262,_,fn1,meta10265){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10262 = meta10262;
this._ = _;
this.fn1 = fn1;
this.meta10265 = meta10265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10266,meta10265__$1){
var self__ = this;
var _10266__$1 = this;
return (new cljs.core.async.t_cljs$core$async10264(self__.map_LT_,self__.f,self__.ch,self__.meta10262,self__._,self__.fn1,meta10265__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10266){
var self__ = this;
var _10266__$1 = this;
return self__.meta10265;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10254_SHARP_){
return f1.call(null,(((p1__10254_SHARP_ == null))?null:self__.f.call(null,p1__10254_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10262","meta10262",-1754798333,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10261","cljs.core.async/t_cljs$core$async10261",-60332856,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10265","meta10265",1521488559,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10264";

cljs.core.async.t_cljs$core$async10264.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10264");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10264 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10264(map_LT___$1,f__$1,ch__$1,meta10262__$1,___$2,fn1__$1,meta10265){
return (new cljs.core.async.t_cljs$core$async10264(map_LT___$1,f__$1,ch__$1,meta10262__$1,___$2,fn1__$1,meta10265));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10264(self__.map_LT_,self__.f,self__.ch,self__.meta10262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4676__auto__ = ret;
if(cljs.core.truth_(and__4676__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4676__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10262","meta10262",-1754798333,null)], null);
});

cljs.core.async.t_cljs$core$async10261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10261";

cljs.core.async.t_cljs$core$async10261.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10261");
});

cljs.core.async.__GT_t_cljs$core$async10261 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10261(map_LT___$1,f__$1,ch__$1,meta10262){
return (new cljs.core.async.t_cljs$core$async10261(map_LT___$1,f__$1,ch__$1,meta10262));
});

}

return (new cljs.core.async.t_cljs$core$async10261(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10270 = (function (map_GT_,f,ch,meta10271){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10271 = meta10271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10272,meta10271__$1){
var self__ = this;
var _10272__$1 = this;
return (new cljs.core.async.t_cljs$core$async10270(self__.map_GT_,self__.f,self__.ch,meta10271__$1));
});

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10272){
var self__ = this;
var _10272__$1 = this;
return self__.meta10271;
});

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10271","meta10271",-1457460256,null)], null);
});

cljs.core.async.t_cljs$core$async10270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10270";

cljs.core.async.t_cljs$core$async10270.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10270");
});

cljs.core.async.__GT_t_cljs$core$async10270 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10270(map_GT___$1,f__$1,ch__$1,meta10271){
return (new cljs.core.async.t_cljs$core$async10270(map_GT___$1,f__$1,ch__$1,meta10271));
});

}

return (new cljs.core.async.t_cljs$core$async10270(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10276 = (function (filter_GT_,p,ch,meta10277){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10277 = meta10277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10278,meta10277__$1){
var self__ = this;
var _10278__$1 = this;
return (new cljs.core.async.t_cljs$core$async10276(self__.filter_GT_,self__.p,self__.ch,meta10277__$1));
});

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10278){
var self__ = this;
var _10278__$1 = this;
return self__.meta10277;
});

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10277","meta10277",266641154,null)], null);
});

cljs.core.async.t_cljs$core$async10276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10276";

cljs.core.async.t_cljs$core$async10276.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"cljs.core.async/t_cljs$core$async10276");
});

cljs.core.async.__GT_t_cljs$core$async10276 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10276(filter_GT___$1,p__$1,ch__$1,meta10277){
return (new cljs.core.async.t_cljs$core$async10276(filter_GT___$1,p__$1,ch__$1,meta10277));
});

}

return (new cljs.core.async.t_cljs$core$async10276(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args10279 = [];
var len__5746__auto___10323 = arguments.length;
var i__5747__auto___10324 = (0);
while(true){
if((i__5747__auto___10324 < len__5746__auto___10323)){
args10279.push((arguments[i__5747__auto___10324]));

var G__10325 = (i__5747__auto___10324 + (1));
i__5747__auto___10324 = G__10325;
continue;
} else {
}
break;
}

var G__10281 = args10279.length;
switch (G__10281) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10279.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10327,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10327,out){
return (function (state_10302){
var state_val_10303 = (state_10302[(1)]);
if((state_val_10303 === (7))){
var inst_10298 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10304_10328 = state_10302__$1;
(statearr_10304_10328[(2)] = inst_10298);

(statearr_10304_10328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (1))){
var state_10302__$1 = state_10302;
var statearr_10305_10329 = state_10302__$1;
(statearr_10305_10329[(2)] = null);

(statearr_10305_10329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (4))){
var inst_10284 = (state_10302[(7)]);
var inst_10284__$1 = (state_10302[(2)]);
var inst_10285 = (inst_10284__$1 == null);
var state_10302__$1 = (function (){var statearr_10306 = state_10302;
(statearr_10306[(7)] = inst_10284__$1);

return statearr_10306;
})();
if(cljs.core.truth_(inst_10285)){
var statearr_10307_10330 = state_10302__$1;
(statearr_10307_10330[(1)] = (5));

} else {
var statearr_10308_10331 = state_10302__$1;
(statearr_10308_10331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (6))){
var inst_10284 = (state_10302[(7)]);
var inst_10289 = p.call(null,inst_10284);
var state_10302__$1 = state_10302;
if(cljs.core.truth_(inst_10289)){
var statearr_10309_10332 = state_10302__$1;
(statearr_10309_10332[(1)] = (8));

} else {
var statearr_10310_10333 = state_10302__$1;
(statearr_10310_10333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (3))){
var inst_10300 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10302__$1,inst_10300);
} else {
if((state_val_10303 === (2))){
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10302__$1,(4),ch);
} else {
if((state_val_10303 === (11))){
var inst_10292 = (state_10302[(2)]);
var state_10302__$1 = state_10302;
var statearr_10311_10334 = state_10302__$1;
(statearr_10311_10334[(2)] = inst_10292);

(statearr_10311_10334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (9))){
var state_10302__$1 = state_10302;
var statearr_10312_10335 = state_10302__$1;
(statearr_10312_10335[(2)] = null);

(statearr_10312_10335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (5))){
var inst_10287 = cljs.core.async.close_BANG_.call(null,out);
var state_10302__$1 = state_10302;
var statearr_10313_10336 = state_10302__$1;
(statearr_10313_10336[(2)] = inst_10287);

(statearr_10313_10336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (10))){
var inst_10295 = (state_10302[(2)]);
var state_10302__$1 = (function (){var statearr_10314 = state_10302;
(statearr_10314[(8)] = inst_10295);

return statearr_10314;
})();
var statearr_10315_10337 = state_10302__$1;
(statearr_10315_10337[(2)] = null);

(statearr_10315_10337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10303 === (8))){
var inst_10284 = (state_10302[(7)]);
var state_10302__$1 = state_10302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10302__$1,(11),out,inst_10284);
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
});})(c__8077__auto___10327,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10327,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10319 = [null,null,null,null,null,null,null,null,null];
(statearr_10319[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10319[(1)] = (1));

return statearr_10319;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10302){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10320){if((e10320 instanceof Object)){
var ex__7969__auto__ = e10320;
var statearr_10321_10338 = state_10302;
(statearr_10321_10338[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10339 = state_10302;
state_10302 = G__10339;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10327,out))
})();
var state__8079__auto__ = (function (){var statearr_10322 = f__8078__auto__.call(null);
(statearr_10322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10327);

return statearr_10322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10327,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10340 = [];
var len__5746__auto___10343 = arguments.length;
var i__5747__auto___10344 = (0);
while(true){
if((i__5747__auto___10344 < len__5746__auto___10343)){
args10340.push((arguments[i__5747__auto___10344]));

var G__10345 = (i__5747__auto___10344 + (1));
i__5747__auto___10344 = G__10345;
continue;
} else {
}
break;
}

var G__10342 = args10340.length;
switch (G__10342) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10340.length)].join('')));

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
var c__8077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto__){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto__){
return (function (state_10512){
var state_val_10513 = (state_10512[(1)]);
if((state_val_10513 === (7))){
var inst_10508 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
var statearr_10514_10555 = state_10512__$1;
(statearr_10514_10555[(2)] = inst_10508);

(statearr_10514_10555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (20))){
var inst_10478 = (state_10512[(7)]);
var inst_10489 = (state_10512[(2)]);
var inst_10490 = cljs.core.next.call(null,inst_10478);
var inst_10464 = inst_10490;
var inst_10465 = null;
var inst_10466 = (0);
var inst_10467 = (0);
var state_10512__$1 = (function (){var statearr_10515 = state_10512;
(statearr_10515[(8)] = inst_10464);

(statearr_10515[(9)] = inst_10466);

(statearr_10515[(10)] = inst_10489);

(statearr_10515[(11)] = inst_10465);

(statearr_10515[(12)] = inst_10467);

return statearr_10515;
})();
var statearr_10516_10556 = state_10512__$1;
(statearr_10516_10556[(2)] = null);

(statearr_10516_10556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (1))){
var state_10512__$1 = state_10512;
var statearr_10517_10557 = state_10512__$1;
(statearr_10517_10557[(2)] = null);

(statearr_10517_10557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (4))){
var inst_10453 = (state_10512[(13)]);
var inst_10453__$1 = (state_10512[(2)]);
var inst_10454 = (inst_10453__$1 == null);
var state_10512__$1 = (function (){var statearr_10518 = state_10512;
(statearr_10518[(13)] = inst_10453__$1);

return statearr_10518;
})();
if(cljs.core.truth_(inst_10454)){
var statearr_10519_10558 = state_10512__$1;
(statearr_10519_10558[(1)] = (5));

} else {
var statearr_10520_10559 = state_10512__$1;
(statearr_10520_10559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (15))){
var state_10512__$1 = state_10512;
var statearr_10524_10560 = state_10512__$1;
(statearr_10524_10560[(2)] = null);

(statearr_10524_10560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (21))){
var state_10512__$1 = state_10512;
var statearr_10525_10561 = state_10512__$1;
(statearr_10525_10561[(2)] = null);

(statearr_10525_10561[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (13))){
var inst_10464 = (state_10512[(8)]);
var inst_10466 = (state_10512[(9)]);
var inst_10465 = (state_10512[(11)]);
var inst_10467 = (state_10512[(12)]);
var inst_10474 = (state_10512[(2)]);
var inst_10475 = (inst_10467 + (1));
var tmp10521 = inst_10464;
var tmp10522 = inst_10466;
var tmp10523 = inst_10465;
var inst_10464__$1 = tmp10521;
var inst_10465__$1 = tmp10523;
var inst_10466__$1 = tmp10522;
var inst_10467__$1 = inst_10475;
var state_10512__$1 = (function (){var statearr_10526 = state_10512;
(statearr_10526[(8)] = inst_10464__$1);

(statearr_10526[(9)] = inst_10466__$1);

(statearr_10526[(14)] = inst_10474);

(statearr_10526[(11)] = inst_10465__$1);

(statearr_10526[(12)] = inst_10467__$1);

return statearr_10526;
})();
var statearr_10527_10562 = state_10512__$1;
(statearr_10527_10562[(2)] = null);

(statearr_10527_10562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (22))){
var state_10512__$1 = state_10512;
var statearr_10528_10563 = state_10512__$1;
(statearr_10528_10563[(2)] = null);

(statearr_10528_10563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (6))){
var inst_10453 = (state_10512[(13)]);
var inst_10462 = f.call(null,inst_10453);
var inst_10463 = cljs.core.seq.call(null,inst_10462);
var inst_10464 = inst_10463;
var inst_10465 = null;
var inst_10466 = (0);
var inst_10467 = (0);
var state_10512__$1 = (function (){var statearr_10529 = state_10512;
(statearr_10529[(8)] = inst_10464);

(statearr_10529[(9)] = inst_10466);

(statearr_10529[(11)] = inst_10465);

(statearr_10529[(12)] = inst_10467);

return statearr_10529;
})();
var statearr_10530_10564 = state_10512__$1;
(statearr_10530_10564[(2)] = null);

(statearr_10530_10564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (17))){
var inst_10478 = (state_10512[(7)]);
var inst_10482 = cljs.core.chunk_first.call(null,inst_10478);
var inst_10483 = cljs.core.chunk_rest.call(null,inst_10478);
var inst_10484 = cljs.core.count.call(null,inst_10482);
var inst_10464 = inst_10483;
var inst_10465 = inst_10482;
var inst_10466 = inst_10484;
var inst_10467 = (0);
var state_10512__$1 = (function (){var statearr_10531 = state_10512;
(statearr_10531[(8)] = inst_10464);

(statearr_10531[(9)] = inst_10466);

(statearr_10531[(11)] = inst_10465);

(statearr_10531[(12)] = inst_10467);

return statearr_10531;
})();
var statearr_10532_10565 = state_10512__$1;
(statearr_10532_10565[(2)] = null);

(statearr_10532_10565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (3))){
var inst_10510 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10512__$1,inst_10510);
} else {
if((state_val_10513 === (12))){
var inst_10498 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
var statearr_10533_10566 = state_10512__$1;
(statearr_10533_10566[(2)] = inst_10498);

(statearr_10533_10566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (2))){
var state_10512__$1 = state_10512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10512__$1,(4),in$);
} else {
if((state_val_10513 === (23))){
var inst_10506 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
var statearr_10534_10567 = state_10512__$1;
(statearr_10534_10567[(2)] = inst_10506);

(statearr_10534_10567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (19))){
var inst_10493 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
var statearr_10535_10568 = state_10512__$1;
(statearr_10535_10568[(2)] = inst_10493);

(statearr_10535_10568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (11))){
var inst_10464 = (state_10512[(8)]);
var inst_10478 = (state_10512[(7)]);
var inst_10478__$1 = cljs.core.seq.call(null,inst_10464);
var state_10512__$1 = (function (){var statearr_10536 = state_10512;
(statearr_10536[(7)] = inst_10478__$1);

return statearr_10536;
})();
if(inst_10478__$1){
var statearr_10537_10569 = state_10512__$1;
(statearr_10537_10569[(1)] = (14));

} else {
var statearr_10538_10570 = state_10512__$1;
(statearr_10538_10570[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (9))){
var inst_10500 = (state_10512[(2)]);
var inst_10501 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10512__$1 = (function (){var statearr_10539 = state_10512;
(statearr_10539[(15)] = inst_10500);

return statearr_10539;
})();
if(cljs.core.truth_(inst_10501)){
var statearr_10540_10571 = state_10512__$1;
(statearr_10540_10571[(1)] = (21));

} else {
var statearr_10541_10572 = state_10512__$1;
(statearr_10541_10572[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (5))){
var inst_10456 = cljs.core.async.close_BANG_.call(null,out);
var state_10512__$1 = state_10512;
var statearr_10542_10573 = state_10512__$1;
(statearr_10542_10573[(2)] = inst_10456);

(statearr_10542_10573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (14))){
var inst_10478 = (state_10512[(7)]);
var inst_10480 = cljs.core.chunked_seq_QMARK_.call(null,inst_10478);
var state_10512__$1 = state_10512;
if(inst_10480){
var statearr_10543_10574 = state_10512__$1;
(statearr_10543_10574[(1)] = (17));

} else {
var statearr_10544_10575 = state_10512__$1;
(statearr_10544_10575[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (16))){
var inst_10496 = (state_10512[(2)]);
var state_10512__$1 = state_10512;
var statearr_10545_10576 = state_10512__$1;
(statearr_10545_10576[(2)] = inst_10496);

(statearr_10545_10576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10513 === (10))){
var inst_10465 = (state_10512[(11)]);
var inst_10467 = (state_10512[(12)]);
var inst_10472 = cljs.core._nth.call(null,inst_10465,inst_10467);
var state_10512__$1 = state_10512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10512__$1,(13),out,inst_10472);
} else {
if((state_val_10513 === (18))){
var inst_10478 = (state_10512[(7)]);
var inst_10487 = cljs.core.first.call(null,inst_10478);
var state_10512__$1 = state_10512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10512__$1,(20),out,inst_10487);
} else {
if((state_val_10513 === (8))){
var inst_10466 = (state_10512[(9)]);
var inst_10467 = (state_10512[(12)]);
var inst_10469 = (inst_10467 < inst_10466);
var inst_10470 = inst_10469;
var state_10512__$1 = state_10512;
if(cljs.core.truth_(inst_10470)){
var statearr_10546_10577 = state_10512__$1;
(statearr_10546_10577[(1)] = (10));

} else {
var statearr_10547_10578 = state_10512__$1;
(statearr_10547_10578[(1)] = (11));

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
});})(c__8077__auto__))
;
return ((function (switch__7965__auto__,c__8077__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____0 = (function (){
var statearr_10551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10551[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__);

(statearr_10551[(1)] = (1));

return statearr_10551;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____1 = (function (state_10512){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10552){if((e10552 instanceof Object)){
var ex__7969__auto__ = e10552;
var statearr_10553_10579 = state_10512;
(statearr_10553_10579[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10580 = state_10512;
state_10512 = G__10580;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__ = function(state_10512){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____1.call(this,state_10512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7966__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto__))
})();
var state__8079__auto__ = (function (){var statearr_10554 = f__8078__auto__.call(null);
(statearr_10554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto__);

return statearr_10554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto__))
);

return c__8077__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args10581 = [];
var len__5746__auto___10584 = arguments.length;
var i__5747__auto___10585 = (0);
while(true){
if((i__5747__auto___10585 < len__5746__auto___10584)){
args10581.push((arguments[i__5747__auto___10585]));

var G__10586 = (i__5747__auto___10585 + (1));
i__5747__auto___10585 = G__10586;
continue;
} else {
}
break;
}

var G__10583 = args10581.length;
switch (G__10583) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10581.length)].join('')));

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
var args10588 = [];
var len__5746__auto___10591 = arguments.length;
var i__5747__auto___10592 = (0);
while(true){
if((i__5747__auto___10592 < len__5746__auto___10591)){
args10588.push((arguments[i__5747__auto___10592]));

var G__10593 = (i__5747__auto___10592 + (1));
i__5747__auto___10592 = G__10593;
continue;
} else {
}
break;
}

var G__10590 = args10588.length;
switch (G__10590) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10588.length)].join('')));

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
var args10595 = [];
var len__5746__auto___10646 = arguments.length;
var i__5747__auto___10647 = (0);
while(true){
if((i__5747__auto___10647 < len__5746__auto___10646)){
args10595.push((arguments[i__5747__auto___10647]));

var G__10648 = (i__5747__auto___10647 + (1));
i__5747__auto___10647 = G__10648;
continue;
} else {
}
break;
}

var G__10597 = args10595.length;
switch (G__10597) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10595.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10650,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10650,out){
return (function (state_10621){
var state_val_10622 = (state_10621[(1)]);
if((state_val_10622 === (7))){
var inst_10616 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10623_10651 = state_10621__$1;
(statearr_10623_10651[(2)] = inst_10616);

(statearr_10623_10651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (1))){
var inst_10598 = null;
var state_10621__$1 = (function (){var statearr_10624 = state_10621;
(statearr_10624[(7)] = inst_10598);

return statearr_10624;
})();
var statearr_10625_10652 = state_10621__$1;
(statearr_10625_10652[(2)] = null);

(statearr_10625_10652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (4))){
var inst_10601 = (state_10621[(8)]);
var inst_10601__$1 = (state_10621[(2)]);
var inst_10602 = (inst_10601__$1 == null);
var inst_10603 = cljs.core.not.call(null,inst_10602);
var state_10621__$1 = (function (){var statearr_10626 = state_10621;
(statearr_10626[(8)] = inst_10601__$1);

return statearr_10626;
})();
if(inst_10603){
var statearr_10627_10653 = state_10621__$1;
(statearr_10627_10653[(1)] = (5));

} else {
var statearr_10628_10654 = state_10621__$1;
(statearr_10628_10654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (6))){
var state_10621__$1 = state_10621;
var statearr_10629_10655 = state_10621__$1;
(statearr_10629_10655[(2)] = null);

(statearr_10629_10655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (3))){
var inst_10618 = (state_10621[(2)]);
var inst_10619 = cljs.core.async.close_BANG_.call(null,out);
var state_10621__$1 = (function (){var statearr_10630 = state_10621;
(statearr_10630[(9)] = inst_10618);

return statearr_10630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10621__$1,inst_10619);
} else {
if((state_val_10622 === (2))){
var state_10621__$1 = state_10621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10621__$1,(4),ch);
} else {
if((state_val_10622 === (11))){
var inst_10601 = (state_10621[(8)]);
var inst_10610 = (state_10621[(2)]);
var inst_10598 = inst_10601;
var state_10621__$1 = (function (){var statearr_10631 = state_10621;
(statearr_10631[(10)] = inst_10610);

(statearr_10631[(7)] = inst_10598);

return statearr_10631;
})();
var statearr_10632_10656 = state_10621__$1;
(statearr_10632_10656[(2)] = null);

(statearr_10632_10656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (9))){
var inst_10601 = (state_10621[(8)]);
var state_10621__$1 = state_10621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10621__$1,(11),out,inst_10601);
} else {
if((state_val_10622 === (5))){
var inst_10601 = (state_10621[(8)]);
var inst_10598 = (state_10621[(7)]);
var inst_10605 = cljs.core._EQ_.call(null,inst_10601,inst_10598);
var state_10621__$1 = state_10621;
if(inst_10605){
var statearr_10634_10657 = state_10621__$1;
(statearr_10634_10657[(1)] = (8));

} else {
var statearr_10635_10658 = state_10621__$1;
(statearr_10635_10658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (10))){
var inst_10613 = (state_10621[(2)]);
var state_10621__$1 = state_10621;
var statearr_10636_10659 = state_10621__$1;
(statearr_10636_10659[(2)] = inst_10613);

(statearr_10636_10659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10622 === (8))){
var inst_10598 = (state_10621[(7)]);
var tmp10633 = inst_10598;
var inst_10598__$1 = tmp10633;
var state_10621__$1 = (function (){var statearr_10637 = state_10621;
(statearr_10637[(7)] = inst_10598__$1);

return statearr_10637;
})();
var statearr_10638_10660 = state_10621__$1;
(statearr_10638_10660[(2)] = null);

(statearr_10638_10660[(1)] = (2));


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
});})(c__8077__auto___10650,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10650,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10642[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10642[(1)] = (1));

return statearr_10642;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10621){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10643){if((e10643 instanceof Object)){
var ex__7969__auto__ = e10643;
var statearr_10644_10661 = state_10621;
(statearr_10644_10661[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10662 = state_10621;
state_10621 = G__10662;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10650,out))
})();
var state__8079__auto__ = (function (){var statearr_10645 = f__8078__auto__.call(null);
(statearr_10645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10650);

return statearr_10645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10650,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args10663 = [];
var len__5746__auto___10733 = arguments.length;
var i__5747__auto___10734 = (0);
while(true){
if((i__5747__auto___10734 < len__5746__auto___10733)){
args10663.push((arguments[i__5747__auto___10734]));

var G__10735 = (i__5747__auto___10734 + (1));
i__5747__auto___10734 = G__10735;
continue;
} else {
}
break;
}

var G__10665 = args10663.length;
switch (G__10665) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10663.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10737,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10737,out){
return (function (state_10703){
var state_val_10704 = (state_10703[(1)]);
if((state_val_10704 === (7))){
var inst_10699 = (state_10703[(2)]);
var state_10703__$1 = state_10703;
var statearr_10705_10738 = state_10703__$1;
(statearr_10705_10738[(2)] = inst_10699);

(statearr_10705_10738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (1))){
var inst_10666 = (new Array(n));
var inst_10667 = inst_10666;
var inst_10668 = (0);
var state_10703__$1 = (function (){var statearr_10706 = state_10703;
(statearr_10706[(7)] = inst_10667);

(statearr_10706[(8)] = inst_10668);

return statearr_10706;
})();
var statearr_10707_10739 = state_10703__$1;
(statearr_10707_10739[(2)] = null);

(statearr_10707_10739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (4))){
var inst_10671 = (state_10703[(9)]);
var inst_10671__$1 = (state_10703[(2)]);
var inst_10672 = (inst_10671__$1 == null);
var inst_10673 = cljs.core.not.call(null,inst_10672);
var state_10703__$1 = (function (){var statearr_10708 = state_10703;
(statearr_10708[(9)] = inst_10671__$1);

return statearr_10708;
})();
if(inst_10673){
var statearr_10709_10740 = state_10703__$1;
(statearr_10709_10740[(1)] = (5));

} else {
var statearr_10710_10741 = state_10703__$1;
(statearr_10710_10741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (15))){
var inst_10693 = (state_10703[(2)]);
var state_10703__$1 = state_10703;
var statearr_10711_10742 = state_10703__$1;
(statearr_10711_10742[(2)] = inst_10693);

(statearr_10711_10742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (13))){
var state_10703__$1 = state_10703;
var statearr_10712_10743 = state_10703__$1;
(statearr_10712_10743[(2)] = null);

(statearr_10712_10743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (6))){
var inst_10668 = (state_10703[(8)]);
var inst_10689 = (inst_10668 > (0));
var state_10703__$1 = state_10703;
if(cljs.core.truth_(inst_10689)){
var statearr_10713_10744 = state_10703__$1;
(statearr_10713_10744[(1)] = (12));

} else {
var statearr_10714_10745 = state_10703__$1;
(statearr_10714_10745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (3))){
var inst_10701 = (state_10703[(2)]);
var state_10703__$1 = state_10703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10703__$1,inst_10701);
} else {
if((state_val_10704 === (12))){
var inst_10667 = (state_10703[(7)]);
var inst_10691 = cljs.core.vec.call(null,inst_10667);
var state_10703__$1 = state_10703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10703__$1,(15),out,inst_10691);
} else {
if((state_val_10704 === (2))){
var state_10703__$1 = state_10703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10703__$1,(4),ch);
} else {
if((state_val_10704 === (11))){
var inst_10683 = (state_10703[(2)]);
var inst_10684 = (new Array(n));
var inst_10667 = inst_10684;
var inst_10668 = (0);
var state_10703__$1 = (function (){var statearr_10715 = state_10703;
(statearr_10715[(10)] = inst_10683);

(statearr_10715[(7)] = inst_10667);

(statearr_10715[(8)] = inst_10668);

return statearr_10715;
})();
var statearr_10716_10746 = state_10703__$1;
(statearr_10716_10746[(2)] = null);

(statearr_10716_10746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (9))){
var inst_10667 = (state_10703[(7)]);
var inst_10681 = cljs.core.vec.call(null,inst_10667);
var state_10703__$1 = state_10703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10703__$1,(11),out,inst_10681);
} else {
if((state_val_10704 === (5))){
var inst_10667 = (state_10703[(7)]);
var inst_10671 = (state_10703[(9)]);
var inst_10668 = (state_10703[(8)]);
var inst_10676 = (state_10703[(11)]);
var inst_10675 = (inst_10667[inst_10668] = inst_10671);
var inst_10676__$1 = (inst_10668 + (1));
var inst_10677 = (inst_10676__$1 < n);
var state_10703__$1 = (function (){var statearr_10717 = state_10703;
(statearr_10717[(12)] = inst_10675);

(statearr_10717[(11)] = inst_10676__$1);

return statearr_10717;
})();
if(cljs.core.truth_(inst_10677)){
var statearr_10718_10747 = state_10703__$1;
(statearr_10718_10747[(1)] = (8));

} else {
var statearr_10719_10748 = state_10703__$1;
(statearr_10719_10748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (14))){
var inst_10696 = (state_10703[(2)]);
var inst_10697 = cljs.core.async.close_BANG_.call(null,out);
var state_10703__$1 = (function (){var statearr_10721 = state_10703;
(statearr_10721[(13)] = inst_10696);

return statearr_10721;
})();
var statearr_10722_10749 = state_10703__$1;
(statearr_10722_10749[(2)] = inst_10697);

(statearr_10722_10749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (10))){
var inst_10687 = (state_10703[(2)]);
var state_10703__$1 = state_10703;
var statearr_10723_10750 = state_10703__$1;
(statearr_10723_10750[(2)] = inst_10687);

(statearr_10723_10750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10704 === (8))){
var inst_10667 = (state_10703[(7)]);
var inst_10676 = (state_10703[(11)]);
var tmp10720 = inst_10667;
var inst_10667__$1 = tmp10720;
var inst_10668 = inst_10676;
var state_10703__$1 = (function (){var statearr_10724 = state_10703;
(statearr_10724[(7)] = inst_10667__$1);

(statearr_10724[(8)] = inst_10668);

return statearr_10724;
})();
var statearr_10725_10751 = state_10703__$1;
(statearr_10725_10751[(2)] = null);

(statearr_10725_10751[(1)] = (2));


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
});})(c__8077__auto___10737,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10737,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10729[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10729[(1)] = (1));

return statearr_10729;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10703){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10730){if((e10730 instanceof Object)){
var ex__7969__auto__ = e10730;
var statearr_10731_10752 = state_10703;
(statearr_10731_10752[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10753 = state_10703;
state_10703 = G__10753;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10737,out))
})();
var state__8079__auto__ = (function (){var statearr_10732 = f__8078__auto__.call(null);
(statearr_10732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10737);

return statearr_10732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10737,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args10754 = [];
var len__5746__auto___10828 = arguments.length;
var i__5747__auto___10829 = (0);
while(true){
if((i__5747__auto___10829 < len__5746__auto___10828)){
args10754.push((arguments[i__5747__auto___10829]));

var G__10830 = (i__5747__auto___10829 + (1));
i__5747__auto___10829 = G__10830;
continue;
} else {
}
break;
}

var G__10756 = args10754.length;
switch (G__10756) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10754.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8077__auto___10832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10832,out){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10832,out){
return (function (state_10798){
var state_val_10799 = (state_10798[(1)]);
if((state_val_10799 === (7))){
var inst_10794 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10800_10833 = state_10798__$1;
(statearr_10800_10833[(2)] = inst_10794);

(statearr_10800_10833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (1))){
var inst_10757 = [];
var inst_10758 = inst_10757;
var inst_10759 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10798__$1 = (function (){var statearr_10801 = state_10798;
(statearr_10801[(7)] = inst_10758);

(statearr_10801[(8)] = inst_10759);

return statearr_10801;
})();
var statearr_10802_10834 = state_10798__$1;
(statearr_10802_10834[(2)] = null);

(statearr_10802_10834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (4))){
var inst_10762 = (state_10798[(9)]);
var inst_10762__$1 = (state_10798[(2)]);
var inst_10763 = (inst_10762__$1 == null);
var inst_10764 = cljs.core.not.call(null,inst_10763);
var state_10798__$1 = (function (){var statearr_10803 = state_10798;
(statearr_10803[(9)] = inst_10762__$1);

return statearr_10803;
})();
if(inst_10764){
var statearr_10804_10835 = state_10798__$1;
(statearr_10804_10835[(1)] = (5));

} else {
var statearr_10805_10836 = state_10798__$1;
(statearr_10805_10836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (15))){
var inst_10788 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10806_10837 = state_10798__$1;
(statearr_10806_10837[(2)] = inst_10788);

(statearr_10806_10837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (13))){
var state_10798__$1 = state_10798;
var statearr_10807_10838 = state_10798__$1;
(statearr_10807_10838[(2)] = null);

(statearr_10807_10838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (6))){
var inst_10758 = (state_10798[(7)]);
var inst_10783 = inst_10758.length;
var inst_10784 = (inst_10783 > (0));
var state_10798__$1 = state_10798;
if(cljs.core.truth_(inst_10784)){
var statearr_10808_10839 = state_10798__$1;
(statearr_10808_10839[(1)] = (12));

} else {
var statearr_10809_10840 = state_10798__$1;
(statearr_10809_10840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (3))){
var inst_10796 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10798__$1,inst_10796);
} else {
if((state_val_10799 === (12))){
var inst_10758 = (state_10798[(7)]);
var inst_10786 = cljs.core.vec.call(null,inst_10758);
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10798__$1,(15),out,inst_10786);
} else {
if((state_val_10799 === (2))){
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10798__$1,(4),ch);
} else {
if((state_val_10799 === (11))){
var inst_10766 = (state_10798[(10)]);
var inst_10762 = (state_10798[(9)]);
var inst_10776 = (state_10798[(2)]);
var inst_10777 = [];
var inst_10778 = inst_10777.push(inst_10762);
var inst_10758 = inst_10777;
var inst_10759 = inst_10766;
var state_10798__$1 = (function (){var statearr_10810 = state_10798;
(statearr_10810[(11)] = inst_10776);

(statearr_10810[(7)] = inst_10758);

(statearr_10810[(12)] = inst_10778);

(statearr_10810[(8)] = inst_10759);

return statearr_10810;
})();
var statearr_10811_10841 = state_10798__$1;
(statearr_10811_10841[(2)] = null);

(statearr_10811_10841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (9))){
var inst_10758 = (state_10798[(7)]);
var inst_10774 = cljs.core.vec.call(null,inst_10758);
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10798__$1,(11),out,inst_10774);
} else {
if((state_val_10799 === (5))){
var inst_10766 = (state_10798[(10)]);
var inst_10762 = (state_10798[(9)]);
var inst_10759 = (state_10798[(8)]);
var inst_10766__$1 = f.call(null,inst_10762);
var inst_10767 = cljs.core._EQ_.call(null,inst_10766__$1,inst_10759);
var inst_10768 = cljs.core.keyword_identical_QMARK_.call(null,inst_10759,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10769 = (inst_10767) || (inst_10768);
var state_10798__$1 = (function (){var statearr_10812 = state_10798;
(statearr_10812[(10)] = inst_10766__$1);

return statearr_10812;
})();
if(cljs.core.truth_(inst_10769)){
var statearr_10813_10842 = state_10798__$1;
(statearr_10813_10842[(1)] = (8));

} else {
var statearr_10814_10843 = state_10798__$1;
(statearr_10814_10843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (14))){
var inst_10791 = (state_10798[(2)]);
var inst_10792 = cljs.core.async.close_BANG_.call(null,out);
var state_10798__$1 = (function (){var statearr_10816 = state_10798;
(statearr_10816[(13)] = inst_10791);

return statearr_10816;
})();
var statearr_10817_10844 = state_10798__$1;
(statearr_10817_10844[(2)] = inst_10792);

(statearr_10817_10844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (10))){
var inst_10781 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10818_10845 = state_10798__$1;
(statearr_10818_10845[(2)] = inst_10781);

(statearr_10818_10845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (8))){
var inst_10766 = (state_10798[(10)]);
var inst_10758 = (state_10798[(7)]);
var inst_10762 = (state_10798[(9)]);
var inst_10771 = inst_10758.push(inst_10762);
var tmp10815 = inst_10758;
var inst_10758__$1 = tmp10815;
var inst_10759 = inst_10766;
var state_10798__$1 = (function (){var statearr_10819 = state_10798;
(statearr_10819[(7)] = inst_10758__$1);

(statearr_10819[(14)] = inst_10771);

(statearr_10819[(8)] = inst_10759);

return statearr_10819;
})();
var statearr_10820_10846 = state_10798__$1;
(statearr_10820_10846[(2)] = null);

(statearr_10820_10846[(1)] = (2));


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
});})(c__8077__auto___10832,out))
;
return ((function (switch__7965__auto__,c__8077__auto___10832,out){
return (function() {
var cljs$core$async$state_machine__7966__auto__ = null;
var cljs$core$async$state_machine__7966__auto____0 = (function (){
var statearr_10824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10824[(0)] = cljs$core$async$state_machine__7966__auto__);

(statearr_10824[(1)] = (1));

return statearr_10824;
});
var cljs$core$async$state_machine__7966__auto____1 = (function (state_10798){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10825){if((e10825 instanceof Object)){
var ex__7969__auto__ = e10825;
var statearr_10826_10847 = state_10798;
(statearr_10826_10847[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10848 = state_10798;
state_10798 = G__10848;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs$core$async$state_machine__7966__auto__ = function(state_10798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7966__auto____1.call(this,state_10798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7966__auto____0;
cljs$core$async$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7966__auto____1;
return cljs$core$async$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10832,out))
})();
var state__8079__auto__ = (function (){var statearr_10827 = f__8078__auto__.call(null);
(statearr_10827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10832);

return statearr_10827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10832,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1496645226367