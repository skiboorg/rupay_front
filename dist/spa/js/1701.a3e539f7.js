"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[1701],{75008:(e,t,a)=>{a.d(t,{C:()=>s,d:()=>o});var n=a(13433),l=a(17779);const o=({seed:e,password:t})=>{const a={status:!0,seed:e},l=n.createCipher("aes192",t);return l.update(JSON.stringify(a),"utf8","hex")+l.final("hex")},s=({hash:e,password:t})=>{try{const a=n.createDecipher("aes192",t),l=a.update(e,"hex","utf8")+a.final("utf8"),o=JSON.parse(l);return!!o.status&&o.seed}catch(a){return l.log(a),!1}}},81701:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var n=a(59835),l=a(86970);const o={class:""},s={class:"container"},i={class:"main-grid"},c=(0,n._)("div",{class:"main-grid__text_top"},[(0,n._)("h3",{class:"main-grid__text_top_heading"},[(0,n._)("span",null,"Блокчейн "),(0,n._)("br"),(0,n.Uk)(" платформа. ")]),(0,n._)("p",{class:"main-grid__text_top_paragraph"}," Данный сайт является WEB-клиентом блокчейн-платформы RUpay. ")],-1),u={class:"auth-card"},r={class:"auth-card__buttons flex items-center justify-center"};function d(e,t,a,d,g,p){const v=(0,n.up)("q-btn"),m=(0,n.up)("Login"),_=(0,n.up)("Register"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{padding:""},{default:(0,n.w5)((()=>[(0,n._)("section",o,[(0,n._)("div",s,[(0,n._)("div",i,[c,(0,n._)("div",u,[(0,n._)("div",r,[(0,n.Wm)(v,{onClick:t[0]||(t[0]=e=>d.loginActive=!0),unelevated:"","no-caps":"",class:(0,l.C_)([{"not-active":!d.loginActive},"text-bold auth-card__button q-mr-xl"]),color:[d.loginActive?"primary":""],size:"26px",label:"Авторизация"},null,8,["class","color"]),(0,n.Wm)(v,{onClick:t[1]||(t[1]=e=>d.loginActive=!1),unelevated:"","no-caps":"",class:(0,l.C_)([{"not-active":d.loginActive},"text-bold auth-card__button"]),color:[d.loginActive?"":"primary"],size:"26px",label:"Регистрация"},null,8,["class","color"])]),d.loginActive?((0,n.wg)(),(0,n.j4)(m,{key:0,onSeedGood:d.setSeed},null,8,["onSeedGood"])):(0,n.kq)("",!0),d.loginActive?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(_,{key:1,onOpenLogin:d.openLogin},null,8,["onOpenLogin"]))])])])])])),_:1})}a(46727);var g=a(60499),p=a(87270),v=a(75008),m=a(18910),_=a(96928),w=a(43463),f=a(7363),h=a(99407),y=a(23459),k=(a(98030),a(46190)),b=a(31655),x=a(17779);(0,y.Q)();const S=(0,k.c)(),q=(0,b.T)(),C=(0,n.Fl)((()=>S.verifyPersonData?S.verifyPersonData:{name:null})),H=new Audio("notify.mp3"),D=(0,f.Q_)("ws",(()=>{let e=null;async function t(t){return x.log(C.value),e=new WebSocket("wss://xn--k1affs.xn--p1ai/ws/user/online"),e.onopen=()=>{x.log("ws connected",t);const a=localStorage.getItem("is_ref");x.log("is_ref",a);let n=!1;a&&(n=!0),e.send(JSON.stringify({wallet:t,fio:C.value.name,is_ref:n})),e.onmessage=async e=>{x.log("message",JSON.parse(e.data));let t=JSON.parse(e.data);if("update_user_notifications"===t.event&&(await q.get_notifications(),H.play()),"update_trade"===t.event){let e=t.message;x.log(q.current_trade_uid),await q.get_notifications(),q.current_trade_uid===e&&"freeze"===t.event_id&&(0,p.d)("positive",q.trade.asset_amount)}}},Promise.resolve("Success")}return{connectWS:t}})),W={key:0},L={key:0,class:"flex column justify-between"},A={class:""},O={key:1,class:"pincode-tab"},P={name:"Login",emits:["seedGood"],setup(e,{emit:t}){const a=(0,m.tv)(),l=(0,_.t)(),o=(0,w.s)(),s=D(),i=(0,g.iH)(""),c=(0,g.iH)(""),u=((0,g.iH)(!0),localStorage.getItem("hash"));async function r(e){const t=(0,v.C)({hash:u,password:e});t?(i.value=t,await d()):(0,p.d)("negative","Неверный пинкод")}async function d(){o.toggleLoadingState();const e=(0,v.d)({seed:i.value,password:c.value});await l.login(i.value,e);const t=localStorage.getItem("addresses");await s.connectWS(JSON.parse(t)[0].address),o.toggleLoadingState(),await a.push({name:"wallet_index"})}async function f(e){c.value=e,await d()}async function h(){await l.logout()}function y(e){const a=/^[A-Za-z0-9]+$/;return!!a.test(e)&&(t("seedGood",{val:[43,44,86,87,88].includes(e.length)}),[43,44,86,87,88].includes(e.length))}return(e,t)=>{const a=(0,n.up)("q-input"),l=(0,n.up)("pin-code"),o=(0,n.up)("q-btn");return(0,g.SU)(u)?((0,n.wg)(),(0,n.iD)("div",O,[(0,n.Wm)(l,{showDigits:!1,onPincode_ready:r}),(0,n.Wm)(o,{rounded:"","no-caps":"",outline:"",flat:"",class:"full-width q-mt-md",onClick:h,size:"14px",dense:"",color:"negative",label:"Я забыл пин-код. Сбросить все данные"})])):((0,n.wg)(),(0,n.iD)("div",W,[(0,n.Wm)(a,{autofocus:"",outlined:"",rounded:"",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),color:"primary",label:"Введите Ваш сид",rules:[e=>e&&e.length>0||"Это обязательное поле",e=>y(e)||"Введен не корректный сид"]},null,8,["modelValue","rules"]),y(i.value)?((0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("div",A,[(0,n.Wm)(l,{showDigits:!0,onPincode_ready:f})])])):(0,n.kq)("",!0)]))}}};var Q=a(24455),U=a(13119),I=a(69984),Z=a.n(I);const j=P,J=j;Z()(P,"components",{QBtn:Q.Z,QInput:U.Z});const N={key:0,class:""},V=(0,n._)("p",{class:"text-weight-bold text-center text-h6"},"Дополнительные соглашения",-1),z=(0,n._)("p",{class:"text-weight-bold"},"Убедитесь, что вы со всем согласны:",-1),R=["innerHTML"],B=(0,n._)("p",null,[(0,n._)("a",{target:"_blank",href:"https://wallet.rupay.pro/rupay_user_agreement.pdf"},"Пользовательское соглашение")],-1),G={key:1,class:""},T={key:2,class:""},F=(0,n._)("p",null,"Ваш сид:",-1),Y={style:{"word-break":"break-all"},class:"text-caption bg-grey-3 q-pa-md"},E=(0,n._)("p",{class:"text-caption text-negative q-pa-md text-weight-medium"}," Скопируйте или запишите ваш сид (секретный ключ) и сохраните его в максимально защищенном месте. Ни в коем случае не делитесь и никому не сообщайте ваш сид (секретный ключ)!!! ",-1),M={name:"Register",emits:["openLogin"],setup(e,{emit:t}){const a=(0,_.t)(),o=(0,m.tv)(),s=D(),i=(0,g.iH)(1),c=(0,g.iH)(""),u=((0,g.iH)(!0),(0,g.iH)(!1)),r=(0,g.iH)(!1);let d=(0,g.iH)(null);const w=(0,g.iH)([{agree:!1,text:" Я согласен с тем, что доступ к сиду и ключам, имеется только у меня.\n     При утере сида, доступ к счетам  будет <strong>невозможно</strong> восстановить "},{agree:!1,text:" Я согласен с тем, что <strong>при передаче сида</strong>  третьим лицам,\n    я могу <strong>лишиться всех средств</strong> находящихся на счетах "},{agree:!1,text:"Я <strong>прочитал и согласен</strong> с пользовательским соглашением об общих условиях использования мобильного платежного приложения «RUPAY» "}]),f=(0,n.Fl)((()=>w.value[0].agree&&w.value[1].agree&&w.value[2].agree));function y(){t("openLogin")}async function k(e){c.value=e,await b()}async function b(){u.value=!u.value,d.value=await h.EraChain.Crypt.generateSeed(),u.value=!u.value,i.value=3}async function x(){u.value=!u.value;const e=(0,v.d)({seed:d.value,password:c.value});await a.login(d.value,e);const t=localStorage.getItem("addresses");await s.connectWS(JSON.parse(t)[0].address),await o.push({name:"wallet_index"}),u.value=!u.value}async function S(){await(0,p.Q)(d.value,"positive","Сид скопирован"),r.value=!0}return(e,t)=>{const a=(0,n.up)("q-toggle"),o=(0,n.up)("btn"),s=(0,n.up)("pin-code"),c=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[1===i.value?((0,n.wg)(),(0,n.iD)("div",N,[V,z,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.value,((e,t)=>((0,n.wg)(),(0,n.j4)(a,{modelValue:w.value[t].agree,"onUpdate:modelValue":e=>w.value[t].agree=e,"checked-icon":"check",color:"green","unchecked-icon":"clear",class:"text-caption q-mb-md",style:{"line-height":"110%"}},{default:(0,n.w5)((()=>[(0,n._)("p",{class:"no-margin",innerHTML:e.text},null,8,R)])),_:2},1032,["modelValue","onUpdate:modelValue"])))),256)),B,(0,g.SU)(f)?((0,n.wg)(),(0,n.j4)(o,{key:0,label:"Продолжить",onClick:t[0]||(t[0]=e=>i.value=2),type:"submit",outline:!1})):(0,n.kq)("",!0)])):(0,n.kq)("",!0),2===i.value?((0,n.wg)(),(0,n.iD)("div",G,[(0,n.Wm)(s,{showDigits:!0,onPincode_ready:k}),(0,n._)("div",{class:"text-center q-mt-md"},[(0,n._)("p",{class:"text-caption no-margin",onClick:y},"У меня есть сид")])])):(0,n.kq)("",!0),3===i.value?((0,n.wg)(),(0,n.iD)("div",T,[F,(0,n._)("p",Y,(0,l.zw)((0,g.SU)(d)),1),(0,n.Wm)(c,{rounded:"",outline:"",onClick:S,"no-caps":"",label:"Скопировать сид",unelevated:"",color:"primary",class:"full-width q-mb-md"}),E,(0,n.Wm)(o,{label:r.value?"Продолжить":"Для продолжения скопируйте сид",disabled:!r.value,is_loading:u.value,onClick:x,type:"submit",outline:!1},null,8,["label","disabled","is_loading"])])):(0,n.kq)("",!0)],64)}}};var K=a(23175);const $=M,X=$;Z()(M,"components",{QToggle:K.Z,QBtn:Q.Z});const ee={name:"IndexPage",components:{Register:X,Login:J},preFetch({redirect:e,router:t}){localStorage.getItem("seed")},setup(){const e=(0,g.iH)(!0),t=(0,g.iH)(!1),a=localStorage.getItem("hash");function n(e){t.value=e.val}function l(a){t.value=!1,e.value=!0}return{loginActive:e,is_seed_good:t,hash:a,setSeed:n,openLogin:l}}};var te=a(11639),ae=a(69885);const ne=(0,te.Z)(ee,[["render",d]]),le=ne;Z()(ee,"components",{QPage:ae.Z,QBtn:Q.Z})}}]);