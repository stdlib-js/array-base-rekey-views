"use strict";var N=function(n,t){return function(){try{return t||n((t={exports:{}}).exports,t),t.exports}catch(o){throw (t=0, o)}};};var p=N(function(w,y){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-define-read-write-accessor/dist'),V=require('@stdlib/array-base-resolve-getter/dist'),_=require('@stdlib/utils-keys/dist');function b(n,t){var o,s,a,c,f,v,e;if(f=n.length,f<1)return[];for(s=_(t),v=s.length,a=[],e=0;e<v;e++)a.push(t[s[e]]);o=V(n);function h(r){return l(this,"_i",r),this}for(e=0;e<v;e++)O(h.prototype,a[e],q(s[e]),g(s[e]));for(l(h.prototype,"toJSON",k),c=[],e=0;e<f;e++)c.push(new h(e));return c;function q(r){return u;function u(){return o(n,this._i)[r]}}function g(r){return u;function u(i){o(n,this._i)[r]=i}}function k(){var r,u,i;for(r={},i=0;i<v;i++)u=a[i],r[u]=this[u];return r}}y.exports=b
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
