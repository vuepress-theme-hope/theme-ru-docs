import{a_ as d,ao as m,bl as i}from"./app-DkYyH7Yy.js";import{I as l}from"./vidstack-DQ6dSZwe-BTtv5vWE.js";const p=i('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"></svg>');function g(o,s){const a=d(p);a.innerHTML=l,o.append(a);const e=document.createElement("span");e.classList.add("vds-google-cast-info"),o.append(e);const n=document.createElement("span");n.classList.add("vds-google-cast-device-name"),m(()=>{const{remotePlaybackInfo:c}=s,t=c();return t!=null&&t.deviceName&&(n.textContent=t.deviceName,e.append("Google Cast on ",n)),()=>{e.textContent=""}})}export{g as insertContent};
