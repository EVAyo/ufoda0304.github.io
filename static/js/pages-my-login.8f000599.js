(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-login"],{"1bc1":function(e,t,n){"use strict";n.r(t);var a=n("293c"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},"293c":function(e,t,n){"use strict";(function(e,a){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("ddb0"),n("e9c4");var u=i(n("c7eb")),o=i(n("1da1")),r=i(n("b85c")),c={data:function(){return{isDownload:!1,keyValue:"",login:{key:null,keys:["",""],date:"",limit:""}}},onLoad:function(t){var n;this.isDownload=1==t.type;var a=uni.getStorageSync("ysin_login");if(a)this.login=a,e.log(a);else{var i=uni.getStorageSync("ysin_time_limit"),u=uni.getStorageSync("ysin_key"),o=uni.getStorageSync("ysin_date");this.login={key:u,keys:["",""],date:o,limit:i},this.setBackup()}this.keyValue=null!==(n=this.login.key)&&void 0!==n?n:""},methods:{checkKeys:function(){var e,t=!1,n=0,a=(0,r.default)(this.login.keys);try{for(a.s();!(e=a.n()).done;){var i=e.value;i&&(n++,i.length>15&&(t=!0))}}catch(u){a.e(u)}finally{a.f()}t||1==n?uni.showModal({title:"错误",content:"key1、key2必须同时小于15位或者为空",showCancel:!1}):this.isDownload?this.downLoad():this.upload(n)},downLoad:function(){var e=this;this.login.key?uni.showModal({title:"提示",content:"确定用云端数据覆盖本地数据？",success:function(t){t.confirm&&e.getBackupData()}}):this.getBackupData()},upload:function(t){var n=this;return(0,o.default)((0,u.default)().mark((function a(){var i;return(0,u.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.checkTime()){a.next=2;break}return a.abrupt("return");case 2:if(0==t){a.next=9;break}return a.next=5,n.checkBackupKeys(n.login.keys);case 5:if(i=a.sent,0==i){a.next=9;break}return uni.showModal({title:"错误",content:"key在数据库已经存在，无法使用..",showCancel:!1}),a.abrupt("return");case 9:uni.showModal({title:"说明",content:"目前只会上传当前展示柜和收藏角色的数据（不包括预设列表）",confirmText:"上传",success:function(t){if(t.confirm){var a=[];try{var i=uni.getStorageInfoSync();a=i.keys}catch(v){e.log(v)}var u,o={},c=uni.getStorageSync("favObj"),s={},l=(0,r.default)(a);try{for(l.s();!(u=l.n()).done;){var d=u.value;if("ysin_login"==d||"ysin_profileData"==d){var f=uni.getStorageSync(d);o[d]=f}else if(c[d]&&c[d].isFav){var p=uni.getStorageSync(d);o[d]=p,s[d]=c[d]}}}catch(g){l.e(g)}finally{l.f()}o["favObj"]=s;var y=JSON.stringify(o),k={data:y,keys:n.login.keys,key:n.login.key};n.login.key?n.updateBackupData(k):n.createBackpuData(k)}else t.cancel}});case 10:case"end":return a.stop()}}),a)})))()},checkTime:function(){var e=Date.now();return e-this.login.date>18e4?(uni.showLoading({title:"提交中..."}),!1):(uni.showToast({icon:"none",title:"服务器限制，3分钟内只能请求一次"}),!0)},getBackupData:function(){var e=this;return(0,o.default)((0,u.default)().mark((function t(){var n,i,o,r,c,s;return(0,u.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.checkTime()){t.next=2;break}return t.abrupt("return");case 2:if(n=e.keyValue,i=a.importObject("backup"),t.prev=4,!n){t.next=11;break}return t.next=8,i.getData(n);case 8:o=t.sent,t.next=14;break;case 11:return t.next=13,i.getDataByKeys(e.login.keys);case 13:o=t.sent;case 14:if(r=o.data[0],r){for(s in uni.showToast({title:"下载数据成功"}),c=JSON.parse(r.data),e.login.key=r._id,e.login.date=r.date,e.login.keys=r.key1?[r.key1,r.key2]:["",""],c)uni.setStorageSync(s,c[s]);e.setBackup(),uni.$emit("initData")}else uni.showToast({title:"未找到数据！"});t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](4),uni.showModal({title:"错误！",content:t.t0.errMsg,showCancel:!1});case 21:case"end":return t.stop()}}),t,null,[[4,18]])})))()},createBackpuData:function(e){var t=arguments,n=this;return(0,o.default)((0,u.default)().mark((function i(){var o,r,c;return(0,u.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=t.length>1&&void 0!==t[1]&&t[1],r=a.importObject("backup"),i.prev=2,i.next=5,r.createData(e);case 5:c=i.sent,o?uni.showModal({title:"提示",content:"云端数据过期，已重新上传（密钥重新生成）",showCancel:!1,confirmText:"知道了"}):uni.showToast({title:"上传数据成功"}),n.login.key=c.id,n.login.date=Date.now(),n.setBackup(),uni.hideLoading(),i.next=17;break;case 13:i.prev=13,i.t0=i["catch"](2),uni.showToast({title:"上传数据失败"}),uni.hideLoading();case 17:case"end":return i.stop()}}),i,null,[[2,13]])})))()},updateBackupData:function(t){var n=this;return(0,o.default)((0,u.default)().mark((function i(){var o,r;return(0,u.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=a.importObject("backup"),i.prev=1,i.next=4,o.updateData(t);case 4:r=i.sent,r.updated>0?(uni.showToast({title:"更新数据成功"}),n.login.date=Date.now(),n.setBackup(),uni.hideLoading()):n.createBackpuData(t,!0),i.next=13;break;case 8:i.prev=8,i.t0=i["catch"](1),uni.showToast({title:"更新数据失败"}),uni.hideLoading(),e.log(i.t0);case 13:case"end":return i.stop()}}),i,null,[[1,8]])})))()},checkBackupKeys:function(e){var t=this;return(0,o.default)((0,u.default)().mark((function n(){var i,o,r;return(0,u.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=a.importObject("backup"),n.prev=1,o={keys:e,key:t.login.key},n.next=5,i.checkKeys(o);case 5:return r=n.sent,n.abrupt("return",r.total);case 9:return n.prev=9,n.t0=n["catch"](1),uni.showToast({title:"错误"}),uni.hideLoading(),n.abrupt("return",1);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))()},setBackup:function(){this.keyValue=this.login.key,this.login.limit=Date.now(),uni.setStorageSync("ysin_login",this.login),uni.$emit("updateLogin")}}};t.default=c}).call(this,n("5a52")["default"],n("a9ff")["default"])},9506:function(e,t,n){"use strict";n.r(t);var a=n("b70b"),i=n("1bc1");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"78488f05",null,!1,a["a"],void 0);t["default"]=r.exports},b70b:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uniPopup:n("b993").default,uniPopupDialog:n("b4f6").default,uniCard:n("3d92").default,uniSection:n("89d3").default,uniEasyinput:n("627c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[n("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",value:e.keyValue,title:"输入密钥..",placeholder:"..."},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}})],1),n("uni-card",{attrs:{spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"一、密钥 ",rightText:"自动生成",type:"line"}}),n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",[e._v("1、通过上传获得密钥，用下载数据")]),n("v-uni-view",[e._v("2、如果密钥和自定义key同时存在，则会通过密钥下载")]),n("v-uni-view",[e._v("3、清空密钥后，才会通过自定义key下载数据")]),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-easyinput",{attrs:{disabled:!e.isDownload,placeholder:"密钥.."},model:{value:e.keyValue,callback:function(t){e.keyValue=t},expression:"keyValue"}})],1)],1)],1),n("uni-card",{attrs:{spacing:"0",padding:"0"}},[n("uni-section",{attrs:{title:"二、自定义Key",rightText:"非必须,但建议设置",type:"line"}}),n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",[e._v("1、上传时，可以设置定义key（类似账号密码），用于下载数据")]),n("v-uni-view",[e._v("2、使用时需同时设置，且不大于15个字符，不需要清空即可，可以随时上传修改")]),n("v-uni-view",[e._v("3、建议用容易记住的文本，如QQ号+手机或者邮箱/生日，也可以用中文甚至符号，但是别用个人密码，因为这是明文存储的，并不安全")]),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-easyinput",{attrs:{disabled:e.isDownload&&e.keyValue.length>0,placeholder:"Key1..."},model:{value:e.login.keys[0],callback:function(t){e.$set(e.login.keys,0,t)},expression:"login.keys[0]"}})],1),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-easyinput",{attrs:{disabled:e.isDownload&&e.keyValue.length>0,placeholder:"Key2..."},model:{value:e.login.keys[1],callback:function(t){e.$set(e.login.keys,1,t)},expression:"login.keys[1]"}})],1)],1)],1),n("v-uni-button",{staticStyle:{margin:"40px 15px","background-color":"#f6f2ee"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkKeys.apply(void 0,arguments)}}},[e._v(e._s(e.isDownload?"下载":"上传"))])],1)},u=[]}}]);