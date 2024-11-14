import{d as k,c as l,n as y,a as V,t as v,b as c,e as i,F as S,r as N,o,u as U,f,g as n,h as q,w as h,_ as I,i as T}from"./index-BKzxTDxB.js";import{u as L,_ as C,a as D,b as E,T as P}from"./useValidation-CIz5o3yg.js";import{_ as A}from"./GHyperlink.vue_vue_type_script_setup_true_lang-D5OzOVyZ.js";const F={key:0,class:"input-required"},j=["value","disabled"],z={key:0,value:"",disabled:"",selected:"",hidden:""},M=["value"],O={key:1,class:"error-text"},G=k({__name:"SelectInput",props:{modelValue:{},items:{},error:{type:[String,Boolean]},label:{},placeholder:{},disabled:{type:Boolean},readOnly:{type:Boolean},required:{type:Boolean},autoComplete:{type:Boolean},classList:{},containerClass:{},labelClass:{},dataTestId:{}},emits:["update:modelValue"],setup(B,{emit:d}){const m=d,b=a=>{const p=a.target;m("update:modelValue",p.value)};return(a,p)=>(o(),l("div",{class:y(["input-container",a.containerClass])},[a.label?(o(),l("label",{key:0,class:y(["input-label",a.labelClass])},[V(v(a.label)+" ",1),a.required?(o(),l("span",F,"*")):c("",!0)],2)):c("",!0),i("select",{class:y(["input-select",[a.classList,{error:!!a.error,disabled:a.disabled}]]),value:a.modelValue,onInput:b,disabled:a.disabled},[a.placeholder?(o(),l("option",z,v(a.placeholder),1)):c("",!0),(o(!0),l(S,null,N(a.items,r=>(o(),l("option",{key:r.value,value:r.value},v(r.label),9,M))),128))],42,j),a.error?(o(),l("span",O,v(a.error),1)):c("",!0)],2))}}),H={class:"flex justify-center"},J={class:"form-card"},K={class:"text-center"},Y=k({__name:"RegisterView",setup(B){const d=U(),m=L(),b=T(),{validate:a,isRequiredEmail:p,isRequiredString:r}=E(),s=f({password:"mohi",username:"mohi1",email:"mohi@deepnetwork.com",role:"ADMIN"}),u=f({password:"",username:"",email:"",role:""}),$=f({username:r(),password:r(),email:p(),role:r()}),_=f(!1),R=async()=>{const g=a(s.value,$.value);if(g.validated){_.value=!0;const e=await d.registerUser(s.value);_.value=!1,e.error?m.error({text:e.error}):e.success&&(e.message&&m.success({text:e.message}),b.push("/"))}else u.value={...g.errors}};return(g,e)=>{var w;return o(),l(S,null,[i("div",H,[i("div",J,[e[7]||(e[7]=i("div",{class:"form-title"},"Register to VPP",-1)),n(C,{name:"username",label:"Username",modelValue:s.value.username,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value.username=t),error:u.value.username},null,8,["modelValue","error"]),n(C,{name:"email",label:"E-mail",modelValue:s.value.email,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value.email=t),error:u.value.email},null,8,["modelValue","error"]),n(G,{name:"role",label:"Role",modelValue:s.value.role,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value.role=t),items:(w=q(d))==null?void 0:w.roles,error:u.value.role},null,8,["modelValue","items","error"]),n(D,{name:"password",modelValue:s.value.password,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value.password=t),label:"Password",error:u.value.password},null,8,["modelValue","error"]),n(I,{onClick:R},{default:h(()=>e[4]||(e[4]=[V(" Register ")])),_:1}),i("span",K,[e[6]||(e[6]=V("Do you already have an account? ")),n(A,{href:"/auth/login"},{default:h(()=>e[5]||(e[5]=[V("Login")])),_:1})])])]),n(P)],64)}}});export{Y as default};