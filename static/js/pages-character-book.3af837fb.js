(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-character-book"],{"00d0":function(t,e,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.maximize=function(t,e,a,r,n){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Brute",d={atk:[0,37],hp:[0,37],def:[0,37],em:[0,35],er:[0,35],cr:[0,35],cd:[0,35]};if(a){if(a.length>3)throw new Error("主词条列表长度不超过3，得到"+a.length);var f,v=(0,i.default)(a);try{for(v.s();!(f=v.n()).done;){var h=f.value;h in d&&(["atk","hp","def"].includes(h)?d[h][1]-=5:d[h][1]-=7)}}catch(C){v.e(C)}finally{v.f()}}if(n)for(var p in d)if(p in n&&(d[p][0]=Math.max(d[p][0],Math.ceil(n[p][0])),d[p][1]=Math.min(d[p][1],Math.floor(n[p][1])),d[p][0]>d[p][1]))throw new Error("".concat(p,"的实际取值范围无效：[").concat(d[p][0],", ").concat(d[p][1],"]"));if(r)for(var g in d)r.includes(g)||(d[g][1]=d[g][0]);var x=[],b=0,m=0;for(var _ in d)d[_][0]<d[_][1]&&x.push(_),b+=d[_][0],m+=d[_][1];if(e<b||e>m)throw new Error("没有可行解，因为".concat(e,"不在[").concat(b,", ").concat(m,"]内"));if(x.length<=1){var S={};for(var w in d)S[w]=Math.min(e-b+d[w][0],d[w][1]);return{statBest:S,dmgBest:t(S)}}if(e==b){var y={};for(var T in d)y[T]=d[T][0];return{statBest:y,dmgBest:t(y)}}if(e==m){var N={};for(var M in d)N[M]=d[M][1];return{statBest:N,dmgBest:t(N)}}switch(u){case"Brute":return o(t,e,d);case"BruteTwice":return s(t,e,d);case"NelderMead":return c(t,e,d);case"NelderMeadBrute":return l(t,e,d);default:throw new Error("未知的优化方法："+u)}},a("14d9"),a("4e82"),a("d9e2"),a("d401"),a("caad"),a("99af"),a("2532");var i=r(a("b85c")),n=r(a("5530"));function o(t,e,a){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i={},o=0,s=["cr","cd","atk","em","hp","def","er"],c={},l=0,u=0,d=s.length-1;d>=0;--d)c[s[d]]=[l,u],l+=a[s[d]][0],u+=a[s[d]][1];function f(e,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,v=s[u];if(u==s.length-1){if(l+d>41)return;e[v]=l;var h=t(e);h>o&&(o=h,i=(0,n.default)({},e))}else for(var p=Math.max(a[v][0],l-c[v][1]),g=Math.min(a[v][1],l-c[v][0],41-d),x=p;x<=g;x+=r)e[v]=x,f(e,l-x,u+1,Math.max(d,x))}return e=Math.floor(e),f({},e),{statBest:i,dmgBest:o}}function s(t,e,a){var r=o(t,e,a,2),i=r.statBest,n=(r.dmgBest,{});for(var s in a)n[s]=[a[s][0],a[s][1]],s in i&&(n[s][0]=Math.max(n[s][0],i[s]-3),n[s][1]=Math.min(n[s][1],i[s]+3));return o(t,e,n)}function c(t,e,a){function r(e){var r=[];for(var i in e){if(i in a&&(e[i]<a[i][0]||e[i]>a[i][1]))return 0;e[i]>0&&r.push(e[i])}return r.sort((function(t,e){return e-t})),r.length>=2&&r[0]+r[1]>41?0:t(e)}var i=0,n=[],o=0,s=0,c=[];for(var l in a)if(o+=a[l][0],a[l][0]<a[l][1]){i++,n.push(l);var u=Math.random();s+=u*(a[l][1]-a[l][0]),c.push(u)}for(var d=[],f=0;f<n.length;++f){var v=n[f],h=(e-o)/(s+.1*c[f]*(a[v][1]-a[v][0])),p={};for(var g in a)p[g]=a[g][0];for(var x=0;x<n.length;++x){var b=n[x],m=a[b][1]-a[b][0];p[b]+=h*c[x]*m,b==v&&(p[b]+=.1*h*c[x]*m)}d.push({stat:p,dmg:r(p)})}function _(){d.sort((function(t,e){return e.dmg-t.dmg}))}function S(t,e,i,n){var o={stat:{},dmg:0};for(var s in a)o.stat[s]=t*e.stat[s]+i*n.stat[s];return o.dmg=r(o.stat),o}for(var w=0;w<2e3;++w){_();var y=0;for(var T in a)y=Math.max(y,Math.abs(d[0].stat[T]-d[1].stat[T]));if(Math.abs(d[0].dmg-d[i-1].dmg)<1e-5&&y<1e-5)break;var N={stat:{},dmg:0};for(var M in a){N.stat[M]=0;for(var C=0;C<i-1;++C)N.stat[M]+=d[C].stat[M];N.stat[M]/=i-1}var k=d[i-1],D=S(2,N,-1,k);if(D.dmg>d[0].dmg){var E=S(3,N,-2,k);E.dmg>D.dmg?d[i-1]=E:d[i-1]=D}else if(D.dmg<=d[i-1].dmg){var O=!1;if(D.dmg<k.dmg){var A=S(.5,N,.5,k);A.dmg>k.dmg?d[i-1]=A:O=!0}else{var R=S(1.5,N,-.5,k);R.dmg>D.dmg?d[i-1]=R:O=!0}if(O){0;for(var I=1;I<i;++I)d[I]=S(.5,d[0],.5,d[I])}}else d[i-1]=D}return _(),{statBest:d[0].stat,dmgBest:d[0].dmg}}function l(t,e,a){for(var r=c(t,e,a),i=r.statBest,n=r.dmgBest,s=1;s<5;++s){var l=c(t,e,a);l.dmgBest>n&&(i=l.statBest,n=l.dmgBest)}var u={};for(var d in a)u[d]=[a[d][0],a[d][1]],d in i&&(u[d][0]=Math.max(u[d][0],Math.ceil(i[d]-3)),u[d][1]=Math.min(u[d][1],Math.floor(i[d]+3)));return o(t,e,u)}},"03ea":function(t,e,a){"use strict";a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getTag=function(t){var e,a=t.preset,r={},f=[],v=t.preset.tagNum,h=a.cPanel["HP"][0],p=a.cPanel["ATTACK"][0],g=a.cPanel["DEFENSE"][0],x=a.output,b=[],m=[],_=t.calculator.convert;if(t.convertTag=[],_){var S=JSON.parse(JSON.stringify(a));S.aMinor=[0,0,0,0,0,0,0,0],t.convertPresets=[S]}for(var w=0;w<x.length;w++){var y,T="",N=0,M=x[w],C=(0,n.default)(M);try{for(C.s();!(y=C.n()).done;){var k=y.value;if(0==w){var D=0,E="";switch(k){case 0:D=.05*h,E="词条 - 生命（ +5% / "+D.toFixed(0)+" ）";break;case 1:D=.05*p,E="词条 - 攻击（ +5% / "+D.toFixed(0)+" ）";break;case 2:D=.062*g,E="词条 - 防御（ +6.2% / "+D.toFixed(0)+" ）";break;case 3:D=20,E="词条 - 精通（ +20 ）";break;case 4:D=3.3,E="词条 - 暴击（ +3.3% ）";break;case 5:D=6.6,E="词条 - 爆伤（ +6.6% ）";break;case 6:D=5.5,E="词条 - 充能（ +5.5% ）";break;default:break}var O={title:E,note:"",text:0};b.push(O);var A=JSON.parse(JSON.stringify(a));if(A.aMinor[k]+=D,_){var R=_.indexOf(k);if(R>-1){var I=JSON.parse(JSON.stringify(t.convertPresets[0]));I.aMinor[k]+=D,t.convertPresets.push(I),t.convertTag.push(v[k])}}m.push(A)}T+=c[k],N+=v[k]}}catch(Mt){C.e(Mt)}finally{C.f()}var P={title:T,text:N.toFixed(1)};0==w?r=(0,i.default)({},P):f.push(P)}if(a.cLevel<90){var B=JSON.parse(JSON.stringify(a)),J={character:t.character,preset:B,weapon:t.weapon};B.cLevel=90,B.aTagToMinor=!0,(0,s.getBaseData)(J),(0,o.convertMinor)(B),m.push(B),b.push({title:"人物 - 等级（ +"+(90-a.cLevel)+"级 ）",note:"",text:0})}if(a.wLevel<90){var F=JSON.parse(JSON.stringify(a)),L={character:t.character,preset:F,weapon:t.weapon};F.wLevel=90,(0,s.getBaseData)(L),F.aTagToMinor=!0,(0,o.convertMinor)(F),m.push(F),b.push({title:"武器 - 等级（ +"+(90-a.wLevel)+"级 ）",note:"",text:0})}var j=null!==(e=t.calculator.skillKey)&&void 0!==e?e:t.character.skillKey;if(j){var H=[9,9];a.cStage>2&&(H=[12,12],a.cStage<5&&(t.character.isSkillFive?H[0]=9:H[1]=9));var U,z=[{key:"技能 - A（ +1级 ）",index:0,max:9},{key:"技能 - E（ +1级 ）",index:1,max:H[0]},{key:"技能 - Q（ +1级 ）",index:2,max:H[0]}],$=[],G=(0,n.default)(j);try{for(G.s();!(U=G.n()).done;){var K=U.value,W=a.cSkills[K],Y=z[K];0==K&&W<Y.max&&$.push(Y),0!=K&&W<Y.max&&$.push(Y)}}catch(Mt){G.e(Mt)}finally{G.f()}for(var q=0,Q=$;q<Q.length;q++){var V=Q[q],X=JSON.parse(JSON.stringify(a));X.cSkills[V.index]+=1,m.push(X),b.push({title:V.key,note:"",text:0})}}if(x[0].indexOf(5)>-1||t.calculator.convert){var Z=JSON.parse(JSON.stringify(a));if(m.push(Z),b.push({title:"其他 - 伤害加成（ +5% ）",note:"",isBonus:!0,text:0}),a.aMajor[1]<6||a.aMajor[1]==u[a.element]){var tt=a.aMajor[1],et=t.calculator.preset?t.calculator.preset.aMajor:t.character.preset.aMajor,at=["HP","ATTACK","DEFENSE"];if(tt<3){var rt=JSON.parse(JSON.stringify(a)),it="（ 元素杯 ）",nt=4;5==et[1]&&(it="（ 物理杯 ）",nt=5);var ot=.466;2==tt&&(ot=.583),rt.aMajor[1]=nt,(0,s.getMajorData)(rt),rt.aMinor[tt]-=ot*rt.cPanel[at[tt]][0],m.push(rt),b.push({title:"更换 - "+l[1][tt]+it,note:"",text:0})}else if(3!=tt){var st=JSON.parse(JSON.stringify(a)),ct="更换 - 元素杯";5==tt&&(ct="更换 - 物理杯");var lt=.466,ut="（ 攻击杯 ）";tt=1,2==et[0]?(lt=.583,ut="（ 防御杯 ）",tt=2):0==et[0]&&(ut="（ 生命杯 ）",tt=0),st.aMajor[1]=tt,(0,s.getMajorData)(st),st.aMinor[tt]+=lt*st.cPanel[at[tt]][0],m.push(st),b.push({title:ct+ut,note:"",text:0})}}}var dt=[20,20,20,20,20],ft=[];if(a.aConfigs){for(w=0;w<a.aConfigs.length;w++){var vt=a.aConfigs[w];dt[w]=20-vt[1]}dt[0]<20&&ft.push(dt[0]+"花"),dt[1]<20&&ft.push(dt[1]+"羽")}for(w=0;w<3;w++){var ht=a.aMajor[w];if(ht<99){var pt="";pt=1==w&&4==ht?d[a.element]+"杯":l[w][ht],dt[w+2]<20&&(pt=dt[w+2]+pt),ft.push(pt)}else ft.push("无")}var gt=ft.join(" / ");r.content=gt;var xt=[],bt=[],mt=[];t.presets=m;for(w=0;w<c.length;w++){var _t=v[w].toFixed(1),St=c[w]+_t,wt=x[0].indexOf(w);if(wt>-1){xt.push(St);var yt=a.aMinor[w].toFixed(0)+c[w];mt[wt]=yt}else bt.push(St)}var Tt={title:"主要词条",text:xt.join(" / ")};f.push(Tt);var Nt={title:"其他词条",text:bt.join(" / ")};f.push(Nt),x[0].indexOf(5)>-1?r.note="双爆: "+(2*a.aMinor[4]+a.aMinor[5]).toFixed(1):r.note="";a.tPanel=mt.join(" / "),a.tResult=r,a.tResults=f,t.weights=b};var i=r(a("5530")),n=r(a("b85c"));a("e9c4"),a("14d9"),a("c975");var o=a("7a53"),s=a("175e"),c=["生","攻","防","精","暴","爆","充"],l=[["生命沙","攻击沙","防御沙","精通沙","充能沙"],["生命杯","攻击杯","防御杯","精通杯","元素杯","物理杯","火伤杯","冰伤杯","水伤杯","雷伤杯","草伤杯","岩伤杯","风伤杯"],["生命头","攻击头","防御头","精通头","暴击头","爆伤头","治疗头"]],u={fire:6,ice:7,water:8,thunder:9,grass:10,rock:11,wind:12},d={fire:"火伤",water:"水伤",thunder:"雷伤",ice:"冰伤",rock:"岩伤",wind:"风伤",grass:"草伤"}},"0b7e":function(t,e,a){"use strict";(function(t){a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getBaseScore=function(e){var a=e.preset,r=e.calculator.preset?e.calculator.preset:e.character.preset;e.oldPreset=r;var i=JSON.parse(JSON.stringify(r)),c=[8,8,8];4==e.character.star?(c=[8,11,11],i.cStage=6):i.cStage=0;i.cSkills=c,i.cLevel=90,i.wLevel=90,i.school=a.school,i.cId=a.cId,i.wType=a.wType,i.element=a.element,i.energy=a.energy,i.cPanel={HP:[0,4780],HP_PERCENT:[0,0],ATTACK:[0,311],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]};var l=d.weaponsData[i.wId];i.wStage=5==l.star?0:4,i.wIndexs||(i.wIndexs=l.indexs);if(!i.aIndexs&&!i.aSets){var f=u.artifactsData[i.aIds[0]];f&&(i.aIndexs=f.indexs)}var v={character:e.character,preset:i,weapon:l};(0,o.getMajorData)(i),(0,o.getBaseData)(v),i.aTagToMinor=!0,i.tagNum=JSON.parse(JSON.stringify(a.school.tagNum)),(0,s.convertMinor)(i);var h=(0,n.buildAttribute)(i);a.output[0].indexOf(5)>-1&&(h.isBalance=!0);h.onlyScore=!0,e.calculator.get(h),e.baseScore=h.score,t.log("-------------"+e.character.chs+"-------------"),t.log("(1) C期望（默认圣遗物+默认配置）："+h.score)},e.getDataScore=function(e){var a=e.preset,r=(0,n.buildAttribute)(a);e.attribute=r,r.isData=!0,e.calculator.get(r),a.dResult=r.result,a.dResults=r.results;var o=r.score;t.log("(3) A期望（当前圣遗物+当前配置）："+o),r.reacResult&&a.dResults.push(r.reacResult);var s=e.baseScore,c=(o/s*100).toFixed(0),d=(0,l.getColor)(c);a.dResult.score=c,a.dResult.color=d,e.dataScore=o,a.recharge=r.recharge;var v=e.baseData;r.dBuffs=v.concat(r.dBuffs),a.dBuffs=r.dBuffs,a.effects=r.effects;var h="",p=e.weapon.options;if(p){var g=a.wIndexs;if(g&&g[0]>0){h+="[";for(var x=0;x<g.length;x++){var b=g[x];h+=p[x][b]}h+="]"}}var m,_="",S="",w=(0,i.default)(a.cSkills);try{for(w.s();!(m=w.n()).done;){var y=m.value;S+=y+1}}catch(H){w.e(H)}finally{w.f()}var T="",N=u.artifactsData[a.aIds[0]];if(a.aSets){var M=u.artifactsData[a.aIds[1]];T=N.short[0]+M.short[0]+"二"}else{T=N.short+"四";var C=N.options;if(C){var k=a.aIndexs;if(k&&k[0]>0){_+="[";for(x=0;x<k.length;x++){var D=k[x];_+=C[x][D]}_+="]"}}}var E=e.weapon.chs.slice(0,2),O="";a.wLevel&&a.wLevel<90&&(O=a.wLevel,a.wAscend&&(O+="+"));var A=a.cLevel;a.cAscend?A+="+":A+="级";var R=A+" / "+a.cStage+"命 / 技能 "+S,I=O+E+(a.wStage+1)+"精 /"+T;a.cNote=R,a.eNote=I,a.wNote=h,a.aNote=_,a.note=I+_+" /"+A+a.cStage+"命 /"+S,a.reactionText=r.reactionText?r.reactionText+" ":"",a.cData={em:r.em0()},e.preset.school.score||(e.supportScore=r.supportScore);if(r.isBalance)a.aMinor[4]+=r.resetCD.diffC,a.aMinor[5]+=r.resetCD.diffD,a.tagNum[4]=(a.aMinor[4]-100*a.cPanel["CRITICAL"][1])/3.3,a.tagNum[5]=(a.aMinor[5]-100*a.cPanel["CRITICAL_HURT"][1])/6.6,a.isAdapt=!1;else{var P=0;if(a.output[0].indexOf(5)>-1){var B=100*r.critical,J=100*r.criticalDamage;if(B<100)if(B*J<2e4){var F=Math.sqrt(8*B*J);P=(2*B+J-F)/6.6}else P=(2*B+J-200-B*J/100)/6.6;else if(J>200)P=(B-100)/3.3;else{var L=Math.sqrt(800*J);P=(2*B+J-L)/6.6}a.tLost=P.toFixed(1)}else a.tLost=null}var j=f(e);a.dPanel=j},e.getGWeightScore=function(t){for(var e=t.preset,a=JSON.parse(JSON.stringify(t.weights)),r=[],i=0;i<a.length;i++){var o=a[i],s=t.presets[i],c=(0,n.buildGroupAttribute)(s);c.onlyScore=!0,o.isBonus&&(c.bonus+=.05),t.calculator.get(c);var l=100*(c.score/t.preset.groupScore-1);l>.05&&(o.text=l.toFixed(2),r.push(o))}r.sort((function(t,e){return e.text-t.text})),e.gWeights=r},e.getGroupScore=function(e){var a=e.preset;if(a.gEffects||a.openBuffs){var r=(0,n.buildGroupAttribute)(a);e.attribute=r,e.calculator.get(r),a.gResult=r.result,a.gResults=r.results;var i=a.gResult.text;t.log("(2) E期望（+队伍增益）："+r.score),r.reacResult&&a.gResults.push(r.reacResult);var o=f(e);a.gPanel=o,a.gBuffs=r.gBuffs,a.gOpenBuffs=r.gOpenBuffs;var s=e.baseScore,c=(i/s*100).toFixed(0);a.gResult.score=c,a.gResult.color=(0,l.getColor)(c),a.groupScore=i}else a.gResult=null,a.gResults=null,a.gWeights=null,a.groupScore=null},e.getPanel=f,e.getTagScore=function(e){var a=e.preset,r=JSON.parse(JSON.stringify(a));r.aConfigs=null,r.aTagToMinor=!0;var i=e.dataScore,u=JSON.parse(JSON.stringify(r)),d=JSON.parse(JSON.stringify(a.school.tagNum)),f=d.map((function(t){return Math.round(5*t/3)}));u.tagNum=f,r.tagNum=d;var v=JSON.parse(JSON.stringify(r));r.aMajor=e.oldPreset.aMajor,(0,o.getMajorData)(r),(0,s.convertMinor)(r),(0,s.convertMinor)(v),(0,s.convertMinor)(u);var h=(0,n.buildAttribute)(u);h.onlyScore=!0;var p=(0,n.buildAttribute)(v);p.onlyScore=!0;var g=(0,n.buildAttribute)(r);g.onlyScore=!0,a.output[0].indexOf(5)>-1?(g.isBalance=!0,h.isBalance=!0,p.isBalance=!0):(g.isBalance=!1,h.isBalance=!1,p.isBalance=!1);e.calculator.get(g);var x=g.score;t.log("(4) B期望（默认圣遗物+当前配置）："+x),e.calculator.get(p);var b=p.score;t.log("(5) D期望（默认词条数）："+b),e.calculator.get(h);var m=h.score;t.log("(6) E期望（极限词条数）："+m);var _=(m-b)/50,S=(i-b)/_+100,w=i/b*100,y=i/x*100,T=i/m*100;t.log("主属性不变："+w.toFixed(0)),t.log("主属性改变："+y.toFixed(0)),t.log("毕业度："+S.toFixed(0)),a.output[0].indexOf(5)>-1?a.tProgress=T.toFixed(0):a.tProgress=null;(0,c.getTag)(e);var N=w.toFixed(0),M=(0,l.getColor)(N);a.tResult.score=N,a.tResult.color=M,e.tagScore=x,a.score=e.supportScore?e.supportScore:a.tResult.score+" / "+a.dResult.score},e.getWeightScore=function(t){for(var e=t.preset,a=JSON.parse(JSON.stringify(t.weights)),r=[],i=0;i<a.length;i++){var o=a[i],s=t.presets[i],c=(0,n.buildAttribute)(s);c.onlyScore=!0,o.isBonus&&(c.bonus+=.05),t.calculator.get(c);var l=100*(c.score/t.dataScore-1);l>.05&&(o.text=l.toFixed(2),r.push(o))}if(t.calculator.convert){var u=Number(t.preset.tResult.text),d=(0,n.buildAttribute)(t.convertPresets[0]);d.onlyScore=!0,t.calculator.get(d);var f=d.score,v=(0,n.buildAttribute)(t.convertPresets[1]);v.onlyScore=!0,t.calculator.get(v);var h=v.score,p=(0,n.buildAttribute)(t.convertPresets[2]);p.onlyScore=!0,t.calculator.get(p);var g=p.score,x=100*(h/f-1),b=100*(g/f-1),m=[x,b],_=0,S=1;x>b&&(_=1,S=0);var w=t.convertTag[_]*(m[_]/m[S]-1),y=u+w;"shanhugongxinhai"!=t.preset.cId?t.preset.tResult.note+=" | ":t.preset.tResult.note="",t.preset.tResult.note+="词条："+t.preset.tResult.text,t.preset.tResult.text=y.toFixed(1),t.preset.tResult.rightText="折算 "+y.toFixed(1)}else t.preset.tResult.rightText="词条 "+t.preset.tResult.text;r.sort((function(t,e){return e.text-t.text})),e.weights=r};var i=r(a("b85c"));a("e9c4"),a("c975"),a("d81d"),a("14d9"),a("99af"),a("fb6a"),a("a9e3"),a("4e82");var n=a("149f"),o=a("175e"),s=a("7a53"),c=a("03ea"),l=a("b209"),u=a("e194"),d=a("0d89");function f(t){var e,a=t.attribute,r=t.preset.output,n=!0,o=[],s=(0,i.default)(r[0]);try{for(s.s();!(e=s.n()).done;){var c=e.value;6==c&&(n=!1);var l=0,u="";switch(c){case 0:l=a.life().toFixed(0),u="生";break;case 1:l=a.atk().toFixed(0),u="攻";break;case 2:l=a.defend().toFixed(0),u="防";break;case 3:l=(100*a.em).toFixed(0),u="精";break;case 4:l=(100*a.critical).toFixed(0),u="暴";break;case 5:l=(100*a.criticalDamage).toFixed(0),u="爆";break;case 6:l=(100*a.recharge).toFixed(0),u="充";break;default:break}o.push(l+u)}}catch(v){s.e(v)}finally{s.f()}a.recharge>1&&n&&o.push((100*a.recharge).toFixed(0)+"充");var d=o.join(" / "),f=d;return f}}).call(this,a("5a52")["default"])},"190b":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("2ca0");var r={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=r},"1dfd":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".content[data-v-d83b913c]{\n\t\t/* height: 50px; */width:100%;max-width:500px;position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;line-height:3;color:#fff\n\t\t/* background-color: #ad9388; */}.bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */height:calc(env(safe-area-inset-bottom)/2)}\n\n\t/* \t.height-set {\n\n\t\theight: 100px;\n\t} */.button-bottom-view[data-v-d83b913c]{\n\t\t/* background-color: #ad9388; */display:flex;flex-direction:column;position:fixed;left:0;right:0;\nleft:var(--window-left);right:var(--window-right);\nbottom:0;z-index:998}",""]),t.exports=e},"24db":function(t,e,a){"use strict";a.r(e);var r=a("190b"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"32d0":function(t,e,a){var r=a("58dd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("5264f9cc",r,!0,{sourceMap:!1,shadowMode:!1})},3621:function(t,e,a){"use strict";a.r(e);var r=a("6689"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"3d37":function(t,e,a){"use strict";a.r(e);var r=a("444b"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"444b":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{text:{type:String,default:"保存"},color:{type:String,default:"#ad9388"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",{data:{}})}}};e.default=r},"58dd":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},6689:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniSection",emits:["click"],props:{showArrow:{type:[Boolean,String],default:!1},rightText:{type:[String,Object],default:""},type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#f6f2ee"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},"6fcd":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={uniSection:a("89d3").default,uniListItem:a("6e18").default,uniLink:a("bfb4").default,buttonBarBottom:a("e265").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-section",{attrs:{title:"选择流派",type:"line"}}),a("v-uni-radio-group",[a("v-uni-view",{staticClass:"uni-list"},t._l(t.schoolArr,(function(e,r){return a("uni-list-item",{key:e.name,attrs:{title:e.name,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSchoolIndex(r)}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("v-uni-radio",{attrs:{color:"#ad9388",checked:r==t.schoolIndex}})]},proxy:!0}],null,!0)})})),1)],1),t.info.major?a("v-uni-view",[a("uni-section",{attrs:{type:"line",title:"流派说明"}}),t.info.notes?a("v-uni-view",t._l(t.info.notes,(function(t,e){return a("uni-list-item",{key:e,staticClass:"item-space",attrs:{title:t}})})),1):t._e(),a("uni-list-item",{attrs:{title:"主词条",rightText:t.info.major}}),a("uni-list-item",{attrs:{title:"副词条",rightText:t.minorText+t.info.minor}}),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notice.apply(void 0,arguments)}}},[a("uni-section",{attrs:{title:"圣遗物推荐",type:"line"}},t._l(t.info.artifacts,(function(e,r){return t.artifactsData[e]?a("uni-list-item",{key:r,attrs:{title:t.artifactsData[e].chs,clickable:!0,thumb:t.artifactsData[e].url,"thumb-size":"lg",note:t.character.aNotes?t.character.aNotes[e]:""}}):t._e()})),1),a("uni-section",{attrs:{title:"武器推荐",type:"line"}},t._l(t.info.weapons,(function(e,r){return t.weaponsData[e]?a("uni-list-item",{key:r,attrs:{title:t.weaponsData[e].chs,clickable:!0,thumb:t.weaponsData[e].url,"thumb-size":"lg",note:t.character.wNotes?t.character.wNotes[e]:""}}):t._e()})),1)],1),a("uni-section",{attrs:{title:"其他说明",type:"line"}}),a("uni-list-item",{staticClass:"item-space",attrs:{title:"1、相关内容还在完善中.."}}),a("uni-list-item",{staticClass:"item-space",attrs:{title:"2、角色圣遗物和武器推荐来自 NGA@一只不知名的菜鸡"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("uni-link",{staticStyle:{color:"#007AFF"},attrs:{href:"https://nga.178.com/read.php?tid=27859119",text:"原帖地址"}})]},proxy:!0}],null,!1,3818278198)})],1):t.info.text?a("v-uni-view",[a("uni-section",{attrs:{title:"角色说明",type:"line"}}),a("uni-list-item",{staticClass:"item-space",attrs:{title:t.info.text}})],1):a("v-uni-view",[a("uni-section",{attrs:{title:"其他说明",type:"line"}}),a("uni-list-item",{staticClass:"item-space",attrs:{title:"该角色的流派的武器/圣遗物推荐等相关内容正在更新中..."}})],1),a("button-bar-bottom",{attrs:{text:t.saveText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],1)},n=[]},"748d":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticStyle:{height:"100px"}}),a("v-uni-view",{staticClass:"button-bottom-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content",style:{backgroundColor:t.color}},[t._v(t._s(t.text))]),a("v-uni-view",{staticClass:"bottom-view",style:{backgroundColor:t.color}})],1)],1)},i=[]},7558:function(t,e,a){"use strict";a.r(e);var r=a("6fcd"),i=a("b2cc");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("a151");var o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"8fa8bb12",null,!1,r["a"],void 0);e["default"]=s.exports},"77c2":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".note-text[data-v-8fa8bb12]{padding:15px;font-size:14px;color:#666;line-height:22px}",""]),t.exports=e},"7aec":function(t,e,a){"use strict";var r=a("f86f"),i=a.n(r);i.a},"89d3":function(t,e,a){"use strict";a.r(e);var r=a("971c"),i=a("3621");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("7aec");var o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"c5b075ba",null,!1,r["a"],void 0);e["default"]=s.exports},"949d":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowA?a("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):a("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},i=[]},"96a9":function(t,e,a){"use strict";(function(t){a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c975"),a("e9c4"),a("ac1f"),a("5319");var i=r(a("5530")),n=a("fedd"),o=a("26cb"),s=a("0d89"),c=a("e194"),l={data:function(){return{texts:["1、展示柜的属性为只读，只能修改流派，其他属性无法修改，如果需要调整，可以在详情页下方点击【复制配置到本地】，再从首页进入角色修改","2、如果发现数据读取有误，先尝试刷新一下展示柜，还是无法解决大概率是BUG，可以把错误情况进行反馈"],index:0,info:{},saveText:"保存",weaponsData:{},artifactsData:{},school:null,schoolArr:[{score:!0,name:"默认",reaction:0}],schoolIndex:0,margin:"0 14px 20px"}},computed:(0,i.default)((0,i.default)((0,i.default)({},(0,o.mapState)(["preset"])),(0,o.mapGetters)(["character"])),{},{minorText:function(){return this.school&&this.school.reaction>0&&-1==this.info.minor.indexOf("精通")?"精通、":""}}),onLoad:function(e){this.index=e.index,t.log(this.index),this.artifactsData=c.artifactsData,this.weaponsData=s.weaponsData;var a,r=this.character,i=this.preset;(r.schools&&(this.schoolArr=r.schools),99==this.index)?this.saveText="初始化 - "+r.chs:this.schoolIndex=null!==(a=i.school.index)&&void 0!==a?a:0;this.selectSchoolIndex(this.schoolIndex)},methods:{onClickItem:function(t){switch(t.currentIndex){case 1:uni.redirectTo({url:"./equipment?from=detail"});break;case 2:uni.redirectTo({url:"./property?from=detail"});break;case 3:uni.redirectTo({url:"./group"});break;default:break}},notice:function(){uni.showModal({title:"提示",content:"这里只能修改流派，武器/圣遗物可在数据页修改",showCancel:!1,confirmText:"好的"})},save:function(){if(99==this.index){var t=(0,n.initPreset)(this.character,this.school.id);t.school=this.school,(0,n.startCalculate)(t),this.$store.commit("setPreset",t),uni.redirectTo({url:"equipment?from=school"})}else{var e=JSON.parse(JSON.stringify(this.preset)),a=e.school.element;e.school=this.school,a&&(e.element=a),(0,n.startCalculate)(e),this.index<99?(this.$store.commit("changeProfile",{temp:e,index:this.index}),this.$store.commit("setPreset",e)):(this.$store.commit("storePreset",e),this.$store.commit("setPreset",e)),uni.navigateBack({delta:1})}},selectSchoolIndex:function(t){var e,a=null===(e=this.schoolArr[t])||void 0===e?void 0:e.id;this.schoolIndex=t;var r=this.schoolArr[t];r.index=t,this.school=r,this.getInfo(a)},getInfo:function(t){if(t){var e=t.replace("-","");this.character[e]?this.info=this.character[e]:this.info=this.character.default}else this.info=this.character.default}}};e.default=l}).call(this,a("5a52")["default"])},"971c":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={uniIcons:a("fcef").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-section",style:{backgroundColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-section-header",attrs:{nvue:!0}},[t.type?a("v-uni-view",{staticClass:"uni-section__head"},[a("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),a("v-uni-view",{staticClass:"uni-list-item__content"},[t.title?a("v-uni-text",{staticClass:"uni-list-item__content-title"},[t._v(t._s(t.title))]):t._e(),t.subTitle?a("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.subTitle))]):t._e()],1),a("v-uni-view",{staticClass:"uni-section__content__extra"},[t._t("extra",[t.rightText?a("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e()])],2),t.showArrow?a("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:14,type:"arrowright"}}):t._e()],1),a("v-uni-view",{style:{padding:t.padding?"10px":""}},[t._t("default")],2)],1)},n=[]},a151:function(t,e,a){"use strict";var r=a("dc0c"),i=a.n(r);i.a},a1f1:function(t,e,a){"use strict";var r=a("32d0"),i=a.n(r);i.a},aade:function(t,e,a){"use strict";(function(t){a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getBestTag=function(e){var r,o=e.preset,s=Number(o.adapt.total),c=["hp","atk","def","em","cr","cd","er","cu","eb","eb"],l=[],u=(0,i.default)(o.output[0]);try{for(u.s();!(r=u.n()).done;){var d=r.value;l.push(c[d])}}catch(S){u.e(S)}finally{u.f()}for(var f=a("00d0"),v={},h=o.adapt.method,p=0;p<o.adapt.min.length;p++){var g=o.adapt.min[p];g&&g>0&&(v[c[p]]=[g,100])}var x=JSON.parse(JSON.stringify(o));x.aConfigs=null;var b=o.adapt.max?Number(o.adapt.max)+18:18;t.log(b);try{Date.now();var m=f.maximize((function(t){var a=t.cr+t.cd;if(a>b)return 0;var r=JSON.parse(JSON.stringify(x)),i=r.cPanel;r.aMinor[0]=(.05*t.hp+i["HP_PERCENT"][1])*i["HP"][0]+i["HP"][1],r.aMinor[1]=(.05*t.atk+i["ATTACK_PERCENT"][1])*i["ATTACK"][0]+i["ATTACK"][1],r.aMinor[2]=(.062*t.def+i["DEFENSE_PERCENT"][1])*i["DEFENSE"][0],r.aMinor[3]=20*t.em+100*i["ELEMENT_MASTERY"][1],r.aMinor[4]=3.3*t.cr+100*i["CRITICAL"][1],r.aMinor[5]=6.6*t.cd+100*i["CRITICAL_HURT"][1],r.aMinor[6]=5.5*t.er+100*i["CHARGE_EFFICIENCY"][1];var s={};return s=h[0]>0&&o.gResult?(0,n.buildGroupAttribute)(r):(0,n.buildAttribute)(r),e.calculator.get(s),Number(s.score)}),s,["eb"],l,v,["BruteTwice","NelderMeadBrute","Brute"][h[1]]),_=(Date.now(),m.statBest);e.preset.tagNum=[_.hp,_.atk,_.def,_.em,_.cr,_.cd,_.er],t.log(_)}catch(w){t.error(w)}};var i=r(a("b85c"));a("a9e3"),a("e9c4"),a("14d9");var n=a("149f")}).call(this,a("5a52")["default"])},b209:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.getColor=function(t){var e=t/25;e<0&&(e=0);e>4&&(e=4);return r[Math.floor(e)]};e.default=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"];var r=["rgb(125,127,131)","rgb(108,168,139)","rgb(86,155,175)","rgb(177,135,195)","rgb(211,159,81)"]},b2cc:function(t,e,a){"use strict";a.r(e);var r=a("96a9"),i=a.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},bcee:function(t,e,a){"use strict";var r=a("e52b"),i=a.n(r);i.a},bfb4:function(t,e,a){"use strict";a.r(e);var r=a("949d"),i=a("24db");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("a1f1");var o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"03b6d5de",null,!1,r["a"],void 0);e["default"]=s.exports},dc0c:function(t,e,a){var r=a("77c2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("4ca21a20",r,!0,{sourceMap:!1,shadowMode:!1})},e265:function(t,e,a){"use strict";a.r(e);var r=a("748d"),i=a("3d37");for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("bcee");var o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"d83b913c",null,!1,r["a"],void 0);e["default"]=s.exports},e52b:function(t,e,a){var r=a("1dfd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("1143f6dc",r,!0,{sourceMap:!1,shadowMode:!1})},f15d:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.bg-y[data-v-c5b075ba]{background-color:#fff}.uni-list-item__content[data-v-c5b075ba]{display:flex;padding-right:8px;flex:1;color:#3b4144;flex-direction:column;justify-content:space-between;overflow:hidden}.uni-list-item__content-title[data-v-c5b075ba]{font-size:14px;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-c5b075ba]{margin-top:%?6?%;color:#999;font-size:12px;overflow:hidden}.uni-section-header[data-v-c5b075ba]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section__head[data-v-c5b075ba]{flex-direction:row;justify-content:center;align-items:center;margin-right:10px}.line[data-v-c5b075ba]{height:12px;background-color:#b1968b;border-radius:10px;width:4px}.circle[data-v-c5b075ba]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#b1968b}.uni-section__content[data-v-c5b075ba]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section__content-title[data-v-c5b075ba]{font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.distraction[data-v-c5b075ba]{flex-direction:row;align-items:center}.uni-section__content-sub[data-v-c5b075ba]{font-size:12px;color:#999;line-height:16px;margin-top:2px}.uni-section__content__extra[data-v-c5b075ba]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-icon-wrapper[data-v-c5b075ba]{display:flex;align-items:center;padding-left:10px;color:#999!important}.uni-list-item__extra-text[data-v-c5b075ba]{font-size:13px;color:#999}',""]),t.exports=e},f86f:function(t,e,a){var r=a("f15d");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("ba9834aa",r,!0,{sourceMap:!1,shadowMode:!1})},fedd:function(t,e,a){"use strict";(function(t){a("7a82");var r=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createPreset=function(t){var e=f.charactersData[t];return h(e)},e.getPreset=function(e){var a=f.charactersData[e],r=uni.getStorageSync(e);return r?(r.version&&v==r.version||(p(r),t.log("刷新！！"),uni.setStorageSync(r.cId,r)),r):h(a)},e.initPreset=h,e.startCalculate=p,e.version=void 0,a("e9c4"),a("c975"),a("14d9");var i=r(a("5530")),n=a("0b7e"),o=a("175e"),s=a("aade"),c=a("433a"),l=a("7a53"),u=a("e194"),d=a("0d89"),f=a("4432"),v="2022年8月24日 15:37:17";function h(t,e){var a,r=e||t.name;"kong"==r&&(r="traveller");var n=t.element,o=null!==(a=c.characterDamage[r])&&void 0!==a?a:c.characterDamage[t.name];"traveller"==r&&(n=o.element);var s={cId:t.name,element:n,id:Date.now(),name:"默认预设",cSkills:[8,8,8],cLevel:90,wLevel:90,cAscend:!1,wAscend:!1,effects:[],isAdapt:void 0,type:0,reactionText:""};4==t.star&&(s.cSkills=[8,11,11]);var l=d.weaponsData[o.preset.wId];s.wStage=5==l.star?0:4,s.cStage=5==t.star?0:6;var u=(0,i.default)((0,i.default)({},s),o.preset);return u.aTagToMinor=!0,u}function p(e){var a,r=f.charactersData[e.cId];e.school||(e.school={name:"默认",score:!0,reaction:0});var i=e.school.id;i&&(a=c.characterDamage[i]),a||(a=c.characterDamage[e.cId]);var h=d.weaponsData[e.wId];e.element=a.element?a.element:r.element,e.energy=r.energy,e.wType=h.type,e.wName=h.chs,e.version=v,e.school.stage&&e.cStage<e.school.stage&&(e.cStage=e.school.stage);var p=[];if(p=a.output?JSON.parse(JSON.stringify(a.output)):r.output?JSON.parse(JSON.stringify(r.output)):[[1,4,5]],void 0==e.school.reaction&&r.schools){var g=r.schools[0];g.reaction||(g.reaction=0),e.school=g}if(e.school.reaction>0&&p[0].indexOf(3)<0&&p[0].push(3),"5jueyuan"!=e.aIds[0]||e.aSets||p[0].indexOf(6)<0&&p[0].push(6),!e.school.tagNum){var x=p[0],b=[0,0,0,0,0,0,0],m=x.length;if(-1==x.indexOf(5)){for(var _=0;_<m;_++){var S=x[_];b[S]=0==_?9:1==_?4:3}b[x[0]]=9,b[x[1]]=4}else for(_=0;_<m;_++){var w=x[_];b[w]=4==w||5==w?9:0==_?4:3}e.school.tagNum=b,t.log("初始化默认词条："+b)}if(e.tagNum||1!=e.aTagToMinor||(e.tagNum=JSON.parse(JSON.stringify(e.school.tagNum)),e.isAdapt=!0,e.adapt={type:0,limit:1,method:[0,0,0],total:24,min:[],max:0},t.log("重置当前词条："+e.tagNum)),e.output=p,e.wIndexs||(h.forceOption&&h.forceOption[e.cId]?e.wIndexs=h.forceOption[e.cId]:e.wIndexs=h.indexs),!e.aIndexs&&!e.aSets){var y=u.artifactsData[e.aIds[0]];y.forceOption&&y.forceOption[e.cId]?e.aIndexs=y.forceOption[e.cId]:e.aIndexs=y.indexs}e.cPanel||(e.cPanel={HP:[0,0],HP_PERCENT:[0,0],ATTACK:[0,0],ATTACK_PERCENT:[0,0],DEFENSE:[0,0],DEFENSE_PERCENT:[0,0],FIRE_ADD_HURT:[0,0],ICE_ADD_HURT:[0,0],ROCK_ADD_HURT:[0,0],ELEC_ADD_HURT:[0,0],WIND_ADD_HURT:[0,0],WATER_ADD_HURT:[0,0],GRASS_ADD_HURT:[0,0],PHYSICAL_ADD_HURT:[0,0],HEAL_ADD:[0,0],ELEMENT_MASTERY:[0,0],CRITICAL:[0,0],CRITICAL_HURT:[0,0],CHARGE_EFFICIENCY:[0,0]}),e.uid||(0,o.getMajorData)(e);var T={character:r,preset:e,calculator:a,weapon:h};(0,o.getBaseData)(T),e.isAdapt&&0!=e.adapt.type&&((0,s.getBestTag)(T),t.log("自动计算最优")),(0,l.convertMinor)(e),(0,n.getBaseScore)(T),(0,n.getGroupScore)(T),(0,n.getDataScore)(T),(0,n.getTagScore)(T),(0,n.getWeightScore)(T),(0,n.getGWeightScore)(T)}e.version=v}).call(this,a("5a52")["default"])}}]);