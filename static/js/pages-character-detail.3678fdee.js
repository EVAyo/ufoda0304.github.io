(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-detail"],{"0337":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("37dc"),r=n(i("2273")),o=(0,a.initVueI18n)(r.default),s=o.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},"09e3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.card-actions[data-v-33f17d51]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:45px;border-top:1px #eee solid}.card-actions-item[data-v-33f17d51]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-33f17d51]{font-size:12px;color:#666;margin-left:5px}.goods-carts[data-v-33f17d51]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}.box[data-v-33f17d51]{display:flex}.b-title[data-v-33f17d51]{flex:1;border:1px solid red;height:80px;display:flex;align-items:center;justify-content:center}',""]),t.exports=e},"0eae":function(t,e,i){var n=i("c363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a61cfa4",n,!0,{sourceMap:!1,shadowMode:!1})},"14ff":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniCard:i("5083").default,uniSection:i("8483").default,uniList:i("b532").default,uniListItem:i("6fa1").default,uniGoodsNav:i("f27b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty()}}},[i("uni-section",{attrs:{title:"当前预设",type:"line",rightText:t.preset.name}}),i("uni-list",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,note:t.cNotice,rightText:t.preset.cNote}}),t.weapon?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.weapon.url,rightText:t.preset.wStage+1+"精",note:t.wNotice}}):t._e(),t.artifact?i("v-uni-view",[i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套",thumb:t.artifact.url}}),t.preset.aSets?i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,title:t.artifact2.chs,rightText:"2件套",thumb:t.artifact2.url}}):t._e()],1):t._e()],1)],1),t.preset.tResult?i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"}},[i("uni-section",{attrs:{type:"line",title:"词条分析",rightText:t.preset.tResult.content}}),i("uni-list",[i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.text,note:t.preset.tResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}],null,!1,1554086503)}),t._l(t.preset.tResults,(function(e,n){return i("uni-list-item",{key:e.title,attrs:{clickable:!0,title:e.title,rightText:e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}})}))],2)],1):t._e(),t.preset.dResult?i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[i("uni-section",{attrs:{title:"数据分析",type:"line",rightText:t.preset.wNote+t.preset.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}}),i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.dResult.text,note:t.preset.dResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}],null,!1,4188073575)}),t._l(t.preset.dResults,(function(e,n){return i("uni-list-item",{key:e[0],attrs:{clickable:!0,title:e[0],rightText:e[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}})})),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[0],title:"环境增益 - "+t.preset.dBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[0],expression:"switchChecked[0]"}],staticClass:"swiper-item-bg"},t._l(t.preset.dBuffs,(function(t,e){return i("uni-list-item",{key:t[0],attrs:{title:e+1+"."+t[0],rightText:t[1]}})})),1),t.preset.weights?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[1],title:"提升建议 - 单人"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[1],expression:"switchChecked[1]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"提升类型",rightText:"期望提高"}}),t._l(t.preset.weights,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:" -  "+t.title,note:t.note,rightText:t.text+" %"}})}))],2)],2)],1):t._e(),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[i("uni-section",{attrs:{title:"队伍分析",type:"line",rightText:t.preset.gContent}}),t.preset.gResult?i("uni-list",[i("uni-list-item",{attrs:{clickable:!0,showBadge:!0,title:t.preset.gResult.title,rightText:t.preset.gResult.text,note:t.preset.gResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.gResult.color}},[t._v(t._s(t.preset.gResult.score))])]},proxy:!0}],null,!1,2165399015)}),t._l(t.preset.gResults,(function(e,n){return i("uni-list-item",{key:e.title,attrs:{clickable:!0,title:e[0],rightText:e[1]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})})),t.preset.gBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[2],title:"团队增益 - "+t.preset.gBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[2],expression:"switchChecked[2]"}],staticClass:"swiper-item-bg"},t._l(t.preset.gBuffs,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:e+1+"."+t[0],rightText:t[1]}})})),1),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[3],title:"提升建议 - 队伍"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[3],expression:"switchChecked[3]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"提升类型",rightText:"期望提高"}}),t._l(t.preset.gWeights,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:" -  "+t.title,note:t.note,rightText:t.text+" %"}})}))],2)],2):i("uni-list-item",{attrs:{clickable:!0,showArrow:"",title:"暂无队友,可添加队友BUFF后显示实际伤害"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})],1),i("v-uni-view",{staticStyle:{height:"60px"}}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1)],1)},r=[]},"17e3":function(t,e,i){"use strict";i.r(e);var n=i("0337"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"19ad":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},r=[]},"1c04":function(t,e,i){"use strict";var n=i("55a3"),a=i.n(n);a.a},2273:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("6de8")),r=n(i("3cac8")),o=n(i("f300")),s={en:a.default,"zh-Hans":r.default,"zh-Hant":o.default};e.default=s},2827:function(t,e,i){var n=i("f601a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09d94420",n,!0,{sourceMap:!1,shadowMode:!1})},"2d31":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},r=[]},"3cac8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"408b":function(t,e,i){"use strict";i.r(e);var n=i("9d27"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5083:function(t,e,i){"use strict";i.r(e);var n=i("a3e7"),a=i("408b");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b3ec");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],o);e["default"]=c.exports},"55a3":function(t,e,i){var n=i("09e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("05169a38",n,!0,{sourceMap:!1,shadowMode:!1})},5981:function(t,e,i){"use strict";var n=i("aa3b"),a=i.n(n);a.a},"5dd3":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),r=i("26cb"),o=(i("2062"),{data:function(){return{switchChecked:[!1,!1,!1,!1],margin:"14px",isFav:!1,options:[{icon:"star",text:"收藏"},{icon:"color",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"staff",text:"队友",info:0}]}},computed:(0,a.default)((0,a.default)({cNotice:function(){if(this.preset.cNotice)return this.character.remind.name},wNotice:function(){if(this.preset.wNotice)return this.weapon.remind.name},barTitle:function(){var t=this.character.chs+" "+this.preset.score,e=this.preset.reactionText;return this.preset.reactionText?t+" - "+e:t}},(0,r.mapState)(["week","version","favObj","preset"])),(0,r.mapGetters)(["artifact","artifact2","weapon","character"])),onShow:function(){uni.setNavigationBarTitle({title:this.barTitle})},onLoad:function(t){var e=this.favObj[this.character.name];e&&(this.isFav=e.isFav),this.setFavorite()},methods:{switchChange:function(t){var e=this.switchChecked[t];this.switchChecked[t]=!e||!e,this.$forceUpdate()},setFavorite:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.index){case 0:this.favObj&&(this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFavorite());break;case 1:this.toPreset();break;case 2:this.toEquipment();break;case 3:this.toProperty();break;case 4:this.toGroup();break;default:break}},toGroup:function(){uni.navigateTo({url:"/pages/character/config/group"})},toPreset:function(){uni.navigateTo({url:"/pages/character/config/preset"})},toProperty:function(){uni.navigateTo({url:"/pages/character/config/property"})},toEquipment:function(){uni.navigateTo({url:"/pages/character/config/equipment"})}}});e.default=o},"68e3":function(t,e,i){"use strict";i.r(e);var n=i("14ff"),a=i("9156");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("1c04");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"33f17d51",null,!1,n["a"],o);e["default"]=c.exports},"6de8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},8483:function(t,e,i){"use strict";i.r(e);var n=i("2d31"),a=i("fc5c");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5981");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"516ec331",null,!1,n["a"],o);e["default"]=c.exports},9156:function(t,e,i){"use strict";i.r(e);var n=i("5dd3"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},a3e7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},aa3b:function(t,e,i){var n=i("b3ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("63b61ad0",n,!0,{sourceMap:!1,shadowMode:!1})},b3ac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-516ec331]{background-color:#fff}.uni-list-item__content[data-v-516ec331]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-516ec331]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-516ec331]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-516ec331]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-516ec331]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-516ec331]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-516ec331]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-516ec331]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-516ec331]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-516ec331]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-516ec331]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-516ec331]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-516ec331]{display:flex;align-items:center;padding-left:10px;color:#b1968b}.uni-list-item__extra-text[data-v-516ec331]{font-size:12px;color:#999}',""]),t.exports=e},b3ec:function(t,e,i){"use strict";var n=i("0eae"),a=i.n(n);a.a},c363:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},df67:function(t,e,i){"use strict";var n=i("2827"),a=i.n(n);a.a},f27b:function(t,e,i){"use strict";i.r(e);var n=i("19ad"),a=i("17e3");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("df67");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5f40e182",null,!1,n["a"],o);e["default"]=c.exports},f300:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},f601a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-5f40e182]{display:flex;flex-direction:row}.uni-goods-nav[data-v-5f40e182]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-5f40e182]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-5f40e182]{padding:0 5px}.uni-tab__cart-sub-right[data-v-5f40e182]{flex:1}.uni-tab__right[data-v-5f40e182]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-5f40e182]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-5f40e182]{width:18px;height:18px}.image[data-v-5f40e182]{width:18px;height:18px}.uni-tab__text[data-v-5f40e182]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-5f40e182]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-5f40e182]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-5f40e182]:active{opacity:.7}.uni-tab__dot-box[data-v-5f40e182]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-5f40e182]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-5f40e182]{padding:0 4px;border-radius:15px}',""]),t.exports=e},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a}}]);