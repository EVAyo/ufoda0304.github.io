(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-weapon"],{1291:function(n,t,e){"use strict";e.r(t);var a=e("6b9d"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"55f4":function(n,t,e){"use strict";var a=e("d0e9"),i=e.n(a);i.a},"6b9d":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(n){this.$emit("scrolltolower")},scroll:function(n){this.$emit("scroll",n)}}};t.default=a},"6c29":function(n,t,e){var a=e("a1ae");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("37f0ae79",a,!0,{sourceMap:!1,shadowMode:!1})},"91b6":function(n,t,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac1f"),e("5319");var i=e("0d89"),o=a(e("d37b")),s=e("a24b"),r={data:function(){return{book:{default:{weapons:[],artifacts:[]}},ImageUrl:{},ids:[],weapons:[],weaponsData:[]}},onLoad:function(){this.weaponsData=i.weaponsData,this.ImageUrl=o.default;var n=this.$store.getters.character;this.character=n;var t=s.bookData[n.name];t&&(this.book=t),this.weapons=i.weaponsByType[n.weapon];var e=this.$store.state.preset;if(e.school&&e.school.id){var a=e.school.id.replace("-","");this.book[a]?this.ids=this.book[a].weapons:this.ids=this.book.default.weapons}else this.ids=this.book.default.weapons},methods:{select:function(n){uni.$emit("weaponChanged",n),uni.navigateBack({delta:1})}}};t.default=r},9293:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this.$createElement,t=this._self._c||n;return t("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?t("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?t("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},i=[]},9740:function(n,t,e){"use strict";e.r(t);var a=e("91b6"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},a1ae:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),n.exports=t},add1:function(n,t,e){"use strict";e.r(t);var a=e("9293"),i=e("1291");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("ffd4");var s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"6fce09b0",null,!1,a["a"],void 0);t["default"]=r.exports},b46b:function(n,t,e){"use strict";e.r(t);var a=e("e752"),i=e("9740");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("55f4");var s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"e30cdf2c",null,!1,a["a"],void 0);t["default"]=r.exports},ba9d:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \t.js {\n\twidth: 25%;\n\tbackground-color: rgb(101,169,227);\n}\n\n.js2 {\n\twidth: 5%;\n\tbackground-color: rgb(106,99,171);\n}\n\n\n.skills {\nfont-size: 14px;\n  text-align: right;\n  padding-right: 20px;\n  line-height: 40px;\n  color: white;\n} */",""]),n.exports=t},d0e9:function(n,t,e){var a=e("ba9d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("14f3f632",a,!0,{sourceMap:!1,shadowMode:!1})},e752:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={uniList:e("add1").default,uniSection:e("89d3").default,uniListItem:e("6e18").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("uni-list",{attrs:{border:!1}},[n.ids[0]?e("uni-section",{attrs:{title:"推荐",type:"line"}},n._l(n.ids,(function(t,a){return n.weaponsData[t]?e("uni-list-item",{key:a,attrs:{title:n.weaponsData[t].chs,clickable:!0,thumb:n.ImageUrl[t],"thumb-size":"lg",note:n.book.wNotes?n.book.wNotes[t]:""},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.select(n.weaponsData[t])}}}):n._e()})),1):n._e(),e("uni-section",{attrs:{title:"其他",type:"line"}},n._l(n.weapons,(function(t,a){return e("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:n.ids.indexOf(t.name)<0,expression:"ids.indexOf(weapon.name) < 0"}],key:a,attrs:{title:t.chs,clickable:!0,thumb:n.ImageUrl[t.name],"thumb-size":"lg"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.select(t)}}})})),1)],1)],1)},o=[]},ffd4:function(n,t,e){"use strict";var a=e("6c29"),i=e.n(a);i.a}}]);