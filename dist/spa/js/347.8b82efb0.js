"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[347],{21347:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var u=a(59835),t=a(60499),d=a(86970),n=a(23459),o=a(46190),s=a(31655),m=a(91569),p=a(87270),i=a(18910),r=a(17779);const v=(0,u._)("div",{class:"",style:{height:"50px"}},null,-1),c=["src"],b={key:0},_={key:1},w={class:"text-caption"},f={key:2},y={name:"NewBuyOffer",setup(e){const l=(0,n.Q)(),y=(0,o.c)(),q=(0,t.iH)(null),V=(0,i.tv)();let g=a(24409);const k=(0,s.T)(),W=(0,t.iH)(null),h=(0,t.iH)(null),U=(0,t.iH)(1),Q=(0,t.iH)(null),x=(0,t.iH)(null),F=((0,u.Fl)((()=>y.addresses[y.currentAddressIdx].address)),(0,u.Fl)((()=>k.user))),Z=(0,u.Fl)((()=>g.orderBy(l.assets,["id"])));(0,u.Fl)((()=>y.balances));async function H(){r.log(W.value);const e=await m.h.post("/api/p2p/add_offer",{is_sell:!1,asset_key:W.value.key,wallet:F.value.wallet,amount:h.value,min_amount:U.value,payment_types:q.value,course:Q.value,rules:x.value});e.data.success?(0,p.d)("positive",e.data.message):(0,p.d)("negative",e.data.message),await k.get_own_offers(),V.push({name:"p2p_index"})}return(e,l)=>{const a=(0,u.up)("page-header"),n=(0,u.up)("q-avatar"),o=(0,u.up)("q-item-section"),s=(0,u.up)("q-item-label"),m=(0,u.up)("q-item"),p=(0,u.up)("q-select"),i=(0,u.up)("q-input"),r=(0,u.up)("q-btn"),y=(0,u.up)("page-body"),V=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(V,null,{default:(0,u.w5)((()=>[(0,u.Wm)(y,{class:"q-pa-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{route_name:"p2p_index"}),v,(0,u.Wm)(p,{outlined:"",rounded:"",options:(0,t.SU)(Z).filter((e=>e.is_in_p2p)),modelValue:W.value,"onUpdate:modelValue":l[0]||(l[0]=e=>W.value=e),"option-label":"name",class:"q-mb-md",behavior:"dialog",label:"Выберите актив для покупки"},{option:(0,u.w5)((e=>[(0,u.Wm)(m,(0,d.vs)((0,u.F4)(e.itemProps)),{default:(0,u.w5)((()=>[(0,u.Wm)(o,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u._)("img",{src:e.opt.icon},null,8,c)])),_:2},1024)])),_:2},1024),(0,u.Wm)(o,null,{default:(0,u.w5)((()=>[(0,u.Wm)(s,{class:"text-bold"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(e.opt.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue"]),W.value?((0,u.wg)(),(0,u.iD)("div",b,[(0,u.Wm)(p,{outlined:"",rounded:"",options:(0,t.SU)(F).payment_types,modelValue:q.value,"onUpdate:modelValue":l[1]||(l[1]=e=>q.value=e),"use-chips":"",class:"q-mb-md",behavior:"dialog",multiple:"",label:"Выберите платежные ситемы"},null,8,["options","modelValue"])])):(0,u.kq)("",!0),q.value&&q.value.length>0?((0,u.wg)(),(0,u.iD)("div",_,[(0,u.Wm)(i,{outlined:"",rounded:"",modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=e=>h.value=e),class:"q-mb-md",type:"number",label:"Введите обьем оффера"},null,8,["modelValue"]),(0,u.Wm)(i,{outlined:"",rounded:"",modelValue:U.value,"onUpdate:modelValue":l[3]||(l[3]=e=>U.value=e),class:"q-mb-md",type:"number",label:"Введите минимальный обьем сделки"},null,8,["modelValue"]),(0,u._)("p",w,"Текущий курс: "+(0,d.zw)(W.value.course),1),(0,u.Wm)(i,{outlined:"",rounded:"",modelValue:Q.value,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.value=e),class:"q-mb-md",type:"number",label:"Введите курс покупки в рублях"},null,8,["modelValue"]),(0,u.Wm)(i,{outlined:"",rounded:"",modelValue:x.value,"onUpdate:modelValue":l[5]||(l[5]=e=>x.value=e),class:"q-mb-md",type:"textarea",label:"Введите условия покупки"},null,8,["modelValue"])])):(0,u.kq)("",!0),h.value&&U.value&&Q.value?((0,u.wg)(),(0,u.iD)("div",f,[(0,u.Wm)(r,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:!h.value||parseFloat(U.value)>parseFloat(h.value),onClick:H,rounded:"",label:`Создать оффер на ${h.value*Q.value} руб`},null,8,["disable","label"])])):(0,u.kq)("",!0)])),_:1})])),_:1})}}};var q=a(18401),V=a(490),g=a(76749),k=a(61357),W=a(33115),h=a(13119),U=a(24455),Q=a(69984),x=a.n(Q);const F=y,Z=F;x()(y,"components",{QSelect:q.Z,QItem:V.Z,QItemSection:g.Z,QAvatar:k.Z,QItemLabel:W.Z,QInput:h.Z,QBtn:U.Z})}}]);