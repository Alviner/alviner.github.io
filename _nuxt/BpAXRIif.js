import{_ as st}from"./CyJm12pF.js";import{g as it,c as at}from"./Cpj98o6Y.js";import{f as R,o as j,c as V,a as b,b as ut,w as ot,t as Z,d as ct,h as q,j as ft,g as dt,F as lt,r as ht,i as mt}from"./M1yOn1nj.js";import{u as $t,q as pt}from"./Or3uGOzC.js";import"./X3AXuar3.js";var X={exports:{}};(function(B,m){(function(S,_){B.exports=_()})(at,function(){var S=1e3,_=6e4,U=36e5,A="millisecond",g="second",y="minute",k="hour",v="day",N="week",p="month",z="quarter",M="year",Y="date",P="Invalid Date",tt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,et=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},E=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},rt={s:E,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+E(r,2,"0")+":"+E(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,p),i=t-e<0,a=n.clone().add(r+(i?-1:1),p);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:p,y:M,w:N,d:v,D:Y,h:k,m:y,s:g,ms:A,Q:z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},H="en",w={};w[H]=nt;var G="$isDayjsObject",J=function(s){return s instanceof W||!(!s||!s[G])},I=function s(n,t,r){var e;if(!n)return H;if(typeof n=="string"){var i=n.toLowerCase();w[i]&&(e=i),t&&(w[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;w[o]=n,e=o}return!r&&e&&(H=e),e||!r&&H},f=function(s,n){if(J(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new W(t)},u=rt;u.l=I,u.i=J,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var W=function(){function s(t){this.$L=I(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[G]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(tt);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==P},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(O,h){var D=u.w(e.$u?Date.UTC(e.$y,h,O):new Date(e.$y,h,O),e);return i?D:D.endOf(v)},c=function(O,h){return u.w(e.toDate()[O].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(h)),e)},d=this.$W,l=this.$M,$=this.$D,C="set"+(this.$u?"UTC":"");switch(a){case M:return i?o(1,0):o(31,11);case p:return i?o(1,l):o(0,l+1);case N:var x=this.$locale().weekStart||0,L=(d<x?d+7:d)-x;return o(i?$-L:$+(6-L),l);case v:case Y:return c(C+"Hours",0);case k:return c(C+"Minutes",1);case y:return c(C+"Seconds",2);case g:return c(C+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[v]=a+"Date",e[Y]=a+"Date",e[p]=a+"Month",e[M]=a+"FullYear",e[k]=a+"Hours",e[y]=a+"Minutes",e[g]=a+"Seconds",e[A]=a+"Milliseconds",e)[i],c=i===v?this.$D+(r-this.$W):r;if(i===p||i===M){var d=this.clone().set(Y,1);d.$d[o](c),d.init(),this.$d=d.set(Y,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(l){var $=f(i);return u.w($.date($.date()+Math.round(l*t)),i)};if(a===p)return this.set(p,this.$M+t);if(a===M)return this.set(M,this.$y+t);if(a===v)return o(1);if(a===N)return o(7);var c=(e={},e[y]=_,e[k]=U,e[g]=S,e)[a]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||P;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,d=this.$M,l=e.weekdays,$=e.months,C=e.meridiem,x=function(h,D,T,F){return h&&(h[D]||h(r,i))||T[D].slice(0,F)},L=function(h){return u.s(o%12||12,h,"0")},O=C||function(h,D,T){var F=h<12?"AM":"PM";return T?F.toLowerCase():F};return i.replace(et,function(h,D){return D||function(T){switch(T){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return x(e.monthsShort,d,$,3);case"MMMM":return x($,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return x(e.weekdaysMin,r.$W,l,2);case"ddd":return x(e.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return L(1);case"hh":return L(2);case"a":return O(o,c,!0);case"A":return O(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(h)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*_,l=this-c,$=function(){return u.m(a,c)};switch(o){case M:i=$()/12;break;case p:i=$();break;case z:i=$()/3;break;case N:i=(l-d)/6048e5;break;case v:i=(l-d)/864e5;break;case k:i=l/U;break;case y:i=l/_;break;case g:i=l/S;break;default:i=l}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return w[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=I(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),Q=W.prototype;return f.prototype=Q,[["$ms",A],["$s",g],["$m",y],["$H",k],["$W",v],["$M",p],["$y",M],["$D",Y]].forEach(function(s){Q[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,W,f),s.$i=!0),f},f.locale=I,f.isDayjs=J,f.unix=function(s){return f(1e3*s)},f.en=w[H],f.Ls=w,f.p={},f})})(X);var _t=X.exports;const K=it(_t),yt={class:"flex min-w-0 gap-x-4"},gt={class:"min-w-0 flex-auto"},vt={class:"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},Mt={class:"mt-5 line-clamp-3 text-sm leading-6 text-gray-600"},Dt={class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},St={key:0,class:"mt-1 text-xs leading-5 text-gray-500"},wt=["datetime"],xt="DD-MM-YYYY HH:mm",Ot=R({__name:"ArticleListItem",props:{article:{}},setup(B){return(m,S)=>{const _=st;return j(),V("li",null,[b("div",yt,[b("div",gt,[ut(_,{to:m.article._path},{default:ot(()=>[b("h3",vt,Z(m.article.title),1)]),_:1},8,["to"]),b("p",Mt,Z(m.article.description),1)])]),b("div",Dt,[m.article.datetime?(j(),V("p",St,[ct(" Published "),b("time",{datetime:q(K)(m.article.datetime).toISOString()},Z(q(K)(m.article.datetime).format(xt)),9,wt)])):ft("",!0)])])}}}),bt={role:"list",class:"devide-y devide-gray-100"},Tt=R({__name:"index",async setup(B){let m,S;const{data:_}=([m,S]=dt(()=>$t("articles",()=>pt("/articles").find())),m=await m,S(),m);return(U,A)=>{const g=Ot;return j(),V("main",null,[b("ul",bt,[(j(!0),V(lt,null,ht(q(_),y=>(j(),mt(g,{key:y.id,article:y},null,8,["article"]))),128))])])}}});export{Tt as default};
