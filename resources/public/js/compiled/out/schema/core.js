// Compiled by ClojureScript 1.7.189 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (schema.core.spec[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (schema.core.spec["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (schema.core.explain[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (schema.core.explain["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___12839 = c.call(null,value);
if(cljs.core.truth_(temp__4425__auto___12839)){
var error_12840 = temp__4425__auto___12839;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_12840)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_12840], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__12841_SHARP_){
var and__4676__auto__ = !((p1__12841_SHARP_ == null));
if(and__4676__auto__){
var or__4688__auto__ = (klass === p1__12841_SHARP_.constructor);
if(or__4688__auto__){
return or__4688__auto__;
} else {
return p1__12841_SHARP_ instanceof klass;
}
} else {
return and__4676__auto__;
}
}),(function (p1__12842_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12842_SHARP_),klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__12843 = cljs.core._EQ_;
var expr__12844 = this$;
if(cljs.core.truth_(pred__12843.call(null,null,expr__12844))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__12843.call(null,Boolean,expr__12844))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__12843.call(null,Number,expr__12844))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__12843.call(null,null,expr__12844))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__12843.call(null,Date,expr__12844))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__12843.call(null,cljs.core.UUID,expr__12844))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12847,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12849 = (((k12847 instanceof cljs.core.Keyword))?k12847.fqn:null);
switch (G__12849) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12847,else__5305__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.AnythingSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12846){
var self__ = this;
var G__12846__$1 = this;
return (new cljs.core.RecordIter((0),G__12846__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12846){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12850 = cljs.core.keyword_identical_QMARK_;
var expr__12851 = k__5310__auto__;
if(cljs.core.truth_(pred__12850.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__12851))){
return (new schema.core.AnythingSchema(G__12846,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12846),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12846){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__12846,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__12848){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__12848),null,cljs.core.dissoc.call(null,G__12848,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12857,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12859 = (((k12857 instanceof cljs.core.Keyword))?k12857.fqn:null);
switch (G__12859) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12857,else__5305__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.EqSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12856){
var self__ = this;
var G__12856__$1 = this;
return (new cljs.core.RecordIter((0),G__12856__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12856){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12860 = cljs.core.keyword_identical_QMARK_;
var expr__12861 = k__5310__auto__;
if(cljs.core.truth_(pred__12860.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__12861))){
return (new schema.core.EqSchema(G__12856,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12856),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12856){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__12856,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12854_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__12854_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12855_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12855_SHARP_),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__12858){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__12858),null,cljs.core.dissoc.call(null,G__12858,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12867,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12869 = (((k12867 instanceof cljs.core.Keyword))?k12867.fqn:null);
switch (G__12869) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12867,else__5305__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Isa{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12866){
var self__ = this;
var G__12866__$1 = this;
return (new cljs.core.RecordIter((0),G__12866__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12866){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12870 = cljs.core.keyword_identical_QMARK_;
var expr__12871 = k__5310__auto__;
if(cljs.core.truth_(pred__12870.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12871))){
return (new schema.core.Isa(G__12866,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12870.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__12871))){
return (new schema.core.Isa(self__.h,G__12866,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12866),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12866){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__12866,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12864_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__12864_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12865_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),p1__12865_SHARP_),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__12868){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12868),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__12868),null,cljs.core.dissoc.call(null,G__12868,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args12874 = [];
var len__5746__auto___12877 = arguments.length;
var i__5747__auto___12878 = (0);
while(true){
if((i__5747__auto___12878 < len__5746__auto___12877)){
args12874.push((arguments[i__5747__auto___12878]));

var G__12879 = (i__5747__auto___12878 + (1));
i__5747__auto___12878 = G__12879;
continue;
} else {
}
break;
}

var G__12876 = args12874.length;
switch (G__12876) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12874.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12884,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12886 = (((k12884 instanceof cljs.core.Keyword))?k12884.fqn:null);
switch (G__12886) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12884,else__5305__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.EnumSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12883){
var self__ = this;
var G__12883__$1 = this;
return (new cljs.core.RecordIter((0),G__12883__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12883){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12887 = cljs.core.keyword_identical_QMARK_;
var expr__12888 = k__5310__auto__;
if(cljs.core.truth_(pred__12887.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__12888))){
return (new schema.core.EnumSchema(G__12883,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12883),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12883){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__12883,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12881_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__12881_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12882_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12882_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__12885){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__12885),null,cljs.core.dissoc.call(null,G__12885,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__5753__auto__ = [];
var len__5746__auto___12892 = arguments.length;
var i__5747__auto___12893 = (0);
while(true){
if((i__5747__auto___12893 < len__5746__auto___12892)){
args__5753__auto__.push((arguments[i__5747__auto___12893]));

var G__12894 = (i__5747__auto___12893 + (1));
i__5747__auto___12893 = G__12894;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq12891){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12891));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12897,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12899 = (((k12897 instanceof cljs.core.Keyword))?k12897.fqn:null);
switch (G__12899) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12897,else__5305__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Predicate{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12896){
var self__ = this;
var G__12896__$1 = this;
return (new cljs.core.RecordIter((0),G__12896__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12896){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12900 = cljs.core.keyword_identical_QMARK_;
var expr__12901 = k__5310__auto__;
if(cljs.core.truth_(pred__12900.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__12901))){
return (new schema.core.Predicate(G__12896,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12900.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__12901))){
return (new schema.core.Predicate(self__.p_QMARK_,G__12896,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12896),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12896){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__12896,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__12895_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12895_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__12898){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__12898),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__12898),null,cljs.core.dissoc.call(null,G__12898,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args12904 = [];
var len__5746__auto___12907 = arguments.length;
var i__5747__auto___12908 = (0);
while(true){
if((i__5747__auto___12908 < len__5746__auto___12907)){
args12904.push((arguments[i__5747__auto___12908]));

var G__12909 = (i__5747__auto___12908 + (1));
i__5747__auto___12908 = G__12909;
continue;
} else {
}
break;
}

var G__12906 = args12904.length;
switch (G__12906) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12904.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12914,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12916 = (((k12914 instanceof cljs.core.Keyword))?k12914.fqn:null);
switch (G__12916) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12914,else__5305__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Protocol{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12913){
var self__ = this;
var G__12913__$1 = this;
return (new cljs.core.RecordIter((0),G__12913__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12913){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12917 = cljs.core.keyword_identical_QMARK_;
var expr__12918 = k__5310__auto__;
if(cljs.core.truth_(pred__12917.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__12918))){
return (new schema.core.Protocol(G__12913,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12913),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12913){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__12913,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12911_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__12911_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12912_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12912_SHARP_),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__12915){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__12915),null,cljs.core.dissoc.call(null,G__12915,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12921_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__12921_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12922_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12922_SHARP_),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core12925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core12925 = (function (meta12926){
this.meta12926 = meta12926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core12925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12927,meta12926__$1){
var self__ = this;
var _12927__$1 = this;
return (new schema.core.t_schema$core12925(meta12926__$1));
});

schema.core.t_schema$core12925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12927){
var self__ = this;
var _12927__$1 = this;
return self__.meta12926;
});

schema.core.t_schema$core12925.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core12925.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__12923_SHARP_){
return (p1__12923_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__12924_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12924_SHARP_),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core12925.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core12925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12926","meta12926",660292073,null)], null);
});

schema.core.t_schema$core12925.cljs$lang$type = true;

schema.core.t_schema$core12925.cljs$lang$ctorStr = "schema.core/t_schema$core12925";

schema.core.t_schema$core12925.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"schema.core/t_schema$core12925");
});

schema.core.__GT_t_schema$core12925 = (function schema$core$__GT_t_schema$core12925(meta12926){
return (new schema.core.t_schema$core12925(meta12926));
});

}

return (new schema.core.t_schema$core12925(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12929,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12931 = (((k12929 instanceof cljs.core.Keyword))?k12929.fqn:null);
switch (G__12931) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12929,else__5305__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Maybe{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12928){
var self__ = this;
var G__12928__$1 = this;
return (new cljs.core.RecordIter((0),G__12928__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12928){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12932 = cljs.core.keyword_identical_QMARK_;
var expr__12933 = k__5310__auto__;
if(cljs.core.truth_(pred__12932.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__12933))){
return (new schema.core.Maybe(G__12928,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12928),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12928){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__12928,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__12930){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__12930),null,cljs.core.dissoc.call(null,G__12930,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12938,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12940 = (((k12938 instanceof cljs.core.Keyword))?k12938.fqn:null);
switch (G__12940) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12938,else__5305__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.NamedSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12937){
var self__ = this;
var G__12937__$1 = this;
return (new cljs.core.RecordIter((0),G__12937__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12937){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12941 = cljs.core.keyword_identical_QMARK_;
var expr__12942 = k__5310__auto__;
if(cljs.core.truth_(pred__12941.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__12942))){
return (new schema.core.NamedSchema(G__12937,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12941.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12942))){
return (new schema.core.NamedSchema(self__.schema,G__12937,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12937),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12937){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__12937,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__12936_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__12936_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__12939){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__12939),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12939),null,cljs.core.dissoc.call(null,G__12939,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12947,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12949 = (((k12947 instanceof cljs.core.Keyword))?k12947.fqn:null);
switch (G__12949) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12947,else__5305__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Either{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12946){
var self__ = this;
var G__12946__$1 = this;
return (new cljs.core.RecordIter((0),G__12946__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12946){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12950 = cljs.core.keyword_identical_QMARK_;
var expr__12951 = k__5310__auto__;
if(cljs.core.truth_(pred__12950.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__12951))){
return (new schema.core.Either(G__12946,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12946),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12946){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__12946,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5460__auto__ = ((function (this$__$1){
return (function schema$core$iter__12953(s__12954){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__12954__$1 = s__12954;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12954__$1);
if(temp__4425__auto__){
var s__12954__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12954__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__12954__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__12956 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__12955 = (0);
while(true){
if((i__12955 < size__5459__auto__)){
var s = cljs.core._nth.call(null,c__5458__auto__,i__12955);
cljs.core.chunk_append.call(null,b__12956,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__12958 = (i__12955 + (1));
i__12955 = G__12958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12956),schema$core$iter__12953.call(null,cljs.core.chunk_rest.call(null,s__12954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12956),null);
}
} else {
var s = cljs.core.first.call(null,s__12954__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__12953.call(null,cljs.core.rest.call(null,s__12954__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5460__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__12945_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12945_SHARP_),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__12948){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__12948),null,cljs.core.dissoc.call(null,G__12948,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__5753__auto__ = [];
var len__5746__auto___12960 = arguments.length;
var i__5747__auto___12961 = (0);
while(true){
if((i__5747__auto___12961 < len__5746__auto___12960)){
args__5753__auto__.push((arguments[i__5747__auto___12961]));

var G__12962 = (i__5747__auto___12961 + (1));
i__5747__auto___12961 = G__12962;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq12959){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12959));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k12965,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__12967 = (((k12965 instanceof cljs.core.Keyword))?k12965.fqn:null);
switch (G__12967) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12965,else__5305__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12964){
var self__ = this;
var G__12964__$1 = this;
return (new cljs.core.RecordIter((0),G__12964__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__12964){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__12968 = cljs.core.keyword_identical_QMARK_;
var expr__12969 = k__5310__auto__;
if(cljs.core.truth_(pred__12968.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__12969))){
return (new schema.core.ConditionalSchema(G__12964,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12968.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__12969))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__12964,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__12964),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__12964){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__12964,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5460__auto__ = ((function (this$__$1){
return (function schema$core$iter__12971(s__12972){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__12972__$1 = s__12972;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12972__$1);
if(temp__4425__auto__){
var s__12972__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12972__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__12972__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__12974 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__12973 = (0);
while(true){
if((i__12973 < size__5459__auto__)){
var vec__12977 = cljs.core._nth.call(null,c__5458__auto__,i__12973);
var p = cljs.core.nth.call(null,vec__12977,(0),null);
var s = cljs.core.nth.call(null,vec__12977,(1),null);
cljs.core.chunk_append.call(null,b__12974,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__12982 = (i__12973 + (1));
i__12973 = G__12982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12974),schema$core$iter__12971.call(null,cljs.core.chunk_rest.call(null,s__12972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12974),null);
}
} else {
var vec__12978 = cljs.core.first.call(null,s__12972__$2);
var p = cljs.core.nth.call(null,vec__12978,(0),null);
var s = cljs.core.nth.call(null,vec__12978,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__12971.call(null,cljs.core.rest.call(null,s__12972__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5460__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__12963_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__12963_SHARP_),(function (){var or__4688__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__12979){
var vec__12980 = p__12979;
var pred = cljs.core.nth.call(null,vec__12980,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__12980,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__12966){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__12966),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__12966),null,cljs.core.dissoc.call(null,G__12966,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__5753__auto__ = [];
var len__5746__auto___12992 = arguments.length;
var i__5747__auto___12993 = (0);
while(true){
if((i__5747__auto___12993 < len__5746__auto___12992)){
args__5753__auto__.push((arguments[i__5747__auto___12993]));

var G__12994 = (i__5747__auto___12993 + (1));
i__5747__auto___12993 = G__12994;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__5460__auto__ = (function schema$core$iter__12984(s__12985){
return (new cljs.core.LazySeq(null,(function (){
var s__12985__$1 = s__12985;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12985__$1);
if(temp__4425__auto__){
var s__12985__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12985__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__12985__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__12987 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__12986 = (0);
while(true){
if((i__12986 < size__5459__auto__)){
var vec__12990 = cljs.core._nth.call(null,c__5458__auto__,i__12986);
var pred = cljs.core.nth.call(null,vec__12990,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__12990,(1),null);
cljs.core.chunk_append.call(null,b__12987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__12995 = (i__12986 + (1));
i__12986 = G__12995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12987),schema$core$iter__12984.call(null,cljs.core.chunk_rest.call(null,s__12985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12987),null);
}
} else {
var vec__12991 = cljs.core.first.call(null,s__12985__$2);
var pred = cljs.core.nth.call(null,vec__12991,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__12991,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__12984.call(null,cljs.core.rest.call(null,s__12985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5460__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq12983){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12983));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__5343__auto__ = (((this$ == null))?null:this$);
var m__5344__auto__ = (schema.core.precondition[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,this$);
} else {
var m__5344__auto____$1 = (schema.core.precondition["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__5460__auto__ = ((function (this$__$1){
return (function schema$core$iter__12996(s__12997){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__12997__$1 = s__12997;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12997__$1);
if(temp__4425__auto__){
var s__12997__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12997__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__12997__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__12999 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__12998 = (0);
while(true){
if((i__12998 < size__5459__auto__)){
var map__13004 = cljs.core._nth.call(null,c__5458__auto__,i__12998);
var map__13004__$1 = ((((!((map__13004 == null)))?((((map__13004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13004):map__13004);
var guard = cljs.core.get.call(null,map__13004__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__13004__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__12999,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__13008 = (i__12998 + (1));
i__12998 = G__13008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12999),schema$core$iter__12996.call(null,cljs.core.chunk_rest.call(null,s__12997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12999),null);
}
} else {
var map__13006 = cljs.core.first.call(null,s__12997__$2);
var map__13006__$1 = ((((!((map__13006 == null)))?((((map__13006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13006):map__13006);
var guard = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__13006__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__12996.call(null,cljs.core.rest.call(null,s__12997__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5460__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13011,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13013 = (((k13011 instanceof cljs.core.Keyword))?k13011.fqn:null);
switch (G__13013) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13011,else__5305__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.CondPre{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13010){
var self__ = this;
var G__13010__$1 = this;
return (new cljs.core.RecordIter((0),G__13010__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13010){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13014 = cljs.core.keyword_identical_QMARK_;
var expr__13015 = k__5310__auto__;
if(cljs.core.truth_(pred__13014.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__13015))){
return (new schema.core.CondPre(G__13010,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13010),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13010){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__13010,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5460__auto__ = ((function (this$__$1){
return (function schema$core$iter__13017(s__13018){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__13018__$1 = s__13018;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13018__$1);
if(temp__4425__auto__){
var s__13018__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13018__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13018__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13020 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13019 = (0);
while(true){
if((i__13019 < size__5459__auto__)){
var s = cljs.core._nth.call(null,c__5458__auto__,i__13019);
cljs.core.chunk_append.call(null,b__13020,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__13022 = (i__13019 + (1));
i__13019 = G__13022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13020),schema$core$iter__13017.call(null,cljs.core.chunk_rest.call(null,s__13018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13020),null);
}
} else {
var s = cljs.core.first.call(null,s__13018__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__13017.call(null,cljs.core.rest.call(null,s__13018__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5460__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__13009_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__13009_SHARP_),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__13012){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__13012),null,cljs.core.dissoc.call(null,G__13012,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13024 = arguments.length;
var i__5747__auto___13025 = (0);
while(true){
if((i__5747__auto___13025 < len__5746__auto___13024)){
args__5753__auto__.push((arguments[i__5747__auto___13025]));

var G__13026 = (i__5747__auto___13025 + (1));
i__5747__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq13023){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13023));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13029,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13031 = (((k13029 instanceof cljs.core.Keyword))?k13029.fqn:null);
switch (G__13031) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13029,else__5305__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Constrained{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13028){
var self__ = this;
var G__13028__$1 = this;
return (new cljs.core.RecordIter((0),G__13028__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13028){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13032 = cljs.core.keyword_identical_QMARK_;
var expr__13033 = k__5310__auto__;
if(cljs.core.truth_(pred__13032.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__13033))){
return (new schema.core.Constrained(G__13028,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13032.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__13033))){
return (new schema.core.Constrained(self__.schema,G__13028,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13032.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__13033))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__13028,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13028),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13028){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__13028,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__13027_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__13027_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.post_name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__13030){
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__13030),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__13030),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__13030),null,cljs.core.dissoc.call(null,G__13030,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args13036 = [];
var len__5746__auto___13039 = arguments.length;
var i__5747__auto___13040 = (0);
while(true){
if((i__5747__auto___13040 < len__5746__auto___13039)){
args13036.push((arguments[i__5747__auto___13040]));

var G__13041 = (i__5747__auto___13040 + (1));
i__5747__auto___13040 = G__13041;
continue;
} else {
}
break;
}

var G__13038 = args13036.length;
switch (G__13038) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13036.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13045,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13047 = (((k13045 instanceof cljs.core.Keyword))?k13045.fqn:null);
switch (G__13047) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13045,else__5305__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__4688__auto__ = tx;
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__13043_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__13043_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Both{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13044){
var self__ = this;
var G__13044__$1 = this;
return (new cljs.core.RecordIter((0),G__13044__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13044){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13048 = cljs.core.keyword_identical_QMARK_;
var expr__13049 = k__5310__auto__;
if(cljs.core.truth_(pred__13048.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__13049))){
return (new schema.core.Both(G__13044,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13044),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13044){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__13044,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__13046){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__13046),null,cljs.core.dissoc.call(null,G__13046,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__5753__auto__ = [];
var len__5746__auto___13053 = arguments.length;
var i__5747__auto___13054 = (0);
while(true){
if((i__5747__auto___13054 < len__5746__auto___13053)){
args__5753__auto__.push((arguments[i__5747__auto___13054]));

var G__13055 = (i__5747__auto___13054 + (1));
i__5747__auto___13054 = G__13055;
continue;
} else {
}
break;
}

var argseq__5754__auto__ = ((((0) < args__5753__auto__.length))?(new cljs.core.IndexedSeq(args__5753__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5754__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq13052){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13052));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__13058 = cljs.core.meta.call(null,v);
var map__13058__$1 = ((((!((map__13058 == null)))?((((map__13058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13058):map__13058);
var ns = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13061,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13063 = (((k13061 instanceof cljs.core.Keyword))?k13061.fqn:null);
switch (G__13063) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13061,else__5305__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Recursive{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13060){
var self__ = this;
var G__13060__$1 = this;
return (new cljs.core.RecordIter((0),G__13060__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13060){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13064 = cljs.core.keyword_identical_QMARK_;
var expr__13065 = k__5310__auto__;
if(cljs.core.truth_(pred__13064.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__13065))){
return (new schema.core.Recursive(G__13060,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13060),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13060){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__13060,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.var_name.call(null,self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__13062){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__13062),null,cljs.core.dissoc.call(null,G__13062,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13073,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13075 = (((k13073 instanceof cljs.core.Keyword))?k13073.fqn:null);
switch (G__13075) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13073,else__5305__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Atomic{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13072){
var self__ = this;
var G__13072__$1 = this;
return (new cljs.core.RecordIter((0),G__13072__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13072){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13076 = cljs.core.keyword_identical_QMARK_;
var expr__13077 = k__5310__auto__;
if(cljs.core.truth_(pred__13076.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__13077))){
return (new schema.core.Atomic(G__13072,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13072),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13072){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__13072,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"atom","atom",1243487874,null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__13074){
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__13074),null,cljs.core.dissoc.call(null,G__13074,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13081,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13083 = (((k13081 instanceof cljs.core.Keyword))?k13081.fqn:null);
switch (G__13083) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13081,else__5305__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.RequiredKey{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13080){
var self__ = this;
var G__13080__$1 = this;
return (new cljs.core.RecordIter((0),G__13080__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13080){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13084 = cljs.core.keyword_identical_QMARK_;
var expr__13085 = k__5310__auto__;
if(cljs.core.truth_(pred__13084.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__13085))){
return (new schema.core.RequiredKey(G__13080,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13080),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13080){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__13080,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__13082){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__13082),null,cljs.core.dissoc.call(null,G__13082,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13089,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13091 = (((k13089 instanceof cljs.core.Keyword))?k13089.fqn:null);
switch (G__13091) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13089,else__5305__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.OptionalKey{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13088){
var self__ = this;
var G__13088__$1 = this;
return (new cljs.core.RecordIter((0),G__13088__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13088){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13092 = cljs.core.keyword_identical_QMARK_;
var expr__13093 = k__5310__auto__;
if(cljs.core.truth_(pred__13092.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__13093))){
return (new schema.core.OptionalKey(G__13088,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13088),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13088){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__13088,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__13090){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__13090),null,cljs.core.dissoc.call(null,G__13090,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__4688__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13097,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13099 = (((k13097 instanceof cljs.core.Keyword))?k13097.fqn:null);
switch (G__13099) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13097,else__5305__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.MapEntry{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13096){
var self__ = this;
var G__13096__$1 = this;
return (new cljs.core.RecordIter((0),G__13096__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13096){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13100 = cljs.core.keyword_identical_QMARK_;
var expr__13101 = k__5310__auto__;
if(cljs.core.truth_(pred__13100.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__13101))){
return (new schema.core.MapEntry(G__13096,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13100.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__13101))){
return (new schema.core.MapEntry(self__.key_schema,G__13096,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13096),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13096){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__13096,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__13103,p__13104,_){
var vec__13105 = p__13103;
var k = cljs.core.nth.call(null,vec__13105,(0),null);
var vec__13106 = p__13104;
var xk = cljs.core.nth.call(null,vec__13106,(0),null);
var xv = cljs.core.nth.call(null,vec__13106,(1),null);
var temp__4423__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain.call(null,self__.key_schema)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__13098){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__13098),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__13098),null,cljs.core.dissoc.call(null,G__13098,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_13125 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__13108_SHARP_){
return (cljs.core.count.call(null,p1__13108_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_13125)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_13125)));
}

return cljs.core.concat.call(null,(function (){var iter__5460__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__13117(s__13118){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__13118__$1 = s__13118;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13118__$1);
if(temp__4425__auto__){
var s__13118__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13118__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13118__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13120 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13119 = (0);
while(true){
if((i__13119 < size__5459__auto__)){
var vec__13123 = cljs.core._nth.call(null,c__5458__auto__,i__13119);
var k = cljs.core.nth.call(null,vec__13123,(0),null);
var v = cljs.core.nth.call(null,vec__13123,(1),null);
cljs.core.chunk_append.call(null,b__13120,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__13119,rk,required_QMARK_,vec__13123,k,v,c__5458__auto__,size__5459__auto__,b__13120,s__13118__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__13119,rk,required_QMARK_,vec__13123,k,v,c__5458__auto__,size__5459__auto__,b__13120,s__13118__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__13126 = (i__13119 + (1));
i__13119 = G__13126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13120),schema$core$map_elements_$_iter__13117.call(null,cljs.core.chunk_rest.call(null,s__13118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13120),null);
}
} else {
var vec__13124 = cljs.core.first.call(null,s__13118__$2);
var k = cljs.core.nth.call(null,vec__13124,(0),null);
var v = cljs.core.nth.call(null,vec__13124,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__13124,k,v,s__13118__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__13124,k,v,s__13118__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__13117.call(null,cljs.core.rest.call(null,s__13118__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__5460__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__5460__auto__ = (function schema$core$map_error_$_iter__13135(s__13136){
return (new cljs.core.LazySeq(null,(function (){
var s__13136__$1 = s__13136;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13136__$1);
if(temp__4425__auto__){
var s__13136__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13136__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13136__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13138 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13137 = (0);
while(true){
if((i__13137 < size__5459__auto__)){
var vec__13141 = cljs.core._nth.call(null,c__5458__auto__,i__13137);
var k = cljs.core.nth.call(null,vec__13141,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13141,(1),null);
cljs.core.chunk_append.call(null,b__13138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__13143 = (i__13137 + (1));
i__13137 = G__13143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13138),schema$core$map_error_$_iter__13135.call(null,cljs.core.chunk_rest.call(null,s__13136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13138),null);
}
} else {
var vec__13142 = cljs.core.first.call(null,s__13136__$2);
var k = cljs.core.nth.call(null,vec__13142,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13142,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__13135.call(null,cljs.core.rest.call(null,s__13136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5460__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__13144_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__13144_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5460__auto__ = (function schema$core$map_explain_$_iter__13153(s__13154){
return (new cljs.core.LazySeq(null,(function (){
var s__13154__$1 = s__13154;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13154__$1);
if(temp__4425__auto__){
var s__13154__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13154__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13154__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13156 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13155 = (0);
while(true){
if((i__13155 < size__5459__auto__)){
var vec__13159 = cljs.core._nth.call(null,c__5458__auto__,i__13155);
var k = cljs.core.nth.call(null,vec__13159,(0),null);
var v = cljs.core.nth.call(null,vec__13159,(1),null);
cljs.core.chunk_append.call(null,b__13156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__13161 = (i__13155 + (1));
i__13155 = G__13161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13156),schema$core$map_explain_$_iter__13153.call(null,cljs.core.chunk_rest.call(null,s__13154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13156),null);
}
} else {
var vec__13160 = cljs.core.first.call(null,s__13154__$2);
var k = cljs.core.nth.call(null,vec__13160,(0),null);
var v = cljs.core.nth.call(null,vec__13160,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__13153.call(null,cljs.core.rest.call(null,s__13154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5460__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13163,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13165 = (((k13163 instanceof cljs.core.Keyword))?k13163.fqn:null);
switch (G__13165) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13163,else__5305__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Queue{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13162){
var self__ = this;
var G__13162__$1 = this;
return (new cljs.core.RecordIter((0),G__13162__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13162){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13166 = cljs.core.keyword_identical_QMARK_;
var expr__13167 = k__5310__auto__;
if(cljs.core.truth_(pred__13166.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__13167))){
return (new schema.core.Queue(G__13162,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13162),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13162){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__13162,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__13164){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__13164),null,cljs.core.dissoc.call(null,G__13164,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13171,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13173 = (((k13171 instanceof cljs.core.Keyword))?k13171.fqn:null);
switch (G__13173) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13171,else__5305__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.One{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13170){
var self__ = this;
var G__13170__$1 = this;
return (new cljs.core.RecordIter((0),G__13170__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13170){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13174 = cljs.core.keyword_identical_QMARK_;
var expr__13175 = k__5310__auto__;
if(cljs.core.truth_(pred__13174.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__13175))){
return (new schema.core.One(G__13170,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13174.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__13175))){
return (new schema.core.One(self__.schema,G__13170,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13174.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__13175))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__13170,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13170),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13170){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__13170,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__13172){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__13172),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__13172),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__13172),null,cljs.core.dissoc.call(null,G__13172,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__13183 = cljs.core.split_with.call(null,(function (p1__13178_SHARP_){
return ((p1__13178_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__13178_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__13183,(0),null);
var more = cljs.core.nth.call(null,vec__13183,(1),null);
var vec__13184 = cljs.core.split_with.call(null,((function (vec__13183,required,more){
return (function (p1__13179_SHARP_){
var and__4676__auto__ = (p1__13179_SHARP_ instanceof schema.core.One);
if(and__4676__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__13179_SHARP_);
} else {
return and__4676__auto__;
}
});})(vec__13183,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__13184,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13184,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__13183,required,more,vec__13184,optional,more__$1){
return (function (p1__13180_SHARP_){
return !((p1__13180_SHARP_ instanceof schema.core.One));
});})(vec__13183,required,more,vec__13184,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__13185_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__13185_SHARP_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__13186 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__13186,(0),null);
var multi = cljs.core.nth.call(null,vec__13186,(1),null);
return cljs.core.concat.call(null,(function (){var iter__5460__auto__ = ((function (vec__13186,singles,multi,this$__$1){
return (function schema$core$iter__13187(s__13188){
return (new cljs.core.LazySeq(null,((function (vec__13186,singles,multi,this$__$1){
return (function (){
var s__13188__$1 = s__13188;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13188__$1);
if(temp__4425__auto__){
var s__13188__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13188__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13188__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13190 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13189 = (0);
while(true){
if((i__13189 < size__5459__auto__)){
var s = cljs.core._nth.call(null,c__5458__auto__,i__13189);
cljs.core.chunk_append.call(null,b__13190,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (i__13189,required_QMARK_,s,c__5458__auto__,size__5459__auto__,b__13190,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (i__13189,temp__4423__auto__,required_QMARK_,s,c__5458__auto__,size__5459__auto__,b__13190,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(i__13189,temp__4423__auto__,required_QMARK_,s,c__5458__auto__,size__5459__auto__,b__13190,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(i__13189,required_QMARK_,s,c__5458__auto__,size__5459__auto__,b__13190,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1))
);
})());

var G__13196 = (i__13189 + (1));
i__13189 = G__13196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13190),schema$core$iter__13187.call(null,cljs.core.chunk_rest.call(null,s__13188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13190),null);
}
} else {
var s = cljs.core.first.call(null,s__13188__$2);
return cljs.core.cons.call(null,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (required_QMARK_,s,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4423__auto__,required_QMARK_,s,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(required_QMARK_,s,s__13188__$2,temp__4425__auto__,vec__13186,singles,multi,this$__$1))
);
})(),schema$core$iter__13187.call(null,cljs.core.rest.call(null,s__13188__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13186,singles,multi,this$__$1))
,null,null));
});})(vec__13186,singles,multi,this$__$1))
;
return iter__5460__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,extra)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__13191 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__13191,(0),null);
var multi = cljs.core.nth.call(null,vec__13191,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__5460__auto__ = ((function (vec__13191,singles,multi,this$__$1){
return (function schema$core$iter__13192(s__13193){
return (new cljs.core.LazySeq(null,((function (vec__13191,singles,multi,this$__$1){
return (function (){
var s__13193__$1 = s__13193;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13193__$1);
if(temp__4425__auto__){
var s__13193__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13193__$2)){
var c__5458__auto__ = cljs.core.chunk_first.call(null,s__13193__$2);
var size__5459__auto__ = cljs.core.count.call(null,c__5458__auto__);
var b__13195 = cljs.core.chunk_buffer.call(null,size__5459__auto__);
if((function (){var i__13194 = (0);
while(true){
if((i__13194 < size__5459__auto__)){
var s = cljs.core._nth.call(null,c__5458__auto__,i__13194);
cljs.core.chunk_append.call(null,b__13195,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__13197 = (i__13194 + (1));
i__13194 = G__13197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13195),schema$core$iter__13192.call(null,cljs.core.chunk_rest.call(null,s__13193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13195),null);
}
} else {
var s = cljs.core.first.call(null,s__13193__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__13192.call(null,cljs.core.rest.call(null,s__13193__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13191,singles,multi,this$__$1))
,null,null));
});})(vec__13191,singles,multi,this$__$1))
;
return iter__5460__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13202,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13204 = (((k13202 instanceof cljs.core.Keyword))?k13202.fqn:null);
switch (G__13204) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13202,else__5305__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.Record{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13201){
var self__ = this;
var G__13201__$1 = this;
return (new cljs.core.RecordIter((0),G__13201__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13201){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13205 = cljs.core.keyword_identical_QMARK_;
var expr__13206 = k__5310__auto__;
if(cljs.core.truth_(pred__13205.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__13206))){
return (new schema.core.Record(G__13201,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13205.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__13206))){
return (new schema.core.Record(self__.klass,G__13201,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13201),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13201){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__13201,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__13198_SHARP_){
return (p1__13198_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__13199_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__13199_SHARP_),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4423__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__13200_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__13200_SHARP_),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__13203){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__13203),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__13203),null,cljs.core.dissoc.call(null,G__13203,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__13212 = cljs.core.split_with.call(null,(function (p1__13209_SHARP_){
return (p1__13209_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__13212,(0),null);
var more = cljs.core.nth.call(null,vec__13212,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__13212,required,more){
return (function (p1__13210_SHARP_){
return schema.core.explain.call(null,p1__13210_SHARP_.schema);
});})(vec__13212,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k13214,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__13216 = (((k13214 instanceof cljs.core.Keyword))?k13214.fqn:null);
switch (G__13216) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13214,else__5305__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.core.FnSchema{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13213){
var self__ = this;
var G__13213__$1 = this;
return (new cljs.core.RecordIter((0),G__13213__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
var h__5123__auto__ = self__.__hash;
if(!((h__5123__auto__ == null))){
return h__5123__auto__;
} else {
var h__5123__auto____$1 = cljs.core.hash_imap.call(null,this__5297__auto____$1);
self__.__hash = h__5123__auto____$1;

return h__5123__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4676__auto__ = other__5299__auto__;
if(cljs.core.truth_(and__4676__auto__)){
var and__4676__auto____$1 = (this__5298__auto____$1.constructor === other__5299__auto__.constructor);
if(and__4676__auto____$1){
return cljs.core.equiv_map.call(null,this__5298__auto____$1,other__5299__auto__);
} else {
return and__4676__auto____$1;
}
} else {
return and__4676__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__13213){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__13217 = cljs.core.keyword_identical_QMARK_;
var expr__13218 = k__5310__auto__;
if(cljs.core.truth_(pred__13217.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__13218))){
return (new schema.core.FnSchema(G__13213,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__13217.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__13218))){
return (new schema.core.FnSchema(self__.output_schema,G__13213,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__13213),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__13213){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__13213,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__11483__11484__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__11483__11484__auto__),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__13215){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__13215),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__13215),null,cljs.core.dissoc.call(null,G__13215,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__4688__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
var m__11208__auto__ = cljs.core.meta.call(null,f);
var k__11209__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4423__auto__ = cljs.core.find.call(null,m__11208__auto__,k__11209__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__11210__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__11210__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__11209__auto__,m__11208__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map?rel=1496645229276