(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"048f":function(t,a,e){"use strict";e.r(a);var i=e("127b"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"0eae":function(t,a,e){var i=e("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"127b":function(t,a,e){"use strict";(function(t){var i=e("4ea4");e("4e82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5530")),r=e("26cb"),d=e("2062"),o={data:function(){return{gridList:[],current:0,swiperDotIndex:0}},computed:(0,n.default)({},(0,r.mapState)(["versionDate","version","favObj","favList","allList"])),onUnload:function(){uni.$off("initData")},onLoad:function(){t.log("生产环境");var a=this;uni.$on("initData",(function(){a.initData()})),this.initData()},methods:{initData:function(){this.$store.commit("setCData",d.charactersData);var t=uni.getStorageSync("favObj");t||(t={}),this.$store.commit("setFavObj",t);var a=[],e=[];for(var i in d.charactersData){var n=d.charactersData[i],r=t[n.name];r?r.isFav?a.push(n):e.push(n):(t[n.name]={isFav:!1,date:n.rank,note:""},e.push(n))}a.sort((function(a,e){return t[e.name].date-t[a.name].date})),e.sort((function(a,e){return t[e.name].date-t[a.name].date})),this.$store.commit("setFavList",a),this.$store.commit("setAllList",e)},toDetail:function(t){var a=uni.getStorageSync(t.name);this.$store.commit("initCharacter",t),a?(this.$store.commit("setPreset",a),uni.navigateTo({url:"/pages/character/detail"})):(this.$store.commit("setPreset",null),uni.navigateTo({url:"/pages/character/config/equipment?isNew=true"}))}}};a.default=o}).call(this,e("5a52")["default"])},"2db4":function(t,a,e){"use strict";e.r(a);var i=e("7a30"),n=e("048f");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("a825");var d,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"b6464fd8",null,!1,i["a"],d);a["default"]=c.exports},"408b":function(t,a,e){"use strict";e.r(a);var i=e("9d27"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},5083:function(t,a,e){"use strict";e.r(a);var i=e("a3e7"),n=e("408b");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("b3ec");var d,o=e("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],d);a["default"]=c.exports},6169:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"\nuni-page-body[data-v-b6464fd8]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}uni-view[data-v-b6464fd8]{font-size:14px;line-height:inherit}.example-body[data-v-b6464fd8]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example-body[data-v-b6464fd8]{flex-direction:column;padding:15px;background-color:#fff}.image[data-v-b6464fd8]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-b6464fd8]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.example-body[data-v-b6464fd8]{\ndisplay:block\n}.uni-grid-item[data-v-b6464fd8]{height:auto!important}.grid-item-box[data-v-b6464fd8]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?15?% 0;margin:%?8?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-b6464fd8]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-b6464fd8]{height:%?400?%}.search-icons[data-v-b6464fd8]{padding:%?16?%}.search-container-bar[data-v-b6464fd8]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-b6464fd8] .uni-searchbar__box{border-width:0}\n[data-v-b6464fd8] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-b6464fd8]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-b6464fd8]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-b6464fd8]{font-size:12px;color:#666;margin-left:5px}body.?%PAGE?%[data-v-b6464fd8]{background-color:#fff}",""]),t.exports=a},"7a30":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={uniCard:e("5083").default,uniSection:e("8483").default,uniGrid:e("84ec").default,uniGridItem:e("1eac").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"warp"},[e("uni-card",{attrs:{title:t.versionDate,extra:"v "+t.version,note:"Tips"}},[e("v-uni-text",[t._v("- 修复神里四命意外计算两次的问题\n\t\t\t- 修复武器效果的文本错误\n\t\t\t- 添加21秒雷国轴的愿力数值的显示\n\t\t\t- 修复降低防御和忽视防御为加算的问题")])],1),e("v-uni-view",{staticClass:"example-body"},[e("uni-section",{attrs:{title:"收藏 - "+t.favList.length,color:"#fff",type:"line"}},[e("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.favList,(function(a,i){return e("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[e("v-uni-view",{staticClass:"grid-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(a)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(t.favObj[a.name].note))])],1)],1)})),1)],1),e("uni-section",{attrs:{title:"角色 - "+t.allList.length,color:"#fff",type:"line"}}),e("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(a,i){return e("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[e("v-uni-view",{staticClass:"grid-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(a)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(a.chs))])],1)],1)})),1)],1)],1)},r=[]},"9d27":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};a.default=i},a3e7:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?e("v-uni-view",{staticClass:"uni-card__cover"},[e("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?e("v-uni-view",{staticClass:"uni-card__header"},[e("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("title")}}},[t.thumbnail?e("v-uni-view",{staticClass:"uni-card__header-avatar"},[e("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),e("v-uni-view",{staticClass:"uni-card__header-content"},[e("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?e("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("extra")}}},[e("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),e("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("content")}}},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},a825:function(t,a,e){"use strict";var i=e("fd51"),n=e.n(i);n.a},b3ec:function(t,a,e){"use strict";var i=e("0eae"),n=e.n(i);n.a},c363:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=a},fd51:function(t,a,e){var i=e("6169");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("96d96274",i,!0,{sourceMap:!1,shadowMode:!1})}}]);