(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package-pages-character-effect","package-pages-character-book-custom~package-pages-character-compare-index"],{1291:function(t,e,i){"use strict";i.r(e);var a=i("6b9d"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1c1d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-numbox"},[i("v-uni-view",{staticClass:"uni-numbox__minus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled},style:{color:t.color}},[t._v("-")])],1),i("v-uni-input",{staticClass:"uni-numbox__value",style:{background:t.background,color:t.color},attrs:{disabled:t.disabled,type:"number"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),i("v-uni-view",{staticClass:"uni-numbox__plus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled},style:{color:t.color}},[t._v("+")])],1)],1)},n=[]},"1dfd":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"37a0":function(t,e,i){var a=i("5cb6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2b89ff38",a,!0,{sourceMap:!1,shadowMode:!1})},3974:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},modelValue:function(t){this.inputValue=+t}},created:function(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),i=this.inputValue*e,a=this.step*e;if("minus"===t){if(i-=a,i<this.min*e)return;i>this.max*e&&(i=this.max*e)}if("plus"===t){if(i+=a,i>this.max*e)return;i<this.min*e&&(i=this.min*e)}this.inputValue=(i/e).toFixed(String(e).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,String(this.step).split(".")[1].length)),t},_onBlur:function(t){this.$emit("blur",t);var e=t.detail.value;if(e){e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min);var i=this._getDecimalScale();this.inputValue=e.toFixed(String(i).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue)}},_onFocus:function(t){this.$emit("focus",t)}}};e.default=a},"3cef":function(t,e,i){"use strict";i.r(e);var a=i("90b7"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"3d37":function(t,e,i){"use strict";i.r(e);var a=i("444b"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"3d92":function(t,e,i){"use strict";i.r(e);var a=i("6bb3"),n=i("689e");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("fce2");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"44c0d81e",null,!1,a["a"],void 0);e["default"]=o.exports},"444b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=a},"50e8":function(t,e,i){"use strict";var a=i("37a0"),n=i.n(a);n.a},"526e":function(t,e,i){var a=i("a5c4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("13158881",a,!0,{sourceMap:!1,shadowMode:!1})},"5cb6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-numbox[data-v-2a85ab7d]{display:flex;flex-direction:row}.uni-numbox-btns[data-v-2a85ab7d]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 8px;background-color:#f5f5f5;cursor:pointer}.uni-numbox__value[data-v-2a85ab7d]{margin:0 2px;background-color:#f5f5f5;width:40px;height:26px;text-align:center;font-size:14px;border-left-width:0;border-right-width:0;color:#333}.uni-numbox__minus[data-v-2a85ab7d]{border-top-left-radius:2px;border-bottom-left-radius:2px}.uni-numbox__plus[data-v-2a85ab7d]{border-top-right-radius:2px;border-bottom-right-radius:2px}.uni-numbox--text[data-v-2a85ab7d]{line-height:20px;font-size:20px;font-weight:300;color:#333}.uni-numbox .uni-numbox--disabled[data-v-2a85ab7d]{color:silver!important;cursor:not-allowed}',""]),t.exports=e},"5e12":function(t,e,i){"use strict";var a=i("6de1"),n=i.n(a);n.a},6769:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniCard:i("3d92").default,uniList:i("add1").default,uniListItem:i("6e18").default,uniNumberBox:i("7ec4").default,buttonBarBottom:i("e265").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t._l(t.presets,(function(e,a){return i("uni-card",{key:e.cId,attrs:{margin:"20px",padding:"0",spacing:"0"}},[e.cNote?i("uni-list",[0==a?i("v-uni-view",[i("uni-list-item",{attrs:{border:!1,"thumb-size":"lg",thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote}}),t._l(t.resonances,(function(t,e){return i("uni-list-item",{key:t.title,attrs:{title:t.title,note:t.text}})})),t._l(t.options,(function(e,a){return i("uni-list-item",{key:e.title,attrs:{showSwitch:"true",switchChecked:"true",title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{border:!1,"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:e.cNote,note:e.eNote,rightText:"配置",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}}),t._l(t.effectsArr[a],(function(e,a){return i("uni-list-item",{key:a,attrs:{showSwitch:!0,switchChecked:!e.close,clickable:!0,title:e.title,note:e.text},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.closeEffect(e)}}})}))],2):i("uni-list-item",{attrs:{"thumb-size":"lg",clickable:!0,thumb:t.charactersData[e.cId].avatar,title:"未初始化，无法读取增益",rightText:"初始化",showArrow:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.initPreset(e)}}})],1)})),i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{border:!1,"thumb-size":"lg",thumb:"/static/paimeng.png",title:"派蒙",note:"自定义增益",rightText:"编辑",showArrow:!0,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toList()}}}),t._l(t.buffs,(function(e,a){return i("uni-list-item",{key:a,attrs:{showSwitch:!0,title:e.title,note:e.note},on:{switchChange:function(e){arguments[0]=e=t.$handleEvent(e),t.addBuff(a)}}})}))],2),i("uni-card",{attrs:{margin:"20px",padding:"0",spacing:"0"}},[i("uni-list-item",{attrs:{border:!1,"thumb-size":"lg",thumb:t.imageUrl["daweiqiu"],title:"大伟丘",note:"自定义目标"}}),i("uni-list-item",{attrs:{title:"等级(1 - 100)"},scopedSlots:t._u([{key:"footer",fn:function(){return[i("uni-number-box",{attrs:{min:1,step:10,max:100},model:{value:t.target[0],callback:function(e){t.$set(t.target,0,e)},expression:"target[0]"}})]},proxy:!0}])}),i("uni-list-item",{attrs:{title:"抗性（-300% - 300%）"},scopedSlots:t._u([{key:"footer",fn:function(){return[i("uni-number-box",{attrs:{min:-300,step:10,max:300},model:{value:t.target[1],callback:function(e){t.$set(t.target,1,e)},expression:"target[1]"}})]},proxy:!0}])})],1),i("button-bar-bottom",{attrs:{text:"保存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],2)},r=[]},"689e":function(t,e,i){"use strict";i.r(e);var a=i("e7a4"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"6b9d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=a},"6bb3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?i("v-uni-view",{staticClass:"uni-card__cover"},[i("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?i("v-uni-view",{staticClass:"uni-card__header"},[i("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-avatar"},[i("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-content"},[i("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?i("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[i("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),i("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),i("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},n=[]},"6c29":function(t,e,i){var a=i("a1ae");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("37f0ae79",a,!0,{sourceMap:!1,shadowMode:!1})},"6de1":function(t,e,i){var a=i("ebfa");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("23425548",a,!0,{sourceMap:!1,shadowMode:!1})},"729a":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530"));i("a434"),i("3c65");var r={allItems:[],index:0,target:[90,10],targetGet:function(){var t=uni.getStorageSync("ys-config-target");t&&(this.target=t)},targetSave:function(){uni.setStorageSync("ys-config-target",this.target)},buffInit:function(){if(0==this.allItems.length){t.log("初始化Buff");var e=uni.getStorageSync("ys-config-buffs");e||(e=[{id:0,title:"仙跳墙",note:"攻击力316、暴击10%",data:[{key:"atkp",value:316,text:"316",text2:"",title:"攻击力",index:2},{key:"addCrit",value:.1,text:"10",text2:"%",title:"暴击",func:!0,index:7}]}]),this.allItems=e}},buffStore:function(){uni.setStorageSync("ys-config-buffs",this.allItems)},buffMoveTop:function(t){if(t>0){var e=this.allItems[t];this.allItems.splice(t,1),this.allItems.unshift(e),this.buffStore()}},buffCopy:function(t){var e=(0,n.default)({},this.allItems[this.index]);e.title=t,e.id=Date.now(),this.allItems.splice(this.index,0,e),this.buffStore()},buffRename:function(t){var e=this.allItems[this.index];e.title=t},buffEdit:function(t){var e=this.allItems[t.index];e.note=t.note,e.data=t.data,this.buffStore()},buffDelete:function(t){this.allItems.splice(t,1),this.buffStore()}};e.default=r}).call(this,i("5a52")["default"])},"748d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"100px"}}),i("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),i("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},n=[]},"7ec4":function(t,e,i){"use strict";i.r(e);var a=i("1c1d"),n=i("980b");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("50e8");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2a85ab7d",null,!1,a["a"],void 0);e["default"]=o.exports},"90b7":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("c975"),i("14d9"),i("c740"),i("4de4"),i("d3b7");var n=a(i("ade3")),r=a(i("b85c")),s=a(i("5530")),o=a(i("d37b")),u=i("fedd"),c=i("4432"),d=a(i("729a")),l=i("26cb"),f=a(i("47d0")),h={data:function(){return{target:[],imageUrl:{},buffs:[],eleNum:0,percentages:[0,0,0,0,0,0,0,0,0,0],disbaleObj:{},index:0,resonances:[],options:[],effectsArr:[[]],charactersData:{},closedObj:{},temp:{},names:[],presets:[],effectTextArrs:[],effects:[],openBuffs:{}}},computed:(0,s.default)({},(0,l.mapState)(["preset","selectIds","character","version"])),onUnload:function(){uni.$off("presetChanged")},onLoad:function(){this.imageUrl=o.default,this.temp=JSON.parse(JSON.stringify(this.preset)),d.default.buffInit(),this.buffs=d.default.allItems,d.default.targetGet(),this.target=d.default.target,this.charactersData=c.charactersData;var t=this;t.initData(),uni.$on("presetChanged",(function(){t.initData(),t.$forceUpdate()}))},methods:{toTarget:function(){uni.showToast({icon:"none",title:"完善中.."})},addBuff:function(t){var e,i=this.buffs[t],a=String(null!==(e=i.id)&&void 0!==e?e:"0");this.openBuffs[a]?this.openBuffs[a]=void 0:this.openBuffs[a]=i},showBuff:function(t){if(this.buffIds){var e=this.buffIds.indexOf(t.id)>-1;return t.close=!e,e}return!t.close},toList:function(){uni.navigateTo({url:"/package/pages/character/buff/list"})},closeEffect:function(t){t.close?t.close=!t.close:t.close=!0},initPreset:function(t){var e=this;uni.showLoading({title:"初始化中..",mask:!0}),setTimeout((function(){(0,u.startCalculate)(t),e.$store.dispatch("storePreset",t),e.initData(),uni.hideLoading()}),2e3)},toDetail:function(t){this.$store.commit("backupPreset"),this.$store.commit("setPreset",t),uni.navigateTo({url:"./property?from=effect"})},save:function(){var e,i={},a=this.percentages,n=[],s=(0,r.default)(this.resonances);try{for(s.s();!(e=s.n()).done;){var o=e.value;i[o.id]=o}}catch(Q){s.e(Q)}finally{s.f()}var c,l=(0,r.default)(this.options);try{for(l.s();!(c=l.n()).done;){var f=c.value;f.close||(i[f.id]=f)}}catch(Q){l.e(Q)}finally{l.f()}var h,p=(0,r.default)(this.effectsArr);try{for(p.s();!(h=p.n()).done;){var v,b=h.value,m=(0,r.default)(b);try{for(m.s();!(v=m.n()).done;){var g=v.value;if(!g.close){var x=i[g.id];x?g.many?x.value+=g.value:g.value>x.value&&(i[g.id]=g):i[g.id]=g}}}catch(Q){m.e(Q)}finally{m.f()}}}catch(Q){p.e(Q)}finally{p.f()}for(var _ in i){var w=i[_];if(w.dynamic){var y=JSON.parse(JSON.stringify(w));n.push(y)}if(w.index&&(a[w.index]+=w.value),"ranse"==_){var k=this.presets[1];if(k){var S=k.element,C=["fire","water","ice","thunder"].indexOf(S);if(C>-1){var $=["火","水","冰","雷"];i[_].value={eleText:$[C],ele:S},i[_].text=$[C],i[_].title="染色"}}}}for(var I=0,B=n;I<B.length;I++){var O=B[I],E=O.dynamic;if("yunjinQ"==O.id){var V=[.025,.05,.075,.115][this.eleNum-1]-.025;t.log(V),O.value=(a[E.index]*E.base+E.def)*(E.skill+V)}else if("naxidaT"==O.id){var M,N=E.em,D=!0,T=(0,r.default)(this.presets);try{for(T.s();!(M=T.n()).done;){var j=M.value;"naxida"!=j.cId&&j.cData&&j.cData.em>N&&(N=j.cData.em,D=!1)}}catch(Q){T.e(Q)}finally{T.f()}var z=a[E.index];if(D){var P=this.presets.findIndex((function(t){return"naxida"==t.cId})),F=void 0;if(P&&(F=this.presets[P]),F){var A=F.effects.findIndex((function(t){return"qianyefumeng"==t.id}));A>-1&&(z-=F.effects[A].value)}}var L=N+z;O.value=Math.min(.25*L,2.5)}else{var U=a[E.index];if(E.remove){var J,Y=(0,r.default)(E.remove);try{for(Y.s();!(J=Y.n()).done;){var G=J.value;i[G]&&(U-=i[G].value,t.log("砂糖",i[G].value))}}catch(Q){Y.e(Q)}finally{Y.f()}}var H=U*E.base*E.skill;O.value+=H}i[O.id]=O}var q=[];for(var R in this.openBuffs)this.openBuffs[R]&&q.push(this.openBuffs[R]);q.length>0?(this.temp.openBuffs=q,this.names.push("派蒙")):this.temp.openBuffs=[],this.temp.gContent=this.names.join(" /"),this.temp.gEffects=i,this.temp.isGoup=!0,this.temp.gIds=this.selectIds,this.temp.target=this.target,d.default.targetSave(),(0,u.startCalculate)(this.temp),this.$store.dispatch("storePreset",this.temp),this.$store.commit("setPreset",this.temp),uni.navigateBack({delta:2})},initData:function(){this.eleNum=0,this.percentages=[0,0,0,0,0,0,0,0,0,0],this.effectsArr=[],this.presets=[],this.resonances=[],this.options=[],this.names=[],uni.showLoading({});for(var t={fire:0,rock:0,wind:0,ice:0,thunder:0,water:0,grass:0},e=0;e<this.selectIds.length;e++){var i=this.selectIds[e],a=(0,u.getPreset)(i);if(0==e){var r=a.effects.filter((function(t){return t.type<2}));this.effectsArr.push(r)}else{var s=a.effects.filter((function(t){return t.type>0}));this.effectsArr.push(s)}this.presets.push(a);var o=a.element;t[o]+=1,1==t[o]&&(this.eleNum+=1),this.names.push(f.default[i]+a.cStage)}"naxida"==this.temp.cId&&(this.temp.gData={fireNum:t.fire}),"yelan"==this.temp.cId&&(this.temp.gData={eleNum:this.eleNum}),t.fire>1&&(this.percentages[1]+=.25,this.resonances.push({id:"shuanghuo",title:"共鸣 - 双火",text:"攻击力提升25%"})),t.water>1&&(this.percentages[0]+=.25,this.resonances.push({id:"shuangshui",title:"共鸣 - 双水",text:"生命值提高25%"})),t.grass>1&&(this.percentages[3]+=.5,this.resonances.push({id:"shuangcao1",title:"共鸣 - 双草",text:"精通提升50"}),this.options.push((0,n.default)({index:3,value:.3,id:"shuangcao2",title:"共鸣 - 双草（燃烧/激化/绽放）",text:"精通提升30"},"index",3)),this.options.push((0,n.default)({index:3,value:.2,id:"shuangcao3",title:"共鸣 - 双草（超、蔓激化/超、烈绽放）",text:"精通提升20"},"index",3))),t.ice>1&&this.options.push({id:"shuangbing",title:"共鸣 - 双冰",text:"暴击率提升15%"}),t.rock>1&&(this.resonances.push({id:"shuangyan3",title:"共鸣 - 双岩（护盾）",text:"护盾强效提升15%"}),this.options.push({id:"shuangyan",title:"共鸣 - 双岩（增伤）",text:"伤害增加15%"}),this.options.push({id:"shuangyan2",title:"共鸣 - 双岩（减抗）",text:"目标岩元素抗性降低20%"})),t.ice>0&&t.thunder>0&&this.options.push({id:"chaodao",title:"效果 - 超导",text:"目标物理抗性降低40%"}),uni.hideLoading({})}}};e.default=h}).call(this,i("5a52")["default"])},9293:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},n=[]},"980b":function(t,e,i){"use strict";i.r(e);var a=i("3974"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a1ae:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},a5c4:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #dcdcdc solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #dcdcdc}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 1px 8px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},add1:function(t,e,i){"use strict";i.r(e);var a=i("9293"),n=i("1291");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ffd4");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6fce09b0",null,!1,a["a"],void 0);e["default"]=o.exports},bcee:function(t,e,i){"use strict";var a=i("e52b"),n=i.n(a);n.a},c489:function(t,e,i){"use strict";i.r(e);var a=i("6769"),n=i("3cef");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("5e12");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5e24f5da",null,!1,a["a"],void 0);e["default"]=o.exports},e265:function(t,e,i){"use strict";i.r(e);var a=i("748d"),n=i("3d37");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bcee");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"d83b913c",null,!1,a["a"],void 0);e["default"]=o.exports},e52b:function(t,e,i){var a=i("1dfd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1143f6dc",a,!0,{sourceMap:!1,shadowMode:!1})},e7a4:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=a},ebfa:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".image[data-v-5e24f5da]{width:%?130?%;height:%?130?%;border-radius:%?8?%}.text[data-v-5e24f5da]{text-align:center;font-size:%?26?%;margin-top:%?10?%;color:#333}.uni-grid-item[data-v-5e24f5da]{height:auto!important}.grid-item-box[data-v-5e24f5da]{flex:1;\ndisplay:flex;\nflex-direction:column;align-items:center;justify-content:center;padding:%?40?% 0 0 0;margin:%?8?%;border-radius:%?8?%}",""]),t.exports=e},fce2:function(t,e,i){"use strict";var a=i("526e"),n=i.n(a);n.a},ffd4:function(t,e,i){"use strict";var a=i("6c29"),n=i.n(a);n.a}}]);