var Nc = Object.defineProperty;
var Oc = (p, n, A) => n in p ? Nc(p, n, { enumerable: !0, configurable: !0, writable: !0, value: A }) : p[n] = A;
var tt = (p, n, A) => Oc(p, typeof n != "symbol" ? n + "" : n, A);
import { Loader as Gs, FileLoader as Nn, CompressedCubeTexture as Vc, UnsignedByteType as xt, CompressedArrayTexture as Hc, CompressedTexture as xa, LinearFilter as hr, LinearMipmapLinearFilter as Ns, RGBAFormat as or, RGBA_ASTC_4x4_Format as Sa, RGBA_BPTC_Format as Kc, RGBA_ETC2_EAC_Format as qc, RGBA_PVRTC_4BPPV1_Format as Yc, RGBA_S3TC_DXT5_Format as Jc, RGB_ETC1_Format as jc, RGB_ETC2_Format as Wc, RGB_PVRTC_4BPPV1_Format as Xc, RGBA_S3TC_DXT1_Format as zc, FloatType as wi, HalfFloatType as Gr, DataTexture as Zc, Data3DTexture as $c, SRGBColorSpace as tn, LinearSRGBColorSpace as kt, DisplayP3ColorSpace as eu, LinearDisplayP3ColorSpace as tu, NoColorSpace as Oo, RGFormat as Nr, RedFormat as Or, RGBA_ASTC_6x6_Format as Vo, BufferGeometry as cr, BufferAttribute as In, Color as Dt, ColorManagement as Bs, TrianglesDrawMode as nu, TriangleFanDrawMode as _s, TriangleStripDrawMode as ka, LoaderUtils as Hr, SpotLight as ru, PointLight as iu, DirectionalLight as su, MeshBasicMaterial as ar, MeshPhysicalMaterial as Ht, Vector2 as Vn, Matrix4 as jr, Vector3 as en, Quaternion as Da, InstancedMesh as ou, InstancedBufferAttribute as Ta, Object3D as Wr, TextureLoader as Ra, ImageBitmapLoader as au, InterleavedBuffer as Au, InterleavedBufferAttribute as lu, RepeatWrapping as ys, PointsMaterial as cu, Material as ns, LineBasicMaterial as bi, MeshStandardMaterial as Fa, DoubleSide as Os, PropertyBinding as uu, SkinnedMesh as hu, Mesh as Qi, LineSegments as du, Line as Bi, LineLoop as pu, Points as fu, Group as rs, PerspectiveCamera as La, MathUtils as Pa, OrthographicCamera as Ma, Skeleton as gu, AnimationClip as mu, Bone as vu, InterpolateLinear as Ua, NearestFilter as Cu, NearestMipmapNearestFilter as Iu, LinearMipmapNearestFilter as Eu, NearestMipmapLinearFilter as wu, ClampToEdgeWrapping as bu, MirroredRepeatWrapping as Bu, InterpolateDiscrete as _u, FrontSide as Ga, Texture as Qs, VectorKeyframeTrack as Ho, NumberKeyframeTrack as Ko, QuaternionKeyframeTrack as qo, Box3 as Na, Sphere as Oa, Interpolant as yu, LoadingManager as Qu, WebGLRenderer as Va, Scene as Ha, Euler as xu, UniformsUtils as Su, MeshDepthMaterial as ku, RGBADepthPacking as Du, MeshDistanceMaterial as Tu, ShaderChunk as Ru, InstancedBufferGeometry as Fu, BackSide as Lu, Vector4 as Yo, Matrix3 as Pu, PlaneGeometry as Vs, Float32BufferAttribute as Mu, DynamicDrawUsage as is, Clock as Uu } from "three";
import Gu from "lil-gui";
import ss from "gsap";
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jo = {};
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
var Wo;
function Nu() {
  if (Wo) return jo;
  Wo = 1;
  var p;
  return function(n) {
    (function(A) {
      var u = typeof globalThis == "object" ? globalThis : typeof Jo == "object" ? Jo : typeof self == "object" ? self : typeof this == "object" ? this : a(), i = t(n);
      typeof u.Reflect < "u" && (i = t(u.Reflect, i)), A(i, u), typeof u.Reflect > "u" && (u.Reflect = n);
      function t(h, d) {
        return function(f, m) {
          Object.defineProperty(h, f, { configurable: !0, writable: !0, value: m }), d && d(f, m);
        };
      }
      function o() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function l() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function a() {
        return o() || l();
      }
    })(function(A, u) {
      var i = Object.prototype.hasOwnProperty, t = typeof Symbol == "function", o = t && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = t && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", a = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, d = !a && !h, f = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: a ? function() {
          return je(/* @__PURE__ */ Object.create(null));
        } : h ? function() {
          return je({ __proto__: null });
        } : function() {
          return je({});
        },
        has: d ? function(B, k) {
          return i.call(B, k);
        } : function(B, k) {
          return k in B;
        },
        get: d ? function(B, k) {
          return i.call(B, k) ? B[k] : void 0;
        } : function(B, k) {
          return B[k];
        }
      }, m = Object.getPrototypeOf(Function), v = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : we(), b = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), C = typeof WeakMap == "function" ? WeakMap : Pe(), E = t ? Symbol.for("@reflect-metadata:registry") : void 0, y = Ee(), I = ge(y);
      function Q(B, k, R, U) {
        if (P(R)) {
          if (!X(B))
            throw new TypeError();
          if (!De(k))
            throw new TypeError();
          return Z(B, k);
        } else {
          if (!X(B))
            throw new TypeError();
          if (!K(k))
            throw new TypeError();
          if (!K(U) && !P(U) && !O(U))
            throw new TypeError();
          return O(U) && (U = void 0), R = te(R), Y(B, k, R, U);
        }
      }
      A("decorate", Q);
      function _(B, k) {
        function R(U, le) {
          if (!K(U))
            throw new TypeError();
          if (!P(le) && !he(le))
            throw new TypeError();
          V(B, k, U, le);
        }
        return R;
      }
      A("metadata", _);
      function x(B, k, R, U) {
        if (!K(R))
          throw new TypeError();
        return P(U) || (U = te(U)), V(B, k, R, U);
      }
      A("defineMetadata", x);
      function F(B, k, R) {
        if (!K(k))
          throw new TypeError();
        return P(R) || (R = te(R)), oe(B, k, R);
      }
      A("hasMetadata", F);
      function T(B, k, R) {
        if (!K(k))
          throw new TypeError();
        return P(R) || (R = te(R)), ae(B, k, R);
      }
      A("hasOwnMetadata", T);
      function L(B, k, R) {
        if (!K(k))
          throw new TypeError();
        return P(R) || (R = te(R)), H(B, k, R);
      }
      A("getMetadata", L);
      function W(B, k, R) {
        if (!K(k))
          throw new TypeError();
        return P(R) || (R = te(R)), j(B, k, R);
      }
      A("getOwnMetadata", W);
      function J(B, k) {
        if (!K(B))
          throw new TypeError();
        return P(k) || (k = te(k)), re(B, k);
      }
      A("getMetadataKeys", J);
      function ie(B, k) {
        if (!K(B))
          throw new TypeError();
        return P(k) || (k = te(k)), S(B, k);
      }
      A("getOwnMetadataKeys", ie);
      function M(B, k, R) {
        if (!K(k))
          throw new TypeError();
        if (P(R) || (R = te(R)), !K(k))
          throw new TypeError();
        P(R) || (R = te(R));
        var U = Fe(
          k,
          R,
          /*Create*/
          !1
        );
        return P(U) ? !1 : U.OrdinaryDeleteMetadata(B, k, R);
      }
      A("deleteMetadata", M);
      function Z(B, k) {
        for (var R = B.length - 1; R >= 0; --R) {
          var U = B[R], le = U(k);
          if (!P(le) && !O(le)) {
            if (!De(le))
              throw new TypeError();
            k = le;
          }
        }
        return k;
      }
      function Y(B, k, R, U) {
        for (var le = B.length - 1; le >= 0; --le) {
          var _e = B[le], Re = _e(k, R, U);
          if (!P(Re) && !O(Re)) {
            if (!K(Re))
              throw new TypeError();
            U = Re;
          }
        }
        return U;
      }
      function oe(B, k, R) {
        var U = ae(B, k, R);
        if (U)
          return !0;
        var le = Be(k);
        return O(le) ? !1 : oe(B, le, R);
      }
      function ae(B, k, R) {
        var U = Fe(
          k,
          R,
          /*Create*/
          !1
        );
        return P(U) ? !1 : ue(U.OrdinaryHasOwnMetadata(B, k, R));
      }
      function H(B, k, R) {
        var U = ae(B, k, R);
        if (U)
          return j(B, k, R);
        var le = Be(k);
        if (!O(le))
          return H(B, le, R);
      }
      function j(B, k, R) {
        var U = Fe(
          k,
          R,
          /*Create*/
          !1
        );
        if (!P(U))
          return U.OrdinaryGetOwnMetadata(B, k, R);
      }
      function V(B, k, R, U) {
        var le = Fe(
          R,
          U,
          /*Create*/
          !0
        );
        le.OrdinaryDefineOwnMetadata(B, k, R, U);
      }
      function re(B, k) {
        var R = S(B, k), U = Be(B);
        if (U === null)
          return R;
        var le = re(U, k);
        if (le.length <= 0)
          return R;
        if (R.length <= 0)
          return le;
        for (var _e = new b(), Re = [], ce = 0, $ = R; ce < $.length; ce++) {
          var Ae = $[ce], de = _e.has(Ae);
          de || (_e.add(Ae), Re.push(Ae));
        }
        for (var fe = 0, ke = le; fe < ke.length; fe++) {
          var Ae = ke[fe], de = _e.has(Ae);
          de || (_e.add(Ae), Re.push(Ae));
        }
        return Re;
      }
      function S(B, k) {
        var R = Fe(
          B,
          k,
          /*create*/
          !1
        );
        return R ? R.OrdinaryOwnMetadataKeys(B, k) : [];
      }
      function N(B) {
        if (B === null)
          return 1;
        switch (typeof B) {
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
            return B === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function P(B) {
        return B === void 0;
      }
      function O(B) {
        return B === null;
      }
      function G(B) {
        return typeof B == "symbol";
      }
      function K(B) {
        return typeof B == "object" ? B !== null : typeof B == "function";
      }
      function q(B, k) {
        switch (N(B)) {
          case 0:
            return B;
          case 1:
            return B;
          case 2:
            return B;
          case 3:
            return B;
          case 4:
            return B;
          case 5:
            return B;
        }
        var R = "string", U = Qe(B, o);
        if (U !== void 0) {
          var le = U.call(B, R);
          if (K(le))
            throw new TypeError();
          return le;
        }
        return z(B);
      }
      function z(B, k) {
        var R, U;
        {
          var le = B.toString;
          if (xe(le)) {
            var U = le.call(B);
            if (!K(U))
              return U;
          }
          var R = B.valueOf;
          if (xe(R)) {
            var U = R.call(B);
            if (!K(U))
              return U;
          }
        }
        throw new TypeError();
      }
      function ue(B) {
        return !!B;
      }
      function ve(B) {
        return "" + B;
      }
      function te(B) {
        var k = q(B);
        return G(k) ? k : ve(k);
      }
      function X(B) {
        return Array.isArray ? Array.isArray(B) : B instanceof Object ? B instanceof Array : Object.prototype.toString.call(B) === "[object Array]";
      }
      function xe(B) {
        return typeof B == "function";
      }
      function De(B) {
        return typeof B == "function";
      }
      function he(B) {
        switch (N(B)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function pe(B, k) {
        return B === k || B !== B && k !== k;
      }
      function Qe(B, k) {
        var R = B[k];
        if (R != null) {
          if (!xe(R))
            throw new TypeError();
          return R;
        }
      }
      function se(B) {
        var k = Qe(B, l);
        if (!xe(k))
          throw new TypeError();
        var R = k.call(B);
        if (!K(R))
          throw new TypeError();
        return R;
      }
      function Ie(B) {
        return B.value;
      }
      function me(B) {
        var k = B.next();
        return k.done ? !1 : k;
      }
      function ee(B) {
        var k = B.return;
        k && k.call(B);
      }
      function Be(B) {
        var k = Object.getPrototypeOf(B);
        if (typeof B != "function" || B === m || k !== m)
          return k;
        var R = B.prototype, U = R && Object.getPrototypeOf(R);
        if (U == null || U === Object.prototype)
          return k;
        var le = U.constructor;
        return typeof le != "function" || le === B ? k : le;
      }
      function Ce() {
        var B;
        !P(E) && typeof u.Reflect < "u" && !(E in u.Reflect) && typeof u.Reflect.defineMetadata == "function" && (B = Ve(u.Reflect));
        var k, R, U, le = new C(), _e = {
          registerProvider: Re,
          getProvider: $,
          setProvider: de
        };
        return _e;
        function Re(fe) {
          if (!Object.isExtensible(_e))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case B === fe:
              break;
            case P(k):
              k = fe;
              break;
            case k === fe:
              break;
            case P(R):
              R = fe;
              break;
            case R === fe:
              break;
            default:
              U === void 0 && (U = new b()), U.add(fe);
              break;
          }
        }
        function ce(fe, ke) {
          if (!P(k)) {
            if (k.isProviderFor(fe, ke))
              return k;
            if (!P(R)) {
              if (R.isProviderFor(fe, ke))
                return k;
              if (!P(U))
                for (var Le = se(U); ; ) {
                  var Me = me(Le);
                  if (!Me)
                    return;
                  var Ue = Ie(Me);
                  if (Ue.isProviderFor(fe, ke))
                    return ee(Le), Ue;
                }
            }
          }
          if (!P(B) && B.isProviderFor(fe, ke))
            return B;
        }
        function $(fe, ke) {
          var Le = le.get(fe), Me;
          return P(Le) || (Me = Le.get(ke)), P(Me) && (Me = ce(fe, ke), P(Me) || (P(Le) && (Le = new v(), le.set(fe, Le)), Le.set(ke, Me))), Me;
        }
        function Ae(fe) {
          if (P(fe))
            throw new TypeError();
          return k === fe || R === fe || !P(U) && U.has(fe);
        }
        function de(fe, ke, Le) {
          if (!Ae(Le))
            throw new Error("Metadata provider not registered.");
          var Me = $(fe, ke);
          if (Me !== Le) {
            if (!P(Me))
              return !1;
            var Ue = le.get(fe);
            P(Ue) && (Ue = new v(), le.set(fe, Ue)), Ue.set(ke, Le);
          }
          return !0;
        }
      }
      function Ee() {
        var B;
        return !P(E) && K(u.Reflect) && Object.isExtensible(u.Reflect) && (B = u.Reflect[E]), P(B) && (B = Ce()), !P(E) && K(u.Reflect) && Object.isExtensible(u.Reflect) && Object.defineProperty(u.Reflect, E, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: B
        }), B;
      }
      function ge(B) {
        var k = new C(), R = {
          isProviderFor: function(Ae, de) {
            var fe = k.get(Ae);
            return P(fe) ? !1 : fe.has(de);
          },
          OrdinaryDefineOwnMetadata: Re,
          OrdinaryHasOwnMetadata: le,
          OrdinaryGetOwnMetadata: _e,
          OrdinaryOwnMetadataKeys: ce,
          OrdinaryDeleteMetadata: $
        };
        return y.registerProvider(R), R;
        function U(Ae, de, fe) {
          var ke = k.get(Ae), Le = !1;
          if (P(ke)) {
            if (!fe)
              return;
            ke = new v(), k.set(Ae, ke), Le = !0;
          }
          var Me = ke.get(de);
          if (P(Me)) {
            if (!fe)
              return;
            if (Me = new v(), ke.set(de, Me), !B.setProvider(Ae, de, R))
              throw ke.delete(de), Le && k.delete(Ae), new Error("Wrong provider for target.");
          }
          return Me;
        }
        function le(Ae, de, fe) {
          var ke = U(
            de,
            fe,
            /*Create*/
            !1
          );
          return P(ke) ? !1 : ue(ke.has(Ae));
        }
        function _e(Ae, de, fe) {
          var ke = U(
            de,
            fe,
            /*Create*/
            !1
          );
          if (!P(ke))
            return ke.get(Ae);
        }
        function Re(Ae, de, fe, ke) {
          var Le = U(
            fe,
            ke,
            /*Create*/
            !0
          );
          Le.set(Ae, de);
        }
        function ce(Ae, de) {
          var fe = [], ke = U(
            Ae,
            de,
            /*Create*/
            !1
          );
          if (P(ke))
            return fe;
          for (var Le = ke.keys(), Me = se(Le), Ue = 0; ; ) {
            var nt = me(Me);
            if (!nt)
              return fe.length = Ue, fe;
            var Je = Ie(nt);
            try {
              fe[Ue] = Je;
            } catch (He) {
              try {
                ee(Me);
              } finally {
                throw He;
              }
            }
            Ue++;
          }
        }
        function $(Ae, de, fe) {
          var ke = U(
            de,
            fe,
            /*Create*/
            !1
          );
          if (P(ke) || !ke.delete(Ae))
            return !1;
          if (ke.size === 0) {
            var Le = k.get(de);
            P(Le) || (Le.delete(fe), Le.size === 0 && k.delete(Le));
          }
          return !0;
        }
      }
      function Ve(B) {
        var k = B.defineMetadata, R = B.hasOwnMetadata, U = B.getOwnMetadata, le = B.getOwnMetadataKeys, _e = B.deleteMetadata, Re = new C(), ce = {
          isProviderFor: function($, Ae) {
            var de = Re.get($);
            return !P(de) && de.has(Ae) ? !0 : le($, Ae).length ? (P(de) && (de = new b(), Re.set($, de)), de.add(Ae), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: k,
          OrdinaryHasOwnMetadata: R,
          OrdinaryGetOwnMetadata: U,
          OrdinaryOwnMetadataKeys: le,
          OrdinaryDeleteMetadata: _e
        };
        return ce;
      }
      function Fe(B, k, R) {
        var U = y.getProvider(B, k);
        if (!P(U))
          return U;
        if (R) {
          if (y.setProvider(B, k, I))
            return I;
          throw new Error("Illegal state.");
        }
      }
      function we() {
        var B = {}, k = [], R = (
          /** @class */
          function() {
            function ce($, Ae, de) {
              this._index = 0, this._keys = $, this._values = Ae, this._selector = de;
            }
            return ce.prototype["@@iterator"] = function() {
              return this;
            }, ce.prototype[l] = function() {
              return this;
            }, ce.prototype.next = function() {
              var $ = this._index;
              if ($ >= 0 && $ < this._keys.length) {
                var Ae = this._selector(this._keys[$], this._values[$]);
                return $ + 1 >= this._keys.length ? (this._index = -1, this._keys = k, this._values = k) : this._index++, { value: Ae, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, ce.prototype.throw = function($) {
              throw this._index >= 0 && (this._index = -1, this._keys = k, this._values = k), $;
            }, ce.prototype.return = function($) {
              return this._index >= 0 && (this._index = -1, this._keys = k, this._values = k), { value: $, done: !0 };
            }, ce;
          }()
        ), U = (
          /** @class */
          function() {
            function ce() {
              this._keys = [], this._values = [], this._cacheKey = B, this._cacheIndex = -2;
            }
            return Object.defineProperty(ce.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), ce.prototype.has = function($) {
              return this._find(
                $,
                /*insert*/
                !1
              ) >= 0;
            }, ce.prototype.get = function($) {
              var Ae = this._find(
                $,
                /*insert*/
                !1
              );
              return Ae >= 0 ? this._values[Ae] : void 0;
            }, ce.prototype.set = function($, Ae) {
              var de = this._find(
                $,
                /*insert*/
                !0
              );
              return this._values[de] = Ae, this;
            }, ce.prototype.delete = function($) {
              var Ae = this._find(
                $,
                /*insert*/
                !1
              );
              if (Ae >= 0) {
                for (var de = this._keys.length, fe = Ae + 1; fe < de; fe++)
                  this._keys[fe - 1] = this._keys[fe], this._values[fe - 1] = this._values[fe];
                return this._keys.length--, this._values.length--, pe($, this._cacheKey) && (this._cacheKey = B, this._cacheIndex = -2), !0;
              }
              return !1;
            }, ce.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = B, this._cacheIndex = -2;
            }, ce.prototype.keys = function() {
              return new R(this._keys, this._values, le);
            }, ce.prototype.values = function() {
              return new R(this._keys, this._values, _e);
            }, ce.prototype.entries = function() {
              return new R(this._keys, this._values, Re);
            }, ce.prototype["@@iterator"] = function() {
              return this.entries();
            }, ce.prototype[l] = function() {
              return this.entries();
            }, ce.prototype._find = function($, Ae) {
              if (!pe(this._cacheKey, $)) {
                this._cacheIndex = -1;
                for (var de = 0; de < this._keys.length; de++)
                  if (pe(this._keys[de], $)) {
                    this._cacheIndex = de;
                    break;
                  }
              }
              return this._cacheIndex < 0 && Ae && (this._cacheIndex = this._keys.length, this._keys.push($), this._values.push(void 0)), this._cacheIndex;
            }, ce;
          }()
        );
        return U;
        function le(ce, $) {
          return ce;
        }
        function _e(ce, $) {
          return $;
        }
        function Re(ce, $) {
          return [ce, $];
        }
      }
      function Te() {
        var B = (
          /** @class */
          function() {
            function k() {
              this._map = new v();
            }
            return Object.defineProperty(k.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), k.prototype.has = function(R) {
              return this._map.has(R);
            }, k.prototype.add = function(R) {
              return this._map.set(R, R), this;
            }, k.prototype.delete = function(R) {
              return this._map.delete(R);
            }, k.prototype.clear = function() {
              this._map.clear();
            }, k.prototype.keys = function() {
              return this._map.keys();
            }, k.prototype.values = function() {
              return this._map.keys();
            }, k.prototype.entries = function() {
              return this._map.entries();
            }, k.prototype["@@iterator"] = function() {
              return this.keys();
            }, k.prototype[l] = function() {
              return this.keys();
            }, k;
          }()
        );
        return B;
      }
      function Pe() {
        var B = 16, k = f.create(), R = U();
        return (
          /** @class */
          function() {
            function $() {
              this._key = U();
            }
            return $.prototype.has = function(Ae) {
              var de = le(
                Ae,
                /*create*/
                !1
              );
              return de !== void 0 ? f.has(de, this._key) : !1;
            }, $.prototype.get = function(Ae) {
              var de = le(
                Ae,
                /*create*/
                !1
              );
              return de !== void 0 ? f.get(de, this._key) : void 0;
            }, $.prototype.set = function(Ae, de) {
              var fe = le(
                Ae,
                /*create*/
                !0
              );
              return fe[this._key] = de, this;
            }, $.prototype.delete = function(Ae) {
              var de = le(
                Ae,
                /*create*/
                !1
              );
              return de !== void 0 ? delete de[this._key] : !1;
            }, $.prototype.clear = function() {
              this._key = U();
            }, $;
          }()
        );
        function U() {
          var $;
          do
            $ = "@@WeakMap@@" + ce();
          while (f.has(k, $));
          return k[$] = !0, $;
        }
        function le($, Ae) {
          if (!i.call($, R)) {
            if (!Ae)
              return;
            Object.defineProperty($, R, { value: f.create() });
          }
          return $[R];
        }
        function _e($, Ae) {
          for (var de = 0; de < Ae; ++de)
            $[de] = Math.random() * 255 | 0;
          return $;
        }
        function Re($) {
          if (typeof Uint8Array == "function") {
            var Ae = new Uint8Array($);
            return typeof crypto < "u" ? crypto.getRandomValues(Ae) : typeof msCrypto < "u" ? msCrypto.getRandomValues(Ae) : _e(Ae, $), Ae;
          }
          return _e(new Array($), $);
        }
        function ce() {
          var $ = Re(B);
          $[6] = $[6] & 79 | 64, $[8] = $[8] & 191 | 128;
          for (var Ae = "", de = 0; de < B; ++de) {
            var fe = $[de];
            (de === 4 || de === 6 || de === 8) && (Ae += "-"), fe < 16 && (Ae += "0"), Ae += fe.toString(16).toLowerCase();
          }
          return Ae;
        }
      }
      function je(B) {
        return B.__ = void 0, delete B.__, B;
      }
    });
  }(p || (p = {})), jo;
}
Nu();
const Xo = "inversify:paramtypes", Ou = "design:paramtypes";
let Vu = 0;
function Hu() {
  return Vu++;
}
var zo;
(function(p) {
  p[p.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", p[p.NoBindingsAvailable = 0] = "NoBindingsAvailable", p[p.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
})(zo || (zo = {}));
var Zo;
(function(p) {
  p.DynamicValue = "toDynamicValue", p.Factory = "toFactory", p.Provider = "toProvider";
})(Zo || (Zo = {}));
class Ku {
  constructor(n) {
    tt(this, "id");
    tt(this, "registry");
    this.id = Hu(), this.registry = n;
  }
}
function Ka() {
  return function(p) {
    if (Reflect.hasOwnMetadata(Xo, p)) throw new Error("Cannot apply @injectable decorator multiple times.");
    const n = Reflect.getMetadata(Ou, p) || [];
    return Reflect.defineMetadata(Xo, n, p), p;
  };
}
const ir = {
  //Options
  BaseOpt: Symbol.for("BaseOpt"),
  CommonDebugOpt: Symbol.for("CommonDebugOpt"),
  //Core
  ThreeJsBase: Symbol.for("ThreeJsBase"),
  ResourceLoader: Symbol.for("ResourceLoader"),
  UpdateHandler: Symbol.for("UpdateHandler"),
  Update: Symbol.for("Update"),
  UpdatableItems: Symbol.for("UpdatableItems"),
  Init: Symbol.for("Init"),
  InitItems: Symbol.for("InitItems"),
  Reset: Symbol.for("Reset"),
  ResetItems: Symbol.for("ResetItems"),
  GUI: Symbol.for("GUI"),
  PassedTime: Symbol.for("PassedTime")
};
class qu {
  constructor(n = 4) {
    this.pool = n, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(n) {
    if (!this.workers[n]) {
      const A = this.workerCreator();
      A.addEventListener("message", this._onMessage.bind(this, n)), this.workers[n] = A;
    }
  }
  _getIdleWorker() {
    for (let n = 0; n < this.pool; n++)
      if (!(this.workerStatus & 1 << n)) return n;
    return -1;
  }
  _onMessage(n, A) {
    const u = this.workersResolve[n];
    if (u && u(A), this.queue.length) {
      const { resolve: i, msg: t, transfer: o } = this.queue.shift();
      this.workersResolve[n] = i, this.workers[n].postMessage(t, o);
    } else
      this.workerStatus ^= 1 << n;
  }
  setWorkerCreator(n) {
    this.workerCreator = n;
  }
  setWorkerLimit(n) {
    this.pool = n;
  }
  postMessage(n, A) {
    return new Promise((u) => {
      const i = this._getIdleWorker();
      i !== -1 ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = u, this.workers[i].postMessage(n, A)) : this.queue.push({ resolve: u, msg: n, transfer: A });
    });
  }
  dispose() {
    this.workers.forEach((n) => n.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const Yu = 0, $o = 2, Ju = 1, ea = 2, ju = 0, Wu = 1, Xu = 10, zu = 0, qa = 9, Ya = 15, Ja = 16, ja = 22, Wa = 37, Xa = 43, za = 76, Za = 83, $a = 97, eA = 100, tA = 103, nA = 109, rA = 165, iA = 166, sA = 1000066e3;
class Zu {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class Lr {
  constructor(n, A, u, i) {
    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(n.buffer, n.byteOffset + A, u), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const n = this._dataView.getUint8(this._offset);
    return this._offset += 1, n;
  }
  _nextUint16() {
    const n = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, n;
  }
  _nextUint32() {
    const n = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, n;
  }
  _nextUint64() {
    const n = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, n;
  }
  _nextInt32() {
    const n = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, n;
  }
  _nextUint8Array(n) {
    const A = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, n);
    return this._offset += n, A;
  }
  _skip(n) {
    return this._offset += n, this;
  }
  _scan(n, A) {
    A === void 0 && (A = 0);
    const u = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== A && i < n; ) i++, this._offset++;
    return i < n && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + u, i);
  }
}
const ht = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function ta(p) {
  return new TextDecoder().decode(p);
}
function $u(p) {
  const n = new Uint8Array(p.buffer, p.byteOffset, ht.length);
  if (n[0] !== ht[0] || n[1] !== ht[1] || n[2] !== ht[2] || n[3] !== ht[3] || n[4] !== ht[4] || n[5] !== ht[5] || n[6] !== ht[6] || n[7] !== ht[7] || n[8] !== ht[8] || n[9] !== ht[9] || n[10] !== ht[10] || n[11] !== ht[11]) throw new Error("Missing KTX 2.0 identifier.");
  const A = new Zu(), u = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new Lr(p, ht.length, u, !0);
  A.vkFormat = i._nextUint32(), A.typeSize = i._nextUint32(), A.pixelWidth = i._nextUint32(), A.pixelHeight = i._nextUint32(), A.pixelDepth = i._nextUint32(), A.layerCount = i._nextUint32(), A.faceCount = i._nextUint32();
  const t = i._nextUint32();
  A.supercompressionScheme = i._nextUint32();
  const o = i._nextUint32(), l = i._nextUint32(), a = i._nextUint32(), h = i._nextUint32(), d = i._nextUint64(), f = i._nextUint64(), m = new Lr(p, ht.length + u, 3 * t * 8, !0);
  for (let H = 0; H < t; H++) A.levels.push({ levelData: new Uint8Array(p.buffer, p.byteOffset + m._nextUint64(), m._nextUint64()), uncompressedByteLength: m._nextUint64() });
  const v = new Lr(p, o, l, !0), b = { vendorId: v._skip(4)._nextUint16(), descriptorType: v._nextUint16(), versionNumber: v._nextUint16(), descriptorBlockSize: v._nextUint16(), colorModel: v._nextUint8(), colorPrimaries: v._nextUint8(), transferFunction: v._nextUint8(), flags: v._nextUint8(), texelBlockDimension: [v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8()], bytesPlane: [v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8()], samples: [] }, C = (b.descriptorBlockSize / 4 - 6) / 4;
  for (let H = 0; H < C; H++) {
    const j = { bitOffset: v._nextUint16(), bitLength: v._nextUint8(), channelType: v._nextUint8(), samplePosition: [v._nextUint8(), v._nextUint8(), v._nextUint8(), v._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & j.channelType ? (j.sampleLower = v._nextInt32(), j.sampleUpper = v._nextInt32()) : (j.sampleLower = v._nextUint32(), j.sampleUpper = v._nextUint32()), b.samples[H] = j;
  }
  A.dataFormatDescriptor.length = 0, A.dataFormatDescriptor.push(b);
  const E = new Lr(p, a, h, !0);
  for (; E._offset < h; ) {
    const H = E._nextUint32(), j = E._scan(H), V = ta(j);
    if (A.keyValue[V] = E._nextUint8Array(H - j.byteLength - 1), V.match(/^ktx/i)) {
      const re = ta(A.keyValue[V]);
      A.keyValue[V] = re.substring(0, re.lastIndexOf("\0"));
    }
    E._skip(H % 4 ? 4 - H % 4 : 0);
  }
  if (f <= 0) return A;
  const y = new Lr(p, d, f, !0), I = y._nextUint16(), Q = y._nextUint16(), _ = y._nextUint32(), x = y._nextUint32(), F = y._nextUint32(), T = y._nextUint32(), L = [];
  for (let H = 0; H < t; H++) L.push({ imageFlags: y._nextUint32(), rgbSliceByteOffset: y._nextUint32(), rgbSliceByteLength: y._nextUint32(), alphaSliceByteOffset: y._nextUint32(), alphaSliceByteLength: y._nextUint32() });
  const W = d + y._offset, J = W + _, ie = J + x, M = ie + F, Z = new Uint8Array(p.buffer, p.byteOffset + W, _), Y = new Uint8Array(p.buffer, p.byteOffset + J, x), oe = new Uint8Array(p.buffer, p.byteOffset + ie, F), ae = new Uint8Array(p.buffer, p.byteOffset + M, T);
  return A.globalData = { endpointCount: I, selectorCount: Q, imageDescs: L, endpointsData: Z, selectorsData: Y, tablesData: oe, extendedData: ae }, A;
}
let os, Zt, xs;
const as = { env: { emscripten_notify_memory_growth: function(p) {
  xs = new Uint8Array(Zt.exports.memory.buffer);
} } };
class eh {
  init() {
    return os || (os = typeof fetch < "u" ? fetch("data:application/wasm;base64," + na).then((n) => n.arrayBuffer()).then((n) => WebAssembly.instantiate(n, as)).then(this._init) : WebAssembly.instantiate(Buffer.from(na, "base64"), as).then(this._init), os);
  }
  _init(n) {
    Zt = n.instance, as.env.emscripten_notify_memory_growth(0);
  }
  decode(n, A = 0) {
    if (!Zt) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const u = n.byteLength, i = Zt.exports.malloc(u);
    xs.set(n, i), A = A || Number(Zt.exports.ZSTD_findDecompressedSize(i, u));
    const t = Zt.exports.malloc(A), o = Zt.exports.ZSTD_decompress(t, A, i, u), l = xs.slice(t, t + o);
    return Zt.exports.free(i), Zt.exports.free(t), l;
  }
}
const na = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", As = /* @__PURE__ */ new WeakMap();
let ls = 0, cs;
class Vt extends Gs {
  constructor(n) {
    super(n), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new qu(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(n) {
    return this.transcoderPath = n, this;
  }
  setWorkerLimit(n) {
    return this.workerPool.setWorkerLimit(n), this;
  }
  async detectSupportAsync(n) {
    return this.workerConfig = {
      astcSupported: await n.hasFeatureAsync("texture-compression-astc"),
      etc1Supported: await n.hasFeatureAsync("texture-compression-etc1"),
      etc2Supported: await n.hasFeatureAsync("texture-compression-etc2"),
      dxtSupported: await n.hasFeatureAsync("texture-compression-bc"),
      bptcSupported: await n.hasFeatureAsync("texture-compression-bptc"),
      pvrtcSupported: await n.hasFeatureAsync("texture-compression-pvrtc")
    }, this;
  }
  detectSupport(n) {
    return n.isWebGPURenderer === !0 ? this.workerConfig = {
      astcSupported: n.hasFeature("texture-compression-astc"),
      etc1Supported: n.hasFeature("texture-compression-etc1"),
      etc2Supported: n.hasFeature("texture-compression-etc2"),
      dxtSupported: n.hasFeature("texture-compression-bc"),
      bptcSupported: n.hasFeature("texture-compression-bptc"),
      pvrtcSupported: n.hasFeature("texture-compression-pvrtc")
    } : this.workerConfig = {
      astcSupported: n.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: n.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: n.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: n.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: n.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: n.extensions.has("WEBGL_compressed_texture_pvrtc") || n.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, this;
  }
  init() {
    if (!this.transcoderPending) {
      const n = new Nn(this.manager);
      n.setPath(this.transcoderPath), n.setWithCredentials(this.withCredentials);
      const A = n.loadAsync("basis_transcoder.js"), u = new Nn(this.manager);
      u.setPath(this.transcoderPath), u.setResponseType("arraybuffer"), u.setWithCredentials(this.withCredentials);
      const i = u.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([A, i]).then(([t, o]) => {
        const l = Vt.BasisWorker.toString(), a = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(Vt.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(Vt.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(Vt.BasisFormat),
          "/* basis_transcoder.js */",
          t,
          "/* worker */",
          l.substring(l.indexOf("{") + 1, l.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a])), this.transcoderBinary = o, this.workerPool.setWorkerCreator(() => {
          const h = new Worker(this.workerSourceURL), d = this.transcoderBinary.slice(0);
          return h.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: d }, [d]), h;
        });
      }), ls > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), ls++;
    }
    return this.transcoderPending;
  }
  load(n, A, u, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const t = new Nn(this.manager);
    t.setResponseType("arraybuffer"), t.setWithCredentials(this.withCredentials), t.load(n, (o) => {
      this.parse(o, A, i);
    }, u, i);
  }
  parse(n, A, u) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    if (As.has(n))
      return As.get(n).promise.then(A).catch(u);
    this._createTexture(n).then((i) => A ? A(i) : null).catch(u);
  }
  _createTextureFrom(n, A) {
    const { faces: u, width: i, height: t, format: o, type: l, error: a, dfdFlags: h } = n;
    if (l === "error") return Promise.reject(a);
    let d;
    if (A.faceCount === 6)
      d = new Vc(u, o, xt);
    else {
      const f = u[0].mipmaps;
      d = A.layerCount > 1 ? new Hc(f, i, t, A.layerCount, o, xt) : new xa(f, i, t, o, xt);
    }
    return d.minFilter = u[0].mipmaps.length === 1 ? hr : Ns, d.magFilter = hr, d.generateMipmaps = !1, d.needsUpdate = !0, d.colorSpace = oA(A), d.premultiplyAlpha = !!(h & Ju), d;
  }
  /**
   * @param {ArrayBuffer} buffer
   * @param {object?} config
   * @return {Promise<CompressedTexture|CompressedArrayTexture|DataTexture|Data3DTexture>}
   */
  async _createTexture(n, A = {}) {
    const u = $u(new Uint8Array(n));
    if (u.vkFormat !== zu)
      return nh(u);
    const i = A, t = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: n, taskConfig: i }, [n])).then((o) => this._createTextureFrom(o.data, u));
    return As.set(n, { promise: t }), t;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), ls--, this;
  }
}
Vt.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
Vt.TranscoderFormat = {
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
Vt.EngineFormat = {
  RGBAFormat: or,
  RGBA_ASTC_4x4_Format: Sa,
  RGBA_BPTC_Format: Kc,
  RGBA_ETC2_EAC_Format: qc,
  RGBA_PVRTC_4BPPV1_Format: Yc,
  RGBA_S3TC_DXT5_Format: Jc,
  RGB_ETC1_Format: jc,
  RGB_ETC2_Format: Wc,
  RGB_PVRTC_4BPPV1_Format: Xc,
  RGBA_S3TC_DXT1_Format: zc
};
Vt.BasisWorker = function() {
  let p, n, A;
  const u = _EngineFormat, i = _TranscoderFormat, t = _BasisFormat;
  self.addEventListener("message", function(b) {
    const C = b.data;
    switch (C.type) {
      case "init":
        p = C.config, o(C.transcoderBinary);
        break;
      case "transcode":
        n.then(() => {
          try {
            const { faces: E, buffers: y, width: I, height: Q, hasAlpha: _, format: x, dfdFlags: F } = l(C.buffer);
            self.postMessage({ type: "transcode", id: C.id, faces: E, width: I, height: Q, hasAlpha: _, format: x, dfdFlags: F }, y);
          } catch (E) {
            console.error(E), self.postMessage({ type: "error", id: C.id, error: E.message });
          }
        });
        break;
    }
  });
  function o(b) {
    n = new Promise((C) => {
      A = { wasmBinary: b, onRuntimeInitialized: C }, BASIS(A);
    }).then(() => {
      A.initializeBasis(), A.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function l(b) {
    const C = new A.KTX2File(new Uint8Array(b));
    function E() {
      C.close(), C.delete();
    }
    if (!C.isValid())
      throw E(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const y = C.isUASTC() ? t.UASTC_4x4 : t.ETC1S, I = C.getWidth(), Q = C.getHeight(), _ = C.getLayers() || 1, x = C.getLevels(), F = C.getFaces(), T = C.getHasAlpha(), L = C.getDFDFlags(), { transcoderFormat: W, engineFormat: J } = f(y, I, Q, T);
    if (!I || !Q || !x)
      throw E(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!C.startTranscoding())
      throw E(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const ie = [], M = [];
    for (let Z = 0; Z < F; Z++) {
      const Y = [];
      for (let oe = 0; oe < x; oe++) {
        const ae = [];
        let H, j;
        for (let re = 0; re < _; re++) {
          const S = C.getImageLevelInfo(oe, re, Z);
          Z === 0 && oe === 0 && re === 0 && (S.origWidth % 4 !== 0 || S.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."), x > 1 ? (H = S.origWidth, j = S.origHeight) : (H = S.width, j = S.height);
          const N = new Uint8Array(C.getImageTranscodedSizeInBytes(oe, re, 0, W));
          if (!C.transcodeImage(N, oe, re, Z, W, 0, -1, -1))
            throw E(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
          ae.push(N);
        }
        const V = v(ae);
        Y.push({ data: V, width: H, height: j }), M.push(V.buffer);
      }
      ie.push({ mipmaps: Y, width: I, height: Q, format: J });
    }
    return E(), { faces: ie, buffers: M, width: I, height: Q, hasAlpha: T, format: J, dfdFlags: L };
  }
  const a = [
    {
      if: "astcSupported",
      basisFormat: [t.UASTC_4x4],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [u.RGBA_ASTC_4x4_Format, u.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [t.ETC1S, t.UASTC_4x4],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [u.RGBA_BPTC_Format, u.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [t.ETC1S, t.UASTC_4x4],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [u.RGBA_S3TC_DXT1_Format, u.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [t.ETC1S, t.UASTC_4x4],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [u.RGB_ETC2_Format, u.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [t.ETC1S, t.UASTC_4x4],
      transcoderFormat: [i.ETC1],
      engineFormat: [u.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [t.ETC1S, t.UASTC_4x4],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [u.RGB_PVRTC_4BPPV1_Format, u.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], h = a.sort(function(b, C) {
    return b.priorityETC1S - C.priorityETC1S;
  }), d = a.sort(function(b, C) {
    return b.priorityUASTC - C.priorityUASTC;
  });
  function f(b, C, E, y) {
    let I, Q;
    const _ = b === t.ETC1S ? h : d;
    for (let x = 0; x < _.length; x++) {
      const F = _[x];
      if (p[F.if] && F.basisFormat.includes(b) && !(y && F.transcoderFormat.length < 2) && !(F.needsPowerOfTwo && !(m(C) && m(E))))
        return I = F.transcoderFormat[y ? 1 : 0], Q = F.engineFormat[y ? 1 : 0], { transcoderFormat: I, engineFormat: Q };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), I = i.RGBA32, Q = u.RGBAFormat, { transcoderFormat: I, engineFormat: Q };
  }
  function m(b) {
    return b <= 2 ? !0 : (b & b - 1) === 0 && b !== 0;
  }
  function v(b) {
    if (b.length === 1) return b[0];
    let C = 0;
    for (let I = 0; I < b.length; I++) {
      const Q = b[I];
      C += Q.byteLength;
    }
    const E = new Uint8Array(C);
    let y = 0;
    for (let I = 0; I < b.length; I++) {
      const Q = b[I];
      E.set(Q, y), y += Q.byteLength;
    }
    return E;
  }
};
const th = /* @__PURE__ */ new Set([or, Nr, Or]), us = {
  [nA]: or,
  [$a]: or,
  [Wa]: or,
  [Xa]: or,
  [tA]: Nr,
  [Za]: Nr,
  [Ja]: Nr,
  [ja]: Nr,
  [eA]: Or,
  [za]: Or,
  [Ya]: Or,
  [qa]: Or,
  [sA]: Sa,
  [iA]: Vo,
  [rA]: Vo
}, hs = {
  [nA]: wi,
  [$a]: Gr,
  [Wa]: xt,
  [Xa]: xt,
  [tA]: wi,
  [Za]: Gr,
  [Ja]: xt,
  [ja]: xt,
  [eA]: wi,
  [za]: Gr,
  [Ya]: xt,
  [qa]: xt,
  [sA]: Gr,
  [iA]: xt,
  [rA]: xt
};
async function nh(p) {
  const { vkFormat: n } = p;
  if (us[n] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let A;
  p.supercompressionScheme === $o && (cs || (cs = new Promise(async (t) => {
    const o = new eh();
    await o.init(), t(o);
  })), A = await cs);
  const u = [];
  for (let t = 0; t < p.levels.length; t++) {
    const o = Math.max(1, p.pixelWidth >> t), l = Math.max(1, p.pixelHeight >> t), a = p.pixelDepth ? Math.max(1, p.pixelDepth >> t) : 0, h = p.levels[t];
    let d;
    if (p.supercompressionScheme === Yu)
      d = h.levelData;
    else if (p.supercompressionScheme === $o)
      d = A.decode(h.levelData, h.uncompressedByteLength);
    else
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let f;
    hs[n] === wi ? f = new Float32Array(
      d.buffer,
      d.byteOffset,
      d.byteLength / Float32Array.BYTES_PER_ELEMENT
    ) : hs[n] === Gr ? f = new Uint16Array(
      d.buffer,
      d.byteOffset,
      d.byteLength / Uint16Array.BYTES_PER_ELEMENT
    ) : f = d, u.push({
      data: f,
      width: o,
      height: l,
      depth: a
    });
  }
  let i;
  if (th.has(us[n]))
    i = p.pixelDepth === 0 ? new Zc(u[0].data, p.pixelWidth, p.pixelHeight) : new $c(u[0].data, p.pixelWidth, p.pixelHeight, p.pixelDepth);
  else {
    if (p.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    i = new xa(u, p.pixelWidth, p.pixelHeight);
  }
  return i.mipmaps = u, i.type = hs[n], i.format = us[n], i.colorSpace = oA(p), i.needsUpdate = !0, Promise.resolve(i);
}
function oA(p) {
  const n = p.dataFormatDescriptor[0];
  return n.colorPrimaries === Wu ? n.transferFunction === ea ? tn : kt : n.colorPrimaries === Xu ? n.transferFunction === ea ? eu : tu : n.colorPrimaries === ju ? Oo : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${n.colorPrimaries}"`), Oo);
}
const ds = /* @__PURE__ */ new WeakMap();
class rh extends Gs {
  constructor(n) {
    super(n), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
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
  setDecoderPath(n) {
    return this.decoderPath = n, this;
  }
  setDecoderConfig(n) {
    return this.decoderConfig = n, this;
  }
  setWorkerLimit(n) {
    return this.workerLimit = n, this;
  }
  load(n, A, u, i) {
    const t = new Nn(this.manager);
    t.setPath(this.path), t.setResponseType("arraybuffer"), t.setRequestHeader(this.requestHeader), t.setWithCredentials(this.withCredentials), t.load(n, (o) => {
      this.parse(o, A, i);
    }, u, i);
  }
  parse(n, A, u = () => {
  }) {
    this.decodeDracoFile(n, A, null, null, tn, u).catch(u);
  }
  decodeDracoFile(n, A, u, i, t = kt, o = () => {
  }) {
    const l = {
      attributeIDs: u || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!u,
      vertexColorSpace: t
    };
    return this.decodeGeometry(n, l).then(A).catch(o);
  }
  decodeGeometry(n, A) {
    const u = JSON.stringify(A);
    if (ds.has(n)) {
      const a = ds.get(n);
      if (a.key === u)
        return a.promise;
      if (n.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const t = this.workerNextTaskID++, o = n.byteLength, l = this._getWorker(t, o).then((a) => (i = a, new Promise((h, d) => {
      i._callbacks[t] = { resolve: h, reject: d }, i.postMessage({ type: "decode", id: t, taskConfig: A, buffer: n }, [n]);
    }))).then((a) => this._createGeometry(a.geometry));
    return l.catch(() => !0).then(() => {
      i && t && this._releaseTask(i, t);
    }), ds.set(n, {
      key: u,
      promise: l
    }), l;
  }
  _createGeometry(n) {
    const A = new cr();
    n.index && A.setIndex(new In(n.index.array, 1));
    for (let u = 0; u < n.attributes.length; u++) {
      const i = n.attributes[u], t = i.name, o = i.array, l = i.itemSize, a = new In(o, l);
      t === "color" && (this._assignVertexColorSpace(a, i.vertexColorSpace), a.normalized = !(o instanceof Float32Array)), A.setAttribute(t, a);
    }
    return A;
  }
  _assignVertexColorSpace(n, A) {
    if (A !== tn) return;
    const u = new Dt();
    for (let i = 0, t = n.count; i < t; i++)
      u.fromBufferAttribute(n, i), Bs.toWorkingColorSpace(u, tn), n.setXYZ(i, u.r, u.g, u.b);
  }
  _loadLibrary(n, A) {
    const u = new Nn(this.manager);
    return u.setPath(this.decoderPath), u.setResponseType(A), u.setWithCredentials(this.withCredentials), new Promise((i, t) => {
      u.load(n, i, void 0, t);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const n = typeof WebAssembly != "object" || this.decoderConfig.type === "js", A = [];
    return n ? A.push(this._loadLibrary("draco_decoder.js", "text")) : (A.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), A.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(A).then((u) => {
      const i = u[0];
      n || (this.decoderConfig.wasmBinary = u[1]);
      const t = ih.toString(), o = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        t.substring(t.indexOf("{") + 1, t.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([o]));
    }), this.decoderPending;
  }
  _getWorker(n, A) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(t) {
          const o = t.data;
          switch (o.type) {
            case "decode":
              i._callbacks[o.id].resolve(o);
              break;
            case "error":
              i._callbacks[o.id].reject(o);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, t) {
          return i._taskLoad > t._taskLoad ? -1 : 1;
        });
      const u = this.workerPool[this.workerPool.length - 1];
      return u._taskCosts[n] = A, u._taskLoad += A, u;
    });
  }
  _releaseTask(n, A) {
    n._taskLoad -= n._taskCosts[A], delete n._callbacks[A], delete n._taskCosts[A];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((n) => n._taskLoad));
  }
  dispose() {
    for (let n = 0; n < this.workerPool.length; ++n)
      this.workerPool[n].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function ih() {
  let p, n;
  onmessage = function(o) {
    const l = o.data;
    switch (l.type) {
      case "init":
        p = l.decoderConfig, n = new Promise(function(d) {
          p.onModuleLoaded = function(f) {
            d({ draco: f });
          }, DracoDecoderModule(p);
        });
        break;
      case "decode":
        const a = l.buffer, h = l.taskConfig;
        n.then((d) => {
          const f = d.draco, m = new f.Decoder();
          try {
            const v = A(f, m, new Int8Array(a), h), b = v.attributes.map((C) => C.array.buffer);
            v.index && b.push(v.index.array.buffer), self.postMessage({ type: "decode", id: l.id, geometry: v }, b);
          } catch (v) {
            console.error(v), self.postMessage({ type: "error", id: l.id, error: v.message });
          } finally {
            f.destroy(m);
          }
        });
        break;
    }
  };
  function A(o, l, a, h) {
    const d = h.attributeIDs, f = h.attributeTypes;
    let m, v;
    const b = l.GetEncodedGeometryType(a);
    if (b === o.TRIANGULAR_MESH)
      m = new o.Mesh(), v = l.DecodeArrayToMesh(a, a.byteLength, m);
    else if (b === o.POINT_CLOUD)
      m = new o.PointCloud(), v = l.DecodeArrayToPointCloud(a, a.byteLength, m);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!v.ok() || m.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + v.error_msg());
    const C = { index: null, attributes: [] };
    for (const E in d) {
      const y = self[f[E]];
      let I, Q;
      if (h.useUniqueIDs)
        Q = d[E], I = l.GetAttributeByUniqueId(m, Q);
      else {
        if (Q = l.GetAttributeId(m, o[d[E]]), Q === -1) continue;
        I = l.GetAttribute(m, Q);
      }
      const _ = i(o, l, m, E, y, I);
      E === "color" && (_.vertexColorSpace = h.vertexColorSpace), C.attributes.push(_);
    }
    return b === o.TRIANGULAR_MESH && (C.index = u(o, l, m)), o.destroy(m), C;
  }
  function u(o, l, a) {
    const d = a.num_faces() * 3, f = d * 4, m = o._malloc(f);
    l.GetTrianglesUInt32Array(a, f, m);
    const v = new Uint32Array(o.HEAPF32.buffer, m, d).slice();
    return o._free(m), { array: v, itemSize: 1 };
  }
  function i(o, l, a, h, d, f) {
    const m = f.num_components(), b = a.num_points() * m, C = b * d.BYTES_PER_ELEMENT, E = t(o, d), y = o._malloc(C);
    l.GetAttributeDataArrayForAllPoints(a, f, E, C, y);
    const I = new d(o.HEAPF32.buffer, y, b).slice();
    return o._free(y), {
      name: h,
      array: I,
      itemSize: m
    };
  }
  function t(o, l) {
    switch (l) {
      case Float32Array:
        return o.DT_FLOAT32;
      case Int8Array:
        return o.DT_INT8;
      case Int16Array:
        return o.DT_INT16;
      case Int32Array:
        return o.DT_INT32;
      case Uint8Array:
        return o.DT_UINT8;
      case Uint16Array:
        return o.DT_UINT16;
      case Uint32Array:
        return o.DT_UINT32;
    }
  }
}
function ra(p, n) {
  if (n === nu)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), p;
  if (n === _s || n === ka) {
    let A = p.getIndex();
    if (A === null) {
      const o = [], l = p.getAttribute("position");
      if (l !== void 0) {
        for (let a = 0; a < l.count; a++)
          o.push(a);
        p.setIndex(o), A = p.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), p;
    }
    const u = A.count - 2, i = [];
    if (n === _s)
      for (let o = 1; o <= u; o++)
        i.push(A.getX(0)), i.push(A.getX(o)), i.push(A.getX(o + 1));
    else
      for (let o = 0; o < u; o++)
        o % 2 === 0 ? (i.push(A.getX(o)), i.push(A.getX(o + 1)), i.push(A.getX(o + 2))) : (i.push(A.getX(o + 2)), i.push(A.getX(o + 1)), i.push(A.getX(o)));
    i.length / 3 !== u && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const t = p.clone();
    return t.setIndex(i), t.clearGroups(), t;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", n), p;
}
class sh extends Gs {
  constructor(n) {
    super(n), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(A) {
      return new ch(A);
    }), this.register(function(A) {
      return new uh(A);
    }), this.register(function(A) {
      return new Ih(A);
    }), this.register(function(A) {
      return new Eh(A);
    }), this.register(function(A) {
      return new wh(A);
    }), this.register(function(A) {
      return new dh(A);
    }), this.register(function(A) {
      return new ph(A);
    }), this.register(function(A) {
      return new fh(A);
    }), this.register(function(A) {
      return new gh(A);
    }), this.register(function(A) {
      return new lh(A);
    }), this.register(function(A) {
      return new mh(A);
    }), this.register(function(A) {
      return new hh(A);
    }), this.register(function(A) {
      return new Ch(A);
    }), this.register(function(A) {
      return new vh(A);
    }), this.register(function(A) {
      return new ah(A);
    }), this.register(function(A) {
      return new bh(A);
    }), this.register(function(A) {
      return new Bh(A);
    });
  }
  load(n, A, u, i) {
    const t = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const h = Hr.extractUrlBase(n);
      o = Hr.resolveURL(h, this.path);
    } else
      o = Hr.extractUrlBase(n);
    this.manager.itemStart(n);
    const l = function(h) {
      i ? i(h) : console.error(h), t.manager.itemError(n), t.manager.itemEnd(n);
    }, a = new Nn(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(n, function(h) {
      try {
        t.parse(h, o, function(d) {
          A(d), t.manager.itemEnd(n);
        }, l);
      } catch (d) {
        l(d);
      }
    }, u, l);
  }
  setDRACOLoader(n) {
    return this.dracoLoader = n, this;
  }
  setKTX2Loader(n) {
    return this.ktx2Loader = n, this;
  }
  setMeshoptDecoder(n) {
    return this.meshoptDecoder = n, this;
  }
  register(n) {
    return this.pluginCallbacks.indexOf(n) === -1 && this.pluginCallbacks.push(n), this;
  }
  unregister(n) {
    return this.pluginCallbacks.indexOf(n) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n), 1), this;
  }
  parse(n, A, u, i) {
    let t;
    const o = {}, l = {}, a = new TextDecoder();
    if (typeof n == "string")
      t = JSON.parse(n);
    else if (n instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(n, 0, 4)) === aA) {
        try {
          o[Ne.KHR_BINARY_GLTF] = new _h(n);
        } catch (f) {
          i && i(f);
          return;
        }
        t = JSON.parse(o[Ne.KHR_BINARY_GLTF].content);
      } else
        t = JSON.parse(a.decode(n));
    else
      t = n;
    if (t.asset === void 0 || t.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const h = new Uh(t, {
      path: A || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    h.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const f = this.pluginCallbacks[d](h);
      f.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), l[f.name] = f, o[f.name] = !0;
    }
    if (t.extensionsUsed)
      for (let d = 0; d < t.extensionsUsed.length; ++d) {
        const f = t.extensionsUsed[d], m = t.extensionsRequired || [];
        switch (f) {
          case Ne.KHR_MATERIALS_UNLIT:
            o[f] = new Ah();
            break;
          case Ne.KHR_DRACO_MESH_COMPRESSION:
            o[f] = new yh(t, this.dracoLoader);
            break;
          case Ne.KHR_TEXTURE_TRANSFORM:
            o[f] = new Qh();
            break;
          case Ne.KHR_MESH_QUANTIZATION:
            o[f] = new xh();
            break;
          default:
            m.indexOf(f) >= 0 && l[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
        }
      }
    h.setExtensions(o), h.setPlugins(l), h.parse(u, i);
  }
  parseAsync(n, A) {
    const u = this;
    return new Promise(function(i, t) {
      u.parse(n, A, i, t);
    });
  }
}
function oh() {
  let p = {};
  return {
    get: function(n) {
      return p[n];
    },
    add: function(n, A) {
      p[n] = A;
    },
    remove: function(n) {
      delete p[n];
    },
    removeAll: function() {
      p = {};
    }
  };
}
const Ne = {
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
class ah {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const n = this.parser, A = this.parser.json.nodes || [];
    for (let u = 0, i = A.length; u < i; u++) {
      const t = A[u];
      t.extensions && t.extensions[this.name] && t.extensions[this.name].light !== void 0 && n._addNodeRef(this.cache, t.extensions[this.name].light);
    }
  }
  _loadLight(n) {
    const A = this.parser, u = "light:" + n;
    let i = A.cache.get(u);
    if (i) return i;
    const t = A.json, a = ((t.extensions && t.extensions[this.name] || {}).lights || [])[n];
    let h;
    const d = new Dt(16777215);
    a.color !== void 0 && d.setRGB(a.color[0], a.color[1], a.color[2], kt);
    const f = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        h = new su(d), h.target.position.set(0, 0, -1), h.add(h.target);
        break;
      case "point":
        h = new iu(d), h.distance = f;
        break;
      case "spot":
        h = new ru(d), h.distance = f, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, h.angle = a.spot.outerConeAngle, h.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, h.target.position.set(0, 0, -1), h.add(h.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return h.position.set(0, 0, 0), h.decay = 2, $t(h, a), a.intensity !== void 0 && (h.intensity = a.intensity), h.name = A.createUniqueName(a.name || "light_" + n), i = Promise.resolve(h), A.cache.add(u, i), i;
  }
  getDependency(n, A) {
    if (n === "light")
      return this._loadLight(A);
  }
  createNodeAttachment(n) {
    const A = this, u = this.parser, t = u.json.nodes[n], l = (t.extensions && t.extensions[this.name] || {}).light;
    return l === void 0 ? null : this._loadLight(l).then(function(a) {
      return u._getNodeRef(A.cache, l, a);
    });
  }
}
class Ah {
  constructor() {
    this.name = Ne.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ar;
  }
  extendParams(n, A, u) {
    const i = [];
    n.color = new Dt(1, 1, 1), n.opacity = 1;
    const t = A.pbrMetallicRoughness;
    if (t) {
      if (Array.isArray(t.baseColorFactor)) {
        const o = t.baseColorFactor;
        n.color.setRGB(o[0], o[1], o[2], kt), n.opacity = o[3];
      }
      t.baseColorTexture !== void 0 && i.push(u.assignTexture(n, "map", t.baseColorTexture, tn));
    }
    return Promise.all(i);
  }
}
class lh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(n, A) {
    const i = this.parser.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = i.extensions[this.name].emissiveStrength;
    return t !== void 0 && (A.emissiveIntensity = t), Promise.resolve();
  }
}
class ch {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (A.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && t.push(u.assignTexture(A, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (A.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && t.push(u.assignTexture(A, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (t.push(u.assignTexture(A, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const l = o.clearcoatNormalTexture.scale;
      A.clearcoatNormalScale = new Vn(l, l);
    }
    return Promise.all(t);
  }
}
class uh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const i = this.parser.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = i.extensions[this.name];
    return A.dispersion = t.dispersion !== void 0 ? t.dispersion : 0, Promise.resolve();
  }
}
class hh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (A.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && t.push(u.assignTexture(A, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (A.iridescenceIOR = o.iridescenceIor), A.iridescenceThicknessRange === void 0 && (A.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (A.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (A.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && t.push(u.assignTexture(A, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(t);
  }
}
class dh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [];
    A.sheenColor = new Dt(0, 0, 0), A.sheenRoughness = 0, A.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const l = o.sheenColorFactor;
      A.sheenColor.setRGB(l[0], l[1], l[2], kt);
    }
    return o.sheenRoughnessFactor !== void 0 && (A.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && t.push(u.assignTexture(A, "sheenColorMap", o.sheenColorTexture, tn)), o.sheenRoughnessTexture !== void 0 && t.push(u.assignTexture(A, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(t);
  }
}
class ph {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (A.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && t.push(u.assignTexture(A, "transmissionMap", o.transmissionTexture)), Promise.all(t);
  }
}
class fh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    A.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && t.push(u.assignTexture(A, "thicknessMap", o.thicknessTexture)), A.attenuationDistance = o.attenuationDistance || 1 / 0;
    const l = o.attenuationColor || [1, 1, 1];
    return A.attenuationColor = new Dt().setRGB(l[0], l[1], l[2], kt), Promise.all(t);
  }
}
class gh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_IOR;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const i = this.parser.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = i.extensions[this.name];
    return A.ior = t.ior !== void 0 ? t.ior : 1.5, Promise.resolve();
  }
}
class mh {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    A.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && t.push(u.assignTexture(A, "specularIntensityMap", o.specularTexture));
    const l = o.specularColorFactor || [1, 1, 1];
    return A.specularColor = new Dt().setRGB(l[0], l[1], l[2], kt), o.specularColorTexture !== void 0 && t.push(u.assignTexture(A, "specularColorMap", o.specularColorTexture, tn)), Promise.all(t);
  }
}
class vh {
  constructor(n) {
    this.parser = n, this.name = Ne.EXT_MATERIALS_BUMP;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    return A.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && t.push(u.assignTexture(A, "bumpMap", o.bumpTexture)), Promise.all(t);
  }
}
class Ch {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(n) {
    const u = this.parser.json.materials[n];
    return !u.extensions || !u.extensions[this.name] ? null : Ht;
  }
  extendMaterialParams(n, A) {
    const u = this.parser, i = u.json.materials[n];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const t = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (A.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (A.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && t.push(u.assignTexture(A, "anisotropyMap", o.anisotropyTexture)), Promise.all(t);
  }
}
class Ih {
  constructor(n) {
    this.parser = n, this.name = Ne.KHR_TEXTURE_BASISU;
  }
  loadTexture(n) {
    const A = this.parser, u = A.json, i = u.textures[n];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const t = i.extensions[this.name], o = A.options.ktx2Loader;
    if (!o) {
      if (u.extensionsRequired && u.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return A.loadTextureImage(n, t.source, o);
  }
}
class Eh {
  constructor(n) {
    this.parser = n, this.name = Ne.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(n) {
    const A = this.name, u = this.parser, i = u.json, t = i.textures[n];
    if (!t.extensions || !t.extensions[A])
      return null;
    const o = t.extensions[A], l = i.images[o.source];
    let a = u.textureLoader;
    if (l.uri) {
      const h = u.options.manager.getHandler(l.uri);
      h !== null && (a = h);
    }
    return this.detectSupport().then(function(h) {
      if (h) return u.loadTextureImage(n, o.source, a);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(A) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return u.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const A = new Image();
      A.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", A.onload = A.onerror = function() {
        n(A.height === 1);
      };
    })), this.isSupported;
  }
}
class wh {
  constructor(n) {
    this.parser = n, this.name = Ne.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(n) {
    const A = this.name, u = this.parser, i = u.json, t = i.textures[n];
    if (!t.extensions || !t.extensions[A])
      return null;
    const o = t.extensions[A], l = i.images[o.source];
    let a = u.textureLoader;
    if (l.uri) {
      const h = u.options.manager.getHandler(l.uri);
      h !== null && (a = h);
    }
    return this.detectSupport().then(function(h) {
      if (h) return u.loadTextureImage(n, o.source, a);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(A) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return u.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const A = new Image();
      A.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", A.onload = A.onerror = function() {
        n(A.height === 1);
      };
    })), this.isSupported;
  }
}
class bh {
  constructor(n) {
    this.name = Ne.EXT_MESHOPT_COMPRESSION, this.parser = n;
  }
  loadBufferView(n) {
    const A = this.parser.json, u = A.bufferViews[n];
    if (u.extensions && u.extensions[this.name]) {
      const i = u.extensions[this.name], t = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (A.extensionsRequired && A.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return t.then(function(l) {
        const a = i.byteOffset || 0, h = i.byteLength || 0, d = i.count, f = i.byteStride, m = new Uint8Array(l, a, h);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(d, f, m, i.mode, i.filter).then(function(v) {
          return v.buffer;
        }) : o.ready.then(function() {
          const v = new ArrayBuffer(d * f);
          return o.decodeGltfBuffer(new Uint8Array(v), d, f, m, i.mode, i.filter), v;
        });
      });
    } else
      return null;
  }
}
class Bh {
  constructor(n) {
    this.name = Ne.EXT_MESH_GPU_INSTANCING, this.parser = n;
  }
  createNodeMesh(n) {
    const A = this.parser.json, u = A.nodes[n];
    if (!u.extensions || !u.extensions[this.name] || u.mesh === void 0)
      return null;
    const i = A.meshes[u.mesh];
    for (const h of i.primitives)
      if (h.mode !== bt.TRIANGLES && h.mode !== bt.TRIANGLE_STRIP && h.mode !== bt.TRIANGLE_FAN && h.mode !== void 0)
        return null;
    const o = u.extensions[this.name].attributes, l = [], a = {};
    for (const h in o)
      l.push(this.parser.getDependency("accessor", o[h]).then((d) => (a[h] = d, a[h])));
    return l.length < 1 ? null : (l.push(this.parser.createNodeMesh(n)), Promise.all(l).then((h) => {
      const d = h.pop(), f = d.isGroup ? d.children : [d], m = h[0].count, v = [];
      for (const b of f) {
        const C = new jr(), E = new en(), y = new Da(), I = new en(1, 1, 1), Q = new ou(b.geometry, b.material, m);
        for (let _ = 0; _ < m; _++)
          a.TRANSLATION && E.fromBufferAttribute(a.TRANSLATION, _), a.ROTATION && y.fromBufferAttribute(a.ROTATION, _), a.SCALE && I.fromBufferAttribute(a.SCALE, _), Q.setMatrixAt(_, C.compose(E, y, I));
        for (const _ in a)
          if (_ === "_COLOR_0") {
            const x = a[_];
            Q.instanceColor = new Ta(x.array, x.itemSize, x.normalized);
          } else _ !== "TRANSLATION" && _ !== "ROTATION" && _ !== "SCALE" && b.geometry.setAttribute(_, a[_]);
        Wr.prototype.copy.call(Q, b), this.parser.assignFinalMaterial(Q), v.push(Q);
      }
      return d.isGroup ? (d.clear(), d.add(...v), d) : v[0];
    }));
  }
}
const aA = "glTF", Pr = 12, ia = { JSON: 1313821514, BIN: 5130562 };
class _h {
  constructor(n) {
    this.name = Ne.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const A = new DataView(n, 0, Pr), u = new TextDecoder();
    if (this.header = {
      magic: u.decode(new Uint8Array(n.slice(0, 4))),
      version: A.getUint32(4, !0),
      length: A.getUint32(8, !0)
    }, this.header.magic !== aA)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Pr, t = new DataView(n, Pr);
    let o = 0;
    for (; o < i; ) {
      const l = t.getUint32(o, !0);
      o += 4;
      const a = t.getUint32(o, !0);
      if (o += 4, a === ia.JSON) {
        const h = new Uint8Array(n, Pr + o, l);
        this.content = u.decode(h);
      } else if (a === ia.BIN) {
        const h = Pr + o;
        this.body = n.slice(h, h + l);
      }
      o += l;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class yh {
  constructor(n, A) {
    if (!A)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ne.KHR_DRACO_MESH_COMPRESSION, this.json = n, this.dracoLoader = A, this.dracoLoader.preload();
  }
  decodePrimitive(n, A) {
    const u = this.json, i = this.dracoLoader, t = n.extensions[this.name].bufferView, o = n.extensions[this.name].attributes, l = {}, a = {}, h = {};
    for (const d in o) {
      const f = Ss[d] || d.toLowerCase();
      l[f] = o[d];
    }
    for (const d in n.attributes) {
      const f = Ss[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const m = u.accessors[n.attributes[d]], v = ur[m.componentType];
        h[f] = v.name, a[f] = m.normalized === !0;
      }
    }
    return A.getDependency("bufferView", t).then(function(d) {
      return new Promise(function(f, m) {
        i.decodeDracoFile(d, function(v) {
          for (const b in v.attributes) {
            const C = v.attributes[b], E = a[b];
            E !== void 0 && (C.normalized = E);
          }
          f(v);
        }, l, h, kt, m);
      });
    });
  }
}
class Qh {
  constructor() {
    this.name = Ne.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(n, A) {
    return (A.texCoord === void 0 || A.texCoord === n.channel) && A.offset === void 0 && A.rotation === void 0 && A.scale === void 0 || (n = n.clone(), A.texCoord !== void 0 && (n.channel = A.texCoord), A.offset !== void 0 && n.offset.fromArray(A.offset), A.rotation !== void 0 && (n.rotation = A.rotation), A.scale !== void 0 && n.repeat.fromArray(A.scale), n.needsUpdate = !0), n;
  }
}
class xh {
  constructor() {
    this.name = Ne.KHR_MESH_QUANTIZATION;
  }
}
class AA extends yu {
  constructor(n, A, u, i) {
    super(n, A, u, i);
  }
  copySampleValue_(n) {
    const A = this.resultBuffer, u = this.sampleValues, i = this.valueSize, t = n * i * 3 + i;
    for (let o = 0; o !== i; o++)
      A[o] = u[t + o];
    return A;
  }
  interpolate_(n, A, u, i) {
    const t = this.resultBuffer, o = this.sampleValues, l = this.valueSize, a = l * 2, h = l * 3, d = i - A, f = (u - A) / d, m = f * f, v = m * f, b = n * h, C = b - h, E = -2 * v + 3 * m, y = v - m, I = 1 - E, Q = y - m + f;
    for (let _ = 0; _ !== l; _++) {
      const x = o[C + _ + l], F = o[C + _ + a] * d, T = o[b + _ + l], L = o[b + _] * d;
      t[_] = I * x + Q * F + E * T + y * L;
    }
    return t;
  }
}
const Sh = new Da();
class kh extends AA {
  interpolate_(n, A, u, i) {
    const t = super.interpolate_(n, A, u, i);
    return Sh.fromArray(t).normalize().toArray(t), t;
  }
}
const bt = {
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
}, ur = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, sa = {
  9728: Cu,
  9729: hr,
  9984: Iu,
  9985: Eu,
  9986: wu,
  9987: Ns
}, oa = {
  33071: bu,
  33648: Bu,
  10497: ys
}, ps = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ss = {
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
}, vn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Dh = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ua,
  STEP: _u
}, fs = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Th(p) {
  return p.DefaultMaterial === void 0 && (p.DefaultMaterial = new Fa({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Ga
  })), p.DefaultMaterial;
}
function Mn(p, n, A) {
  for (const u in A.extensions)
    p[u] === void 0 && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[u] = A.extensions[u]);
}
function $t(p, n) {
  n.extras !== void 0 && (typeof n.extras == "object" ? Object.assign(p.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras));
}
function Rh(p, n, A) {
  let u = !1, i = !1, t = !1;
  for (let h = 0, d = n.length; h < d; h++) {
    const f = n[h];
    if (f.POSITION !== void 0 && (u = !0), f.NORMAL !== void 0 && (i = !0), f.COLOR_0 !== void 0 && (t = !0), u && i && t) break;
  }
  if (!u && !i && !t) return Promise.resolve(p);
  const o = [], l = [], a = [];
  for (let h = 0, d = n.length; h < d; h++) {
    const f = n[h];
    if (u) {
      const m = f.POSITION !== void 0 ? A.getDependency("accessor", f.POSITION) : p.attributes.position;
      o.push(m);
    }
    if (i) {
      const m = f.NORMAL !== void 0 ? A.getDependency("accessor", f.NORMAL) : p.attributes.normal;
      l.push(m);
    }
    if (t) {
      const m = f.COLOR_0 !== void 0 ? A.getDependency("accessor", f.COLOR_0) : p.attributes.color;
      a.push(m);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(l),
    Promise.all(a)
  ]).then(function(h) {
    const d = h[0], f = h[1], m = h[2];
    return u && (p.morphAttributes.position = d), i && (p.morphAttributes.normal = f), t && (p.morphAttributes.color = m), p.morphTargetsRelative = !0, p;
  });
}
function Fh(p, n) {
  if (p.updateMorphTargets(), n.weights !== void 0)
    for (let A = 0, u = n.weights.length; A < u; A++)
      p.morphTargetInfluences[A] = n.weights[A];
  if (n.extras && Array.isArray(n.extras.targetNames)) {
    const A = n.extras.targetNames;
    if (p.morphTargetInfluences.length === A.length) {
      p.morphTargetDictionary = {};
      for (let u = 0, i = A.length; u < i; u++)
        p.morphTargetDictionary[A[u]] = u;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Lh(p) {
  let n;
  const A = p.extensions && p.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];
  if (A ? n = "draco:" + A.bufferView + ":" + A.indices + ":" + gs(A.attributes) : n = p.indices + ":" + gs(p.attributes) + ":" + p.mode, p.targets !== void 0)
    for (let u = 0, i = p.targets.length; u < i; u++)
      n += ":" + gs(p.targets[u]);
  return n;
}
function gs(p) {
  let n = "";
  const A = Object.keys(p).sort();
  for (let u = 0, i = A.length; u < i; u++)
    n += A[u] + ":" + p[A[u]] + ";";
  return n;
}
function ks(p) {
  switch (p) {
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
function Ph(p) {
  return p.search(/\.jpe?g($|\?)/i) > 0 || p.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : p.search(/\.webp($|\?)/i) > 0 || p.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Mh = new jr();
class Uh {
  constructor(n = {}, A = {}) {
    this.json = n, this.extensions = {}, this.plugins = {}, this.options = A, this.cache = new oh(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let u = !1, i = -1, t = !1, o = -1;
    if (typeof navigator < "u") {
      const l = navigator.userAgent;
      u = /^((?!chrome|android).)*safari/i.test(l) === !0;
      const a = l.match(/Version\/(\d+)/);
      i = u && a ? parseInt(a[1], 10) : -1, t = l.indexOf("Firefox") > -1, o = t ? l.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || u && i < 17 || t && o < 98 ? this.textureLoader = new Ra(this.options.manager) : this.textureLoader = new au(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Nn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(n) {
    this.extensions = n;
  }
  setPlugins(n) {
    this.plugins = n;
  }
  parse(n, A) {
    const u = this, i = this.json, t = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        u.getDependencies("scene"),
        u.getDependencies("animation"),
        u.getDependencies("camera")
      ]);
    }).then(function(o) {
      const l = {
        scene: o[0][i.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: i.asset,
        parser: u,
        userData: {}
      };
      return Mn(t, l, i), $t(l, i), Promise.all(u._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(l);
      })).then(function() {
        for (const a of l.scenes)
          a.updateMatrixWorld();
        n(l);
      });
    }).catch(A);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const n = this.json.nodes || [], A = this.json.skins || [], u = this.json.meshes || [];
    for (let i = 0, t = A.length; i < t; i++) {
      const o = A[i].joints;
      for (let l = 0, a = o.length; l < a; l++)
        n[o[l]].isBone = !0;
    }
    for (let i = 0, t = n.length; i < t; i++) {
      const o = n[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (u[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
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
  _addNodeRef(n, A) {
    A !== void 0 && (n.refs[A] === void 0 && (n.refs[A] = n.uses[A] = 0), n.refs[A]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(n, A, u) {
    if (n.refs[A] <= 1) return u;
    const i = u.clone(), t = (o, l) => {
      const a = this.associations.get(o);
      a != null && this.associations.set(l, a);
      for (const [h, d] of o.children.entries())
        t(d, l.children[h]);
    };
    return t(u, i), i.name += "_instance_" + n.uses[A]++, i;
  }
  _invokeOne(n) {
    const A = Object.values(this.plugins);
    A.push(this);
    for (let u = 0; u < A.length; u++) {
      const i = n(A[u]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(n) {
    const A = Object.values(this.plugins);
    A.unshift(this);
    const u = [];
    for (let i = 0; i < A.length; i++) {
      const t = n(A[i]);
      t && u.push(t);
    }
    return u;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(n, A) {
    const u = n + ":" + A;
    let i = this.cache.get(u);
    if (!i) {
      switch (n) {
        case "scene":
          i = this.loadScene(A);
          break;
        case "node":
          i = this._invokeOne(function(t) {
            return t.loadNode && t.loadNode(A);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(t) {
            return t.loadMesh && t.loadMesh(A);
          });
          break;
        case "accessor":
          i = this.loadAccessor(A);
          break;
        case "bufferView":
          i = this._invokeOne(function(t) {
            return t.loadBufferView && t.loadBufferView(A);
          });
          break;
        case "buffer":
          i = this.loadBuffer(A);
          break;
        case "material":
          i = this._invokeOne(function(t) {
            return t.loadMaterial && t.loadMaterial(A);
          });
          break;
        case "texture":
          i = this._invokeOne(function(t) {
            return t.loadTexture && t.loadTexture(A);
          });
          break;
        case "skin":
          i = this.loadSkin(A);
          break;
        case "animation":
          i = this._invokeOne(function(t) {
            return t.loadAnimation && t.loadAnimation(A);
          });
          break;
        case "camera":
          i = this.loadCamera(A);
          break;
        default:
          if (i = this._invokeOne(function(t) {
            return t != this && t.getDependency && t.getDependency(n, A);
          }), !i)
            throw new Error("Unknown type: " + n);
          break;
      }
      this.cache.add(u, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(n) {
    let A = this.cache.get(n);
    if (!A) {
      const u = this, i = this.json[n + (n === "mesh" ? "es" : "s")] || [];
      A = Promise.all(i.map(function(t, o) {
        return u.getDependency(n, o);
      })), this.cache.add(n, A);
    }
    return A;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(n) {
    const A = this.json.buffers[n], u = this.fileLoader;
    if (A.type && A.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + A.type + " buffer type is not supported.");
    if (A.uri === void 0 && n === 0)
      return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(t, o) {
      u.load(Hr.resolveURL(A.uri, i.path), t, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + A.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(n) {
    const A = this.json.bufferViews[n];
    return this.getDependency("buffer", A.buffer).then(function(u) {
      const i = A.byteLength || 0, t = A.byteOffset || 0;
      return u.slice(t, t + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(n) {
    const A = this, u = this.json, i = this.json.accessors[n];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = ps[i.type], l = ur[i.componentType], a = i.normalized === !0, h = new l(i.count * o);
      return Promise.resolve(new In(h, o, a));
    }
    const t = [];
    return i.bufferView !== void 0 ? t.push(this.getDependency("bufferView", i.bufferView)) : t.push(null), i.sparse !== void 0 && (t.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), t.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(t).then(function(o) {
      const l = o[0], a = ps[i.type], h = ur[i.componentType], d = h.BYTES_PER_ELEMENT, f = d * a, m = i.byteOffset || 0, v = i.bufferView !== void 0 ? u.bufferViews[i.bufferView].byteStride : void 0, b = i.normalized === !0;
      let C, E;
      if (v && v !== f) {
        const y = Math.floor(m / v), I = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + y + ":" + i.count;
        let Q = A.cache.get(I);
        Q || (C = new h(l, y * v, i.count * v / d), Q = new Au(C, v / d), A.cache.add(I, Q)), E = new lu(Q, a, m % v / d, b);
      } else
        l === null ? C = new h(i.count * a) : C = new h(l, m, i.count * a), E = new In(C, a, b);
      if (i.sparse !== void 0) {
        const y = ps.SCALAR, I = ur[i.sparse.indices.componentType], Q = i.sparse.indices.byteOffset || 0, _ = i.sparse.values.byteOffset || 0, x = new I(o[1], Q, i.sparse.count * y), F = new h(o[2], _, i.sparse.count * a);
        l !== null && (E = new In(E.array.slice(), E.itemSize, E.normalized)), E.normalized = !1;
        for (let T = 0, L = x.length; T < L; T++) {
          const W = x[T];
          if (E.setX(W, F[T * a]), a >= 2 && E.setY(W, F[T * a + 1]), a >= 3 && E.setZ(W, F[T * a + 2]), a >= 4 && E.setW(W, F[T * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        E.normalized = b;
      }
      return E;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(n) {
    const A = this.json, u = this.options, t = A.textures[n].source, o = A.images[t];
    let l = this.textureLoader;
    if (o.uri) {
      const a = u.manager.getHandler(o.uri);
      a !== null && (l = a);
    }
    return this.loadTextureImage(n, t, l);
  }
  loadTextureImage(n, A, u) {
    const i = this, t = this.json, o = t.textures[n], l = t.images[A], a = (l.uri || l.bufferView) + ":" + o.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const h = this.loadImageSource(A, u).then(function(d) {
      d.flipY = !1, d.name = o.name || l.name || "", d.name === "" && typeof l.uri == "string" && l.uri.startsWith("data:image/") === !1 && (d.name = l.uri);
      const m = (t.samplers || {})[o.sampler] || {};
      return d.magFilter = sa[m.magFilter] || hr, d.minFilter = sa[m.minFilter] || Ns, d.wrapS = oa[m.wrapS] || ys, d.wrapT = oa[m.wrapT] || ys, i.associations.set(d, { textures: n }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = h, h;
  }
  loadImageSource(n, A) {
    const u = this, i = this.json, t = this.options;
    if (this.sourceCache[n] !== void 0)
      return this.sourceCache[n].then((f) => f.clone());
    const o = i.images[n], l = self.URL || self.webkitURL;
    let a = o.uri || "", h = !1;
    if (o.bufferView !== void 0)
      a = u.getDependency("bufferView", o.bufferView).then(function(f) {
        h = !0;
        const m = new Blob([f], { type: o.mimeType });
        return a = l.createObjectURL(m), a;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + n + " is missing URI and bufferView");
    const d = Promise.resolve(a).then(function(f) {
      return new Promise(function(m, v) {
        let b = m;
        A.isImageBitmapLoader === !0 && (b = function(C) {
          const E = new Qs(C);
          E.needsUpdate = !0, m(E);
        }), A.load(Hr.resolveURL(f, t.path), b, void 0, v);
      });
    }).then(function(f) {
      return h === !0 && l.revokeObjectURL(a), $t(f, o), f.userData.mimeType = o.mimeType || Ph(o.uri), f;
    }).catch(function(f) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), f;
    });
    return this.sourceCache[n] = d, d;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(n, A, u, i) {
    const t = this;
    return this.getDependency("texture", u.index).then(function(o) {
      if (!o) return null;
      if (u.texCoord !== void 0 && u.texCoord > 0 && (o = o.clone(), o.channel = u.texCoord), t.extensions[Ne.KHR_TEXTURE_TRANSFORM]) {
        const l = u.extensions !== void 0 ? u.extensions[Ne.KHR_TEXTURE_TRANSFORM] : void 0;
        if (l) {
          const a = t.associations.get(o);
          o = t.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(o, l), t.associations.set(o, a);
        }
      }
      return i !== void 0 && (o.colorSpace = i), n[A] = o, o;
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
  assignFinalMaterial(n) {
    const A = n.geometry;
    let u = n.material;
    const i = A.attributes.tangent === void 0, t = A.attributes.color !== void 0, o = A.attributes.normal === void 0;
    if (n.isPoints) {
      const l = "PointsMaterial:" + u.uuid;
      let a = this.cache.get(l);
      a || (a = new cu(), ns.prototype.copy.call(a, u), a.color.copy(u.color), a.map = u.map, a.sizeAttenuation = !1, this.cache.add(l, a)), u = a;
    } else if (n.isLine) {
      const l = "LineBasicMaterial:" + u.uuid;
      let a = this.cache.get(l);
      a || (a = new bi(), ns.prototype.copy.call(a, u), a.color.copy(u.color), a.map = u.map, this.cache.add(l, a)), u = a;
    }
    if (i || t || o) {
      let l = "ClonedMaterial:" + u.uuid + ":";
      i && (l += "derivative-tangents:"), t && (l += "vertex-colors:"), o && (l += "flat-shading:");
      let a = this.cache.get(l);
      a || (a = u.clone(), t && (a.vertexColors = !0), o && (a.flatShading = !0), i && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(l, a), this.associations.set(a, this.associations.get(u))), u = a;
    }
    n.material = u;
  }
  getMaterialType() {
    return Fa;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(n) {
    const A = this, u = this.json, i = this.extensions, t = u.materials[n];
    let o;
    const l = {}, a = t.extensions || {}, h = [];
    if (a[Ne.KHR_MATERIALS_UNLIT]) {
      const f = i[Ne.KHR_MATERIALS_UNLIT];
      o = f.getMaterialType(), h.push(f.extendParams(l, t, A));
    } else {
      const f = t.pbrMetallicRoughness || {};
      if (l.color = new Dt(1, 1, 1), l.opacity = 1, Array.isArray(f.baseColorFactor)) {
        const m = f.baseColorFactor;
        l.color.setRGB(m[0], m[1], m[2], kt), l.opacity = m[3];
      }
      f.baseColorTexture !== void 0 && h.push(A.assignTexture(l, "map", f.baseColorTexture, tn)), l.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, l.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (h.push(A.assignTexture(l, "metalnessMap", f.metallicRoughnessTexture)), h.push(A.assignTexture(l, "roughnessMap", f.metallicRoughnessTexture))), o = this._invokeOne(function(m) {
        return m.getMaterialType && m.getMaterialType(n);
      }), h.push(Promise.all(this._invokeAll(function(m) {
        return m.extendMaterialParams && m.extendMaterialParams(n, l);
      })));
    }
    t.doubleSided === !0 && (l.side = Os);
    const d = t.alphaMode || fs.OPAQUE;
    if (d === fs.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, d === fs.MASK && (l.alphaTest = t.alphaCutoff !== void 0 ? t.alphaCutoff : 0.5)), t.normalTexture !== void 0 && o !== ar && (h.push(A.assignTexture(l, "normalMap", t.normalTexture)), l.normalScale = new Vn(1, 1), t.normalTexture.scale !== void 0)) {
      const f = t.normalTexture.scale;
      l.normalScale.set(f, f);
    }
    if (t.occlusionTexture !== void 0 && o !== ar && (h.push(A.assignTexture(l, "aoMap", t.occlusionTexture)), t.occlusionTexture.strength !== void 0 && (l.aoMapIntensity = t.occlusionTexture.strength)), t.emissiveFactor !== void 0 && o !== ar) {
      const f = t.emissiveFactor;
      l.emissive = new Dt().setRGB(f[0], f[1], f[2], kt);
    }
    return t.emissiveTexture !== void 0 && o !== ar && h.push(A.assignTexture(l, "emissiveMap", t.emissiveTexture, tn)), Promise.all(h).then(function() {
      const f = new o(l);
      return t.name && (f.name = t.name), $t(f, t), A.associations.set(f, { materials: n }), t.extensions && Mn(i, f, t), f;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(n) {
    const A = uu.sanitizeNodeName(n || "");
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
  loadGeometries(n) {
    const A = this, u = this.extensions, i = this.primitiveCache;
    function t(l) {
      return u[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l, A).then(function(a) {
        return aa(a, l, A);
      });
    }
    const o = [];
    for (let l = 0, a = n.length; l < a; l++) {
      const h = n[l], d = Lh(h), f = i[d];
      if (f)
        o.push(f.promise);
      else {
        let m;
        h.extensions && h.extensions[Ne.KHR_DRACO_MESH_COMPRESSION] ? m = t(h) : m = aa(new cr(), h, A), i[d] = { primitive: h, promise: m }, o.push(m);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(n) {
    const A = this, u = this.json, i = this.extensions, t = u.meshes[n], o = t.primitives, l = [];
    for (let a = 0, h = o.length; a < h; a++) {
      const d = o[a].material === void 0 ? Th(this.cache) : this.getDependency("material", o[a].material);
      l.push(d);
    }
    return l.push(A.loadGeometries(o)), Promise.all(l).then(function(a) {
      const h = a.slice(0, a.length - 1), d = a[a.length - 1], f = [];
      for (let v = 0, b = d.length; v < b; v++) {
        const C = d[v], E = o[v];
        let y;
        const I = h[v];
        if (E.mode === bt.TRIANGLES || E.mode === bt.TRIANGLE_STRIP || E.mode === bt.TRIANGLE_FAN || E.mode === void 0)
          y = t.isSkinnedMesh === !0 ? new hu(C, I) : new Qi(C, I), y.isSkinnedMesh === !0 && y.normalizeSkinWeights(), E.mode === bt.TRIANGLE_STRIP ? y.geometry = ra(y.geometry, ka) : E.mode === bt.TRIANGLE_FAN && (y.geometry = ra(y.geometry, _s));
        else if (E.mode === bt.LINES)
          y = new du(C, I);
        else if (E.mode === bt.LINE_STRIP)
          y = new Bi(C, I);
        else if (E.mode === bt.LINE_LOOP)
          y = new pu(C, I);
        else if (E.mode === bt.POINTS)
          y = new fu(C, I);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + E.mode);
        Object.keys(y.geometry.morphAttributes).length > 0 && Fh(y, t), y.name = A.createUniqueName(t.name || "mesh_" + n), $t(y, t), E.extensions && Mn(i, y, E), A.assignFinalMaterial(y), f.push(y);
      }
      for (let v = 0, b = f.length; v < b; v++)
        A.associations.set(f[v], {
          meshes: n,
          primitives: v
        });
      if (f.length === 1)
        return t.extensions && Mn(i, f[0], t), f[0];
      const m = new rs();
      t.extensions && Mn(i, m, t), A.associations.set(m, { meshes: n });
      for (let v = 0, b = f.length; v < b; v++)
        m.add(f[v]);
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(n) {
    let A;
    const u = this.json.cameras[n], i = u[u.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return u.type === "perspective" ? A = new La(Pa.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : u.type === "orthographic" && (A = new Ma(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), u.name && (A.name = this.createUniqueName(u.name)), $t(A, u), Promise.resolve(A);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(n) {
    const A = this.json.skins[n], u = [];
    for (let i = 0, t = A.joints.length; i < t; i++)
      u.push(this._loadNodeShallow(A.joints[i]));
    return A.inverseBindMatrices !== void 0 ? u.push(this.getDependency("accessor", A.inverseBindMatrices)) : u.push(null), Promise.all(u).then(function(i) {
      const t = i.pop(), o = i, l = [], a = [];
      for (let h = 0, d = o.length; h < d; h++) {
        const f = o[h];
        if (f) {
          l.push(f);
          const m = new jr();
          t !== null && m.fromArray(t.array, h * 16), a.push(m);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', A.joints[h]);
      }
      return new gu(l, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(n) {
    const A = this.json, u = this, i = A.animations[n], t = i.name ? i.name : "animation_" + n, o = [], l = [], a = [], h = [], d = [];
    for (let f = 0, m = i.channels.length; f < m; f++) {
      const v = i.channels[f], b = i.samplers[v.sampler], C = v.target, E = C.node, y = i.parameters !== void 0 ? i.parameters[b.input] : b.input, I = i.parameters !== void 0 ? i.parameters[b.output] : b.output;
      C.node !== void 0 && (o.push(this.getDependency("node", E)), l.push(this.getDependency("accessor", y)), a.push(this.getDependency("accessor", I)), h.push(b), d.push(C));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(l),
      Promise.all(a),
      Promise.all(h),
      Promise.all(d)
    ]).then(function(f) {
      const m = f[0], v = f[1], b = f[2], C = f[3], E = f[4], y = [];
      for (let I = 0, Q = m.length; I < Q; I++) {
        const _ = m[I], x = v[I], F = b[I], T = C[I], L = E[I];
        if (_ === void 0) continue;
        _.updateMatrix && _.updateMatrix();
        const W = u._createAnimationTracks(_, x, F, T, L);
        if (W)
          for (let J = 0; J < W.length; J++)
            y.push(W[J]);
      }
      return new mu(t, void 0, y);
    });
  }
  createNodeMesh(n) {
    const A = this.json, u = this, i = A.nodes[n];
    return i.mesh === void 0 ? null : u.getDependency("mesh", i.mesh).then(function(t) {
      const o = u._getNodeRef(u.meshCache, i.mesh, t);
      return i.weights !== void 0 && o.traverse(function(l) {
        if (l.isMesh)
          for (let a = 0, h = i.weights.length; a < h; a++)
            l.morphTargetInfluences[a] = i.weights[a];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(n) {
    const A = this.json, u = this, i = A.nodes[n], t = u._loadNodeShallow(n), o = [], l = i.children || [];
    for (let h = 0, d = l.length; h < d; h++)
      o.push(u.getDependency("node", l[h]));
    const a = i.skin === void 0 ? Promise.resolve(null) : u.getDependency("skin", i.skin);
    return Promise.all([
      t,
      Promise.all(o),
      a
    ]).then(function(h) {
      const d = h[0], f = h[1], m = h[2];
      m !== null && d.traverse(function(v) {
        v.isSkinnedMesh && v.bind(m, Mh);
      });
      for (let v = 0, b = f.length; v < b; v++)
        d.add(f[v]);
      return d;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(n) {
    const A = this.json, u = this.extensions, i = this;
    if (this.nodeCache[n] !== void 0)
      return this.nodeCache[n];
    const t = A.nodes[n], o = t.name ? i.createUniqueName(t.name) : "", l = [], a = i._invokeOne(function(h) {
      return h.createNodeMesh && h.createNodeMesh(n);
    });
    return a && l.push(a), t.camera !== void 0 && l.push(i.getDependency("camera", t.camera).then(function(h) {
      return i._getNodeRef(i.cameraCache, t.camera, h);
    })), i._invokeAll(function(h) {
      return h.createNodeAttachment && h.createNodeAttachment(n);
    }).forEach(function(h) {
      l.push(h);
    }), this.nodeCache[n] = Promise.all(l).then(function(h) {
      let d;
      if (t.isBone === !0 ? d = new vu() : h.length > 1 ? d = new rs() : h.length === 1 ? d = h[0] : d = new Wr(), d !== h[0])
        for (let f = 0, m = h.length; f < m; f++)
          d.add(h[f]);
      if (t.name && (d.userData.name = t.name, d.name = o), $t(d, t), t.extensions && Mn(u, d, t), t.matrix !== void 0) {
        const f = new jr();
        f.fromArray(t.matrix), d.applyMatrix4(f);
      } else
        t.translation !== void 0 && d.position.fromArray(t.translation), t.rotation !== void 0 && d.quaternion.fromArray(t.rotation), t.scale !== void 0 && d.scale.fromArray(t.scale);
      return i.associations.has(d) || i.associations.set(d, {}), i.associations.get(d).nodes = n, d;
    }), this.nodeCache[n];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(n) {
    const A = this.extensions, u = this.json.scenes[n], i = this, t = new rs();
    u.name && (t.name = i.createUniqueName(u.name)), $t(t, u), u.extensions && Mn(A, t, u);
    const o = u.nodes || [], l = [];
    for (let a = 0, h = o.length; a < h; a++)
      l.push(i.getDependency("node", o[a]));
    return Promise.all(l).then(function(a) {
      for (let d = 0, f = a.length; d < f; d++)
        t.add(a[d]);
      const h = (d) => {
        const f = /* @__PURE__ */ new Map();
        for (const [m, v] of i.associations)
          (m instanceof ns || m instanceof Qs) && f.set(m, v);
        return d.traverse((m) => {
          const v = i.associations.get(m);
          v != null && f.set(m, v);
        }), f;
      };
      return i.associations = h(t), t;
    });
  }
  _createAnimationTracks(n, A, u, i, t) {
    const o = [], l = n.name ? n.name : n.uuid, a = [];
    vn[t.path] === vn.weights ? n.traverse(function(m) {
      m.morphTargetInfluences && a.push(m.name ? m.name : m.uuid);
    }) : a.push(l);
    let h;
    switch (vn[t.path]) {
      case vn.weights:
        h = Ko;
        break;
      case vn.rotation:
        h = qo;
        break;
      case vn.position:
      case vn.scale:
        h = Ho;
        break;
      default:
        switch (u.itemSize) {
          case 1:
            h = Ko;
            break;
          case 2:
          case 3:
          default:
            h = Ho;
            break;
        }
        break;
    }
    const d = i.interpolation !== void 0 ? Dh[i.interpolation] : Ua, f = this._getArrayFromAccessor(u);
    for (let m = 0, v = a.length; m < v; m++) {
      const b = new h(
        a[m] + "." + vn[t.path],
        A.array,
        f,
        d
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(b), o.push(b);
    }
    return o;
  }
  _getArrayFromAccessor(n) {
    let A = n.array;
    if (n.normalized) {
      const u = ks(A.constructor), i = new Float32Array(A.length);
      for (let t = 0, o = A.length; t < o; t++)
        i[t] = A[t] * u;
      A = i;
    }
    return A;
  }
  _createCubicSplineTrackInterpolant(n) {
    n.createInterpolant = function(u) {
      const i = this instanceof qo ? kh : AA;
      return new i(this.times, this.values, this.getValueSize() / 3, u);
    }, n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Gh(p, n, A) {
  const u = n.attributes, i = new Na();
  if (u.POSITION !== void 0) {
    const l = A.json.accessors[u.POSITION], a = l.min, h = l.max;
    if (a !== void 0 && h !== void 0) {
      if (i.set(
        new en(a[0], a[1], a[2]),
        new en(h[0], h[1], h[2])
      ), l.normalized) {
        const d = ks(ur[l.componentType]);
        i.min.multiplyScalar(d), i.max.multiplyScalar(d);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const t = n.targets;
  if (t !== void 0) {
    const l = new en(), a = new en();
    for (let h = 0, d = t.length; h < d; h++) {
      const f = t[h];
      if (f.POSITION !== void 0) {
        const m = A.json.accessors[f.POSITION], v = m.min, b = m.max;
        if (v !== void 0 && b !== void 0) {
          if (a.setX(Math.max(Math.abs(v[0]), Math.abs(b[0]))), a.setY(Math.max(Math.abs(v[1]), Math.abs(b[1]))), a.setZ(Math.max(Math.abs(v[2]), Math.abs(b[2]))), m.normalized) {
            const C = ks(ur[m.componentType]);
            a.multiplyScalar(C);
          }
          l.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(l);
  }
  p.boundingBox = i;
  const o = new Oa();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, p.boundingSphere = o;
}
function aa(p, n, A) {
  const u = n.attributes, i = [];
  function t(o, l) {
    return A.getDependency("accessor", o).then(function(a) {
      p.setAttribute(l, a);
    });
  }
  for (const o in u) {
    const l = Ss[o] || o.toLowerCase();
    l in p.attributes || i.push(t(u[o], l));
  }
  if (n.indices !== void 0 && !p.index) {
    const o = A.getDependency("accessor", n.indices).then(function(l) {
      p.setIndex(l);
    });
    i.push(o);
  }
  return Bs.workingColorSpace !== kt && "COLOR_0" in u && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bs.workingColorSpace}" not supported.`), $t(p, n), Gh(p, n, A), Promise.all(i).then(function() {
    return n.targets !== void 0 ? Rh(p, n.targets, A) : p;
  });
}
const Oe = class Oe {
  static getInstance() {
    return Oe._instance === null && (Oe._instance = new Oe(), Oe._gltfLoader.setDRACOLoader(Oe._dracoLoader), Oe._dracoLoader.setDecoderPath(`${Oe._base}draco/`), Oe._ktx2Loader.setTranscoderPath(`${Oe._base}basis/`)), Oe._instance;
  }
  static initKTX2Loader(n, A) {
    Oe._ktx2Loader.detectSupport(n), Oe._base = A;
  }
  get loaderManager() {
    return Oe._loaderManager;
  }
  async loadTexture(n, A = !1) {
    return Oe._imageLoader.loadAsync(
      `${A ? `${Oe._base}${n}` : `${n}`}`
    );
  }
  async loadGPUTexture(n) {
    return Oe._ktx2Loader.loadAsync(`${Oe._base}${n}`);
  }
  async loadEnvironmentMap(n) {
    return Oe._ktx2Loader.loadAsync(`${Oe._base}${n}`);
  }
  async loadGLTFModel(n) {
    return Oe._gltfLoader.loadAsync(`${Oe._base}${n}`);
  }
  async parseGLTFModel(n, A) {
    return Oe._gltfLoader.parseAsync(n, A);
  }
};
tt(Oe, "_instance", null), tt(Oe, "_loaderManager", new Qu()), tt(Oe, "_dracoLoader", new rh(Oe._loaderManager)), tt(Oe, "_gltfLoader", new sh(Oe._loaderManager)), tt(Oe, "_ktx2Loader", new Vt(Oe._loaderManager)), tt(Oe, "_imageLoader", new Ra(Oe._loaderManager)), tt(Oe, "_base", "");
let Kr = Oe;
var It = Uint8Array, Ar = Uint16Array, Nh = Int32Array, lA = new It([
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
]), cA = new It([
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
]), Oh = new It([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), uA = function(p, n) {
  for (var A = new Ar(31), u = 0; u < 31; ++u)
    A[u] = n += 1 << p[u - 1];
  for (var i = new Nh(A[30]), u = 1; u < 30; ++u)
    for (var t = A[u]; t < A[u + 1]; ++t)
      i[t] = t - A[u] << 5 | u;
  return { b: A, r: i };
}, hA = uA(lA, 2), dA = hA.b, Vh = hA.r;
dA[28] = 258, Vh[258] = 28;
var Hh = uA(cA, 0), Kh = Hh.b, Ds = new Ar(32768);
for (var Xe = 0; Xe < 32768; ++Xe) {
  var Cn = (Xe & 43690) >> 1 | (Xe & 21845) << 1;
  Cn = (Cn & 52428) >> 2 | (Cn & 13107) << 2, Cn = (Cn & 61680) >> 4 | (Cn & 3855) << 4, Ds[Xe] = ((Cn & 65280) >> 8 | (Cn & 255) << 8) >> 1;
}
var qr = function(p, n, A) {
  for (var u = p.length, i = 0, t = new Ar(n); i < u; ++i)
    p[i] && ++t[p[i] - 1];
  var o = new Ar(n);
  for (i = 1; i < n; ++i)
    o[i] = o[i - 1] + t[i - 1] << 1;
  var l;
  if (A) {
    l = new Ar(1 << n);
    var a = 15 - n;
    for (i = 0; i < u; ++i)
      if (p[i])
        for (var h = i << 4 | p[i], d = n - p[i], f = o[p[i] - 1]++ << d, m = f | (1 << d) - 1; f <= m; ++f)
          l[Ds[f] >> a] = h;
  } else
    for (l = new Ar(u), i = 0; i < u; ++i)
      p[i] && (l[i] = Ds[o[p[i] - 1]++] >> 15 - p[i]);
  return l;
}, Xr = new It(288);
for (var Xe = 0; Xe < 144; ++Xe)
  Xr[Xe] = 8;
for (var Xe = 144; Xe < 256; ++Xe)
  Xr[Xe] = 9;
for (var Xe = 256; Xe < 280; ++Xe)
  Xr[Xe] = 7;
for (var Xe = 280; Xe < 288; ++Xe)
  Xr[Xe] = 8;
var pA = new It(32);
for (var Xe = 0; Xe < 32; ++Xe)
  pA[Xe] = 5;
var qh = /* @__PURE__ */ qr(Xr, 9, 1), Yh = /* @__PURE__ */ qr(pA, 5, 1), ms = function(p) {
  for (var n = p[0], A = 1; A < p.length; ++A)
    p[A] > n && (n = p[A]);
  return n;
}, Qt = function(p, n, A) {
  var u = n / 8 | 0;
  return (p[u] | p[u + 1] << 8) >> (n & 7) & A;
}, vs = function(p, n) {
  var A = n / 8 | 0;
  return (p[A] | p[A + 1] << 8 | p[A + 2] << 16) >> (n & 7);
}, Jh = function(p) {
  return (p + 7) / 8 | 0;
}, Hs = function(p, n, A) {
  return (n == null || n < 0) && (n = 0), (A == null || A > p.length) && (A = p.length), new It(p.subarray(n, A));
}, jh = [
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
], Bt = function(p, n, A) {
  var u = new Error(n || jh[p]);
  if (u.code = p, Error.captureStackTrace && Error.captureStackTrace(u, Bt), !A)
    throw u;
  return u;
}, Wh = function(p, n, A, u) {
  var i = p.length, t = u ? u.length : 0;
  if (!i || n.f && !n.l)
    return A || new It(0);
  var o = !A, l = o || n.i != 2, a = n.i;
  o && (A = new It(i * 3));
  var h = function(te) {
    var X = A.length;
    if (te > X) {
      var xe = new It(Math.max(X * 2, te));
      xe.set(A), A = xe;
    }
  }, d = n.f || 0, f = n.p || 0, m = n.b || 0, v = n.l, b = n.d, C = n.m, E = n.n, y = i * 8;
  do {
    if (!v) {
      d = Qt(p, f, 1);
      var I = Qt(p, f + 1, 3);
      if (f += 3, I)
        if (I == 1)
          v = qh, b = Yh, C = 9, E = 5;
        else if (I == 2) {
          var F = Qt(p, f, 31) + 257, T = Qt(p, f + 10, 15) + 4, L = F + Qt(p, f + 5, 31) + 1;
          f += 14;
          for (var W = new It(L), J = new It(19), ie = 0; ie < T; ++ie)
            J[Oh[ie]] = Qt(p, f + ie * 3, 7);
          f += T * 3;
          for (var M = ms(J), Z = (1 << M) - 1, Y = qr(J, M, 1), ie = 0; ie < L; ) {
            var oe = Y[Qt(p, f, Z)];
            f += oe & 15;
            var Q = oe >> 4;
            if (Q < 16)
              W[ie++] = Q;
            else {
              var ae = 0, H = 0;
              for (Q == 16 ? (H = 3 + Qt(p, f, 3), f += 2, ae = W[ie - 1]) : Q == 17 ? (H = 3 + Qt(p, f, 7), f += 3) : Q == 18 && (H = 11 + Qt(p, f, 127), f += 7); H--; )
                W[ie++] = ae;
            }
          }
          var j = W.subarray(0, F), V = W.subarray(F);
          C = ms(j), E = ms(V), v = qr(j, C, 1), b = qr(V, E, 1);
        } else
          Bt(1);
      else {
        var Q = Jh(f) + 4, _ = p[Q - 4] | p[Q - 3] << 8, x = Q + _;
        if (x > i) {
          a && Bt(0);
          break;
        }
        l && h(m + _), A.set(p.subarray(Q, x), m), n.b = m += _, n.p = f = x * 8, n.f = d;
        continue;
      }
      if (f > y) {
        a && Bt(0);
        break;
      }
    }
    l && h(m + 131072);
    for (var re = (1 << C) - 1, S = (1 << E) - 1, N = f; ; N = f) {
      var ae = v[vs(p, f) & re], P = ae >> 4;
      if (f += ae & 15, f > y) {
        a && Bt(0);
        break;
      }
      if (ae || Bt(2), P < 256)
        A[m++] = P;
      else if (P == 256) {
        N = f, v = null;
        break;
      } else {
        var O = P - 254;
        if (P > 264) {
          var ie = P - 257, G = lA[ie];
          O = Qt(p, f, (1 << G) - 1) + dA[ie], f += G;
        }
        var K = b[vs(p, f) & S], q = K >> 4;
        K || Bt(3), f += K & 15;
        var V = Kh[q];
        if (q > 3) {
          var G = cA[q];
          V += vs(p, f) & (1 << G) - 1, f += G;
        }
        if (f > y) {
          a && Bt(0);
          break;
        }
        l && h(m + 131072);
        var z = m + O;
        if (m < V) {
          var ue = t - V, ve = Math.min(V, z);
          for (ue + m < 0 && Bt(3); m < ve; ++m)
            A[m] = u[ue + m];
        }
        for (; m < z; ++m)
          A[m] = A[m - V];
      }
    }
    n.l = v, n.p = N, n.b = m, n.f = d, v && (d = 1, n.m = C, n.d = b, n.n = E);
  } while (!d);
  return m != A.length && o ? Hs(A, 0, m) : A.subarray(0, m);
}, Xh = /* @__PURE__ */ new It(0), Ot = function(p, n) {
  return p[n] | p[n + 1] << 8;
}, St = function(p, n) {
  return (p[n] | p[n + 1] << 8 | p[n + 2] << 16 | p[n + 3] << 24) >>> 0;
}, Cs = function(p, n) {
  return St(p, n) + St(p, n + 4) * 4294967296;
};
function zh(p, n) {
  return Wh(p, { i: 2 }, n.out, n.dictionary);
}
var Ts = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Zh = 0;
try {
  Ts.decode(Xh, { stream: !0 }), Zh = 1;
} catch {
}
var $h = function(p) {
  for (var n = "", A = 0; ; ) {
    var u = p[A++], i = (u > 127) + (u > 223) + (u > 239);
    if (A + i > p.length)
      return { s: n, r: Hs(p, A - 1) };
    i ? i == 3 ? (u = ((u & 15) << 18 | (p[A++] & 63) << 12 | (p[A++] & 63) << 6 | p[A++] & 63) - 65536, n += String.fromCharCode(55296 | u >> 10, 56320 | u & 1023)) : i & 1 ? n += String.fromCharCode((u & 31) << 6 | p[A++] & 63) : n += String.fromCharCode((u & 15) << 12 | (p[A++] & 63) << 6 | p[A++] & 63) : n += String.fromCharCode(u);
  }
};
function ed(p, n) {
  if (n) {
    for (var A = "", u = 0; u < p.length; u += 16384)
      A += String.fromCharCode.apply(null, p.subarray(u, u + 16384));
    return A;
  } else {
    if (Ts)
      return Ts.decode(p);
    var i = $h(p), t = i.s, A = i.r;
    return A.length && Bt(8), t;
  }
}
var td = function(p, n) {
  return n + 30 + Ot(p, n + 26) + Ot(p, n + 28);
}, nd = function(p, n, A) {
  var u = Ot(p, n + 28), i = ed(p.subarray(n + 46, n + 46 + u), !(Ot(p, n + 8) & 2048)), t = n + 46 + u, o = St(p, n + 20), l = A && o == 4294967295 ? rd(p, t) : [o, St(p, n + 24), St(p, n + 42)], a = l[0], h = l[1], d = l[2];
  return [Ot(p, n + 10), a, h, i, t + Ot(p, n + 30) + Ot(p, n + 32), d];
}, rd = function(p, n) {
  for (; Ot(p, n) != 1; n += 4 + Ot(p, n + 2))
    ;
  return [Cs(p, n + 12), Cs(p, n + 4), Cs(p, n + 20)];
};
function id(p, n) {
  for (var A = {}, u = p.length - 22; St(p, u) != 101010256; --u)
    (!u || p.length - u > 65558) && Bt(13);
  var i = Ot(p, u + 8);
  if (!i)
    return {};
  var t = St(p, u + 16), o = t == 4294967295 || i == 65535;
  if (o) {
    var l = St(p, u - 12);
    o = St(p, l) == 101075792, o && (i = St(p, l + 32), t = St(p, l + 48));
  }
  for (var a = 0; a < i; ++a) {
    var h = nd(p, t, o), d = h[0], f = h[1], m = h[2], v = h[3], b = h[4], C = h[5], E = td(p, C);
    t = b, d ? d == 8 ? A[v] = zh(p.subarray(E, E + f), { out: new It(m) }) : Bt(14, "unknown compression type " + d) : A[v] = Hs(p, E, E + f);
  }
  return A;
}
class Aa {
  constructor(n) {
    tt(this, "_files", {});
    this.archiveUrl = n;
  }
  get files() {
    return this._files;
  }
  async extract(n = 5, A = 1e3) {
    let u = 0, i = !1, t;
    for (; u < n && !i; )
      try {
        if (t = await fetch(this.archiveUrl), !t.ok)
          throw new Error(`Не удалось загрузить архив: ${t.statusText}`);
        i = !0;
      } catch (l) {
        if (u++, console.warn(`Попытка ${u} не удалась: ${l.message}`), u < n)
          await new Promise((a) => setTimeout(a, A));
        else
          throw new Error(`Не удалось загрузить архив после ${n} попыток`);
      }
    const o = new Uint8Array(await t.arrayBuffer());
    this._files = id(o);
  }
  getFileContent(n) {
    const A = this._files[n];
    if (!A)
      throw new Error(`File ${n} not found in archive.`);
    return A;
  }
}
const sd = /* @__PURE__ */ new Map(), la = /* @__PURE__ */ new Map();
var od = Object.defineProperty, ad = Object.getOwnPropertyDescriptor, Ad = (p, n, A, u) => {
  for (var i = u > 1 ? void 0 : u ? ad(n, A) : n, t = p.length - 1, o; t >= 0; t--)
    (o = p[t]) && (i = (u ? o(n, A, i) : o(i)) || i);
  return u && i && od(n, A, i), i;
};
let Rs = class {
  init(p, n) {
    Kr.initKTX2Loader(p, n);
  }
  async load(p, n) {
    const A = Kr.getInstance();
    await this.loadModelResources(A, p), await this.loadTextureResources(A, n);
  }
  async loadModelResources(p, n) {
    const A = new Aa(n);
    try {
      await A.extract();
      for (const u in A.files) {
        const i = A.getFileContent(u), t = new Blob([i]), o = URL.createObjectURL(t), l = await p.parseGLTFModel(i.buffer, o);
        sd.set(u.split(".")[0], l);
      }
    } catch (u) {
      console.error(u.message);
    }
  }
  async loadTextureResources(p, n) {
    const A = new Aa(n);
    try {
      await A.extract();
      for (const u in A.files) {
        const i = A.getFileContent(u);
        if (u.includes(".ktx2")) {
          const o = await new Promise((l, a) => {
            Kr._ktx2Loader.parse(i.buffer, l, a);
          });
          la.set(u.split(".")[0], o);
        } else {
          const o = new Blob([i], {
            type: "application/octet-stream"
          }), l = URL.createObjectURL(o), a = await p.loadTexture(l);
          la.set(u.split(".")[0], a), URL.revokeObjectURL(l);
        }
      }
    } catch (u) {
      console.error(u.message);
    }
  }
};
Rs = Ad([
  Ka()
], Rs);
function gp(p, n, A) {
  return new Ku(async (u) => {
    const i = A.baseOpt;
    u(ir.BaseOpt).toConstantValue(i);
    const t = A.commonDebugOpt;
    u(ir.CommonDebugOpt).toConstantValue(t);
    const o = { value: 0 };
    u(ir.PassedTime).toConstantValue(o);
    const l = new Va({
      canvas: p,
      antialias: i.antialias,
      powerPreference: "high-performance"
    });
    l.setSize(window.innerWidth, window.innerHeight), l.outputColorSpace = i.colorSpace, l.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const a = new La(
      i.camera.fov,
      window.innerWidth / window.innerHeight,
      i.camera.near,
      i.camera.far
    );
    a.position.copy(i.camera.position);
    const h = {
      renderer: l,
      scene: new Ha(),
      camera: a
    };
    u(ir.ThreeJsBase).toConstantValue(h);
    const d = new Rs();
    d.init(l, n), u(ir.ResourceLoader).toConstantValue(d);
    const f = new Gu({ title: "Debug", width: 300 });
    u(ir.GUI).toConstantValue(f), f.addFolder("Performance");
  });
}
async function mp(p) {
  try {
    const n = await fetch(p);
    if (!n.ok)
      throw new Error(`Response status: ${n.status}`);
    return await n.json();
  } catch (n) {
    console.error(n.message);
  }
}
const Gn = class Gn {
  static async task(n) {
    return new Promise((A) => {
      Gn.resolvers.set(this._idCounter++, {
        ms: n / 1e3,
        resolver: A
      });
    });
  }
  static update(n) {
    Gn.resolvers.forEach((A, u) => {
      A.ms -= n, A.ms <= 0 && (A.resolver(), Gn.resolvers.delete(u));
    });
  }
};
tt(Gn, "_idCounter", 0), tt(Gn, "resolvers", /* @__PURE__ */ new Map());
let Fs = Gn;
function ld(p, n) {
  const A = p.folders.find((u) => u._title === n);
  if (!A)
    throw new Error(`Folder with name ${n} not found`);
  return A;
}
function vp(p, n, A, u = "XYZ") {
  const i = p.toArray(), t = n.toArray(), o = i.map((l, a) => l + (t[a] - l) * A);
  return new xu(o[0], o[1], o[2], u);
}
async function Cp(p) {
  return new Promise((n) => {
    setTimeout(() => {
      n();
    }, p);
  });
}
function Ip(p, n) {
  const A = p.frames.find(
    (a) => a.filename.toLowerCase() === n.toLowerCase()
  );
  if (!A) throw new Error(`Frame with id ${n} not found in atlas config`);
  const { x: u, y: i, h: t } = A.frame, { size: o } = p.meta, l = i / o.h;
  return new Vn(u / o.w, l);
}
function Ep(p) {
  return p.x * p.x + p.y * p.y + p.z * p.z;
}
function wp(p, n, A, u, i) {
  return (p - n) / (A - n) * (i - u) + u;
}
var Vr = { exports: {} };
/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */
var cd = Vr.exports, ca;
function ud() {
  return ca || (ca = 1, function(p, n) {
    (function(A, u) {
      u(n);
    })(cd, function(A) {
      class u {
        /**
         * @hidden
         */
        constructor(e) {
          const [r, c] = e.split("-"), g = r.split(".");
          this.major = parseInt(g[0], 10), this.minor = parseInt(g[1], 10), this.patch = parseInt(g[2], 10), this.prerelease = c ?? null;
        }
        toString() {
          const e = [this.major, this.minor, this.patch].join(".");
          return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
        }
      }
      class i {
        constructor(e) {
          this.controller_ = e;
        }
        get element() {
          return this.controller_.view.element;
        }
        get disabled() {
          return this.controller_.viewProps.get("disabled");
        }
        set disabled(e) {
          this.controller_.viewProps.set("disabled", e);
        }
        get hidden() {
          return this.controller_.viewProps.get("hidden");
        }
        set hidden(e) {
          this.controller_.viewProps.set("hidden", e);
        }
        dispose() {
          this.controller_.viewProps.set("disposed", !0);
        }
      }
      class t {
        constructor(e) {
          this.target = e;
        }
      }
      class o extends t {
        constructor(e, r, c, g) {
          super(e), this.value = r, this.presetKey = c, this.last = g ?? !0;
        }
      }
      class l extends t {
        constructor(e, r, c) {
          super(e), this.value = r, this.presetKey = c;
        }
      }
      class a extends t {
        constructor(e, r) {
          super(e), this.expanded = r;
        }
      }
      class h extends t {
        constructor(e, r) {
          super(e), this.index = r;
        }
      }
      function d(s) {
        return s;
      }
      function f(s) {
        return s == null;
      }
      function m(s, e) {
        if (s.length !== e.length)
          return !1;
        for (let r = 0; r < s.length; r++)
          if (s[r] !== e[r])
            return !1;
        return !0;
      }
      function v(s, e) {
        let r = s;
        do {
          const c = Object.getOwnPropertyDescriptor(r, e);
          if (c && (c.set !== void 0 || c.writable === !0))
            return !0;
          r = Object.getPrototypeOf(r);
        } while (r !== null);
        return !1;
      }
      const b = {
        alreadydisposed: () => "View has been already disposed",
        invalidparams: (s) => `Invalid parameters for '${s.name}'`,
        nomatchingcontroller: (s) => `No matching controller for '${s.key}'`,
        nomatchingview: (s) => `No matching view for '${JSON.stringify(s.params)}'`,
        notbindable: () => "Value is not bindable",
        propertynotfound: (s) => `Property '${s.name}' not found`,
        shouldneverhappen: () => "This error should never happen"
      };
      class C {
        static alreadyDisposed() {
          return new C({ type: "alreadydisposed" });
        }
        static notBindable() {
          return new C({
            type: "notbindable"
          });
        }
        static propertyNotFound(e) {
          return new C({
            type: "propertynotfound",
            context: {
              name: e
            }
          });
        }
        static shouldNeverHappen() {
          return new C({ type: "shouldneverhappen" });
        }
        constructor(e) {
          var r;
          this.message = (r = b[e.type](e.context)) !== null && r !== void 0 ? r : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = e.type;
        }
      }
      class E {
        constructor(e, r, c) {
          this.obj_ = e, this.key_ = r, this.presetKey_ = c ?? r;
        }
        static isBindable(e) {
          return !(e === null || typeof e != "object" && typeof e != "function");
        }
        get key() {
          return this.key_;
        }
        get presetKey() {
          return this.presetKey_;
        }
        read() {
          return this.obj_[this.key_];
        }
        write(e) {
          this.obj_[this.key_] = e;
        }
        writeProperty(e, r) {
          const c = this.read();
          if (!E.isBindable(c))
            throw C.notBindable();
          if (!(e in c))
            throw C.propertyNotFound(e);
          c[e] = r;
        }
      }
      class y extends i {
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        get title() {
          var e;
          return (e = this.controller_.valueController.props.get("title")) !== null && e !== void 0 ? e : "";
        }
        set title(e) {
          this.controller_.valueController.props.set("title", e);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.controller_.valueController.emitter.on(e, () => {
            c(new t(this));
          }), this;
        }
      }
      class I {
        constructor() {
          this.observers_ = {};
        }
        on(e, r) {
          let c = this.observers_[e];
          return c || (c = this.observers_[e] = []), c.push({
            handler: r
          }), this;
        }
        off(e, r) {
          const c = this.observers_[e];
          return c && (this.observers_[e] = c.filter((g) => g.handler !== r)), this;
        }
        emit(e, r) {
          const c = this.observers_[e];
          c && c.forEach((g) => {
            g.handler(r);
          });
        }
      }
      const Q = "tp";
      function _(s) {
        return (r, c) => [
          Q,
          "-",
          s,
          "v",
          r ? `_${r}` : "",
          c ? `-${c}` : ""
        ].join("");
      }
      function x(s, e) {
        return (r) => e(s(r));
      }
      function F(s) {
        return s.rawValue;
      }
      function T(s, e) {
        s.emitter.on("change", x(F, e)), e(s.rawValue);
      }
      function L(s, e, r) {
        T(s.value(e), r);
      }
      function W(s, e, r) {
        r ? s.classList.add(e) : s.classList.remove(e);
      }
      function J(s, e) {
        return (r) => {
          W(s, e, r);
        };
      }
      function ie(s, e) {
        T(s, (r) => {
          e.textContent = r ?? "";
        });
      }
      const M = _("btn");
      class Z {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(M()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("button");
          c.classList.add(M("b")), r.viewProps.bindDisabled(c), this.element.appendChild(c), this.buttonElement = c;
          const g = e.createElement("div");
          g.classList.add(M("t")), ie(r.props.value("title"), g), this.buttonElement.appendChild(g);
        }
      }
      class Y {
        constructor(e, r) {
          this.emitter = new I(), this.onClick_ = this.onClick_.bind(this), this.props = r.props, this.viewProps = r.viewProps, this.view = new Z(e, {
            props: this.props,
            viewProps: this.viewProps
          }), this.view.buttonElement.addEventListener("click", this.onClick_);
        }
        onClick_() {
          this.emitter.emit("click", {
            sender: this
          });
        }
      }
      class oe {
        constructor(e, r) {
          var c;
          this.constraint_ = r == null ? void 0 : r.constraint, this.equals_ = (c = r == null ? void 0 : r.equals) !== null && c !== void 0 ? c : (g, w) => g === w, this.emitter = new I(), this.rawValue_ = e;
        }
        get constraint() {
          return this.constraint_;
        }
        get rawValue() {
          return this.rawValue_;
        }
        set rawValue(e) {
          this.setRawValue(e, {
            forceEmit: !1,
            last: !0
          });
        }
        setRawValue(e, r) {
          const c = r ?? {
            forceEmit: !1,
            last: !0
          }, g = this.constraint_ ? this.constraint_.constrain(e) : e, w = this.rawValue_;
          this.equals_(w, g) && !c.forceEmit || (this.emitter.emit("beforechange", {
            sender: this
          }), this.rawValue_ = g, this.emitter.emit("change", {
            options: c,
            previousRawValue: w,
            rawValue: g,
            sender: this
          }));
        }
      }
      class ae {
        constructor(e) {
          this.emitter = new I(), this.value_ = e;
        }
        get rawValue() {
          return this.value_;
        }
        set rawValue(e) {
          this.setRawValue(e, {
            forceEmit: !1,
            last: !0
          });
        }
        setRawValue(e, r) {
          const c = r ?? {
            forceEmit: !1,
            last: !0
          }, g = this.value_;
          g === e && !c.forceEmit || (this.emitter.emit("beforechange", {
            sender: this
          }), this.value_ = e, this.emitter.emit("change", {
            options: c,
            previousRawValue: g,
            rawValue: this.value_,
            sender: this
          }));
        }
      }
      function H(s, e) {
        const r = e == null ? void 0 : e.constraint, c = e == null ? void 0 : e.equals;
        return !r && !c ? new ae(s) : new oe(s, e);
      }
      class j {
        constructor(e) {
          this.emitter = new I(), this.valMap_ = e;
          for (const r in this.valMap_)
            this.valMap_[r].emitter.on("change", () => {
              this.emitter.emit("change", {
                key: r,
                sender: this
              });
            });
        }
        static createCore(e) {
          return Object.keys(e).reduce((c, g) => Object.assign(c, {
            [g]: H(e[g])
          }), {});
        }
        static fromObject(e) {
          const r = this.createCore(e);
          return new j(r);
        }
        get(e) {
          return this.valMap_[e].rawValue;
        }
        set(e, r) {
          this.valMap_[e].rawValue = r;
        }
        value(e) {
          return this.valMap_[e];
        }
      }
      function V(s, e) {
        const c = Object.keys(e).reduce((g, w) => {
          if (g === void 0)
            return;
          const D = e[w], ne = D(s[w]);
          return ne.succeeded ? Object.assign(Object.assign({}, g), { [w]: ne.value }) : void 0;
        }, {});
        return c;
      }
      function re(s, e) {
        return s.reduce((r, c) => {
          if (r === void 0)
            return;
          const g = e(c);
          if (!(!g.succeeded || g.value === void 0))
            return [...r, g.value];
        }, []);
      }
      function S(s) {
        return s === null ? !1 : typeof s == "object";
      }
      function N(s) {
        return (e) => (r) => {
          if (!e && r === void 0)
            return {
              succeeded: !1,
              value: void 0
            };
          if (e && r === void 0)
            return {
              succeeded: !0,
              value: void 0
            };
          const c = s(r);
          return c !== void 0 ? {
            succeeded: !0,
            value: c
          } : {
            succeeded: !1,
            value: void 0
          };
        };
      }
      function P(s) {
        return {
          custom: (e) => N(e)(s),
          boolean: N((e) => typeof e == "boolean" ? e : void 0)(s),
          number: N((e) => typeof e == "number" ? e : void 0)(s),
          string: N((e) => typeof e == "string" ? e : void 0)(s),
          function: N((e) => typeof e == "function" ? e : void 0)(s),
          constant: (e) => N((r) => r === e ? e : void 0)(s),
          raw: N((e) => e)(s),
          object: (e) => N((r) => {
            if (S(r))
              return V(r, e);
          })(s),
          array: (e) => N((r) => {
            if (Array.isArray(r))
              return re(r, e);
          })(s)
        };
      }
      const O = {
        optional: P(!0),
        required: P(!1)
      };
      function G(s, e) {
        const r = O.required.object(e)(s);
        return r.succeeded ? r.value : void 0;
      }
      function K(s) {
        console.warn([
          `Missing '${s.key}' of ${s.target} in ${s.place}.`,
          "Please rebuild plugins with the latest core package."
        ].join(" "));
      }
      function q(s) {
        return s && s.parentElement && s.parentElement.removeChild(s), null;
      }
      class z {
        constructor(e) {
          this.value_ = e;
        }
        static create(e) {
          return [
            new z(e),
            (r, c) => {
              e.setRawValue(r, c);
            }
          ];
        }
        get emitter() {
          return this.value_.emitter;
        }
        get rawValue() {
          return this.value_.rawValue;
        }
      }
      const ue = _("");
      function ve(s, e) {
        return J(s, ue(void 0, e));
      }
      class te extends j {
        constructor(e) {
          var r;
          super(e), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = z.create(H(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (r = this.get("parent")) === null || r === void 0 || r.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
        }
        static create(e) {
          var r, c, g;
          const w = e ?? {};
          return new te(j.createCore({
            disabled: (r = w.disabled) !== null && r !== void 0 ? r : !1,
            disposed: !1,
            hidden: (c = w.hidden) !== null && c !== void 0 ? c : !1,
            parent: (g = w.parent) !== null && g !== void 0 ? g : null
          }));
        }
        get globalDisabled() {
          return this.globalDisabled_;
        }
        bindClassModifiers(e) {
          T(this.globalDisabled_, ve(e, "disabled")), L(this, "hidden", ve(e, "hidden"));
        }
        bindDisabled(e) {
          T(this.globalDisabled_, (r) => {
            e.disabled = r;
          });
        }
        bindTabIndex(e) {
          T(this.globalDisabled_, (r) => {
            e.tabIndex = r ? -1 : 0;
          });
        }
        handleDispose(e) {
          this.value("disposed").emitter.on("change", (r) => {
            r && e();
          });
        }
        getGlobalDisabled_() {
          const e = this.get("parent");
          return (e ? e.globalDisabled.rawValue : !1) || this.get("disabled");
        }
        updateGlobalDisabled_() {
          this.setGlobalDisabled_(this.getGlobalDisabled_());
        }
        onDisabledChange_() {
          this.updateGlobalDisabled_();
        }
        onParentGlobalDisabledChange_() {
          this.updateGlobalDisabled_();
        }
        onParentChange_(e) {
          var r;
          const c = e.previousRawValue;
          c == null || c.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (r = this.get("parent")) === null || r === void 0 || r.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
        }
      }
      function X() {
        return ["veryfirst", "first", "last", "verylast"];
      }
      const xe = _(""), De = {
        veryfirst: "vfst",
        first: "fst",
        last: "lst",
        verylast: "vlst"
      };
      class he {
        constructor(e) {
          this.parent_ = null, this.blade = e.blade, this.view = e.view, this.viewProps = e.viewProps;
          const r = this.view.element;
          this.blade.value("positions").emitter.on("change", () => {
            X().forEach((c) => {
              r.classList.remove(xe(void 0, De[c]));
            }), this.blade.get("positions").forEach((c) => {
              r.classList.add(xe(void 0, De[c]));
            });
          }), this.viewProps.handleDispose(() => {
            q(r);
          });
        }
        get parent() {
          return this.parent_;
        }
        set parent(e) {
          if (this.parent_ = e, !("parent" in this.viewProps.valMap_)) {
            K({
              key: "parent",
              target: te.name,
              place: "BladeController.parent"
            });
            return;
          }
          this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
        }
      }
      const pe = "http://www.w3.org/2000/svg";
      function Qe(s) {
        s.offsetHeight;
      }
      function se(s, e) {
        const r = s.style.transition;
        s.style.transition = "none", e(), s.style.transition = r;
      }
      function Ie(s) {
        return s.ontouchstart !== void 0;
      }
      function me() {
        return globalThis;
      }
      function ee() {
        return me().document;
      }
      function Be(s) {
        const e = s.ownerDocument.defaultView;
        return e && "document" in e ? s.getContext("2d", {
          willReadFrequently: !0
        }) : null;
      }
      const Ce = {
        check: '<path d="M2 8l4 4l8 -8"/>',
        dropdown: '<path d="M5 7h6l-3 3 z"/>',
        p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
      };
      function Ee(s, e) {
        const r = s.createElementNS(pe, "svg");
        return r.innerHTML = Ce[e], r;
      }
      function ge(s, e, r) {
        s.insertBefore(e, s.children[r]);
      }
      function Ve(s) {
        s.parentElement && s.parentElement.removeChild(s);
      }
      function Fe(s) {
        for (; s.children.length > 0; )
          s.removeChild(s.children[0]);
      }
      function we(s) {
        for (; s.childNodes.length > 0; )
          s.removeChild(s.childNodes[0]);
      }
      function Te(s) {
        return s.relatedTarget ? s.relatedTarget : "explicitOriginalTarget" in s ? s.explicitOriginalTarget : null;
      }
      const Pe = _("lbl");
      function je(s, e) {
        const r = s.createDocumentFragment();
        return e.split(`
`).map((g) => s.createTextNode(g)).forEach((g, w) => {
          w > 0 && r.appendChild(s.createElement("br")), r.appendChild(g);
        }), r;
      }
      class B {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Pe()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(Pe("l")), L(r.props, "label", (w) => {
            f(w) ? this.element.classList.add(Pe(void 0, "nol")) : (this.element.classList.remove(Pe(void 0, "nol")), we(c), c.appendChild(je(e, w)));
          }), this.element.appendChild(c), this.labelElement = c;
          const g = e.createElement("div");
          g.classList.add(Pe("v")), this.element.appendChild(g), this.valueElement = g;
        }
      }
      class k extends he {
        constructor(e, r) {
          const c = r.valueController.viewProps;
          super(Object.assign(Object.assign({}, r), { view: new B(e, {
            props: r.props,
            viewProps: c
          }), viewProps: c })), this.props = r.props, this.valueController = r.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
        }
      }
      const R = {
        id: "button",
        type: "blade",
        accept(s) {
          const e = O, r = G(s, {
            title: e.required.string,
            view: e.required.constant("button"),
            label: e.optional.string
          });
          return r ? { params: r } : null;
        },
        controller(s) {
          return new k(s.document, {
            blade: s.blade,
            props: j.fromObject({
              label: s.params.label
            }),
            valueController: new Y(s.document, {
              props: j.fromObject({
                title: s.params.title
              }),
              viewProps: s.viewProps
            })
          });
        },
        api(s) {
          return !(s.controller instanceof k) || !(s.controller.valueController instanceof Y) ? null : new y(s.controller);
        }
      };
      class U extends he {
        constructor(e) {
          super(e), this.value = e.value;
        }
      }
      function le() {
        return new j({
          positions: H([], {
            equals: m
          })
        });
      }
      class _e extends j {
        constructor(e) {
          super(e);
        }
        static create(e) {
          const r = {
            completed: !0,
            expanded: e,
            expandedHeight: null,
            shouldFixHeight: !1,
            temporaryExpanded: null
          }, c = j.createCore(r);
          return new _e(c);
        }
        get styleExpanded() {
          var e;
          return (e = this.get("temporaryExpanded")) !== null && e !== void 0 ? e : this.get("expanded");
        }
        get styleHeight() {
          if (!this.styleExpanded)
            return "0";
          const e = this.get("expandedHeight");
          return this.get("shouldFixHeight") && !f(e) ? `${e}px` : "auto";
        }
        bindExpandedClass(e, r) {
          const c = () => {
            this.styleExpanded ? e.classList.add(r) : e.classList.remove(r);
          };
          L(this, "expanded", c), L(this, "temporaryExpanded", c);
        }
        cleanUpTransition() {
          this.set("shouldFixHeight", !1), this.set("expandedHeight", null), this.set("completed", !0);
        }
      }
      function Re(s, e) {
        let r = 0;
        return se(e, () => {
          s.set("expandedHeight", null), s.set("temporaryExpanded", !0), Qe(e), r = e.clientHeight, s.set("temporaryExpanded", null), Qe(e);
        }), r;
      }
      function ce(s, e) {
        e.style.height = s.styleHeight;
      }
      function $(s, e) {
        s.value("expanded").emitter.on("beforechange", () => {
          if (s.set("completed", !1), f(s.get("expandedHeight"))) {
            const r = Re(s, e);
            r > 0 && s.set("expandedHeight", r);
          }
          s.set("shouldFixHeight", !0), Qe(e);
        }), s.emitter.on("change", () => {
          ce(s, e);
        }), ce(s, e), e.addEventListener("transitionend", (r) => {
          r.propertyName === "height" && s.cleanUpTransition();
        });
      }
      class Ae extends i {
        constructor(e, r) {
          super(e), this.rackApi_ = r;
        }
      }
      function de(s, e) {
        return s.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
      }
      function fe(s, e) {
        return s.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
      }
      function ke(s, e) {
        const r = e ?? {};
        return s.addBlade(Object.assign(Object.assign({}, r), { view: "separator" }));
      }
      function Le(s, e) {
        return s.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
      }
      class Me {
        constructor(e) {
          this.emitter = new I(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = e;
        }
        get items() {
          return this.items_;
        }
        allItems() {
          return Array.from(this.cache_);
        }
        find(e) {
          for (const r of this.allItems())
            if (e(r))
              return r;
          return null;
        }
        includes(e) {
          return this.cache_.has(e);
        }
        add(e, r) {
          if (this.includes(e))
            throw C.shouldNeverHappen();
          const c = r !== void 0 ? r : this.items_.length;
          this.items_.splice(c, 0, e), this.cache_.add(e);
          const g = this.extract_(e);
          g && (g.emitter.on("add", this.onSubListAdd_), g.emitter.on("remove", this.onSubListRemove_), g.allItems().forEach((w) => {
            this.cache_.add(w);
          })), this.emitter.emit("add", {
            index: c,
            item: e,
            root: this,
            target: this
          });
        }
        remove(e) {
          const r = this.items_.indexOf(e);
          if (r < 0)
            return;
          this.items_.splice(r, 1), this.cache_.delete(e);
          const c = this.extract_(e);
          c && (c.emitter.off("add", this.onSubListAdd_), c.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", {
            index: r,
            item: e,
            root: this,
            target: this
          });
        }
        onSubListAdd_(e) {
          this.cache_.add(e.item), this.emitter.emit("add", {
            index: e.index,
            item: e.item,
            root: this,
            target: e.target
          });
        }
        onSubListRemove_(e) {
          this.cache_.delete(e.item), this.emitter.emit("remove", {
            index: e.index,
            item: e.item,
            root: this,
            target: e.target
          });
        }
      }
      class Ue extends i {
        constructor(e) {
          super(e), this.onBindingChange_ = this.onBindingChange_.bind(this), this.emitter_ = new I(), this.controller_.binding.emitter.on("change", this.onBindingChange_);
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
        refresh() {
          this.controller_.binding.read();
        }
        onBindingChange_(e) {
          const r = e.sender.target.read();
          this.emitter_.emit("change", {
            event: new o(this, r, this.controller_.binding.target.presetKey, e.options.last)
          });
        }
      }
      class nt extends k {
        constructor(e, r) {
          super(e, r), this.binding = r.binding;
        }
      }
      class Je extends i {
        constructor(e) {
          super(e), this.onBindingUpdate_ = this.onBindingUpdate_.bind(this), this.emitter_ = new I(), this.controller_.binding.emitter.on("update", this.onBindingUpdate_);
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
        refresh() {
          this.controller_.binding.read();
        }
        onBindingUpdate_(e) {
          const r = e.sender.target.read();
          this.emitter_.emit("update", {
            event: new l(this, r, this.controller_.binding.target.presetKey)
          });
        }
      }
      class He extends k {
        constructor(e, r) {
          super(e, r), this.binding = r.binding, this.viewProps.bindDisabled(this.binding.ticker), this.viewProps.handleDispose(() => {
            this.binding.dispose();
          });
        }
      }
      function ft(s) {
        return s instanceof Ze ? s.apiSet_ : s instanceof Ae ? s.rackApi_.apiSet_ : null;
      }
      function rt(s, e) {
        const r = s.find((c) => c.controller_ === e);
        if (!r)
          throw C.shouldNeverHappen();
        return r;
      }
      function Ye(s, e, r) {
        if (!E.isBindable(s))
          throw C.notBindable();
        return new E(s, e, r);
      }
      class Ze extends i {
        constructor(e, r) {
          super(e), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.onRackInputChange_ = this.onRackInputChange_.bind(this), this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this), this.emitter_ = new I(), this.apiSet_ = new Me(ft), this.pool_ = r;
          const c = this.controller_.rack;
          c.emitter.on("add", this.onRackAdd_), c.emitter.on("remove", this.onRackRemove_), c.emitter.on("inputchange", this.onRackInputChange_), c.emitter.on("monitorupdate", this.onRackMonitorUpdate_), c.children.forEach((g) => {
            this.setUpApi_(g);
          });
        }
        get children() {
          return this.controller_.rack.children.map((e) => rt(this.apiSet_, e));
        }
        addInput(e, r, c) {
          const g = c ?? {}, w = this.controller_.view.element.ownerDocument, D = this.pool_.createInput(w, Ye(e, r, g.presetKey), g), ne = new Ue(D);
          return this.add(ne, g.index);
        }
        addMonitor(e, r, c) {
          const g = c ?? {}, w = this.controller_.view.element.ownerDocument, D = this.pool_.createMonitor(w, Ye(e, r), g), ne = new Je(D);
          return this.add(ne, g.index);
        }
        addFolder(e) {
          return fe(this, e);
        }
        addButton(e) {
          return de(this, e);
        }
        addSeparator(e) {
          return ke(this, e);
        }
        addTab(e) {
          return Le(this, e);
        }
        add(e, r) {
          this.controller_.rack.add(e.controller_, r);
          const c = this.apiSet_.find((g) => g.controller_ === e.controller_);
          return c && this.apiSet_.remove(c), this.apiSet_.add(e), e;
        }
        remove(e) {
          this.controller_.rack.remove(e.controller_);
        }
        addBlade(e) {
          const r = this.controller_.view.element.ownerDocument, c = this.pool_.createBlade(r, e), g = this.pool_.createBladeApi(c);
          return this.add(g, e.index);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
        setUpApi_(e) {
          this.apiSet_.find((c) => c.controller_ === e) || this.apiSet_.add(this.pool_.createBladeApi(e));
        }
        onRackAdd_(e) {
          this.setUpApi_(e.bladeController);
        }
        onRackRemove_(e) {
          if (e.isRoot) {
            const r = rt(this.apiSet_, e.bladeController);
            this.apiSet_.remove(r);
          }
        }
        onRackInputChange_(e) {
          const r = e.bladeController;
          if (r instanceof nt) {
            const c = rt(this.apiSet_, r), g = r.binding;
            this.emitter_.emit("change", {
              event: new o(c, g.target.read(), g.target.presetKey, e.options.last)
            });
          } else if (r instanceof U) {
            const c = rt(this.apiSet_, r);
            this.emitter_.emit("change", {
              event: new o(c, r.value.rawValue, void 0, e.options.last)
            });
          }
        }
        onRackMonitorUpdate_(e) {
          if (!(e.bladeController instanceof He))
            throw C.shouldNeverHappen();
          const r = rt(this.apiSet_, e.bladeController), c = e.bladeController.binding;
          this.emitter_.emit("update", {
            event: new l(r, c.target.read(), c.target.presetKey)
          });
        }
      }
      class lt extends Ae {
        constructor(e, r) {
          super(e, new Ze(e.rackController, r)), this.emitter_ = new I(), this.controller_.foldable.value("expanded").emitter.on("change", (c) => {
            this.emitter_.emit("fold", {
              event: new a(this, c.sender.rawValue)
            });
          }), this.rackApi_.on("change", (c) => {
            this.emitter_.emit("change", {
              event: c
            });
          }), this.rackApi_.on("update", (c) => {
            this.emitter_.emit("update", {
              event: c
            });
          });
        }
        get expanded() {
          return this.controller_.foldable.get("expanded");
        }
        set expanded(e) {
          this.controller_.foldable.set("expanded", e);
        }
        get title() {
          return this.controller_.props.get("title");
        }
        set title(e) {
          this.controller_.props.set("title", e);
        }
        get children() {
          return this.rackApi_.children;
        }
        addInput(e, r, c) {
          return this.rackApi_.addInput(e, r, c);
        }
        addMonitor(e, r, c) {
          return this.rackApi_.addMonitor(e, r, c);
        }
        addFolder(e) {
          return this.rackApi_.addFolder(e);
        }
        addButton(e) {
          return this.rackApi_.addButton(e);
        }
        addSeparator(e) {
          return this.rackApi_.addSeparator(e);
        }
        addTab(e) {
          return this.rackApi_.addTab(e);
        }
        add(e, r) {
          return this.rackApi_.add(e, r);
        }
        remove(e) {
          this.rackApi_.remove(e);
        }
        addBlade(e) {
          return this.rackApi_.addBlade(e);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
      }
      class $e extends he {
        constructor(e) {
          super({
            blade: e.blade,
            view: e.view,
            viewProps: e.rackController.viewProps
          }), this.rackController = e.rackController;
        }
      }
      class et {
        constructor(e, r) {
          const c = _(r.viewName);
          this.element = e.createElement("div"), this.element.classList.add(c()), r.viewProps.bindClassModifiers(this.element);
        }
      }
      function st(s, e) {
        for (let r = 0; r < s.length; r++) {
          const c = s[r];
          if (c instanceof nt && c.binding === e)
            return c;
        }
        return null;
      }
      function Tt(s, e) {
        for (let r = 0; r < s.length; r++) {
          const c = s[r];
          if (c instanceof He && c.binding === e)
            return c;
        }
        return null;
      }
      function gt(s, e) {
        for (let r = 0; r < s.length; r++) {
          const c = s[r];
          if (c instanceof U && c.value === e)
            return c;
        }
        return null;
      }
      function _t(s) {
        return s instanceof Rt ? s.rack : s instanceof $e ? s.rackController.rack : null;
      }
      function Si(s) {
        const e = _t(s);
        return e ? e.bcSet_ : null;
      }
      class Zr {
        constructor(e) {
          var r, c;
          this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildInputChange_ = this.onChildInputChange_.bind(this), this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onDescendantLayout_ = this.onDescendantLayout_.bind(this), this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this), this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this), this.emitter = new I(), this.blade_ = (r = e.blade) !== null && r !== void 0 ? r : null, (c = this.blade_) === null || c === void 0 || c.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = e.viewProps, this.bcSet_ = new Me(Si), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
        }
        get children() {
          return this.bcSet_.items;
        }
        add(e, r) {
          var c;
          (c = e.parent) === null || c === void 0 || c.remove(e), v(e, "parent") ? e.parent = this : (e.parent_ = this, K({
            key: "parent",
            target: "BladeController",
            place: "BladeRack.add"
          })), this.bcSet_.add(e, r);
        }
        remove(e) {
          v(e, "parent") ? e.parent = null : (e.parent_ = null, K({
            key: "parent",
            target: "BladeController",
            place: "BladeRack.remove"
          })), this.bcSet_.remove(e);
        }
        find(e) {
          return this.bcSet_.allItems().filter((r) => r instanceof e);
        }
        onSetAdd_(e) {
          this.updatePositions_();
          const r = e.target === e.root;
          if (this.emitter.emit("add", {
            bladeController: e.item,
            index: e.index,
            isRoot: r,
            sender: this
          }), !r)
            return;
          const c = e.item;
          if (c.viewProps.emitter.on("change", this.onChildViewPropsChange_), c.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), c.viewProps.handleDispose(this.onChildDispose_), c instanceof nt)
            c.binding.emitter.on("change", this.onChildInputChange_);
          else if (c instanceof He)
            c.binding.emitter.on("update", this.onChildMonitorUpdate_);
          else if (c instanceof U)
            c.value.emitter.on("change", this.onChildValueChange_);
          else {
            const g = _t(c);
            if (g) {
              const w = g.emitter;
              w.on("layout", this.onDescendantLayout_), w.on("inputchange", this.onDescendantInputChange_), w.on("monitorupdate", this.onDescendantMonitorUpdate_);
            }
          }
        }
        onSetRemove_(e) {
          this.updatePositions_();
          const r = e.target === e.root;
          if (this.emitter.emit("remove", {
            bladeController: e.item,
            isRoot: r,
            sender: this
          }), !r)
            return;
          const c = e.item;
          if (c instanceof nt)
            c.binding.emitter.off("change", this.onChildInputChange_);
          else if (c instanceof He)
            c.binding.emitter.off("update", this.onChildMonitorUpdate_);
          else if (c instanceof U)
            c.value.emitter.off("change", this.onChildValueChange_);
          else {
            const g = _t(c);
            if (g) {
              const w = g.emitter;
              w.off("layout", this.onDescendantLayout_), w.off("inputchange", this.onDescendantInputChange_), w.off("monitorupdate", this.onDescendantMonitorUpdate_);
            }
          }
        }
        updatePositions_() {
          const e = this.bcSet_.items.filter((g) => !g.viewProps.get("hidden")), r = e[0], c = e[e.length - 1];
          this.bcSet_.items.forEach((g) => {
            const w = [];
            g === r && (w.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && w.push("veryfirst")), g === c && (w.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && w.push("verylast")), g.blade.set("positions", w);
          });
        }
        onChildPositionsChange_() {
          this.updatePositions_(), this.emitter.emit("layout", {
            sender: this
          });
        }
        onChildViewPropsChange_(e) {
          this.updatePositions_(), this.emitter.emit("layout", {
            sender: this
          });
        }
        onChildDispose_() {
          this.bcSet_.items.filter((r) => r.viewProps.get("disposed")).forEach((r) => {
            this.bcSet_.remove(r);
          });
        }
        onChildInputChange_(e) {
          const r = st(this.find(nt), e.sender);
          if (!r)
            throw C.alreadyDisposed();
          this.emitter.emit("inputchange", {
            bladeController: r,
            options: e.options,
            sender: this
          });
        }
        onChildMonitorUpdate_(e) {
          const r = Tt(this.find(He), e.sender);
          if (!r)
            throw C.alreadyDisposed();
          this.emitter.emit("monitorupdate", {
            bladeController: r,
            sender: this
          });
        }
        onChildValueChange_(e) {
          const r = gt(this.find(U), e.sender);
          if (!r)
            throw C.alreadyDisposed();
          this.emitter.emit("inputchange", {
            bladeController: r,
            options: e.options,
            sender: this
          });
        }
        onDescendantLayout_(e) {
          this.updatePositions_(), this.emitter.emit("layout", {
            sender: this
          });
        }
        onDescendantInputChange_(e) {
          this.emitter.emit("inputchange", {
            bladeController: e.bladeController,
            options: e.options,
            sender: this
          });
        }
        onDescendantMonitorUpdate_(e) {
          this.emitter.emit("monitorupdate", {
            bladeController: e.bladeController,
            sender: this
          });
        }
        onBladePositionsChange_() {
          this.updatePositions_();
        }
      }
      class Rt extends he {
        constructor(e, r) {
          super(Object.assign(Object.assign({}, r), { view: new et(e, {
            viewName: "brk",
            viewProps: r.viewProps
          }) })), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
          const c = new Zr({
            blade: r.root ? void 0 : r.blade,
            viewProps: r.viewProps
          });
          c.emitter.on("add", this.onRackAdd_), c.emitter.on("remove", this.onRackRemove_), this.rack = c, this.viewProps.handleDispose(() => {
            for (let g = this.rack.children.length - 1; g >= 0; g--)
              this.rack.children[g].viewProps.set("disposed", !0);
          });
        }
        onRackAdd_(e) {
          e.isRoot && ge(this.view.element, e.bladeController.view.element, e.index);
        }
        onRackRemove_(e) {
          e.isRoot && Ve(e.bladeController.view.element);
        }
      }
      const Hn = _("cnt");
      class ki {
        constructor(e, r) {
          var c;
          this.className_ = _((c = r.viewName) !== null && c !== void 0 ? c : "fld"), this.element = e.createElement("div"), this.element.classList.add(this.className_(), Hn()), r.viewProps.bindClassModifiers(this.element), this.foldable_ = r.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), L(this.foldable_, "completed", J(this.element, this.className_(void 0, "cpl")));
          const g = e.createElement("button");
          g.classList.add(this.className_("b")), L(r.props, "title", (Se) => {
            f(Se) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
          }), r.viewProps.bindDisabled(g), this.element.appendChild(g), this.buttonElement = g;
          const w = e.createElement("div");
          w.classList.add(this.className_("i")), this.element.appendChild(w);
          const D = e.createElement("div");
          D.classList.add(this.className_("t")), ie(r.props.value("title"), D), this.buttonElement.appendChild(D), this.titleElement = D;
          const ne = e.createElement("div");
          ne.classList.add(this.className_("m")), this.buttonElement.appendChild(ne);
          const ye = r.containerElement;
          ye.classList.add(this.className_("c")), this.element.appendChild(ye), this.containerElement = ye;
        }
      }
      class Kn extends $e {
        constructor(e, r) {
          var c;
          const g = _e.create((c = r.expanded) !== null && c !== void 0 ? c : !0), w = new Rt(e, {
            blade: r.blade,
            root: r.root,
            viewProps: r.viewProps
          });
          super(Object.assign(Object.assign({}, r), { rackController: w, view: new ki(e, {
            containerElement: w.view.element,
            foldable: g,
            props: r.props,
            viewName: r.root ? "rot" : void 0,
            viewProps: r.viewProps
          }) })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = r.props, this.foldable = g, $(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
            this.foldable.cleanUpTransition();
          }), this.rackController.rack.emitter.on("remove", () => {
            this.foldable.cleanUpTransition();
          }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
        }
        get document() {
          return this.view.element.ownerDocument;
        }
        onTitleClick_() {
          this.foldable.set("expanded", !this.foldable.get("expanded"));
        }
      }
      const qn = {
        id: "folder",
        type: "blade",
        accept(s) {
          const e = O, r = G(s, {
            title: e.required.string,
            view: e.required.constant("folder"),
            expanded: e.optional.boolean
          });
          return r ? { params: r } : null;
        },
        controller(s) {
          return new Kn(s.document, {
            blade: s.blade,
            expanded: s.params.expanded,
            props: j.fromObject({
              title: s.params.title
            }),
            viewProps: s.viewProps
          });
        },
        api(s) {
          return s.controller instanceof Kn ? new lt(s.controller, s.pool) : null;
        }
      };
      class Ft extends U {
        constructor(e, r) {
          const c = r.valueController.viewProps;
          super(Object.assign(Object.assign({}, r), { value: r.valueController.value, view: new B(e, {
            props: r.props,
            viewProps: c
          }), viewProps: c })), this.props = r.props, this.valueController = r.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
        }
      }
      class Yn extends i {
      }
      const be = _("spr");
      class En {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(be()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("hr");
          c.classList.add(be("r")), this.element.appendChild(c);
        }
      }
      class $r extends he {
        constructor(e, r) {
          super(Object.assign(Object.assign({}, r), { view: new En(e, {
            viewProps: r.viewProps
          }) }));
        }
      }
      const nn = {
        id: "separator",
        type: "blade",
        accept(s) {
          const r = G(s, {
            view: O.required.constant("separator")
          });
          return r ? { params: r } : null;
        },
        controller(s) {
          return new $r(s.document, {
            blade: s.blade,
            viewProps: s.viewProps
          });
        },
        api(s) {
          return s.controller instanceof $r ? new Yn(s.controller) : null;
        }
      }, Lt = _("tbi");
      class ei {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Lt()), r.viewProps.bindClassModifiers(this.element), L(r.props, "selected", (w) => {
            w ? this.element.classList.add(Lt(void 0, "sel")) : this.element.classList.remove(Lt(void 0, "sel"));
          });
          const c = e.createElement("button");
          c.classList.add(Lt("b")), r.viewProps.bindDisabled(c), this.element.appendChild(c), this.buttonElement = c;
          const g = e.createElement("div");
          g.classList.add(Lt("t")), ie(r.props.value("title"), g), this.buttonElement.appendChild(g), this.titleElement = g;
        }
      }
      class dr {
        constructor(e, r) {
          this.emitter = new I(), this.onClick_ = this.onClick_.bind(this), this.props = r.props, this.viewProps = r.viewProps, this.view = new ei(e, {
            props: r.props,
            viewProps: r.viewProps
          }), this.view.buttonElement.addEventListener("click", this.onClick_);
        }
        onClick_() {
          this.emitter.emit("click", {
            sender: this
          });
        }
      }
      class wn {
        constructor(e, r) {
          this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new dr(e, {
            props: r.itemProps,
            viewProps: te.create()
          }), this.ic_.emitter.on("click", this.onItemClick_), this.cc_ = new Rt(e, {
            blade: le(),
            viewProps: te.create()
          }), this.props = r.props, L(this.props, "selected", (c) => {
            this.itemController.props.set("selected", c), this.contentController.viewProps.set("hidden", !c);
          });
        }
        get itemController() {
          return this.ic_;
        }
        get contentController() {
          return this.cc_;
        }
        onItemClick_() {
          this.props.set("selected", !0);
        }
      }
      class bn {
        constructor(e, r) {
          this.controller_ = e, this.rackApi_ = r;
        }
        get title() {
          var e;
          return (e = this.controller_.itemController.props.get("title")) !== null && e !== void 0 ? e : "";
        }
        set title(e) {
          this.controller_.itemController.props.set("title", e);
        }
        get selected() {
          return this.controller_.props.get("selected");
        }
        set selected(e) {
          this.controller_.props.set("selected", e);
        }
        get children() {
          return this.rackApi_.children;
        }
        addButton(e) {
          return this.rackApi_.addButton(e);
        }
        addFolder(e) {
          return this.rackApi_.addFolder(e);
        }
        addSeparator(e) {
          return this.rackApi_.addSeparator(e);
        }
        addTab(e) {
          return this.rackApi_.addTab(e);
        }
        add(e, r) {
          this.rackApi_.add(e, r);
        }
        remove(e) {
          this.rackApi_.remove(e);
        }
        addInput(e, r, c) {
          return this.rackApi_.addInput(e, r, c);
        }
        addMonitor(e, r, c) {
          return this.rackApi_.addMonitor(e, r, c);
        }
        addBlade(e) {
          return this.rackApi_.addBlade(e);
        }
      }
      class pr extends Ae {
        constructor(e, r) {
          super(e, new Ze(e.rackController, r)), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.onSelect_ = this.onSelect_.bind(this), this.emitter_ = new I(), this.pageApiMap_ = /* @__PURE__ */ new Map(), this.rackApi_.on("change", (c) => {
            this.emitter_.emit("change", {
              event: c
            });
          }), this.rackApi_.on("update", (c) => {
            this.emitter_.emit("update", {
              event: c
            });
          }), this.controller_.tab.selectedIndex.emitter.on("change", this.onSelect_), this.controller_.pageSet.emitter.on("add", this.onPageAdd_), this.controller_.pageSet.emitter.on("remove", this.onPageRemove_), this.controller_.pageSet.items.forEach((c) => {
            this.setUpPageApi_(c);
          });
        }
        get pages() {
          return this.controller_.pageSet.items.map((e) => {
            const r = this.pageApiMap_.get(e);
            if (!r)
              throw C.shouldNeverHappen();
            return r;
          });
        }
        addPage(e) {
          const r = this.controller_.view.element.ownerDocument, c = new wn(r, {
            itemProps: j.fromObject({
              selected: !1,
              title: e.title
            }),
            props: j.fromObject({
              selected: !1
            })
          });
          this.controller_.add(c, e.index);
          const g = this.pageApiMap_.get(c);
          if (!g)
            throw C.shouldNeverHappen();
          return g;
        }
        removePage(e) {
          this.controller_.remove(e);
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
        setUpPageApi_(e) {
          const r = this.rackApi_.apiSet_.find((g) => g.controller_ === e.contentController);
          if (!r)
            throw C.shouldNeverHappen();
          const c = new bn(e, r);
          this.pageApiMap_.set(e, c);
        }
        onPageAdd_(e) {
          this.setUpPageApi_(e.item);
        }
        onPageRemove_(e) {
          if (!this.pageApiMap_.get(e.item))
            throw C.shouldNeverHappen();
          this.pageApiMap_.delete(e.item);
        }
        onSelect_(e) {
          this.emitter_.emit("select", {
            event: new h(this, e.rawValue)
          });
        }
      }
      const Bn = -1;
      class ti {
        constructor() {
          this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = H(!0), this.selectedIndex = H(Bn), this.items_ = [];
        }
        add(e, r) {
          const c = r ?? this.items_.length;
          this.items_.splice(c, 0, e), e.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
        }
        remove(e) {
          const r = this.items_.indexOf(e);
          r < 0 || (this.items_.splice(r, 1), e.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
        }
        keepSelection_() {
          if (this.items_.length === 0) {
            this.selectedIndex.rawValue = Bn, this.empty.rawValue = !0;
            return;
          }
          const e = this.items_.findIndex((r) => r.rawValue);
          e < 0 ? (this.items_.forEach((r, c) => {
            r.rawValue = c === 0;
          }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((r, c) => {
            r.rawValue = c === e;
          }), this.selectedIndex.rawValue = e), this.empty.rawValue = !1;
        }
        onItemSelectedChange_(e) {
          if (e.rawValue) {
            const r = this.items_.findIndex((c) => c === e.sender);
            this.items_.forEach((c, g) => {
              c.rawValue = g === r;
            }), this.selectedIndex.rawValue = r;
          } else
            this.keepSelection_();
        }
      }
      const Kt = _("tab");
      class ni {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Kt(), Hn()), r.viewProps.bindClassModifiers(this.element), T(r.empty, J(this.element, Kt(void 0, "nop")));
          const c = e.createElement("div");
          c.classList.add(Kt("t")), this.element.appendChild(c), this.itemsElement = c;
          const g = e.createElement("div");
          g.classList.add(Kt("i")), this.element.appendChild(g);
          const w = r.contentsElement;
          w.classList.add(Kt("c")), this.element.appendChild(w), this.contentsElement = w;
        }
      }
      class rn extends $e {
        constructor(e, r) {
          const c = new Rt(e, {
            blade: r.blade,
            viewProps: r.viewProps
          }), g = new ti();
          super({
            blade: r.blade,
            rackController: c,
            view: new ni(e, {
              contentsElement: c.view.element,
              empty: g.empty,
              viewProps: r.viewProps
            })
          }), this.onPageAdd_ = this.onPageAdd_.bind(this), this.onPageRemove_ = this.onPageRemove_.bind(this), this.pageSet_ = new Me(() => null), this.pageSet_.emitter.on("add", this.onPageAdd_), this.pageSet_.emitter.on("remove", this.onPageRemove_), this.tab = g;
        }
        get pageSet() {
          return this.pageSet_;
        }
        add(e, r) {
          this.pageSet_.add(e, r);
        }
        remove(e) {
          this.pageSet_.remove(this.pageSet_.items[e]);
        }
        onPageAdd_(e) {
          const r = e.item;
          ge(this.view.itemsElement, r.itemController.view.element, e.index), r.itemController.viewProps.set("parent", this.viewProps), this.rackController.rack.add(r.contentController, e.index), this.tab.add(r.props.value("selected"));
        }
        onPageRemove_(e) {
          const r = e.item;
          Ve(r.itemController.view.element), r.itemController.viewProps.set("parent", null), this.rackController.rack.remove(r.contentController), this.tab.remove(r.props.value("selected"));
        }
      }
      const Jn = {
        id: "tab",
        type: "blade",
        accept(s) {
          const e = O, r = G(s, {
            pages: e.required.array(e.required.object({ title: e.required.string })),
            view: e.required.constant("tab")
          });
          return !r || r.pages.length === 0 ? null : { params: r };
        },
        controller(s) {
          const e = new rn(s.document, {
            blade: s.blade,
            viewProps: s.viewProps
          });
          return s.params.pages.forEach((r) => {
            const c = new wn(s.document, {
              itemProps: j.fromObject({
                selected: !1,
                title: r.title
              }),
              props: j.fromObject({
                selected: !1
              })
            });
            e.add(c);
          }), e;
        },
        api(s) {
          return s.controller instanceof rn ? new pr(s.controller, s.pool) : null;
        }
      };
      function sn(s, e) {
        const r = s.accept(e.params);
        if (!r)
          return null;
        const c = O.optional.boolean(e.params.disabled).value, g = O.optional.boolean(e.params.hidden).value;
        return s.controller({
          blade: le(),
          document: e.document,
          params: Object.assign(Object.assign({}, r.params), { disabled: c, hidden: g }),
          viewProps: te.create({
            disabled: c,
            hidden: g
          })
        });
      }
      class fr {
        constructor() {
          this.disabled = !1, this.emitter = new I();
        }
        dispose() {
        }
        tick() {
          this.disabled || this.emitter.emit("tick", {
            sender: this
          });
        }
      }
      class gr {
        constructor(e, r) {
          this.disabled_ = !1, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = e, this.emitter = new I(), this.interval_ = r, this.setTimer_();
        }
        get disabled() {
          return this.disabled_;
        }
        set disabled(e) {
          this.disabled_ = e, this.disabled_ ? this.clearTimer_() : this.setTimer_();
        }
        dispose() {
          this.clearTimer_();
        }
        clearTimer_() {
          if (this.timerId_ === null)
            return;
          const e = this.doc_.defaultView;
          e && e.clearInterval(this.timerId_), this.timerId_ = null;
        }
        setTimer_() {
          if (this.clearTimer_(), this.interval_ <= 0)
            return;
          const e = this.doc_.defaultView;
          e && (this.timerId_ = e.setInterval(this.onTick_, this.interval_));
        }
        onTick_() {
          this.disabled_ || this.emitter.emit("tick", {
            sender: this
          });
        }
      }
      class mr {
        constructor(e) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.reader = e.reader, this.writer = e.writer, this.emitter = new I(), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.target = e.target, this.read();
        }
        read() {
          const e = this.target.read();
          e !== void 0 && (this.value.rawValue = this.reader(e));
        }
        write_(e) {
          this.writer(this.target, e);
        }
        onValueChange_(e) {
          this.write_(e.rawValue), this.emitter.emit("change", {
            options: e.options,
            rawValue: e.rawValue,
            sender: this
          });
        }
      }
      function mt(s, e) {
        for (; s.length < e; )
          s.push(void 0);
      }
      function Di(s) {
        const e = [];
        return mt(e, s), H(e);
      }
      function jn(s) {
        const e = s.indexOf(void 0);
        return e < 0 ? s : s.slice(0, e);
      }
      function _n(s, e) {
        const r = [...jn(s), e];
        return r.length > s.length ? r.splice(0, r.length - s.length) : mt(r, s.length), r;
      }
      class ri {
        constructor(e) {
          this.onTick_ = this.onTick_.bind(this), this.reader_ = e.reader, this.target = e.target, this.emitter = new I(), this.value = e.value, this.ticker = e.ticker, this.ticker.emitter.on("tick", this.onTick_), this.read();
        }
        dispose() {
          this.ticker.dispose();
        }
        read() {
          const e = this.target.read();
          if (e === void 0)
            return;
          const r = this.value.rawValue, c = this.reader_(e);
          this.value.rawValue = _n(r, c), this.emitter.emit("update", {
            rawValue: c,
            sender: this
          });
        }
        onTick_(e) {
          this.read();
        }
      }
      class Pt {
        constructor(e) {
          this.constraints = e;
        }
        constrain(e) {
          return this.constraints.reduce((r, c) => c.constrain(r), e);
        }
      }
      function dt(s, e) {
        if (s instanceof e)
          return s;
        if (s instanceof Pt) {
          const r = s.constraints.reduce((c, g) => c || (g instanceof e ? g : null), null);
          if (r)
            return r;
        }
        return null;
      }
      class Mt {
        constructor(e) {
          this.values = j.fromObject({
            max: e.max,
            min: e.min
          });
        }
        constrain(e) {
          const r = this.values.get("max"), c = this.values.get("min");
          return Math.min(Math.max(e, c), r);
        }
      }
      class on {
        constructor(e) {
          this.values = j.fromObject({
            options: e
          });
        }
        get options() {
          return this.values.get("options");
        }
        constrain(e) {
          const r = this.values.get("options");
          return r.length === 0 || r.filter((g) => g.value === e).length > 0 ? e : r[0].value;
        }
      }
      class vr {
        constructor(e) {
          this.values = j.fromObject({
            max: e.max,
            min: e.min
          });
        }
        get maxValue() {
          return this.values.get("max");
        }
        get minValue() {
          return this.values.get("min");
        }
        constrain(e) {
          const r = this.values.get("max"), c = this.values.get("min");
          let g = e;
          return f(c) || (g = Math.max(g, c)), f(r) || (g = Math.min(g, r)), g;
        }
      }
      class an {
        constructor(e, r = 0) {
          this.step = e, this.origin = r;
        }
        constrain(e) {
          const r = this.origin % this.step, c = Math.round((e - r) / this.step);
          return r + c * this.step;
        }
      }
      const qt = _("lst");
      class ii {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = r.props, this.element = e.createElement("div"), this.element.classList.add(qt()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("select");
          c.classList.add(qt("s")), r.viewProps.bindDisabled(c), this.element.appendChild(c), this.selectElement = c;
          const g = e.createElement("div");
          g.classList.add(qt("m")), g.appendChild(Ee(e, "dropdown")), this.element.appendChild(g), r.value.emitter.on("change", this.onValueChange_), this.value_ = r.value, L(this.props_, "options", (w) => {
            Fe(this.selectElement), w.forEach((D) => {
              const ne = e.createElement("option");
              ne.textContent = D.text, this.selectElement.appendChild(ne);
            }), this.update_();
          });
        }
        update_() {
          const e = this.props_.get("options").map((r) => r.value);
          this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
        }
        onValueChange_() {
          this.update_();
        }
      }
      class Ut {
        constructor(e, r) {
          this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = r.props, this.value = r.value, this.viewProps = r.viewProps, this.view = new ii(e, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
        }
        onSelectChange_(e) {
          const r = e.currentTarget;
          this.value.rawValue = this.props.get("options")[r.selectedIndex].value;
        }
      }
      const Yt = _("pop");
      class An {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Yt()), r.viewProps.bindClassModifiers(this.element), T(r.shows, J(this.element, Yt(void 0, "v")));
        }
      }
      class ln {
        constructor(e, r) {
          this.shows = H(!1), this.viewProps = r.viewProps, this.view = new An(e, {
            shows: this.shows,
            viewProps: this.viewProps
          });
        }
      }
      const Cr = _("txt");
      class yn {
        constructor(e, r) {
          this.onChange_ = this.onChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(Cr()), r.viewProps.bindClassModifiers(this.element), this.props_ = r.props, this.props_.emitter.on("change", this.onChange_);
          const c = e.createElement("input");
          c.classList.add(Cr("i")), c.type = "text", r.viewProps.bindDisabled(c), this.element.appendChild(c), this.inputElement = c, r.value.emitter.on("change", this.onChange_), this.value_ = r.value, this.refresh();
        }
        refresh() {
          const e = this.props_.get("formatter");
          this.inputElement.value = e(this.value_.rawValue);
        }
        onChange_() {
          this.refresh();
        }
      }
      class cn {
        constructor(e, r) {
          this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = r.parser, this.props = r.props, this.value = r.value, this.viewProps = r.viewProps, this.view = new yn(e, {
            props: r.props,
            value: this.value,
            viewProps: this.viewProps
          }), this.view.inputElement.addEventListener("change", this.onInputChange_);
        }
        onInputChange_(e) {
          const c = e.currentTarget.value, g = this.parser_(c);
          f(g) || (this.value.rawValue = g), this.view.refresh();
        }
      }
      function Ir(s) {
        return String(s);
      }
      function Er(s) {
        return s === "false" ? !1 : !!s;
      }
      function Qn(s) {
        return Ir(s);
      }
      class wr {
        constructor(e) {
          this.text = e;
        }
        evaluate() {
          return Number(this.text);
        }
        toString() {
          return this.text;
        }
      }
      const si = {
        "**": (s, e) => Math.pow(s, e),
        "*": (s, e) => s * e,
        "/": (s, e) => s / e,
        "%": (s, e) => s % e,
        "+": (s, e) => s + e,
        "-": (s, e) => s - e,
        "<<": (s, e) => s << e,
        ">>": (s, e) => s >> e,
        ">>>": (s, e) => s >>> e,
        "&": (s, e) => s & e,
        "^": (s, e) => s ^ e,
        "|": (s, e) => s | e
      };
      class vt {
        constructor(e, r, c) {
          this.left = r, this.operator = e, this.right = c;
        }
        evaluate() {
          const e = si[this.operator];
          if (!e)
            throw new Error(`unexpected binary operator: '${this.operator}`);
          return e(this.left.evaluate(), this.right.evaluate());
        }
        toString() {
          return [
            "b(",
            this.left.toString(),
            this.operator,
            this.right.toString(),
            ")"
          ].join(" ");
        }
      }
      const br = {
        "+": (s) => s,
        "-": (s) => -s,
        "~": (s) => ~s
      };
      class oi {
        constructor(e, r) {
          this.operator = e, this.expression = r;
        }
        evaluate() {
          const e = br[this.operator];
          if (!e)
            throw new Error(`unexpected unary operator: '${this.operator}`);
          return e(this.expression.evaluate());
        }
        toString() {
          return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
        }
      }
      function Wn(s) {
        return (e, r) => {
          for (let c = 0; c < s.length; c++) {
            const g = s[c](e, r);
            if (g !== "")
              return g;
          }
          return "";
        };
      }
      function Jt(s, e) {
        var r;
        const c = s.substr(e).match(/^\s+/);
        return (r = c && c[0]) !== null && r !== void 0 ? r : "";
      }
      function ai(s, e) {
        const r = s.substr(e, 1);
        return r.match(/^[1-9]$/) ? r : "";
      }
      function un(s, e) {
        var r;
        const c = s.substr(e).match(/^[0-9]+/);
        return (r = c && c[0]) !== null && r !== void 0 ? r : "";
      }
      function xn(s, e) {
        const r = un(s, e);
        if (r !== "")
          return r;
        const c = s.substr(e, 1);
        if (e += 1, c !== "-" && c !== "+")
          return "";
        const g = un(s, e);
        return g === "" ? "" : c + g;
      }
      function jt(s, e) {
        const r = s.substr(e, 1);
        if (e += 1, r.toLowerCase() !== "e")
          return "";
        const c = xn(s, e);
        return c === "" ? "" : r + c;
      }
      function yt(s, e) {
        const r = s.substr(e, 1);
        if (r === "0")
          return r;
        const c = ai(s, e);
        return e += c.length, c === "" ? "" : c + un(s, e);
      }
      function Ai(s, e) {
        const r = yt(s, e);
        if (e += r.length, r === "")
          return "";
        const c = s.substr(e, 1);
        if (e += c.length, c !== ".")
          return "";
        const g = un(s, e);
        return e += g.length, r + c + g + jt(s, e);
      }
      function Br(s, e) {
        const r = s.substr(e, 1);
        if (e += r.length, r !== ".")
          return "";
        const c = un(s, e);
        return e += c.length, c === "" ? "" : r + c + jt(s, e);
      }
      function _r(s, e) {
        const r = yt(s, e);
        return e += r.length, r === "" ? "" : r + jt(s, e);
      }
      const Sn = Wn([
        Ai,
        Br,
        _r
      ]);
      function li(s, e) {
        var r;
        const c = s.substr(e).match(/^[01]+/);
        return (r = c && c[0]) !== null && r !== void 0 ? r : "";
      }
      function kn(s, e) {
        const r = s.substr(e, 2);
        if (e += r.length, r.toLowerCase() !== "0b")
          return "";
        const c = li(s, e);
        return c === "" ? "" : r + c;
      }
      function yr(s, e) {
        var r;
        const c = s.substr(e).match(/^[0-7]+/);
        return (r = c && c[0]) !== null && r !== void 0 ? r : "";
      }
      function ut(s, e) {
        const r = s.substr(e, 2);
        if (e += r.length, r.toLowerCase() !== "0o")
          return "";
        const c = yr(s, e);
        return c === "" ? "" : r + c;
      }
      function Ti(s, e) {
        var r;
        const c = s.substr(e).match(/^[0-9a-f]+/i);
        return (r = c && c[0]) !== null && r !== void 0 ? r : "";
      }
      function Xn(s, e) {
        const r = s.substr(e, 2);
        if (e += r.length, r.toLowerCase() !== "0x")
          return "";
        const c = Ti(s, e);
        return c === "" ? "" : r + c;
      }
      const zn = Wn([
        kn,
        ut,
        Xn
      ]), ci = Wn([
        zn,
        Sn
      ]);
      function Ri(s, e) {
        const r = ci(s, e);
        return e += r.length, r === "" ? null : {
          evaluable: new wr(r),
          cursor: e
        };
      }
      function ct(s, e) {
        const r = s.substr(e, 1);
        if (e += r.length, r !== "(")
          return null;
        const c = qs(s, e);
        if (!c)
          return null;
        e = c.cursor, e += Jt(s, e).length;
        const g = s.substr(e, 1);
        return e += g.length, g !== ")" ? null : {
          evaluable: c.evaluable,
          cursor: e
        };
      }
      function Ct(s, e) {
        var r;
        return (r = Ri(s, e)) !== null && r !== void 0 ? r : ct(s, e);
      }
      function ot(s, e) {
        const r = Ct(s, e);
        if (r)
          return r;
        const c = s.substr(e, 1);
        if (e += c.length, c !== "+" && c !== "-" && c !== "~")
          return null;
        const g = ot(s, e);
        return g ? (e = g.cursor, {
          cursor: e,
          evaluable: new oi(c, g.evaluable)
        }) : null;
      }
      function Gt(s, e, r) {
        r += Jt(e, r).length;
        const c = s.filter((g) => e.startsWith(g, r))[0];
        return c ? (r += c.length, r += Jt(e, r).length, {
          cursor: r,
          operator: c
        }) : null;
      }
      function ui(s, e) {
        return (r, c) => {
          const g = s(r, c);
          if (!g)
            return null;
          c = g.cursor;
          let w = g.evaluable;
          for (; ; ) {
            const D = Gt(e, r, c);
            if (!D)
              break;
            c = D.cursor;
            const ne = s(r, c);
            if (!ne)
              return null;
            c = ne.cursor, w = new vt(D.operator, w, ne.evaluable);
          }
          return w ? {
            cursor: c,
            evaluable: w
          } : null;
        };
      }
      const BA = [
        ["**"],
        ["*", "/", "%"],
        ["+", "-"],
        ["<<", ">>>", ">>"],
        ["&"],
        ["^"],
        ["|"]
      ].reduce((s, e) => ui(s, e), ot);
      function qs(s, e) {
        return e += Jt(s, e).length, BA(s, e);
      }
      function _A(s) {
        const e = qs(s, 0);
        return !e || e.cursor + Jt(s, e.cursor).length !== s.length ? null : e.evaluable;
      }
      function Wt(s) {
        var e;
        const r = _A(s);
        return (e = r == null ? void 0 : r.evaluate()) !== null && e !== void 0 ? e : null;
      }
      function Ys(s) {
        if (typeof s == "number")
          return s;
        if (typeof s == "string") {
          const e = Wt(s);
          if (!f(e))
            return e;
        }
        return 0;
      }
      function yA(s) {
        return String(s);
      }
      function at(s) {
        return (e) => e.toFixed(Math.max(Math.min(s, 20), 0));
      }
      const QA = at(0);
      function hi(s) {
        return QA(s) + "%";
      }
      function Js(s) {
        return String(s);
      }
      function Fi(s) {
        return s;
      }
      function Qr({ primary: s, secondary: e, forward: r, backward: c }) {
        let g = !1;
        function w(D) {
          g || (g = !0, D(), g = !1);
        }
        s.emitter.on("change", (D) => {
          w(() => {
            e.setRawValue(r(s, e), D.options);
          });
        }), e.emitter.on("change", (D) => {
          w(() => {
            s.setRawValue(c(s, e), D.options);
          }), w(() => {
            e.setRawValue(r(s, e), D.options);
          });
        }), w(() => {
          e.setRawValue(r(s, e), {
            forceEmit: !1,
            last: !0
          });
        });
      }
      function pt(s, e) {
        const r = s * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
        return e.upKey ? +r : e.downKey ? -r : 0;
      }
      function xr(s) {
        return {
          altKey: s.altKey,
          downKey: s.key === "ArrowDown",
          shiftKey: s.shiftKey,
          upKey: s.key === "ArrowUp"
        };
      }
      function Xt(s) {
        return {
          altKey: s.altKey,
          downKey: s.key === "ArrowLeft",
          shiftKey: s.shiftKey,
          upKey: s.key === "ArrowRight"
        };
      }
      function xA(s) {
        return s === "ArrowUp" || s === "ArrowDown";
      }
      function js(s) {
        return xA(s) || s === "ArrowLeft" || s === "ArrowRight";
      }
      function Li(s, e) {
        var r, c;
        const g = e.ownerDocument.defaultView, w = e.getBoundingClientRect();
        return {
          x: s.pageX - (((r = g && g.scrollX) !== null && r !== void 0 ? r : 0) + w.left),
          y: s.pageY - (((c = g && g.scrollY) !== null && c !== void 0 ? c : 0) + w.top)
        };
      }
      class Dn {
        constructor(e) {
          this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = e, this.emitter = new I(), e.addEventListener("touchstart", this.onTouchStart_, {
            passive: !1
          }), e.addEventListener("touchmove", this.onTouchMove_, {
            passive: !0
          }), e.addEventListener("touchend", this.onTouchEnd_), e.addEventListener("mousedown", this.onMouseDown_);
        }
        computePosition_(e) {
          const r = this.elem_.getBoundingClientRect();
          return {
            bounds: {
              width: r.width,
              height: r.height
            },
            point: e ? {
              x: e.x,
              y: e.y
            } : null
          };
        }
        onMouseDown_(e) {
          var r;
          e.preventDefault(), (r = e.currentTarget) === null || r === void 0 || r.focus();
          const c = this.elem_.ownerDocument;
          c.addEventListener("mousemove", this.onDocumentMouseMove_), c.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", {
            altKey: e.altKey,
            data: this.computePosition_(Li(e, this.elem_)),
            sender: this,
            shiftKey: e.shiftKey
          });
        }
        onDocumentMouseMove_(e) {
          this.emitter.emit("move", {
            altKey: e.altKey,
            data: this.computePosition_(Li(e, this.elem_)),
            sender: this,
            shiftKey: e.shiftKey
          });
        }
        onDocumentMouseUp_(e) {
          const r = this.elem_.ownerDocument;
          r.removeEventListener("mousemove", this.onDocumentMouseMove_), r.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", {
            altKey: e.altKey,
            data: this.computePosition_(Li(e, this.elem_)),
            sender: this,
            shiftKey: e.shiftKey
          });
        }
        onTouchStart_(e) {
          e.preventDefault();
          const r = e.targetTouches.item(0), c = this.elem_.getBoundingClientRect();
          this.emitter.emit("down", {
            altKey: e.altKey,
            data: this.computePosition_(r ? {
              x: r.clientX - c.left,
              y: r.clientY - c.top
            } : void 0),
            sender: this,
            shiftKey: e.shiftKey
          }), this.lastTouch_ = r;
        }
        onTouchMove_(e) {
          const r = e.targetTouches.item(0), c = this.elem_.getBoundingClientRect();
          this.emitter.emit("move", {
            altKey: e.altKey,
            data: this.computePosition_(r ? {
              x: r.clientX - c.left,
              y: r.clientY - c.top
            } : void 0),
            sender: this,
            shiftKey: e.shiftKey
          }), this.lastTouch_ = r;
        }
        onTouchEnd_(e) {
          var r;
          const c = (r = e.targetTouches.item(0)) !== null && r !== void 0 ? r : this.lastTouch_, g = this.elem_.getBoundingClientRect();
          this.emitter.emit("up", {
            altKey: e.altKey,
            data: this.computePosition_(c ? {
              x: c.clientX - g.left,
              y: c.clientY - g.top
            } : void 0),
            sender: this,
            shiftKey: e.shiftKey
          });
        }
      }
      function ze(s, e, r, c, g) {
        const w = (s - e) / (r - e);
        return c + w * (g - c);
      }
      function Ws(s) {
        return String(s.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
      }
      function it(s, e, r) {
        return Math.min(Math.max(s, e), r);
      }
      function Xs(s, e) {
        return (s % e + e) % e;
      }
      const Et = _("txt");
      class SA {
        constructor(e, r) {
          this.onChange_ = this.onChange_.bind(this), this.props_ = r.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(Et(), Et(void 0, "num")), r.arrayPosition && this.element.classList.add(Et(void 0, r.arrayPosition)), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("input");
          c.classList.add(Et("i")), c.type = "text", r.viewProps.bindDisabled(c), this.element.appendChild(c), this.inputElement = c, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = r.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(Et()), this.inputElement.classList.add(Et("i"));
          const g = e.createElement("div");
          g.classList.add(Et("k")), this.element.appendChild(g), this.knobElement = g;
          const w = e.createElementNS(pe, "svg");
          w.classList.add(Et("g")), this.knobElement.appendChild(w);
          const D = e.createElementNS(pe, "path");
          D.classList.add(Et("gb")), w.appendChild(D), this.guideBodyElem_ = D;
          const ne = e.createElementNS(pe, "path");
          ne.classList.add(Et("gh")), w.appendChild(ne), this.guideHeadElem_ = ne;
          const ye = e.createElement("div");
          ye.classList.add(_("tt")()), this.knobElement.appendChild(ye), this.tooltipElem_ = ye, r.value.emitter.on("change", this.onChange_), this.value = r.value, this.refresh();
        }
        onDraggingChange_(e) {
          if (e.rawValue === null) {
            this.element.classList.remove(Et(void 0, "drg"));
            return;
          }
          this.element.classList.add(Et(void 0, "drg"));
          const r = e.rawValue / this.props_.get("draggingScale"), c = r + (r > 0 ? -1 : r < 0 ? 1 : 0), g = it(-c, -4, 4);
          this.guideHeadElem_.setAttributeNS(null, "d", [`M ${c + g},0 L${c},4 L${c + g},8`, `M ${r},-1 L${r},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${r},4`);
          const w = this.props_.get("formatter");
          this.tooltipElem_.textContent = w(this.value.rawValue), this.tooltipElem_.style.left = `${r}px`;
        }
        refresh() {
          const e = this.props_.get("formatter");
          this.inputElement.value = e(this.value.rawValue);
        }
        onChange_() {
          this.refresh();
        }
      }
      class Sr {
        constructor(e, r) {
          var c;
          this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = r.baseStep, this.parser_ = r.parser, this.props = r.props, this.sliderProps_ = (c = r.sliderProps) !== null && c !== void 0 ? c : null, this.value = r.value, this.viewProps = r.viewProps, this.dragging_ = H(null), this.view = new SA(e, {
            arrayPosition: r.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
          const g = new Dn(this.view.knobElement);
          g.emitter.on("down", this.onPointerDown_), g.emitter.on("move", this.onPointerMove_), g.emitter.on("up", this.onPointerUp_);
        }
        constrainValue_(e) {
          var r, c;
          const g = (r = this.sliderProps_) === null || r === void 0 ? void 0 : r.get("minValue"), w = (c = this.sliderProps_) === null || c === void 0 ? void 0 : c.get("maxValue");
          let D = e;
          return g !== void 0 && (D = Math.max(D, g)), w !== void 0 && (D = Math.min(D, w)), D;
        }
        onInputChange_(e) {
          const c = e.currentTarget.value, g = this.parser_(c);
          f(g) || (this.value.rawValue = this.constrainValue_(g)), this.view.refresh();
        }
        onInputKeyDown_(e) {
          const r = pt(this.baseStep_, xr(e));
          r !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + r), {
            forceEmit: !1,
            last: !1
          });
        }
        onInputKeyUp_(e) {
          pt(this.baseStep_, xr(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
        onPointerDown_() {
          this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
        }
        computeDraggingValue_(e) {
          if (!e.point)
            return null;
          const r = e.point.x - e.bounds.width / 2;
          return this.constrainValue_(this.originRawValue_ + r * this.props.get("draggingScale"));
        }
        onPointerMove_(e) {
          const r = this.computeDraggingValue_(e.data);
          r !== null && (this.value.setRawValue(r, {
            forceEmit: !1,
            last: !1
          }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
        }
        onPointerUp_(e) {
          const r = this.computeDraggingValue_(e.data);
          r !== null && (this.value.setRawValue(r, {
            forceEmit: !0,
            last: !0
          }), this.dragging_.rawValue = null);
        }
      }
      const Pi = _("sld");
      class kA {
        constructor(e, r) {
          this.onChange_ = this.onChange_.bind(this), this.props_ = r.props, this.props_.emitter.on("change", this.onChange_), this.element = e.createElement("div"), this.element.classList.add(Pi()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(Pi("t")), r.viewProps.bindTabIndex(c), this.element.appendChild(c), this.trackElement = c;
          const g = e.createElement("div");
          g.classList.add(Pi("k")), this.trackElement.appendChild(g), this.knobElement = g, r.value.emitter.on("change", this.onChange_), this.value = r.value, this.update_();
        }
        update_() {
          const e = it(ze(this.value.rawValue, this.props_.get("minValue"), this.props_.get("maxValue"), 0, 100), 0, 100);
          this.knobElement.style.width = `${e}%`;
        }
        onChange_() {
          this.update_();
        }
      }
      class DA {
        constructor(e, r) {
          this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.baseStep_ = r.baseStep, this.value = r.value, this.viewProps = r.viewProps, this.props = r.props, this.view = new kA(e, {
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
          }), this.ptHandler_ = new Dn(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(e, r) {
          e.point && this.value.setRawValue(ze(it(e.point.x, 0, e.bounds.width), 0, e.bounds.width, this.props.get("minValue"), this.props.get("maxValue")), r);
        }
        onPointerDownOrMove_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerUp_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !0,
            last: !0
          });
        }
        onKeyDown_(e) {
          const r = pt(this.baseStep_, Xt(e));
          r !== 0 && this.value.setRawValue(this.value.rawValue + r, {
            forceEmit: !1,
            last: !1
          });
        }
        onKeyUp_(e) {
          pt(this.baseStep_, Xt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
      }
      const Mi = _("sldtxt");
      class TA {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Mi());
          const c = e.createElement("div");
          c.classList.add(Mi("s")), this.sliderView_ = r.sliderView, c.appendChild(this.sliderView_.element), this.element.appendChild(c);
          const g = e.createElement("div");
          g.classList.add(Mi("t")), this.textView_ = r.textView, g.appendChild(this.textView_.element), this.element.appendChild(g);
        }
      }
      class Ui {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.sliderC_ = new DA(e, {
            baseStep: r.baseStep,
            props: r.sliderProps,
            value: r.value,
            viewProps: this.viewProps
          }), this.textC_ = new Sr(e, {
            baseStep: r.baseStep,
            parser: r.parser,
            props: r.textProps,
            sliderProps: r.sliderProps,
            value: r.value,
            viewProps: r.viewProps
          }), this.view = new TA(e, {
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
          });
        }
        get sliderController() {
          return this.sliderC_;
        }
        get textController() {
          return this.textC_;
        }
      }
      function kr(s, e) {
        s.write(e);
      }
      function di(s) {
        const e = O;
        if (Array.isArray(s))
          return e.required.array(e.required.object({
            text: e.required.string,
            value: e.required.raw
          }))(s).value;
        if (typeof s == "object")
          return e.required.raw(s).value;
      }
      function zs(s) {
        if (s === "inline" || s === "popup")
          return s;
      }
      function hn(s) {
        const e = O;
        return e.required.object({
          max: e.optional.number,
          min: e.optional.number,
          step: e.optional.number
        })(s).value;
      }
      function Zs(s) {
        if (Array.isArray(s))
          return s;
        const e = [];
        return Object.keys(s).forEach((r) => {
          e.push({ text: r, value: s[r] });
        }), e;
      }
      function Gi(s) {
        return f(s) ? null : new on(Zs(s));
      }
      function RA(s) {
        const e = s ? dt(s, an) : null;
        return e ? e.step : null;
      }
      function pi(s, e) {
        const r = s && dt(s, an);
        return r ? Ws(r.step) : Math.max(Ws(e), 2);
      }
      function Zn(s) {
        const e = RA(s);
        return e ?? 1;
      }
      function $n(s, e) {
        var r;
        const c = s && dt(s, an), g = Math.abs((r = c == null ? void 0 : c.step) !== null && r !== void 0 ? r : e);
        return g === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(g)) - 1);
      }
      const fi = _("ckb");
      class FA {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.element = e.createElement("div"), this.element.classList.add(fi()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("label");
          c.classList.add(fi("l")), this.element.appendChild(c);
          const g = e.createElement("input");
          g.classList.add(fi("i")), g.type = "checkbox", c.appendChild(g), this.inputElement = g, r.viewProps.bindDisabled(this.inputElement);
          const w = e.createElement("div");
          w.classList.add(fi("w")), c.appendChild(w);
          const D = Ee(e, "check");
          w.appendChild(D), r.value.emitter.on("change", this.onValueChange_), this.value = r.value, this.update_();
        }
        update_() {
          this.inputElement.checked = this.value.rawValue;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class LA {
        constructor(e, r) {
          this.onInputChange_ = this.onInputChange_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.view = new FA(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.view.inputElement.addEventListener("change", this.onInputChange_);
        }
        onInputChange_(e) {
          const r = e.currentTarget;
          this.value.rawValue = r.checked;
        }
      }
      function PA(s) {
        const e = [], r = Gi(s.options);
        return r && e.push(r), new Pt(e);
      }
      const MA = {
        id: "input-bool",
        type: "input",
        accept: (s, e) => {
          if (typeof s != "boolean")
            return null;
          const c = G(e, {
            options: O.optional.custom(di)
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Er,
          constraint: (s) => PA(s.params),
          writer: (s) => kr
        },
        controller: (s) => {
          const e = s.document, r = s.value, c = s.constraint, g = c && dt(c, on);
          return g ? new Ut(e, {
            props: new j({
              options: g.values.value("options")
            }),
            value: r,
            viewProps: s.viewProps
          }) : new LA(e, {
            value: r,
            viewProps: s.viewProps
          });
        }
      }, Tn = _("col");
      class UA {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(Tn()), r.foldable.bindExpandedClass(this.element, Tn(void 0, "expanded")), L(r.foldable, "completed", J(this.element, Tn(void 0, "cpl")));
          const c = e.createElement("div");
          c.classList.add(Tn("h")), this.element.appendChild(c);
          const g = e.createElement("div");
          g.classList.add(Tn("s")), c.appendChild(g), this.swatchElement = g;
          const w = e.createElement("div");
          if (w.classList.add(Tn("t")), c.appendChild(w), this.textElement = w, r.pickerLayout === "inline") {
            const D = e.createElement("div");
            D.classList.add(Tn("p")), this.element.appendChild(D), this.pickerElement = D;
          } else
            this.pickerElement = null;
        }
      }
      function GA(s, e, r) {
        const c = it(s / 255, 0, 1), g = it(e / 255, 0, 1), w = it(r / 255, 0, 1), D = Math.max(c, g, w), ne = Math.min(c, g, w), ye = D - ne;
        let Se = 0, Ke = 0;
        const qe = (ne + D) / 2;
        return ye !== 0 && (Ke = ye / (1 - Math.abs(D + ne - 1)), c === D ? Se = (g - w) / ye : g === D ? Se = 2 + (w - c) / ye : Se = 4 + (c - g) / ye, Se = Se / 6 + (Se < 0 ? 1 : 0)), [Se * 360, Ke * 100, qe * 100];
      }
      function NA(s, e, r) {
        const c = (s % 360 + 360) % 360, g = it(e / 100, 0, 1), w = it(r / 100, 0, 1), D = (1 - Math.abs(2 * w - 1)) * g, ne = D * (1 - Math.abs(c / 60 % 2 - 1)), ye = w - D / 2;
        let Se, Ke, qe;
        return c >= 0 && c < 60 ? [Se, Ke, qe] = [D, ne, 0] : c >= 60 && c < 120 ? [Se, Ke, qe] = [ne, D, 0] : c >= 120 && c < 180 ? [Se, Ke, qe] = [0, D, ne] : c >= 180 && c < 240 ? [Se, Ke, qe] = [0, ne, D] : c >= 240 && c < 300 ? [Se, Ke, qe] = [ne, 0, D] : [Se, Ke, qe] = [D, 0, ne], [(Se + ye) * 255, (Ke + ye) * 255, (qe + ye) * 255];
      }
      function OA(s, e, r) {
        const c = it(s / 255, 0, 1), g = it(e / 255, 0, 1), w = it(r / 255, 0, 1), D = Math.max(c, g, w), ne = Math.min(c, g, w), ye = D - ne;
        let Se;
        ye === 0 ? Se = 0 : D === c ? Se = 60 * (((g - w) / ye % 6 + 6) % 6) : D === g ? Se = 60 * ((w - c) / ye + 2) : Se = 60 * ((c - g) / ye + 4);
        const Ke = D === 0 ? 0 : ye / D, qe = D;
        return [Se, Ke * 100, qe * 100];
      }
      function $s(s, e, r) {
        const c = Xs(s, 360), g = it(e / 100, 0, 1), w = it(r / 100, 0, 1), D = w * g, ne = D * (1 - Math.abs(c / 60 % 2 - 1)), ye = w - D;
        let Se, Ke, qe;
        return c >= 0 && c < 60 ? [Se, Ke, qe] = [D, ne, 0] : c >= 60 && c < 120 ? [Se, Ke, qe] = [ne, D, 0] : c >= 120 && c < 180 ? [Se, Ke, qe] = [0, D, ne] : c >= 180 && c < 240 ? [Se, Ke, qe] = [0, ne, D] : c >= 240 && c < 300 ? [Se, Ke, qe] = [ne, 0, D] : [Se, Ke, qe] = [D, 0, ne], [(Se + ye) * 255, (Ke + ye) * 255, (qe + ye) * 255];
      }
      function VA(s, e, r) {
        const c = r + e * (100 - Math.abs(2 * r - 100)) / 200;
        return [
          s,
          c !== 0 ? e * (100 - Math.abs(2 * r - 100)) / c : 0,
          r + e * (100 - Math.abs(2 * r - 100)) / (2 * 100)
        ];
      }
      function HA(s, e, r) {
        const c = 100 - Math.abs(r * (200 - e) / 100 - 100);
        return [s, c !== 0 ? e * r / c : 0, r * (200 - e) / (2 * 100)];
      }
      function Rn(s) {
        return [s[0], s[1], s[2]];
      }
      function eo(s, e) {
        return [s[0], s[1], s[2], e];
      }
      const KA = {
        hsl: {
          hsl: (s, e, r) => [s, e, r],
          hsv: VA,
          rgb: NA
        },
        hsv: {
          hsl: HA,
          hsv: (s, e, r) => [s, e, r],
          rgb: $s
        },
        rgb: {
          hsl: GA,
          hsv: OA,
          rgb: (s, e, r) => [s, e, r]
        }
      };
      function gi(s, e) {
        return [
          e === "float" ? 1 : s === "rgb" ? 255 : 360,
          e === "float" ? 1 : s === "rgb" ? 255 : 100,
          e === "float" ? 1 : s === "rgb" ? 255 : 100
        ];
      }
      function qA(s, e) {
        return s === e ? e : Xs(s, e);
      }
      function YA(s, e, r) {
        var c;
        const g = gi(e, r);
        return [
          e === "rgb" ? it(s[0], 0, g[0]) : qA(s[0], g[0]),
          it(s[1], 0, g[1]),
          it(s[2], 0, g[2]),
          it((c = s[3]) !== null && c !== void 0 ? c : 1, 0, 1)
        ];
      }
      function to(s, e, r, c) {
        const g = gi(e, r), w = gi(e, c);
        return s.map((D, ne) => D / g[ne] * w[ne]);
      }
      function JA(s, e, r) {
        const c = to(s, e.mode, e.type, "int"), g = KA[e.mode][r.mode](...c);
        return to(g, r.mode, "int", r.type);
      }
      function mi(s, e) {
        return typeof s != "object" || f(s) ? !1 : e in s && typeof s[e] == "number";
      }
      class Ge {
        static black(e = "int") {
          return new Ge([0, 0, 0], "rgb", e);
        }
        static fromObject(e, r = "int") {
          const c = "a" in e ? [e.r, e.g, e.b, e.a] : [e.r, e.g, e.b];
          return new Ge(c, "rgb", r);
        }
        static toRgbaObject(e, r = "int") {
          return e.toRgbaObject(r);
        }
        static isRgbColorObject(e) {
          return mi(e, "r") && mi(e, "g") && mi(e, "b");
        }
        static isRgbaColorObject(e) {
          return this.isRgbColorObject(e) && mi(e, "a");
        }
        static isColorObject(e) {
          return this.isRgbColorObject(e);
        }
        static equals(e, r) {
          if (e.mode !== r.mode)
            return !1;
          const c = e.comps_, g = r.comps_;
          for (let w = 0; w < c.length; w++)
            if (c[w] !== g[w])
              return !1;
          return !0;
        }
        constructor(e, r, c = "int") {
          this.mode = r, this.type = c, this.comps_ = YA(e, r, c);
        }
        getComponents(e, r = "int") {
          return eo(JA(Rn(this.comps_), { mode: this.mode, type: this.type }, { mode: e ?? this.mode, type: r }), this.comps_[3]);
        }
        toRgbaObject(e = "int") {
          const r = this.getComponents("rgb", e);
          return {
            r: r[0],
            g: r[1],
            b: r[2],
            a: r[3]
          };
        }
      }
      const dn = _("colp");
      class jA {
        constructor(e, r) {
          this.alphaViews_ = null, this.element = e.createElement("div"), this.element.classList.add(dn()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(dn("hsv"));
          const g = e.createElement("div");
          g.classList.add(dn("sv")), this.svPaletteView_ = r.svPaletteView, g.appendChild(this.svPaletteView_.element), c.appendChild(g);
          const w = e.createElement("div");
          w.classList.add(dn("h")), this.hPaletteView_ = r.hPaletteView, w.appendChild(this.hPaletteView_.element), c.appendChild(w), this.element.appendChild(c);
          const D = e.createElement("div");
          if (D.classList.add(dn("rgb")), this.textView_ = r.textView, D.appendChild(this.textView_.element), this.element.appendChild(D), r.alphaViews) {
            this.alphaViews_ = {
              palette: r.alphaViews.palette,
              text: r.alphaViews.text
            };
            const ne = e.createElement("div");
            ne.classList.add(dn("a"));
            const ye = e.createElement("div");
            ye.classList.add(dn("ap")), ye.appendChild(this.alphaViews_.palette.element), ne.appendChild(ye);
            const Se = e.createElement("div");
            Se.classList.add(dn("at")), Se.appendChild(this.alphaViews_.text.element), ne.appendChild(Se), this.element.appendChild(ne);
          }
        }
        get allFocusableElements() {
          const e = [
            this.svPaletteView_.element,
            this.hPaletteView_.element,
            this.textView_.modeSelectElement,
            ...this.textView_.textViews.map((r) => r.inputElement)
          ];
          return this.alphaViews_ && e.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), e;
        }
      }
      function WA(s) {
        return s === "int" ? "int" : s === "float" ? "float" : void 0;
      }
      function Ni(s) {
        const e = O;
        return G(s, {
          alpha: e.optional.boolean,
          color: e.optional.object({
            alpha: e.optional.boolean,
            type: e.optional.custom(WA)
          }),
          expanded: e.optional.boolean,
          picker: e.optional.custom(zs)
        });
      }
      function Fn(s) {
        return s ? 0.1 : 1;
      }
      function Ln(s) {
        var e;
        return (e = s.color) === null || e === void 0 ? void 0 : e.type;
      }
      function XA(s, e) {
        return s.alpha === e.alpha && s.mode === e.mode && s.notation === e.notation && s.type === e.type;
      }
      function wt(s, e) {
        const r = s.match(/^(.+)%$/);
        return Math.min(r ? parseFloat(r[1]) * 0.01 * e : parseFloat(s), e);
      }
      const zA = {
        deg: (s) => s,
        grad: (s) => s * 360 / 400,
        rad: (s) => s * 360 / (2 * Math.PI),
        turn: (s) => s * 360
      };
      function no(s) {
        const e = s.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
        if (!e)
          return parseFloat(s);
        const r = parseFloat(e[1]), c = e[2];
        return zA[c](r);
      }
      function ro(s) {
        const e = s.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
          return null;
        const r = [
          wt(e[1], 255),
          wt(e[2], 255),
          wt(e[3], 255)
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r;
      }
      function io(s) {
        return (e) => {
          const r = ro(e);
          return r ? new Ge(r, "rgb", s) : null;
        };
      }
      function so(s) {
        const e = s.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
          return null;
        const r = [
          wt(e[1], 255),
          wt(e[2], 255),
          wt(e[3], 255),
          wt(e[4], 1)
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r;
      }
      function oo(s) {
        return (e) => {
          const r = so(e);
          return r ? new Ge(r, "rgb", s) : null;
        };
      }
      function ao(s) {
        const e = s.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
          return null;
        const r = [
          no(e[1]),
          wt(e[2], 100),
          wt(e[3], 100)
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r;
      }
      function Ao(s) {
        return (e) => {
          const r = ao(e);
          return r ? new Ge(r, "hsl", s) : null;
        };
      }
      function lo(s) {
        const e = s.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!e)
          return null;
        const r = [
          no(e[1]),
          wt(e[2], 100),
          wt(e[3], 100),
          wt(e[4], 1)
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r;
      }
      function co(s) {
        return (e) => {
          const r = lo(e);
          return r ? new Ge(r, "hsl", s) : null;
        };
      }
      function uo(s) {
        const e = s.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (e)
          return [
            parseInt(e[1] + e[1], 16),
            parseInt(e[2] + e[2], 16),
            parseInt(e[3] + e[3], 16)
          ];
        const r = s.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return r ? [
          parseInt(r[1], 16),
          parseInt(r[2], 16),
          parseInt(r[3], 16)
        ] : null;
      }
      function ZA(s) {
        const e = uo(s);
        return e ? new Ge(e, "rgb", "int") : null;
      }
      function ho(s) {
        const e = s.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (e)
          return [
            parseInt(e[1] + e[1], 16),
            parseInt(e[2] + e[2], 16),
            parseInt(e[3] + e[3], 16),
            ze(parseInt(e[4] + e[4], 16), 0, 255, 0, 1)
          ];
        const r = s.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return r ? [
          parseInt(r[1], 16),
          parseInt(r[2], 16),
          parseInt(r[3], 16),
          ze(parseInt(r[4], 16), 0, 255, 0, 1)
        ] : null;
      }
      function $A(s) {
        const e = ho(s);
        return e ? new Ge(e, "rgb", "int") : null;
      }
      function po(s) {
        const e = s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!e)
          return null;
        const r = [
          parseFloat(e[1]),
          parseFloat(e[2]),
          parseFloat(e[3])
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) ? null : r;
      }
      function fo(s) {
        return (e) => {
          const r = po(e);
          return r ? new Ge(r, "rgb", s) : null;
        };
      }
      function go(s) {
        const e = s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!e)
          return null;
        const r = [
          parseFloat(e[1]),
          parseFloat(e[2]),
          parseFloat(e[3]),
          parseFloat(e[4])
        ];
        return isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2]) || isNaN(r[3]) ? null : r;
      }
      function mo(s) {
        return (e) => {
          const r = go(e);
          return r ? new Ge(r, "rgb", s) : null;
        };
      }
      const el = [
        {
          parser: uo,
          result: {
            alpha: !1,
            mode: "rgb",
            notation: "hex"
          }
        },
        {
          parser: ho,
          result: {
            alpha: !0,
            mode: "rgb",
            notation: "hex"
          }
        },
        {
          parser: ro,
          result: {
            alpha: !1,
            mode: "rgb",
            notation: "func"
          }
        },
        {
          parser: so,
          result: {
            alpha: !0,
            mode: "rgb",
            notation: "func"
          }
        },
        {
          parser: ao,
          result: {
            alpha: !1,
            mode: "hsl",
            notation: "func"
          }
        },
        {
          parser: lo,
          result: {
            alpha: !0,
            mode: "hsl",
            notation: "func"
          }
        },
        {
          parser: po,
          result: {
            alpha: !1,
            mode: "rgb",
            notation: "object"
          }
        },
        {
          parser: go,
          result: {
            alpha: !0,
            mode: "rgb",
            notation: "object"
          }
        }
      ];
      function tl(s) {
        return el.reduce((e, { parser: r, result: c }) => e || (r(s) ? c : null), null);
      }
      function Oi(s, e = "int") {
        const r = tl(s);
        return r ? r.notation === "hex" && e !== "float" ? Object.assign(Object.assign({}, r), { type: "int" }) : r.notation === "func" ? Object.assign(Object.assign({}, r), { type: e }) : null : null;
      }
      const vo = {
        int: [
          ZA,
          $A,
          io("int"),
          oo("int"),
          Ao("int"),
          co("int"),
          fo("int"),
          mo("int")
        ],
        float: [
          io("float"),
          oo("float"),
          Ao("float"),
          co("float"),
          fo("float"),
          mo("float")
        ]
      };
      function nl(s) {
        const e = vo[s];
        return (r) => {
          if (typeof r != "string")
            return Ge.black(s);
          const c = e.reduce((g, w) => g || w(r), null);
          return c ?? Ge.black(s);
        };
      }
      function Vi(s) {
        const e = vo[s];
        return (r) => e.reduce((c, g) => c || g(r), null);
      }
      function Co(s) {
        const e = it(Math.floor(s), 0, 255).toString(16);
        return e.length === 1 ? `0${e}` : e;
      }
      function Io(s, e = "#") {
        const r = Rn(s.getComponents("rgb")).map(Co).join("");
        return `${e}${r}`;
      }
      function Hi(s, e = "#") {
        const r = s.getComponents("rgb"), c = [r[0], r[1], r[2], r[3] * 255].map(Co).join("");
        return `${e}${c}`;
      }
      function Eo(s, e) {
        const r = at(e === "float" ? 2 : 0);
        return `rgb(${Rn(s.getComponents("rgb", e)).map((g) => r(g)).join(", ")})`;
      }
      function rl(s) {
        return (e) => Eo(e, s);
      }
      function vi(s, e) {
        const r = at(2), c = at(e === "float" ? 2 : 0);
        return `rgba(${s.getComponents("rgb", e).map((w, D) => (D === 3 ? r : c)(w)).join(", ")})`;
      }
      function il(s) {
        return (e) => vi(e, s);
      }
      function sl(s) {
        const e = [
          at(0),
          hi,
          hi
        ];
        return `hsl(${Rn(s.getComponents("hsl")).map((c, g) => e[g](c)).join(", ")})`;
      }
      function ol(s) {
        const e = [
          at(0),
          hi,
          hi,
          at(2)
        ];
        return `hsla(${s.getComponents("hsl").map((c, g) => e[g](c)).join(", ")})`;
      }
      function wo(s, e) {
        const r = at(e === "float" ? 2 : 0), c = ["r", "g", "b"];
        return `{${Rn(s.getComponents("rgb", e)).map((w, D) => `${c[D]}: ${r(w)}`).join(", ")}}`;
      }
      function al(s) {
        return (e) => wo(e, s);
      }
      function bo(s, e) {
        const r = at(2), c = at(e === "float" ? 2 : 0), g = ["r", "g", "b", "a"];
        return `{${s.getComponents("rgb", e).map((D, ne) => {
          const ye = ne === 3 ? r : c;
          return `${g[ne]}: ${ye(D)}`;
        }).join(", ")}}`;
      }
      function Al(s) {
        return (e) => bo(e, s);
      }
      const ll = [
        {
          format: {
            alpha: !1,
            mode: "rgb",
            notation: "hex",
            type: "int"
          },
          stringifier: Io
        },
        {
          format: {
            alpha: !0,
            mode: "rgb",
            notation: "hex",
            type: "int"
          },
          stringifier: Hi
        },
        {
          format: {
            alpha: !1,
            mode: "hsl",
            notation: "func",
            type: "int"
          },
          stringifier: sl
        },
        {
          format: {
            alpha: !0,
            mode: "hsl",
            notation: "func",
            type: "int"
          },
          stringifier: ol
        },
        ...["int", "float"].reduce((s, e) => [
          ...s,
          {
            format: {
              alpha: !1,
              mode: "rgb",
              notation: "func",
              type: e
            },
            stringifier: rl(e)
          },
          {
            format: {
              alpha: !0,
              mode: "rgb",
              notation: "func",
              type: e
            },
            stringifier: il(e)
          },
          {
            format: {
              alpha: !1,
              mode: "rgb",
              notation: "object",
              type: e
            },
            stringifier: al(e)
          },
          {
            format: {
              alpha: !0,
              mode: "rgb",
              notation: "object",
              type: e
            },
            stringifier: Al(e)
          }
        ], [])
      ];
      function Ki(s) {
        return ll.reduce((e, r) => e || (XA(r.format, s) ? r.stringifier : null), null);
      }
      const Dr = _("apl");
      class cl {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.value = r.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Dr()), r.viewProps.bindClassModifiers(this.element), r.viewProps.bindTabIndex(this.element);
          const c = e.createElement("div");
          c.classList.add(Dr("b")), this.element.appendChild(c);
          const g = e.createElement("div");
          g.classList.add(Dr("c")), c.appendChild(g), this.colorElem_ = g;
          const w = e.createElement("div");
          w.classList.add(Dr("m")), this.element.appendChild(w), this.markerElem_ = w;
          const D = e.createElement("div");
          D.classList.add(Dr("p")), this.markerElem_.appendChild(D), this.previewElem_ = D, this.update_();
        }
        update_() {
          const e = this.value.rawValue, r = e.getComponents("rgb"), c = new Ge([r[0], r[1], r[2], 0], "rgb"), g = new Ge([r[0], r[1], r[2], 255], "rgb"), w = [
            "to right",
            vi(c),
            vi(g)
          ];
          this.colorElem_.style.background = `linear-gradient(${w.join(",")})`, this.previewElem_.style.backgroundColor = vi(e);
          const D = ze(r[3], 0, 1, 0, 100);
          this.markerElem_.style.left = `${D}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class ul {
        constructor(e, r) {
          this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.view = new cl(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.ptHandler_ = new Dn(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(e, r) {
          if (!e.point)
            return;
          const c = e.point.x / e.bounds.width, g = this.value.rawValue, [w, D, ne] = g.getComponents("hsv");
          this.value.setRawValue(new Ge([w, D, ne, c], "hsv"), r);
        }
        onPointerDown_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerMove_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerUp_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !0,
            last: !0
          });
        }
        onKeyDown_(e) {
          const r = pt(Fn(!0), Xt(e));
          if (r === 0)
            return;
          const c = this.value.rawValue, [g, w, D, ne] = c.getComponents("hsv");
          this.value.setRawValue(new Ge([g, w, D, ne + r], "hsv"), {
            forceEmit: !1,
            last: !1
          });
        }
        onKeyUp_(e) {
          pt(Fn(!0), Xt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
      }
      const er = _("coltxt");
      function hl(s) {
        const e = s.createElement("select"), r = [
          { text: "RGB", value: "rgb" },
          { text: "HSL", value: "hsl" },
          { text: "HSV", value: "hsv" }
        ];
        return e.appendChild(r.reduce((c, g) => {
          const w = s.createElement("option");
          return w.textContent = g.text, w.value = g.value, c.appendChild(w), c;
        }, s.createDocumentFragment())), e;
      }
      class dl {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(er()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(er("m")), this.modeElem_ = hl(e), this.modeElem_.classList.add(er("ms")), c.appendChild(this.modeSelectElement), r.viewProps.bindDisabled(this.modeElem_);
          const g = e.createElement("div");
          g.classList.add(er("mm")), g.appendChild(Ee(e, "dropdown")), c.appendChild(g), this.element.appendChild(c);
          const w = e.createElement("div");
          w.classList.add(er("w")), this.element.appendChild(w), this.textsElem_ = w, this.textViews_ = r.textViews, this.applyTextViews_(), T(r.colorMode, (D) => {
            this.modeElem_.value = D;
          });
        }
        get modeSelectElement() {
          return this.modeElem_;
        }
        get textViews() {
          return this.textViews_;
        }
        set textViews(e) {
          this.textViews_ = e, this.applyTextViews_();
        }
        applyTextViews_() {
          Fe(this.textsElem_);
          const e = this.element.ownerDocument;
          this.textViews_.forEach((r) => {
            const c = e.createElement("div");
            c.classList.add(er("c")), c.appendChild(r.element), this.textsElem_.appendChild(c);
          });
        }
      }
      function pl(s) {
        return at(s === "float" ? 2 : 0);
      }
      function fl(s, e, r) {
        const c = gi(s, e)[r];
        return new Mt({
          min: 0,
          max: c
        });
      }
      function qi(s, e, r) {
        return new Sr(s, {
          arrayPosition: r === 0 ? "fst" : r === 2 ? "lst" : "mid",
          baseStep: Fn(!1),
          parser: e.parser,
          props: j.fromObject({
            draggingScale: e.colorType === "float" ? 0.01 : 1,
            formatter: pl(e.colorType)
          }),
          value: H(0, {
            constraint: fl(e.colorMode, e.colorType, r)
          }),
          viewProps: e.viewProps
        });
      }
      class gl {
        constructor(e, r) {
          this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = r.colorType, this.parser_ = r.parser, this.value = r.value, this.viewProps = r.viewProps, this.colorMode = H(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(e), this.view = new dl(e, {
            colorMode: this.colorMode,
            textViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
            viewProps: this.viewProps
          }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
        }
        createComponentControllers_(e) {
          const r = {
            colorMode: this.colorMode.rawValue,
            colorType: this.colorType_,
            parser: this.parser_,
            viewProps: this.viewProps
          }, c = [
            qi(e, r, 0),
            qi(e, r, 1),
            qi(e, r, 2)
          ];
          return c.forEach((g, w) => {
            Qr({
              primary: this.value,
              secondary: g.value,
              forward: (D) => D.rawValue.getComponents(this.colorMode.rawValue, this.colorType_)[w],
              backward: (D, ne) => {
                const ye = this.colorMode.rawValue, Se = D.rawValue.getComponents(ye, this.colorType_);
                return Se[w] = ne.rawValue, new Ge(eo(Rn(Se), Se[3]), ye, this.colorType_);
              }
            });
          }), c;
        }
        onModeSelectChange_(e) {
          const r = e.currentTarget;
          this.colorMode.rawValue = r.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.textViews = [
            this.ccs_[0].view,
            this.ccs_[1].view,
            this.ccs_[2].view
          ];
        }
      }
      const Yi = _("hpl");
      class ml {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.value = r.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Yi()), r.viewProps.bindClassModifiers(this.element), r.viewProps.bindTabIndex(this.element);
          const c = e.createElement("div");
          c.classList.add(Yi("c")), this.element.appendChild(c);
          const g = e.createElement("div");
          g.classList.add(Yi("m")), this.element.appendChild(g), this.markerElem_ = g, this.update_();
        }
        update_() {
          const e = this.value.rawValue, [r] = e.getComponents("hsv");
          this.markerElem_.style.backgroundColor = Eo(new Ge([r, 100, 100], "hsv"));
          const c = ze(r, 0, 360, 0, 100);
          this.markerElem_.style.left = `${c}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class vl {
        constructor(e, r) {
          this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.view = new ml(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.ptHandler_ = new Dn(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(e, r) {
          if (!e.point)
            return;
          const c = ze(it(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360), g = this.value.rawValue, [, w, D, ne] = g.getComponents("hsv");
          this.value.setRawValue(new Ge([c, w, D, ne], "hsv"), r);
        }
        onPointerDown_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerMove_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerUp_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !0,
            last: !0
          });
        }
        onKeyDown_(e) {
          const r = pt(Fn(!1), Xt(e));
          if (r === 0)
            return;
          const c = this.value.rawValue, [g, w, D, ne] = c.getComponents("hsv");
          this.value.setRawValue(new Ge([g + r, w, D, ne], "hsv"), {
            forceEmit: !1,
            last: !1
          });
        }
        onKeyUp_(e) {
          pt(Fn(!1), Xt(e)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
      }
      const Ji = _("svp"), Bo = 64;
      class Cl {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), this.value = r.value, this.value.emitter.on("change", this.onValueChange_), this.element = e.createElement("div"), this.element.classList.add(Ji()), r.viewProps.bindClassModifiers(this.element), r.viewProps.bindTabIndex(this.element);
          const c = e.createElement("canvas");
          c.height = Bo, c.width = Bo, c.classList.add(Ji("c")), this.element.appendChild(c), this.canvasElement = c;
          const g = e.createElement("div");
          g.classList.add(Ji("m")), this.element.appendChild(g), this.markerElem_ = g, this.update_();
        }
        update_() {
          const e = Be(this.canvasElement);
          if (!e)
            return;
          const c = this.value.rawValue.getComponents("hsv"), g = this.canvasElement.width, w = this.canvasElement.height, D = e.getImageData(0, 0, g, w), ne = D.data;
          for (let Ke = 0; Ke < w; Ke++)
            for (let qe = 0; qe < g; qe++) {
              const Pn = ze(qe, 0, g, 0, 100), Rr = ze(Ke, 0, w, 100, 0), Fr = $s(c[0], Pn, Rr), Ci = (Ke * g + qe) * 4;
              ne[Ci] = Fr[0], ne[Ci + 1] = Fr[1], ne[Ci + 2] = Fr[2], ne[Ci + 3] = 255;
            }
          e.putImageData(D, 0, 0);
          const ye = ze(c[1], 0, 100, 0, 100);
          this.markerElem_.style.left = `${ye}%`;
          const Se = ze(c[2], 0, 100, 100, 0);
          this.markerElem_.style.top = `${Se}%`;
        }
        onValueChange_() {
          this.update_();
        }
      }
      class Il {
        constructor(e, r) {
          this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.view = new Cl(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.ptHandler_ = new Dn(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
        }
        handlePointerEvent_(e, r) {
          if (!e.point)
            return;
          const c = ze(e.point.x, 0, e.bounds.width, 0, 100), g = ze(e.point.y, 0, e.bounds.height, 100, 0), [w, , , D] = this.value.rawValue.getComponents("hsv");
          this.value.setRawValue(new Ge([w, c, g, D], "hsv"), r);
        }
        onPointerDown_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerMove_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerUp_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !0,
            last: !0
          });
        }
        onKeyDown_(e) {
          js(e.key) && e.preventDefault();
          const [r, c, g, w] = this.value.rawValue.getComponents("hsv"), D = Fn(!1), ne = pt(D, Xt(e)), ye = pt(D, xr(e));
          ne === 0 && ye === 0 || this.value.setRawValue(new Ge([r, c + ne, g + ye, w], "hsv"), {
            forceEmit: !1,
            last: !1
          });
        }
        onKeyUp_(e) {
          const r = Fn(!1), c = pt(r, Xt(e)), g = pt(r, xr(e));
          c === 0 && g === 0 || this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
      }
      class El {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.hPaletteC_ = new vl(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.svPaletteC_ = new Il(e, {
            value: this.value,
            viewProps: this.viewProps
          }), this.alphaIcs_ = r.supportsAlpha ? {
            palette: new ul(e, {
              value: this.value,
              viewProps: this.viewProps
            }),
            text: new Sr(e, {
              parser: Wt,
              baseStep: 0.1,
              props: j.fromObject({
                draggingScale: 0.01,
                formatter: at(2)
              }),
              value: H(0, {
                constraint: new Mt({ min: 0, max: 1 })
              }),
              viewProps: this.viewProps
            })
          } : null, this.alphaIcs_ && Qr({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (c) => c.rawValue.getComponents()[3],
            backward: (c, g) => {
              const w = c.rawValue.getComponents();
              return w[3] = g.rawValue, new Ge(w, c.rawValue.mode);
            }
          }), this.textC_ = new gl(e, {
            colorType: r.colorType,
            parser: Wt,
            value: this.value,
            viewProps: this.viewProps
          }), this.view = new jA(e, {
            alphaViews: this.alphaIcs_ ? {
              palette: this.alphaIcs_.palette.view,
              text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: r.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textView: this.textC_.view,
            viewProps: this.viewProps
          });
        }
        get textController() {
          return this.textC_;
        }
      }
      const ji = _("colsw");
      class wl {
        constructor(e, r) {
          this.onValueChange_ = this.onValueChange_.bind(this), r.value.emitter.on("change", this.onValueChange_), this.value = r.value, this.element = e.createElement("div"), this.element.classList.add(ji()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(ji("sw")), this.element.appendChild(c), this.swatchElem_ = c;
          const g = e.createElement("button");
          g.classList.add(ji("b")), r.viewProps.bindDisabled(g), this.element.appendChild(g), this.buttonElement = g, this.update_();
        }
        update_() {
          const e = this.value.rawValue;
          this.swatchElem_.style.backgroundColor = Hi(e);
        }
        onValueChange_() {
          this.update_();
        }
      }
      class bl {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.view = new wl(e, {
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      class Wi {
        constructor(e, r) {
          this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.foldable_ = _e.create(r.expanded), this.swatchC_ = new bl(e, {
            value: this.value,
            viewProps: this.viewProps
          });
          const c = this.swatchC_.view.buttonElement;
          c.addEventListener("blur", this.onButtonBlur_), c.addEventListener("click", this.onButtonClick_), this.textC_ = new cn(e, {
            parser: r.parser,
            props: j.fromObject({
              formatter: r.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
          }), this.view = new UA(e, {
            foldable: this.foldable_,
            pickerLayout: r.pickerLayout
          }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = r.pickerLayout === "popup" ? new ln(e, {
            viewProps: this.viewProps
          }) : null;
          const g = new El(e, {
            colorType: r.colorType,
            supportsAlpha: r.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
          });
          g.view.allFocusableElements.forEach((w) => {
            w.addEventListener("blur", this.onPopupChildBlur_), w.addEventListener("keydown", this.onPopupChildKeydown_);
          }), this.pickerC_ = g, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(g.view.element), Qr({
            primary: this.foldable_.value("expanded"),
            secondary: this.popC_.shows,
            forward: (w) => w.rawValue,
            backward: (w, D) => D.rawValue
          })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), $(this.foldable_, this.view.pickerElement));
        }
        get textController() {
          return this.textC_;
        }
        onButtonBlur_(e) {
          if (!this.popC_)
            return;
          const r = this.view.element, c = e.relatedTarget;
          (!c || !r.contains(c)) && (this.popC_.shows.rawValue = !1);
        }
        onButtonClick_() {
          this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
        }
        onPopupChildBlur_(e) {
          if (!this.popC_)
            return;
          const r = this.popC_.view.element, c = Te(e);
          c && r.contains(c) || c && c === this.swatchC_.view.buttonElement && !Ie(r.ownerDocument) || (this.popC_.shows.rawValue = !1);
        }
        onPopupChildKeydown_(e) {
          this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && e.key === "Escape" && this.swatchC_.view.buttonElement.focus();
        }
      }
      function Bl(s, e) {
        return Ge.isColorObject(s) ? Ge.fromObject(s, e) : Ge.black(e);
      }
      function _l(s) {
        return Rn(s.getComponents("rgb")).reduce((e, r) => e << 8 | Math.floor(r) & 255, 0);
      }
      function yl(s) {
        return s.getComponents("rgb").reduce((e, r, c) => {
          const g = Math.floor(c === 3 ? r * 255 : r) & 255;
          return e << 8 | g;
        }, 0) >>> 0;
      }
      function Ql(s) {
        return new Ge([s >> 16 & 255, s >> 8 & 255, s & 255], "rgb");
      }
      function xl(s) {
        return new Ge([
          s >> 24 & 255,
          s >> 16 & 255,
          s >> 8 & 255,
          ze(s & 255, 0, 255, 0, 1)
        ], "rgb");
      }
      function Sl(s) {
        return typeof s != "number" ? Ge.black() : Ql(s);
      }
      function kl(s) {
        return typeof s != "number" ? Ge.black() : xl(s);
      }
      function Dl(s) {
        const e = Ki(s);
        return e ? (r, c) => {
          kr(r, e(c));
        } : null;
      }
      function Tl(s) {
        const e = s ? yl : _l;
        return (r, c) => {
          kr(r, e(c));
        };
      }
      function Rl(s, e, r) {
        const c = e.toRgbaObject(r);
        s.writeProperty("r", c.r), s.writeProperty("g", c.g), s.writeProperty("b", c.b), s.writeProperty("a", c.a);
      }
      function Fl(s, e, r) {
        const c = e.toRgbaObject(r);
        s.writeProperty("r", c.r), s.writeProperty("g", c.g), s.writeProperty("b", c.b);
      }
      function Ll(s, e) {
        return (r, c) => {
          s ? Rl(r, c, e) : Fl(r, c, e);
        };
      }
      function Xi(s) {
        var e;
        return !!(s != null && s.alpha || !((e = s == null ? void 0 : s.color) === null || e === void 0) && e.alpha);
      }
      function Pl(s) {
        return s ? (e) => Hi(e, "0x") : (e) => Io(e, "0x");
      }
      function Ml(s) {
        return "color" in s || "view" in s && s.view === "color";
      }
      const Ul = {
        id: "input-color-number",
        type: "input",
        accept: (s, e) => {
          if (typeof s != "number" || !Ml(e))
            return null;
          const r = Ni(e);
          return r ? {
            initialValue: s,
            params: r
          } : null;
        },
        binding: {
          reader: (s) => Xi(s.params) ? kl : Sl,
          equals: Ge.equals,
          writer: (s) => Tl(Xi(s.params))
        },
        controller: (s) => {
          const e = Xi(s.params), r = "expanded" in s.params ? s.params.expanded : void 0, c = "picker" in s.params ? s.params.picker : void 0;
          return new Wi(s.document, {
            colorType: "int",
            expanded: r ?? !1,
            formatter: Pl(e),
            parser: Vi("int"),
            pickerLayout: c ?? "popup",
            supportsAlpha: e,
            value: s.value,
            viewProps: s.viewProps
          });
        }
      };
      function Gl(s) {
        return Ge.isRgbaColorObject(s);
      }
      function Nl(s) {
        return (e) => Bl(e, s);
      }
      function Ol(s, e) {
        return (r) => s ? bo(r, e) : wo(r, e);
      }
      const Vl = {
        id: "input-color-object",
        type: "input",
        accept: (s, e) => {
          if (!Ge.isColorObject(s))
            return null;
          const r = Ni(e);
          return r ? {
            initialValue: s,
            params: r
          } : null;
        },
        binding: {
          reader: (s) => Nl(Ln(s.params)),
          equals: Ge.equals,
          writer: (s) => Ll(Gl(s.initialValue), Ln(s.params))
        },
        controller: (s) => {
          var e;
          const r = Ge.isRgbaColorObject(s.initialValue), c = "expanded" in s.params ? s.params.expanded : void 0, g = "picker" in s.params ? s.params.picker : void 0, w = (e = Ln(s.params)) !== null && e !== void 0 ? e : "int";
          return new Wi(s.document, {
            colorType: w,
            expanded: c ?? !1,
            formatter: Ol(r, w),
            parser: Vi(w),
            pickerLayout: g ?? "popup",
            supportsAlpha: r,
            value: s.value,
            viewProps: s.viewProps
          });
        }
      }, Hl = {
        id: "input-color-string",
        type: "input",
        accept: (s, e) => {
          if (typeof s != "string" || "view" in e && e.view === "text")
            return null;
          const r = Oi(s, Ln(e));
          if (!r || !Ki(r))
            return null;
          const g = Ni(e);
          return g ? {
            initialValue: s,
            params: g
          } : null;
        },
        binding: {
          reader: (s) => {
            var e;
            return nl((e = Ln(s.params)) !== null && e !== void 0 ? e : "int");
          },
          equals: Ge.equals,
          writer: (s) => {
            const e = Oi(s.initialValue, Ln(s.params));
            if (!e)
              throw C.shouldNeverHappen();
            const r = Dl(e);
            if (!r)
              throw C.notBindable();
            return r;
          }
        },
        controller: (s) => {
          const e = Oi(s.initialValue, Ln(s.params));
          if (!e)
            throw C.shouldNeverHappen();
          const r = Ki(e);
          if (!r)
            throw C.shouldNeverHappen();
          const c = "expanded" in s.params ? s.params.expanded : void 0, g = "picker" in s.params ? s.params.picker : void 0;
          return new Wi(s.document, {
            colorType: e.type,
            expanded: c ?? !1,
            formatter: r,
            parser: Vi(e.type),
            pickerLayout: g ?? "popup",
            supportsAlpha: e.alpha,
            value: s.value,
            viewProps: s.viewProps
          });
        }
      };
      class pn {
        constructor(e) {
          this.components = e.components, this.asm_ = e.assembly;
        }
        constrain(e) {
          const r = this.asm_.toComponents(e).map((c, g) => {
            var w, D;
            return (D = (w = this.components[g]) === null || w === void 0 ? void 0 : w.constrain(c)) !== null && D !== void 0 ? D : c;
          });
          return this.asm_.fromComponents(r);
        }
      }
      const _o = _("pndtxt");
      class Kl {
        constructor(e, r) {
          this.textViews = r.textViews, this.element = e.createElement("div"), this.element.classList.add(_o()), this.textViews.forEach((c) => {
            const g = e.createElement("div");
            g.classList.add(_o("a")), g.appendChild(c.element), this.element.appendChild(g);
          });
        }
      }
      function ql(s, e, r) {
        return new Sr(s, {
          arrayPosition: r === 0 ? "fst" : r === e.axes.length - 1 ? "lst" : "mid",
          baseStep: e.axes[r].baseStep,
          parser: e.parser,
          props: e.axes[r].textProps,
          value: H(0, {
            constraint: e.axes[r].constraint
          }),
          viewProps: e.viewProps
        });
      }
      class zi {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.acs_ = r.axes.map((c, g) => ql(e, r, g)), this.acs_.forEach((c, g) => {
            Qr({
              primary: this.value,
              secondary: c.value,
              forward: (w) => r.assembly.toComponents(w.rawValue)[g],
              backward: (w, D) => {
                const ne = r.assembly.toComponents(w.rawValue);
                return ne[g] = D.rawValue, r.assembly.fromComponents(ne);
              }
            });
          }), this.view = new Kl(e, {
            textViews: this.acs_.map((c) => c.view)
          });
        }
      }
      function yo(s, e) {
        return "step" in s && !f(s.step) ? new an(s.step, e) : null;
      }
      function Qo(s) {
        return !f(s.max) && !f(s.min) ? new Mt({
          max: s.max,
          min: s.min
        }) : !f(s.max) || !f(s.min) ? new vr({
          max: s.max,
          min: s.min
        }) : null;
      }
      function Yl(s) {
        const e = dt(s, Mt);
        if (e)
          return [e.values.get("min"), e.values.get("max")];
        const r = dt(s, vr);
        return r ? [r.minValue, r.maxValue] : [void 0, void 0];
      }
      function Jl(s, e) {
        const r = [], c = yo(s, e);
        c && r.push(c);
        const g = Qo(s);
        g && r.push(g);
        const w = Gi(s.options);
        return w && r.push(w), new Pt(r);
      }
      const jl = {
        id: "input-number",
        type: "input",
        accept: (s, e) => {
          if (typeof s != "number")
            return null;
          const r = O, c = G(e, {
            format: r.optional.function,
            max: r.optional.number,
            min: r.optional.number,
            options: r.optional.custom(di),
            step: r.optional.number
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Ys,
          constraint: (s) => Jl(s.params, s.initialValue),
          writer: (s) => kr
        },
        controller: (s) => {
          var e;
          const r = s.value, c = s.constraint, g = c && dt(c, on);
          if (g)
            return new Ut(s.document, {
              props: new j({
                options: g.values.value("options")
              }),
              value: r,
              viewProps: s.viewProps
            });
          const w = (e = "format" in s.params ? s.params.format : void 0) !== null && e !== void 0 ? e : at(pi(c, r.rawValue)), D = c && dt(c, Mt);
          return D ? new Ui(s.document, {
            baseStep: Zn(c),
            parser: Wt,
            sliderProps: new j({
              maxValue: D.values.value("max"),
              minValue: D.values.value("min")
            }),
            textProps: j.fromObject({
              draggingScale: $n(c, r.rawValue),
              formatter: w
            }),
            value: r,
            viewProps: s.viewProps
          }) : new Sr(s.document, {
            baseStep: Zn(c),
            parser: Wt,
            props: j.fromObject({
              draggingScale: $n(c, r.rawValue),
              formatter: w
            }),
            value: r,
            viewProps: s.viewProps
          });
        }
      };
      class fn {
        constructor(e = 0, r = 0) {
          this.x = e, this.y = r;
        }
        getComponents() {
          return [this.x, this.y];
        }
        static isObject(e) {
          if (f(e))
            return !1;
          const r = e.x, c = e.y;
          return !(typeof r != "number" || typeof c != "number");
        }
        static equals(e, r) {
          return e.x === r.x && e.y === r.y;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y
          };
        }
      }
      const xo = {
        toComponents: (s) => s.getComponents(),
        fromComponents: (s) => new fn(...s)
      }, tr = _("p2d");
      class Wl {
        constructor(e, r) {
          this.element = e.createElement("div"), this.element.classList.add(tr()), r.viewProps.bindClassModifiers(this.element), T(r.expanded, J(this.element, tr(void 0, "expanded")));
          const c = e.createElement("div");
          c.classList.add(tr("h")), this.element.appendChild(c);
          const g = e.createElement("button");
          g.classList.add(tr("b")), g.appendChild(Ee(e, "p2dpad")), r.viewProps.bindDisabled(g), c.appendChild(g), this.buttonElement = g;
          const w = e.createElement("div");
          if (w.classList.add(tr("t")), c.appendChild(w), this.textElement = w, r.pickerLayout === "inline") {
            const D = e.createElement("div");
            D.classList.add(tr("p")), this.element.appendChild(D), this.pickerElement = D;
          } else
            this.pickerElement = null;
        }
      }
      const gn = _("p2dp");
      class Xl {
        constructor(e, r) {
          this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.invertsY_ = r.invertsY, this.maxValue_ = r.maxValue, this.element = e.createElement("div"), this.element.classList.add(gn()), r.layout === "popup" && this.element.classList.add(gn(void 0, "p")), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("div");
          c.classList.add(gn("p")), r.viewProps.bindTabIndex(c), this.element.appendChild(c), this.padElement = c;
          const g = e.createElementNS(pe, "svg");
          g.classList.add(gn("g")), this.padElement.appendChild(g), this.svgElem_ = g;
          const w = e.createElementNS(pe, "line");
          w.classList.add(gn("ax")), w.setAttributeNS(null, "x1", "0"), w.setAttributeNS(null, "y1", "50%"), w.setAttributeNS(null, "x2", "100%"), w.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(w);
          const D = e.createElementNS(pe, "line");
          D.classList.add(gn("ax")), D.setAttributeNS(null, "x1", "50%"), D.setAttributeNS(null, "y1", "0"), D.setAttributeNS(null, "x2", "50%"), D.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(D);
          const ne = e.createElementNS(pe, "line");
          ne.classList.add(gn("l")), ne.setAttributeNS(null, "x1", "50%"), ne.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(ne), this.lineElem_ = ne;
          const ye = e.createElement("div");
          ye.classList.add(gn("m")), this.padElement.appendChild(ye), this.markerElem_ = ye, r.value.emitter.on("change", this.onValueChange_), this.value = r.value, this.update_();
        }
        get allFocusableElements() {
          return [this.padElement];
        }
        update_() {
          const [e, r] = this.value.rawValue.getComponents(), c = this.maxValue_, g = ze(e, -c, +c, 0, 100), w = ze(r, -c, +c, 0, 100), D = this.invertsY_ ? 100 - w : w;
          this.lineElem_.setAttributeNS(null, "x2", `${g}%`), this.lineElem_.setAttributeNS(null, "y2", `${D}%`), this.markerElem_.style.left = `${g}%`, this.markerElem_.style.top = `${D}%`;
        }
        onValueChange_() {
          this.update_();
        }
        onFoldableChange_() {
          this.update_();
        }
      }
      function So(s, e, r) {
        return [
          pt(e[0], Xt(s)),
          pt(e[1], xr(s)) * (r ? 1 : -1)
        ];
      }
      class zl {
        constructor(e, r) {
          this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.baseSteps_ = r.baseSteps, this.maxValue_ = r.maxValue, this.invertsY_ = r.invertsY, this.view = new Xl(e, {
            invertsY: this.invertsY_,
            layout: r.layout,
            maxValue: this.maxValue_,
            value: this.value,
            viewProps: this.viewProps
          }), this.ptHandler_ = new Dn(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
        }
        handlePointerEvent_(e, r) {
          if (!e.point)
            return;
          const c = this.maxValue_, g = ze(e.point.x, 0, e.bounds.width, -c, +c), w = ze(this.invertsY_ ? e.bounds.height - e.point.y : e.point.y, 0, e.bounds.height, -c, +c);
          this.value.setRawValue(new fn(g, w), r);
        }
        onPointerDown_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerMove_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !1,
            last: !1
          });
        }
        onPointerUp_(e) {
          this.handlePointerEvent_(e.data, {
            forceEmit: !0,
            last: !0
          });
        }
        onPadKeyDown_(e) {
          js(e.key) && e.preventDefault();
          const [r, c] = So(e, this.baseSteps_, this.invertsY_);
          r === 0 && c === 0 || this.value.setRawValue(new fn(this.value.rawValue.x + r, this.value.rawValue.y + c), {
            forceEmit: !1,
            last: !1
          });
        }
        onPadKeyUp_(e) {
          const [r, c] = So(e, this.baseSteps_, this.invertsY_);
          r === 0 && c === 0 || this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
          });
        }
      }
      class Zl {
        constructor(e, r) {
          var c, g;
          this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = r.value, this.viewProps = r.viewProps, this.foldable_ = _e.create(r.expanded), this.popC_ = r.pickerLayout === "popup" ? new ln(e, {
            viewProps: this.viewProps
          }) : null;
          const w = new zl(e, {
            baseSteps: [r.axes[0].baseStep, r.axes[1].baseStep],
            invertsY: r.invertsY,
            layout: r.pickerLayout,
            maxValue: r.maxValue,
            value: this.value,
            viewProps: this.viewProps
          });
          w.view.allFocusableElements.forEach((D) => {
            D.addEventListener("blur", this.onPopupChildBlur_), D.addEventListener("keydown", this.onPopupChildKeydown_);
          }), this.pickerC_ = w, this.textC_ = new zi(e, {
            assembly: xo,
            axes: r.axes,
            parser: r.parser,
            value: this.value,
            viewProps: this.viewProps
          }), this.view = new Wl(e, {
            expanded: this.foldable_.value("expanded"),
            pickerLayout: r.pickerLayout,
            viewProps: this.viewProps
          }), this.view.textElement.appendChild(this.textC_.view.element), (c = this.view.buttonElement) === null || c === void 0 || c.addEventListener("blur", this.onPadButtonBlur_), (g = this.view.buttonElement) === null || g === void 0 || g.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), Qr({
            primary: this.foldable_.value("expanded"),
            secondary: this.popC_.shows,
            forward: (D) => D.rawValue,
            backward: (D, ne) => ne.rawValue
          })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), $(this.foldable_, this.view.pickerElement));
        }
        onPadButtonBlur_(e) {
          if (!this.popC_)
            return;
          const r = this.view.element, c = e.relatedTarget;
          (!c || !r.contains(c)) && (this.popC_.shows.rawValue = !1);
        }
        onPadButtonClick_() {
          this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
        }
        onPopupChildBlur_(e) {
          if (!this.popC_)
            return;
          const r = this.popC_.view.element, c = Te(e);
          c && r.contains(c) || c && c === this.view.buttonElement && !Ie(r.ownerDocument) || (this.popC_.shows.rawValue = !1);
        }
        onPopupChildKeydown_(e) {
          this.popC_ ? e.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && e.key === "Escape" && this.view.buttonElement.focus();
        }
      }
      class nr {
        constructor(e = 0, r = 0, c = 0) {
          this.x = e, this.y = r, this.z = c;
        }
        getComponents() {
          return [this.x, this.y, this.z];
        }
        static isObject(e) {
          if (f(e))
            return !1;
          const r = e.x, c = e.y, g = e.z;
          return !(typeof r != "number" || typeof c != "number" || typeof g != "number");
        }
        static equals(e, r) {
          return e.x === r.x && e.y === r.y && e.z === r.z;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y,
            z: this.z
          };
        }
      }
      const ko = {
        toComponents: (s) => s.getComponents(),
        fromComponents: (s) => new nr(...s)
      };
      function $l(s) {
        return nr.isObject(s) ? new nr(s.x, s.y, s.z) : new nr();
      }
      function ec(s, e) {
        s.writeProperty("x", e.x), s.writeProperty("y", e.y), s.writeProperty("z", e.z);
      }
      function tc(s, e) {
        return new pn({
          assembly: ko,
          components: [
            zt("x" in s ? s.x : void 0, e.x),
            zt("y" in s ? s.y : void 0, e.y),
            zt("z" in s ? s.z : void 0, e.z)
          ]
        });
      }
      function Zi(s, e) {
        return {
          baseStep: Zn(e),
          constraint: e,
          textProps: j.fromObject({
            draggingScale: $n(e, s),
            formatter: at(pi(e, s))
          })
        };
      }
      const nc = {
        id: "input-point3d",
        type: "input",
        accept: (s, e) => {
          if (!nr.isObject(s))
            return null;
          const r = O, c = G(e, {
            x: r.optional.custom(hn),
            y: r.optional.custom(hn),
            z: r.optional.custom(hn)
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => $l,
          constraint: (s) => tc(s.params, s.initialValue),
          equals: nr.equals,
          writer: (s) => ec
        },
        controller: (s) => {
          const e = s.value, r = s.constraint;
          if (!(r instanceof pn))
            throw C.shouldNeverHappen();
          return new zi(s.document, {
            assembly: ko,
            axes: [
              Zi(e.rawValue.x, r.components[0]),
              Zi(e.rawValue.y, r.components[1]),
              Zi(e.rawValue.z, r.components[2])
            ],
            parser: Wt,
            value: e,
            viewProps: s.viewProps
          });
        }
      };
      class rr {
        constructor(e = 0, r = 0, c = 0, g = 0) {
          this.x = e, this.y = r, this.z = c, this.w = g;
        }
        getComponents() {
          return [this.x, this.y, this.z, this.w];
        }
        static isObject(e) {
          if (f(e))
            return !1;
          const r = e.x, c = e.y, g = e.z, w = e.w;
          return !(typeof r != "number" || typeof c != "number" || typeof g != "number" || typeof w != "number");
        }
        static equals(e, r) {
          return e.x === r.x && e.y === r.y && e.z === r.z && e.w === r.w;
        }
        toObject() {
          return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
          };
        }
      }
      const Do = {
        toComponents: (s) => s.getComponents(),
        fromComponents: (s) => new rr(...s)
      };
      function rc(s) {
        return rr.isObject(s) ? new rr(s.x, s.y, s.z, s.w) : new rr();
      }
      function ic(s, e) {
        s.writeProperty("x", e.x), s.writeProperty("y", e.y), s.writeProperty("z", e.z), s.writeProperty("w", e.w);
      }
      function sc(s, e) {
        return new pn({
          assembly: Do,
          components: [
            zt("x" in s ? s.x : void 0, e.x),
            zt("y" in s ? s.y : void 0, e.y),
            zt("z" in s ? s.z : void 0, e.z),
            zt("w" in s ? s.w : void 0, e.w)
          ]
        });
      }
      function oc(s, e) {
        return {
          baseStep: Zn(e),
          constraint: e,
          textProps: j.fromObject({
            draggingScale: $n(e, s),
            formatter: at(pi(e, s))
          })
        };
      }
      const ac = {
        id: "input-point4d",
        type: "input",
        accept: (s, e) => {
          if (!rr.isObject(s))
            return null;
          const r = O, c = G(e, {
            x: r.optional.custom(hn),
            y: r.optional.custom(hn),
            z: r.optional.custom(hn),
            w: r.optional.custom(hn)
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => rc,
          constraint: (s) => sc(s.params, s.initialValue),
          equals: rr.equals,
          writer: (s) => ic
        },
        controller: (s) => {
          const e = s.value, r = s.constraint;
          if (!(r instanceof pn))
            throw C.shouldNeverHappen();
          return new zi(s.document, {
            assembly: Do,
            axes: e.rawValue.getComponents().map((c, g) => oc(c, r.components[g])),
            parser: Wt,
            value: e,
            viewProps: s.viewProps
          });
        }
      };
      function Ac(s) {
        const e = [], r = Gi(s.options);
        return r && e.push(r), new Pt(e);
      }
      const lc = {
        id: "input-string",
        type: "input",
        accept: (s, e) => {
          if (typeof s != "string")
            return null;
          const c = G(e, {
            options: O.optional.custom(di)
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Js,
          constraint: (s) => Ac(s.params),
          writer: (s) => kr
        },
        controller: (s) => {
          const e = s.document, r = s.value, c = s.constraint, g = c && dt(c, on);
          return g ? new Ut(e, {
            props: new j({
              options: g.values.value("options")
            }),
            value: r,
            viewProps: s.viewProps
          }) : new cn(e, {
            parser: (w) => w,
            props: j.fromObject({
              formatter: Fi
            }),
            value: r,
            viewProps: s.viewProps
          });
        }
      }, Tr = {
        monitor: {
          defaultInterval: 200,
          defaultLineCount: 3
        }
      }, To = _("mll");
      class cc {
        constructor(e, r) {
          this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = r.formatter, this.element = e.createElement("div"), this.element.classList.add(To()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("textarea");
          c.classList.add(To("i")), c.style.height = `calc(var(--bld-us) * ${r.lineCount})`, c.readOnly = !0, r.viewProps.bindDisabled(c), this.element.appendChild(c), this.textareaElem_ = c, r.value.emitter.on("change", this.onValueUpdate_), this.value = r.value, this.update_();
        }
        update_() {
          const e = this.textareaElem_, r = e.scrollTop === e.scrollHeight - e.clientHeight, c = [];
          this.value.rawValue.forEach((g) => {
            g !== void 0 && c.push(this.formatter_(g));
          }), e.textContent = c.join(`
`), r && (e.scrollTop = e.scrollHeight);
        }
        onValueUpdate_() {
          this.update_();
        }
      }
      class $i {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.view = new cc(e, {
            formatter: r.formatter,
            lineCount: r.lineCount,
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      const Ro = _("sgl");
      class uc {
        constructor(e, r) {
          this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = r.formatter, this.element = e.createElement("div"), this.element.classList.add(Ro()), r.viewProps.bindClassModifiers(this.element);
          const c = e.createElement("input");
          c.classList.add(Ro("i")), c.readOnly = !0, c.type = "text", r.viewProps.bindDisabled(c), this.element.appendChild(c), this.inputElement = c, r.value.emitter.on("change", this.onValueUpdate_), this.value = r.value, this.update_();
        }
        update_() {
          const e = this.value.rawValue, r = e[e.length - 1];
          this.inputElement.value = r !== void 0 ? this.formatter_(r) : "";
        }
        onValueUpdate_() {
          this.update_();
        }
      }
      class es {
        constructor(e, r) {
          this.value = r.value, this.viewProps = r.viewProps, this.view = new uc(e, {
            formatter: r.formatter,
            value: this.value,
            viewProps: this.viewProps
          });
        }
      }
      const hc = {
        id: "monitor-bool",
        type: "monitor",
        accept: (s, e) => {
          if (typeof s != "boolean")
            return null;
          const c = G(e, {
            lineCount: O.optional.number
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Er
        },
        controller: (s) => {
          var e;
          return s.value.rawValue.length === 1 ? new es(s.document, {
            formatter: Qn,
            value: s.value,
            viewProps: s.viewProps
          }) : new $i(s.document, {
            formatter: Qn,
            lineCount: (e = s.params.lineCount) !== null && e !== void 0 ? e : Tr.monitor.defaultLineCount,
            value: s.value,
            viewProps: s.viewProps
          });
        }
      }, mn = _("grl");
      class dc {
        constructor(e, r) {
          this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = e.createElement("div"), this.element.classList.add(mn()), r.viewProps.bindClassModifiers(this.element), this.formatter_ = r.formatter, this.props_ = r.props, this.cursor_ = r.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
          const c = e.createElementNS(pe, "svg");
          c.classList.add(mn("g")), c.style.height = `calc(var(--bld-us) * ${r.lineCount})`, this.element.appendChild(c), this.svgElem_ = c;
          const g = e.createElementNS(pe, "polyline");
          this.svgElem_.appendChild(g), this.lineElem_ = g;
          const w = e.createElement("div");
          w.classList.add(mn("t"), _("tt")()), this.element.appendChild(w), this.tooltipElem_ = w, r.value.emitter.on("change", this.onValueUpdate_), this.value = r.value, this.update_();
        }
        get graphElement() {
          return this.svgElem_;
        }
        update_() {
          const e = this.svgElem_.getBoundingClientRect(), r = this.value.rawValue.length - 1, c = this.props_.get("minValue"), g = this.props_.get("maxValue"), w = [];
          this.value.rawValue.forEach((Ke, qe) => {
            if (Ke === void 0)
              return;
            const Pn = ze(qe, 0, r, 0, e.width), Rr = ze(Ke, c, g, e.height, 0);
            w.push([Pn, Rr].join(","));
          }), this.lineElem_.setAttributeNS(null, "points", w.join(" "));
          const D = this.tooltipElem_, ne = this.value.rawValue[this.cursor_.rawValue];
          if (ne === void 0) {
            D.classList.remove(mn("t", "a"));
            return;
          }
          const ye = ze(this.cursor_.rawValue, 0, r, 0, e.width), Se = ze(ne, c, g, e.height, 0);
          D.style.left = `${ye}px`, D.style.top = `${Se}px`, D.textContent = `${this.formatter_(ne)}`, D.classList.contains(mn("t", "a")) || (D.classList.add(mn("t", "a"), mn("t", "in")), Qe(D), D.classList.remove(mn("t", "in")));
        }
        onValueUpdate_() {
          this.update_();
        }
        onCursorChange_() {
          this.update_();
        }
      }
      class pc {
        constructor(e, r) {
          if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props_ = r.props, this.value = r.value, this.viewProps = r.viewProps, this.cursor_ = H(-1), this.view = new dc(e, {
            cursor: this.cursor_,
            formatter: r.formatter,
            lineCount: r.lineCount,
            props: this.props_,
            value: this.value,
            viewProps: this.viewProps
          }), !Ie(e))
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
          else {
            const c = new Dn(this.view.element);
            c.emitter.on("down", this.onGraphPointerDown_), c.emitter.on("move", this.onGraphPointerMove_), c.emitter.on("up", this.onGraphPointerUp_);
          }
        }
        onGraphMouseLeave_() {
          this.cursor_.rawValue = -1;
        }
        onGraphMouseMove_(e) {
          const r = this.view.element.getBoundingClientRect();
          this.cursor_.rawValue = Math.floor(ze(e.offsetX, 0, r.width, 0, this.value.rawValue.length));
        }
        onGraphPointerDown_(e) {
          this.onGraphPointerMove_(e);
        }
        onGraphPointerMove_(e) {
          if (!e.data.point) {
            this.cursor_.rawValue = -1;
            return;
          }
          this.cursor_.rawValue = Math.floor(ze(e.data.point.x, 0, e.data.bounds.width, 0, this.value.rawValue.length));
        }
        onGraphPointerUp_() {
          this.cursor_.rawValue = -1;
        }
      }
      function ts(s) {
        return "format" in s && !f(s.format) ? s.format : at(2);
      }
      function fc(s) {
        var e;
        return s.value.rawValue.length === 1 ? new es(s.document, {
          formatter: ts(s.params),
          value: s.value,
          viewProps: s.viewProps
        }) : new $i(s.document, {
          formatter: ts(s.params),
          lineCount: (e = s.params.lineCount) !== null && e !== void 0 ? e : Tr.monitor.defaultLineCount,
          value: s.value,
          viewProps: s.viewProps
        });
      }
      function gc(s) {
        var e, r, c;
        return new pc(s.document, {
          formatter: ts(s.params),
          lineCount: (e = s.params.lineCount) !== null && e !== void 0 ? e : Tr.monitor.defaultLineCount,
          props: j.fromObject({
            maxValue: (r = "max" in s.params ? s.params.max : null) !== null && r !== void 0 ? r : 100,
            minValue: (c = "min" in s.params ? s.params.min : null) !== null && c !== void 0 ? c : 0
          }),
          value: s.value,
          viewProps: s.viewProps
        });
      }
      function Fo(s) {
        return "view" in s && s.view === "graph";
      }
      const mc = {
        id: "monitor-number",
        type: "monitor",
        accept: (s, e) => {
          if (typeof s != "number")
            return null;
          const r = O, c = G(e, {
            format: r.optional.function,
            lineCount: r.optional.number,
            max: r.optional.number,
            min: r.optional.number,
            view: r.optional.string
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          defaultBufferSize: (s) => Fo(s) ? 64 : 1,
          reader: (s) => Ys
        },
        controller: (s) => Fo(s.params) ? gc(s) : fc(s)
      }, vc = {
        id: "monitor-string",
        type: "monitor",
        accept: (s, e) => {
          if (typeof s != "string")
            return null;
          const r = O, c = G(e, {
            lineCount: r.optional.number,
            multiline: r.optional.boolean
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Js
        },
        controller: (s) => {
          var e;
          const r = s.value;
          return r.rawValue.length > 1 || "multiline" in s.params && s.params.multiline ? new $i(s.document, {
            formatter: Fi,
            lineCount: (e = s.params.lineCount) !== null && e !== void 0 ? e : Tr.monitor.defaultLineCount,
            value: r,
            viewProps: s.viewProps
          }) : new es(s.document, {
            formatter: Fi,
            value: r,
            viewProps: s.viewProps
          });
        }
      };
      function Cc(s, e) {
        var r;
        const c = s.accept(e.target.read(), e.params);
        if (f(c))
          return null;
        const g = O, w = {
          target: e.target,
          initialValue: c.initialValue,
          params: c.params
        }, D = s.binding.reader(w), ne = s.binding.constraint ? s.binding.constraint(w) : void 0, ye = H(D(c.initialValue), {
          constraint: ne,
          equals: s.binding.equals
        }), Se = new mr({
          reader: D,
          target: e.target,
          value: ye,
          writer: s.binding.writer(w)
        }), Ke = g.optional.boolean(e.params.disabled).value, qe = g.optional.boolean(e.params.hidden).value, Pn = s.controller({
          constraint: ne,
          document: e.document,
          initialValue: c.initialValue,
          params: c.params,
          value: Se.value,
          viewProps: te.create({
            disabled: Ke,
            hidden: qe
          })
        });
        return new nt(e.document, {
          binding: Se,
          blade: le(),
          props: j.fromObject({
            label: "label" in e.params ? (r = g.optional.string(e.params.label).value) !== null && r !== void 0 ? r : null : e.target.key
          }),
          valueController: Pn
        });
      }
      function Ic(s, e) {
        return e === 0 ? new fr() : new gr(s, e ?? Tr.monitor.defaultInterval);
      }
      function Ec(s, e) {
        var r, c, g;
        const w = O, D = s.accept(e.target.read(), e.params);
        if (f(D))
          return null;
        const ne = {
          target: e.target,
          initialValue: D.initialValue,
          params: D.params
        }, ye = s.binding.reader(ne), Se = (c = (r = w.optional.number(e.params.bufferSize).value) !== null && r !== void 0 ? r : s.binding.defaultBufferSize && s.binding.defaultBufferSize(D.params)) !== null && c !== void 0 ? c : 1, Ke = w.optional.number(e.params.interval).value, qe = new ri({
          reader: ye,
          target: e.target,
          ticker: Ic(e.document, Ke),
          value: Di(Se)
        }), Pn = w.optional.boolean(e.params.disabled).value, Rr = w.optional.boolean(e.params.hidden).value, Fr = s.controller({
          document: e.document,
          params: D.params,
          value: qe.value,
          viewProps: te.create({
            disabled: Pn,
            hidden: Rr
          })
        });
        return new He(e.document, {
          binding: qe,
          blade: le(),
          props: j.fromObject({
            label: "label" in e.params ? (g = w.optional.string(e.params.label).value) !== null && g !== void 0 ? g : null : e.target.key
          }),
          valueController: Fr
        });
      }
      class wc {
        constructor() {
          this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
          };
        }
        getAll() {
          return [
            ...this.pluginsMap_.blades,
            ...this.pluginsMap_.inputs,
            ...this.pluginsMap_.monitors
          ];
        }
        register(e) {
          e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e);
        }
        createInput(e, r, c) {
          const g = r.read();
          if (f(g))
            throw new C({
              context: {
                key: r.key
              },
              type: "nomatchingcontroller"
            });
          const w = this.pluginsMap_.inputs.reduce((D, ne) => D ?? Cc(ne, {
            document: e,
            target: r,
            params: c
          }), null);
          if (w)
            return w;
          throw new C({
            context: {
              key: r.key
            },
            type: "nomatchingcontroller"
          });
        }
        createMonitor(e, r, c) {
          const g = this.pluginsMap_.monitors.reduce((w, D) => w ?? Ec(D, {
            document: e,
            params: c,
            target: r
          }), null);
          if (g)
            return g;
          throw new C({
            context: {
              key: r.key
            },
            type: "nomatchingcontroller"
          });
        }
        createBlade(e, r) {
          const c = this.pluginsMap_.blades.reduce((g, w) => g ?? sn(w, {
            document: e,
            params: r
          }), null);
          if (!c)
            throw new C({
              type: "nomatchingview",
              context: {
                params: r
              }
            });
          return c;
        }
        createBladeApi(e) {
          if (e instanceof nt)
            return new Ue(e);
          if (e instanceof He)
            return new Je(e);
          if (e instanceof Rt)
            return new Ze(e, this);
          const r = this.pluginsMap_.blades.reduce((c, g) => c ?? g.api({
            controller: e,
            pool: this
          }), null);
          if (!r)
            throw C.shouldNeverHappen();
          return r;
        }
      }
      function bc() {
        const s = new wc();
        return [
          Sc,
          nc,
          ac,
          lc,
          jl,
          Hl,
          Vl,
          Ul,
          MA,
          hc,
          vc,
          mc,
          R,
          qn,
          nn,
          Jn
        ].forEach((e) => {
          s.register(e);
        }), s;
      }
      function Bc(s) {
        return fn.isObject(s) ? new fn(s.x, s.y) : new fn();
      }
      function _c(s, e) {
        s.writeProperty("x", e.x), s.writeProperty("y", e.y);
      }
      function zt(s, e) {
        if (!s)
          return;
        const r = [], c = yo(s, e);
        c && r.push(c);
        const g = Qo(s);
        return g && r.push(g), new Pt(r);
      }
      function yc(s, e) {
        return new pn({
          assembly: xo,
          components: [
            zt("x" in s ? s.x : void 0, e.x),
            zt("y" in s ? s.y : void 0, e.y)
          ]
        });
      }
      function Lo(s, e) {
        const [r, c] = s ? Yl(s) : [];
        if (!f(r) || !f(c))
          return Math.max(Math.abs(r ?? 0), Math.abs(c ?? 0));
        const g = Zn(s);
        return Math.max(Math.abs(g) * 10, Math.abs(e) * 10);
      }
      function Qc(s, e) {
        const r = e instanceof pn ? e.components[0] : void 0, c = e instanceof pn ? e.components[1] : void 0, g = Lo(r, s.x), w = Lo(c, s.y);
        return Math.max(g, w);
      }
      function Po(s, e) {
        return {
          baseStep: Zn(e),
          constraint: e,
          textProps: j.fromObject({
            draggingScale: $n(e, s),
            formatter: at(pi(e, s))
          })
        };
      }
      function xc(s) {
        if (!("y" in s))
          return !1;
        const e = s.y;
        return e && "inverted" in e ? !!e.inverted : !1;
      }
      const Sc = {
        id: "input-point2d",
        type: "input",
        accept: (s, e) => {
          if (!fn.isObject(s))
            return null;
          const r = O, c = G(e, {
            expanded: r.optional.boolean,
            picker: r.optional.custom(zs),
            x: r.optional.custom(hn),
            y: r.optional.object({
              inverted: r.optional.boolean,
              max: r.optional.number,
              min: r.optional.number,
              step: r.optional.number
            })
          });
          return c ? {
            initialValue: s,
            params: c
          } : null;
        },
        binding: {
          reader: (s) => Bc,
          constraint: (s) => yc(s.params, s.initialValue),
          equals: fn.equals,
          writer: (s) => _c
        },
        controller: (s) => {
          const e = s.document, r = s.value, c = s.constraint;
          if (!(c instanceof pn))
            throw C.shouldNeverHappen();
          const g = "expanded" in s.params ? s.params.expanded : void 0, w = "picker" in s.params ? s.params.picker : void 0;
          return new Zl(e, {
            axes: [
              Po(r.rawValue.x, c.components[0]),
              Po(r.rawValue.y, c.components[1])
            ],
            expanded: g ?? !1,
            invertsY: xc(s.params),
            maxValue: Qc(r.rawValue, c),
            parser: Wt,
            pickerLayout: w ?? "popup",
            value: r,
            viewProps: s.viewProps
          });
        }
      };
      class Mo extends i {
        constructor(e) {
          super(e), this.emitter_ = new I(), this.controller_.valueController.value.emitter.on("change", (r) => {
            this.emitter_.emit("change", {
              event: new o(this, r.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        get options() {
          return this.controller_.valueController.props.get("options");
        }
        set options(e) {
          this.controller_.valueController.props.set("options", e);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(e) {
          this.controller_.valueController.value.rawValue = e;
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
      }
      class Uo extends i {
        constructor(e) {
          super(e), this.emitter_ = new I(), this.controller_.valueController.value.emitter.on("change", (r) => {
            this.emitter_.emit("change", {
              event: new o(this, r.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        get maxValue() {
          return this.controller_.valueController.sliderController.props.get("maxValue");
        }
        set maxValue(e) {
          this.controller_.valueController.sliderController.props.set("maxValue", e);
        }
        get minValue() {
          return this.controller_.valueController.sliderController.props.get("minValue");
        }
        set minValue(e) {
          this.controller_.valueController.sliderController.props.set("minValue", e);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(e) {
          this.controller_.valueController.value.rawValue = e;
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
      }
      class Go extends i {
        constructor(e) {
          super(e), this.emitter_ = new I(), this.controller_.valueController.value.emitter.on("change", (r) => {
            this.emitter_.emit("change", {
              event: new o(this, r.rawValue)
            });
          });
        }
        get label() {
          return this.controller_.props.get("label");
        }
        set label(e) {
          this.controller_.props.set("label", e);
        }
        get formatter() {
          return this.controller_.valueController.props.get("formatter");
        }
        set formatter(e) {
          this.controller_.valueController.props.set("formatter", e);
        }
        get value() {
          return this.controller_.valueController.value.rawValue;
        }
        set value(e) {
          this.controller_.valueController.value.rawValue = e;
        }
        on(e, r) {
          const c = r.bind(this);
          return this.emitter_.on(e, (g) => {
            c(g.event);
          }), this;
        }
      }
      const kc = /* @__PURE__ */ function() {
        return {
          id: "list",
          type: "blade",
          accept(s) {
            const e = O, r = G(s, {
              options: e.required.custom(di),
              value: e.required.raw,
              view: e.required.constant("list"),
              label: e.optional.string
            });
            return r ? { params: r } : null;
          },
          controller(s) {
            const e = new on(Zs(s.params.options)), r = H(s.params.value, {
              constraint: e
            }), c = new Ut(s.document, {
              props: new j({
                options: e.values.value("options")
              }),
              value: r,
              viewProps: s.viewProps
            });
            return new Ft(s.document, {
              blade: s.blade,
              props: j.fromObject({
                label: s.params.label
              }),
              valueController: c
            });
          },
          api(s) {
            return !(s.controller instanceof Ft) || !(s.controller.valueController instanceof Ut) ? null : new Mo(s.controller);
          }
        };
      }();
      function Dc(s) {
        return s.reduce((e, r) => Object.assign(e, {
          [r.presetKey]: r.read()
        }), {});
      }
      function Tc(s, e) {
        s.forEach((r) => {
          const c = e[r.target.presetKey];
          c !== void 0 && r.writer(r.target, r.reader(c));
        });
      }
      class Rc extends lt {
        /**
         * @hidden
         */
        constructor(e, r) {
          super(e, r);
        }
        get element() {
          return this.controller_.view.element;
        }
        /**
         * Imports a preset of all inputs.
         * @param preset The preset object to import.
         */
        importPreset(e) {
          const r = this.controller_.rackController.rack.find(nt).map((c) => c.binding);
          Tc(r, e), this.refresh();
        }
        /**
         * Exports a preset of all inputs.
         * @return An exported preset object.
         */
        exportPreset() {
          const e = this.controller_.rackController.rack.find(nt).map((r) => r.binding.target);
          return Dc(e);
        }
        /**
         * Refreshes all bindings of the pane.
         */
        refresh() {
          this.controller_.rackController.rack.find(nt).forEach((e) => {
            e.binding.read();
          }), this.controller_.rackController.rack.find(He).forEach((e) => {
            e.binding.read();
          });
        }
      }
      class Fc extends Kn {
        constructor(e, r) {
          super(e, {
            expanded: r.expanded,
            blade: r.blade,
            props: r.props,
            root: !0,
            viewProps: r.viewProps
          });
        }
      }
      const Lc = {
        id: "slider",
        type: "blade",
        accept(s) {
          const e = O, r = G(s, {
            max: e.required.number,
            min: e.required.number,
            view: e.required.constant("slider"),
            format: e.optional.function,
            label: e.optional.string,
            value: e.optional.number
          });
          return r ? { params: r } : null;
        },
        controller(s) {
          var e, r;
          const c = (e = s.params.value) !== null && e !== void 0 ? e : 0, g = new Mt({
            max: s.params.max,
            min: s.params.min
          }), w = new Ui(s.document, {
            baseStep: 1,
            parser: Wt,
            sliderProps: new j({
              maxValue: g.values.value("max"),
              minValue: g.values.value("min")
            }),
            textProps: j.fromObject({
              draggingScale: $n(void 0, c),
              formatter: (r = s.params.format) !== null && r !== void 0 ? r : yA
            }),
            value: H(c, {
              constraint: g
            }),
            viewProps: s.viewProps
          });
          return new Ft(s.document, {
            blade: s.blade,
            props: j.fromObject({
              label: s.params.label
            }),
            valueController: w
          });
        },
        api(s) {
          return !(s.controller instanceof Ft) || !(s.controller.valueController instanceof Ui) ? null : new Uo(s.controller);
        }
      }, Pc = /* @__PURE__ */ function() {
        return {
          id: "text",
          type: "blade",
          accept(s) {
            const e = O, r = G(s, {
              parse: e.required.function,
              value: e.required.raw,
              view: e.required.constant("text"),
              format: e.optional.function,
              label: e.optional.string
            });
            return r ? { params: r } : null;
          },
          controller(s) {
            var e;
            const r = new cn(s.document, {
              parser: s.params.parse,
              props: j.fromObject({
                formatter: (e = s.params.format) !== null && e !== void 0 ? e : (c) => String(c)
              }),
              value: H(s.params.value),
              viewProps: s.viewProps
            });
            return new Ft(s.document, {
              blade: s.blade,
              props: j.fromObject({
                label: s.params.label
              }),
              valueController: r
            });
          },
          api(s) {
            return !(s.controller instanceof Ft) || !(s.controller.valueController instanceof cn) ? null : new Go(s.controller);
          }
        };
      }();
      function Mc(s) {
        const e = s.createElement("div");
        return e.classList.add(_("dfw")()), s.body && s.body.appendChild(e), e;
      }
      function No(s, e, r) {
        if (s.querySelector(`style[data-tp-style=${e}]`))
          return;
        const c = s.createElement("style");
        c.dataset.tpStyle = e, c.textContent = r, s.head.appendChild(c);
      }
      class Uc extends Rc {
        constructor(e) {
          var r, c;
          const g = e ?? {}, w = (r = g.document) !== null && r !== void 0 ? r : ee(), D = bc(), ne = new Fc(w, {
            expanded: g.expanded,
            blade: le(),
            props: j.fromObject({
              title: g.title
            }),
            viewProps: te.create()
          });
          super(ne, D), this.pool_ = D, this.containerElem_ = (c = g.container) !== null && c !== void 0 ? c : Mc(w), this.containerElem_.appendChild(this.element), this.doc_ = w, this.usesDefaultWrapper_ = !g.container, this.setUpDefaultPlugins_();
        }
        get document() {
          if (!this.doc_)
            throw C.alreadyDisposed();
          return this.doc_;
        }
        dispose() {
          const e = this.containerElem_;
          if (!e)
            throw C.alreadyDisposed();
          if (this.usesDefaultWrapper_) {
            const r = e.parentElement;
            r && r.removeChild(e);
          }
          this.containerElem_ = null, this.doc_ = null, super.dispose();
        }
        registerPlugin(e) {
          ("plugin" in e ? [e.plugin] : "plugins" in e ? e.plugins : []).forEach((c) => {
            this.pool_.register(c), this.embedPluginStyle_(c);
          });
        }
        embedPluginStyle_(e) {
          e.css && No(this.document, `plugin-${e.id}`, e.css);
        }
        setUpDefaultPlugins_() {
          No(this.document, "default", '.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'), this.pool_.getAll().forEach((e) => {
            this.embedPluginStyle_(e);
          }), this.registerPlugin({
            plugins: [
              Lc,
              kc,
              Jn,
              Pc
            ]
          });
        }
      }
      const Gc = new u("3.1.10");
      A.BladeApi = i, A.ButtonApi = y, A.FolderApi = lt, A.InputBindingApi = Ue, A.ListApi = Mo, A.MonitorBindingApi = Je, A.Pane = Uc, A.SeparatorApi = Yn, A.SliderApi = Uo, A.TabApi = pr, A.TabPageApi = bn, A.TextApi = Go, A.TpChangeEvent = o, A.VERSION = Gc, Object.defineProperty(A, "__esModule", { value: !0 });
    });
  }(Vr, Vr.exports)), Vr.exports;
}
var hd = ud();
function dd() {
  var p = /* @__PURE__ */ Object.create(null);
  function n(i, t) {
    var o = i.id, l = i.name, a = i.dependencies;
    a === void 0 && (a = []);
    var h = i.init;
    h === void 0 && (h = function() {
    });
    var d = i.getTransferables;
    if (d === void 0 && (d = null), !p[o])
      try {
        a = a.map(function(m) {
          return m && m.isWorkerModule && (n(m, function(v) {
            if (v instanceof Error)
              throw v;
          }), m = p[m.id].value), m;
        }), h = u("<" + l + ">.init", h), d && (d = u("<" + l + ">.getTransferables", d));
        var f = null;
        typeof h == "function" ? f = h.apply(void 0, a) : console.error("worker module init function failed to rehydrate"), p[o] = {
          id: o,
          value: f,
          getTransferables: d
        }, t(f);
      } catch (m) {
        m && m.noLog || console.error(m), t(m);
      }
  }
  function A(i, t) {
    var o, l = i.id, a = i.args;
    (!p[l] || typeof p[l].value != "function") && t(new Error("Worker module " + l + ": not found or its 'init' did not return a function"));
    try {
      var h = (o = p[l]).value.apply(o, a);
      h && typeof h.then == "function" ? h.then(d, function(f) {
        return t(f instanceof Error ? f : new Error("" + f));
      }) : d(h);
    } catch (f) {
      t(f);
    }
    function d(f) {
      try {
        var m = p[l].getTransferables && p[l].getTransferables(f);
        (!m || !Array.isArray(m) || !m.length) && (m = void 0), t(f, m);
      } catch (v) {
        console.error(v), t(v);
      }
    }
  }
  function u(i, t) {
    var o = void 0;
    self.troikaDefine = function(a) {
      return o = a;
    };
    var l = URL.createObjectURL(
      new Blob(
        ["/** " + i.replace(/\*/g, "") + ` **/

troikaDefine(
` + t + `
)`],
        { type: "application/javascript" }
      )
    );
    try {
      importScripts(l);
    } catch (a) {
      console.error(a);
    }
    return URL.revokeObjectURL(l), delete self.troikaDefine, o;
  }
  self.addEventListener("message", function(i) {
    var t = i.data, o = t.messageId, l = t.action, a = t.data;
    try {
      l === "registerModule" && n(a, function(h) {
        h instanceof Error ? postMessage({
          messageId: o,
          success: !1,
          error: h.message
        }) : postMessage({
          messageId: o,
          success: !0,
          result: { isCallable: typeof h == "function" }
        });
      }), l === "callModule" && A(a, function(h, d) {
        h instanceof Error ? postMessage({
          messageId: o,
          success: !1,
          error: h.message
        }) : postMessage({
          messageId: o,
          success: !0,
          result: h
        }, d || void 0);
      });
    } catch (h) {
      postMessage({
        messageId: o,
        success: !1,
        error: h.stack
      });
    }
  });
}
function pd(p) {
  var n = function() {
    for (var A = [], u = arguments.length; u--; ) A[u] = arguments[u];
    return n._getInitResult().then(function(i) {
      if (typeof i == "function")
        return i.apply(void 0, A);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return n._getInitResult = function() {
    var A = p.dependencies, u = p.init;
    A = Array.isArray(A) ? A.map(
      function(t) {
        return t && t._getInitResult ? t._getInitResult() : t;
      }
    ) : [];
    var i = Promise.all(A).then(function(t) {
      return u.apply(null, t);
    });
    return n._getInitResult = function() {
      return i;
    }, i;
  }, n;
}
var fA = function() {
  var p = !1;
  if (typeof window < "u" && typeof window.document < "u")
    try {
      var n = new Worker(
        URL.createObjectURL(new Blob([""], { type: "application/javascript" }))
      );
      n.terminate(), p = !0;
    } catch (A) {
      typeof process < "u" && process.env.NODE_ENV === "test" || console.log(
        "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + A.message + "]"
      );
    }
  return fA = function() {
    return p;
  }, p;
}, fd = 0, gd = 0, Is = !1, Yr = /* @__PURE__ */ Object.create(null), Jr = /* @__PURE__ */ Object.create(null), Ls = /* @__PURE__ */ Object.create(null);
function zr(p) {
  if ((!p || typeof p.init != "function") && !Is)
    throw new Error("requires `options.init` function");
  var n = p.dependencies, A = p.init, u = p.getTransferables, i = p.workerId;
  if (!fA())
    return pd(p);
  i == null && (i = "#default");
  var t = "workerModule" + ++fd, o = p.name || t, l = null;
  n = n && n.map(function(h) {
    return typeof h == "function" && !h.workerModuleData && (Is = !0, h = zr({
      workerId: i,
      name: "<" + o + "> function dependency: " + h.name,
      init: `function(){return (
` + _i(h) + `
)}`
    }), Is = !1), h && h.workerModuleData && (h = h.workerModuleData), h;
  });
  function a() {
    for (var h = [], d = arguments.length; d--; ) h[d] = arguments[d];
    if (!l) {
      l = ua(i, "registerModule", a.workerModuleData);
      var f = function() {
        l = null, Jr[i].delete(f);
      };
      (Jr[i] || (Jr[i] = /* @__PURE__ */ new Set())).add(f);
    }
    return l.then(function(m) {
      var v = m.isCallable;
      if (v)
        return ua(i, "callModule", { id: t, args: h });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return a.workerModuleData = {
    isWorkerModule: !0,
    id: t,
    name: o,
    dependencies: n,
    init: _i(A),
    getTransferables: u && _i(u)
  }, a;
}
function md(p) {
  Jr[p] && Jr[p].forEach(function(n) {
    n();
  }), Yr[p] && (Yr[p].terminate(), delete Yr[p]);
}
function _i(p) {
  var n = p.toString();
  return !/^function/.test(n) && /^\w+\s*\(/.test(n) && (n = "function " + n), n;
}
function vd(p) {
  var n = Yr[p];
  if (!n) {
    var A = _i(dd);
    n = Yr[p] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + p.replace(/\*/g, "") + ` **/

;(` + A + ")()"],
          { type: "application/javascript" }
        )
      )
    ), n.onmessage = function(u) {
      var i = u.data, t = i.messageId, o = Ls[t];
      if (!o)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete Ls[t], o(i);
    };
  }
  return n;
}
function ua(p, n, A) {
  return new Promise(function(u, i) {
    var t = ++gd;
    Ls[t] = function(o) {
      o.success ? u(o.result) : i(new Error("Error in worker " + n + " call: " + o.error));
    }, vd(p).postMessage({
      messageId: t,
      action: n,
      data: A
    });
  });
}
function gA() {
  var p = function(n) {
    function A(V, re, S, N, P, O, G, K) {
      var q = 1 - G;
      K.x = q * q * V + 2 * q * G * S + G * G * P, K.y = q * q * re + 2 * q * G * N + G * G * O;
    }
    function u(V, re, S, N, P, O, G, K, q, z) {
      var ue = 1 - q;
      z.x = ue * ue * ue * V + 3 * ue * ue * q * S + 3 * ue * q * q * P + q * q * q * G, z.y = ue * ue * ue * re + 3 * ue * ue * q * N + 3 * ue * q * q * O + q * q * q * K;
    }
    function i(V, re) {
      for (var S = /([MLQCZ])([^MLQCZ]*)/g, N, P, O, G, K; N = S.exec(V); ) {
        var q = N[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(z) {
          return parseFloat(z);
        });
        switch (N[1]) {
          case "M":
            G = P = q[0], K = O = q[1];
            break;
          case "L":
            (q[0] !== G || q[1] !== K) && re("L", G, K, G = q[0], K = q[1]);
            break;
          case "Q": {
            re("Q", G, K, G = q[2], K = q[3], q[0], q[1]);
            break;
          }
          case "C": {
            re("C", G, K, G = q[4], K = q[5], q[0], q[1], q[2], q[3]);
            break;
          }
          case "Z":
            (G !== P || K !== O) && re("L", G, K, P, O);
            break;
        }
      }
    }
    function t(V, re, S) {
      S === void 0 && (S = 16);
      var N = { x: 0, y: 0 };
      i(V, function(P, O, G, K, q, z, ue, ve, te) {
        switch (P) {
          case "L":
            re(O, G, K, q);
            break;
          case "Q": {
            for (var X = O, xe = G, De = 1; De < S; De++)
              A(
                O,
                G,
                z,
                ue,
                K,
                q,
                De / (S - 1),
                N
              ), re(X, xe, N.x, N.y), X = N.x, xe = N.y;
            break;
          }
          case "C": {
            for (var he = O, pe = G, Qe = 1; Qe < S; Qe++)
              u(
                O,
                G,
                z,
                ue,
                ve,
                te,
                K,
                q,
                Qe / (S - 1),
                N
              ), re(he, pe, N.x, N.y), he = N.x, pe = N.y;
            break;
          }
        }
      });
    }
    var o = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", l = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", a = /* @__PURE__ */ new WeakMap(), h = {
      premultipliedAlpha: !1,
      preserveDrawingBuffer: !0,
      antialias: !1,
      depth: !1
    };
    function d(V, re) {
      var S = V.getContext ? V.getContext("webgl", h) : V, N = a.get(S);
      if (!N) {
        let ue = function(he) {
          var pe = O[he];
          if (!pe && (pe = O[he] = S.getExtension(he), !pe))
            throw new Error(he + " not supported");
          return pe;
        }, ve = function(he, pe) {
          var Qe = S.createShader(pe);
          return S.shaderSource(Qe, he), S.compileShader(Qe), Qe;
        }, te = function(he, pe, Qe, se) {
          if (!G[he]) {
            var Ie = {}, me = {}, ee = S.createProgram();
            S.attachShader(ee, ve(pe, S.VERTEX_SHADER)), S.attachShader(ee, ve(Qe, S.FRAGMENT_SHADER)), S.linkProgram(ee), G[he] = {
              program: ee,
              transaction: function(Ce) {
                S.useProgram(ee), Ce({
                  setUniform: function(ge, Ve) {
                    for (var Fe = [], we = arguments.length - 2; we-- > 0; ) Fe[we] = arguments[we + 2];
                    var Te = me[Ve] || (me[Ve] = S.getUniformLocation(ee, Ve));
                    S["uniform" + ge].apply(S, [Te].concat(Fe));
                  },
                  setAttribute: function(ge, Ve, Fe, we, Te) {
                    var Pe = Ie[ge];
                    Pe || (Pe = Ie[ge] = {
                      buf: S.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: S.getAttribLocation(ee, ge),
                      data: null
                    }), S.bindBuffer(S.ARRAY_BUFFER, Pe.buf), S.vertexAttribPointer(Pe.loc, Ve, S.FLOAT, !1, 0, 0), S.enableVertexAttribArray(Pe.loc), P ? S.vertexAttribDivisor(Pe.loc, we) : ue("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc, we), Te !== Pe.data && (S.bufferData(S.ARRAY_BUFFER, Te, Fe), Pe.data = Te);
                  }
                });
              }
            };
          }
          G[he].transaction(se);
        }, X = function(he, pe) {
          q++;
          try {
            S.activeTexture(S.TEXTURE0 + q);
            var Qe = K[he];
            Qe || (Qe = K[he] = S.createTexture(), S.bindTexture(S.TEXTURE_2D, Qe), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MIN_FILTER, S.NEAREST), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MAG_FILTER, S.NEAREST)), S.bindTexture(S.TEXTURE_2D, Qe), pe(Qe, q);
          } finally {
            q--;
          }
        }, xe = function(he, pe, Qe) {
          var se = S.createFramebuffer();
          z.push(se), S.bindFramebuffer(S.FRAMEBUFFER, se), S.activeTexture(S.TEXTURE0 + pe), S.bindTexture(S.TEXTURE_2D, he), S.framebufferTexture2D(S.FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_2D, he, 0);
          try {
            Qe(se);
          } finally {
            S.deleteFramebuffer(se), S.bindFramebuffer(S.FRAMEBUFFER, z[--z.length - 1] || null);
          }
        }, De = function() {
          O = {}, G = {}, K = {}, q = -1, z.length = 0;
        };
        var P = typeof WebGL2RenderingContext < "u" && S instanceof WebGL2RenderingContext, O = {}, G = {}, K = {}, q = -1, z = [];
        S.canvas.addEventListener("webglcontextlost", function(he) {
          De(), he.preventDefault();
        }, !1), a.set(S, N = {
          gl: S,
          isWebGL2: P,
          getExtension: ue,
          withProgram: te,
          withTexture: X,
          withTextureFramebuffer: xe,
          handleContextLoss: De
        });
      }
      re(N);
    }
    function f(V, re, S, N, P, O, G, K) {
      G === void 0 && (G = 15), K === void 0 && (K = null), d(V, function(q) {
        var z = q.gl, ue = q.withProgram, ve = q.withTexture;
        ve("copy", function(te, X) {
          z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, P, O, 0, z.RGBA, z.UNSIGNED_BYTE, re), ue("copy", o, l, function(xe) {
            var De = xe.setUniform, he = xe.setAttribute;
            he("aUV", 2, z.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), De("1i", "image", X), z.bindFramebuffer(z.FRAMEBUFFER, K || null), z.disable(z.BLEND), z.colorMask(G & 8, G & 4, G & 2, G & 1), z.viewport(S, N, P, O), z.scissor(S, N, P, O), z.drawArrays(z.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function m(V, re, S) {
      var N = V.width, P = V.height;
      d(V, function(O) {
        var G = O.gl, K = new Uint8Array(N * P * 4);
        G.readPixels(0, 0, N, P, G.RGBA, G.UNSIGNED_BYTE, K), V.width = re, V.height = S, f(G, K, 0, 0, N, P);
      });
    }
    var v = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: d,
      renderImageData: f,
      resizeWebGLCanvasWithoutClearing: m
    });
    function b(V, re, S, N, P, O) {
      O === void 0 && (O = 1);
      var G = new Uint8Array(V * re), K = N[2] - N[0], q = N[3] - N[1], z = [];
      t(S, function(he, pe, Qe, se) {
        z.push({
          x1: he,
          y1: pe,
          x2: Qe,
          y2: se,
          minX: Math.min(he, Qe),
          minY: Math.min(pe, se),
          maxX: Math.max(he, Qe),
          maxY: Math.max(pe, se)
        });
      }), z.sort(function(he, pe) {
        return he.maxX - pe.maxX;
      });
      for (var ue = 0; ue < V; ue++)
        for (var ve = 0; ve < re; ve++) {
          var te = xe(
            N[0] + K * (ue + 0.5) / V,
            N[1] + q * (ve + 0.5) / re
          ), X = Math.pow(1 - Math.abs(te) / P, O) / 2;
          te < 0 && (X = 1 - X), X = Math.max(0, Math.min(255, Math.round(X * 255))), G[ve * V + ue] = X;
        }
      return G;
      function xe(he, pe) {
        for (var Qe = 1 / 0, se = 1 / 0, Ie = z.length; Ie--; ) {
          var me = z[Ie];
          if (me.maxX + se <= he)
            break;
          if (he + se > me.minX && pe - se < me.maxY && pe + se > me.minY) {
            var ee = y(he, pe, me.x1, me.y1, me.x2, me.y2);
            ee < Qe && (Qe = ee, se = Math.sqrt(Qe));
          }
        }
        return De(he, pe) && (se = -se), se;
      }
      function De(he, pe) {
        for (var Qe = 0, se = z.length; se--; ) {
          var Ie = z[se];
          if (Ie.maxX <= he)
            break;
          var me = Ie.y1 > pe != Ie.y2 > pe && he < (Ie.x2 - Ie.x1) * (pe - Ie.y1) / (Ie.y2 - Ie.y1) + Ie.x1;
          me && (Qe += Ie.y1 < Ie.y2 ? 1 : -1);
        }
        return Qe !== 0;
      }
    }
    function C(V, re, S, N, P, O, G, K, q, z) {
      O === void 0 && (O = 1), K === void 0 && (K = 0), q === void 0 && (q = 0), z === void 0 && (z = 0), E(V, re, S, N, P, O, G, null, K, q, z);
    }
    function E(V, re, S, N, P, O, G, K, q, z, ue) {
      O === void 0 && (O = 1), q === void 0 && (q = 0), z === void 0 && (z = 0), ue === void 0 && (ue = 0);
      for (var ve = b(V, re, S, N, P, O), te = new Uint8Array(ve.length * 4), X = 0; X < ve.length; X++)
        te[X * 4 + ue] = ve[X];
      f(G, te, q, z, V, re, 1 << 3 - ue, K);
    }
    function y(V, re, S, N, P, O) {
      var G = P - S, K = O - N, q = G * G + K * K, z = q ? Math.max(0, Math.min(1, ((V - S) * G + (re - N) * K) / q)) : 0, ue = V - (S + z * G), ve = re - (N + z * K);
      return ue * ue + ve * ve;
    }
    var I = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: b,
      generateIntoCanvas: C,
      generateIntoFramebuffer: E
    }), Q = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", _ = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", x = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", F = new Float32Array([0, 0, 2, 0, 0, 2]), T = null, L = !1, W = {}, J = /* @__PURE__ */ new WeakMap();
    function ie(V) {
      if (!L && !oe(V))
        throw new Error("WebGL generation not supported");
    }
    function M(V, re, S, N, P, O, G) {
      if (O === void 0 && (O = 1), G === void 0 && (G = null), !G && (G = T, !G)) {
        var K = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!K)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        G = T = K.getContext("webgl", { depth: !1 });
      }
      ie(G);
      var q = new Uint8Array(V * re * 4);
      d(G, function(te) {
        var X = te.gl, xe = te.withTexture, De = te.withTextureFramebuffer;
        xe("readable", function(he, pe) {
          X.texImage2D(X.TEXTURE_2D, 0, X.RGBA, V, re, 0, X.RGBA, X.UNSIGNED_BYTE, null), De(he, pe, function(Qe) {
            Y(
              V,
              re,
              S,
              N,
              P,
              O,
              X,
              Qe,
              0,
              0,
              0
              // red channel
            ), X.readPixels(0, 0, V, re, X.RGBA, X.UNSIGNED_BYTE, q);
          });
        });
      });
      for (var z = new Uint8Array(V * re), ue = 0, ve = 0; ue < q.length; ue += 4)
        z[ve++] = q[ue];
      return z;
    }
    function Z(V, re, S, N, P, O, G, K, q, z) {
      O === void 0 && (O = 1), K === void 0 && (K = 0), q === void 0 && (q = 0), z === void 0 && (z = 0), Y(V, re, S, N, P, O, G, null, K, q, z);
    }
    function Y(V, re, S, N, P, O, G, K, q, z, ue) {
      O === void 0 && (O = 1), q === void 0 && (q = 0), z === void 0 && (z = 0), ue === void 0 && (ue = 0), ie(G);
      var ve = [];
      t(S, function(te, X, xe, De) {
        ve.push(te, X, xe, De);
      }), ve = new Float32Array(ve), d(G, function(te) {
        var X = te.gl, xe = te.isWebGL2, De = te.getExtension, he = te.withProgram, pe = te.withTexture, Qe = te.withTextureFramebuffer, se = te.handleContextLoss;
        if (pe("rawDistances", function(Ie, me) {
          (V !== Ie._lastWidth || re !== Ie._lastHeight) && X.texImage2D(
            X.TEXTURE_2D,
            0,
            X.RGBA,
            Ie._lastWidth = V,
            Ie._lastHeight = re,
            0,
            X.RGBA,
            X.UNSIGNED_BYTE,
            null
          ), he("main", Q, _, function(ee) {
            var Be = ee.setAttribute, Ce = ee.setUniform, Ee = !xe && De("ANGLE_instanced_arrays"), ge = !xe && De("EXT_blend_minmax");
            Be("aUV", 2, X.STATIC_DRAW, 0, F), Be("aLineSegment", 4, X.DYNAMIC_DRAW, 1, ve), Ce.apply(void 0, ["4f", "uGlyphBounds"].concat(N)), Ce("1f", "uMaxDistance", P), Ce("1f", "uExponent", O), Qe(Ie, me, function(Ve) {
              X.enable(X.BLEND), X.colorMask(!0, !0, !0, !0), X.viewport(0, 0, V, re), X.scissor(0, 0, V, re), X.blendFunc(X.ONE, X.ONE), X.blendEquationSeparate(X.FUNC_ADD, xe ? X.MAX : ge.MAX_EXT), X.clear(X.COLOR_BUFFER_BIT), xe ? X.drawArraysInstanced(X.TRIANGLES, 0, 3, ve.length / 4) : Ee.drawArraysInstancedANGLE(X.TRIANGLES, 0, 3, ve.length / 4);
            });
          }), he("post", o, x, function(ee) {
            ee.setAttribute("aUV", 2, X.STATIC_DRAW, 0, F), ee.setUniform("1i", "tex", me), X.bindFramebuffer(X.FRAMEBUFFER, K), X.disable(X.BLEND), X.colorMask(ue === 0, ue === 1, ue === 2, ue === 3), X.viewport(q, z, V, re), X.scissor(q, z, V, re), X.drawArrays(X.TRIANGLES, 0, 3);
          });
        }), X.isContextLost())
          throw se(), new Error("webgl context lost");
      });
    }
    function oe(V) {
      var re = !V || V === T ? W : V.canvas || V, S = J.get(re);
      if (S === void 0) {
        L = !0;
        var N = null;
        try {
          var P = [
            97,
            106,
            97,
            61,
            99,
            137,
            118,
            80,
            80,
            118,
            137,
            99,
            61,
            97,
            106,
            97
          ], O = M(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            V
          );
          S = O && P.length === O.length && O.every(function(G, K) {
            return G === P[K];
          }), S || (N = "bad trial run results", console.info(P, O));
        } catch (G) {
          S = !1, N = G.message;
        }
        N && console.warn("WebGL SDF generation not supported:", N), L = !1, J.set(re, S);
      }
      return S;
    }
    var ae = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: M,
      generateIntoCanvas: Z,
      generateIntoFramebuffer: Y,
      isSupported: oe
    });
    function H(V, re, S, N, P, O) {
      P === void 0 && (P = Math.max(N[2] - N[0], N[3] - N[1]) / 2), O === void 0 && (O = 1);
      try {
        return M.apply(ae, arguments);
      } catch (G) {
        return console.info("WebGL SDF generation failed, falling back to JS", G), b.apply(I, arguments);
      }
    }
    function j(V, re, S, N, P, O, G, K, q, z) {
      P === void 0 && (P = Math.max(N[2] - N[0], N[3] - N[1]) / 2), O === void 0 && (O = 1), K === void 0 && (K = 0), q === void 0 && (q = 0), z === void 0 && (z = 0);
      try {
        return Z.apply(ae, arguments);
      } catch (ue) {
        return console.info("WebGL SDF generation failed, falling back to JS", ue), C.apply(I, arguments);
      }
    }
    return n.forEachPathCommand = i, n.generate = H, n.generateIntoCanvas = j, n.javascript = I, n.pathToLineSegments = t, n.webgl = ae, n.webglUtils = v, Object.defineProperty(n, "__esModule", { value: !0 }), n;
  }({});
  return p;
}
function Cd() {
  var p = function(n) {
    var A = {
      R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
      EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
      ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
      ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
      AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
      CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
      B: "a,3,f+2,2v,690",
      S: "9,2,k",
      WS: "c,k,4f4,1vk+a,u,1j,335",
      ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
      BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
      NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
      AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
      LRO: "6ct",
      RLO: "6cu",
      LRE: "6cq",
      RLE: "6cr",
      PDF: "6cs",
      LRI: "6ee",
      RLI: "6ef",
      FSI: "6eg",
      PDI: "6eh"
    }, u = {}, i = {};
    u.L = 1, i[1] = "L", Object.keys(A).forEach(function(se, Ie) {
      u[se] = 1 << Ie + 1, i[u[se]] = se;
    }), Object.freeze(u);
    var t = u.LRI | u.RLI | u.FSI, o = u.L | u.R | u.AL, l = u.B | u.S | u.WS | u.ON | u.FSI | u.LRI | u.RLI | u.PDI, a = u.BN | u.RLE | u.LRE | u.RLO | u.LRO | u.PDF, h = u.S | u.WS | u.B | t | u.PDI | a, d = null;
    function f() {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        var se = function(me) {
          if (A.hasOwnProperty(me)) {
            var ee = 0;
            A[me].split(",").forEach(function(Be) {
              var Ce = Be.split("+"), Ee = Ce[0], ge = Ce[1];
              Ee = parseInt(Ee, 36), ge = ge ? parseInt(ge, 36) : 0, d.set(ee += Ee, u[me]);
              for (var Ve = 0; Ve < ge; Ve++)
                d.set(++ee, u[me]);
            });
          }
        };
        for (var Ie in A) se(Ie);
      }
    }
    function m(se) {
      return f(), d.get(se.codePointAt(0)) || u.L;
    }
    function v(se) {
      return i[m(se)];
    }
    var b = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function C(se, Ie) {
      var me = 36, ee = 0, Be = /* @__PURE__ */ new Map(), Ce = Ie && /* @__PURE__ */ new Map(), Ee;
      return se.split(",").forEach(function ge(Ve) {
        if (Ve.indexOf("+") !== -1)
          for (var Fe = +Ve; Fe--; )
            ge(Ee);
        else {
          Ee = Ve;
          var we = Ve.split(">"), Te = we[0], Pe = we[1];
          Te = String.fromCodePoint(ee += parseInt(Te, me)), Pe = String.fromCodePoint(ee += parseInt(Pe, me)), Be.set(Te, Pe), Ie && Ce.set(Pe, Te);
        }
      }), { map: Be, reverseMap: Ce };
    }
    var E, y, I;
    function Q() {
      if (!E) {
        var se = C(b.pairs, !0), Ie = se.map, me = se.reverseMap;
        E = Ie, y = me, I = C(b.canonical, !1).map;
      }
    }
    function _(se) {
      return Q(), E.get(se) || null;
    }
    function x(se) {
      return Q(), y.get(se) || null;
    }
    function F(se) {
      return Q(), I.get(se) || null;
    }
    var T = u.L, L = u.R, W = u.EN, J = u.ES, ie = u.ET, M = u.AN, Z = u.CS, Y = u.B, oe = u.S, ae = u.ON, H = u.BN, j = u.NSM, V = u.AL, re = u.LRO, S = u.RLO, N = u.LRE, P = u.RLE, O = u.PDF, G = u.LRI, K = u.RLI, q = u.FSI, z = u.PDI;
    function ue(se, Ie) {
      for (var me = 125, ee = new Uint32Array(se.length), Be = 0; Be < se.length; Be++)
        ee[Be] = m(se[Be]);
      var Ce = /* @__PURE__ */ new Map();
      function Ee(ct, Ct) {
        var ot = ee[ct];
        ee[ct] = Ct, Ce.set(ot, Ce.get(ot) - 1), ot & l && Ce.set(l, Ce.get(l) - 1), Ce.set(Ct, (Ce.get(Ct) || 0) + 1), Ct & l && Ce.set(l, (Ce.get(l) || 0) + 1);
      }
      for (var ge = new Uint8Array(se.length), Ve = /* @__PURE__ */ new Map(), Fe = [], we = null, Te = 0; Te < se.length; Te++)
        we || Fe.push(we = {
          start: Te,
          end: se.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: Ie === "rtl" ? 1 : Ie === "ltr" ? 0 : ci(Te, !1)
        }), ee[Te] & Y && (we.end = Te, we = null);
      for (var Pe = P | N | S | re | t | z | O | Y, je = function(ct) {
        return ct + (ct & 1 ? 1 : 2);
      }, B = function(ct) {
        return ct + (ct & 1 ? 2 : 1);
      }, k = 0; k < Fe.length; k++) {
        we = Fe[k];
        var R = [{
          _level: we.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], U = void 0, le = 0, _e = 0, Re = 0;
        Ce.clear();
        for (var ce = we.start; ce <= we.end; ce++) {
          var $ = ee[ce];
          if (U = R[R.length - 1], Ce.set($, (Ce.get($) || 0) + 1), $ & l && Ce.set(l, (Ce.get(l) || 0) + 1), $ & Pe)
            if ($ & (P | N)) {
              ge[ce] = U._level;
              var Ae = ($ === P ? B : je)(U._level);
              Ae <= me && !le && !_e ? R.push({
                _level: Ae,
                _override: 0,
                _isolate: 0
              }) : le || _e++;
            } else if ($ & (S | re)) {
              ge[ce] = U._level;
              var de = ($ === S ? B : je)(U._level);
              de <= me && !le && !_e ? R.push({
                _level: de,
                _override: $ & S ? L : T,
                _isolate: 0
              }) : le || _e++;
            } else if ($ & t) {
              $ & q && ($ = ci(ce + 1, !0) === 1 ? K : G), ge[ce] = U._level, U._override && Ee(ce, U._override);
              var fe = ($ === K ? B : je)(U._level);
              fe <= me && le === 0 && _e === 0 ? (Re++, R.push({
                _level: fe,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: ce
              })) : le++;
            } else if ($ & z) {
              if (le > 0)
                le--;
              else if (Re > 0) {
                for (_e = 0; !R[R.length - 1]._isolate; )
                  R.pop();
                var ke = R[R.length - 1]._isolInitIndex;
                ke != null && (Ve.set(ke, ce), Ve.set(ce, ke)), R.pop(), Re--;
              }
              U = R[R.length - 1], ge[ce] = U._level, U._override && Ee(ce, U._override);
            } else $ & O ? (le === 0 && (_e > 0 ? _e-- : !U._isolate && R.length > 1 && (R.pop(), U = R[R.length - 1])), ge[ce] = U._level) : $ & Y && (ge[ce] = we.level);
          else
            ge[ce] = U._level, U._override && $ !== H && Ee(ce, U._override);
        }
        for (var Le = [], Me = null, Ue = we.start; Ue <= we.end; Ue++) {
          var nt = ee[Ue];
          if (!(nt & a)) {
            var Je = ge[Ue], He = nt & t, ft = nt === z;
            Me && Je === Me._level ? (Me._end = Ue, Me._endsWithIsolInit = He) : Le.push(Me = {
              _start: Ue,
              _end: Ue,
              _level: Je,
              _startsWithPDI: ft,
              _endsWithIsolInit: He
            });
          }
        }
        for (var rt = [], Ye = 0; Ye < Le.length; Ye++) {
          var Ze = Le[Ye];
          if (!Ze._startsWithPDI || Ze._startsWithPDI && !Ve.has(Ze._start)) {
            for (var lt = [Me = Ze], $e = void 0; Me && Me._endsWithIsolInit && ($e = Ve.get(Me._end)) != null; )
              for (var et = Ye + 1; et < Le.length; et++)
                if (Le[et]._start === $e) {
                  lt.push(Me = Le[et]);
                  break;
                }
            for (var st = [], Tt = 0; Tt < lt.length; Tt++)
              for (var gt = lt[Tt], _t = gt._start; _t <= gt._end; _t++)
                st.push(_t);
            for (var Si = ge[st[0]], Zr = we.level, Rt = st[0] - 1; Rt >= 0; Rt--)
              if (!(ee[Rt] & a)) {
                Zr = ge[Rt];
                break;
              }
            var Hn = st[st.length - 1], ki = ge[Hn], Kn = we.level;
            if (!(ee[Hn] & t)) {
              for (var qn = Hn + 1; qn <= we.end; qn++)
                if (!(ee[qn] & a)) {
                  Kn = ge[qn];
                  break;
                }
            }
            rt.push({
              _seqIndices: st,
              _sosType: Math.max(Zr, Si) % 2 ? L : T,
              _eosType: Math.max(Kn, ki) % 2 ? L : T
            });
          }
        }
        for (var Ft = 0; Ft < rt.length; Ft++) {
          var Yn = rt[Ft], be = Yn._seqIndices, En = Yn._sosType, $r = Yn._eosType, nn = ge[be[0]] & 1 ? L : T;
          if (Ce.get(j))
            for (var Lt = 0; Lt < be.length; Lt++) {
              var ei = be[Lt];
              if (ee[ei] & j) {
                for (var dr = En, wn = Lt - 1; wn >= 0; wn--)
                  if (!(ee[be[wn]] & a)) {
                    dr = ee[be[wn]];
                    break;
                  }
                Ee(ei, dr & (t | z) ? ae : dr);
              }
            }
          if (Ce.get(W))
            for (var bn = 0; bn < be.length; bn++) {
              var pr = be[bn];
              if (ee[pr] & W)
                for (var Bn = bn - 1; Bn >= -1; Bn--) {
                  var ti = Bn === -1 ? En : ee[be[Bn]];
                  if (ti & o) {
                    ti === V && Ee(pr, M);
                    break;
                  }
                }
            }
          if (Ce.get(V))
            for (var Kt = 0; Kt < be.length; Kt++) {
              var ni = be[Kt];
              ee[ni] & V && Ee(ni, L);
            }
          if (Ce.get(J) || Ce.get(Z))
            for (var rn = 1; rn < be.length - 1; rn++) {
              var Jn = be[rn];
              if (ee[Jn] & (J | Z)) {
                for (var sn = 0, fr = 0, gr = rn - 1; gr >= 0 && (sn = ee[be[gr]], !!(sn & a)); gr--)
                  ;
                for (var mr = rn + 1; mr < be.length && (fr = ee[be[mr]], !!(fr & a)); mr++)
                  ;
                sn === fr && (ee[Jn] === J ? sn === W : sn & (W | M)) && Ee(Jn, sn);
              }
            }
          if (Ce.get(W))
            for (var mt = 0; mt < be.length; mt++) {
              var Di = be[mt];
              if (ee[Di] & W) {
                for (var jn = mt - 1; jn >= 0 && ee[be[jn]] & (ie | a); jn--)
                  Ee(be[jn], W);
                for (mt++; mt < be.length && ee[be[mt]] & (ie | a | W); mt++)
                  ee[be[mt]] !== W && Ee(be[mt], W);
              }
            }
          if (Ce.get(ie) || Ce.get(J) || Ce.get(Z))
            for (var _n = 0; _n < be.length; _n++) {
              var ri = be[_n];
              if (ee[ri] & (ie | J | Z)) {
                Ee(ri, ae);
                for (var Pt = _n - 1; Pt >= 0 && ee[be[Pt]] & a; Pt--)
                  Ee(be[Pt], ae);
                for (var dt = _n + 1; dt < be.length && ee[be[dt]] & a; dt++)
                  Ee(be[dt], ae);
              }
            }
          if (Ce.get(W))
            for (var Mt = 0, on = En; Mt < be.length; Mt++) {
              var vr = be[Mt], an = ee[vr];
              an & W ? on === T && Ee(vr, T) : an & o && (on = an);
            }
          if (Ce.get(l)) {
            var qt = L | W | M, ii = qt | T, Ut = [];
            {
              for (var Yt = [], An = 0; An < be.length; An++)
                if (ee[be[An]] & l) {
                  var ln = se[be[An]], Cr = void 0;
                  if (_(ln) !== null)
                    if (Yt.length < 63)
                      Yt.push({ char: ln, seqIndex: An });
                    else
                      break;
                  else if ((Cr = x(ln)) !== null)
                    for (var yn = Yt.length - 1; yn >= 0; yn--) {
                      var cn = Yt[yn].char;
                      if (cn === Cr || cn === x(F(ln)) || _(F(cn)) === ln) {
                        Ut.push([Yt[yn].seqIndex, An]), Yt.length = yn;
                        break;
                      }
                    }
                }
              Ut.sort(function(ct, Ct) {
                return ct[0] - Ct[0];
              });
            }
            for (var Ir = 0; Ir < Ut.length; Ir++) {
              for (var Er = Ut[Ir], Qn = Er[0], wr = Er[1], si = !1, vt = 0, br = Qn + 1; br < wr; br++) {
                var oi = be[br];
                if (ee[oi] & ii) {
                  si = !0;
                  var Wn = ee[oi] & qt ? L : T;
                  if (Wn === nn) {
                    vt = Wn;
                    break;
                  }
                }
              }
              if (si && !vt) {
                vt = En;
                for (var Jt = Qn - 1; Jt >= 0; Jt--) {
                  var ai = be[Jt];
                  if (ee[ai] & ii) {
                    var un = ee[ai] & qt ? L : T;
                    un !== nn ? vt = un : vt = nn;
                    break;
                  }
                }
              }
              if (vt) {
                if (ee[be[Qn]] = ee[be[wr]] = vt, vt !== nn) {
                  for (var xn = Qn + 1; xn < be.length; xn++)
                    if (!(ee[be[xn]] & a)) {
                      m(se[be[xn]]) & j && (ee[be[xn]] = vt);
                      break;
                    }
                }
                if (vt !== nn) {
                  for (var jt = wr + 1; jt < be.length; jt++)
                    if (!(ee[be[jt]] & a)) {
                      m(se[be[jt]]) & j && (ee[be[jt]] = vt);
                      break;
                    }
                }
              }
            }
            for (var yt = 0; yt < be.length; yt++)
              if (ee[be[yt]] & l) {
                for (var Ai = yt, Br = yt, _r = En, Sn = yt - 1; Sn >= 0; Sn--)
                  if (ee[be[Sn]] & a)
                    Ai = Sn;
                  else {
                    _r = ee[be[Sn]] & qt ? L : T;
                    break;
                  }
                for (var li = $r, kn = yt + 1; kn < be.length; kn++)
                  if (ee[be[kn]] & (l | a))
                    Br = kn;
                  else {
                    li = ee[be[kn]] & qt ? L : T;
                    break;
                  }
                for (var yr = Ai; yr <= Br; yr++)
                  ee[be[yr]] = _r === li ? _r : nn;
                yt = Br;
              }
          }
        }
        for (var ut = we.start; ut <= we.end; ut++) {
          var Ti = ge[ut], Xn = ee[ut];
          if (Ti & 1 ? Xn & (T | W | M) && ge[ut]++ : Xn & L ? ge[ut]++ : Xn & (M | W) && (ge[ut] += 2), Xn & a && (ge[ut] = ut === 0 ? we.level : ge[ut - 1]), ut === we.end || m(se[ut]) & (oe | Y))
            for (var zn = ut; zn >= 0 && m(se[zn]) & h; zn--)
              ge[zn] = we.level;
        }
      }
      return {
        levels: ge,
        paragraphs: Fe
      };
      function ci(ct, Ct) {
        for (var ot = ct; ot < se.length; ot++) {
          var Gt = ee[ot];
          if (Gt & (L | V))
            return 1;
          if (Gt & (Y | T) || Ct && Gt === z)
            return 0;
          if (Gt & t) {
            var ui = Ri(ot);
            ot = ui === -1 ? se.length : ui;
          }
        }
        return 0;
      }
      function Ri(ct) {
        for (var Ct = 1, ot = ct + 1; ot < se.length; ot++) {
          var Gt = ee[ot];
          if (Gt & Y)
            break;
          if (Gt & z) {
            if (--Ct === 0)
              return ot;
          } else Gt & t && Ct++;
        }
        return -1;
      }
    }
    var ve = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", te;
    function X() {
      if (!te) {
        var se = C(ve, !0), Ie = se.map, me = se.reverseMap;
        me.forEach(function(ee, Be) {
          Ie.set(Be, ee);
        }), te = Ie;
      }
    }
    function xe(se) {
      return X(), te.get(se) || null;
    }
    function De(se, Ie, me, ee) {
      var Be = se.length;
      me = Math.max(0, me == null ? 0 : +me), ee = Math.min(Be - 1, ee == null ? Be - 1 : +ee);
      for (var Ce = /* @__PURE__ */ new Map(), Ee = me; Ee <= ee; Ee++)
        if (Ie[Ee] & 1) {
          var ge = xe(se[Ee]);
          ge !== null && Ce.set(Ee, ge);
        }
      return Ce;
    }
    function he(se, Ie, me, ee) {
      var Be = se.length;
      me = Math.max(0, me == null ? 0 : +me), ee = Math.min(Be - 1, ee == null ? Be - 1 : +ee);
      var Ce = [];
      return Ie.paragraphs.forEach(function(Ee) {
        var ge = Math.max(me, Ee.start), Ve = Math.min(ee, Ee.end);
        if (ge < Ve) {
          for (var Fe = Ie.levels.slice(ge, Ve + 1), we = Ve; we >= ge && m(se[we]) & h; we--)
            Fe[we] = Ee.level;
          for (var Te = Ee.level, Pe = 1 / 0, je = 0; je < Fe.length; je++) {
            var B = Fe[je];
            B > Te && (Te = B), B < Pe && (Pe = B | 1);
          }
          for (var k = Te; k >= Pe; k--)
            for (var R = 0; R < Fe.length; R++)
              if (Fe[R] >= k) {
                for (var U = R; R + 1 < Fe.length && Fe[R + 1] >= k; )
                  R++;
                R > U && Ce.push([U + ge, R + ge]);
              }
        }
      }), Ce;
    }
    function pe(se, Ie, me, ee) {
      var Be = Qe(se, Ie, me, ee), Ce = [].concat(se);
      return Be.forEach(function(Ee, ge) {
        Ce[ge] = (Ie.levels[Ee] & 1 ? xe(se[Ee]) : null) || se[Ee];
      }), Ce.join("");
    }
    function Qe(se, Ie, me, ee) {
      for (var Be = he(se, Ie, me, ee), Ce = [], Ee = 0; Ee < se.length; Ee++)
        Ce[Ee] = Ee;
      return Be.forEach(function(ge) {
        for (var Ve = ge[0], Fe = ge[1], we = Ce.slice(Ve, Fe + 1), Te = we.length; Te--; )
          Ce[Fe - Te] = we[Te];
      }), Ce;
    }
    return n.closingToOpeningBracket = x, n.getBidiCharType = m, n.getBidiCharTypeName = v, n.getCanonicalBracket = F, n.getEmbeddingLevels = ue, n.getMirroredCharacter = xe, n.getMirroredCharactersMap = De, n.getReorderSegments = he, n.getReorderedIndices = Qe, n.getReorderedString = pe, n.openingToClosingBracket = _, Object.defineProperty(n, "__esModule", { value: !0 }), n;
  }({});
  return p;
}
const mA = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function Ps(p) {
  const n = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function A(u, i) {
    let t = Ru[i];
    return t ? Ps(t) : u;
  }
  return p.replace(n, A);
}
const At = [];
for (let p = 0; p < 256; p++)
  At[p] = (p < 16 ? "0" : "") + p.toString(16);
function Id() {
  const p = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, A = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0;
  return (At[p & 255] + At[p >> 8 & 255] + At[p >> 16 & 255] + At[p >> 24 & 255] + "-" + At[n & 255] + At[n >> 8 & 255] + "-" + At[n >> 16 & 15 | 64] + At[n >> 24 & 255] + "-" + At[A & 63 | 128] + At[A >> 8 & 255] + "-" + At[A >> 16 & 255] + At[A >> 24 & 255] + At[u & 255] + At[u >> 8 & 255] + At[u >> 16 & 255] + At[u >> 24 & 255]).toUpperCase();
}
const Un = Object.assign || function() {
  let p = arguments[0];
  for (let n = 1, A = arguments.length; n < A; n++) {
    let u = arguments[n];
    if (u)
      for (let i in u)
        Object.prototype.hasOwnProperty.call(u, i) && (p[i] = u[i]);
  }
  return p;
}, Ed = Date.now(), ha = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new Map();
let wd = 1e10;
function Ms(p, n) {
  const A = yd(n);
  let u = ha.get(p);
  if (u || ha.set(p, u = /* @__PURE__ */ Object.create(null)), u[A])
    return new u[A]();
  const i = `_onBeforeCompile${A}`, t = function(h, d) {
    p.onBeforeCompile.call(this, h, d);
    const f = this.customProgramCacheKey() + "|" + h.vertexShader + "|" + h.fragmentShader;
    let m = da[f];
    if (!m) {
      const v = bd(this, h, n, A);
      m = da[f] = v;
    }
    h.vertexShader = m.vertexShader, h.fragmentShader = m.fragmentShader, Un(h.uniforms, this.uniforms), n.timeUniform && (h.uniforms[n.timeUniform] = {
      get value() {
        return Date.now() - Ed;
      }
    }), this[i] && this[i](h);
  }, o = function() {
    return l(n.chained ? p : p.clone());
  }, l = function(h) {
    const d = Object.create(h, a);
    return Object.defineProperty(d, "baseMaterial", { value: p }), Object.defineProperty(d, "id", { value: wd++ }), d.uuid = Id(), d.uniforms = Un({}, h.uniforms, n.uniforms), d.defines = Un({}, h.defines, n.defines), d.defines[`TROIKA_DERIVED_MATERIAL_${A}`] = "", d.extensions = Un({}, h.extensions, n.extensions), d._listeners = void 0, d;
  }, a = {
    constructor: { value: o },
    isDerivedMaterial: { value: !0 },
    customProgramCacheKey: {
      writable: !0,
      configurable: !0,
      value: function() {
        return p.customProgramCacheKey() + "|" + A;
      }
    },
    onBeforeCompile: {
      get() {
        return t;
      },
      set(h) {
        this[i] = h;
      }
    },
    copy: {
      writable: !0,
      configurable: !0,
      value: function(h) {
        return p.copy.call(this, h), !p.isShaderMaterial && !p.isDerivedMaterial && (Un(this.extensions, h.extensions), Un(this.defines, h.defines), Un(this.uniforms, Su.clone(h.uniforms))), this;
      }
    },
    clone: {
      writable: !0,
      configurable: !0,
      value: function() {
        const h = new p.constructor();
        return l(h).copy(this);
      }
    },
    /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDepthMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let h = this._depthMaterial;
        return h || (h = this._depthMaterial = Ms(
          p.isDerivedMaterial ? p.getDepthMaterial() : new ku({ depthPacking: Du }),
          n
        ), h.defines.IS_DEPTH_MATERIAL = "", h.uniforms = this.uniforms), h;
      }
    },
    /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDistanceMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let h = this._distanceMaterial;
        return h || (h = this._distanceMaterial = Ms(
          p.isDerivedMaterial ? p.getDistanceMaterial() : new Tu(),
          n
        ), h.defines.IS_DISTANCE_MATERIAL = "", h.uniforms = this.uniforms), h;
      }
    },
    dispose: {
      writable: !0,
      configurable: !0,
      value() {
        const { _depthMaterial: h, _distanceMaterial: d } = this;
        h && h.dispose(), d && d.dispose(), p.dispose.call(this);
      }
    }
  };
  return u[A] = o, new o();
}
function bd(p, { vertexShader: n, fragmentShader: A }, u, i) {
  let {
    vertexDefs: t,
    vertexMainIntro: o,
    vertexMainOutro: l,
    vertexTransform: a,
    fragmentDefs: h,
    fragmentMainIntro: d,
    fragmentMainOutro: f,
    fragmentColorTransform: m,
    customRewriter: v,
    timeUniform: b
  } = u;
  if (t = t || "", o = o || "", l = l || "", h = h || "", d = d || "", f = f || "", (a || v) && (n = Ps(n)), (m || v) && (A = A.replace(
    /^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,
    `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`
  ), A = Ps(A)), v) {
    let C = v({ vertexShader: n, fragmentShader: A });
    n = C.vertexShader, A = C.fragmentShader;
  }
  if (m) {
    let C = [];
    A = A.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (E) => (C.push(E), "")
    ), f = `${m}
${C.join(`
`)}
${f}`;
  }
  if (b) {
    const C = `
uniform float ${b};
`;
    t = C + t, h = C + h;
  }
  return a && (n = `vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${n}
`, t = `${t}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`, o = `
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${o}
`, n = n.replace(/\b(position|normal|uv)\b/g, (C, E, y, I) => /\battribute\s+vec[23]\s+$/.test(I.substr(0, y)) ? E : `troika_${E}_${i}`), p.map && p.map.channel > 0 || (n = n.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))), n = pa(n, i, t, o, l), A = pa(A, i, h, d, f), {
    vertexShader: n,
    fragmentShader: A
  };
}
function pa(p, n, A, u, i) {
  return (u || i || A) && (p = p.replace(
    mA,
    `
${A}
void troikaOrigMain${n}() {`
  ), p += `
void main() {
  ${u}
  troikaOrigMain${n}();
  ${i}
}`), p;
}
function Bd(p, n) {
  return p === "uniforms" ? void 0 : typeof n == "function" ? n.toString() : n;
}
let _d = 0;
const fa = /* @__PURE__ */ new Map();
function yd(p) {
  const n = JSON.stringify(p, Bd);
  let A = fa.get(n);
  return A == null && fa.set(n, A = ++_d), A;
}
function Qd(p, n, A) {
  const {
    defaultFontURL: u
  } = A, i = /* @__PURE__ */ Object.create(null), t = 1 / 0, o = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, l = "[^\\S\\u00A0]", a = new RegExp(`${l}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function h(I, Q) {
    function _() {
      const x = (F) => {
        console.error(`Failure loading font ${I}${I === u ? "" : "; trying fallback"}`, F), I !== u && (I = u, _());
      };
      try {
        const F = new XMLHttpRequest();
        F.open("get", I, !0), F.responseType = "arraybuffer", F.onload = function() {
          if (F.status >= 400)
            x(new Error(F.statusText));
          else if (F.status > 0)
            try {
              const T = p(F.response);
              Q(T);
            } catch (T) {
              x(T);
            }
        }, F.onerror = x, F.send();
      } catch (F) {
        x(F);
      }
    }
    _();
  }
  function d(I, Q) {
    I || (I = u);
    let _ = i[I];
    _ ? _.pending ? _.pending.push(Q) : Q(_) : (i[I] = { pending: [Q] }, h(I, (x) => {
      let F = i[I].pending;
      i[I] = x, F.forEach((T) => T(x));
    }));
  }
  function f({
    text: I = "",
    font: Q = u,
    sdfGlyphSize: _ = 64,
    fontSize: x = 1,
    letterSpacing: F = 0,
    lineHeight: T = "normal",
    maxWidth: L = t,
    direction: W,
    textAlign: J = "left",
    textIndent: ie = 0,
    whiteSpace: M = "normal",
    overflowWrap: Z = "normal",
    anchorX: Y = 0,
    anchorY: oe = 0,
    includeCaretPositions: ae = !1,
    chunkedBoundsSize: H = 8192,
    colorRanges: j = null
  }, V, re = !1) {
    const S = C(), N = { fontLoad: 0, typesetting: 0 };
    I.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), I = I.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), x = +x, F = +F, L = +L, T = T || "normal", ie = +ie, d(Q, (P) => {
      const O = isFinite(L);
      let G = null, K = null, q = null, z = null, ue = null, ve = null, te = null, X = 0, xe = 0, De = M !== "nowrap";
      const { ascender: he, descender: pe, unitsPerEm: Qe, lineGap: se, capHeight: Ie, xHeight: me } = P;
      N.fontLoad = C() - S;
      const ee = C(), Be = x / Qe;
      T === "normal" && (T = (he - pe + se) / Qe), T = T * x;
      const Ce = (T - (he - pe) * Be) / 2, Ee = -(he * Be + Ce), ge = Math.min(T, (he - pe) * Be), Ve = (he + pe) / 2 * Be - ge / 2;
      let Fe = ie, we = new E();
      const Te = [we];
      P.forEachGlyph(I, x, F, (B, k, R) => {
        const U = I.charAt(R), le = B.advanceWidth * Be, _e = we.count;
        let Re;
        if ("isEmpty" in B || (B.isWhitespace = !!U && new RegExp(l).test(U), B.canBreakAfter = !!U && a.test(U), B.isEmpty = B.xMin === B.xMax || B.yMin === B.yMax || o.test(U)), !B.isWhitespace && !B.isEmpty && xe++, De && O && !B.isWhitespace && k + le + Fe > L && _e) {
          if (we.glyphAt(_e - 1).glyphObj.canBreakAfter)
            Re = new E(), Fe = -k;
          else
            for (let $ = _e; $--; )
              if ($ === 0 && Z === "break-word") {
                Re = new E(), Fe = -k;
                break;
              } else if (we.glyphAt($).glyphObj.canBreakAfter) {
                Re = we.splitAt($ + 1);
                const Ae = Re.glyphAt(0).x;
                Fe -= Ae;
                for (let de = Re.count; de--; )
                  Re.glyphAt(de).x -= Ae;
                break;
              }
          Re && (we.isSoftWrapped = !0, we = Re, Te.push(we), X = L);
        }
        let ce = we.glyphAt(we.count);
        ce.glyphObj = B, ce.x = k + Fe, ce.width = le, ce.charIndex = R, U === `
` && (we = new E(), Te.push(we), Fe = -(k + le + F * x) + ie);
      }), Te.forEach((B) => {
        for (let k = B.count; k--; ) {
          let { glyphObj: R, x: U, width: le } = B.glyphAt(k);
          if (!R.isWhitespace) {
            B.width = U + le, B.width > X && (X = B.width);
            return;
          }
        }
      });
      let Pe = 0, je = 0;
      if (Y && (typeof Y == "number" ? Pe = -Y : typeof Y == "string" && (Pe = -X * (Y === "left" ? 0 : Y === "center" ? 0.5 : Y === "right" ? 1 : v(Y)))), oe) {
        if (typeof oe == "number")
          je = -oe;
        else if (typeof oe == "string") {
          let B = Te.length * T;
          je = oe === "top" ? 0 : oe === "top-baseline" ? -Ee : oe === "top-cap" ? -Ee - Ie * Be : oe === "top-ex" ? -Ee - me * Be : oe === "middle" ? B / 2 : oe === "bottom" ? B : oe === "bottom-baseline" ? B - Ce + pe * Be : v(oe) * B;
        }
      }
      if (!re) {
        const B = n.getEmbeddingLevels(I, W);
        G = new Uint16Array(xe), K = new Float32Array(xe * 2), q = {}, ve = [t, t, -t, -t], te = [];
        let k = Ee;
        ae && (ue = new Float32Array(I.length * 3)), j && (z = new Uint8Array(xe * 3));
        let R = 0, U = -1, le = -1, _e, Re;
        if (Te.forEach((ce, $) => {
          let { count: Ae, width: de } = ce;
          if (Ae > 0) {
            let fe = 0;
            for (let Je = Ae; Je-- && ce.glyphAt(Je).glyphObj.isWhitespace; )
              fe++;
            let ke = 0, Le = 0;
            if (J === "center")
              ke = (X - de) / 2;
            else if (J === "right")
              ke = X - de;
            else if (J === "justify" && ce.isSoftWrapped) {
              let Je = 0;
              for (let He = Ae - fe; He--; )
                ce.glyphAt(He).glyphObj.isWhitespace && Je++;
              Le = (X - de) / Je;
            }
            if (Le || ke) {
              let Je = 0;
              for (let He = 0; He < Ae; He++) {
                let ft = ce.glyphAt(He);
                const rt = ft.glyphObj;
                ft.x += ke + Je, Le !== 0 && rt.isWhitespace && He < Ae - fe && (Je += Le, ft.width += Le);
              }
            }
            const Me = n.getReorderSegments(
              I,
              B,
              ce.glyphAt(0).charIndex,
              ce.glyphAt(ce.count - 1).charIndex
            );
            for (let Je = 0; Je < Me.length; Je++) {
              const [He, ft] = Me[Je];
              let rt = 1 / 0, Ye = -1 / 0;
              for (let Ze = 0; Ze < Ae; Ze++)
                if (ce.glyphAt(Ze).charIndex >= He) {
                  let lt = Ze, $e = Ze;
                  for (; $e < Ae; $e++) {
                    let et = ce.glyphAt($e);
                    if (et.charIndex > ft)
                      break;
                    $e < Ae - fe && (rt = Math.min(rt, et.x), Ye = Math.max(Ye, et.x + et.width));
                  }
                  for (let et = lt; et < $e; et++) {
                    const st = ce.glyphAt(et);
                    st.x = Ye - (st.x + st.width - rt);
                  }
                  break;
                }
            }
            let Ue;
            const nt = (Je) => Ue = Je;
            for (let Je = 0; Je < Ae; Je++) {
              let He = ce.glyphAt(Je);
              Ue = He.glyphObj;
              const ft = Ue.index, rt = B.levels[He.charIndex] & 1;
              if (rt) {
                const Ye = n.getMirroredCharacter(I[He.charIndex]);
                Ye && P.forEachGlyph(Ye, 0, 0, nt);
              }
              if (ae) {
                const { charIndex: Ye } = He, Ze = He.x + Pe, lt = He.x + He.width + Pe;
                ue[Ye * 3] = rt ? lt : Ze, ue[Ye * 3 + 1] = rt ? Ze : lt, ue[Ye * 3 + 2] = k + Ve + je;
                const $e = Ye - U;
                $e > 1 && b(ue, U, $e), U = Ye;
              }
              if (j) {
                const { charIndex: Ye } = He;
                for (; Ye > le; )
                  le++, j.hasOwnProperty(le) && (Re = j[le]);
              }
              if (!Ue.isWhitespace && !Ue.isEmpty) {
                const Ye = R++;
                q[ft] || (q[ft] = {
                  path: Ue.path,
                  pathBounds: [Ue.xMin, Ue.yMin, Ue.xMax, Ue.yMax]
                });
                const Ze = He.x + Pe, lt = k + je;
                K[Ye * 2] = Ze, K[Ye * 2 + 1] = lt;
                const $e = Ze + Ue.xMin * Be, et = lt + Ue.yMin * Be, st = Ze + Ue.xMax * Be, Tt = lt + Ue.yMax * Be;
                $e < ve[0] && (ve[0] = $e), et < ve[1] && (ve[1] = et), st > ve[2] && (ve[2] = st), Tt > ve[3] && (ve[3] = Tt), Ye % H === 0 && (_e = { start: Ye, end: Ye, rect: [t, t, -t, -t] }, te.push(_e)), _e.end++;
                const gt = _e.rect;
                if ($e < gt[0] && (gt[0] = $e), et < gt[1] && (gt[1] = et), st > gt[2] && (gt[2] = st), Tt > gt[3] && (gt[3] = Tt), G[Ye] = ft, j) {
                  const _t = Ye * 3;
                  z[_t] = Re >> 16 & 255, z[_t + 1] = Re >> 8 & 255, z[_t + 2] = Re & 255;
                }
              }
            }
          }
          k -= T;
        }), ue) {
          const ce = I.length - U;
          ce > 1 && b(ue, U, ce);
        }
      }
      N.typesetting = C() - ee, V({
        glyphIds: G,
        //font indices for each glyph
        glyphPositions: K,
        //x,y of each glyph's origin in layout
        glyphData: q,
        //dict holding data about each glyph appearing in the text
        caretPositions: ue,
        //startX,endX,bottomY caret positions for each char
        caretHeight: ge,
        //height of cursor from bottom to top
        glyphColors: z,
        //color for each glyph, if color ranges supplied
        chunkedBounds: te,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize: x,
        //calculated em height
        unitsPerEm: Qe,
        //font units per em
        ascender: he * Be,
        //font ascender
        descender: pe * Be,
        //font descender
        capHeight: Ie * Be,
        //font cap-height
        xHeight: me * Be,
        //font x-height
        lineHeight: T,
        //computed line height
        topBaseline: Ee,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          Pe,
          je - Te.length * T,
          Pe + X,
          je
        ],
        visibleBounds: ve,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings: N
      });
    });
  }
  function m(I, Q) {
    f(I, (_) => {
      const [x, F, T, L] = _.blockBounds;
      Q({
        width: T - x,
        height: L - F
      });
    }, { metricsOnly: !0 });
  }
  function v(I) {
    let Q = I.match(/^([\d.]+)%$/), _ = Q ? parseFloat(Q[1]) : NaN;
    return isNaN(_) ? 0 : _ / 100;
  }
  function b(I, Q, _) {
    const x = I[Q * 3], F = I[Q * 3 + 1], T = I[Q * 3 + 2], L = (F - x) / _;
    for (let W = 0; W < _; W++) {
      const J = (Q + W) * 3;
      I[J] = x + L * W, I[J + 1] = x + L * (W + 1), I[J + 2] = T;
    }
  }
  function C() {
    return (self.performance || Date).now();
  }
  function E() {
    this.data = [];
  }
  const y = ["glyphObj", "x", "width", "charIndex"];
  return E.prototype = {
    width: 0,
    isSoftWrapped: !1,
    get count() {
      return Math.ceil(this.data.length / y.length);
    },
    glyphAt(I) {
      let Q = E.flyweight;
      return Q.data = this.data, Q.index = I, Q;
    },
    splitAt(I) {
      let Q = new E();
      return Q.data = this.data.splice(I * y.length), Q;
    }
  }, E.flyweight = y.reduce((I, Q, _, x) => (Object.defineProperty(I, Q, {
    get() {
      return this.data[this.index * y.length + _];
    },
    set(F) {
      this.data[this.index * y.length + _] = F;
    }
  }), I), { data: null, index: 0 }), {
    typeset: f,
    measure: m,
    loadFont: d
  };
}
const On = () => (self.performance || Date).now(), xi = /* @__PURE__ */ gA();
let ga;
function xd(p, n, A, u, i, t, o, l, a, h, d = !0) {
  return d ? kd(p, n, A, u, i, t, o, l, a, h).then(
    null,
    (f) => (ga || (console.warn("WebGL SDF generation failed, falling back to JS", f), ga = !0), va(p, n, A, u, i, t, o, l, a, h))
  ) : va(p, n, A, u, i, t, o, l, a, h);
}
const yi = [], Sd = 5;
let Us = 0;
function vA() {
  const p = On();
  for (; yi.length && On() - p < Sd; )
    yi.shift()();
  Us = yi.length ? setTimeout(vA, 0) : 0;
}
const kd = (...p) => new Promise((n, A) => {
  yi.push(() => {
    const u = On();
    try {
      xi.webgl.generateIntoCanvas(...p), n({ timing: On() - u });
    } catch (i) {
      A(i);
    }
  }), Us || (Us = setTimeout(vA, 0));
}), Dd = 4, Td = 2e3, ma = {};
let Rd = 0;
function va(p, n, A, u, i, t, o, l, a, h) {
  const d = "TroikaTextSDFGenerator_JS_" + Rd++ % Dd;
  let f = ma[d];
  return f || (f = ma[d] = {
    workerModule: zr({
      name: d,
      workerId: d,
      dependencies: [
        gA,
        On
      ],
      init(m, v) {
        const b = m().javascript.generate;
        return function(...C) {
          const E = v();
          return {
            textureData: b(...C),
            timing: v() - E
          };
        };
      },
      getTransferables(m) {
        return [m.textureData.buffer];
      }
    }),
    requests: 0,
    idleTimer: null
  }), f.requests++, clearTimeout(f.idleTimer), f.workerModule(p, n, A, u, i, t).then(({ textureData: m, timing: v }) => {
    const b = On(), C = new Uint8Array(m.length * 4);
    for (let E = 0; E < m.length; E++)
      C[E * 4 + h] = m[E];
    return xi.webglUtils.renderImageData(o, C, l, a, p, n, 1 << 3 - h), v += On() - b, --f.requests === 0 && (f.idleTimer = setTimeout(() => {
      md(d);
    }, Td)), { timing: v };
  });
}
function Fd(p) {
  p._warm || (xi.webgl.isSupported(p), p._warm = !0);
}
const Ld = xi.webglUtils.resizeWebGLCanvasWithoutClearing;
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function Pd() {
  return typeof window > "u" && (self.window = self), function(p) {
    var n = { parse: function(i) {
      var t = n._bin, o = new Uint8Array(i);
      if (t.readASCII(o, 0, 4) == "ttcf") {
        var l = 4;
        t.readUshort(o, l), l += 2, t.readUshort(o, l), l += 2;
        var a = t.readUint(o, l);
        l += 4;
        for (var h = [], d = 0; d < a; d++) {
          var f = t.readUint(o, l);
          l += 4, h.push(n._readFont(o, f));
        }
        return h;
      }
      return [n._readFont(o, 0)];
    }, _readFont: function(i, t) {
      var o = n._bin, l = t;
      o.readFixed(i, t), t += 4;
      var a = o.readUshort(i, t);
      t += 2, o.readUshort(i, t), t += 2, o.readUshort(i, t), t += 2, o.readUshort(i, t), t += 2;
      for (var h = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], d = { _data: i, _offset: l }, f = {}, m = 0; m < a; m++) {
        var v = o.readASCII(i, t, 4);
        t += 4, o.readUint(i, t), t += 4;
        var b = o.readUint(i, t);
        t += 4;
        var C = o.readUint(i, t);
        t += 4, f[v] = { offset: b, length: C };
      }
      for (m = 0; m < h.length; m++) {
        var E = h[m];
        f[E] && (d[E.trim()] = n[E.trim()].parse(i, f[E].offset, f[E].length, d));
      }
      return d;
    }, _tabOffset: function(i, t, o) {
      for (var l = n._bin, a = l.readUshort(i, o + 4), h = o + 12, d = 0; d < a; d++) {
        var f = l.readASCII(i, h, 4);
        h += 4, l.readUint(i, h), h += 4;
        var m = l.readUint(i, h);
        if (h += 4, l.readUint(i, h), h += 4, f == t) return m;
      }
      return 0;
    } };
    n._bin = { readFixed: function(i, t) {
      return (i[t] << 8 | i[t + 1]) + (i[t + 2] << 8 | i[t + 3]) / 65540;
    }, readF2dot14: function(i, t) {
      return n._bin.readShort(i, t) / 16384;
    }, readInt: function(i, t) {
      return n._bin._view(i).getInt32(t);
    }, readInt8: function(i, t) {
      return n._bin._view(i).getInt8(t);
    }, readShort: function(i, t) {
      return n._bin._view(i).getInt16(t);
    }, readUshort: function(i, t) {
      return n._bin._view(i).getUint16(t);
    }, readUshorts: function(i, t, o) {
      for (var l = [], a = 0; a < o; a++) l.push(n._bin.readUshort(i, t + 2 * a));
      return l;
    }, readUint: function(i, t) {
      return n._bin._view(i).getUint32(t);
    }, readUint64: function(i, t) {
      return 4294967296 * n._bin.readUint(i, t) + n._bin.readUint(i, t + 4);
    }, readASCII: function(i, t, o) {
      for (var l = "", a = 0; a < o; a++) l += String.fromCharCode(i[t + a]);
      return l;
    }, readUnicode: function(i, t, o) {
      for (var l = "", a = 0; a < o; a++) {
        var h = i[t++] << 8 | i[t++];
        l += String.fromCharCode(h);
      }
      return l;
    }, _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(i, t, o) {
      var l = n._bin._tdec;
      return l && t == 0 && o == i.length ? l.decode(i) : n._bin.readASCII(i, t, o);
    }, readBytes: function(i, t, o) {
      for (var l = [], a = 0; a < o; a++) l.push(i[t + a]);
      return l;
    }, readASCIIArray: function(i, t, o) {
      for (var l = [], a = 0; a < o; a++) l.push(String.fromCharCode(i[t + a]));
      return l;
    }, _view: function(i) {
      return i._dataView || (i._dataView = i.buffer ? new DataView(i.buffer, i.byteOffset, i.byteLength) : new DataView(new Uint8Array(i).buffer));
    } }, n._lctf = {}, n._lctf.parse = function(i, t, o, l, a) {
      var h = n._bin, d = {}, f = t;
      h.readFixed(i, t), t += 4;
      var m = h.readUshort(i, t);
      t += 2;
      var v = h.readUshort(i, t);
      t += 2;
      var b = h.readUshort(i, t);
      return t += 2, d.scriptList = n._lctf.readScriptList(i, f + m), d.featureList = n._lctf.readFeatureList(i, f + v), d.lookupList = n._lctf.readLookupList(i, f + b, a), d;
    }, n._lctf.readLookupList = function(i, t, o) {
      var l = n._bin, a = t, h = [], d = l.readUshort(i, t);
      t += 2;
      for (var f = 0; f < d; f++) {
        var m = l.readUshort(i, t);
        t += 2;
        var v = n._lctf.readLookupTable(i, a + m, o);
        h.push(v);
      }
      return h;
    }, n._lctf.readLookupTable = function(i, t, o) {
      var l = n._bin, a = t, h = { tabs: [] };
      h.ltype = l.readUshort(i, t), t += 2, h.flag = l.readUshort(i, t), t += 2;
      var d = l.readUshort(i, t);
      t += 2;
      for (var f = h.ltype, m = 0; m < d; m++) {
        var v = l.readUshort(i, t);
        t += 2;
        var b = o(i, f, a + v, h);
        h.tabs.push(b);
      }
      return h;
    }, n._lctf.numOfOnes = function(i) {
      for (var t = 0, o = 0; o < 32; o++) i >>> o & 1 && t++;
      return t;
    }, n._lctf.readClassDef = function(i, t) {
      var o = n._bin, l = [], a = o.readUshort(i, t);
      if (t += 2, a == 1) {
        var h = o.readUshort(i, t);
        t += 2;
        var d = o.readUshort(i, t);
        t += 2;
        for (var f = 0; f < d; f++) l.push(h + f), l.push(h + f), l.push(o.readUshort(i, t)), t += 2;
      }
      if (a == 2) {
        var m = o.readUshort(i, t);
        for (t += 2, f = 0; f < m; f++) l.push(o.readUshort(i, t)), t += 2, l.push(o.readUshort(i, t)), t += 2, l.push(o.readUshort(i, t)), t += 2;
      }
      return l;
    }, n._lctf.getInterval = function(i, t) {
      for (var o = 0; o < i.length; o += 3) {
        var l = i[o], a = i[o + 1];
        if (i[o + 2], l <= t && t <= a) return o;
      }
      return -1;
    }, n._lctf.readCoverage = function(i, t) {
      var o = n._bin, l = {};
      l.fmt = o.readUshort(i, t), t += 2;
      var a = o.readUshort(i, t);
      return t += 2, l.fmt == 1 && (l.tab = o.readUshorts(i, t, a)), l.fmt == 2 && (l.tab = o.readUshorts(i, t, 3 * a)), l;
    }, n._lctf.coverageIndex = function(i, t) {
      var o = i.tab;
      if (i.fmt == 1) return o.indexOf(t);
      if (i.fmt == 2) {
        var l = n._lctf.getInterval(o, t);
        if (l != -1) return o[l + 2] + (t - o[l]);
      }
      return -1;
    }, n._lctf.readFeatureList = function(i, t) {
      var o = n._bin, l = t, a = [], h = o.readUshort(i, t);
      t += 2;
      for (var d = 0; d < h; d++) {
        var f = o.readASCII(i, t, 4);
        t += 4;
        var m = o.readUshort(i, t);
        t += 2;
        var v = n._lctf.readFeatureTable(i, l + m);
        v.tag = f.trim(), a.push(v);
      }
      return a;
    }, n._lctf.readFeatureTable = function(i, t) {
      var o = n._bin, l = t, a = {}, h = o.readUshort(i, t);
      t += 2, h > 0 && (a.featureParams = l + h);
      var d = o.readUshort(i, t);
      t += 2, a.tab = [];
      for (var f = 0; f < d; f++) a.tab.push(o.readUshort(i, t + 2 * f));
      return a;
    }, n._lctf.readScriptList = function(i, t) {
      var o = n._bin, l = t, a = {}, h = o.readUshort(i, t);
      t += 2;
      for (var d = 0; d < h; d++) {
        var f = o.readASCII(i, t, 4);
        t += 4;
        var m = o.readUshort(i, t);
        t += 2, a[f.trim()] = n._lctf.readScriptTable(i, l + m);
      }
      return a;
    }, n._lctf.readScriptTable = function(i, t) {
      var o = n._bin, l = t, a = {}, h = o.readUshort(i, t);
      t += 2, a.default = n._lctf.readLangSysTable(i, l + h);
      var d = o.readUshort(i, t);
      t += 2;
      for (var f = 0; f < d; f++) {
        var m = o.readASCII(i, t, 4);
        t += 4;
        var v = o.readUshort(i, t);
        t += 2, a[m.trim()] = n._lctf.readLangSysTable(i, l + v);
      }
      return a;
    }, n._lctf.readLangSysTable = function(i, t) {
      var o = n._bin, l = {};
      o.readUshort(i, t), t += 2, l.reqFeature = o.readUshort(i, t), t += 2;
      var a = o.readUshort(i, t);
      return t += 2, l.features = o.readUshorts(i, t, a), l;
    }, n.CFF = {}, n.CFF.parse = function(i, t, o) {
      var l = n._bin;
      (i = new Uint8Array(i.buffer, t, o))[t = 0], i[++t], i[++t], i[++t], t++;
      var a = [];
      t = n.CFF.readIndex(i, t, a);
      for (var h = [], d = 0; d < a.length - 1; d++) h.push(l.readASCII(i, t + a[d], a[d + 1] - a[d]));
      t += a[a.length - 1];
      var f = [];
      t = n.CFF.readIndex(i, t, f);
      var m = [];
      for (d = 0; d < f.length - 1; d++) m.push(n.CFF.readDict(i, t + f[d], t + f[d + 1]));
      t += f[f.length - 1];
      var v = m[0], b = [];
      t = n.CFF.readIndex(i, t, b);
      var C = [];
      for (d = 0; d < b.length - 1; d++) C.push(l.readASCII(i, t + b[d], b[d + 1] - b[d]));
      if (t += b[b.length - 1], n.CFF.readSubrs(i, t, v), v.CharStrings) {
        t = v.CharStrings, b = [], t = n.CFF.readIndex(i, t, b);
        var E = [];
        for (d = 0; d < b.length - 1; d++) E.push(l.readBytes(i, t + b[d], b[d + 1] - b[d]));
        v.CharStrings = E;
      }
      if (v.ROS) {
        t = v.FDArray;
        var y = [];
        for (t = n.CFF.readIndex(i, t, y), v.FDArray = [], d = 0; d < y.length - 1; d++) {
          var I = n.CFF.readDict(i, t + y[d], t + y[d + 1]);
          n.CFF._readFDict(i, I, C), v.FDArray.push(I);
        }
        t += y[y.length - 1], t = v.FDSelect, v.FDSelect = [];
        var Q = i[t];
        if (t++, Q != 3) throw Q;
        var _ = l.readUshort(i, t);
        for (t += 2, d = 0; d < _ + 1; d++) v.FDSelect.push(l.readUshort(i, t), i[t + 2]), t += 3;
      }
      return v.Encoding && (v.Encoding = n.CFF.readEncoding(i, v.Encoding, v.CharStrings.length)), v.charset && (v.charset = n.CFF.readCharset(i, v.charset, v.CharStrings.length)), n.CFF._readFDict(i, v, C), v;
    }, n.CFF._readFDict = function(i, t, o) {
      var l;
      for (var a in t.Private && (l = t.Private[1], t.Private = n.CFF.readDict(i, l, l + t.Private[0]), t.Private.Subrs && n.CFF.readSubrs(i, l + t.Private.Subrs, t.Private)), t) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(a) != -1 && (t[a] = o[t[a] - 426 + 35]);
    }, n.CFF.readSubrs = function(i, t, o) {
      var l = n._bin, a = [];
      t = n.CFF.readIndex(i, t, a);
      var h, d = a.length;
      h = d < 1240 ? 107 : d < 33900 ? 1131 : 32768, o.Bias = h, o.Subrs = [];
      for (var f = 0; f < a.length - 1; f++) o.Subrs.push(l.readBytes(i, t + a[f], a[f + 1] - a[f]));
    }, n.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], n.CFF.glyphByUnicode = function(i, t) {
      for (var o = 0; o < i.charset.length; o++) if (i.charset[o] == t) return o;
      return -1;
    }, n.CFF.glyphBySE = function(i, t) {
      return t < 0 || t > 255 ? -1 : n.CFF.glyphByUnicode(i, n.CFF.tableSE[t]);
    }, n.CFF.readEncoding = function(i, t, o) {
      n._bin;
      var l = [".notdef"], a = i[t];
      if (t++, a != 0) throw "error: unknown encoding format: " + a;
      var h = i[t];
      t++;
      for (var d = 0; d < h; d++) l.push(i[t + d]);
      return l;
    }, n.CFF.readCharset = function(i, t, o) {
      var l = n._bin, a = [".notdef"], h = i[t];
      if (t++, h == 0) for (var d = 0; d < o; d++) {
        var f = l.readUshort(i, t);
        t += 2, a.push(f);
      }
      else {
        if (h != 1 && h != 2) throw "error: format: " + h;
        for (; a.length < o; ) {
          f = l.readUshort(i, t), t += 2;
          var m = 0;
          for (h == 1 ? (m = i[t], t++) : (m = l.readUshort(i, t), t += 2), d = 0; d <= m; d++) a.push(f), f++;
        }
      }
      return a;
    }, n.CFF.readIndex = function(i, t, o) {
      var l = n._bin, a = l.readUshort(i, t) + 1, h = i[t += 2];
      if (t++, h == 1) for (var d = 0; d < a; d++) o.push(i[t + d]);
      else if (h == 2) for (d = 0; d < a; d++) o.push(l.readUshort(i, t + 2 * d));
      else if (h == 3) for (d = 0; d < a; d++) o.push(16777215 & l.readUint(i, t + 3 * d - 1));
      else if (a != 1) throw "unsupported offset size: " + h + ", count: " + a;
      return (t += a * h) - 1;
    }, n.CFF.getCharString = function(i, t, o) {
      var l = n._bin, a = i[t], h = i[t + 1];
      i[t + 2], i[t + 3], i[t + 4];
      var d = 1, f = null, m = null;
      a <= 20 && (f = a, d = 1), a == 12 && (f = 100 * a + h, d = 2), 21 <= a && a <= 27 && (f = a, d = 1), a == 28 && (m = l.readShort(i, t + 1), d = 3), 29 <= a && a <= 31 && (f = a, d = 1), 32 <= a && a <= 246 && (m = a - 139, d = 1), 247 <= a && a <= 250 && (m = 256 * (a - 247) + h + 108, d = 2), 251 <= a && a <= 254 && (m = 256 * -(a - 251) - h - 108, d = 2), a == 255 && (m = l.readInt(i, t + 1) / 65535, d = 5), o.val = m ?? "o" + f, o.size = d;
    }, n.CFF.readCharString = function(i, t, o) {
      for (var l = t + o, a = n._bin, h = []; t < l; ) {
        var d = i[t], f = i[t + 1];
        i[t + 2], i[t + 3], i[t + 4];
        var m = 1, v = null, b = null;
        d <= 20 && (v = d, m = 1), d == 12 && (v = 100 * d + f, m = 2), d != 19 && d != 20 || (v = d, m = 2), 21 <= d && d <= 27 && (v = d, m = 1), d == 28 && (b = a.readShort(i, t + 1), m = 3), 29 <= d && d <= 31 && (v = d, m = 1), 32 <= d && d <= 246 && (b = d - 139, m = 1), 247 <= d && d <= 250 && (b = 256 * (d - 247) + f + 108, m = 2), 251 <= d && d <= 254 && (b = 256 * -(d - 251) - f - 108, m = 2), d == 255 && (b = a.readInt(i, t + 1) / 65535, m = 5), h.push(b ?? "o" + v), t += m;
      }
      return h;
    }, n.CFF.readDict = function(i, t, o) {
      for (var l = n._bin, a = {}, h = []; t < o; ) {
        var d = i[t], f = i[t + 1];
        i[t + 2], i[t + 3], i[t + 4];
        var m = 1, v = null, b = null;
        if (d == 28 && (b = l.readShort(i, t + 1), m = 3), d == 29 && (b = l.readInt(i, t + 1), m = 5), 32 <= d && d <= 246 && (b = d - 139, m = 1), 247 <= d && d <= 250 && (b = 256 * (d - 247) + f + 108, m = 2), 251 <= d && d <= 254 && (b = 256 * -(d - 251) - f - 108, m = 2), d == 255) throw b = l.readInt(i, t + 1) / 65535, m = 5, "unknown number";
        if (d == 30) {
          var C = [];
          for (m = 1; ; ) {
            var E = i[t + m];
            m++;
            var y = E >> 4, I = 15 & E;
            if (y != 15 && C.push(y), I != 15 && C.push(I), I == 15) break;
          }
          for (var Q = "", _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], x = 0; x < C.length; x++) Q += _[C[x]];
          b = parseFloat(Q);
        }
        d <= 21 && (v = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][d], m = 1, d == 12 && (v = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][f], m = 2)), v != null ? (a[v] = h.length == 1 ? h[0] : h, h = []) : h.push(b), t += m;
      }
      return a;
    }, n.cmap = {}, n.cmap.parse = function(i, t, o) {
      i = new Uint8Array(i.buffer, t, o), t = 0;
      var l = n._bin, a = {};
      l.readUshort(i, t), t += 2;
      var h = l.readUshort(i, t);
      t += 2;
      var d = [];
      a.tables = [];
      for (var f = 0; f < h; f++) {
        var m = l.readUshort(i, t);
        t += 2;
        var v = l.readUshort(i, t);
        t += 2;
        var b = l.readUint(i, t);
        t += 4;
        var C = "p" + m + "e" + v, E = d.indexOf(b);
        if (E == -1) {
          var y;
          E = a.tables.length, d.push(b);
          var I = l.readUshort(i, b);
          I == 0 ? y = n.cmap.parse0(i, b) : I == 4 ? y = n.cmap.parse4(i, b) : I == 6 ? y = n.cmap.parse6(i, b) : I == 12 ? y = n.cmap.parse12(i, b) : console.debug("unknown format: " + I, m, v, b), a.tables.push(y);
        }
        if (a[C] != null) throw "multiple tables for one platform+encoding";
        a[C] = E;
      }
      return a;
    }, n.cmap.parse0 = function(i, t) {
      var o = n._bin, l = {};
      l.format = o.readUshort(i, t), t += 2;
      var a = o.readUshort(i, t);
      t += 2, o.readUshort(i, t), t += 2, l.map = [];
      for (var h = 0; h < a - 6; h++) l.map.push(i[t + h]);
      return l;
    }, n.cmap.parse4 = function(i, t) {
      var o = n._bin, l = t, a = {};
      a.format = o.readUshort(i, t), t += 2;
      var h = o.readUshort(i, t);
      t += 2, o.readUshort(i, t), t += 2;
      var d = o.readUshort(i, t);
      t += 2;
      var f = d / 2;
      a.searchRange = o.readUshort(i, t), t += 2, a.entrySelector = o.readUshort(i, t), t += 2, a.rangeShift = o.readUshort(i, t), t += 2, a.endCount = o.readUshorts(i, t, f), t += 2 * f, t += 2, a.startCount = o.readUshorts(i, t, f), t += 2 * f, a.idDelta = [];
      for (var m = 0; m < f; m++) a.idDelta.push(o.readShort(i, t)), t += 2;
      for (a.idRangeOffset = o.readUshorts(i, t, f), t += 2 * f, a.glyphIdArray = []; t < l + h; ) a.glyphIdArray.push(o.readUshort(i, t)), t += 2;
      return a;
    }, n.cmap.parse6 = function(i, t) {
      var o = n._bin, l = {};
      l.format = o.readUshort(i, t), t += 2, o.readUshort(i, t), t += 2, o.readUshort(i, t), t += 2, l.firstCode = o.readUshort(i, t), t += 2;
      var a = o.readUshort(i, t);
      t += 2, l.glyphIdArray = [];
      for (var h = 0; h < a; h++) l.glyphIdArray.push(o.readUshort(i, t)), t += 2;
      return l;
    }, n.cmap.parse12 = function(i, t) {
      var o = n._bin, l = {};
      l.format = o.readUshort(i, t), t += 2, t += 2, o.readUint(i, t), t += 4, o.readUint(i, t), t += 4;
      var a = o.readUint(i, t);
      t += 4, l.groups = [];
      for (var h = 0; h < a; h++) {
        var d = t + 12 * h, f = o.readUint(i, d + 0), m = o.readUint(i, d + 4), v = o.readUint(i, d + 8);
        l.groups.push([f, m, v]);
      }
      return l;
    }, n.glyf = {}, n.glyf.parse = function(i, t, o, l) {
      for (var a = [], h = 0; h < l.maxp.numGlyphs; h++) a.push(null);
      return a;
    }, n.glyf._parseGlyf = function(i, t) {
      var o = n._bin, l = i._data, a = n._tabOffset(l, "glyf", i._offset) + i.loca[t];
      if (i.loca[t] == i.loca[t + 1]) return null;
      var h = {};
      if (h.noc = o.readShort(l, a), a += 2, h.xMin = o.readShort(l, a), a += 2, h.yMin = o.readShort(l, a), a += 2, h.xMax = o.readShort(l, a), a += 2, h.yMax = o.readShort(l, a), a += 2, h.xMin >= h.xMax || h.yMin >= h.yMax) return null;
      if (h.noc > 0) {
        h.endPts = [];
        for (var d = 0; d < h.noc; d++) h.endPts.push(o.readUshort(l, a)), a += 2;
        var f = o.readUshort(l, a);
        if (a += 2, l.length - a < f) return null;
        h.instructions = o.readBytes(l, a, f), a += f;
        var m = h.endPts[h.noc - 1] + 1;
        for (h.flags = [], d = 0; d < m; d++) {
          var v = l[a];
          if (a++, h.flags.push(v), (8 & v) != 0) {
            var b = l[a];
            a++;
            for (var C = 0; C < b; C++) h.flags.push(v), d++;
          }
        }
        for (h.xs = [], d = 0; d < m; d++) {
          var E = (2 & h.flags[d]) != 0, y = (16 & h.flags[d]) != 0;
          E ? (h.xs.push(y ? l[a] : -l[a]), a++) : y ? h.xs.push(0) : (h.xs.push(o.readShort(l, a)), a += 2);
        }
        for (h.ys = [], d = 0; d < m; d++)
          E = (4 & h.flags[d]) != 0, y = (32 & h.flags[d]) != 0, E ? (h.ys.push(y ? l[a] : -l[a]), a++) : y ? h.ys.push(0) : (h.ys.push(o.readShort(l, a)), a += 2);
        var I = 0, Q = 0;
        for (d = 0; d < m; d++) I += h.xs[d], Q += h.ys[d], h.xs[d] = I, h.ys[d] = Q;
      } else {
        var _;
        h.parts = [];
        do {
          _ = o.readUshort(l, a), a += 2;
          var x = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (h.parts.push(x), x.glyphIndex = o.readUshort(l, a), a += 2, 1 & _) {
            var F = o.readShort(l, a);
            a += 2;
            var T = o.readShort(l, a);
            a += 2;
          } else
            F = o.readInt8(l, a), a++, T = o.readInt8(l, a), a++;
          2 & _ ? (x.m.tx = F, x.m.ty = T) : (x.p1 = F, x.p2 = T), 8 & _ ? (x.m.a = x.m.d = o.readF2dot14(l, a), a += 2) : 64 & _ ? (x.m.a = o.readF2dot14(l, a), a += 2, x.m.d = o.readF2dot14(l, a), a += 2) : 128 & _ && (x.m.a = o.readF2dot14(l, a), a += 2, x.m.b = o.readF2dot14(l, a), a += 2, x.m.c = o.readF2dot14(l, a), a += 2, x.m.d = o.readF2dot14(l, a), a += 2);
        } while (32 & _);
        if (256 & _) {
          var L = o.readUshort(l, a);
          for (a += 2, h.instr = [], d = 0; d < L; d++) h.instr.push(l[a]), a++;
        }
      }
      return h;
    }, n.GPOS = {}, n.GPOS.parse = function(i, t, o, l) {
      return n._lctf.parse(i, t, o, l, n.GPOS.subt);
    }, n.GPOS.subt = function(i, t, o, l) {
      var a = n._bin, h = o, d = {};
      if (d.fmt = a.readUshort(i, o), o += 2, t == 1 || t == 2 || t == 3 || t == 7 || t == 8 && d.fmt <= 2) {
        var f = a.readUshort(i, o);
        o += 2, d.coverage = n._lctf.readCoverage(i, f + h);
      }
      if (t == 1 && d.fmt == 1) {
        var m = a.readUshort(i, o);
        o += 2;
        var v = n._lctf.numOfOnes(m);
        m != 0 && (d.pos = n.GPOS.readValueRecord(i, o, m));
      } else if (t == 2 && d.fmt >= 1 && d.fmt <= 2) {
        m = a.readUshort(i, o), o += 2;
        var b = a.readUshort(i, o);
        o += 2, v = n._lctf.numOfOnes(m);
        var C = n._lctf.numOfOnes(b);
        if (d.fmt == 1) {
          d.pairsets = [];
          var E = a.readUshort(i, o);
          o += 2;
          for (var y = 0; y < E; y++) {
            var I = h + a.readUshort(i, o);
            o += 2;
            var Q = a.readUshort(i, I);
            I += 2;
            for (var _ = [], x = 0; x < Q; x++) {
              var F = a.readUshort(i, I);
              I += 2, m != 0 && (M = n.GPOS.readValueRecord(i, I, m), I += 2 * v), b != 0 && (Z = n.GPOS.readValueRecord(i, I, b), I += 2 * C), _.push({ gid2: F, val1: M, val2: Z });
            }
            d.pairsets.push(_);
          }
        }
        if (d.fmt == 2) {
          var T = a.readUshort(i, o);
          o += 2;
          var L = a.readUshort(i, o);
          o += 2;
          var W = a.readUshort(i, o);
          o += 2;
          var J = a.readUshort(i, o);
          for (o += 2, d.classDef1 = n._lctf.readClassDef(i, h + T), d.classDef2 = n._lctf.readClassDef(i, h + L), d.matrix = [], y = 0; y < W; y++) {
            var ie = [];
            for (x = 0; x < J; x++) {
              var M = null, Z = null;
              m != 0 && (M = n.GPOS.readValueRecord(i, o, m), o += 2 * v), b != 0 && (Z = n.GPOS.readValueRecord(i, o, b), o += 2 * C), ie.push({ val1: M, val2: Z });
            }
            d.matrix.push(ie);
          }
        }
      } else {
        if (t == 9 && d.fmt == 1) {
          var Y = a.readUshort(i, o);
          o += 2;
          var oe = a.readUint(i, o);
          if (o += 4, l.ltype == 9) l.ltype = Y;
          else if (l.ltype != Y) throw "invalid extension substitution";
          return n.GPOS.subt(i, l.ltype, h + oe);
        }
        console.debug("unsupported GPOS table LookupType", t, "format", d.fmt);
      }
      return d;
    }, n.GPOS.readValueRecord = function(i, t, o) {
      var l = n._bin, a = [];
      return a.push(1 & o ? l.readShort(i, t) : 0), t += 1 & o ? 2 : 0, a.push(2 & o ? l.readShort(i, t) : 0), t += 2 & o ? 2 : 0, a.push(4 & o ? l.readShort(i, t) : 0), t += 4 & o ? 2 : 0, a.push(8 & o ? l.readShort(i, t) : 0), t += 8 & o ? 2 : 0, a;
    }, n.GSUB = {}, n.GSUB.parse = function(i, t, o, l) {
      return n._lctf.parse(i, t, o, l, n.GSUB.subt);
    }, n.GSUB.subt = function(i, t, o, l) {
      var a = n._bin, h = o, d = {};
      if (d.fmt = a.readUshort(i, o), o += 2, t != 1 && t != 4 && t != 5 && t != 6) return null;
      if (t == 1 || t == 4 || t == 5 && d.fmt <= 2 || t == 6 && d.fmt <= 2) {
        var f = a.readUshort(i, o);
        o += 2, d.coverage = n._lctf.readCoverage(i, h + f);
      }
      if (t == 1 && d.fmt >= 1 && d.fmt <= 2) {
        if (d.fmt == 1) d.delta = a.readShort(i, o), o += 2;
        else if (d.fmt == 2) {
          var m = a.readUshort(i, o);
          o += 2, d.newg = a.readUshorts(i, o, m), o += 2 * d.newg.length;
        }
      } else if (t == 4) {
        d.vals = [], m = a.readUshort(i, o), o += 2;
        for (var v = 0; v < m; v++) {
          var b = a.readUshort(i, o);
          o += 2, d.vals.push(n.GSUB.readLigatureSet(i, h + b));
        }
      } else if (t == 5 && d.fmt == 2) {
        if (d.fmt == 2) {
          var C = a.readUshort(i, o);
          o += 2, d.cDef = n._lctf.readClassDef(i, h + C), d.scset = [];
          var E = a.readUshort(i, o);
          for (o += 2, v = 0; v < E; v++) {
            var y = a.readUshort(i, o);
            o += 2, d.scset.push(y == 0 ? null : n.GSUB.readSubClassSet(i, h + y));
          }
        }
      } else if (t == 6 && d.fmt == 3) {
        if (d.fmt == 3) {
          for (v = 0; v < 3; v++) {
            m = a.readUshort(i, o), o += 2;
            for (var I = [], Q = 0; Q < m; Q++) I.push(n._lctf.readCoverage(i, h + a.readUshort(i, o + 2 * Q)));
            o += 2 * m, v == 0 && (d.backCvg = I), v == 1 && (d.inptCvg = I), v == 2 && (d.ahedCvg = I);
          }
          m = a.readUshort(i, o), o += 2, d.lookupRec = n.GSUB.readSubstLookupRecords(i, o, m);
        }
      } else {
        if (t == 7 && d.fmt == 1) {
          var _ = a.readUshort(i, o);
          o += 2;
          var x = a.readUint(i, o);
          if (o += 4, l.ltype == 9) l.ltype = _;
          else if (l.ltype != _) throw "invalid extension substitution";
          return n.GSUB.subt(i, l.ltype, h + x);
        }
        console.debug("unsupported GSUB table LookupType", t, "format", d.fmt);
      }
      return d;
    }, n.GSUB.readSubClassSet = function(i, t) {
      var o = n._bin.readUshort, l = t, a = [], h = o(i, t);
      t += 2;
      for (var d = 0; d < h; d++) {
        var f = o(i, t);
        t += 2, a.push(n.GSUB.readSubClassRule(i, l + f));
      }
      return a;
    }, n.GSUB.readSubClassRule = function(i, t) {
      var o = n._bin.readUshort, l = {}, a = o(i, t), h = o(i, t += 2);
      t += 2, l.input = [];
      for (var d = 0; d < a - 1; d++) l.input.push(o(i, t)), t += 2;
      return l.substLookupRecords = n.GSUB.readSubstLookupRecords(i, t, h), l;
    }, n.GSUB.readSubstLookupRecords = function(i, t, o) {
      for (var l = n._bin.readUshort, a = [], h = 0; h < o; h++) a.push(l(i, t), l(i, t + 2)), t += 4;
      return a;
    }, n.GSUB.readChainSubClassSet = function(i, t) {
      var o = n._bin, l = t, a = [], h = o.readUshort(i, t);
      t += 2;
      for (var d = 0; d < h; d++) {
        var f = o.readUshort(i, t);
        t += 2, a.push(n.GSUB.readChainSubClassRule(i, l + f));
      }
      return a;
    }, n.GSUB.readChainSubClassRule = function(i, t) {
      for (var o = n._bin, l = {}, a = ["backtrack", "input", "lookahead"], h = 0; h < a.length; h++) {
        var d = o.readUshort(i, t);
        t += 2, h == 1 && d--, l[a[h]] = o.readUshorts(i, t, d), t += 2 * l[a[h]].length;
      }
      return d = o.readUshort(i, t), t += 2, l.subst = o.readUshorts(i, t, 2 * d), t += 2 * l.subst.length, l;
    }, n.GSUB.readLigatureSet = function(i, t) {
      var o = n._bin, l = t, a = [], h = o.readUshort(i, t);
      t += 2;
      for (var d = 0; d < h; d++) {
        var f = o.readUshort(i, t);
        t += 2, a.push(n.GSUB.readLigature(i, l + f));
      }
      return a;
    }, n.GSUB.readLigature = function(i, t) {
      var o = n._bin, l = { chain: [] };
      l.nglyph = o.readUshort(i, t), t += 2;
      var a = o.readUshort(i, t);
      t += 2;
      for (var h = 0; h < a - 1; h++) l.chain.push(o.readUshort(i, t)), t += 2;
      return l;
    }, n.head = {}, n.head.parse = function(i, t, o) {
      var l = n._bin, a = {};
      return l.readFixed(i, t), t += 4, a.fontRevision = l.readFixed(i, t), t += 4, l.readUint(i, t), t += 4, l.readUint(i, t), t += 4, a.flags = l.readUshort(i, t), t += 2, a.unitsPerEm = l.readUshort(i, t), t += 2, a.created = l.readUint64(i, t), t += 8, a.modified = l.readUint64(i, t), t += 8, a.xMin = l.readShort(i, t), t += 2, a.yMin = l.readShort(i, t), t += 2, a.xMax = l.readShort(i, t), t += 2, a.yMax = l.readShort(i, t), t += 2, a.macStyle = l.readUshort(i, t), t += 2, a.lowestRecPPEM = l.readUshort(i, t), t += 2, a.fontDirectionHint = l.readShort(i, t), t += 2, a.indexToLocFormat = l.readShort(i, t), t += 2, a.glyphDataFormat = l.readShort(i, t), t += 2, a;
    }, n.hhea = {}, n.hhea.parse = function(i, t, o) {
      var l = n._bin, a = {};
      return l.readFixed(i, t), t += 4, a.ascender = l.readShort(i, t), t += 2, a.descender = l.readShort(i, t), t += 2, a.lineGap = l.readShort(i, t), t += 2, a.advanceWidthMax = l.readUshort(i, t), t += 2, a.minLeftSideBearing = l.readShort(i, t), t += 2, a.minRightSideBearing = l.readShort(i, t), t += 2, a.xMaxExtent = l.readShort(i, t), t += 2, a.caretSlopeRise = l.readShort(i, t), t += 2, a.caretSlopeRun = l.readShort(i, t), t += 2, a.caretOffset = l.readShort(i, t), t += 2, t += 8, a.metricDataFormat = l.readShort(i, t), t += 2, a.numberOfHMetrics = l.readUshort(i, t), t += 2, a;
    }, n.hmtx = {}, n.hmtx.parse = function(i, t, o, l) {
      for (var a = n._bin, h = { aWidth: [], lsBearing: [] }, d = 0, f = 0, m = 0; m < l.maxp.numGlyphs; m++) m < l.hhea.numberOfHMetrics && (d = a.readUshort(i, t), t += 2, f = a.readShort(i, t), t += 2), h.aWidth.push(d), h.lsBearing.push(f);
      return h;
    }, n.kern = {}, n.kern.parse = function(i, t, o, l) {
      var a = n._bin, h = a.readUshort(i, t);
      if (t += 2, h == 1) return n.kern.parseV1(i, t - 2, o, l);
      var d = a.readUshort(i, t);
      t += 2;
      for (var f = { glyph1: [], rval: [] }, m = 0; m < d; m++) {
        t += 2, o = a.readUshort(i, t), t += 2;
        var v = a.readUshort(i, t);
        t += 2;
        var b = v >>> 8;
        if ((b &= 15) != 0) throw "unknown kern table format: " + b;
        t = n.kern.readFormat0(i, t, f);
      }
      return f;
    }, n.kern.parseV1 = function(i, t, o, l) {
      var a = n._bin;
      a.readFixed(i, t), t += 4;
      var h = a.readUint(i, t);
      t += 4;
      for (var d = { glyph1: [], rval: [] }, f = 0; f < h; f++) {
        a.readUint(i, t), t += 4;
        var m = a.readUshort(i, t);
        t += 2, a.readUshort(i, t), t += 2;
        var v = m >>> 8;
        if ((v &= 15) != 0) throw "unknown kern table format: " + v;
        t = n.kern.readFormat0(i, t, d);
      }
      return d;
    }, n.kern.readFormat0 = function(i, t, o) {
      var l = n._bin, a = -1, h = l.readUshort(i, t);
      t += 2, l.readUshort(i, t), t += 2, l.readUshort(i, t), t += 2, l.readUshort(i, t), t += 2;
      for (var d = 0; d < h; d++) {
        var f = l.readUshort(i, t);
        t += 2;
        var m = l.readUshort(i, t);
        t += 2;
        var v = l.readShort(i, t);
        t += 2, f != a && (o.glyph1.push(f), o.rval.push({ glyph2: [], vals: [] }));
        var b = o.rval[o.rval.length - 1];
        b.glyph2.push(m), b.vals.push(v), a = f;
      }
      return t;
    }, n.loca = {}, n.loca.parse = function(i, t, o, l) {
      var a = n._bin, h = [], d = l.head.indexToLocFormat, f = l.maxp.numGlyphs + 1;
      if (d == 0) for (var m = 0; m < f; m++) h.push(a.readUshort(i, t + (m << 1)) << 1);
      if (d == 1) for (m = 0; m < f; m++) h.push(a.readUint(i, t + (m << 2)));
      return h;
    }, n.maxp = {}, n.maxp.parse = function(i, t, o) {
      var l = n._bin, a = {}, h = l.readUint(i, t);
      return t += 4, a.numGlyphs = l.readUshort(i, t), t += 2, h == 65536 && (a.maxPoints = l.readUshort(i, t), t += 2, a.maxContours = l.readUshort(i, t), t += 2, a.maxCompositePoints = l.readUshort(i, t), t += 2, a.maxCompositeContours = l.readUshort(i, t), t += 2, a.maxZones = l.readUshort(i, t), t += 2, a.maxTwilightPoints = l.readUshort(i, t), t += 2, a.maxStorage = l.readUshort(i, t), t += 2, a.maxFunctionDefs = l.readUshort(i, t), t += 2, a.maxInstructionDefs = l.readUshort(i, t), t += 2, a.maxStackElements = l.readUshort(i, t), t += 2, a.maxSizeOfInstructions = l.readUshort(i, t), t += 2, a.maxComponentElements = l.readUshort(i, t), t += 2, a.maxComponentDepth = l.readUshort(i, t), t += 2), a;
    }, n.name = {}, n.name.parse = function(i, t, o) {
      var l = n._bin, a = {};
      l.readUshort(i, t), t += 2;
      var h = l.readUshort(i, t);
      t += 2, l.readUshort(i, t);
      for (var d, f = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], m = t += 2, v = 0; v < h; v++) {
        var b = l.readUshort(i, t);
        t += 2;
        var C = l.readUshort(i, t);
        t += 2;
        var E = l.readUshort(i, t);
        t += 2;
        var y = l.readUshort(i, t);
        t += 2;
        var I = l.readUshort(i, t);
        t += 2;
        var Q = l.readUshort(i, t);
        t += 2;
        var _, x = f[y], F = m + 12 * h + Q;
        if (b == 0) _ = l.readUnicode(i, F, I / 2);
        else if (b == 3 && C == 0) _ = l.readUnicode(i, F, I / 2);
        else if (C == 0) _ = l.readASCII(i, F, I);
        else if (C == 1) _ = l.readUnicode(i, F, I / 2);
        else if (C == 3) _ = l.readUnicode(i, F, I / 2);
        else {
          if (b != 1) throw "unknown encoding " + C + ", platformID: " + b;
          _ = l.readASCII(i, F, I), console.debug("reading unknown MAC encoding " + C + " as ASCII");
        }
        var T = "p" + b + "," + E.toString(16);
        a[T] == null && (a[T] = {}), a[T][x !== void 0 ? x : y] = _, a[T]._lang = E;
      }
      for (var L in a) if (a[L].postScriptName != null && a[L]._lang == 1033) return a[L];
      for (var L in a) if (a[L].postScriptName != null && a[L]._lang == 0) return a[L];
      for (var L in a) if (a[L].postScriptName != null && a[L]._lang == 3084) return a[L];
      for (var L in a) if (a[L].postScriptName != null) return a[L];
      for (var L in a) {
        d = L;
        break;
      }
      return console.debug("returning name table with languageID " + a[d]._lang), a[d];
    }, n["OS/2"] = {}, n["OS/2"].parse = function(i, t, o) {
      var l = n._bin.readUshort(i, t);
      t += 2;
      var a = {};
      if (l == 0) n["OS/2"].version0(i, t, a);
      else if (l == 1) n["OS/2"].version1(i, t, a);
      else if (l == 2 || l == 3 || l == 4) n["OS/2"].version2(i, t, a);
      else {
        if (l != 5) throw "unknown OS/2 table version: " + l;
        n["OS/2"].version5(i, t, a);
      }
      return a;
    }, n["OS/2"].version0 = function(i, t, o) {
      var l = n._bin;
      return o.xAvgCharWidth = l.readShort(i, t), t += 2, o.usWeightClass = l.readUshort(i, t), t += 2, o.usWidthClass = l.readUshort(i, t), t += 2, o.fsType = l.readUshort(i, t), t += 2, o.ySubscriptXSize = l.readShort(i, t), t += 2, o.ySubscriptYSize = l.readShort(i, t), t += 2, o.ySubscriptXOffset = l.readShort(i, t), t += 2, o.ySubscriptYOffset = l.readShort(i, t), t += 2, o.ySuperscriptXSize = l.readShort(i, t), t += 2, o.ySuperscriptYSize = l.readShort(i, t), t += 2, o.ySuperscriptXOffset = l.readShort(i, t), t += 2, o.ySuperscriptYOffset = l.readShort(i, t), t += 2, o.yStrikeoutSize = l.readShort(i, t), t += 2, o.yStrikeoutPosition = l.readShort(i, t), t += 2, o.sFamilyClass = l.readShort(i, t), t += 2, o.panose = l.readBytes(i, t, 10), t += 10, o.ulUnicodeRange1 = l.readUint(i, t), t += 4, o.ulUnicodeRange2 = l.readUint(i, t), t += 4, o.ulUnicodeRange3 = l.readUint(i, t), t += 4, o.ulUnicodeRange4 = l.readUint(i, t), t += 4, o.achVendID = [l.readInt8(i, t), l.readInt8(i, t + 1), l.readInt8(i, t + 2), l.readInt8(i, t + 3)], t += 4, o.fsSelection = l.readUshort(i, t), t += 2, o.usFirstCharIndex = l.readUshort(i, t), t += 2, o.usLastCharIndex = l.readUshort(i, t), t += 2, o.sTypoAscender = l.readShort(i, t), t += 2, o.sTypoDescender = l.readShort(i, t), t += 2, o.sTypoLineGap = l.readShort(i, t), t += 2, o.usWinAscent = l.readUshort(i, t), t += 2, o.usWinDescent = l.readUshort(i, t), t += 2;
    }, n["OS/2"].version1 = function(i, t, o) {
      var l = n._bin;
      return t = n["OS/2"].version0(i, t, o), o.ulCodePageRange1 = l.readUint(i, t), t += 4, o.ulCodePageRange2 = l.readUint(i, t), t += 4;
    }, n["OS/2"].version2 = function(i, t, o) {
      var l = n._bin;
      return t = n["OS/2"].version1(i, t, o), o.sxHeight = l.readShort(i, t), t += 2, o.sCapHeight = l.readShort(i, t), t += 2, o.usDefault = l.readUshort(i, t), t += 2, o.usBreak = l.readUshort(i, t), t += 2, o.usMaxContext = l.readUshort(i, t), t += 2;
    }, n["OS/2"].version5 = function(i, t, o) {
      var l = n._bin;
      return t = n["OS/2"].version2(i, t, o), o.usLowerOpticalPointSize = l.readUshort(i, t), t += 2, o.usUpperOpticalPointSize = l.readUshort(i, t), t += 2;
    }, n.post = {}, n.post.parse = function(i, t, o) {
      var l = n._bin, a = {};
      return a.version = l.readFixed(i, t), t += 4, a.italicAngle = l.readFixed(i, t), t += 4, a.underlinePosition = l.readShort(i, t), t += 2, a.underlineThickness = l.readShort(i, t), t += 2, a;
    }, n == null && (n = {}), n.U == null && (n.U = {}), n.U.codeToGlyph = function(i, t) {
      var o = i.cmap, l = -1;
      if (o.p0e4 != null ? l = o.p0e4 : o.p3e1 != null ? l = o.p3e1 : o.p1e0 != null ? l = o.p1e0 : o.p0e3 != null && (l = o.p0e3), l == -1) throw "no familiar platform and encoding!";
      var a = o.tables[l];
      if (a.format == 0) return t >= a.map.length ? 0 : a.map[t];
      if (a.format == 4) {
        for (var h = -1, d = 0; d < a.endCount.length; d++) if (t <= a.endCount[d]) {
          h = d;
          break;
        }
        return h == -1 || a.startCount[h] > t ? 0 : 65535 & (a.idRangeOffset[h] != 0 ? a.glyphIdArray[t - a.startCount[h] + (a.idRangeOffset[h] >> 1) - (a.idRangeOffset.length - h)] : t + a.idDelta[h]);
      }
      if (a.format == 12) {
        if (t > a.groups[a.groups.length - 1][1]) return 0;
        for (d = 0; d < a.groups.length; d++) {
          var f = a.groups[d];
          if (f[0] <= t && t <= f[1]) return f[2] + (t - f[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + a.format;
    }, n.U.glyphToPath = function(i, t) {
      var o = { cmds: [], crds: [] };
      if (i.SVG && i.SVG.entries[t]) {
        var l = i.SVG.entries[t];
        return l == null ? o : (typeof l == "string" && (l = n.SVG.toPath(l), i.SVG.entries[t] = l), l);
      }
      if (i.CFF) {
        var a = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: !1, width: i.CFF.Private ? i.CFF.Private.defaultWidthX : 0, open: !1 }, h = i.CFF, d = i.CFF.Private;
        if (h.ROS) {
          for (var f = 0; h.FDSelect[f + 2] <= t; ) f += 2;
          d = h.FDArray[h.FDSelect[f + 1]].Private;
        }
        n.U._drawCFF(i.CFF.CharStrings[t], a, h, d, o);
      } else i.glyf && n.U._drawGlyf(t, i, o);
      return o;
    }, n.U._drawGlyf = function(i, t, o) {
      var l = t.glyf[i];
      l == null && (l = t.glyf[i] = n.glyf._parseGlyf(t, i)), l != null && (l.noc > -1 ? n.U._simpleGlyph(l, o) : n.U._compoGlyph(l, t, o));
    }, n.U._simpleGlyph = function(i, t) {
      for (var o = 0; o < i.noc; o++) {
        for (var l = o == 0 ? 0 : i.endPts[o - 1] + 1, a = i.endPts[o], h = l; h <= a; h++) {
          var d = h == l ? a : h - 1, f = h == a ? l : h + 1, m = 1 & i.flags[h], v = 1 & i.flags[d], b = 1 & i.flags[f], C = i.xs[h], E = i.ys[h];
          if (h == l) if (m) {
            if (!v) {
              n.U.P.moveTo(t, C, E);
              continue;
            }
            n.U.P.moveTo(t, i.xs[d], i.ys[d]);
          } else v ? n.U.P.moveTo(t, i.xs[d], i.ys[d]) : n.U.P.moveTo(t, (i.xs[d] + C) / 2, (i.ys[d] + E) / 2);
          m ? v && n.U.P.lineTo(t, C, E) : b ? n.U.P.qcurveTo(t, C, E, i.xs[f], i.ys[f]) : n.U.P.qcurveTo(t, C, E, (C + i.xs[f]) / 2, (E + i.ys[f]) / 2);
        }
        n.U.P.closePath(t);
      }
    }, n.U._compoGlyph = function(i, t, o) {
      for (var l = 0; l < i.parts.length; l++) {
        var a = { cmds: [], crds: [] }, h = i.parts[l];
        n.U._drawGlyf(h.glyphIndex, t, a);
        for (var d = h.m, f = 0; f < a.crds.length; f += 2) {
          var m = a.crds[f], v = a.crds[f + 1];
          o.crds.push(m * d.a + v * d.b + d.tx), o.crds.push(m * d.c + v * d.d + d.ty);
        }
        for (f = 0; f < a.cmds.length; f++) o.cmds.push(a.cmds[f]);
      }
    }, n.U._getGlyphClass = function(i, t) {
      var o = n._lctf.getInterval(t, i);
      return o == -1 ? 0 : t[o + 2];
    }, n.U.getPairAdjustment = function(i, t, o) {
      var l = !1;
      if (i.GPOS) for (var a = i.GPOS, h = a.lookupList, d = a.featureList, f = [], m = 0; m < d.length; m++) {
        var v = d[m];
        if (v.tag == "kern") {
          l = !0;
          for (var b = 0; b < v.tab.length; b++) if (!f[v.tab[b]]) {
            f[v.tab[b]] = !0;
            for (var C = h[v.tab[b]], E = 0; E < C.tabs.length; E++) if (C.tabs[E] != null) {
              var y, I = C.tabs[E];
              if ((!I.coverage || (y = n._lctf.coverageIndex(I.coverage, t)) != -1) && C.ltype != 1) {
                if (C.ltype == 2) {
                  var Q = null;
                  if (I.fmt == 1) {
                    var _ = I.pairsets[y];
                    for (m = 0; m < _.length; m++) _[m].gid2 == o && (Q = _[m]);
                  } else if (I.fmt == 2) {
                    var x = n.U._getGlyphClass(t, I.classDef1), F = n.U._getGlyphClass(o, I.classDef2);
                    Q = I.matrix[x][F];
                  }
                  if (Q) {
                    var T = 0;
                    return Q.val1 && Q.val1[2] && (T += Q.val1[2]), Q.val2 && Q.val2[0] && (T += Q.val2[0]), T;
                  }
                }
              }
            }
          }
        }
      }
      if (i.kern && !l) {
        var L = i.kern.glyph1.indexOf(t);
        if (L != -1) {
          var W = i.kern.rval[L].glyph2.indexOf(o);
          if (W != -1) return i.kern.rval[L].vals[W];
        }
      }
      return 0;
    }, n.U._applySubs = function(i, t, o, l) {
      for (var a = i.length - t - 1, h = 0; h < o.tabs.length; h++) if (o.tabs[h] != null) {
        var d, f = o.tabs[h];
        if (!f.coverage || (d = n._lctf.coverageIndex(f.coverage, i[t])) != -1) {
          if (o.ltype == 1) i[t], f.fmt == 1 ? i[t] = i[t] + f.delta : i[t] = f.newg[d];
          else if (o.ltype == 4) for (var m = f.vals[d], v = 0; v < m.length; v++) {
            var b = m[v], C = b.chain.length;
            if (!(C > a)) {
              for (var E = !0, y = 0, I = 0; I < C; I++) {
                for (; i[t + y + (1 + I)] == -1; ) y++;
                b.chain[I] != i[t + y + (1 + I)] && (E = !1);
              }
              if (E) {
                for (i[t] = b.nglyph, I = 0; I < C + y; I++) i[t + I + 1] = -1;
                break;
              }
            }
          }
          else if (o.ltype == 5 && f.fmt == 2) for (var Q = n._lctf.getInterval(f.cDef, i[t]), _ = f.cDef[Q + 2], x = f.scset[_], F = 0; F < x.length; F++) {
            var T = x[F], L = T.input;
            if (!(L.length > a)) {
              for (E = !0, I = 0; I < L.length; I++) {
                var W = n._lctf.getInterval(f.cDef, i[t + 1 + I]);
                if (Q == -1 && f.cDef[W + 2] != L[I]) {
                  E = !1;
                  break;
                }
              }
              if (E) {
                var J = T.substLookupRecords;
                for (v = 0; v < J.length; v += 2) J[v], J[v + 1];
              }
            }
          }
          else if (o.ltype == 6 && f.fmt == 3) {
            if (!n.U._glsCovered(i, f.backCvg, t - f.backCvg.length) || !n.U._glsCovered(i, f.inptCvg, t) || !n.U._glsCovered(i, f.ahedCvg, t + f.inptCvg.length)) continue;
            var ie = f.lookupRec;
            for (F = 0; F < ie.length; F += 2) {
              Q = ie[F];
              var M = l[ie[F + 1]];
              n.U._applySubs(i, t + Q, M, l);
            }
          }
        }
      }
    }, n.U._glsCovered = function(i, t, o) {
      for (var l = 0; l < t.length; l++)
        if (n._lctf.coverageIndex(t[l], i[o + l]) == -1) return !1;
      return !0;
    }, n.U.glyphsToPath = function(i, t, o) {
      for (var l = { cmds: [], crds: [] }, a = 0, h = 0; h < t.length; h++) {
        var d = t[h];
        if (d != -1) {
          for (var f = h < t.length - 1 && t[h + 1] != -1 ? t[h + 1] : 0, m = n.U.glyphToPath(i, d), v = 0; v < m.crds.length; v += 2) l.crds.push(m.crds[v] + a), l.crds.push(m.crds[v + 1]);
          for (o && l.cmds.push(o), v = 0; v < m.cmds.length; v++) l.cmds.push(m.cmds[v]);
          o && l.cmds.push("X"), a += i.hmtx.aWidth[d], h < t.length - 1 && (a += n.U.getPairAdjustment(i, d, f));
        }
      }
      return l;
    }, n.U.P = {}, n.U.P.moveTo = function(i, t, o) {
      i.cmds.push("M"), i.crds.push(t, o);
    }, n.U.P.lineTo = function(i, t, o) {
      i.cmds.push("L"), i.crds.push(t, o);
    }, n.U.P.curveTo = function(i, t, o, l, a, h, d) {
      i.cmds.push("C"), i.crds.push(t, o, l, a, h, d);
    }, n.U.P.qcurveTo = function(i, t, o, l, a) {
      i.cmds.push("Q"), i.crds.push(t, o, l, a);
    }, n.U.P.closePath = function(i) {
      i.cmds.push("Z");
    }, n.U._drawCFF = function(i, t, o, l, a) {
      for (var h = t.stack, d = t.nStems, f = t.haveWidth, m = t.width, v = t.open, b = 0, C = t.x, E = t.y, y = 0, I = 0, Q = 0, _ = 0, x = 0, F = 0, T = 0, L = 0, W = 0, J = 0, ie = { val: 0, size: 0 }; b < i.length; ) {
        n.CFF.getCharString(i, b, ie);
        var M = ie.val;
        if (b += ie.size, M == "o1" || M == "o18") h.length % 2 != 0 && !f && (m = h.shift() + l.nominalWidthX), d += h.length >> 1, h.length = 0, f = !0;
        else if (M == "o3" || M == "o23")
          h.length % 2 != 0 && !f && (m = h.shift() + l.nominalWidthX), d += h.length >> 1, h.length = 0, f = !0;
        else if (M == "o4") h.length > 1 && !f && (m = h.shift() + l.nominalWidthX, f = !0), v && n.U.P.closePath(a), E += h.pop(), n.U.P.moveTo(a, C, E), v = !0;
        else if (M == "o5") for (; h.length > 0; ) C += h.shift(), E += h.shift(), n.U.P.lineTo(a, C, E);
        else if (M == "o6" || M == "o7") for (var Z = h.length, Y = M == "o6", oe = 0; oe < Z; oe++) {
          var ae = h.shift();
          Y ? C += ae : E += ae, Y = !Y, n.U.P.lineTo(a, C, E);
        }
        else if (M == "o8" || M == "o24") {
          Z = h.length;
          for (var H = 0; H + 6 <= Z; ) y = C + h.shift(), I = E + h.shift(), Q = y + h.shift(), _ = I + h.shift(), C = Q + h.shift(), E = _ + h.shift(), n.U.P.curveTo(a, y, I, Q, _, C, E), H += 6;
          M == "o24" && (C += h.shift(), E += h.shift(), n.U.P.lineTo(a, C, E));
        } else {
          if (M == "o11") break;
          if (M == "o1234" || M == "o1235" || M == "o1236" || M == "o1237") M == "o1234" && (I = E, Q = (y = C + h.shift()) + h.shift(), J = _ = I + h.shift(), F = _, L = E, C = (T = (x = (W = Q + h.shift()) + h.shift()) + h.shift()) + h.shift(), n.U.P.curveTo(a, y, I, Q, _, W, J), n.U.P.curveTo(a, x, F, T, L, C, E)), M == "o1235" && (y = C + h.shift(), I = E + h.shift(), Q = y + h.shift(), _ = I + h.shift(), W = Q + h.shift(), J = _ + h.shift(), x = W + h.shift(), F = J + h.shift(), T = x + h.shift(), L = F + h.shift(), C = T + h.shift(), E = L + h.shift(), h.shift(), n.U.P.curveTo(a, y, I, Q, _, W, J), n.U.P.curveTo(a, x, F, T, L, C, E)), M == "o1236" && (y = C + h.shift(), I = E + h.shift(), Q = y + h.shift(), J = _ = I + h.shift(), F = _, T = (x = (W = Q + h.shift()) + h.shift()) + h.shift(), L = F + h.shift(), C = T + h.shift(), n.U.P.curveTo(a, y, I, Q, _, W, J), n.U.P.curveTo(a, x, F, T, L, C, E)), M == "o1237" && (y = C + h.shift(), I = E + h.shift(), Q = y + h.shift(), _ = I + h.shift(), W = Q + h.shift(), J = _ + h.shift(), x = W + h.shift(), F = J + h.shift(), T = x + h.shift(), L = F + h.shift(), Math.abs(T - C) > Math.abs(L - E) ? C = T + h.shift() : E = L + h.shift(), n.U.P.curveTo(a, y, I, Q, _, W, J), n.U.P.curveTo(a, x, F, T, L, C, E));
          else if (M == "o14") {
            if (h.length > 0 && !f && (m = h.shift() + o.nominalWidthX, f = !0), h.length == 4) {
              var j = h.shift(), V = h.shift(), re = h.shift(), S = h.shift(), N = n.CFF.glyphBySE(o, re), P = n.CFF.glyphBySE(o, S);
              n.U._drawCFF(o.CharStrings[N], t, o, l, a), t.x = j, t.y = V, n.U._drawCFF(o.CharStrings[P], t, o, l, a);
            }
            v && (n.U.P.closePath(a), v = !1);
          } else if (M == "o19" || M == "o20")
            h.length % 2 != 0 && !f && (m = h.shift() + l.nominalWidthX), d += h.length >> 1, h.length = 0, f = !0, b += d + 7 >> 3;
          else if (M == "o21") h.length > 2 && !f && (m = h.shift() + l.nominalWidthX, f = !0), E += h.pop(), C += h.pop(), v && n.U.P.closePath(a), n.U.P.moveTo(a, C, E), v = !0;
          else if (M == "o22") h.length > 1 && !f && (m = h.shift() + l.nominalWidthX, f = !0), C += h.pop(), v && n.U.P.closePath(a), n.U.P.moveTo(a, C, E), v = !0;
          else if (M == "o25") {
            for (; h.length > 6; ) C += h.shift(), E += h.shift(), n.U.P.lineTo(a, C, E);
            y = C + h.shift(), I = E + h.shift(), Q = y + h.shift(), _ = I + h.shift(), C = Q + h.shift(), E = _ + h.shift(), n.U.P.curveTo(a, y, I, Q, _, C, E);
          } else if (M == "o26") for (h.length % 2 && (C += h.shift()); h.length > 0; ) y = C, I = E + h.shift(), C = Q = y + h.shift(), E = (_ = I + h.shift()) + h.shift(), n.U.P.curveTo(a, y, I, Q, _, C, E);
          else if (M == "o27") for (h.length % 2 && (E += h.shift()); h.length > 0; ) I = E, Q = (y = C + h.shift()) + h.shift(), _ = I + h.shift(), C = Q + h.shift(), E = _, n.U.P.curveTo(a, y, I, Q, _, C, E);
          else if (M == "o10" || M == "o29") {
            var O = M == "o10" ? l : o;
            if (h.length == 0) console.debug("error: empty stack");
            else {
              var G = h.pop(), K = O.Subrs[G + O.Bias];
              t.x = C, t.y = E, t.nStems = d, t.haveWidth = f, t.width = m, t.open = v, n.U._drawCFF(K, t, o, l, a), C = t.x, E = t.y, d = t.nStems, f = t.haveWidth, m = t.width, v = t.open;
            }
          } else if (M == "o30" || M == "o31") {
            var q = h.length, z = (H = 0, M == "o31");
            for (H += q - (Z = -3 & q); H < Z; ) z ? (I = E, Q = (y = C + h.shift()) + h.shift(), E = (_ = I + h.shift()) + h.shift(), Z - H == 5 ? (C = Q + h.shift(), H++) : C = Q, z = !1) : (y = C, I = E + h.shift(), Q = y + h.shift(), _ = I + h.shift(), C = Q + h.shift(), Z - H == 5 ? (E = _ + h.shift(), H++) : E = _, z = !0), n.U.P.curveTo(a, y, I, Q, _, C, E), H += 4;
          } else {
            if ((M + "").charAt(0) == "o") throw console.debug("Unknown operation: " + M, i), M;
            h.push(M);
          }
        }
      }
      t.x = C, t.y = E, t.nStems = d, t.haveWidth = f, t.width = m, t.open = v;
    };
    var A = n, u = { Typr: A };
    return p.Typr = A, p.default = u, Object.defineProperty(p, "__esModule", { value: !0 }), p;
  }({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function Md() {
  return function(p) {
    var n = Uint8Array, A = Uint16Array, u = Uint32Array, i = new n([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), t = new n([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), o = new n([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), l = function(M, Z) {
      for (var Y = new A(31), oe = 0; oe < 31; ++oe) Y[oe] = Z += 1 << M[oe - 1];
      var ae = new u(Y[30]);
      for (oe = 1; oe < 30; ++oe) for (var H = Y[oe]; H < Y[oe + 1]; ++H) ae[H] = H - Y[oe] << 5 | oe;
      return [Y, ae];
    }, a = l(i, 2), h = a[0], d = a[1];
    h[28] = 258, d[258] = 28;
    for (var f = l(t, 0)[0], m = new A(32768), v = 0; v < 32768; ++v) {
      var b = (43690 & v) >>> 1 | (21845 & v) << 1;
      b = (61680 & (b = (52428 & b) >>> 2 | (13107 & b) << 2)) >>> 4 | (3855 & b) << 4, m[v] = ((65280 & b) >>> 8 | (255 & b) << 8) >>> 1;
    }
    var C = function(M, Z, Y) {
      for (var oe = M.length, ae = 0, H = new A(Z); ae < oe; ++ae) ++H[M[ae] - 1];
      var j, V = new A(Z);
      for (ae = 0; ae < Z; ++ae) V[ae] = V[ae - 1] + H[ae - 1] << 1;
      {
        j = new A(1 << Z);
        var re = 15 - Z;
        for (ae = 0; ae < oe; ++ae) if (M[ae]) for (var S = ae << 4 | M[ae], N = Z - M[ae], P = V[M[ae] - 1]++ << N, O = P | (1 << N) - 1; P <= O; ++P) j[m[P] >>> re] = S;
      }
      return j;
    }, E = new n(288);
    for (v = 0; v < 144; ++v) E[v] = 8;
    for (v = 144; v < 256; ++v) E[v] = 9;
    for (v = 256; v < 280; ++v) E[v] = 7;
    for (v = 280; v < 288; ++v) E[v] = 8;
    var y = new n(32);
    for (v = 0; v < 32; ++v) y[v] = 5;
    var I = C(E, 9), Q = C(y, 5), _ = function(M) {
      for (var Z = M[0], Y = 1; Y < M.length; ++Y) M[Y] > Z && (Z = M[Y]);
      return Z;
    }, x = function(M, Z, Y) {
      var oe = Z / 8 | 0;
      return (M[oe] | M[oe + 1] << 8) >> (7 & Z) & Y;
    }, F = function(M, Z) {
      var Y = Z / 8 | 0;
      return (M[Y] | M[Y + 1] << 8 | M[Y + 2] << 16) >> (7 & Z);
    }, T = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], L = function(M, Z, Y) {
      var oe = new Error(Z || T[M]);
      if (oe.code = M, Error.captureStackTrace && Error.captureStackTrace(oe, L), !Y) throw oe;
      return oe;
    }, W = function(M, Z, Y) {
      var oe = M.length;
      if (!oe || Y && !Y.l && oe < 5) return Z || new n(0);
      var ae = !Z || Y, H = !Y || Y.i;
      Y || (Y = {}), Z || (Z = new n(3 * oe));
      var j, V = function(U) {
        var le = Z.length;
        if (U > le) {
          var _e = new n(Math.max(2 * le, U));
          _e.set(Z), Z = _e;
        }
      }, re = Y.f || 0, S = Y.p || 0, N = Y.b || 0, P = Y.l, O = Y.d, G = Y.m, K = Y.n, q = 8 * oe;
      do {
        if (!P) {
          Y.f = re = x(M, S, 1);
          var z = x(M, S + 1, 3);
          if (S += 3, !z) {
            var ue = M[(me = ((j = S) / 8 | 0) + (7 & j && 1) + 4) - 4] | M[me - 3] << 8, ve = me + ue;
            if (ve > oe) {
              H && L(0);
              break;
            }
            ae && V(N + ue), Z.set(M.subarray(me, ve), N), Y.b = N += ue, Y.p = S = 8 * ve;
            continue;
          }
          if (z == 1) P = I, O = Q, G = 9, K = 5;
          else if (z == 2) {
            var te = x(M, S, 31) + 257, X = x(M, S + 10, 15) + 4, xe = te + x(M, S + 5, 31) + 1;
            S += 14;
            for (var De = new n(xe), he = new n(19), pe = 0; pe < X; ++pe) he[o[pe]] = x(M, S + 3 * pe, 7);
            S += 3 * X;
            var Qe = _(he), se = (1 << Qe) - 1, Ie = C(he, Qe);
            for (pe = 0; pe < xe; ) {
              var me, ee = Ie[x(M, S, se)];
              if (S += 15 & ee, (me = ee >>> 4) < 16) De[pe++] = me;
              else {
                var Be = 0, Ce = 0;
                for (me == 16 ? (Ce = 3 + x(M, S, 3), S += 2, Be = De[pe - 1]) : me == 17 ? (Ce = 3 + x(M, S, 7), S += 3) : me == 18 && (Ce = 11 + x(M, S, 127), S += 7); Ce--; ) De[pe++] = Be;
              }
            }
            var Ee = De.subarray(0, te), ge = De.subarray(te);
            G = _(Ee), K = _(ge), P = C(Ee, G), O = C(ge, K);
          } else L(1);
          if (S > q) {
            H && L(0);
            break;
          }
        }
        ae && V(N + 131072);
        for (var Ve = (1 << G) - 1, Fe = (1 << K) - 1, we = S; ; we = S) {
          var Te = (Be = P[F(M, S) & Ve]) >>> 4;
          if ((S += 15 & Be) > q) {
            H && L(0);
            break;
          }
          if (Be || L(2), Te < 256) Z[N++] = Te;
          else {
            if (Te == 256) {
              we = S, P = null;
              break;
            }
            var Pe = Te - 254;
            if (Te > 264) {
              var je = i[pe = Te - 257];
              Pe = x(M, S, (1 << je) - 1) + h[pe], S += je;
            }
            var B = O[F(M, S) & Fe], k = B >>> 4;
            if (B || L(3), S += 15 & B, ge = f[k], k > 3 && (je = t[k], ge += F(M, S) & (1 << je) - 1, S += je), S > q) {
              H && L(0);
              break;
            }
            ae && V(N + 131072);
            for (var R = N + Pe; N < R; N += 4) Z[N] = Z[N - ge], Z[N + 1] = Z[N + 1 - ge], Z[N + 2] = Z[N + 2 - ge], Z[N + 3] = Z[N + 3 - ge];
            N = R;
          }
        }
        Y.l = P, Y.p = we, Y.b = N, P && (re = 1, Y.m = G, Y.d = O, Y.n = K);
      } while (!re);
      return N == Z.length ? Z : function(U, le, _e) {
        (_e == null || _e > U.length) && (_e = U.length);
        var Re = new (U instanceof A ? A : U instanceof u ? u : n)(_e - le);
        return Re.set(U.subarray(le, _e)), Re;
      }(Z, 0, N);
    }, J = new n(0), ie = typeof TextDecoder < "u" && new TextDecoder();
    try {
      ie.decode(J, { stream: !0 });
    } catch {
    }
    return p.convert_streams = function(M) {
      var Z = new DataView(M), Y = 0;
      function oe() {
        var te = Z.getUint16(Y);
        return Y += 2, te;
      }
      function ae() {
        var te = Z.getUint32(Y);
        return Y += 4, te;
      }
      function H(te) {
        ue.setUint16(ve, te), ve += 2;
      }
      function j(te) {
        ue.setUint32(ve, te), ve += 4;
      }
      for (var V = { signature: ae(), flavor: ae(), length: ae(), numTables: oe(), reserved: oe(), totalSfntSize: ae(), majorVersion: oe(), minorVersion: oe(), metaOffset: ae(), metaLength: ae(), metaOrigLength: ae(), privOffset: ae(), privLength: ae() }, re = 0; Math.pow(2, re) <= V.numTables; ) re++;
      re--;
      for (var S = 16 * Math.pow(2, re), N = 16 * V.numTables - S, P = 12, O = [], G = 0; G < V.numTables; G++) O.push({ tag: ae(), offset: ae(), compLength: ae(), origLength: ae(), origChecksum: ae() }), P += 16;
      var K, q = new Uint8Array(12 + 16 * O.length + O.reduce(function(te, X) {
        return te + X.origLength + 4;
      }, 0)), z = q.buffer, ue = new DataView(z), ve = 0;
      return j(V.flavor), H(V.numTables), H(S), H(re), H(N), O.forEach(function(te) {
        j(te.tag), j(te.origChecksum), j(P), j(te.origLength), te.outOffset = P, (P += te.origLength) % 4 != 0 && (P += 4 - P % 4);
      }), O.forEach(function(te) {
        var X, xe = M.slice(te.offset, te.offset + te.compLength);
        if (te.compLength != te.origLength) {
          var De = new Uint8Array(te.origLength);
          X = new Uint8Array(xe, 2), W(X, De);
        } else De = new Uint8Array(xe);
        q.set(De, te.outOffset);
        var he = 0;
        (P = te.outOffset + te.origLength) % 4 != 0 && (he = 4 - P % 4), q.set(new Uint8Array(he).buffer, te.outOffset + te.origLength), K = P + he;
      }), z.slice(0, K);
    }, Object.defineProperty(p, "__esModule", { value: !0 }), p;
  }({}).convert_streams;
}
function Ud(p, n) {
  const A = {
    M: 2,
    L: 2,
    Q: 4,
    C: 6,
    Z: 0
  }, u = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, i = 1, t = 2, o = 4, l = 8, a = 16, h = 32;
  let d;
  function f(x) {
    if (!d) {
      const F = {
        R: t,
        L: i,
        D: o,
        C: a,
        U: h,
        T: l
      };
      d = /* @__PURE__ */ new Map();
      for (let T in u) {
        let L = 0;
        u[T].split(",").forEach((W) => {
          let [J, ie] = W.split("+");
          J = parseInt(J, 36), ie = ie ? parseInt(ie, 36) : 0, d.set(L += J, F[T]);
          for (let M = ie; M--; )
            d.set(++L, F[T]);
        });
      }
    }
    return d.get(x) || h;
  }
  const m = 1, v = 2, b = 3, C = 4, E = [null, "isol", "init", "fina", "medi"];
  function y(x) {
    const F = new Uint8Array(x.length);
    let T = h, L = m, W = -1;
    for (let J = 0; J < x.length; J++) {
      const ie = x.codePointAt(J);
      let M = f(ie) | 0, Z = m;
      M & l || (T & (i | o | a) ? M & (t | o | a) ? (Z = b, (L === m || L === b) && F[W]++) : M & (i | h) && (L === v || L === C) && F[W]-- : T & (t | h) && (L === v || L === C) && F[W]--, L = F[J] = Z, T = M, W = J, ie > 65535 && J++);
    }
    return F;
  }
  function I(x, F) {
    const T = [];
    for (let W = 0; W < F.length; W++) {
      const J = F.codePointAt(W);
      J > 65535 && W++, T.push(p.U.codeToGlyph(x, J));
    }
    const L = x.GSUB;
    if (L) {
      const { lookupList: W, featureList: J } = L;
      let ie;
      const M = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/, Z = [];
      J.forEach((Y) => {
        if (M.test(Y.tag))
          for (let oe = 0; oe < Y.tab.length; oe++) {
            if (Z[Y.tab[oe]]) continue;
            Z[Y.tab[oe]] = !0;
            const ae = W[Y.tab[oe]], H = /^(isol|init|fina|medi)$/.test(Y.tag);
            H && !ie && (ie = y(F));
            for (let j = 0; j < T.length; j++)
              (!ie || !H || E[ie[j]] === Y.tag) && p.U._applySubs(T, j, ae, W);
          }
      });
    }
    return T;
  }
  function Q(...x) {
    for (let F = 0; F < x.length; F++)
      if (typeof x[F] == "number")
        return x[F];
  }
  function _(x) {
    const F = /* @__PURE__ */ Object.create(null), T = x["OS/2"], L = x.hhea, W = x.head.unitsPerEm, J = Q(T && T.sTypoAscender, L && L.ascender, W), ie = {
      unitsPerEm: W,
      ascender: J,
      descender: Q(T && T.sTypoDescender, L && L.descender, 0),
      capHeight: Q(T && T.sCapHeight, J),
      xHeight: Q(T && T.sxHeight, J),
      lineGap: Q(T && T.sTypoLineGap, L && L.lineGap),
      forEachGlyph(M, Z, Y, oe) {
        let ae = 0;
        const H = 1 / ie.unitsPerEm * Z, j = I(x, M);
        let V = 0, re = -1;
        return j.forEach((S, N) => {
          if (S !== -1) {
            let P = F[S];
            if (!P) {
              const { cmds: O, crds: G } = p.U.glyphToPath(x, S);
              let K = "", q = 0;
              for (let X = 0, xe = O.length; X < xe; X++) {
                const De = A[O[X]];
                K += O[X];
                for (let he = 1; he <= De; he++)
                  K += (he > 1 ? "," : "") + G[q++];
              }
              let z, ue, ve, te;
              if (G.length) {
                z = ue = 1 / 0, ve = te = -1 / 0;
                for (let X = 0, xe = G.length; X < xe; X += 2) {
                  let De = G[X], he = G[X + 1];
                  De < z && (z = De), he < ue && (ue = he), De > ve && (ve = De), he > te && (te = he);
                }
              } else
                z = ve = ue = te = 0;
              P = F[S] = {
                index: S,
                advanceWidth: x.hmtx.aWidth[S],
                xMin: z,
                yMin: ue,
                xMax: ve,
                yMax: te,
                path: K,
                pathCommandCount: O.length
                // forEachPathCommand(callback) {
                //   let argsIndex = 0
                //   const argsArray = []
                //   for (let i = 0, len = cmds.length; i < len; i++) {
                //     const numArgs = cmdArgLengths[cmds[i]]
                //     argsArray.length = 1 + numArgs
                //     argsArray[0] = cmds[i]
                //     for (let j = 1; j <= numArgs; j++) {
                //       argsArray[j] = crds[argsIndex++]
                //     }
                //     callback.apply(null, argsArray)
                //   }
                // }
              };
            }
            re !== -1 && (ae += p.U.getPairAdjustment(x, re, S) * H), oe.call(null, P, ae, V), P.advanceWidth && (ae += P.advanceWidth * H), Y && (ae += Y * Z), re = S;
          }
          V += M.codePointAt(V) > 65535 ? 2 : 1;
        }), ae;
      }
    };
    return ie;
  }
  return function(F) {
    const T = new Uint8Array(F, 0, 4), L = p._bin.readASCII(T, 0, 4);
    if (L === "wOFF")
      F = n(F);
    else if (L === "wOF2")
      throw new Error("woff2 fonts not supported");
    return _(p.parse(F)[0]);
  };
}
const Gd = /* @__PURE__ */ zr({
  name: "Typr Font Parser",
  dependencies: [Pd, Md, Ud],
  init(p, n, A) {
    const u = p(), i = n();
    return A(u, i);
  }
}), lr = {
  defaultFontURL: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",
  //Roboto Regular
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, Nd = /* @__PURE__ */ new Dt();
function sr() {
  return (self.performance || Date).now();
}
const Ca = /* @__PURE__ */ Object.create(null);
function Od(p, n) {
  p = Hd({}, p);
  const A = sr();
  if (p.font = Kd(p.font || lr.defaultFontURL), p.text = "" + p.text, p.sdfGlyphSize = p.sdfGlyphSize || lr.sdfGlyphSize, p.colorRanges != null) {
    let f = {};
    for (let m in p.colorRanges)
      if (p.colorRanges.hasOwnProperty(m)) {
        let v = p.colorRanges[m];
        typeof v != "number" && (v = Nd.set(v).getHex()), f[m] = v;
      }
    p.colorRanges = f;
  }
  Object.freeze(p);
  const { textureWidth: u, sdfExponent: i } = lr, { sdfGlyphSize: t } = p, o = u / t * 4;
  let l = Ca[t];
  if (!l) {
    const f = document.createElement("canvas");
    f.width = u, f.height = t * 256 / o, l = Ca[t] = {
      glyphCount: 0,
      sdfGlyphSize: t,
      sdfCanvas: f,
      sdfTexture: new Qs(
        f,
        void 0,
        void 0,
        void 0,
        hr,
        hr
      ),
      contextLost: !1,
      glyphsByFont: /* @__PURE__ */ new Map()
    }, l.sdfTexture.generateMipmaps = !1, Vd(l);
  }
  const { sdfTexture: a, sdfCanvas: h } = l;
  let d = l.glyphsByFont.get(p.font);
  d || l.glyphsByFont.set(p.font, d = /* @__PURE__ */ new Map()), Yd(p).then((f) => {
    const { glyphIds: m, glyphPositions: v, fontSize: b, unitsPerEm: C, timings: E } = f, y = [], I = new Float32Array(m.length * 4), Q = b / C;
    let _ = 0, x = 0;
    const F = sr();
    m.forEach((ie, M) => {
      let Z = d.get(ie);
      if (!Z) {
        const { path: H, pathBounds: j } = f.glyphData[ie], V = Math.max(j[2] - j[0], j[3] - j[1]) / t * (lr.sdfMargin * t + 0.5), re = l.glyphCount++, S = [
          j[0] - V,
          j[1] - V,
          j[2] + V,
          j[3] + V
        ];
        d.set(ie, Z = { path: H, atlasIndex: re, sdfViewBox: S }), y.push(Z);
      }
      const { sdfViewBox: Y } = Z, oe = v[x++], ae = v[x++];
      I[_++] = oe + Y[0] * Q, I[_++] = ae + Y[1] * Q, I[_++] = oe + Y[2] * Q, I[_++] = ae + Y[3] * Q, m[M] = Z.atlasIndex;
    }), E.quads = (E.quads || 0) + (sr() - F);
    const T = sr();
    E.sdf = {};
    const L = h.height, W = Math.ceil(l.glyphCount / o), J = Math.pow(2, Math.ceil(Math.log2(W * t)));
    J > L && (console.info(`Increasing SDF texture size ${L}->${J}`), Ld(h, u, J), a.dispose()), Promise.all(y.map(
      (ie) => CA(ie, l, p.gpuAccelerateSDF).then(({ timing: M }) => {
        E.sdf[ie.atlasIndex] = M;
      })
    )).then(() => {
      y.length && !l.contextLost && (IA(l), a.needsUpdate = !0), E.sdfTotal = sr() - T, E.total = sr() - A, n(Object.freeze({
        parameters: p,
        sdfTexture: a,
        sdfGlyphSize: t,
        sdfExponent: i,
        glyphBounds: I,
        glyphAtlasIndices: m,
        glyphColors: f.glyphColors,
        caretPositions: f.caretPositions,
        caretHeight: f.caretHeight,
        chunkedBounds: f.chunkedBounds,
        ascender: f.ascender,
        descender: f.descender,
        lineHeight: f.lineHeight,
        capHeight: f.capHeight,
        xHeight: f.xHeight,
        topBaseline: f.topBaseline,
        blockBounds: f.blockBounds,
        visibleBounds: f.visibleBounds,
        timings: f.timings
      }));
    });
  }), Promise.resolve().then(() => {
    l.contextLost || Fd(h);
  });
}
function CA({ path: p, atlasIndex: n, sdfViewBox: A }, { sdfGlyphSize: u, sdfCanvas: i, contextLost: t }, o) {
  if (t)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: l, sdfExponent: a } = lr, h = Math.max(A[2] - A[0], A[3] - A[1]), d = Math.floor(n / 4), f = d % (l / u) * u, m = Math.floor(d / (l / u)) * u, v = n % 4;
  return xd(u, u, p, A, h, a, i, f, m, v, o);
}
function Vd(p) {
  const n = p.sdfCanvas;
  n.addEventListener("webglcontextlost", (A) => {
    console.log("Context Lost", A), A.preventDefault(), p.contextLost = !0;
  }), n.addEventListener("webglcontextrestored", (A) => {
    console.log("Context Restored", A), p.contextLost = !1;
    const u = [];
    p.glyphsByFont.forEach((i) => {
      i.forEach((t) => {
        u.push(CA(t, p, !0));
      });
    }), Promise.all(u).then(() => {
      IA(p), p.sdfTexture.needsUpdate = !0;
    });
  });
}
function Hd(p, n) {
  for (let A in n)
    n.hasOwnProperty(A) && (p[A] = n[A]);
  return p;
}
let Ii;
function Kd(p) {
  return Ii || (Ii = typeof document > "u" ? {} : document.createElement("a")), Ii.href = p, Ii.href;
}
function IA(p) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: n, sdfTexture: A } = p, { width: u, height: i } = n, t = p.sdfCanvas.getContext("webgl");
    let o = A.image.data;
    (!o || o.length !== u * i * 4) && (o = new Uint8Array(u * i * 4), A.image = { width: u, height: i, data: o }, A.flipY = !1, A.isDataTexture = !0), t.readPixels(0, 0, u, i, t.RGBA, t.UNSIGNED_BYTE, o);
  }
}
const qd = /* @__PURE__ */ zr({
  name: "Typesetter",
  dependencies: [
    lr,
    Gd,
    Qd,
    Cd
  ],
  init(p, n, A, u) {
    const { defaultFontURL: i } = p;
    return A(n, u(), { defaultFontURL: i });
  }
}), Yd = /* @__PURE__ */ zr({
  name: "Typesetter",
  dependencies: [
    qd
  ],
  init(p) {
    return function(n) {
      return new Promise((A) => {
        p.typeset(n, A);
      });
    };
  },
  getTransferables(p) {
    const n = [
      p.glyphPositions.buffer,
      p.glyphIds.buffer
    ];
    return p.caretPositions && n.push(p.caretPositions.buffer), p.glyphColors && n.push(p.glyphColors.buffer), n;
  }
}), Ia = {};
function Jd(p) {
  let n = Ia[p];
  if (!n) {
    const A = new Vs(1, 1, p, p), u = A.clone(), i = A.attributes, t = u.attributes, o = new cr(), l = i.uv.count;
    for (let a = 0; a < l; a++)
      t.position.array[a * 3] *= -1, t.normal.array[a * 3 + 2] *= -1;
    ["position", "normal", "uv"].forEach((a) => {
      o.setAttribute(
        a,
        new Mu(
          [...i[a].array, ...t[a].array],
          i[a].itemSize
        )
      );
    }), o.setIndex([...A.index.array, ...u.index.array.map((a) => a + l)]), o.translate(0.5, 0.5, 0), n = Ia[p] = o;
  }
  return n;
}
const jd = "aTroikaGlyphBounds", Ea = "aTroikaGlyphIndex", Wd = "aTroikaGlyphColor";
class Xd extends Fu {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new Oa(), this.boundingBox = new Na();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  // Since our base geometry contains triangles for both front and back sides, we can emulate
  // the "side" by restricting the draw range.
  setSide(n) {
    const A = this.getIndex().count;
    this.setDrawRange(n === Lu ? A / 2 : 0, n === Os ? A : A / 2);
  }
  set detail(n) {
    if (n !== this._detail) {
      this._detail = n, (typeof n != "number" || n < 1) && (n = 1);
      let A = Jd(n);
      ["position", "normal", "uv"].forEach((u) => {
        this.attributes[u] = A.attributes[u].clone();
      }), this.setIndex(A.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(n) {
    n !== this._curveRadius && (this._curveRadius = n, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  /**
   * Update the geometry for a new set of glyphs.
   * @param {Float32Array} glyphBounds - An array holding the planar bounds for all glyphs
   *        to be rendered, 4 entries for each glyph: x1,x2,y1,y1
   * @param {Float32Array} glyphAtlasIndices - An array holding the index of each glyph within
   *        the SDF atlas texture.
   * @param {Array} blockBounds - An array holding the [minX, minY, maxX, maxY] across all glyphs
   * @param {Array} [chunkedBounds] - An array of objects describing bounds for each chunk of N
   *        consecutive glyphs: `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`. This can be
   *        used with `applyClipRect` to choose an optimized `instanceCount`.
   * @param {Uint8Array} [glyphColors] - An array holding r,g,b values for each glyph.
   */
  updateGlyphs(n, A, u, i, t) {
    Es(this, jd, n, 4), Es(this, Ea, A, 1), Es(this, Wd, t, 3), this._blockBounds = u, this._chunkedBounds = i, this.instanceCount = A.length, this._updateBounds();
  }
  _updateBounds() {
    const n = this._blockBounds;
    if (n) {
      const { curveRadius: A, boundingBox: u } = this;
      if (A) {
        const { PI: i, floor: t, min: o, max: l, sin: a, cos: h } = Math, d = i / 2, f = i * 2, m = Math.abs(A), v = n[0] / m, b = n[2] / m, C = t((v + d) / f) !== t((b + d) / f) ? -m : o(a(v) * m, a(b) * m), E = t((v - d) / f) !== t((b - d) / f) ? m : l(a(v) * m, a(b) * m), y = t((v + i) / f) !== t((b + i) / f) ? m * 2 : l(m - h(v) * m, m - h(b) * m);
        u.min.set(C, n[1], A < 0 ? -y : 0), u.max.set(E, n[3], A < 0 ? 0 : y);
      } else
        u.min.set(n[0], n[1], 0), u.max.set(n[2], n[3], 0);
      u.getBoundingSphere(this.boundingSphere);
    }
  }
  /**
   * Given a clipping rect, and the chunkedBounds from the last updateGlyphs call, choose the lowest
   * `instanceCount` that will show all glyphs within the clipped view. This is an optimization
   * for long blocks of text that are clipped, to skip vertex shader evaluation for glyphs that would
   * be clipped anyway.
   *
   * Note that since `drawElementsInstanced[ANGLE]` only accepts an instance count and not a starting
   * offset, this optimization becomes less effective as the clipRect moves closer to the end of the
   * text block. We could fix that by switching from instancing to a full geometry with a drawRange,
   * but at the expense of much larger attribute buffers (see classdoc above.)
   *
   * @param {Vector4} clipRect
   */
  applyClipRect(n) {
    let A = this.getAttribute(Ea).count, u = this._chunkedBounds;
    if (u)
      for (let i = u.length; i--; ) {
        A = u[i].end;
        let t = u[i].rect;
        if (t[1] < n.w && t[3] > n.y && t[0] < n.z && t[2] > n.x)
          break;
      }
    this.instanceCount = A;
  }
}
function Es(p, n, A, u) {
  const i = p.getAttribute(n);
  A ? i && i.array.length === A.length ? (i.array.set(A), i.needsUpdate = !0) : (p.setAttribute(n, new Ta(A, u)), delete p._maxInstanceCount, p.dispose()) : i && p.deleteAttribute(n);
}
const zd = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`, Zd = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`, $d = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`, ep = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
function tp(p) {
  const n = Ms(p, {
    chained: !0,
    extensions: {
      derivatives: !0
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new Vn() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new Yo(0, 0, 0, 0) },
      uTroikaClipRect: { value: new Yo(0, 0, 0, 0) },
      uTroikaDistanceOffset: { value: 0 },
      uTroikaOutlineOpacity: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Vn() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Dt() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new Pu() },
      uTroikaUseGlyphColors: { value: !0 },
      uTroikaSDFDebug: { value: !1 }
    },
    vertexDefs: zd,
    vertexTransform: Zd,
    fragmentDefs: $d,
    fragmentColorTransform: ep,
    customRewriter({ vertexShader: A, fragmentShader: u }) {
      let i = /\buniform\s+vec3\s+diffuse\b/;
      return i.test(u) && (u = u.replace(i, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), i.test(A) || (A = A.replace(
        mA,
        `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`
      ))), { vertexShader: A, fragmentShader: u };
    }
  });
  return n.transparent = !0, Object.defineProperties(n, {
    isTroikaTextMaterial: { value: !0 },
    // WebGLShadowMap reverses the side of the shadow material by default, which fails
    // for planes, so here we force the `shadowSide` to always match the main side.
    shadowSide: {
      get() {
        return this.side;
      },
      set() {
      }
    }
  }), n;
}
const Ks = /* @__PURE__ */ new ar({
  color: 16777215,
  side: Os,
  transparent: !0
}), wa = 8421504, ba = /* @__PURE__ */ new jr(), Ei = /* @__PURE__ */ new en(), ws = /* @__PURE__ */ new en(), Mr = [], np = /* @__PURE__ */ new en(), bs = "+x+y";
function Ba(p) {
  return Array.isArray(p) ? p[0] : p;
}
let EA = () => {
  const p = new Qi(
    new Vs(1, 1),
    Ks
  );
  return EA = () => p, p;
}, wA = () => {
  const p = new Qi(
    new Vs(1, 1, 32, 1),
    Ks
  );
  return wA = () => p, p;
};
const rp = { type: "syncstart" }, ip = { type: "synccomplete" }, bA = [
  "font",
  "fontSize",
  "letterSpacing",
  "lineHeight",
  "maxWidth",
  "overflowWrap",
  "text",
  "direction",
  "textAlign",
  "textIndent",
  "whiteSpace",
  "anchorX",
  "anchorY",
  "colorRanges",
  "sdfGlyphSize"
], sp = bA.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
class We extends Qi {
  constructor() {
    const n = new Xd();
    super(n, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.fontSize = 0.1, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = wa, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = bs, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(n) {
    this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(n) : (this._isSyncing = !0, this.dispatchEvent(rp), Od({
      text: this.text,
      font: this.font,
      fontSize: this.fontSize || 0.1,
      letterSpacing: this.letterSpacing || 0,
      lineHeight: this.lineHeight || "normal",
      maxWidth: this.maxWidth,
      direction: this.direction || "auto",
      textAlign: this.textAlign,
      textIndent: this.textIndent,
      whiteSpace: this.whiteSpace,
      overflowWrap: this.overflowWrap,
      anchorX: this.anchorX,
      anchorY: this.anchorY,
      colorRanges: this.colorRanges,
      includeCaretPositions: !0,
      //TODO parameterize
      sdfGlyphSize: this.sdfGlyphSize,
      gpuAccelerateSDF: this.gpuAccelerateSDF
    }, (A) => {
      this._isSyncing = !1, this._textRenderInfo = A, this.geometry.updateGlyphs(
        A.glyphBounds,
        A.glyphAtlasIndices,
        A.blockBounds,
        A.chunkedBounds,
        A.glyphColors
      );
      const u = this._queuedSyncs;
      u && (this._queuedSyncs = null, this._needsSync = !0, this.sync(() => {
        u.forEach((i) => i && i());
      })), this.dispatchEvent(ip), n && n();
    })));
  }
  /**
   * Initiate a sync if needed - note it won't complete until next frame at the
   * earliest so if possible it's a good idea to call sync() manually as soon as
   * all the properties have been set.
   * @override
   */
  onBeforeRender(n, A, u, i, t, o) {
    this.sync(), t.isTroikaTextMaterial && this._prepareForRender(t), t._hadOwnSide = t.hasOwnProperty("side"), this.geometry.setSide(t._actualSide = t.side), t.side = Ga;
  }
  onAfterRender(n, A, u, i, t, o) {
    t._hadOwnSide ? t.side = t._actualSide : delete t.side;
  }
  /**
   * Shortcut to dispose the geometry specific to this instance.
   * Note: we don't also dispose the derived material here because if anything else is
   * sharing the same base material it will result in a pause next frame as the program
   * is recompiled. Instead users can dispose the base material manually, like normal,
   * and we'll also dispose the derived material at that time.
   */
  dispose() {
    this.geometry.dispose();
  }
  /**
   * @property {TroikaTextRenderInfo|null} textRenderInfo
   * @readonly
   * The current processed rendering data for this TextMesh, returned by the TextBuilder after
   * a `sync()` call. This will be `null` initially, and may be stale for a short period until
   * the asynchrous `sync()` process completes.
   */
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
  // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
  get material() {
    let n = this._derivedMaterial;
    const A = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = Ks.clone());
    if ((!n || n.baseMaterial !== A) && (n = this._derivedMaterial = tp(A), A.addEventListener("dispose", function u() {
      A.removeEventListener("dispose", u), n.dispose();
    })), this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY) {
      let u = n._outlineMtl;
      return u || (u = n._outlineMtl = Object.create(n, {
        id: { value: n.id + 0.1 }
      }), u.isTextOutlineMaterial = !0, u.depthWrite = !1, u.map = null, n.addEventListener("dispose", function i() {
        n.removeEventListener("dispose", i), u.dispose();
      })), [
        u,
        n
      ];
    } else
      return n;
  }
  set material(n) {
    n && n.isTroikaTextMaterial ? (this._derivedMaterial = n, this._baseMaterial = n.baseMaterial) : this._baseMaterial = n;
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(n) {
    this.geometry.detail = n;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(n) {
    this.geometry.curveRadius = n;
  }
  // Create and update material for shadows upon request:
  get customDepthMaterial() {
    return Ba(this.material).getDepthMaterial();
  }
  get customDistanceMaterial() {
    return Ba(this.material).getDistanceMaterial();
  }
  _prepareForRender(n) {
    const A = n.isTextOutlineMaterial, u = n.uniforms, i = this.textRenderInfo;
    if (i) {
      const { sdfTexture: l, blockBounds: a } = i;
      u.uTroikaSDFTexture.value = l, u.uTroikaSDFTextureSize.value.set(l.image.width, l.image.height), u.uTroikaSDFGlyphSize.value = i.sdfGlyphSize, u.uTroikaSDFExponent.value = i.sdfExponent, u.uTroikaTotalBounds.value.fromArray(a), u.uTroikaUseGlyphColors.value = !A && !!i.glyphColors;
      let h = 0, d = 0, f = 0, m, v, b, C = 0, E = 0;
      if (A) {
        let { outlineWidth: I, outlineOffsetX: Q, outlineOffsetY: _, outlineBlur: x, outlineOpacity: F } = this;
        h = this._parsePercent(I) || 0, d = Math.max(0, this._parsePercent(x) || 0), m = F, C = this._parsePercent(Q) || 0, E = this._parsePercent(_) || 0;
      } else
        f = Math.max(0, this._parsePercent(this.strokeWidth) || 0), f && (b = this.strokeColor, u.uTroikaStrokeColor.value.set(b ?? wa), v = this.strokeOpacity, v == null && (v = 1)), m = this.fillOpacity;
      u.uTroikaDistanceOffset.value = h, u.uTroikaPositionOffset.value.set(C, E), u.uTroikaBlurRadius.value = d, u.uTroikaStrokeWidth.value = f, u.uTroikaStrokeOpacity.value = v, u.uTroikaFillOpacity.value = m ?? 1, u.uTroikaCurveRadius.value = this.curveRadius || 0;
      let y = this.clipRect;
      if (y && Array.isArray(y) && y.length === 4)
        u.uTroikaClipRect.value.fromArray(y);
      else {
        const I = (this.fontSize || 0.1) * 100;
        u.uTroikaClipRect.value.set(
          a[0] - I,
          a[1] - I,
          a[2] + I,
          a[3] + I
        );
      }
      this.geometry.applyClipRect(u.uTroikaClipRect.value);
    }
    u.uTroikaSDFDebug.value = !!this.debugSDF, n.polygonOffset = !!this.depthOffset, n.polygonOffsetFactor = n.polygonOffsetUnits = this.depthOffset || 0;
    const t = A ? this.outlineColor || 0 : this.color;
    if (t == null)
      delete n.color;
    else {
      const l = n.hasOwnProperty("color") ? n.color : n.color = new Dt();
      (t !== l._input || typeof t == "object") && l.set(l._input = t);
    }
    let o = this.orientation || bs;
    if (o !== n._orientation) {
      let l = u.uTroikaOrient.value;
      o = o.replace(/[^-+xyz]/g, "");
      let a = o !== bs && o.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (a) {
        let [, h, d, f, m] = a;
        Ei.set(0, 0, 0)[d] = h === "-" ? 1 : -1, ws.set(0, 0, 0)[m] = f === "-" ? -1 : 1, ba.lookAt(np, Ei.cross(ws), ws), l.setFromMatrix4(ba);
      } else
        l.identity();
      n._orientation = o;
    }
  }
  _parsePercent(n) {
    if (typeof n == "string") {
      let A = n.match(/^(-?[\d.]+)%$/), u = A ? parseFloat(A[1]) : NaN;
      n = (isNaN(u) ? 0 : u / 100) * this.fontSize;
    }
    return n;
  }
  /**
   * Translate a point in local space to an x/y in the text plane.
   */
  localPositionToTextCoords(n, A = new Vn()) {
    A.copy(n);
    const u = this.curveRadius;
    return u && (A.x = Math.atan2(n.x, Math.abs(u) - Math.abs(n.z)) * Math.abs(u)), A;
  }
  /**
   * Translate a point in world space to an x/y in the text plane.
   */
  worldPositionToTextCoords(n, A = new Vn()) {
    return Ei.copy(n), this.localPositionToTextCoords(this.worldToLocal(Ei), A);
  }
  /**
   * @override Custom raycasting to test against the whole text block's max rectangular bounds
   * TODO is there any reason to make this more granular, like within individual line or glyph rects?
   */
  raycast(n, A) {
    const { textRenderInfo: u, curveRadius: i } = this;
    if (u) {
      const t = u.blockBounds, o = i ? wA() : EA(), l = o.geometry, { position: a, uv: h } = l.attributes;
      for (let d = 0; d < h.count; d++) {
        let f = t[0] + h.getX(d) * (t[2] - t[0]);
        const m = t[1] + h.getY(d) * (t[3] - t[1]);
        let v = 0;
        i && (v = i - Math.cos(f / i) * i, f = Math.sin(f / i) * i), a.setXYZ(d, f, m, v);
      }
      l.boundingSphere = this.geometry.boundingSphere, l.boundingBox = this.geometry.boundingBox, o.matrixWorld = this.matrixWorld, o.material.side = this.material.side, Mr.length = 0, o.raycast(n, Mr);
      for (let d = 0; d < Mr.length; d++)
        Mr[d].object = this, A.push(Mr[d]);
    }
  }
  copy(n) {
    const A = this.geometry;
    return super.copy(n), this.geometry = A, sp.forEach((u) => {
      this[u] = n[u];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
bA.forEach((p) => {
  const n = "_private_" + p;
  Object.defineProperty(We.prototype, p, {
    get() {
      return this[n];
    },
    set(A) {
      A !== this[n] && (this[n] = A, this._needsSync = !0);
    }
  });
});
class op {
  //
  constructor(n) {
    var A;
    this._charts = /* @__PURE__ */ new Map(), this._width = 400, this._height = 110, this._backgroundOpacity = 0.7, this._perf = n.perf, this._backgroundOpacity = (A = n.backgroundOpacity) != null ? A : this._backgroundOpacity, this.wrapper = document.createElement("div"), this.wrapper.id = "three-perf-ui", this.wrapper.style.position = "fixed", this.wrapper.style.bottom = "0", this.wrapper.style.left = "0", this.wrapper.style.width = this._width + "px", this.wrapper.style.height = this._height + "px", n.domElement.appendChild(this.wrapper), this.canvas = document.createElement("canvas"), this.canvas.width = this._width, this.canvas.height = this._height, this.canvas.style.position = "absolute", this.wrapper.appendChild(this.canvas), this.initCanvas();
  }
  setScale(n) {
    this.wrapper.style.width = n * this.width + "px", this.wrapper.style.height = n * this.height + "px", this._renderer.setSize(this._width * n, this._height * n, !0);
  }
  initCanvas() {
    this._renderer = new Va({ canvas: this.canvas, antialias: !0, alpha: !0 }), this._renderer.setClearColor(0, this._backgroundOpacity), this._renderer.setPixelRatio(window.devicePixelRatio), this._scene = new Ha(), this._camera = new Ma(0, this._width, 0, -this._height, 0.1, 100), this._camera.position.set(0, 0, 10), this._camera.lookAt(0, 0, 0), this._camera.updateProjectionMatrix(), this._scene.add(this._camera), this._scene.userData.useStats = !1;
    const n = new We();
    n.anchorX = "right", n.position.set(45, -8, 0), n.text = "0.000", n.fontSize = 15, n.color = "rgb(253, 151, 31)", n.sync(), this._scene.add(n);
    const A = new We();
    A.anchorX = "right", A.position.set(65, -7, 0), A.text = "ms", A.fontSize = 9, A.color = "rgb(255, 255, 255)", A.sync(), this._scene.add(A);
    const u = new We();
    u.anchorX = "right", u.position.set(65, -22, 0), u.text = "GPU", u.fontSize = 9, u.color = "rgb(253, 151, 31)", u.sync(), this._scene.add(u);
    const i = new We();
    i.anchorX = "right", i.position.set(115, -8, 0), i.text = "0.000", i.fontSize = 15, i.color = "rgb(66, 226, 46)", i.sync(), this._scene.add(i);
    const t = new We();
    t.anchorX = "right", t.position.set(135, -7, 0), t.text = "ms", t.fontSize = 9, t.color = "rgb(255, 255, 255)", t.sync(), this._scene.add(t);
    const o = new We();
    o.anchorX = "right", o.position.set(135, -22, 0), o.text = "CPU", o.fontSize = 9, o.color = "rgb(66, 226, 46)", o.sync(), this._scene.add(o);
    const l = new We();
    l.anchorX = "center", l.position.set(165, -8, 0), l.text = "0", l.fontSize = 15, l.color = "rgb(238, 38, 110)", l.sync(), this._scene.add(l);
    const a = new We();
    a.anchorX = "center", a.position.set(175, -22, 0), a.text = "FPS", a.fontSize = 9, a.color = "rgb(238, 38, 110)", a.sync(), this._scene.add(a);
    const h = new We();
    h.anchorX = "right", h.position.set(235, -8, 0), h.text = "0", h.fontSize = 15, h.color = "#ffffff", h.sync(), this._scene.add(h);
    const d = new We();
    d.anchorX = "right", d.position.set(235, -22, 0), d.text = "calls", d.fontSize = 9, d.color = "rgb(101, 197, 188)", d.sync(), this._scene.add(d);
    const f = new We();
    f.anchorX = "right", f.position.set(315, -8, 0), f.text = "0", f.fontSize = 15, f.color = "#ffffff", f.sync(), this._scene.add(f);
    const m = new We();
    m.anchorX = "right", m.position.set(315, -22, 0), m.text = "triangles", m.fontSize = 9, m.color = "rgb(101, 197, 188)", m.sync(), this._scene.add(m);
    const v = new We();
    v.anchorX = "right", v.position.set(365, -8, 0), v.text = "0", v.fontSize = 15, v.color = "#ffffff", v.sync(), this._scene.add(v);
    const b = new We();
    b.anchorX = "right", b.position.set(365, -22, 0), b.text = "passes", b.fontSize = 9, b.color = "rgb(101, 197, 188)", b.sync(), this._scene.add(b), this._basicInfoElements = {
      gpuValue: n,
      cpuValue: i,
      fpsValue: l,
      callsValue: h,
      trianglesValue: f,
      renderpassesValue: v
    };
    const C = new We();
    C.anchorX = "right", C.position.set(65, -39, 0), C.text = "0", C.fontSize = 15, C.color = "#ffffff", C.sync(), this._scene.add(C);
    const E = new We();
    E.anchorX = "right", E.position.set(65, -53, 0), E.text = "geometries", E.fontSize = 9, E.color = "rgb(101, 197, 188)", E.sync(), this._scene.add(E);
    const y = new We();
    y.anchorX = "right", y.position.set(135, -39, 0), y.text = "0", y.fontSize = 15, y.color = "#ffffff", y.sync(), this._scene.add(y);
    const I = new We();
    I.anchorX = "right", I.position.set(135, -53, 0), I.text = "textures", I.fontSize = 9, I.color = "rgb(101, 197, 188)", I.sync(), this._scene.add(I);
    const Q = new We();
    Q.anchorX = "right", Q.position.set(205, -39, 0), Q.text = "0", Q.fontSize = 15, Q.color = "#ffffff", Q.sync(), this._scene.add(Q);
    const _ = new We();
    _.anchorX = "right", _.position.set(205, -53, 0), _.text = "shaders", _.fontSize = 9, _.color = "rgb(101, 197, 188)", _.sync(), this._scene.add(_);
    const x = new We();
    x.anchorX = "right", x.position.set(275, -39, 0), x.text = "0", x.fontSize = 15, x.color = "#ffffff", x.sync(), this._scene.add(x);
    const F = new We();
    F.anchorX = "right", F.position.set(275, -53, 0), F.text = "lines", F.fontSize = 9, F.color = "rgb(101, 197, 188)", F.sync(), this._scene.add(F);
    const T = new We();
    T.anchorX = "right", T.position.set(345, -39, 0), T.text = "0", T.fontSize = 15, T.color = "#ffffff", T.sync(), this._scene.add(T);
    const L = new We();
    L.anchorX = "right", L.position.set(345, -53, 0), L.text = "points", L.fontSize = 9, L.color = "rgb(101, 197, 188)", L.sync(), this._scene.add(L), this._memInfoElements = {
      geometriesValue: C,
      geometriesLabel: E,
      texturesValue: y,
      texturesLabel: I,
      shadersValue: Q,
      shadersLabel: _,
      linesValue: x,
      linesLabel: F,
      pointsValue: T,
      pointsLabel: L
    };
    const W = new cr();
    let J = new Float32Array(60 * 3);
    for (let H = 0; H < 60; H++)
      J[3 * H + 0] = this._width / 59 * H, J[3 * H + 1] = -110, J[3 * H + 2] = 0;
    let ie = new In(J, 3);
    ie.usage = is, W.setAttribute("position", ie);
    const M = new Bi(W, new bi({ color: "rgb(253, 151, 31)" }));
    this._scene.add(M), this._charts.set("gpu", M);
    const Z = new cr();
    J = new Float32Array(60 * 3);
    for (let H = 0; H < 60; H++)
      J[3 * H + 0] = this._width / 59 * H, J[3 * H + 1] = -110, J[3 * H + 2] = 0;
    ie = new In(J, 3), ie.usage = is, Z.setAttribute("position", ie);
    const Y = new Bi(Z, new bi({ color: "rgb(66, 226, 46)" }));
    this._scene.add(Y), this._charts.set("cpu", Y);
    const oe = new cr();
    J = new Float32Array(60 * 3);
    for (let H = 0; H < 60; H++)
      J[3 * H + 0] = this._width / 59 * H, J[3 * H + 1] = -110, J[3 * H + 2] = 0;
    ie = new In(J, 3), ie.usage = is, oe.setAttribute("position", ie);
    const ae = new Bi(oe, new bi({ color: "rgb(238, 38, 110)" }));
    this._scene.add(ae), this._charts.set("fps", ae);
  }
  update() {
    var n, A;
    if (this._perf.chart && this._perf.showGraph)
      for (const u in this._perf.chart.data) {
        const i = this._perf.chart.data[u];
        if (!this._charts.get(u) || !i)
          continue;
        const o = this._charts.get(u).geometry.attributes.position;
        let l = 0;
        for (let a = 0; a < i.length; a++)
          i[a] > l && (l = i[a]);
        l = Math.max(l, 20);
        for (let a = 0; a < i.length; a++) {
          let h = (this._perf.chart.circularId + a + 1) % 60;
          o.setY(a, (i[h] / l * 90 - 110) * this.height / 110);
        }
        o.needsUpdate = !0;
      }
    this._basicInfoElements.gpuValue.text = this._perf.log.gpu.toFixed(3), this._basicInfoElements.cpuValue.text = this._perf.log.cpu.toFixed(3), this._basicInfoElements.fpsValue.text = this._perf.log.fps.toFixed(0), this._basicInfoElements.callsValue.text = this._perf.threeRenderer.info.render.calls.toString(), this._basicInfoElements.trianglesValue.text = this._perf.threeRenderer.info.render.triangles.toString(), this._basicInfoElements.renderpassesValue.text = this._perf.renderPassesNumber.toString(), this._memInfoElements.geometriesValue.text = this._perf.threeRenderer.info.memory.geometries.toString(), this._memInfoElements.texturesValue.text = this._perf.threeRenderer.info.memory.textures.toString(), this._memInfoElements.shadersValue.text = (A = (n = this._perf.threeRenderer.info.programs) == null ? void 0 : n.length.toString()) != null ? A : "", this._memInfoElements.linesValue.text = this._perf.threeRenderer.info.render.lines.toString(), this._memInfoElements.pointsValue.text = this._perf.threeRenderer.info.render.points.toString(), this.render();
  }
  render() {
    this._renderer.render(this._scene, this._camera);
  }
  dispose() {
    this.wrapper.remove();
  }
  //
  toggleVisibility(n) {
    this.wrapper.style.display = n ? "block" : "none";
  }
  toggleCharts(n) {
    this._charts.forEach((A) => {
      A.visible = n;
    }), this._perf.showGraph ? this.height = this._perf.memory ? 110 : 70 : this.height = this._perf.memory ? 70 : 40, this.wrapper.style.height = this._perf.scale * this.height + "px";
  }
  toggleMemoryInfo(n) {
    for (const A in this._memInfoElements)
      this._memInfoElements[A].visible = n;
    this.width = 380, this._perf.showGraph ? this.height = this._perf.memory ? 110 : 70 : this.height = this._perf.memory ? 70 : 40, this.wrapper.style.width = this._perf.scale * this.width + "px", this.wrapper.style.height = this._perf.scale * this.height + "px";
  }
  setBackgroundOpacity(n) {
    this._backgroundOpacity = n, this._renderer.setClearColor(0, this._backgroundOpacity), this.render();
  }
  //
  get width() {
    return this._width;
  }
  set width(n) {
    this._width = n, this._camera.right = n, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._perf.scale * this._width, this._perf.scale * this._height), this.render();
  }
  get height() {
    return this._height;
  }
  set height(n) {
    this._height = n, this._camera.bottom = -n, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._perf.scale * this._width, this._perf.scale * this._height), this.render();
  }
}
const Nt = {
  value: 0,
  fpsLimit: 60,
  isOverLimit: 0
}, Ur = (p) => (p == null ? void 0 : p.reduce((n, A) => n + A, 0)) / p.length;
class ap {
  //
  constructor(n) {
    this.names = [""], this.finished = [], this.paused = !1, this.overClock = !1, this.queryHasResult = !1, this.queryCreated = !1, this.isWebGL2 = !0, this.memAccums = [], this.gpuAccums = [], this.activeAccums = [], this.logsAccums = {
      mem: [],
      gpu: [],
      cpu: [],
      fps: [],
      fpsFixed: []
    }, this.fpsChart = [], this.gpuChart = [], this.cpuChart = [], this.memChart = [], this.paramLogger = () => {
    }, this.glFinish = () => {
    }, this.chartLogger = () => {
    }, this.chartLen = 60, this.logsPerSecond = 10, this.maxMemory = 1500, this.chartHz = 10, this.startCpuProfiling = !1, this.lastCalculateFixed = 0, this.chartFrame = 0, this.gpuTimeProcess = 0, this.chartTime = 0, this.activeQueries = 0, this.circularId = 0, this.detected = 0, this.frameId = 0, this.rafId = 0, this.idleCbId = 0, this.checkQueryId = 0, this.uuid = void 0, this.currentCpu = 0, this.currentMem = 0, this.paramFrame = 0, this.paramTime = 0, this.now = () => {
    }, this.t0 = 0, this.nextFps = (A) => {
      const u = 16.666666666666668, i = u - A.timeRemaining(), t = u * Nt.fpsLimit / 10 / i;
      t < 0 || (Nt.value = t, Nt.isOverLimit < 25 ? Nt.isOverLimit++ : this.perf.overclockingFps = !0);
    }, this.nextFrame = (A) => {
      this.frameId++;
      const u = A || this.now();
      let i = u - this.paramTime, t = 0;
      if (this.frameId <= 1)
        this.paramFrame = this.frameId, this.paramTime = u;
      else if (u >= this.paramTime) {
        this.maxMemory = window.performance.memory ? window.performance.memory.jsHeapSizeLimit / 1048576 : 0;
        const o = this.frameId - this.paramFrame, l = o * 1e3 / i, a = this.perf.overclockingFps ? Nt.value : l;
        if (t = this.isWebGL2 ? this.gpuAccums[0] : this.gpuAccums[0] / i, this.isWebGL2 ? this.gpuAccums[0] = 0 : Promise.all(this.finished).then(() => {
          this.gpuAccums[0] = 0, this.finished = [];
        }), this.currentMem = Math.round(window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize / 1048576 : 0), window.performance && this.startCpuProfiling) {
          window.performance.mark("cpu-finished");
          const h = performance.measure("cpu-duration", "cpu-started", "cpu-finished");
          this.currentCpu = h.duration, this.logsAccums.cpu.push(this.currentCpu), this.startCpuProfiling = !1;
        }
        this.logsAccums.mem.push(this.currentMem), this.logsAccums.fpsFixed.push(l), this.logsAccums.fps.push(a), this.logsAccums.gpu.push(t), this.overClock && typeof window.requestIdleCallback < "u" && (Nt.isOverLimit > 0 && a > l ? Nt.isOverLimit-- : this.perf.overclockingFps && (this.perf.overclockingFps = !1)), u >= this.paramTime + 1e3 / this.logsPerSecond && (this.paramLogger({
          cpu: Ur(this.logsAccums.cpu),
          gpu: Ur(this.logsAccums.gpu),
          mem: Ur(this.logsAccums.mem),
          fps: Ur(this.logsAccums.fps),
          duration: Math.round(i),
          maxMemory: this.maxMemory,
          frameCount: o
        }), this.logsAccums.mem = [], this.logsAccums.fps = [], this.logsAccums.gpu = [], this.logsAccums.cpu = [], this.paramFrame = this.frameId, this.paramTime = u), this.overClock && u - this.lastCalculateFixed >= 2 * 1e3 && (this.lastCalculateFixed = A, Nt.fpsLimit = Math.round(Ur(this.logsAccums.fpsFixed) / 10) * 100, this.perf.fpsLimit = Nt.fpsLimit / 10, this.logsAccums.fpsFixed = [], this.paramFrame = this.frameId, this.paramTime = u);
      }
      if (!this.detected || !this.chartFrame)
        this.chartFrame = this.frameId, this.chartTime = u, this.circularId = 0;
      else {
        const o = u - this.chartTime;
        let l = this.chartHz * o / 1e3;
        for (; --l > 0 && this.detected; ) {
          const h = (this.frameId - this.chartFrame) / o * 1e3, d = this.perf.overclockingFps ? Nt.value : h;
          this.fpsChart[this.circularId % this.chartLen] = d;
          const f = 1e3 / this.currentMem, m = this.currentCpu, v = (this.isWebGL2 ? this.gpuAccums[1] * 2 : Math.round(this.gpuAccums[1] / i * 100)) + 4;
          v > 0 && (this.gpuChart[this.circularId % this.chartLen] = v), m > 0 && (this.cpuChart[this.circularId % this.chartLen] = m), f > 0 && (this.memChart[this.circularId % this.chartLen] = f);
          for (let b = 0; b < this.names.length; b++)
            this.chartLogger({
              i: b,
              data: {
                fps: this.fpsChart,
                gpu: this.gpuChart,
                cpu: this.cpuChart,
                mem: this.memChart
              },
              circularId: this.circularId
            });
          this.circularId++, this.chartFrame = this.frameId, this.chartTime = u;
        }
      }
    }, this.perf = n.perf, this.trackGPU = n.trackGPU, this.overClock = n.overClock, this.logsPerSecond = n.logsPerSecond, this.gl = n.gl, this.paramLogger = n.paramLogger, this.chartLogger = n.chartLogger, window.GLPerf = window.GLPerf || {}, this.fpsChart = new Array(this.chartLen).fill(0), this.gpuChart = new Array(this.chartLen).fill(0), this.cpuChart = new Array(this.chartLen).fill(0), this.memChart = new Array(this.chartLen).fill(0), this.now = () => window.performance && window.performance.now ? window.performance.now() : Date.now(), this.initGpu(), this.is120hz();
  }
  initGpu() {
    this.uuid = Pa.generateUUID(), this.gl && (this.isWebGL2 = !0, this.extension || (this.extension = this.gl.getExtension("EXT_disjoint_timer_query_webgl2")), this.extension === null && (this.isWebGL2 = !1));
  }
  /**
   * 120hz device detection
   */
  is120hz() {
    let n = 0;
    const A = (u) => {
      ++n < 20 ? this.rafId = window.requestAnimationFrame(A) : (this.detected = Math.ceil(1e3 * n / (u - this.t0) / 70), window.cancelAnimationFrame(this.rafId)), this.t0 || (this.t0 = u);
    };
    this.rafId = window.requestAnimationFrame(A);
  }
  /**
   * Explicit UI add
   * @param { string | undefined } name
   */
  addUI(n) {
    this.names.indexOf(n) === -1 && (this.names.push(n), this.gpuAccums.push(0), this.activeAccums.push(!1));
  }
  startGpu() {
    const n = this.gl, A = this.extension;
    if (!(!n || !A) && this.isWebGL2) {
      let u = !1, i, t;
      if (this.query) {
        this.queryHasResult = !1;
        let o = this.query;
        if (u = n.getQueryParameter(o, n.QUERY_RESULT_AVAILABLE), i = n.getParameter(A.GPU_DISJOINT_EXT), u && !i) {
          t = n.getQueryParameter(this.query, n.QUERY_RESULT);
          const l = t * 1e-6;
          (u || i) && (n.deleteQuery(this.query), o = null), u && l > 0 && (i || this.activeAccums.forEach((a, h) => {
            this.gpuAccums[h] = l;
          }));
        }
      }
      (u || !this.query) && (this.queryCreated = !0, this.query = n.createQuery(), n.beginQuery(A.TIME_ELAPSED_EXT, this.query));
    }
  }
  endGpu() {
    const n = this.extension, A = this.gl;
    this.isWebGL2 && this.queryCreated && A.getQuery(n.TIME_ELAPSED_EXT, A.CURRENT_QUERY) && A.endQuery(n.TIME_ELAPSED_EXT);
  }
  /**
   * Begin named measurement
   * @param { string | undefined } name
   */
  begin(n) {
    this.startGpu(), this.updateAccums(n);
  }
  /**
   * End named measure
   * @param { string | undefined } name
   */
  end(n) {
    this.endGpu(), this.updateAccums(n);
  }
  updateAccums(n) {
    let A = this.names.indexOf(n);
    A === -1 && (A = this.names.length, this.addUI(n));
    const u = this.now();
    this.activeAccums[A] = !this.activeAccums[A], this.t0 = u;
  }
}
Wr.prototype.updateMatrixWorld;
Wr.prototype.updateWorldMatrix;
Wr.prototype.updateMatrix;
const _a = ["calls", "triangles", "points", "lines"], ya = ["gpu", "cpu", "mem", "fps"];
class Ap {
  //
  constructor(n) {
    var A, u, i, t, o, l, a, h, d, f, m, v;
    this.gui = new hd.Pane(), this.accumulated = {
      totalFrames: 0,
      log: {
        i: 0,
        maxMemory: 0,
        gpu: 0,
        mem: 0,
        cpu: 0,
        fps: 0,
        duration: 0,
        frameCount: 0
      },
      gl: {
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0,
        counts: 0
      },
      max: {
        log: {
          i: 0,
          maxMemory: 0,
          gpu: 0,
          mem: 0,
          cpu: 0,
          fps: 0,
          duration: 0,
          frameCount: 0
        },
        gl: {
          calls: 0,
          triangles: 0,
          points: 0,
          lines: 0,
          counts: 0
        }
      }
    }, this.renderPassesNumber = 0, this._keypressed = "", this._guiVisible = !0, this.actionToCallUI = "dev", this.keypressHandler = (x) => {
      if (!this.actionToCallUI)
        return;
      this._keypressed += x.key;
      const F = this._keypressed.split("");
      for (; F.length > this.actionToCallUI.length; )
        F.shift();
      F.join("") === this.actionToCallUI && (this._keypressed = "", this.guiVisible = !this.guiVisible);
    }, this.afterRender = () => {
      this._enabled && (this.perfEngine.paused || (this.perfEngine.nextFrame(window.performance.now()), this.perfEngine.overClock && typeof window.requestIdleCallback < "u" && (this.perfEngine.idleCbId = requestIdleCallback(this.perfEngine.nextFps))), this.perfEngine && this.perfEngine.end("profiler"), window.performance && (window.performance.mark("cpu-started"), this.perfEngine.startCpuProfiling = !0), this.deepAnalyze);
    }, this.deepAnalyze = (A = n.deepAnalyze) != null ? A : !1, this.threeRenderer = n.renderer, this.ui = new op({ perf: this, domElement: n.domElement, backgroundOpacity: n.backgroundOpacity }), this._visible = (u = n.visible) != null ? u : !0, this._enabled = (i = n.enabled) != null ? i : !0, this.scale = (t = n.scale) != null ? t : 1, this.anchorX = (o = n.anchorX) != null ? o : "left", this.anchorY = (l = n.anchorY) != null ? l : "top", this.showGraph = (a = n.showGraph) != null ? a : !0, this.memory = (h = n.memory) != null ? h : !0, this.actionToCallUI = (d = n.actionToCallUI) != null ? d : "", this.guiVisible = (f = n.guiVisible) != null ? f : !1, this.gui.element.parentElement.style.width = "300px", window.addEventListener("keypress", this.keypressHandler);
    const b = (m = n.overClock) != null ? m : !0;
    this.perfEngine = new ap({
      perf: this,
      trackGPU: !0,
      overClock: b,
      chartLen: 120,
      // chart ? chart.length : 120,
      chartHz: 60,
      // chart ? chart.hz : 60,
      logsPerSecond: (v = n.logsPerSecond) != null ? v : 10,
      gl: n.renderer.getContext(),
      chartLogger: (x) => {
        this.chart = x;
      },
      paramLogger: (x) => {
        if (!this._enabled)
          return;
        const F = {
          maxMemory: x.maxMemory,
          gpu: x.gpu,
          cpu: x.cpu,
          mem: x.mem,
          fps: x.fps,
          totalTime: x.duration,
          frameCount: x.frameCount
        };
        this.log = F;
        const T = this.accumulated, L = this.threeRenderer.info.render;
        T.totalFrames++, T.gl.calls += L.calls, T.gl.triangles += L.triangles, T.gl.points += L.points, T.gl.lines += L.lines, T.log.gpu += x.gpu, T.log.cpu += x.cpu, T.log.mem += x.mem, T.log.fps += x.fps;
        for (let W = 0; W < _a.length; W++) {
          const J = _a[W], ie = L[J];
          ie > T.max.gl[J] && (T.max.gl[J] = ie);
        }
        for (let W = 0; W < ya.length; W++) {
          const J = ya[W], ie = x[J];
          ie > T.max.log[J] && (T.max.log[J] = ie);
        }
        this.accumulated = T, this.ui.update();
      }
    });
    const C = n.renderer.getContext();
    let E = null, y = null;
    const I = C.getExtension("WEBGL_debug_renderer_info"), Q = C.getParameter(C.VERSION);
    I != null && (E = C.getParameter(I.UNMASKED_RENDERER_WEBGL), y = C.getParameter(I.UNMASKED_VENDOR_WEBGL)), y || (y = "Unknown vendor"), E || (E = C.getParameter(C.RENDERER)), this.startTime = performance.now(), this.infos = {
      version: Q,
      renderer: E,
      vendor: y
    }, this.rendererRender = this.threeRenderer.render, this.threeRenderer.info.autoReset = !1, this.threeRenderer.render = (x, F) => {
      this.renderPassesNumber++, this.rendererRender.call(this.threeRenderer, x, F);
    }, this.guiFolder = this.gui.addFolder({ title: "Settings" });
    const _ = this.guiFolder.addFolder({ title: "ThreePerf" });
    _.addInput(this, "visible", { label: "Visible" }), _.addInput(this, "enabled", { label: "Enabled" }), _.addInput(this, "anchorX", { label: "xAnchor", options: { left: "left", right: "right" } }), _.addInput(this, "anchorY", { label: "yAnchor", options: { top: "top", bottom: "bottom" } }), _.addInput(this, "backgroundOpacity", { label: "Background opacity", min: 0, max: 1, step: 0.1 }), _.addInput(this, "memory", { label: "Memory" }), _.addInput(this, "showGraph", { label: "Charts" }), _.addInput(this, "scale", { label: "Scale", min: 0.1, max: 2, step: 0.1 }), _.addInput(this, "logsPerSecond", { label: "LogsPerSecond", min: 1, max: 60, step: 1 }), console.log("ThreePerf inited.");
  }
  begin() {
    this.perfEngine.begin("profiler");
  }
  end() {
    this.afterRender(), this.renderPassesNumber = 0, this.threeRenderer.info.reset();
  }
  dispose() {
    var n;
    this.ui.dispose(), (n = this.gui.element.parentElement) == null || n.remove(), window.removeEventListener("keypress", this.keypressHandler);
  }
  //
  get enabled() {
    return this._enabled;
  }
  set enabled(n) {
    this._enabled = n;
  }
  get visible() {
    return this._visible;
  }
  set visible(n) {
    this._visible = n, this.ui.toggleVisibility(n);
  }
  get guiVisible() {
    return this._guiVisible;
  }
  set guiVisible(n) {
    this._guiVisible = n, this.gui.element.parentElement.style.display = n ? "block" : "none";
  }
  get anchorX() {
    return this._anchorX;
  }
  set anchorX(n) {
    this._anchorX = n, this._anchorX === "left" ? (this.ui.wrapper.style.left = "0", this.ui.wrapper.style.right = "") : (this.ui.wrapper.style.left = "", this.ui.wrapper.style.right = "0");
  }
  get anchorY() {
    return this._anchorY;
  }
  set anchorY(n) {
    this._anchorY = n, this._anchorY === "top" ? (this.ui.wrapper.style.top = "0", this.ui.wrapper.style.bottom = "") : (this.ui.wrapper.style.top = "", this.ui.wrapper.style.bottom = "0");
  }
  get showGraph() {
    return this._showGraph;
  }
  set showGraph(n) {
    this._showGraph = n, this.ui.toggleCharts(n);
  }
  get memory() {
    return this._memory;
  }
  set memory(n) {
    this._memory = n, this.ui.toggleMemoryInfo(n);
  }
  get scale() {
    return this._scale;
  }
  set scale(n) {
    this._scale = n, this.ui.setScale(n);
  }
  get logsPerSecond() {
    return this.perfEngine.logsPerSecond;
  }
  set logsPerSecond(n) {
    this.perfEngine.logsPerSecond = n;
  }
  get backgroundOpacity() {
    return this.ui._backgroundOpacity;
  }
  set backgroundOpacity(n) {
    this.ui.setBackgroundOpacity(n);
  }
}
var lp = Object.defineProperty, cp = Object.getOwnPropertyDescriptor, up = (p, n, A, u) => {
  for (var i = u > 1 ? void 0 : u ? cp(n, A) : n, t = p.length - 1, o; t >= 0; t--)
    (o = p[t]) && (i = (u ? o(n, A, i) : o(i)) || i);
  return u && i && lp(n, A, i), i;
};
let Qa = class {
  constructor(p, n, A, u, i, t) {
    tt(this, "deltaTime", 0);
    tt(this, "clock", new Uu());
    tt(this, "timeScaleController");
    tt(this, "perf", null);
    tt(this, "perfomanceFolder");
    tt(this, "isPerfEnabled", !1);
    this.threeJSBase = p, this.commonDebugOpt = n, this.updatables = A, this.allPassedTime = u, this.gui = i, this.IS_PROD = t, ss.ticker.remove(ss.updateRoot), this.changeSpeed = this.changeSpeed.bind(this), t || (this.perf = new Ap({
      anchorY: "bottom",
      anchorX: "left",
      domElement: document.body,
      renderer: this.threeJSBase.renderer,
      memory: !0,
      enabled: this.commonDebugOpt.perfDebug
    }), this.isPerfEnabled = this.commonDebugOpt.perfDebug), this.perfomanceFolder = ld(this.gui, "Performance"), this.timeScaleController = this.addDebugGUI(this.perfomanceFolder)[0], t || window.addEventListener("keydown", this.changeSpeed);
  }
  get getDeltaTime() {
    return this.deltaTime;
  }
  handleUpdate() {
    this.deltaTime = this.clock.getDelta() * this.commonDebugOpt.timeScale, this.allPassedTime.value += this.deltaTime, Fs.update(this.deltaTime), ss.updateRoot(this.allPassedTime.value), this.updatables.forEach((p) => {
      p.update(this.deltaTime, this.threeJSBase.camera);
    });
  }
  addDebugGUI(p) {
    return [
      p.add(this.commonDebugOpt, "timeScale", 0.1, 3).name("Time Scale"),
      p.add(this.commonDebugOpt, "perfDebug").name("Statistics").onChange((n) => {
        this.perf && (this.perf.enabled = n, this.perf.visible = n, this.isPerfEnabled = n);
      })
    ];
  }
  changeSpeed(p) {
    if (p.key === "+" || p.key === "-") {
      const n = p.key === "+" ? 0.1 : -0.1;
      if (this.commonDebugOpt.timeScale + n < 0) return;
      if (this.commonDebugOpt.timeScale + n > 3) return;
      this.commonDebugOpt.timeScale += n, this.timeScaleController.updateDisplay();
    }
  }
};
Qa = up([
  Ka()
], Qa);
class bp {
  constructor(...n) {
    tt(this, "args");
    this.args = n;
  }
}
function Bp(p, n) {
  const A = (u) => {
    n(...u.detail);
  };
  return document.addEventListener(p.name, A, { passive: !0 }), {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(p.name, A)
  };
}
function _p(p) {
  const n = new CustomEvent(p.constructor.name, {
    detail: p.args
  });
  document.dispatchEvent(n);
}
export {
  Aa as ArchiveExtractor,
  ir as BASETYPES,
  Qa as BaseUpdateHandler,
  bp as EventBase,
  sd as ModelsResources,
  Rs as ResourceLoader,
  Fs as TaskManager,
  la as TexturesResources,
  Kr as ThreeJSLoaderWrapper,
  gp as buildBaseDIModule,
  ld as findGUIFolder,
  mp as getConfigJSON,
  Ep as getLengthVector,
  Ip as getSpriteOffset,
  vp as lerpingRotation,
  wp as mapRange,
  _p as publish,
  Cp as sleep,
  Bp as subscribe
};
