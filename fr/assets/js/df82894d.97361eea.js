"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Lists",sidebar_position:5,slug:"/6ed67749-66a5-4fd1-904b-ad61f111fee5"},l=void 0,o={unversionedId:"Examples/Lists",id:"Examples/Lists",title:"Lists",description:"1. one",source:"@site/docs/Examples/Lists.md",sourceDirName:"Examples",slug:"/6ed67749-66a5-4fd1-904b-ad61f111fee5",permalink:"/notion-sync/fr/6ed67749-66a5-4fd1-904b-ad61f111fee5",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Lists",sidebar_position:5,slug:"/6ed67749-66a5-4fd1-904b-ad61f111fee5"},sidebar:"defaultSidebar",previous:{title:"Embedding gif",permalink:"/notion-sync/fr/5a4f8149-22c9-401f-86fa-d972d1a6cb6b"},next:{title:"Links to Headings with slug",permalink:"/notion-sync/fr/links-to-headings"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"one")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"two"),(0,a.kt)("p",{parentName:"li"},"Some text in between")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"three"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"this is three aa"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"four"))),(0,a.kt)("p",null,"This is a bulleted list:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul"},"alpha"),(0,a.kt)("li",{parentName:"ul"},"beta"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A todo item"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Another todo item")),(0,a.kt)("p",null,"(note, with Docusaurus 2, if you follow the above list with the below toggle without material in-between, you get ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sillsdev/docu-notion/issues/77"},"https://github.com/sillsdev/docu-notion/issues/77"),")"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"toggle me"),"- inside bullet",(0,a.kt)("p",null,"inside plain text")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is a toggle"),(0,a.kt)("p",null,"The inside of a toggle")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This is an empty toggle")))}c.isMDXComponent=!0}}]);