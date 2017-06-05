// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.subs');
goog.require('cljs.core');
goog.require('decoursin.deque');
goog.require('re_frame.core');
goog.require('schema.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"siths","siths",1187441410),(function (db,p__13362){
var vec__13363 = p__13362;
var _ = cljs.core.nth.call(null,vec__13363,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__13363,_){
return (function (){
return new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__13363,_))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"planet","planet",276671984),(function (db,p__13364){
var vec__13365 = p__13364;
var _ = cljs.core.nth.call(null,vec__13365,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__13365,_){
return (function (){
return new cljs.core.Keyword(null,"planet","planet",276671984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
});})(vec__13365,_))
);
}));
/**
 * if the sith's :name is not the empty string,
 * then s/he is a sith
 */
decoursin.subs.is_a_sith_QMARK_ = (function decoursin$subs$is_a_sith_QMARK_(sith){
return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sith)));
});
/**
 * Does this sith have an apprentice? The bottom most one doesn't
 */
decoursin.subs.has_no_apprentice_QMARK_ = (function decoursin$subs$has_no_apprentice_QMARK_(sith){
return (cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apprentice","apprentice",-1838808462),new cljs.core.Keyword(null,"id","id",-1388402092)], null)) == null);
});
/**
 * Does this sith a have a master? The top most one doesn't
 */
decoursin.subs.has_no_master_QMARK_ = (function decoursin$subs$has_no_master_QMARK_(sith){
return (cljs.core.get_in.call(null,sith,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"master","master",779988698),new cljs.core.Keyword(null,"id","id",-1388402092)], null)) == null);
});
decoursin.subs.sith_without_apprentice_QMARK_ = (function decoursin$subs$sith_without_apprentice_QMARK_(sith){
var and__4676__auto__ = decoursin.subs.is_a_sith_QMARK_.call(null,sith);
if(cljs.core.truth_(and__4676__auto__)){
return decoursin.subs.has_no_apprentice_QMARK_.call(null,sith);
} else {
return and__4676__auto__;
}
});
decoursin.subs.sith_without_master_QMARK_ = (function decoursin$subs$sith_without_master_QMARK_(sith){
var and__4676__auto__ = decoursin.subs.is_a_sith_QMARK_.call(null,sith);
if(cljs.core.truth_(and__4676__auto__)){
return decoursin.subs.has_no_master_QMARK_.call(null,sith);
} else {
return and__4676__auto__;
}
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"disable-up-button?","disable-up-button?",1626113916),(function (db,p__13366){
var vec__13367 = p__13366;
var _ = cljs.core.nth.call(null,vec__13367,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__13367,_){
return (function (){
var siths = new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
return cljs.core.boolean$.call(null,(function (){var or__4688__auto__ = cljs.core.some.call(null,decoursin.subs.sith_without_apprentice_QMARK_,siths);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.some.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths);
}
})());
});})(vec__13367,_))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"disable-down-button?","disable-down-button?",-178624821),(function (db,p__13368){
var vec__13369 = p__13368;
var _ = cljs.core.nth.call(null,vec__13369,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__13369,_){
return (function (){
var siths = new cljs.core.Keyword(null,"siths","siths",1187441410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
return cljs.core.boolean$.call(null,(function (){var or__4688__auto__ = cljs.core.some.call(null,decoursin.subs.sith_without_master_QMARK_,siths);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return cljs.core.some.call(null,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267),siths);
}
})());
});})(vec__13369,_))
);
}));

//# sourceMappingURL=subs.js.map?rel=1496645230128