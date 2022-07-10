(function(){"use strict";var e={8431:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139);function u(e,t,n,u,a,c){const s=(0,r.up)("router-link"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.routes,((t,n)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:n},[(0,r.Wm)(s,{to:t.path},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1032,["to"]),(0,r.Uk)(" "+(0,i.zw)(n===e.routes.length-1?"":" | "),1)],64)))),128))]),(0,r.Wm)(l,{id:"router-render"},{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))],1024))])),_:2},1024)])),_:1})],64)}var a=(0,r.aZ)({computed:{routes:function(){return this.$router.options.routes}}}),c=n(89);const s=(0,c.Z)(a,[["render",u]]);var l=s,f=n(5431);(0,f.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n(678);const p=e=>((0,r.dD)("data-v-466783a4"),e=e(),(0,r.Cn)(),e),m={class:"home"},h=p((()=>(0,r._)("div",{class:"topper"},[(0,r._)("img",{class:"pfp",alt:"Vue logo",src:"https://github.com/jy1263.png"}),(0,r._)("div",{class:"title"},[(0,r.Uk)("Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. "),(0,r._)("br"),(0,r.Uk)(" Here's a lil page for my accounts.")])],-1)));function g(e,t,n,o,i,u){const a=(0,r.up)("Social");return(0,r.wg)(),(0,r.iD)("div",m,[h,(0,r.Wm)(a)])}const v={class:"social"};function b(e,t,n,o,i,u){const a=(0,r.up)("IconButton");return(0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.links,((e,t)=>((0,r.wg)(),(0,r.j4)(a,(0,r.dG)(e,{key:t}),null,16)))),128))])}var y=n(7893),w=(0,r.aZ)({name:"Social",components:{IconButton:y.Z},props:{msg:String},data(){return{links:[{href:"https://github.com/jy1263/",icon:"mdi-github",text:"Github"},{href:"https://github.com/jy1263/jy1263.github.io",icon:"mdi-github",text:"This Repository"},{href:"https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q",icon:"mdi-spotify",text:"Spotify"},{href:"https://ayanamy.bandcamp.com/",icon:"mdi-music-circle",text:"Bandcamp"},{href:"https://app.matter.online/artists/@ayanamy",icon:"mdi-music-circle",text:"Matter Music"},{href:"https://soundcloud.com/owotter",icon:"mdi-soundcloud",text:"Soundcloud"},{href:"https://soundcloud.com/owotterwip",icon:"mdi-soundcloud",text:"WIP Soundcloud"},{href:"https://pronouns.page/u/AyanAmy",icon:"mdi-face-woman-profile",text:"Pronouns"}]}},mounted(){},methods:{}});const k=(0,c.Z)(w,[["render",b],["__scopeId","data-v-7bd65974"]]);var _=k,S=(0,r.aZ)({name:"HomeView",components:{Social:_}});const j=(0,c.Z)(S,[["render",g],["__scopeId","data-v-466783a4"]]);var A=j;const C=[{path:"/",name:"Home",component:A},{path:"/portfolio",name:"Portfolio",component:()=>n.e(443).then(n.bind(n,6063))},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,2172))},{path:"/radio",name:"Radio",component:()=>n.e(443).then(n.bind(n,5099))}],O=(0,d.p7)({history:(0,d.PO)("/"),routes:C});var x=O,E=n(65),P=(0,E.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(l).use(P).use(x).mount("#app")},7893:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(3396),r=n(7139);const i=["href"];function u(e,t,n,u,a,c){return(0,o.wg)(),(0,o.iD)("a",{href:e.href},[(0,o._)("span",{class:(0,r.C_)(`mdi ${e.icon}`)},null,2),(0,o.Uk)((0,r.zw)(e.text),1)],8,i)}var a=(0,o.aZ)({props:{href:String,icon:String,text:String}}),c=n(89);const s=(0,c.Z)(a,[["render",u],["__scopeId","data-v-d3955486"]]);var l=s}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.f4541d11.js"}}(),function(){n.miniCssF=function(e){return"css/about.1cc9973a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return r();e(o,a,r,i)}))},r={826:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={826:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8431)}));o=n.O(o)})();
//# sourceMappingURL=index.fa32846a.js.map