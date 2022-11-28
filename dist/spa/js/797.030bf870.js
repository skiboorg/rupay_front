"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[797],{75008:(e,a,t)=>{t.d(a,{C:()=>d,d:()=>n});var l=t(13433),s=t(17779);const n=({seed:e,password:a})=>{const t={status:!0,seed:e},s=l.createCipher("aes192",a);return s.update(JSON.stringify(t),"utf8","hex")+s.final("hex")},d=({hash:e,password:a})=>{try{const t=l.createDecipher("aes192",a),s=t.update(e,"hex","utf8")+t.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(t){return s.log(t),!1}}},14895:(e,a,t)=>{t.d(a,{Z:()=>v});var l=t(59835),s=t(60499),n=t(43463),d=t(87270),o=t(75008),i=t(17779);const u={props:["transactionInfo"]},c=Object.assign(u,{name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const t=(0,n.s)();function u(e){const l=localStorage.getItem("hash"),s=(0,o.C)({hash:l,password:e});i.log(s),s?(a("pincode_ок"),t.togglePinCodeModalVisible()):(0,d.d)("negative","Неверный пинкод")}return(e,a)=>{const n=(0,l.up)("pin-code"),d=(0,l.up)("q-btn"),o=(0,l.up)("q-card-section"),i=(0,l.up)("q-card"),c=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(c,{modelValue:(0,s.SU)(t).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(t).pinCodeModalVisible=e),persistent:"",maximized:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"bg-white fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"flex column items-center justify-center fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{showDigits:!1,onPincode_ready:u}),(0,l.Wm)(d,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).togglePinCodeModalVisible()),"no-caps":"",color:"negative",label:"Отмена"})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var r=t(32074),m=t(44458),p=t(63190),w=t(24455),f=t(69984),g=t.n(f);const _=c,v=_;g()(c,"components",{QDialog:r.Z,QCard:m.Z,QCardSection:p.Z,QBtn:w.Z})},99797:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Re});var l=t(59835),s=t(60499),n=t(86970),d=t(32743),o=t(76028),i=t(43463),u=t(46190),c=t(18910);const r={class:"q-mb-none q-mr-sm"},m=(0,l._)("div",{class:"",style:{height:"60px"}},null,-1),p={class:"text-right"},w=["href"],f=(0,l.Uk)("Дата"),g=(0,l.Uk)("Создатель"),_={style:{"max-width":"90%"},class:"ellipsis"},v=(0,l.Uk)("Подтверждений"),k=(0,l.Uk)("Размер"),x=(0,l.Uk)("Подпись"),W={style:{"max-width":"100%"},class:"ellipsis"},h=(0,l.Uk)("Получатель"),y={style:{"max-width":"90%"},class:"ellipsis"},b=(0,l.Uk)("Сумма"),U=(0,l.Uk)("Статус"),q=(0,l.Uk)("Выполнена"),S=(0,l.Uk)("Все данные транзакции"),z={style:{"word-break":"break-all"},class:""},Z={props:["transactionInfo"]},C=Object.assign(Z,{name:"TransactionInfo",setup(e){const a=(0,i.s)();return(t,d)=>{const o=(0,l.up)("q-btn"),i=(0,l.up)("q-header"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item"),Z=(0,l.up)("q-badge"),C=(0,l.up)("q-list"),Q=(0,l.up)("q-card-section"),V=(0,l.up)("q-card"),I=(0,l.up)("q-dialog"),j=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(I,{modelValue:(0,s.SU)(a).transactionInfoModalVisible,"onUpdate:modelValue":d[0]||(d[0]=e=>(0,s.SU)(a).transactionInfoModalVisible=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{style:{width:"900px","max-width":"100vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{style:{position:"unset"},class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(o,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[j]]),(0,l._)("p",r,"Транзакция #"+(0,n.zw)(e.transactionInfo.seqNo),1)])),_:1}),m,(0,l.Wm)(Q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("p",p,[(0,l._)("a",{class:"text-dark text-weight-medium",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.transactionInfo.seqNo}&lang=ru`,target:"_blank"}," Открыть в блок-эксплорере",8,w)]),(0,l.Wm)(C,{dense:"",separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.fullDate),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",_,(0,n.zw)(e.transactionInfo.creator),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.creator_name?`${e.transactionInfo.creator_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.confirmations),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.size),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",W,(0,n.zw)(e.transactionInfo.signature),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",y,(0,n.zw)(e.transactionInfo.recipient),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.recipient_name?`${e.transactionInfo.recipient_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[b])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.amount)+" "+(0,n.zw)(e.transactionInfo.asset_name),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{color:"positive","text-color":"white",style:{width:"30%"}},{default:(0,l.w5)((()=>[q])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[S])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.transactionInfo,((e,a)=>((0,l.wg)(),(0,l.j4)(c,{class:"no-padding",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a),1)])),_:2},1024),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",z,(0,n.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var Q=t(32074),V=t(44458),I=t(16602),j=t(24455),H=t(63190),M=t(13246),P=t(490),A=t(76749),D=t(20990),F=t(62146),$=t(69984),B=t.n($);const O=C,K=O;B()(C,"components",{QDialog:Q.Z,QCard:V.Z,QHeader:I.Z,QBtn:j.Z,QCardSection:H.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QBadge:D.Z}),B()(C,"directives",{ClosePopup:F.Z});var L=t(61957),Y=t(14895),N=t(87270),R=t(23459),T=t(98030),E=t(17779);const J=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),G=(0,l.Uk)("Ваш баланс"),X=(0,l._)("p",{class:"text-bold q-mb-none"},"Основная информация",-1),ee=(0,l.Uk)("Кол-во отправляемого актива*"),ae=(0,l.Uk)("Адрес получателя*"),te={id:"video-container"},le=(0,l._)("video",{id:"qr-video"},null,-1),se=[le],ne=(0,l._)("p",{class:"text-bold q-mb-none"},"Сообщение к отправке",-1),de=(0,l.Uk)("Заголовок сообщения"),oe=(0,l.Uk)("Сообщение"),ie=(0,l.Uk)(" Подтверждение отправки актива "),ue=(0,l.Uk)("Актив"),ce=(0,l.Uk)("Количество"),re=(0,l.Uk)("Получатель"),me={style:{"word-break":"break-all"}},pe=(0,l.Uk)("Комиссия транзакции"),we={key:0},fe={key:1},ge=(0,l._)("p",{class:"text-caption text-white q-pa-md bg-negative"},"Внимание, если адрес получателя указан неверно, Вы не сможете вернуть средства назад",-1),_e={name:"SendAssetModal",props:{asset:Object},emits:["close"],setup(e,{emit:a}){const d=e,o=(0,i.s)(),{EraChain:r}=((0,c.tv)(),t(99407)),m=(0,u.c)(),p=(0,R.Q)();let w=(0,s.iH)(!1);const f=(0,s.iH)(!1),g=(0,s.iH)(!1);const _=(0,l.Fl)((()=>m.balances));(0,l.Fl)((()=>m.verifyPersonData));function v(){o.togglePinCodeModalVisible()}const k=(0,s.iH)({amount:"",address:"",title:"",message:"",encrypted:!1,fee:0,raw:0});function x(){k.value={amount:"",address:"",title:"",message:"",encrypted:!0,fee:0,raw:0}}async function W(){f.value=!f.value;const e=!0,a=await p.getKeyPair(),t=new r.Type.KeyPair(a),l={assetKey:d.asset.key,amount:k.value.amount};E.log(t),E.log(l);const s=await T.era.tranRawSendAsset(t,l,k.value.address,k.value.title,k.value.message,k.value.encrypted,e);E.log(s),s.error?(0,N.d)("negative",s.error.message):(k.value.fee=s.fee,k.value.raw=s.raw),f.value=!f.value}async function h(){f.value=!f.value;const e=await T.era.broadcast64(k.value.raw);E.log(e),e.error?((0,N.d)("negative",e.message),f.value=!f.value):((0,N.d)("info","Транзакция создана"),w.value=!1,f.value=!f.value,o.toggleSendAssetModalVisible())}function y(){a("close")}return(a,t)=>{const d=(0,l.up)("q-btn"),i=(0,l.up)("unconfirmed-tx-icon"),u=(0,l.up)("q-header"),c=(0,l.up)("q-item-section"),r=(0,l.up)("q-item"),m=(0,l.up)("q-input"),p=(0,l.up)("q-separator"),b=(0,l.up)("btn"),U=(0,l.up)("q-list"),q=(0,l.up)("q-card-section"),S=(0,l.up)("q-card"),z=(0,l.up)("q-dialog"),Z=(0,l.up)("q-card-actions"),C=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(z,{modelValue:(0,s.SU)(o).sendAssetModalVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,s.SU)(o).sendAssetModalVisible=e),persistent:"",class:(0,n.C_)({hidden:(0,s.SU)(o).isPageHidden}),onBeforeHide:y},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{style:{width:"900px","max-width":"100vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{style:{position:"unset"},class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(d,{"no-caps":"",label:`Отправка актива ${e.asset.name}`,icon:"las la-angle-left",unelevated:""},null,8,["label"]),[[C]]),(0,l.Wm)(i)])),_:1}),J,(0,l.Wm)(q,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-bold text-dark"},{default:(0,l.w5)((()=>[G])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,s.SU)(_)[e.asset.key][0][1])+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),X,(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ee])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{rounded:"",dense:"",outlined:"",type:"number",modelValue:k.value.amount,"onUpdate:modelValue":t[0]||(t[0]=e=>k.value.amount=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ae])),_:1})])),_:1}),(0,l.wy)((0,l._)("div",te,se,512),[[L.F8,g.value]]),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{rounded:"",dense:"",outlined:"",modelValue:k.value.address,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value.address=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(p,{class:"q-my-md"}),ne,(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[de])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{rounded:"",dense:"",outlined:"",modelValue:k.value.title,"onUpdate:modelValue":t[2]||(t[2]=e=>k.value.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[oe])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{rounded:"",type:"textarea",dense:"",outlined:"",modelValue:k.value.message,"onUpdate:modelValue":t[3]||(t[3]=e=>k.value.message=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(p,{class:"q-my-md"}),(0,l.Wm)(b,{label:"Отправить",onClick:v,disabled:!k.value.amount||!k.value.address,outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","class"]),(0,l.Wm)(z,{modelValue:(0,s.SU)(w),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,s.dq)(w)?w.value=e:w=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:x},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[ie])),_:1}),(0,l.Wm)(q,{class:"q-py-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{dense:"",separator:"",class:"q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ue])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[ce])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(k.value.amount)+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[re])),_:1}),(0,l.Wm)(c,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",me,(0,n.zw)(k.value.address),1)])),_:1})])),_:1}),(0,l.Wm)(r,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[pe])),_:1}),(0,l.Wm)(c,{class:"text-caption"},{default:(0,l.w5)((()=>["РОЛФ Тех.Аккаунт ruPay"===e.asset.maker_name?((0,l.wg)(),(0,l.iD)("span",we,(0,n.zw)(parseFloat(.01*k.value.amount).toFixed(5)),1)):(0,l.kq)("",!0),k.value.fee>0?((0,l.wg)(),(0,l.iD)("span",fe,"+ газ "+(0,n.zw)(k.value.fee)+" "+(0,n.zw)(e.asset.key<4e3?e.asset.name:"OLF"),1)):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1}),ge])),_:1}),(0,l.Wm)(Z,{class:"bg-white text-teal"},{default:(0,l.w5)((()=>[0===k.value.fee?((0,l.wg)(),(0,l.j4)(d,{key:0,label:"Расчет комиссии",rounded:"",loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:W,outline:!1},null,8,["loading"])):((0,l.wg)(),(0,l.j4)(d,{key:1,label:"Подтвердить",rounded:"",loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:h,outline:!1},null,8,["loading"])),(0,l.wy)((0,l.Wm)(d,{label:"Отменить",rounded:"","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:f.value},null,8,["loading"]),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)((0,s.SU)(Y.Z),{onPincode_ок:t[6]||(t[6]=e=>(0,s.dq)(w)?w.value=!0:w=!0)})],64)}}};var ve=t(13119),ke=t(50926),xe=t(11221),We=t(11821);const he=_e,ye=he;B()(_e,"components",{QDialog:Q.Z,QCard:V.Z,QHeader:I.Z,QBtn:j.Z,QCardSection:H.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QInput:ve.Z,QSeparator:ke.Z,QCheckbox:xe.Z,QCardActions:We.Z}),B()(_e,"directives",{ClosePopup:F.Z});const be=(0,l._)("div",{style:{height:"16px"}},null,-1),Ue={class:"page-body--top flex column items-center justify-evenly"},qe={class:"text-center q-mb-md"},Se=["src"],ze={class:"text-center q-mb-md"},Ze={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr","grid-gap":"10px"},class:"full-width text-dark"},Ce=(0,l._)("p",{class:"no-margin text-caption lh100"},[(0,l.Uk)("Отправить"),(0,l._)("br"),(0,l.Uk)("в сети RUPAY")],-1),Qe=(0,l._)("p",{class:"no-margin text-caption lh100"},[(0,l.Uk)("Получить"),(0,l._)("br"),(0,l.Uk)("в сети RUPAY")],-1),Ve=(0,l._)("p",{class:"no-margin text-caption"},"Обмен",-1),Ie=(0,l._)("p",{class:"no-margin text-caption lh100"},[(0,l.Uk)("Внести паевой"),(0,l._)("br"),(0,l.Uk)("взнос")],-1),je={class:""},He={class:"flex items-center justify-between q-pa-md"},Me=(0,l._)("p",{class:"q-mb-none"},"История транзакций",-1),Pe={class:"asset-date q-pa-md bg-grey-2 q-mb-none"},Ae={style:{"max-width":"70%"},class:"ellipsis inline-block"},De={key:0,class:"text-center q-pa-md"},Fe={components:{TransactionInfo:K,SendAssetModal:ye}},$e=Object.assign(Fe,{name:"Asset",setup(e){const a=(0,i.s)(),t=(0,u.c)(),r=(0,c.yj)(),m="https://scan.rupay.pro";let p=(0,s.iH)(0),w=(0,s.iH)({}),f=(0,s.iH)([]),g=(0,s.iH)(!1),_=(0,s.iH)(0);const v=(0,l.Fl)((()=>t.addresses[t.currentAddressIdx].address)),k=(0,l.Fl)((()=>d.ZP.isEmpty(f.value))),x=(0,l.Fl)((()=>t.assets[p.value])),W=(0,l.Fl)((()=>t.balances[x.value.key][0][1])),h=(0,l.Fl)((()=>W.value*x.value.course));async function y(e,a){g.value=!g.value;const t=await(0,o.sg)(v.value,x.value.key,e,a);f.value=d.ZP.groupBy(t,"timestamp"),g.value=!g.value}async function b(){_.value+=50,await y(50,_.value)}return(0,l.bv)((async()=>{p.value=r.params.asset_key,await y(50,_.value)})),(e,t)=>{const d=(0,l.up)("page-header"),o=(0,l.up)("q-avatar"),i=(0,l.up)("q-icon"),u=(0,l.up)("q-btn"),c=(0,l.up)("q-item-section"),r=(0,l.up)("q-item-label"),p=(0,l.up)("q-item"),U=(0,l.up)("q-list"),q=(0,l.up)("q-scroll-area"),S=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d),be,(0,l._)("div",Ue,[(0,l._)("div",qe,[(0,l.Wm)(o,{size:"50px",class:"q-mr-md"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,s.SU)(m)+(0,s.SU)(x).iconURL,alt:""},null,8,Se)])),_:1})]),(0,l._)("div",ze,[(0,l._)("p",{class:(0,n.C_)(["text-bold text-h6 text-dark no-margin",{blur:e.$global.isBlur}])},(0,n.zw)((0,s.SU)(W))+" "+(0,n.zw)((0,s.SU)(x).name),3),(0,l._)("p",{class:(0,n.C_)(["text-weight-medium text-body1 text-dark no-margin",{blur:e.$global.isBlur}])},"~ "+(0,n.zw)(e.$filters.convertAmount((0,s.SU)(h)))+" ₽",3)]),(0,l._)("div",Ze,[(0,l.Wm)(u,{stack:"",onClick:t[0]||(t[0]=e=>(0,s.SU)(a).toggleSendAssetModalVisible()),color:"primary",unelevated:"","no-caps":""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"white",size:"22px",name:"las la-upload"}),Ce])),_:1}),(0,l.Wm)(u,{stack:"",onClick:t[1]||(t[1]=a=>e.$router.push(`/wallet/receive?asset=${(0,s.SU)(x).key}&amount=0`)),color:"primary",unelevated:"","no-caps":""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"white",size:"22px",name:"las la-download"}),Qe])),_:1}),(0,l.Wm)(u,{stack:"",onClick:t[2]||(t[2]=a=>e.$router.push({name:"wallet_exchange"})),color:"primary",unelevated:"","no-caps":""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"white",size:"22px",name:"las la-exchange-alt"}),Ve])),_:1}),(0,l.Wm)(u,{stack:"",onClick:t[3]||(t[3]=a=>e.$router.push({name:"buy_part"})),color:"primary",unelevated:"","no-caps":""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"white",size:"22px",name:"las la-puzzle-piece"}),Ie])),_:1})])]),(0,l._)("div",je,[(0,l._)("div",He,[Me,(0,l.Wm)(i,{onClick:t[4]||(t[4]=e=>((0,s.dq)(_)?_.value=0:_=0,y(50,(0,s.SU)(_)))),name:"las la-sync",color:"primary",size:"26px",class:(0,n.C_)({rotate:(0,s.SU)(g)})},null,8,["class"])]),(0,l.Wm)(q,{style:{height:"50vh",width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{width:"100%"},separator:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(f),((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:t},[(0,l._)("p",Pe,(0,n.zw)(t),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,t)=>((0,l.wg)(),(0,l.j4)(p,{clickable:"",style:{"z-index":"-1"},onClick:t=>((0,s.dq)(w)?w.value=e:w=e,(0,s.SU)(a).toggleTransactionInfoModalVisible()),key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{avatar:""},{default:(0,l.w5)((()=>[(0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?((0,l.wg)(),(0,l.j4)(i,{key:0,color:"positive",name:"las la-arrow-down"})):((0,l.wg)(),(0,l.j4)(i,{key:1,color:"negative",name:"las la-arrow-up"}))])),_:2},1024),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[e.message?((0,l.wg)(),(0,l.j4)(r,{key:0,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.message),1)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(r,{key:1,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.actionName),1)])),_:2},1024)),(0,l.Wm)(r,{caption:""},{default:(0,l.w5)((()=>[(0,l._)("span",Ae,(0,n.zw)((0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?"от":"кому")+" "+(0,n.zw)((0,s.SU)(v)!==e.creator&&1===Math.sign(e.amount)?e.creator:e.recipient),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(c,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(parseFloat(e.amount).toFixed(4)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])))),128))])),_:1}),(0,s.SU)(k)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",De,[(0,l.Wm)(u,{rounded:"",color:"primary",label:"Загрузить еще",loading:(0,s.SU)(g),"no-caps":"",outline:"",icon:"add",onClick:b},null,8,["loading"])]))])),_:1})]),(0,l.Wm)((0,s.SU)(K),{"transaction-info":(0,s.SU)(w)},null,8,["transaction-info"]),(0,l.Wm)((0,s.SU)(ye),{asset:(0,s.SU)(x),onClose:t[5]||(t[5]=e=>y(50,0))},null,8,["asset"])])),_:1})}}});var Be=t(69885),Oe=t(61357),Ke=t(22857),Le=t(66663),Ye=t(33115);const Ne=$e,Re=Ne;B()($e,"components",{QPage:Be.Z,QAvatar:Oe.Z,QBtn:j.Z,QIcon:Ke.Z,QScrollArea:Le.Z,QList:M.Z,QItem:P.Z,QItemSection:A.Z,QItemLabel:Ye.Z})}}]);