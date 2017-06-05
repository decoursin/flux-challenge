// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.handlers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('schema.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('decoursin.db');
goog.require('re_frame.core');
goog.require('decoursin.deque');
/**
 * throw an exception if db doesn't match the schema.
 */
decoursin.handlers.check_and_throw = (function decoursin$handlers$check_and_throw(a_schema,db){
var temp__4423__auto__ = schema.core.check.call(null,a_schema,db);
if(cljs.core.truth_(temp__4423__auto__)){
var problems = temp__4423__auto__;
cljs.core.println.call(null,"db: ",db);

cljs.core.println.call(null,"the-schema: ",a_schema);

throw (new Error([cljs.core.str("schema check failed: "),cljs.core.str(problems)].join('')));
} else {
return null;
}
});
decoursin.handlers.check_schema_mw = re_frame.core.after.call(null,cljs.core.partial.call(null,decoursin.handlers.check_and_throw,decoursin.db.schema));
decoursin.handlers.standard_middleware = ((goog.DEBUG)?cljs.core.comp.call(null,re_frame.core.debug,decoursin.handlers.check_schema_mw):null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),re_frame.core.debug,(function (){
return decoursin.db.app_db;
}));
var ufv___8867 = schema.utils.use_fn_validation;
var output_schema8860_8868 = schema.core.Int;
var input_schema8861_8869 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"siths","siths",-1466994359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker8862_8870 = schema.core.checker.call(null,input_schema8861_8869);
var output_checker8863_8871 = schema.core.checker.call(null,output_schema8860_8868);
var ret__7439__auto___8872 = /**
 * Inputs: [siths id direction]
 *   Returns: s/Int
 */
decoursin.handlers.current_sith_position = ((function (ufv___8867,output_schema8860_8868,input_schema8861_8869,input_checker8862_8870,output_checker8863_8871){
return (function decoursin$handlers$current_sith_position(G__8864,G__8865,G__8866){
var validate__5995__auto__ = ufv___8867.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___8873 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8864,G__8865,G__8866], null);
var temp__4425__auto___8874 = input_checker8862_8870.call(null,args__5996__auto___8873);
if(cljs.core.truth_(temp__4425__auto___8874)){
var error__5997__auto___8875 = temp__4425__auto___8874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"current-sith-position","current-sith-position",-1218766598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),cljs.core.pr_str.call(null,error__5997__auto___8875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8861_8869,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___8873,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8875], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var siths = G__8864;
var id = G__8865;
var direction = G__8866;
while(true){

if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,siths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))){
return (0);
} else {
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,siths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))){
return (1);
} else {
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,siths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))){
return (2);
} else {
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,siths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))){
return (3);
} else {
if(cljs.core._EQ_.call(null,id,cljs.core.get_in.call(null,siths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))){
return (4);
} else {
if(cljs.core.truth_((function (){var and__4676__auto__ = decoursin.deque.is_empty_QMARK_.call(null,siths);
if(cljs.core.truth_(and__4676__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction);
} else {
return and__4676__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__4676__auto__ = decoursin.deque.is_empty_QMARK_.call(null,siths);
if(cljs.core.truth_(and__4676__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1565245570),direction);
} else {
return and__4676__auto__;
}
})())){
return (5);
} else {
return (-9999);

}
}
}
}
}
}
}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___8876 = output_checker8863_8871.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___8876)){
var error__5997__auto___8877 = temp__4425__auto___8876;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"current-sith-position","current-sith-position",-1218766598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)),cljs.core.pr_str.call(null,error__5997__auto___8877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8860_8868,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8877], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___8867,output_schema8860_8868,input_schema8861_8869,input_checker8862_8870,output_checker8863_8871))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.current_sith_position),schema.core.make_fn_schema.call(null,output_schema8860_8868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8861_8869], null)));

var ufv___8884 = schema.utils.use_fn_validation;
var output_schema8878_8885 = schema.core.Int;
var input_schema8879_8886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"siths","siths",-1466994359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"sith","sith",1262078936,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker8880_8887 = schema.core.checker.call(null,input_schema8879_8886);
var output_checker8881_8888 = schema.core.checker.call(null,output_schema8878_8885);
var ret__7439__auto___8889 = /**
 * Inputs: [siths sith]
 *   Returns: s/Int
 * 
 *   Returns the location in the siths
 * where the sith should be placed [0-4],
 * determined by where it's apprentice
 * exclusive or master is located.
 */
