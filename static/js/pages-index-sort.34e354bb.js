(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-sort"],{"04227":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("c740"),i("fb6a"),i("4e82"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("b85c")),o=n(i("5530")),s=i("26cb"),r={data:function(){return{tempFavList:[],tempAllList:[],tempFavObj:{},tempConfig:{showOptions:[!0,!0,!0]},sortOptions:[["自定义","圣遗物练度","角色练度"],["正序","反序"]],sortIndexs:[0,0],customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,o.default)({},(0,s.mapState)(["favList","allList","favObj","config"])),onLoad:function(){uni.setNavigationBarTitle({title:"设置收藏角色"}),this.initData()},methods:{switchChange:function(t){this.tempConfig.showOptions[t]=!this.tempConfig.showOptions[t]},sortChange:function(t){this.sortIndexs=t.detail.value,this.sortItems(this.sortIndexs)},initData:function(){this.tempFavList=JSON.parse(JSON.stringify(this.favList)),this.tempAllList=JSON.parse(JSON.stringify(this.allList)),this.tempFavObj=JSON.parse(JSON.stringify(this.favObj)),this.tempConfig=JSON.parse(JSON.stringify(this.config))},initSortIndex:function(){this.sortIndexs!=[0,0]&&(this.sortIndexs=[0,0])},moveElement:function(t,e){return Math.abs(e)>t.length&&(e%=t.length),t.slice(-e).concat(t.slice(0,-e))},moveUp:function(t){if(t>0){var e=this.tempFavList.splice(t,1)[0];this.tempFavList.splice(t-1,0,e),this.initSortIndex()}},moveDown:function(t){if(t<this.tempFavList.length-1){var e=this.tempFavList.splice(t,1)[0];this.tempFavList.splice(t+1,0,e),this.initSortIndex()}},addItem:function(t){var e=this.tempAllList.findIndex((function(e){return e.name==t}));e>-1&&(this.tempFavList.push(this.tempAllList[e]),this.tempAllList.splice(e,1),this.tempFavObj[t].isFav=!0,this.initSortIndex())},removeItem:function(t){var e=this.tempFavList.findIndex((function(e){return e.name==t}));e>-1&&(this.tempAllList.unshift(this.tempFavList[e]),this.tempFavList.splice(e,1),this.tempFavObj[t].isFav=!1,this.initSortIndex())},sortItems:function(t){var e,i=this,n=0==t[1],o=(0,a.default)(this.tempFavList);try{for(o.s();!(e=o.n()).done;){var s=e.value,r=this.tempFavObj[s.name];if(void 0==r.isScore){var c=uni.getStorageSync(s.name);this.tempFavObj[s.name]=c?{isFav:!0,note:c.score,tScore:c.tResult.score,dScore:c.dResult.score,stage:c.cStage,isScore:!c.school||c.school.score}:{isFav:!1,note:"",tScore:0,dScore:0,stage:0,isScore:!1}}0==this.tempFavObj[s.name].isScore&&(0==this.tempFavObj[s.name].dScore?(this.tempFavObj[s.name].dScore=n?0:500,this.tempFavObj[s.name].tScore=n?0:500):(this.tempFavObj[s.name].dScore=n?1:500,this.tempFavObj[s.name].tScore=n?1:500))}}catch(u){o.e(u)}finally{o.f()}2==t[0]?this.tempFavList.sort((function(t,e){var a=i.tempFavObj[e.name],o=i.tempFavObj[t.name],s=a.dScore-o.dScore;return n?s:-1*s})):1==t[0]&&this.tempFavList.sort((function(t,e){var a=i.tempFavObj[e.name],o=i.tempFavObj[t.name],s=a.tScore-o.tScore;return n?s:-1*s}))},save:function(){for(var t=0;t<this.tempFavList.length;t++){var e=this.tempFavList[t].name;this.tempFavObj[e].index=1e4-t}this.$store.commit("setIndexList",{tempFavList:this.tempFavList,tempAllList:this.tempAllList,tempFavObj:this.tempFavObj}),uni.navigateBack({delta:1})}}};e.default=r},1205:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,i){"use strict";i.r(e);var n=i("6b9d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},3621:function(t,e,i){"use strict";i.r(e);var n=i("6689"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3d37":function(t,e,i){"use strict";i.r(e);var n=i("444b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"444b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},6164:function(t,e,i){"use strict";var n=i("bf6e"),a=i.n(n);a.a},6689:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"6b9d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=n},"6c28":function(t,e,i){"use strict";i.r(e);var n=i("8b5f"),a=i("d86f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b1aa");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"13fe33a3",null,!1,n["a"],s);e["default"]=c.exports},"78be":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-538187eb]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-538187eb]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-538187eb]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-538187eb]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"7aec":function(t,e,i){"use strict";var n=i("f86f"),a=i.n(n);a.a},"7e98":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-group[data-v-13fe33a3]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-13fe33a3]{margin-left:15px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}",""]),t.exports=e},"84b3":function(t,e,i){var n=i("1205");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("9ed59e78",n,!0,{sourceMap:!1,shadowMode:!1})},"89d3":function(t,e,i){"use strict";i.r(e);var n=i("971c"),a=i("3621");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7aec");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"c5b075ba",null,!1,n["a"],s);e["default"]=c.exports},"8b5f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniIcons:i("fcef").default,buttonBarBottom:i("e265").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"已收藏",type:"line"}}),i("uni-list",[i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.sortIndexs,range:t.sortOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange.apply(void 0,arguments)}}},[i("uni-list-item",{attrs:{showArrow:!0,title:"自动排序",note:"对已收藏的角色排序",rightText:t.sortOptions[0][t.sortIndexs[0]]}})],1),t._l(t.tempFavList,(function(e,n){return i("uni-list-item",{key:n,attrs:{"thumb-size":"lg",thumb:e.avatar,title:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:e.chs,rightText:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:"未初始化"},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-view",{staticClass:"uni-group"},[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveUp(n)}}},[i("uni-icons",{attrs:{type:"arrow-up"}})],1),i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveDown(n)}}},[i("uni-icons",{attrs:{type:"arrow-down"}})],1),i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeItem(e.name)}}},[i("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)})}))],2),i("uni-section",{attrs:{title:"未收藏 ",type:"line"}}),i("uni-list",t._l(t.tempAllList,(function(e,n){return i("uni-list-item",{key:n,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.avatar,title:e.chs,rightText:t.tempFavObj[e.name].note?t.tempFavObj[e.name].note:"未初始化"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addItem(e.name)}}})})),1),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1)},o=[]},"971c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("fcef").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},add1:function(t,e,i){"use strict";i.r(e);var n=i("bb284"),a=i("1291");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c286");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e07ee5ea",null,!1,n["a"],s);e["default"]=c.exports},b1aa:function(t,e,i){"use strict";var n=i("c5a1"),a=i.n(n);a.a},bb284:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?i("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?i("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},bf24:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},o=[]},bf6e:function(t,e,i){var n=i("78be");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("26117c53",n,!0,{sourceMap:!1,shadowMode:!1})},c286:function(t,e,i){"use strict";var n=i("84b3"),a=i.n(n);a.a},c5a1:function(t,e,i){var n=i("7e98");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("622edc16",n,!0,{sourceMap:!1,shadowMode:!1})},d86f:function(t,e,i){"use strict";i.r(e);var n=i("04227"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e265:function(t,e,i){"use strict";i.r(e);var n=i("bf24"),a=i("3d37");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6164");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"538187eb",null,!1,n["a"],s);e["default"]=c.exports},f15d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},f86f:function(t,e,i){var n=i("f15d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6eb03f5a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);