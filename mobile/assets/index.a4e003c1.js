import{d as e,r as t,q as a,t as s,y as n,z as c,k as i,A as l,B as o,u as r,g as u,G as m}from"./vue.e79c1cf2.js";import{T as h,M as p,g as d}from"./moxui.2cd773e2.js";const b={class:"page page-slot-machine"},v={class:"header"},g={class:"header-content"},_=c("h2",{class:"title"},"SLOTMACHINE",-1),x={class:"code-section"},y=c("h4",{class:"code-title"},"抽靓号",-1),f={class:"good-number-wrapper"},k={class:"code-section"},w=c("h4",{class:"code-title"},"老虎机",-1),z={class:"slot-machine-wrapper"},M=e({__name:"index",setup(e){const M=t("666666"),A=t();function C(){var e;/^\d{6}$/.test(M.value)?null==(e=A.value)||e.reset(!1).then((()=>{var e;null==(e=A.value)||e.scroll(M.value.split("").map((e=>Number(e))))})):h("靓号应为6位数字 ~")}const N=t(),j=["https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663640667758198929.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663640944244379157.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663640965846343037.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663641090632078575.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663641116927400612.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663844141888447228.png","https://beta-breathing-cdn.2tianxin.com/beta/resources/activity/slot_machine_2020/1663642615235079799.png"];function S(){var e;const t=new Array(7).fill(0).map(((e,t)=>t)).sort((()=>Math.random()-.5)).slice(0,3);null==(e=N.value)||e.reset(!1).then((()=>{var e;null==(e=N.value)||e.scroll(t)}))}return(e,t)=>{const h=a("router-link");return s(),n("div",b,[c("div",v,[c("div",g,[i(h,{to:"/index",class:"back"}),_])]),c("section",x,[y,i(r(p),{size:"small",type:"success",onClick:C},{default:l((()=>[o("抽奖")])),_:1}),u(c("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>M.value=e),type:"text",class:"good-num"},null,512),[[m,M.value]]),c("div",f,[i(r(d),{ref_key:"goodNumberSlot",ref:A,cols:6,"item-style":"font-size:60px;font-weight:700;"},null,512)])]),c("section",k,[w,i(r(p),{size:"small",type:"success",onClick:S},{default:l((()=>[o("老虎机")])),_:1}),c("div",z,[i(r(d),{ref_key:"slotMachine",ref:N,type:1,cols:3,items:j,"item-style":"max-width:150px;max-height:150px;"},null,512)])])])}}});export{M as default};