decoursin.handlers.find_location = ((function (ufv___8884,output_schema8878_8885,input_schema8879_8886,input_checker8880_8887,output_checker8881_8888){
return (function decoursin$handlers$find_location(G__8882,G__8883){
var validate__5995__auto__ = ufv___8884.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___8890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8882,G__8883], null);
var temp__4425__auto___8891 = input_checker8880_8887.call(null,args__5996__auto___8890);
if(cljs.core.truth_(temp__4425__auto___8891)){
var error__5997__auto___8892 = temp__4425__auto___8891;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-location","find-location",1439068698,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the location in the siths\n   where the sith should be placed [0-4],\n   determined by where it's apprentice\n   exclusive or master is located."], null)),cljs.core.pr_str.call(null,error__5997__auto___8892)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8879_8886,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___8890,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8892], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var siths = G__8882;
var sith = G__8883;
while(true){
var direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sith);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction)){
return ((1) + decoursin.handlers.current_sith_position.call(null,siths,cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"master","master",779988698),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),direction));
} else {
return ((-1) + decoursin.handlers.current_sith_position.call(null,siths,cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apprentice","apprentice",-1838808462),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),direction));
}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___8893 = output_checker8881_8888.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___8893)){
var error__5997__auto___8894 = temp__4425__auto___8893;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-location","find-location",1439068698,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns the location in the siths\n   where the sith should be placed [0-4],\n   determined by where it's apprentice\n   exclusive or master is located."], null)),cljs.core.pr_str.call(null,error__5997__auto___8894)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8878_8885,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8894], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___8884,output_schema8878_8885,input_schema8879_8886,input_checker8880_8887,output_checker8881_8888))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.find_location),schema.core.make_fn_schema.call(null,output_schema8878_8885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8879_8886], null)));

re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-siths","update-siths",1624299904),decoursin.handlers.standard_middleware,(function (db,p__8895){
var vec__8896 = p__8895;
var _ = cljs.core.nth.call(null,vec__8896,(0),null);
var sith = cljs.core.nth.call(null,vec__8896,(1),null);

var siths = new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(db);
var location = decoursin.handlers.find_location.call(null,siths,sith);
var buttons = new cljs.core.Keyword(null,"buttons","buttons",-1953831197).cljs$core$IFn$_invoke$arity$1(db);
var sith__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"planet","planet",276671984).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homeworld","homeworld",1090129115),new cljs.core.Keyword(null,"name","name",1843675177)], null))))?cljs.core.assoc.call(null,sith,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),true):sith);
var db__$1 = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths))?cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"requests","requests",-733055638),decoursin.db.blank_requests_map):cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requests","requests",-733055638),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sith__$1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"channel","channel",734187692),null], null)));
return cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"siths","siths",1187441410),decoursin.deque.assoc_sith.call(null,siths,location,sith__$1));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-pending-requests","update-pending-requests",-329128359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.handlers.standard_middleware,re_frame.core.path.call(null,new cljs.core.Keyword(null,"requests","requests",-733055638))], null),(function (requests,p__8897){
var vec__8898 = p__8897;
var _ = cljs.core.nth.call(null,vec__8898,(0),null);
var cancel_chan = cljs.core.nth.call(null,vec__8898,(1),null);
var direction = cljs.core.nth.call(null,vec__8898,(2),null);
var id = cljs.core.nth.call(null,vec__8898,(3),null);

return cljs.core.assoc.call(null,requests,direction,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"channel","channel",734187692),cancel_chan], null));
}));
var ufv___8904 = schema.utils.use_fn_validation;
var output_schema8899_8905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.async.impl.channels.ManyToManyChannel,"ch1"),schema.core.one.call(null,cljs.core.async.impl.channels.ManyToManyChannel,"ch2")], null);
var input_schema8900_8906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Int,cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Int","s/Int",-2116888657,null)], null)))], null);
var input_checker8901_8907 = schema.core.checker.call(null,input_schema8900_8906);
var output_checker8902_8908 = schema.core.checker.call(null,output_schema8899_8905);
var ret__7439__auto___8909 = /**
 * Inputs: [id :- s/Int]
 *   Returns: [(s/one ManyToManyChannel "ch1") (s/one ManyToManyChannel "ch2")]
 * 
 *   Fetch the sith from the server.
 */
decoursin.handlers.fetch_sith = ((function (ufv___8904,output_schema8899_8905,input_schema8900_8906,input_checker8901_8907,output_checker8902_8908){
return (function decoursin$handlers$fetch_sith(G__8903){
var validate__5995__auto__ = ufv___8904.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___8910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8903], null);
var temp__4425__auto___8911 = input_checker8901_8907.call(null,args__5996__auto___8910);
if(cljs.core.truth_(temp__4425__auto___8911)){
var error__5997__auto___8912 = temp__4425__auto___8911;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-sith","fetch-sith",-1816097533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"ManyToManyChannel","ManyToManyChannel",524378105,null),"ch1"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"ManyToManyChannel","ManyToManyChannel",524378105,null),"ch2")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the sith from the server."], null)),cljs.core.pr_str.call(null,error__5997__auto___8912)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8900_8906,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___8910,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8912], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var id = G__8903;
while(true){
var url = [cljs.core.str(document.location.origin),cljs.core.str("/dark-jedis/"),cljs.core.str(id)].join('');
var cancel_chan = cljs.core.async.chan.call(null,(5));
var sith_chan = cljs_http.client.get.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cancel_chan], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cancel_chan,sith_chan], null);
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___8913 = output_checker8902_8908.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___8913)){
var error__5997__auto___8914 = temp__4425__auto___8913;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"fetch-sith","fetch-sith",-1816097533,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"ManyToManyChannel","ManyToManyChannel",524378105,null),"ch1"),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.Symbol(null,"ManyToManyChannel","ManyToManyChannel",524378105,null),"ch2")], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fetch the sith from the server."], null)),cljs.core.pr_str.call(null,error__5997__auto___8914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8899_8905,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8914], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___8904,output_schema8899_8905,input_schema8900_8906,input_checker8901_8907,output_checker8902_8908))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.fetch_sith),schema.core.make_fn_schema.call(null,output_schema8899_8905,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8900_8906], null)));

