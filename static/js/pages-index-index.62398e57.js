(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"048f":function(t,a,e){"use strict";e.r(a);var i=e("127b"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"0eae":function(t,a,e){var i=e("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"127b":function(t,a,e){"use strict";(function(t){var i=e("4ea4");e("4e82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5530")),r=e("26cb"),o=e("2062"),d={data:function(){return{gridList:[],current:0,swiperDotIndex:0,customStyle:{backgroundColor:"#00000087",color:"#fff",borderRadius:"4px",border:"none",fontSize:"16px"}}},computed:(0,n.default)({favTitle:function(){return"收藏 - "+this.favList.length},allTitle:function(){return"角色 - "+this.allList.length}},(0,r.mapState)(["week","version","favObj","favList","allList"])),onUnload:function(){uni.$off("initData")},onLoad:function(){var t=this;uni.$on("initData",(function(){t.initData()})),this.initData()},onShareAppMessage:function(a){return"button"===a.from&&t.log(a.target),{title:"Ysin - 原神角色练度计算",path:"/pages/index/index"}},methods:{closeNotice:function(){uni.setStorageSync(this.readKey,!0)},initData:function(){this.$store.commit("setWeek");var t=uni.getStorageSync("favObj");t||(t={});var a=[],e=[];for(var i in o.charactersData){var n=o.charactersData[i],r=t[n.name];r?r.isFav?(r.reminds?r.badge=r.reminds[this.week]:r.badge=0,r.stage||(r.stage=0),a.push(n)):e.push(n):(t[n.name]={isFav:!1,date:n.rank,note:"",badge:0,stage:0},e.push(n))}a.sort((function(a,e){var i=t[e.name],n=t[a.name];return i.date*(i.badge+1)-n.date*(n.badge+1)})),e.sort((function(a,e){return t[e.name].date-t[a.name].date})),this.$store.commit("setFavObj",t),this.$store.commit("setFavList",a),this.$store.commit("setAllList",e)},toDetail:function(t){var a=uni.getStorageSync(t.name);if(a){a.cId||(a.cId=t.name);for(var e=0;e<a.aIds.length;e++){var i=a.aIds[e];"5cangbai"==i&&(a.aIds[e]="cangbai")}this.$store.commit("setPreset",a),uni.navigateTo({url:"/pages/character/detail?cId="+t.name})}else this.$store.commit("initCharacter",t),uni.navigateTo({url:"/pages/character/config/equipment?isNew=true"})}}};a.default=d}).call(this,e("5a52")["default"])},1624:function(t,a,e){var i=e("8377");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6c885022",i,!0,{sourceMap:!1,shadowMode:!1})},"2db4":function(t,a,e){"use strict";e.r(a);var i=e("76d3"),n=e("048f");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("a05a");var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"7524afa4",null,!1,i["a"],o);a["default"]=c.exports},3888:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-badge--x[data-v-450b4518]{display:inline-block;position:relative}.uni-badge--absolute[data-v-450b4518]{position:absolute}.uni-badge--small[data-v-450b4518]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-450b4518]{display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;line-height:18px;color:#fff;border-radius:100px;background-color:#8f939c;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-450b4518]{color:#fff;background-color:#8f939c}.uni-badge--primary[data-v-450b4518]{background-color:#2979ff}.uni-badge--success[data-v-450b4518]{background-color:#18bc37}.uni-badge--warning[data-v-450b4518]{background-color:#f3a73f}.uni-badge--error[data-v-450b4518]{background-color:#e43d33}.uni-badge--inverted[data-v-450b4518]{padding:0 5px 0 0;color:#8f939c}.uni-badge--info-inverted[data-v-450b4518]{color:#8f939c;background-color:initial}.uni-badge--primary-inverted[data-v-450b4518]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-450b4518]{color:#18bc37;background-color:initial}.uni-badge--warning-inverted[data-v-450b4518]{color:#f3a73f;background-color:initial}.uni-badge--error-inverted[data-v-450b4518]{color:#e43d33;background-color:initial}',""]),t.exports=a},"3b61":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?e("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},r=[]},"408b":function(t,a,e){"use strict";e.r(a);var i=e("9d27"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},"4d7d":function(t,a,e){"use strict";var i=e("6ef9"),n=e.n(i);n.a},5083:function(t,a,e){"use strict";e.r(a);var i=e("a3e7"),n=e("408b");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("b3ec");var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],o);a["default"]=c.exports},"54c6":function(t,a,e){"use strict";e.r(a);var i=e("5be0"),n=e("d1bd");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"690d089c",null,!1,i["a"],o);a["default"]=c.exports},"5be0":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={uniCard:e("5083").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("uni-card",{attrs:{title:"最新更新",extra:"2022-03-24 00:18:20"}},[e("v-uni-text",[t._v("- 优菈增加14层Q的数据分析\n\t\t- 香菱的圣遗物评分中，降低了攻击力的权重\n\t\t- 现在改动武器，可以开启自动调整，保持词条不变的情况下，根据武器白值的变动自动更新圣遗物的攻击加成")])],1)},r=[]},"6ef9":function(t,a,e){var i=e("3888");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6d1eb058",i,!0,{sourceMap:!1,shadowMode:!1})},"76d3":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var i={uniSection:e("8483").default,uniGrid:e("84ec").default,uniGridItem:e("1eac").default,uniBadge:e("a35f").default,changelogView:e("54c6").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"example-body"},[e("uni-section",{attrs:{title:t.favTitle,color:"#fff",type:"line"}},[e("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.favList,(function(a,i){return e("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[e("v-uni-view",{staticClass:"grid-item-box",class:t.favObj[a.name].badge>0?"notice":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(a)}}},[e("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.favObj[a.name].stage,absolute:"rightTop",offset:[8,8],size:"small",customStyle:t.customStyle}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}})],1),e("v-uni-text",{staticClass:"text2"},[t._v(t._s(t.favObj[a.name].note))])],1)],1)})),1)],1),e("uni-section",{attrs:{title:t.allTitle,color:"#fff",type:"line"}}),e("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},t._l(t.allList,(function(a,i){return e("uni-grid-item",{key:i,staticClass:"uni-grid-item"},[e("v-uni-view",{staticClass:"grid-item-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(a)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:a.avatar,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(a.chs))])],1)],1)})),1)],1),e("changelog-view")],1)},r=[]},8377:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"\nuni-page-body[data-v-7524afa4]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#fff;min-height:100%;height:auto}uni-view[data-v-7524afa4]{font-size:14px;line-height:inherit}\n.example-body[data-v-7524afa4]{flex-direction:column;padding:15px;background-color:#fff}.image[data-v-7524afa4]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.notice[data-v-7524afa4]{background-color:rgba(185,203,255,.27)!important\n/* \tfont-weight: 700;\n\tcolor: #b1968b!important; */}.text2[data-v-7524afa4]{text-align:center;font-size:13px;color:#333}.text[data-v-7524afa4]{text-align:center;font-size:13px;margin-top:6px;color:#333}.example-body[data-v-7524afa4]{\ndisplay:block\n}.uni-grid-item[data-v-7524afa4]{height:auto!important}.grid-item-box[data-v-7524afa4]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?28?% 0 %?8?%;margin:%?10?%;background:#f5f5f5;border-radius:%?8?%}.banner-image[data-v-7524afa4]{\nmax-width:500px;\nwidth:%?750?%;height:%?400?%}.swiper-box[data-v-7524afa4]{height:%?400?%}.search-icons[data-v-7524afa4]{padding:%?16?%}.search-container-bar[data-v-7524afa4]{\ndisplay:flex;\nflex-direction:row;justify-content:center;align-items:center;position:fixed;left:0;right:0;z-index:10;background-color:#fff}\n[data-v-7524afa4] .uni-searchbar__box{border-width:0}\n[data-v-7524afa4] .uni-input-placeholder{font-size:%?28?%}.card-actions[data-v-7524afa4]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-7524afa4]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-7524afa4]{font-size:12px;color:#666;margin-left:5px}body.?%PAGE?%[data-v-7524afa4]{background-color:#fff}",""]),t.exports=a},"868d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"changelog-view",data:function(){return{}}};a.default=i},"9d27":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};a.default=i},a05a:function(t,a,e){"use strict";var i=e("1624"),n=e.n(i);n.a},a35f:function(t,a,e){"use strict";e.r(a);var i=e("3b61"),n=e("a599d");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e("4d7d");var o,d=e("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"450b4518",null,!1,i["a"],o);a["default"]=c.exports},a3e7:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?e("v-uni-view",{staticClass:"uni-card__cover"},[e("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?e("v-uni-view",{staticClass:"uni-card__header"},[e("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("title")}}},[t.thumbnail?e("v-uni-view",{staticClass:"uni-card__header-avatar"},[e("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),e("v-uni-view",{staticClass:"uni-card__header-content"},[e("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?e("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),e("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("extra")}}},[e("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),e("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("content")}}},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},a599d:function(t,a,e){"use strict";e.r(a);var i=e("a65a"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a},a65a:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,a=this.type,e=this.size,i=this.absolute;return[t?"uni-badge--"+a+"-inverted":"","uni-badge--"+a,"uni-badge--"+e,i?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,a=10;this.isDot&&(t=5,a=5);var e="".concat(-t+this.offset[0],"px"),i="".concat(-a+this.offset[1],"px"),n={rightTop:{right:e,top:i},rightBottom:{right:e,bottom:i},leftBottom:{left:e,bottom:i},leftTop:{left:e,top:i}},r=n[this.absolute];return r||n["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,a=this.text,e=this.maxNum;return t?"":Number(a)>e?"".concat(e,"+"):a}},methods:{onClick:function(){this.$emit("click")}}};a.default=i},b3ec:function(t,a,e){"use strict";var i=e("0eae"),n=e.n(i);n.a},c363:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=a},d1bd:function(t,a,e){"use strict";e.r(a);var i=e("868d"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a["default"]=n.a}}]);