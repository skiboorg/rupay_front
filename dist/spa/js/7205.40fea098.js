"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[7205],{87205:(t,e,l)=>{l.r(e),l.d(e,{default:()=>z});var a=l(59835),s=l(39981),c=l.n(s),n=l(60499),i=l(46190),o=(l(99407),l(98030),l(87270),l(23459)),r=l(17779);const d={class:"marketplace"},u={class:"container"},x=(0,a._)("div",{class:"row q-col-gutter-md"},[(0,a._)("div",{class:"col-12 col-md-6"},[(0,a._)("p",{class:"text-bold text-body1"},[(0,a.Uk)("Добро пожаловать в игру Крипто Шахта ⛏️"),(0,a._)("br"),(0,a._)("br"),(0,a.Uk)(" Игра созданная на блокчейне rupay. В игровой форме вы познакомитесь со всеми возможностями криптоиндустрии, сможете заработать реальную криптовалюту. Прокачивай своего персонажа и расширяй его, а значит и свой доход! ")])])],-1),p={class:"row q-col-gutter-md q-mb-md"},g={class:"col-12 col-md-4"},h=(0,a._)("p",{class:"no-margin text-center text-h6 text-bold"},"Всего играют",-1),b={class:"col-12 col-md-4"},m=(0,a._)("p",{class:"no-margin text-center text-h6 text-bold"},"Всего онлайн",-1),w={class:"col-12 col-md-4"},v=(0,a._)("p",{class:"no-margin text-positive text-center text-h6 text-bold"},"Пополнили OLF",-1),_={class:"col-12 col-md-2"},f=(0,a._)("p",{class:"no-margin text-negative text-center text-h6 text-bold"},"Вывели BTC",-1),y={class:"col-12 col-md-2"},H=(0,a._)("p",{class:"no-margin text-negative text-center text-h6 text-bold"},"Вывели ETH",-1),k={class:"col-12 col-md-2"},q=(0,a._)("p",{class:"no-margin text-negative text-center text-h6 text-bold"},"Вывели USDT",-1),j={class:"col-12 col-md-2"},Z=(0,a._)("p",{class:"no-margin text-negative text-center text-h6 text-bold"},"Вывели LTC",-1),Q={class:"col-12 col-md-2"},W=(0,a._)("p",{class:"no-margin text-negative text-center text-h6 text-bold"},"Вывели BNB",-1),B=(0,a._)("p",{class:"text-negative text-h5 text-center"},"Игровой процесс в разработке, станет доступен уже скоро",-1),C={name:"mine",setup(t){const e="https://chickenbro.ru",l=(0,i.c)();(0,o.Q)();let s=(0,n.iH)(!1);(0,n.iH)(!1),(0,n.iH)(!1);let C=(0,n.iH)({balance:0}),A=(0,n.iH)({}),L=(0,n.iH)(null),N=(0,n.iH)(null);(0,n.iH)({email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,is_loading:!1,isPwd:!0}),(0,n.iH)({wallet:null,password:null,email:null,reffer_code:null,fio:null});(0,n.iH)({label:"ChikenBro",value:"1048580"}),(0,n.iH)({amount:0,address:"7NBHJjDugvtNq9GsMMcwcbx7yNMAn47fLH",title:"Пополнение баланса игры",message:"Пополнение баланса игры",encrypted:!1,fee:0,raw:0});const T=(0,a.Fl)((()=>{try{return l.addresses[l.currentAddressIdx].address}catch(t){return!1}}));(0,a.wF)((async()=>{const t=await c().get(e+"/api/data/settings");if(A.value=t.data,T.value){const t=await c().get(e+`/api/user/get_user?wallet=${T.value}`);if(r.log(t.data.wallet),t.data.wallet){s.value=!0,C.value=t.data;const e=await c().get(`https://scan.rupay.pro/api/addressassetbalance/${t.data.wallet}/1048580`);L.value=e.data[0][1];const l=await c().get(`https://scan.rupay.pro/api/addressassetbalance/${t.data.wallet}/1`);N.value=l.data[0][1]}}}));return(t,e)=>{const l=(0,a.up)("q-badge"),s=((0,a.up)("q-spinner"),(0,a.up)("q-inner-loading"),(0,a.up)("q-input"),(0,a.up)("q-btn"),(0,a.up)("pin-code"),(0,a.up)("q-select"),(0,a.up)("q-page"));return(0,a.wg)(),(0,a.j4)(s,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("section",d,[(0,a._)("div",u,[x,(0,a._)("div",p,[(0,a._)("div",g,[(0,a.Wm)(l,{color:"warning",class:"text-dark text-h6 text-bold full-width justify-center",label:1}),h]),(0,a._)("div",b,[(0,a.Wm)(l,{color:"warning",class:"text-dark text-h6 text-bold full-width justify-center",label:1}),m]),(0,a._)("div",w,[(0,a.Wm)(l,{color:"positive",class:"text-white text-h6 text-bold full-width justify-center",label:100}),v]),(0,a._)("div",_,[(0,a.Wm)(l,{color:"negative",class:"text-white text-h6 text-bold full-width justify-center",label:0}),f]),(0,a._)("div",y,[(0,a.Wm)(l,{color:"negative",class:"text-white text-h6 text-bold full-width justify-center",label:0}),H]),(0,a._)("div",k,[(0,a.Wm)(l,{color:"negative",class:"text-white text-h6 text-bold full-width justify-center",label:0}),q]),(0,a._)("div",j,[(0,a.Wm)(l,{color:"negative",class:"text-white text-h6 text-bold full-width justify-center",label:0}),Z]),(0,a._)("div",Q,[(0,a.Wm)(l,{color:"negative",class:"text-white text-h6 text-bold full-width justify-center",label:0}),W])]),B,(0,a.kq)("",!0)])])])),_:1})}}};var A=l(69885),L=l(20990),N=l(60854),T=l(63940),$=l(13119),F=l(24455),I=l(18401),M=l(69984),S=l.n(M);const U=C,z=U;S()(C,"components",{QPage:A.Z,QBadge:L.Z,QInnerLoading:N.Z,QSpinner:T.Z,QInput:$.Z,QBtn:F.Z,QSelect:I.Z})}}]);