import{h as L,i as V,j,k as A}from"../modules/unplugin-icons-DINHFo6A.js";import{d as M,t as P,Q,y as b,D as R,o as c,b as U,e as t,h as y,A as o,l as s,k as i,c as w,x as S,F as q}from"../modules/vue--qgEIiFj.js";import{c as C,u as G,a as J,s as r,f as K,_ as O}from"../index-DrpjUUa3.js";import{N as W}from"./NoteDisplay-CVeicPY7.js";import{I as u}from"./IconButton-B3DumDmI.js";import"../modules/shiki-Bd1ogawb.js";const X={class:"h-full flex flex-col"},Y={class:"flex-none border-t border-main"},Z={class:"flex gap-1 items-center px-6 py-3"},ee=t("div",{class:"flex-auto"},null,-1),te={class:"p2 text-center"},oe=M({__name:"notes",setup(se){const N=C.titleTemplate.replace("%s",C.title||"Slidev");G({title:`Notes - ${N}`});const{slides:F,total:_}=J(),{isFullscreen:p,toggle:$}=K,d=P(),l=Q("slidev-notes-font-size",18),n=b(()=>{var e;return((e=r.lastUpdate)==null?void 0:e.type)==="viewer"?r.viewerPage:r.page}),a=b(()=>F.value.find(e=>e.no===n.value));R(n,()=>{var e;(e=d.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function B(){l.value=l.value+1}function T(){l.value=l.value-1}return(e,le)=>{var f,m,v,h,x,g,k,z;const D=j,I=A,E=L,H=V;return c(),U(q,null,[t("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:y({width:`${(n.value-1)/o(_)*100}%`})},null,4),t("div",X,[t("div",{ref_key:"scroller",ref:d,class:"px-5 flex-auto h-full overflow-auto",style:y({fontSize:`${o(l)}px`})},[s(W,{note:(v=(m=(f=a.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:v.note,"note-html":(g=(x=(h=a.value)==null?void 0:h.meta)==null?void 0:x.slide)==null?void 0:g.noteHTML,placeholder:`No notes for Slide ${n.value}.`,"clicks-context":(z=(k=a.value)==null?void 0:k.meta)==null?void 0:z.__clicksContext,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),t("div",Y,[t("div",Z,[s(u,{title:o(p)?"Close fullscreen":"Enter fullscreen",onClick:o($)},{default:i(()=>[o(p)?(c(),w(D,{key:0})):(c(),w(I,{key:1}))]),_:1},8,["title","onClick"]),s(u,{title:"Increase font size",onClick:B},{default:i(()=>[s(E)]),_:1}),s(u,{title:"Decrease font size",onClick:T},{default:i(()=>[s(H)]),_:1}),ee,t("div",te,S(n.value)+" / "+S(o(_)),1)])])])],64)}}}),_e=O(oe,[["__file","/home/runner/work/techfeed-20240424-svelte5/techfeed-20240424-svelte5/node_modules/.pnpm/@slidev+client@0.49.0-beta.4_postcss@8.4.38_vite@5.2.10/node_modules/@slidev/client/pages/notes.vue"]]);export{_e as default};