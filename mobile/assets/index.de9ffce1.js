import{M as e,e as s}from"./moxui.2cd773e2.js";import{d as a,r as l,q as t,t as o,y as c,z as u,k as i,A as n,B as d,u as v}from"./vue.e79c1cf2.js";const p={class:"page page-popup"},m={class:"header"},f={class:"header-content"},k=u("h2",{class:"title"},"POPUP",-1),h={class:"code-section"},r=u("h4",{class:"code-title"},"基础用法",-1),z=u("div",{class:"content1"},"弹窗内容",-1),_={class:"code-section"},y=u("h4",{class:"code-title"},"弹出位置",-1),w={key:0,class:"content-v"},C={key:1,class:"content-h"},g={class:"code-section"},x=u("h4",{class:"code-title"},"弹出动画",-1),U=u("div",{class:"content1"},"弹窗内容",-1),b=a({__name:"index",setup(a){const b=l(!1),P=l(!1),j=l("top"),q=l(!1),A=l("fade");return(a,l)=>{const B=t("router-link");return o(),c("div",p,[u("div",m,[u("div",f,[i(B,{to:"/index",class:"back"}),k])]),u("section",h,[r,i(v(e),{size:"small",type:"success",onClick:l[0]||(l[0]=e=>b.value=!0)},{default:n((()=>[d("打开")])),_:1}),i(v(s),{show:b.value,"onUpdate:show":l[1]||(l[1]=e=>b.value=e),"mask-click-close":""},{default:n((()=>[z])),_:1},8,["show"])]),u("section",_,[y,i(v(e),{size:"small",type:"success",onClick:l[2]||(l[2]=e=>(P.value=!0)&&(j.value="top"))},{default:n((()=>[d("top")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[3]||(l[3]=e=>(P.value=!0)&&(j.value="right"))},{default:n((()=>[d("right")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[4]||(l[4]=e=>(P.value=!0)&&(j.value="bottom"))},{default:n((()=>[d("bottom")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[5]||(l[5]=e=>(P.value=!0)&&(j.value="left"))},{default:n((()=>[d("left")])),_:1}),i(v(s),{show:P.value,"onUpdate:show":l[6]||(l[6]=e=>P.value=e),"mask-click-close":"",position:j.value},{default:n((()=>["left"===j.value||"right"===j.value?(o(),c("div",w)):(o(),c("div",C))])),_:1},8,["show","position"])]),u("section",g,[x,i(v(e),{size:"small",type:"success",onClick:l[7]||(l[7]=e=>(q.value=!0)&&(A.value="fade"))},{default:n((()=>[d("fade")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[8]||(l[8]=e=>(q.value=!0)&&(A.value="zoom"))},{default:n((()=>[d("zoom")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[9]||(l[9]=e=>(q.value=!0)&&(A.value="zoom-fade"))},{default:n((()=>[d("zoom-fade")])),_:1}),i(v(e),{size:"small",type:"success",onClick:l[10]||(l[10]=e=>(q.value=!0)&&(A.value="top"))},{default:n((()=>[d("top")])),_:1}),i(v(s),{show:q.value,"onUpdate:show":l[11]||(l[11]=e=>q.value=e),"mask-click-close":"",animation:A.value},{default:n((()=>[U])),_:1},8,["show","animation"])])])}}});export{b as default};
