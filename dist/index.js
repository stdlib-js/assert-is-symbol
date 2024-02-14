"use strict";var e=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var i=e(function(L,n){
function R(r){return typeof r=="symbol"}n.exports=R
});var v=e(function(M,l){
function d(r){return Symbol.prototype.toString.call(r)}l.exports=d
});var b=e(function(N,y){
var h=v(),g=/^Symbol\(.*\)$/;function C(r){try{return typeof r.valueOf()=="symbol"&&g.test(h(r))}catch(t){return!1}}y.exports=C
});var s=e(function(Q,m){
var E=require('@stdlib/utils-native-class/dist'),F=b();function $(r){return typeof r=="object"&&E(r)==="[object Symbol]"&&F(r)}m.exports=$
});var p=e(function(T,f){
var k=i(),w=s();function z(r){return k(r)||w(r)}f.exports=z
});var x=e(function(U,S){
var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),A=i(),B=s();q(o,"isPrimitive",A);q(o,"isObject",B);S.exports=o
});var P=e(function(V,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-constant-function/dist'),a=u(!1),D=u(!1),G=u(!1);O(a,"isPrimitive",D);O(a,"isObject",G);j.exports=a
});var H=require('@stdlib/assert-has-symbol-support/dist'),I=x(),J=P(),c;H()?c=I:c=J;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
