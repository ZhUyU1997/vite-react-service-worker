import{r as m,v as p,n as E,R as e,O as R,u as g,a as v,b as h,B as b,c as y,d as u}from"./vendor.d72b9cf0.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};N();function S(l={}){const{immediate:o=!1,onNeedRefresh:i,onOfflineReady:c,onRegistered:t,onRegisterError:n}=l;let r,a;const d=async(s=!0)=>{s&&(r==null||r.addEventListener("controlling",f=>{f.isUpdate&&window.location.reload()})),a&&a.waiting&&await E(a.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){r=new p("/sw.js",{scope:"/",type:"classic"}),r.addEventListener("activated",s=>{s.isUpdate||c==null||c()});{const s=()=>{i==null||i()};r.addEventListener("waiting",s),r.addEventListener("externalwaiting",s)}r.register({immediate:o}).then(s=>{a=s,t==null||t(s)}).catch(s=>{n==null||n(s)})}return d}function w(l={}){const{immediate:o=!0,onNeedRefresh:i,onOfflineReady:c,onRegistered:t,onRegisterError:n}=l,[r,a]=m.exports.useState(!1),[d,s]=m.exports.useState(!1),[f]=m.exports.useState(()=>S({immediate:o,onOfflineReady(){s(!0),c==null||c()},onNeedRefresh(){a(!0),i==null||i()},onRegistered:t,onRegisterError:n}));return{needRefresh:[r,a],offlineReady:[d,s],updateServiceWorker:f}}function P(){const l="2022-03-09T17:19:05.256Z",{offlineReady:[o,i],needRefresh:[c,t],updateServiceWorker:n}=w({onRegistered(a){console.log("SW Registered: "+a)},onRegisterError(a){console.log("SW registration error",a)}}),r=()=>{i(!1),t(!1)};return e.createElement("div",{className:"ReloadPrompt-container"},(o||c)&&e.createElement("div",{className:"ReloadPrompt-toast"},e.createElement("div",{className:"ReloadPrompt-message"},o?e.createElement("span",null,"App ready to work offline"):e.createElement("span",null,"New content available, click on reload button to update.")),c&&e.createElement("button",{className:"ReloadPrompt-toast-button",onClick:()=>n(!0)},"Reload"),e.createElement("button",{className:"ReloadPrompt-toast-button",onClick:()=>r()},"Close")),e.createElement("div",{className:"ReloadPrompt-date"},l))}function W(){const l="2022-03-09T17:19:05.256Z";return e.createElement("main",{className:"App"},e.createElement("img",{src:"/favicon.svg",alt:"PWA Logo",width:"60",height:"60"}),e.createElement("h1",{className:"Home-title"},"PWA React!"),e.createElement("div",{className:"Home-built"},"Built at: ",l),e.createElement(R,null),e.createElement(P,null))}function O(){const[l,o]=m.exports.useState(0),[i,c]=m.exports.useState(""),t=g(),n=a=>{c(a.target.value||"")},r=a=>{a.preventDefault(),i&&t(`/hi/${i}`)};return e.createElement("div",{className:"Home"},e.createElement("p",null,e.createElement("button",{type:"button",onClick:()=>o(a=>a+1)},"count is: ",l)),e.createElement("br",null),e.createElement("form",{onSubmit:r},e.createElement("input",{value:i,onChange:n,type:"text","aria-label":"What's your name?",placeholder:"What's your name?"}),e.createElement("button",{type:"submit"},"GO")),e.createElement("br",null),e.createElement("a",{href:"/about"},"About"),e.createElement("br",null))}function A(){const l="2022-03-09T17:19:05.256Z";return e.createElement("div",{className:"About"},e.createElement("div",null,e.createElement("strong",null,"/about")," route, built at: ",l),e.createElement("br",null),e.createElement("a",{href:"/"},"Go Home"))}function k(){const l="2022-03-09T17:19:05.256Z",o=v();return e.createElement("div",null,e.createElement("div",null,e.createElement("strong",null,"/hi")," route, built at: ",l),e.createElement("p",null,"Hi: ",o.name),e.createElement("br",null),e.createElement("a",{href:"/"},"Go Home"))}h.render(e.createElement(b,null,e.createElement(y,null,e.createElement(u,{path:"/",element:e.createElement(W,null)},e.createElement(u,{index:!0,element:e.createElement(O,null)}),e.createElement(u,{path:"/about",element:e.createElement(A,null)}),e.createElement(u,{path:"/hi"},e.createElement(u,{path:":name",element:e.createElement(k,null)}))))),document.getElementById("app"));
//# sourceMappingURL=index.d981902c.js.map
