(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0146":function(t,e,n){"use strict";(function(t,i){var a=n("4ea4");n("c975"),n("d3b7"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("b85c"));n("96cf");var r=a(n("1da1")),s=a(n("5530")),u=n("26cb"),l={data:function(){return{tempConfig:{showBox:!0,showAll:!0},accordionVal2:"-1",accordionVal:"-1",keyValue:"",key:"",now:0,downloadText:"下载云端数据",date:0,backup:null,ignoreKeys:["$$STAT__DBDATA","__DC_STAT_UUID","First__Visit__Time","Last__Visit__Time","Total__Visit__Count","Report_Data_Time","Report_Status"]}},computed:(0,s.default)({keyText:function(){return this.key?"密钥："+this.key:"上传后生成的密钥可以用于恢复数据....."}},(0,u.mapState)(["config"])),onLoad:function(){this.tempConfig=JSON.parse(JSON.stringify(this.config)),this.now=uni.getStorageSync("ysin_time_limit"),this.key=uni.getStorageSync("ysin_key"),this.date=uni.getStorageSync("ysin_date")},methods:{switchChange:function(t){0==t?this.tempConfig.showBox=!this.tempConfig.showBox:this.tempConfig.showAll=!this.tempConfig.showAll,this.$store.commit("saveConfig",this.tempConfig)},setBackup:function(){var t=Date.now();this.now=t,uni.setStorageSync("ysin_time_limit",t),uni.setStorageSync("ysin_key",this.key),uni.setStorageSync("ysin_date",this.date)},checkTime:function(){var t=Date.now();return t-this.now>18e4?(uni.showLoading({title:"提交中..."}),!1):(uni.showToast({icon:"none",title:"服务器限制，3分钟内只能请求一次"}),!0)},createBackpuData:function(e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.importObject("backup"),a.prev=1,a.next=4,o.createData(e);case 4:r=a.sent,uni.showToast({title:"上传数据成功"}),i.log(r),n.key=r.id,n.date=Date.now(),n.setBackup(),uni.hideLoading(),a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](1),uni.showToast({title:"上传数据失败"}),uni.hideLoading(),i.log(a.t0);case 18:case"end":return a.stop()}}),a,null,[[1,13]])})))()},updateBackupData:function(e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.importObject("backup"),a.prev=1,a.next=4,o.updateData(n.key,e);case 4:a.sent,uni.showToast({title:"更新数据成功"}),n.date=Date.now(),n.setBackup(!0),uni.hideLoading(),a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](1),uni.showToast({title:"更新数据失败"}),uni.hideLoading(),i.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,11]])})))()},getBackupData:function(e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var o,r,s,u,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.checkTime()){a.next=2;break}return a.abrupt("return");case 2:return o=t.importObject("backup"),a.prev=3,a.next=6,o.getData(e);case 6:if(r=a.sent,s=r.data[0],s){for(l in uni.showToast({title:"下载数据成功"}),u=JSON.parse(s.data),n.key=s._id,n.date=s.date,n.setBackup(),u)uni.setStorageSync(l,u[l]);uni.$emit("initData")}else uni.showToast({title:"未找到数据！"});a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](3),uni.showModal({title:"创建失败",content:a.t0.errMsg,showCancel:!1}),i.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))()},remove:function(){var t=this;this.key&&uni.showModal({title:"提示",content:"断开链接？",success:function(e){e.confirm?(t.key=null,t.date=null):e.cancel}})},downLoad:function(){this.keyValue=this.key?this.key:"",this.$refs.inputDialog.open()},confirm:function(t){var e=this;i.log(t),this.key?uni.showModal({title:"提示",content:"确定用云端数据覆盖本地数据？",success:function(n){n.confirm?e.getBackupData(t):n.cancel}}):this.getBackupData(t)},copyKey:function(){this.key?uni.setClipboardData({data:this.key,success:function(){uni.showToast({title:"复制成功"})},fail:function(t){i.log(t)}}):uni.showToast({title:"没有连接数据库"})},upload:function(){var t=this;uni.showModal({title:"提示",content:"确定将本地数据上传至云端？",success:function(e){if(e.confirm){if(t.checkTime())return;var n=[];try{var a=uni.getStorageInfoSync();n=a.keys}catch(f){i.log(f)}var r,s={},u=(0,o.default)(n);try{for(u.s();!(r=u.n()).done;){var l=r.value;if(-1==t.ignoreKeys.indexOf(l)){var c=uni.getStorageSync(l);s[l]=c}}}catch(p){u.e(p)}finally{u.f()}var d=JSON.stringify(s);t.key?t.updateBackupData(d):t.createBackpuData(d)}else e.cancel}})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),this.key=null,this.date=null,uni.$emit("initData")},toChangelog:function(){uni.navigateTo({url:"/pages/index/changelog"})},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(e){e.confirm?t.clickBannerItem():e.cancel}})}}};e.default=l}).call(this,n("a9ff")["default"],n("5a52")["default"])},"01e4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,n=this.inverted,i=this.circle,a=this.mark,o=this.size,r=this.isTrue,s=["uni-tag--"+t,"uni-tag--"+o,r(e)?"uni-tag--disabled":"",r(n)?"uni-tag--"+t+"--inverted":"",r(i)?"uni-tag--circle":"",r(a)?"uni-tag--mark":"",r(n)?"uni-tag--inverted uni-tag-text--"+t:"","small"===o?"uni-tag-text--small":""];return s.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=i},"054d":function(t,e,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("cdb7"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=a},1205:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-e07ee5ea]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-e07ee5ea]{position:relative;z-index:-1}.uni-list--border-top[data-v-e07ee5ea]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-e07ee5ea]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},1291:function(t,e,n){"use strict";n.r(e);var i=n("6b9d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"190b":function(t,e,n){"use strict";n("a9e3"),n("2ca0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=i},"191c":function(t,e,n){"use strict";var i=n("fe2c"),a=n.n(i);a.a},"199f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("fcef").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse-item"},[n("v-uni-view",{staticClass:"uni-collapse-item__title",class:{"is-open":t.isOpen&&"auto"===t.titleBorder,"uni-collapse-item-border":"none"!==t.titleBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(!t.isOpen)}}},[n("v-uni-view",{staticClass:"uni-collapse-item__title-wrap"},[t._t("title",[n("v-uni-view",{staticClass:"uni-collapse-item__title-box",class:{"is-disabled":t.disabled}},[t.thumb?n("v-uni-image",{staticClass:"uni-collapse-item__title-img",attrs:{src:t.thumb}}):t._e(),n("v-uni-text",{staticClass:"uni-collapse-item__title-text"},[t._v(t._s(t.title))])],1)])],2),t.showArrow?n("v-uni-view",{staticClass:"uni-collapse-item__title-arrow",class:{"uni-collapse-item__title-arrow-active":t.isOpen,"uni-collapse-item--animation":!0===t.showAnimation}},[n("uni-icons",{attrs:{color:t.disabled?"#ddd":"#bbb",size:"14",type:"bottom"}})],1):t._e()],1),n("v-uni-view",{staticClass:"uni-collapse-item__wrap",class:{"is--transition":t.showAnimation},style:{height:(t.isOpen?t.height:0)+"px"}},[n("v-uni-view",{ref:"collapse--hook",staticClass:"uni-collapse-item__wrap-content",class:{open:t.isheight,"uni-collapse-item--border":t.border&&t.isOpen},attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},o=[]},"24db":function(t,e,n){"use strict";n.r(e);var i=n("190b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"32d0":function(t,e,n){var i=n("58dd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("385a23db",i,!0,{sourceMap:!1,shadowMode:!1})},3306:function(t,e,n){"use strict";n.r(e);var i=n("01e4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},3552:function(t,e,n){"use strict";(function(t){n("4160"),n("c975"),n("a434"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,isheight:null,height:0,elId:t,nameSync:0}},watch:{open:function(t){this.isOpen=t,this.onClick(t,"init")}},updated:function(t){var e=this;this.$nextTick((function(){e.init(!0)}))},created:function(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},destroyed:function(){this.__isUnmounted||this.uninstall()},mounted:function(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):t.warn("name 值 ".concat(this.nameSync," 重复")),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init:function(t){this.getCollapseHeight(t)},uninstall:function(){var t=this;this.collapse&&(this.collapse.childrens.forEach((function(e,n){e===t&&t.collapse.childrens.splice(n,1)})),this.collapse.names.forEach((function(e,n){e===t.nameSync&&t.collapse.names.splice(n,1)})))},onClick:function(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=uni.createSelectorQuery().in(this);i.select("#".concat(this.elId)).fields({size:!0},(function(i){if(!(n>=10)){if(!i)return n++,void e.getCollapseHeight(!1,n);e.height=i.height,e.isheight=!0,t||e.onClick(e.isOpen,"init")}})).exec()},getNvueHwight:function(t){var e=this;dom.getComponentRect(this.$refs["collapse--hook"],(function(n){if(n&&n.result&&n.size){if(e.height=n.size.height,e.isheight=!0,t)return;e.onClick(e.open,"init")}}))},getCollapse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniCollapse",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i}).call(this,n("5a52")["default"])},4920:function(t,e,n){"use strict";n.r(e);var i=n("0146"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},5445:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},o=[]},"57f9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},o=[]},"58dd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"5b58":function(t,e,n){"use strict";n.r(e);var i=n("5445"),a=n("3306");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bf30");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"350e8d74",null,!1,i["a"],r);e["default"]=u.exports},"6b9d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")}}};e.default=i},"70f1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-collapse[data-v-1de8c812]{width:100%;display:flex;flex-direction:column;background-color:#fff}',""]),t.exports=e},7537:function(t,e,n){"use strict";var i=n("78b4"),a=n.n(i);a.a},"78b4":function(t,e,n){var i=n("b5a8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("49ef457b",i,!0,{sourceMap:!1,shadowMode:!1})},"84b3":function(t,e,n){var i=n("1205");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("9ed59e78",i,!0,{sourceMap:!1,shadowMode:!1})},"8ad1":function(t,e,n){"use strict";n.r(e);var i=n("9573"),a=n("4920");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("191c");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"608c2e5a",null,!1,i["a"],r);e["default"]=u.exports},9156:function(t,e,n){"use strict";n.r(e);var i=n("199f"),a=n("fef2");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7537");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"335e5506",null,!1,i["a"],r);e["default"]=u.exports},"949d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},o=[]},9573:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniPopup:n("b993").default,uniPopupDialog:n("b4f6").default,uniCard:n("3d92").default,uniSection:n("89d3").default,uniDateformat:n("af21").default,uniLink:n("bfb4").default,uniList:n("add1").default,uniListItem:n("6e18").default,uniCollapse:n("a552").default,uniCollapseItem:n("9156").default,uniTag:n("5b58").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[n("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",value:t.keyValue,title:"输入密钥..",placeholder:"..."},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}})],1),n("uni-card",{attrs:{margin:"15px",spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"数据同步",type:"line"}}),n("v-uni-view",{staticStyle:{margin:"20px"}},[n("v-uni-view",{staticStyle:{"font-size":"16px"}},[n("v-uni-view",[t._v(t._s(t.keyText))]),t.date?n("v-uni-view",{staticStyle:{"font-size":"13px","margin-top":"10px"}},[t._v("更新时间："),n("uni-dateformat",{attrs:{date:t.date}})],1):t._e()],1),n("v-uni-view",{staticStyle:{"margin-top":"20px",display:"flex","flex-direction":"row","align-content":"space-between"}},[n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload()}}},[t._v("上传数据")]),n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downLoad()}}},[t._v("下载数据")]),n("v-uni-button",{staticStyle:{"background-color":"#f6f2ee",margin:"0px"},attrs:{size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyKey()}}},[t._v("复制密钥")])],1)],1)],1),n("uni-card",{attrs:{spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"意见或反馈",type:"line"}}),n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",[t._v("微信：badl2019")]),n("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v("QQ：313306199")]),n("v-uni-view",{staticStyle:{"margin-top":"10px"}},[t._v("论坛："),n("uni-link",{staticStyle:{color:"#007AFF"},attrs:{href:"https://nga.178.com/read.php?tid=30528221",text:"在NGA帖子中进行回复"}})],1)],1)],1),n("uni-card",{attrs:{spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"设置选项",type:"line"}}),n("uni-list",[n("uni-list-item",{attrs:{showSwitch:!0,title:"展示柜",switchChecked:t.tempConfig.showBox,note:"首页是否显示展示柜信息"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(0)}}}),n("uni-list-item",{attrs:{showSwitch:!0,title:"所有角色",switchChecked:t.tempConfig.showAll,note:"首页是否显示未收藏的角色"},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1)}}}),n("uni-list-item",{attrs:{clickable:!0,showArrow:!0,title:"更新日志",note:"2022年9月28日08:27:52"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChangelog.apply(void 0,arguments)}}})],1)],1),n("uni-card",{attrs:{padding:"0",spacing:"0"}},[n("uni-section",{attrs:{title:"核心算法",type:"line"}},[n("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal2,callback:function(e){t.accordionVal2=e},expression:"accordionVal2"}},[n("uni-collapse-item",{attrs:{title:"1. 词条分"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),n("v-uni-view",[t._v("[ 期望值B ] = [ 默认圣遗物 ] + [ 目前配置 ]")]),n("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("圣遗物评分 = A / B * 100")]),n("v-uni-view",[t._v("[ 默认圣遗物 ] 的标准为18双爆 + 4主词条 + 3副词条，再有有效词条继续 +3，例子："),n("v-uni-view",[t._v("2有效词条 9 + 4 = 13条（如心海）")]),n("v-uni-view",[t._v("3有效词条 18 + 4 = 22条（大部分角色）")]),n("v-uni-view",[t._v("4有效词条 18 + 4 + 3 = 25条（如雷电将军）")]),n("v-uni-view",[t._v("5有效词条 18 + 4 + 3 + 3 = 28条 （如香菱、胡桃）")]),t._v("说明：默认圣遗物的得分是100分，如果你在100左右，说明圣遗物已经是小毕业的范畴了，需要说明的是，词条评分是相对分，指的是该圣遗物比默认圣遗物强多少，但不同角色，甚至同一角色不同武器对圣遗物的依赖程度是不一样的，这里解释一下原因，首先圣遗物提升的是固定值，为了方便说明，假设只有一种属性\n\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t攻击力，并且设定圣遗物加成是400点攻击力，如果该角色+武器有1000点攻击力，那么穿这套提升40%（140分），但如果只有800点攻击力，那就是提升50%（150分），因此体质差的角色（武器，人物属性），圣遗物提升会更大，得分也会偏高一点，相对的，圣遗物提升小的角色得分就会偏低一些。")],1)],1)],1),n("uni-collapse-item",{attrs:{title:"2. 数据分"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[t._v("[ 期望值A ] = [ 目前圣遗物 ] + [ 目前配置 ]")]),n("v-uni-view",[t._v("[ 期望值C ] = [ 默认圣遗物 ] + [ 默认配置 ]")]),n("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("数据评分 = A / C * 100")]),n("v-uni-view",[t._v("说明：[期望值C]通常在5星角色专武，技能999，22-28词条的默认情况算出来的，是一个基准值，只是为了方便对比，实际上主C数据分80以上打深渊已经完全够了，不同角色之间评分标准不太一样，如行秋是祭礼剑作为默认武器计算标准分，这时候如果换成绿剑，数据分就会很高，但如果默认武器改成绿剑，那带祭礼数据分就很低，因此理性看待，评分是毕竟是相对分，有时候不好平衡，只要明白一点，同一个角色数据分高那个期望伤害更高就是了。")])],1)],1)],1)],1)],1),n("uni-card",{attrs:{padding:"0",spacing:"0"}},[n("uni-section",{attrs:{title:"Q & A",type:"line"}},[n("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal,callback:function(e){t.accordionVal=e},expression:"accordionVal"}},[n("uni-collapse-item",{attrs:{title:"1. 首页角色下面的数字是什么？"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("分别是词条分和数据分，读取的人物详情页的数据，具体可以查看上面的核心算法说明。")])],1)],1),n("uni-collapse-item",{attrs:{title:"2. 提升建议是什么意思？"}},[n("v-uni-view",{staticClass:"content"},[t._v("当前配置保持不变，提升某项数值后进行计算得到提升幅度，依次计算所有权重项得到所有增幅。其意义在于告诉你，在目前状态下，人物等级（未满级的情况），技能等级(未升满)，每个圣遗物词条，以及增伤对期望伤害的影响，可以参考这个权重来进行选择刷等级、天赋、圣遗物或者用于配队等，其中更换杯子的意义是，如果更换杯子增幅不多，看看你手上的杯子词条差是否可以弥补差距，判断是否要强刷一个新杯子。")])],1),n("uni-collapse-item",{attrs:{title:"3.预设是做什么用的？"}},[n("v-uni-view",{staticClass:"content"},[t._v("用于解决对比哪个武器更好，哪个套圣遗物更好，氪金命座还是专武等问题，具体方法为为进入预设页面，把当前配置复制一份出来，然后可以调整武器等配置，再进入预设页对比不同配置下的各项评分。")])],1),n("uni-collapse-item",{attrs:{title:"4.词条折算是按什么比例？"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticStyle:{color:"#0081FF"}},[t._v("折算率 = 次属性提升期望 / 主属性提升期望")]),t._v("将次要属性（如胡桃的攻击）按折算率进行折算，加上其他有效词条获得折算后的词条数，特别感谢 NGA@young13325 提出的算法。")],1)],1),n("uni-collapse-item",{attrs:{title:"5.损失词条是什么意思？"}},[n("v-uni-view",{staticClass:"content"},[t._v("双爆不平衡会导致期望损失，比如目前是18条双爆，若显示损失了1个词条，则说明由于双爆的失衡，18条的期望与17条合理比例的双爆期望一致（算法来自：NGA @Gansterbot）")])],1)],1)],1)],1),n("v-uni-button",{staticStyle:{margin:"40px 15px","background-color":"#f6f2ee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")]),n("uni-tag")],1)},o=[]},"9d17":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-608c2e5a]{padding:15px}.text[data-v-608c2e5a]{font-size:14px;color:#666;line-height:20px}.title-text[data-v-608c2e5a]{font-weight:700;margin-top:14px}.title-card[data-v-608c2e5a]{margin-bottom:20px;font-weight:700;font-size:18px}",""]),t.exports=e},a1f1:function(t,e,n){"use strict";var i=n("32d0"),a=n.n(i);a.a},a552:function(t,e,n){"use strict";n.r(e);var i=n("57f9"),a=n("d62a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b402");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1de8c812",null,!1,i["a"],r);e["default"]=u.exports},add1:function(t,e,n){"use strict";n.r(e);var i=n("bb284"),a=n("1291");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c286");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e07ee5ea",null,!1,i["a"],r);e["default"]=u.exports},af21:function(t,e,n){"use strict";n.r(e);var i=n("fa26"),a=n("ce24");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"690ab064",null,!1,i["a"],r);e["default"]=u.exports},b402:function(t,e,n){"use strict";var i=n("be93"),a=n.n(i);a.a},b5a8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-collapse-item[data-v-335e5506]{box-sizing:border-box}.uni-collapse-item__title[data-v-335e5506]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-335e5506]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-335e5506]{padding:0 15px;display:flex;width:100%;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;height:48px;line-height:48px;background-color:#fff;color:#303133;font-size:13px;font-weight:500;cursor:pointer;outline:none}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-335e5506]{color:#999}.uni-collapse-item__title.uni-collapse-item-border[data-v-335e5506]{border-bottom:1px solid #ebeef5}.uni-collapse-item__title.is-open[data-v-335e5506]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-335e5506]{height:22px;width:22px;margin-right:10px}.uni-collapse-item__title-text[data-v-335e5506]{flex:1;font-size:14px;white-space:nowrap;color:inherit;overflow:hidden;text-overflow:ellipsis}.uni-collapse-item__title-arrow[data-v-335e5506]{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-335e5506]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-item__wrap[data-v-335e5506]{will-change:height;box-sizing:border-box;background-color:#fff;overflow:hidden;position:relative;height:0}.uni-collapse-item__wrap.is--transition[data-v-335e5506]{transition-property:height,border-bottom-width;transition-duration:.3s;will-change:height}.uni-collapse-item__wrap-content[data-v-335e5506]{position:absolute;font-size:13px;color:#303133;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.uni-collapse-item--border[data-v-335e5506]{border-bottom-width:1px;border-bottom-color:red;border-bottom-color:#ebeef5}.uni-collapse-item__wrap-content.open[data-v-335e5506]{position:relative}.uni-collapse-item--animation[data-v-335e5506]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}',""]),t.exports=e},bb284:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[t.border?n("v-uni-view",{staticClass:"uni-list--border-top"}):t._e(),t._t("default"),t.border?n("v-uni-view",{staticClass:"uni-list--border-bottom"}):t._e()],2)},o=[]},be93:function(t,e,n){var i=n("70f1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b0f8c546",i,!0,{sourceMap:!1,shadowMode:!1})},bf30:function(t,e,n){"use strict";var i=n("da49"),a=n.n(i);a.a},bfb4:function(t,e,n){"use strict";n.r(e);var i=n("949d"),a=n("24db");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a1f1");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],r);e["default"]=u.exports},c286:function(t,e,n){"use strict";var i=n("84b3"),a=n.n(i);a.a},cdb7:function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}n("c975"),n("fb6a"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=r,e.friendlyDate=s;var a={yyyy:function(t){return i(t.year,4)},yy:function(t){return i(t.year)},MM:function(t){return i(t.month)},M:function(t){return t.month},dd:function(t){return i(t.day)},d:function(t){return t.day},hh:function(t){return i(t.hour)},h:function(t){return t.hour},mm:function(t){return i(t.minute)},m:function(t){return t.minute},ss:function(t){return i(t.second)},s:function(t){return t.second},SSS:function(t){return i(t.millisecond,3)},S:function(t){return t.millisecond}};function o(t){if(t instanceof Date)return t;switch(typeof t){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=o(t);var n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},i=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,r=!0,s=e;while(r)r=!1,s=s.replace(i,(function(t){return r=!0,a[t](n)}));return s}function s(t,e){var n=e.locale,i=void 0===n?"zh":n,a=e.threshold,s=void 0===a?[6e4,36e5]:a,u=e.format,l=void 0===u?"yyyy/MM/dd hh:mm:ss":u;if("-"===t)return t;if(!t&&0!==t)return"";var c,d,f={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},p=f[i]||f.zh,h=o(t),v=h.getTime()-Date.now(),m=Math.abs(v);if(m<s[0])return v<0?p.justNow:p.soon;if(m>=s[1])return r(h,l);var g=p.later;v<0&&(g=p.ago,v=-v);var b=Math.floor(v/1e3),y=Math.floor(b/60),w=Math.floor(y/60),_=Math.floor(w/24),x=Math.floor(_/30),k=Math.floor(x/12);switch(!0){case k>0:c=k,d=p.year;break;case x>0:c=x,d=p.month;break;case _>0:c=_,d=p.day;break;case w>0:c=w,d=p.hour;break;case y>0:c=y,d=p.minute;break;default:c=b,d=p.second;break}return"en"===i&&(1===c?c="a":d+="s"),p.template.replace(/{\s*num\s*}/g,c+"").replace(/{\s*unit\s*}/g,d).replace(/{\s*suffix\s*}/g,g)}},ce24:function(t,e,n){"use strict";n.r(e);var i=n("054d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d159:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),t.exports=e},d62a:function(t,e,n){"use strict";n.r(e);var i=n("e606"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},da49:function(t,e,n){var i=n("d159");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("383a0302",i,!0,{sourceMap:!1,shadowMode:!1})},e606:function(t,e,n){"use strict";(function(t){n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{dataValue:function(){var t="string"===typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"===typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue:function(t){this.setOpen(t)}},created:function(){this.childrens=[],this.names=[]},mounted:function(){var t=this;this.$nextTick((function(){t.setOpen(t.dataValue)}))},methods:{setOpen:function(e){var n=this,i="string"===typeof e,a=Array.isArray(e);this.childrens.forEach((function(o,r){if(i&&e===o.nameSync){if(!n.accordion)return void t.warn("accordion 属性为 false ,v-model 类型应该为 array");o.isOpen=!0}a&&e.forEach((function(e){if(e===o.nameSync){if(n.accordion)return void t.warn("accordion 属性为 true ,v-model 类型应该为 string");o.isOpen=!0}}))})),this.emit(e)},setAccordion:function(t){this.accordion&&this.childrens.forEach((function(e,n){t!==e&&(e.isOpen=!1)}))},resize:function(){this.childrens.forEach((function(t,e){t.getCollapseHeight()}))},onChange:function(t,e){var n=[];this.accordion?n=t?e.nameSync:"":this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n),this.emit(n)},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}};e.default=i}).call(this,n("5a52")["default"])},fa26:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",[t._v(t._s(t.dateShow))])},o=[]},fe2c:function(t,e,n){var i=n("9d17");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("08e9e2e2",i,!0,{sourceMap:!1,shadowMode:!1})},fef2:function(t,e,n){"use strict";n.r(e);var i=n("3552"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);