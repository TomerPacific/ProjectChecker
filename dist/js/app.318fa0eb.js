(function(t){function e(e){for(var n,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ProjectChecker/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"2f14":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Main",{attrs:{msg:"Welcome to Your ProjectChecker"}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg)+" "),n("img",{attrs:{id:"logo",src:r("cf05")}})]),t.isLoading?n("Loader"):t._e(),t.isLoading?t._e():n("ul",{staticClass:"projectsList"},t._l(t.statuses,(function(e){return n("li",{key:e.name},[n("a",{attrs:{href:e.name,target:"_blank"}},[t._v(t._s(t.extractServiceNameFromUrl(e.name)))]),200===e.status?n("span",{staticClass:"websiteStatus"},[t._v("✅")]):n("span",{staticClass:"websiteStatus"},[t._v("❌")])])})),0)],1)},a=[],c=(r("d81d"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("ddb0"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ripple"},[r("div"),r("div")])}],p={name:"Loader"},l=p,f=(r("ac72"),r("2877")),h=Object(f["a"])(l,c,u,!1,null,"5f08b265",null),d=h.exports,m="https://project-checker-tomerpacific.herokuapp.com/",b=["https://tomerpacific.github.io/firebaseScraper/","https://tomerpacific.github.io/julOnSale/","https://tomerpacific.github.io/Android-XML-Menu-Generator/","https://tomerpacific.github.io/MediumArticleFetcher/","https://tomerpacific.github.io/pull-request-presenter/","https://tomerpacific.github.io/Portfolio/","https://tomerpacific.github.io/resume-reviewer/","https://tomerpacific.github.io/github-utils/"],g={components:{Loader:d},name:"Main",props:{msg:String},data:function(){return{statuses:[],message:"",isLoading:!0}},created:function(){var t=this,e=this;Promise.all(b.map((function(r){return t.createFetchPromise(r,e)}))).then((function(){e.isLoading=!1})).catch((function(t){e.statuses.push({name:"Error",status:t}),e.isLoading=!1}))},methods:{createFetchPromise:function(t,e){return new Promise((function(r,n){fetch("".concat(m,"websiteStatus?url=").concat(t)).then((function(t){return t.json()})).then((function(t){Object.prototype.hasOwnProperty.call(t,"website")&&Object.prototype.hasOwnProperty.call(t,"websiteStatus")?(e.statuses.push({name:t.website,status:t.websiteStatus}),r()):(e.statuses.push({name:"Error",status:"No information was received from the server"}),r()),n()}))}))},extractServiceNameFromUrl:function(t){var e=t.split("/"),r=e[e.length-2];return r}}},v=g,_=(r("e46c"),Object(f["a"])(v,s,a,!1,null,"67422d6a",null)),w=_.exports,y={name:"App",components:{Main:w}},j=y,O=(r("034f"),Object(f["a"])(j,i,o,!1,null,null,null)),P=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"67ab":function(t,e,r){},"85ec":function(t,e,r){},ac72:function(t,e,r){"use strict";r("67ab")},cf05:function(t,e,r){t.exports=r.p+"img/logo.6726e38e.png"},e46c:function(t,e,r){"use strict";r("2f14")}});
//# sourceMappingURL=app.318fa0eb.js.map