var ufv___8965 = schema.utils.use_fn_validation;
var output_schema8915_8966 = decoursin.db.schema;
var input_schema8916_8967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker8917_8968 = schema.core.checker.call(null,input_schema8916_8967);
var output_checker8918_8969 = schema.core.checker.call(null,output_schema8915_8966);
var ret__7439__auto___8970 = /**
 * Inputs: [db [_ id direction location]]
 *   Returns: db/schema
 * 
 *   In Re-frame, to change the db after asynchronous waiting,
 * we must dispatch to a different handler to make the change;
 * for this reason, in the when clause below, we dispatch
 * to :update-siths and :update-pending-requests handlers. The
 * :update-pending-requests dispatch must occur before we resolve
 * the sith-channel using <!
 */
decoursin.handlers.handle_set_sith = ((function (ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969){
return (function decoursin$handlers$handle_set_sith(G__8919,G__8920){
var validate__5995__auto__ = ufv___8965.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___8971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8919,G__8920], null);
var temp__4425__auto___8972 = input_checker8917_8968.call(null,args__5996__auto___8971);
if(cljs.core.truth_(temp__4425__auto___8972)){
var error__5997__auto___8973 = temp__4425__auto___8972;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-set-sith","handle-set-sith",-1959183787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"In Re-frame, to change the db after asynchronous waiting,\n   we must dispatch to a different handler to make the change;\n   for this reason, in the when clause below, we dispatch\n   to :update-siths and :update-pending-requests handlers. The\n   :update-pending-requests dispatch must occur before we resolve\n   the sith-channel using <!"], null)),cljs.core.pr_str.call(null,error__5997__auto___8973)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8916_8967,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___8971,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8973], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var db = G__8919;
var G__8944 = G__8920;
var vec__8945 = G__8944;
var _ = cljs.core.nth.call(null,vec__8945,(0),null);
var id = cljs.core.nth.call(null,vec__8945,(1),null);
var direction = cljs.core.nth.call(null,vec__8945,(2),null);
var location = cljs.core.nth.call(null,vec__8945,(3),null);
var db__$1 = db;
var G__8944__$1 = G__8944;
while(true){
var db__$2 = db__$1;
var vec__8946 = G__8944__$1;
var ___$1 = cljs.core.nth.call(null,vec__8946,(0),null);
var id__$1 = cljs.core.nth.call(null,vec__8946,(1),null);
var direction__$1 = cljs.core.nth.call(null,vec__8946,(2),null);
var location__$1 = cljs.core.nth.call(null,vec__8946,(3),null);
var siths = new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(db__$2);
var pending = cljs.core.get.call(null,new cljs.core.Keyword(null,"requests","requests",-733055638).cljs$core$IFn$_invoke$arity$1(db__$2),direction__$1);
if(((id__$1 > (0))) && (cljs.core.not.call(null,decoursin.deque.in_QMARK_.call(null,siths,id__$1))) && (cljs.core.not_EQ_.call(null,id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pending))) && (cljs.core.not_any_QMARK_.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths))){
var vec__8947_8974 = decoursin.handlers.fetch_sith.call(null,id__$1);
var cancel_chan_8975 = cljs.core.nth.call(null,vec__8947_8974,(0),null);
var sith_chan_8976 = cljs.core.nth.call(null,vec__8947_8974,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-pending-requests","update-pending-requests",-329128359),cancel_chan_8975,direction__$1,id__$1], null));

var c__8721__auto___8977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969){
return (function (){
var f__8722__auto__ = (function (){var switch__8700__auto__ = ((function (c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969){
return (function (state_8956){
var state_val_8957 = (state_8956[(1)]);
if((state_val_8957 === (1))){
var state_8956__$1 = state_8956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8956__$1,(2),sith_chan_8976);
} else {
if((state_val_8957 === (2))){
var inst_8949 = (state_8956[(2)]);
var inst_8950 = cljs.core.assoc.call(null,inst_8949,new cljs.core.Keyword(null,"direction","direction",-633359395),direction__$1);
var inst_8951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8952 = [new cljs.core.Keyword(null,"update-siths","update-siths",1624299904),inst_8950];
var inst_8953 = (new cljs.core.PersistentVector(null,2,(5),inst_8951,inst_8952,null));
var inst_8954 = re_frame.core.dispatch.call(null,inst_8953);
var state_8956__$1 = state_8956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8956__$1,inst_8954);
} else {
return null;
}
}
});})(c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969))
;
return ((function (switch__8700__auto__,c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969){
return (function() {
var decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__ = null;
var decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____0 = (function (){
var statearr_8961 = [null,null,null,null,null,null,null];
(statearr_8961[(0)] = decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__);

(statearr_8961[(1)] = (1));

return statearr_8961;
});
var decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____1 = (function (state_8956){
while(true){
var ret_value__8702__auto__ = (function (){try{while(true){
var result__8703__auto__ = switch__8700__auto__.call(null,state_8956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8703__auto__;
}
break;
}
}catch (e8962){if((e8962 instanceof Object)){
var ex__8704__auto__ = e8962;
var statearr_8963_8978 = state_8956;
(statearr_8963_8978[(5)] = ex__8704__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8979 = state_8956;
state_8956 = G__8979;
continue;
} else {
return ret_value__8702__auto__;
}
break;
}
});
decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__ = function(state_8956){
switch(arguments.length){
case 0:
return decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____0.call(this);
case 1:
return decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____1.call(this,state_8956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__.cljs$core$IFn$_invoke$arity$0 = decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____0;
decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__.cljs$core$IFn$_invoke$arity$1 = decoursin$handlers$handle_set_sith_$_state_machine__8701__auto____1;
return decoursin$handlers$handle_set_sith_$_state_machine__8701__auto__;
})()
;})(switch__8700__auto__,c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969))
})();
var state__8723__auto__ = (function (){var statearr_8964 = f__8722__auto__.call(null);
(statearr_8964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8721__auto___8977);

return statearr_8964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8723__auto__);
});})(c__8721__auto___8977,vec__8947_8974,cancel_chan_8975,sith_chan_8976,siths,pending,db__$2,vec__8946,___$1,id__$1,direction__$1,location__$1,db,G__8944,vec__8945,_,id,direction,location,validate__5995__auto__,ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969))
);

} else {
}

return db__$2;
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___8980 = output_checker8918_8969.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___8980)){
var error__5997__auto___8981 = temp__4425__auto___8980;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-set-sith","handle-set-sith",-1959183787,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"In Re-frame, to change the db after asynchronous waiting,\n   we must dispatch to a different handler to make the change;\n   for this reason, in the when clause below, we dispatch\n   to :update-siths and :update-pending-requests handlers. The\n   :update-pending-requests dispatch must occur before we resolve\n   the sith-channel using <!"], null)),cljs.core.pr_str.call(null,error__5997__auto___8981)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8915_8966,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8981], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___8965,output_schema8915_8966,input_schema8916_8967,input_checker8917_8968,output_checker8918_8969))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.handle_set_sith),schema.core.make_fn_schema.call(null,output_schema8915_8966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8916_8967], null)));

re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-sith","set-sith",1130829758),decoursin.handlers.standard_middleware,decoursin.handlers.handle_set_sith);
var ufv___8987 = schema.utils.use_fn_validation;
var output_schema8982_8988 = schema.core.Any;
var input_schema8983_8989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.async.impl.channels.ManyToManyChannel,cljs.core.with_meta(new cljs.core.Symbol(null,"channel","channel",-1920248077,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ManyToManyChannel","ManyToManyChannel",524378105,null)], null)))], null);
var input_checker8984_8990 = schema.core.checker.call(null,input_schema8983_8989);
var output_checker8985_8991 = schema.core.checker.call(null,output_schema8982_8988);
var ret__7439__auto___8992 = /**
 * Inputs: [channel :- ManyToManyChannel]
 * 
 *   closing the cancel channel, cancels
 * the sith-chan. Search cljs-http issues for more
 */
decoursin.handlers.cancel_request_BANG_ = ((function (ufv___8987,output_schema8982_8988,input_schema8983_8989,input_checker8984_8990,output_checker8985_8991){
return (function decoursin$handlers$cancel_request_BANG_(G__8986){
var validate__5995__auto__ = ufv___8987.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___8993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8986], null);
var temp__4425__auto___8994 = input_checker8984_8990.call(null,args__5996__auto___8993);
if(cljs.core.truth_(temp__4425__auto___8994)){
var error__5997__auto___8995 = temp__4425__auto___8994;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-request!","cancel-request!",328982023,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"closing the cancel channel, cancels\n   the sith-chan. Search cljs-http issues for more"], null)),cljs.core.pr_str.call(null,error__5997__auto___8995)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8983_8989,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___8993,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8995], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var channel = G__8986;
while(true){
return cljs.core.async.close_BANG_.call(null,channel);
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___8996 = output_checker8985_8991.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___8996)){
var error__5997__auto___8997 = temp__4425__auto___8996;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-request!","cancel-request!",328982023,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"closing the cancel channel, cancels\n   the sith-chan. Search cljs-http issues for more"], null)),cljs.core.pr_str.call(null,error__5997__auto___8997)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8982_8988,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___8997], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___8987,output_schema8982_8988,input_schema8983_8989,input_checker8984_8990,output_checker8985_8991))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.cancel_request_BANG_),schema.core.make_fn_schema.call(null,output_schema8982_8988,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8983_8989], null)));

var ufv___9005 = schema.utils.use_fn_validation;
var output_schema8998_9006 = schema.core.Keyword;
var input_schema8999_9007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,decoursin.db.Direction,cljs.core.with_meta(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Direction","db/Direction",-775479154,null)], null)))], null);
var input_checker9000_9008 = schema.core.checker.call(null,input_schema8999_9007);
var output_checker9001_9009 = schema.core.checker.call(null,output_schema8998_9006);
var ret__7439__auto___9010 = /**
 * Inputs: [direction :- db/Direction]
 *   Returns: s/Keyword
 * 
 *   This is a hack of sorts. The problem is that we cancel
 * the pending requests when scrolling in the opposite direction
 * that they were loaded from
 */
decoursin.handlers.opposite_direction = ((function (ufv___9005,output_schema8998_9006,input_schema8999_9007,input_checker9000_9008,output_checker9001_9009){
return (function decoursin$handlers$opposite_direction(G__9002){
var validate__5995__auto__ = ufv___9005.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9002], null);
var temp__4425__auto___9012 = input_checker9000_9008.call(null,args__5996__auto___9011);
if(cljs.core.truth_(temp__4425__auto___9012)){
var error__5997__auto___9013 = temp__4425__auto___9012;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"opposite-direction","opposite-direction",-395423575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This is a hack of sorts. The problem is that we cancel\n   the pending requests when scrolling in the opposite direction\n   that they were loaded from"], null)),cljs.core.pr_str.call(null,error__5997__auto___9013)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8999_9007,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9011,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9013], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var direction = G__9002;
while(true){
var G__9004 = (((direction instanceof cljs.core.Keyword))?direction.fqn:null);
switch (G__9004) {
case "up":
return new cljs.core.Keyword(null,"down","down",1565245570);

break;
case "down":
return new cljs.core.Keyword(null,"up","up",-269712113);

break;
default:
return null;

}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9015 = output_checker9001_9009.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9015)){
var error__5997__auto___9016 = temp__4425__auto___9015;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"opposite-direction","opposite-direction",-395423575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This is a hack of sorts. The problem is that we cancel\n   the pending requests when scrolling in the opposite direction\n   that they were loaded from"], null)),cljs.core.pr_str.call(null,error__5997__auto___9016)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8998_9006,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9016], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9005,output_schema8998_9006,input_schema8999_9007,input_checker9000_9008,output_checker9001_9009))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.opposite_direction),schema.core.make_fn_schema.call(null,output_schema8998_9006,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8999_9007], null)));

var ufv___9024 = schema.utils.use_fn_validation;
var output_schema9017_9025 = decoursin.db.Requests;
var input_schema9018_9026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,decoursin.db.Requests,cljs.core.with_meta(new cljs.core.Symbol(null,"requests","requests",907475889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Requests","db/Requests",-124360281,null)], null))),schema.core.one.call(null,decoursin.db.Siths,cljs.core.with_meta(new cljs.core.Symbol(null,"siths","siths",-1466994359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Siths","db/Siths",80998219,null)], null))),schema.core.one.call(null,decoursin.db.Direction,cljs.core.with_meta(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Direction","db/Direction",-775479154,null)], null)))], null);
var input_checker9019_9027 = schema.core.checker.call(null,input_schema9018_9026);
var output_checker9020_9028 = schema.core.checker.call(null,output_schema9017_9025);
var ret__7439__auto___9029 = /**
 * Inputs: [requests :- db/Requests siths :- db/Siths direction :- db/Direction]
 *   Returns: db/Requests
 * 
 *   A pending request is obsolete, after scroll, only when the position
 * that a sith would be placed on the deque is no longer available
 * due to scrolling while the sith is being fetched from the server. In
 * this case, the sith's position, after scroll, is <0 or >4
 */
decoursin.handlers.cancel_obsolete_pending_request_BANG_ = ((function (ufv___9024,output_schema9017_9025,input_schema9018_9026,input_checker9019_9027,output_checker9020_9028){
return (function decoursin$handlers$cancel_obsolete_pending_request_BANG_(G__9021,G__9022,G__9023){
var validate__5995__auto__ = ufv___9024.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9030 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9021,G__9022,G__9023], null);
var temp__4425__auto___9031 = input_checker9019_9027.call(null,args__5996__auto___9030);
if(cljs.core.truth_(temp__4425__auto___9031)){
var error__5997__auto___9032 = temp__4425__auto___9031;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-obsolete-pending-request!","cancel-obsolete-pending-request!",149339439,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Requests","db/Requests",-124360281,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A pending request is obsolete, after scroll, only when the position\n   that a sith would be placed on the deque is no longer available\n   due to scrolling while the sith is being fetched from the server. In\n   this case, the sith's position, after scroll, is <0 or >4"], null)),cljs.core.pr_str.call(null,error__5997__auto___9032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9018_9026,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9030,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9032], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var requests = G__9021;
var siths = G__9022;
var direction = G__9023;
while(true){
var ch = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,requests,decoursin.handlers.opposite_direction.call(null,direction)));
var blanks = decoursin.deque.count_blanks.call(null,siths,direction);
if(cljs.core.truth_((function (){var and__4676__auto__ = ch;
if(cljs.core.truth_(and__4676__auto__)){
return (blanks === (0));
} else {
return and__4676__auto__;
}
})())){
decoursin.handlers.cancel_request_BANG_.call(null,ch);

return cljs.core.assoc.call(null,requests,decoursin.handlers.opposite_direction.call(null,direction),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"channel","channel",734187692),null], null));
} else {
return requests;
}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9033 = output_checker9020_9028.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9033)){
var error__5997__auto___9034 = temp__4425__auto___9033;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-obsolete-pending-request!","cancel-obsolete-pending-request!",149339439,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Requests","db/Requests",-124360281,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A pending request is obsolete, after scroll, only when the position\n   that a sith would be placed on the deque is no longer available\n   due to scrolling while the sith is being fetched from the server. In\n   this case, the sith's position, after scroll, is <0 or >4"], null)),cljs.core.pr_str.call(null,error__5997__auto___9034)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9017_9025,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9034], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9024,output_schema9017_9025,input_schema9018_9026,input_checker9019_9027,output_checker9020_9028))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.cancel_obsolete_pending_request_BANG_),schema.core.make_fn_schema.call(null,output_schema9017_9025,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9018_9026], null)));

var ufv___9041 = schema.utils.use_fn_validation;
var output_schema9035_9042 = decoursin.db.Siths;
var input_schema9036_9043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,decoursin.db.Siths,cljs.core.with_meta(new cljs.core.Symbol(null,"siths","siths",-1466994359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Siths","db/Siths",80998219,null)], null))),schema.core.one.call(null,decoursin.db.Direction,cljs.core.with_meta(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Direction","db/Direction",-775479154,null)], null)))], null);
var input_checker9037_9044 = schema.core.checker.call(null,input_schema9036_9043);
var output_checker9038_9045 = schema.core.checker.call(null,output_schema9035_9042);
var ret__7439__auto___9046 = /**
 * Inputs: [siths :- db/Siths direction :- db/Direction]
 *   Returns: db/Siths
 * 
 *   Shift the deque up or down depending on direction. The result is
 * that we remove from one side, and we add the default blank-sith-template
 * to the other
 */
decoursin.handlers.shift = ((function (ufv___9041,output_schema9035_9042,input_schema9036_9043,input_checker9037_9044,output_checker9038_9045){
return (function decoursin$handlers$shift(G__9039,G__9040){
var validate__5995__auto__ = ufv___9041.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9039,G__9040], null);
var temp__4425__auto___9048 = input_checker9037_9044.call(null,args__5996__auto___9047);
if(cljs.core.truth_(temp__4425__auto___9048)){
var error__5997__auto___9049 = temp__4425__auto___9048;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Siths","db/Siths",80998219,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shift the deque up or down depending on direction. The result is\n   that we remove from one side, and we add the default blank-sith-template\n   to the other"], null)),cljs.core.pr_str.call(null,error__5997__auto___9049)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9036_9043,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9047,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9049], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var siths = G__9039;
var direction = G__9040;
while(true){
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113))){
return decoursin.deque.push_up.call(null,decoursin.deque.push_up.call(null,siths));
} else {
return decoursin.deque.push_down.call(null,decoursin.deque.push_down.call(null,siths));
}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9050 = output_checker9038_9045.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9050)){
var error__5997__auto___9051 = temp__4425__auto___9050;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Siths","db/Siths",80998219,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shift the deque up or down depending on direction. The result is\n   that we remove from one side, and we add the default blank-sith-template\n   to the other"], null)),cljs.core.pr_str.call(null,error__5997__auto___9051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9035_9042,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9051], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9041,output_schema9035_9042,input_schema9036_9043,input_checker9037_9044,output_checker9038_9045))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.shift),schema.core.make_fn_schema.call(null,output_schema9035_9042,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9036_9043], null)));

