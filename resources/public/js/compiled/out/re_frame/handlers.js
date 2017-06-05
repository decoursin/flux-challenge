// Compiled by ClojureScript 1.7.189 {}
goog.provide('re_frame.handlers');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
/**
 * See https://github.com/Day8/re-frame/issues/65
 */
re_frame.handlers.report_middleware_factories = (function re_frame$handlers$report_middleware_factories(v){
var name_of_factory = (function re_frame$handlers$report_middleware_factories_$_name_of_factory(f){
return new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f));
});
var factory_names_in = (function re_frame$handlers$report_middleware_factories_$_factory_names_in(v__$1){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,name_of_factory,v__$1));
});
var seq__13227 = cljs.core.seq.call(null,factory_names_in.call(null,v));
var chunk__13228 = null;
var count__13229 = (0);
var i__13230 = (0);
while(true){
if((i__13230 < count__13229)){
var name = cljs.core._nth.call(null,chunk__13228,i__13230);
re_frame.utils.error.call(null,"re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\".");

var G__13231 = seq__13227;
var G__13232 = chunk__13228;
var G__13233 = count__13229;
var G__13234 = (i__13230 + (1));
seq__13227 = G__13231;
chunk__13228 = G__13232;
count__13229 = G__13233;
i__13230 = G__13234;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13227);
if(temp__4425__auto__){
var seq__13227__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13227__$1)){
var c__5491__auto__ = cljs.core.chunk_first.call(null,seq__13227__$1);
var G__13235 = cljs.core.chunk_rest.call(null,seq__13227__$1);
var G__13236 = c__5491__auto__;
var G__13237 = cljs.core.count.call(null,c__5491__auto__);
var G__13238 = (0);
seq__13227 = G__13235;
chunk__13228 = G__13236;
count__13229 = G__13237;
i__13230 = G__13238;
continue;
} else {
var name = cljs.core.first.call(null,seq__13227__$1);
re_frame.utils.error.call(null,"re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\".");

var G__13239 = cljs.core.next.call(null,seq__13227__$1);
var G__13240 = null;
var G__13241 = (0);
var G__13242 = (0);
seq__13227 = G__13239;
chunk__13228 = G__13240;
count__13229 = G__13241;
i__13230 = G__13242;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a vector of middleware, filter out any nils, and use "comp" to compose the elements.
 *   v can have nested vectors, and will be flattened before "comp" is applied.
 *   For convienience, if v is a function (assumed to be middleware already), just return it.
 *   Filtering out nils allows us to create Middleware conditionally like this:
 *   (comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil
 *   
 */
re_frame.handlers.comp_middleware = (function re_frame$handlers$comp_middleware(v){
if(cljs.core.fn_QMARK_.call(null,v)){
return v;
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
var v__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,v));
re_frame.handlers.report_middleware_factories.call(null,v__$1);

return cljs.core.apply.call(null,cljs.core.comp,v__$1);
} else {
return re_frame.utils.warn.call(null,"re-frame: comp-middleware expects a vector, got: ",v);

}
}
});
re_frame.handlers.id__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frame.handlers.lookup_handler = (function re_frame$handlers$lookup_handler(event_id){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.handlers.id__GT_fn),event_id);
});
/**
 * Unregister all event handlers
 */
re_frame.handlers.clear_handlers_BANG_ = (function re_frame$handlers$clear_handlers_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.handlers.id__GT_fn,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * register a handler for an event.
 *   This is low level and it is expected that "re-frame.core/register-handler" would
 *   generally be used.
 */
re_frame.handlers.register_base = (function re_frame$handlers$register_base(var_args){
var args13243 = [];
var len__5746__auto___13246 = arguments.length;
var i__5747__auto___13247 = (0);
while(true){
if((i__5747__auto___13247 < len__5746__auto___13246)){
args13243.push((arguments[i__5747__auto___13247]));

var G__13248 = (i__5747__auto___13247 + (1));
i__5747__auto___13247 = G__13248;
continue;
} else {
}
break;
}

var G__13245 = args13243.length;
switch (G__13245) {
case 2:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13243.length)].join('')));

}
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.handlers.id__GT_fn),event_id)){
re_frame.utils.warn.call(null,"re-frame: overwriting an event-handler for: ",event_id);
} else {
}

return cljs.core.swap_BANG_.call(null,re_frame.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware,handler_fn){
var mid_ware = re_frame.handlers.comp_middleware.call(null,middleware);
var midware_PLUS_hfn = mid_ware.call(null,handler_fn);
return re_frame.handlers.register_base.call(null,event_id,midware_PLUS_hfn);
});

re_frame.handlers.register_base.cljs$lang$maxFixedArity = 3;
re_frame.handlers._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the handler, then call it.
 *   By default, handlers are not assumed to be pure. They are called with
 *   two paramters:
 *  - the `app-db` atom
 *  - the event vector
 *   The handler is assumed to side-effect on `app-db` - the return value is ignored.
 *   To write a pure handler, use the "pure" middleware when registering the handler.
 */
re_frame.handlers.handle = (function re_frame$handlers$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var handler_fn = re_frame.handlers.lookup_handler.call(null,event_id);
if((handler_fn == null)){
return re_frame.utils.error.call(null,"re-frame: no event handler registered for: \"",event_id,"\". Ignoring.");
} else {
if(cljs.core.truth_(re_frame.handlers._STAR_handling_STAR_)){
return re_frame.utils.error.call(null,"re-frame: while handling \"",re_frame.handlers._STAR_handling_STAR_,"\"  dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync in an event handler.");
} else {
var _STAR_handling_STAR_13251 = re_frame.handlers._STAR_handling_STAR_;
re_frame.handlers._STAR_handling_STAR_ = event_v;

try{return handler_fn.call(null,re_frame.db.app_db,event_v);
}finally {re_frame.handlers._STAR_handling_STAR_ = _STAR_handling_STAR_13251;
}}
}
});

//# sourceMappingURL=handlers.js.map?rel=1496645229496