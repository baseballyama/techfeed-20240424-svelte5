const __vite__fileDeps=["assets/slidev/DrawingControls-DwA8J2_9.js","assets/modules/unplugin-icons-DINHFo6A.js","assets/modules/vue--qgEIiFj.js","assets/modules/shiki-Bd1ogawb.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-DIXGVkib.js","assets/index-DrpjUUa3.js","assets/index-DfgRR95s.css","assets/DrawingPreview-DJj49XSD.css","assets/slidev/ContextMenu-CuDGj2i8.js","assets/slidev/IconButton-B3DumDmI.js","assets/slidev/context-D5ija88E.js","assets/ContextMenu-Dt4fueIN.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as g,c as w,k as C,q as S,v as D,w as I,x as A,a as O,y as R,z as N,A as H,B as T,D as U,E as L}from"../index-DrpjUUa3.js";import{d as h,a7 as z,o as s,c as r,A as e,b as _,e as n,f as W,i as M,g as i,ag as F,y as E,k,af as y,a6 as $,M as x,l as p,F as B,x as P,v as G,t as Q,h as j}from"../modules/vue--qgEIiFj.js";import{Q as q,G as K,C as X,r as Y,u as J,S as Z,N as ee,o as te}from"./ContextMenu-CuDGj2i8.js";import{c as se,a as oe}from"./DrawingPreview-DIXGVkib.js";import"../modules/shiki-Bd1ogawb.js";import"../modules/unplugin-icons-DINHFo6A.js";import"./IconButton-B3DumDmI.js";import"./context-D5ija88E.js";const le="/techfeed-20240424-svelte5/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:l}){const a=c,t=z(a,"modelValue",l);function o(){t.value=!1}return(v,u)=>(s(),r(F,null,[e(t)?(s(),_("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:u[0]||(u[0]=f=>o())}),n("div",{class:M(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[W(v.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ie=g(ne,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/internals/Modal.vue"]]),re={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},de=["innerHTML"],ue=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:le,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),$("dev ")])])],-1),ce=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:l}){const t=z(c,"modelValue",l),o=E(()=>typeof w.info=="string");return(v,u)=>(s(),r(ie,{modelValue:e(t),"onUpdate:modelValue":u[0]||(u[0]=f=>y(t)?t.value=f:null),class:"px-6 py-4"},{default:k(()=>[n("div",re,[o.value?(s(),_("div",{key:0,class:"mb-4",innerHTML:e(w).info},null,8,de)):i("v-if",!0),ue])]),_:1},8,["modelValue"]))}}),me=g(ce,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/internals/InfoDialog.vue"]]),pe=h({__name:"Controls",setup(c){const l=x(),a=x();return(d,t)=>(s(),_(B,null,[p(q,{modelValue:e(C),"onUpdate:modelValue":t[0]||(t[0]=o=>y(C)?C.value=o:null)},null,8,["modelValue"]),p(K),l.value?(s(),r(e(l),{key:0})):i("v-if",!0),a.value?(s(),r(e(a),{key:1,modelValue:e(S),"onUpdate:modelValue":t[1]||(t[1]=o=>y(S)?S.value=o:null)},null,8,["modelValue"])):i("v-if",!0),e(w).info?(s(),r(me,{key:2,modelValue:e(D),"onUpdate:modelValue":t[2]||(t[2]=o=>y(D)?D.value=o:null)},null,8,["modelValue"])):i("v-if",!0),p(X)],64))}}),ve=g(pe,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/internals/Controls.vue"]]),fe=h({__name:"PrintStyle",setup(c){function l(a,{slots:d}){if(d.default)return G("style",d.default())}return(a,d)=>(s(),r(l,null,{default:k(()=>[$(" @page { size: "+P(e(I))+"px "+P(e(A))+"px; margin: 0px; } ",1)]),_:1}))}}),_e=g(fe,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/internals/PrintStyle.vue"]]),ge=h({__name:"play",setup(c){Y();const{next:l,prev:a,isEmbedded:d,isPrintMode:t}=O(),{isDrawing:o}=se(),v=Q();function u(m){var V;N.value||m.button===0&&((V=m.target)==null?void 0:V.id)==="slide-container"&&(m.pageX/window.innerWidth>.6?l():a())}J(v);const f=E(()=>R.value||N.value);x();const b=x();return H(()=>import("./DrawingControls-DwA8J2_9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(m=>b.value=m.default),(m,V)=>(s(),_(B,null,[e(t)?(s(),r(_e,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:v,class:M(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(oe,{class:"w-full h-full",style:j({background:"var(--slidev-slide-container-background, black)"}),width:e(t)?e(T).width.value:void 0,scale:e(U),"is-main":!0,onPointerdown:u,onContextmenu:e(te)},{default:k(()=>[p(Z,{"render-context":"slide"})]),controls:k(()=>[e(t)?i("v-if",!0):(s(),_("div",{key:0,class:M(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(o)?"pointer-events-none":""]])},[p(ee,{class:"m-auto",persist:f.value},null,8,["persist"])],2)),!e(w).drawings.presenterOnly&&!e(d)&&b.value?(s(),r(e(b),{key:1,class:"ml-0"})):i("v-if",!0)]),_:1},8,["style","width","scale","onContextmenu"]),i("v-if",!0)],2),e(t)?i("v-if",!0):(s(),r(ve,{key:1}))],64))}}),Se=g(ge,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/pages/play.vue"]]);export{Se as default};