var ufv___9066 = schema.utils.use_fn_validation;
var output_schema9052_9067 = decoursin.db.schema;
var input_schema9053_9068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker9054_9069 = schema.core.checker.call(null,input_schema9053_9068);
var output_checker9055_9070 = schema.core.checker.call(null,output_schema9052_9067);
var ret__7439__auto___9071 = /**
 * Inputs: [db [_ direction e]]
 *   Returns: db/schema
 * 
 *   Shift the deque up or down, depending on direction, and possibly
 * cancel the only pending request in that direction
 */
decoursin.handlers.handle_button_click = ((function (ufv___9066,output_schema9052_9067,input_schema9053_9068,input_checker9054_9069,output_checker9055_9070){
return (function decoursin$handlers$handle_button_click(G__9056,G__9057){
var validate__5995__auto__ = ufv___9066.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9056,G__9057], null);
var temp__4425__auto___9073 = input_checker9054_9069.call(null,args__5996__auto___9072);
if(cljs.core.truth_(temp__4425__auto___9073)){
var error__5997__auto___9074 = temp__4425__auto___9073;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-button-click","handle-button-click",935546944,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shift the deque up or down, depending on direction, and possibly\n   cancel the only pending request in that direction"], null)),cljs.core.pr_str.call(null,error__5997__auto___9074)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9053_9068,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9072,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9074], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var db = G__9056;
var G__9063 = G__9057;
var vec__9064 = G__9063;
var _ = cljs.core.nth.call(null,vec__9064,(0),null);
var direction = cljs.core.nth.call(null,vec__9064,(1),null);
var e = cljs.core.nth.call(null,vec__9064,(2),null);
var db__$1 = db;
var G__9063__$1 = G__9063;
while(true){
var db__$2 = db__$1;
var vec__9065 = G__9063__$1;
var ___$1 = cljs.core.nth.call(null,vec__9065,(0),null);
var direction__$1 = cljs.core.nth.call(null,vec__9065,(1),null);
var e__$1 = cljs.core.nth.call(null,vec__9065,(2),null);
var siths = decoursin.deque.set_direction.call(null,decoursin.handlers.shift.call(null,new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(db__$2),direction__$1),direction__$1);
var request = decoursin.handlers.cancel_obsolete_pending_request_BANG_.call(null,new cljs.core.Keyword(null,"requests","requests",-733055638).cljs$core$IFn$_invoke$arity$1(db__$2),siths,direction__$1);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db__$2,new cljs.core.Keyword(null,"siths","siths",1187441410),siths),new cljs.core.Keyword(null,"requests","requests",-733055638),request);
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9075 = output_checker9055_9070.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9075)){
var error__5997__auto___9076 = temp__4425__auto___9075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-button-click","handle-button-click",935546944,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Shift the deque up or down, depending on direction, and possibly\n   cancel the only pending request in that direction"], null)),cljs.core.pr_str.call(null,error__5997__auto___9076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9052_9067,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9076], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9066,output_schema9052_9067,input_schema9053_9068,input_checker9054_9069,output_checker9055_9070))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.handle_button_click),schema.core.make_fn_schema.call(null,output_schema9052_9067,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9053_9068], null)));

