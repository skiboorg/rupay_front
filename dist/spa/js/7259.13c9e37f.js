"use strict";(self["webpackChunkrupay_front"]=self["webpackChunkrupay_front"]||[]).push([[7259],{87259:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var l=t(59835),n=t(60499),i=t(86970),u=t(31655),s=t(91569);const o=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),d={name:"Notifications",setup(e){const a=(0,n.iH)(!1),t=(0,u.T)(),d=((0,l.Fl)((()=>t.user)),(0,l.Fl)((()=>t.notifications)));async function p(e){a.value=!a.value,await s.h.post("/api/p2p/delete_notification",{id:e}),await t.get_notifications(),a.value=!a.value}return(0,l.wF)((async()=>{await t.set_notification_read()})),(e,t)=>{const u=(0,l.up)("page-header"),s=(0,l.up)("q-item-label"),c=(0,l.up)("q-item-section"),r=(0,l.up)("q-btn"),m=(0,l.up)("q-item"),w=(0,l.up)("q-list"),f=(0,l.up)("page-body"),_=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u),o,(0,l.Wm)(w,{separator:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(d),(t=>((0,l.wg)(),(0,l.j4)(m,{clickable:"",class:(0,i.C_)(t.is_new?"bg-grey-2":""),key:t.id},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(new Date(t.createdAt).toLocaleString()),1)])),_:2},1024),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(t.text),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(c,{side:""},{default:(0,l.w5)((()=>[t.trade?((0,l.wg)(),(0,l.j4)(r,{key:0,dense:"",size:"10px",class:"q-mb-sm q-py-sm q-px-md",color:"primary","no-caps":"",unelevated:"",loading:a.value,onClick:a=>e.$router.push({name:"p2p_trade",params:{uid:t.trade.UID}}),rounded:"",label:"В сделку"},null,8,["loading","onClick"])):(0,l.kq)("",!0),(0,l.Wm)(r,{dense:"",loading:a.value,size:"10px",color:"negative",onClick:e=>p(t.id),class:"full-width q-px-md","no-caps":"",unelevated:"",rounded:"",label:"Удалить"},null,8,["loading","onClick"])])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})])),_:1})}}};var p=t(13246),c=t(490),r=t(76749),m=t(33115),w=t(24455),f=t(69984),_=t.n(f);const g=d,k=g;_()(d,"components",{QList:p.Z,QItem:c.Z,QItemSection:r.Z,QItemLabel:m.Z,QBtn:w.Z})}}]);