(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-compare-index"],{"03aa":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"0504":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-group[data-v-df0a7392]{display:flex;align-items:center;justify-content:center}.uni-group-item[data-v-df0a7392]{margin-left:15px;padding:0 10px;line-height:40px\n\t/* \twidth: 40px; */}.item-content[data-v-df0a7392]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden;justify-content:center}.item-content-title[data-v-df0a7392]{font-size:14px;color:#3b4144;overflow:hidden}",""]),t.exports=e},"072e":function(t,e,n){"use strict";n.r(e);var i=n("03aa"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"0d89":function(t,e,n){var i=n("0504");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("c2d6e458",i,!0,{sourceMap:!1,shadowMode:!1})},"1b69":function(t,e,n){"use strict";n.r(e);var i=n("a7a0"),a=n("072e");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a253");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"42ced052",null,!1,i["a"],void 0);e["default"]=r.exports},4504:function(t,e,n){"use strict";var i=n("0d89"),a=n.n(i);a.a},"493b":function(t,e,n){"use strict";n.r(e);var i=n("fd6b"),a=n("a1a4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4504");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"df0a7392",null,!1,i["a"],void 0);e["default"]=r.exports},"74f2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},"9a5c":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975"),n("c740"),n("a434"),n("14d9"),n("e9c4");var a=i(n("2c31")),o=n("07b2"),s=i(n("bfd9")),r={data:function(){return{textMap:{},ImageUrl:{},disableTeam:!0,recharge:100,event:{recharge:!1,team:!1,auto:!0},texts:["1、点击已选武器进行配置修改，右边按钮分别是新增、删除配置，如果设置的配置已存在，则不会保存。","2、计算结果对比的标准为当前队伍/单人的伤害为基准100%，默认平衡双爆后进行计算，从大到小排序。"],isAdd:!0,index:0,id:"",key:"",compare:{weaponIds:[],weaponConfig:{}},weapons:{},weaponIds:{},weaponsData:{},weaponConfig:{}}},onUnload:function(){uni.$off("optionChanged")},onLoad:function(){this.textMap=a.default,this.ImageUrl=s.default;var t=this.$store.getters.character,e="ys-compare-"+t.name;this.key=e;var n=this.$store.state.preset;-1==n.output[0].indexOf(4)&&(this.event.auto=!1),this.recharge=Math.round(100*n.recharge),n.gResult&&(this.disableTeam=!1,this.event.team=!0),this.weapons=o.weaponsByType[t.weapon];var i=uni.getStorageSync(e);i&&(this.compare=i),this.weaponConfig=this.compare.weaponConfig,this.weaponIds=this.compare.weaponIds,this.weaponsData=o.weaponsData;var r=this;uni.$on("optionChanged",(function(t){var e=r.weaponConfig[r.id];if(e){var n=e.findIndex((function(e){return e.title===t.title}));r.isAdd?e.splice(r.index+1,0,t):e[r.index]=t,n>-1&&e.splice(n,1)}else e=[t];r.$forceUpdate()}))},methods:{switchChange:function(t){this.event[t]=!this.event[t]},initOption:function(t){var e=this.weaponConfig[t];if(!e||0==e.length){var n=this.weaponsData[t],i=5==n.star?1:5,a=i+"精",o=[a];if(n.options)for(var s=0;s<n.options.length;s++){var r=n.options[s],c=n.indexs[s];o.push(r[c])}var u={stage:i-1,indexs:n.indexs,title:o.join(" / ")};this.weaponConfig[t]=[u]}},addWeapon:function(t){this.weaponIds.push(t),this.initOption(t),this.$forceUpdate()},deleteWeapon:function(t){this.weaponIds.splice(t,1)},deleteOption:function(t,e,n){this.weaponConfig[t].splice(e,1),this.$forceUpdate()},copyOption:function(t,e,n){this.weaponConfig[t].splice(e,0,n)},addOption:function(t,e){this.id=t,this.index=e,this.isAdd=!0,this.$store.commit("setOption",null),uni.navigateTo({url:"option?id="+t})},setOption:function(t,e,n){this.id=t,this.index=e,this.isAdd=!n,this.$store.commit("setOption",n),uni.navigateTo({url:"option?id="+t})},checkTeam:function(){var t=this.$store.state.preset,e=this;t.gResult?uni.showModal({title:"提示",content:"使用添加队友的核心伤害作为标准进行计算？",confirmText:"队友",cancelText:"单人",success:function(t){t.confirm?e.save(4):e.save(1)}}):e.save(1)},save:function(t){var e=JSON.parse(JSON.stringify(this.compare)),n=this.$store.state.preset,i=n.wId,a={indexs:n.wIndexs,stage:n.wStage,title:this.getOptionText(n)},o=e.weaponIds.indexOf(i);if(o<0)e.weaponIds.push(i),e.weaponConfig[i]=[a];else{var s=e.weaponConfig[i].findIndex((function(t){return t.title==a.title}));s<0&&e.weaponConfig[i].push(a)}this.$store.commit("setCompare",e),uni.setStorageSync(this.key,this.compare);var r=this.event.recharge?"&recharge="+this.recharge:"";uni.navigateTo({url:"result?team="+this.event.team+"&auto="+this.event.auto+r})},getOptionText:function(t){var e=this.weaponsData[t.wId],n=t.wStage+1,i=n+"精",a=[i];if(e.options)for(var o=0;o<e.options.length;o++){var s=e.options[o],r=t.wIndexs[o];a.push(s[r])}return a.join(" / ")},reset:function(){uni.removeStorageSync(this.key)}}};e.default=r},a1a4:function(t,e,n){"use strict";n.r(e);var i=n("9a5c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a253:function(t,e,n){"use strict";var i=n("e177b"),a=n.n(i);a.a},a7a0:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("d0c7").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},o=[]},e177b:function(t,e,n){var i=n("74f2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3a1f529a",i,!0,{sourceMap:!1,shadowMode:!1})},fd6b:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSection:n("1b69").default,uniList:n("3e80").default,uniListItem:n("9d9b").default,uniNumberBox:n("2de3").default,uniIcons:n("d0c7").default,buttonBarBottom:n("c37c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"选项"}}),n("uni-list",{attrs:{border:!1}},[n("uni-list-item",{attrs:{showSwitch:!0,disabled:t.disableTeam,switchChecked:t.event.team,title:"队伍伤害",note:"打开后根据队伍伤害进行计算"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange("team")}}}),n("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.event.auto,title:"配平双暴",note:"计算之前先对双暴进行平衡"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange("auto")}}}),n("uni-list-item",{attrs:{showSwitch:!0,switchChecked:t.event.recharge,title:"配平充能",note:"计算之前自动调整充能词条"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange("recharge")}}}),n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.event.recharge,expression:"event.recharge"}],attrs:{title:"充能要求（100 - 350%）",note:"有效词条与充能进行转换"},scopedSlots:t._u([{key:"footer",fn:function(){return[n("uni-number-box",{attrs:{min:100,step:10,max:350},model:{value:t.recharge,callback:function(e){t.recharge=e},expression:"recharge"}})]},proxy:!0}])})],1),n("uni-section",{attrs:{title:"已选择",type:"line"}}),t.weaponIds[0]?t._e():n("v-uni-view",[n("uni-list",{attrs:{border:!1}},[n("uni-list-item",{attrs:{title:"目前没有武器\t",note:"从下面的列表选择武器"}})],1)],1),t._l(t.weaponIds,(function(e,i){return n("v-uni-view",{key:i},[n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:!t.weaponConfig[e][0],expression:"!weaponConfig[id][0]"}],attrs:{"thumb-size":"lg",thumb:t.ImageUrl[e]},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item-content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,0,null)}}},[n("v-uni-view",{staticClass:"item-content-title"},[t._v("无选项")])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,0,null)}}},[n("uni-icons",{attrs:{type:"plusempty"}})],1),n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteWeapon(i)}}},[n("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)}),t._l(t.weaponConfig[e],(function(a,o){return n("uni-list-item",{key:o,attrs:{"thumb-size":"lg",thumb:t.ImageUrl[e]},scopedSlots:t._u([{key:"body",fn:function(){return[n("v-uni-view",{staticClass:"item-content",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,o,a)}}},[n("v-uni-view",{staticClass:"item-content-title"},[t._v(t._s(a.title))])],1)]},proxy:!0},{key:"footer",fn:function(){return[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setOption(e,o,null)}}},[n("uni-icons",{attrs:{type:"plusempty"}})],1),n("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteOption(e,o,i)}}},[n("uni-icons",{attrs:{type:"trash"}})],1)],1)]},proxy:!0}],null,!0)})}))],2)})),n("uni-section",{attrs:{title:"所有",type:"line"}}),t._l(t.weapons,(function(e,i){return n("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds.indexOf(e)<0,expression:"weaponIds.indexOf(id) < 0"}],key:e,attrs:{title:t.textMap[e],clickable:!0,thumb:t.ImageUrl[e],"thumb-size":"lg"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addWeapon(e)}}})})),n("button-bar-bottom",{directives:[{name:"show",rawName:"v-show",value:t.weaponIds[0],expression:"weaponIds[0]"}],attrs:{text:"开始计算"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},o=[]}}]);