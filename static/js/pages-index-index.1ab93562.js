(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"048f":function(e,t,a){"use strict";a.r(t);var i=a("127b"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"0eae":function(e,t,a){var i=a("c363");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"127b":function(e,t,a){"use strict";var i=a("4ea4");a("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5530")),r=a("26cb"),d=a("2062"),o={data:function(){return{gridList:[],current:0,swiperDotIndex:0}},computed:(0,n.default)({},(0,r.mapState)(["versionDate","version","favObj","favList","allList"])),onUnload:function(){uni.$off("initData")},onLoad:function(){var e=this;uni.$on("initData",(function(){e.initData()})),this.initData()},methods:{initData:function(){var e=uni.getStorageSync("favObj");e||(e={}),this.$store.commit("setFavObj",e);var t=[],a=[];for(var i in d.charactersData){var n=d.charactersData[i],r=e[n.name];r?r.isFav?t.push(n):a.push(n):(e[n.name]={isFav:!1,date:n.rank,note:""},a.push(n))}t.sort((function(t,a){return e[a.name].date-e[t.name].date})),a.sort((function(t,a){return e[a.name].date-e[t.name].date})),this.$store.commit("setFavList",t),this.$store.commit("setAllList",a)},toDetail:function(e){var t=uni.getStorageSync(e.name);this.$store.commit("initCharacter",e),t?(this.$store.commit("setPreset",t),uni.navigateTo({url:"/pages/character/detail?cId="+e.name})):(this.$store.commit("setPreset",null),uni.navigateTo({url:"/pages/character/config/equipment?isNew=true"}))}}};t.default=o},"2db4":function(e,t,a){"use strict";a.r(t);var i=a("c3f8"),n=a("048f");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("d804");var d,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"16d43ee2",null,!1,i["a"],d);t["default"]=c.exports},"408b":function(e,t,a){"use strict";a.r(t);var i=a("9d27"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},5083:function(e,t,a){"use strict";a.r(t);var i=a("a3e7"),n=a("408b");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("b3ec");var d,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],d);t["default"]=c.exports},"7d62":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"\nuni-page-body[data-v-16d43ee2]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}uni-view[data-v-16d43ee2]{font-size:14px;line-height:inherit}.example-body[data-v-16d43ee2]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example-body[data-v-16d43ee2]{flex-direction:column;padding:15px;background-color:#fff}.image[data-v-16d43ee2]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-16d43ee2]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.example-body[data-v-16d43ee2]{\ndisplay:block\n}.uni-grid-item[data-v-16d43ee2]{height:auto!important}.grid-item-box[data-v-16d43ee2]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?15?% 0;margin:%?8?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-16d43ee2]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-16d43ee2]{height:%?400?%}.search-icons[data-v-16d43ee2]{padding:%?16?%}.search-container-bar[data-v-16d43ee2]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-16d43ee2] .uni-searchbar__box{border-width:0}\n[data-v-16d43ee2] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-16d43ee2]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-16d43ee2]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-16d43ee2]{font-size:12px;color:#666;margin-left:5px}body.?%PAGE?%[data-v-16d43ee2]{background-color:#fff}",""]),e.exports=t},"9d27":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=i},a3e7:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("title")}}},[e.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("content")}}},[e._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("actions")}}},[e._t("actions")],2)],2)},r=[]},b3ec:function(e,t,a){"use strict";var i=a("0eae"),n=a.n(i);n.a},c363:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},c3f8:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var i={uniCard:a("5083").default,uniSection:a("8483").default,uniGrid:a("84ec").default,uniGridItem:a("1eac").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"warp"},[a("uni-card",{attrs:{title:e.versionDate,extra:"v "+e.version,note:"Tips"}},[a("v-uni-text",[e._v("- 添加大部分触发类武器的可选项\n\t\t\t- 修复了雾切无法保存的问题")])],1),a("v-uni-view",{staticClass:"example-body"},[a("uni-section",{attrs:{title:"收藏 - "+e.favList.length,color:"#fff",type:"line"}},[a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},e._l(e.favList,(function(t,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.toDetail(t)}}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatar,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"text"},[e._v(e._s(e.favObj[t.name].note))])],1)],1)})),1)],1),a("uni-section",{attrs:{title:"角色 - "+e.allList.length,color:"#fff",type:"line"}}),a("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},e._l(e.allList,(function(t,i){return a("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[a("v-uni-view",{staticClass:"grid-item-box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.toDetail(t)}}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatar,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"text"},[e._v(e._s(t.chs))])],1)],1)})),1)],1)],1)},r=[]},d423:function(e,t,a){var i=a("7d62");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("7be33a44",i,!0,{sourceMap:!1,shadowMode:!1})},d804:function(e,t,a){"use strict";var i=a("d423"),n=a.n(i);n.a}}]);