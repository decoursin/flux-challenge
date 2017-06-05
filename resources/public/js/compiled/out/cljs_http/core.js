// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__10863 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__10868 = null;
var count__10869 = (0);
var i__10870 = (0);
while(true){
if((i__10870 < count__10869)){
var h_name = cljs.core._nth.call(null,chunk__10868,i__10870);
var seq__10871_10875 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__10872_10876 = null;
var count__10873_10877 = (0);
var i__10874_10878 = (0);
while(true){
if((i__10874_10878 < count__10873_10877)){
var h_val_10879 = cljs.core._nth.call(null,chunk__10872_10876,i__10874_10878);
xhr.headers.set(h_name,h_val_10879);

var G__10880 = seq__10871_10875;
var G__10881 = chunk__10872_10876;
var G__10882 = count__10873_10877;
var G__10883 = (i__10874_10878 + (1));
seq__10871_10875 = G__10880;
chunk__10872_10876 = G__10881;
count__10873_10877 = G__10882;
i__10874_10878 = G__10883;
continue;
} else {
var temp__4425__auto___10884 = cljs.core.seq.call(null,seq__10871_10875);
if(temp__4425__auto___10884){
var seq__10871_10885__$1 = temp__4425__auto___10884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10871_10885__$1)){
var c__5491__auto___10886 = cljs.core.chunk_first.call(null,seq__10871_10885__$1);
var G__10887 = cljs.core.chunk_rest.call(null,seq__10871_10885__$1);
var G__10888 = c__5491__auto___10886;
var G__10889 = cljs.core.count.call(null,c__5491__auto___10886);
var G__10890 = (0);
seq__10871_10875 = G__10887;
chunk__10872_10876 = G__10888;
count__10873_10877 = G__10889;
i__10874_10878 = G__10890;
continue;
} else {
var h_val_10891 = cljs.core.first.call(null,seq__10871_10885__$1);
xhr.headers.set(h_name,h_val_10891);

var G__10892 = cljs.core.next.call(null,seq__10871_10885__$1);
var G__10893 = null;
var G__10894 = (0);
var G__10895 = (0);
seq__10871_10875 = G__10892;
chunk__10872_10876 = G__10893;
count__10873_10877 = G__10894;
i__10874_10878 = G__10895;
continue;
}
} else {
}
}
break;
}

var G__10896 = seq__10863;
var G__10897 = chunk__10868;
var G__10898 = count__10869;
var G__10899 = (i__10870 + (1));
seq__10863 = G__10896;
chunk__10868 = G__10897;
count__10869 = G__10898;
i__10870 = G__10899;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10863);
if(temp__4425__auto__){
var seq__10863__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10863__$1)){
var c__5491__auto__ = cljs.core.chunk_first.call(null,seq__10863__$1);
var G__10900 = cljs.core.chunk_rest.call(null,seq__10863__$1);
var G__10901 = c__5491__auto__;
var G__10902 = cljs.core.count.call(null,c__5491__auto__);
var G__10903 = (0);
seq__10863 = G__10900;
chunk__10868 = G__10901;
count__10869 = G__10902;
i__10870 = G__10903;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__10863__$1);
var seq__10864_10904 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__10865_10905 = null;
var count__10866_10906 = (0);
var i__10867_10907 = (0);
while(true){
if((i__10867_10907 < count__10866_10906)){
var h_val_10908 = cljs.core._nth.call(null,chunk__10865_10905,i__10867_10907);
xhr.headers.set(h_name,h_val_10908);

var G__10909 = seq__10864_10904;
var G__10910 = chunk__10865_10905;
var G__10911 = count__10866_10906;
var G__10912 = (i__10867_10907 + (1));
seq__10864_10904 = G__10909;
chunk__10865_10905 = G__10910;
count__10866_10906 = G__10911;
i__10867_10907 = G__10912;
continue;
} else {
var temp__4425__auto___10913__$1 = cljs.core.seq.call(null,seq__10864_10904);
if(temp__4425__auto___10913__$1){
var seq__10864_10914__$1 = temp__4425__auto___10913__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10864_10914__$1)){
var c__5491__auto___10915 = cljs.core.chunk_first.call(null,seq__10864_10914__$1);
var G__10916 = cljs.core.chunk_rest.call(null,seq__10864_10914__$1);
var G__10917 = c__5491__auto___10915;
var G__10918 = cljs.core.count.call(null,c__5491__auto___10915);
var G__10919 = (0);
seq__10864_10904 = G__10916;
chunk__10865_10905 = G__10917;
count__10866_10906 = G__10918;
i__10867_10907 = G__10919;
continue;
} else {
var h_val_10920 = cljs.core.first.call(null,seq__10864_10914__$1);
xhr.headers.set(h_name,h_val_10920);

var G__10921 = cljs.core.next.call(null,seq__10864_10914__$1);
var G__10922 = null;
var G__10923 = (0);
var G__10924 = (0);
seq__10864_10904 = G__10921;
chunk__10865_10905 = G__10922;
count__10866_10906 = G__10923;
i__10867_10907 = G__10924;
continue;
}
} else {
}
}
break;
}

