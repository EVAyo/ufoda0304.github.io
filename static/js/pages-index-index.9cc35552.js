(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0c95":function(t,e,i){"use strict";i.r(e);var a=i("a1fb"),n=i("567e");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f22f");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"03fc4cfe",null,!1,a["a"],void 0);e["default"]=s.exports},"11cc":function(t,e,i){var a=i("d5a5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("10414a22",a,!0,{sourceMap:!1,shadowMode:!1})},1320:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),t.exports=e},1340:function(t,e,i){"use strict";i.r(e);var a=i("d5ff"),n=i("e450");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d873");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"13f73da8",null,!1,a["a"],void 0);e["default"]=s.exports},1552:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},n=[]},1725:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var a={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=a},"1d78":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},n=[]},"1e16":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-badge--x[data-v-1693f0ea]{display:inline-block;position:relative}.uni-badge--absolute[data-v-1693f0ea]{position:absolute}.uni-badge--small[data-v-1693f0ea]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-1693f0ea]{display:flex;overflow:hidden;box-sizing:border-box;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";min-width:20px;justify-content:center;flex-direction:row;height:20px;padding:0 4px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-1693f0ea]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-1693f0ea]{background-color:#2979ff}.uni-badge--success[data-v-1693f0ea]{background-color:#18bc37}.uni-badge--warning[data-v-1693f0ea]{background-color:#f3a73f}.uni-badge--error[data-v-1693f0ea]{background-color:#e43d33}.uni-badge--inverted[data-v-1693f0ea]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-1693f0ea]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-1693f0ea]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-1693f0ea]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-1693f0ea]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-1693f0ea]{color:#e43d33;background-color:initial}',""]),t.exports=e},"1e91":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\nuni-page-body[data-v-03fc4cfe]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}body.?%PAGE?%[data-v-03fc4cfe]{background-color:#fff}uni-view[data-v-03fc4cfe]{font-size:14px;line-height:inherit}\n.example-body[data-v-03fc4cfe]{flex-direction:column;padding:10px;background-color:#fff}.uni-textarea[data-v-03fc4cfe]{width:auto!important}.image[data-v-03fc4cfe]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.image2[data-v-03fc4cfe]{\n\t/* margin-right: 30rpx; */\n\t/* \t\twidth: 100rpx;\n\theight: 100rpx;\n\tborder-radius: 8rpx; */width:%?110?%;height:%?110?%;border-radius:%?65?%;border:2px solid #d2c2bc\n\t/* 4px solid #f1f1f1; */}.notice[data-v-03fc4cfe]{background-color:rgba(185,203,255,.27058823529411763)!important\n\t/* \tfont-weight: 700;\n\tcolor: #b1968b!important; */}.text2[data-v-03fc4cfe]{text-align:center;font-size:13px;color:#333}.text[data-v-03fc4cfe]{text-align:center;font-size:13px;margin-top:6px;color:#333}.example-body[data-v-03fc4cfe]{\ndisplay:block\n}.uni-grid-item[data-v-03fc4cfe]{height:auto!important}.grid-item-box[data-v-03fc4cfe]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?28?% 0 %?8?%;margin:%?10?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-03fc4cfe]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-03fc4cfe]{height:%?400?%}.search-icons[data-v-03fc4cfe]{padding:%?16?%}.search-container-bar[data-v-03fc4cfe]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-03fc4cfe] .uni-searchbar__box{border-width:0}\n[data-v-03fc4cfe] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-03fc4cfe]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-03fc4cfe]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-03fc4cfe]{font-size:12px;color:#666;margin-left:5px}.icon-add[data-v-03fc4cfe]{\n\t/* \t    border: 2px #a0a0a0 solid;\n\t    box-sizing: border-box; */display:flex;justify-content:center;align-items:center}.ys-item-box[data-v-03fc4cfe]{box-shadow:rgba(0,0,0,.08) 0 0 3px 1px;border:1px solid #dcdcdc;flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?16?% 0 %?16?%;margin:%?10?%;\n\t/* background: #f5f5f5; */border-radius:%?8?%}",""]),t.exports=e},2852:function(t,e,i){"use strict";i.r(e);var a=i("af31"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2abe1":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9"),i("4e82");var n=a(i("f3f3")),o=i("26cb"),r=a(i("b452")),s=i("f929"),c=a(i("f082")),d=a(i("77b1")),u={data:function(){return{avatars:{},backup:{},daily:{avatar:"",text:""},names:{},key:"",charactersData:"",customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,n.default)({},(0,o.mapState)(["user","today","config","isBeta","version","favObj","favList","allList","profileData"])),onUnload:function(){uni.$off("initData")},onLoad:function(){this.names=c.default,this.avatars=d.default,r.default.init(),this.backup=r.default.backup,this.charactersData=s.charactersData,this.$store.commit("initToday");var t=uni.getStorageSync("ysin_config");t&&this.$store.commit("setConfig",t);var e=this;uni.$on("initData",(function(){e.initData()})),this.initData()},onShareAppMessage:function(e){return"button"===e.from&&t.log(e.target),{title:"Ysin - 原神角色练度计算",path:"/pages/index/index"}},methods:{goTest:function(){t.log("go Battle"),uni.navigateTo({url:"/pages/Battle/Battle"})},toggle:function(t){this.$refs.popup.open()},closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){var t=uni.getStorageSync("ysin_profileData");t&&this.$store.commit("setProfileData",t);var e=uni.getStorageSync("favObj");e||(e={});var i=[],a=[];for(var n in s.charactersData){var o=s.charactersData[n],r=e[o.name];if(r)if(r.isFav){if(r.stage||(r.stage=0),!r.tag){var c=uni.getStorageSync(o.name);r.tag=c?c.tResult.text:null}i.push(o)}else a.push(o);else e[o.name]={isFav:!1,note:"",tScore:0,dScore:0,stage:0,tag:null,isScore:!1},a.push(o)}a.sort((function(t,e){return e.rank-t.rank})),i.sort((function(t,i){return e[i.name].index-e[t.name].index})),this.$store.commit("setFavObj",e),this.$store.commit("setAllList",a),this.$store.commit("setFavList",i),this.$store.commit("updateUserDaily")},getMore:function(){uni.switchTab({url:"/pages/my/my"})},getProfile:function(){uni.navigateTo({url:"../../package/pages/profile/profile?new=true"})},toProfileDetail:function(){this.profileData.hidden?uni.navigateTo({url:"../../package/pages/profile/detail"}):uni.navigateTo({url:"../../package/pages/profile/profile"})},toProfileSort:function(){uni.navigateTo({url:"../../package/pages/profile/sort"})},toAbyss:function(){uni.navigateTo({url:"../../package/pages/abyss/abyss"})},toDaily:function(){uni.navigateTo({url:"../../package/pages/today/daily"})},goSort:function(){uni.navigateTo({url:"sort"})},goLogin:function(t){uni.navigateTo({url:"/pages/my/login"})},toProfile:function(t){var e=this.profileData.list[t],i=s.charactersData[e.cId];this.$store.commit("setCharacter",i),this.$store.commit("setPreset",e),uni.navigateTo({url:"../../package/pages/character/detail?index="+t})},toDetail:function(t){this.$store.commit("setCharacter",t);var e=uni.getStorageSync(t.name);e?(e.cId||(e.cId=t.name),this.$store.commit("setPreset",e),uni.navigateTo({url:"../../package/pages/character/detail?cId="+t.name})):(this.$store.commit("initCharacter",t.name),uni.navigateTo({url:"../../package/pages/character/book/book?index=99"}))}}};e.default=u}).call(this,i("5a52")["default"])},3705:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},"567e":function(t,e,i){"use strict";i.r(e);var a=i("2abe1"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5843:function(t,e,i){"use strict";i.r(e);var a=i("df3e"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"589e":function(t,e,i){var a=i("1e16");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("60c8470b",a,!0,{sourceMap:!1,shadowMode:!1})},"5bea":function(t,e,i){var a=i("1e91");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("56346892",a,!0,{sourceMap:!1,shadowMode:!1})},"5c0f":function(t,e,i){"use strict";var a=i("9f46"),n=i.n(a);n.a},"692d":function(t,e,i){"use strict";var a=i("589e"),n=i.n(a);n.a},6995:function(t,e,i){var a=i("1320");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("77e19b14",a,!0,{sourceMap:!1,shadowMode:!1})},8545:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},"8acc":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("426f").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},"8b01":function(t,e,i){"use strict";var a=i("6995"),n=i.n(a);n.a},"8dbb":function(t,e,i){"use strict";i.r(e);var a=i("8acc"),n=i("ab08");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5c0f");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"42ced052",null,!1,a["a"],void 0);e["default"]=s.exports},"9dec":function(t,e,i){"use strict";i.r(e);var a=i("1552"),n=i("5843");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8b01");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6f48037d",null,!1,a["a"],void 0);e["default"]=s.exports},"9f46":function(t,e,i){var a=i("3705");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2a02c826",a,!0,{sourceMap:!1,shadowMode:!1})},a1fb:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniGrid:i("9dec").default,uniGridItem:i("1340").default,uniBadge:i("ec53").default,uniSection:i("8dbb").default,uniIcons:i("426f").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"example-body"},[a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},[a("uni-grid-item",{staticClass:"uni-grid-item "},[t.profileData.info?a("v-uni-view",{staticClass:"ys-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfileDetail.apply(void 0,arguments)}}},[a("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:0}},[a("v-uni-image",{staticClass:"image2",attrs:{src:t.avatars[t.profileData.info.avatarId],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v("展示柜")])],1):a("v-uni-view",{staticClass:"ys-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfileDetail.apply(void 0,arguments)}}},[a("uni-badge",{attrs:{absolute:"rightTop","is-dot":!0,offset:[6,6],text:"1"}},[a("v-uni-image",{staticClass:"image2",attrs:{src:t.avatars["traveller"],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v("展示柜")])],1)],1),a("uni-grid-item",{staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"ys-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAbyss.apply(void 0,arguments)}}},[a("v-uni-view"),a("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:0}},[a("v-uni-image",{staticClass:"image2",attrs:{src:t.user.abyss?t.avatars[t.user.abyss]:t.avatars["kong"],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v("深渊统计")])],1)],1),a("uni-grid-item",{staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"ys-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDaily()}}},[a("uni-badge",{attrs:{absolute:"rightTop",offset:[6,6],text:t.user.daily.count}},[a("v-uni-image",{staticClass:"image2",attrs:{src:t.avatars[t.user.daily.cId],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v("今日素材")])],1)],1),a("uni-grid-item",{staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"ys-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin.apply(void 0,arguments)}}},[a("uni-badge",{attrs:{absolute:"rightTop","is-dot":!0,offset:[6,6],text:t.backup.notice}},[t.backup.id?a("v-uni-image",{staticClass:"image2",attrs:{src:t.avatars[t.backup.id],mode:"aspectFill"}}):a("v-uni-image",{staticClass:"image2",attrs:{src:i("d232"),mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v("数据备份")])],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.profileData.hidden,expression:"!profileData.hidden"}]},[t.profileData.info?a("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:t.profileData.info.title,color:"#fff",type:"line"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfileSort.apply(void 0,arguments)}}}):t._e(),a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.profileData.list,(function(e,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfile(i)}}},[a("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:e.cStage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:t.customStyle}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatars[e.cId],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v(t._s(e.score?e.score:e.name))]),t.user.hiddenTag?t._e():a("v-uni-text",{staticClass:"text2"},[t._v(t._s(e.tResult.text))])],1)],1)})),1)],1),a("v-uni-view",[a("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"收藏",color:"#fff",type:"line"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort.apply(void 0,arguments)}}}),a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},[t._l(t.favList,(function(e,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[a("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.favObj[e.name].stage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:t.customStyle}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatars[e.name],mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.favObj[e.name].note?t.favObj[e.name].note:t.names[e.name]))]),t.user.hiddenTag?t._e():a("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.favObj[e.name].tag))])],1)],1)})),a("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:0==t.favList.length,expression:"favList.length == 0"}],staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort()}}},[a("v-uni-view",{staticClass:"image icon-add"},[a("uni-icons",{attrs:{color:"#a0a0a0",type:"plusempty",size:"30"}})],1),a("v-uni-text",{staticClass:"text"},[t._v("添加")])],1)],1)],2)],1),a("v-uni-view",[a("uni-section",{attrs:{"show-icon":!0,rightText:"编辑",title:"所有",color:"#fff",type:"line"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSort.apply(void 0,arguments)}}}),a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(e,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatars[e.name],mode:"aspectFill"}}),a("v-uni-text",{staticClass:"text"},[t._v(t._s(t.names[e.name]))])],1)],1)})),1)],1)],1)],1)},o=[]},ab08:function(t,e,i){"use strict";i.r(e);var a=i("8545"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},af31:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,i=this.size,a=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,a?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var i="".concat(-t+this.offset[0],"px"),a="".concat(-e+this.offset[1],"px"),n={rightTop:{right:i,top:a},rightBottom:{right:i,bottom:a},leftBottom:{left:i,bottom:a},leftTop:{left:i,top:a}},o=n[this.absolute];return o||n["rightTop"]},dotStyle:function(){return this.isDot?{width:"10px",minWidth:"0",height:"10px",padding:"0",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,i=this.maxNum;return t?"":Number(e)>i?"".concat(i,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},b452:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={backup:{notice:1,date:0,type:0,update:1,logs:{},id:""},init:function(){var e=uni.getStorageSync("ysin_backup");if(e&&(this.backup=e),2!=this.backup.type&&0==this.backup.type&&this.backup.update>0){var i=new Date((new Date).toLocaleDateString()).getTime();i!=this.backup.date&&(this.backup.notice=1,this.backup.date=i,t.log(i))}},set:function(t){var e=this.backup;-1==t?(e.notice>0&&(e.notice=0,uni.setStorageSync("ysin_backup",e)),2==e.type&&this.backup.update>0&&this.clear()):(e.type=t,uni.setStorageSync("ysin_backup",e))},clear:function(){this.backup.logs={},this.backup.update=0,uni.setStorageSync("ysin_backup",this.backup)},add:function(t,e,i,a){if(this.backup.id=t,2!=this.backup.type){var n=a?"（展示柜）":"（本地）",o=e+" | "+i;this.backup.update+=1,1==this.backup.type&&(this.backup.notice=1),this.backup.logs[t]=[n,o,Date.now()],uni.setStorageSync("this.backup",this.backup)}}};e.default=a}).call(this,i("5a52")["default"])},d232:function(t,e,i){t.exports=i.p+"static/paimeng.png"},d5a5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),t.exports=e},d5ff:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},n=[]},d873:function(t,e,i){"use strict";var a=i("11cc"),n=i.n(a);n.a},df3e:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d401"),i("d3b7"),i("25f0"),i("159b"),i("ac1f"),i("e25e");var a={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=a},e450:function(t,e,i){"use strict";i.r(e);var a=i("1725"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ec53:function(t,e,i){"use strict";i.r(e);var a=i("1d78"),n=i("2852");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("692d");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1693f0ea",null,!1,a["a"],void 0);e["default"]=s.exports},f22f:function(t,e,i){"use strict";var a=i("5bea"),n=i.n(a);n.a}}]);