re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"button-click","button-click",-504937754),decoursin.handlers.standard_middleware,decoursin.handlers.handle_button_click);
var ufv___9082 = schema.utils.use_fn_validation;
var output_schema9077_9083 = schema.core.Any;
var input_schema9078_9084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,decoursin.db.Planet,cljs.core.with_meta(new cljs.core.Symbol(null,"planet","planet",1917203511,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Planet","db/Planet",-493177899,null)], null)))], null);
var input_checker9079_9085 = schema.core.checker.call(null,input_schema9078_9084);
var output_checker9080_9086 = schema.core.checker.call(null,output_schema9077_9083);
var ret__7439__auto___9087 = /**
 * Inputs: [planet :- db/Planet]
 * 
 *   Take a planet, and return a function that accepts a sith.
 * Update the :obi-wan-is-here field in this sith
 */
decoursin.handlers.update_obi_wan_is_here = ((function (ufv___9082,output_schema9077_9083,input_schema9078_9084,input_checker9079_9085,output_checker9080_9086){
return (function decoursin$handlers$update_obi_wan_is_here(G__9081){
var validate__5995__auto__ = ufv___9082.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9081], null);
var temp__4425__auto___9089 = input_checker9079_9085.call(null,args__5996__auto___9088);
if(cljs.core.truth_(temp__4425__auto___9089)){
var error__5997__auto___9090 = temp__4425__auto___9089;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"update-obi-wan-is-here","update-obi-wan-is-here",1626892899,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Take a planet, and return a function that accepts a sith.\n   Update the :obi-wan-is-here field in this sith"], null)),cljs.core.pr_str.call(null,error__5997__auto___9090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9078_9084,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9088,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9090], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var planet = G__9081;
while(true){
return ((function (validate__5995__auto__,ufv___9082,output_schema9077_9083,input_schema9078_9084,input_checker9079_9085,output_checker9080_9086){
return (function decoursin$handlers$update_obi_wan_is_here_$_obi_wan_is_here_QMARK_(sith){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(planet),cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homeworld","homeworld",1090129115),new cljs.core.Keyword(null,"name","name",1843675177)], null)))){
return cljs.core.assoc.call(null,sith,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),true);
} else {
return cljs.core.assoc.call(null,sith,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),false);
}
});
;})(validate__5995__auto__,ufv___9082,output_schema9077_9083,input_schema9078_9084,input_checker9079_9085,output_checker9080_9086))
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9091 = output_checker9080_9086.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9091)){
var error__5997__auto___9092 = temp__4425__auto___9091;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"update-obi-wan-is-here","update-obi-wan-is-here",1626892899,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Take a planet, and return a function that accepts a sith.\n   Update the :obi-wan-is-here field in this sith"], null)),cljs.core.pr_str.call(null,error__5997__auto___9092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9077_9083,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9092], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9082,output_schema9077_9083,input_schema9078_9084,input_checker9079_9085,output_checker9080_9086))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.update_obi_wan_is_here),schema.core.make_fn_schema.call(null,output_schema9077_9083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9078_9084], null)));

var ufv___9098 = schema.utils.use_fn_validation;
var output_schema9093_9099 = schema.core.Any;
var input_schema9094_9100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,decoursin.db.Requests,cljs.core.with_meta(new cljs.core.Symbol(null,"requests","requests",907475889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("db","Requests","db/Requests",-124360281,null)], null)))], null);
var input_checker9095_9101 = schema.core.checker.call(null,input_schema9094_9100);
var output_checker9096_9102 = schema.core.checker.call(null,output_schema9093_9099);
var ret__7439__auto___9103 = /**
 * Inputs: [requests :- db/Requests]
 * 
 *   Cancel all pending requests
 */
