(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-effect"],{"0e75":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".image[data-v-356561cc]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-356561cc]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-356561cc]{height:auto!important}.grid-item-box[data-v-356561cc]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},1205:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,i){"use strict";i.r(e);var a=i("6b9d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"2d6e7":function(t,e,i){"use strict";i.r(e);var a=i("653e"),n=i("a57b");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a545");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"356561cc",null,!1,a["a"],o);e["default"]=c.exports},"3d37":function(t,e,i){"use strict";i.r(e);var a=i("444b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"3d92":function(t,e,i){"use strict";i.r(e);var a=i("6bb3"),n=i("689e");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("fce2");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"44c0d81e",null,!1,a["a"],o);e["default"]=c.exports},"444b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=a},"526e":function(t,e,i){var a=i("a5c4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7f4fc1b0",a,!0,{sourceMap:!1,shadowMode:!1})},6164:function(t,e,i){"use strict";var a=i("bf6e"),n=i.n(a);n.a},"653e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniCard:i("3d92").default,uniList:i("add1").default,uniListItem:i("6e18").default,buttonBarBottom:i("e265").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{margin:"20px"}},[i("v-uni-view",[t._v("队友增益说明：")]),i("v-uni-view",[t._v("1、所有增益都是开关，可以自行设置是否启用。")]),i("v-uni-view",[t._v("2、无法读展示柜的角色信息，需要将角色信息保存到本地才能读取。")])],1),t._l(t.presets,(function(e,a){return i("uni-card",{key:a,attrs:{margin:"20px",padding:"0",spacing:"0"}},[e.cNote?i("uni-list",[0==a?i("v-uni-view",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote}}),t._l(t.resonances,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.text}})})),t._l(t.options,(function(e,a){return i("uni-list-item",{key:e.title,attrs:{showSwitch:"true",switchChecked:"true",title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote,rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}}),t._l(t.effectsArr[a],(function(e,a){return i("uni-list-item",{key:e.title,attrs:{showSwitch:!t.disbaleObj[e.id],switchChecked:!e.isClose,clickable:!0,title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:"该角色未初始化，无法读取增益信息..",rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.initPreset(e)}}})],1)})),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},r=[]},"689e":function(t,e,i){"use strict";i.r(e);var a=i("e7a4"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"6b9d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=a},"6bb3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},"78be":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-538187eb]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-538187eb]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-538187eb]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-538187eb]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"84b3":function(t,e,i){var a=i("1205");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("9ed59e78",a,!0,{sourceMap:!1,shadowMode:!1})},a545:function(t,e,i){"use strict";var a=i("b421"),n=i.n(a);n.a},a57b:function(t,e,i){"use strict";i.r(e);var a=i("b021"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a5c4:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},add1:function(t,e,i){"use strict";i.r(e);var a=i("bb284"),n=i("1291");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("c286");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"e07ee5ea",null,!1,a["a"],o);e["default"]=c.exports},b021:function(t,e,i){"use strict";var a=i("4ea4");i("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b85c")),r=a(i("5530")),o=i("fedd"),s=i("4432"),c=(i("227b"),i("26cb")),d={data:function(){return{eleNum:0,percentages:[0,0,0,0,0,0,0,0,0,0],disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[],charactersData:{},closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[]}},computed:(0,r.default)({},(0,c.mapState)(["preset","selectIds","character","version"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(){this.temp=(0,r.default)({},this.preset),this.charactersData=s.charactersData;var t=this;t.initData(),uni.$on("presetChanged",(function(){t.initData(),t.$forceUpdate()}))},methods:{toPanel:function(){},closeEffect:function(t){t.isClose?t.isClose=!t.isClose:t.isClose=!0},initPreset:function(t){var e=this;uni.showLoading({title:"初始化中..",mask:!0}),setTimeout((function(){(0,o.startCalculate)(t),e.$store.commit("storePreset",t),e.initData(),uni.hideLoading()}),2e3)},toDetail:function(t){this.$store.commit("backupPreset"),this.$store.commit("setPreset",t),uni.navigateTo({url:"./property?from=effect"})},save:function(){var t,e={},i=this.percentages,a=[0,0,0,0,0,0,0,0,0,0],r=[],s=(0,n.default)(this.resonances);try{for(s.s();!(t=s.n()).done;){var c=t.value;e[c.id]=c}}catch(F){s.e(F)}finally{s.f()}var d,u=(0,n.default)(this.options);try{for(u.s();!(d=u.n()).done;){var l=d.value;l.isClose||(e[l.id]=l)}}catch(F){u.e(F)}finally{u.f()}var f,h=(0,n.default)(this.effectsArr);try{for(h.s();!(f=h.n()).done;){var v,p=f.value,b=(0,n.default)(p);try{for(b.s();!(v=b.n()).done;){var x=v.value;if(!x.isClose){var g=e[x.id];g?x.value>g.value&&(e[x.id]=x):e[x.id]=x}}}catch(F){b.e(F)}finally{b.f()}}}catch(F){h.e(F)}finally{h.f()}for(var _ in e){var m=e[_];if(m.dynamic){JSON.parse(JSON.stringify(m));r.push(m)}m.index&&(m.static?a[m.index]+=m.value:i[m.index]+=m.value)}for(var w=0,y=r;w<y.length;w++){var k=y[w],C=k.dynamic;if("yunjinQ"==k.id){var S=[.025,.05,.075,.115],$=S[this.eleNum-1]-.025;k.value=(i[C.index]*C.base+a[C.index]+C.def)*(C.skill+$)}else{var E=(i[C.index]*C.base+a[C.index])*C.skill;k.value+=E}var M="";M=3==C.index?(100*k.value).toFixed(1):k.value>1?k.value.toFixed(1):(100*k.value).toFixed(1)+"%",k.text=C.text+M,e[k.id]=k}this.temp.gContent=this.names.join(" / "),this.temp.gEffects=e,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,"yelan"==this.temp.cId&&(this.temp.eleNum=this.eleNum),(0,o.startCalculate)(this.temp),this.$store.commit("storePreset",this.temp),this.$store.commit("setPreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.eleNum=0,this.effectsArr=[],this.presets=[],this.resonances=[],this.options=[],this.names=[],uni.showLoading({});JSON.parse(JSON.stringify(this.preset));for(var t={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0,grass:0},e=0;e<this.selectIds.length;e++){var i=this.selectIds[e],a=(0,o.getPreset)(i);if(0==e){var n=a.effects.filter((function(t){return t.type<2&&!t.own}));this.effectsArr.push(n)}else{var r=a.effects.filter((function(t){return t.type>0}));this.effectsArr.push(r)}this.presets.push(a);var s=a.element;t[s]+=1,1==t[s]&&(this.eleNum+=1),e>0&&this.names.push(this.charactersData[i].chs)}t.fire>1&&(this.percentages[1]+=.25,this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"})),t.water>1&&this.resonances.push({id:"shuangshui",title:"共鸣 - 双水",text:"生命值提高25%"}),t.grass>1&&this.resonances.push({id:"shuangcao",title:"共鸣 - 双草",text:"精通提升100"}),t.ice>1&&this.options.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),t.rock>1&&(this.resonances.push({id:"shuangyan3",title:"共鸣 - 双岩（护盾）",text:"护盾强效提升15%"}),this.options.push({id:"shuangyan",title:"共鸣 - 双岩（增伤）",text:"伤害增加15%"}),this.options.push({id:"shuangyan2",title:"共鸣 - 双岩（减抗）",text:"目标岩元素抗性降低20%"})),t.ice>0&&t.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),uni.hideLoading({})}}};e.default=d},b421:function(t,e,i){var a=i("0e75");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4f6b78b2",a,!0,{sourceMap:!1,shadowMode:!1})},bb284:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?i("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?i("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},r=[]},bf24:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},r=[]},bf6e:function(t,e,i){var a=i("78be");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("26117c53",a,!0,{sourceMap:!1,shadowMode:!1})},c286:function(t,e,i){"use strict";var a=i("84b3"),n=i.n(a);n.a},e265:function(t,e,i){"use strict";i.r(e);var a=i("bf24"),n=i("3d37");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6164");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"538187eb",null,!1,a["a"],o);e["default"]=c.exports},e7a4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},fce2:function(t,e,i){"use strict";var a=i("526e"),n=i.n(a);n.a}}]);