(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-preset"],{"01e4":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,i=this.inverted,a=this.circle,n=this.mark,o=this.size,s=this.isTrue,r=["uni-tag--"+t,"uni-tag--"+o,s(e)?"uni-tag--disabled":"",s(i)?"uni-tag--"+t+"--inverted":"",s(a)?"uni-tag--circle":"",s(n)?"uni-tag--mark":"",s(i)?"uni-tag--inverted uni-tag-text--"+t:"","small"===o?"uni-tag-text--small":""];return r.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=a},"0626":function(t,e,i){"use strict";var a=i("579e"),n=i.n(a);n.a},"1acc":function(t,e,i){"use strict";i.r(e);var a=i("e4c9"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3306:function(t,e,i){"use strict";i.r(e);var a=i("01e4"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"47d0":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={baishu:"v4草法",kawei:"v4草大剑",dixiya:"迪希雅",anbo:"安柏",bannite:"班尼特",diluke:"迪卢克",hutao:"胡桃",keli:"可莉",tuoma:"托马",xiangling:"香菱",xiaogong:"宵宫",xinyan:"辛焱",yanfei:"烟绯",kelai:"柯莱",tinali:"提纳里",naxida:"纳西妲",aierhaisen:"艾尔海森",yaoyao:"瑶瑶",mika:"米卡",ailuoyi:"埃洛伊",chongyun:"重云",diaona:"迪奥娜",ganyu:"甘雨",kaiya:"凯亚",laiyila:"莱依拉",luoshaliya:"罗莎莉亚",qiqi:"七七",shenhe:"申鹤",shenlilinghua:"神里绫华",youla:"优菈",abeiduo:"阿贝多",huanglongyidou:"荒泷一斗",ningguang:"凝光",nuoaier:"诺艾尔",wulang:"五郎",yunjin:"云堇",zhongli:"钟离",duoli:"多莉",sainuo:"赛诺",bachongshenzi:"八重神子",beidou:"北斗",feixieer:"菲谢尔",jiuqiren:"久岐忍",jiutiaoshaluo:"九条裟罗",keqing:"刻晴",leidianjiangjun:"雷电将军",leize:"雷泽",lisha:"丽莎",traveller:"荧",kong:"空",kandisi:"坎蒂丝",nilu:"妮露",babala:"芭芭拉",dadaliya:"达达利亚",mona:"莫娜",shanhugongxinhai:"珊瑚宫心海",shenlilingren:"神里绫人",xingqiu:"行秋",yelan:"夜兰",falushan:"珐露珊",liulangzhe:"流浪者",fengyuanwanye:"枫原万叶",luyeyuanpingzang:"鹿野院平藏",qin:"琴",shatang:"砂糖",wendi:"温迪",xiao:"魈",zaoyou:"早柚"}},"4eda":function(t,e,i){"use strict";i.r(e);var a=i("6cb9"),n=i("1acc");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0626");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"dad99a7a",null,!1,a["a"],void 0);e["default"]=r.exports},5445:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},n=[]},"579e":function(t,e,i){var a=i("be37");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4dc2ebbc",a,!0,{sourceMap:!1,shadowMode:!1})},"5b58":function(t,e,i){"use strict";i.r(e);var a=i("5445"),n=i("3306");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bf30");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"350e8d74",null,!1,a["a"],void 0);e["default"]=r.exports},"6cb9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniPopup:i("b993").default,uniPopupDialog:i("b4f6").default,uniCard:i("3d92").default,uniSection:i("89d3").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniTag:i("5b58").default,uniIcons:i("fcef").default,tipsCard:i("1f5d").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:"输入预设名称",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.doNext.apply(void 0,arguments)}},model:{value:t.nameValue,callback:function(e){t.nameValue=e},expression:"nameValue"}})],1),t._l(t.allItems,(function(e,a){return i("uni-card",{key:a,attrs:{margin:"16px",padding:"0",spacing:"0"}},[i("uni-section",{attrs:{title:e.name,rightText:t.compare[e.id],type:t.current==e.id?"circle":""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setCurrent(e)}}}),i("uni-list",{attrs:{border:!1}},[i("uni-list-item",{attrs:{clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.load(e)}},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"tag-body"},[i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:"tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.tResult.score,"custom-style":"background-color: "+e.tResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(e.tResult.rightText+" / "+e.school.name))])],1)],1),i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.dResult.score,"custom-style":"background-color: "+e.dResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(t.showGroupScore?e.dPanel:e.wNote+e.note))])],1)],1),e.gResult?i("v-uni-view",{staticClass:"tag-item"},[i("v-uni-view",{staticClass:" tag-content"},[e.school.score?i("uni-tag",{staticClass:"tag-margin",attrs:{text:e.gResult.score,"custom-style":"background-color: "+e.gResult.color+";"}}):t._e(),i("v-uni-view",[t._v(t._s(t.showGroupScore?e.gPanel:e.gContent))])],1)],1):t._e()],1)]},proxy:!0}],null,!0)})],1),i("v-uni-view",{staticClass:"card-actions no-border"},[i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!0)}}},[i("uni-icons",{attrs:{type:"folder-add",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("复制")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDialog(a,!1)}}},[i("uni-icons",{attrs:{type:"compose",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("重命名")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.moveTop(a)}}},[i("uni-icons",{attrs:{type:"arrow-up",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("置顶")])],1),i("v-uni-view",{staticClass:"card-actions-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove(a)}}},[i("uni-icons",{attrs:{type:"trash",size:"18",color:"#999"}}),i("v-uni-text",{staticClass:"card-actions-item-text"},[t._v("删除")])],1)],1)],1)})),i("tips-card",{attrs:{tipKey:"presetTips",tipTexts:t.tips,isCard:!0}})],2)},o=[]},be37:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tag-item[data-v-dad99a7a]{display:flex;justify-content:space-between;margin-top:5px;color:#999;font-size:14px}.tag-content[data-v-dad99a7a]{display:flex;flex-direction:row}.tag-body[data-v-dad99a7a]{display:flex;flex-direction:column;flex:1}.tag-margin[data-v-dad99a7a]{\n\t/* \t\ttext-align: center;\n\t\twidth: 20px; */margin-right:10px;border-color:#fff}.no-border[data-v-dad99a7a]{border-width:0}.card-actions[data-v-dad99a7a]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;height:36px;border-top:1px #eee solid}.card-actions-item[data-v-dad99a7a]{display:flex;flex-direction:row;align-items:center}.card-actions-item-text[data-v-dad99a7a]{font-size:12px;color:#666;margin-left:5px}",""]),t.exports=e},bf30:function(t,e,i){"use strict";var a=i("da49"),n=i.n(a);n.a},d159:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),t.exports=e},da49:function(t,e,i){var a=i("d159");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5ef6d5d0",a,!0,{sourceMap:!1,shadowMode:!1})},e4c9:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c740"),i("a434"),i("3c65"),i("99af"),i("e9c4");var n=a(i("b85c")),o=a(i("5530")),s=i("26cb"),r=a(i("47d0")),l={data:function(){return{tips:["复制一份新的预设，修改圣遗物或者武器，人物命座等配置，保存后返回此页面，观察不同配置下的圣遗物评分、数据评分、队伍评分，用于解决哪套圣遗物更好，哪把武器更好等问题。","右上角是以当前预设为基准100%，显示所有预设的单人/队伍差异，没有队伍或流派不一样会显示NA。","点击黄色标题区可以切换基准预设，点击白色信息区选择并加读取预设。"],showGroupScore:!1,showCompare:!1,compare:{},icon:{color:"#4cd964",size:"22",type:"spinner"},current:0,nameValue:"",value:"",index:0,isCopy:!1,none:"none",itemsArr:[],allItems:[],filterItems:[],texts:[]}},onLoad:function(t){this.preset?this.initData():uni.reLaunch({url:"../../index/index"})},computed:(0,o.default)({showScore:function(){return this.preset.school.score}},(0,s.mapState)(["preset","character"])),methods:{setCompare:function(){this.showCompare=!this.showCompare},setGroupScore:function(){this.showGroupScore=!this.showGroupScore},compareRatio:function(t){var e,i=(0,n.default)(this.allItems);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.school.name==t.school.name?this.compare[a.id]=this.getRatioText(a,t):this.compare[a.id]="NA"}}catch(o){i.e(o)}finally{i.f()}},getRatioText:function(t,e){return e.gResult&&t.gResult?(t.dResult.text/e.dResult.text*100).toFixed(0)+"% / "+(t.gResult.text/e.gResult.text*100).toFixed(0)+"%":(t.dResult.text/e.dResult.text*100).toFixed(0)+"% / NA"},initData:function(){uni.setNavigationBarTitle({title:r.default[this.preset.cId]});var t=(0,o.default)({},this.preset);this.id=t.cId,this.current=t.id;var e=uni.getStorageSync(this.id+"-presets"),i=[];if(t.school&&t.school.id){var a=t.school.id,n=uni.getStorageSync(a+"-presets");n&&(i=n,uni.removeStorageSync(a+"-presets"))}if(e[0]){var s=e.findIndex((function(e){return e.id==t.id}));s>-1?e.splice(s,1,t):e.unshift(t),this.allItems=i.concat(e)}else this.allItems=[t];this.compareRatio(t),uni.setStorageSync(this.id+"-presets",this.allItems)},copy:function(t){if(this.allItems.length>9)uni.showToast({title:"预设不能超过9个"});else{var e=(0,o.default)({},this.allItems[this.index]);e.name=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),this.setPreset()}},remove:function(t){var e=this;this.allItems.length<2?uni.showToast({title:"无法删除",duration:2e3}):uni.showModal({title:"提示",content:"确定要删除?",success:function(i){if(i.confirm){var a=e.allItems[t].id;if(e.allItems.splice(t,1),a==e.current){var n=e.allItems[0];e.setPreset(n),e.current=n.id}else e.setPreset()}}})},rename:function(t){var e=this.allItems[this.index];e.name=t,this.preset.id!=e.id?this.setPreset():this.setPreset(e)},moveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e),this.current!=e.id?this.setPreset():uni.setStorageSync(this.id+"-presets",this.allItems)}},setCurrent:function(t){this.current=t.id,this.setPreset(t),this.compareRatio(t)},load:function(t){this.setPreset(t),uni.navigateBack({delta:1})},setPreset:function(t){if(t){var e=JSON.parse(JSON.stringify(t));this.$store.dispatch("storePreset",e),this.$store.commit("setPreset",e)}uni.setStorageSync(this.id+"-presets",this.allItems)},openDialog:function(t,e){this.index=t,this.isCopy=e,this.nameValue=this.allItems[t].name,e&&(this.nameValue+="副本"),this.$refs.inputDialog.open()},doNext:function(t){t.length>20?uni.showToast({title:"不能超过20个字符!",duration:2e3}):t?this.isCopy?this.copy(t):this.rename(t):uni.showToast({title:"名称不能为空!",duration:2e3})}}};e.default=l}}]);