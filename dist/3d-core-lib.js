var tn = Object.defineProperty;
var nn = (r, A, e) => A in r ? tn(r, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[A] = e;
var j = (r, A, e) => nn(r, typeof A != "symbol" ? A + "" : A, e);
import { Loader as Me, FileLoader as GA, CompressedCubeTexture as sn, UnsignedByteType as IA, CompressedArrayTexture as rn, CompressedTexture as ct, LinearFilter as $A, LinearMipmapLinearFilter as ke, RGBAFormat as MA, RGBA_ASTC_4x4_Format as Ct, RGBA_BPTC_Format as on, RGBA_ETC2_EAC_Format as an, RGBA_PVRTC_4BPPV1_Format as gn, RGBA_S3TC_DXT5_Format as In, RGB_ETC1_Format as Bn, RGB_ETC2_Format as cn, RGB_PVRTC_4BPPV1_Format as Cn, RGBA_S3TC_DXT1_Format as En, FloatType as ZA, HalfFloatType as qA, DataTexture as Qn, Data3DTexture as un, SRGBColorSpace as pA, LinearSRGBColorSpace as cA, DisplayP3ColorSpace as ln, LinearDisplayP3ColorSpace as fn, NoColorSpace as Je, RGFormat as JA, RedFormat as PA, RGBA_ASTC_6x6_Format as Pe, BufferGeometry as Et, BufferAttribute as YA, Color as DA, ColorManagement as we, TrianglesDrawMode as hn, TriangleFanDrawMode as me, TriangleStripDrawMode as Qt, LoaderUtils as VA, SpotLight as dn, PointLight as pn, DirectionalLight as wn, MeshBasicMaterial as KA, MeshPhysicalMaterial as QA, Vector2 as _e, Matrix4 as Ae, Vector3 as kA, Quaternion as ut, InstancedMesh as mn, InstancedBufferAttribute as yn, Object3D as lt, TextureLoader as ft, ImageBitmapLoader as Dn, InterleavedBuffer as Rn, InterleavedBufferAttribute as Sn, RepeatWrapping as ye, PointsMaterial as Fn, Material as ie, LineBasicMaterial as Tn, MeshStandardMaterial as ht, DoubleSide as Gn, PropertyBinding as Ln, SkinnedMesh as Mn, Mesh as kn, LineSegments as _n, Line as xn, LineLoop as Un, Points as Nn, Group as re, PerspectiveCamera as dt, MathUtils as bn, OrthographicCamera as vn, Skeleton as Hn, AnimationClip as On, Bone as qn, InterpolateLinear as pt, NearestFilter as Jn, NearestMipmapNearestFilter as Pn, LinearMipmapNearestFilter as Kn, NearestMipmapLinearFilter as Yn, ClampToEdgeWrapping as Vn, MirroredRepeatWrapping as Xn, InterpolateDiscrete as jn, FrontSide as Wn, Texture as Ke, VectorKeyframeTrack as Ye, NumberKeyframeTrack as Ve, QuaternionKeyframeTrack as Xe, Box3 as zn, Sphere as Zn, Interpolant as $n, LoadingManager as As, WebGLRenderer as es, Scene as ts, Euler as ns, Clock as ss } from "three";
import is from "lil-gui";
import oe from "gsap";
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, We = {};
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
var ze;
function rs() {
  if (ze) return We;
  ze = 1;
  var r;
  return function(A) {
    (function(e) {
      var n = typeof globalThis == "object" ? globalThis : typeof je == "object" ? je : typeof self == "object" ? self : typeof this == "object" ? this : a(), t = s(A);
      typeof n.Reflect < "u" && (t = s(n.Reflect, t)), e(t, n), typeof n.Reflect > "u" && (n.Reflect = A);
      function s(g, B) {
        return function(I, C) {
          Object.defineProperty(g, I, { configurable: !0, writable: !0, value: C }), B && B(I, C);
        };
      }
      function i() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function o() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function a() {
        return i() || o();
      }
    })(function(e, n) {
      var t = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", i = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", o = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", a = typeof Object.create == "function", g = { __proto__: [] } instanceof Array, B = !a && !g, I = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: a ? function() {
          return se(/* @__PURE__ */ Object.create(null));
        } : g ? function() {
          return se({ __proto__: null });
        } : function() {
          return se({});
        },
        has: B ? function(c, E) {
          return t.call(c, E);
        } : function(c, E) {
          return E in c;
        },
        get: B ? function(c, E) {
          return t.call(c, E) ? c[E] : void 0;
        } : function(c, E) {
          return c[E];
        }
      }, C = Object.getPrototypeOf(Function), Q = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : zt(), l = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Zt(), h = typeof WeakMap == "function" ? WeakMap : $t(), f = s ? Symbol.for("@reflect-metadata:registry") : void 0, p = Xt(), D = jt(p);
      function S(c, E, u, d) {
        if (F(u)) {
          if (!bA(c))
            throw new TypeError();
          if (!Ue(E))
            throw new TypeError();
          return rA(c, E);
        } else {
          if (!bA(c))
            throw new TypeError();
          if (!H(E))
            throw new TypeError();
          if (!H(d) && !F(d) && !fA(d))
            throw new TypeError();
          return fA(d) && (d = void 0), u = tA(u), wA(c, E, u, d);
        }
      }
      e("decorate", S);
      function G(c, E) {
        function u(d, T) {
          if (!H(d))
            throw new TypeError();
          if (!F(T) && !Yt(T))
            throw new TypeError();
          Y(c, E, d, T);
        }
        return u;
      }
      e("metadata", G);
      function x(c, E, u, d) {
        if (!H(u))
          throw new TypeError();
        return F(d) || (d = tA(d)), Y(c, E, u, d);
      }
      e("defineMetadata", x);
      function U(c, E, u) {
        if (!H(E))
          throw new TypeError();
        return F(u) || (u = tA(u)), AA(c, E, u);
      }
      e("hasMetadata", U);
      function q(c, E, u) {
        if (!H(E))
          throw new TypeError();
        return F(u) || (u = tA(u)), Z(c, E, u);
      }
      e("hasOwnMetadata", q);
      function W(c, E, u) {
        if (!H(E))
          throw new TypeError();
        return F(u) || (u = tA(u)), N(c, E, u);
      }
      e("getMetadata", W);
      function O(c, E, u) {
        if (!H(E))
          throw new TypeError();
        return F(u) || (u = tA(u)), K(c, E, u);
      }
      e("getOwnMetadata", O);
      function z(c, E) {
        if (!H(c))
          throw new TypeError();
        return F(E) || (E = tA(E)), eA(c, E);
      }
      e("getMetadataKeys", z);
      function P(c, E) {
        if (!H(c))
          throw new TypeError();
        return F(E) || (E = tA(E)), oA(c, E);
      }
      e("getOwnMetadataKeys", P);
      function uA(c, E, u) {
        if (!H(E))
          throw new TypeError();
        if (F(u) || (u = tA(u)), !H(E))
          throw new TypeError();
        F(u) || (u = tA(u));
        var d = vA(
          E,
          u,
          /*Create*/
          !1
        );
        return F(d) ? !1 : d.OrdinaryDeleteMetadata(c, E, u);
      }
      e("deleteMetadata", uA);
      function rA(c, E) {
        for (var u = c.length - 1; u >= 0; --u) {
          var d = c[u], T = d(E);
          if (!F(T) && !fA(T)) {
            if (!Ue(T))
              throw new TypeError();
            E = T;
          }
        }
        return E;
      }
      function wA(c, E, u, d) {
        for (var T = c.length - 1; T >= 0; --T) {
          var X = c[T], V = X(E, u, d);
          if (!F(V) && !fA(V)) {
            if (!H(V))
              throw new TypeError();
            d = V;
          }
        }
        return d;
      }
      function AA(c, E, u) {
        var d = Z(c, E, u);
        if (d)
          return !0;
        var T = ne(E);
        return fA(T) ? !1 : AA(c, T, u);
      }
      function Z(c, E, u) {
        var d = vA(
          E,
          u,
          /*Create*/
          !1
        );
        return F(d) ? !1 : NA(d.OrdinaryHasOwnMetadata(c, E, u));
      }
      function N(c, E, u) {
        var d = Z(c, E, u);
        if (d)
          return K(c, E, u);
        var T = ne(E);
        if (!fA(T))
          return N(c, T, u);
      }
      function K(c, E, u) {
        var d = vA(
          E,
          u,
          /*Create*/
          !1
        );
        if (!F(d))
          return d.OrdinaryGetOwnMetadata(c, E, u);
      }
      function Y(c, E, u, d) {
        var T = vA(
          u,
          d,
          /*Create*/
          !0
        );
        T.OrdinaryDefineOwnMetadata(c, E, u, d);
      }
      function eA(c, E) {
        var u = oA(c, E), d = ne(c);
        if (d === null)
          return u;
        var T = eA(d, E);
        if (T.length <= 0)
          return u;
        if (u.length <= 0)
          return T;
        for (var X = new l(), V = [], L = 0, w = u; L < w.length; L++) {
          var m = w[L], y = X.has(m);
          y || (X.add(m), V.push(m));
        }
        for (var R = 0, k = T; R < k.length; R++) {
          var m = k[R], y = X.has(m);
          y || (X.add(m), V.push(m));
        }
        return V;
      }
      function oA(c, E) {
        var u = vA(
          c,
          E,
          /*create*/
          !1
        );
        return u ? u.OrdinaryOwnMetadataKeys(c, E) : [];
      }
      function lA(c) {
        if (c === null)
          return 1;
        switch (typeof c) {
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
            return c === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function F(c) {
        return c === void 0;
      }
      function fA(c) {
        return c === null;
      }
      function RA(c) {
        return typeof c == "symbol";
      }
      function H(c) {
        return typeof c == "object" ? c !== null : typeof c == "function";
      }
      function UA(c, E) {
        switch (lA(c)) {
          case 0:
            return c;
          case 1:
            return c;
          case 2:
            return c;
          case 3:
            return c;
          case 4:
            return c;
          case 5:
            return c;
        }
        var u = "string", d = Ne(c, i);
        if (d !== void 0) {
          var T = d.call(c, u);
          if (H(T))
            throw new TypeError();
          return T;
        }
        return zA(c);
      }
      function zA(c, E) {
        var u, d;
        {
          var T = c.toString;
          if (SA(T)) {
            var d = T.call(c);
            if (!H(d))
              return d;
          }
          var u = c.valueOf;
          if (SA(u)) {
            var d = u.call(c);
            if (!H(d))
              return d;
          }
        }
        throw new TypeError();
      }
      function NA(c) {
        return !!c;
      }
      function ee(c) {
        return "" + c;
      }
      function tA(c) {
        var E = UA(c);
        return RA(E) ? E : ee(E);
      }
      function bA(c) {
        return Array.isArray ? Array.isArray(c) : c instanceof Object ? c instanceof Array : Object.prototype.toString.call(c) === "[object Array]";
      }
      function SA(c) {
        return typeof c == "function";
      }
      function Ue(c) {
        return typeof c == "function";
      }
      function Yt(c) {
        switch (lA(c)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function te(c, E) {
        return c === E || c !== c && E !== E;
      }
      function Ne(c, E) {
        var u = c[E];
        if (u != null) {
          if (!SA(u))
            throw new TypeError();
          return u;
        }
      }
      function be(c) {
        var E = Ne(c, o);
        if (!SA(E))
          throw new TypeError();
        var u = E.call(c);
        if (!H(u))
          throw new TypeError();
        return u;
      }
      function ve(c) {
        return c.value;
      }
      function He(c) {
        var E = c.next();
        return E.done ? !1 : E;
      }
      function Oe(c) {
        var E = c.return;
        E && E.call(c);
      }
      function ne(c) {
        var E = Object.getPrototypeOf(c);
        if (typeof c != "function" || c === C || E !== C)
          return E;
        var u = c.prototype, d = u && Object.getPrototypeOf(u);
        if (d == null || d === Object.prototype)
          return E;
        var T = d.constructor;
        return typeof T != "function" || T === c ? E : T;
      }
      function Vt() {
        var c;
        !F(f) && typeof n.Reflect < "u" && !(f in n.Reflect) && typeof n.Reflect.defineMetadata == "function" && (c = Wt(n.Reflect));
        var E, u, d, T = new h(), X = {
          registerProvider: V,
          getProvider: w,
          setProvider: y
        };
        return X;
        function V(R) {
          if (!Object.isExtensible(X))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case c === R:
              break;
            case F(E):
              E = R;
              break;
            case E === R:
              break;
            case F(u):
              u = R;
              break;
            case u === R:
              break;
            default:
              d === void 0 && (d = new l()), d.add(R);
              break;
          }
        }
        function L(R, k) {
          if (!F(E)) {
            if (E.isProviderFor(R, k))
              return E;
            if (!F(u)) {
              if (u.isProviderFor(R, k))
                return E;
              if (!F(d))
                for (var b = be(d); ; ) {
                  var J = He(b);
                  if (!J)
                    return;
                  var aA = ve(J);
                  if (aA.isProviderFor(R, k))
                    return Oe(b), aA;
                }
            }
          }
          if (!F(c) && c.isProviderFor(R, k))
            return c;
        }
        function w(R, k) {
          var b = T.get(R), J;
          return F(b) || (J = b.get(k)), F(J) && (J = L(R, k), F(J) || (F(b) && (b = new Q(), T.set(R, b)), b.set(k, J))), J;
        }
        function m(R) {
          if (F(R))
            throw new TypeError();
          return E === R || u === R || !F(d) && d.has(R);
        }
        function y(R, k, b) {
          if (!m(b))
            throw new Error("Metadata provider not registered.");
          var J = w(R, k);
          if (J !== b) {
            if (!F(J))
              return !1;
            var aA = T.get(R);
            F(aA) && (aA = new Q(), T.set(R, aA)), aA.set(k, b);
          }
          return !0;
        }
      }
      function Xt() {
        var c;
        return !F(f) && H(n.Reflect) && Object.isExtensible(n.Reflect) && (c = n.Reflect[f]), F(c) && (c = Vt()), !F(f) && H(n.Reflect) && Object.isExtensible(n.Reflect) && Object.defineProperty(n.Reflect, f, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: c
        }), c;
      }
      function jt(c) {
        var E = new h(), u = {
          isProviderFor: function(m, y) {
            var R = E.get(m);
            return F(R) ? !1 : R.has(y);
          },
          OrdinaryDefineOwnMetadata: V,
          OrdinaryHasOwnMetadata: T,
          OrdinaryGetOwnMetadata: X,
          OrdinaryOwnMetadataKeys: L,
          OrdinaryDeleteMetadata: w
        };
        return p.registerProvider(u), u;
        function d(m, y, R) {
          var k = E.get(m), b = !1;
          if (F(k)) {
            if (!R)
              return;
            k = new Q(), E.set(m, k), b = !0;
          }
          var J = k.get(y);
          if (F(J)) {
            if (!R)
              return;
            if (J = new Q(), k.set(y, J), !c.setProvider(m, y, u))
              throw k.delete(y), b && E.delete(m), new Error("Wrong provider for target.");
          }
          return J;
        }
        function T(m, y, R) {
          var k = d(
            y,
            R,
            /*Create*/
            !1
          );
          return F(k) ? !1 : NA(k.has(m));
        }
        function X(m, y, R) {
          var k = d(
            y,
            R,
            /*Create*/
            !1
          );
          if (!F(k))
            return k.get(m);
        }
        function V(m, y, R, k) {
          var b = d(
            R,
            k,
            /*Create*/
            !0
          );
          b.set(m, y);
        }
        function L(m, y) {
          var R = [], k = d(
            m,
            y,
            /*Create*/
            !1
          );
          if (F(k))
            return R;
          for (var b = k.keys(), J = be(b), aA = 0; ; ) {
            var qe = He(J);
            if (!qe)
              return R.length = aA, R;
            var An = ve(qe);
            try {
              R[aA] = An;
            } catch (en) {
              try {
                Oe(J);
              } finally {
                throw en;
              }
            }
            aA++;
          }
        }
        function w(m, y, R) {
          var k = d(
            y,
            R,
            /*Create*/
            !1
          );
          if (F(k) || !k.delete(m))
            return !1;
          if (k.size === 0) {
            var b = E.get(y);
            F(b) || (b.delete(R), b.size === 0 && E.delete(b));
          }
          return !0;
        }
      }
      function Wt(c) {
        var E = c.defineMetadata, u = c.hasOwnMetadata, d = c.getOwnMetadata, T = c.getOwnMetadataKeys, X = c.deleteMetadata, V = new h(), L = {
          isProviderFor: function(w, m) {
            var y = V.get(w);
            return !F(y) && y.has(m) ? !0 : T(w, m).length ? (F(y) && (y = new l(), V.set(w, y)), y.add(m), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: E,
          OrdinaryHasOwnMetadata: u,
          OrdinaryGetOwnMetadata: d,
          OrdinaryOwnMetadataKeys: T,
          OrdinaryDeleteMetadata: X
        };
        return L;
      }
      function vA(c, E, u) {
        var d = p.getProvider(c, E);
        if (!F(d))
          return d;
        if (u) {
          if (p.setProvider(c, E, D))
            return D;
          throw new Error("Illegal state.");
        }
      }
      function zt() {
        var c = {}, E = [], u = (
          /** @class */
          function() {
            function L(w, m, y) {
              this._index = 0, this._keys = w, this._values = m, this._selector = y;
            }
            return L.prototype["@@iterator"] = function() {
              return this;
            }, L.prototype[o] = function() {
              return this;
            }, L.prototype.next = function() {
              var w = this._index;
              if (w >= 0 && w < this._keys.length) {
                var m = this._selector(this._keys[w], this._values[w]);
                return w + 1 >= this._keys.length ? (this._index = -1, this._keys = E, this._values = E) : this._index++, { value: m, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, L.prototype.throw = function(w) {
              throw this._index >= 0 && (this._index = -1, this._keys = E, this._values = E), w;
            }, L.prototype.return = function(w) {
              return this._index >= 0 && (this._index = -1, this._keys = E, this._values = E), { value: w, done: !0 };
            }, L;
          }()
        ), d = (
          /** @class */
          function() {
            function L() {
              this._keys = [], this._values = [], this._cacheKey = c, this._cacheIndex = -2;
            }
            return Object.defineProperty(L.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), L.prototype.has = function(w) {
              return this._find(
                w,
                /*insert*/
                !1
              ) >= 0;
            }, L.prototype.get = function(w) {
              var m = this._find(
                w,
                /*insert*/
                !1
              );
              return m >= 0 ? this._values[m] : void 0;
            }, L.prototype.set = function(w, m) {
              var y = this._find(
                w,
                /*insert*/
                !0
              );
              return this._values[y] = m, this;
            }, L.prototype.delete = function(w) {
              var m = this._find(
                w,
                /*insert*/
                !1
              );
              if (m >= 0) {
                for (var y = this._keys.length, R = m + 1; R < y; R++)
                  this._keys[R - 1] = this._keys[R], this._values[R - 1] = this._values[R];
                return this._keys.length--, this._values.length--, te(w, this._cacheKey) && (this._cacheKey = c, this._cacheIndex = -2), !0;
              }
              return !1;
            }, L.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = c, this._cacheIndex = -2;
            }, L.prototype.keys = function() {
              return new u(this._keys, this._values, T);
            }, L.prototype.values = function() {
              return new u(this._keys, this._values, X);
            }, L.prototype.entries = function() {
              return new u(this._keys, this._values, V);
            }, L.prototype["@@iterator"] = function() {
              return this.entries();
            }, L.prototype[o] = function() {
              return this.entries();
            }, L.prototype._find = function(w, m) {
              if (!te(this._cacheKey, w)) {
                this._cacheIndex = -1;
                for (var y = 0; y < this._keys.length; y++)
                  if (te(this._keys[y], w)) {
                    this._cacheIndex = y;
                    break;
                  }
              }
              return this._cacheIndex < 0 && m && (this._cacheIndex = this._keys.length, this._keys.push(w), this._values.push(void 0)), this._cacheIndex;
            }, L;
          }()
        );
        return d;
        function T(L, w) {
          return L;
        }
        function X(L, w) {
          return w;
        }
        function V(L, w) {
          return [L, w];
        }
      }
      function Zt() {
        var c = (
          /** @class */
          function() {
            function E() {
              this._map = new Q();
            }
            return Object.defineProperty(E.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), E.prototype.has = function(u) {
              return this._map.has(u);
            }, E.prototype.add = function(u) {
              return this._map.set(u, u), this;
            }, E.prototype.delete = function(u) {
              return this._map.delete(u);
            }, E.prototype.clear = function() {
              this._map.clear();
            }, E.prototype.keys = function() {
              return this._map.keys();
            }, E.prototype.values = function() {
              return this._map.keys();
            }, E.prototype.entries = function() {
              return this._map.entries();
            }, E.prototype["@@iterator"] = function() {
              return this.keys();
            }, E.prototype[o] = function() {
              return this.keys();
            }, E;
          }()
        );
        return c;
      }
      function $t() {
        var c = 16, E = I.create(), u = d();
        return (
          /** @class */
          function() {
            function w() {
              this._key = d();
            }
            return w.prototype.has = function(m) {
              var y = T(
                m,
                /*create*/
                !1
              );
              return y !== void 0 ? I.has(y, this._key) : !1;
            }, w.prototype.get = function(m) {
              var y = T(
                m,
                /*create*/
                !1
              );
              return y !== void 0 ? I.get(y, this._key) : void 0;
            }, w.prototype.set = function(m, y) {
              var R = T(
                m,
                /*create*/
                !0
              );
              return R[this._key] = y, this;
            }, w.prototype.delete = function(m) {
              var y = T(
                m,
                /*create*/
                !1
              );
              return y !== void 0 ? delete y[this._key] : !1;
            }, w.prototype.clear = function() {
              this._key = d();
            }, w;
          }()
        );
        function d() {
          var w;
          do
            w = "@@WeakMap@@" + L();
          while (I.has(E, w));
          return E[w] = !0, w;
        }
        function T(w, m) {
          if (!t.call(w, u)) {
            if (!m)
              return;
            Object.defineProperty(w, u, { value: I.create() });
          }
          return w[u];
        }
        function X(w, m) {
          for (var y = 0; y < m; ++y)
            w[y] = Math.random() * 255 | 0;
          return w;
        }
        function V(w) {
          if (typeof Uint8Array == "function") {
            var m = new Uint8Array(w);
            return typeof crypto < "u" ? crypto.getRandomValues(m) : typeof msCrypto < "u" ? msCrypto.getRandomValues(m) : X(m, w), m;
          }
          return X(new Array(w), w);
        }
        function L() {
          var w = V(c);
          w[6] = w[6] & 79 | 64, w[8] = w[8] & 191 | 128;
          for (var m = "", y = 0; y < c; ++y) {
            var R = w[y];
            (y === 4 || y === 6 || y === 8) && (m += "-"), R < 16 && (m += "0"), m += R.toString(16).toLowerCase();
          }
          return m;
        }
      }
      function se(c) {
        return c.__ = void 0, delete c.__, c;
      }
    });
  }(r || (r = {})), We;
}
rs();
const Ze = "inversify:paramtypes", os = "design:paramtypes";
let as = 0;
function gs() {
  return as++;
}
var $e;
(function(r) {
  r[r.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", r[r.NoBindingsAvailable = 0] = "NoBindingsAvailable", r[r.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})($e || ($e = {}));
var At;
(function(r) {
  r.DynamicValue = "toDynamicValue", r.Factory = "toFactory", r.Provider = "toProvider";
})(At || (At = {}));
class Is {
  constructor(A) {
    j(this, "id");
    j(this, "registry");
    this.id = gs(), this.registry = A;
  }
}
function Bs() {
  return function(r) {
    if (Reflect.hasOwnMetadata(Ze, r)) throw new Error("Cannot apply @injectable decorator multiple times.");
    const A = Reflect.getMetadata(os, r) || [];
    return Reflect.defineMetadata(Ze, A, r), r;
  };
}
const LA = {
  //Options
  BaseOpt: Symbol.for("BaseOpt"),
  CommonDebugOpt: Symbol.for("CommonDebugOpt"),
  //Core
  ThreeJsBase: Symbol.for("ThreeJsBase"),
  ResourceLoader: Symbol.for("ResourceLoader"),
  UpdateHandler: Symbol.for("UpdateHandler"),
  Update: Symbol.for("Update"),
  Init: Symbol.for("Init"),
  Reset: Symbol.for("Reset"),
  GUI: Symbol.for("GUI"),
  PassedTime: Symbol.for("PassedTime")
};
class cs {
  constructor(A = 4) {
    this.pool = A, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(A) {
    if (!this.workers[A]) {
      const e = this.workerCreator();
      e.addEventListener("message", this._onMessage.bind(this, A)), this.workers[A] = e;
    }
  }
  _getIdleWorker() {
    for (let A = 0; A < this.pool; A++)
      if (!(this.workerStatus & 1 << A)) return A;
    return -1;
  }
  _onMessage(A, e) {
    const n = this.workersResolve[A];
    if (n && n(e), this.queue.length) {
      const { resolve: t, msg: s, transfer: i } = this.queue.shift();
      this.workersResolve[A] = t, this.workers[A].postMessage(s, i);
    } else
      this.workerStatus ^= 1 << A;
  }
  setWorkerCreator(A) {
    this.workerCreator = A;
  }
  setWorkerLimit(A) {
    this.pool = A;
  }
  postMessage(A, e) {
    return new Promise((n) => {
      const t = this._getIdleWorker();
      t !== -1 ? (this._initWorker(t), this.workerStatus |= 1 << t, this.workersResolve[t] = n, this.workers[t].postMessage(A, e)) : this.queue.push({ resolve: n, msg: A, transfer: e });
    });
  }
  dispose() {
    this.workers.forEach((A) => A.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const Cs = 0, et = 2, Es = 1, tt = 2, Qs = 0, us = 1, ls = 10, fs = 0, wt = 9, mt = 15, yt = 16, Dt = 22, Rt = 37, St = 43, Ft = 76, Tt = 83, Gt = 97, Lt = 100, Mt = 103, kt = 109, _t = 165, xt = 166, Ut = 1000066e3;
class hs {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class HA {
  constructor(A, e, n, t) {
    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(A.buffer, A.byteOffset + e, n), this._littleEndian = t, this._offset = 0;
  }
  _nextUint8() {
    const A = this._dataView.getUint8(this._offset);
    return this._offset += 1, A;
  }
  _nextUint16() {
    const A = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, A;
  }
  _nextUint32() {
    const A = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, A;
  }
  _nextUint64() {
    const A = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, A;
  }
  _nextInt32() {
    const A = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, A;
  }
  _nextUint8Array(A) {
    const e = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, A);
    return this._offset += A, e;
  }
  _skip(A) {
    return this._offset += A, this;
  }
  _scan(A, e) {
    e === void 0 && (e = 0);
    const n = this._offset;
    let t = 0;
    for (; this._dataView.getUint8(this._offset) !== e && t < A; ) t++, this._offset++;
    return t < A && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, t);
  }
}
const $ = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function nt(r) {
  return new TextDecoder().decode(r);
}
function ds(r) {
  const A = new Uint8Array(r.buffer, r.byteOffset, $.length);
  if (A[0] !== $[0] || A[1] !== $[1] || A[2] !== $[2] || A[3] !== $[3] || A[4] !== $[4] || A[5] !== $[5] || A[6] !== $[6] || A[7] !== $[7] || A[8] !== $[8] || A[9] !== $[9] || A[10] !== $[10] || A[11] !== $[11]) throw new Error("Missing KTX 2.0 identifier.");
  const e = new hs(), n = 17 * Uint32Array.BYTES_PER_ELEMENT, t = new HA(r, $.length, n, !0);
  e.vkFormat = t._nextUint32(), e.typeSize = t._nextUint32(), e.pixelWidth = t._nextUint32(), e.pixelHeight = t._nextUint32(), e.pixelDepth = t._nextUint32(), e.layerCount = t._nextUint32(), e.faceCount = t._nextUint32();
  const s = t._nextUint32();
  e.supercompressionScheme = t._nextUint32();
  const i = t._nextUint32(), o = t._nextUint32(), a = t._nextUint32(), g = t._nextUint32(), B = t._nextUint64(), I = t._nextUint64(), C = new HA(r, $.length + n, 3 * s * 8, !0);
  for (let N = 0; N < s; N++) e.levels.push({ levelData: new Uint8Array(r.buffer, r.byteOffset + C._nextUint64(), C._nextUint64()), uncompressedByteLength: C._nextUint64() });
  const Q = new HA(r, i, o, !0), l = { vendorId: Q._skip(4)._nextUint16(), descriptorType: Q._nextUint16(), versionNumber: Q._nextUint16(), descriptorBlockSize: Q._nextUint16(), colorModel: Q._nextUint8(), colorPrimaries: Q._nextUint8(), transferFunction: Q._nextUint8(), flags: Q._nextUint8(), texelBlockDimension: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()], bytesPlane: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()], samples: [] }, h = (l.descriptorBlockSize / 4 - 6) / 4;
  for (let N = 0; N < h; N++) {
    const K = { bitOffset: Q._nextUint16(), bitLength: Q._nextUint8(), channelType: Q._nextUint8(), samplePosition: [Q._nextUint8(), Q._nextUint8(), Q._nextUint8(), Q._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & K.channelType ? (K.sampleLower = Q._nextInt32(), K.sampleUpper = Q._nextInt32()) : (K.sampleLower = Q._nextUint32(), K.sampleUpper = Q._nextUint32()), l.samples[N] = K;
  }
  e.dataFormatDescriptor.length = 0, e.dataFormatDescriptor.push(l);
  const f = new HA(r, a, g, !0);
  for (; f._offset < g; ) {
    const N = f._nextUint32(), K = f._scan(N), Y = nt(K);
    if (e.keyValue[Y] = f._nextUint8Array(N - K.byteLength - 1), Y.match(/^ktx/i)) {
      const eA = nt(e.keyValue[Y]);
      e.keyValue[Y] = eA.substring(0, eA.lastIndexOf("\0"));
    }
    f._skip(N % 4 ? 4 - N % 4 : 0);
  }
  if (I <= 0) return e;
  const p = new HA(r, B, I, !0), D = p._nextUint16(), S = p._nextUint16(), G = p._nextUint32(), x = p._nextUint32(), U = p._nextUint32(), q = p._nextUint32(), W = [];
  for (let N = 0; N < s; N++) W.push({ imageFlags: p._nextUint32(), rgbSliceByteOffset: p._nextUint32(), rgbSliceByteLength: p._nextUint32(), alphaSliceByteOffset: p._nextUint32(), alphaSliceByteLength: p._nextUint32() });
  const O = B + p._offset, z = O + G, P = z + x, uA = P + U, rA = new Uint8Array(r.buffer, r.byteOffset + O, G), wA = new Uint8Array(r.buffer, r.byteOffset + z, x), AA = new Uint8Array(r.buffer, r.byteOffset + P, U), Z = new Uint8Array(r.buffer, r.byteOffset + uA, q);
  return e.globalData = { endpointCount: D, selectorCount: S, imageDescs: W, endpointsData: rA, selectorsData: wA, tablesData: AA, extendedData: Z }, e;
}
let ae, hA, De;
const ge = { env: { emscripten_notify_memory_growth: function(r) {
  De = new Uint8Array(hA.exports.memory.buffer);
} } };
class ps {
  init() {
    return ae || (ae = typeof fetch < "u" ? fetch("data:application/wasm;base64," + st).then((A) => A.arrayBuffer()).then((A) => WebAssembly.instantiate(A, ge)).then(this._init) : WebAssembly.instantiate(Buffer.from(st, "base64"), ge).then(this._init), ae);
  }
  _init(A) {
    hA = A.instance, ge.env.emscripten_notify_memory_growth(0);
  }
  decode(A, e = 0) {
    if (!hA) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = A.byteLength, t = hA.exports.malloc(n);
    De.set(A, t), e = e || Number(hA.exports.ZSTD_findDecompressedSize(t, n));
    const s = hA.exports.malloc(e), i = hA.exports.ZSTD_decompress(s, e, t, n), o = De.slice(s, s + i);
    return hA.exports.free(t), hA.exports.free(s), o;
  }
}
const st = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", Ie = /* @__PURE__ */ new WeakMap();
let Be = 0, ce;
class EA extends Me {
  constructor(A) {
    super(A), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new cs(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(A) {
    return this.transcoderPath = A, this;
  }
  setWorkerLimit(A) {
    return this.workerPool.setWorkerLimit(A), this;
  }
  async detectSupportAsync(A) {
    return this.workerConfig = {
      astcSupported: await A.hasFeatureAsync("texture-compression-astc"),
      etc1Supported: await A.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await A.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await A.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await A.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await A.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  detectSupport(A) {
    return A.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: A.hasFeature("texture-compression-astc"),
      etc1Supported: A.hasFeature("texture-compression-etc1"),
      etc2Supported: A.hasFeature("texture-compression-etc2"),
      dxtSupported: A.hasFeature("texture-compression-bc"),
      bptcSupported: A.hasFeature("texture-compression-bptc"),
      pvrtcSupported: A.hasFeature("texture-compression-pvrtc")
    } : this.workerConfig = {
      astcSupported: A.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: A.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: A.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: A.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: A.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: A.extensions.has("WEBGL_compressed_texture_pvrtc") || A.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, this;
  }
  init() {
    if (!this.transcoderPending) {
      const A = new GA(this.manager);
      A.setPath(this.transcoderPath), A.setWithCredentials(this.withCredentials);
      const e = A.loadAsync("basis_transcoder.js"), n = new GA(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const t = n.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([e, t]).then(([s, i]) => {
        const o = EA.BasisWorker.toString(), a = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(EA.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(EA.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(EA.BasisFormat),
          "/* basis_transcoder.js */",
          s,
          "/* worker */",
          o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a])), this.transcoderBinary = i, this.workerPool.setWorkerCreator(() => {
          const g = new Worker(this.workerSourceURL), B = this.transcoderBinary.slice(0);
          return g.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: B }, [B]), g;
        });
      }), Be > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), Be++;
    }
    return this.transcoderPending;
  }
  load(A, e, n, t) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const s = new GA(this.manager);
    s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials), s.load(A, (i) => {
      this.parse(i, e, t);
    }, n, t);
  }
  parse(A, e, n) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    if (Ie.has(A))
      return Ie.get(A).promise.then(e).catch(n);
    this._createTexture(A).then((t) => e ? e(t) : null).catch(n);
  }
  _createTextureFrom(A, e) {
    const { faces: n, width: t, height: s, format: i, type: o, error: a, dfdFlags: g } = A;
    if (o === "error") return Promise.reject(a);
    let B;
    if (e.faceCount === 6)
      B = new sn(n, i, IA);
    else {
      const I = n[0].mipmaps;
      B = e.layerCount > 1 ? new rn(I, t, s, e.layerCount, i, IA) : new ct(I, t, s, i, IA);
    }
    return B.minFilter = n[0].mipmaps.length === 1 ? $A : ke, B.magFilter = $A, B.generateMipmaps = !1, B.needsUpdate = !0, B.colorSpace = Nt(e), B.premultiplyAlpha = !!(g & Es), B;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(A, e = {}) {
    const n = ds(new Uint8Array(A));
    if (n.vkFormat !== fs)
      return ms(n);
    const t = e, s = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: A, taskConfig: t }, [A])).then((i) => this._createTextureFrom(i.data, n));
    return Ie.set(A, { promise: s }), s;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), Be--, this;
  }
}
EA.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
EA.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16
};
EA.EngineFormat = {
  RGBAFormat: MA,
  RGBA_ASTC_4x4_Format: Ct,
  RGBA_BPTC_Format: on,
  RGBA_ETC2_EAC_Format: an,
  RGBA_PVRTC_4BPPV1_Format: gn,
  RGBA_S3TC_DXT5_Format: In,
  RGB_ETC1_Format: Bn,
  RGB_ETC2_Format: cn,
  RGB_PVRTC_4BPPV1_Format: Cn,
  RGBA_S3TC_DXT1_Format: En
};
EA.BasisWorker = function() {
  let r, A, e;
  const n = _EngineFormat, t = _TranscoderFormat, s = _BasisFormat;
  self.addEventListener("message", function(l) {
    const h = l.data;
    switch (h.type) {
      case "init":
        r = h.config, i(h.transcoderBinary);
        break;
      case "transcode":
        A.then(() => {
          try {
            const { faces: f, buffers: p, width: D, height: S, hasAlpha: G, format: x, dfdFlags: U } = o(h.buffer);
            self.postMessage({ type: "transcode", id: h.id, faces: f, width: D, height: S, hasAlpha: G, format: x, dfdFlags: U }, p);
          } catch (f) {
            console.error(f), self.postMessage({ type: "error", id: h.id, error: f.message });
          }
        });
        break;
    }
  });
  function i(l) {
    A = new Promise((h) => {
      e = { wasmBinary: l, onRuntimeInitialized: h }, BASIS(e);
    }).then(() => {
      e.initializeBasis(), e.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function o(l) {
    const h = new e.KTX2File(new Uint8Array(l));
    function f() {
      h.close(), h.delete();
    }
    if (!h.isValid())
      throw f(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const p = h.isUASTC() ? s.UASTC_4x4 : s.ETC1S, D = h.getWidth(), S = h.getHeight(), G = h.getLayers() || 1, x = h.getLevels(), U = h.getFaces(), q = h.getHasAlpha(), W = h.getDFDFlags(), { transcoderFormat: O, engineFormat: z } = I(p, D, S, q);
    if (!D || !S || !x)
      throw f(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!h.startTranscoding())
      throw f(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const P = [], uA = [];
    for (let rA = 0; rA < U; rA++) {
      const wA = [];
      for (let AA = 0; AA < x; AA++) {
        const Z = [];
        let N, K;
        for (let eA = 0; eA < G; eA++) {
          const oA = h.getImageLevelInfo(AA, eA, rA);
          rA === 0 && AA === 0 && eA === 0 && (oA.origWidth % 4 !== 0 || oA.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), x > 1 ? (N = oA.origWidth, K = oA.origHeight) : (N = oA.width, K = oA.height);
          const lA = new Uint8Array(h.getImageTranscodedSizeInBytes(AA, eA, 0, O));
          if (!h.transcodeImage(lA, AA, eA, rA, O, 0, -1, -1))
            throw f(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          Z.push(lA);
        }
        const Y = Q(Z);
        wA.push({ data: Y, width: N, height: K }), uA.push(Y.buffer);
      }
      P.push({ mipmaps: wA, width: D, height: S, format: z });
    }
    return f(), { faces: P, buffers: uA, width: D, height: S, hasAlpha: q, format: z, dfdFlags: W };
  }
  const a = [
    {
      if: "astcSupported",
      basisFormat: [s.UASTC_4x4],
      transcoderFormat: [t.ASTC_4x4, t.ASTC_4x4],
      engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [t.BC7_M5, t.BC7_M5],
      engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [t.BC1, t.BC3],
      engineFormat: [n.RGBA_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [t.ETC1, t.ETC2],
      engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [t.ETC1],
      engineFormat: [n.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [t.PVRTC1_4_RGB, t.PVRTC1_4_RGBA],
      engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], g = a.sort(function(l, h) {
    return l.priorityETC1S - h.priorityETC1S;
  }), B = a.sort(function(l, h) {
    return l.priorityUASTC - h.priorityUASTC;
  });
  function I(l, h, f, p) {
    let D, S;
    const G = l === s.ETC1S ? g : B;
    for (let x = 0; x < G.length; x++) {
      const U = G[x];
      if (r[U.if] && U.basisFormat.includes(l) && !(p && U.transcoderFormat.length < 2) && !(U.needsPowerOfTwo && !(C(h) && C(f))))
        return D = U.transcoderFormat[p ? 1 : 0], S = U.engineFormat[p ? 1 : 0], { transcoderFormat: D, engineFormat: S };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), D = t.RGBA32, S = n.RGBAFormat, { transcoderFormat: D, engineFormat: S };
  }
  function C(l) {
    return l <= 2 ? !0 : (l & l - 1) === 0 && l !== 0;
  }
  function Q(l) {
    if (l.length === 1) return l[0];
    let h = 0;
    for (let D = 0; D < l.length; D++) {
      const S = l[D];
      h += S.byteLength;
    }
    const f = new Uint8Array(h);
    let p = 0;
    for (let D = 0; D < l.length; D++) {
      const S = l[D];
      f.set(S, p), p += S.byteLength;
    }
    return f;
  }
};
const ws = /* @__PURE__ */ new Set([MA, JA, PA]), Ce = {
  [kt]: MA,
  [Gt]: MA,
  [Rt]: MA,
  [St]: MA,
  [Mt]: JA,
  [Tt]: JA,
  [yt]: JA,
  [Dt]: JA,
  [Lt]: PA,
  [Ft]: PA,
  [mt]: PA,
  [wt]: PA,
  [Ut]: Ct,
  [xt]: Pe,
  [_t]: Pe
}, Ee = {
  [kt]: ZA,
  [Gt]: qA,
  [Rt]: IA,
  [St]: IA,
  [Mt]: ZA,
  [Tt]: qA,
  [yt]: IA,
  [Dt]: IA,
  [Lt]: ZA,
  [Ft]: qA,
  [mt]: IA,
  [wt]: IA,
  [Ut]: qA,
  [xt]: IA,
  [_t]: IA
};
async function ms(r) {
  const { vkFormat: A } = r;
  if (Ce[A] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let e;
  r.supercompressionScheme === et && (ce || (ce = new Promise(async (s) => {
    const i = new ps();
    await i.init(), s(i);
  })), e = await ce);
  const n = [];
  for (let s = 0; s < r.levels.length; s++) {
    const i = Math.max(1, r.pixelWidth >> s), o = Math.max(1, r.pixelHeight >> s), a = r.pixelDepth ? Math.max(1, r.pixelDepth >> s) : 0, g = r.levels[s];
    let B;
    if (r.supercompressionScheme === Cs)
      B = g.levelData;
    else if (r.supercompressionScheme === et)
      B = e.decode(g.levelData, g.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let I;
    Ee[A] === ZA ? I = new Float32Array(
      B.buffer,
      B.byteOffset,
      B.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : Ee[A] === qA ? I = new Uint16Array(
      B.buffer,
      B.byteOffset,
      B.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : I = B, n.push({
      data: I,
      width: i,
      height: o,
      depth: a
    });
  }
  let t;
  if (ws.has(Ce[A]))
    t = r.pixelDepth === 0 ? new Qn(n[0].data, r.pixelWidth, r.pixelHeight) : new un(n[0].data, r.pixelWidth, r.pixelHeight, r.pixelDepth);
  else {
    if (r.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    t = new ct(n, r.pixelWidth, r.pixelHeight);
  }
  return t.mipmaps = n, t.type = Ee[A], t.format = Ce[A], t.colorSpace = Nt(r), t.needsUpdate = !0, Promise.resolve(t);
}
function Nt(r) {
  const A = r.dataFormatDescriptor[0];
  return A.colorPrimaries === us ? A.transferFunction === tt ? pA : cA : A.colorPrimaries === ls ? A.transferFunction === tt ? ln : fn : A.colorPrimaries === Qs ? Je : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${A.colorPrimaries}"`), Je);
}
const Qe = /* @__PURE__ */ new WeakMap();
class ys extends Me {
  constructor(A) {
    super(A), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(A) {
    return this.decoderPath = A, this;
  }
  setDecoderConfig(A) {
    return this.decoderConfig = A, this;
  }
  setWorkerLimit(A) {
    return this.workerLimit = A, this;
  }
  load(A, e, n, t) {
    const s = new GA(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(A, (i) => {
      this.parse(i, e, t);
    }, n, t);
  }
  parse(A, e, n = () => {
  }) {
    this.decodeDracoFile(A, e, null, null, pA, n).catch(n);
  }
  decodeDracoFile(A, e, n, t, s = cA, i = () => {
  }) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: t || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: s
    };
    return this.decodeGeometry(A, o).then(e).catch(i);
  }
  decodeGeometry(A, e) {
    const n = JSON.stringify(e);
    if (Qe.has(A)) {
      const a = Qe.get(A);
      if (a.key === n)
        return a.promise;
      if (A.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let t;
    const s = this.workerNextTaskID++, i = A.byteLength, o = this._getWorker(s, i).then((a) => (t = a, new Promise((g, B) => {
      t._callbacks[s] = { resolve: g, reject: B }, t.postMessage({ type: "decode", id: s, taskConfig: e, buffer: A }, [A]);
    }))).then((a) => this._createGeometry(a.geometry));
    return o.catch(() => !0).then(() => {
      t && s && this._releaseTask(t, s);
    }), Qe.set(A, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(A) {
    const e = new Et();
    A.index && e.setIndex(new YA(A.index.array, 1));
    for (let n = 0; n < A.attributes.length; n++) {
      const t = A.attributes[n], s = t.name, i = t.array, o = t.itemSize, a = new YA(i, o);
      s === "color" && (this._assignVertexColorSpace(a, t.vertexColorSpace), a.normalized = !(i instanceof Float32Array)), e.setAttribute(s, a);
    }
    return e;
  }
  _assignVertexColorSpace(A, e) {
    if (e !== pA) return;
    const n = new DA();
    for (let t = 0, s = A.count; t < s; t++)
      n.fromBufferAttribute(A, t), we.toWorkingColorSpace(n, pA), A.setXYZ(t, n.r, n.g, n.b);
  }
  _loadLibrary(A, e) {
    const n = new GA(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(e), n.setWithCredentials(this.withCredentials), new Promise((t, s) => {
      n.load(A, t, void 0, s);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const A = typeof WebAssembly != "object" || this.decoderConfig.type === "js", e = [];
    return A ? e.push(this._loadLibrary("draco_decoder.js", "text")) : (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(e).then((n) => {
      const t = n[0];
      A || (this.decoderConfig.wasmBinary = n[1]);
      const s = Ds.toString(), i = [
        "/* draco decoder */",
        t,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([i]));
    }), this.decoderPending;
  }
  _getWorker(A, e) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const t = new Worker(this.workerSourceURL);
        t._callbacks = {}, t._taskCosts = {}, t._taskLoad = 0, t.postMessage({ type: "init", decoderConfig: this.decoderConfig }), t.onmessage = function(s) {
          const i = s.data;
          switch (i.type) {
            case "decode":
              t._callbacks[i.id].resolve(i);
              break;
            case "error":
              t._callbacks[i.id].reject(i);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + i.type + '"');
          }
        }, this.workerPool.push(t);
      } else
        this.workerPool.sort(function(t, s) {
          return t._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[A] = e, n._taskLoad += e, n;
    });
  }
  _releaseTask(A, e) {
    A._taskLoad -= A._taskCosts[e], delete A._callbacks[e], delete A._taskCosts[e];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((A) => A._taskLoad));
  }
  dispose() {
    for (let A = 0; A < this.workerPool.length; ++A)
      this.workerPool[A].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function Ds() {
  let r, A;
  onmessage = function(i) {
    const o = i.data;
    switch (o.type) {
      case "init":
        r = o.decoderConfig, A = new Promise(function(B) {
          r.onModuleLoaded = function(I) {
            B({ draco: I });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const a = o.buffer, g = o.taskConfig;
        A.then((B) => {
          const I = B.draco, C = new I.Decoder();
          try {
            const Q = e(I, C, new Int8Array(a), g), l = Q.attributes.map((h) => h.array.buffer);
            Q.index && l.push(Q.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: Q }, l);
          } catch (Q) {
            console.error(Q), self.postMessage({ type: "error", id: o.id, error: Q.message });
          } finally {
            I.destroy(C);
          }
        });
        break;
    }
  };
  function e(i, o, a, g) {
    const B = g.attributeIDs, I = g.attributeTypes;
    let C, Q;
    const l = o.GetEncodedGeometryType(a);
    if (l === i.TRIANGULAR_MESH)
      C = new i.Mesh(), Q = o.DecodeArrayToMesh(a, a.byteLength, C);
    else if (l === i.POINT_CLOUD)
      C = new i.PointCloud(), Q = o.DecodeArrayToPointCloud(a, a.byteLength, C);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!Q.ok() || C.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + Q.error_msg());
    const h = { index: null, attributes: [] };
    for (const f in B) {
      const p = self[I[f]];
      let D, S;
      if (g.useUniqueIDs)
        S = B[f], D = o.GetAttributeByUniqueId(C, S);
      else {
        if (S = o.GetAttributeId(C, i[B[f]]), S === -1) continue;
        D = o.GetAttribute(C, S);
      }
      const G = t(i, o, C, f, p, D);
      f === "color" && (G.vertexColorSpace = g.vertexColorSpace), h.attributes.push(G);
    }
    return l === i.TRIANGULAR_MESH && (h.index = n(i, o, C)), i.destroy(C), h;
  }
  function n(i, o, a) {
    const B = a.num_faces() * 3, I = B * 4, C = i._malloc(I);
    o.GetTrianglesUInt32Array(a, I, C);
    const Q = new Uint32Array(i.HEAPF32.buffer, C, B).slice();
    return i._free(C), { array: Q, itemSize: 1 };
  }
  function t(i, o, a, g, B, I) {
    const C = I.num_components(), l = a.num_points() * C, h = l * B.BYTES_PER_ELEMENT, f = s(i, B), p = i._malloc(h);
    o.GetAttributeDataArrayForAllPoints(a, I, f, h, p);
    const D = new B(i.HEAPF32.buffer, p, l).slice();
    return i._free(p), {
      name: g,
      array: D,
      itemSize: C
    };
  }
  function s(i, o) {
    switch (o) {
      case Float32Array:
        return i.DT_FLOAT32;
      case Int8Array:
        return i.DT_INT8;
      case Int16Array:
        return i.DT_INT16;
      case Int32Array:
        return i.DT_INT32;
      case Uint8Array:
        return i.DT_UINT8;
      case Uint16Array:
        return i.DT_UINT16;
      case Uint32Array:
        return i.DT_UINT32;
    }
  }
}
function it(r, A) {
  if (A === hn)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (A === me || A === Qt) {
    let e = r.getIndex();
    if (e === null) {
      const i = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let a = 0; a < o.count; a++)
          i.push(a);
        r.setIndex(i), e = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = e.count - 2, t = [];
    if (A === me)
      for (let i = 1; i <= n; i++)
        t.push(e.getX(0)), t.push(e.getX(i)), t.push(e.getX(i + 1));
    else
      for (let i = 0; i < n; i++)
        i % 2 === 0 ? (t.push(e.getX(i)), t.push(e.getX(i + 1)), t.push(e.getX(i + 2))) : (t.push(e.getX(i + 2)), t.push(e.getX(i + 1)), t.push(e.getX(i)));
    t.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(t), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", A), r;
}
class Rs extends Me {
  constructor(A) {
    super(A), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
      return new Ls(e);
    }), this.register(function(e) {
      return new Ms(e);
    }), this.register(function(e) {
      return new Os(e);
    }), this.register(function(e) {
      return new qs(e);
    }), this.register(function(e) {
      return new Js(e);
    }), this.register(function(e) {
      return new _s(e);
    }), this.register(function(e) {
      return new xs(e);
    }), this.register(function(e) {
      return new Us(e);
    }), this.register(function(e) {
      return new Ns(e);
    }), this.register(function(e) {
      return new Gs(e);
    }), this.register(function(e) {
      return new bs(e);
    }), this.register(function(e) {
      return new ks(e);
    }), this.register(function(e) {
      return new Hs(e);
    }), this.register(function(e) {
      return new vs(e);
    }), this.register(function(e) {
      return new Fs(e);
    }), this.register(function(e) {
      return new Ps(e);
    }), this.register(function(e) {
      return new Ks(e);
    });
  }
  load(A, e, n, t) {
    const s = this;
    let i;
    if (this.resourcePath !== "")
      i = this.resourcePath;
    else if (this.path !== "") {
      const g = VA.extractUrlBase(A);
      i = VA.resolveURL(g, this.path);
    } else
      i = VA.extractUrlBase(A);
    this.manager.itemStart(A);
    const o = function(g) {
      t ? t(g) : console.error(g), s.manager.itemError(A), s.manager.itemEnd(A);
    }, a = new GA(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(A, function(g) {
      try {
        s.parse(g, i, function(B) {
          e(B), s.manager.itemEnd(A);
        }, o);
      } catch (B) {
        o(B);
      }
    }, n, o);
  }
  setDRACOLoader(A) {
    return this.dracoLoader = A, this;
  }
  setKTX2Loader(A) {
    return this.ktx2Loader = A, this;
  }
  setMeshoptDecoder(A) {
    return this.meshoptDecoder = A, this;
  }
  register(A) {
    return this.pluginCallbacks.indexOf(A) === -1 && this.pluginCallbacks.push(A), this;
  }
  unregister(A) {
    return this.pluginCallbacks.indexOf(A) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A), 1), this;
  }
  parse(A, e, n, t) {
    let s;
    const i = {}, o = {}, a = new TextDecoder();
    if (typeof A == "string")
      s = JSON.parse(A);
    else if (A instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(A, 0, 4)) === bt) {
        try {
          i[M.KHR_BINARY_GLTF] = new Ys(A);
        } catch (I) {
          t && t(I);
          return;
        }
        s = JSON.parse(i[M.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(a.decode(A));
    else
      s = A;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      t && t(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const g = new ii(s, {
      path: e || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    g.fileLoader.setRequestHeader(this.requestHeader);
    for (let B = 0; B < this.pluginCallbacks.length; B++) {
      const I = this.pluginCallbacks[B](g);
      I.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[I.name] = I, i[I.name] = !0;
    }
    if (s.extensionsUsed)
      for (let B = 0; B < s.extensionsUsed.length; ++B) {
        const I = s.extensionsUsed[B], C = s.extensionsRequired || [];
        switch (I) {
          case M.KHR_MATERIALS_UNLIT:
            i[I] = new Ts();
            break;
          case M.KHR_DRACO_MESH_COMPRESSION:
            i[I] = new Vs(s, this.dracoLoader);
            break;
          case M.KHR_TEXTURE_TRANSFORM:
            i[I] = new Xs();
            break;
          case M.KHR_MESH_QUANTIZATION:
            i[I] = new js();
            break;
          default:
            C.indexOf(I) >= 0 && o[I] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + I + '".');
        }
      }
    g.setExtensions(i), g.setPlugins(o), g.parse(n, t);
  }
  parseAsync(A, e) {
    const n = this;
    return new Promise(function(t, s) {
      n.parse(A, e, t, s);
    });
  }
}
function Ss() {
  let r = {};
  return {
    get: function(A) {
      return r[A];
    },
    add: function(A, e) {
      r[A] = e;
    },
    remove: function(A) {
      delete r[A];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const M = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Fs {
  constructor(A) {
    this.parser = A, this.name = M.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const A = this.parser, e = this.parser.json.nodes || [];
    for (let n = 0, t = e.length; n < t; n++) {
      const s = e[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && A._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(A) {
    const e = this.parser, n = "light:" + A;
    let t = e.cache.get(n);
    if (t) return t;
    const s = e.json, a = ((s.extensions && s.extensions[this.name] || {}).lights || [])[A];
    let g;
    const B = new DA(16777215);
    a.color !== void 0 && B.setRGB(a.color[0], a.color[1], a.color[2], cA);
    const I = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        g = new wn(B), g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      case "point":
        g = new pn(B), g.distance = I;
        break;
      case "spot":
        g = new dn(B), g.distance = I, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, g.angle = a.spot.outerConeAngle, g.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return g.position.set(0, 0, 0), g.decay = 2, dA(g, a), a.intensity !== void 0 && (g.intensity = a.intensity), g.name = e.createUniqueName(a.name || "light_" + A), t = Promise.resolve(g), e.cache.add(n, t), t;
  }
  getDependency(A, e) {
    if (A === "light")
      return this._loadLight(e);
  }
  createNodeAttachment(A) {
    const e = this, n = this.parser, s = n.json.nodes[A], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(a) {
      return n._getNodeRef(e.cache, o, a);
    });
  }
}
class Ts {
  constructor() {
    this.name = M.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return KA;
  }
  extendParams(A, e, n) {
    const t = [];
    A.color = new DA(1, 1, 1), A.opacity = 1;
    const s = e.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const i = s.baseColorFactor;
        A.color.setRGB(i[0], i[1], i[2], cA), A.opacity = i[3];
      }
      s.baseColorTexture !== void 0 && t.push(n.assignTexture(A, "map", s.baseColorTexture, pA));
    }
    return Promise.all(t);
  }
}
class Gs {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(A, e) {
    const t = this.parser.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name].emissiveStrength;
    return s !== void 0 && (e.emissiveIntensity = s), Promise.resolve();
  }
}
class Ls {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && s.push(n.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const o = i.clearcoatNormalTexture.scale;
      e.clearcoatNormalScale = new _e(o, o);
    }
    return Promise.all(s);
  }
}
class Ms {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const t = this.parser.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name];
    return e.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class ks {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (e.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && s.push(n.assignTexture(e, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (e.iridescenceIOR = i.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(e, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class _s {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [];
    e.sheenColor = new DA(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
    const i = t.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const o = i.sheenColorFactor;
      e.sheenColor.setRGB(o[0], o[1], o[2], cA);
    }
    return i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && s.push(n.assignTexture(e, "sheenColorMap", i.sheenColorTexture, pA)), i.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(s);
  }
}
class xs {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && s.push(n.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(s);
  }
}
class Us {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && s.push(n.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 1 / 0;
    const o = i.attenuationColor || [1, 1, 1];
    return e.attenuationColor = new DA().setRGB(o[0], o[1], o[2], cA), Promise.all(s);
  }
}
class Ns {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_IOR;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const t = this.parser.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name];
    return e.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class bs {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    e.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && s.push(n.assignTexture(e, "specularIntensityMap", i.specularTexture));
    const o = i.specularColorFactor || [1, 1, 1];
    return e.specularColor = new DA().setRGB(o[0], o[1], o[2], cA), i.specularColorTexture !== void 0 && s.push(n.assignTexture(e, "specularColorMap", i.specularColorTexture, pA)), Promise.all(s);
  }
}
class vs {
  constructor(A) {
    this.parser = A, this.name = M.EXT_MATERIALS_BUMP;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return e.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && s.push(n.assignTexture(e, "bumpMap", i.bumpTexture)), Promise.all(s);
  }
}
class Hs {
  constructor(A) {
    this.parser = A, this.name = M.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(A) {
    const n = this.parser.json.materials[A];
    return !n.extensions || !n.extensions[this.name] ? null : QA;
  }
  extendMaterialParams(A, e) {
    const n = this.parser, t = n.json.materials[A];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (e.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (e.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && s.push(n.assignTexture(e, "anisotropyMap", i.anisotropyTexture)), Promise.all(s);
  }
}
class Os {
  constructor(A) {
    this.parser = A, this.name = M.KHR_TEXTURE_BASISU;
  }
  loadTexture(A) {
    const e = this.parser, n = e.json, t = n.textures[A];
    if (!t.extensions || !t.extensions[this.name])
      return null;
    const s = t.extensions[this.name], i = e.options.ktx2Loader;
    if (!i) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return e.loadTextureImage(A, s.source, i);
  }
}
class qs {
  constructor(A) {
    this.parser = A, this.name = M.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(A) {
    const e = this.name, n = this.parser, t = n.json, s = t.textures[A];
    if (!s.extensions || !s.extensions[e])
      return null;
    const i = s.extensions[e], o = t.images[i.source];
    let a = n.textureLoader;
    if (o.uri) {
      const g = n.options.manager.getHandler(o.uri);
      g !== null && (a = g);
    }
    return this.detectSupport().then(function(g) {
      if (g) return n.loadTextureImage(A, i.source, a);
      if (t.extensionsRequired && t.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(A);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(A) {
      const e = new Image();
      e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
        A(e.height === 1);
      };
    })), this.isSupported;
  }
}
class Js {
  constructor(A) {
    this.parser = A, this.name = M.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(A) {
    const e = this.name, n = this.parser, t = n.json, s = t.textures[A];
    if (!s.extensions || !s.extensions[e])
      return null;
    const i = s.extensions[e], o = t.images[i.source];
    let a = n.textureLoader;
    if (o.uri) {
      const g = n.options.manager.getHandler(o.uri);
      g !== null && (a = g);
    }
    return this.detectSupport().then(function(g) {
      if (g) return n.loadTextureImage(A, i.source, a);
      if (t.extensionsRequired && t.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(A);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(A) {
      const e = new Image();
      e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
        A(e.height === 1);
      };
    })), this.isSupported;
  }
}
class Ps {
  constructor(A) {
    this.name = M.EXT_MESHOPT_COMPRESSION, this.parser = A;
  }
  loadBufferView(A) {
    const e = this.parser.json, n = e.bufferViews[A];
    if (n.extensions && n.extensions[this.name]) {
      const t = n.extensions[this.name], s = this.parser.getDependency("buffer", t.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const a = t.byteOffset || 0, g = t.byteLength || 0, B = t.count, I = t.byteStride, C = new Uint8Array(o, a, g);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(B, I, C, t.mode, t.filter).then(function(Q) {
          return Q.buffer;
        }) : i.ready.then(function() {
          const Q = new ArrayBuffer(B * I);
          return i.decodeGltfBuffer(new Uint8Array(Q), B, I, C, t.mode, t.filter), Q;
        });
      });
    } else
      return null;
  }
}
class Ks {
  constructor(A) {
    this.name = M.EXT_MESH_GPU_INSTANCING, this.parser = A;
  }
  createNodeMesh(A) {
    const e = this.parser.json, n = e.nodes[A];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const t = e.meshes[n.mesh];
    for (const g of t.primitives)
      if (g.mode !== sA.TRIANGLES && g.mode !== sA.TRIANGLE_STRIP && g.mode !== sA.TRIANGLE_FAN && g.mode !== void 0)
        return null;
    const i = n.extensions[this.name].attributes, o = [], a = {};
    for (const g in i)
      o.push(this.parser.getDependency("accessor", i[g]).then((B) => (a[g] = B, a[g])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(A)), Promise.all(o).then((g) => {
      const B = g.pop(), I = B.isGroup ? B.children : [B], C = g[0].count, Q = [];
      for (const l of I) {
        const h = new Ae(), f = new kA(), p = new ut(), D = new kA(1, 1, 1), S = new mn(l.geometry, l.material, C);
        for (let G = 0; G < C; G++)
          a.TRANSLATION && f.fromBufferAttribute(a.TRANSLATION, G), a.ROTATION && p.fromBufferAttribute(a.ROTATION, G), a.SCALE && D.fromBufferAttribute(a.SCALE, G), S.setMatrixAt(G, h.compose(f, p, D));
        for (const G in a)
          if (G === "_COLOR_0") {
            const x = a[G];
            S.instanceColor = new yn(x.array, x.itemSize, x.normalized);
          } else G !== "TRANSLATION" && G !== "ROTATION" && G !== "SCALE" && l.geometry.setAttribute(G, a[G]);
        lt.prototype.copy.call(S, l), this.parser.assignFinalMaterial(S), Q.push(S);
      }
      return B.isGroup ? (B.clear(), B.add(...Q), B) : Q[0];
    }));
  }
}
const bt = "glTF", OA = 12, rt = { JSON: 1313821514, BIN: 5130562 };
class Ys {
  constructor(A) {
    this.name = M.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const e = new DataView(A, 0, OA), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(A.slice(0, 4))),
      version: e.getUint32(4, !0),
      length: e.getUint32(8, !0)
    }, this.header.magic !== bt)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const t = this.header.length - OA, s = new DataView(A, OA);
    let i = 0;
    for (; i < t; ) {
      const o = s.getUint32(i, !0);
      i += 4;
      const a = s.getUint32(i, !0);
      if (i += 4, a === rt.JSON) {
        const g = new Uint8Array(A, OA + i, o);
        this.content = n.decode(g);
      } else if (a === rt.BIN) {
        const g = OA + i;
        this.body = A.slice(g, g + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Vs {
  constructor(A, e) {
    if (!e)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = M.KHR_DRACO_MESH_COMPRESSION, this.json = A, this.dracoLoader = e, this.dracoLoader.preload();
  }
  decodePrimitive(A, e) {
    const n = this.json, t = this.dracoLoader, s = A.extensions[this.name].bufferView, i = A.extensions[this.name].attributes, o = {}, a = {}, g = {};
    for (const B in i) {
      const I = Re[B] || B.toLowerCase();
      o[I] = i[B];
    }
    for (const B in A.attributes) {
      const I = Re[B] || B.toLowerCase();
      if (i[B] !== void 0) {
        const C = n.accessors[A.attributes[B]], Q = xA[C.componentType];
        g[I] = Q.name, a[I] = C.normalized === !0;
      }
    }
    return e.getDependency("bufferView", s).then(function(B) {
      return new Promise(function(I, C) {
        t.decodeDracoFile(B, function(Q) {
          for (const l in Q.attributes) {
            const h = Q.attributes[l], f = a[l];
            f !== void 0 && (h.normalized = f);
          }
          I(Q);
        }, o, g, cA, C);
      });
    });
  }
}
class Xs {
  constructor() {
    this.name = M.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(A, e) {
    return (e.texCoord === void 0 || e.texCoord === A.channel) && e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (A = A.clone(), e.texCoord !== void 0 && (A.channel = e.texCoord), e.offset !== void 0 && A.offset.fromArray(e.offset), e.rotation !== void 0 && (A.rotation = e.rotation), e.scale !== void 0 && A.repeat.fromArray(e.scale), A.needsUpdate = !0), A;
  }
}
class js {
  constructor() {
    this.name = M.KHR_MESH_QUANTIZATION;
  }
}
class vt extends $n {
  constructor(A, e, n, t) {
    super(A, e, n, t);
  }
  copySampleValue_(A) {
    const e = this.resultBuffer, n = this.sampleValues, t = this.valueSize, s = A * t * 3 + t;
    for (let i = 0; i !== t; i++)
      e[i] = n[s + i];
    return e;
  }
  interpolate_(A, e, n, t) {
    const s = this.resultBuffer, i = this.sampleValues, o = this.valueSize, a = o * 2, g = o * 3, B = t - e, I = (n - e) / B, C = I * I, Q = C * I, l = A * g, h = l - g, f = -2 * Q + 3 * C, p = Q - C, D = 1 - f, S = p - C + I;
    for (let G = 0; G !== o; G++) {
      const x = i[h + G + o], U = i[h + G + a] * B, q = i[l + G + o], W = i[l + G] * B;
      s[G] = D * x + S * U + f * q + p * W;
    }
    return s;
  }
}
const Ws = new ut();
class zs extends vt {
  interpolate_(A, e, n, t) {
    const s = super.interpolate_(A, e, n, t);
    return Ws.fromArray(s).normalize().toArray(s), s;
  }
}
const sA = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, xA = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ot = {
  9728: Jn,
  9729: $A,
  9984: Pn,
  9985: Kn,
  9986: Yn,
  9987: ke
}, at = {
  33071: Vn,
  33648: Xn,
  10497: ye
}, ue = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Re = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, mA = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Zs = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: pt,
  STEP: jn
}, le = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function $s(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ht({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Wn
  })), r.DefaultMaterial;
}
function FA(r, A, e) {
  for (const n in e.extensions)
    r[n] === void 0 && (A.userData.gltfExtensions = A.userData.gltfExtensions || {}, A.userData.gltfExtensions[n] = e.extensions[n]);
}
function dA(r, A) {
  A.extras !== void 0 && (typeof A.extras == "object" ? Object.assign(r.userData, A.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + A.extras));
}
function Ai(r, A, e) {
  let n = !1, t = !1, s = !1;
  for (let g = 0, B = A.length; g < B; g++) {
    const I = A[g];
    if (I.POSITION !== void 0 && (n = !0), I.NORMAL !== void 0 && (t = !0), I.COLOR_0 !== void 0 && (s = !0), n && t && s) break;
  }
  if (!n && !t && !s) return Promise.resolve(r);
  const i = [], o = [], a = [];
  for (let g = 0, B = A.length; g < B; g++) {
    const I = A[g];
    if (n) {
      const C = I.POSITION !== void 0 ? e.getDependency("accessor", I.POSITION) : r.attributes.position;
      i.push(C);
    }
    if (t) {
      const C = I.NORMAL !== void 0 ? e.getDependency("accessor", I.NORMAL) : r.attributes.normal;
      o.push(C);
    }
    if (s) {
      const C = I.COLOR_0 !== void 0 ? e.getDependency("accessor", I.COLOR_0) : r.attributes.color;
      a.push(C);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(o),
    Promise.all(a)
  ]).then(function(g) {
    const B = g[0], I = g[1], C = g[2];
    return n && (r.morphAttributes.position = B), t && (r.morphAttributes.normal = I), s && (r.morphAttributes.color = C), r.morphTargetsRelative = !0, r;
  });
}
function ei(r, A) {
  if (r.updateMorphTargets(), A.weights !== void 0)
    for (let e = 0, n = A.weights.length; e < n; e++)
      r.morphTargetInfluences[e] = A.weights[e];
  if (A.extras && Array.isArray(A.extras.targetNames)) {
    const e = A.extras.targetNames;
    if (r.morphTargetInfluences.length === e.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, t = e.length; n < t; n++)
        r.morphTargetDictionary[e[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function ti(r) {
  let A;
  const e = r.extensions && r.extensions[M.KHR_DRACO_MESH_COMPRESSION];
  if (e ? A = "draco:" + e.bufferView + ":" + e.indices + ":" + fe(e.attributes) : A = r.indices + ":" + fe(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, t = r.targets.length; n < t; n++)
      A += ":" + fe(r.targets[n]);
  return A;
}
function fe(r) {
  let A = "";
  const e = Object.keys(r).sort();
  for (let n = 0, t = e.length; n < t; n++)
    A += e[n] + ":" + r[e[n]] + ";";
  return A;
}
function Se(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function ni(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const si = new Ae();
class ii {
  constructor(A = {}, e = {}) {
    this.json = A, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new Ss(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, t = -1, s = !1, i = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const a = o.match(/Version\/(\d+)/);
      t = n && a ? parseInt(a[1], 10) : -1, s = o.indexOf("Firefox") > -1, i = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && t < 17 || s && i < 98 ? this.textureLoader = new ft(this.options.manager) : this.textureLoader = new Dn(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new GA(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(A) {
    this.extensions = A;
  }
  setPlugins(A) {
    this.plugins = A;
  }
  parse(A, e) {
    const n = this, t = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(i) {
      const o = {
        scene: i[0][t.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: t.asset,
        parser: n,
        userData: {}
      };
      return FA(s, o, t), dA(o, t), Promise.all(n._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(o);
      })).then(function() {
        for (const a of o.scenes)
          a.updateMatrixWorld();
        A(o);
      });
    }).catch(e);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const A = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [];
    for (let t = 0, s = e.length; t < s; t++) {
      const i = e[t].joints;
      for (let o = 0, a = i.length; o < a; o++)
        A[i[o]].isBone = !0;
    }
    for (let t = 0, s = A.length; t < s; t++) {
      const i = A[t];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (n[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(A, e) {
    e !== void 0 && (A.refs[e] === void 0 && (A.refs[e] = A.uses[e] = 0), A.refs[e]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(A, e, n) {
    if (A.refs[e] <= 1) return n;
    const t = n.clone(), s = (i, o) => {
      const a = this.associations.get(i);
      a != null && this.associations.set(o, a);
      for (const [g, B] of i.children.entries())
        s(B, o.children[g]);
    };
    return s(n, t), t.name += "_instance_" + A.uses[e]++, t;
  }
  _invokeOne(A) {
    const e = Object.values(this.plugins);
    e.push(this);
    for (let n = 0; n < e.length; n++) {
      const t = A(e[n]);
      if (t) return t;
    }
    return null;
  }
  _invokeAll(A) {
    const e = Object.values(this.plugins);
    e.unshift(this);
    const n = [];
    for (let t = 0; t < e.length; t++) {
      const s = A(e[t]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(A, e) {
    const n = A + ":" + e;
    let t = this.cache.get(n);
    if (!t) {
      switch (A) {
        case "scene":
          t = this.loadScene(e);
          break;
        case "node":
          t = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(e);
          });
          break;
        case "mesh":
          t = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(e);
          });
          break;
        case "accessor":
          t = this.loadAccessor(e);
          break;
        case "bufferView":
          t = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(e);
          });
          break;
        case "buffer":
          t = this.loadBuffer(e);
          break;
        case "material":
          t = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(e);
          });
          break;
        case "texture":
          t = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(e);
          });
          break;
        case "skin":
          t = this.loadSkin(e);
          break;
        case "animation":
          t = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(e);
          });
          break;
        case "camera":
          t = this.loadCamera(e);
          break;
        default:
          if (t = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(A, e);
          }), !t)
            throw new Error("Unknown type: " + A);
          break;
      }
      this.cache.add(n, t);
    }
    return t;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(A) {
    let e = this.cache.get(A);
    if (!e) {
      const n = this, t = this.json[A + (A === "mesh" ? "es" : "s")] || [];
      e = Promise.all(t.map(function(s, i) {
        return n.getDependency(A, i);
      })), this.cache.add(A, e);
    }
    return e;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(A) {
    const e = this.json.buffers[A], n = this.fileLoader;
    if (e.type && e.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
    if (e.uri === void 0 && A === 0)
      return Promise.resolve(this.extensions[M.KHR_BINARY_GLTF].body);
    const t = this.options;
    return new Promise(function(s, i) {
      n.load(VA.resolveURL(e.uri, t.path), s, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(A) {
    const e = this.json.bufferViews[A];
    return this.getDependency("buffer", e.buffer).then(function(n) {
      const t = e.byteLength || 0, s = e.byteOffset || 0;
      return n.slice(s, s + t);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(A) {
    const e = this, n = this.json, t = this.json.accessors[A];
    if (t.bufferView === void 0 && t.sparse === void 0) {
      const i = ue[t.type], o = xA[t.componentType], a = t.normalized === !0, g = new o(t.count * i);
      return Promise.resolve(new YA(g, i, a));
    }
    const s = [];
    return t.bufferView !== void 0 ? s.push(this.getDependency("bufferView", t.bufferView)) : s.push(null), t.sparse !== void 0 && (s.push(this.getDependency("bufferView", t.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", t.sparse.values.bufferView))), Promise.all(s).then(function(i) {
      const o = i[0], a = ue[t.type], g = xA[t.componentType], B = g.BYTES_PER_ELEMENT, I = B * a, C = t.byteOffset || 0, Q = t.bufferView !== void 0 ? n.bufferViews[t.bufferView].byteStride : void 0, l = t.normalized === !0;
      let h, f;
      if (Q && Q !== I) {
        const p = Math.floor(C / Q), D = "InterleavedBuffer:" + t.bufferView + ":" + t.componentType + ":" + p + ":" + t.count;
        let S = e.cache.get(D);
        S || (h = new g(o, p * Q, t.count * Q / B), S = new Rn(h, Q / B), e.cache.add(D, S)), f = new Sn(S, a, C % Q / B, l);
      } else
        o === null ? h = new g(t.count * a) : h = new g(o, C, t.count * a), f = new YA(h, a, l);
      if (t.sparse !== void 0) {
        const p = ue.SCALAR, D = xA[t.sparse.indices.componentType], S = t.sparse.indices.byteOffset || 0, G = t.sparse.values.byteOffset || 0, x = new D(i[1], S, t.sparse.count * p), U = new g(i[2], G, t.sparse.count * a);
        o !== null && (f = new YA(f.array.slice(), f.itemSize, f.normalized)), f.normalized = !1;
        for (let q = 0, W = x.length; q < W; q++) {
          const O = x[q];
          if (f.setX(O, U[q * a]), a >= 2 && f.setY(O, U[q * a + 1]), a >= 3 && f.setZ(O, U[q * a + 2]), a >= 4 && f.setW(O, U[q * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        f.normalized = l;
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(A) {
    const e = this.json, n = this.options, s = e.textures[A].source, i = e.images[s];
    let o = this.textureLoader;
    if (i.uri) {
      const a = n.manager.getHandler(i.uri);
      a !== null && (o = a);
    }
    return this.loadTextureImage(A, s, o);
  }
  loadTextureImage(A, e, n) {
    const t = this, s = this.json, i = s.textures[A], o = s.images[e], a = (o.uri || o.bufferView) + ":" + i.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const g = this.loadImageSource(e, n).then(function(B) {
      B.flipY = !1, B.name = i.name || o.name || "", B.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (B.name = o.uri);
      const C = (s.samplers || {})[i.sampler] || {};
      return B.magFilter = ot[C.magFilter] || $A, B.minFilter = ot[C.minFilter] || ke, B.wrapS = at[C.wrapS] || ye, B.wrapT = at[C.wrapT] || ye, t.associations.set(B, { textures: A }), B;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = g, g;
  }
  loadImageSource(A, e) {
    const n = this, t = this.json, s = this.options;
    if (this.sourceCache[A] !== void 0)
      return this.sourceCache[A].then((I) => I.clone());
    const i = t.images[A], o = self.URL || self.webkitURL;
    let a = i.uri || "", g = !1;
    if (i.bufferView !== void 0)
      a = n.getDependency("bufferView", i.bufferView).then(function(I) {
        g = !0;
        const C = new Blob([I], { type: i.mimeType });
        return a = o.createObjectURL(C), a;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + A + " is missing URI and bufferView");
    const B = Promise.resolve(a).then(function(I) {
      return new Promise(function(C, Q) {
        let l = C;
        e.isImageBitmapLoader === !0 && (l = function(h) {
          const f = new Ke(h);
          f.needsUpdate = !0, C(f);
        }), e.load(VA.resolveURL(I, s.path), l, void 0, Q);
      });
    }).then(function(I) {
      return g === !0 && o.revokeObjectURL(a), dA(I, i), I.userData.mimeType = i.mimeType || ni(i.uri), I;
    }).catch(function(I) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), I;
    });
    return this.sourceCache[A] = B, B;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(A, e, n, t) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(i) {
      if (!i) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (i = i.clone(), i.channel = n.texCoord), s.extensions[M.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[M.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const a = s.associations.get(i);
          i = s.extensions[M.KHR_TEXTURE_TRANSFORM].extendTexture(i, o), s.associations.set(i, a);
        }
      }
      return t !== void 0 && (i.colorSpace = t), A[e] = i, i;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(A) {
    const e = A.geometry;
    let n = A.material;
    const t = e.attributes.tangent === void 0, s = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
    if (A.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new Fn(), ie.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, a.sizeAttenuation = !1, this.cache.add(o, a)), n = a;
    } else if (A.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new Tn(), ie.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, this.cache.add(o, a)), n = a;
    }
    if (t || s || i) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      t && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), i && (o += "flat-shading:");
      let a = this.cache.get(o);
      a || (a = n.clone(), s && (a.vertexColors = !0), i && (a.flatShading = !0), t && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(o, a), this.associations.set(a, this.associations.get(n))), n = a;
    }
    A.material = n;
  }
  getMaterialType() {
    return ht;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(A) {
    const e = this, n = this.json, t = this.extensions, s = n.materials[A];
    let i;
    const o = {}, a = s.extensions || {}, g = [];
    if (a[M.KHR_MATERIALS_UNLIT]) {
      const I = t[M.KHR_MATERIALS_UNLIT];
      i = I.getMaterialType(), g.push(I.extendParams(o, s, e));
    } else {
      const I = s.pbrMetallicRoughness || {};
      if (o.color = new DA(1, 1, 1), o.opacity = 1, Array.isArray(I.baseColorFactor)) {
        const C = I.baseColorFactor;
        o.color.setRGB(C[0], C[1], C[2], cA), o.opacity = C[3];
      }
      I.baseColorTexture !== void 0 && g.push(e.assignTexture(o, "map", I.baseColorTexture, pA)), o.metalness = I.metallicFactor !== void 0 ? I.metallicFactor : 1, o.roughness = I.roughnessFactor !== void 0 ? I.roughnessFactor : 1, I.metallicRoughnessTexture !== void 0 && (g.push(e.assignTexture(o, "metalnessMap", I.metallicRoughnessTexture)), g.push(e.assignTexture(o, "roughnessMap", I.metallicRoughnessTexture))), i = this._invokeOne(function(C) {
        return C.getMaterialType && C.getMaterialType(A);
      }), g.push(Promise.all(this._invokeAll(function(C) {
        return C.extendMaterialParams && C.extendMaterialParams(A, o);
      })));
    }
    s.doubleSided === !0 && (o.side = Gn);
    const B = s.alphaMode || le.OPAQUE;
    if (B === le.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, B === le.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && i !== KA && (g.push(e.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new _e(1, 1), s.normalTexture.scale !== void 0)) {
      const I = s.normalTexture.scale;
      o.normalScale.set(I, I);
    }
    if (s.occlusionTexture !== void 0 && i !== KA && (g.push(e.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && i !== KA) {
      const I = s.emissiveFactor;
      o.emissive = new DA().setRGB(I[0], I[1], I[2], cA);
    }
    return s.emissiveTexture !== void 0 && i !== KA && g.push(e.assignTexture(o, "emissiveMap", s.emissiveTexture, pA)), Promise.all(g).then(function() {
      const I = new i(o);
      return s.name && (I.name = s.name), dA(I, s), e.associations.set(I, { materials: A }), s.extensions && FA(t, I, s), I;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(A) {
    const e = Ln.sanitizeNodeName(A || "");
    return e in this.nodeNamesUsed ? e + "_" + ++this.nodeNamesUsed[e] : (this.nodeNamesUsed[e] = 0, e);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(A) {
    const e = this, n = this.extensions, t = this.primitiveCache;
    function s(o) {
      return n[M.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, e).then(function(a) {
        return gt(a, o, e);
      });
    }
    const i = [];
    for (let o = 0, a = A.length; o < a; o++) {
      const g = A[o], B = ti(g), I = t[B];
      if (I)
        i.push(I.promise);
      else {
        let C;
        g.extensions && g.extensions[M.KHR_DRACO_MESH_COMPRESSION] ? C = s(g) : C = gt(new Et(), g, e), t[B] = { primitive: g, promise: C }, i.push(C);
      }
    }
    return Promise.all(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(A) {
    const e = this, n = this.json, t = this.extensions, s = n.meshes[A], i = s.primitives, o = [];
    for (let a = 0, g = i.length; a < g; a++) {
      const B = i[a].material === void 0 ? $s(this.cache) : this.getDependency("material", i[a].material);
      o.push(B);
    }
    return o.push(e.loadGeometries(i)), Promise.all(o).then(function(a) {
      const g = a.slice(0, a.length - 1), B = a[a.length - 1], I = [];
      for (let Q = 0, l = B.length; Q < l; Q++) {
        const h = B[Q], f = i[Q];
        let p;
        const D = g[Q];
        if (f.mode === sA.TRIANGLES || f.mode === sA.TRIANGLE_STRIP || f.mode === sA.TRIANGLE_FAN || f.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new Mn(h, D) : new kn(h, D), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), f.mode === sA.TRIANGLE_STRIP ? p.geometry = it(p.geometry, Qt) : f.mode === sA.TRIANGLE_FAN && (p.geometry = it(p.geometry, me));
        else if (f.mode === sA.LINES)
          p = new _n(h, D);
        else if (f.mode === sA.LINE_STRIP)
          p = new xn(h, D);
        else if (f.mode === sA.LINE_LOOP)
          p = new Un(h, D);
        else if (f.mode === sA.POINTS)
          p = new Nn(h, D);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && ei(p, s), p.name = e.createUniqueName(s.name || "mesh_" + A), dA(p, s), f.extensions && FA(t, p, f), e.assignFinalMaterial(p), I.push(p);
      }
      for (let Q = 0, l = I.length; Q < l; Q++)
        e.associations.set(I[Q], {
          meshes: A,
          primitives: Q
        });
      if (I.length === 1)
        return s.extensions && FA(t, I[0], s), I[0];
      const C = new re();
      s.extensions && FA(t, C, s), e.associations.set(C, { meshes: A });
      for (let Q = 0, l = I.length; Q < l; Q++)
        C.add(I[Q]);
      return C;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(A) {
    let e;
    const n = this.json.cameras[A], t = n[n.type];
    if (!t) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? e = new dt(bn.radToDeg(t.yfov), t.aspectRatio || 1, t.znear || 1, t.zfar || 2e6) : n.type === "orthographic" && (e = new vn(-t.xmag, t.xmag, t.ymag, -t.ymag, t.znear, t.zfar)), n.name && (e.name = this.createUniqueName(n.name)), dA(e, n), Promise.resolve(e);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(A) {
    const e = this.json.skins[A], n = [];
    for (let t = 0, s = e.joints.length; t < s; t++)
      n.push(this._loadNodeShallow(e.joints[t]));
    return e.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", e.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(t) {
      const s = t.pop(), i = t, o = [], a = [];
      for (let g = 0, B = i.length; g < B; g++) {
        const I = i[g];
        if (I) {
          o.push(I);
          const C = new Ae();
          s !== null && C.fromArray(s.array, g * 16), a.push(C);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[g]);
      }
      return new Hn(o, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(A) {
    const e = this.json, n = this, t = e.animations[A], s = t.name ? t.name : "animation_" + A, i = [], o = [], a = [], g = [], B = [];
    for (let I = 0, C = t.channels.length; I < C; I++) {
      const Q = t.channels[I], l = t.samplers[Q.sampler], h = Q.target, f = h.node, p = t.parameters !== void 0 ? t.parameters[l.input] : l.input, D = t.parameters !== void 0 ? t.parameters[l.output] : l.output;
      h.node !== void 0 && (i.push(this.getDependency("node", f)), o.push(this.getDependency("accessor", p)), a.push(this.getDependency("accessor", D)), g.push(l), B.push(h));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(g),
      Promise.all(B)
    ]).then(function(I) {
      const C = I[0], Q = I[1], l = I[2], h = I[3], f = I[4], p = [];
      for (let D = 0, S = C.length; D < S; D++) {
        const G = C[D], x = Q[D], U = l[D], q = h[D], W = f[D];
        if (G === void 0) continue;
        G.updateMatrix && G.updateMatrix();
        const O = n._createAnimationTracks(G, x, U, q, W);
        if (O)
          for (let z = 0; z < O.length; z++)
            p.push(O[z]);
      }
      return new On(s, void 0, p);
    });
  }
  createNodeMesh(A) {
    const e = this.json, n = this, t = e.nodes[A];
    return t.mesh === void 0 ? null : n.getDependency("mesh", t.mesh).then(function(s) {
      const i = n._getNodeRef(n.meshCache, t.mesh, s);
      return t.weights !== void 0 && i.traverse(function(o) {
        if (o.isMesh)
          for (let a = 0, g = t.weights.length; a < g; a++)
            o.morphTargetInfluences[a] = t.weights[a];
      }), i;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(A) {
    const e = this.json, n = this, t = e.nodes[A], s = n._loadNodeShallow(A), i = [], o = t.children || [];
    for (let g = 0, B = o.length; g < B; g++)
      i.push(n.getDependency("node", o[g]));
    const a = t.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", t.skin);
    return Promise.all([
      s,
      Promise.all(i),
      a
    ]).then(function(g) {
      const B = g[0], I = g[1], C = g[2];
      C !== null && B.traverse(function(Q) {
        Q.isSkinnedMesh && Q.bind(C, si);
      });
      for (let Q = 0, l = I.length; Q < l; Q++)
        B.add(I[Q]);
      return B;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(A) {
    const e = this.json, n = this.extensions, t = this;
    if (this.nodeCache[A] !== void 0)
      return this.nodeCache[A];
    const s = e.nodes[A], i = s.name ? t.createUniqueName(s.name) : "", o = [], a = t._invokeOne(function(g) {
      return g.createNodeMesh && g.createNodeMesh(A);
    });
    return a && o.push(a), s.camera !== void 0 && o.push(t.getDependency("camera", s.camera).then(function(g) {
      return t._getNodeRef(t.cameraCache, s.camera, g);
    })), t._invokeAll(function(g) {
      return g.createNodeAttachment && g.createNodeAttachment(A);
    }).forEach(function(g) {
      o.push(g);
    }), this.nodeCache[A] = Promise.all(o).then(function(g) {
      let B;
      if (s.isBone === !0 ? B = new qn() : g.length > 1 ? B = new re() : g.length === 1 ? B = g[0] : B = new lt(), B !== g[0])
        for (let I = 0, C = g.length; I < C; I++)
          B.add(g[I]);
      if (s.name && (B.userData.name = s.name, B.name = i), dA(B, s), s.extensions && FA(n, B, s), s.matrix !== void 0) {
        const I = new Ae();
        I.fromArray(s.matrix), B.applyMatrix4(I);
      } else
        s.translation !== void 0 && B.position.fromArray(s.translation), s.rotation !== void 0 && B.quaternion.fromArray(s.rotation), s.scale !== void 0 && B.scale.fromArray(s.scale);
      return t.associations.has(B) || t.associations.set(B, {}), t.associations.get(B).nodes = A, B;
    }), this.nodeCache[A];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(A) {
    const e = this.extensions, n = this.json.scenes[A], t = this, s = new re();
    n.name && (s.name = t.createUniqueName(n.name)), dA(s, n), n.extensions && FA(e, s, n);
    const i = n.nodes || [], o = [];
    for (let a = 0, g = i.length; a < g; a++)
      o.push(t.getDependency("node", i[a]));
    return Promise.all(o).then(function(a) {
      for (let B = 0, I = a.length; B < I; B++)
        s.add(a[B]);
      const g = (B) => {
        const I = /* @__PURE__ */ new Map();
        for (const [C, Q] of t.associations)
          (C instanceof ie || C instanceof Ke) && I.set(C, Q);
        return B.traverse((C) => {
          const Q = t.associations.get(C);
          Q != null && I.set(C, Q);
        }), I;
      };
      return t.associations = g(s), s;
    });
  }
  _createAnimationTracks(A, e, n, t, s) {
    const i = [], o = A.name ? A.name : A.uuid, a = [];
    mA[s.path] === mA.weights ? A.traverse(function(C) {
      C.morphTargetInfluences && a.push(C.name ? C.name : C.uuid);
    }) : a.push(o);
    let g;
    switch (mA[s.path]) {
      case mA.weights:
        g = Ve;
        break;
      case mA.rotation:
        g = Xe;
        break;
      case mA.position:
      case mA.scale:
        g = Ye;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            g = Ve;
            break;
          case 2:
          case 3:
          default:
            g = Ye;
            break;
        }
        break;
    }
    const B = t.interpolation !== void 0 ? Zs[t.interpolation] : pt, I = this._getArrayFromAccessor(n);
    for (let C = 0, Q = a.length; C < Q; C++) {
      const l = new g(
        a[C] + "." + mA[s.path],
        e.array,
        I,
        B
      );
      t.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(l), i.push(l);
    }
    return i;
  }
  _getArrayFromAccessor(A) {
    let e = A.array;
    if (A.normalized) {
      const n = Se(e.constructor), t = new Float32Array(e.length);
      for (let s = 0, i = e.length; s < i; s++)
        t[s] = e[s] * n;
      e = t;
    }
    return e;
  }
  _createCubicSplineTrackInterpolant(A) {
    A.createInterpolant = function(n) {
      const t = this instanceof Xe ? zs : vt;
      return new t(this.times, this.values, this.getValueSize() / 3, n);
    }, A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function ri(r, A, e) {
  const n = A.attributes, t = new zn();
  if (n.POSITION !== void 0) {
    const o = e.json.accessors[n.POSITION], a = o.min, g = o.max;
    if (a !== void 0 && g !== void 0) {
      if (t.set(
        new kA(a[0], a[1], a[2]),
        new kA(g[0], g[1], g[2])
      ), o.normalized) {
        const B = Se(xA[o.componentType]);
        t.min.multiplyScalar(B), t.max.multiplyScalar(B);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = A.targets;
  if (s !== void 0) {
    const o = new kA(), a = new kA();
    for (let g = 0, B = s.length; g < B; g++) {
      const I = s[g];
      if (I.POSITION !== void 0) {
        const C = e.json.accessors[I.POSITION], Q = C.min, l = C.max;
        if (Q !== void 0 && l !== void 0) {
          if (a.setX(Math.max(Math.abs(Q[0]), Math.abs(l[0]))), a.setY(Math.max(Math.abs(Q[1]), Math.abs(l[1]))), a.setZ(Math.max(Math.abs(Q[2]), Math.abs(l[2]))), C.normalized) {
            const h = Se(xA[C.componentType]);
            a.multiplyScalar(h);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    t.expandByVector(o);
  }
  r.boundingBox = t;
  const i = new Zn();
  t.getCenter(i.center), i.radius = t.min.distanceTo(t.max) / 2, r.boundingSphere = i;
}
function gt(r, A, e) {
  const n = A.attributes, t = [];
  function s(i, o) {
    return e.getDependency("accessor", i).then(function(a) {
      r.setAttribute(o, a);
    });
  }
  for (const i in n) {
    const o = Re[i] || i.toLowerCase();
    o in r.attributes || t.push(s(n[i], o));
  }
  if (A.indices !== void 0 && !r.index) {
    const i = e.getDependency("accessor", A.indices).then(function(o) {
      r.setIndex(o);
    });
    t.push(i);
  }
  return we.workingColorSpace !== cA && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${we.workingColorSpace}" not supported.`), dA(r, A), ri(r, A, e), Promise.all(t).then(function() {
    return A.targets !== void 0 ? Ai(r, A.targets, e) : r;
  });
}
const _ = class _ {
  static getInstance() {
    return _._instance === null && (_._instance = new _(), _._gltfLoader.setDRACOLoader(_._dracoLoader), _._dracoLoader.setDecoderPath(`${_._base}draco/`), _._ktx2Loader.setTranscoderPath(`${_._base}basis/`)), _._instance;
  }
  static initKTX2Loader(A) {
    _._ktx2Loader.detectSupport(A);
  }
  get loaderManager() {
    return _._loaderManager;
  }
  async loadTexture(A, e = !1) {
    return _._imageLoader.loadAsync(
      `${e ? `${_._base}${A}` : `${A}`}`
    );
  }
  async loadGPUTexture(A) {
    return _._ktx2Loader.loadAsync(`${_._base}${A}`);
  }
  async loadEnvironmentMap(A) {
    return _._ktx2Loader.loadAsync(`${_._base}${A}`);
  }
  async loadGLTFModel(A) {
    return _._gltfLoader.loadAsync(`${_._base}${A}`);
  }
  async parseGLTFModel(A, e) {
    return _._gltfLoader.parseAsync(A, e);
  }
};
j(_, "_instance", null), j(_, "_loaderManager", new As()), j(_, "_dracoLoader", new ys(_._loaderManager)), j(_, "_gltfLoader", new Rs(_._loaderManager)), j(_, "_ktx2Loader", new EA(_._loaderManager)), j(_, "_imageLoader", new ft(_._loaderManager)), // @ts-ignore
j(_, "_base", "/");
let XA = _;
var nA = Uint8Array, _A = Uint16Array, oi = Int32Array, Ht = new nA([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ot = new nA([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), ai = new nA([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), qt = function(r, A) {
  for (var e = new _A(31), n = 0; n < 31; ++n)
    e[n] = A += 1 << r[n - 1];
  for (var t = new oi(e[30]), n = 1; n < 30; ++n)
    for (var s = e[n]; s < e[n + 1]; ++s)
      t[s] = s - e[n] << 5 | n;
  return { b: e, r: t };
}, Jt = qt(Ht, 2), Pt = Jt.b, gi = Jt.r;
Pt[28] = 258, gi[258] = 28;
var Ii = qt(Ot, 0), Bi = Ii.b, Fe = new _A(32768);
for (var v = 0; v < 32768; ++v) {
  var yA = (v & 43690) >> 1 | (v & 21845) << 1;
  yA = (yA & 52428) >> 2 | (yA & 13107) << 2, yA = (yA & 61680) >> 4 | (yA & 3855) << 4, Fe[v] = ((yA & 65280) >> 8 | (yA & 255) << 8) >> 1;
}
var jA = function(r, A, e) {
  for (var n = r.length, t = 0, s = new _A(A); t < n; ++t)
    r[t] && ++s[r[t] - 1];
  var i = new _A(A);
  for (t = 1; t < A; ++t)
    i[t] = i[t - 1] + s[t - 1] << 1;
  var o;
  if (e) {
    o = new _A(1 << A);
    var a = 15 - A;
    for (t = 0; t < n; ++t)
      if (r[t])
        for (var g = t << 4 | r[t], B = A - r[t], I = i[r[t] - 1]++ << B, C = I | (1 << B) - 1; I <= C; ++I)
          o[Fe[I] >> a] = g;
  } else
    for (o = new _A(n), t = 0; t < n; ++t)
      r[t] && (o[t] = Fe[i[r[t] - 1]++] >> 15 - r[t]);
  return o;
}, WA = new nA(288);
for (var v = 0; v < 144; ++v)
  WA[v] = 8;
for (var v = 144; v < 256; ++v)
  WA[v] = 9;
for (var v = 256; v < 280; ++v)
  WA[v] = 7;
for (var v = 280; v < 288; ++v)
  WA[v] = 8;
var Kt = new nA(32);
for (var v = 0; v < 32; ++v)
  Kt[v] = 5;
var ci = /* @__PURE__ */ jA(WA, 9, 1), Ci = /* @__PURE__ */ jA(Kt, 5, 1), he = function(r) {
  for (var A = r[0], e = 1; e < r.length; ++e)
    r[e] > A && (A = r[e]);
  return A;
}, gA = function(r, A, e) {
  var n = A / 8 | 0;
  return (r[n] | r[n + 1] << 8) >> (A & 7) & e;
}, de = function(r, A) {
  var e = A / 8 | 0;
  return (r[e] | r[e + 1] << 8 | r[e + 2] << 16) >> (A & 7);
}, Ei = function(r) {
  return (r + 7) / 8 | 0;
}, xe = function(r, A, e) {
  return (A == null || A < 0) && (A = 0), (e == null || e > r.length) && (e = r.length), new nA(r.subarray(A, e));
}, Qi = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], iA = function(r, A, e) {
  var n = new Error(A || Qi[r]);
  if (n.code = r, Error.captureStackTrace && Error.captureStackTrace(n, iA), !e)
    throw n;
  return n;
}, ui = function(r, A, e, n) {
  var t = r.length, s = n ? n.length : 0;
  if (!t || A.f && !A.l)
    return e || new nA(0);
  var i = !e, o = i || A.i != 2, a = A.i;
  i && (e = new nA(t * 3));
  var g = function(tA) {
    var bA = e.length;
    if (tA > bA) {
      var SA = new nA(Math.max(bA * 2, tA));
      SA.set(e), e = SA;
    }
  }, B = A.f || 0, I = A.p || 0, C = A.b || 0, Q = A.l, l = A.d, h = A.m, f = A.n, p = t * 8;
  do {
    if (!Q) {
      B = gA(r, I, 1);
      var D = gA(r, I + 1, 3);
      if (I += 3, D)
        if (D == 1)
          Q = ci, l = Ci, h = 9, f = 5;
        else if (D == 2) {
          var U = gA(r, I, 31) + 257, q = gA(r, I + 10, 15) + 4, W = U + gA(r, I + 5, 31) + 1;
          I += 14;
          for (var O = new nA(W), z = new nA(19), P = 0; P < q; ++P)
            z[ai[P]] = gA(r, I + P * 3, 7);
          I += q * 3;
          for (var uA = he(z), rA = (1 << uA) - 1, wA = jA(z, uA, 1), P = 0; P < W; ) {
            var AA = wA[gA(r, I, rA)];
            I += AA & 15;
            var S = AA >> 4;
            if (S < 16)
              O[P++] = S;
            else {
              var Z = 0, N = 0;
              for (S == 16 ? (N = 3 + gA(r, I, 3), I += 2, Z = O[P - 1]) : S == 17 ? (N = 3 + gA(r, I, 7), I += 3) : S == 18 && (N = 11 + gA(r, I, 127), I += 7); N--; )
                O[P++] = Z;
            }
          }
          var K = O.subarray(0, U), Y = O.subarray(U);
          h = he(K), f = he(Y), Q = jA(K, h, 1), l = jA(Y, f, 1);
        } else
          iA(1);
      else {
        var S = Ei(I) + 4, G = r[S - 4] | r[S - 3] << 8, x = S + G;
        if (x > t) {
          a && iA(0);
          break;
        }
        o && g(C + G), e.set(r.subarray(S, x), C), A.b = C += G, A.p = I = x * 8, A.f = B;
        continue;
      }
      if (I > p) {
        a && iA(0);
        break;
      }
    }
    o && g(C + 131072);
    for (var eA = (1 << h) - 1, oA = (1 << f) - 1, lA = I; ; lA = I) {
      var Z = Q[de(r, I) & eA], F = Z >> 4;
      if (I += Z & 15, I > p) {
        a && iA(0);
        break;
      }
      if (Z || iA(2), F < 256)
        e[C++] = F;
      else if (F == 256) {
        lA = I, Q = null;
        break;
      } else {
        var fA = F - 254;
        if (F > 264) {
          var P = F - 257, RA = Ht[P];
          fA = gA(r, I, (1 << RA) - 1) + Pt[P], I += RA;
        }
        var H = l[de(r, I) & oA], UA = H >> 4;
        H || iA(3), I += H & 15;
        var Y = Bi[UA];
        if (UA > 3) {
          var RA = Ot[UA];
          Y += de(r, I) & (1 << RA) - 1, I += RA;
        }
        if (I > p) {
          a && iA(0);
          break;
        }
        o && g(C + 131072);
        var zA = C + fA;
        if (C < Y) {
          var NA = s - Y, ee = Math.min(Y, zA);
          for (NA + C < 0 && iA(3); C < ee; ++C)
            e[C] = n[NA + C];
        }
        for (; C < zA; ++C)
          e[C] = e[C - Y];
      }
    }
    A.l = Q, A.p = lA, A.b = C, A.f = B, Q && (B = 1, A.m = h, A.d = l, A.n = f);
  } while (!B);
  return C != e.length && i ? xe(e, 0, C) : e.subarray(0, C);
}, li = /* @__PURE__ */ new nA(0), CA = function(r, A) {
  return r[A] | r[A + 1] << 8;
}, BA = function(r, A) {
  return (r[A] | r[A + 1] << 8 | r[A + 2] << 16 | r[A + 3] << 24) >>> 0;
}, pe = function(r, A) {
  return BA(r, A) + BA(r, A + 4) * 4294967296;
};
function fi(r, A) {
  return ui(r, { i: 2 }, A.out, A.dictionary);
}
var Te = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), hi = 0;
try {
  Te.decode(li, { stream: !0 }), hi = 1;
} catch {
}
var di = function(r) {
  for (var A = "", e = 0; ; ) {
    var n = r[e++], t = (n > 127) + (n > 223) + (n > 239);
    if (e + t > r.length)
      return { s: A, r: xe(r, e - 1) };
    t ? t == 3 ? (n = ((n & 15) << 18 | (r[e++] & 63) << 12 | (r[e++] & 63) << 6 | r[e++] & 63) - 65536, A += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : t & 1 ? A += String.fromCharCode((n & 31) << 6 | r[e++] & 63) : A += String.fromCharCode((n & 15) << 12 | (r[e++] & 63) << 6 | r[e++] & 63) : A += String.fromCharCode(n);
  }
};
function pi(r, A) {
  if (A) {
    for (var e = "", n = 0; n < r.length; n += 16384)
      e += String.fromCharCode.apply(null, r.subarray(n, n + 16384));
    return e;
  } else {
    if (Te)
      return Te.decode(r);
    var t = di(r), s = t.s, e = t.r;
    return e.length && iA(8), s;
  }
}
var wi = function(r, A) {
  return A + 30 + CA(r, A + 26) + CA(r, A + 28);
}, mi = function(r, A, e) {
  var n = CA(r, A + 28), t = pi(r.subarray(A + 46, A + 46 + n), !(CA(r, A + 8) & 2048)), s = A + 46 + n, i = BA(r, A + 20), o = e && i == 4294967295 ? yi(r, s) : [i, BA(r, A + 24), BA(r, A + 42)], a = o[0], g = o[1], B = o[2];
  return [CA(r, A + 10), a, g, t, s + CA(r, A + 30) + CA(r, A + 32), B];
}, yi = function(r, A) {
  for (; CA(r, A) != 1; A += 4 + CA(r, A + 2))
    ;
  return [pe(r, A + 12), pe(r, A + 4), pe(r, A + 20)];
};
function Di(r, A) {
  for (var e = {}, n = r.length - 22; BA(r, n) != 101010256; --n)
    (!n || r.length - n > 65558) && iA(13);
  var t = CA(r, n + 8);
  if (!t)
    return {};
  var s = BA(r, n + 16), i = s == 4294967295 || t == 65535;
  if (i) {
    var o = BA(r, n - 12);
    i = BA(r, o) == 101075792, i && (t = BA(r, o + 32), s = BA(r, o + 48));
  }
  for (var a = 0; a < t; ++a) {
    var g = mi(r, s, i), B = g[0], I = g[1], C = g[2], Q = g[3], l = g[4], h = g[5], f = wi(r, h);
    s = l, B ? B == 8 ? e[Q] = fi(r.subarray(f, f + I), { out: new nA(C) }) : iA(14, "unknown compression type " + B) : e[Q] = xe(r, f, f + I);
  }
  return e;
}
class It {
  constructor(A) {
    j(this, "_files", {});
    this.archiveUrl = A;
  }
  get files() {
    return this._files;
  }
  async extract(A = 5, e = 1e3) {
    let n = 0, t = !1, s;
    for (; n < A && !t; )
      try {
        if (s = await fetch(this.archiveUrl), !s.ok)
          throw new Error(`Не удалось загрузить архив: ${s.statusText}`);
        t = !0;
      } catch (o) {
        if (n++, console.warn(`Попытка ${n} не удалась: ${o.message}`), n < A)
          await new Promise((a) => setTimeout(a, e));
        else
          throw new Error(`Не удалось загрузить архив после ${A} попыток`);
      }
    const i = new Uint8Array(await s.arrayBuffer());
    this._files = Di(i);
  }
  getFileContent(A) {
    const e = this._files[A];
    if (!e)
      throw new Error(`File ${A} not found in archive.`);
    return e;
  }
}
const Ri = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
var Si = Object.defineProperty, Fi = Object.getOwnPropertyDescriptor, Ti = (r, A, e, n) => {
  for (var t = n > 1 ? void 0 : n ? Fi(A, e) : A, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (t = (n ? i(A, e, t) : i(t)) || t);
  return n && t && Si(A, e, t), t;
};
let Ge = class {
  init(r) {
    XA.initKTX2Loader(r);
  }
  async load(r, A) {
    const e = XA.getInstance();
    await this.loadModelResources(e, r), await this.loadTextureResources(e, A);
  }
  async loadModelResources(r, A) {
    const e = new It(A);
    try {
      await e.extract();
      for (const n in e.files) {
        const t = e.getFileContent(n), s = new Blob([t]), i = URL.createObjectURL(s), o = await r.parseGLTFModel(t.buffer, i);
        Ri.set(n.split(".")[0], o);
      }
    } catch (n) {
      console.error(n.message);
    }
  }
  async loadTextureResources(r, A) {
    const e = new It(A);
    try {
      await e.extract();
      for (const n in e.files) {
        const t = e.getFileContent(n);
        if (n.includes(".ktx2")) {
          const i = await new Promise((o, a) => {
            XA._ktx2Loader.parse(t.buffer, o, a);
          });
          Bt.set(n.split(".")[0], i);
        } else {
          const i = new Blob([t], {
            type: "application/octet-stream"
          }), o = URL.createObjectURL(i), a = await r.loadTexture(o);
          Bt.set(n.split(".")[0], a), URL.revokeObjectURL(o);
        }
      }
    } catch (n) {
      console.error(n.message);
    }
  }
};
Ge = Ti([
  Bs()
], Ge);
function xi(r, A) {
  return new Is(async (e) => {
    const n = A.baseOpt;
    e(LA.BaseOpt).toConstantValue(n);
    const t = A.commonDebugOpt;
    e(LA.CommonDebugOpt).toConstantValue(t);
    const s = { value: 0 };
    e(LA.PassedTime).toConstantValue(s);
    const i = new es({
      canvas: r,
      antialias: n.antialias,
      powerPreference: "high-performance"
    });
    i.setSize(window.innerWidth, window.innerHeight), i.outputColorSpace = n.colorSpace, i.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const o = new dt(
      n.camera.fov,
      window.innerWidth / window.innerHeight,
      n.camera.near,
      n.camera.far
    );
    o.position.copy(n.camera.position);
    const a = {
      renderer: i,
      scene: new ts(),
      camera: o
    };
    e(LA.ThreeJsBase).toConstantValue(a);
    const g = new Ge();
    g.init(i), e(LA.ResourceLoader).toConstantValue(g);
    const B = new is({ title: "Debug", width: 300 });
    e(LA.GUI).toConstantValue(B), B.addFolder("Performance");
  });
}
async function Ui(r) {
  try {
    const A = await fetch(r);
    if (!A.ok)
      throw new Error(`Response status: ${A.status}`);
    return await A.json();
  } catch (A) {
    console.error(A.message);
  }
}
const TA = class TA {
  static async task(A) {
    return new Promise((e) => {
      TA.resolvers.set(this._idCounter++, {
        ms: A / 1e3,
        resolver: e
      });
    });
  }
  static update(A) {
    TA.resolvers.forEach((e, n) => {
      e.ms -= A, e.ms <= 0 && (e.resolver(), TA.resolvers.delete(n));
    });
  }
};
j(TA, "_idCounter", 0), j(TA, "resolvers", /* @__PURE__ */ new Map());
let Le = TA;
function Gi(r, A) {
  const e = r.folders.find((n) => n._title === A);
  if (!e)
    throw new Error(`Folder with name ${A} not found`);
  return e;
}
function Ni(r, A, e, n = "XYZ") {
  const t = r.toArray(), s = A.toArray(), i = t.map((o, a) => o + (s[a] - o) * e);
  return new ns(i[0], i[1], i[2], n);
}
async function bi(r) {
  return new Promise((A) => {
    setTimeout(() => {
      A();
    }, r);
  });
}
function vi(r, A) {
  const e = r.frames.find(
    (a) => a.filename.toLowerCase() === A.toLowerCase()
  );
  if (!e) throw new Error(`Frame with id ${A} not found in atlas config`);
  const { x: n, y: t, h: s } = e.frame, { size: i } = r.meta, o = t / i.h;
  return new _e(n / i.w, o);
}
function Hi(r) {
  return r.x * r.x + r.y * r.y + r.z * r.z;
}
function Oi(r, A, e, n, t) {
  return (r - A) / (e - A) * (t - n) + n;
}
class qi {
  constructor(A, e, n, t, s) {
    j(this, "deltaTime", 0);
    j(this, "clock", new ss());
    j(this, "performanceFolderController");
    this.threeJSBase = A, this.commonDebugOpt = e, this.updatables = n, this.allPassedTime = t, this.gui = s, oe.ticker.remove(oe.updateRoot), this.performanceFolderController = this.addDebugGUI();
  }
  get getDeltaTime() {
    return this.deltaTime;
  }
  handleUpdate() {
    this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale, this.allPassedTime.value += this.deltaTime, Le.update(this.deltaTime), oe.updateRoot(this.allPassedTime.value), this.updatables.forEach((A) => {
      A.update(this.deltaTime, this.threeJSBase.camera);
    });
  }
  addDebugGUI() {
    return Gi(this.gui, "Performance").add(this.commonDebugOpt, "timeScale", 0.1, 2).name("Time Scale");
  }
}
class Ji {
  constructor(...A) {
    j(this, "args");
    this.args = A;
  }
}
function Pi(r, A) {
  const e = (n) => {
    A(...n.detail);
  };
  return document.addEventListener(r.name, e, { passive: !0 }), {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(r.name, e)
  };
}
function Ki(r) {
  const A = new CustomEvent(r.constructor.name, {
    detail: r.args
  });
  document.dispatchEvent(A);
}
export {
  It as ArchiveExtractor,
  LA as BASETYPES,
  qi as BaseUpdateHandler,
  Ji as EventBase,
  Ri as ModelsResources,
  Ge as ResourceLoader,
  Le as TaskManager,
  Bt as TexturesResources,
  XA as ThreeJSLoaderWrapper,
  xi as buildBaseDIModule,
  Gi as findGUIFolder,
  Ui as getConfigJSON,
  Hi as getLengthVector,
  vi as getSpriteOffset,
  Ni as lerpingRotation,
  Oi as mapRange,
  Ki as publish,
  bi as sleep,
  Pi as subscribe
};
