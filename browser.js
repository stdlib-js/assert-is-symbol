// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function v(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,w,"e"),t=f.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,n,o,c,l,p,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))c+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+_(h):_(h)+f)),c+=i.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(O(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var F=Object.prototype,I=F.toString,P=F.__defineGetter__,A=F.__defineSetter__,C=F.__lookupGetter__,R=F.__lookupSetter__,Z=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(C.call(e,r)||R.call(e,r)?(i=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};function G(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"symbol"==typeof e}var L=e(),U=Object.prototype.toString,X=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"",q=L&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return U.call(e);t=e[M],a=M,r=null!=(n=e)&&X.call(n,a);try{e[M]=void 0}catch(r){return U.call(e)}return i=U.call(e),r?e[M]=t:delete e[M],i}:function(e){return U.call(e)},B=/^Symbol\(.*\)$/;function D(e){try{return"symbol"==typeof e.valueOf()&&B.test(function(e){return Symbol.prototype.toString.call(e)}(e))}catch(e){return!1}}function H(e){return"object"==typeof e&&"[object Symbol]"===q(e)&&D(e)}function J(e){return W(e)||H(e)}function K(e){return function(){return e}}G(J,"isPrimitive",W),G(J,"isObject",H);var N=K(!1),Q=K(!1),Y=K(!1);return G(N,"isPrimitive",Q),G(N,"isObject",Y),e()?J:N},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSymbol=r();
//# sourceMappingURL=browser.js.map
