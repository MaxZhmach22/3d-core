var Fe = Object.defineProperty;
var We = (h, y, w) => y in h ? Fe(h, y, { enumerable: !0, configurable: !0, writable: !0, value: w }) : h[y] = w;
var q = (h, y, w) => We(h, typeof y != "symbol" ? y + "" : y, w);
import { WebGLRenderer as Le, SRGBColorSpace as Ve, Scene as qe, PerspectiveCamera as ze } from "three";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, se = {};
/*! *****************************************************************************
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
***************************************************************************** */
var ce;
function Je() {
  if (ce) return se;
  ce = 1;
  var h;
  return function(y) {
    (function(w) {
      var p = typeof globalThis == "object" ? globalThis : typeof ue == "object" ? ue : typeof self == "object" ? self : typeof this == "object" ? this : A(), b = m(y);
      typeof p.Reflect < "u" && (b = m(p.Reflect, b)), w(b, p), typeof p.Reflect > "u" && (p.Reflect = y);
      function m(P, C) {
        return function(T, j) {
          Object.defineProperty(P, T, { configurable: !0, writable: !0, value: j }), C && C(T, j);
        };
      }
      function I() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function S() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function A() {
        return I() || S();
      }
    })(function(w, p) {
      var b = Object.prototype.hasOwnProperty, m = typeof Symbol == "function", I = m && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", S = m && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", A = typeof Object.create == "function", P = { __proto__: [] } instanceof Array, C = !A && !P, T = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: A ? function() {
          return V(/* @__PURE__ */ Object.create(null));
        } : P ? function() {
          return V({ __proto__: null });
        } : function() {
          return V({});
        },
        has: C ? function(e, t) {
          return b.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: C ? function(e, t) {
          return b.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, j = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ae(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ge(), H = typeof WeakMap == "function" ? WeakMap : De(), E = m ? Symbol.for("@reflect-metadata:registry") : void 0, G = je(), z = xe(G);
      function ve(e, t, r, n) {
        if (s(r)) {
          if (!ee(e))
            throw new TypeError();
          if (!te(t))
            throw new TypeError();
          return ke(e, t);
        } else {
          if (!ee(e))
            throw new TypeError();
          if (!_(t))
            throw new TypeError();
          if (!_(n) && !s(n) && !R(n))
            throw new TypeError();
          return R(n) && (n = void 0), r = k(r), Te(e, t, r, n);
        }
      }
      w("decorate", ve);
      function ye(e, t) {
        function r(n, u) {
          if (!_(n))
            throw new TypeError();
          if (!s(u) && !Ie(u))
            throw new TypeError();
          Y(e, t, n, u);
        }
        return r;
      }
      w("metadata", ye);
      function we(e, t, r, n) {
        if (!_(r))
          throw new TypeError();
        return s(n) || (n = k(n)), Y(e, t, r, n);
      }
      w("defineMetadata", we);
      function pe(e, t, r) {
        if (!_(t))
          throw new TypeError();
        return s(r) || (r = k(r)), J(e, t, r);
      }
      w("hasMetadata", pe);
      function _e(e, t, r) {
        if (!_(t))
          throw new TypeError();
        return s(r) || (r = k(r)), F(e, t, r);
      }
      w("hasOwnMetadata", _e);
      function Me(e, t, r) {
        if (!_(t))
          throw new TypeError();
        return s(r) || (r = k(r)), N(e, t, r);
      }
      w("getMetadata", Me);
      function ge(e, t, r) {
        if (!_(t))
          throw new TypeError();
        return s(r) || (r = k(r)), Z(e, t, r);
      }
      w("getOwnMetadata", ge);
      function be(e, t) {
        if (!_(e))
          throw new TypeError();
        return s(t) || (t = k(t)), $(e, t);
      }
      w("getMetadataKeys", be);
      function me(e, t) {
        if (!_(e))
          throw new TypeError();
        return s(t) || (t = k(t)), Q(e, t);
      }
      w("getOwnMetadataKeys", me);
      function Oe(e, t, r) {
        if (!_(t))
          throw new TypeError();
        if (s(r) || (r = k(r)), !_(t))
          throw new TypeError();
        s(r) || (r = k(r));
        var n = B(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
      }
      w("deleteMetadata", Oe);
      function ke(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var n = e[r], u = n(t);
          if (!s(u) && !R(u)) {
            if (!te(u))
              throw new TypeError();
            t = u;
          }
        }
        return t;
      }
      function Te(e, t, r, n) {
        for (var u = e.length - 1; u >= 0; --u) {
          var g = e[u], M = g(t, r, n);
          if (!s(M) && !R(M)) {
            if (!_(M))
              throw new TypeError();
            n = M;
          }
        }
        return n;
      }
      function J(e, t, r) {
        var n = F(e, t, r);
        if (n)
          return !0;
        var u = L(t);
        return R(u) ? !1 : J(e, u, r);
      }
      function F(e, t, r) {
        var n = B(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : K(n.OrdinaryHasOwnMetadata(e, t, r));
      }
      function N(e, t, r) {
        var n = F(e, t, r);
        if (n)
          return Z(e, t, r);
        var u = L(t);
        if (!R(u))
          return N(e, u, r);
      }
      function Z(e, t, r) {
        var n = B(
          t,
          r,
          /*Create*/
          !1
        );
        if (!s(n))
          return n.OrdinaryGetOwnMetadata(e, t, r);
      }
      function Y(e, t, r, n) {
        var u = B(
          r,
          n,
          /*Create*/
          !0
        );
        u.OrdinaryDefineOwnMetadata(e, t, r, n);
      }
      function $(e, t) {
        var r = Q(e, t), n = L(e);
        if (n === null)
          return r;
        var u = $(n, t);
        if (u.length <= 0)
          return r;
        if (r.length <= 0)
          return u;
        for (var g = new U(), M = [], c = 0, a = r; c < a.length; c++) {
          var i = a[c], o = g.has(i);
          o || (g.add(i), M.push(i));
        }
        for (var f = 0, d = u; f < d.length; f++) {
          var i = d[f], o = g.has(i);
          o || (g.add(i), M.push(i));
        }
        return M;
      }
      function Q(e, t) {
        var r = B(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function X(e) {
        if (e === null)
          return 1;
        switch (typeof e) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return e === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function s(e) {
        return e === void 0;
      }
      function R(e) {
        return e === null;
      }
      function Se(e) {
        return typeof e == "symbol";
      }
      function _(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function Pe(e, t) {
        switch (X(e)) {
          case 0:
            return e;
          case 1:
            return e;
          case 2:
            return e;
          case 3:
            return e;
          case 4:
            return e;
          case 5:
            return e;
        }
        var r = "string", n = re(e, I);
        if (n !== void 0) {
          var u = n.call(e, r);
          if (_(u))
            throw new TypeError();
          return u;
        }
        return Ee(e);
      }
      function Ee(e, t) {
        var r, n;
        {
          var u = e.toString;
          if (D(u)) {
            var n = u.call(e);
            if (!_(n))
              return n;
          }
          var r = e.valueOf;
          if (D(r)) {
            var n = r.call(e);
            if (!_(n))
              return n;
          }
        }
        throw new TypeError();
      }
      function K(e) {
        return !!e;
      }
      function Re(e) {
        return "" + e;
      }
      function k(e) {
        var t = Pe(e);
        return Se(t) ? t : Re(t);
      }
      function ee(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function D(e) {
        return typeof e == "function";
      }
      function te(e) {
        return typeof e == "function";
      }
      function Ie(e) {
        switch (X(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function W(e, t) {
        return e === t || e !== e && t !== t;
      }
      function re(e, t) {
        var r = e[t];
        if (r != null) {
          if (!D(r))
            throw new TypeError();
          return r;
        }
      }
      function ne(e) {
        var t = re(e, S);
        if (!D(t))
          throw new TypeError();
        var r = t.call(e);
        if (!_(r))
          throw new TypeError();
        return r;
      }
      function ae(e) {
        return e.value;
      }
      function ie(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function oe(e) {
        var t = e.return;
        t && t.call(e);
      }
      function L(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === j || t !== j)
          return t;
        var r = e.prototype, n = r && Object.getPrototypeOf(r);
        if (n == null || n === Object.prototype)
          return t;
        var u = n.constructor;
        return typeof u != "function" || u === e ? t : u;
      }
      function Ce() {
        var e;
        !s(E) && typeof p.Reflect < "u" && !(E in p.Reflect) && typeof p.Reflect.defineMetadata == "function" && (e = Be(p.Reflect));
        var t, r, n, u = new H(), g = {
          registerProvider: M,
          getProvider: a,
          setProvider: o
        };
        return g;
        function M(f) {
          if (!Object.isExtensible(g))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === f:
              break;
            case s(t):
              t = f;
              break;
            case t === f:
              break;
            case s(r):
              r = f;
              break;
            case r === f:
              break;
            default:
              n === void 0 && (n = new U()), n.add(f);
              break;
          }
        }
        function c(f, d) {
          if (!s(t)) {
            if (t.isProviderFor(f, d))
              return t;
            if (!s(r)) {
              if (r.isProviderFor(f, d))
                return t;
              if (!s(n))
                for (var l = ne(n); ; ) {
                  var v = ie(l);
                  if (!v)
                    return;
                  var O = ae(v);
                  if (O.isProviderFor(f, d))
                    return oe(l), O;
                }
            }
          }
          if (!s(e) && e.isProviderFor(f, d))
            return e;
        }
        function a(f, d) {
          var l = u.get(f), v;
          return s(l) || (v = l.get(d)), s(v) && (v = c(f, d), s(v) || (s(l) && (l = new x(), u.set(f, l)), l.set(d, v))), v;
        }
        function i(f) {
          if (s(f))
            throw new TypeError();
          return t === f || r === f || !s(n) && n.has(f);
        }
        function o(f, d, l) {
          if (!i(l))
            throw new Error("Metadata provider not registered.");
          var v = a(f, d);
          if (v !== l) {
            if (!s(v))
              return !1;
            var O = u.get(f);
            s(O) && (O = new x(), u.set(f, O)), O.set(d, l);
          }
          return !0;
        }
      }
      function je() {
        var e;
        return !s(E) && _(p.Reflect) && Object.isExtensible(p.Reflect) && (e = p.Reflect[E]), s(e) && (e = Ce()), !s(E) && _(p.Reflect) && Object.isExtensible(p.Reflect) && Object.defineProperty(p.Reflect, E, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function xe(e) {
        var t = new H(), r = {
          isProviderFor: function(i, o) {
            var f = t.get(i);
            return s(f) ? !1 : f.has(o);
          },
          OrdinaryDefineOwnMetadata: M,
          OrdinaryHasOwnMetadata: u,
          OrdinaryGetOwnMetadata: g,
          OrdinaryOwnMetadataKeys: c,
          OrdinaryDeleteMetadata: a
        };
        return G.registerProvider(r), r;
        function n(i, o, f) {
          var d = t.get(i), l = !1;
          if (s(d)) {
            if (!f)
              return;
            d = new x(), t.set(i, d), l = !0;
          }
          var v = d.get(o);
          if (s(v)) {
            if (!f)
              return;
            if (v = new x(), d.set(o, v), !e.setProvider(i, o, r))
              throw d.delete(o), l && t.delete(i), new Error("Wrong provider for target.");
          }
          return v;
        }
        function u(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          return s(d) ? !1 : K(d.has(i));
        }
        function g(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          if (!s(d))
            return d.get(i);
        }
        function M(i, o, f, d) {
          var l = n(
            f,
            d,
            /*Create*/
            !0
          );
          l.set(i, o);
        }
        function c(i, o) {
          var f = [], d = n(
            i,
            o,
            /*Create*/
            !1
          );
          if (s(d))
            return f;
          for (var l = d.keys(), v = ne(l), O = 0; ; ) {
            var fe = ie(v);
            if (!fe)
              return f.length = O, f;
            var Ue = ae(fe);
            try {
              f[O] = Ue;
            } catch (He) {
              try {
                oe(v);
              } finally {
                throw He;
              }
            }
            O++;
          }
        }
        function a(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          if (s(d) || !d.delete(i))
            return !1;
          if (d.size === 0) {
            var l = t.get(o);
            s(l) || (l.delete(f), l.size === 0 && t.delete(l));
          }
          return !0;
        }
      }
      function Be(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, u = e.getOwnMetadataKeys, g = e.deleteMetadata, M = new H(), c = {
          isProviderFor: function(a, i) {
            var o = M.get(a);
            return !s(o) && o.has(i) ? !0 : u(a, i).length ? (s(o) && (o = new U(), M.set(a, o)), o.add(i), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: n,
          OrdinaryOwnMetadataKeys: u,
          OrdinaryDeleteMetadata: g
        };
        return c;
      }
      function B(e, t, r) {
        var n = G.getProvider(e, t);
        if (!s(n))
          return n;
        if (r) {
          if (G.setProvider(e, t, z))
            return z;
          throw new Error("Illegal state.");
        }
      }
      function Ae() {
        var e = {}, t = [], r = (
          /** @class */
          function() {
            function c(a, i, o) {
              this._index = 0, this._keys = a, this._values = i, this._selector = o;
            }
            return c.prototype["@@iterator"] = function() {
              return this;
            }, c.prototype[S] = function() {
              return this;
            }, c.prototype.next = function() {
              var a = this._index;
              if (a >= 0 && a < this._keys.length) {
                var i = this._selector(this._keys[a], this._values[a]);
                return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, c.prototype.throw = function(a) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
            }, c.prototype.return = function(a) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
            }, c;
          }()
        ), n = (
          /** @class */
          function() {
            function c() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(c.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), c.prototype.has = function(a) {
              return this._find(
                a,
                /*insert*/
                !1
              ) >= 0;
            }, c.prototype.get = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              return i >= 0 ? this._values[i] : void 0;
            }, c.prototype.set = function(a, i) {
              var o = this._find(
                a,
                /*insert*/
                !0
              );
              return this._values[o] = i, this;
            }, c.prototype.delete = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              if (i >= 0) {
                for (var o = this._keys.length, f = i + 1; f < o; f++)
                  this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
                return this._keys.length--, this._values.length--, W(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, c.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, c.prototype.keys = function() {
              return new r(this._keys, this._values, u);
            }, c.prototype.values = function() {
              return new r(this._keys, this._values, g);
            }, c.prototype.entries = function() {
              return new r(this._keys, this._values, M);
            }, c.prototype["@@iterator"] = function() {
              return this.entries();
            }, c.prototype[S] = function() {
              return this.entries();
            }, c.prototype._find = function(a, i) {
              if (!W(this._cacheKey, a)) {
                this._cacheIndex = -1;
                for (var o = 0; o < this._keys.length; o++)
                  if (W(this._keys[o], a)) {
                    this._cacheIndex = o;
                    break;
                  }
              }
              return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
            }, c;
          }()
        );
        return n;
        function u(c, a) {
          return c;
        }
        function g(c, a) {
          return a;
        }
        function M(c, a) {
          return [c, a];
        }
      }
      function Ge() {
        var e = (
          /** @class */
          function() {
            function t() {
              this._map = new x();
            }
            return Object.defineProperty(t.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.has = function(r) {
              return this._map.has(r);
            }, t.prototype.add = function(r) {
              return this._map.set(r, r), this;
            }, t.prototype.delete = function(r) {
              return this._map.delete(r);
            }, t.prototype.clear = function() {
              this._map.clear();
            }, t.prototype.keys = function() {
              return this._map.keys();
            }, t.prototype.values = function() {
              return this._map.keys();
            }, t.prototype.entries = function() {
              return this._map.entries();
            }, t.prototype["@@iterator"] = function() {
              return this.keys();
            }, t.prototype[S] = function() {
              return this.keys();
            }, t;
          }()
        );
        return e;
      }
      function De() {
        var e = 16, t = T.create(), r = n();
        return (
          /** @class */
          function() {
            function a() {
              this._key = n();
            }
            return a.prototype.has = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? T.has(o, this._key) : !1;
            }, a.prototype.get = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? T.get(o, this._key) : void 0;
            }, a.prototype.set = function(i, o) {
              var f = u(
                i,
                /*create*/
                !0
              );
              return f[this._key] = o, this;
            }, a.prototype.delete = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? delete o[this._key] : !1;
            }, a.prototype.clear = function() {
              this._key = n();
            }, a;
          }()
        );
        function n() {
          var a;
          do
            a = "@@WeakMap@@" + c();
          while (T.has(t, a));
          return t[a] = !0, a;
        }
        function u(a, i) {
          if (!b.call(a, r)) {
            if (!i)
              return;
            Object.defineProperty(a, r, { value: T.create() });
          }
          return a[r];
        }
        function g(a, i) {
          for (var o = 0; o < i; ++o)
            a[o] = Math.random() * 255 | 0;
          return a;
        }
        function M(a) {
          if (typeof Uint8Array == "function") {
            var i = new Uint8Array(a);
            return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : g(i, a), i;
          }
          return g(new Array(a), a);
        }
        function c() {
          var a = M(e);
          a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
          for (var i = "", o = 0; o < e; ++o) {
            var f = a[o];
            (o === 4 || o === 6 || o === 8) && (i += "-"), f < 16 && (i += "0"), i += f.toString(16).toLowerCase();
          }
          return i;
        }
      }
      function V(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  }(h || (h = {})), se;
}
Je();
let Ne = 0;
function Ze() {
  return Ne++;
}
var de;
(function(h) {
  h[h.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", h[h.NoBindingsAvailable = 0] = "NoBindingsAvailable", h[h.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(de || (de = {}));
var le;
(function(h) {
  h.DynamicValue = "toDynamicValue", h.Factory = "toFactory", h.Provider = "toProvider";
})(le || (le = {}));
class Ye {
  constructor(y) {
    q(this, "id");
    q(this, "registry");
    this.id = Ze(), this.registry = y;
  }
}
const he = {
  //Options
  BaseOpt: Symbol.for("BaseOpt"),
  //Core
  ThreeJsBase: Symbol.for("ThreeJsBase"),
  LoadUpdateHandler: Symbol.for("LoadUpdateHandler"),
  UpdateHandler: Symbol.for("UpdateHandler"),
  Update: Symbol.for("Update"),
  LoaderUpdate: Symbol.for("LoaderUpdate"),
  LoaderReset: Symbol.for("LoaderReset"),
  GUI: Symbol.for("GUI")
};
function Ke(h, y = "./gameConfig.json") {
  return new Ye(async (w) => {
    const p = await $e(y);
    console.log(p);
    const b = p.baseOpt;
    w(he.BaseOpt).toConstantValue(b);
    const m = new Le({
      canvas: h,
      antialias: b.antialias,
      powerPreference: "high-performance"
    });
    m.setSize(window.innerWidth, window.innerHeight), m.outputColorSpace = Ve, m.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const I = {
      renderer: m,
      scene: new qe(),
      camera: new ze(
        b.camera.fov,
        window.innerWidth / window.innerHeight,
        b.camera.near,
        b.camera.far
      )
    };
    w(he.ThreeJsBase).toConstantValue(I);
  });
}
async function $e(h) {
  try {
    const y = await fetch(h);
    if (!y.ok)
      throw new Error(`Response status: ${y.status}`);
    return await y.json();
  } catch (y) {
    console.error(y.message);
  }
}
export {
  he as BASETYPES,
  Ke as buildBaseDIModule
};
