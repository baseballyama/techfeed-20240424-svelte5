import{h as A,i as E,l as J,m as U}from"../modules/unplugin-icons-DINHFo6A.js";import{d as P,o as l,c as u,i as S,A as e,t as I,y as C,D,M as K,ac as X,J as Y,ae as Z,a1 as ee,b as M,e as t,l as s,k,g as y,h as B,x as te,af as se,F as oe,p as ne,a as le}from"../modules/vue--qgEIiFj.js";import{_ as R,a as ae,c as V,u as re,h as ie,b as ce,s as ue,j as de,k as w,p as pe,e as me,l as _e,m as fe,n as ve}from"../index-DrpjUUa3.js";import{r as xe,u as he,S as ke,Q as ge,o as be,N as Ce,G as ye,C as we}from"./ContextMenu-CuDGj2i8.js";import{b as Se,c as Ne,a as $,S as ze}from"./DrawingPreview-DIXGVkib.js";import{N as Fe}from"./NoteDisplay-CVeicPY7.js";import Ie from"./DrawingControls-DwA8J2_9.js";import{I as q}from"./IconButton-B3DumDmI.js";import{C as De}from"./ClicksSlider-zIfb6eeH.js";import"../modules/shiki-Bd1ogawb.js";import"./context-D5ija88E.js";const Me=P({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(i){const c=i,{info:a}=Se(c.no);return(d,p)=>{var f,v;return l(),u(Fe,{class:S(c.class),note:(f=e(a))==null?void 0:f.note,"note-html":(v=e(a))==null?void 0:v.noteHTML,"clicks-context":d.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Be=R(Me,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/internals/NoteStatic.vue"]]),N=i=>(ne("data-v-bd0c1acf"),i=i(),le(),i),Ve={class:"bg-main h-full slidev-presenter"},$e=N(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),qe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Pe=N(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Re={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Te={class:"border-t border-main py-1 px-2 text-sm"},Ge={class:"grid-section bottom flex"},He=N(()=>t("div",{"flex-auto":""},null,-1)),Le={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Oe={class:"progress-bar"},Qe=P({__name:"presenter",setup(i){const c=I();xe(),he(c);const{clicksContext:a,currentSlideNo:d,currentSlideRoute:p,hasNext:f,nextRoute:v,slides:T,queryClicks:G,getPrimaryClicks:H,total:L}=ae(),{isDrawing:O}=Ne(),Q=V.titleTemplate.replace("%s",V.title||"Slidev");re({title:`Presenter - ${Q}`}),I(!1);const{timer:W,resetTimer:z}=ie(),j=C(()=>T.value.map(h=>ce(h))),o=C(()=>a.value.current<a.value.total?[p.value,a.value.current+1]:f.value?[v.value,0]:null),x=C(()=>o.value&&j.value[o.value[0].no-1]);return D([p,G],()=>{x.value&&(x.value.current=o.value[1])},{immediate:!0}),K(),X(()=>{const h=c.value.querySelector("#slide-content"),r=Y(Z()),g=ee();D(()=>{if(!g.value||O.value||!de.value)return;const n=h.getBoundingClientRect(),m=(r.x-n.left)/n.width*100,_=(r.y-n.top)/n.height*100;if(!(m<0||m>100||_<0||_>100))return{x:m,y:_}},n=>{ue.cursor=n})}),(h,r)=>{var F;const g=A,n=E,m=J,_=U;return l(),M(oe,null,[t("div",Ve,[t("div",{class:S(["grid-container",`layout${e(pe)}`])},[t("div",{ref_key:"main",ref:c,class:"relative grid-section main flex flex-col"},[s($,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto",onContextmenu:e(be)},{default:k(()=>[s(ke,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(l(),u(De,{key:(F=e(p))==null?void 0:F.no,"clicks-context":e(H)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),$e],512),t("div",qe,[o.value&&x.value?(l(),u($,{key:"next",class:"h-full w-full"},{default:k(()=>[(l(),u(ze,{is:o.value[0].component,key:o.value[0].no,"clicks-context":x.value,class:S(e(me)(o.value[0])),route:o.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):y("v-if",!0),Pe]),y(" Notes "),(l(),M("div",Re,[(l(),u(Be,{key:`static-${e(d)}`,no:e(d),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:B({fontSize:`${e(_e)}em`}),"clicks-context":e(a)},null,8,["no","style","clicks-context"])),t("div",Te,[s(q,{title:"Increase font size",onClick:e(fe)},{default:k(()=>[s(g)]),_:1},8,["onClick"]),s(q,{title:"Decrease font size",onClick:e(ve)},{default:k(()=>[s(n)]),_:1},8,["onClick"]),y("v-if",!0)])])),t("div",Ge,[s(Ce,{persist:!0}),He,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[2]||(r[2]=(...b)=>e(z)&&e(z)(...b))},[s(m,{class:"absolute"}),s(_,{class:"absolute opacity-0"})]),t("div",Le,te(e(W)),1)]),(l(),u(Ie,{key:2}))],2),t("div",Oe,[t("div",{class:"progress h-3px bg-primary transition-all",style:B({width:`${(e(d)-1)/(e(L)-1)*100}%`})},null,4)])]),s(ye),s(ge,{modelValue:e(w),"onUpdate:modelValue":r[3]||(r[3]=b=>se(w)?w.value=b:null)},null,8,["modelValue"]),s(we)],64)}}}),tt=R(Qe,[["__scopeId","data-v-bd0c1acf"],["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/pages/presenter.vue"]]);export{tt as default};
