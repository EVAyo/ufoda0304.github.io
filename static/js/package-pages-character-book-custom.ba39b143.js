(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book-custom"],{"0a6d":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("dd2b"),i("3efd"),i("aa9c"),i("c223");var n={school:{},cId:"",selected:[],all:null,init:function(t,e){var i,n={},l={e:e[1],q:e[2]},r=t.mults,u=null!==(i=t.countTexts)&&void 0!==i?i:{};for(var d in t.items){var f,v,m,p,h=t.items[d];h.base=null!==(f=h.base)&&void 0!==f?f:["atk"],1==h.base.length&&h.base.push(d);var b,x=h.title,y=null!==(v=h.key)&&void 0!==v?v:d[0];if(!x)x=null!==(b=t.titles[y])&&void 0!==b?b:t.titles.a;var _,g,k=y.toUpperCase()+" ";if(x=k+x+"（",h.stage)x+=h.stage+"命"+(null!==(_=h.text)&&void 0!==_?_:"");else x+=null!==(g=h.text)&&void 0!==g?g:"技能";x+="）";var w="";2==h.type?(x+="护盾",w=x):1==h.type?(x+="治疗",w=x):(w=x,x+="暴击",w+="期望");var O=null!==(m=h.itemNote)&&void 0!==m?m:"";if(""==O){var S,C=null!==(S=l[y])&&void 0!==S?S:e[0];O+=a(r,h.base,C,h.type),h.plus&&(O+=" + "+a(r,h.plus,C)),h.countText&&(O+=" x "+h.countText),u[d]&&(O+=" x "+u[d])}var T=null!==(p=h.type)&&void 0!==p?p:0;n[d]=[x,O,w,T,!1]}for(var N=0;N<t.counts.length;N++)for(var j=t.counts[N],B=0==N?"a":"b",J=0;J<j;J++){var I=J+1,$=B+I,z=r[$];if(z&&!n[$]){var M=B.toLocaleUpperCase(),U="".concat(M," ").concat(t.titles.a,"（");U+="b"==B?r["aim"]?"蓄力":"重击":"".concat($[1],"段"),U+="）";var E=z[[e[0]]],L=c(E);u[$]&&(L+=" x "+u[$]),n[$]=o(U,L)}}if(r.b11){var K="B ".concat(t.titles.a,"（重击x2）"),P=r["b11"][e[0]],q=c(P),A=r["b12"][e[0]];q+=" + "+c(A),n["b11"]=o(K,q)}if(r.b21){var F="B ".concat(t.titles.a,"（重击x3）"),D=r["b21"][e[0]],R=c(D),G=r["b22"][e[0]];R+=" + "+c(G);var H=r["b23"][e[0]];R+=" + "+c(H),n["b21"]=o(F,R)}if(r.b9){var Q="B ".concat(t.titles.a,"（终结）"),V=r["b9"][e[0]],W=c(V);n["b9"]=o(Q,W)}if(r.air1)for(N=1;N<4;N++){var X="air"+N,Y="AIR ".concat(t.titles.a,"（");Y+=s[N-1],Y+="）";var Z=r[X][e[0]],tt=c(Z);n[X]=o(Y,tt)}if(r.aim){var et="B ".concat(t.titles.a,"（瞄准）"),it=r["aim"][e[0]],nt=c(it);n["aim"]=o(et,nt)}this.all=n},addItem:function(t){this.selected.push(t)},delItem:function(t){this.selected.splice(t,1)},moveDown:function(t){if(t<this.selected.length-1){var e=this.selected.splice(t,1)[0];this.selected.splice(t+1,0,e)}},moveUp:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.splice(t-1,0,e)}},moveTop:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.unshift(e)}}};function o(t,e){return[t+"暴击",e,t+"期望",0,!1]}function a(t,e,i,n){var o=e[1],a=e[0];if("string"==typeof o){var s=l(t,o,i),r=c(s,a),u=e[2];if(u){var d=l(t,u,i);if(n)r+=" + "+d;else{var f=e[3];f?r+=" + "+c(d*f,a):r=c(s*d,a)}}return r}return c(o,a)}e.default=n;var s=["下坠","低空","高空"];function l(t,e,i){if("string"==typeof e){var n=t[e];return n?n[i]:"错误！"}return e}function c(t,e){if(!t)return"";var i="";i+=(100*t).toFixed(1)+"%";var n="攻击";return e&&(n={atk:"攻击",life:"生命",em:"精通",def:"防御"}[e]),i+=n,i}},1339:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("62d1").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showIcon?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:t.icon}}):t._e()],1),i("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},a=[]},"13d5":function(t,e,i){"use strict";i.r(e);var n=i("3ad1"),o=i("f3ef");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i("828b"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"b3eb125e",null,!1,n["a"],void 0);e["default"]=l.exports},"2c77":function(t,e,i){"use strict";i.r(e);var n=i("7341"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"39b8":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i){var n,s;if(!t.skills)return;var l=uni.getStorageSync("favObj"),c=null!==(n=l[t.name].selected)&&void 0!==n?n:JSON.parse(JSON.stringify(t.skills.selected));if(i.school&&i.school.core){var r=c.indexOf(i.school.core);r>-1&&c.splice(r,1),c.unshift(i.school.core)}var u=e.cdKeys?JSON.parse(JSON.stringify(e.cdKeys)):[];if(i.school.custom&&i.school.custom.open){var d,f=(0,o.default)(i.school.custom.items);try{for(f.s();!(d=f.n()).done;){var v=d.value,m=u.indexOf(v.key);-1==m&&u.push(v.key)}}catch(B){f.e(B)}finally{f.f()}}for(var p=JSON.parse(JSON.stringify(t.skills)),h=null!==(s=p.countTexts)&&void 0!==s?s:{},b=[],x=0;x<c.length;x++){var y=c[x],_=!1;if(u){var g=u.indexOf(y);g>-1&&(_=!0,u.splice(g,1))}var k=a(p,y,_,!0);k&&b.push(k)}if(u){var w,O=(0,o.default)(u);try{for(O.s();!(w=O.n()).done;){var S=w.value,C=a(p,S,!0,!1);C&&b.push(C)}}catch(B){O.e(B)}finally{O.f()}}for(var T=0,N=b;T<N.length;T++){var j=N[T];h&&h[j.id]&&(j.countText=h[j.id]),-1==["e","q"].indexOf(j.key)&&("book"==t.weapon||j.element||(j.element="physical","bow"==t.weapon&&"b"==j.key&&(j.element=t.element))),j.element||(j.element=t.element)}return b};var o=n(i("3471"));function a(t,e,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t.items[e];if(o){var a,s;o.base=null!==(a=o.base)&&void 0!==a?a:["atk"],1==o.base.length&&o.base.push(e);var l,c,r=o.title,u=null!==(s=o.key)&&void 0!==s?s:e[0];if(!r)r=null!==(l=t.titles[u])&&void 0!==l?l:t.titles.a;if(r+="（",o.stage)r+=o.stage+"命";else r+=null!==(c=o.text)&&void 0!==c?c:"技能";return r+="）",o.title=r,o.mult&&(o.base=void 0,o[o.mult[0]+"Level"]=o.mult[1]),o.skip&&(o.base=void 0),o.key||(o.key=u),o.id=e,i&&(o.cdKey=e),n||(o.cr=!1),o}var d=e[0],f="".concat(t.titles.a,"（");"aim"==e?f+="瞄准":"i"==e[1]?(d="air",f+=["下坠","低空","高空"][e[3]-1]):f+="b"==d?"b9"==e?"终结":"重击":"".concat(e[1],"段");var v={title:f,key:d,base:["atk",e],id:e};return"b11"==e&&(v.plus=["atk","b12"],v.title+="x2"),"b21"==e&&(v.plus=["atk","b22","b23"],v.title+="x3"),v.title+="）",i&&(v.cdKey=e),n||(v.cr=!1),v}i("d4b5"),i("5ef2"),i("dd2b"),i("3efd"),i("aa9c")},"3ad1":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("d819").default,uniListItem:i("5d9b").default,uniNumberBox:i("4524").default,uniList:i("4ec5").default,uniIcons:i("62d1").default,buttonBarBottom:i("f163").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-section",{attrs:{title:"已设置",type:"line","right-text":t.note}}),t.m.school.custom.boom?i("uni-list-item",{attrs:{title:t.m.boom.title},scopedSlots:t._u([{key:"footer",fn:function(){return[i("uni-number-box",{attrs:{min:0,step:1,max:99},model:{value:t.m.school.custom.boom[1],callback:function(e){t.$set(t.m.school.custom.boom,1,e)},expression:"m.school.custom.boom[1]"}})]},proxy:!0}],null,!1,2541530596)}):t._e(),t.items[0]?t._e():i("v-uni-view",[i("uni-list-item",{attrs:{title:"没有技能",note:"从下面的列表选择"}})],1),t._l(t.items,(function(e,n){return i("v-uni-view",{key:n},[i("uni-list-item",{attrs:{title:e.key+" - "+t.m.all[e.key][2]},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column"}},[i("uni-number-box",{attrs:{min:0,step:1,max:99},model:{value:e.counts[0],callback:function(i){t.$set(e.counts,0,i)},expression:"item.counts[0]"}}),t.m.school.reaction>0?i("uni-number-box",{staticStyle:{"margin-top":"10px"},attrs:{min:0,step:1,max:99},model:{value:e.counts[1],callback:function(i){t.$set(e.counts,1,i)},expression:"item.counts[1]"}}):t._e()],1)]},proxy:!0}],null,!0)})],1)})),i("uni-section",{attrs:{title:"可选技能",type:"line"}}),i("uni-list",t._l(t.m.all,(function(e,n){return i("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:!e[4]&&0==e[3],expression:"!t1[4] && t1[3]==0"}],key:n,attrs:{title:n+" - "+e[2],note:e[1],clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addOption(n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[i("v-uni-button",{staticClass:"uni-group-item",attrs:{size:"mini"}},[i("uni-icons",{attrs:{type:"plusempty"}})],1)]},proxy:!0}],null,!0)})})),1),i("button-bar-bottom",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],2)},a=[]},"4bd3":function(t,e,i){var n=i("d7cf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("967d").default;o("2a02c826",n,!0,{sourceMap:!1,shadowMode:!1})},"56ca":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d4b5"),i("aa9c");var o=n(i("3471")),a=(n(i("39b8")),n(i("0a6d"))),s={data:function(){return{note:"直伤",m:{},index:{},isAdd:!1,boomCount:0,items:[]}},onUnload:function(){},onLoad:function(){this.m=a.default,this.m.school.reaction>0&&(this.note+="/ 增幅"),this.note+="次数",a.default.boom&&!this.m.school.custom.boom&&(this.m.school.custom.boom=[a.default.boom.boom,0]);var t=this.m.school.custom.items;if(t[0]&&t[0].counts){var e,i=(0,o.default)(t);try{for(i.s();!(e=i.n()).done;){var n=e.value;this.m.all[n.key][4]=!0}}catch(s){i.e(s)}finally{i.f()}}else t=[];this.items=JSON.parse(JSON.stringify(t))},methods:{getNote:function(t){var e=t.key;return e.toUpperCase()+" | "+this.note},addOption:function(t){var e={key:t,counts:[1,0],note:"1次"};this.items.push(e),this.m.all[t][4]=!0},getOption:function(t){uni.navigateTo({url:"./option?key="+t})},goOption:function(t){uni.navigateTo({url:"./option?index="+t})},save:function(){var t,e="",i=0,n=[],a=(0,o.default)(this.items);try{for(a.s();!(t=a.n()).done;){var s=t.value,l=s.key;s.counts[0]+s.counts[1]>0?(e&&(e+=" +"),e+=l+"(",i+=1,e+=s.counts[0],this.m.school.reaction>0&&s.counts[1]>0&&(i+=1,e+="/"+s.counts[1]),e+=") ",n.push(s)):this.m.all[s.key][4]=!1}}catch(r){a.e(r)}finally{a.f()}if(this.m.school.custom.boom&&this.m.school.custom.boom[1]&&(e+=" +"+this.m.school.custom.boom[1]+this.m.boom.short),i>0){var c=["","蒸发","融化","超激化","蔓激化"][this.m.school.reaction];c&&(e=c+" | "+e),this.m.school.custom.note=e,this.m.school.custom.open=!0,this.m.school.core=null,this.m.school.custom.items=n}else this.m.school.custom.open=!1,this.m.school.custom.note="未设置...",this.m.school.core=this.m.selected[0];uni.navigateBack({delta:2})}}};e.default=s},"6e02":function(t,e,i){"use strict";var n=i("4bd3"),o=i.n(n);o.a},7341:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{icon:{type:String,default:"arrowright"},showIcon:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},d7cf:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-42ced052]{background-color:#fff}.uni-list-item__content[data-v-42ced052]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-42ced052]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-42ced052]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-42ced052]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-42ced052]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-42ced052]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-42ced052]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-42ced052]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-42ced052]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-42ced052]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-42ced052]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-42ced052]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-42ced052]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-42ced052]{font-size:13px;color:#999}',""]),t.exports=e},d819:function(t,e,i){"use strict";i.r(e);var n=i("1339"),o=i("2c77");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6e02");var s=i("828b"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"42ced052",null,!1,n["a"],void 0);e["default"]=l.exports},f3ef:function(t,e,i){"use strict";i.r(e);var n=i("56ca"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a}}]);