import{d as i,m as n,c as d,p as c,n as m,q as p,o as f}from"./index-BKzxTDxB.js";const u=["href","rel","title","target"],h=i({__name:"GHyperlink",props:{submitting:{type:Boolean},disabled:{type:Boolean},classList:{},title:{},style:{},href:{},target:{default:"_self"},rel:{default:""}},emits:["click"],setup(l,{emit:s}){const t=l,a=s,r=n(()=>t.target==="_blank"?`${t.rel} noopener noreferrer`.trim():t.rel);function o(){t.disabled||a("click")}return(e,b)=>(f(),d("a",{href:e.disabled?void 0:e.href,rel:e.disabled?void 0:r.value,class:m([e.classList,{disabled:e.disabled}]),style:p(e.style),title:e.title,target:e.target,onClick:o},[c(e.$slots,"default")],14,u))}});export{h as _};
