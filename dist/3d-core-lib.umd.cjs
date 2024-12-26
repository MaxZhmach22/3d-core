(function(b,M){typeof exports=="object"&&typeof module<"u"?M(exports,require("three")):typeof define=="function"&&define.amd?define(["exports","three"],M):(b=typeof globalThis<"u"?globalThis:b||self,M(b["3d-core-lib"]={},b.THREE))})(this,function(b,M){"use strict";var Ye=Object.defineProperty;var Ze=(b,M,P)=>M in b?Ye(b,M,{enumerable:!0,configurable:!0,writable:!0,value:P}):b[M]=P;var Y=(b,M,P)=>Ze(b,typeof M!="symbol"?M+"":M,P);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z={};/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */var $;function pe(){if($)return Z;$=1;var w;return function(O){(function(g){var v=typeof globalThis=="object"?globalThis:typeof P=="object"?P:typeof self=="object"?self:typeof this=="object"?this:U(),m=k(O);typeof v.Reflect<"u"&&(m=k(v.Reflect,m)),g(m,v),typeof v.Reflect>"u"&&(v.Reflect=O);function k(I,x){return function(E,A){Object.defineProperty(I,E,{configurable:!0,writable:!0,value:A}),x&&x(E,A)}}function B(){try{return Function("return this;")()}catch{}}function R(){try{return(0,eval)("(function() { return this; })()")}catch{}}function U(){return B()||R()}})(function(g,v){var m=Object.prototype.hasOwnProperty,k=typeof Symbol=="function",B=k&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",R=k&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",U=typeof Object.create=="function",I={__proto__:[]}instanceof Array,x=!U&&!I,E={create:U?function(){return N(Object.create(null))}:I?function(){return N({__proto__:null})}:function(){return N({})},has:x?function(e,t){return m.call(e,t)}:function(e,t){return t in e},get:x?function(e,t){return m.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},A=Object.getPrototypeOf(Function),D=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Ve(),L=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:qe(),V=typeof WeakMap=="function"?WeakMap:ze(),j=k?Symbol.for("@reflect-metadata:registry"):void 0,H=Fe(),K=We(H);function me(e,t,r,n){if(s(r)){if(!ue(e))throw new TypeError;if(!se(t))throw new TypeError;return Ce(e,t)}else{if(!ue(e))throw new TypeError;if(!y(t))throw new TypeError;if(!y(n)&&!s(n)&&!C(n))throw new TypeError;return C(n)&&(n=void 0),r=S(r),Be(e,t,r,n)}}g("decorate",me);function Oe(e,t){function r(n,u){if(!y(n))throw new TypeError;if(!s(u)&&!Ue(u))throw new TypeError;ne(e,t,n,u)}return r}g("metadata",Oe);function ke(e,t,r,n){if(!y(r))throw new TypeError;return s(n)||(n=S(n)),ne(e,t,r,n)}g("defineMetadata",ke);function Te(e,t,r){if(!y(t))throw new TypeError;return s(r)||(r=S(r)),ee(e,t,r)}g("hasMetadata",Te);function Se(e,t,r){if(!y(t))throw new TypeError;return s(r)||(r=S(r)),q(e,t,r)}g("hasOwnMetadata",Se);function Ee(e,t,r){if(!y(t))throw new TypeError;return s(r)||(r=S(r)),te(e,t,r)}g("getMetadata",Ee);function Pe(e,t,r){if(!y(t))throw new TypeError;return s(r)||(r=S(r)),re(e,t,r)}g("getOwnMetadata",Pe);function Re(e,t){if(!y(e))throw new TypeError;return s(t)||(t=S(t)),ae(e,t)}g("getMetadataKeys",Re);function Ie(e,t){if(!y(e))throw new TypeError;return s(t)||(t=S(t)),ie(e,t)}g("getOwnMetadataKeys",Ie);function je(e,t,r){if(!y(t))throw new TypeError;if(s(r)||(r=S(r)),!y(t))throw new TypeError;s(r)||(r=S(r));var n=G(t,r,!1);return s(n)?!1:n.OrdinaryDeleteMetadata(e,t,r)}g("deleteMetadata",je);function Ce(e,t){for(var r=e.length-1;r>=0;--r){var n=e[r],u=n(t);if(!s(u)&&!C(u)){if(!se(u))throw new TypeError;t=u}}return t}function Be(e,t,r,n){for(var u=e.length-1;u>=0;--u){var _=e[u],p=_(t,r,n);if(!s(p)&&!C(p)){if(!y(p))throw new TypeError;n=p}}return n}function ee(e,t,r){var n=q(e,t,r);if(n)return!0;var u=J(t);return C(u)?!1:ee(e,u,r)}function q(e,t,r){var n=G(t,r,!1);return s(n)?!1:fe(n.OrdinaryHasOwnMetadata(e,t,r))}function te(e,t,r){var n=q(e,t,r);if(n)return re(e,t,r);var u=J(t);if(!C(u))return te(e,u,r)}function re(e,t,r){var n=G(t,r,!1);if(!s(n))return n.OrdinaryGetOwnMetadata(e,t,r)}function ne(e,t,r,n){var u=G(r,n,!0);u.OrdinaryDefineOwnMetadata(e,t,r,n)}function ae(e,t){var r=ie(e,t),n=J(e);if(n===null)return r;var u=ae(n,t);if(u.length<=0)return r;if(r.length<=0)return u;for(var _=new L,p=[],d=0,a=r;d<a.length;d++){var i=a[d],o=_.has(i);o||(_.add(i),p.push(i))}for(var f=0,c=u;f<c.length;f++){var i=c[f],o=_.has(i);o||(_.add(i),p.push(i))}return p}function ie(e,t){var r=G(e,t,!1);return r?r.OrdinaryOwnMetadataKeys(e,t):[]}function oe(e){if(e===null)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return e===null?1:6;default:return 6}}function s(e){return e===void 0}function C(e){return e===null}function xe(e){return typeof e=="symbol"}function y(e){return typeof e=="object"?e!==null:typeof e=="function"}function Ae(e,t){switch(oe(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e}var r="string",n=de(e,B);if(n!==void 0){var u=n.call(e,r);if(y(u))throw new TypeError;return u}return De(e)}function De(e,t){var r,n;{var u=e.toString;if(F(u)){var n=u.call(e);if(!y(n))return n}var r=e.valueOf;if(F(r)){var n=r.call(e);if(!y(n))return n}}throw new TypeError}function fe(e){return!!e}function Ge(e){return""+e}function S(e){var t=Ae(e);return xe(t)?t:Ge(t)}function ue(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:Object.prototype.toString.call(e)==="[object Array]"}function F(e){return typeof e=="function"}function se(e){return typeof e=="function"}function Ue(e){switch(oe(e)){case 3:return!0;case 4:return!0;default:return!1}}function z(e,t){return e===t||e!==e&&t!==t}function de(e,t){var r=e[t];if(r!=null){if(!F(r))throw new TypeError;return r}}function ce(e){var t=de(e,R);if(!F(t))throw new TypeError;var r=t.call(e);if(!y(r))throw new TypeError;return r}function le(e){return e.value}function he(e){var t=e.next();return t.done?!1:t}function ve(e){var t=e.return;t&&t.call(e)}function J(e){var t=Object.getPrototypeOf(e);if(typeof e!="function"||e===A||t!==A)return t;var r=e.prototype,n=r&&Object.getPrototypeOf(r);if(n==null||n===Object.prototype)return t;var u=n.constructor;return typeof u!="function"||u===e?t:u}function He(){var e;!s(j)&&typeof v.Reflect<"u"&&!(j in v.Reflect)&&typeof v.Reflect.defineMetadata=="function"&&(e=Le(v.Reflect));var t,r,n,u=new V,_={registerProvider:p,getProvider:a,setProvider:o};return _;function p(f){if(!Object.isExtensible(_))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case e===f:break;case s(t):t=f;break;case t===f:break;case s(r):r=f;break;case r===f:break;default:n===void 0&&(n=new L),n.add(f);break}}function d(f,c){if(!s(t)){if(t.isProviderFor(f,c))return t;if(!s(r)){if(r.isProviderFor(f,c))return t;if(!s(n))for(var l=ce(n);;){var h=he(l);if(!h)return;var T=le(h);if(T.isProviderFor(f,c))return ve(l),T}}}if(!s(e)&&e.isProviderFor(f,c))return e}function a(f,c){var l=u.get(f),h;return s(l)||(h=l.get(c)),s(h)&&(h=d(f,c),s(h)||(s(l)&&(l=new D,u.set(f,l)),l.set(c,h))),h}function i(f){if(s(f))throw new TypeError;return t===f||r===f||!s(n)&&n.has(f)}function o(f,c,l){if(!i(l))throw new Error("Metadata provider not registered.");var h=a(f,c);if(h!==l){if(!s(h))return!1;var T=u.get(f);s(T)&&(T=new D,u.set(f,T)),T.set(c,l)}return!0}}function Fe(){var e;return!s(j)&&y(v.Reflect)&&Object.isExtensible(v.Reflect)&&(e=v.Reflect[j]),s(e)&&(e=He()),!s(j)&&y(v.Reflect)&&Object.isExtensible(v.Reflect)&&Object.defineProperty(v.Reflect,j,{enumerable:!1,configurable:!1,writable:!1,value:e}),e}function We(e){var t=new V,r={isProviderFor:function(i,o){var f=t.get(i);return s(f)?!1:f.has(o)},OrdinaryDefineOwnMetadata:p,OrdinaryHasOwnMetadata:u,OrdinaryGetOwnMetadata:_,OrdinaryOwnMetadataKeys:d,OrdinaryDeleteMetadata:a};return H.registerProvider(r),r;function n(i,o,f){var c=t.get(i),l=!1;if(s(c)){if(!f)return;c=new D,t.set(i,c),l=!0}var h=c.get(o);if(s(h)){if(!f)return;if(h=new D,c.set(o,h),!e.setProvider(i,o,r))throw c.delete(o),l&&t.delete(i),new Error("Wrong provider for target.")}return h}function u(i,o,f){var c=n(o,f,!1);return s(c)?!1:fe(c.has(i))}function _(i,o,f){var c=n(o,f,!1);if(!s(c))return c.get(i)}function p(i,o,f,c){var l=n(f,c,!0);l.set(i,o)}function d(i,o){var f=[],c=n(i,o,!1);if(s(c))return f;for(var l=c.keys(),h=ce(l),T=0;;){var ye=he(h);if(!ye)return f.length=T,f;var Je=le(ye);try{f[T]=Je}catch(Ne){try{ve(h)}finally{throw Ne}}T++}}function a(i,o,f){var c=n(o,f,!1);if(s(c)||!c.delete(i))return!1;if(c.size===0){var l=t.get(o);s(l)||(l.delete(f),l.size===0&&t.delete(l))}return!0}}function Le(e){var t=e.defineMetadata,r=e.hasOwnMetadata,n=e.getOwnMetadata,u=e.getOwnMetadataKeys,_=e.deleteMetadata,p=new V,d={isProviderFor:function(a,i){var o=p.get(a);return!s(o)&&o.has(i)?!0:u(a,i).length?(s(o)&&(o=new L,p.set(a,o)),o.add(i),!0):!1},OrdinaryDefineOwnMetadata:t,OrdinaryHasOwnMetadata:r,OrdinaryGetOwnMetadata:n,OrdinaryOwnMetadataKeys:u,OrdinaryDeleteMetadata:_};return d}function G(e,t,r){var n=H.getProvider(e,t);if(!s(n))return n;if(r){if(H.setProvider(e,t,K))return K;throw new Error("Illegal state.")}}function Ve(){var e={},t=[],r=function(){function d(a,i,o){this._index=0,this._keys=a,this._values=i,this._selector=o}return d.prototype["@@iterator"]=function(){return this},d.prototype[R]=function(){return this},d.prototype.next=function(){var a=this._index;if(a>=0&&a<this._keys.length){var i=this._selector(this._keys[a],this._values[a]);return a+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:i,done:!1}}return{value:void 0,done:!0}},d.prototype.throw=function(a){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),a},d.prototype.return=function(a){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:a,done:!0}},d}(),n=function(){function d(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(d.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),d.prototype.has=function(a){return this._find(a,!1)>=0},d.prototype.get=function(a){var i=this._find(a,!1);return i>=0?this._values[i]:void 0},d.prototype.set=function(a,i){var o=this._find(a,!0);return this._values[o]=i,this},d.prototype.delete=function(a){var i=this._find(a,!1);if(i>=0){for(var o=this._keys.length,f=i+1;f<o;f++)this._keys[f-1]=this._keys[f],this._values[f-1]=this._values[f];return this._keys.length--,this._values.length--,z(a,this._cacheKey)&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},d.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},d.prototype.keys=function(){return new r(this._keys,this._values,u)},d.prototype.values=function(){return new r(this._keys,this._values,_)},d.prototype.entries=function(){return new r(this._keys,this._values,p)},d.prototype["@@iterator"]=function(){return this.entries()},d.prototype[R]=function(){return this.entries()},d.prototype._find=function(a,i){if(!z(this._cacheKey,a)){this._cacheIndex=-1;for(var o=0;o<this._keys.length;o++)if(z(this._keys[o],a)){this._cacheIndex=o;break}}return this._cacheIndex<0&&i&&(this._cacheIndex=this._keys.length,this._keys.push(a),this._values.push(void 0)),this._cacheIndex},d}();return n;function u(d,a){return d}function _(d,a){return a}function p(d,a){return[d,a]}}function qe(){var e=function(){function t(){this._map=new D}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(r){return this._map.has(r)},t.prototype.add=function(r){return this._map.set(r,r),this},t.prototype.delete=function(r){return this._map.delete(r)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.keys()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[R]=function(){return this.keys()},t}();return e}function ze(){var e=16,t=E.create(),r=n();return function(){function a(){this._key=n()}return a.prototype.has=function(i){var o=u(i,!1);return o!==void 0?E.has(o,this._key):!1},a.prototype.get=function(i){var o=u(i,!1);return o!==void 0?E.get(o,this._key):void 0},a.prototype.set=function(i,o){var f=u(i,!0);return f[this._key]=o,this},a.prototype.delete=function(i){var o=u(i,!1);return o!==void 0?delete o[this._key]:!1},a.prototype.clear=function(){this._key=n()},a}();function n(){var a;do a="@@WeakMap@@"+d();while(E.has(t,a));return t[a]=!0,a}function u(a,i){if(!m.call(a,r)){if(!i)return;Object.defineProperty(a,r,{value:E.create()})}return a[r]}function _(a,i){for(var o=0;o<i;++o)a[o]=Math.random()*255|0;return a}function p(a){if(typeof Uint8Array=="function"){var i=new Uint8Array(a);return typeof crypto<"u"?crypto.getRandomValues(i):typeof msCrypto<"u"?msCrypto.getRandomValues(i):_(i,a),i}return _(new Array(a),a)}function d(){var a=p(e);a[6]=a[6]&79|64,a[8]=a[8]&191|128;for(var i="",o=0;o<e;++o){var f=a[o];(o===4||o===6||o===8)&&(i+="-"),f<16&&(i+="0"),i+=f.toString(16).toLowerCase()}return i}}function N(e){return e.__=void 0,delete e.__,e}})}(w||(w={})),Z}pe();let we=0;function _e(){return we++}var Q;(function(w){w[w.MultipleBindingsAvailable=2]="MultipleBindingsAvailable",w[w.NoBindingsAvailable=0]="NoBindingsAvailable",w[w.OnlyOneBindingAvailable=1]="OnlyOneBindingAvailable"})(Q||(Q={}));var X;(function(w){w.DynamicValue="toDynamicValue",w.Factory="toFactory",w.Provider="toProvider"})(X||(X={}));class Me{constructor(O){Y(this,"id");Y(this,"registry");this.id=_e(),this.registry=O}}const W={BaseOpt:Symbol.for("BaseOpt"),ThreeJsBase:Symbol.for("ThreeJsBase"),LoadUpdateHandler:Symbol.for("LoadUpdateHandler"),UpdateHandler:Symbol.for("UpdateHandler"),Update:Symbol.for("Update"),LoaderUpdate:Symbol.for("LoaderUpdate"),LoaderReset:Symbol.for("LoaderReset"),GUI:Symbol.for("GUI")};function ge(w,O="./gameConfig.json"){return new Me(async g=>{const v=await be(O);console.log(v);const m=v.baseOpt;g(W.BaseOpt).toConstantValue(m);const k=new M.WebGLRenderer({canvas:w,antialias:m.antialias,powerPreference:"high-performance"});k.setSize(window.innerWidth,window.innerHeight),k.outputColorSpace=M.SRGBColorSpace,k.setPixelRatio(Math.min(window.devicePixelRatio,2));const B={renderer:k,scene:new M.Scene,camera:new M.PerspectiveCamera(m.camera.fov,window.innerWidth/window.innerHeight,m.camera.near,m.camera.far)};g(W.ThreeJsBase).toConstantValue(B)})}async function be(w){try{const O=await fetch(w);if(!O.ok)throw new Error(`Response status: ${O.status}`);return await O.json()}catch(O){console.error(O.message)}}b.BASETYPES=W,b.buildBaseDIModule=ge,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
