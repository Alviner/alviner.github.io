import{_ as i,o as a,c as t,a as o,n as c,r as d,g as h,S as k,b as s}from"./BCQIh5WB.js";const u={},m={viewBox:"0 0 24 24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};function p(n,e){return a(),t("svg",m,e[0]||(e[0]=[o("path",{d:"M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"},null,-1),o("path",{d:"M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",fill:"none"},null,-1)]))}const f=i(u,[["render",p]]),g={},_={viewBox:"0 0 24 24","aria-hidden":"true"};function v(n,e){return a(),t("svg",_,e[0]||(e[0]=[o("path",{d:"M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},null,-1)]))}const M=i(g,[["render",v]]),b=c({__name:"ModeToggle",setup(n){const e=d(!1);h(e,r=>{document.documentElement.classList.toggle("dark",r),r?localStorage.theme="dark":localStorage.theme="light"}),k(()=>{e.value=localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches});function l(){e.value=!e.value}return(r,w)=>(a(),t("button",{type:"button","aria-label":"Toggle dark mode",onClick:l,class:"group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"},[s(f,{class:"h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"}),s(M,{class:"hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"})]))}});export{b as _};
