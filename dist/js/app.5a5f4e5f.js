(function(t){function e(e){for(var n,c,s=e[0],u=e[1],a=e[2],f=0,l=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ProjectChecker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var p=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Main",{attrs:{msg:"Welcome to Your ProjectChecker"}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg)+" "),n("img",{attrs:{id:"logo",src:r("cf05")}})]),n("ul",{staticClass:"projectsList"},t._l(t.statuses,(function(e){return n("li",{key:e.name},[t._v(" "+t._s(e.name+" || "+e.status)+" ")])})),0)])},s=[],u=(r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),"https://project-checker-tomerpacific.herokuapp.com/"),a=["https://tomerpacific.github.io/firebaseScraper/","https://tomerpacific.github.io/julOnSale/","https://tomerpacific.github.io/Android-XML-Menu-Generator/","https://tomerpacific.github.io/MediumArticleFetcher/","https://tomerpacific.github.io/pull-request-presenter/","https://tomerpacific.github.io/Portfolio/","https://tomerpacific.github.io/resume-reviewer/","https://tomerpacific.github.io/github-utils/"],p={name:"Main",props:{msg:String},data:function(){return{statuses:[],message:""}},created:function(){var t=this;Promise.all(a.map((function(e){return new Promise((function(r,n){fetch("".concat(u,"websiteStatus?url=").concat(e)).then((function(t){return t.json()})).then((function(e){Object.prototype.hasOwnProperty.call(e,"website")&&Object.prototype.hasOwnProperty.call(e,"websiteStatus")?(t.statuses.push({name:e.website,status:e.websiteStatus}),r()):(t.statuses.push({name:"Error",status:"No information was received from the server"}),r()),n()}))}))}))).then((function(t){console.log(t)})).catch((function(e){t.statuses.push({name:"Error",status:e})}))}},f=p,l=(r("cf23"),r("2877")),h=Object(l["a"])(f,c,s,!1,null,"6aa1f54c",null),b=h.exports,m={name:"App",components:{Main:b}},d=m,g=(r("034f"),Object(l["a"])(d,o,i,!1,null,null,null)),v=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,r){},a3b7:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.6726e38e.png"},cf23:function(t,e,r){"use strict";r("a3b7")}});
//# sourceMappingURL=app.5a5f4e5f.js.map