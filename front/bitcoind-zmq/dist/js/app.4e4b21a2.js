(function(e){function n(n){for(var t,u,c=n[0],l=n[1],i=n[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},o={app:0},a=[];function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(r,t,function(n){return e[n]}.bind(null,t));return r},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var s=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"034f":function(e,n,r){"use strict";var t=r("85ec"),o=r.n(t);o.a},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u=(r("034f"),r("2877")),c={},l=Object(u["a"])(c,o,a,!1,null,null,null),i=l.exports,s=r("8c4f"),f=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[e.error?r("div",[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"home"},[r("span",[e._v("BLOQUES EN TIEMPO REAL")]),r("ul",e._l(e.rtblocks,(function(n,t){return r("li",{key:n.id},[e._v(e._s(t)+" "+e._s(n.hash))])})),0)])])},p=[],d=r("8785"),v=r("9530"),b=r.n(v);function h(){var e=Object(d["a"])(["\n  subscription getNewBlocks {\n    block {\n      id\n      hash\n    }\n  }"]);return h=function(){return e},e}var y=b()(h()),m={name:"Home",data:function(){return{blocks:[],rtblocks:[],error:null}},apollo:{$subscribe:{newBlocks:{query:y,result:function(e){this.rtblocks=e.data.block}}}}},w=m,_=Object(u["a"])(w,f,p,!1,null,null,null),O=_.exports;t["a"].use(s["a"]);var g=[{path:"/",name:"Home",component:O}],k=new s["a"]({mode:"history",base:"/",routes:g}),j=k,P=r("522d"),x=r("74ca"),E=r("fcff"),S=r("2bf2");t["a"].use(P["a"]),t["a"].config.productionTip=!1;var M=new E["a"]({uri:"ws://localhost:8080/v1/graphql",options:{reconnect:!0,timeout:3e4,connectionParams:{headers:{"x-hasura-admin-secret":"secretkey"}}}}),T=new x["a"]({link:M,cache:new S["a"]({addTypename:!0})}),$=new P["a"]({defaultClient:T});new t["a"]({router:j,apolloProvider:$,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,n,r){}});
//# sourceMappingURL=app.4e4b21a2.js.map