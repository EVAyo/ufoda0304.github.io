(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"0eae":function(t,n,a){var e=a("c363");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("0a61cfa4",e,!0,{sourceMap:!1,shadowMode:!1})},"22fe":function(t,n,a){"use strict";a.r(n);var e=a("5802"),i=a("332d4");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);var d,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"d344422c",null,!1,e["a"],d);n["default"]=u.exports},"2c31":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{test:function(){uni.navigateTo({url:"/pages/team/team"})},clickBannerItem:function(){uni.clearStorage(),uni.showToast({title:"缓存已经清除",icon:"none"}),uni.$emit("initData")},deleteLoacl:function(){var t=this;uni.showModal({title:"提示",content:"确定要清空吗?",success:function(n){n.confirm?t.clickBannerItem():n.cancel}})}}};n.default=e},"332d4":function(t,n,a){"use strict";a.r(n);var e=a("2c31"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},"408b":function(t,n,a){"use strict";a.r(n);var e=a("9d27"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},5083:function(t,n,a){"use strict";a.r(n);var e=a("a3e7"),i=a("408b");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("b3ec");var d,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"6d06604a",null,!1,e["a"],d);n["default"]=u.exports},5802:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var e={uniCard:a("5083").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("uni-card",{attrs:{padding:"20px"}},[a("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("当前进度:")])]),a("v-uni-text",[t._v('任何建议或者反馈Bug: 微信: badl2019 / QQ: 313306199 / NGA回帖\n\t\t\t\t\n\t\t\t\t1.选择阵容,根据实际练度对队伍DPS进行模拟, 目前正在与大佬@bluemushoom学习技能轴细节,完后后会先更新"雷国"的DPS模拟.')])],1),a("uni-card",{attrs:{padding:"20px"}},[a("v-uni-view",{staticStyle:{"margin-bottom":"20px"}},[a("h2",[t._v("更新日志:")])]),a("v-uni-text",[t._v("2022年02月17日\n\t\t\t- 调整了刻晴的默认圣遗物,降低暴击以避免传绿剑后暴击溢出影响计算.\n\t\t\t- 修复了匣里日月特效计算错误的问题.\n\t\t\t- 修复了八重伤害计算四命没有效果的问题.\n\t\t\t\n\t\t\t2022年02月16日\n\t\t\t- 修复了八重的暴击和基础攻击的问题.\n\t\t\t- 更新了八重乐子和神乐之真意.\n\t\t\t- 调整了部分ui.\n\t\t\t- 修复并添加了绝大部分团队增益(人物,武器,圣遗物)\n\t\t\t- 修复了基准分会被武器影响的问题\n\t\t\t\n\t\t\t2022年02月14日\n\t\t\t- 修复九条的增益效果无法顺利增加的问题\n\t\t\t- 现在可以手动控制哪个增益有效了\n\t\t\t- 调整香菱的基准分.\n\t\t\t- 修复苍古的特效错误的问题\n\t\t\t- 添加讨龙效果\n\t\t\t- 添加角色能量数据,让雷神E可以正确的加成.\n\t\t\t- 调整收藏角色只显示单人数据评分(百分比)作为练度显示.\n\t\t\t- 去掉优菈默认的超导,增加长E的效果.\n\t\t\t\n\t\t\t\n\t\t\t2022年02月13日\n\t\t\t- 修复不能添加九条作为队友的问题.\n\t\t\t- 调整暗巷弓特效,按满层10层计算\n\t\t\t- 修改息灾默认算后台进行加攻\n\t\t\t- 暂时移除申鹤天赋一的团队增益效果\n\t\t\t- 修复绝缘四件套一直按吃满算的错误\n\t\t\t- 修复班尼特未计算命座一的错误\n\t\t\t- 修复九条加攻计算错误的问题\n\t\t\t- 修复伤害计算未按实际人物等级计算的错误\n\t\t\t- 修复申鹤的冰凌给甘雨只计算一次的问题\n\t\t\t- 修复改动预设出现预设丢失的问题\n\t\t\t- 修复队友带武器苍古/终末的时候无法保存的问题.\n\t\t\t- 重新处理了所有图片,现在为base64.\n\t\t\t\n\t\t\t2022年02月11日\n\t\t\t- [新功能] 更新了选择队友(如班尼特,万叶),计算BUFF后的实战伤害\n\t\t\t\t\t\t\t\n\t\t\t2022年02月08日\n\t\t\t- 修复千岩长枪武器暴击换算错误的问题\n\t\t\t- \n\t\t\t2022年02月07日\n\t\t\t- 修复了魔女四件错误的计算问题\n\t\t\t- 修复了暗巷猎手无法保存的问题\n\t\t\t- 修复了暴击超过100%时计算错误的问题.\n\t\t\t\n\t\t\t2022年02月05日\n\t\t\t- 添加了暴击的权重\n\t\t\t- 添加了等级的选择(80-90)\n\t\t\t- 添加了普攻11级的选项\n\t\t\t\n\t\t\t2022年02月04日\n\t\t\t- 修复薙草之稻光加攻击力数值的错误\n\t\t\t- 修复绝缘四件套没有最后结算导致的计算错误\n\t\t\t- 修复雷神权重计算错误的问题\n\t\t\t\n\t\t\t2022年02月03日 \n\t\t\t- 修复无法保存暗巷闪光的问题\n\t\t\t- 增加班尼特Q加攻和治疗量的显示\n\t\t\t- 修复七七和琴治疗加成错误问题\n\t\t\t- 首页收藏的角色显示词条和数据评分\n\t\t\t- 修复宵宫E的乘区问题\n\t\t\t- 修复申鹤没有计算人物突破攻击的问题\n\t\t\t- 云瑾添加四命效果\n\t\t\t- 增加了九条加攻,心海治疗的显示\n\t\t\t- 添加了白樱枪和平雷4\n\t\t\t- 增加钟离普攻第一段伤害\n\t\t\t- 修复班尼特治疗不吃治疗头的问题\n\t\t\t- 修复一斗6命没有计入的问题\n\t\t\t\n\t\t\t2022年02月02日\n\t\t\t- 修复无法保存试作澹月,断浪长鳍,白影剑,试作星镰等武器的问题\n\t\t\t- 修复没有渡火套的问题\n\t\t\t- 修复魔女套没有正确添加15%反应系数的问题\n\t\t\t- 修复冰树的级别为93(原为90, 数据计算会略微下降)\n\t\t\t- 调整融甘和迪卢克的圣遗物基准值问题(现在更加准确了)\n\t\t\t- 甘雨现在默认为第二箭起的伤害(吃天赋20暴和命座一)")])],1),a("v-uni-button",{staticStyle:{margin:"30px 15px","background-color":"#f6f2ee"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteLoacl.apply(void 0,arguments)}}},[t._v("清空本地缓存")])],1)},r=[]},"9d27":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};n.default=e},a3e7:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?a("v-uni-view",{staticClass:"uni-card__cover"},[a("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?a("v-uni-view",{staticClass:"uni-card__header"},[a("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("title")}}},[t.thumbnail?a("v-uni-view",{staticClass:"uni-card__header-avatar"},[a("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),a("v-uni-view",{staticClass:"uni-card__header-content"},[a("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?a("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("extra")}}},[a("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),a("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("content")}}},[t._t("default")],2),a("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick("actions")}}},[t._t("actions")],2)],2)},r=[]},b3ec:function(t,n,a){"use strict";var e=a("0eae"),i=a.n(e);i.a},c363:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=n}}]);