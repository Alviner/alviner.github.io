const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C2sKTXa5.js","./BkZOIa9g.js","./C-v3KzvZ.js","./VHdb95h7.js"])))=>i.map(i=>d[i]);
import{q as T,y as m,z as D,A as L,r as j,B as q,C as I,f as F,D as b,E as H,u as K,F as M,G as Q,H as V,h as w,I as z,J as N,K as U,m as A}from"./BkZOIa9g.js";import{u as S,h as E}from"./VHdb95h7.js";const G=e=>e==="defer"||e===!1;function ne(...e){var C;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[r,i,n={}]=e;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=T(),a=i,u=()=>m.value,l=()=>s.isHydrating?s.payload.data[r]:s.static.data[r];n.server=n.server??!0,n.default=n.default??u,n.getCachedData=n.getCachedData??l,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??m.deep,n.dedupe=n.dedupe??"cancel";const p=()=>n.getCachedData(r,s)!=null;if(!s._asyncData[r]||!n.immediate){(C=s.payload._errors)[r]??(C[r]=m.errorValue);const f=n.deep?D:L;s._asyncData[r]={data:f(n.getCachedData(r,s)??n.default()),pending:D(!p()),error:j(s.payload._errors,r),status:D("idle"),_default:n.default}}const o={...s._asyncData[r]};delete o._default,o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[r]){if(G(f.dedupe??n.dedupe))return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&p())return Promise.resolve(n.getCachedData(r,s));o.pending.value=!0,o.status.value="pending";const y=new Promise((h,c)=>{try{h(a(s))}catch(_){c(_)}}).then(async h=>{if(y.cancelled)return s._asyncDataPromises[r];let c=h;n.transform&&(c=await n.transform(h)),n.pick&&(c=W(c,n.pick)),s.payload.data[r]=c,o.data.value=c,o.error.value=m.errorValue,o.status.value="success"}).catch(h=>{if(y.cancelled)return s._asyncDataPromises[r];o.error.value=H(h),o.data.value=K(n.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=y,s._asyncDataPromises[r]},o.clear=()=>J(s,r);const g=()=>o.refresh({_initial:!0}),x=n.server!==!1&&s.payload.serverRendered;{const f=M();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const c=f._nuxtOnBeforeMountCbs;q(()=>{c.forEach(_=>{_()}),c.splice(0,c.length)}),I(()=>c.splice(0,c.length))}x&&s.isHydrating&&(o.error.value||p())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?f._nuxtOnBeforeMountCbs.push(g):n.immediate&&g();const y=Q();if(n.watch){const c=F(n.watch,()=>o.refresh());y&&b(c)}const h=s.hook("app:data:refresh",async c=>{(!c||c.includes(r))&&await o.refresh()});y&&b(h)}const P=Promise.resolve(s._asyncDataPromises[r]).then(()=>o);return Object.assign(P,o),P}function J(e,t){t in e.payload.data&&(e.payload.data[t]=void 0),t in e.payload._errors&&(e.payload._errors[t]=m.errorValue),e._asyncData[t]&&(e._asyncData[t].data.value=void 0,e._asyncData[t].error.value=m.errorValue,e._asyncData[t].pending.value=!1,e._asyncData[t].status.value="idle"),t in e._asyncDataPromises&&(e._asyncDataPromises[t]&&(e._asyncDataPromises[t].cancelled=!0),e._asyncDataPromises[t]=void 0)}function W(e,t){const r={};for(const i of t)r[i]=e[i];return r}const $=(e,t)=>t.split(".").reduce((r,i)=>r&&r[i],e),v=(e,t)=>Object.keys(e).filter(t).reduce((r,i)=>Object.assign(r,{[i]:e[i]}),{}),se=e=>t=>e&&e.length?v(t,r=>!e.includes(r)):t,ie=e=>t=>Array.isArray(t)?t.map(r=>e(r)):e(t),B=e=>{const t=[],r=[];for(const i of e)["$","_"].includes(i)?t.push(i):r.push(i);return{prefixes:t,properties:r}},oe=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=B(e);return v(t,n=>!i.includes(n)&&!r.includes(n[0]))},ce=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=B(e);return v(t,n=>i.includes(n)||r.includes(n[0]))},ue=(e,t)=>{const r=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),i=Object.keys(t).filter(n=>!n.startsWith("$"));for(const n of i)e=e.sort((s,a)=>{const u=[$(s,n),$(a,n)].map(l=>{if(l!==null)return l instanceof Date?l.toISOString():l});return t[n]===-1&&u.reverse(),r.compare(u[0],u[1])});return e},le=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},d=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],k=["sort","where","only","without"];function X(e,t={}){const r={};for(const a of Object.keys(t.initialParams||{}))r[a]=k.includes(a)?d(t.initialParams[a]):t.initialParams[a];const i=(a,u=l=>l)=>(...l)=>(r[a]=u(...l),s),n=a=>{var u;return t.legacy?a!=null&&a.surround?a.surround:a&&(a!=null&&a.dirConfig&&(a.result={_path:(u=a.dirConfig)==null?void 0:u._path,...a.result,_dir:a.dirConfig}),a!=null&&a._path||Array.isArray(a)||!Object.prototype.hasOwnProperty.call(a,"result")?a:a==null?void 0:a.result):a},s={params:()=>({...r,...r.where?{where:[...d(r.where)]}:{},...r.sort?{sort:[...d(r.sort)]}:{}}),only:i("only",d),without:i("without",d),where:i("where",a=>[...d(r.where),...d(a)]),sort:i("sort",a=>[...d(r.sort),...d(a)]),limit:i("limit",a=>parseInt(String(a),10)),skip:i("skip",a=>parseInt(String(a),10)),find:()=>e(s).then(n),findOne:()=>e(i("first")(!0)).then(n),count:()=>e(i("count")(!0)).then(n),locale:a=>s.where({_locale:a}),withSurround:i("surround",(a,u)=>({query:a,...u})),withDirConfig:()=>i("dirConfig")(!0)};return t.legacy&&(s.findSurround=(a,u)=>s.withSurround(a,u).find().then(n)),s}function R(e){return JSON.stringify(e,Y)}function Y(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const Z=e=>{let t=R(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},O=e=>V(e,w().public.content.api.baseURL),fe=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},ee=()=>{const{experimental:e}=w().public.content;return e.clientDB?!0:S().isEnabled()},te=()=>async e=>{const{content:t}=w().public,r=e.params(),i=t.experimental.stripQueryParameters?O(`/query/${`${E(r)}.${t.integrity}`}/${Z(r)}.json`):O(`/query/${E(r)}.${t.integrity}.json`);if(ee())return(await A(()=>import("./C2sKTXa5.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(a=>a.useContentDatabase())).fetch(e);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:R(r),previewToken:S().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function de(e,...t){const{content:r}=w().public,i=X(te(),{initialParams:typeof e!="string"?e:{},legacy:!0});let n;typeof e=="string"&&(n=z(N(e,...t)));const s=i.params;return i.params=()=>{var u,l,p;const a=s();return n&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:U(n)}):a.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=a.sort)!=null&&u.length||(a.sort=[{_stem:1,$numeric:!0}]),r.locales.length&&((p=(l=a.where)==null?void 0:l.find(g=>g._locale))!=null&&p._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},i}export{ne as a,le as b,d as c,ue as d,Z as e,ie as f,$ as g,oe as h,ce as i,R as j,X as k,se as o,de as q,ee as s,fe as u,O as w};
