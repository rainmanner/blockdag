(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [740], {
        94184: function(t, e) {
            var r;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var r = arguments[e];
                        if (r) {
                            var a = typeof r;
                            if ("string" === a || "number" === a) t.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var i = o.apply(null, r);
                                    i && t.push(i)
                                }
                            } else if ("object" === a) {
                                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                    t.push(r.toString());
                                    continue
                                }
                                for (var d in r) n.call(r, d) && r[d] && t.push(d)
                            }
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 !== (r = (function() {
                    return o
                }).apply(e, [])) && (t.exports = r)
            }()
        },
        76489: function(t, e) {
            "use strict";
            /*!
             * cookie
             * Copyright(c) 2012-2014 Roman Shtylman
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */
            e.parse = function(t, e) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                for (var n = {}, o = t.split(";"), a = (e || {}).decode || r, i = 0; i < o.length; i++) {
                    var d = o[i],
                        u = d.indexOf("=");
                    if (!(u < 0)) {
                        var l = d.substring(0, u).trim();
                        if (void 0 == n[l]) {
                            var c = d.substring(u + 1, d.length).trim();
                            '"' === c[0] && (c = c.slice(1, -1)), n[l] = function(t, e) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return t
                                }
                            }(c, a)
                        }
                    }
                }
                return n
            }, e.serialize = function(t, e, r) {
                var a = r || {},
                    i = a.encode || n;
                if ("function" != typeof i) throw TypeError("option encode is invalid");
                if (!o.test(t)) throw TypeError("argument name is invalid");
                var d = i(e);
                if (d && !o.test(d)) throw TypeError("argument val is invalid");
                var u = t + "=" + d;
                if (null != a.maxAge) {
                    var l = a.maxAge - 0;
                    if (isNaN(l) || !isFinite(l)) throw TypeError("option maxAge is invalid");
                    u += "; Max-Age=" + Math.floor(l)
                }
                if (a.domain) {
                    if (!o.test(a.domain)) throw TypeError("option domain is invalid");
                    u += "; Domain=" + a.domain
                }
                if (a.path) {
                    if (!o.test(a.path)) throw TypeError("option path is invalid");
                    u += "; Path=" + a.path
                }
                if (a.expires) {
                    if ("function" != typeof a.expires.toUTCString) throw TypeError("option expires is invalid");
                    u += "; Expires=" + a.expires.toUTCString()
                }
                if (a.httpOnly && (u += "; HttpOnly"), a.secure && (u += "; Secure"), a.sameSite) switch ("string" == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite) {
                    case !0:
                    case "strict":
                        u += "; SameSite=Strict";
                        break;
                    case "lax":
                        u += "; SameSite=Lax";
                        break;
                    case "none":
                        u += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return u
            };
            var r = decodeURIComponent,
                n = encodeURIComponent,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        82175: function(t, e, r) {
            "use strict";
            r.d(e, {
                J9: function() {
                    return e7
                }
            });
            var n, o, a, i = function(t) {
                    var e;
                    return !!t && "object" == typeof t && "[object RegExp]" !== (e = Object.prototype.toString.call(t)) && "[object Date]" !== e && t.$$typeof !== d
                },
                d = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function u(t, e) {
                return !1 !== e.clone && e.isMergeableObject(t) ? c(Array.isArray(t) ? [] : {}, t, e) : t
            }

            function l(t, e, r) {
                return t.concat(e).map(function(t) {
                    return u(t, r)
                })
            }

            function c(t, e, r) {
                (r = r || {}).arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || i;
                var n, o, a = Array.isArray(e);
                return a !== Array.isArray(t) ? u(e, r) : a ? r.arrayMerge(t, e, r) : (o = {}, (n = r).isMergeableObject(t) && Object.keys(t).forEach(function(e) {
                    o[e] = u(t[e], n)
                }), Object.keys(e).forEach(function(r) {
                    n.isMergeableObject(e[r]) && t[r] ? o[r] = c(t[r], e[r], n) : o[r] = u(e[r], n)
                }), o)
            }
            c.all = function(t, e) {
                if (!Array.isArray(t)) throw Error("first argument should be an array");
                return t.reduce(function(t, r) {
                    return c(t, r, e)
                }, {})
            };
            var s = c,
                f = "object" == typeof global && global && global.Object === Object && global,
                $ = "object" == typeof self && self && self.Object === Object && self,
                p = f || $ || Function("return this")(),
                h = p.Symbol,
                y = Object.prototype,
                m = y.hasOwnProperty,
                g = y.toString,
                v = h ? h.toStringTag : void 0,
                b = function(t) {
                    var e = m.call(t, v),
                        r = t[v];
                    try {
                        t[v] = void 0;
                        var n = !0
                    } catch (t) {}
                    var o = g.call(t);
                    return n && (e ? t[v] = r : delete t[v]), o
                },
                C = Object.prototype.toString,
                O = h ? h.toStringTag : void 0,
                S = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : O && O in Object(t) ? b(t) : C.call(t)
                },
                P = function(t, e) {
                    return function(r) {
                        return t(e(r))
                    }
                },
                w = P(Object.getPrototypeOf, Object),
                N = function(t) {
                    return null != t && "object" == typeof t
                },
                j = Object.prototype,
                E = Function.prototype.toString,
                x = j.hasOwnProperty,
                I = E.call(Object),
                A = function(t) {
                    if (!N(t) || "[object Object]" != S(t)) return !1;
                    var e = w(t);
                    if (null === e) return !0;
                    var r = x.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && E.call(r) == I
                },
                _ = r(67294),
                T = r(69590),
                k = r.n(T),
                M = function(t, e) {},
                R = function(t, e) {
                    return t === e || t != t && e != e
                },
                F = function(t, e) {
                    for (var r = t.length; r--;)
                        if (R(t[r][0], e)) return r;
                    return -1
                },
                D = Array.prototype.splice;

            function L(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            L.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, L.prototype.delete = function(t) {
                var e = this.__data__,
                    r = F(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : D.call(e, r, 1), --this.size, !0)
            }, L.prototype.get = function(t) {
                var e = this.__data__,
                    r = F(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, L.prototype.has = function(t) {
                return F(this.__data__, t) > -1
            }, L.prototype.set = function(t, e) {
                var r = this.__data__,
                    n = F(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            };
            var B = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                },
                U = function(t) {
                    if (!B(t)) return !1;
                    var e = S(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                },
                G = p["__core-js_shared__"],
                V = (n = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                H = Function.prototype.toString,
                z = function(t) {
                    if (null != t) {
                        try {
                            return H.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                },
                Z = /^\[object .+?Constructor\]$/,
                W = Object.prototype,
                K = Function.prototype.toString,
                q = W.hasOwnProperty,
                Y = RegExp("^" + K.call(q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                J = function(t, e) {
                    var r, n = null == t ? void 0 : t[e];
                    return B(r = n) && (!V || !(V in r)) && (U(r) ? Y : Z).test(z(r)) ? n : void 0
                },
                Map = J(p, "Map"),
                X = J(Object, "create"),
                Q = Object.prototype.hasOwnProperty,
                tt = Object.prototype.hasOwnProperty;

            function te(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            te.prototype.clear = function() {
                this.__data__ = X ? X(null) : {}, this.size = 0
            }, te.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, te.prototype.get = function(t) {
                var e = this.__data__;
                if (X) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return Q.call(e, t) ? e[t] : void 0
            }, te.prototype.has = function(t) {
                var e = this.__data__;
                return X ? void 0 !== e[t] : tt.call(e, t)
            }, te.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = X && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };
            var tr = function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                },
                tn = function(t, e) {
                    var r = t.__data__;
                    return tr(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                };

            function to(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function ta(t) {
                var e = this.__data__ = new L(t);
                this.size = e.size
            }
            to.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new te,
                    map: new(Map || L),
                    string: new te
                }
            }, to.prototype.delete = function(t) {
                var e = tn(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, to.prototype.get = function(t) {
                return tn(this, t).get(t)
            }, to.prototype.has = function(t) {
                return tn(this, t).has(t)
            }, to.prototype.set = function(t, e) {
                var r = tn(this, t),
                    n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
            }, ta.prototype.clear = function() {
                this.__data__ = new L, this.size = 0
            }, ta.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, ta.prototype.get = function(t) {
                return this.__data__.get(t)
            }, ta.prototype.has = function(t) {
                return this.__data__.has(t)
            }, ta.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof L) {
                    var n = r.__data__;
                    if (!Map || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new to(n)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var ti = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
                    return t
                },
                td = function() {
                    try {
                        var t = J(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }(),
                tu = function(t, e, r) {
                    "__proto__" == e && td ? td(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r
                },
                tl = Object.prototype.hasOwnProperty,
                tc = function(t, e, r) {
                    var n = t[e];
                    tl.call(t, e) && R(n, r) && (void 0 !== r || e in t) || tu(t, e, r)
                },
                ts = function(t, e, r, n) {
                    var o = !r;
                    r || (r = {});
                    for (var a = -1, i = e.length; ++a < i;) {
                        var d = e[a],
                            u = n ? n(r[d], t[d], d, r, t) : void 0;
                        void 0 === u && (u = t[d]), o ? tu(r, d, u) : tc(r, d, u)
                    }
                    return r
                },
                tf = function(t, e) {
                    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                    return n
                },
                t$ = function(t) {
                    return N(t) && "[object Arguments]" == S(t)
                },
                tp = Object.prototype,
                th = tp.hasOwnProperty,
                ty = tp.propertyIsEnumerable,
                tm = t$(function() {
                    return arguments
                }()) ? t$ : function(t) {
                    return N(t) && th.call(t, "callee") && !ty.call(t, "callee")
                },
                tg = Array.isArray,
                tv = "object" == typeof exports && exports && !exports.nodeType && exports,
                tb = tv && "object" == typeof module && module && !module.nodeType && module,
                tC = tb && tb.exports === tv ? p.Buffer : void 0,
                tO = (tC ? tC.isBuffer : void 0) || function() {
                    return !1
                },
                tS = /^(?:0|[1-9]\d*)$/,
                tP = function(t, e) {
                    var r = typeof t;
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && tS.test(t)) && t > -1 && t % 1 == 0 && t < e
                },
                tw = function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                },
                tN = {};
            tN["[object Float32Array]"] = tN["[object Float64Array]"] = tN["[object Int8Array]"] = tN["[object Int16Array]"] = tN["[object Int32Array]"] = tN["[object Uint8Array]"] = tN["[object Uint8ClampedArray]"] = tN["[object Uint16Array]"] = tN["[object Uint32Array]"] = !0, tN["[object Arguments]"] = tN["[object Array]"] = tN["[object ArrayBuffer]"] = tN["[object Boolean]"] = tN["[object DataView]"] = tN["[object Date]"] = tN["[object Error]"] = tN["[object Function]"] = tN["[object Map]"] = tN["[object Number]"] = tN["[object Object]"] = tN["[object RegExp]"] = tN["[object Set]"] = tN["[object String]"] = tN["[object WeakMap]"] = !1;
            var tj = function(t) {
                    return function(e) {
                        return t(e)
                    }
                },
                tE = "object" == typeof exports && exports && !exports.nodeType && exports,
                tx = tE && "object" == typeof module && module && !module.nodeType && module,
                tI = tx && tx.exports === tE && f.process,
                tA = function() {
                    try {
                        var t = tx && tx.require && tx.require("util").types;
                        if (t) return t;
                        return tI && tI.binding && tI.binding("util")
                    } catch (t) {}
                }(),
                t_ = tA && tA.isTypedArray,
                tT = t_ ? tj(t_) : function(t) {
                    return N(t) && tw(t.length) && !!tN[S(t)]
                },
                tk = Object.prototype.hasOwnProperty,
                tM = function(t, e) {
                    var r = tg(t),
                        n = !r && tm(t),
                        o = !r && !n && tO(t),
                        a = !r && !n && !o && tT(t),
                        i = r || n || o || a,
                        d = i ? tf(t.length, String) : [],
                        u = d.length;
                    for (var l in t)(e || tk.call(t, l)) && !(i && ("length" == l || o && ("offset" == l || "parent" == l) || a && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || tP(l, u))) && d.push(l);
                    return d
                },
                tR = Object.prototype,
                tF = function(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || tR)
                },
                tD = P(Object.keys, Object),
                tL = Object.prototype.hasOwnProperty,
                tB = function(t) {
                    if (!tF(t)) return tD(t);
                    var e = [];
                    for (var r in Object(t)) tL.call(t, r) && "constructor" != r && e.push(r);
                    return e
                },
                tU = function(t) {
                    return null != t && tw(t.length) && !U(t)
                },
                tG = function(t) {
                    return tU(t) ? tM(t) : tB(t)
                },
                tV = function(t) {
                    var e = [];
                    if (null != t)
                        for (var r in Object(t)) e.push(r);
                    return e
                },
                tH = Object.prototype.hasOwnProperty,
                tz = function(t) {
                    if (!B(t)) return tV(t);
                    var e = tF(t),
                        r = [];
                    for (var n in t) "constructor" == n && (e || !tH.call(t, n)) || r.push(n);
                    return r
                },
                tZ = function(t) {
                    return tU(t) ? tM(t, !0) : tz(t)
                },
                tW = "object" == typeof exports && exports && !exports.nodeType && exports,
                tK = tW && "object" == typeof module && module && !module.nodeType && module,
                tq = tK && tK.exports === tW ? p.Buffer : void 0,
                tY = tq ? tq.allocUnsafe : void 0,
                tJ = function(t, e) {
                    if (e) return t.slice();
                    var r = t.length,
                        n = tY ? tY(r) : new t.constructor(r);
                    return t.copy(n), n
                },
                tX = function(t, e) {
                    var r = -1,
                        n = t.length;
                    for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
                    return e
                },
                tQ = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++r < n;) {
                        var i = t[r];
                        e(i, r, t) && (a[o++] = i)
                    }
                    return a
                },
                t0 = function() {
                    return []
                },
                t1 = Object.prototype.propertyIsEnumerable,
                t2 = Object.getOwnPropertySymbols,
                t3 = t2 ? function(t) {
                    return null == t ? [] : tQ(t2(t = Object(t)), function(e) {
                        return t1.call(t, e)
                    })
                } : t0,
                t4 = function(t, e) {
                    for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                    return t
                },
                t9 = Object.getOwnPropertySymbols ? function(t) {
                    for (var e = []; t;) t4(e, t3(t)), t = w(t);
                    return e
                } : t0,
                t8 = function(t, e, r) {
                    var n = e(t);
                    return tg(t) ? n : t4(n, r(t))
                },
                t6 = function(t) {
                    return t8(t, tG, t3)
                },
                t5 = function(t) {
                    return t8(t, tZ, t9)
                },
                DataView = J(p, "DataView"),
                t7 = J(p, "Promise"),
                Set = J(p, "Set"),
                et = J(p, "WeakMap"),
                ee = "[object Map]",
                er = "[object Promise]",
                en = "[object Set]",
                eo = "[object WeakMap]",
                ea = "[object DataView]",
                ei = z(DataView),
                ed = z(Map),
                eu = z(t7),
                el = z(Set),
                ec = z(et),
                es = S;
            (DataView && es(new DataView(new ArrayBuffer(1))) != ea || Map && es(new Map) != ee || t7 && es(t7.resolve()) != er || Set && es(new Set) != en || et && es(new et) != eo) && (es = function(t) {
                var e = S(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? z(r) : "";
                if (n) switch (n) {
                    case ei:
                        return ea;
                    case ed:
                        return ee;
                    case eu:
                        return er;
                    case el:
                        return en;
                    case ec:
                        return eo
                }
                return e
            });
            var ef = es,
                e$ = Object.prototype.hasOwnProperty,
                ep = function(t) {
                    var e = t.length,
                        r = new t.constructor(e);
                    return e && "string" == typeof t[0] && e$.call(t, "index") && (r.index = t.index, r.input = t.input), r
                },
                Uint8Array = p.Uint8Array,
                eh = function(t) {
                    var e = new t.constructor(t.byteLength);
                    return new Uint8Array(e).set(new Uint8Array(t)), e
                },
                ey = function(t, e) {
                    var r = e ? eh(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.byteLength)
                },
                em = /\w*$/,
                eg = function(t) {
                    var e = new t.constructor(t.source, em.exec(t));
                    return e.lastIndex = t.lastIndex, e
                },
                ev = h ? h.prototype : void 0,
                eb = ev ? ev.valueOf : void 0,
                eC = function(t, e) {
                    var r = e ? eh(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.length)
                },
                eO = function(t, e, r) {
                    var n = t.constructor;
                    switch (e) {
                        case "[object ArrayBuffer]":
                            return eh(t);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new n(+t);
                        case "[object DataView]":
                            return ey(t, r);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return eC(t, r);
                        case "[object Map]":
                        case "[object Set]":
                            return new n;
                        case "[object Number]":
                        case "[object String]":
                            return new n(t);
                        case "[object RegExp]":
                            return eg(t);
                        case "[object Symbol]":
                            return eb ? Object(eb.call(t)) : {}
                    }
                },
                eS = Object.create,
                eP = function() {
                    function t() {}
                    return function(e) {
                        if (!B(e)) return {};
                        if (eS) return eS(e);
                        t.prototype = e;
                        var r = new t;
                        return t.prototype = void 0, r
                    }
                }(),
                ew = tA && tA.isMap,
                eN = ew ? tj(ew) : function(t) {
                    return N(t) && "[object Map]" == ef(t)
                },
                ej = tA && tA.isSet,
                eE = ej ? tj(ej) : function(t) {
                    return N(t) && "[object Set]" == ef(t)
                },
                ex = "[object Arguments]",
                eI = "[object Function]",
                eA = "[object Object]",
                e_ = {};
            e_[ex] = e_["[object Array]"] = e_["[object ArrayBuffer]"] = e_["[object DataView]"] = e_["[object Boolean]"] = e_["[object Date]"] = e_["[object Float32Array]"] = e_["[object Float64Array]"] = e_["[object Int8Array]"] = e_["[object Int16Array]"] = e_["[object Int32Array]"] = e_["[object Map]"] = e_["[object Number]"] = e_[eA] = e_["[object RegExp]"] = e_["[object Set]"] = e_["[object String]"] = e_["[object Symbol]"] = e_["[object Uint8Array]"] = e_["[object Uint8ClampedArray]"] = e_["[object Uint16Array]"] = e_["[object Uint32Array]"] = !0, e_["[object Error]"] = e_[eI] = e_["[object WeakMap]"] = !1;
            var eT = function t(e, r, n, o, a, i) {
                    var d, u = 1 & r,
                        l = 2 & r,
                        c = 4 & r;
                    if (n && (d = a ? n(e, o, a, i) : n(e)), void 0 !== d) return d;
                    if (!B(e)) return e;
                    var s = tg(e);
                    if (s) {
                        if (d = ep(e), !u) return tX(e, d)
                    } else {
                        var f, $, p, h, y = ef(e),
                            m = y == eI || "[object GeneratorFunction]" == y;
                        if (tO(e)) return tJ(e, u);
                        if (y == eA || y == ex || m && !a) {
                            if (d = l || m ? {} : "function" != typeof e.constructor || tF(e) ? {} : eP(w(e)), !u) return l ? ($ = (f = d) && ts(e, tZ(e), f), ts(e, t9(e), $)) : (h = (p = d) && ts(e, tG(e), p), ts(e, t3(e), h))
                        } else {
                            if (!e_[y]) return a ? e : {};
                            d = eO(e, y, u)
                        }
                    }
                    i || (i = new ta);
                    var g = i.get(e);
                    if (g) return g;
                    i.set(e, d), eE(e) ? e.forEach(function(o) {
                        d.add(t(o, r, n, o, e, i))
                    }) : eN(e) && e.forEach(function(o, a) {
                        d.set(a, t(o, r, n, a, e, i))
                    });
                    var v = c ? l ? t5 : t6 : l ? tZ : tG,
                        b = s ? void 0 : v(e);
                    return ti(b || e, function(o, a) {
                        b && (o = e[a = o]), tc(d, a, t(o, r, n, a, e, i))
                    }), d
                },
                ek = function(t) {
                    return eT(t, 4)
                },
                eM = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
                    return o
                },
                eR = function(t) {
                    return "symbol" == typeof t || N(t) && "[object Symbol]" == S(t)
                };

            function eF(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = e ? e.apply(this, n) : n[0],
                        a = r.cache;
                    if (a.has(o)) return a.get(o);
                    var i = t.apply(this, n);
                    return r.cache = a.set(o, i) || a, i
                };
                return r.cache = new(eF.Cache || to), r
            }
            eF.Cache = to;
            var eD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                eL = /\\(\\)?/g,
                eB = (a = (o = eF(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(eD, function(t, r, n, o) {
                        e.push(n ? o.replace(eL, "$1") : r || t)
                    }), e
                }, function(t) {
                    return 500 === a.size && a.clear(), t
                })).cache, o),
                eU = 1 / 0,
                eG = function(t) {
                    if ("string" == typeof t || eR(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -eU ? "-0" : e
                },
                eV = 1 / 0,
                eH = h ? h.prototype : void 0,
                ez = eH ? eH.toString : void 0,
                eZ = function t(e) {
                    if ("string" == typeof e) return e;
                    if (tg(e)) return eM(e, t) + "";
                    if (eR(e)) return ez ? ez.call(e) : "";
                    var r = e + "";
                    return "0" == r && 1 / e == -eV ? "-0" : r
                },
                eW = function(t) {
                    return tg(t) ? eM(t, eG) : eR(t) ? [t] : tX(eB(null == t ? "" : eZ(t)))
                };

            function eK() {
                return (eK = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eq(t, e) {
                if (null == t) return {};
                var r, n, o = {},
                    a = Object.keys(t);
                for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                return o
            }

            function eY(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            r(8679);
            var eJ = (0, _.createContext)(void 0);
            eJ.displayName = "FormikContext";
            var eX = eJ.Provider,
                eQ = (eJ.Consumer, function(t) {
                    return Array.isArray(t) && 0 === t.length
                }),
                e0 = function(t) {
                    return "function" == typeof t
                },
                e1 = function(t) {
                    return null !== t && "object" == typeof t
                },
                e2 = function(t) {
                    return "[object String]" === Object.prototype.toString.call(t)
                },
                e3 = function(t) {
                    return 0 === _.Children.count(t)
                },
                e4 = function(t) {
                    return e1(t) && e0(t.then)
                };

            function e9(t, e, r, n) {
                void 0 === n && (n = 0);
                for (var o = eW(e); t && n < o.length;) t = t[o[n++]];
                return n === o.length || t ? void 0 === t ? r : t : r
            }

            function e8(t, e, r) {
                for (var n = ek(t), o = n, a = 0, i = eW(e); a < i.length - 1; a++) {
                    var d = i[a],
                        u = e9(t, i.slice(0, a + 1));
                    if (u && (e1(u) || Array.isArray(u))) o = o[d] = ek(u);
                    else {
                        var l = i[a + 1];
                        o = o[d] = String(Math.floor(Number(l))) === l && Number(l) >= 0 ? [] : {}
                    }
                }
                return (0 === a ? t : o)[i[a]] === r ? t : (void 0 === r ? delete o[i[a]] : o[i[a]] = r, 0 === a && void 0 === r && delete n[i[a]], n)
            }
            var e6 = {},
                e5 = {};

            function e7(t) {
                var e, r, n, o, a, i, d, u, l, c, f, $, p, h, y, m, g, v, b, C, O, S, P, w, N, j, E, x, I, T, M, R, F, D, L, B, U, G, V, H, z, Z, W, K, q, Y, J, X, Q, tt, te, tr, tn, to, ta, ti = (r = void 0 === (e = t.validateOnChange) || e, o = void 0 === (n = t.validateOnBlur) || n, i = void 0 !== (a = t.validateOnMount) && a, d = t.isInitialValid, l = void 0 !== (u = t.enableReinitialize) && u, c = t.onSubmit, f = eq(t, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), $ = eK({
                        validateOnChange: r,
                        validateOnBlur: o,
                        validateOnMount: i,
                        onSubmit: c
                    }, f), p = (0, _.useRef)($.initialValues), h = (0, _.useRef)($.initialErrors || e6), y = (0, _.useRef)($.initialTouched || e5), m = (0, _.useRef)($.initialStatus), g = (0, _.useRef)(!1), v = (0, _.useRef)({}), (0, _.useEffect)(function() {
                        return g.current = !0,
                            function() {
                                g.current = !1
                            }
                    }, []), b = (0, _.useState)(0)[1], O = (C = (0, _.useRef)({
                        values: $.initialValues,
                        errors: $.initialErrors || e6,
                        touched: $.initialTouched || e5,
                        status: $.initialStatus,
                        isSubmitting: !1,
                        isValidating: !1,
                        submitCount: 0
                    })).current, S = (0, _.useCallback)(function(t) {
                        var e = C.current;
                        C.current = function(t, e) {
                            switch (e.type) {
                                case "SET_VALUES":
                                    return eK({}, t, {
                                        values: e.payload
                                    });
                                case "SET_TOUCHED":
                                    return eK({}, t, {
                                        touched: e.payload
                                    });
                                case "SET_ERRORS":
                                    if (k()(t.errors, e.payload)) return t;
                                    return eK({}, t, {
                                        errors: e.payload
                                    });
                                case "SET_STATUS":
                                    return eK({}, t, {
                                        status: e.payload
                                    });
                                case "SET_ISSUBMITTING":
                                    return eK({}, t, {
                                        isSubmitting: e.payload
                                    });
                                case "SET_ISVALIDATING":
                                    return eK({}, t, {
                                        isValidating: e.payload
                                    });
                                case "SET_FIELD_VALUE":
                                    return eK({}, t, {
                                        values: e8(t.values, e.payload.field, e.payload.value)
                                    });
                                case "SET_FIELD_TOUCHED":
                                    return eK({}, t, {
                                        touched: e8(t.touched, e.payload.field, e.payload.value)
                                    });
                                case "SET_FIELD_ERROR":
                                    return eK({}, t, {
                                        errors: e8(t.errors, e.payload.field, e.payload.value)
                                    });
                                case "RESET_FORM":
                                    return eK({}, t, e.payload);
                                case "SET_FORMIK_STATE":
                                    return e.payload(t);
                                case "SUBMIT_ATTEMPT":
                                    return eK({}, t, {
                                        touched: function t(e, r, n, o) {
                                            void 0 === n && (n = new WeakMap), void 0 === o && (o = {});
                                            for (var a = 0, i = Object.keys(e); a < i.length; a++) {
                                                var d = i[a],
                                                    u = e[d];
                                                e1(u) ? n.get(u) || (n.set(u, !0), o[d] = Array.isArray(u) ? [] : {}, t(u, r, n, o[d])) : o[d] = r
                                            }
                                            return o
                                        }(t.values, !0),
                                        isSubmitting: !0,
                                        submitCount: t.submitCount + 1
                                    });
                                case "SUBMIT_FAILURE":
                                case "SUBMIT_SUCCESS":
                                    return eK({}, t, {
                                        isSubmitting: !1
                                    });
                                default:
                                    return t
                            }
                        }(e, t), e !== C.current && b(function(t) {
                            return t + 1
                        })
                    }, []), P = (0, _.useCallback)(function(t, e) {
                        return new Promise(function(r, n) {
                            var o = $.validate(t, e);
                            null == o ? r(e6) : e4(o) ? o.then(function(t) {
                                r(t || e6)
                            }, function(t) {
                                n(t)
                            }) : r(o)
                        })
                    }, [$.validate]), w = (0, _.useCallback)(function(t, e) {
                        var r, n, o = $.validationSchema,
                            a = e0(o) ? o(e) : o,
                            i = e && a.validateAt ? a.validateAt(e, t) : (void 0 === r && (r = !1), n = function t(e) {
                                var r = Array.isArray(e) ? [] : {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        var o = String(n);
                                        !0 === Array.isArray(e[o]) ? r[o] = e[o].map(function(e) {
                                            return !0 === Array.isArray(e) || A(e) ? t(e) : "" !== e ? e : void 0
                                        }) : A(e[o]) ? r[o] = t(e[o]) : r[o] = "" !== e[o] ? e[o] : void 0
                                    }
                                return r
                            }(t), a[r ? "validateSync" : "validate"](n, {
                                abortEarly: !1,
                                context: n
                            }));
                        return new Promise(function(t, e) {
                            i.then(function() {
                                t(e6)
                            }, function(r) {
                                "ValidationError" === r.name ? t(function(t) {
                                    var e = {};
                                    if (t.inner) {
                                        if (0 === t.inner.length) return e8(e, t.path, t.message);
                                        for (var r = t.inner, n = Array.isArray(r), o = 0, r = n ? r : r[Symbol.iterator]();;) {
                                            if (n) {
                                                if (o >= r.length) break;
                                                a = r[o++]
                                            } else {
                                                if ((o = r.next()).done) break;
                                                a = o.value
                                            }
                                            var a, i = a;
                                            e9(e, i.path) || (e = e8(e, i.path, i.message))
                                        }
                                    }
                                    return e
                                }(r)) : e(r)
                            })
                        })
                    }, [$.validationSchema]), N = (0, _.useCallback)(function(t, e) {
                        return new Promise(function(r) {
                            return r(v.current[t].validate(e))
                        })
                    }, []), j = (0, _.useCallback)(function(t) {
                        var e = Object.keys(v.current).filter(function(t) {
                            return e0(v.current[t].validate)
                        });
                        return Promise.all(e.length > 0 ? e.map(function(e) {
                            return N(e, e9(t, e))
                        }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")]).then(function(t) {
                            return t.reduce(function(t, r, n) {
                                return "DO_NOT_DELETE_YOU_WILL_BE_FIRED" === r || r && (t = e8(t, e[n], r)), t
                            }, {})
                        })
                    }, [N]), E = (0, _.useCallback)(function(t) {
                        return Promise.all([j(t), $.validationSchema ? w(t) : {}, $.validate ? P(t) : {}]).then(function(t) {
                            var e = t[0],
                                r = t[1],
                                n = t[2];
                            return s.all([e, r, n], {
                                arrayMerge: rt
                            })
                        })
                    }, [$.validate, $.validationSchema, j, P, w]), x = rr(function(t) {
                        return void 0 === t && (t = O.values), S({
                            type: "SET_ISVALIDATING",
                            payload: !0
                        }), E(t).then(function(t) {
                            return g.current && (S({
                                type: "SET_ISVALIDATING",
                                payload: !1
                            }), S({
                                type: "SET_ERRORS",
                                payload: t
                            })), t
                        })
                    }), (0, _.useEffect)(function() {
                        i && !0 === g.current && k()(p.current, $.initialValues) && x(p.current)
                    }, [i, x]), I = (0, _.useCallback)(function(t) {
                        var e = t && t.values ? t.values : p.current,
                            r = t && t.errors ? t.errors : h.current ? h.current : $.initialErrors || {},
                            n = t && t.touched ? t.touched : y.current ? y.current : $.initialTouched || {},
                            o = t && t.status ? t.status : m.current ? m.current : $.initialStatus;
                        p.current = e, h.current = r, y.current = n, m.current = o;
                        var a = function() {
                            S({
                                type: "RESET_FORM",
                                payload: {
                                    isSubmitting: !!t && !!t.isSubmitting,
                                    errors: r,
                                    touched: n,
                                    status: o,
                                    values: e,
                                    isValidating: !!t && !!t.isValidating,
                                    submitCount: t && t.submitCount && "number" == typeof t.submitCount ? t.submitCount : 0
                                }
                            })
                        };
                        if ($.onReset) {
                            var i = $.onReset(O.values, X);
                            e4(i) ? i.then(a) : a()
                        } else a()
                    }, [$.initialErrors, $.initialStatus, $.initialTouched, $.onReset]), (0, _.useEffect)(function() {
                        !0 === g.current && !k()(p.current, $.initialValues) && l && (p.current = $.initialValues, I(), i && x(p.current))
                    }, [l, $.initialValues, I, i, x]), (0, _.useEffect)(function() {
                        l && !0 === g.current && !k()(h.current, $.initialErrors) && (h.current = $.initialErrors || e6, S({
                            type: "SET_ERRORS",
                            payload: $.initialErrors || e6
                        }))
                    }, [l, $.initialErrors]), (0, _.useEffect)(function() {
                        l && !0 === g.current && !k()(y.current, $.initialTouched) && (y.current = $.initialTouched || e5, S({
                            type: "SET_TOUCHED",
                            payload: $.initialTouched || e5
                        }))
                    }, [l, $.initialTouched]), (0, _.useEffect)(function() {
                        l && !0 === g.current && !k()(m.current, $.initialStatus) && (m.current = $.initialStatus, S({
                            type: "SET_STATUS",
                            payload: $.initialStatus
                        }))
                    }, [l, $.initialStatus, $.initialTouched]), T = rr(function(t) {
                        if (v.current[t] && e0(v.current[t].validate)) {
                            var e = e9(O.values, t),
                                r = v.current[t].validate(e);
                            return e4(r) ? (S({
                                type: "SET_ISVALIDATING",
                                payload: !0
                            }), r.then(function(t) {
                                return t
                            }).then(function(e) {
                                S({
                                    type: "SET_FIELD_ERROR",
                                    payload: {
                                        field: t,
                                        value: e
                                    }
                                }), S({
                                    type: "SET_ISVALIDATING",
                                    payload: !1
                                })
                            })) : (S({
                                type: "SET_FIELD_ERROR",
                                payload: {
                                    field: t,
                                    value: r
                                }
                            }), Promise.resolve(r))
                        }
                        return $.validationSchema ? (S({
                            type: "SET_ISVALIDATING",
                            payload: !0
                        }), w(O.values, t).then(function(t) {
                            return t
                        }).then(function(e) {
                            S({
                                type: "SET_FIELD_ERROR",
                                payload: {
                                    field: t,
                                    value: e9(e, t)
                                }
                            }), S({
                                type: "SET_ISVALIDATING",
                                payload: !1
                            })
                        })) : Promise.resolve()
                    }), M = (0, _.useCallback)(function(t, e) {
                        var r = e.validate;
                        v.current[t] = {
                            validate: r
                        }
                    }, []), R = (0, _.useCallback)(function(t) {
                        delete v.current[t]
                    }, []), F = rr(function(t, e) {
                        return S({
                            type: "SET_TOUCHED",
                            payload: t
                        }), (void 0 === e ? o : e) ? x(O.values) : Promise.resolve()
                    }), D = (0, _.useCallback)(function(t) {
                        S({
                            type: "SET_ERRORS",
                            payload: t
                        })
                    }, []), L = rr(function(t, e) {
                        var n = e0(t) ? t(O.values) : t;
                        return S({
                            type: "SET_VALUES",
                            payload: n
                        }), (void 0 === e ? r : e) ? x(n) : Promise.resolve()
                    }), B = (0, _.useCallback)(function(t, e) {
                        S({
                            type: "SET_FIELD_ERROR",
                            payload: {
                                field: t,
                                value: e
                            }
                        })
                    }, []), U = rr(function(t, e, n) {
                        return S({
                            type: "SET_FIELD_VALUE",
                            payload: {
                                field: t,
                                value: e
                            }
                        }), (void 0 === n ? r : n) ? x(e8(O.values, t, e)) : Promise.resolve()
                    }), G = (0, _.useCallback)(function(t, e) {
                        var r, n = e,
                            o = t;
                        if (!e2(t)) {
                            t.persist && t.persist();
                            var a = t.target ? t.target : t.currentTarget,
                                i = a.type,
                                d = a.name,
                                u = a.id,
                                l = a.value,
                                c = a.checked,
                                s = (a.outerHTML, a.options),
                                f = a.multiple;
                            n = e || d || u, o = /number|range/.test(i) ? isNaN(r = parseFloat(l)) ? "" : r : /checkbox/.test(i) ? function(t, e, r) {
                                if ("boolean" == typeof t) return !!e;
                                var n = [],
                                    o = !1,
                                    a = -1;
                                if (Array.isArray(t)) n = t, o = (a = t.indexOf(r)) >= 0;
                                else if (!r || "true" == r || "false" == r) return !!e;
                                return e && r && !o ? n.concat(r) : o ? n.slice(0, a).concat(n.slice(a + 1)) : n
                            }(e9(O.values, n), c, l) : s && f ? Array.from(s).filter(function(t) {
                                return t.selected
                            }).map(function(t) {
                                return t.value
                            }) : l
                        }
                        n && U(n, o)
                    }, [U, O.values]), V = rr(function(t) {
                        if (e2(t)) return function(e) {
                            return G(e, t)
                        };
                        G(t)
                    }), H = rr(function(t, e, r) {
                        return void 0 === e && (e = !0), S({
                            type: "SET_FIELD_TOUCHED",
                            payload: {
                                field: t,
                                value: e
                            }
                        }), (void 0 === r ? o : r) ? x(O.values) : Promise.resolve()
                    }), z = (0, _.useCallback)(function(t, e) {
                        t.persist && t.persist();
                        var r = t.target,
                            n = r.name,
                            o = r.id;
                        r.outerHTML, H(e || n || o, !0)
                    }, [H]), Z = rr(function(t) {
                        if (e2(t)) return function(e) {
                            return z(e, t)
                        };
                        z(t)
                    }), W = (0, _.useCallback)(function(t) {
                        e0(t) ? S({
                            type: "SET_FORMIK_STATE",
                            payload: t
                        }) : S({
                            type: "SET_FORMIK_STATE",
                            payload: function() {
                                return t
                            }
                        })
                    }, []), K = (0, _.useCallback)(function(t) {
                        S({
                            type: "SET_STATUS",
                            payload: t
                        })
                    }, []), q = (0, _.useCallback)(function(t) {
                        S({
                            type: "SET_ISSUBMITTING",
                            payload: t
                        })
                    }, []), Y = rr(function() {
                        return S({
                            type: "SUBMIT_ATTEMPT"
                        }), x().then(function(t) {
                            var e, r = t instanceof Error;
                            if (!r && 0 === Object.keys(t).length) {
                                try {
                                    if (e = Q(), void 0 === e) return
                                } catch (t) {
                                    throw t
                                }
                                return Promise.resolve(e).then(function(t) {
                                    return g.current && S({
                                        type: "SUBMIT_SUCCESS"
                                    }), t
                                }).catch(function(t) {
                                    if (g.current) throw S({
                                        type: "SUBMIT_FAILURE"
                                    }), t
                                })
                            }
                            if (g.current && (S({
                                    type: "SUBMIT_FAILURE"
                                }), r)) throw t
                        })
                    }), J = rr(function(t) {
                        t && t.preventDefault && e0(t.preventDefault) && t.preventDefault(), t && t.stopPropagation && e0(t.stopPropagation) && t.stopPropagation(), Y().catch(function(t) {
                            console.warn("Warning: An unhandled error was caught from submitForm()", t)
                        })
                    }), X = {
                        resetForm: I,
                        validateForm: x,
                        validateField: T,
                        setErrors: D,
                        setFieldError: B,
                        setFieldTouched: H,
                        setFieldValue: U,
                        setStatus: K,
                        setSubmitting: q,
                        setTouched: F,
                        setValues: L,
                        setFormikState: W,
                        submitForm: Y
                    }, Q = rr(function() {
                        return c(O.values, X)
                    }), tt = rr(function(t) {
                        t && t.preventDefault && e0(t.preventDefault) && t.preventDefault(), t && t.stopPropagation && e0(t.stopPropagation) && t.stopPropagation(), I()
                    }), te = (0, _.useCallback)(function(t) {
                        return {
                            value: e9(O.values, t),
                            error: e9(O.errors, t),
                            touched: !!e9(O.touched, t),
                            initialValue: e9(p.current, t),
                            initialTouched: !!e9(y.current, t),
                            initialError: e9(h.current, t)
                        }
                    }, [O.errors, O.touched, O.values]), tr = (0, _.useCallback)(function(t) {
                        return {
                            setValue: function(e, r) {
                                return U(t, e, r)
                            },
                            setTouched: function(e, r) {
                                return H(t, e, r)
                            },
                            setError: function(e) {
                                return B(t, e)
                            }
                        }
                    }, [U, H, B]), tn = (0, _.useCallback)(function(t) {
                        var e = e1(t),
                            r = e ? t.name : t,
                            n = e9(O.values, r),
                            o = {
                                name: r,
                                value: n,
                                onChange: V,
                                onBlur: Z
                            };
                        if (e) {
                            var a = t.type,
                                i = t.value,
                                d = t.as,
                                u = t.multiple;
                            "checkbox" === a ? void 0 === i ? o.checked = !!n : (o.checked = !!(Array.isArray(n) && ~n.indexOf(i)), o.value = i) : "radio" === a ? (o.checked = n === i, o.value = i) : "select" === d && u && (o.value = o.value || [], o.multiple = !0)
                        }
                        return o
                    }, [Z, V, O.values]), to = (0, _.useMemo)(function() {
                        return !k()(p.current, O.values)
                    }, [p.current, O.values]), ta = (0, _.useMemo)(function() {
                        return void 0 !== d ? to ? O.errors && 0 === Object.keys(O.errors).length : !1 !== d && e0(d) ? d($) : d : O.errors && 0 === Object.keys(O.errors).length
                    }, [d, to, O.errors, $]), eK({}, O, {
                        initialValues: p.current,
                        initialErrors: h.current,
                        initialTouched: y.current,
                        initialStatus: m.current,
                        handleBlur: Z,
                        handleChange: V,
                        handleReset: tt,
                        handleSubmit: J,
                        resetForm: I,
                        setErrors: D,
                        setFormikState: W,
                        setFieldTouched: H,
                        setFieldValue: U,
                        setFieldError: B,
                        setStatus: K,
                        setSubmitting: q,
                        setTouched: F,
                        setValues: L,
                        submitForm: Y,
                        validateForm: x,
                        validateField: T,
                        isValid: ta,
                        dirty: to,
                        unregisterField: R,
                        registerField: M,
                        getFieldProps: tn,
                        getFieldMeta: te,
                        getFieldHelpers: tr,
                        validateOnBlur: o,
                        validateOnChange: r,
                        validateOnMount: i
                    })),
                    td = t.component,
                    tu = t.children,
                    tl = t.render,
                    tc = t.innerRef;
                return (0, _.useImperativeHandle)(tc, function() {
                    return ti
                }), (0, _.createElement)(eX, {
                    value: ti
                }, td ? (0, _.createElement)(td, ti) : tl ? tl(ti) : tu ? e0(tu) ? tu(ti) : e3(tu) ? null : _.Children.only(tu) : null)
            }

            function rt(t, e, r) {
                var n = t.slice();
                return e.forEach(function(e, o) {
                    if (void 0 === n[o]) {
                        var a = !1 !== r.clone && r.isMergeableObject(e);
                        n[o] = a ? s(Array.isArray(e) ? [] : {}, e, r) : e
                    } else r.isMergeableObject(e) ? n[o] = s(t[o], e, r) : -1 === t.indexOf(e) && n.push(e)
                }), n
            }
            var re = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _.useLayoutEffect : _.useEffect;

            function rr(t) {
                var e = (0, _.useRef)(t);
                return re(function() {
                    e.current = t
                }), (0, _.useCallback)(function() {
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return e.current.apply(void 0, r)
                }, [])
            }(0, _.forwardRef)(function(t, e) {
                var r, n = t.action,
                    o = eq(t, ["action"]),
                    a = ((r = (0, _.useContext)(eJ)) || M(!1), r),
                    i = a.handleReset,
                    d = a.handleSubmit;
                return (0, _.createElement)("form", eK({
                    onSubmit: d,
                    ref: e,
                    onReset: i,
                    action: null != n ? n : "#"
                }, o))
            }).displayName = "Form";
            var rn = function(t, e, r) {
                    var n = rd(t),
                        o = n[e];
                    return n.splice(e, 1), n.splice(r, 0, o), n
                },
                ro = function(t, e, r) {
                    var n = rd(t),
                        o = n[e];
                    return n[e] = n[r], n[r] = o, n
                },
                ra = function(t, e, r) {
                    var n = rd(t);
                    return n.splice(e, 0, r), n
                },
                ri = function(t, e, r) {
                    var n = rd(t);
                    return n[e] = r, n
                },
                rd = function(t) {
                    if (!t) return [];
                    if (Array.isArray(t)) return [].concat(t);
                    var e = Object.keys(t).map(function(t) {
                        return parseInt(t)
                    }).reduce(function(t, e) {
                        return e > t ? e : t
                    }, 0);
                    return Array.from(eK({}, t, {
                        length: e + 1
                    }))
                },
                ru = function(t, e) {
                    var r = "function" == typeof t ? t : e;
                    return function(t) {
                        return Array.isArray(t) || e1(t) ? r(rd(t)) : t
                    }
                };
            (function(t) {
                function e(e) {
                    var r;
                    return (r = t.call(this, e) || this).updateArrayField = function(t, e, n) {
                        var o = r.props,
                            a = o.name;
                        (0, o.formik.setFormikState)(function(r) {
                            var o = ru(n, t),
                                i = ru(e, t),
                                d = e8(r.values, a, t(e9(r.values, a))),
                                u = n ? o(e9(r.errors, a)) : void 0,
                                l = e ? i(e9(r.touched, a)) : void 0;
                            return eQ(u) && (u = void 0), eQ(l) && (l = void 0), eK({}, r, {
                                values: d,
                                errors: n ? e8(r.errors, a, u) : r.errors,
                                touched: e ? e8(r.touched, a, l) : r.touched
                            })
                        })
                    }, r.push = function(t) {
                        return r.updateArrayField(function(e) {
                            return [].concat(rd(e), [eT(t, 5)])
                        }, !1, !1)
                    }, r.handlePush = function(t) {
                        return function() {
                            return r.push(t)
                        }
                    }, r.swap = function(t, e) {
                        return r.updateArrayField(function(r) {
                            return ro(r, t, e)
                        }, !0, !0)
                    }, r.handleSwap = function(t, e) {
                        return function() {
                            return r.swap(t, e)
                        }
                    }, r.move = function(t, e) {
                        return r.updateArrayField(function(r) {
                            return rn(r, t, e)
                        }, !0, !0)
                    }, r.handleMove = function(t, e) {
                        return function() {
                            return r.move(t, e)
                        }
                    }, r.insert = function(t, e) {
                        return r.updateArrayField(function(r) {
                            return ra(r, t, e)
                        }, function(e) {
                            return ra(e, t, null)
                        }, function(e) {
                            return ra(e, t, null)
                        })
                    }, r.handleInsert = function(t, e) {
                        return function() {
                            return r.insert(t, e)
                        }
                    }, r.replace = function(t, e) {
                        return r.updateArrayField(function(r) {
                            return ri(r, t, e)
                        }, !1, !1)
                    }, r.handleReplace = function(t, e) {
                        return function() {
                            return r.replace(t, e)
                        }
                    }, r.unshift = function(t) {
                        var e = -1;
                        return r.updateArrayField(function(r) {
                            var n = r ? [t].concat(r) : [t];
                            return e = n.length, n
                        }, function(t) {
                            return t ? [null].concat(t) : [null]
                        }, function(t) {
                            return t ? [null].concat(t) : [null]
                        }), e
                    }, r.handleUnshift = function(t) {
                        return function() {
                            return r.unshift(t)
                        }
                    }, r.handleRemove = function(t) {
                        return function() {
                            return r.remove(t)
                        }
                    }, r.handlePop = function() {
                        return function() {
                            return r.pop()
                        }
                    }, r.remove = r.remove.bind(eY(r)), r.pop = r.pop.bind(eY(r)), r
                }
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
                var r = e.prototype;
                return r.componentDidUpdate = function(t) {
                    this.props.validateOnChange && this.props.formik.validateOnChange && !k()(e9(t.formik.values, t.name), e9(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values)
                }, r.remove = function(t) {
                    var e;
                    return this.updateArrayField(function(r) {
                        var n = r ? rd(r) : [];
                        return e || (e = n[t]), e0(n.splice) && n.splice(t, 1), e0(n.every) && n.every(function(t) {
                            return void 0 === t
                        }) ? [] : n
                    }, !0, !0), e
                }, r.pop = function() {
                    var t;
                    return this.updateArrayField(function(e) {
                        var r = e.slice();
                        return t || (t = r && r.pop && r.pop()), r
                    }, !0, !0), t
                }, r.render = function() {
                    var t = {
                            push: this.push,
                            pop: this.pop,
                            swap: this.swap,
                            move: this.move,
                            insert: this.insert,
                            replace: this.replace,
                            unshift: this.unshift,
                            remove: this.remove,
                            handlePush: this.handlePush,
                            handlePop: this.handlePop,
                            handleSwap: this.handleSwap,
                            handleMove: this.handleMove,
                            handleInsert: this.handleInsert,
                            handleReplace: this.handleReplace,
                            handleUnshift: this.handleUnshift,
                            handleRemove: this.handleRemove
                        },
                        e = this.props,
                        r = e.component,
                        n = e.render,
                        o = e.children,
                        a = e.name,
                        i = eq(e.formik, ["validate", "validationSchema"]),
                        d = eK({}, t, {
                            form: i,
                            name: a
                        });
                    return r ? (0, _.createElement)(r, d) : n ? n(d) : o ? "function" == typeof o ? o(d) : e3(o) ? null : _.Children.only(o) : null
                }, e
            })(_.Component).defaultProps = {
                validateOnChange: !0
            }
        },
        8679: function(t, e, r) {
            "use strict";
            var n = r(59864),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                d = {};

            function u(t) {
                return n.isMemo(t) ? i : d[t.$$typeof] || o
            }
            d[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, d[n.Memo] = i;
            var l = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                s = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                $ = Object.getPrototypeOf,
                p = Object.prototype;
            t.exports = function t(e, r, n) {
                if ("string" != typeof r) {
                    if (p) {
                        var o = $(r);
                        o && o !== p && t(e, o, n)
                    }
                    var i = c(r);
                    s && (i = i.concat(s(r)));
                    for (var d = u(e), h = u(r), y = 0; y < i.length; ++y) {
                        var m = i[y];
                        if (!a[m] && !(n && n[m]) && !(h && h[m]) && !(d && d[m])) {
                            var g = f(r, m);
                            try {
                                l(e, m, g)
                            } catch (t) {}
                        }
                    }
                }
                return e
            }
        },
        12422: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "createAsyncLocalStorage", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
            class n {
                disable() {
                    throw r
                }
                getStore() {}
                run() {
                    throw r
                }
                exit() {
                    throw r
                }
                enterWith() {
                    throw r
                }
            }
            let o = globalThis.AsyncLocalStorage;

            function a() {
                return o ? new o : new n
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        88427: function(t, e, r) {
            "use strict";

            function n(t) {}
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "clientHookInServerComponentError", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(38754), r(67294), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        30636: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    ReadonlyURLSearchParams: function() {
                        return $
                    },
                    useSearchParams: function() {
                        return p
                    },
                    usePathname: function() {
                        return h
                    },
                    ServerInsertedHTMLContext: function() {
                        return u.ServerInsertedHTMLContext
                    },
                    useServerInsertedHTML: function() {
                        return u.useServerInsertedHTML
                    },
                    useRouter: function() {
                        return y
                    },
                    useParams: function() {
                        return m
                    },
                    useSelectedLayoutSegments: function() {
                        return g
                    },
                    useSelectedLayoutSegment: function() {
                        return v
                    },
                    redirect: function() {
                        return l.redirect
                    },
                    permanentRedirect: function() {
                        return l.permanentRedirect
                    },
                    RedirectType: function() {
                        return l.RedirectType
                    },
                    notFound: function() {
                        return c.notFound
                    }
                });
            let n = r(67294),
                o = r(89031),
                a = r(11593),
                i = r(88427),
                d = r(6160),
                u = r(30252),
                l = r(37866),
                c = r(49363),
                s = Symbol("internal for urlsearchparams readonly");

            function f() {
                return Error("ReadonlyURLSearchParams cannot be modified")
            }
            class $ {
                [Symbol.iterator]() {
                    return this[s][Symbol.iterator]()
                }
                append() {
                    throw f()
                }
                delete() {
                    throw f()
                }
                set() {
                    throw f()
                }
                sort() {
                    throw f()
                }
                constructor(t) {
                    this[s] = t, this.entries = t.entries.bind(t), this.forEach = t.forEach.bind(t), this.get = t.get.bind(t), this.getAll = t.getAll.bind(t), this.has = t.has.bind(t), this.keys = t.keys.bind(t), this.values = t.values.bind(t), this.toString = t.toString.bind(t), this.size = t.size
                }
            }

            function p() {
                (0, i.clientHookInServerComponentError)("useSearchParams");
                let t = (0, n.useContext)(a.SearchParamsContext),
                    e = (0, n.useMemo)(() => t ? new $(t) : null, [t]);
                return e
            }

            function h() {
                return (0, i.clientHookInServerComponentError)("usePathname"), (0, n.useContext)(a.PathnameContext)
            }

            function y() {
                (0, i.clientHookInServerComponentError)("useRouter");
                let t = (0, n.useContext)(o.AppRouterContext);
                if (null === t) throw Error("invariant expected app router to be mounted");
                return t
            }

            function m() {
                (0, i.clientHookInServerComponentError)("useParams");
                let t = (0, n.useContext)(o.GlobalLayoutRouterContext),
                    e = (0, n.useContext)(a.PathParamsContext);
                return (0, n.useMemo)(() => (null == t ? void 0 : t.tree) ? function t(e, r) {
                    void 0 === r && (r = {});
                    let n = e[1];
                    for (let e of Object.values(n)) {
                        let n = e[0],
                            o = Array.isArray(n),
                            a = o ? n[1] : n;
                        if (!a || a.startsWith("__PAGE__")) continue;
                        let i = o && ("c" === n[2] || "oc" === n[2]);
                        i ? r[n[0]] = n[1].split("/") : o && (r[n[0]] = n[1]), r = t(e, r)
                    }
                    return r
                }(t.tree) : e, [null == t ? void 0 : t.tree, e])
            }

            function g(t) {
                void 0 === t && (t = "children"), (0, i.clientHookInServerComponentError)("useSelectedLayoutSegments");
                let {
                    tree: e
                } = (0, n.useContext)(o.LayoutRouterContext);
                return function t(e, r, n, o) {
                    let a;
                    if (void 0 === n && (n = !0), void 0 === o && (o = []), n) a = e[1][r];
                    else {
                        var i;
                        let t = e[1];
                        a = null != (i = t.children) ? i : Object.values(t)[0]
                    }
                    if (!a) return o;
                    let u = a[0],
                        l = (0, d.getSegmentValue)(u);
                    return !l || l.startsWith("__PAGE__") ? o : (o.push(l), t(a, r, !1, o))
                }(e, t)
            }

            function v(t) {
                void 0 === t && (t = "children"), (0, i.clientHookInServerComponentError)("useSelectedLayoutSegment");
                let e = g(t);
                return 0 === e.length ? null : e[0]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        49363: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    notFound: function() {
                        return n
                    },
                    isNotFoundError: function() {
                        return o
                    }
                });
            let r = "NEXT_NOT_FOUND";

            function n() {
                let t = Error(r);
                throw t.digest = r, t
            }

            function o(t) {
                return (null == t ? void 0 : t.digest) === r
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        37866: function(t, e, r) {
            "use strict";
            var n, o;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    RedirectType: function() {
                        return n
                    },
                    getRedirectError: function() {
                        return d
                    },
                    redirect: function() {
                        return u
                    },
                    permanentRedirect: function() {
                        return l
                    },
                    isRedirectError: function() {
                        return c
                    },
                    getURLFromRedirectError: function() {
                        return s
                    },
                    getRedirectTypeFromError: function() {
                        return f
                    }
                });
            let a = r(23743),
                i = "NEXT_REDIRECT";

            function d(t, e, r) {
                void 0 === r && (r = !1);
                let n = Error(i);
                n.digest = i + ";" + e + ";" + t + ";" + r;
                let o = a.requestAsyncStorage.getStore();
                return o && (n.mutableCookies = o.mutableCookies), n
            }

            function u(t, e) {
                throw void 0 === e && (e = "replace"), d(t, e, !1)
            }

            function l(t, e) {
                throw void 0 === e && (e = "replace"), d(t, e, !0)
            }

            function c(t) {
                if ("string" != typeof(null == t ? void 0 : t.digest)) return !1;
                let [e, r, n, o] = t.digest.split(";", 4);
                return e === i && ("replace" === r || "push" === r) && "string" == typeof n && ("true" === o || "false" === o)
            }

            function s(t) {
                return c(t) ? t.digest.split(";", 3)[2] : null
            }

            function f(t) {
                if (!c(t)) throw Error("Not a redirect error");
                return t.digest.split(";", 2)[1]
            }(o = n || (n = {})).push = "push", o.replace = "replace", ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        23743: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "requestAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(12422),
                o = (0, n.createAsyncLocalStorage)();
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6160: function(t, e) {
            "use strict";

            function r(t) {
                return Array.isArray(t) ? t[1] : t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getSegmentValue", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        97498: function(t, e) {
            "use strict";
            var r, n;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    PrefetchKind: function() {
                        return r
                    },
                    ACTION_REFRESH: function() {
                        return o
                    },
                    ACTION_NAVIGATE: function() {
                        return a
                    },
                    ACTION_RESTORE: function() {
                        return i
                    },
                    ACTION_SERVER_PATCH: function() {
                        return d
                    },
                    ACTION_PREFETCH: function() {
                        return u
                    },
                    ACTION_FAST_REFRESH: function() {
                        return l
                    },
                    ACTION_SERVER_ACTION: function() {
                        return c
                    },
                    isThenable: function() {
                        return s
                    }
                });
            let o = "refresh",
                a = "navigate",
                i = "restore",
                d = "server-patch",
                u = "prefetch",
                l = "fast-refresh",
                c = "server-action";

            function s(t) {
                return t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
            }(n = r || (r = {})).AUTO = "auto", n.FULL = "full", n.TEMPORARY = "temporary", ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        10030: function(t, e, r) {
            "use strict";

            function n(t, e, r, n) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(22866), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        23271: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return Image
                }
            });
            let n = r(38754),
                o = r(61757),
                a = o._(r(67294)),
                i = n._(r(73935)),
                d = n._(r(79201)),
                u = r(53914),
                l = r(85494),
                c = r(30869);
            r(81905);
            let s = r(11823),
                f = n._(r(74545)),
                $ = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function p(t, e, r, n, o, a) {
                let i = null == t ? void 0 : t.src;
                if (!t || t["data-loaded-src"] === i) return;
                t["data-loaded-src"] = i;
                let d = "decode" in t ? t.decode() : Promise.resolve();
                d.catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && o(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                o = !1;
                            r.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                })
            }

            function h(t) {
                let [e, r] = a.version.split(".", 2), n = parseInt(e, 10), o = parseInt(r, 10);
                return n > 18 || 18 === n && o >= 3 ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let y = (0, a.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: o,
                    height: i,
                    width: d,
                    decoding: u,
                    className: l,
                    style: c,
                    fetchPriority: s,
                    placeholder: f,
                    loading: $,
                    unoptimized: y,
                    fill: m,
                    onLoadRef: g,
                    onLoadingCompleteRef: v,
                    setBlurComplete: b,
                    setShowAltText: C,
                    onLoad: O,
                    onError: S,
                    ...P
                } = t;
                return a.default.createElement("img", { ...P,
                    ...h(s),
                    loading: $,
                    width: d,
                    height: i,
                    decoding: u,
                    "data-nimg": m ? "fill" : "1",
                    className: l,
                    style: c,
                    sizes: o,
                    srcSet: n,
                    src: r,
                    ref: (0, a.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (S && (t.src = t.src), t.complete && p(t, f, g, v, b, y))
                    }, [r, f, g, v, b, S, y, e]),
                    onLoad: t => {
                        let e = t.currentTarget;
                        p(e, f, g, v, b, y)
                    },
                    onError: t => {
                        C(!0), "empty" !== f && b(!0), S && S(t)
                    }
                })
            });

            function m(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...h(r.fetchPriority)
                };
                return e && i.default.preload ? (i.default.preload(r.src, n), null) : a.default.createElement(d.default, null, a.default.createElement("link", {
                    key: "__nimg-" + r.src + r.srcSet + r.sizes,
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }))
            }
            let Image = (0, a.forwardRef)((t, e) => {
                let r = (0, a.useContext)(s.RouterContext),
                    n = (0, a.useContext)(c.ImageConfigContext),
                    o = (0, a.useMemo)(() => {
                        let t = $ || n || l.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            r = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: i,
                        onLoadingComplete: d
                    } = t,
                    p = (0, a.useRef)(i);
                (0, a.useEffect)(() => {
                    p.current = i
                }, [i]);
                let h = (0, a.useRef)(d);
                (0, a.useEffect)(() => {
                    h.current = d
                }, [d]);
                let [g, v] = (0, a.useState)(!1), [b, C] = (0, a.useState)(!1), {
                    props: O,
                    meta: S
                } = (0, u.getImgProps)(t, {
                    defaultLoader: f.default,
                    imgConf: o,
                    blurComplete: g,
                    showAltText: b
                });
                return a.default.createElement(a.default.Fragment, null, a.default.createElement(y, { ...O,
                    unoptimized: S.unoptimized,
                    placeholder: S.placeholder,
                    fill: S.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: h,
                    setBlurComplete: v,
                    setShowAltText: C,
                    ref: e
                }), S.priority ? a.default.createElement(m, {
                    isAppRouter: !r,
                    imgAttributes: O
                }) : null)
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        65170: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = r(38754),
                o = n._(r(67294)),
                a = r(74450),
                i = r(92227),
                d = r(64364),
                u = r(10109),
                l = r(73607),
                c = r(11823),
                s = r(89031),
                f = r(40920),
                $ = r(10030),
                p = r(77192),
                h = r(97498),
                y = new Set;

            function m(t, e, r, n, o, a) {
                if (!a && !(0, i.isLocalURL)(e)) return;
                if (!n.bypassPrefetchedCheck) {
                    let o = void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0,
                        a = e + "%" + r + "%" + o;
                    if (y.has(a)) return;
                    y.add(a)
                }
                let d = a ? t.prefetch(e, o) : t.prefetch(e, r, n);
                Promise.resolve(d).catch(t => {})
            }

            function g(t) {
                return "string" == typeof t ? t : (0, d.formatUrl)(t)
            }
            let v = o.default.forwardRef(function(t, e) {
                    let r, n;
                    let {
                        href: d,
                        as: y,
                        children: v,
                        prefetch: b = null,
                        passHref: C,
                        replace: O,
                        shallow: S,
                        scroll: P,
                        locale: w,
                        onClick: N,
                        onMouseEnter: j,
                        onTouchStart: E,
                        legacyBehavior: x = !1,
                        ...I
                    } = t;
                    r = v, x && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
                    let A = o.default.useContext(c.RouterContext),
                        _ = o.default.useContext(s.AppRouterContext),
                        T = null != A ? A : _,
                        k = !A,
                        M = !1 !== b,
                        R = null === b ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                        {
                            href: F,
                            as: D
                        } = o.default.useMemo(() => {
                            if (!A) {
                                let t = g(d);
                                return {
                                    href: t,
                                    as: y ? g(y) : t
                                }
                            }
                            let [t, e] = (0, a.resolveHref)(A, d, !0);
                            return {
                                href: t,
                                as: y ? (0, a.resolveHref)(A, y) : e || t
                            }
                        }, [A, d, y]),
                        L = o.default.useRef(F),
                        B = o.default.useRef(D);
                    x && (n = o.default.Children.only(r));
                    let U = x ? n && "object" == typeof n && n.ref : e,
                        [G, V, H] = (0, f.useIntersection)({
                            rootMargin: "200px"
                        }),
                        z = o.default.useCallback(t => {
                            (B.current !== D || L.current !== F) && (H(), B.current = D, L.current = F), G(t), U && ("function" == typeof U ? U(t) : "object" == typeof U && (U.current = t))
                        }, [D, U, F, H, G]);
                    o.default.useEffect(() => {
                        T && V && M && m(T, F, D, {
                            locale: w
                        }, {
                            kind: R
                        }, k)
                    }, [D, F, V, w, M, null == A ? void 0 : A.locale, T, k, R]);
                    let Z = {
                        ref: z,
                        onClick(t) {
                            x || "function" != typeof N || N(t), x && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), T && !t.defaultPrevented && function(t, e, r, n, a, d, u, l, c) {
                                let {
                                    nodeName: s
                                } = t.currentTarget, f = "A" === s.toUpperCase();
                                if (f && (function(t) {
                                        let e = t.currentTarget,
                                            r = e.getAttribute("target");
                                        return r && "_self" !== r || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                    }(t) || !c && !(0, i.isLocalURL)(r))) return;
                                t.preventDefault();
                                let $ = () => {
                                    let t = null == u || u;
                                    "beforePopState" in e ? e[a ? "replace" : "push"](r, n, {
                                        shallow: d,
                                        locale: l,
                                        scroll: t
                                    }) : e[a ? "replace" : "push"](n || r, {
                                        scroll: t
                                    })
                                };
                                c ? o.default.startTransition($) : $()
                            }(t, T, F, D, O, S, P, w, k)
                        },
                        onMouseEnter(t) {
                            x || "function" != typeof j || j(t), x && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), T && (M || !k) && m(T, F, D, {
                                locale: w,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: R
                            }, k)
                        },
                        onTouchStart(t) {
                            x || "function" != typeof E || E(t), x && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), T && (M || !k) && m(T, F, D, {
                                locale: w,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: R
                            }, k)
                        }
                    };
                    if ((0, u.isAbsoluteUrl)(D)) Z.href = D;
                    else if (!x || C || "a" === n.type && !("href" in n.props)) {
                        let t = void 0 !== w ? w : null == A ? void 0 : A.locale,
                            e = (null == A ? void 0 : A.isLocaleDomain) && (0, $.getDomainLocale)(D, t, null == A ? void 0 : A.locales, null == A ? void 0 : A.domainLocales);
                        Z.href = e || (0, p.addBasePath)((0, l.addLocale)(D, t, null == A ? void 0 : A.defaultLocale))
                    }
                    return x ? o.default.cloneElement(n, Z) : o.default.createElement("a", { ...I,
                        ...Z
                    }, r)
                }),
                b = v;
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        40920: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = r(67294),
                o = r(63436),
                a = "function" == typeof IntersectionObserver,
                i = new Map,
                d = [];

            function u(t) {
                let {
                    rootRef: e,
                    rootMargin: r,
                    disabled: u
                } = t, l = u || !a, [c, s] = (0, n.useState)(!1), f = (0, n.useRef)(null), $ = (0, n.useCallback)(t => {
                    f.current = t
                }, []);
                (0, n.useEffect)(() => {
                    if (a) {
                        if (l || c) return;
                        let t = f.current;
                        if (t && t.tagName) {
                            let n = function(t, e, r) {
                                let {
                                    id: n,
                                    observer: o,
                                    elements: a
                                } = function(t) {
                                    let e;
                                    let r = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        n = d.find(t => t.root === r.root && t.margin === r.margin);
                                    if (n && (e = i.get(n))) return e;
                                    let o = new Map,
                                        a = new IntersectionObserver(t => {
                                            t.forEach(t => {
                                                let e = o.get(t.target),
                                                    r = t.isIntersecting || t.intersectionRatio > 0;
                                                e && r && e(r)
                                            })
                                        }, t);
                                    return e = {
                                        id: r,
                                        observer: a,
                                        elements: o
                                    }, d.push(r), i.set(r, e), e
                                }(r);
                                return a.set(t, e), o.observe(t),
                                    function() {
                                        if (a.delete(t), o.unobserve(t), 0 === a.size) {
                                            o.disconnect(), i.delete(n);
                                            let t = d.findIndex(t => t.root === n.root && t.margin === n.margin);
                                            t > -1 && d.splice(t, 1)
                                        }
                                    }
                            }(t, t => t && s(t), {
                                root: null == e ? void 0 : e.current,
                                rootMargin: r
                            });
                            return n
                        }
                    } else if (!c) {
                        let t = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(t)
                    }
                }, [l, r, e, c, f.current]);
                let p = (0, n.useCallback)(() => {
                    s(!1)
                }, []);
                return [$, c, p]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        53914: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return d
                }
            }), r(81905);
            let n = r(32393),
                o = r(85494);

            function a(t) {
                return void 0 !== t.default
            }

            function i(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function d(t, e) {
                var r;
                let d, u, l, {
                        src: c,
                        sizes: s,
                        unoptimized: f = !1,
                        priority: $ = !1,
                        loading: p,
                        className: h,
                        quality: y,
                        width: m,
                        height: g,
                        fill: v = !1,
                        style: b,
                        onLoad: C,
                        onLoadingComplete: O,
                        placeholder: S = "empty",
                        blurDataURL: P,
                        fetchPriority: w,
                        layout: N,
                        objectFit: j,
                        objectPosition: E,
                        lazyBoundary: x,
                        lazyRoot: I,
                        ...A
                    } = t,
                    {
                        imgConf: _,
                        showAltText: T,
                        blurComplete: k,
                        defaultLoader: M
                    } = e,
                    R = _ || o.imageConfigDefault;
                if ("allSizes" in R) d = R;
                else {
                    let t = [...R.deviceSizes, ...R.imageSizes].sort((t, e) => t - e),
                        e = R.deviceSizes.sort((t, e) => t - e);
                    d = { ...R,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                let F = A.loader || M;
                delete A.loader, delete A.srcSet;
                let D = "__next_img_default" in F;
                if (D) {
                    if ("custom" === d.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = F;
                    F = e => {
                        let {
                            config: r,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (N) {
                    "fill" === N && (v = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[N];
                    t && (b = { ...b,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[N];
                    e && !s && (s = e)
                }
                let L = "",
                    B = i(m),
                    U = i(g);
                if ("object" == typeof(r = c) && (a(r) || void 0 !== r.src)) {
                    let t = a(c) ? c.default : c;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (u = t.blurWidth, l = t.blurHeight, P = P || t.blurDataURL, L = t.src, !v) {
                        if (B || U) {
                            if (B && !U) {
                                let e = B / t.width;
                                U = Math.round(t.height * e)
                            } else if (!B && U) {
                                let e = U / t.height;
                                B = Math.round(t.width * e)
                            }
                        } else B = t.width, U = t.height
                    }
                }
                let G = !$ && ("lazy" === p || void 0 === p);
                (!(c = "string" == typeof c ? c : L) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, G = !1), d.unoptimized && (f = !0), D && c.endsWith(".svg") && !d.dangerouslyAllowSVG && (f = !0), $ && (w = "high");
                let V = i(y),
                    H = Object.assign(v ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: E
                    } : {}, T ? {} : {
                        color: "transparent"
                    }, b),
                    z = k || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: B,
                        heightInt: U,
                        blurWidth: u,
                        blurHeight: l,
                        blurDataURL: P || "",
                        objectFit: H.objectFit
                    }) + '")' : 'url("' + S + '")',
                    Z = z ? {
                        backgroundSize: H.objectFit || "cover",
                        backgroundPosition: H.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: z
                    } : {},
                    W = function(t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: n,
                            width: o,
                            quality: a,
                            sizes: i,
                            loader: d
                        } = t;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: l
                        } = function(t, e, r) {
                            let {
                                deviceSizes: n,
                                allSizes: o
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(r); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: o.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof e) return {
                                widths: n,
                                kind: "w"
                            };
                            let a = [...new Set([e, 2 * e].map(t => o.find(e => e >= t) || o[o.length - 1]))];
                            return {
                                widths: a,
                                kind: "x"
                            }
                        }(e, o, i), c = u.length - 1;
                        return {
                            sizes: i || "w" !== l ? i : "100vw",
                            srcSet: u.map((t, n) => d({
                                config: e,
                                src: r,
                                quality: a,
                                width: t
                            }) + " " + ("w" === l ? t : n + 1) + l).join(", "),
                            src: d({
                                config: e,
                                src: r,
                                quality: a,
                                width: u[c]
                            })
                        }
                    }({
                        config: d,
                        src: c,
                        unoptimized: f,
                        width: B,
                        quality: V,
                        sizes: s,
                        loader: F
                    }),
                    K = { ...A,
                        loading: G ? "lazy" : p,
                        fetchPriority: w,
                        width: B,
                        height: U,
                        decoding: "async",
                        className: h,
                        style: { ...H,
                            ...Z
                        },
                        sizes: W.sizes,
                        srcSet: W.srcSet,
                        src: W.src
                    },
                    q = {
                        unoptimized: f,
                        priority: $,
                        placeholder: S,
                        fill: v
                    };
                return {
                    props: K,
                    meta: q
                }
            }
        },
        32393: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: o,
                    blurDataURL: a,
                    objectFit: i
                } = t, d = n ? 40 * n : e, u = o ? 40 * o : r, l = d && u ? "viewBox='0 0 " + d + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (l ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + a + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        645: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    unstable_getImgProps: function() {
                        return u
                    },
                    default: function() {
                        return l
                    }
                });
            let n = r(38754),
                o = r(53914),
                a = r(81905),
                i = r(23271),
                d = n._(r(74545)),
                u = t => {
                    (0, a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: e
                    } = (0, o.getImgProps)(t, {
                        defaultLoader: d.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !0
                        }
                    });
                    for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                    return {
                        props: e
                    }
                },
                l = i.Image
        },
        74545: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    config: e,
                    src: r,
                    width: n,
                    quality: o
                } = t;
                return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (o || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        30252: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    ServerInsertedHTMLContext: function() {
                        return a
                    },
                    useServerInsertedHTML: function() {
                        return i
                    }
                });
            let n = r(61757),
                o = n._(r(67294)),
                a = o.default.createContext(null);

            function i(t) {
                let e = (0, o.useContext)(a);
                e && e(t)
            }
        },
        65714: function() {},
        25675: function(t, e, r) {
            t.exports = r(645)
        },
        41664: function(t, e, r) {
            t.exports = r(65170)
        },
        39332: function(t, e, r) {
            t.exports = r(30636)
        },
        11163: function(t, e, r) {
            t.exports = r(59974)
        },
        62286: function(t, e, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.destroyCookie = e.setCookie = e.parseCookies = void 0;
            var o = r(76489),
                a = r(69328),
                i = r(51022);

            function d(t, e) {
                var r, n;
                return (null === (n = null === (r = null == t ? void 0 : t.req) || void 0 === r ? void 0 : r.headers) || void 0 === n ? void 0 : n.cookie) ? o.parse(t.req.headers.cookie, e) : i.isBrowser() ? o.parse(document.cookie, e) : {}
            }

            function u(t, e, r, d) {
                var u, l;
                if (void 0 === d && (d = {}), (null === (u = null == t ? void 0 : t.res) || void 0 === u ? void 0 : u.getHeader) && t.res.setHeader) {
                    if (null === (l = null == t ? void 0 : t.res) || void 0 === l ? void 0 : l.finished) return console.warn('Not setting "' + e + '" cookie. Response has finished.'), console.warn("You should set cookie before res.send()"), {};
                    var c = t.res.getHeader("Set-Cookie") || [];
                    "string" == typeof c && (c = [c]), "number" == typeof c && (c = []);
                    var s = a.parse(c, {
                            decodeValues: !1
                        }),
                        f = i.createCookie(e, r, d),
                        $ = [];
                    s.forEach(function(t) {
                        if (!i.areCookiesEqual(t, f)) {
                            var e = o.serialize(t.name, t.value, n({
                                encode: function(t) {
                                    return t
                                }
                            }, t));
                            $.push(e)
                        }
                    }), $.push(o.serialize(e, r, d)), t.res.setHeader("Set-Cookie", $)
                }
                if (i.isBrowser()) {
                    if (d && d.httpOnly) throw Error("Can not set a httpOnly cookie in the browser.");
                    document.cookie = o.serialize(e, r, d)
                }
                return {}
            }

            function l(t, e, r) {
                return u(t, e, "", n(n({}, r || {}), {
                    maxAge: -1
                }))
            }
            e.parseCookies = d, e.setCookie = u, e.destroyCookie = l, e.default = {
                set: u,
                get: d,
                destroy: l
            }
        },
        51022: function(t, e) {
            "use strict";
            var r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function n(t, e) {
                var r = Object.getOwnPropertyNames(t),
                    n = Object.getOwnPropertyNames(e);
                if (r.length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var a = r[o];
                    if (t[a] !== e[a]) return !1
                }
                return !0
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.areCookiesEqual = e.hasSameProperties = e.createCookie = e.isBrowser = void 0, e.isBrowser = function() {
                return "undefined" != typeof window
            }, e.createCookie = function(t, e, n) {
                var o = n.sameSite;
                !0 === o && (o = "strict"), (void 0 === o || !1 === o) && (o = "lax");
                var a = r(r({}, n), {
                    sameSite: o
                });
                return delete a.encode, r({
                    name: t,
                    value: e
                }, a)
            }, e.hasSameProperties = n, e.areCookiesEqual = function(t, e) {
                var o = t.sameSite === e.sameSite;
                return "string" == typeof t.sameSite && "string" == typeof e.sameSite && (o = t.sameSite.toLowerCase() === e.sameSite.toLowerCase()), n(r(r({}, t), {
                    sameSite: void 0
                }), r(r({}, e), {
                    sameSite: void 0
                })) && o
            }
        },
        92703: function(t, e, r) {
            "use strict";
            var n = r(50414);

            function o() {}

            function a() {}
            a.resetWarningCache = o, t.exports = function() {
                function t(t, e, r, o, a, i) {
                    if (i !== n) {
                        var d = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw d.name = "Invariant Violation", d
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var r = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return r.PropTypes = r, r
            }
        },
        45697: function(t, e, r) {
            t.exports = r(92703)()
        },
        50414: function(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        69590: function(t) {
            "use strict";
            var e = Array.isArray,
                r = Object.keys,
                n = Object.prototype.hasOwnProperty,
                o = "undefined" != typeof Element;
            t.exports = function(t, a) {
                try {
                    return function t(a, i) {
                        if (a === i) return !0;
                        if (a && i && "object" == typeof a && "object" == typeof i) {
                            var d, u, l, c = e(a),
                                s = e(i);
                            if (c && s) {
                                if ((u = a.length) != i.length) return !1;
                                for (d = u; 0 != d--;)
                                    if (!t(a[d], i[d])) return !1;
                                return !0
                            }
                            if (c != s) return !1;
                            var f = a instanceof Date,
                                $ = i instanceof Date;
                            if (f != $) return !1;
                            if (f && $) return a.getTime() == i.getTime();
                            var p = a instanceof RegExp,
                                h = i instanceof RegExp;
                            if (p != h) return !1;
                            if (p && h) return a.toString() == i.toString();
                            var y = r(a);
                            if ((u = y.length) !== r(i).length) return !1;
                            for (d = u; 0 != d--;)
                                if (!n.call(i, y[d])) return !1;
                            if (o && a instanceof Element && i instanceof Element) return a === i;
                            for (d = u; 0 != d--;)
                                if (("_owner" !== (l = y[d]) || !a.$$typeof) && !t(a[l], i[l])) return !1;
                            return !0
                        }
                        return a != a && i != i
                    }(t, a)
                } catch (t) {
                    if (t.message && t.message.match(/stack|recursion/i) || -2146828260 === t.number) return console.warn("Warning: react-fast-compare does not handle circular references.", t.name, t.message), !1;
                    throw t
                }
            }
        },
        88357: function(t, e, r) {
            "use strict";
            r.d(e, {
                w_: function() {
                    return u
                }
            });
            var n = r(67294),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = n.createContext && n.createContext(o),
                i = function() {
                    return (i = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                d = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                    return r
                };

            function u(t) {
                return function(e) {
                    return n.createElement(l, i({
                        attr: i({}, t.attr)
                    }, e), function t(e) {
                        return e && e.map(function(e, r) {
                            return n.createElement(e.tag, i({
                                key: r
                            }, e.attr), t(e.child))
                        })
                    }(t.child))
                }
            }

            function l(t) {
                var e = function(e) {
                    var r, o = t.attr,
                        a = t.size,
                        u = t.title,
                        l = d(t, ["attr", "size", "title"]),
                        c = a || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), n.createElement("svg", i({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, o, l, {
                        className: r,
                        style: i(i({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), u && n.createElement("title", null, u), t.children)
                };
                return void 0 !== a ? n.createElement(a.Consumer, null, function(t) {
                    return e(t)
                }) : e(o)
            }
        },
        69921: function(t, e) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                d = r ? Symbol.for("react.profiler") : 60114,
                u = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                c = r ? Symbol.for("react.async_mode") : 60111,
                s = r ? Symbol.for("react.concurrent_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                $ = r ? Symbol.for("react.suspense") : 60113,
                p = r ? Symbol.for("react.suspense_list") : 60120,
                h = r ? Symbol.for("react.memo") : 60115,
                y = r ? Symbol.for("react.lazy") : 60116,
                m = r ? Symbol.for("react.block") : 60121,
                g = r ? Symbol.for("react.fundamental") : 60117,
                v = r ? Symbol.for("react.responder") : 60118,
                b = r ? Symbol.for("react.scope") : 60119;

            function C(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                        case n:
                            switch (t = t.type) {
                                case c:
                                case s:
                                case a:
                                case d:
                                case i:
                                case $:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case l:
                                        case f:
                                        case y:
                                        case h:
                                        case u:
                                            return t;
                                        default:
                                            return e
                                    }
                            }
                        case o:
                            return e
                    }
                }
            }

            function O(t) {
                return C(t) === s
            }
            e.AsyncMode = c, e.ConcurrentMode = s, e.ContextConsumer = l, e.ContextProvider = u, e.Element = n, e.ForwardRef = f, e.Fragment = a, e.Lazy = y, e.Memo = h, e.Portal = o, e.Profiler = d, e.StrictMode = i, e.Suspense = $, e.isAsyncMode = function(t) {
                return O(t) || C(t) === c
            }, e.isConcurrentMode = O, e.isContextConsumer = function(t) {
                return C(t) === l
            }, e.isContextProvider = function(t) {
                return C(t) === u
            }, e.isElement = function(t) {
                return "object" == typeof t && null !== t && t.$$typeof === n
            }, e.isForwardRef = function(t) {
                return C(t) === f
            }, e.isFragment = function(t) {
                return C(t) === a
            }, e.isLazy = function(t) {
                return C(t) === y
            }, e.isMemo = function(t) {
                return C(t) === h
            }, e.isPortal = function(t) {
                return C(t) === o
            }, e.isProfiler = function(t) {
                return C(t) === d
            }, e.isStrictMode = function(t) {
                return C(t) === i
            }, e.isSuspense = function(t) {
                return C(t) === $
            }, e.isValidElementType = function(t) {
                return "string" == typeof t || "function" == typeof t || t === a || t === s || t === d || t === i || t === $ || t === p || "object" == typeof t && null !== t && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === u || t.$$typeof === l || t.$$typeof === f || t.$$typeof === g || t.$$typeof === v || t.$$typeof === b || t.$$typeof === m)
            }, e.typeOf = C
        },
        59864: function(t, e, r) {
            "use strict";
            t.exports = r(69921)
        },
        66339: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#7f7f7f",
                networkName: "email",
                path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
            });
            e.Z = n
        },
        48137: function(t, e, r) {
            "use strict";
            var n = r(86459),
                o = (0, r(79075).Z)("email", function(t, e) {
                    var r = e.subject,
                        o = e.body,
                        a = e.separator;
                    return "mailto:" + (0, n.Z)({
                        subject: r,
                        body: o ? o + a + t : t
                    })
                }, function(t) {
                    return {
                        subject: t.subject,
                        body: t.body,
                        separator: t.separator || " "
                    }
                }, {
                    openShareDialogOnClick: !1,
                    onClick: function(t, e) {
                        window.location.href = e
                    }
                });
            e.Z = o
        },
        1020: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#3b5998",
                networkName: "facebook",
                path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
            });
            e.Z = n
        },
        16573: function(t, e, r) {
            "use strict";
            var n = r(25456),
                o = r(86459),
                a = (0, r(79075).Z)("facebook", function(t, e) {
                    var r = e.quote,
                        a = e.hashtag;
                    return (0, n.Z)(t, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + (0, o.Z)({
                        u: t,
                        quote: r,
                        hashtag: a
                    })
                }, function(t) {
                    return {
                        quote: t.quote,
                        hashtag: t.hashtag
                    }
                }, {
                    windowWidth: 550,
                    windowHeight: 400
                });
            e.Z = a
        },
        70431: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#ff4500",
                networkName: "reddit",
                path: "m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"
            });
            e.Z = n
        },
        75341: function(t, e, r) {
            "use strict";
            var n = r(25456),
                o = r(86459),
                a = (0, r(79075).Z)("reddit", function(t, e) {
                    var r = e.title;
                    return (0, n.Z)(t, "reddit.url"), "https://www.reddit.com/submit" + (0, o.Z)({
                        url: t,
                        title: r
                    })
                }, function(t) {
                    return {
                        title: t.title
                    }
                }, {
                    windowWidth: 660,
                    windowHeight: 460,
                    windowPosition: "windowCenter"
                });
            e.Z = a
        },
        44276: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#37aee2",
                networkName: "telegram",
                path: "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
            });
            e.Z = n
        },
        38168: function(t, e, r) {
            "use strict";
            var n = r(25456),
                o = r(86459),
                a = (0, r(79075).Z)("telegram", function(t, e) {
                    var r = e.title;
                    return (0, n.Z)(t, "telegram.url"), "https://telegram.me/share/url" + (0, o.Z)({
                        url: t,
                        text: r
                    })
                }, function(t) {
                    return {
                        title: t.title
                    }
                }, {
                    windowWidth: 550,
                    windowHeight: 400
                });
            e.Z = a
        },
        87385: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#00aced",
                networkName: "twitter",
                path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
            });
            e.Z = n
        },
        46616: function(t, e, r) {
            "use strict";
            var n = r(25456),
                o = r(86459),
                a = (0, r(79075).Z)("twitter", function(t, e) {
                    var r = e.title,
                        a = e.via,
                        i = e.hashtags,
                        d = void 0 === i ? [] : i,
                        u = e.related,
                        l = void 0 === u ? [] : u;
                    return (0, n.Z)(t, "twitter.url"), (0, n.Z)(Array.isArray(d), "twitter.hashtags is not an array"), (0, n.Z)(Array.isArray(l), "twitter.related is not an array"), "https://twitter.com/share" + (0, o.Z)({
                        url: t,
                        text: r,
                        via: a,
                        hashtags: d.length > 0 ? d.join(",") : void 0,
                        related: l.length > 0 ? l.join(",") : void 0
                    })
                }, function(t) {
                    return {
                        hashtags: t.hashtags,
                        title: t.title,
                        via: t.via,
                        related: t.related
                    }
                }, {
                    windowWidth: 550,
                    windowHeight: 400
                });
            e.Z = a
        },
        69275: function(t, e, r) {
            "use strict";
            var n = (0, r(67267).Z)({
                color: "#25D366",
                networkName: "whatsapp",
                path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
            });
            e.Z = n
        },
        12834: function(t, e, r) {
            "use strict";
            var n = r(25456),
                o = r(86459),
                a = (0, r(79075).Z)("whatsapp", function(t, e) {
                    var r = e.title,
                        a = e.separator;
                    return (0, n.Z)(t, "whatsapp.url"), "https://" + (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent) ? "api" : "web") + ".whatsapp.com/send" + (0, o.Z)({
                        text: r ? r + a + t : t
                    })
                }, function(t) {
                    return {
                        title: t.title,
                        separator: t.separator || " "
                    }
                }, {
                    windowWidth: 550,
                    windowHeight: 400
                });
            e.Z = a
        },
        67267: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n = r(67294),
                o = function() {
                    return (o = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                a = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                    return r
                };

            function i(t) {
                var e = function(e) {
                    var r = e.bgStyle,
                        i = e.borderRadius,
                        d = e.iconFillColor,
                        u = e.round,
                        l = e.size,
                        c = a(e, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
                    return n.createElement("svg", o({
                        viewBox: "0 0 64 64",
                        width: l,
                        height: l
                    }, c), u ? n.createElement("circle", {
                        cx: "32",
                        cy: "32",
                        r: "31",
                        fill: t.color,
                        style: r
                    }) : n.createElement("rect", {
                        width: "64",
                        height: "64",
                        rx: i,
                        ry: i,
                        fill: t.color,
                        style: r
                    }), n.createElement("path", {
                        d: t.path,
                        fill: d
                    }))
                };
                return e.defaultProps = {
                    bgStyle: {},
                    borderRadius: 0,
                    iconFillColor: "white",
                    size: 64
                }, e
            }
        },
        79075: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return $
                }
            });
            var n, o = r(67294),
                a = r(94184),
                i = r.n(a),
                d = (n = function(t, e) {
                    return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function r() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                }),
                u = function() {
                    return (u = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                l = function(t, e) {
                    var r, n, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function d(a) {
                        return function(d) {
                            return function(a) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                    switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, n = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = e.call(t, i)
                                } catch (t) {
                                    a = [6, t], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, d])
                        }
                    }
                },
                c = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                    return r
                },
                s = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.openShareDialog = function(t) {
                            var r = e.props,
                                n = r.onShareWindowClose,
                                o = r.windowHeight,
                                a = void 0 === o ? 400 : o,
                                i = r.windowPosition,
                                d = r.windowWidth,
                                l = void 0 === d ? 550 : d;
                            ! function(t, e, r) {
                                var n = e.height,
                                    o = e.width,
                                    a = c(e, ["height", "width"]),
                                    i = u({
                                        height: n,
                                        width: o,
                                        location: "no",
                                        toolbar: "no",
                                        status: "no",
                                        directories: "no",
                                        menubar: "no",
                                        scrollbars: "yes",
                                        resizable: "no",
                                        centerscreen: "yes",
                                        chrome: "yes"
                                    }, a),
                                    d = window.open(t, "", Object.keys(i).map(function(t) {
                                        return "".concat(t, "=").concat(i[t])
                                    }).join(", "));
                                if (r) var l = window.setInterval(function() {
                                    try {
                                        (null === d || d.closed) && (window.clearInterval(l), r(d))
                                    } catch (t) {
                                        console.error(t)
                                    }
                                }, 1e3)
                            }(t, u({
                                height: a,
                                width: l
                            }, "windowCenter" === (void 0 === i ? "windowCenter" : i) ? {
                                left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - l / 2,
                                top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - a / 2
                            } : {
                                top: (window.screen.height - a) / 2,
                                left: (window.screen.width - l) / 2
                            }), n)
                        }, e.handleClick = function(t) {
                            var r, n, o;
                            return r = void 0, n = void 0, o = function() {
                                var e, r, n, o, a, i, d, u, c;
                                return l(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            var s;
                                            if (r = (e = this.props).beforeOnClick, n = e.disabled, o = e.networkLink, a = e.onClick, i = e.url, d = e.openShareDialogOnClick, u = o(i, e.opts), n) return [2];
                                            if (t.preventDefault(), !r || !((s = c = r()) && ("object" == typeof s || "function" == typeof s) && "function" == typeof s.then)) return [3, 2];
                                            return [4, c];
                                        case 1:
                                            l.sent(), l.label = 2;
                                        case 2:
                                            return d && this.openShareDialog(u), a && a(t, u), [2]
                                    }
                                })
                            }, new(n || (n = Promise))(function(t, a) {
                                function i(t) {
                                    try {
                                        u(o.next(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function d(t) {
                                    try {
                                        u(o.throw(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function u(e) {
                                    var r;
                                    e.done ? t(e.value) : ((r = e.value) instanceof n ? r : new n(function(t) {
                                        t(r)
                                    })).then(i, d)
                                }
                                u((o = o.apply(e, r || [])).next())
                            })
                        }, e
                    }
                    return d(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = (t.beforeOnClick, t.children),
                            r = t.className,
                            n = t.disabled,
                            a = t.disabledStyle,
                            d = t.forwardedRef,
                            l = (t.networkLink, t.networkName),
                            s = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle),
                            f = t.style,
                            $ = (t.url, t.windowHeight, t.windowPosition, t.windowWidth, c(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])),
                            p = i()("react-share__ShareButton", {
                                "react-share__ShareButton--disabled": !!n,
                                disabled: !!n
                            }, r),
                            h = s ? u(u({
                                backgroundColor: "transparent",
                                border: "none",
                                padding: 0,
                                font: "inherit",
                                color: "inherit",
                                cursor: "pointer"
                            }, f), n && a) : u(u({}, f), n && a);
                        return o.createElement("button", u({}, $, {
                            "aria-label": $["aria-label"] || l,
                            className: p,
                            onClick: this.handleClick,
                            ref: d,
                            style: h
                        }), e)
                    }, e.defaultProps = {
                        disabledStyle: {
                            opacity: .6
                        },
                        openShareDialogOnClick: !0,
                        resetButtonStyle: !0
                    }, e
                }(o.Component),
                f = function() {
                    return (f = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                $ = function(t, e, r, n) {
                    function a(a, i) {
                        var d = r(a),
                            u = f({}, a);
                        return Object.keys(d).forEach(function(t) {
                            delete u[t]
                        }), o.createElement(s, f({}, n, u, {
                            forwardedRef: i,
                            networkName: t,
                            networkLink: e,
                            opts: r(a)
                        }))
                    }
                    return a.displayName = "ShareButton-".concat(t), (0, o.forwardRef)(a)
                }
        },
        25456: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n, o = (n = function(t, e) {
                    return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(t, e)
                }, function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function r() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                }),
                a = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.name = "AssertionError", r
                    }
                    return o(e, t), e
                }(Error);

            function i(t, e) {
                if (!t) throw new a(e)
            }
        },
        86459: function(t, e, r) {
            "use strict";

            function n(t) {
                var e = Object.entries(t).filter(function(t) {
                    return null != t[1]
                }).map(function(t) {
                    var e = t[0],
                        r = t[1];
                    return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(String(r)))
                });
                return e.length > 0 ? "?".concat(e.join("&")) : ""
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        69328: function(t) {
            "use strict";
            var e = {
                decodeValues: !0,
                map: !1,
                silent: !1
            };

            function r(t) {
                return "string" == typeof t && !!t.trim()
            }

            function n(t, n) {
                var o, a, i, d, u = t.split(";").filter(r),
                    l = (o = u.shift(), a = "", i = "", (d = o.split("=")).length > 1 ? (a = d.shift(), i = d.join("=")) : i = o, {
                        name: a,
                        value: i
                    }),
                    c = l.name,
                    s = l.value;
                n = n ? Object.assign({}, e, n) : e;
                try {
                    s = n.decodeValues ? decodeURIComponent(s) : s
                } catch (t) {
                    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + s + "'. Set options.decodeValues to false to disable this feature.", t)
                }
                var f = {
                    name: c,
                    value: s
                };
                return u.forEach(function(t) {
                    var e = t.split("="),
                        r = e.shift().trimLeft().toLowerCase(),
                        n = e.join("=");
                    "expires" === r ? f.expires = new Date(n) : "max-age" === r ? f.maxAge = parseInt(n, 10) : "secure" === r ? f.secure = !0 : "httponly" === r ? f.httpOnly = !0 : "samesite" === r ? f.sameSite = n : f[r] = n
                }), f
            }

            function o(t, o) {
                if (o = o ? Object.assign({}, e, o) : e, !t) return o.map ? {} : [];
                if (t.headers) {
                    if ("function" == typeof t.headers.getSetCookie) t = t.headers.getSetCookie();
                    else if (t.headers["set-cookie"]) t = t.headers["set-cookie"];
                    else {
                        var a = t.headers[Object.keys(t.headers).find(function(t) {
                            return "set-cookie" === t.toLowerCase()
                        })];
                        a || !t.headers.cookie || o.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), t = a
                    }
                }
                return (Array.isArray(t) || (t = [t]), (o = o ? Object.assign({}, e, o) : e).map) ? t.filter(r).reduce(function(t, e) {
                    var r = n(e, o);
                    return t[r.name] = r, t
                }, {}) : t.filter(r).map(function(t) {
                    return n(t, o)
                })
            }
            t.exports = o, t.exports.parse = o, t.exports.parseString = n, t.exports.splitCookiesString = function(t) {
                if (Array.isArray(t)) return t;
                if ("string" != typeof t) return [];
                var e, r, n, o, a, i = [],
                    d = 0;

                function u() {
                    for (; d < t.length && /\s/.test(t.charAt(d));) d += 1;
                    return d < t.length
                }
                for (; d < t.length;) {
                    for (e = d, a = !1; u();)
                        if ("," === (r = t.charAt(d))) {
                            for (n = d, d += 1, u(), o = d; d < t.length && "=" !== (r = t.charAt(d)) && ";" !== r && "," !== r;) d += 1;
                            d < t.length && "=" === t.charAt(d) ? (a = !0, d = o, i.push(t.substring(e, n)), e = d) : d = n + 1
                        } else d += 1;
                    (!a || d >= t.length) && i.push(t.substring(e, t.length))
                }
                return i
            }
        },
        34052: function(t, e, r) {
            "use strict";
            var n, o;
            let a, i;
            r.d(e, {
                Z: function() {
                    return m
                }
            }), (n = a || (a = {})).FirstName = "firstName", n.LastName = "lastName", n.Country = "country", n.City = "city", n.PostalCode = "zip", n.Zone = "province", n.Address1 = "address1", n.Address2 = "address2", n.Phone = "phone", n.Company = "company";
            let d = "https://atlas.shopifysvc.com/graphql";
            (o = i || (i = {})).Countries = "countries", o.Country = "country";
            let u = {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                l = /({\w+})/g,
                c = {
                    "{firstName}": a.FirstName,
                    "{lastName}": a.LastName,
                    "{country}": a.Country,
                    "{city}": a.City,
                    "{zip}": a.PostalCode,
                    "{province}": a.Zone,
                    "{address1}": a.Address1,
                    "{address2}": a.Address2,
                    "{phone}": a.Phone,
                    "{company}": a.Company
                },
                s = `
query countries($locale: SupportedLocale!) {
  countries(locale: $locale) {
    name
    code
    continent
    phoneNumberPrefix
    autocompletionField
    provinceKey
    labels {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      postalCode
      zone
    }
    optionalLabels {
      address2
    }
    formatting {
      edit
      show
    }
    zones {
      name
      code
    }
  }
}

query country($countryCode: SupportedCountry!, $locale: SupportedLocale!) {
  country(countryCode: $countryCode, locale: $locale) {
    name
    code
    continent
    phoneNumberPrefix
    autocompletionField
    provinceKey
    labels {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      postalCode
      zone
    }
    optionalLabels {
      address2
    }
    formatting {
      edit
      show
    }
    zones {
      name
      code
    }
  }
}
`,
                f = h(async (t, {
                    includeHiddenZones: e = !1
                } = {}) => {
                    let r = await fetch(d, {
                            method: "POST",
                            headers: u,
                            body: JSON.stringify({
                                query: s,
                                operationName: i.Countries,
                                variables: {
                                    locale: t.replace(/-/, "_").toUpperCase(),
                                    includeHiddenZones: e
                                }
                            })
                        }),
                        n = await r.json();
                    if (!("data" in n) && "errors" in n) throw new p(n);
                    return n.data.countries
                }),
                $ = h(async (t, e, {
                    includeHiddenZones: r = !1
                } = {}) => {
                    let n = await fetch(d, {
                            method: "POST",
                            headers: u,
                            body: JSON.stringify({
                                query: s,
                                operationName: i.Country,
                                variables: {
                                    countryCode: e,
                                    locale: t.replace(/-/, "_").toUpperCase(),
                                    includeHiddenZones: r
                                }
                            })
                        }),
                        o = await n.json();
                    if (!("data" in o) && "errors" in o) throw new p(o);
                    return o.data.country
                });
            class p extends Error {
                constructor(t) {
                    let e = t.errors.map(t => t.message).join("; ");
                    super(e)
                }
            }

            function h(t) {
                let e = {};
                return (...r) => {
                    let n = JSON.stringify(r);
                    return e[n] || (e[n] = t.apply(this, r)), e[n]
                }
            }
            let y = new Map;
            class m {
                static resetCache() {
                    y.clear()
                }
                constructor(t) {
                    this.locale = t, this.locale = t
                }
                updateLocale(t) {
                    this.locale = t
                }
                async getCountry(t, {
                    includeHiddenZones: e = !1
                } = {}) {
                    let r = this.loadCountryFromCache(t, e);
                    return r || $(this.locale, t, {
                        includeHiddenZones: e
                    })
                }
                async getCountries({
                    includeHiddenZones: t = !1
                } = {}) {
                    let e = this.cacheKey(this.locale, t),
                        r = y.get(e);
                    if (r) return r;
                    let n = await f(this.locale, {
                        includeHiddenZones: t
                    });
                    return y.set(e, n), n
                }
                async getZoneName(t, e) {
                    let r = await this.getCountry(t),
                        n = r.zones.find(t => t.code === e);
                    if (null != n && n.name) return n.name
                }
                async format(t) {
                    let e = await this.getCountry(t.country);
                    return function(t, e) {
                        let r = e.formatting.show || "{lastName} {firstName}_{company}_{address1} {address2}_{city} {province} {zip}_{country}_{phone}";
                        return r.split("_").map(r => (function(t, e, r) {
                            let n = e.match(l),
                                o = e;
                            if (!n) return "";
                            let i = !0;
                            return (n.forEach(e => {
                                let n = e.replace("{", "").replace("}", "");
                                switch (r[n] && (i = !1), n) {
                                    case a.Country:
                                        o = o.replace(`{${a.Country}}`, t.name);
                                        break;
                                    case a.Zone:
                                        var d, u;
                                        o = o.replace(`{${a.Zone}}`, r.province ? (d = t.zones, u = r.province, d.find(t => t.code === u) || {
                                            name: "",
                                            code: ""
                                        }).name : "");
                                        break;
                                    default:
                                        o = o.replace(e, r[n] || "")
                                }
                            }), i) ? "" : o.trim().replace("  ", " ")
                        })(e, r, t).trim())
                    }(t, e)
                }
                async getOrderedFields(t) {
                    let e = await this.getCountry(t);
                    return function(t) {
                        let e = t ? t.formatting.edit : "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}";
                        return e.split("_").map(t => {
                            let e = t.match(l);
                            return e ? e.map(t => c[t]) : []
                        })
                    }(e)
                }
                cacheKey(t, e) {
                    return `${t}-${e}`
                }
                loadCountryFromCache(t, e) {
                    let r = y.get(this.cacheKey(this.locale, e));
                    return r ? r.find(({
                        code: e
                    }) => e === t) : null
                }
            }
        },
        3788: function(t, e, r) {
            "use strict";
            r.d(e, {
                ZP: function() {
                    return rI
                },
                yf: function() {
                    return rA
                }
            });
            var n = {
                    version: 4,
                    country_calling_codes: {
                        1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                        7: ["RU", "KZ"],
                        20: ["EG"],
                        27: ["ZA"],
                        30: ["GR"],
                        31: ["NL"],
                        32: ["BE"],
                        33: ["FR"],
                        34: ["ES"],
                        36: ["HU"],
                        39: ["IT", "VA"],
                        40: ["RO"],
                        41: ["CH"],
                        43: ["AT"],
                        44: ["GB", "GG", "IM", "JE"],
                        45: ["DK"],
                        46: ["SE"],
                        47: ["NO", "SJ"],
                        48: ["PL"],
                        49: ["DE"],
                        51: ["PE"],
                        52: ["MX"],
                        53: ["CU"],
                        54: ["AR"],
                        55: ["BR"],
                        56: ["CL"],
                        57: ["CO"],
                        58: ["VE"],
                        60: ["MY"],
                        61: ["AU", "CC", "CX"],
                        62: ["ID"],
                        63: ["PH"],
                        64: ["NZ"],
                        65: ["SG"],
                        66: ["TH"],
                        81: ["JP"],
                        82: ["KR"],
                        84: ["VN"],
                        86: ["CN"],
                        90: ["TR"],
                        91: ["IN"],
                        92: ["PK"],
                        93: ["AF"],
                        94: ["LK"],
                        95: ["MM"],
                        98: ["IR"],
                        211: ["SS"],
                        212: ["MA", "EH"],
                        213: ["DZ"],
                        216: ["TN"],
                        218: ["LY"],
                        220: ["GM"],
                        221: ["SN"],
                        222: ["MR"],
                        223: ["ML"],
                        224: ["GN"],
                        225: ["CI"],
                        226: ["BF"],
                        227: ["NE"],
                        228: ["TG"],
                        229: ["BJ"],
                        230: ["MU"],
                        231: ["LR"],
                        232: ["SL"],
                        233: ["GH"],
                        234: ["NG"],
                        235: ["TD"],
                        236: ["CF"],
                        237: ["CM"],
                        238: ["CV"],
                        239: ["ST"],
                        240: ["GQ"],
                        241: ["GA"],
                        242: ["CG"],
                        243: ["CD"],
                        244: ["AO"],
                        245: ["GW"],
                        246: ["IO"],
                        247: ["AC"],
                        248: ["SC"],
                        249: ["SD"],
                        250: ["RW"],
                        251: ["ET"],
                        252: ["SO"],
                        253: ["DJ"],
                        254: ["KE"],
                        255: ["TZ"],
                        256: ["UG"],
                        257: ["BI"],
                        258: ["MZ"],
                        260: ["ZM"],
                        261: ["MG"],
                        262: ["RE", "YT"],
                        263: ["ZW"],
                        264: ["NA"],
                        265: ["MW"],
                        266: ["LS"],
                        267: ["BW"],
                        268: ["SZ"],
                        269: ["KM"],
                        290: ["SH", "TA"],
                        291: ["ER"],
                        297: ["AW"],
                        298: ["FO"],
                        299: ["GL"],
                        350: ["GI"],
                        351: ["PT"],
                        352: ["LU"],
                        353: ["IE"],
                        354: ["IS"],
                        355: ["AL"],
                        356: ["MT"],
                        357: ["CY"],
                        358: ["FI", "AX"],
                        359: ["BG"],
                        370: ["LT"],
                        371: ["LV"],
                        372: ["EE"],
                        373: ["MD"],
                        374: ["AM"],
                        375: ["BY"],
                        376: ["AD"],
                        377: ["MC"],
                        378: ["SM"],
                        380: ["UA"],
                        381: ["RS"],
                        382: ["ME"],
                        383: ["XK"],
                        385: ["HR"],
                        386: ["SI"],
                        387: ["BA"],
                        389: ["MK"],
                        420: ["CZ"],
                        421: ["SK"],
                        423: ["LI"],
                        500: ["FK"],
                        501: ["BZ"],
                        502: ["GT"],
                        503: ["SV"],
                        504: ["HN"],
                        505: ["NI"],
                        506: ["CR"],
                        507: ["PA"],
                        508: ["PM"],
                        509: ["HT"],
                        590: ["GP", "BL", "MF"],
                        591: ["BO"],
                        592: ["GY"],
                        593: ["EC"],
                        594: ["GF"],
                        595: ["PY"],
                        596: ["MQ"],
                        597: ["SR"],
                        598: ["UY"],
                        599: ["CW", "BQ"],
                        670: ["TL"],
                        672: ["NF"],
                        673: ["BN"],
                        674: ["NR"],
                        675: ["PG"],
                        676: ["TO"],
                        677: ["SB"],
                        678: ["VU"],
                        679: ["FJ"],
                        680: ["PW"],
                        681: ["WF"],
                        682: ["CK"],
                        683: ["NU"],
                        685: ["WS"],
                        686: ["KI"],
                        687: ["NC"],
                        688: ["TV"],
                        689: ["PF"],
                        690: ["TK"],
                        691: ["FM"],
                        692: ["MH"],
                        850: ["KP"],
                        852: ["HK"],
                        853: ["MO"],
                        855: ["KH"],
                        856: ["LA"],
                        880: ["BD"],
                        886: ["TW"],
                        960: ["MV"],
                        961: ["LB"],
                        962: ["JO"],
                        963: ["SY"],
                        964: ["IQ"],
                        965: ["KW"],
                        966: ["SA"],
                        967: ["YE"],
                        968: ["OM"],
                        970: ["PS"],
                        971: ["AE"],
                        972: ["IL"],
                        973: ["BH"],
                        974: ["QA"],
                        975: ["BT"],
                        976: ["MN"],
                        977: ["NP"],
                        992: ["TJ"],
                        993: ["TM"],
                        994: ["AZ"],
                        995: ["GE"],
                        996: ["KG"],
                        998: ["UZ"]
                    },
                    countries: {
                        AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                        AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                            ]
                        ],
                        AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                            ], "0"
                        ],
                        AF: ["93", "00", "[2-7]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                            ], "0"
                        ],
                        AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
                        AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
                        AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                            [
                                ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                            ], "0"
                        ],
                        AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                            ], "0"
                        ],
                        AO: ["244", "00", "[29]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                            ]
                        ],
                        AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                            [
                                ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                                ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                                ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                                ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                            ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"
                        ],
                        AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
                        AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                                ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                                ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                                ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                            ], "0"
                        ],
                        AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                            ], "0", 0, "(183[12])|0", 0, 0, 0, [
                                ["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]],
                                ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                                ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                                ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                                ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                                ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                            ], "0011"
                        ],
                        AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                            ]
                        ],
                        AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                        AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                            ], "0"
                        ],
                        BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                            ], "0"
                        ],
                        BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
                        BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                                ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                                ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                                ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                            ], "0"
                        ],
                        BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                            ], "0"
                        ],
                        BF: ["226", "00", "[025-7]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                            ]
                        ],
                        BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12],
                            [
                                ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                            ], "0"
                        ],
                        BH: ["973", "00", "[136-9]\\d{7}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]
                            ]
                        ],
                        BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                            ]
                        ],
                        BJ: ["229", "00", "[24-689]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                            ]
                        ],
                        BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                            ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                        ]],
                        BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
                        BN: ["673", "00", "[2-578]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                            ]
                        ],
                        BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                            [
                                ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                                ["(\\d{8})", "$1", ["[67]"]],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                            ], "0", 0, "0(1\\d)?"
                        ],
                        BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                        BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                                ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                                ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                            ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"
                        ],
                        BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
                        BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                            ]
                        ],
                        BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                                ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                                ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                            ], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"
                        ],
                        BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                                ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                            ]
                        ],
                        CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [
                            ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]],
                            ["", [10]],
                            ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                            ["900[2-9]\\d{6}", [10]],
                            ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]
                        ]],
                        CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                            ["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                            ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"],
                        CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0"
                        ],
                        CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                            ]
                        ],
                        CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                            [
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                            ]
                        ],
                        CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                            ], "0"
                        ],
                        CI: ["225", "00", "[02]\\d{9}", [10],
                            [
                                ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                            ]
                        ],
                        CK: ["682", "00", "[2-578]\\d{4}", [5],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                            ]
                        ],
                        CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                            [
                                ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                            ]
                        ],
                        CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                            ]
                        ],
                        CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                                ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                            ], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"
                        ],
                        CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11],
                            [
                                ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                                ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                            ], "0", 0, "0([3579]|4(?:[14]4|56))?"
                        ],
                        CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                            ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"
                        ],
                        CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                                ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                                ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                            ], "0"
                        ],
                        CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                            ]
                        ],
                        CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                            ], 0, 0, 0, 0, 0, "[69]"
                        ],
                        CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [
                            ["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                            ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]],
                            ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                            ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                            ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]
                        ], "0011"],
                        CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                            ]
                        ],
                        CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ]
                        ],
                        DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                            [
                                ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                                ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                                ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                                ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                                ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                                ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                                ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                                ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                                ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                                ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                                ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                            ], "0"
                        ],
                        DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                            ]
                        ],
                        DK: ["45", "00", "[2-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                            ]
                        ],
                        DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
                        DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
                        DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                            ], "0"
                        ],
                        EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                                ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]
                            ], "0"
                        ],
                        EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                        ER: ["291", "00", "[178]\\d{6}", [7],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                            ], "0"
                        ],
                        ES: ["34", "00", "[5-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                            ]
                        ],
                        ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                            ], "0"
                        ],
                        FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                                ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                                ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                            ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"
                        ],
                        FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        FK: ["500", "00", "[2-7]\\d{4}", [5]],
                        FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                            ]
                        ],
                        FO: ["298", "00", "[2-9]\\d{5}", [6],
                            [
                                ["(\\d{6})", "$1", ["[2-9]"]]
                            ], 0, 0, "(10(?:01|[12]0|88))"
                        ],
                        FR: ["33", "00", "[1-9]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                            ], "0"
                        ],
                        GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                            ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"
                        ],
                        GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                                ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                                ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]],
                                ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]],
                                ["80[08]\\d{7}|800\\d{6}|8001111"],
                                ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                                ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                                ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                                ["56\\d{8}", [10]]
                            ], 0, " x"
                        ],
                        GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
                        GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                            ], "0"
                        ],
                        GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]
                            ], "0"
                        ],
                        GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [
                            ["1481[25-9]\\d{5}", [10]],
                            ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                            ["80[08]\\d{7}|800\\d{6}|8001111"],
                            ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                            ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]],
                            ["56\\d{8}", [10]]
                        ]],
                        GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                            ], "0"
                        ],
                        GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                            ]
                        ],
                        GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                            ]
                        ],
                        GM: ["220", "00", "[2-9]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ]
                        ],
                        GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                            ]
                        ],
                        GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],
                                ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                                ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                            ]
                        ],
                        GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                            ]
                        ],
                        GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                            [
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                                ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ]
                        ],
                        GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([3-9]\\d{6})$|1", "671$1", 0, "671"],
                        GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                            ]
                        ],
                        GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|510|862)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ]
                        ],
                        HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                            [
                                ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                            ]
                        ],
                        HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]
                            ]
                        ],
                        HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                            ], "06"
                        ],
                        ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                                ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                                ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                                ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                                ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                                ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                            ], "0"
                        ],
                        IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                                ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                                ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                                ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                                ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                                ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                            ], "0"
                        ],
                        IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
                        IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                                ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                                ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                                ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                            ], "0"
                        ],
                        IO: ["246", "00", "3\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                            ]
                        ],
                        IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                            [
                                ["(\\d{4,5})", "$1", ["96"], "0$1"],
                                ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                            ], "0"
                        ],
                        IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                                ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                                ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                                ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                                ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                            ], 0, 0, 0, 0, 0, 0, [
                                ["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],
                                ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                                ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                                ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]],
                                ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                                ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                            ]
                        ],
                        JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [
                            ["1534[0-24-8]\\d{5}"],
                            ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                            ["80(?:07(?:35|81)|8901)\\d{4}"],
                            ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                            ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                            ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],
                            ["56\\d{8}"]
                        ]],
                        JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                        JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                            ], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"
                        ],
                        KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0"
                        ],
                        KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                        KM: ["269", "00", "[3478]\\d{6}", [7],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                            ]
                        ],
                        KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
                        KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                            ], "0"
                        ],
                        KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                            ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"
                        ],
                        KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                            [
                                ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                            ]
                        ],
                        KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
                        KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                        LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                            ], "0"
                        ],
                        LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                            ], "0"
                        ],
                        LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
                        LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                            ], "0", 0, "(1001)|0"
                        ],
                        LK: ["94", "00", "[1-9]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                            ], "0"
                        ],
                        LR: ["231", "00", "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]
                            ], "0"
                        ],
                        LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                            ]
                        ],
                        LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                            ], "8", 0, "[08]"
                        ],
                        LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                            ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"
                        ],
                        LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                            ]
                        ],
                        LY: ["218", "00", "[2-9]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                            ], "0"
                        ],
                        MA: ["212", "00", "[5-8]\\d{8}", [9],
                            [
                                ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[1289]|389)", "529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                                ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],
                                ["80\\d{7}"],
                                ["89\\d{7}"], 0, 0, 0, 0, ["592(?:4[0-2]|93)\\d{4}"]
                            ]
                        ],
                        MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                                ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                            ], "0"
                        ],
                        MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                            ], "0"
                        ],
                        ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                            ], "0"
                        ],
                        MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [
                            ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
                            ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                            ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:395|76[018])\\d|475[0-5])\\d{4}"]
                        ]],
                        MG: ["261", "00", "[23]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                            ], "0", 0, "([24-9]\\d{6})$|0", "20$1"
                        ],
                        MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                            ], "1"
                        ],
                        MK: ["389", "00", "[2-578]\\d{7}", [8],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                            ], "0"
                        ],
                        ML: ["223", "00", "[24-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                            ]
                        ],
                        MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                                ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                            ], "0"
                        ],
                        MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                            [
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                                ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                                ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                                ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                            ], "0"
                        ],
                        MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                            [
                                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                            ]
                        ],
                        MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
                        MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                            ]
                        ],
                        MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
                        MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                            ]
                        ],
                        MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "020"
                        ],
                        MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                            ], "0"
                        ],
                        MX: ["52", "0[09]", "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                            [
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                                ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                            ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"
                        ],
                        MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                            ], "0"
                        ],
                        MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                            ]
                        ],
                        NE: ["227", "00", "[027-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]
                            ]
                        ],
                        NF: ["672", "00", "[13]\\d{5}", [6],
                            [
                                ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                                ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                            ], 0, 0, "([0-258]\\d{4})$", "3$1"
                        ],
                        NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                            [
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                                ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                            ], "0"
                        ],
                        NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                            ]
                        ],
                        NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                                ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                            ], "0"
                        ],
                        NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                            [
                                ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]
                            ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"
                        ],
                        NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                            [
                                ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                                ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                                ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                            ], "0"
                        ],
                        NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                            ]
                        ],
                        NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                            ]
                        ],
                        NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, "00"
                        ],
                        OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                            [
                                ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                            ]
                        ],
                        PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                                ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                                ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                            ], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "
                        ],
                        PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                            ]
                        ],
                        PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                                ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                                ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                            ], "0"
                        ],
                        PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                                ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                                ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                                ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                                ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                            ], "0"
                        ],
                        PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{5})", "$1", ["19"]],
                                ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                                ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                                ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                            ]
                        ],
                        PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                            ], "0"
                        ],
                        PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                        PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                            ]
                        ],
                        PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                            ]
                        ],
                        PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                            [
                                ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                                ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                            ], "0"
                        ],
                        QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                            ]
                        ],
                        RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, [
                                ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
                                ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"],
                                ["80\\d{7}"],
                                ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"],
                                ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                            ]
                        ],
                        RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                            [
                                ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                                ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, 0, " int "
                        ],
                        RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                                ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                            ], "0"
                        ],
                        RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                            [
                                ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                                ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                                ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                            ], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"
                        ],
                        RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                            ], "0"
                        ],
                        SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                            ], "0"
                        ],
                        SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                            ]
                        ],
                        SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                            [
                                ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        SD: ["249", "00", "[19]\\d{8}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], "0"
                        ],
                        SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                                ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                                ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                                ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                            ], "0"
                        ],
                        SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                                ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                                ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                            ]
                        ],
                        SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                        SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                            [
                                ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                                ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                            ], "0", 0, 0, 0, 0, 0, 0, "00"
                        ],
                        SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                        SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                            [
                                ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                                ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                            ], "0"
                        ],
                        SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                            ], "0"
                        ],
                        SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                            ], 0, 0, "([89]\\d{5})$", "0549$1"
                        ],
                        SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                            ]
                        ],
                        SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                            [
                                ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                                ["(\\d{6})", "$1", ["[134]"]],
                                ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                                ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
                                ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]
                            ], "0"
                        ],
                        SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                                ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                                ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                            ]
                        ],
                        SS: ["211", "00", "[19]\\d{8}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                            ], "0"
                        ],
                        ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                            ]
                        ],
                        SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                            ]
                        ],
                        SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
                        SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                            ], "0"
                        ],
                        SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                                ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                            ]
                        ],
                        TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                        TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
                        TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "00"
                        ],
                        TG: ["228", "00", "[279]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                            ]
                        ],
                        TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                            [
                                ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                                ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                            ], "0"
                        ],
                        TJ: ["992", "810", "[0-57-9]\\d{8}", [9],
                            [
                                ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[04]|[34]7"]],
                                ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                            ], 0, 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                        TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                            ]
                        ],
                        TM: ["993", "810", "[1-6]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                                ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                            ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                            [
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                            ]
                        ],
                        TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                            [
                                ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                                ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                            ]
                        ],
                        TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                            [
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                                ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                            ], "0"
                        ],
                        TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
                        TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                            [
                                ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                                ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                            ]
                        ],
                        TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                            [
                                ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                                ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                                ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, 0, "#"
                        ],
                        TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                            ], "0"
                        ],
                        UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                                ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                            ], "0", 0, 0, 0, 0, 0, 0, "0~0"
                        ],
                        UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                            [
                                ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                                ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                            ], "0"
                        ],
                        US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                            [
                                ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                                ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                            ], "1", 0, 0, 0, 0, 0, [
                                ["5056(?:[0-35-9]\\d|4[46])\\d{4}|(?:4722|505[2-57-9]|983[29])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                                [""],
                                ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                                ["900[2-9]\\d{6}"],
                                ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]
                            ]
                        ],
                        UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13],
                            [
                                ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                                ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]
                            ], "0", 0, 0, 0, 0, 0, 0, "00", " int. "
                        ],
                        UZ: ["998", "810", "200\\d{6}|(?:33|[5-79]\\d|88)\\d{7}", [9],
                            [
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]
                            ], "8", 0, 0, 0, 0, 0, 0, "8~10"
                        ],
                        VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                        VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
                        VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                            [
                                ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                            ], "0"
                        ],
                        VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
                        VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
                        VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                                ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                                ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                                ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                            ], "0"
                        ],
                        VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                            [
                                ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                            ]
                        ],
                        WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                            [
                                ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                                ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                            ]
                        ],
                        WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                            [
                                ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                                ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                                ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                            ]
                        ],
                        XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                            [
                                ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                            ], "0"
                        ],
                        YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                            [
                                ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                            ], "0"
                        ],
                        YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                            ["269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}"],
                            ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"],
                            ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]
                        ]],
                        ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                            ], "0"
                        ],
                        ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                            ], "0"
                        ],
                        ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                            [
                                ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                                ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                                ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                                ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                                ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                                ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                                ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                                ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                                ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                                ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                            ], "0"
                        ]
                    },
                    nonGeographic: {
                        800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
                        ],
                        808: ["808", 0, "[1-9]\\d{7}", [8],
                            [
                                ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                        ],
                        870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                        ],
                        878: ["878", 0, "10\\d{10}", [12],
                            [
                                ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                        ],
                        881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10],
                            [
                                ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
                                ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]
                        ],
                        882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12],
                            [
                                ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                                ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
                                ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
                                ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                                ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                                ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]],
                                ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                                ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]
                        ],
                        883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12],
                            [
                                ["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                                ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
                                ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                                ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]
                        ],
                        888: ["888", 0, "\\d{11}", [11],
                            [
                                ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                        ],
                        979: ["979", 0, "[1359]\\d{8}", [9],
                            [
                                ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                            ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                        ]
                    }
                },
                o = {}.constructor;

            function a(t) {
                return null != t && t.constructor === o
            }

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function u(t) {
                var e, r, n, o, u = function(t) {
                        if (Array.isArray(t)) return t
                    }(e = Array.prototype.slice.call(t)) || function(t, e) {
                        var r, n, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != o) {
                            var a = [],
                                i = !0,
                                d = !1;
                            try {
                                for (o = o.call(t); !(i = (r = o.next()).done) && (a.push(r.value), !e || a.length !== e); i = !0);
                            } catch (t) {
                                d = !0, n = t
                            } finally {
                                try {
                                    i || null == o.return || o.return()
                                } finally {
                                    if (d) throw n
                                }
                            }
                            return a
                        }
                    }(e, 4) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return d(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(t, e)
                        }
                    }(e, 4) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    l = u[0],
                    c = u[1],
                    s = u[2],
                    f = u[3];
                if ("string" == typeof l) r = l;
                else throw TypeError("A text for parsing must be a string.");
                if (c && "string" != typeof c) {
                    if (a(c)) s ? (n = c, o = s) : o = c;
                    else throw Error("Invalid second argument: ".concat(c))
                } else f ? (n = s, o = f) : (n = void 0, o = s), c && (n = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(r), !0).forEach(function(e) {
                            var n;
                            n = r[e], e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({
                    defaultCountry: c
                }, n));
                return {
                    text: r,
                    options: n,
                    metadata: o
                }
            }
            var l = "0-9０-９٠-٩۰-۹",
                c = "".concat("-‐-―−ー－").concat("／/").concat("．.").concat(" \xa0\xad​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～"),
                s = "+＋";

            function f(t) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function $(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (h = function(t) {
                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                    if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return y(t, arguments, v(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), g(r, t)
                })(t)
            }

            function y(t, e, r) {
                return (y = m() ? Reflect.construct : function(t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var o = new(Function.bind.apply(t, n));
                    return r && g(o, r.prototype), o
                }).apply(null, arguments)
            }

            function m() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function g(t, e) {
                return (g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && g(t, e)
                }(a, t);
                var e, r, n, o = (e = m(), function() {
                    var t, r = v(a);
                    if (e) {
                        var n = v(this).constructor;
                        t = Reflect.construct(r, arguments, n)
                    } else t = r.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" === f(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                        return p(t)
                    }(this, t)
                });

                function a(t) {
                    var e;
                    return ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, a), Object.setPrototypeOf(p(e = o.call(this, t)), a.prototype), e.name = e.constructor.name, e
                }
                return r && $(a.prototype, r), n && $(a, n), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), a
            }(h(Error));

            function C(t, e) {
                t = t.split("-"), e = e.split("-");
                for (var r = t[0].split("."), n = e[0].split("."), o = 0; o < 3; o++) {
                    var a = Number(r[o]),
                        i = Number(n[o]);
                    if (a > i) return 1;
                    if (i > a) return -1;
                    if (!isNaN(a) && isNaN(i)) return 1;
                    if (isNaN(a) && !isNaN(i)) return -1
                }
                return t[1] && e[1] ? t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : 0 : !t[1] && e[1] ? 1 : t[1] && !e[1] ? -1 : 0
            }

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function S(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }

            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function w(t, e, r) {
                return e && P(t.prototype, e), r && P(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            var N = " ext. ",
                j = /^\d+$/,
                E = function() {
                    function t(e) {
                        S(this, t),
                            function(t) {
                                if (!t) throw Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                if (!a(t) || !a(t.countries)) throw Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(a(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + k(t) + ": " + t, "."))
                            }(e), this.metadata = e, F.call(this, e)
                    }
                    return w(t, [{
                        key: "getCountries",
                        value: function() {
                            return Object.keys(this.metadata.countries).filter(function(t) {
                                return "001" !== t
                            })
                        }
                    }, {
                        key: "getCountryMetadata",
                        value: function(t) {
                            return this.metadata.countries[t]
                        }
                    }, {
                        key: "nonGeographic",
                        value: function() {
                            if (!this.v1 && !this.v2 && !this.v3) return this.metadata.nonGeographic || this.metadata.nonGeographical
                        }
                    }, {
                        key: "hasCountry",
                        value: function(t) {
                            return void 0 !== this.getCountryMetadata(t)
                        }
                    }, {
                        key: "hasCallingCode",
                        value: function(t) {
                            if (this.getCountryCodesForCallingCode(t)) return !0;
                            if (this.nonGeographic()) {
                                if (this.nonGeographic()[t]) return !0
                            } else {
                                var e = this.countryCallingCodes()[t];
                                if (e && 1 === e.length && "001" === e[0]) return !0
                            }
                        }
                    }, {
                        key: "isNonGeographicCallingCode",
                        value: function(t) {
                            return this.nonGeographic() ? !!this.nonGeographic()[t] : !this.getCountryCodesForCallingCode(t)
                        }
                    }, {
                        key: "country",
                        value: function(t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "selectNumberingPlan",
                        value: function(t, e) {
                            if (t && j.test(t) && (e = t, t = null), t && "001" !== t) {
                                if (!this.hasCountry(t)) throw Error("Unknown country: ".concat(t));
                                this.numberingPlan = new x(this.getCountryMetadata(t), this)
                            } else if (e) {
                                if (!this.hasCallingCode(e)) throw Error("Unknown calling code: ".concat(e));
                                this.numberingPlan = new x(this.getNumberingPlanMetadata(e), this)
                            } else this.numberingPlan = void 0;
                            return this
                        }
                    }, {
                        key: "getCountryCodesForCallingCode",
                        value: function(t) {
                            var e = this.countryCallingCodes()[t];
                            if (e) {
                                if (1 === e.length && 3 === e[0].length) return;
                                return e
                            }
                        }
                    }, {
                        key: "getCountryCodeForCallingCode",
                        value: function(t) {
                            var e = this.getCountryCodesForCallingCode(t);
                            if (e) return e[0]
                        }
                    }, {
                        key: "getNumberingPlanMetadata",
                        value: function(t) {
                            var e = this.getCountryCodeForCallingCode(t);
                            if (e) return this.getCountryMetadata(e);
                            if (this.nonGeographic()) {
                                var r = this.nonGeographic()[t];
                                if (r) return r
                            } else {
                                var n = this.countryCallingCodes()[t];
                                if (n && 1 === n.length && "001" === n[0]) return this.metadata.countries["001"]
                            }
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function() {
                            return this.numberingPlan.callingCode()
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            return this.numberingPlan.IDDPrefix()
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            return this.numberingPlan.defaultIDDPrefix()
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.numberingPlan.nationalNumberPattern()
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            return this.numberingPlan.possibleLengths()
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            return this.numberingPlan.formats()
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this.numberingPlan.nationalPrefixForParsing()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.numberingPlan.nationalPrefixTransformRule()
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.numberingPlan.leadingDigits()
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return this.numberingPlan.hasTypes()
                        }
                    }, {
                        key: "type",
                        value: function(t) {
                            return this.numberingPlan.type(t)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.numberingPlan.ext()
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function() {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function(t) {
                            return this.selectNumberingPlan(t)
                        }
                    }, {
                        key: "hasSelectedNumberingPlan",
                        value: function() {
                            return void 0 !== this.numberingPlan
                        }
                    }]), t
                }(),
                x = function() {
                    function t(e, r) {
                        S(this, t), this.globalMetadataObject = r, this.metadata = e, F.call(this, r.metadata)
                    }
                    return w(t, [{
                        key: "callingCode",
                        value: function() {
                            return this.metadata[0]
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function() {
                            return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function(t) {
                            return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            var t = this;
                            return (this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || []).map(function(e) {
                                return new I(e, t)
                            })
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function() {
                            return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function(t) {
                            return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "_nationalPrefixForParsing",
                        value: function() {
                            return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this._nationalPrefixForParsing() || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function() {
                            return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return (!this.types() || 0 !== this.types().length) && !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function(t) {
                            if (this.hasTypes() && T(this.types(), t)) return new _(T(this.types(), t), this)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.v1 || this.v2 ? N : this.metadata[13] || N
                        }
                    }]), t
                }(),
                I = function() {
                    function t(e, r) {
                        S(this, t), this._format = e, this.metadata = r
                    }
                    return w(t, [{
                        key: "pattern",
                        value: function() {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function() {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function() {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                        value: function() {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function() {
                            return !!this.nationalPrefixFormattingRule() && !A.test(this.nationalPrefixFormattingRule())
                        }
                    }, {
                        key: "internationalFormat",
                        value: function() {
                            return this._format[5] || this.format()
                        }
                    }]), t
                }(),
                A = /^\(?\$1\)?$/,
                _ = function() {
                    function t(e, r) {
                        S(this, t), this.type = e, this.metadata = r
                    }
                    return w(t, [{
                        key: "pattern",
                        value: function() {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), t
                }();

            function T(t, e) {
                switch (e) {
                    case "FIXED_LINE":
                        return t[0];
                    case "MOBILE":
                        return t[1];
                    case "TOLL_FREE":
                        return t[2];
                    case "PREMIUM_RATE":
                        return t[3];
                    case "PERSONAL_NUMBER":
                        return t[4];
                    case "VOICEMAIL":
                        return t[5];
                    case "UAN":
                        return t[6];
                    case "PAGER":
                        return t[7];
                    case "VOIP":
                        return t[8];
                    case "SHARED_COST":
                        return t[9]
                }
            }
            var k = function(t) {
                return O(t)
            };

            function M(t, e) {
                if ((e = new E(e)).hasCountry(t)) return e.country(t).countryCallingCode();
                throw Error("Unknown country: ".concat(t))
            }

            function R(t, e) {
                return e.countries.hasOwnProperty(t)
            }

            function F(t) {
                var e = t.version;
                "number" == typeof e ? (this.v1 = 1 === e, this.v2 = 2 === e, this.v3 = 3 === e, this.v4 = 4 === e) : e ? -1 === C(e, "1.2.0") ? this.v2 = !0 : -1 === C(e, "1.7.35") ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
            }
            var D = function(t) {
                return "([".concat(l, "]{1,").concat(t, "})")
            };

            function L(t) {
                var e = "[ \xa0\\t,]*",
                    r = "[:\\.．]?[ \xa0\\t,-]*",
                    n = "[ \xa0\\t]*";
                return ";ext=" + D("20") + "|" + (e + "(?:e?xt(?:ensi(?:ó?|\xf3))?n?|ｅ?ｘｔｎ?|доб|anexo)" + r) + D("20") + "#?|" + (e + "(?:[xｘ#＃~～]|int|ｉｎｔ)" + r) + D("9") + "#?|[- ]+" + D("6") + "#|" + (n + "(?:,{2}|;)" + r) + D("15") + "#?|" + (n + "(?:,)+" + r) + D("9") + "#?"
            }
            var B = RegExp("^[" + s + "]{0,1}(?:[" + c + "]*[" + l + "]){1,2}$", "i"),
                U = "[" + s + "]{0,1}(?:[" + c + "]*[" + l + "]){3,}[" + c + l + "]*(?:" + L() + ")?",
                G = RegExp("^[" + l + "]{2}$|^" + U + "$", "i"),
                V = RegExp("(?:" + L() + ")$", "i");

            function H(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var z = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "０": "0",
                "１": "1",
                "２": "2",
                "３": "3",
                "４": "4",
                "５": "5",
                "６": "6",
                "７": "7",
                "８": "8",
                "９": "9",
                "٠": "0",
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "۰": "0",
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9"
            };

            function Z(t) {
                for (var e, r = "", n = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return H(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(t, e)
                                }
                            }(t))) {
                            r && (t = r);
                            var n = 0;
                            return function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t.split("")); !(e = n()).done;) {
                    var o = z[e.value];
                    o && (r += o)
                }
                return r
            }

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function K(t) {
                for (var e, r = "", n = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return W(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return W(t, e)
                                }
                            }(t))) {
                            r && (t = r);
                            var n = 0;
                            return function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t.split("")); !(e = n()).done;) {
                    var o = e.value;
                    r += q(o, r) || ""
                }
                return r
            }

            function q(t, e) {
                if ("+" === t) {
                    if (e) return;
                    return "+"
                }
                return z[t]
            }

            function Y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function J(t, e) {
                return function t(e, r, n) {
                    var o = n.type(r),
                        a = o && o.possibleLengths() || n.possibleLengths();
                    if (!a) return "IS_POSSIBLE";
                    if ("FIXED_LINE_OR_MOBILE" === r) {
                        if (!n.type("FIXED_LINE")) return t(e, "MOBILE", n);
                        var i = n.type("MOBILE");
                        i && (a = function(t, e) {
                            for (var r, n = t.slice(), o = function(t, e) {
                                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (r) return (r = r.call(t)).next.bind(r);
                                    if (Array.isArray(t) || (r = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return Y(t, e);
                                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Y(t, e)
                                            }
                                        }(t))) {
                                        r && (t = r);
                                        var n = 0;
                                        return function() {
                                            return n >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[n++]
                                            }
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(e); !(r = o()).done;) {
                                var a = r.value;
                                0 > t.indexOf(a) && n.push(a)
                            }
                            return n.sort(function(t, e) {
                                return t - e
                            })
                        }(a, i.possibleLengths()))
                    } else if (r && !o) return "INVALID_LENGTH";
                    var d = e.length,
                        u = a[0];
                    return u === d ? "IS_POSSIBLE" : u > d ? "TOO_SHORT" : a[a.length - 1] < d ? "TOO_LONG" : a.indexOf(d, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
                }(t, void 0, e)
            }

            function X(t, e) {
                return "IS_POSSIBLE" === J(t, e)
            }

            function Q(t, e) {
                return t = t || "", RegExp("^(?:" + e + ")$").test(t)
            }

            function tt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var te = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function tr(t, e, r) {
                if (e = e || {}, t.country || t.countryCallingCode) {
                    (r = new E(r)).selectNumberingPlan(t.country, t.countryCallingCode);
                    var n = e.v2 ? t.nationalNumber : t.phone;
                    if (Q(n, r.nationalNumberPattern())) {
                        if (tn(n, "FIXED_LINE", r)) return r.type("MOBILE") && "" === r.type("MOBILE").pattern() || !r.type("MOBILE") || tn(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
                        for (var o, a = function(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (r) return (r = r.call(t)).next.bind(r);
                                if (Array.isArray(t) || (r = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return tt(t, e);
                                            var r = Object.prototype.toString.call(t).slice(8, -1);
                                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tt(t, e)
                                        }
                                    }(t))) {
                                    r && (t = r);
                                    var n = 0;
                                    return function() {
                                        return n >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[n++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(te); !(o = a()).done;) {
                            var i = o.value;
                            if (tn(n, i, r)) return i
                        }
                    }
                }
            }

            function tn(t, e, r) {
                return !(!(e = r.type(e)) || !e.pattern() || e.possibleLengths() && 0 > e.possibleLengths().indexOf(t.length)) && Q(t, e.pattern())
            }

            function to(t) {
                return t.replace(RegExp("[".concat(c, "]+"), "g"), " ").trim()
            }
            var ta = /(\$\d)/;

            function ti(t, e, r) {
                var n = r.useInternationalFormat,
                    o = r.withNationalPrefix;
                r.carrierCode, r.metadata;
                var a = t.replace(new RegExp(e.pattern()), n ? e.internationalFormat() : o && e.nationalPrefixFormattingRule() ? e.format().replace(ta, e.nationalPrefixFormattingRule()) : e.format());
                return n ? to(a) : a
            }
            var td = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;

            function tu(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function tl(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tl(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tl(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            var ts = {
                formatExtension: function(t, e, r) {
                    return "".concat(t).concat(r.ext()).concat(e)
                }
            };

            function tf(t, e, r, n, o) {
                var a = function(t, e) {
                    for (var r, n = function(t, e) {
                            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (r) return (r = r.call(t)).next.bind(r);
                            if (Array.isArray(t) || (r = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return tu(t, e);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tu(t, e)
                                    }
                                }(t))) {
                                r && (t = r);
                                var n = 0;
                                return function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    }
                                }
                            }
                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(t); !(r = n()).done;) {
                        var o = r.value;
                        if (o.leadingDigitsPatterns().length > 0) {
                            var a = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
                            if (0 !== e.search(a)) continue
                        }
                        if (Q(e, o.pattern())) return o
                    }
                }(n.formats(), t);
                return a ? ti(t, a, {
                    useInternationalFormat: "INTERNATIONAL" === r,
                    withNationalPrefix: !a.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !o || !1 !== o.nationalPrefix,
                    carrierCode: e,
                    metadata: n
                }) : t
            }

            function t$(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tp(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t$(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : t$(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function th(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var ty = function() {
                    var t, e;

                    function r(t, e, n) {
                        if (! function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, r), !t) throw TypeError("`country` or `countryCallingCode` not passed");
                        if (!e) throw TypeError("`nationalNumber` not passed");
                        if (!n) throw TypeError("`metadata` not passed");
                        var o, a, i, d, u = (o = t, d = new E(n), /^[A-Z]{2}$/.test(o) ? (a = o, d.selectNumberingPlan(a), i = d.countryCallingCode()) : i = o, {
                                country: a,
                                countryCallingCode: i
                            }),
                            l = u.country,
                            c = u.countryCallingCode;
                        this.country = l, this.countryCallingCode = c, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
                            return n
                        }
                    }
                    return t = [{
                        key: "setExt",
                        value: function(t) {
                            this.ext = t
                        }
                    }, {
                        key: "getPossibleCountries",
                        value: function() {
                            var t, e, r, n;
                            return this.country ? [this.country] : (t = this.countryCallingCode, e = this.nationalNumber, (n = new E(r = this.getMetadata()).getCountryCodesForCallingCode(t)) ? n.filter(function(t) {
                                var n;
                                return (n = new E(r)).selectNumberingPlan(t), n.numberingPlan.possibleLengths().indexOf(e.length) >= 0
                            }) : [])
                        }
                    }, {
                        key: "isPossible",
                        value: function() {
                            return function(t, e, r) {
                                if (void 0 === e && (e = {}), r = new E(r), e.v2) {
                                    if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                                    r.selectNumberingPlan(t.countryCallingCode)
                                } else {
                                    if (!t.phone) return !1;
                                    if (t.country) {
                                        if (!r.hasCountry(t.country)) throw Error("Unknown country: ".concat(t.country));
                                        r.country(t.country)
                                    } else {
                                        if (!t.countryCallingCode) throw Error("Invalid phone number object passed");
                                        r.selectNumberingPlan(t.countryCallingCode)
                                    }
                                }
                                if (r.possibleLengths()) return X(t.phone || t.nationalNumber, r);
                                if (t.countryCallingCode && r.isNonGeographicCallingCode(t.countryCallingCode)) return !0;
                                throw Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
                            }(this, {
                                v2: !0
                            }, this.getMetadata())
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            var t, e;
                            return (t = t = {
                                v2: !0
                            }, (e = new E(e = this.getMetadata())).selectNumberingPlan(this.country, this.countryCallingCode), e.hasTypes()) ? void 0 !== tr(this, t, e.metadata) : Q(t.v2 ? this.nationalNumber : this.phone, e.nationalNumberPattern())
                        }
                    }, {
                        key: "isNonGeographic",
                        value: function() {
                            return new E(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            return this.number === t.number && this.ext === t.ext
                        }
                    }, {
                        key: "getType",
                        value: function() {
                            return tr(this, {
                                v2: !0
                            }, this.getMetadata())
                        }
                    }, {
                        key: "format",
                        value: function(t, e) {
                            return function(t, e, r, n) {
                                if (r = r ? tc(tc({}, ts), r) : ts, n = new E(n), t.country && "001" !== t.country) {
                                    if (!n.hasCountry(t.country)) throw Error("Unknown country: ".concat(t.country));
                                    n.country(t.country)
                                } else {
                                    if (!t.countryCallingCode) return t.phone || "";
                                    n.selectNumberingPlan(t.countryCallingCode)
                                }
                                var o, a, i, d, u, l, c, s, f, $, p, h, y, m = n.countryCallingCode(),
                                    g = r.v2 ? t.nationalNumber : t.phone;
                                switch (e) {
                                    case "NATIONAL":
                                        if (!g) return "";
                                        return o = y = tf(g, t.carrierCode, "NATIONAL", n, r), a = t.ext, i = n, d = r.formatExtension, a ? d(o, a, i) : o;
                                    case "INTERNATIONAL":
                                        if (!g) return "+".concat(m);
                                        return y = tf(g, null, "INTERNATIONAL", n, r), u = y = "+".concat(m, " ").concat(y), l = t.ext, c = n, s = r.formatExtension, l ? s(u, l, c) : u;
                                    case "E.164":
                                        return "+".concat(m).concat(g);
                                    case "RFC3966":
                                        return function(t) {
                                            var e = t.number,
                                                r = t.ext;
                                            if (!e) return "";
                                            if ("+" !== e[0]) throw Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                                            return "tel:".concat(e).concat(r ? ";ext=" + r : "")
                                        }({
                                            number: "+".concat(m).concat(g),
                                            ext: t.ext
                                        });
                                    case "IDD":
                                        if (!r.fromCountry) return;
                                        return f = function(t, e, r, n, o) {
                                            if (M(n, o.metadata) === r) {
                                                var a, i = tf(t, e, "NATIONAL", o);
                                                return "1" === r ? r + " " + i : i
                                            }
                                            var d = ((a = new E(o.metadata)).selectNumberingPlan(n, void 0), a.defaultIDDPrefix()) ? a.defaultIDDPrefix() : td.test(a.IDDPrefix()) ? a.IDDPrefix() : void 0;
                                            if (d) return "".concat(d, " ").concat(r, " ").concat(tf(t, null, "INTERNATIONAL", o))
                                        }(g, t.carrierCode, m, r.fromCountry, n), $ = t.ext, p = n, h = r.formatExtension, $ ? h(f, $, p) : f;
                                    default:
                                        throw Error('Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"'))
                                }
                            }(this, t, e ? tp(tp({}, e), {}, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.getMetadata())
                        }
                    }, {
                        key: "formatNational",
                        value: function(t) {
                            return this.format("NATIONAL", t)
                        }
                    }, {
                        key: "formatInternational",
                        value: function(t) {
                            return this.format("INTERNATIONAL", t)
                        }
                    }, {
                        key: "getURI",
                        value: function(t) {
                            return this.format("RFC3966", t)
                        }
                    }], th(r.prototype, t), e && th(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }(),
                tm = RegExp("([" + l + "])");

            function tg(t, e, r, n) {
                if (e) {
                    var o = new E(n);
                    o.selectNumberingPlan(e, r);
                    var a = new RegExp(o.IDDPrefix());
                    if (0 === t.search(a)) {
                        var i = (t = t.slice(t.match(a)[0].length)).match(tm);
                        if (!i || null == i[1] || !(i[1].length > 0) || "0" !== i[1]) return t
                    }
                }
            }

            function tv(t, e) {
                if (t && e.numberingPlan.nationalPrefixForParsing()) {
                    var r = RegExp("^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"),
                        n = r.exec(t);
                    if (n) {
                        var o, a, i, d = n.length - 1,
                            u = d > 0 && n[d];
                        if (e.nationalPrefixTransformRule() && u) o = t.replace(r, e.nationalPrefixTransformRule()), d > 1 && (a = n[1]);
                        else {
                            var l = n[0];
                            o = t.slice(l.length), u && (a = n[1])
                        }
                        if (u) {
                            var c = t.indexOf(n[1]);
                            t.slice(0, c) === e.numberingPlan.nationalPrefix() && (i = e.numberingPlan.nationalPrefix())
                        } else i = n[0];
                        return {
                            nationalNumber: o,
                            nationalPrefix: i,
                            carrierCode: a
                        }
                    }
                }
                return {
                    nationalNumber: t
                }
            }

            function tb(t, e) {
                var r = tv(t, e),
                    n = r.carrierCode,
                    o = r.nationalNumber;
                return o !== t && (!(!Q(t, e.nationalNumberPattern()) || Q(o, e.nationalNumberPattern())) || e.possibleLengths() && ! function(t, e) {
                    switch (J(t, e)) {
                        case "TOO_SHORT":
                        case "INVALID_LENGTH":
                            return !1;
                        default:
                            return !0
                    }
                }(o, e)) ? {
                    nationalNumber: t
                } : {
                    nationalNumber: o,
                    carrierCode: n
                }
            }

            function tC(t, e, r, n) {
                var o = e ? M(e, n) : r;
                if (0 === t.indexOf(o)) {
                    (n = new E(n)).selectNumberingPlan(e, r);
                    var a = t.slice(o.length),
                        i = tb(a, n).nationalNumber,
                        d = tb(t, n).nationalNumber;
                    if (!Q(d, n.nationalNumberPattern()) && Q(i, n.nationalNumberPattern()) || "TOO_LONG" === J(d, n)) return {
                        countryCallingCode: o,
                        number: a
                    }
                }
                return {
                    number: t
                }
            }

            function tO(t, e, r, n) {
                if (!t) return {};
                if ("+" !== t[0]) {
                    var o, a = tg(t, e, r, n);
                    if (a && a !== t) o = !0, t = "+" + a;
                    else {
                        if (e || r) {
                            var i = tC(t, e, r, n),
                                d = i.countryCallingCode,
                                u = i.number;
                            if (d) return {
                                countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                                countryCallingCode: d,
                                number: u
                            }
                        }
                        return {
                            number: t
                        }
                    }
                }
                if ("0" === t[1]) return {};
                n = new E(n);
                for (var l = 2; l - 1 <= 3 && l <= t.length;) {
                    var c = t.slice(1, l);
                    if (n.hasCallingCode(c)) return n.selectNumberingPlan(c), {
                        countryCallingCodeSource: o ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
                        countryCallingCode: c,
                        number: t.slice(l)
                    };
                    l++
                }
                return {}
            }

            function tS(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function tP(t, e) {
                var r = e.countries,
                    n = e.defaultCountry,
                    o = e.metadata;
                o = new E(o);
                for (var a, i = [], d = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return tS(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tS(t, e)
                                }
                            }(t))) {
                            r && (t = r);
                            var n = 0;
                            return function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(r); !(a = d()).done;) {
                    var u = a.value;
                    if (o.country(u), o.leadingDigits()) {
                        if (t && 0 === t.search(o.leadingDigits())) return u
                    } else if (tr({
                            phone: t,
                            country: u
                        }, void 0, o.metadata)) {
                        if (!n || u === n) return u;
                        i.push(u)
                    }
                }
                if (i.length > 0) return i[0]
            }

            function tw(t, e) {
                var r = e.nationalNumber,
                    n = e.defaultCountry,
                    o = e.metadata,
                    a = o.getCountryCodesForCallingCode(t);
                return a ? 1 === a.length ? a[0] : tP(r, {
                    countries: a,
                    defaultCountry: n,
                    metadata: o.metadata
                }) : void 0
            }
            var tN = "([" + l + "]|[\\-\\.\\(\\)]?)",
                tj = RegExp("^\\+" + tN + "*[" + l + "]" + tN + "*$", "g"),
                tE = RegExp("^([" + l + "]+((\\-)*[" + l + "])*\\.)*[a-zA-Z]+((\\-)*[" + l + "])*\\.?$", "g"),
                tx = "tel:",
                tI = ";phone-context=",
                tA = RegExp("[" + s + l + "]"),
                t_ = RegExp("[^" + l + "#]+$");

            function tT(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tk(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tT(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tT(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function tM(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tR(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tM(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tM(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function tF(t, e, r) {
                e && e.defaultCountry && !R(e.defaultCountry, r) && (e = tR(tR({}, e), {}, {
                    defaultCountry: void 0
                }));
                try {
                    var n;
                    return n = e,
                        function(t, e, r) {
                            if (e = e || {}, r = new E(r), e.defaultCountry && !r.hasCountry(e.defaultCountry)) {
                                if (e.v2) throw new b("INVALID_COUNTRY");
                                throw Error("Unknown country: ".concat(e.defaultCountry))
                            }
                            var n, o = function(t, e, r) {
                                    var n = function(t, e) {
                                        var r = e.extractFormattedPhoneNumber,
                                            n = function(t) {
                                                var e = t.indexOf(tI);
                                                if (e < 0) return null;
                                                var r = e + tI.length;
                                                if (r >= t.length) return "";
                                                var n = t.indexOf(";", r);
                                                return n >= 0 ? t.substring(r, n) : t.substring(r)
                                            }(t);
                                        if (!(null === n || 0 !== n.length && (tj.test(n) || tE.test(n)))) throw new b("NOT_A_NUMBER");
                                        if (null === n) o = r(t) || "";
                                        else {
                                            o = "", "+" === n.charAt(0) && (o += n);
                                            var o, a, i = t.indexOf(tx);
                                            a = i >= 0 ? i + tx.length : 0;
                                            var d = t.indexOf(tI);
                                            o += t.substring(a, d)
                                        }
                                        var u = o.indexOf(";isub=");
                                        if (u > 0 && (o = o.substring(0, u)), "" !== o) return o
                                    }(t, {
                                        extractFormattedPhoneNumber: function(t) {
                                            return function(t, e, r) {
                                                if (t) {
                                                    if (t.length > 250) {
                                                        if (r) throw new b("TOO_LONG");
                                                        return
                                                    }
                                                    if (!1 === e) return t;
                                                    var n = t.search(tA);
                                                    if (!(n < 0)) return t.slice(n).replace(t_, "")
                                                }
                                            }(t, r, e)
                                        }
                                    });
                                    if (!n) return {};
                                    if (!(n.length >= 2 && G.test(n))) return B.test(n) ? {
                                        error: "TOO_SHORT"
                                    } : {};
                                    var o = function(t) {
                                        var e = t.search(V);
                                        if (e < 0) return {};
                                        for (var r = t.slice(0, e), n = t.match(V), o = 1; o < n.length;) {
                                            if (n[o]) return {
                                                number: r,
                                                ext: n[o]
                                            };
                                            o++
                                        }
                                    }(n);
                                    return o.ext ? o : {
                                        number: n
                                    }
                                }(t, e.v2, e.extract),
                                a = o.number,
                                i = o.ext,
                                d = o.error;
                            if (!a) {
                                if (e.v2) {
                                    if ("TOO_SHORT" === d) throw new b("TOO_SHORT");
                                    throw new b("NOT_A_NUMBER")
                                }
                                return {}
                            }
                            var u = function(t, e, r, n) {
                                    var o, a = tO(K(t), e, r, n.metadata),
                                        i = a.countryCallingCodeSource,
                                        d = a.countryCallingCode,
                                        u = a.number;
                                    if (d) n.selectNumberingPlan(d);
                                    else {
                                        if (!u || !e && !r) return {};
                                        n.selectNumberingPlan(e, r), e && (o = e), d = r || M(e, n.metadata)
                                    }
                                    if (!u) return {
                                        countryCallingCodeSource: i,
                                        countryCallingCode: d
                                    };
                                    var l = tb(K(u), n),
                                        c = l.nationalNumber,
                                        s = l.carrierCode,
                                        f = tw(d, {
                                            nationalNumber: c,
                                            defaultCountry: e,
                                            metadata: n
                                        });
                                    return f && (o = f, "001" === f || n.country(o)), {
                                        country: o,
                                        countryCallingCode: d,
                                        countryCallingCodeSource: i,
                                        nationalNumber: c,
                                        carrierCode: s
                                    }
                                }(a, e.defaultCountry, e.defaultCallingCode, r),
                                l = u.country,
                                c = u.nationalNumber,
                                s = u.countryCallingCode,
                                f = u.countryCallingCodeSource,
                                $ = u.carrierCode;
                            if (!r.hasSelectedNumberingPlan()) {
                                if (e.v2) throw new b("INVALID_COUNTRY");
                                return {}
                            }
                            if (!c || c.length < 2) {
                                if (e.v2) throw new b("TOO_SHORT");
                                return {}
                            }
                            if (c.length > 17) {
                                if (e.v2) throw new b("TOO_LONG");
                                return {}
                            }
                            if (e.v2) {
                                var p = new ty(s, c, r.metadata);
                                return l && (p.country = l), $ && (p.carrierCode = $), i && (p.ext = i), p.__countryCallingCodeSource = f, p
                            }
                            var h = (e.extended ? !!r.hasSelectedNumberingPlan() : !!l) && Q(c, r.nationalNumberPattern());
                            return e.extended ? {
                                country: l,
                                countryCallingCode: s,
                                carrierCode: $,
                                valid: h,
                                possible: !!h || !!(!0 === e.extended && r.possibleLengths() && X(c, r)),
                                phone: c,
                                ext: i
                            } : h ? (n = {
                                country: l,
                                phone: c
                            }, i && (n.ext = i), n) : {}
                        }(t, tk(tk({}, n), {}, {
                            v2: !0
                        }), r)
                } catch (t) {
                    if (t instanceof b);
                    else throw t
                }
            }

            function tD(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tL(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tD(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tD(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function tB() {
                var t = u(arguments),
                    e = t.text,
                    r = t.options,
                    n = t.metadata,
                    o = tF(e, r = tL(tL({}, r), {}, {
                        extract: !1
                    }), n);
                return o && o.isValid() || !1
            }
            var tU = r(67294),
                tG = {
                    ext: "ext.",
                    country: "Phone number country",
                    phone: "Phone",
                    AB: "Abkhazia",
                    AC: "Ascension Island",
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AF: "Afghanistan",
                    AG: "Antigua and Barbuda",
                    AI: "Anguilla",
                    AL: "Albania",
                    AM: "Armenia",
                    AO: "Angola",
                    AQ: "Antarctica",
                    AR: "Argentina",
                    AS: "American Samoa",
                    AT: "Austria",
                    AU: "Australia",
                    AW: "Aruba",
                    AX: "\xc5land Islands",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BB: "Barbados",
                    BD: "Bangladesh",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BL: "Saint Barth\xe9lemy",
                    BM: "Bermuda",
                    BN: "Brunei Darussalam",
                    BO: "Bolivia",
                    BQ: "Bonaire, Sint Eustatius and Saba",
                    BR: "Brazil",
                    BS: "Bahamas",
                    BT: "Bhutan",
                    BV: "Bouvet Island",
                    BW: "Botswana",
                    BY: "Belarus",
                    BZ: "Belize",
                    CA: "Canada",
                    CC: "Cocos (Keeling) Islands",
                    CD: "Congo, Democratic Republic of the",
                    CF: "Central African Republic",
                    CG: "Congo",
                    CH: "Switzerland",
                    CI: "Cote d'Ivoire",
                    CK: "Cook Islands",
                    CL: "Chile",
                    CM: "Cameroon",
                    CN: "China",
                    CO: "Colombia",
                    CR: "Costa Rica",
                    CU: "Cuba",
                    CV: "Cape Verde",
                    CW: "Cura\xe7ao",
                    CX: "Christmas Island",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DJ: "Djibouti",
                    DK: "Denmark",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EC: "Ecuador",
                    EE: "Estonia",
                    EG: "Egypt",
                    EH: "Western Sahara",
                    ER: "Eritrea",
                    ES: "Spain",
                    ET: "Ethiopia",
                    FI: "Finland",
                    FJ: "Fiji",
                    FK: "Falkland Islands",
                    FM: "Federated States of Micronesia",
                    FO: "Faroe Islands",
                    FR: "France",
                    GA: "Gabon",
                    GB: "United Kingdom",
                    GD: "Grenada",
                    GE: "Georgia",
                    GF: "French Guiana",
                    GG: "Guernsey",
                    GH: "Ghana",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GM: "Gambia",
                    GN: "Guinea",
                    GP: "Guadeloupe",
                    GQ: "Equatorial Guinea",
                    GR: "Greece",
                    GS: "South Georgia and the South Sandwich Islands",
                    GT: "Guatemala",
                    GU: "Guam",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HK: "Hong Kong",
                    HM: "Heard Island and McDonald Islands",
                    HN: "Honduras",
                    HR: "Croatia",
                    HT: "Haiti",
                    HU: "Hungary",
                    ID: "Indonesia",
                    IE: "Ireland",
                    IL: "Israel",
                    IM: "Isle of Man",
                    IN: "India",
                    IO: "British Indian Ocean Territory",
                    IQ: "Iraq",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JE: "Jersey",
                    JM: "Jamaica",
                    JO: "Jordan",
                    JP: "Japan",
                    KE: "Kenya",
                    KG: "Kyrgyzstan",
                    KH: "Cambodia",
                    KI: "Kiribati",
                    KM: "Comoros",
                    KN: "Saint Kitts and Nevis",
                    KP: "North Korea",
                    KR: "South Korea",
                    KW: "Kuwait",
                    KY: "Cayman Islands",
                    KZ: "Kazakhstan",
                    LA: "Laos",
                    LB: "Lebanon",
                    LC: "Saint Lucia",
                    LI: "Liechtenstein",
                    LK: "Sri Lanka",
                    LR: "Liberia",
                    LS: "Lesotho",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    LY: "Libya",
                    MA: "Morocco",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MF: "Saint Martin (French Part)",
                    MG: "Madagascar",
                    MH: "Marshall Islands",
                    MK: "North Macedonia",
                    ML: "Mali",
                    MM: "Myanmar",
                    MN: "Mongolia",
                    MO: "Macao",
                    MP: "Northern Mariana Islands",
                    MQ: "Martinique",
                    MR: "Mauritania",
                    MS: "Montserrat",
                    MT: "Malta",
                    MU: "Mauritius",
                    MV: "Maldives",
                    MW: "Malawi",
                    MX: "Mexico",
                    MY: "Malaysia",
                    MZ: "Mozambique",
                    NA: "Namibia",
                    NC: "New Caledonia",
                    NE: "Niger",
                    NF: "Norfolk Island",
                    NG: "Nigeria",
                    NI: "Nicaragua",
                    NL: "Netherlands",
                    NO: "Norway",
                    NP: "Nepal",
                    NR: "Nauru",
                    NU: "Niue",
                    NZ: "New Zealand",
                    OM: "Oman",
                    OS: "South Ossetia",
                    PA: "Panama",
                    PE: "Peru",
                    PF: "French Polynesia",
                    PG: "Papua New Guinea",
                    PH: "Philippines",
                    PK: "Pakistan",
                    PL: "Poland",
                    PM: "Saint Pierre and Miquelon",
                    PN: "Pitcairn",
                    PR: "Puerto Rico",
                    PS: "Palestine",
                    PT: "Portugal",
                    PW: "Palau",
                    PY: "Paraguay",
                    QA: "Qatar",
                    RE: "Reunion",
                    RO: "Romania",
                    RS: "Serbia",
                    RU: "Russia",
                    RW: "Rwanda",
                    SA: "Saudi Arabia",
                    SB: "Solomon Islands",
                    SC: "Seychelles",
                    SD: "Sudan",
                    SE: "Sweden",
                    SG: "Singapore",
                    SH: "Saint Helena",
                    SI: "Slovenia",
                    SJ: "Svalbard and Jan Mayen",
                    SK: "Slovakia",
                    SL: "Sierra Leone",
                    SM: "San Marino",
                    SN: "Senegal",
                    SO: "Somalia",
                    SR: "Suriname",
                    SS: "South Sudan",
                    ST: "Sao Tome and Principe",
                    SV: "El Salvador",
                    SX: "Sint Maarten",
                    SY: "Syria",
                    SZ: "Swaziland",
                    TA: "Tristan da Cunha",
                    TC: "Turks and Caicos Islands",
                    TD: "Chad",
                    TF: "French Southern Territories",
                    TG: "Togo",
                    TH: "Thailand",
                    TJ: "Tajikistan",
                    TK: "Tokelau",
                    TL: "Timor-Leste",
                    TM: "Turkmenistan",
                    TN: "Tunisia",
                    TO: "Tonga",
                    TR: "Turkey",
                    TT: "Trinidad and Tobago",
                    TV: "Tuvalu",
                    TW: "Taiwan",
                    TZ: "Tanzania",
                    UA: "Ukraine",
                    UG: "Uganda",
                    UM: "United States Minor Outlying Islands",
                    US: "United States",
                    UY: "Uruguay",
                    UZ: "Uzbekistan",
                    VA: "Holy See (Vatican City State)",
                    VC: "Saint Vincent and the Grenadines",
                    VE: "Venezuela",
                    VG: "Virgin Islands, British",
                    VI: "Virgin Islands, U.S.",
                    VN: "Vietnam",
                    VU: "Vanuatu",
                    WF: "Wallis and Futuna",
                    WS: "Samoa",
                    XK: "Kosovo",
                    YE: "Yemen",
                    YT: "Mayotte",
                    ZA: "South Africa",
                    ZM: "Zambia",
                    ZW: "Zimbabwe",
                    ZZ: "International"
                },
                tV = r(45697),
                tH = tV.shape({
                    country_calling_codes: tV.object.isRequired,
                    countries: tV.object.isRequired
                }),
                tz = tV.objectOf(tV.string),
                tZ = r(94184);

            function tW(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function tK(t, e) {
                for (var r, n = 0, o = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return tW(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tW(t, e)
                                }
                            }(t))) {
                            r && (t = r);
                            var n = 0;
                            return function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(e.split("")); !(r = o()).done;) r.value === t && n++;
                return n
            }

            function tq(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var tY = {
                Backspace: 8,
                Delete: 46
            };

            function tJ(t, e) {
                void 0 !== e && (function() {
                    if ("undefined" != typeof navigator) return tX.test(navigator.userAgent)
                }() ? setTimeout(function() {
                    return t.setSelectionRange(e, e)
                }, 0) : t.setSelectionRange(e, e))
            }
            var tX = /Android/i;

            function tQ(t, e, r, n, o) {
                var a = function(t, e, r) {
                        for (var n = "", o = 0, a = 0; a < t.length;) {
                            var i = r(t[a], n);
                            void 0 !== i && (n += i, void 0 !== e && (e === a ? o = n.length - 1 : e > a && (o = n.length))), a++
                        }
                        return void 0 === e && (o = n.length), {
                            value: n,
                            caret: o
                        }
                    }(t.value, t.selectionStart, e),
                    i = a.value,
                    d = a.caret;
                if (n) {
                    var u = function(t, e, r) {
                        switch (r) {
                            case "Backspace":
                                e > 0 && (t = t.slice(0, e - 1) + t.slice(e), e--);
                                break;
                            case "Delete":
                                t = t.slice(0, e) + t.slice(e + 1)
                        }
                        return {
                            value: t,
                            caret: e
                        }
                    }(i, d, n);
                    i = u.value, d = u.caret
                }
                var l = function(t, e, r) {
                        "string" == typeof r && (r = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                                r = arguments.length > 2 ? arguments[2] : void 0;
                            if (!t) return function(t) {
                                return {
                                    text: t
                                }
                            };
                            var n = tK(e, t);
                            return function(o) {
                                if (!o) return {
                                    text: "",
                                    template: t
                                };
                                for (var a, i = 0, d = "", u = function(t, e) {
                                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                        if (r) return (r = r.call(t)).next.bind(r);
                                        if (Array.isArray(t) || (r = function(t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return tq(t, e);
                                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tq(t, e)
                                                }
                                            }(t))) {
                                            r && (t = r);
                                            var n = 0;
                                            return function() {
                                                return n >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[n++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(t.split("")); !(a = u()).done;) {
                                    var l = a.value;
                                    if (l !== e) {
                                        d += l;
                                        continue
                                    }
                                    if (d += o[i], ++i === o.length && o.length < n) break
                                }
                                return r && (d = function(t, e) {
                                    for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : " ", o = t.length, a = tK("(", t) - tK(")", t); a > 0 && o < e.length;) t += e[o].replace(r, n), ")" === e[o] && a--, o++;
                                    return t
                                }(d, t)), {
                                    text: d,
                                    template: t
                                }
                            }
                        }(r));
                        var n = r(t) || {},
                            o = n.text,
                            a = n.template;
                        if (void 0 === o && (o = t), a) {
                            if (void 0 === e) e = o.length;
                            else {
                                for (var i = 0, d = !1, u = -1; i < o.length && i < a.length;) {
                                    if (o[i] !== a[i]) {
                                        if (0 === e) {
                                            d = !0, e = i;
                                            break
                                        }
                                        u = i, e--
                                    }
                                    i++
                                }
                                d || (e = u + 1)
                            }
                        }
                        return {
                            text: o,
                            caret: e
                        }
                    }(i, d, r),
                    c = l.text;
                d = l.caret, t.value = c, tJ(t, d), o(i)
            }
            var t0 = ["value", "parse", "format", "inputComponent", "onChange", "onKeyDown"];

            function t1() {
                return (t1 = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function t2(t, e) {
                var r = t.value,
                    n = t.parse,
                    o = t.format,
                    a = t.inputComponent,
                    i = t.onChange,
                    d = t.onKeyDown,
                    u = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                a = Object.keys(t);
                            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, t0),
                    l = (0, tU.useRef)(),
                    c = (0, tU.useCallback)(function(t) {
                        l.current = t, e && ("function" == typeof e ? e(t) : e.current = t)
                    }, [e]),
                    s = (0, tU.useCallback)(function(t) {
                        tQ(l.current, n, o, void 0, i)
                    }, [l, n, o, i]),
                    f = (0, tU.useCallback)(function(t) {
                        return d && d(t),
                            function(t, e, r, n, o) {
                                if (!e.hasAttribute("readonly")) {
                                    var a = function(t) {
                                        switch (t.keyCode) {
                                            case tY.Backspace:
                                                return "Backspace";
                                            case tY.Delete:
                                                return "Delete"
                                        }
                                    }(t);
                                    switch (a) {
                                        case "Delete":
                                        case "Backspace":
                                            t.preventDefault();
                                            var i, d = function(t) {
                                                if (t.selectionStart !== t.selectionEnd) return {
                                                    start: t.selectionStart,
                                                    end: t.selectionEnd
                                                }
                                            }(e);
                                            if (d) return i = (i = e.value).slice(0, d.start) + i.slice(d.end), e.value = i, tJ(e, d.start), tQ(e, r, n, void 0, o);
                                            return tQ(e, r, n, a, o)
                                    }
                                }
                            }(t, l.current, n, o, i)
                    }, [l, n, o, i, d]);
                return tU.createElement(a, t1({}, u, {
                    ref: c,
                    value: o(null == r ? "" : r).text,
                    onKeyDown: f,
                    onChange: s
                }))
            }(t2 = tU.forwardRef(t2)).propTypes = {
                parse: tV.func.isRequired,
                format: tV.func.isRequired,
                inputComponent: tV.elementType.isRequired,
                type: tV.string.isRequired,
                value: tV.string,
                onChange: tV.func.isRequired,
                onKeyDown: tV.func,
                onCut: tV.func,
                onPaste: tV.func
            }, t2.defaultProps = {
                inputComponent: "input",
                type: "text"
            };
            var t3 = t2;

            function t4(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var t9 = function() {
                var t, e;

                function r(t) {
                    var e = t.onCountryChange,
                        n = t.onCallingCodeChange;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, r), this.onCountryChange = e, this.onCallingCodeChange = n
                }
                return t = [{
                    key: "reset",
                    value: function(t) {
                        var e = t.country,
                            r = t.callingCode;
                        this.international = !1, this.missingPlus = !1, this.IDDPrefix = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(e, r)
                    }
                }, {
                    key: "resetNationalSignificantNumber",
                    value: function() {
                        this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        for (var e = 0, r = Object.keys(t); e < r.length; e++) {
                            var n = r[e];
                            this[n] = t[n]
                        }
                    }
                }, {
                    key: "initCountryAndCallingCode",
                    value: function(t, e) {
                        this.setCountry(t), this.setCallingCode(e)
                    }
                }, {
                    key: "setCountry",
                    value: function(t) {
                        this.country = t, this.onCountryChange(t)
                    }
                }, {
                    key: "setCallingCode",
                    value: function(t) {
                        this.callingCode = t, this.onCallingCodeChange(t, this.country)
                    }
                }, {
                    key: "startInternationalNumber",
                    value: function(t, e) {
                        this.international = !0, this.initCountryAndCallingCode(t, e)
                    }
                }, {
                    key: "appendDigits",
                    value: function(t) {
                        this.digits += t
                    }
                }, {
                    key: "appendNationalSignificantNumberDigits",
                    value: function(t) {
                        this.nationalSignificantNumber += t
                    }
                }, {
                    key: "getNationalDigits",
                    value: function() {
                        return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
                    }
                }, {
                    key: "getDigitsWithoutInternationalPrefix",
                    value: function() {
                        return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
                    }
                }], t4(r.prototype, t), e && t4(r, e), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r
            }();

            function t8(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var t6 = /x/;

            function t5(t, e) {
                if (e < 1) return "";
                for (var r = ""; e > 1;) 1 & e && (r += t), e >>= 1, t += t;
                return r + t
            }

            function t7(t, e) {
                return ")" === t[e] && e++,
                    function(t) {
                        for (var e = [], r = 0; r < t.length;) "(" === t[r] ? e.push(r) : ")" === t[r] && e.pop(), r++;
                        var n = 0,
                            o = "";
                        e.push(t.length);
                        for (var a = 0; a < e.length; a++) {
                            var i = e[a];
                            o += t.slice(n, i), n = i + 1
                        }
                        return o
                    }(t.slice(0, e))
            }

            function et(t, e, r) {
                var n = r.metadata,
                    o = r.useNationalPrefixFormattingRule,
                    a = r.getSeparatorAfterNationalPrefix,
                    i = ti(t.nationalSignificantNumber, e, {
                        carrierCode: t.carrierCode,
                        useInternationalFormat: t.international,
                        withNationalPrefix: o,
                        metadata: n
                    });
                if (!o && (t.nationalPrefix ? i = t.nationalPrefix + a(e) + i : t.complexPrefixBeforeNationalSignificantNumber && (i = t.complexPrefixBeforeNationalSignificantNumber + " " + i)), Z(i) === t.getNationalDigits()) return i
            }

            function ee(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var er = function() {
                    var t, e;

                    function r() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r)
                    }
                    return t = [{
                        key: "parse",
                        value: function(t) {
                            if (this.context = [{
                                    or: !0,
                                    instructions: []
                                }], this.parsePattern(t), 1 !== this.context.length) throw Error("Non-finalized contexts left when pattern parse ended");
                            var e = this.context[0],
                                r = e.branches,
                                n = e.instructions;
                            if (r) return {
                                op: "|",
                                args: r.concat([ea(n)])
                            };
                            if (0 === n.length) throw Error("Pattern is required");
                            return 1 === n.length ? n[0] : n
                        }
                    }, {
                        key: "startContext",
                        value: function(t) {
                            this.context.push(t)
                        }
                    }, {
                        key: "endContext",
                        value: function() {
                            this.context.pop()
                        }
                    }, {
                        key: "getContext",
                        value: function() {
                            return this.context[this.context.length - 1]
                        }
                    }, {
                        key: "parsePattern",
                        value: function(t) {
                            if (!t) throw Error("Pattern is required");
                            var e = t.match(eo);
                            if (!e) {
                                if (en.test(t)) throw Error("Illegal characters found in a pattern: ".concat(t));
                                this.getContext().instructions = this.getContext().instructions.concat(t.split(""));
                                return
                            }
                            var r = e[1],
                                n = t.slice(0, e.index),
                                o = t.slice(e.index + r.length);
                            switch (r) {
                                case "(?:":
                                    n && this.parsePattern(n), this.startContext({
                                        or: !0,
                                        instructions: [],
                                        branches: []
                                    });
                                    break;
                                case ")":
                                    if (!this.getContext().or) throw Error('")" operator must be preceded by "(?:" operator');
                                    if (n && this.parsePattern(n), 0 === this.getContext().instructions.length) throw Error('No instructions found after "|" operator in an "or" group');
                                    var a = this.getContext().branches;
                                    a.push(ea(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                                        op: "|",
                                        args: a
                                    });
                                    break;
                                case "|":
                                    if (!this.getContext().or) throw Error('"|" operator can only be used inside "or" groups');
                                    if (n && this.parsePattern(n), !this.getContext().branches) {
                                        if (1 === this.context.length) this.getContext().branches = [];
                                        else throw Error('"branches" not found in an "or" group context')
                                    }
                                    this.getContext().branches.push(ea(this.getContext().instructions)), this.getContext().instructions = [];
                                    break;
                                case "[":
                                    n && this.parsePattern(n), this.startContext({
                                        oneOfSet: !0
                                    });
                                    break;
                                case "]":
                                    if (!this.getContext().oneOfSet) throw Error('"]" operator must be preceded by "[" operator');
                                    this.endContext(), this.getContext().instructions.push({
                                        op: "[]",
                                        args: function(t) {
                                            for (var e = [], r = 0; r < t.length;) {
                                                if ("-" === t[r]) {
                                                    if (0 === r || r === t.length - 1) throw Error("Couldn't parse a one-of set pattern: ".concat(t));
                                                    for (var n = t[r - 1].charCodeAt(0) + 1, o = t[r + 1].charCodeAt(0) - 1, a = n; a <= o;) e.push(String.fromCharCode(a)), a++
                                                } else e.push(t[r]);
                                                r++
                                            }
                                            return e
                                        }(n)
                                    });
                                    break;
                                default:
                                    throw Error("Unknown operator: ".concat(r))
                            }
                            o && this.parsePattern(o)
                        }
                    }], ee(r.prototype, t), e && ee(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }(),
                en = /[\(\)\[\]\?\:\|]/,
                eo = RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");

            function ea(t) {
                return 1 === t.length ? t[0] : t
            }

            function ei(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (r) return (r = r.call(t)).next.bind(r);
                if (Array.isArray(t) || (r = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return ed(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ed(t, e)
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function ed(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function eu(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var el = function() {
                var t, e;

                function r(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, r), this.matchTree = new er().parse(t)
                }
                return t = [{
                    key: "match",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = e.allowOverflow;
                        if (!t) throw Error("String is required");
                        var n = function t(e, r, n) {
                            if ("string" == typeof r) {
                                var o = e.join("");
                                return 0 === r.indexOf(o) ? e.length === r.length ? {
                                    match: !0,
                                    matchedChars: e
                                } : {
                                    partialMatch: !0
                                } : 0 === o.indexOf(r) ? n && e.length > r.length ? {
                                    overflow: !0
                                } : {
                                    match: !0,
                                    matchedChars: e.slice(0, r.length)
                                } : void 0
                            }
                            if (Array.isArray(r)) {
                                for (var a = e.slice(), i = 0; i < r.length;) {
                                    var d = t(a, r[i], n && i === r.length - 1);
                                    if (!d) return;
                                    if (d.overflow) return d;
                                    if (d.match) {
                                        if (0 === (a = a.slice(d.matchedChars.length)).length) {
                                            if (i === r.length - 1) return {
                                                match: !0,
                                                matchedChars: e
                                            };
                                            return {
                                                partialMatch: !0
                                            }
                                        }
                                    } else {
                                        if (d.partialMatch) return {
                                            partialMatch: !0
                                        };
                                        throw Error("Unsupported match result:\n".concat(JSON.stringify(d, null, 2)))
                                    }
                                    i++
                                }
                                return n ? {
                                    overflow: !0
                                } : {
                                    match: !0,
                                    matchedChars: e.slice(0, e.length - a.length)
                                }
                            }
                            switch (r.op) {
                                case "|":
                                    for (var u, l, c = ei(r.args); !(l = c()).done;) {
                                        var s = t(e, l.value, n);
                                        if (s) {
                                            if (s.overflow) return s;
                                            if (s.match) return {
                                                match: !0,
                                                matchedChars: s.matchedChars
                                            };
                                            if (s.partialMatch) u = !0;
                                            else throw Error("Unsupported match result:\n".concat(JSON.stringify(s, null, 2)))
                                        }
                                    }
                                    if (u) return {
                                        partialMatch: !0
                                    };
                                    return;
                                case "[]":
                                    for (var f, $ = ei(r.args); !(f = $()).done;) {
                                        var p = f.value;
                                        if (e[0] === p) {
                                            if (1 === e.length) return {
                                                match: !0,
                                                matchedChars: e
                                            };
                                            if (n) return {
                                                overflow: !0
                                            };
                                            return {
                                                match: !0,
                                                matchedChars: [p]
                                            }
                                        }
                                    }
                                    return;
                                default:
                                    throw Error("Unsupported instruction tree: ".concat(r))
                            }
                        }(t.split(""), this.matchTree, !0);
                        if (n && n.match && delete n.matchedChars, !n || !n.overflow || r) return n
                    }
                }], eu(r.prototype, t), e && eu(r, e), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r
            }();

            function ec(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (r) return (r = r.call(t)).next.bind(r);
                if (Array.isArray(t) || (r = function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return es(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return es(t, e)
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0;
                    return function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function es(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function ef(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var e$ = t5("9", 15),
                ep = /[- ]/,
                eh = RegExp("[" + c + "]*\\$1[" + c + "]*(\\$\\d[" + c + "]*)*$"),
                ey = function() {
                    var t, e;

                    function r(t) {
                        t.state;
                        var e = t.metadata;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r), this.metadata = e, this.resetFormat()
                    }
                    return t = [{
                        key: "resetFormat",
                        value: function() {
                            this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
                        }
                    }, {
                        key: "reset",
                        value: function(t, e) {
                            this.resetFormat(), t ? (this.isNANP = "1" === t.callingCode(), this.matchingFormats = t.formats(), e.nationalSignificantNumber && this.narrowDownMatchingFormats(e)) : (this.isNANP = void 0, this.matchingFormats = [])
                        }
                    }, {
                        key: "format",
                        value: function(t, e) {
                            var r = this;
                            if ("IS_POSSIBLE" === J(e.nationalSignificantNumber, this.metadata))
                                for (var n, o = ec(this.matchingFormats); !(n = o()).done;) {
                                    var a = n.value,
                                        i = function(t, e, r) {
                                            var n = r.metadata,
                                                o = r.shouldTryNationalPrefixFormattingRule,
                                                a = r.getSeparatorAfterNationalPrefix;
                                            if (new RegExp("^(?:".concat(e.pattern(), ")$")).test(t.nationalSignificantNumber)) return function(t, e, r) {
                                                var n = r.metadata,
                                                    o = r.shouldTryNationalPrefixFormattingRule,
                                                    a = r.getSeparatorAfterNationalPrefix;
                                                if (t.nationalSignificantNumber, t.international, t.nationalPrefix, t.carrierCode, o(e)) {
                                                    var i = et(t, e, {
                                                        useNationalPrefixFormattingRule: !0,
                                                        getSeparatorAfterNationalPrefix: a,
                                                        metadata: n
                                                    });
                                                    if (i) return i
                                                }
                                                return et(t, e, {
                                                    useNationalPrefixFormattingRule: !1,
                                                    getSeparatorAfterNationalPrefix: a,
                                                    metadata: n
                                                })
                                            }(t, e, {
                                                metadata: n,
                                                shouldTryNationalPrefixFormattingRule: o,
                                                getSeparatorAfterNationalPrefix: a
                                            })
                                        }(e, a, {
                                            metadata: this.metadata,
                                            shouldTryNationalPrefixFormattingRule: function(t) {
                                                return r.shouldTryNationalPrefixFormattingRule(t, {
                                                    international: e.international,
                                                    nationalPrefix: e.nationalPrefix
                                                })
                                            },
                                            getSeparatorAfterNationalPrefix: function(t) {
                                                return r.getSeparatorAfterNationalPrefix(t)
                                            }
                                        });
                                    if (i) return this.resetFormat(), this.chosenFormat = a, this.setNationalNumberTemplate(i.replace(/\d/g, "x"), e), this.populatedNationalNumberTemplate = i, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf("x"), i
                                }
                            return this.formatNationalNumberWithNextDigits(t, e)
                        }
                    }, {
                        key: "formatNationalNumberWithNextDigits",
                        value: function(t, e) {
                            var r = this.chosenFormat,
                                n = this.chooseFormat(e);
                            if (n) return n === r ? this.formatNextNationalNumberDigits(t) : this.formatNextNationalNumberDigits(e.getNationalDigits())
                        }
                    }, {
                        key: "narrowDownMatchingFormats",
                        value: function(t) {
                            var e = this,
                                r = t.nationalSignificantNumber,
                                n = t.nationalPrefix,
                                o = t.international,
                                a = r.length - 3;
                            a < 0 && (a = 0), this.matchingFormats = this.matchingFormats.filter(function(t) {
                                return e.formatSuits(t, o, n) && e.formatMatches(t, r, a)
                            }), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
                        }
                    }, {
                        key: "formatSuits",
                        value: function(t, e, r) {
                            return !(r && !t.usesNationalPrefix() && !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !e && !r && t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                        }
                    }, {
                        key: "formatMatches",
                        value: function(t, e, r) {
                            var n = t.leadingDigitsPatterns().length;
                            if (0 === n) return !0;
                            r = Math.min(r, n - 1);
                            var o = t.leadingDigitsPatterns()[r];
                            if (e.length < 3) try {
                                return void 0 !== new el(o).match(e, {
                                    allowOverflow: !0
                                })
                            } catch (t) {
                                return console.error(t), !0
                            }
                            return new RegExp("^(".concat(o, ")")).test(e)
                        }
                    }, {
                        key: "getFormatFormat",
                        value: function(t, e) {
                            return e ? t.internationalFormat() : t.format()
                        }
                    }, {
                        key: "chooseFormat",
                        value: function(t) {
                            for (var e, r = this, n = ec(this.matchingFormats.slice()); !(e = n()).done;) {
                                var o = function() {
                                    var n = e.value;
                                    return r.chosenFormat === n ? "break" : eh.test(r.getFormatFormat(n, t.international)) ? r.createTemplateForFormat(n, t) ? (r.chosenFormat = n, "break") : (r.matchingFormats = r.matchingFormats.filter(function(t) {
                                        return t !== n
                                    }), "continue") : "continue"
                                }();
                                if ("break" === o) break;
                                if ("continue" === o) continue
                            }
                            return this.chosenFormat || this.resetFormat(), this.chosenFormat
                        }
                    }, {
                        key: "createTemplateForFormat",
                        value: function(t, e) {
                            if (!(t.pattern().indexOf("|") >= 0)) {
                                var r = this.getTemplateForFormat(t, e);
                                if (r) return this.setNationalNumberTemplate(r, e), !0
                            }
                        }
                    }, {
                        key: "getSeparatorAfterNationalPrefix",
                        value: function(t) {
                            return this.isNANP || t && t.nationalPrefixFormattingRule() && ep.test(t.nationalPrefixFormattingRule()) ? " " : ""
                        }
                    }, {
                        key: "getInternationalPrefixBeforeCountryCallingCode",
                        value: function(t, e) {
                            var r = t.IDDPrefix,
                                n = t.missingPlus;
                            return r ? e && !1 === e.spacing ? r : r + " " : n ? "" : "+"
                        }
                    }, {
                        key: "getTemplate",
                        value: function(t) {
                            if (this.template) {
                                for (var e = -1, r = 0, n = t.international ? this.getInternationalPrefixBeforeCountryCallingCode(t, {
                                        spacing: !1
                                    }) : ""; r < n.length + t.getDigitsWithoutInternationalPrefix().length;) e = this.template.indexOf("x", e + 1), r++;
                                return t7(this.template, e + 1)
                            }
                        }
                    }, {
                        key: "setNationalNumberTemplate",
                        value: function(t, e) {
                            this.nationalNumberTemplate = t, this.populatedNationalNumberTemplate = t, this.populatedNationalNumberTemplatePosition = -1, e.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(e).replace(/[\d\+]/g, "x") + t5("x", e.callingCode.length) + " " + t : this.template = t
                        }
                    }, {
                        key: "getTemplateForFormat",
                        value: function(t, e) {
                            var r, n = e.nationalSignificantNumber,
                                o = e.international,
                                a = e.nationalPrefix,
                                i = e.complexPrefixBeforeNationalSignificantNumber,
                                d = t.pattern();
                            d = d.replace(/\[([^\[\]])*\]/g, "\\d").replace(/\d(?=[^,}][^,}])/g, "\\d");
                            var u = e$.match(d)[0];
                            if (!(n.length > u.length)) {
                                var l = RegExp("^" + d + "$"),
                                    c = n.replace(/\d/g, "9");
                                l.test(c) && (u = c);
                                var s = this.getFormatFormat(t, o);
                                if (this.shouldTryNationalPrefixFormattingRule(t, {
                                        international: o,
                                        nationalPrefix: a
                                    })) {
                                    var f = s.replace(ta, t.nationalPrefixFormattingRule());
                                    if (Z(t.nationalPrefixFormattingRule()) === (a || "") + Z("$1") && (s = f, r = !0, a))
                                        for (var $ = a.length; $ > 0;) s = s.replace(/\d/, "x"), $--
                                }
                                var p = u.replace(new RegExp(d), s).replace(/9/g, "x");
                                return !r && (i ? p = t5("x", i.length) + " " + p : a && (p = t5("x", a.length) + this.getSeparatorAfterNationalPrefix(t) + p)), o && (p = to(p)), p
                            }
                        }
                    }, {
                        key: "formatNextNationalNumberDigits",
                        value: function(t) {
                            var e = function(t, e, r) {
                                for (var n, o = function(t, e) {
                                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                        if (r) return (r = r.call(t)).next.bind(r);
                                        if (Array.isArray(t) || (r = function(t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return t8(t, e);
                                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return t8(t, e)
                                                }
                                            }(t))) {
                                            r && (t = r);
                                            var n = 0;
                                            return function() {
                                                return n >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[n++]
                                                }
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(r.split("")); !(n = o()).done;) {
                                    var a = n.value;
                                    if (0 > t.slice(e + 1).search(t6)) return;
                                    e = t.search(t6), t = t.replace(t6, a)
                                }
                                return [t, e]
                            }(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, t);
                            if (!e) {
                                this.resetFormat();
                                return
                            }
                            return this.populatedNationalNumberTemplate = e[0], this.populatedNationalNumberTemplatePosition = e[1], t7(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
                        }
                    }, {
                        key: "shouldTryNationalPrefixFormattingRule",
                        value: function(t, e) {
                            var r = e.international,
                                n = e.nationalPrefix;
                            if (t.nationalPrefixFormattingRule()) {
                                var o = t.usesNationalPrefix();
                                if (o && n || !o && !r) return !0
                            }
                        }
                    }], ef(r.prototype, t), e && ef(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }();

            function em(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r, n, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            d = !1;
                        try {
                            for (o = o.call(t); !(i = (r = o.next()).done) && (a.push(r.value), !e || a.length !== e); i = !0);
                        } catch (t) {
                            d = !0, n = t
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (d) throw n
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return eg(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eg(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eg(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function ev(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var eb = RegExp("^[" + c + l + "]+$", "i"),
                eC = "(?:[" + s + "][" + c + l + "]*|[" + c + l + "]+)",
                eO = RegExp("[^" + c + l + "]+.*$"),
                eS = /[^\d\[\]]/,
                eP = function() {
                    var t, e;

                    function r(t) {
                        var e = t.defaultCountry,
                            n = t.defaultCallingCode,
                            o = t.metadata,
                            a = t.onNationalSignificantNumberChange;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, r), this.defaultCountry = e, this.defaultCallingCode = n, this.metadata = o, this.onNationalSignificantNumberChange = a
                    }
                    return t = [{
                        key: "input",
                        value: function(t, e) {
                            var r, n, o, a, i, d = em((o = (n = em("+" === (r = function(t) {
                                    var e, r = t.search(eC);
                                    if (!(r < 0)) return "+" === (t = t.slice(r))[0] && (e = !0, t = t.slice(1)), t = t.replace(eO, ""), e && (t = "+" + t), t
                                }(t) || "")[0] ? [r.slice(1), !0] : [r], 2))[0], a = n[1], eb.test(o) || (o = ""), [o, a]), 2),
                                u = d[0],
                                l = d[1],
                                c = Z(u);
                            return !l || e.digits || (e.startInternationalNumber(), c || (i = !0)), c && this.inputDigits(c, e), {
                                digits: c,
                                justLeadingPlus: i
                            }
                        }
                    }, {
                        key: "inputDigits",
                        value: function(t, e) {
                            var r = e.digits,
                                n = r.length < 3 && r.length + t.length >= 3;
                            if (e.appendDigits(t), n && this.extractIddPrefix(e), this.isWaitingForCountryCallingCode(e)) {
                                if (!this.extractCountryCallingCode(e)) return
                            } else e.appendNationalSignificantNumberDigits(t);
                            e.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(e.getNationalDigits(), function(t) {
                                return e.update(t)
                            })
                        }
                    }, {
                        key: "isWaitingForCountryCallingCode",
                        value: function(t) {
                            var e = t.international,
                                r = t.callingCode;
                            return e && !r
                        }
                    }, {
                        key: "extractCountryCallingCode",
                        value: function(t) {
                            var e = tO("+" + t.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                r = e.countryCallingCode,
                                n = e.number;
                            if (r) return t.setCallingCode(r), t.update({
                                nationalSignificantNumber: n
                            }), !0
                        }
                    }, {
                        key: "reset",
                        value: function(t) {
                            if (t) {
                                this.hasSelectedNumberingPlan = !0;
                                var e = t._nationalPrefixForParsing();
                                this.couldPossiblyExtractAnotherNationalSignificantNumber = e && eS.test(e)
                            } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
                        }
                    }, {
                        key: "extractNationalSignificantNumber",
                        value: function(t, e) {
                            if (this.hasSelectedNumberingPlan) {
                                var r = tv(t, this.metadata),
                                    n = r.nationalPrefix,
                                    o = r.nationalNumber,
                                    a = r.carrierCode;
                                if (o !== t) return this.onExtractedNationalNumber(n, a, o, t, e), !0
                            }
                        }
                    }, {
                        key: "extractAnotherNationalSignificantNumber",
                        value: function(t, e, r) {
                            if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(t, r);
                            if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                                var n = tv(t, this.metadata),
                                    o = n.nationalPrefix,
                                    a = n.nationalNumber,
                                    i = n.carrierCode;
                                if (a !== e) return this.onExtractedNationalNumber(o, i, a, t, r), !0
                            }
                        }
                    }, {
                        key: "onExtractedNationalNumber",
                        value: function(t, e, r, n, o) {
                            var a, i, d = n.lastIndexOf(r);
                            if (d >= 0 && d === n.length - r.length) {
                                i = !0;
                                var u = n.slice(0, d);
                                u !== t && (a = u)
                            }
                            o({
                                nationalPrefix: t,
                                carrierCode: e,
                                nationalSignificantNumber: r,
                                nationalSignificantNumberMatchesInput: i,
                                complexPrefixBeforeNationalSignificantNumber: a
                            }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange()
                        }
                    }, {
                        key: "reExtractNationalSignificantNumber",
                        value: function(t) {
                            return !!this.extractAnotherNationalSignificantNumber(t.getNationalDigits(), t.nationalSignificantNumber, function(e) {
                                return t.update(e)
                            }) || (this.extractIddPrefix(t) || this.fixMissingPlus(t) ? (this.extractCallingCodeAndNationalSignificantNumber(t), !0) : void 0)
                        }
                    }, {
                        key: "extractIddPrefix",
                        value: function(t) {
                            var e = t.international,
                                r = t.IDDPrefix,
                                n = t.digits;
                            if (t.nationalSignificantNumber, !e && !r) {
                                var o = tg(n, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                                if (void 0 !== o && o !== n) return t.update({
                                    IDDPrefix: n.slice(0, n.length - o.length)
                                }), this.startInternationalNumber(t, {
                                    country: void 0,
                                    callingCode: void 0
                                }), !0
                            }
                        }
                    }, {
                        key: "fixMissingPlus",
                        value: function(t) {
                            if (!t.international) {
                                var e = tC(t.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                    r = e.countryCallingCode;
                                if (e.number, r) return t.update({
                                    missingPlus: !0
                                }), this.startInternationalNumber(t, {
                                    country: t.country,
                                    callingCode: r
                                }), !0
                            }
                        }
                    }, {
                        key: "startInternationalNumber",
                        value: function(t, e) {
                            var r = e.country,
                                n = e.callingCode;
                            t.startInternationalNumber(r, n), t.nationalSignificantNumber && (t.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0)
                        }
                    }, {
                        key: "extractCallingCodeAndNationalSignificantNumber",
                        value: function(t) {
                            this.extractCountryCallingCode(t) && this.extractNationalSignificantNumber(t.getNationalDigits(), function(e) {
                                return t.update(e)
                            })
                        }
                    }], ev(r.prototype, t), e && ev(r, e), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), r
                }();

            function ew(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function eN(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var ej = function() {
                var t, e;

                function r(t, e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    }(this, r), this.metadata = new E(e);
                    var n, o = function(t) {
                            if (Array.isArray(t)) return t
                        }(n = this.getCountryAndCallingCode(t)) || function(t, e) {
                            var r, n, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != o) {
                                var a = [],
                                    i = !0,
                                    d = !1;
                                try {
                                    for (o = o.call(t); !(i = (r = o.next()).done) && (a.push(r.value), !e || a.length !== e); i = !0);
                                } catch (t) {
                                    d = !0, n = t
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (d) throw n
                                    }
                                }
                                return a
                            }
                        }(n, 2) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return ew(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ew(t, e)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        a = o[0],
                        i = o[1];
                    this.defaultCountry = a, this.defaultCallingCode = i, this.reset()
                }
                return t = [{
                    key: "getCountryAndCallingCode",
                    value: function(t) {
                        var e, r;
                        return t && (a(t) ? (e = t.defaultCountry, r = t.defaultCallingCode) : e = t), e && !this.metadata.hasCountry(e) && (e = void 0), [e, r]
                    }
                }, {
                    key: "input",
                    value: function(t) {
                        var e = this.parser.input(t, this.state),
                            r = e.digits;
                        if (e.justLeadingPlus) this.formattedOutput = "+";
                        else if (r) {
                            if (this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state), this.metadata.hasSelectedNumberingPlan() && (n = this.formatter.format(r, this.state)), void 0 === n && this.parser.reExtractNationalSignificantNumber(this.state)) {
                                this.determineTheCountryIfNeeded();
                                var n, o = this.state.getNationalDigits();
                                o && (n = this.formatter.format(o, this.state))
                            }
                            this.formattedOutput = n ? this.getFullNumber(n) : this.getNonFormattedNumber()
                        }
                        return this.formattedOutput
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = this;
                        return this.state = new t9({
                            onCountryChange: function(e) {
                                t.country = e
                            },
                            onCallingCodeChange: function(e, r) {
                                t.metadata.selectNumberingPlan(r, e), t.formatter.reset(t.metadata.numberingPlan, t.state), t.parser.reset(t.metadata.numberingPlan)
                            }
                        }), this.formatter = new ey({
                            state: this.state,
                            metadata: this.metadata
                        }), this.parser = new eP({
                            defaultCountry: this.defaultCountry,
                            defaultCallingCode: this.defaultCallingCode,
                            metadata: this.metadata,
                            state: this.state,
                            onNationalSignificantNumberChange: function() {
                                t.determineTheCountryIfNeeded(), t.formatter.reset(t.metadata.numberingPlan, t.state)
                            }
                        }), this.state.reset({
                            country: this.defaultCountry,
                            callingCode: this.defaultCallingCode
                        }), this.formattedOutput = "", this
                    }
                }, {
                    key: "isInternational",
                    value: function() {
                        return this.state.international
                    }
                }, {
                    key: "getCallingCode",
                    value: function() {
                        if (this.isInternational()) return this.state.callingCode
                    }
                }, {
                    key: "getCountryCallingCode",
                    value: function() {
                        return this.getCallingCode()
                    }
                }, {
                    key: "getCountry",
                    value: function() {
                        if (this.state.digits) return this._getCountry()
                    }
                }, {
                    key: "_getCountry",
                    value: function() {
                        return this.state.country
                    }
                }, {
                    key: "determineTheCountryIfNeeded",
                    value: function() {
                        (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry()
                    }
                }, {
                    key: "getFullNumber",
                    value: function(t) {
                        var e = this;
                        if (this.isInternational()) {
                            var r, n = this.state.callingCode;
                            return r = n ? t ? "".concat(n, " ").concat(t) : n : "".concat(this.state.getDigitsWithoutInternationalPrefix()), e.formatter.getInternationalPrefixBeforeCountryCallingCode(e.state, {
                                spacing: !!r
                            }) + r
                        }
                        return t
                    }
                }, {
                    key: "getNonFormattedNationalNumberWithPrefix",
                    value: function() {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            r = t.complexPrefixBeforeNationalSignificantNumber,
                            n = t.nationalPrefix,
                            o = e,
                            a = r || n;
                        return a && (o = a + o), o
                    }
                }, {
                    key: "getNonFormattedNumber",
                    value: function() {
                        var t = this.state.nationalSignificantNumberMatchesInput;
                        return this.getFullNumber(t ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
                    }
                }, {
                    key: "getNonFormattedTemplate",
                    value: function() {
                        var t = this.getNonFormattedNumber();
                        if (t) return t.replace(/[\+\d]/g, "x")
                    }
                }, {
                    key: "isCountryCallingCodeAmbiguous",
                    value: function() {
                        var t = this.state.callingCode,
                            e = this.metadata.getCountryCodesForCallingCode(t);
                        return e && e.length > 1
                    }
                }, {
                    key: "determineTheCountry",
                    value: function() {
                        this.state.setCountry(tw(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
                            nationalNumber: this.state.nationalSignificantNumber,
                            defaultCountry: this.defaultCountry,
                            metadata: this.metadata
                        }))
                    }
                }, {
                    key: "getNumberValue",
                    value: function() {
                        var t = this.state,
                            e = t.digits,
                            r = t.callingCode,
                            n = t.country,
                            o = t.nationalSignificantNumber;
                        if (e) {
                            if (this.isInternational()) return r ? "+" + r + o : "+" + e;
                            if (n || r) return "+" + (n ? this.metadata.countryCallingCode() : r) + o
                        }
                    }
                }, {
                    key: "getNumber",
                    value: function() {
                        var t = this.state,
                            e = t.nationalSignificantNumber,
                            r = t.carrierCode,
                            n = t.callingCode,
                            o = this._getCountry();
                        if (e && (o || n)) {
                            if (o && o === this.defaultCountry) {
                                var a = new E(this.metadata.metadata);
                                a.selectNumberingPlan(o);
                                var i = a.numberingPlan.callingCode(),
                                    d = this.metadata.getCountryCodesForCallingCode(i);
                                if (d.length > 1) {
                                    var u = tP(e, {
                                        countries: d,
                                        defaultCountry: this.defaultCountry,
                                        metadata: this.metadata.metadata
                                    });
                                    u && (o = u)
                                }
                            }
                            var l = new ty(o || n, e, this.metadata.metadata);
                            return r && (l.carrierCode = r), l
                        }
                    }
                }, {
                    key: "isPossible",
                    value: function() {
                        var t = this.getNumber();
                        return !!t && t.isPossible()
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        var t = this.getNumber();
                        return !!t && t.isValid()
                    }
                }, {
                    key: "getNationalNumber",
                    value: function() {
                        return this.state.nationalSignificantNumber
                    }
                }, {
                    key: "getChars",
                    value: function() {
                        return (this.state.international ? "+" : "") + this.state.digits
                    }
                }, {
                    key: "getTemplate",
                    value: function() {
                        return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
                    }
                }], eN(r.prototype, t), e && eN(r, e), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r
            }();

            function eE(t) {
                var e = t.country,
                    r = t.international,
                    n = t.withCountryCallingCode,
                    o = t.metadata;
                return e && r && !n ? "+".concat(M(e, o)) : ""
            }

            function ex(t, e) {
                return e && " " === (t = t.slice(e.length))[0] && (t = t.slice(1)), t
            }
            var eI = ["country", "international", "withCountryCallingCode", "metadata"];

            function eA() {
                return (eA = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var e_ = function(t) {
                    function e(t, e) {
                        var r = t.country,
                            n = t.international,
                            o = t.withCountryCallingCode,
                            a = t.metadata,
                            i = void 0 === a ? void 0 : a,
                            d = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = function(t, e) {
                                    if (null == t) return {};
                                    var r, n, o = {},
                                        a = Object.keys(t);
                                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                    return o
                                }(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(t);
                                    for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                                }
                                return o
                            }(t, eI),
                            u = (0, tU.useCallback)(function(t) {
                                var e = new ej(r, i),
                                    a = eE({
                                        country: r,
                                        international: n,
                                        withCountryCallingCode: o,
                                        metadata: i
                                    }),
                                    d = e.input(a + t),
                                    u = e.getTemplate();
                                return a && (d = ex(d, a), u && (u = ex(u, a))), {
                                    text: d,
                                    template: u
                                }
                            }, [r, i]);
                        return tU.createElement(t3, eA({}, d, {
                            ref: e,
                            parse: q,
                            format: u
                        }))
                    }
                    return (e = tU.forwardRef(e)).propTypes = {
                        value: tV.string.isRequired,
                        onChange: tV.func.isRequired,
                        country: tV.string,
                        international: tV.bool,
                        withCountryCallingCode: tV.bool,
                        metadata: tV.object
                    }, e
                }(),
                eT = ["value", "onChange", "country", "international", "withCountryCallingCode", "metadata", "inputComponent"];

            function ek() {
                return (ek = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var eM = function(t) {
                function e(t, e) {
                    var r = t.value,
                        n = t.onChange,
                        o = t.country,
                        a = t.international,
                        i = t.withCountryCallingCode,
                        d = t.metadata,
                        u = void 0 === d ? void 0 : d,
                        l = t.inputComponent,
                        c = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {},
                                    a = Object.keys(t);
                                for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(t, eT),
                        s = eE({
                            country: o,
                            international: a,
                            withCountryCallingCode: i,
                            metadata: u
                        }),
                        f = (0, tU.useCallback)(function(t) {
                            var e = K(t.target.value);
                            e === r && 0 === eR(s, e, o, u).indexOf(t.target.value) && (e = e.slice(0, -1)), n(e)
                        }, [s, r, n, o, u]);
                    return tU.createElement(void 0 === l ? "input" : l, ek({}, c, {
                        ref: e,
                        value: eR(s, r, o, u),
                        onChange: f
                    }))
                }
                return (e = tU.forwardRef(e)).propTypes = {
                    value: tV.string.isRequired,
                    onChange: tV.func.isRequired,
                    country: tV.string,
                    international: tV.bool,
                    withCountryCallingCode: tV.bool,
                    metadata: tV.object,
                    inputComponent: tV.elementType
                }, e
            }();

            function eR(t, e, r, n) {
                var o, a;
                return ex((o = r, (a = n) || (a = o, o = void 0), new ej(o, a).input(t + e)), t)
            }

            function eF(t) {
                return String.fromCodePoint(127397 + t.toUpperCase().charCodeAt(0))
            }
            var eD = ["value", "onChange", "options", "disabled", "readOnly"],
                eL = ["value", "options", "className", "iconComponent", "getIconAspectRatio", "arrowComponent", "unicodeFlags"];

            function eB(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function eU() {
                return (eU = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eG(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function eV(t) {
                var e = t.value,
                    r = t.onChange,
                    n = t.options,
                    o = t.disabled,
                    a = t.readOnly,
                    i = eG(t, eD),
                    d = (0, tU.useCallback)(function(t) {
                        var e = t.target.value;
                        r("ZZ" === e ? void 0 : e)
                    }, [r]);
                return (0, tU.useMemo)(function() {
                    return eW(n, e)
                }, [n, e]), tU.createElement("select", eU({}, i, {
                    disabled: o || a,
                    readOnly: a,
                    value: e || "ZZ",
                    onChange: d
                }), n.map(function(t) {
                    var e = t.value,
                        r = t.label,
                        n = t.divider;
                    return tU.createElement("option", {
                        key: n ? "|" : e || "ZZ",
                        value: n ? "|" : e || "ZZ",
                        disabled: !!n,
                        style: n ? eH : void 0
                    }, r)
                }))
            }
            eV.propTypes = {
                value: tV.string,
                onChange: tV.func.isRequired,
                options: tV.arrayOf(tV.shape({
                    value: tV.string,
                    label: tV.string,
                    divider: tV.bool
                })).isRequired,
                disabled: tV.bool,
                readOnly: tV.bool
            };
            var eH = {
                fontSize: "1px",
                backgroundColor: "currentColor",
                color: "inherit"
            };

            function ez(t) {
                var e = t.value,
                    r = t.options,
                    n = t.className,
                    o = t.iconComponent,
                    a = (t.getIconAspectRatio, t.arrowComponent),
                    i = void 0 === a ? eZ : a,
                    d = t.unicodeFlags,
                    u = eG(t, eL),
                    l = (0, tU.useMemo)(function() {
                        return eW(r, e)
                    }, [r, e]);
                return tU.createElement("div", {
                    className: "PhoneInputCountry"
                }, tU.createElement(eV, eU({}, u, {
                    value: e,
                    options: r,
                    className: tZ("PhoneInputCountrySelect", n)
                })), d && e && tU.createElement("div", {
                    className: "PhoneInputCountryIconUnicode"
                }, eF(e[0]) + eF(e[1])), !(d && e) && tU.createElement(o, {
                    "aria-hidden": !0,
                    country: e,
                    label: l && l.label,
                    aspectRatio: d ? 1 : void 0
                }), tU.createElement(i, null))
            }

            function eZ() {
                return tU.createElement("div", {
                    className: "PhoneInputCountrySelectArrow"
                })
            }

            function eW(t, e) {
                for (var r, n = function(t, e) {
                        var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (r) return (r = r.call(t)).next.bind(r);
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return eB(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eB(t, e)
                                }
                            }(t))) {
                            r && (t = r);
                            var n = 0;
                            return function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(t); !(r = n()).done;) {
                    var o = r.value;
                    if (!o.divider && o.value === e) return o
                }
            }
            ez.propTypes = {
                iconComponent: tV.elementType,
                arrowComponent: tV.elementType,
                unicodeFlags: tV.bool
            };
            var eK = ["country", "countryName", "flags", "flagUrl"];

            function eq() {
                return (eq = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function eY(t) {
                var e = t.country,
                    r = t.countryName,
                    n = t.flags,
                    o = t.flagUrl,
                    a = function(t, e) {
                        if (null == t) return {};
                        var r, n, o = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                a = Object.keys(t);
                            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(t);
                            for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                        }
                        return o
                    }(t, eK);
                return n && n[e] ? n[e]({
                    title: r
                }) : tU.createElement("img", eq({}, a, {
                    alt: r,
                    role: r ? void 0 : "presentation",
                    src: o.replace("{XX}", e).replace("{xx}", e.toLowerCase())
                }))
            }
            eY.propTypes = {
                country: tV.string.isRequired,
                countryName: tV.string.isRequired,
                flags: tV.objectOf(tV.elementType),
                flagUrl: tV.string.isRequired
            };
            var eJ = ["aspectRatio"],
                eX = ["title"],
                eQ = ["title"];

            function e0() {
                return (e0 = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function e1(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function e2(t) {
                var e = t.aspectRatio,
                    r = e1(t, eJ);
                return 1 === e ? tU.createElement(e4, r) : tU.createElement(e3, r)
            }

            function e3(t) {
                var e = t.title,
                    r = e1(t, eX);
                return tU.createElement("svg", e0({}, r, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 75 50"
                }), tU.createElement("title", null, e), tU.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, tU.createElement("path", {
                    strokeLinecap: "round",
                    d: "M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"
                }), tU.createElement("path", {
                    d: "M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"
                }), tU.createElement("line", {
                    x1: "26",
                    y1: "25",
                    x2: "74",
                    y2: "25"
                }), tU.createElement("line", {
                    x1: "50",
                    y1: "1",
                    x2: "50",
                    y2: "49"
                }), tU.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"
                }), tU.createElement("path", {
                    strokeLinecap: "round",
                    d: "M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"
                })), tU.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "none",
                    fill: "currentColor",
                    d: "M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"
                }))
            }

            function e4(t) {
                var e = t.title,
                    r = e1(t, eQ);
                return tU.createElement("svg", e0({}, r, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 50 50"
                }), tU.createElement("title", null, e), tU.createElement("g", {
                    className: "PhoneInputInternationalIconGlobe",
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, tU.createElement("path", {
                    d: "M8.45,13A21.44,21.44,0,1,1,37.08,41.56"
                }), tU.createElement("path", {
                    d: "M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"
                }), tU.createElement("path", {
                    d: "M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"
                }), tU.createElement("path", {
                    d: "M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"
                }), tU.createElement("line", {
                    x1: "27.8",
                    y1: "0.85",
                    x2: "27.8",
                    y2: "34.61"
                }), tU.createElement("line", {
                    x1: "15.2",
                    y1: "22.23",
                    x2: "49.15",
                    y2: "22.23"
                })), tU.createElement("path", {
                    className: "PhoneInputInternationalIconPhone",
                    stroke: "transparent",
                    fill: "currentColor",
                    d: "M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"
                }))
            }

            function e9(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function e8(t, e) {
                return !!R(t, e) || (console.error("Country not found: ".concat(t)), !1)
            }

            function e6(t, e) {
                return t && 0 === (t = t.filter(function(t) {
                    return e8(t, e)
                })).length && (t = void 0), t
            }

            function e5(t) {
                return new E(t).getCountries()
            }
            e2.propTypes = {
                title: tV.string.isRequired,
                aspectRatio: tV.number
            }, e3.propTypes = {
                title: tV.string.isRequired
            }, e4.propTypes = {
                title: tV.string.isRequired
            };
            var e7 = ["country", "label", "aspectRatio"];

            function rt() {
                return (rt = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function re(t) {
                var e = t.flags,
                    r = t.flagUrl,
                    n = t.flagComponent,
                    o = t.internationalIcon;

                function a(t) {
                    var a = t.country,
                        i = t.label,
                        d = t.aspectRatio,
                        u = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {},
                                    a = Object.keys(t);
                                for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(t, e7),
                        l = o === e2 ? d : void 0;
                    return tU.createElement("div", rt({}, u, {
                        className: tZ("PhoneInputCountryIcon", {
                            "PhoneInputCountryIcon--square": 1 === l,
                            "PhoneInputCountryIcon--border": a
                        })
                    }), a ? tU.createElement(n, {
                        country: a,
                        countryName: i,
                        flags: e,
                        flagUrl: r,
                        className: "PhoneInputCountryIconImg"
                    }) : tU.createElement(o, {
                        title: i,
                        aspectRatio: l,
                        className: "PhoneInputCountryIconImg"
                    }))
                }
                return a.propTypes = {
                    country: tV.string,
                    label: tV.string.isRequired,
                    aspectRatio: tV.number
                }, a
            }

            function rr(t, e) {
                return "+" + M(t, e)
            }

            function rn(t, e) {
                return function() {
                    var t = u(arguments);
                    return tF(t.text, t.options, t.metadata)
                }(t || "", e)
            }

            function ro(t, e, r) {
                if (t) {
                    if ("+" === t[0]) {
                        if ("+" === t) return;
                        var n = new ej(e, r);
                        return n.input(t), n.getNumberValue()
                    }
                    if (e) {
                        var o = ru(t, e, r);
                        return "+".concat(M(e, r)).concat(o || "")
                    }
                }
            }

            function ra(t, e) {
                var r, n = e.country,
                    o = e.countries,
                    a = e.required,
                    i = e.metadata;
                if ("+" === t) return n;
                var d = ((r = new ej(null, i)).input(t), r.getCountry());
                return d && (!o || o.indexOf(d) >= 0) ? d : !n || a || rl(t, n, i) ? n : void 0
            }

            function ri(t, e, r) {
                if (0 !== t.indexOf(rr(e, r))) return t.replace(/\D/g, "");
                var n = new ej(e, r);
                n.input(t);
                var o = n.getNumber();
                return o ? o.formatNational().replace(/\D/g, "") : ""
            }

            function rd(t, e, r) {
                return String.prototype.localeCompare ? t.localeCompare(e, r) : t < e ? -1 : t > e ? 1 : 0
            }

            function ru(t, e, r) {
                var n = new ej(e, r);
                n.input(t);
                var o = n.getNumber();
                return o && o.nationalNumber
            }

            function rl(t, e, r) {
                for (var n = rr(e, r), o = 0; o < t.length && o < n.length;) {
                    if (t[o] !== n[o]) return !1;
                    o++
                }
                return !0
            }

            function rc(t) {
                var e = t.value,
                    r = t.phoneNumber,
                    n = t.defaultCountry,
                    o = t.international,
                    a = t.useNationalFormat,
                    i = t.metadata;
                return (!1 === o || a) && r && r.country ? r.formatNational().replace(/\D/g, "") : !e && o && n ? rr(n, i) : e
            }

            function rs(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rf(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rs(Object(r), !0).forEach(function(e) {
                        var n;
                        n = r[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rs(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function r$(t, e) {
                return null === t && (t = void 0), null === e && (e = void 0), t === e
            }

            function rp(t) {
                return (rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            re({
                flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                flagComponent: eY,
                internationalIcon: e2
            });
            var rh = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];

            function ry(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function rm(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ry(Object(r), !0).forEach(function(e) {
                        rS(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function rg() {
                return (rg = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function rv(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function rb(t, e) {
                return (rb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function rC(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function rO(t) {
                return (rO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function rS(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var rP = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && rb(t, e)
                    }(a, t);
                    var e, r, n, o = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = rO(a);
                        if (e) {
                            var n = rO(this).constructor;
                            t = Reflect.construct(r, arguments, n)
                        } else t = r.apply(this, arguments);
                        return function(t, e) {
                            if (e && ("object" === rp(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                            return rC(t)
                        }(this, t)
                    });

                    function a(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, a), rS(rC(f = o.call(this, t)), "setInputRef", function(t) {
                            f.inputRef.current = t;
                            var e = f.props.inputRef;
                            e && ("function" == typeof e ? e(t) : e.current = t)
                        }), rS(rC(f), "isCountrySupportedWithError", function(t) {
                            return e8(t, f.props.metadata)
                        }), rS(rC(f), "onCountryChange", function(t) {
                            var e = f.props,
                                r = e.international,
                                n = e.metadata,
                                o = e.onChange,
                                a = e.focusInputOnCountrySelection,
                                i = f.state,
                                d = function(t, e) {
                                    var r = e.prevCountry,
                                        n = e.newCountry,
                                        o = e.metadata,
                                        a = e.useNationalFormat;
                                    if (r === n) return t;
                                    if (!t) return a ? "" : n ? rr(n, o) : "";
                                    if (n) {
                                        if ("+" === t[0]) {
                                            if (a) return 0 === t.indexOf("+" + M(n, o)) ? function(t, e, r) {
                                                if (e) {
                                                    var n = "+" + M(e, r);
                                                    if (t.length < n.length) {
                                                        if (0 === n.indexOf(t)) return ""
                                                    } else if (0 === t.indexOf(n)) return t.slice(n.length)
                                                }
                                                for (var o = 0, a = Object.keys(r.country_calling_codes); o < a.length; o++) {
                                                    var i = a[o];
                                                    if (1 === t.indexOf(i)) return t.slice(1 + i.length)
                                                }
                                                return ""
                                            }(t, n, o) : "";
                                            if (r) {
                                                var i = rr(n, o);
                                                if (0 !== t.indexOf(i)) return i
                                            } else {
                                                var d = rr(n, o);
                                                return 0 === t.indexOf(d) ? t : d
                                            }
                                        }
                                    } else if ("+" !== t[0]) return ro(t, r, o) || "";
                                    return t
                                }(i.phoneDigits, {
                                    prevCountry: i.country,
                                    newCountry: t,
                                    metadata: n,
                                    useNationalFormat: !r
                                }),
                                u = ro(d, t, n);
                            a && f.inputRef.current.focus(), f.setState({
                                country: t,
                                hasUserSelectedACountry: !0,
                                phoneDigits: d,
                                value: u
                            }, function() {
                                o(u)
                            })
                        }), rS(rC(f), "onChange", function(t) {
                            var e = f.props,
                                r = e.defaultCountry,
                                n = e.onChange,
                                o = e.addInternationalOption,
                                a = e.international,
                                i = e.limitMaxLength,
                                d = e.countryCallingCodeEditable,
                                u = e.metadata,
                                l = f.state,
                                c = l.countries,
                                s = function(t, e) {
                                    var r, n = e.prevPhoneDigits,
                                        o = e.country,
                                        a = e.defaultCountry,
                                        i = e.countryRequired,
                                        d = e.getAnyCountry,
                                        u = e.countries,
                                        l = e.international,
                                        c = e.limitMaxLength,
                                        s = e.countryCallingCodeEditable,
                                        f = e.metadata;
                                    if (l && !1 === s && o) {
                                        var $, p = rr(o, f);
                                        if (0 !== t.indexOf(p)) return t && "+" !== t[0] ? $ = ro(t = p + t, o, f) : t = p, {
                                            phoneDigits: t,
                                            value: $,
                                            country: o
                                        }
                                    }
                                    return !1 === l && o && t && "+" === t[0] && (t = ri(t, o, f)), t && o && c && (t = function(t, e, r) {
                                        var n = ru(t, e, r);
                                        if (n) {
                                            var o, a = n.length - ((o = new E(o = r)).selectNumberingPlan(e), o.numberingPlan.possibleLengths()[o.numberingPlan.possibleLengths().length - 1]);
                                            if (a > 0) return t.slice(0, t.length - a)
                                        }
                                        return t
                                    }(t, o, f)), t && "+" !== t[0] && (!o || l) && (t = "+" + t), !t && n && "+" === n[0] && (o = l ? void 0 : a), "+" === t && n && "+" === n[0] && n.length > 1 && (o = void 0), t && (r = "+" === t[0] ? "+" === t ? void 0 : o && 0 === rr(o, f).indexOf(t) ? void 0 : ro(t, o, f) : ro(t, o, f)), r && (o = ra(r, {
                                        country: o,
                                        countries: u,
                                        metadata: f
                                    }), !1 === l && o && t && "+" === t[0] && (r = ro(t = ri(t, o, f), o, f))), !o && i && (o = a || d()), {
                                        phoneDigits: t,
                                        country: o,
                                        value: r
                                    }
                                }(t, {
                                    prevPhoneDigits: l.phoneDigits,
                                    country: l.country,
                                    countryRequired: !o,
                                    defaultCountry: r,
                                    getAnyCountry: function() {
                                        return f.getFirstSupportedCountry({
                                            countries: c
                                        })
                                    },
                                    countries: c,
                                    international: a,
                                    limitMaxLength: i,
                                    countryCallingCodeEditable: d,
                                    metadata: u
                                }),
                                $ = s.phoneDigits,
                                p = s.country,
                                h = s.value,
                                y = {
                                    phoneDigits: $,
                                    value: h,
                                    country: p
                                };
                            !1 !== d || h || $ !== f.state.phoneDigits || (y.forceRerender = {}), f.setState(y, function() {
                                return n(h)
                            })
                        }), rS(rC(f), "_onFocus", function() {
                            return f.setState({
                                isFocused: !0
                            })
                        }), rS(rC(f), "_onBlur", function() {
                            return f.setState({
                                isFocused: !1
                            })
                        }), rS(rC(f), "onFocus", function(t) {
                            f._onFocus();
                            var e = f.props.onFocus;
                            e && e(t)
                        }), rS(rC(f), "onBlur", function(t) {
                            var e = f.props.onBlur;
                            f._onBlur(), e && e(t)
                        }), rS(rC(f), "onCountryFocus", function(t) {
                            f._onFocus();
                            var e = f.props.countrySelectProps;
                            if (e) {
                                var r = e.onFocus;
                                r && r(t)
                            }
                        }), rS(rC(f), "onCountryBlur", function(t) {
                            f._onBlur();
                            var e = f.props.countrySelectProps;
                            if (e) {
                                var r = e.onBlur;
                                r && r(t)
                            }
                        }), f.inputRef = tU.createRef();
                        var e, r, n, i, d, u, l, c, s, f, $ = f.props,
                            p = $.value,
                            h = ($.labels, $.international),
                            y = $.addInternationalOption,
                            m = $.displayInitialValueAsLocalNumber,
                            g = $.initialValueFormat,
                            v = $.metadata,
                            b = f.props,
                            C = b.defaultCountry,
                            O = b.countries;
                        C && !f.isCountrySupportedWithError(C) && (C = void 0), O = e6(O, v);
                        var S = rn(p, v);
                        f.CountryIcon = re(f.props);
                        var P = (n = (e = {
                            value: p,
                            phoneNumber: S,
                            defaultCountry: C,
                            required: !y,
                            countries: O || e5(v),
                            getAnyCountry: function() {
                                return f.getFirstSupportedCountry({
                                    countries: O
                                })
                            },
                            metadata: v
                        }).value, i = e.phoneNumber, d = e.defaultCountry, u = e.getAnyCountry, l = e.countries, c = e.required, s = e.metadata, i && i.country ? r = i.country : d && (!n || rl(n, d, s)) && (r = d), l && 0 > l.indexOf(r) && (r = void 0), !r && c && l && l.length > 0 && (r = u()), r);
                        return f.state = {
                            props: f.props,
                            country: P,
                            countries: O,
                            phoneDigits: rc({
                                value: p,
                                phoneNumber: S,
                                defaultCountry: C,
                                international: h,
                                useNationalFormat: m || "national" === g,
                                metadata: v
                            }),
                            value: p
                        }, f
                    }
                    return r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props.onCountryChange,
                                e = this.props.defaultCountry,
                                r = this.state.country;
                            t && (e && !this.isCountrySupportedWithError(e) && (e = void 0), r !== e && t(r))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t, e) {
                            var r = this.props.onCountryChange,
                                n = this.state.country;
                            r && n !== e.country && r(n)
                        }
                    }, {
                        key: "getCountrySelectOptions",
                        value: function(t) {
                            var e = t.countries,
                                r = this.props,
                                n = r.international,
                                o = r.countryCallingCodeEditable,
                                a = r.countryOptionsOrder,
                                i = r.addInternationalOption,
                                d = r.labels,
                                u = r.locales,
                                l = r.metadata;
                            return this.useMemoCountrySelectOptions(function() {
                                var t, r, c, s, f, $, p;
                                return function(t, e) {
                                    if (!e) return t;
                                    for (var r, n = [], o = [], a = n, i = function(t, e) {
                                            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                            if (r) return (r = r.call(t)).next.bind(r);
                                            if (Array.isArray(t) || (r = function(t, e) {
                                                    if (t) {
                                                        if ("string" == typeof t) return e9(t, e);
                                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e9(t, e)
                                                    }
                                                }(t))) {
                                                r && (t = r);
                                                var n = 0;
                                                return function() {
                                                    return n >= t.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: t[n++]
                                                    }
                                                }
                                            }
                                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(e); !(r = i()).done;) {
                                        var d = r.value;
                                        "|" === d ? a.push({
                                            divider: !0
                                        }) : "..." === d || "…" === d ? a = o : function() {
                                            var e = void 0;
                                            e = "\uD83C\uDF10" === d ? void 0 : d;
                                            var r = t.indexOf(t.filter(function(t) {
                                                    return t.value === e
                                                })[0]),
                                                n = t[r];
                                            t.splice(r, 1), a.push(n)
                                        }()
                                    }
                                    return n.concat(t).concat(o)
                                }((r = (t = {
                                    countries: e || e5(l),
                                    countryNames: d,
                                    addInternationalOption: (!n || !1 !== o) && i,
                                    compareStringsLocales: u
                                }).countries, c = t.countryNames, s = t.addInternationalOption, f = t.compareStringsLocales, ($ = t.compareStrings) || ($ = rd), (p = r.map(function(t) {
                                    return {
                                        value: t,
                                        label: c[t] || t
                                    }
                                })).sort(function(t, e) {
                                    return $(t.label, e.label, f)
                                }), s && p.unshift({
                                    label: c.ZZ
                                }), p), function(t, e) {
                                    if (t && (t = t.filter(function(t) {
                                            switch (t) {
                                                case "\uD83C\uDF10":
                                                case "|":
                                                case "...":
                                                case "…":
                                                    return !0;
                                                default:
                                                    return e8(t, e)
                                            }
                                        })).length > 0) return t
                                }(a, l))
                            }, [e, a, i, d, l])
                        }
                    }, {
                        key: "useMemoCountrySelectOptions",
                        value: function(t, e) {
                            return this.countrySelectOptionsMemoDependencies && function(t, e) {
                                if (t.length !== e.length) return !1;
                                for (var r = 0; r < t.length;) {
                                    if (t[r] !== e[r]) return !1;
                                    r++
                                }
                                return !0
                            }(e, this.countrySelectOptionsMemoDependencies) || (this.countrySelectOptionsMemo = t(), this.countrySelectOptionsMemoDependencies = e), this.countrySelectOptionsMemo
                        }
                    }, {
                        key: "getFirstSupportedCountry",
                        value: function(t) {
                            var e = t.countries;
                            return this.getCountrySelectOptions({
                                countries: e
                            })[0].value
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.name,
                                r = t.disabled,
                                n = t.readOnly,
                                o = t.autoComplete,
                                a = t.style,
                                i = t.className,
                                d = (t.inputRef, t.inputComponent),
                                u = t.numberInputProps,
                                l = t.smartCaret,
                                c = t.countrySelectComponent,
                                s = t.countrySelectProps,
                                f = t.containerComponent,
                                $ = (t.defaultCountry, t.countries, t.countryOptionsOrder, t.labels),
                                p = (t.flags, t.flagComponent, t.flagUrl, t.addInternationalOption, t.internationalIcon, t.displayInitialValueAsLocalNumber, t.initialValueFormat, t.onCountryChange, t.limitMaxLength, t.countryCallingCodeEditable, t.focusInputOnCountrySelection, t.reset, t.metadata),
                                h = (t.international, t.locales, function(t, e) {
                                    if (null == t) return {};
                                    var r, n, o = function(t, e) {
                                        if (null == t) return {};
                                        var r, n, o = {},
                                            a = Object.keys(t);
                                        for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                        return o
                                    }(t, e);
                                    if (Object.getOwnPropertySymbols) {
                                        var a = Object.getOwnPropertySymbols(t);
                                        for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                                    }
                                    return o
                                }(t, rh)),
                                y = this.state,
                                m = y.country,
                                g = y.countries,
                                v = y.phoneDigits,
                                b = y.isFocused,
                                C = this.getCountrySelectOptions({
                                    countries: g
                                });
                            return tU.createElement(f, {
                                style: a,
                                className: tZ(i, "PhoneInput", {
                                    "PhoneInput--focus": b,
                                    "PhoneInput--disabled": r,
                                    "PhoneInput--readOnly": n
                                })
                            }, tU.createElement(c, rg({
                                name: e ? "".concat(e, "Country") : void 0,
                                "aria-label": $.country
                            }, s, {
                                value: m,
                                options: C,
                                onChange: this.onCountryChange,
                                onFocus: this.onCountryFocus,
                                onBlur: this.onCountryBlur,
                                disabled: r || s && s.disabled,
                                readOnly: n || s && s.readOnly,
                                iconComponent: this.CountryIcon
                            })), tU.createElement(l ? e_ : eM, rg({
                                ref: this.setInputRef,
                                type: "tel",
                                autoComplete: o
                            }, u, h, {
                                name: e,
                                metadata: p,
                                country: m,
                                value: v || "",
                                onChange: this.onChange,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                disabled: r,
                                readOnly: n,
                                inputComponent: d,
                                className: tZ("PhoneInputInput", u && u.className, h.className)
                            })))
                        }
                    }], n = [{
                        key: "getDerivedStateFromProps",
                        value: function(t, e) {
                            return rm({
                                props: t
                            }, function(t, e, r) {
                                var n = t.metadata,
                                    o = t.countries,
                                    a = t.defaultCountry,
                                    i = t.value,
                                    d = t.reset,
                                    u = t.international,
                                    l = t.displayInitialValueAsLocalNumber,
                                    c = t.initialValueFormat,
                                    s = e.defaultCountry,
                                    f = e.value,
                                    $ = e.reset;
                                r.country;
                                var p = r.value,
                                    h = r.hasUserSelectedACountry,
                                    y = function(t) {
                                        return rc(rf(rf({}, t), {}, {
                                            international: u,
                                            useNationalFormat: l || "national" === c,
                                            metadata: n
                                        }))
                                    };
                                if (d !== $) return {
                                    phoneDigits: y({
                                        value: void 0,
                                        defaultCountry: a
                                    }),
                                    value: void 0,
                                    country: a,
                                    hasUserSelectedACountry: void 0
                                };
                                if (a !== s) {
                                    var m = !a || e8(a, n),
                                        g = !p || u && p === y({
                                            value: void 0,
                                            defaultCountry: s
                                        }),
                                        v = !i && g;
                                    if (!h && m && v) return {
                                        country: a,
                                        phoneDigits: y({
                                            value: void 0,
                                            defaultCountry: a
                                        }),
                                        value: void 0
                                    }
                                }
                                if (!r$(i, f) && !r$(i, p)) {
                                    if (i) {
                                        b = rn(i, n);
                                        var b, C, O, S = e6(o, n);
                                        b && b.country ? (!S || S.indexOf(b.country) >= 0) && (C = b.country) : (C = ra(i, {
                                            country: void 0,
                                            countries: S,
                                            metadata: n
                                        })) || !a || 0 !== i.indexOf(rr(a, n)) || (C = a)
                                    }
                                    return i || (O = {
                                        hasUserSelectedACountry: void 0
                                    }), rf(rf({}, O), {}, {
                                        phoneDigits: y({
                                            phoneNumber: b,
                                            value: i,
                                            defaultCountry: a
                                        }),
                                        value: i,
                                        country: i ? C : a
                                    })
                                }
                            }(t, e.props, e))
                        }
                    }], r && rv(a.prototype, r), n && rv(a, n), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), a
                }(tU.PureComponent),
                rw = tU.forwardRef(function(t, e) {
                    return tU.createElement(rP, rg({}, function(t) {
                        for (var e in t = rm({}, t), rN) void 0 === t[e] && (t[e] = rN[e]);
                        return t
                    }(t), {
                        inputRef: e
                    }))
                });
            rw.propTypes = {
                value: tV.string,
                onChange: tV.func.isRequired,
                onFocus: tV.func,
                onBlur: tV.func,
                disabled: tV.bool,
                readOnly: tV.bool,
                autoComplete: tV.string,
                initialValueFormat: tV.oneOf(["national"]),
                displayInitialValueAsLocalNumber: tV.bool,
                defaultCountry: tV.string,
                countries: tV.arrayOf(tV.string),
                labels: tz,
                locales: tV.oneOfType([tV.string, tV.arrayOf(tV.string)]),
                flagUrl: tV.string,
                flags: tV.objectOf(tV.elementType),
                flagComponent: tV.elementType,
                addInternationalOption: tV.bool,
                internationalIcon: tV.elementType,
                countryOptionsOrder: tV.arrayOf(tV.string),
                style: tV.object,
                className: tV.string,
                countrySelectComponent: tV.elementType,
                countrySelectProps: tV.object,
                inputComponent: tV.elementType,
                containerComponent: tV.elementType,
                numberInputProps: tV.object,
                smartCaret: tV.bool,
                international: tV.bool,
                limitMaxLength: tV.bool,
                countryCallingCodeEditable: tV.bool,
                metadata: tH,
                onCountryChange: tV.func,
                focusInputOnCountrySelection: tV.bool
            };
            var rN = {
                    autoComplete: "tel",
                    countrySelectComponent: ez,
                    flagComponent: eY,
                    flagUrl: "https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",
                    internationalIcon: e2,
                    inputComponent: "input",
                    containerComponent: "div",
                    reset: tV.any,
                    smartCaret: !0,
                    addInternationalOption: !0,
                    countryCallingCodeEditable: !0,
                    focusInputOnCountrySelection: !0
                },
                rj = ["metadata", "labels"];

            function rE() {
                return (rE = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function rx(t) {
                var e = tU.forwardRef(function(e, r) {
                    var n = e.metadata,
                        o = void 0 === n ? t : n,
                        a = e.labels,
                        i = void 0 === a ? tG : a,
                        d = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r, n, o = {},
                                    a = Object.keys(t);
                                for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(e, rj);
                    return tU.createElement(rw, rE({}, d, {
                        ref: r,
                        metadata: o,
                        labels: i
                    }))
                });
                return e.propTypes = {
                    metadata: tH,
                    labels: tz
                }, e
            }
            rx();
            var rI = rx(n);

            function rA() {
                return function(t, e) {
                    var r = Array.prototype.slice.call(e);
                    return r.push(n), t.apply(this, r)
                }(tB, arguments)
            }
        },
        33305: function(t, e, r) {
            "use strict";
            r.d(e, {
                f: function() {
                    return a
                }
            });
            var n = r(84192),
                o = r(21803);

            function a(t, e = "wei") {
                return (0, o.v)(t, n.ez[e])
            }
        },
        21803: function(t, e, r) {
            "use strict";

            function n(t, e) {
                let [r, n = "0"] = t.split("."), o = r.startsWith("-");
                if (o && (r = r.slice(1)), n = n.replace(/(0+)$/, ""), 0 === e) 1 === Math.round(Number(`.${n}`)) && (r = `${BigInt(r)+1n}`), n = "";
                else if (n.length > e) {
                    let [t, o, a] = [n.slice(0, e - 1), n.slice(e - 1, e), n.slice(e)], i = Math.round(Number(`${o}.${a}`));
                    (n = i > 9 ? `${BigInt(t)+BigInt(1)}0`.padStart(t.length + 1, "0") : `${t}${i}`).length > e && (n = n.slice(1), r = `${BigInt(r)+1n}`), n = n.slice(0, e)
                } else n = n.padEnd(e, "0");
                return BigInt(`${o?"-":""}${r}${n}`)
            }
            r.d(e, {
                v: function() {
                    return n
                }
            })
        }
    }
]);