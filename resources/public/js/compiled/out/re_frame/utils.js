// Compiled by ClojureScript 1.7.189 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__6173_SHARP_){
return console.log(p1__6173_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__6174_SHARP_){
return console.warn(p1__6174_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__6175_SHARP_){
return console.error(p1__6175_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__6176_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__6176_SHARP_);
} else {
return console.log(p1__6176_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__5753__auto__ = [];
var len__5746__auto___6178 = arguments.length;
var i__5747__auto___6179 = (0);
while(true){
if((i__5747__auto___6179 < len__5746__auto___6178)){
args__5753__auto__.push((arguments[i__5747__auto___6179]));

var G__6180 = (i__5747__auto___6179 + (1));
i__5747__auto___6179 = G__6180;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq6177){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6177));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__5753__auto__ = [];
var len__5746__auto___6182 = arguments.length;
var i__5747__auto___6183 = (0);
while(true){
if((i__5747__auto___6183 < len__5746__auto___6182)){
args__5753__auto__.push((arguments[i__5747__auto___6183]));

var G__6184 = (i__5747__auto___6183 + (1));
i__5747__auto___6183 = G__6184;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq6181){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6181));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__5753__auto__ = [];
var len__5746__auto___6186 = arguments.length;
var i__5747__auto___6187 = (0);
while(true){
if((i__5747__auto___6187 < len__5746__auto___6186)){
args__5753__auto__.push((arguments[i__5747__auto___6187]));

var G__6188 = (i__5747__auto___6187 + (1));
i__5747__auto___6187 = G__6188;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq6185){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6185));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__5753__auto__ = [];
var len__5746__auto___6190 = arguments.length;
var i__5747__auto___6191 = (0);
while(true){
if((i__5747__auto___6191 < len__5746__auto___6190)){
args__5753__auto__.push((arguments[i__5747__auto___6191]));

var G__6192 = (i__5747__auto___6191 + (1));
i__5747__auto___6191 = G__6192;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq6189){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6189));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__5753__auto__ = [];
var len__5746__auto___6194 = arguments.length;
var i__5747__auto___6195 = (0);
while(true){
if((i__5747__auto___6195 < len__5746__auto___6194)){
args__5753__auto__.push((arguments[i__5747__auto___6195]));

var G__6196 = (i__5747__auto___6195 + (1));
i__5747__auto___6195 = G__6196;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq6193){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6193));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1496645221979