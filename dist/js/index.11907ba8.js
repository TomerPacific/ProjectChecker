(function(t){function e(e){for(var r,a,o=e[0],c=e[1],f=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},u={index:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ProjectChecker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var f=0;f<o.length;f++)e(o[f]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("1c94")},"098a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),u=n("1b40"),i=r.__importDefault(n("2614")),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e=r.__decorate([u.Component({components:{Main:i.default}})],e),e}(u.Vue);e.default=a},1307:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),u=r.__importDefault(n("2b0e")),i=r.__importDefault(n("555f")),a="https://project-checker-tomerpacific.herokuapp.com/checkStatus";e.default=u.default.extend({components:{Loader:i.default},name:"Main",props:{msg:String},data:function(){return{statuses:[],message:"",isLoading:!0}},created:function(){var t=this;this.getWebsitesStatus().then((function(e){t.statuses=e,t.isLoading=!1})).catch((function(){t.isLoading=!1}))},methods:{getWebsitesStatus:function(){var t=this;return new Promise((function(e,n){fetch(a).then((function(t){return t.json()})).then((function(t){e(t.websites)})).catch((function(e){t.statuses.push({url:"Error",status:e}),n()}))}))},extractServiceNameFromUrl:function(t){var e=t.split("/"),n=e[e.length-2];return n}}})},1730:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ripple"},[n("div"),n("div")])}]},1803:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),u=r.__importDefault(n("2b0e"));e.default=u.default.extend({name:"Loader"})},"1c94":function(t,e,n){},"22c0":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg)+" "),r("img",{attrs:{id:"logo",src:n("cf05")}})]),t.isLoading?r("Loader"):t._e(),t.isLoading?t._e():r("ul",{staticClass:"projectsList"},t._l(t.statuses,(function(e){return r("li",{key:e.name},[r("a",{attrs:{href:e.name,target:"_blank"}},[t._v(t._s(t.extractServiceNameFromUrl(e.name)))]),200===e.status?r("span",{staticClass:"websiteStatus"},[t._v("✅")]):r("span",{staticClass:"websiteStatus"},[t._v("❌")])])})),0)],1)},u=[]},2319:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main",{attrs:{msg:"Welcome to Your ProjectChecker"}})],1)},u=[]},2614:function(t,e,n){"use strict";n.r(e);var r=n("22c0"),u=n("6d96");for(var i in u)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("e08b");var a=n("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,"d7fc763a",null);e["default"]=o.exports},3098:function(t,e,n){},"3dfd":function(t,e,n){"use strict";n.r(e);var r=n("2319"),u=n("6f68");for(var i in u)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("034f");var a=n("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"555f":function(t,e,n){"use strict";n.r(e);var r=n("1730"),u=n("b9cd");for(var i in u)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("b7b1");var a=n("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,"e9f07626",null);e["default"]=o.exports},"6d0d":function(t,e,n){},"6d96":function(t,e,n){"use strict";n.r(e);var r=n("1307"),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},"6f68":function(t,e,n){"use strict";n.r(e);var r=n("098a"),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},b7b1:function(t,e,n){"use strict";n("6d0d")},b9cd:function(t,e,n){"use strict";n.r(e);var r=n("1803"),u=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},cd49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("9ab4"),u=r.__importDefault(n("2b0e")),i=r.__importDefault(n("3dfd"));u.default.config.productionTip=!1,new u.default({render:function(t){return t(i.default)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.6726e38e.png"},e08b:function(t,e,n){"use strict";n("3098")}});
//# sourceMappingURL=index.11907ba8.js.map