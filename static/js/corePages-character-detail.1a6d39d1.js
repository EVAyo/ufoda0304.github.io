(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["corePages-character-detail"],{"0337":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("37dc"),o=n(i("2273")),r=(0,a.initVueI18n)(o.default),s=r.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},"0afa":function(t,e,i){var n=i("b132");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("815925b6",n,!0,{sourceMap:!1,shadowMode:!1})},"0eae":function(t,e,i){var n=i("c363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a61cfa4",n,!0,{sourceMap:!1,shadowMode:!1})},"17e3":function(t,e,i){"use strict";i.r(e);var n=i("0337"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2273:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("6de8")),o=n(i("3cac")),r=n(i("f300")),s={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=s},2303:function(t,e,i){"use strict";var n=i("f28e"),a=i.n(n);a.a},"23e0":function(t,e,i){var n=i("5d0a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("23d19bde",n,!0,{sourceMap:!1,shadowMode:!1})},"2a07":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("26cb"),r=i("bf60"),s={data:function(){return{margin:"0 14px 20px",switchChecked:[!1,!1,!1,!1,!1,!1,!1],isFav:!1,options:[{icon:"star",text:"收藏"},{icon:"settings",text:"配置",info:0},{icon:"vip",text:"圣遗物",info:0},{icon:"personadd",text:"队友",info:0},{icon:"color",text:" 预设",info:0}]}},computed:(0,a.default)((0,a.default)({cNotice:function(){if(this.preset.cNotice)return this.character.remind.name},wNotice:function(){if(this.preset.wNotice)return this.weapon.remind.name},showScore:function(){return this.preset.school.score}},(0,o.mapState)(["favObj","preset","version","character"])),(0,o.mapGetters)(["artifact","artifact2","weapon"])),onLoad:function(e){uni.setNavigationBarTitle({title:this.character.chs});var i=JSON.parse(JSON.stringify(this.preset));this.version!=i.version&&(this.character.schools?i.school=this.character.schools[0]:i.school={name:"默认流派",score:!0},(0,r.startCalculate)(i,this.version),this.$store.commit("savePreset",i),this.$store.commit("setPreset",i),t.log("更新！Preset"));var n=this.favObj[this.character.name];n&&(this.isFav=n.isFav),this.setFavorite()},methods:{switchChange:function(t){var e=this.switchChecked[t];this.switchChecked[t]=!e||!e,this.$forceUpdate()},setFavorite:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.index){case 0:this.favObj&&(this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFavorite());break;case 1:this.toProperty();break;case 2:this.toEquipment();break;case 3:this.toGroup();break;case 4:this.toPreset();break;default:break}},toGroup:function(){this.showScore?uni.navigateTo({url:"./group"}):uni.showToast({title:"队友暂时不可用"})},toPreset:function(){this.showScore?uni.navigateTo({url:"./preset"}):uni.showToast({title:"预设暂时不可用"})},toProperty:function(){uni.navigateTo({url:"./property"})},toEquipment:function(){uni.navigateTo({url:"./equipment"})}}};e.default=s}).call(this,i("5a52")["default"])},"2b0d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=n},"31cb":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?i("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?i("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},"3cac":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"408b":function(t,e,i){"use strict";i.r(e);var n=i("9d27"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4252:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("5083").default,uniSection:i("8483").default,uniList:i("b532").default,uniListItem:i("6fa1").default,uniGoodsNav:i("f27b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty()}}},[i("uni-section",{attrs:{title:"角色配置",type:"line",rightText:t.preset.school?t.preset.school.name:"默认流派"}}),i("uni-list",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,note:t.cNotice,rightText:t.preset.cNote}}),i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.weapon.url,rightText:t.preset.wStage+1+"精 "+t.preset.wNote,note:t.wNotice}}),i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套 "+t.preset.aNote,thumb:t.artifact.url}}),t.preset.aSets?i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,title:t.artifact2.chs,rightText:"2件套",thumb:t.artifact2.url}}):t._e()],1)],1),i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"}},[i("uni-section",{attrs:{type:"line",title:"词条分析",rightText:t.preset.tResult.content}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.text+" 词条",note:t.preset.tResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}])}),i("uni-list-item",{attrs:{clickable:!0,title:"圣遗物面板",rightText:t.preset.tPanel},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[7],title:"查看更多 - 词条"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(7)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[7],expression:"switchChecked[7]"}],staticClass:"swiper-item-bg"},t._l(t.preset.tResults,(function(e,n){return i("uni-list-item",{key:e.title,attrs:{clickable:!0,title:e.title,rightText:e.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}})})),1)],1),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"数据分析",type:"line",rightText:t.preset.wNote+t.preset.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.reactionText+t.preset.dResult.text,note:t.preset.dResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}])}),t._l(t.preset.dResults,(function(t,e){return i("uni-list-item",{key:t[0],attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"实时面板",rightText:t.preset.dPanel}})],2),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[0],title:"环境增益 - "+t.preset.dBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[0],expression:"switchChecked[0]"}],staticClass:"swiper-item-bg"},t._l(t.preset.dBuffs,(function(t,e){return i("uni-list-item",{key:t[0],attrs:{title:e+1+"、"+t[0],rightText:t[1]}})})),1),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[1],title:"提升建议 - 单人"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[1],expression:"switchChecked[1]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.weights,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1),t.showScore?i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[t.preset.gResult?i("v-uni-view",[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"队伍分析",type:"line",rightText:t.preset.gContent}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.gResult.title,rightText:t.preset.reactionText+t.preset.gResult.text,note:t.preset.gResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:t.preset.gResult.color}},[t._v(t._s(t.preset.gResult.score))])]},proxy:!0}],null,!1,2165399015)}),t._l(t.preset.gResults,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"实时面板",rightText:t.preset.gPanel}})],2),t.preset.gBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[2],title:"队伍增益 - "+t.preset.gBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[2],expression:"switchChecked[2]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"1、继承数据分析中的所有增益",rightText:t.preset.dBuffs.length+"项"}}),t._l(t.preset.gBuffs,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:e+2+"、"+t[0],rightText:t[1]}})}))],2),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[3],title:"提升建议 - 队伍"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[3],expression:"switchChecked[3]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.gWeights,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1):i("v-uni-view",[i("uni-section",{attrs:{title:"队伍分析",type:"line",rightText:"无队友"}}),i("uni-list-item",{attrs:{clickable:!0,showArrow:"",title:"选择队友添加团队增益..."},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})],1)],1)],1):i("uni-card",[t._v("暂时移除了辅助角色的评分、预设、队友功能，现在用核心辅助能力的数值来代替评分的在收藏时进行显示，后续将添加流派选择，可以选择角色走输出流还是辅助流。")]),i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},o=[]},"47ae":function(t,e,i){"use strict";var n=i("0afa"),a=i.n(n);a.a},5083:function(t,e,i){"use strict";i.r(e);var n=i("a3e7"),a=i("408b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b3ec");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],r);e["default"]=c.exports},"5d0a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-4f827f92]{display:flex;flex-direction:row}.uni-goods-nav[data-v-4f827f92]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-4f827f92]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-4f827f92]{padding:0 5px}.uni-tab__cart-sub-right[data-v-4f827f92]{flex:1}.uni-tab__right[data-v-4f827f92]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-4f827f92]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-4f827f92]{width:18px;height:18px}.image[data-v-4f827f92]{width:18px;height:18px}.uni-tab__text[data-v-4f827f92]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-4f827f92]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-4f827f92]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-4f827f92]:active{opacity:.7}.uni-tab__dot-box[data-v-4f827f92]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-4f827f92]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-4f827f92]{padding:0 4px;border-radius:15px}',""]),t.exports=e},"6cd0":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},"6de8":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},8483:function(t,e,i){"use strict";i.r(e);var n=i("aa45"),a=i("fc5c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("eca8");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"415fc788",null,!1,n["a"],r);e["default"]=c.exports},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},a3e7:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},o=[]},aa45:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a1b9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowdown"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},b0e6:function(t,e,i){"use strict";var n=i("23e0"),a=i.n(n);a.a},b132:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-3858212e]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-3858212e]{position:relative;z-index:-1}.uni-list--border-top[data-v-3858212e]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-3858212e]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},b3ec:function(t,e,i){"use strict";var n=i("0eae"),a=i.n(n);a.a},b532:function(t,e,i){"use strict";i.r(e);var n=i("31cb"),a=i("ef49");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("47ae");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3858212e",null,!1,n["a"],r);e["default"]=c.exports},c363:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},c7b1:function(t,e,i){"use strict";i.r(e);var n=i("4252"),a=i("ce49");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2303");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"12eae1fc",null,!1,n["a"],r);e["default"]=c.exports},cd8c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:String,default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},ce49:function(t,e,i){"use strict";i.r(e);var n=i("2a07"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d145:function(t,e,i){var n=i("ee2b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5e24ef81",n,!0,{sourceMap:!1,shadowMode:!1})},e076:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bottom-view[data-v-12eae1fc]{height:env(safe-area-inset-bottom)}.goods-carts[data-v-12eae1fc]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}',""]),t.exports=e},eca8:function(t,e,i){"use strict";var n=i("d145"),a=i.n(n);a.a},ee2b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-415fc788]{background-color:#fff}.uni-list-item__content[data-v-415fc788]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-415fc788]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-415fc788]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-415fc788]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-415fc788]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-415fc788]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-415fc788]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-415fc788]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-415fc788]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-415fc788]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-415fc788]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-415fc788]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-415fc788]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-415fc788]{font-size:13px;color:#999}',""]),t.exports=e},ef49:function(t,e,i){"use strict";i.r(e);var n=i("2b0d"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f27b:function(t,e,i){"use strict";i.r(e);var n=i("6cd0"),a=i("17e3");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b0e6");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4f827f92",null,!1,n["a"],r);e["default"]=c.exports},f28e:function(t,e,i){var n=i("e076");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("273df3b5",n,!0,{sourceMap:!1,shadowMode:!1})},f300:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},fc5c:function(t,e,i){"use strict";i.r(e);var n=i("cd8c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);