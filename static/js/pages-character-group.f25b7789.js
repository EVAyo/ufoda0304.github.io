(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-group"],{"09ec":function(t,e,i){"use strict";i.r(e);var n=i("e1c1"),r=i("dcce");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("a518");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"13f73da8",null,!1,n["a"],o);e["default"]=s.exports},"0a00":function(t,e,i){var n=i("673b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("41207bce",n,!0,{sourceMap:!1,shadowMode:!1})},"0d46":function(t,e,i){"use strict";i.r(e);var n=i("86a9"),r=i("4793");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("6205");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"6f48037d",null,!1,n["a"],o);e["default"]=s.exports},"19e8":function(t,e,i){"use strict";var n=i("4ea4");i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("5530")),a=i("26cb"),o=i("4432"),c={data:function(){return{cId:"",removeIndex:0,recommens:["bannite"],names:[],charactersBuffs:[],charactersData:{},charactersHasBuff:[],temp:{},selectIds:[],allList2:{},gridList:[],current:0,swiperDotIndex:0}},computed:(0,r.default)((0,r.default)({},(0,a.mapState)(["version","favObj","character","preset"])),(0,a.mapGetters)(["weapon"])),onLoad:function(){this.initData()},methods:{initData:function(){this.$store.commit("setWeapon",this.weapon),this.charactersData=o.charactersData,this.charactersBuffs=o.charactersBuffs,this.temp=JSON.parse(JSON.stringify(this.preset)),this.temp.gIds&&this.temp.gIds.length>1?this.selectIds=this.temp.gIds:this.selectIds=[this.preset.cId]},addItem:function(t){this.selectIds.length<4?this.selectIds.push(t):uni.showToast({title:"不能超过4人",icon:"none"})},removeItem:function(t,e){0!=e&&(this.selectIds.length>1?this.selectIds.splice(e,1):uni.showToast({title:"不能少于1人",icon:"none"}))},save:function(){var t=JSON.parse(JSON.stringify(this.selectIds));this.$store.commit("setSelectIds",t),uni.navigateTo({url:"effect"})}}};e.default=c},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"36c4":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniGrid:i("0d46").default,uniGridItem:i("09ec").default,buttonBarBottom:i("e265").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"warp"},[i("uni-section",{attrs:{title:"已选 ",type:"line"}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.selectIds,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeItem(e,n)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:t.charactersData[e].avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(t.charactersData[e].chs))])],1)],1)})),1),i("uni-section",{attrs:{title:"角色 ",type:"line"}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.charactersBuffs,(function(e,n){return i("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:t.selectIds.indexOf(e.name)<0,expression:"selectIds.indexOf(item.name) < 0"}],key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addItem(e.name)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.supTitle))])],1)],1)})),1),i("button-bar-bottom",{attrs:{text:"下一步"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},a=[]},"3d37":function(t,e,i){"use strict";i.r(e);var n=i("444b"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"428b":function(t,e,i){var n=i("ee43");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("72be9334",n,!0,{sourceMap:!1,shadowMode:!1})},"444b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},4793:function(t,e,i){"use strict";i.r(e);var n=i("5674"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"4b91":function(t,e,i){"use strict";i.r(e);var n=i("19e8"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},5674:function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"5b7c":function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},6164:function(t,e,i){"use strict";var n=i("bf6e"),r=i.n(n);r.a},6190:function(t,e,i){"use strict";i.r(e);var n=i("36c4"),r=i("4b91");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("d910");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"2bceb07f",null,!1,n["a"],o);e["default"]=s.exports},6205:function(t,e,i){"use strict";var n=i("8087"),r=i.n(n);r.a},6689:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"673b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=e},"78be":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-538187eb]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-538187eb]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-538187eb]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-538187eb]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"7aec":function(t,e,i){"use strict";var n=i("f86f"),r=i.n(n);r.a},8087:function(t,e,i){var n=i("d4be");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("2add2a73",n,!0,{sourceMap:!1,shadowMode:!1})},"86a9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-color":t.borderColor},attrs:{id:t.elId}},[t._t("default")],2)],1)},a=[]},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("971c"),r=i("3621");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("7aec");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"c5b075ba",null,!1,n["a"],o);e["default"]=s.exports},"971c":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},a518:function(t,e,i){"use strict";var n=i("0a00"),r=i.n(n);r.a},bf24:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},a=[]},bf6e:function(t,e,i){var n=i("78be");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("26117c53",n,!0,{sourceMap:!1,shadowMode:!1})},d4be:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},d910:function(t,e,i){"use strict";var n=i("428b"),r=i.n(n);r.a},dcce:function(t,e,i){"use strict";i.r(e);var n=i("5b7c"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e1c1:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[]},e265:function(t,e,i){"use strict";i.r(e);var n=i("bf24"),r=i("3d37");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("6164");var o,c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"538187eb",null,!1,n["a"],o);e["default"]=s.exports},ee43:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".image[data-v-2bceb07f]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-2bceb07f]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-2bceb07f]{height:auto!important}.grid-item-box[data-v-2bceb07f]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},f15d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},f86f:function(t,e,i){var n=i("f15d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("6eb03f5a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);