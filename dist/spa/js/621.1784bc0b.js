(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[621],{36621:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>ye});var s=l(59835),t=l(60499),n=l(86970),u=l(29565),o=l.n(u),i=l(23459),d=l(46190),m=l(91569),c=l(39981),r=l.n(c),p=l(18910),v=l(87270),b=l(65054),y=l(17779);const _=(0,s._)("div",{class:"",style:{height:"60px"}},null,-1),U={key:0,class:"q-mb-lg"},w={key:0},g=(0,s._)("p",{class:"q-mb-sm text-caption"},"Укажите кошелек с которого будете совершать транзакцию*",-1),x=(0,s._)("p",{class:"q-mb-sm text-caption"},"С указанного вами кошелька совершаете транзакцию на адрес:",-1),k={class:"text-weight-medium q-mb-sm"},q={class:"q-mb-sm text-caption"},S=(0,s.Uk)(" Отправляйте на данный адрес только "),h={class:"text-weight-bold"},f=(0,s._)("br",null,null,-1),z=(0,s._)("span",{class:"text-negative"},"Отправка любых других монет приведет к их безвозвратной потере",-1),V=(0,s._)("br",null,null,-1),F=(0,s.Uk)(" Совершая транзакцию в "),H={class:"text-weight-bold"},W=(0,s._)("br",null,null,-1),A=(0,s.Uk)(" Зачисление происходит в сроки до 24 часов с момента транзакции (указаны максимальные сроки) "),C=(0,s._)("p",{class:"q-mb-sm text-caption"},"Сумма пополнения*",-1),D={key:1},$=(0,s._)("p",{class:"q-mb-sm text-caption"},"Cовершаете транзакцию на адрес:",-1),Q={class:"text-weight-medium q-mb-sm"},R={class:"q-mb-sm text-caption"},j=(0,s.Uk)(" Отправляйте на данный адрес только "),B={class:"text-weight-bold"},M=(0,s._)("br",null,null,-1),Z=(0,s._)("span",{class:"text-negative"},"Отправка любых других монет приведет к их безвозвратной потере",-1),N=(0,s._)("br",null,null,-1),I=(0,s._)("p",{class:"q-mb-sm text-caption text-bold"},"После проведения транзакции, скопируйте Transaction Hash, вставьте в поле ниже и нажмите кнопку проверить",-1),J={key:1,class:"q-mb-lg"},O={key:0},E={class:"q-mb-sm text-caption"},G=(0,s._)("br",null,null,-1),P={class:"text-bold text-negative"},T={class:"q-mb-sm text-caption text-bold"},Y={key:1},K={key:0},L=(0,s._)("p",{class:"q-mb-sm text-caption"},[(0,s.Uk)("Сумма пополнения в рублях* ("),(0,s._)("span",{class:"text-bold text-negative"},"мининум 1000 руб"),(0,s.Uk)(")")],-1),X={class:"q-mb-sm text-caption text-bold"},ee={key:1},ae=(0,s._)("p",{class:"text-bold"},"Внимание!",-1),le={class:"q-mb-sm text-caption"},se={class:"q-mb-sm text-caption text-weight-bold"},te=(0,s._)("p",{class:"q-mb-sm text-caption text-weight-bold"}," ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.",-1),ne={class:"q-mb-sm text-caption"},ue=(0,s._)("div",{class:"text-center"},[(0,s._)("img",{style:{width:"300px",height:"300px","object-fit":"contain"},src:o()})],-1),oe=(0,s._)("p",{class:"q-mb-lg text-caption"},[(0,s._)("span",{style:{"font-weight":"bold"}},"Реквизиты для оплаты взносов"),(0,s._)("br"),(0,s.Uk)(" Номер счёта: 40703810326350000009"),(0,s._)("br"),(0,s.Uk)(" Валюта: RUR"),(0,s._)("br"),(0,s.Uk)(' Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"'),(0,s._)("br"),(0,s.Uk)(" ИНН: 2366034781"),(0,s._)("br"),(0,s.Uk)(" КПП: 236601001"),(0,s._)("br"),(0,s.Uk)(' Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'),(0,s._)("br"),(0,s.Uk)(" БИК: 046015207"),(0,s._)("br"),(0,s.Uk)(" Кор. счёт: 30101810500000000207"),(0,s._)("br"),(0,s.Uk)(" Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи")],-1),ie={name:"Buy",setup(e){const a=(0,i.Q)(),l=(0,d.c)(),u=(0,p.yj)(),o="https://rupay.pro";let c=(0,t.iH)(null),ie=(0,t.iH)(null),de=(0,t.iH)(null),me=(0,t.iH)(null),ce=(0,t.iH)(!1),re=(0,t.iH)(!1),pe=(0,t.iH)(0),ve=(0,t.iH)(300),be=(0,t.iH)(0),ye=(0,t.iH)(null);(0,t.iH)(.02),(0,t.iH)(0);const _e=(0,t.iH)({label:"Visa/Mastercard/МИР",currency:"RUB",value:"Card1",min:300,max:5e4,commission:.1}),Ue=[{label:"Visa/Mastercard/МИР",value:"Card1",currency:"RUB",min:300,max:5e4,commission:.1},{label:"Qiwi",value:"Qiwi",currency:"RUB",min:300,max:5e4,commission:.1},{label:"Перевод на Р/С",value:"rs",currency:"RUB",min:1e3,max:5e4,commission:0}],we=(0,s.Fl)((()=>{if(1048610===Se.value.key||1048615===Se.value.key){be.value=ve.value;let e=parseFloat(parseFloat(Se.value.course)+parseFloat(Se.value.course*_e.value.commission)).toFixed(2);return y.log(e),parseFloat(ve.value/e).toFixed(5)}return 2===Se.value.key?(be.value=ve.value,parseFloat(parseFloat(ve.value/Se.value.course)).toFixed(5)):(be.value=ve.value*Se.value.course_api,parseFloat(ve.value).toFixed(5))}));async function ge(){ce.value=!ce.value;const e=await r().post(o+"/api/data/check_tx_hash",{tx:ye.value,wallet:he.value,addr:Se.value.from_address});e.data.success?(0,v.d)("positive",JSON.stringify(e.data.message)):(0,v.d)("negative",JSON.stringify(e.data.message)),ce.value=!ce.value}async function xe(){ce.value=!ce.value;const e=await r().post(o+"/api/data/create_payment",{wallet:he.value,type:_e.value.value,want_to_buy:we.value,amount:be.value,currency:2===Se.value.key||1643===Se.value.key||1048610===Se.value.key?_e.value.currency:"USD",asset_id:Se.value.key});ce.value=!ce.value,e.data.success?window.location.href=e.data.url:(0,v.d)("negative",JSON.stringify(e.data.message))}async function ke(){ce.value=!ce.value,await m.h.post("/api/settings/payment_request",{code:ie.value,wallet:he.value,fromWallet:me.value,currency:Se.value.name,amount:de.value});let e="";1048610===Se.value.key&&(e="🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️"),await r().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}Запрос на пополнение с RUPAY%0A\n  Код : ${ie.value}%0A\n  С кошелека ${me.value}%0A\n  На кошелек ${he.value}%0A\n  Актив ${Se.value.name}%0A\n  Сумма пополнения: ${de.value} ${Se.value.name}\n\n`),ie.value=fe(4),me.value=null,de.value=null,ce.value=!ce.value,re.value=!0,(0,v.d)("positive","Запрос успешно отправлен<br>Ожидаем поступление средств")}function qe(){(0,b.Z)(Se.value.from_address).then((()=>{(0,v.d)("positive","Адрес кошелька скопирован")})).catch((()=>{}))}const Se=(0,s.Fl)((()=>a.assets.find((e=>e.key===pe.value)))),he=(0,s.Fl)((()=>l.addresses[l.currentAddressIdx].address));function fe(e){for(var a="",l="0123456789",s=l.length,t=0;t<e;t++)a+=l.charAt(Math.floor(Math.random()*s));return a}return(0,s.wF)((async()=>{pe.value=parseInt(u.query.asset),c.value=u.query.type,ie.value=fe(4),Se.value.payment_system&&(_e.value={label:Se.value.payment_system,value:Se.value.payment_system,currency:`${Se.value.name}`,min:Se.value.payment_min/Se.value.course_api,max:Se.value.payment_max/Se.value.course_api,commission:Se.value.payment_comission/100},ve.value=Se.value.payment_min/Se.value.course_api)})),(e,a)=>{const l=(0,s.up)("page-header"),u=(0,s.up)("q-input"),o=(0,s.up)("q-btn"),i=(0,s.up)("q-select"),d=(0,s.up)("q-scroll-area"),m=(0,s.up)("page-body"),r=(0,s.up)("page");return(0,s.wg)(),(0,s.j4)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"q-px-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(l),_,"other"===(0,t.SU)(c)?((0,s.wg)(),(0,s.iD)("div",U,[1048610!==(0,t.SU)(Se).key?((0,s.wg)(),(0,s.iD)("div",w,[g,(0,s.Wm)(u,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,t.SU)(me),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.dq)(me)?me.value=e:me=e)},null,8,["modelValue"]),(0,s._)("div",null,[x,(0,s._)("p",k,(0,n.zw)((0,t.SU)(Se).from_address),1),(0,s.Wm)(o,{rounded:"",class:"q-mb-sm",color:"primary",label:"Скопировать адрес",onClick:qe,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"}),(0,s._)("p",q,[S,(0,s._)("span",h,(0,n.zw)((0,t.SU)(Se).name)+" "+(0,n.zw)((0,t.SU)(Se).description),1),f,z,V,F,(0,s._)("span",H,(0,n.zw)((0,t.SU)(Se).name),1),(0,s.Uk)(" вы делаете добровольный имущественный паевой взнос ПКРГИ РОЛФ Равный количеству отправляемых "+(0,n.zw)((0,t.SU)(Se).name)+" Вывод монет с кошелька является выплатой по вашему взносу",1),W,A]),C,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(de),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,t.dq)(de)?de.value=e:de=e),type:"number"},null,8,["modelValue"]),(0,s.Wm)(o,{rounded:"",color:"primary",loading:(0,t.SU)(ce),onClick:ke,disable:!(0,t.SU)(de)||!(0,t.SU)(me),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])])):((0,s.wg)(),(0,s.iD)("div",D,[$,(0,s._)("p",Q,(0,n.zw)((0,t.SU)(Se).from_address),1),(0,s.Wm)(o,{rounded:"",class:"q-mb-sm",color:"primary",label:"Скопировать адрес",onClick:qe,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"}),(0,s._)("p",R,[j,(0,s._)("span",B,(0,n.zw)((0,t.SU)(Se).name)+" "+(0,n.zw)((0,t.SU)(Se).description),1),M,Z,N]),I,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(ye),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,t.dq)(ye)?ye.value=e:ye=e)},null,8,["modelValue"]),(0,s.Wm)(o,{rounded:"",color:"primary",loading:(0,t.SU)(ce),onClick:ge,disable:!(0,t.SU)(ye),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Проверить транзакцию"},null,8,["loading","disable"])]))])):((0,s.wg)(),(0,s.iD)("div",J,[(0,s.Wm)(d,{style:{height:"85vh"}},{default:(0,s.w5)((()=>["rs"!==_e.value.value?((0,s.wg)(),(0,s.iD)("div",O,[2===(0,t.SU)(Se).key||1643===(0,t.SU)(Se).key||1048610===(0,t.SU)(Se).key||1048615===(0,t.SU)(Se).key?((0,s.wg)(),(0,s.j4)(i,{key:0,rounded:"",modelValue:_e.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_e.value=e),outlined:"",dense:"",options:Ue,class:"q-mb-md",label:"Выберите тип оплаты"},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s._)("p",E,[(0,s.Uk)("Сумма пополнения в "+(0,n.zw)(_e.value.currency)+"*",1),G,(0,s._)("span",P," мининум "+(0,n.zw)(_e.value.min)+" "+(0,n.zw)(_e.value.currency)+", максимум "+(0,n.zw)(_e.value.max)+" "+(0,n.zw)(_e.value.currency)+", ",1)]),(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(ve),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,t.dq)(ve)?ve.value=e:ve=e),type:"number",label:"На какую сумму хотите пополнить*"},null,8,["modelValue"]),(0,s._)("p",T,"Вы получите: "+(0,n.zw)((0,t.SU)(we))+" "+(0,n.zw)((0,t.SU)(Se).name),1),(0,s.Wm)(o,{color:"primary",rounded:"",loading:(0,t.SU)(ce),onClick:xe,disable:(0,t.SU)(ve)<_e.value.min||(0,t.SU)(ve)>_e.value.max,unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,s.wg)(),(0,s.iD)("div",Y,[(0,t.SU)(re)?((0,s.wg)(),(0,s.iD)("div",ee,[ae,(0,s._)("p",le,"Для пополнения вашего баланса "+(0,n.zw)((0,t.SU)(Se).name)+" по указанным реквизитам ниже совершаете оплату в назначении платежа указать:",1),(0,s._)("p",se," Добровольный членский взнос от ФИО, КОД "+(0,n.zw)((0,t.SU)(ie)),1),te,(0,s._)("p",ne," Зачисление "+(0,n.zw)((0,t.SU)(Se).name)+" происходит в течении нескольких часов после получения средств на счет! Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее. Оплата с других банков может затянуть зачисление до 5 рабочих дней.",1),ue,oe])):((0,s.wg)(),(0,s.iD)("div",K,[L,(0,s.Wm)(u,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(de),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,t.dq)(de)?de.value=e:de=e),type:"number"},null,8,["modelValue"]),(0,s._)("p",X,"Вы получите: "+(0,n.zw)((0,t.SU)(de)/(0,t.SU)(Se).course)+" "+(0,n.zw)((0,t.SU)(Se).name),1),(0,s.Wm)(o,{color:"primary",loading:(0,t.SU)(ce),onClick:ke,disable:!(0,t.SU)(de)||(0,t.SU)(de)<1e3,unelevated:"","no-caps":"",class:"full-width q-py-md q-mb-md",rounded:"",label:"Отправить"},null,8,["loading","disable"])]))]))])),_:1})]))])),_:1})])),_:1})}}};var de=l(13119),me=l(24455),ce=l(66663),re=l(18401),pe=l(69984),ve=l.n(pe);const be=ie,ye=be;ve()(ie,"components",{QInput:de.Z,QBtn:me.Z,QScrollArea:ce.Z,QSelect:re.Z})},29565:(e,a,l)=>{e.exports=l.p+"img/qr.28e572d7.jpg"}}]);