decoursin.handlers.cancel_all_requests_BANG_ = ((function (ufv___9098,output_schema9093_9099,input_schema9094_9100,input_checker9095_9101,output_checker9096_9102){
return (function decoursin$handlers$cancel_all_requests_BANG_(G__9097){
var validate__5995__auto__ = ufv___9098.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9097], null);
var temp__4425__auto___9105 = input_checker9095_9101.call(null,args__5996__auto___9104);
if(cljs.core.truth_(temp__4425__auto___9105)){
var error__5997__auto___9106 = temp__4425__auto___9105;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-all-requests!","cancel-all-requests!",1578778961,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Cancel all pending requests"], null)),cljs.core.pr_str.call(null,error__5997__auto___9106)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9094_9100,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9104,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9106], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var requests = G__9097;
while(true){
var ch1 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(requests));
var ch2 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(requests));
if(cljs.core.truth_(ch1)){
decoursin.handlers.cancel_request_BANG_.call(null,ch1);
} else {
}

if(cljs.core.truth_(ch2)){
return decoursin.handlers.cancel_request_BANG_.call(null,ch2);
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9107 = output_checker9096_9102.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9107)){
var error__5997__auto___9108 = temp__4425__auto___9107;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cancel-all-requests!","cancel-all-requests!",1578778961,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Cancel all pending requests"], null)),cljs.core.pr_str.call(null,error__5997__auto___9108)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9093_9099,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9108], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9098,output_schema9093_9099,input_schema9094_9100,input_checker9095_9101,output_checker9096_9102))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.cancel_all_requests_BANG_),schema.core.make_fn_schema.call(null,output_schema9093_9099,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9094_9100], null)));

