(this["webpackJsonpcinema-app-frontend"]=this["webpackJsonpcinema-app-frontend"]||[]).push([[0],{27:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);r(27);var n=r(13),o=r.n(n),a=r(10),i=r(11),s=function(){function e(t,r){Object(a.a)(this,e),this.storageService=void 0,this.supportedLanguages=void 0,this.storageService=t,this.supportedLanguages=r}return Object(i.a)(e,[{key:"getLocale",value:function(){var e=navigator.languages&&navigator.languages[0]||navigator.language||"en";return this.filterLocale(e)}},{key:"filterLocale",value:function(e){if(this.supportedLanguages){var t=this.supportedLanguages[0]?this.supportedLanguages[0]:"en";return this.supportedLanguages.indexOf(e)>-1?e:t}return e}},{key:"setLocale",value:function(e){this.storageService.setItem("lang",e)}}]),e}(),c=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"getItem",value:function(e){return window.localStorage.getItem(e)}},{key:"setItem",value:function(e,t){window.localStorage.setItem(e,t)}},{key:"removeItem",value:function(e){window.localStorage.removeItem(e)}},{key:"clear",value:function(){window.localStorage.clear()}}],[{key:"isAvailable",value:function(){var t=new e;try{var r="coders",n="camp";if(t.setItem(r,n),t.getItem(r)!==n)throw t.removeItem(r),new Error("Stored invalid value");return t.removeItem(r),!0}catch(o){return!1}}}]),e}(),u=new(function(){function e(){Object(a.a)(this,e),this.providers=void 0,this.providers=new Map}return Object(i.a)(e,[{key:"provide",value:function(e,t){this.providers.set(e,t)}},{key:"get",value:function(e){if(this.providers.has(e))return this.providers.get(e);throw new Error("Attempted to get an unregistered provider ".concat(e))}}]),e}()),g=r(8),l=r(21),d="CHANGE_LANG",p=Object(g.b)({LangReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lang:"pl"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{lang:t.lang};default:return e}}}),v=function(e){var t=e.persistConfig,r=Object(l.a)(t,p),n=Object(g.c)(r,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return{store:n,persistor:Object(l.b)(n)}},f=r(24),j=v({persistConfig:{key:"root",storage:r.n(f).a,whiteList:[]}}),h=r(0),b=r.n(h),O=r(26),m=r(15),w=r(25),x=r(2),L=function(){return"/main"},y=function(){return"/login"},I=function(){return"/register"},k=r(3),_=function(){return Object(k.jsx)(m.a,{children:Object(k.jsxs)(x.d,{children:[Object(k.jsx)(x.b,{path:y(),render:function(){return Object(k.jsx)(b.a.Fragment,{})}}),Object(k.jsx)(x.b,{path:I(),render:function(){return Object(k.jsx)(b.a.Fragment,{})}}),Object(k.jsx)(x.b,{path:L(),render:function(){return Object(k.jsx)(b.a.Fragment,{})}}),Object(k.jsx)(x.a,{exact:!0,from:"/",to:L()})]})})},E=function(e){var t=e.store,r=e.persistor;return Object(k.jsx)(O.a,{store:t,children:Object(k.jsx)(w.a,{persistor:r,children:Object(k.jsx)(m.a,{children:Object(k.jsx)(_,{})})})})};u.provide("storage",new c),u.provide("locale",new s(u.get("storage"),["en","pl"])),o.a.render(Object(k.jsx)(E,{store:j.store,persistor:j.persistor}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.66a2cf1d.chunk.js.map