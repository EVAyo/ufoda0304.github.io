(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-group"],{"0016":function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},"08a3":function(t,e,i){"use strict";var n=i("5477"),r=i.n(n);r.a},"0c29":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".image[data-v-be52b6be]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-be52b6be]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-be52b6be]{height:auto!important}.grid-item-box[data-v-be52b6be]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},1525:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-color":t.borderColor},attrs:{id:t.elId}},[t._t("default")],2)],1)},a=[]},"1c45":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},"1eac":function(t,e,i){"use strict";i.r(e);var n=i("aeef"),r=i("b2c2");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("84ee");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"11d68fc2",null,!1,n["a"],o);e["default"]=s.exports},"3a73":function(t,e,i){var n=i("e8bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("59c92186",n,!0,{sourceMap:!1,shadowMode:!1})},5477:function(t,e,i){var n=i("f887");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("4f505d46",n,!0,{sourceMap:!1,shadowMode:!1})},"5b59":function(t,e,i){"use strict";var n=i("4ea4");i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("5530")),a=i("26cb"),o=i("2062"),c={data:function(){return{cId:"",removeIndex:0,recommens:["bannite"],names:[],charactersBuffs:[],charactersData:{},charactersHasBuff:[],temp:{},selectIds:[],allList2:{},gridList:[],current:0,swiperDotIndex:0}},computed:(0,r.default)((0,r.default)({},(0,a.mapState)(["version","favObj","preset"])),(0,a.mapGetters)(["weapon","character"])),onUnload:function(){},onLoad:function(){this.initData()},methods:{initData:function(){this.$store.commit("setWeapon",this.weapon),this.charactersData=o.charactersData,this.charactersBuffs=o.charactersBuffs,this.temp=JSON.parse(JSON.stringify(this.preset)),this.temp.gIds?this.selectIds=this.temp.gIds:this.selectIds=[this.character.name]},addItem:function(t){this.selectIds.length<4?this.selectIds.push(t):uni.showToast({title:"不能超过4人",icon:"none"})},removeItem:function(t,e){0!=e&&(this.selectIds.length>1?this.selectIds.splice(e,1):uni.showToast({title:"不能少于1人",icon:"none"}))},save:function(){var t=JSON.parse(JSON.stringify(this.selectIds));this.$store.commit("setSelectIds",t),uni.navigateTo({url:"/pages/character/config/effect"})}}};e.default=c},"661a":function(t,e,i){"use strict";i.r(e);var n=i("5b59"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"67ed":function(t,e,i){"use strict";i.r(e);var n=i("1c45"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"6f63":function(t,e,i){var n=i("bfac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("29eeffaa",n,!0,{sourceMap:!1,shadowMode:!1})},8483:function(t,e,i){"use strict";i.r(e);var n=i("aa45"),r=i("fc5c");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("eca8");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"415fc788",null,!1,n["a"],o);e["default"]=s.exports},"84ec":function(t,e,i){"use strict";i.r(e);var n=i("1525"),r=i("8b78");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("b318");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"be94e28a",null,!1,n["a"],o);e["default"]=s.exports},"84ee":function(t,e,i){"use strict";var n=i("3a73"),r=i.n(n);r.a},"8b78":function(t,e,i){"use strict";i.r(e);var n=i("c83b"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},aa45:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowdown"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},ab0d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},a=[]},aeef:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[]},b2c2:function(t,e,i){"use strict";i.r(e);var n=i("0016"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b318:function(t,e,i){"use strict";var n=i("6f63"),r=i.n(n);r.a},b792:function(t,e,i){var n=i("0c29");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("a3cb1638",n,!0,{sourceMap:!1,shadowMode:!1})},bfac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-be94e28a]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-be94e28a]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-be94e28a]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},c83b:function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},ceea:function(t,e,i){"use strict";i.r(e);var n=i("e307"),r=i("661a");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("ea6f");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"be52b6be",null,!1,n["a"],o);e["default"]=s.exports},d145:function(t,e,i){var n=i("ee2b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5e24ef81",n,!0,{sourceMap:!1,shadowMode:!1})},e307:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("8483").default,uniGrid:i("84ec").default,uniGridItem:i("1eac").default,buttonBarBottom:i("f603").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"warp"},[i("uni-section",{attrs:{title:"已选 ",type:"line"}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.selectIds,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeItem(e,n)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:t.charactersData[e].avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.charactersData[e].chs))])],1)],1)})),1),i("uni-section",{attrs:{title:"角色 ",type:"line"}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.charactersBuffs,(function(e,n){return i("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:t.selectIds.indexOf(e.name)<0,expression:"selectIds.indexOf(item.name) < 0"}],key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addItem(e.name)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.supTitle))])],1)],1)})),1),i("button-bar-bottom",{attrs:{text:"下一步"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},a=[]},e8bd:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-11d68fc2]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-11d68fc2]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-11d68fc2]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-11d68fc2]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-11d68fc2]:active{background-color:#f1f1f1}',""]),t.exports=e},ea6f:function(t,e,i){"use strict";var n=i("b792"),r=i.n(n);r.a},eca8:function(t,e,i){"use strict";var n=i("d145"),r=i.n(n);r.a},ee2b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-415fc788]{background-color:#fff}.uni-list-item__content[data-v-415fc788]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-415fc788]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-415fc788]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-415fc788]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-415fc788]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-415fc788]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-415fc788]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-415fc788]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-415fc788]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-415fc788]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-415fc788]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-415fc788]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-415fc788]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-415fc788]{font-size:13px;color:#999}',""]),t.exports=e},f603:function(t,e,i){"use strict";i.r(e);var n=i("ab0d"),r=i("67ed");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("08a3");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"f7d2f876",null,!1,n["a"],o);e["default"]=s.exports},f887:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-f7d2f876]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-f7d2f876]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-f7d2f876]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-f7d2f876]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a}}]);