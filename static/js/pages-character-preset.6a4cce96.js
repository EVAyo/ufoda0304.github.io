(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-preset"],{"01e4":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,i=this.inverted,a=this.circle,n=this.mark,o=this.size,r=this.isTrue,s=["uni-tag--"+t,"uni-tag--"+o,r(e)?"uni-tag--disabled":"",r(i)?"uni-tag--"+t+"--inverted":"",r(a)?"uni-tag--circle":"",r(n)?"uni-tag--mark":"",r(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===o?"uni-tag-text--small":""];return s.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=a},"0ce6":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c740"),i("a434"),i("3c65"),i("99af"),i("e9c4");var n=a(i("5530")),o=i("26cb"),r={data:function(){return{showGroupScore:!1,icon:{color:"#4cd964",size:"22",type:"spinner"},current:0,nameValue:"",value:"",index:0,isCopy:!1,none:"none",itemsArr:[],allItems:[],texts:[]}},onLoad:function(t){this.preset?this.initData():uni.reLaunch({url:"../../index/index"})},computed:(0,n.default)({showScore:function(){return this.preset.school.score}},(0,o.mapState)(["preset","character"])),methods:{setGroupScore:function(){this.showGroupScore=!this.showGroupScore},initData:function(){uni.setNavigationBarTitle({title:this.character.chs});var e=(0,n.default)({},this.preset);this.id=e.cId,this.current=e.id,t.log(this.current);var i=uni.getStorageSync(this.id+"-presets"),a=[];if(e.school&&e.school.id){var o=e.school.id,r=uni.getStorageSync(o+"-presets");r&&(a=r,uni.removeStorageSync(o+"-presets"))}if(i[0]){var s=i.findIndex((function(t){return t.id==e.id}));s>-1?i.splice(s,1,e):i.unshift(e),this.allItems=a.concat(i)}else this.allItems=[e];uni.setStorageSync(this.id+"-presets",this.allItems)},copy:function(t){if(this.allItems.length>9)uni.showToast({title:"预设不能超过9个"});else{var e=(0,n.default)({},this.allItems[this.index]);e.name=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),this.setPreset()}},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(i){if(i.confirm){var a=e.allItems[t].id;if(e.allItems.splice(t,1),a==e.current){var n=e.allItems[0];e.setPreset(n),e.current=n.id}else e.setPreset()}}})},rename:function(t){var e=this.allItems[this.index];e.name=t,this.preset.id!=e.id?this.setPreset():this.setPreset(e)},moveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e),this.current!=e.id?this.setPreset():uni.setStorageSync(this.id+"-presets",this.allItems)}},load:function(t){this.setPreset(t),uni.navigateBack({delta:1})},setPreset:function(t){if(t){var e=JSON.parse(JSON.stringify(t));this.$store.commit("storePreset",e),this.$store.commit("setPreset",e)}uni.setStorageSync(this.id+"-presets",this.allItems)},openDialog:function(t,e){this.index=t,this.isCopy=e,this.nameValue=this.allItems[t].name,e&&(this.nameValue+="副本"),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})}}};e.default=r}).call(this,i("5a52")["default"])},1205:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,i){"use strict";i.r(e);var a=i("6b9d"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"32be":function(t,e,i){"use strict";i.r(e);var a=i("b77c"),n=i("4af1");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("471e");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d136e542",null,!1,a["a"],void 0);e["default"]=s.exports},3306:function(t,e,i){"use strict";i.r(e);var a=i("01e4"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"471e":function(t,e,i){"use strict";var a=i("5c29"),n=i.n(a);n.a},"4af1":function(t,e,i){"use strict";i.r(e);var a=i("0ce6"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5445:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},n=[]},"5b58":function(t,e,i){"use strict";i.r(e);var a=i("5445"),n=i("3306");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bf30");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"350e8d74",null,!1,a["a"],void 0);e["default"]=s.exports},"5c29":function(t,e,i){var a=i("efa5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4ddad778",a,!0,{sourceMap:!1,shadowMode:!1})},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=a},"84b3":function(t,e,i){var a=i("1205");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("445af795",a,!0,{sourceMap:!1,shadowMode:!1})},add1:function(t,e,i){"use strict";i.r(e);var a=i("bb28"),n=i("1291");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c286");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"e07ee5ea",null,!1,a["a"],void 0);e["default"]=s.exports},b77c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniCard:i("3d92").default,uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniTag:i("5b58").default,uniIcons:i("fcef").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-card",{attrs:{title:"预设使用说明",note:"Tips"}},[t._v("复制一份新的预设，修改圣遗物或者武器，人物命座等配置，保存后返回此页面，观察不同配置下的圣遗物评分、数据评分、队伍评分，用于解决哪套圣遗物更好，哪把武器更好等问题。")]),i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:"输入预设名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.nameValue,callback:function(e){t.nameValue=e},expression:"nameValue"}})],1),t._l(t.allItems,(function(e,a){return i("uni-card",{key:a,attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:e.name,rightText:e.tResult.text+" / "+e.school.name,type:t.current==e.id?"circle":""}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{clickable:!0,rightText:e.dResult.text},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.load(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"tag-body"},[i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:"tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.tResult.score,"custom-style":"background-color: "+e.tResult.color}}):t._e(),i("v-uni-view",[t._v(t._s(e.tPanel))])],1)],1),i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.dResult.score,"custom-style":"background-color: "+e.dResult.color}}):t._e(),i("v-uni-view",[t._v(t._s(e.wNote+e.eNote+e.aNote))])],1)],1),e.gResult?i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.gResult.score,"custom-style":"background-color: "+e.gResult.color}}):t._e(),i("v-uni-view",[t._v(t._s(e.gContent))])],1)],1):t._e()],1)]},proxy:!0}],null,!0)})],1),i("v-uni-view",{staticClass:"card-actions no-border"},[i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!0)}}},[i("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!1)}}},[i("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveTop(a)}}},[i("uni-icons",{attrs:{type:"arrow-up",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("置顶")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(a)}}},[i("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)}))],2)},o=[]},bb28:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},n=[]},bf30:function(t,e,i){"use strict";var a=i("da49"),n=i.n(a);n.a},c286:function(t,e,i){"use strict";var a=i("84b3"),n=i.n(a);n.a},d159:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),t.exports=e},da49:function(t,e,i){var a=i("d159");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5ef6d5d0",a,!0,{sourceMap:!1,shadowMode:!1})},efa5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tag-item[data-v-d136e542]{display:flex;justify-content:space-between;margin-top:5px;color:#999;font-size:14px}.tag-content[data-v-d136e542]{display:flex;flex-direction:row}.tag-body[data-v-d136e542]{display:flex;flex-direction:column;flex:1}.tag-margin[data-v-d136e542]{\n\t/* \t\ttext-align: center;\n\twidth: 20px; */margin-right:10px;border-color:#fff}.no-border[data-v-d136e542]{border-width:0}.card-actions[data-v-d136e542]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-d136e542]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-d136e542]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e}}]);