// Compiled by ClojureScript 1.7.189 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5302__auto__,k__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
return cljs.core._lookup.call(null,this__5302__auto____$1,k__5303__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5304__auto__,k11352,else__5305__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
var G__11354 = (((k11352 instanceof cljs.core.Keyword))?k11352.fqn:null);
switch (G__11354) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11352,else__5305__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.call(null,((function (constructor$__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
});})(constructor$__$1,this$__$1))
,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
,cljs.core.reverse.call(null,self__.elements));
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__4688__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__4688__auto__)){
return or__4688__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__4688__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__4688__auto____$1){
return or__4688__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor$__$1.call(null,res__$1);
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5316__auto__,writer__5317__auto__,opts__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
var pr_pair__5319__auto__ = ((function (this__5316__auto____$1){
return (function (keyval__5320__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,cljs.core.pr_writer,""," ","",opts__5318__auto__,keyval__5320__auto__);
});})(this__5316__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5317__auto__,pr_pair__5319__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__5318__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11351){
var self__ = this;
var G__11351__$1 = this;
return (new cljs.core.RecordIter((0),G__11351__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5306__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5297__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5298__auto__,other__5299__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5311__auto__,k__5312__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__5312__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5311__auto____$1),self__.__meta),k__5312__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5312__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5309__auto__,k__5310__auto__,G__11351){
var self__ = this;
var this__5309__auto____$1 = this;
var pred__11355 = cljs.core.keyword_identical_QMARK_;
var expr__11356 = k__5310__auto__;
if(cljs.core.truth_(pred__11355.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__11356))){
return (new schema.spec.collection.CollectionSpec(G__11351,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11355.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__11356))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__11351,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11355.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__11356))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__11351,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11355.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__11356))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__11351,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5310__auto__,G__11351),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5314__auto__){
var self__ = this;
var this__5314__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5301__auto__,G__11351){
var self__ = this;
var this__5301__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__11351,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5307__auto__,entry__5308__auto__){
var self__ = this;
var this__5307__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5308__auto__)){
return cljs.core._assoc.call(null,this__5307__auto____$1,cljs.core._nth.call(null,entry__5308__auto__,(0)),cljs.core._nth.call(null,entry__5308__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5307__auto____$1,entry__5308__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__5336__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__5336__auto__,writer__5337__auto__){
return cljs.core._write.call(null,writer__5337__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__11353){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__11353),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__11353),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__11353),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__11353),null,cljs.core.dissoc.call(null,G__11353,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor$,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.Keyword(null,"zero-or-more","zero-or-more",-1629905900),new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (item_fn,coll){
var seq__11363_11367 = cljs.core.seq.call(null,coll);
var chunk__11364_11368 = null;
var count__11365_11369 = (0);
var i__11366_11370 = (0);
while(true){
if((i__11366_11370 < count__11365_11369)){
var x_11371 = cljs.core._nth.call(null,chunk__11364_11368,i__11366_11370);
item_fn.call(null,x_11371);

var G__11372 = seq__11363_11367;
var G__11373 = chunk__11364_11368;
var G__11374 = count__11365_11369;
var G__11375 = (i__11366_11370 + (1));
seq__11363_11367 = G__11372;
chunk__11364_11368 = G__11373;
count__11365_11369 = G__11374;
i__11366_11370 = G__11375;
continue;
} else {
var temp__4425__auto___11376 = cljs.core.seq.call(null,seq__11363_11367);
if(temp__4425__auto___11376){
var seq__11363_11377__$1 = temp__4425__auto___11376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11363_11377__$1)){
var c__5491__auto___11378 = cljs.core.chunk_first.call(null,seq__11363_11377__$1);
var G__11379 = cljs.core.chunk_rest.call(null,seq__11363_11377__$1);
var G__11380 = c__5491__auto___11378;
var G__11381 = cljs.core.count.call(null,c__5491__auto___11378);
var G__11382 = (0);
seq__11363_11367 = G__11379;
chunk__11364_11368 = G__11380;
count__11365_11369 = G__11381;
i__11366_11370 = G__11382;
continue;
} else {
var x_11383 = cljs.core.first.call(null,seq__11363_11377__$1);
item_fn.call(null,x_11383);

var G__11384 = cljs.core.next.call(null,seq__11363_11377__$1);
var G__11385 = null;
var G__11386 = (0);
var G__11387 = (0);
seq__11363_11367 = G__11384;
chunk__11364_11368 = G__11385;
count__11365_11369 = G__11386;
i__11366_11370 = G__11387;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),(cljs.core.truth_(required_QMARK_)?new cljs.core.Keyword(null,"exactly-one","exactly-one",-294043587):new cljs.core.Keyword(null,"at-most-one","at-most-one",-1612772829)),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});

//# sourceMappingURL=collection.js.map?rel=1496645227064