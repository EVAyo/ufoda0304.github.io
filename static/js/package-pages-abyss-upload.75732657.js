(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-abyss-upload"],{"06b6":function(t,n,i){var e=i("a910");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("41620395",e,!0,{sourceMap:!1,shadowMode:!1})},"1dfd":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=n},"20f6":function(t,n,i){"use strict";i.r(n);var e=i("3f46"),a=i("f5c3");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("8ee9");var u=i("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"4daa80ca",null,!1,e["a"],void 0);n["default"]=c.exports},"3d37":function(t,n,i){"use strict";i.r(n);var e=i("444b"),a=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"3f46":function(t,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uniCard:i("3d92").default,uniSection:i("89d3").default,uniLink:i("bfb4").default,uniCollapse:i("a552").default,uniCollapseItem:i("9156").default,buttonBarBottom:i("e265").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("uni-card",{attrs:{padding:"0",margin:"14px",spacing:"0"}},[i("uni-section",{attrs:{title:"说明",type:"line"}}),i("v-uni-view",{staticStyle:{margin:"14px 14px"}},[i("v-uni-view",[t._v("1、胡桃数据库支持"),i("uni-link",{attrs:{color:"#007AFF",href:"https://hut.ao/",text:" PC客户端"}}),t._v("或者书签的方式进行上传")],1),i("v-uni-view",{staticClass:"top"},[t._v("2、书签完全是本地运行，不存在任何风险，可以自行查看相关代码。")]),i("v-uni-view",{staticClass:"top"},[t._v("3、只会提交深渊数据，因此如果没打深渊，会由于读不到数据而上传出错。")]),i("v-uni-view",{staticClass:"top"},[t._v("4、上传需要通过浏览器进行，首先点击最下方复制书签，之后根据平台在下方查看教程。")])],1)],1),i("uni-card",{attrs:{padding:"0",margin:"14px",spacing:"0"}},[i("uni-section",{attrs:{title:"教程",type:"line"}}),i("uni-collapse",{attrs:{accordion:!0},model:{value:t.accordionVal,callback:function(n){t.accordionVal=n},expression:"accordionVal"}},[i("uni-collapse-item",{attrs:{title:"1. 苹果手机 - ios"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("1、打开Safari浏览器")]),i("v-uni-view",[t._v("2、点击下方操作栏中间「分享」按钮")]),i("v-uni-view",[t._v("3、点击「添加书签」")]),i("v-uni-view",[t._v("4、将网址修改为复制的书签后保存")]),i("v-uni-view",[t._v("5、点击下方操作栏右边「书签」按钮")]),i("v-uni-view",[t._v("6、点击后稍微等待，会跳转米游社官网，登录后再次点击书签")]),i("v-uni-view",[t._v("7、等待上传，成功后会有提示")])],1)],1),i("uni-collapse-item",{attrs:{title:"2. 安卓手机 - android"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[t._v("1、下载并安装Via浏览器")]),i("v-uni-view",[t._v("2、打开后点击右下角「工具」按钮")]),i("v-uni-view",[t._v("3、点击「添加书签」")]),i("v-uni-view",[t._v("4、将网址修改为复制的书签后保存")]),i("v-uni-view",[t._v("5、点击右下角「工具」按钮，点击书签")]),i("v-uni-view",[t._v("6、点击后稍微等待，会跳转米游社官网，登录后再次点击书签")]),i("v-uni-view",[t._v("7、等待上传，成功后会有提示")])],1)],1),i("uni-collapse-item",{attrs:{title:"3. 电脑端 - pc"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{"margin-bottom":"8px"}},[i("a",{staticClass:"button-a",attrs:{href:t.href}},[t._v("胡桃数据库")])]),i("v-uni-view",[t._v("1、将该按钮拖拽至书签栏，或者将复制的书签自行创建")]),i("v-uni-view",[t._v("2、点击后稍微等待，会跳转米游社官网，登录后再次点击书签")]),i("v-uni-view",[t._v("3、等待上传，成功后会有提示")])],1)],1),i("uni-collapse-item",{attrs:{title:"4. 胡桃工具箱 - windows"}},[i("v-uni-view",{staticClass:"content"},[t._v("打开"),i("uni-link",{attrs:{color:"#007AFF",href:"https://hut.ao/",text:" 胡桃工具箱 "}}),t._v("官网，安装后根据教程上传")],1)],1)],1)],1),i("button-bar-bottom",{attrs:{text:"复制书签"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copy()}}})],1)},o=[]},"444b":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};n.default=e},"748d":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},a=[]},"8ee9":function(t,n,i){"use strict";var e=i("06b6"),a=i.n(e);a.a},a910:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".content[data-v-4daa80ca]{padding:4px 15px 12px}.top[data-v-4daa80ca]{margin-top:4px}.button-a[data-v-4daa80ca]{color:#fff;border-radius:4px;padding:6px;text-decoration:none;background-color:#ad9388;width:-webkit-fit-content;width:fit-content}",""]),t.exports=n},bcee:function(t,n,i){"use strict";var e=i("e52b"),a=i.n(e);a.a},e265:function(t,n,i){"use strict";i.r(n);var e=i("748d"),a=i("3d37");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("bcee");var u=i("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"d83b913c",null,!1,e["a"],void 0);n["default"]=c.exports},e52b:function(t,n,i){var e=i("1dfd");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("1143f6dc",e,!0,{sourceMap:!1,shadowMode:!1})},f0bf:function(t,n,i){"use strict";(function(t){i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{href:"javascript:(function(){const s=document.createElement('script');s.src='https://yuanshen.xin/upload/upload.js';document.body.append(s)})();",accordionVal:"-1"}},onLoad:function(){var n=uni.getSystemInfoSync().osName,i={ios:"0",android:"1",macos:"2",windows:"2",linux:"2"};t.log(n),i[n]&&(this.accordionVal=i[n])},methods:{copy:function(){uni.setClipboardData({data:this.href,success:function(){uni.showToast({title:"复制成功"})},fail:function(n){t.log(n)}})}}};n.default=e}).call(this,i("5a52")["default"])},f5c3:function(t,n,i){"use strict";i.r(n);var e=i("f0bf"),a=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a}}]);