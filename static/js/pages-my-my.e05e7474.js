(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0eae":function(t,n,a){var e=a("c363");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("0a61cfa4",e,!0,{sourceMap:!1,shadowMode:!1})},"22fe":function(t,n,a){"use strict";a.r(n);var e=a("8d5d"),i=a("332d4");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);var d,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"968d740a",null,!1,e["a"],d);n["default"]=u.exports},"2c31":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{test:function(){uni.navigateTo({url:"/pages/team/team"})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),uni.$emit("initData")},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(n){n.confirm?t.clickBannerItem():n.cancel}})}}};n.default=e},"332d4":function(t,n,a){"use strict";a.r(n);var e=a("2c31"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},"408b":function(t,n,a){"use strict";a.r(n);var e=a("9d27"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},5083:function(t,n,a){"use strict";a.r(n);var e=a("a3e7"),i=a("408b");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("b3ec");var d,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"6d06604a",null,!1,e["a"],d);n["default"]=u.exports},"8d5d":function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var e={uniCard:a("5083").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("uni-card",[t._v("任何建议或者反馈Bug: 微信: badl2019 / QQ: 313306199 / NGA回帖")]),a("uni-card",{attrs:{padding:"20px"}},[a("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("当前进度:")])]),a("v-uni-text",[t._v("- 显示命座的提升幅度? 显示武器的强度对比?\n\t\t\t- 添加武器的选项(特别是赌狗乐章)?\n\t\t\t- 完善阵容Dps模拟，添加常用轴。")])],1),a("uni-card",{attrs:{padding:"20px"}},[a("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("更新日志:")])]),a("v-uni-text",[t._v("2022年02月26日\n\t\t\t- 增加优雷修班的阵容DPS模拟\n\t\t\t- 增加队伍DPS模拟中，显示计算公式的选项\n\t\t\t- 去除香菱数据分析中6命的效果(自己竟然吃不到)\n\t\t\t\n\t\t\t2022年02月24日\n\t\t\t- 增加在队伍中可以调整角色属性\n\t\t\t- 雷国23s轴的愿力由48层调整为54层(0命),60层(1命以上)\n\t\t\t- 添加21秒雷国轴的愿力数值的显示\n\t\t\t- 修复雷国21s轴薙草计算错误的问题\n\t\t\t- 修复神里四命意外计算两次的问题\n\t\t\t- 修复武器效果的文本错误\n\t\t\t- 修复降低防御和忽视防御为加算的问题\n\n\t\t\t2022年02月23日\n\t\t\t- 修复五郎天赋错误计算两次的问题\n\t\t\t- 调整优菈6命按23层计算期望伤害\n\t\t\t- 调整雷国21秒轴雷神1命以上按60层愿力计算\n\t\t\t- 修复雷国23秒轴雷神多算了一组AAAZ的问题\n\t\t\t- 修复了磐岩2的文本错误\n\t\t\t- 修复九条沙罗错误计算两次加攻的问题\n\t\t\t- 调整目标为93级魔偶剑鬼(10%全抗)\n\t\t\t- 修复断浪系列错误计算的问题\n\t\t\t- 修复部分增益列表不显示的问题(实际已添加)\n\n\t\t\t2022年02月22日\n\t\t\t- 添加21秒雷神国家队的轴\n\t\t\t- 完善断浪系列的按总队伍能量进行加伤\n\t\t\t- 调整香菱/胡桃的魔女4按1层计算\n\t\t\t- 修复五郎3命没有计入治疗加成的问题\n\t\t\t- 修复公子开E未按普攻计算的问题\n\t\t\t- 修复辛炎二命没有计入的问题\n\t\t\t- 修复双岩减抗错误的问题\n\n\t\t\t2022年02月21日\n\t\t\t- 【重要】 添加了阵容dps模拟功能，先更新了雷国（测试）\n\t\t\t- 修复了队友选择中，把某些不可选的buff意外算入的问题\n\t\t\t- 调整队伍显示的基础面板为添加圣遗物和武器效果后\n\t\t\t- 修复了五郎E没有15%岩伤的问题\n\t\t\t- 修复了预设未正确保存和无法重新命名的问题\n\t\t\t- 添加了弹弓、证誓之明瞳\n\n\t\t\t2022年02月20日\n\t\t\t- 修复了胡桃无法吃到莫娜一命的问题\n\n\t\t\t2022年02月19日\n\t\t\t- 修复万叶二命无法保存的问题\n\t\t\t- 修复八重神子四命未算作团队增益的问题\n\t\t\t- 修复了预设丢失数据的问题\n\t\t\t- 修复了砂糖默认不是6命的问题\n\n\t\t\t2022年02月18日\n\t\t\t- 修复了教官套和流放套无法保存的问题。\n\t\t\t- 添加了钟离、烟绯（4命）、辛炎、诺艾尔的护盾显示\n\n\t\t\t2022年02月17日\n\t\t\t- 修复了攀岩4无法保存的问题\n\t\t\t- 修复了罗莎莉亚加暴击错误的问题\n\t\t\t- 调整了刻晴的默认圣遗物，降低暴击以避免传绿剑后暴击溢出影响计算\n\t\t\t- 修复了匣里日月特效计算错误的问题\n\t\t\t- 修复了八重伤害计算四命没有效果的问题\n\n\t\t\t2022年02月16日\n\t\t\t- 修复了八重的暴击和基础攻击的问题\n\t\t\t- 更新了八重乐子和神乐之真意\n\t\t\t- 调整了部分ui\n\t\t\t- 修复并添加了绝大部分团队增益(人物，武器，圣遗物)\n\t\t\t- 修复了基准分会被武器影响的问题")])],1),a("v-uni-button",{staticStyle:{margin:"30px 15px","background-color":"#f6f2ee"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")])],1)},r=[]},"9d27":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};n.default=e},a3e7:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},b3ec:function(t,n,a){"use strict";var e=a("0eae"),i=a.n(e);i.a},c363:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=n}}]);