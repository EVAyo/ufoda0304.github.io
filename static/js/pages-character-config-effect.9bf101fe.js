(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-config-effect"],{"0ad0":function(t,e,a){var i=a("f2d3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("19698f8a",i,!0,{sourceMap:!1,shadowMode:!1})},"0afa":function(t,e,a){var i=a("b132");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("815925b6",i,!0,{sourceMap:!1,shadowMode:!1})},"0eae":function(t,e,a){var i=a("c363");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a61cfa4",i,!0,{sourceMap:!1,shadowMode:!1})},"17f0":function(t,e,a){var i=a("f02f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0cc0d50d",i,!0,{sourceMap:!1,shadowMode:!1})},"1b72":function(t,e,a){"use strict";a.r(e);var i=a("c863"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"1c45":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:String,default:"保存"}},data:function(){return{}}};e.default=i},"2b0d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=i},"31cb":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?a("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?a("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},r=[]},"3ae2":function(t,e,a){"use strict";var i=a("17f0"),n=a.n(i);n.a},"408b":function(t,e,a){"use strict";a.r(e);var i=a("9d27"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"47ae":function(t,e,a){"use strict";var i=a("0afa"),n=a.n(i);n.a},5083:function(t,e,a){"use strict";a.r(e);var i=a("a3e7"),n=a("408b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b3ec");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6d06604a",null,!1,i["a"],o);e["default"]=s.exports},"563a":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniCard:a("5083").default,uniList:a("b532").default,uniListItem:a("6fa1").default,buttonBarBottom:a("f603").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.presets,(function(e,i){return a("uni-card",{key:i,attrs:{margin:"20px",padding:"0",spacing:"0"}},[e.cNote?a("uni-list",[0==i?a("v-uni-view",[a("uni-list-item",{attrs:{"thumb-size":"lg",thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote}}),t._l(t.resonances,(function(t,e){return a("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.text}})})),t._l(t.options,(function(e,i){return a("uni-list-item",{key:e.title,attrs:{showSwitch:"true",switchChecked:"true",title:e.title,note:e.text},on:{switchChange:function(a){arguments[0]=a=t.$handleEvent(a),t.closeEffect(e)}}})}))],2):a("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote,rightText:"配置",showArrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e)}}}),t._l(t.effectsArr[i],(function(e,i){return a("uni-list-item",{key:e.title,attrs:{showSwitch:!t.disbaleObj[e.id],switchChecked:"true",clickable:!0,title:e.title,note:e.text},on:{switchChange:function(a){arguments[0]=a=t.$handleEvent(a),t.closeEffect(e)}}})}))],2):a("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:"该角色未初始化，无法读取增益信息..",rightText:"配置",showArrow:!0},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e)}}})],1)})),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}},[a("button-bar-bottom",{attrs:{text:"保存"}})],1)],2)},r=[]},"67ed":function(t,e,a){"use strict";a.r(e);var i=a("1c45"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"9d27":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},a3e7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},b132:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-3858212e]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-3858212e]{position:relative;z-index:-1}.uni-list--border-top[data-v-3858212e]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-3858212e]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},b3ec:function(t,e,a){"use strict";var i=a("0eae"),n=a.n(i);n.a},b532:function(t,e,a){"use strict";a.r(e);var i=a("31cb"),n=a("ef49");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("47ae");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3858212e",null,!1,i["a"],o);e["default"]=s.exports},b7a02:function(t,e,a){"use strict";a.r(e);var i=a("563a"),n=a("1b72");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("cedd");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"1d1dbc72",null,!1,i["a"],o);e["default"]=s.exports},c363:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},c863:function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b85c")),r=i(a("5530")),o=a("d213"),d=(a("1f13"),a("2062")),s=(a("fd88"),a("26cb")),c={data:function(){return{percentages:[0,0,0,0,0,0,0,0,0,0],disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[],charactersData:{},closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[]}},computed:(0,r.default)({},(0,s.mapState)(["preset","selectIds","character","version"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(){this.temp=(0,r.default)({},this.preset),this.charactersData=d.charactersData;var t=this;t.initData(),uni.$on("presetChanged",(function(){t.initData()}))},methods:{toPanel:function(){},closeEffect:function(e){e.isClose?e.isClose=!e.isClose:e.isClose=!0,t.log(e)},toDetail:function(t){this.$store.commit("backupPreset"),this.$store.commit("setPreset",t),uni.navigateTo({url:"../../team/config/character?backup=true"})},save:function(){var e,a={},i=this.percentages,r=[0,0,0,0,0,0,0,0,0,0],o=[],d=(0,n.default)(this.resonances);try{for(d.s();!(e=d.n()).done;){var s=e.value;a[s.id]=s}}catch(E){d.e(E)}finally{d.f()}var c,u=(0,n.default)(this.options);try{for(u.s();!(c=u.n()).done;){var l=c.value;l.isClose||(a[l.id]=l)}}catch(E){u.e(E)}finally{u.f()}var f,h=(0,n.default)(this.effectsArr);try{for(h.s();!(f=h.n()).done;){var v,p=f.value,b=(0,n.default)(p);try{for(b.s();!(v=b.n()).done;){var g=v.value;if(!g.isClose){var x=a[g.id];x?g.value>x.value&&(a[g.id]=g):a[g.id]=g}}}catch(E){b.e(E)}finally{b.f()}}}catch(E){h.e(E)}finally{h.f()}for(var _ in a){var m=a[_];if(m.dynamic){JSON.parse(JSON.stringify(m));o.push(m)}m.index&&(m.static?r[m.index]+=m.value:i[m.index]+=m.value)}for(var w=0,y=o;w<y.length;w++){var k=y[w],C=k.dynamic;t.log(a[k.id].value);var S=(i[C.index]*C.base+r[C.index])*C.skill;k.value+=S;var $="";$=k.value>1?k.value.toFixed(1):+(100*k.value).toFixed(1)+"%",k.text=C.text+$,a[k.id]=k,t.log(i[C.index]),t.log(C.base),t.log(C.skill),t.log(S),t.log(a[k.id].value)}this.temp.gContent=this.names.join(" / "),this.temp.gEffects=a,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,this.$store.dispatch("handlePreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.effectsArr=[],this.presets=[],this.resonances=[],this.options=[],this.names=[],uni.showLoading({});JSON.parse(JSON.stringify(this.preset));for(var t={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},e=0;e<this.selectIds.length;e++){var a=this.selectIds[e],i=(0,o.getPreset)(a,this.version);if(0==e){var n=i.effects.filter((function(t){return t.type<2&&!t.own}));this.effectsArr.push(n)}else{var r=i.effects.filter((function(t){return t.type>0}));this.effectsArr.push(r)}this.presets.push(i);var d=i.element;t[d]+=1,e>0&&this.names.push(this.charactersData[a].chs)}t.fire>1&&(this.percentages[1]+=.25,this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"})),t.water>1&&this.resonances.push({id:"shuangshui",title:"共鸣 - 双水",text:"全队被治疗效果提升30%"}),t.ice>1&&this.options.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),t.rock>1&&(this.options.push({id:"shuangyan",title:"共鸣 - 双岩（增伤）",text:"伤害增加15%"}),this.options.push({id:"shuangyan2",title:"共鸣 - 双岩（减抗）",text:"目标岩元素抗性降低20%"})),t.ice>0&&t.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),t.ice>0&&t.water>0&&this.options.push({id:"dongjie",title:"效果 - 冻结",text:"目标处于冻结状态"}),uni.hideLoading({})}}};e.default=c}).call(this,a("5a52")["default"])},cedd:function(t,e,a){"use strict";var i=a("0ad0"),n=a.n(i);n.a},ee03:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"height-set"}),a("v-uni-view",{staticClass:"goods-carts",staticStyle:{"background-color":"#FFFFFF"}},[a("v-uni-view",{staticClass:"content"},[t._v(t._s(t.text))]),a("v-uni-view",{staticClass:"bottom-view"})],1)],1)},r=[]},ef49:function(t,e,a){"use strict";a.r(e);var i=a("2b0d"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},f02f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-ad0645ba]{height:50px;width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:2.55555556;color:#fff;background-color:#ad9388}.bottom-view[data-v-ad0645ba]{background-color:#ad9388;height:calc(env(safe-area-inset-bottom)/2)}.height-set[data-v-ad0645ba]{\n\t/* background-color: #000000; */height:100px}.goods-carts[data-v-ad0645ba]{background-color:#ad9388;display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:1000}",""]),t.exports=e},f2d3:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".image[data-v-1d1dbc72]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-1d1dbc72]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-1d1dbc72]{height:auto!important}.grid-item-box[data-v-1d1dbc72]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},f603:function(t,e,a){"use strict";a.r(e);var i=a("ee03"),n=a("67ed");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3ae2");var o,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"ad0645ba",null,!1,i["a"],o);e["default"]=s.exports}}]);