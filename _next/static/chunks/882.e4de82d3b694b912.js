(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [882], {
        31050: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(31416);
            let i = r(93350);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(17309), t.jQ = 64, t.KS = 64, t.aP = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let o = n(),
                a = n([1]),
                c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                u = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                l = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function h(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function f(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function p(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function d(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                f(i), f(i), f(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, p(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function y(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function v(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    _ = 0,
                    b = 0,
                    w = 0,
                    E = 0,
                    I = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    R = 0,
                    C = 0,
                    A = 0,
                    j = 0,
                    T = 0,
                    N = 0,
                    L = 0,
                    D = 0,
                    q = r[0],
                    M = r[1],
                    z = r[2],
                    k = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    B = r[8],
                    F = r[9],
                    K = r[10],
                    G = r[11],
                    Z = r[12],
                    W = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * q, o += i * M, a += i * z, c += i * k, u += i * $, l += i * U, h += i * H, f += i * V, p += i * B, d += i * F, g += i * K, y += i * G, v += i * Z, m += i * W, _ += i * J, b += i * Q, o += (i = t[1]) * q, a += i * M, c += i * z, u += i * k, l += i * $, h += i * U, f += i * H, p += i * V, d += i * B, g += i * F, y += i * K, v += i * G, m += i * Z, _ += i * W, b += i * J, w += i * Q, a += (i = t[2]) * q, c += i * M, u += i * z, l += i * k, h += i * $, f += i * U, p += i * H, d += i * V, g += i * B, y += i * F, v += i * K, m += i * G, _ += i * Z, b += i * W, w += i * J, E += i * Q, c += (i = t[3]) * q, u += i * M, l += i * z, h += i * k, f += i * $, p += i * U, d += i * H, g += i * V, y += i * B, v += i * F, m += i * K, _ += i * G, b += i * Z, w += i * W, E += i * J, I += i * Q, u += (i = t[4]) * q, l += i * M, h += i * z, f += i * k, p += i * $, d += i * U, g += i * H, y += i * V, v += i * B, m += i * F, _ += i * K, b += i * G, w += i * Z, E += i * W, I += i * J, P += i * Q, l += (i = t[5]) * q, h += i * M, f += i * z, p += i * k, d += i * $, g += i * U, y += i * H, v += i * V, m += i * B, _ += i * F, b += i * K, w += i * G, E += i * Z, I += i * W, P += i * J, S += i * Q, h += (i = t[6]) * q, f += i * M, p += i * z, d += i * k, g += i * $, y += i * U, v += i * H, m += i * V, _ += i * B, b += i * F, w += i * K, E += i * G, I += i * Z, P += i * W, S += i * J, O += i * Q, f += (i = t[7]) * q, p += i * M, d += i * z, g += i * k, y += i * $, v += i * U, m += i * H, _ += i * V, b += i * B, w += i * F, E += i * K, I += i * G, P += i * Z, S += i * W, O += i * J, x += i * Q, p += (i = t[8]) * q, d += i * M, g += i * z, y += i * k, v += i * $, m += i * U, _ += i * H, b += i * V, w += i * B, E += i * F, I += i * K, P += i * G, S += i * Z, O += i * W, x += i * J, R += i * Q, d += (i = t[9]) * q, g += i * M, y += i * z, v += i * k, m += i * $, _ += i * U, b += i * H, w += i * V, E += i * B, I += i * F, P += i * K, S += i * G, O += i * Z, x += i * W, R += i * J, C += i * Q, g += (i = t[10]) * q, y += i * M, v += i * z, m += i * k, _ += i * $, b += i * U, w += i * H, E += i * V, I += i * B, P += i * F, S += i * K, O += i * G, x += i * Z, R += i * W, C += i * J, A += i * Q, y += (i = t[11]) * q, v += i * M, m += i * z, _ += i * k, b += i * $, w += i * U, E += i * H, I += i * V, P += i * B, S += i * F, O += i * K, x += i * G, R += i * Z, C += i * W, A += i * J, j += i * Q, v += (i = t[12]) * q, m += i * M, _ += i * z, b += i * k, w += i * $, E += i * U, I += i * H, P += i * V, S += i * B, O += i * F, x += i * K, R += i * G, C += i * Z, A += i * W, j += i * J, T += i * Q, m += (i = t[13]) * q, _ += i * M, b += i * z, w += i * k, E += i * $, I += i * U, P += i * H, S += i * V, O += i * B, x += i * F, R += i * K, C += i * G, A += i * Z, j += i * W, T += i * J, N += i * Q, _ += (i = t[14]) * q, b += i * M, w += i * z, E += i * k, I += i * $, P += i * U, S += i * H, O += i * V, x += i * B, R += i * F, C += i * K, A += i * G, j += i * Z, T += i * W, N += i * J, L += i * Q, b += (i = t[15]) * q, w += i * M, E += i * z, I += i * k, P += i * $, S += i * U, O += i * H, x += i * V, R += i * B, C += i * F, A += i * K, j += i * G, T += i * Z, N += i * W, L += i * J, D += i * Q, s += 38 * w, o += 38 * E, a += 38 * I, c += 38 * P, u += 38 * S, l += 38 * O, h += 38 * x, f += 38 * R, p += 38 * C, d += 38 * A, g += 38 * j, y += 38 * T, v += 38 * N, m += 38 * L, _ += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = _, e[15] = b
            }

            function m(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    a = n(),
                    u = n(),
                    l = n(),
                    h = n(),
                    f = n();
                y(r, e[1], e[0]), y(f, t[1], t[0]), v(r, r, f), g(i, e[0], e[1]), g(f, t[0], t[1]), v(i, i, f), v(s, e[3], t[3]), v(s, s, c), v(o, e[2], t[2]), g(o, o, o), y(a, i, r), y(u, o, s), g(l, o, s), g(h, i, r), v(e[0], a, u), v(e[1], h, l), v(e[2], l, u), v(e[3], a, h)
            }

            function _(e, t, r) {
                for (let i = 0; i < 4; i++) p(e[i], t[i], r)
            }

            function b(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) v(i, i, i), 2 !== r && 4 !== r && v(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), v(r, t[0], s), v(i, t[1], s), d(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return d(t, e), 1 & t[0]
                }(r) << 7
            }

            function w(e, t) {
                let r = [n(), n(), n(), n()];
                h(r[0], u), h(r[1], l), h(r[2], a), v(r[3], u, l),
                    function(e, t, r) {
                        h(e[0], o), h(e[1], a), h(e[2], a), h(e[3], o);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            _(e, t, n), m(t, e), m(e, e), _(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                w(o, r), b(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function I(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * E[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * E[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * E[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function P(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                I(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), P(u), w(s, u), b(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                P(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return I(a.subarray(32), r), a
            }
        },
        93350: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(98099),
                n = r(17309);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var u, l, h, f, p, d, g, y, v = r[0], m = r[1], _ = r[2], b = r[3], w = r[4], E = r[5], I = r[6], P = r[7], S = n[0], O = n[1], x = n[2], R = n[3], C = n[4], A = n[5], j = n[6], T = n[7]; c >= 128;) {
                    for (var N = 0; N < 16; N++) {
                        var L = 8 * N + a;
                        e[N] = i.readUint32BE(s, L), t[N] = i.readUint32BE(s, L + 4)
                    }
                    for (var N = 0; N < 80; N++) {
                        var D = v,
                            q = m,
                            M = _,
                            z = b,
                            k = w,
                            $ = E,
                            U = I,
                            H = P,
                            V = S,
                            B = O,
                            F = x,
                            K = R,
                            G = C,
                            Z = A,
                            W = j,
                            J = T;
                        if (u = P, p = 65535 & (l = T), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (w >>> 14 | C << 18) ^ (w >>> 18 | C << 14) ^ (C >>> 9 | w << 23), p += 65535 & (l = (C >>> 14 | w << 18) ^ (C >>> 18 | w << 14) ^ (w >>> 9 | C << 23)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = w & E ^ ~w & I, p += 65535 & (l = C & A ^ ~C & j), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * N], p += 65535 & (l = o[2 * N + 1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[N % 16], p += 65535 & (l = t[N % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, f = 65535 & p | d << 16, u = h, p = 65535 & (l = f), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), p += 65535 & (l = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = v & m ^ v & _ ^ m & _, p += 65535 & (l = S & O ^ S & x ^ O & x), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, J = 65535 & p | d << 16, u = z, p = 65535 & (l = K), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, p += 65535 & (l = f), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, z = 65535 & g | y << 16, K = 65535 & p | d << 16, m = D, _ = q, b = M, w = z, E = k, I = $, P = U, v = H, O = V, x = B, R = F, C = K, A = G, j = Z, T = W, S = J, N % 16 == 15)
                            for (var L = 0; L < 16; L++) u = e[L], p = 65535 & (l = t[L]), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(L + 9) % 16], p += 65535 & (l = t[(L + 9) % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(L + 1) % 16]) >>> 1 | (f = t[(L + 1) % 16]) << 31) ^ (h >>> 8 | f << 24) ^ h >>> 7, p += 65535 & (l = (f >>> 1 | h << 31) ^ (f >>> 8 | h << 24) ^ (f >>> 7 | h << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(L + 14) % 16]) >>> 19 | (f = t[(L + 14) % 16]) << 13) ^ (f >>> 29 | h << 3) ^ h >>> 6, p += 65535 & (l = (f >>> 19 | h << 13) ^ (h >>> 29 | f << 3) ^ (f >>> 6 | h << 26)), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, e[L] = 65535 & g | y << 16, t[L] = 65535 & p | d << 16
                    }
                    u = v, p = 65535 & (l = S), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (l = n[0]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & p | d << 16, u = m, p = 65535 & (l = O), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (l = n[1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & p | d << 16, u = _, p = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (l = n[2]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[2] = _ = 65535 & g | y << 16, n[2] = x = 65535 & p | d << 16, u = b, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (l = n[3]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[3] = b = 65535 & g | y << 16, n[3] = R = 65535 & p | d << 16, u = w, p = 65535 & (l = C), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (l = n[4]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[4] = w = 65535 & g | y << 16, n[4] = C = 65535 & p | d << 16, u = E, p = 65535 & (l = A), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (l = n[5]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = A = 65535 & p | d << 16, u = I, p = 65535 & (l = j), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (l = n[6]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[6] = I = 65535 & g | y << 16, n[6] = j = 65535 & p | d << 16, u = P, p = 65535 & (l = T), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (l = n[7]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[7] = P = 65535 & g | y << 16, n[7] = T = 65535 & p | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        40926: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        88618: function(e, t, r) {
            "use strict";
            var i = r(34155);

            function n() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = s, t.isBrowser = function() {
                return !n() && !s()
            }
        },
        1468: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(34308);
            i.__exportStar(r(40926), t), i.__exportStar(r(88618), t)
        },
        34308: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        20882: function(e, t, r) {
            "use strict";
            r.d(t, {
                EthereumProvider: function() {
                    return i$
                },
                OPTIONAL_EVENTS: function() {
                    return ix
                },
                OPTIONAL_METHODS: function() {
                    return iS
                }
            });
            var i = r(17187),
                n = r.n(i),
                s = r(5015),
                o = r(85150),
                a = r(90772),
                c = r(9107),
                u = r(38200);
            class l extends u.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class h extends u.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class f {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class p extends u.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class d extends u.q {
                constructor(e) {
                    super()
                }
            }
            class g {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class y extends u.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class v extends u.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class m {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class _ {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class b {
                constructor(e) {
                    this.client = e
                }
            }
            let w = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                E = e => {
                    let t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (e, t) => {
                        let r = "string" == typeof t && t.match(/^\d+n$/);
                        return r ? BigInt(t.substring(0, t.length - 1)) : t
                    })
                };

            function I(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return E(e)
                } catch (t) {
                    return e
                }
            }

            function P(e) {
                return "string" == typeof e ? e : w(e) || ""
            }
            var S = r(31050),
                O = r(31416),
                x = r(66736);
            let R = "base64url",
                C = "base58btc";
            var A = r(20605),
                j = r(92263),
                T = r(52217);

            function N(e) {
                return (0, j.B)((0, T.m)(P(e), "utf8"), R)
            }

            function L(e) {
                let t = (0, T.m)("K36", C),
                    r = "z" + (0, j.B)((0, A.z)([t, e]), C);
                return ["did", "key", r].join(":")
            }

            function D(e = (0, O.randomBytes)(32)) {
                return S._w(e)
            }
            async function q(e, t, r, i, n = (0, x.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    u = L(i.publicKey),
                    l = {
                        iss: u,
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    h = (s = {
                        header: c,
                        payload: l
                    }, (0, T.m)([N(s.header), N(s.payload)].join("."), "utf8")),
                    f = S.Xx(i.secretKey, h);
                return [N((o = {
                    header: c,
                    payload: l,
                    signature: f
                }).header), N(o.payload), (a = o.signature, (0, j.B)(a, R))].join(".")
            }
            r(43014);
            var M = r(37466);
            let z = "INTERNAL_ERROR",
                k = "SERVER_ERROR",
                $ = [-32700, -32600, -32601, -32602, -32603],
                U = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [z]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [k]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function H(e) {
                return Object.keys(U).includes(e) ? U[e] : U[k]
            }

            function V(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
            }
            var B = r(1468);

            function F(e = 3) {
                let t = Date.now() * Math.pow(10, e);
                return t + Math.floor(Math.random() * Math.pow(10, e))
            }

            function K(e = 6) {
                return BigInt(F(e))
            }

            function G(e, t, r) {
                return {
                    id: r || F(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function Z(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function W(e, t, r) {
                var i, n;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? H(z) : ("string" == typeof i && (i = Object.assign(Object.assign({}, H(k)), {
                        message: i
                    })), void 0 !== r && (i.data = r), n = i.code, $.includes(n) && (i = function(e) {
                        let t = Object.values(U).find(t => t.code === e);
                        return t || U[k]
                    }(i.code)), i)
                }
            }
            class J {}
            class Q extends J {
                constructor() {
                    super()
                }
            }
            class Y extends Q {
                constructor(e) {
                    super()
                }
            }

            function X(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function ee(e) {
                return X(e, "^https?:")
            }

            function et(e) {
                return X(e, "^wss?:")
            }

            function er(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function ei(e) {
                return er(e) && "method" in e
            }

            function en(e) {
                return er(e) && (es(e) || eo(e))
            }

            function es(e) {
                return "result" in e
            }

            function eo(e) {
                return "error" in e
            }
            class ea extends Y {
                constructor(e) {
                    super(e), this.events = new i.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict(G(e.method, e.params || [], e.id || K().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            eo(e) ? i(e.error) : r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), en(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            let ec = () => "undefined" != typeof WebSocket || void 0 !== r.g && void 0 !== r.g.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket,
                eu = e => e.split("?")[0],
                el = "undefined" != typeof WebSocket ? WebSocket : void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : r(57026);
            class eh {
                constructor(e) {
                    if (this.url = e, this.events = new i.EventEmitter, this.registering = !1, !et(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return void 0 !== this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (void 0 === this.socket) {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e, t) {
                    void 0 === this.socket && (this.socket = await this.register());
                    try {
                        this.socket.send(P(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!et(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.socket) return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = (0, B.isReactNative)() ? void 0 : {
                                rejectUnauthorized: !RegExp("wss?://localhost(:d{2,5})?").test(e)
                            },
                            n = new el(e, [], i);
                        ec() ? n.onerror = e => {
                            r(this.emitError(e.error))
                        } : n.on("error", e => {
                            r(this.emitError(e))
                        }), n.onopen = () => {
                            this.onOpen(n), t(n)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? I(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = W(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return V(e, eu(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for host: ${eu(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var ef = r(72307),
                ep = r.n(ef),
                ed = r(34155),
                eg = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, f = s - 1;
                                    (0 !== l || h < n) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                n = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = s - n; p !== s && 0 === o[p];) p++;
                                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * l + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var h = t[n], f = 0, p = o - 1;
                                    (0 !== h || f < i) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = f, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let ey = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                ev = e => new TextEncoder().encode(e),
                em = e => new TextDecoder().decode(e);
            class e_ {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class eb {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return eE(this, e)
                }
            }
            class ew {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return eE(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let eE = (e, t) => new ew({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class eI {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new e_(e, t, r), this.decoder = new eb(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let eP = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new eI(e, t, r, i),
                eS = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = eg(r, t);
                    return eP({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => ey(n(e))
                    })
                },
                eO = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                ex = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                eR = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => eP({
                    prefix: t,
                    name: e,
                    encode: e => ex(e, i, r),
                    decode: t => eO(t, i, r, e)
                }),
                eC = eP({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => em(e),
                    decode: e => ev(e)
                });
            var eA = Object.freeze({
                __proto__: null,
                identity: eC
            });
            let ej = eR({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var eT = Object.freeze({
                __proto__: null,
                base2: ej
            });
            let eN = eR({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var eL = Object.freeze({
                __proto__: null,
                base8: eN
            });
            let eD = eS({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var eq = Object.freeze({
                __proto__: null,
                base10: eD
            });
            let eM = eR({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                ez = eR({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var ek = Object.freeze({
                __proto__: null,
                base16: eM,
                base16upper: ez
            });
            let e$ = eR({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                eU = eR({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                eH = eR({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                eV = eR({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                eB = eR({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                eF = eR({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                eK = eR({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                eG = eR({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                eZ = eR({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var eW = Object.freeze({
                __proto__: null,
                base32: e$,
                base32upper: eU,
                base32pad: eH,
                base32padupper: eV,
                base32hex: eB,
                base32hexupper: eF,
                base32hexpad: eK,
                base32hexpadupper: eG,
                base32z: eZ
            });
            let eJ = eS({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                eQ = eS({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var eY = Object.freeze({
                __proto__: null,
                base36: eJ,
                base36upper: eQ
            });
            let eX = eS({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                e0 = eS({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var e1 = Object.freeze({
                __proto__: null,
                base58btc: eX,
                base58flickr: e0
            });
            let e5 = eR({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                e6 = eR({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                e3 = eR({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                e2 = eR({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var e4 = Object.freeze({
                __proto__: null,
                base64: e5,
                base64pad: e6,
                base64url: e3,
                base64urlpad: e2
            });
            let e9 = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                e7 = e9.reduce((e, t, r) => (e[r] = t, e), []),
                e8 = e9.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                te = eP({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += e7[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = e8[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var tt = Object.freeze({
                    __proto__: null,
                    base256emoji: te
                }),
                tr = {
                    encode: function e(t, r, i) {
                        r = r || [], i = i || 0;
                        for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                        for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                        return r[i] = 0 | t, e.bytes = i - n + 1, r
                    },
                    decode: function e(t, r) {
                        var i, n = 0,
                            r = r || 0,
                            s = 0,
                            o = r,
                            a = t.length;
                        do {
                            if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                            i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                        } while (i >= 128);
                        return e.bytes = o - r, n
                    },
                    encodingLength: function(e) {
                        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                    }
                };
            let ti = (e, t, r = 0) => (tr.encode(e, t, r), t),
                tn = e => tr.encodingLength(e),
                ts = (e, t) => {
                    let r = t.byteLength,
                        i = tn(e),
                        n = i + tn(r),
                        s = new Uint8Array(n + r);
                    return ti(e, s, 0), ti(r, s, i), s.set(t, n), new to(e, r, t, s)
                };
            class to {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ta = ({
                name: e,
                code: t,
                encode: r
            }) => new tc(e, t, r);
            class tc {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? ts(this.code, t) : t.then(e => ts(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let tu = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                tl = ta({
                    name: "sha2-256",
                    code: 18,
                    encode: tu("SHA-256")
                }),
                th = ta({
                    name: "sha2-512",
                    code: 19,
                    encode: tu("SHA-512")
                });
            var tf = Object.freeze({
                    __proto__: null,
                    sha256: tl,
                    sha512: th
                }),
                tp = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: ey,
                        digest: e => ts(0, ey(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let td = { ...eA,
                ...eT,
                ...eL,
                ...eq,
                ...ek,
                ...eW,
                ...eY,
                ...e1,
                ...e4,
                ...tt
            };

            function tg(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function ty(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...tf,
                ...tp
            });
            let tv = ty("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                tm = ty("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? tg(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                t_ = {
                    utf8: tv,
                    "utf-8": tv,
                    hex: td.base16,
                    latin1: tm,
                    ascii: tm,
                    binary: tm,
                    ...td
                },
                tb = "core",
                tw = `wc@2:${tb}:`,
                tE = {
                    logger: "error"
                },
                tI = {
                    database: ":memory:"
                },
                tP = "client_ed25519_seed",
                tS = x.ONE_DAY,
                tO = x.SIX_HOURS,
                tx = "wss://relay.walletconnect.com",
                tR = "wss://relay.walletconnect.org",
                tC = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                tA = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                tj = x.ONE_SECOND,
                tT = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                tN = 1e3 * x.FIVE_SECONDS,
                tL = {
                    wc_pairingDelete: {
                        req: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: x.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: x.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                tD = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                tq = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                tM = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                tz = "verify-api",
                tk = "https://verify.walletconnect.com",
                t$ = "https://verify.walletconnect.org";
            class tU {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = tw, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, c.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, s.IP)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tH {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        let e = await this.getClientSeed(),
                            t = D(e);
                        return L(t.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, s.Au)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            r = D(t),
                            i = (0, s.jd)();
                        return await q(i, e, tS, r)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = (0, s.m$)(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, s.Ym)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, s.EN)(r),
                            n = P(t);
                        if ((0, s.Q8)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let o = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, s.HI)({
                            type: a,
                            symKey: o,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, s.Ll)(t, r);
                        if ((0, s.Q8)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, s.pe)({
                                    symKey: r,
                                    encoded: t
                                });
                            return I(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, s.vB)(e);
                        return (0, s.WG)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, s.vB)(e);
                        return t.senderPublicKey ? (0, M.BB)(t.senderPublicKey, s.AW) : void 0
                    }, this.core = e, this.logger = (0, c.generateChildLogger)(t, this.name), this.keychain = r || new tU(this.core, this.logger)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(tP)
                    } catch {
                        e = (0, s.jd)(), await this.keychain.set(tP, e)
                    }
                    return function(e, t = "utf8") {
                        let r = t_[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? tg(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tV extends f {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = tw, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, s.rj)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        let r = this.get(e),
                            i = (0, s.rj)(t);
                        return "u" > typeof r[i]
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, c.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, s.KC)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, s.IP)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class tB extends p {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new i.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, x.toMiliseconds)(x.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || tO,
                                o = (0, s._H)(r),
                                a = r ? .prompt || !1,
                                c = r ? .tag || 0,
                                u = r ? .id || K().toString(),
                                l = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: o,
                                        prompt: a,
                                        tag: c,
                                        id: u
                                    }
                                },
                                h = setTimeout(() => this.queue.set(u, l), this.publishTimeout);
                            try {
                                await await (0, s.hF)(this.rpcPublish(e, t, n, o, a, c, u), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(u), this.relayer.events.emit(tC.publish, l)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(u), e;
                                return
                            } finally {
                                clearTimeout(h)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, c.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, n, o, a) {
                    var c, u, l, h;
                    let f = {
                        method: (0, s.cO)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: o
                        },
                        id: a
                    };
                    return (0, s.o8)(null == (c = f.params) ? void 0 : c.prompt) && (null == (u = f.params) || delete u.prompt), (0, s.o8)(null == (l = f.params) ? void 0 : l.tag) && (null == (h = f.params) || delete h.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: f
                    }), this.relayer.request(f)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(tC.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(tC.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class tF {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var tK = Object.defineProperty,
                tG = Object.defineProperties,
                tZ = Object.getOwnPropertyDescriptors,
                tW = Object.getOwnPropertySymbols,
                tJ = Object.prototype.hasOwnProperty,
                tQ = Object.prototype.propertyIsEnumerable,
                tY = (e, t, r) => t in e ? tK(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tX = (e, t) => {
                    for (var r in t || (t = {})) tJ.call(t, r) && tY(e, r, t[r]);
                    if (tW)
                        for (var r of tW(t)) tQ.call(t, r) && tY(e, r, t[r]);
                    return e
                },
                t0 = (e, t) => tG(e, tZ(t));
            class t1 extends y {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new tF, this.events = new i.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tw, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, s._H)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new x.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= tN && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, c.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, s._H)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = (0, s.D6)("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, s.cO)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(tC.connection_stalled)
                    }
                    return (0, s.rj)(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, s.cO)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, s.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(tC.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, s.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, t0(tX({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, tX({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, tX({}, t)), this.topicMap.set(t.topic, e), this.events.emit(tT.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(tT.deleted, t0(tX({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(tT.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(tT.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, s.qt)(t) && this.onBatchSubscribe(t.map((t, r) => t0(tX({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(tC.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(tC.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(tT.created, async e => {
                        let t = tT.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(tT.deleted, async e => {
                        let t = tT.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var t5 = Object.defineProperty,
                t6 = Object.getOwnPropertySymbols,
                t3 = Object.prototype.hasOwnProperty,
                t2 = Object.prototype.propertyIsEnumerable,
                t4 = (e, t, r) => t in e ? t5(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                t9 = (e, t) => {
                    for (var r in t || (t = {})) t3.call(t, r) && t4(e, r, t[r]);
                    if (t6)
                        for (var r of t6(t)) t2.call(t, r) && t4(e, r, t[r]);
                    return e
                };
            class t7 extends d {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new i.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(tC.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(tC.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(tA.payload, this.onPayloadHandler), this.provider.on(tA.connect, this.onConnectHandler), this.provider.on(tA.disconnect, this.onDisconnectHandler), this.provider.on(tA.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, c.generateChildLogger)(e.logger, this.name) : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new tV(this.logger, e.core), this.subscriber = new t1(this, this.logger), this.publisher = new tB(this, this.logger), this.relayUrl = e ? .relayUrl || tx, this.projectId = e.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${tR}...`), await this.restartTransport(tR)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    let s = t => {
                        t.topic === e && (this.subscriber.off(tT.created, s), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(tT.created, s)
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, s.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(tT.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await (0, s.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(tA.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, s.Gg)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new ea(new eh((0, s.$0)({
                        sdkVersion: "2.10.2",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), ei(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(t9({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else en(e) && this.events.emit(tC.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(tC.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = Z(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(tA.payload, this.onPayloadHandler), this.provider.off(tA.connect, this.onConnectHandler), this.provider.off(tA.disconnect, this.onDisconnectHandler), this.provider.off(tA.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(tC.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await (0, s.Gg)();
                    (0, s.uw)(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(tC.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, x.toMiliseconds)(tj)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var t8 = Object.defineProperty,
                re = Object.getOwnPropertySymbols,
                rt = Object.prototype.hasOwnProperty,
                rr = Object.prototype.propertyIsEnumerable,
                ri = (e, t, r) => t in e ? t8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rn = (e, t) => {
                    for (var r in t || (t = {})) rt.call(t, r) && ri(e, r, t[r]);
                    if (re)
                        for (var r of re(t)) rr.call(t, r) && ri(e, r, t[r]);
                    return e
                };
            class rs extends g {
                constructor(e, t, r, i = tw, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, s.o8)(e) ? this.map.set(this.getKey(e), e) : (0, s.xW)(e) ? this.map.set(e.id, e) : (0, s.h1)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => ep()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = rn(rn({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, c.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ro {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(n()), this.initialized = !1, this.storagePrefix = tw, this.ignoredPayloadTypes = [s.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let e = (0, s.jd)(),
                            t = await this.core.crypto.setSymKey(e),
                            r = (0, s.gn)(x.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = (0, s.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: i
                            });
                        return await this.pairings.set(t, {
                            topic: t,
                            expiry: r,
                            relay: i,
                            active: !1
                        }), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: n
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = (0, s.he)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        }));
                        let n = (0, s.gn)(x.FIVE_MINUTES),
                            o = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, o), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(tD.create, o), o
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = (0, s.gn)(x.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, s.D6)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = G(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = tL[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = Z(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = tL[s.request.method].res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = W(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = tL[s.request.method] ? tL[s.request.method].res : tL.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, s.Bw)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(tD.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            es(t) ? this.events.emit((0, s.E0)("pairing_ping", r), {}) : eo(t) && this.events.emit((0, s.E0)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(tD.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, s.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, s.D6)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (!(0, s.jv)(e.uri)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, s.M_)(e, !1)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if ((0, s.Bw)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, s.Z7)("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, c.generateChildLogger)(t, this.name), this.pairings = new rs(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(tC.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            ei(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : en(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(tM.expired, async e => {
                        let {
                            topic: t
                        } = (0, s.iP)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(tD.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class ra extends h {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new i.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, s.gn)(x.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(tq.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = eo(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(tq.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(tq.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, c.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: G(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(tq.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(tq.created, e => {
                        let t = tq.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tq.updated, e => {
                        let t = tq.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tq.deleted, e => {
                        let t = tq.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, x.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rc extends v {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new i.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tw, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(tM.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(tM.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, c.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, s.Z4)(e);
                    if ("number" == typeof e) return (0, s.Gq)(e);
                    let {
                        message: t
                    } = (0, s.Z7)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(tM.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, x.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(tM.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(tM.created, e => {
                        let t = tM.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(tM.expired, e => {
                        let t = tM.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(tM.deleted, e => {
                        let t = tM.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ru extends m {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = tz, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
                        if (!(this.verifyDisabled || (0, s.b$)()) && (0, s.jU)()) {
                            this.verifyUrl !== tk && this.removeIframe(), this.verifyUrl = tk;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                            }
                            if (!this.initialized) {
                                this.removeIframe(), this.verifyUrl = t$;
                                try {
                                    await this.createIframe()
                                } catch (e) {
                                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                                }
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = e ? .verifyUrl || tk;
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, t$)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * x.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(tz)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = tz, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, x.toMiliseconds)(x.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.logger = (0, c.generateChildLogger)(t, this.name), this.verifyUrl = tk, this.abortController = new AbortController, this.isDevEnv = (0, s.UG)() && ed.env.IS_VITEST
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, x.toMiliseconds)(e))
                }
            }
            var rl = Object.defineProperty,
                rh = Object.getOwnPropertySymbols,
                rf = Object.prototype.hasOwnProperty,
                rp = Object.prototype.propertyIsEnumerable,
                rd = (e, t, r) => t in e ? rl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rg = (e, t) => {
                    for (var r in t || (t = {})) rf.call(t, r) && rd(e, r, t[r]);
                    if (rh)
                        for (var r of rh(t)) rp.call(t, r) && rd(e, r, t[r]);
                    return e
                };
            class ry extends l {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = tb, this.events = new i.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || tx, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: e ? .logger || tE.logger
                    }));
                    this.logger = (0, c.generateChildLogger)(t, this.name), this.heartbeat = new a.HeartBeat, this.crypto = new tH(this, this.logger, e ? .keychain), this.history = new ra(this, this.logger), this.expirer = new rc(this, this.logger), this.storage = null != e && e.storage ? e.storage : new o.ZP(rg(rg({}, tI), e ? .storageOptions)), this.relayer = new t7({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new ro(this, this.logger), this.verify = new ru(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new ry(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let rv = "client",
                rm = `wc@2:${rv}:`,
                r_ = {
                    name: rv,
                    logger: "error"
                },
                rb = "WALLETCONNECT_DEEPLINK_CHOICE",
                rw = "Proposal expired",
                rE = x.SEVEN_DAYS,
                rI = {
                    wc_sessionPropose: {
                        req: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: x.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: x.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: x.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: x.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                rP = {
                    min: x.FIVE_MINUTES,
                    max: x.SEVEN_DAYS
                },
                rS = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                rO = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var rx = Object.defineProperty,
                rR = Object.defineProperties,
                rC = Object.getOwnPropertyDescriptors,
                rA = Object.getOwnPropertySymbols,
                rj = Object.prototype.hasOwnProperty,
                rT = Object.prototype.propertyIsEnumerable,
                rN = (e, t, r) => t in e ? rx(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rL = (e, t) => {
                    for (var r in t || (t = {})) rj.call(t, r) && rN(e, r, t[r]);
                    if (rA)
                        for (var r of rA(t)) rT.call(t, r) && rN(e, r, t[r]);
                    return e
                },
                rD = (e, t) => rR(e, rC(t));
            class rq extends b {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(n()), this.initialized = !1, this.ignoredPayloadTypes = [s.rV], this.requestQueue = {
                        state: rS.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: rS.idle,
                        queue: []
                    }, this.requestQueueDelay = x.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(rI)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, x.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = rD(rL({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: o,
                            relays: a
                        } = t, c = r, u, l = !1;
                        if (c && (l = this.client.core.pairing.pairings.get(c).active), !c || !l) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, u = t
                        }
                        let h = await this.client.core.crypto.generateKeyPair(),
                            f = rL({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: h,
                                    metadata: this.client.metadata
                                }
                            }, o && {
                                sessionProperties: o
                            }),
                            {
                                reject: p,
                                resolve: d,
                                done: g
                            } = (0, s.H1)(x.FIVE_MINUTES, rw);
                        if (this.events.once((0, s.E0)("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) p(e);
                                else if (t) {
                                    t.self.publicKey = h;
                                    let e = rD(rL({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: t.peer.metadata
                                    }), d(e)
                                }
                            }), !c) {
                            let {
                                message: e
                            } = (0, s.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw Error(e)
                        }
                        let y = await this.sendRequest({
                                topic: c,
                                method: "wc_sessionPropose",
                                params: f
                            }),
                            v = (0, s.gn)(x.FIVE_MINUTES);
                        return await this.setProposal(y, rL({
                            id: y,
                            expiry: v
                        }, f)), {
                            uri: u,
                            approval: g
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, o = this.client.proposal.get(t), {
                            pairingTopic: a,
                            proposer: c,
                            requiredNamespaces: u,
                            optionalNamespaces: l
                        } = o;
                        a = a || "", (0, s.L5)(u) || (u = (0, s.fc)(i, "approve()"));
                        let h = await this.client.core.crypto.generateKeyPair(),
                            f = c.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(h, f);
                        a && t && (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: c.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: a,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: h
                            }
                        }), await this.client.proposal.delete(t, (0, s.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: a
                        }));
                        let d = rL({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: u,
                            optionalNamespaces: l,
                            pairingTopic: a,
                            controller: {
                                publicKey: h,
                                metadata: this.client.metadata
                            },
                            expiry: (0, s.gn)(rE)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(p), await this.sendRequest({
                            topic: p,
                            method: "wc_sessionSettle",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        let g = rD(rL({}, d), {
                            topic: p,
                            pairingTopic: a,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: c.publicKey,
                                metadata: c.metadata
                            },
                            controller: h
                        });
                        return await this.client.session.set(p, g), await this.setExpiry(p, (0, s.gn)(rE)), {
                            topic: p,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(p)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, (0, s.D6)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: o,
                            reject: a
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_update", i), ({
                            error: e
                        }) => {
                            e ? a(e) : o()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: o
                        } = (0, s.H1)();
                        return this.events.once((0, s.E0)("session_extend", r), ({
                            error: e
                        }) => {
                            e ? o(e) : n()
                        }), await this.setExpiry(t, (0, s.gn)(rE)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, o = F(), {
                            done: a,
                            resolve: c,
                            reject: u
                        } = (0, s.H1)(n, "Request expired. Please try again.");
                        return this.events.once((0, s.E0)("session_request", o), ({
                            error: e,
                            result: t
                        }) => {
                            e ? u(e) : c(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: o,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => u(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: o
                            }), e()
                        }), new Promise(async e => {
                            let t = await this.client.core.storage.getItem(rb);
                            (0, s.Hh)({
                                id: o,
                                topic: i,
                                wcDeepLink: t
                            }), e()
                        }), a()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        es(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : eo(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, s.H1)();
                            this.events.once((0, s.E0)("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, s.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, s.Ih)(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, (0, s.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(rb).catch(e => this.client.logger.warn(e))
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, s.D6)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = rS.idle)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = rI.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: o
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: o
                        }), t && this.client.core.expirer.set(r, (0, s.gn)(t))
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: o,
                            clientRpcId: a,
                            throwOnFailedPublish: c
                        } = e, u = G(r, i, a);
                        if ((0, s.jU)() && rO.includes(r)) {
                            let e = (0, s.rj)(JSON.stringify(u));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let l = await this.client.core.crypto.encode(t, u),
                            h = rI[r].req;
                        return n && (h.ttl = n), o && (h.id = o), this.client.core.history.set(t, u), c ? (h.internal = rD(rL({}, h.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, l, h)) : this.client.core.relayer.publish(t, l, h).catch(e => this.client.logger.error(e)), u.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = e, s = Z(t, i), o = await this.client.core.crypto.encode(r, s), a = await this.client.core.history.get(r, t), c = rI[a.request.method].res;
                        n ? (c.internal = rD(rL({}, c.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, c)) : this.client.core.relayer.publish(r, o, c).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        let i = W(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = await this.client.core.history.get(t, e),
                            o = rI[s.request.method].res;
                        this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            (0, s.Bw)(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, s.Bw)(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === rS.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = rS.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = rS.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, s.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(rL({}, t.params));
                            let n = (0, s.gn)(x.FIVE_MINUTES),
                                o = rL({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, o);
                            let a = (0, s.rj)(JSON.stringify(t)),
                                c = await this.getVerifyContext(a, o.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: o,
                                verifyContext: c
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if (es(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else eo(t) && (await this.client.proposal.delete(r, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: o,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: u,
                                sessionProperties: l,
                                pairingTopic: h
                            } = t.params, f = rL({
                                topic: e,
                                relay: r,
                                expiry: o,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: h,
                                requiredNamespaces: c,
                                optionalNamespaces: u,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, l && {
                                sessionProperties: l
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit((0, s.E0)("session_connect"), {
                                session: f
                            }), this.cleanupDuplicatePairings(f)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        es(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, s.E0)("session_approve", r), {})) : eo(t) && (await this.client.session.delete(e, (0, s.D6)("USER_DISCONNECTED")), this.events.emit((0, s.E0)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = s.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`);
                                return
                            }
                            this.isValidUpdate(rL({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), s.O6.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        es(t) ? this.events.emit((0, s.E0)("session_update", r), {}) : eo(t) && this.events.emit((0, s.E0)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, s.gn)(rE)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        es(t) ? this.events.emit((0, s.E0)("session_extend", r), {}) : eo(t) && this.events.emit((0, s.E0)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            es(t) ? this.events.emit((0, s.E0)("session_ping", r), {}) : eo(t) && this.events.emit((0, s.E0)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(tC.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(rL({
                                topic: e
                            }, i));
                            let t = (0, s.rj)(JSON.stringify(G("wc_sessionRequest", i, r))),
                                n = this.client.session.get(e),
                                o = await this.getVerifyContext(t, n.peer.metadata),
                                a = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: o
                                };
                            await this.setPendingSessionRequest(a), this.addSessionRequestToSessionRequestQueue(a), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        es(t) ? this.events.emit((0, s.E0)("session_request", r), {
                            result: t.result
                        }) : eo(t) && this.events.emit((0, s.E0)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = s.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(rL({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), s.O6.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = rS.idle, this.processSessionRequestQueue()
                        }, (0, x.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === rS.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = rS.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, G("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: o
                        } = e;
                        if ((0, s.o8)(t) || await this.isValidPairingTopic(t), !(0, s.PM)(o, !0)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw Error(e)
                        }(0, s.o8)(r) || 0 === (0, s.L5)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, s.o8)(i) || 0 === (0, s.L5)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, s.n)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, s.EJ)(e)) throw Error((0, s.Z7)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let o = this.client.proposal.get(t),
                            a = (0, s.in)(r, "approve()");
                        if (a) throw Error(a.message);
                        let c = (0, s.rF)(o.requiredNamespaces, r, "approve()");
                        if (c) throw Error(c.message);
                        if (!(0, s.M_)(i, !0)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }(0, s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !(0, s.$t)(r)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = e;
                        if (!(0, s.Z2)(t)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let o = (0, s.Dd)(r, "onSessionSettleRequest()");
                        if (o) throw Error(o.message);
                        let a = (0, s.in)(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if ((0, s.Bw)(n)) {
                            let {
                                message: e
                            } = (0, s.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = (0, s.in)(r, "update()");
                        if (n) throw Error(n.message);
                        let o = (0, s.rF)(i.requiredNamespaces, r, "update()");
                        if (o) throw Error(o.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: o
                        } = this.client.session.get(t);
                        if (!(0, s.p8)(o, i)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, s.hH)(r)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, s.al)(o, i, r.method)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(e)
                        }
                        if (n && !(0, s.ON)(n, rP)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${rP.min} and ${rP.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), !(0, s.JT)(r)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, s.p8)(n, i)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, s.nf)(r)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, s.sI)(n, i, r.name)) {
                            let {
                                message: e
                            } = (0, s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, s.EJ)(e)) {
                            let {
                                message: t
                            } = (0, s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || tk,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, s.M_)(e, !1)) {
                                let {
                                    message: r
                                } = (0, s.Z7)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, s.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(tC.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            ei(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : en(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(tM.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, s.iP)(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, s.Z7)("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(tD.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!(0, s.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, s.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, s.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, s.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, s.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, s.Bw)(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = (0, s.Z7)("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, s.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, s.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, s.Q0)(e)) {
                        let {
                            message: t
                        } = (0, s.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, s.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, s.Bw)(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, s.Z7)("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class rM extends rs {
                constructor(e, t) {
                    super(e, t, "proposal", rm), this.core = e, this.logger = t
                }
            }
            class rz extends rs {
                constructor(e, t) {
                    super(e, t, "session", rm), this.core = e, this.logger = t
                }
            }
            class rk extends rs {
                constructor(e, t) {
                    super(e, t, "request", rm, e => e.id), this.core = e, this.logger = t
                }
            }
            class r$ extends _ {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = r_.name, this.events = new i.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || r_.name, this.metadata = e ? .metadata || (0, s.D)();
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: e ? .logger || r_.logger
                    }));
                    this.core = e ? .core || new ry(e), this.logger = (0, c.generateChildLogger)(t, this.name), this.session = new rz(this.core, this.logger), this.proposal = new rM(this.core, this.logger), this.pendingRequest = new rk(this.core, this.logger), this.engine = new rq(this)
                }
                static async init(e) {
                    let t = new r$(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, c.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var rU = r(54098),
                rH = r.n(rU);
            let rV = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class rB {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new i.EventEmitter, this.isAvailable = !1, this.registering = !1, !ee(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = P(e),
                            r = await rH()(this.url, Object.assign(Object.assign({}, rV), {
                                body: t
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!ee(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = P({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await rH()(e, Object.assign(Object.assign({}, rV), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? I(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = W(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return V(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            let rF = "error",
                rK = "wc@2:universal_provider:",
                rG = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var rZ = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                rW = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        l = "[object Array]",
                        h = "[object Boolean]",
                        f = "[object Date]",
                        p = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        _ = "[object Promise]",
                        b = "[object RegExp]",
                        w = "[object Set]",
                        E = "[object String]",
                        I = "[object Symbol]",
                        P = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        x = "[object Float32Array]",
                        R = "[object Float64Array]",
                        C = "[object Int8Array]",
                        A = "[object Int16Array]",
                        j = "[object Int32Array]",
                        T = "[object Uint8Array]",
                        N = "[object Uint8ClampedArray]",
                        L = "[object Uint16Array]",
                        D = "[object Uint32Array]",
                        q = /\b__p \+= '';/g,
                        M = /\b(__p \+=) '' \+/g,
                        z = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        k = /&(?:amp|lt|gt|quot|#39);/g,
                        $ = /[&<>"']/g,
                        U = RegExp(k.source),
                        H = RegExp($.source),
                        V = /<%-([\s\S]+?)%>/g,
                        B = /<%([\s\S]+?)%>/g,
                        F = /<%=([\s\S]+?)%>/g,
                        K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        G = /^\w*$/,
                        Z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        W = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(W.source),
                        Q = /^\s+/,
                        Y = /\s/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ep = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        eb = "\\ufe0e\\ufe0f",
                        ew = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eI = "[" + ew + "]",
                        eP = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eO = "[^" + eg + ew + "\\d+" + ev + em + e_ + "]",
                        ex = "\ud83c[\udffb-\udfff]",
                        eR = "[^" + eg + "]",
                        eC = "(?:\ud83c[\udde6-\uddff]){2}",
                        eA = "[\ud800-\udbff][\udc00-\udfff]",
                        ej = "[" + e_ + "]",
                        eT = "\\u200d",
                        eN = "(?:" + eS + "|" + eO + ")",
                        eL = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        eD = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eq = "(?:" + eP + "|" + ex + ")?",
                        eM = "[" + eb + "]?",
                        ez = "(?:" + eT + "(?:" + [eR, eC, eA].join("|") + ")" + eM + eq + ")*",
                        ek = eM + eq + ez,
                        e$ = "(?:" + ["[" + ev + "]", eC, eA].join("|") + ")" + ek,
                        eU = "(?:" + [eR + eP + "?", eP, eC, eA, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eV = RegExp(eP, "g"),
                        eB = RegExp(ex + "(?=" + ex + ")|" + eU + ek, "g"),
                        eF = RegExp([ej + "?" + eS + "+" + eL + "(?=" + [eI, ej, "$"].join("|") + ")", "(?:" + ej + "|" + eO + ")+" + eD + "(?=" + [eI, ej + eN, "$"].join("|") + ")", ej + "?" + eN + "+" + eL, ej + "+" + eD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"),
                        eK = RegExp("[" + eT + eg + ey + eb + "]"),
                        eG = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eZ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eW = -1,
                        eJ = {};
                    eJ[x] = eJ[R] = eJ[C] = eJ[A] = eJ[j] = eJ[T] = eJ[N] = eJ[L] = eJ[D] = !0, eJ[u] = eJ[l] = eJ[S] = eJ[h] = eJ[O] = eJ[f] = eJ[p] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[b] = eJ[w] = eJ[E] = eJ[P] = !1;
                    var eQ = {};
                    eQ[u] = eQ[l] = eQ[S] = eQ[O] = eQ[h] = eQ[f] = eQ[x] = eQ[R] = eQ[C] = eQ[A] = eQ[j] = eQ[y] = eQ[v] = eQ[m] = eQ[b] = eQ[w] = eQ[E] = eQ[I] = eQ[T] = eQ[N] = eQ[L] = eQ[D] = !0, eQ[p] = eQ[d] = eQ[P] = !1;
                    var eY = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eX = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof rZ && rZ && rZ.Object === Object && rZ,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e6 = e1 || e5 || Function("return this")(),
                        e3 = t && !t.nodeType && t,
                        e2 = e3 && e && !e.nodeType && e,
                        e4 = e2 && e2.exports === e3,
                        e9 = e4 && e1.process,
                        e7 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e9 && e9.binding && e9.binding("util")
                            } catch {}
                        }(),
                        e8 = e7 && e7.isArrayBuffer,
                        te = e7 && e7.isDate,
                        tt = e7 && e7.isMap,
                        tr = e7 && e7.isRegExp,
                        ti = e7 && e7.isSet,
                        tn = e7 && e7.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tl(e, t) {
                        return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1
                    }

                    function th(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tf(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tp(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tP("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function t_(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tb(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : t_(e, tE, r)
                    }

                    function tw(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tI(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tx(e, t) / r : a
                    }

                    function tP(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tS(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tO(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tx(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tR(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tC(e) {
                        return e && e.slice(0, tF(e) + 1).replace(Q, "")
                    }

                    function tA(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tj(e, t) {
                        return tf(t, function(t) {
                            return e[t]
                        })
                    }

                    function tT(e, t) {
                        return e.has(t)
                    }

                    function tN(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tb(t, e[r], 0) > -1;);
                        return r
                    }

                    function tL(e, t) {
                        for (var r = e.length; r-- && tb(t, e[r], 0) > -1;);
                        return r
                    }
                    var tD = tS({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tq = tS({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eY[e]
                    }

                    function tz(e) {
                        return eK.test(e)
                    }

                    function tk(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function t$(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tU(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tV(e) {
                        return tz(e) ? function(e) {
                            for (var t = eB.lastIndex = 0; eB.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tB(e) {
                        return tz(e) ? e.match(eB) || [] : e.split("")
                    }

                    function tF(e) {
                        for (var t = e.length; t-- && Y.test(e.charAt(t)););
                        return t
                    }
                    var tK = tS({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tG = function e(t) {
                            var Y, eg, ey, ev, em = (t = null == t ? e6 : tG.defaults(e6.Object(), t, tG.pick(e6, eZ))).Array,
                                e_ = t.Date,
                                eb = t.Error,
                                ew = t.Function,
                                eE = t.Math,
                                eI = t.Object,
                                eP = t.RegExp,
                                eS = t.String,
                                eO = t.TypeError,
                                ex = em.prototype,
                                eR = ew.prototype,
                                eC = eI.prototype,
                                eA = t["__core-js_shared__"],
                                ej = eR.toString,
                                eT = eC.hasOwnProperty,
                                eN = 0,
                                eL = (Y = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Y : "",
                                eD = eC.toString,
                                eq = ej.call(eI),
                                eM = e6._,
                                ez = eP("^" + ej.call(eT).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ek = e4 ? t.Buffer : r,
                                e$ = t.Symbol,
                                eU = t.Uint8Array,
                                eB = ek ? ek.allocUnsafe : r,
                                eK = t$(eI.getPrototypeOf, eI),
                                eY = eI.create,
                                e1 = eC.propertyIsEnumerable,
                                e5 = ex.splice,
                                e3 = e$ ? e$.isConcatSpreadable : r,
                                e2 = e$ ? e$.iterator : r,
                                e9 = e$ ? e$.toStringTag : r,
                                e7 = function() {
                                    try {
                                        var e = nd(eI, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                                tS = e_ && e_.now !== e6.Date.now && e_.now,
                                tZ = t.setTimeout !== e6.setTimeout && t.setTimeout,
                                tW = eE.ceil,
                                tJ = eE.floor,
                                tQ = eI.getOwnPropertySymbols,
                                tY = ek ? ek.isBuffer : r,
                                tX = t.isFinite,
                                t0 = ex.join,
                                t1 = t$(eI.keys, eI),
                                t5 = eE.max,
                                t6 = eE.min,
                                t3 = e_.now,
                                t2 = t.parseInt,
                                t4 = eE.random,
                                t9 = ex.reverse,
                                t7 = nd(t, "DataView"),
                                t8 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eI, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nk(t7),
                                ra = nk(t8),
                                rc = nk(re),
                                ru = nk(rt),
                                rl = nk(rr),
                                rh = e$ ? e$.prototype : r,
                                rf = rh ? rh.valueOf : r,
                                rp = rh ? rh.toString : r;

                            function rd(e) {
                                if (sK(e) && !sD(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (eT.call(e, "__wrapped__")) return n$(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sF(t)) return {};
                                    if (eY) return eY(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rw; ++t < r;) this.add(e[t])
                            }

                            function rI(e) {
                                var t = this.__data__ = new rb(e);
                                this.size = t.size
                            }

                            function rP(e, t) {
                                var r = sD(e),
                                    i = !r && sL(e),
                                    n = !r && !i && sk(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tR(e.length, eS) : [],
                                    c = a.length;
                                for (var u in e)(t || eT.call(e, u)) && !(o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || nw(u, c))) && a.push(u);
                                return a
                            }

                            function rS(e) {
                                var t = e.length;
                                return t ? e[il(0, t - 1)] : r
                            }

                            function rO(e, t, i) {
                                (i === r || sj(e[t], i)) && (i !== r || t in e) || rj(e, t, i)
                            }

                            function rx(e, t, i) {
                                var n = e[t];
                                eT.call(e, t) && sj(n, i) && (i !== r || t in e) || rj(e, t, i)
                            }

                            function rR(e, t) {
                                for (var r = e.length; r--;)
                                    if (sj(e[r][0], t)) return r;
                                return -1
                            }

                            function rC(e, t, r, i) {
                                return rz(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rA(e, t) {
                                return e && iV(t, of (t), e)
                            }

                            function rj(e, t, r) {
                                "__proto__" == t && e7 ? e7(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rT(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rN(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rL(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t,
                                    p = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sF(e)) return e;
                                var _ = sD(e);
                                if (_) {
                                    if (P = e.length, q = new e.constructor(P), P && "string" == typeof e[0] && eT.call(e, "index") && (q.index = e.index, q.input = e.input), a = q, !c) return iH(e, a)
                                } else {
                                    var P, q, M, z, k, $ = nv(e),
                                        U = $ == d || $ == g;
                                    if (sk(e)) return iq(e, c);
                                    if ($ == m || $ == u || U && !s) {
                                        if (a = l || U ? {} : n_(e), !c) return l ? (M = (k = a) && iV(e, op(e), k), iV(e, ny(e), M)) : (z = rA(a, e), iV(e, ng(e), z))
                                    } else {
                                        if (!eQ[$]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iM(e);
                                                case h:
                                                case f:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iM(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case x:
                                                case R:
                                                case C:
                                                case A:
                                                case j:
                                                case T:
                                                case N:
                                                case L:
                                                case D:
                                                    return iz(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case b:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case w:
                                                    return new s;
                                                case I:
                                                    return rf ? eI(rf.call(e)) : {}
                                            }
                                        }(e, $, c)
                                    }
                                }
                                o || (o = new rI);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sQ(e) ? e.forEach(function(r) {
                                    a.add(rL(r, t, i, r, e, o))
                                }) : sG(e) && e.forEach(function(r, n) {
                                    a.set(n, rL(r, t, i, n, e, o))
                                });
                                var V = p ? l ? na : no : l ? op : of ,
                                    B = _ ? r : V(e);
                                return ta(B || e, function(r, n) {
                                    B && (r = e[n = r]), rx(a, n, rL(r, t, i, n, e, o))
                                }), a
                            }

                            function rD(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eI(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rq(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nT(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rM(e, t, r, i) {
                                var n = -1,
                                    s = tl,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tf(t, tA(r))), i ? (s = th, o = !1) : t.length >= 200 && (s = tT, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var l = e[n],
                                        h = null == r ? l : r(l);
                                    if (l = i || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = u; f--;)
                                            if (t[f] === h) continue e;
                                        c.push(l)
                                    } else s(t, h, i) || c.push(l)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: V,
                                evaluate: B,
                                interpolate: F,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, r_.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, r_.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, r_.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return eT.call(t, e) ? t[e] : r
                            }, r_.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : eT.call(t, e)
                            }, r_.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rb.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rR(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rR(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rb.prototype.has = function(e) {
                                return rR(this.__data__, e) > -1
                            }, rb.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rR(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, rw.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new r_,
                                    map: new(t8 || rb),
                                    string: new r_
                                }
                            }, rw.prototype.delete = function(e) {
                                var t = nf(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rw.prototype.get = function(e) {
                                return nf(this, e).get(e)
                            }, rw.prototype.has = function(e) {
                                return nf(this, e).has(e)
                            }, rw.prototype.set = function(e, t) {
                                var r = nf(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.clear = function() {
                                this.__data__ = new rb, this.size = 0
                            }, rI.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rI.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rI.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rb) {
                                    var i = r.__data__;
                                    if (!t8 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rw(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rz = iK(rK),
                                rk = iK(rG, !0);

                            function r$(e, t) {
                                var r = !0;
                                return rz(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function rU(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sX(a) : i(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rH(e, t) {
                                var r = [];
                                return rz(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rV(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nb), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rV(a, t - 1, r, i, n) : tp(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rB = iG(),
                                rF = iG(!0);

                            function rK(e, t) {
                                return e && rB(e, t, of )
                            }

                            function rG(e, t) {
                                return e && rF(e, t, of )
                            }

                            function rZ(e, t) {
                                return tu(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rW(e, t) {
                                t = iN(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nz(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rJ(e, t, r) {
                                var i = t(e);
                                return sD(e) ? i : tp(i, r(e))
                            }

                            function rQ(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e9 && e9 in eI(e) ? function(e) {
                                    var t = eT.call(e, e9),
                                        i = e[e9];
                                    try {
                                        e[e9] = r;
                                        var n = !0
                                    } catch {}
                                    var s = eD.call(e);
                                    return n && (t ? e[e9] = i : delete e[e9]), s
                                }(e) : eD.call(e)
                            }

                            function rY(e, t) {
                                return e > t
                            }

                            function rX(e, t) {
                                return null != e && eT.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eI(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? th : tl, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, l = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tf(h, tA(t))), u = t6(h.length, u), c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rE(a && h) : r
                                }
                                h = e[0];
                                var f = -1,
                                    p = c[0];
                                e: for (; ++f < s && l.length < u;) {
                                    var d = h[f],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(p ? tT(p, g) : n(l, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tT(y, g) : n(e[a], g, i))) continue e
                                        }
                                        p && p.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r5(e, t, i) {
                                t = iN(t, e);
                                var n = null == (e = nC(e, t)) ? e : e[nz(nQ(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r6(e) {
                                return sK(e) && rQ(e) == u
                            }

                            function r3(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sK(e) || sK(t)) ? function(e, t, i, n, s, o) {
                                    var a = sD(e),
                                        c = sD(t),
                                        d = a ? l : nv(e),
                                        g = c ? l : nv(t);
                                    d = d == u ? m : d, g = g == u ? m : g;
                                    var _ = d == m,
                                        P = g == m,
                                        x = d == g;
                                    if (x && sk(e)) {
                                        if (!sk(t)) return !1;
                                        a = !0, _ = !1
                                    }
                                    if (x && !_) return o || (o = new rI), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new eU(e), new eU(t)));
                                            case h:
                                            case f:
                                            case v:
                                                return sj(+e, +t);
                                            case p:
                                                return e.name == t.name && e.message == t.message;
                                            case b:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = tk;
                                            case w:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                i |= 2, o.set(e, t);
                                                var l = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), l;
                                            case I:
                                                if (rf) return rf.call(e) == rf.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var R = _ && eT.call(e, "__wrapped__"),
                                            C = P && eT.call(t, "__wrapped__");
                                        if (R || C) {
                                            var A = R ? e.value() : e,
                                                j = C ? t.value() : t;
                                            return o || (o = new rI), s(A, j, i, n, o)
                                        }
                                    }
                                    return !!x && (o || (o = new rI), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            u = c.length;
                                        if (u != no(t).length && !a) return !1;
                                        for (var l = u; l--;) {
                                            var h = c[l];
                                            if (!(a ? h in t : eT.call(t, h))) return !1
                                        }
                                        var f = o.get(e),
                                            p = o.get(t);
                                        if (f && p) return f == t && p == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < u;) {
                                            var y = e[h = c[l]],
                                                v = t[h];
                                            if (n) var m = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var _ = e.constructor,
                                                b = t.constructor;
                                            _ != b && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r3, s) : e != e && t != t)
                            }

                            function r2(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eI(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = i[s])[0],
                                        l = e[u],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(u in e)) return !1
                                    } else {
                                        var f = new rI;
                                        if (n) var p = n(l, h, u, e, t, f);
                                        if (!(p === r ? r3(h, l, 3, n, f) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function r4(e) {
                                return !(!sF(e) || eL && eL in e) && (sH(e) ? ez : eu).test(nk(e))
                            }

                            function r9(e) {
                                return "function" == typeof e ? e : null == e ? oz : "object" == typeof e ? sD(e) ? ir(e[0], e[1]) : it(e) : oG(e)
                            }

                            function r7(e) {
                                if (!nO(e)) return t1(e);
                                var t = [];
                                for (var r in eI(e)) eT.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r8(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sM(e) ? em(e.length) : [];
                                return rz(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = np(e);
                                return 1 == t.length && t[0][2] ? nx(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r2(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nI(e) && (i = t) == i && !sF(i) ? nx(nz(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r3(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rB(t, function(o, a) {
                                    if (s || (s = new rI), sF(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nA(e, i),
                                            u = nA(t, i),
                                            l = a.get(u);
                                        if (l) {
                                            rO(e, i, l);
                                            return
                                        }
                                        var h = o ? o(c, u, i + "", e, t, a) : r,
                                            f = h === r;
                                        if (f) {
                                            var p = sD(u),
                                                d = !p && sk(u),
                                                g = !p && !d && s0(u);
                                            h = u, p || d || g ? sD(c) ? h = c : sz(c) ? h = iH(c) : d ? (f = !1, h = iq(u, !0)) : g ? (f = !1, h = iz(u, !0)) : h = [] : sW(u) || sL(u) ? (h = c, sL(c) ? h = s7(c) : (!sF(c) || sH(c)) && (h = n_(u))) : f = !1
                                        }
                                        f && (a.set(u, h), s(h, u, n, o, a), a.delete(u)), rO(e, i, h)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nA(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rO(e, a, c)
                                    }
                                }, op)
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return nw(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tf(t, function(e) {
                                    return sD(e) ? function(t) {
                                        return rW(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oz];
                                var i = -1;
                                return t = tf(t, tA(nh())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tf(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = ik(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rW(e, o);
                                    r(a, o) && id(s, iN(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? tw : tb,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tf(e, tA(r))); ++s < o;)
                                    for (var c = 0, u = t[s], l = r ? r(u) : u;
                                        (c = n(a, l, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function iu(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        nw(n) ? e5.call(e, n, 1) : iS(e, n)
                                    }
                                }
                                return e
                            }

                            function il(e, t) {
                                return e + tJ(t4() * (t - e + 1))
                            }

                            function ih(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nN(nR(e, t, oz), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sF(e)) return e;
                                t = iN(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = nz(t[s]),
                                        l = i;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var h = c[u];
                                        (l = n ? n(h, u, c) : r) === r && (l = sF(h) ? h : nw(t[s + 1]) ? [] : {})
                                    }
                                    rx(c, u, l), c = c[u]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oz,
                                iy = e7 ? function(e, t) {
                                    return e7(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oD(t),
                                        writable: !0
                                    })
                                } : oz;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rz(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function i_(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sX(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return ib(e, t, oz, r)
                            }

                            function ib(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, u = sX(t), l = t === r; s < o;) {
                                    var h = tJ((s + o) / 2),
                                        f = i(e[h]),
                                        p = f !== r,
                                        d = null === f,
                                        g = f == f,
                                        y = sX(f);
                                    if (a) var v = n || g;
                                    else v = l ? g && (n || p) : c ? g && p && (n || !d) : u ? g && p && !d && (n || !y) : !d && !y && (n ? f <= t : f < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t6(o, 4294967294)
                            }

                            function iw(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sj(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sX(e) ? a : +e
                            }

                            function iI(e) {
                                if ("string" == typeof e) return e;
                                if (sD(e)) return tf(e, iI) + "";
                                if (sX(e)) return rp ? rp.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iP(e, t, r) {
                                var i = -1,
                                    n = tl,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = th;
                                else if (s >= 200) {
                                    var u = t ? null : i7(e);
                                    if (u) return tH(u);
                                    o = !1, n = tT, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var l = e[i],
                                        h = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = c.length; f--;)
                                            if (c[f] === h) continue e;
                                        t && c.push(h), a.push(l)
                                    } else n(c, h, r) || (c !== a && c.push(h), a.push(l))
                                }
                                return a
                            }

                            function iS(e, t) {
                                return t = iN(t, e), null == (e = nC(e, t)) || delete e[nz(nQ(t))]
                            }

                            function iO(e, t, r, i) {
                                return id(e, t, r(rW(e, t)), i)
                            }

                            function ix(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iR(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tp([e], t.args))
                                }, r)
                            }

                            function iC(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iP(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rM(s[n] || o, e[a], t, r));
                                return iP(rV(s, 1), t, r)
                            }

                            function iA(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function ij(e) {
                                return sz(e) ? e : []
                            }

                            function iT(e) {
                                return "function" == typeof e ? e : oz
                            }

                            function iN(e, t) {
                                return sD(e) ? e : nI(e, t) ? [e] : nM(s8(e))
                            }

                            function iL(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var iD = tv || function(e) {
                                return e6.clearTimeout(e)
                            };

                            function iq(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eB ? eB(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iM(e) {
                                var t = new e.constructor(e.byteLength);
                                return new eU(t).set(new eU(e)), t
                            }

                            function iz(e, t) {
                                var r = t ? iM(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function ik(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sX(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        l = sX(t);
                                    if (!c && !l && !o && e > t || o && a && u && !c && !l || n && a && u || !i && u || !s) return 1;
                                    if (!n && !o && !l && e < t || l && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t5(s - o, 0), l = em(c + u), h = !i; ++a < c;) l[a] = t[a];
                                for (; ++n < o;)(h || n < s) && (l[r[n]] = e[n]);
                                for (; u--;) l[a++] = e[n++];
                                return l
                            }

                            function iU(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = t5(s - a, 0), h = em(l + u), f = !i; ++n < l;) h[n] = e[n];
                                for (var p = n; ++c < u;) h[p + c] = t[c];
                                for (; ++o < a;)(f || n < s) && (h[p + r[o]] = e[n++]);
                                return h
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iV(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = n ? n(i[c], e[c], c, i, e) : r;
                                    u === r && (u = e[c]), s ? rj(i, c, u) : rx(i, c, u)
                                }
                                return i
                            }

                            function iB(e, t) {
                                return function(r, i) {
                                    var n = sD(r) ? to : rC,
                                        s = t ? t() : {};
                                    return n(r, e, nh(i, 2), s)
                                }
                            }

                            function iF(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eI(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iK(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sM(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eI(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iG(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eI(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iZ(e) {
                                return function(t) {
                                    var i = tz(t = s8(t)) ? tB(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? iL(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iW(e) {
                                return function(t) {
                                    return td(oT(oP(t).replace(eH, "")), e, "")
                                }
                            }

                            function iJ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sF(i) ? i : r
                                }
                            }

                            function iQ(e) {
                                return function(t, i, n) {
                                    var s = eI(t);
                                    if (!sM(t)) {
                                        var o = nh(i, 3);
                                        t = of (t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iY(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var u = nu(a = t[s]),
                                            l = "wrapper" == u ? nc(a) : r;
                                        c = l && nP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[nu(l[0])].apply(c, l[3]) : 1 == a.length && nP(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sD(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iX(e, t, i, n, s, o, a, c, u, l) {
                                var h = 128 & t,
                                    f = 1 & t,
                                    p = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = p ? r : iJ(e);
                                return function v() {
                                    for (var m = arguments.length, _ = em(m), b = m; b--;) _[b] = arguments[b];
                                    if (d) var w = nl(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(_, w);
                                    if (n && (_ = i$(_, n, s, d)), o && (_ = iU(_, o, a, d)), m -= E, d && m < l) {
                                        var I = tU(_, w);
                                        return i4(e, t, iX, v.placeholder, i, _, I, c, u, l - m)
                                    }
                                    var P = f ? i : this,
                                        S = p ? P[e] : e;
                                    return m = _.length, c ? _ = function(e, t) {
                                        for (var i = e.length, n = t6(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = nw(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(_, c) : g && m > 1 && _.reverse(), h && u < m && (_.length = u), this && this !== e6 && this instanceof v && (S = y || iJ(S)), S.apply(P, _)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rK(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iI(i), n = iI(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tf(t, tA(nh())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i6(e, t) {
                                var i = (t = t === r ? " " : iI(t)).length;
                                if (i < 2) return i ? ih(t, e) : t;
                                var n = ih(t, tW(e / tV(t)));
                                return tz(t) ? iL(tB(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i3(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s3(t), i === r ? (i = t, t = 0) : i = s3(i), n = n === r ? t < i ? 1 : -1 : s3(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tW((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i2(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s9(t), r = s9(r)), e(t, r)
                                }
                            }

                            function i4(e, t, i, n, s, o, a, c, u, l) {
                                var h = 8 & t,
                                    f = h ? a : r,
                                    p = h ? r : a,
                                    d = h ? o : r,
                                    g = h ? r : o;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, f, g, p, c, u, l],
                                    v = i.apply(r, y);
                                return nP(e) && nj(v, y), v.placeholder = n, nL(v, e, t)
                            }

                            function i9(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s9(e), (r = null == r ? 0 : t6(s2(r), 292)) && tX(e)) {
                                        var i = (s8(e) + "e").split("e");
                                        return +((i = (s8(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i7 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oV;

                            function i8(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tk(t) : n == w ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tf(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, u, l) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(i);
                                var f = o ? o.length : 0;
                                if (f || (t &= -97, o = a = r), u = u === r ? u : t5(s2(u), 0), l = l === r ? l : s2(l), f -= a ? a.length : 0, 64 & t) {
                                    var p = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : nc(e),
                                    y = [e, t, n, o, a, p, d, c, u, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? i$(u, c, t[4]) : c, e[4] = u ? tU(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? iU(u, c, t[6]) : c, e[6] = u ? tU(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? h ? 0 : e.length : t5(y[9] - f, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, _ = l, b = iJ(v), T = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nl(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tU(i, s);
                                    return (t -= o.length) < _ ? i4(v, m, iX, e.placeholder, r, i, o, r, r, _ - t) : ts(this && this !== e6 && this instanceof e ? b : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? T = iX.apply(r, y) : (w = e, E = t, I = n, P = o, S = 1 & E, O = iJ(w), T = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = P.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : w; ++i < n;) s[i] = P[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? I : this, s)
                                });
                                else var v, m, _, b, w, E, I, P, S, O, x, R, C, A, j, T = (x = e, R = t, C = n, A = 1 & R, j = iJ(x), function e() {
                                    return (this && this !== e6 && this instanceof e ? j : x).apply(A ? C : this, arguments)
                                });
                                return nL((g ? ig : nj)(T, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sj(e, eC[i]) && !eT.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sF(e) && sF(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sW(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var l = o.get(e),
                                    h = o.get(t);
                                if (l && h) return l == t && h == e;
                                var f = -1,
                                    p = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++f < c;) {
                                    var g = e[f],
                                        y = t[f];
                                    if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tT(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            p = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        p = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), p
                            }

                            function ns(e) {
                                return nN(nR(e, r, nK), e + "")
                            }

                            function no(e) {
                                return rJ(e, of , ng)
                            }

                            function na(e) {
                                return rJ(e, op, ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oV;

                            function nu(e) {
                                for (var t = e.name + "", r = rs[t], i = eT.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nl(e) {
                                return (eT.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nh() {
                                var e = rd.iteratee || ok;
                                return e = e === ok ? r9 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function nf(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function np(e) {
                                for (var t = of (e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sF(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r4(i) ? i : r
                            }
                            var ng = tQ ? function(e) {
                                    return null == e ? [] : tu(tQ(e = eI(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oJ,
                                ny = tQ ? function(e) {
                                    for (var t = []; e;) tp(t, ng(e)), e = eK(e);
                                    return t
                                } : oJ,
                                nv = rQ;

                            function nm(e, t, r) {
                                t = iN(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nz(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sB(n) && nw(o, n) && (sD(e) || sL(e))
                            }

                            function n_(e) {
                                return "function" != typeof e.constructor || nO(e) ? {} : rg(eK(e))
                            }

                            function nb(e) {
                                return sD(e) || sL(e) || !!(e3 && e && e[e3])
                            }

                            function nw(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sF(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sM(r) && nw(t, r.length)) : "string" == i && t in r) && sj(r[t], e)
                            }

                            function nI(e, t) {
                                if (sD(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sX(e)) || G.test(e) || !K.test(e) || null != t && e in eI(t)
                            }

                            function nP(e) {
                                var t = nu(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t7 && nv(new t7(new ArrayBuffer(1))) != O || t8 && nv(new t8) != y || re && nv(re.resolve()) != _ || rt && nv(new rt) != w || rr && nv(new rr) != P) && (nv = function(e) {
                                var t = rQ(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nk(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return O;
                                    case ra:
                                        return y;
                                    case rc:
                                        return _;
                                    case ru:
                                        return w;
                                    case rl:
                                        return P
                                }
                                return t
                            });
                            var nS = eA ? sH : oQ;

                            function nO(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || eC)
                            }

                            function nx(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eI(i))
                                }
                            }

                            function nR(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nC(e, t) {
                                return t.length < 2 ? e : rW(e, iv(t, 0, -1))
                            }

                            function nA(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nj = nD(ig),
                                nT = tZ || function(e, t) {
                                    return e6.setTimeout(e, t)
                                },
                                nN = nD(iy);

                            function nL(e, t, r) {
                                var i, n, s = t + "";
                                return nN(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tl(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nD(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t3(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nq(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = il(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nM = (ey = (eg = sS(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Z, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nz(e) {
                                if ("string" == typeof e || sX(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nk(e) {
                                if (null != e) {
                                    try {
                                        return ej.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function n$(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var nU = ip(function(e, t) {
                                    return sz(e) ? rM(e, rV(t, 1, sz, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sz(i) && (i = r), sz(e) ? rM(e, rV(t, 1, sz, !0), nh(i, 2)) : []
                                }),
                                nV = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sz(i) && (i = r), sz(e) ? rM(e, rV(t, 1, sz, !0), r, i) : []
                                });

                            function nB(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), t_(e, nh(t, 3), n)
                            }

                            function nF(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s2(i), s = i < 0 ? t5(n + s, 0) : t6(s, n - 1)), t_(e, nh(t, 3), s, !0)
                            }

                            function nK(e) {
                                return (null == e ? 0 : e.length) ? rV(e, 1) : []
                            }

                            function nG(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nZ = ip(function(e) {
                                    var t = tf(e, ij);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nW = ip(function(e) {
                                    var t = nQ(e),
                                        i = tf(e, ij);
                                    return t === nQ(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nh(t, 2)) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nQ(e),
                                        i = tf(e, ij);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nQ(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nY = ip(nX);

                            function nX(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rT(e, t);
                                return iu(e, tf(t, function(e) {
                                    return nw(e, r) ? +e : e
                                }).sort(ik)), i
                            });

                            function n1(e) {
                                return null == e ? e : t9.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iP(rV(e, 1, sz, !0))
                                }),
                                n6 = ip(function(e) {
                                    var t = nQ(e);
                                    return sz(t) && (t = r), iP(rV(e, 1, sz, !0), nh(t, 2))
                                }),
                                n3 = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iP(rV(e, 1, sz, !0), r, t)
                                });

                            function n2(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sz(e)) return t = t5(e.length, t), !0
                                }), tR(t, function(t) {
                                    return tf(e, tP(t))
                                })
                            }

                            function n4(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n2(e);
                                return null == t ? i : tf(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n9 = ip(function(e, t) {
                                    return sz(e) ? rM(e, t) : []
                                }),
                                n7 = ip(function(e) {
                                    return iC(tu(e, sz))
                                }),
                                n8 = ip(function(e) {
                                    var t = nQ(e);
                                    return sz(t) && (t = r), iC(tu(e, sz), nh(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iC(tu(e, sz), r, t)
                                }),
                                st = ip(n2),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n4(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rT(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && nw(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iB(function(e, t, r) {
                                    eT.call(e, r) ? ++e[r] : rj(e, r, 1)
                                }),
                                sa = iQ(nB),
                                sc = iQ(nF);

                            function su(e, t) {
                                return (sD(e) ? ta : rz)(e, nh(t, 3))
                            }

                            function sl(e, t) {
                                return (sD(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rk)(e, nh(t, 3))
                            }
                            var sh = iB(function(e, t, r) {
                                    eT.call(e, r) ? e[r].push(t) : rj(e, r, [t])
                                }),
                                sf = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sM(e) ? em(e.length) : [];
                                    return rz(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sp = iB(function(e, t, r) {
                                    rj(e, r, t)
                                });

                            function sd(e, t) {
                                return (sD(e) ? tf : ie)(e, nh(t, 3))
                            }
                            var sg = iB(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rV(t, 1), [])
                                }),
                                sv = tS || function() {
                                    return e6.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function s_(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sb = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = tU(r, nl(sb));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                sw = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = tU(r, nl(sw));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, u, l, h = 0,
                                    f = !1,
                                    p = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, h = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - l,
                                        n = e - h;
                                    return l === r || i >= t || i < 0 || p && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    u = nT(v, (e = n - l, r = n - h, i = t - e, p ? t6(i, a - r) : i))
                                }

                                function m(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function _() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, l = i, n) {
                                        if (u === r) return h = e = l, u = nT(v, t), f ? g(e) : c;
                                        if (p) return iD(u), u = nT(v, t), g(l)
                                    }
                                    return u === r && (u = nT(v, t)), c
                                }
                                return t = s9(t) || 0, sF(n) && (f = !!n.leading, a = (p = "maxWait" in n) ? t5(s9(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function() {
                                    u !== r && iD(u), h = 0, s = l = o = u = r
                                }, _.flush = function() {
                                    return u === r ? c : m(sv())
                                }, _
                            }
                            var sI = ip(function(e, t) {
                                    return rq(e, 1, t)
                                }),
                                sP = ip(function(e, t, r) {
                                    return rq(e, s9(t) || 0, r)
                                });

                            function sS(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sS.Cache || rw), r
                            }

                            function sO(e) {
                                if ("function" != typeof e) throw new eO(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sS.Cache = rw;
                            var sx = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sD(t[0]) ? tf(t[0], tA(nh())) : tf(rV(t, 1), tA(nh()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t6(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sR = ip(function(e, t) {
                                    var i = tU(t, nl(sR));
                                    return ne(e, 32, r, t, i)
                                }),
                                sC = ip(function(e, t) {
                                    var i = tU(t, nl(sC));
                                    return ne(e, 64, r, t, i)
                                }),
                                sA = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sj(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sT = i2(rY),
                                sN = i2(function(e, t) {
                                    return e >= t
                                }),
                                sL = r6(function() {
                                    return arguments
                                }()) ? r6 : function(e) {
                                    return sK(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sD = em.isArray,
                                sq = e8 ? tA(e8) : function(e) {
                                    return sK(e) && rQ(e) == S
                                };

                            function sM(e) {
                                return null != e && sB(e.length) && !sH(e)
                            }

                            function sz(e) {
                                return sK(e) && sM(e)
                            }
                            var sk = tY || oQ,
                                s$ = te ? tA(te) : function(e) {
                                    return sK(e) && rQ(e) == f
                                };

                            function sU(e) {
                                if (!sK(e)) return !1;
                                var t = rQ(e);
                                return t == p || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sW(e)
                            }

                            function sH(e) {
                                if (!sF(e)) return !1;
                                var t = rQ(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sV(e) {
                                return "number" == typeof e && e == s2(e)
                            }

                            function sB(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sF(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sK(e) {
                                return null != e && "object" == typeof e
                            }
                            var sG = tt ? tA(tt) : function(e) {
                                return sK(e) && nv(e) == y
                            };

                            function sZ(e) {
                                return "number" == typeof e || sK(e) && rQ(e) == v
                            }

                            function sW(e) {
                                if (!sK(e) || rQ(e) != m) return !1;
                                var t = eK(e);
                                if (null === t) return !0;
                                var r = eT.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && ej.call(r) == eq
                            }
                            var sJ = tr ? tA(tr) : function(e) {
                                    return sK(e) && rQ(e) == b
                                },
                                sQ = ti ? tA(ti) : function(e) {
                                    return sK(e) && nv(e) == w
                                };

                            function sY(e) {
                                return "string" == typeof e || !sD(e) && sK(e) && rQ(e) == E
                            }

                            function sX(e) {
                                return "symbol" == typeof e || sK(e) && rQ(e) == I
                            }
                            var s0 = tn ? tA(tn) : function(e) {
                                    return sK(e) && sB(e.length) && !!eJ[rQ(e)]
                                },
                                s1 = i2(r8),
                                s5 = i2(function(e, t) {
                                    return e <= t
                                });

                            function s6(e) {
                                if (!e) return [];
                                if (sM(e)) return sY(e) ? tB(e) : iH(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = nv(e);
                                return (t == y ? tk : t == w ? tH : ow)(e)
                            }

                            function s3(e) {
                                return e ? (e = s9(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s2(e) {
                                var t = s3(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s4(e) {
                                return e ? rN(s2(e), 0, 4294967295) : 0
                            }

                            function s9(e) {
                                if ("number" == typeof e) return e;
                                if (sX(e)) return a;
                                if (sF(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sF(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tC(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s7(e) {
                                return iV(e, op(e))
                            }

                            function s8(e) {
                                return null == e ? "" : iI(e)
                            }
                            var oe = iF(function(e, t) {
                                    if (nO(t) || sM(t)) {
                                        iV(t, of (t), e);
                                        return
                                    }
                                    for (var r in t) eT.call(t, r) && rx(e, r, t[r])
                                }),
                                ot = iF(function(e, t) {
                                    iV(t, op(t), e)
                                }),
                                or = iF(function(e, t, r, i) {
                                    iV(t, op(t), e, i)
                                }),
                                oi = iF(function(e, t, r, i) {
                                    iV(t, of (t), e, i)
                                }),
                                on = ns(rT),
                                os = ip(function(e, t) {
                                    e = eI(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = op(o), c = -1, u = a.length; ++c < u;) {
                                            var l = a[c],
                                                h = e[l];
                                            (h === r || sj(h, eC[l]) && !eT.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rW(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), e[t] = r
                                }, oD(oz)),
                                ol = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), eT.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nh),
                                oh = ip(r5);

                            function of (e) {
                                return sM(e) ? rP(e) : r7(e)
                            }

                            function op(e) {
                                return sM(e) ? rP(e, !0) : function(e) {
                                    if (!sF(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eI(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nO(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !eT.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iF(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iF(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tf(t, function(t) {
                                        return t = iN(t, e), i || (i = t.length > 1), t
                                    }), iV(e, na(e), r), i && (r = rL(r, 7, ni));
                                    for (var n = t.length; n--;) iS(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tf(na(e), function(e) {
                                    return [e]
                                });
                                return t = nh(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var o_ = i8( of ),
                                ob = i8(op);

                            function ow(e) {
                                return null == e ? [] : tj(e, of (e))
                            }
                            var oE = iW(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oI(t) : t)
                            });

                            function oI(e) {
                                return oj(s8(e).toLowerCase())
                            }

                            function oP(e) {
                                return (e = s8(e)) && e.replace(ef, tD).replace(eV, "")
                            }
                            var oS = iW(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oO = iW(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                ox = iZ("toLowerCase"),
                                oR = iW(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oC = iW(function(e, t, r) {
                                    return e + (r ? " " : "") + oj(t)
                                }),
                                oA = iW(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oj = iZ("toUpperCase");

                            function oT(e, t, i) {
                                var n;
                                return e = s8(e), (t = i ? r : t) === r ? (n = e, eG.test(n)) ? e.match(eF) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oN = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sU(e) ? e : new eb(e)
                                    }
                                }),
                                oL = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rj(e, t = nz(t), sb(e[t], e))
                                    }), e
                                });

                            function oD(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oq = iY(),
                                oM = iY(!0);

                            function oz(e) {
                                return e
                            }

                            function ok(e) {
                                return r9("function" == typeof e ? e : rL(e, 1))
                            }
                            var o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                oU = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = of (t),
                                    n = rZ(t, i);
                                null != r || sF(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rZ(t, of (t)));
                                var s = !(sF(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tp([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oV() {}
                            var oB = i5(tf),
                                oF = i5(tc),
                                oK = i5(ty);

                            function oG(e) {
                                return nI(e) ? tP(nz(e)) : function(t) {
                                    return rW(t, e)
                                }
                            }
                            var oZ = i3(),
                                oW = i3(!0);

                            function oJ() {
                                return []
                            }

                            function oQ() {
                                return !1
                            }
                            var oY = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oX = i9("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i9("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o6 = i9("round"),
                                o3 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = s2(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = s_, rd.bind = sb, rd.bindAll = oL, rd.bindKey = sw, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sD(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tW(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tp(sD(r) ? iH(r) : [r], rV(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nh();
                                return e = t ? tf(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = of (t = rL(e, 1)),
                                    function(e) {
                                        return rD(e, t, r)
                                    }
                            }, rd.constant = oD, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rA(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sI, rd.delay = sP, rd.difference = nU, rd.differenceBy = nH, rd.differenceWith = nV, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s2(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s2(n)) < 0 && (n += s), n = i > n ? 0 : s4(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sD(e) ? tu : rH)(e, nh(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rV(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rV(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s2(i), rV(sd(e, t), i)
                            }, rd.flatten = nK, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rV(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rV(e, t = t === r ? 1 : s2(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oq, rd.flowRight = oM, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rZ(e, of (e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rZ(e, op(e))
                            }, rd.groupBy = sh, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nZ, rd.intersectionBy = nW, rd.intersectionWith = nJ, rd.invert = ou, rd.invertBy = ol, rd.invokeMap = sf, rd.iteratee = ok, rd.keyBy = sp, rd.keys = of , rd.keysIn = op, rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rK(e, function(e, i, n) {
                                    rj(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rK(e, function(e, i, n) {
                                    rj(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rL(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rL(t, 1))
                            }, rd.memoize = sS, rd.merge = od, rd.mergeWith = og, rd.method = o$, rd.methodOf = oU, rd.mixin = oH, rd.negate = sO, rd.nthArg = function(e) {
                                return e = s2(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sO(nh(t)))
                            }, rd.once = function(e) {
                                return s_(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sD(t) || (t = null == t ? [] : [t]), sD(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oB, rd.overArgs = sx, rd.overEvery = oF, rd.overSome = oK, rd.partial = sR, rd.partialRight = sC, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oG, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rW(e, t)
                                }
                            }, rd.pull = nY, rd.pullAll = nX, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nh(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oZ, rd.rangeRight = oW, rd.rearg = sA, rd.reject = function(e, t) {
                                return (sD(e) ? tu : rH)(e, sO(nh(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nh(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return iu(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return ip(e, t = t === r ? t : s2(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), (sD(e) ? function(e, t) {
                                    return nq(iH(e), rN(t, 0, e.length))
                                } : function(e, t) {
                                    var r = ow(e);
                                    return nq(r, rN(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sD(e) ? function(e) {
                                    return nq(iH(e))
                                } : function(e) {
                                    return nq(ow(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s2(t), i = i === r ? n : s2(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? iw(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? iw(e, nh(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s8(e)) && ("string" == typeof t || null != t && !sJ(t)) && !(t = iI(t)) && tz(e) ? iL(tB(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t5(s2(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = iL(r, 0, t);
                                    return i && tp(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sF(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s6, rd.toPairs = o_, rd.toPairsIn = ob, rd.toPath = function(e) {
                                return sD(e) ? tf(e, nz) : sX(e) ? [e] : iH(nM(s8(e)))
                            }, rd.toPlainObject = s7, rd.transform = function(e, t, r) {
                                var i = sD(e),
                                    n = i || sk(e) || s0(e);
                                if (t = nh(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sF(e) && sH(s) ? rg(eK(e)) : {}
                                }
                                return (n ? ta : rK)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n6, rd.unionWith = n3, rd.uniq = function(e) {
                                return e && e.length ? iP(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iP(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iS(e, t)
                            }, rd.unzip = n2, rd.unzipWith = n4, rd.update = function(e, t, r) {
                                return null == e ? e : iO(e, t, iT(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iO(e, t, iT(i), n)
                            }, rd.values = ow, rd.valuesIn = function(e) {
                                return null == e ? [] : tj(e, op(e))
                            }, rd.without = n9, rd.words = oT, rd.wrap = function(e, t) {
                                return sR(iT(t), e)
                            }, rd.xor = n7, rd.xorBy = n8, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iA(e || [], t || [], rx)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iA(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = o_, rd.entriesIn = ob, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oY, rd.attempt = oN, rd.camelCase = oE, rd.capitalize = oI, rd.ceil = oX, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s9(i)) == i ? i : 0), t !== r && (t = (t = s9(t)) == t ? t : 0), rN(s9(e), t, i)
                            }, rd.clone = function(e) {
                                return rL(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rL(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rL(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rL(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rD(e, t, of (t))
                            }, rd.deburr = oP, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s8(e), t = iI(t);
                                var n = e.length,
                                    s = i = i === r ? n : rN(s2(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sj, rd.escape = function(e) {
                                return (e = s8(e)) && H.test(e) ? e.replace($, tq) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s8(e)) && J.test(e) ? e.replace(W, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sD(e) ? tc : r$;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.find = sa, rd.findIndex = nB, rd.findKey = function(e, t) {
                                return tm(e, nh(t, 3), rK)
                            }, rd.findLast = sc, rd.findLastIndex = nF, rd.findLastKey = function(e, t) {
                                return tm(e, nh(t, 3), rG)
                            }, rd.floor = o1, rd.forEach = su, rd.forEachRight = sl, rd.forIn = function(e, t) {
                                return null == e ? e : rB(e, nh(t, 3), op)
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rF(e, nh(t, 3), op)
                            }, rd.forOwn = function(e, t) {
                                return e && rK(e, nh(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rG(e, nh(t, 3))
                            }, rd.get = oa, rd.gt = sT, rd.gte = sN, rd.has = function(e, t) {
                                return null != e && nm(e, t, rX)
                            }, rd.hasIn = oc, rd.head = nG, rd.identity = oz, rd.includes = function(e, t, r, i) {
                                e = sM(e) ? e : ow(e), r = r && !i ? s2(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sY(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tb(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s3(t), i === r ? (i = t, t = 0) : i = s3(i), (n = e = s9(e)) >= t6(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = oh, rd.isArguments = sL, rd.isArray = sD, rd.isArrayBuffer = sq, rd.isArrayLike = sM, rd.isArrayLikeObject = sz, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sK(e) && rQ(e) == h
                            }, rd.isBuffer = sk, rd.isDate = s$, rd.isElement = function(e) {
                                return sK(e) && 1 === e.nodeType && !sW(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sM(e) && (sD(e) || "string" == typeof e || "function" == typeof e.splice || sk(e) || s0(e) || sL(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == w) return !e.size;
                                if (nO(e)) return !r7(e).length;
                                for (var r in e)
                                    if (eT.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r3(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r3(e, t, r, i) : !!n
                            }, rd.isError = sU, rd.isFinite = function(e) {
                                return "number" == typeof e && tX(e)
                            }, rd.isFunction = sH, rd.isInteger = sV, rd.isLength = sB, rd.isMap = sG, rd.isMatch = function(e, t) {
                                return e === t || r2(e, t, np(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r2(e, t, np(t), i)
                            }, rd.isNaN = function(e) {
                                return sZ(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nS(e)) throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r4(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sZ, rd.isObject = sF, rd.isObjectLike = sK, rd.isPlainObject = sW, rd.isRegExp = sJ, rd.isSafeInteger = function(e) {
                                return sV(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sQ, rd.isString = sY, rd.isSymbol = sX, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sK(e) && nv(e) == P
                            }, rd.isWeakSet = function(e) {
                                return sK(e) && "[object WeakSet]" == rQ(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oS, rd.last = nQ, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t6(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : t_(e, tE, s, !0)
                            }, rd.lowerCase = oO, rd.lowerFirst = ox, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? rU(e, oz, rY) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? rU(e, nh(t, 2), rY) : r
                            }, rd.mean = function(e) {
                                return tI(e, oz)
                            }, rd.meanBy = function(e, t) {
                                return tI(e, nh(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? rU(e, oz, r8) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? rU(e, nh(t, 2), r8) : r
                            }, rd.stubArray = oJ, rd.stubFalse = oQ, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s2(t)) : r
                            }, rd.noConflict = function() {
                                return e6._ === this && (e6._ = eM), this
                            }, rd.noop = oV, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i6(tJ(n), r) + e + i6(tW(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                return t && i < t ? e + i6(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s2(t)) ? tV(e) : 0;
                                return t && i < t ? i6(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t2(s8(e).replace(Q, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s3(e), t === r ? (t = e, e = 0) : t = s3(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t4();
                                    return t6(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                                }
                                return il(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sD(e) ? td : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rz)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sD(e) ? tg : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rk)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), ih(s8(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s8(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iN(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nz(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o6, rd.runInContext = e, rd.sample = function(e) {
                                return (sD(e) ? rS : function(e) {
                                    return rS(ow(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sM(e)) return sY(e) ? tV(e) : e.length;
                                var t = nv(e);
                                return t == y || t == w ? e.size : r7(e).length
                            }, rd.snakeCase = oR, rd.some = function(e, t, i) {
                                var n = sD(e) ? ty : im;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return i_(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return ib(e, t, nh(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = i_(e, t);
                                    if (i < r && sj(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return i_(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return ib(e, t, nh(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = i_(e, t, !0) - 1;
                                    if (sj(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = oC, rd.startsWith = function(e, t, r) {
                                return e = s8(e), r = null == r ? 0 : rN(s2(r), 0, e.length), t = iI(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o3, rd.sum = function(e) {
                                return e && e.length ? tx(e, oz) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tx(e, nh(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s8(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = of (a),
                                    u = tj(a, c),
                                    l = 0,
                                    h = t.interpolate || ep,
                                    f = "__p += '",
                                    p = eP((t.escape || ep).source + "|" + h.source + "|" + (h === F ? es : ep).source + "|" + (t.evaluate || ep).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eW + "]") + `
`;
                                e.replace(p, function(t, r, i, n, a, c) {
                                    return i || (i = n), f += e.slice(l, c).replace(ed, tM), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), i && (f += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), f += `';
`;
                                var g = eT.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new eb("Invalid `variable` option passed into `_.template`")
                                } else f = `with (obj) {
` + f + `
}
`;
                                f = (o ? f.replace(q, "") : f).replace(M, "$1").replace(z, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                                var y = oN(function() {
                                    return ew(c, d + "return " + f).apply(r, u)
                                });
                                if (y.source = f, sU(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t6(e, 4294967295);
                                t = nh(t), e -= 4294967295;
                                for (var n = tR(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s3, rd.toInteger = s2, rd.toLength = s4, rd.toLower = function(e) {
                                return s8(e).toLowerCase()
                            }, rd.toNumber = s9, rd.toSafeInteger = function(e) {
                                return e ? rN(s2(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s8, rd.toUpper = function(e) {
                                return s8(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return tC(e);
                                if (!e || !(t = iI(t))) return e;
                                var n = tB(e),
                                    s = tB(t),
                                    o = tN(n, s),
                                    a = tL(n, s) + 1;
                                return iL(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return e.slice(0, tF(e) + 1);
                                if (!e || !(t = iI(t))) return e;
                                var n = tB(e),
                                    s = tL(n, tB(t)) + 1;
                                return iL(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return e.replace(Q, "");
                                if (!e || !(t = iI(t))) return e;
                                var n = tB(e),
                                    s = tN(n, tB(t));
                                return iL(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sF(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s2(t.length) : i, n = "omission" in t ? iI(t.omission) : n
                                }
                                var o = (e = s8(e)).length;
                                if (tz(e)) {
                                    var a = tB(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tV(n);
                                if (c < 1) return n;
                                var u = a ? iL(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + n;
                                if (a && (c += u.length - c), sJ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, h = u;
                                        for (s.global || (s = eP(s.source, s8(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var f = l.index;
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (e.indexOf(iI(s), c) != c) {
                                    var p = u.lastIndexOf(s);
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + n
                            }, rd.unescape = function(e) {
                                return (e = s8(e)) && U.test(e) ? e.replace(k, tK) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eN;
                                return s8(e) + t
                            }, rd.upperCase = oA, rd.upperFirst = oj, rd.each = su, rd.eachRight = sl, rd.first = nG, oH(rd, (ev = {}, rK(rd, function(e, t) {
                                eT.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s2(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t6(i, n.__takeCount__) : n.__views__.push({
                                        size: t6(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nh(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oz)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sO(nh(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s2(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rK(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        u = a[0],
                                        l = c || sD(t),
                                        h = function(e) {
                                            var t = s.apply(rd, tp([e], a));
                                            return n && f ? t[0] : t
                                        };
                                    l && i && "function" == typeof u && 1 != u.length && (c = l = !1);
                                    var f = this.__chain__,
                                        p = !!this.__actions__.length,
                                        d = o && !f,
                                        g = c && !p;
                                    if (!o && l) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [h],
                                            thisArg: r
                                        }), new rv(y, f)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = ex[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sD(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sD(r) ? r : [], e)
                                    })
                                }
                            }), rK(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    eT.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iX(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sD(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t6(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = i ? a : o - 1,
                                    l = this.__iteratees__,
                                    h = l.length,
                                    f = 0,
                                    p = t6(c, this.__takeCount__);
                                if (!r || !i && n == c && p == c) return iR(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && f < p;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < h;) {
                                        var v = l[g],
                                            m = v.iteratee,
                                            _ = v.type,
                                            b = m(y);
                                        if (2 == _) y = b;
                                        else if (!b) {
                                            if (1 == _) continue e;
                                            break e
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s6(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = n$(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iR(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e2 && (rd.prototype[e2] = function() {
                                return this
                            }), rd
                        }();
                    e2 ? ((e2.exports = tG)._ = tG, e3._ = tG) : e6._ = tG
                }).call(rZ)
            }(rW, rW.exports);
            var rJ = Object.defineProperty,
                rQ = Object.defineProperties,
                rY = Object.getOwnPropertyDescriptors,
                rX = Object.getOwnPropertySymbols,
                r0 = Object.prototype.hasOwnProperty,
                r1 = Object.prototype.propertyIsEnumerable,
                r5 = (e, t, r) => t in e ? rJ(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r6 = (e, t) => {
                    for (var r in t || (t = {})) r0.call(t, r) && r5(e, r, t[r]);
                    if (rX)
                        for (var r of rX(t)) r1.call(t, r) && r5(e, r, t[r]);
                    return e
                },
                r3 = (e, t) => rQ(e, rY(t));

            function r2(e, t, r) {
                var i;
                let n = (0, s.DQ)(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function r4(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function r9(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function r7(e) {
                var t, r, i, n;
                let o = {};
                if (!(0, s.L5)(e)) return o;
                for (let [a, c] of Object.entries(e)) {
                    let e = (0, s.gp)(a) ? [a] : c.chains,
                        u = c.methods || [],
                        l = c.events || [],
                        h = c.rpcMap || {},
                        f = (0, s.M)(a);
                    o[f] = r3(r6(r6({}, o[f]), c), {
                        chains: (0, s.eG)(e, null == (t = o[f]) ? void 0 : t.chains),
                        methods: (0, s.eG)(u, null == (r = o[f]) ? void 0 : r.methods),
                        events: (0, s.eG)(l, null == (i = o[f]) ? void 0 : i.events),
                        rpcMap: r6(r6({}, h), null == (n = o[f]) ? void 0 : n.rpcMap)
                    })
                }
                return o
            }

            function r8(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function ie(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            let it = {},
                ir = e => it[e],
                ii = (e, t) => {
                    it[e] = t
                };
            class is {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = r4(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class io {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || r2(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(r4(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    let n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class ia {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = r4(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class ic {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = r4(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class iu {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = r4(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class il {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = r4(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class ih {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = r4(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            class ip {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = ir("events"), this.client = ir("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || r2(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(rG.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || r2(e, this.namespace);
                    return typeof r > "u" ? void 0 : new ea(new rB(r, ir("disableProviderPing")))
                }
            }
            var id = Object.defineProperty,
                ig = Object.defineProperties,
                iy = Object.getOwnPropertyDescriptors,
                iv = Object.getOwnPropertySymbols,
                im = Object.prototype.hasOwnProperty,
                i_ = Object.prototype.propertyIsEnumerable,
                ib = (e, t, r) => t in e ? id(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iw = (e, t) => {
                    for (var r in t || (t = {})) im.call(t, r) && ib(e, r, t[r]);
                    if (iv)
                        for (var r of iv(t)) i_.call(t, r) && ib(e, r, t[r]);
                    return e
                },
                iE = (e, t) => ig(e, iy(t));
            class iI {
                constructor(e) {
                    this.events = new(n()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, c.pino)((0, c.getDefaultLoggerOptions)({
                        level: e ? .logger || rF
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new iI(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: iw({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: (0, s.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        o = i.accounts || [],
                                        a = (0, s.gp)(r) ? [r] : i.chains ? i.chains : r9(i.accounts);
                                    t[r] = {
                                        chains: a,
                                        methods: e,
                                        events: n,
                                        accounts: o
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== rw) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if ((0, s.qt)(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await r$.init({
                        logger: this.providerOpts.logger || rF,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0, s.M)(e)))];
                    ii("client", this.client), ii("events", this.events), ii("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = r9(t),
                            i = function(e = {}, t = {}) {
                                let r = r7(e),
                                    i = r7(t);
                                return rW.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces),
                            n = iE(iw({}, i[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new io({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new ia({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new ic({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new is({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new iu({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new il({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new ih({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new ip({
                                    namespace: n
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && (0, s.qt)(e) && this.events.emit("accountsChanged", e.map(r8))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = (0, s.M)(e),
                                n = ie(e) !== ie(r) ? `${i}:${ie(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = iE(iw({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", iE(iw({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(rG.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => (0, s.M)(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = (0, s.M)(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${rK}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${rK}/${e}`)
                }
            }
            let iP = ["eth_sendTransaction", "personal_sign"],
                iS = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                iO = ["chainChanged", "accountsChanged"],
                ix = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var iR = Object.defineProperty,
                iC = Object.defineProperties,
                iA = Object.getOwnPropertyDescriptors,
                ij = Object.getOwnPropertySymbols,
                iT = Object.prototype.hasOwnProperty,
                iN = Object.prototype.propertyIsEnumerable,
                iL = (e, t, r) => t in e ? iR(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iD = (e, t) => {
                    for (var r in t || (t = {})) iT.call(t, r) && iL(e, r, t[r]);
                    if (ij)
                        for (var r of ij(t)) iN.call(t, r) && iL(e, r, t[r]);
                    return e
                },
                iq = (e, t) => iC(e, iA(t));

            function iM(e) {
                return Number(e[0].split(":")[1])
            }

            function iz(e) {
                return `0x${e.toString(16)}`
            }
            class ik {
                constructor() {
                    this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new ik;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: o,
                            optionalEvents: a,
                            rpcMap: c
                        } = e;
                        if (!(0, s.qt)(t)) throw Error("Invalid chains");
                        let u = {
                                chains: t,
                                methods: i || iP,
                                events: o || iO,
                                rpcMap: iD({}, t.length ? {
                                    [iM(t)]: c[iM(t)]
                                } : {})
                            },
                            l = o ? .filter(e => !iO.includes(e)),
                            h = i ? .filter(e => !iP.includes(e));
                        if (!r && !a && !n && !(null != l && l.length) && !(null != h && h.length)) return {
                            required: t.length ? u : void 0
                        };
                        let f = l ? .length && h ? .length || !r,
                            p = {
                                chains: [...new Set(f ? u.chains.concat(r || []) : r)],
                                methods: [...new Set(u.methods.concat(null != n && n.length ? n : iS))],
                                events: [...new Set(u.events.concat(null != a && a.length ? a : ix))],
                                rpcMap: c
                            };
                        return {
                            required: t.length ? u : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(iq(iD({
                                namespaces: iD({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, s.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: iz(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", iz(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", iq(iD({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", iz(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || iP : [],
                        a = i.length ? e ? .events || iO : [],
                        c = e ? .optionalMethods || [],
                        u = e ? .optionalEvents || [],
                        l = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        h = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: l,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? iM(this.rpc.chains) : iM(this.rpc.optionalChains), this.signer = await iI.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(343).then(r.bind(r, 59343));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(iD({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, s.qt)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && (0, s.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let i$ = ik
        },
        38200: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        30997: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(38200)
        },
        32568: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(66736);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        53401: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(39653);
            i.__exportStar(r(32568), t)
        },
        38969: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(39653),
                n = r(17187),
                s = r(66736),
                o = r(1614),
                a = r(53401);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        90772: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(39653);
            i.__exportStar(r(38969), t), i.__exportStar(r(1614), t), i.__exportStar(r(53401), t)
        },
        44174: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(30997);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        1614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(39653);
            i.__exportStar(r(44174), t)
        },
        39653: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        85150: function(e, t, r) {
            "use strict";
            let i = r(33893),
                n = r(63954),
                s = i.__importDefault(r(30653)),
                o = r(59728);
            class a {
                constructor() {
                    this.localStorage = s.default
                }
                getKeys() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        return Object.keys(this.localStorage)
                    })
                }
                getEntries() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    })
                }
                getItem(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = this.localStorage.getItem(e);
                        if (null !== t) return n.safeJsonParse(t)
                    })
                }
                setItem(e, t) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.setItem(e, n.safeJsonStringify(t))
                    })
                }
                removeItem(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.removeItem(e)
                    })
                }
            }
            t.ZP = a
        },
        30653: function(e, t, r) {
            "use strict";
            ! function() {
                function t() {}
                t.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, t.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, t.prototype.removeItem = function(e) {
                    delete this[e]
                }, t.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, t.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, t.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), void 0 !== r.g && r.g.localStorage ? e.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new t
            }()
        },
        59728: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(33893);
            i.__exportStar(r(39076), t), i.__exportStar(r(20496), t)
        },
        39076: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IKeyValueStorage = void 0;
            class r {}
            t.IKeyValueStorage = r
        },
        20496: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseEntry = void 0;
            let i = r(63954);
            t.parseEntry = function(e) {
                var t;
                return [e[0], i.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
            }
        },
        33893: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        65727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        9107: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(57121),
                n = i.__importDefault(r(36559));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(65727), t), i.__exportStar(r(58048), t)
        },
        58048: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(65727);

            function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = o(e, r),
                    s = n.trim() ? `${n}/${t}` : t;
                return s
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = a(e, t, r),
                    o = e.child({
                        context: n
                    });
                return s(o, n, r)
            }
        },
        57121: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        43014: function() {},
        54098: function(e, t) {
            var r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function Headers(e) {
                    this.map = {}, e instanceof Headers ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function c(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function u(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function l(e) {
                    var t = new FileReader,
                        r = u(t);
                    return t.readAsArrayBuffer(e), r
                }

                function h(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function f() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e)) ? this._bodyArrayBuffer = h(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = c(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
                    }), this.text = function() {
                        var e, t, r, i = c(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = u(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(d)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                Headers.prototype.append = function(e, t) {
                    e = s(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, Headers.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, Headers.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, Headers.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, Headers.prototype.set = function(e, t) {
                    this.map[s(e)] = o(t)
                }, Headers.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, Headers.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, Headers.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, Headers.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function Request(e, t) {
                    var r, i, n = (t = t || {}).body;
                    if (e instanceof Request) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Headers(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Headers(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), p.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function d(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                n = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(n))
                        }
                    }), t
                }

                function Response(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new Headers(t.headers), this.url = t.url || "", this._initBody(e)
                }
                Request.prototype.clone = function() {
                    return new Request(this, {
                        body: this._bodyInit
                    })
                }, f.call(Request.prototype), f.call(Response.prototype), Response.prototype.clone = function() {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url
                    })
                }, Response.error = function() {
                    var e = new Response(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var g = [301, 302, 303, 307, 308];
                Response.redirect = function(e, t) {
                    if (-1 === g.indexOf(t)) throw RangeError("Invalid status code");
                    return new Response(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function y(r, i) {
                    return new Promise(function(n, s) {
                        var o = new Request(r, i);
                        if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function c() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new Headers, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var n = r.join(":").trim();
                                        t.append(i, n)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), n(new Response("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", c)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                y.polyfill = !0, i.fetch || (i.fetch = y, i.Headers = Headers, i.Request = Request, i.Response = Response), e.Headers = Headers, e.Request = Request, e.Response = Response, e.fetch = y, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        17187: function(e) {
            "use strict";
            var t, r = "object" == typeof Reflect ? Reflect : null,
                i = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
                    return Function.prototype.apply.call(e, t, r)
                };
            t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var n = Number.isNaN || function(e) {
                return e != e
            };

            function s() {
                s.init.call(this)
            }
            e.exports = s, e.exports.once = function(e, t) {
                return new Promise(function(r, i) {
                    function n(r) {
                        e.removeListener(t, s), i(r)
                    }

                    function s() {
                        "function" == typeof e.removeListener && e.removeListener("error", n), r([].slice.call(arguments))
                    }
                    g(e, t, s, {
                        once: !0
                    }), "error" !== t && "function" == typeof e.on && g(e, "error", n, {
                        once: !0
                    })
                })
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var o = 10;

            function a(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function c(e) {
                return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, r, i) {
                if (a(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount;
                else if ("function" == typeof o ? o = s[t] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = c(e)) > 0 && o.length > n && !o.warned) {
                    o.warned = !0;
                    var n, s, o, u = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, console && console.warn && console.warn(u)
                }
                return e
            }

            function l() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function h(e, t, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    n = l.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function f(e, t, r) {
                var i = e._events;
                if (void 0 === i) return [];
                var n = i[t];
                return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
                    for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(n) : d(n, n.length)
            }

            function p(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function d(e, t) {
                for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
                return r
            }

            function g(e, t, r, i) {
                if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
                else if ("function" == typeof e.addEventListener) e.addEventListener(t, function n(s) {
                    i.once && e.removeEventListener(t, n), r(s)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    o = e
                }
            }), s.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var n = "error" === e,
                    s = this._events;
                if (void 0 !== s) n = n && void 0 === s.error;
                else if (!n) return !1;
                if (n) {
                    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                    var o, a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = s[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) i(c, this, t);
                else
                    for (var u = c.length, l = d(c, u), r = 0; r < u; ++r) i(l[r], this, t);
                return !0
            }, s.prototype.addListener = function(e, t) {
                return u(this, e, t, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
                return u(this, e, t, !0)
            }, s.prototype.once = function(e, t) {
                return a(t), this.on(e, h(this, e, t)), this
            }, s.prototype.prependOnceListener = function(e, t) {
                return a(t), this.prependListener(e, h(this, e, t)), this
            }, s.prototype.removeListener = function(e, t) {
                var r, i, n, s, o;
                if (a(t), void 0 === (i = this._events) || void 0 === (r = i[e])) return this;
                if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (n = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === t || r[s].listener === t) {
                            o = r[s].listener, n = s;
                            break
                        }
                    if (n < 0) return this;
                    0 === n ? r.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
                var t, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 == arguments.length) {
                    var n, s = Object.keys(r);
                    for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                return this
            }, s.prototype.listeners = function(e) {
                return f(this, e, !0)
            }, s.prototype.rawListeners = function(e) {
                return f(this, e, !1)
            }, s.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
            }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        72307: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                _ = "[object String]",
                b = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                I = /^\[object .+?Constructor\]$/,
                P = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[w] = S[u] = S[E] = S[l] = S[h] = S[f] = S[p] = S[d] = S[g] = S[v] = S[m] = S[_] = S[b] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                R = O || x || Function("return this")(),
                C = t && !t.nodeType && t,
                A = C && e && !e.nodeType && e,
                j = A && A.exports === C,
                T = j && O.process,
                N = function() {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (e) {}
                }(),
                L = N && N.isTypedArray;

            function D(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function q(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var M = Array.prototype,
                z = Function.prototype,
                k = Object.prototype,
                $ = R["__core-js_shared__"],
                U = z.toString,
                H = k.hasOwnProperty,
                V = (i = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                B = k.toString,
                F = RegExp("^" + U.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                K = j ? R.Buffer : void 0,
                Symbol = R.Symbol,
                Uint8Array = R.Uint8Array,
                G = k.propertyIsEnumerable,
                Z = M.splice,
                W = Symbol ? Symbol.toStringTag : void 0,
                J = Object.getOwnPropertySymbols,
                Q = K ? K.isBuffer : void 0,
                Y = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                DataView = em(R, "DataView"),
                Map = em(R, "Map"),
                Promise = em(R, "Promise"),
                Set = em(R, "Set"),
                WeakMap = em(R, "WeakMap"),
                X = em(Object, "create"),
                ee = ew(DataView),
                et = ew(Map),
                er = ew(Promise),
                ei = ew(Set),
                en = ew(WeakMap),
                es = Symbol ? Symbol.prototype : void 0,
                eo = es ? es.valueOf : void 0;

            function ea(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ec(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eu(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function el(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new eu; ++t < r;) this.add(e[t])
            }

            function eh(e) {
                var t = this.__data__ = new ec(e);
                this.size = t.size
            }

            function ef(e, t) {
                for (var r = e.length; r--;)
                    if (eE(e[r][0], t)) return r;
                return -1
            }

            function ep(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : W && W in Object(e) ? function(e) {
                    var t = H.call(e, W),
                        r = e[W];
                    try {
                        e[W] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = B.call(e);
                    return i && (t ? e[W] = r : delete e[W]), n
                }(e) : B.call(e)
            }

            function ed(e) {
                return eC(e) && ep(e) == a
            }

            function eg(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    f = 2 & r ? new el : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var p = e[l],
                        d = t[l];
                    if (i) var g = o ? i(d, p, l, t, e, s) : i(p, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (f) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!f.has(t) && (p === e || n(p, e, r, i, s))) return f.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(p === d || n(p, d, r, i, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function ey(e) {
                var t;
                return t = function(e) {
                    return null != e && ex(e.length) && !eO(e) ? function(e, t) {
                        var r, i = eP(e),
                            n = !i && eI(e),
                            s = !i && !n && eS(e),
                            o = !i && !n && !s && eA(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var l in e) H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof l || P.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || k)) return Y(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eP(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, e_(e))
            }

            function ev(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function em(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eR(r) || V && V in r) && (eO(r) ? F : I).test(ew(r)) ? r : void 0
            }
            ea.prototype.clear = function() {
                this.__data__ = X ? X(null) : {}, this.size = 0
            }, ea.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ea.prototype.get = function(e) {
                var t = this.__data__;
                if (X) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ea.prototype.has = function(e) {
                var t = this.__data__;
                return X ? void 0 !== t[e] : H.call(t, e)
            }, ea.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = X && void 0 === t ? o : t, this
            }, ec.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, ec.prototype.delete = function(e) {
                var t = this.__data__,
                    r = ef(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : Z.call(t, r, 1), --this.size, !0)
            }, ec.prototype.get = function(e) {
                var t = this.__data__,
                    r = ef(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, ec.prototype.has = function(e) {
                return ef(this.__data__, e) > -1
            }, ec.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = ef(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, eu.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ea,
                    map: new(Map || ec),
                    string: new ea
                }
            }, eu.prototype.delete = function(e) {
                var t = ev(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, eu.prototype.get = function(e) {
                return ev(this, e).get(e)
            }, eu.prototype.has = function(e) {
                return ev(this, e).has(e)
            }, eu.prototype.set = function(e, t) {
                var r = ev(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, el.prototype.add = el.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, el.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eh.prototype.clear = function() {
                this.__data__ = new ec, this.size = 0
            }, eh.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, eh.prototype.get = function(e) {
                return this.__data__.get(e)
            }, eh.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eh.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof ec) {
                    var i = r.__data__;
                    if (!Map || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new eu(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var e_ = J ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(J(e = Object(e)), function(t) {
                        return G.call(e, t)
                    })
                } : function() {
                    return []
                },
                eb = ep;

            function ew(e) {
                if (null != e) {
                    try {
                        return U.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eE(e, t) {
                return e === t || e != e && t != t
            }(DataView && eb(new DataView(new ArrayBuffer(1))) != E || Map && eb(new Map) != p || Promise && eb(Promise.resolve()) != y || Set && eb(new Set) != m || WeakMap && eb(new WeakMap) != b) && (eb = function(e) {
                var t = ep(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? ew(r) : "";
                if (i) switch (i) {
                    case ee:
                        return E;
                    case et:
                        return p;
                    case er:
                        return y;
                    case ei:
                        return m;
                    case en:
                        return b
                }
                return t
            });
            var eI = ed(function() {
                    return arguments
                }()) ? ed : function(e) {
                    return eC(e) && H.call(e, "callee") && !G.call(e, "callee")
                },
                eP = Array.isArray,
                eS = Q || function() {
                    return !1
                };

            function eO(e) {
                if (!eR(e)) return !1;
                var t = ep(e);
                return t == f || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function ex(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eR(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eC(e) {
                return null != e && "object" == typeof e
            }
            var eA = L ? function(e) {
                return L(e)
            } : function(e) {
                return eC(e) && ex(e.length) && !!S[ep(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (eC(t) || eC(r)) ? function(e, t, r, i, n, s) {
                        var o = eP(e),
                            f = eP(t),
                            y = o ? c : eb(e),
                            b = f ? c : eb(t);
                        y = y == a ? g : y, b = b == a ? g : b;
                        var I = y == g,
                            P = b == g,
                            S = y == b;
                        if (S && eS(e)) {
                            if (!eS(t)) return !1;
                            o = !0, I = !1
                        }
                        if (S && !I) return s || (s = new eh), o || eA(e) ? eg(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case w:
                                    if (e.byteLength != t.byteLength || !s(new Uint8Array(e), new Uint8Array(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case d:
                                    return eE(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case _:
                                    return e == t + "";
                                case p:
                                    var a = D;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = q), e.size != t.size && !c) break;
                                    var f = o.get(e);
                                    if (f) return f == t;
                                    i |= 2, o.set(e, t);
                                    var g = eg(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (eo) return eo.call(e) == eo.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = I && H.call(e, "__wrapped__"),
                                x = P && H.call(t, "__wrapped__");
                            if (O || x) {
                                var R = O ? e.value() : e,
                                    C = x ? t.value() : t;
                                return s || (s = new eh), n(R, C, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new eh), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = ey(e),
                                c = a.length;
                            if (c != ey(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var f = !0;
                            s.set(e, t), s.set(t, e);
                            for (var p = o; ++u < c;) {
                                var d = e[l = a[u]],
                                    g = t[l];
                                if (i) var y = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    f = !1;
                                    break
                                }
                                p || (p = "constructor" == l)
                            }
                            if (f && !p) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (f = !1)
                            }
                            return s.delete(e), s.delete(t), f
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        85346: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, f = e && e.length || 0, p = 0; p < f;) {
                    if (37 === e.charCodeAt(p) && p + 1 < f) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Number(r[l]), h = p + 2, p++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Math.floor(Number(r[l])), h = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < p && (u += e.slice(h, p));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = p + 2, p++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = p + 2, p++;
                                    break
                                }
                                u += n(r[l]), h = p + 2, p++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < p && (u += e.slice(h, p)), u += String(r[l]), h = p + 2, p++;
                                break;
                            case 37:
                                h < p && (u += e.slice(h, p)), u += "%", h = p + 2, p++, l--
                        }++l
                    }++p
                }
                return -1 === h ? e : (h < f && (u += e.slice(h)), u)
            }
        },
        63954: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.safeJsonParse = function(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }, t.safeJsonStringify = function(e) {
                return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t)
            }
        },
        57026: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        36559: function(e, t, r) {
            "use strict";
            let i = r(85346);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t;
                (e = e || {}).browser = e.browser || {};
                let r = e.browser.transmit;
                if (r && "function" != typeof r.send) throw Error("pino: transmit option must have a send function");
                let i = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let l = e.serializers || {},
                    h = function(e, t) {
                        if (Array.isArray(e)) {
                            let t = e.filter(function(e) {
                                return "!stdSerializers.err" !== e
                            });
                            return t
                        }
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, l),
                    g = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1), "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), !1 === e.enabled && (e.level = "silent");
                let y = e.level || "info",
                    v = Object.create(i);
                v.log || (v.log = f), Object.defineProperty(v, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(v, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, v, "error", "log"), o(m, v, "fatal", "error"), o(m, v, "warn", "error"), o(m, v, "info", "log"), o(m, v, "debug", "log"), o(m, v, "trace", "log")
                    }
                });
                let m = {
                    transmit: r,
                    serialize: h,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(t = e).timestamp ? t.timestamp : !1 === t.timestamp ? p : d
                };
                return v.levels = s.levels, v.level = y, v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = f, v.serializers = l, v._serialize = h, v._stdErrSerialize = g, v.child = function(t, i) {
                    if (!t) throw Error("missing bindings for child Pino");
                    i = i || {}, h && t.serializers && (i.serializers = t.serializers);
                    let n = i.serializers;
                    if (h && n) {
                        var s = Object.assign({}, l, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : h;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function f(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), r && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return f.prototype = this, new f(this)
                }, r && (v._logEvent = u()), v
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : n[r] || n[o] || f,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== f) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var f = 0; f < l.length; f++) l[f] = arguments[f];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        n && (u.time = n), u.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function f() {}

            function p() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);