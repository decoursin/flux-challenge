// Compiled by ClojureScript 1.7.189 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__5343__auto__ = (((_ == null))?null:_);
var m__5344__auto__ = (chord.format.freeze[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,_,obj);
} else {
var m__5344__auto____$1 = (chord.format.freeze["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__5343__auto__ = (((_ == null))?null:_);
var m__5344__auto__ = (chord.format.thaw[goog.typeOf(x__5343__auto__)]);
if(!((m__5344__auto__ == null))){
return m__5344__auto__.call(null,_,s);
} else {
var m__5344__auto____$1 = (chord.format.thaw["_"]);
if(!((m__5344__auto____$1 == null))){
return m__5344__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5603__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5604__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5605__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5605__auto__,method_table__5601__auto__,prefer_table__5602__auto__,method_cache__5603__auto__,cached_hierarchy__5604__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format13641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format13641 = (function (_,meta13642){
this._ = _;
this.meta13642 = meta13642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format13641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13643,meta13642__$1){
var self__ = this;
var _13643__$1 = this;
return (new chord.format.t_chord$format13641(self__._,meta13642__$1));
});

chord.format.t_chord$format13641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13643){
var self__ = this;
var _13643__$1 = this;
return self__.meta13642;
});

chord.format.t_chord$format13641.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format13641.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format13641.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format13641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta13642","meta13642",89702056,null)], null);
});

chord.format.t_chord$format13641.cljs$lang$type = true;

chord.format.t_chord$format13641.cljs$lang$ctorStr = "chord.format/t_chord$format13641";

chord.format.t_chord$format13641.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.format/t_chord$format13641");
});

chord.format.__GT_t_chord$format13641 = (function chord$format$__GT_t_chord$format13641(___$1,meta13642){
return (new chord.format.t_chord$format13641(___$1,meta13642));
});

}

return (new chord.format.t_chord$format13641(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format13644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format13644 = (function (_,meta13645){
this._ = _;
this.meta13645 = meta13645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format13644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13646,meta13645__$1){
var self__ = this;
var _13646__$1 = this;
return (new chord.format.t_chord$format13644(self__._,meta13645__$1));
});

chord.format.t_chord$format13644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13646){
var self__ = this;
var _13646__$1 = this;
return self__.meta13645;
});

chord.format.t_chord$format13644.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format13644.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format13644.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format13644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta13645","meta13645",-639004951,null)], null);
});

chord.format.t_chord$format13644.cljs$lang$type = true;

chord.format.t_chord$format13644.cljs$lang$ctorStr = "chord.format/t_chord$format13644";

chord.format.t_chord$format13644.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.format/t_chord$format13644");
});

chord.format.__GT_t_chord$format13644 = (function chord$format$__GT_t_chord$format13644(___$1,meta13645){
return (new chord.format.t_chord$format13644(___$1,meta13645));
});

}

return (new chord.format.t_chord$format13644(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format13647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format13647 = (function (opts,json_formatter,meta13648){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta13648 = meta13648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format13647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_13649,meta13648__$1){
var self__ = this;
var _13649__$1 = this;
return (new chord.format.t_chord$format13647(self__.opts,self__.json_formatter,meta13648__$1));
});})(json_formatter))
;

chord.format.t_chord$format13647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_13649){
var self__ = this;
var _13649__$1 = this;
return self__.meta13648;
});})(json_formatter))
;

chord.format.t_chord$format13647.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format13647.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format13647.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format13647.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta13648","meta13648",757260125,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format13647.cljs$lang$type = true;

chord.format.t_chord$format13647.cljs$lang$ctorStr = "chord.format/t_chord$format13647";

chord.format.t_chord$format13647.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.format/t_chord$format13647");
});})(json_formatter))
;

chord.format.__GT_t_chord$format13647 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format13647(opts__$1,json_formatter__$1,meta13648){
return (new chord.format.t_chord$format13647(opts__$1,json_formatter__$1,meta13648));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format13647(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format13650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format13650 = (function (_,meta13651){
this._ = _;
this.meta13651 = meta13651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format13650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13652,meta13651__$1){
var self__ = this;
var _13652__$1 = this;
return (new chord.format.t_chord$format13650(self__._,meta13651__$1));
});

chord.format.t_chord$format13650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13652){
var self__ = this;
var _13652__$1 = this;
return self__.meta13651;
});

chord.format.t_chord$format13650.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format13650.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format13650.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format13650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta13651","meta13651",277942478,null)], null);
});

chord.format.t_chord$format13650.cljs$lang$type = true;

chord.format.t_chord$format13650.cljs$lang$ctorStr = "chord.format/t_chord$format13650";

chord.format.t_chord$format13650.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.format/t_chord$format13650");
});

chord.format.__GT_t_chord$format13650 = (function chord$format$__GT_t_chord$format13650(___$1,meta13651){
return (new chord.format.t_chord$format13650(___$1,meta13651));
});

}

return (new chord.format.t_chord$format13650(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format13653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format13653 = (function (_,meta13654){
this._ = _;
this.meta13654 = meta13654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format13653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13655,meta13654__$1){
var self__ = this;
var _13655__$1 = this;
return (new chord.format.t_chord$format13653(self__._,meta13654__$1));
});

chord.format.t_chord$format13653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13655){
var self__ = this;
var _13655__$1 = this;
return self__.meta13654;
});

chord.format.t_chord$format13653.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format13653.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format13653.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format13653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta13654","meta13654",-1915166958,null)], null);
});

chord.format.t_chord$format13653.cljs$lang$type = true;

chord.format.t_chord$format13653.cljs$lang$ctorStr = "chord.format/t_chord$format13653";

chord.format.t_chord$format13653.cljs$lang$ctorPrWriter = (function (this__5286__auto__,writer__5287__auto__,opt__5288__auto__){
return cljs.core._write.call(null,writer__5287__auto__,"chord.format/t_chord$format13653");
});

chord.format.__GT_t_chord$format13653 = (function chord$format$__GT_t_chord$format13653(___$1,meta13654){
return (new chord.format.t_chord$format13653(___$1,meta13654));
});

}

return (new chord.format.t_chord$format13653(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__13657,p__13658){
var map__13667 = p__13657;
var map__13667__$1 = ((((!((map__13667 == null)))?((((map__13667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13667):map__13667);
var read_ch = cljs.core.get.call(null,map__13667__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__13667__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__13668 = p__13658;
var map__13668__$1 = ((((!((map__13668 == null)))?((((map__13668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13668):map__13668);
var opts = map__13668__$1;
var format = cljs.core.get.call(null,map__13668__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__13667,map__13667__$1,read_ch,write_ch,map__13668,map__13668__$1,opts,format){
return (function (p__13671){
var map__13672 = p__13671;
var map__13672__$1 = ((((!((map__13672 == null)))?((((map__13672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13672):map__13672);
var message = cljs.core.get.call(null,map__13672__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e13674){if((e13674 instanceof Error)){
var e = e13674;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e13674;

}
}});})(fmtr,map__13667,map__13667__$1,read_ch,write_ch,map__13668,map__13668__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__13667,map__13667__$1,read_ch,write_ch,map__13668,map__13668__$1,opts,format){
return (function (p1__13656_SHARP_){
if(cljs.core.truth_(p1__13656_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__13656_SHARP_);
} else {
return null;
}
});})(fmtr,map__13667,map__13667__$1,read_ch,write_ch,map__13668,map__13668__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1496645230658