"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[1248],{61248:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var l=a(59835),u=a(60499),s=a(86970),n=a(46190),d=a(39981),r=a.n(d);const p=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),w={class:"full-height q-pa-md"},o={key:0},c={class:"text-bold"},i={key:0},m={class:"text-bold"},_={key:1,class:"text-bold"},b={name:"VIP",setup(e){const t="https://xn--i1alcm5c.xn--p1ai",a=(0,n.c)(),d=(0,u.iH)([]),b=(0,l.Fl)((()=>a.balances)),y=(0,l.Fl)((()=>a.addresses[a.currentAddressIdx].address));return(0,l.wF)((async()=>{const e=await r().get(`${t}/api/data/get_rewards?address=${y.value}`);d.value=e.data})),(e,t)=>{const a=(0,l.up)("page-header"),n=(0,l.up)("q-btn"),r=(0,l.up)("q-item-label"),y=(0,l.up)("q-item-section"),f=(0,l.up)("q-item"),g=(0,l.up)("q-list"),k=(0,l.up)("page-body"),v=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a),p,(0,l._)("div",w,[(0,u.SU)(b)[1048619]?((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("p",c,(0,s.zw)(e.$t("your_balance"))+" VIP REWARD: "+(0,s.zw)((0,u.SU)(b)[1048619][0][1]),1),(0,l.Wm)(n,{"no-caps":"",unelevated:"",color:"primary",class:"q-mb-lg",label:`${e.$t("buy")}  VIP REWARD`,onClick:t[0]||(t[0]=t=>e.$router.push("/wallet/buy?asset=1048619&amount=0&type=buy"))},null,8,["label"]),d.value?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("p",m,(0,s.zw)(e.$t("reward_history")),1),(0,l.Wm)(g,{separator:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.value.rewards,((e,t)=>((0,l.wg)(),(0,l.j4)(f,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(parseFloat(e.amount).toFixed(5)),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.asset.name),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("p",_,(0,s.zw)(e.$t("vip_text")),1))])])),_:1})])),_:1})}}};var y=a(24455),f=a(13246),g=a(490),k=a(76749),v=a(33115),h=a(69984),W=a.n(h);const x=b,q=x;W()(b,"components",{QBtn:y.Z,QList:f.Z,QItem:g.Z,QItemSection:k.Z,QItemLabel:v.Z})}}]);