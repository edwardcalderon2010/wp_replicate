/*!
 * genesys.js
 * @version: 2.10.3
 * @license: Genesys Cloud Services, Inc.
 */
!function(e) {
    var t = window.webpackHotUpdate;
    window.webpackHotUpdate = function(e, n) {
        !function(e, t) {
            if (!w[e] || !D[e])
                return;
            for (var n in D[e] = !1,
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (h[n] = t[n]);
            0 == --y && 0 === b && C()
        }(e, n),
        t && t(e, n)
    }
    ;
    var n, r = !0, o = "c8e444b2c74b580e3fa1", i = {}, s = [], a = [];
    function u(e) {
        var t = O[e];
        if (!t)
            return _;
        var r = function(r) {
            return t.hot.active ? (O[r] ? -1 === O[r].parents.indexOf(e) && O[r].parents.push(e) : (s = [e],
            n = r),
            -1 === t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e),
            s = []),
            _(r)
        }
          , o = function(e) {
            return {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return _[e]
                },
                set: function(t) {
                    _[e] = t
                }
            }
        };
        for (var i in _)
            Object.prototype.hasOwnProperty.call(_, i) && "e" !== i && "t" !== i && Object.defineProperty(r, i, o(i));
        return r.e = function(e) {
            return "ready" === f && d("prepare"),
            b++,
            _.e(e).then(t, (function(e) {
                throw t(),
                e
            }
            ));
            function t() {
                b--,
                "prepare" === f && (v[e] || A(e),
                0 === b && 0 === y && C())
            }
        }
        ,
        r.t = function(e, t) {
            return 1 & t && (e = r(e)),
            _.t(e, -2 & t)
        }
        ,
        r
    }
    function c(t) {
        var r = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _selfInvalidated: !1,
            _disposeHandlers: [],
            _main: n !== t,
            active: !0,
            accept: function(e, t) {
                if (void 0 === e)
                    r._selfAccepted = !0;
                else if ("function" == typeof e)
                    r._selfAccepted = e;
                else if ("object" == typeof e)
                    for (var n = 0; n < e.length; n++)
                        r._acceptedDependencies[e[n]] = t || function() {}
                        ;
                else
                    r._acceptedDependencies[e] = t || function() {}
            },
            decline: function(e) {
                if (void 0 === e)
                    r._selfDeclined = !0;
                else if ("object" == typeof e)
                    for (var t = 0; t < e.length; t++)
                        r._declinedDependencies[e[t]] = !0;
                else
                    r._declinedDependencies[e] = !0
            },
            dispose: function(e) {
                r._disposeHandlers.push(e)
            },
            addDisposeHandler: function(e) {
                r._disposeHandlers.push(e)
            },
            removeDisposeHandler: function(e) {
                var t = r._disposeHandlers.indexOf(e);
                t >= 0 && r._disposeHandlers.splice(t, 1)
            },
            invalidate: function() {
                switch (this._selfInvalidated = !0,
                f) {
                case "idle":
                    (h = {})[t] = e[t],
                    d("ready");
                    break;
                case "ready":
                    T(t);
                    break;
                case "prepare":
                case "check":
                case "dispose":
                case "apply":
                    (g = g || []).push(t)
                }
            },
            check: x,
            apply: k,
            status: function(e) {
                if (!e)
                    return f;
                l.push(e)
            },
            addStatusHandler: function(e) {
                l.push(e)
            },
            removeStatusHandler: function(e) {
                var t = l.indexOf(e);
                t >= 0 && l.splice(t, 1)
            },
            data: i[t]
        };
        return n = void 0,
        r
    }
    var l = []
      , f = "idle";
    function d(e) {
        f = e;
        for (var t = 0; t < l.length; t++)
            l[t].call(null, e)
    }
    var p, h, m, g, y = 0, b = 0, v = {}, D = {}, w = {};
    function E(e) {
        return +e + "" === e ? +e : e
    }
    function x(e) {
        if ("idle" !== f)
            throw new Error("check() is only allowed in idle status");
        return r = e,
        d("check"),
        (t = 1e4,
        t = t || 1e4,
        new Promise((function(e, n) {
            if ("undefined" == typeof XMLHttpRequest)
                return n(new Error("No browser support"));
            try {
                var r = new XMLHttpRequest
                  , i = _.p + "" + o + ".hot-update.json";
                r.open("GET", i, !0),
                r.timeout = t,
                r.send(null)
            } catch (e) {
                return n(e)
            }
            r.onreadystatechange = function() {
                if (4 === r.readyState)
                    if (0 === r.status)
                        n(new Error("Manifest request to " + i + " timed out."));
                    else if (404 === r.status)
                        e();
                    else if (200 !== r.status && 304 !== r.status)
                        n(new Error("Manifest request to " + i + " failed."));
                    else {
                        try {
                            var t = JSON.parse(r.responseText)
                        } catch (e) {
                            return void n(e)
                        }
                        e(t)
                    }
            }
        }
        ))).then((function(e) {
            if (!e)
                return d(S() ? "ready" : "idle"),
                null;
            D = {},
            v = {},
            w = e.c,
            m = e.h,
            d("prepare");
            var t = new Promise((function(e, t) {
                p = {
                    resolve: e,
                    reject: t
                }
            }
            ));
            h = {};
            return A(2),
            "prepare" === f && 0 === b && 0 === y && C(),
            t
        }
        ));
        var t
    }
    function A(e) {
        w[e] ? (D[e] = !0,
        y++,
        function(e) {
            var t = document.createElement("script");
            t.charset = "utf-8",
            t.src = _.p + "" + e + "." + o + ".hot-update.js",
            document.head.appendChild(t)
        }(e)) : v[e] = !0
    }
    function C() {
        d("ready");
        var e = p;
        if (p = null,
        e)
            if (r)
                Promise.resolve().then((function() {
                    return k(r)
                }
                )).then((function(t) {
                    e.resolve(t)
                }
                ), (function(t) {
                    e.reject(t)
                }
                ));
            else {
                var t = [];
                for (var n in h)
                    Object.prototype.hasOwnProperty.call(h, n) && t.push(E(n));
                e.resolve(t)
            }
    }
    function k(t) {
        if ("ready" !== f)
            throw new Error("apply() is only allowed in ready status");
        return function t(r) {
            var a, u, c, l, f;
            function p(e) {
                for (var t = [e], n = {}, r = t.map((function(e) {
                    return {
                        chain: [e],
                        id: e
                    }
                }
                )); r.length > 0; ) {
                    var o = r.pop()
                      , i = o.id
                      , s = o.chain;
                    if ((l = O[i]) && (!l.hot._selfAccepted || l.hot._selfInvalidated)) {
                        if (l.hot._selfDeclined)
                            return {
                                type: "self-declined",
                                chain: s,
                                moduleId: i
                            };
                        if (l.hot._main)
                            return {
                                type: "unaccepted",
                                chain: s,
                                moduleId: i
                            };
                        for (var a = 0; a < l.parents.length; a++) {
                            var u = l.parents[a]
                              , c = O[u];
                            if (c) {
                                if (c.hot._declinedDependencies[i])
                                    return {
                                        type: "declined",
                                        chain: s.concat([u]),
                                        moduleId: i,
                                        parentId: u
                                    };
                                -1 === t.indexOf(u) && (c.hot._acceptedDependencies[i] ? (n[u] || (n[u] = []),
                                y(n[u], [i])) : (delete n[u],
                                t.push(u),
                                r.push({
                                    chain: s.concat([u]),
                                    id: u
                                })))
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: e,
                    outdatedModules: t,
                    outdatedDependencies: n
                }
            }
            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    -1 === e.indexOf(r) && e.push(r)
                }
            }
            S();
            var b = {}
              , v = []
              , D = {}
              , x = function() {
                console.warn("[HMR] unexpected require(" + C.moduleId + ") to disposed module")
            };
            for (var A in h)
                if (Object.prototype.hasOwnProperty.call(h, A)) {
                    var C;
                    f = E(A),
                    C = h[A] ? p(f) : {
                        type: "disposed",
                        moduleId: A
                    };
                    var k = !1
                      , T = !1
                      , F = !1
                      , j = "";
                    switch (C.chain && (j = "\nUpdate propagation: " + C.chain.join(" -> ")),
                    C.type) {
                    case "self-declined":
                        r.onDeclined && r.onDeclined(C),
                        r.ignoreDeclined || (k = new Error("Aborted because of self decline: " + C.moduleId + j));
                        break;
                    case "declined":
                        r.onDeclined && r.onDeclined(C),
                        r.ignoreDeclined || (k = new Error("Aborted because of declined dependency: " + C.moduleId + " in " + C.parentId + j));
                        break;
                    case "unaccepted":
                        r.onUnaccepted && r.onUnaccepted(C),
                        r.ignoreUnaccepted || (k = new Error("Aborted because " + f + " is not accepted" + j));
                        break;
                    case "accepted":
                        r.onAccepted && r.onAccepted(C),
                        T = !0;
                        break;
                    case "disposed":
                        r.onDisposed && r.onDisposed(C),
                        F = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + C.type)
                    }
                    if (k)
                        return d("abort"),
                        Promise.reject(k);
                    if (T)
                        for (f in D[f] = h[f],
                        y(v, C.outdatedModules),
                        C.outdatedDependencies)
                            Object.prototype.hasOwnProperty.call(C.outdatedDependencies, f) && (b[f] || (b[f] = []),
                            y(b[f], C.outdatedDependencies[f]));
                    F && (y(v, [C.moduleId]),
                    D[f] = x)
                }
            var R, I = [];
            for (u = 0; u < v.length; u++)
                f = v[u],
                O[f] && O[f].hot._selfAccepted && D[f] !== x && !O[f].hot._selfInvalidated && I.push({
                    module: f,
                    parents: O[f].parents.slice(),
                    errorHandler: O[f].hot._selfAccepted
                });
            d("dispose"),
            Object.keys(w).forEach((function(e) {
                !1 === w[e] && function(e) {
                    delete installedChunks[e]
                }(e)
            }
            ));
            var N, B, P = v.slice();
            for (; P.length > 0; )
                if (f = P.pop(),
                l = O[f]) {
                    var L = {}
                      , M = l.hot._disposeHandlers;
                    for (c = 0; c < M.length; c++)
                        (a = M[c])(L);
                    for (i[f] = L,
                    l.hot.active = !1,
                    delete O[f],
                    delete b[f],
                    c = 0; c < l.children.length; c++) {
                        var U = O[l.children[c]];
                        U && ((R = U.parents.indexOf(f)) >= 0 && U.parents.splice(R, 1))
                    }
                }
            for (f in b)
                if (Object.prototype.hasOwnProperty.call(b, f) && (l = O[f]))
                    for (B = b[f],
                    c = 0; c < B.length; c++)
                        N = B[c],
                        (R = l.children.indexOf(N)) >= 0 && l.children.splice(R, 1);
            d("apply"),
            void 0 !== m && (o = m,
            m = void 0);
            for (f in h = void 0,
            D)
                Object.prototype.hasOwnProperty.call(D, f) && (e[f] = D[f]);
            var z = null;
            for (f in b)
                if (Object.prototype.hasOwnProperty.call(b, f) && (l = O[f])) {
                    B = b[f];
                    var $ = [];
                    for (u = 0; u < B.length; u++)
                        if (N = B[u],
                        a = l.hot._acceptedDependencies[N]) {
                            if (-1 !== $.indexOf(a))
                                continue;
                            $.push(a)
                        }
                    for (u = 0; u < $.length; u++) {
                        a = $[u];
                        try {
                            a(B)
                        } catch (e) {
                            r.onErrored && r.onErrored({
                                type: "accept-errored",
                                moduleId: f,
                                dependencyId: B[u],
                                error: e
                            }),
                            r.ignoreErrored || z || (z = e)
                        }
                    }
                }
            for (u = 0; u < I.length; u++) {
                var H = I[u];
                f = H.module,
                s = H.parents,
                n = f;
                try {
                    _(f)
                } catch (e) {
                    if ("function" == typeof H.errorHandler)
                        try {
                            H.errorHandler(e)
                        } catch (t) {
                            r.onErrored && r.onErrored({
                                type: "self-accept-error-handler-errored",
                                moduleId: f,
                                error: t,
                                originalError: e
                            }),
                            r.ignoreErrored || z || (z = t),
                            z || (z = e)
                        }
                    else
                        r.onErrored && r.onErrored({
                            type: "self-accept-errored",
                            moduleId: f,
                            error: e
                        }),
                        r.ignoreErrored || z || (z = e)
                }
            }
            if (z)
                return d("fail"),
                Promise.reject(z);
            if (g)
                return t(r).then((function(e) {
                    return v.forEach((function(t) {
                        e.indexOf(t) < 0 && e.push(t)
                    }
                    )),
                    e
                }
                ));
            return d("idle"),
            new Promise((function(e) {
                e(v)
            }
            ))
        }(t = t || {})
    }
    function S() {
        if (g)
            return h || (h = {}),
            g.forEach(T),
            g = void 0,
            !0
    }
    function T(t) {
        Object.prototype.hasOwnProperty.call(h, t) || (h[t] = e[t])
    }
    var O = {};
    function _(t) {
        if (O[t])
            return O[t].exports;
        var n = O[t] = {
            i: t,
            l: !1,
            exports: {},
            hot: c(t),
            parents: (a = s,
            s = [],
            a),
            children: []
        };
        return e[t].call(n.exports, n, n.exports, u(t)),
        n.l = !0,
        n.exports
    }
    _.m = e,
    _.c = O,
    _.d = function(e, t, n) {
        _.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    _.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    _.t = function(e, t) {
        if (1 & t && (e = _(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (_.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                _.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    _.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return _.d(t, "a", t),
        t
    }
    ,
    _.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    _.p = "",
    _.h = function() {
        return o
    }
    ,
    u("./src/genesys.js")(_.s = "./src/genesys.js")
}({
    "./includes/crossdomainstorage.js": function(e, t) {
        !function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 49)
        }([function(e, t, n) {
            (function(t) {
                var n = "object"
                  , r = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof t == n && t) || Function("return this")()
            }
            ).call(t, n(57))
        }
        , function(e, t, n) {
            var r = n(0)
              , o = n(24)
              , i = n(33)
              , s = n(65)
              , a = r.Symbol
              , u = o("wks");
            e.exports = function(e) {
                return u[e] || (u[e] = s && a[e] || (s ? a : i)("Symbol." + e))
            }
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(14)
              , i = n(15);
            e.exports = r ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
        }
        , function(e, t, n) {
            var r = n(5);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(String(e) + " is not an object");
                return e
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        }
        , function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(0)
              , o = n(35).f
              , i = n(36)
              , s = n(18)
              , a = n(28)
              , u = n(2)
              , c = n(6)
              , l = function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            };
            e.exports = function(e, t) {
                var n, f, d, p, h, m, g, y, b = e.target, v = e.global, D = e.stat, w = e.proto, E = v ? r : D ? r[b] : (r[b] || {}).prototype, x = v ? s : s[b] || (s[b] = {}), A = x.prototype;
                for (d in t)
                    n = !i(v ? d : b + (D ? "." : "#") + d, e.forced) && E && c(E, d),
                    h = x[d],
                    n && (m = e.noTargetGet ? (y = o(E, d)) && y.value : E[d]),
                    p = n && m ? m : t[d],
                    n && typeof h == typeof p || (g = e.bind && n ? a(p, r) : e.wrap && n ? l(p) : w && "function" == typeof p ? a(Function.call, p) : p,
                    (e.sham || p && p.sham || h && h.sham) && u(g, "sham", !0),
                    x[d] = g,
                    w && (c(s, f = b + "Prototype") || u(s, f, {}),
                    s[f][d] = p,
                    e.real && A && !A[d] && u(A, d, p)))
            }
        }
        , function(e, t, n) {
            var r = n(4);
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        }
        , function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(String(e) + " is not a function");
                return e
            }
        }
        , function(e, t) {
            e.exports = {}
        }
        , function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        }
        , function(e, t, n) {
            var r = n(18)
              , o = n(0)
              , i = function(e) {
                return "function" == typeof e ? e : void 0
            };
            e.exports = function(e, t) {
                return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(9)
              , o = function(e) {
                var t, n;
                this.promise = new e((function(e, r) {
                    if (void 0 !== t || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    t = e,
                    n = r
                }
                )),
                this.resolve = r(t),
                this.reject = r(n)
            };
            e.exports.f = function(e) {
                return new o(e)
            }
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(31)
              , i = n(3)
              , s = n(32)
              , a = Object.defineProperty;
            t.f = r ? a : function(e, t, n) {
                if (i(e),
                t = s(t, !0),
                i(n),
                o)
                    try {
                        return a(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported");
                return "value"in n && (e[t] = n.value),
                e
            }
        }
        , function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        }
        , function(e, t) {
            e.exports = !0
        }
        , function(e, t, n) {
            var r = n(61)
              , o = n(22);
            e.exports = function(e) {
                return r(o(e))
            }
        }
        , function(e, t) {
            e.exports = {}
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(81)
              , i = n(39)
              , s = n(28)
              , a = n(82)
              , u = n(83)
              , c = function(e, t) {
                this.stopped = e,
                this.result = t
            };
            (e.exports = function(e, t, n, l, f) {
                var d, p, h, m, g, y, b = s(t, n, l ? 2 : 1);
                if (f)
                    d = e;
                else {
                    if ("function" != typeof (p = a(e)))
                        throw TypeError("Target is not iterable");
                    if (o(p)) {
                        for (h = 0,
                        m = i(e.length); m > h; h++)
                            if ((g = l ? b(r(y = e[h])[0], y[1]) : b(e[h])) && g instanceof c)
                                return g;
                        return new c(!1)
                    }
                    d = p.call(e)
                }
                for (; !(y = d.next()).done; )
                    if ((g = u(d, b, y.value, l)) && g instanceof c)
                        return g;
                return new c(!1)
            }
            ).stop = function(e) {
                return new c(!0,e)
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                try {
                    return {
                        error: !1,
                        value: e()
                    }
                } catch (e) {
                    return {
                        error: !0,
                        value: e
                    }
                }
            }
        }
        , function(e, t) {
            var n = Math.ceil
              , r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                if (null == e)
                    throw TypeError("Can't call method on " + e);
                return e
            }
        }
        , function(e, t, n) {
            var r, o, i, s = n(56), a = n(0), u = n(5), c = n(2), l = n(6), f = n(26), d = n(27), p = a.WeakMap;
            if (s) {
                var h = new p
                  , m = h.get
                  , g = h.has
                  , y = h.set;
                r = function(e, t) {
                    return y.call(h, e, t),
                    t
                }
                ,
                o = function(e) {
                    return m.call(h, e) || {}
                }
                ,
                i = function(e) {
                    return g.call(h, e)
                }
            } else {
                var b = f("state");
                d[b] = !0,
                r = function(e, t) {
                    return c(e, b, t),
                    t
                }
                ,
                o = function(e) {
                    return l(e, b) ? e[b] : {}
                }
                ,
                i = function(e) {
                    return l(e, b)
                }
            }
            e.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function(e) {
                    return i(e) ? o(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!u(t) || (n = o(t)).type !== e)
                            throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        }
        , function(e, t, n) {
            var r = n(0)
              , o = n(59)
              , i = n(16)
              , s = r["__core-js_shared__"] || o("__core-js_shared__", {});
            (e.exports = function(e, t) {
                return s[e] || (s[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: "3.1.3",
                mode: i ? "pure" : "global",
                copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
            })
        }
        , function(e, t, n) {
            var r = n(0)
              , o = n(5)
              , i = r.document
              , s = o(i) && o(i.createElement);
            e.exports = function(e) {
                return s ? i.createElement(e) : {}
            }
        }
        , function(e, t, n) {
            var r = n(24)
              , o = n(33)
              , i = r("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = o(e))
            }
        }
        , function(e, t) {
            e.exports = {}
        }
        , function(e, t, n) {
            var r = n(9);
            e.exports = function(e, t, n) {
                if (r(e),
                void 0 === t)
                    return e;
                switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    }
                    ;
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    }
                    ;
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    }
                    ;
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(63)
              , i = n(26)
              , s = n(64)
              , a = i("IE_PROTO")
              , u = Object.prototype;
            e.exports = s ? Object.getPrototypeOf : function(e) {
                return e = o(e),
                r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
            }
        }
        , function(e, t, n) {
            var r = n(14).f
              , o = n(2)
              , i = n(6)
              , s = n(71)
              , a = n(1)("toStringTag")
              , u = s !== {}.toString;
            e.exports = function(e, t, n, c) {
                if (e) {
                    var l = n ? e : e.prototype;
                    i(l, a) || r(l, a, {
                        configurable: !0,
                        value: t
                    }),
                    c && u && o(l, "toString", s)
                }
            }
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(4)
              , i = n(25);
            e.exports = !r && !o((function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        }
        , function(e, t, n) {
            var r = n(5);
            e.exports = function(e, t) {
                if (!r(e))
                    return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
                    return o;
                if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                    return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        , function(e, t) {
            var n = 0
              , r = Math.random();
            e.exports = function(e) {
                return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7)
              , o = n(62)
              , i = n(29)
              , s = n(43)
              , a = n(30)
              , u = n(2)
              , c = n(44)
              , l = n(1)
              , f = n(16)
              , d = n(10)
              , p = n(37)
              , h = p.IteratorPrototype
              , m = p.BUGGY_SAFARI_ITERATORS
              , g = l("iterator")
              , y = function() {
                return this
            };
            e.exports = function(e, t, n, l, p, b, v) {
                o(n, t, l);
                var D, w, E, x = function(e) {
                    if (e === p && T)
                        return T;
                    if (!m && e in k)
                        return k[e];
                    switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new n(this,e)
                        }
                    }
                    return function() {
                        return new n(this)
                    }
                }, A = t + " Iterator", C = !1, k = e.prototype, S = k[g] || k["@@iterator"] || p && k[p], T = !m && S || x(p), O = "Array" == t && k.entries || S;
                if (O && (D = i(O.call(new e)),
                h !== Object.prototype && D.next && (f || i(D) === h || (s ? s(D, h) : "function" != typeof D[g] && u(D, g, y)),
                a(D, A, !0, !0),
                f && (d[A] = y))),
                "values" == p && S && "values" !== S.name && (C = !0,
                T = function() {
                    return S.call(this)
                }
                ),
                f && !v || k[g] === T || u(k, g, T),
                d[t] = T,
                p)
                    if (w = {
                        values: x("values"),
                        keys: b ? T : x("keys"),
                        entries: x("entries")
                    },
                    v)
                        for (E in w)
                            (m || C || !(E in k)) && c(k, E, w[E]);
                    else
                        r({
                            target: t,
                            proto: !0,
                            forced: m || C
                        }, w);
                return w
            }
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(60)
              , i = n(15)
              , s = n(17)
              , a = n(32)
              , u = n(6)
              , c = n(31)
              , l = Object.getOwnPropertyDescriptor;
            t.f = r ? l : function(e, t) {
                if (e = s(e),
                t = a(t, !0),
                c)
                    try {
                        return l(e, t)
                    } catch (e) {}
                if (u(e, t))
                    return i(!o.f.call(e, t), e[t])
            }
        }
        , function(e, t, n) {
            var r = n(4)
              , o = /#|\.prototype\./
              , i = function(e, t) {
                var n = a[s(e)];
                return n == c || n != u && ("function" == typeof t ? r(t) : !!t)
            }
              , s = i.normalize = function(e) {
                return String(e).replace(o, ".").toLowerCase()
            }
              , a = i.data = {}
              , u = i.NATIVE = "N"
              , c = i.POLYFILL = "P";
            e.exports = i
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i, s = n(29), a = n(2), u = n(6), c = n(1), l = n(16), f = c("iterator"), d = !1;
            [].keys && ("next"in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : d = !0),
            null == r && (r = {}),
            l || u(r, f) || a(r, f, (function() {
                return this
            }
            )),
            e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: d
            }
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(66)
              , i = n(40)
              , s = n(27)
              , a = n(41)
              , u = n(25)
              , c = n(26)("IE_PROTO")
              , l = function() {}
              , f = function() {
                var e, t = u("iframe"), n = i.length;
                for (t.style.display = "none",
                a.appendChild(t),
                t.src = String("javascript:"),
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object<\/script>"),
                e.close(),
                f = e.F; n--; )
                    delete f.prototype[i[n]];
                return f()
            };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (l.prototype = r(e),
                n = new l,
                l.prototype = null,
                n[c] = e) : n = f(),
                void 0 === t ? n : o(n, t)
            }
            ,
            s[c] = !0
        }
        , function(e, t, n) {
            var r = n(21)
              , o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        }
        , function(e, t) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        , function(e, t, n) {
            var r = n(12);
            e.exports = r("document", "documentElement")
        }
        , function(e, t, n) {
            var r = n(11)
              , o = n(1)("toStringTag")
              , i = "Arguments" == r(function() {
                return arguments
            }());
            e.exports = function(e) {
                var t, n, s;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
            }
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(72);
            e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                var e, t = !1, n = {};
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                    t = n instanceof Array
                } catch (e) {}
                return function(n, i) {
                    return r(n),
                    o(i),
                    t ? e.call(n, i) : n.__proto__ = i,
                    n
                }
            }() : void 0)
        }
        , function(e, t, n) {
            var r = n(2);
            e.exports = function(e, t, n, o) {
                o && o.enumerable ? e[t] = n : r(e, t, n)
            }
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(9)
              , i = n(1)("species");
            e.exports = function(e, t) {
                var n, s = r(e).constructor;
                return void 0 === s || null == (n = r(s)[i]) ? t : o(n)
            }
        }
        , function(e, t, n) {
            var r, o, i, s = n(0), a = n(4), u = n(11), c = n(28), l = n(41), f = n(25), d = s.location, p = s.setImmediate, h = s.clearImmediate, m = s.process, g = s.MessageChannel, y = s.Dispatch, b = 0, v = {}, D = function(e) {
                if (v.hasOwnProperty(e)) {
                    var t = v[e];
                    delete v[e],
                    t()
                }
            }, w = function(e) {
                return function() {
                    D(e)
                }
            }, E = function(e) {
                D(e.data)
            }, x = function(e) {
                s.postMessage(e + "", d.protocol + "//" + d.host)
            };
            p && h || (p = function(e) {
                for (var t = [], n = 1; arguments.length > n; )
                    t.push(arguments[n++]);
                return v[++b] = function() {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, t)
                }
                ,
                r(b),
                b
            }
            ,
            h = function(e) {
                delete v[e]
            }
            ,
            "process" == u(m) ? r = function(e) {
                m.nextTick(w(e))
            }
            : y && y.now ? r = function(e) {
                y.now(w(e))
            }
            : g ? (i = (o = new g).port2,
            o.port1.onmessage = E,
            r = c(i.postMessage, i, 1)) : !s.addEventListener || "function" != typeof postMessage || s.importScripts || a(x) ? r = "onreadystatechange"in f("script") ? function(e) {
                l.appendChild(f("script")).onreadystatechange = function() {
                    l.removeChild(this),
                    D(e)
                }
            }
            : function(e) {
                setTimeout(w(e), 0)
            }
            : (r = x,
            s.addEventListener("message", E, !1))),
            e.exports = {
                set: p,
                clear: h
            }
        }
        , function(e, t, n) {
            var r = n(12);
            e.exports = r("navigator", "userAgent") || ""
        }
        , function(e, t, n) {
            var r = n(3)
              , o = n(5)
              , i = n(13);
            e.exports = function(e, t) {
                if (r(e),
                o(t) && t.constructor === e)
                    return t;
                var n = i.f(e);
                return (0,
                n.resolve)(t),
                n.promise
            }
        }
        , function(e, t, n) {
            const {setupStorage: r, setupStorageClient: o} = n(50);
            window.setupStorageClient = o,
            window.setupStorage = r
        }
        , function(e, t, n) {
            const r = n(51)
              , o = "_genesysEvt:STORE"
              , i = "_genesysEvt:STORE_RESULT"
              , s = /^(http|https):\/\/[^/]+/
              , a = "_genesysEvt:INIT";
            function u(e) {
                let {origin: t, key: n} = e;
                return "" + n
            }
            e.exports = {
                setupStorage: function(e) {
                    function t(e) {
                        let {accessors: t, origin: n, crossDomainOrigin: r} = e;
                        for (let e = 0; e < t.length; e++) {
                            if (t[e] === r)
                                return n
                        }
                        return null
                    }
                    window.addEventListener("message", async e => {
                        const {origin: n, source: r, data: s} = e
                          , {type: a, crossDomainOrigin: c, accessors: l, key: f, value: d, ttl: p, requestId: h} = s;
                        if (a === o)
                            try {
                                await async function(e, t) {
                                    let {source: n, accessors: r, ttl: o, key: s, value: a, requestId: c} = t;
                                    if ("string" != typeof s)
                                        throw new Error("key must be a string");
                                    const l = u({
                                        origin: e,
                                        key: s
                                    });
                                    r instanceof Array || (r = []);
                                    r = r.filter(e => "string" == typeof e ? e : void 0),
                                    e in r || r.push(e);
                                    const f = o ? Date.now() + o : null;
                                    window.localStorage.setItem(l, JSON.stringify({
                                        accessors: r,
                                        origin: e,
                                        requestId: c,
                                        expiresAt: f,
                                        value: a
                                    })),
                                    n.postMessage({
                                        type: i,
                                        requestId: c,
                                        expiresAt: f,
                                        storageKey: l,
                                        key: s,
                                        success: !0
                                    }, e)
                                }(n, {
                                    source: r,
                                    accessors: l,
                                    ttl: p,
                                    key: f,
                                    value: d,
                                    requestId: h
                                })
                            } catch (e) {
                                r.postMessage({
                                    type: i,
                                    requestId: h,
                                    err: e.message,
                                    success: !1
                                }, n)
                            }
                        else if ("_genesysEvt:RETRIEVE" === a)
                            try {
                                await async function(e, n) {
                                    let {crossDomainOrigin: r, source: o, key: i, requestId: s} = n;
                                    const a = u({
                                        origin: r || e,
                                        key: i
                                    })
                                      , c = window.localStorage.getItem(a);
                                    if (!c)
                                        throw new Error(i + " not found");
                                    const {accessors: l, expiresAt: f, value: d} = JSON.parse(c)
                                      , p = t({
                                        accessors: l,
                                        origin: e,
                                        crossDomainOrigin: r
                                    });
                                    if (!p)
                                        throw new Error(i + " not found");
                                    if (f && Date.now() > f)
                                        throw window.localStorage.removeItem(a),
                                        new Error(i + " not found");
                                    return o.postMessage({
                                        success: !0,
                                        type: "_genesysEvt:RETRIEVE_RESULT",
                                        key: i,
                                        value: d,
                                        requestId: s
                                    }, p)
                                }(n, {
                                    crossDomainOrigin: c,
                                    source: r,
                                    key: f,
                                    requestId: h
                                })
                            } catch (e) {
                                r.postMessage({
                                    type: "_genesysEvt:RETRIEVE_RESULT",
                                    requestId: h,
                                    err: e.message,
                                    success: !1
                                }, n)
                            }
                        else if ("_genesysEvt:REMOVE" === a)
                            try {
                                await async function(e, n) {
                                    let {crossDomainOrigin: r, source: o, key: i, requestId: s} = n;
                                    const a = u({
                                        origin: r || e,
                                        key: i
                                    })
                                      , c = JSON.parse(localStorage.getItem(a));
                                    if (!c)
                                        throw new Error(i + " not found");
                                    const {accessors: l} = c
                                      , f = t({
                                        accessors: l,
                                        origin: e,
                                        crossDomainOrigin: r
                                    });
                                    if (!f)
                                        throw new Error(`grant: ${i} not found`);
                                    return window.localStorage.removeItem(a),
                                    o.postMessage({
                                        type: "_genesysEvt:REMOVE_RESULT",
                                        success: !0,
                                        requestId: s
                                    }, f)
                                }(n, {
                                    crossDomainOrigin: c,
                                    source: r,
                                    key: f,
                                    requestId: h
                                })
                            } catch (e) {
                                r.postMessage({
                                    type: "_genesysEvt:REMOVE_RESULT",
                                    requestId: h,
                                    err: e.message,
                                    success: !1
                                }, n)
                            }
                    }
                    ),
                    window.parent.postMessage({
                        type: a,
                        success: !0,
                        frameHref: window.location.href
                    }, "*")
                },
                setupStorageClient: function(e) {
                    let {frame: t, targetUrl: n} = e;
                    const u = {};
                    if (!(t instanceof window.HTMLElement) && n) {
                        t = document.createElement("iframe"),
                        t.setAttribute("src", n),
                        t.setAttribute("width", 0),
                        t.setAttribute("height", 0),
                        t.setAttribute("style", "display: none; border: 0;"),
                        t.setAttribute("sandbox", "allow-scripts allow-same-origin");
                        const e = document.getElementsByTagName("body")[0];
                        e && e.appendChild(t)
                    }
                    const c = t.getAttribute("src")
                      , [l] = c.match(s);
                    window.addEventListener("message", e => {
                        const {origin: n, data: r, source: o} = e
                          , {type: s, success: u, value: c, requestId: l, err: f} = r;
                        o === t.contentWindow && (s === i && h({
                            origin: n,
                            success: u,
                            err: f,
                            requestId: l
                        }),
                        "_genesysEvt:RETRIEVE_RESULT" === s && h({
                            origin: n,
                            success: u,
                            err: f,
                            requestId: l,
                            value: c
                        }),
                        "_genesysEvt:REMOVE_RESULT" === s && h({
                            origin: n,
                            success: u,
                            err: f,
                            requestId: l
                        }),
                        s === a && h({
                            origin: n,
                            success: u,
                            err: f,
                            requestId: a
                        }))
                    }
                    );
                    let f = 0;
                    function d() {
                        return f++
                    }
                    function p(e, t) {
                        return `${e}:::${t}`
                    }
                    function h(e) {
                        let {origin: t, success: n, requestId: r, err: o, value: i} = e;
                        const s = p(t, r)
                          , a = u[s];
                        delete u[s],
                        a && a({
                            success: n,
                            err: o,
                            value: i
                        })
                    }
                    function m(e) {
                        return new r( (t, n) => {
                            const r = p(l, e);
                            u[r] = e => {
                                let {success: r, err: o, value: i} = e;
                                return r ? t(i) : n(new Error(o))
                            }
                        }
                        )
                    }
                    function g(e, n) {
                        const r = d()
                          , o = m(r);
                        return t.contentWindow.postMessage({
                            type: "_genesysEvt:REMOVE",
                            key: e,
                            requestId: r,
                            crossDomainOrigin: n
                        }, l),
                        o
                    }
                    function y(e, n) {
                        const r = d()
                          , o = m(r);
                        return t.contentWindow.postMessage({
                            type: "_genesysEvt:RETRIEVE",
                            crossDomainOrigin: n,
                            key: e,
                            requestId: r
                        }, l),
                        o
                    }
                    return {
                        store: async function(e) {
                            let {accessors: n, ttl: r, key: i, value: s} = e;
                            const a = d()
                              , u = m(a);
                            return t.contentWindow.postMessage({
                                type: o,
                                key: i,
                                value: s,
                                accessors: n,
                                ttl: r,
                                requestId: a
                            }, l),
                            u
                        },
                        retrieve: async function(e) {
                            let {key: t, crossDomainOrigin: n} = e;
                            const r = n ? n.split("|") : [void 0];
                            let o;
                            for (let e of r)
                                try {
                                    return await y(t, e)
                                } catch (e) {
                                    o = e;
                                    continue
                                }
                            throw o
                        },
                        remove: async function(e) {
                            let {key: t, crossDomainOrigin: n} = e;
                            const r = n ? n.split("|") : [void 0];
                            let o;
                            for (let e of r)
                                try {
                                    return await g(t, e)
                                } catch (e) {
                                    o = e;
                                    continue
                                }
                            throw o
                        },
                        init: async function() {
                            return await m(a),
                            this
                        }
                    }
                }
            }
        }
        , function(e, t, n) {
            e.exports = n(52),
            n(88),
            n(89),
            n(90),
            n(91)
        }
        , function(e, t, n) {
            n(53),
            n(54),
            n(73),
            n(77),
            n(87);
            var r = n(18);
            e.exports = r.Promise
        }
        , function(e, t) {}
        , function(e, t, n) {
            "use strict";
            var r = n(55).charAt
              , o = n(23)
              , i = n(34)
              , s = o.set
              , a = o.getterFor("String Iterator");
            i(String, "String", (function(e) {
                s(this, {
                    type: "String Iterator",
                    string: String(e),
                    index: 0
                })
            }
            ), (function() {
                var e, t = a(this), n = t.string, o = t.index;
                return o >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(n, o),
                t.index += e.length,
                {
                    value: e,
                    done: !1
                })
            }
            ))
        }
        , function(e, t, n) {
            var r = n(21)
              , o = n(22)
              , i = function(e) {
                return function(t, n) {
                    var i, s, a = String(o(t)), u = r(n), c = a.length;
                    return u < 0 || u >= c ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
                }
            };
            e.exports = {
                codeAt: i(!1),
                charAt: i(!0)
            }
        }
        , function(e, t, n) {
            var r = n(0)
              , o = n(58)
              , i = r.WeakMap;
            e.exports = "function" == typeof i && /native code/.test(o.call(i))
        }
        , function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0,
                eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
        , function(e, t, n) {
            var r = n(24);
            e.exports = r("native-function-to-string", Function.toString)
        }
        , function(e, t, n) {
            var r = n(0)
              , o = n(2);
            e.exports = function(e, t) {
                try {
                    o(r, e, t)
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = {}.propertyIsEnumerable
              , o = Object.getOwnPropertyDescriptor
              , i = o && !r.call({
                1: 2
            }, 1);
            t.f = i ? function(e) {
                var t = o(this, e);
                return !!t && t.enumerable
            }
            : r
        }
        , function(e, t, n) {
            var r = n(4)
              , o = n(11)
              , i = "".split;
            e.exports = r((function() {
                return !Object("z").propertyIsEnumerable(0)
            }
            )) ? function(e) {
                return "String" == o(e) ? i.call(e, "") : Object(e)
            }
            : Object
        }
        , function(e, t, n) {
            "use strict";
            var r = n(37).IteratorPrototype
              , o = n(38)
              , i = n(15)
              , s = n(30)
              , a = n(10)
              , u = function() {
                return this
            };
            e.exports = function(e, t, n) {
                var c = t + " Iterator";
                return e.prototype = o(r, {
                    next: i(1, n)
                }),
                s(e, c, !1, !0),
                a[c] = u,
                e
            }
        }
        , function(e, t, n) {
            var r = n(22);
            e.exports = function(e) {
                return Object(r(e))
            }
        }
        , function(e, t, n) {
            var r = n(4);
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null,
                Object.getPrototypeOf(new e) !== e.prototype
            }
            ))
        }
        , function(e, t, n) {
            var r = n(4);
            e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                return !String(Symbol())
            }
            ))
        }
        , function(e, t, n) {
            var r = n(8)
              , o = n(14)
              , i = n(3)
              , s = n(67);
            e.exports = r ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, r = s(t), a = r.length, u = 0; a > u; )
                    o.f(e, n = r[u++], t[n]);
                return e
            }
        }
        , function(e, t, n) {
            var r = n(68)
              , o = n(40);
            e.exports = Object.keys || function(e) {
                return r(e, o)
            }
        }
        , function(e, t, n) {
            var r = n(6)
              , o = n(17)
              , i = n(69).indexOf
              , s = n(27);
            e.exports = function(e, t) {
                var n, a = o(e), u = 0, c = [];
                for (n in a)
                    !r(s, n) && r(a, n) && c.push(n);
                for (; t.length > u; )
                    r(a, n = t[u++]) && (~i(c, n) || c.push(n));
                return c
            }
        }
        , function(e, t, n) {
            var r = n(17)
              , o = n(39)
              , i = n(70)
              , s = function(e) {
                return function(t, n, s) {
                    var a, u = r(t), c = o(u.length), l = i(s, c);
                    if (e && n != n) {
                        for (; c > l; )
                            if ((a = u[l++]) != a)
                                return !0
                    } else
                        for (; c > l; l++)
                            if ((e || l in u) && u[l] === n)
                                return e || l || 0;
                    return !e && -1
                }
            };
            e.exports = {
                includes: s(!0),
                indexOf: s(!1)
            }
        }
        , function(e, t, n) {
            var r = n(21)
              , o = Math.max
              , i = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : i(n, t)
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(42)
              , o = {};
            o[n(1)("toStringTag")] = "z",
            e.exports = "[object z]" !== String(o) ? function() {
                return "[object " + r(this) + "]"
            }
            : o.toString
        }
        , function(e, t, n) {
            var r = n(5);
            e.exports = function(e) {
                if (!r(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype");
                return e
            }
        }
        , function(e, t, n) {
            n(74);
            var r = n(76)
              , o = n(0)
              , i = n(2)
              , s = n(10)
              , a = n(1)("toStringTag");
            for (var u in r) {
                var c = o[u]
                  , l = c && c.prototype;
                l && !l[a] && i(l, a, u),
                s[u] = s.Array
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(17)
              , o = n(75)
              , i = n(10)
              , s = n(23)
              , a = n(34)
              , u = s.set
              , c = s.getterFor("Array Iterator");
            e.exports = a(Array, "Array", (function(e, t) {
                u(this, {
                    type: "Array Iterator",
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }
            ), (function() {
                var e = c(this)
                  , t = e.target
                  , n = e.kind
                  , r = e.index++;
                return !t || r >= t.length ? (e.target = void 0,
                {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: t[r],
                    done: !1
                } : {
                    value: [r, t[r]],
                    done: !1
                }
            }
            ), "values"),
            i.Arguments = i.Array,
            o("keys"),
            o("values"),
            o("entries")
        }
        , function(e, t) {
            e.exports = function() {}
        }
        , function(e, t) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }
        , function(e, t, n) {
            "use strict";
            var r, o, i, s = n(7), a = n(16), u = n(0), c = n(18), l = n(78), f = n(30), d = n(79), p = n(5), h = n(9), m = n(80), g = n(11), y = n(19), b = n(84), v = n(45), D = n(46).set, w = n(85), E = n(48), x = n(86), A = n(13), C = n(20), k = n(47), S = n(23), T = n(36), O = n(1)("species"), _ = "Promise", F = S.get, j = S.set, R = S.getterFor(_), I = u[_], N = u.TypeError, B = u.document, P = u.process, L = u.fetch, M = P && P.versions, U = M && M.v8 || "", z = A.f, $ = z, H = "process" == g(P), G = !!(B && B.createEvent && u.dispatchEvent), q = T(_, (function() {
                var e = I.resolve(1)
                  , t = function() {}
                  , n = (e.constructor = {})[O] = function(e) {
                    e(t, t)
                }
                ;
                return !((H || "function" == typeof PromiseRejectionEvent) && (!a || e.finally) && e.then(t)instanceof n && 0 !== U.indexOf("6.6") && -1 === k.indexOf("Chrome/66"))
            }
            )), J = q || !b((function(e) {
                I.all(e).catch((function() {}
                ))
            }
            )), V = function(e) {
                var t;
                return !(!p(e) || "function" != typeof (t = e.then)) && t
            }, Y = function(e, t, n) {
                if (!t.notified) {
                    t.notified = !0;
                    var r = t.reactions;
                    w((function() {
                        for (var o = t.value, i = 1 == t.state, s = 0; r.length > s; ) {
                            var a, u, c, l = r[s++], f = i ? l.ok : l.fail, d = l.resolve, p = l.reject, h = l.domain;
                            try {
                                f ? (i || (2 === t.rejection && K(e, t),
                                t.rejection = 1),
                                !0 === f ? a = o : (h && h.enter(),
                                a = f(o),
                                h && (h.exit(),
                                c = !0)),
                                a === l.promise ? p(N("Promise-chain cycle")) : (u = V(a)) ? u.call(a, d, p) : d(a)) : p(o)
                            } catch (e) {
                                h && !c && h.exit(),
                                p(e)
                            }
                        }
                        t.reactions = [],
                        t.notified = !1,
                        n && !t.rejection && X(e, t)
                    }
                    ))
                }
            }, W = function(e, t, n) {
                var r, o;
                G ? ((r = B.createEvent("Event")).promise = t,
                r.reason = n,
                r.initEvent(e, !1, !0),
                u.dispatchEvent(r)) : r = {
                    promise: t,
                    reason: n
                },
                (o = u["on" + e]) ? o(r) : "unhandledrejection" === e && x("Unhandled promise rejection", n)
            }, X = function(e, t) {
                D.call(u, (function() {
                    var n, r = t.value;
                    if (Z(t) && (n = C((function() {
                        H ? P.emit("unhandledRejection", r, e) : W("unhandledrejection", e, r)
                    }
                    )),
                    t.rejection = H || Z(t) ? 2 : 1,
                    n.error))
                        throw n.value
                }
                ))
            }, Z = function(e) {
                return 1 !== e.rejection && !e.parent
            }, K = function(e, t) {
                D.call(u, (function() {
                    H ? P.emit("rejectionHandled", e) : W("rejectionhandled", e, t.value)
                }
                ))
            }, Q = function(e, t, n, r) {
                return function(o) {
                    e(t, n, o, r)
                }
            }, ee = function(e, t, n, r) {
                t.done || (t.done = !0,
                r && (t = r),
                t.value = n,
                t.state = 2,
                Y(e, t, !0))
            }, te = function(e, t, n, r) {
                if (!t.done) {
                    t.done = !0,
                    r && (t = r);
                    try {
                        if (e === n)
                            throw N("Promise can't be resolved itself");
                        var o = V(n);
                        o ? w((function() {
                            var r = {
                                done: !1
                            };
                            try {
                                o.call(n, Q(te, e, r, t), Q(ee, e, r, t))
                            } catch (n) {
                                ee(e, r, n, t)
                            }
                        }
                        )) : (t.value = n,
                        t.state = 1,
                        Y(e, t, !1))
                    } catch (n) {
                        ee(e, {
                            done: !1
                        }, n, t)
                    }
                }
            };
            q && (I = function(e) {
                m(this, I, _),
                h(e),
                r.call(this);
                var t = F(this);
                try {
                    e(Q(te, this, t), Q(ee, this, t))
                } catch (e) {
                    ee(this, t, e)
                }
            }
            ,
            (r = function(e) {
                j(this, {
                    type: _,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }
            ).prototype = l(I.prototype, {
                then: function(e, t) {
                    var n = R(this)
                      , r = z(v(this, I));
                    return r.ok = "function" != typeof e || e,
                    r.fail = "function" == typeof t && t,
                    r.domain = H ? P.domain : void 0,
                    n.parent = !0,
                    n.reactions.push(r),
                    0 != n.state && Y(this, n, !1),
                    r.promise
                },
                catch: function(e) {
                    return this.then(void 0, e)
                }
            }),
            o = function() {
                var e = new r
                  , t = F(e);
                this.promise = e,
                this.resolve = Q(te, e, t),
                this.reject = Q(ee, e, t)
            }
            ,
            A.f = z = function(e) {
                return e === I || e === i ? new o(e) : $(e)
            }
            ,
            a || "function" != typeof L || s({
                global: !0,
                enumerable: !0,
                forced: !0
            }, {
                fetch: function(e) {
                    return E(I, L.apply(u, arguments))
                }
            })),
            s({
                global: !0,
                wrap: !0,
                forced: q
            }, {
                Promise: I
            }),
            f(I, _, !1, !0),
            d(_),
            i = c[_],
            s({
                target: _,
                stat: !0,
                forced: q
            }, {
                reject: function(e) {
                    var t = z(this);
                    return t.reject.call(void 0, e),
                    t.promise
                }
            }),
            s({
                target: _,
                stat: !0,
                forced: a || q
            }, {
                resolve: function(e) {
                    return E(a && this === i ? I : this, e)
                }
            }),
            s({
                target: _,
                stat: !0,
                forced: J
            }, {
                all: function(e) {
                    var t = this
                      , n = z(t)
                      , r = n.resolve
                      , o = n.reject
                      , i = C((function() {
                        var n = h(t.resolve)
                          , i = []
                          , s = 0
                          , a = 1;
                        y(e, (function(e) {
                            var u = s++
                              , c = !1;
                            i.push(void 0),
                            a++,
                            n.call(t, e).then((function(e) {
                                c || (c = !0,
                                i[u] = e,
                                --a || r(i))
                            }
                            ), o)
                        }
                        )),
                        --a || r(i)
                    }
                    ));
                    return i.error && o(i.value),
                    n.promise
                },
                race: function(e) {
                    var t = this
                      , n = z(t)
                      , r = n.reject
                      , o = C((function() {
                        var o = h(t.resolve);
                        y(e, (function(e) {
                            o.call(t, e).then(n.resolve, r)
                        }
                        ))
                    }
                    ));
                    return o.error && r(o.value),
                    n.promise
                }
            })
        }
        , function(e, t, n) {
            var r = n(44);
            e.exports = function(e, t, n) {
                for (var o in t)
                    n && n.unsafe && e[o] ? e[o] = t[o] : r(e, o, t[o], n);
                return e
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(12)
              , o = n(14)
              , i = n(1)
              , s = n(8)
              , a = i("species");
            e.exports = function(e) {
                var t = r(e)
                  , n = o.f;
                s && t && !t[a] && n(t, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }
        , function(e, t) {
            e.exports = function(e, t, n) {
                if (!(e instanceof t))
                    throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                return e
            }
        }
        , function(e, t, n) {
            var r = n(1)
              , o = n(10)
              , i = r("iterator")
              , s = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || s[i] === e)
            }
        }
        , function(e, t, n) {
            var r = n(42)
              , o = n(10)
              , i = n(1)("iterator");
            e.exports = function(e) {
                if (null != e)
                    return e[i] || e["@@iterator"] || o[r(e)]
            }
        }
        , function(e, t, n) {
            var r = n(3);
            e.exports = function(e, t, n, o) {
                try {
                    return o ? t(r(n)[0], n[1]) : t(n)
                } catch (t) {
                    var i = e.return;
                    throw void 0 !== i && r(i.call(e)),
                    t
                }
            }
        }
        , function(e, t, n) {
            var r = n(1)("iterator")
              , o = !1;
            try {
                var i = 0
                  , s = {
                    next: function() {
                        return {
                            done: !!i++
                        }
                    },
                    return: function() {
                        o = !0
                    }
                };
                s[r] = function() {
                    return this
                }
                ,
                Array.from(s, (function() {
                    throw 2
                }
                ))
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !o)
                    return !1;
                var n = !1;
                try {
                    var i = {};
                    i[r] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }
                    ,
                    e(i)
                } catch (e) {}
                return n
            }
        }
        , function(e, t, n) {
            var r, o, i, s, a, u, c, l = n(0), f = n(35).f, d = n(11), p = n(46).set, h = n(47), m = l.MutationObserver || l.WebKitMutationObserver, g = l.process, y = l.Promise, b = "process" == d(g), v = f(l, "queueMicrotask"), D = v && v.value;
            D || (r = function() {
                var e, t;
                for (b && (e = g.domain) && e.exit(); o; ) {
                    t = o.fn,
                    o = o.next;
                    try {
                        t()
                    } catch (e) {
                        throw o ? s() : i = void 0,
                        e
                    }
                }
                i = void 0,
                e && e.enter()
            }
            ,
            b ? s = function() {
                g.nextTick(r)
            }
            : m && !/(iphone|ipod|ipad).*applewebkit/i.test(h) ? (a = !0,
            u = document.createTextNode(""),
            new m(r).observe(u, {
                characterData: !0
            }),
            s = function() {
                u.data = a = !a
            }
            ) : y && y.resolve ? (c = y.resolve(void 0),
            s = function() {
                c.then(r)
            }
            ) : s = function() {
                p.call(l, r)
            }
            ),
            e.exports = D || function(e) {
                var t = {
                    fn: e,
                    next: void 0
                };
                i && (i.next = t),
                o || (o = t,
                s()),
                i = t
            }
        }
        , function(e, t, n) {
            var r = n(0);
            e.exports = function(e, t) {
                var n = r.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7)
              , o = n(12)
              , i = n(45)
              , s = n(48);
            r({
                target: "Promise",
                proto: !0,
                real: !0
            }, {
                finally: function(e) {
                    var t = i(this, o("Promise"))
                      , n = "function" == typeof e;
                    return this.then(n ? function(n) {
                        return s(t, e()).then((function() {
                            return n
                        }
                        ))
                    }
                    : e, n ? function(n) {
                        return s(t, e()).then((function() {
                            throw n
                        }
                        ))
                    }
                    : e)
                }
            })
        }
        , function(e, t, n) {
            var r = n(7)
              , o = n(29)
              , i = n(43)
              , s = n(38)
              , a = n(15)
              , u = n(19)
              , c = n(2)
              , l = function(e, t) {
                var n = this;
                if (!(n instanceof l))
                    return new l(e,t);
                i && (n = i(new Error(t), o(n)));
                var r = [];
                return u(e, r.push, r),
                n.errors = r,
                void 0 !== t && c(n, "message", String(t)),
                n
            };
            l.prototype = s(Error.prototype, {
                constructor: a(5, l),
                name: a(5, "AggregateError")
            }),
            r({
                global: !0
            }, {
                AggregateError: l
            })
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7)
              , o = n(9)
              , i = n(13)
              , s = n(20)
              , a = n(19);
            r({
                target: "Promise",
                stat: !0
            }, {
                allSettled: function(e) {
                    var t = this
                      , n = i.f(t)
                      , r = n.resolve
                      , u = n.reject
                      , c = s((function() {
                        var n = o(t.resolve)
                          , i = []
                          , s = 0
                          , u = 1;
                        a(e, (function(e) {
                            var o = s++
                              , a = !1;
                            i.push(void 0),
                            u++,
                            n.call(t, e).then((function(e) {
                                a || (a = !0,
                                i[o] = {
                                    status: "fulfilled",
                                    value: e
                                },
                                --u || r(i))
                            }
                            ), (function(e) {
                                a || (a = !0,
                                i[o] = {
                                    status: "rejected",
                                    reason: e
                                },
                                --u || r(i))
                            }
                            ))
                        }
                        )),
                        --u || r(i)
                    }
                    ));
                    return c.error && u(c.value),
                    n.promise
                }
            })
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7)
              , o = n(13)
              , i = n(20);
            r({
                target: "Promise",
                stat: !0
            }, {
                try: function(e) {
                    var t = o.f(this)
                      , n = i(e);
                    return (n.error ? t.reject : t.resolve)(n.value),
                    t.promise
                }
            })
        }
        , function(e, t, n) {
            "use strict";
            var r = n(7)
              , o = n(9)
              , i = n(12)
              , s = n(13)
              , a = n(20)
              , u = n(19);
            r({
                target: "Promise",
                stat: !0
            }, {
                any: function(e) {
                    var t = this
                      , n = s.f(t)
                      , r = n.resolve
                      , c = n.reject
                      , l = a((function() {
                        var n = o(t.resolve)
                          , s = []
                          , a = 0
                          , l = 1
                          , f = !1;
                        u(e, (function(e) {
                            var o = a++
                              , u = !1;
                            s.push(void 0),
                            l++,
                            n.call(t, e).then((function(e) {
                                u || f || (f = !0,
                                r(e))
                            }
                            ), (function(e) {
                                u || f || (u = !0,
                                s[o] = e,
                                --l || c(new (i("AggregateError"))(s,"No one promise resolved")))
                            }
                            ))
                        }
                        )),
                        --l || c(new (i("AggregateError"))(s,"No one promise resolved"))
                    }
                    ));
                    return l.error && c(l.value),
                    n.promise
                }
            })
        }
        ])
    },
    "./includes/cxbus.min.js": function(e, t, n) {
        /*!
 * cxbus
 * @version: 2.1.2
 * @license: Genesys Cloud Services, Inc.
 */
        window,
        e.exports = function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(r, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return r
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 0)
        }([function(e, t, n) {
            var r;
            void 0 === (r = function() {
                "use strict";
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    )(e)
                }
                !function() {
                    var i = n(1).Promise
                      , s = Ie()
                      , a = "color:red;font-weight:bold"
                      , u = "color:white;background:#6495ed"
                      , c = "color:#555;font-style:italic"
                      , l = "color:#6495ed;font-weight:bold"
                      , f = !1
                      , d = !1
                      , p = []
                      , h = {}
                      , m = {}
                      , g = {}
                      , y = {}
                      , b = []
                      , v = {}
                      , D = {}
                      , w = {}
                      , E = {}
                      , x = {}
                      , A = []
                      , C = window.Genesys && window.Genesys.q && G(window.Genesys.q, M) ? window.Genesys.q : []
                      , k = !1
                      , S = null
                      , T = !0
                      , O = !1
                      , _ = ""
                      , F = ""
                      , j = "plugin.min.js"
                      , R = {}
                      , I = {}
                      , N = !0
                      , B = !1
                      , P = "*"
                      , L = !1
                      , M = "array"
                      , U = function() {}
                      , z = {
                        last: null,
                        value: null
                    }
                      , $ = "Could not load plugin file in given location. Check your plugins path option.";
                    function H(e) {
                        if (G(e = function(e) {
                            var t = {};
                            for (var n in e)
                                t[ae(n)] = e[n];
                            return t
                        }(e), "object")) {
                            if (G(e.debug, "boolean") && (k = e.debug),
                            G(e.name, "string") && e.name.trim().length > 0 && (S = e.name.trim()),
                            G(e.queue, M) && e.debug,
                            G(e.async, "boolean") && (N = e.async),
                            G(e.log, "boolean") && (T = e.log),
                            G(e.logstore, "boolean") && (O = e.logstore),
                            G(e.pluginspath, "string") && (_ = Ee(e.pluginspath)),
                            G(e.modulespath, "string") && (F = Ee(e.modulespath)),
                            G(e.pluginfilenameformat, "string") && (j = e.pluginfilenameformat),
                            G(e.pluginmap, "object") && (R = e.pluginmap),
                            G(e.pluginmap, "string"))
                                try {
                                    R = JSON.parse(e.pluginmap)
                                } catch (t) {
                                    be("%cInvalid plugin map JSON. Ignoring " + e.pluginmap, a)
                                }
                            if (G(e.modulemap, "object") && (I = e.modulemap),
                            G(e.modulemap, "string"))
                                try {
                                    I = JSON.parse(e.modulemap)
                                } catch (t) {
                                    be("%cInvalid module map JSON. Ignoring " + e.modulemap, a)
                                }
                            G(e.childDomain, "string") && (P = e.childDomain),
                            G(e.allowtypescript, "boolean") && (L = e.allowtypescript),
                            G(e.childmode, "boolean") && 1 == e.childmode && (B = e.childmode,
                            d = !0,
                            (window.opener || window.parent).postMessage({
                                type: "CXBus.childCallout",
                                registry: Object.keys(m),
                                busID: s,
                                busName: S
                            }, "*")),
                            R = Y(R),
                            I = Y(I),
                            be("%cGenesys configuration changed", u)
                        }
                    }
                    function G(e, t) {
                        return t === M ? !!Array.isArray(e) : o(e) == t
                    }
                    function q(e, t, n) {
                        return ye(e, (function(r, i) {
                            var c = ae(e)
                              , d = m[c];
                            f && !d && void 0 === t ? He({
                                type: "CXBus.remoteExecution",
                                subType: "registerPlugin",
                                busID: s,
                                pluginName: e
                            }).then((function(e) {
                                "pass" === e.resolution ? q(e.pluginName, !0).then((function(e) {
                                    r(e)
                                }
                                )) : "fail" === e.resolution && q(e.pluginName, !1).then((function(e) {
                                    i(e)
                                }
                                ))
                            }
                            )) : !f || f && !d && !0 === t ? "string" != o(e) || d ? d && i("%cCan't register plugin " + ve(e) + " -- Name is already taken", a, l, a) : (m[c] = {
                                name: e,
                                namespace: e,
                                interface: re(e),
                                events: {},
                                commands: {},
                                data: {},
                                buffer: [],
                                ready: !1,
                                busID: n || s
                            },
                            y[c] = {
                                events: [],
                                commands: []
                            },
                            m[c].busID == s && be("%c New Plugin Registered:" + ve(" " + e), u, l),
                            function(e) {
                                var t = e.interface;
                                t.registerCommand("COMMANDS", (function(t) {
                                    oe(e, "Commands"),
                                    t.resolve()
                                }
                                )),
                                t.registerCommand("EVENTS", (function(t) {
                                    oe(e, "Events"),
                                    t.resolve()
                                }
                                )),
                                t.registerCommand("LOAD", (function(e) {
                                    e.resolve()
                                }
                                ))
                            }(m[c]),
                            m[c].interface.initData = D[c] || {},
                            r(m[c].interface),
                            D[c] && delete D[c]) : f && !1 === t && i("%cCan't register plugin " + ve(e) + " -- Name is already taken", a, l, a)
                        }
                        ))
                    }
                    function J(e) {
                        return "function" == o(e) && (b.push(e),
                        !0)
                    }
                    function V(e) {
                        e && !e.mID && (e.mID = Ie());
                        for (var t = 0; t < b.length; t++)
                            b[t](e)
                    }
                    function Y(e) {
                        var t = {};
                        for (var n in e)
                            t[ae(n)] = e[n];
                        return t
                    }
                    function W(e, t) {
                        return ye(e || "unknown", (function(e, n) {
                            be(t, a, l, a),
                            n()
                        }
                        ))
                    }
                    function X(e) {
                        return "string" == typeof e && e.length > 0 && e.trim().length > 0
                    }
                    function Z(e, t, n) {
                        var r = ae(e)
                          , i = j.replace("plugin", r)
                          , a = R[r] || void 0
                          , c = !1;
                        return "object" == o(a) ? ("string" == o(a.target) && (c = a.target),
                        "boolean" == o(a.module) && a.module,
                        "string" == o(a.src) && (i = a.src)) : "string" == o(a) ? i = a : !1 === a && (i = !1),
                        D[r] = t || {},
                        function(e) {
                            for (var t in e.split(".").length > 1 && (e = e.split(".")[0]),
                            m)
                                if (ae(t) == ae(e))
                                    return !0;
                            return !1
                        }(e) || w[ae(e)] ? W(e, "%cCan't load plugin (" + ve(e) + ") -- This plugin is already loaded or an unexpected error occurred.") : X(n) ? He({
                            type: "CXBus.remoteExecution",
                            subType: "loadPlugin",
                            busID: s,
                            targetBus: n,
                            pluginName: e,
                            data: t
                        }) : (D[r] = t || {},
                        X(c) ? He({
                            type: "CXBus.remoteExecution",
                            subType: "loadPlugin",
                            busID: s,
                            targetBus: c,
                            pluginName: e,
                            data: t
                        }) : (be("%cLoading plugin: " + i, l),
                        ye(e, (function(t, n) {
                            !1 === i ? (be("%cNotice: " + i + " was prevented from loading by the current plugin mapping configuration.", u),
                            n()) : ne(a ? i : _ + i, (function(n) {
                                !function(e) {
                                    w[ae(e)] = !0
                                }(e),
                                t(n)
                            }
                            ), (function() {
                                n("Could not load plugin file: " + i)
                            }
                            ))
                        }
                        ))))
                    }
                    function K(e) {
                        return ye("loadFile", (function(t, n) {
                            !function(e) {
                                return E[e]
                            }(e) ? (be("%cLoading file: " + e, l),
                            ne(e, (function(n) {
                                !function(e) {
                                    E[e] = !0
                                }(e),
                                t(n)
                            }
                            ), (function() {
                                n("Could not load file: " + e)
                            }
                            ))) : (be("%cCan't load file (" + e + ") -- This file was already loaded", a, l, a),
                            n())
                        }
                        ))
                    }
                    function Q(e, t) {
                        return ye("loadJSON", (function(t, n) {
                            var r = new XMLHttpRequest;
                            r.overrideMimeType("application/json"),
                            r.open("GET", e, !0),
                            r.onreadystatechange = function() {
                                4 == r.readyState && "200" == r.status ? r.responseText && t(r.responseText) : "200" != r.status && 0 != r.status && n("loadJSON failed with status code: " + r.status)
                            }
                            ,
                            r.send(null)
                        }
                        ))
                    }
                    function ee(e) {
                        var t = ae(e);
                        return ye("loadModule", (function(e, n) {
                            if (t && x[t])
                                setTimeout((function() {
                                    e(x[t])
                                }
                                ), 0);
                            else {
                                var r = "module.mod.js".replace("module", t)
                                  , i = I[t]
                                  , s = "" !== F ? F : _
                                  , a = !1;
                                "object" == o(i) ? ("string" == o(i.target) && i.target,
                                "boolean" == o(i.module) && (a = i.module),
                                "string" == o(i.src) && (r = i.src)) : "string" == o(i) ? r = i : !1 === i && (r = !1),
                                !1 === r ? (be("%cNotice: " + r + " was prevented from loading by the current module mapping configuration.", u),
                                n()) : ne(i ? r : s + r, (function(n) {
                                    e(x[t])
                                }
                                ), (function() {
                                    n("Could not load module: " + t)
                                }
                                ), a)
                            }
                        }
                        ))
                    }
                    function te(e, t) {
                        var n = ae(e);
                        return !x[n] && (x[n] = t,
                        !0)
                    }
                    function ne(e, t, n, r) {
                        if (!e)
                            return n && n(),
                            !1;
                        if (e.match(".js$") || e.match(".ts$") && !0 === k && !0 === L) {
                            var o = document.createElement("script");
                            return o.src = e,
                            o.type = !0 === r || e.match(".ts$") ? "module" : "text/javascript",
                            o.onload = t,
                            o.onerror = n,
                            o.charset = "UTF-8",
                            document.head.appendChild(o),
                            !0
                        }
                        return be("%cError: (" + e + ") is not recognized as a javascript file.", a),
                        n && n(),
                        !1
                    }
                    function re(e) {
                        var t = function() {
                            try {
                                k && console.log && console.log.apply(this, arguments)
                            } catch (e) {}
                        };
                        return t.info = function() {
                            try {
                                k && console.info && console.info.apply(this, arguments)
                            } catch (e) {}
                        }
                        ,
                        t.warn = function() {
                            try {
                                k && console.warn && console.warn.apply(this, arguments)
                            } catch (e) {}
                        }
                        ,
                        t.error = function() {
                            try {
                                k && console.error && console.error.apply(this, arguments)
                            } catch (e) {}
                        }
                        ,
                        {
                            publish: function(t, n) {
                                return pe(e, t, n)
                            },
                            publishDirect: function(t, n) {
                                return pe(e, t, n, !1, !0)
                            },
                            republish: function(t, n) {
                                return pe(e, t, n, !0)
                            },
                            subscribe: function(t, n) {
                                return me(e, t, n)
                            },
                            unsubscribe: function(t) {
                                return function(e, t) {
                                    var n = ce(e)
                                      , r = ae(t);
                                    if (n && g[r] && g[r].subscribers) {
                                        for (var o = [], i = 0; i < g[r].subscribers.length; i++)
                                            g[r].subscribers[i].subscriber != e && o.push(g[r].subscribers[i]);
                                        return o.length > 0 ? g[r].subscribers = o : delete g[ae(t)],
                                        be(ve(e) + " unsubscribed from " + ve(t), l, c, l),
                                        !0
                                    }
                                    return !1
                                }(e, t)
                            },
                            command: function(t, n) {
                                return ge({
                                    commander: e,
                                    command: t,
                                    data: n
                                })
                            },
                            before: function(e, t) {
                                return r = t,
                                !!se(n = e) && (v[n] || (v[n] = []),
                                v[n].push(r),
                                !0);
                                var n, r
                            },
                            registerCommand: function(t, n) {
                                return de(e, t, n)
                            },
                            registerEvents: function(t) {
                                !function(e, t) {
                                    var n = ce(e);
                                    if (G(t = t || [], "string") && (t = [t]),
                                    n && t.length > 0) {
                                        for (var r = 0; r < t.length; r++)
                                            n.events[t[r]] || (n.events[t[r]] = !0,
                                            y[ae(e)].events.push(t[r]));
                                        be(ve(e) + " registered the events: %c" + t.join(", "), l, c, l)
                                    }
                                }(e, t)
                            },
                            namespace: function() {
                                return e + ""
                            },
                            subscribers: function() {
                                return function(e) {
                                    var t = {};
                                    for (var n in g)
                                        if (n.match(ae(e))) {
                                            t[n] || (t[n] = []);
                                            for (var r = 0; r < g[n].subscribers.length; r++)
                                                t[n].push(g[n].subscribers[r].subscriber)
                                        }
                                    return t
                                }(e)
                            },
                            data: function(t, n) {
                                return 2 === arguments.length && "undefined" == o(arguments[1]) ? ie(e, t, n, !0) : ie(e, t, n)
                            },
                            registry: function() {
                                return y
                            },
                            initData: {},
                            log: t,
                            ready: function() {
                                return function(e, t) {
                                    m[ae(e)].ready = !0,
                                    function(e) {
                                        var t = ae(e)
                                          , n = m[t].buffer || []
                                          , r = 0;
                                        for (r = 0; r < n.length; r++)
                                            !function(e) {
                                                var t = fe(e.command);
                                                be(ve(e.commander) + " called the command: " + ve(e.command), l, c, l),
                                                t && De((function() {
                                                    t(e)
                                                }
                                                ))
                                            }(n[r]);
                                        m[t].buffer = []
                                    }(e),
                                    pe(e, "ready", t || {}, !0)
                                }(e)
                            }
                        }
                    }
                    function oe(e, t) {
                        for (var n in be("%cList of " + t + " for: " + ve(e.namespace), u, l),
                        e[ae(t)])
                            be("%c" + n, u)
                    }
                    function ie(e, t, n, r) {
                        return function(e, t, n, r) {
                            var i = ae(e);
                            if ("undefined" != o(n) || "undefined" == o(n) && r) {
                                var s;
                                m[i].data[t] ? s = m[i].data[t].value : m[i].data[t] = z,
                                o(s);
                                var a = o(n)
                                  , u = {};
                                u.last = s,
                                u.value = n,
                                u.time = ke();
                                var c = "data." + t;
                                s == n && o(s) == o(n) || (pe(e, "data", m[i].data),
                                pe(e, c, u),
                                pe(e, "string" == a ? c + ":'" + u.value + "'" : c + ":" + u.value, u, !1, !0)),
                                m[i].data[t] = u
                            }
                        }(e, t, n, r),
                        function(e, t) {
                            var n = ae(e);
                            if (m[n].data[t])
                                return m[n].data[t].value;
                            if (e && !t && m[n])
                                return m[n].data || {};
                            var r = se(t)
                              , o = m[ae(r)];
                            return t = t.replace(r + ".", ""),
                            o && o.data[t] ? o.data[t].value : void 0
                        }(e, t)
                    }
                    function se(e) {
                        return e.split(".")[0]
                    }
                    function ae(e) {
                        return "string" == typeof e ? e.toLowerCase() : e
                    }
                    function ue(e, t) {
                        return ae(e) === ae(t)
                    }
                    function ce(e) {
                        return m[ae(e)] || m[se(ae(e))] || !1
                    }
                    function le(e) {
                        var t = ae(e);
                        return !!m[t] || !!fe(t)
                    }
                    function fe(e) {
                        var t = ae(e).split(".") || []
                          , n = !1;
                        return 2 == t.length && (n = ce(t[0])) && n.commands[t[1]] || !1
                    }
                    function de(e, t, n) {
                        var r = ae(t)
                          , o = ce(e);
                        return !!o && (o.commands[r] || y[ae(e)].commands.push(t),
                        o.commands[r] = n,
                        o.busID == s && be(ve(e) + " registered the command: " + ve(t), l, c, l),
                        f && Be({
                            id: s,
                            childID: s,
                            busID: s,
                            type: "CXBus.remoteExecution",
                            subType: "registerCommand",
                            namespace: e,
                            commandName: t
                        }),
                        !0)
                    }
                    function pe(e, t, n, r, o, i) {
                        var a = ae(we([e, t]))
                          , u = ve(e) + " published: " + ve(t)
                          , f = ae(e) + ".*"
                          , d = (n = n || {},
                        {
                            time: ke(),
                            publisher: e,
                            event: a,
                            eventName: t,
                            data: n || {}
                        });
                        if (!0 === r && (g[a] ? (g[a].republish = !0,
                        g[a].data = n) : g[a] = {
                            subscribers: [],
                            republish: !0,
                            data: n
                        }),
                        o || i || be(u, l, c, l),
                        Ge("publish", a, g[a]),
                        g[a]) {
                            o && !i && be(u, l, c, l);
                            for (var p = g[a].subscribers, h = 0; h < p.length; h++)
                                De(p[h].callback, d)
                        }
                        if (g[f])
                            for (p = g[f].subscribers,
                            h = 0; h < p.length; h++)
                                De(p[h].callback, d);
                        if (g["*"])
                            for (p = g["*"].subscribers,
                            h = 0; h < p.length; h++)
                                De(p[h].callback, d);
                        return i || Pe("publish", {
                            busID: s,
                            childID: s,
                            event: a,
                            eventName: t,
                            publisher: e,
                            republish: r,
                            direct: o,
                            data: n
                        }),
                        V({
                            type: "publish",
                            time: ke(),
                            source: e,
                            target: a,
                            data: n || {}
                        }),
                        !0
                    }
                    function he(e, t, n, r) {
                        be(ve(t) + " republished: " + ve(e), l, c, l),
                        De(n, {
                            time: ke(),
                            publisher: t,
                            event: e,
                            data: r
                        }),
                        V({
                            type: "publish",
                            time: ke(),
                            source: t,
                            target: e,
                            data: r || {}
                        })
                    }
                    function me(e, t, n) {
                        if ("string" == typeof t) {
                            var r = ce(e)
                              , o = ce(t)
                              , i = ae(t);
                            if (n && r)
                                return g[i] || (g[i] = {
                                    subscribers: [],
                                    republish: !1
                                }),
                                g[i].subscribers.push({
                                    subscriber: e,
                                    callback: n
                                }),
                                be(ve(e) + " subscribed to " + ve(t), l, c, l),
                                !0 === g[i].republish && o && he(t, o.namespace, n, g[i].data || {}),
                                Pe("subscribe", {
                                    busID: s,
                                    childID: s,
                                    eventName: t,
                                    subscriber: e
                                }),
                                t
                        } else if (Array.isArray(t))
                            for (var a = t, u = 0; u < a.length; u++)
                                me(e, a[u], n);
                        return !1
                    }
                    function ge(e) {
                        var t = e.commander
                          , n = e.command
                          , r = (ae(n),
                        e.data)
                          , i = e.resolveBuff
                          , u = e.rejectBuff
                          , d = e.buffered;
                        r = r || {},
                        n && 1 === n.split(".").length && (n = we([t, n])),
                        d || (r = function(e, t) {
                            for (var n = v[e] || [], r = 0; r < n.length; r++)
                                "object" == o(t) && !1 !== t && null != t && (t = n[r](t));
                            return t
                        }(n, r));
                        var p = fe(n)
                          , h = se(n)
                          , g = m[ae(h)];
                        if (V({
                            type: "command",
                            time: ke(),
                            source: t,
                            target: n,
                            data: r || {}
                        }),
                        f && !g)
                            return He({
                                type: "CXBus.remoteExecution",
                                subType: "command",
                                busID: s,
                                pluginName: h,
                                commandName: n,
                                commander: t,
                                data: r
                            });
                        if (!f && g && g.busID != s)
                            return e.message ? (e.message.targetID = g.busID,
                            He(e.message)) : He({
                                type: "CXBus.remoteExecution",
                                subType: "command",
                                busID: s,
                                pluginName: h,
                                commandName: n,
                                commander: t,
                                data: r,
                                targetID: g.busID
                            });
                        if (g && g.busID == s) {
                            var y = ye(n, (function(f, d) {
                                var y = {
                                    time: ke(),
                                    commander: t,
                                    command: n,
                                    resolve: i || f,
                                    reject: u || d,
                                    data: r || {}
                                };
                                "object" == o(r) && !1 !== r && null != r ? g && g.busID == s && (be(ve(t) + " called the command: " + ve(n), l, c, l),
                                g.ready || h == t ? p ? p(y) : (e.message && (e.message.resolution = "fail",
                                e.message.resolutionData = "Command does not exist"),
                                y.reject("Command does not exist")) : g.ready || (be("%c" + ve(h) + " is loading and/or has not yet called its ready() method. Your command call (" + n + ") has been buffered and will be executed once the plugin has loaded and/or called its ready() method.", a, a, a),
                                function(e, t) {
                                    m[ae(e)].buffer.push(t)
                                }(h, y))) : (e.message.resolution = "fail",
                                e.message.resolutionData = "Command was cancelled by a 'before' function.",
                                y.reject("Command was cancelled by a 'before' function.")),
                                e.message && "fail" == e.message.resolution && He(e.message)
                            }
                            ));
                            return e.message && y.then((function(t) {
                                e.message.resolution = "pass",
                                e.message.resolutionData = t,
                                He(e.message)
                            }
                            )).catch((function(t) {
                                e.message.resolution = "fail",
                                e.message.resolutionData = t,
                                He(e.message)
                            }
                            )),
                            y
                        }
                        return f || g ? void 0 : ye(n, (function(o, i) {
                            be("%c'" + h + "' plugin not currently registered. Attempting to load plugin from configured path (" + _ + ").", l),
                            Z(h).then((function() {
                                ge({
                                    commander: t,
                                    command: n,
                                    data: r,
                                    resolveBuff: o,
                                    rejectBuff: i,
                                    buffered: !0
                                })
                            }
                            ), (function() {
                                e.message.resolution = "fail",
                                e.message.resolutionData = $,
                                i($)
                            }
                            ))
                        }
                        ))
                    }
                    function ye(e, t) {
                        var n = new i(t);
                        return n.catch((function(t) {
                            be("%cError (" + ve(e) + "): ", a, a, a),
                            console.error && t && console.error(t)
                        }
                        )),
                        n
                    }
                    function be(e, t, n, r, i, s) {
                        try {
                            T && (O && A.push(e + ""),
                            k && console && console.log && "string" == o(e) && ("%c" == e.substr(e.length - 2, 2) && (e = e.substr(0, e.length - 2)),
                            console.log.apply(this, arguments)))
                        } catch (e) {
                            Ge("logging error!")
                        }
                    }
                    function ve(e) {
                        return "%c" + e + "%c"
                    }
                    function De(e, t, n, r) {
                        N || r ? setTimeout((function() {
                            e(t)
                        }
                        ), n || 0) : e(t)
                    }
                    function we(e) {
                        return e.join(".")
                    }
                    function Ee(e) {
                        return e && "/" != e[e.length - 1] ? e + "/" : e
                    }
                    function xe() {
                        if (d)
                            C.push(arguments);
                        else {
                            var e = arguments
                              , t = e[0] || "";
                            switch (t) {
                            case "registerPlugin":
                                q(e[1]).then(e[2] || U, e[3] || U);
                                break;
                            case "command":
                                "function" == o(e[2]) ? ge({
                                    commander: "Genesys",
                                    command: e[1],
                                    data: {}
                                }).then(e[2] || U, e[3] || U) : ge({
                                    commander: "Genesys",
                                    command: e[1],
                                    data: e[2] || {}
                                }).then(e[3] || U, e[4] || U);
                                break;
                            case "subscribe":
                                "string" != o(e[1]) && !Array.isArray(e[1]) || "function" != o(e[2]) || me("Genesys", e[1], e[2]);
                                break;
                            case "monitor":
                                "function" == o(e[1]) && J(e[1]);
                                break;
                            case "registerChild":
                                _e(e[1]);
                                break;
                            case "registerModule":
                                te(e[1], e[2]);
                                break;
                            case "executeQueue":
                                Ce();
                                break;
                            case "loadPlugin":
                                "function" != typeof e[3] ? Z(e[1], e[2], e[3]).then(e[4] || U, e[5] || U) : Z(e[1], e[2], !1).then(e[3] || U, e[4] || U);
                                break;
                            case "loadFile":
                                K(e[1]).then(e[2] || U, e[3] || U);
                                break;
                            case "loadModule":
                                ee(e[1]).then(e[2] || U, e[3] || U);
                                break;
                            case "loadJSON":
                                Q(e[1]).then(e[2] || U, e[3] || U);
                                break;
                            case "configure":
                                if (!e[1])
                                    return Ae();
                                H(e[1] || {});
                                break;
                            case "lookup":
                                return le(e[1]);
                            default:
                                return !1
                            }
                        }
                        return !0
                    }
                    function Ae() {
                        return be("CXBus Configuration\n----------------------------\nDEBUG: \t\t\t\t\t" + k + "\nBUS_NAME: \t\t\t\t" + S + "\nPLUGINS_PATH: \t\t\t" + (_ || '""') + "\nMODULES_PATH: \t\t\t" + (F || '""') + "\nPLUGIN_FILENAME_FORMAT: " + j + "\nMODULE_FILENAME_FORMAT: module.mod.js\nPLUGIN_MAP: \t\t\t" + JSON.stringify(R) + "\nMODULE_MAP: \t\t\t" + JSON.stringify(I) + "\nASYNC: \t\t\t\t\t" + N + "\nCHILD_MODE: \t\t\t" + B + "\nCHILD_DOMAIN: \t\t\t" + P + "\nPARENT_DOMAIN: \t\t\t*\nALLOW_TYPESCRIPT: \t\t" + L),
                        {
                            debug: k,
                            name: S,
                            pluginsPath: _,
                            modulesPath: F,
                            pluginFilenameFormat: j,
                            moduleFilenameFormat: "module.mod.js",
                            pluginMap: R,
                            moduleMap: I,
                            async: N,
                            childMode: B,
                            childDomain: P,
                            parentDomain: "*",
                            allowTypeScript: L
                        }
                    }
                    function Ce(e) {
                        if (C) {
                            be("%cExecuting " + C.length + " items from the queue...", u);
                            for (var t = 0; t < C.length; t++)
                                xe.apply(this, C[t])
                        }
                    }
                    function ke() {
                        return (new Date).getTime()
                    }
                    if (window.Genesys)
                        for (var Se = Object.keys(window.Genesys), Te = 0; Te < Se.length; Te++)
                            xe[Se[Te]] = window.Genesys[Se[Te]];
                    window.Genesys = xe,
                    q("Genesys"),
                    "function" == o(n(3)) && n(4) && (void 0 === (r = function() {
                        return window.Genesys
                    }
                    .apply(t, [])) || (e.exports = r));
                    var Oe = {};
                    function _e(e) {
                        return !!e && (e.contentWindow && (e = e.contentWindow),
                        Oe[id] = {
                            id: id,
                            name: void 0,
                            busID: void 0,
                            intvl: setInterval((function() {
                                Fe(e, id)
                            }
                            ), 500),
                            callAttempts: 0,
                            registered: !1,
                            window: e,
                            registry: []
                        },
                        Fe(e, id),
                        !0)
                    }
                    function Fe(e, t) {
                        e.postMessage({
                            type: "CXBus.parentCallout",
                            childID: t,
                            busID: s,
                            busName: S
                        }, P),
                        Oe[t].callAttempts++
                    }
                    function je(e, t, n, r) {
                        Oe[t] && !Oe[t].registered ? (clearInterval(Oe[t].intvl),
                        Oe[t].registered = ke(),
                        Oe[t].registry = r,
                        Oe[t].busID = busID,
                        Oe[t].busName = n) : (Oe[t] = {
                            id: t,
                            busID: t,
                            busName: n,
                            intvl: !1,
                            callAttempts: 0,
                            registered: ke(),
                            window: e,
                            registry: r
                        },
                        e.postMessage({
                            type: "CXBus.parentCallback",
                            busID: t,
                            busName: S
                        }, P))
                    }
                    function Re(e, t, n, r) {
                        d = !1,
                        f = e,
                        Ce()
                    }
                    function Ie() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        }
                        ))
                    }
                    function Ne(e, t) {
                        Oe[e] && (t = t || {},
                        Oe[e].window.postMessage(t, P))
                    }
                    function Be(e) {
                        f && f.postMessage(e, "*")
                    }
                    function Pe(e, t) {
                        if (Ge("broadcast", e, t),
                        (t = t || {}).subType = e,
                        t.type = "CXBus.broadcast",
                        f)
                            Be(t);
                        else
                            for (var n in Oe)
                                Ne(n, t)
                    }
                    var Le, Me, Ue = document.getElementById("genesys-cxbus"), ze = {}, $e = {
                        src: 0,
                        charset: 0,
                        id: 0,
                        type: 0,
                        queue: 0,
                        pluginmap: 0,
                        modulemap: 0
                    };
                    if (Ue) {
                        for (Te = 0; Te < Ue.attributes.length; Te++)
                            Le = ae(Ue.attributes[Te].nodeName),
                            "true" === (Me = Ue.attributes[Te].nodeValue) && (Me = !0),
                            "false" === Me && (Me = !1),
                            $e[Le] || (ze[Le] = Me);
                        H(ze)
                    }
                    function He(e) {
                        var t;
                        if (e.id)
                            t = e.id;
                        else {
                            for (t = Ie(); h[t]; )
                                t = Ie();
                            e.id = t
                        }
                        return ye("remoteExecution", (function(n, r) {
                            if (h[t] = {
                                success: n,
                                fail: r
                            },
                            f)
                                f && e.id != s && Be(e);
                            else if (e.resolution)
                                Ne(e.busID, e);
                            else if (X(e.targetBus)) {
                                var o = function(e) {
                                    for (var t in Oe) {
                                        var n = Oe[t];
                                        if (ue(n.busName, e))
                                            return n.id
                                    }
                                    return !1
                                }(e.targetBus);
                                o && Ne(o, e)
                            } else
                                e.targetID && Ne(e.targetID, e)
                        }
                        ))
                    }
                    function Ge() {
                        var e = Array.prototype.slice.call(arguments);
                        e.unshift("[" + window.name + "]")
                    }
                    window.addEventListener("message", (function(e) {
                        p.push(e),
                        function() {
                            for (; p.length > 0; ) {
                                var e = p.shift()
                                  , t = e.data
                                  , n = h[t.id];
                                switch (t.type) {
                                case "CXBus.parentCallout":
                                    B && Re(e.source, t.busID, t.busName, t.parentRegistry);
                                    break;
                                case "CXBus.childCallout":
                                    B || je(e.source, t.busID, t.busName, t.registry);
                                    break;
                                case "CXBus.parentCallback":
                                    B && Re(e.source, t.busID, t.busName, t.parentRegistry);
                                    break;
                                case "CXBus.childCallback":
                                    B || je(e.source, t.busID, t.busName, t.registry);
                                    break;
                                case "CXBus.broadcast":
                                    f || Pe(e.data.subType, t);
                                    var r = ae(t.eventName)
                                      , o = g[r] || !1;
                                    switch (e.data.subType) {
                                    case "subscribe":
                                        if (void 0 === t.eventData && o && !0 === o.republish) {
                                            var i = ce(t.eventName);
                                            t.eventNamespace = i ? i.namespace : "",
                                            t.eventData = o.data || {},
                                            t.subType = "republish",
                                            Ne(t.busID, t)
                                        }
                                        break;
                                    case "publish":
                                        pe(t.publisher, t.eventName, t.data, t.republish, t.direct, !0);
                                        break;
                                    case "republish":
                                        for (var a = null, u = 0; u < o.subscribers.length; u++)
                                            o.subscribers[u].subscriber == t.subscriber && (a = o.subscribers[u].callback);
                                        a && he(t.eventName, t.eventNamespace, a, t.eventData || {})
                                    }
                                    break;
                                case "CXBus.remoteExecution":
                                    switch (t.subType) {
                                    case "loadPlugin":
                                        var c = h[t.id];
                                        t.resolution ? t.resolution && c && ("pass" == t.resolution ? c.success(t.resolutionData) : "fail" == t.resolution && c.fail(t.resolutionData),
                                        f || t.busID == s || He(t),
                                        delete h[t.id]) : ue(S, t.targetBus) && Z(t.pluginName, t.data).then((function() {
                                            return t.resolution = "pass",
                                            He(t)
                                        }
                                        ), (function() {
                                            return t.resolution = "fail",
                                            t.resolutionData = $,
                                            He(t)
                                        }
                                        ));
                                        break;
                                    case "registerPlugin":
                                        f || (ce(t.pluginName) ? (t.resolution = "fail",
                                        Ne(t.busID, t)) : (t.resolution = "pass",
                                        Ne(t.busID, t),
                                        q(t.pluginName, !0, t.busID))),
                                        n && t.resolution && ("pass" == t.resolution ? n.success(t) : "fail" == t.resolution && n.fail(t));
                                        break;
                                    case "registerCommand":
                                        f || de(t.namespace, t.commandName, U);
                                        break;
                                    case "command":
                                        c = h[t.id];
                                        var l = se(t.commandName)
                                          , d = m[ae(l)];
                                        if (t.resolution)
                                            t.resolution && c && ("pass" == t.resolution ? c.success(t.resolutionData) : "fail" == t.resolution && c.fail(t.resolutionData),
                                            f || t.busID == s || He(t),
                                            delete h[t.id]);
                                        else if (!f && d && d.busID && d.busID != s)
                                            t.targetID = d.busID,
                                            He(t),
                                            V({
                                                type: "command",
                                                time: ke(),
                                                source: t.commander,
                                                target: t.commandName,
                                                data: t.data || {}
                                            });
                                        else if (d && d.busID && d.busID == s)
                                            ge({
                                                commander: t.commander,
                                                command: t.commandName,
                                                data: t.data,
                                                message: t
                                            });
                                        else if (!f && !d)
                                            return t.resolution = "fail",
                                            t.resolutionData = "Plugin does not exist and no plugins path is configured",
                                            He(t)
                                    }
                                }
                            }
                        }()
                    }
                    ), !1)
                }()
            }
            .apply(t, [])) || (e.exports = r)
        }
        , function(e, t, n) {
            (function(r) {
                var o;
                !function(r) {
                    var i = r.Promise
                      , s = i && "resolve"in i && "reject"in i && "all"in i && "race"in i && function() {
                        var e;
                        return new i((function(t) {
                            e = t
                        }
                        )),
                        "function" == typeof e
                    }();
                    t ? (t.Promise = s ? i : E,
                    t.Polyfill = E) : void 0 === (o = function() {
                        return s ? i : E
                    }
                    .call(t, n, t, e)) || (e.exports = o);
                    var a = function() {};
                    function u(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                    var c, l = "undefined" != typeof setImmediate ? setImmediate : setTimeout, f = [];
                    function d() {
                        for (var e = 0; e < f.length; e++)
                            f[e][0](f[e][1]);
                        f = [],
                        c = !1
                    }
                    function p(e, t) {
                        f.push([e, t]),
                        c || (c = !0,
                        l(d, 0))
                    }
                    function h(e) {
                        var t = e.owner
                          , n = t.state_
                          , r = t.data_
                          , o = e[n]
                          , i = e.then;
                        if ("function" == typeof o) {
                            n = "fulfilled";
                            try {
                                r = o(r)
                            } catch (e) {
                                b(i, e)
                            }
                        }
                        m(i, r) || ("fulfilled" === n && g(i, r),
                        "rejected" === n && b(i, r))
                    }
                    function m(e, t) {
                        var n;
                        try {
                            if (e === t)
                                throw new TypeError("A promises callback cannot return that same promise.");
                            if (t && ("function" == typeof t || "object" == typeof t)) {
                                var r = t.then;
                                if ("function" == typeof r)
                                    return r.call(t, (function(r) {
                                        n || (n = !0,
                                        t !== r ? g(e, r) : y(e, r))
                                    }
                                    ), (function(t) {
                                        n || (n = !0,
                                        b(e, t))
                                    }
                                    )),
                                    !0
                            }
                        } catch (t) {
                            return n || b(e, t),
                            !0
                        }
                        return !1
                    }
                    function g(e, t) {
                        e !== t && m(e, t) || y(e, t)
                    }
                    function y(e, t) {
                        "pending" === e.state_ && (e.state_ = "sealed",
                        e.data_ = t,
                        p(D, e))
                    }
                    function b(e, t) {
                        "pending" === e.state_ && (e.state_ = "sealed",
                        e.data_ = t,
                        p(w, e))
                    }
                    function v(e) {
                        var t = e.then_;
                        e.then_ = void 0;
                        for (var n = 0; n < t.length; n++)
                            h(t[n])
                    }
                    function D(e) {
                        e.state_ = "fulfilled",
                        v(e)
                    }
                    function w(e) {
                        e.state_ = "rejected",
                        v(e)
                    }
                    function E(e) {
                        if ("function" != typeof e)
                            throw new TypeError("Promise constructor takes a function argument");
                        if (this instanceof E == 0)
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        this.then_ = [],
                        function(e, t) {
                            function n(e) {
                                b(t, e)
                            }
                            try {
                                e((function(e) {
                                    g(t, e)
                                }
                                ), n)
                            } catch (e) {
                                n(e)
                            }
                        }(e, this)
                    }
                    E.prototype = {
                        constructor: E,
                        state_: "pending",
                        then_: null,
                        data_: void 0,
                        then: function(e, t) {
                            var n = {
                                owner: this,
                                then: new this.constructor(a),
                                fulfilled: e,
                                rejected: t
                            };
                            return "fulfilled" === this.state_ || "rejected" === this.state_ ? p(h, n) : this.then_.push(n),
                            n.then
                        },
                        catch: function(e) {
                            return this.then(null, e)
                        }
                    },
                    E.all = function(e) {
                        if (!u(e))
                            throw new TypeError("You must pass an array to Promise.all().");
                        return new this((function(t, n) {
                            var r = []
                              , o = 0;
                            function i(e) {
                                return o++,
                                function(n) {
                                    r[e] = n,
                                    --o || t(r)
                                }
                            }
                            for (var s, a = 0; a < e.length; a++)
                                (s = e[a]) && "function" == typeof s.then ? s.then(i(a), n) : r[a] = s;
                            o || t(r)
                        }
                        ))
                    }
                    ,
                    E.race = function(e) {
                        if (!u(e))
                            throw new TypeError("You must pass an array to Promise.race().");
                        return new this((function(t, n) {
                            for (var r, o = 0; o < e.length; o++)
                                (r = e[o]) && "function" == typeof r.then ? r.then(t, n) : t(r)
                        }
                        ))
                    }
                    ,
                    E.resolve = function(e) {
                        return e && "object" == typeof e && e.constructor === this ? e : new this((function(t) {
                            t(e)
                        }
                        ))
                    }
                    ,
                    E.reject = function(e) {
                        return new this((function(t, n) {
                            n(e)
                        }
                        ))
                    }
                }("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this)
            }
            ).call(this, n(2))
        }
        , function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
        , function(e, t) {
            e.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        }
        , function(e, t) {
            (function(t) {
                e.exports = t
            }
            ).call(this, {})
        }
        ])
    },
    "./includes/markdown.js": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "configureMarkdown", (function() {
            return X
        }
        )),
        n.d(t, "parseMarkdown", (function() {
            return Z
        }
        )),
        n.d(t, "getMarkdown", (function() {
            return K
        }
        )),
        n.d(t, "extendMarkdown", (function() {
            return Q
        }
        )),
        n.d(t, "configureHtml2Markdown", (function() {
            return ee
        }
        )),
        n.d(t, "html2markdown", (function() {
            return te
        }
        ));
        var r = n("./node_modules/marked/lib/marked.umd.js");
        function o(e, t) {
            return Array(t + 1).join(e)
        }
        var i = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
        function s(e) {
            return l(e, i)
        }
        var a = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
        function u(e) {
            return l(e, a)
        }
        var c = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
        function l(e, t) {
            return t.indexOf(e.nodeName) >= 0
        }
        function f(e, t) {
            return e.getElementsByTagName && t.some((function(t) {
                return e.getElementsByTagName(t).length
            }
            ))
        }
        var d = {};
        function p(e) {
            return e ? e.replace(/(\n+\s*)+/g, "\n") : ""
        }
        function h(e) {
            for (var t in this.options = e,
            this._keep = [],
            this._remove = [],
            this.blankRule = {
                replacement: e.blankReplacement
            },
            this.keepReplacement = e.keepReplacement,
            this.defaultRule = {
                replacement: e.defaultReplacement
            },
            this.array = [],
            e.rules)
                this.array.push(e.rules[t])
        }
        function m(e, t, n) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                if (g(o, t, n))
                    return o
            }
        }
        function g(e, t, n) {
            var r = e.filter;
            if ("string" == typeof r) {
                if (r === t.nodeName.toLowerCase())
                    return !0
            } else if (Array.isArray(r)) {
                if (r.indexOf(t.nodeName.toLowerCase()) > -1)
                    return !0
            } else {
                if ("function" != typeof r)
                    throw new TypeError("`filter` needs to be a string, array, or function");
                if (r.call(e, t, n))
                    return !0
            }
        }
        function y(e) {
            var t = e.nextSibling || e.parentNode;
            return e.parentNode.removeChild(e),
            t
        }
        function b(e, t, n) {
            return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode
        }
        d.paragraph = {
            filter: "p",
            replacement: function(e) {
                return "\n\n" + e + "\n\n"
            }
        },
        d.lineBreak = {
            filter: "br",
            replacement: function(e, t, n) {
                return n.br + "\n"
            }
        },
        d.heading = {
            filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
            replacement: function(e, t, n) {
                var r = Number(t.nodeName.charAt(1));
                return "setext" === n.headingStyle && r < 3 ? "\n\n" + e + "\n" + o(1 === r ? "=" : "-", e.length) + "\n\n" : "\n\n" + o("#", r) + " " + e + "\n\n"
            }
        },
        d.blockquote = {
            filter: "blockquote",
            replacement: function(e) {
                return "\n\n" + (e = (e = e.replace(/^\n+|\n+$/g, "")).replace(/^/gm, "> ")) + "\n\n"
            }
        },
        d.list = {
            filter: ["ul", "ol"],
            replacement: function(e, t) {
                var n = t.parentNode;
                return "LI" === n.nodeName && n.lastElementChild === t ? "\n" + e : "\n\n" + e + "\n\n"
            }
        },
        d.listItem = {
            filter: "li",
            replacement: function(e, t, n) {
                e = e.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
                var r = n.bulletListMarker + "   "
                  , o = t.parentNode;
                if ("OL" === o.nodeName) {
                    var i = o.getAttribute("start")
                      , s = Array.prototype.indexOf.call(o.children, t);
                    r = (i ? Number(i) + s : s + 1) + ".  "
                }
                return r + e + (t.nextSibling && !/\n$/.test(e) ? "\n" : "")
            }
        },
        d.indentedCodeBlock = {
            filter: function(e, t) {
                return "indented" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName
            },
            replacement: function(e, t, n) {
                return "\n\n    " + t.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n"
            }
        },
        d.fencedCodeBlock = {
            filter: function(e, t) {
                return "fenced" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName
            },
            replacement: function(e, t, n) {
                for (var r, i = ((t.firstChild.getAttribute("class") || "").match(/language-(\S+)/) || [null, ""])[1], s = t.firstChild.textContent, a = n.fence.charAt(0), u = 3, c = new RegExp("^" + a + "{3,}","gm"); r = c.exec(s); )
                    r[0].length >= u && (u = r[0].length + 1);
                var l = o(a, u);
                return "\n\n" + l + i + "\n" + s.replace(/\n$/, "") + "\n" + l + "\n\n"
            }
        },
        d.horizontalRule = {
            filter: "hr",
            replacement: function(e, t, n) {
                return "\n\n" + n.hr + "\n\n"
            }
        },
        d.inlineLink = {
            filter: function(e, t) {
                return "inlined" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href")
            },
            replacement: function(e, t) {
                var n = t.getAttribute("href")
                  , r = p(t.getAttribute("title"));
                return r && (r = ' "' + r + '"'),
                "[" + e + "](" + n + r + ")"
            }
        },
        d.referenceLink = {
            filter: function(e, t) {
                return "referenced" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href")
            },
            replacement: function(e, t, n) {
                var r, o, i = t.getAttribute("href"), s = p(t.getAttribute("title"));
                switch (s && (s = ' "' + s + '"'),
                n.linkReferenceStyle) {
                case "collapsed":
                    r = "[" + e + "][]",
                    o = "[" + e + "]: " + i + s;
                    break;
                case "shortcut":
                    r = "[" + e + "]",
                    o = "[" + e + "]: " + i + s;
                    break;
                default:
                    var a = this.references.length + 1;
                    r = "[" + e + "][" + a + "]",
                    o = "[" + a + "]: " + i + s
                }
                return this.references.push(o),
                r
            },
            references: [],
            append: function(e) {
                var t = "";
                return this.references.length && (t = "\n\n" + this.references.join("\n") + "\n\n",
                this.references = []),
                t
            }
        },
        d.emphasis = {
            filter: ["em", "i"],
            replacement: function(e, t, n) {
                return e.trim() ? n.emDelimiter + e + n.emDelimiter : ""
            }
        },
        d.strong = {
            filter: ["strong", "b"],
            replacement: function(e, t, n) {
                return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : ""
            }
        },
        d.code = {
            filter: function(e) {
                var t = e.previousSibling || e.nextSibling
                  , n = "PRE" === e.parentNode.nodeName && !t;
                return "CODE" === e.nodeName && !n
            },
            replacement: function(e) {
                if (!e)
                    return "";
                e = e.replace(/\r?\n|\r/g, " ");
                for (var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "", n = "`", r = e.match(/`+/gm) || []; -1 !== r.indexOf(n); )
                    n += "`";
                return n + t + e + t + n
            }
        },
        d.image = {
            filter: "img",
            replacement: function(e, t) {
                var n = p(t.getAttribute("alt"))
                  , r = t.getAttribute("src") || ""
                  , o = p(t.getAttribute("title"));
                return r ? "![" + n + "](" + r + (o ? ' "' + o + '"' : "") + ")" : ""
            }
        },
        h.prototype = {
            add: function(e, t) {
                this.array.unshift(t)
            },
            keep: function(e) {
                this._keep.unshift({
                    filter: e,
                    replacement: this.keepReplacement
                })
            },
            remove: function(e) {
                this._remove.unshift({
                    filter: e,
                    replacement: function() {
                        return ""
                    }
                })
            },
            forNode: function(e) {
                return e.isBlank ? this.blankRule : (t = m(this.array, e, this.options)) || (t = m(this._keep, e, this.options)) || (t = m(this._remove, e, this.options)) ? t : this.defaultRule;
                var t
            },
            forEach: function(e) {
                for (var t = 0; t < this.array.length; t++)
                    e(this.array[t], t)
            }
        };
        var v = "undefined" != typeof window ? window : {};
        var D, w, E = function() {
            var e = v.DOMParser
              , t = !1;
            try {
                (new e).parseFromString("", "text/html") && (t = !0)
            } catch (e) {}
            return t
        }() ? v.DOMParser : (D = function() {}
        ,
        function() {
            var e = !1;
            try {
                document.implementation.createHTMLDocument("").open()
            } catch (t) {
                window.ActiveXObject && (e = !0)
            }
            return e
        }() ? D.prototype.parseFromString = function(e) {
            var t = new window.ActiveXObject("htmlfile");
            return t.designMode = "on",
            t.open(),
            t.write(e),
            t.close(),
            t
        }
        : D.prototype.parseFromString = function(e) {
            var t = document.implementation.createHTMLDocument("");
            return t.open(),
            t.write(e),
            t.close(),
            t
        }
        ,
        D);
        function x(e, t) {
            var n;
            "string" == typeof e ? n = (w = w || new E).parseFromString('<x-turndown id="turndown-root">' + e + "</x-turndown>", "text/html").getElementById("turndown-root") : n = e.cloneNode(!0);
            return function(e) {
                var t = e.element
                  , n = e.isBlock
                  , r = e.isVoid
                  , o = e.isPre || function(e) {
                    return "PRE" === e.nodeName
                }
                ;
                if (t.firstChild && !o(t)) {
                    for (var i = null, s = !1, a = null, u = b(a, t, o); u !== t; ) {
                        if (3 === u.nodeType || 4 === u.nodeType) {
                            var c = u.data.replace(/[ \r\n\t]+/g, " ");
                            if (i && !/ $/.test(i.data) || s || " " !== c[0] || (c = c.substr(1)),
                            !c) {
                                u = y(u);
                                continue
                            }
                            u.data = c,
                            i = u
                        } else {
                            if (1 !== u.nodeType) {
                                u = y(u);
                                continue
                            }
                            n(u) || "BR" === u.nodeName ? (i && (i.data = i.data.replace(/ $/, "")),
                            i = null,
                            s = !1) : r(u) || o(u) ? (i = null,
                            s = !0) : i && (s = !1)
                        }
                        var l = b(a, u, o);
                        a = u,
                        u = l
                    }
                    i && (i.data = i.data.replace(/ $/, ""),
                    i.data || y(i))
                }
            }({
                element: n,
                isBlock: s,
                isVoid: u,
                isPre: t.preformattedCode ? A : null
            }),
            n
        }
        function A(e) {
            return "PRE" === e.nodeName || "CODE" === e.nodeName
        }
        function C(e, t) {
            return e.isBlock = s(e),
            e.isCode = "CODE" === e.nodeName || e.parentNode.isCode,
            e.isBlank = function(e) {
                return !u(e) && !function(e) {
                    return l(e, c)
                }(e) && /^\s*$/i.test(e.textContent) && !function(e) {
                    return f(e, a)
                }(e) && !function(e) {
                    return f(e, c)
                }(e)
            }(e),
            e.flankingWhitespace = function(e, t) {
                if (e.isBlock || t.preformattedCode && e.isCode)
                    return {
                        leading: "",
                        trailing: ""
                    };
                var n = (r = e.textContent,
                o = r.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/),
                {
                    leading: o[1],
                    leadingAscii: o[2],
                    leadingNonAscii: o[3],
                    trailing: o[4],
                    trailingNonAscii: o[5],
                    trailingAscii: o[6]
                });
                var r, o;
                n.leadingAscii && k("left", e, t) && (n.leading = n.leadingNonAscii);
                n.trailingAscii && k("right", e, t) && (n.trailing = n.trailingNonAscii);
                return {
                    leading: n.leading,
                    trailing: n.trailing
                }
            }(e, t),
            e
        }
        function k(e, t, n) {
            var r, o, i;
            return "left" === e ? (r = t.previousSibling,
            o = / $/) : (r = t.nextSibling,
            o = /^ /),
            r && (3 === r.nodeType ? i = o.test(r.nodeValue) : n.preformattedCode && "CODE" === r.nodeName ? i = !1 : 1 !== r.nodeType || s(r) || (i = o.test(r.textContent))),
            i
        }
        var S = Array.prototype.reduce
          , T = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
        function O(e) {
            if (!(this instanceof O))
                return new O(e);
            var t = {
                rules: d,
                headingStyle: "setext",
                hr: "* * *",
                bulletListMarker: "*",
                codeBlockStyle: "indented",
                fence: "```",
                emDelimiter: "_",
                strongDelimiter: "**",
                linkStyle: "inlined",
                linkReferenceStyle: "full",
                br: "  ",
                preformattedCode: !1,
                blankReplacement: function(e, t) {
                    return t.isBlock ? "\n\n" : ""
                },
                keepReplacement: function(e, t) {
                    return t.isBlock ? "\n\n" + t.outerHTML + "\n\n" : t.outerHTML
                },
                defaultReplacement: function(e, t) {
                    return t.isBlock ? "\n\n" + e + "\n\n" : e
                }
            };
            this.options = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        n.hasOwnProperty(r) && (e[r] = n[r])
                }
                return e
            }({}, t, e),
            this.rules = new h(this.options)
        }
        function _(e) {
            var t = this;
            return S.call(e.childNodes, (function(e, n) {
                var r = "";
                return 3 === (n = new C(n,t.options)).nodeType ? r = n.isCode ? n.nodeValue : t.escape(n.nodeValue) : 1 === n.nodeType && (r = j.call(t, n)),
                R(e, r)
            }
            ), "")
        }
        function F(e) {
            var t = this;
            return this.rules.forEach((function(n) {
                "function" == typeof n.append && (e = R(e, n.append(t.options)))
            }
            )),
            e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "")
        }
        function j(e) {
            var t = this.rules.forNode(e)
              , n = _.call(this, e)
              , r = e.flankingWhitespace;
            return (r.leading || r.trailing) && (n = n.trim()),
            r.leading + t.replacement(n, e, this.options) + r.trailing
        }
        function R(e, t) {
            var n = function(e) {
                for (var t = e.length; t > 0 && "\n" === e[t - 1]; )
                    t--;
                return e.substring(0, t)
            }(e)
              , r = t.replace(/^\n*/, "")
              , o = Math.max(e.length - n.length, t.length - r.length);
            return n + "\n\n".substring(0, o) + r
        }
        O.prototype = {
            turndown: function(e) {
                if (!function(e) {
                    return null != e && ("string" == typeof e || e.nodeType && (1 === e.nodeType || 9 === e.nodeType || 11 === e.nodeType))
                }(e))
                    throw new TypeError(e + " is not a string, or an element/document/fragment node.");
                if ("" === e)
                    return "";
                var t = _.call(this, new x(e,this.options));
                return F.call(this, t)
            },
            use: function(e) {
                if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++)
                        this.use(e[t]);
                else {
                    if ("function" != typeof e)
                        throw new TypeError("plugin must be a Function or an Array of Functions");
                    e(this)
                }
                return this
            },
            addRule: function(e, t) {
                return this.rules.add(e, t),
                this
            },
            keep: function(e) {
                return this.rules.keep(e),
                this
            },
            remove: function(e) {
                return this.rules.remove(e),
                this
            },
            escape: function(e) {
                return T.reduce((function(e, t) {
                    return e.replace(t[0], t[1])
                }
                ), e)
            }
        };
        var I = O;
        const N = new r.marked.Lexer
          , B = new r.marked.Renderer
          , P = new r.marked.Lexer({
            tokenizer: new r.marked.Tokenizer
        }).tokenizer.rules.inline.link
          , L = B.text.bind(B)
          , M = new I;
        let U = ""
          , z = !1
          , $ = !0
          , H = "";
        const G = {
            name: "monospace",
            level: "inline",
            start(e) {
                var t;
                return null === (t = e.match(/`/)) || void 0 === t ? void 0 : t.index
            },
            tokenizer(e) {
                const t = /^(`)([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(e);
                if (t) {
                    let e = t[2];
                    const n = /[^ ]/.test(e)
                      , r = /^ /.test(e) && / $/.test(e);
                    return n && r && (e = e.substring(1, e.length - 1)),
                    {
                        type: "monospace",
                        raw: t[0],
                        inner: this.lexer.inlineTokens(e)
                    }
                }
            },
            renderer(e) {
                return `<code>${this.parser.parseInline(e.inner)}</code>`
            }
        }
          , q = {
            name: "boldText",
            level: "inline",
            start(e) {
                var t;
                return null === (t = e.match(/\*(?!\s)/)) || void 0 === t ? void 0 : t.index
            },
            tokenizer(e) {
                var t;
                if (0 !== e.indexOf("*") || e.match(/^\*{2,}/))
                    return;
                const n = null === (t = e.match(/(?!^)(?!\\\*).\*/)) || void 0 === t ? void 0 : t.index;
                return n && -1 !== n ? {
                    type: "boldText",
                    raw: e.slice(0, n + 2),
                    inner: this.lexer.inlineTokens(e.slice(1, n + 1))
                } : void 0
            },
            renderer(e) {
                return `<b>${this.parser.parseInline(e.inner)}</b>`
            }
        }
          , J = {
            name: "italicText",
            level: "inline",
            start(e) {
                var t;
                const n = null === (t = e.match(/_(?!\s)(?![A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_]))/)) || void 0 === t ? void 0 : t.index;
                if (U && "" !== U && (U = ""),
                n)
                    return 0 !== n && (U = e.charAt(n - 1)),
                    n
            },
            tokenizer(e) {
                var t;
                if (e.match(/^_{2,}/) || !e.match(/^_/) || !e.match(/^_[^\n\r\s].*[^\n\r\s]_(?![\p{L}\p{N}])/u))
                    return;
                if (U && U.match(/[\p{L}\p{N}]/u))
                    return;
                const n = null === (t = e.match(/(?!^)(?!\\_)._(?![\p{L}\p{N}])/u)) || void 0 === t ? void 0 : t.index;
                return n && -1 !== n ? {
                    type: "italicText",
                    raw: e.slice(0, n + 2),
                    inner: this.lexer.inlineTokens(e.slice(1, n + 1))
                } : void 0
            },
            renderer(e) {
                return `<i>${this.parser.parseInline(e.inner)}</i>`
            }
        }
          , V = {
            name: "strikethrough",
            level: "inline",
            start(e) {
                var t;
                return null === (t = e.match(/~(?!\s)/)) || void 0 === t ? void 0 : t.index
            },
            tokenizer(e) {
                var t;
                if (0 !== e.indexOf("~") || e.match(/^~{2,}/))
                    return;
                const n = null === (t = e.match(/(?!^)(?!\\~).~/)) || void 0 === t ? void 0 : t.index;
                return n && -1 !== n ? {
                    type: "strikethrough",
                    raw: e.slice(0, n + 2),
                    inner: this.lexer.inlineTokens(e.slice(1, n + 1))
                } : void 0
            },
            renderer(e) {
                return `<s>${this.parser.parseInline(e.inner)}</s>`
            }
        }
          , Y = {
            name: "codeBlock",
            level: "inline",
            start(e) {
                var t;
                return null === (t = e.match(/```/)) || void 0 === t ? void 0 : t.index
            },
            tokenizer(e) {
                const t = /^(`{3})([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(e);
                if (t) {
                    let e = t[2];
                    const n = /[^ ]/.test(e)
                      , r = /^ /.test(e) && / $/.test(e);
                    return n && r && (e = e.substring(1, e.length - 1)),
                    {
                        type: "codeBlock",
                        raw: t[0],
                        inner: this.lexer.inlineTokens(e)
                    }
                }
            },
            renderer(e) {
                return `<pre>${this.parser.parseInline(e.inner)}</pre>`
            }
        }
          , W = {
            name: "highLight",
            level: "inline",
            start(e) {
                var t;
                return null === (t = e.match(/==/)) || void 0 === t ? void 0 : t.index
            },
            tokenizer(e) {
                if (!$ && H && "inbound" === H)
                    return;
                const t = /^(={2})([^=]|[^=][\s\S]*?[^=])\1(?!=)/.exec(e);
                if (t) {
                    const e = t[2];
                    return {
                        type: "highLight",
                        raw: t[0],
                        inner: this.lexer.inlineTokens(e)
                    }
                }
            },
            renderer(e) {
                return `<mark>${this.parser.parseInline(e.inner)}</mark>`
            }
        };
        function X(e) {
            const {disableLinkFocus: t, enabled: n, highlight: o} = e || {}
              , {allowInbound: i} = o || {};
            B.link = function() {
                const e = r.marked.Renderer.prototype.link.apply(this, arguments);
                return z = !0,
                t ? e.replace("<a", "<a target='_blank' tabindex='-1'") : e.replace("<a", "<a target='_blank'")
            }
            ,
            B.image = function(e, t, n) {
                return L(t ? `![${n}](${e} "${t}")` : `![${n}](${e})`)
            }
            ,
            r.marked.setOptions({
                renderer: B
            }),
            "boolean" == typeof i && ($ = i),
            n ? (r.marked.use({
                extensions: [q, J, V, W, Y, G]
            }),
            N.tokenizer.rules.inline.link = P) : (N.tokenizer.rules.inline.link = {
                exec: function() {}
            },
            r.marked.use({
                extensions: !1
            })),
            N.tokenizer.rules.inline._backpedal = /(?:[^?!.,:;*~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            N.tokenizer.rules.inline.emStrong.lDelim = {
                exec: function() {}
            },
            N.tokenizer.rules.inline.emStrong.rDelimAst = {
                exec: function() {}
            },
            N.tokenizer.rules.inline.emStrong.rDelimUnd = {
                exec: function() {}
            },
            ["heading", "autolink", "blockSkip", "br", "code", "del", "nolink", "overlapSkip", "punctuation", "reflink", "reflinkSearch", "tag"].map(e => {
                N.tokenizer.rules.inline[e] = {
                    exec: function() {}
                }
            }
            ),
            ["blockquote", "bullet", "code", "def", "fences", "heading", "hr", "html", "item", "lheading", "list", "newline", "nptable", "paragraph", "table", "text"].map(e => {
                N.tokenizer.rules.block[e] = {
                    exec: function() {}
                }
            }
            )
        }
        function Z(e) {
            const {text: t} = e || "";
            if (t && "string" == typeof t && "" !== t) {
                return r.marked.parseInline(t)
            }
        }
        function K(e) {
            const {text: t, messageType: n} = e || "";
            if (t && "string" == typeof t && "" !== t) {
                n && "string" == typeof n && "" !== n && (H = n.toLowerCase());
                const e = {
                    markedText: r.marked.parseInline(t),
                    isLinkIncluded: z
                };
                return z = !1,
                H = "",
                e
            }
        }
        function Q(e) {
            const {extensions: t} = e || [];
            t && t.length && t.map(e => {
                r.marked.use({
                    extensions: [e]
                })
            }
            )
        }
        function ee(e) {
            e && e.length && e.map(e => {
                let {key: t, value: n} = e;
                M.addRule(t, n)
            }
            )
        }
        function te(e) {
            if (e && "string" == typeof e && "" !== e)
                return M.turndown(e)
        }
        t.default = {
            configureMarkdown: X,
            parseMarkdown: Z,
            getMarkdown: K,
            extendMarkdown: Q,
            configureHtml2Markdown: ee,
            html2markdown: te
        }
    },
    "./includes/messengerHelper.html": function(e, t) {
        e.exports = '<div id="genesys-messenger" class="genesys-app">\n  <style>\n    /** Initial iframe styles*/\n    .genesys-mxg-frame {\n      height: 0px;\n      max-height: 712px;\n      width: 0px;\n      top: unset;\n      left: unset;\n      right: sideSpace;\n      bottom: bottomSpace;\n      z-index: 99999999;\n      border: none;\n      position: fixed;\n      margin:0!important;/**WEBMESS-1466: To overwrite the margins set by brand*/\n      min-height: initial!important; /**WEBMESS-1466: to override the min-height set by brand*/\n    }\n\n    .genesys-mxg-container-frame {\n      width: 0px;\n      height: 0px;\n      bottom: messengerFrameBottomSpace\n    }\n\n    .genesys-mxg-expand {\n      max-height: 92%;\n    }\n\n    .genesys-mxg-frame-transition {\n      transition: all 300ms;\n    }\n\n    .genesys-mxg-frame-fullscreen {\n      width: 100% !important;\n      height: 100% !important;\n      max-height: 100%;\n      max-width: 100%;\n    }\n\n    /** Safari browser cannot be targeted using device pixel ratio for zoom **/\n    .mxg-desktop-mac-safari {\n      max-height: 80%;\n    }\n\n    .mxg-desktop-mac-firefox {\n      max-height: 80%;\n    }\n\n    .mxg-desktop-windows-firefox {\n      max-height: 80%;\n    }\n\n    .mxg-desktop-windows-chrome {\n      max-height: 80%;\n    }\n\n    /* Smartphones - potrait */\n    @media screen and (max-width: 600px),\n      screen and (max-device-width: 600px),\n      screen and (max-device-width: 600px) and (orientation: landscape),\n      screen and (max-device-height: 428px) and (orientation: landscape),\n      screen and (max-device-width: 711px) and (orientation: landscape) {\n      .genesys-mxg-responsive {\n        width: 0px;\n        height: 0px;\n        max-height: 100%;\n        max-width: 100%;\n      }\n\n      /* WEBMESS-1144: Set left, right and bottom to 0px to stop iframe expanding off screen on smaller devices */\n      .genesys-mxg-conversation {\n        height: 100% !important;\n        width: 100% !important;\n        left: 0px !important;\n        right: 0px !important;\n        bottom: 0px !important;\n      }\n\n      /* WEBMESS-1144: Set left, right and bottom to 0px to stop iframe expanding off screen on smaller devices */\n      .genesys-mxg-homescreen {\n        height: 100% !important;\n        width: 100% !important;\n        left: 0px !important;\n        right: 0px !important;\n        bottom: 0px !important;\n      }\n\n      .mxg-desktop-mac-firefox {\n        max-height: 98%;\n      }\n\n      .mxg-desktop-windows-chrome {\n        max-height: 100%!important;\n      }\n    }\n\n    /* Smartphones - landscape */\n    @media screen and (max-device-width: 600px) and (orientation: landscape),\n      screen and (max-device-width: 768px) and (orientation: landscape),\n      screen and (max-device-width: 823px) and (orientation: landscape){\n        .genesys-mxg-engage {\n          width: 380px;\n        }\n    }\n\n    /*mozilla specific media query*/\n    @-moz-document url-prefix() {\n      @media screen and (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.5) {\n        .mxg-desktop-windows-firefox {\n          max-height: 70%;\n        }\n      }\n      /* WEBMESS-1374: Reflow: Not meeting 400% zoom */\n      @media screen and (min--moz-device-pixel-ratio: 4) and (max--moz-device-pixel-ratio: 4) {\n        .mxg-desktop-windows-firefox {\n          max-height: 98%;\n        }\n        body, html {\n          overflow-x: hidden;  /* Hide horizontal scrollbar at 400x on mozilla firefox */\n        }\n      }\n    }\n\n    /*WEBMESS-938:From zoom level 150%, for home screen to maintain the visible height ( applicable for windows/mac chrome browser, edge)*/\n\n    @media all and (-webkit-min-device-pixel-ratio: 1.3) and (-webkit-max-device-pixel-ratio: 3.0) {\n      .mxg-desktop-windows-chrome {\n        max-height: 75%;\n      }\n    }\n\n    @media screen and (min-device-width: 1200px) and (max-device-width: 1920px) {\n\n      /* to avoid overlapping of launcher and messenger in the specified ranges (desktops/laptops) from 150%\n    desktops */\n\n      @media all and (-webkit-min-device-pixel-ratio: 1.5) {\n        .mxg-desktop-windows-chrome {\n          max-height: 70%;\n        }\n        .mxg-desktop-mac-chrome {\n          max-height: 80%;\n        }\n      }\n\n      @media all and (-webkit-min-device-pixel-ratio: 1.875) and (-webkit-max-device-pixel-ratio: 2.5){\n\n        .mxg-desktop-windows-chrome {\n          max-height: 70% !important;\n        }\n\n        .mxg-desktop-mac-chrome {\n          max-height: 70% !important;\n        }\n      }\n\n      @media all and (-webkit-device-pixel-ratio: 3) {\n        .mxg-desktop-windows-chrome {\n          max-height: 80% !important;\n        }\n      }\n\n      @media all and (-webkit-device-pixel-ratio: 3.5) {\n        .mxg-desktop-windows-chrome {\n          max-height: 70% !important;\n        }\n      }\n      @media all and (-webkit-min-device-pixel-ratio: 2.6) and (-webkit-max-device-pixel-ratio: 3.5) {\n        /* Support for 300% zoom on windows, macOS: edge, chrome */\n        .mxg-desktop-mac-chrome {\n          max-height: 65%;\n        }\n      }\n\n      /* From 400% zoom */\n      @media all and (-webkit-min-device-pixel-ratio: 3.5) and (-webkit-max-device-pixel-ratio: 5) {\n        .mxg-desktop-mac-chrome {\n          max-height: 98% !important;\n        }\n\n        .genesys-mxg-homescreen {\n          height: 100% !important;\n          width: 100% !important;\n          left: 0px !important;\n          right: 0px !important;\n          bottom: 0px !important;\n        }\n        body, html {\n          overflow-x: hidden; /* WEBMESS-1374: Reflow: Not meeting 400% zoom - Hide horizontal scrollbar at 400% */\n        }\n      }\n\n      @media all and (-webkit-min-device-pixel-ratio: 6) {\n        .mxg-desktop-mac-chrome {\n          max-height: 98%;\n        }\n      }\n    }\n\n  </style>\n  <iframe\n    allowfullscreen\n    class="genesys-mxg-frame genesys-mxg-responsive genesys-mxg-launcher-frame"\n    id="genesys-mxg-frame"\n    title="Messenger Launcher"\n    name="MessengerLauncherFrame"\n    width="100%"\n    src="{url}"\n  ></iframe>\n  <iframe\n    allowfullscreen\n    class="genesys-mxg-frame genesys-mxg-responsive genesys-mxg-container-frame"\n    id="genesys-mxg-container-frame"\n    title="Messenger"\n    name="MessengerFrame"\n    width="100%"\n    src="{messenger-renderer-url}"\n  ></iframe>\n\n</div>\n'
    },
    "./includes/plugin.cookies.js": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./includes/util.js");
        /*!
 * Cookies Plugin
 * Provides utilities for managing cookies.
 *
 * Originally ported from: https://bitbucket.org/inindca/predictive-engagement-sdk/src/master/src/cookies.js
 */
        const {deploymentId: o} = Genesys.c || {};
        Genesys("registerPlugin", "Cookies", e => {
            const t = e.data;
            function n(e) {
                return e.split(".").length >= 2 ? "." + e : e
            }
            function i(e, t, r, o, i) {
                let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "/";
                const a = [];
                return a.push(`${e}=${t || !1 === t ? t : ""}`),
                r && a.push("expires=" + r),
                o && a.push("domain=" + n(o)),
                a.push("path=" + s),
                "boolean" == typeof i && a.push("secure=" + i),
                a.join("; ")
            }
            function s(e) {
                const n = t("prefix");
                if (0 === e.indexOf(n))
                    return e;
                return `${n}${r.b.includes(e) ? o + ":" : ""}${e}`
            }
            function a(e) {
                const t = function(e) {
                    const t = e + "="
                      , n = document.cookie.split(";");
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e].trim();
                        if (0 === r.indexOf(t))
                            return r.substring(t.length, r.length)
                    }
                    return null
                }(s(e));
                return Object(r.i)(t) ? null : decodeURIComponent(t)
            }
            function u(e, n, r) {
                const o = r || {}
                  , a = s(e)
                  , u = o.domain || t("domain")
                  , l = r.secure || "";
                let f = null;
                if (o.expireInSecs) {
                    f = new Date(Date.now() + 1e3 * o.expireInSecs).toGMTString()
                }
                const d = document.location.hostname.split(".");
                d.length > 2 && c(a, {
                    domain: d.slice(0, d.length).join(".")
                }),
                document.cookie = i(a, n, f, u, l)
            }
            function c(e, n) {
                const r = Object.assign({
                    recursive: !0
                }, n || {})
                  , o = s(e)
                  , a = r.domain || t("domain");
                if (!0 === r.recursive) {
                    const e = a.split(".");
                    let t;
                    for (let n = e.length - 2; n >= 1; n--)
                        t = e.slice(n, e.length).join("."),
                        document.cookie = i(o, null, "Thu, 01 Jan 1970 00:00:01 GMT", t)
                }
                document.cookie = i(o, null, "Thu, 01 Jan 1970 00:00:01 GMT", a)
            }
            !function(e) {
                const n = e || {};
                t("prefix", "string" == typeof n.prefix ? n.prefix : "_");
                let r = n.domain || function(e) {
                    const t = e.split(".");
                    if (t.length <= 2)
                        return e;
                    let n;
                    for (let e = t.length - 2; e >= 0 && (n = t.slice(e, t.length).join("."),
                    u("genesysJsCanary", "(^_^)", {
                        domain: n,
                        secure: !0
                    }),
                    "(^_^)" !== a("genesysJsCanary")); e--)
                        ;
                    return c("genesysJsCanary", {
                        domain: n
                    }),
                    n
                }(document.location.hostname);
                0 === r.indexOf("www.") && (r = r.slice(4)),
                t("domain", r)
            }()
        }
        )
    },
    "./includes/plugin.support-center-helper.js": function(e, t) {
        Genesys("registerPlugin", "SupportCenterHelper", e => {
            e.registerCommand("configure", t => {
                const n = t.data || {}
                  , r = (n.deploymentConfig || {}).supportCenter.targetElementSelector || "#genesys-support-center";
                function o() {
                    Genesys("loadPlugin", "SupportCenter", n),
                    function() {
                        const t = document.createElement("link")
                          , n = e.data("ServiceDiscovery.uris.staticAssets");
                        t.href = n + "/support-center/support-center-plugins/main.css",
                        t.rel = "stylesheet",
                        document.head.appendChild(t)
                    }()
                }
                function i() {
                    document.querySelector(r) && o()
                }
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(),
                t.resolve()
            }
            ),
            e.ready()
        }
        )
    },
    "./includes/thirdPartyHelper.html": function(e, t) {
        e.exports = '<div id="genesys-thirdparty">\n  <style>\n      /** Initial iframe styles*/\n      .genesys-thirdparty-frame {\n          height: 0px;\n          width: 0px;\n          top: unset;\n          left: unset;\n          right: sideSpace;\n          bottom: bottomSpace;\n          z-index: 99999999;\n          border: none;\n          position: fixed;\n          display: none;\n      }\n  </style>\n  <iframe\n    class="genesys-thirdparty-frame"\n    id="genesys-thirdparty-frame"\n    name="GenesysThirdpartyFrame"\n    src="{genesys-thirdparty-url}" \n  ></iframe>\n</div>'
    },
    "./includes/util.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return l
        }
        )),
        n.d(t, "i", (function() {
            return f
        }
        )),
        n.d(t, "k", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return p
        }
        )),
        n.d(t, "n", (function() {
            return h
        }
        )),
        n.d(t, "o", (function() {
            return m
        }
        )),
        n.d(t, "e", (function() {
            return g
        }
        )),
        n.d(t, "j", (function() {
            return y
        }
        )),
        n.d(t, "f", (function() {
            return b
        }
        )),
        n.d(t, "m", (function() {
            return v
        }
        )),
        n.d(t, "p", (function() {
            return D
        }
        )),
        n.d(t, "l", (function() {
            return w
        }
        )),
        n.d(t, "d", (function() {
            return E
        }
        )),
        n.d(t, "g", (function() {
            return x
        }
        )),
        n.d(t, "h", (function() {
            return A
        }
        )),
        n.d(t, "q", (function() {
            return C
        }
        ));
        const r = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
        let o = "LocalStorage";
        let i = ""
          , s = []
          , a = {};
        const {storedItemsMigrated: u} = function() {
            const e = {
                bNewRelicReady: !1,
                bSubscribedToNewRelicReady: !1,
                bOnReadySendItemsMigrated: !1,
                deploymentId: "",
                subscribeNewRelicReady: () => {
                    e.bSubscribedToNewRelicReady = !0,
                    Genesys("subscribe", "NewRelic.data.enabled", t => {
                        t.data && (e.bNewRelicReady = !!t.data.value),
                        e.bNewRelicReady && e.bOnReadySendItemsMigrated && (e.sendNewRelicPageAction("StoredItemsMigrated", e.deploymentId),
                        e.bOnReadySendItemsMigrated = !1)
                    }
                    )
                }
                ,
                sendNewRelicPageAction: (e, t) => {
                    Genesys("command", "NewRelic.addPageAction", {
                        name: e,
                        deploymentId: t
                    })
                }
                ,
                storedItemsMigrated: t => {
                    e.deploymentId = t,
                    e.bNewRelicReady ? e.sendNewRelicPageAction("StoredItemsMigrated", t) : (e.bSubscribedToNewRelicReady || e.subscribeNewRelicReady(),
                    e.bOnReadySendItemsMigrated = !0)
                }
            };
            return e
        }()
          , c = ["Auth", "Conversations", "CobrowseService", "Cobrowse", "VideoService", "Cookies", "Engage", "Genesys", "GenesysJS", "Home", "Identifiers", "Journey", "Knowledge", "KnowledgeService", "Launcher", "LocalStorageTest", "MessagingService", "MessagingMiddleware", "Messenger", "NewRelic", "SubMessenger", "SupportCenter", "Toaster", "LocalStorage"]
          , l = ["actmu", "actms", "actts", "actvc", "actmr", "actec", "actsc", "gcatkn", "gcartkn"];
        function f(e) {
            return null == e
        }
        function d(e) {
            return "string" == typeof e && r.test(e)
        }
        function p(e) {
            return Object.assign({}, e)
        }
        function h(e) {
            const t = {};
            for (const n in e)
                if (n && "object" == typeof e["" + n] && null !== e["" + n])
                    t["" + n] = h(e["" + n]);
                else {
                    if (!n || "string" != typeof e["" + n])
                        return;
                    t["" + n] = e["" + n]
                }
            return t
        }
        function m(e, t) {
            return new Promise(n => {
                s = t,
                a = function e(t, n) {
                    return Object.keys(t).reduce( (r, o) => {
                        let i = !(-1 === s.indexOf(o));
                        return n && (i = !(-1 === s.indexOf(`${n}.${o}`))),
                        !i && Array.isArray(t[o]) ? r[o] = t[o] : n && !i ? "object" != typeof t[o] ? r[o] = t[o] : r[o] = e(t[o], `${n}.${o}`) : i || "object" == typeof t[o] || -1 !== s.indexOf(o) ? i || "object" != typeof t[o] || (r[o] = e(t[o], o)) : r[o] = t[o],
                        r
                    }
                    , {})
                }(e),
                n(a)
            }
            )
        }
        function g() {
            return a
        }
        function y() {
            return new Promise(e => {
                i = e
            }
            )
        }
        function b() {
            const e = localStorage.getItem("genesysjs");
            if (e) {
                let t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    console.warn("Error parsing JSON", e)
                }
                const {cookies: n} = t;
                n && (o = "Cookies")
            }
            return o
        }
        function v(e, t, n, r) {
            if (window.localStorage && l.includes(e)) {
                const o = `${n}${e}`
                  , i = `${n}${t}:${e}`
                  , s = localStorage.getItem(o)
                  , a = localStorage.getItem(i);
                s && (a || (r.command("set", {
                    name: i,
                    value: s
                }),
                u(t)),
                localStorage.removeItem(o))
            }
        }
        function D(e) {
            if (( () => {
                if (!window.DOMParser)
                    return !1;
                const e = new DOMParser;
                try {
                    e.parseFromString("x", "text/html")
                } catch (e) {
                    return !1
                }
                return !0
            }
            )()) {
                return (new DOMParser).parseFromString(e, "text/html").body.firstChild
            }
            const t = document.createElement("div");
            return t.innerHTML = e,
            t
        }
        function w() {
            const e = {};
            let t = !1
              , n = 0;
            "boolean" == typeof (arguments.length <= 0 ? void 0 : arguments[0]) && (t = arguments.length <= 0 ? void 0 : arguments[0],
            n++);
            const r = n => {
                for (const r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t && "[object Object]" === Object.prototype.toString.call(n["" + r]) ? "[object Object]" === Object.prototype.toString.call(e["" + r]) ? e["" + r] = w(!0, e["" + r], n["" + r]) : e["" + r] = w(e["" + r], n["" + r]) : e[r] = n[r])
            }
            ;
            for (; n < arguments.length; n++)
                r(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
            return e
        }
        function E(e) {
            const t = {};
            for (const n in e)
                Object.prototype.hasOwnProperty.call(e, n) && "function" != typeof e[n] && (t[n] = e[n]);
            return t
        }
        function x() {
            const e = navigator.userAgent.match(/Firefox[/\s](\d+\.\d+)/);
            return Array.isArray(e) && e.length >= 2
        }
        function A() {
            return !!/iP(hone|od)/i.test(window.navigator.userAgent)
        }
        function C(e) {
            const t = ["https://apps.inindca.com", "https://apps.inintca.com", "https://apps.mypurecloud.jp", "https://apps.apne2.pure.cloud", "https://apps.mypurecloud.com.au", "https://apps.aps1.pure.cloud", "https://apps.cac1.pure.cloud", "https://apps.mypurecloud.de", "https://apps.mypurecloud.ie", "https://apps.euw2.pure.cloud", "https://apps.mypurecloud.com", "https://apps.usw2.pure.cloud", "https://apps.use2.us-gov-pure.cloud", "https://apps.sae1.pure.cloud", "https://apps.mec1.pure.cloud", "https://apps.apne3.pure.cloud", "https://apps.euc2.pure.cloud"];
            for (let n = 0; n < t.length; n++)
                if (t[n] === e)
                    return !0;
            return !1
        }
    },
    "./node_modules/@genesys/service-discovery-web-internal/index.umd.js": function(e, t, n) {
        (function(e) {
            (function(t) {
                "use strict";
                var n = function() {
                    return (n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }
                    ).apply(this, arguments)
                };
                function r(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                            !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                            r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }
                var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}
                  , i = function(e, t) {
                    if (t = t.split(":")[0],
                    !(e = +e))
                        return !1;
                    switch (t) {
                    case "http":
                    case "ws":
                        return 80 !== e;
                    case "https":
                    case "wss":
                        return 443 !== e;
                    case "ftp":
                        return 21 !== e;
                    case "gopher":
                        return 70 !== e;
                    case "file":
                        return !1
                    }
                    return 0 !== e
                }
                  , s = Object.prototype.hasOwnProperty;
                function a(e) {
                    try {
                        return decodeURIComponent(e.replace(/\+/g, " "))
                    } catch (e) {
                        return null
                    }
                }
                function u(e) {
                    try {
                        return encodeURIComponent(e)
                    } catch (e) {
                        return null
                    }
                }
                var c = {
                    stringify: function(e, t) {
                        t = t || "";
                        var n, r, o = [];
                        for (r in "string" != typeof t && (t = "?"),
                        e)
                            if (s.call(e, r)) {
                                if ((n = e[r]) || null != n && !isNaN(n) || (n = ""),
                                r = u(r),
                                n = u(n),
                                null === r || null === n)
                                    continue;
                                o.push(r + "=" + n)
                            }
                        return o.length ? t + o.join("&") : ""
                    },
                    parse: function(e) {
                        for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e); ) {
                            var o = a(t[1])
                              , i = a(t[2]);
                            null === o || null === i || o in r || (r[o] = i)
                        }
                        return r
                    }
                }
                  , l = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
                  , f = /[\n\r\t]/g
                  , d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
                  , p = /:\d+$/
                  , h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
                  , m = /^[a-zA-Z]:/;
                function g(e) {
                    return (e || "").toString().replace(l, "")
                }
                var y = [["#", "hash"], ["?", "query"], function(e, t) {
                    return D(t.protocol) ? e.replace(/\\/g, "/") : e
                }
                , ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
                  , b = {
                    hash: 1,
                    query: 1
                };
                function v(e) {
                    var t, n = ("undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : {}).location || {}, r = {}, i = typeof (e = e || n);
                    if ("blob:" === e.protocol)
                        r = new E(unescape(e.pathname),{});
                    else if ("string" === i)
                        for (t in r = new E(e,{}),
                        b)
                            delete r[t];
                    else if ("object" === i) {
                        for (t in e)
                            t in b || (r[t] = e[t]);
                        void 0 === r.slashes && (r.slashes = d.test(e.href))
                    }
                    return r
                }
                function D(e) {
                    return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
                }
                function w(e, t) {
                    e = (e = g(e)).replace(f, ""),
                    t = t || {};
                    var n, r = h.exec(e), o = r[1] ? r[1].toLowerCase() : "", i = !!r[2], s = !!r[3], a = 0;
                    return i ? s ? (n = r[2] + r[3] + r[4],
                    a = r[2].length + r[3].length) : (n = r[2] + r[4],
                    a = r[2].length) : s ? (n = r[3] + r[4],
                    a = r[3].length) : n = r[4],
                    "file:" === o ? a >= 2 && (n = n.slice(2)) : D(o) ? n = r[4] : o ? i && (n = n.slice(2)) : a >= 2 && D(t.protocol) && (n = r[4]),
                    {
                        protocol: o,
                        slashes: i || D(o),
                        slashesCount: a,
                        rest: n
                    }
                }
                function E(e, t, n) {
                    if (e = (e = g(e)).replace(f, ""),
                    !(this instanceof E))
                        return new E(e,t,n);
                    var r, o, s, a, u, l, d = y.slice(), p = typeof t, h = this, b = 0;
                    for ("object" !== p && "string" !== p && (n = t,
                    t = null),
                    n && "function" != typeof n && (n = c.parse),
                    r = !(o = w(e || "", t = v(t))).protocol && !o.slashes,
                    h.slashes = o.slashes || r && t.slashes,
                    h.protocol = o.protocol || t.protocol || "",
                    e = o.rest,
                    ("file:" === o.protocol && (2 !== o.slashesCount || m.test(e)) || !o.slashes && (o.protocol || o.slashesCount < 2 || !D(h.protocol))) && (d[3] = [/(.*)/, "pathname"]); b < d.length; b++)
                        "function" != typeof (a = d[b]) ? (s = a[0],
                        l = a[1],
                        s != s ? h[l] = e : "string" == typeof s ? ~(u = "@" === s ? e.lastIndexOf(s) : e.indexOf(s)) && ("number" == typeof a[2] ? (h[l] = e.slice(0, u),
                        e = e.slice(u + a[2])) : (h[l] = e.slice(u),
                        e = e.slice(0, u))) : (u = s.exec(e)) && (h[l] = u[1],
                        e = e.slice(0, u.index)),
                        h[l] = h[l] || r && a[3] && t[l] || "",
                        a[4] && (h[l] = h[l].toLowerCase())) : e = a(e, h);
                    n && (h.query = n(h.query)),
                    r && t.slashes && "/" !== h.pathname.charAt(0) && ("" !== h.pathname || "" !== t.pathname) && (h.pathname = function(e, t) {
                        if ("" === e)
                            return t;
                        for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, s = 0; r--; )
                            "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1),
                            s++) : s && (0 === r && (i = !0),
                            n.splice(r, 1),
                            s--);
                        return i && n.unshift(""),
                        "." !== o && ".." !== o || n.push(""),
                        n.join("/")
                    }(h.pathname, t.pathname)),
                    "/" !== h.pathname.charAt(0) && D(h.protocol) && (h.pathname = "/" + h.pathname),
                    i(h.port, h.protocol) || (h.host = h.hostname,
                    h.port = ""),
                    h.username = h.password = "",
                    h.auth && (~(u = h.auth.indexOf(":")) ? (h.username = h.auth.slice(0, u),
                    h.username = encodeURIComponent(decodeURIComponent(h.username)),
                    h.password = h.auth.slice(u + 1),
                    h.password = encodeURIComponent(decodeURIComponent(h.password))) : h.username = encodeURIComponent(decodeURIComponent(h.auth)),
                    h.auth = h.password ? h.username + ":" + h.password : h.username),
                    h.origin = "file:" !== h.protocol && D(h.protocol) && h.host ? h.protocol + "//" + h.host : "null",
                    h.href = h.toString()
                }
                E.prototype = {
                    set: function(e, t, n) {
                        var r = this;
                        switch (e) {
                        case "query":
                            "string" == typeof t && t.length && (t = (n || c.parse)(t)),
                            r[e] = t;
                            break;
                        case "port":
                            r[e] = t,
                            i(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname,
                            r[e] = "");
                            break;
                        case "hostname":
                            r[e] = t,
                            r.port && (t += ":" + r.port),
                            r.host = t;
                            break;
                        case "host":
                            r[e] = t,
                            p.test(t) ? (t = t.split(":"),
                            r.port = t.pop(),
                            r.hostname = t.join(":")) : (r.hostname = t,
                            r.port = "");
                            break;
                        case "protocol":
                            r.protocol = t.toLowerCase(),
                            r.slashes = !n;
                            break;
                        case "pathname":
                        case "hash":
                            if (t) {
                                var o = "pathname" === e ? "/" : "#";
                                r[e] = t.charAt(0) !== o ? o + t : t
                            } else
                                r[e] = t;
                            break;
                        case "username":
                        case "password":
                            r[e] = encodeURIComponent(t);
                            break;
                        case "auth":
                            var s = t.indexOf(":");
                            ~s ? (r.username = t.slice(0, s),
                            r.username = encodeURIComponent(decodeURIComponent(r.username)),
                            r.password = t.slice(s + 1),
                            r.password = encodeURIComponent(decodeURIComponent(r.password))) : r.username = encodeURIComponent(decodeURIComponent(t))
                        }
                        for (var a = 0; a < y.length; a++) {
                            var u = y[a];
                            u[4] && (r[u[1]] = r[u[1]].toLowerCase())
                        }
                        return r.auth = r.password ? r.username + ":" + r.password : r.username,
                        r.origin = "file:" !== r.protocol && D(r.protocol) && r.host ? r.protocol + "//" + r.host : "null",
                        r.href = r.toString(),
                        r
                    },
                    toString: function(e) {
                        e && "function" == typeof e || (e = c.stringify);
                        var t, n = this, r = n.host, o = n.protocol;
                        o && ":" !== o.charAt(o.length - 1) && (o += ":");
                        var i = o + (n.protocol && n.slashes || D(n.protocol) ? "//" : "");
                        return n.username ? (i += n.username,
                        n.password && (i += ":" + n.password),
                        i += "@") : n.password ? (i += ":" + n.password,
                        i += "@") : "file:" !== n.protocol && D(n.protocol) && !r && "/" !== n.pathname && (i += "@"),
                        (":" === r[r.length - 1] || p.test(n.hostname) && !n.port) && (r += ":"),
                        i += r + n.pathname,
                        (t = "object" == typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t),
                        n.hash && (i += n.hash),
                        i
                    }
                },
                E.extractProtocol = w,
                E.location = v,
                E.trimLeft = g,
                E.qs = c;
                var x = E;
                function A(e, t) {
                    if (!e)
                        throw new Error(t)
                }
                function C(e) {
                    A("string" == typeof e, "url is not a string");
                    var t = x(e, {});
                    return A(t.protocol && t.hostname, "invalid url: '".concat(e, "', unable to parse hostname")),
                    t
                }
                function k(e) {
                    A(!!e && "object" == typeof e, "Provided filters must be an object");
                    var t = e;
                    void 0 !== t.env && (A(t.env instanceof Array, "filters.env must be an array"),
                    A(t.env.every((function(e) {
                        return T.indexOf(e) >= 0
                    }
                    )), "'".concat(t.env, "' - filters.env must be an array containing only: ").concat(T.join(",")))),
                    void 0 !== t.status && (A(t.status instanceof Array, "filters.status must be an array"),
                    A(t.status.every((function(e) {
                        return O.indexOf(e) >= 0
                    }
                    )), "'".concat(t.status, "' - filters.status must be an array containing only: ").concat(O.join(","))))
                }
                var S = [{
                    name: "dev",
                    env: "dev",
                    region: "us-east-1",
                    status: "stable",
                    publicDomainName: "inindca.com",
                    publicDomainAliases: []
                }, {
                    name: "fedramp-use2-core",
                    env: "fedramp",
                    region: "us-east-2",
                    status: "stable",
                    publicDomainName: "use2.us-gov-pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod",
                    env: "prod",
                    region: "us-east-1",
                    status: "stable",
                    publicDomainName: "mypurecloud.com",
                    publicDomainAliases: []
                }, {
                    name: "prod-apne1",
                    env: "prod",
                    region: "ap-northeast-1",
                    status: "stable",
                    publicDomainName: "mypurecloud.jp",
                    publicDomainAliases: []
                }, {
                    name: "prod-apne2",
                    env: "prod",
                    region: "ap-northeast-2",
                    status: "stable",
                    publicDomainName: "apne2.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-apne3",
                    env: "prod",
                    region: "ap-northeast-3",
                    status: "stable",
                    publicDomainName: "apne3.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-aps1",
                    env: "prod",
                    region: "ap-south-1",
                    status: "stable",
                    publicDomainName: "aps1.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-apse2",
                    env: "prod",
                    region: "ap-southeast-2",
                    status: "stable",
                    publicDomainName: "mypurecloud.com.au",
                    publicDomainAliases: []
                }, {
                    name: "prod-cac1",
                    env: "prod",
                    region: "ca-central-1",
                    status: "stable",
                    publicDomainName: "cac1.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-euc1",
                    env: "prod",
                    region: "eu-central-1",
                    status: "stable",
                    publicDomainName: "mypurecloud.de",
                    publicDomainAliases: []
                }, {
                    name: "prod-euc2",
                    env: "prod",
                    region: "eu-central-2",
                    status: "stable",
                    publicDomainName: "euc2.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-euw1",
                    env: "prod",
                    region: "eu-west-1",
                    status: "stable",
                    publicDomainName: "mypurecloud.ie",
                    publicDomainAliases: []
                }, {
                    name: "prod-euw2",
                    env: "prod",
                    region: "eu-west-2",
                    status: "stable",
                    publicDomainName: "euw2.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-mec1",
                    env: "prod",
                    region: "me-central-1",
                    status: "stable",
                    publicDomainName: "mec1.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-sae1",
                    env: "prod",
                    region: "sa-east-1",
                    status: "stable",
                    publicDomainName: "sae1.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "prod-usw2",
                    env: "prod",
                    region: "us-west-2",
                    status: "stable",
                    publicDomainName: "usw2.pure.cloud",
                    publicDomainAliases: []
                }, {
                    name: "test",
                    env: "test",
                    region: "us-east-1",
                    status: "stable",
                    publicDomainName: "inintca.com",
                    publicDomainAliases: []
                }]
                  , T = ["dev", "test", "prod", "fedramp"]
                  , O = ["alpha", "beta", "stable", "archived"]
                  , _ = ["localhost", "127.0.0.1"]
                  , F = {
                    env: ["prod", "fedramp"],
                    status: ["stable"]
                }
                  , j = {}
                  , R = function(e) {
                    return function(t) {
                        return e === t || (n = e,
                        r = ".".concat(t),
                        n.slice(n.length - r.length) === r);
                        var n, r
                    }
                }
                  , I = function(e) {
                    void 0 === e && (e = F),
                    k(e);
                    var t = e.env
                      , n = e.status;
                    return S.filter((function(e) {
                        return void 0 === t || t.indexOf(e.env) >= 0
                    }
                    )).filter((function(e) {
                        return void 0 === n || n.indexOf(e.status) >= 0
                    }
                    ))
                }
                  , N = function(e, t) {
                    var n = C(e).hostname;
                    return I(t).find((function(e) {
                        return r([e.publicDomainName], e.publicDomainAliases, !0).filter((function(e) {
                            return !!e
                        }
                        )).some(R(n))
                    }
                    ))
                }
                  , B = function(e, t) {
                    void 0 === e && (e = window.location.href),
                    void 0 === t && (t = j),
                    k(t);
                    var o = C(e).hostname
                      , i = N(e, t);
                    if (i)
                        return n(n({}, i), {
                            local: !1,
                            currentDomainName: r([i.publicDomainName], i.publicDomainAliases, !0).filter((function(e) {
                                return !!e
                            }
                            )).find(R(o))
                        })
                }
                  , P = function(e) {
                    return void 0 === e && (e = _),
                    function(t, r) {
                        void 0 === t && (t = window.location.href),
                        void 0 === r && (r = j),
                        k(r),
                        function(e, t) {
                            void 0 === t && (t = "value"),
                            A(e instanceof Array, "".concat(t, " must be an array of strings"));
                            for (var n = 0, r = e; n < r.length; n++)
                                A("string" == typeof r[n], "Each item in ".concat(t, " must be a string"))
                        }(e, "localHostnames");
                        var o = C(t)
                          , i = o.hostname
                          , s = o.pathname;
                        if (e.indexOf(i) >= 0) {
                            var a = s.split("/")[1]
                              , u = I(r).find((function(e) {
                                return e.name === a
                            }
                            ));
                            if (!u)
                                return;
                            return n(n({}, u), {
                                local: !0,
                                currentDomainName: u.publicDomainName
                            })
                        }
                    }
                };
                t.ENVS = T,
                t.STATUSES = O,
                t.getEnvironments = I,
                t.isKnown = function(e, t) {
                    return !!N(e, t)
                }
                ,
                t.parse = N,
                t.parseDeployedRuntime = B,
                t.parseRuntime = function(e, t) {
                    return void 0 === e && (e = window.location.href),
                    void 0 === t && (t = j),
                    P()(e, t) || B(e, t)
                }
                ,
                t.parseRuntimeFromLocalPath = P,
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            )(t)
        }
        ).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/axios/lib/axios.js": function(e, t, n) {
        "use strict";
        var r = {};
        n.r(r),
        n.d(r, "hasBrowserEnv", (function() {
            return y
        }
        )),
        n.d(r, "hasStandardBrowserWebWorkerEnv", (function() {
            return D
        }
        )),
        n.d(r, "hasStandardBrowserEnv", (function() {
            return b
        }
        ));
        var o = n("./node_modules/axios/lib/utils.js")
          , i = n("./node_modules/axios/lib/helpers/bind.js")
          , s = n("./node_modules/axios/lib/helpers/toFormData.js");
        function a(e) {
            const t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
                return t[e]
            }
            ))
        }
        function u(e, t) {
            this._pairs = [],
            e && Object(s.a)(e, this, t)
        }
        const c = u.prototype;
        c.append = function(e, t) {
            this._pairs.push([e, t])
        }
        ,
        c.toString = function(e) {
            const t = e ? function(t) {
                return e.call(this, t, a)
            }
            : a;
            return this._pairs.map((function(e) {
                return t(e[0]) + "=" + t(e[1])
            }
            ), "").join("&")
        }
        ;
        var l = u;
        function f(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        function d(e, t, n) {
            if (!t)
                return e;
            const r = n && n.encode || f
              , i = n && n.serialize;
            let s;
            if (s = i ? i(t, n) : o.a.isURLSearchParams(t) ? t.toString() : new l(t,n).toString(r),
            s) {
                const t = e.indexOf("#");
                -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + s
            }
            return e
        }
        var p = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }),
                this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                o.a.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
        }
          , h = n("./node_modules/axios/lib/core/AxiosError.js")
          , m = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
          , g = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : l,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        };
        const y = "undefined" != typeof window && "undefined" != typeof document
          , b = (v = "undefined" != typeof navigator && navigator.product,
        y && ["ReactNative", "NativeScript", "NS"].indexOf(v) < 0);
        var v;
        const D = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
        var w = {
            ...r,
            ...g
        };
        var E = function(e) {
            function t(e, n, r, i) {
                let s = e[i++];
                if ("__proto__" === s)
                    return !0;
                const a = Number.isFinite(+s)
                  , u = i >= e.length;
                if (s = !s && o.a.isArray(r) ? r.length : s,
                u)
                    return o.a.hasOwnProp(r, s) ? r[s] = [r[s], n] : r[s] = n,
                    !a;
                r[s] && o.a.isObject(r[s]) || (r[s] = []);
                return t(e, n, r[s], i) && o.a.isArray(r[s]) && (r[s] = function(e) {
                    const t = {}
                      , n = Object.keys(e);
                    let r;
                    const o = n.length;
                    let i;
                    for (r = 0; r < o; r++)
                        i = n[r],
                        t[i] = e[i];
                    return t
                }(r[s])),
                !a
            }
            if (o.a.isFormData(e) && o.a.isFunction(e.entries)) {
                const n = {};
                return o.a.forEachEntry(e, (e, r) => {
                    t(function(e) {
                        return o.a.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0])
                    }(e), r, n, 0)
                }
                ),
                n
            }
            return null
        };
        const x = {
            transitional: m,
            adapter: ["xhr", "http"],
            transformRequest: [function(e, t) {
                const n = t.getContentType() || ""
                  , r = n.indexOf("application/json") > -1
                  , i = o.a.isObject(e);
                i && o.a.isHTMLForm(e) && (e = new FormData(e));
                if (o.a.isFormData(e))
                    return r ? JSON.stringify(E(e)) : e;
                if (o.a.isArrayBuffer(e) || o.a.isBuffer(e) || o.a.isStream(e) || o.a.isFile(e) || o.a.isBlob(e))
                    return e;
                if (o.a.isArrayBufferView(e))
                    return e.buffer;
                if (o.a.isURLSearchParams(e))
                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
                let a;
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1)
                        return function(e, t) {
                            return Object(s.a)(e, new w.classes.URLSearchParams, Object.assign({
                                visitor: function(e, t, n, r) {
                                    return w.isNode && o.a.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                    !1) : r.defaultVisitor.apply(this, arguments)
                                }
                            }, t))
                        }(e, this.formSerializer).toString();
                    if ((a = o.a.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        const t = this.env && this.env.FormData;
                        return Object(s.a)(a ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return i || r ? (t.setContentType("application/json", !1),
                function(e, t, n) {
                    if (o.a.isString(e))
                        try {
                            return (t || JSON.parse)(e),
                            o.a.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name)
                                throw e
                        }
                    return (n || JSON.stringify)(e)
                }(e)) : e
            }
            ],
            transformResponse: [function(e) {
                const t = this.transitional || x.transitional
                  , n = t && t.forcedJSONParsing
                  , r = "json" === this.responseType;
                if (e && o.a.isString(e) && (n && !this.responseType || r)) {
                    const n = !(t && t.silentJSONParsing) && r;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (n) {
                            if ("SyntaxError" === e.name)
                                throw h.a.from(e, h.a.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: w.classes.FormData,
                Blob: w.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        o.a.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
            x.headers[e] = {}
        }
        );
        var A = x;
        const C = o.a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
        const k = Symbol("internals");
        function S(e) {
            return e && String(e).trim().toLowerCase()
        }
        function T(e) {
            return !1 === e || null == e ? e : o.a.isArray(e) ? e.map(T) : String(e)
        }
        function O(e, t, n, r, i) {
            return o.a.isFunction(r) ? r.call(this, t, n) : (i && (t = n),
            o.a.isString(t) ? o.a.isString(r) ? -1 !== t.indexOf(r) : o.a.isRegExp(r) ? r.test(t) : void 0 : void 0)
        }
        class _ {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, n) {
                const r = this;
                function i(e, t, n) {
                    const i = S(t);
                    if (!i)
                        throw new Error("header name must be a non-empty string");
                    const s = o.a.findKey(r, i);
                    (!s || void 0 === r[s] || !0 === n || void 0 === n && !1 !== r[s]) && (r[s || t] = T(e))
                }
                const s = (e, t) => o.a.forEach(e, (e, n) => i(e, n, t));
                return o.a.isPlainObject(e) || e instanceof this.constructor ? s(e, t) : o.a.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? s((e => {
                    const t = {};
                    let n, r, o;
                    return e && e.split("\n").forEach((function(e) {
                        o = e.indexOf(":"),
                        n = e.substring(0, o).trim().toLowerCase(),
                        r = e.substring(o + 1).trim(),
                        !n || t[n] && C[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                    }
                    )),
                    t
                }
                )(e), t) : null != e && i(t, e, n),
                this
            }
            get(e, t) {
                if (e = S(e)) {
                    const n = o.a.findKey(this, e);
                    if (n) {
                        const e = this[n];
                        if (!t)
                            return e;
                        if (!0 === t)
                            return function(e) {
                                const t = Object.create(null)
                                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                let r;
                                for (; r = n.exec(e); )
                                    t[r[1]] = r[2];
                                return t
                            }(e);
                        if (o.a.isFunction(t))
                            return t.call(this, e, n);
                        if (o.a.isRegExp(t))
                            return t.exec(e);
                        throw new TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = S(e)) {
                    const n = o.a.findKey(this, e);
                    return !(!n || void 0 === this[n] || t && !O(0, this[n], n, t))
                }
                return !1
            }
            delete(e, t) {
                const n = this;
                let r = !1;
                function i(e) {
                    if (e = S(e)) {
                        const i = o.a.findKey(n, e);
                        !i || t && !O(0, n[i], i, t) || (delete n[i],
                        r = !0)
                    }
                }
                return o.a.isArray(e) ? e.forEach(i) : i(e),
                r
            }
            clear(e) {
                const t = Object.keys(this);
                let n = t.length
                  , r = !1;
                for (; n--; ) {
                    const o = t[n];
                    e && !O(0, this[o], o, e, !0) || (delete this[o],
                    r = !0)
                }
                return r
            }
            normalize(e) {
                const t = this
                  , n = {};
                return o.a.forEach(this, (r, i) => {
                    const s = o.a.findKey(n, i);
                    if (s)
                        return t[s] = T(r),
                        void delete t[i];
                    const a = e ? function(e) {
                        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
                    }(i) : String(i).trim();
                    a !== i && delete t[i],
                    t[a] = T(r),
                    n[a] = !0
                }
                ),
                this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                const t = Object.create(null);
                return o.a.forEach(this, (n, r) => {
                    null != n && !1 !== n && (t[r] = e && o.a.isArray(n) ? n.join(", ") : n)
                }
                ),
                t
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map( ([e,t]) => e + ": " + t).join("\n")
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e, ...t) {
                const n = new this(e);
                return t.forEach(e => n.set(e)),
                n
            }
            static accessor(e) {
                const t = (this[k] = this[k] = {
                    accessors: {}
                }).accessors
                  , n = this.prototype;
                function r(e) {
                    const r = S(e);
                    t[r] || (!function(e, t) {
                        const n = o.a.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(r => {
                            Object.defineProperty(e, r + n, {
                                value: function(e, n, o) {
                                    return this[r].call(this, t, e, n, o)
                                },
                                configurable: !0
                            })
                        }
                        )
                    }(n, e),
                    t[r] = !0)
                }
                return o.a.isArray(e) ? e.forEach(r) : r(e),
                this
            }
        }
        _.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        o.a.reduceDescriptors(_.prototype, ({value: e}, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[n] = e
                }
            }
        }
        ),
        o.a.freezeMethods(_);
        var F = _;
        function j(e, t) {
            const n = this || A
              , r = t || n
              , i = F.from(r.headers);
            let s = r.data;
            return o.a.forEach(e, (function(e) {
                s = e.call(n, s, i.normalize(), t ? t.status : void 0)
            }
            )),
            i.normalize(),
            s
        }
        function R(e) {
            return !(!e || !e.__CANCEL__)
        }
        function I(e, t, n) {
            h.a.call(this, null == e ? "canceled" : e, h.a.ERR_CANCELED, t, n),
            this.name = "CanceledError"
        }
        o.a.inherits(I, h.a, {
            __CANCEL__: !0
        });
        var N = I
          , B = n("./node_modules/axios/lib/helpers/null.js");
        var P = w.hasStandardBrowserEnv ? {
            write(e, t, n, r, i, s) {
                const a = [e + "=" + encodeURIComponent(t)];
                o.a.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                o.a.isString(r) && a.push("path=" + r),
                o.a.isString(i) && a.push("domain=" + i),
                !0 === s && a.push("secure"),
                document.cookie = a.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };
        function L(e, t) {
            return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
            }(e, t) : t
        }
        var M = w.hasStandardBrowserEnv ? function() {
            const e = /(msie|trident)/i.test(navigator.userAgent)
              , t = document.createElement("a");
            let n;
            function r(n) {
                let r = n;
                return e && (t.setAttribute("href", r),
                r = t.href),
                t.setAttribute("href", r),
                {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = r(window.location.href),
            function(e) {
                const t = o.a.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host
            }
        }() : function() {
            return !0
        }
        ;
        var U = function(e, t) {
            e = e || 10;
            const n = new Array(e)
              , r = new Array(e);
            let o, i = 0, s = 0;
            return t = void 0 !== t ? t : 1e3,
            function(a) {
                const u = Date.now()
                  , c = r[s];
                o || (o = u),
                n[i] = a,
                r[i] = u;
                let l = s
                  , f = 0;
                for (; l !== i; )
                    f += n[l++],
                    l %= e;
                if (i = (i + 1) % e,
                i === s && (s = (s + 1) % e),
                u - o < t)
                    return;
                const d = c && u - c;
                return d ? Math.round(1e3 * f / d) : void 0
            }
        };
        function z(e, t) {
            let n = 0;
            const r = U(50, 250);
            return o => {
                const i = o.loaded
                  , s = o.lengthComputable ? o.total : void 0
                  , a = i - n
                  , u = r(a);
                n = i;
                const c = {
                    loaded: i,
                    total: s,
                    progress: s ? i / s : void 0,
                    bytes: a,
                    rate: u || void 0,
                    estimated: u && s && i <= s ? (s - i) / u : void 0,
                    event: o
                };
                c[t ? "download" : "upload"] = !0,
                e(c)
            }
        }
        var $ = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise((function(t, n) {
                let r = e.data;
                const i = F.from(e.headers).normalize();
                let s, a, {responseType: u, withXSRFToken: c} = e;
                function l() {
                    e.cancelToken && e.cancelToken.unsubscribe(s),
                    e.signal && e.signal.removeEventListener("abort", s)
                }
                if (o.a.isFormData(r))
                    if (w.hasStandardBrowserEnv || w.hasStandardBrowserWebWorkerEnv)
                        i.setContentType(!1);
                    else if (!1 !== (a = i.getContentType())) {
                        const [e,...t] = a ? a.split(";").map(e => e.trim()).filter(Boolean) : [];
                        i.setContentType([e || "multipart/form-data", ...t].join("; "))
                    }
                let f = new XMLHttpRequest;
                if (e.auth) {
                    const t = e.auth.username || ""
                      , n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    i.set("Authorization", "Basic " + btoa(t + ":" + n))
                }
                const p = L(e.baseURL, e.url);
                function g() {
                    if (!f)
                        return;
                    const r = F.from("getAllResponseHeaders"in f && f.getAllResponseHeaders());
                    !function(e, t, n) {
                        const r = n.config.validateStatus;
                        n.status && r && !r(n.status) ? t(new h.a("Request failed with status code " + n.status,[h.a.ERR_BAD_REQUEST, h.a.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
                    }((function(e) {
                        t(e),
                        l()
                    }
                    ), (function(e) {
                        n(e),
                        l()
                    }
                    ), {
                        data: u && "text" !== u && "json" !== u ? f.response : f.responseText,
                        status: f.status,
                        statusText: f.statusText,
                        headers: r,
                        config: e,
                        request: f
                    }),
                    f = null
                }
                if (f.open(e.method.toUpperCase(), d(p, e.params, e.paramsSerializer), !0),
                f.timeout = e.timeout,
                "onloadend"in f ? f.onloadend = g : f.onreadystatechange = function() {
                    f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:")) && setTimeout(g)
                }
                ,
                f.onabort = function() {
                    f && (n(new h.a("Request aborted",h.a.ECONNABORTED,e,f)),
                    f = null)
                }
                ,
                f.onerror = function() {
                    n(new h.a("Network Error",h.a.ERR_NETWORK,e,f)),
                    f = null
                }
                ,
                f.ontimeout = function() {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const r = e.transitional || m;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(new h.a(t,r.clarifyTimeoutError ? h.a.ETIMEDOUT : h.a.ECONNABORTED,e,f)),
                    f = null
                }
                ,
                w.hasStandardBrowserEnv && (c && o.a.isFunction(c) && (c = c(e)),
                c || !1 !== c && M(p))) {
                    const t = e.xsrfHeaderName && e.xsrfCookieName && P.read(e.xsrfCookieName);
                    t && i.set(e.xsrfHeaderName, t)
                }
                void 0 === r && i.setContentType(null),
                "setRequestHeader"in f && o.a.forEach(i.toJSON(), (function(e, t) {
                    f.setRequestHeader(t, e)
                }
                )),
                o.a.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
                u && "json" !== u && (f.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress && f.addEventListener("progress", z(e.onDownloadProgress, !0)),
                "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", z(e.onUploadProgress)),
                (e.cancelToken || e.signal) && (s = t => {
                    f && (n(!t || t.type ? new N(null,e,f) : t),
                    f.abort(),
                    f = null)
                }
                ,
                e.cancelToken && e.cancelToken.subscribe(s),
                e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
                const y = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(p);
                y && -1 === w.protocols.indexOf(y) ? n(new h.a("Unsupported protocol " + y + ":",h.a.ERR_BAD_REQUEST,e)) : f.send(r || null)
            }
            ))
        }
        ;
        const H = {
            http: B.a,
            xhr: $
        };
        o.a.forEach(H, (e, t) => {
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (e) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        }
        );
        const G = e => "- " + e
          , q = e => o.a.isFunction(e) || null === e || !1 === e;
        var J = e => {
            e = o.a.isArray(e) ? e : [e];
            const {length: t} = e;
            let n, r;
            const i = {};
            for (let o = 0; o < t; o++) {
                let t;
                if (n = e[o],
                r = n,
                !q(n) && (r = H[(t = String(n)).toLowerCase()],
                void 0 === r))
                    throw new h.a(`Unknown adapter '${t}'`);
                if (r)
                    break;
                i[t || "#" + o] = r
            }
            if (!r) {
                const e = Object.entries(i).map( ([e,t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                let n = t ? e.length > 1 ? "since :\n" + e.map(G).join("\n") : " " + G(e[0]) : "as no adapter specified";
                throw new h.a("There is no suitable adapter to dispatch the request " + n,"ERR_NOT_SUPPORT")
            }
            return r
        }
        ;
        function V(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new N(null,e)
        }
        function Y(e) {
            V(e),
            e.headers = F.from(e.headers),
            e.data = j.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
            return J(e.adapter || A.adapter)(e).then((function(t) {
                return V(e),
                t.data = j.call(e, e.transformResponse, t),
                t.headers = F.from(t.headers),
                t
            }
            ), (function(t) {
                return R(t) || (V(e),
                t && t.response && (t.response.data = j.call(e, e.transformResponse, t.response),
                t.response.headers = F.from(t.response.headers))),
                Promise.reject(t)
            }
            ))
        }
        const W = e => e instanceof F ? {
            ...e
        } : e;
        function X(e, t) {
            t = t || {};
            const n = {};
            function r(e, t, n) {
                return o.a.isPlainObject(e) && o.a.isPlainObject(t) ? o.a.merge.call({
                    caseless: n
                }, e, t) : o.a.isPlainObject(t) ? o.a.merge({}, t) : o.a.isArray(t) ? t.slice() : t
            }
            function i(e, t, n) {
                return o.a.isUndefined(t) ? o.a.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
            }
            function s(e, t) {
                if (!o.a.isUndefined(t))
                    return r(void 0, t)
            }
            function a(e, t) {
                return o.a.isUndefined(t) ? o.a.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
            }
            function u(n, o, i) {
                return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0
            }
            const c = {
                url: s,
                method: s,
                data: s,
                baseURL: a,
                transformRequest: a,
                transformResponse: a,
                paramsSerializer: a,
                timeout: a,
                timeoutMessage: a,
                withCredentials: a,
                withXSRFToken: a,
                adapter: a,
                responseType: a,
                xsrfCookieName: a,
                xsrfHeaderName: a,
                onUploadProgress: a,
                onDownloadProgress: a,
                decompress: a,
                maxContentLength: a,
                maxBodyLength: a,
                beforeRedirect: a,
                transport: a,
                httpAgent: a,
                httpsAgent: a,
                cancelToken: a,
                socketPath: a,
                responseEncoding: a,
                validateStatus: u,
                headers: (e, t) => i(W(e), W(t), !0)
            };
            return o.a.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
                const s = c[r] || i
                  , a = s(e[r], t[r], r);
                o.a.isUndefined(a) && s !== u || (n[r] = a)
            }
            )),
            n
        }
        const Z = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
            Z[e] = function(n) {
                return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        );
        const K = {};
        Z.transitional = function(e, t, n) {
            function r(e, t) {
                return "[Axios v1.6.8] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
            }
            return (n, o, i) => {
                if (!1 === e)
                    throw new h.a(r(o, " has been removed" + (t ? " in " + t : "")),h.a.ERR_DEPRECATED);
                return t && !K[o] && (K[o] = !0,
                console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(n, o, i)
            }
        }
        ;
        var Q = {
            assertOptions: function(e, t, n) {
                if ("object" != typeof e)
                    throw new h.a("options must be an object",h.a.ERR_BAD_OPTION_VALUE);
                const r = Object.keys(e);
                let o = r.length;
                for (; o-- > 0; ) {
                    const i = r[o]
                      , s = t[i];
                    if (s) {
                        const t = e[i]
                          , n = void 0 === t || s(t, i, e);
                        if (!0 !== n)
                            throw new h.a("option " + i + " must be " + n,h.a.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n)
                        throw new h.a("Unknown option " + i,h.a.ERR_BAD_OPTION)
                }
            },
            validators: Z
        };
        const ee = Q.validators;
        class te {
            constructor(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new p,
                    response: new p
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (e) {
                    if (e instanceof Error) {
                        let t;
                        Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = new Error;
                        const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                        e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n
                    }
                    throw e
                }
            }
            _request(e, t) {
                "string" == typeof e ? (t = t || {}).url = e : t = e || {},
                t = X(this.defaults, t);
                const {transitional: n, paramsSerializer: r, headers: i} = t;
                void 0 !== n && Q.assertOptions(n, {
                    silentJSONParsing: ee.transitional(ee.boolean),
                    forcedJSONParsing: ee.transitional(ee.boolean),
                    clarifyTimeoutError: ee.transitional(ee.boolean)
                }, !1),
                null != r && (o.a.isFunction(r) ? t.paramsSerializer = {
                    serialize: r
                } : Q.assertOptions(r, {
                    encode: ee.function,
                    serialize: ee.function
                }, !0)),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let s = i && o.a.merge(i.common, i[t.method]);
                i && o.a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                    delete i[e]
                }
                ),
                t.headers = F.concat(s, i);
                const a = [];
                let u = !0;
                this.interceptors.request.forEach((function(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (u = u && e.synchronous,
                    a.unshift(e.fulfilled, e.rejected))
                }
                ));
                const c = [];
                let l;
                this.interceptors.response.forEach((function(e) {
                    c.push(e.fulfilled, e.rejected)
                }
                ));
                let f, d = 0;
                if (!u) {
                    const e = [Y.bind(this), void 0];
                    for (e.unshift.apply(e, a),
                    e.push.apply(e, c),
                    f = e.length,
                    l = Promise.resolve(t); d < f; )
                        l = l.then(e[d++], e[d++]);
                    return l
                }
                f = a.length;
                let p = t;
                for (d = 0; d < f; ) {
                    const e = a[d++]
                      , t = a[d++];
                    try {
                        p = e(p)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    l = Y.call(this, p)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (d = 0,
                f = c.length; d < f; )
                    l = l.then(c[d++], c[d++]);
                return l
            }
            getUri(e) {
                return d(L((e = X(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
            }
        }
        o.a.forEach(["delete", "get", "head", "options"], (function(e) {
            te.prototype[e] = function(t, n) {
                return this.request(X(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        o.a.forEach(["post", "put", "patch"], (function(e) {
            function t(t) {
                return function(n, r, o) {
                    return this.request(X(o || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: n,
                        data: r
                    }))
                }
            }
            te.prototype[e] = t(),
            te.prototype[e + "Form"] = t(!0)
        }
        ));
        var ne = te;
        class re {
            constructor(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                let t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                const n = this;
                this.promise.then(e => {
                    if (!n._listeners)
                        return;
                    let t = n._listeners.length;
                    for (; t-- > 0; )
                        n._listeners[t](e);
                    n._listeners = null
                }
                ),
                this.promise.then = e => {
                    let t;
                    const r = new Promise(e => {
                        n.subscribe(e),
                        t = e
                    }
                    ).then(e);
                    return r.cancel = function() {
                        n.unsubscribe(t)
                    }
                    ,
                    r
                }
                ,
                e((function(e, r, o) {
                    n.reason || (n.reason = new N(e,r,o),
                    t(n.reason))
                }
                ))
            }
            throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            subscribe(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners)
                    return;
                const t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
            static source() {
                let e;
                return {
                    token: new re((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
        }
        var oe = re;
        const ie = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(ie).forEach( ([e,t]) => {
            ie[t] = e
        }
        );
        var se = ie;
        const ae = function e(t) {
            const n = new ne(t)
              , r = Object(i.a)(ne.prototype.request, n);
            return o.a.extend(r, ne.prototype, n, {
                allOwnKeys: !0
            }),
            o.a.extend(r, n, null, {
                allOwnKeys: !0
            }),
            r.create = function(n) {
                return e(X(t, n))
            }
            ,
            r
        }(A);
        ae.Axios = ne,
        ae.CanceledError = N,
        ae.CancelToken = oe,
        ae.isCancel = R,
        ae.VERSION = "1.6.8",
        ae.toFormData = s.a,
        ae.AxiosError = h.a,
        ae.Cancel = ae.CanceledError,
        ae.all = function(e) {
            return Promise.all(e)
        }
        ,
        ae.spread = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        ,
        ae.isAxiosError = function(e) {
            return o.a.isObject(e) && !0 === e.isAxiosError
        }
        ,
        ae.mergeConfig = X,
        ae.AxiosHeaders = F,
        ae.formToJSON = e => E(o.a.isHTMLForm(e) ? new FormData(e) : e),
        ae.getAdapter = J,
        ae.HttpStatusCode = se,
        ae.default = ae;
        t.a = ae
    },
    "./node_modules/axios/lib/core/AxiosError.js": function(e, t, n) {
        "use strict";
        var r = n("./node_modules/axios/lib/utils.js");
        function o(e, t, n, r, o) {
            Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o)
        }
        r.a.inherits(o, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: r.a.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                }
            }
        });
        const i = o.prototype
          , s = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
            s[e] = {
                value: e
            }
        }
        ),
        Object.defineProperties(o, s),
        Object.defineProperty(i, "isAxiosError", {
            value: !0
        }),
        o.from = (e, t, n, s, a, u) => {
            const c = Object.create(i);
            return r.a.toFlatObject(e, c, (function(e) {
                return e !== Error.prototype
            }
            ), e => "isAxiosError" !== e),
            o.call(c, e.message, t, n, s, a),
            c.cause = e,
            c.name = e.name,
            u && Object.assign(c, u),
            c
        }
        ,
        t.a = o
    },
    "./node_modules/axios/lib/helpers/bind.js": function(e, t, n) {
        "use strict";
        function r(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        n.d(t, "a", (function() {
            return r
        }
        ))
    },
    "./node_modules/axios/lib/helpers/null.js": function(e, t, n) {
        "use strict";
        t.a = null
    },
    "./node_modules/axios/lib/helpers/toFormData.js": function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n("./node_modules/axios/lib/utils.js")
              , o = n("./node_modules/axios/lib/core/AxiosError.js")
              , i = n("./node_modules/axios/lib/helpers/null.js");
            function s(e) {
                return r.a.isPlainObject(e) || r.a.isArray(e)
            }
            function a(e) {
                return r.a.endsWith(e, "[]") ? e.slice(0, -2) : e
            }
            function u(e, t, n) {
                return e ? e.concat(t).map((function(e, t) {
                    return e = a(e),
                    !n && t ? "[" + e + "]" : e
                }
                )).join(n ? "." : "") : t
            }
            const c = r.a.toFlatObject(r.a, {}, null, (function(e) {
                return /^is[A-Z]/.test(e)
            }
            ));
            t.a = function(t, n, l) {
                if (!r.a.isObject(t))
                    throw new TypeError("target must be an object");
                n = n || new (i.a || FormData);
                const f = (l = r.a.toFlatObject(l, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, (function(e, t) {
                    return !r.a.isUndefined(t[e])
                }
                ))).metaTokens
                  , d = l.visitor || y
                  , p = l.dots
                  , h = l.indexes
                  , m = (l.Blob || "undefined" != typeof Blob && Blob) && r.a.isSpecCompliantForm(n);
                if (!r.a.isFunction(d))
                    throw new TypeError("visitor must be a function");
                function g(t) {
                    if (null === t)
                        return "";
                    if (r.a.isDate(t))
                        return t.toISOString();
                    if (!m && r.a.isBlob(t))
                        throw new o.a("Blob is not supported. Use a Buffer instead.");
                    return r.a.isArrayBuffer(t) || r.a.isTypedArray(t) ? m && "function" == typeof Blob ? new Blob([t]) : e.from(t) : t
                }
                function y(e, t, o) {
                    let i = e;
                    if (e && !o && "object" == typeof e)
                        if (r.a.endsWith(t, "{}"))
                            t = f ? t : t.slice(0, -2),
                            e = JSON.stringify(e);
                        else if (r.a.isArray(e) && function(e) {
                            return r.a.isArray(e) && !e.some(s)
                        }(e) || (r.a.isFileList(e) || r.a.endsWith(t, "[]")) && (i = r.a.toArray(e)))
                            return t = a(t),
                            i.forEach((function(e, o) {
                                !r.a.isUndefined(e) && null !== e && n.append(!0 === h ? u([t], o, p) : null === h ? t : t + "[]", g(e))
                            }
                            )),
                            !1;
                    return !!s(e) || (n.append(u(o, t, p), g(e)),
                    !1)
                }
                const b = []
                  , v = Object.assign(c, {
                    defaultVisitor: y,
                    convertValue: g,
                    isVisitable: s
                });
                if (!r.a.isObject(t))
                    throw new TypeError("data must be an object");
                return function e(t, o) {
                    if (!r.a.isUndefined(t)) {
                        if (-1 !== b.indexOf(t))
                            throw Error("Circular reference detected in " + o.join("."));
                        b.push(t),
                        r.a.forEach(t, (function(t, i) {
                            !0 === (!(r.a.isUndefined(t) || null === t) && d.call(n, t, r.a.isString(i) ? i.trim() : i, o, v)) && e(t, o ? o.concat(i) : [i])
                        }
                        )),
                        b.pop()
                    }
                }(t),
                n
            }
        }
        ).call(this, n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
    },
    "./node_modules/axios/lib/utils.js": function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n("./node_modules/axios/lib/helpers/bind.js");
            const {toString: o} = Object.prototype
              , {getPrototypeOf: i} = Object
              , s = (a = Object.create(null),
            e => {
                const t = o.call(e);
                return a[t] || (a[t] = t.slice(8, -1).toLowerCase())
            }
            );
            var a;
            const u = e => (e = e.toLowerCase(),
            t => s(t) === e)
              , c = e => t => typeof t === e
              , {isArray: l} = Array
              , f = c("undefined");
            const d = u("ArrayBuffer");
            const p = c("string")
              , h = c("function")
              , m = c("number")
              , g = e => null !== e && "object" == typeof e
              , y = e => {
                if ("object" !== s(e))
                    return !1;
                const t = i(e);
                return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
            }
              , b = u("Date")
              , v = u("File")
              , D = u("Blob")
              , w = u("FileList")
              , E = u("URLSearchParams");
            function x(e, t, {allOwnKeys: n=!1}={}) {
                if (null == e)
                    return;
                let r, o;
                if ("object" != typeof e && (e = [e]),
                l(e))
                    for (r = 0,
                    o = e.length; r < o; r++)
                        t.call(null, e[r], r, e);
                else {
                    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
                      , i = o.length;
                    let s;
                    for (r = 0; r < i; r++)
                        s = o[r],
                        t.call(null, e[s], s, e)
                }
            }
            function A(e, t) {
                t = t.toLowerCase();
                const n = Object.keys(e);
                let r, o = n.length;
                for (; o-- > 0; )
                    if (r = n[o],
                    t === r.toLowerCase())
                        return r;
                return null
            }
            const C = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : e
              , k = e => !f(e) && e !== C;
            const S = (T = "undefined" != typeof Uint8Array && i(Uint8Array),
            e => T && e instanceof T);
            var T;
            const O = u("HTMLFormElement")
              , _ = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
              , F = u("RegExp")
              , j = (e, t) => {
                const n = Object.getOwnPropertyDescriptors(e)
                  , r = {};
                x(n, (n, o) => {
                    let i;
                    !1 !== (i = t(n, o, e)) && (r[o] = i || n)
                }
                ),
                Object.defineProperties(e, r)
            }
              , R = "abcdefghijklmnopqrstuvwxyz"
              , I = {
                DIGIT: "0123456789",
                ALPHA: R,
                ALPHA_DIGIT: R + R.toUpperCase() + "0123456789"
            };
            const N = u("AsyncFunction");
            t.a = {
                isArray: l,
                isArrayBuffer: d,
                isBuffer: function(e) {
                    return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && h(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                },
                isFormData: e => {
                    let t;
                    return e && ("function" == typeof FormData && e instanceof FormData || h(e.append) && ("formdata" === (t = s(e)) || "object" === t && h(e.toString) && "[object FormData]" === e.toString()))
                }
                ,
                isArrayBufferView: function(e) {
                    let t;
                    return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer),
                    t
                },
                isString: p,
                isNumber: m,
                isBoolean: e => !0 === e || !1 === e,
                isObject: g,
                isPlainObject: y,
                isUndefined: f,
                isDate: b,
                isFile: v,
                isBlob: D,
                isRegExp: F,
                isFunction: h,
                isStream: e => g(e) && h(e.pipe),
                isURLSearchParams: E,
                isTypedArray: S,
                isFileList: w,
                forEach: x,
                merge: function e() {
                    const {caseless: t} = k(this) && this || {}
                      , n = {}
                      , r = (r, o) => {
                        const i = t && A(n, o) || o;
                        y(n[i]) && y(r) ? n[i] = e(n[i], r) : y(r) ? n[i] = e({}, r) : l(r) ? n[i] = r.slice() : n[i] = r
                    }
                    ;
                    for (let e = 0, t = arguments.length; e < t; e++)
                        arguments[e] && x(arguments[e], r);
                    return n
                },
                extend: (e, t, n, {allOwnKeys: o}={}) => (x(t, (t, o) => {
                    n && h(t) ? e[o] = Object(r.a)(t, n) : e[o] = t
                }
                , {
                    allOwnKeys: o
                }),
                e),
                trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e),
                inherits: (e, t, n, r) => {
                    e.prototype = Object.create(t.prototype, r),
                    e.prototype.constructor = e,
                    Object.defineProperty(e, "super", {
                        value: t.prototype
                    }),
                    n && Object.assign(e.prototype, n)
                }
                ,
                toFlatObject: (e, t, n, r) => {
                    let o, s, a;
                    const u = {};
                    if (t = t || {},
                    null == e)
                        return t;
                    do {
                        for (o = Object.getOwnPropertyNames(e),
                        s = o.length; s-- > 0; )
                            a = o[s],
                            r && !r(a, e, t) || u[a] || (t[a] = e[a],
                            u[a] = !0);
                        e = !1 !== n && i(e)
                    } while (e && (!n || n(e, t)) && e !== Object.prototype);
                    return t
                }
                ,
                kindOf: s,
                kindOfTest: u,
                endsWith: (e, t, n) => {
                    e = String(e),
                    (void 0 === n || n > e.length) && (n = e.length),
                    n -= t.length;
                    const r = e.indexOf(t, n);
                    return -1 !== r && r === n
                }
                ,
                toArray: e => {
                    if (!e)
                        return null;
                    if (l(e))
                        return e;
                    let t = e.length;
                    if (!m(t))
                        return null;
                    const n = new Array(t);
                    for (; t-- > 0; )
                        n[t] = e[t];
                    return n
                }
                ,
                forEachEntry: (e, t) => {
                    const n = (e && e[Symbol.iterator]).call(e);
                    let r;
                    for (; (r = n.next()) && !r.done; ) {
                        const n = r.value;
                        t.call(e, n[0], n[1])
                    }
                }
                ,
                matchAll: (e, t) => {
                    let n;
                    const r = [];
                    for (; null !== (n = e.exec(t)); )
                        r.push(n);
                    return r
                }
                ,
                isHTMLForm: O,
                hasOwnProperty: _,
                hasOwnProp: _,
                reduceDescriptors: j,
                freezeMethods: e => {
                    j(e, (t, n) => {
                        if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                            return !1;
                        const r = e[n];
                        h(r) && (t.enumerable = !1,
                        "writable"in t ? t.writable = !1 : t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + n + "'")
                        }
                        ))
                    }
                    )
                }
                ,
                toObjectSet: (e, t) => {
                    const n = {}
                      , r = e => {
                        e.forEach(e => {
                            n[e] = !0
                        }
                        )
                    }
                    ;
                    return l(e) ? r(e) : r(String(e).split(t)),
                    n
                }
                ,
                toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                    return t.toUpperCase() + n
                }
                )),
                noop: () => {}
                ,
                toFiniteNumber: (e, t) => (e = +e,
                Number.isFinite(e) ? e : t),
                findKey: A,
                global: C,
                isContextDefined: k,
                ALPHABET: I,
                generateString: (e=16, t=I.ALPHA_DIGIT) => {
                    let n = "";
                    const {length: r} = t;
                    for (; e--; )
                        n += t[Math.random() * r | 0];
                    return n
                }
                ,
                isSpecCompliantForm: function(e) {
                    return !!(e && h(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                },
                toJSONObject: e => {
                    const t = new Array(10)
                      , n = (e, r) => {
                        if (g(e)) {
                            if (t.indexOf(e) >= 0)
                                return;
                            if (!("toJSON"in e)) {
                                t[r] = e;
                                const o = l(e) ? [] : {};
                                return x(e, (e, t) => {
                                    const i = n(e, r + 1);
                                    !f(i) && (o[t] = i)
                                }
                                ),
                                t[r] = void 0,
                                o
                            }
                        }
                        return e
                    }
                    ;
                    return n(e, 0)
                }
                ,
                isAsyncFn: N,
                isThenable: e => e && (g(e) || h(e)) && h(e.then) && h(e.catch)
            }
        }
        ).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/base64-js/index.js": function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = c(e)
              , n = t[0]
              , r = t[1];
            return 3 * (n + r) / 4 - r
        }
        ,
        t.toByteArray = function(e) {
            var t, n, r = c(e), s = r[0], a = r[1], u = new i(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, s, a)), l = 0, f = a > 0 ? s - 4 : s;
            for (n = 0; n < f; n += 4)
                t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)],
                u[l++] = t >> 16 & 255,
                u[l++] = t >> 8 & 255,
                u[l++] = 255 & t;
            2 === a && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4,
            u[l++] = 255 & t);
            1 === a && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2,
            u[l++] = t >> 8 & 255,
            u[l++] = 255 & t);
            return u
        }
        ,
        t.fromByteArray = function(e) {
            for (var t, n = e.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383)
                i.push(l(e, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (t = e[n - 1],
            i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1],
            i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return i.join("")
        }
        ;
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a)
            r[a] = s[a],
            o[s.charCodeAt(a)] = a;
        function c(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
            [n, n === t ? 0 : 4 - n % 4]
        }
        function l(e, t, n) {
            for (var o, i, s = [], a = t; a < n; a += 3)
                o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
            return s.join("")
        }
        o["-".charCodeAt(0)] = 62,
        o["_".charCodeAt(0)] = 63
    },
    "./node_modules/dompurify/dist/purify.js": function(e, t, n) {
        /*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */
        e.exports = function() {
            "use strict";
            const {entries: e, setPrototypeOf: t, isFrozen: n, getPrototypeOf: r, getOwnPropertyDescriptor: o} = Object;
            let {freeze: i, seal: s, create: a} = Object
              , {apply: u, construct: c} = "undefined" != typeof Reflect && Reflect;
            i || (i = function(e) {
                return e
            }
            ),
            s || (s = function(e) {
                return e
            }
            ),
            u || (u = function(e, t, n) {
                return e.apply(t, n)
            }
            ),
            c || (c = function(e, t) {
                return new e(...t)
            }
            );
            const l = x(Array.prototype.forEach)
              , f = x(Array.prototype.pop)
              , d = x(Array.prototype.push)
              , p = x(String.prototype.toLowerCase)
              , h = x(String.prototype.toString)
              , m = x(String.prototype.match)
              , g = x(String.prototype.replace)
              , y = x(String.prototype.indexOf)
              , b = x(String.prototype.trim)
              , v = x(Object.prototype.hasOwnProperty)
              , D = x(RegExp.prototype.test)
              , w = (E = TypeError,
            function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return c(E, t)
            }
            );
            var E;
            function x(e) {
                return function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        r[o - 1] = arguments[o];
                    return u(e, t, r)
                }
            }
            function A(e, r) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
                t && t(e, null);
                let i = r.length;
                for (; i--; ) {
                    let t = r[i];
                    if ("string" == typeof t) {
                        const e = o(t);
                        e !== t && (n(r) || (r[i] = e),
                        t = e)
                    }
                    e[t] = !0
                }
                return e
            }
            function C(e) {
                for (let t = 0; t < e.length; t++)
                    v(e, t) || (e[t] = null);
                return e
            }
            function k(t) {
                const n = a(null);
                for (const [r,o] of e(t))
                    v(t, r) && (Array.isArray(o) ? n[r] = C(o) : o && "object" == typeof o && o.constructor === Object ? n[r] = k(o) : n[r] = o);
                return n
            }
            function S(e, t) {
                for (; null !== e; ) {
                    const n = o(e, t);
                    if (n) {
                        if (n.get)
                            return x(n.get);
                        if ("function" == typeof n.value)
                            return x(n.value)
                    }
                    e = r(e)
                }
                return function() {
                    return null
                }
            }
            const T = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
              , O = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
              , _ = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
              , F = i(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
              , j = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
              , R = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
              , I = i(["#text"])
              , N = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
              , B = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
              , P = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
              , L = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
              , M = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
              , U = s(/<%[\w\W]*|[\w\W]*%>/gm)
              , z = s(/\${[\w\W]*}/gm)
              , $ = s(/^data-[\-\w.\u00B7-\uFFFF]/)
              , H = s(/^aria-[\-\w]+$/)
              , G = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
              , q = s(/^(?:\w+script|data):/i)
              , J = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
              , V = s(/^html$/i)
              , Y = s(/^[a-z][.\w]*(-[.\w]+)+$/i);
            var W = Object.freeze({
                __proto__: null,
                MUSTACHE_EXPR: M,
                ERB_EXPR: U,
                TMPLIT_EXPR: z,
                DATA_ATTR: $,
                ARIA_ATTR: H,
                IS_ALLOWED_URI: G,
                IS_SCRIPT_OR_DATA: q,
                ATTR_WHITESPACE: J,
                DOCTYPE_NAME: V,
                CUSTOM_ELEMENT: Y
            });
            const X = 1
              , Z = 3
              , K = 7
              , Q = 8
              , ee = 9
              , te = function() {
                return "undefined" == typeof window ? null : window
            }
              , ne = function(e, t) {
                if ("object" != typeof e || "function" != typeof e.createPolicy)
                    return null;
                let n = null;
                t && t.hasAttribute("data-tt-policy-suffix") && (n = t.getAttribute("data-tt-policy-suffix"));
                const r = "dompurify" + (n ? "#" + n : "");
                try {
                    return e.createPolicy(r, {
                        createHTML: e => e,
                        createScriptURL: e => e
                    })
                } catch (e) {
                    return console.warn("TrustedTypes policy " + r + " could not be created."),
                    null
                }
            };
            return function t() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te();
                const r = e => t(e);
                if (r.version = "3.1.6",
                r.removed = [],
                !n || !n.document || n.document.nodeType !== ee)
                    return r.isSupported = !1,
                    r;
                let {document: o} = n;
                const s = o
                  , u = s.currentScript
                  , {DocumentFragment: c, HTMLTemplateElement: E, Node: x, Element: C, NodeFilter: M, NamedNodeMap: U=n.NamedNodeMap || n.MozNamedAttrMap, HTMLFormElement: z, DOMParser: $, trustedTypes: H} = n
                  , q = C.prototype
                  , J = S(q, "cloneNode")
                  , Y = S(q, "remove")
                  , re = S(q, "nextSibling")
                  , oe = S(q, "childNodes")
                  , ie = S(q, "parentNode");
                if ("function" == typeof E) {
                    const e = o.createElement("template");
                    e.content && e.content.ownerDocument && (o = e.content.ownerDocument)
                }
                let se, ae = "";
                const {implementation: ue, createNodeIterator: ce, createDocumentFragment: le, getElementsByTagName: fe} = o
                  , {importNode: de} = s;
                let pe = {};
                r.isSupported = "function" == typeof e && "function" == typeof ie && ue && void 0 !== ue.createHTMLDocument;
                const {MUSTACHE_EXPR: he, ERB_EXPR: me, TMPLIT_EXPR: ge, DATA_ATTR: ye, ARIA_ATTR: be, IS_SCRIPT_OR_DATA: ve, ATTR_WHITESPACE: De, CUSTOM_ELEMENT: we} = W;
                let {IS_ALLOWED_URI: Ee} = W
                  , xe = null;
                const Ae = A({}, [...T, ...O, ..._, ...j, ...I]);
                let Ce = null;
                const ke = A({}, [...N, ...B, ...P, ...L]);
                let Se = Object.seal(a(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                }))
                  , Te = null
                  , Oe = null
                  , _e = !0
                  , Fe = !0
                  , je = !1
                  , Re = !0
                  , Ie = !1
                  , Ne = !0
                  , Be = !1
                  , Pe = !1
                  , Le = !1
                  , Me = !1
                  , Ue = !1
                  , ze = !1
                  , $e = !0
                  , He = !1;
                const Ge = "user-content-";
                let qe = !0
                  , Je = !1
                  , Ve = {}
                  , Ye = null;
                const We = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                let Xe = null;
                const Ze = A({}, ["audio", "video", "img", "source", "image", "track"]);
                let Ke = null;
                const Qe = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
                  , et = "http://www.w3.org/1998/Math/MathML"
                  , tt = "http://www.w3.org/2000/svg"
                  , nt = "http://www.w3.org/1999/xhtml";
                let rt = nt
                  , ot = !1
                  , it = null;
                const st = A({}, [et, tt, nt], h);
                let at = null;
                const ut = ["application/xhtml+xml", "text/html"]
                  , ct = "text/html";
                let lt = null
                  , ft = null;
                const dt = o.createElement("form")
                  , pt = function(e) {
                    return e instanceof RegExp || e instanceof Function
                }
                  , ht = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!ft || ft !== e) {
                        if (e && "object" == typeof e || (e = {}),
                        e = k(e),
                        at = -1 === ut.indexOf(e.PARSER_MEDIA_TYPE) ? ct : e.PARSER_MEDIA_TYPE,
                        lt = "application/xhtml+xml" === at ? h : p,
                        xe = v(e, "ALLOWED_TAGS") ? A({}, e.ALLOWED_TAGS, lt) : Ae,
                        Ce = v(e, "ALLOWED_ATTR") ? A({}, e.ALLOWED_ATTR, lt) : ke,
                        it = v(e, "ALLOWED_NAMESPACES") ? A({}, e.ALLOWED_NAMESPACES, h) : st,
                        Ke = v(e, "ADD_URI_SAFE_ATTR") ? A(k(Qe), e.ADD_URI_SAFE_ATTR, lt) : Qe,
                        Xe = v(e, "ADD_DATA_URI_TAGS") ? A(k(Ze), e.ADD_DATA_URI_TAGS, lt) : Ze,
                        Ye = v(e, "FORBID_CONTENTS") ? A({}, e.FORBID_CONTENTS, lt) : We,
                        Te = v(e, "FORBID_TAGS") ? A({}, e.FORBID_TAGS, lt) : {},
                        Oe = v(e, "FORBID_ATTR") ? A({}, e.FORBID_ATTR, lt) : {},
                        Ve = !!v(e, "USE_PROFILES") && e.USE_PROFILES,
                        _e = !1 !== e.ALLOW_ARIA_ATTR,
                        Fe = !1 !== e.ALLOW_DATA_ATTR,
                        je = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
                        Re = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR,
                        Ie = e.SAFE_FOR_TEMPLATES || !1,
                        Ne = !1 !== e.SAFE_FOR_XML,
                        Be = e.WHOLE_DOCUMENT || !1,
                        Me = e.RETURN_DOM || !1,
                        Ue = e.RETURN_DOM_FRAGMENT || !1,
                        ze = e.RETURN_TRUSTED_TYPE || !1,
                        Le = e.FORCE_BODY || !1,
                        $e = !1 !== e.SANITIZE_DOM,
                        He = e.SANITIZE_NAMED_PROPS || !1,
                        qe = !1 !== e.KEEP_CONTENT,
                        Je = e.IN_PLACE || !1,
                        Ee = e.ALLOWED_URI_REGEXP || G,
                        rt = e.NAMESPACE || nt,
                        Se = e.CUSTOM_ELEMENT_HANDLING || {},
                        e.CUSTOM_ELEMENT_HANDLING && pt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Se.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && pt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Se.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                        e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Se.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                        Ie && (Fe = !1),
                        Ue && (Me = !0),
                        Ve && (xe = A({}, I),
                        Ce = [],
                        !0 === Ve.html && (A(xe, T),
                        A(Ce, N)),
                        !0 === Ve.svg && (A(xe, O),
                        A(Ce, B),
                        A(Ce, L)),
                        !0 === Ve.svgFilters && (A(xe, _),
                        A(Ce, B),
                        A(Ce, L)),
                        !0 === Ve.mathMl && (A(xe, j),
                        A(Ce, P),
                        A(Ce, L))),
                        e.ADD_TAGS && (xe === Ae && (xe = k(xe)),
                        A(xe, e.ADD_TAGS, lt)),
                        e.ADD_ATTR && (Ce === ke && (Ce = k(Ce)),
                        A(Ce, e.ADD_ATTR, lt)),
                        e.ADD_URI_SAFE_ATTR && A(Ke, e.ADD_URI_SAFE_ATTR, lt),
                        e.FORBID_CONTENTS && (Ye === We && (Ye = k(Ye)),
                        A(Ye, e.FORBID_CONTENTS, lt)),
                        qe && (xe["#text"] = !0),
                        Be && A(xe, ["html", "head", "body"]),
                        xe.table && (A(xe, ["tbody"]),
                        delete Te.tbody),
                        e.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                                throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                                throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            se = e.TRUSTED_TYPES_POLICY,
                            ae = se.createHTML("")
                        } else
                            void 0 === se && (se = ne(H, u)),
                            null !== se && "string" == typeof ae && (ae = se.createHTML(""));
                        i && i(e),
                        ft = e
                    }
                }
                  , mt = A({}, ["mi", "mo", "mn", "ms", "mtext"])
                  , gt = A({}, ["foreignobject", "annotation-xml"])
                  , yt = A({}, ["title", "style", "font", "a", "script"])
                  , bt = A({}, [...O, ..._, ...F])
                  , vt = A({}, [...j, ...R])
                  , Dt = function(e) {
                    let t = ie(e);
                    t && t.tagName || (t = {
                        namespaceURI: rt,
                        tagName: "template"
                    });
                    const n = p(e.tagName)
                      , r = p(t.tagName);
                    return !!it[e.namespaceURI] && (e.namespaceURI === tt ? t.namespaceURI === nt ? "svg" === n : t.namespaceURI === et ? "svg" === n && ("annotation-xml" === r || mt[r]) : Boolean(bt[n]) : e.namespaceURI === et ? t.namespaceURI === nt ? "math" === n : t.namespaceURI === tt ? "math" === n && gt[r] : Boolean(vt[n]) : e.namespaceURI === nt ? !(t.namespaceURI === tt && !gt[r]) && !(t.namespaceURI === et && !mt[r]) && !vt[n] && (yt[n] || !bt[n]) : !("application/xhtml+xml" !== at || !it[e.namespaceURI]))
                }
                  , wt = function(e) {
                    d(r.removed, {
                        element: e
                    });
                    try {
                        ie(e).removeChild(e)
                    } catch (t) {
                        Y(e)
                    }
                }
                  , Et = function(e, t) {
                    try {
                        d(r.removed, {
                            attribute: t.getAttributeNode(e),
                            from: t
                        })
                    } catch (e) {
                        d(r.removed, {
                            attribute: null,
                            from: t
                        })
                    }
                    if (t.removeAttribute(e),
                    "is" === e && !Ce[e])
                        if (Me || Ue)
                            try {
                                wt(t)
                            } catch (e) {}
                        else
                            try {
                                t.setAttribute(e, "")
                            } catch (e) {}
                }
                  , xt = function(e) {
                    let t = null
                      , n = null;
                    if (Le)
                        e = "<remove></remove>" + e;
                    else {
                        const t = m(e, /^[\r\n\t ]+/);
                        n = t && t[0]
                    }
                    "application/xhtml+xml" === at && rt === nt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    const r = se ? se.createHTML(e) : e;
                    if (rt === nt)
                        try {
                            t = (new $).parseFromString(r, at)
                        } catch (e) {}
                    if (!t || !t.documentElement) {
                        t = ue.createDocument(rt, "template", null);
                        try {
                            t.documentElement.innerHTML = ot ? ae : r
                        } catch (e) {}
                    }
                    const i = t.body || t.documentElement;
                    return e && n && i.insertBefore(o.createTextNode(n), i.childNodes[0] || null),
                    rt === nt ? fe.call(t, Be ? "html" : "body")[0] : Be ? t.documentElement : i
                }
                  , At = function(e) {
                    return ce.call(e.ownerDocument || e, e, M.SHOW_ELEMENT | M.SHOW_COMMENT | M.SHOW_TEXT | M.SHOW_PROCESSING_INSTRUCTION | M.SHOW_CDATA_SECTION, null)
                }
                  , Ct = function(e) {
                    return e instanceof z && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof U) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                }
                  , kt = function(e) {
                    return "function" == typeof x && e instanceof x
                }
                  , St = function(e, t, n) {
                    pe[e] && l(pe[e], e => {
                        e.call(r, t, n, ft)
                    }
                    )
                }
                  , Tt = function(e) {
                    let t = null;
                    if (St("beforeSanitizeElements", e, null),
                    Ct(e))
                        return wt(e),
                        !0;
                    const n = lt(e.nodeName);
                    if (St("uponSanitizeElement", e, {
                        tagName: n,
                        allowedTags: xe
                    }),
                    e.hasChildNodes() && !kt(e.firstElementChild) && D(/<[/\w]/g, e.innerHTML) && D(/<[/\w]/g, e.textContent))
                        return wt(e),
                        !0;
                    if (e.nodeType === K)
                        return wt(e),
                        !0;
                    if (Ne && e.nodeType === Q && D(/<[/\w]/g, e.data))
                        return wt(e),
                        !0;
                    if (!xe[n] || Te[n]) {
                        if (!Te[n] && _t(n)) {
                            if (Se.tagNameCheck instanceof RegExp && D(Se.tagNameCheck, n))
                                return !1;
                            if (Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))
                                return !1
                        }
                        if (qe && !Ye[n]) {
                            const t = ie(e) || e.parentNode
                              , n = oe(e) || e.childNodes;
                            if (n && t)
                                for (let r = n.length - 1; r >= 0; --r) {
                                    const o = J(n[r], !0);
                                    o.__removalCount = (e.__removalCount || 0) + 1,
                                    t.insertBefore(o, re(e))
                                }
                        }
                        return wt(e),
                        !0
                    }
                    return e instanceof C && !Dt(e) ? (wt(e),
                    !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !D(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ie && e.nodeType === Z && (t = e.textContent,
                    l([he, me, ge], e => {
                        t = g(t, e, " ")
                    }
                    ),
                    e.textContent !== t && (d(r.removed, {
                        element: e.cloneNode()
                    }),
                    e.textContent = t)),
                    St("afterSanitizeElements", e, null),
                    !1) : (wt(e),
                    !0)
                }
                  , Ot = function(e, t, n) {
                    if ($e && ("id" === t || "name" === t) && (n in o || n in dt))
                        return !1;
                    if (Fe && !Oe[t] && D(ye, t))
                        ;
                    else if (_e && D(be, t))
                        ;
                    else if (!Ce[t] || Oe[t]) {
                        if (!(_t(e) && (Se.tagNameCheck instanceof RegExp && D(Se.tagNameCheck, e) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(e)) && (Se.attributeNameCheck instanceof RegExp && D(Se.attributeNameCheck, t) || Se.attributeNameCheck instanceof Function && Se.attributeNameCheck(t)) || "is" === t && Se.allowCustomizedBuiltInElements && (Se.tagNameCheck instanceof RegExp && D(Se.tagNameCheck, n) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))))
                            return !1
                    } else if (Ke[t])
                        ;
                    else if (D(Ee, g(n, De, "")))
                        ;
                    else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== y(n, "data:") || !Xe[e])
                        if (je && !D(ve, g(n, De, "")))
                            ;
                        else if (n)
                            return !1;
                    return !0
                }
                  , _t = function(e) {
                    return "annotation-xml" !== e && m(e, we)
                }
                  , Ft = function(e) {
                    St("beforeSanitizeAttributes", e, null);
                    const {attributes: t} = e;
                    if (!t)
                        return;
                    const n = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: Ce
                    };
                    let o = t.length;
                    for (; o--; ) {
                        const i = t[o]
                          , {name: s, namespaceURI: a, value: u} = i
                          , c = lt(s);
                        let d = "value" === s ? u : b(u);
                        if (n.attrName = c,
                        n.attrValue = d,
                        n.keepAttr = !0,
                        n.forceKeepAttr = void 0,
                        St("uponSanitizeAttribute", e, n),
                        d = n.attrValue,
                        Ne && D(/((--!?|])>)|<\/(style|title)/i, d)) {
                            Et(s, e);
                            continue
                        }
                        if (n.forceKeepAttr)
                            continue;
                        if (Et(s, e),
                        !n.keepAttr)
                            continue;
                        if (!Re && D(/\/>/i, d)) {
                            Et(s, e);
                            continue
                        }
                        Ie && l([he, me, ge], e => {
                            d = g(d, e, " ")
                        }
                        );
                        const p = lt(e.nodeName);
                        if (Ot(p, c, d)) {
                            if (!He || "id" !== c && "name" !== c || (Et(s, e),
                            d = Ge + d),
                            se && "object" == typeof H && "function" == typeof H.getAttributeType)
                                if (a)
                                    ;
                                else
                                    switch (H.getAttributeType(p, c)) {
                                    case "TrustedHTML":
                                        d = se.createHTML(d);
                                        break;
                                    case "TrustedScriptURL":
                                        d = se.createScriptURL(d)
                                    }
                            try {
                                a ? e.setAttributeNS(a, s, d) : e.setAttribute(s, d),
                                Ct(e) ? wt(e) : f(r.removed)
                            } catch (e) {}
                        }
                    }
                    St("afterSanitizeAttributes", e, null)
                }
                  , jt = function e(t) {
                    let n = null;
                    const r = At(t);
                    for (St("beforeSanitizeShadowDOM", t, null); n = r.nextNode(); )
                        St("uponSanitizeShadowNode", n, null),
                        Tt(n) || (n.content instanceof c && e(n.content),
                        Ft(n));
                    St("afterSanitizeShadowDOM", t, null)
                };
                return r.sanitize = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = null
                      , o = null
                      , i = null
                      , a = null;
                    if (ot = !e,
                    ot && (e = "\x3c!--\x3e"),
                    "string" != typeof e && !kt(e)) {
                        if ("function" != typeof e.toString)
                            throw w("toString is not a function");
                        if ("string" != typeof (e = e.toString()))
                            throw w("dirty is not a string, aborting")
                    }
                    if (!r.isSupported)
                        return e;
                    if (Pe || ht(t),
                    r.removed = [],
                    "string" == typeof e && (Je = !1),
                    Je) {
                        if (e.nodeName) {
                            const t = lt(e.nodeName);
                            if (!xe[t] || Te[t])
                                throw w("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (e instanceof x)
                        n = xt("\x3c!----\x3e"),
                        o = n.ownerDocument.importNode(e, !0),
                        o.nodeType === X && "BODY" === o.nodeName || "HTML" === o.nodeName ? n = o : n.appendChild(o);
                    else {
                        if (!Me && !Ie && !Be && -1 === e.indexOf("<"))
                            return se && ze ? se.createHTML(e) : e;
                        if (n = xt(e),
                        !n)
                            return Me ? null : ze ? ae : ""
                    }
                    n && Le && wt(n.firstChild);
                    const u = At(Je ? e : n);
                    for (; i = u.nextNode(); )
                        Tt(i) || (i.content instanceof c && jt(i.content),
                        Ft(i));
                    if (Je)
                        return e;
                    if (Me) {
                        if (Ue)
                            for (a = le.call(n.ownerDocument); n.firstChild; )
                                a.appendChild(n.firstChild);
                        else
                            a = n;
                        return (Ce.shadowroot || Ce.shadowrootmode) && (a = de.call(s, a, !0)),
                        a
                    }
                    let f = Be ? n.outerHTML : n.innerHTML;
                    return Be && xe["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && D(V, n.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + f),
                    Ie && l([he, me, ge], e => {
                        f = g(f, e, " ")
                    }
                    ),
                    se && ze ? se.createHTML(f) : f
                }
                ,
                r.setConfig = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ht(e),
                    Pe = !0
                }
                ,
                r.clearConfig = function() {
                    ft = null,
                    Pe = !1
                }
                ,
                r.isValidAttribute = function(e, t, n) {
                    ft || ht({});
                    const r = lt(e)
                      , o = lt(t);
                    return Ot(r, o, n)
                }
                ,
                r.addHook = function(e, t) {
                    "function" == typeof t && (pe[e] = pe[e] || [],
                    d(pe[e], t))
                }
                ,
                r.removeHook = function(e) {
                    if (pe[e])
                        return f(pe[e])
                }
                ,
                r.removeHooks = function(e) {
                    pe[e] && (pe[e] = [])
                }
                ,
                r.removeAllHooks = function() {
                    pe = {}
                }
                ,
                r
            }()
        }()
    },
    "./node_modules/es6-promise-polyfill/promise.js": function(e, t, n) {
        (function(r) {
            var o;
            !function(r) {
                var i = r.Promise
                  , s = i && "resolve"in i && "reject"in i && "all"in i && "race"in i && function() {
                    var e;
                    return new i((function(t) {
                        e = t
                    }
                    )),
                    "function" == typeof e
                }();
                t ? (t.Promise = s ? i : E,
                t.Polyfill = E) : void 0 === (o = function() {
                    return s ? i : E
                }
                .call(t, n, t, e)) || (e.exports = o);
                var a = function() {};
                function u(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                var c, l = "undefined" != typeof setImmediate ? setImmediate : setTimeout, f = [];
                function d() {
                    for (var e = 0; e < f.length; e++)
                        f[e][0](f[e][1]);
                    f = [],
                    c = !1
                }
                function p(e, t) {
                    f.push([e, t]),
                    c || (c = !0,
                    l(d, 0))
                }
                function h(e) {
                    var t = e.owner
                      , n = t.state_
                      , r = t.data_
                      , o = e[n]
                      , i = e.then;
                    if ("function" == typeof o) {
                        n = "fulfilled";
                        try {
                            r = o(r)
                        } catch (e) {
                            b(i, e)
                        }
                    }
                    m(i, r) || ("fulfilled" === n && g(i, r),
                    "rejected" === n && b(i, r))
                }
                function m(e, t) {
                    var n;
                    try {
                        if (e === t)
                            throw new TypeError("A promises callback cannot return that same promise.");
                        if (t && ("function" == typeof t || "object" == typeof t)) {
                            var r = t.then;
                            if ("function" == typeof r)
                                return r.call(t, (function(r) {
                                    n || (n = !0,
                                    t !== r ? g(e, r) : y(e, r))
                                }
                                ), (function(t) {
                                    n || (n = !0,
                                    b(e, t))
                                }
                                )),
                                !0
                        }
                    } catch (t) {
                        return n || b(e, t),
                        !0
                    }
                    return !1
                }
                function g(e, t) {
                    e !== t && m(e, t) || y(e, t)
                }
                function y(e, t) {
                    "pending" === e.state_ && (e.state_ = "sealed",
                    e.data_ = t,
                    p(D, e))
                }
                function b(e, t) {
                    "pending" === e.state_ && (e.state_ = "sealed",
                    e.data_ = t,
                    p(w, e))
                }
                function v(e) {
                    var t = e.then_;
                    e.then_ = void 0;
                    for (var n = 0; n < t.length; n++)
                        h(t[n])
                }
                function D(e) {
                    e.state_ = "fulfilled",
                    v(e)
                }
                function w(e) {
                    e.state_ = "rejected",
                    v(e)
                }
                function E(e) {
                    if ("function" != typeof e)
                        throw new TypeError("Promise constructor takes a function argument");
                    if (this instanceof E == !1)
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this.then_ = [],
                    function(e, t) {
                        function n(e) {
                            b(t, e)
                        }
                        try {
                            e((function(e) {
                                g(t, e)
                            }
                            ), n)
                        } catch (e) {
                            n(e)
                        }
                    }(e, this)
                }
                E.prototype = {
                    constructor: E,
                    state_: "pending",
                    then_: null,
                    data_: void 0,
                    then: function(e, t) {
                        var n = {
                            owner: this,
                            then: new this.constructor(a),
                            fulfilled: e,
                            rejected: t
                        };
                        return "fulfilled" === this.state_ || "rejected" === this.state_ ? p(h, n) : this.then_.push(n),
                        n.then
                    },
                    catch: function(e) {
                        return this.then(null, e)
                    }
                },
                E.all = function(e) {
                    if (!u(e))
                        throw new TypeError("You must pass an array to Promise.all().");
                    return new this((function(t, n) {
                        var r = []
                          , o = 0;
                        function i(e) {
                            return o++,
                            function(n) {
                                r[e] = n,
                                --o || t(r)
                            }
                        }
                        for (var s, a = 0; a < e.length; a++)
                            (s = e[a]) && "function" == typeof s.then ? s.then(i(a), n) : r[a] = s;
                        o || t(r)
                    }
                    ))
                }
                ,
                E.race = function(e) {
                    if (!u(e))
                        throw new TypeError("You must pass an array to Promise.race().");
                    return new this((function(t, n) {
                        for (var r, o = 0; o < e.length; o++)
                            (r = e[o]) && "function" == typeof r.then ? r.then(t, n) : t(r)
                    }
                    ))
                }
                ,
                E.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === this ? e : new this((function(t) {
                        t(e)
                    }
                    ))
                }
                ,
                E.reject = function(e) {
                    return new this((function(t, n) {
                        n(e)
                    }
                    ))
                }
            }("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this)
        }
        ).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/ieee754/index.js": function(e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function(e, t, n, r, o) {
            var i, s, a = 8 * o - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? o - 1 : 0, d = n ? -1 : 1, p = e[t + f];
            for (f += d,
            i = p & (1 << -l) - 1,
            p >>= -l,
            l += a; l > 0; i = 256 * i + e[t + f],
            f += d,
            l -= 8)
                ;
            for (s = i & (1 << -l) - 1,
            i >>= -l,
            l += r; l > 0; s = 256 * s + e[t + f],
            f += d,
            l -= 8)
                ;
            if (0 === i)
                i = 1 - c;
            else {
                if (i === u)
                    return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r),
                i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - r)
        }
        ,
        t.write = function(e, t, n, r, o, i) {
            var s, a, u, c = 8 * i - o - 1, l = (1 << c) - 1, f = l >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, h = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            s = l) : (s = Math.floor(Math.log(t) / Math.LN2),
            t * (u = Math.pow(2, -s)) < 1 && (s--,
            u *= 2),
            (t += s + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (s++,
            u /= 2),
            s + f >= l ? (a = 0,
            s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, o),
            s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, o),
            s = 0)); o >= 8; e[n + p] = 255 & a,
            p += h,
            a /= 256,
            o -= 8)
                ;
            for (s = s << o | a,
            c += o; c > 0; e[n + p] = 255 & s,
            p += h,
            s /= 256,
            c -= 8)
                ;
            e[n + p - h] |= 128 * m
        }
    },
    "./node_modules/marked/lib/marked.umd.js": function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, (o = r.key,
                    i = void 0,
                    "symbol" == typeof (i = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != typeof r)
                                return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(o, "string")) ? i : String(i)), r)
                }
                var o, i
            }
            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n)
                    return (n = n.call(e)).next.bind(n);
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0;
                    return function() {
                        return o >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[o++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            function i() {
                return {
                    async: !1,
                    baseUrl: null,
                    breaks: !1,
                    extensions: null,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    hooks: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: null,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartypants: !1,
                    tokenizer: null,
                    walkTokens: null,
                    xhtml: !1
                }
            }
            e.defaults = {
                async: !1,
                baseUrl: null,
                breaks: !1,
                extensions: null,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                hooks: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
            };
            var s = /[&<>"']/
              , a = new RegExp(s.source,"g")
              , u = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/
              , c = new RegExp(u.source,"g")
              , l = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , f = function(e) {
                return l[e]
            };
            function d(e, t) {
                if (t) {
                    if (s.test(e))
                        return e.replace(a, f)
                } else if (u.test(e))
                    return e.replace(c, f);
                return e
            }
            var p = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
            function h(e) {
                return e.replace(p, (function(e, t) {
                    return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                }
                ))
            }
            var m = /(^|[^\[])\^/g;
            function g(e, t) {
                e = "string" == typeof e ? e : e.source,
                t = t || "";
                var n = {
                    replace: function(t, r) {
                        return r = (r = r.source || r).replace(m, "$1"),
                        e = e.replace(t, r),
                        n
                    },
                    getRegex: function() {
                        return new RegExp(e,t)
                    }
                };
                return n
            }
            var y = /[^\w:]/g
              , b = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
            function v(e, t, n) {
                if (e) {
                    var r;
                    try {
                        r = decodeURIComponent(h(n)).replace(y, "").toLowerCase()
                    } catch (e) {
                        return null
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:"))
                        return null
                }
                t && !b.test(n) && (n = function(e, t) {
                    D[" " + e] || (w.test(e) ? D[" " + e] = e + "/" : D[" " + e] = k(e, "/", !0));
                    var n = -1 === (e = D[" " + e]).indexOf(":");
                    return "//" === t.substring(0, 2) ? n ? t : e.replace(E, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(x, "$1") + t : e + t
                }(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%")
                } catch (e) {
                    return null
                }
                return n
            }
            var D = {}
              , w = /^[^:]+:\/*[^/]*$/
              , E = /^([^:]+:)[\s\S]*$/
              , x = /^([^:]+:\/*[^/]*)[\s\S]*$/
              , A = {
                exec: function() {}
            };
            function C(e, t) {
                var n = e.replace(/\|/g, (function(e, t, n) {
                    for (var r = !1, o = t; --o >= 0 && "\\" === n[o]; )
                        r = !r;
                    return r ? "|" : " |"
                }
                )).split(/ \|/)
                  , r = 0;
                if (n[0].trim() || n.shift(),
                n.length > 0 && !n[n.length - 1].trim() && n.pop(),
                n.length > t)
                    n.splice(t);
                else
                    for (; n.length < t; )
                        n.push("");
                for (; r < n.length; r++)
                    n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
            }
            function k(e, t, n) {
                var r = e.length;
                if (0 === r)
                    return "";
                for (var o = 0; o < r; ) {
                    var i = e.charAt(r - o - 1);
                    if (i !== t || n) {
                        if (i === t || !n)
                            break;
                        o++
                    } else
                        o++
                }
                return e.slice(0, r - o)
            }
            function S(e, t) {
                if (t < 1)
                    return "";
                for (var n = ""; t > 1; )
                    1 & t && (n += e),
                    t >>= 1,
                    e += e;
                return n + e
            }
            function T(e, t, n, r) {
                var o = t.href
                  , i = t.title ? d(t.title) : null
                  , s = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                    r.state.inLink = !0;
                    var a = {
                        type: "link",
                        raw: n,
                        href: o,
                        title: i,
                        text: s,
                        tokens: r.inlineTokens(s)
                    };
                    return r.state.inLink = !1,
                    a
                }
                return {
                    type: "image",
                    raw: n,
                    href: o,
                    title: i,
                    text: d(s)
                }
            }
            var O = function() {
                function t(t) {
                    this.options = t || e.defaults
                }
                var n = t.prototype;
                return n.space = function(e) {
                    var t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0)
                        return {
                            type: "space",
                            raw: t[0]
                        }
                }
                ,
                n.code = function(e) {
                    var t = this.rules.block.code.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ {1,4}/gm, "");
                        return {
                            type: "code",
                            raw: t[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? n : k(n, "\n")
                        }
                    }
                }
                ,
                n.fences = function(e) {
                    var t = this.rules.block.fences.exec(e);
                    if (t) {
                        var n = t[0]
                          , r = function(e, t) {
                            var n = e.match(/^(\s+)(?:```)/);
                            if (null === n)
                                return t;
                            var r = n[1];
                            return t.split("\n").map((function(e) {
                                var t = e.match(/^\s+/);
                                return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e
                            }
                            )).join("\n")
                        }(n, t[3] || "");
                        return {
                            type: "code",
                            raw: n,
                            lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                            text: r
                        }
                    }
                }
                ,
                n.heading = function(e) {
                    var t = this.rules.block.heading.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (/#$/.test(n)) {
                            var r = k(n, "#");
                            this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim())
                        }
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: n,
                            tokens: this.lexer.inline(n)
                        }
                    }
                }
                ,
                n.hr = function(e) {
                    var t = this.rules.block.hr.exec(e);
                    if (t)
                        return {
                            type: "hr",
                            raw: t[0]
                        }
                }
                ,
                n.blockquote = function(e) {
                    var t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ *>[ \t]?/gm, "")
                          , r = this.lexer.state.top;
                        this.lexer.state.top = !0;
                        var o = this.lexer.blockTokens(n);
                        return this.lexer.state.top = r,
                        {
                            type: "blockquote",
                            raw: t[0],
                            tokens: o,
                            text: n
                        }
                    }
                }
                ,
                n.list = function(e) {
                    var t = this.rules.block.list.exec(e);
                    if (t) {
                        var n, r, o, i, s, a, u, c, l, f, d, p, h = t[1].trim(), m = h.length > 1, g = {
                            type: "list",
                            raw: "",
                            ordered: m,
                            start: m ? +h.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        };
                        h = m ? "\\d{1,9}\\" + h.slice(-1) : "\\" + h,
                        this.options.pedantic && (h = m ? h : "[*+-]");
                        for (var y = new RegExp("^( {0,3}" + h + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); e && (p = !1,
                        t = y.exec(e)) && !this.rules.block.hr.test(e); ) {
                            if (n = t[0],
                            e = e.substring(n.length),
                            c = t[2].split("\n", 1)[0].replace(/^\t+/, (function(e) {
                                return " ".repeat(3 * e.length)
                            }
                            )),
                            l = e.split("\n", 1)[0],
                            this.options.pedantic ? (i = 2,
                            d = c.trimLeft()) : (i = (i = t[2].search(/[^ ]/)) > 4 ? 1 : i,
                            d = c.slice(i),
                            i += t[1].length),
                            a = !1,
                            !c && /^ *$/.test(l) && (n += l + "\n",
                            e = e.substring(l.length + 1),
                            p = !0),
                            !p)
                                for (var b = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"), v = new RegExp("^ {0," + Math.min(3, i - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), D = new RegExp("^ {0," + Math.min(3, i - 1) + "}(?:```|~~~)"), w = new RegExp("^ {0," + Math.min(3, i - 1) + "}#"); e && (l = f = e.split("\n", 1)[0],
                                this.options.pedantic && (l = l.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                                !D.test(l)) && !w.test(l) && !b.test(l) && !v.test(e); ) {
                                    if (l.search(/[^ ]/) >= i || !l.trim())
                                        d += "\n" + l.slice(i);
                                    else {
                                        if (a)
                                            break;
                                        if (c.search(/[^ ]/) >= 4)
                                            break;
                                        if (D.test(c))
                                            break;
                                        if (w.test(c))
                                            break;
                                        if (v.test(c))
                                            break;
                                        d += "\n" + l
                                    }
                                    a || l.trim() || (a = !0),
                                    n += f + "\n",
                                    e = e.substring(f.length + 1),
                                    c = l.slice(i)
                                }
                            g.loose || (u ? g.loose = !0 : /\n *\n *$/.test(n) && (u = !0)),
                            this.options.gfm && (r = /^\[[ xX]\] /.exec(d)) && (o = "[ ] " !== r[0],
                            d = d.replace(/^\[[ xX]\] +/, "")),
                            g.items.push({
                                type: "list_item",
                                raw: n,
                                task: !!r,
                                checked: o,
                                loose: !1,
                                text: d
                            }),
                            g.raw += n
                        }
                        g.items[g.items.length - 1].raw = n.trimRight(),
                        g.items[g.items.length - 1].text = d.trimRight(),
                        g.raw = g.raw.trimRight();
                        var E = g.items.length;
                        for (s = 0; s < E; s++)
                            if (this.lexer.state.top = !1,
                            g.items[s].tokens = this.lexer.blockTokens(g.items[s].text, []),
                            !g.loose) {
                                var x = g.items[s].tokens.filter((function(e) {
                                    return "space" === e.type
                                }
                                ))
                                  , A = x.length > 0 && x.some((function(e) {
                                    return /\n.*\n/.test(e.raw)
                                }
                                ));
                                g.loose = A
                            }
                        if (g.loose)
                            for (s = 0; s < E; s++)
                                g.items[s].loose = !0;
                        return g
                    }
                }
                ,
                n.html = function(e) {
                    var t = this.rules.block.html.exec(e);
                    if (t) {
                        var n = {
                            type: "html",
                            raw: t[0],
                            pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                            text: t[0]
                        };
                        if (this.options.sanitize) {
                            var r = this.options.sanitizer ? this.options.sanitizer(t[0]) : d(t[0]);
                            n.type = "paragraph",
                            n.text = r,
                            n.tokens = this.lexer.inline(r)
                        }
                        return n
                    }
                }
                ,
                n.def = function(e) {
                    var t = this.rules.block.def.exec(e);
                    if (t) {
                        var n = t[1].toLowerCase().replace(/\s+/g, " ")
                          , r = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : ""
                          , o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                        return {
                            type: "def",
                            tag: n,
                            raw: t[0],
                            href: r,
                            title: o
                        }
                    }
                }
                ,
                n.table = function(e) {
                    var t = this.rules.block.table.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: C(t[1]).map((function(e) {
                                return {
                                    text: e
                                }
                            }
                            )),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                        };
                        if (n.header.length === n.align.length) {
                            n.raw = t[0];
                            var r, o, i, s, a = n.align.length;
                            for (r = 0; r < a; r++)
                                /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                            for (a = n.rows.length,
                            r = 0; r < a; r++)
                                n.rows[r] = C(n.rows[r], n.header.length).map((function(e) {
                                    return {
                                        text: e
                                    }
                                }
                                ));
                            for (a = n.header.length,
                            o = 0; o < a; o++)
                                n.header[o].tokens = this.lexer.inline(n.header[o].text);
                            for (a = n.rows.length,
                            o = 0; o < a; o++)
                                for (s = n.rows[o],
                                i = 0; i < s.length; i++)
                                    s[i].tokens = this.lexer.inline(s[i].text);
                            return n
                        }
                    }
                }
                ,
                n.lheading = function(e) {
                    var t = this.rules.block.lheading.exec(e);
                    if (t)
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: "=" === t[2].charAt(0) ? 1 : 2,
                            text: t[1],
                            tokens: this.lexer.inline(t[1])
                        }
                }
                ,
                n.paragraph = function(e) {
                    var t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        var n = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                        return {
                            type: "paragraph",
                            raw: t[0],
                            text: n,
                            tokens: this.lexer.inline(n)
                        }
                    }
                }
                ,
                n.text = function(e) {
                    var t = this.rules.block.text.exec(e);
                    if (t)
                        return {
                            type: "text",
                            raw: t[0],
                            text: t[0],
                            tokens: this.lexer.inline(t[0])
                        }
                }
                ,
                n.escape = function(e) {
                    var t = this.rules.inline.escape.exec(e);
                    if (t)
                        return {
                            type: "escape",
                            raw: t[0],
                            text: d(t[1])
                        }
                }
                ,
                n.tag = function(e) {
                    var t = this.rules.inline.tag.exec(e);
                    if (t)
                        return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                        !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                        {
                            type: this.options.sanitize ? "text" : "html",
                            raw: t[0],
                            inLink: this.lexer.state.inLink,
                            inRawBlock: this.lexer.state.inRawBlock,
                            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : d(t[0]) : t[0]
                        }
                }
                ,
                n.link = function(e) {
                    var t = this.rules.inline.link.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                            if (!/>$/.test(n))
                                return;
                            var r = k(n.slice(0, -1), "\\");
                            if ((n.length - r.length) % 2 == 0)
                                return
                        } else {
                            var o = function(e, t) {
                                if (-1 === e.indexOf(t[1]))
                                    return -1;
                                for (var n = e.length, r = 0, o = 0; o < n; o++)
                                    if ("\\" === e[o])
                                        o++;
                                    else if (e[o] === t[0])
                                        r++;
                                    else if (e[o] === t[1] && --r < 0)
                                        return o;
                                return -1
                            }(t[2], "()");
                            if (o > -1) {
                                var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + o;
                                t[2] = t[2].substring(0, o),
                                t[0] = t[0].substring(0, i).trim(),
                                t[3] = ""
                            }
                        }
                        var s = t[2]
                          , a = "";
                        if (this.options.pedantic) {
                            var u = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                            u && (s = u[1],
                            a = u[3])
                        } else
                            a = t[3] ? t[3].slice(1, -1) : "";
                        return s = s.trim(),
                        /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)),
                        T(t, {
                            href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                            title: a ? a.replace(this.rules.inline._escapes, "$1") : a
                        }, t[0], this.lexer)
                    }
                }
                ,
                n.reflink = function(e, t) {
                    var n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        var r = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (!(r = t[r.toLowerCase()])) {
                            var o = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: o,
                                text: o
                            }
                        }
                        return T(n, r, n[0], this.lexer)
                    }
                }
                ,
                n.emStrong = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.emStrong.lDelim.exec(e);
                    if (r && (!r[3] || !n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                        var o = r[1] || r[2] || "";
                        if (!o || o && ("" === n || this.rules.inline.punctuation.exec(n))) {
                            var i, s, a = r[0].length - 1, u = a, c = 0, l = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                            for (l.lastIndex = 0,
                            t = t.slice(-1 * e.length + a); null != (r = l.exec(t)); )
                                if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])
                                    if (s = i.length,
                                    r[3] || r[4])
                                        u += s;
                                    else if (!((r[5] || r[6]) && a % 3) || (a + s) % 3) {
                                        if (!((u -= s) > 0)) {
                                            s = Math.min(s, s + u + c);
                                            var f = e.slice(0, a + r.index + (r[0].length - i.length) + s);
                                            if (Math.min(a, s) % 2) {
                                                var d = f.slice(1, -1);
                                                return {
                                                    type: "em",
                                                    raw: f,
                                                    text: d,
                                                    tokens: this.lexer.inlineTokens(d)
                                                }
                                            }
                                            var p = f.slice(2, -2);
                                            return {
                                                type: "strong",
                                                raw: f,
                                                text: p,
                                                tokens: this.lexer.inlineTokens(p)
                                            }
                                        }
                                    } else
                                        c += s
                        }
                    }
                }
                ,
                n.codespan = function(e) {
                    var t = this.rules.inline.code.exec(e);
                    if (t) {
                        var n = t[2].replace(/\n/g, " ")
                          , r = /[^ ]/.test(n)
                          , o = /^ /.test(n) && / $/.test(n);
                        return r && o && (n = n.substring(1, n.length - 1)),
                        n = d(n, !0),
                        {
                            type: "codespan",
                            raw: t[0],
                            text: n
                        }
                    }
                }
                ,
                n.br = function(e) {
                    var t = this.rules.inline.br.exec(e);
                    if (t)
                        return {
                            type: "br",
                            raw: t[0]
                        }
                }
                ,
                n.del = function(e) {
                    var t = this.rules.inline.del.exec(e);
                    if (t)
                        return {
                            type: "del",
                            raw: t[0],
                            text: t[2],
                            tokens: this.lexer.inlineTokens(t[2])
                        }
                }
                ,
                n.autolink = function(e, t) {
                    var n, r, o = this.rules.inline.autolink.exec(e);
                    if (o)
                        return r = "@" === o[2] ? "mailto:" + (n = d(this.options.mangle ? t(o[1]) : o[1])) : n = d(o[1]),
                        {
                            type: "link",
                            raw: o[0],
                            text: n,
                            href: r,
                            tokens: [{
                                type: "text",
                                raw: n,
                                text: n
                            }]
                        }
                }
                ,
                n.url = function(e, t) {
                    var n;
                    if (n = this.rules.inline.url.exec(e)) {
                        var r, o;
                        if ("@" === n[2])
                            o = "mailto:" + (r = d(this.options.mangle ? t(n[0]) : n[0]));
                        else {
                            var i;
                            do {
                                i = n[0],
                                n[0] = this.rules.inline._backpedal.exec(n[0])[0]
                            } while (i !== n[0]);
                            r = d(n[0]),
                            o = "www." === n[1] ? "http://" + n[0] : n[0]
                        }
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: o,
                            tokens: [{
                                type: "text",
                                raw: r,
                                text: r
                            }]
                        }
                    }
                }
                ,
                n.inlineText = function(e, t) {
                    var n, r = this.rules.inline.text.exec(e);
                    if (r)
                        return n = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : d(r[0]) : r[0] : d(this.options.smartypants ? t(r[0]) : r[0]),
                        {
                            type: "text",
                            raw: r[0],
                            text: n
                        }
                }
                ,
                t
            }()
              , _ = {
                newline: /^(?: *(?:\n|$))+/,
                code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
                html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
                table: A,
                lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                text: /^[^\n]+/,
                _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
                _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
            };
            _.def = g(_.def).replace("label", _._label).replace("title", _._title).getRegex(),
            _.bullet = /(?:[*+-]|\d{1,9}[.)])/,
            _.listItemStart = g(/^( *)(bull) */).replace("bull", _.bullet).getRegex(),
            _.list = g(_.list).replace(/bull/g, _.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + _.def.source + ")").getRegex(),
            _._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
            _._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
            _.html = g(_.html, "i").replace("comment", _._comment).replace("tag", _._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
            _.paragraph = g(_._paragraph).replace("hr", _.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex(),
            _.blockquote = g(_.blockquote).replace("paragraph", _.paragraph).getRegex(),
            _.normal = n({}, _),
            _.gfm = n({}, _.normal, {
                table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }),
            _.gfm.table = g(_.gfm.table).replace("hr", _.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex(),
            _.gfm.paragraph = g(_._paragraph).replace("hr", _.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", _.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex(),
            _.pedantic = n({}, _.normal, {
                html: g("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", _._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: A,
                lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                paragraph: g(_.normal._paragraph).replace("hr", _.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", _.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            });
            var F = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: A,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(ref)\]/,
                nolink: /^!?\[(ref)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                emStrong: {
                    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
                    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: A,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^([\spunctuation])/
            };
            function j(e) {
                return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
            }
            function R(e) {
                var t, n, r = "", o = e.length;
                for (t = 0; t < o; t++)
                    n = e.charCodeAt(t),
                    Math.random() > .5 && (n = "x" + n.toString(16)),
                    r += "&#" + n + ";";
                return r
            }
            F._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
            F.punctuation = g(F.punctuation).replace(/punctuation/g, F._punctuation).getRegex(),
            F.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,
            F.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g,
            F._comment = g(_._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
            F.emStrong.lDelim = g(F.emStrong.lDelim).replace(/punct/g, F._punctuation).getRegex(),
            F.emStrong.rDelimAst = g(F.emStrong.rDelimAst, "g").replace(/punct/g, F._punctuation).getRegex(),
            F.emStrong.rDelimUnd = g(F.emStrong.rDelimUnd, "g").replace(/punct/g, F._punctuation).getRegex(),
            F._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,
            F._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
            F._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
            F.autolink = g(F.autolink).replace("scheme", F._scheme).replace("email", F._email).getRegex(),
            F._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
            F.tag = g(F.tag).replace("comment", F._comment).replace("attribute", F._attribute).getRegex(),
            F._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
            F._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,
            F._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
            F.link = g(F.link).replace("label", F._label).replace("href", F._href).replace("title", F._title).getRegex(),
            F.reflink = g(F.reflink).replace("label", F._label).replace("ref", _._label).getRegex(),
            F.nolink = g(F.nolink).replace("ref", _._label).getRegex(),
            F.reflinkSearch = g(F.reflinkSearch, "g").replace("reflink", F.reflink).replace("nolink", F.nolink).getRegex(),
            F.normal = n({}, F),
            F.pedantic = n({}, F.normal, {
                strong: {
                    start: /^__|\*\*/,
                    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    endAst: /\*\*(?!\*)/g,
                    endUnd: /__(?!_)/g
                },
                em: {
                    start: /^_|\*/,
                    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                    endAst: /\*(?!\*)/g,
                    endUnd: /_(?!_)/g
                },
                link: g(/^!?\[(label)\]\((.*?)\)/).replace("label", F._label).getRegex(),
                reflink: g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", F._label).getRegex()
            }),
            F.gfm = n({}, F.normal, {
                escape: g(F.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            }),
            F.gfm.url = g(F.gfm.url, "i").replace("email", F.gfm._extended_email).getRegex(),
            F.breaks = n({}, F.gfm, {
                br: g(F.br).replace("{2,}", "*").getRegex(),
                text: g(F.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            });
            var I = function() {
                function n(t) {
                    this.tokens = [],
                    this.tokens.links = Object.create(null),
                    this.options = t || e.defaults,
                    this.options.tokenizer = this.options.tokenizer || new O,
                    this.tokenizer = this.options.tokenizer,
                    this.tokenizer.options = this.options,
                    this.tokenizer.lexer = this,
                    this.inlineQueue = [],
                    this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    var n = {
                        block: _.normal,
                        inline: F.normal
                    };
                    this.options.pedantic ? (n.block = _.pedantic,
                    n.inline = F.pedantic) : this.options.gfm && (n.block = _.gfm,
                    this.options.breaks ? n.inline = F.breaks : n.inline = F.gfm),
                    this.tokenizer.rules = n
                }
                n.lex = function(e, t) {
                    return new n(t).lex(e)
                }
                ,
                n.lexInline = function(e, t) {
                    return new n(t).inlineTokens(e)
                }
                ;
                var r, o, i, s = n.prototype;
                return s.lex = function(e) {
                    var t;
                    for (e = e.replace(/\r\n|\r/g, "\n"),
                    this.blockTokens(e, this.tokens); t = this.inlineQueue.shift(); )
                        this.inlineTokens(t.src, t.tokens);
                    return this.tokens
                }
                ,
                s.blockTokens = function(e, t) {
                    var n, r, o, i, s = this;
                    for (void 0 === t && (t = []),
                    e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (function(e, t, n) {
                        return t + "    ".repeat(n.length)
                    }
                    )); e; )
                        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((function(r) {
                            return !!(n = r.call({
                                lexer: s
                            }, e, t)) && (e = e.substring(n.raw.length),
                            t.push(n),
                            !0)
                        }
                        ))))
                            if (n = this.tokenizer.space(e))
                                e = e.substring(n.raw.length),
                                1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
                            else if (n = this.tokenizer.code(e))
                                e = e.substring(n.raw.length),
                                !(r = t[t.length - 1]) || "paragraph" !== r.type && "text" !== r.type ? t.push(n) : (r.raw += "\n" + n.raw,
                                r.text += "\n" + n.text,
                                this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
                            else if (n = this.tokenizer.fences(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.heading(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.hr(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.blockquote(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.list(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.html(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.def(e))
                                e = e.substring(n.raw.length),
                                !(r = t[t.length - 1]) || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                                    href: n.href,
                                    title: n.title
                                }) : (r.raw += "\n" + n.raw,
                                r.text += "\n" + n.raw,
                                this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
                            else if (n = this.tokenizer.table(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.lheading(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (o = e,
                            this.options.extensions && this.options.extensions.startBlock && function() {
                                var t = 1 / 0
                                  , n = e.slice(1)
                                  , r = void 0;
                                s.options.extensions.startBlock.forEach((function(e) {
                                    "number" == typeof (r = e.call({
                                        lexer: this
                                    }, n)) && r >= 0 && (t = Math.min(t, r))
                                }
                                )),
                                t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
                            }(),
                            this.state.top && (n = this.tokenizer.paragraph(o)))
                                r = t[t.length - 1],
                                i && "paragraph" === r.type ? (r.raw += "\n" + n.raw,
                                r.text += "\n" + n.text,
                                this.inlineQueue.pop(),
                                this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n),
                                i = o.length !== e.length,
                                e = e.substring(n.raw.length);
                            else if (n = this.tokenizer.text(e))
                                e = e.substring(n.raw.length),
                                (r = t[t.length - 1]) && "text" === r.type ? (r.raw += "\n" + n.raw,
                                r.text += "\n" + n.text,
                                this.inlineQueue.pop(),
                                this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
                            else if (e) {
                                var a = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(a);
                                    break
                                }
                                throw new Error(a)
                            }
                    return this.state.top = !0,
                    t
                }
                ,
                s.inline = function(e, t) {
                    return void 0 === t && (t = []),
                    this.inlineQueue.push({
                        src: e,
                        tokens: t
                    }),
                    t
                }
                ,
                s.inlineTokens = function(e, t) {
                    var n, r, o, i = this;
                    void 0 === t && (t = []);
                    var s, a, u, c = e;
                    if (this.tokens.links) {
                        var l = Object.keys(this.tokens.links);
                        if (l.length > 0)
                            for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(c)); )
                                l.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, s.index) + "[" + S("a", s[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(c)); )
                        c = c.slice(0, s.index) + "[" + S("a", s[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(c)); )
                        c = c.slice(0, s.index + s[0].length - 2) + "++" + c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),
                        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
                    for (; e; )
                        if (a || (u = ""),
                        a = !1,
                        !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((function(r) {
                            return !!(n = r.call({
                                lexer: i
                            }, e, t)) && (e = e.substring(n.raw.length),
                            t.push(n),
                            !0)
                        }
                        ))))
                            if (n = this.tokenizer.escape(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.tag(e))
                                e = e.substring(n.raw.length),
                                (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw,
                                r.text += n.text) : t.push(n);
                            else if (n = this.tokenizer.link(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.reflink(e, this.tokens.links))
                                e = e.substring(n.raw.length),
                                (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw,
                                r.text += n.text) : t.push(n);
                            else if (n = this.tokenizer.emStrong(e, c, u))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.codespan(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.br(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.del(e))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (n = this.tokenizer.autolink(e, R))
                                e = e.substring(n.raw.length),
                                t.push(n);
                            else if (this.state.inLink || !(n = this.tokenizer.url(e, R))) {
                                if (o = e,
                                this.options.extensions && this.options.extensions.startInline && function() {
                                    var t = 1 / 0
                                      , n = e.slice(1)
                                      , r = void 0;
                                    i.options.extensions.startInline.forEach((function(e) {
                                        "number" == typeof (r = e.call({
                                            lexer: this
                                        }, n)) && r >= 0 && (t = Math.min(t, r))
                                    }
                                    )),
                                    t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
                                }(),
                                n = this.tokenizer.inlineText(o, j))
                                    e = e.substring(n.raw.length),
                                    "_" !== n.raw.slice(-1) && (u = n.raw.slice(-1)),
                                    a = !0,
                                    (r = t[t.length - 1]) && "text" === r.type ? (r.raw += n.raw,
                                    r.text += n.text) : t.push(n);
                                else if (e) {
                                    var f = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (this.options.silent) {
                                        console.error(f);
                                        break
                                    }
                                    throw new Error(f)
                                }
                            } else
                                e = e.substring(n.raw.length),
                                t.push(n);
                    return t
                }
                ,
                r = n,
                i = [{
                    key: "rules",
                    get: function() {
                        return {
                            block: _,
                            inline: F
                        }
                    }
                }],
                (o = null) && t(r.prototype, o),
                i && t(r, i),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                n
            }()
              , N = function() {
                function t(t) {
                    this.options = t || e.defaults
                }
                var n = t.prototype;
                return n.code = function(e, t, n) {
                    var r = (t || "").match(/\S*/)[0];
                    if (this.options.highlight) {
                        var o = this.options.highlight(e, r);
                        null != o && o !== e && (n = !0,
                        e = o)
                    }
                    return e = e.replace(/\n$/, "") + "\n",
                    r ? '<pre><code class="' + this.options.langPrefix + d(r) + '">' + (n ? e : d(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : d(e, !0)) + "</code></pre>\n"
                }
                ,
                n.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }
                ,
                n.html = function(e) {
                    return e
                }
                ,
                n.heading = function(e, t, n, r) {
                    return this.options.headerIds ? "<h" + t + ' id="' + (this.options.headerPrefix + r.slug(n)) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                }
                ,
                n.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }
                ,
                n.list = function(e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }
                ,
                n.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                }
                ,
                n.checkbox = function(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }
                ,
                n.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                }
                ,
                n.table = function(e, t) {
                    return t && (t = "<tbody>" + t + "</tbody>"),
                    "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                }
                ,
                n.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                }
                ,
                n.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }
                ,
                n.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                }
                ,
                n.em = function(e) {
                    return "<em>" + e + "</em>"
                }
                ,
                n.codespan = function(e) {
                    return "<code>" + e + "</code>"
                }
                ,
                n.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }
                ,
                n.del = function(e) {
                    return "<del>" + e + "</del>"
                }
                ,
                n.link = function(e, t, n) {
                    if (null === (e = v(this.options.sanitize, this.options.baseUrl, e)))
                        return n;
                    var r = '<a href="' + e + '"';
                    return t && (r += ' title="' + t + '"'),
                    r += ">" + n + "</a>"
                }
                ,
                n.image = function(e, t, n) {
                    if (null === (e = v(this.options.sanitize, this.options.baseUrl, e)))
                        return n;
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'),
                    r += this.options.xhtml ? "/>" : ">"
                }
                ,
                n.text = function(e) {
                    return e
                }
                ,
                t
            }()
              , B = function() {
                function e() {}
                var t = e.prototype;
                return t.strong = function(e) {
                    return e
                }
                ,
                t.em = function(e) {
                    return e
                }
                ,
                t.codespan = function(e) {
                    return e
                }
                ,
                t.del = function(e) {
                    return e
                }
                ,
                t.html = function(e) {
                    return e
                }
                ,
                t.text = function(e) {
                    return e
                }
                ,
                t.link = function(e, t, n) {
                    return "" + n
                }
                ,
                t.image = function(e, t, n) {
                    return "" + n
                }
                ,
                t.br = function() {
                    return ""
                }
                ,
                e
            }()
              , P = function() {
                function e() {
                    this.seen = {}
                }
                var t = e.prototype;
                return t.serialize = function(e) {
                    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
                }
                ,
                t.getNextSafeSlug = function(e, t) {
                    var n = e
                      , r = 0;
                    if (this.seen.hasOwnProperty(n)) {
                        r = this.seen[e];
                        do {
                            n = e + "-" + ++r
                        } while (this.seen.hasOwnProperty(n))
                    }
                    return t || (this.seen[e] = r,
                    this.seen[n] = 0),
                    n
                }
                ,
                t.slug = function(e, t) {
                    void 0 === t && (t = {});
                    var n = this.serialize(e);
                    return this.getNextSafeSlug(n, t.dryrun)
                }
                ,
                e
            }()
              , L = function() {
                function t(t) {
                    this.options = t || e.defaults,
                    this.options.renderer = this.options.renderer || new N,
                    this.renderer = this.options.renderer,
                    this.renderer.options = this.options,
                    this.textRenderer = new B,
                    this.slugger = new P
                }
                t.parse = function(e, n) {
                    return new t(n).parse(e)
                }
                ,
                t.parseInline = function(e, n) {
                    return new t(n).parseInline(e)
                }
                ;
                var n = t.prototype;
                return n.parse = function(e, t) {
                    void 0 === t && (t = !0);
                    var n, r, o, i, s, a, u, c, l, f, d, p, m, g, y, b, v, D, w, E = "", x = e.length;
                    for (n = 0; n < x; n++)
                        if (f = e[n],
                        !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[f.type]) || !1 === (w = this.options.extensions.renderers[f.type].call({
                            parser: this
                        }, f)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(f.type))
                            switch (f.type) {
                            case "space":
                                continue;
                            case "hr":
                                E += this.renderer.hr();
                                continue;
                            case "heading":
                                E += this.renderer.heading(this.parseInline(f.tokens), f.depth, h(this.parseInline(f.tokens, this.textRenderer)), this.slugger);
                                continue;
                            case "code":
                                E += this.renderer.code(f.text, f.lang, f.escaped);
                                continue;
                            case "table":
                                for (c = "",
                                u = "",
                                i = f.header.length,
                                r = 0; r < i; r++)
                                    u += this.renderer.tablecell(this.parseInline(f.header[r].tokens), {
                                        header: !0,
                                        align: f.align[r]
                                    });
                                for (c += this.renderer.tablerow(u),
                                l = "",
                                i = f.rows.length,
                                r = 0; r < i; r++) {
                                    for (u = "",
                                    s = (a = f.rows[r]).length,
                                    o = 0; o < s; o++)
                                        u += this.renderer.tablecell(this.parseInline(a[o].tokens), {
                                            header: !1,
                                            align: f.align[o]
                                        });
                                    l += this.renderer.tablerow(u)
                                }
                                E += this.renderer.table(c, l);
                                continue;
                            case "blockquote":
                                l = this.parse(f.tokens),
                                E += this.renderer.blockquote(l);
                                continue;
                            case "list":
                                for (d = f.ordered,
                                p = f.start,
                                m = f.loose,
                                i = f.items.length,
                                l = "",
                                r = 0; r < i; r++)
                                    b = (y = f.items[r]).checked,
                                    v = y.task,
                                    g = "",
                                    y.task && (D = this.renderer.checkbox(b),
                                    m ? y.tokens.length > 0 && "paragraph" === y.tokens[0].type ? (y.tokens[0].text = D + " " + y.tokens[0].text,
                                    y.tokens[0].tokens && y.tokens[0].tokens.length > 0 && "text" === y.tokens[0].tokens[0].type && (y.tokens[0].tokens[0].text = D + " " + y.tokens[0].tokens[0].text)) : y.tokens.unshift({
                                        type: "text",
                                        text: D
                                    }) : g += D),
                                    g += this.parse(y.tokens, m),
                                    l += this.renderer.listitem(g, v, b);
                                E += this.renderer.list(l, d, p);
                                continue;
                            case "html":
                                E += this.renderer.html(f.text);
                                continue;
                            case "paragraph":
                                E += this.renderer.paragraph(this.parseInline(f.tokens));
                                continue;
                            case "text":
                                for (l = f.tokens ? this.parseInline(f.tokens) : f.text; n + 1 < x && "text" === e[n + 1].type; )
                                    l += "\n" + ((f = e[++n]).tokens ? this.parseInline(f.tokens) : f.text);
                                E += t ? this.renderer.paragraph(l) : l;
                                continue;
                            default:
                                var A = 'Token with "' + f.type + '" type was not found.';
                                if (this.options.silent)
                                    return void console.error(A);
                                throw new Error(A)
                            }
                        else
                            E += w || "";
                    return E
                }
                ,
                n.parseInline = function(e, t) {
                    t = t || this.renderer;
                    var n, r, o, i = "", s = e.length;
                    for (n = 0; n < s; n++)
                        if (r = e[n],
                        !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) || !1 === (o = this.options.extensions.renderers[r.type].call({
                            parser: this
                        }, r)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type))
                            switch (r.type) {
                            case "escape":
                                i += t.text(r.text);
                                break;
                            case "html":
                                i += t.html(r.text);
                                break;
                            case "link":
                                i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                                break;
                            case "image":
                                i += t.image(r.href, r.title, r.text);
                                break;
                            case "strong":
                                i += t.strong(this.parseInline(r.tokens, t));
                                break;
                            case "em":
                                i += t.em(this.parseInline(r.tokens, t));
                                break;
                            case "codespan":
                                i += t.codespan(r.text);
                                break;
                            case "br":
                                i += t.br();
                                break;
                            case "del":
                                i += t.del(this.parseInline(r.tokens, t));
                                break;
                            case "text":
                                i += t.text(r.text);
                                break;
                            default:
                                var a = 'Token with "' + r.type + '" type was not found.';
                                if (this.options.silent)
                                    return void console.error(a);
                                throw new Error(a)
                            }
                        else
                            i += o || "";
                    return i
                }
                ,
                t
            }()
              , M = function() {
                function t(t) {
                    this.options = t || e.defaults
                }
                var n = t.prototype;
                return n.preprocess = function(e) {
                    return e
                }
                ,
                n.postprocess = function(e) {
                    return e
                }
                ,
                t
            }();
            function U(e, t) {
                return function(r, o, i) {
                    "function" == typeof o && (i = o,
                    o = null);
                    var s = n({}, o)
                      , a = function(e, t, n) {
                        return function(r) {
                            if (r.message += "\nPlease report this to https://github.com/markedjs/marked.",
                            e) {
                                var o = "<p>An error occurred:</p><pre>" + d(r.message + "", !0) + "</pre>";
                                return t ? Promise.resolve(o) : n ? void n(null, o) : o
                            }
                            if (t)
                                return Promise.reject(r);
                            if (!n)
                                throw r;
                            n(r)
                        }
                    }((o = n({}, z.defaults, s)).silent, o.async, i);
                    if (null == r)
                        return a(new Error("marked(): input parameter is undefined or null"));
                    if ("string" != typeof r)
                        return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
                    if (function(e) {
                        e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
                    }(o),
                    o.hooks && (o.hooks.options = o),
                    i) {
                        var u, c = o.highlight;
                        try {
                            o.hooks && (r = o.hooks.preprocess(r)),
                            u = e(r, o)
                        } catch (e) {
                            return a(e)
                        }
                        var l = function(e) {
                            var n;
                            if (!e)
                                try {
                                    o.walkTokens && z.walkTokens(u, o.walkTokens),
                                    n = t(u, o),
                                    o.hooks && (n = o.hooks.postprocess(n))
                                } catch (t) {
                                    e = t
                                }
                            return o.highlight = c,
                            e ? a(e) : i(null, n)
                        };
                        if (!c || c.length < 3)
                            return l();
                        if (delete o.highlight,
                        !u.length)
                            return l();
                        var f = 0;
                        return z.walkTokens(u, (function(e) {
                            "code" === e.type && (f++,
                            setTimeout((function() {
                                c(e.text, e.lang, (function(t, n) {
                                    if (t)
                                        return l(t);
                                    null != n && n !== e.text && (e.text = n,
                                    e.escaped = !0),
                                    0 == --f && l()
                                }
                                ))
                            }
                            ), 0))
                        }
                        )),
                        void (0 === f && l())
                    }
                    if (o.async)
                        return Promise.resolve(o.hooks ? o.hooks.preprocess(r) : r).then((function(t) {
                            return e(t, o)
                        }
                        )).then((function(e) {
                            return o.walkTokens ? Promise.all(z.walkTokens(e, o.walkTokens)).then((function() {
                                return e
                            }
                            )) : e
                        }
                        )).then((function(e) {
                            return t(e, o)
                        }
                        )).then((function(e) {
                            return o.hooks ? o.hooks.postprocess(e) : e
                        }
                        )).catch(a);
                    try {
                        o.hooks && (r = o.hooks.preprocess(r));
                        var p = e(r, o);
                        o.walkTokens && z.walkTokens(p, o.walkTokens);
                        var h = t(p, o);
                        return o.hooks && (h = o.hooks.postprocess(h)),
                        h
                    } catch (e) {
                        return a(e)
                    }
                }
            }
            function z(e, t, n) {
                return U(I.lex, L.parse)(e, t, n)
            }
            M.passThroughHooks = new Set(["preprocess", "postprocess"]),
            z.options = z.setOptions = function(t) {
                var r;
                return z.defaults = n({}, z.defaults, t),
                r = z.defaults,
                e.defaults = r,
                z
            }
            ,
            z.getDefaults = i,
            z.defaults = e.defaults,
            z.use = function() {
                for (var e = z.defaults.extensions || {
                    renderers: {},
                    childTokens: {}
                }, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                    r[o] = arguments[o];
                r.forEach((function(t) {
                    var r = n({}, t);
                    if (r.async = z.defaults.async || r.async || !1,
                    t.extensions && (t.extensions.forEach((function(t) {
                        if (!t.name)
                            throw new Error("extension name required");
                        if (t.renderer) {
                            var n = e.renderers[t.name];
                            e.renderers[t.name] = n ? function() {
                                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                                    r[o] = arguments[o];
                                var i = t.renderer.apply(this, r);
                                return !1 === i && (i = n.apply(this, r)),
                                i
                            }
                            : t.renderer
                        }
                        if (t.tokenizer) {
                            if (!t.level || "block" !== t.level && "inline" !== t.level)
                                throw new Error("extension level must be 'block' or 'inline'");
                            e[t.level] ? e[t.level].unshift(t.tokenizer) : e[t.level] = [t.tokenizer],
                            t.start && ("block" === t.level ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : "inline" === t.level && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]))
                        }
                        t.childTokens && (e.childTokens[t.name] = t.childTokens)
                    }
                    )),
                    r.extensions = e),
                    t.renderer && function() {
                        var e = z.defaults.renderer || new N
                          , n = function(n) {
                            var r = e[n];
                            e[n] = function() {
                                for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
                                    i[s] = arguments[s];
                                var a = t.renderer[n].apply(e, i);
                                return !1 === a && (a = r.apply(e, i)),
                                a
                            }
                        };
                        for (var o in t.renderer)
                            n(o);
                        r.renderer = e
                    }(),
                    t.tokenizer && function() {
                        var e = z.defaults.tokenizer || new O
                          , n = function(n) {
                            var r = e[n];
                            e[n] = function() {
                                for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
                                    i[s] = arguments[s];
                                var a = t.tokenizer[n].apply(e, i);
                                return !1 === a && (a = r.apply(e, i)),
                                a
                            }
                        };
                        for (var o in t.tokenizer)
                            n(o);
                        r.tokenizer = e
                    }(),
                    t.hooks && function() {
                        var e = z.defaults.hooks || new M
                          , n = function(n) {
                            var r = e[n];
                            M.passThroughHooks.has(n) ? e[n] = function(o) {
                                if (z.defaults.async)
                                    return Promise.resolve(t.hooks[n].call(e, o)).then((function(t) {
                                        return r.call(e, t)
                                    }
                                    ));
                                var i = t.hooks[n].call(e, o);
                                return r.call(e, i)
                            }
                            : e[n] = function() {
                                for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
                                    i[s] = arguments[s];
                                var a = t.hooks[n].apply(e, i);
                                return !1 === a && (a = r.apply(e, i)),
                                a
                            }
                        };
                        for (var o in t.hooks)
                            n(o);
                        r.hooks = e
                    }(),
                    t.walkTokens) {
                        var o = z.defaults.walkTokens;
                        r.walkTokens = function(e) {
                            var n = [];
                            return n.push(t.walkTokens.call(this, e)),
                            o && (n = n.concat(o.call(this, e))),
                            n
                        }
                    }
                    z.setOptions(r)
                }
                ))
            }
            ,
            z.walkTokens = function(e, t) {
                for (var n, r = [], i = function() {
                    var e = n.value;
                    switch (r = r.concat(t.call(z, e)),
                    e.type) {
                    case "table":
                        for (var i, s = o(e.header); !(i = s()).done; ) {
                            var a = i.value;
                            r = r.concat(z.walkTokens(a.tokens, t))
                        }
                        for (var u, c = o(e.rows); !(u = c()).done; )
                            for (var l, f = o(u.value); !(l = f()).done; ) {
                                var d = l.value;
                                r = r.concat(z.walkTokens(d.tokens, t))
                            }
                        break;
                    case "list":
                        r = r.concat(z.walkTokens(e.items, t));
                        break;
                    default:
                        z.defaults.extensions && z.defaults.extensions.childTokens && z.defaults.extensions.childTokens[e.type] ? z.defaults.extensions.childTokens[e.type].forEach((function(n) {
                            r = r.concat(z.walkTokens(e[n], t))
                        }
                        )) : e.tokens && (r = r.concat(z.walkTokens(e.tokens, t)))
                    }
                }, s = o(e); !(n = s()).done; )
                    i();
                return r
            }
            ,
            z.parseInline = U(I.lexInline, L.parseInline),
            z.Parser = L,
            z.parser = L.parse,
            z.Renderer = N,
            z.TextRenderer = B,
            z.Lexer = I,
            z.lexer = I.lex,
            z.Tokenizer = O,
            z.Slugger = P,
            z.Hooks = M,
            z.parse = z;
            var $ = z.options
              , H = z.setOptions
              , G = z.use
              , q = z.walkTokens
              , J = z.parseInline
              , V = z
              , Y = L.parse
              , W = I.lex;
            e.Hooks = M,
            e.Lexer = I,
            e.Parser = L,
            e.Renderer = N,
            e.Slugger = P,
            e.TextRenderer = B,
            e.Tokenizer = O,
            e.getDefaults = i,
            e.lexer = W,
            e.marked = z,
            e.options = $,
            e.parse = V,
            e.parseInline = J,
            e.parser = Y,
            e.setOptions = H,
            e.use = G,
            e.walkTokens = q
        }(t)
    },
    "./node_modules/node-libs-browser/node_modules/buffer/index.js": function(e, t, n) {
        "use strict";
        (function(e) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
            var r = n("./node_modules/base64-js/index.js")
              , o = n("./node_modules/ieee754/index.js")
              , i = n("./node_modules/node-libs-browser/node_modules/isarray/index.js");
            function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function a(e, t) {
                if (s() < t)
                    throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)),
                e.length = t),
                e
            }
            function u(e, t, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
                    return new u(e,t,n);
                if ("number" == typeof e) {
                    if ("string" == typeof t)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return f(this, e)
                }
                return c(this, e, t, n)
            }
            function c(e, t, n, r) {
                if ("number" == typeof t)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                    if (t.byteLength,
                    n < 0 || t.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0))
                        throw new RangeError("'length' is out of bounds");
                    t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,n) : new Uint8Array(t,n,r);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = d(e, t);
                    return e
                }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!u.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | h(t, n)
                      , o = (e = a(e, r)).write(t, n);
                    o !== r && (e = e.slice(0, o));
                    return e
                }(e, t, n) : function(e, t) {
                    if (u.isBuffer(t)) {
                        var n = 0 | p(t.length);
                        return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n),
                        e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                            return "number" != typeof t.length || (r = t.length) != r ? a(e, 0) : d(e, t);
                        if ("Buffer" === t.type && i(t.data))
                            return d(e, t.data)
                    }
                    var r;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }
            function l(e) {
                if ("number" != typeof e)
                    throw new TypeError('"size" argument must be a number');
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function f(e, t) {
                if (l(t),
                e = a(e, t < 0 ? 0 : 0 | p(t)),
                !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n)
                        e[n] = 0;
                return e
            }
            function d(e, t) {
                var n = t.length < 0 ? 0 : 0 | p(t.length);
                e = a(e, n);
                for (var r = 0; r < n; r += 1)
                    e[r] = 255 & t[r];
                return e
            }
            function p(e) {
                if (e >= s())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }
            function h(e, t) {
                if (u.isBuffer(e))
                    return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                    return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n)
                    return 0;
                for (var r = !1; ; )
                    switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return U(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return z(e).length;
                    default:
                        if (r)
                            return U(e).length;
                        t = ("" + t).toLowerCase(),
                        r = !0
                    }
            }
            function m(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0),
                t > this.length)
                    return "";
                if ((void 0 === n || n > this.length) && (n = this.length),
                n <= 0)
                    return "";
                if ((n >>>= 0) <= (t >>>= 0))
                    return "";
                for (e || (e = "utf8"); ; )
                    switch (e) {
                    case "hex":
                        return O(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, n);
                    case "ascii":
                        return S(this, t, n);
                    case "latin1":
                    case "binary":
                        return T(this, t, n);
                    case "base64":
                        return C(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return _(this, t, n);
                    default:
                        if (r)
                            throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(),
                        r = !0
                    }
            }
            function g(e, t, n) {
                var r = e[t];
                e[t] = e[n],
                e[n] = r
            }
            function y(e, t, n, r, o) {
                if (0 === e.length)
                    return -1;
                if ("string" == typeof n ? (r = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                isNaN(n) && (n = o ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length) {
                    if (o)
                        return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o)
                        return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = u.from(t, r)),
                u.isBuffer(t))
                    return 0 === t.length ? -1 : b(e, t, n, r, o);
                if ("number" == typeof t)
                    return t &= 255,
                    u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }
            function b(e, t, n, r, o) {
                var i, s = 1, a = e.length, u = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2)
                        return -1;
                    s = 2,
                    a /= 2,
                    u /= 2,
                    n /= 2
                }
                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var l = -1;
                    for (i = n; i < a; i++)
                        if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i),
                            i - l + 1 === u)
                                return l * s
                        } else
                            -1 !== l && (i -= i - l),
                            l = -1
                } else
                    for (n + u > a && (n = a - u),
                    i = n; i >= 0; i--) {
                        for (var f = !0, d = 0; d < u; d++)
                            if (c(e, i + d) !== c(t, d)) {
                                f = !1;
                                break
                            }
                        if (f)
                            return i
                    }
                return -1
            }
            function v(e, t, n, r) {
                n = Number(n) || 0;
                var o = e.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = t.length;
                if (i % 2 != 0)
                    throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var s = 0; s < r; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a))
                        return s;
                    e[n + s] = a
                }
                return s
            }
            function D(e, t, n, r) {
                return $(U(t, e.length - n), e, n, r)
            }
            function w(e, t, n, r) {
                return $(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }
            function E(e, t, n, r) {
                return w(e, t, n, r)
            }
            function x(e, t, n, r) {
                return $(z(t), e, n, r)
            }
            function A(e, t, n, r) {
                return $(function(e, t) {
                    for (var n, r, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                        n = e.charCodeAt(s),
                        r = n >> 8,
                        o = n % 256,
                        i.push(o),
                        i.push(r);
                    return i
                }(t, e.length - n), e, n, r)
            }
            function C(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }
            function k(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n; ) {
                    var i, s, a, u, c = e[o], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + f <= n)
                        switch (f) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                            break;
                        case 3:
                            i = e[o + 1],
                            s = e[o + 2],
                            128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                            break;
                        case 4:
                            i = e[o + 1],
                            s = e[o + 2],
                            a = e[o + 3],
                            128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                        }
                    null === l ? (l = 65533,
                    f = 1) : l > 65535 && (l -= 65536,
                    r.push(l >>> 10 & 1023 | 55296),
                    l = 56320 | 1023 & l),
                    r.push(l),
                    o += f
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096)
                        return String.fromCharCode.apply(String, e);
                    var n = ""
                      , r = 0;
                    for (; r < t; )
                        n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                    return n
                }(r)
            }
            t.Buffer = u,
            t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }
            ,
            t.INSPECT_MAX_BYTES = 50,
            u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(),
            t.kMaxLength = s(),
            u.poolSize = 8192,
            u._augment = function(e) {
                return e.__proto__ = u.prototype,
                e
            }
            ,
            u.from = function(e, t, n) {
                return c(null, e, t, n)
            }
            ,
            u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
            u.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })),
            u.alloc = function(e, t, n) {
                return function(e, t, n, r) {
                    return l(t),
                    t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
                }(null, e, t, n)
            }
            ,
            u.allocUnsafe = function(e) {
                return f(null, e)
            }
            ,
            u.allocUnsafeSlow = function(e) {
                return f(null, e)
            }
            ,
            u.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }
            ,
            u.compare = function(e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                if (e === t)
                    return 0;
                for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o],
                        r = t[o];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }
            ,
            u.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            u.concat = function(e, t) {
                if (!i(e))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length)
                    return u.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0,
                    n = 0; n < e.length; ++n)
                        t += e[n].length;
                var r = u.allocUnsafe(t)
                  , o = 0;
                for (n = 0; n < e.length; ++n) {
                    var s = e[n];
                    if (!u.isBuffer(s))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, o),
                    o += s.length
                }
                return r
            }
            ,
            u.byteLength = h,
            u.prototype._isBuffer = !0,
            u.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2)
                    g(this, t, t + 1);
                return this
            }
            ,
            u.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4)
                    g(this, t, t + 3),
                    g(this, t + 1, t + 2);
                return this
            }
            ,
            u.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8)
                    g(this, t, t + 7),
                    g(this, t + 1, t + 6),
                    g(this, t + 2, t + 5),
                    g(this, t + 3, t + 4);
                return this
            }
            ,
            u.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : m.apply(this, arguments)
            }
            ,
            u.prototype.equals = function(e) {
                if (!u.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }
            ,
            u.prototype.inspect = function() {
                var e = ""
                  , n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                this.length > n && (e += " ... ")),
                "<Buffer " + e + ">"
            }
            ,
            u.prototype.compare = function(e, t, n, r, o) {
                if (!u.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0),
                void 0 === n && (n = e ? e.length : 0),
                void 0 === r && (r = 0),
                void 0 === o && (o = this.length),
                t < 0 || n > e.length || r < 0 || o > this.length)
                    throw new RangeError("out of range index");
                if (r >= o && t >= n)
                    return 0;
                if (r >= o)
                    return -1;
                if (t >= n)
                    return 1;
                if (this === e)
                    return 0;
                for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(i, s), c = this.slice(r, o), l = e.slice(t, n), f = 0; f < a; ++f)
                    if (c[f] !== l[f]) {
                        i = c[f],
                        s = l[f];
                        break
                    }
                return i < s ? -1 : s < i ? 1 : 0
            }
            ,
            u.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }
            ,
            u.prototype.indexOf = function(e, t, n) {
                return y(this, e, t, n, !0)
            }
            ,
            u.prototype.lastIndexOf = function(e, t, n) {
                return y(this, e, t, n, !1)
            }
            ,
            u.prototype.write = function(e, t, n, r) {
                if (void 0 === t)
                    r = "utf8",
                    n = this.length,
                    t = 0;
                else if (void 0 === n && "string" == typeof t)
                    r = t,
                    n = this.length,
                    t = 0;
                else {
                    if (!isFinite(t))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0,
                    isFinite(n) ? (n |= 0,
                    void 0 === r && (r = "utf8")) : (r = n,
                    n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o),
                e.length > 0 && (n < 0 || t < 0) || t > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1; ; )
                    switch (r) {
                    case "hex":
                        return v(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return D(this, e, t, n);
                    case "ascii":
                        return w(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return E(this, e, t, n);
                    case "base64":
                        return x(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, e, t, n);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(),
                        i = !0
                    }
            }
            ,
            u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            function S(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o)
                    r += String.fromCharCode(127 & e[o]);
                return r
            }
            function T(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o)
                    r += String.fromCharCode(e[o]);
                return r
            }
            function O(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0),
                (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = t; i < n; ++i)
                    o += M(e[i]);
                return o
            }
            function _(e, t, n) {
                for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
                    o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }
            function F(e, t, n) {
                if (e % 1 != 0 || e < 0)
                    throw new RangeError("offset is not uint");
                if (e + t > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function j(e, t, n, r, o, i) {
                if (!u.isBuffer(e))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length)
                    throw new RangeError("Index out of range")
            }
            function R(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
                    e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }
            function I(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
                    e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
            }
            function N(e, t, n, r, o, i) {
                if (n + r > e.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function B(e, t, n, r, i) {
                return i || N(e, 0, n, 4),
                o.write(e, t, n, r, 23, 4),
                n + 4
            }
            function P(e, t, n, r, i) {
                return i || N(e, 0, n, 8),
                o.write(e, t, n, r, 52, 8),
                n + 8
            }
            u.prototype.slice = function(e, t) {
                var n, r = this.length;
                if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                t < e && (t = e),
                u.TYPED_ARRAY_SUPPORT)
                    (n = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var o = t - e;
                    n = new u(o,void 0);
                    for (var i = 0; i < o; ++i)
                        n[i] = this[i + e]
                }
                return n
            }
            ,
            u.prototype.readUIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || F(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                    r += this[e + i] * o;
                return r
            }
            ,
            u.prototype.readUIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || F(e, t, this.length);
                for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
                    r += this[e + --t] * o;
                return r
            }
            ,
            u.prototype.readUInt8 = function(e, t) {
                return t || F(e, 1, this.length),
                this[e]
            }
            ,
            u.prototype.readUInt16LE = function(e, t) {
                return t || F(e, 2, this.length),
                this[e] | this[e + 1] << 8
            }
            ,
            u.prototype.readUInt16BE = function(e, t) {
                return t || F(e, 2, this.length),
                this[e] << 8 | this[e + 1]
            }
            ,
            u.prototype.readUInt32LE = function(e, t) {
                return t || F(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }
            ,
            u.prototype.readUInt32BE = function(e, t) {
                return t || F(e, 4, this.length),
                16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }
            ,
            u.prototype.readIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || F(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                    r += this[e + i] * o;
                return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)),
                r
            }
            ,
            u.prototype.readIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || F(e, t, this.length);
                for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
                    i += this[e + --r] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)),
                i
            }
            ,
            u.prototype.readInt8 = function(e, t) {
                return t || F(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }
            ,
            u.prototype.readInt16LE = function(e, t) {
                t || F(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            u.prototype.readInt16BE = function(e, t) {
                t || F(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            u.prototype.readInt32LE = function(e, t) {
                return t || F(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }
            ,
            u.prototype.readInt32BE = function(e, t) {
                return t || F(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }
            ,
            u.prototype.readFloatLE = function(e, t) {
                return t || F(e, 4, this.length),
                o.read(this, e, !0, 23, 4)
            }
            ,
            u.prototype.readFloatBE = function(e, t) {
                return t || F(e, 4, this.length),
                o.read(this, e, !1, 23, 4)
            }
            ,
            u.prototype.readDoubleLE = function(e, t) {
                return t || F(e, 8, this.length),
                o.read(this, e, !0, 52, 8)
            }
            ,
            u.prototype.readDoubleBE = function(e, t) {
                return t || F(e, 8, this.length),
                o.read(this, e, !1, 52, 8)
            }
            ,
            u.prototype.writeUIntLE = function(e, t, n, r) {
                (e = +e,
                t |= 0,
                n |= 0,
                r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1
                  , i = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256); )
                    this[t + i] = e / o & 255;
                return t + n
            }
            ,
            u.prototype.writeUIntBE = function(e, t, n, r) {
                (e = +e,
                t |= 0,
                n |= 0,
                r) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1
                  , i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                    this[t + o] = e / i & 255;
                return t + n
            }
            ,
            u.prototype.writeUInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 1, 255, 0),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                this[t] = 255 & e,
                t + 1
            }
            ,
            u.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : R(this, e, t, !0),
                t + 2
            }
            ,
            u.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : R(this, e, t, !1),
                t + 2
            }
            ,
            u.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                this[t + 2] = e >>> 16,
                this[t + 1] = e >>> 8,
                this[t] = 255 & e) : I(this, e, t, !0),
                t + 4
            }
            ,
            u.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : I(this, e, t, !1),
                t + 4
            }
            ,
            u.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e,
                t |= 0,
                !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    j(this, e, t, n, o - 1, -o)
                }
                var i = 0
                  , s = 1
                  , a = 0;
                for (this[t] = 255 & e; ++i < n && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                    this[t + i] = (e / s >> 0) - a & 255;
                return t + n
            }
            ,
            u.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e,
                t |= 0,
                !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    j(this, e, t, n, o - 1, -o)
                }
                var i = n - 1
                  , s = 1
                  , a = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                    this[t + i] = (e / s >> 0) - a & 255;
                return t + n
            }
            ,
            u.prototype.writeInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 1, 127, -128),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                this[t] = 255 & e,
                t + 1
            }
            ,
            u.prototype.writeInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : R(this, e, t, !0),
                t + 2
            }
            ,
            u.prototype.writeInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : R(this, e, t, !1),
                t + 2
            }
            ,
            u.prototype.writeInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 2147483647, -2147483648),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8,
                this[t + 2] = e >>> 16,
                this[t + 3] = e >>> 24) : I(this, e, t, !0),
                t + 4
            }
            ,
            u.prototype.writeInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : I(this, e, t, !1),
                t + 4
            }
            ,
            u.prototype.writeFloatLE = function(e, t, n) {
                return B(this, e, t, !0, n)
            }
            ,
            u.prototype.writeFloatBE = function(e, t, n) {
                return B(this, e, t, !1, n)
            }
            ,
            u.prototype.writeDoubleLE = function(e, t, n) {
                return P(this, e, t, !0, n)
            }
            ,
            u.prototype.writeDoubleBE = function(e, t, n) {
                return P(this, e, t, !1, n)
            }
            ,
            u.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0),
                r || 0 === r || (r = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                r > 0 && r < n && (r = n),
                r === n)
                    return 0;
                if (0 === e.length || 0 === this.length)
                    return 0;
                if (t < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (r < 0)
                    throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                e.length - t < r - n && (r = e.length - t + n);
                var o, i = r - n;
                if (this === e && n < t && t < r)
                    for (o = i - 1; o >= 0; --o)
                        e[o + t] = this[o + n];
                else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o)
                        e[o + t] = this[o + n];
                else
                    Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                return i
            }
            ,
            u.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t,
                    t = 0,
                    n = this.length) : "string" == typeof n && (r = n,
                    n = this.length),
                    1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== r && "string" != typeof r)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !u.isEncoding(r))
                        throw new TypeError("Unknown encoding: " + r)
                } else
                    "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= t)
                    return this;
                var i;
                if (t >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                e || (e = 0),
                "number" == typeof e)
                    for (i = t; i < n; ++i)
                        this[i] = e;
                else {
                    var s = u.isBuffer(e) ? e : U(new u(e,r).toString())
                      , a = s.length;
                    for (i = 0; i < n - t; ++i)
                        this[i + t] = s[i % a]
                }
                return this
            }
            ;
            var L = /[^+\/0-9A-Za-z-_]/g;
            function M(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function U(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189),
                            o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else
                        o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null,
                    n < 128) {
                        if ((t -= 1) < 0)
                            break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }
            function z(e) {
                return r.toByteArray(function(e) {
                    if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(L, "")).length < 2)
                        return "";
                    for (; e.length % 4 != 0; )
                        e += "=";
                    return e
                }(e))
            }
            function $(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
                    t[o + n] = e[o];
                return o
            }
        }
        ).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/node-libs-browser/node_modules/isarray/index.js": function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "./node_modules/uuid-time/index.js": function(e, t) {
        for (var n = [], r = {}, o = 0; o < 256; o++)
            n[o] = (o + 256).toString(16).substr(1),
            r[n[o]] = o;
        t.v1 = function(e, t) {
            if ("string" == typeof e) {
                if (t)
                    throw new Error("Offset in string v1 uuid not valid.");
                e = function(e, t, n) {
                    var o = t && n || 0
                      , i = 0;
                    for (t = t || [],
                    e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                        i < 16 && (t[o + i++] = r[e])
                    }
                    )); i < 16; )
                        t[o + i++] = 0;
                    return t
                }(e)
            }
            var n = 0
              , o = e && t || 0
              , i = e || [];
            if (16 != (16 & i[o + 6]))
                throw new Error("uuid version 1 expected");
            var s = 0;
            s |= (255 & i[o++]) << 24,
            s |= (255 & i[o++]) << 16,
            s |= (255 & i[o++]) << 8,
            s |= 255 & i[o++];
            var a = 0;
            return a |= (255 & i[o++]) << 8,
            a |= 255 & i[o++],
            a |= (15 & i[o++]) << 24,
            n = 1 * (2 * (s >>> 1) + (2147483647 & s) % 2) / 1e4,
            n += 1 * (2 * ((a |= (255 & i[o++]) << 16) >>> 1) + (2147483647 & a) % 2) * 4294967296 / 1e4,
            n -= 122192928e5
        }
    },
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    "./plugins/plugin.markdown.js": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("./includes/markdown.js");
        /*!
 * Markdown Plugin
 */
        Genesys("registerPlugin", "Markdown", e => {
            e.registerCommand("configure", e => {
                const {enabled: t} = e.data || {};
                "boolean" == typeof t ? (Object(r.configureMarkdown)(e.data),
                e.resolve()) : e.reject("A boolean `enabled` is required")
            }
            ),
            e.registerCommand("parse", e => {
                const {text: t} = e.data || "";
                if (t && "" !== t) {
                    const t = Object(r.parseMarkdown)(e.data);
                    return t ? e.resolve(t) : e.reject()
                }
                return e.reject("A string `text` is required to parse the markdown content")
            }
            ),
            e.registerCommand("getMarkdown", e => {
                const {text: t} = e.data || "";
                if (t && "" !== t) {
                    const t = Object(r.getMarkdown)(e.data);
                    return "object" == typeof t && t ? e.resolve(t) : e.reject()
                }
                return e.reject("A string `text` is required to get the markdown content")
            }
            ),
            e.registerCommand("extend", e => {
                const {extensions: t} = e.data || [];
                t && t.length ? (Object(r.extendMarkdown)(e.data),
                e.resolve()) : e.reject("An array `extensions` containing markdown extension is required")
            }
            ),
            e.ready()
        }
        )
    },
    "./src/genesys.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n("./includes/cxbus.min.js"),
        n("./includes/crossdomainstorage.js"),
        n("./includes/plugin.cookies.js");
        var r = n("./includes/util.js");
        /*!
 * Local storage plugin
 * Provides utilities that manages both first party and cross domain local storage.
 */
        Genesys("registerPlugin", "LocalStorage", e => {
            let t = ""
              , n = !1
              , o = !1;
            const i = Object(r.f)()
              , {deploymentId: s, preview: a} = Genesys.c || {}
              , u = ["gcmcopn", "gcmcsessionActive", "gcmksid", "actsc", "actec", "actmr", "actmu", "actms", "actts", "actvc", "gcatkn", "gcartkn"];
            function c(t) {
                const n = `_${r.b.includes(t) ? s + ":" : ""}${t}`;
                return Object(r.m)(t, s, "_", e),
                n
            }
            function l(r) {
                return new Promise( (o, i) => {
                    const s = c(r);
                    if (n) {
                        const n = e.data("Cookies.domain");
                        t.retrieve({
                            key: s,
                            crossDomainOrigin: n
                        }).then(e => {
                            o(e)
                        }
                        , () => {
                            o()
                        }
                        )
                    } else
                        window.localStorage ? function(t, n, r) {
                            let o = {};
                            if (t && "string" == typeof t) {
                                try {
                                    o = JSON.parse(t)
                                } catch (t) {
                                    e.log("Error parsing local storage data", t)
                                }
                                const {value: i, ttl: s} = o;
                                s && Date.now() > s ? d(n).then( () => {
                                    e.publish("expired", {
                                        name: n
                                    }),
                                    r()
                                }
                                ) : r(i)
                            } else
                                r()
                        }(localStorage.getItem(s), r, o) : i("Your browser does not support localStorage")
                }
                )
            }
            function f(r, o, i) {
                let {expireInSecs: s} = i;
                return new Promise( (i, a) => {
                    let u = null;
                    const l = e.data("Cookies.domain")
                      , f = e.data("ServiceDiscovery.uris.staticAssets") || location.origin
                      , d = c(r);
                    s && (u = Date.now() + 1e3 * s),
                    n ? t.store({
                        accessors: [f, l],
                        key: d,
                        value: o,
                        ttl: 1e3 * s
                    }).then(e => {
                        i(e)
                    }
                    ) : window.localStorage ? (localStorage.setItem(d, JSON.stringify({
                        value: o,
                        ttl: u
                    })),
                    i()) : a("Your browser does not support localStorage")
                }
                )
            }
            function d(r) {
                return new Promise( (o, i) => {
                    const s = c(r);
                    if (n) {
                        const n = e.data("Cookies.domain");
                        t.remove({
                            key: s,
                            crossDomainOrigin: n
                        }).then(e => {
                            o(e)
                        }
                        , () => {
                            o()
                        }
                        )
                    } else
                        window.localStorage ? (localStorage.removeItem(s),
                        o()) : i("Your browser does not support localStorage")
                }
                )
            }
            function p(e) {
                return new Promise(n => {
                    t = window.setupStorageClient({
                        targetUrl: e + "/genesys-bootstrap/hub.html"
                    }),
                    t.init().then( () => {
                        n()
                    }
                    , () => {}
                    )
                }
                )
            }
            e.registerCommand("get", e => {
                const {name: t, names: n} = e.data;
                if (e && e.commander && -1 === r.a.indexOf(e.commander))
                    return e.reject(e.commander + " plugin does not have permission to access LocalStorage plugin");
                if (!t && !n)
                    return e.reject(new Error("invalid parameters"));
                if (!o)
                    return e.reject("Please wait until LocalStorage plugin is initialized.");
                if (n && Array.isArray(n)) {
                    const t = {};
                    n.forEach( (r, o) => {
                        l(r).then(i => {
                            if (t[r] = decodeURIComponent(i),
                            o === n.length - 1)
                                return e.resolve(t)
                        }
                        )
                    }
                    )
                } else
                    l(t).then(n => n ? e.resolve(decodeURIComponent(n)) : e.resolve(t + " not found")).catch( () => e.resolve(t + " not found"))
            }
            ),
            e.registerCommand("set", t => {
                const {name: n, value: i, expireInSecs: s} = t.data;
                if (t && t.commander && -1 === r.a.indexOf(t.commander))
                    return t.reject(t.commander + " plugin does not have permission to access LocalStorage plugin");
                if (n && i || t.reject(new Error("invalid parameters")),
                !o)
                    return t.reject("Please wait until LocalStorage plugin is initialized.");
                const a = encodeURIComponent(i);
                let u = "";
                l(n).then(r => {
                    r ? (u = r,
                    f(n, a, {
                        expireInSecs: s
                    }).then( () => {
                        let r = "";
                        l(n).then(o => (r = o,
                        r !== u && e.publish("localStorageChanged", {
                            name: n,
                            oldValue: u,
                            newValue: r
                        }),
                        t.resolve(r))).catch( () => {}
                        )
                    }
                    ).catch( () => {
                        t.reject("could not set localstorage " + n)
                    }
                    )) : f(n, a, {
                        expireInSecs: s
                    }).then( () => (e.publish("localStorageSet", {
                        name: n,
                        encodedValue: a
                    }),
                    t.resolve(a)))
                }
                )
            }
            ),
            e.registerCommand("remove", t => {
                const {name: n} = t.data;
                return t && t.commander && -1 === r.a.indexOf(t.commander) ? t.reject(t.commander + " plugin doesn't have permission to access LocalStorage plugin") : n ? o ? void l(n).then(r => {
                    if (!r)
                        return t.resolve();
                    {
                        const o = r;
                        d(n).then( () => {
                            e.publish("localStorageChanged", {
                                name: n,
                                oldValue: o,
                                newValue: null
                            }),
                            e.publish("localStorageRemoved", {
                                name: n
                            }),
                            t.resolve()
                        }
                        ).catch( () => {
                            t.reject(`could not remove ${n} from the localstorage`)
                        }
                        )
                    }
                }
                ) : t.reject("Please wait until LocalStorage plugin is initialized.") : t.reject("invalid options")
            }
            ),
            e.registerCommand("configure", e => {
                const {deploymentConfig: t} = e.data || {}
                  , {messenger: r} = t || {}
                  , {sessionPersistenceType: i} = r || {};
                "string" == typeof i && "AcrossSubdomains" === i && (n = !0),
                o = !0,
                e.resolve()
            }
            ),
            e.subscribe("ServiceDiscovery.ready", () => {
                const c = e.data("ServiceDiscovery.uris.staticAssets") || location.origin;
                a ? (o = !0,
                e.ready()) : e.subscribe("GenesysJS.configurationReceived", a => {
                    const {deploymentConfig: l} = a.data || {}
                      , {messenger: f} = l || {}
                      , {sessionPersistenceType: d} = f || {}
                      , h = Object(r.q)(c);
                    "string" == typeof d && "AcrossSubdomains" === d && (n = !0),
                    o = !0,
                    h || function(r) {
                        n ? u.forEach(e => {
                            const t = `_${s}:${e}`;
                            localStorage.removeItem(t)
                        }
                        ) : p(r).then( () => {
                            const n = e.data("Cookies.domain");
                            u.forEach(e => {
                                const r = `_${s}:${e}`;
                                t.remove({
                                    key: r,
                                    crossDomainOrigin: n
                                }).then( () => {}
                                , () => {}
                                )
                            }
                            )
                        }
                        )
                    }(c),
                    n ? p(c).then( () => {
                        "LocalStorage" === i && e.ready()
                    }
                    ) : "LocalStorage" === i && e.ready()
                }
                )
            }
            )
        }
        );
        var o, i = n("./node_modules/axios/lib/axios.js");
        /*!
 * Auth Plugin
 * @version: 0.1.0
 * @license: Genesys Telecom Labs
 */
        Genesys("registerPlugin", "Auth", e => {
            const t = Object(r.f)()
              , n = "Messenger is cleared. Please reload the page to reinitialize.";
            let o = ""
              , s = ""
              , a = !1
              , u = !1
              , c = !1
              , l = !1
              , f = !1
              , d = {};
            const p = e.data;
            function h(n) {
                n && (p("jwt", n),
                e.command(t + ".set", {
                    name: "gcatkn",
                    value: n
                }))
            }
            function m(n) {
                const {auth: r} = d || n || {}
                  , {allowSessionUpgrade: o} = r || {};
                o && (p("signingIn", !1),
                e.command(t + ".remove", {
                    name: s + ":signingIn"
                }))
            }
            function g() {
                p("jwt", void 0),
                e.command(t + ".remove", {
                    name: "gcatkn"
                }),
                p("refreshToken", void 0),
                e.command(t + ".remove", {
                    name: "gcartkn"
                })
            }
            function y(t, n) {
                const {status: r, data: o} = t || {};
                if (r)
                    switch (r) {
                    case 401:
                    case 403:
                        p("refreshToken") ? e.command("refreshToken").then(t => {
                            const {jwt: r} = t || {};
                            r ? e.command("logout").then(e => {
                                n.resolve(e)
                            }
                            ).catch(e => {
                                v(e),
                                n.reject(e)
                            }
                            ) : (v(t),
                            n.reject(t))
                        }
                        , e => {
                            v(e),
                            n.reject(e)
                        }
                        ).catch(e => {
                            v(e),
                            n.reject(e)
                        }
                        ) : (v(o),
                        n.reject(o));
                        break;
                    default:
                        v(o),
                        n.reject(o)
                    }
                else
                    v(o),
                    n.reject(o)
            }
            function b(t, n) {
                const {auth: r} = d || {}
                  , {allowSessionUpgrade: o} = r || {}
                  , {status: i, statusText: s, data: u} = t || {}
                  , {keepIdentifiers: c} = n.data || {};
                a = !1,
                l = !1,
                p("authenticated", !1),
                g(),
                e.command("MessagingService.logout"),
                o || e.command("Launcher.hide"),
                c || e.command("Identifiers.purgeAll"),
                e.publish("loggedOut", {
                    status: i,
                    statusText: s,
                    data: u
                }),
                e.publish("signedOut", {
                    status: i,
                    statusText: s,
                    data: u
                })
            }
            function v(t) {
                const {status: n, statusText: r, data: o} = t || {};
                a = !1,
                l = !1,
                p("authenticated", !1),
                g(),
                e.command("MessagingService.logout"),
                e.command("Launcher.hide"),
                e.publish("logoutError", {
                    status: n,
                    statusText: r,
                    data: o
                })
            }
            function D(t) {
                const {authCode: n} = t || {}
                  , r = {};
                return new Promise( (t, o) => {
                    n ? c || (c = !0,
                    r.authCode = n,
                    e.republish("signedIn", r),
                    l = !0,
                    e.command("GenesysJS.init").then(e => {
                        const {jwt: n} = e || {};
                        c = !1,
                        n ? (r.jwt = e.jwt || "",
                        m(),
                        t(r)) : (m(),
                        o("Unable to fetch authentication token"))
                    }
                    , () => {
                        c = !1
                    }
                    )) : (m(),
                    o("Auth code unavailable, signIn failed"))
                }
                )
            }
            function w(t, n) {
                const {auth: r} = t || {}
                  , {allowSessionUpgrade: o} = r || {}
                  , {authCode: i} = n || {}
                  , s = p("authenticated");
                s || !o && !i ? !l && s && i && e.republish("signedIn", n) : D(n)
            }
            function E() {
                e.command(t + ".get", {
                    names: ["gcatkn", "gcartkn"]
                }).then(t => {
                    t.gcatkn && "undefined" !== t.gcatkn && (p("jwt", t.gcatkn),
                    p("authenticated", !0)),
                    t.gcartkn && "undefined" !== t.gcartkn && p("refreshToken", t.gcartkn),
                    p("jwt") && p("refreshToken") && e.republish("authenticated", {
                        jwt: p("jwt"),
                        refreshToken: p("refreshToken")
                    })
                }
                )
            }
            p("authId", void 0),
            p("jwt", void 0),
            p("refreshToken", void 0),
            p("authenticated", !1),
            p("authenticating", !1),
            p("signingIn", !1),
            p("journeyContext", void 0),
            e.command("Identifiers.getJourneyContext").then(e => {
                const {customer: t, customerSession: n} = e;
                if (t && Object.keys(t).length && n && Object.keys(n).length) {
                    const t = p("journeyContext");
                    p("journeyContext", Object(r.l)(!0, t, e))
                }
            }
            ),
            e.subscribe("LocalStorage.ready", () => {
                E()
            }
            ),
            e.registerCommand("signIn", r => {
                if (f)
                    r.reject(n);
                else {
                    const {auth: n} = d || {}
                      , {allowSessionUpgrade: o} = n || {};
                    u || r.reject("AuthProvider.signIn command must be defined"),
                    p("signingIn") || (o ? (!function() {
                        const {auth: n} = d || {}
                          , {allowSessionUpgrade: r} = n || {};
                        r && (p("signingIn", !0),
                        e.publish("signingIn"),
                        e.command(t + ".set", {
                            name: s + ":signingIn",
                            value: !0
                        }))
                    }(),
                    e.command("AuthProvider.signIn").then(e => {
                        D(e).then(e => {
                            r.resolve(e)
                        }
                        , e => {
                            r.reject(e)
                        }
                        )
                    }
                    , e => {
                        r.reject(e)
                    }
                    )) : r.reject("upgrade to authenticated session must be enabled."))
                }
            }
            ),
            e.registerCommand("getTokens", r => {
                if (f)
                    r.reject(n);
                else {
                    const {deploymentConfig: n, snippetConfig: a} = r.data || {}
                      , {apiEndpoint: u} = n || {}
                      , {deploymentId: c} = a || {};
                    u && (o = u),
                    c && (s = c),
                    "object" == typeof n && (d = n),
                    e.command("AuthProvider.getAuthCode", r.data).then(a => {
                        const {authCode: u, redirectUri: c, nonce: l, maxAge: f, codeVerifier: d, iss: y} = a || {};
                        if (m(n),
                        u && c) {
                            const n = {
                                code: u,
                                redirectUri: c
                            };
                            d && (n.codeVerifier = d),
                            l && (n.nonce = l),
                            f && (n.maxAge = f),
                            y && (n.iss = y),
                            p("authId", u),
                            e.publish("authenticating", {
                                authCode: u,
                                redirectUri: c
                            }),
                            o && s ? Object(i.a)({
                                url: o + "/api/v2/webdeployments/token/oauthcodegrantjwtexchange",
                                method: "post",
                                responseType: "json",
                                data: {
                                    deploymentId: s,
                                    oauth: n,
                                    journeyContext: p("journeyContext") || {}
                                }
                            }).then(n => {
                                const {jwt: o, refreshToken: i} = n && n.data || {};
                                o ? (p("authenticated", !0),
                                h(o),
                                function(n) {
                                    n && (p("refreshToken", n),
                                    e.command(t + ".set", {
                                        name: "gcartkn",
                                        value: n
                                    }))
                                }(i),
                                e.republish("authenticated", {
                                    jwt: o,
                                    refreshToken: i
                                }),
                                r.resolve({
                                    jwt: o,
                                    refreshToken: i
                                })) : (p("authenticated", !1),
                                e.publish("tokenError", JSON.parse({
                                    response: n
                                })),
                                r.reject("Invalid or no token received"))
                            }
                            , t => {
                                const {data: n} = t.response || {};
                                p("authenticated", !1),
                                e.publish("error", n || {});
                                const {status: o} = t && t.response || {};
                                if (o)
                                    switch (o) {
                                    case 401:
                                    case 403:
                                        g(),
                                        e.command("AuthProvider.reAuthenticate").then(e => {
                                            r.resolve(e)
                                        }
                                        , () => {
                                            r.reject("Unable to fetch authentication token")
                                        }
                                        );
                                        break;
                                    case 504:
                                        e.command("getTokens").then(e => {
                                            r.resolve(e)
                                        }
                                        );
                                        break;
                                    default:
                                        r.reject("Unable to fetch authentication token")
                                    }
                                else
                                    r.reject("Unable to fetch authentication token")
                            }
                            ) : r.reject("No configuration available")
                        } else
                            e.publish("authError", a),
                            r.resolve()
                    }
                    , t => {
                        const {data: n} = t.response || {};
                        e.publish("authProviderError", n || {}),
                        r.reject("Unable to get Authorization code")
                    }
                    )
                }
            }
            ),
            e.registerCommand("logout", r => {
                if (f)
                    r.reject(n);
                else {
                    const {forceClearCache: n} = r.data || {}
                      , u = p("GenesysJS.deploymentConfig") || {}
                      , {messenger: c} = u || {}
                      , {enabled: l} = c || {};
                    let f = "_gcmcopn";
                    a = !0,
                    m(),
                    p("authenticated") ? (s && (f = s + ":gcmcopn"),
                    l && e.command(t + ".get", {
                        name: f
                    }).then(t => {
                        if (t) {
                            const [n] = t.split(":");
                            n && "string" == typeof n && "true" === n && e.command("Messenger.close")
                        }
                    }
                    ),
                    n && (p("authenticated", !1),
                    g()),
                    e.command("Identifiers.getSessionId").then(e => Object(i.a)({
                        url: o + "/api/v2/webdeployments/token/revoke",
                        method: "delete",
                        headers: {
                            Authorization: "Bearer " + p("jwt"),
                            "X-Journey-Session-Id": e,
                            "X-Journey-Session-Type": "web"
                        }
                    }).then(e => {
                        const {status: t} = e || {};
                        204 === t ? (b(e, r),
                        r.resolve(JSON.parse(JSON.stringify({
                            status: e.status || "",
                            statusText: e.statusText || "",
                            data: e.data || ""
                        })))) : y(e, r)
                    }
                    , e => {
                        y(e.response, r)
                    }
                    )).catch(e => {
                        y(e.response, r)
                    }
                    )) : r.reject("user is not authenticated")
                }
            }
            ),
            e.registerCommand("refreshToken", t => {
                f ? t.reject(n) : p("refreshToken") ? Object(i.a)({
                    url: o + "/api/v2/webdeployments/token/refresh",
                    method: "post",
                    responseType: "json",
                    data: {
                        refreshToken: p("refreshToken")
                    }
                }).then(n => {
                    const {jwt: r} = n && n.data || {};
                    r ? (p("authenticated", !0),
                    h(r),
                    e.publish("authenticated", {
                        jwt: r
                    }),
                    t.resolve(n.data)) : (p("authenticated", !1),
                    e.publish("tokenError", n),
                    t.reject("Invalid or no token received"))
                }
                ).catch(n => {
                    const {data: r} = n.response || {};
                    p("authenticated", !1),
                    e.publish("error", r || {});
                    const {status: o} = n && n.response || {};
                    if (a)
                        a = !1,
                        t.reject("Unable to fetch authentication token for logout");
                    else if (o)
                        switch (o) {
                        case 400:
                        case 401:
                        case 403:
                            g(),
                            e.command("AuthProvider.reAuthenticate").then( () => {
                                e.command("getTokens").then(e => {
                                    t.resolve(e)
                                }
                                )
                            }
                            , () => {
                                t.reject("Unable to fetch authentication token")
                            }
                            );
                            break;
                        case 504:
                            e.command("refreshToken").then(e => {
                                t.resolve(e)
                            }
                            );
                            break;
                        default:
                            t.reject("Unable to fetch authentication token")
                        }
                    else
                        t.reject("Unable to fetch authentication token")
                }
                ) : (g(),
                e.command("getTokens", {
                    forceUpdate: !0
                }).then(e => {
                    t.resolve(e)
                }
                ).catch( () => {
                    p("authenticated", !1),
                    t.reject("Unable to get tokens")
                }
                ))
            }
            ),
            e.registerCommand("configure", t => {
                const {deploymentConfig: r, snippetConfig: i} = t.data || {}
                  , {apiEndpoint: a} = r || {}
                  , {deploymentId: u} = i || {};
                f ? t.reject(n) : ("object" == typeof r && (d = r),
                a && u ? (o = a,
                s = u,
                e.republish("configured"),
                t.resolve()) : t.reject())
            }
            ),
            e.registerCommand("reAuthenticate", t => {
                f ? t.reject(n) : (g(),
                e.command("AuthProvider.reAuthenticate").then( () => {
                    e.subscribe("ready", () => {
                        e.command("getTokens").then(e => {
                            t.resolve(e)
                        }
                        )
                    }
                    )
                }
                ))
            }
            ),
            e.registerCommand("clear", t => {
                t && t.commander && "Messenger" !== t.commander && t.reject(t.commander + " plugin does not have permission to access clear Auth plugin command"),
                f = !0,
                e.publish("cleared"),
                t.resolve()
            }
            ),
            e.registerCommand("getSettings", t => {
                if (f)
                    t.reject(n);
                else {
                    const n = e.data("AuthProvider.settings");
                    t.resolve(n)
                }
            }
            ),
            e.subscribe("MessagingService.steppedUpConversation", () => {
                E()
            }
            ),
            e.subscribe("MessagingService.authenticated", () => {
                p("authenticated") || E()
            }
            ),
            e.subscribe("data.authenticated", () => {
                e.publish("changed", {
                    authenticated: p("authenticated"),
                    jwt: p("jwt"),
                    refreshToken: p("refreshToken")
                })
            }
            ),
            e.subscribe("Journey.qualifiedWebMessagingOffer", e => {
                const {journeyContext: t} = e.data
                  , n = p("journeyContext");
                f || t && Object.keys(t).length && p("journeyContext", Object(r.l)(n, {
                    ...t
                }, {
                    triggeringAction: t.triggeringAction
                }))
            }
            ),
            e.subscribe("AuthProvider.signedIn", t => {
                d && Object.keys(d).length ? w(d, t.data) : e.subscribe("Auth.configured", () => {
                    w(d, t.data)
                }
                )
            }
            ),
            e.subscribe("AuthProvider.signInFailed", t => {
                e.publish("signInFailed", t),
                m()
            }
            ),
            e.subscribe("Broadcast.messageReceived", e => {
                const {message: t} = e.data || {}
                  , n = p("authenticated");
                t && "loggedOut" === t && n && !a && b({}, {
                    data: {
                        keepIdentifiers: !0
                    }
                })
            }
            ),
            e.subscribe("AuthProvider.ready", t => {
                (async function() {
                    return await Genesys("lookup", "AuthProvider.signIn")
                }
                )().then(t => {
                    t && (u = !0,
                    e.republish("signInAvailable")),
                    e.ready()
                }
                )
            }
            )
        }
        );
        var s = new Uint8Array(16);
        function a() {
            if (!o && !(o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return o(s)
        }
        var u = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var c = function(e) {
            return "string" == typeof e && u.test(e)
        }, l = [], f = 0; f < 256; ++f)
            l.push((f + 256).toString(16).substr(1));
        var d = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase();
            if (!c(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        };
        var p, h, m = function(e, t, n) {
            var r = (e = e || {}).random || (e.rng || a)();
            if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            t) {
                n = n || 0;
                for (var o = 0; o < 16; ++o)
                    t[n + o] = r[o];
                return t
            }
            return d(r)
        }, g = 0, y = 0;
        var b = function(e, t, n) {
            var r = t && n || 0
              , o = t || new Array(16)
              , i = (e = e || {}).node || p
              , s = void 0 !== e.clockseq ? e.clockseq : h;
            if (null == i || null == s) {
                var u = e.random || (e.rng || a)();
                null == i && (i = p = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]),
                null == s && (s = h = 16383 & (u[6] << 8 | u[7]))
            }
            var c = void 0 !== e.msecs ? e.msecs : Date.now()
              , l = void 0 !== e.nsecs ? e.nsecs : y + 1
              , f = c - g + (l - y) / 1e4;
            if (f < 0 && void 0 === e.clockseq && (s = s + 1 & 16383),
            (f < 0 || c > g) && void 0 === e.nsecs && (l = 0),
            l >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            g = c,
            y = l,
            h = s;
            var m = (1e4 * (268435455 & (c += 122192928e5)) + l) % 4294967296;
            o[r++] = m >>> 24 & 255,
            o[r++] = m >>> 16 & 255,
            o[r++] = m >>> 8 & 255,
            o[r++] = 255 & m;
            var b = c / 4294967296 * 1e4 & 268435455;
            o[r++] = b >>> 8 & 255,
            o[r++] = 255 & b,
            o[r++] = b >>> 24 & 15 | 16,
            o[r++] = b >>> 16 & 255,
            o[r++] = s >>> 8 | 128,
            o[r++] = 255 & s;
            for (var v = 0; v < 6; ++v)
                o[r + v] = i[v];
            return t || d(o)
        }
          , v = n("./node_modules/uuid-time/index.js")
          , D = n.n(v)
          , w = n("./node_modules/es6-promise-polyfill/promise.js");
        /*!
* Identifiers Plugin
* Manages stable identifiers related to the end-customer.
*
* Originally ported from: https://bitbucket.org/inindca/predictive-engagement-sdk/src/master/src/cookies.js
*/
        const E = /^\d+\.\d+\.\d+$/
          , x = {
            CUSTOMER_ID: {
                name: "actmu",
                description: "Stable identifier of an anonymous end-customer."
            },
            SESSION_ID: {
                name: "actms",
                description: "Identifier of the current web session."
            },
            SESSION_TS: {
                name: "actts",
                description: "First, previous and current session start timestamps. [first.previous.current]"
            },
            SESSION_COUNT: {
                name: "actvc",
                description: "The total number of sessions."
            }
        }
          , A = "Messenger is cleared. Please reload the page to reinitialize.";
        Genesys("registerPlugin", "Identifiers", e => {
            const t = e.data
              , n = Object(r.f)();
            let o = !1;
            function i(t, r) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return o.name = x[r].name,
                e.command(`${n}.${t}`, o)
            }
            function s(e) {
                return !Object(r.i)(e) && Object(r.k)(e)
            }
            function a(e) {
                try {
                    return Date.now() - 864e5 > D.a.v1(e)
                } catch (e) {
                    return !1
                }
            }
            function u(n) {
                const o = n || {}
                  , {forceNewCustomer: u=!1, forceNewSession: c=!1, touchDisabled: f=!1, createDisabled: d=!1} = o;
                let p, h, g = !1, y = !1;
                const v = t("Cookies.domain");
                return i("get", "CUSTOMER_ID").then(e => (d ? p = s(e) ? e : null : (y = u || !s(e),
                p = y ? m() : e),
                f && !y || !s(p) ? w.Promise.resolve() : i("set", "CUSTOMER_ID", {
                    value: p,
                    domain: v,
                    expireInSecs: t("customerIdExpiryTime")
                }))).then( () => i("get", "SESSION_ID")).then(e => s(p) ? (d ? h = s(e) && !a(e) ? e : null : (g = c || y || !s(e) || a(e),
                h = g ? b() : e),
                f && !g || !s(h) ? w.Promise.resolve() : i("set", "SESSION_ID", {
                    value: h,
                    domain: v,
                    expireInSecs: t("sessionIdExpiryTime")
                })) : (h = null,
                i("remove", "SESSION_ID"))).then( () => g ? w.Promise.all([i("get", "SESSION_TS"), i("get", "SESSION_COUNT")]).then(e => {
                    let[n,r] = e;
                    const o = Math.ceil(Date.now() / 1e3);
                    let s, a, u, c = parseInt(r, 10) || 0;
                    return y ? (s = o,
                    a = o,
                    u = o,
                    c = 1) : (({first: s, previous: a, current: u} = l(n)),
                    a = u,
                    u = o,
                    c++),
                    w.Promise.all([i("set", "SESSION_TS", {
                        value: `${s}.${a}.${u}`,
                        domain: t("Cookies.domain"),
                        expireInSecs: t("customerIdExpiryTime")
                    }), i("set", "SESSION_COUNT", {
                        value: c,
                        domain: t("Cookies.domain"),
                        expireInSecs: t("customerIdExpiryTime")
                    })])
                }
                ) : w.Promise.resolve()).then( () => {
                    const t = {
                        customerId: p,
                        sessionId: h
                    };
                    return g && e.publish("newSessionId", Object(r.c)(t)),
                    y && e.publish("newCustomerId", Object(r.c)(t)),
                    t
                }
                )
            }
            function c() {
                return w.Promise.all([i("remove", "CUSTOMER_ID"), i("remove", "SESSION_ID"), i("remove", "SESSION_TS"), i("remove", "SESSION_COUNT")])
            }
            function l(e) {
                const t = Math.ceil(Date.now() / 1e3);
                let[n,r,o] = [t, t, t];
                return e && E.test(e) && ([n,r,o] = e.split(".").map(e => parseInt(e, 10) || 0)),
                {
                    first: n,
                    previous: r,
                    current: o
                }
            }
            e.registerCommand("getSessionId", e => {
                if (!o)
                    return u().then(t => {
                        let {sessionId: n} = t;
                        return e.resolve(n)
                    }
                    ).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("getCustomerId", e => {
                if (!o)
                    return u().then(t => {
                        let {customerId: n} = t;
                        return e.resolve(n)
                    }
                    ).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("getAll", e => {
                if (!o)
                    return u(e.data).then(e.resolve).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("getSessionTimestamps", e => {
                if (!o)
                    return i("get", "SESSION_TS").then(e => l(e)).then(e.resolve).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("getSessionCount", e => {
                if (!o)
                    return i("get", "SESSION_COUNT").then(e.resolve).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("getJourneyContext", e => {
                if (!o)
                    return u(e.data).then(t => {
                        let {customerId: n, sessionId: r} = t;
                        return e.resolve({
                            customer: {
                                id: n,
                                idType: "cookie"
                            },
                            customerSession: {
                                id: r,
                                type: "web"
                            }
                        })
                    }
                    ).catch(e.reject);
                e.reject(A)
            }
            ),
            e.registerCommand("purgeAll", t => {
                if (!o)
                    return c().then( () => (e.publish("identifiersPurged"),
                    t.resolve())).catch(t.reject);
                t.reject(A)
            }
            ),
            e.registerCommand("clear", t => (t && t.commander && "Messenger" !== t.commander && t.reject(t.commander + " plugin does not have permission to access clear identifiers plugin command"),
            o = !0,
            c().then( () => (e.publish("cleared"),
            t.resolve())).catch(t.reject))),
            e.registerEvents(["newSessionId", "newCustomerId", "identifiersPurged", "cleared"]),
            e.subscribe(n + ".ready", () => {
                !function(e) {
                    const r = e || {};
                    t("customerIdExpiryTime", r.customerIdExpiryTime || 31536e3),
                    t("sessionIdExpiryTime", Math.min(t("customerIdExpiryTime"), r.sessionIdExpiryTime || 1800));
                    const o = "www." + t("Cookies.domain");
                    "Cookies" === n && (i("remove", "CUSTOMER_ID", {
                        domain: o,
                        recursive: !1
                    }),
                    i("remove", "SESSION_ID", {
                        domain: o,
                        recursive: !1
                    }))
                }(),
                e.ready()
            }
            ),
            e.subscribe("Auth.authenticated", () => {
                u()
            }
            )
        }
        );
        var C = n("./node_modules/dompurify/dist/purify.js")
          , k = n.n(C)
          , S = n("./includes/messengerHelper.html")
          , T = n.n(S);
        Genesys("registerPlugin", "MessengerHelper", e => {
            const t = e.data;
            let n = !1
              , o = !1;
            const i = document.dir ? document.dir.toLowerCase() : "ltr"
              , s = "Messenger is cleared. Please reload the page to reinitialize.";
            t("iFrameLoaded", !1);
            let a = T.a
              , u = ""
              , c = "";
            const l = {
                alignment: "auto",
                sideSpace: 20,
                bottomSpace: 12
            }
              , f = Object(r.g)()
              , d = {
                height: 0,
                width: 0
            }
              , p = {
                height: 0,
                width: 0
            }
              , h = {
                height: 0,
                width: 0
            }
              , m = {
                height: 0,
                width: 0
            };
            let g = "";
            function y(e, t, n) {
                "number" == typeof t && e.style.setProperty("width", t + "px", t > 72 ? "" : "important"),
                "number" == typeof n && e.style.setProperty("height", n + "px", "important"),
                "string" == typeof n && (e.style.height = n)
            }
            function b(e) {
                const {sideSpace: t, bottomSpace: n, alignment: r} = e || {};
                "undefined" !== t && "number" == typeof t && (l.sideSpace = t),
                "undefined" !== n && "number" == typeof n && (l.bottomSpace = n),
                r && "string" == typeof r && (l.alignment = r)
            }
            function v(e) {
                return {
                    bottom: window.getComputedStyle(e).getPropertyValue("bottom") || "",
                    top: window.getComputedStyle(e).getPropertyValue("top") || "",
                    height: window.getComputedStyle(e).getPropertyValue("height") || "",
                    width: window.getComputedStyle(e).getPropertyValue("width") || ""
                }
            }
            function D(e) {
                return e && e.toLowerCase().match(/javascript/) ? "" : e
            }
            e.subscribe("Messenger.cleared", () => {
                const t = document.getElementById("genesys-mxg-frame")
                  , n = document.getElementById("genesys-mxg-container-frame");
                t && y(t, 0, 0),
                n && y(n, 0, 0),
                o = !0,
                e.publish("cleared")
            }
            ),
            e.subscribe("ServiceDiscovery.ready", () => {
                const t = window._webMessVersion ? "/" + window._webMessVersion : ""
                  , n = `${e.data("ServiceDiscovery.uris.staticAssets")}/messenger${t}/messenger.html`
                  , r = `${e.data("ServiceDiscovery.uris.staticAssets")}/messenger${t}/messenger-renderer.html`;
                g = "" + e.data("ServiceDiscovery.uris.configs"),
                a = a.replace("{url}", n),
                a = a.replace("{messenger-renderer-url}", r)
            }
            ),
            e.registerCommand("open", n => {
                if (o)
                    n.reject(s);
                else if (t("iFrameLoaded"))
                    n.reject("Messenger iframe is already open");
                else {
                    const {messenger: o} = n.data || {}
                      , {preview: s} = o || {}
                      , u = e.data("GenesysJS.deploymentConfig") || {}
                      , c = e.data("GenesysJS.snippetConfig") || {}
                      , {position: f, messenger: d} = u || {}
                      , {launcherButton: p} = d || {}
                      , {visibility: h} = p || {};
                    f && b(f),
                    a = h && "on" === h.toLowerCase() ? a.replace("messengerFrameBottomSpace", "92px") : a.replace("messengerFrameBottomSpace", l.bottomSpace + "px"),
                    a = a.replace("sideSpace", l.sideSpace + "px"),
                    a = a.replace("bottomSpace", l.bottomSpace + "px"),
                    document.body.appendChild(Object(r.p)(a)),
                    s || e.subscribe("Messenger.ready", () => {
                        e.command("Messenger.configure", {
                            snippetConfig: c,
                            deploymentConfig: u,
                            deploymentId: c.deploymentId,
                            config: {
                                ...u.messenger,
                                documentDirection: i
                            }
                        })
                    }
                    ),
                    t("iFrameLoaded", !0),
                    n.resolve()
                }
            }
            ),
            e.registerCommand("update", t => {
                if (o)
                    t.reject(s);
                else {
                    const {messenger: n} = t.data || {}
                      , {preview: r} = n || {}
                      , o = e.data("GenesysJS.deploymentConfig") || {}
                      , s = e.data("GenesysJS.snippetConfig") || {};
                    r || e.command("Messenger.configure", {
                        snippetConfig: s,
                        deploymentConfig: o,
                        deploymentId: s.deploymentId,
                        config: {
                            ...o.messenger,
                            documentDirection: i
                        }
                    }),
                    t.resolve()
                }
            }
            ),
            e.registerCommand("injectFrame", e => {
                if (o)
                    e.reject(s);
                else if (e && r.a.includes(e.commander)) {
                    const {htmlUrl: t, styles: n, title: o, name: i, id: s} = e.data || {}
                      , a = new URL(t);
                    if (Object(r.q)(a.origin)) {
                        const t = document.createElement("iframe");
                        t.src = a.origin + a.pathname + a.search,
                        t.title = D(o || ""),
                        t.name = D(i || ""),
                        t.id = D(s),
                        t.allowFullscreen = !0,
                        t.classList.add("genesys-mxg-frame"),
                        n && Object.keys(n) && Object.keys(n).forEach(e => {
                            t.style[e] = n[e]
                        }
                        );
                        const r = k.a.sanitize(t.outerHTML, {
                            ALLOWED_TAGS: ["iframe"],
                            ADD_ATTR: ["src", "allowfullscreen", "title", "class", "name", "id"]
                        });
                        document.getElementById("genesys-messenger").insertAdjacentHTML("beforeend", r),
                        e.resolve()
                    } else
                        e.reject()
                } else
                    e.reject()
            }
            ),
            e.registerCommand("setPositions", t => {
                if (o)
                    t.reject(s);
                else {
                    const {showLauncher: n} = t.data || {}
                      , r = e.data("GenesysJS.deploymentConfig") || {}
                      , {position: o, messenger: i} = r || {}
                      , {launcherButton: s} = i || {}
                      , {visibility: a} = s || {}
                      , u = document.getElementById("genesys-mxg-container-frame");
                    o && b(o),
                    a && "ondemand" === a.toLowerCase() && (u.style.bottom = n ? "92px" : l.bottomSpace + "px")
                }
            }
            ),
            e.registerCommand("getDimension", e => {
                const t = document.getElementById("genesys-mxg-frame")
                  , n = document.getElementById("genesys-mxg-container-frame")
                  , r = {
                    messengerFrame: {},
                    launcherFrame: {}
                };
                n && n.style && (r.messengerFrame = v(n)),
                t && t.style && (r.launcherFrame = v(t)),
                e.resolve(r)
            }
            ),
            e.registerCommand("setDimension", e => {
                if (o)
                    e.reject(s);
                else {
                    const t = document.getElementById("genesys-mxg-frame")
                      , n = document.getElementById("genesys-mxg-container-frame")
                      , {engage: o, launcher: i, conversations: s, toaster: a} = e.data;
                    if (i) {
                        const {width: e, height: n, addClass: r, removeClass: o} = i || {};
                        d.height = n,
                        d.width = e,
                        t && r && r.map(e => e && t.classList.add(e)),
                        t && o && o.map(e => e && t.classList.remove(e)),
                        y(t, e, n)
                    }
                    if (o) {
                        const {width: e, height: t} = o;
                        let r = t
                          , i = e;
                        h.height = t,
                        h.width = e,
                        m.height && t && (r = m.height + t),
                        m.width && e && (i = m.width),
                        y(n, i, r)
                    }
                    if (s) {
                        const {iHeight: e, iWidth: t} = function(e, t) {
                            const {width: n, height: r, addClass: o, removeClass: i} = e;
                            let s = 0
                              , a = 0;
                            return "string" == typeof r && (s = `calc(${r})`),
                            "number" == typeof r && (s += r),
                            t && o && o.map(e => e && t.classList.add(e)),
                            t && i && i.map(e => e && t.classList.remove(e)),
                            n && (a = n),
                            {
                                iHeight: s,
                                iWidth: a
                            }
                        }(s, n);
                        p.height = e,
                        p.width = t,
                        y(n, t, e)
                    }
                    if (a) {
                        let {width: e, height: r} = a;
                        const {addClass: o, removeClass: i} = a;
                        m.height = r,
                        m.width = e,
                        p.height && (r = p.height),
                        p.width && (e = p.width),
                        y(n, e, r),
                        t && o && o.map(e => e && t.classList.add(e)),
                        t && i && i.map(e => e && t.classList.remove(e))
                    }
                    !function() {
                        const e = document.getElementById("genesys-messenger")
                          , t = document.getElementById("genesys-mxg-container-frame")
                          , n = document.getElementById("genesys-mxg-frame")
                          , o = t && t.classList.contains("genesys-mxg-conversation")
                          , i = t && t.classList.contains("genesys-mxg-homescreen");
                        Object(r.h)() && (o || i) ? (n && n.setAttribute("hidden", ""),
                        e.setAttribute("aria-modal", "true"),
                        e.setAttribute("role", "dialog")) : e && (n && n.hasAttribute("hidden") && n.removeAttribute("hidden"),
                        e.hasAttribute("aria-modal") && e.removeAttribute("aria-modal"),
                        e.hasAttribute("role") && !Object(r.h)() && e.removeAttribute("role"))
                    }(),
                    t || n ? e.resolve() : e.reject("No styles or className provided for Messenger iFrame")
                }
            }
            ),
            e.registerCommand("setDirection", e => {
                const t = document.getElementById("genesys-mxg-frame")
                  , n = document.getElementById("genesys-mxg-container-frame")
                  , {direction: r, position: o} = e.data || {};
                o && b(o);
                const {alignment: s} = l;
                function a() {
                    t.style.right = "unset",
                    t.style.left = l.sideSpace + "px",
                    t.style.bottom = l.bottomSpace + "px",
                    n.style.right = "unset",
                    n.style.left = l.sideSpace + "px",
                    n.style.bottom = (t.clientHeight ? t.clientHeight + 10 + l.bottomSpace : l.bottomSpace) + "px"
                }
                function u() {
                    t.style.left = "unset",
                    t.style.right = l.sideSpace + "px",
                    t.style.bottom = l.bottomSpace + "px",
                    n.style.left = "unset",
                    n.style.right = l.sideSpace + "px",
                    n.style.bottom = (t.clientHeight ? t.clientHeight + 10 + l.bottomSpace : l.bottomSpace) + "px"
                }
                function c(e) {
                    switch (e) {
                    case "rtl":
                        a();
                        break;
                    case "ltr":
                        u()
                    }
                }
                t && (o || i) ? "auto" === s ? i ? (c(i),
                e.resolve()) : (c(r),
                e.resolve()) : "left" === s ? (a(),
                e.resolve()) : "right" === s && (u(),
                e.resolve()) : e.reject("No alignment, styles or direction provided for Messenger iFrame")
            }
            ),
            e.registerCommand("openWebSocket", t => {
                if (o)
                    t.reject(s);
                else {
                    function i(n) {
                        u && (u.onMessage.addListener(t => {
                            e.publish("onWebSocketMessage", JSON.parse(t))
                        }
                        ),
                        u.onClose.addListener(t => {
                            e.publish("onWebSocketClose", {
                                code: t.code,
                                reason: t.reason,
                                returnValue: t.returnValue,
                                timeStamp: t.timeStamp,
                                type: t.type,
                                wasClean: t.wasClean
                            })
                        }
                        ),
                        u.onError.addListener(t => {
                            if ("object" == typeof t) {
                                const n = Object(r.d)(t);
                                e.publish("onWebSocketError", n)
                            } else
                                "string" == typeof t && e.publish("onWebSocketError", JSON.parse({
                                    error: t
                                }))
                        }
                        ));
                        const o = Object(r.n)(n);
                        t.resolve(o)
                    }
                    function a() {
                        const n = f ? 4500 : 0;
                        e.command("GenesysVendors.WebSocket").then(e => {
                            const {endPoint: r} = t.data || {};
                            u && u.removeAllListeners(),
                            u = new e(r,{
                                timeout: n,
                                connectionTimeout: n
                            }),
                            u.open().then(e => {
                                i(e)
                            }
                            ).catch(e => {
                                const {message: n} = e || {};
                                n && n.indexOf("1006") && f ? u.open().then(e => {
                                    i(e)
                                }
                                ).catch(e => {
                                    t.reject(e)
                                }
                                ) : t.reject(e)
                            }
                            )
                        }
                        ).catch(e => {
                            let {error: n} = e;
                            t.reject(n)
                        }
                        )
                    }
                    t && "MessagingService" === t.commander ? n ? a() : Genesys("loadPlugin", "GenesysVendors", {}, !1, () => {
                        n = !0,
                        a()
                    }
                    ) : t.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
                }
            }
            ),
            e.registerCommand("closeWebSocket", e => {
                if (e && "MessagingService" === e.commander) {
                    const {code: t, reason: n} = e.data || {};
                    u && u.close && (t ? u.close(t, n).catch( () => {}
                    ) : u.close().catch( () => {}
                    ))
                } else
                    e.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
            }
            ),
            e.registerCommand("sendOverSocket", e => {
                o ? e.reject(s) : e && "MessagingService" === e.commander ? (u.send(JSON.stringify(e.data || {})),
                e.resolve()) : e.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
            }
            ),
            e.registerCommand("getWebSocketData", e => {
                u ? e.resolve({
                    isClosed: u.isClosed,
                    isOpened: u.isOpened,
                    isClosing: u.isClosing
                }) : e.reject("No WebSocket connection available.")
            }
            ),
            e.registerCommand("makeRequest", t => {
                if (o)
                    t.reject(s);
                else {
                    const {url: o, method: s, responseType: a, headers: u, ...c} = t.data || {};
                    function i() {
                        e.command("GenesysVendors.Axios").then(e => {
                            e({
                                url: o,
                                method: s,
                                responseType: a || "json",
                                headers: u,
                                ...c
                            }).then(e => {
                                t.resolve({
                                    data: e.data,
                                    headers: e.headers,
                                    status: e.status,
                                    statusText: e.statusText
                                })
                            }
                            , e => {
                                const n = e && e.response ? e.response : e;
                                t.reject(JSON.parse(JSON.stringify(n || {})))
                            }
                            ).catch(e => {
                                t.reject(JSON.parse(JSON.stringify(e || {})))
                            }
                            )
                        }
                        ).catch(e => {
                            let {error: n} = e;
                            t.reject(JSON.parse(JSON.stringify(n || {})))
                        }
                        )
                    }
                    t && r.a.includes(t.commander) ? n ? i() : Genesys("loadPlugin", "GenesysVendors", {}, !1, () => {
                        n = !0,
                        i()
                    }
                    ) : t.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
                }
            }
            ),
            e.registerCommand("uploadRequest", t => {
                if (o)
                    t.reject(s);
                else {
                    const {url: o, headers: s, data: a} = t.data || {};
                    function i() {
                        e.command("GenesysVendors.Axios").then(n => {
                            const r = n.CancelToken;
                            c = r.source(),
                            n.put(o, a, {
                                headers: s,
                                onUploadProgress: t => {
                                    const {loaded: n, total: r} = t
                                      , o = Math.floor(100 * n / r);
                                    e.publish("uploadProgress", {
                                        percentage: o,
                                        loaded: n,
                                        total: r
                                    })
                                }
                                ,
                                cancelToken: c.token
                            }).then(e => {
                                t.resolve({
                                    data: e.data,
                                    headers: e.headers,
                                    status: e.status,
                                    statusText: e.statusText
                                })
                            }
                            , e => {
                                t.reject(JSON.parse(JSON.stringify(e || {})))
                            }
                            ).catch(e => {
                                t.reject(JSON.parse(JSON.stringify(e || {})))
                            }
                            )
                        }
                        )
                    }
                    t && r.a.includes(t.commander) ? n ? i() : Genesys("loadPlugin", "GenesysVendors", {}, !1, () => {
                        n = !0,
                        i()
                    }
                    ) : t.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
                }
            }
            ),
            e.registerCommand("cancelRequest", e => {
                o ? e.reject(s) : e && r.a.includes(e.commander) ? c && (c.cancel(),
                c = "",
                e.resolve()) : e.reject("Unauthorized Access! Only MessagingService plugin is allowed to access this command.")
            }
            ),
            e.registerCommand("getCustomLabels", t => {
                if (o)
                    t.reject(s);
                else {
                    let n = {};
                    const {language: r} = t.data
                      , o = e.data("GenesysJS.snippetConfig") || {}
                      , {deploymentId: i} = o;
                    i && r ? Genesys("loadJSON", `${g}/${i}/${r}.json`, e => {
                        try {
                            if (e) {
                                const r = JSON.parse(e);
                                r.messenger && (n = r.messenger,
                                t.resolve({
                                    customLangLabels: n
                                }))
                            }
                        } catch (e) {
                            t.reject(e)
                        }
                    }
                    , e => {
                        t.reject(e)
                    }
                    ) : t.reject("Deployment Id or language is not available")
                }
            }
            ),
            e.ready()
        }
        );
        var O = n("./includes/thirdPartyHelper.html")
          , _ = n.n(O);
        Genesys("registerPlugin", "ThirdPartyHelper", e => {
            const t = e.data
              , n = ["NewRelic"];
            t("iFrameLoaded", !1);
            let o = _.a;
            e.subscribe("ServiceDiscovery.ready", () => {
                const t = window._webMessVersion ? "/" + window._webMessVersion : ""
                  , n = `${e.data("ServiceDiscovery.uris.staticAssets")}/messenger${t}/thirdparty-plugins.html`;
                o = o.replace("{genesys-thirdparty-url}", n),
                e.ready()
            }
            ),
            e.registerCommand("open", i => {
                var s;
                i && r.a.includes(i.commander) ? t("iFrameLoaded") ? i.reject("ThirdPartyHelper iframe is already open") : (document.body.appendChild(Object(r.p)(o)),
                t("iFrameLoaded", !0),
                e.republish("iFrameLoaded"),
                (s = i.data) && n.forEach(t => {
                    e.subscribe(t + ".ready", () => {
                        e.command(t + ".configure", s)
                    }
                    )
                }
                ),
                i.resolve()) : i.reject("Unauthorized access! Only Genesys plugins are allowed to interact with this plugin.")
            }
            ),
            e.registerCommand("update", t => {
                const {messenger: n} = t.data || {}
                  , {preview: r} = n || {}
                  , o = e.data("GenesysJS.deploymentConfig") || {}
                  , i = e.data("GenesysJS.snippetConfig") || {};
                r || e.publish("update", {
                    snippetConfig: i,
                    deploymentConfig: o,
                    deploymentId: i.deploymentId,
                    config: o.messenger
                }),
                t.resolve()
            }
            )
        }
        ),
        Genesys("registerPlugin", "Database", e => {
            const t = e.data;
            let n = !1
              , o = !1;
            const i = "Messenger is cleared. Please reload the page to reinitialize.";
            function s(e) {
                return null !== e && "object" == typeof e && !Array.isArray(e) && Object.keys(e).length
            }
            function a(e, t) {
                let n = t
                  , r = e;
                n = n.replace(/\[(\w+)\]/g, ".$1"),
                n = n.replace(/^\./, "");
                const o = n.split(".");
                for (let e = 0, t = o.length; e < t; ++e) {
                    const t = o["" + e];
                    if (!(t && r && "object" == typeof r && t in r))
                        return null;
                    r = r["" + t]
                }
                return r
            }
            function u(e) {
                return new Promise( (t, r) => {
                    if (!n && e) {
                        let n = !1;
                        for (const t in e)
                            null !== e["" + t] && "object" == typeof e["" + t] ? (n = !1,
                            r("Nested object is not supported for custom attributes")) : n = !0;
                        n && t(n)
                    } else
                        t(!0)
                }
                )
            }
            t("database", {}),
            e.registerCommand("set", n => {
                if (o)
                    n.reject(i);
                else if (s(n.data)) {
                    const {messaging: o} = n.data || {}
                      , i = t("database");
                    if (s(o)) {
                        const {customAttributes: a} = o || {};
                        if (s(a))
                            u(a).then( () => {
                                const o = Object(r.l)(i, n.data);
                                t("database", o),
                                e.publish("updated", o),
                                n.resolve(o)
                            }
                            ).catch(e => {
                                n.reject(e)
                            }
                            );
                        else if ("object" != typeof a || Array.isArray(a))
                            n.reject("Custom attributes must be an object");
                        else {
                            const o = Object(r.l)(i, n.data);
                            t("database", o),
                            e.publish("updated", o),
                            n.resolve(o)
                        }
                    } else if ("object" != typeof o || Array.isArray(o))
                        n.reject("Messaging property must be an object");
                    else {
                        const o = Object(r.l)(i, n.data);
                        t("database", o),
                        e.publish("updated", o),
                        n.resolve(o)
                    }
                } else
                    n.reject("Invalid option")
            }
            ),
            e.registerCommand("update", n => {
                if (o)
                    n.reject(i);
                else if (s(n.data)) {
                    const {messaging: o} = n.data || {}
                      , i = t("database");
                    if (s(o)) {
                        const {customAttributes: a} = o || {};
                        if (s(a))
                            u(a).then( () => {
                                const o = Object(r.l)(!0, i, n.data);
                                t("database", o),
                                e.publish("updated", o),
                                n.resolve(o)
                            }
                            ).catch(e => {
                                n.reject(e)
                            }
                            );
                        else if ("object" != typeof a || Array.isArray(a))
                            n.reject("Custom attributes must be an object");
                        else {
                            const o = Object(r.l)(!0, i, n.data);
                            t("database", o),
                            e.publish("updated", o),
                            n.resolve(o)
                        }
                    } else if ("object" != typeof o || Array.isArray(o))
                        n.reject("Messaging property must be an object");
                    else {
                        const o = Object(r.l)(!0, i, n.data);
                        t("database", o),
                        e.publish("updated", o),
                        n.resolve(o)
                    }
                } else
                    n.reject("Invalid option")
            }
            ),
            e.registerCommand("get", e => {
                const n = t("database");
                if (o)
                    e.reject(i);
                else if (s(e.data)) {
                    const {name: t} = e.data || "";
                    if (t && "string" == typeof t) {
                        const r = t.split(".")
                          , o = r && r.reduce( (e, t) => e && Object.prototype.hasOwnProperty.call(e, t) ? e["" + t] : a(e, t), n);
                        null !== o ? e.resolve(o) : e.reject("Property name does not exists")
                    } else
                        e.reject("Invalid option")
                } else
                    e.resolve(n)
            }
            ),
            e.registerCommand("remove", n => {
                const r = t("database");
                if (o)
                    n.reject(i);
                else if (s(n.data)) {
                    const {name: o} = n.data || "";
                    if (o && "string" == typeof o) {
                        const i = o.split(".");
                        null !== (i && i.reduce( (e, t, n) => {
                            if (e && Object.prototype.hasOwnProperty.call(e, t))
                                return n === i.length - 1 ? (delete e["" + t],
                                r) : e["" + t];
                            if (t.match(/\[(\w+)\]/g)) {
                                let o = t;
                                o = o.replace(/\[(\w+)\]/g, ".$1"),
                                o = o.replace(/^\./, "");
                                const s = o.split(".");
                                return n === i.length - 1 ? Object.prototype.hasOwnProperty.call(e, s[0]) && Array.isArray(e["" + s[0]]) && s[1] < e["" + s[0]].length ? (e["" + s[0]].splice(s[1], 1),
                                r) : null : a(e, t)
                            }
                            return null
                        }
                        , r)) ? (t("database", r),
                        e.publish("removed", r),
                        n.resolve()) : n.reject("Property name does not exists")
                    } else
                        n.reject("Invalid option")
                } else
                    n.reject("Property name is mandatory")
            }
            ),
            e.registerCommand("clear", t => {
                t && t.commander && "Messenger" !== t.commander && t.reject(t.commander + " plugin does not have permission to access clear Database plugin command"),
                o = !0,
                e.publish("cleared"),
                t.resolve()
            }
            ),
            e.registerCommand("configure", e => {
                if (o)
                    e.reject(i);
                else {
                    const {enableNestedObject: t} = e.data;
                    "boolean" == typeof t && (n = t),
                    e.resolve()
                }
            }
            ),
            e.ready()
        }
        );
        n("./plugins/plugin.markdown.js"),
        n("./includes/plugin.support-center-helper.js");
        var F = /*!
* Domain Check
* Compares the a given domain name against a list of allowed domains from squonk.
*/
        function(e, t) {
            if (!e || !t || "" === t)
                return !1;
            const n = e.allowedDomains && Array.isArray(e.allowedDomains) ? e.allowedDomains : []
              , r = t.toLowerCase()
              , o = function(e) {
                const t = e.toLowerCase();
                return t === r || (r.length > t.length && r.slice(-("." + t).length) === "." + t || void 0)
            };
            return !0 === e.allowAllDomains || 0 !== n.length && (n.length > 0 && n.some(o))
        };
        /*!
 * Service Discovery
 * Resolves URIs and domains for the current env
 */
        const j = n("./node_modules/@genesys/service-discovery-web-internal/index.umd.js").getEnvironments({})
          , R = {
            staticAssets: {
                subdomain: "apps"
            },
            configs: {
                subdomain: "api-cdn",
                path: "/webdeployments/v1/deployments"
            },
            journeyPlugin: {
                subdomain: "apps",
                path: "/journey/messenger-plugins/journey.min.js"
            },
            supportCenterPlugin: {
                subdomain: "apps",
                path: "/support-center/support-center-plugins/main.min.js"
            },
            offersHelper: {
                subdomain: "apps",
                path: "/journey/messenger-plugins/offersHelper.min.js"
            },
            cobrowseService: {
                subdomain: "apps",
                path: "/cobrowse-next/sharer.min.js"
            },
            videoService: {
                subdomain: "apps",
                path: "/video-service/videoService.js"
            },
            vendorsPlugin: {
                subdomain: "apps",
                path: "/genesys-bootstrap/plugins/genesysvendors.min.js"
            },
            messagingTransport: {
                subdomain: "apps",
                path: "/messenger/genesyscloud-messaging-transport.mod.js"
            },
            messengerMain: {
                subdomain: "apps",
                path: "/messenger/main.min.js"
            },
            messengerEngage: {
                subdomain: "apps",
                path: "/messenger/engage.min.js"
            }
        };
        class I {
            constructor(e) {
                let t = e;
                t = t.toLowerCase(),
                "use1" === t ? t = "prod" : "fedramp-use2" === t ? t = "fedramp-use2-core" : ["dev", "test"].includes(t) || (t = t.includes("prod") || t.includes("fedramp-use2-core") ? t : "prod-" + t);
                const n = j.find(e => e.name === t).publicDomainName;
                if (!n)
                    throw new Error("invalid environment " + t);
                this.environment = t,
                this.domain = n
            }
            getUri(e) {
                const t = R[e];
                if (!t)
                    return;
                const {protocol: n="https:", subdomain: r, path: o} = t;
                return `${n}//${r}.${this.domain}${o || ""}`
            }
            getDomain(e) {
                const t = R[e];
                if (!t)
                    return;
                const {subdomain: n} = t;
                return `${n}.${this.domain}`
            }
            resolveAllServices() {
                const e = {};
                for (const t in R)
                    if (Object.prototype.hasOwnProperty.call(R, t)) {
                        const n = this.getUri(t)
                          , r = this.getDomain(t);
                        e[t] = {
                            uri: n,
                            domain: r
                        }
                    }
                return e
            }
        }
        var N, B, P, L;
        N = I,
        P = R,
        (B = "symbol" == typeof (L = function(e, t) {
            if ("object" != typeof e || !e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r)
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(B = "SERVICES", "string")) ? L : String(L))in N ? Object.defineProperty(N, B, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : N[B] = P;
        var M = I;
        var U = {
            register: function(e) {
                Genesys("registerPlugin", "ServiceDiscovery", t => {
                    !function(e, t) {
                        const n = t.data
                          , r = e.resolveAllServices();
                        for (const e in r)
                            Object.prototype.hasOwnProperty.call(r, e) && (n("domains." + e, r[e].domain),
                            n("uris." + e, r[e].uri))
                    }(e, t),
                    t.ready()
                }
                )
            }
        };
        let z = !1;
        var $ = function(e, t) {
            const n = t.data;
            if (z) {
                n("ThirdPartyHelper.iFrameLoaded") ? t.command("ThirdPartyHelper.update", e.deploymentConfig) : t.command("ThirdPartyHelper.open", e.deploymentConfig)
            } else
                z = !0,
                t.log("Loading ThirdPartyHelper plugin."),
                t.subscribe("ThirdPartyHelper.ready", () => {
                    t.command("ThirdPartyHelper.open", e)
                }
                )
        };
        let H = !1;
        var G = function(e, t) {
            const n = e.deploymentConfig.messenger || {}
              , r = t.data;
            if (!0 === n.enabled)
                if (H) {
                    r("MessengerHelper.iFrameLoaded") ? t.command("MessengerHelper.update", e.deploymentConfig) : t.command("MessengerHelper.open", e.deploymentConfig)
                } else
                    H = !0,
                    t.log("Messenger enabled. Loading MessengerHelper plugin."),
                    t.subscribe("MessengerHelper.ready", () => {
                        t.command("MessengerHelper.open", e.deploymentConfig)
                    }
                    )
        };
        let q = !1;
        var J = function(e, t) {
            !0 !== (e.deploymentConfig.journeyEvents || {}).enabled || q || (q = !0,
            t.log("JourneyEvents enabled. Loading Journey plugin."),
            Genesys("loadPlugin", "Journey", Object.assign({}, e, {
                apiEndpoint: e.deploymentConfig.apiEndpoint,
                deploymentId: e.snippetConfig.deploymentId
            })))
        };
        let V = !1;
        var Y = function(e, t) {
            !0 !== (e.deploymentConfig.supportCenter || {}).enabled || V || (V = !0,
            t.log("SupportCenter enabled. Start SupportCenterHelper configure."),
            t.subscribe("SupportCenterHelper.ready", () => {
                t.command("SupportCenterHelper.configure", e)
            }
            ))
        };
        let W = !1;
        let X = !1;
        var Z = function(e, t) {
            !0 === (e.deploymentConfig.cobrowse || {}).enabled && (X || (X = !0,
            t.log("Cobrowse enabled. Loading CobrowseService plugin."),
            Genesys("loadPlugin", "CobrowseService")))
        };
        let K = !1;
        var Q = function(e, t) {
            !0 === (e.deploymentConfig.video || {}).enabled && (K || (K = !0,
            t.log("Video enabled. Loading VideoService plugin."),
            Genesys("loadPlugin", "VideoService")))
        };
        let ee = !1;
        var te = function(e, t) {
            const n = e.deploymentConfig.auth || {};
            n && !0 === n.enabled && (ee || (ee = !0,
            t.log("Authentication enabled. Loading Auth plugin."),
            t.subscribe("Auth.ready", () => {
                t.command("Auth.configure", e)
            }
            )))
        };
        /*!
* %productTitle%
* @version: %updateVersion%
* @license: %copyright%
*/
        const ne = "Initializing GenesysJS requires configuration."
          , re = Genesys.c || {}
          , {environment: oe, deploymentId: ie, preview: se, debug: ae, debugConfig: ue, debugConfigURL: ce} = re
          , le = Object(r.f)();
        if (!(oe && ie || se))
            throw new Error("GenesysJS requires a deploymentId and environment to load.");
        let fe;
        const de = ["cobrowse", "supportCenter", "position", "messenger.launcherButton", "messenger.styles", "messenger.apps.conversations.markdown", "messenger.homeScreen", "messenger.apps.conversations.humanize"];
        try {
            fe = new M(oe)
        } catch (e) {
            throw new Error("GenesysJS could not initialise service discovery.",e)
        }
        Genesys("configure", {
            name: "GenesysJS",
            pluginspath: fe.getUri("staticAssets") + "/genesys-bootstrap/plugins/",
            pluginmap: {
                Journey: fe.getUri("journeyPlugin"),
                SupportCenter: fe.getUri("supportCenterPlugin"),
                OffersHelper: fe.getUri("offersHelper"),
                CobrowseService: fe.getUri("cobrowseService"),
                VideoService: fe.getUri("videoService"),
                GenesysVendors: fe.getUri("vendorsPlugin")
            },
            modulemap: {
                "genesyscloud-messaging-transport": fe.getUri("messagingTransport")
            },
            childDomain: fe.getUri("staticAssets"),
            debug: !!ae
        }),
        U.register(fe),
        Genesys("registerPlugin", "GenesysJS", e => {
            const t = e.data;
            let n = !1
              , o = !1;
            const i = "Messenger"
              , s = "Journey"
              , a = "Auth"
              , u = "SupportCenter"
              , c = "OffersHelper"
              , l = "CobrowseService"
              , f = "VideoService"
              , d = "ThirdPartyHelper";
            t("snippetConfig", re);
            const {subscribeNewRelicReady: p, newRelicError: h} = function e() {
                return {
                    bNewRelicReady: !1,
                    subscribeNewRelicReady: () => {
                        Genesys("subscribe", "NewRelic.ready", () => {
                            e.bNewRelicReady = !0
                        }
                        )
                    }
                    ,
                    newRelicError: t => {
                        if (e.bNewRelicReady && t && Object.keys(t).length) {
                            const {errorName: e, errorMessage: n, pluginName: r} = t;
                            Genesys("command", "NewRelic.error", {
                                name: e,
                                data: {
                                    errorName: e || "",
                                    errorDesc: n || "",
                                    pluginName: r || ""
                                }
                            })
                        }
                    }
                }
            }() || {};
            function m(t, n) {
                h({
                    errorName: "Error loading the plugin",
                    errorMessage: t,
                    pluginName: n
                }),
                e.log("Error loading the plugin", t)
            }
            function g(t) {
                o = !0;
                try {
                    J(t, e)
                } catch (e) {
                    m(e, s)
                }
            }
            function y(t) {
                n = !0;
                try {
                    $(t, e)
                } catch (e) {
                    m(e, d)
                }
                try {
                    G(t, e)
                } catch (e) {
                    m(e, i)
                }
                try {
                    Y(t, e)
                } catch (e) {
                    m(e, u)
                }
                try {
                    Z(t, e)
                } catch (e) {
                    m(e, l)
                }
                try {
                    Q(t, e)
                } catch (e) {
                    m(e, f)
                }
                try {
                    te(t, e)
                } catch (e) {
                    m(e, a)
                }
                try {
                    !function(e, t) {
                        W || (W = !0,
                        t.log("Loading OffersHelper plugin"),
                        Genesys("loadPlugin", "OffersHelper"))
                    }(0, e)
                } catch (e) {
                    m(e, c)
                }
            }
            function b(t) {
                e.subscribe("Auth.ready", () => {
                    e.command("Auth.getTokens", t).then(n => {
                        const {jwt: r} = n || {};
                        r ? y(t) : e.log("Authentication plugin is ready. Tokens are not available yet.")
                    }
                    , () => {
                        e.log("Authentication plugin is ready. Tokens are not available yet.")
                    }
                    ).catch( () => {}
                    )
                }
                )
            }
            if (p(),
            e.registerCommand("getConfig", n => {
                if ("GenesysJS" !== n.commander) {
                    return h({
                        errorName: "You are not allowed to call this command.",
                        errorMessage: "You are not allowed to call this command.",
                        pluginName: "GenesysJS"
                    }),
                    void n.reject("You are not allowed to call this command.")
                }
                if (!0 === ae) {
                    if ("object" == typeof ue)
                        return t("deploymentConfig", ue),
                        void n.resolve(ue);
                    if ("string" == typeof ce)
                        return void Genesys("loadJSON", ce, e => {
                            const r = JSON.parse(e);
                            t("deploymentConfig", r),
                            n.resolve(r)
                        }
                        )
                }
                Genesys("loadJSON", `${fe.getUri("configs")}/${ie}/domains.json`, o => {
                    try {
                        const i = JSON.parse(o);
                        t("domains", i),
                        e.publish("domainsReceived"),
                        F(i, document.location.hostname) ? Genesys("loadJSON", `${fe.getUri("configs")}/${ie}/config.json`, e => {
                            try {
                                const o = JSON.parse(e);
                                t("deploymentConfig", o),
                                Object(r.o)(o, de).then(e => {
                                    t("configuration", e)
                                }
                                ),
                                n.resolve(o)
                            } catch (e) {
                                throw h({
                                    errorName: "Malformed JSON received.",
                                    errorMessage: e,
                                    pluginName: "GenesysJS"
                                }),
                                n.reject("Malformed JSON received.", e),
                                new Error(e)
                            }
                        }
                        , e => {
                            h({
                                errorName: "Could not retrieve deployment config.",
                                errorMessage: e,
                                pluginName: "GenesysJS"
                            }),
                            n.reject("Could not retrieve deployment config.", e)
                        }
                        ) : e.publish("domainNotAllowed")
                    } catch (t) {
                        throw h({
                            errorName: "Malformed JSON received.",
                            errorMessage: t,
                            pluginName: "GenesysJS"
                        }),
                        n.reject("Malformed JSON received.", t),
                        e.publish("malformedJSON", t),
                        new Error(t)
                    }
                }
                )
            }
            ),
            e.registerCommand("init", r => {
                const i = {
                    deploymentConfig: t("deploymentConfig"),
                    snippetConfig: t("snippetConfig")
                }
                  , {auth: s} = i.deploymentConfig
                  , {enabled: a, allowSessionUpgrade: u} = s || {}
                  , c = a && !!u
                  , l = t("Auth.authenticated") || !1
                  , f = t("Auth.signingIn") || !1
                  , d = c && f;
                if (!o && i.deploymentConfig && g(i),
                n || a && !c)
                    if (a)
                        if (!l || d)
                            e.command("Auth.getTokens", i).then(t => {
                                const {jwt: n} = t || {};
                                n ? y(i) : e.log("Authentication plugin is ready. Tokens are not available yet."),
                                r.resolve(t)
                            }
                            , () => {
                                e.log("Authentication plugin is ready. Tokens are not available yet."),
                                r.resolve()
                            }
                            ).catch( () => {}
                            );
                        else {
                            h({
                                errorName: "User is already authenticated.",
                                errorMessage: "User is already authenticated.",
                                pluginName: "GenesysJS"
                            }),
                            r.reject("User is already authenticated.")
                        }
                    else {
                        h({
                            errorName: "GenesysJS products are already initialized.",
                            errorMessage: "GenesysJS products are already initialized.",
                            pluginName: "GenesysJS"
                        }),
                        r.reject("GenesysJS products are already initialized.")
                    }
                else if (i && i.deploymentConfig)
                    y(i),
                    r.resolve();
                else {
                    h({
                        errorName: ne,
                        errorMessage: ne,
                        pluginName: "GenesysJS"
                    }),
                    r.reject(ne)
                }
            }
            ),
            e.registerCommand("configuration", e => {
                const n = t("deploymentConfig");
                if (n && Object.keys(n).length) {
                    const t = Object(r.e)();
                    if (t && Object.keys(t).length)
                        e.resolve(t);
                    else {
                        h({
                            errorName: "Deployment config is not available",
                            errorMessage: "Deployment config is not available",
                            pluginName: "GenesysJS"
                        }),
                        e.reject("Deployment config is not available")
                    }
                } else {
                    h({
                        errorName: "Deployment config is not available",
                        errorMessage: "Deployment config is not available",
                        pluginName: "GenesysJS"
                    }),
                    e.reject("Deployment config is not available")
                }
            }
            ),
            se) {
                const t = {
                    deploymentConfig: {
                        messenger: {
                            enabled: !0,
                            preview: !0
                        }
                    }
                };
                G(t, e),
                $(t, e),
                e.ready(),
                Genesys("executeQueue")
            } else
                e.command("getConfig").then(t => {
                    e.log("Configuration Received", t);
                    const r = {
                        deploymentConfig: t,
                        snippetConfig: re
                    }
                      , {status: o, auth: i} = r.deploymentConfig
                      , {enabled: s, allowSessionUpgrade: a} = i || {};
                    if (e.republish("configurationReceived", r),
                    o && "Active" === o)
                        if (g(r),
                        s && !0 === s) {
                            let t = e.data("Auth.jwt");
                            t ? y(r) : a ? e.subscribe("LocalStorage.ready", () => {
                                setTimeout( () => {
                                    e.command(le + ".get", {
                                        name: ie + ":authenticating"
                                    }).then(t => {
                                        "true" === t ? b(r) : e.command(le + ".get", {
                                            name: ie + ":signingIn"
                                        }).then(t => {
                                            "true" === t ? b(r) : (y(r),
                                            e.log("Conversation Session can later be stepped up to authenticated session."))
                                        }
                                        )
                                    }
                                    )
                                }
                                , 200)
                            }
                            ) : e.subscribe("Auth.ready", () => {
                                e.subscribe("LocalStorage.ready", () => {
                                    setTimeout( () => {
                                        n || b(r)
                                    }
                                    , 200)
                                }
                                )
                            }
                            ),
                            e.subscribe("Auth.authenticated", () => {
                                n || (t = e.data("Auth.jwt"),
                                t && y(r))
                            }
                            )
                        } else
                            y(r);
                    e.ready(),
                    Genesys("executeQueue")
                }
                , () => {
                    e.ready(),
                    Genesys("executeQueue")
                }
                )
        }
        )
    }
});
