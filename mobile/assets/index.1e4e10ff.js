import{u as s,T as n,M as e}from"./moxui.2cd773e2.js";import{d as a,r as l,q as t,t as c,y as o,z as u,k as d,C as i,u as r,A as p,B as m}from"./vue.e79c1cf2.js";const h={class:"page page-use-count-down"},v={class:"header"},f={class:"header-content"},x=u("h2",{class:"title"},"USECOUNTDOWN",-1),y={class:"code-section"},k=u("h4",{class:"code-title"},"基础用法",-1),g={class:"code-section"},w=u("h4",{class:"code-title"},"定时任务",-1),C={class:"code-section"},_=u("h4",{class:"code-title"},"异步任务",-1),j={style:{"margin-left":"10px"}},z=a({__name:"index",setup(a){const z=s(100,1,!0),D=z.current;z.on("end",(()=>{n("countdown end")}));const N=s(1/0,5,!0),O=l(0);N.on("update",(()=>{O.value++}));const T=s(0),U=T.current;function b(){T.reset(20)}return T.on("end",(()=>{n("countDown3 end")})),(s,n)=>{const a=t("router-link");return c(),o("div",h,[u("div",v,[u("div",f,[d(a,{to:"/index",class:"back"}),x])]),u("section",y,[k,u("div",null,[u("span",null,i(r(D).days)+"天",1),u("span",null,i(r(D).hours)+"时",1),u("span",null,i(r(D).minutes)+"分",1),u("span",null,i(r(D).seconds)+"秒",1)])]),u("section",g,[w,u("div",null,"任务执行次数: "+i(O.value),1)]),u("section",C,[_,d(r(e),{type:"success",size:"small",onClick:b},{default:p((()=>[m("点击开始")])),_:1}),u("span",j,[u("span",null,i(r(U).days)+"天",1),u("span",null,i(r(U).hours)+"时",1),u("span",null,i(r(U).minutes)+"分",1),u("span",null,i(r(U).seconds)+"秒",1)])])])}}});export{z as default};