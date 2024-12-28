var Vs = Object.defineProperty;
var Xs = (o, e, A) => e in o ? Vs(o, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : o[e] = A;
var Ce = (o, e, A) => Xs(o, typeof e != "symbol" ? e + "" : e, A);
import { Loader as Ji, FileLoader as DA, CompressedCubeTexture as Ws, UnsignedByteType as Je, CompressedArrayTexture as js, CompressedTexture as nr, LinearFilter as Mt, LinearMipmapLinearFilter as Yi, RGBAFormat as vA, RGBA_ASTC_4x4_Format as rr, RGBA_BPTC_Format as zs, RGBA_ETC2_EAC_Format as Zs, RGBA_PVRTC_4BPPV1_Format as $s, RGBA_S3TC_DXT5_Format as eo, RGB_ETC1_Format as Ao, RGB_ETC2_Format as to, RGB_PVRTC_4BPPV1_Format as io, RGBA_S3TC_DXT1_Format as no, FloatType as Tt, HalfFloatType as it, DataTexture as ro, Data3DTexture as so, SRGBColorSpace as rA, LinearSRGBColorSpace as Ke, DisplayP3ColorSpace as oo, LinearDisplayP3ColorSpace as ao, NoColorSpace as En, RGFormat as nt, RedFormat as rt, RGBA_ASTC_6x6_Format as Qn, BufferGeometry as sr, BufferAttribute as gt, Color as IA, ColorManagement as Ei, TrianglesDrawMode as go, TriangleFanDrawMode as Qi, TriangleStripDrawMode as or, LoaderUtils as ct, SpotLight as co, PointLight as uo, DirectionalLight as fo, MeshBasicMaterial as st, MeshPhysicalMaterial as eA, Vector2 as Ki, Matrix4 as Lt, Vector3 as bA, Quaternion as ar, InstancedMesh as ho, InstancedBufferAttribute as lo, Object3D as gr, TextureLoader as cr, ImageBitmapLoader as Io, InterleavedBuffer as Bo, InterleavedBufferAttribute as Co, RepeatWrapping as pi, PointsMaterial as Eo, Material as Xt, LineBasicMaterial as Qo, MeshStandardMaterial as ur, DoubleSide as po, PropertyBinding as _o, SkinnedMesh as mo, Mesh as wo, LineSegments as yo, Line as Do, LineLoop as To, Points as So, Group as Wt, PerspectiveCamera as fr, MathUtils as Ro, OrthographicCamera as xo, Skeleton as Fo, AnimationClip as Mo, Bone as Lo, InterpolateLinear as hr, NearestFilter as ko, NearestMipmapNearestFilter as Go, LinearMipmapNearestFilter as vo, NearestMipmapLinearFilter as bo, ClampToEdgeWrapping as No, MirroredRepeatWrapping as Uo, InterpolateDiscrete as Oo, FrontSide as Po, Texture as pn, VectorKeyframeTrack as _n, NumberKeyframeTrack as mn, QuaternionKeyframeTrack as wn, Box3 as Ho, Sphere as qo, Interpolant as Jo, LoadingManager as Yo, WebGLRenderer as Ko, Scene as Vo, Euler as Xo, Clock as Wo } from "three";
import jo from "lil-gui";
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dn = {};
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
var Tn;
function zo() {
  if (Tn) return Dn;
  Tn = 1;
  var o;
  return function(e) {
    (function(A) {
      var t = typeof globalThis == "object" ? globalThis : typeof yn == "object" ? yn : typeof self == "object" ? self : typeof this == "object" ? this : a(), i = n(e);
      typeof t.Reflect < "u" && (i = n(t.Reflect, i)), A(i, t), typeof t.Reflect > "u" && (t.Reflect = e);
      function n(g, c) {
        return function(u, f) {
          Object.defineProperty(g, u, { configurable: !0, writable: !0, value: f }), c && c(u, f);
        };
      }
      function r() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function s() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function a() {
        return r() || s();
      }
    })(function(A, t) {
      var i = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", r = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", a = typeof Object.create == "function", g = { __proto__: [] } instanceof Array, c = !a && !g, u = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: a ? function() {
          return Vt(/* @__PURE__ */ Object.create(null));
        } : g ? function() {
          return Vt({ __proto__: null });
        } : function() {
          return Vt({});
        },
        has: c ? function(d, Q) {
          return i.call(d, Q);
        } : function(d, Q) {
          return Q in d;
        },
        get: c ? function(d, Q) {
          return i.call(d, Q) ? d[Q] : void 0;
        } : function(d, Q) {
          return d[Q];
        }
      }, f = Object.getPrototypeOf(Function), l = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Hs(), I = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : qs(), h = typeof WeakMap == "function" ? WeakMap : Js(), B = n ? Symbol.for("@reflect-metadata:registry") : void 0, C = Us(), E = Os(C);
      function p(d, Q, w, R) {
        if (k(w)) {
          if (!ZA(d))
            throw new TypeError();
          if (!fn(Q))
            throw new TypeError();
          return U(d, Q);
        } else {
          if (!ZA(d))
            throw new TypeError();
          if (!te(Q))
            throw new TypeError();
          if (!te(R) && !k(R) && !ce(R))
            throw new TypeError();
          return ce(R) && (R = void 0), w = Re(w), j(d, Q, w, R);
        }
      }
      A("decorate", p);
      function _(d, Q) {
        function w(R, G) {
          if (!te(R))
            throw new TypeError();
          if (!k(G) && !bs(G))
            throw new TypeError();
          ee(d, Q, R, G);
        }
        return w;
      }
      A("metadata", _);
      function m(d, Q, w, R) {
        if (!te(w))
          throw new TypeError();
        return k(R) || (R = Re(R)), ee(d, Q, w, R);
      }
      A("defineMetadata", m);
      function D(d, Q, w) {
        if (!te(Q))
          throw new TypeError();
        return k(w) || (w = Re(w)), V(d, Q, w);
      }
      A("hasMetadata", D);
      function T(d, Q, w) {
        if (!te(Q))
          throw new TypeError();
        return k(w) || (w = Re(w)), q(d, Q, w);
      }
      A("hasOwnMetadata", T);
      function S(d, Q, w) {
        if (!te(Q))
          throw new TypeError();
        return k(w) || (w = Re(w)), N(d, Q, w);
      }
      A("getMetadata", S);
      function y(d, Q, w) {
        if (!te(Q))
          throw new TypeError();
        return k(w) || (w = Re(w)), X(d, Q, w);
      }
      A("getOwnMetadata", y);
      function v(d, Q) {
        if (!te(d))
          throw new TypeError();
        return k(Q) || (Q = Re(Q)), ae(d, Q);
      }
      A("getMetadataKeys", v);
      function b(d, Q) {
        if (!te(d))
          throw new TypeError();
        return k(Q) || (Q = Re(Q)), Ie(d, Q);
      }
      A("getOwnMetadataKeys", b);
      function H(d, Q, w) {
        if (!te(Q))
          throw new TypeError();
        if (k(w) || (w = Re(w)), !te(Q))
          throw new TypeError();
        k(w) || (w = Re(w));
        var R = $A(
          Q,
          w,
          /*Create*/
          !1
        );
        return k(R) ? !1 : R.OrdinaryDeleteMetadata(d, Q, w);
      }
      A("deleteMetadata", H);
      function U(d, Q) {
        for (var w = d.length - 1; w >= 0; --w) {
          var R = d[w], G = R(Q);
          if (!k(G) && !ce(G)) {
            if (!fn(G))
              throw new TypeError();
            Q = G;
          }
        }
        return Q;
      }
      function j(d, Q, w, R) {
        for (var G = d.length - 1; G >= 0; --G) {
          var fe = d[G], ue = fe(Q, w, R);
          if (!k(ue) && !ce(ue)) {
            if (!te(ue))
              throw new TypeError();
            R = ue;
          }
        }
        return R;
      }
      function V(d, Q, w) {
        var R = q(d, Q, w);
        if (R)
          return !0;
        var G = Kt(Q);
        return ce(G) ? !1 : V(d, G, w);
      }
      function q(d, Q, w) {
        var R = $A(
          Q,
          w,
          /*Create*/
          !1
        );
        return k(R) ? !1 : zA(R.OrdinaryHasOwnMetadata(d, Q, w));
      }
      function N(d, Q, w) {
        var R = q(d, Q, w);
        if (R)
          return X(d, Q, w);
        var G = Kt(Q);
        if (!ce(G))
          return N(d, G, w);
      }
      function X(d, Q, w) {
        var R = $A(
          Q,
          w,
          /*Create*/
          !1
        );
        if (!k(R))
          return R.OrdinaryGetOwnMetadata(d, Q, w);
      }
      function ee(d, Q, w, R) {
        var G = $A(
          w,
          R,
          /*Create*/
          !0
        );
        G.OrdinaryDefineOwnMetadata(d, Q, w, R);
      }
      function ae(d, Q) {
        var w = Ie(d, Q), R = Kt(d);
        if (R === null)
          return w;
        var G = ae(R, Q);
        if (G.length <= 0)
          return w;
        if (w.length <= 0)
          return G;
        for (var fe = new I(), ue = [], O = 0, x = w; O < x.length; O++) {
          var F = x[O], M = fe.has(F);
          M || (fe.add(F), ue.push(F));
        }
        for (var L = 0, J = G; L < J.length; L++) {
          var F = J[L], M = fe.has(F);
          M || (fe.add(F), ue.push(F));
        }
        return ue;
      }
      function Ie(d, Q) {
        var w = $A(
          d,
          Q,
          /*create*/
          !1
        );
        return w ? w.OrdinaryOwnMetadataKeys(d, Q) : [];
      }
      function Be(d) {
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
      function k(d) {
        return d === void 0;
      }
      function ce(d) {
        return d === null;
      }
      function pe(d) {
        return typeof d == "symbol";
      }
      function te(d) {
        return typeof d == "object" ? d !== null : typeof d == "function";
      }
      function jA(d, Q) {
        switch (Be(d)) {
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
        var w = "string", R = hn(d, r);
        if (R !== void 0) {
          var G = R.call(d, w);
          if (te(G))
            throw new TypeError();
          return G;
        }
        return yt(d);
      }
      function yt(d, Q) {
        var w, R;
        {
          var G = d.toString;
          if (EA(G)) {
            var R = G.call(d);
            if (!te(R))
              return R;
          }
          var w = d.valueOf;
          if (EA(w)) {
            var R = w.call(d);
            if (!te(R))
              return R;
          }
        }
        throw new TypeError();
      }
      function zA(d) {
        return !!d;
      }
      function Jt(d) {
        return "" + d;
      }
      function Re(d) {
        var Q = jA(d);
        return pe(Q) ? Q : Jt(Q);
      }
      function ZA(d) {
        return Array.isArray ? Array.isArray(d) : d instanceof Object ? d instanceof Array : Object.prototype.toString.call(d) === "[object Array]";
      }
      function EA(d) {
        return typeof d == "function";
      }
      function fn(d) {
        return typeof d == "function";
      }
      function bs(d) {
        switch (Be(d)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function Yt(d, Q) {
        return d === Q || d !== d && Q !== Q;
      }
      function hn(d, Q) {
        var w = d[Q];
        if (w != null) {
          if (!EA(w))
            throw new TypeError();
          return w;
        }
      }
      function ln(d) {
        var Q = hn(d, s);
        if (!EA(Q))
          throw new TypeError();
        var w = Q.call(d);
        if (!te(w))
          throw new TypeError();
        return w;
      }
      function In(d) {
        return d.value;
      }
      function Bn(d) {
        var Q = d.next();
        return Q.done ? !1 : Q;
      }
      function Cn(d) {
        var Q = d.return;
        Q && Q.call(d);
      }
      function Kt(d) {
        var Q = Object.getPrototypeOf(d);
        if (typeof d != "function" || d === f || Q !== f)
          return Q;
        var w = d.prototype, R = w && Object.getPrototypeOf(w);
        if (R == null || R === Object.prototype)
          return Q;
        var G = R.constructor;
        return typeof G != "function" || G === d ? Q : G;
      }
      function Ns() {
        var d;
        !k(B) && typeof t.Reflect < "u" && !(B in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (d = Ps(t.Reflect));
        var Q, w, R, G = new h(), fe = {
          registerProvider: ue,
          getProvider: x,
          setProvider: M
        };
        return fe;
        function ue(L) {
          if (!Object.isExtensible(fe))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case d === L:
              break;
            case k(Q):
              Q = L;
              break;
            case Q === L:
              break;
            case k(w):
              w = L;
              break;
            case w === L:
              break;
            default:
              R === void 0 && (R = new I()), R.add(L);
              break;
          }
        }
        function O(L, J) {
          if (!k(Q)) {
            if (Q.isProviderFor(L, J))
              return Q;
            if (!k(w)) {
              if (w.isProviderFor(L, J))
                return Q;
              if (!k(R))
                for (var Z = ln(R); ; ) {
                  var se = Bn(Z);
                  if (!se)
                    return;
                  var He = In(se);
                  if (He.isProviderFor(L, J))
                    return Cn(Z), He;
                }
            }
          }
          if (!k(d) && d.isProviderFor(L, J))
            return d;
        }
        function x(L, J) {
          var Z = G.get(L), se;
          return k(Z) || (se = Z.get(J)), k(se) && (se = O(L, J), k(se) || (k(Z) && (Z = new l(), G.set(L, Z)), Z.set(J, se))), se;
        }
        function F(L) {
          if (k(L))
            throw new TypeError();
          return Q === L || w === L || !k(R) && R.has(L);
        }
        function M(L, J, Z) {
          if (!F(Z))
            throw new Error("Metadata provider not registered.");
          var se = x(L, J);
          if (se !== Z) {
            if (!k(se))
              return !1;
            var He = G.get(L);
            k(He) && (He = new l(), G.set(L, He)), He.set(J, Z);
          }
          return !0;
        }
      }
      function Us() {
        var d;
        return !k(B) && te(t.Reflect) && Object.isExtensible(t.Reflect) && (d = t.Reflect[B]), k(d) && (d = Ns()), !k(B) && te(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, B, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: d
        }), d;
      }
      function Os(d) {
        var Q = new h(), w = {
          isProviderFor: function(F, M) {
            var L = Q.get(F);
            return k(L) ? !1 : L.has(M);
          },
          OrdinaryDefineOwnMetadata: ue,
          OrdinaryHasOwnMetadata: G,
          OrdinaryGetOwnMetadata: fe,
          OrdinaryOwnMetadataKeys: O,
          OrdinaryDeleteMetadata: x
        };
        return C.registerProvider(w), w;
        function R(F, M, L) {
          var J = Q.get(F), Z = !1;
          if (k(J)) {
            if (!L)
              return;
            J = new l(), Q.set(F, J), Z = !0;
          }
          var se = J.get(M);
          if (k(se)) {
            if (!L)
              return;
            if (se = new l(), J.set(M, se), !d.setProvider(F, M, w))
              throw J.delete(M), Z && Q.delete(F), new Error("Wrong provider for target.");
          }
          return se;
        }
        function G(F, M, L) {
          var J = R(
            M,
            L,
            /*Create*/
            !1
          );
          return k(J) ? !1 : zA(J.has(F));
        }
        function fe(F, M, L) {
          var J = R(
            M,
            L,
            /*Create*/
            !1
          );
          if (!k(J))
            return J.get(F);
        }
        function ue(F, M, L, J) {
          var Z = R(
            L,
            J,
            /*Create*/
            !0
          );
          Z.set(F, M);
        }
        function O(F, M) {
          var L = [], J = R(
            F,
            M,
            /*Create*/
            !1
          );
          if (k(J))
            return L;
          for (var Z = J.keys(), se = ln(Z), He = 0; ; ) {
            var dn = Bn(se);
            if (!dn)
              return L.length = He, L;
            var Ys = In(dn);
            try {
              L[He] = Ys;
            } catch (Ks) {
              try {
                Cn(se);
              } finally {
                throw Ks;
              }
            }
            He++;
          }
        }
        function x(F, M, L) {
          var J = R(
            M,
            L,
            /*Create*/
            !1
          );
          if (k(J) || !J.delete(F))
            return !1;
          if (J.size === 0) {
            var Z = Q.get(M);
            k(Z) || (Z.delete(L), Z.size === 0 && Q.delete(Z));
          }
          return !0;
        }
      }
      function Ps(d) {
        var Q = d.defineMetadata, w = d.hasOwnMetadata, R = d.getOwnMetadata, G = d.getOwnMetadataKeys, fe = d.deleteMetadata, ue = new h(), O = {
          isProviderFor: function(x, F) {
            var M = ue.get(x);
            return !k(M) && M.has(F) ? !0 : G(x, F).length ? (k(M) && (M = new I(), ue.set(x, M)), M.add(F), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: Q,
          OrdinaryHasOwnMetadata: w,
          OrdinaryGetOwnMetadata: R,
          OrdinaryOwnMetadataKeys: G,
          OrdinaryDeleteMetadata: fe
        };
        return O;
      }
      function $A(d, Q, w) {
        var R = C.getProvider(d, Q);
        if (!k(R))
          return R;
        if (w) {
          if (C.setProvider(d, Q, E))
            return E;
          throw new Error("Illegal state.");
        }
      }
      function Hs() {
        var d = {}, Q = [], w = (
          /** @class */
          function() {
            function O(x, F, M) {
              this._index = 0, this._keys = x, this._values = F, this._selector = M;
            }
            return O.prototype["@@iterator"] = function() {
              return this;
            }, O.prototype[s] = function() {
              return this;
            }, O.prototype.next = function() {
              var x = this._index;
              if (x >= 0 && x < this._keys.length) {
                var F = this._selector(this._keys[x], this._values[x]);
                return x + 1 >= this._keys.length ? (this._index = -1, this._keys = Q, this._values = Q) : this._index++, { value: F, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, O.prototype.throw = function(x) {
              throw this._index >= 0 && (this._index = -1, this._keys = Q, this._values = Q), x;
            }, O.prototype.return = function(x) {
              return this._index >= 0 && (this._index = -1, this._keys = Q, this._values = Q), { value: x, done: !0 };
            }, O;
          }()
        ), R = (
          /** @class */
          function() {
            function O() {
              this._keys = [], this._values = [], this._cacheKey = d, this._cacheIndex = -2;
            }
            return Object.defineProperty(O.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), O.prototype.has = function(x) {
              return this._find(
                x,
                /*insert*/
                !1
              ) >= 0;
            }, O.prototype.get = function(x) {
              var F = this._find(
                x,
                /*insert*/
                !1
              );
              return F >= 0 ? this._values[F] : void 0;
            }, O.prototype.set = function(x, F) {
              var M = this._find(
                x,
                /*insert*/
                !0
              );
              return this._values[M] = F, this;
            }, O.prototype.delete = function(x) {
              var F = this._find(
                x,
                /*insert*/
                !1
              );
              if (F >= 0) {
                for (var M = this._keys.length, L = F + 1; L < M; L++)
                  this._keys[L - 1] = this._keys[L], this._values[L - 1] = this._values[L];
                return this._keys.length--, this._values.length--, Yt(x, this._cacheKey) && (this._cacheKey = d, this._cacheIndex = -2), !0;
              }
              return !1;
            }, O.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = d, this._cacheIndex = -2;
            }, O.prototype.keys = function() {
              return new w(this._keys, this._values, G);
            }, O.prototype.values = function() {
              return new w(this._keys, this._values, fe);
            }, O.prototype.entries = function() {
              return new w(this._keys, this._values, ue);
            }, O.prototype["@@iterator"] = function() {
              return this.entries();
            }, O.prototype[s] = function() {
              return this.entries();
            }, O.prototype._find = function(x, F) {
              if (!Yt(this._cacheKey, x)) {
                this._cacheIndex = -1;
                for (var M = 0; M < this._keys.length; M++)
                  if (Yt(this._keys[M], x)) {
                    this._cacheIndex = M;
                    break;
                  }
              }
              return this._cacheIndex < 0 && F && (this._cacheIndex = this._keys.length, this._keys.push(x), this._values.push(void 0)), this._cacheIndex;
            }, O;
          }()
        );
        return R;
        function G(O, x) {
          return O;
        }
        function fe(O, x) {
          return x;
        }
        function ue(O, x) {
          return [O, x];
        }
      }
      function qs() {
        var d = (
          /** @class */
          function() {
            function Q() {
              this._map = new l();
            }
            return Object.defineProperty(Q.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), Q.prototype.has = function(w) {
              return this._map.has(w);
            }, Q.prototype.add = function(w) {
              return this._map.set(w, w), this;
            }, Q.prototype.delete = function(w) {
              return this._map.delete(w);
            }, Q.prototype.clear = function() {
              this._map.clear();
            }, Q.prototype.keys = function() {
              return this._map.keys();
            }, Q.prototype.values = function() {
              return this._map.keys();
            }, Q.prototype.entries = function() {
              return this._map.entries();
            }, Q.prototype["@@iterator"] = function() {
              return this.keys();
            }, Q.prototype[s] = function() {
              return this.keys();
            }, Q;
          }()
        );
        return d;
      }
      function Js() {
        var d = 16, Q = u.create(), w = R();
        return (
          /** @class */
          function() {
            function x() {
              this._key = R();
            }
            return x.prototype.has = function(F) {
              var M = G(
                F,
                /*create*/
                !1
              );
              return M !== void 0 ? u.has(M, this._key) : !1;
            }, x.prototype.get = function(F) {
              var M = G(
                F,
                /*create*/
                !1
              );
              return M !== void 0 ? u.get(M, this._key) : void 0;
            }, x.prototype.set = function(F, M) {
              var L = G(
                F,
                /*create*/
                !0
              );
              return L[this._key] = M, this;
            }, x.prototype.delete = function(F) {
              var M = G(
                F,
                /*create*/
                !1
              );
              return M !== void 0 ? delete M[this._key] : !1;
            }, x.prototype.clear = function() {
              this._key = R();
            }, x;
          }()
        );
        function R() {
          var x;
          do
            x = "@@WeakMap@@" + O();
          while (u.has(Q, x));
          return Q[x] = !0, x;
        }
        function G(x, F) {
          if (!i.call(x, w)) {
            if (!F)
              return;
            Object.defineProperty(x, w, { value: u.create() });
          }
          return x[w];
        }
        function fe(x, F) {
          for (var M = 0; M < F; ++M)
            x[M] = Math.random() * 255 | 0;
          return x;
        }
        function ue(x) {
          if (typeof Uint8Array == "function") {
            var F = new Uint8Array(x);
            return typeof crypto < "u" ? crypto.getRandomValues(F) : typeof msCrypto < "u" ? msCrypto.getRandomValues(F) : fe(F, x), F;
          }
          return fe(new Array(x), x);
        }
        function O() {
          var x = ue(d);
          x[6] = x[6] & 79 | 64, x[8] = x[8] & 191 | 128;
          for (var F = "", M = 0; M < d; ++M) {
            var L = x[M];
            (M === 4 || M === 6 || M === 8) && (F += "-"), L < 16 && (F += "0"), F += L.toString(16).toLowerCase();
          }
          return F;
        }
      }
      function Vt(d) {
        return d.__ = void 0, delete d.__, d;
      }
    });
  }(o || (o = {})), Dn;
}
zo();
const Sn = "inversify:paramtypes", Zo = "design:paramtypes";
let $o = 0;
function ea() {
  return $o++;
}
var Rn;
(function(o) {
  o[o.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", o[o.NoBindingsAvailable = 0] = "NoBindingsAvailable", o[o.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(Rn || (Rn = {}));
var xn;
(function(o) {
  o.DynamicValue = "toDynamicValue", o.Factory = "toFactory", o.Provider = "toProvider";
})(xn || (xn = {}));
class Aa {
  constructor(e) {
    Ce(this, "id");
    Ce(this, "registry");
    this.id = ea(), this.registry = e;
  }
}
function ta() {
  return function(o) {
    if (Reflect.hasOwnMetadata(Sn, o)) throw new Error("Cannot apply @injectable decorator multiple times.");
    const e = Reflect.getMetadata(Zo, o) || [];
    return Reflect.defineMetadata(Sn, e, o), o;
  };
}
const kA = {
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
class ia {
  constructor(e = 4) {
    this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const A = this.workerCreator();
      A.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = A;
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & 1 << e)) return e;
    return -1;
  }
  _onMessage(e, A) {
    const t = this.workersResolve[e];
    if (t && t(A), this.queue.length) {
      const { resolve: i, msg: n, transfer: r } = this.queue.shift();
      this.workersResolve[e] = i, this.workers[e].postMessage(n, r);
    } else
      this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, A) {
    return new Promise((t) => {
      const i = this._getIdleWorker();
      i !== -1 ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = t, this.workers[i].postMessage(e, A)) : this.queue.push({ resolve: t, msg: e, transfer: A });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const na = 0, Fn = 2, ra = 1, Mn = 2, sa = 0, oa = 1, aa = 10, ga = 0, lr = 9, Ir = 15, Br = 16, Cr = 22, dr = 37, Er = 43, Qr = 76, pr = 83, _r = 97, mr = 100, wr = 103, yr = 109, Dr = 165, Tr = 166, Sr = 1000066e3;
class ca {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class et {
  constructor(e, A, t, i) {
    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(e.buffer, e.byteOffset + A, t), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return this._offset += 1, e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint8Array(e) {
    const A = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, e);
    return this._offset += e, A;
  }
  _skip(e) {
    return this._offset += e, this;
  }
  _scan(e, A) {
    A === void 0 && (A = 0);
    const t = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== A && i < e; ) i++, this._offset++;
    return i < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + t, i);
  }
}
const _e = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function Ln(o) {
  return new TextDecoder().decode(o);
}
function ua(o) {
  const e = new Uint8Array(o.buffer, o.byteOffset, _e.length);
  if (e[0] !== _e[0] || e[1] !== _e[1] || e[2] !== _e[2] || e[3] !== _e[3] || e[4] !== _e[4] || e[5] !== _e[5] || e[6] !== _e[6] || e[7] !== _e[7] || e[8] !== _e[8] || e[9] !== _e[9] || e[10] !== _e[10] || e[11] !== _e[11]) throw new Error("Missing KTX 2.0 identifier.");
  const A = new ca(), t = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new et(o, _e.length, t, !0);
  A.vkFormat = i._nextUint32(), A.typeSize = i._nextUint32(), A.pixelWidth = i._nextUint32(), A.pixelHeight = i._nextUint32(), A.pixelDepth = i._nextUint32(), A.layerCount = i._nextUint32(), A.faceCount = i._nextUint32();
  const n = i._nextUint32();
  A.supercompressionScheme = i._nextUint32();
  const r = i._nextUint32(), s = i._nextUint32(), a = i._nextUint32(), g = i._nextUint32(), c = i._nextUint64(), u = i._nextUint64(), f = new et(o, _e.length + t, 3 * n * 8, !0);
  for (let N = 0; N < n; N++) A.levels.push({ levelData: new Uint8Array(o.buffer, o.byteOffset + f._nextUint64(), f._nextUint64()), uncompressedByteLength: f._nextUint64() });
  const l = new et(o, r, s, !0), I = { vendorId: l._skip(4)._nextUint16(), descriptorType: l._nextUint16(), versionNumber: l._nextUint16(), descriptorBlockSize: l._nextUint16(), colorModel: l._nextUint8(), colorPrimaries: l._nextUint8(), transferFunction: l._nextUint8(), flags: l._nextUint8(), texelBlockDimension: [l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8()], bytesPlane: [l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8()], samples: [] }, h = (I.descriptorBlockSize / 4 - 6) / 4;
  for (let N = 0; N < h; N++) {
    const X = { bitOffset: l._nextUint16(), bitLength: l._nextUint8(), channelType: l._nextUint8(), samplePosition: [l._nextUint8(), l._nextUint8(), l._nextUint8(), l._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & X.channelType ? (X.sampleLower = l._nextInt32(), X.sampleUpper = l._nextInt32()) : (X.sampleLower = l._nextUint32(), X.sampleUpper = l._nextUint32()), I.samples[N] = X;
  }
  A.dataFormatDescriptor.length = 0, A.dataFormatDescriptor.push(I);
  const B = new et(o, a, g, !0);
  for (; B._offset < g; ) {
    const N = B._nextUint32(), X = B._scan(N), ee = Ln(X);
    if (A.keyValue[ee] = B._nextUint8Array(N - X.byteLength - 1), ee.match(/^ktx/i)) {
      const ae = Ln(A.keyValue[ee]);
      A.keyValue[ee] = ae.substring(0, ae.lastIndexOf("\0"));
    }
    B._skip(N % 4 ? 4 - N % 4 : 0);
  }
  if (u <= 0) return A;
  const C = new et(o, c, u, !0), E = C._nextUint16(), p = C._nextUint16(), _ = C._nextUint32(), m = C._nextUint32(), D = C._nextUint32(), T = C._nextUint32(), S = [];
  for (let N = 0; N < n; N++) S.push({ imageFlags: C._nextUint32(), rgbSliceByteOffset: C._nextUint32(), rgbSliceByteLength: C._nextUint32(), alphaSliceByteOffset: C._nextUint32(), alphaSliceByteLength: C._nextUint32() });
  const y = c + C._offset, v = y + _, b = v + m, H = b + D, U = new Uint8Array(o.buffer, o.byteOffset + y, _), j = new Uint8Array(o.buffer, o.byteOffset + v, m), V = new Uint8Array(o.buffer, o.byteOffset + b, D), q = new Uint8Array(o.buffer, o.byteOffset + H, T);
  return A.globalData = { endpointCount: E, selectorCount: p, imageDescs: S, endpointsData: U, selectorsData: j, tablesData: V, extendedData: q }, A;
}
let jt, AA, _i;
const zt = { env: { emscripten_notify_memory_growth: function(o) {
  _i = new Uint8Array(AA.exports.memory.buffer);
} } };
class fa {
  init() {
    return jt || (jt = typeof fetch < "u" ? fetch("data:application/wasm;base64," + kn).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, zt)).then(this._init) : WebAssembly.instantiate(Buffer.from(kn, "base64"), zt).then(this._init), jt);
  }
  _init(e) {
    AA = e.instance, zt.env.emscripten_notify_memory_growth(0);
  }
  decode(e, A = 0) {
    if (!AA) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const t = e.byteLength, i = AA.exports.malloc(t);
    _i.set(e, i), A = A || Number(AA.exports.ZSTD_findDecompressedSize(i, t));
    const n = AA.exports.malloc(A), r = AA.exports.ZSTD_decompress(n, A, i, t), s = _i.slice(n, n + r);
    return AA.exports.free(i), AA.exports.free(n), s;
  }
}
const kn = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", Zt = /* @__PURE__ */ new WeakMap();
let $t = 0, ei;
class je extends Ji {
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new ia(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(e) {
    return this.transcoderPath = e, this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  async detectSupportAsync(e) {
    return this.workerConfig = {
      astcSupported: await e.hasFeatureAsync("texture-compression-astc"),
      etc1Supported: await e.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await e.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await e.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await e.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  detectSupport(e) {
    return e.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: e.hasFeature("texture-compression-astc"),
      etc1Supported: e.hasFeature("texture-compression-etc1"),
      etc2Supported: e.hasFeature("texture-compression-etc2"),
      dxtSupported: e.hasFeature("texture-compression-bc"),
      bptcSupported: e.hasFeature("texture-compression-bptc"),
      pvrtcSupported: e.hasFeature("texture-compression-pvrtc")
    } : this.workerConfig = {
      astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, this;
  }
  init() {
    if (!this.transcoderPending) {
      const e = new DA(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const A = e.loadAsync("basis_transcoder.js"), t = new DA(this.manager);
      t.setPath(this.transcoderPath), t.setResponseType("arraybuffer"), t.setWithCredentials(this.withCredentials);
      const i = t.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([A, i]).then(([n, r]) => {
        const s = je.BasisWorker.toString(), a = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(je.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(je.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(je.BasisFormat),
          "/* basis_transcoder.js */",
          n,
          "/* worker */",
          s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a])), this.transcoderBinary = r, this.workerPool.setWorkerCreator(() => {
          const g = new Worker(this.workerSourceURL), c = this.transcoderBinary.slice(0);
          return g.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: c }, [c]), g;
        });
      }), $t > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), $t++;
    }
    return this.transcoderPending;
  }
  load(e, A, t, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const n = new DA(this.manager);
    n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials), n.load(e, (r) => {
      this.parse(r, A, i);
    }, t, i);
  }
  parse(e, A, t) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    if (Zt.has(e))
      return Zt.get(e).promise.then(A).catch(t);
    this._createTexture(e).then((i) => A ? A(i) : null).catch(t);
  }
  _createTextureFrom(e, A) {
    const { faces: t, width: i, height: n, format: r, type: s, error: a, dfdFlags: g } = e;
    if (s === "error") return Promise.reject(a);
    let c;
    if (A.faceCount === 6)
      c = new Ws(t, r, Je);
    else {
      const u = t[0].mipmaps;
      c = A.layerCount > 1 ? new js(u, i, n, A.layerCount, r, Je) : new nr(u, i, n, r, Je);
    }
    return c.minFilter = t[0].mipmaps.length === 1 ? Mt : Yi, c.magFilter = Mt, c.generateMipmaps = !1, c.needsUpdate = !0, c.colorSpace = Rr(A), c.premultiplyAlpha = !!(g & ra), c;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(e, A = {}) {
    const t = ua(new Uint8Array(e));
    if (t.vkFormat !== ga)
      return la(t);
    const i = A, n = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: i }, [e])).then((r) => this._createTextureFrom(r.data, t));
    return Zt.set(e, { promise: n }), n;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), $t--, this;
  }
}
je.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
je.TranscoderFormat = {
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
je.EngineFormat = {
  RGBAFormat: vA,
  RGBA_ASTC_4x4_Format: rr,
  RGBA_BPTC_Format: zs,
  RGBA_ETC2_EAC_Format: Zs,
  RGBA_PVRTC_4BPPV1_Format: $s,
  RGBA_S3TC_DXT5_Format: eo,
  RGB_ETC1_Format: Ao,
  RGB_ETC2_Format: to,
  RGB_PVRTC_4BPPV1_Format: io,
  RGBA_S3TC_DXT1_Format: no
};
je.BasisWorker = function() {
  let o, e, A;
  const t = _EngineFormat, i = _TranscoderFormat, n = _BasisFormat;
  self.addEventListener("message", function(I) {
    const h = I.data;
    switch (h.type) {
      case "init":
        o = h.config, r(h.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: B, buffers: C, width: E, height: p, hasAlpha: _, format: m, dfdFlags: D } = s(h.buffer);
            self.postMessage({ type: "transcode", id: h.id, faces: B, width: E, height: p, hasAlpha: _, format: m, dfdFlags: D }, C);
          } catch (B) {
            console.error(B), self.postMessage({ type: "error", id: h.id, error: B.message });
          }
        });
        break;
    }
  });
  function r(I) {
    e = new Promise((h) => {
      A = { wasmBinary: I, onRuntimeInitialized: h }, BASIS(A);
    }).then(() => {
      A.initializeBasis(), A.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function s(I) {
    const h = new A.KTX2File(new Uint8Array(I));
    function B() {
      h.close(), h.delete();
    }
    if (!h.isValid())
      throw B(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const C = h.isUASTC() ? n.UASTC_4x4 : n.ETC1S, E = h.getWidth(), p = h.getHeight(), _ = h.getLayers() || 1, m = h.getLevels(), D = h.getFaces(), T = h.getHasAlpha(), S = h.getDFDFlags(), { transcoderFormat: y, engineFormat: v } = u(C, E, p, T);
    if (!E || !p || !m)
      throw B(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!h.startTranscoding())
      throw B(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const b = [], H = [];
    for (let U = 0; U < D; U++) {
      const j = [];
      for (let V = 0; V < m; V++) {
        const q = [];
        let N, X;
        for (let ae = 0; ae < _; ae++) {
          const Ie = h.getImageLevelInfo(V, ae, U);
          U === 0 && V === 0 && ae === 0 && (Ie.origWidth % 4 !== 0 || Ie.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), m > 1 ? (N = Ie.origWidth, X = Ie.origHeight) : (N = Ie.width, X = Ie.height);
          const Be = new Uint8Array(h.getImageTranscodedSizeInBytes(V, ae, 0, y));
          if (!h.transcodeImage(Be, V, ae, U, y, 0, -1, -1))
            throw B(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          q.push(Be);
        }
        const ee = l(q);
        j.push({ data: ee, width: N, height: X }), H.push(ee.buffer);
      }
      b.push({ mipmaps: j, width: E, height: p, format: v });
    }
    return B(), { faces: b, buffers: H, width: E, height: p, hasAlpha: T, format: v, dfdFlags: S };
  }
  const a = [
    {
      if: "astcSupported",
      basisFormat: [n.UASTC_4x4],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [t.RGBA_ASTC_4x4_Format, t.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [n.ETC1S, n.UASTC_4x4],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [t.RGBA_BPTC_Format, t.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [n.ETC1S, n.UASTC_4x4],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [t.RGBA_S3TC_DXT1_Format, t.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [n.ETC1S, n.UASTC_4x4],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [t.RGB_ETC2_Format, t.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [n.ETC1S, n.UASTC_4x4],
      transcoderFormat: [i.ETC1],
      engineFormat: [t.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [n.ETC1S, n.UASTC_4x4],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [t.RGB_PVRTC_4BPPV1_Format, t.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], g = a.sort(function(I, h) {
    return I.priorityETC1S - h.priorityETC1S;
  }), c = a.sort(function(I, h) {
    return I.priorityUASTC - h.priorityUASTC;
  });
  function u(I, h, B, C) {
    let E, p;
    const _ = I === n.ETC1S ? g : c;
    for (let m = 0; m < _.length; m++) {
      const D = _[m];
      if (o[D.if] && D.basisFormat.includes(I) && !(C && D.transcoderFormat.length < 2) && !(D.needsPowerOfTwo && !(f(h) && f(B))))
        return E = D.transcoderFormat[C ? 1 : 0], p = D.engineFormat[C ? 1 : 0], { transcoderFormat: E, engineFormat: p };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), E = i.RGBA32, p = t.RGBAFormat, { transcoderFormat: E, engineFormat: p };
  }
  function f(I) {
    return I <= 2 ? !0 : (I & I - 1) === 0 && I !== 0;
  }
  function l(I) {
    if (I.length === 1) return I[0];
    let h = 0;
    for (let E = 0; E < I.length; E++) {
      const p = I[E];
      h += p.byteLength;
    }
    const B = new Uint8Array(h);
    let C = 0;
    for (let E = 0; E < I.length; E++) {
      const p = I[E];
      B.set(p, C), C += p.byteLength;
    }
    return B;
  }
};
const ha = /* @__PURE__ */ new Set([vA, nt, rt]), Ai = {
  [yr]: vA,
  [_r]: vA,
  [dr]: vA,
  [Er]: vA,
  [wr]: nt,
  [pr]: nt,
  [Br]: nt,
  [Cr]: nt,
  [mr]: rt,
  [Qr]: rt,
  [Ir]: rt,
  [lr]: rt,
  [Sr]: rr,
  [Tr]: Qn,
  [Dr]: Qn
}, ti = {
  [yr]: Tt,
  [_r]: it,
  [dr]: Je,
  [Er]: Je,
  [wr]: Tt,
  [pr]: it,
  [Br]: Je,
  [Cr]: Je,
  [mr]: Tt,
  [Qr]: it,
  [Ir]: Je,
  [lr]: Je,
  [Sr]: it,
  [Tr]: Je,
  [Dr]: Je
};
async function la(o) {
  const { vkFormat: e } = o;
  if (Ai[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let A;
  o.supercompressionScheme === Fn && (ei || (ei = new Promise(async (n) => {
    const r = new fa();
    await r.init(), n(r);
  })), A = await ei);
  const t = [];
  for (let n = 0; n < o.levels.length; n++) {
    const r = Math.max(1, o.pixelWidth >> n), s = Math.max(1, o.pixelHeight >> n), a = o.pixelDepth ? Math.max(1, o.pixelDepth >> n) : 0, g = o.levels[n];
    let c;
    if (o.supercompressionScheme === na)
      c = g.levelData;
    else if (o.supercompressionScheme === Fn)
      c = A.decode(g.levelData, g.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let u;
    ti[e] === Tt ? u = new Float32Array(
      c.buffer,
      c.byteOffset,
      c.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : ti[e] === it ? u = new Uint16Array(
      c.buffer,
      c.byteOffset,
      c.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : u = c, t.push({
      data: u,
      width: r,
      height: s,
      depth: a
    });
  }
  let i;
  if (ha.has(Ai[e]))
    i = o.pixelDepth === 0 ? new ro(t[0].data, o.pixelWidth, o.pixelHeight) : new so(t[0].data, o.pixelWidth, o.pixelHeight, o.pixelDepth);
  else {
    if (o.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    i = new nr(t, o.pixelWidth, o.pixelHeight);
  }
  return i.mipmaps = t, i.type = ti[e], i.format = Ai[e], i.colorSpace = Rr(o), i.needsUpdate = !0, Promise.resolve(i);
}
function Rr(o) {
  const e = o.dataFormatDescriptor[0];
  return e.colorPrimaries === oa ? e.transferFunction === Mn ? rA : Ke : e.colorPrimaries === aa ? e.transferFunction === Mn ? oo : ao : e.colorPrimaries === sa ? En : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), En);
}
const ii = /* @__PURE__ */ new WeakMap();
class Ia extends Ji {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
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
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, A, t, i) {
    const n = new DA(this.manager);
    n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(e, (r) => {
      this.parse(r, A, i);
    }, t, i);
  }
  parse(e, A, t = () => {
  }) {
    this.decodeDracoFile(e, A, null, null, rA, t).catch(t);
  }
  decodeDracoFile(e, A, t, i, n = Ke, r = () => {
  }) {
    const s = {
      attributeIDs: t || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!t,
      vertexColorSpace: n
    };
    return this.decodeGeometry(e, s).then(A).catch(r);
  }
  decodeGeometry(e, A) {
    const t = JSON.stringify(A);
    if (ii.has(e)) {
      const a = ii.get(e);
      if (a.key === t)
        return a.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const n = this.workerNextTaskID++, r = e.byteLength, s = this._getWorker(n, r).then((a) => (i = a, new Promise((g, c) => {
      i._callbacks[n] = { resolve: g, reject: c }, i.postMessage({ type: "decode", id: n, taskConfig: A, buffer: e }, [e]);
    }))).then((a) => this._createGeometry(a.geometry));
    return s.catch(() => !0).then(() => {
      i && n && this._releaseTask(i, n);
    }), ii.set(e, {
      key: t,
      promise: s
    }), s;
  }
  _createGeometry(e) {
    const A = new sr();
    e.index && A.setIndex(new gt(e.index.array, 1));
    for (let t = 0; t < e.attributes.length; t++) {
      const i = e.attributes[t], n = i.name, r = i.array, s = i.itemSize, a = new gt(r, s);
      n === "color" && (this._assignVertexColorSpace(a, i.vertexColorSpace), a.normalized = !(r instanceof Float32Array)), A.setAttribute(n, a);
    }
    return A;
  }
  _assignVertexColorSpace(e, A) {
    if (A !== rA) return;
    const t = new IA();
    for (let i = 0, n = e.count; i < n; i++)
      t.fromBufferAttribute(e, i), Ei.toWorkingColorSpace(t, rA), e.setXYZ(i, t.r, t.g, t.b);
  }
  _loadLibrary(e, A) {
    const t = new DA(this.manager);
    return t.setPath(this.decoderPath), t.setResponseType(A), t.setWithCredentials(this.withCredentials), new Promise((i, n) => {
      t.load(e, i, void 0, n);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", A = [];
    return e ? A.push(this._loadLibrary("draco_decoder.js", "text")) : (A.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), A.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(A).then((t) => {
      const i = t[0];
      e || (this.decoderConfig.wasmBinary = t[1]);
      const n = Ba.toString(), r = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, A) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(n) {
          const r = n.data;
          switch (r.type) {
            case "decode":
              i._callbacks[r.id].resolve(r);
              break;
            case "error":
              i._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, n) {
          return i._taskLoad > n._taskLoad ? -1 : 1;
        });
      const t = this.workerPool[this.workerPool.length - 1];
      return t._taskCosts[e] = A, t._taskLoad += A, t;
    });
  }
  _releaseTask(e, A) {
    e._taskLoad -= e._taskCosts[A], delete e._callbacks[A], delete e._taskCosts[A];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function Ba() {
  let o, e;
  onmessage = function(r) {
    const s = r.data;
    switch (s.type) {
      case "init":
        o = s.decoderConfig, e = new Promise(function(c) {
          o.onModuleLoaded = function(u) {
            c({ draco: u });
          }, DracoDecoderModule(o);
        });
        break;
      case "decode":
        const a = s.buffer, g = s.taskConfig;
        e.then((c) => {
          const u = c.draco, f = new u.Decoder();
          try {
            const l = A(u, f, new Int8Array(a), g), I = l.attributes.map((h) => h.array.buffer);
            l.index && I.push(l.index.array.buffer), self.postMessage({ type: "decode", id: s.id, geometry: l }, I);
          } catch (l) {
            console.error(l), self.postMessage({ type: "error", id: s.id, error: l.message });
          } finally {
            u.destroy(f);
          }
        });
        break;
    }
  };
  function A(r, s, a, g) {
    const c = g.attributeIDs, u = g.attributeTypes;
    let f, l;
    const I = s.GetEncodedGeometryType(a);
    if (I === r.TRIANGULAR_MESH)
      f = new r.Mesh(), l = s.DecodeArrayToMesh(a, a.byteLength, f);
    else if (I === r.POINT_CLOUD)
      f = new r.PointCloud(), l = s.DecodeArrayToPointCloud(a, a.byteLength, f);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!l.ok() || f.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
    const h = { index: null, attributes: [] };
    for (const B in c) {
      const C = self[u[B]];
      let E, p;
      if (g.useUniqueIDs)
        p = c[B], E = s.GetAttributeByUniqueId(f, p);
      else {
        if (p = s.GetAttributeId(f, r[c[B]]), p === -1) continue;
        E = s.GetAttribute(f, p);
      }
      const _ = i(r, s, f, B, C, E);
      B === "color" && (_.vertexColorSpace = g.vertexColorSpace), h.attributes.push(_);
    }
    return I === r.TRIANGULAR_MESH && (h.index = t(r, s, f)), r.destroy(f), h;
  }
  function t(r, s, a) {
    const c = a.num_faces() * 3, u = c * 4, f = r._malloc(u);
    s.GetTrianglesUInt32Array(a, u, f);
    const l = new Uint32Array(r.HEAPF32.buffer, f, c).slice();
    return r._free(f), { array: l, itemSize: 1 };
  }
  function i(r, s, a, g, c, u) {
    const f = u.num_components(), I = a.num_points() * f, h = I * c.BYTES_PER_ELEMENT, B = n(r, c), C = r._malloc(h);
    s.GetAttributeDataArrayForAllPoints(a, u, B, h, C);
    const E = new c(r.HEAPF32.buffer, C, I).slice();
    return r._free(C), {
      name: g,
      array: E,
      itemSize: f
    };
  }
  function n(r, s) {
    switch (s) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
function Gn(o, e) {
  if (e === go)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), o;
  if (e === Qi || e === or) {
    let A = o.getIndex();
    if (A === null) {
      const r = [], s = o.getAttribute("position");
      if (s !== void 0) {
        for (let a = 0; a < s.count; a++)
          r.push(a);
        o.setIndex(r), A = o.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
    }
    const t = A.count - 2, i = [];
    if (e === Qi)
      for (let r = 1; r <= t; r++)
        i.push(A.getX(0)), i.push(A.getX(r)), i.push(A.getX(r + 1));
    else
      for (let r = 0; r < t; r++)
        r % 2 === 0 ? (i.push(A.getX(r)), i.push(A.getX(r + 1)), i.push(A.getX(r + 2))) : (i.push(A.getX(r + 2)), i.push(A.getX(r + 1)), i.push(A.getX(r)));
    i.length / 3 !== t && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const n = o.clone();
    return n.setIndex(i), n.clearGroups(), n;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), o;
}
class Ca extends Ji {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(A) {
      return new _a(A);
    }), this.register(function(A) {
      return new ma(A);
    }), this.register(function(A) {
      return new Ma(A);
    }), this.register(function(A) {
      return new La(A);
    }), this.register(function(A) {
      return new ka(A);
    }), this.register(function(A) {
      return new ya(A);
    }), this.register(function(A) {
      return new Da(A);
    }), this.register(function(A) {
      return new Ta(A);
    }), this.register(function(A) {
      return new Sa(A);
    }), this.register(function(A) {
      return new pa(A);
    }), this.register(function(A) {
      return new Ra(A);
    }), this.register(function(A) {
      return new wa(A);
    }), this.register(function(A) {
      return new Fa(A);
    }), this.register(function(A) {
      return new xa(A);
    }), this.register(function(A) {
      return new Ea(A);
    }), this.register(function(A) {
      return new Ga(A);
    }), this.register(function(A) {
      return new va(A);
    });
  }
  load(e, A, t, i) {
    const n = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const g = ct.extractUrlBase(e);
      r = ct.resolveURL(g, this.path);
    } else
      r = ct.extractUrlBase(e);
    this.manager.itemStart(e);
    const s = function(g) {
      i ? i(g) : console.error(g), n.manager.itemError(e), n.manager.itemEnd(e);
    }, a = new DA(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(g) {
      try {
        n.parse(g, r, function(c) {
          A(c), n.manager.itemEnd(e);
        }, s);
      } catch (c) {
        s(c);
      }
    }, t, s);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, A, t, i) {
    let n;
    const r = {}, s = {}, a = new TextDecoder();
    if (typeof e == "string")
      n = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(e, 0, 4)) === xr) {
        try {
          r[P.KHR_BINARY_GLTF] = new ba(e);
        } catch (u) {
          i && i(u);
          return;
        }
        n = JSON.parse(r[P.KHR_BINARY_GLTF].content);
      } else
        n = JSON.parse(a.decode(e));
    else
      n = e;
    if (n.asset === void 0 || n.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const g = new ja(n, {
      path: A || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    g.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const u = this.pluginCallbacks[c](g);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), s[u.name] = u, r[u.name] = !0;
    }
    if (n.extensionsUsed)
      for (let c = 0; c < n.extensionsUsed.length; ++c) {
        const u = n.extensionsUsed[c], f = n.extensionsRequired || [];
        switch (u) {
          case P.KHR_MATERIALS_UNLIT:
            r[u] = new Qa();
            break;
          case P.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new Na(n, this.dracoLoader);
            break;
          case P.KHR_TEXTURE_TRANSFORM:
            r[u] = new Ua();
            break;
          case P.KHR_MESH_QUANTIZATION:
            r[u] = new Oa();
            break;
          default:
            f.indexOf(u) >= 0 && s[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    g.setExtensions(r), g.setPlugins(s), g.parse(t, i);
  }
  parseAsync(e, A) {
    const t = this;
    return new Promise(function(i, n) {
      t.parse(e, A, i, n);
    });
  }
}
function da() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, A) {
      o[e] = A;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const P = {
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
class Ea {
  constructor(e) {
    this.parser = e, this.name = P.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, A = this.parser.json.nodes || [];
    for (let t = 0, i = A.length; t < i; t++) {
      const n = A[t];
      n.extensions && n.extensions[this.name] && n.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, n.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const A = this.parser, t = "light:" + e;
    let i = A.cache.get(t);
    if (i) return i;
    const n = A.json, a = ((n.extensions && n.extensions[this.name] || {}).lights || [])[e];
    let g;
    const c = new IA(16777215);
    a.color !== void 0 && c.setRGB(a.color[0], a.color[1], a.color[2], Ke);
    const u = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        g = new fo(c), g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      case "point":
        g = new uo(c), g.distance = u;
        break;
      case "spot":
        g = new co(c), g.distance = u, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, g.angle = a.spot.outerConeAngle, g.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return g.position.set(0, 0, 0), g.decay = 2, tA(g, a), a.intensity !== void 0 && (g.intensity = a.intensity), g.name = A.createUniqueName(a.name || "light_" + e), i = Promise.resolve(g), A.cache.add(t, i), i;
  }
  getDependency(e, A) {
    if (e === "light")
      return this._loadLight(A);
  }
  createNodeAttachment(e) {
    const A = this, t = this.parser, n = t.json.nodes[e], s = (n.extensions && n.extensions[this.name] || {}).light;
    return s === void 0 ? null : this._loadLight(s).then(function(a) {
      return t._getNodeRef(A.cache, s, a);
    });
  }
}
class Qa {
  constructor() {
    this.name = P.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return st;
  }
  extendParams(e, A, t) {
    const i = [];
    e.color = new IA(1, 1, 1), e.opacity = 1;
    const n = A.pbrMetallicRoughness;
    if (n) {
      if (Array.isArray(n.baseColorFactor)) {
        const r = n.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], Ke), e.opacity = r[3];
      }
      n.baseColorTexture !== void 0 && i.push(t.assignTexture(e, "map", n.baseColorTexture, rA));
    }
    return Promise.all(i);
  }
}
class pa {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, A) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = i.extensions[this.name].emissiveStrength;
    return n !== void 0 && (A.emissiveIntensity = n), Promise.resolve();
  }
}
class _a {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (A.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && n.push(t.assignTexture(A, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (A.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && n.push(t.assignTexture(A, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (n.push(t.assignTexture(A, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const s = r.clearcoatNormalTexture.scale;
      A.clearcoatNormalScale = new Ki(s, s);
    }
    return Promise.all(n);
  }
}
class ma {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = i.extensions[this.name];
    return A.dispersion = n.dispersion !== void 0 ? n.dispersion : 0, Promise.resolve();
  }
}
class wa {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (A.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && n.push(t.assignTexture(A, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (A.iridescenceIOR = r.iridescenceIor), A.iridescenceThicknessRange === void 0 && (A.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (A.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (A.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && n.push(t.assignTexture(A, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(n);
  }
}
class ya {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [];
    A.sheenColor = new IA(0, 0, 0), A.sheenRoughness = 0, A.sheen = 1;
    const r = i.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const s = r.sheenColorFactor;
      A.sheenColor.setRGB(s[0], s[1], s[2], Ke);
    }
    return r.sheenRoughnessFactor !== void 0 && (A.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && n.push(t.assignTexture(A, "sheenColorMap", r.sheenColorTexture, rA)), r.sheenRoughnessTexture !== void 0 && n.push(t.assignTexture(A, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(n);
  }
}
class Da {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (A.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && n.push(t.assignTexture(A, "transmissionMap", r.transmissionTexture)), Promise.all(n);
  }
}
class Ta {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    A.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && n.push(t.assignTexture(A, "thicknessMap", r.thicknessTexture)), A.attenuationDistance = r.attenuationDistance || 1 / 0;
    const s = r.attenuationColor || [1, 1, 1];
    return A.attenuationColor = new IA().setRGB(s[0], s[1], s[2], Ke), Promise.all(n);
  }
}
class Sa {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = i.extensions[this.name];
    return A.ior = n.ior !== void 0 ? n.ior : 1.5, Promise.resolve();
  }
}
class Ra {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    A.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && n.push(t.assignTexture(A, "specularIntensityMap", r.specularTexture));
    const s = r.specularColorFactor || [1, 1, 1];
    return A.specularColor = new IA().setRGB(s[0], s[1], s[2], Ke), r.specularColorTexture !== void 0 && n.push(t.assignTexture(A, "specularColorMap", r.specularColorTexture, rA)), Promise.all(n);
  }
}
class xa {
  constructor(e) {
    this.parser = e, this.name = P.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    return A.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && n.push(t.assignTexture(A, "bumpMap", r.bumpTexture)), Promise.all(n);
  }
}
class Fa {
  constructor(e) {
    this.parser = e, this.name = P.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const t = this.parser.json.materials[e];
    return !t.extensions || !t.extensions[this.name] ? null : eA;
  }
  extendMaterialParams(e, A) {
    const t = this.parser, i = t.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const n = [], r = i.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (A.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (A.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && n.push(t.assignTexture(A, "anisotropyMap", r.anisotropyTexture)), Promise.all(n);
  }
}
class Ma {
  constructor(e) {
    this.parser = e, this.name = P.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const A = this.parser, t = A.json, i = t.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const n = i.extensions[this.name], r = A.options.ktx2Loader;
    if (!r) {
      if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return A.loadTextureImage(e, n.source, r);
  }
}
class La {
  constructor(e) {
    this.parser = e, this.name = P.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const A = this.name, t = this.parser, i = t.json, n = i.textures[e];
    if (!n.extensions || !n.extensions[A])
      return null;
    const r = n.extensions[A], s = i.images[r.source];
    let a = t.textureLoader;
    if (s.uri) {
      const g = t.options.manager.getHandler(s.uri);
      g !== null && (a = g);
    }
    return this.detectSupport().then(function(g) {
      if (g) return t.loadTextureImage(e, r.source, a);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(A) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return t.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const A = new Image();
      A.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", A.onload = A.onerror = function() {
        e(A.height === 1);
      };
    })), this.isSupported;
  }
}
class ka {
  constructor(e) {
    this.parser = e, this.name = P.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const A = this.name, t = this.parser, i = t.json, n = i.textures[e];
    if (!n.extensions || !n.extensions[A])
      return null;
    const r = n.extensions[A], s = i.images[r.source];
    let a = t.textureLoader;
    if (s.uri) {
      const g = t.options.manager.getHandler(s.uri);
      g !== null && (a = g);
    }
    return this.detectSupport().then(function(g) {
      if (g) return t.loadTextureImage(e, r.source, a);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(A) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return t.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const A = new Image();
      A.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", A.onload = A.onerror = function() {
        e(A.height === 1);
      };
    })), this.isSupported;
  }
}
class Ga {
  constructor(e) {
    this.name = P.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const A = this.parser.json, t = A.bufferViews[e];
    if (t.extensions && t.extensions[this.name]) {
      const i = t.extensions[this.name], n = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (A.extensionsRequired && A.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return n.then(function(s) {
        const a = i.byteOffset || 0, g = i.byteLength || 0, c = i.count, u = i.byteStride, f = new Uint8Array(s, a, g);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(c, u, f, i.mode, i.filter).then(function(l) {
          return l.buffer;
        }) : r.ready.then(function() {
          const l = new ArrayBuffer(c * u);
          return r.decodeGltfBuffer(new Uint8Array(l), c, u, f, i.mode, i.filter), l;
        });
      });
    } else
      return null;
  }
}
class va {
  constructor(e) {
    this.name = P.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const A = this.parser.json, t = A.nodes[e];
    if (!t.extensions || !t.extensions[this.name] || t.mesh === void 0)
      return null;
    const i = A.meshes[t.mesh];
    for (const g of i.primitives)
      if (g.mode !== be.TRIANGLES && g.mode !== be.TRIANGLE_STRIP && g.mode !== be.TRIANGLE_FAN && g.mode !== void 0)
        return null;
    const r = t.extensions[this.name].attributes, s = [], a = {};
    for (const g in r)
      s.push(this.parser.getDependency("accessor", r[g]).then((c) => (a[g] = c, a[g])));
    return s.length < 1 ? null : (s.push(this.parser.createNodeMesh(e)), Promise.all(s).then((g) => {
      const c = g.pop(), u = c.isGroup ? c.children : [c], f = g[0].count, l = [];
      for (const I of u) {
        const h = new Lt(), B = new bA(), C = new ar(), E = new bA(1, 1, 1), p = new ho(I.geometry, I.material, f);
        for (let _ = 0; _ < f; _++)
          a.TRANSLATION && B.fromBufferAttribute(a.TRANSLATION, _), a.ROTATION && C.fromBufferAttribute(a.ROTATION, _), a.SCALE && E.fromBufferAttribute(a.SCALE, _), p.setMatrixAt(_, h.compose(B, C, E));
        for (const _ in a)
          if (_ === "_COLOR_0") {
            const m = a[_];
            p.instanceColor = new lo(m.array, m.itemSize, m.normalized);
          } else _ !== "TRANSLATION" && _ !== "ROTATION" && _ !== "SCALE" && I.geometry.setAttribute(_, a[_]);
        gr.prototype.copy.call(p, I), this.parser.assignFinalMaterial(p), l.push(p);
      }
      return c.isGroup ? (c.clear(), c.add(...l), c) : l[0];
    }));
  }
}
const xr = "glTF", At = 12, vn = { JSON: 1313821514, BIN: 5130562 };
class ba {
  constructor(e) {
    this.name = P.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const A = new DataView(e, 0, At), t = new TextDecoder();
    if (this.header = {
      magic: t.decode(new Uint8Array(e.slice(0, 4))),
      version: A.getUint32(4, !0),
      length: A.getUint32(8, !0)
    }, this.header.magic !== xr)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - At, n = new DataView(e, At);
    let r = 0;
    for (; r < i; ) {
      const s = n.getUint32(r, !0);
      r += 4;
      const a = n.getUint32(r, !0);
      if (r += 4, a === vn.JSON) {
        const g = new Uint8Array(e, At + r, s);
        this.content = t.decode(g);
      } else if (a === vn.BIN) {
        const g = At + r;
        this.body = e.slice(g, g + s);
      }
      r += s;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Na {
  constructor(e, A) {
    if (!A)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = P.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = A, this.dracoLoader.preload();
  }
  decodePrimitive(e, A) {
    const t = this.json, i = this.dracoLoader, n = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, s = {}, a = {}, g = {};
    for (const c in r) {
      const u = mi[c] || c.toLowerCase();
      s[u] = r[c];
    }
    for (const c in e.attributes) {
      const u = mi[c] || c.toLowerCase();
      if (r[c] !== void 0) {
        const f = t.accessors[e.attributes[c]], l = PA[f.componentType];
        g[u] = l.name, a[u] = f.normalized === !0;
      }
    }
    return A.getDependency("bufferView", n).then(function(c) {
      return new Promise(function(u, f) {
        i.decodeDracoFile(c, function(l) {
          for (const I in l.attributes) {
            const h = l.attributes[I], B = a[I];
            B !== void 0 && (h.normalized = B);
          }
          u(l);
        }, s, g, Ke, f);
      });
    });
  }
}
class Ua {
  constructor() {
    this.name = P.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, A) {
    return (A.texCoord === void 0 || A.texCoord === e.channel) && A.offset === void 0 && A.rotation === void 0 && A.scale === void 0 || (e = e.clone(), A.texCoord !== void 0 && (e.channel = A.texCoord), A.offset !== void 0 && e.offset.fromArray(A.offset), A.rotation !== void 0 && (e.rotation = A.rotation), A.scale !== void 0 && e.repeat.fromArray(A.scale), e.needsUpdate = !0), e;
  }
}
class Oa {
  constructor() {
    this.name = P.KHR_MESH_QUANTIZATION;
  }
}
class Fr extends Jo {
  constructor(e, A, t, i) {
    super(e, A, t, i);
  }
  copySampleValue_(e) {
    const A = this.resultBuffer, t = this.sampleValues, i = this.valueSize, n = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      A[r] = t[n + r];
    return A;
  }
  interpolate_(e, A, t, i) {
    const n = this.resultBuffer, r = this.sampleValues, s = this.valueSize, a = s * 2, g = s * 3, c = i - A, u = (t - A) / c, f = u * u, l = f * u, I = e * g, h = I - g, B = -2 * l + 3 * f, C = l - f, E = 1 - B, p = C - f + u;
    for (let _ = 0; _ !== s; _++) {
      const m = r[h + _ + s], D = r[h + _ + a] * c, T = r[I + _ + s], S = r[I + _] * c;
      n[_] = E * m + p * D + B * T + C * S;
    }
    return n;
  }
}
const Pa = new ar();
class Ha extends Fr {
  interpolate_(e, A, t, i) {
    const n = super.interpolate_(e, A, t, i);
    return Pa.fromArray(n).normalize().toArray(n), n;
  }
}
const be = {
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
}, PA = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, bn = {
  9728: ko,
  9729: Mt,
  9984: Go,
  9985: vo,
  9986: bo,
  9987: Yi
}, Nn = {
  33071: No,
  33648: Uo,
  10497: pi
}, ni = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, mi = {
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
}, aA = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, qa = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: hr,
  STEP: Oo
}, ri = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ja(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new ur({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Po
  })), o.DefaultMaterial;
}
function QA(o, e, A) {
  for (const t in A.extensions)
    o[t] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[t] = A.extensions[t]);
}
function tA(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ya(o, e, A) {
  let t = !1, i = !1, n = !1;
  for (let g = 0, c = e.length; g < c; g++) {
    const u = e[g];
    if (u.POSITION !== void 0 && (t = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (n = !0), t && i && n) break;
  }
  if (!t && !i && !n) return Promise.resolve(o);
  const r = [], s = [], a = [];
  for (let g = 0, c = e.length; g < c; g++) {
    const u = e[g];
    if (t) {
      const f = u.POSITION !== void 0 ? A.getDependency("accessor", u.POSITION) : o.attributes.position;
      r.push(f);
    }
    if (i) {
      const f = u.NORMAL !== void 0 ? A.getDependency("accessor", u.NORMAL) : o.attributes.normal;
      s.push(f);
    }
    if (n) {
      const f = u.COLOR_0 !== void 0 ? A.getDependency("accessor", u.COLOR_0) : o.attributes.color;
      a.push(f);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(s),
    Promise.all(a)
  ]).then(function(g) {
    const c = g[0], u = g[1], f = g[2];
    return t && (o.morphAttributes.position = c), i && (o.morphAttributes.normal = u), n && (o.morphAttributes.color = f), o.morphTargetsRelative = !0, o;
  });
}
function Ka(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let A = 0, t = e.weights.length; A < t; A++)
      o.morphTargetInfluences[A] = e.weights[A];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const A = e.extras.targetNames;
    if (o.morphTargetInfluences.length === A.length) {
      o.morphTargetDictionary = {};
      for (let t = 0, i = A.length; t < i; t++)
        o.morphTargetDictionary[A[t]] = t;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Va(o) {
  let e;
  const A = o.extensions && o.extensions[P.KHR_DRACO_MESH_COMPRESSION];
  if (A ? e = "draco:" + A.bufferView + ":" + A.indices + ":" + si(A.attributes) : e = o.indices + ":" + si(o.attributes) + ":" + o.mode, o.targets !== void 0)
    for (let t = 0, i = o.targets.length; t < i; t++)
      e += ":" + si(o.targets[t]);
  return e;
}
function si(o) {
  let e = "";
  const A = Object.keys(o).sort();
  for (let t = 0, i = A.length; t < i; t++)
    e += A[t] + ":" + o[A[t]] + ";";
  return e;
}
function wi(o) {
  switch (o) {
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
function Xa(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Wa = new Lt();
class ja {
  constructor(e = {}, A = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = A, this.cache = new da(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let t = !1, i = -1, n = !1, r = -1;
    if (typeof navigator < "u") {
      const s = navigator.userAgent;
      t = /^((?!chrome|android).)*safari/i.test(s) === !0;
      const a = s.match(/Version\/(\d+)/);
      i = t && a ? parseInt(a[1], 10) : -1, n = s.indexOf("Firefox") > -1, r = n ? s.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || t && i < 17 || n && r < 98 ? this.textureLoader = new cr(this.options.manager) : this.textureLoader = new Io(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new DA(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, A) {
    const t = this, i = this.json, n = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        t.getDependencies("scene"),
        t.getDependencies("animation"),
        t.getDependencies("camera")
      ]);
    }).then(function(r) {
      const s = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: t,
        userData: {}
      };
      return QA(n, s, i), tA(s, i), Promise.all(t._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(s);
      })).then(function() {
        for (const a of s.scenes)
          a.updateMatrixWorld();
        e(s);
      });
    }).catch(A);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], A = this.json.skins || [], t = this.json.meshes || [];
    for (let i = 0, n = A.length; i < n; i++) {
      const r = A[i].joints;
      for (let s = 0, a = r.length; s < a; s++)
        e[r[s]].isBone = !0;
    }
    for (let i = 0, n = e.length; i < n; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (t[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
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
  _addNodeRef(e, A) {
    A !== void 0 && (e.refs[A] === void 0 && (e.refs[A] = e.uses[A] = 0), e.refs[A]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, A, t) {
    if (e.refs[A] <= 1) return t;
    const i = t.clone(), n = (r, s) => {
      const a = this.associations.get(r);
      a != null && this.associations.set(s, a);
      for (const [g, c] of r.children.entries())
        n(c, s.children[g]);
    };
    return n(t, i), i.name += "_instance_" + e.uses[A]++, i;
  }
  _invokeOne(e) {
    const A = Object.values(this.plugins);
    A.push(this);
    for (let t = 0; t < A.length; t++) {
      const i = e(A[t]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const A = Object.values(this.plugins);
    A.unshift(this);
    const t = [];
    for (let i = 0; i < A.length; i++) {
      const n = e(A[i]);
      n && t.push(n);
    }
    return t;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, A) {
    const t = e + ":" + A;
    let i = this.cache.get(t);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(A);
          break;
        case "node":
          i = this._invokeOne(function(n) {
            return n.loadNode && n.loadNode(A);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(n) {
            return n.loadMesh && n.loadMesh(A);
          });
          break;
        case "accessor":
          i = this.loadAccessor(A);
          break;
        case "bufferView":
          i = this._invokeOne(function(n) {
            return n.loadBufferView && n.loadBufferView(A);
          });
          break;
        case "buffer":
          i = this.loadBuffer(A);
          break;
        case "material":
          i = this._invokeOne(function(n) {
            return n.loadMaterial && n.loadMaterial(A);
          });
          break;
        case "texture":
          i = this._invokeOne(function(n) {
            return n.loadTexture && n.loadTexture(A);
          });
          break;
        case "skin":
          i = this.loadSkin(A);
          break;
        case "animation":
          i = this._invokeOne(function(n) {
            return n.loadAnimation && n.loadAnimation(A);
          });
          break;
        case "camera":
          i = this.loadCamera(A);
          break;
        default:
          if (i = this._invokeOne(function(n) {
            return n != this && n.getDependency && n.getDependency(e, A);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(t, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let A = this.cache.get(e);
    if (!A) {
      const t = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      A = Promise.all(i.map(function(n, r) {
        return t.getDependency(e, r);
      })), this.cache.add(e, A);
    }
    return A;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const A = this.json.buffers[e], t = this.fileLoader;
    if (A.type && A.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + A.type + " buffer type is not supported.");
    if (A.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[P.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(n, r) {
      t.load(ct.resolveURL(A.uri, i.path), n, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + A.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const A = this.json.bufferViews[e];
    return this.getDependency("buffer", A.buffer).then(function(t) {
      const i = A.byteLength || 0, n = A.byteOffset || 0;
      return t.slice(n, n + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const A = this, t = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const r = ni[i.type], s = PA[i.componentType], a = i.normalized === !0, g = new s(i.count * r);
      return Promise.resolve(new gt(g, r, a));
    }
    const n = [];
    return i.bufferView !== void 0 ? n.push(this.getDependency("bufferView", i.bufferView)) : n.push(null), i.sparse !== void 0 && (n.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), n.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(n).then(function(r) {
      const s = r[0], a = ni[i.type], g = PA[i.componentType], c = g.BYTES_PER_ELEMENT, u = c * a, f = i.byteOffset || 0, l = i.bufferView !== void 0 ? t.bufferViews[i.bufferView].byteStride : void 0, I = i.normalized === !0;
      let h, B;
      if (l && l !== u) {
        const C = Math.floor(f / l), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + C + ":" + i.count;
        let p = A.cache.get(E);
        p || (h = new g(s, C * l, i.count * l / c), p = new Bo(h, l / c), A.cache.add(E, p)), B = new Co(p, a, f % l / c, I);
      } else
        s === null ? h = new g(i.count * a) : h = new g(s, f, i.count * a), B = new gt(h, a, I);
      if (i.sparse !== void 0) {
        const C = ni.SCALAR, E = PA[i.sparse.indices.componentType], p = i.sparse.indices.byteOffset || 0, _ = i.sparse.values.byteOffset || 0, m = new E(r[1], p, i.sparse.count * C), D = new g(r[2], _, i.sparse.count * a);
        s !== null && (B = new gt(B.array.slice(), B.itemSize, B.normalized)), B.normalized = !1;
        for (let T = 0, S = m.length; T < S; T++) {
          const y = m[T];
          if (B.setX(y, D[T * a]), a >= 2 && B.setY(y, D[T * a + 1]), a >= 3 && B.setZ(y, D[T * a + 2]), a >= 4 && B.setW(y, D[T * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        B.normalized = I;
      }
      return B;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const A = this.json, t = this.options, n = A.textures[e].source, r = A.images[n];
    let s = this.textureLoader;
    if (r.uri) {
      const a = t.manager.getHandler(r.uri);
      a !== null && (s = a);
    }
    return this.loadTextureImage(e, n, s);
  }
  loadTextureImage(e, A, t) {
    const i = this, n = this.json, r = n.textures[e], s = n.images[A], a = (s.uri || s.bufferView) + ":" + r.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const g = this.loadImageSource(A, t).then(function(c) {
      c.flipY = !1, c.name = r.name || s.name || "", c.name === "" && typeof s.uri == "string" && s.uri.startsWith("data:image/") === !1 && (c.name = s.uri);
      const f = (n.samplers || {})[r.sampler] || {};
      return c.magFilter = bn[f.magFilter] || Mt, c.minFilter = bn[f.minFilter] || Yi, c.wrapS = Nn[f.wrapS] || pi, c.wrapT = Nn[f.wrapT] || pi, i.associations.set(c, { textures: e }), c;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = g, g;
  }
  loadImageSource(e, A) {
    const t = this, i = this.json, n = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const r = i.images[e], s = self.URL || self.webkitURL;
    let a = r.uri || "", g = !1;
    if (r.bufferView !== void 0)
      a = t.getDependency("bufferView", r.bufferView).then(function(u) {
        g = !0;
        const f = new Blob([u], { type: r.mimeType });
        return a = s.createObjectURL(f), a;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const c = Promise.resolve(a).then(function(u) {
      return new Promise(function(f, l) {
        let I = f;
        A.isImageBitmapLoader === !0 && (I = function(h) {
          const B = new pn(h);
          B.needsUpdate = !0, f(B);
        }), A.load(ct.resolveURL(u, n.path), I, void 0, l);
      });
    }).then(function(u) {
      return g === !0 && s.revokeObjectURL(a), tA(u, r), u.userData.mimeType = r.mimeType || Xa(r.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), u;
    });
    return this.sourceCache[e] = c, c;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, A, t, i) {
    const n = this;
    return this.getDependency("texture", t.index).then(function(r) {
      if (!r) return null;
      if (t.texCoord !== void 0 && t.texCoord > 0 && (r = r.clone(), r.channel = t.texCoord), n.extensions[P.KHR_TEXTURE_TRANSFORM]) {
        const s = t.extensions !== void 0 ? t.extensions[P.KHR_TEXTURE_TRANSFORM] : void 0;
        if (s) {
          const a = n.associations.get(r);
          r = n.extensions[P.KHR_TEXTURE_TRANSFORM].extendTexture(r, s), n.associations.set(r, a);
        }
      }
      return i !== void 0 && (r.colorSpace = i), e[A] = r, r;
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
  assignFinalMaterial(e) {
    const A = e.geometry;
    let t = e.material;
    const i = A.attributes.tangent === void 0, n = A.attributes.color !== void 0, r = A.attributes.normal === void 0;
    if (e.isPoints) {
      const s = "PointsMaterial:" + t.uuid;
      let a = this.cache.get(s);
      a || (a = new Eo(), Xt.prototype.copy.call(a, t), a.color.copy(t.color), a.map = t.map, a.sizeAttenuation = !1, this.cache.add(s, a)), t = a;
    } else if (e.isLine) {
      const s = "LineBasicMaterial:" + t.uuid;
      let a = this.cache.get(s);
      a || (a = new Qo(), Xt.prototype.copy.call(a, t), a.color.copy(t.color), a.map = t.map, this.cache.add(s, a)), t = a;
    }
    if (i || n || r) {
      let s = "ClonedMaterial:" + t.uuid + ":";
      i && (s += "derivative-tangents:"), n && (s += "vertex-colors:"), r && (s += "flat-shading:");
      let a = this.cache.get(s);
      a || (a = t.clone(), n && (a.vertexColors = !0), r && (a.flatShading = !0), i && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(s, a), this.associations.set(a, this.associations.get(t))), t = a;
    }
    e.material = t;
  }
  getMaterialType() {
    return ur;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const A = this, t = this.json, i = this.extensions, n = t.materials[e];
    let r;
    const s = {}, a = n.extensions || {}, g = [];
    if (a[P.KHR_MATERIALS_UNLIT]) {
      const u = i[P.KHR_MATERIALS_UNLIT];
      r = u.getMaterialType(), g.push(u.extendParams(s, n, A));
    } else {
      const u = n.pbrMetallicRoughness || {};
      if (s.color = new IA(1, 1, 1), s.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        s.color.setRGB(f[0], f[1], f[2], Ke), s.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && g.push(A.assignTexture(s, "map", u.baseColorTexture, rA)), s.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, s.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (g.push(A.assignTexture(s, "metalnessMap", u.metallicRoughnessTexture)), g.push(A.assignTexture(s, "roughnessMap", u.metallicRoughnessTexture))), r = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), g.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, s);
      })));
    }
    n.doubleSided === !0 && (s.side = po);
    const c = n.alphaMode || ri.OPAQUE;
    if (c === ri.BLEND ? (s.transparent = !0, s.depthWrite = !1) : (s.transparent = !1, c === ri.MASK && (s.alphaTest = n.alphaCutoff !== void 0 ? n.alphaCutoff : 0.5)), n.normalTexture !== void 0 && r !== st && (g.push(A.assignTexture(s, "normalMap", n.normalTexture)), s.normalScale = new Ki(1, 1), n.normalTexture.scale !== void 0)) {
      const u = n.normalTexture.scale;
      s.normalScale.set(u, u);
    }
    if (n.occlusionTexture !== void 0 && r !== st && (g.push(A.assignTexture(s, "aoMap", n.occlusionTexture)), n.occlusionTexture.strength !== void 0 && (s.aoMapIntensity = n.occlusionTexture.strength)), n.emissiveFactor !== void 0 && r !== st) {
      const u = n.emissiveFactor;
      s.emissive = new IA().setRGB(u[0], u[1], u[2], Ke);
    }
    return n.emissiveTexture !== void 0 && r !== st && g.push(A.assignTexture(s, "emissiveMap", n.emissiveTexture, rA)), Promise.all(g).then(function() {
      const u = new r(s);
      return n.name && (u.name = n.name), tA(u, n), A.associations.set(u, { materials: e }), n.extensions && QA(i, u, n), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const A = _o.sanitizeNodeName(e || "");
    return A in this.nodeNamesUsed ? A + "_" + ++this.nodeNamesUsed[A] : (this.nodeNamesUsed[A] = 0, A);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const A = this, t = this.extensions, i = this.primitiveCache;
    function n(s) {
      return t[P.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s, A).then(function(a) {
        return Un(a, s, A);
      });
    }
    const r = [];
    for (let s = 0, a = e.length; s < a; s++) {
      const g = e[s], c = Va(g), u = i[c];
      if (u)
        r.push(u.promise);
      else {
        let f;
        g.extensions && g.extensions[P.KHR_DRACO_MESH_COMPRESSION] ? f = n(g) : f = Un(new sr(), g, A), i[c] = { primitive: g, promise: f }, r.push(f);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const A = this, t = this.json, i = this.extensions, n = t.meshes[e], r = n.primitives, s = [];
    for (let a = 0, g = r.length; a < g; a++) {
      const c = r[a].material === void 0 ? Ja(this.cache) : this.getDependency("material", r[a].material);
      s.push(c);
    }
    return s.push(A.loadGeometries(r)), Promise.all(s).then(function(a) {
      const g = a.slice(0, a.length - 1), c = a[a.length - 1], u = [];
      for (let l = 0, I = c.length; l < I; l++) {
        const h = c[l], B = r[l];
        let C;
        const E = g[l];
        if (B.mode === be.TRIANGLES || B.mode === be.TRIANGLE_STRIP || B.mode === be.TRIANGLE_FAN || B.mode === void 0)
          C = n.isSkinnedMesh === !0 ? new mo(h, E) : new wo(h, E), C.isSkinnedMesh === !0 && C.normalizeSkinWeights(), B.mode === be.TRIANGLE_STRIP ? C.geometry = Gn(C.geometry, or) : B.mode === be.TRIANGLE_FAN && (C.geometry = Gn(C.geometry, Qi));
        else if (B.mode === be.LINES)
          C = new yo(h, E);
        else if (B.mode === be.LINE_STRIP)
          C = new Do(h, E);
        else if (B.mode === be.LINE_LOOP)
          C = new To(h, E);
        else if (B.mode === be.POINTS)
          C = new So(h, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + B.mode);
        Object.keys(C.geometry.morphAttributes).length > 0 && Ka(C, n), C.name = A.createUniqueName(n.name || "mesh_" + e), tA(C, n), B.extensions && QA(i, C, B), A.assignFinalMaterial(C), u.push(C);
      }
      for (let l = 0, I = u.length; l < I; l++)
        A.associations.set(u[l], {
          meshes: e,
          primitives: l
        });
      if (u.length === 1)
        return n.extensions && QA(i, u[0], n), u[0];
      const f = new Wt();
      n.extensions && QA(i, f, n), A.associations.set(f, { meshes: e });
      for (let l = 0, I = u.length; l < I; l++)
        f.add(u[l]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let A;
    const t = this.json.cameras[e], i = t[t.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return t.type === "perspective" ? A = new fr(Ro.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : t.type === "orthographic" && (A = new xo(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), t.name && (A.name = this.createUniqueName(t.name)), tA(A, t), Promise.resolve(A);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const A = this.json.skins[e], t = [];
    for (let i = 0, n = A.joints.length; i < n; i++)
      t.push(this._loadNodeShallow(A.joints[i]));
    return A.inverseBindMatrices !== void 0 ? t.push(this.getDependency("accessor", A.inverseBindMatrices)) : t.push(null), Promise.all(t).then(function(i) {
      const n = i.pop(), r = i, s = [], a = [];
      for (let g = 0, c = r.length; g < c; g++) {
        const u = r[g];
        if (u) {
          s.push(u);
          const f = new Lt();
          n !== null && f.fromArray(n.array, g * 16), a.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', A.joints[g]);
      }
      return new Fo(s, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const A = this.json, t = this, i = A.animations[e], n = i.name ? i.name : "animation_" + e, r = [], s = [], a = [], g = [], c = [];
    for (let u = 0, f = i.channels.length; u < f; u++) {
      const l = i.channels[u], I = i.samplers[l.sampler], h = l.target, B = h.node, C = i.parameters !== void 0 ? i.parameters[I.input] : I.input, E = i.parameters !== void 0 ? i.parameters[I.output] : I.output;
      h.node !== void 0 && (r.push(this.getDependency("node", B)), s.push(this.getDependency("accessor", C)), a.push(this.getDependency("accessor", E)), g.push(I), c.push(h));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(s),
      Promise.all(a),
      Promise.all(g),
      Promise.all(c)
    ]).then(function(u) {
      const f = u[0], l = u[1], I = u[2], h = u[3], B = u[4], C = [];
      for (let E = 0, p = f.length; E < p; E++) {
        const _ = f[E], m = l[E], D = I[E], T = h[E], S = B[E];
        if (_ === void 0) continue;
        _.updateMatrix && _.updateMatrix();
        const y = t._createAnimationTracks(_, m, D, T, S);
        if (y)
          for (let v = 0; v < y.length; v++)
            C.push(y[v]);
      }
      return new Mo(n, void 0, C);
    });
  }
  createNodeMesh(e) {
    const A = this.json, t = this, i = A.nodes[e];
    return i.mesh === void 0 ? null : t.getDependency("mesh", i.mesh).then(function(n) {
      const r = t._getNodeRef(t.meshCache, i.mesh, n);
      return i.weights !== void 0 && r.traverse(function(s) {
        if (s.isMesh)
          for (let a = 0, g = i.weights.length; a < g; a++)
            s.morphTargetInfluences[a] = i.weights[a];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const A = this.json, t = this, i = A.nodes[e], n = t._loadNodeShallow(e), r = [], s = i.children || [];
    for (let g = 0, c = s.length; g < c; g++)
      r.push(t.getDependency("node", s[g]));
    const a = i.skin === void 0 ? Promise.resolve(null) : t.getDependency("skin", i.skin);
    return Promise.all([
      n,
      Promise.all(r),
      a
    ]).then(function(g) {
      const c = g[0], u = g[1], f = g[2];
      f !== null && c.traverse(function(l) {
        l.isSkinnedMesh && l.bind(f, Wa);
      });
      for (let l = 0, I = u.length; l < I; l++)
        c.add(u[l]);
      return c;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const A = this.json, t = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const n = A.nodes[e], r = n.name ? i.createUniqueName(n.name) : "", s = [], a = i._invokeOne(function(g) {
      return g.createNodeMesh && g.createNodeMesh(e);
    });
    return a && s.push(a), n.camera !== void 0 && s.push(i.getDependency("camera", n.camera).then(function(g) {
      return i._getNodeRef(i.cameraCache, n.camera, g);
    })), i._invokeAll(function(g) {
      return g.createNodeAttachment && g.createNodeAttachment(e);
    }).forEach(function(g) {
      s.push(g);
    }), this.nodeCache[e] = Promise.all(s).then(function(g) {
      let c;
      if (n.isBone === !0 ? c = new Lo() : g.length > 1 ? c = new Wt() : g.length === 1 ? c = g[0] : c = new gr(), c !== g[0])
        for (let u = 0, f = g.length; u < f; u++)
          c.add(g[u]);
      if (n.name && (c.userData.name = n.name, c.name = r), tA(c, n), n.extensions && QA(t, c, n), n.matrix !== void 0) {
        const u = new Lt();
        u.fromArray(n.matrix), c.applyMatrix4(u);
      } else
        n.translation !== void 0 && c.position.fromArray(n.translation), n.rotation !== void 0 && c.quaternion.fromArray(n.rotation), n.scale !== void 0 && c.scale.fromArray(n.scale);
      return i.associations.has(c) || i.associations.set(c, {}), i.associations.get(c).nodes = e, c;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const A = this.extensions, t = this.json.scenes[e], i = this, n = new Wt();
    t.name && (n.name = i.createUniqueName(t.name)), tA(n, t), t.extensions && QA(A, n, t);
    const r = t.nodes || [], s = [];
    for (let a = 0, g = r.length; a < g; a++)
      s.push(i.getDependency("node", r[a]));
    return Promise.all(s).then(function(a) {
      for (let c = 0, u = a.length; c < u; c++)
        n.add(a[c]);
      const g = (c) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, l] of i.associations)
          (f instanceof Xt || f instanceof pn) && u.set(f, l);
        return c.traverse((f) => {
          const l = i.associations.get(f);
          l != null && u.set(f, l);
        }), u;
      };
      return i.associations = g(n), n;
    });
  }
  _createAnimationTracks(e, A, t, i, n) {
    const r = [], s = e.name ? e.name : e.uuid, a = [];
    aA[n.path] === aA.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && a.push(f.name ? f.name : f.uuid);
    }) : a.push(s);
    let g;
    switch (aA[n.path]) {
      case aA.weights:
        g = mn;
        break;
      case aA.rotation:
        g = wn;
        break;
      case aA.position:
      case aA.scale:
        g = _n;
        break;
      default:
        switch (t.itemSize) {
          case 1:
            g = mn;
            break;
          case 2:
          case 3:
          default:
            g = _n;
            break;
        }
        break;
    }
    const c = i.interpolation !== void 0 ? qa[i.interpolation] : hr, u = this._getArrayFromAccessor(t);
    for (let f = 0, l = a.length; f < l; f++) {
      const I = new g(
        a[f] + "." + aA[n.path],
        A.array,
        u,
        c
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(I), r.push(I);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let A = e.array;
    if (e.normalized) {
      const t = wi(A.constructor), i = new Float32Array(A.length);
      for (let n = 0, r = A.length; n < r; n++)
        i[n] = A[n] * t;
      A = i;
    }
    return A;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(t) {
      const i = this instanceof wn ? Ha : Fr;
      return new i(this.times, this.values, this.getValueSize() / 3, t);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function za(o, e, A) {
  const t = e.attributes, i = new Ho();
  if (t.POSITION !== void 0) {
    const s = A.json.accessors[t.POSITION], a = s.min, g = s.max;
    if (a !== void 0 && g !== void 0) {
      if (i.set(
        new bA(a[0], a[1], a[2]),
        new bA(g[0], g[1], g[2])
      ), s.normalized) {
        const c = wi(PA[s.componentType]);
        i.min.multiplyScalar(c), i.max.multiplyScalar(c);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const n = e.targets;
  if (n !== void 0) {
    const s = new bA(), a = new bA();
    for (let g = 0, c = n.length; g < c; g++) {
      const u = n[g];
      if (u.POSITION !== void 0) {
        const f = A.json.accessors[u.POSITION], l = f.min, I = f.max;
        if (l !== void 0 && I !== void 0) {
          if (a.setX(Math.max(Math.abs(l[0]), Math.abs(I[0]))), a.setY(Math.max(Math.abs(l[1]), Math.abs(I[1]))), a.setZ(Math.max(Math.abs(l[2]), Math.abs(I[2]))), f.normalized) {
            const h = wi(PA[f.componentType]);
            a.multiplyScalar(h);
          }
          s.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(s);
  }
  o.boundingBox = i;
  const r = new qo();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = r;
}
function Un(o, e, A) {
  const t = e.attributes, i = [];
  function n(r, s) {
    return A.getDependency("accessor", r).then(function(a) {
      o.setAttribute(s, a);
    });
  }
  for (const r in t) {
    const s = mi[r] || r.toLowerCase();
    s in o.attributes || i.push(n(t[r], s));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = A.getDependency("accessor", e.indices).then(function(s) {
      o.setIndex(s);
    });
    i.push(r);
  }
  return Ei.workingColorSpace !== Ke && "COLOR_0" in t && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ei.workingColorSpace}" not supported.`), tA(o, e), za(o, e, A), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ya(o, e.targets, A) : o;
  });
}
const K = class K {
  static getInstance() {
    return K._instance === null && (K._instance = new K(), K._gltfLoader.setDRACOLoader(K._dracoLoader), K._dracoLoader.setDecoderPath(`${K._base}draco/`), K._ktx2Loader.setTranscoderPath(`${K._base}basis/`)), K._instance;
  }
  static initKTX2Loader(e) {
    K._ktx2Loader.detectSupport(e);
  }
  get loaderManager() {
    return K._loaderManager;
  }
  async loadTexture(e, A = !1) {
    return K._imageLoader.loadAsync(
      `${A ? `${K._base}${e}` : `${e}`}`
    );
  }
  async loadGPUTexture(e) {
    return K._ktx2Loader.loadAsync(`${K._base}${e}`);
  }
  async loadEnvironmentMap(e) {
    return K._ktx2Loader.loadAsync(`${K._base}${e}`);
  }
  async loadGLTFModel(e) {
    return K._gltfLoader.loadAsync(`${K._base}${e}`);
  }
  async parseGLTFModel(e, A) {
    return K._gltfLoader.parseAsync(e, A);
  }
};
Ce(K, "_instance", null), Ce(K, "_loaderManager", new Yo()), Ce(K, "_dracoLoader", new Ia(K._loaderManager)), Ce(K, "_gltfLoader", new Ca(K._loaderManager)), Ce(K, "_ktx2Loader", new je(K._loaderManager)), Ce(K, "_imageLoader", new cr(K._loaderManager)), // @ts-ignore
Ce(K, "_base", "/");
let ut = K;
var Fe = Uint8Array, NA = Uint16Array, Za = Int32Array, Mr = new Fe([
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
]), Lr = new Fe([
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
]), $a = new Fe([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), kr = function(o, e) {
  for (var A = new NA(31), t = 0; t < 31; ++t)
    A[t] = e += 1 << o[t - 1];
  for (var i = new Za(A[30]), t = 1; t < 30; ++t)
    for (var n = A[t]; n < A[t + 1]; ++n)
      i[n] = n - A[t] << 5 | t;
  return { b: A, r: i };
}, Gr = kr(Mr, 2), vr = Gr.b, eg = Gr.r;
vr[28] = 258, eg[258] = 28;
var Ag = kr(Lr, 0), tg = Ag.b, yi = new NA(32768);
for (var $ = 0; $ < 32768; ++$) {
  var gA = ($ & 43690) >> 1 | ($ & 21845) << 1;
  gA = (gA & 52428) >> 2 | (gA & 13107) << 2, gA = (gA & 61680) >> 4 | (gA & 3855) << 4, yi[$] = ((gA & 65280) >> 8 | (gA & 255) << 8) >> 1;
}
var ft = function(o, e, A) {
  for (var t = o.length, i = 0, n = new NA(e); i < t; ++i)
    o[i] && ++n[o[i] - 1];
  var r = new NA(e);
  for (i = 1; i < e; ++i)
    r[i] = r[i - 1] + n[i - 1] << 1;
  var s;
  if (A) {
    s = new NA(1 << e);
    var a = 15 - e;
    for (i = 0; i < t; ++i)
      if (o[i])
        for (var g = i << 4 | o[i], c = e - o[i], u = r[o[i] - 1]++ << c, f = u | (1 << c) - 1; u <= f; ++u)
          s[yi[u] >> a] = g;
  } else
    for (s = new NA(t), i = 0; i < t; ++i)
      o[i] && (s[i] = yi[r[o[i] - 1]++] >> 15 - o[i]);
  return s;
}, mt = new Fe(288);
for (var $ = 0; $ < 144; ++$)
  mt[$] = 8;
for (var $ = 144; $ < 256; ++$)
  mt[$] = 9;
for (var $ = 256; $ < 280; ++$)
  mt[$] = 7;
for (var $ = 280; $ < 288; ++$)
  mt[$] = 8;
var br = new Fe(32);
for (var $ = 0; $ < 32; ++$)
  br[$] = 5;
var ig = /* @__PURE__ */ ft(mt, 9, 1), ng = /* @__PURE__ */ ft(br, 5, 1), oi = function(o) {
  for (var e = o[0], A = 1; A < o.length; ++A)
    o[A] > e && (e = o[A]);
  return e;
}, qe = function(o, e, A) {
  var t = e / 8 | 0;
  return (o[t] | o[t + 1] << 8) >> (e & 7) & A;
}, ai = function(o, e) {
  var A = e / 8 | 0;
  return (o[A] | o[A + 1] << 8 | o[A + 2] << 16) >> (e & 7);
}, rg = function(o) {
  return (o + 7) / 8 | 0;
}, Vi = function(o, e, A) {
  return (e == null || e < 0) && (e = 0), (A == null || A > o.length) && (A = o.length), new Fe(o.subarray(e, A));
}, sg = [
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
], Ne = function(o, e, A) {
  var t = new Error(e || sg[o]);
  if (t.code = o, Error.captureStackTrace && Error.captureStackTrace(t, Ne), !A)
    throw t;
  return t;
}, og = function(o, e, A, t) {
  var i = o.length, n = t ? t.length : 0;
  if (!i || e.f && !e.l)
    return A || new Fe(0);
  var r = !A, s = r || e.i != 2, a = e.i;
  r && (A = new Fe(i * 3));
  var g = function(Re) {
    var ZA = A.length;
    if (Re > ZA) {
      var EA = new Fe(Math.max(ZA * 2, Re));
      EA.set(A), A = EA;
    }
  }, c = e.f || 0, u = e.p || 0, f = e.b || 0, l = e.l, I = e.d, h = e.m, B = e.n, C = i * 8;
  do {
    if (!l) {
      c = qe(o, u, 1);
      var E = qe(o, u + 1, 3);
      if (u += 3, E)
        if (E == 1)
          l = ig, I = ng, h = 9, B = 5;
        else if (E == 2) {
          var D = qe(o, u, 31) + 257, T = qe(o, u + 10, 15) + 4, S = D + qe(o, u + 5, 31) + 1;
          u += 14;
          for (var y = new Fe(S), v = new Fe(19), b = 0; b < T; ++b)
            v[$a[b]] = qe(o, u + b * 3, 7);
          u += T * 3;
          for (var H = oi(v), U = (1 << H) - 1, j = ft(v, H, 1), b = 0; b < S; ) {
            var V = j[qe(o, u, U)];
            u += V & 15;
            var p = V >> 4;
            if (p < 16)
              y[b++] = p;
            else {
              var q = 0, N = 0;
              for (p == 16 ? (N = 3 + qe(o, u, 3), u += 2, q = y[b - 1]) : p == 17 ? (N = 3 + qe(o, u, 7), u += 3) : p == 18 && (N = 11 + qe(o, u, 127), u += 7); N--; )
                y[b++] = q;
            }
          }
          var X = y.subarray(0, D), ee = y.subarray(D);
          h = oi(X), B = oi(ee), l = ft(X, h, 1), I = ft(ee, B, 1);
        } else
          Ne(1);
      else {
        var p = rg(u) + 4, _ = o[p - 4] | o[p - 3] << 8, m = p + _;
        if (m > i) {
          a && Ne(0);
          break;
        }
        s && g(f + _), A.set(o.subarray(p, m), f), e.b = f += _, e.p = u = m * 8, e.f = c;
        continue;
      }
      if (u > C) {
        a && Ne(0);
        break;
      }
    }
    s && g(f + 131072);
    for (var ae = (1 << h) - 1, Ie = (1 << B) - 1, Be = u; ; Be = u) {
      var q = l[ai(o, u) & ae], k = q >> 4;
      if (u += q & 15, u > C) {
        a && Ne(0);
        break;
      }
      if (q || Ne(2), k < 256)
        A[f++] = k;
      else if (k == 256) {
        Be = u, l = null;
        break;
      } else {
        var ce = k - 254;
        if (k > 264) {
          var b = k - 257, pe = Mr[b];
          ce = qe(o, u, (1 << pe) - 1) + vr[b], u += pe;
        }
        var te = I[ai(o, u) & Ie], jA = te >> 4;
        te || Ne(3), u += te & 15;
        var ee = tg[jA];
        if (jA > 3) {
          var pe = Lr[jA];
          ee += ai(o, u) & (1 << pe) - 1, u += pe;
        }
        if (u > C) {
          a && Ne(0);
          break;
        }
        s && g(f + 131072);
        var yt = f + ce;
        if (f < ee) {
          var zA = n - ee, Jt = Math.min(ee, yt);
          for (zA + f < 0 && Ne(3); f < Jt; ++f)
            A[f] = t[zA + f];
        }
        for (; f < yt; ++f)
          A[f] = A[f - ee];
      }
    }
    e.l = l, e.p = Be, e.b = f, e.f = c, l && (c = 1, e.m = h, e.d = I, e.n = B);
  } while (!c);
  return f != A.length && r ? Vi(A, 0, f) : A.subarray(0, f);
}, ag = /* @__PURE__ */ new Fe(0), Xe = function(o, e) {
  return o[e] | o[e + 1] << 8;
}, Ye = function(o, e) {
  return (o[e] | o[e + 1] << 8 | o[e + 2] << 16 | o[e + 3] << 24) >>> 0;
}, gi = function(o, e) {
  return Ye(o, e) + Ye(o, e + 4) * 4294967296;
};
function gg(o, e) {
  return og(o, { i: 2 }, e.out, e.dictionary);
}
var Di = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), cg = 0;
try {
  Di.decode(ag, { stream: !0 }), cg = 1;
} catch {
}
var ug = function(o) {
  for (var e = "", A = 0; ; ) {
    var t = o[A++], i = (t > 127) + (t > 223) + (t > 239);
    if (A + i > o.length)
      return { s: e, r: Vi(o, A - 1) };
    i ? i == 3 ? (t = ((t & 15) << 18 | (o[A++] & 63) << 12 | (o[A++] & 63) << 6 | o[A++] & 63) - 65536, e += String.fromCharCode(55296 | t >> 10, 56320 | t & 1023)) : i & 1 ? e += String.fromCharCode((t & 31) << 6 | o[A++] & 63) : e += String.fromCharCode((t & 15) << 12 | (o[A++] & 63) << 6 | o[A++] & 63) : e += String.fromCharCode(t);
  }
};
function fg(o, e) {
  if (e) {
    for (var A = "", t = 0; t < o.length; t += 16384)
      A += String.fromCharCode.apply(null, o.subarray(t, t + 16384));
    return A;
  } else {
    if (Di)
      return Di.decode(o);
    var i = ug(o), n = i.s, A = i.r;
    return A.length && Ne(8), n;
  }
}
var hg = function(o, e) {
  return e + 30 + Xe(o, e + 26) + Xe(o, e + 28);
}, lg = function(o, e, A) {
  var t = Xe(o, e + 28), i = fg(o.subarray(e + 46, e + 46 + t), !(Xe(o, e + 8) & 2048)), n = e + 46 + t, r = Ye(o, e + 20), s = A && r == 4294967295 ? Ig(o, n) : [r, Ye(o, e + 24), Ye(o, e + 42)], a = s[0], g = s[1], c = s[2];
  return [Xe(o, e + 10), a, g, i, n + Xe(o, e + 30) + Xe(o, e + 32), c];
}, Ig = function(o, e) {
  for (; Xe(o, e) != 1; e += 4 + Xe(o, e + 2))
    ;
  return [gi(o, e + 12), gi(o, e + 4), gi(o, e + 20)];
};
function Bg(o, e) {
  for (var A = {}, t = o.length - 22; Ye(o, t) != 101010256; --t)
    (!t || o.length - t > 65558) && Ne(13);
  var i = Xe(o, t + 8);
  if (!i)
    return {};
  var n = Ye(o, t + 16), r = n == 4294967295 || i == 65535;
  if (r) {
    var s = Ye(o, t - 12);
    r = Ye(o, s) == 101075792, r && (i = Ye(o, s + 32), n = Ye(o, s + 48));
  }
  for (var a = 0; a < i; ++a) {
    var g = lg(o, n, r), c = g[0], u = g[1], f = g[2], l = g[3], I = g[4], h = g[5], B = hg(o, h);
    n = I, c ? c == 8 ? A[l] = gg(o.subarray(B, B + u), { out: new Fe(f) }) : Ne(14, "unknown compression type " + c) : A[l] = Vi(o, B, B + u);
  }
  return A;
}
class On {
  constructor(e) {
    Ce(this, "_files", {});
    this.archiveUrl = e;
  }
  get files() {
    return this._files;
  }
  async extract(e = 5, A = 1e3) {
    let t = 0, i = !1, n;
    for (; t < e && !i; )
      try {
        if (n = await fetch(this.archiveUrl), !n.ok)
          throw new Error(`Не удалось загрузить архив: ${n.statusText}`);
        i = !0;
      } catch (s) {
        if (t++, console.warn(`Попытка ${t} не удалась: ${s.message}`), t < e)
          await new Promise((a) => setTimeout(a, A));
        else
          throw new Error(`Не удалось загрузить архив после ${e} попыток`);
      }
    const r = new Uint8Array(await n.arrayBuffer());
    this._files = Bg(r);
  }
  getFileContent(e) {
    const A = this._files[e];
    if (!A)
      throw new Error(`File ${e} not found in archive.`);
    return A;
  }
}
const Cg = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map();
var dg = Object.defineProperty, Eg = Object.getOwnPropertyDescriptor, Qg = (o, e, A, t) => {
  for (var i = t > 1 ? void 0 : t ? Eg(e, A) : e, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = (t ? r(e, A, i) : r(i)) || i);
  return t && i && dg(e, A, i), i;
};
let Ti = class {
  init(o) {
    ut.initKTX2Loader(o);
  }
  async load(o, e) {
    const A = ut.getInstance();
    await this.loadModelResources(A, o), await this.loadTextureResources(A, e);
  }
  async loadModelResources(o, e) {
    const A = new On(e);
    try {
      await A.extract();
      for (const t in A.files) {
        const i = A.getFileContent(t), n = new Blob([i]), r = URL.createObjectURL(n), s = await o.parseGLTFModel(i.buffer, r);
        Cg.set(t.split(".")[0], s);
      }
    } catch (t) {
      console.error(t.message);
    }
  }
  async loadTextureResources(o, e) {
    const A = new On(e);
    try {
      await A.extract();
      for (const t in A.files) {
        const i = A.getFileContent(t);
        if (t.includes(".ktx2")) {
          const r = await new Promise((s, a) => {
            ut._ktx2Loader.parse(i.buffer, s, a);
          });
          Pn.set(t.split(".")[0], r);
        } else {
          const r = new Blob([i], {
            type: "application/octet-stream"
          }), s = URL.createObjectURL(r), a = await o.loadTexture(s);
          Pn.set(t.split(".")[0], a), URL.revokeObjectURL(s);
        }
      }
    } catch (t) {
      console.error(t.message);
    }
  }
};
Ti = Qg([
  ta()
], Ti);
function Oc(o, e = "./gameConfig.json") {
  return new Aa(async (A) => {
    const t = await pg(e), i = t.baseOpt;
    A(kA.BaseOpt).toConstantValue(i);
    const n = t.commonDebugOpt;
    A(kA.CommonDebugOpt).toConstantValue(n);
    const r = { value: 0 };
    A(kA.PassedTime).toConstantValue(r);
    const s = new Ko({
      canvas: o,
      antialias: i.antialias,
      powerPreference: "high-performance"
    });
    s.setSize(window.innerWidth, window.innerHeight), s.outputColorSpace = i.colorSpace, s.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const a = new fr(
      i.camera.fov,
      window.innerWidth / window.innerHeight,
      i.camera.near,
      i.camera.far
    );
    a.position.copy(i.camera.position);
    const g = {
      renderer: s,
      scene: new Vo(),
      camera: a
    };
    A(kA.ThreeJsBase).toConstantValue(g);
    const c = new Ti();
    c.init(s), A(kA.ResourceLoader).toConstantValue(c);
    const u = new jo({ title: "Debug", width: 300 });
    A(kA.GUI).toConstantValue(u), u.addFolder("Performance");
  });
}
async function pg(o) {
  try {
    const e = await fetch(o);
    if (!e.ok)
      throw new Error(`Response status: ${e.status}`);
    return await e.json();
  } catch (e) {
    console.error(e.message);
  }
}
const wA = class wA {
  static async task(e) {
    return new Promise((A) => {
      wA.resolvers.set(this._idCounter++, {
        ms: e / 1e3,
        resolver: A
      });
    });
  }
  static update(e) {
    wA.resolvers.forEach((A, t) => {
      A.ms -= e, A.ms <= 0 && (A.resolver(), wA.resolvers.delete(t));
    });
  }
};
Ce(wA, "_idCounter", 0), Ce(wA, "resolvers", /* @__PURE__ */ new Map());
let Si = wA;
function iA(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function Nr(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
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
var ke = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, YA = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Xi, Ee, Ae, Ue = 1e8, z = 1 / Ue, Ri = Math.PI * 2, _g = Ri / 4, mg = 0, Ur = Math.sqrt, wg = Math.cos, yg = Math.sin, le = function(e) {
  return typeof e == "string";
}, re = function(e) {
  return typeof e == "function";
}, sA = function(e) {
  return typeof e == "number";
}, Wi = function(e) {
  return typeof e > "u";
}, $e = function(e) {
  return typeof e == "object";
}, we = function(e) {
  return e !== !1;
}, ji = function() {
  return typeof window < "u";
}, Dt = function(e) {
  return re(e) || le(e);
}, Or = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Qe = Array.isArray, xi = /(?:-?\.?\d|\.)+/gi, Pr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, UA = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ci = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Hr = /[+-]=-?[.\d]+/, qr = /[^,'"\[\]\s]+/gi, Dg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ie, Ve, Fi, zi, Ge = {}, kt = {}, Jr, Yr = function(e) {
  return (kt = FA(e, Ge)) && Se;
}, Zi = function(e, A) {
  return console.warn("Invalid property", e, "set to", A, "Missing plugin? gsap.registerPlugin()");
}, Bt = function(e, A) {
  return !A && console.warn(e);
}, Kr = function(e, A) {
  return e && (Ge[e] = A) && kt && (kt[e] = A) || Ge;
}, Ct = function() {
  return 0;
}, Tg = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, St = {
  suppressEvents: !0,
  kill: !1
}, Sg = {
  suppressEvents: !0
}, $i = {}, hA = [], Mi = {}, Vr, xe = {}, ui = {}, Hn = 30, Rt = [], en = "", An = function(e) {
  var A = e[0], t, i;
  if ($e(A) || re(A) || (e = [e]), !(t = (A._gsap || {}).harness)) {
    for (i = Rt.length; i-- && !Rt[i].targetTest(A); )
      ;
    t = Rt[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Cs(e[i], t))) || e.splice(i, 1);
  return e;
}, TA = function(e) {
  return e._gsap || An(Oe(e))[0]._gsap;
}, Xr = function(e, A, t) {
  return (t = e[A]) && re(t) ? e[A]() : Wi(t) && e.getAttribute && e.getAttribute(A) || t;
}, ye = function(e, A) {
  return (e = e.split(",")).forEach(A) || e;
}, oe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, he = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, HA = function(e, A) {
  var t = A.charAt(0), i = parseFloat(A.substr(2));
  return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i;
}, Rg = function(e, A) {
  for (var t = A.length, i = 0; e.indexOf(A[i]) < 0 && ++i < t; )
    ;
  return i < t;
}, Gt = function() {
  var e = hA.length, A = hA.slice(0), t, i;
  for (Mi = {}, hA.length = 0, t = 0; t < e; t++)
    i = A[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Wr = function(e, A, t, i) {
  hA.length && !Ee && Gt(), e.render(A, t, Ee && A < 0 && (e._initted || e._startAt)), hA.length && !Ee && Gt();
}, jr = function(e) {
  var A = parseFloat(e);
  return (A || A === 0) && (e + "").match(qr).length < 2 ? A : le(e) ? e.trim() : e;
}, zr = function(e) {
  return e;
}, Pe = function(e, A) {
  for (var t in A)
    t in e || (e[t] = A[t]);
  return e;
}, xg = function(e) {
  return function(A, t) {
    for (var i in t)
      i in A || i === "duration" && e || i === "ease" || (A[i] = t[i]);
  };
}, FA = function(e, A) {
  for (var t in A)
    e[t] = A[t];
  return e;
}, qn = function o(e, A) {
  for (var t in A)
    t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = $e(A[t]) ? o(e[t] || (e[t] = {}), A[t]) : A[t]);
  return e;
}, vt = function(e, A) {
  var t = {}, i;
  for (i in e)
    i in A || (t[i] = e[i]);
  return t;
}, ht = function(e) {
  var A = e.parent || ie, t = e.keyframes ? xg(Qe(e.keyframes)) : Pe;
  if (we(e.inherit))
    for (; A; )
      t(e, A.vars.defaults), A = A.parent || A._dp;
  return e;
}, Fg = function(e, A) {
  for (var t = e.length, i = t === A.length; i && t-- && e[t] === A[t]; )
    ;
  return t < 0;
}, Zr = function(e, A, t, i, n) {
  var r = e[i], s;
  if (n)
    for (s = A[n]; r && r[n] > s; )
      r = r._prev;
  return r ? (A._next = r._next, r._next = A) : (A._next = e[t], e[t] = A), A._next ? A._next._prev = A : e[i] = A, A._prev = r, A.parent = A._dp = e, A;
}, Pt = function(e, A, t, i) {
  t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
  var n = A._prev, r = A._next;
  n ? n._next = r : e[t] === A && (e[t] = r), r ? r._prev = n : e[i] === A && (e[i] = n), A._next = A._prev = A.parent = null;
}, BA = function(e, A) {
  e.parent && (!A || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, SA = function(e, A) {
  if (e && (!A || A._end > e._dur || A._start < 0))
    for (var t = e; t; )
      t._dirty = 1, t = t.parent;
  return e;
}, Mg = function(e) {
  for (var A = e.parent; A && A.parent; )
    A._dirty = 1, A.totalDuration(), A = A.parent;
  return e;
}, Li = function(e, A, t, i) {
  return e._startAt && (Ee ? e._startAt.revert(St) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(A, !0, i));
}, Lg = function o(e) {
  return !e || e._ts && o(e.parent);
}, Jn = function(e) {
  return e._repeat ? KA(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, KA = function(e, A) {
  var t = Math.floor(e /= A);
  return e && t === e ? t - 1 : t;
}, bt = function(e, A) {
  return (e - A._start) * A._ts + (A._ts >= 0 ? 0 : A._dirty ? A.totalDuration() : A._tDur);
}, Ht = function(e) {
  return e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || z) || 0));
}, qt = function(e, A) {
  var t = e._dp;
  return t && t.smoothChildTiming && e._ts && (e._start = he(t._time - (e._ts > 0 ? A / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - A) / -e._ts)), Ht(e), t._dirty || SA(t, e)), e;
}, $r = function(e, A) {
  var t;
  if ((A._time || !A._dur && A._initted || A._start < e._time && (A._dur || !A.add)) && (t = bt(e.rawTime(), A), (!A._dur || wt(0, A.totalDuration(), t) - A._tTime > z) && A.render(t, !0)), SA(e, A)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (t = e; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    e._zTime = -z;
  }
}, We = function(e, A, t, i) {
  return A.parent && BA(A), A._start = he((sA(t) ? t : t || e !== ie ? ve(e, t, A) : e._time) + A._delay), A._end = he(A._start + (A.totalDuration() / Math.abs(A.timeScale()) || 0)), Zr(e, A, "_first", "_last", e._sort ? "_start" : 0), ki(A) || (e._recent = A), i || $r(e, A), e._ts < 0 && qt(e, e._tTime), e;
}, es = function(e, A) {
  return (Ge.ScrollTrigger || Zi("scrollTrigger", A)) && Ge.ScrollTrigger.create(A, e);
}, As = function(e, A, t, i, n) {
  if (nn(e, A, n), !e._initted)
    return 1;
  if (!t && e._pt && !Ee && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Vr !== Me.frame)
    return hA.push(e), e._lazy = [n, i], 1;
}, kg = function o(e) {
  var A = e.parent;
  return A && A._ts && A._initted && !A._lock && (A.rawTime() < 0 || o(A));
}, ki = function(e) {
  var A = e.data;
  return A === "isFromStart" || A === "isStart";
}, Gg = function(e, A, t, i) {
  var n = e.ratio, r = A < 0 || !A && (!e._start && kg(e) && !(!e._initted && ki(e)) || (e._ts < 0 || e._dp._ts < 0) && !ki(e)) ? 0 : 1, s = e._rDelay, a = 0, g, c, u;
  if (s && e._repeat && (a = wt(0, e._tDur, A), c = KA(a, s), e._yoyo && c & 1 && (r = 1 - r), c !== KA(e._tTime, s) && (n = 1 - r, e.vars.repeatRefresh && e._initted && e.invalidate())), r !== n || Ee || i || e._zTime === z || !A && e._zTime) {
    if (!e._initted && As(e, A, i, t, a))
      return;
    for (u = e._zTime, e._zTime = A || (t ? z : 0), t || (t = A && !u), e.ratio = r, e._from && (r = 1 - r), e._time = 0, e._tTime = a, g = e._pt; g; )
      g.r(r, g.d), g = g._next;
    A < 0 && Li(e, A, t, !0), e._onUpdate && !t && Le(e, "onUpdate"), a && e._repeat && !t && e.parent && Le(e, "onRepeat"), (A >= e._tDur || A < 0) && e.ratio === r && (r && BA(e, 1), !t && !Ee && (Le(e, r ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = A);
}, vg = function(e, A, t) {
  var i;
  if (t > A)
    for (i = e._first; i && i._start <= t; ) {
      if (i.data === "isPause" && i._start > A)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= t; ) {
      if (i.data === "isPause" && i._start < A)
        return i;
      i = i._prev;
    }
}, VA = function(e, A, t, i) {
  var n = e._repeat, r = he(A) || 0, s = e._tTime / e._tDur;
  return s && !i && (e._time *= r / e._dur), e._dur = r, e._tDur = n ? n < 0 ? 1e10 : he(r * (n + 1) + e._rDelay * n) : r, s > 0 && !i && qt(e, e._tTime = e._tDur * s), e.parent && Ht(e), t || SA(e.parent, e), e;
}, Yn = function(e) {
  return e instanceof me ? SA(e) : VA(e, e._dur);
}, bg = {
  _start: 0,
  endTime: Ct,
  totalDuration: Ct
}, ve = function o(e, A, t) {
  var i = e.labels, n = e._recent || bg, r = e.duration() >= Ue ? n.endTime(!1) : e._dur, s, a, g;
  return le(A) && (isNaN(A) || A in i) ? (a = A.charAt(0), g = A.substr(-1) === "%", s = A.indexOf("="), a === "<" || a === ">" ? (s >= 0 && (A = A.replace(/=/, "")), (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(A.substr(1)) || 0) * (g ? (s < 0 ? n : t).totalDuration() / 100 : 1)) : s < 0 ? (A in i || (i[A] = r), i[A]) : (a = parseFloat(A.charAt(s - 1) + A.substr(s + 1)), g && t && (a = a / 100 * (Qe(t) ? t[0] : t).totalDuration()), s > 1 ? o(e, A.substr(0, s - 1), t) + a : r + a)) : A == null ? r : +A;
}, lt = function(e, A, t) {
  var i = sA(A[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), r = A[n], s, a;
  if (i && (r.duration = A[1]), r.parent = t, e) {
    for (s = r, a = t; a && !("immediateRender" in s); )
      s = a.vars.defaults || {}, a = we(a.vars.inherit) && a.parent;
    r.immediateRender = we(s.immediateRender), e < 2 ? r.runBackwards = 1 : r.startAt = A[n - 1];
  }
  return new ge(A[0], r, A[n + 1]);
}, dA = function(e, A) {
  return e || e === 0 ? A(e) : A;
}, wt = function(e, A, t) {
  return t < e ? e : t > A ? A : t;
}, de = function(e, A) {
  return !le(e) || !(A = Dg.exec(e)) ? "" : A[1];
}, Ng = function(e, A, t) {
  return dA(t, function(i) {
    return wt(e, A, i);
  });
}, Gi = [].slice, ts = function(e, A) {
  return e && $e(e) && "length" in e && (!A && !e.length || e.length - 1 in e && $e(e[0])) && !e.nodeType && e !== Ve;
}, Ug = function(e, A, t) {
  return t === void 0 && (t = []), e.forEach(function(i) {
    var n;
    return le(i) && !A || ts(i, 1) ? (n = t).push.apply(n, Oe(i)) : t.push(i);
  }) || t;
}, Oe = function(e, A, t) {
  return Ae && !A && Ae.selector ? Ae.selector(e) : le(e) && !t && (Fi || !XA()) ? Gi.call((A || zi).querySelectorAll(e), 0) : Qe(e) ? Ug(e, t) : ts(e) ? Gi.call(e, 0) : e ? [e] : [];
}, vi = function(e) {
  return e = Oe(e)[0] || Bt("Invalid scope") || {}, function(A) {
    var t = e.current || e.nativeElement || e;
    return Oe(A, t.querySelectorAll ? t : t === e ? Bt("Invalid scope") || zi.createElement("div") : e);
  };
}, is = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, ns = function(e) {
  if (re(e))
    return e;
  var A = $e(e) ? e : {
    each: e
  }, t = RA(A.ease), i = A.from || 0, n = parseFloat(A.base) || 0, r = {}, s = i > 0 && i < 1, a = isNaN(i) || s, g = A.axis, c = i, u = i;
  return le(i) ? c = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !s && a && (c = i[0], u = i[1]), function(f, l, I) {
    var h = (I || A).length, B = r[h], C, E, p, _, m, D, T, S, y;
    if (!B) {
      if (y = A.grid === "auto" ? 0 : (A.grid || [1, Ue])[1], !y) {
        for (T = -Ue; T < (T = I[y++].getBoundingClientRect().left) && y < h; )
          ;
        y < h && y--;
      }
      for (B = r[h] = [], C = a ? Math.min(y, h) * c - 0.5 : i % y, E = y === Ue ? 0 : a ? h * u / y - 0.5 : i / y | 0, T = 0, S = Ue, D = 0; D < h; D++)
        p = D % y - C, _ = E - (D / y | 0), B[D] = m = g ? Math.abs(g === "y" ? _ : p) : Ur(p * p + _ * _), m > T && (T = m), m < S && (S = m);
      i === "random" && is(B), B.max = T - S, B.min = S, B.v = h = (parseFloat(A.amount) || parseFloat(A.each) * (y > h ? h - 1 : g ? g === "y" ? h / y : y : Math.max(y, h / y)) || 0) * (i === "edges" ? -1 : 1), B.b = h < 0 ? n - h : n, B.u = de(A.amount || A.each) || 0, t = t && h < 0 ? ls(t) : t;
    }
    return h = (B[f] - B.min) / B.max || 0, he(B.b + (t ? t(h) : h) * B.v) + B.u;
  };
}, bi = function(e) {
  var A = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(t) {
    var i = he(Math.round(parseFloat(t) / e) * e * A);
    return (i - i % 1) / A + (sA(t) ? 0 : de(t));
  };
}, rs = function(e, A) {
  var t = Qe(e), i, n;
  return !t && $e(e) && (i = t = e.radius || Ue, e.values ? (e = Oe(e.values), (n = !sA(e[0])) && (i *= i)) : e = bi(e.increment)), dA(A, t ? re(e) ? function(r) {
    return n = e(r), Math.abs(n - r) <= i ? n : r;
  } : function(r) {
    for (var s = parseFloat(n ? r.x : r), a = parseFloat(n ? r.y : 0), g = Ue, c = 0, u = e.length, f, l; u--; )
      n ? (f = e[u].x - s, l = e[u].y - a, f = f * f + l * l) : f = Math.abs(e[u] - s), f < g && (g = f, c = u);
    return c = !i || g <= i ? e[c] : r, n || c === r || sA(r) ? c : c + de(r);
  } : bi(e));
}, ss = function(e, A, t, i) {
  return dA(Qe(e) ? !A : t === !0 ? !!(t = 0) : !i, function() {
    return Qe(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (A - e + t * 0.99)) / t) * t * i) / i;
  });
}, Og = function() {
  for (var e = arguments.length, A = new Array(e), t = 0; t < e; t++)
    A[t] = arguments[t];
  return function(i) {
    return A.reduce(function(n, r) {
      return r(n);
    }, i);
  };
}, Pg = function(e, A) {
  return function(t) {
    return e(parseFloat(t)) + (A || de(t));
  };
}, Hg = function(e, A, t) {
  return as(e, A, 0, 1, t);
}, os = function(e, A, t) {
  return dA(t, function(i) {
    return e[~~A(i)];
  });
}, qg = function o(e, A, t) {
  var i = A - e;
  return Qe(e) ? os(e, o(0, e.length), A) : dA(t, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, Jg = function o(e, A, t) {
  var i = A - e, n = i * 2;
  return Qe(e) ? os(e, o(0, e.length - 1), A) : dA(t, function(r) {
    return r = (n + (r - e) % n) % n || 0, e + (r > i ? n - r : r);
  });
}, dt = function(e) {
  for (var A = 0, t = "", i, n, r, s; ~(i = e.indexOf("random(", A)); )
    r = e.indexOf(")", i), s = e.charAt(i + 7) === "[", n = e.substr(i + 7, r - i - 7).match(s ? qr : xi), t += e.substr(A, i - A) + ss(s ? n : +n[0], s ? 0 : +n[1], +n[2] || 1e-5), A = r + 1;
  return t + e.substr(A, e.length - A);
}, as = function(e, A, t, i, n) {
  var r = A - e, s = i - t;
  return dA(n, function(a) {
    return t + ((a - e) / r * s || 0);
  });
}, Yg = function o(e, A, t, i) {
  var n = isNaN(e + A) ? 0 : function(l) {
    return (1 - l) * e + l * A;
  };
  if (!n) {
    var r = le(e), s = {}, a, g, c, u, f;
    if (t === !0 && (i = 1) && (t = null), r)
      e = {
        p: e
      }, A = {
        p: A
      };
    else if (Qe(e) && !Qe(A)) {
      for (c = [], u = e.length, f = u - 2, g = 1; g < u; g++)
        c.push(o(e[g - 1], e[g]));
      u--, n = function(I) {
        I *= u;
        var h = Math.min(f, ~~I);
        return c[h](I - h);
      }, t = A;
    } else i || (e = FA(Qe(e) ? [] : {}, e));
    if (!c) {
      for (a in A)
        tn.call(s, e, a, "get", A[a]);
      n = function(I) {
        return on(I, s) || (r ? e.p : e);
      };
    }
  }
  return dA(t, n);
}, Kn = function(e, A, t) {
  var i = e.labels, n = Ue, r, s, a;
  for (r in i)
    s = i[r] - A, s < 0 == !!t && s && n > (s = Math.abs(s)) && (a = r, n = s);
  return a;
}, Le = function(e, A, t) {
  var i = e.vars, n = i[A], r = Ae, s = e._ctx, a, g, c;
  if (n)
    return a = i[A + "Params"], g = i.callbackScope || e, t && hA.length && Gt(), s && (Ae = s), c = a ? n.apply(g, a) : n.call(g), Ae = r, c;
}, ot = function(e) {
  return BA(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ee), e.progress() < 1 && Le(e, "onInterrupt"), e;
}, OA, gs = [], cs = function(e) {
  if (e)
    if (e = !e.name && e.default || e, ji() || e.headless) {
      var A = e.name, t = re(e), i = A && !t && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Ct,
        render: on,
        add: tn,
        kill: oc,
        modifier: sc,
        rawVars: 0
      }, r = {
        targetTest: 0,
        get: 0,
        getSetter: sn,
        aliases: {},
        register: 0
      };
      if (XA(), e !== i) {
        if (xe[A])
          return;
        Pe(i, Pe(vt(e, n), r)), FA(i.prototype, FA(n, vt(e, r))), xe[i.prop = A] = i, e.targetTest && (Rt.push(i), $i[A] = 1), A = (A === "css" ? "CSS" : A.charAt(0).toUpperCase() + A.substr(1)) + "Plugin";
      }
      Kr(A, i), e.register && e.register(Se, i, De);
    } else
      gs.push(e);
}, W = 255, at = {
  aqua: [0, W, W],
  lime: [0, W, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, W],
  navy: [0, 0, 128],
  white: [W, W, W],
  olive: [128, 128, 0],
  yellow: [W, W, 0],
  orange: [W, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [W, 0, 0],
  pink: [W, 192, 203],
  cyan: [0, W, W],
  transparent: [W, W, W, 0]
}, fi = function(e, A, t) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? A + (t - A) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? A + (t - A) * (2 / 3 - e) * 6 : A) * W + 0.5 | 0;
}, us = function(e, A, t) {
  var i = e ? sA(e) ? [e >> 16, e >> 8 & W, e & W] : 0 : at.black, n, r, s, a, g, c, u, f, l, I;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), at[e])
      i = at[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), r = e.charAt(2), s = e.charAt(3), e = "#" + n + n + r + r + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & W, i & W, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & W, e & W];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = I = e.match(xi), !A)
        a = +i[0] % 360 / 360, g = +i[1] / 100, c = +i[2] / 100, r = c <= 0.5 ? c * (g + 1) : c + g - c * g, n = c * 2 - r, i.length > 3 && (i[3] *= 1), i[0] = fi(a + 1 / 3, n, r), i[1] = fi(a, n, r), i[2] = fi(a - 1 / 3, n, r);
      else if (~e.indexOf("="))
        return i = e.match(Pr), t && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(xi) || at.transparent;
    i = i.map(Number);
  }
  return A && !I && (n = i[0] / W, r = i[1] / W, s = i[2] / W, u = Math.max(n, r, s), f = Math.min(n, r, s), c = (u + f) / 2, u === f ? a = g = 0 : (l = u - f, g = c > 0.5 ? l / (2 - u - f) : l / (u + f), a = u === n ? (r - s) / l + (r < s ? 6 : 0) : u === r ? (s - n) / l + 2 : (n - r) / l + 4, a *= 60), i[0] = ~~(a + 0.5), i[1] = ~~(g * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), t && i.length < 4 && (i[3] = 1), i;
}, fs = function(e) {
  var A = [], t = [], i = -1;
  return e.split(lA).forEach(function(n) {
    var r = n.match(UA) || [];
    A.push.apply(A, r), t.push(i += r.length + 1);
  }), A.c = t, A;
}, Vn = function(e, A, t) {
  var i = "", n = (e + i).match(lA), r = A ? "hsla(" : "rgba(", s = 0, a, g, c, u;
  if (!n)
    return e;
  if (n = n.map(function(f) {
    return (f = us(f, A, 1)) && r + (A ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), t && (c = fs(e), a = t.c, a.join(i) !== c.c.join(i)))
    for (g = e.replace(lA, "1").split(UA), u = g.length - 1; s < u; s++)
      i += g[s] + (~a.indexOf(s) ? n.shift() || r + "0,0,0,0)" : (c.length ? c : n.length ? n : t).shift());
  if (!g)
    for (g = e.split(lA), u = g.length - 1; s < u; s++)
      i += g[s] + n[s];
  return i + g[u];
}, lA = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in at)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
}(), Kg = /hsl[a]?\(/, hs = function(e) {
  var A = e.join(" "), t;
  if (lA.lastIndex = 0, lA.test(A))
    return t = Kg.test(A), e[1] = Vn(e[1], t), e[0] = Vn(e[0], t, fs(e[1])), !0;
}, Et, Me = function() {
  var o = Date.now, e = 500, A = 33, t = o(), i = t, n = 1e3 / 240, r = n, s = [], a, g, c, u, f, l, I = function h(B) {
    var C = o() - i, E = B === !0, p, _, m, D;
    if ((C > e || C < 0) && (t += C - A), i += C, m = i - t, p = m - r, (p > 0 || E) && (D = ++u.frame, f = m - u.time * 1e3, u.time = m = m / 1e3, r += p + (p >= n ? 4 : n - p), _ = 1), E || (a = g(h)), _)
      for (l = 0; l < s.length; l++)
        s[l](m, f, D, B);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      I(!0);
    },
    deltaRatio: function(B) {
      return f / (1e3 / (B || 60));
    },
    wake: function() {
      Jr && (!Fi && ji() && (Ve = Fi = window, zi = Ve.document || {}, Ge.gsap = Se, (Ve.gsapVersions || (Ve.gsapVersions = [])).push(Se.version), Yr(kt || Ve.GreenSockGlobals || !Ve.gsap && Ve || {}), gs.forEach(cs)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && u.sleep(), g = c || function(B) {
        return setTimeout(B, r - u.time * 1e3 + 1 | 0);
      }, Et = 1, I(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(a), Et = 0, g = Ct;
    },
    lagSmoothing: function(B, C) {
      e = B || 1 / 0, A = Math.min(C || 33, e);
    },
    fps: function(B) {
      n = 1e3 / (B || 240), r = u.time * 1e3 + n;
    },
    add: function(B, C, E) {
      var p = C ? function(_, m, D, T) {
        B(_, m, D, T), u.remove(p);
      } : B;
      return u.remove(B), s[E ? "unshift" : "push"](p), XA(), p;
    },
    remove: function(B, C) {
      ~(C = s.indexOf(B)) && s.splice(C, 1) && l >= C && l--;
    },
    _listeners: s
  }, u;
}(), XA = function() {
  return !Et && Me.wake();
}, Y = {}, Vg = /^[\d.\-M][\d.\-,\s]/, Xg = /["']/g, Wg = function(e) {
  for (var A = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, r = t.length, s, a, g; n < r; n++)
    a = t[n], s = n !== r - 1 ? a.lastIndexOf(",") : a.length, g = a.substr(0, s), A[i] = isNaN(g) ? g.replace(Xg, "").trim() : +g, i = a.substr(s + 1).trim();
  return A;
}, jg = function(e) {
  var A = e.indexOf("(") + 1, t = e.indexOf(")"), i = e.indexOf("(", A);
  return e.substring(A, ~i && i < t ? e.indexOf(")", t + 1) : t);
}, zg = function(e) {
  var A = (e + "").split("("), t = Y[A[0]];
  return t && A.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Wg(A[1])] : jg(e).split(",").map(jr)) : Y._CE && Vg.test(e) ? Y._CE("", e) : t;
}, ls = function(e) {
  return function(A) {
    return 1 - e(1 - A);
  };
}, Is = function o(e, A) {
  for (var t = e._first, i; t; )
    t instanceof me ? o(t, A) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== A && (t.timeline ? o(t.timeline, A) : (i = t._ease, t._ease = t._yEase, t._yEase = i, t._yoyo = A)), t = t._next;
}, RA = function(e, A) {
  return e && (re(e) ? e : Y[e] || zg(e)) || A;
}, LA = function(e, A, t, i) {
  t === void 0 && (t = function(a) {
    return 1 - A(1 - a);
  }), i === void 0 && (i = function(a) {
    return a < 0.5 ? A(a * 2) / 2 : 1 - A((1 - a) * 2) / 2;
  });
  var n = {
    easeIn: A,
    easeOut: t,
    easeInOut: i
  }, r;
  return ye(e, function(s) {
    Y[s] = Ge[s] = n, Y[r = s.toLowerCase()] = t;
    for (var a in n)
      Y[r + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = Y[s + "." + a] = n[a];
  }), n;
}, Bs = function(e) {
  return function(A) {
    return A < 0.5 ? (1 - e(1 - A * 2)) / 2 : 0.5 + e((A - 0.5) * 2) / 2;
  };
}, hi = function o(e, A, t) {
  var i = A >= 1 ? A : 1, n = (t || (e ? 0.3 : 0.45)) / (A < 1 ? A : 1), r = n / Ri * (Math.asin(1 / i) || 0), s = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * yg((c - r) * n) + 1;
  }, a = e === "out" ? s : e === "in" ? function(g) {
    return 1 - s(1 - g);
  } : Bs(s);
  return n = Ri / n, a.config = function(g, c) {
    return o(e, g, c);
  }, a;
}, li = function o(e, A) {
  A === void 0 && (A = 1.70158);
  var t = function(r) {
    return r ? --r * r * ((A + 1) * r + A) + 1 : 0;
  }, i = e === "out" ? t : e === "in" ? function(n) {
    return 1 - t(1 - n);
  } : Bs(t);
  return i.config = function(n) {
    return o(e, n);
  }, i;
};
ye("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var A = e < 5 ? e + 1 : e;
  LA(o + ",Power" + (A - 1), e ? function(t) {
    return Math.pow(t, A);
  } : function(t) {
    return t;
  }, function(t) {
    return 1 - Math.pow(1 - t, A);
  }, function(t) {
    return t < 0.5 ? Math.pow(t * 2, A) / 2 : 1 - Math.pow((1 - t) * 2, A) / 2;
  });
});
Y.Linear.easeNone = Y.none = Y.Linear.easeIn;
LA("Elastic", hi("in"), hi("out"), hi());
(function(o, e) {
  var A = 1 / e, t = 2 * A, i = 2.5 * A, n = function(s) {
    return s < A ? o * s * s : s < t ? o * Math.pow(s - 1.5 / e, 2) + 0.75 : s < i ? o * (s -= 2.25 / e) * s + 0.9375 : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
  };
  LA("Bounce", function(r) {
    return 1 - n(1 - r);
  }, n);
})(7.5625, 2.75);
LA("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
LA("Circ", function(o) {
  return -(Ur(1 - o * o) - 1);
});
LA("Sine", function(o) {
  return o === 1 ? 1 : -wg(o * _g) + 1;
});
LA("Back", li("in"), li("out"), li());
Y.SteppedEase = Y.steps = Ge.SteppedEase = {
  config: function(e, A) {
    e === void 0 && (e = 1);
    var t = 1 / e, i = e + (A ? 0 : 1), n = A ? 1 : 0, r = 1 - z;
    return function(s) {
      return ((i * wt(0, r, s) | 0) + n) * t;
    };
  }
};
YA.ease = Y["quad.out"];
ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return en += o + "," + o + "Params,";
});
var Cs = function(e, A) {
  this.id = mg++, e._gsap = this, this.target = e, this.harness = A, this.get = A ? A.get : Xr, this.set = A ? A.getSetter : sn;
}, Qt = /* @__PURE__ */ function() {
  function o(A) {
    this.vars = A, this._delay = +A.delay || 0, (this._repeat = A.repeat === 1 / 0 ? -2 : A.repeat || 0) && (this._rDelay = A.repeatDelay || 0, this._yoyo = !!A.yoyo || !!A.yoyoEase), this._ts = 1, VA(this, +A.duration, 1, 1), this.data = A.data, Ae && (this._ctx = Ae, Ae.data.push(this)), Et || Me.wake();
  }
  var e = o.prototype;
  return e.delay = function(t) {
    return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, e.duration = function(t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(t) {
    return arguments.length ? (this._dirty = 0, VA(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(t, i) {
    if (XA(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (qt(this, t), !n._dp || n.parent || $r(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && We(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === z || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Wr(this, t, i)), this;
  }, e.time = function(t, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Jn(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(t, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(t, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Jn(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(t, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? KA(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(t, i) {
    if (!arguments.length)
      return this._rts === -z ? 0 : this._rts;
    if (this._rts === t)
      return this;
    var n = this.parent && this._ts ? bt(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -z ? 0 : this._rts, this.totalTime(wt(-Math.abs(this._delay), this._tDur, n), i !== !1), Ht(this), Mg(this);
  }, e.paused = function(t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (XA(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z)))), this) : this._ps;
  }, e.startTime = function(t) {
    if (arguments.length) {
      this._start = t;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && We(i, this, t - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(t) {
    return this._start + (we(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(t) {
    var i = this.parent || this._dp;
    return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? bt(i.rawTime(t), this) : this._tTime : this._tTime;
  }, e.revert = function(t) {
    t === void 0 && (t = Sg);
    var i = Ee;
    return Ee = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), Ee = i, this;
  }, e.globalTime = function(t) {
    for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t) : n;
  }, e.repeat = function(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Yn(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(t) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = t, Yn(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, e.seek = function(t, i) {
    return this.totalTime(ve(this, t), we(i));
  }, e.restart = function(t, i) {
    return this.play().totalTime(t ? -this._delay : 0, we(i));
  }, e.play = function(t, i) {
    return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(t, i) {
    return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(t, i) {
    return t != null && this.seek(t, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -z : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -z, this;
  }, e.isActive = function() {
    var t = this.parent || this._dp, i = this._start, n;
    return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - z);
  }, e.eventCallback = function(t, i, n) {
    var r = this.vars;
    return arguments.length > 1 ? (i ? (r[t] = i, n && (r[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete r[t], this) : r[t];
  }, e.then = function(t) {
    var i = this;
    return new Promise(function(n) {
      var r = re(t) ? t : zr, s = function() {
        var g = i.then;
        i.then = null, re(r) && (r = r(i)) && (r.then || r === i) && (i.then = g), n(r), i.then = g;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s;
    });
  }, e.kill = function() {
    ot(this);
  }, o;
}();
Pe(Qt.prototype, {
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
  _zTime: -z,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var me = /* @__PURE__ */ function(o) {
  Nr(e, o);
  function e(t, i) {
    var n;
    return t === void 0 && (t = {}), n = o.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = we(t.sortChildren), ie && We(t.parent || ie, iA(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && es(iA(n), t.scrollTrigger), n;
  }
  var A = e.prototype;
  return A.to = function(i, n, r) {
    return lt(0, arguments, this), this;
  }, A.from = function(i, n, r) {
    return lt(1, arguments, this), this;
  }, A.fromTo = function(i, n, r, s) {
    return lt(2, arguments, this), this;
  }, A.set = function(i, n, r) {
    return n.duration = 0, n.parent = this, ht(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new ge(i, n, ve(this, r), 1), this;
  }, A.call = function(i, n, r) {
    return We(this, ge.delayedCall(0, i, n), r);
  }, A.staggerTo = function(i, n, r, s, a, g, c) {
    return r.duration = n, r.stagger = r.stagger || s, r.onComplete = g, r.onCompleteParams = c, r.parent = this, new ge(i, r, ve(this, a)), this;
  }, A.staggerFrom = function(i, n, r, s, a, g, c) {
    return r.runBackwards = 1, ht(r).immediateRender = we(r.immediateRender), this.staggerTo(i, n, r, s, a, g, c);
  }, A.staggerFromTo = function(i, n, r, s, a, g, c, u) {
    return s.startAt = r, ht(s).immediateRender = we(s.immediateRender), this.staggerTo(i, n, s, a, g, c, u);
  }, A.render = function(i, n, r) {
    var s = this._time, a = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, c = i <= 0 ? 0 : he(i), u = this._zTime < 0 != i < 0 && (this._initted || !g), f, l, I, h, B, C, E, p, _, m, D, T;
    if (this !== ie && c > a && i >= 0 && (c = a), c !== this._tTime || r || u) {
      if (s !== this._time && g && (c += this._time - s, i += this._time - s), f = c, _ = this._start, p = this._ts, C = !p, u && (g || (s = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (D = this._yoyo, B = g + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(B * 100 + i, n, r);
        if (f = he(c % B), c === a ? (h = this._repeat, f = g) : (h = ~~(c / B), h && h === c / B && (f = g, h--), f > g && (f = g)), m = KA(this._tTime, B), !s && this._tTime && m !== h && this._tTime - m * B - this._dur <= 0 && (m = h), D && h & 1 && (f = g - f, T = 1), h !== m && !this._lock) {
          var S = D && m & 1, y = S === (D && h & 1);
          if (h < m && (S = !S), s = S ? 0 : c % g ? g : c, this._lock = 1, this.render(s || (T ? 0 : he(h * B)), n, !g)._lock = 0, this._tTime = c, !n && this.parent && Le(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), s && s !== this._time || C !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (g = this._dur, a = this._tDur, y && (this._lock = 2, s = S ? g : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !C)
            return this;
          Is(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (E = vg(this, he(s), he(f)), E && (c -= f - (f = E._start))), this._tTime = c, this._time = f, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, s = 0), !s && f && !n && !h && (Le(this, "onStart"), this._tTime !== c))
        return this;
      if (f >= s && i >= 0)
        for (l = this._first; l; ) {
          if (I = l._next, (l._act || f >= l._start) && l._ts && E !== l) {
            if (l.parent !== this)
              return this.render(i, n, r);
            if (l.render(l._ts > 0 ? (f - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (f - l._start) * l._ts, n, r), f !== this._time || !this._ts && !C) {
              E = 0, I && (c += this._zTime = -z);
              break;
            }
          }
          l = I;
        }
      else {
        l = this._last;
        for (var v = i < 0 ? i : f; l; ) {
          if (I = l._prev, (l._act || v <= l._end) && l._ts && E !== l) {
            if (l.parent !== this)
              return this.render(i, n, r);
            if (l.render(l._ts > 0 ? (v - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (v - l._start) * l._ts, n, r || Ee && (l._initted || l._startAt)), f !== this._time || !this._ts && !C) {
              E = 0, I && (c += this._zTime = v ? -z : z);
              break;
            }
          }
          l = I;
        }
      }
      if (E && !n && (this.pause(), E.render(f >= s ? 0 : -z)._zTime = f >= s ? 1 : -1, this._ts))
        return this._start = _, Ht(this), this.render(i, n, r);
      this._onUpdate && !n && Le(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && s) && (_ === this._start || Math.abs(p) !== Math.abs(this._ts)) && (this._lock || ((i || !g) && (c === a && this._ts > 0 || !c && this._ts < 0) && BA(this, 1), !n && !(i < 0 && !s) && (c || s || !a) && (Le(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, A.add = function(i, n) {
    var r = this;
    if (sA(n) || (n = ve(this, n, i)), !(i instanceof Qt)) {
      if (Qe(i))
        return i.forEach(function(s) {
          return r.add(s, n);
        }), this;
      if (le(i))
        return this.addLabel(i, n);
      if (re(i))
        i = ge.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? We(this, i, n) : this;
  }, A.getChildren = function(i, n, r, s) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), r === void 0 && (r = !0), s === void 0 && (s = -Ue);
    for (var a = [], g = this._first; g; )
      g._start >= s && (g instanceof ge ? n && a.push(g) : (r && a.push(g), i && a.push.apply(a, g.getChildren(!0, n, r)))), g = g._next;
    return a;
  }, A.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), r = n.length; r--; )
      if (n[r].vars.id === i)
        return n[r];
  }, A.remove = function(i) {
    return le(i) ? this.removeLabel(i) : re(i) ? this.killTweensOf(i) : (Pt(this, i), i === this._recent && (this._recent = this._last), SA(this));
  }, A.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = he(Me.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, A.addLabel = function(i, n) {
    return this.labels[i] = ve(this, n), this;
  }, A.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, A.addPause = function(i, n, r) {
    var s = ge.delayedCall(0, n || Ct, r);
    return s.data = "isPause", this._hasPause = 1, We(this, s, ve(this, i));
  }, A.removePause = function(i) {
    var n = this._first;
    for (i = ve(this, i); n; )
      n._start === i && n.data === "isPause" && BA(n), n = n._next;
  }, A.killTweensOf = function(i, n, r) {
    for (var s = this.getTweensOf(i, r), a = s.length; a--; )
      cA !== s[a] && s[a].kill(i, n);
    return this;
  }, A.getTweensOf = function(i, n) {
    for (var r = [], s = Oe(i), a = this._first, g = sA(n), c; a; )
      a instanceof ge ? Rg(a._targets, s) && (g ? (!cA || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && r.push(a) : (c = a.getTweensOf(s, n)).length && r.push.apply(r, c), a = a._next;
    return r;
  }, A.tweenTo = function(i, n) {
    n = n || {};
    var r = this, s = ve(r, i), a = n, g = a.startAt, c = a.onStart, u = a.onStartParams, f = a.immediateRender, l, I = ge.to(r, Pe({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: s,
      overwrite: "auto",
      duration: n.duration || Math.abs((s - (g && "time" in g ? g.time : r._time)) / r.timeScale()) || z,
      onStart: function() {
        if (r.pause(), !l) {
          var B = n.duration || Math.abs((s - (g && "time" in g ? g.time : r._time)) / r.timeScale());
          I._dur !== B && VA(I, B, 0, 1).render(I._time, !0, !0), l = 1;
        }
        c && c.apply(I, u || []);
      }
    }, n));
    return f ? I.render(0) : I;
  }, A.tweenFromTo = function(i, n, r) {
    return this.tweenTo(n, Pe({
      startAt: {
        time: ve(this, i)
      }
    }, r));
  }, A.recent = function() {
    return this._recent;
  }, A.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Kn(this, ve(this, i));
  }, A.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Kn(this, ve(this, i), 1);
  }, A.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + z);
  }, A.shiftChildren = function(i, n, r) {
    r === void 0 && (r = 0);
    for (var s = this._first, a = this.labels, g; s; )
      s._start >= r && (s._start += i, s._end += i), s = s._next;
    if (n)
      for (g in a)
        a[g] >= r && (a[g] += i);
    return SA(this);
  }, A.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return o.prototype.invalidate.call(this, i);
  }, A.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, r; n; )
      r = n._next, this.remove(n), n = r;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), SA(this);
  }, A.totalDuration = function(i) {
    var n = 0, r = this, s = r._last, a = Ue, g, c, u;
    if (arguments.length)
      return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -i : i));
    if (r._dirty) {
      for (u = r.parent; s; )
        g = s._prev, s._dirty && s.totalDuration(), c = s._start, c > a && r._sort && s._ts && !r._lock ? (r._lock = 1, We(r, s, c - s._delay, 1)._lock = 0) : a = c, c < 0 && s._ts && (n -= c, (!u && !r._dp || u && u.smoothChildTiming) && (r._start += c / r._ts, r._time -= c, r._tTime -= c), r.shiftChildren(-c, !1, -1 / 0), a = 0), s._end > n && s._ts && (n = s._end), s = g;
      VA(r, r === ie && r._time > n ? r._time : n, 1, 1), r._dirty = 0;
    }
    return r._tDur;
  }, e.updateRoot = function(i) {
    if (ie._ts && (Wr(ie, bt(i, ie)), Vr = Me.frame), Me.frame >= Hn) {
      Hn += ke.autoSleep || 120;
      var n = ie._first;
      if ((!n || !n._ts) && ke.autoSleep && Me._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Me.sleep();
      }
    }
  }, e;
}(Qt);
Pe(me.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Zg = function(e, A, t, i, n, r, s) {
  var a = new De(this._pt, e, A, 0, 1, ms, null, n), g = 0, c = 0, u, f, l, I, h, B, C, E;
  for (a.b = t, a.e = i, t += "", i += "", (C = ~i.indexOf("random(")) && (i = dt(i)), r && (E = [t, i], r(E, e, A), t = E[0], i = E[1]), f = t.match(ci) || []; u = ci.exec(i); )
    I = u[0], h = i.substring(g, u.index), l ? l = (l + 1) % 5 : h.substr(-5) === "rgba(" && (l = 1), I !== f[c++] && (B = parseFloat(f[c - 1]) || 0, a._pt = {
      _next: a._pt,
      p: h || c === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: B,
      c: I.charAt(1) === "=" ? HA(B, I) - B : parseFloat(I) - B,
      m: l && l < 4 ? Math.round : 0
    }, g = ci.lastIndex);
  return a.c = g < i.length ? i.substring(g, i.length) : "", a.fp = s, (Hr.test(i) || C) && (a.e = 0), this._pt = a, a;
}, tn = function(e, A, t, i, n, r, s, a, g, c) {
  re(i) && (i = i(n || 0, e, r));
  var u = e[A], f = t !== "get" ? t : re(u) ? g ? e[A.indexOf("set") || !re(e["get" + A.substr(3)]) ? A : "get" + A.substr(3)](g) : e[A]() : u, l = re(u) ? g ? ic : ps : rn, I;
  if (le(i) && (~i.indexOf("random(") && (i = dt(i)), i.charAt(1) === "=" && (I = HA(f, i) + (de(f) || 0), (I || I === 0) && (i = I))), !c || f !== i || Ni)
    return !isNaN(f * i) && i !== "" ? (I = new De(this._pt, e, A, +f || 0, i - (f || 0), typeof u == "boolean" ? rc : _s, 0, l), g && (I.fp = g), s && I.modifier(s, this, e), this._pt = I) : (!u && !(A in e) && Zi(A, i), Zg.call(this, e, A, f, i, l, a || ke.stringFilter, g));
}, $g = function(e, A, t, i, n) {
  if (re(e) && (e = It(e, n, A, t, i)), !$e(e) || e.style && e.nodeType || Qe(e) || Or(e))
    return le(e) ? It(e, n, A, t, i) : e;
  var r = {}, s;
  for (s in e)
    r[s] = It(e[s], n, A, t, i);
  return r;
}, ds = function(e, A, t, i, n, r) {
  var s, a, g, c;
  if (xe[e] && (s = new xe[e]()).init(n, s.rawVars ? A[e] : $g(A[e], i, n, r, t), t, i, r) !== !1 && (t._pt = a = new De(t._pt, n, e, 0, 1, s.render, s, 0, s.priority), t !== OA))
    for (g = t._ptLookup[t._targets.indexOf(n)], c = s._props.length; c--; )
      g[s._props[c]] = a;
  return s;
}, cA, Ni, nn = function o(e, A, t) {
  var i = e.vars, n = i.ease, r = i.startAt, s = i.immediateRender, a = i.lazy, g = i.onUpdate, c = i.runBackwards, u = i.yoyoEase, f = i.keyframes, l = i.autoRevert, I = e._dur, h = e._startAt, B = e._targets, C = e.parent, E = C && C.data === "nested" ? C.vars.targets : B, p = e._overwrite === "auto" && !Xi, _ = e.timeline, m, D, T, S, y, v, b, H, U, j, V, q, N;
  if (_ && (!f || !n) && (n = "none"), e._ease = RA(n, YA.ease), e._yEase = u ? ls(RA(u === !0 ? n : u, YA.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !_ && !!i.runBackwards, !_ || f && !i.stagger) {
    if (H = B[0] ? TA(B[0]).harness : 0, q = H && i[H.prop], m = vt(i, $i), h && (h._zTime < 0 && h.progress(1), A < 0 && c && s && !l ? h.render(-1, !0) : h.revert(c && I ? St : Tg), h._lazy = 0), r) {
      if (BA(e._startAt = ge.set(B, Pe({
        data: "isStart",
        overwrite: !1,
        parent: C,
        immediateRender: !0,
        lazy: !h && we(a),
        startAt: null,
        delay: 0,
        onUpdate: g && function() {
          return Le(e, "onUpdate");
        },
        stagger: 0
      }, r))), e._startAt._dp = 0, e._startAt._sat = e, A < 0 && (Ee || !s && !l) && e._startAt.revert(St), s && I && A <= 0 && t <= 0) {
        A && (e._zTime = A);
        return;
      }
    } else if (c && I && !h) {
      if (A && (s = !1), T = Pe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: s && !h && we(a),
        immediateRender: s,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: C
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, m), q && (T[H.prop] = q), BA(e._startAt = ge.set(B, T)), e._startAt._dp = 0, e._startAt._sat = e, A < 0 && (Ee ? e._startAt.revert(St) : e._startAt.render(-1, !0)), e._zTime = A, !s)
        o(e._startAt, z, z);
      else if (!A)
        return;
    }
    for (e._pt = e._ptCache = 0, a = I && we(a) || a && !I, D = 0; D < B.length; D++) {
      if (y = B[D], b = y._gsap || An(B)[D]._gsap, e._ptLookup[D] = j = {}, Mi[b.id] && hA.length && Gt(), V = E === B ? D : E.indexOf(y), H && (U = new H()).init(y, q || m, e, V, E) !== !1 && (e._pt = S = new De(e._pt, y, U.name, 0, 1, U.render, U, 0, U.priority), U._props.forEach(function(X) {
        j[X] = S;
      }), U.priority && (v = 1)), !H || q)
        for (T in m)
          xe[T] && (U = ds(T, m, e, V, y, E)) ? U.priority && (v = 1) : j[T] = S = tn.call(e, y, T, "get", m[T], V, E, 0, i.stringFilter);
      e._op && e._op[D] && e.kill(y, e._op[D]), p && e._pt && (cA = e, ie.killTweensOf(y, j, e.globalTime(A)), N = !e.parent, cA = 0), e._pt && a && (Mi[b.id] = 1);
    }
    v && ws(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = g, e._initted = (!e._op || e._pt) && !N, f && A <= 0 && _.render(Ue, !0, !0);
}, ec = function(e, A, t, i, n, r, s, a) {
  var g = (e._pt && e._ptCache || (e._ptCache = {}))[A], c, u, f, l;
  if (!g)
    for (g = e._ptCache[A] = [], f = e._ptLookup, l = e._targets.length; l--; ) {
      if (c = f[l][A], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== A && c.fp !== A; )
          c = c._next;
      if (!c)
        return Ni = 1, e.vars[A] = "+=0", nn(e, s), Ni = 0, a ? Bt(A + " not eligible for reset") : 1;
      g.push(c);
    }
  for (l = g.length; l--; )
    u = g[l], c = u._pt || u, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + r * c.c, c.c = t - c.s, u.e && (u.e = oe(t) + de(u.e)), u.b && (u.b = c.s + de(u.b));
}, Ac = function(e, A) {
  var t = e[0] ? TA(e[0]).harness : 0, i = t && t.aliases, n, r, s, a;
  if (!i)
    return A;
  n = FA({}, A);
  for (r in i)
    if (r in n)
      for (a = i[r].split(","), s = a.length; s--; )
        n[a[s]] = n[r];
  return n;
}, tc = function(e, A, t, i) {
  var n = A.ease || i || "power1.inOut", r, s;
  if (Qe(A))
    s = t[e] || (t[e] = []), A.forEach(function(a, g) {
      return s.push({
        t: g / (A.length - 1) * 100,
        v: a,
        e: n
      });
    });
  else
    for (r in A)
      s = t[r] || (t[r] = []), r === "ease" || s.push({
        t: parseFloat(e),
        v: A[r],
        e: n
      });
}, It = function(e, A, t, i, n) {
  return re(e) ? e.call(A, t, i, n) : le(e) && ~e.indexOf("random(") ? dt(e) : e;
}, Es = en + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Qs = {};
ye(Es + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return Qs[o] = 1;
});
var ge = /* @__PURE__ */ function(o) {
  Nr(e, o);
  function e(t, i, n, r) {
    var s;
    typeof i == "number" && (n.duration = i, i = n, n = null), s = o.call(this, r ? i : ht(i)) || this;
    var a = s.vars, g = a.duration, c = a.delay, u = a.immediateRender, f = a.stagger, l = a.overwrite, I = a.keyframes, h = a.defaults, B = a.scrollTrigger, C = a.yoyoEase, E = i.parent || ie, p = (Qe(t) || Or(t) ? sA(t[0]) : "length" in i) ? [t] : Oe(t), _, m, D, T, S, y, v, b;
    if (s._targets = p.length ? An(p) : Bt("GSAP target " + t + " not found. https://gsap.com", !ke.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = l, I || f || Dt(g) || Dt(c)) {
      if (i = s.vars, _ = s.timeline = new me({
        data: "nested",
        defaults: h || {},
        targets: E && E.data === "nested" ? E.vars.targets : p
      }), _.kill(), _.parent = _._dp = iA(s), _._start = 0, f || Dt(g) || Dt(c)) {
        if (T = p.length, v = f && ns(f), $e(f))
          for (S in f)
            ~Es.indexOf(S) && (b || (b = {}), b[S] = f[S]);
        for (m = 0; m < T; m++)
          D = vt(i, Qs), D.stagger = 0, C && (D.yoyoEase = C), b && FA(D, b), y = p[m], D.duration = +It(g, iA(s), m, y, p), D.delay = (+It(c, iA(s), m, y, p) || 0) - s._delay, !f && T === 1 && D.delay && (s._delay = c = D.delay, s._start += c, D.delay = 0), _.to(y, D, v ? v(m, y, p) : 0), _._ease = Y.none;
        _.duration() ? g = c = 0 : s.timeline = 0;
      } else if (I) {
        ht(Pe(_.vars.defaults, {
          ease: "none"
        })), _._ease = RA(I.ease || i.ease || "none");
        var H = 0, U, j, V;
        if (Qe(I))
          I.forEach(function(q) {
            return _.to(p, q, ">");
          }), _.duration();
        else {
          D = {};
          for (S in I)
            S === "ease" || S === "easeEach" || tc(S, I[S], D, I.easeEach);
          for (S in D)
            for (U = D[S].sort(function(q, N) {
              return q.t - N.t;
            }), H = 0, m = 0; m < U.length; m++)
              j = U[m], V = {
                ease: j.e,
                duration: (j.t - (m ? U[m - 1].t : 0)) / 100 * g
              }, V[S] = j.v, _.to(p, V, H), H += V.duration;
          _.duration() < g && _.to({}, {
            duration: g - _.duration()
          });
        }
      }
      g || s.duration(g = _.duration());
    } else
      s.timeline = 0;
    return l === !0 && !Xi && (cA = iA(s), ie.killTweensOf(p), cA = 0), We(E, iA(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (u || !g && !I && s._start === he(E._time) && we(u) && Lg(iA(s)) && E.data !== "nested") && (s._tTime = -z, s.render(Math.max(0, -c) || 0)), B && es(iA(s), B), s;
  }
  var A = e.prototype;
  return A.render = function(i, n, r) {
    var s = this._time, a = this._tDur, g = this._dur, c = i < 0, u = i > a - z && !c ? a : i < z ? 0 : i, f, l, I, h, B, C, E, p, _;
    if (!g)
      Gg(this, i, n, r);
    else if (u !== this._tTime || !i || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (f = u, p = this.timeline, this._repeat) {
        if (h = g + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(h * 100 + i, n, r);
        if (f = he(u % h), u === a ? (I = this._repeat, f = g) : (I = ~~(u / h), I && I === he(u / h) && (f = g, I--), f > g && (f = g)), C = this._yoyo && I & 1, C && (_ = this._yEase, f = g - f), B = KA(this._tTime, h), f === s && !r && this._initted && I === B)
          return this._tTime = u, this;
        I !== B && (p && this._yEase && Is(p, C), this.vars.repeatRefresh && !C && !this._lock && this._time !== h && this._initted && (this._lock = r = 1, this.render(he(h * I), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (As(this, c ? i : f, r, n, u))
          return this._tTime = 0, this;
        if (s !== this._time && !(r && this.vars.repeatRefresh && I !== B))
          return this;
        if (g !== this._dur)
          return this.render(i, n, r);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = E = (_ || this._ease)(f / g), this._from && (this.ratio = E = 1 - E), f && !s && !n && !I && (Le(this, "onStart"), this._tTime !== u))
        return this;
      for (l = this._pt; l; )
        l.r(E, l.d), l = l._next;
      p && p.render(i < 0 ? i : p._dur * p._ease(f / this._dur), n, r) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && Li(this, i, n, r), Le(this, "onUpdate")), this._repeat && I !== B && this.vars.onRepeat && !n && this.parent && Le(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Li(this, i, !0, !0), (i || !g) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && BA(this, 1), !n && !(c && !s) && (u || s || C) && (Le(this, u === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, A.targets = function() {
    return this._targets;
  }, A.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, A.resetTo = function(i, n, r, s, a) {
    Et || Me.wake(), this._ts || this.play();
    var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || nn(this, g), c = this._ease(g / this._dur), ec(this, i, n, r, s, c, g, a) ? this.resetTo(i, n, r, s, 1) : (qt(this, 0), this.parent || Zr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, A.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ot(this) : this;
    if (this.timeline) {
      var r = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, cA && cA.vars.overwrite !== !0)._first || ot(this), this.parent && r !== this.timeline.totalDuration() && VA(this, this._dur * this.timeline._tDur / r, 0, 1), this;
    }
    var s = this._targets, a = i ? Oe(i) : s, g = this._ptLookup, c = this._pt, u, f, l, I, h, B, C;
    if ((!n || n === "all") && Fg(s, a))
      return n === "all" && (this._pt = 0), ot(this);
    for (u = this._op = this._op || [], n !== "all" && (le(n) && (h = {}, ye(n, function(E) {
      return h[E] = 1;
    }), n = h), n = Ac(s, n)), C = s.length; C--; )
      if (~a.indexOf(s[C])) {
        f = g[C], n === "all" ? (u[C] = n, I = f, l = {}) : (l = u[C] = u[C] || {}, I = n);
        for (h in I)
          B = f && f[h], B && ((!("kill" in B.d) || B.d.kill(h) === !0) && Pt(this, B, "_pt"), delete f[h]), l !== "all" && (l[h] = 1);
      }
    return this._initted && !this._pt && c && ot(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return lt(1, arguments);
  }, e.delayedCall = function(i, n, r, s) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: r,
      onReverseCompleteParams: r,
      callbackScope: s
    });
  }, e.fromTo = function(i, n, r) {
    return lt(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, r) {
    return ie.killTweensOf(i, n, r);
  }, e;
}(Qt);
Pe(ge.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ye("staggerTo,staggerFrom,staggerFromTo", function(o) {
  ge[o] = function() {
    var e = new me(), A = Gi.call(arguments, 0);
    return A.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, A);
  };
});
var rn = function(e, A, t) {
  return e[A] = t;
}, ps = function(e, A, t) {
  return e[A](t);
}, ic = function(e, A, t, i) {
  return e[A](i.fp, t);
}, nc = function(e, A, t) {
  return e.setAttribute(A, t);
}, sn = function(e, A) {
  return re(e[A]) ? ps : Wi(e[A]) && e.setAttribute ? nc : rn;
}, _s = function(e, A) {
  return A.set(A.t, A.p, Math.round((A.s + A.c * e) * 1e6) / 1e6, A);
}, rc = function(e, A) {
  return A.set(A.t, A.p, !!(A.s + A.c * e), A);
}, ms = function(e, A) {
  var t = A._pt, i = "";
  if (!e && A.b)
    i = A.b;
  else if (e === 1 && A.e)
    i = A.e;
  else {
    for (; t; )
      i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
    i += A.c;
  }
  A.set(A.t, A.p, i, A);
}, on = function(e, A) {
  for (var t = A._pt; t; )
    t.r(e, t.d), t = t._next;
}, sc = function(e, A, t, i) {
  for (var n = this._pt, r; n; )
    r = n._next, n.p === i && n.modifier(e, A, t), n = r;
}, oc = function(e) {
  for (var A = this._pt, t, i; A; )
    i = A._next, A.p === e && !A.op || A.op === e ? Pt(this, A, "_pt") : A.dep || (t = 1), A = i;
  return !t;
}, ac = function(e, A, t, i) {
  i.mSet(e, A, i.m.call(i.tween, t, i.mt), i);
}, ws = function(e) {
  for (var A = e._pt, t, i, n, r; A; ) {
    for (t = A._next, i = n; i && i.pr > A.pr; )
      i = i._next;
    (A._prev = i ? i._prev : r) ? A._prev._next = A : n = A, (A._next = i) ? i._prev = A : r = A, A = t;
  }
  e._pt = n;
}, De = /* @__PURE__ */ function() {
  function o(A, t, i, n, r, s, a, g, c) {
    this.t = t, this.s = n, this.c = r, this.p = i, this.r = s || _s, this.d = a || this, this.set = g || rn, this.pr = c || 0, this._next = A, A && (A._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(t, i, n) {
    this.mSet = this.mSet || this.set, this.set = ac, this.m = t, this.mt = n, this.tween = i;
  }, o;
}();
ye(en + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return $i[o] = 1;
});
Ge.TweenMax = Ge.TweenLite = ge;
Ge.TimelineLite = Ge.TimelineMax = me;
ie = new me({
  sortChildren: !1,
  defaults: YA,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ke.stringFilter = hs;
var xA = [], xt = {}, gc = [], Xn = 0, cc = 0, Ii = function(e) {
  return (xt[e] || gc).map(function(A) {
    return A();
  });
}, Ui = function() {
  var e = Date.now(), A = [];
  e - Xn > 2 && (Ii("matchMediaInit"), xA.forEach(function(t) {
    var i = t.queries, n = t.conditions, r, s, a, g;
    for (s in i)
      r = Ve.matchMedia(i[s]).matches, r && (a = 1), r !== n[s] && (n[s] = r, g = 1);
    g && (t.revert(), a && A.push(t));
  }), Ii("matchMediaRevert"), A.forEach(function(t) {
    return t.onMatch(t, function(i) {
      return t.add(null, i);
    });
  }), Xn = e, Ii("matchMedia"));
}, ys = /* @__PURE__ */ function() {
  function o(A, t) {
    this.selector = t && vi(t), this.data = [], this._r = [], this.isReverted = !1, this.id = cc++, A && this.add(A);
  }
  var e = o.prototype;
  return e.add = function(t, i, n) {
    re(t) && (n = i, i = t, t = re);
    var r = this, s = function() {
      var g = Ae, c = r.selector, u;
      return g && g !== r && g.data.push(r), n && (r.selector = vi(n)), Ae = r, u = i.apply(r, arguments), re(u) && r._r.push(u), Ae = g, r.selector = c, r.isReverted = !1, u;
    };
    return r.last = s, t === re ? s(r, function(a) {
      return r.add(null, a);
    }) : t ? r[t] = s : s;
  }, e.ignore = function(t) {
    var i = Ae;
    Ae = null, t(this), Ae = i;
  }, e.getTweens = function() {
    var t = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? t.push.apply(t, i.getTweens()) : i instanceof ge && !(i.parent && i.parent.data === "nested") && t.push(i);
    }), t;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(t, i) {
    var n = this;
    if (t ? function() {
      for (var s = n.getTweens(), a = n.data.length, g; a--; )
        g = n.data[a], g.data === "isFlip" && (g.revert(), g.getChildren(!0, !0, !1).forEach(function(c) {
          return s.splice(s.indexOf(c), 1);
        }));
      for (s.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, u) {
        return u.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(t);
      }), a = n.data.length; a--; )
        g = n.data[a], g instanceof me ? g.data !== "nested" && (g.scrollTrigger && g.scrollTrigger.revert(), g.kill()) : !(g instanceof ge) && g.revert && g.revert(t);
      n._r.forEach(function(c) {
        return c(t, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(s) {
      return s.kill && s.kill();
    }), this.clear(), i)
      for (var r = xA.length; r--; )
        xA[r].id === this.id && xA.splice(r, 1);
  }, e.revert = function(t) {
    this.kill(t || {});
  }, o;
}(), uc = /* @__PURE__ */ function() {
  function o(A) {
    this.contexts = [], this.scope = A, Ae && Ae.data.push(this);
  }
  var e = o.prototype;
  return e.add = function(t, i, n) {
    $e(t) || (t = {
      matches: t
    });
    var r = new ys(0, n || this.scope), s = r.conditions = {}, a, g, c;
    Ae && !r.selector && (r.selector = Ae.selector), this.contexts.push(r), i = r.add("onMatch", i), r.queries = t;
    for (g in t)
      g === "all" ? c = 1 : (a = Ve.matchMedia(t[g]), a && (xA.indexOf(r) < 0 && xA.push(r), (s[g] = a.matches) && (c = 1), a.addListener ? a.addListener(Ui) : a.addEventListener("change", Ui)));
    return c && i(r, function(u) {
      return r.add(null, u);
    }), this;
  }, e.revert = function(t) {
    this.kill(t || {});
  }, e.kill = function(t) {
    this.contexts.forEach(function(i) {
      return i.kill(t, !0);
    });
  }, o;
}(), Nt = {
  registerPlugin: function() {
    for (var e = arguments.length, A = new Array(e), t = 0; t < e; t++)
      A[t] = arguments[t];
    A.forEach(function(i) {
      return cs(i);
    });
  },
  timeline: function(e) {
    return new me(e);
  },
  getTweensOf: function(e, A) {
    return ie.getTweensOf(e, A);
  },
  getProperty: function(e, A, t, i) {
    le(e) && (e = Oe(e)[0]);
    var n = TA(e || {}).get, r = t ? zr : jr;
    return t === "native" && (t = ""), e && (A ? r((xe[A] && xe[A].get || n)(e, A, t, i)) : function(s, a, g) {
      return r((xe[s] && xe[s].get || n)(e, s, a, g));
    });
  },
  quickSetter: function(e, A, t) {
    if (e = Oe(e), e.length > 1) {
      var i = e.map(function(c) {
        return Se.quickSetter(c, A, t);
      }), n = i.length;
      return function(c) {
        for (var u = n; u--; )
          i[u](c);
      };
    }
    e = e[0] || {};
    var r = xe[A], s = TA(e), a = s.harness && (s.harness.aliases || {})[A] || A, g = r ? function(c) {
      var u = new r();
      OA._pt = 0, u.init(e, t ? c + t : c, OA, 0, [e]), u.render(1, u), OA._pt && on(1, OA);
    } : s.set(e, a);
    return r ? g : function(c) {
      return g(e, a, t ? c + t : c, s, 1);
    };
  },
  quickTo: function(e, A, t) {
    var i, n = Se.to(e, FA((i = {}, i[A] = "+=0.1", i.paused = !0, i), t || {})), r = function(a, g, c) {
      return n.resetTo(A, a, g, c);
    };
    return r.tween = n, r;
  },
  isTweening: function(e) {
    return ie.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = RA(e.ease, YA.ease)), qn(YA, e || {});
  },
  config: function(e) {
    return qn(ke, e || {});
  },
  registerEffect: function(e) {
    var A = e.name, t = e.effect, i = e.plugins, n = e.defaults, r = e.extendTimeline;
    (i || "").split(",").forEach(function(s) {
      return s && !xe[s] && !Ge[s] && Bt(A + " effect requires " + s + " plugin.");
    }), ui[A] = function(s, a, g) {
      return t(Oe(s), Pe(a || {}, n), g);
    }, r && (me.prototype[A] = function(s, a, g) {
      return this.add(ui[A](s, $e(a) ? a : (g = a) && {}, this), g);
    });
  },
  registerEase: function(e, A) {
    Y[e] = RA(A);
  },
  parseEase: function(e, A) {
    return arguments.length ? RA(e, A) : Y;
  },
  getById: function(e) {
    return ie.getById(e);
  },
  exportRoot: function(e, A) {
    e === void 0 && (e = {});
    var t = new me(e), i, n;
    for (t.smoothChildTiming = we(e.smoothChildTiming), ie.remove(t), t._dp = 0, t._time = t._tTime = ie._time, i = ie._first; i; )
      n = i._next, (A || !(!i._dur && i instanceof ge && i.vars.onComplete === i._targets[0])) && We(t, i, i._start - i._delay), i = n;
    return We(ie, t, 0), t;
  },
  context: function(e, A) {
    return e ? new ys(e, A) : Ae;
  },
  matchMedia: function(e) {
    return new uc(e);
  },
  matchMediaRefresh: function() {
    return xA.forEach(function(e) {
      var A = e.conditions, t, i;
      for (i in A)
        A[i] && (A[i] = !1, t = 1);
      t && e.revert();
    }) || Ui();
  },
  addEventListener: function(e, A) {
    var t = xt[e] || (xt[e] = []);
    ~t.indexOf(A) || t.push(A);
  },
  removeEventListener: function(e, A) {
    var t = xt[e], i = t && t.indexOf(A);
    i >= 0 && t.splice(i, 1);
  },
  utils: {
    wrap: qg,
    wrapYoyo: Jg,
    distribute: ns,
    random: ss,
    snap: rs,
    normalize: Hg,
    getUnit: de,
    clamp: Ng,
    splitColor: us,
    toArray: Oe,
    selector: vi,
    mapRange: as,
    pipe: Og,
    unitize: Pg,
    interpolate: Yg,
    shuffle: is
  },
  install: Yr,
  effects: ui,
  ticker: Me,
  updateRoot: me.updateRoot,
  plugins: xe,
  globalTimeline: ie,
  core: {
    PropTween: De,
    globals: Kr,
    Tween: ge,
    Timeline: me,
    Animation: Qt,
    getCache: TA,
    _removeLinkedListItem: Pt,
    reverting: function() {
      return Ee;
    },
    context: function(e) {
      return e && Ae && (Ae.data.push(e), e._ctx = Ae), Ae;
    },
    suppressOverwrites: function(e) {
      return Xi = e;
    }
  }
};
ye("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return Nt[o] = ge[o];
});
Me.add(me.updateRoot);
OA = Nt.to({}, {
  duration: 0
});
var fc = function(e, A) {
  for (var t = e._pt; t && t.p !== A && t.op !== A && t.fp !== A; )
    t = t._next;
  return t;
}, hc = function(e, A) {
  var t = e._targets, i, n, r;
  for (i in A)
    for (n = t.length; n--; )
      r = e._ptLookup[n][i], r && (r = r.d) && (r._pt && (r = fc(r, i)), r && r.modifier && r.modifier(A[i], e, t[n], i));
}, Bi = function(e, A) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, r) {
      r._onInit = function(s) {
        var a, g;
        if (le(n) && (a = {}, ye(n, function(c) {
          return a[c] = 1;
        }), n = a), A) {
          a = {};
          for (g in n)
            a[g] = A(n[g]);
          n = a;
        }
        hc(s, n);
      };
    }
  };
}, Se = Nt.registerPlugin({
  name: "attr",
  init: function(e, A, t, i, n) {
    var r, s, a;
    this.tween = t;
    for (r in A)
      a = e.getAttribute(r) || "", s = this.add(e, "setAttribute", (a || 0) + "", A[r], i, n, 0, 0, r), s.op = r, s.b = a, this._props.push(r);
  },
  render: function(e, A) {
    for (var t = A._pt; t; )
      Ee ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next;
  }
}, {
  name: "endArray",
  init: function(e, A) {
    for (var t = A.length; t--; )
      this.add(e, t, e[t] || 0, A[t], 0, 0, 0, 0, 0, 1);
  }
}, Bi("roundProps", bi), Bi("modifiers"), Bi("snap", rs)) || Nt;
ge.version = me.version = Se.version = "3.12.5";
Jr = 1;
ji() && XA();
Y.Power0;
Y.Power1;
Y.Power2;
Y.Power3;
Y.Power4;
Y.Linear;
Y.Quad;
Y.Cubic;
Y.Quart;
Y.Quint;
Y.Strong;
Y.Elastic;
Y.Back;
Y.SteppedEase;
Y.Bounce;
Y.Sine;
Y.Expo;
Y.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Wn, uA, qA, an, yA, jn, gn, lc = function() {
  return typeof window < "u";
}, oA = {}, mA = 180 / Math.PI, JA = Math.PI / 180, GA = Math.atan2, zn = 1e8, cn = /([A-Z])/g, Ic = /(left|right|width|margin|padding|x)/i, Bc = /[\s,\(]\S/, ze = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Oi = function(e, A) {
  return A.set(A.t, A.p, Math.round((A.s + A.c * e) * 1e4) / 1e4 + A.u, A);
}, Cc = function(e, A) {
  return A.set(A.t, A.p, e === 1 ? A.e : Math.round((A.s + A.c * e) * 1e4) / 1e4 + A.u, A);
}, dc = function(e, A) {
  return A.set(A.t, A.p, e ? Math.round((A.s + A.c * e) * 1e4) / 1e4 + A.u : A.b, A);
}, Ec = function(e, A) {
  var t = A.s + A.c * e;
  A.set(A.t, A.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + A.u, A);
}, Ds = function(e, A) {
  return A.set(A.t, A.p, e ? A.e : A.b, A);
}, Ts = function(e, A) {
  return A.set(A.t, A.p, e !== 1 ? A.b : A.e, A);
}, Qc = function(e, A, t) {
  return e.style[A] = t;
}, pc = function(e, A, t) {
  return e.style.setProperty(A, t);
}, _c = function(e, A, t) {
  return e._gsap[A] = t;
}, mc = function(e, A, t) {
  return e._gsap.scaleX = e._gsap.scaleY = t;
}, wc = function(e, A, t, i, n) {
  var r = e._gsap;
  r.scaleX = r.scaleY = t, r.renderTransform(n, r);
}, yc = function(e, A, t, i, n) {
  var r = e._gsap;
  r[A] = t, r.renderTransform(n, r);
}, ne = "transform", Te = ne + "Origin", Dc = function o(e, A) {
  var t = this, i = this.target, n = i.style, r = i._gsap;
  if (e in oA && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ze[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return t.tfm[s] = nA(i, s);
      }) : this.tfm[e] = r.x ? r[e] : nA(i, e), e === Te && (this.tfm.zOrigin = r.zOrigin);
    else
      return ze.transform.split(",").forEach(function(s) {
        return o.call(t, s, A);
      });
    if (this.props.indexOf(ne) >= 0)
      return;
    r.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Te, A, "")), e = ne;
  }
  (n || A) && this.props.push(e, A, n[e]);
}, Ss = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Tc = function() {
  var e = this.props, A = this.target, t = A.style, i = A._gsap, n, r;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? A[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(cn, "-$1").toLowerCase());
  if (this.tfm) {
    for (r in this.tfm)
      i[r] = this.tfm[r];
    i.svg && (i.renderTransform(), A.setAttribute("data-svg-origin", this.svgo || "")), n = gn(), (!n || !n.isStart) && !t[ne] && (Ss(t), i.zOrigin && t[Te] && (t[Te] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Rs = function(e, A) {
  var t = {
    target: e,
    props: [],
    revert: Tc,
    save: Dc
  };
  return e._gsap || Se.core.getCache(e), A && A.split(",").forEach(function(i) {
    return t.save(i);
  }), t;
}, xs, Pi = function(e, A) {
  var t = uA.createElementNS ? uA.createElementNS((A || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : uA.createElement(e);
  return t && t.style ? t : uA.createElement(e);
}, Ze = function o(e, A, t) {
  var i = getComputedStyle(e);
  return i[A] || i.getPropertyValue(A.replace(cn, "-$1").toLowerCase()) || i.getPropertyValue(A) || !t && o(e, WA(A) || A, 1) || "";
}, Zn = "O,Moz,ms,Ms,Webkit".split(","), WA = function(e, A, t) {
  var i = A || yA, n = i.style, r = 5;
  if (e in n && !t)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(Zn[r] + e in n); )
    ;
  return r < 0 ? null : (r === 3 ? "ms" : r >= 0 ? Zn[r] : "") + e;
}, Hi = function() {
  lc() && window.document && (Wn = window, uA = Wn.document, qA = uA.documentElement, yA = Pi("div") || {
    style: {}
  }, Pi("div"), ne = WA(ne), Te = ne + "Origin", yA.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xs = !!WA("perspective"), gn = Se.core.reverting, an = 1);
}, Ci = function o(e) {
  var A = Pi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), t = this.parentNode, i = this.nextSibling, n = this.style.cssText, r;
  if (qA.appendChild(A), A.appendChild(this), this.style.display = "block", e)
    try {
      r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o;
    } catch {
    }
  else this._gsapBBox && (r = this._gsapBBox());
  return t && (i ? t.insertBefore(this, i) : t.appendChild(this)), qA.removeChild(A), this.style.cssText = n, r;
}, $n = function(e, A) {
  for (var t = A.length; t--; )
    if (e.hasAttribute(A[t]))
      return e.getAttribute(A[t]);
}, Fs = function(e) {
  var A;
  try {
    A = e.getBBox();
  } catch {
    A = Ci.call(e, !0);
  }
  return A && (A.width || A.height) || e.getBBox === Ci || (A = Ci.call(e, !0)), A && !A.width && !A.x && !A.y ? {
    x: +$n(e, ["x", "cx", "x1"]) || 0,
    y: +$n(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : A;
}, Ms = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fs(e));
}, MA = function(e, A) {
  if (A) {
    var t = e.style, i;
    A in oA && A !== Te && (A = ne), t.removeProperty ? (i = A.substr(0, 2), (i === "ms" || A.substr(0, 6) === "webkit") && (A = "-" + A), t.removeProperty(i === "--" ? A : A.replace(cn, "-$1").toLowerCase())) : t.removeAttribute(A);
  }
}, fA = function(e, A, t, i, n, r) {
  var s = new De(e._pt, A, t, 0, 1, r ? Ts : Ds);
  return e._pt = s, s.b = i, s.e = n, e._props.push(t), s;
}, er = {
  deg: 1,
  rad: 1,
  turn: 1
}, Sc = {
  grid: 1,
  flex: 1
}, CA = function o(e, A, t, i) {
  var n = parseFloat(t) || 0, r = (t + "").trim().substr((n + "").length) || "px", s = yA.style, a = Ic.test(A), g = e.tagName.toLowerCase() === "svg", c = (g ? "client" : "offset") + (a ? "Width" : "Height"), u = 100, f = i === "px", l = i === "%", I, h, B, C;
  if (i === r || !n || er[i] || er[r])
    return n;
  if (r !== "px" && !f && (n = o(e, A, t, "px")), C = e.getCTM && Ms(e), (l || r === "%") && (oA[A] || ~A.indexOf("adius")))
    return I = C ? e.getBBox()[a ? "width" : "height"] : e[c], oe(l ? n / I * u : n / 100 * I);
  if (s[a ? "width" : "height"] = u + (f ? r : i), h = ~A.indexOf("adius") || i === "em" && e.appendChild && !g ? e : e.parentNode, C && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === uA || !h.appendChild) && (h = uA.body), B = h._gsap, B && l && B.width && a && B.time === Me.time && !B.uncache)
    return oe(n / B.width * u);
  if (l && (A === "height" || A === "width")) {
    var E = e.style[A];
    e.style[A] = u + i, I = e[c], E ? e.style[A] = E : MA(e, A);
  } else
    (l || r === "%") && !Sc[Ze(h, "display")] && (s.position = Ze(e, "position")), h === e && (s.position = "static"), h.appendChild(yA), I = yA[c], h.removeChild(yA), s.position = "absolute";
  return a && l && (B = TA(h), B.time = Me.time, B.width = h[c]), oe(f ? I * n / u : I && n ? u / I * n : 0);
}, nA = function(e, A, t, i) {
  var n;
  return an || Hi(), A in ze && A !== "transform" && (A = ze[A], ~A.indexOf(",") && (A = A.split(",")[0])), oA[A] && A !== "transform" ? (n = _t(e, i), n = A !== "transformOrigin" ? n[A] : n.svg ? n.origin : Ot(Ze(e, Te)) + " " + n.zOrigin + "px") : (n = e.style[A], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Ut[A] && Ut[A](e, A, t) || Ze(e, A) || Xr(e, A) || (A === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? CA(e, A, n, t) + t : n;
}, Rc = function(e, A, t, i) {
  if (!t || t === "none") {
    var n = WA(A, e, 1), r = n && Ze(e, n, 1);
    r && r !== t ? (A = n, t = r) : A === "borderColor" && (t = Ze(e, "borderTopColor"));
  }
  var s = new De(this._pt, e.style, A, 0, 1, ms), a = 0, g = 0, c, u, f, l, I, h, B, C, E, p, _, m;
  if (s.b = t, s.e = i, t += "", i += "", i === "auto" && (h = e.style[A], e.style[A] = i, i = Ze(e, A) || i, h ? e.style[A] = h : MA(e, A)), c = [t, i], hs(c), t = c[0], i = c[1], f = t.match(UA) || [], m = i.match(UA) || [], m.length) {
    for (; u = UA.exec(i); )
      B = u[0], E = i.substring(a, u.index), I ? I = (I + 1) % 5 : (E.substr(-5) === "rgba(" || E.substr(-5) === "hsla(") && (I = 1), B !== (h = f[g++] || "") && (l = parseFloat(h) || 0, _ = h.substr((l + "").length), B.charAt(1) === "=" && (B = HA(l, B) + _), C = parseFloat(B), p = B.substr((C + "").length), a = UA.lastIndex - p.length, p || (p = p || ke.units[A] || _, a === i.length && (i += p, s.e += p)), _ !== p && (l = CA(e, A, h, p) || 0), s._pt = {
        _next: s._pt,
        p: E || g === 1 ? E : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: C - l,
        m: I && I < 4 || A === "zIndex" ? Math.round : 0
      });
    s.c = a < i.length ? i.substring(a, i.length) : "";
  } else
    s.r = A === "display" && i === "none" ? Ts : Ds;
  return Hr.test(i) && (s.e = 0), this._pt = s, s;
}, Ar = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, xc = function(e) {
  var A = e.split(" "), t = A[0], i = A[1] || "50%";
  return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), A[0] = Ar[t] || t, A[1] = Ar[i] || i, A.join(" ");
}, Fc = function(e, A) {
  if (A.tween && A.tween._time === A.tween._dur) {
    var t = A.t, i = t.style, n = A.u, r = t._gsap, s, a, g;
    if (n === "all" || n === !0)
      i.cssText = "", a = 1;
    else
      for (n = n.split(","), g = n.length; --g > -1; )
        s = n[g], oA[s] && (a = 1, s = s === "transformOrigin" ? Te : ne), MA(t, s);
    a && (MA(t, ne), r && (r.svg && t.removeAttribute("transform"), _t(t, 1), r.uncache = 1, Ss(i)));
  }
}, Ut = {
  clearProps: function(e, A, t, i, n) {
    if (n.data !== "isFromStart") {
      var r = e._pt = new De(e._pt, A, t, 0, 0, Fc);
      return r.u = i, r.pr = -10, r.tween = n, e._props.push(t), 1;
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
}, pt = [1, 0, 0, 1, 0, 0], Ls = {}, ks = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, tr = function(e) {
  var A = Ze(e, ne);
  return ks(A) ? pt : A.substr(7).match(Pr).map(oe);
}, un = function(e, A) {
  var t = e._gsap || TA(e), i = e.style, n = tr(e), r, s, a, g;
  return t.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, n = [a.a, a.b, a.c, a.d, a.e, a.f], n.join(",") === "1,0,0,1,0,0" ? pt : n) : (n === pt && !e.offsetParent && e !== qA && !t.svg && (a = i.display, i.display = "block", r = e.parentNode, (!r || !e.offsetParent) && (g = 1, s = e.nextElementSibling, qA.appendChild(e)), n = tr(e), a ? i.display = a : MA(e, "display"), g && (s ? r.insertBefore(e, s) : r ? r.appendChild(e) : qA.removeChild(e))), A && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, qi = function(e, A, t, i, n, r) {
  var s = e._gsap, a = n || un(e, !0), g = s.xOrigin || 0, c = s.yOrigin || 0, u = s.xOffset || 0, f = s.yOffset || 0, l = a[0], I = a[1], h = a[2], B = a[3], C = a[4], E = a[5], p = A.split(" "), _ = parseFloat(p[0]) || 0, m = parseFloat(p[1]) || 0, D, T, S, y;
  t ? a !== pt && (T = l * B - I * h) && (S = _ * (B / T) + m * (-h / T) + (h * E - B * C) / T, y = _ * (-I / T) + m * (l / T) - (l * E - I * C) / T, _ = S, m = y) : (D = Fs(e), _ = D.x + (~p[0].indexOf("%") ? _ / 100 * D.width : _), m = D.y + (~(p[1] || p[0]).indexOf("%") ? m / 100 * D.height : m)), i || i !== !1 && s.smooth ? (C = _ - g, E = m - c, s.xOffset = u + (C * l + E * h) - C, s.yOffset = f + (C * I + E * B) - E) : s.xOffset = s.yOffset = 0, s.xOrigin = _, s.yOrigin = m, s.smooth = !!i, s.origin = A, s.originIsAbsolute = !!t, e.style[Te] = "0px 0px", r && (fA(r, s, "xOrigin", g, _), fA(r, s, "yOrigin", c, m), fA(r, s, "xOffset", u, s.xOffset), fA(r, s, "yOffset", f, s.yOffset)), e.setAttribute("data-svg-origin", _ + " " + m);
}, _t = function(e, A) {
  var t = e._gsap || new Cs(e);
  if ("x" in t && !A && !t.uncache)
    return t;
  var i = e.style, n = t.scaleX < 0, r = "px", s = "deg", a = getComputedStyle(e), g = Ze(e, Te) || "0", c, u, f, l, I, h, B, C, E, p, _, m, D, T, S, y, v, b, H, U, j, V, q, N, X, ee, ae, Ie, Be, k, ce, pe;
  return c = u = f = h = B = C = E = p = _ = 0, l = I = 1, t.svg = !!(e.getCTM && Ms(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[ne] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[ne] !== "none" ? a[ne] : "")), i.scale = i.rotate = i.translate = "none"), T = un(e, t.svg), t.svg && (t.uncache ? (X = e.getBBox(), g = t.xOrigin - X.x + "px " + (t.yOrigin - X.y) + "px", N = "") : N = !A && e.getAttribute("data-svg-origin"), qi(e, N || g, !!N || t.originIsAbsolute, t.smooth !== !1, T)), m = t.xOrigin || 0, D = t.yOrigin || 0, T !== pt && (b = T[0], H = T[1], U = T[2], j = T[3], c = V = T[4], u = q = T[5], T.length === 6 ? (l = Math.sqrt(b * b + H * H), I = Math.sqrt(j * j + U * U), h = b || H ? GA(H, b) * mA : 0, E = U || j ? GA(U, j) * mA + h : 0, E && (I *= Math.abs(Math.cos(E * JA))), t.svg && (c -= m - (m * b + D * U), u -= D - (m * H + D * j))) : (pe = T[6], k = T[7], ae = T[8], Ie = T[9], Be = T[10], ce = T[11], c = T[12], u = T[13], f = T[14], S = GA(pe, Be), B = S * mA, S && (y = Math.cos(-S), v = Math.sin(-S), N = V * y + ae * v, X = q * y + Ie * v, ee = pe * y + Be * v, ae = V * -v + ae * y, Ie = q * -v + Ie * y, Be = pe * -v + Be * y, ce = k * -v + ce * y, V = N, q = X, pe = ee), S = GA(-U, Be), C = S * mA, S && (y = Math.cos(-S), v = Math.sin(-S), N = b * y - ae * v, X = H * y - Ie * v, ee = U * y - Be * v, ce = j * v + ce * y, b = N, H = X, U = ee), S = GA(H, b), h = S * mA, S && (y = Math.cos(S), v = Math.sin(S), N = b * y + H * v, X = V * y + q * v, H = H * y - b * v, q = q * y - V * v, b = N, V = X), B && Math.abs(B) + Math.abs(h) > 359.9 && (B = h = 0, C = 180 - C), l = oe(Math.sqrt(b * b + H * H + U * U)), I = oe(Math.sqrt(q * q + pe * pe)), S = GA(V, q), E = Math.abs(S) > 2e-4 ? S * mA : 0, _ = ce ? 1 / (ce < 0 ? -ce : ce) : 0), t.svg && (N = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !ks(Ze(e, ne)), N && e.setAttribute("transform", N))), Math.abs(E) > 90 && Math.abs(E) < 270 && (n ? (l *= -1, E += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (I *= -1, E += E <= 0 ? 180 : -180)), A = A || t.uncache, t.x = c - ((t.xPercent = c && (!A && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + r, t.y = u - ((t.yPercent = u && (!A && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + r, t.z = f + r, t.scaleX = oe(l), t.scaleY = oe(I), t.rotation = oe(h) + s, t.rotationX = oe(B) + s, t.rotationY = oe(C) + s, t.skewX = E + s, t.skewY = p + s, t.transformPerspective = _ + r, (t.zOrigin = parseFloat(g.split(" ")[2]) || !A && t.zOrigin || 0) && (i[Te] = Ot(g)), t.xOffset = t.yOffset = 0, t.force3D = ke.force3D, t.renderTransform = t.svg ? Lc : xs ? Gs : Mc, t.uncache = 0, t;
}, Ot = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, di = function(e, A, t) {
  var i = de(A);
  return oe(parseFloat(A) + parseFloat(CA(e, "x", t + "px", i))) + i;
}, Mc = function(e, A) {
  A.z = "0px", A.rotationY = A.rotationX = "0deg", A.force3D = 0, Gs(e, A);
}, pA = "0deg", tt = "0px", _A = ") ", Gs = function(e, A) {
  var t = A || this, i = t.xPercent, n = t.yPercent, r = t.x, s = t.y, a = t.z, g = t.rotation, c = t.rotationY, u = t.rotationX, f = t.skewX, l = t.skewY, I = t.scaleX, h = t.scaleY, B = t.transformPerspective, C = t.force3D, E = t.target, p = t.zOrigin, _ = "", m = C === "auto" && e && e !== 1 || C === !0;
  if (p && (u !== pA || c !== pA)) {
    var D = parseFloat(c) * JA, T = Math.sin(D), S = Math.cos(D), y;
    D = parseFloat(u) * JA, y = Math.cos(D), r = di(E, r, T * y * -p), s = di(E, s, -Math.sin(D) * -p), a = di(E, a, S * y * -p + p);
  }
  B !== tt && (_ += "perspective(" + B + _A), (i || n) && (_ += "translate(" + i + "%, " + n + "%) "), (m || r !== tt || s !== tt || a !== tt) && (_ += a !== tt || m ? "translate3d(" + r + ", " + s + ", " + a + ") " : "translate(" + r + ", " + s + _A), g !== pA && (_ += "rotate(" + g + _A), c !== pA && (_ += "rotateY(" + c + _A), u !== pA && (_ += "rotateX(" + u + _A), (f !== pA || l !== pA) && (_ += "skew(" + f + ", " + l + _A), (I !== 1 || h !== 1) && (_ += "scale(" + I + ", " + h + _A), E.style[ne] = _ || "translate(0, 0)";
}, Lc = function(e, A) {
  var t = A || this, i = t.xPercent, n = t.yPercent, r = t.x, s = t.y, a = t.rotation, g = t.skewX, c = t.skewY, u = t.scaleX, f = t.scaleY, l = t.target, I = t.xOrigin, h = t.yOrigin, B = t.xOffset, C = t.yOffset, E = t.forceCSS, p = parseFloat(r), _ = parseFloat(s), m, D, T, S, y;
  a = parseFloat(a), g = parseFloat(g), c = parseFloat(c), c && (c = parseFloat(c), g += c, a += c), a || g ? (a *= JA, g *= JA, m = Math.cos(a) * u, D = Math.sin(a) * u, T = Math.sin(a - g) * -f, S = Math.cos(a - g) * f, g && (c *= JA, y = Math.tan(g - c), y = Math.sqrt(1 + y * y), T *= y, S *= y, c && (y = Math.tan(c), y = Math.sqrt(1 + y * y), m *= y, D *= y)), m = oe(m), D = oe(D), T = oe(T), S = oe(S)) : (m = u, S = f, D = T = 0), (p && !~(r + "").indexOf("px") || _ && !~(s + "").indexOf("px")) && (p = CA(l, "x", r, "px"), _ = CA(l, "y", s, "px")), (I || h || B || C) && (p = oe(p + I - (I * m + h * T) + B), _ = oe(_ + h - (I * D + h * S) + C)), (i || n) && (y = l.getBBox(), p = oe(p + i / 100 * y.width), _ = oe(_ + n / 100 * y.height)), y = "matrix(" + m + "," + D + "," + T + "," + S + "," + p + "," + _ + ")", l.setAttribute("transform", y), E && (l.style[ne] = y);
}, kc = function(e, A, t, i, n) {
  var r = 360, s = le(n), a = parseFloat(n) * (s && ~n.indexOf("rad") ? mA : 1), g = a - i, c = i + g + "deg", u, f;
  return s && (u = n.split("_")[1], u === "short" && (g %= r, g !== g % (r / 2) && (g += g < 0 ? r : -r)), u === "cw" && g < 0 ? g = (g + r * zn) % r - ~~(g / r) * r : u === "ccw" && g > 0 && (g = (g - r * zn) % r - ~~(g / r) * r)), e._pt = f = new De(e._pt, A, t, i, g, Cc), f.e = c, f.u = "deg", e._props.push(t), f;
}, ir = function(e, A) {
  for (var t in A)
    e[t] = A[t];
  return e;
}, Gc = function(e, A, t) {
  var i = ir({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", r = t.style, s, a, g, c, u, f, l, I;
  i.svg ? (g = t.getAttribute("transform"), t.setAttribute("transform", ""), r[ne] = A, s = _t(t, 1), MA(t, ne), t.setAttribute("transform", g)) : (g = getComputedStyle(t)[ne], r[ne] = A, s = _t(t, 1), r[ne] = g);
  for (a in oA)
    g = i[a], c = s[a], g !== c && n.indexOf(a) < 0 && (l = de(g), I = de(c), u = l !== I ? CA(t, a, g, I) : parseFloat(g), f = parseFloat(c), e._pt = new De(e._pt, s, a, u, f - u, Oi), e._pt.u = I || 0, e._props.push(a));
  ir(s, i);
};
ye("padding,margin,Width,Radius", function(o, e) {
  var A = "Top", t = "Right", i = "Bottom", n = "Left", r = (e < 3 ? [A, t, i, n] : [A + n, A + t, i + t, i + n]).map(function(s) {
    return e < 2 ? o + s : "border" + s + o;
  });
  Ut[e > 1 ? "border" + o : o] = function(s, a, g, c, u) {
    var f, l;
    if (arguments.length < 4)
      return f = r.map(function(I) {
        return nA(s, I, g);
      }), l = f.join(" "), l.split(f[0]).length === 5 ? f[0] : l;
    f = (c + "").split(" "), l = {}, r.forEach(function(I, h) {
      return l[I] = f[h] = f[h] || f[(h - 1) / 2 | 0];
    }), s.init(a, l, u);
  };
});
var vs = {
  name: "css",
  register: Hi,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, A, t, i, n) {
    var r = this._props, s = e.style, a = t.vars.startAt, g, c, u, f, l, I, h, B, C, E, p, _, m, D, T, S;
    an || Hi(), this.styles = this.styles || Rs(e), S = this.styles.props, this.tween = t;
    for (h in A)
      if (h !== "autoRound" && (c = A[h], !(xe[h] && ds(h, A, t, i, e, n)))) {
        if (l = typeof c, I = Ut[h], l === "function" && (c = c.call(t, i, e, n), l = typeof c), l === "string" && ~c.indexOf("random(") && (c = dt(c)), I)
          I(this, e, h, c, t) && (T = 1);
        else if (h.substr(0, 2) === "--")
          g = (getComputedStyle(e).getPropertyValue(h) + "").trim(), c += "", lA.lastIndex = 0, lA.test(g) || (B = de(g), C = de(c)), C ? B !== C && (g = CA(e, h, g, C) + C) : B && (c += B), this.add(s, "setProperty", g, c, i, n, 0, 0, h), r.push(h), S.push(h, 0, s[h]);
        else if (l !== "undefined") {
          if (a && h in a ? (g = typeof a[h] == "function" ? a[h].call(t, i, e, n) : a[h], le(g) && ~g.indexOf("random(") && (g = dt(g)), de(g + "") || g === "auto" || (g += ke.units[h] || de(nA(e, h)) || ""), (g + "").charAt(1) === "=" && (g = nA(e, h))) : g = nA(e, h), f = parseFloat(g), E = l === "string" && c.charAt(1) === "=" && c.substr(0, 2), E && (c = c.substr(2)), u = parseFloat(c), h in ze && (h === "autoAlpha" && (f === 1 && nA(e, "visibility") === "hidden" && u && (f = 0), S.push("visibility", 0, s.visibility), fA(this, s, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), h !== "scale" && h !== "transform" && (h = ze[h], ~h.indexOf(",") && (h = h.split(",")[0]))), p = h in oA, p) {
            if (this.styles.save(h), _ || (m = e._gsap, m.renderTransform && !A.parseTransform || _t(e, A.parseTransform), D = A.smoothOrigin !== !1 && m.smooth, _ = this._pt = new De(this._pt, s, ne, 0, 1, m.renderTransform, m, 0, -1), _.dep = 1), h === "scale")
              this._pt = new De(this._pt, m, "scaleY", m.scaleY, (E ? HA(m.scaleY, E + u) : u) - m.scaleY || 0, Oi), this._pt.u = 0, r.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              S.push(Te, 0, s[Te]), c = xc(c), m.svg ? qi(e, c, 0, D, 0, this) : (C = parseFloat(c.split(" ")[2]) || 0, C !== m.zOrigin && fA(this, m, "zOrigin", m.zOrigin, C), fA(this, s, h, Ot(g), Ot(c)));
              continue;
            } else if (h === "svgOrigin") {
              qi(e, c, 1, D, 0, this);
              continue;
            } else if (h in Ls) {
              kc(this, m, h, f, E ? HA(f, E + c) : c);
              continue;
            } else if (h === "smoothOrigin") {
              fA(this, m, "smooth", m.smooth, c);
              continue;
            } else if (h === "force3D") {
              m[h] = c;
              continue;
            } else if (h === "transform") {
              Gc(this, c, e);
              continue;
            }
          } else h in s || (h = WA(h) || h);
          if (p || (u || u === 0) && (f || f === 0) && !Bc.test(c) && h in s)
            B = (g + "").substr((f + "").length), u || (u = 0), C = de(c) || (h in ke.units ? ke.units[h] : B), B !== C && (f = CA(e, h, g, C)), this._pt = new De(this._pt, p ? m : s, h, f, (E ? HA(f, E + u) : u) - f, !p && (C === "px" || h === "zIndex") && A.autoRound !== !1 ? Ec : Oi), this._pt.u = C || 0, B !== C && C !== "%" && (this._pt.b = g, this._pt.r = dc);
          else if (h in s)
            Rc.call(this, e, h, g, E ? E + c : c);
          else if (h in e)
            this.add(e, h, g || e[h], E ? E + c : c, i, n);
          else if (h !== "parseTransform") {
            Zi(h, c);
            continue;
          }
          p || (h in s ? S.push(h, 0, s[h]) : S.push(h, 1, g || e[h])), r.push(h);
        }
      }
    T && ws(this);
  },
  render: function(e, A) {
    if (A.tween._time || !gn())
      for (var t = A._pt; t; )
        t.r(e, t.d), t = t._next;
    else
      A.styles.revert();
  },
  get: nA,
  aliases: ze,
  getSetter: function(e, A, t) {
    var i = ze[A];
    return i && i.indexOf(",") < 0 && (A = i), A in oA && A !== Te && (e._gsap.x || nA(e, "x")) ? t && jn === t ? A === "scale" ? mc : _c : (jn = t || {}) && (A === "scale" ? wc : yc) : e.style && !Wi(e.style[A]) ? Qc : ~A.indexOf("-") ? pc : sn(e, A);
  },
  core: {
    _removeProperty: MA,
    _getMatrix: un
  }
};
Se.utils.checkPrefix = WA;
Se.core.getStyleSaver = Rs;
(function(o, e, A, t) {
  var i = ye(o + "," + e + "," + A, function(n) {
    oA[n] = 1;
  });
  ye(e, function(n) {
    ke.units[n] = "deg", Ls[n] = 1;
  }), ze[i[13]] = o + "," + e, ye(t, function(n) {
    var r = n.split(":");
    ze[r[1]] = i[r[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  ke.units[o] = "px";
});
Se.registerPlugin(vs);
var Ft = Se.registerPlugin(vs) || Se;
Ft.core.Tween;
function vc(o, e) {
  const A = o.folders.find((t) => t._title === e);
  if (!A)
    throw new Error(`Folder with name ${e} not found`);
  return A;
}
function Pc(o, e, A, t = "XYZ") {
  const i = o.toArray(), n = e.toArray(), r = i.map((s, a) => s + (n[a] - s) * A);
  return new Xo(r[0], r[1], r[2], t);
}
async function Hc(o) {
  return new Promise((e) => {
    setTimeout(() => {
      e();
    }, o);
  });
}
function qc(o, e) {
  const A = o.frames.find(
    (a) => a.filename.toLowerCase() === e.toLowerCase()
  );
  if (!A) throw new Error(`Frame with id ${e} not found in atlas config`);
  const { x: t, y: i, h: n } = A.frame, { size: r } = o.meta, s = i / r.h;
  return new Ki(t / r.w, s);
}
function Jc(o) {
  return o.x * o.x + o.y * o.y + o.z * o.z;
}
function Yc(o, e, A, t, i) {
  return (o - e) / (A - e) * (i - t) + t;
}
class Kc {
  constructor(e, A, t, i, n) {
    Ce(this, "deltaTime", 0);
    Ce(this, "clock", new Wo());
    Ce(this, "performanceFolderController");
    this.threeJSBase = e, this.commonDebugOpt = A, this.updatables = t, this.allPassedTime = i, this.gui = n, Ft.ticker.remove(Ft.updateRoot), this.performanceFolderController = this.addDebugGUI();
  }
  get getDeltaTime() {
    return this.deltaTime;
  }
  handleUpdate() {
    this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale, this.allPassedTime.value += this.deltaTime, Si.update(this.deltaTime), Ft.updateRoot(this.allPassedTime.value), this.updatables.forEach((e) => {
      e.update(this.deltaTime, this.threeJSBase.camera);
    });
  }
  addDebugGUI() {
    return vc(this.gui, "Performance").add(this.commonDebugOpt, "timeScale", 0.1, 2).name("Time Scale");
  }
}
class Vc {
  constructor(...e) {
    Ce(this, "args");
    this.args = e;
  }
}
function Xc(o, e) {
  const A = (t) => {
    e(...t.detail);
  };
  return document.addEventListener(o.name, A, { passive: !0 }), {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(o.name, A)
  };
}
function Wc(o) {
  const e = new CustomEvent(o.constructor.name, {
    detail: o.args
  });
  document.dispatchEvent(e);
}
export {
  kA as BASETYPES,
  Kc as BaseUpdateHandler,
  Vc as EventBase,
  Si as TaskManager,
  Oc as buildBaseDIModule,
  vc as findGUIFolder,
  Jc as getLengthVector,
  qc as getSpriteOffset,
  Pc as lerpingRotation,
  Yc as mapRange,
  Wc as publish,
  Hc as sleep,
  Xc as subscribe
};
