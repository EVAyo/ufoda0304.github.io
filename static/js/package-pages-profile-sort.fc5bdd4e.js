(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-profile-sort"],{"11c5":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af"),i("fb6a"),i("a434"),i("4e82");var n=i("4432"),o={data:function(){return{charactersData:{},list:{},profileData:{},sortOptions:[["自定义","圣遗物练度","角色练度"],["正序","反序"]],sortIndexs:[0,0]}},computed:{},onLoad:function(){uni.setNavigationBarTitle({title:"编辑"}),this.initData()},methods:{switchChange:function(t){this.tempConfig.showOptions[t]=!this.tempConfig.showOptions[t]},sortChange:function(t){this.sortIndexs=t.detail.value,this.sortItems(this.sortIndexs)},initData:function(){this.profileData=JSON.parse(JSON.stringify(this.$store.state.profileData)),this.list=this.profileData.list,this.charactersData=n.charactersData},initSortIndex:function(){this.sortIndexs!=[0,0]&&(this.sortIndexs=[0,0])},moveElement:function(t,e){return Math.abs(e)>t.length&&(e%=t.length),t.slice(-e).concat(t.slice(0,-e))},moveUp:function(t){if(t>0){var e=this.list.splice(t,1)[0];this.list.splice(t-1,0,e)}},moveDown:function(t){if(t<this.list.length-1){var e=this.list.splice(t,1)[0];this.list.splice(t+1,0,e)}},removeItem:function(t){this.list.splice(t,1)},sortItems:function(t){var e=0==t[1];2==t[0]?this.list.sort((function(t,i){if(!t.school.score)return 1;if(!i.school.score)return-1;var n=i.dResult.score-t.dResult.score;return e?n:-1*n})):1==t[0]&&this.list.sort((function(t,i){if(!t.school.score)return 1;if(!i.school.score)return-1;var n=i.tResult.score-t.tResult.score;return e?n:-1*n}))},save:function(){this.$store.commit("updateProfileData",this.profileData),uni.navigateBack({delta:1})}}};e.default=o},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"1ad9":function(t,e,i){"use strict";i.r(e);var n=i("5b08"),o=i("8be8");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("b481");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"c3bab9c0",null,!1,n["a"],void 0);e["default"]=s.exports},"1dfd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},3213:function(t,e,i){var n=i("c123");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("07412a91",n,!0,{sourceMap:!1,shadowMode:!1})},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"3d37":function(t,e,i){"use strict";i.r(e);var n=i("444b"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"444b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},"5b08":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniIcons:i("fcef").default,buttonBarBottom:i("e265").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"展示柜",type:"line"}}),i("uni-list",{attrs:{border:!1}},[i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.sortIndexs,range:t.sortOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"自动排序",note:"按照要求进行排序",rightText:t.sortOptions[0][t.sortIndexs[0]]}})],1),t._l(t.list,(function(e,n){return i("uni-list-item",{key:n,attrs:{"thumb-size":"lg",thumb:t.charactersData[e.cId].avatar,title:e.score?e.score:e.name,rightText:e.score?e.score:e.name},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-view",{staticClass:"uni-group"},[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveUp(n)}}},[i("uni-icons",{attrs:{type:"arrow-up"}})],1),i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveDown(n)}}},[i("uni-icons",{attrs:{type:"arrow-down"}})],1),i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeItem(n)}}},[i("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)})}))],2),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},a=[]},6689:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=n},"6c29":function(t,e,i){var n=i("a1ae");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("37f0ae79",n,!0,{sourceMap:!1,shadowMode:!1})},"748d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},o=[]},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("bd7d"),o=i("3621");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("e36a");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=s.exports},"8be8":function(t,e,i){"use strict";i.r(e);var n=i("11c5"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},o=[]},a1ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},add1:function(t,e,i){"use strict";i.r(e);var n=i("9293"),o=i("1291");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ffd4");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"6fce09b0",null,!1,n["a"],void 0);e["default"]=s.exports},b481:function(t,e,i){"use strict";var n=i("3213"),o=i.n(n);o.a},bcee:function(t,e,i){"use strict";var n=i("e52b"),o=i.n(n);o.a},bd7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},c123:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-group[data-v-c3bab9c0]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-c3bab9c0]{margin-left:15px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}",""]),t.exports=e},d69f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},e265:function(t,e,i){"use strict";i.r(e);var n=i("748d"),o=i("3d37");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("bcee");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"d83b913c",null,!1,n["a"],void 0);e["default"]=s.exports},e36a:function(t,e,i){"use strict";var n=i("fa22"),o=i.n(n);o.a},e52b:function(t,e,i){var n=i("1dfd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1143f6dc",n,!0,{sourceMap:!1,shadowMode:!1})},fa22:function(t,e,i){var n=i("d69f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2403413f",n,!0,{sourceMap:!1,shadowMode:!1})},ffd4:function(t,e,i){"use strict";var n=i("6c29"),o=i.n(n);o.a}}]);