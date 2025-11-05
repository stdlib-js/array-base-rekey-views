"use strict";var N=function(n,t){return function(){return t||n((t={exports:{}}).exports,t),t.exports}};var p=N(function(w,y){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-define-read-write-accessor/dist'),V=require('@stdlib/array-base-resolve-getter/dist'),_=require('@stdlib/utils-keys/dist');function b(n,t){var v,o,s,c,f,a,e;if(f=n.length,f<1)return[];for(o=_(t),a=o.length,s=[],e=0;e<a;e++)s.push(t[o[e]]);v=V(n);function h(r){return l(this,"_i",r),this}for(e=0;e<a;e++)O(h.prototype,s[e],q(o[e]),g(o[e]));for(l(h.prototype,"toJSON",k),c=[],e=0;e<f;e++)c.push(new h(e));return c;function q(r){return u;function u(){return v(n,this._i)[r]}}function g(r){return u;function u(i){v(n,this._i)[r]=i}}function k(){var r,u,i;for(r={},i=0;i<a;i++)u=s[i],r[u]=this[u];return r}}y.exports=b
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
