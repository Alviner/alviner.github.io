import{a4 as R,e as T,s as w,D as _,a5 as B,a6 as E,a7 as U,x as I,a8 as D,p as A,W as L,a9 as F,aa as H,I as x,ab as j,ac as k,S as V,ad as W,k as z,m as M,T as $}from"./De1h0GjA.js";async function N(t,a=R()){const{path:d,matched:p}=a.resolve(t);if(!p.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(d)))return;const g=a._preloadPromises=a._preloadPromises||[];if(g.length>4)return Promise.all(g).then(()=>N(t,a));a._routePreloaded.add(d);const e=p.map(n=>{var c;return(c=n.components)==null?void 0:c.default}).filter(n=>typeof n=="function");for(const n of e){const c=Promise.resolve(n()).catch(()=>{}).finally(()=>g.splice(g.indexOf(c)));g.push(c)}await Promise.all(g)}const G=(...t)=>t.find(a=>a!==void 0);function Q(t){const a=t.componentName||"NuxtLink";function d(e){return typeof e=="string"&&e.startsWith("#")}function p(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return O(e,t.trailingSlash);const c="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:O(c,t.trailingSlash)}}function g(e){const n=R(),c=z(),i=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const o=e.to||e.href||"";return typeof o=="string"&&j(o,{acceptRelative:!0})}),P=L("RouterLink"),y=P&&typeof P!="string"?P.useLink:void 0,m=x(()=>{if(e.external)return!0;const o=e.to||e.href||"";return typeof o=="object"?!1:o===""||v.value}),r=x(()=>{const o=e.to||e.href||"";return m.value?o:p(o,n.resolve)}),f=m.value||y==null?void 0:y({...e,to:r}),b=x(()=>{var o;if(!r.value||v.value||d(r.value))return r.value;if(m.value){const S=typeof r.value=="object"&&"path"in r.value?k(r.value):r.value,C=typeof S=="object"?n.resolve(S).href:S;return p(C,n.resolve)}return typeof r.value=="object"?((o=n.resolve(r.value))==null?void 0:o.href)??null:p(V(c.app.baseURL,r.value),n.resolve)});return{to:r,hasTarget:i,isAbsoluteUrl:v,isExternal:m,href:b,isActive:(f==null?void 0:f.isActive)??x(()=>r.value===n.currentRoute.value.path),isExactActive:(f==null?void 0:f.isExactActive)??x(()=>r.value===n.currentRoute.value.path),route:(f==null?void 0:f.route)??x(()=>n.resolve(r.value)),async navigate(){await W(b.value,{replace:e.replace,external:m.value||i.value})}}}return T({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:n}){const c=R(),{to:i,href:v,navigate:P,isExternal:y,hasTarget:m,isAbsoluteUrl:r}=g(e),f=w(!1),b=w(null),o=l=>{var s;b.value=e.custom?(s=l==null?void 0:l.$el)==null?void 0:s.nextElementSibling:l==null?void 0:l.$el};function S(l){var s,u;return!f.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((s=e.prefetchOn)==null?void 0:s[l])??((u=t.prefetchOn)==null?void 0:u[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!X()}async function C(l=_()){if(f.value)return;f.value=!0;const s=typeof i.value=="string"?i.value:y.value?k(i.value):c.resolve(i.value).fullPath,u=y.value?new URL(s,window.location.href).href:s;await Promise.all([l.hooks.callHook("link:prefetch",u).catch(()=>{}),!y.value&&!m.value&&N(i.value,c).catch(()=>{})])}if(S("visibility")){const l=_();let s,u=null;B(()=>{const h=J();E(()=>{s=U(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(u=h.observe(b.value,async()=>{u==null||u(),u=null,await C(l)}))})})}),I(()=>{s&&D(s),u==null||u(),u=null})}return()=>{var u;if(!y.value&&!m.value&&!d(i.value)){const h={ref:o,to:i.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(S("interaction")&&(h.onPointerenter=C.bind(null,void 0),h.onFocus=C.bind(null,void 0)),f.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),A(L("RouterLink"),h,n.default)}const l=e.target||null,s=G(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:v.value,navigate:P,prefetch:C,get route(){if(!v.value)return;const h=new URL(v.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return F(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:s,target:l,isExternal:y.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:v.value||null,rel:s,target:l},(u=n.default)==null?void 0:u.call(n))}}})}const Z=Q(H);function O(t,a){const d=a==="append"?M:$;return j(t)&&!t.startsWith("http")?t:d(t,!0)}function J(){const t=_();if(t._observer)return t._observer;let a=null;const d=new Map,p=(e,n)=>(a||(a=new IntersectionObserver(c=>{for(const i of c){const v=d.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&v&&v()}})),d.set(e,n),a.observe(e),()=>{d.delete(e),a==null||a.unobserve(e),d.size===0&&(a==null||a.disconnect(),a=null)});return t._observer={observe:p}}const K=/2g/;function X(){const t=navigator.connection;return!!(t&&(t.saveData||K.test(t.effectiveType)))}export{Z as _};
