(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-detail~pages-team-team"],{"34ca":function(e,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(n("a8d4")),l=a(n("5cad")),t=a(n("da4e")),g=a(n("f870")),u={id:"leishenguojiadui2",name:"雷神国家队 ",note:"21秒轴",sTitle:"雷神国家队 21秒轴",sText:"总伤害 / 占比",from:{name:"NGA @梦魇敌酋",url:"https://nga.178.com/read.php?tid=30761946"},title:"阵容DPS",text:"阵容DPS",time:21,bg:"bg-purple",cIds:["leidianjiangjun","xingqiu","bannite","xiangling"],skillFamilies:[s.default,l.default,t.default,g.default],teamBuffs:[],result:{score:0,color:""},members:{leidianjiangjun:{id:"leidianjiangjun",skill:s.default,requires:[{title:"雷神充能低于204.25%",recharge:2.0425,type:0,value:2.0425},{type:3,value:0,note:"0命按54层原力，1命及以上按60层计算"}]},xingqiu:{id:"xingqiu",skill:l.default,requires:[{title:"行秋充能低于146.97%",recharge:1.4697,type:0,value:1.4697}]},bannite:{id:"bannite",skill:t.default,requires:[{title:"班尼特充能低于119.11%",recharge:1.1911,type:0,value:1.1911}]},xiangling:{id:"xiangling",skill:g.default,requires:[{title:"香菱座低于四命",cStage:4,type:1,value:4},{title:"香菱充能低于180.71%",recharge:1.8071,type:0,value:1.8071}]}},results:[{id:"leidianjiangjun",title:"E ",actions:[{title:"恶曜开眼 E1+E2 * 9",skills:["e1","e2"],repeat:[1,9],wConfigs:{ticaozhidaoguang:{indexs:[0]}}},{title:"恶曜开眼 E2 * 9",buffs:["banniteQ","5zongshi"],skills:["e2"],repeat:[9],wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]},{id:"bannite",title:"E    ",text:"1s",actions:[{title:"热情过载 E",skills:["e1"]},{index:1,title:"超载",reaction:4,repeat:[1]}]},{id:"xingqiu",title:"Q E 吃球",text:"3s",actions:[{index:1,buffs:["xingqiu2"],title:"画雨笼山 E",skills:["e1","e2"]},{index:1,title:"裁雨留虹 Q * 5",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[5]},{index:1,title:"裁雨留虹 Q * 30",buffs:["5zongshi","leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[30]},{index:1,title:"裁雨留虹 Q * 10",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[10]},{index:1,title:"感电 * 9",reaction:2,buffs:[],repeat:[9]}]},{id:"bannite",title:"Q E    ",text:"2s",actions:[{title:"美妙旅程 Q",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"热情过载 E",type:1,buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"超载",reaction:4,repeat:[1]}]},{id:"xiangling",title:"Q E  ",text:"3s",actions:[{title:"旋火轮 Q1",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"旋火轮 Q2+Q3",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling6"],skills:["q2","q3"]},{title:"旋火轮 Q4 * 3",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q4"],repeat:[3]},{title:"旋火轮 Q4",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"]},{title:"旋火轮 Q4 * 7",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"],repeat:[7]},{title:"锅巴出击 E",buffs:["banniteQ","bannite6","5zongshi","xiangling6"],type:1,skills:["e1"],repeat:[1]},{type:1,title:"锅巴出击 E * 3",skills:["e1"],buffs:["banniteQ","bannite6","5zongshi","xiangling1","xiangling6"],repeat:[3]},{index:1,title:"超载 * 3",reaction:4,repeat:[3]},{index:1,title:"超载 * 4",reaction:4,buffs:["xiangling1"],repeat:[4]}]},{id:"bannite",title:"E     ",text:"1s",actions:[{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{index:1,title:"超载",reaction:4,repeat:[1]}]},{id:"leidianjiangjun",title:"Q AAAZ AAAZ AAAZ AZ ",text:"10s",actions:[{index:0,name:"Q+AAAZ+AAAZ",title:"梦想真说 Q+AAAZ * 2",buffs:["banniteQ","leidianjiangjunE","5zongshi"],skills:["q1","qa1","qa2","qa3","qb1","qb2","qbonus1","qbonus2"],repeat:[1,2,2,2,2,2,54,540],extraNote:"54层愿力",stage:[{num:1,type:"skill",skills:["qbonus1","qbonus2"],repeat:[6,60]}],skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AAAZ",buffs:["leidianjiangjunE","banniteQ"],skills:["qbonus2","qa1","qa2","qa3","qb1","qb2"],repeat:[270,1,1,1,1,1],stage:[{num:1,type:"skill",skills:["qbonus2"],repeat:[30]}],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[30],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AZ",buffs:["leidianjiangjunE"],skills:["qbonus2","qa1","qb1","qb2"],repeat:[162,1,1,1],extraNote:"54层愿力",stage:[{num:1,type:"skill",skills:["qbonus2"],repeat:[18]}],skillFix:{stage:1,skills:["qbonus2"],repeat:[18],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]}]};i.default=u},4168:function(e,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(n("a8d4")),l=a(n("5cad")),t=a(n("da4e")),g=a(n("f870")),u={id:"leishenguojiadui2",name:"雷神国家队 ",note:"21秒轴",sTitle:"雷神国家队 21秒轴",sText:"总伤害 / 占比",from:{name:"NGA @梦魇敌酋",url:"https://nga.178.com/read.php?tid=30761946"},title:"阵容DPS",text:"阵容DPS",time:21,bg:"bg-purple",cIds:["leidianjiangjun","xingqiu","bannite","xiangling"],skillFamilies:[s.default,l.default,t.default,g.default],teamBuffs:[],result:{score:0,color:""},members:{leidianjiangjun:{id:"leidianjiangjun",skill:s.default,requires:[{title:"雷神充能低于204.25%",recharge:2.0425,type:0,value:2.0425},{type:3,value:0,note:"0命按54层原力，1命及以上按60层计算"}]},xingqiu:{id:"xingqiu",skill:l.default,requires:[{title:"行秋充能低于146.97%",recharge:1.4697,type:0,value:1.4697}]},bannite:{id:"bannite",skill:t.default,requires:[{title:"班尼特充能低于119.11%",recharge:1.1911,type:0,value:1.1911}]},xiangling:{id:"xiangling",skill:g.default,requires:[{title:"香菱座低于四命",cStage:4,type:1,value:4},{title:"香菱充能低于180.71%",recharge:1.8071,type:0,value:1.8071}]}},results:[{id:"leidianjiangjun",title:"E ",actions:[{title:"恶曜开眼 E1+E2 * 9",skills:["e1","e2"],repeat:[1,9],wConfigs:{ticaozhidaoguang:{indexs:[0]}}},{title:"恶曜开眼 E2 * 9",buffs:["banniteQ","5zongshi"],skills:["e2"],repeat:[9],wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]},{id:"bannite",title:"E    ",text:"1s",actions:[{title:"热情过载 E",skills:["e1"]},{index:1,title:"超载",reaction:4,repeat:[1]}]},{id:"xingqiu",title:"Q E 吃球",text:"3s",actions:[{index:1,buffs:["xingqiu2"],title:"画雨笼山 E",skills:["e1","e2"]},{index:1,title:"裁雨留虹 Q * 5",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[5]},{index:1,title:"裁雨留虹 Q * 30",buffs:["5zongshi","leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[30]},{index:1,title:"裁雨留虹 Q * 10",buffs:["leidianjiangjunE","xingqiu2"],skills:["q1"],repeat:[10]},{index:1,title:"感电 * 9",reaction:2,buffs:[],repeat:[9]}]},{id:"bannite",title:"Q E    ",text:"2s",actions:[{title:"美妙旅程 Q",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"热情过载 E",type:1,buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{title:"超载",reaction:4,repeat:[1]}]},{id:"xiangling",title:"Q E  ",text:"3s",actions:[{title:"旋火轮 Q1",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q1"]},{title:"旋火轮 Q2+Q3",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling6"],skills:["q2","q3"]},{title:"旋火轮 Q4 * 3",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi"],skills:["q4"],repeat:[3]},{title:"旋火轮 Q4",buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"]},{title:"旋火轮 Q4 * 7",type:1,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","xiangling1"],skills:["q4"],repeat:[7]},{title:"锅巴出击 E",buffs:["banniteQ","bannite6","5zongshi","xiangling6"],type:1,skills:["e1"],repeat:[1]},{type:1,title:"锅巴出击 E * 3",skills:["e1"],buffs:["banniteQ","bannite6","5zongshi","xiangling1","xiangling6"],repeat:[3]},{index:1,title:"超载 * 3",reaction:4,repeat:[3]},{index:1,title:"超载 * 4",reaction:4,buffs:["xiangling1"],repeat:[4]}]},{id:"bannite",title:"E     ",text:"1s",actions:[{title:"热情过载 E",buffs:["banniteQ","bannite6","5zongshi"],skills:["e1"]},{index:1,title:"超载",reaction:4,repeat:[1]}]},{id:"leidianjiangjun",title:"Q AAAZ AAAZ AAAZ AZ ",text:"10s",actions:[{index:0,name:"Q+AAAZ+AAAZ",title:"梦想真说 Q+AAAZ * 2",buffs:["banniteQ","leidianjiangjunE","5zongshi"],skills:["q1","qa1","qa2","qa3","qb1","qb2","qbonus1","qbonus2"],repeat:[1,2,2,2,2,2,54,540],extraNote:"54层愿力",stage:[{num:1,type:"skill",skills:["qbonus1","qbonus2"],repeat:[6,60]}],skillFix:{stage:1,skills:["qbonus1","qbonus2"],repeat:[6,60],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AAAZ",buffs:["leidianjiangjunE","banniteQ"],skills:["qbonus2","qa1","qa2","qa3","qb1","qb2"],repeat:[270,1,1,1,1,1],stage:[{num:1,type:"skill",skills:["qbonus2"],repeat:[30]}],extraNote:"54层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[30],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AZ",buffs:["leidianjiangjunE"],skills:["qbonus2","qa1","qb1","qb2"],repeat:[162,1,1,1],extraNote:"54层愿力",stage:[{num:1,type:"skill",skills:["qbonus2"],repeat:[18]}],skillFix:{stage:1,skills:["qbonus2"],repeat:[18],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]}]};i.default=u},"644d":function(e,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(n("517b")),l=a(n("2ef3")),t=a(n("15f6")),g=a(n("e7f7")),u={id:"shenhewanxin21",cIds:["shenlilinghua","shenhe","fengyuanwanye","shanhugongxinhai"],name:"神鹤万心",note:"21秒轴",from:{name:"NGA @梦魇敌酋",url:"https://nga.178.com/read.php?tid=31531412"},sTitle:"神鹤万心（21秒）",sText:"总伤害 / 占比",title:"阵容DPS",text:"阵容DPS",time:21,skillFamilies:[s.default,l.default,t.default,g.default],teamBuffs:[],result:{score:0,color:""},members:{shenlilinghua:{id:"shenlilinghua",skill:s.default,requires:[{title:"神里绫华充能低于188.08%",recharge:1.18,type:0,value:1.18},{type:3,value:6,note:"6命一轮循环中按触发两次计算"},{type:3,value:4,note:"4减防御神里开Q后持续至循环结束"},{type:3,value:2,note:"2命两个旋风按吃满计算"}]},shenhe:{id:"shenhe",skill:l.default,requires:[{type:0,value:1.97},{type:2,value:6}]},fengyuanwanye:{id:"fengyuanwanye",skill:t.default,requires:[{type:0,value:1.62},{type:2,value:6}]},shanhugongxinhai:{id:"shanhugongxinhai",skill:g.default,requires:[]}},results:[{id:"shenhe",title:"E ",actions:[{title:"E1",skills:["e1"],repeat:[1],buffs:["5cuilv","5qianyan","shenheT","shuangbing","fengyuanwanyeT"]},{title:"冰翎",skills:["e3"],repeat:[1],buffs:["5cuilv","5qianyan","shenheT","shuangbing","fengyuanwanyeT"]}]},{id:"shenlilinghua",title:"E    ",text:"1s",actions:[{title:"E",buffs:["5cuilv","shenheT","shuangbing","fengyuanwanyeT","shenlilinghuaT2"],skills:["e1"],repeat:[1],wConfigs:{wuqiezhihuiguang:{indexs:[2]}},aConfigs:{"5bingfeng":{indexs:[1]}}},{title:"冰翎",buffs:["5cuilv","shenheT","shuangbing","fengyuanwanyeT","shenlilinghuaT2"],skills:["e1"],repeat:[1],wConfigs:{wuqiezhihuiguang:{indexs:[2]}},aConfigs:{"5bingfeng":{indexs:[1]}},baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:1,buffs:[]}}]},{id:"shenhe",title:"Q",text:"3s",actions:[{buffs:["shenheT","shenheT2","shenheQ","shenhe2","5cuilv","5zongshi","shuangbing","fengyuanwanyeT"],title:"Q1",skills:["q1"],repeat:[1]},{buffs:["shenheT2","shenheQ","shenhe2","5zongshi","5cuilv","shuangbing","fengyuanwanyeT"],title:"Q2*12",skills:["q2"],repeat:[12]},{buffs:["shenheT","shenheT2","shenheQ","shenhe2","5cuilv","5zongshi","shuangbing","fengyuanwanyeT"],title:"冰翎（开q）",skills:["e3"],repeat:[1]},{buffs:["shenheT2","shenheQ","shenhe2","5zongshi","5cuilv","shuangbing","fengyuanwanyeT"],title:"冰翎（Q*3）",skills:["e3"],skillKey:"q",repeat:[3]},{buffs:["shenheT2","shenheQ","shenhe2","5cuilv","5zongshi","shuangbing","fengyuanwanyeT","gongjili","cangguziyouzhishi","5qianyan"],title:"冰翎（Q*4）",skills:["e3"],skillKey:"q",repeat:[4]},{buffs:["shenheT2","shenheQ","shenhe2","5cuilv","shuangbing","fengyuanwanyeT","gongjili","cangguziyouzhishi","5qianyan"],title:"冰翎（Q）",skillKey:"q",skills:["e3"],repeat:[1]}]},{id:"fengyuanwanye",title:"Q",text:"3s",actions:[{buffs:["shenheT2","5zongshi","shuangbing"],title:"Q(风伤)",skills:["q1","q2"],repeat:[1,5]},{buffs:["5cuilv","shenheQ","shenhe2","shenheT2","shenheT","shuangbing","fengyuanwanyeT","5zongshi"],element:"ice",title:"Q(冰伤)*5",skills:["q3"],repeat:[5]},{buffs:["5cuilv","shenheQ","shenhe2","shenheT2","shenheT","shuangbing","fengyuanwanyeT","5zongshi"],element:"ice",title:"冰翎(q)",skills:["q3"],repeat:[5],baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:1,buffs:["5zongshi","5qianyan"]}},{buffs:["5cuilv","shenheQ","shenhe2","shenheT2","shenheT","shuangbing","fengyuanwanyeT","5zongshi"],element:"ice",title:"冰翎*3(q)",skills:["q3"],repeat:[5],baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:3,buffs:["gongjili","5zongshi","5qianyan"]}},{buffs:["5cuilv","shenheQ","shenhe2","shenheT2","shenheT","shuangbing","fengyuanwanyeT","5zongshi"],element:"ice",title:"冰翎(q)",skills:["q3"],repeat:[5],baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:1,buffs:["gongjili","5qianyan"]}},{title:"扩散(冰)*6",reaction:1,buffs:["5cuilv","shenheQ","shenhe2"],repeat:[6]}]},{id:"shanhugongxinhai",title:"E    ",text:"2s",actions:[{title:"E",buffs:["5zongshi","shenheT2"],skills:["e1"],repeat:[7]}]},{id:"shenlilinghua",title:"S A Q Z ",note:"S：闪避",text:"3s",actions:[{title:"A",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenlilinghuaT","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["a1"],wConfigs:{wuqiezhihuiguang:{indexs:[1]}},aConfigs:{"5bingfeng":{indexs:[2]}}},{title:"Z",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenlilinghua4","shenlilinghuaT","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["ab1"],repeat:[3],stage:[{num:6,type:"bonus",value:2.98}],wConfigs:{wuqiezhihuiguang:{indexs:[1]}},aConfigs:{"5bingfeng":{indexs:[2]}}},{title:"Q",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenheT2","shenlilinghua4","shenlilinghuaT","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["q1","q2"],repeat:[19,1],stage:[{num:2,type:"skill",skills:["q1"],repeat:[19*.4]}],wConfigs:{wuqiezhihuiguang:{indexs:[3]}},aConfigs:{"5bingfeng":{indexs:[2]}}},{title:"冰翎（A)",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenlilinghuaT","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["a1","ab1"],wConfigs:{wuqiezhihuiguang:{indexs:[1]}},aConfigs:{"5bingfeng":{indexs:[2]}},baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:1,buffs:["gongjili","5zongshi","5qianyan"]}},{title:"冰翎（q*8)",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenheT2","shenlilinghua4","shenlilinghuaT","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["q1","q2"],repeat:[19,1],wConfigs:{wuqiezhihuiguang:{indexs:[3]}},aConfigs:{"5bingfeng":{indexs:[2]}},baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:8,buffs:["gongjili","5zongshi","5qianyan"]}}]},{id:"shenhe",title:"E     ",text:"1s",actions:[{title:"E1",skills:["e1"],repeat:[1],buffs:["shenheT","shenlilinghua4","shenheQ","shenhe2","shenheT2","shuangbing","fengyuanwanyeT","cangguziyouzhishi","gongjili","5cuilv","5qianyan","5zongshi"]}]},{id:"shenlilinghua",title:"E S A Z ",text:"10s",actions:[{title:"E",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenheT2","shenlilinghuaT","shenlilinghua4","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["e1"],repeat:[1],wConfigs:{wuqiezhihuiguang:{indexs:[3]}}},{title:"A Z",buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","5zongshi","shenheQ","shenhe2","shenheT","shenheT2","shenlilinghuaT","shenlilinghua4","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],skills:["a1","ab1"],repeat:[1,3],wConfigs:{wuqiezhihuiguang:{indexs:[3]}}}]},{id:"fengyuanwanye",title:"E     ",text:"1s",actions:[{title:"e起跳",skills:["e1"],repeat:[1],buffs:["5qianyan","shenlilinghua4","cangguziyouzhishi","gongjili","shuangbing","shenheT2"]},{title:"e下落风伤",skills:["aAir3"],skillKey:"air",repeat:[1],buffs:["5qianyan","shenlilinghua4","cangguziyouzhishi","gongjili","shuangbing"]},{title:"e下落冰伤",skills:["e3"],skillKey:"air",element:"ice",repeat:[1],buffs:["5qianyan","shenlilinghua4","cangguziyouzhishi","gongjili","shuangbing","fengyuanwanyeT","shenheT","shenheQ","shenhe2","5cuilv"]},{title:"冰翎(下落)",skills:["e3"],skillKey:"air",element:"ice",repeat:[1],buffs:["5qianyan","shenlilinghua4","cangguziyouzhishi","gongjili","shuangbing","fengyuanwanyeT","shenheT","shenheQ","shenhe2","5cuilv"],baseAction:{id:"shenhe",skillIndex:1,skillKey:"e3",repeat:1,buffs:["gongjili","5qianyan"]}},{title:"扩散(冰)*2",reaction:1,buffs:["5cuilv","shenheQ","shenhe2","shenheT"],repeat:[2]},{title:"碎冰（物理）",reaction:3,buffs:["shenheQ"],repeat:[1]}]},{id:"shenlilinghua",title:"A A Z S *2 + A A Z    ",note:"*2：重复两次",text:"1s",actions:[{title:"aa",skills:["a1","a2"],buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","shenheT2","shenheT","shenheQ","shenhe2","shenlilinghuaT","shenlilinghua4","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],aConfigs:{"5bingfeng":{indexs:[1]}}},{title:"zaa",skills:["a1","a2","ab1"],buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","shenheT2","shenheT","shenheQ","shenhe2","shenlilinghuaT","shenlilinghua4","shenlilinghuaT2","shuangbing","5cuilv","fengyuanwanyeT"],aConfigs:{"5bingfeng":{indexs:[2]}},wConfigs:{wuqiezhihuiguang:{indexs:[3]}},repeat:[1,1,3]},{title:"z",skills:["ab1"],stage:[{num:6,type:"bonus",value:2.98}],buffs:["cangguziyouzhishi","gongjili","taolongyingjietan","5qianyan","shenheT2","shenheT","shenheQ","shenhe2","shenlilinghuaT2","shenlilinghua4","shuangbing","5cuilv","fengyuanwanyeT"],aConfigs:{"5bingfeng":{indexs:[2]}},wConfigs:{wuqiezhihuiguang:{indexs:[3]}},repeat:[3]},{title:"aa",skills:["a1","a2"],buffs:["cangguziyouzhishi","gongjili","5qianyan","shenheT2","shenheT","shenheQ","shenhe2","shenlilinghuaT2","shenlilinghua4","shuangbing","5cuilv","fengyuanwanyeT"],aConfigs:{"5bingfeng":{indexs:[2]}},wConfigs:{wuqiezhihuiguang:{indexs:[2]}}},{title:"z",skills:["ab1"],buffs:["5qianyan","shenheT2","shenheT","shenheQ","shenhe2","shenlilinghuaT2","shenlilinghua4","shuangbing","5cuilv","fengyuanwanyeT"],repeat:[3],aConfigs:{"5bingfeng":{indexs:[2]}},wConfigs:{wuqiezhihuiguang:{indexs:[2]}}}]},{id:"fengyuanwanye",title:"E     ",text:"1s",actions:[{title:"e起跳",skills:["e1"],repeat:[1],buffs:["5qianyan","shenlilinghua4","shuangbing"]},{title:"e下落风伤",skills:["aAir3"],skillKey:"air",repeat:[1],buffs:["5qianyan","shenlilinghua4","shuangbing"]},{title:"e下落冰伤",skills:["e3"],skillKey:"air",element:"ice",repeat:[1],buffs:["5qianyan","shenlilinghua4","shuangbing","fengyuanwanyeT","5cuilv","shenheT","shenheQ","shenhe2"]},{title:"扩散(冰)*2",reaction:1,buffs:["5cuilv","shenheT","shenheQ","shenhe2"],repeat:[2]}]}]};i.default=u},"8c29":function(e,i,n){var a={"./优雷修班23.js":"ef78","./神鹤万心.js":"644d","./雷九万班24.js":"34ca","./雷神国家队21.js":"4168"};function s(e){var i=l(e);return n(i)}function l(e){if(!n.o(a,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=l,e.exports=s,s.id="8c29"},c670:function(e,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.Teams=void 0,n("d3b7"),n("ddb0");var s=a(n("b85c")),l={};(function(e){var i,n=(0,s.default)(e.keys());try{for(n.s();!(i=n.n()).done;){var a=i.value,t=e(a).default;l[t.id]=t}}catch(g){n.e(g)}finally{n.f()}})(n("8c29"));var t=l;i.Teams=t},ef78:function(e,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(n("a8d4")),l=a(n("9313")),t=a(n("da4e")),g=a(n("d4b0")),u={id:"youleixiuban",name:"优雷修班",note:"23秒轴",sTitle:"优雷修班 23秒轴",sText:"总伤害 / 占比",title:"",text:"",time:23,bg:"bg-cyan",from:{name:"NGA @VanDarkhelmet",url:"https://nga.178.com/read.php?tid=30613715"},cIds:["youla","leidianjiangjun","luoshaliya","bannite"],teamBuffs:[],result:{score:0,color:""},members:{leidianjiangjun:{id:"leidianjiangjun",skill:s.default,requires:[{title:"雷神充能低于166.6%",recharge:1.666,type:0,value:1.666}]},youla:{id:"youla",skill:g.default,requires:[{title:"优菈充能低于127.40%",recharge:1.274,type:0,value:1.28}]},bannite:{id:"bannite",skill:t.default,requires:[{title:"班尼特充能低于173.68%",recharge:1.7368,type:0,value:1.74}]},luoshaliya:{id:"luoshaliya",skill:l.default,requires:[{title:"罗莎莉亚未佩戴西方长枪,可能会影响循环",wId:"xifengchangqiang"},{title:"罗莎莉亚充能低于106.45%",recharge:1.0645,type:0,value:1.07}]}},results:[{id:"leidianjiangjun",title:"E",actions:[{title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi"],skills:["e2"],repeat:[7]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E2 * 7",buffs:["songlaixiangqizhishi","luoshaliyaT","shuangbing"],skills:["e2"],repeat:[7]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E2 * 4",buffs:["shuangbing"],skills:["e2"],repeat:[4]},{wConfigs:{ticaozhidaoguang:{indexs:[0]}},title:"恶曜开眼 E1",skills:["e1"],buffs:[]},{title:"超导 * 6",reaction:0,buffs:[],repeat:[6]}]},{id:"luoshaliya",title:"E",actions:[{title:"噬罪的告解 E",buffs:[],skills:["e11","e12"]}]},{id:"youla",title:"E",actions:[{aConfigs:{cangbai:{indexs:[2]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youlaE","youla1"],title:"凝浪之光剑 E冰剑 * 2",skills:["e3"],repeat:[2]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["shuangbing"],title:"凝浪之光剑 E1",skills:["e1"]}]},{id:"bannite",title:"Q",actions:[{title:"Q",type:2,buffs:["banniteQ","bannite6","leidianjiangjunE","5zongshi","shuangbing","songlaixiangqizhishi"],skills:["q1"]}]},{id:"luoshaliya",title:"Q",actions:[{title:"终命的圣礼 Q1 + Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","leidianjiangjunE"],skills:["q11","q12","q2"],repeat:[1,1,3]},{title:"终命的圣礼 Q2 * 3",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE"],skills:["q2"],repeat:[3]}]},{id:"youla",title:"Qaaaa + Eaaaa",actions:[{aConfig:{cangbai:{level:2}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"凝浪之光剑 Q2",skills:["q2","q3"],repeat:[1,13],stage:[{num:6,type:"skill",skills:["q3"],repeat:[10]}],extraNote:"13层",skillFix:{stage:6,skills:["q3"],repeat:[10],extraNote:"23层"}},{aConfigs:{cangbai:{indexs:[2]}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6","youlaE","youla1"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfigs:{cangbai:{indexs:[2]}},buffs:["5zongshi","songlaixiangqizhishi","banniteQ","leidianjiangjunE","luoshaliyaT","shuangbing","chaodao","youlaE","luoshaliya6","youla1"],title:"冰潮的涡旋 Q光剑",skills:["q2"],repeat:[.5]},{aConfigs:{cangbai:{indexs:[2]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youlaE","youla1"],title:"凝浪之光剑 E冰剑 * 2",skills:["e3"],repeat:[2]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["5zongshi","songlaixiangqizhishi","banniteQ","luoshaliyaT","shuangbing","youla1"],title:"凝浪之光剑 长按E2",skills:["e2"]},{aConfigs:{cangbai:{indexs:[1]}},buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","chaodao","luoshaliya6"],title:"普通攻击 aaaa",skills:["a1","a2","a31","a32","a4"]},{aConfigs:{cangbai:{indexs:[1]}},element:"ice",buffs:["5zongshi","banniteQ","luoshaliyaT","shuangbing","leidianjiangjunE"],title:"凝浪之光剑 Q1",skills:["q1"]}]},{id:"luoshaliya",title:"E",actions:[{title:"噬罪的告解 E",buffs:["banniteQ","shuangbing","luoshaliyaT","youlaE","leidianjiangjunE","songlaxiangqizhishi","5zongshi"],skills:["e11","e12"]}]},{id:"leidianjiangjun",title:"Q AAAZ AAAZ  AZ",actions:[{title:"梦想真说 Q",buffs:["leidianjiangjunE","songlaixiangqizhishi","shuangbing"],skills:["q1","qbonus1"],repeat:[1,50],stage:[{num:1,type:"skill",skills:["qbonus1"],repeat:[10]}],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus1"],repeat:[10],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}},{title:"梦想真说 AAAZ*2 + AZ",buffs:["leidianjiangjunE","songlaixiangqizhishi"],skills:["qa1","qa2","qa3","qb1","qb2","qbonus2"],repeat:[3,2,2,3,3,650],stage:[{num:1,type:"skill",skills:["qbonus2"],repeat:[130]}],extraNote:"50层愿力",skillFix:{stage:1,skills:["qbonus2"],repeat:[130],extraNote:"60层愿力"},wConfigs:{ticaozhidaoguang:{indexs:[1]}}}]}],sequence:[{index:0,title:"E ",text:"1s"},{index:3,title:"E   ",text:"1s"},{index:1,title:"E  ",text:"1s"},{index:2,title:"Q   ",text:"1s"},{index:3,title:"Q      ",text:"1s"},{index:1,title:"Qaaaa + Eaaaa",text:"10s"},{index:3,title:"E      ",text:"1s"},{index:0,title:"Q AAAZ AAAZ  AZ ",text:"7s"}]};i.default=u}}]);