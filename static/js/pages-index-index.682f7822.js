(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"09ec":function(t,e,i){"use strict";i.r(e);var n=i("e1c1"),a=i("dcce");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("a518");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"13f73da8",null,!1,n["a"],void 0);e["default"]=d.exports},"0a00":function(t,e,i){var n=i("673b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("046c18dd",n,!0,{sourceMap:!1,shadowMode:!1})},"0d46":function(t,e,i){"use strict";i.r(e);var n=i("86a9"),a=i("4793");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6205");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6f48037d",null,!1,n["a"],void 0);e["default"]=d.exports},4793:function(t,e,i){"use strict";i.r(e);var n=i("5674"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"536b":function(t,e,i){var n=i("e01c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d0e5f84c",n,!0,{sourceMap:!1,shadowMode:!1})},5674:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d401"),i("d3b7"),i("25f0"),i("159b"),i("ac1f"),i("e25e");var n={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"5b7c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},6205:function(t,e,i){"use strict";var n=i("8087"),a=i.n(n);a.a},"673b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=e},"6b5e":function(t,e,i){"use strict";var n=i("536b"),a=i.n(n);a.a},8087:function(t,e,i){var n=i("d4be");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("82ba1d78",n,!0,{sourceMap:!1,shadowMode:!1})},"86a9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},a=[]},"877c":function(t,e,i){"use strict";i.r(e);var n=i("e61a"),a=i("8c5b");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0731368a",null,!1,n["a"],void 0);e["default"]=d.exports},"8c5b":function(t,e,i){"use strict";i.r(e);var n=i("e120"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"9aa5":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9"),i("4e82");var a=n(i("5530")),r=i("26cb"),o=i("4432"),d={data:function(){return{key:"",charactersData:"",customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,a.default)({favTitle:function(){return this.favList.length},allTitle:function(){return this.allList.length},notice:function(){return this.$store.getters.notice}},(0,r.mapState)(["today","config","isBeta","version","favObj","favList","allList","profileData"])),onUnload:function(){uni.$off("initData")},onLoad:function(){this.charactersData=o.charactersData;var t=uni.getStorageSync("ysin_config");t&&this.$store.commit("setConfig",t);var e=this;uni.$on("initData",(function(){e.initData()})),this.initData()},onShareAppMessage:function(e){return"button"===e.from&&t.log(e.target),{title:"Ysin - 原神角色练度计算",path:"/pages/index/index"}},methods:{goTest:function(){t.log("go Battle"),uni.navigateTo({url:"/pages/Battle/Battle"})},toggle:function(t){this.$refs.popup.open()},closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){var t=uni.getStorageSync("ysin_profileData");t&&this.$store.commit("setProfileData",t),this.$store.commit("initToday");var e=uni.getStorageSync("favObj");e||(e={});var i=[],n=[];for(var a in o.charactersData){var r=o.charactersData[a],d=e[r.name];d?d.isFav?(d.stage||(d.stage=0),i.push(r)):n.push(r):(e[r.name]={isFav:!1,note:"",tScore:0,dScore:0,stage:0,isScore:!1},n.push(r))}n.sort((function(t,e){return e.rank-t.rank})),i.sort((function(t,i){return e[i.name].index-e[t.name].index})),this.$store.commit("setFavObj",e),this.$store.commit("setAllList",n),this.$store.commit("setFavList",i)},getMore:function(){uni.switchTab({url:"/pages/my/my"})},getProfile:function(){uni.navigateTo({url:"/pages/profile/profile?new=true"})},toProfileDetail:function(){uni.navigateTo({url:"../../package/pages/profile/detail"})},goSort:function(){uni.navigateTo({url:"sort"})},toProfile:function(t){var e=this.profileData.list[t],i=o.charactersData[e.cId];this.$store.commit("setCharacter",i),this.$store.commit("setPreset",e),uni.navigateTo({url:"../../package/pages/character/detail?index="+t})},toDetail:function(t){this.$store.commit("setCharacter",t);var e=uni.getStorageSync(t.name);e?(e.cId||(e.cId=t.name),this.$store.commit("setPreset",e),uni.navigateTo({url:"../../package/pages/character/detail?cId="+t.name})):(this.$store.commit("initCharacter",t.name),uni.navigateTo({url:"../../package/pages/character/book?index=99"}))}}};e.default=d}).call(this,i("5a52")["default"])},a139:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={updateNotice:i("877c").default,uniCard:i("3d92").default,uniListItem:i("6e18").default,uniBadge:i("8871").default,uniSection:i("89d3").default,uniGrid:i("0d46").default,uniGridItem:i("09ec").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("update-notice"),i("v-uni-view",{staticClass:"example-body"},[i("uni-card",{attrs:{margin:"12px -1px",padding:"0",spacing:"0"}},[t.profileData.info?i("uni-list-item",{attrs:{border:!1,clickable:!0,"thumb-size":"lg",title:t.profileData.info.title,note:t.profileData.info.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfileDetail.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-image",{staticClass:"image2",attrs:{src:t.charactersData[t.profileData.info.avatarId].avatar,mode:"aspectFill"}})]},proxy:!0},{key:"footer",fn:function(){return[i("uni-badge",{attrs:{text:t.notice}})]},proxy:!0}],null,!1,1914685434)}):i("uni-list-item",{attrs:{clickable:!0,"thumb-size":"lg",title:"未设置..",note:"点击添加游戏展示柜信息....","show-arrow":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getProfile.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-image",{staticClass:"image2",attrs:{src:t.charactersData["traveller"].avatar,mode:"aspectFill"}})]},proxy:!0}])})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.favList.length>0,expression:"favList.length > 0"}]},[i("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"收藏 - "+t.favTitle,color:"#fff",type:"line"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort.apply(void 0,arguments)}}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.favList,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.favObj[e.name].stage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:t.customStyle}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.favObj[e.name].note?t.favObj[e.name].note:e.chs))])],1)],1)})),1)],1),i("v-uni-view",[i("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"所有 - "+t.allTitle,color:"#fff",type:"line"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort.apply(void 0,arguments)}}}),i("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(e,n){return i("uni-grid-item",{key:n,staticClass:"uni-grid-item"},[i("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("v-uni-image",{staticClass:"image",attrs:{src:e.avatar,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"text"},[t._v(t._s(e.chs))])],1)],1)})),1)],1)],1)],1)},r=[]},a518:function(t,e,i){"use strict";var n=i("0a00"),a=i.n(n);a.a},d242:function(t,e,i){"use strict";i.r(e);var n=i("a139"),a=i("d84c");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("6b5e");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"60eb98be",null,!1,n["a"],void 0);e["default"]=d.exports},d4be:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},d84c:function(t,e,i){"use strict";i.r(e);var n=i("9aa5"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},dcce:function(t,e,i){"use strict";i.r(e);var n=i("5b7c"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},e01c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\nuni-page-body[data-v-60eb98be]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}body.?%PAGE?%[data-v-60eb98be]{background-color:#fff}uni-view[data-v-60eb98be]{font-size:14px;line-height:inherit}\n.example-body[data-v-60eb98be]{flex-direction:column;padding:15px;background-color:#fff}.uni-textarea[data-v-60eb98be]{width:auto!important}.image[data-v-60eb98be]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.image2[data-v-60eb98be]{margin-right:%?30?%;\n\t/* \t\twidth: 100rpx;\n\theight: 100rpx;\n\tborder-radius: 8rpx; */width:%?110?%;height:%?110?%;border-radius:%?65?%}.notice[data-v-60eb98be]{background-color:rgba(185,203,255,.27058823529411763)!important\n\t/* \tfont-weight: 700;\n\tcolor: #b1968b!important; */}.text2[data-v-60eb98be]{text-align:center;font-size:13px;color:#333}.text[data-v-60eb98be]{text-align:center;font-size:13px;margin-top:6px;color:#333}.example-body[data-v-60eb98be]{\ndisplay:block\n}.uni-grid-item[data-v-60eb98be]{height:auto!important}.grid-item-box[data-v-60eb98be]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?28?% 0 %?8?%;margin:%?10?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-60eb98be]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-60eb98be]{height:%?400?%}.search-icons[data-v-60eb98be]{padding:%?16?%}.search-container-bar[data-v-60eb98be]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-60eb98be] .uni-searchbar__box{border-width:0}\n[data-v-60eb98be] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-60eb98be]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-60eb98be]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-60eb98be]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},e120:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"update-notice",data:function(){return{notice:"2023-03-07 20:49:16"}},mounted:function(){var t=uni.getStorageSync("ysin-notice-date");t!=this.notice&&this.$refs.popup.open()},methods:{dialogMore:function(){uni.setStorageSync("ysin-notice-date",this.notice),uni.switchTab({url:"/pages/my/my"})},dialogConfirm:function(){uni.setStorageSync("ysin-notice-date",this.notice)}}};e.default=n},e1c1:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[]},e61a:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-popup",{ref:"popup",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{cancelText:"支持作者",confirmText:"关闭",title:t.notice},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogConfirm.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("1、添加展示柜保留超过8个角色、编辑、排序功能\n\t\t\t\t2、添加每日素材提醒功能（展示柜中设置）\n\t\t\t\t3、添加了所有水、草角色的绽放流派\n\t\t\t\t4、修复了流浪者吃不到部分攻速增益的问题\n\t\t\t\t5、修复饰铁之花展示柜读取错误的问题\n\t\t\t\t6、修复甘雨、提纳里重击二段能吃到弹弓的问题")])],1)],1)],1)},r=[]}}]);