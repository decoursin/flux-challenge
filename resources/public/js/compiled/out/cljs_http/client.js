// Compiled by ClojureScript 1.7.189 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4676__auto__ = v;
if(cljs.core.truth_(and__4676__auto__)){
return (v > (0));
} else {
return and__4676__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__13373_SHARP_,p2__13372_SHARP_){
var vec__13375 = clojure.string.split.call(null,p2__13372_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__13375,(0),null);
var v = cljs.core.nth.call(null,vec__13375,(1),null);
return cljs.core.assoc.call(null,p1__13373_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__13376_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__13376_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__13377){
var vec__13379 = p__13377;
var k = cljs.core.nth.call(null,vec__13379,(0),null);
var v = cljs.core.nth.call(null,vec__13379,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__13380_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__13380_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4676__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4676__auto__){
var and__4676__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4676__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__13381_SHARP_){
return cljs_http.client.decode_body.call(null,p1__13381_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13386 = arguments.length;
var i__5747__auto___13387 = (0);
while(true){
if((i__5747__auto___13387 < len__5746__auto___13386)){
args__5753__auto__.push((arguments[i__5747__auto___13387]));

var G__13388 = (i__5747__auto___13387 + (1));
i__5747__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__13384){
var vec__13385 = p__13384;
var default_headers = cljs.core.nth.call(null,vec__13385,(0),null);
return ((function (vec__13385,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4688__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__13385,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq13382){
var G__13383 = cljs.core.first.call(null,seq13382);
var seq13382__$1 = cljs.core.next.call(null,seq13382);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__13383,seq13382__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13393 = arguments.length;
var i__5747__auto___13394 = (0);
while(true){
if((i__5747__auto___13394 < len__5746__auto___13393)){
args__5753__auto__.push((arguments[i__5747__auto___13394]));

var G__13395 = (i__5747__auto___13394 + (1));
i__5747__auto___13394 = G__13395;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__13391){
var vec__13392 = p__13391;
var accept = cljs.core.nth.call(null,vec__13392,(0),null);
return ((function (vec__13392,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4688__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__13392,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq13389){
var G__13390 = cljs.core.first.call(null,seq13389);
var seq13389__$1 = cljs.core.next.call(null,seq13389);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__13390,seq13389__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13400 = arguments.length;
var i__5747__auto___13401 = (0);
while(true){
if((i__5747__auto___13401 < len__5746__auto___13400)){
args__5753__auto__.push((arguments[i__5747__auto___13401]));

var G__13402 = (i__5747__auto___13401 + (1));
i__5747__auto___13401 = G__13402;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__13398){
var vec__13399 = p__13398;
var content_type = cljs.core.nth.call(null,vec__13399,(0),null);
return ((function (vec__13399,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4688__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__13399,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq13396){
var G__13397 = cljs.core.first.call(null,seq13396);
var seq13396__$1 = cljs.core.next.call(null,seq13396);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__13397,seq13396__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__13405 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__13405__$1 = ((((!((map__13405 == null)))?((((map__13405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13405):map__13405);
var encoding = cljs.core.get.call(null,map__13405__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__13405__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__13411 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__13411__$1 = ((((!((map__13411 == null)))?((((map__13411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13411):map__13411);
var decoding = cljs.core.get.call(null,map__13411__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__13411__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__13411,map__13411__$1,decoding,decoding_opts){
return (function (p1__13407_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__13407_SHARP_,decoding,decoding_opts);
});})(map__13411,map__13411__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__13411,map__13411__$1,decoding,decoding_opts,transit_decode){
return (function (p1__13408_SHARP_){
return cljs_http.client.decode_body.call(null,p1__13408_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__13411,map__13411__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__13413_SHARP_){
return cljs_http.client.decode_body.call(null,p1__13413_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__13417){
var map__13418 = p__13417;
var map__13418__$1 = ((((!((map__13418 == null)))?((((map__13418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13418):map__13418);
var req = map__13418__$1;
var query_params = cljs.core.get.call(null,map__13418__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__13423){
var map__13424 = p__13423;
var map__13424__$1 = ((((!((map__13424 == null)))?((((map__13424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13424):map__13424);
var request = map__13424__$1;
var form_params = cljs.core.get.call(null,map__13424__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__13424__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__13424__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4676__auto__ = form_params;
if(cljs.core.truth_(and__4676__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4676__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__13432_13438 = cljs.core.seq.call(null,params);
var chunk__13433_13439 = null;
var count__13434_13440 = (0);
var i__13435_13441 = (0);
while(true){
if((i__13435_13441 < count__13434_13440)){
var vec__13436_13442 = cljs.core._nth.call(null,chunk__13433_13439,i__13435_13441);
var k_13443 = cljs.core.nth.call(null,vec__13436_13442,(0),null);
var v_13444 = cljs.core.nth.call(null,vec__13436_13442,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_13444)){
form_data.append(cljs.core.name.call(null,k_13443),cljs.core.first.call(null,v_13444),cljs.core.second.call(null,v_13444));
} else {
form_data.append(cljs.core.name.call(null,k_13443),v_13444);
}

var G__13445 = seq__13432_13438;
var G__13446 = chunk__13433_13439;
var G__13447 = count__13434_13440;
var G__13448 = (i__13435_13441 + (1));
seq__13432_13438 = G__13445;
chunk__13433_13439 = G__13446;
count__13434_13440 = G__13447;
i__13435_13441 = G__13448;
continue;
} else {
var temp__4425__auto___13449 = cljs.core.seq.call(null,seq__13432_13438);
if(temp__4425__auto___13449){
var seq__13432_13450__$1 = temp__4425__auto___13449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13432_13450__$1)){
var c__5491__auto___13451 = cljs.core.chunk_first.call(null,seq__13432_13450__$1);
var G__13452 = cljs.core.chunk_rest.call(null,seq__13432_13450__$1);
var G__13453 = c__5491__auto___13451;
var G__13454 = cljs.core.count.call(null,c__5491__auto___13451);
var G__13455 = (0);
seq__13432_13438 = G__13452;
chunk__13433_13439 = G__13453;
count__13434_13440 = G__13454;
i__13435_13441 = G__13455;
continue;
} else {
var vec__13437_13456 = cljs.core.first.call(null,seq__13432_13450__$1);
var k_13457 = cljs.core.nth.call(null,vec__13437_13456,(0),null);
var v_13458 = cljs.core.nth.call(null,vec__13437_13456,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_13458)){
form_data.append(cljs.core.name.call(null,k_13457),cljs.core.first.call(null,v_13458),cljs.core.second.call(null,v_13458));
} else {
form_data.append(cljs.core.name.call(null,k_13457),v_13458);
}

var G__13459 = cljs.core.next.call(null,seq__13432_13450__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__13432_13438 = G__13459;
chunk__13433_13439 = G__13460;
count__13434_13440 = G__13461;
i__13435_13441 = G__13462;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__13466){
var map__13467 = p__13466;
var map__13467__$1 = ((((!((map__13467 == null)))?((((map__13467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13467):map__13467);
var request = map__13467__$1;
var multipart_params = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4676__auto__ = multipart_params;
if(cljs.core.truth_(and__4676__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4676__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__13469_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__13469_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__13474){
var map__13475 = p__13474;
var map__13475__$1 = ((((!((map__13475 == null)))?((((map__13475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13475):map__13475);
var req = map__13475__$1;
var query_params = cljs.core.get.call(null,map__13475__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__13475,map__13475__$1,req,query_params){
return (function (p1__13470_SHARP_){
return cljs.core.merge.call(null,p1__13470_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__13475,map__13475__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13481 = arguments.length;
var i__5747__auto___13482 = (0);
while(true){
if((i__5747__auto___13482 < len__5746__auto___13481)){
args__5753__auto__.push((arguments[i__5747__auto___13482]));

var G__13483 = (i__5747__auto___13482 + (1));
i__5747__auto___13482 = G__13483;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__13479){
var vec__13480 = p__13479;
var credentials = cljs.core.nth.call(null,vec__13480,(0),null);
return ((function (vec__13480,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4688__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__13480,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq13477){
var G__13478 = cljs.core.first.call(null,seq13477);
var seq13477__$1 = cljs.core.next.call(null,seq13477);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__13478,seq13477__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13488 = arguments.length;
var i__5747__auto___13489 = (0);
while(true){
if((i__5747__auto___13489 < len__5746__auto___13488)){
args__5753__auto__.push((arguments[i__5747__auto___13489]));

var G__13490 = (i__5747__auto___13489 + (1));
i__5747__auto___13489 = G__13490;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13486){
var vec__13487 = p__13486;
var req = cljs.core.nth.call(null,vec__13487,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq13484){
var G__13485 = cljs.core.first.call(null,seq13484);
var seq13484__$1 = cljs.core.next.call(null,seq13484);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__13485,seq13484__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13495 = arguments.length;
var i__5747__auto___13496 = (0);
while(true){
if((i__5747__auto___13496 < len__5746__auto___13495)){
args__5753__auto__.push((arguments[i__5747__auto___13496]));

var G__13497 = (i__5747__auto___13496 + (1));
i__5747__auto___13496 = G__13497;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13493){
var vec__13494 = p__13493;
var req = cljs.core.nth.call(null,vec__13494,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq13491){
var G__13492 = cljs.core.first.call(null,seq13491);
var seq13491__$1 = cljs.core.next.call(null,seq13491);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__13492,seq13491__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13502 = arguments.length;
var i__5747__auto___13503 = (0);
while(true){
if((i__5747__auto___13503 < len__5746__auto___13502)){
args__5753__auto__.push((arguments[i__5747__auto___13503]));

var G__13504 = (i__5747__auto___13503 + (1));
i__5747__auto___13503 = G__13504;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13500){
var vec__13501 = p__13500;
var req = cljs.core.nth.call(null,vec__13501,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq13498){
var G__13499 = cljs.core.first.call(null,seq13498);
var seq13498__$1 = cljs.core.next.call(null,seq13498);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__13499,seq13498__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13509 = arguments.length;
var i__5747__auto___13510 = (0);
while(true){
if((i__5747__auto___13510 < len__5746__auto___13509)){
args__5753__auto__.push((arguments[i__5747__auto___13510]));

var G__13511 = (i__5747__auto___13510 + (1));
i__5747__auto___13510 = G__13511;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13507){
var vec__13508 = p__13507;
var req = cljs.core.nth.call(null,vec__13508,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq13505){
var G__13506 = cljs.core.first.call(null,seq13505);
var seq13505__$1 = cljs.core.next.call(null,seq13505);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__13506,seq13505__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13516 = arguments.length;
var i__5747__auto___13517 = (0);
while(true){
if((i__5747__auto___13517 < len__5746__auto___13516)){
args__5753__auto__.push((arguments[i__5747__auto___13517]));

var G__13518 = (i__5747__auto___13517 + (1));
i__5747__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13514){
var vec__13515 = p__13514;
var req = cljs.core.nth.call(null,vec__13515,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq13512){
var G__13513 = cljs.core.first.call(null,seq13512);
var seq13512__$1 = cljs.core.next.call(null,seq13512);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__13513,seq13512__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13523 = arguments.length;
var i__5747__auto___13524 = (0);
while(true){
if((i__5747__auto___13524 < len__5746__auto___13523)){
args__5753__auto__.push((arguments[i__5747__auto___13524]));

var G__13525 = (i__5747__auto___13524 + (1));
i__5747__auto___13524 = G__13525;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13521){
var vec__13522 = p__13521;
var req = cljs.core.nth.call(null,vec__13522,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq13519){
var G__13520 = cljs.core.first.call(null,seq13519);
var seq13519__$1 = cljs.core.next.call(null,seq13519);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__13520,seq13519__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13530 = arguments.length;
var i__5747__auto___13531 = (0);
while(true){
if((i__5747__auto___13531 < len__5746__auto___13530)){
args__5753__auto__.push((arguments[i__5747__auto___13531]));

var G__13532 = (i__5747__auto___13531 + (1));
i__5747__auto___13531 = G__13532;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13528){
var vec__13529 = p__13528;
var req = cljs.core.nth.call(null,vec__13529,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq13526){
var G__13527 = cljs.core.first.call(null,seq13526);
var seq13526__$1 = cljs.core.next.call(null,seq13526);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__13527,seq13526__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13537 = arguments.length;
var i__5747__auto___13538 = (0);
while(true){
if((i__5747__auto___13538 < len__5746__auto___13537)){
args__5753__auto__.push((arguments[i__5747__auto___13538]));

var G__13539 = (i__5747__auto___13538 + (1));
i__5747__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13535){
var vec__13536 = p__13535;
var req = cljs.core.nth.call(null,vec__13536,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq13533){
var G__13534 = cljs.core.first.call(null,seq13533);
var seq13533__$1 = cljs.core.next.call(null,seq13533);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__13534,seq13533__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13544 = arguments.length;
var i__5747__auto___13545 = (0);
while(true){
if((i__5747__auto___13545 < len__5746__auto___13544)){
args__5753__auto__.push((arguments[i__5747__auto___13545]));

var G__13546 = (i__5747__auto___13545 + (1));
i__5747__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((1) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5754__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__13542){
var vec__13543 = p__13542;
var req = cljs.core.nth.call(null,vec__13543,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq13540){
var G__13541 = cljs.core.first.call(null,seq13540);
var seq13540__$1 = cljs.core.next.call(null,seq13540);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__13541,seq13540__$1);
});

//# sourceMappingURL=client.js.map?rel=1496645230407