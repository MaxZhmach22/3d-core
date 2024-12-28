var Fn = Object.defineProperty;
var zn = (o, t, e) => t in o ? Fn(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var Yt = (o, t, e) => zn(o, typeof t != "symbol" ? t + "" : t, e);
import { WebGLRenderer as In, Scene as Bn, PerspectiveCamera as Ln, Clock as Un, Euler as Vn, Vector2 as Nn } from "three";
var ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ei = {};
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
var ri;
function Gn() {
  if (ri) return ei;
  ri = 1;
  var o;
  return function(t) {
    (function(e) {
      var r = typeof globalThis == "object" ? globalThis : typeof ti == "object" ? ti : typeof self == "object" ? self : typeof this == "object" ? this : u(), i = n(t);
      typeof r.Reflect < "u" && (i = n(r.Reflect, i)), e(i, r), typeof r.Reflect > "u" && (r.Reflect = t);
      function n(f, l) {
        return function(_, c) {
          Object.defineProperty(f, _, { configurable: !0, writable: !0, value: c }), l && l(_, c);
        };
      }
      function s() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function a() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function u() {
        return s() || a();
      }
    })(function(e, r) {
      var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", s = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", a = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", u = typeof Object.create == "function", f = { __proto__: [] } instanceof Array, l = !u && !f, _ = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: u ? function() {
          return rr(/* @__PURE__ */ Object.create(null));
        } : f ? function() {
          return rr({ __proto__: null });
        } : function() {
          return rr({});
        },
        has: l ? function(d, m) {
          return i.call(d, m);
        } : function(d, m) {
          return m in d;
        },
        get: l ? function(d, m) {
          return i.call(d, m) ? d[m] : void 0;
        } : function(d, m) {
          return d[m];
        }
      }, c = Object.getPrototypeOf(Function), p = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Cn(), g = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Dn(), h = typeof WeakMap == "function" ? WeakMap : En(), y = n ? Symbol.for("@reflect-metadata:registry") : void 0, w = Sn(), x = Mn(w);
      function b(d, m, v, S) {
        if (z(v)) {
          if (!jr(d))
            throw new TypeError();
          if (!qr(m))
            throw new TypeError();
          return N(d, m);
        } else {
          if (!jr(d))
            throw new TypeError();
          if (!it(m))
            throw new TypeError();
          if (!it(S) && !z(S) && !ut(S))
            throw new TypeError();
          return ut(S) && (S = void 0), v = Dt(v), rt(d, m, v, S);
        }
      }
      e("decorate", b);
      function O(d, m) {
        function v(S, F) {
          if (!it(S))
            throw new TypeError();
          if (!z(F) && !On(F))
            throw new TypeError();
          Jt(d, m, S, F);
        }
        return v;
      }
      e("metadata", O);
      function T(d, m, v, S) {
        if (!it(v))
          throw new TypeError();
        return z(S) || (S = Dt(S)), Jt(d, m, v, S);
      }
      e("defineMetadata", T);
      function M(d, m, v) {
        if (!it(m))
          throw new TypeError();
        return z(v) || (v = Dt(v)), Q(d, m, v);
      }
      e("hasMetadata", M);
      function k(d, m, v) {
        if (!it(m))
          throw new TypeError();
        return z(v) || (v = Dt(v)), j(d, m, v);
      }
      e("hasOwnMetadata", k);
      function D(d, m, v) {
        if (!it(m))
          throw new TypeError();
        return z(v) || (v = Dt(v)), J(d, m, v);
      }
      e("getMetadata", D);
      function P(d, m, v) {
        if (!it(m))
          throw new TypeError();
        return z(v) || (v = Dt(v)), ct(d, m, v);
      }
      e("getOwnMetadata", P);
      function U(d, m) {
        if (!it(d))
          throw new TypeError();
        return z(m) || (m = Dt(m)), Nt(d, m);
      }
      e("getMetadataKeys", U);
      function Y(d, m) {
        if (!it(d))
          throw new TypeError();
        return z(m) || (m = Dt(m)), Gt(d, m);
      }
      e("getOwnMetadataKeys", Y);
      function V(d, m, v) {
        if (!it(m))
          throw new TypeError();
        if (z(v) || (v = Dt(v)), !it(m))
          throw new TypeError();
        z(v) || (v = Dt(v));
        var S = xe(
          m,
          v,
          /*Create*/
          !1
        );
        return z(S) ? !1 : S.OrdinaryDeleteMetadata(d, m, v);
      }
      e("deleteMetadata", V);
      function N(d, m) {
        for (var v = d.length - 1; v >= 0; --v) {
          var S = d[v], F = S(m);
          if (!z(F) && !ut(F)) {
            if (!qr(F))
              throw new TypeError();
            m = F;
          }
        }
        return m;
      }
      function rt(d, m, v, S) {
        for (var F = d.length - 1; F >= 0; --F) {
          var st = d[F], nt = st(m, v, S);
          if (!z(nt) && !ut(nt)) {
            if (!it(nt))
              throw new TypeError();
            S = nt;
          }
        }
        return S;
      }
      function Q(d, m, v) {
        var S = j(d, m, v);
        if (S)
          return !0;
        var F = er(m);
        return ut(F) ? !1 : Q(d, F, v);
      }
      function j(d, m, v) {
        var S = xe(
          m,
          v,
          /*Create*/
          !1
        );
        return z(S) ? !1 : Xr(S.OrdinaryHasOwnMetadata(d, m, v));
      }
      function J(d, m, v) {
        var S = j(d, m, v);
        if (S)
          return ct(d, m, v);
        var F = er(m);
        if (!ut(F))
          return J(d, F, v);
      }
      function ct(d, m, v) {
        var S = xe(
          m,
          v,
          /*Create*/
          !1
        );
        if (!z(S))
          return S.OrdinaryGetOwnMetadata(d, m, v);
      }
      function Jt(d, m, v, S) {
        var F = xe(
          v,
          S,
          /*Create*/
          !0
        );
        F.OrdinaryDefineOwnMetadata(d, m, v, S);
      }
      function Nt(d, m) {
        var v = Gt(d, m), S = er(d);
        if (S === null)
          return v;
        var F = Nt(S, m);
        if (F.length <= 0)
          return v;
        if (v.length <= 0)
          return F;
        for (var st = new g(), nt = [], I = 0, C = v; I < C.length; I++) {
          var E = C[I], R = st.has(E);
          R || (st.add(E), nt.push(E));
        }
        for (var A = 0, B = F; A < B.length; A++) {
          var E = B[A], R = st.has(E);
          R || (st.add(E), nt.push(E));
        }
        return nt;
      }
      function Gt(d, m) {
        var v = xe(
          d,
          m,
          /*create*/
          !1
        );
        return v ? v.OrdinaryOwnMetadataKeys(d, m) : [];
      }
      function Ct(d) {
        if (d === null)
          return 1;
        switch (typeof d) {
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
            return d === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function z(d) {
        return d === void 0;
      }
      function ut(d) {
        return d === null;
      }
      function It(d) {
        return typeof d == "symbol";
      }
      function it(d) {
        return typeof d == "object" ? d !== null : typeof d == "function";
      }
      function Tn(d, m) {
        switch (Ct(d)) {
          case 0:
            return d;
          case 1:
            return d;
          case 2:
            return d;
          case 3:
            return d;
          case 4:
            return d;
          case 5:
            return d;
        }
        var v = "string", S = Hr(d, s);
        if (S !== void 0) {
          var F = S.call(d, v);
          if (it(F))
            throw new TypeError();
          return F;
        }
        return xn(d);
      }
      function xn(d, m) {
        var v, S;
        {
          var F = d.toString;
          if (Be(F)) {
            var S = F.call(d);
            if (!it(S))
              return S;
          }
          var v = d.valueOf;
          if (Be(v)) {
            var S = v.call(d);
            if (!it(S))
              return S;
          }
        }
        throw new TypeError();
      }
      function Xr(d) {
        return !!d;
      }
      function bn(d) {
        return "" + d;
      }
      function Dt(d) {
        var m = Tn(d);
        return It(m) ? m : bn(m);
      }
      function jr(d) {
        return Array.isArray ? Array.isArray(d) : d instanceof Object ? d instanceof Array : Object.prototype.toString.call(d) === "[object Array]";
      }
      function Be(d) {
        return typeof d == "function";
      }
      function qr(d) {
        return typeof d == "function";
      }
      function On(d) {
        switch (Ct(d)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function tr(d, m) {
        return d === m || d !== d && m !== m;
      }
      function Hr(d, m) {
        var v = d[m];
        if (v != null) {
          if (!Be(v))
            throw new TypeError();
          return v;
        }
      }
      function $r(d) {
        var m = Hr(d, a);
        if (!Be(m))
          throw new TypeError();
        var v = m.call(d);
        if (!it(v))
          throw new TypeError();
        return v;
      }
      function Zr(d) {
        return d.value;
      }
      function Qr(d) {
        var m = d.next();
        return m.done ? !1 : m;
      }
      function Jr(d) {
        var m = d.return;
        m && m.call(d);
      }
      function er(d) {
        var m = Object.getPrototypeOf(d);
        if (typeof d != "function" || d === c || m !== c)
          return m;
        var v = d.prototype, S = v && Object.getPrototypeOf(v);
        if (S == null || S === Object.prototype)
          return m;
        var F = S.constructor;
        return typeof F != "function" || F === d ? m : F;
      }
      function Pn() {
        var d;
        !z(y) && typeof r.Reflect < "u" && !(y in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (d = kn(r.Reflect));
        var m, v, S, F = new h(), st = {
          registerProvider: nt,
          getProvider: C,
          setProvider: R
        };
        return st;
        function nt(A) {
          if (!Object.isExtensible(st))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case d === A:
              break;
            case z(m):
              m = A;
              break;
            case m === A:
              break;
            case z(v):
              v = A;
              break;
            case v === A:
              break;
            default:
              S === void 0 && (S = new g()), S.add(A);
              break;
          }
        }
        function I(A, B) {
          if (!z(m)) {
            if (m.isProviderFor(A, B))
              return m;
            if (!z(v)) {
              if (v.isProviderFor(A, B))
                return m;
              if (!z(S))
                for (var X = $r(S); ; ) {
                  var K = Qr(X);
                  if (!K)
                    return;
                  var kt = Zr(K);
                  if (kt.isProviderFor(A, B))
                    return Jr(X), kt;
                }
            }
          }
          if (!z(d) && d.isProviderFor(A, B))
            return d;
        }
        function C(A, B) {
          var X = F.get(A), K;
          return z(X) || (K = X.get(B)), z(K) && (K = I(A, B), z(K) || (z(X) && (X = new p(), F.set(A, X)), X.set(B, K))), K;
        }
        function E(A) {
          if (z(A))
            throw new TypeError();
          return m === A || v === A || !z(S) && S.has(A);
        }
        function R(A, B, X) {
          if (!E(X))
            throw new Error("Metadata provider not registered.");
          var K = C(A, B);
          if (K !== X) {
            if (!z(K))
              return !1;
            var kt = F.get(A);
            z(kt) && (kt = new p(), F.set(A, kt)), kt.set(B, X);
          }
          return !0;
        }
      }
      function Sn() {
        var d;
        return !z(y) && it(r.Reflect) && Object.isExtensible(r.Reflect) && (d = r.Reflect[y]), z(d) && (d = Pn()), !z(y) && it(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, y, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: d
        }), d;
      }
      function Mn(d) {
        var m = new h(), v = {
          isProviderFor: function(E, R) {
            var A = m.get(E);
            return z(A) ? !1 : A.has(R);
          },
          OrdinaryDefineOwnMetadata: nt,
          OrdinaryHasOwnMetadata: F,
          OrdinaryGetOwnMetadata: st,
          OrdinaryOwnMetadataKeys: I,
          OrdinaryDeleteMetadata: C
        };
        return w.registerProvider(v), v;
        function S(E, R, A) {
          var B = m.get(E), X = !1;
          if (z(B)) {
            if (!A)
              return;
            B = new p(), m.set(E, B), X = !0;
          }
          var K = B.get(R);
          if (z(K)) {
            if (!A)
              return;
            if (K = new p(), B.set(R, K), !d.setProvider(E, R, v))
              throw B.delete(R), X && m.delete(E), new Error("Wrong provider for target.");
          }
          return K;
        }
        function F(E, R, A) {
          var B = S(
            R,
            A,
            /*Create*/
            !1
          );
          return z(B) ? !1 : Xr(B.has(E));
        }
        function st(E, R, A) {
          var B = S(
            R,
            A,
            /*Create*/
            !1
          );
          if (!z(B))
            return B.get(E);
        }
        function nt(E, R, A, B) {
          var X = S(
            A,
            B,
            /*Create*/
            !0
          );
          X.set(E, R);
        }
        function I(E, R) {
          var A = [], B = S(
            E,
            R,
            /*Create*/
            !1
          );
          if (z(B))
            return A;
          for (var X = B.keys(), K = $r(X), kt = 0; ; ) {
            var Kr = Qr(K);
            if (!Kr)
              return A.length = kt, A;
            var Rn = Zr(Kr);
            try {
              A[kt] = Rn;
            } catch (An) {
              try {
                Jr(K);
              } finally {
                throw An;
              }
            }
            kt++;
          }
        }
        function C(E, R, A) {
          var B = S(
            R,
            A,
            /*Create*/
            !1
          );
          if (z(B) || !B.delete(E))
            return !1;
          if (B.size === 0) {
            var X = m.get(R);
            z(X) || (X.delete(A), X.size === 0 && m.delete(X));
          }
          return !0;
        }
      }
      function kn(d) {
        var m = d.defineMetadata, v = d.hasOwnMetadata, S = d.getOwnMetadata, F = d.getOwnMetadataKeys, st = d.deleteMetadata, nt = new h(), I = {
          isProviderFor: function(C, E) {
            var R = nt.get(C);
            return !z(R) && R.has(E) ? !0 : F(C, E).length ? (z(R) && (R = new g(), nt.set(C, R)), R.add(E), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: m,
          OrdinaryHasOwnMetadata: v,
          OrdinaryGetOwnMetadata: S,
          OrdinaryOwnMetadataKeys: F,
          OrdinaryDeleteMetadata: st
        };
        return I;
      }
      function xe(d, m, v) {
        var S = w.getProvider(d, m);
        if (!z(S))
          return S;
        if (v) {
          if (w.setProvider(d, m, x))
            return x;
          throw new Error("Illegal state.");
        }
      }
      function Cn() {
        var d = {}, m = [], v = (
          /** @class */
          function() {
            function I(C, E, R) {
              this._index = 0, this._keys = C, this._values = E, this._selector = R;
            }
            return I.prototype["@@iterator"] = function() {
              return this;
            }, I.prototype[a] = function() {
              return this;
            }, I.prototype.next = function() {
              var C = this._index;
              if (C >= 0 && C < this._keys.length) {
                var E = this._selector(this._keys[C], this._values[C]);
                return C + 1 >= this._keys.length ? (this._index = -1, this._keys = m, this._values = m) : this._index++, { value: E, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, I.prototype.throw = function(C) {
              throw this._index >= 0 && (this._index = -1, this._keys = m, this._values = m), C;
            }, I.prototype.return = function(C) {
              return this._index >= 0 && (this._index = -1, this._keys = m, this._values = m), { value: C, done: !0 };
            }, I;
          }()
        ), S = (
          /** @class */
          function() {
            function I() {
              this._keys = [], this._values = [], this._cacheKey = d, this._cacheIndex = -2;
            }
            return Object.defineProperty(I.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), I.prototype.has = function(C) {
              return this._find(
                C,
                /*insert*/
                !1
              ) >= 0;
            }, I.prototype.get = function(C) {
              var E = this._find(
                C,
                /*insert*/
                !1
              );
              return E >= 0 ? this._values[E] : void 0;
            }, I.prototype.set = function(C, E) {
              var R = this._find(
                C,
                /*insert*/
                !0
              );
              return this._values[R] = E, this;
            }, I.prototype.delete = function(C) {
              var E = this._find(
                C,
                /*insert*/
                !1
              );
              if (E >= 0) {
                for (var R = this._keys.length, A = E + 1; A < R; A++)
                  this._keys[A - 1] = this._keys[A], this._values[A - 1] = this._values[A];
                return this._keys.length--, this._values.length--, tr(C, this._cacheKey) && (this._cacheKey = d, this._cacheIndex = -2), !0;
              }
              return !1;
            }, I.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = d, this._cacheIndex = -2;
            }, I.prototype.keys = function() {
              return new v(this._keys, this._values, F);
            }, I.prototype.values = function() {
              return new v(this._keys, this._values, st);
            }, I.prototype.entries = function() {
              return new v(this._keys, this._values, nt);
            }, I.prototype["@@iterator"] = function() {
              return this.entries();
            }, I.prototype[a] = function() {
              return this.entries();
            }, I.prototype._find = function(C, E) {
              if (!tr(this._cacheKey, C)) {
                this._cacheIndex = -1;
                for (var R = 0; R < this._keys.length; R++)
                  if (tr(this._keys[R], C)) {
                    this._cacheIndex = R;
                    break;
                  }
              }
              return this._cacheIndex < 0 && E && (this._cacheIndex = this._keys.length, this._keys.push(C), this._values.push(void 0)), this._cacheIndex;
            }, I;
          }()
        );
        return S;
        function F(I, C) {
          return I;
        }
        function st(I, C) {
          return C;
        }
        function nt(I, C) {
          return [I, C];
        }
      }
      function Dn() {
        var d = (
          /** @class */
          function() {
            function m() {
              this._map = new p();
            }
            return Object.defineProperty(m.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), m.prototype.has = function(v) {
              return this._map.has(v);
            }, m.prototype.add = function(v) {
              return this._map.set(v, v), this;
            }, m.prototype.delete = function(v) {
              return this._map.delete(v);
            }, m.prototype.clear = function() {
              this._map.clear();
            }, m.prototype.keys = function() {
              return this._map.keys();
            }, m.prototype.values = function() {
              return this._map.keys();
            }, m.prototype.entries = function() {
              return this._map.entries();
            }, m.prototype["@@iterator"] = function() {
              return this.keys();
            }, m.prototype[a] = function() {
              return this.keys();
            }, m;
          }()
        );
        return d;
      }
      function En() {
        var d = 16, m = _.create(), v = S();
        return (
          /** @class */
          function() {
            function C() {
              this._key = S();
            }
            return C.prototype.has = function(E) {
              var R = F(
                E,
                /*create*/
                !1
              );
              return R !== void 0 ? _.has(R, this._key) : !1;
            }, C.prototype.get = function(E) {
              var R = F(
                E,
                /*create*/
                !1
              );
              return R !== void 0 ? _.get(R, this._key) : void 0;
            }, C.prototype.set = function(E, R) {
              var A = F(
                E,
                /*create*/
                !0
              );
              return A[this._key] = R, this;
            }, C.prototype.delete = function(E) {
              var R = F(
                E,
                /*create*/
                !1
              );
              return R !== void 0 ? delete R[this._key] : !1;
            }, C.prototype.clear = function() {
              this._key = S();
            }, C;
          }()
        );
        function S() {
          var C;
          do
            C = "@@WeakMap@@" + I();
          while (_.has(m, C));
          return m[C] = !0, C;
        }
        function F(C, E) {
          if (!i.call(C, v)) {
            if (!E)
              return;
            Object.defineProperty(C, v, { value: _.create() });
          }
          return C[v];
        }
        function st(C, E) {
          for (var R = 0; R < E; ++R)
            C[R] = Math.random() * 255 | 0;
          return C;
        }
        function nt(C) {
          if (typeof Uint8Array == "function") {
            var E = new Uint8Array(C);
            return typeof crypto < "u" ? crypto.getRandomValues(E) : typeof msCrypto < "u" ? msCrypto.getRandomValues(E) : st(E, C), E;
          }
          return st(new Array(C), C);
        }
        function I() {
          var C = nt(d);
          C[6] = C[6] & 79 | 64, C[8] = C[8] & 191 | 128;
          for (var E = "", R = 0; R < d; ++R) {
            var A = C[R];
            (R === 4 || R === 6 || R === 8) && (E += "-"), A < 16 && (E += "0"), E += A.toString(16).toLowerCase();
          }
          return E;
        }
      }
      function rr(d) {
        return d.__ = void 0, delete d.__, d;
      }
    });
  }(o || (o = {})), ei;
}
Gn();
let Yn = 0;
function Wn() {
  return Yn++;
}
var ii;
(function(o) {
  o[o.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", o[o.NoBindingsAvailable = 0] = "NoBindingsAvailable", o[o.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(ii || (ii = {}));
var ni;
(function(o) {
  o.DynamicValue = "toDynamicValue", o.Factory = "toFactory", o.Provider = "toProvider";
})(ni || (ni = {}));
class Xn {
  constructor(t) {
    Yt(this, "id");
    Yt(this, "registry");
    this.id = Wn(), this.registry = t;
  }
}
const Le = {
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
  GUI: Symbol.for("GUI"),
  PassedTime: Symbol.for("PassedTime")
};
function fa(o, t = "./gameConfig.json") {
  return new Xn(async (e) => {
    const r = await jn(t), i = r.baseOpt;
    e(Le.BaseOpt).toConstantValue(i);
    const n = r.commonDebugOpt;
    e(Le.CommonDebugOpt).toConstantValue(n);
    const s = { value: 0 };
    e(Le.PassedTime).toConstantValue(s);
    const a = new In({
      canvas: o,
      antialias: i.antialias,
      powerPreference: "high-performance"
    });
    a.setSize(window.innerWidth, window.innerHeight), a.outputColorSpace = i.colorSpace, a.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const u = {
      renderer: a,
      scene: new Bn(),
      camera: new Ln(
        i.camera.fov,
        window.innerWidth / window.innerHeight,
        i.camera.near,
        i.camera.far
      )
    };
    e(Le.ThreeJsBase).toConstantValue(u);
  });
}
async function jn(o) {
  try {
    const t = await fetch(o);
    if (!t.ok)
      throw new Error(`Response status: ${t.status}`);
    return await t.json();
  } catch (t) {
    console.error(t.message);
  }
}
const re = class re {
  static async task(t) {
    return new Promise((e) => {
      re.resolvers.set(this._idCounter++, {
        ms: t / 1e3,
        resolver: e
      });
    });
  }
  static update(t) {
    re.resolvers.forEach((e, r) => {
      e.ms -= t, e.ms <= 0 && (e.resolver(), re.resolvers.delete(r));
    });
  }
};
Yt(re, "_idCounter", 0), Yt(re, "resolvers", /* @__PURE__ */ new Map());
let _r = re;
function Bt(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Ti(o, t) {
  o.prototype = Object.create(t.prototype), o.prototype.constructor = o, o.__proto__ = t;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var xt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ge = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, kr, lt, q, Pt = 1e8, W = 1 / Pt, cr = Math.PI * 2, qn = cr / 4, Hn = 0, xi = Math.sqrt, $n = Math.cos, Zn = Math.sin, ot = function(t) {
  return typeof t == "string";
}, Z = function(t) {
  return typeof t == "function";
}, Ut = function(t) {
  return typeof t == "number";
}, Cr = function(t) {
  return typeof t > "u";
}, zt = function(t) {
  return typeof t == "object";
}, dt = function(t) {
  return t !== !1;
}, Dr = function() {
  return typeof window < "u";
}, Ue = function(t) {
  return Z(t) || ot(t);
}, bi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ht = Array.isArray, dr = /(?:-?\.?\d|\.)+/gi, Oi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _e = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ir = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Pi = /[+-]=-?[.\d]+/, Si = /[^,'"\[\]\s]+/gi, Qn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, H, Et, pr, Er, bt = {}, We = {}, Mi, ki = function(t) {
  return (We = ue(t, bt)) && yt;
}, Rr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ce = function(t, e) {
  return !e && console.warn(t);
}, Ci = function(t, e) {
  return t && (bt[t] = e) && We && (We[t] = e) || bt;
}, De = function() {
  return 0;
}, Jn = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ve = {
  suppressEvents: !0,
  kill: !1
}, Kn = {
  suppressEvents: !0
}, Ar = {}, qt = [], mr = {}, Di, vt = {}, nr = {}, si = 30, Ne = [], Fr = "", zr = function(t) {
  var e = t[0], r, i;
  if (zt(e) || Z(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Ne.length; i-- && !Ne[i].targetTest(e); )
      ;
    r = Ne[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new tn(t[i], r))) || t.splice(i, 1);
  return t;
}, ne = function(t) {
  return t._gsap || zr(St(t))[0]._gsap;
}, Ei = function(t, e, r) {
  return (r = t[e]) && Z(r) ? t[e]() : Cr(r) && t.getAttribute && t.getAttribute(e) || r;
}, pt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, tt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, at = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, de = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, ts = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Xe = function() {
  var t = qt.length, e = qt.slice(0), r, i;
  for (mr = {}, qt.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Ri = function(t, e, r, i) {
  qt.length && !lt && Xe(), t.render(e, r, lt && e < 0 && (t._initted || t._startAt)), qt.length && !lt && Xe();
}, Ai = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Si).length < 2 ? e : ot(t) ? t.trim() : t;
}, Fi = function(t) {
  return t;
}, Mt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, es = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, ue = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, ai = function o(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = zt(e[r]) ? o(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, je = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Se = function(t) {
  var e = t.parent || H, r = t.keyframes ? es(ht(t.keyframes)) : Mt;
  if (dt(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, rs = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, zi = function(t, e, r, i, n) {
  var s = t[i], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, Qe = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, $t = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, se = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, is = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, gr = function(t, e, r, i) {
  return t._startAt && (lt ? t._startAt.revert(Ve) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, ns = function o(t) {
  return !t || t._ts && o(t.parent);
}, oi = function(t) {
  return t._repeat ? ye(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ye = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, qe = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Je = function(t) {
  return t._end = at(t._start + (t._tDur / Math.abs(t._ts || t._rts || W) || 0));
}, Ke = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = at(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Je(t), r._dirty || se(r, t)), t;
}, Ii = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = qe(t.rawTime(), e), (!e._dur || Ie(0, e.totalDuration(), r) - e._tTime > W) && e.render(r, !0)), se(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -W;
  }
}, Rt = function(t, e, r, i) {
  return e.parent && $t(e), e._start = at((Ut(r) ? r : r || t !== H ? Ot(t, r, e) : t._time) + e._delay), e._end = at(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), zi(t, e, "_first", "_last", t._sort ? "_start" : 0), yr(e) || (t._recent = e), i || Ii(t, e), t._ts < 0 && Ke(t, t._tTime), t;
}, Bi = function(t, e) {
  return (bt.ScrollTrigger || Rr("scrollTrigger", e)) && bt.ScrollTrigger.create(e, t);
}, Li = function(t, e, r, i, n) {
  if (Br(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !lt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Di !== wt.frame)
    return qt.push(t), t._lazy = [n, i], 1;
}, ss = function o(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
}, yr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, as = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && ss(t) && !(!t._initted && yr(t)) || (t._ts < 0 || t._dp._ts < 0) && !yr(t)) ? 0 : 1, a = t._rDelay, u = 0, f, l, _;
  if (a && t._repeat && (u = Ie(0, t._tDur, e), l = ye(u, a), t._yoyo && l & 1 && (s = 1 - s), l !== ye(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || lt || i || t._zTime === W || !e && t._zTime) {
    if (!t._initted && Li(t, e, i, r, u))
      return;
    for (_ = t._zTime, t._zTime = e || (r ? W : 0), r || (r = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && gr(t, e, r, !0), t._onUpdate && !r && Tt(t, "onUpdate"), u && t._repeat && !r && t.parent && Tt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && $t(t, 1), !r && !lt && (Tt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, os = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, ve = function(t, e, r, i) {
  var n = t._repeat, s = at(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : at(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Ke(t, t._tTime = t._tDur * a), t.parent && Je(t), r || se(t.parent, t), t;
}, ui = function(t) {
  return t instanceof _t ? se(t) : ve(t, t._dur);
}, us = {
  _start: 0,
  endTime: De,
  totalDuration: De
}, Ot = function o(t, e, r) {
  var i = t.labels, n = t._recent || us, s = t.duration() >= Pt ? n.endTime(!1) : t._dur, a, u, f;
  return ot(e) && (isNaN(e) || e in i) ? (u = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = s), i[e]) : (u = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && r && (u = u / 100 * (ht(r) ? r[0] : r).totalDuration()), a > 1 ? o(t, e.substr(0, a - 1), r) + u : s + u)) : e == null ? s : +e;
}, Me = function(t, e, r) {
  var i = Ut(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, u;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (a = s, u = r; u && !("immediateRender" in a); )
      a = u.vars.defaults || {}, u = dt(u.vars.inherit) && u.parent;
    s.immediateRender = dt(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new et(e[0], s, e[n + 1]);
}, Qt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Ie = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, ft = function(t, e) {
  return !ot(t) || !(e = Qn.exec(t)) ? "" : e[1];
}, fs = function(t, e, r) {
  return Qt(r, function(i) {
    return Ie(t, e, i);
  });
}, vr = [].slice, Ui = function(t, e) {
  return t && zt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && zt(t[0])) && !t.nodeType && t !== Et;
}, ls = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return ot(i) && !e || Ui(i, 1) ? (n = r).push.apply(n, St(i)) : r.push(i);
  }) || r;
}, St = function(t, e, r) {
  return q && !e && q.selector ? q.selector(t) : ot(t) && !r && (pr || !we()) ? vr.call((e || Er).querySelectorAll(t), 0) : ht(t) ? ls(t, r) : Ui(t) ? vr.call(t, 0) : t ? [t] : [];
}, wr = function(t) {
  return t = St(t)[0] || Ce("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return St(e, r.querySelectorAll ? r : r === t ? Ce("Invalid scope") || Er.createElement("div") : t);
  };
}, Vi = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ni = function(t) {
  if (Z(t))
    return t;
  var e = zt(t) ? t : {
    each: t
  }, r = ae(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = i > 0 && i < 1, u = isNaN(i) || a, f = e.axis, l = i, _ = i;
  return ot(i) ? l = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && u && (l = i[0], _ = i[1]), function(c, p, g) {
    var h = (g || e).length, y = s[h], w, x, b, O, T, M, k, D, P;
    if (!y) {
      if (P = e.grid === "auto" ? 0 : (e.grid || [1, Pt])[1], !P) {
        for (k = -Pt; k < (k = g[P++].getBoundingClientRect().left) && P < h; )
          ;
        P < h && P--;
      }
      for (y = s[h] = [], w = u ? Math.min(P, h) * l - 0.5 : i % P, x = P === Pt ? 0 : u ? h * _ / P - 0.5 : i / P | 0, k = 0, D = Pt, M = 0; M < h; M++)
        b = M % P - w, O = x - (M / P | 0), y[M] = T = f ? Math.abs(f === "y" ? O : b) : xi(b * b + O * O), T > k && (k = T), T < D && (D = T);
      i === "random" && Vi(y), y.max = k - D, y.min = D, y.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (P > h ? h - 1 : f ? f === "y" ? h / P : P : Math.max(P, h / P)) || 0) * (i === "edges" ? -1 : 1), y.b = h < 0 ? n - h : n, y.u = ft(e.amount || e.each) || 0, r = r && h < 0 ? Qi(r) : r;
    }
    return h = (y[c] - y.min) / y.max || 0, at(y.b + (r ? r(h) : h) * y.v) + y.u;
  };
}, Tr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = at(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Ut(r) ? 0 : ft(r));
  };
}, Gi = function(t, e) {
  var r = ht(t), i, n;
  return !r && zt(t) && (i = r = t.radius || Pt, t.values ? (t = St(t.values), (n = !Ut(t[0])) && (i *= i)) : t = Tr(t.increment)), Qt(e, r ? Z(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), f = Pt, l = 0, _ = t.length, c, p; _--; )
      n ? (c = t[_].x - a, p = t[_].y - u, c = c * c + p * p) : c = Math.abs(t[_] - a), c < f && (f = c, l = _);
    return l = !i || f <= i ? t[l] : s, n || l === s || Ut(s) ? l : l + ft(s);
  } : Tr(t));
}, Yi = function(t, e, r, i) {
  return Qt(ht(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return ht(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, hs = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, _s = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || ft(r));
  };
}, cs = function(t, e, r) {
  return Xi(t, e, 0, 1, r);
}, Wi = function(t, e, r) {
  return Qt(r, function(i) {
    return t[~~e(i)];
  });
}, ds = function o(t, e, r) {
  var i = e - t;
  return ht(t) ? Wi(t, o(0, t.length), e) : Qt(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, ps = function o(t, e, r) {
  var i = e - t, n = i * 2;
  return ht(t) ? Wi(t, o(0, t.length - 1), e) : Qt(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, Ee = function(t) {
  for (var e = 0, r = "", i, n, s, a; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), a = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(a ? Si : dr), r += t.substr(e, i - e) + Yi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, Xi = function(t, e, r, i, n) {
  var s = e - t, a = i - r;
  return Qt(n, function(u) {
    return r + ((u - t) / s * a || 0);
  });
}, ms = function o(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(p) {
    return (1 - p) * t + p * e;
  };
  if (!n) {
    var s = ot(t), a = {}, u, f, l, _, c;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (ht(t) && !ht(e)) {
      for (l = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
        l.push(o(t[f - 1], t[f]));
      _--, n = function(g) {
        g *= _;
        var h = Math.min(c, ~~g);
        return l[h](g - h);
      }, r = e;
    } else i || (t = ue(ht(t) ? [] : {}, t));
    if (!l) {
      for (u in e)
        Ir.call(a, t, u, "get", e[u]);
      n = function(g) {
        return Vr(g, a) || (s ? t.p : t);
      };
    }
  }
  return Qt(r, n);
}, fi = function(t, e, r) {
  var i = t.labels, n = Pt, s, a, u;
  for (s in i)
    a = i[s] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (u = s, n = a);
  return u;
}, Tt = function(t, e, r) {
  var i = t.vars, n = i[e], s = q, a = t._ctx, u, f, l;
  if (n)
    return u = i[e + "Params"], f = i.callbackScope || t, r && qt.length && Xe(), a && (q = a), l = u ? n.apply(f, u) : n.call(f), q = s, l;
}, Oe = function(t) {
  return $t(t), t.scrollTrigger && t.scrollTrigger.kill(!!lt), t.progress() < 1 && Tt(t, "onInterrupt"), t;
}, ce, ji = [], qi = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Dr() || t.headless) {
      var e = t.name, r = Z(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: De,
        render: Vr,
        add: Ir,
        kill: Rs,
        modifier: Es,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Ur,
        aliases: {},
        register: 0
      };
      if (we(), t !== i) {
        if (vt[e])
          return;
        Mt(i, Mt(je(t, n), s)), ue(i.prototype, ue(n, je(t, s))), vt[i.prop = e] = i, t.targetTest && (Ne.push(i), Ar[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Ci(e, i), t.register && t.register(yt, i, mt);
    } else
      ji.push(t);
}, G = 255, Pe = {
  aqua: [0, G, G],
  lime: [0, G, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, G],
  navy: [0, 0, 128],
  white: [G, G, G],
  olive: [128, 128, 0],
  yellow: [G, G, 0],
  orange: [G, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [G, 0, 0],
  pink: [G, 192, 203],
  cyan: [0, G, G],
  transparent: [G, G, G, 0]
}, sr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * G + 0.5 | 0;
}, Hi = function(t, e, r) {
  var i = t ? Ut(t) ? [t >> 16, t >> 8 & G, t & G] : 0 : Pe.black, n, s, a, u, f, l, _, c, p, g;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Pe[t])
      i = Pe[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & G, i & G, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & G, t & G];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = g = t.match(dr), !e)
        u = +i[0] % 360 / 360, f = +i[1] / 100, l = +i[2] / 100, s = l <= 0.5 ? l * (f + 1) : l + f - l * f, n = l * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = sr(u + 1 / 3, n, s), i[1] = sr(u, n, s), i[2] = sr(u - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(Oi), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(dr) || Pe.transparent;
    i = i.map(Number);
  }
  return e && !g && (n = i[0] / G, s = i[1] / G, a = i[2] / G, _ = Math.max(n, s, a), c = Math.min(n, s, a), l = (_ + c) / 2, _ === c ? u = f = 0 : (p = _ - c, f = l > 0.5 ? p / (2 - _ - c) : p / (_ + c), u = _ === n ? (s - a) / p + (s < a ? 6 : 0) : _ === s ? (a - n) / p + 2 : (n - s) / p + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(f * 100 + 0.5), i[2] = ~~(l * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, $i = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Ht).forEach(function(n) {
    var s = n.match(_e) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, li = function(t, e, r) {
  var i = "", n = (t + i).match(Ht), s = e ? "hsla(" : "rgba(", a = 0, u, f, l, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = Hi(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), r && (l = $i(t), u = r.c, u.join(i) !== l.c.join(i)))
    for (f = t.replace(Ht, "1").split(_e), _ = f.length - 1; a < _; a++)
      i += f[a] + (~u.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : r).shift());
  if (!f)
    for (f = t.split(Ht), _ = f.length - 1; a < _; a++)
      i += f[a] + n[a];
  return i + f[_];
}, Ht = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Pe)
    o += "|" + t + "\\b";
  return new RegExp(o + ")", "gi");
}(), gs = /hsl[a]?\(/, Zi = function(t) {
  var e = t.join(" "), r;
  if (Ht.lastIndex = 0, Ht.test(e))
    return r = gs.test(e), t[1] = li(t[1], r), t[0] = li(t[0], r, $i(t[1])), !0;
}, Re, wt = function() {
  var o = Date.now, t = 500, e = 33, r = o(), i = r, n = 1e3 / 240, s = n, a = [], u, f, l, _, c, p, g = function h(y) {
    var w = o() - i, x = y === !0, b, O, T, M;
    if ((w > t || w < 0) && (r += w - e), i += w, T = i - r, b = T - s, (b > 0 || x) && (M = ++_.frame, c = T - _.time * 1e3, _.time = T = T / 1e3, s += b + (b >= n ? 4 : n - b), O = 1), x || (u = f(h)), O)
      for (p = 0; p < a.length; p++)
        a[p](T, c, M, y);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(y) {
      return c / (1e3 / (y || 60));
    },
    wake: function() {
      Mi && (!pr && Dr() && (Et = pr = window, Er = Et.document || {}, bt.gsap = yt, (Et.gsapVersions || (Et.gsapVersions = [])).push(yt.version), ki(We || Et.GreenSockGlobals || !Et.gsap && Et || {}), ji.forEach(qi)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && _.sleep(), f = l || function(y) {
        return setTimeout(y, s - _.time * 1e3 + 1 | 0);
      }, Re = 1, g(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(u), Re = 0, f = De;
    },
    lagSmoothing: function(y, w) {
      t = y || 1 / 0, e = Math.min(w || 33, t);
    },
    fps: function(y) {
      n = 1e3 / (y || 240), s = _.time * 1e3 + n;
    },
    add: function(y, w, x) {
      var b = w ? function(O, T, M, k) {
        y(O, T, M, k), _.remove(b);
      } : y;
      return _.remove(y), a[x ? "unshift" : "push"](b), we(), b;
    },
    remove: function(y, w) {
      ~(w = a.indexOf(y)) && a.splice(w, 1) && p >= w && p--;
    },
    _listeners: a
  }, _;
}(), we = function() {
  return !Re && wt.wake();
}, L = {}, ys = /^[\d.\-M][\d.\-,\s]/, vs = /["']/g, ws = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, u, f; n < s; n++)
    u = r[n], a = n !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, a), e[i] = isNaN(f) ? f.replace(vs, "").trim() : +f, i = u.substr(a + 1).trim();
  return e;
}, Ts = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, xs = function(t) {
  var e = (t + "").split("("), r = L[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ws(e[1])] : Ts(t).split(",").map(Ai)) : L._CE && ys.test(t) ? L._CE("", t) : r;
}, Qi = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Ji = function o(t, e) {
  for (var r = t._first, i; r; )
    r instanceof _t ? o(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? o(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, ae = function(t, e) {
  return t && (Z(t) ? t : L[t] || xs(t)) || e;
}, le = function(t, e, r, i) {
  r === void 0 && (r = function(u) {
    return 1 - e(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, s;
  return pt(t, function(a) {
    L[a] = bt[a] = n, L[s = a.toLowerCase()] = r;
    for (var u in n)
      L[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = L[a + "." + u] = n[u];
  }), n;
}, Ki = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ar = function o(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / cr * (Math.asin(1 / i) || 0), a = function(l) {
    return l === 1 ? 1 : i * Math.pow(2, -10 * l) * Zn((l - s) * n) + 1;
  }, u = t === "out" ? a : t === "in" ? function(f) {
    return 1 - a(1 - f);
  } : Ki(a);
  return n = cr / n, u.config = function(f, l) {
    return o(t, f, l);
  }, u;
}, or = function o(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Ki(r);
  return i.config = function(n) {
    return o(t, n);
  }, i;
};
pt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
  var e = t < 5 ? t + 1 : t;
  le(o + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
L.Linear.easeNone = L.none = L.Linear.easeIn;
le("Elastic", ar("in"), ar("out"), ar());
(function(o, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? o * a * a : a < r ? o * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? o * (a -= 2.25 / t) * a + 0.9375 : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  le("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
le("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
le("Circ", function(o) {
  return -(xi(1 - o * o) - 1);
});
le("Sine", function(o) {
  return o === 1 ? 1 : -$n(o * qn) + 1;
});
le("Back", or("in"), or("out"), or());
L.SteppedEase = L.steps = bt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - W;
    return function(a) {
      return ((i * Ie(0, s, a) | 0) + n) * r;
    };
  }
};
ge.ease = L["quad.out"];
pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Fr += o + "," + o + "Params,";
});
var tn = function(t, e) {
  this.id = Hn++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ei, this.set = e ? e.getSetter : Ur;
}, Ae = /* @__PURE__ */ function() {
  function o(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ve(this, +e.duration, 1, 1), this.data = e.data, q && (this._ctx = q, q.data.push(this)), Re || wt.wake();
  }
  var t = o.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, ve(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (we(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ke(this, r), !n._dp || n.parent || Ii(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Rt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === W || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ri(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + oi(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + oi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? ye(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -W ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? qe(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -W ? 0 : this._rts, this.totalTime(Ie(-Math.abs(this._delay), this._tDur, n), i !== !1), Je(this), is(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (we(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== W && (this._tTime -= W)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Rt(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (dt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qe(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Kn);
    var i = lt;
    return lt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), lt = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ui(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, ui(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(Ot(this, r), dt(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, dt(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -W : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -W, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - W);
  }, t.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = Z(r) ? r : Fi, a = function() {
        var f = i.then;
        i.then = null, Z(s) && (s = s(i)) && (s.then || s === i) && (i.then = f), n(s), i.then = f;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, t.kill = function() {
    Oe(this);
  }, o;
}();
Mt(Ae.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -W,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var _t = /* @__PURE__ */ function(o) {
  Ti(t, o);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = o.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = dt(r.sortChildren), H && Rt(r.parent || H, Bt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Bi(Bt(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return Me(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return Me(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, a) {
    return Me(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, Se(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new et(i, n, Ot(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return Rt(this, et.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, a, u, f, l) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = l, s.parent = this, new et(i, s, Ot(this, u)), this;
  }, e.staggerFrom = function(i, n, s, a, u, f, l) {
    return s.runBackwards = 1, Se(s).immediateRender = dt(s.immediateRender), this.staggerTo(i, n, s, a, u, f, l);
  }, e.staggerFromTo = function(i, n, s, a, u, f, l, _) {
    return a.startAt = s, Se(a).immediateRender = dt(a.immediateRender), this.staggerTo(i, n, a, u, f, l, _);
  }, e.render = function(i, n, s) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = i <= 0 ? 0 : at(i), _ = this._zTime < 0 != i < 0 && (this._initted || !f), c, p, g, h, y, w, x, b, O, T, M, k;
    if (this !== H && l > u && i >= 0 && (l = u), l !== this._tTime || s || _) {
      if (a !== this._time && f && (l += this._time - a, i += this._time - a), c = l, O = this._start, b = this._ts, w = !b, _ && (f || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (M = this._yoyo, y = f + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(y * 100 + i, n, s);
        if (c = at(l % y), l === u ? (h = this._repeat, c = f) : (h = ~~(l / y), h && h === l / y && (c = f, h--), c > f && (c = f)), T = ye(this._tTime, y), !a && this._tTime && T !== h && this._tTime - T * y - this._dur <= 0 && (T = h), M && h & 1 && (c = f - c, k = 1), h !== T && !this._lock) {
          var D = M && T & 1, P = D === (M && h & 1);
          if (h < T && (D = !D), a = D ? 0 : l % f ? f : l, this._lock = 1, this.render(a || (k ? 0 : at(h * y)), n, !f)._lock = 0, this._tTime = l, !n && this.parent && Tt(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, P && (this._lock = 2, a = D ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !w)
            return this;
          Ji(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = os(this, at(a), at(c)), x && (l -= c - (c = x._start))), this._tTime = l, this._time = c, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && !n && !h && (Tt(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= a && i >= 0)
        for (p = this._first; p; ) {
          if (g = p._next, (p._act || c >= p._start) && p._ts && x !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (c - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (c - p._start) * p._ts, n, s), c !== this._time || !this._ts && !w) {
              x = 0, g && (l += this._zTime = -W);
              break;
            }
          }
          p = g;
        }
      else {
        p = this._last;
        for (var U = i < 0 ? i : c; p; ) {
          if (g = p._prev, (p._act || U <= p._end) && p._ts && x !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (U - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (U - p._start) * p._ts, n, s || lt && (p._initted || p._startAt)), c !== this._time || !this._ts && !w) {
              x = 0, g && (l += this._zTime = U ? -W : W);
              break;
            }
          }
          p = g;
        }
      }
      if (x && !n && (this.pause(), x.render(c >= a ? 0 : -W)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = O, Je(this), this.render(i, n, s);
      this._onUpdate && !n && Tt(this, "onUpdate", !0), (l === u && this._tTime >= this.totalDuration() || !l && a) && (O === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((i || !f) && (l === u && this._ts > 0 || !l && this._ts < 0) && $t(this, 1), !n && !(i < 0 && !a) && (l || a || !u) && (Tt(this, l === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (Ut(n) || (n = Ot(this, n, i)), !(i instanceof Ae)) {
      if (ht(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (ot(i))
        return this.addLabel(i, n);
      if (Z(i))
        i = et.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Rt(this, i, n) : this;
  }, e.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -Pt);
    for (var u = [], f = this._first; f; )
      f._start >= a && (f instanceof et ? n && u.push(f) : (s && u.push(f), i && u.push.apply(u, f.getChildren(!0, n, s)))), f = f._next;
    return u;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return ot(i) ? this.removeLabel(i) : Z(i) ? this.killTweensOf(i) : (Qe(this, i), i === this._recent && (this._recent = this._last), se(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = at(wt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = Ot(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var a = et.delayedCall(0, n || De, s);
    return a.data = "isPause", this._hasPause = 1, Rt(this, a, Ot(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = Ot(this, i); n; )
      n._start === i && n.data === "isPause" && $t(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), u = a.length; u--; )
      Wt !== a[u] && a[u].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], a = St(i), u = this._first, f = Ut(n), l; u; )
      u instanceof et ? ts(u._targets, a) && (f ? (!Wt || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (l = u.getTweensOf(a, n)).length && s.push.apply(s, l), u = u._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = Ot(s, i), u = n, f = u.startAt, l = u.onStart, _ = u.onStartParams, c = u.immediateRender, p, g = et.to(s, Mt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || W,
      onStart: function() {
        if (s.pause(), !p) {
          var y = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          g._dur !== y && ve(g, y, 0, 1).render(g._time, !0, !0), p = 1;
        }
        l && l.apply(g, _ || []);
      }
    }, n));
    return c ? g.render(0) : g;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, Mt({
      startAt: {
        time: Ot(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), fi(this, Ot(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), fi(this, Ot(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + W);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, u = this.labels, f; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (f in u)
        u[f] >= s && (u[f] += i);
    return se(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return o.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), se(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, u = Pt, f, l, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), l = a._start, l > u && s._sort && a._ts && !s._lock ? (s._lock = 1, Rt(s, a, l - a._delay, 1)._lock = 0) : u = l, l < 0 && a._ts && (n -= l, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += l / s._ts, s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), u = 0), a._end > n && a._ts && (n = a._end), a = f;
      ve(s, s === H && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (H._ts && (Ri(H, qe(i, H)), Di = wt.frame), wt.frame >= si) {
      si += xt.autoSleep || 120;
      var n = H._first;
      if ((!n || !n._ts) && xt.autoSleep && wt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || wt.sleep();
      }
    }
  }, t;
}(Ae);
Mt(_t.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var bs = function(t, e, r, i, n, s, a) {
  var u = new mt(this._pt, t, e, 0, 1, on, null, n), f = 0, l = 0, _, c, p, g, h, y, w, x;
  for (u.b = r, u.e = i, r += "", i += "", (w = ~i.indexOf("random(")) && (i = Ee(i)), s && (x = [r, i], s(x, t, e), r = x[0], i = x[1]), c = r.match(ir) || []; _ = ir.exec(i); )
    g = _[0], h = i.substring(f, _.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), g !== c[l++] && (y = parseFloat(c[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || l === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: y,
      c: g.charAt(1) === "=" ? de(y, g) - y : parseFloat(g) - y,
      m: p && p < 4 ? Math.round : 0
    }, f = ir.lastIndex);
  return u.c = f < i.length ? i.substring(f, i.length) : "", u.fp = a, (Pi.test(i) || w) && (u.e = 0), this._pt = u, u;
}, Ir = function(t, e, r, i, n, s, a, u, f, l) {
  Z(i) && (i = i(n || 0, t, s));
  var _ = t[e], c = r !== "get" ? r : Z(_) ? f ? t[e.indexOf("set") || !Z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : _, p = Z(_) ? f ? ks : sn : Lr, g;
  if (ot(i) && (~i.indexOf("random(") && (i = Ee(i)), i.charAt(1) === "=" && (g = de(c, i) + (ft(c) || 0), (g || g === 0) && (i = g))), !l || c !== i || xr)
    return !isNaN(c * i) && i !== "" ? (g = new mt(this._pt, t, e, +c || 0, i - (c || 0), typeof _ == "boolean" ? Ds : an, 0, p), f && (g.fp = f), a && g.modifier(a, this, t), this._pt = g) : (!_ && !(e in t) && Rr(e, i), bs.call(this, t, e, c, i, p, u || xt.stringFilter, f));
}, Os = function(t, e, r, i, n) {
  if (Z(t) && (t = ke(t, n, e, r, i)), !zt(t) || t.style && t.nodeType || ht(t) || bi(t))
    return ot(t) ? ke(t, n, e, r, i) : t;
  var s = {}, a;
  for (a in t)
    s[a] = ke(t[a], n, e, r, i);
  return s;
}, en = function(t, e, r, i, n, s) {
  var a, u, f, l;
  if (vt[t] && (a = new vt[t]()).init(n, a.rawVars ? e[t] : Os(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = u = new mt(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== ce))
    for (f = r._ptLookup[r._targets.indexOf(n)], l = a._props.length; l--; )
      f[a._props[l]] = u;
  return a;
}, Wt, xr, Br = function o(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, a = i.immediateRender, u = i.lazy, f = i.onUpdate, l = i.runBackwards, _ = i.yoyoEase, c = i.keyframes, p = i.autoRevert, g = t._dur, h = t._startAt, y = t._targets, w = t.parent, x = w && w.data === "nested" ? w.vars.targets : y, b = t._overwrite === "auto" && !kr, O = t.timeline, T, M, k, D, P, U, Y, V, N, rt, Q, j, J;
  if (O && (!c || !n) && (n = "none"), t._ease = ae(n, ge.ease), t._yEase = _ ? Qi(ae(_ === !0 ? n : _, ge.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !O && !!i.runBackwards, !O || c && !i.stagger) {
    if (V = y[0] ? ne(y[0]).harness : 0, j = V && i[V.prop], T = je(i, Ar), h && (h._zTime < 0 && h.progress(1), e < 0 && l && a && !p ? h.render(-1, !0) : h.revert(l && g ? Ve : Jn), h._lazy = 0), s) {
      if ($t(t._startAt = et.set(y, Mt({
        data: "isStart",
        overwrite: !1,
        parent: w,
        immediateRender: !0,
        lazy: !h && dt(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return Tt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (lt || !a && !p) && t._startAt.revert(Ve), a && g && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && g && !h) {
      if (e && (a = !1), k = Mt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !h && dt(u),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), j && (k[V.prop] = j), $t(t._startAt = et.set(y, k)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (lt ? t._startAt.revert(Ve) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        o(t._startAt, W, W);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = g && dt(u) || u && !g, M = 0; M < y.length; M++) {
      if (P = y[M], Y = P._gsap || zr(y)[M]._gsap, t._ptLookup[M] = rt = {}, mr[Y.id] && qt.length && Xe(), Q = x === y ? M : x.indexOf(P), V && (N = new V()).init(P, j || T, t, Q, x) !== !1 && (t._pt = D = new mt(t._pt, P, N.name, 0, 1, N.render, N, 0, N.priority), N._props.forEach(function(ct) {
        rt[ct] = D;
      }), N.priority && (U = 1)), !V || j)
        for (k in T)
          vt[k] && (N = en(k, T, t, Q, P, x)) ? N.priority && (U = 1) : rt[k] = D = Ir.call(t, P, k, "get", T[k], Q, x, 0, i.stringFilter);
      t._op && t._op[M] && t.kill(P, t._op[M]), b && t._pt && (Wt = t, H.killTweensOf(P, rt, t.globalTime(e)), J = !t.parent, Wt = 0), t._pt && u && (mr[Y.id] = 1);
    }
    U && un(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !J, c && e <= 0 && O.render(Pt, !0, !0);
}, Ps = function(t, e, r, i, n, s, a, u) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, _, c, p;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, p = t._targets.length; p--; ) {
      if (l = c[p][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return xr = 1, t.vars[e] = "+=0", Br(t, a), xr = 0, u ? Ce(e + " not eligible for reset") : 1;
      f.push(l);
    }
  for (p = f.length; p--; )
    _ = f[p], l = _._pt || _, l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + s * l.c, l.c = r - l.s, _.e && (_.e = tt(r) + ft(_.e)), _.b && (_.b = l.s + ft(_.b));
}, Ss = function(t, e) {
  var r = t[0] ? ne(t[0]).harness : 0, i = r && r.aliases, n, s, a, u;
  if (!i)
    return e;
  n = ue({}, e);
  for (s in i)
    if (s in n)
      for (u = i[s].split(","), a = u.length; a--; )
        n[u[a]] = n[s];
  return n;
}, Ms = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, a;
  if (ht(e))
    a = r[t] || (r[t] = []), e.forEach(function(u, f) {
      return a.push({
        t: f / (e.length - 1) * 100,
        v: u,
        e: n
      });
    });
  else
    for (s in e)
      a = r[s] || (r[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ke = function(t, e, r, i, n) {
  return Z(t) ? t.call(e, r, i, n) : ot(t) && ~t.indexOf("random(") ? Ee(t) : t;
}, rn = Fr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", nn = {};
pt(rn + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return nn[o] = 1;
});
var et = /* @__PURE__ */ function(o) {
  Ti(t, o);
  function t(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = o.call(this, s ? i : Se(i)) || this;
    var u = a.vars, f = u.duration, l = u.delay, _ = u.immediateRender, c = u.stagger, p = u.overwrite, g = u.keyframes, h = u.defaults, y = u.scrollTrigger, w = u.yoyoEase, x = i.parent || H, b = (ht(r) || bi(r) ? Ut(r[0]) : "length" in i) ? [r] : St(r), O, T, M, k, D, P, U, Y;
    if (a._targets = b.length ? zr(b) : Ce("GSAP target " + r + " not found. https://gsap.com", !xt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, g || c || Ue(f) || Ue(l)) {
      if (i = a.vars, O = a.timeline = new _t({
        data: "nested",
        defaults: h || {},
        targets: x && x.data === "nested" ? x.vars.targets : b
      }), O.kill(), O.parent = O._dp = Bt(a), O._start = 0, c || Ue(f) || Ue(l)) {
        if (k = b.length, U = c && Ni(c), zt(c))
          for (D in c)
            ~rn.indexOf(D) && (Y || (Y = {}), Y[D] = c[D]);
        for (T = 0; T < k; T++)
          M = je(i, nn), M.stagger = 0, w && (M.yoyoEase = w), Y && ue(M, Y), P = b[T], M.duration = +ke(f, Bt(a), T, P, b), M.delay = (+ke(l, Bt(a), T, P, b) || 0) - a._delay, !c && k === 1 && M.delay && (a._delay = l = M.delay, a._start += l, M.delay = 0), O.to(P, M, U ? U(T, P, b) : 0), O._ease = L.none;
        O.duration() ? f = l = 0 : a.timeline = 0;
      } else if (g) {
        Se(Mt(O.vars.defaults, {
          ease: "none"
        })), O._ease = ae(g.ease || i.ease || "none");
        var V = 0, N, rt, Q;
        if (ht(g))
          g.forEach(function(j) {
            return O.to(b, j, ">");
          }), O.duration();
        else {
          M = {};
          for (D in g)
            D === "ease" || D === "easeEach" || Ms(D, g[D], M, g.easeEach);
          for (D in M)
            for (N = M[D].sort(function(j, J) {
              return j.t - J.t;
            }), V = 0, T = 0; T < N.length; T++)
              rt = N[T], Q = {
                ease: rt.e,
                duration: (rt.t - (T ? N[T - 1].t : 0)) / 100 * f
              }, Q[D] = rt.v, O.to(b, Q, V), V += Q.duration;
          O.duration() < f && O.to({}, {
            duration: f - O.duration()
          });
        }
      }
      f || a.duration(f = O.duration());
    } else
      a.timeline = 0;
    return p === !0 && !kr && (Wt = Bt(a), H.killTweensOf(b), Wt = 0), Rt(x, Bt(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !f && !g && a._start === at(x._time) && dt(_) && ns(Bt(a)) && x.data !== "nested") && (a._tTime = -W, a.render(Math.max(0, -l) || 0)), y && Bi(Bt(a), y), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var a = this._time, u = this._tDur, f = this._dur, l = i < 0, _ = i > u - W && !l ? u : i < W ? 0 : i, c, p, g, h, y, w, x, b, O;
    if (!f)
      as(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l) {
      if (c = _, b = this.timeline, this._repeat) {
        if (h = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(h * 100 + i, n, s);
        if (c = at(_ % h), _ === u ? (g = this._repeat, c = f) : (g = ~~(_ / h), g && g === at(_ / h) && (c = f, g--), c > f && (c = f)), w = this._yoyo && g & 1, w && (O = this._yEase, c = f - c), y = ye(this._tTime, h), c === a && !s && this._initted && g === y)
          return this._tTime = _, this;
        g !== y && (b && this._yEase && Ji(b, w), this.vars.repeatRefresh && !w && !this._lock && this._time !== h && this._initted && (this._lock = s = 1, this.render(at(h * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Li(this, l ? i : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && g !== y))
          return this;
        if (f !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (O || this._ease)(c / f), this._from && (this.ratio = x = 1 - x), c && !a && !n && !g && (Tt(this, "onStart"), this._tTime !== _))
        return this;
      for (p = this._pt; p; )
        p.r(x, p.d), p = p._next;
      b && b.render(i < 0 ? i : b._dur * b._ease(c / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (l && gr(this, i, n, s), Tt(this, "onUpdate")), this._repeat && g !== y && this.vars.onRepeat && !n && this.parent && Tt(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (l && !this._onUpdate && gr(this, i, !0, !0), (i || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && $t(this, 1), !n && !(l && !a) && (_ || a || w) && (Tt(this, _ === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, a, u) {
    Re || wt.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || Br(this, f), l = this._ease(f / this._dur), Ps(this, i, n, s, a, l, f, u) ? this.resetTo(i, n, s, a, 1) : (Ke(this, 0), this.parent || zi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Oe(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Wt && Wt.vars.overwrite !== !0)._first || Oe(this), this.parent && s !== this.timeline.totalDuration() && ve(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, u = i ? St(i) : a, f = this._ptLookup, l = this._pt, _, c, p, g, h, y, w;
    if ((!n || n === "all") && rs(a, u))
      return n === "all" && (this._pt = 0), Oe(this);
    for (_ = this._op = this._op || [], n !== "all" && (ot(n) && (h = {}, pt(n, function(x) {
      return h[x] = 1;
    }), n = h), n = Ss(a, n)), w = a.length; w--; )
      if (~u.indexOf(a[w])) {
        c = f[w], n === "all" ? (_[w] = n, g = c, p = {}) : (p = _[w] = _[w] || {}, g = n);
        for (h in g)
          y = c && c[h], y && ((!("kill" in y.d) || y.d.kill(h) === !0) && Qe(this, y, "_pt"), delete c[h]), p !== "all" && (p[h] = 1);
      }
    return this._initted && !this._pt && l && Oe(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return Me(1, arguments);
  }, t.delayedCall = function(i, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(i, n, s) {
    return Me(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return H.killTweensOf(i, n, s);
  }, t;
}(Ae);
Mt(et.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
pt("staggerTo,staggerFrom,staggerFromTo", function(o) {
  et[o] = function() {
    var t = new _t(), e = vr.call(arguments, 0);
    return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
  };
});
var Lr = function(t, e, r) {
  return t[e] = r;
}, sn = function(t, e, r) {
  return t[e](r);
}, ks = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Cs = function(t, e, r) {
  return t.setAttribute(e, r);
}, Ur = function(t, e) {
  return Z(t[e]) ? sn : Cr(t[e]) && t.setAttribute ? Cs : Lr;
}, an = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Ds = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, on = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Vr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, Es = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, Rs = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Qe(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, As = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, un = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, mt = /* @__PURE__ */ function() {
  function o(e, r, i, n, s, a, u, f, l) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || an, this.d = u || this, this.set = f || Lr, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = o.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = As, this.m = r, this.mt = n, this.tween = i;
  }, o;
}();
pt(Fr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Ar[o] = 1;
});
bt.TweenMax = bt.TweenLite = et;
bt.TimelineLite = bt.TimelineMax = _t;
H = new _t({
  sortChildren: !1,
  defaults: ge,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
xt.stringFilter = Zi;
var oe = [], Ge = {}, Fs = [], hi = 0, zs = 0, ur = function(t) {
  return (Ge[t] || Fs).map(function(e) {
    return e();
  });
}, br = function() {
  var t = Date.now(), e = [];
  t - hi > 2 && (ur("matchMediaInit"), oe.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, u, f;
    for (a in i)
      s = Et.matchMedia(i[a]).matches, s && (u = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (r.revert(), u && e.push(r));
  }), ur("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), hi = t, ur("matchMedia"));
}, fn = /* @__PURE__ */ function() {
  function o(e, r) {
    this.selector = r && wr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = zs++, e && this.add(e);
  }
  var t = o.prototype;
  return t.add = function(r, i, n) {
    Z(r) && (n = i, i = r, r = Z);
    var s = this, a = function() {
      var f = q, l = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = wr(n)), q = s, _ = i.apply(s, arguments), Z(_) && s._r.push(_), q = f, s.selector = l, s.isReverted = !1, _;
    };
    return s.last = a, r === Z ? a(s, function(u) {
      return s.add(null, u);
    }) : r ? s[r] = a : a;
  }, t.ignore = function(r) {
    var i = q;
    q = null, r(this), q = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? r.push.apply(r, i.getTweens()) : i instanceof et && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var a = n.getTweens(), u = n.data.length, f; u--; )
        f = n.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return a.splice(a.indexOf(l), 1);
        }));
      for (a.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, _) {
        return _.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(r);
      }), u = n.data.length; u--; )
        f = n.data[u], f instanceof _t ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof et) && f.revert && f.revert(r);
      n._r.forEach(function(l) {
        return l(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var s = oe.length; s--; )
        oe[s].id === this.id && oe.splice(s, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, o;
}(), Is = /* @__PURE__ */ function() {
  function o(e) {
    this.contexts = [], this.scope = e, q && q.data.push(this);
  }
  var t = o.prototype;
  return t.add = function(r, i, n) {
    zt(r) || (r = {
      matches: r
    });
    var s = new fn(0, n || this.scope), a = s.conditions = {}, u, f, l;
    q && !s.selector && (s.selector = q.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (f in r)
      f === "all" ? l = 1 : (u = Et.matchMedia(r[f]), u && (oe.indexOf(s) < 0 && oe.push(s), (a[f] = u.matches) && (l = 1), u.addListener ? u.addListener(br) : u.addEventListener("change", br)));
    return l && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, o;
}(), He = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return qi(i);
    });
  },
  timeline: function(t) {
    return new _t(t);
  },
  getTweensOf: function(t, e) {
    return H.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    ot(t) && (t = St(t)[0]);
    var n = ne(t || {}).get, s = r ? Fi : Ai;
    return r === "native" && (r = ""), t && (e ? s((vt[e] && vt[e].get || n)(t, e, r, i)) : function(a, u, f) {
      return s((vt[a] && vt[a].get || n)(t, a, u, f));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = St(t), t.length > 1) {
      var i = t.map(function(l) {
        return yt.quickSetter(l, e, r);
      }), n = i.length;
      return function(l) {
        for (var _ = n; _--; )
          i[_](l);
      };
    }
    t = t[0] || {};
    var s = vt[e], a = ne(t), u = a.harness && (a.harness.aliases || {})[e] || e, f = s ? function(l) {
      var _ = new s();
      ce._pt = 0, _.init(t, r ? l + r : l, ce, 0, [t]), _.render(1, _), ce._pt && Vr(1, ce);
    } : a.set(t, u);
    return s ? f : function(l) {
      return f(t, u, r ? l + r : l, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = yt.to(t, ue((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(u, f, l) {
      return n.resetTo(e, u, f, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return H.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = ae(t.ease, ge.ease)), ai(ge, t || {});
  },
  config: function(t) {
    return ai(xt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !vt[a] && !bt[a] && Ce(e + " effect requires " + a + " plugin.");
    }), nr[e] = function(a, u, f) {
      return r(St(a), Mt(u || {}, n), f);
    }, s && (_t.prototype[e] = function(a, u, f) {
      return this.add(nr[e](a, zt(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    L[t] = ae(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? ae(t, e) : L;
  },
  getById: function(t) {
    return H.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new _t(t), i, n;
    for (r.smoothChildTiming = dt(t.smoothChildTiming), H.remove(r), r._dp = 0, r._time = r._tTime = H._time, i = H._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof et && i.vars.onComplete === i._targets[0])) && Rt(r, i, i._start - i._delay), i = n;
    return Rt(H, r, 0), r;
  },
  context: function(t, e) {
    return t ? new fn(t, e) : q;
  },
  matchMedia: function(t) {
    return new Is(t);
  },
  matchMediaRefresh: function() {
    return oe.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || br();
  },
  addEventListener: function(t, e) {
    var r = Ge[t] || (Ge[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Ge[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: ds,
    wrapYoyo: ps,
    distribute: Ni,
    random: Yi,
    snap: Gi,
    normalize: cs,
    getUnit: ft,
    clamp: fs,
    splitColor: Hi,
    toArray: St,
    selector: wr,
    mapRange: Xi,
    pipe: hs,
    unitize: _s,
    interpolate: ms,
    shuffle: Vi
  },
  install: ki,
  effects: nr,
  ticker: wt,
  updateRoot: _t.updateRoot,
  plugins: vt,
  globalTimeline: H,
  core: {
    PropTween: mt,
    globals: Ci,
    Tween: et,
    Timeline: _t,
    Animation: Ae,
    getCache: ne,
    _removeLinkedListItem: Qe,
    reverting: function() {
      return lt;
    },
    context: function(t) {
      return t && q && (q.data.push(t), t._ctx = q), q;
    },
    suppressOverwrites: function(t) {
      return kr = t;
    }
  }
};
pt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return He[o] = et[o];
});
wt.add(_t.updateRoot);
ce = He.to({}, {
  duration: 0
});
var Bs = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Ls = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = Bs(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, fr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var u, f;
        if (ot(n) && (u = {}, pt(n, function(l) {
          return u[l] = 1;
        }), n = u), e) {
          u = {};
          for (f in n)
            u[f] = e(n[f]);
          n = u;
        }
        Ls(a, n);
      };
    }
  };
}, yt = He.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, a, u;
    this.tween = r;
    for (s in e)
      u = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (u || 0) + "", e[s], i, n, 0, 0, s), a.op = s, a.b = u, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      lt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, fr("roundProps", Tr), fr("modifiers"), fr("snap", Gi)) || He;
et.version = _t.version = yt.version = "3.12.5";
Mi = 1;
Dr() && we();
L.Power0;
L.Power1;
L.Power2;
L.Power3;
L.Power4;
L.Linear;
L.Quad;
L.Cubic;
L.Quart;
L.Quint;
L.Strong;
L.Elastic;
L.Back;
L.SteppedEase;
L.Bounce;
L.Sine;
L.Expo;
L.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _i, Xt, pe, Nr, ie, ci, Gr, Us = function() {
  return typeof window < "u";
}, Vt = {}, ee = 180 / Math.PI, me = Math.PI / 180, he = Math.atan2, di = 1e8, Yr = /([A-Z])/g, Vs = /(left|right|width|margin|padding|x)/i, Ns = /[\s,\(]\S/, At = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Or = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Gs = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ys = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ws = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, ln = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, hn = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Xs = function(t, e, r) {
  return t.style[e] = r;
}, js = function(t, e, r) {
  return t.style.setProperty(e, r);
}, qs = function(t, e, r) {
  return t._gsap[e] = r;
}, Hs = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, $s = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Zs = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, $ = "transform", gt = $ + "Origin", Qs = function o(t, e) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (t in Vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = At[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = Lt(i, a);
      }) : this.tfm[t] = s.x ? s[t] : Lt(i, t), t === gt && (this.tfm.zOrigin = s.zOrigin);
    else
      return At.transform.split(",").forEach(function(a) {
        return o.call(r, a, e);
      });
    if (this.props.indexOf($) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(gt, e, "")), t = $;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, _n = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Js = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Yr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Gr(), (!n || !n.isStart) && !r[$] && (_n(r), i.zOrigin && r[gt] && (r[gt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, cn = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Js,
    save: Qs
  };
  return t._gsap || yt.core.getCache(t), e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, dn, Pr = function(t, e) {
  var r = Xt.createElementNS ? Xt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xt.createElement(t);
  return r && r.style ? r : Xt.createElement(t);
}, Ft = function o(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Yr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && o(t, Te(e) || e, 1) || "";
}, pi = "O,Moz,ms,Ms,Webkit".split(","), Te = function(t, e, r) {
  var i = e || ie, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(pi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? pi[s] : "") + t;
}, Sr = function() {
  Us() && window.document && (_i = window, Xt = _i.document, pe = Xt.documentElement, ie = Pr("div") || {
    style: {}
  }, Pr("div"), $ = Te($), gt = $ + "Origin", ie.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", dn = !!Te("perspective"), Gr = yt.core.reverting, Nr = 1);
}, lr = function o(t) {
  var e = Pr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (pe.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), pe.removeChild(e), this.style.cssText = n, s;
}, mi = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, pn = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = lr.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === lr || (e = lr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +mi(t, ["x", "cx", "x1"]) || 0,
    y: +mi(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, mn = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && pn(t));
}, fe = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in Vt && e !== gt && (e = $), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(Yr, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, jt = function(t, e, r, i, n, s) {
  var a = new mt(t._pt, e, r, 0, 1, s ? hn : ln);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, gi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Ks = {
  grid: 1,
  flex: 1
}, Zt = function o(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = ie.style, u = Vs.test(e), f = t.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (u ? "Width" : "Height"), _ = 100, c = i === "px", p = i === "%", g, h, y, w;
  if (i === s || !n || gi[i] || gi[s])
    return n;
  if (s !== "px" && !c && (n = o(t, e, r, "px")), w = t.getCTM && mn(t), (p || s === "%") && (Vt[e] || ~e.indexOf("adius")))
    return g = w ? t.getBBox()[u ? "width" : "height"] : t[l], tt(p ? n / g * _ : n / 100 * g);
  if (a[u ? "width" : "height"] = _ + (c ? s : i), h = ~e.indexOf("adius") || i === "em" && t.appendChild && !f ? t : t.parentNode, w && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Xt || !h.appendChild) && (h = Xt.body), y = h._gsap, y && p && y.width && u && y.time === wt.time && !y.uncache)
    return tt(n / y.width * _);
  if (p && (e === "height" || e === "width")) {
    var x = t.style[e];
    t.style[e] = _ + i, g = t[l], x ? t.style[e] = x : fe(t, e);
  } else
    (p || s === "%") && !Ks[Ft(h, "display")] && (a.position = Ft(t, "position")), h === t && (a.position = "static"), h.appendChild(ie), g = ie[l], h.removeChild(ie), a.position = "absolute";
  return u && p && (y = ne(h), y.time = wt.time, y.width = h[l]), tt(c ? g * n / _ : g && n ? _ / g * n : 0);
}, Lt = function(t, e, r, i) {
  var n;
  return Nr || Sr(), e in At && e !== "transform" && (e = At[e], ~e.indexOf(",") && (e = e.split(",")[0])), Vt[e] && e !== "transform" ? (n = ze(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ze(Ft(t, gt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = $e[e] && $e[e](t, e, r) || Ft(t, e) || Ei(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Zt(t, e, n, r) + r : n;
}, ta = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Te(e, t, 1), s = n && Ft(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = Ft(t, "borderTopColor"));
  }
  var a = new mt(this._pt, t.style, e, 0, 1, on), u = 0, f = 0, l, _, c, p, g, h, y, w, x, b, O, T;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (h = t.style[e], t.style[e] = i, i = Ft(t, e) || i, h ? t.style[e] = h : fe(t, e)), l = [r, i], Zi(l), r = l[0], i = l[1], c = r.match(_e) || [], T = i.match(_e) || [], T.length) {
    for (; _ = _e.exec(i); )
      y = _[0], x = i.substring(u, _.index), g ? g = (g + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1), y !== (h = c[f++] || "") && (p = parseFloat(h) || 0, O = h.substr((p + "").length), y.charAt(1) === "=" && (y = de(p, y) + O), w = parseFloat(y), b = y.substr((w + "").length), u = _e.lastIndex - b.length, b || (b = b || xt.units[e] || O, u === i.length && (i += b, a.e += b)), O !== b && (p = Zt(t, e, h, b) || 0), a._pt = {
        _next: a._pt,
        p: x || f === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: w - p,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? hn : ln;
  return Pi.test(i) && (a.e = 0), this._pt = a, a;
}, yi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ea = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = yi[r] || r, e[1] = yi[i] || i, e.join(" ");
}, ra = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, a, u, f;
    if (n === "all" || n === !0)
      i.cssText = "", u = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], Vt[a] && (u = 1, a = a === "transformOrigin" ? gt : $), fe(r, a);
    u && (fe(r, $), s && (s.svg && r.removeAttribute("transform"), ze(r, 1), s.uncache = 1, _n(i)));
  }
}, $e = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new mt(t._pt, e, r, 0, 0, ra);
      return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Fe = [1, 0, 0, 1, 0, 0], gn = {}, yn = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, vi = function(t) {
  var e = Ft(t, $);
  return yn(e) ? Fe : e.substr(7).match(Oi).map(tt);
}, Wr = function(t, e) {
  var r = t._gsap || ne(t), i = t.style, n = vi(t), s, a, u, f;
  return r.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Fe : n) : (n === Fe && !t.offsetParent && t !== pe && !r.svg && (u = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (f = 1, a = t.nextElementSibling, pe.appendChild(t)), n = vi(t), u ? i.display = u : fe(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : pe.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Mr = function(t, e, r, i, n, s) {
  var a = t._gsap, u = n || Wr(t, !0), f = a.xOrigin || 0, l = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, p = u[0], g = u[1], h = u[2], y = u[3], w = u[4], x = u[5], b = e.split(" "), O = parseFloat(b[0]) || 0, T = parseFloat(b[1]) || 0, M, k, D, P;
  r ? u !== Fe && (k = p * y - g * h) && (D = O * (y / k) + T * (-h / k) + (h * x - y * w) / k, P = O * (-g / k) + T * (p / k) - (p * x - g * w) / k, O = D, T = P) : (M = pn(t), O = M.x + (~b[0].indexOf("%") ? O / 100 * M.width : O), T = M.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * M.height : T)), i || i !== !1 && a.smooth ? (w = O - f, x = T - l, a.xOffset = _ + (w * p + x * h) - w, a.yOffset = c + (w * g + x * y) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = O, a.yOrigin = T, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[gt] = "0px 0px", s && (jt(s, a, "xOrigin", f, O), jt(s, a, "yOrigin", l, T), jt(s, a, "xOffset", _, a.xOffset), jt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", O + " " + T);
}, ze = function(t, e) {
  var r = t._gsap || new tn(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", a = "deg", u = getComputedStyle(t), f = Ft(t, gt) || "0", l, _, c, p, g, h, y, w, x, b, O, T, M, k, D, P, U, Y, V, N, rt, Q, j, J, ct, Jt, Nt, Gt, Ct, z, ut, It;
  return l = _ = c = h = y = w = x = b = O = 0, p = g = 1, r.svg = !!(t.getCTM && mn(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[$] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[$] !== "none" ? u[$] : "")), i.scale = i.rotate = i.translate = "none"), k = Wr(t, r.svg), r.svg && (r.uncache ? (ct = t.getBBox(), f = r.xOrigin - ct.x + "px " + (r.yOrigin - ct.y) + "px", J = "") : J = !e && t.getAttribute("data-svg-origin"), Mr(t, J || f, !!J || r.originIsAbsolute, r.smooth !== !1, k)), T = r.xOrigin || 0, M = r.yOrigin || 0, k !== Fe && (Y = k[0], V = k[1], N = k[2], rt = k[3], l = Q = k[4], _ = j = k[5], k.length === 6 ? (p = Math.sqrt(Y * Y + V * V), g = Math.sqrt(rt * rt + N * N), h = Y || V ? he(V, Y) * ee : 0, x = N || rt ? he(N, rt) * ee + h : 0, x && (g *= Math.abs(Math.cos(x * me))), r.svg && (l -= T - (T * Y + M * N), _ -= M - (T * V + M * rt))) : (It = k[6], z = k[7], Nt = k[8], Gt = k[9], Ct = k[10], ut = k[11], l = k[12], _ = k[13], c = k[14], D = he(It, Ct), y = D * ee, D && (P = Math.cos(-D), U = Math.sin(-D), J = Q * P + Nt * U, ct = j * P + Gt * U, Jt = It * P + Ct * U, Nt = Q * -U + Nt * P, Gt = j * -U + Gt * P, Ct = It * -U + Ct * P, ut = z * -U + ut * P, Q = J, j = ct, It = Jt), D = he(-N, Ct), w = D * ee, D && (P = Math.cos(-D), U = Math.sin(-D), J = Y * P - Nt * U, ct = V * P - Gt * U, Jt = N * P - Ct * U, ut = rt * U + ut * P, Y = J, V = ct, N = Jt), D = he(V, Y), h = D * ee, D && (P = Math.cos(D), U = Math.sin(D), J = Y * P + V * U, ct = Q * P + j * U, V = V * P - Y * U, j = j * P - Q * U, Y = J, Q = ct), y && Math.abs(y) + Math.abs(h) > 359.9 && (y = h = 0, w = 180 - w), p = tt(Math.sqrt(Y * Y + V * V + N * N)), g = tt(Math.sqrt(j * j + It * It)), D = he(Q, j), x = Math.abs(D) > 2e-4 ? D * ee : 0, O = ut ? 1 / (ut < 0 ? -ut : ut) : 0), r.svg && (J = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !yn(Ft(t, $)), J && t.setAttribute("transform", J))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (p *= -1, x += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, x += x <= 0 ? 180 : -180)), e = e || r.uncache, r.x = l - ((r.xPercent = l && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = c + s, r.scaleX = tt(p), r.scaleY = tt(g), r.rotation = tt(h) + a, r.rotationX = tt(y) + a, r.rotationY = tt(w) + a, r.skewX = x + a, r.skewY = b + a, r.transformPerspective = O + s, (r.zOrigin = parseFloat(f.split(" ")[2]) || !e && r.zOrigin || 0) && (i[gt] = Ze(f)), r.xOffset = r.yOffset = 0, r.force3D = xt.force3D, r.renderTransform = r.svg ? na : dn ? vn : ia, r.uncache = 0, r;
}, Ze = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, hr = function(t, e, r) {
  var i = ft(e);
  return tt(parseFloat(e) + parseFloat(Zt(t, "x", r + "px", i))) + i;
}, ia = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vn(t, e);
}, Kt = "0deg", be = "0px", te = ") ", vn = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, u = r.z, f = r.rotation, l = r.rotationY, _ = r.rotationX, c = r.skewX, p = r.skewY, g = r.scaleX, h = r.scaleY, y = r.transformPerspective, w = r.force3D, x = r.target, b = r.zOrigin, O = "", T = w === "auto" && t && t !== 1 || w === !0;
  if (b && (_ !== Kt || l !== Kt)) {
    var M = parseFloat(l) * me, k = Math.sin(M), D = Math.cos(M), P;
    M = parseFloat(_) * me, P = Math.cos(M), s = hr(x, s, k * P * -b), a = hr(x, a, -Math.sin(M) * -b), u = hr(x, u, D * P * -b + b);
  }
  y !== be && (O += "perspective(" + y + te), (i || n) && (O += "translate(" + i + "%, " + n + "%) "), (T || s !== be || a !== be || u !== be) && (O += u !== be || T ? "translate3d(" + s + ", " + a + ", " + u + ") " : "translate(" + s + ", " + a + te), f !== Kt && (O += "rotate(" + f + te), l !== Kt && (O += "rotateY(" + l + te), _ !== Kt && (O += "rotateX(" + _ + te), (c !== Kt || p !== Kt) && (O += "skew(" + c + ", " + p + te), (g !== 1 || h !== 1) && (O += "scale(" + g + ", " + h + te), x.style[$] = O || "translate(0, 0)";
}, na = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, u = r.rotation, f = r.skewX, l = r.skewY, _ = r.scaleX, c = r.scaleY, p = r.target, g = r.xOrigin, h = r.yOrigin, y = r.xOffset, w = r.yOffset, x = r.forceCSS, b = parseFloat(s), O = parseFloat(a), T, M, k, D, P;
  u = parseFloat(u), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, u += l), u || f ? (u *= me, f *= me, T = Math.cos(u) * _, M = Math.sin(u) * _, k = Math.sin(u - f) * -c, D = Math.cos(u - f) * c, f && (l *= me, P = Math.tan(f - l), P = Math.sqrt(1 + P * P), k *= P, D *= P, l && (P = Math.tan(l), P = Math.sqrt(1 + P * P), T *= P, M *= P)), T = tt(T), M = tt(M), k = tt(k), D = tt(D)) : (T = _, D = c, M = k = 0), (b && !~(s + "").indexOf("px") || O && !~(a + "").indexOf("px")) && (b = Zt(p, "x", s, "px"), O = Zt(p, "y", a, "px")), (g || h || y || w) && (b = tt(b + g - (g * T + h * k) + y), O = tt(O + h - (g * M + h * D) + w)), (i || n) && (P = p.getBBox(), b = tt(b + i / 100 * P.width), O = tt(O + n / 100 * P.height)), P = "matrix(" + T + "," + M + "," + k + "," + D + "," + b + "," + O + ")", p.setAttribute("transform", P), x && (p.style[$] = P);
}, sa = function(t, e, r, i, n) {
  var s = 360, a = ot(n), u = parseFloat(n) * (a && ~n.indexOf("rad") ? ee : 1), f = u - i, l = i + f + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), _ === "cw" && f < 0 ? f = (f + s * di) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * di) % s - ~~(f / s) * s)), t._pt = c = new mt(t._pt, e, r, i, f, Gs), c.e = l, c.u = "deg", t._props.push(r), c;
}, wi = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, aa = function(t, e, r) {
  var i = wi({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, u, f, l, _, c, p, g;
  i.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), s[$] = e, a = ze(r, 1), fe(r, $), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[$], s[$] = e, a = ze(r, 1), s[$] = f);
  for (u in Vt)
    f = i[u], l = a[u], f !== l && n.indexOf(u) < 0 && (p = ft(f), g = ft(l), _ = p !== g ? Zt(r, u, f, g) : parseFloat(f), c = parseFloat(l), t._pt = new mt(t._pt, a, u, _, c - _, Or), t._pt.u = g || 0, t._props.push(u));
  wi(a, i);
};
pt("padding,margin,Width,Radius", function(o, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? o + a : "border" + a + o;
  });
  $e[t > 1 ? "border" + o : o] = function(a, u, f, l, _) {
    var c, p;
    if (arguments.length < 4)
      return c = s.map(function(g) {
        return Lt(a, g, f);
      }), p = c.join(" "), p.split(c[0]).length === 5 ? c[0] : p;
    c = (l + "").split(" "), p = {}, s.forEach(function(g, h) {
      return p[g] = c[h] = c[h] || c[(h - 1) / 2 | 0];
    }), a.init(u, p, _);
  };
});
var wn = {
  name: "css",
  register: Sr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, a = t.style, u = r.vars.startAt, f, l, _, c, p, g, h, y, w, x, b, O, T, M, k, D;
    Nr || Sr(), this.styles = this.styles || cn(t), D = this.styles.props, this.tween = r;
    for (h in e)
      if (h !== "autoRound" && (l = e[h], !(vt[h] && en(h, e, r, i, t, n)))) {
        if (p = typeof l, g = $e[h], p === "function" && (l = l.call(r, i, t, n), p = typeof l), p === "string" && ~l.indexOf("random(") && (l = Ee(l)), g)
          g(this, t, h, l, r) && (k = 1);
        else if (h.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(h) + "").trim(), l += "", Ht.lastIndex = 0, Ht.test(f) || (y = ft(f), w = ft(l)), w ? y !== w && (f = Zt(t, h, f, w) + w) : y && (l += y), this.add(a, "setProperty", f, l, i, n, 0, 0, h), s.push(h), D.push(h, 0, a[h]);
        else if (p !== "undefined") {
          if (u && h in u ? (f = typeof u[h] == "function" ? u[h].call(r, i, t, n) : u[h], ot(f) && ~f.indexOf("random(") && (f = Ee(f)), ft(f + "") || f === "auto" || (f += xt.units[h] || ft(Lt(t, h)) || ""), (f + "").charAt(1) === "=" && (f = Lt(t, h))) : f = Lt(t, h), c = parseFloat(f), x = p === "string" && l.charAt(1) === "=" && l.substr(0, 2), x && (l = l.substr(2)), _ = parseFloat(l), h in At && (h === "autoAlpha" && (c === 1 && Lt(t, "visibility") === "hidden" && _ && (c = 0), D.push("visibility", 0, a.visibility), jt(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), h !== "scale" && h !== "transform" && (h = At[h], ~h.indexOf(",") && (h = h.split(",")[0]))), b = h in Vt, b) {
            if (this.styles.save(h), O || (T = t._gsap, T.renderTransform && !e.parseTransform || ze(t, e.parseTransform), M = e.smoothOrigin !== !1 && T.smooth, O = this._pt = new mt(this._pt, a, $, 0, 1, T.renderTransform, T, 0, -1), O.dep = 1), h === "scale")
              this._pt = new mt(this._pt, T, "scaleY", T.scaleY, (x ? de(T.scaleY, x + _) : _) - T.scaleY || 0, Or), this._pt.u = 0, s.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              D.push(gt, 0, a[gt]), l = ea(l), T.svg ? Mr(t, l, 0, M, 0, this) : (w = parseFloat(l.split(" ")[2]) || 0, w !== T.zOrigin && jt(this, T, "zOrigin", T.zOrigin, w), jt(this, a, h, Ze(f), Ze(l)));
              continue;
            } else if (h === "svgOrigin") {
              Mr(t, l, 1, M, 0, this);
              continue;
            } else if (h in gn) {
              sa(this, T, h, c, x ? de(c, x + l) : l);
              continue;
            } else if (h === "smoothOrigin") {
              jt(this, T, "smooth", T.smooth, l);
              continue;
            } else if (h === "force3D") {
              T[h] = l;
              continue;
            } else if (h === "transform") {
              aa(this, l, t);
              continue;
            }
          } else h in a || (h = Te(h) || h);
          if (b || (_ || _ === 0) && (c || c === 0) && !Ns.test(l) && h in a)
            y = (f + "").substr((c + "").length), _ || (_ = 0), w = ft(l) || (h in xt.units ? xt.units[h] : y), y !== w && (c = Zt(t, h, f, w)), this._pt = new mt(this._pt, b ? T : a, h, c, (x ? de(c, x + _) : _) - c, !b && (w === "px" || h === "zIndex") && e.autoRound !== !1 ? Ws : Or), this._pt.u = w || 0, y !== w && w !== "%" && (this._pt.b = f, this._pt.r = Ys);
          else if (h in a)
            ta.call(this, t, h, f, x ? x + l : l);
          else if (h in t)
            this.add(t, h, f || t[h], x ? x + l : l, i, n);
          else if (h !== "parseTransform") {
            Rr(h, l);
            continue;
          }
          b || (h in a ? D.push(h, 0, a[h]) : D.push(h, 1, f || t[h])), s.push(h);
        }
      }
    k && un(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Gr())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: Lt,
  aliases: At,
  getSetter: function(t, e, r) {
    var i = At[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Vt && e !== gt && (t._gsap.x || Lt(t, "x")) ? r && ci === r ? e === "scale" ? Hs : qs : (ci = r || {}) && (e === "scale" ? $s : Zs) : t.style && !Cr(t.style[e]) ? Xs : ~e.indexOf("-") ? js : Ur(t, e);
  },
  core: {
    _removeProperty: fe,
    _getMatrix: Wr
  }
};
yt.utils.checkPrefix = Te;
yt.core.getStyleSaver = cn;
(function(o, t, e, r) {
  var i = pt(o + "," + t + "," + e, function(n) {
    Vt[n] = 1;
  });
  pt(t, function(n) {
    xt.units[n] = "deg", gn[n] = 1;
  }), At[i[13]] = o + "," + t, pt(r, function(n) {
    var s = n.split(":");
    At[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  xt.units[o] = "px";
});
yt.registerPlugin(wn);
var Ye = yt.registerPlugin(wn) || yt;
Ye.core.Tween;
class la {
  constructor(t, e, r, i) {
    Yt(this, "deltaTime", 0);
    Yt(this, "clock", new Un());
    this.threeJSBase = t, this.commonDebugOpt = e, this.updatables = r, this.allPassedTime = i, Ye.ticker.remove(Ye.updateRoot);
  }
  get getDeltaTime() {
    return this.deltaTime;
  }
  handleUpdate() {
    this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale, this.allPassedTime.value += this.deltaTime, _r.update(this.deltaTime), Ye.updateRoot(this.allPassedTime.value), this.updatables.forEach((t) => {
      t.update(this.deltaTime, this.threeJSBase.camera);
    });
  }
}
function ha(o, t) {
  const e = o.folders.find((r) => r._title === t);
  if (!e)
    throw new Error(`Folder with name ${t} not found`);
  return e;
}
function _a(o, t, e, r = "XYZ") {
  const i = o.toArray(), n = t.toArray(), s = i.map((a, u) => a + (n[u] - a) * e);
  return new Vn(s[0], s[1], s[2], r);
}
async function ca(o) {
  return new Promise((t) => {
    setTimeout(() => {
      t();
    }, o);
  });
}
function da(o, t) {
  const e = o.frames.find(
    (u) => u.filename.toLowerCase() === t.toLowerCase()
  );
  if (!e) throw new Error(`Frame with id ${t} not found in atlas config`);
  const { x: r, y: i, h: n } = e.frame, { size: s } = o.meta, a = i / s.h;
  return new Nn(r / s.w, a);
}
function pa(o) {
  return o.x * o.x + o.y * o.y + o.z * o.z;
}
function ma(o, t, e, r, i) {
  return (o - t) / (e - t) * (i - r) + r;
}
class ga {
  constructor(...t) {
    Yt(this, "args");
    this.args = t;
  }
}
function ya(o, t) {
  const e = (r) => {
    t(...r.detail);
  };
  return document.addEventListener(o.name, e, { passive: !0 }), {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(o.name, e)
  };
}
function va(o) {
  const t = new CustomEvent(o.constructor.name, {
    detail: o.args
  });
  document.dispatchEvent(t);
}
export {
  Le as BASETYPES,
  la as BaseUpdateHandler,
  ga as EventBase,
  _r as TaskManager,
  fa as buildBaseDIModule,
  ha as findGUIFolder,
  pa as getLengthVector,
  da as getSpriteOffset,
  _a as lerpingRotation,
  ma as mapRange,
  va as publish,
  ca as sleep,
  ya as subscribe
};
