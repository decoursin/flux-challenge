// Compiled by ClojureScript 1.7.189 {}
goog.provide('decoursin.views');
goog.require('cljs.core');
goog.require('decoursin.db');
goog.require('reagent.core');
goog.require('re_frame.core');
/**
 * Renders the Sith name (ex: Darth Vader) along with
 * his homeworld. If we render, check to see if his apprentice
 * exlusive or master should also be rendered, determined by
 * the direction
 */
decoursin.views.sith_component = (function decoursin$views$sith_component(sith,location){
var this$ = reagent.core.current_component.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"sith-component",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (this$){
return (function (this$__$1){
var sith__$1 = reagent.core.props.call(null,this$__$1);
var direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sith__$1);
var vec__13821 = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction)) && ((location <= (4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,sith__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apprentice","apprentice",-1838808462),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),((1) + location)], null):(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1565245570),direction)) && ((location >= (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,sith__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"master","master",779988698),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),((-1) + location)], null):null));
var id = cljs.core.nth.call(null,vec__13821,(0),null);
var location__$1 = cljs.core.nth.call(null,vec__13821,(1),null);
if((id > (0))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sith","set-sith",1130829758),id,direction,location__$1], null));
} else {
return null;
}
});})(this$))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (this$){
return (function (p__13822){
var map__13823 = p__13822;
var map__13823__$1 = ((((!((map__13823 == null)))?((((map__13823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13823):map__13823);
var sith__$1 = map__13823__$1;
var name = cljs.core.get.call(null,map__13823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var homeworld = cljs.core.get.call(null,map__13823__$1,new cljs.core.Keyword(null,"homeworld","homeworld",1090129115));
var obi_wan_is_here = cljs.core.get.call(null,map__13823__$1,new cljs.core.Keyword(null,"obi-wan-is-here","obi-wan-is-here",1728930267));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.css-slot","li.css-slot",1243613212),((cljs.core.seq.call(null,name))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(obi_wan_is_here)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null):null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),(cljs.core.truth_(obi_wan_is_here)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null):null),[cljs.core.str("Homeworld: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(homeworld))].join('')], null)], null):null)], null);
});})(this$))
], null));
});
decoursin.views.main = (function decoursin$views$main(){
var disable_up_button = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disable-up-button?","disable-up-button?",1626113916)], null));
var disable_down_button = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disable-down-button?","disable-down-button?",-178624821)], null));
var siths = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"siths","siths",1187441410)], null));
var planet = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planet","planet",276671984)], null));
return ((function (disable_up_button,disable_down_button,siths,planet){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.css-root","div.css-root",288131433),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.css-planet-monitor","h1.css-planet-monitor",673342181),"Obi-Wan currently on ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,planet))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.css-scrollable-list","section.css-scrollable-list",-332160067),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.css-slots","ul.css-slots",1284867406),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.sith_component,cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(0)),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Key","Key",1553874408),cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(0))], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.sith_component,cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(1)),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Key","Key",1553874408),cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(1))], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.sith_component,cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(2)),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Key","Key",1553874408),cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(2))], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.sith_component,cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(3)),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Key","Key",1553874408),cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(3))], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [decoursin.views.sith_component,cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(4)),(4)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Key","Key",1553874408),cljs.core.nth.call(null,cljs.core.deref.call(null,siths),(4))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.css-scroll-buttons","div.css-scroll-buttons",-132095388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.css-button-up","button.css-button-up",792039194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,disable_up_button))?"css-button-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disable_up_button,disable_down_button,siths,planet){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,disable_up_button))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-click","button-click",-504937754),new cljs.core.Keyword(null,"up","up",-269712113),e], null));
}
});})(disable_up_button,disable_down_button,siths,planet))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.css-button-down","button.css-button-down",-1643740760),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,disable_down_button))?"css-button-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disable_up_button,disable_down_button,siths,planet){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,disable_down_button))){
return null;
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-click","button-click",-504937754),new cljs.core.Keyword(null,"down","down",1565245570),e], null));
}
});})(disable_up_button,disable_down_button,siths,planet))
], null)], null)], null)], null)], null);
});
;})(disable_up_button,disable_down_button,siths,planet))
});

//# sourceMappingURL=views.js.map?rel=1496645230852