import{A as g,r as U,a as B,j as I,_ as N,C as R,T}from"./index-ef0c2bf0.js";import{q as v,h as C,p as D,c as S,k as _}from"./Container-1cf63365.js";const j=["className","component"];function w(e={}){const{themeId:t,defaultTheme:a,defaultClassName:o="MuiBox-root",generateClassName:s}=e,i=v("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(g);return U.forwardRef(function(x,l){const d=C(a),u=D(x),{className:p,component:h="div"}=u,y=B(u,j);return I.jsx(i,N({as:h,ref:l,className:S(p,s?s(o):o),theme:t&&d[t]||d},y))})}const E=R(),P=w({themeId:T,defaultTheme:E,defaultClassName:"MuiBox-root",generateClassName:_.generate}),q=P;let r;const V=new Uint8Array(16);function M(){if(!r&&(r=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(V)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function b(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:A};function G(e,t,a){if(m.randomUUID&&!t&&!e)return m.randomUUID();e=e||{};const o=e.random||(e.rng||M)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){a=a||0;for(let s=0;s<16;++s)t[a+s]=o[s];return t}return b(o)}export{q as B,G as v};