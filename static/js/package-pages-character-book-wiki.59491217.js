(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book-wiki"],{"0598":function(i,e,n){var t=n("d438");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("967d").default;a("f821a908",t,!0,{sourceMap:!1,shadowMode:!1})},"0621":function(i,e,n){"use strict";var t=n("3355"),a=n.n(t);a.a},"09d3":function(i,e,n){"use strict";var t=n("87fc"),a=n.n(t);a.a},1197:function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:[]}},1339:function(i,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return t}));var t={uniIcons:n("62d1").default},a=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:i.color},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[i.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:i.type})],1):i._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[i.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[i._v(i._s(i.title))]):i._e(),i.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[i._v(i._s(i.subTitle))]):i._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[i._t("extra",[i.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[i._v(i._s(i.rightText))]):i._e()])],2),i.showIcon?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:i.icon}}):i._e()],1),n("v-uni-view",{style:{padding:i.padding?"10px":""}},[i._t("default")],2)],1)},u=[]},"196c":function(i,e,n){var t=n("c86c");e=t(!1),e.push([i.i,".image[data-v-15c3c0f2]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.note[data-v-15c3c0f2]{text-align:center;font-size:%?26?%;color:#999}.text[data-v-15c3c0f2]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-15c3c0f2]{height:auto!important}.grid-item-box[data-v-15c3c0f2]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),i.exports=e},1984:function(i,e,n){"use strict";n.r(e);var t=n("2f32"),a=n("c501");for(var u in a)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return a[i]}))}(u);n("59b2");var o=n("828b"),r=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"15c3c0f2",null,!1,t["a"],void 0);e["default"]=r.exports},"27b3":function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("aa9c"),n("bf0f"),n("2797"),n("dd2b");var t={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var i=this;this.grid.children.forEach((function(e,n){e===i&&i.grid.children.splice(n,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=t},"2c77":function(i,e,n){"use strict";n.r(e);var t=n("7341"),a=n.n(t);for(var u in t)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=a.a},"2f32":function(i,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return t}));var t={uniSection:n("d819").default,uniGrid:n("fb23").default,uniGridItem:n("d7f6").default,uniListItem:n("5d9b").default,uniLink:n("ebc5").default},a=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"武器使用率",type:"line"}}),n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},i._l(i.item.Weapons,(function(e,t){return n("uni-grid-item",{key:t,staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.image[e.id],mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[i._v(i._s(e.name))]),n("v-uni-text",{staticClass:"note"},[i._v(i._s(e.text))])],1)],1)})),1),n("uni-section",{attrs:{title:"圣遗物使用率",type:"line"}}),n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},i._l(i.item.Reliquaries,(function(e,t){return e.id?n("uni-grid-item",{key:t,staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.image[e.id],mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[i._v(i._s(e.name))]),n("v-uni-text",{staticClass:"note"},[i._v(i._s(e.text))])],1)],1):i._e()})),1),n("uni-section",{attrs:{title:"队友选择率",type:"line"}}),n("uni-grid",{attrs:{column:4,highlight:!0,showBorder:!1}},i._l(i.item.Avatars,(function(e,t){return n("uni-grid-item",{key:t,staticClass:"uni-grid-item"},[n("v-uni-view",{staticClass:"grid-item-box"},[n("v-uni-image",{staticClass:"image",attrs:{src:i.avatars[e.id],mode:"aspectFill"}}),n("v-uni-text",{staticClass:"text"},[i._v(i._s(e.name))]),n("v-uni-text",{staticClass:"note"},[i._v(i._s(e.text))])],1)],1)})),1),n("uni-section",{attrs:{title:"数据来源",type:"line"}}),n("uni-list-item",{staticClass:"item-space",attrs:{title:"DGP-Studio / 胡桃数据库"},scopedSlots:i._u([{key:"footer",fn:function(){return[n("uni-link",{attrs:{color:"#007AFF",href:"https://hut.ao/",text:"官网"}})]},proxy:!0}])})],1)},u=[]},3355:function(i,e,n){var t=n("ed40");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("967d").default;a("77e19b14",t,!0,{sourceMap:!1,shadowMode:!1})},"3c37":function(i,e,n){"use strict";(function(i){n("6a54");var t=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f"),n("f7a5");var a=t(n("3471")),u=t(n("2634")),o=t(n("2fdc")),r=t(n("f99e")),d=t(n("1197")),l=t(n("cb4f")),s=t(n("bb44")),c=t(n("6fdd")),f=t(n("d518")),h=t(n("5ed2")),g={data:function(){return{avatars:{},item:{},image:{}}},onLoad:function(e){0==d.default.data.length?(i.log("开始请求"),this.getHutaoData(e.id)):this.handleData(d.default,e.id),this.avatars=h.default;var n=r.default[e.id];uni.setNavigationBarTitle({title:n}),this.image=f.default},methods:{getHutaoData:function(e){var n=this;return(0,o.default)((0,u.default)().mark((function t(){var a;return(0,u.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"正在刷新..",icon:"none"}),t.prev=1,t.next=4,n.getRequest();case 4:a=t.sent,i.log(a),d.default.data=a.data.data,n.handleData(a.data,e),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),i.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getRequest:function(){return new Promise((function(i,e){uni.request({url:"https://homa.snapgenshin.com/Statistics/Avatar/AvatarCollocation",headers:{"User-Agent":"Ysin/2.0"},timeout:1e4,success:function(e){i(e)},fail:function(i){e(i)}})}))},handleData:function(e,n){var t,u=(0,a.default)(e.data);try{for(u.s();!(t=u.n()).done;){var o,d=t.value,f=null!==(o=c.default[d.AvatarId])&&void 0!==o?o:d.AvatarId;if(f==n){if(!d.ok){var h,g=(0,a.default)(d.Weapons);try{for(g.s();!(h=g.n()).done;){var v,p=h.value;p.id=null!==(v=s.default[p.Item])&&void 0!==v?v:p.Item,p.text=(100*p.Rate).toFixed(1)+"%",r.default[p.id]?p.name=r.default[p.id].slice(0,2):(p.name="?",i.log(p))}}catch(B){g.e(B)}finally{g.f()}var x,y=(0,a.default)(d.Reliquaries);try{for(y.s();!(x=y.n()).done;){var m=x.value,b=m.Item;if(b){var w,_=b.slice(0,6),z=null!==(w=l.default[_])&&void 0!==w?w:_;if(r.default[z]?(m.name=r.default[z].slice(0,2),m.id=z):i.log(z),"2"==b[8]){if(m.name+="2",b[9]){var j,k=b.slice(10,16),C=null!==(j=l.default[k])&&void 0!==j?j:k;r.default[C]&&(m.name+="+"+r.default[C].slice(0,2)+"2")}}else m.name+="4"}m.text=(100*m.Rate).toFixed(1)+"%"}}catch(B){y.e(B)}finally{y.f()}var q,S=(0,a.default)(d.Avatars);try{for(S.s();!(q=S.n()).done;){var M,O=q.value;O.id=null!==(M=c.default[O.Item])&&void 0!==M?M:O.Item,O.text=(100*O.Rate).toFixed(1)+"%",O.name=r.default[O.id]}}catch(B){S.e(B)}finally{S.f()}d.ok=!0}this.item=d;break}}}catch(B){u.e(B)}finally{u.f()}uni.hideLoading()},getWiki:function(){var e=this;uni.request({url:"https://info.minigg.cn/v4/characters?query="+name,success:function(n){i.log(n.data),e.text="request success"}})}}};e.default=g}).call(this,n("ba7c")["default"])},"3e02":function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("c9b5"),n("bf0f"),n("ab80"),n("2797"),n("5c47"),n("e966");var t={name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var i="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:i,width:0}},created:function(){this.children=[]},mounted:function(){var i=this;this.$nextTick((function(){i.init()}))},methods:{init:function(){var i=this;setTimeout((function(){i._getSize((function(e){i.children.forEach((function(i,n){i.width=e}))}))}),50)},change:function(i){this.$emit("change",i)},_getSize:function(i){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(n){e.width=parseInt((n[0].width-1)/e.column)+"px",i(e.width)}))}}};e.default=t},4096:function(i,e,n){"use strict";n.d(e,"b",(function(){return t})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var t=function(){var i=this,e=i.$createElement,n=i._self._c||e;return i.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===i.showUnderLine||"true"===i.showUnderLine},style:{color:i.color,fontSize:i.fontSize+"px"},attrs:{href:i.href,download:i.download}},[i._t("default",[i._v(i._s(i.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===i.showUnderLine||"true"===i.showUnderLine},style:{color:i.color,fontSize:i.fontSize+"px"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.openURL.apply(void 0,arguments)}}},[i._t("default",[i._v(i._s(i.text))])],2)},a=[]},"48a7":function(i,e,n){"use strict";var t=n("0598"),a=n.n(t);a.a},"4bd3":function(i,e,n){var t=n("d7cf");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("967d").default;a("2a02c826",t,!0,{sourceMap:!1,shadowMode:!1})},5191:function(i,e,n){"use strict";n.r(e);var t=n("27b3"),a=n.n(t);for(var u in t)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=a.a},"59b2":function(i,e,n){"use strict";var t=n("d2c2"),a=n.n(t);a.a},"6e02":function(i,e,n){"use strict";var t=n("4bd3"),a=n.n(t);a.a},"6fdd":function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={10000083:"linnite",10000084:"linni",10000085:"feimini",10000061:"qiliangliang",10000081:"kawei",10000082:"baishu",10000079:"dixiya",10000080:"mika",10000077:"yaoyao",10000078:"aierhaisen",10000075:"liulangzhe",10000076:"falushan",10000073:"naxida",10000074:"laiyila",10000072:"kandisi",10000070:"nilu",10000071:"sainuo",10000069:"tinali",10000067:"kelai",10000068:"duoli",10000003:"qin",10000006:"lisha",2e7:"zhujue",10000014:"babala",10000015:"kaiya",10000016:"diluke",10000020:"leize",10000022:"wendi",10000023:"xiangling",10000024:"beidou",10000025:"xingqiu",10000026:"xiao",10000027:"ningguang",10000029:"keli",10000030:"zhongli",10000031:"feixieer",10000032:"bannite",10000033:"dadaliya",10000034:"nuoaier",10000035:"qiqi",10000036:"chongyun",10000037:"ganyu",10000038:"abeiduo",10000039:"diaona",10000042:"keqing",10000043:"shatang",10000044:"xinyan",10000045:"luoshaliya",10000046:"hutao",10000047:"fengyuanwanye",10000048:"yanfei",10000051:"youla",10000005:"kong",10000007:"traveller",10000021:"anbo",10000041:"mona",10000002:"shenlilinghua",10000049:"xiaogong",10000052:"leidianjiangjun",10000053:"zaoyou",10000054:"shanhugongxinhai",10000056:"jiutiaoshaluo",10000062:"ailuoyi",10000050:"tuoma",10000055:"wulang",10000057:"huanglongyidou",10000058:"bachongshenzi",10000059:"luyeyuanpingzang",10000060:"yelan",10000063:"shenhe",10000064:"yunjin",10000065:"jiuqiren",10000066:"shenlilingren"}},7341:function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(i){uni.report&&""!==i&&uni.report("title",i)}},methods:{onClick:function(){this.$emit("click")}}};e.default=t},"7cf9":function(i,e,n){"use strict";n.r(e);var t=n("3e02"),a=n.n(t);for(var u in t)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=a.a},"87fc":function(i,e,n){var t=n("ffe6");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("967d").default;a("10414a22",t,!0,{sourceMap:!1,shadowMode:!1})},9608:function(i,e,n){"use strict";n.d(e,"b",(function(){return t})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var t=function(){var i=this,e=i.$createElement,n=i._self._c||e;return i.width?n("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+i.width+";"+(i.square?"height:"+i.width:"")},[n("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":i.showBorder,"uni-grid-item--border-top":i.showBorder&&i.index<i.column,"uni-highlight":i.highlight},style:{"border-right-color":i.borderColor,"border-bottom-color":i.borderColor,"border-top-color":i.borderColor},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i._onClick.apply(void 0,arguments)}}},[i._t("default")],2)],1):i._e()},a=[]},bb44:function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={11424:"langya",11425:"haiyuanzhongqu",11426:"huihedushou",12424:"liaoliaobang",12425:"langyingkuojian",13424:"xiawanchangge",13425:"gongyidechoubao",14424:"yisiyulong",14425:"chunshuiliuhua",15424:"lieyangzhisi",15425:"jingmizhiqu",15512:"zuichudedamoshu",15419:"huanchuanzhihui",11101:"wufengjian",11201:"yinjian",11301:"lengren",11302:"limingshenjian",11303:"lvxingjian",11304:"antiejian",11305:"chihuyudao",11306:"feitianyujian",11401:"xifengjian",11402:"dijian",11403:"jilijian",11404:"zongshichangjian",11405:"xialilongyin",11406:"shizuozhanyan",11407:"tiefengci",11408:"heiyanchangjian",11409:"heijian",11410:"anxiangshanguang",11412:"jianglinzhijian",11413:"fuzhizhijian",11414:"tianmuyingdadao",11415:"chenshazhifangchui",11416:"longdiaopinyixin",11417:"yuanmudao",11418:"xifusideyueguang",11422:"donghuafangshiyu",11501:"fengyingjian",11502:"tiankongzhiren",11503:"cangguziyouzhishi",11504:"zhuofengzhiren",11505:"panyanjielv",11509:"wuqiezhihuiguang",11510:"boluanyuebaijingjin",11511:"shengxianzhiyao",11512:"caiyecuiguang",12101:"xunliandajian",12201:"yongbingzhongjian",12301:"tieyingkuojian",12302:"muyulongxuedejian",12303:"baitiedajian",12305:"yilifuren",12306:"feitiandayujian",12401:"xifengdajian",12402:"zhongjian",12403:"jilidajian",12404:"zongshidajian",12405:"yucai",12406:"shizuoguhua",12407:"baiyingjian",12408:"heiyanzhandao",12409:"chigujian",12410:"qianyangujian",12411:"xuezangdexingyin",12412:"xianzhuhaihuang",12414:"guimuzhanchangzheng",12415:"mahailadeshuise",12416:"ewangwan",12417:"senlinwangqi",12418:"shitiezhihua",12501:"tiankongzhiao",12502:"langdemolu",12503:"songlaixiangqizhishi",12504:"wugongzhijian",12510:"chijiaoshikuichu",12511:"weihaixinbiao",13101:"xinshouchangqiang",13201:"tiejianqiang",13301:"baiyingqiang",13302:"yuemao",13303:"heiyingqiang",13401:"xialimiechen",13402:"shizuoxinglian",13403:"liuyuezhen",13404:"heiyanciqiang",13405:"juedouzhiqiang",13406:"qianyanchangqiang",13407:"xifengchangqiang",13408:"zongshilieqiang",13409:"longjichangqiang",13414:"xiduoyuanshiwenzi",13415:"yuhuo",13416:"duanlangchangqi",13417:"guanyueshi",13419:"fengxinzhifeng",13501:"humozhizhang",13502:"tiankongzhiji",13504:"guanhongzhishuo",13505:"hepuyuan",13507:"xizai",13509:"ticaozhidaoguang",13511:"chishazhizhang",14101:"xuetubiji",14201:"koudaimodaoshu",14301:"modaoxulun",14302:"taolongyingjietan",14303:"yishijiexingji",14304:"feiyufaqiu",14305:"jiajibaojue",14401:"xifengmidian",14402:"liulangyuezhang",14403:"jilicanzhang",14404:"zongshimifalu",14405:"xialiriyue",14406:"shizuojinpo",14407:"wanguozhuhaitupu",14408:"heiyanfeiyu",14409:"zhaoxin",14410:"anxiangdejiuyushi",14412:"rendongzhiguo",14413:"dudukegushiji",14414:"baichenzhihuan",14415:"zhengshizhimingdong",14416:"liulangdewanxing",14417:"yingmanzhishi",14501:"tiankongzhijuan",14502:"sifengyuandian",14504:"chenshizhisuo",14505:"biluozhilong",14506:"bumieyuehua",14509:"shenlezhizhenyi",14511:"qianyefumeng",14512:"tulaiduladehuiyi",15101:"liegong",15201:"liliandeliegong",15301:"yayugong",15302:"shensheshouzhishi",15303:"fanqugong",15304:"dangong",15305:"xinshi",15401:"xifengliegong",15402:"juexian",15403:"jiligong",15404:"zongshichanggong",15405:"gongcang",15406:"shizuodanyue",15407:"ganglungong",15408:"heiyanzhangong",15409:"cangcuiliegong",15410:"anxianglieshou",15411:"luoxia",15412:"youyehuaerzi",15413:"fenghuazhisong",15414:"pomozhigong",15415:"lveshizhe",15416:"mengyunzhiyue",15417:"wangxiajinshi",15418:"jieze",15501:"tiankongzhiyi",15502:"amosizhigong",15503:"zhongmojietanzhishi",15507:"dongjibaixing",15508:"ruoshui",15509:"feileizhixianzhen",15511:"lierenzhijing"}},c501:function(i,e,n){"use strict";n.r(e);var t=n("3c37"),a=n.n(t);for(var u in t)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=a.a},cb4f:function(i,e,n){"use strict";n("6a54");var t=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,u=t(n("39d8")),o=(a={215032:"huangjinjutuan",215031:"zhuyinglieren",215029:"shuixianzhimeng",215030:"huahaiganluzhiguang",215027:"loushangshageshihua",215028:"leyuanyiluozhihua",215025:"shenlindejiyi",215026:"shijinzhimeng",214001:"5bingfeng",214002:"5pinglei",214003:"5duhuo",214004:"5shaonv",215001:"5jiaodou",215002:"5cuilv",215003:"5yuetuan",215005:"5rulei",215006:"5monv",215007:"5zongshi",215008:"5ranxue",215014:"5panyan",215015:"5nifei",215016:"5chenlun",215017:"5qianyan",215018:"cangbai",215019:"5zhuiyi",215020:"5jueyuan",215021:"5huaguan",215022:"5hairan",215023:"chenshawangshenglu",215024:"laiyunyuxiang",2191797987:"wu",1103732675:"wu",3618167299:"wu",3782508715:"wu",215009:"wu",215010:"wu",215011:"wu"},(0,u.default)(a,"215011","wu"),(0,u.default)(a,215013,"wu"),(0,u.default)(a,210001,"wu"),(0,u.default)(a,210002,"wu"),(0,u.default)(a,210003,"shouhuzhixin"),(0,u.default)(a,210004,"wu"),(0,u.default)(a,210005,"zhankuang"),(0,u.default)(a,210006,"wu"),(0,u.default)(a,210007,"jiaoguan"),(0,u.default)(a,210008,"wu"),(0,u.default)(a,210009,"liufang"),a);e.default=o},d0a7:function(i,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("9db6");var t={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(i){uni.makePhoneCall({phoneNumber:i})}}};e.default=t},d2c2:function(i,e,n){var t=n("196c");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=n("967d").default;a("5172ecd6",t,!0,{sourceMap:!1,shadowMode:!1})},d354:function(i,e,n){"use strict";n.d(e,"b",(function(){return t})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var t=function(){var i=this.$createElement,e=this._self._c||i;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-color":this.borderColor},attrs:{id:this.elId}},[this._t("default")],2)],1)},a=[]},d438:function(i,e,n){var t=n("c86c");e=t(!1),e.push([i.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),i.exports=e},d7cf:function(i,e,n){var t=n("c86c");e=t(!1),e.push([i.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),i.exports=e},d7f6:function(i,e,n){"use strict";n.r(e);var t=n("9608"),a=n("5191");for(var u in a)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return a[i]}))}(u);n("09d3");var o=n("828b"),r=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"13f73da8",null,!1,t["a"],void 0);e["default"]=r.exports},d819:function(i,e,n){"use strict";n.r(e);var t=n("1339"),a=n("2c77");for(var u in a)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return a[i]}))}(u);n("6e02");var o=n("828b"),r=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"42ced052",null,!1,t["a"],void 0);e["default"]=r.exports},ebc5:function(i,e,n){"use strict";n.r(e);var t=n("4096"),a=n("fb67");for(var u in a)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return a[i]}))}(u);n("48a7");var o=n("828b"),r=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"03b6d5de",null,!1,t["a"],void 0);e["default"]=r.exports},ed40:function(i,e,n){var t=n("c86c");e=t(!1),e.push([i.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-wrap[data-v-6f48037d]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-6f48037d]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-6f48037d]{position:relative;z-index:1;border-left:1px #d2d2d2 solid}',""]),i.exports=e},fb23:function(i,e,n){"use strict";n.r(e);var t=n("d354"),a=n("7cf9");for(var u in a)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return a[i]}))}(u);n("0621");var o=n("828b"),r=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"6f48037d",null,!1,t["a"],void 0);e["default"]=r.exports},fb67:function(i,e,n){"use strict";n.r(e);var t=n("d0a7"),a=n.n(t);for(var u in t)["default"].indexOf(u)<0&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=a.a},ffe6:function(i,e,n){var t=n("c86c");e=t(!1),e.push([i.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-grid-item[data-v-13f73da8]{height:100%;display:flex;cursor:pointer}.uni-grid-item__box[data-v-13f73da8]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-13f73da8]{position:relative;z-index:0;border-bottom:1px #d2d2d2 solid;border-right:1px #d2d2d2 solid}.uni-grid-item--border-top[data-v-13f73da8]{position:relative;border-top:1px #d2d2d2 solid;z-index:0}.uni-highlight[data-v-13f73da8]:active{background-color:#f1f1f1}',""]),i.exports=e}}]);