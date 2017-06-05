// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.deque');
goog.require('cljs.core');
goog.require('schema.core');

/**
 * @interface
 */
decoursin.deque.IDeque = function(){};

/**
 * push a onto the front
 */
decoursin.deque._push_front = (function decoursin$deque$_push_front(this$,a){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$_push_front$arity$2 == null)))){
return this$.decoursin$deque$IDeque$_push_front$arity$2(this$,a);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque._push_front[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,a);
} else {
var m__5344__auto____$1 = (decoursin.deque._push_front["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.-push-front",this$);
}
}
}
});

/**
 * push a onto the back
 */
decoursin.deque._push_back = (function decoursin$deque$_push_back(this$,a){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$_push_back$arity$2 == null)))){
return this$.decoursin$deque$IDeque$_push_back$arity$2(this$,a);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque._push_back[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,a);
} else {
var m__5344__auto____$1 = (decoursin.deque._push_back["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.-push-back",this$);
}
}
}
});

/**
 * pop the first element
 */
decoursin.deque._pop_front = (function decoursin$deque$_pop_front(this$){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$_pop_front$arity$1 == null)))){
return this$.decoursin$deque$IDeque$_pop_front$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque._pop_front[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (decoursin.deque._pop_front["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.-pop-front",this$);
}
}
}
});

/**
 * pop the last element
 */
decoursin.deque._pop_back = (function decoursin$deque$_pop_back(this$){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$_pop_back$arity$1 == null)))){
return this$.decoursin$deque$IDeque$_pop_back$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque._pop_back[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (decoursin.deque._pop_back["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.-pop-back",this$);
}
}
}
});

/**
 * push the deque up, removing top, adding default to the bottom
 */
decoursin.deque.push_up = (function decoursin$deque$push_up(this$){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$push_up$arity$1 == null)))){
return this$.decoursin$deque$IDeque$push_up$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.push_up[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (decoursin.deque.push_up["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.push-up",this$);
}
}
}
});

/**
 * push the deque down, removing bottom, adding default to top
 */
decoursin.deque.push_down = (function decoursin$deque$push_down(this$){
if((!((this$ == null))) && (!((this$.decoursin$deque$IDeque$push_down$arity$1 == null)))){
return this$.decoursin$deque$IDeque$push_down$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.push_down[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (decoursin.deque.push_down["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDeque.push-down",this$);
}
}
}
});


/**
 * @interface
 */
decoursin.deque.ISith = function(){};

/**
 * just assoc, with key validation
 */
decoursin.deque.assoc_sith = (function decoursin$deque$assoc_sith(this$,k,sith){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$assoc_sith$arity$3 == null)))){
return this$.decoursin$deque$ISith$assoc_sith$arity$3(this$,k,sith);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.assoc_sith[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,k,sith);
} else {
var m__5344__auto____$1 = (decoursin.deque.assoc_sith["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,k,sith);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.assoc-sith",this$);
}
}
}
});

/**
 * is the sith of this id in this deque? returns boolean
 */
decoursin.deque.in_QMARK_ = (function decoursin$deque$in_QMARK_(this$,id){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$in_QMARK_$arity$2 == null)))){
return this$.decoursin$deque$ISith$in_QMARK_$arity$2(this$,id);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.in_QMARK_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,id);
} else {
var m__5344__auto____$1 = (decoursin.deque.in_QMARK_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.in?",this$);
}
}
}
});

/**
 * set the :direction entry for each sith
 */
decoursin.deque.set_direction = (function decoursin$deque$set_direction(this$,direction){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$set_direction$arity$2 == null)))){
return this$.decoursin$deque$ISith$set_direction$arity$2(this$,direction);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.set_direction[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,direction);
} else {
var m__5344__auto____$1 = (decoursin.deque.set_direction["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,direction);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.set-direction",this$);
}
}
}
});

/**
 * test whether or not there's a sith at location
 */
decoursin.deque.empty_at_location_QMARK_ = (function decoursin$deque$empty_at_location_QMARK_(this$,location){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$empty_at_location_QMARK_$arity$2 == null)))){
return this$.decoursin$deque$ISith$empty_at_location_QMARK_$arity$2(this$,location);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.empty_at_location_QMARK_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,location);
} else {
var m__5344__auto____$1 = (decoursin.deque.empty_at_location_QMARK_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,location);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.empty-at-location?",this$);
}
}
}
});

/**
 * count how many blanks templates are from the top/bottom
 */
decoursin.deque.count_blanks = (function decoursin$deque$count_blanks(this$,direction){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$count_blanks$arity$2 == null)))){
return this$.decoursin$deque$ISith$count_blanks$arity$2(this$,direction);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.count_blanks[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,direction);
} else {
var m__5344__auto____$1 = (decoursin.deque.count_blanks["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,direction);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.count-blanks",this$);
}
}
}
});

