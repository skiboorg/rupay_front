"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[843],{13843:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Te});var u=a(59835),n=a(60499),o=a(86970),s=a(46190),d=a(23459),t=a(98030),m=a(39981),i=a.n(m),v=a(87270),p=a(99407),c=a(17779);const r={key:0},U=(0,u._)("p",{class:"q-mb-sm text-caption"},"Адрес в сети BNB SmartChain*",-1),q={class:"q-mb-sm text-caption"},b=(0,u.Uk)("Сумма вывода (Ваш баланс "),V={class:"q-mb-sm text-caption"},S={class:"q-mb-sm text-caption text-negative"},_={key:1},w=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы",-1),k=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),y=(0,u._)("p",{class:"q-mb-sm text-caption"},"Название банка*",-1),x=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),A={key:0,class:""},g=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),W=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),f=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),$=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),H=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),h=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),F=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),R={class:"q-mb-sm text-caption"},B=(0,u.Uk)("Сумма обмена в AVR* (Ваш баланс "),z=(0,u.Uk)(" AVR)"),D=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма обмена 5000 RUB",-1),C={key:1,class:"q-mb-sm text-caption text-bold"},N={key:2},Q=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода может занимать до 5 рабочих дней.",-1),Z=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),P=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),E={key:0,class:""},K=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),G=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),X=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),j=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),I=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),Y=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),M=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),O={class:"q-mb-sm text-caption"},T=(0,u.Uk)("Сумма обмена в AVR* (Ваш баланс "),J=(0,u.Uk)(" AVR)"),L=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма обмена 5000 RUB",-1),ee={key:1,class:"q-mb-sm text-caption text-bold"},le={name:"Avr",setup(e){const l="https://rupay.pro",a=(0,s.c)(),m=(0,d.Q)(),le=(0,u.Fl)((()=>a.assets)),ae=(0,u.Fl)((()=>m.assets.find((e=>1048610===e.key)))),ue=(0,n.iH)({amount:"",address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Вывод",message:"Вывод",encrypted:!1,fee:0,raw:0});let ne=(0,n.iH)(null),oe=(0,n.iH)([{label:"Вывести AVR в сети BNB SmartChain",value:"bnb"},{label:"Вывод AVR с конвертацией в RUB на любую карту (минимальная комиссия 50руб + 2%)",value:"all_card"},{label:"Вывод AVR с конвертацией в RUB на карту Avrora (без комиссии)",value:"avrora_card"}]),se=(0,n.iH)(null),de=(0,n.iH)(null),te=(0,n.iH)(null),me=(0,n.iH)(!1),ie=((0,n.iH)(null),(0,n.iH)(null)),ve=(0,n.iH)(null),pe=(0,n.iH)(null),ce=(0,n.iH)(null),re=(0,n.iH)(null),Ue=(0,n.iH)(null),qe=(0,n.iH)(null),be=(0,n.iH)(null);const Ve=(0,n.iH)(!1),Se=(0,n.iH)([{label:"Оплатить подоходный налог 13%",value:!0},{label:"Я являюсь самозанятым налоги оплачиваю сам",value:!1}]);async function _e(){me.value=!me.value,await i().post(l+"/api/data/new_withdrawal",{rupay_wallet:ke.value,wallet:ie.value,need_pay_13:Ve.value,asset_key:ae.value.key,currency:ae.value.name,card:te.value,bank:de.value,fio:se.value,amount:ue.value.amount,amount_cur:ye.value,avr_withdrawal_selected:ne.value.value}),await xe(ae.value.key,ue.value.amount),ie.value&&await xe(16,parseFloat(1/le.value.find((e=>16===e.key)).course_api).toFixed(8)),await ge()}const we=(0,u.Fl)((()=>a.balances)),ke=(0,u.Fl)((()=>a.addresses[a.currentAddressIdx].address)),ye=(0,u.Fl)((()=>"all_card"===ne.value.value&&ue.value.amount?Ve.value?parseFloat(ue.value.amount*ae.value.course-(ue.value.amount*ae.value.course*.15+50)).toFixed(2):parseFloat(ue.value.amount*ae.value.course-(ue.value.amount*ae.value.course*.02+50)).toFixed(2):"avrora_card"===ne.value.value&&ue.value.amount?Ve.value?parseFloat(ue.value.amount*ae.value.course-(ue.value.amount*ae.value.course*.13+50)).toFixed(2):parseFloat(ue.value.amount*ae.value.course).toFixed(2):"bnb"===ne.value.value?0:void 0));async function xe(e,l){me.value=!me.value;const a=!0,u=await m.getKeyPair(),n=new p.EraChain.Type.KeyPair(u),o={assetKey:e,amount:l};c.log(n),c.log(o);const s=await t.era.tranRawSendAsset(n,o,ue.value.address,ue.value.title,ue.value.message,ue.value.encrypted,a);c.log(s),s.error?(0,v.d)("negative",s.error.message):(ue.value.fee=s.fee,ue.value.raw=s.raw,await Ae()),me.value=!me.value}async function Ae(){const e=await t.era.broadcast64(ue.value.raw);c.log(e),e.error?((0,v.d)("negative",e.message),me.value=!me.value):me.value=!me.value}async function ge(){(0,v.d)("info","Транзакция создана");let e="";ie.value&&(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n            Адрес сети BNB : ${ie.value}%0A\n            Сумма в AVR: ${ue.value.amount}%0A`),ie.value||Ve.value||(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n            ФИО введенное : ${se.value}%0A\n            Номер карты: ${te.value}%0A\n            Банк: ${de.value}%0A\n            Сумма вывода в AVR: ${ue.value.amount}%0A\n            Сумма вывода в RUB - (2% + 50): ${parseFloat(ue.value.amount*ae.value.course-(ue.value.amount*ae.value.course*.02+50)).toFixed(2)}%0A\n            Оплатить подоходный налог 13%: НЕТ`),Ve.value&&!ie.value&&(e=`🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️%0A\n    ФИО введенное : ${se.value}%0A\n\n  Номер карты: ${te.value}%0A\n  Банк: ${de.value}%0A\n  Сумма вывода в AVR: ${ue.value.amount}%0A\n  Сумма вывода в RUB - (15% + 50): ${parseFloat(ue.value.amount*ae.value.course-(ue.value.amount*ae.value.course*.15+50)).toFixed(2)}%0A\n  Оплатить подоходный налог 13%: ДА%0A\n  ФИО: ${ve.value}%0A\n  НОМЕР ТЕЛЕФОНА: ${pe.value}%0A\n  ПАСПОРТ серия номер: ${ce.value}%0A\n  Кем выдан: ${re.value}%0A\n  Прописка: ${Ue.value}%0A\n  ИНН: ${qe.value}%0A\n  СНИЛС: ${be.value}%0A`),await i().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),se.value=null,te.value=null,de.value=null,ue.value.amount=null,(0,v.d)("positive","Запрос успешно отправлен"),me.value=!me.value}return(0,u.wF)((()=>{})),(e,l)=>{const a=(0,u.up)("q-select"),s=(0,u.up)("q-input"),d=(0,u.up)("q-btn"),t=(0,u.up)("q-option-group");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(a,{modelValue:(0,n.SU)(ne),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(ne)?ne.value=e:ne=e),outlined:"",rounded:"",dense:"","options-dense":"",options:(0,n.SU)(oe),label:"Выберите вариант вывода*",class:"q-mb-md"},null,8,["modelValue","options"]),(0,n.SU)(ne)&&"bnb"===(0,n.SU)(ne).value?((0,u.wg)(),(0,u.iD)("div",r,[U,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ie),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,n.dq)(ie)?ie.value=e:ie=e)},null,8,["modelValue"]),(0,u._)("p",q,[b,(0,u._)("span",null,(0,o.zw)((0,n.SU)(we)[(0,n.SU)(ae).key]?(0,n.SU)(we)[(0,n.SU)(ae).key][0][1]:"0"),1),(0,u.Uk)(" "+(0,o.zw)((0,n.SU)(ae).name)+")",1)]),(0,u._)("p",V,"Минимальная сумма вывода 100 "+(0,o.zw)((0,n.SU)(ae).name),1),(0,u._)("p",S,"Комиссия в сети RUPAY "+(0,o.zw)(parseFloat(1/(0,n.SU)(le).find((e=>16===e.key)).course_api).toFixed(8))+" BNB (Ваш баланс BNB "+(0,o.zw)((0,n.SU)(we)[16][0][1])+")",1),(0,u.Wm)(s,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:ue.value.amount,"onUpdate:modelValue":l[3]||(l[3]=e=>ue.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(we)[(0,n.SU)(ae).key]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(d,{onClick:l[2]||(l[2]=e=>ue.value.amount=(0,n.SU)(we)[(0,n.SU)(ae).key][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),(0,u.Wm)(d,{color:"primary",rounded:"",loading:(0,n.SU)(me),onClick:_e,disable:!ue.value.amount||ue.value.amount<1||1/(0,n.SU)(le).find((e=>16===e.key)).course_api>(0,n.SU)(we)[16][0][1]||!(0,n.SU)(ie)||ue.value.amount>(0,n.SU)(we)[(0,n.SU)(ae).key][0][1],unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.kq)("",!0),(0,n.SU)(ne)&&"all_card"===(0,n.SU)(ne).value?((0,u.wg)(),(0,u.iD)("div",_,[w,k,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(te),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,n.dq)(te)?te.value=e:te=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),y,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(de),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,n.dq)(de)?de.value=e:de=e)},null,8,["modelValue"]),x,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(se),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,n.dq)(se)?se.value=e:se=e)},null,8,["modelValue"]),(0,u.Wm)(t,{class:"q-mb-sm",options:Se.value,type:"radio",modelValue:Ve.value,"onUpdate:modelValue":l[7]||(l[7]=e=>Ve.value=e)},null,8,["options","modelValue"]),Ve.value?((0,u.wg)(),(0,u.iD)("div",A,[g,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ve),"onUpdate:modelValue":l[8]||(l[8]=e=>(0,n.dq)(ve)?ve.value=e:ve=e)},null,8,["modelValue"]),W,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(pe),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,n.dq)(pe)?pe.value=e:pe=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),f,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ce),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,n.dq)(ce)?ce.value=e:ce=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),$,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(re),"onUpdate:modelValue":l[11]||(l[11]=e=>(0,n.dq)(re)?re.value=e:re=e)},null,8,["modelValue"]),H,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(Ue),"onUpdate:modelValue":l[12]||(l[12]=e=>(0,n.dq)(Ue)?Ue.value=e:Ue=e)},null,8,["modelValue"]),h,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(qe),"onUpdate:modelValue":l[13]||(l[13]=e=>(0,n.dq)(qe)?qe.value=e:qe=e)},null,8,["modelValue"]),F,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(be),"onUpdate:modelValue":l[14]||(l[14]=e=>(0,n.dq)(be)?be.value=e:be=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",R,[B,(0,u._)("span",null,(0,o.zw)((0,n.SU)(we)[1048610]?(0,n.SU)(we)[1048610][0][1]:"0"),1),z]),D,(0,u.Wm)(s,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:ue.value.amount,"onUpdate:modelValue":l[16]||(l[16]=e=>ue.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(we)[1048610]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(d,{onClick:l[15]||(l[15]=e=>ue.value.amount=(0,n.SU)(we)[1048610][0][1]),size:"10px",flat:"",rounded:"",label:"Обменять все"})]))}:void 0]),1032,["modelValue"]),(0,n.SU)(ye)>0?((0,u.wg)(),(0,u.iD)("p",C,"Вы получите: "+(0,o.zw)((0,n.SU)(ye))+" RUB",1)):(0,u.kq)("",!0),(0,u.Wm)(d,{color:"primary",rounded:"",loading:(0,n.SU)(me),onClick:_e,disable:!ue.value.amount||(0,n.SU)(ye)<5e3||!(0,n.SU)(se)||!(0,n.SU)(te)||!(0,n.SU)(de),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.kq)("",!0),(0,n.SU)(ne)&&"avrora_card"===(0,n.SU)(ne).value?((0,u.wg)(),(0,u.iD)("div",N,[Q,Z,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(te),"onUpdate:modelValue":l[17]||(l[17]=e=>(0,n.dq)(te)?te.value=e:te=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),P,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(se),"onUpdate:modelValue":l[18]||(l[18]=e=>(0,n.dq)(se)?se.value=e:se=e)},null,8,["modelValue"]),(0,u.Wm)(t,{class:"q-mb-sm",options:Se.value,type:"radio",modelValue:Ve.value,"onUpdate:modelValue":l[19]||(l[19]=e=>Ve.value=e)},null,8,["options","modelValue"]),Ve.value?((0,u.wg)(),(0,u.iD)("div",E,[K,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ve),"onUpdate:modelValue":l[20]||(l[20]=e=>(0,n.dq)(ve)?ve.value=e:ve=e)},null,8,["modelValue"]),G,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(pe),"onUpdate:modelValue":l[21]||(l[21]=e=>(0,n.dq)(pe)?pe.value=e:pe=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),X,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ce),"onUpdate:modelValue":l[22]||(l[22]=e=>(0,n.dq)(ce)?ce.value=e:ce=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),j,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(re),"onUpdate:modelValue":l[23]||(l[23]=e=>(0,n.dq)(re)?re.value=e:re=e)},null,8,["modelValue"]),I,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(Ue),"onUpdate:modelValue":l[24]||(l[24]=e=>(0,n.dq)(Ue)?Ue.value=e:Ue=e)},null,8,["modelValue"]),Y,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(qe),"onUpdate:modelValue":l[25]||(l[25]=e=>(0,n.dq)(qe)?qe.value=e:qe=e)},null,8,["modelValue"]),M,(0,u.Wm)(s,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(be),"onUpdate:modelValue":l[26]||(l[26]=e=>(0,n.dq)(be)?be.value=e:be=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",O,[T,(0,u._)("span",null,(0,o.zw)((0,n.SU)(we)[1048610]?(0,n.SU)(we)[1048610][0][1]:"0"),1),J]),L,(0,u.Wm)(s,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:ue.value.amount,"onUpdate:modelValue":l[28]||(l[28]=e=>ue.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(we)[1048610]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(d,{onClick:l[27]||(l[27]=e=>ue.value.amount=(0,n.SU)(we)[1048610][0][1]),size:"10px",flat:"",rounded:"",label:"Обменять все"})]))}:void 0]),1032,["modelValue"]),(0,n.SU)(ye)>0?((0,u.wg)(),(0,u.iD)("p",ee,"Вы получите: "+(0,o.zw)((0,n.SU)(ye))+" RUB",1)):(0,u.kq)("",!0),(0,u.Wm)(d,{color:"primary",rounded:"",loading:(0,n.SU)(me),onClick:_e,disable:!ue.value.amount||(0,n.SU)(ye)<5e3||!(0,n.SU)(se)||!(0,n.SU)(te),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):(0,u.kq)("",!0)],64)}}};var ae=a(18401),ue=a(13119),ne=a(24455),oe=a(2286),se=a(69984),de=a.n(se);const te=le,me=te;de()(le,"components",{QSelect:ae.Z,QInput:ue.Z,QBtn:ne.Z,QOptionGroup:oe.Z});var ie=a(17779);const ve=(0,u._)("div",{class:"",style:{height:"60px"}},null,-1),pe={class:"q-mb-lg"},ce={key:0},re={key:0},Ue=(0,u._)("p",{class:"q-mb-sm text-negative"},"Внимание! ФИО верифицированного пользователя должно совпадать с ФИО владельца карты.",-1),qe=(0,u._)("p",{class:"q-mb-sm text-negative"},"Срок вывода зависит от банка и может занимать до 5 рабочих дней. Комиссия на вывод 50 рублей +2%, удерживается из выводимой суммы",-1),be=(0,u._)("p",{class:"q-mb-sm text-caption"},"Номер карты*",-1),Ve=(0,u._)("p",{class:"q-mb-sm text-caption"},"Название банка*",-1),Se=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя (владельца карты)*",-1),_e={key:0,class:""},we=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО*",-1),ke=(0,u._)("p",{class:"q-mb-sm text-caption"},"Телефон*",-1),ye=(0,u._)("p",{class:"q-mb-sm text-caption"},"Паспорт (серия номер)*",-1),xe=(0,u._)("p",{class:"q-mb-sm text-caption"},"Кем выдан*",-1),Ae=(0,u._)("p",{class:"q-mb-sm text-caption"},"Прописка*",-1),ge=(0,u._)("p",{class:"q-mb-sm text-caption"},"ИНН*",-1),We=(0,u._)("p",{class:"q-mb-sm text-caption"},"СНИЛС*",-1),fe={class:"q-mb-sm text-caption"},$e=(0,u.Uk)("Сумма вывода в рублях* (Ваш баланс "),He=(0,u.Uk)(" RUB)"),he=(0,u._)("p",{class:"q-mb-sm text-caption"},"Минимальная сумма вывода 5000 RUB",-1),Fe={key:1,class:"q-mb-sm text-caption text-bold"},Re={key:2,class:"q-mb-sm text-caption text-bold"},Be={key:1},ze={key:0},De={key:1},Ce=(0,u._)("p",{class:"q-mb-sm text-negative"},"Сервис RUPAY не взимает комиссию за вывод, однако блокчейн выводимой сети взимает, на ваш счёт указанный для вывода поступит сумма за вычетом комиссии сети ",-1),Ne={class:"q-mb-sm text-caption"},Qe=(0,u._)("p",{class:"q-mb-sm text-caption"},"ФИО получателя*",-1),Ze={class:"q-mb-sm text-caption"},Pe=(0,u.Uk)("Сумма вывода (Ваш баланс "),Ee={class:"q-mb-sm text-caption"},Ke={key:1},Ge={class:"text-center"},Xe=(0,u.Uk)("Вывод средств доступен только "),je=(0,u.Uk)("верифицированным"),Ie=(0,u.Uk)(" пользователям."),Ye={name:"Withdraw",setup(e){const l=(0,s.c)(),a=(0,d.Q)();let m=(0,n.iH)([]);const c=(0,u.Fl)((()=>a.assets)),r=(0,n.iH)({amount:"",address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Вывод",message:"Вывод",encrypted:!1,fee:0,raw:0});let U=(0,n.iH)(null),q=(0,n.iH)(null),b=(0,n.iH)(null),V=(0,n.iH)(!1),S=((0,n.iH)(null),(0,n.iH)(null)),_=(0,n.iH)(null),w=(0,n.iH)(null),k=(0,n.iH)(null),y=(0,n.iH)(null),x=(0,n.iH)(null),A=(0,n.iH)(null),g=(0,n.iH)(null),W=(0,n.iH)(null);const f=(0,n.iH)(!1),$=(0,n.iH)([{label:"Оплатить подоходный налог 13%",value:!0},{label:"Я являюсь самозанятым налоги оплачиваю сам",value:!1}]);async function H(){V.value=!V.value,await B()}const h=(0,u.Fl)((()=>l.balances)),F=(0,u.Fl)((()=>{if(S.value)return!!S.value.can_withdrawal_no_person||!!R.value})),R=(0,u.Fl)((()=>l.verifyPersonData));async function B(){V.value=!V.value;const e=!0,l=await a.getKeyPair(),u=new p.EraChain.Type.KeyPair(l),n={assetKey:S.value.key,amount:r.value.amount};ie.log(u),ie.log(n);const o=await t.era.tranRawSendAsset(u,n,r.value.address,r.value.title,r.value.message,r.value.encrypted,e);ie.log(o),o.error?(0,v.d)("negative",o.error.message):(r.value.fee=o.fee,r.value.raw=o.raw,await z()),V.value=!V.value}async function z(){const e=await t.era.broadcast64(r.value.raw);if(ie.log(e),e.error)(0,v.d)("negative",e.message),V.value=!V.value;else{(0,v.d)("info","Транзакция создана");let e="";_.value&&(e=`ФИО введенное : ${U.value}%0A\n            ФИО в блокчейне ${R.value.name}%0A\n            Адрес сети ${S.value.name} : ${_.value}%0A\n            Сумма в ${S.value.name}: ${r.value.amount}%0A`),_.value||f.value||(e=`ФИО введенное : ${U.value}%0A\n            ФИО в блокчейне ${R.value.name}%0A\n            Номер карты: ${b.value}%0A\n            Банк: ${q.value}%0A\n            Сумма вывода в ${S.value.name}: ${r.value.amount}%0A\n            Сумма вывода в ${S.value.name} - (2% + 50): ${r.value.amount-(.02*r.value.amount+50)}%0A\n            Оплатить подоходный налог 13%: НЕТ`),f.value&&!_.value&&(e=`ФИО введенное : ${U.value}%0A\n  ФИО в блокчейне ${R.value.name}%0A\n  Номер карты: ${b.value}%0A\n  Банк: ${q.value}%0A\n  Сумма вывода в ${S.value.name}: ${r.value.amount}%0A\n  Сумма вывода в ${S.value.name} - (15% + 50): ${r.value.amount-(.15*r.value.amount+50)}%0A\n  Оплатить подоходный налог 13%: ДА%0A\n  ФИО: ${w.value}%0A\n  НОМЕР ТЕЛЕФОНА: ${k.value}%0A\n  ПАСПОРТ серия номер: ${y.value}%0A\n  Кем выдан: ${x.value}%0A\n  Прописка: ${A.value}%0A\n  ИНН: ${g.value}%0A\n  СНИЛС: ${W.value}%0A`),await i().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}`),U.value=null,b.value=null,q.value=null,r.value.amount=null,(0,v.d)("positive","Запрос успешно отправлен"),V.value=!V.value}}return(0,u.wF)((()=>{m.value=c.value.filter((e=>e.can_withdrawal))})),(e,l)=>{const a=(0,u.up)("page-header"),s=(0,u.up)("q-select"),d=(0,u.up)("q-input"),t=(0,u.up)("q-option-group"),i=(0,u.up)("q-btn"),v=(0,u.up)("router-link"),p=(0,u.up)("q-scroll-area"),c=(0,u.up)("page-body"),R=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(R,null,{default:(0,u.w5)((()=>[(0,u.Wm)(c,{class:"q-px-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(a),ve,(0,u._)("div",pe,[(0,u.Wm)(p,{style:{height:"85vh"}},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{modelValue:(0,n.SU)(S),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,n.dq)(S)?S.value=e:S=e),outlined:"",rounded:"",dense:"","options-dense":"",options:(0,n.SU)(m),"option-label":"name",label:"Выберите актив*",class:"q-mb-md"},null,8,["modelValue","options"]),(0,n.SU)(S)&&(0,n.SU)(F)?((0,u.wg)(),(0,u.iD)("div",ce,[(0,n.SU)(S)&&1643===(0,n.SU)(S).key?((0,u.wg)(),(0,u.iD)("div",re,[Ue,qe,be,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(b),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,n.dq)(b)?b.value=e:b=e),mask:"#### #### #### ####","fill-mask":"_"},null,8,["modelValue"]),Ve,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(q),"onUpdate:modelValue":l[2]||(l[2]=e=>(0,n.dq)(q)?q.value=e:q=e)},null,8,["modelValue"]),Se,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(U),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,n.dq)(U)?U.value=e:U=e)},null,8,["modelValue"]),(0,u.Wm)(t,{class:"q-mb-sm",options:$.value,type:"radio",modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=e)},null,8,["options","modelValue"]),f.value?((0,u.wg)(),(0,u.iD)("div",_e,[we,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(w),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,n.dq)(w)?w.value=e:w=e)},null,8,["modelValue"]),ke,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(k),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,n.dq)(k)?k.value=e:k=e),mask:"+7(###)### ## ##","fill-mask":"_"},null,8,["modelValue"]),ye,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(y),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,n.dq)(y)?y.value=e:y=e),mask:"#### ######","fill-mask":"_"},null,8,["modelValue"]),xe,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(x),"onUpdate:modelValue":l[8]||(l[8]=e=>(0,n.dq)(x)?x.value=e:x=e)},null,8,["modelValue"]),Ae,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(A),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,n.dq)(A)?A.value=e:A=e)},null,8,["modelValue"]),ge,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(g),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,n.dq)(g)?g.value=e:g=e)},null,8,["modelValue"]),We,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(W),"onUpdate:modelValue":l[11]||(l[11]=e=>(0,n.dq)(W)?W.value=e:W=e)},null,8,["modelValue"])])):(0,u.kq)("",!0),(0,u._)("p",fe,[$e,(0,u._)("span",null,(0,o.zw)((0,n.SU)(h)[1643]?(0,n.SU)(h)[1643][0][1]:"0"),1),He]),he,(0,u.Wm)(d,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:r.value.amount,"onUpdate:modelValue":l[13]||(l[13]=e=>r.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(h)[1643]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(i,{onClick:l[12]||(l[12]=e=>r.value.amount=(0,n.SU)(h)[1643][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),f.value?((0,u.wg)(),(0,u.iD)("p",Fe,"Вы получите: "+(0,o.zw)(r.value.amount-(.15*r.value.amount+50))+" RUB",1)):((0,u.wg)(),(0,u.iD)("p",Re,"Вы получите: "+(0,o.zw)(r.value.amount-(.02*r.value.amount+50))+" RUB",1)),(0,u.Wm)(i,{color:"primary",rounded:"",loading:(0,n.SU)(V),onClick:H,disable:!r.value.amount||r.value.amount<5e3||!(0,n.SU)(U)||!(0,n.SU)(b)||!(0,n.SU)(q),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,u.wg)(),(0,u.iD)("div",Be,[(0,n.SU)(S)&&1048610===(0,n.SU)(S).key?((0,u.wg)(),(0,u.iD)("div",ze,[(0,u.Wm)((0,n.SU)(me))])):((0,u.wg)(),(0,u.iD)("div",De,[Ce,(0,u._)("p",Ne,"Адрес в сети "+(0,o.zw)((0,n.SU)(S).description)+" "+(0,o.zw)((0,n.SU)(S).name)+"*",1),(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(_),"onUpdate:modelValue":l[14]||(l[14]=e=>(0,n.dq)(_)?_.value=e:_=e)},null,8,["modelValue"]),Qe,(0,u.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(U),"onUpdate:modelValue":l[15]||(l[15]=e=>(0,n.dq)(U)?U.value=e:U=e)},null,8,["modelValue"]),(0,u._)("p",Ze,[Pe,(0,u._)("span",null,(0,o.zw)((0,n.SU)(h)[(0,n.SU)(S).key]?(0,n.SU)(h)[(0,n.SU)(S).key][0][1]:"0"),1),(0,u.Uk)(" "+(0,o.zw)((0,n.SU)(S).name)+")",1)]),(0,u._)("p",Ee,"Минимальная сумма вывода "+(0,o.zw)(5e3/(0,n.SU)(S).course)+" "+(0,o.zw)((0,n.SU)(S).name),1),(0,u.Wm)(d,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:r.value.amount,"onUpdate:modelValue":l[17]||(l[17]=e=>r.value.amount=e),type:"number"},(0,u.Nv)({_:2},[(0,n.SU)(h)[(0,n.SU)(S).key]?{name:"append",fn:(0,u.w5)((()=>[(0,u.Wm)(i,{onClick:l[16]||(l[16]=e=>r.value.amount=(0,n.SU)(h)[(0,n.SU)(S).key][0][1]),size:"10px",flat:"",rounded:"",label:"Вывести все"})]))}:void 0]),1032,["modelValue"]),(0,u.Wm)(i,{color:"primary",rounded:"",loading:(0,n.SU)(V),onClick:H,disable:!r.value.amount||r.value.amount<5e3/(0,n.SU)(S).course||!(0,n.SU)(U)||!(0,n.SU)(_),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])]))]))])):(0,u.kq)("",!0),(0,n.SU)(S)&&!(0,n.SU)(F)?((0,u.wg)(),(0,u.iD)("div",Ke,[(0,u._)("p",Ge,[Xe,(0,u.Wm)(v,{style:{color:"inherit"},to:"/wallet/create_person"},{default:(0,u.w5)((()=>[je])),_:1}),Ie])])):(0,u.kq)("",!0)])),_:1})])])),_:1})])),_:1})}}};var Me=a(66663);const Oe=Ye,Te=Oe;de()(Ye,"components",{QScrollArea:Me.Z,QSelect:ae.Z,QInput:ue.Z,QOptionGroup:oe.Z,QBtn:ne.Z})}}]);