(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book-option"],{3705:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},"3c05":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=i},4172:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a434"),n("3c65"),n("14d9"),n("99af");var i={school:{},cId:"",selected:[],all:null,init:function(t,e){var n,i={},r={e:e[1],q:e[2]},u=t.mults,s=null!==(n=t.countTexts)&&void 0!==n?n:{};for(var d in t.items){var f,v,p,h,x=t.items[d];x.base=null!==(f=x.base)&&void 0!==f?f:["atk"],1==x.base.length&&x.base.push(d);var b,g=x.title,m=null!==(v=x.key)&&void 0!==v?v:d[0];if(!g)g=null!==(b=t.titles[m])&&void 0!==b?b:t.titles.a;var _,y,w=m.toUpperCase()+" ";if(g=w+g+"（",x.stage)g+=x.stage+"命"+(null!==(_=x.text)&&void 0!==_?_:"");else g+=null!==(y=x.text)&&void 0!==y?y:"技能";g+="）";var k="";2==x.type?(g+="护盾",k=g):1==x.type?(g+="治疗",k=g):(k=g,g+="暴击",k+="期望");var C=null!==(p=x.itemNote)&&void 0!==p?p:"";if(""==C){var O,S=null!==(O=r[m])&&void 0!==O?O:e[0];C+=a(u,x.base,S,x.type),x.plus&&(C+=" + "+a(u,x.plus,S)),x.countText&&(C+=" x "+x.countText),s[d]&&(C+=" x "+s[d])}var T=null!==(h=x.type)&&void 0!==h?h:0;i[d]=[g,C,k,T,!1]}for(var j=0;j<t.counts.length;j++)for(var B=t.counts[j],$=0==j?"a":"b",M=0;M<B;M++){var z=M+1,E=$+z,I=u[E];if(I&&!i[E]){var U=$.toLocaleUpperCase(),P="".concat(U," ").concat(t.titles.a,"（");P+="b"==$?u["aim"]?"蓄力":"重击":"".concat(E[1],"段"),P+="）";var L=I[[e[0]]],F=l(L);s[E]&&(F+=" x "+s[E]),i[E]=o(P,F)}}if(u.b11){var J="B ".concat(t.titles.a,"（重击x2）"),N=u["b11"][e[0]],q=l(N),A=u["b12"][e[0]];q+=" + "+l(A),i["b11"]=o(J,q)}if(u.b21){var D="B ".concat(t.titles.a,"（重击x3）"),R=u["b21"][e[0]],G=l(R),H=u["b22"][e[0]];G+=" + "+l(H);var K=u["b23"][e[0]];G+=" + "+l(K),i["b21"]=o(D,G)}if(u.b9){var Q="B ".concat(t.titles.a,"（终结）"),V=u["b9"][e[0]],W=l(V);i["b9"]=o(Q,W)}if(u.air1)for(j=1;j<4;j++){var X="air"+j,Y="AIR ".concat(t.titles.a,"（");Y+=c[j-1],Y+="）";var Z=u[X][e[0]],tt=l(Z);i[X]=o(Y,tt)}if(u.aim){var et="B ".concat(t.titles.a,"（瞄准）"),nt=u["aim"][e[0]],it=l(nt);i["aim"]=o(et,it)}this.all=i},addItem:function(t){this.selected.push(t)},delItem:function(t){this.selected.splice(t,1)},moveDown:function(t){if(t<this.selected.length-1){var e=this.selected.splice(t,1)[0];this.selected.splice(t+1,0,e)}},moveUp:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.splice(t-1,0,e)}},moveTop:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.unshift(e)}}};function o(t,e){return[t+"暴击",e,t+"期望",0,!1]}function a(t,e,n,i){var o=e[1],a=e[0];if("string"==typeof o){var c=r(t,o,n),u=l(c,a),s=e[2];if(s){var d=r(t,s,n);if(i)u+=" + "+d;else{var f=e[3];f?u+=" + "+l(d*f,a):u=l(c*d,a)}}return u}return l(o,a)}e.default=i;var c=["下坠","低空","高空"];function r(t,e,n){if("string"==typeof e){var i=t[e];return i?i[n]:"错误！"}return e}function l(t,e){if(!t)return"";var n="";n+=(100*t).toFixed(1)+"%";var i="攻击";return e&&(i={atk:"攻击",life:"生命",em:"精通",def:"防御"}[e]),n+=i,n}},4687:function(t,e,n){"use strict";n.r(e);var i=n("a6ad"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},5268:function(t,e,n){"use strict";var i=n("a289"),o=n.n(i);o.a},"5c0f":function(t,e,n){"use strict";var i=n("9f46"),o=n.n(i);o.a},"7a02":function(t,e,n){"use strict";n.r(e);var i=n("3c05"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},8545:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"8acc":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("426f").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?n("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?n("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?n("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?n("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),n("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},"8dbb":function(t,e,n){"use strict";n.r(e);var i=n("8acc"),o=n("ab08");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5c0f");var c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"42ced052",null,!1,i["a"],void 0);e["default"]=r.exports},"93b2":function(t,e,n){"use strict";n.r(e);var i=n("c68c"),o=n("4687");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"05d7c0f2",null,!1,i["a"],void 0);e["default"]=r.exports},"9dea":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"9f46":function(t,e,n){var i=n("3705");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2a02c826",i,!0,{sourceMap:!1,shadowMode:!1})},a289:function(t,e,n){var i=n("9dea");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1e84cfaa",i,!0,{sourceMap:!1,shadowMode:!1})},a6ad:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9"),n("a434"),n("3c65");var o=i(n("4172")),a={data:function(){return{text:"保存",index:null,id:0,counts:[],option:[],manage:{},del:!0}},onLoad:function(e){if(this.manage=o.default,t.log(e),e.key)this.text="添加",this.del=!1,this.option={key:e.key,counts:[1,0],note:"1次"};else{var n=e.index;this.index=n,this.option=o.default.school.custom.items[n]}uni.setNavigationBarTitle({title:o.default.all[this.option.key][0]});for(var i=0;i<10;i++){var a=i+"次";this.counts.push(a)}},methods:{select:function(t,e){this.option.counts[t]=e,this.del=!1},remove:function(){o.default.school.custom.items.splice(this.index,1),o.default.all[this.option.key][4]=!1,uni.navigateBack({delta:1})},confirm:function(){var e=this.option,n="";o.default.school.reaction>0?n="（"+e.counts[1]+"增幅）":e.counts[1]=0,e.note=e.counts[0]+e.counts[1]+"次"+n,this.index||(o.default.school.custom.items.unshift(e),o.default.all[e.key][4]=!0,t.log("新建")),uni.navigateBack({delta:1})}}};e.default=a}).call(this,n("5a52")["default"])},ab08:function(t,e,n){"use strict";n.r(e);var i=n("8545"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c2fb:function(t,e,n){"use strict";n.r(e);var i=n("c5e7"),o=n("7a02");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5268");var c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"d83b913c",null,!1,i["a"],void 0);e["default"]=r.exports},c5e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{height:"100px"}}),n("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),n("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},o=[]},c68c:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniSection:n("8dbb").default,uniListItem:n("0fd6").default,buttonBarBottom:n("c2fb").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"次数",type:"line"}}),n("v-uni-radio-group",t._l(t.counts,(function(e,i){return n("uni-list-item",{key:i,attrs:{title:e,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(0,i)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("v-uni-radio",{attrs:{color:"#ad9388",checked:i==t.option.counts[0]}})]},proxy:!0}],null,!0)})})),1),t.manage.school.reaction>0?n("v-uni-view",[n("uni-section",{attrs:{title:"增幅次数",type:"line"}}),n("v-uni-radio-group",t._l(t.counts,(function(e,i){return n("uni-list-item",{key:i,attrs:{title:e,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(1,i)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("v-uni-radio",{attrs:{color:"#ad9388",checked:i==t.option.counts[1]}})]},proxy:!0}],null,!0)})})),1)],1):t._e(),t.del?n("button-bar-bottom",{attrs:{text:"删除",color:"#d71345"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remove()}}}):n("button-bar-bottom",{attrs:{text:t.text},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm()}}})],1)},a=[]}}]);