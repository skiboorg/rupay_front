"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[843],{15843:(e,l,a)=>{a.r(l),a.d(l,{default:()=>yl});var u=a(59835),n=a(60499),o=a(86970),t=a(46190),s=a(23459),d=a(98030),m=a(39981),i=a.n(m),v=a(87270),p=a(99407),c=a(17779);const r={key:0},U={key:0},q=(0,u._)("p",{class:"q-mb-sm text-caption"},"Адрес в сети BNB BEP-20 SmartChain*",-1),b={class:"q-mb-sm text-caption"},V=(0,u.Uk)("Сумма вывода (Ваш баланс "),S={class:"q-mb-sm text-caption"},w={class:"q-mb-sm text-caption text-negative"},_={key:1},k=(0,u._)("p",{class:"text-center text-negative"},"Этот вид вывода недоступен, т.к. у вас нет баланса BNB",-1),y=[k],g={key:1},A=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы",-1),x=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),f=(0,u._)("p",{class:"q-mb-sm text-caption"},"Название банка*",-1),W=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),$={key:0,class:""},H=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),F=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),h=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),R=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),B=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),D=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),z=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),C={class:"q-mb-sm text-caption"},N=(0,u.Uk)("Сумма обмена в AVR* (Ваш баланс "),E=(0,u.Uk)(" AVR)"),Q=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма обмена 2500 RUB",-1),Z={key:1,class:"q-mb-sm text-caption text-bold"},P={key:2},T=(0,u._)("p",{class:"q-mb-sm text-negative"},"Максимальный срок вывода 1 час (в рабочие дни и часы)",-1),K=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),G=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),M={key:0,class:""},X=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),I=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),L=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),j=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),Y=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),O=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),J=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),ee={class:"q-mb-sm text-caption"},le=(0,u.Uk)("Сумма обмена в AVR* (Ваш баланс "),ae=(0,u.Uk)(" AVR)"),ue=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма обмена 2500 RUB",-1),ne={key:1,class:"q-mb-sm text-caption text-bold"},oe={name:"Avr",setup(e){const l="https://rupay.pro",a=(0,t.c)(),m=(0,s.Q)(),k=(0,u.Fl)((()=>a.assets)),oe=(0,u.Fl)((()=>m.assets.find((e=>1048610===e.key)))),te=(0,n.iH)({amount:"",address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Вывод",message:"Вывод",encrypted:!1,fee:0,raw:0});let se=(0,n.iH)(null),de=(0,n.iH)([{label:"Вывести AVR в сети BNB SmartChain",value:"bnb"},{label:"Вывод AVR с конвертацией в RUB на любую карту (минимальная комиссия 50руб + 2%)",value:"all_card"},{label:"Вывод AVR с конвертацией в RUB на карту Avrora (без комиссии) максимальный срок вывода 1 час (в рабочие дни и часы)",value:"avrora_card"}]),me=(0,n.iH)(null),ie=(0,n.iH)(null),ve=(0,n.iH)(null),pe=(0,n.iH)(!1),ce=(0,n.iH)(!1),re=((0,n.iH)(null),(0,n.iH)(null)),Ue=(0,n.iH)(null),qe=(0,n.iH)(null),be=(0,n.iH)(null),Ve=(0,n.iH)(null),Se=(0,n.iH)(null),we=(0,n.iH)(null),_e=(0,n.iH)(null);const ke=(0,n.iH)(!1),ye=(0,n.iH)([{label:"Оплатить подоходный налог 13%",value:!0},{label:"Я являюсь самозанятым налоги оплачиваю сам",value:!1}]);async function ge(){pe.value=!0,re.value&&(c.log("get bnb from balance"),await We(16,parseFloat(1/k.value.find((e=>16===e.key)).course_api).toFixed(8))),ce.value||(c.log("get avr from balance"),await We(oe.value.key,te.value.amount))}const Ae=(0,u.Fl)((()=>a.balances)),xe=(0,u.Fl)((()=>a.addresses[a.currentAddressIdx].address)),fe=(0,u.Fl)((()=>{if("all_card"===se.value.value&&te.value.amount){parseFloat(te.value.amount-.01*te.value.amount);let e=parseFloat(oe.value.course-.1*oe.value.course);return c.log(e),ke.value?parseFloat(te.value.amount*e-(te.value.amount*e*.15+50)).toFixed(2):parseFloat(te.value.amount*e-(te.value.amount*e*.02+50)).toFixed(2)}return"avrora_card"===se.value.value&&te.value.amount?ke.value?parseFloat(te.value.amount*oe.value.course-(te.value.amount*oe.value.course*.13+50)).toFixed(2):parseFloat(te.value.amount*oe.value.course).toFixed(2):"bnb"===se.value.value?0:void 0}));async function We(e,l){pe.value=!0;const a=!0,u=await m.getKeyPair(),n=new p.EraChain.Type.KeyPair(u),o={assetKey:e,amount:l},t=await d.era.tranRawSendAsset(n,o,te.value.address,te.value.title,te.value.message,te.value.encrypted,a);t.error?((0,v.d)("negative",t.error.message),ce.value=!0,c.log("getFee error",t.error.message)):(te.value.fee=t.fee,te.value.raw=t.raw,ce.value=!1,await $e()),pe.value=!1}async function $e(){const e=await d.era.broadcast64(te.value.raw);e.error?((0,v.d)("negative",e.message),ce.value=!0,c.log("signTransaction error",e.message)):(ce.value=!1,16!==e.assetKey&&(c.log("send request"),await i().post(l+"/api/data/new_withdrawal",{rupay_wallet:xe.value,wallet:re.value,need_pay_13:ke.value,asset_key:oe.value.key,currency:oe.value.name,card:ve.value,bank:ie.value,fio:me.value,amount:te.value.amount,amount_cur:fe.value,avr_withdrawal_selected:se.value.value}),c.log("request done"),await He()))}async function He(){(0,v.d)("info","Транзакция создана");let e="";re.value&&(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n            Адрес сети BNB : ${re.value}%0A\n            Сумма в AVR: ${te.value.amount}%0A`),re.value||ke.value||(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n            ФИО введенное : ${me.value}%0A\n            Номер карты: ${ve.value}%0A\n            Банк: ${ie.value?ie.value:"Вывод на карту Аврора"}%0A\n            Сумма вывода в AVR: ${te.value.amount}%0A\n            Сумма вывода в RUB : ${parseFloat(fe.value).toFixed(2)}%0A\n            Оплатить подоходный налог 13%: НЕТ`),ke.value&&!re.value&&(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n    ФИО введенное : ${me.value}%0A\n\n  Номер карты: ${ve.value}%0A\n  Банк: ${ie.value?ie.value:"Вывод на карту Аврора"}%0A\n  Сумма вывода в AVR: ${te.value.amount}%0A\n  Сумма вывода в RUB - (15% + 50): ${parseFloat(fe.value).toFixed(2)}%0A\n  Оплатить подоходный налог 13%: ДА%0A\n  ФИО: ${Ue.value}%0A\n  НОМЕР ТЕЛЕФОНА: ${qe.value}%0A\n  ПАСПОРТ серия номер: ${be.value}%0A\n  Кем выдан: ${Ve.value}%0A\n  Прописка: ${Se.value}%0A\n  ИНН: ${we.value}%0A\n  СНИЛС: ${_e.value}%0A`),await i().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),await i().get(`https://api.telegram.org/bot5767595834:AAF3GBLwp-Fvd5ErfWPkB7RX1tRGG84w9AE/sendMessage?chat_id=-861651385\n  &text=${e}`),me.value=null,ve.value=null,ie.value=null,te.value.amount=null,se.value.value=null,(0,v.d)("positive","Запрос успешно отправлен"),pe.value=!pe.value}return(0,u.wF)((()=>{})),(e,l)=>{const a=(0,u.up)("q-select"),t=(0,u.up)("q-input"),s=(0,u.up)("q-btn"),d=(0,u.up)("q-option-group");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(a,{modelValue:(0,n.SU)(se),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(se)?se.value=e:se=e),outlined:"",rounded:"",options:(0,n.SU)(de),label:"Выберите вариант вывода*",class:"q-mb-md"},null,8,["modelValue","options"]),(0,n.SU)(se)&&"bnb"===(0,n.SU)(se).value?((0,u.wg)(),(0,u.iD)("div",r,["16"in(0,n.SU)(Ae)?((0,u.wg)(),(0,u.iD)("div",U,[q,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(re),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,n.dq)(re)?re.value=e:re=e)},null,8,["modelValue"]),(0,u._)("p",b,[V,(0,u._)("span",null,(0,o.zw)((0,n.SU)(Ae)[(0,n.SU)(oe).key]?(0,n.SU)(Ae)[(0,n.SU)(oe).key][0][1]:"0"),1),(0,u.Uk)(" "+(0,o.zw)((0,n.SU)(oe).name)+")",1)]),(0,u._)("p",S,"Минимальная сумма вывода 25 "+(0,o.zw)((0,n.SU)(oe).name),1),(0,u._)("p",w,"Комиссия в сети RUPAY "+(0,o.zw)(parseFloat(1/(0,n.SU)(k).find((e=>16===e.key)).course_api).toFixed(8))+" BNB (Ваш баланс BNB "+(0,o.zw)((0,n.SU)(Ae)[16][0][1])+")",1),(0,u.Wm)(t,{class:"q-mb-md",rounded:"",outlined:"",modelValue:te.value.amount,"onUpdate:modelValue":l[3]||(l[3]=e=>te.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(Ae)[(0,n.SU)(oe).key]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(s,{onClick:l[2]||(l[2]=e=>te.value.amount=(0,n.SU)(Ae)[(0,n.SU)(oe).key][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),(0,u.Wm)(s,{color:"primary",rounded:"",loading:(0,n.SU)(pe),onClick:ge,disable:!te.value.amount||te.value.amount<25||!(te.value.amount<=(0,n.SU)(Ae)[1048610][0][1])||1/(0,n.SU)(k).find((e=>16===e.key)).course_api>(0,n.SU)(Ae)[16][0][1]||!(0,n.SU)(re),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,u.wg)(),(0,u.iD)("div",_,y))])):(0,u.kq)("",!0),(0,n.SU)(se)&&"all_card"===(0,n.SU)(se).value?((0,u.wg)(),(0,u.iD)("div",g,[A,x,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(ve),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,n.dq)(ve)?ve.value=e:ve=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),f,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(ie),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,n.dq)(ie)?ie.value=e:ie=e)},null,8,["modelValue"]),W,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(me),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,n.dq)(me)?me.value=e:me=e)},null,8,["modelValue"]),(0,u.Wm)(d,{class:"q-mb-sm",options:ye.value,type:"radio",modelValue:ke.value,"onUpdate:modelValue":l[7]||(l[7]=e=>ke.value=e)},null,8,["options","modelValue"]),ke.value?((0,u.wg)(),(0,u.iD)("div",$,[H,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Ue),"onUpdate:modelValue":l[8]||(l[8]=e=>(0,n.dq)(Ue)?Ue.value=e:Ue=e)},null,8,["modelValue"]),F,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(qe),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,n.dq)(qe)?qe.value=e:qe=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),h,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(be),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,n.dq)(be)?be.value=e:be=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),R,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Ve),"onUpdate:modelValue":l[11]||(l[11]=e=>(0,n.dq)(Ve)?Ve.value=e:Ve=e)},null,8,["modelValue"]),B,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Se),"onUpdate:modelValue":l[12]||(l[12]=e=>(0,n.dq)(Se)?Se.value=e:Se=e)},null,8,["modelValue"]),D,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(we),"onUpdate:modelValue":l[13]||(l[13]=e=>(0,n.dq)(we)?we.value=e:we=e)},null,8,["modelValue"]),z,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(_e),"onUpdate:modelValue":l[14]||(l[14]=e=>(0,n.dq)(_e)?_e.value=e:_e=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",C,[N,(0,u._)("span",null,(0,o.zw)((0,n.SU)(Ae)[1048610]?(0,n.SU)(Ae)[1048610][0][1]:"0"),1),E]),Q,(0,u.Wm)(t,{class:"q-mb-md",rounded:"",outlined:"",modelValue:te.value.amount,"onUpdate:modelValue":l[16]||(l[16]=e=>te.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(Ae)[1048610]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(s,{onClick:l[15]||(l[15]=e=>te.value.amount=(0,n.SU)(Ae)[1048610][0][1]),size:"10px",flat:"",rounded:"",label:"Обменять все"})]))}:void 0]),1032,["modelValue"]),(0,n.SU)(fe)>0?((0,u.wg)(),(0,u.iD)("p",Z,"Вы получите: "+(0,o.zw)((0,n.SU)(fe))+" RUB",1)):(0,u.kq)("",!0),(0,u.Wm)(s,{color:"primary",rounded:"",loading:(0,n.SU)(pe),onClick:ge,disable:!te.value.amount||(0,n.SU)(fe)<2500||!(te.value.amount<=(0,n.SU)(Ae)[1048610][0][1])||!(0,n.SU)(me)||!(0,n.SU)(ve)||!(0,n.SU)(ie),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.kq)("",!0),(0,n.SU)(se)&&"avrora_card"===(0,n.SU)(se).value?((0,u.wg)(),(0,u.iD)("div",P,[T,K,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(ve),"onUpdate:modelValue":l[17]||(l[17]=e=>(0,n.dq)(ve)?ve.value=e:ve=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),G,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(me),"onUpdate:modelValue":l[18]||(l[18]=e=>(0,n.dq)(me)?me.value=e:me=e)},null,8,["modelValue"]),(0,u.Wm)(d,{class:"q-mb-sm",options:ye.value,type:"radio",modelValue:ke.value,"onUpdate:modelValue":l[19]||(l[19]=e=>ke.value=e)},null,8,["options","modelValue"]),ke.value?((0,u.wg)(),(0,u.iD)("div",M,[X,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Ue),"onUpdate:modelValue":l[20]||(l[20]=e=>(0,n.dq)(Ue)?Ue.value=e:Ue=e)},null,8,["modelValue"]),I,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(qe),"onUpdate:modelValue":l[21]||(l[21]=e=>(0,n.dq)(qe)?qe.value=e:qe=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),L,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(be),"onUpdate:modelValue":l[22]||(l[22]=e=>(0,n.dq)(be)?be.value=e:be=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),j,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Ve),"onUpdate:modelValue":l[23]||(l[23]=e=>(0,n.dq)(Ve)?Ve.value=e:Ve=e)},null,8,["modelValue"]),Y,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(Se),"onUpdate:modelValue":l[24]||(l[24]=e=>(0,n.dq)(Se)?Se.value=e:Se=e)},null,8,["modelValue"]),O,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(we),"onUpdate:modelValue":l[25]||(l[25]=e=>(0,n.dq)(we)?we.value=e:we=e)},null,8,["modelValue"]),J,(0,u.Wm)(t,{class:"q-mb-sm",rounded:"",outlined:"",modelValue:(0,n.SU)(_e),"onUpdate:modelValue":l[26]||(l[26]=e=>(0,n.dq)(_e)?_e.value=e:_e=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",ee,[le,(0,u._)("span",null,(0,o.zw)((0,n.SU)(Ae)[1048610]?(0,n.SU)(Ae)[1048610][0][1]:"0"),1),ae]),ue,(0,u.Wm)(t,{class:"q-mb-md",rounded:"",outlined:"",modelValue:te.value.amount,"onUpdate:modelValue":l[28]||(l[28]=e=>te.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(Ae)[1048610]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(s,{onClick:l[27]||(l[27]=e=>te.value.amount=(0,n.SU)(Ae)[1048610][0][1]),size:"10px",flat:"",rounded:"",label:"Обменять все"})]))}:void 0]),1032,["modelValue"]),(0,n.SU)(fe)>0?((0,u.wg)(),(0,u.iD)("p",ne,"Вы получите: "+(0,o.zw)((0,n.SU)(fe))+" RUB",1)):(0,u.kq)("",!0),(0,u.Wm)(s,{color:"primary",rounded:"",loading:(0,n.SU)(pe),onClick:ge,disable:!te.value.amount||(0,n.SU)(fe)<2500||!(te.value.amount<=(0,n.SU)(Ae)[1048610][0][1])||!(0,n.SU)(me)||!(0,n.SU)(ve),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.kq)("",!0)],64)}}};var te=a(18401),se=a(13119),de=a(24455),me=a(2286),ie=a(69984),ve=a.n(ie);const pe=oe,ce=pe;ve()(oe,"components",{QSelect:te.Z,QInput:se.Z,QBtn:de.Z,QOptionGroup:me.Z});var re=a(17779);const Ue=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы",-1),qe=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),be=(0,u._)("p",{class:"q-mb-sm text-caption"},"Название банка*",-1),Ve=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),Se={key:0,class:""},we=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),_e=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),ke=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),ye=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),ge=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),Ae=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),xe=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),fe={class:"q-mb-sm text-caption"},We=(0,u.Uk)("Сумма обмена в MTTL* (Ваш баланс "),$e=(0,u.Uk)(" MTTL)"),He=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма обмена 5000 RUB",-1),Fe={key:1,class:"q-mb-sm text-caption text-bold"},he={name:"Mttl",setup(e){const l="https://rupay.pro",a=(0,t.c)(),m=(0,s.Q)(),c=((0,u.Fl)((()=>a.assets)),(0,u.Fl)((()=>m.assets.find((e=>1048615===e.key))))),r=(0,n.iH)({amount:"",address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Вывод",message:"Вывод",encrypted:!1,fee:0,raw:0});let U=(0,n.iH)(null),q=(0,n.iH)(null),b=(0,n.iH)(null),V=(0,n.iH)(!1),S=((0,n.iH)(null),(0,n.iH)(null)),w=(0,n.iH)(null),_=(0,n.iH)(null),k=(0,n.iH)(null),y=(0,n.iH)(null),g=(0,n.iH)(null),A=(0,n.iH)(null),x=(0,n.iH)(null);const f=(0,n.iH)(!1),W=(0,n.iH)([{label:"Оплатить подоходный налог 13%",value:!0},{label:"Я являюсь самозанятым налоги оплачиваю сам",value:!1}]);async function $(){await R(c.value.key,r.value.amount)}const H=(0,u.Fl)((()=>a.balances)),F=(0,u.Fl)((()=>a.addresses[a.currentAddressIdx].address)),h=(0,u.Fl)((()=>{if(r.value.amount){parseFloat(r.value.amount-.01*r.value.amount);let e=parseFloat(c.value.course-.1*c.value.course);return re.log(e),f.value?parseFloat(r.value.amount*e-(r.value.amount*e*.15+50)).toFixed(2):parseFloat(r.value.amount*e-(r.value.amount*e*.02+50)).toFixed(2)}}));async function R(e,l){V.value=!V.value;const a=!0,u=await m.getKeyPair(),n=new p.EraChain.Type.KeyPair(u),o={assetKey:e,amount:l};re.log(n),re.log(o);const t=await d.era.tranRawSendAsset(n,o,r.value.address,r.value.title,r.value.message,r.value.encrypted,a);re.log(t),t.error?(0,v.d)("negative",t.error.message):(r.value.fee=t.fee,r.value.raw=t.raw,await B()),V.value=!V.value}async function B(){const e=await d.era.broadcast64(r.value.raw);re.log(e),e.error?(0,v.d)("negative",e.message):(await D(),await i().post(l+"/api/data/new_withdrawal",{rupay_wallet:F.value,wallet:S.value,need_pay_13:f.value,asset_key:c.value.key,currency:c.value.name,card:b.value,bank:q.value,fio:U.value,amount:r.value.amount,amount_cur:h.value,avr_withdrawal_selected:"all_card"}))}async function D(){(0,v.d)("info","Транзакция создана");let e="";S.value||f.value||(e=`\n            ФИО введенное : ${U.value}%0A\n            Номер карты: ${b.value}%0A\n            Банк: ${q.value}%0A\n            Сумма вывода в MTTL: ${r.value.amount}%0A\n            Сумма вывода в RUB - (2% + 50): ${parseFloat(r.value.amount*c.value.course-(r.value.amount*c.value.course*.02+50)).toFixed(2)}%0A\n            Оплатить подоходный налог 13%: НЕТ`),f.value&&!S.value&&(e=`\n    ФИО введенное : ${U.value}%0A\n\n  Номер карты: ${b.value}%0A\n  Банк: ${q.value}%0A\n  Сумма вывода в MTTL: ${r.value.amount}%0A\n  Сумма вывода в RUB - (15% + 50): ${parseFloat(r.value.amount*c.value.course-(r.value.amount*c.value.course*.15+50)).toFixed(2)}%0A\n  Оплатить подоходный налог 13%: ДА%0A\n  ФИО: ${w.value}%0A\n  НОМЕР ТЕЛЕФОНА: ${_.value}%0A\n  ПАСПОРТ серия номер: ${k.value}%0A\n  Кем выдан: ${y.value}%0A\n  Прописка: ${g.value}%0A\n  ИНН: ${A.value}%0A\n  СНИЛС: ${x.value}%0A`),await i().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),U.value=null,b.value=null,q.value=null,r.value.amount=null,(0,v.d)("positive","Запрос успешно отправлен"),V.value=!V.value}return(0,u.wF)((()=>{})),(e,l)=>{const a=(0,u.up)("q-input"),t=(0,u.up)("q-option-group"),s=(0,u.up)("q-btn");return(0,u.wg)(),(0,u.iD)(u.HY,null,[Ue,qe,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(b),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(b)?b.value=e:b=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),be,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(q),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,n.dq)(q)?q.value=e:q=e)},null,8,["modelValue"]),Ve,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(U),"onUpdate:modelValue":l[2]||(l[2]=e=>(0,n.dq)(U)?U.value=e:U=e)},null,8,["modelValue"]),(0,u.Wm)(t,{class:"q-mb-sm",options:W.value,type:"radio",modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=e=>f.value=e)},null,8,["options","modelValue"]),f.value?((0,u.wg)(),(0,u.iD)("div",Se,[we,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(w),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,n.dq)(w)?w.value=e:w=e)},null,8,["modelValue"]),_e,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(_),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,n.dq)(_)?_.value=e:_=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),ke,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(k),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,n.dq)(k)?k.value=e:k=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),ye,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(y),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,n.dq)(y)?y.value=e:y=e)},null,8,["modelValue"]),ge,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(g),"onUpdate:modelValue":l[8]||(l[8]=e=>(0,n.dq)(g)?g.value=e:g=e)},null,8,["modelValue"]),Ae,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(A),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,n.dq)(A)?A.value=e:A=e)},null,8,["modelValue"]),xe,(0,u.Wm)(a,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(x),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,n.dq)(x)?x.value=e:x=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",fe,[We,(0,u._)("span",null,(0,o.zw)((0,n.SU)(H)[1048615]?(0,n.SU)(H)[1048615][0][1]:"0"),1),$e]),He,(0,u.Wm)(a,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:r.value.amount,"onUpdate:modelValue":l[12]||(l[12]=e=>r.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(H)[1048615]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(s,{onClick:l[11]||(l[11]=e=>r.value.amount=(0,n.SU)(H)[1048615][0][1]),size:"10px",flat:"",rounded:"",label:"Обменять все"})]))}:void 0]),1032,["modelValue"]),(0,n.SU)(h)>0?((0,u.wg)(),(0,u.iD)("p",Fe,"Вы получите: "+(0,o.zw)((0,n.SU)(h))+" RUB",1)):(0,u.kq)("",!0),(0,u.Wm)(s,{color:"primary",rounded:"",loading:(0,n.SU)(V),onClick:$,disable:!r.value.amount||(0,n.SU)(h)<5e3||!(0,n.SU)(U)||!(0,n.SU)(b)||!(0,n.SU)(q),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])],64)}}},Re=he,Be=Re;ve()(he,"components",{QInput:se.Z,QOptionGroup:me.Z,QBtn:de.Z});var De=a(17779);const ze=(0,u._)("div",{class:"",style:{height:"60px"}},null,-1),Ce={class:"q-mb-lg"},Ne={key:0},Ee={key:0},Qe=(0,u._)("p",{class:"q-mb-sm text-negative"},"Внимание! ФИО верифицированного пользователя должно совпадать с ФИО владельца карты.",-1),Ze=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы",-1),Pe=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),Te=(0,u._)("p",{class:"q-mb-sm text-caption"},"Название банка*",-1),Ke=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),Ge={key:0,class:""},Me=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),Xe=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),Ie=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),Le=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),je=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),Ye=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),Oe=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),Je={class:"q-mb-sm text-caption"},el=(0,u.Uk)("Сумма вывода в рублях* (Ваш баланс "),ll=(0,u.Uk)(" RUB)"),al=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма вывода 2500 RUB",-1),ul={key:1,class:"q-mb-sm text-caption text-bold"},nl={key:2,class:"q-mb-sm text-caption text-bold"},ol={key:1},tl={key:0},sl={key:1},dl={key:2},ml=(0,u._)("p",{class:"q-mb-sm text-negative"},"Сервис RUPAY не взимает комиссию за вывод, однако блокчейн выводимой сети взимает, на ваш счёт указанный для вывода поступит сумма за вычетом комиссии сети ",-1),il={class:"q-mb-sm text-caption"},vl=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя*",-1),pl={class:"q-mb-sm text-caption"},cl=(0,u.Uk)("Сумма вывода (Ваш баланс "),rl={class:"q-mb-sm text-caption"},Ul={key:1},ql={class:"text-center"},bl=(0,u.Uk)("Вывод средств доступен только "),Vl=(0,u.Uk)("верифицированным"),Sl=(0,u.Uk)(" пользователям."),wl={name:"Withdraw",setup(e){const l=(0,t.c)(),a=(0,s.Q)();let m=(0,n.iH)([]);const c=(0,u.Fl)((()=>a.assets)),r=(0,n.iH)({amount:"",address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Вывод",message:"Вывод",encrypted:!1,fee:0,raw:0});let U=(0,n.iH)(null),q=(0,n.iH)(null),b=(0,n.iH)(null),V=(0,n.iH)(!1),S=((0,n.iH)(null),(0,n.iH)(null)),w=(0,n.iH)(null),_=(0,n.iH)(null),k=(0,n.iH)(null),y=(0,n.iH)(null),g=(0,n.iH)(null),A=(0,n.iH)(null),x=(0,n.iH)(null),f=(0,n.iH)(null);const W=(0,n.iH)(!1),$=(0,n.iH)([{label:"Оплатить подоходный налог 13%",value:!0},{label:"Я являюсь самозанятым налоги оплачиваю сам",value:!1}]);async function H(){V.value=!V.value,await B()}const F=(0,u.Fl)((()=>l.balances)),h=(0,u.Fl)((()=>{if(S.value)return!!S.value.can_withdrawal_no_person||!!R.value})),R=(0,u.Fl)((()=>l.verifyPersonData));async function B(){V.value=!V.value;const e=!0,l=await a.getKeyPair(),u=new p.EraChain.Type.KeyPair(l),n={assetKey:S.value.key,amount:r.value.amount};De.log(u),De.log(n);const o=await d.era.tranRawSendAsset(u,n,r.value.address,r.value.title,r.value.message,r.value.encrypted,e);De.log(o),o.error?(0,v.d)("negative",o.error.message):(r.value.fee=o.fee,r.value.raw=o.raw,await D()),V.value=!V.value}async function D(){const e=await d.era.broadcast64(r.value.raw);if(De.log(e),e.error)(0,v.d)("negative",e.message),V.value=!V.value;else{(0,v.d)("info","Транзакция создана");let e="";w.value&&(e=`ФИО введенное : ${U.value}%0A\n            ФИО в блокчейне ${R.value.name}%0A\n            Адрес сети ${S.value.name} : ${w.value}%0A\n            Сумма в ${S.value.name}: ${r.value.amount}%0A`),w.value||W.value||(e=`ФИО введенное : ${U.value}%0A\n            ФИО в блокчейне ${R.value.name}%0A\n            Номер карты: ${b.value}%0A\n            Банк: ${q.value}%0A\n            Сумма вывода в ${S.value.name}: ${r.value.amount}%0A\n            Сумма вывода в ${S.value.name} - (2% + 50): ${r.value.amount-(.02*r.value.amount+50)}%0A\n            Оплатить подоходный налог 13%: НЕТ`),W.value&&!w.value&&(e=`ФИО введенное : ${U.value}%0A\n  ФИО в блокчейне ${R.value.name}%0A\n  Номер карты: ${b.value}%0A\n  Банк: ${q.value}%0A\n  Сумма вывода в ${S.value.name}: ${r.value.amount}%0A\n  Сумма вывода в ${S.value.name} - (15% + 50): ${r.value.amount-(.15*r.value.amount+50)}%0A\n  Оплатить подоходный налог 13%: ДА%0A\n  ФИО: ${_.value}%0A\n  НОМЕР ТЕЛЕФОНА: ${k.value}%0A\n  ПАСПОРТ серия номер: ${y.value}%0A\n  Кем выдан: ${g.value}%0A\n  Прописка: ${A.value}%0A\n  ИНН: ${x.value}%0A\n  СНИЛС: ${f.value}%0A`),await i().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),U.value=null,b.value=null,q.value=null,r.value.amount=null,(0,v.d)("positive","Запрос успешно отправлен"),V.value=!V.value}}return(0,u.wF)((()=>{m.value=c.value.filter((e=>e.can_withdrawal))})),(e,l)=>{const a=(0,u.up)("page-header"),t=(0,u.up)("q-select"),s=(0,u.up)("q-input"),d=(0,u.up)("q-option-group"),i=(0,u.up)("q-btn"),v=(0,u.up)("router-link"),p=(0,u.up)("q-scroll-area"),c=(0,u.up)("page-body"),R=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(R,null,{default:(0,u.w5)((()=>[(0,u.Wm)(c,{class:"q-px-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(a),ze,(0,u._)("div",Ce,[(0,u.Wm)(p,{style:{height:"85vh"}},{default:(0,u.w5)((()=>[(0,u.Wm)(t,{modelValue:(0,n.SU)(S),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(S)?S.value=e:S=e),outlined:"",rounded:"",dense:"","options-dense":"",options:(0,n.SU)(m),"option-label":"name",label:"Выберите актив*",class:"q-mb-md"},null,8,["modelValue","options"]),(0,n.SU)(S)&&(0,n.SU)(h)?((0,u.wg)(),(0,u.iD)("div",Ne,[(0,n.SU)(S)&&1643===(0,n.SU)(S).key?((0,u.wg)(),(0,u.iD)("div",Ee,[Qe,Ze,Pe,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(b),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,n.dq)(b)?b.value=e:b=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),Te,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(q),"onUpdate:modelValue":l[2]||(l[2]=e=>(0,n.dq)(q)?q.value=e:q=e)},null,8,["modelValue"]),Ke,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(U),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,n.dq)(U)?U.value=e:U=e)},null,8,["modelValue"]),(0,u.Wm)(d,{class:"q-mb-sm",options:$.value,type:"radio",modelValue:W.value,"onUpdate:modelValue":l[4]||(l[4]=e=>W.value=e)},null,8,["options","modelValue"]),W.value?((0,u.wg)(),(0,u.iD)("div",Ge,[Me,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(_),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,n.dq)(_)?_.value=e:_=e)},null,8,["modelValue"]),Xe,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(k),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,n.dq)(k)?k.value=e:k=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),Ie,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(y),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,n.dq)(y)?y.value=e:y=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),Le,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(g),"onUpdate:modelValue":l[8]||(l[8]=e=>(0,n.dq)(g)?g.value=e:g=e)},null,8,["modelValue"]),je,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(A),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,n.dq)(A)?A.value=e:A=e)},null,8,["modelValue"]),Ye,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(x),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,n.dq)(x)?x.value=e:x=e)},null,8,["modelValue"]),Oe,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(f),"onUpdate:modelValue":l[11]||(l[11]=e=>(0,n.dq)(f)?f.value=e:f=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",Je,[el,(0,u._)("span",null,(0,o.zw)((0,n.SU)(F)[1643]?(0,n.SU)(F)[1643][0][1]:"0"),1),ll]),al,(0,u.Wm)(s,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:r.value.amount,"onUpdate:modelValue":l[13]||(l[13]=e=>r.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(F)[1643]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(i,{onClick:l[12]||(l[12]=e=>r.value.amount=(0,n.SU)(F)[1643][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),W.value?((0,u.wg)(),(0,u.iD)("p",ul,"Вы получите: "+(0,o.zw)(r.value.amount-(.15*r.value.amount+50))+" RUB",1)):((0,u.wg)(),(0,u.iD)("p",nl,"Вы получите: "+(0,o.zw)(r.value.amount-(.02*r.value.amount+50))+" RUB",1)),(0,u.Wm)(i,{color:"primary",rounded:"",loading:(0,n.SU)(V),onClick:H,disable:!r.value.amount||r.value.amount<2500||!(0,n.SU)(U)||!(0,n.SU)(b)||!(0,n.SU)(q),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,u.wg)(),(0,u.iD)("div",ol,[(0,n.SU)(S)&&1048610===(0,n.SU)(S).key?((0,u.wg)(),(0,u.iD)("div",tl,[(0,u.Wm)((0,n.SU)(ce))])):(0,n.SU)(S)&&1048615===(0,n.SU)(S).key?((0,u.wg)(),(0,u.iD)("div",sl,[(0,u.Wm)((0,n.SU)(Be))])):((0,u.wg)(),(0,u.iD)("div",dl,[ml,(0,u._)("p",il,"Адрес в сети "+(0,o.zw)((0,n.SU)(S).description)+" "+(0,o.zw)((0,n.SU)(S).name)+"*",1),(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(w),"onUpdate:modelValue":l[14]||(l[14]=e=>(0,n.dq)(w)?w.value=e:w=e)},null,8,["modelValue"]),vl,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(U),"onUpdate:modelValue":l[15]||(l[15]=e=>(0,n.dq)(U)?U.value=e:U=e)},null,8,["modelValue"]),(0,u._)("p",pl,[cl,(0,u._)("span",null,(0,o.zw)((0,n.SU)(F)[(0,n.SU)(S).key]?(0,n.SU)(F)[(0,n.SU)(S).key][0][1]:"0"),1),(0,u.Uk)(" "+(0,o.zw)((0,n.SU)(S).name)+")",1)]),(0,u._)("p",rl,"Минимальная сумма вывода "+(0,o.zw)(5e3/(0,n.SU)(S).course)+" "+(0,o.zw)((0,n.SU)(S).name),1),(0,u.Wm)(s,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:r.value.amount,"onUpdate:modelValue":l[17]||(l[17]=e=>r.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(F)[(0,n.SU)(S).key]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(i,{onClick:l[16]||(l[16]=e=>r.value.amount=(0,n.SU)(F)[(0,n.SU)(S).key][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),(0,u.Wm)(i,{color:"primary",rounded:"",loading:(0,n.SU)(V),onClick:H,disable:!r.value.amount||r.value.amount<5e3/(0,n.SU)(S).course||!(0,n.SU)(U)||!(0,n.SU)(w),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])]))]))])):(0,u.kq)("",!0),(0,n.SU)(S)&&!(0,n.SU)(h)?((0,u.wg)(),(0,u.iD)("div",Ul,[(0,u._)("p",ql,[bl,(0,u.Wm)(v,{style:{color:"inherit"},to:"/wallet/create_person"},{default:(0,u.w5)((()=>[Vl])),_:1}),Sl])])):(0,u.kq)("",!0)])),_:1})])])),_:1})])),_:1})}}};var _l=a(66663);const kl=wl,yl=kl;ve()(wl,"components",{QScrollArea:_l.Z,QSelect:te.Z,QInput:se.Z,QOptionGroup:me.Z,QBtn:de.Z})}}]);