// Compiled by ClojureScript 1.7.189 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__8077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto__){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto__){
return (function (state_13591){
var state_val_13592 = (state_13591[(1)]);
if((state_val_13592 === (1))){
var state_13591__$1 = state_13591;
var statearr_13593_13608 = state_13591__$1;
(statearr_13593_13608[(2)] = null);

(statearr_13593_13608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13592 === (2))){
var state_13591__$1 = state_13591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13591__$1,(4),ch);
} else {
if((state_val_13592 === (3))){
var inst_13589 = (state_13591[(2)]);
var state_13591__$1 = state_13591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13591__$1,inst_13589);
} else {
if((state_val_13592 === (4))){
var inst_13581 = (state_13591[(7)]);
var inst_13581__$1 = (state_13591[(2)]);
var state_13591__$1 = (function (){var statearr_13594 = state_13591;
(statearr_13594[(7)] = inst_13581__$1);

return statearr_13594;
})();
if(cljs.core.truth_(inst_13581__$1)){
var statearr_13595_13609 = state_13591__$1;
(statearr_13595_13609[(1)] = (5));

} else {
var statearr_13596_13610 = state_13591__$1;
(statearr_13596_13610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13592 === (5))){
var inst_13581 = (state_13591[(7)]);
var inst_13583 = ws.send(inst_13581);
var state_13591__$1 = (function (){var statearr_13597 = state_13591;
(statearr_13597[(8)] = inst_13583);

return statearr_13597;
})();
var statearr_13598_13611 = state_13591__$1;
(statearr_13598_13611[(2)] = null);

(statearr_13598_13611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13592 === (6))){
var state_13591__$1 = state_13591;
var statearr_13599_13612 = state_13591__$1;
(statearr_13599_13612[(2)] = null);

(statearr_13599_13612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13592 === (7))){
var inst_13587 = (state_13591[(2)]);
var state_13591__$1 = state_13591;
var statearr_13600_13613 = state_13591__$1;
(statearr_13600_13613[(2)] = inst_13587);

(statearr_13600_13613[(1)] = (3));


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
});})(c__8077__auto__))
;
return ((function (switch__7965__auto__,c__8077__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____0 = (function (){
var statearr_13604 = [null,null,null,null,null,null,null,null,null];
(statearr_13604[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__);

(statearr_13604[(1)] = (1));

return statearr_13604;
});
var chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____1 = (function (state_13591){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_13591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e13605){if((e13605 instanceof Object)){
var ex__7969__auto__ = e13605;
var statearr_13606_13614 = state_13591;
(statearr_13606_13614[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13615 = state_13591;
state_13591 = G__13615;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__ = function(state_13591){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____1.call(this,state_13591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__7966__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto__))
})();
var state__8079__auto__ = (function (){var statearr_13607 = f__8078__auto__.call(null);
(statearr_13607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto__);

return statearr_13607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto__))
);

return c__8077__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13626 = arguments.length;
var i__5747__auto___13627 = (0);
while(true){
if((i__5747__auto___13627 < len__5746__auto___13626)){
args__5753__auto__.push((arguments[i__5747__auto___13627]));

var G__13628 = (i__5747__auto___13627 + (1));
i__5747__auto___13627 = G__13628;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((2) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5754__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__13619){
var vec__13620 = p__13619;
var map__13621 = cljs.core.nth.call(null,vec__13620,(0),null);
var map__13621__$1 = ((((!((map__13621 == null)))?((((map__13621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13621):map__13621);
var on_close = cljs.core.get.call(null,map__13621__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels13623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels13623 = (function (read_ch,write_ch,p__13619,vec__13620,map__13621,on_close,meta13624){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__13619 = p__13619;
this.vec__13620 = vec__13620;
this.map__13621 = map__13621;
this.on_close = on_close;
this.meta13624 = meta13624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels13623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (_13625,meta13624__$1){
var self__ = this;
var _13625__$1 = this;
return (new chord.channels.t_chord$channels13623(self__.read_ch,self__.write_ch,self__.p__13619,self__.vec__13620,self__.map__13621,self__.on_close,meta13624__$1));
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (_13625){
var self__ = this;
var _13625__$1 = this;
return self__.meta13624;
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels13623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.getBasis = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__13619","p__13619",1518068826,null),new cljs.core.Symbol(null,"vec__13620","vec__13620",545312828,null),new cljs.core.Symbol(null,"map__13621","map__13621",-518987148,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta13624","meta13624",1343736036,null)], null);
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.t_chord$channels13623.cljs$lang$type = true;

chord.channels.t_chord$channels13623.cljs$lang$ctorStr = "chord.channels/t_chord$channels13623";

chord.channels.t_chord$channels13623.cljs$lang$ctorPrWriter = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.channels/t_chord$channels13623");
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

chord.channels.__GT_t_chord$channels13623 = ((function (vec__13620,map__13621,map__13621__$1,on_close){
return (function chord$channels$__GT_t_chord$channels13623(read_ch__$1,write_ch__$1,p__13619__$1,vec__13620__$1,map__13621__$2,on_close__$1,meta13624){
return (new chord.channels.t_chord$channels13623(read_ch__$1,write_ch__$1,p__13619__$1,vec__13620__$1,map__13621__$2,on_close__$1,meta13624));
});})(vec__13620,map__13621,map__13621__$1,on_close))
;

}

return (new chord.channels.t_chord$channels13623(read_ch,write_ch,p__13619,vec__13620,map__13621__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq13616){
var G__13617 = cljs.core.first.call(null,seq13616);
var seq13616__$1 = cljs.core.next.call(null,seq13616);
var G__13618 = cljs.core.first.call(null,seq13616__$1);
var seq13616__$2 = cljs.core.next.call(null,seq13616__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__13617,G__13618,seq13616__$2);
});

//# sourceMappingURL=channels.js.map?rel=1496645230515