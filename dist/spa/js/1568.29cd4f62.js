"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[1568],{51568:(e,a,l)=>{l.r(a),l.d(a,{default:()=>L});var t=l(59835),u=l(86970),s=l(60499),n=l(91569),o=l(18910),p=l(46190),r=l(31655),d=l(87270);const v=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),i={class:"q-mb-sm"},m={class:"text-bold"},_=(0,t.Uk)(", минимальный объем "),c={class:"text-bold"},w={class:"text-bold"},y=(0,t._)("br",null,null,-1),b=(0,t.Uk)(" Разместил пользователь "),f=["href"],g=(0,t.Uk)("Верифицирован"),k=(0,t.Uk)("Не верифицирован"),U=(0,t.Uk)("В сети"),x=(0,t.Uk)("Не в сети"),h=(0,t.Uk)(" сделок проведено "),z={class:"text-bold"},F=(0,t._)("br",null,null,-1),q=(0,t._)("span",{class:"text-bold"},"Условия сделки:",-1),$=(0,t._)("br",null,null,-1),W=(0,t._)("span",{class:"text-bold"},null,-1),S=(0,t.Uk)("Введите объем сделки минимум: "),j={class:"text-bold"},V=(0,t.Uk)(", максимум: "),Q={class:"text-bold"},Z=(0,t._)("p",null,"Выберите платежную систему",-1),C={key:0,class:"text-negative text-bold"},H=(0,t.Uk)(" Y вас нет выбранной платежной системы. Добавьте ее "),B=(0,t.Uk)("тут"),I=(0,t.Uk)(" или выберите другую."),A={name:"Offer",setup(e){const a=(0,o.yj)(),l=(0,o.tv)(),A=(0,p.c)(),D=(0,r.T)(),O=(0,s.iH)({asset:{name:""},user:{wallet:"",total_trades:0}}),T=(0,s.iH)(null),Y=(0,s.iH)(null),E=(0,s.iH)(!1),G=(0,t.Fl)((()=>D.user)),J=(0,t.Fl)((()=>{if(Y.value){let e=Y.value.payment_type.id;return G.value.payment_types.filter((a=>a.payment_type.id===e))}return!1})),K=(0,t.Fl)((()=>{if(Y.value){let e=Y.value.payment_type.id;return N.value?G.value.payment_types.filter((a=>a.payment_type.id===e)):O.value.user.payment_types.filter((a=>a.payment_type.id===e))}})),L=(0,t.Fl)((()=>N.value?`Продать ${T.value} ${O.value.asset.name} на ${X.value} руб`:`Купить ${T.value} ${O.value.asset.name} на ${X.value} руб`)),M=(0,t.Fl)((()=>R.value?N.value?"negative":"positive":"grey-7")),N=(0,t.Fl)((()=>O.value.is_sell?O.value.user.wallet===G.value.wallet:O.value.user.wallet!==G.value.wallet)),P=(0,t.Fl)((()=>A.addresses[A.currentAddressIdx].address)),R=(0,t.Fl)((()=>parseFloat(T.value)>=O.value.min_amount&&parseFloat(T.value)<=O.value.amount&&Y.value&&K.value.length>0)),X=(0,t.Fl)((()=>{if(T.value)return parseFloat(T.value)*O.value.course}));async function ee(){E.value=!E.value;const e=await n.h.post("/api/p2p/create_trade",{offer_id:O.value.id,amount:T.value,asset_amount_without_commission:parseFloat(T.value-.01*T.value).toFixed(5),payment_type:K.value[0].id,opponent:P.value});e.data.success?(0,d.d)("positive",e.data.message):(0,d.d)("negative",e.data.message),E.value=!E.value,await D.get_own_trades(),l.push({name:"p2p_index"})}return(0,t.wF)((async()=>{let e=a.params.offer_id;const l=await n.h.get(`/api/p2p/offer?id=${e}`);O.value=l.data})),(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-badge"),o=(0,t.up)("q-separator"),p=(0,t.up)("q-btn"),r=(0,t.up)("q-input"),d=(0,t.up)("q-select"),A=(0,t.up)("router-link"),D=(0,t.up)("page-body"),G=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{route_name:"p2p_index"}),v,(0,t._)("p",i,[(0,t.Uk)(" Оффер #"+(0,u.zw)(O.value.id)+" на "+(0,u.zw)(O.value.is_sell?"продажу":"покупку")+" ",1),(0,t._)("span",m,(0,u.zw)(O.value.amount)+" "+(0,u.zw)(O.value.asset.name),1),_,(0,t._)("span",c,(0,u.zw)(O.value.min_amount)+" "+(0,u.zw)(O.value.asset.name),1),(0,t.Uk)(", курс "+(0,u.zw)(O.value.is_sell?"покупки":"продажи")+" ",1),(0,t._)("span",w,(0,u.zw)(O.value.course)+" руб.",1),y,b,(0,t._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${O.value.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold",target:"_blank"},(0,u.zw)(O.value.user.fio?O.value.user.fio:O.value.user.wallet),9,f),O.value.user.fio?((0,t.wg)(),(0,t.j4)(n,{key:0,color:"positive"},{default:(0,t.w5)((()=>[g])),_:1})):((0,t.wg)(),(0,t.j4)(n,{key:1,color:"negative"},{default:(0,t.w5)((()=>[k])),_:1})),O.value.user.is_online?((0,t.wg)(),(0,t.j4)(n,{key:2,color:"positive"},{default:(0,t.w5)((()=>[U])),_:1})):((0,t.wg)(),(0,t.j4)(n,{key:3,color:"negative"},{default:(0,t.w5)((()=>[x])),_:1})),h,(0,t._)("span",z,(0,u.zw)(O.value.user.total_trades),1),F,q,$,(0,t.Uk)((0,u.zw)(O.value.rules),1)]),(0,t.Wm)(o,{spaced:"md"}),W,(0,t._)("p",null,[S,(0,t._)("span",j,(0,u.zw)(O.value.min_amount)+" "+(0,u.zw)(O.value.asset.name),1),V,(0,t._)("span",Q,(0,u.zw)(O.value.amount)+" "+(0,u.zw)(O.value.asset.name),1)]),(0,t.Wm)(r,{outlined:"",rounded:"",modelValue:T.value,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value=e),type:"number",label:`Объем сделки в ${O.value.asset.name}`,class:"q-mb-md"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:a[0]||(a[0]=e=>T.value=O.value.amount),size:"10px",unelevated:"",color:"primary","no-caps":"",rounded:"",label:"Максимум"})])),_:1},8,["modelValue","label"]),Z,(0,t.Wm)(d,{outlined:"",rounded:"",modelValue:Y.value,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.value=e),options:O.value.payment_types,class:"q-mb-md",label:"Платежная система",behavior:"dialog"},null,8,["modelValue","options"]),Y.value&&!(0,s.SU)(J).length>0?((0,t.wg)(),(0,t.iD)("p",C,[H,(0,t.Wm)(A,{to:{name:"p2p_user"}},{default:(0,t.w5)((()=>[B])),_:1}),I])):(0,t.kq)("",!0),(0,t.Wm)(p,{disable:!(0,s.SU)(R),label:(0,s.SU)(R)?(0,s.SU)(L):"Заполните все поля",class:"full-width q-py-md",color:(0,s.SU)(M),"no-caps":"",onClick:ee,loading:E.value,rounded:"",unelevated:""},null,8,["disable","label","color","loading"])])),_:1})])),_:1})}}};var D=l(20990),O=l(50926),T=l(13119),Y=l(24455),E=l(18401),G=l(69984),J=l.n(G);const K=A,L=K;J()(A,"components",{QBadge:D.Z,QSeparator:O.Z,QInput:T.Z,QBtn:Y.Z,QSelect:E.Z})}}]);