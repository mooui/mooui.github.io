import{s as e,u as t,c as n,b as r,n as o,d as a,l as s,h as c,p as i,r as l,w as u,q as p,t as f,x as h,j as d}from"./vue.e79c1cf2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const m="undefined"!=typeof window;const g=Object.assign;function v(e,t){const n={};for(const r in t){const o=t[r];n[r]=b(o)?o.map(e):e(o)}return n}const y=()=>{},b=Array.isArray,_=/\/$/;function E(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let i=t.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function R(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!P(e[n],t[n]))return!1;return!0}function P(e,t){return b(e)?k(e,t):b(t)?k(t,e):e===t}function k(e,t){return b(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var x,j,L,A;function C(e){if(!e)if(m){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(_,"")}(j=x||(x={})).pop="pop",j.push="push",(A=L||(L={})).back="back",A.forward="forward",A.unknown="";const I=/^[^#]+#/;function $(e,t){return e.replace(I,"#")+t}const S=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function T(e,t){return(history.state?history.state.position-t:-1)+e}const V=new Map;function q(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}return w(n,e)+r+o}function M(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?S():null}}function B(e){const{history:t,location:n}=window,r={value:q(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:location.protocol+"//"+location.host+e+r;try{t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){n[s?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=g({},o.value,t.state,{forward:e,scroll:S()});a(s.current,s,!0),a(e,g({},M(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,g({},t.state,M(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}function G(e){const t=B(e=C(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=q(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);o.forEach((e=>{e(n.value,i,{delta:u,type:x.pop,direction:u?u>0?L.forward:L.back:L.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(g({},e.state,{scroll:S()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=g({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:$.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function U(e){return"string"==typeof e||"symbol"==typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F=Symbol("");var K,z;function N(e,t){return g(new Error,{type:e,[F]:!0},t)}function H(e,t){return e instanceof Error&&F in e&&(null==t||!!(e.type&t))}(z=K||(K={}))[z.aborted=4]="aborted",z[z.cancelled=8]="cancelled",z[z.duplicated=16]="duplicated";const Q={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function Y(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=Y(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(J(r))return 1;if(J(o))return-1}return o.length-r.length}function J(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e,t,n){const r=function(e,t){const n=g({},Q,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(X,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const p=u||"[^/]+?";if("[^/]+?"!==p){s+=10;try{new RegExp(`(${p})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${p}): `+c.message)}}let f=n?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;t||(f=l&&i.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),o+=f,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===p&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,i=a in t?t[a]:"";if(b(i)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=b(i)?i.join("/"):i;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,i=0,l="",u="";function p(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&p(),s()):":"===c?(p(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===c?n=2:te.test(c)?f():(p(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:p(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),p(),s(),o}(e.path),n),o=g(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function re(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=ie(t,e),u=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(g({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let p,f;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(p=ne(t,n,l),r?r.alias.push(p):(f=f||p,f!==p&&f.alias.push(p),c&&e.name&&!se(p)&&a(e.name)),i.children){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],p,r&&r.children[t])}r=r||p,s(p)}return f?()=>{a(f)}:y}function a(e){if(U(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!le(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!se(e)&&r.set(e.record.name,e)}return t=ie({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw N(1,{location:e});s=o.record.name,c=g(oe(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,o.keys.map((e=>e.name)))),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw N(1,{location:e,currentLocation:t});s=o.record.name,c=g({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ce(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function se(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>g(e,t.meta)),{})}function ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function le(e,t){return t.children.some((t=>t===e||le(e,t)))}const ue=/#/g,pe=/&/g,fe=/\//g,he=/=/g,de=/\?/g,me=/\+/g,ge=/%5B/g,ve=/%5D/g,ye=/%5E/g,be=/%60/g,_e=/%7B/g,Ee=/%7C/g,we=/%7D/g,Oe=/%20/g;function Re(e){return encodeURI(""+e).replace(Ee,"|").replace(ge,"[").replace(ve,"]")}function Pe(e){return Re(e).replace(me,"%2B").replace(Oe,"+").replace(ue,"%23").replace(pe,"%26").replace(be,"`").replace(_e,"{").replace(we,"}").replace(ye,"^")}function ke(e){return null==e?"":function(e){return Re(e).replace(ue,"%23").replace(de,"%3F")}(e).replace(fe,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function je(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(me," "),o=e.indexOf("="),a=xe(o<0?e:e.slice(0,o)),s=o<0?null:xe(e.slice(o+1));if(a in t){let e=t[a];b(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n).replace(he,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(b(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ae(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=b(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ce=Symbol(""),Ie=Symbol(""),$e=Symbol(""),Se=Symbol(""),De=Symbol("");function Te(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Ve(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(N(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(N(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function qe(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Ve(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Ve(i,n,r,s,e)()}))))}}var a;return o}function Me(e){const r=s($e),o=s(Se),a=n((()=>r.resolve(t(e.to)))),c=n((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const s=r.findIndex(O.bind(null,n));if(s>-1)return s;const c=Ge(e[t-2]);return t>1&&Ge(n)===c&&r[r.length-1].path!==c?r.findIndex(O.bind(null,e[t-2])):s})),i=n((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!b(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,a.value.params))),l=n((()=>c.value>-1&&c.value===o.matched.length-1&&R(o.params,a.value.params)));return{route:a,href:n((()=>a.value.href)),isActive:i,isExactActive:l,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?r[t(e.replace)?"replace":"push"](t(e.to)).catch(y):Promise.resolve()}}}const Be=a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Me,setup(e,{slots:t}){const o=r(Me(e)),{options:a}=s($e),i=n((()=>({[Ue(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ue(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const n=t.default&&t.default(o);return e.custom?n:c("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},n)}}});function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function We(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Fe=a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:r,slots:o}){const a=s(De),p=n((()=>e.route||a.value)),f=s(Ie,0),h=n((()=>{let e=t(f);const{matched:n}=p.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),d=n((()=>p.value.matched[h.value]));i(Ie,n((()=>h.value+1))),i(Ce,d),i(De,p);const m=l();return u((()=>[m.value,d.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=p.value,n=e.name,a=d.value,s=a&&a.components[n];if(!s)return We(o.default,{Component:s,route:t});const i=a.props[n],l=i?!0===i?t.params:"function"==typeof i?i(t):i:null,u=c(s,g({},l,r,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[n]=null)},ref:m}));return We(o.default,{Component:u,route:t})||u}}});function Ke(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}const ze=a({__name:"app",setup(e){const t=s(Se),n=s($e);let r=!1;return u(t,(()=>{r?r=!1:window.parent.postMessage({type:"moxui:inner",value:t.fullPath},"*")})),window.addEventListener("message",(e=>{"moxui:outter"===e.data.type&&e.data.value!==t.fullPath&&(r=!0,n.replace(e.data.value))})),(e,t)=>{const n=p("router-view");return f(),h(n)}}}),Ne={},He=function(e,t,n){return t&&0!==t.length?Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,n),e in Ne)return;Ne[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,n)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},Qe=function(a){const s=re(a.routes,a),c=a.parseQuery||je,i=a.stringifyQuery||Le,l=a.history,u=Te(),p=Te(),f=Te(),h=e(W);let d=W;m&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=v.bind(null,(e=>""+e)),w=v.bind(null,ke),P=v.bind(null,xe);function k(e,t){if(t=g({},t||h.value),"string"==typeof e){const n=E(c,e,t.path),r=s.resolve({path:n.path},t),o=l.createHref(n.fullPath);return g(n,r,{params:P(r.params),hash:xe(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=g({},e,{path:E(c,e.path,t.path).path});else{const r=g({},e.params);for(const e in r)null==r[e]&&delete r[e];n=g({},e,{params:w(e.params)}),t.params=w(t.params)}const r=s.resolve(n,t),o=e.hash||"";r.params=_(P(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,g({},e,{hash:(u=o,Re(u).replace(_e,"{").replace(we,"}").replace(ye,"^")),path:r.path}));var u;const p=l.createHref(a);return g({fullPath:a,hash:o,query:i===Le?Ae(e.query):e.query||{}},r,{redirectedFrom:void 0,href:p})}function j(e){return"string"==typeof e?E(c,e,h.value.path):g({},e)}function L(e,t){if(d!==e)return N(8,{from:t,to:e})}function A(e){return I(e)}function C(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=j(r):{path:r},r.params={}),g({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function I(e,t){const n=d=k(e),r=h.value,o=e.state,a=e.force,s=!0===e.replace,c=C(n);if(c)return I(g(j(c),{state:"object"==typeof c?g({},o,c.state):o,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&R(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=N(16,{to:l,from:r}),Z(r,r,!0,!1)),(u?Promise.resolve(u):q(l,r)).catch((e=>H(e)?H(e,2)?e:Y(e):X(e,l,r))).then((e=>{if(e){if(H(e,2))return I(g({replace:s},j(e.to),{state:"object"==typeof e.to?g({},o,e.to.state):o,force:a}),t||l)}else e=B(l,r,!0,s,o);return M(l,r,e),e}))}function $(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>O(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>O(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Ve(r,e,t))}));const s=$.bind(null,e,t);return n.push(s),Ke(n).then((()=>{n=[];for(const r of u.list())n.push(Ve(r,e,t));return n.push(s),Ke(n)})).then((()=>{n=qe(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ve(r,e,t))}));return n.push(s),Ke(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(b(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(s),Ke(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(a,"beforeRouteEnter",e,t),n.push(s),Ke(n)))).then((()=>{n=[];for(const r of p.list())n.push(Ve(r,e,t));return n.push(s),Ke(n)})).catch((e=>H(e,8)?e:Promise.reject(e)))}function M(e,t,n){for(const r of f.list())r(e,t,n)}function B(e,t,n,r,o){const a=L(e,t);if(a)return a;const s=t===W,c=m?history.state:{};n&&(r||s?l.replace(e.fullPath,g({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),h.value=e,Z(e,t,n,s),Y()}let G;function F(){G||(G=l.listen(((e,t,n)=>{if(!ne.listening)return;const r=k(e),o=C(r);if(o)return void I(g(o,{replace:!0}),r).catch(y);d=r;const a=h.value;var s,c;m&&(s=T(a.fullPath,n.delta),c=S(),V.set(s,c)),q(r,a).catch((e=>H(e,12)?e:H(e,2)?(I(e.to,r).then((e=>{H(e,20)&&!n.delta&&n.type===x.pop&&l.go(-1,!1)})).catch(y),Promise.reject()):(n.delta&&l.go(-n.delta,!1),X(e,r,a)))).then((e=>{(e=e||B(r,a,!1))&&(n.delta&&!H(e,8)?l.go(-n.delta,!1):n.type===x.pop&&H(e,20)&&l.go(-1,!1)),M(r,a,e)})).catch(y)})))}let K,z=Te(),Q=Te();function X(e,t,n){Y(e);const r=Q.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function Y(e){return K||(K=!e,F(),z.list().forEach((([t,n])=>e?n(e):t())),z.reset()),e}function Z(e,t,n,r){const{scrollBehavior:s}=a;if(!m||!s)return Promise.resolve();const c=!n&&function(e){const t=V.get(e);return V.delete(e),t}(T(e.fullPath,0))||(r||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&D(e))).catch((n=>X(n,e,t)))}const J=e=>l.go(e);let ee;const te=new Set,ne={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return U(e)?(n=s.getRecordMatcher(e),r=t):r=e,s.addRoute(r,n)},removeRoute:function(e){const t=s.getRecordMatcher(e);t&&s.removeRoute(t)},hasRoute:function(e){return!!s.getRecordMatcher(e)},getRoutes:function(){return s.getRoutes().map((e=>e.record))},resolve:k,options:a,push:A,replace:function(e){return A(g(j(e),{replace:!0}))},go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:u.add,beforeResolve:p.add,afterEach:f.add,onError:Q.add,isReady:function(){return K&&h.value!==W?Promise.resolve():new Promise(((e,t)=>{z.add([e,t])}))},install(e){e.component("RouterLink",Be),e.component("RouterView",Fe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(h)}),m&&!ee&&h.value===W&&(ee=!0,A(l.location).catch((e=>{})));const o={};for(const t in W)o[t]=n((()=>h.value[t]));e.provide($e,this),e.provide(Se,r(o)),e.provide(De,h);const a=e.unmount;te.add(e),e.unmount=function(){te.delete(e),te.size<1&&(d=W,G&&G(),G=null,h.value=W,ee=!1,K=!1),a()}}};return ne}({history:((Xe=location.host?Xe||location.pathname+location.search:"").includes("#")||(Xe+="#"),G(Xe)),routes:[{path:"/index",name:"index",component:()=>He((()=>import("./index.f82508f6.js")),["index.f82508f6.js","index.126103ba.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/button",name:"button",component:()=>He((()=>import("./index.775975a4.js")),["index.775975a4.js","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/count-down",name:"count-down",component:()=>He((()=>import("./index.142f7dcb.js")),["index.142f7dcb.js","index.b0f22cf3.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/icon",name:"icon",component:()=>He((()=>import("./index.9a3bcd81.js")),["index.9a3bcd81.js","index.9d6ea0b2.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/marquee",name:"marquee",component:()=>He((()=>import("./index.a751ce9a.js")),["index.a751ce9a.js","index.64f62013.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/picker",name:"picker",component:()=>He((()=>import("./index.464547cd.js")),["index.464547cd.js","index.b9b5fe86.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/popup",name:"popup",component:()=>He((()=>import("./index.de9ffce1.js")),["index.de9ffce1.js","index.5761f368.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/scratch",name:"scratch",component:()=>He((()=>import("./index.91571303.js")),["index.91571303.js","index.8a8375ff.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/slot-machine",name:"slot-machine",component:()=>He((()=>import("./index.a4e003c1.js")),["index.a4e003c1.js","index.ca2dc43e.css","vue.e79c1cf2.js","moxui.2cd773e2.js","moxui.55bc6133.css"],import.meta.url)},{path:"/components/sms-code",name:"sms-code",component:()=>He((()=>import("./index.ad8f824d.js")),["index.ad8f824d.js","index.0fd41635.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/sticky",name:"sticky",component:()=>He((()=>import("./index.6087efe6.js")),["index.6087efe6.js","index.b410ebc9.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/components/svga",name:"svga",component:()=>He((()=>import("./index.630200c9.js")),["index.630200c9.js","index.89612c51.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/plugins/dialog",name:"dialog",component:()=>He((()=>import("./index.fbbf0718.js")),["index.fbbf0718.js","index.4f38d37d.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/plugins/loading",name:"loading",component:()=>He((()=>import("./index.6a6c329d.js")),["index.6a6c329d.js","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/plugins/toast",name:"toast",component:()=>He((()=>import("./index.a62a3392.js")),["index.a62a3392.js","index.7bc24980.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/hooks/use-count-down",name:"use-count-down",component:()=>He((()=>import("./index.1e4e10ff.js")),["index.1e4e10ff.js","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/hooks/use-lock-scroll",name:"use-lock-scroll",component:()=>He((()=>import("./index.dfc9a1da.js")),["index.dfc9a1da.js","index.1a63dd4f.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/hooks/use-outter-click",name:"use-outter-click",component:()=>He((()=>import("./index.a7e94d20.js")),["index.a7e94d20.js","index.4e5dcc00.css","moxui.2cd773e2.js","moxui.55bc6133.css","vue.e79c1cf2.js"],import.meta.url)},{path:"/:pathMatch(.*)*",redirect:{name:"index"}}]});var Xe;d(ze).use(Qe).mount("#app");