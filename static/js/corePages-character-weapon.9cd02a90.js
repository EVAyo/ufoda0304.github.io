(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["corePages-character-weapon"],{1330:function(t,n,e){var i=e("6056");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("47889a34",i,!0,{sourceMap:!1,shadowMode:!1})},"49df":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \t.js {\n\twidth: 25%;\n\tbackground-color: rgb(101,169,227);\n}\n\n.js2 {\n\twidth: 5%;\n\tbackground-color: rgb(106,99,171);\n}\n\n\n.skills {\nfont-size: 14px;\n  text-align: right;\n  padding-right: 20px;\n  line-height: 40px;\n  color: white;\n} */",""]),t.exports=n},"5aaf":function(t,n,e){"use strict";e.r(n);var i=e("8e5f"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},6056:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-48961cb2]{background-color:#fff}.uni-list-item__content[data-v-48961cb2]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-48961cb2]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-48961cb2]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-48961cb2]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-48961cb2]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-48961cb2]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-48961cb2]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-48961cb2]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-48961cb2]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-48961cb2]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-48961cb2]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-48961cb2]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-48961cb2]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-48961cb2]{font-size:13px;color:#999}',""]),t.exports=n},"6bb1":function(t,n,e){"use strict";(function(t){e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("6cc0"),a={data:function(){return{ids:[],weapons:[],weaponsData:[]}},onLoad:function(){this.weaponsData=i.weaponsData;var n=this.$store.getters.character;this.weapons=i.weaponsByType[n.weapon];var e=this.$store.state.preset;if(e.school&&e.school.id){var a=e.school.id.replace("-","");n[a]?(t.log(a),this.ids=n[a].weapons):this.ids=n.default.weapons}else this.ids=n.default.weapons},methods:{select:function(t){uni.$emit("weaponChanged",t),uni.navigateBack({delta:1})}}};n.default=a}).call(this,e("5a52")["default"])},"824a":function(t,n,e){"use strict";var i=e("e39e"),a=e.n(i);a.a},"83c7":function(t,n,e){"use strict";var i=e("1330"),a=e.n(i);a.a},8977:function(t,n,e){"use strict";e.r(n);var i=e("bae7"),a=e("ff3c");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("824a");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1cbc5089",null,!1,i["a"],r);n["default"]=c.exports},"8e5f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};n.default=i},"95c7":function(t,n,e){var i=e("c17f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2fe83f61",i,!0,{sourceMap:!1,shadowMode:!1})},"9ab4":function(t,n,e){"use strict";e.r(n);var i=e("fe7c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},bac6:function(t,n,e){"use strict";var i=e("95c7"),a=e.n(i);a.a},bae7:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniList:e("eab5").default,uniSection:e("db908").default,uniListItem:e("eced").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("uni-list",[t.ids[0]?e("uni-section",{attrs:{title:"推荐",type:"line"}},t._l(t.ids,(function(n,i){return t.weaponsData[n]?e("uni-list-item",{key:i,attrs:{title:t.weaponsData[n].chs,clickable:!0,thumb:t.weaponsData[n].url,"thumb-size":"lg",rightText:""+t.weaponsData[n].atk},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(t.weaponsData[n])}}}):t._e()})),1):t._e(),e("uni-section",{attrs:{title:"其他",type:"line"}},t._l(t.weapons,(function(n,i){return e("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.ids.indexOf(n.name)<0&&n.star>2,expression:"ids.indexOf(weapon.name) < 0 && weapon.star>2"}],key:i,attrs:{title:n.chs,rightText:""+n.atk,clickable:!0,thumb:n.url,"thumb-size":"lg"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(n)}}})})),1)],1)],1)},o=[]},be9ca:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniIcons:e("a5ea").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?e("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?e("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),e("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?e("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?e("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),e("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},c17f:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-3858212e]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-3858212e]{position:relative;z-index:-1}.uni-list--border-top[data-v-3858212e]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-3858212e]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=n},db908:function(t,n,e){"use strict";e.r(n);var i=e("be9ca"),a=e("9ab4");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("83c7");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"48961cb2",null,!1,i["a"],r);n["default"]=c.exports},e39e:function(t,n,e){var i=e("49df");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("139dd2d4",i,!0,{sourceMap:!1,shadowMode:!1})},e753:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},eab5:function(t,n,e){"use strict";e.r(n);var i=e("e753"),a=e("5aaf");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("bac6");var r,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3858212e",null,!1,i["a"],r);n["default"]=c.exports},fe7c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=i},ff3c:function(t,n,e){"use strict";e.r(n);var i=e("6bb1"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}}]);