/**
 * true if all 5 elements are empty
 */
decoursin.deque.is_empty_QMARK_ = (function decoursin$deque$is_empty_QMARK_(this$){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$is_empty_QMARK_$arity$1 == null)))){
return this$.decoursin$deque$ISith$is_empty_QMARK_$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.is_empty_QMARK_[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (decoursin.deque.is_empty_QMARK_["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.is-empty?",this$);
}
}
}
});

/**
 * first non-empty sith from bottom or top, depending on direction
 */
decoursin.deque.get_first_non_empty_sith = (function decoursin$deque$get_first_non_empty_sith(this$,direction){
if((!((this$ == null))) && (!((this$.decoursin$deque$ISith$get_first_non_empty_sith$arity$2 == null)))){
return this$.decoursin$deque$ISith$get_first_non_empty_sith$arity$2(this$,direction);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (decoursin.deque.get_first_non_empty_sith[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$,direction);
} else {
var m__5344__auto____$1 = (decoursin.deque.get_first_non_empty_sith["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$,direction);
} else {
throw cljs.core.missing_protocol.call(null,"ISith.get-first-non-empty-sith",this$);
}
}
}
});

decoursin.deque.default$ = cljs.core.atom.call(null);
decoursin.deque.set_default_in_deque_BANG_ = (function decoursin$deque$set_default_in_deque_BANG_(a){
return cljs.core.reset_BANG_.call(null,decoursin.deque.default$,a);
});
decoursin.deque.new_deque = (function decoursin$deque$new_deque(var_args){
var args13332 = [];
var len__5746__auto___13335 = arguments.length;
var i__5747__auto___13336 = (0);
while(true){
if((i__5747__auto___13336 < len__5746__auto___13335)){
args13332.push((arguments[i__5747__auto___13336]));

var G__13337 = (i__5747__auto___13336 + (1));
i__5747__auto___13336 = G__13337;
continue;
} else {
}
break;
}

var G__13334 = args13332.length;
switch (G__13334) {
case 0:
return decoursin.deque.new_deque.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return decoursin.deque.new_deque.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13332.length)].join('')));

}
});

decoursin.deque.new_deque.cljs$core$IFn$_invoke$arity$0 = (function (){
return decoursin.deque.deque.call(null,cljs.core.PersistentVector.EMPTY);
});

decoursin.deque.new_deque.cljs$core$IFn$_invoke$arity$1 = (function (x_or_coll){
if(cljs.core.vector_QMARK_.call(null,x_or_coll)){
return decoursin.deque.deque.call(null,x_or_coll);
} else {
return decoursin.deque.deque.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,x_or_coll));
}
});

decoursin.deque.new_deque.cljs$lang$maxFixedArity = 1;
decoursin.deque.assert_count_is_5 = (function decoursin$deque$assert_count_is_5(deque){
if(cljs.core._EQ_.call(null,(5),cljs.core.count.call(null,deque))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("count is not 5: "),cljs.core.str(deque)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"deque","deque",1120761512,null)))))].join('')));
}
});
var ufv___13349 = schema.utils.use_fn_validation;
var output_schema13342_13350 = schema.core.Any;
var input_schema13343_13351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.pred.call(null,cljs.core.vector_QMARK_),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null))], null)))], null);
var input_checker13344_13352 = schema.core.checker.call(null,input_schema13343_13351);
var output_checker13345_13353 = schema.core.checker.call(null,output_schema13342_13350);
var ret__12803__auto___13354 = /**
 * Inputs: [v :- (s/pred vector?)]
 */
decoursin.deque.deque = ((function (ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function decoursin$deque$deque(G__13346){
var validate__11277__auto__ = ufv___13349.get_cell();
if(cljs.core.truth_(validate__11277__auto__)){
var args__11278__auto___13355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13346], null);
var temp__4425__auto___13356 = input_checker13344_13352.call(null,args__11278__auto___13355);
if(cljs.core.truth_(temp__4425__auto___13356)){
var error__11279__auto___13357 = temp__4425__auto___13356;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"deque","deque",1120761512,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__11279__auto___13357)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13343_13351,new cljs.core.Keyword(null,"value","value",305978217),args__11278__auto___13355,new cljs.core.Keyword(null,"error","error",-978969032),error__11279__auto___13357], null));
} else {
}
} else {
}

