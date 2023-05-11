"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[156],{75008:(e,a,l)=>{l.d(a,{C:()=>u,d:()=>n});var t=l(13433),s=l(17779);const n=({seed:e,password:a})=>{const l={status:!0,seed:e},s=t.createCipher("aes192",a);return s.update(JSON.stringify(l),"utf8","hex")+s.final("hex")},u=({hash:e,password:a})=>{try{const l=t.createDecipher("aes192",a),s=l.update(e,"hex","utf8")+l.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(l){return s.log(l),!1}}},14895:(e,a,l)=>{l.d(a,{Z:()=>h});var t=l(59835),s=l(60499),n=l(43463),u=l(87270),d=l(75008),o=l(17779);const i={props:["transactionInfo"]},c=Object.assign(i,{name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const l=(0,n.s)();function i(e){const t=localStorage.getItem("hash"),s=(0,d.C)({hash:t,password:e});o.log(s),s?(a("pincode_ок"),l.togglePinCodeModalVisible()):(0,u.d)("negative","Неверный пинкод")}return(e,a)=>{const n=(0,t.up)("pin-code"),u=(0,t.up)("q-btn"),d=(0,t.up)("q-card-section"),o=(0,t.up)("q-card"),c=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.j4)(c,{modelValue:(0,s.SU)(l).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(l).pinCodeModalVisible=e),persistent:"",maximized:""},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"bg-white fullscreen"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"flex column items-center justify-center fullscreen"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{showDigits:!1,onPincode_ready:i}),(0,t.Wm)(u,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(l).togglePinCodeModalVisible()),"no-caps":"",color:"negative",label:"Отмена"})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var r=l(32074),m=l(44458),p=l(63190),w=l(24455),f=l(69984),g=l.n(f);const v=c,h=v;g()(c,"components",{QDialog:r.Z,QCard:m.Z,QCardSection:p.Z,QBtn:w.Z})},156:(e,a,l)=>{l.r(a),l.d(a,{default:()=>z});var t=l(59835),s=l(86970),n=l(60499),u=l(39981),d=l.n(u),o=l(87270),i=l(14895),c=l(43463),r=l(18910),m=l(46190),p=l(23459),w=l(98030);const f=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),g=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),v=(0,t.Uk)("Ваш баланс"),h=(0,t.Uk)("Кол-во отправляемого актива*"),_=(0,t.Uk)(" Подтверждение отправки актива "),W=(0,t.Uk)("Актив"),b=(0,t.Uk)("RUB"),k=(0,t.Uk)("Количество"),y=(0,t.Uk)("Комиссия транзакции"),C={key:0},x={name:"NeuroClick",setup(e){const a="https://aunebo.com/k7hvr9uYY7fMZHEf",u=(0,c.s)(),{EraChain:x}=((0,r.tv)(),l(99407)),q=(0,m.c)(),U=(0,p.Q)();let Z=(0,n.iH)(!1);const Q=(0,n.iH)(!1),S=((0,n.iH)(0),(0,r.yj)());let V=(0,n.iH)(null);(0,t.bv)((async()=>{V.value=S.params.asset_key}));const j=(0,t.Fl)((()=>q.balances)),B=(0,t.Fl)((()=>q.addresses[q.currentAddressIdx].address));function P(){u.togglePinCodeModalVisible()}const D=(0,n.iH)({amount:"",address:"7HfxwmBo3wgcbvrDj4pjmM7BxUaYfDc6EW",title:"Пополнение баланса NeuroClick",message:"Пополнение баланса NeuroClick",encrypted:!1,fee:0,raw:0});function H(){D.value={amount:"",address:"7HfxwmBo3wgcbvrDj4pjmM7BxUaYfDc6EW",title:"Пополнение баланса NeuroClick",message:"Пополнение баланса NeuroClick",encrypted:!1,fee:0,raw:0}}async function M(){Q.value=!Q.value;const e=!0,a=await U.getKeyPair(),l=new x.Type.KeyPair(a),t={assetKey:"1643",amount:D.value.amount},s=await w.era.tranRawSendAsset(l,t,D.value.address,D.value.title,D.value.message,D.value.encrypted,e);s.error?(0,o.d)("negative",s.error.message):(D.value.fee=s.fee,D.value.raw=s.raw),Q.value=!Q.value}async function N(){Q.value=!Q.value;const e=await w.era.broadcast64(D.value.raw);if(e.error)(0,o.d)("negative",e.message),Q.value=!Q.value;else{(0,o.d)("info","Транзакция создана"),Z.value=!1;let e={wallet:B.value,amount:D.value.amount};const l=(0,o.encryptPayload)(e),t=await d().post(a,{data:l});t.data.success&&(0,o.d)("positive","Баланс пополнен")}Q.value=!Q.value}return(e,a)=>{const l=(0,t.up)("page-header"),u=(0,t.up)("q-item-section"),d=(0,t.up)("q-item"),o=(0,t.up)("q-input"),c=(0,t.up)("q-separator"),r=(0,t.up)("btn"),m=(0,t.up)("q-list"),p=(0,t.up)("q-card-section"),w=(0,t.up)("page-body"),x=(0,t.up)("q-btn"),q=(0,t.up)("q-card-actions"),U=(0,t.up)("q-card"),S=(0,t.up)("q-dialog"),V=(0,t.up)("page"),B=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(V,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),f,g,(0,t.Wm)(p,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{side:"",class:"text-weight-bold text-dark"},{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,n.SU)(j)[1643][0][1])+" RUB",1)])),_:1})])),_:1}),(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[h])),_:1})])),_:1}),(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{rounded:"",dense:"",outlined:"",type:"number",modelValue:D.value.amount,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value.amount=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(c,{class:"q-my-md"}),(0,t.Wm)(r,{label:"Отправить",onClick:P,disabled:!D.value.amount||!D.value.address,outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(S,{modelValue:(0,n.SU)(Z),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,n.dq)(Z)?Z.value=e:Z=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:H},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"text-weight-bold"},{default:(0,t.w5)((()=>[_])),_:1}),(0,t.Wm)(p,{class:"q-py-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{dense:"",separator:"",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[b])),_:1})])),_:1}),(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[k])),_:1}),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(D.value.amount)+" RUB",1)])),_:1})])),_:1}),(0,t.Wm)(d,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(u,{class:"text-caption"},{default:(0,t.w5)((()=>[D.value.fee>0?((0,t.wg)(),(0,t.iD)("span",C,"газ "+(0,s.zw)(D.value.fee)+" OLF",1)):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(q,{class:"bg-white text-teal"},{default:(0,t.w5)((()=>[0===D.value.fee?((0,t.wg)(),(0,t.j4)(x,{key:0,label:"Расчет комиссии",rounded:"",loading:Q.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:M,outline:!1},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(x,{key:1,label:"Подтвердить",rounded:"",loading:Q.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:N,outline:!1},null,8,["loading"])),(0,t.wy)((0,t.Wm)(x,{label:"Отменить",rounded:"","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:Q.value},null,8,["loading"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,n.SU)(i.Z),{onPincode_ок:a[2]||(a[2]=e=>(0,n.dq)(Z)?Z.value=!0:Z=!0)})])),_:1})}}};var q=l(63190),U=l(13246),Z=l(490),Q=l(76749),S=l(13119),V=l(50926),j=l(32074),B=l(44458),P=l(11821),D=l(24455),H=l(62146),M=l(69984),N=l.n(M);const I=x,z=I;N()(x,"components",{QCardSection:q.Z,QList:U.Z,QItem:Z.Z,QItemSection:Q.Z,QInput:S.Z,QSeparator:V.Z,QDialog:j.Z,QCard:B.Z,QCardActions:P.Z,QBtn:D.Z}),N()(x,"directives",{ClosePopup:H.Z})}}]);