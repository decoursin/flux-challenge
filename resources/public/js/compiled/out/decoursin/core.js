// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('decoursin.views');
goog.require('decoursin.subs');
goog.require('chord.client');
goog.require('decoursin.config');
goog.require('decoursin.handlers');
goog.require('re_frame.core');
if(cljs.core.truth_(decoursin.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
decoursin.core.connect_to_websocket = (function decoursin$core$connect_to_websocket(){
var c__8721__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8721__auto__){
return (function (){
var f__8722__auto__ = (function (){var switch__8700__auto__ = ((function (c__8721__auto__){
return (function (state_9308){
var state_val_9309 = (state_9308[(1)]);
if((state_val_9309 === (7))){
var inst_9269 = (state_9308[(2)]);
var state_9308__$1 = state_9308;
if(cljs.core.truth_(inst_9269)){
var statearr_9310_9346 = state_9308__$1;
(statearr_9310_9346[(1)] = (11));

} else {
var statearr_9311_9347 = state_9308__$1;
(statearr_9311_9347[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (20))){
var inst_9289 = (state_9308[(2)]);
var state_9308__$1 = state_9308;
var statearr_9312_9348 = state_9308__$1;
(statearr_9312_9348[(2)] = inst_9289);

(statearr_9312_9348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (1))){
var state_9308__$1 = state_9308;
var statearr_9313_9349 = state_9308__$1;
(statearr_9313_9349[(2)] = null);

(statearr_9313_9349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (4))){
var inst_9254 = (state_9308[(7)]);
var inst_9254__$1 = (state_9308[(2)]);
var inst_9256 = (inst_9254__$1 == null);
var inst_9257 = cljs.core.not.call(null,inst_9256);
var state_9308__$1 = (function (){var statearr_9314 = state_9308;
(statearr_9314[(7)] = inst_9254__$1);

return statearr_9314;
})();
if(inst_9257){
var statearr_9315_9350 = state_9308__$1;
(statearr_9315_9350[(1)] = (5));

} else {
var statearr_9316_9351 = state_9308__$1;
(statearr_9316_9351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (15))){
var inst_9277 = (state_9308[(8)]);
var inst_9282 = inst_9277.cljs$lang$protocol_mask$partition0$;
var inst_9283 = (inst_9282 & (64));
var inst_9284 = inst_9277.cljs$core$ISeq$;
var inst_9285 = (inst_9283) || (inst_9284);
var state_9308__$1 = state_9308;
if(cljs.core.truth_(inst_9285)){
var statearr_9317_9352 = state_9308__$1;
(statearr_9317_9352[(1)] = (18));

} else {
var statearr_9318_9353 = state_9308__$1;
(statearr_9318_9353[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (21))){
var inst_9277 = (state_9308[(8)]);
var inst_9294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9277);
var state_9308__$1 = state_9308;
var statearr_9319_9354 = state_9308__$1;
(statearr_9319_9354[(2)] = inst_9294);

(statearr_9319_9354[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (13))){
var inst_9274 = (state_9308[(2)]);
var inst_9275 = cljs.core.get.call(null,inst_9274,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var state_9308__$1 = state_9308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9308__$1,(14),inst_9275);
} else {
if((state_val_9309 === (22))){
var inst_9277 = (state_9308[(8)]);
var state_9308__$1 = state_9308;
var statearr_9320_9355 = state_9308__$1;
(statearr_9320_9355[(2)] = inst_9277);

(statearr_9320_9355[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (6))){
var state_9308__$1 = state_9308;
var statearr_9321_9356 = state_9308__$1;
(statearr_9321_9356[(2)] = false);

(statearr_9321_9356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (17))){
var inst_9292 = (state_9308[(2)]);
var state_9308__$1 = state_9308;
if(cljs.core.truth_(inst_9292)){
var statearr_9322_9357 = state_9308__$1;
(statearr_9322_9357[(1)] = (21));

} else {
var statearr_9323_9358 = state_9308__$1;
(statearr_9323_9358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (3))){
var inst_9306 = (state_9308[(2)]);
var state_9308__$1 = state_9308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9308__$1,inst_9306);
} else {
if((state_val_9309 === (12))){
var inst_9254 = (state_9308[(7)]);
var state_9308__$1 = state_9308;
var statearr_9324_9359 = state_9308__$1;
(statearr_9324_9359[(2)] = inst_9254);

(statearr_9324_9359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (2))){
var inst_9245 = document.location;
var inst_9246 = inst_9245.origin;
var inst_9247 = inst_9246.replace("http","ws");
var inst_9248 = [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"read-ch","read-ch",-38486414)];
var inst_9249 = cljs.core.async.chan.call(null,(10));
var inst_9250 = [new cljs.core.Keyword(null,"json","json",1279968570),inst_9249];
var inst_9251 = cljs.core.PersistentHashMap.fromArrays(inst_9248,inst_9250);
var inst_9252 = chord.client.ws_ch.call(null,inst_9247,inst_9251);
var state_9308__$1 = state_9308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9308__$1,(4),inst_9252);
} else {
if((state_val_9309 === (23))){
var inst_9297 = (state_9308[(2)]);
var inst_9298 = cljs.core.get.call(null,inst_9297,new cljs.core.Keyword(null,"message","message",-406056002));
var inst_9299 = cljs.core.get.call(null,inst_9297,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_9300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9301 = [new cljs.core.Keyword(null,"ws-message","ws-message",1750034263),inst_9298];
var inst_9302 = (new cljs.core.PersistentVector(null,2,(5),inst_9300,inst_9301,null));
var inst_9303 = re_frame.core.dispatch.call(null,inst_9302);
var state_9308__$1 = (function (){var statearr_9325 = state_9308;
(statearr_9325[(9)] = inst_9299);

(statearr_9325[(10)] = inst_9303);

return statearr_9325;
})();
var statearr_9326_9360 = state_9308__$1;
(statearr_9326_9360[(2)] = null);

(statearr_9326_9360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (19))){
var state_9308__$1 = state_9308;
var statearr_9327_9361 = state_9308__$1;
(statearr_9327_9361[(2)] = false);

(statearr_9327_9361[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (11))){
var inst_9254 = (state_9308[(7)]);
var inst_9271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9254);
var state_9308__$1 = state_9308;
var statearr_9328_9362 = state_9308__$1;
(statearr_9328_9362[(2)] = inst_9271);

(statearr_9328_9362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (9))){
var state_9308__$1 = state_9308;
var statearr_9329_9363 = state_9308__$1;
(statearr_9329_9363[(2)] = false);

(statearr_9329_9363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (5))){
var inst_9254 = (state_9308[(7)]);
var inst_9259 = inst_9254.cljs$lang$protocol_mask$partition0$;
var inst_9260 = (inst_9259 & (64));
var inst_9261 = inst_9254.cljs$core$ISeq$;
var inst_9262 = (inst_9260) || (inst_9261);
var state_9308__$1 = state_9308;
if(cljs.core.truth_(inst_9262)){
var statearr_9330_9364 = state_9308__$1;
(statearr_9330_9364[(1)] = (8));

} else {
var statearr_9331_9365 = state_9308__$1;
(statearr_9331_9365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (14))){
var inst_9277 = (state_9308[(8)]);
var inst_9277__$1 = (state_9308[(2)]);
var inst_9279 = (inst_9277__$1 == null);
var inst_9280 = cljs.core.not.call(null,inst_9279);
var state_9308__$1 = (function (){var statearr_9332 = state_9308;
(statearr_9332[(8)] = inst_9277__$1);

return statearr_9332;
})();
if(inst_9280){
var statearr_9333_9366 = state_9308__$1;
(statearr_9333_9366[(1)] = (15));

} else {
var statearr_9334_9367 = state_9308__$1;
(statearr_9334_9367[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (16))){
var state_9308__$1 = state_9308;
var statearr_9335_9368 = state_9308__$1;
(statearr_9335_9368[(2)] = false);

(statearr_9335_9368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (10))){
var inst_9266 = (state_9308[(2)]);
var state_9308__$1 = state_9308;
var statearr_9336_9369 = state_9308__$1;
(statearr_9336_9369[(2)] = inst_9266);

(statearr_9336_9369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (18))){
var state_9308__$1 = state_9308;
var statearr_9337_9370 = state_9308__$1;
(statearr_9337_9370[(2)] = true);

(statearr_9337_9370[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9309 === (8))){
var state_9308__$1 = state_9308;
var statearr_9338_9371 = state_9308__$1;
(statearr_9338_9371[(2)] = true);

(statearr_9338_9371[(1)] = (10));


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
});})(c__8721__auto__))
;
return ((function (switch__8700__auto__,c__8721__auto__){
return (function() {
var decoursin$core$connect_to_websocket_$_state_machine__8701__auto__ = null;
var decoursin$core$connect_to_websocket_$_state_machine__8701__auto____0 = (function (){
var statearr_9342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9342[(0)] = decoursin$core$connect_to_websocket_$_state_machine__8701__auto__);

(statearr_9342[(1)] = (1));

return statearr_9342;
});
var decoursin$core$connect_to_websocket_$_state_machine__8701__auto____1 = (function (state_9308){
while(true){
var ret_value__8702__auto__ = (function (){try{while(true){
var result__8703__auto__ = switch__8700__auto__.call(null,state_9308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8703__auto__;
}
break;
}
}catch (e9343){if((e9343 instanceof Object)){
var ex__8704__auto__ = e9343;
var statearr_9344_9372 = state_9308;
(statearr_9344_9372[(5)] = ex__8704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9373 = state_9308;
state_9308 = G__9373;
continue;
} else {
return ret_value__8702__auto__;
}
break;
}
});
decoursin$core$connect_to_websocket_$_state_machine__8701__auto__ = function(state_9308){
switch(arguments.length){
case 0:
return decoursin$core$connect_to_websocket_$_state_machine__8701__auto____0.call(this);
case 1:
return decoursin$core$connect_to_websocket_$_state_machine__8701__auto____1.call(this,state_9308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
decoursin$core$connect_to_websocket_$_state_machine__8701__auto__.cljs$core$IFn$_invoke$arity$0 = decoursin$core$connect_to_websocket_$_state_machine__8701__auto____0;
decoursin$core$connect_to_websocket_$_state_machine__8701__auto__.cljs$core$IFn$_invoke$arity$1 = decoursin$core$connect_to_websocket_$_state_machine__8701__auto____1;
return decoursin$core$connect_to_websocket_$_state_machine__8701__auto__;
})()
;})(switch__8700__auto__,c__8721__auto__))
})();
var state__8723__auto__ = (function (){var statearr_9345 = f__8722__auto__.call(null);
(statearr_9345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8721__auto__);

return statearr_9345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8723__auto__);
});})(c__8721__auto__))
);

return c__8721__auto__;
});
decoursin.core.mount_root = (function decoursin$core$mount_root(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sith","set-sith",1130829758),(3616),new cljs.core.Keyword(null,"up","up",-269712113),(0)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.main], null),document.getElementById("app"));
});
decoursin.core.init = (function decoursin$core$init(){
decoursin.core.connect_to_websocket.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return decoursin.core.mount_root.call(null);
});
goog.exportSymbol('decoursin.core.init', decoursin.core.init);
decoursin.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1496653525180