var o__11280__auto__ = (function (){var v = G__13346;
while(true){
var x13348 = cljs.core.clone.call(null,v);
x13348.decoursin$deque$IDeque$ = true;

x13348.decoursin$deque$IDeque$_push_front$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,x){
var this$__$1 = this;
return decoursin.deque.new_deque.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$IDeque$_push_back$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,x){
var this$__$1 = this;
return decoursin.deque.new_deque.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,this$__$1,x)));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$IDeque$_pop_front$arity$1 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$){
var this$__$1 = this;
return decoursin.deque.new_deque.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop.call(null,(1),this$__$1)));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$IDeque$_pop_back$arity$1 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$){
var this$__$1 = this;
return decoursin.deque.new_deque.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.call(null,(1),this$__$1)));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$IDeque$push_down$arity$1 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$){
var this$__$1 = this;
return decoursin.deque._push_front.call(null,decoursin.deque._pop_back.call(null,this$__$1),cljs.core.deref.call(null,decoursin.deque.default$));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$IDeque$push_up$arity$1 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$){
var this$__$1 = this;
return decoursin.deque._push_back.call(null,decoursin.deque._pop_front.call(null,this$__$1),cljs.core.deref.call(null,decoursin.deque.default$));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$ = true;

x13348.decoursin$deque$ISith$assoc_sith$arity$3 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,k,sith){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

if(((k <= (4))) && ((k >= (0)))){
return decoursin.deque.new_deque.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.assoc.call(null,v,k,sith)));
} else {
return this$__$1;
}
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$in_QMARK_$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,id){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

return cljs.core.boolean$.call(null,cljs.core.some.call(null,((function (this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (p1__13339_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__13339_SHARP_),id);
});})(this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
,this$__$1));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$empty_at_location_QMARK_$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,location){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

if(cljs.core._EQ_.call(null,(5),cljs.core.count.call(null,this$__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("count is not 5: "),cljs.core.str(this$__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(5),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"this","this",1028897902,null)))))].join('')));
}

if(((location >= (0))) && ((location <= (4)))){
return cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return null;
}
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$count_blanks$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,direction){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

var v__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1565245570),direction))?cljs.core.reverse.call(null,this$__$1):this$__$1);
return cljs.core.count.call(null,cljs.core.take_while.call(null,((function (v__$1,this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (p1__13340_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__13340_SHARP_));
});})(v__$1,this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
,v__$1));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$set_direction$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,direction){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

return decoursin.deque.new_deque.call(null,cljs.core.mapv.call(null,((function (this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (p1__13341_SHARP_){
return cljs.core.assoc.call(null,p1__13341_SHARP_,new cljs.core.Keyword(null,"direction","direction",-633359395),direction);
});})(this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
,this$__$1));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$is_empty_QMARK_$arity$1 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

var and__4676__auto__ = decoursin.deque.empty_at_location_QMARK_.call(null,this$__$1,(0));
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = decoursin.deque.empty_at_location_QMARK_.call(null,this$__$1,(1));
if(cljs.core.truth_(and__4676__auto____$1)){
var and__4676__auto____$2 = decoursin.deque.empty_at_location_QMARK_.call(null,this$__$1,(2));
if(cljs.core.truth_(and__4676__auto____$2)){
var and__4676__auto____$3 = decoursin.deque.empty_at_location_QMARK_.call(null,this$__$1,(3));
if(cljs.core.truth_(and__4676__auto____$3)){
return decoursin.deque.empty_at_location_QMARK_.call(null,this$__$1,(4));
} else {
return and__4676__auto____$3;
}
} else {
return and__4676__auto____$2;
}
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

x13348.decoursin$deque$ISith$get_first_non_empty_sith$arity$2 = ((function (x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (this$,direction){
var this$__$1 = this;
decoursin.deque.assert_count_is_5.call(null,this$__$1);

var coll = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1565245570),direction))?cljs.core.reverse.call(null,this$__$1):this$__$1);
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (coll,this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353){
return (function (i,m){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,i], null);
} else {
return null;
}
});})(coll,this$__$1,x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
,coll));
});})(x13348,validate__11277__auto__,ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;

return x13348;
break;
}
})();
if(cljs.core.truth_(validate__11277__auto__)){
var temp__4425__auto___13358 = output_checker13345_13353.call(null,o__11280__auto__);
if(cljs.core.truth_(temp__4425__auto___13358)){
var error__11279__auto___13359 = temp__4425__auto___13358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"deque","deque",1120761512,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__11279__auto___13359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13342_13350,new cljs.core.Keyword(null,"value","value",305978217),o__11280__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__11279__auto___13359], null));
} else {
}
} else {
}

return o__11280__auto__;
});})(ufv___13349,output_schema13342_13350,input_schema13343_13351,input_checker13344_13352,output_checker13345_13353))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,decoursin.deque.deque),schema.core.make_fn_schema.call(null,output_schema13342_13350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13343_13351], null)));


//# sourceMappingURL=deque.js.map?rel=1496645230084