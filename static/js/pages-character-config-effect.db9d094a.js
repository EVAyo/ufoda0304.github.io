(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-effect"],{"08a3":function(t,e,i){"use strict";var a=i("5477"),n=i.n(a);n.a},"0afa":function(t,e,i){var a=i("b132");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("815925b6",a,!0,{sourceMap:!1,shadowMode:!1})},"0eae":function(t,e,i){var a=i("c363");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0a61cfa4",a,!0,{sourceMap:!1,shadowMode:!1})},"16e6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".image[data-v-5bc78cfb]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-5bc78cfb]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-5bc78cfb]{height:auto!important}.grid-item-box[data-v-5bc78cfb]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},"1b72":function(t,e,i){"use strict";i.r(e);var a=i("c863"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1c45":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{text:{type:String,default:"保存"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=a},"1fd5":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniCard:i("5083").default,uniList:i("b532").default,uniListItem:i("6fa1").default,buttonBarBottom:i("f603").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._l(t.presets,(function(e,a){return i("uni-card",{key:a,attrs:{margin:"20px",padding:"0",spacing:"0"}},[e.cNote?i("uni-list",[0==a?i("v-uni-view",[i("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote}}),t._l(t.resonances,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.text}})})),t._l(t.options,(function(e,a){return i("uni-list-item",{key:e.title,attrs:{showSwitch:"true",switchChecked:"true",title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote,rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}}),t._l(t.effectsArr[a],(function(e,a){return i("uni-list-item",{key:e.title,attrs:{showSwitch:!t.disbaleObj[e.id],switchChecked:!e.isClose,clickable:!0,title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:"该角色未初始化，无法读取增益信息..",rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.initPreset(e)}}})],1)})),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},r=[]},"2b0d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=a},"31cb":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?i("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?i("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},r=[]},"408b":function(t,e,i){"use strict";i.r(e);var a=i("9d27"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"47ae":function(t,e,i){"use strict";var a=i("0afa"),n=i.n(a);n.a},"4c52":function(t,e,i){var a=i("16e6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7d63b63e",a,!0,{sourceMap:!1,shadowMode:!1})},5083:function(t,e,i){"use strict";i.r(e);var a=i("a3e7"),n=i("408b");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("b3ec");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6d06604a",null,!1,a["a"],o);e["default"]=c.exports},5477:function(t,e,i){var a=i("f887");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4f505d46",a,!0,{sourceMap:!1,shadowMode:!1})},"655a":function(t,e,i){"use strict";var a=i("4c52"),n=i.n(a);n.a},"67ed":function(t,e,i){"use strict";i.r(e);var a=i("1c45"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"9d27":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},a3e7:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},ab0d:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"height-set"}),i("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view"})],1)],1)},r=[]},b132:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-3858212e]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-3858212e]{position:relative;z-index:-1}.uni-list--border-top[data-v-3858212e]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-3858212e]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},b3ec:function(t,e,i){"use strict";var a=i("0eae"),n=i.n(a);n.a},b532:function(t,e,i){"use strict";i.r(e);var a=i("31cb"),n=i("ef49");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("47ae");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3858212e",null,!1,a["a"],o);e["default"]=c.exports},b7a02:function(t,e,i){"use strict";i.r(e);var a=i("1fd5"),n=i("1b72");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("655a");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5bc78cfb",null,!1,a["a"],o);e["default"]=c.exports},c363:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},c863:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b85c")),r=a(i("5530")),o=i("d213"),s=(i("1f13"),i("2062")),c=(i("fd88"),i("26cb")),d={data:function(){return{eleNum:0,percentages:[0,0,0,0,0,0,0,0,0,0],disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[],charactersData:{},closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[]}},computed:(0,r.default)({},(0,c.mapState)(["preset","selectIds","character","version"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(){this.temp=(0,r.default)({},this.preset),this.charactersData=s.charactersData;var e=this;e.initData(),uni.$on("presetChanged",(function(){t.log("触发？！"),e.initData(),e.$forceUpdate()}))},methods:{toPanel:function(){},closeEffect:function(t){t.isClose?t.isClose=!t.isClose:t.isClose=!0},initPreset:function(e){var i=this;uni.showLoading({title:"初始化中..",mask:!0}),t.log(e),setTimeout((function(){i.$store.dispatch("savePreset",e),i.initData(),uni.hideLoading()}),3e3)},toDetail:function(t){this.$store.commit("setPreset",t),uni.navigateTo({url:"./property?save=true"})},save:function(){var t,e={},i=this.percentages,a=[0,0,0,0,0,0,0,0,0,0],r=[],o=(0,n.default)(this.resonances);try{for(o.s();!(t=o.n()).done;){var s=t.value;e[s.id]=s}}catch(N){o.e(N)}finally{o.f()}var c,d=(0,n.default)(this.options);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.isClose||(e[u.id]=u)}}catch(N){d.e(N)}finally{d.f()}var l,f=(0,n.default)(this.effectsArr);try{for(f.s();!(l=f.n()).done;){var h,v=l.value,p=(0,n.default)(v);try{for(p.s();!(h=p.n()).done;){var b=h.value;if(!b.isClose){var x=e[b.id];x?b.value>x.value&&(e[b.id]=b):e[b.id]=b}}}catch(N){p.e(N)}finally{p.f()}}}catch(N){f.e(N)}finally{f.f()}for(var g in e){var _=e[g];if(_.dynamic){JSON.parse(JSON.stringify(_));r.push(_)}_.index&&(_.static?a[_.index]+=_.value:i[_.index]+=_.value)}for(var m=0,w=r;m<w.length;m++){var y=w[m],k=y.dynamic;if("yunjinQ"==y.id){var C=[.025,.05,.075,.115],S=C[this.eleNum-1]-.025;y.value=(i[k.index]*k.base+a[k.index]+k.def)*(k.skill+S)}else{var $=(i[k.index]*k.base+a[k.index])*k.skill;y.value+=$}var E="";E=y.value>1?y.value.toFixed(1):+(100*y.value).toFixed(1)+"%",y.text=k.text+E,e[y.id]=y}this.temp.gContent=this.names.join(" / "),this.temp.gEffects=e,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,"yelan"==this.temp.cId&&(this.temp.eleNum=this.eleNum),this.$store.dispatch("handlePreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.eleNum=0,this.effectsArr=[],this.presets=[],this.resonances=[],this.options=[],this.names=[],uni.showLoading({});JSON.parse(JSON.stringify(this.preset));for(var e={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},i=0;i<this.selectIds.length;i++){var a=this.selectIds[i],n=(0,o.getPreset)(a,this.version);if(0==i){var r=n.effects.filter((function(t){return t.type<2&&!t.own}));this.effectsArr.push(r)}else{var s=n.effects.filter((function(t){return t.type>0}));this.effectsArr.push(s)}this.presets.push(n);var c=n.element;e[c]+=1,1==e[c]&&(this.eleNum+=1),i>0&&this.names.push(this.charactersData[a].chs)}t.log("元素种类："+this.eleNum),e.fire>1&&(this.percentages[1]+=.25,this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"})),e.water>1&&this.resonances.push({id:"shuangshui",title:"共鸣 - 双水",text:"全队被治疗效果提升30%"}),e.ice>1&&this.options.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),e.rock>1&&(this.options.push({id:"shuangyan",title:"共鸣 - 双岩（增伤）",text:"伤害增加15%"}),this.options.push({id:"shuangyan2",title:"共鸣 - 双岩（减抗）",text:"目标岩元素抗性降低20%"})),e.ice>0&&e.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),e.ice>0&&e.water>0&&this.options.push({id:"dongjie",title:"效果 - 冻结",text:"目标处于冻结状态"}),uni.hideLoading({})}}};e.default=d}).call(this,i("5a52")["default"])},ef49:function(t,e,i){"use strict";i.r(e);var a=i("2b0d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f603:function(t,e,i){"use strict";i.r(e);var a=i("ab0d"),n=i("67ed");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("08a3");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"f7d2f876",null,!1,a["a"],o);e["default"]=c.exports},f887:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-f7d2f876]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-f7d2f876]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-f7d2f876]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-f7d2f876]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e}}]);