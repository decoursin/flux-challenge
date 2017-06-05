// Compiled by ClojureScript 1.7.189 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13783 = arguments.length;
var i__5747__auto___13784 = (0);
while(true){
if((i__5747__auto___13784 < len__5746__auto___13783)){
args__5753__auto__.push((arguments[i__5747__auto___13784]));

var G__13785 = (i__5747__auto___13784 + (1));
i__5747__auto___13784 = G__13785;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__13681){
var vec__13682 = p__13681;
var map__13683 = cljs.core.nth.call(null,vec__13682,(0),null);
var map__13683__$1 = ((((!((map__13683 == null)))?((((map__13683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13683):map__13683);
var opts = map__13683__$1;
var read_ch = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__13683__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__13685 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4688__auto__ = read_ch;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4688__auto__ = write_ch;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__13685__$1 = ((((!((map__13685 == null)))?((((map__13685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13685):map__13685);
var read_ch__$1 = cljs.core.get.call(null,map__13685__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__13685__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function (p1__13677_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__13677_SHARP_);
});})(web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function (p1__13678_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__13678_SHARP_);
});})(web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__8077__auto___13786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function (state_13746){
var state_val_13747 = (state_13746[(1)]);
if((state_val_13747 === (7))){
var inst_13742 = (state_13746[(2)]);
var state_13746__$1 = state_13746;
var statearr_13748_13787 = state_13746__$1;
(statearr_13748_13787[(2)] = inst_13742);

(statearr_13748_13787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (20))){
var state_13746__$1 = state_13746;
var statearr_13749_13788 = state_13746__$1;
(statearr_13749_13788[(2)] = null);

(statearr_13749_13788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (1))){
var inst_13687 = false;
var state_13746__$1 = (function (){var statearr_13750 = state_13746;
(statearr_13750[(7)] = inst_13687);

return statearr_13750;
})();
var statearr_13751_13789 = state_13746__$1;
(statearr_13751_13789[(2)] = null);

(statearr_13751_13789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (4))){
var inst_13698 = (state_13746[(8)]);
var inst_13700 = (state_13746[(9)]);
var inst_13698__$1 = (state_13746[(2)]);
var inst_13699 = cljs.core.nth.call(null,inst_13698__$1,(0),null);
var inst_13700__$1 = cljs.core.nth.call(null,inst_13698__$1,(1),null);
var inst_13701 = cljs.core._EQ_.call(null,inst_13700__$1,open_ch);
var state_13746__$1 = (function (){var statearr_13752 = state_13746;
(statearr_13752[(8)] = inst_13698__$1);

(statearr_13752[(9)] = inst_13700__$1);

(statearr_13752[(10)] = inst_13699);

return statearr_13752;
})();
if(inst_13701){
var statearr_13753_13790 = state_13746__$1;
(statearr_13753_13790[(1)] = (5));

} else {
var statearr_13754_13791 = state_13746__$1;
(statearr_13754_13791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (15))){
var inst_13727 = (state_13746[(2)]);
var state_13746__$1 = state_13746;
var statearr_13755_13792 = state_13746__$1;
(statearr_13755_13792[(2)] = inst_13727);

(statearr_13755_13792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (21))){
var inst_13738 = (state_13746[(2)]);
var state_13746__$1 = state_13746;
var statearr_13756_13793 = state_13746__$1;
(statearr_13756_13793[(2)] = inst_13738);

(statearr_13756_13793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (13))){
var state_13746__$1 = state_13746;
var statearr_13757_13794 = state_13746__$1;
(statearr_13757_13794[(2)] = null);

(statearr_13757_13794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (6))){
var inst_13700 = (state_13746[(9)]);
var inst_13713 = cljs.core._EQ_.call(null,inst_13700,close_ch);
var state_13746__$1 = state_13746;
if(inst_13713){
var statearr_13758_13795 = state_13746__$1;
(statearr_13758_13795[(1)] = (9));

} else {
var statearr_13759_13796 = state_13746__$1;
(statearr_13759_13796[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (17))){
var state_13746__$1 = state_13746;
var statearr_13760_13797 = state_13746__$1;
(statearr_13760_13797[(2)] = initial_ch);

(statearr_13760_13797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (3))){
var inst_13744 = (state_13746[(2)]);
var state_13746__$1 = state_13746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13746__$1,inst_13744);
} else {
if((state_val_13747 === (12))){
var inst_13687 = (state_13746[(7)]);
var state_13746__$1 = state_13746;
if(cljs.core.truth_(inst_13687)){
var statearr_13761_13798 = state_13746__$1;
(statearr_13761_13798[(1)] = (16));

} else {
var statearr_13762_13799 = state_13746__$1;
(statearr_13762_13799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (2))){
var inst_13694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13695 = [open_ch,close_ch];
var inst_13696 = (new cljs.core.PersistentVector(null,2,(5),inst_13694,inst_13695,null));
var state_13746__$1 = state_13746;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13746__$1,(4),inst_13696);
} else {
if((state_val_13747 === (19))){
var inst_13699 = (state_13746[(10)]);
var state_13746__$1 = state_13746;
var statearr_13763_13800 = state_13746__$1;
(statearr_13763_13800[(2)] = inst_13699);

(statearr_13763_13800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (11))){
var inst_13740 = (state_13746[(2)]);
var state_13746__$1 = state_13746;
var statearr_13764_13801 = state_13746__$1;
(statearr_13764_13801[(2)] = inst_13740);

(statearr_13764_13801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (9))){
var inst_13717 = (state_13746[(11)]);
var inst_13698 = (state_13746[(8)]);
var inst_13716 = cljs.core.nth.call(null,inst_13698,(0),null);
var inst_13717__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_13716);
var state_13746__$1 = (function (){var statearr_13765 = state_13746;
(statearr_13765[(11)] = inst_13717__$1);

return statearr_13765;
})();
if(cljs.core.truth_(inst_13717__$1)){
var statearr_13766_13802 = state_13746__$1;
(statearr_13766_13802[(1)] = (12));

} else {
var statearr_13767_13803 = state_13746__$1;
(statearr_13767_13803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (5))){
var inst_13698 = (state_13746[(8)]);
var inst_13704 = cljs.core.nth.call(null,inst_13698,(0),null);
var inst_13705 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_13706 = [ws_chan];
var inst_13707 = cljs.core.PersistentHashMap.fromArrays(inst_13705,inst_13706);
var state_13746__$1 = (function (){var statearr_13768 = state_13746;
(statearr_13768[(12)] = inst_13704);

return statearr_13768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13746__$1,(8),initial_ch,inst_13707);
} else {
if((state_val_13747 === (14))){
var inst_13730 = (state_13746[(2)]);
var inst_13731 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_13732 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_13746__$1 = (function (){var statearr_13769 = state_13746;
(statearr_13769[(13)] = inst_13731);

(statearr_13769[(14)] = inst_13730);

return statearr_13769;
})();
var statearr_13770_13804 = state_13746__$1;
(statearr_13770_13804[(2)] = inst_13732);

(statearr_13770_13804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (16))){
var state_13746__$1 = state_13746;
var statearr_13771_13805 = state_13746__$1;
(statearr_13771_13805[(2)] = read_ch__$1);

(statearr_13771_13805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (10))){
var inst_13700 = (state_13746[(9)]);
var inst_13734 = cljs.core._EQ_.call(null,inst_13700,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_13746__$1 = state_13746;
if(inst_13734){
var statearr_13772_13806 = state_13746__$1;
(statearr_13772_13806[(1)] = (19));

} else {
var statearr_13773_13807 = state_13746__$1;
(statearr_13773_13807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13747 === (18))){
var inst_13717 = (state_13746[(11)]);
var inst_13722 = (state_13746[(2)]);
var inst_13723 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_13724 = [inst_13717];
var inst_13725 = cljs.core.PersistentHashMap.fromArrays(inst_13723,inst_13724);
var state_13746__$1 = state_13746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13746__$1,(15),inst_13722,inst_13725);
} else {
if((state_val_13747 === (8))){
var inst_13709 = (state_13746[(2)]);
var inst_13710 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_13687 = true;
var state_13746__$1 = (function (){var statearr_13774 = state_13746;
(statearr_13774[(15)] = inst_13709);

(statearr_13774[(16)] = inst_13710);

(statearr_13774[(7)] = inst_13687);

return statearr_13774;
})();
var statearr_13775_13808 = state_13746__$1;
(statearr_13775_13808[(2)] = null);

(statearr_13775_13808[(1)] = (2));


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
});})(c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__7965__auto__,c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__7966__auto__ = null;
var chord$client$state_machine__7966__auto____0 = (function (){
var statearr_13779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13779[(0)] = chord$client$state_machine__7966__auto__);

(statearr_13779[(1)] = (1));

return statearr_13779;
});
var chord$client$state_machine__7966__auto____1 = (function (state_13746){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_13746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e13780){if((e13780 instanceof Object)){
var ex__7969__auto__ = e13780;
var statearr_13781_13809 = state_13746;
(statearr_13781_13809[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13810 = state_13746;
state_13746 = G__13810;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
chord$client$state_machine__7966__auto__ = function(state_13746){
switch(arguments.length){
case 0:
return chord$client$state_machine__7966__auto____0.call(this);
case 1:
return chord$client$state_machine__7966__auto____1.call(this,state_13746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__7966__auto____0;
chord$client$state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__7966__auto____1;
return chord$client$state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
})();
var state__8079__auto__ = (function (){var statearr_13782 = f__8078__auto__.call(null);
(statearr_13782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___13786);

return statearr_13782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___13786,ws_chan,initial_ch,web_socket,map__13685,map__13685__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__13682,map__13683,map__13683__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq13679){
var G__13680 = cljs.core.first.call(null,seq13679);
var seq13679__$1 = cljs.core.next.call(null,seq13679);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__13680,seq13679__$1);
});

//# sourceMappingURL=client.js.map?rel=1496645230774