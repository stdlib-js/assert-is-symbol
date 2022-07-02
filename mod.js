// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")},e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(t){return!1}},o=Object.defineProperty,n=Object.prototype,l=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;var f=o,y=function(t,e,r){var o,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||c.call(t,e)?(o=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=o):t[e]=r.value),y="get"in r,p="set"in r,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t},p=r()?f:y;var b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};function _(t){return"symbol"==typeof t}var v=t();var m=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,j=s;var d=function(t){return j.call(t)},S=Object.prototype.hasOwnProperty;var g=function(t,e){return null!=t&&S.call(t,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",w=g,h=O,P=s;var T=d,E=function(t){var e,r,o;if(null==t)return P.call(t);r=t[h],e=w(t,h);try{t[h]=void 0}catch(e){return P.call(t)}return o=P.call(t),e?t[h]=r:delete t[h],o},k=m()?E:T;var x=/^Symbol\(.*\)$/;function A(t){try{return"symbol"==typeof t.valueOf()&&x.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function G(t){return"object"==typeof t&&"[object Symbol]"===k(t)&&A(t)}function V(t){return _(t)||G(t)}b(V,"isPrimitive",_),b(V,"isObject",G);var C=function(t){return function(){return t}},F=C(!1),$=C(!1),q=C(!1);b(F,"isPrimitive",$),b(F,"isObject",q);var z=t()?V:F;export{z as default};
//# sourceMappingURL=mod.js.map