(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[6621],{36621:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>he});a(18964);var t=a(59835),s=a(60499),n=a(86970),u=a(29565),o=a.n(u),d=a(23459),i=a(46190),c=a(91569),m=a(39981),r=a.n(m),p=a(18910),v=a(87270),b=a(65054),_=a(17779),w=a(3168);const y=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),x={key:0,class:"q-mb-lg"},g={key:0},U={class:"q-mb-sm text-caption"},k={class:"text-weight-medium q-mb-sm"},q={class:"q-mb-sm text-caption"},z={class:"text-weight-bold"},h=(0,t._)("br",null,null,-1),S={class:"text-negative"},f=(0,t._)("br",null,null,-1),$={class:"q-mb-sm text-caption text-bold"},F={key:1},V={class:"q-mb-sm text-caption"},W={class:"q-mb-sm text-caption"},H={class:"text-weight-medium q-mb-sm"},A={class:"q-mb-sm text-caption"},D=["innerHTML"],C=(0,t._)("br",null,null,-1),R=(0,t.Uk)(),M={class:"text-weight-bold"},j=(0,t._)("br",null,null,-1),P={class:"text-weight-bold"},E={class:"q-mb-sm text-caption"},N={key:1,class:"q-mb-lg"},Q={key:0},Z={key:0,class:""},B={class:"q-mb-sm text-caption"},I=(0,t._)("br",null,null,-1),T={class:"text-bold text-negative"},J={class:"q-mb-sm flex items-center justify-between"},L={class:"no-margin text-caption text-bold"},O={class:"no-margin text-caption text-bold"},Y={key:1},G={class:"text-center text-negative text-bold"},K={class:"text-center text-positive text-bold"},X=(0,t.Uk)("P2P"),ee={key:1},le={key:0},ae={key:0},te=(0,t._)("p",{class:"q-mb-sm text-caption"},[(0,t.Uk)("Сумма пополнения в рублях* ("),(0,t._)("span",{class:"text-bold text-negative"},"мининум 1000 руб"),(0,t.Uk)(")")],-1),se={class:"q-mb-sm text-caption text-bold"},ne={key:1},ue=(0,t._)("p",{class:"text-bold"},"Внимание!",-1),oe={class:"q-mb-sm text-caption"},de={class:"q-mb-sm text-caption text-weight-bold"},ie=(0,t._)("p",{class:"q-mb-sm text-caption text-weight-bold"}," ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.",-1),ce={class:"q-mb-sm text-caption"},me=(0,t._)("div",{class:"text-center"},[(0,t._)("img",{style:{width:"300px",height:"300px","object-fit":"contain"},src:o()})],-1),re=(0,t._)("p",{class:"q-mb-lg text-caption"},[(0,t._)("span",{style:{"font-weight":"bold"}},"Реквизиты для оплаты взносов"),(0,t._)("br"),(0,t.Uk)(" Номер счёта: 40703810326350000009"),(0,t._)("br"),(0,t.Uk)(" Валюта: RUR"),(0,t._)("br"),(0,t.Uk)(' Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"'),(0,t._)("br"),(0,t.Uk)(" ИНН: 2366034781"),(0,t._)("br"),(0,t.Uk)(" КПП: 236601001"),(0,t._)("br"),(0,t.Uk)(' Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'),(0,t._)("br"),(0,t.Uk)(" БИК: 046015207"),(0,t._)("br"),(0,t.Uk)(" Кор. счёт: 30101810500000000207"),(0,t._)("br"),(0,t.Uk)(" Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи")],-1),pe={key:1},ve={class:"text-center text-negative text-bold"},be={class:"text-center text-positive text-bold"},_e=(0,t.Uk)("P2P"),we={name:"Buy",setup(e){const l=(0,d.Q)(),a=(0,i.c)(),u=(0,p.yj)(),o="https://rupay.pro";let m=(0,s.iH)(null),we=(0,s.iH)(null),ye=(0,s.iH)(null),xe=(0,s.iH)(null),ge=(0,s.iH)(!1),Ue=(0,s.iH)(!1),ke=(0,s.iH)(0),qe=(0,s.iH)(1e3),ze=(0,s.iH)(0);const he=(0,s.iH)("");(0,s.iH)(.02);let Se=(0,s.iH)(0);const fe=(0,s.iH)({label:"Visa/Mastercard/МИР",value:"Card1",currency:"RUB",min:1e3,max:15e3,commission:.06,disabled:!1}),$e=(0,t.Fl)((()=>{if(1048615===De.value.key||1643===De.value.key||1048619===De.value.key||2===De.value.key){ze.value=qe.value;let e=parseFloat(parseFloat(De.value.course)+parseFloat(De.value.course*fe.value.commission)).toFixed(2);return _.log(e),Se.value=De.value.course,parseFloat(qe.value/e).toFixed(5)}return ze.value=qe.value,Se.value=parseFloat(parseFloat(De.value.course)+.1*parseFloat(De.value.course)),parseFloat(parseFloat(qe.value/Se.value)).toFixed(5)})),Fe=(0,s.iH)(null);async function Ve(e){ge.value=!ge.value,_.log(De.value);const l=await r().post(o+"/api/data/check_tx_hash",{tx:he.value.replace(/\s/g,""),wallet:Ce.value,network:Fe.value,target_asset:{name:De.value.name,key:De.value.key,to:De.value.round_to}});l.data.success?(0,v.d)("positive",JSON.stringify(l.data.message)):(0,v.d)("negative",JSON.stringify(l.data.message)),he.value=null,ge.value=!ge.value}async function We(){ge.value=!ge.value;const e=await r().post(o+"/api/data/create_payment",{wallet:Ce.value,type:fe.value.value,want_to_buy:$e.value,amount:ze.value,currency:2===De.value.key||1643===De.value.key||1048610===De.value.key?fe.value.currency:"USD",asset_id:De.value.key,redirect_url:w.env.PAYMENT_REDIRECT_URL});ge.value=!ge.value,e.data.success?window.location.href=e.data.url:(0,v.d)("negative",JSON.stringify(e.data.message))}async function He(){ge.value=!ge.value,we.value=Re(4),await c.h.post("/api/settings/payment_request",{code:we.value,wallet:Ce.value,fromWallet:xe.value,currency:De.value.name,amount:ye.value});let e="";1048610===De.value.key&&(e="🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️"),await r().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}Запрос на пополнение с RUPAY%0A\n  Код : ${we.value}%0A\n  С кошелека ${xe.value}%0A\n  На кошелек ${Ce.value}%0A\n  Актив ${De.value.name}%0A\n  Сумма пополнения: ${ye.value} ${De.value.name}\n\n`),xe.value=null,ye.value=null,ge.value=!ge.value,Ue.value=!0,(0,v.d)("positive","Успешно/Success")}function Ae(){(0,b.Z)(De.value.from_address).then((()=>{(0,v.d)("positive","Адрес кошелька скопирован/Wallet address copied")})).catch((()=>{}))}const De=(0,t.Fl)((()=>{const e=l.assets.find((e=>e.key===ke.value));return Fe.value=e.networks[0],e})),Ce=(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address));function Re(e){for(var l="",a="0123456789",t=a.length,s=0;s<e;s++)l+=a.charAt(Math.floor(Math.random()*t));return l}return(0,t.wF)((async()=>{ke.value=parseInt(u.query.asset),m.value=u.query.type})),(e,l)=>{const a=(0,t.up)("page-header"),u=(0,t.up)("q-select"),o=(0,t.up)("q-btn"),d=(0,t.up)("q-input"),i=(0,t.up)("router-link"),c=(0,t.up)("q-scroll-area"),r=(0,t.up)("page-body"),p=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(a),y,"other"===(0,s.SU)(m)?((0,t.wg)(),(0,t.iD)("div",x,[(0,s.SU)(De).is_can_buy_by_tx_check?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(u,{class:"q-mb-md",rounded:"",outlined:"",dense:"",label:e.$t("choose_network"),modelValue:Fe.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Fe.value=e),options:(0,s.SU)(De).networks,"option-label":"name"},null,8,["label","modelValue","options"]),(0,t._)("p",U,(0,n.zw)(e.$t("create_transaction"))+":",1),(0,t._)("p",k,(0,n.zw)(Fe.value.address),1),(0,t.Wm)(o,{rounded:"",class:"q-mb-sm",color:"primary",label:e.$t("address_copy_btn"),onClick:Ae,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"},null,8,["label"]),(0,t._)("p",q,[(0,t.Uk)((0,n.zw)(e.$t("send_only"))+" ",1),(0,t._)("span",z,(0,n.zw)((0,s.SU)(De).name)+" "+(0,n.zw)(Fe.value.description),1),h,(0,t._)("span",S,(0,n.zw)(e.$t("send_only11")),1),f]),(0,t._)("p",$,(0,n.zw)(e.$t("after_transaction")),1),(0,t.Wm)(d,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:he.value,"onUpdate:modelValue":l[1]||(l[1]=e=>he.value=e)},null,8,["modelValue"]),(0,t.Wm)(o,{rounded:"",color:"primary",loading:(0,s.SU)(ge),onClick:l[2]||(l[2]=e=>Ve("usdt")),disable:!he.value,unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("check_transaction")},null,8,["loading","disable","label"])])):((0,t.wg)(),(0,t.iD)("div",F,[(0,t._)("p",V,(0,n.zw)(e.$t("wallet_from")),1),(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,s.SU)(xe),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,s.dq)(xe)?xe.value=e:xe=e)},null,8,["modelValue"]),(0,t._)("div",null,[(0,t._)("p",W,(0,n.zw)(e.$t("wallet_to")),1),(0,t._)("p",H,(0,n.zw)((0,s.SU)(De).from_address),1),(0,t.Wm)(o,{rounded:"",class:"q-mb-sm",color:"primary",label:e.$t("address_copy_btn"),onClick:Ae,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"},null,8,["label"]),(0,t._)("p",A,[(0,t._)("span",{class:"text-negative",innerHTML:e.$t("send_only")},null,8,D),C,R,(0,t._)("span",M,(0,n.zw)((0,s.SU)(De).name)+" "+(0,n.zw)((0,s.SU)(De).description),1),j,(0,t.Uk)(" "+(0,n.zw)(e.$t("send_only1")),1),(0,t._)("span",P,(0,n.zw)((0,s.SU)(De).name),1),(0,t.Uk)(" "+(0,n.zw)(e.$t("send_only2"))+(0,n.zw)((0,s.SU)(De).name)+" "+(0,n.zw)(e.$t("send_only3")),1)]),(0,t._)("p",E,(0,n.zw)(e.$t("buy_amomunt"))+"*",1),(0,t.Wm)(d,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(ye),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,s.dq)(ye)?ye.value=e:ye=e),type:"number"},null,8,["modelValue"]),(0,t.Wm)(o,{rounded:"",color:"primary",loading:(0,s.SU)(ge),onClick:He,disable:!(0,s.SU)(ye)||!(0,s.SU)(xe),unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("send_btn")},null,8,["loading","disable","label"])])]))])):((0,t.wg)(),(0,t.iD)("div",N,[(0,t.Wm)(c,{style:{height:"85vh"}},{default:(0,t.w5)((()=>["rs"!==fe.value.value?((0,t.wg)(),(0,t.iD)("div",Q,[fe.value.disabled?((0,t.wg)(),(0,t.iD)("div",Y,[(0,t._)("p",G,(0,n.zw)(e.$t("buy_disable")),1),(0,t._)("p",K,[(0,t.Uk)((0,n.zw)(e.$t("buy_disable_p2p"))+" ",1),(0,t.Wm)(i,{to:{name:"p2p_index"}},{default:(0,t.w5)((()=>[X])),_:1})])])):((0,t.wg)(),(0,t.iD)("div",Z,[(0,t._)("p",B,[(0,t.Uk)((0,n.zw)(e.$t("buy_amomunt"))+" "+(0,n.zw)(fe.value.currency)+"*",1),I,(0,t._)("span",T,(0,n.zw)(e.$t("buy_amomunt_min"))+" "+(0,n.zw)(fe.value.min)+" "+(0,n.zw)(fe.value.currency)+", "+(0,n.zw)(e.$t("buy_amomunt_max"))+" "+(0,n.zw)(fe.value.max)+" "+(0,n.zw)(fe.value.currency)+", "+(0,n.zw)(e.$t("buy_amomunt_comission"))+" "+(0,n.zw)(100*fe.value.commission)+" % ",1)]),(0,t.Wm)(d,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(qe),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,s.dq)(qe)?qe.value=e:qe=e),type:"number",label:e.$t("buy_amomunt_label")},null,8,["modelValue","label"]),(0,t._)("div",J,[(0,t._)("p",L,(0,n.zw)(e.$t("buy_amomunt_total"))+": "+(0,n.zw)((0,s.SU)($e))+" "+(0,n.zw)((0,s.SU)(De).name),1),(0,t._)("p",O,(0,n.zw)(e.$t("buy_amomunt_cource"))+": "+(0,n.zw)(parseFloat((0,s.SU)(Se)).toFixed(2))+" RUB",1)]),(0,t.Wm)(o,{color:"primary",rounded:"",loading:(0,s.SU)(ge),onClick:We,disable:(0,s.SU)(qe)<fe.value.min||(0,s.SU)(qe)>fe.value.max,unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("send_btn")},null,8,["loading","disable","label"])]))])):((0,t.wg)(),(0,t.iD)("div",ee,[fe.value.disabled?((0,t.wg)(),(0,t.iD)("div",pe,[(0,t._)("p",ve,(0,n.zw)(e.$t("buy_disable")),1),(0,t._)("p",be,[(0,t.Uk)((0,n.zw)(e.$t("buy_disable_p2p"))+" ",1),(0,t.Wm)(i,{to:{name:"p2p_index"}},{default:(0,t.w5)((()=>[_e])),_:1})])])):((0,t.wg)(),(0,t.iD)("div",le,[(0,s.SU)(Ue)?((0,t.wg)(),(0,t.iD)("div",ne,[ue,(0,t._)("p",oe,"Для пополнения вашего баланса "+(0,n.zw)((0,s.SU)(De).name)+" по указанным реквизитам ниже совершаете оплату в назначении платежа указать:",1),(0,t._)("p",de," Добровольный членский взнос от ФИО, КОД "+(0,n.zw)((0,s.SU)(we)),1),ie,(0,t._)("p",ce," Зачисление "+(0,n.zw)((0,s.SU)(De).name)+" происходит в течении нескольких часов после получения средств на счет! Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее. Оплата с других банков может затянуть зачисление до 5 рабочих дней.",1),me,re])):((0,t.wg)(),(0,t.iD)("div",ae,[te,(0,t.Wm)(d,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(ye),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,s.dq)(ye)?ye.value=e:ye=e),type:"number"},null,8,["modelValue"]),(0,t._)("p",se,"Вы получите: "+(0,n.zw)((0,s.SU)(ye)/(0,s.SU)(De).course)+" "+(0,n.zw)((0,s.SU)(De).name),1),(0,t.Wm)(o,{color:"primary",loading:(0,s.SU)(ge),onClick:He,disable:!(0,s.SU)(ye)||(0,s.SU)(ye)<1e3,unelevated:"","no-caps":"",class:"full-width q-py-md q-mb-md",rounded:"",label:"Отправить"},null,8,["loading","disable"])]))]))]))])),_:1})]))])),_:1})])),_:1})}}};var ye=a(18401),xe=a(24455),ge=a(13119),Ue=a(66663),ke=a(69984),qe=a.n(ke);const ze=we,he=ze;qe()(we,"components",{QSelect:ye.Z,QBtn:xe.Z,QInput:ge.Z,QScrollArea:Ue.Z})},29565:(e,l,a)=>{e.exports=a.p+"img/qr.28e572d7.jpg"}}]);