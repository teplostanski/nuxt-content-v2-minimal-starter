import w from"./ContentDoc.D7jybXWm.js";import{f as B,u as C,g as N,h as P,o as e,c as a,a as o,t as s,F as i,r as x,i as D,j as I,b as l,w as m,d as u,_ as L,P as p}from"./entry.BEMY3tsC.js";import{_ as S}from"./nuxt-link.BWWf6eoB.js";import{q as V}from"./query.LMH-VX1n.js";import{u as j}from"./locale.DeMicx8l.js";import"./vue.f36acd1f.rVS3oc2R.js";import"./ContentRenderer.Do2a7Qth.js";import"./ContentRendererMarkdown.vue.UUU8uV1c.js";import"./index.BsYmvPZw.js";import"./preview.Dq2f_Gb_.js";import"./ContentQuery.Doc7ITI9.js";const q=["src"],A={class:"cardItem"},E={class:"cardDesc"},F={class:"lang"},H=B({__name:"BlogPosts",async setup(d){let t,r;j();const{locale:n}=C(),{data:h,refresh:f}=([t,r]=N(()=>I(()=>V("/blog").where({lang:n.value}).sort({date:-1}).find(),"$bMkErHolNh")),t=await t,r(),t);return P(()=>n.value,()=>{f()}),(_,G)=>{const g=S;return e(),a(i,null,[o("h1",null,s(_.$t("title")),1),o("h2",null,s(_.$t("hello",{name:"vue-i18n"})),1),o("ul",null,[(e(!0),a(i,null,x(D(h),({_path:c,title:v,date:$,cover:y,description:k,lang:b})=>(e(),a("li",{class:"card",key:c},[o("img",{class:"cardImg",src:y,alt:"f"},null,8,q),o("div",A,[l(g,{to:c},{default:m(()=>[u(s(v),1)]),_:2},1032,["to"]),o("div",E,s(k),1),o("span",null,s($),1),u(),o("span",F,s(b),1)])]))),128))])],64)}}}),M=L(H,[["__scopeId","data-v-e02895cf"]]),R={key:0},T={key:1},z=o("h2",null,"Blog post not found",-1),st={__name:"[...slug]",setup(d){return(t,r)=>{const n=w;return e(),a("div",null,[(t._.provides[p]||t.$route).params.slug?(e(),a("div",T,[l(n,{path:"/blog/"+(t._.provides[p]||t.$route).params.slug.join("/")},{"not-found":m(()=>[z]),_:1},8,["path"])])):(e(),a("div",R,[l(M)]))])}}};export{st as default};