(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["corePages-team-detail"],{"0ac7":function(e,t,i){var a=i("6845");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("7378ec8e",a,!0,{sourceMap:!1,shadowMode:!1})},1148:function(e,t,i){"use strict";var a=i("a691"),r=i("1d80");e.exports="".repeat||function(e){var t=String(r(this)),i="",n=a(e);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(i+=t);return i}},"1e89":function(e,t,i){"use strict";i.r(t);var a=i("d9e1"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=r.a},"222a":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("c975"),i("e25e"),i("38cf"),Object.defineProperty(t,"__esModule",{value:!0}),t.getTeamData=d;var r=a(i("5530")),n=a(i("b85c")),s=i("5db7"),o=i("a8b3"),c=i("2b61"),u=i("b209"),l=i("52e0"),f=["无","蒸发 - ","融化 - "];function d(t,i){var a=JSON.parse(JSON.stringify(t)),d={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0},h=[],v={},m=[];for(var g in a.members){var p=a.members[g],b=(0,c.getPreset)(g,i);b.cNote?(p.title=b.cNote,p.note=b.eNote,p.title2=b.score,p.score=0,p.element=b.element,v[b.cId]=b,d[b.element]+=1):m.push(b)}if(m.length>0)return e.log("needInit"),{needInit:!0,initPresets:m};var x={};for(var w in v){var k=v[w];if(k.effects){var y,T=(0,n.default)(k.effects);try{for(T.s();!(y=T.n()).done;){var I=y.value;x[I.id]=I}}catch(ue){T.e(ue)}finally{T.f()}}}d.fire>1&&h.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"}),d.ice>1&&(x.shuangbing={id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),d.rock>1&&h.push({id:"shuangyan",title:"共鸣 - 双岩",text:"伤害提升15%,目标岩元素抗性降低15%"}),d.ice>0&&d.thunder>0&&(x.chaodao={id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),a.score=0;var S,C=(0,n.default)(a.results);try{for(C.s();!(S=C.n()).done;){var D=S.value;D.score=0;var P,$=v[D.id],_=o.characterDamage[D.id],N=(0,n.default)(D.actions);try{for(N.s();!(P=N.n()).done;){var j=P.value,F=[],L=[];if(j.buffs){var B,O=(0,n.default)(j.buffs);try{for(O.s();!(B=O.n()).done;){var q=B.value,z=x[q];z&&F.push(z)}}catch(ue){O.e(ue)}finally{O.f()}}var E=(0,r.default)({},$);j.type?(E.type=j.type,j.text=f[j.type]):(E.type=-1,j.text=""),E.tIds=a.cIds;var A=void 0;if(j.aConfigs&&!$.aSets){var J=j.aConfigs[$.aIds[0]];J&&(A=J.indexs)}var M=void 0;if(j.wConfigs){var R=j.wConfigs[$.wId];R&&(M=R.indexs)}var U=(0,s.buildTeamAttribute)(E,h,F,M,A);U.isTeam=!0,U.buffTexts&&(L=U.buffTexts),U.wBuff&&L.unshift(U.wBuff),U.aBuff&&L.unshift(U.aBuff);var W=j.skills[0][0];if("u"==W){var G=(0,l.reactionDamage)(U,j.jType);j.score=G*j.repeat[0],j.formula=U.formula+" * "+j.repeat[0]}else{var H=0,K=0,Q=E["cSkills"];K="q"==W?Q[2]:"e"==W?Q[1]:Q[0];for(var V=0;V<j.skills.length;V++){var X=j.skills[V],Y=a.members[D.id],Z=Y.skill[X][K];j.repeat?H+=Z*j.repeat[V]:H+=Z;var ee=j.skillFix;if(ee&&E.cStage>=ee.stage){var te=ee.skills.indexOf(X);te>-1&&(H+=Z*ee.repeat[te]),j.extraNote=ee.extraNote}}U.skills.push({element:j.element,title:j.title,key:W,level:H}),_.get(U),j.score=U.score,j.formula=U.formula,j.extraNote&&L.unshift(j.extraNote)}L.length>0?j.note=L.join(" | "):j.note="无";var ie=parseInt(j.score);D.score+=ie,a.members[D.id].score+=ie,j.text+=(1*j.score).toFixed(0)}}catch(ue){N.e(ue)}finally{N.f()}D.text=D.score.toFixed(0),a.score+=D.score}}catch(ue){C.e(ue)}finally{C.f()}for(var ae in a.members){var re=a.members[ae],ne=(re.score/a.score*100).toFixed(0)+"%";re.text=re.score+" / "+ne,re.dps=(re.score/a.time).toFixed(0)+" / S"}a.sText=a.score.toFixed(0);var se=a.score/a.time;a.dps=se.toFixed(0)+" / S";var oe=(se/5e4*100).toFixed(0),ce=(0,u.getColor)(oe);return a.result.color=ce,a.result.score=oe,a}}).call(this,i("5a52")["default"])},3125:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={uniCard:i("3d92").default,uniSection:i("89d3").default,uniListItem:i("6e18").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.needInit?e._l(e.initPresets,(function(t,a){return i("uni-card",{key:a,attrs:{margin:e.margin,padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:e.charactersData[t.cId].avatar,title:"该角色未初始化，无法进行计算..",rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toInit(t)}}})],1)})):i("v-uni-view",[i("uni-card",{attrs:{padding:"0",spacing:"0",margin:e.margin}},[i("uni-section",{attrs:{title:"伤害分析",type:"line",rightText:e.team.dps}},[i("uni-list-item",{attrs:{showBadge:!0,title:"总伤害",rightText:e.team.sText+" / 100%",clickable:!0},scopedSlots:e._u([{key:"header",fn:function(){return[i("v-uni-view",{staticClass:"cu-avatar",style:{backgroundColor:e.team.result.color}},[e._v(e._s(e.team.result.score))])]},proxy:!0}],null,!1,1238893863)}),e._l(e.members,(function(t,a){return i("uni-list-item",{key:a,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.charactersData[t.id].avatar,title:t.title2,rightText:t.text},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toDetail(t.id)}}})})),e.notices.length>0?i("v-uni-view",e._l(e.notices,(function(e,t){return i("uni-list-item",{key:e.title,attrs:{title:e.title}})})),1):i("uni-list-item",{attrs:{title:"充能等配置符合阵容要求.."}})],2)],1),i("uni-card",{key:e.index,attrs:{padding:"0",spacing:"0",margin:e.margin}},[i("uni-section",{attrs:{title:"技能轴",type:"line",rightText:e.team.from}}),e._l(e.team.results,(function(t,a){return i("uni-list-item",{key:t.title,attrs:{clickable:!0,"thumb-size":"lg",thumb:e.charactersData[t.id].avatar,title:t.title,note:t.note,rightText:t.text},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAction(a)}}})}))],2)],1),i("v-uni-view",{staticStyle:{height:"60px"}})],2)},n=[]},"38cf":function(e,t,i){var a=i("23e7"),r=i("1148");a({target:"String",proto:!0},{repeat:r})},6845:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".js[data-v-39b82ecf]{width:25%;background-color:#6a63ab}.js2[data-v-39b82ecf]{width:5%;background-color:#6a63ab}.skills[data-v-39b82ecf]{white-space:nowrap;\n\t/* overflow: ; */overflow:visible;text-overflow:ellipsis;font-size:14px;text-align:left;padding-left:5px;line-height:40px;color:#999}.swiper-item-bg[data-v-39b82ecf]{color:#7f858a;background-color:#f5f5f5}.example-body[data-v-39b82ecf]{\ndisplay:flex;\nflex-direction:row;justify-content:flex-start;align-items:flex-end;flex-wrap:wrap}.tag-view[data-v-39b82ecf]{margin-right:10px}.goods-carts[data-v-39b82ecf]{\ndisplay:flex;\nflex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:1000}",""]),e.exports=t},"92c5":function(e,t,i){"use strict";var a=i("0ac7"),r=i.n(a);r.a},d9e1:function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(i("b85c")),n=a(i("5530")),s=i("26cb"),o=i("7d2b"),c=i("222a"),u=i("4432"),l=i("2b61"),f={data:function(){return{colors:{fire:"#fadbd9",ice:"#d2f1f0",rock:"#fef2ced2",water:"#cce6ff",thunder:"#e1d7f0",wind:"#d7f0dbff"},margin:"0px 15px 30px",notices:[],needInit:!1,initPresets:[],charactersData:{},formulaText:"基础区 * 增伤 * 期望 * 防御 * 反应 * 抗性 * 倍率",color:"rgb(211,159,81)",score:"",members:[],showSequence:!1,switchChecked:[!1,!1,!1,!1],switchChecked2:[!1,!1,!1,!1],presets:[],team:{},index:0,showRecharges:!1,showTeamBuffs:[],value:["0"],preset:{},options:[{icon:"star",text:"收藏"},{icon:"color",text:" 预设",info:0},{icon:"vip",text:"词条",info:0},{icon:"fire",text:"数据",info:0},{icon:"staff",text:"队友",info:0}]}},computed:(0,n.default)({},(0,s.mapState)(["version","character"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(e){var t=o.Teams[e.teamId];if(t){this.Team=t,this.charactersData=u.charactersData;var i=this;uni.$on("presetChanged",(function(){i.$store.commit("recoverPreset"),i.initData()})),i.initData()}else uni.reLaunch({url:"/pages/team/team"})},methods:{initData:function(){if(uni.showLoading({title:"正在计算,请稍后!"}),this.members=[],this.team=(0,c.getTeamData)(this.Team,this.version),this.team.needInit)return this.needInit=this.team.needInit,this.initPresets=this.team.initPresets,void uni.hideLoading();for(var e in this.needInit=!1,this.team.members){var t=this.team.members[e],i=uni.getStorageSync(t.id);this.notices=[];var a,n=(0,r.default)(t.requires);try{for(n.s();!(a=n.n()).done;){var s=a.value;s.wId&&s.wId!=i.wId||s.cStage&&s.cStage>i.cStage?this.notices.push(s):s.recharge&&s.recharge>i.recharge&&(s.title+="   (目前:"+100*i.recharge+"%)",this.notices.push(s))}}catch(l){n.e(l)}finally{n.f()}this.members.push(t)}this.members.sort((function(e,t){return t.score-e.score}));for(var o=0;o<this.members.length;o++){var u=this.members[o];u.width=0==o?90:u.score/this.members[0].score*90}uni.hideLoading(),this.$store.commit("setTeam",this.team),uni.setNavigationBarTitle({title:this.team.sTitle})},onClick:function(e){switch(e.index){case 0:uni.navigateTo({url:"config/actions"});break;default:break}},switchChange2:function(e){var t=this.switchChecked2[e];this.switchChecked2[e]=!t||!t,this.$forceUpdate()},switchChange:function(e){var t=this.switchChecked[e];this.switchChecked[e]=!t||!t,this.$forceUpdate()},setIndex:function(e){this.index=e},switchSequence:function(e){this.showSequence=e.value},switchRecharges:function(e){this.showRecharges=e.value},change:function(t){e.log(t)},toInit:function(e){var t=this;uni.showLoading({title:"初始化中..",mask:!0}),setTimeout((function(){(0,l.startCalculate)(e,this.version),t.$store.commit("savePreset",e),t.initData(),uni.hideLoading()}),3e3)},toAction:function(e){uni.navigateTo({url:"./action?index="+e})},toDetail:function(e){var t=uni.getStorageSync(e);this.$store.commit("backupPreset"),this.$store.commit("setPreset",t),uni.navigateTo({url:"../character/property?save=true"})}}};t.default=f}).call(this,i("5a52")["default"])},eb5a:function(e,t,i){"use strict";i.r(t);var a=i("3125"),r=i("1e89");for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);i("92c5");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"39b82ecf",null,!1,a["a"],s);t["default"]=c.exports}}]);