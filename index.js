// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,v=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,v,"$1e"),t=g.call(t,m,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+S(i):S(i)+e}var k=String.fromCharCode,E=isNaN,j=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,E(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function I(e){var r,t,i;if(!A(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return O.apply(null,t)}var P=Object.prototype,C=P.toString,R=P.__defineGetter__,Z=P.__defineSetter__,G=P.__lookupGetter__,W=P.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};function N(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"symbol"==typeof e}var X=e(),z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[B],a=B,r=null!=(n=e)&&M.call(n,a);try{e[B]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[B]=t:delete e[B],i}:function(e){return z.call(e)},H=/^Symbol\(.*\)$/;function J(e){try{return"symbol"==typeof e.valueOf()&&H.test(function(e){return Symbol.prototype.toString.call(e)}(e))}catch(e){return!1}}function K(e){return"object"==typeof e&&"[object Symbol]"===D(e)&&J(e)}function Q(e){return U(e)||K(e)}function Y(e){return function(){return e}}N(Q,"isPrimitive",U),N(Q,"isObject",K);var ee=Y(!1),re=Y(!1),te=Y(!1);return N(ee,"isPrimitive",re),N(ee,"isObject",te),e()?Q:ee},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSymbol=r();
//# sourceMappingURL=index.js.map
