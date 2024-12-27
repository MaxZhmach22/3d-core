var Ve = Object.defineProperty;
var We = (s, c, l) => c in s ? Ve(s, c, { enumerable: !0, configurable: !0, writable: !0, value: l }) : s[c] = l;
var R = (s, c, l) => We(s, typeof c != "symbol" ? c + "" : c, l);
import { WebGLRenderer as ze, Scene as Je, PerspectiveCamera as qe, Clock as Ne, Euler as Ye, Vector2 as Ze } from "three";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, de = {};
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
var le;
function $e() {
  if (le) return de;
  le = 1;
  var s;
  return function(c) {
    (function(l) {
      var y = typeof globalThis == "object" ? globalThis : typeof ce == "object" ? ce : typeof self == "object" ? self : typeof this == "object" ? this : S(), w = M(c);
      typeof y.Reflect < "u" && (w = M(y.Reflect, w)), l(w, y), typeof y.Reflect > "u" && (y.Reflect = c);
      function M(I, x) {
        return function(P, B) {
          Object.defineProperty(I, P, { configurable: !0, writable: !0, value: B }), x && x(P, B);
        };
      }
      function O() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function k() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function S() {
        return O() || k();
      }
    })(function(l, y) {
      var w = Object.prototype.hasOwnProperty, M = typeof Symbol == "function", O = M && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", k = M && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", S = typeof Object.create == "function", I = { __proto__: [] } instanceof Array, x = !S && !I, P = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: S ? function() {
          return J(/* @__PURE__ */ Object.create(null));
        } : I ? function() {
          return J({ __proto__: null });
        } : function() {
          return J({});
        },
        has: x ? function(e, t) {
          return w.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: x ? function(e, t) {
          return w.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, B = Object.getPrototypeOf(Function), A = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ue(), H = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ge(), L = typeof WeakMap == "function" ? WeakMap : Fe(), j = M ? Symbol.for("@reflect-metadata:registry") : void 0, G = xe(), N = Be(G);
      function pe(e, t, r, n) {
        if (d(r)) {
          if (!re(e))
            throw new TypeError();
          if (!ne(t))
            throw new TypeError();
          return Ee(e, t);
        } else {
          if (!re(e))
            throw new TypeError();
          if (!g(t))
            throw new TypeError();
          if (!g(n) && !d(n) && !D(n))
            throw new TypeError();
          return D(n) && (n = void 0), r = E(r), Se(e, t, r, n);
        }
      }
      l("decorate", pe);
      function we(e, t) {
        function r(n, f) {
          if (!g(n))
            throw new TypeError();
          if (!d(f) && !je(f))
            throw new TypeError();
          X(e, t, n, f);
        }
        return r;
      }
      l("metadata", we);
      function me(e, t, r, n) {
        if (!g(r))
          throw new TypeError();
        return d(n) || (n = E(n)), X(e, t, r, n);
      }
      l("defineMetadata", me);
      function ge(e, t, r) {
        if (!g(t))
          throw new TypeError();
        return d(r) || (r = E(r)), Y(e, t, r);
      }
      l("hasMetadata", ge);
      function be(e, t, r) {
        if (!g(t))
          throw new TypeError();
        return d(r) || (r = E(r)), V(e, t, r);
      }
      l("hasOwnMetadata", be);
      function _e(e, t, r) {
        if (!g(t))
          throw new TypeError();
        return d(r) || (r = E(r)), Z(e, t, r);
      }
      l("getMetadata", _e);
      function Me(e, t, r) {
        if (!g(t))
          throw new TypeError();
        return d(r) || (r = E(r)), $(e, t, r);
      }
      l("getOwnMetadata", Me);
      function Oe(e, t) {
        if (!g(e))
          throw new TypeError();
        return d(t) || (t = E(t)), Q(e, t);
      }
      l("getMetadataKeys", Oe);
      function ke(e, t) {
        if (!g(e))
          throw new TypeError();
        return d(t) || (t = E(t)), K(e, t);
      }
      l("getOwnMetadataKeys", ke);
      function Te(e, t, r) {
        if (!g(t))
          throw new TypeError();
        if (d(r) || (r = E(r)), !g(t))
          throw new TypeError();
        d(r) || (r = E(r));
        var n = U(
          t,
          r,
          /*Create*/
          !1
        );
        return d(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
      }
      l("deleteMetadata", Te);
      function Ee(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var n = e[r], f = n(t);
          if (!d(f) && !D(f)) {
            if (!ne(f))
              throw new TypeError();
            t = f;
          }
        }
        return t;
      }
      function Se(e, t, r, n) {
        for (var f = e.length - 1; f >= 0; --f) {
          var _ = e[f], b = _(t, r, n);
          if (!d(b) && !D(b)) {
            if (!g(b))
              throw new TypeError();
            n = b;
          }
        }
        return n;
      }
      function Y(e, t, r) {
        var n = V(e, t, r);
        if (n)
          return !0;
        var f = z(t);
        return D(f) ? !1 : Y(e, f, r);
      }
      function V(e, t, r) {
        var n = U(
          t,
          r,
          /*Create*/
          !1
        );
        return d(n) ? !1 : te(n.OrdinaryHasOwnMetadata(e, t, r));
      }
      function Z(e, t, r) {
        var n = V(e, t, r);
        if (n)
          return $(e, t, r);
        var f = z(t);
        if (!D(f))
          return Z(e, f, r);
      }
      function $(e, t, r) {
        var n = U(
          t,
          r,
          /*Create*/
          !1
        );
        if (!d(n))
          return n.OrdinaryGetOwnMetadata(e, t, r);
      }
      function X(e, t, r, n) {
        var f = U(
          r,
          n,
          /*Create*/
          !0
        );
        f.OrdinaryDefineOwnMetadata(e, t, r, n);
      }
      function Q(e, t) {
        var r = K(e, t), n = z(e);
        if (n === null)
          return r;
        var f = Q(n, t);
        if (f.length <= 0)
          return r;
        if (r.length <= 0)
          return f;
        for (var _ = new H(), b = [], h = 0, a = r; h < a.length; h++) {
          var i = a[h], o = _.has(i);
          o || (_.add(i), b.push(i));
        }
        for (var u = 0, v = f; u < v.length; u++) {
          var i = v[u], o = _.has(i);
          o || (_.add(i), b.push(i));
        }
        return b;
      }
      function K(e, t) {
        var r = U(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function ee(e) {
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
      function d(e) {
        return e === void 0;
      }
      function D(e) {
        return e === null;
      }
      function Pe(e) {
        return typeof e == "symbol";
      }
      function g(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function Re(e, t) {
        switch (ee(e)) {
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
        var r = "string", n = ae(e, O);
        if (n !== void 0) {
          var f = n.call(e, r);
          if (g(f))
            throw new TypeError();
          return f;
        }
        return Ce(e);
      }
      function Ce(e, t) {
        var r, n;
        {
          var f = e.toString;
          if (F(f)) {
            var n = f.call(e);
            if (!g(n))
              return n;
          }
          var r = e.valueOf;
          if (F(r)) {
            var n = r.call(e);
            if (!g(n))
              return n;
          }
        }
        throw new TypeError();
      }
      function te(e) {
        return !!e;
      }
      function Ie(e) {
        return "" + e;
      }
      function E(e) {
        var t = Re(e);
        return Pe(t) ? t : Ie(t);
      }
      function re(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function F(e) {
        return typeof e == "function";
      }
      function ne(e) {
        return typeof e == "function";
      }
      function je(e) {
        switch (ee(e)) {
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
      function ae(e, t) {
        var r = e[t];
        if (r != null) {
          if (!F(r))
            throw new TypeError();
          return r;
        }
      }
      function ie(e) {
        var t = ae(e, k);
        if (!F(t))
          throw new TypeError();
        var r = t.call(e);
        if (!g(r))
          throw new TypeError();
        return r;
      }
      function oe(e) {
        return e.value;
      }
      function ue(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function fe(e) {
        var t = e.return;
        t && t.call(e);
      }
      function z(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === B || t !== B)
          return t;
        var r = e.prototype, n = r && Object.getPrototypeOf(r);
        if (n == null || n === Object.prototype)
          return t;
        var f = n.constructor;
        return typeof f != "function" || f === e ? t : f;
      }
      function De() {
        var e;
        !d(j) && typeof y.Reflect < "u" && !(j in y.Reflect) && typeof y.Reflect.defineMetadata == "function" && (e = Ae(y.Reflect));
        var t, r, n, f = new L(), _ = {
          registerProvider: b,
          getProvider: a,
          setProvider: o
        };
        return _;
        function b(u) {
          if (!Object.isExtensible(_))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === u:
              break;
            case d(t):
              t = u;
              break;
            case t === u:
              break;
            case d(r):
              r = u;
              break;
            case r === u:
              break;
            default:
              n === void 0 && (n = new H()), n.add(u);
              break;
          }
        }
        function h(u, v) {
          if (!d(t)) {
            if (t.isProviderFor(u, v))
              return t;
            if (!d(r)) {
              if (r.isProviderFor(u, v))
                return t;
              if (!d(n))
                for (var p = ie(n); ; ) {
                  var m = ue(p);
                  if (!m)
                    return;
                  var T = oe(m);
                  if (T.isProviderFor(u, v))
                    return fe(p), T;
                }
            }
          }
          if (!d(e) && e.isProviderFor(u, v))
            return e;
        }
        function a(u, v) {
          var p = f.get(u), m;
          return d(p) || (m = p.get(v)), d(m) && (m = h(u, v), d(m) || (d(p) && (p = new A(), f.set(u, p)), p.set(v, m))), m;
        }
        function i(u) {
          if (d(u))
            throw new TypeError();
          return t === u || r === u || !d(n) && n.has(u);
        }
        function o(u, v, p) {
          if (!i(p))
            throw new Error("Metadata provider not registered.");
          var m = a(u, v);
          if (m !== p) {
            if (!d(m))
              return !1;
            var T = f.get(u);
            d(T) && (T = new A(), f.set(u, T)), T.set(v, p);
          }
          return !0;
        }
      }
      function xe() {
        var e;
        return !d(j) && g(y.Reflect) && Object.isExtensible(y.Reflect) && (e = y.Reflect[j]), d(e) && (e = De()), !d(j) && g(y.Reflect) && Object.isExtensible(y.Reflect) && Object.defineProperty(y.Reflect, j, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function Be(e) {
        var t = new L(), r = {
          isProviderFor: function(i, o) {
            var u = t.get(i);
            return d(u) ? !1 : u.has(o);
          },
          OrdinaryDefineOwnMetadata: b,
          OrdinaryHasOwnMetadata: f,
          OrdinaryGetOwnMetadata: _,
          OrdinaryOwnMetadataKeys: h,
          OrdinaryDeleteMetadata: a
        };
        return G.registerProvider(r), r;
        function n(i, o, u) {
          var v = t.get(i), p = !1;
          if (d(v)) {
            if (!u)
              return;
            v = new A(), t.set(i, v), p = !0;
          }
          var m = v.get(o);
          if (d(m)) {
            if (!u)
              return;
            if (m = new A(), v.set(o, m), !e.setProvider(i, o, r))
              throw v.delete(o), p && t.delete(i), new Error("Wrong provider for target.");
          }
          return m;
        }
        function f(i, o, u) {
          var v = n(
            o,
            u,
            /*Create*/
            !1
          );
          return d(v) ? !1 : te(v.has(i));
        }
        function _(i, o, u) {
          var v = n(
            o,
            u,
            /*Create*/
            !1
          );
          if (!d(v))
            return v.get(i);
        }
        function b(i, o, u, v) {
          var p = n(
            u,
            v,
            /*Create*/
            !0
          );
          p.set(i, o);
        }
        function h(i, o) {
          var u = [], v = n(
            i,
            o,
            /*Create*/
            !1
          );
          if (d(v))
            return u;
          for (var p = v.keys(), m = ie(p), T = 0; ; ) {
            var se = ue(m);
            if (!se)
              return u.length = T, u;
            var He = oe(se);
            try {
              u[T] = He;
            } catch (Le) {
              try {
                fe(m);
              } finally {
                throw Le;
              }
            }
            T++;
          }
        }
        function a(i, o, u) {
          var v = n(
            o,
            u,
            /*Create*/
            !1
          );
          if (d(v) || !v.delete(i))
            return !1;
          if (v.size === 0) {
            var p = t.get(o);
            d(p) || (p.delete(u), p.size === 0 && t.delete(p));
          }
          return !0;
        }
      }
      function Ae(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, f = e.getOwnMetadataKeys, _ = e.deleteMetadata, b = new L(), h = {
          isProviderFor: function(a, i) {
            var o = b.get(a);
            return !d(o) && o.has(i) ? !0 : f(a, i).length ? (d(o) && (o = new H(), b.set(a, o)), o.add(i), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: n,
          OrdinaryOwnMetadataKeys: f,
          OrdinaryDeleteMetadata: _
        };
        return h;
      }
      function U(e, t, r) {
        var n = G.getProvider(e, t);
        if (!d(n))
          return n;
        if (r) {
          if (G.setProvider(e, t, N))
            return N;
          throw new Error("Illegal state.");
        }
      }
      function Ue() {
        var e = {}, t = [], r = (
          /** @class */
          function() {
            function h(a, i, o) {
              this._index = 0, this._keys = a, this._values = i, this._selector = o;
            }
            return h.prototype["@@iterator"] = function() {
              return this;
            }, h.prototype[k] = function() {
              return this;
            }, h.prototype.next = function() {
              var a = this._index;
              if (a >= 0 && a < this._keys.length) {
                var i = this._selector(this._keys[a], this._values[a]);
                return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, h.prototype.throw = function(a) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
            }, h.prototype.return = function(a) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
            }, h;
          }()
        ), n = (
          /** @class */
          function() {
            function h() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(h.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), h.prototype.has = function(a) {
              return this._find(
                a,
                /*insert*/
                !1
              ) >= 0;
            }, h.prototype.get = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              return i >= 0 ? this._values[i] : void 0;
            }, h.prototype.set = function(a, i) {
              var o = this._find(
                a,
                /*insert*/
                !0
              );
              return this._values[o] = i, this;
            }, h.prototype.delete = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              if (i >= 0) {
                for (var o = this._keys.length, u = i + 1; u < o; u++)
                  this._keys[u - 1] = this._keys[u], this._values[u - 1] = this._values[u];
                return this._keys.length--, this._values.length--, W(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, h.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, h.prototype.keys = function() {
              return new r(this._keys, this._values, f);
            }, h.prototype.values = function() {
              return new r(this._keys, this._values, _);
            }, h.prototype.entries = function() {
              return new r(this._keys, this._values, b);
            }, h.prototype["@@iterator"] = function() {
              return this.entries();
            }, h.prototype[k] = function() {
              return this.entries();
            }, h.prototype._find = function(a, i) {
              if (!W(this._cacheKey, a)) {
                this._cacheIndex = -1;
                for (var o = 0; o < this._keys.length; o++)
                  if (W(this._keys[o], a)) {
                    this._cacheIndex = o;
                    break;
                  }
              }
              return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
            }, h;
          }()
        );
        return n;
        function f(h, a) {
          return h;
        }
        function _(h, a) {
          return a;
        }
        function b(h, a) {
          return [h, a];
        }
      }
      function Ge() {
        var e = (
          /** @class */
          function() {
            function t() {
              this._map = new A();
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
            }, t.prototype[k] = function() {
              return this.keys();
            }, t;
          }()
        );
        return e;
      }
      function Fe() {
        var e = 16, t = P.create(), r = n();
        return (
          /** @class */
          function() {
            function a() {
              this._key = n();
            }
            return a.prototype.has = function(i) {
              var o = f(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? P.has(o, this._key) : !1;
            }, a.prototype.get = function(i) {
              var o = f(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? P.get(o, this._key) : void 0;
            }, a.prototype.set = function(i, o) {
              var u = f(
                i,
                /*create*/
                !0
              );
              return u[this._key] = o, this;
            }, a.prototype.delete = function(i) {
              var o = f(
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
            a = "@@WeakMap@@" + h();
          while (P.has(t, a));
          return t[a] = !0, a;
        }
        function f(a, i) {
          if (!w.call(a, r)) {
            if (!i)
              return;
            Object.defineProperty(a, r, { value: P.create() });
          }
          return a[r];
        }
        function _(a, i) {
          for (var o = 0; o < i; ++o)
            a[o] = Math.random() * 255 | 0;
          return a;
        }
        function b(a) {
          if (typeof Uint8Array == "function") {
            var i = new Uint8Array(a);
            return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : _(i, a), i;
          }
          return _(new Array(a), a);
        }
        function h() {
          var a = b(e);
          a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
          for (var i = "", o = 0; o < e; ++o) {
            var u = a[o];
            (o === 4 || o === 6 || o === 8) && (i += "-"), u < 16 && (i += "0"), i += u.toString(16).toLowerCase();
          }
          return i;
        }
      }
      function J(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  }(s || (s = {})), de;
}
$e();
let Xe = 0;
function Qe() {
  return Xe++;
}
var he;
(function(s) {
  s[s.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", s[s.NoBindingsAvailable = 0] = "NoBindingsAvailable", s[s.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(he || (he = {}));
var ve;
(function(s) {
  s.DynamicValue = "toDynamicValue", s.Factory = "toFactory", s.Provider = "toProvider";
})(ve || (ve = {}));
class Ke {
  constructor(c) {
    R(this, "id");
    R(this, "registry");
    this.id = Qe(), this.registry = c;
  }
}
const ye = {
  //Options
  BaseOpt: Symbol.for("BaseOpt"),
  CommonDebugOpt: Symbol.for("CommonDebugOpt"),
  //Core
  ThreeJsBase: Symbol.for("ThreeJsBase"),
  LoadUpdateHandler: Symbol.for("LoadUpdateHandler"),
  UpdateHandler: Symbol.for("UpdateHandler"),
  Update: Symbol.for("Update"),
  LoaderUpdate: Symbol.for("LoaderUpdate"),
  LoaderReset: Symbol.for("LoaderReset"),
  GUI: Symbol.for("GUI")
};
function nt(s, c = "./gameConfig.json") {
  return new Ke(async (l) => {
    const w = (await et(c)).baseOpt;
    l(ye.BaseOpt).toConstantValue(w);
    const M = new ze({
      canvas: s,
      antialias: w.antialias,
      powerPreference: "high-performance"
    });
    M.setSize(window.innerWidth, window.innerHeight), M.outputColorSpace = w.colorSpace, M.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const O = {
      renderer: M,
      scene: new Je(),
      camera: new qe(
        w.camera.fov,
        window.innerWidth / window.innerHeight,
        w.camera.near,
        w.camera.far
      )
    };
    l(ye.ThreeJsBase).toConstantValue(O);
  });
}
async function et(s) {
  try {
    const c = await fetch(s);
    if (!c.ok)
      throw new Error(`Response status: ${c.status}`);
    return await c.json();
  } catch (c) {
    console.error(c.message);
  }
}
const C = class C {
  static async task(c) {
    return new Promise((l) => {
      C.resolvers.set(this._idCounter++, {
        ms: c / 1e3,
        resolver: l
      });
    });
  }
  static update(c) {
    C.resolvers.forEach((l, y) => {
      l.ms -= c, l.ms <= 0 && (l.resolver(), C.resolvers.delete(y));
    });
  }
};
R(C, "_idCounter", 0), R(C, "resolvers", /* @__PURE__ */ new Map());
let q = C;
class at {
  constructor(c, l, y, w = 0) {
    R(this, "deltaTime", 0);
    R(this, "clock", new Ne());
    this.threeJSBase = c, this.commonDebugOpt = l, this.updatables = y, this.allPassedTime = w;
  }
  get getDeltaTime() {
    return this.deltaTime;
  }
  handleUpdate() {
    this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale, this.allPassedTime += this.deltaTime, q.update(this.deltaTime), this.updatables.forEach((c) => {
      c.update(this.deltaTime, this.threeJSBase.camera);
    });
  }
}
function it(s, c) {
  const l = s.folders.find((y) => y._title === c);
  if (!l)
    throw new Error(`Folder with name ${c} not found`);
  return l;
}
function ot(s, c, l, y = "XYZ") {
  const w = s.toArray(), M = c.toArray(), O = w.map((k, S) => k + (M[S] - k) * l);
  return new Ye(O[0], O[1], O[2], y);
}
async function ut(s) {
  return new Promise((c) => {
    setTimeout(() => {
      c();
    }, s);
  });
}
function ft(s, c) {
  const l = s.frames.find(
    (S) => S.filename.toLowerCase() === c.toLowerCase()
  );
  if (!l) throw new Error(`Frame with id ${c} not found in atlas config`);
  const { x: y, y: w, h: M } = l.frame, { size: O } = s.meta, k = w / O.h;
  return new Ze(y / O.w, k);
}
function st(s) {
  return s.x * s.x + s.y * s.y + s.z * s.z;
}
function ct(s, c, l, y, w) {
  return (s - c) / (l - c) * (w - y) + y;
}
class dt {
  constructor(...c) {
    R(this, "args");
    this.args = c;
  }
}
function lt(s, c) {
  const l = (y) => {
    c(...y.detail);
  };
  return document.addEventListener(s.name, l, { passive: !0 }), {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(s.name, l)
  };
}
function ht(s) {
  const c = new CustomEvent(s.constructor.name, {
    detail: s.args
  });
  document.dispatchEvent(c);
}
export {
  ye as BASETYPES,
  at as BaseUpdateHandler,
  dt as EventBase,
  q as TaskManager,
  nt as buildBaseDIModule,
  it as findGUIFolder,
  st as getLengthVector,
  ft as getSpriteOffset,
  ot as lerpingRotation,
  ct as mapRange,
  ht as publish,
  ut as sleep,
  lt as subscribe
};
