(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-book-detail"],{1666:function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c975");var a=i("a24b"),o=n(i("7d5b")),r=n(i("d37b")),s=n(i("2f12")),l={data:function(){return{book:{default:{weapons:[],artifacts:[]}},minorText:"",ImageUrl:{},texMap:{},info:{}}},onLoad:function(e){this.texMap=o.default,this.info=s.default.info,this.ImageUrl=r.default,this.book=a.bookData[s.default.cId],this.minorText=this.info.minor,t.log(this.info),e.react>0&&-1==this.info.minor.indexOf("精通")&&(this.minorText="精通、"+this.info.minor)},methods:{}};e.default=l}).call(this,i("5a52")["default"])},"190b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("2ca0");var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},"1e34":function(t,e,i){"use strict";i.r(e);var n=i("efb1"),a=i("67f9");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4efc8efe",null,!1,n["a"],void 0);e["default"]=s.exports},"24db":function(t,e,i){"use strict";i.r(e);var n=i("190b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2f12":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a434"),i("3c65"),i("14d9"),i("99af");var n={school:{},cId:"",selected:[],all:null,init:function(t,e){var i,n={},s={e:e[1],q:e[2]},u=t.mults,f=null!==(i=t.countTexts)&&void 0!==i?i:{};for(var c in t.items){var d,v,p,h,b=t.items[c];b.base=null!==(d=b.base)&&void 0!==d?d:["atk"],1==b.base.length&&b.base.push(c);var m,x=b.title,w=null!==(v=b.key)&&void 0!==v?v:c[0];if(!x)x=null!==(m=t.titles[w])&&void 0!==m?m:t.titles.a;var y,k,_=w.toUpperCase()+" ";if(x=_+x+"（",b.stage)x+=b.stage+"命"+(null!==(y=b.text)&&void 0!==y?y:"");else x+=null!==(k=b.text)&&void 0!==k?k:"技能";x+="）";var g="";2==b.type?(x+="护盾",g=x):1==b.type?(x+="治疗",g=x):(g=x,x+="暴击",g+="期望");var S=null!==(p=b.itemNote)&&void 0!==p?p:"";if(""==S){var M,U=null!==(M=s[w])&&void 0!==M?M:e[0];S+=o(u,b.base,U,b.type),b.plus&&(S+=" + "+o(u,b.plus,U)),b.countText&&(x+=" x "+b.countText),f[c]&&(x+=" x "+f[c])}var T=null!==(h=b.type)&&void 0!==h?h:0;n[c]=[x,S,g,T,!1]}for(var L=0;L<t.counts.length;L++)for(var C=t.counts[L],I=0==L?"a":"b",O=0;O<C;O++){var N=O+1,j=I+N,z=u[j];if(z&&!n[j]){var A=I.toLocaleUpperCase(),B="".concat(A," ").concat(t.titles.a,"（");B+="b"==I?u["aim"]?"蓄力":"重击":"".concat(j[1],"段"),B+="）";var P=z[[e[0]]],E=l(P);f[j]&&(E+=" x "+f[j]),n[j]=a(B,E)}}if(u.b11){var F="B ".concat(t.titles.a,"（重击x2）"),H=u["b11"][e[0]],R=l(H),$=u["b12"][e[0]];R+=" + "+l($),n["b11"]=a(F+t2,R)}if(u.b21){var D="B ".concat(t.titles.a,"（重击x3）"),G=u["b21"][e[0]],J=l(G),W=u["b22"][e[0]];J+=" + "+l(W);var q=u["b23"][e[0]];J+=" + "+l(q),n["b21"]=a(D,J)}if(u.b9){var Z="B ".concat(t.titles.a,"（终结）"),K=u["b9"][e[0]],Q=l(K);n["b9"]=a(Z,Q)}if(u.air1)for(L=1;L<4;L++){var V="air"+L,X="AIR ".concat(t.titles.a,"（");X+=r[L-1],X+="）";var Y=u[V][e[0]],tt=l(Y);n[V]=a(X,tt)}if(u.aim){var et="B ".concat(t.titles.a,"（瞄准）"),it=u["aim"][e[0]],nt=l(it);n["aim"]=a(et,nt)}this.all=n},addItem:function(t){this.selected.push(t)},delItem:function(t){this.selected.splice(t,1)},moveDown:function(t){if(t<this.selected.length-1){var e=this.selected.splice(t,1)[0];this.selected.splice(t+1,0,e)}},moveUp:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.splice(t-1,0,e)}},moveTop:function(t){if(t>0){var e=this.selected.splice(t,1)[0];this.selected.unshift(e)}}};function a(t,e){return[t+"暴击",e,t+"期望",0,!1]}function o(t,e,i,n){var a=e[1],o=e[0];if("string"==typeof a){var r=s(t,a,i),u=l(r,o),f=e[2];if(f){var c=s(t,f,i);if(n)u+=" + "+c;else{var d=e[3];d?u+=" + "+l(c*d,o):u=l(r*c,o)}}return u}return l(a,o)}e.default=n;var r=["下坠","低空","高空"];function s(t,e,i){if("string"==typeof e){var n=t[e];return n?n[i]:"错误！"}return e}function l(t,e){if(!t)return"";var i="";i+=(100*t).toFixed(1)+"%";var n="攻击";return e&&(n={atk:"攻击",life:"生命",em:"精通",def:"防御"}[e]),i+=n,i}},"32d0":function(t,e,i){var n=i("58dd");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5264f9cc",n,!0,{sourceMap:!1,shadowMode:!1})},"58dd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"67f9":function(t,e,i){"use strict";i.r(e);var n=i("1666"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"949d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},a=[]},a1f1:function(t,e,i){"use strict";var n=i("32d0"),a=i.n(n);a.a},bfb4:function(t,e,i){"use strict";i.r(e);var n=i("949d"),a=i("24db");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a1f1");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],void 0);e["default"]=s.exports},efb1:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSection:i("89d3").default,uniListItem:i("6e18").default,uniLink:i("bfb4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.info.major?i("v-uni-view",[i("uni-section",{attrs:{type:"line",title:"流派说明"}}),t.info.notes?i("v-uni-view",t._l(t.info.notes,(function(t,e){return i("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:t}})})),1):t._e(),i("uni-list-item",{attrs:{title:"主词条",rightText:t.info.major}}),i("uni-list-item",{attrs:{title:"副词条",rightText:t.minorText}}),i("v-uni-view",[i("uni-section",{attrs:{title:"圣遗物推荐",type:"line"}},t._l(t.info.artifacts,(function(e,n){return t.texMap[e]?i("uni-list-item",{key:n,attrs:{title:t.texMap[e],clickable:!0,thumb:t.ImageUrl[e],"thumb-size":"lg",note:t.book.aNotes?t.book.aNotes[e]:""}}):t._e()})),1),i("uni-section",{attrs:{title:"武器推荐",type:"line"}},t._l(t.info.weapons,(function(e,n){return t.texMap[e]?i("uni-list-item",{key:n,attrs:{title:t.texMap[e],clickable:!0,thumb:t.ImageUrl[e],"thumb-size":"lg",note:t.book.wNotes?t.book.wNotes[e]:""}}):t._e()})),1)],1),i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"1、角色圣遗物和武器推荐来自 NGA@一只不知名的菜鸡"},scopedSlots:t._u([{key:"footer",fn:function(){return[i("uni-link",{attrs:{color:"#007AFF",href:"https://nga.178.com/read.php?tid=27859119",text:"原帖地址"}})]},proxy:!0}],null,!1,3666257861)}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"2、简易攻略维护人员 NGA@ZhuMa12345678"}})],1):t.info.text?i("v-uni-view",[i("uni-section",{attrs:{title:"角色说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:t.info.text}})],1):i("v-uni-view",[i("uni-section",{attrs:{title:"其他说明",type:"line"}}),i("uni-list-item",{staticClass:"item-space",attrs:{title:"该角色的流派的武器/圣遗物推荐等相关内容正在更新中..."}})],1)],1)},o=[]}}]);