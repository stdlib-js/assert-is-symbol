"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(R){throw (t=0, R)}};};var i=e(function(M,n){
function d(r){return typeof r=="symbol"}n.exports=d
});var v=e(function(N,l){
function h(r){return Symbol.prototype.toString.call(r)}l.exports=h
});var b=e(function(Q,y){
var g=v(),C=/^Symbol\(.*\)$/;function E(r){try{return typeof r.valueOf()=="symbol"&&C.test(g(r))}catch(t){return!1}}y.exports=E
});var s=e(function(T,m){
var F=require('@stdlib/utils-native-class/dist'),$=b();function k(r){return typeof r=="object"&&F(r)==="[object Symbol]"&&$(r)}m.exports=k
});var p=e(function(U,f){
var w=i(),z=s();function A(r){return w(r)||z(r)}f.exports=A
});var x=e(function(V,S){
var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),B=i(),D=s();q(o,"isPrimitive",B);q(o,"isObject",D);S.exports=o
});var P=e(function(W,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-constant-function/dist'),a=u(!1),G=u(!1),H=u(!1);O(a,"isPrimitive",G);O(a,"isObject",H);j.exports=a
});var I=require('@stdlib/assert-has-symbol-support/dist'),J=x(),K=P(),c;I()?c=J:c=K;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