var G__10925 = cljs.core.next.call(null,seq__10863__$1);
var G__10926 = null;
var G__10927 = (0);
var G__10928 = (0);
seq__10863 = G__10925;
chunk__10868 = G__10926;
count__10869 = G__10927;
i__10870 = G__10928;
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
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__10930 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__10930)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__10930)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__10930)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__10930)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__10930)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__10930)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__10931){
var map__10935 = p__10931;
var map__10935__$1 = ((((!((map__10935 == null)))?((((map__10935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10935):map__10935);
var request = map__10935__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__10935__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__10935__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__10935__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4688__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__10937 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__10937,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__10937,response_type);

G__10937.setTimeoutInterval(timeout);

G__10937.setWithCredentials(send_credentials);

return G__10937;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__10938){
var map__10965 = p__10938;
var map__10965__$1 = ((((!((map__10965 == null)))?((((map__10965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10965):map__10965);
var request = map__10965__$1;
var request_method = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__10965__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4688__auto__ = request_method;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__8077__auto___10991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_10977){
var state_val_10978 = (state_10977[(1)]);
if((state_val_10978 === (1))){
var state_10977__$1 = state_10977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10977__$1,(2),cancel);
} else {
if((state_val_10978 === (2))){
var inst_10968 = (state_10977[(2)]);
var inst_10969 = xhr__$1.isComplete();
var inst_10970 = cljs.core.not.call(null,inst_10969);
var state_10977__$1 = (function (){var statearr_10979 = state_10977;
(statearr_10979[(7)] = inst_10968);

return statearr_10979;
})();
if(inst_10970){
var statearr_10980_10992 = state_10977__$1;
(statearr_10980_10992[(1)] = (3));

} else {
var statearr_10981_10993 = state_10977__$1;
(statearr_10981_10993[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (3))){
var inst_10972 = xhr__$1.abort();
var state_10977__$1 = state_10977;
var statearr_10982_10994 = state_10977__$1;
(statearr_10982_10994[(2)] = inst_10972);

(statearr_10982_10994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (4))){
var state_10977__$1 = state_10977;
var statearr_10983_10995 = state_10977__$1;
(statearr_10983_10995[(2)] = null);

(statearr_10983_10995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10978 === (5))){
var inst_10975 = (state_10977[(2)]);
var state_10977__$1 = state_10977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10977__$1,inst_10975);
} else {
return null;
}
}
}
}
}
});})(c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__7965__auto__,c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__7966__auto__ = null;
var cljs_http$core$xhr_$_state_machine__7966__auto____0 = (function (){
var statearr_10987 = [null,null,null,null,null,null,null,null];
(statearr_10987[(0)] = cljs_http$core$xhr_$_state_machine__7966__auto__);

(statearr_10987[(1)] = (1));

return statearr_10987;
});
var cljs_http$core$xhr_$_state_machine__7966__auto____1 = (function (state_10977){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_10977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e10988){if((e10988 instanceof Object)){
var ex__7969__auto__ = e10988;
var statearr_10989_10996 = state_10977;
(statearr_10989_10996[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10997 = state_10977;
state_10977 = G__10997;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__7966__auto__ = function(state_10977){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__7966__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__7966__auto____1.call(this,state_10977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__7966__auto____0;
cljs_http$core$xhr_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__7966__auto____1;
return cljs_http$core$xhr_$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__8079__auto__ = (function (){var statearr_10990 = f__8078__auto__.call(null);
(statearr_10990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___10991);

return statearr_10990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___10991,channel,request_url,method,headers__$1,xhr__$1,map__10965,map__10965__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__10998){
var map__11015 = p__10998;
var map__11015__$1 = ((((!((map__11015 == null)))?((((map__11015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11015):map__11015);
var request = map__11015__$1;
var timeout = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__11015__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_11031 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_11031], null));

if(cljs.core.truth_(cancel)){
var c__8077__auto___11032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel){
return (function (){
var f__8078__auto__ = (function (){var switch__7965__auto__ = ((function (c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel){
return (function (state_11021){
var state_val_11022 = (state_11021[(1)]);
if((state_val_11022 === (1))){
var state_11021__$1 = state_11021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11021__$1,(2),cancel);
} else {
if((state_val_11022 === (2))){
var inst_11018 = (state_11021[(2)]);
var inst_11019 = jsonp__$1.cancel(req_11031);
var state_11021__$1 = (function (){var statearr_11023 = state_11021;
(statearr_11023[(7)] = inst_11018);

return statearr_11023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11021__$1,inst_11019);
} else {
return null;
}
}
});})(c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__7965__auto__,c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__7966__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__7966__auto____0 = (function (){
var statearr_11027 = [null,null,null,null,null,null,null,null];
(statearr_11027[(0)] = cljs_http$core$jsonp_$_state_machine__7966__auto__);

(statearr_11027[(1)] = (1));

return statearr_11027;
});
var cljs_http$core$jsonp_$_state_machine__7966__auto____1 = (function (state_11021){
while(true){
var ret_value__7967__auto__ = (function (){try{while(true){
var result__7968__auto__ = switch__7965__auto__.call(null,state_11021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7968__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object)){
var ex__7969__auto__ = e11028;
var statearr_11029_11033 = state_11021;
(statearr_11029_11033[(5)] = ex__7969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11034 = state_11021;
state_11021 = G__11034;
continue;
} else {
return ret_value__7967__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__7966__auto__ = function(state_11021){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__7966__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__7966__auto____1.call(this,state_11021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__7966__auto____0;
cljs_http$core$jsonp_$_state_machine__7966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__7966__auto____1;
return cljs_http$core$jsonp_$_state_machine__7966__auto__;
})()
;})(switch__7965__auto__,c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel))
})();
var state__8079__auto__ = (function (){var statearr_11030 = f__8078__auto__.call(null);
(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8077__auto___11032);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8079__auto__);
});})(c__8077__auto___11032,req_11031,channel,jsonp__$1,map__11015,map__11015__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__11035){
var map__11038 = p__11035;
var map__11038__$1 = ((((!((map__11038 == null)))?((((map__11038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11038):map__11038);
var request__$1 = map__11038__$1;
var request_method = cljs.core.get.call(null,map__11038__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1496645226675