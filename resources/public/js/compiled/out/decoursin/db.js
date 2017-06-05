// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('schema.core');
goog.require('cljs.core.async.impl.channels');
goog.require('decoursin.deque');
decoursin.db.Direction = schema.core.enum$.call(null,new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570));
decoursin.db.Sith = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Num,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395)),schema.core.maybe.call(null,decoursin.db.Direction),new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267)),schema.core.Bool,new cljs.core.Keyword(null,"homeworld","homeworld",1090129115),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Num], null),new cljs.core.Keyword(null,"master","master",779988698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.maybe.call(null,schema.core.Num)], null),new cljs.core.Keyword(null,"apprentice","apprentice",-1838808462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.maybe.call(null,schema.core.Num)], null)], true, false);
decoursin.db.Siths = schema.core.conditional.call(null,(function (p1__13813_SHARP_){
if(!((p1__13813_SHARP_ == null))){
if((false) || (p1__13813_SHARP_.decoursin$deque$IDeque$)){
return true;
} else {
return false;
}
} else {
return false;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.db.Sith], null));
decoursin.db.Planet = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Num,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str], null);
decoursin.db.Requests = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"channel","channel",734187692),schema.core.maybe.call(null,cljs.core.async.impl.channels.ManyToManyChannel)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"channel","channel",734187692),schema.core.maybe.call(null,cljs.core.async.impl.channels.ManyToManyChannel)], null)], null);
decoursin.db.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"siths","siths",1187441410),decoursin.db.Siths,new cljs.core.Keyword(null,"requests","requests",-733055638),decoursin.db.Requests,new cljs.core.Keyword(null,"planet","planet",276671984),decoursin.db.Planet], null);
decoursin.db.blank_sith_template = (function decoursin$db$blank_sith_template(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),false,new cljs.core.Keyword(null,"homeworld","homeworld",1090129115),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"id","id",-1388402092),(-1)], null),new cljs.core.Keyword(null,"master","master",779988698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"id","id",-1388402092),(-1)], null),new cljs.core.Keyword(null,"apprentice","apprentice",-1838808462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"",new cljs.core.Keyword(null,"id","id",-1388402092),(-1)], null)], null);
});
decoursin.deque.set_default_in_deque_BANG_.call(null,decoursin.db.blank_sith_template.call(null));
decoursin.db.v = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,(5),decoursin.db.blank_sith_template.call(null)));
decoursin.db.siths = decoursin.deque.new_deque.call(null,decoursin.db.v);
decoursin.db.blank_requests_map = (function decoursin$db$blank_requests_map(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"channel","channel",734187692),null], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"channel","channel",734187692),null], null)], null);
});
decoursin.db.app_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"siths","siths",1187441410),decoursin.db.siths,new cljs.core.Keyword(null,"requests","requests",-733055638),decoursin.db.blank_requests_map.call(null),new cljs.core.Keyword(null,"planet","planet",276671984),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(-1),new cljs.core.Keyword(null,"name","name",1843675177),""], null)], null);

//# sourceMappingURL=db.js.map?rel=1496645230808