var ufv___9125 = schema.utils.use_fn_validation;
var output_schema9109_9126 = schema.core.Any;
var input_schema9110_9127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker9111_9128 = schema.core.checker.call(null,input_schema9110_9127);
var output_checker9112_9129 = schema.core.checker.call(null,output_schema9109_9126);
var ret__7439__auto___9130 = /**
 * Inputs: [db [_ planet]]
 * 
 *   handle websocket messages, by updating the :planet field
 * and updating :obi-wan-is-here field in all siths, and
 * conditionally remove all pending requests
 */
decoursin.handlers.handle_ws_message = ((function (ufv___9125,output_schema9109_9126,input_schema9110_9127,input_checker9111_9128,output_checker9112_9129){
return (function decoursin$handlers$handle_ws_message(G__9113,G__9114){
var validate__5995__auto__ = ufv___9125.get_cell();
if(cljs.core.truth_(validate__5995__auto__)){
var args__5996__auto___9131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9113,G__9114], null);
var temp__4425__auto___9132 = input_checker9111_9128.call(null,args__5996__auto___9131);
if(cljs.core.truth_(temp__4425__auto___9132)){
var error__5997__auto___9133 = temp__4425__auto___9132;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-ws-message","handle-ws-message",-886880802,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"handle websocket messages, by updating the :planet field\n   and updating :obi-wan-is-here field in all siths, and\n   conditionally remove all pending requests"], null)),cljs.core.pr_str.call(null,error__5997__auto___9133)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9110_9127,new cljs.core.Keyword(null,"value","value",305978217),args__5996__auto___9131,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9133], null));
} else {
}
} else {
}

var o__5998__auto__ = (function (){var db = G__9113;
var G__9121 = G__9114;
var vec__9122 = G__9121;
var _ = cljs.core.nth.call(null,vec__9122,(0),null);
var planet = cljs.core.nth.call(null,vec__9122,(1),null);
var db__$1 = db;
var G__9121__$1 = G__9121;
while(true){
var db__$2 = db__$1;
var vec__9123 = G__9121__$1;
var ___$1 = cljs.core.nth.call(null,vec__9123,(0),null);
var planet__$1 = cljs.core.nth.call(null,vec__9123,(1),null);
var planet__$2 = clojure.walk.keywordize_keys.call(null,planet__$1);
var siths = decoursin.deque.new_deque.call(null,cljs.core.map.call(null,decoursin.handlers.update_obi_wan_is_here.call(null,planet__$2),new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(db__$2)));
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths))){
decoursin.handlers.cancel_all_requests_BANG_.call(null,new cljs.core.Keyword(null,"requests","requests",-733055638).cljs$core$IFn$_invoke$arity$1(db__$2));
} else {
}

var G__9124 = db__$2;
var G__9124__$1 = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths))?cljs.core.assoc.call(null,G__9124,new cljs.core.Keyword(null,"requests","requests",-733055638),decoursin.db.blank_requests_map.call(null)):G__9124);
var G__9124__$2 = cljs.core.assoc.call(null,G__9124__$1,new cljs.core.Keyword(null,"siths","siths",1187441410),siths)
;
var G__9124__$3 = cljs.core.assoc.call(null,G__9124__$2,new cljs.core.Keyword(null,"planet","planet",276671984),planet__$2)
;
return G__9124__$3;
break;
}
})();
if(cljs.core.truth_(validate__5995__auto__)){
var temp__4425__auto___9134 = output_checker9112_9129.call(null,o__5998__auto__);
if(cljs.core.truth_(temp__4425__auto___9134)){
var error__5997__auto___9135 = temp__4425__auto___9134;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"handle-ws-message","handle-ws-message",-886880802,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"handle websocket messages, by updating the :planet field\n   and updating :obi-wan-is-here field in all siths, and\n   conditionally remove all pending requests"], null)),cljs.core.pr_str.call(null,error__5997__auto___9135)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9109_9126,new cljs.core.Keyword(null,"value","value",305978217),o__5998__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5997__auto___9135], null));
} else {
}
} else {
}

return o__5998__auto__;
});})(ufv___9125,output_schema9109_9126,input_schema9110_9127,input_checker9111_9128,output_checker9112_9129))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.handlers.handle_ws_message),schema.core.make_fn_schema.call(null,output_schema9109_9126,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9110_9127], null)));

re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-message","ws-message",1750034263),decoursin.handlers.standard_middleware,decoursin.handlers.handle_ws_message);

//# sourceMappingURL=handlers.js.map?rel=1496653524901