(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-detail"],{"0b0d":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},1330:function(t,e,i){var n=i("6056");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("47889a34",n,!0,{sourceMap:!1,shadowMode:!1})},"177f":function(t,e,i){var n=i("96a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("65f14e07",n,!0,{sourceMap:!1,shadowMode:!1})},"1e32":function(t,e,i){"use strict";i.r(e);var n=i("45e9"),a=i("bf0c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bcb0");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e9b914ba",null,!1,n["a"],r);e["default"]=c.exports},"301b":function(t,e,i){"use strict";var n=i("ac34"),a=i.n(n);a.a},"44af":function(t,e,i){"use strict";i.r(e);var n=i("739e"),a=i("704a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5e54");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6d06604a",null,!1,n["a"],r);e["default"]=c.exports},"45e9":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniCard:i("44af").default,uniSection:i("db908").default,uniList:i("eab5").default,uniListItem:i("eced").default,buttonBarBottom:i("ecee").default,uniGoodsNav:i("58c6").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSchool()}}},[i("uni-section",{attrs:{title:"流派",type:"line",rightText:t.preset.school?t.preset.school.name:"默认"}}),i("uni-list",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.character.avatar,title:t.character.chs,rightText:t.preset.cNote}}),i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.weapon.chs,thumb:t.weapon.url,rightText:t.weaponNote}}),"wu"!=t.artifact.name?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact.chs,rightText:t.preset.aSets?"2件套":"4件套 "+t.preset.aNote,thumb:t.artifact.url}}):t._e(),t.preset.aSets&&"wu"!=t.artifact2.name?i("uni-list-item",{attrs:{"thumb-size":"lg",title:t.artifact2.chs,rightText:"2件套",thumb:t.artifact2.url}}):t._e()],1)],1),i("uni-card",{attrs:{margin:t.margin,padding:"0",spacing:"0"}},[i("uni-section",{attrs:{type:"line",title:"词条",rightText:t.preset.tResult.content}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.tResult.title,clickable:!0,rightText:t.preset.tResult.rightText,note:t.preset.tResult.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.tResult.color}},[t._v(t._s(t.preset.tResult.score))])]},proxy:!0}])}),i("uni-list-item",{attrs:{clickable:!0,title:"圣遗物面板",rightText:t.preset.tPanel},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[7],title:"查看更多 - 词条"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(7)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[7],expression:"switchChecked[7]"}],staticClass:"swiper-item-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEquipment.apply(void 0,arguments)}}},[t._l(t.preset.tResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,rightText:t.text}})})),t.preset.tLost?i("uni-list-item",{attrs:{title:"损失词条",rightText:"双爆 "+t.preset.tLost}}):t._e()],2)],1),i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"配置",type:"line",rightText:t.preset.wNote+t.preset.note},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProperty.apply(void 0,arguments)}}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.dResult.title,rightText:t.preset.reactionText+t.preset.dResult.text,note:t.preset.dResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.dResult.color}},[t._v(t._s(t.preset.dResult.score))])]},proxy:!0}])}),t._l(t.preset.dResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"实时面板",rightText:t.preset.dPanel}})],2),t.preset.dBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[0],title:"环境增益 - "+t.preset.dBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[0],expression:"switchChecked[0]"}],staticClass:"swiper-item-bg"},t._l(t.preset.dBuffs,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:e+1+"、"+t[0],rightText:t[1]}})})),1),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[1],title:"提升建议 - 单人"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[1],expression:"switchChecked[1]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.weights,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1),i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:t.margin}},[t.preset.gResult?i("v-uni-view",[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}}},[i("uni-section",{attrs:{title:"队友",type:"line",rightText:t.preset.gContent}}),i("uni-list-item",{attrs:{showBadge:!0,title:t.preset.gResult.title,rightText:t.preset.reactionText+t.preset.gResult.text,note:t.preset.gResult.note},scopedSlots:t._u([{key:"header",fn:function(){return[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"cu-avatar",style:{backgroundColor:t.preset.gResult.color}},[t._v(t._s(t.preset.gResult.score))])]},proxy:!0}],null,!1,1383101758)}),t._l(t.preset.gResults,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t[0],rightText:t[1],note:t[2]?t[2]:""}})})),i("uni-list-item",{attrs:{title:"实时面板",rightText:t.preset.gPanel}})],2),t.preset.gBuffs?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[2],title:"队伍增益 - "+t.preset.gBuffs.length+"项"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[2],expression:"switchChecked[2]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"1、继承数据分析中的所有增益",rightText:t.preset.dBuffs.length+"项"}}),t._l(t.preset.gBuffs,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:e+2+"、"+t[0],rightText:t[1]}})}))],2),t.preset.weights.length>0?i("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.switchChecked[3],title:"提升建议 - 队伍"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3)}}}):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.switchChecked[3],expression:"switchChecked[3]"}],staticClass:"swiper-item-bg"},[i("uni-list-item",{attrs:{title:"类型 - 项目（ 变化 ）",rightText:"期望提高"}}),t._l(t.preset.gWeights,(function(t,e){return i("uni-list-item",{key:e,attrs:{title:t.title,note:t.note,rightText:t.text+" %"}})}))],2)],1):i("v-uni-view",[i("uni-section",{attrs:{title:"队友",type:"line",rightText:"无"}}),i("uni-list-item",{attrs:{clickable:!0,showArrow:"",title:"选择队友添加团队增益..."},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup()}}})],1)],1)],1),i("v-uni-view",{staticStyle:{height:"100px"}}),t.index?i("button-bar-bottom",{attrs:{text:"复制配置到本地"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveProfile()}}}):i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},o=[]},"4c95":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("37dc"),o=n(i("6d4f")),r=(0,a.initVueI18n)(o.default),s=r.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:s("uni-goods-nav.options.shop")},{icon:"cart",text:s("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:s("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:s("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1},stat:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&this.stat&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=c},5037:function(t,e,i){"use strict";i.r(e);var n=i("e0c1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"58c6":function(t,e,i){"use strict";i.r(e);var n=i("e32f"),a=i("fa7d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("301b");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"7e5a5c7c",null,!1,n["a"],r);e["default"]=c.exports},"58f4":function(t,e,i){var n=i("7f25");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("69a6dede",n,!0,{sourceMap:!1,shadowMode:!1})},"5aaf":function(t,e,i){"use strict";i.r(e);var n=i("8e5f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5e54":function(t,e,i){"use strict";var n=i("58f4"),a=i.n(n);a.a},6056:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-48961cb2]{background-color:#fff}.uni-list-item__content[data-v-48961cb2]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-48961cb2]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-48961cb2]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-48961cb2]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-48961cb2]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-48961cb2]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-48961cb2]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-48961cb2]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-48961cb2]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-48961cb2]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-48961cb2]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-48961cb2]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-48961cb2]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-48961cb2]{font-size:13px;color:#999}',""]),t.exports=e},"65ee":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.flex[data-v-7e5a5c7c]{display:flex;flex-direction:row}.uni-goods-nav[data-v-7e5a5c7c]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-7e5a5c7c]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-7e5a5c7c]{padding:0 5px}.uni-tab__cart-sub-right[data-v-7e5a5c7c]{flex:1}.uni-tab__right[data-v-7e5a5c7c]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-7e5a5c7c]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-7e5a5c7c]{width:18px;height:18px}.image[data-v-7e5a5c7c]{width:18px;height:18px}.uni-tab__text[data-v-7e5a5c7c]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-7e5a5c7c]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-7e5a5c7c]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-7e5a5c7c]:active{opacity:.7}.uni-tab__dot-box[data-v-7e5a5c7c]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-7e5a5c7c]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-7e5a5c7c]{padding:0 4px;border-radius:15px}',""]),t.exports=e},"6d4f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cbb9")),o=n(i("0b0d")),r=n(i("b814")),s={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};e.default=s},"704a":function(t,e,i){"use strict";i.r(e);var n=i("7fc9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"739e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},o=[]},7854:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("c740"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=i("26cb"),r=i("b9da"),s={data:function(){return{index:void 0,margin:"0 14px 20px",switchChecked:[!1,!1,!1,!1,!1,!1,!1],isFav:!1,options:[{icon:"star",text:"收藏"},{icon:"map",text:"流派",info:0},{icon:"vip",text:"词条",info:0},{icon:"settings",text:"配置",info:0},{icon:"personadd",text:"队友",info:0},{icon:"color",text:" 预设",info:0}]}},computed:(0,a.default)((0,a.default)({weaponNote:function(){var t="";return this.preset.wLevel&&this.preset.wLevel<90&&(t=this.preset.wLevel,this.preset.wAscend?t+="+ / ":t+=" / "),t+(this.preset.wStage+1)+"精 "+this.preset.wNote},showScore:function(){return this.preset.school.score}},(0,o.mapState)(["favObj","preset","profileData"])),(0,o.mapGetters)(["artifact","artifact2","weapon","character"])),onLoad:function(e){this.index=e.index;var i=JSON.parse(JSON.stringify(this.preset));t.log(i);var n=this.character.chs;this.index&&(n+=" - "+i.uid),r.version!=i.version&&((0,r.startCalculate)(i),this.index?this.$store.commit("changeProfile",{temp:i,index:this.index}):this.$store.commit("storePreset",i),this.$store.commit("setPreset",i),t.log("更新！Preset"));var a=this.favObj[this.character.name];a&&(this.isFav=a.isFav),this.setFavorite(),uni.setNavigationBarTitle({title:n})},methods:{switchChange:function(t){var e=this.switchChecked[t];this.switchChecked[t]=!e||!e,this.$forceUpdate()},setFavorite:function(){this.isFav?(this.options[0].icon="star-filled",this.options[0].text="已收藏"):(this.options[0].icon="star",this.options[0].text="收藏")},onClick:function(t){switch(t.index){case 0:this.favObj&&(this.isFav?this.$store.commit("removeFavList"):this.$store.commit("addFavList"),this.isFav=!this.isFav,this.setFavorite());break;case 1:this.toSchool();break;case 2:this.toEquipment();break;case 3:this.toProperty();break;case 4:this.toGroup();break;case 5:this.toPreset();break;default:break}},toGroup:function(){uni.navigateTo({url:"./group"})},toPreset:function(){uni.navigateTo({url:"./preset"})},toSchool:function(){this.index?uni.navigateTo({url:"./book?index="+this.index}):uni.navigateTo({url:"./book?index=199"})},toProperty:function(){this.index?uni.navigateTo({url:"./book?index="+this.index}):uni.navigateTo({url:"./property?from=detail"})},toEquipment:function(){this.index?uni.navigateTo({url:"./book?index="+this.index}):uni.navigateTo({url:"./equipment"})},saveProfile:function(){var t=this;uni.showModal({title:"提示",content:"是否确定复制配置到本地？",cancelText:"否",confirmText:"是",success:function(e){e.confirm&&t.saveProfileData()}})},saveProfileData:function(){var t=this.preset.cId,e=uni.getStorageSync(t);if(this.preset.uid==e.name)uni.showToast({title:"覆盖成功.."});else{uni.showToast({title:"保存成功.."});var i=uni.getStorageSync(t+"-presets");if(i[0]){var n=i.findIndex((function(t){return t.id==e.id}));n>-1?i.splice(n,1,e):i.unshift(e),i=i}else i=[e];uni.setStorageSync(t+"-presets",i)}this.$store.commit("storePreset",this.preset),this.$store.commit("addFavList")}}};e.default=s}).call(this,i("5a52")["default"])},"7f25":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},"7fc9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=n},"83c7":function(t,e,i){"use strict";var n=i("1330"),a=i.n(n);a.a},"8e5f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=n},"95c7":function(t,e,i){var n=i("c17f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2fe83f61",n,!0,{sourceMap:!1,shadowMode:!1})},"96a0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bottom-view[data-v-e9b914ba]{height:env(safe-area-inset-bottom)}.goods-carts[data-v-e9b914ba]{display:flex;flex-direction:column;position:fixed;left:0;right:0;left:var(--window-left);right:var(--window-right);bottom:0;z-index:1000}',""]),t.exports=e},9931:function(t,e,i){var n=i("f4e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("45a9246d",n,!0,{sourceMap:!1,shadowMode:!1})},"9ab4":function(t,e,i){"use strict";i.r(e);var n=i("fe7c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ac34:function(t,e,i){var n=i("65ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("9956d722",n,!0,{sourceMap:!1,shadowMode:!1})},b814:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},bac6:function(t,e,i){"use strict";var n=i("95c7"),a=i.n(n);a.a},bcb0:function(t,e,i){"use strict";var n=i("177f"),a=i.n(n);a.a},be9ca:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a5ea").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},bf0c:function(t,e,i){"use strict";i.r(e);var n=i("7854"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c17f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-3858212e]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-3858212e]{position:relative;z-index:-1}.uni-list--border-top[data-v-3858212e]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-3858212e]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},cbb9:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},d239:function(t,e,i){"use strict";var n=i("9931"),a=i.n(n);a.a},d86d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},o=[]},db908:function(t,e,i){"use strict";i.r(e);var n=i("be9ca"),a=i("9ab4");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("83c7");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"48961cb2",null,!1,n["a"],r);e["default"]=c.exports},e0c1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=n},e32f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("a5ea").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{background:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},o=[]},e753:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?i("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?i("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},eab5:function(t,e,i){"use strict";i.r(e);var n=i("e753"),a=i("5aaf");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bac6");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"3858212e",null,!1,n["a"],r);e["default"]=c.exports},ecee:function(t,e,i){"use strict";i.r(e);var n=i("d86d"),a=i("5037");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d239");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f7d2f876",null,!1,n["a"],r);e["default"]=c.exports},f4e1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-f7d2f876]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-f7d2f876]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-f7d2f876]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-f7d2f876]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},fa7d:function(t,e,i){"use strict";i.r(e);var n=i("4c95"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},fe7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n}}]);