"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[9262],{69262:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var n=l(59835),t=l(60499),s=l(86970),i=l(18910),u=l(99407),d=l(98030),c=l(23459),r=l(46190),o=l(6827),m=l(17779),p=l(95269)["Buffer"];const g=(0,n._)("div",{class:"",style:{height:"60px"}},null,-1),w={key:0,class:"q-mb-lg"},v={key:1,class:""},y=(0,n._)("p",null,"Основная информация",-1),b={class:"row q-col-gutter-md q-mb-lg"},f={class:"col-6"},q={class:"col-6"},h=(0,n._)("p",{class:"q-mb-none text-weight-medium"},"ФИО",-1),k={class:"q-mb-none text-caption"},_=(0,n._)("p",{class:"q-mb-none text-weight-medium"},"Пол",-1),x={class:"q-mb-none text-caption"},S=(0,n._)("p",{class:"q-mb-none text-weight-medium"},"Дата рождения",-1),U={class:"q-mb-none text-caption"},H={key:0,class:"text-negative"},W={key:1,class:"text-negative"},C={name:"VerifyPerson",setup(e){const a=(0,i.tv)(),l=(0,c.Q)(),C=(0,r.c)();let D=(0,t.iH)(!1),z=(0,t.iH)(null),A=(0,t.iH)(null),F=(0,t.iH)(null),P=(0,t.iH)(null),Q=(0,t.iH)(null),V=(0,t.iH)(null),Z=(0,t.iH)(null);(0,n.Fl)((()=>C.addresses[C.currentAddressIdx].publicKey)),(0,n.Fl)((()=>C.addresses[C.currentAddressIdx].address));async function I(){const e=await l.getKeyPair(),a=await d.era.tranRawPersonCertify(e,P.value,!1);m.log(a),a.raw&&(Q.value=a.raw,Z.value=a.fee)}async function R(){D.value=!0,await I(),await B(),D.value=!1}async function B(){const e=await d.era.broadcast(Q.value);m.log(e),o.Z.create({color:"info",message:e.message}),D.value=!1,await a.back()}const E=async()=>{D.value=!D.value;const e=await u.EraChain.Type.PersonHuman.parse(A.value);m.log(e),P.value=e,F.value={name:e.name,desc:e.description,image:"data:image/png;base64,"+p.from(e.image).toString("base64"),birthday:e.birthday,deathday:e.deathday,gender:e.gender},D.value=!D.value};function K(){const e=new FileReader;e.addEventListener("load",(async()=>{A.value=e.result,await E()}),!1),z.value&&e.readAsText(z.value)}return(e,a)=>{const l=(0,n.up)("page-header"),i=(0,n.up)("q-file"),u=(0,n.up)("q-btn"),d=(0,n.up)("q-img"),c=(0,n.up)("page-body"),r=(0,n.up)("page");return(0,n.wg)(),(0,n.j4)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"q-px-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(l),g,(0,t.SU)(P)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(i,{rounded:"",modelValue:(0,t.SU)(z),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.dq)(z)?z.value=e:z=e),accept:".txt",dense:"",label:"Выберите файл с raw кодом",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,n.Wm)(u,{rounded:"",onClick:K,"no-caps":"",unelevated:"",class:"full-width q-py-md",color:"primary",label:"Проверить RAW код"})])),(0,t.SU)(F)?((0,n.wg)(),(0,n.iD)("div",v,[y,(0,n._)("div",b,[(0,n._)("div",f,[(0,n.Wm)(d,{src:(0,t.SU)(F).image},null,8,["src"])]),(0,n._)("div",q,[h,(0,n._)("p",k,(0,s.zw)((0,t.SU)(F).name),1),_,(0,n._)("p",x,(0,s.zw)(0===(0,t.SU)(F).gender?"Мужской":"Женский"),1),S,(0,n._)("p",U,(0,s.zw)(new Date((0,t.SU)(F).birthday).toLocaleDateString()),1)])]),(0,t.SU)(V)?((0,n.wg)(),(0,n.iD)("p",H,"Комиссия первой транзакции: "+(0,s.zw)((0,t.SU)(V)),1)):(0,n.kq)("",!0),(0,t.SU)(Z)?((0,n.wg)(),(0,n.iD)("p",W,"Комиссия транзакции: "+(0,s.zw)((0,t.SU)(Z)),1)):(0,n.kq)("",!0),(0,n.Wm)(u,{onClick:R,rounded:"",loading:(0,t.SU)(D),"no-caps":"",unelevated:"",class:"full-width q-py-md",color:"primary",label:"Верифицировать"},null,8,["loading"])])):(0,n.kq)("",!0)])),_:1})])),_:1})}}};var D=l(33837),z=l(24455),A=l(91487),F=l(69984),P=l.n(F);const Q=C,V=Q;P()(C,"components",{QFile:D.Z,QBtn:z.Z,QImg:A.Z})}}]);