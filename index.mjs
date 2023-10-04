// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function n(t){return"symbol"==typeof t}var r=/^Symbol\(.*\)$/;function o(t){try{return"symbol"==typeof t.valueOf()&&r.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function m(t){return"object"==typeof t&&"[object Symbol]"===s(t)&&o(t)}function l(t){return n(t)||m(t)}e(l,"isPrimitive",n),e(l,"isObject",m);var c,d=i(!1),u=i(!1),p=i(!1);e(d,"isPrimitive",u),e(d,"isObject",p);var j=c=t()?l:d;const{isPrimitive:b}=c,{isObject:f}=c;export{j as default,f as isObject,b as isPrimitive};
//# sourceMappingURL=index.mjs.map
