!function() {
    function r(r, n) {
        var t = new Error('Cannot find module "' + r + '"' + (n ? ' from "' + n + '"' : ""));
        return t.code = "MODULE_NOT_FOUND",
        t
    }
    function n(r) {
        this.id = this.filename = r,
        this.loaded = !1,
        this.exports = void 0
    }
    function t(r, n, t) {
        var i = t && t.globals;
        if (O[r] = n,
        i)
            for (var e = b || global, o = 0; o < i.length; o++) {
                var a = i[o]
                  , u = E[r] = d(r);
                e[a] = u.exports
            }
    }
    function i(r, n) {
        $[r] = n
    }
    function e(r, n) {
        j[r] = n
    }
    function o(r, n) {
        M[r] = n
    }
    function a(r, n, t) {
        I[r + "/" + n] = t
    }
    function u(r) {
        var n, t = 0, i = r.length;
        for (n = 0; n < i; n++) {
            var e = r[n];
            "." === e || (".." === e ? t-- : (r[t] = e,
            t++))
        }
        return 1 === t ? "/" : (t > 2 && 0 === r[t - 1].length && t--,
        r.length = t,
        r.join("/"))
    }
    function f(r, n) {
        var t = n.split("/");
        return u(("/" == r ? [""] : r.split("/")).concat(t))
    }
    function s(r) {
        var n, t = r.lastIndexOf(".");
        return -1 === t || -1 !== (n = r.lastIndexOf("/")) && n > t ? null : r.substring(0, t)
    }
    function c(r) {
        r = r.substring(1);
        var n = r.indexOf("/");
        "@" === r.charAt(1) && (n = r.indexOf("/", n + 1));
        var t = -1 === n ? r.length : n;
        return [r.substring(0, t), r.substring(t)]
    }
    function l(r, n) {
        "/" === r.charAt(r.length - 1) && (r = r.slice(0, -1));
        var t = M[r];
        if (t)
            return t;
        var i, e, o = c(n), a = o[0], u = r.indexOf("/");
        u < 0 ? (i = r,
        e = "") : ("@" === r.charAt(0) && (u = r.indexOf("/", u + 1)),
        i = r.substring(0, u),
        e = r.substring(u));
        var f = I[a + "/" + i];
        if (f) {
            var s = "/" + i + "$" + f;
            return e && (s += e),
            s
        }
    }
    function v(r, n) {
        var t;
        if ("." === r.charAt(0))
            t = f(n, r);
        else if ("/" === r.charAt(0))
            t = u(r.split("/"));
        else {
            for (var i = m.length, e = 0; e < i; e++) {
                var o = m[e] + r
                  , a = v(o, n);
                if (a)
                    return a
            }
            t = l(r, n)
        }
        if (t) {
            var c;
            void 0 !== (c = $[t]) && (c || (c = "index"),
            t = f(t, c));
            var d = j[t];
            d && (t = d);
            var h = O[t];
            if (void 0 === h) {
                var g;
                if (null === (g = s(t)) || void 0 === (h = O[g]))
                    return;
                t = g
            }
            return [t, h]
        }
    }
    function d(t, i) {
        if (!t)
            throw r("");
        var e = v(t, i);
        if (!e)
            throw r(t, i);
        var o = e[0]
          , a = y[o];
        if (void 0 !== a)
            return a;
        if (E.hasOwnProperty(o))
            return E[o];
        var u = e[1];
        return a = new n(o),
        y[o] = a,
        a.load(u),
        a
    }
    function h(r, n) {
        return d(r, n).exports
    }
    function g(r, n) {
        if (!(n && !1 === n.wait || _))
            return A.push([r, n]);
        h(r, "/")
    }
    function p() {
        _ = !0;
        for (var r; r = A.length; ) {
            var n = A;
            A = [];
            for (var t = 0; t < r; t++) {
                var i = n[t];
                g(i[0], i[1])
            }
            if (!_)
                break
        }
    }
    function x(r) {
        m.push(r)
    }
    var b;
    if ("undefined" != typeof window) {
        if (b = window,
        b.$_mod_webchat)
            return;
        b.global = b
    }
    var w, O = {}, m = [], _ = !1, A = [], y = {}, I = {}, M = {}, $ = {}, j = {}, D = {}, E = {};
    n.cache = y;
    var F = n.prototype;
    F.load = function(n) {
        var t = this.id;
        if (n && n.constructor === Function) {
            var i = t.lastIndexOf("/")
              , e = t.substring(0, i)
              , o = D[e] || (D[e] = {})
              , a = function(r) {
                return (o[r] || (o[r] = d(r, e))).exports
            };
            a.resolve = function(n) {
                if (!n)
                    throw r("");
                var t = v(n, e);
                if (!t)
                    throw r(n, e);
                return t[0]
            }
            ,
            a.cache = y,
            a.runtime = w,
            this.exports = {},
            n.call(this, a, this.exports, this, t, e)
        } else
            this.exports = n;
        this.loaded = !0
    }
    ;
    var N = 0
      , P = function() {
        --N || p()
    };
    F.__runtime = w = {
        def: t,
        installed: a,
        run: g,
        main: i,
        remap: e,
        builtin: o,
        require: h,
        resolve: v,
        join: f,
        ready: p,
        searchPath: x,
        loaderMetadata: function(r) {
            F.__loaderMetadata = r
        },
        pending: function() {
            return _ = !1,
            N++,
            {
                done: P
            }
        }
    },
    b ? b.$_mod_webchat = w : module.exports = w
}();
$_mod_webchat.installed("purecloud-webchat$2.0.0", "regenerator-runtime", "0.12.1");
$_mod_webchat.def("/regenerator-runtime$0.12.1/runtime", function(t, r, e, n, o) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    !function(t) {
        function r(t, r, e, n) {
            var i = r && r.prototype instanceof o ? r : o
              , a = Object.create(i.prototype)
              , c = new y(n || []);
            return a._invoke = h(t, e, c),
            a
        }
        function n(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        function o() {}
        function a() {}
        function c() {}
        function u(t) {
            ["next", "throw", "return"].forEach(function(r) {
                t[r] = function(t) {
                    return this._invoke(r, t)
                }
            })
        }
        function f(t) {
            function r(e, o, a, c) {
                var u = n(t[e], t, o);
                if ("throw" !== u.type) {
                    var f = u.arg
                      , h = f.value;
                    return h && "object" === (void 0 === h ? "undefined" : i(h)) && w.call(h, "__await") ? Promise.resolve(h.__await).then(function(t) {
                        r("next", t, a, c)
                    }, function(t) {
                        r("throw", t, a, c)
                    }) : Promise.resolve(h).then(function(t) {
                        f.value = t,
                        a(f)
                    }, function(t) {
                        return r("throw", t, a, c)
                    })
                }
                c(u.arg)
            }
            function e(t, e) {
                function n() {
                    return new Promise(function(n, o) {
                        r(t, e, n, o)
                    }
                    )
                }
                return o = o ? o.then(n, n) : n()
            }
            var o;
            this._invoke = e
        }
        function h(t, r, e) {
            var o = O;
            return function(i, a) {
                if (o === k)
                    throw new Error("Generator is already running");
                if (o === G) {
                    if ("throw" === i)
                        throw a;
                    return v()
                }
                for (e.method = i,
                e.arg = a; ; ) {
                    var c = e.delegate;
                    if (c) {
                        var u = s(c, e);
                        if (u) {
                            if (u === N)
                                continue;
                            return u
                        }
                    }
                    if ("next" === e.method)
                        e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                        if (o === O)
                            throw o = G,
                            e.arg;
                        e.dispatchException(e.arg)
                    } else
                        "return" === e.method && e.abrupt("return", e.arg);
                    o = k;
                    var f = n(t, r, e);
                    if ("normal" === f.type) {
                        if (o = e.done ? G : S,
                        f.arg === N)
                            continue;
                        return {
                            value: f.arg,
                            done: e.done
                        }
                    }
                    "throw" === f.type && (o = G,
                    e.method = "throw",
                    e.arg = f.arg)
                }
            }
        }
        function s(t, r) {
            var e = t.iterator[r.method];
            if (e === g) {
                if (r.delegate = null,
                "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return",
                    r.arg = g,
                    s(t, r),
                    "throw" === r.method))
                        return N;
                    r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return N
            }
            var o = n(e, t.iterator, r.arg);
            if ("throw" === o.type)
                return r.method = "throw",
                r.arg = o.arg,
                r.delegate = null,
                N;
            var i = o.arg;
            return i ? i.done ? (r[t.resultName] = i.value,
            r.next = t.nextLoc,
            "return" !== r.method && (r.method = "next",
            r.arg = g),
            r.delegate = null,
            N) : i : (r.method = "throw",
            r.arg = new TypeError("iterator result is not an object"),
            r.delegate = null,
            N)
        }
        function l(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]),
            2 in t && (r.finallyLoc = t[2],
            r.afterLoc = t[3]),
            this.tryEntries.push(r)
        }
        function p(t) {
            var r = t.completion || {};
            r.type = "normal",
            delete r.arg,
            t.completion = r
        }
        function y(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(l, this),
            this.reset(!0)
        }
        function d(t) {
            if (t) {
                var r = t[b];
                if (r)
                    return r.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var e = -1
                      , n = function r() {
                        for (; ++e < t.length; )
                            if (w.call(t, e))
                                return r.value = t[e],
                                r.done = !1,
                                r;
                        return r.value = g,
                        r.done = !0,
                        r
                    };
                    return n.next = n
                }
            }
            return {
                next: v
            }
        }
        function v() {
            return {
                value: g,
                done: !0
            }
        }
        var g, m = Object.prototype, w = m.hasOwnProperty, L = "function" == typeof Symbol ? Symbol : {}, b = L.iterator || "@@iterator", x = L.asyncIterator || "@@asyncIterator", E = L.toStringTag || "@@toStringTag", _ = "object" === (void 0 === e ? "undefined" : i(e)), j = t.regeneratorRuntime;
        if (j)
            return void (_ && (e.exports = j));
        j = t.regeneratorRuntime = _ ? e.exports : {},
        j.wrap = r;
        var O = "suspendedStart"
          , S = "suspendedYield"
          , k = "executing"
          , G = "completed"
          , N = {}
          , P = {};
        P[b] = function() {
            return this
        }
        ;
        var F = Object.getPrototypeOf
          , T = F && F(F(d([])));
        T && T !== m && w.call(T, b) && (P = T);
        var I = c.prototype = o.prototype = Object.create(P);
        a.prototype = I.constructor = c,
        c.constructor = a,
        c[E] = a.displayName = "GeneratorFunction",
        j.isGeneratorFunction = function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === a || "GeneratorFunction" === (r.displayName || r.name))
        }
        ,
        j.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c,
            E in t || (t[E] = "GeneratorFunction")),
            t.prototype = Object.create(I),
            t
        }
        ,
        j.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        u(f.prototype),
        f.prototype[x] = function() {
            return this
        }
        ,
        j.AsyncIterator = f,
        j.async = function(t, e, n, o) {
            var i = new f(r(t, e, n, o));
            return j.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                return t.done ? t.value : i.next()
            })
        }
        ,
        u(I),
        I[E] = "Generator",
        I[b] = function() {
            return this
        }
        ,
        I.toString = function() {
            return "[object Generator]"
        }
        ,
        j.keys = function(t) {
            var r = [];
            for (var e in t)
                r.push(e);
            return r.reverse(),
            function e() {
                for (; r.length; ) {
                    var n = r.pop();
                    if (n in t)
                        return e.value = n,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        j.values = d,
        y.prototype = {
            constructor: y,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = g,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = g,
                this.tryEntries.forEach(p),
                !t)
                    for (var r in this)
                        "t" === r.charAt(0) && w.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = g)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0]
                  , r = t.completion;
                if ("throw" === r.type)
                    throw r.arg;
                return this.rval
            },
            dispatchException: function(t) {
                function r(r, n) {
                    return i.type = "throw",
                    i.arg = t,
                    e.next = r,
                    n && (e.method = "next",
                    e.arg = g),
                    !!n
                }
                if (this.done)
                    throw t;
                for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n]
                      , i = o.completion;
                    if ("root" === o.tryLoc)
                        return r("end");
                    if (o.tryLoc <= this.prev) {
                        var a = w.call(o, "catchLoc")
                          , c = w.call(o, "finallyLoc");
                        if (a && c) {
                            if (this.prev < o.catchLoc)
                                return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc)
                                return r(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc)
                                return r(o.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc)
                                return r(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc <= this.prev && w.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = t,
                i.arg = r,
                o ? (this.method = "next",
                this.next = o.finallyLoc,
                N) : this.complete(i)
            },
            complete: function(t, r) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && r && (this.next = r),
                N
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t)
                        return this.complete(e.completion, e.afterLoc),
                        p(e),
                        N
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                        var n = e.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            p(e)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, e) {
                return this.delegate = {
                    iterator: d(t),
                    resultName: r,
                    nextLoc: e
                },
                "next" === this.method && (this.arg = g),
                N
            }
        }
    }(function() {
        return this || "object" === ("undefined" == typeof self ? "undefined" : i(self)) && self
    }() || Function("return this")())
});
$_mod_webchat.run("/regenerator-runtime$0.12.1/runtime", {
    wait: !1
});
$_mod_webchat.builtin("lasso-loader", "/lasso-loader$3.0.2/src/index");
$_mod_webchat.loaderMetadata({
    _517af1: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js", "https://dhqbrvplips7x.cloudfront.net/webchat/46-46/fashion-model-f4e26961.js"]
    },
    _24795c: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js", "https://dhqbrvplips7x.cloudfront.net/webchat/46-46/fashion-model-f4e26961.js"]
    },
    _72e985: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js", "https://dhqbrvplips7x.cloudfront.net/webchat/46-46/fashion-model-f4e26961.js"]
    },
    _c2a4ce: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js"]
    },
    _ba9506: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js"]
    },
    _8cffd9: {
        js: ["https://dhqbrvplips7x.cloudfront.net/webchat/46-46/.-jsapi-v1.js-async-315c8669.js"]
    }
});
$_mod_webchat.installed("lasso-loader$3.0.2", "raptor-util", "1.1.2");
$_mod_webchat.def("/raptor-util$1.1.2/extend", function(t, r, e, n, o) {
    "use strict";
    e.exports = function(t, r) {
        if (t || (t = {}),
        r)
            for (var e in r)
                r.hasOwnProperty(e) && (t[e] = r[e]);
        return t
    }
});
$_mod_webchat.def("/lasso-loader$3.0.2/src/resource-loader", function(e, n, t, r, o) {
    "use strict";
    function a(e, n) {
        var t = document.createElement(e);
        return n && u(t, n),
        t
    }
    function c(e) {
        null == i && (i = document.getElementsByTagName("head")[0]),
        i.appendChild(e)
    }
    var i, u = e("/raptor-util$1.1.2/extend");
    n.js = function(e, n, t) {
        function r() {
            !1 === d && (d = !0,
            n())
        }
        function o(e) {
            !1 === d && (d = !0,
            n(e || "unknown error"))
        }
        t = t || {};
        var i, d = !1;
        if (u(t, {
            type: "text/javascript",
            src: e,
            onreadystatechange: function() {
                "complete" != i.readyState && "loaded" != i.readyState || r()
            },
            onload: r,
            onerror: o
        }),
        i = a("script", t),
        i.addEventListener)
            try {
                i.addEventListener("load", function() {
                    r()
                })
            } catch (e) {}
        c(i)
    }
    ,
    n.css = function(e, n, t) {
        function r() {
            h.onload = null,
            h.onreadystatechange = null,
            h.onerror = null
        }
        function o() {
            for (var n = document.styleSheets, t = 0, r = n.length; t < r; t++)
                if (n[t].href === e)
                    return !0;
            return !1
        }
        function i() {
            !1 === f && (f = !0,
            r(),
            n())
        }
        function d() {
            if (!1 === f) {
                if (!o() && s--)
                    return window.setTimeout(d, 10);
                i()
            }
        }
        function l(e) {
            !1 === f && (f = !0,
            r(),
            n(e || "unknown error"))
        }
        var s = 20
          , f = !1
          , h = a("link");
        u(h, {
            type: "text/css",
            rel: "stylesheet",
            href: e
        }),
        t && u(h, t),
        "Microsoft Internet Explorer" === navigator.appName ? (h.onload = i,
        h.onreadystatechange = function() {
            var e = this.readyState;
            "loaded" !== e && "complete" !== e || i()
        }
        ) : d(),
        h.onerror = l,
        c(h)
    }
});
$_mod_webchat.installed("lasso-loader$3.0.2", "events", "1.1.1");
$_mod_webchat.main("/events$1.1.1", "events");
$_mod_webchat.def("/events$1.1.1/events", function(e, t, s, n, i) {
    "use strict";
    function r() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function o(e) {
        return "function" == typeof e
    }
    function h(e) {
        return "number" == typeof e
    }
    function v(e) {
        return "object" === (void 0 === e ? "undefined" : u(e)) && null !== e
    }
    function l(e) {
        return void 0 === e
    }
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    s.exports = r,
    r.EventEmitter = r,
    r.prototype._events = void 0,
    r.prototype._maxListeners = void 0,
    r.defaultMaxListeners = 10,
    r.prototype.setMaxListeners = function(e) {
        if (!h(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
        return this._maxListeners = e,
        this
    }
    ,
    r.prototype.emit = function(e) {
        var t, s, n, i, r, h;
        if (this._events || (this._events = {}),
        "error" === e && (!this._events.error || v(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1])instanceof Error)
                throw t;
            var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw u.context = t,
            u
        }
        if (s = this._events[e],
        l(s))
            return !1;
        if (o(s))
            switch (arguments.length) {
            case 1:
                s.call(this);
                break;
            case 2:
                s.call(this, arguments[1]);
                break;
            case 3:
                s.call(this, arguments[1], arguments[2]);
                break;
            default:
                i = Array.prototype.slice.call(arguments, 1),
                s.apply(this, i)
            }
        else if (v(s))
            for (i = Array.prototype.slice.call(arguments, 1),
            h = s.slice(),
            n = h.length,
            r = 0; r < n; r++)
                h[r].apply(this, i);
        return !0
    }
    ,
    r.prototype.addListener = function(e, t) {
        var s;
        if (!o(t))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t),
        this._events[e] ? v(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
        v(this._events[e]) && !this._events[e].warned && (s = l(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    r.prototype.on = r.prototype.addListener,
    r.prototype.once = function(e, t) {
        function s() {
            this.removeListener(e, s),
            n || (n = !0,
            t.apply(this, arguments))
        }
        if (!o(t))
            throw TypeError("listener must be a function");
        var n = !1;
        return s.listener = t,
        this.on(e, s),
        this
    }
    ,
    r.prototype.removeListener = function(e, t) {
        var s, n, i, r;
        if (!o(t))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[e])
            return this;
        if (s = this._events[e],
        i = s.length,
        n = -1,
        s === t || o(s.listener) && s.listener === t)
            delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (v(s)) {
            for (r = i; r-- > 0; )
                if (s[r] === t || s[r].listener && s[r].listener === t) {
                    n = r;
                    break
                }
            if (n < 0)
                return this;
            1 === s.length ? (s.length = 0,
            delete this._events[e]) : s.splice(n, 1),
            this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }
    ,
    r.prototype.removeAllListeners = function(e) {
        var t, s;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
            this;
        if (0 === arguments.length) {
            for (t in this._events)
                "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (s = this._events[e],
        o(s))
            this.removeListener(e, s);
        else if (s)
            for (; s.length; )
                this.removeListener(e, s[s.length - 1]);
        return delete this._events[e],
        this
    }
    ,
    r.prototype.listeners = function(e) {
        return this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }
    ,
    r.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (o(t))
                return 1;
            if (t)
                return t.length
        }
        return 0
    }
    ,
    r.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
});
$_mod_webchat.def("/lasso-loader$3.0.2/src/index", function(n, e, t, r, o) {
    "use strict";
    function a(n, e) {
        if (!v[e]) {
            v[e] = !0;
            var t, r = setTimeout(function() {
                t("Timeout after " + l + "ms")
            }, l);
            t = function(n) {
                v[e] && (clearTimeout(r),
                delete v[e],
                n ? h[e] = n : m[e] = !0,
                _.emit(e, n, e))
            }
            ,
            u[n](e, t)
        }
    }
    function i(n, e) {
        function t() {
            i.length ? e("Failed: " + i.join(", ")) : e()
        }
        function r(n, e) {
            n && i.push(e + " (" + n + ")"),
            0 == --c && s && t()
        }
        function o(e) {
            var t = n[e];
            if (t)
                for (var o = 0, s = t.length; o < s; o++) {
                    var f = t[o];
                    h[f] ? i.push(f + " (" + h[f] + ")") : m[f] || (c++,
                    _.once(f, r),
                    a(e, f))
                }
        }
        var i = []
          , c = 0
          , s = !1;
        o("css"),
        o("js"),
        s = !0,
        0 === c && t()
    }
    function c(n) {
        if ("_" !== n.charAt(0))
            throw new Error("No loader metadata for " + n)
    }
    function s(n, e) {
        var r, o = t.__loaderMetadata;
        if (!o)
            return e();
        if (Array.isArray(n))
            r = {
                js: [],
                css: []
            },
            n.forEach(function(n) {
                var e = o[n];
                e ? ["js", "css"].forEach(function(n) {
                    var t = e[n];
                    t && (r[n] = r[n].concat(t))
                }) : c(n)
            });
        else if (!(r = o[n]))
            return c(n),
            e();
        var a = f.pending();
        i(r, function(n, t) {
            a.done(n),
            e(n, t)
        })
    }
    var f = t.__runtime
      , u = n("/lasso-loader$3.0.2/src/resource-loader")
      , d = n("/events$1.1.1/events").EventEmitter
      , l = 3e3
      , v = {}
      , m = {}
      , h = {}
      , _ = new d;
    e.setTimeout = function(n) {
        l = n
    }
    ,
    e.load = i,
    e.async = s
});
$_mod_webchat.main("/purecloud-webchat$2.0.0/src/polyfills", "");
$_mod_webchat.installed("purecloud-webchat$2.0.0", "core-js", "2.6.11");
$_mod_webchat.def("/core-js$2.6.11/modules/_cof", function(t, c, e, o, r) {
    "use strict";
    var n = {}.toString;
    e.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_core", function(e, o, r, _, s) {
    "use strict";
    var t = r.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = t)
});
$_mod_webchat.def("/core-js$2.6.11/modules/_global", function(e, t, n, o, d) {
    "use strict";
    var f = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = f)
});
$_mod_webchat.def("/core-js$2.6.11/modules/_library", function(e, o, r, s, t) {
    "use strict";
    r.exports = !1
});
$_mod_webchat.def("/core-js$2.6.11/modules/_shared", function(e, o, r, s, _) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_core")
      , u = e("/core-js$2.6.11/modules/_global")
      , d = u["__core-js_shared__"] || (u["__core-js_shared__"] = {});
    (r.exports = function(e, o) {
        return d[e] || (d[e] = void 0 !== o ? o : {})
    }
    )("versions", []).push({
        version: c.version,
        mode: e("/core-js$2.6.11/modules/_library") ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
});
$_mod_webchat.def("/core-js$2.6.11/modules/_uid", function(o, t, n, r, c) {
    "use strict";
    var e = 0
      , d = Math.random();
    n.exports = function(o) {
        return "Symbol(".concat(void 0 === o ? "" : o, ")_", (++e + d).toString(36))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_wks", function(o, e, s, r, t) {
    "use strict";
    var u = o("/core-js$2.6.11/modules/_shared")("wks")
      , c = o("/core-js$2.6.11/modules/_uid")
      , d = o("/core-js$2.6.11/modules/_global").Symbol
      , l = "function" == typeof d;
    (s.exports = function(o) {
        return u[o] || (u[o] = l && d[o] || (l ? d : c)("Symbol." + o))
    }
    ).store = u
});
$_mod_webchat.def("/core-js$2.6.11/modules/_classof", function(e, t, n, o, r) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_cof")
      , u = e("/core-js$2.6.11/modules/_wks")("toStringTag")
      , s = "Arguments" == c(function() {
        return arguments
    }())
      , f = function(e, t) {
        try {
            return e[t]
        } catch (e) {}
    };
    n.exports = function(e) {
        var t, n, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = f(t = Object(e), u)) ? n : s ? c(t) : "Object" == (o = c(t)) && "function" == typeof t.callee ? "Arguments" : o
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_is-object", function(o, t, e, n, f) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
    ;
    e.exports = function(o) {
        return "object" === (void 0 === o ? "undefined" : r(o)) ? null !== o : "function" == typeof o
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_an-object", function(o, e, t, r, c) {
    "use strict";
    var s = o("/core-js$2.6.11/modules/_is-object");
    t.exports = function(o) {
        if (!s(o))
            throw TypeError(o + " is not an object!");
        return o
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_fails", function(t, e, r, c, n) {
    "use strict";
    r.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_descriptors", function(e, t, r, o, s) {
    "use strict";
    r.exports = !e("/core-js$2.6.11/modules/_fails")(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
});
$_mod_webchat.def("/core-js$2.6.11/modules/_dom-create", function(e, o, t, c, r) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_is-object")
      , m = e("/core-js$2.6.11/modules/_global").document
      , n = s(m) && s(m.createElement);
    t.exports = function(e) {
        return n ? m.createElement(e) : {}
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_ie8-dom-define", function(e, o, r, s, t) {
    "use strict";
    r.exports = !e("/core-js$2.6.11/modules/_descriptors") && !e("/core-js$2.6.11/modules/_fails")(function() {
        return 7 != Object.defineProperty(e("/core-js$2.6.11/modules/_dom-create")("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-primitive", function(t, e, o, r, i) {
    "use strict";
    var n = t("/core-js$2.6.11/modules/_is-object");
    o.exports = function(t, e) {
        if (!n(t))
            return t;
        var o, r;
        if (e && "function" == typeof (o = t.toString) && !n(r = o.call(t)))
            return r;
        if ("function" == typeof (o = t.valueOf) && !n(r = o.call(t)))
            return r;
        if (!e && "function" == typeof (o = t.toString) && !n(r = o.call(t)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-dp", function(e, o, r, t, s) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_an-object")
      , i = e("/core-js$2.6.11/modules/_ie8-dom-define")
      , d = e("/core-js$2.6.11/modules/_to-primitive")
      , n = Object.defineProperty;
    o.f = e("/core-js$2.6.11/modules/_descriptors") ? Object.defineProperty : function(e, o, r) {
        if (c(e),
        o = d(o, !0),
        c(r),
        i)
            try {
                return n(e, o, r)
            } catch (e) {}
        if ("get"in r || "set"in r)
            throw TypeError("Accessors not supported!");
        return "value"in r && (e[o] = r.value),
        e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_property-desc", function(e, r, t, o, u) {
    "use strict";
    t.exports = function(e, r) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: r
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_hide", function(e, o, r, s, c) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_object-dp")
      , d = e("/core-js$2.6.11/modules/_property-desc");
    r.exports = e("/core-js$2.6.11/modules/_descriptors") ? function(e, o, r) {
        return t.f(e, o, d(1, r))
    }
    : function(e, o, r) {
        return e[o] = r,
        e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_has", function(e, r, t, o, s) {
    "use strict";
    var c = {}.hasOwnProperty;
    t.exports = function(e, r) {
        return c.call(e, r)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_function-to-string", function(t, o, n, e, s) {
    "use strict";
    n.exports = t("/core-js$2.6.11/modules/_shared")("native-function-to-string", Function.toString)
});
$_mod_webchat.def("/core-js$2.6.11/modules/_redefine", function(e, o, t, n, s) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_global")
      , c = e("/core-js$2.6.11/modules/_hide")
      , i = e("/core-js$2.6.11/modules/_has")
      , u = e("/core-js$2.6.11/modules/_uid")("src")
      , l = e("/core-js$2.6.11/modules/_function-to-string")
      , d = ("" + l).split("toString");
    e("/core-js$2.6.11/modules/_core").inspectSource = function(e) {
        return l.call(e)
    }
    ,
    (t.exports = function(e, o, t, n) {
        var s = "function" == typeof t;
        s && (i(t, "name") || c(t, "name", o)),
        e[o] !== t && (s && (i(t, u) || c(t, u, e[o] ? "" + e[o] : d.join(String(o)))),
        e === r ? e[o] = t : n ? e[o] ? e[o] = t : c(e, o, t) : (delete e[o],
        c(e, o, t)))
    }
    )(Function.prototype, "toString", function() {
        return "function" == typeof this && this[u] || l.call(this)
    })
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.object.to-string", function(e, o, t, s, c) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_classof")
      , n = {};
    n[e("/core-js$2.6.11/modules/_wks")("toStringTag")] = "z",
    n + "" != "[object z]" && e("/core-js$2.6.11/modules/_redefine")(Object.prototype, "toString", function() {
        return "[object " + r(this) + "]"
    }, !0)
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-integer", function(t, e, o, r, c) {
    "use strict";
    var i = Math.ceil
      , n = Math.floor;
    o.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_defined", function(e, o, t, r, n) {
    "use strict";
    t.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_string-at", function(e, t, r, o, n) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_to-integer")
      , s = e("/core-js$2.6.11/modules/_defined");
    r.exports = function(e) {
        return function(t, r) {
            var o, n, d = String(s(t)), i = c(r), u = d.length;
            return i < 0 || i >= u ? e ? "" : void 0 : (o = d.charCodeAt(i),
            o < 55296 || o > 56319 || i + 1 === u || (n = d.charCodeAt(i + 1)) < 56320 || n > 57343 ? e ? d.charAt(i) : o : e ? d.slice(i, i + 2) : n - 56320 + (o - 55296 << 10) + 65536)
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_a-function", function(o, t, n, e, r) {
    "use strict";
    n.exports = function(o) {
        if ("function" != typeof o)
            throw TypeError(o + " is not a function!");
        return o
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_ctx", function(n, r, t, e, c) {
    "use strict";
    var u = n("/core-js$2.6.11/modules/_a-function");
    t.exports = function(n, r, t) {
        if (u(n),
        void 0 === r)
            return n;
        switch (t) {
        case 1:
            return function(t) {
                return n.call(r, t)
            }
            ;
        case 2:
            return function(t, e) {
                return n.call(r, t, e)
            }
            ;
        case 3:
            return function(t, e, c) {
                return n.call(r, t, e, c)
            }
        }
        return function() {
            return n.apply(r, arguments)
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_export", function(o, e, r, t, c) {
    "use strict";
    var s = o("/core-js$2.6.11/modules/_global")
      , d = o("/core-js$2.6.11/modules/_core")
      , u = o("/core-js$2.6.11/modules/_hide")
      , l = o("/core-js$2.6.11/modules/_redefine")
      , n = o("/core-js$2.6.11/modules/_ctx")
      , i = function o(e, r, t) {
        var c, i, p, _, f = e & o.F, m = e & o.G, $ = e & o.S, j = e & o.P, a = e & o.B, y = m ? s : $ ? s[r] || (s[r] = {}) : (s[r] || {}).prototype, v = m ? d : d[r] || (d[r] = {}), x = v.prototype || (v.prototype = {});
        m && (t = r);
        for (c in t)
            i = !f && y && void 0 !== y[c],
            p = (i ? y : t)[c],
            _ = a && i ? n(p, s) : j && "function" == typeof p ? n(Function.call, p) : p,
            y && l(y, c, p, e & o.U),
            v[c] != p && u(v, c, _),
            j && x[c] != p && (x[c] = p)
    };
    s.core = d,
    i.F = 1,
    i.G = 2,
    i.S = 4,
    i.P = 8,
    i.B = 16,
    i.W = 32,
    i.U = 64,
    i.R = 128,
    r.exports = i
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iterators", function(e, t, o, s, r) {
    "use strict";
    o.exports = {}
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iobject", function(e, t, c, o, r) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_cof");
    c.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == s(e) ? e.split("") : Object(e)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-iobject", function(e, o, t, c, s) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_iobject")
      , d = e("/core-js$2.6.11/modules/_defined");
    t.exports = function(e) {
        return r(d(e))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-length", function(e, t, o, n, r) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_to-integer")
      , c = Math.min;
    o.exports = function(e) {
        return e > 0 ? c(s(e), 9007199254740991) : 0
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-absolute-index", function(e, t, o, n, r) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_to-integer")
      , u = Math.max
      , a = Math.min;
    o.exports = function(e, t) {
        return e = s(e),
        e < 0 ? u(e + t, 0) : a(e, t)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_array-includes", function(e, o, r, t, n) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_to-iobject")
      , u = e("/core-js$2.6.11/modules/_to-length")
      , c = e("/core-js$2.6.11/modules/_to-absolute-index");
    r.exports = function(e) {
        return function(o, r, t) {
            var n, i = s(o), f = u(i.length), l = c(t, f);
            if (e && r != r) {
                for (; f > l; )
                    if ((n = i[l++]) != n)
                        return !0
            } else
                for (; f > l; l++)
                    if ((e || l in i) && i[l] === r)
                        return e || l || 0;
            return !e && -1
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_shared-key", function(e, s, o, r, d) {
    "use strict";
    var u = e("/core-js$2.6.11/modules/_shared")("keys")
      , c = e("/core-js$2.6.11/modules/_uid");
    o.exports = function(e) {
        return u[e] || (u[e] = c(e))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-keys-internal", function(e, o, s, r, c) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_has")
      , u = e("/core-js$2.6.11/modules/_to-iobject")
      , n = e("/core-js$2.6.11/modules/_array-includes")(!1)
      , d = e("/core-js$2.6.11/modules/_shared-key")("IE_PROTO");
    s.exports = function(e, o) {
        var s, r = u(e), c = 0, a = [];
        for (s in r)
            s != d && t(r, s) && a.push(s);
        for (; o.length > c; )
            t(r, s = o[c++]) && (~n(a, s) || a.push(s));
        return a
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_enum-bug-keys", function(t, e, o, r, s) {
    "use strict";
    o.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-keys", function(e, s, o, t, c) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_object-keys-internal")
      , u = e("/core-js$2.6.11/modules/_enum-bug-keys");
    o.exports = Object.keys || function(e) {
        return r(e, u)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-dps", function(e, o, s, r, c) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_object-dp")
      , d = e("/core-js$2.6.11/modules/_an-object")
      , j = e("/core-js$2.6.11/modules/_object-keys");
    s.exports = e("/core-js$2.6.11/modules/_descriptors") ? Object.defineProperties : function(e, o) {
        d(e);
        for (var s, r = j(o), c = r.length, u = 0; c > u; )
            t.f(e, s = r[u++], o[s]);
        return e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_html", function(e, o, t, c, m) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_global").document;
    t.exports = s && s.documentElement
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-create", function(e, o, t, r, c) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_an-object")
      , n = e("/core-js$2.6.11/modules/_object-dps")
      , d = e("/core-js$2.6.11/modules/_enum-bug-keys")
      , u = e("/core-js$2.6.11/modules/_shared-key")("IE_PROTO")
      , l = function() {}
      , p = function() {
        var o, t = e("/core-js$2.6.11/modules/_dom-create")("iframe"), r = d.length;
        for (t.style.display = "none",
        e("/core-js$2.6.11/modules/_html").appendChild(t),
        t.src = "javascript:",
        o = t.contentWindow.document,
        o.open(),
        o.write("<script>document.F=Object<\/script>"),
        o.close(),
        p = o.F; r--; )
            delete p.prototype[d[r]];
        return p()
    };
    t.exports = Object.create || function(e, o) {
        var t;
        return null !== e ? (l.prototype = s(e),
        t = new l,
        l.prototype = null,
        t[u] = e) : t = p(),
        void 0 === o ? t : n(t, o)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_set-to-string-tag", function(o, e, s, t, r) {
    "use strict";
    var c = o("/core-js$2.6.11/modules/_object-dp").f
      , u = o("/core-js$2.6.11/modules/_has")
      , a = o("/core-js$2.6.11/modules/_wks")("toStringTag");
    s.exports = function(o, e, s) {
        o && !u(o = s ? o : o.prototype, a) && c(o, a, {
            configurable: !0,
            value: e
        })
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iter-create", function(e, t, o, r, s) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_object-create")
      , u = e("/core-js$2.6.11/modules/_property-desc")
      , d = e("/core-js$2.6.11/modules/_set-to-string-tag")
      , i = {};
    e("/core-js$2.6.11/modules/_hide")(i, e("/core-js$2.6.11/modules/_wks")("iterator"), function() {
        return this
    }),
    o.exports = function(e, t, o) {
        e.prototype = c(i, {
            next: u(1, o)
        }),
        d(e, t + " Iterator")
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_to-object", function(e, o, t, c, r) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_defined");
    t.exports = function(e) {
        return Object(s(e))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-gpo", function(o, t, e, c, r) {
    "use strict";
    var s = o("/core-js$2.6.11/modules/_has")
      , n = o("/core-js$2.6.11/modules/_to-object")
      , u = o("/core-js$2.6.11/modules/_shared-key")("IE_PROTO")
      , j = Object.prototype;
    e.exports = Object.getPrototypeOf || function(o) {
        return o = n(o),
        s(o, u) ? o[u] : "function" == typeof o.constructor && o instanceof o.constructor ? o.constructor.prototype : o instanceof Object ? j : null
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iter-define", function(e, r, t, s, o) {
    "use strict";
    var n = e("/core-js$2.6.11/modules/_library")
      , i = e("/core-js$2.6.11/modules/_export")
      , u = e("/core-js$2.6.11/modules/_redefine")
      , c = e("/core-js$2.6.11/modules/_hide")
      , a = e("/core-js$2.6.11/modules/_iterators")
      , l = e("/core-js$2.6.11/modules/_iter-create")
      , d = e("/core-js$2.6.11/modules/_set-to-string-tag")
      , f = e("/core-js$2.6.11/modules/_object-gpo")
      , j = e("/core-js$2.6.11/modules/_wks")("iterator")
      , m = !([].keys && "next"in [].keys())
      , _ = function() {
        return this
    };
    t.exports = function(e, r, t, s, o, $, y) {
        l(t, r, s);
        var p, v, h, k = function(e) {
            if (!m && e in g)
                return g[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new t(this,e)
                }
            }
            return function() {
                return new t(this,e)
            }
        }, w = r + " Iterator", b = "values" == o, x = !1, g = e.prototype, A = g[j] || g["@@iterator"] || o && g[o], F = A || k(o), I = o ? b ? k("entries") : F : void 0, O = "Array" == r ? g.entries || A : A;
        if (O && (h = f(O.call(new e))) !== Object.prototype && h.next && (d(h, w, !0),
        n || "function" == typeof h[j] || c(h, j, _)),
        b && A && "values" !== A.name && (x = !0,
        F = function() {
            return A.call(this)
        }
        ),
        n && !y || !m && !x && g[j] || c(g, j, F),
        a[r] = F,
        a[w] = _,
        o)
            if (p = {
                values: b ? F : k("values"),
                keys: $ ? F : k("keys"),
                entries: I
            },
            y)
                for (v in p)
                    v in g || u(g, v, p[v]);
            else
                i(i.P + i.F * (m || x), r, p);
        return p
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.string.iterator", function(t, e, i, n, r) {
    "use strict";
    var s = t("/core-js$2.6.11/modules/_string-at")(!0);
    t("/core-js$2.6.11/modules/_iter-define")(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, i = this._i;
        return i >= e.length ? {
            value: void 0,
            done: !0
        } : (t = s(e, i),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
});
$_mod_webchat.def("/core-js$2.6.11/modules/_add-to-unscopables", function(o, e, s, c, d) {
    "use strict";
    var r = o("/core-js$2.6.11/modules/_wks")("unscopables")
      , t = Array.prototype;
    void 0 == t[r] && o("/core-js$2.6.11/modules/_hide")(t, r, {}),
    s.exports = function(o) {
        t[r][o] = !0
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iter-step", function(e, t, o, n, r) {
    "use strict";
    o.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.array.iterator", function(e, s, t, r, o) {
    "use strict";
    var i = e("/core-js$2.6.11/modules/_add-to-unscopables")
      , u = e("/core-js$2.6.11/modules/_iter-step")
      , a = e("/core-js$2.6.11/modules/_iterators")
      , _ = e("/core-js$2.6.11/modules/_to-iobject");
    t.exports = e("/core-js$2.6.11/modules/_iter-define")(Array, "Array", function(e, s) {
        this._t = _(e),
        this._i = 0,
        this._k = s
    }, function() {
        var e = this._t
          , s = this._k
          , t = this._i++;
        return !e || t >= e.length ? (this._t = void 0,
        u(1)) : "keys" == s ? u(0, t) : "values" == s ? u(0, e[t]) : u(0, [t, e[t]])
    }, "values"),
    a.Arguments = a.Array,
    i("keys"),
    i("values"),
    i("entries")
});
$_mod_webchat.def("/core-js$2.6.11/modules/web.dom.iterable", function(e, t, s, i, r) {
    "use strict";
    for (var o = e("/core-js$2.6.11/modules/es6.array.iterator"), l = e("/core-js$2.6.11/modules/_object-keys"), a = e("/core-js$2.6.11/modules/_redefine"), L = e("/core-js$2.6.11/modules/_global"), c = e("/core-js$2.6.11/modules/_hide"), n = e("/core-js$2.6.11/modules/_iterators"), S = e("/core-js$2.6.11/modules/_wks"), u = S("iterator"), m = S("toStringTag"), d = n.Array, T = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, f = l(T), g = 0; g < f.length; g++) {
        var M, j = f[g], y = T[j], $ = L[j], _ = $ && $.prototype;
        if (_ && (_[u] || c(_, u, d),
        _[m] || c(_, m, j),
        n[j] = d,
        y))
            for (M in o)
                _[M] || a(_, M, o[M], !0)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_an-instance", function(n, o, t, e, i) {
    "use strict";
    t.exports = function(n, o, t, e) {
        if (!(n instanceof o) || void 0 !== e && e in n)
            throw TypeError(t + ": incorrect invocation!");
        return n
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iter-call", function(r, t, e, c, o) {
    "use strict";
    var a = r("/core-js$2.6.11/modules/_an-object");
    e.exports = function(r, t, e, c) {
        try {
            return c ? t(a(e)[0], e[1]) : t(e)
        } catch (t) {
            var o = r.return;
            throw void 0 !== o && a(o.call(r)),
            t
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_is-array-iter", function(r, e, o, t, s) {
    "use strict";
    var a = r("/core-js$2.6.11/modules/_iterators")
      , i = r("/core-js$2.6.11/modules/_wks")("iterator")
      , c = Array.prototype;
    o.exports = function(r) {
        return void 0 !== r && (a.Array === r || c[i] === r)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/core.get-iterator-method", function(e, o, r, t, s) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_classof")
      , d = e("/core-js$2.6.11/modules/_wks")("iterator")
      , i = e("/core-js$2.6.11/modules/_iterators");
    r.exports = e("/core-js$2.6.11/modules/_core").getIteratorMethod = function(e) {
        if (void 0 != e)
            return e[d] || e["@@iterator"] || i[c(e)]
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_for-of", function(e, o, r, t, s) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_ctx")
      , n = e("/core-js$2.6.11/modules/_iter-call")
      , l = e("/core-js$2.6.11/modules/_is-array-iter")
      , u = e("/core-js$2.6.11/modules/_an-object")
      , i = e("/core-js$2.6.11/modules/_to-length")
      , f = e("/core-js$2.6.11/modules/core.get-iterator-method")
      , a = {}
      , d = {}
      , m = r.exports = function(e, o, r, t, s) {
        var m, j, $, _, h = s ? function() {
            return e
        }
        : f(e), b = c(r, t, o ? 2 : 1), g = 0;
        if ("function" != typeof h)
            throw TypeError(e + " is not iterable!");
        if (l(h)) {
            for (m = i(e.length); m > g; g++)
                if ((_ = o ? b(u(j = e[g])[0], j[1]) : b(e[g])) === a || _ === d)
                    return _
        } else
            for ($ = h.call(e); !(j = $.next()).done; )
                if ((_ = n($, b, j.value, o)) === a || _ === d)
                    return _
    }
    ;
    m.BREAK = a,
    m.RETURN = d
});
$_mod_webchat.def("/core-js$2.6.11/modules/_species-constructor", function(o, e, s, c, r) {
    "use strict";
    var t = o("/core-js$2.6.11/modules/_an-object")
      , u = o("/core-js$2.6.11/modules/_a-function")
      , n = o("/core-js$2.6.11/modules/_wks")("species");
    s.exports = function(o, e) {
        var s, c = t(o).constructor;
        return void 0 === c || void 0 == (s = t(c)[n]) ? e : u(s)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_invoke", function(e, c, r, t, a) {
    "use strict";
    r.exports = function(e, c, r) {
        var t = void 0 === r;
        switch (c.length) {
        case 0:
            return t ? e() : e.call(r);
        case 1:
            return t ? e(c[0]) : e.call(r, c[0]);
        case 2:
            return t ? e(c[0], c[1]) : e.call(r, c[0], c[1]);
        case 3:
            return t ? e(c[0], c[1], c[2]) : e.call(r, c[0], c[1], c[2]);
        case 4:
            return t ? e(c[0], c[1], c[2], c[3]) : e.call(r, c[0], c[1], c[2], c[3])
        }
        return e.apply(r, c)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_task", function(e, t, o, s, n) {
    "use strict";
    var c, a, i, r = e("/core-js$2.6.11/modules/_ctx"), u = e("/core-js$2.6.11/modules/_invoke"), d = e("/core-js$2.6.11/modules/_html"), l = e("/core-js$2.6.11/modules/_dom-create"), f = e("/core-js$2.6.11/modules/_global"), m = f.process, p = f.setImmediate, h = f.clearImmediate, g = f.MessageChannel, _ = f.Dispatch, v = 0, $ = {}, j = function() {
        var e = +this;
        if ($.hasOwnProperty(e)) {
            var t = $[e];
            delete $[e],
            t()
        }
    }, w = function(e) {
        j.call(e.data)
    };
    p && h || (p = function(e) {
        for (var t = [], o = 1; arguments.length > o; )
            t.push(arguments[o++]);
        return $[++v] = function() {
            u("function" == typeof e ? e : Function(e), t)
        }
        ,
        c(v),
        v
    }
    ,
    h = function(e) {
        delete $[e]
    }
    ,
    "process" == e("/core-js$2.6.11/modules/_cof")(m) ? c = function(e) {
        m.nextTick(r(j, e, 1))
    }
    : _ && _.now ? c = function(e) {
        _.now(r(j, e, 1))
    }
    : g ? (a = new g,
    i = a.port2,
    a.port1.onmessage = w,
    c = r(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (c = function(e) {
        f.postMessage(e + "", "*")
    }
    ,
    f.addEventListener("message", w, !1)) : c = "onreadystatechange"in l("script") ? function(e) {
        d.appendChild(l("script")).onreadystatechange = function() {
            d.removeChild(this),
            j.call(e)
        }
    }
    : function(e) {
        setTimeout(r(j, e, 1), 0)
    }
    ),
    o.exports = {
        set: p,
        clear: h
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_microtask", function(e, o, t, n, r) {
    "use strict";
    var a = e("/core-js$2.6.11/modules/_global")
      , s = e("/core-js$2.6.11/modules/_task").set
      , c = a.MutationObserver || a.WebKitMutationObserver
      , i = a.process
      , u = a.Promise
      , v = "process" == e("/core-js$2.6.11/modules/_cof")(i);
    t.exports = function() {
        var e, o, t, n = function() {
            var n, r;
            for (v && (n = i.domain) && n.exit(); e; ) {
                r = e.fn,
                e = e.next;
                try {
                    r()
                } catch (n) {
                    throw e ? t() : o = void 0,
                    n
                }
            }
            o = void 0,
            n && n.enter()
        };
        if (v)
            t = function() {
                i.nextTick(n)
            }
            ;
        else if (!c || a.navigator && a.navigator.standalone)
            if (u && u.resolve) {
                var r = u.resolve(void 0);
                t = function() {
                    r.then(n)
                }
            } else
                t = function() {
                    s.call(a, n)
                }
                ;
        else {
            var f = !0
              , d = document.createTextNode("");
            new c(n).observe(d, {
                characterData: !0
            }),
            t = function() {
                d.data = f = !f
            }
        }
        return function(n) {
            var r = {
                fn: n,
                next: void 0
            };
            o && (o.next = r),
            e || (e = r,
            t()),
            o = r
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_new-promise-capability", function(o, e, r, t, i) {
    "use strict";
    function n(o) {
        var e, r;
        this.promise = new o(function(o, t) {
            if (void 0 !== e || void 0 !== r)
                throw TypeError("Bad Promise constructor");
            e = o,
            r = t
        }
        ),
        this.resolve = s(e),
        this.reject = s(r)
    }
    var s = o("/core-js$2.6.11/modules/_a-function");
    r.exports.f = function(o) {
        return new n(o)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_perform", function(e, r, t, c, o) {
    "use strict";
    t.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_user-agent", function(e, o, s, r, t) {
    "use strict";
    var a = e("/core-js$2.6.11/modules/_global")
      , u = a.navigator;
    s.exports = u && u.userAgent || ""
});
$_mod_webchat.def("/core-js$2.6.11/modules/_promise-resolve", function(e, o, r, s, c) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_an-object")
      , i = e("/core-js$2.6.11/modules/_is-object")
      , u = e("/core-js$2.6.11/modules/_new-promise-capability");
    r.exports = function(e, o) {
        if (t(e),
        i(o) && o.constructor === e)
            return o;
        var r = u.f(e);
        return (0,
        r.resolve)(o),
        r.promise
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_redefine-all", function(e, r, o, n, s) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_redefine");
    o.exports = function(e, r, o) {
        for (var n in r)
            t(e, n, r[n], o);
        return e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_set-species", function(e, s, o, c, r) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_global")
      , u = e("/core-js$2.6.11/modules/_object-dp")
      , d = e("/core-js$2.6.11/modules/_descriptors")
      , i = e("/core-js$2.6.11/modules/_wks")("species");
    o.exports = function(e) {
        var s = t[e];
        d && s && !s[i] && u.f(s, i, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_iter-detect", function(r, t, e, n, o) {
    "use strict";
    var c = r("/core-js$2.6.11/modules/_wks")("iterator")
      , u = !1;
    try {
        var i = [7][c]();
        i.return = function() {
            u = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (r) {}
    e.exports = function(r, t) {
        if (!t && !u)
            return !1;
        var e = !1;
        try {
            var n = [7]
              , o = n[c]();
            o.next = function() {
                return {
                    done: e = !0
                }
            }
            ,
            n[c] = function() {
                return o
            }
            ,
            r(n)
        } catch (r) {}
        return e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.promise", function(e, o, s, t, r) {
    "use strict";
    var n, i, c, u, l = e("/core-js$2.6.11/modules/_library"), a = e("/core-js$2.6.11/modules/_global"), _ = e("/core-js$2.6.11/modules/_ctx"), h = e("/core-js$2.6.11/modules/_classof"), f = e("/core-js$2.6.11/modules/_export"), d = e("/core-js$2.6.11/modules/_is-object"), m = e("/core-js$2.6.11/modules/_a-function"), v = e("/core-js$2.6.11/modules/_an-instance"), j = e("/core-js$2.6.11/modules/_for-of"), p = e("/core-js$2.6.11/modules/_species-constructor"), $ = e("/core-js$2.6.11/modules/_task").set, y = e("/core-js$2.6.11/modules/_microtask")(), P = e("/core-js$2.6.11/modules/_new-promise-capability"), w = e("/core-js$2.6.11/modules/_perform"), b = e("/core-js$2.6.11/modules/_user-agent"), g = e("/core-js$2.6.11/modules/_promise-resolve"), x = a.TypeError, k = a.process, F = k && k.versions, S = F && F.v8 || "", E = a.Promise, O = "process" == h(k), R = function() {}, C = i = P.f, G = !!function() {
        try {
            var o = E.resolve(1)
              , s = (o.constructor = {})[e("/core-js$2.6.11/modules/_wks")("species")] = function(e) {
                e(R, R)
            }
            ;
            return (O || "function" == typeof PromiseRejectionEvent) && o.then(R)instanceof s && 0 !== S.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
        } catch (e) {}
    }(), H = function(e) {
        var o;
        return !(!d(e) || "function" != typeof (o = e.then)) && o
    }, T = function(e, o) {
        if (!e._n) {
            e._n = !0;
            var s = e._c;
            y(function() {
                for (var t = e._v, r = 1 == e._s, n = 0; s.length > n; )
                    !function(o) {
                        var s, n, i, c = r ? o.ok : o.fail, u = o.resolve, l = o.reject, a = o.domain;
                        try {
                            c ? (r || (2 == e._h && q(e),
                            e._h = 1),
                            !0 === c ? s = t : (a && a.enter(),
                            s = c(t),
                            a && (a.exit(),
                            i = !0)),
                            s === o.promise ? l(x("Promise-chain cycle")) : (n = H(s)) ? n.call(s, u, l) : u(s)) : l(t)
                        } catch (e) {
                            a && !i && a.exit(),
                            l(e)
                        }
                    }(s[n++]);
                e._c = [],
                e._n = !1,
                o && !e._h && U(e)
            })
        }
    }, U = function(e) {
        $.call(a, function() {
            var o, s, t, r = e._v, n = W(e);
            if (n && (o = w(function() {
                O ? k.emit("unhandledRejection", r, e) : (s = a.onunhandledrejection) ? s({
                    promise: e,
                    reason: r
                }) : (t = a.console) && t.error && t.error("Unhandled promise rejection", r)
            }),
            e._h = O || W(e) ? 2 : 1),
            e._a = void 0,
            n && o.e)
                throw o.v
        })
    }, W = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, q = function(e) {
        $.call(a, function() {
            var o;
            O ? k.emit("rejectionHandled", e) : (o = a.onrejectionhandled) && o({
                promise: e,
                reason: e._v
            })
        })
    }, z = function(e) {
        var o = this;
        o._d || (o._d = !0,
        o = o._w || o,
        o._v = e,
        o._s = 2,
        o._a || (o._a = o._c.slice()),
        T(o, !0))
    }, A = function e(o) {
        var s, t = this;
        if (!t._d) {
            t._d = !0,
            t = t._w || t;
            try {
                if (t === o)
                    throw x("Promise can't be resolved itself");
                (s = H(o)) ? y(function() {
                    var r = {
                        _w: t,
                        _d: !1
                    };
                    try {
                        s.call(o, _(e, r, 1), _(z, r, 1))
                    } catch (e) {
                        z.call(r, e)
                    }
                }) : (t._v = o,
                t._s = 1,
                T(t, !1))
            } catch (e) {
                z.call({
                    _w: t,
                    _d: !1
                }, e)
            }
        }
    };
    G || (E = function(e) {
        v(this, E, "Promise", "_h"),
        m(e),
        n.call(this);
        try {
            e(_(A, this, 1), _(z, this, 1))
        } catch (e) {
            z.call(this, e)
        }
    }
    ,
    n = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    n.prototype = e("/core-js$2.6.11/modules/_redefine-all")(E.prototype, {
        then: function(e, o) {
            var s = C(p(this, E));
            return s.ok = "function" != typeof e || e,
            s.fail = "function" == typeof o && o,
            s.domain = O ? k.domain : void 0,
            this._c.push(s),
            this._a && this._a.push(s),
            this._s && T(this, !1),
            s.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    c = function() {
        var e = new n;
        this.promise = e,
        this.resolve = _(A, e, 1),
        this.reject = _(z, e, 1)
    }
    ,
    P.f = C = function(e) {
        return e === E || e === u ? new c(e) : i(e)
    }
    ),
    f(f.G + f.W + f.F * !G, {
        Promise: E
    }),
    e("/core-js$2.6.11/modules/_set-to-string-tag")(E, "Promise"),
    e("/core-js$2.6.11/modules/_set-species")("Promise"),
    u = e("/core-js$2.6.11/modules/_core").Promise,
    f(f.S + f.F * !G, "Promise", {
        reject: function(e) {
            var o = C(this);
            return (0,
            o.reject)(e),
            o.promise
        }
    }),
    f(f.S + f.F * (l || !G), "Promise", {
        resolve: function(e) {
            return g(l && this === u ? E : this, e)
        }
    }),
    f(f.S + f.F * !(G && e("/core-js$2.6.11/modules/_iter-detect")(function(e) {
        E.all(e).catch(R)
    })), "Promise", {
        all: function(e) {
            var o = this
              , s = C(o)
              , t = s.resolve
              , r = s.reject
              , n = w(function() {
                var s = []
                  , n = 0
                  , i = 1;
                j(e, !1, function(e) {
                    var c = n++
                      , u = !1;
                    s.push(void 0),
                    i++,
                    o.resolve(e).then(function(e) {
                        u || (u = !0,
                        s[c] = e,
                        --i || t(s))
                    }, r)
                }),
                --i || t(s)
            });
            return n.e && r(n.v),
            s.promise
        },
        race: function(e) {
            var o = this
              , s = C(o)
              , t = s.reject
              , r = w(function() {
                j(e, !1, function(e) {
                    o.resolve(e).then(s.resolve, t)
                })
            });
            return r.e && t(r.v),
            s.promise
        }
    })
});
$_mod_webchat.def("/core-js$2.6.11/es6/promise", function(e, s, o, r, t) {
    "use strict";
    e("/core-js$2.6.11/modules/es6.object.to-string"),
    e("/core-js$2.6.11/modules/es6.string.iterator"),
    e("/core-js$2.6.11/modules/web.dom.iterable"),
    e("/core-js$2.6.11/modules/es6.promise"),
    o.exports = e("/core-js$2.6.11/modules/_core").Promise
});
$_mod_webchat.def("/core-js$2.6.11/modules/_meta", function(e, t, o, n, r) {
    "use strict";
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , i = e("/core-js$2.6.11/modules/_uid")("meta")
      , f = e("/core-js$2.6.11/modules/_is-object")
      , s = e("/core-js$2.6.11/modules/_has")
      , c = e("/core-js$2.6.11/modules/_object-dp").f
      , l = 0
      , m = Object.isExtensible || function() {
        return !0
    }
      , y = !e("/core-js$2.6.11/modules/_fails")(function() {
        return m(Object.preventExtensions({}))
    })
      , b = function(e) {
        c(e, i, {
            value: {
                i: "O" + ++l,
                w: {}
            }
        })
    }
      , d = function(e, t) {
        if (!f(e))
            return "symbol" == (void 0 === e ? "undefined" : u(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!s(e, i)) {
            if (!m(e))
                return "F";
            if (!t)
                return "E";
            b(e)
        }
        return e[i].i
    }
      , p = function(e, t) {
        if (!s(e, i)) {
            if (!m(e))
                return !0;
            if (!t)
                return !1;
            b(e)
        }
        return e[i].w
    }
      , a = function(e) {
        return y && j.NEED && m(e) && !s(e, i) && b(e),
        e
    }
      , j = o.exports = {
        KEY: i,
        NEED: !1,
        fastKey: d,
        getWeak: p,
        onFreeze: a
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_wks-ext", function(e, s, o, c, t) {
    "use strict";
    s.f = e("/core-js$2.6.11/modules/_wks")
});
$_mod_webchat.def("/core-js$2.6.11/modules/_wks-define", function(e, o, s, r, c) {
    "use strict";
    var l = e("/core-js$2.6.11/modules/_global")
      , d = e("/core-js$2.6.11/modules/_core")
      , m = e("/core-js$2.6.11/modules/_library")
      , u = e("/core-js$2.6.11/modules/_wks-ext")
      , t = e("/core-js$2.6.11/modules/_object-dp").f;
    s.exports = function(e) {
        var o = d.Symbol || (d.Symbol = m ? {} : l.Symbol || {});
        "_" == e.charAt(0) || e in o || t(o, e, {
            value: u.f(e)
        })
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-gops", function(e, o, t, c, s) {
    "use strict";
    o.f = Object.getOwnPropertySymbols
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-pie", function(e, o, t, c, r) {
    "use strict";
    o.f = {}.propertyIsEnumerable
});
$_mod_webchat.def("/core-js$2.6.11/modules/_enum-keys", function(e, o, s, c, r) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_object-keys")
      , u = e("/core-js$2.6.11/modules/_object-gops")
      , f = e("/core-js$2.6.11/modules/_object-pie");
    s.exports = function(e) {
        var o = t(e)
          , s = u.f;
        if (s)
            for (var c, r = s(e), j = f.f, l = 0; r.length > l; )
                j.call(e, c = r[l++]) && o.push(c);
        return o
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_is-array", function(r, e, o, s, a) {
    "use strict";
    var c = r("/core-js$2.6.11/modules/_cof");
    o.exports = Array.isArray || function(r) {
        return "Array" == c(r)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-gopn", function(e, o, t, c, n) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_object-keys-internal")
      , s = e("/core-js$2.6.11/modules/_enum-bug-keys").concat("length", "prototype");
    o.f = Object.getOwnPropertyNames || function(e) {
        return r(e, s)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-gopn-ext", function(o, t, e, n, r) {
    "use strict";
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
      , i = o("/core-js$2.6.11/modules/_to-iobject")
      , u = o("/core-js$2.6.11/modules/_object-gopn").f
      , f = {}.toString
      , y = "object" == ("undefined" == typeof window ? "undefined" : c(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , b = function(o) {
        try {
            return u(o)
        } catch (o) {
            return y.slice()
        }
    };
    e.exports.f = function(o) {
        return y && "[object Window]" == f.call(o) ? b(o) : u(i(o))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-gopd", function(e, o, r, s, c) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_object-pie")
      , d = e("/core-js$2.6.11/modules/_property-desc")
      , i = e("/core-js$2.6.11/modules/_to-iobject")
      , u = e("/core-js$2.6.11/modules/_to-primitive")
      , j = e("/core-js$2.6.11/modules/_has")
      , m = e("/core-js$2.6.11/modules/_ie8-dom-define")
      , l = Object.getOwnPropertyDescriptor;
    o.f = e("/core-js$2.6.11/modules/_descriptors") ? l : function(e, o) {
        if (e = i(e),
        o = u(o, !0),
        m)
            try {
                return l(e, o)
            } catch (e) {}
        if (j(e, o))
            return d(!t.f.call(e, o), e[o])
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.symbol", function(e, o, t, r, s) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , u = e("/core-js$2.6.11/modules/_global")
      , i = e("/core-js$2.6.11/modules/_has")
      , c = e("/core-js$2.6.11/modules/_descriptors")
      , l = e("/core-js$2.6.11/modules/_export")
      , f = e("/core-js$2.6.11/modules/_redefine")
      , m = e("/core-js$2.6.11/modules/_meta").KEY
      , a = e("/core-js$2.6.11/modules/_fails")
      , p = e("/core-js$2.6.11/modules/_shared")
      , d = e("/core-js$2.6.11/modules/_set-to-string-tag")
      , y = e("/core-js$2.6.11/modules/_uid")
      , b = e("/core-js$2.6.11/modules/_wks")
      , j = e("/core-js$2.6.11/modules/_wks-ext")
      , h = e("/core-js$2.6.11/modules/_wks-define")
      , _ = e("/core-js$2.6.11/modules/_enum-keys")
      , $ = e("/core-js$2.6.11/modules/_is-array")
      , g = e("/core-js$2.6.11/modules/_an-object")
      , S = e("/core-js$2.6.11/modules/_is-object")
      , v = e("/core-js$2.6.11/modules/_to-object")
      , O = e("/core-js$2.6.11/modules/_to-iobject")
      , w = e("/core-js$2.6.11/modules/_to-primitive")
      , k = e("/core-js$2.6.11/modules/_property-desc")
      , P = e("/core-js$2.6.11/modules/_object-create")
      , F = e("/core-js$2.6.11/modules/_object-gopn-ext")
      , E = e("/core-js$2.6.11/modules/_object-gopd")
      , N = e("/core-js$2.6.11/modules/_object-gops")
      , J = e("/core-js$2.6.11/modules/_object-dp")
      , x = e("/core-js$2.6.11/modules/_object-keys")
      , I = E.f
      , T = J.f
      , C = F.f
      , M = u.Symbol
      , D = u.JSON
      , G = D && D.stringify
      , K = b("_hidden")
      , Q = b("toPrimitive")
      , W = {}.propertyIsEnumerable
      , Y = p("symbol-registry")
      , q = p("symbols")
      , z = p("op-symbols")
      , A = Object.prototype
      , B = "function" == typeof M && !!N.f
      , H = u.QObject
      , L = !H || !H.prototype || !H.prototype.findChild
      , R = c && a(function() {
        return 7 != P(T({}, "a", {
            get: function() {
                return T(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(e, o, t) {
        var r = I(A, o);
        r && delete A[o],
        T(e, o, t),
        r && e !== A && T(A, o, r)
    }
    : T
      , U = function(e) {
        var o = q[e] = P(M.prototype);
        return o._k = e,
        o
    }
      , V = B && "symbol" == n(M.iterator) ? function(e) {
        return "symbol" == (void 0 === e ? "undefined" : n(e))
    }
    : function(e) {
        return e instanceof M
    }
      , X = function(e, o, t) {
        return e === A && X(z, o, t),
        g(e),
        o = w(o, !0),
        g(t),
        i(q, o) ? (t.enumerable ? (i(e, K) && e[K][o] && (e[K][o] = !1),
        t = P(t, {
            enumerable: k(0, !1)
        })) : (i(e, K) || T(e, K, k(1, {})),
        e[K][o] = !0),
        R(e, o, t)) : T(e, o, t)
    }
      , Z = function(e, o) {
        g(e);
        for (var t, r = _(o = O(o)), s = 0, n = r.length; n > s; )
            X(e, t = r[s++], o[t]);
        return e
    }
      , ee = function(e, o) {
        return void 0 === o ? P(e) : Z(P(e), o)
    }
      , oe = function(e) {
        var o = W.call(this, e = w(e, !0));
        return !(this === A && i(q, e) && !i(z, e)) && (!(o || !i(this, e) || !i(q, e) || i(this, K) && this[K][e]) || o)
    }
      , te = function(e, o) {
        if (e = O(e),
        o = w(o, !0),
        e !== A || !i(q, o) || i(z, o)) {
            var t = I(e, o);
            return !t || !i(q, o) || i(e, K) && e[K][o] || (t.enumerable = !0),
            t
        }
    }
      , re = function(e) {
        for (var o, t = C(O(e)), r = [], s = 0; t.length > s; )
            i(q, o = t[s++]) || o == K || o == m || r.push(o);
        return r
    }
      , se = function(e) {
        for (var o, t = e === A, r = C(t ? z : O(e)), s = [], n = 0; r.length > n; )
            !i(q, o = r[n++]) || t && !i(A, o) || s.push(q[o]);
        return s
    };
    B || (M = function() {
        if (this instanceof M)
            throw TypeError("Symbol is not a constructor!");
        var e = y(arguments.length > 0 ? arguments[0] : void 0)
          , o = function o(t) {
            this === A && o.call(z, t),
            i(this, K) && i(this[K], e) && (this[K][e] = !1),
            R(this, e, k(1, t))
        };
        return c && L && R(A, e, {
            configurable: !0,
            set: o
        }),
        U(e)
    }
    ,
    f(M.prototype, "toString", function() {
        return this._k
    }),
    E.f = te,
    J.f = X,
    e("/core-js$2.6.11/modules/_object-gopn").f = F.f = re,
    e("/core-js$2.6.11/modules/_object-pie").f = oe,
    N.f = se,
    c && !e("/core-js$2.6.11/modules/_library") && f(A, "propertyIsEnumerable", oe, !0),
    j.f = function(e) {
        return U(b(e))
    }
    ),
    l(l.G + l.W + l.F * !B, {
        Symbol: M
    });
    for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ue = 0; ne.length > ue; )
        b(ne[ue++]);
    for (var ie = x(b.store), ce = 0; ie.length > ce; )
        h(ie[ce++]);
    l(l.S + l.F * !B, "Symbol", {
        for: function(e) {
            return i(Y, e += "") ? Y[e] : Y[e] = M(e)
        },
        keyFor: function(e) {
            if (!V(e))
                throw TypeError(e + " is not a symbol!");
            for (var o in Y)
                if (Y[o] === e)
                    return o
        },
        useSetter: function() {
            L = !0
        },
        useSimple: function() {
            L = !1
        }
    }),
    l(l.S + l.F * !B, "Object", {
        create: ee,
        defineProperty: X,
        defineProperties: Z,
        getOwnPropertyDescriptor: te,
        getOwnPropertyNames: re,
        getOwnPropertySymbols: se
    });
    var le = a(function() {
        N.f(1)
    });
    l(l.S + l.F * le, "Object", {
        getOwnPropertySymbols: function(e) {
            return N.f(v(e))
        }
    }),
    D && l(l.S + l.F * (!B || a(function() {
        var e = M();
        return "[null]" != G([e]) || "{}" != G({
            a: e
        }) || "{}" != G(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var o, t, r = [e], s = 1; arguments.length > s; )
                r.push(arguments[s++]);
            if (t = o = r[1],
            (S(o) || void 0 !== e) && !V(e))
                return $(o) || (o = function(e, o) {
                    if ("function" == typeof t && (o = t.call(this, e, o)),
                    !V(o))
                        return o
                }
                ),
                r[1] = o,
                G.apply(D, r)
        }
    }),
    M.prototype[Q] || e("/core-js$2.6.11/modules/_hide")(M.prototype, Q, M.prototype.valueOf),
    d(M, "Symbol"),
    d(Math, "Math", !0),
    d(u.JSON, "JSON", !0)
});
$_mod_webchat.def("/core-js$2.6.11/es6/symbol", function(e, o, s, c, r) {
    "use strict";
    e("/core-js$2.6.11/modules/es6.symbol"),
    e("/core-js$2.6.11/modules/es6.object.to-string"),
    s.exports = e("/core-js$2.6.11/modules/_core").Symbol
});
$_mod_webchat.def("/core-js$2.6.11/modules/es7.array.includes", function(e, s, o, r, c) {
    "use strict";
    var d = e("/core-js$2.6.11/modules/_export")
      , u = e("/core-js$2.6.11/modules/_array-includes")(!0);
    d(d.P, "Array", {
        includes: function(e) {
            return u(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    e("/core-js$2.6.11/modules/_add-to-unscopables")("includes")
});
$_mod_webchat.def("/core-js$2.6.11/modules/_flatten-into-array", function(e, o, r, s, t) {
    "use strict";
    function c(e, o, r, s, t, u, f, _) {
        for (var j, m, $ = t, h = 0, b = !!f && n(f, _, 3); h < s; ) {
            if (h in r) {
                if (j = b ? b(r[h], h, o) : r[h],
                m = !1,
                a(j) && (m = j[d],
                m = void 0 !== m ? !!m : i(j)),
                m && u > 0)
                    $ = c(e, o, j, l(j.length), $, u - 1) - 1;
                else {
                    if ($ >= 9007199254740991)
                        throw TypeError();
                    e[$] = j
                }
                $++
            }
            h++
        }
        return $
    }
    var i = e("/core-js$2.6.11/modules/_is-array")
      , a = e("/core-js$2.6.11/modules/_is-object")
      , l = e("/core-js$2.6.11/modules/_to-length")
      , n = e("/core-js$2.6.11/modules/_ctx")
      , d = e("/core-js$2.6.11/modules/_wks")("isConcatSpreadable");
    r.exports = c
});
$_mod_webchat.def("/core-js$2.6.11/modules/_array-species-constructor", function(o, r, e, s, c) {
    "use strict";
    var t = o("/core-js$2.6.11/modules/_is-object")
      , u = o("/core-js$2.6.11/modules/_is-array")
      , i = o("/core-js$2.6.11/modules/_wks")("species");
    e.exports = function(o) {
        var r;
        return u(o) && (r = o.constructor,
        "function" != typeof r || r !== Array && !u(r.prototype) || (r = void 0),
        t(r) && null === (r = r[i]) && (r = void 0)),
        void 0 === r ? Array : r
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_array-species-create", function(e, r, s, c, o) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_array-species-constructor");
    s.exports = function(e, r) {
        return new (t(e))(r)
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es7.array.flat-map", function(e, o, s, r, t) {
    "use strict";
    var a = e("/core-js$2.6.11/modules/_export")
      , c = e("/core-js$2.6.11/modules/_flatten-into-array")
      , l = e("/core-js$2.6.11/modules/_to-object")
      , u = e("/core-js$2.6.11/modules/_to-length")
      , d = e("/core-js$2.6.11/modules/_a-function")
      , n = e("/core-js$2.6.11/modules/_array-species-create");
    a(a.P, "Array", {
        flatMap: function(e) {
            var o, s, r = l(this);
            return d(e),
            o = u(r.length),
            s = n(r, 0),
            c(s, r, r, o, 0, 1, e, arguments[1]),
            s
        }
    }),
    e("/core-js$2.6.11/modules/_add-to-unscopables")("flatMap")
});
$_mod_webchat.def("/core-js$2.6.11/modules/es7.array.flatten", function(e, o, t, r, s) {
    "use strict";
    var a = e("/core-js$2.6.11/modules/_export")
      , c = e("/core-js$2.6.11/modules/_flatten-into-array")
      , l = e("/core-js$2.6.11/modules/_to-object")
      , n = e("/core-js$2.6.11/modules/_to-length")
      , d = e("/core-js$2.6.11/modules/_to-integer")
      , u = e("/core-js$2.6.11/modules/_array-species-create");
    a(a.P, "Array", {
        flatten: function() {
            var e = arguments[0]
              , o = l(this)
              , t = n(o.length)
              , r = u(o, 0);
            return c(r, o, o, t, 0, void 0 === e ? 1 : d(e)),
            r
        }
    }),
    e("/core-js$2.6.11/modules/_add-to-unscopables")("flatten")
});
$_mod_webchat.def("/core-js$2.6.11/es7/array", function(e, r, s, a, o) {
    "use strict";
    e("/core-js$2.6.11/modules/es7.array.includes"),
    e("/core-js$2.6.11/modules/es7.array.flat-map"),
    e("/core-js$2.6.11/modules/es7.array.flatten"),
    s.exports = e("/core-js$2.6.11/modules/_core").Array
});
$_mod_webchat.def("/core-js$2.6.11/modules/_array-methods", function(e, r, s, o, t) {
    "use strict";
    var c = e("/core-js$2.6.11/modules/_ctx")
      , u = e("/core-js$2.6.11/modules/_iobject")
      , n = e("/core-js$2.6.11/modules/_to-object")
      , a = e("/core-js$2.6.11/modules/_to-length")
      , i = e("/core-js$2.6.11/modules/_array-species-create");
    s.exports = function(e, r) {
        var s = 1 == e
          , o = 2 == e
          , t = 3 == e
          , d = 4 == e
          , l = 6 == e
          , f = 5 == e || l
          , j = r || i;
        return function(r, i, m) {
            for (var _, $, h = n(r), v = u(h), b = c(i, m, 3), p = a(v.length), g = 0, w = s ? j(r, p) : o ? j(r, 0) : void 0; p > g; g++)
                if ((f || g in v) && (_ = v[g],
                $ = b(_, g, h),
                e))
                    if (s)
                        w[g] = $;
                    else if ($)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return _;
                        case 6:
                            return g;
                        case 2:
                            w.push(_)
                        }
                    else if (d)
                        return !1;
            return l ? -1 : t || d ? d : w
        }
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.array.find", function(e, o, r, d, n) {
    "use strict";
    var s = e("/core-js$2.6.11/modules/_export")
      , i = e("/core-js$2.6.11/modules/_array-methods")(5)
      , t = !0;
    "find"in [] && Array(1).find(function() {
        t = !1
    }),
    s(s.P + s.F * t, "Array", {
        find: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    e("/core-js$2.6.11/modules/_add-to-unscopables")("find")
});
$_mod_webchat.def("/core-js$2.6.11/fn/array/find", function(r, e, o, s, c) {
    "use strict";
    r("/core-js$2.6.11/modules/es6.array.find"),
    o.exports = r("/core-js$2.6.11/modules/_core").Array.find
});
$_mod_webchat.def("/core-js$2.6.11/modules/_strict-method", function(t, c, l, n, o) {
    "use strict";
    var e = t("/core-js$2.6.11/modules/_fails");
    l.exports = function(t, c) {
        return !!t && e(function() {
            c ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.array.for-each", function(r, e, o, s, c) {
    "use strict";
    var t = r("/core-js$2.6.11/modules/_export")
      , a = r("/core-js$2.6.11/modules/_array-methods")(0)
      , d = r("/core-js$2.6.11/modules/_strict-method")([].forEach, !0);
    t(t.P + t.F * !d, "Array", {
        forEach: function(r) {
            return a(this, r, arguments[1])
        }
    })
});
$_mod_webchat.def("/core-js$2.6.11/fn/array/for-each", function(r, e, o, c, a) {
    "use strict";
    r("/core-js$2.6.11/modules/es6.array.for-each"),
    o.exports = r("/core-js$2.6.11/modules/_core").Array.forEach
});
$_mod_webchat.def("/core-js$2.6.11/modules/_is-regexp", function(e, o, s, c, r) {
    "use strict";
    var t = e("/core-js$2.6.11/modules/_is-object")
      , u = e("/core-js$2.6.11/modules/_cof")
      , d = e("/core-js$2.6.11/modules/_wks")("match");
    s.exports = function(e) {
        var o;
        return t(e) && (void 0 !== (o = e[d]) ? !!o : "RegExp" == u(e))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_string-context", function(e, r, t, o, s) {
    "use strict";
    var n = e("/core-js$2.6.11/modules/_is-regexp")
      , c = e("/core-js$2.6.11/modules/_defined");
    t.exports = function(e, r, t) {
        if (n(r))
            throw TypeError("String#" + t + " doesn't accept regex!");
        return String(c(e))
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/_fails-is-regexp", function(r, t, e, c, s) {
    "use strict";
    var o = r("/core-js$2.6.11/modules/_wks")("match");
    e.exports = function(r) {
        var t = /./;
        try {
            "/./"[r](t)
        } catch (e) {
            try {
                return t[o] = !1,
                !"/./"[r](t)
            } catch (r) {}
        }
        return !0
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.string.starts-with", function(t, s, e, r, i) {
    "use strict";
    var o = t("/core-js$2.6.11/modules/_export")
      , n = t("/core-js$2.6.11/modules/_to-length")
      , l = t("/core-js$2.6.11/modules/_string-context")
      , c = "".startsWith;
    o(o.P + o.F * t("/core-js$2.6.11/modules/_fails-is-regexp")("startsWith"), "String", {
        startsWith: function(t) {
            var s = l(this, t, "startsWith")
              , e = n(Math.min(arguments.length > 1 ? arguments[1] : void 0, s.length))
              , r = String(t);
            return c ? c.call(s, r, e) : s.slice(e, e + r.length) === r
        }
    })
});
$_mod_webchat.def("/core-js$2.6.11/fn/string/starts-with", function(s, t, r, e, o) {
    "use strict";
    s("/core-js$2.6.11/modules/es6.string.starts-with"),
    r.exports = s("/core-js$2.6.11/modules/_core").String.startsWith
});
$_mod_webchat.def("/core-js$2.6.11/modules/_object-assign", function(o, e, s, c, t) {
    "use strict";
    var r = o("/core-js$2.6.11/modules/_descriptors")
      , j = o("/core-js$2.6.11/modules/_object-keys")
      , n = o("/core-js$2.6.11/modules/_object-gops")
      , l = o("/core-js$2.6.11/modules/_object-pie")
      , u = o("/core-js$2.6.11/modules/_to-object")
      , i = o("/core-js$2.6.11/modules/_iobject")
      , a = Object.assign;
    s.exports = !a || o("/core-js$2.6.11/modules/_fails")(function() {
        var o = {}
          , e = {}
          , s = Symbol()
          , c = "abcdefghijklmnopqrst";
        return o[s] = 7,
        c.split("").forEach(function(o) {
            e[o] = o
        }),
        7 != a({}, o)[s] || Object.keys(a({}, e)).join("") != c
    }) ? function(o, e) {
        for (var s = u(o), c = arguments.length, t = 1, a = n.f, d = l.f; c > t; )
            for (var f, b = i(arguments[t++]), m = a ? j(b).concat(a(b)) : j(b), _ = m.length, $ = 0; _ > $; )
                f = m[$++],
                r && !d.call(b, f) || (s[f] = b[f]);
        return s
    }
    : a
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.object.assign", function(s, e, o, c, t) {
    "use strict";
    var j = s("/core-js$2.6.11/modules/_export");
    j(j.S + j.F, "Object", {
        assign: s("/core-js$2.6.11/modules/_object-assign")
    })
});
$_mod_webchat.def("/core-js$2.6.11/fn/object/assign", function(s, e, o, c, t) {
    "use strict";
    s("/core-js$2.6.11/modules/es6.object.assign"),
    o.exports = s("/core-js$2.6.11/modules/_core").Object.assign
});
$_mod_webchat.def("/core-js$2.6.11/modules/_is-integer", function(e, o, t, s, i) {
    "use strict";
    var r = e("/core-js$2.6.11/modules/_is-object")
      , c = Math.floor;
    t.exports = function(e) {
        return !r(e) && isFinite(e) && c(e) === e
    }
});
$_mod_webchat.def("/core-js$2.6.11/modules/es6.number.is-integer", function(e, s, r, o, t) {
    "use strict";
    var i = e("/core-js$2.6.11/modules/_export");
    i(i.S, "Number", {
        isInteger: e("/core-js$2.6.11/modules/_is-integer")
    })
});
$_mod_webchat.def("/core-js$2.6.11/fn/number/is-integer", function(e, r, s, o, n) {
    "use strict";
    e("/core-js$2.6.11/modules/es6.number.is-integer"),
    s.exports = e("/core-js$2.6.11/modules/_core").Number.isInteger
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/polyfills/index", function(e, r, s, o, c) {
    "use strict";
    window.Promise || e("/core-js$2.6.11/es6/promise"),
    e("/core-js$2.6.11/es6/symbol"),
    e("/core-js$2.6.11/es7/array"),
    e("/core-js$2.6.11/fn/array/find"),
    e("/core-js$2.6.11/fn/array/for-each"),
    e("/core-js$2.6.11/fn/string/starts-with"),
    e("/core-js$2.6.11/fn/object/assign"),
    e("/core-js$2.6.11/fn/number/is-integer")
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "webrtcsupport", "2.2.0");
$_mod_webchat.main("/webrtcsupport$2.2.0", "index-node");
$_mod_webchat.remap("/webrtcsupport$2.2.0/index-node", "/webrtcsupport$2.2.0/index-browser");
$_mod_webchat.def("/webrtcsupport$2.2.0/index-browser", function(e, o, t, i, n) {
    "use strict";
    var r, a;
    window.mozRTCPeerConnection || navigator.mozGetUserMedia ? (r = "moz",
    a = parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1], 10)) : (window.webkitRTCPeerConnection || navigator.webkitGetUserMedia) && (r = "webkit",
    a = navigator.userAgent.match(/Chrom(e|ium)/) && parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10));
    var d = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
      , s = window.mozRTCIceCandidate || window.RTCIceCandidate
      , w = window.mozRTCSessionDescription || window.RTCSessionDescription
      , p = window.webkitMediaStream || window.MediaStream
      , c = "https:" === window.location.protocol && ("webkit" === r && a >= 26 || "moz" === r && a >= 33)
      , C = window.AudioContext || window.webkitAudioContext
      , m = document.createElement("video")
      , u = m && m.canPlayType && "probably" === m.canPlayType('video/webm; codecs="vp8", vorbis')
      , b = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;
    t.exports = {
        prefix: r,
        browserVersion: a,
        support: !!d && !!b,
        supportRTCPeerConnection: !!d,
        supportVp8: u,
        supportGetUserMedia: !!b,
        supportDataChannel: !!(d && d.prototype && d.prototype.createDataChannel),
        supportWebAudio: !(!C || !C.prototype.createMediaStreamSource),
        supportMediaStream: !(!p || !p.prototype.removeTrack),
        supportScreenSharing: !!c,
        AudioContext: C,
        PeerConnection: d,
        SessionDescription: w,
        IceCandidate: s,
        MediaStream: p,
        getUserMedia: b
    }
});
$_mod_webchat.searchPath("/purecloud-webchat$2.0.0/");
$_mod_webchat.main("/purecloud-webchat$2.0.0/src/storage", "");
$_mod_webchat.installed("purecloud-webchat$2.0.0", "fashion-model", "5.0.21");
$_mod_webchat.installed("fashion-model$5.0.21", "raptor-util", "3.2.0");
$_mod_webchat.def("/raptor-util$3.2.0/copyProps", function(t, e, r, o, c) {
    "use strict";
    r.exports = function(t, e) {
        Object.getOwnPropertyNames(t).forEach(function(r) {
            var o = Object.getOwnPropertyDescriptor(t, r);
            Object.defineProperty(e, r, o)
        })
    }
});
$_mod_webchat.def("/raptor-util$3.2.0/inherit", function(t, r, o, e, p) {
    "use strict";
    function i(t, r, o) {
        var e = t.prototype
          , p = t.prototype = Object.create(r.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        });
        return e && !1 !== o && c(e, p),
        t.$super = r,
        t.prototype = p,
        t
    }
    var c = t("/raptor-util$3.2.0/copyProps");
    o.exports = i,
    i._inherit = i
});
$_mod_webchat.def("/fashion-model$5.0.21/Array", function(r, e, n, t, a) {
    "use strict";
    function o(r) {
        var e = new Array(r.length);
        return e.Model = i,
        e
    }
    function c(r, e, n) {
        var t;
        t = o(r);
        var a, c;
        if (e && ((a = e.wrap) || (c = e.coerce)))
            for (var i = r.length; --i >= 0; ) {
                var l = r[i];
                t[i] = a ? a.call(e, l, n) : c.call(e, l, n)
            }
        else
            t = r.slice(0);
        return t
    }
    var i, l = r("/fashion-model$5.0.21/Model");
    i = n.exports = l.extend({
        typeName: "array",
        wrap: !0,
        constructable: !1,
        isInstance: function(r) {
            return r && r.Model === i
        },
        convertArrayItems: c,
        clean: function(r, e) {
            var n, t;
            if ((n = e.property) && (t = n.items)) {
                e.property = t;
                var a = t.type;
                if (a.clean) {
                    for (var o = r.length, c = new Array(o); --o >= 0; )
                        c[o] = a.clean(r[o], e);
                    return c
                }
                e.property = n
            }
            return l.cleanArray(r, e)
        },
        coerce: function(r, e) {
            if (null == r)
                return r;
            if (i.isInstance(r))
                return r;
            var n, t = Array.isArray(r);
            if (e.strict) {
                if (!t)
                    return void this.coercionError(r, e);
                n = r
            } else
                n = t ? r : [r];
            var a, o, f;
            return (a = e.property) && (o = a.items) ? l._forProperty(o, e, function(r) {
                f = c(n, o.type, r)
            }) : (f = n.slice(0),
            f.Model = i),
            f
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Boolean", function(o, e, t, n, r) {
    "use strict";
    t.exports = o("/fashion-model$5.0.21/Model").extend({
        typeName: "boolean",
        wrap: !1,
        coerce: function(o, e) {
            return e.strict ? (null != o && o.constructor !== Boolean && this.coercionError(o, e),
            o) : null == o ? o : o.constructor === String ? "true" === o : !!o
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Date", function(e, r, t, o, n) {
    "use strict";
    var c = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(Z)?$/;
    t.exports = e("/fashion-model$5.0.21/Model").extend({
        typeName: "date",
        wrap: !1,
        coerce: function(e, r) {
            if (r.strict)
                return null != e && e.constructor !== Date && this.coercionError(e, r),
                e;
            if (null != e)
                if (e.constructor === String) {
                    var t = c.exec(e);
                    if (!t)
                        return null;
                    var o = t[7];
                    o = void 0 === o ? 0 : +o,
                    e = "Z" === t[8] ? new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], +t[6], o)) : new Date(+t[1],+t[2] - 1,+t[3],+t[4],+t[5],+t[6],o)
                } else
                    e.constructor === Number ? e = new Date(e) : e.constructor === Date || this.coercionError(e, r);
            return e
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Integer", function(r, e, t, n, o) {
    "use strict";
    t.exports = r("/fashion-model$5.0.21/Model").extend({
        typeName: "integer",
        wrap: !1,
        coerce: function(r, e) {
            if (e.strict)
                return null != r && r.constructor !== Number && this.coercionError(r, e),
                r;
            if (null == r)
                return r;
            var t = parseInt(r, 10);
            return isNaN(t) && this.coercionError(r, e),
            t
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Number", function(r, e, o, t, n) {
    "use strict";
    o.exports = r("/fashion-model$5.0.21/Model").extend({
        typeName: "number",
        wrap: !1,
        coerce: function(r, e) {
            if (e.strict)
                return null != r && r.constructor !== Number && this.coercionError(r, e),
                r;
            if (null == r)
                return r;
            if (r.constructor === Number)
                return r;
            var o = Number(r);
            return isNaN(o) && this.coercionError(r, e),
            o
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/String", function(t, r, n, o, e) {
    "use strict";
    n.exports = t("/fashion-model$5.0.21/Model").extend({
        typeName: "string",
        wrap: !1,
        coerce: function(t, r) {
            return r.strict ? (null != t && t.constructor !== String && this.coercionError(t, r),
            t) : null == t ? t : t.toString()
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Object", function(e, o, t, d, a) {
    "use strict";
    t.exports = e("/fashion-model$5.0.21/Model").extend({
        typeName: "object",
        wrap: !1
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Function", function(n, o, t, e, c) {
    "use strict";
    t.exports = n("/fashion-model$5.0.21/Model").extend({
        typeName: "function",
        wrap: !1,
        coerce: function(n, o) {
            return null != n && n.constructor !== Function && this.coercionError(n, o, "Value is not a function"),
            n
        }
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/primitives", function(o, e, i, n, a) {
    "use strict";
    function t() {
        return !0
    }
    [o("/fashion-model$5.0.21/Array"), o("/fashion-model$5.0.21/Boolean"), o("/fashion-model$5.0.21/Date"), o("/fashion-model$5.0.21/Integer"), o("/fashion-model$5.0.21/Number"), o("/fashion-model$5.0.21/String"), o("/fashion-model$5.0.21/Object"), o("/fashion-model$5.0.21/Function")].forEach(function(o) {
        o.isPrimitive = t,
        e[o.typeName] = o
    })
});
$_mod_webchat.def("/fashion-model$5.0.21/Model", function(r, t, e, n, i) {
    "use strict";
    function o() {
        return Object.create(null)
    }
    function a(r, t, e) {
        t = O(t);
        var n = t.property;
        return t.property = r,
        e(t),
        t.property = n,
        t
    }
    function s(r, t, e, n) {
        var i = r.constructor;
        if (i._onSet)
            for (var o = {
                model: r,
                propertyName: n.getName(),
                oldValue: t,
                newValue: e,
                property: n
            }, a = i._onSet.length, s = 0; s < a; s++)
                i._onSet[s](r, o)
    }
    function u(r, t, e, n, i) {
        var o = e.getType()
          , u = o.isWrapped();
        x.isModel(n) && o.isInstance(n) || !u && o.coerce && (i = a(e, i, function(r) {
            n = o.coerce(n, r)
        }));
        var p = e.getKey()
          , c = t[p]
          , f = e.getSetter();
        return f && (f.call(r, n, e),
        n = t[p]),
        u && (i = a(e, i, function(r) {
            n = o.wrap(n, r)
        })),
        c !== n && (t[p] = n,
        s(r, c, n, e)),
        n
    }
    function p(r) {
        var t = r.getKey()
          , e = r.getGetter();
        return e ? function(t) {
            return e.call(this, r)
        }
        : function(r) {
            return this.data[t]
        }
    }
    function c(r) {
        return function(t, e) {
            return u(this, this.data, r, t, e)
        }
    }
    function f(r, t) {
        var e = t.getKey()
          , n = r.data[e];
        return n || (r.data[e] = n = [],
        n.Model = I),
        n
    }
    function l(r) {
        var t, e = r.items, n = e && e.type;
        return n && (t = n.coerce),
        n && n.isWrapped() ? function(t, e) {
            f(this, r).push(n.wrap(t, e))
        }
        : function(e, i) {
            f(this, r).push(t ? t.call(n, e, i) : e)
        }
    }
    function y(r) {
        return r.charAt(0).toUpperCase() + r.substring(1)
    }
    function h(r, t) {
        return I.convertArrayItems(r, this, t)
    }
    function d(r, t, e) {
        var n = r.constructor
          , i = n.properties
          , o = i[t];
        if (!o && !n.additionalProperties) {
            var a = new Error("Invalid property: " + t);
            if (!e)
                throw a;
            e.push(a)
        }
        return o
    }
    function v(r) {
        for (var t in r)
            r.hasOwnProperty(t) && (this[t] = r[t])
    }
    function g(r) {
        this.owner = r
    }
    function P(r) {
        if (r.Model)
            return r;
        switch (r) {
        case Date:
            return k.date;
        case Number:
            return k.number;
        case Boolean:
            return k.boolean;
        case String:
            return k.string;
        case Object:
            return k.object;
        case Function:
            return k.function;
        case Array:
            return I
        }
        return null
    }
    function m(r, t, e, n) {
        var i = r.length;
        "[" === r.charAt(i - 2) && "]" === r.charAt(i - 1) ? (t.type = I,
        t.items = o(),
        m(r.substring(0, i - 2), t.items, e, n)) : t.type = w(r, e, n)
    }
    function w(r, t, e) {
        var n = k[r];
        if (n)
            return n;
        if ("self" === r)
            return e;
        if (t && (n = t(r)))
            return n;
        throw new Error("Invalid type: " + r)
    }
    function b(r, t, e, n) {
        Array.isArray(t) ? t = {
            type: t
        } : "object" !== (void 0 === t ? "undefined" : C(t)) && (t = {
            type: t
        });
        var i = t.type;
        if (i)
            if (Array.isArray(i)) {
                if (t.type = I,
                i.length) {
                    var o = i[0];
                    null != o && (t.items = b(r, o, e, n))
                }
            } else if (i.constructor === String)
                m(i, t, e, n);
            else {
                if (t.type = P(i),
                !t.type)
                    throw new Error("Unrecognized type " + JSON.stringify(i) + ' for property "' + r + '". Expected type derived from Model or primitive type.');
                t.items && (t.items = b(r, t.items, e, n))
            }
        else
            t.type = k.object;
        return t
    }
    function A(r, t, e, n) {
        return t = b(r, t, e, n),
        t.name = r,
        t.key = t.key || r,
        new v(t)
    }
    function S(r, t) {
        for (var e in r)
            r.hasOwnProperty(e) && !U[e] && (t[e] = r[e])
    }
    function O(r) {
        return null == r ? o() : Array.isArray(r) ? {
            errors: r
        } : r
    }
    function E(r, t, e) {
        if (e) {
            (r[t] || (r[t] = [])).push(e)
        }
    }
    function M(r, t, e) {
        if (e)
            for (var n = r[t] || (r[t] = []), i = 0; i < e.length; i++)
                n.push(e[i])
    }
    function _(r, t, e, n) {
        r.initType && r.initType(t);
        var i;
        if (r.id) {
            if (i = "_mixin_" + r.id,
            e.properties && e.properties[i] || t.Properties.prototype[i])
                return;
            t.Properties.prototype[i] = !0
        }
        var o = r.prototype;
        if (o)
            for (i in o)
                o.hasOwnProperty(i) && (t.prototype[i] = o[i]);
        var a;
        if (a = r.properties)
            for (i in a)
                a.hasOwnProperty(i) && void 0 === n[i] && (n[i] = a[i]);
        E(t, "_init", r.init),
        E(t, "_onSet", r.onSet);
        var s;
        (s = r.mixins) && s.forEach(function(r) {
            _(r, t, e, n)
        })
    }
    function j(r, t, e) {
        return t && e.isInstance(r) ? r : T
    }
    function N(r, t, e) {
        function n(r, t) {
            i ? void 0 === this.data && (this.data = new i(this,r,t)) : this.data = r,
            n.$super.call(this, r, t);
            var e = n._init;
            if (e)
                for (var o = 0; o < e.length; o++)
                    e[o].call(this, r, t);
            a && a.call(this, r, t)
        }
        t = t || o();
        var i, a = t.init, s = t.wrap, f = t.coerce, d = t.properties, v = t.prototype, g = t.mixins;
        ["getProperty", "getProperties", "hasProperty", "hasProperties", "preventConstruction", "unwrap", "coercionError", "forEachProperty", "isCompatibleWith", "isInstance", "isPrimitive"].forEach(function(r) {
            n[r] = x[r]
        }),
        n.convertArray = h,
        S(t, n),
        r.additionalProperties && (n.additionalProperties = !0),
        M(n, "_onSet", r._onSet),
        n.Model = x,
        f && (n.coerce = function(r, t) {
            return f.call(n, r, O(t))
        }
        ),
        n.extend = function(r) {
            return N(n, r)
        }
        ,
        n.isWrapped = function() {
            return !1 !== s
        }
        ;
        var P;
        s && s.constructor === Function ? P = s : (s = !1 !== s,
        P = function(r, t) {
            if (s && 0 === arguments.length)
                return new n;
            var e;
            if (null != r && (e = j(r, s, n)) !== T)
                return e;
            if (f) {
                if (null == (r = f.call(n, r, t = O(t))))
                    return r;
                if ((e = j(r, s, n)) !== T)
                    return e
            } else if (null == r)
                return r;
            return r = x.unwrap(r),
            s ? Array.isArray(r) ? n.convertArray(r, t) : new n(r,t) : r
        }
        ),
        n.wrap = P,
        n.create || (n.create = P),
        K(n, r);
        var m = n.prototype;
        m.Model = n;
        var w;
        if (d && (w = Object.keys(d)).length > 0 || g) {
            if (n.Properties = function() {}
            ,
            r.Properties ? K(n.Properties, r.Properties) : n.Properties.prototype = {},
            g) {
                var b = o();
                g.forEach(function(t) {
                    _(t, n, r, b)
                });
                var E = Object.keys(b);
                if (E.length)
                    if (d)
                        for (var k = 0; k < E.length; k++) {
                            var C = E[k];
                            d.hasOwnProperty(C) || (d[C] = b[C],
                            w.push(C))
                        }
                    else
                        d = b,
                        w = E
            }
            if (d) {
                var $ = n.Properties.prototype;
                w.forEach(function(r) {
                    var t = A(r, d[r], e, n)
                      , i = t.getKey();
                    $[r] = t,
                    r !== i && ($[i] = t);
                    var o, a = y(r);
                    null !== t.getGetter() && (o = "get" + a,
                    m[o] = p(t)),
                    null !== t.getSetter() && (o = "set" + a,
                    m[o] = c(t)),
                    t.getType() === I && (o = "addTo" + a,
                    m[o] = l(t))
                })
            }
            n.properties = new n.Properties
        } else
            n.Properties = r.Properties,
            n.properties = r.properties || W;
        if (n.hasProperties()) {
            var G = [];
            n.forEachProperty(function(r) {
                G.push(r.getKey())
            }),
            n.Data = i = function(r, t, e) {
                var i, a, s, p, c = n.properties;
                if (i = G,
                a = i.length,
                null == t)
                    for (p = 0; p < a; p++)
                        s = i[p],
                        this[s] = void 0;
                else {
                    var f;
                    e && (Array.isArray(e) ? e = {
                        errors: f = e
                    } : f = e.errors);
                    var l, y = r.data = o();
                    n.additionalProperties && (l = o());
                    for (s in t)
                        if (t.hasOwnProperty && t.hasOwnProperty(s) || void 0 !== t[s]) {
                            var h = c[s];
                            h ? u(r, y, h, t[s], e) : l ? l[s] = t[s] : f && f.push("Unrecognized property: " + s)
                        }
                    for (p = 0; p < a; p++)
                        s = i[p],
                        this[s] = y[s];
                    if (l)
                        for (s in l)
                            this[s] = l[s]
                }
            }
            ,
            i.prototype = null
        }
        return v && Object.keys(v).forEach(function(r) {
            m[r] = v[r]
        }),
        n
    }
    var I, k, x, C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
        return typeof r
    }
    : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }
    , K = r("/raptor-util$3.2.0/inherit"), T = {}, W = o();
    e.exports = x = function(r, t) {
        if (!1 === this.constructor.constructable)
            throw new Error("Instances of this type cannot be created. data: " + r)
    }
    ,
    x.typeName = "Model",
    x._forProperty = a,
    x.isModel = function(r) {
        return r && r.Model
    }
    ,
    x.cleanArray = function(r, t) {
        for (var e = r.length, n = new Array(e); --e >= 0; )
            n[e] = x.clean(r[e], t);
        return n
    }
    ,
    x.clean = function(r, t) {
        if (t = O(t),
        null == r)
            return r;
        if (Array.isArray(r))
            return x.cleanArray(r, t);
        if (r.Model)
            return r.clean(t);
        if (r.constructor !== Date && "object" === (void 0 === r ? "undefined" : C(r))) {
            for (var e = {}, n = Object.keys(r), i = n.length, o = 0; o < i; o++) {
                var a = n[o]
                  , s = x.clean(r[a], t);
                void 0 !== s && (e[a] = s)
            }
            return e
        }
        return r
    }
    ,
    x.unwrap = function(r) {
        return null == r ? r : r.Model ? r.data || r : r
    }
    ,
    x.hasProperties = function() {
        return this.properties !== W || !0 === this.additionalProperties
    }
    ,
    x.hasProperty = function(r) {
        return !!this.properties[r]
    }
    ,
    x.getProperties = function() {
        return this.properties
    }
    ,
    x.getProperty = function(r) {
        return this.properties[r]
    }
    ,
    x.forEachProperty = function(r, t) {
        if (this.Properties) {
            1 === arguments.length && (t = arguments[0],
            r = o());
            var e = this.Properties.prototype
              , n = !1 !== r.inherited
              , i = o();
            do {
                for (var a in e)
                    if (!i[a] && e.hasOwnProperty(a)) {
                        var s = e[a];
                        s.constructor === v && a === s.getName() && t(s),
                        i[a] = !0
                    }
                if (!n)
                    break
            } while (null != (e = Object.getPrototypeOf(e)))
        }
    }
    ,
    x.preventConstruction = function() {
        this.constructable = !1
    }
    ,
    x.isCompatibleWith = function(r) {
        var t = this;
        do {
            if (t === r)
                return !0
        } while (t = t.$super);
        return !1
    }
    ,
    x.isInstance = function(r) {
        return r instanceof this
    }
    ,
    x.isPrimitive = function() {
        return !1
    }
    ,
    x.coercionError = function(r, t, e) {
        var n = "";
        if (t && t.property && t.property.getName && (n += t.property.getName() + ": "),
        n += "Invalid value: " + r,
        e && (n += " - " + e),
        !t || !t.errors) {
            var i = new Error(n);
            throw i.source = x,
            i
        }
        t.errors.push(n)
    }
    ,
    x.stringify = function(r, t) {
        return JSON.stringify(x.clean(r), null, t ? "  " : void 0)
    }
    ;
    var $ = x.prototype;
    $.unwrap = function() {
        return this.data || this
    }
    ,
    $.clean = function(r) {
        r = O(r);
        var t = this.Model;
        if (t.clean)
            return t.clean(this, r);
        var e = t.properties
          , n = this.data;
        if (t.hasProperties()) {
            for (var i = {}, o = Object.keys(n), a = o.length, s = 0; s < a; s++) {
                var u = o[s]
                  , p = r.property = e[u]
                  , c = n[u];
                if (p && p.isPersisted())
                    if (null == c)
                        void 0 !== c && (i[u] = c);
                    else {
                        var f = p.type
                          , l = f.clean
                          , y = r.property;
                        r.property = p,
                        l ? c = f.clean(c, r) : (c.Model || f.isWrapped()) && (c = x.clean(c, r)),
                        r.property = y,
                        void 0 !== c && (i[u] = c)
                    }
                else
                    t.additionalProperties ? (c.Model && (c = c.clean(r)),
                    void 0 !== c && (i[u] = c)) : r.errors && r.errors.push("Unrecognized property: " + u)
            }
            n = i
        }
        if (t.afterClean) {
            var h = t.afterClean(n, r);
            void 0 !== h && (n = h)
        }
        return n
    }
    ,
    $.set = function(r, t, e) {
        var n = this.data
          , i = d(this, r, e);
        if (i)
            u(this, n, i, t, e);
        else {
            var o = n[r];
            o !== t && (n[r] = t,
            s(this, r, o, t))
        }
    }
    ,
    $.get = function(r, t) {
        var e = this.constructor
          , n = e.properties[r];
        if (n) {
            var i = n.getGetter();
            if (i)
                return i.call(this, r, n)
        }
        return this.data[r]
    }
    ,
    $.stringify = function(r) {
        return x.stringify(this.data, r)
    }
    ;
    var G = v.prototype;
    G.getName = function() {
        return this.name
    }
    ,
    G.getKey = G.toString = function() {
        return this.key
    }
    ,
    G.getType = function() {
        return this.type
    }
    ,
    G.getItems = function() {
        return this.items
    }
    ,
    G.getGetter = function() {
        return this.get
    }
    ,
    G.getSetter = function() {
        return this.set
    }
    ,
    G.isPersisted = function() {
        return !1 !== this.persist
    }
    ,
    g.prototype.getName = function() {
        return this.owner.getName()
    }
    ;
    var U = {
        init: 1,
        wrap: 1,
        coerce: 1,
        properties: 1,
        prototype: 1,
        mixins: 1
    };
    x.extend = function(r, t) {
        return N(x, r, t)
    }
    ,
    k = r("/fashion-model$5.0.21/primitives"),
    I = k.array
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/models/Model", function(e, o, d, c, s) {
    "use strict";
    d.exports = e("/fashion-model$5.0.21/Model")
});
$_mod_webchat.def("/fashion-model$5.0.21/Enum", function(e, t, r, n, a) {
    "use strict";
    function o() {
        return this._name
    }
    var u = /([a-z])([A-Z])|([^\w])/g
      , i = /([a-z])[^a-z]+([a-z])/g
      , s = e("/fashion-model$5.0.21/Model")
      , c = r.exports = s.extend({
        prototype: {
            value: function() {
                return this.data
            },
            name: o,
            toString: o,
            clean: function(e) {
                var t = this.Model;
                return t.clean ? t.clean(this, e) : this._name
            }
        }
    });
    c.toConstantName = function(e) {
        return e.replace(u, function(e, t, r, n) {
            return t ? t + "_" + r : "_"
        }).toUpperCase()
    }
    ,
    c.toCamelCase = function(e) {
        return e.toLowerCase().replace(i, function(e, t, r) {
            return t + r.toUpperCase()
        })
    }
    ,
    c.toTitleCase = function(e) {
        var t = c.toCamelCase(e);
        return t.charAt(0).toUpperCase() + t.substring(1)
    }
    ;
    var f = function(e) {
        return e.toLowerCase()
    }
      , l = function(e) {
        return e.toUpperCase()
    };
    c.create = function(e) {
        function t(e, t, r) {
            n.names.push(e);
            var a = new n(t);
            return a._name = e,
            o["is" + c.toTitleCase(e)] = function() {
                return this === a
            }
            ,
            n[e] = n[c.toConstantName(e)] = a,
            n[e].ordinal = function() {
                return r
            }
            ,
            n.values.push(a),
            a
        }
        var r;
        Array.isArray(e) && (e = {
            values: e
        });
        var n, a = e.coerce;
        e.coerce = function(e, t) {
            if (a) {
                var o = a.call(this, e, t);
                void 0 !== o && (e = o)
            }
            if (null == e || e.constructor === n)
                return e;
            void 0 !== r && (e = r(e));
            var u = n[e];
            return void 0 === u && this.coercionError(e, t),
            u
        }
        ,
        n = c.extend(e),
        e.autoUpperCase ? r = l : e.autoLowerCase && (r = f);
        var o = n.prototype
          , u = e.values;
        return n.names = [],
        n.values = [],
        Array.isArray(u) ? u.forEach(function(e, r) {
            t(e, e, r)
        }) : Object.keys(u).forEach(function(e, r) {
            t(e, u[e], r)
        }),
        n.preventConstruction(),
        n
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/models/Enum", function(e, o, c, s, t) {
    "use strict";
    c.exports = e("/fashion-model$5.0.21/Enum")
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/models/WidgetType", function(e, c, t, s, u) {
    "use strict";
    t.exports = e("/purecloud-webchat$2.0.0/src/models/Enum").create({
        values: ["FRAME", "POPUP"]
    })
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "jwt-decode", "2.2.0");
$_mod_webchat.main("/jwt-decode$2.2.0", "lib/index");
$_mod_webchat.def("/jwt-decode$2.2.0/lib/atob", function(e, o, t, r, n) {
    "use strict";
    function d(e) {
        this.message = e
    }
    function i(e) {
        var o = String(e).replace(/=+$/, "");
        if (o.length % 4 == 1)
            throw new d("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var t, r, n = 0, i = 0, c = ""; r = o.charAt(i++); ~r && (t = n % 4 ? 64 * t + r : r,
        n++ % 4) ? c += String.fromCharCode(255 & t >> (-2 * n & 6)) : 0)
            r = a.indexOf(r);
        return c
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    d.prototype = new Error,
    d.prototype.name = "InvalidCharacterError",
    t.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || i
});
$_mod_webchat.def("/jwt-decode$2.2.0/lib/base64_url_decode", function(e, t, r, a, c) {
    "use strict";
    function n(e) {
        return decodeURIComponent(o(e).replace(/(.)/g, function(e, t) {
            var r = t.charCodeAt(0).toString(16).toUpperCase();
            return r.length < 2 && (r = "0" + r),
            "%" + r
        }))
    }
    var o = e("/jwt-decode$2.2.0/lib/atob");
    r.exports = function(e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (t.length % 4) {
        case 0:
            break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default:
            throw "Illegal base64url string!"
        }
        try {
            return n(t)
        } catch (e) {
            return o(t)
        }
    }
});
$_mod_webchat.def("/jwt-decode$2.2.0/lib/index", function(e, r, t, o, n) {
    "use strict";
    function i(e) {
        this.message = e
    }
    var d = e("/jwt-decode$2.2.0/lib/base64_url_decode");
    i.prototype = new Error,
    i.prototype.name = "InvalidTokenError",
    t.exports = function(e, r) {
        if ("string" != typeof e)
            throw new i("Invalid token specified");
        r = r || {};
        var t = !0 === r.header ? 0 : 1;
        try {
            return JSON.parse(d(e.split(".")[t]))
        } catch (e) {
            throw new i("Invalid token specified: " + e.message)
        }
    }
    ,
    t.exports.InvalidTokenError = i
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/models/ReconnectData", function(e, t, n, o, r) {
    "use strict";
    var c = n.exports = e("/purecloud-webchat$2.0.0/src/models/Model").extend({
        properties: {
            conversationEnded: Boolean,
            widgetType: e("/purecloud-webchat$2.0.0/src/models/WidgetType"),
            conversationRoomJid: String,
            realtimeReconnectToken: String,
            guestAuthenticationToken: String,
            conversationId: String,
            memberId: String,
            httpApiToken: String,
            streamingUrl: String,
            chatApi: String
        },
        prototype: {
            getDecodedToken: function() {
                var e = this.getRealtimeReconnectToken();
                return e && new c.decodeJwt(e)
            },
            hasValidReconnectToken: function() {
                if (!this.getRealtimeReconnectToken())
                    return !1;
                var e = this.getDecodedToken()
                  , t = e.exp;
                return Date.now() <= 1e3 * t
            }
        }
    });
    c.decodeJwt = e("/jwt-decode$2.2.0/lib/index")
});
$_mod_webchat.main("/fashion-model$5.0.21", "Model");
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/util/cleanEntities", function(r, t, e, n, a) {
    "use strict";
    function o(r) {
        var t = []
          , e = !0
          , n = !1
          , a = void 0;
        try {
            for (var o, l = r[Symbol.iterator](); !(e = (o = l.next()).done); e = !0) {
                var c = o.value;
                t.push(i.clean(c))
            }
        } catch (r) {
            n = !0,
            a = r
        } finally {
            try {
                !e && l.return && l.return()
            } finally {
                if (n)
                    throw a
            }
        }
        return t
    }
    var i = r("/fashion-model$5.0.21/Model");
    e.exports = o
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/storage/StorageClient", function(e, t, n, r, o) {
    "use strict";
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var c = t[o](a)
                          , i = c.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!c.done)
                        return Promise.resolve(i).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                    e(i)
                }
                return r("next")
            }
            )
        }
    }
    function c(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , u = e("/purecloud-webchat$2.0.0/src/models/ReconnectData")
      , s = e("/purecloud-webchat$2.0.0/src/util/cleanEntities")
      , l = window.location.origin
      , f = function() {
        function e(t, n) {
            c(this, e),
            this._storageClient = t,
            this.context = n
        }
        return i(e, [{
            key: "storeReconnectData",
            value: function(e, t, n) {
                return this._storageClient.store({
                    key: this.getStorageKey(),
                    value: e.clean(),
                    ttl: n || 3e5,
                    accessors: s(t)
                })
            }
        }, {
            key: "retrieveReconnectData",
            value: function() {
                function e(e) {
                    return t.apply(this, arguments)
                }
                var t = a(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                this._storageClient.retrieve({
                                    key: this.getStorageKey(),
                                    crossDomainOrigin: t || l
                                });
                            case 3:
                                return n = e.sent,
                                e.abrupt("return", u.wrap(n));
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", null);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[0, 7]])
                }));
                return e
            }()
        }, {
            key: "removeReconnectData",
            value: function(e) {
                return this._storageClient.remove({
                    key: this.getStorageKey(),
                    crossDomainOrigin: e || l
                })
            }
        }, {
            key: "getStorageKey",
            value: function() {
                var e = "purecloud-webchatReconnectStorageData";
                return this.context && (e += ":" + this.context),
                e
            }
        }]),
        e
    }();
    n.exports = f
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "@purecloud/cross-domain-storage", "1.4.0");
$_mod_webchat.main("/@purecloud/cross-domain-storage$1.4.0", "");
$_mod_webchat.installed("@purecloud/cross-domain-storage$1.4.0", "core-js-pure", "3.6.4");
$_mod_webchat.main("/core-js-pure$3.6.4/features/promise", "");
$_mod_webchat.main("/core-js-pure$3.6.4/es/promise", "");
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.object.to-string", function(e, t, o, s, c) {
    "use strict"
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-integer", function(t, e, r, n, o) {
    "use strict";
    var i = Math.ceil
      , a = Math.floor;
    r.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? a : i)(t)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/require-object-coercible", function(e, r, o, t, c) {
    "use strict";
    o.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/string-multibyte", function(e, r, t, n, c) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/to-integer")
      , o = e("/core-js-pure$3.6.4/internals/require-object-coercible")
      , s = function(e) {
        return function(r, t) {
            var n, c, s = String(o(r)), u = i(t), a = s.length;
            return u < 0 || u >= a ? e ? "" : void 0 : (n = s.charCodeAt(u),
            n < 55296 || n > 56319 || u + 1 === a || (c = s.charCodeAt(u + 1)) < 56320 || c > 57343 ? e ? s.charAt(u) : n : e ? s.slice(u, u + 2) : c - 56320 + (n - 55296 << 10) + 65536)
        }
    };
    t.exports = {
        codeAt: s(!1),
        charAt: s(!0)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/global", function(e, o, n, t, f) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , l = function(e) {
        return e && e.Math == Math && e
    };
    n.exports = l("object" == ("undefined" == typeof globalThis ? "undefined" : i(globalThis)) && globalThis) || l("object" == ("undefined" == typeof window ? "undefined" : i(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : i(self)) && self) || l("object" == ("undefined" == typeof global ? "undefined" : i(global)) && global) || Function("return this")()
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/fails", function(t, r, e, n, c) {
    "use strict";
    e.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/descriptors", function(e, r, t, n, s) {
    "use strict";
    var c = e("/core-js-pure$3.6.4/internals/fails");
    t.exports = !c(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/is-object", function(o, t, n, e, r) {
    "use strict";
    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
    ;
    n.exports = function(o) {
        return "object" === (void 0 === o ? "undefined" : f(o)) ? null !== o : "function" == typeof o
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/document-create-element", function(e, t, r, n, c) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/global")
      , s = e("/core-js-pure$3.6.4/internals/is-object")
      , a = o.document
      , u = s(a) && s(a.createElement);
    r.exports = function(e) {
        return u ? a.createElement(e) : {}
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/ie8-dom-define", function(e, r, n, t, i) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/descriptors")
      , c = e("/core-js-pure$3.6.4/internals/fails")
      , o = e("/core-js-pure$3.6.4/internals/document-create-element");
    n.exports = !s && !c(function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/an-object", function(r, e, t, n, o) {
    "use strict";
    var c = r("/core-js-pure$3.6.4/internals/is-object");
    t.exports = function(r) {
        if (!c(r))
            throw TypeError(String(r) + " is not an object");
        return r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-primitive", function(t, r, e, n, i) {
    "use strict";
    var o = t("/core-js-pure$3.6.4/internals/is-object");
    e.exports = function(t, r) {
        if (!o(t))
            return t;
        var e, n;
        if (r && "function" == typeof (e = t.toString) && !o(n = e.call(t)))
            return n;
        if ("function" == typeof (e = t.valueOf) && !o(n = e.call(t)))
            return n;
        if (!r && "function" == typeof (e = t.toString) && !o(n = e.call(t)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-define-property", function(e, r, t, n, i) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/descriptors")
      , s = e("/core-js-pure$3.6.4/internals/ie8-dom-define")
      , c = e("/core-js-pure$3.6.4/internals/an-object")
      , p = e("/core-js-pure$3.6.4/internals/to-primitive")
      , u = Object.defineProperty;
    r.f = o ? u : function(e, r, t) {
        if (c(e),
        r = p(r, !0),
        c(t),
        s)
            try {
                return u(e, r, t)
            } catch (e) {}
        if ("get"in t || "set"in t)
            throw TypeError("Accessors not supported");
        return "value"in t && (e[r] = t.value),
        e
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/create-property-descriptor", function(e, r, t, n, c) {
    "use strict";
    t.exports = function(e, r) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: r
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/create-non-enumerable-property", function(e, r, t, n, o) {
    "use strict";
    var c = e("/core-js-pure$3.6.4/internals/descriptors")
      , s = e("/core-js-pure$3.6.4/internals/object-define-property")
      , p = e("/core-js-pure$3.6.4/internals/create-property-descriptor");
    t.exports = c ? function(e, r, t) {
        return s.f(e, r, p(1, t))
    }
    : function(e, r, t) {
        return e[r] = t,
        e
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/set-global", function(e, r, t, n, o) {
    "use strict";
    var a = e("/core-js-pure$3.6.4/internals/global")
      , c = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property");
    t.exports = function(e, r) {
        try {
            c(a, e, r)
        } catch (t) {
            a[e] = r
        }
        return r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/shared-store", function(e, r, s, _, o) {
    "use strict";
    var a = e("/core-js-pure$3.6.4/internals/global")
      , t = e("/core-js-pure$3.6.4/internals/set-global")
      , c = a["__core-js_shared__"] || t("__core-js_shared__", {});
    s.exports = c
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/inspect-source", function(e, t, n, r, c) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/shared-store")
      , s = Function.toString;
    "function" != typeof o.inspectSource && (o.inspectSource = function(e) {
        return s.call(e)
    }
    ),
    n.exports = o.inspectSource
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/native-weak-map", function(e, t, n, r, a) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/global")
      , o = e("/core-js-pure$3.6.4/internals/inspect-source")
      , c = s.WeakMap;
    n.exports = "function" == typeof c && /native code/.test(o(c))
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/has", function(r, e, t, n, s) {
    "use strict";
    var a = {}.hasOwnProperty;
    t.exports = function(r, e) {
        return a.call(r, e)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/is-pure", function(e, r, s, t, c) {
    "use strict";
    s.exports = !0
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/shared", function(r, e, s, o, n) {
    "use strict";
    var i = r("/core-js-pure$3.6.4/internals/is-pure")
      , t = r("/core-js-pure$3.6.4/internals/shared-store");
    (s.exports = function(r, e) {
        return t[r] || (t[r] = void 0 !== e ? e : {})
    }
    )("versions", []).push({
        version: "3.6.4",
        mode: i ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/uid", function(t, r, n, o, e) {
    "use strict";
    var i = 0
      , u = Math.random();
    n.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + u).toString(36)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/shared-key", function(e, r, s, n, t) {
    "use strict";
    var u = e("/core-js-pure$3.6.4/internals/shared")
      , a = e("/core-js-pure$3.6.4/internals/uid")
      , c = u("keys");
    s.exports = function(e) {
        return c[e] || (c[e] = a(e))
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/hidden-keys", function(e, s, t, n, r) {
    "use strict";
    t.exports = {}
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/internal-state", function(e, r, n, t, a) {
    "use strict";
    var s, u, o, c = e("/core-js-pure$3.6.4/internals/native-weak-map"), i = e("/core-js-pure$3.6.4/internals/global"), l = e("/core-js-pure$3.6.4/internals/is-object"), p = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property"), f = e("/core-js-pure$3.6.4/internals/has"), j = e("/core-js-pure$3.6.4/internals/shared-key"), $ = e("/core-js-pure$3.6.4/internals/hidden-keys"), h = i.WeakMap, d = function(e) {
        return o(e) ? u(e) : s(e, {})
    }, v = function(e) {
        return function(r) {
            var n;
            if (!l(r) || (n = u(r)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
            return n
        }
    };
    if (c) {
        var b = new h
          , y = b.get
          , g = b.has
          , k = b.set;
        s = function(e, r) {
            return k.call(b, e, r),
            r
        }
        ,
        u = function(e) {
            return y.call(b, e) || {}
        }
        ,
        o = function(e) {
            return g.call(b, e)
        }
    } else {
        var m = j("state");
        $[m] = !0,
        s = function(e, r) {
            return p(e, m, r),
            r
        }
        ,
        u = function(e) {
            return f(e, m) ? e[m] : {}
        }
        ,
        o = function(e) {
            return f(e, m)
        }
    }
    n.exports = {
        set: s,
        get: u,
        has: o,
        enforce: d,
        getterFor: v
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-property-is-enumerable", function(e, r, t, n, c) {
    "use strict";
    var o = {}.propertyIsEnumerable
      , a = Object.getOwnPropertyDescriptor
      , s = a && !o.call({
        1: 2
    }, 1);
    r.f = s ? function(e) {
        var r = a(this, e);
        return !!r && r.enumerable
    }
    : o
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/classof-raw", function(r, t, e, c, n) {
    "use strict";
    var s = {}.toString;
    e.exports = function(r) {
        return s.call(r).slice(8, -1)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/indexed-object", function(e, r, t, n, c) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/fails")
      , i = e("/core-js-pure$3.6.4/internals/classof-raw")
      , o = "".split;
    t.exports = s(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == i(e) ? o.call(e, "") : Object(e)
    }
    : Object
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-indexed-object", function(e, r, t, n, c) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/indexed-object")
      , i = e("/core-js-pure$3.6.4/internals/require-object-coercible");
    t.exports = function(e) {
        return o(i(e))
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-get-own-property-descriptor", function(e, r, t, n, o) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/descriptors")
      , c = e("/core-js-pure$3.6.4/internals/object-property-is-enumerable")
      , i = e("/core-js-pure$3.6.4/internals/create-property-descriptor")
      , p = e("/core-js-pure$3.6.4/internals/to-indexed-object")
      , a = e("/core-js-pure$3.6.4/internals/to-primitive")
      , u = e("/core-js-pure$3.6.4/internals/has")
      , j = e("/core-js-pure$3.6.4/internals/ie8-dom-define")
      , l = Object.getOwnPropertyDescriptor;
    r.f = s ? l : function(e, r) {
        if (e = p(e),
        r = a(r, !0),
        j)
            try {
                return l(e, r)
            } catch (e) {}
        if (u(e, r))
            return i(!c.f.call(e, r), e[r])
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/is-forced", function(e, r, t, n, o) {
    "use strict";
    var a = e("/core-js-pure$3.6.4/internals/fails")
      , i = /#|\.prototype\./
      , c = function(e, r) {
        var t = u[s(e)];
        return t == p || t != f && ("function" == typeof r ? a(r) : !!r)
    }
      , s = c.normalize = function(e) {
        return String(e).replace(i, ".").toLowerCase()
    }
      , u = c.data = {}
      , f = c.NATIVE = "N"
      , p = c.POLYFILL = "P";
    t.exports = c
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/path", function(e, t, r, s, c) {
    "use strict";
    r.exports = {}
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/a-function", function(n, t, o, r, e) {
    "use strict";
    o.exports = function(n) {
        if ("function" != typeof n)
            throw TypeError(String(n) + " is not a function");
        return n
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/function-bind-context", function(n, r, t, e, c) {
    "use strict";
    var u = n("/core-js-pure$3.6.4/internals/a-function");
    t.exports = function(n, r, t) {
        if (u(n),
        void 0 === r)
            return n;
        switch (t) {
        case 0:
            return function() {
                return n.call(r)
            }
            ;
        case 1:
            return function(t) {
                return n.call(r, t)
            }
            ;
        case 2:
            return function(t, e) {
                return n.call(r, t, e)
            }
            ;
        case 3:
            return function(t, e, c) {
                return n.call(r, t, e, c)
            }
        }
        return function() {
            return n.apply(r, arguments)
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/export", function(e, t, r, o, n) {
    "use strict";
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , s = e("/core-js-pure$3.6.4/internals/global")
      , a = e("/core-js-pure$3.6.4/internals/object-get-own-property-descriptor").f
      , c = e("/core-js-pure$3.6.4/internals/is-forced")
      , i = e("/core-js-pure$3.6.4/internals/path")
      , u = e("/core-js-pure$3.6.4/internals/function-bind-context")
      , l = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property")
      , f = e("/core-js-pure$3.6.4/internals/has")
      , y = function(e) {
        var t = function(t, r, o) {
            if (this instanceof e) {
                switch (arguments.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t);
                case 2:
                    return new e(t,r)
                }
                return new e(t,r,o)
            }
            return e.apply(this, arguments)
        };
        return t.prototype = e.prototype,
        t
    };
    r.exports = function(e, t) {
        var r, o, n, b, d, m, h, j, $, w = e.target, g = e.global, v = e.stat, S = e.proto, x = g ? s : v ? s[w] : (s[w] || {}).prototype, _ = g ? i : i[w] || (i[w] = {}), F = _.prototype;
        for (b in t)
            r = c(g ? b : w + (v ? "." : "#") + b, e.forced),
            o = !r && x && f(x, b),
            m = _[b],
            o && (e.noTargetGet ? ($ = a(x, b),
            h = $ && $.value) : h = x[b]),
            d = o && h ? h : t[b],
            o && (void 0 === m ? "undefined" : p(m)) === (void 0 === d ? "undefined" : p(d)) || (j = e.bind && o ? u(d, s) : e.wrap && o ? y(d) : S && "function" == typeof d ? u(Function.call, d) : d,
            (e.sham || d && d.sham || m && m.sham) && l(j, "sham", !0),
            _[b] = j,
            S && (n = w + "Prototype",
            f(i, n) || l(i, n, {}),
            i[n][b] = d,
            e.real && F && !F[b] && l(F, b, d)))
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-object", function(e, r, t, c, o) {
    "use strict";
    var n = e("/core-js-pure$3.6.4/internals/require-object-coercible");
    t.exports = function(e) {
        return Object(n(e))
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/correct-prototype-getter", function(t, e, r, o, n) {
    "use strict";
    var c = t("/core-js-pure$3.6.4/internals/fails");
    r.exports = !c(function() {
        function t() {}
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-get-prototype-of", function(t, e, r, o, c) {
    "use strict";
    var n = t("/core-js-pure$3.6.4/internals/has")
      , s = t("/core-js-pure$3.6.4/internals/to-object")
      , p = t("/core-js-pure$3.6.4/internals/shared-key")
      , u = t("/core-js-pure$3.6.4/internals/correct-prototype-getter")
      , a = p("IE_PROTO")
      , i = Object.prototype;
    r.exports = u ? Object.getPrototypeOf : function(t) {
        return t = s(t),
        n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? i : null
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/native-symbol", function(e, r, t, n, o) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/fails");
    t.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol())
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/use-symbol-as-uid", function(o, t, e, r, n) {
    "use strict";
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
      , s = o("/core-js-pure$3.6.4/internals/native-symbol");
    e.exports = s && !Symbol.sham && "symbol" == y(Symbol.iterator)
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/well-known-symbol", function(e, r, s, n, o) {
    "use strict";
    var t = e("/core-js-pure$3.6.4/internals/global")
      , l = e("/core-js-pure$3.6.4/internals/shared")
      , u = e("/core-js-pure$3.6.4/internals/has")
      , a = e("/core-js-pure$3.6.4/internals/uid")
      , i = e("/core-js-pure$3.6.4/internals/native-symbol")
      , c = e("/core-js-pure$3.6.4/internals/use-symbol-as-uid")
      , p = l("wks")
      , $ = t.Symbol
      , b = c ? $ : $ && $.withoutSetter || a;
    s.exports = function(e) {
        return u(p, e) || (i && u($, e) ? p[e] = $[e] : p[e] = b("Symbol." + e)),
        p[e]
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/iterators-core", function(e, r, t, o, n) {
    "use strict";
    var s, i, p, a = e("/core-js-pure$3.6.4/internals/object-get-prototype-of"), c = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property"), u = e("/core-js-pure$3.6.4/internals/has"), l = e("/core-js-pure$3.6.4/internals/well-known-symbol"), j = e("/core-js-pure$3.6.4/internals/is-pure"), y = l("iterator"), $ = !1, b = function() {
        return this
    };
    [].keys && (p = [].keys(),
    "next"in p ? (i = a(a(p))) !== Object.prototype && (s = i) : $ = !0),
    void 0 == s && (s = {}),
    j || u(s, y) || c(s, y, b),
    t.exports = {
        IteratorPrototype: s,
        BUGGY_SAFARI_ITERATORS: $
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-length", function(e, t, n, r, o) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/to-integer")
      , s = Math.min;
    n.exports = function(e) {
        return e > 0 ? s(i(e), 9007199254740991) : 0
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-absolute-index", function(e, t, r, n, a) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/to-integer")
      , i = Math.max
      , s = Math.min;
    r.exports = function(e, t) {
        var r = o(e);
        return r < 0 ? i(r + t, 0) : s(r, t)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/array-includes", function(e, r, n, t, i) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/to-indexed-object")
      , s = e("/core-js-pure$3.6.4/internals/to-length")
      , u = e("/core-js-pure$3.6.4/internals/to-absolute-index")
      , c = function(e) {
        return function(r, n, t) {
            var i, c = o(r), a = s(c.length), f = u(t, a);
            if (e && n != n) {
                for (; a > f; )
                    if ((i = c[f++]) != i)
                        return !0
            } else
                for (; a > f; f++)
                    if ((e || f in c) && c[f] === n)
                        return e || f || 0;
            return !e && -1
        }
    };
    n.exports = {
        includes: c(!0),
        indexOf: c(!1)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-keys-internal", function(e, r, n, s, t) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/has")
      , o = e("/core-js-pure$3.6.4/internals/to-indexed-object")
      , a = e("/core-js-pure$3.6.4/internals/array-includes").indexOf
      , c = e("/core-js-pure$3.6.4/internals/hidden-keys");
    n.exports = function(e, r) {
        var n, s = o(e), t = 0, u = [];
        for (n in s)
            !i(c, n) && i(s, n) && u.push(n);
        for (; r.length > t; )
            i(s, n = r[t++]) && (~a(u, n) || u.push(n));
        return u
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/enum-bug-keys", function(e, t, r, o, n) {
    "use strict";
    r.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-keys", function(e, r, n, t, s) {
    "use strict";
    var c = e("/core-js-pure$3.6.4/internals/object-keys-internal")
      , o = e("/core-js-pure$3.6.4/internals/enum-bug-keys");
    n.exports = Object.keys || function(e) {
        return c(e, o)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-define-properties", function(e, r, t, n, o) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/descriptors")
      , c = e("/core-js-pure$3.6.4/internals/object-define-property")
      , i = e("/core-js-pure$3.6.4/internals/an-object")
      , p = e("/core-js-pure$3.6.4/internals/object-keys");
    t.exports = s ? Object.defineProperties : function(e, r) {
        i(e);
        for (var t, n = p(r), o = n.length, s = 0; o > s; )
            c.f(e, t = n[s++], r[t]);
        return e
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/get-built-in", function(e, n, t, r, o) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/path")
      , u = e("/core-js-pure$3.6.4/internals/global")
      , c = function(e) {
        return "function" == typeof e ? e : void 0
    };
    t.exports = function(e, n) {
        return arguments.length < 2 ? c(i[e]) || c(u[e]) : i[e] && i[e][n] || u[e] && u[e][n]
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/html", function(e, t, n, r, c) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/get-built-in");
    n.exports = o("document", "documentElement")
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-create", function(e, t, n, r, c) {
    "use strict";
    var o, i = e("/core-js-pure$3.6.4/internals/an-object"), s = e("/core-js-pure$3.6.4/internals/object-define-properties"), u = e("/core-js-pure$3.6.4/internals/enum-bug-keys"), a = e("/core-js-pure$3.6.4/internals/hidden-keys"), l = e("/core-js-pure$3.6.4/internals/html"), p = e("/core-js-pure$3.6.4/internals/document-create-element"), d = e("/core-js-pure$3.6.4/internals/shared-key"), j = d("IE_PROTO"), f = function() {}, m = function(e) {
        return "<script>" + e + "<\/script>"
    }, b = function(e) {
        e.write(m("")),
        e.close();
        var t = e.parentWindow.Object;
        return e = null,
        t
    }, y = function() {
        var e, t = p("iframe");
        return t.style.display = "none",
        l.appendChild(t),
        t.src = String("javascript:"),
        e = t.contentWindow.document,
        e.open(),
        e.write(m("document.F=Object")),
        e.close(),
        e.F
    }, $ = function() {
        try {
            o = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {}
        $ = o ? b(o) : y();
        for (var e = u.length; e--; )
            delete $.prototype[u[e]];
        return $()
    };
    a[j] = !0,
    n.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (f.prototype = i(e),
        n = new f,
        f.prototype = null,
        n[j] = e) : n = $(),
        void 0 === t ? n : s(n, t)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/to-string-tag-support", function(t, r, e, n, o) {
    "use strict";
    var s = t("/core-js-pure$3.6.4/internals/well-known-symbol")
      , i = s("toStringTag")
      , a = {};
    a[i] = "z",
    e.exports = "[object z]" === String(a)
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/classof", function(n, t, e, r, o) {
    "use strict";
    var s = n("/core-js-pure$3.6.4/internals/to-string-tag-support")
      , c = n("/core-js-pure$3.6.4/internals/classof-raw")
      , u = n("/core-js-pure$3.6.4/internals/well-known-symbol")
      , i = u("toStringTag")
      , l = "Arguments" == c(function() {
        return arguments
    }())
      , a = function(n, t) {
        try {
            return n[t]
        } catch (n) {}
    };
    e.exports = s ? c : function(n) {
        var t, e, r;
        return void 0 === n ? "Undefined" : null === n ? "Null" : "string" == typeof (e = a(t = Object(n), i)) ? e : l ? c(t) : "Object" == (r = c(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-to-string", function(t, r, e, s, n) {
    "use strict";
    var o = t("/core-js-pure$3.6.4/internals/to-string-tag-support")
      , c = t("/core-js-pure$3.6.4/internals/classof");
    e.exports = o ? {}.toString : function() {
        return "[object " + c(this) + "]"
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/set-to-string-tag", function(e, r, t, n, o) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/to-string-tag-support")
      , a = e("/core-js-pure$3.6.4/internals/object-define-property").f
      , i = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property")
      , p = e("/core-js-pure$3.6.4/internals/has")
      , c = e("/core-js-pure$3.6.4/internals/object-to-string")
      , u = e("/core-js-pure$3.6.4/internals/well-known-symbol")
      , l = u("toStringTag");
    t.exports = function(e, r, t, n) {
        if (e) {
            var o = t ? e : e.prototype;
            p(o, l) || a(o, l, {
                configurable: !0,
                value: r
            }),
            n && !s && i(o, "toString", c)
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/iterators", function(e, t, r, s, o) {
    "use strict";
    r.exports = {}
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/create-iterator-constructor", function(r, e, t, o, n) {
    "use strict";
    var s = r("/core-js-pure$3.6.4/internals/iterators-core").IteratorPrototype
      , c = r("/core-js-pure$3.6.4/internals/object-create")
      , a = r("/core-js-pure$3.6.4/internals/create-property-descriptor")
      , i = r("/core-js-pure$3.6.4/internals/set-to-string-tag")
      , p = r("/core-js-pure$3.6.4/internals/iterators")
      , u = function() {
        return this
    };
    t.exports = function(r, e, t) {
        var o = e + " Iterator";
        return r.prototype = c(s, {
            next: a(1, t)
        }),
        i(r, o, !1, !0),
        p[o] = u,
        r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/a-possible-prototype", function(r, t, e, o, n) {
    "use strict";
    var s = r("/core-js-pure$3.6.4/internals/is-object");
    e.exports = function(r) {
        if (!s(r) && null !== r)
            throw TypeError("Can't set " + String(r) + " as a prototype");
        return r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/object-set-prototype-of", function(t, e, r, o, c) {
    "use strict";
    var n = t("/core-js-pure$3.6.4/internals/an-object")
      , p = t("/core-js-pure$3.6.4/internals/a-possible-prototype");
    r.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var t, e = !1, r = {};
        try {
            t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set,
            t.call(r, []),
            e = r instanceof Array
        } catch (t) {}
        return function(r, o) {
            return n(r),
            p(o),
            e ? t.call(r, o) : r.__proto__ = o,
            r
        }
    }() : void 0)
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/redefine", function(e, r, n, t, o) {
    "use strict";
    var a = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property");
    n.exports = function(e, r, n, t) {
        t && t.enumerable ? e[r] = n : a(e, r, n)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/define-iterator", function(e, r, t, n, o) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/export")
      , i = e("/core-js-pure$3.6.4/internals/create-iterator-constructor")
      , a = e("/core-js-pure$3.6.4/internals/object-get-prototype-of")
      , u = e("/core-js-pure$3.6.4/internals/object-set-prototype-of")
      , c = e("/core-js-pure$3.6.4/internals/set-to-string-tag")
      , p = e("/core-js-pure$3.6.4/internals/create-non-enumerable-property")
      , l = e("/core-js-pure$3.6.4/internals/redefine")
      , f = e("/core-js-pure$3.6.4/internals/well-known-symbol")
      , j = e("/core-js-pure$3.6.4/internals/is-pure")
      , $ = e("/core-js-pure$3.6.4/internals/iterators")
      , y = e("/core-js-pure$3.6.4/internals/iterators-core")
      , v = y.IteratorPrototype
      , w = y.BUGGY_SAFARI_ITERATORS
      , b = f("iterator")
      , h = function() {
        return this
    };
    t.exports = function(e, r, t, n, o, f, y) {
        i(t, r, n);
        var d, g, k, m = function(e) {
            if (e === o && R)
                return R;
            if (!w && e in _)
                return _[e];
            switch (e) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new t(this,e)
                }
            }
            return function() {
                return new t(this)
            }
        }, A = r + " Iterator", I = !1, _ = e.prototype, x = _[b] || _["@@iterator"] || o && _[o], R = !w && x || m(o), G = "Array" == r ? _.entries || x : x;
        if (G && (d = a(G.call(new e)),
        v !== Object.prototype && d.next && (j || a(d) === v || (u ? u(d, v) : "function" != typeof d[b] && p(d, b, h)),
        c(d, A, !0, !0),
        j && ($[A] = h))),
        "values" == o && x && "values" !== x.name && (I = !0,
        R = function() {
            return x.call(this)
        }
        ),
        j && !y || _[b] === R || p(_, b, R),
        $[r] = R,
        o)
            if (g = {
                values: m("values"),
                keys: f ? R : m("keys"),
                entries: m("entries")
            },
            y)
                for (k in g)
                    !w && !I && k in _ || l(_, k, g[k]);
            else
                s({
                    target: r,
                    proto: !0,
                    forced: w || I
                }, g);
        return g
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.string.iterator", function(t, e, r, n, i) {
    "use strict";
    var s = t("/core-js-pure$3.6.4/internals/string-multibyte").charAt
      , o = t("/core-js-pure$3.6.4/internals/internal-state")
      , a = t("/core-js-pure$3.6.4/internals/define-iterator")
      , u = o.set
      , g = o.getterFor("String Iterator");
    a(String, "String", function(t) {
        u(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }, function() {
        var t, e = g(this), r = e.string, n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = s(r, n),
        e.index += t.length,
        {
            value: t,
            done: !1
        })
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/add-to-unscopables", function(e, t, n, o, s) {
    "use strict";
    n.exports = function() {}
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.array.iterator", function(e, r, t, a, n) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/to-indexed-object")
      , o = e("/core-js-pure$3.6.4/internals/add-to-unscopables")
      , i = e("/core-js-pure$3.6.4/internals/iterators")
      , u = e("/core-js-pure$3.6.4/internals/internal-state")
      , d = e("/core-js-pure$3.6.4/internals/define-iterator")
      , l = u.set
      , c = u.getterFor("Array Iterator");
    t.exports = d(Array, "Array", function(e, r) {
        l(this, {
            type: "Array Iterator",
            target: s(e),
            index: 0,
            kind: r
        })
    }, function() {
        var e = c(this)
          , r = e.target
          , t = e.kind
          , a = e.index++;
        return !r || a >= r.length ? (e.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == t ? {
            value: a,
            done: !1
        } : "values" == t ? {
            value: r[a],
            done: !1
        } : {
            value: [a, r[a]],
            done: !1
        }
    }, "values"),
    i.Arguments = i.Array,
    o("keys"),
    o("values"),
    o("entries")
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/dom-iterables", function(t, e, i, s, L) {
    "use strict";
    i.exports = {
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
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/web.dom-collections.iterator", function(r, e, o, s, t) {
    "use strict";
    r("/core-js-pure$3.6.4/modules/es.array.iterator");
    var a = r("/core-js-pure$3.6.4/internals/dom-iterables")
      , n = r("/core-js-pure$3.6.4/internals/global")
      , l = r("/core-js-pure$3.6.4/internals/classof")
      , c = r("/core-js-pure$3.6.4/internals/create-non-enumerable-property")
      , i = r("/core-js-pure$3.6.4/internals/iterators")
      , u = r("/core-js-pure$3.6.4/internals/well-known-symbol")
      , p = u("toStringTag");
    for (var $ in a) {
        var j = n[$]
          , m = j && j.prototype;
        m && l(m) !== p && c(m, p, $),
        i[$] = i.Array
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/native-promise-constructor", function(e, r, o, s, t) {
    "use strict";
    var n = e("/core-js-pure$3.6.4/internals/global");
    o.exports = n.Promise
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/redefine-all", function(e, r, n, t, i) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/redefine");
    n.exports = function(e, r, n) {
        for (var t in r)
            n && n.unsafe && e[t] ? e[t] = r[t] : s(e, t, r[t], n);
        return e
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/set-species", function(e, r, n, s, t) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/get-built-in")
      , o = e("/core-js-pure$3.6.4/internals/object-define-property")
      , c = e("/core-js-pure$3.6.4/internals/well-known-symbol")
      , u = e("/core-js-pure$3.6.4/internals/descriptors")
      , p = c("species");
    n.exports = function(e) {
        var r = i(e)
          , n = o.f;
        u && r && !r[p] && n(r, p, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/an-instance", function(n, r, t, e, o) {
    "use strict";
    t.exports = function(n, r, t) {
        if (!(n instanceof r))
            throw TypeError("Incorrect " + (t ? t + " " : "") + "invocation");
        return n
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/is-array-iterator-method", function(r, e, t, o, n) {
    "use strict";
    var a = r("/core-js-pure$3.6.4/internals/well-known-symbol")
      , s = r("/core-js-pure$3.6.4/internals/iterators")
      , i = a("iterator")
      , c = Array.prototype;
    t.exports = function(r) {
        return void 0 !== r && (s.Array === r || c[i] === r)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/get-iterator-method", function(r, e, t, o, n) {
    "use strict";
    var s = r("/core-js-pure$3.6.4/internals/classof")
      , i = r("/core-js-pure$3.6.4/internals/iterators")
      , a = r("/core-js-pure$3.6.4/internals/well-known-symbol")
      , c = a("iterator");
    t.exports = function(r) {
        if (void 0 != r)
            return r[c] || r["@@iterator"] || i[s(r)]
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/call-with-safe-iteration-closing", function(r, t, e, n, c) {
    "use strict";
    var a = r("/core-js-pure$3.6.4/internals/an-object");
    e.exports = function(r, t, e, n) {
        try {
            return n ? t(a(e)[0], e[1]) : t(e)
        } catch (t) {
            var c = r.return;
            throw void 0 !== c && a(c.call(r)),
            t
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/iterate", function(e, t, n, r, o) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , s = e("/core-js-pure$3.6.4/internals/an-object")
      , c = e("/core-js-pure$3.6.4/internals/is-array-iterator-method")
      , u = e("/core-js-pure$3.6.4/internals/to-length")
      , f = e("/core-js-pure$3.6.4/internals/function-bind-context")
      , a = e("/core-js-pure$3.6.4/internals/get-iterator-method")
      , l = e("/core-js-pure$3.6.4/internals/call-with-safe-iteration-closing")
      , p = function(e, t) {
        this.stopped = e,
        this.result = t
    };
    (n.exports = function(e, t, n, r, o) {
        var y, b, d, m, h, j, $, w = f(t, n, r ? 2 : 1);
        if (o)
            y = e;
        else {
            if ("function" != typeof (b = a(e)))
                throw TypeError("Target is not iterable");
            if (c(b)) {
                for (d = 0,
                m = u(e.length); m > d; d++)
                    if ((h = r ? w(s($ = e[d])[0], $[1]) : w(e[d])) && h instanceof p)
                        return h;
                return new p(!1)
            }
            y = b.call(e)
        }
        for (j = y.next; !($ = j.call(y)).done; )
            if (h = l(y, w, $.value, r),
            "object" == (void 0 === h ? "undefined" : i(h)) && h && h instanceof p)
                return h;
        return new p(!1)
    }
    ).stop = function(e) {
        return new p(!0,e)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/check-correctness-of-iteration", function(r, n, t, e, o) {
    "use strict";
    var c = r("/core-js-pure$3.6.4/internals/well-known-symbol")
      , u = c("iterator")
      , i = !1;
    try {
        var a = 0
          , f = {
            next: function() {
                return {
                    done: !!a++
                }
            },
            return: function() {
                i = !0
            }
        };
        f[u] = function() {
            return this
        }
        ,
        Array.from(f, function() {
            throw 2
        })
    } catch (r) {}
    t.exports = function(r, n) {
        if (!n && !i)
            return !1;
        var t = !1;
        try {
            var e = {};
            e[u] = function() {
                return {
                    next: function() {
                        return {
                            done: t = !0
                        }
                    }
                }
            }
            ,
            r(e)
        } catch (r) {}
        return t
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/species-constructor", function(e, r, n, o, s) {
    "use strict";
    var t = e("/core-js-pure$3.6.4/internals/an-object")
      , c = e("/core-js-pure$3.6.4/internals/a-function")
      , i = e("/core-js-pure$3.6.4/internals/well-known-symbol")
      , u = i("species");
    n.exports = function(e, r) {
        var n, o = t(e).constructor;
        return void 0 === o || void 0 == (n = t(o)[u]) ? r : c(n)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/engine-user-agent", function(e, n, r, t, s) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/get-built-in");
    r.exports = i("navigator", "userAgent") || ""
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/engine-is-ios", function(e, i, n, s, t) {
    "use strict";
    var r = e("/core-js-pure$3.6.4/internals/engine-user-agent");
    n.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/task", function(e, n, t, o, s) {
    "use strict";
    var r, i, c, a = e("/core-js-pure$3.6.4/internals/global"), u = e("/core-js-pure$3.6.4/internals/fails"), p = e("/core-js-pure$3.6.4/internals/classof-raw"), l = e("/core-js-pure$3.6.4/internals/function-bind-context"), f = e("/core-js-pure$3.6.4/internals/html"), d = e("/core-js-pure$3.6.4/internals/document-create-element"), h = e("/core-js-pure$3.6.4/internals/engine-is-ios"), m = a.location, g = a.setImmediate, $ = a.clearImmediate, j = a.process, v = a.MessageChannel, w = a.Dispatch, y = 0, M = {}, b = function(e) {
        if (M.hasOwnProperty(e)) {
            var n = M[e];
            delete M[e],
            n()
        }
    }, x = function(e) {
        return function() {
            b(e)
        }
    }, C = function(e) {
        b(e.data)
    }, k = function(e) {
        a.postMessage(e + "", m.protocol + "//" + m.host)
    };
    g && $ || (g = function(e) {
        for (var n = [], t = 1; arguments.length > t; )
            n.push(arguments[t++]);
        return M[++y] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, n)
        }
        ,
        r(y),
        y
    }
    ,
    $ = function(e) {
        delete M[e]
    }
    ,
    "process" == p(j) ? r = function(e) {
        j.nextTick(x(e))
    }
    : w && w.now ? r = function(e) {
        w.now(x(e))
    }
    : v && !h ? (i = new v,
    c = i.port2,
    i.port1.onmessage = C,
    r = l(c.postMessage, c, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || u(k) ? r = "onreadystatechange"in d("script") ? function(e) {
        f.appendChild(d("script")).onreadystatechange = function() {
            f.removeChild(this),
            b(e)
        }
    }
    : function(e) {
        setTimeout(x(e), 0)
    }
    : (r = k,
    a.addEventListener("message", C, !1))),
    t.exports = {
        set: g,
        clear: $
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/microtask", function(e, r, t, n, o) {
    "use strict";
    var s, c, i, a, u, l, f, v, p = e("/core-js-pure$3.6.4/internals/global"), d = e("/core-js-pure$3.6.4/internals/object-get-own-property-descriptor").f, b = e("/core-js-pure$3.6.4/internals/classof-raw"), j = e("/core-js-pure$3.6.4/internals/task").set, x = e("/core-js-pure$3.6.4/internals/engine-is-ios"), $ = p.MutationObserver || p.WebKitMutationObserver, h = p.process, m = p.Promise, w = "process" == b(h), k = d(p, "queueMicrotask"), g = k && k.value;
    g || (s = function() {
        var e, r;
        for (w && (e = h.domain) && e.exit(); c; ) {
            r = c.fn,
            c = c.next;
            try {
                r()
            } catch (e) {
                throw c ? a() : i = void 0,
                e
            }
        }
        i = void 0,
        e && e.enter()
    }
    ,
    w ? a = function() {
        h.nextTick(s)
    }
    : $ && !x ? (u = !0,
    l = document.createTextNode(""),
    new $(s).observe(l, {
        characterData: !0
    }),
    a = function() {
        l.data = u = !u
    }
    ) : m && m.resolve ? (f = m.resolve(void 0),
    v = f.then,
    a = function() {
        v.call(f, s)
    }
    ) : a = function() {
        j.call(p, s)
    }
    ),
    t.exports = g || function(e) {
        var r = {
            fn: e,
            next: void 0
        };
        i && (i.next = r),
        c || (c = r,
        a()),
        i = r
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/new-promise-capability", function(r, e, t, i, n) {
    "use strict";
    var o = r("/core-js-pure$3.6.4/internals/a-function")
      , s = function(r) {
        var e, t;
        this.promise = new r(function(r, i) {
            if (void 0 !== e || void 0 !== t)
                throw TypeError("Bad Promise constructor");
            e = r,
            t = i
        }
        ),
        this.resolve = o(e),
        this.reject = o(t)
    };
    t.exports.f = function(r) {
        return new s(r)
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/promise-resolve", function(e, r, s, n, o) {
    "use strict";
    var t = e("/core-js-pure$3.6.4/internals/an-object")
      , i = e("/core-js-pure$3.6.4/internals/is-object")
      , c = e("/core-js-pure$3.6.4/internals/new-promise-capability");
    s.exports = function(e, r) {
        if (t(e),
        i(r) && r.constructor === e)
            return r;
        var s = c.f(e);
        return (0,
        s.resolve)(r),
        s.promise
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/host-report-errors", function(r, e, o, t, n) {
    "use strict";
    var s = r("/core-js-pure$3.6.4/internals/global");
    o.exports = function(r, e) {
        var o = s.console;
        o && o.error && (1 === arguments.length ? o.error(r) : o.error(r, e))
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/perform", function(r, e, t, n, o) {
    "use strict";
    t.exports = function(r) {
        try {
            return {
                error: !1,
                value: r()
            }
        } catch (r) {
            return {
                error: !0,
                value: r
            }
        }
    }
});
$_mod_webchat.def("/core-js-pure$3.6.4/internals/engine-v8-version", function(e, r, s, n, t) {
    "use strict";
    var o, i, a = e("/core-js-pure$3.6.4/internals/global"), c = e("/core-js-pure$3.6.4/internals/engine-user-agent"), l = a.process, p = l && l.versions, u = p && p.v8;
    u ? (o = u.split("."),
    i = o[0] + o[1]) : c && (!(o = c.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = c.match(/Chrome\/(\d+)/)) && (i = o[1]),
    s.exports = i && +i
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.promise", function(e, t, n, r, o) {
    "use strict";
    var i, c, s, a, u = e("/core-js-pure$3.6.4/internals/export"), l = e("/core-js-pure$3.6.4/internals/is-pure"), f = e("/core-js-pure$3.6.4/internals/global"), p = e("/core-js-pure$3.6.4/internals/get-built-in"), v = e("/core-js-pure$3.6.4/internals/native-promise-constructor"), h = e("/core-js-pure$3.6.4/internals/redefine"), j = e("/core-js-pure$3.6.4/internals/redefine-all"), d = e("/core-js-pure$3.6.4/internals/set-to-string-tag"), m = e("/core-js-pure$3.6.4/internals/set-species"), $ = e("/core-js-pure$3.6.4/internals/is-object"), y = e("/core-js-pure$3.6.4/internals/a-function"), g = e("/core-js-pure$3.6.4/internals/an-instance"), w = e("/core-js-pure$3.6.4/internals/classof-raw"), b = e("/core-js-pure$3.6.4/internals/inspect-source"), E = e("/core-js-pure$3.6.4/internals/iterate"), k = e("/core-js-pure$3.6.4/internals/check-correctness-of-iteration"), P = e("/core-js-pure$3.6.4/internals/species-constructor"), x = e("/core-js-pure$3.6.4/internals/task").set, R = e("/core-js-pure$3.6.4/internals/microtask"), _ = e("/core-js-pure$3.6.4/internals/promise-resolve"), F = e("/core-js-pure$3.6.4/internals/host-report-errors"), H = e("/core-js-pure$3.6.4/internals/new-promise-capability"), S = e("/core-js-pure$3.6.4/internals/perform"), T = e("/core-js-pure$3.6.4/internals/internal-state"), U = e("/core-js-pure$3.6.4/internals/is-forced"), q = e("/core-js-pure$3.6.4/internals/well-known-symbol"), z = e("/core-js-pure$3.6.4/internals/engine-v8-version"), A = q("species"), B = "Promise", C = T.get, D = T.set, G = T.getterFor(B), I = v, J = f.TypeError, K = f.document, L = f.process, M = p("fetch"), N = H.f, O = N, Q = "process" == w(L), V = !!(K && K.createEvent && f.dispatchEvent), W = U(B, function() {
        if (b(I) === String(I)) {
            if (66 === z)
                return !0;
            if (!Q && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if (l && !I.prototype.finally)
            return !0;
        if (z >= 51 && /native code/.test(I))
            return !1;
        var e = I.resolve(1)
          , t = function(e) {
            e(function() {}, function() {})
        }
          , n = e.constructor = {};
        return n[A] = t,
        !(e.then(function() {})instanceof t)
    }), X = W || !k(function(e) {
        I.all(e).catch(function() {})
    }), Y = function(e) {
        var t;
        return !(!$(e) || "function" != typeof (t = e.then)) && t
    }, Z = function(e, t, n) {
        if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            R(function() {
                for (var o = t.value, i = 1 == t.state, c = 0; r.length > c; ) {
                    var s, a, u, l = r[c++], f = i ? l.ok : l.fail, p = l.resolve, v = l.reject, h = l.domain;
                    try {
                        f ? (i || (2 === t.rejection && re(e, t),
                        t.rejection = 1),
                        !0 === f ? s = o : (h && h.enter(),
                        s = f(o),
                        h && (h.exit(),
                        u = !0)),
                        s === l.promise ? v(J("Promise-chain cycle")) : (a = Y(s)) ? a.call(s, p, v) : p(s)) : v(o)
                    } catch (e) {
                        h && !u && h.exit(),
                        v(e)
                    }
                }
                t.reactions = [],
                t.notified = !1,
                n && !t.rejection && te(e, t)
            })
        }
    }, ee = function(e, t, n) {
        var r, o;
        V ? (r = K.createEvent("Event"),
        r.promise = t,
        r.reason = n,
        r.initEvent(e, !1, !0),
        f.dispatchEvent(r)) : r = {
            promise: t,
            reason: n
        },
        (o = f["on" + e]) ? o(r) : "unhandledrejection" === e && F("Unhandled promise rejection", n)
    }, te = function(e, t) {
        x.call(f, function() {
            var n, r = t.value, o = ne(t);
            if (o && (n = S(function() {
                Q ? L.emit("unhandledRejection", r, e) : ee("unhandledrejection", e, r)
            }),
            t.rejection = Q || ne(t) ? 2 : 1,
            n.error))
                throw n.value
        })
    }, ne = function(e) {
        return 1 !== e.rejection && !e.parent
    }, re = function(e, t) {
        x.call(f, function() {
            Q ? L.emit("rejectionHandled", e) : ee("rejectionhandled", e, t.value)
        })
    }, oe = function(e, t, n, r) {
        return function(o) {
            e(t, n, o, r)
        }
    }, ie = function(e, t, n, r) {
        t.done || (t.done = !0,
        r && (t = r),
        t.value = n,
        t.state = 2,
        Z(e, t, !0))
    }, ce = function e(t, n, r, o) {
        if (!n.done) {
            n.done = !0,
            o && (n = o);
            try {
                if (t === r)
                    throw J("Promise can't be resolved itself");
                var i = Y(r);
                i ? R(function() {
                    var o = {
                        done: !1
                    };
                    try {
                        i.call(r, oe(e, t, o, n), oe(ie, t, o, n))
                    } catch (e) {
                        ie(t, o, e, n)
                    }
                }) : (n.value = r,
                n.state = 1,
                Z(t, n, !1))
            } catch (e) {
                ie(t, {
                    done: !1
                }, e, n)
            }
        }
    };
    W && (I = function(e) {
        g(this, I, B),
        y(e),
        i.call(this);
        var t = C(this);
        try {
            e(oe(ce, this, t), oe(ie, this, t))
        } catch (e) {
            ie(this, t, e)
        }
    }
    ,
    i = function(e) {
        D(this, {
            type: B,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ,
    i.prototype = j(I.prototype, {
        then: function(e, t) {
            var n = G(this)
              , r = N(P(this, I));
            return r.ok = "function" != typeof e || e,
            r.fail = "function" == typeof t && t,
            r.domain = Q ? L.domain : void 0,
            n.parent = !0,
            n.reactions.push(r),
            0 != n.state && Z(this, n, !1),
            r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    c = function() {
        var e = new i
          , t = C(e);
        this.promise = e,
        this.resolve = oe(ce, e, t),
        this.reject = oe(ie, e, t)
    }
    ,
    H.f = N = function(e) {
        return e === I || e === s ? new c(e) : O(e)
    }
    ,
    l || "function" != typeof v || (a = v.prototype.then,
    h(v.prototype, "then", function(e, t) {
        var n = this;
        return new I(function(e, t) {
            a.call(n, e, t)
        }
        ).then(e, t)
    }, {
        unsafe: !0
    }),
    "function" == typeof M && u({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return _(I, M.apply(f, arguments))
        }
    }))),
    u({
        global: !0,
        wrap: !0,
        forced: W
    }, {
        Promise: I
    }),
    d(I, B, !1, !0),
    m(B),
    s = p(B),
    u({
        target: B,
        stat: !0,
        forced: W
    }, {
        reject: function(e) {
            var t = N(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    u({
        target: B,
        stat: !0,
        forced: l || W
    }, {
        resolve: function(e) {
            return _(l && this === s ? I : this, e)
        }
    }),
    u({
        target: B,
        stat: !0,
        forced: X
    }, {
        all: function(e) {
            var t = this
              , n = N(t)
              , r = n.resolve
              , o = n.reject
              , i = S(function() {
                var n = y(t.resolve)
                  , i = []
                  , c = 0
                  , s = 1;
                E(e, function(e) {
                    var a = c++
                      , u = !1;
                    i.push(void 0),
                    s++,
                    n.call(t, e).then(function(e) {
                        u || (u = !0,
                        i[a] = e,
                        --s || r(i))
                    }, o)
                }),
                --s || r(i)
            });
            return i.error && o(i.value),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = N(t)
              , r = n.reject
              , o = S(function() {
                var o = y(t.resolve);
                E(e, function(e) {
                    o.call(t, e).then(n.resolve, r)
                })
            });
            return o.error && r(o.value),
            n.promise
        }
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.promise.all-settled", function(e, r, t, s, n) {
    "use strict";
    var o = e("/core-js-pure$3.6.4/internals/export")
      , a = e("/core-js-pure$3.6.4/internals/a-function")
      , i = e("/core-js-pure$3.6.4/internals/new-promise-capability")
      , l = e("/core-js-pure$3.6.4/internals/perform")
      , u = e("/core-js-pure$3.6.4/internals/iterate");
    o({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(e) {
            var r = this
              , t = i.f(r)
              , s = t.resolve
              , n = t.reject
              , o = l(function() {
                var t = a(r.resolve)
                  , n = []
                  , o = 0
                  , i = 1;
                u(e, function(e) {
                    var a = o++
                      , l = !1;
                    n.push(void 0),
                    i++,
                    t.call(r, e).then(function(e) {
                        l || (l = !0,
                        n[a] = {
                            status: "fulfilled",
                            value: e
                        },
                        --i || s(n))
                    }, function(e) {
                        l || (l = !0,
                        n[a] = {
                            status: "rejected",
                            reason: e
                        },
                        --i || s(n))
                    })
                }),
                --i || s(n)
            });
            return o.error && n(o.value),
            t.promise
        }
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/es.promise.finally", function(e, r, n, t, o) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/export")
      , s = e("/core-js-pure$3.6.4/internals/is-pure")
      , u = e("/core-js-pure$3.6.4/internals/native-promise-constructor")
      , c = e("/core-js-pure$3.6.4/internals/fails")
      , l = e("/core-js-pure$3.6.4/internals/get-built-in")
      , p = e("/core-js-pure$3.6.4/internals/species-constructor")
      , f = e("/core-js-pure$3.6.4/internals/promise-resolve")
      , a = e("/core-js-pure$3.6.4/internals/redefine");
    i({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!u && c(function() {
            u.prototype.finally.call({
                then: function() {}
            }, function() {})
        })
    }, {
        finally: function(e) {
            var r = p(this, l("Promise"))
              , n = "function" == typeof e;
            return this.then(n ? function(n) {
                return f(r, e()).then(function() {
                    return n
                })
            }
            : e, n ? function(n) {
                return f(r, e()).then(function() {
                    throw n
                })
            }
            : e)
        }
    }),
    s || "function" != typeof u || u.prototype.finally || a(u.prototype, "finally", l("Promise").prototype.finally)
});
$_mod_webchat.def("/core-js-pure$3.6.4/es/promise/index", function(e, s, r, o, t) {
    "use strict";
    e("/core-js-pure$3.6.4/modules/es.object.to-string"),
    e("/core-js-pure$3.6.4/modules/es.string.iterator"),
    e("/core-js-pure$3.6.4/modules/web.dom-collections.iterator"),
    e("/core-js-pure$3.6.4/modules/es.promise"),
    e("/core-js-pure$3.6.4/modules/es.promise.all-settled"),
    e("/core-js-pure$3.6.4/modules/es.promise.finally");
    var u = e("/core-js-pure$3.6.4/internals/path");
    r.exports = u.Promise
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/esnext.aggregate-error", function(r, e, t, o, n) {
    "use strict";
    var s = r("/core-js-pure$3.6.4/internals/export")
      , a = r("/core-js-pure$3.6.4/internals/descriptors")
      , p = r("/core-js-pure$3.6.4/internals/object-get-prototype-of")
      , c = r("/core-js-pure$3.6.4/internals/object-set-prototype-of")
      , i = r("/core-js-pure$3.6.4/internals/object-create")
      , g = r("/core-js-pure$3.6.4/internals/object-define-property")
      , u = r("/core-js-pure$3.6.4/internals/create-property-descriptor")
      , l = r("/core-js-pure$3.6.4/internals/iterate")
      , j = r("/core-js-pure$3.6.4/internals/create-non-enumerable-property")
      , $ = r("/core-js-pure$3.6.4/internals/internal-state")
      , f = $.set
      , y = $.getterFor("AggregateError")
      , b = function(r, e) {
        var t = this;
        if (!(t instanceof b))
            return new b(r,e);
        c && (t = c(new Error(e), p(t)));
        var o = [];
        return l(r, o.push, o),
        a ? f(t, {
            errors: o,
            type: "AggregateError"
        }) : t.errors = o,
        void 0 !== e && j(t, "message", String(e)),
        t
    };
    b.prototype = i(Error.prototype, {
        constructor: u(5, b),
        message: u(5, ""),
        name: u(5, "AggregateError")
    }),
    a && g.f(b.prototype, "errors", {
        get: function() {
            return y(this).errors
        },
        configurable: !0
    }),
    s({
        global: !0
    }, {
        AggregateError: b
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/esnext.promise.all-settled", function(e, s, t, l, o) {
    "use strict";
    e("/core-js-pure$3.6.4/modules/es.promise.all-settled")
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/esnext.promise.try", function(e, r, t, s, o) {
    "use strict";
    var i = e("/core-js-pure$3.6.4/internals/export")
      , n = e("/core-js-pure$3.6.4/internals/new-promise-capability")
      , a = e("/core-js-pure$3.6.4/internals/perform");
    i({
        target: "Promise",
        stat: !0
    }, {
        try: function(e) {
            var r = n.f(this)
              , t = a(e);
            return (t.error ? r.reject : r.resolve)(t.value),
            r.promise
        }
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/modules/esnext.promise.any", function(e, r, n, o, t) {
    "use strict";
    var s = e("/core-js-pure$3.6.4/internals/export")
      , i = e("/core-js-pure$3.6.4/internals/a-function")
      , a = e("/core-js-pure$3.6.4/internals/get-built-in")
      , u = e("/core-js-pure$3.6.4/internals/new-promise-capability")
      , c = e("/core-js-pure$3.6.4/internals/perform")
      , l = e("/core-js-pure$3.6.4/internals/iterate");
    s({
        target: "Promise",
        stat: !0
    }, {
        any: function(e) {
            var r = this
              , n = u.f(r)
              , o = n.resolve
              , t = n.reject
              , s = c(function() {
                var n = i(r.resolve)
                  , s = []
                  , u = 0
                  , c = 1
                  , p = !1;
                l(e, function(e) {
                    var i = u++
                      , l = !1;
                    s.push(void 0),
                    c++,
                    n.call(r, e).then(function(e) {
                        l || p || (p = !0,
                        o(e))
                    }, function(e) {
                        l || p || (l = !0,
                        s[i] = e,
                        --c || t(new (a("AggregateError"))(s,"No one promise resolved")))
                    })
                }),
                --c || t(new (a("AggregateError"))(s,"No one promise resolved"))
            });
            return s.error && t(s.value),
            n.promise
        }
    })
});
$_mod_webchat.def("/core-js-pure$3.6.4/features/promise/index", function(e, r, s, o, t) {
    "use strict";
    var u = e("/core-js-pure$3.6.4/es/promise/index");
    e("/core-js-pure$3.6.4/modules/esnext.aggregate-error"),
    e("/core-js-pure$3.6.4/modules/esnext.promise.all-settled"),
    e("/core-js-pure$3.6.4/modules/esnext.promise.try"),
    e("/core-js-pure$3.6.4/modules/esnext.promise.any"),
    s.exports = u
});
$_mod_webchat.def("/@purecloud/cross-domain-storage$1.4.0/index", function(e, r, t, n, s) {
    "use strict";
    function a(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new p(function(e, t) {
                function n(s, a) {
                    try {
                        var o = r[s](a)
                          , i = o.value
                    } catch (e) {
                        return void t(e)
                    }
                    if (!o.done)
                        return p.resolve(i).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                    e(i)
                }
                return n("next")
            }
            )
        }
    }
    function o(e) {
        var r = e.origin
          , t = e.key;
        return v + ":" + r + ":" + t
    }
    function i() {
        function e(e) {
            for (var r = e.accessors, t = e.origin, n = 0; n < r.length; n++) {
                var s = r[n];
                if (s === t)
                    return s
            }
            return null
        }
        var r = this
          , t = function() {
            var e = a(regeneratorRuntime.mark(function e(r, t) {
                var n, s, a = t.source, i = t.accessors, u = t.ttl, c = t.key, p = t.value, f = t.requestId;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("string" == typeof c) {
                                e.next = 2;
                                break
                            }
                            throw new Error("key must be a string");
                        case 2:
                            n = o({
                                origin: r,
                                key: c
                            }),
                            i instanceof Array || (i = []),
                            i = i.filter(function(e) {
                                return "string" == typeof e ? e : void 0
                            }),
                            r in i || i.push(r),
                            s = u ? Date.now() + u : null,
                            window.localStorage.setItem(n, JSON.stringify({
                                accessors: i,
                                origin: r,
                                requestId: f,
                                expiresAt: s,
                                value: p
                            })),
                            a.postMessage({
                                type: g,
                                requestId: f,
                                expiresAt: s,
                                storageKey: n,
                                key: c,
                                success: !0
                            }, r);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function(r, t) {
                return e.apply(this, arguments)
            }
        }()
          , n = function() {
            var r = a(regeneratorRuntime.mark(function r(t, n) {
                var s, a, i, u, c, p, f, v, d = n.crossDomainOrigin, g = n.source, l = n.key, w = n.requestId;
                return regeneratorRuntime.wrap(function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            if (s = d || t,
                            a = o({
                                origin: s,
                                key: l
                            }),
                            i = window.localStorage.getItem(a)) {
                                r.next = 5;
                                break
                            }
                            throw new Error(l + " not found");
                        case 5:
                            if (u = JSON.parse(i),
                            c = u.accessors,
                            p = u.expiresAt,
                            f = u.value,
                            v = e({
                                accessors: c,
                                origin: t
                            })) {
                                r.next = 9;
                                break
                            }
                            throw new Error(l + " not found");
                        case 9:
                            if (!(p && Date.now() > p)) {
                                r.next = 12;
                                break
                            }
                            throw window.localStorage.removeItem(a),
                            new Error(l + " not found");
                        case 12:
                            return r.abrupt("return", g.postMessage({
                                success: !0,
                                type: m,
                                key: l,
                                value: f,
                                requestId: w
                            }, v));
                        case 13:
                        case "end":
                            return r.stop()
                        }
                }, r, this)
            }));
            return function(e, t) {
                return r.apply(this, arguments)
            }
        }()
          , s = function() {
            var r = a(regeneratorRuntime.mark(function r(t, n) {
                var s, a, i, u, c, p = n.crossDomainOrigin, f = n.source, v = n.key, d = n.requestId;
                return regeneratorRuntime.wrap(function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            if (s = p || t,
                            a = o({
                                origin: s,
                                key: v
                            }),
                            i = JSON.parse(localStorage.getItem(a))) {
                                r.next = 5;
                                break
                            }
                            throw new Error(v + " not found");
                        case 5:
                            if (u = i.accessors,
                            c = e({
                                accessors: u,
                                origin: t
                            })) {
                                r.next = 9;
                                break
                            }
                            throw new Error("grant: " + v + " not found");
                        case 9:
                            return window.localStorage.removeItem(a),
                            r.abrupt("return", f.postMessage({
                                type: h,
                                success: !0,
                                requestId: d
                            }, c));
                        case 11:
                        case "end":
                            return r.stop()
                        }
                }, r, this)
            }));
            return function(e, t) {
                return r.apply(this, arguments)
            }
        }();
        window.addEventListener("message", function() {
            var e = a(regeneratorRuntime.mark(function e(a) {
                var o, i, u, c, p, f, v, y, k, x;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (o = a.origin,
                            i = a.source,
                            u = a.data,
                            c = u.type,
                            p = u.crossDomainOrigin,
                            f = u.accessors,
                            v = u.key,
                            y = u.value,
                            k = u.ttl,
                            x = u.requestId,
                            c !== d) {
                                e.next = 13;
                                break
                            }
                            return e.prev = 3,
                            e.next = 6,
                            t(o, {
                                source: i,
                                accessors: f,
                                ttl: k,
                                key: v,
                                value: y,
                                requestId: x
                            });
                        case 6:
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(3),
                            i.postMessage({
                                type: g,
                                requestId: x,
                                err: e.t0.message,
                                success: !1
                            }, o);
                        case 11:
                            e.next = 33;
                            break;
                        case 13:
                            if (c !== l) {
                                e.next = 24;
                                break
                            }
                            return e.prev = 14,
                            e.next = 17,
                            n(o, {
                                crossDomainOrigin: p,
                                source: i,
                                key: v,
                                requestId: x
                            });
                        case 17:
                            e.next = 22;
                            break;
                        case 19:
                            e.prev = 19,
                            e.t1 = e.catch(14),
                            i.postMessage({
                                type: m,
                                requestId: x,
                                err: e.t1.message,
                                success: !1
                            }, o);
                        case 22:
                            e.next = 33;
                            break;
                        case 24:
                            if (c !== w) {
                                e.next = 33;
                                break
                            }
                            return e.prev = 25,
                            e.next = 28,
                            s(o, {
                                crossDomainOrigin: p,
                                source: i,
                                key: v,
                                requestId: x
                            });
                        case 28:
                            e.next = 33;
                            break;
                        case 30:
                            e.prev = 30,
                            e.t2 = e.catch(25),
                            i.postMessage({
                                type: h,
                                requestId: x,
                                err: e.t2.message,
                                success: !1
                            }, o);
                        case 33:
                        case "end":
                            return e.stop()
                        }
                }, e, r, [[3, 8], [14, 19], [25, 30]])
            }));
            return function(r) {
                return e.apply(this, arguments)
            }
        }()),
        window.parent.postMessage({
            type: k,
            success: !0,
            frameHref: window.location.href
        }, "*")
    }
    function u(e) {
        function r() {
            return M++
        }
        function t(e, r) {
            return e + ":::" + r
        }
        function n(e) {
            var r = e.origin
              , n = e.success
              , s = e.requestId
              , a = e.err
              , o = e.value
              , i = t(r, s)
              , u = E[i];
            delete E[i],
            u && u({
                success: n,
                err: a,
                value: o
            })
        }
        function s(e) {
            return new p(function(r, n) {
                var s = t(_, e);
                E[s] = function(e) {
                    var t = e.success
                      , s = e.err
                      , a = e.value;
                    return t ? r(a) : n(new Error(s))
                }
            }
            )
        }
        function o(e, t) {
            var n = r()
              , a = s(n);
            return b.contentWindow.postMessage({
                type: w,
                key: e,
                requestId: n,
                crossDomainOrigin: t
            }, _),
            a
        }
        function i(e, t) {
            var n = r()
              , a = s(n);
            return b.contentWindow.postMessage({
                type: l,
                crossDomainOrigin: t,
                key: e,
                requestId: n
            }, _),
            a
        }
        var u = function() {
            var e = a(regeneratorRuntime.mark(function e(t) {
                var n, a, o = t.accessors, i = t.ttl, u = t.key, c = t.value;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = r(),
                            a = s(n),
                            b.contentWindow.postMessage({
                                type: d,
                                key: u,
                                value: c,
                                accessors: o,
                                ttl: i,
                                requestId: n
                            }, _),
                            e.abrupt("return", a);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function(r) {
                return e.apply(this, arguments)
            }
        }()
          , f = function() {
            var e = a(regeneratorRuntime.mark(function e(r) {
                var t, n, s, a, i, u, c, p, f, v = r.key, d = r.crossDomainOrigin;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = d ? d.split("|") : [void 0],
                            n = void 0,
                            s = !0,
                            a = !1,
                            i = void 0,
                            e.prev = 5,
                            u = t[Symbol.iterator]();
                        case 7:
                            if (s = (c = u.next()).done) {
                                e.next = 23;
                                break
                            }
                            return p = c.value,
                            e.prev = 9,
                            e.next = 12,
                            o(v, p);
                        case 12:
                            return f = e.sent,
                            e.abrupt("return", f);
                        case 16:
                            return e.prev = 16,
                            e.t0 = e.catch(9),
                            n = e.t0,
                            e.abrupt("continue", 20);
                        case 20:
                            s = !0,
                            e.next = 7;
                            break;
                        case 23:
                            e.next = 29;
                            break;
                        case 25:
                            e.prev = 25,
                            e.t1 = e.catch(5),
                            a = !0,
                            i = e.t1;
                        case 29:
                            e.prev = 29,
                            e.prev = 30,
                            !s && u.return && u.return();
                        case 32:
                            if (e.prev = 32,
                            !a) {
                                e.next = 35;
                                break
                            }
                            throw i;
                        case 35:
                            return e.finish(32);
                        case 36:
                            return e.finish(29);
                        case 37:
                            throw n;
                        case 38:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[5, 25, 29, 37], [9, 16], [30, , 32, 36]])
            }));
            return function(r) {
                return e.apply(this, arguments)
            }
        }()
          , v = function() {
            var e = a(regeneratorRuntime.mark(function e(r) {
                var t, n, s, a, o, u, c, p, f, v = r.key, d = r.crossDomainOrigin;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = d ? d.split("|") : [void 0],
                            n = void 0,
                            s = !0,
                            a = !1,
                            o = void 0,
                            e.prev = 5,
                            u = t[Symbol.iterator]();
                        case 7:
                            if (s = (c = u.next()).done) {
                                e.next = 23;
                                break
                            }
                            return p = c.value,
                            e.prev = 9,
                            e.next = 12,
                            i(v, p);
                        case 12:
                            return f = e.sent,
                            e.abrupt("return", f);
                        case 16:
                            return e.prev = 16,
                            e.t0 = e.catch(9),
                            n = e.t0,
                            e.abrupt("continue", 20);
                        case 20:
                            s = !0,
                            e.next = 7;
                            break;
                        case 23:
                            e.next = 29;
                            break;
                        case 25:
                            e.prev = 25,
                            e.t1 = e.catch(5),
                            a = !0,
                            o = e.t1;
                        case 29:
                            e.prev = 29,
                            e.prev = 30,
                            !s && u.return && u.return();
                        case 32:
                            if (e.prev = 32,
                            !a) {
                                e.next = 35;
                                break
                            }
                            throw o;
                        case 35:
                            return e.finish(32);
                        case 36:
                            return e.finish(29);
                        case 37:
                            throw n;
                        case 38:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[5, 25, 29, 37], [9, 16], [30, , 32, 36]])
            }));
            return function(r) {
                return e.apply(this, arguments)
            }
        }()
          , x = function() {
            var e = a(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            s(k);
                        case 2:
                            return e.abrupt("return", this);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , b = e.frame
          , I = e.targetUrl
          , E = {};
        if (!(b instanceof window.HTMLElement) && I) {
            b = document.createElement("iframe"),
            b.setAttribute("src", I),
            b.setAttribute("width", 0),
            b.setAttribute("height", 0),
            b.setAttribute("style", "display: none; border: 0;"),
            b.setAttribute("sandbox", "allow-scripts allow-same-origin");
            var R = document.getElementsByTagName("body")[0];
            R && R.appendChild(b)
        }
        var q = b.getAttribute("src")
          , S = q.match(y)
          , O = c(S, 1)
          , _ = O[0];
        window.addEventListener("message", function(e) {
            var r = e.origin
              , t = e.data
              , s = e.source
              , a = t.type
              , o = t.success
              , i = t.value
              , u = t.requestId
              , c = t.err;
            s === b.contentWindow && (a === g && n({
                origin: r,
                success: o,
                err: c,
                requestId: u
            }),
            a === m && n({
                origin: r,
                success: o,
                err: c,
                requestId: u,
                value: i
            }),
            a === h && n({
                origin: r,
                success: o,
                err: c,
                requestId: u
            }),
            a === k && n({
                origin: r,
                success: o,
                err: c,
                requestId: k
            }))
        });
        var M = 0;
        return {
            store: u,
            retrieve: v,
            remove: f,
            init: x
        }
    }
    var c = function() {
        function e(e, r) {
            var t = []
              , n = !0
              , s = !1
              , a = void 0;
            try {
                for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (t.push(o.value),
                !r || t.length !== r); n = !0)
                    ;
            } catch (e) {
                s = !0,
                a = e
            } finally {
                try {
                    !n && i.return && i.return()
                } finally {
                    if (s)
                        throw a
                }
            }
            return t
        }
        return function(r, t) {
            if (Array.isArray(r))
                return r;
            if (Symbol.iterator in Object(r))
                return e(r, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , p = e("/core-js-pure$3.6.4/features/promise/index")
      , f = "__crossdomain_event__"
      , v = "__crossdomain_storage__"
      , d = f + ":STORE"
      , g = f + ":STORE_RESULT"
      , l = f + ":RETRIEVE"
      , m = f + ":RETRIEVE_RESULT"
      , w = f + ":REMOVE"
      , h = f + ":REMOVE_RESULT"
      , y = /^(http|https):\/\/[^/]+/
      , k = f + ":INIT";
    t.exports = {
        setupStorage: i,
        setupStorageClient: u
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/storage/index", function(e, t, r, n, u) {
    "use strict";
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                function n(u, o) {
                    try {
                        var i = t[u](o)
                          , a = i.value
                    } catch (e) {
                        return void r(e)
                    }
                    if (!i.done)
                        return Promise.resolve(a).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                    e(a)
                }
                return n("next")
            }
            )
        }
    }
    var i = e("/purecloud-webchat$2.0.0/src/storage/StorageClient")
      , a = e("/@purecloud/cross-domain-storage$1.4.0/index")
      , c = a.setupStorageClient;
    t.createClient = function() {
        var e = o(regeneratorRuntime.mark(function e(t, r) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = (c || window.setupStorageClient)({
                            targetUrl: t
                        }),
                        e.next = 3,
                        n.init();
                    case 3:
                        return e.abrupt("return", new i(n,r));
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/util/url-join", function(t, r, n, u, c) {
    "use strict";
    function e(t) {
        return "/" === t.charAt(t.length - 1)
    }
    n.exports = function() {
        for (var t = arguments, r = t.length, n = t[0], u = 1; u < r; u++) {
            var c = t[u];
            "/" === c.charAt(0) ? e(n) && (c = c.substring(1)) : e(n) || (c = "/" + c),
            n += c
        }
        return n
    }
});
$_mod_webchat.main("/purecloud-webchat$2.0.0/src/jsapi/util", "");
$_mod_webchat.main("/purecloud-webchat$2.0.0/src/lib/url", "");
$_mod_webchat.installed("purecloud-webchat$2.0.0", "punycode", "2.1.0");
$_mod_webchat.main("/punycode$2.1.0", "punycode");
$_mod_webchat.def("/punycode$2.1.0/punycode", function(r, n, t, o, e) {
    "use strict";
    function a(r) {
        if (Array.isArray(r)) {
            for (var n = 0, t = Array(r.length); n < r.length; n++)
                t[n] = r[n];
            return t
        }
        return Array.from(r)
    }
    function i(r) {
        throw new RangeError(s[r])
    }
    function u(r, n) {
        for (var t = [], o = r.length; o--; )
            t[o] = n(r[o]);
        return t
    }
    function f(r, n) {
        var t = r.split("@")
          , o = "";
        return t.length > 1 && (o = t[0] + "@",
        r = t[1]),
        r = r.replace(h, "."),
        o + u(r.split("."), n).join(".")
    }
    function l(r) {
        for (var n = [], t = 0, o = r.length; t < o; ) {
            var e = r.charCodeAt(t++);
            if (e >= 55296 && e <= 56319 && t < o) {
                var a = r.charCodeAt(t++);
                56320 == (64512 & a) ? n.push(((1023 & e) << 10) + (1023 & a) + 65536) : (n.push(e),
                t--)
            } else
                n.push(e)
        }
        return n
    }
    var v = 2147483647
      , c = /^xn--/
      , d = /[^\0-\x7E]/
      , h = /[\x2E\u3002\uFF0E\uFF61]/g
      , s = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }
      , p = Math.floor
      , y = String.fromCharCode
      , g = function(r) {
        return String.fromCodePoint.apply(String, a(r))
    }
      , w = function(r) {
        return r - 48 < 10 ? r - 22 : r - 65 < 26 ? r - 65 : r - 97 < 26 ? r - 97 : 36
    }
      , C = function(r, n) {
        return r + 22 + 75 * (r < 26) - ((0 != n) << 5)
    }
      , x = function(r, n, t) {
        var o = 0;
        for (r = t ? p(r / 700) : r >> 1,
        r += p(r / n); r > 455; o += 36)
            r = p(r / 35);
        return p(o + 36 * r / (r + 38))
    }
      , A = function(r) {
        var n = []
          , t = r.length
          , o = 0
          , e = 128
          , a = 72
          , u = r.lastIndexOf("-");
        u < 0 && (u = 0);
        for (var f = 0; f < u; ++f)
            r.charCodeAt(f) >= 128 && i("not-basic"),
            n.push(r.charCodeAt(f));
        for (var l = u > 0 ? u + 1 : 0; l < t; ) {
            for (var c = o, d = 1, h = 36; ; h += 36) {
                l >= t && i("invalid-input");
                var s = w(r.charCodeAt(l++));
                (s >= 36 || s > p((v - o) / d)) && i("overflow"),
                o += s * d;
                var y = h <= a ? 1 : h >= a + 26 ? 26 : h - a;
                if (s < y)
                    break;
                var g = 36 - y;
                d > p(v / g) && i("overflow"),
                d *= g
            }
            var C = n.length + 1;
            a = x(o - c, C, 0 == c),
            p(o / C) > v - e && i("overflow"),
            e += p(o / C),
            o %= C,
            n.splice(o++, 0, e)
        }
        return String.fromCodePoint.apply(String, n)
    }
      , b = function(r) {
        var n = [];
        r = l(r);
        var t = r.length
          , o = 128
          , e = 0
          , a = 72
          , u = !0
          , f = !1
          , c = void 0;
        try {
            for (var d, h = r[Symbol.iterator](); !(u = (d = h.next()).done); u = !0) {
                var s = d.value;
                s < 128 && n.push(y(s))
            }
        } catch (r) {
            f = !0,
            c = r
        } finally {
            try {
                !u && h.return && h.return()
            } finally {
                if (f)
                    throw c
            }
        }
        var g = n.length
          , w = g;
        for (g && n.push("-"); w < t; ) {
            var A = v
              , b = !0
              , S = !1
              , m = void 0;
            try {
                for (var I, E = r[Symbol.iterator](); !(b = (I = E.next()).done); b = !0) {
                    var F = I.value;
                    F >= o && F < A && (A = F)
                }
            } catch (r) {
                S = !0,
                m = r
            } finally {
                try {
                    !b && E.return && E.return()
                } finally {
                    if (S)
                        throw m
                }
            }
            var j = w + 1;
            A - o > p((v - e) / j) && i("overflow"),
            e += (A - o) * j,
            o = A;
            var k = !0
              , O = !1
              , P = void 0;
            try {
                for (var $, _ = r[Symbol.iterator](); !(k = ($ = _.next()).done); k = !0) {
                    var L = $.value;
                    if (L < o && ++e > v && i("overflow"),
                    L == o) {
                        for (var M = e, R = 36; ; R += 36) {
                            var U = R <= a ? 1 : R >= a + 26 ? 26 : R - a;
                            if (M < U)
                                break;
                            var q = M - U
                              , z = 36 - U;
                            n.push(y(C(U + q % z, 0))),
                            M = p(q / z)
                        }
                        n.push(y(C(M, 0))),
                        a = x(e, j, w == g),
                        e = 0,
                        ++w
                    }
                }
            } catch (r) {
                O = !0,
                P = r
            } finally {
                try {
                    !k && _.return && _.return()
                } finally {
                    if (O)
                        throw P
                }
            }
            ++e,
            ++o
        }
        return n.join("")
    }
      , S = function(r) {
        return f(r, function(r) {
            return c.test(r) ? A(r.slice(4).toLowerCase()) : r
        })
    }
      , m = function(r) {
        return f(r, function(r) {
            return d.test(r) ? "xn--" + b(r) : r
        })
    }
      , I = {
        version: "2.1.0",
        ucs2: {
            decode: l,
            encode: g
        },
        decode: A,
        encode: b,
        toASCII: m,
        toUnicode: S
    };
    t.exports = I
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/lib/url/util", function(t, n, o, u, e) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    o.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "querystring", "0.2.0");
$_mod_webchat.main("/querystring$0.2.0", "");
$_mod_webchat.def("/querystring$0.2.0/decode", function(e, r, t, n, o) {
    "use strict";
    function s(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    t.exports = function(e, r, t, n) {
        r = r || "&",
        t = t || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length)
            return o;
        var a = /\+/g;
        e = e.split(r);
        var u = 1e3;
        n && "number" == typeof n.maxKeys && (u = n.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var p = 0; p < c; ++p) {
            var i, d, f, y, l = e[p].replace(a, "%20"), m = l.indexOf(t);
            m >= 0 ? (i = l.substr(0, m),
            d = l.substr(m + 1)) : (i = l,
            d = ""),
            f = decodeURIComponent(i),
            y = decodeURIComponent(d),
            s(o, f) ? Array.isArray(o[f]) ? o[f].push(y) : o[f] = [o[f], y] : o[f] = y
        }
        return o
    }
});
$_mod_webchat.def("/querystring$0.2.0/encode", function(n, e, o, t, r) {
    "use strict";
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
      , c = function(n) {
        switch (void 0 === n ? "undefined" : u(n)) {
        case "string":
            return n;
        case "boolean":
            return n ? "true" : "false";
        case "number":
            return isFinite(n) ? n : "";
        default:
            return ""
        }
    };
    o.exports = function(n, e, o, t) {
        return e = e || "&",
        o = o || "=",
        null === n && (n = void 0),
        "object" === (void 0 === n ? "undefined" : u(n)) ? Object.keys(n).map(function(t) {
            var r = encodeURIComponent(c(t)) + o;
            return Array.isArray(n[t]) ? n[t].map(function(n) {
                return r + encodeURIComponent(c(n))
            }).join(e) : r + encodeURIComponent(c(n[t]))
        }).join(e) : t ? encodeURIComponent(c(t)) + o + encodeURIComponent(c(n)) : ""
    }
});
$_mod_webchat.def("/querystring$0.2.0/index", function(e, d, n, r, i) {
    "use strict";
    d.decode = d.parse = e("/querystring$0.2.0/decode"),
    d.encode = d.stringify = e("/querystring$0.2.0/encode")
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/lib/url/index", function(t, s, h, e, a) {
    "use strict";
    function r() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    function o(t, s, h) {
        if (t && u.isObject(t) && t instanceof r)
            return t;
        var e = new r;
        return e.parse(t, s, h),
        e
    }
    function n(t) {
        return u.isString(t) && (t = o(t)),
        t instanceof r ? t.format() : r.prototype.format.call(t)
    }
    function i(t, s) {
        return o(t, !1, !0).resolve(s)
    }
    function l(t, s) {
        return t ? o(t, !1, !0).resolveObject(s) : s
    }
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , c = t("/punycode$2.1.0/punycode")
      , u = t("/purecloud-webchat$2.0.0/src/lib/url/util");
    s.parse = o,
    s.resolve = i,
    s.resolveObject = l,
    s.format = n,
    s.Url = r;
    var f = /^([a-z0-9.+-]+:)/i
      , m = /:[0-9]*$/
      , v = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
      , y = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
      , b = ["{", "}", "|", "\\", "^", "`"].concat(y)
      , g = ["'"].concat(b)
      , d = ["%", "/", "?", ";", "#"].concat(g)
      , O = ["/", "?", "#"]
      , j = /^[+a-z0-9A-Z_-]{0,63}$/
      , q = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
      , x = {
        javascript: !0,
        "javascript:": !0
    }
      , A = {
        javascript: !0,
        "javascript:": !0
    }
      , w = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    }
      , S = t("/querystring$0.2.0/index");
    r.prototype.parse = function(t, s, h) {
        if (!u.isString(t))
            throw new TypeError("Parameter 'url' must be a string, not " + (void 0 === t ? "undefined" : p(t)));
        var e = t.indexOf("?")
          , a = -1 !== e && e < t.indexOf("#") ? "?" : "#"
          , r = t.split(a)
          , o = /\\/g;
        r[0] = r[0].replace(o, "/"),
        t = r.join(a);
        var n = t;
        if (n = n.trim(),
        !h && 1 === t.split("#").length) {
            var i = v.exec(n);
            if (i)
                return this.path = n,
                this.href = n,
                this.pathname = i[1],
                i[2] ? (this.search = i[2],
                this.query = s ? S.parse(this.search.substr(1)) : this.search.substr(1)) : s && (this.search = "",
                this.query = {}),
                this
        }
        var l = f.exec(n);
        if (l) {
            l = l[0];
            var m = l.toLowerCase();
            this.protocol = m,
            n = n.substr(l.length)
        }
        if (h || l || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var y = "//" === n.substr(0, 2);
            !y || l && A[l] || (n = n.substr(2),
            this.slashes = !0)
        }
        if (!A[l] && (y || l && !w[l])) {
            for (var b = -1, $ = 0; $ < O.length; $++) {
                var C = n.indexOf(O[$]);
                -1 !== C && (-1 === b || C < b) && (b = C)
            }
            var I, U;
            U = -1 === b ? n.lastIndexOf("@") : n.lastIndexOf("@", b),
            -1 !== U && (I = n.slice(0, U),
            n = n.slice(U + 1),
            this.auth = decodeURIComponent(I)),
            b = -1;
            for (var $ = 0; $ < d.length; $++) {
                var C = n.indexOf(d[$]);
                -1 !== C && (-1 === b || C < b) && (b = C)
            }
            -1 === b && (b = n.length),
            this.host = n.slice(0, b),
            n = n.slice(b),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var k = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!k)
                for (var N = this.hostname.split(/\./), $ = 0, R = N.length; $ < R; $++) {
                    var _ = N[$];
                    if (_ && !_.match(j)) {
                        for (var z = "", H = 0, L = _.length; H < L; H++)
                            _.charCodeAt(H) > 127 ? z += "x" : z += _[H];
                        if (!z.match(j)) {
                            var Z = N.slice(0, $)
                              , E = N.slice($ + 1)
                              , P = _.match(q);
                            P && (Z.push(P[1]),
                            E.unshift(P[2])),
                            E.length && (n = "/" + E.join(".") + n),
                            this.hostname = Z.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            k || (this.hostname = c.toASCII(this.hostname));
            var T = this.port ? ":" + this.port : ""
              , B = this.hostname || "";
            this.host = B + T,
            this.href += this.host,
            k && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            "/" !== n[0] && (n = "/" + n))
        }
        if (!x[m])
            for (var $ = 0, R = g.length; $ < R; $++) {
                var D = g[$];
                if (-1 !== n.indexOf(D)) {
                    var F = encodeURIComponent(D);
                    F === D && (F = escape(D)),
                    n = n.split(D).join(F)
                }
            }
        var G = n.indexOf("#");
        -1 !== G && (this.hash = n.substr(G),
        n = n.slice(0, G));
        var J = n.indexOf("?");
        if (-1 !== J ? (this.search = n.substr(J),
        this.query = n.substr(J + 1),
        s && (this.query = S.parse(this.query)),
        n = n.slice(0, J)) : s && (this.search = "",
        this.query = {}),
        n && (this.pathname = n),
        w[m] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            var T = this.pathname || ""
              , K = this.search || "";
            this.path = T + K
        }
        return this.href = this.format(),
        this
    }
    ,
    r.prototype.format = function() {
        var t = this.auth || "";
        t && (t = encodeURIComponent(t),
        t = t.replace(/%3A/i, ":"),
        t += "@");
        var s = this.protocol || ""
          , h = this.pathname || ""
          , e = this.hash || ""
          , a = !1
          , r = "";
        this.host ? a = t + this.host : this.hostname && (a = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
        this.port && (a += ":" + this.port)),
        this.query && u.isObject(this.query) && Object.keys(this.query).length && (r = S.stringify(this.query));
        var o = this.search || r && "?" + r || "";
        return s && ":" !== s.substr(-1) && (s += ":"),
        this.slashes || (!s || w[s]) && !1 !== a ? (a = "//" + (a || ""),
        h && "/" !== h.charAt(0) && (h = "/" + h)) : a || (a = ""),
        e && "#" !== e.charAt(0) && (e = "#" + e),
        o && "?" !== o.charAt(0) && (o = "?" + o),
        h = h.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        }),
        o = o.replace("#", "%23"),
        s + a + h + o + e
    }
    ,
    r.prototype.resolve = function(t) {
        return this.resolveObject(o(t, !1, !0)).format()
    }
    ,
    r.prototype.resolveObject = function(t) {
        if (u.isString(t)) {
            var s = new r;
            s.parse(t, !1, !0),
            t = s
        }
        for (var h = new r, e = Object.keys(this), a = 0; a < e.length; a++) {
            var o = e[a];
            h[o] = this[o]
        }
        if (h.hash = t.hash,
        "" === t.href)
            return h.href = h.format(),
            h;
        if (t.slashes && !t.protocol) {
            for (var n = Object.keys(t), i = 0; i < n.length; i++) {
                var l = n[i];
                "protocol" !== l && (h[l] = t[l])
            }
            return w[h.protocol] && h.hostname && !h.pathname && (h.path = h.pathname = "/"),
            h.href = h.format(),
            h
        }
        if (t.protocol && t.protocol !== h.protocol) {
            if (!w[t.protocol]) {
                for (var p = Object.keys(t), c = 0; c < p.length; c++) {
                    var f = p[c];
                    h[f] = t[f]
                }
                return h.href = h.format(),
                h
            }
            if (h.protocol = t.protocol,
            t.host || A[t.protocol])
                h.pathname = t.pathname;
            else {
                for (var m = (t.pathname || "").split("/"); m.length && !(t.host = m.shift()); )
                    ;
                t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== m[0] && m.unshift(""),
                m.length < 2 && m.unshift(""),
                h.pathname = m.join("/")
            }
            if (h.search = t.search,
            h.query = t.query,
            h.host = t.host || "",
            h.auth = t.auth,
            h.hostname = t.hostname || t.host,
            h.port = t.port,
            h.pathname || h.search) {
                var v = h.pathname || ""
                  , y = h.search || "";
                h.path = v + y
            }
            return h.slashes = h.slashes || t.slashes,
            h.href = h.format(),
            h
        }
        var b = h.pathname && "/" === h.pathname.charAt(0)
          , g = t.host || t.pathname && "/" === t.pathname.charAt(0)
          , d = g || b || h.host && t.pathname
          , O = d
          , j = h.pathname && h.pathname.split("/") || []
          , m = t.pathname && t.pathname.split("/") || []
          , q = h.protocol && !w[h.protocol];
        if (q && (h.hostname = "",
        h.port = null,
        h.host && ("" === j[0] ? j[0] = h.host : j.unshift(h.host)),
        h.host = "",
        t.protocol && (t.hostname = null,
        t.port = null,
        t.host && ("" === m[0] ? m[0] = t.host : m.unshift(t.host)),
        t.host = null),
        d = d && ("" === m[0] || "" === j[0])),
        g)
            h.host = t.host || "" === t.host ? t.host : h.host,
            h.hostname = t.hostname || "" === t.hostname ? t.hostname : h.hostname,
            h.search = t.search,
            h.query = t.query,
            j = m;
        else if (m.length)
            j || (j = []),
            j.pop(),
            j = j.concat(m),
            h.search = t.search,
            h.query = t.query;
        else if (!u.isNullOrUndefined(t.search)) {
            if (q) {
                h.hostname = h.host = j.shift();
                var x = !!(h.host && h.host.indexOf("@") > 0) && h.host.split("@");
                x && (h.auth = x.shift(),
                h.host = h.hostname = x.shift())
            }
            return h.search = t.search,
            h.query = t.query,
            u.isNull(h.pathname) && u.isNull(h.search) || (h.path = (h.pathname ? h.pathname : "") + (h.search ? h.search : "")),
            h.href = h.format(),
            h
        }
        if (!j.length)
            return h.pathname = null,
            h.search ? h.path = "/" + h.search : h.path = null,
            h.href = h.format(),
            h;
        for (var S = j.slice(-1)[0], $ = (h.host || t.host || j.length > 1) && ("." === S || ".." === S) || "" === S, C = 0, I = j.length; I >= 0; I--)
            S = j[I],
            "." === S ? j.splice(I, 1) : ".." === S ? (j.splice(I, 1),
            C++) : C && (j.splice(I, 1),
            C--);
        if (!d && !O)
            for (; C--; C)
                j.unshift("..");
        !d || "" === j[0] || j[0] && "/" === j[0].charAt(0) || j.unshift(""),
        $ && "/" !== j.join("/").substr(-1) && j.push("");
        var U = "" === j[0] || j[0] && "/" === j[0].charAt(0);
        if (q) {
            h.hostname = h.host = U ? "" : j.length ? j.shift() : "";
            var x = !!(h.host && h.host.indexOf("@") > 0) && h.host.split("@");
            x && (h.auth = x.shift(),
            h.host = h.hostname = x.shift())
        }
        return d = d || h.host && j.length,
        d && !U && j.unshift(""),
        j.length ? h.pathname = j.join("/") : (h.pathname = null,
        h.path = null),
        u.isNull(h.pathname) && u.isNull(h.search) || (h.path = (h.pathname ? h.pathname : "") + (h.search ? h.search : "")),
        h.auth = t.auth || h.auth,
        h.slashes = h.slashes || t.slashes,
        h.href = h.format(),
        h
    }
    ,
    r.prototype.parseHost = function() {
        var t = this.host
          , s = m.exec(t);
        s && (s = s[0],
        ":" !== s && (this.port = s.substr(1)),
        t = t.substr(0, t.length - s.length)),
        t && (this.hostname = t)
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/v2/api-clients/chat-api", function(e, t, r, n, a) {
    "use strict";
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                function n(a, s) {
                    try {
                        var i = t[a](s)
                          , o = i.value
                    } catch (e) {
                        return void r(e)
                    }
                    if (!i.done)
                        return Promise.resolve(o).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                    e(o)
                }
                return n("next")
            }
            )
        }
    }
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e) {
        return e >= 200 && e < 300
    }
    var u = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r),
            n && e(t, n),
            t
        }
    }()
      , c = function() {
        function e(t) {
            var r = t.apiUrl
              , n = t.request
              , a = t.jwt
              , s = t.conversationId
              , o = t.streamingUrl
              , u = t.memberId
              , c = t.orgGuid;
            i(this, e),
            this.request = n,
            this.apiUrl = r,
            this.jwt = a,
            this.conversationId = s,
            this.streamingUrl = o,
            this.memberId = u,
            this.orgGuid = c
        }
        return u(e, [{
            key: "_getUrl",
            value: function(e, t) {
                var r = "";
                if (t) {
                    r += "?";
                    var n = [];
                    for (var a in t) {
                        var s = t[a];
                        "string" != typeof s && "number" != typeof s || n.push(a + "=" + t[a])
                    }
                    r += n.join("&")
                }
                return "" + this.apiUrl + e + r
            }
        }, {
            key: "createConversation",
            value: function() {
                function e(e) {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e(t) {
                    var r, n, a, s, i, u, c, d, p, h, m, l = t.webchatDeploymentKey, v = t.routing, g = t.orgGuid, f = t.role, y = t.displayName, b = t.customFields, w = t.guestAuthToken;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = v.targetType,
                                n = v.targetAddress,
                                a = v.skills,
                                s = v.language,
                                i = v.priority,
                                u = {
                                    organizationId: g,
                                    deploymentId: l,
                                    routingTarget: {
                                        targetType: r,
                                        targetAddress: n,
                                        skills: a,
                                        language: s,
                                        priority: i
                                    },
                                    memberInfo: {
                                        displayName: y,
                                        role: f,
                                        customFields: b
                                    },
                                    memberAuthToken: w
                                },
                                e.next = 4,
                                this.request({
                                    method: "POST",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations"),
                                    data: u,
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 4:
                                return c = e.sent,
                                this.orgGuid = g,
                                d = this.jwt = c.data.jwt,
                                p = this.conversationId = c.data.id,
                                h = this.memberId = c.data.member.id,
                                m = this.streamingUrl = c.data.eventStreamUri,
                                e.abrupt("return", {
                                    jwt: d,
                                    conversationId: p,
                                    memberId: h,
                                    streamingUrl: m
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "sendMessage",
            value: function() {
                function e(e) {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e(t) {
                    var r, n = t.message;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.request({
                                    method: "POST",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations/" + this.conversationId + "/members/" + this.memberId + "/messages"),
                                    data: {
                                        body: n
                                    },
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 2:
                                return r = e.sent,
                                e.abrupt("return", r.messageId);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "sendTypingIndicator",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.request({
                                    method: "POST",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations/" + this.conversationId + "/members/" + this.memberId + "/typing"),
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 2:
                                return e.abrupt("return");
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "getMessages",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e() {
                    var t, r, n, a, s, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = i.before, c = i.after;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t = [],
                                r = "/api/v2/webchat/guest/conversations/" + this.conversationId + "/messages",
                                n = {
                                    before: u,
                                    after: c
                                },
                                a = void 0,
                                s = this._getUrl(r, n);
                            case 5:
                                return e.next = 7,
                                this.request({
                                    method: "GET",
                                    url: s,
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 7:
                                a = e.sent,
                                t = t.concat(a.data.entities),
                                s = this._getUrl(a.data.next);
                            case 10:
                                if (a.data.next) {
                                    e.next = 5;
                                    break
                                }
                            case 11:
                                return e.abrupt("return", t.map(function(e) {
                                    return {
                                        id: e.id,
                                        body: e.body,
                                        timestamp: e.timestamp,
                                        pending: e.pending,
                                        sender: e.sender,
                                        bodyType: e.bodyType
                                    }
                                }));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "getParticipant",
            value: function() {
                function e(e) {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e(t) {
                    var r, n = t.participantId;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.request({
                                    method: "GET",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations/" + this.conversationId + "/members/" + n),
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 2:
                                return r = e.sent,
                                e.abrupt("return", {
                                    id: r.data.id,
                                    displayName: r.data.displayName,
                                    avatarImageUrl: r.data.avatarImageUrl,
                                    role: r.data.role,
                                    customFields: r.data.customFields,
                                    state: r.data.state
                                });
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "getMe",
            value: function() {
                return this.getParticipant({
                    participantId: this.memberId
                })
            }
        }, {
            key: "getParticipants",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.request({
                                    method: "GET",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations/" + this.conversationId + "/members"),
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 2:
                                if (t = e.sent,
                                !t.data.entities) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", t.data.entities.map(function(e) {
                                    return {
                                        id: e.id,
                                        displayName: e.displayName,
                                        role: e.role,
                                        customFields: e.customFields,
                                        state: e.state
                                    }
                                }));
                            case 7:
                                throw new Error("Unable to parse getParticipants response");
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "endConversation",
            value: function() {
                function e() {
                    return t.apply(this, arguments)
                }
                var t = s(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.request({
                                    method: "DELETE",
                                    url: this._getUrl("/api/v2/webchat/guest/conversations/" + this.conversationId + "/members/" + this.memberId),
                                    headers: {
                                        Authorization: "Bearer " + this.jwt
                                    },
                                    responseType: "json",
                                    validateStatus: o
                                });
                            case 2:
                                return e.abrupt("return");
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return e
            }()
        }, {
            key: "createStream",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.webSocketUrl;
                return new WebSocket(t || this.streamingUrl)
            }
        }]),
        e
    }();
    r.exports = c
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "axios", "0.26.1");
$_mod_webchat.main("/axios$0.26.1", "");
$_mod_webchat.def("/axios$0.26.1/lib/helpers/bind", function(n, e, r, t, i) {
    "use strict";
    r.exports = function(n, e) {
        return function() {
            for (var r = new Array(arguments.length), t = 0; t < r.length; t++)
                r[t] = arguments[t];
            return n.apply(e, r)
        }
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/utils", function(t, r, n, e, o) {
    "use strict";
    function i(t) {
        return Array.isArray(t)
    }
    function u(t) {
        return void 0 === t
    }
    function c(t) {
        return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    function f(t) {
        return "[object ArrayBuffer]" === D.call(t)
    }
    function a(t) {
        return "[object FormData]" === D.call(t)
    }
    function l(t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && f(t.buffer)
    }
    function s(t) {
        return "string" == typeof t
    }
    function y(t) {
        return "number" == typeof t
    }
    function b(t) {
        return null !== t && "object" === (void 0 === t ? "undefined" : P(t))
    }
    function p(t) {
        if ("[object Object]" !== D.call(t))
            return !1;
        var r = Object.getPrototypeOf(t);
        return null === r || r === Object.prototype
    }
    function d(t) {
        return "[object Date]" === D.call(t)
    }
    function m(t) {
        return "[object File]" === D.call(t)
    }
    function j(t) {
        return "[object Blob]" === D.call(t)
    }
    function v(t) {
        return "[object Function]" === D.call(t)
    }
    function B(t) {
        return b(t) && v(t.pipe)
    }
    function S(t) {
        return "[object URLSearchParams]" === D.call(t)
    }
    function g(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }
    function A() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }
    function O(t, r) {
        if (null !== t && void 0 !== t)
            if ("object" !== (void 0 === t ? "undefined" : P(t)) && (t = [t]),
            i(t))
                for (var n = 0, e = t.length; n < e; n++)
                    r.call(null, t[n], n, t);
            else
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && r.call(null, t[o], o, t)
    }
    function h() {
        function t(t, n) {
            p(r[n]) && p(t) ? r[n] = h(r[n], t) : p(t) ? r[n] = h({}, t) : i(t) ? r[n] = t.slice() : r[n] = t
        }
        for (var r = {}, n = 0, e = arguments.length; n < e; n++)
            O(arguments[n], t);
        return r
    }
    function w(t, r, n) {
        return O(r, function(r, e) {
            t[e] = n && "function" == typeof r ? x(r, n) : r
        }),
        t
    }
    function F(t) {
        return 65279 === t.charCodeAt(0) && (t = t.slice(1)),
        t
    }
    var P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , x = t("/axios$0.26.1/lib/helpers/bind")
      , D = Object.prototype.toString;
    n.exports = {
        isArray: i,
        isArrayBuffer: f,
        isBuffer: c,
        isFormData: a,
        isArrayBufferView: l,
        isString: s,
        isNumber: y,
        isObject: b,
        isPlainObject: p,
        isUndefined: u,
        isDate: d,
        isFile: m,
        isBlob: j,
        isFunction: v,
        isStream: B,
        isURLSearchParams: S,
        isStandardBrowserEnv: A,
        forEach: O,
        merge: h,
        extend: w,
        trim: g,
        stripBOM: F
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/buildURL", function(e, i, r, n, t) {
    "use strict";
    function a(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var c = e("/axios$0.26.1/lib/utils");
    r.exports = function(e, i, r) {
        if (!i)
            return e;
        var n;
        if (r)
            n = r(i);
        else if (c.isURLSearchParams(i))
            n = i.toString();
        else {
            var t = [];
            c.forEach(i, function(e, i) {
                null !== e && void 0 !== e && (c.isArray(e) ? i += "[]" : e = [e],
                c.forEach(e, function(e) {
                    c.isDate(e) ? e = e.toISOString() : c.isObject(e) && (e = JSON.stringify(e)),
                    t.push(a(i) + "=" + a(e))
                }))
            }),
            n = t.join("&")
        }
        if (n) {
            var o = e.indexOf("#");
            -1 !== o && (e = e.slice(0, o)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + n
        }
        return e
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/InterceptorManager", function(n, t, e, r, o) {
    "use strict";
    function s() {
        this.handlers = []
    }
    var h = n("/axios$0.26.1/lib/utils");
    s.prototype.use = function(n, t, e) {
        return this.handlers.push({
            fulfilled: n,
            rejected: t,
            synchronous: !!e && e.synchronous,
            runWhen: e ? e.runWhen : null
        }),
        this.handlers.length - 1
    }
    ,
    s.prototype.eject = function(n) {
        this.handlers[n] && (this.handlers[n] = null)
    }
    ,
    s.prototype.forEach = function(n) {
        h.forEach(this.handlers, function(t) {
            null !== t && n(t)
        })
    }
    ,
    e.exports = s
});
$_mod_webchat.main("/axios$0.26.1/lib/defaults", "");
$_mod_webchat.builtin("process", "/process$0.11.10/browser");
$_mod_webchat.def("/process$0.11.10/browser", function(t, e, r, n, o) {
    "use strict";
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function u() {
        throw new Error("clearTimeout has not been defined")
    }
    function c(t) {
        if (m === setTimeout)
            return setTimeout(t, 0);
        if ((m === i || !m) && setTimeout)
            return m = setTimeout,
            setTimeout(t, 0);
        try {
            return m(t, 0)
        } catch (e) {
            try {
                return m.call(null, t, 0)
            } catch (e) {
                return m.call(this, t, 0)
            }
        }
    }
    function s(t) {
        if (p === clearTimeout)
            return clearTimeout(t);
        if ((p === u || !p) && clearTimeout)
            return p = clearTimeout,
            clearTimeout(t);
        try {
            return p(t)
        } catch (e) {
            try {
                return p.call(null, t)
            } catch (e) {
                return p.call(this, t)
            }
        }
    }
    function a() {
        y && T && (y = !1,
        T.length ? w = T.concat(w) : v = -1,
        w.length && f())
    }
    function f() {
        if (!y) {
            var t = c(a);
            y = !0;
            for (var e = w.length; e; ) {
                for (T = w,
                w = []; ++v < e; )
                    T && T[v].run();
                v = -1,
                e = w.length
            }
            T = null,
            y = !1,
            s(t)
        }
    }
    function l(t, e) {
        this.fun = t,
        this.array = e
    }
    function h() {}
    var m, p, d = r.exports = {};
    !function() {
        try {
            m = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            m = i
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : u
        } catch (t) {
            p = u
        }
    }();
    var T, w = [], y = !1, v = -1;
    d.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
        w.push(new l(t,e)),
        1 !== w.length || y || c(f)
    }
    ,
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    d.title = "browser",
    d.browser = !0,
    d.env = {},
    d.argv = [],
    d.version = "",
    d.versions = {},
    d.on = h,
    d.addListener = h,
    d.once = h,
    d.off = h,
    d.removeListener = h,
    d.removeAllListeners = h,
    d.emit = h,
    d.prependListener = h,
    d.prependOnceListener = h,
    d.listeners = function(t) {
        return []
    }
    ,
    d.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    d.cwd = function() {
        return "/"
    }
    ,
    d.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    d.umask = function() {
        return 0
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/normalizeHeaderName", function(e, o, t, a, i) {
    "use strict";
    var r = e("/axios$0.26.1/lib/utils");
    t.exports = function(e, o) {
        r.forEach(e, function(t, a) {
            a !== o && a.toUpperCase() === o.toUpperCase() && (e[o] = t,
            delete e[a])
        })
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/enhanceError", function(e, s, t, i, n) {
    "use strict";
    t.exports = function(e, s, t, i, n) {
        return e.config = s,
        t && (e.code = t),
        e.request = i,
        e.response = n,
        e.isAxiosError = !0,
        e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
        ,
        e
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/defaults/transitional", function(i, r, t, s, a) {
    "use strict";
    t.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/createError", function(r, e, o, c, n) {
    "use strict";
    var t = r("/axios$0.26.1/lib/core/enhanceError");
    o.exports = function(r, e, o, c, n) {
        var a = new Error(r);
        return t(a, e, o, c, n)
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/settle", function(t, e, s, a, i) {
    "use strict";
    var o = t("/axios$0.26.1/lib/core/createError");
    s.exports = function(t, e, s) {
        var a = s.config.validateStatus;
        s.status && a && !a(s.status) ? e(o("Request failed with status code " + s.status, s.config, null, s.request, s)) : t(s)
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/cookies", function(e, n, t, o, i) {
    "use strict";
    var r = e("/axios$0.26.1/lib/utils");
    t.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, n, t, o, i, u) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(n)),
                r.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()),
                r.isString(o) && s.push("path=" + o),
                r.isString(i) && s.push("domain=" + i),
                !0 === u && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return n ? decodeURIComponent(n[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/isAbsoluteURL", function(t, e, s, i, o) {
    "use strict";
    s.exports = function(t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/combineURLs", function(e, c, r, t, i) {
    "use strict";
    r.exports = function(e, c) {
        return c ? e.replace(/\/+$/, "") + "/" + c.replace(/^\/+/, "") : e
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/buildFullPath", function(e, i, s, o, l) {
    "use strict";
    var t = e("/axios$0.26.1/lib/helpers/isAbsoluteURL")
      , r = e("/axios$0.26.1/lib/helpers/combineURLs");
    s.exports = function(e, i) {
        return e && !t(i) ? r(e, i) : i
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/parseHeaders", function(e, t, i, r, o) {
    "use strict";
    var n = e("/axios$0.26.1/lib/utils")
      , s = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    i.exports = function(e) {
        var t, i, r, o = {};
        return e ? (n.forEach(e.split("\n"), function(e) {
            if (r = e.indexOf(":"),
            t = n.trim(e.substr(0, r)).toLowerCase(),
            i = n.trim(e.substr(r + 1)),
            t) {
                if (o[t] && s.indexOf(t) >= 0)
                    return;
                o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([i]) : o[t] ? o[t] + ", " + i : i
            }
        }),
        o) : o
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/isURLSameOrigin", function(t, e, r, o, a) {
    "use strict";
    var n = t("/axios$0.26.1/lib/utils");
    r.exports = n.isStandardBrowserEnv() ? function() {
        function t(t) {
            var e = t;
            return r && (o.setAttribute("href", e),
            e = o.href),
            o.setAttribute("href", e),
            {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            }
        }
        var e, r = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
        return e = t(window.location.href),
        function(r) {
            var o = n.isString(r) ? t(r) : r;
            return o.protocol === e.protocol && o.host === e.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }()
});
$_mod_webchat.def("/axios$0.26.1/lib/cancel/Cancel", function(t, e, s, n, o) {
    "use strict";
    function i(t) {
        this.message = t
    }
    i.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    i.prototype.__CANCEL__ = !0,
    s.exports = i
});
$_mod_webchat.def("/axios$0.26.1/lib/adapters/xhr", function(e, o, t, s, n) {
    "use strict";
    var a = e("/axios$0.26.1/lib/utils")
      , r = e("/axios$0.26.1/lib/core/settle")
      , i = e("/axios$0.26.1/lib/helpers/cookies")
      , l = e("/axios$0.26.1/lib/helpers/buildURL")
      , u = e("/axios$0.26.1/lib/core/buildFullPath")
      , d = e("/axios$0.26.1/lib/helpers/parseHeaders")
      , c = e("/axios$0.26.1/lib/helpers/isURLSameOrigin")
      , p = e("/axios$0.26.1/lib/core/createError")
      , f = e("/axios$0.26.1/lib/defaults/transitional")
      , b = e("/axios$0.26.1/lib/cancel/Cancel");
    t.exports = function(e) {
        return new Promise(function(o, t) {
            function s() {
                e.cancelToken && e.cancelToken.unsubscribe(m),
                e.signal && e.signal.removeEventListener("abort", m)
            }
            function n() {
                if (T) {
                    var n = "getAllResponseHeaders"in T ? d(T.getAllResponseHeaders()) : null
                      , a = g && "text" !== g && "json" !== g ? T.response : T.responseText
                      , i = {
                        data: a,
                        status: T.status,
                        statusText: T.statusText,
                        headers: n,
                        config: e,
                        request: T
                    };
                    r(function(e) {
                        o(e),
                        s()
                    }, function(e) {
                        t(e),
                        s()
                    }, i),
                    T = null
                }
            }
            var m, x = e.data, h = e.headers, g = e.responseType;
            a.isFormData(x) && delete h["Content-Type"];
            var T = new XMLHttpRequest;
            if (e.auth) {
                var E = e.auth.username || ""
                  , v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                h.Authorization = "Basic " + btoa(E + ":" + v)
            }
            var w = u(e.baseURL, e.url);
            if (T.open(e.method.toUpperCase(), l(w, e.params, e.paramsSerializer), !0),
            T.timeout = e.timeout,
            "onloadend"in T ? T.onloadend = n : T.onreadystatechange = function() {
                T && 4 === T.readyState && (0 !== T.status || T.responseURL && 0 === T.responseURL.indexOf("file:")) && setTimeout(n)
            }
            ,
            T.onabort = function() {
                T && (t(p("Request aborted", e, "ECONNABORTED", T)),
                T = null)
            }
            ,
            T.onerror = function() {
                t(p("Network Error", e, null, T)),
                T = null
            }
            ,
            T.ontimeout = function() {
                var o = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                  , s = e.transitional || f;
                e.timeoutErrorMessage && (o = e.timeoutErrorMessage),
                t(p(o, e, s.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", T)),
                T = null
            }
            ,
            a.isStandardBrowserEnv()) {
                var R = (e.withCredentials || c(w)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                R && (h[e.xsrfHeaderName] = R)
            }
            "setRequestHeader"in T && a.forEach(h, function(e, o) {
                void 0 === x && "content-type" === o.toLowerCase() ? delete h[o] : T.setRequestHeader(o, e)
            }),
            a.isUndefined(e.withCredentials) || (T.withCredentials = !!e.withCredentials),
            g && "json" !== g && (T.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress && T.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && T.upload && T.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) && (m = function(e) {
                T && (t(!e || e && e.type ? new b("canceled") : e),
                T.abort(),
                T = null)
            }
            ,
            e.cancelToken && e.cancelToken.subscribe(m),
            e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m))),
            x || (x = null),
            T.send(x)
        }
        )
    }
});
$_mod_webchat.remap("/axios$0.26.1/lib/adapters/http", "/axios$0.26.1/lib/adapters/xhr");
$_mod_webchat.def("/axios$0.26.1/lib/defaults/index", function(t, e, r, n, i) {
    "use strict";
    function a(t, e) {
        !c.isUndefined(t) && c.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
    }
    function o(t, e, r) {
        if (c.isString(t))
            try {
                return (e || JSON.parse)(t),
                c.trim(t)
            } catch (t) {
                if ("SyntaxError" !== t.name)
                    throw t
            }
        return (r || JSON.stringify)(t)
    }
    var s = t("process")
      , c = t("/axios$0.26.1/lib/utils")
      , f = t("/axios$0.26.1/lib/helpers/normalizeHeaderName")
      , p = t("/axios$0.26.1/lib/core/enhanceError")
      , u = t("/axios$0.26.1/lib/defaults/transitional")
      , l = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
      , d = {
        transitional: u,
        adapter: function() {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = t("/axios$0.26.1/lib/adapters/xhr") : void 0 !== s && "[object process]" === Object.prototype.toString.call(s) && (e = t("/axios$0.26.1/lib/adapters/xhr")),
            e
        }(),
        transformRequest: [function(t, e) {
            return f(e, "Accept"),
            f(e, "Content-Type"),
            c.isFormData(t) || c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) ? t : c.isArrayBufferView(t) ? t.buffer : c.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"),
            t.toString()) : c.isObject(t) || e && "application/json" === e["Content-Type"] ? (a(e, "application/json"),
            o(t)) : t
        }
        ],
        transformResponse: [function(t) {
            var e = this.transitional || d.transitional
              , r = e && e.silentJSONParsing
              , n = e && e.forcedJSONParsing
              , i = !r && "json" === this.responseType;
            if (i || n && c.isString(t) && t.length)
                try {
                    return JSON.parse(t)
                } catch (t) {
                    if (i) {
                        if ("SyntaxError" === t.name)
                            throw p(t, this, "E_JSON_PARSE");
                        throw t
                    }
                }
            return t
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    c.forEach(["delete", "get", "head"], function(t) {
        d.headers[t] = {}
    }),
    c.forEach(["post", "put", "patch"], function(t) {
        d.headers[t] = c.merge(l)
    }),
    r.exports = d
});
$_mod_webchat.def("/axios$0.26.1/lib/core/transformData", function(i, t, a, o, r) {
    "use strict";
    var s = i("/axios$0.26.1/lib/utils")
      , n = i("/axios$0.26.1/lib/defaults/index");
    a.exports = function(i, t, a) {
        var o = this || n;
        return s.forEach(a, function(a) {
            i = a.call(o, i, t)
        }),
        i
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/cancel/isCancel", function(c, e, n, t, i) {
    "use strict";
    n.exports = function(c) {
        return !(!c || !c.__CANCEL__)
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/dispatchRequest", function(e, a, s, t, r) {
    "use strict";
    function n(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
            throw new l("canceled")
    }
    var o = e("/axios$0.26.1/lib/utils")
      , c = e("/axios$0.26.1/lib/core/transformData")
      , d = e("/axios$0.26.1/lib/cancel/isCancel")
      , i = e("/axios$0.26.1/lib/defaults/index")
      , l = e("/axios$0.26.1/lib/cancel/Cancel");
    s.exports = function(e) {
        return n(e),
        e.headers = e.headers || {},
        e.data = c.call(e, e.data, e.headers, e.transformRequest),
        e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
        o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(a) {
            delete e.headers[a]
        }),
        (e.adapter || i.adapter)(e).then(function(a) {
            return n(e),
            a.data = c.call(e, a.data, a.headers, e.transformResponse),
            a
        }, function(a) {
            return d(a) || (n(e),
            a && a.response && (a.response.data = c.call(e, a.response.data, a.response.headers, e.transformResponse))),
            Promise.reject(a)
        })
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/mergeConfig", function(e, n, i, t, o) {
    "use strict";
    var r = e("/axios$0.26.1/lib/utils");
    i.exports = function(e, n) {
        function i(e, n) {
            return r.isPlainObject(e) && r.isPlainObject(n) ? r.merge(e, n) : r.isPlainObject(n) ? r.merge({}, n) : r.isArray(n) ? n.slice() : n
        }
        function t(t) {
            return r.isUndefined(n[t]) ? r.isUndefined(e[t]) ? void 0 : i(void 0, e[t]) : i(e[t], n[t])
        }
        function o(e) {
            if (!r.isUndefined(n[e]))
                return i(void 0, n[e])
        }
        function s(t) {
            return r.isUndefined(n[t]) ? r.isUndefined(e[t]) ? void 0 : i(void 0, e[t]) : i(void 0, n[t])
        }
        function a(t) {
            return t in n ? i(e[t], n[t]) : t in e ? i(void 0, e[t]) : void 0
        }
        n = n || {};
        var d = {}
          , c = {
            url: o,
            method: o,
            data: o,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a
        };
        return r.forEach(Object.keys(e).concat(Object.keys(n)), function(e) {
            var n = c[e] || t
              , i = n(e);
            r.isUndefined(i) && n !== a || (d[e] = i)
        }),
        d
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/env/data", function(e, t, i, o, s) {
    "use strict";
    i.exports = {
        version: "0.26.1"
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/validator", function(o, n, e, t, r) {
    "use strict";
    function i(o, n, e) {
        if ("object" !== (void 0 === o ? "undefined" : a(o)))
            throw new TypeError("options must be an object");
        for (var t = Object.keys(o), r = t.length; r-- > 0; ) {
            var i = t[r]
              , f = n[i];
            if (f) {
                var s = o[i]
                  , u = void 0 === s || f(s, i, o);
                if (!0 !== u)
                    throw new TypeError("option " + i + " must be " + u)
            } else if (!0 !== e)
                throw Error("Unknown option " + i)
        }
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
      , f = o("/axios$0.26.1/lib/env/data").version
      , s = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(o, n) {
        s[o] = function(e) {
            return (void 0 === e ? "undefined" : a(e)) === o || "a" + (n < 1 ? "n " : " ") + o
        }
    });
    var u = {};
    s.transitional = function(o, n, e) {
        function t(o, n) {
            return "[Axios v" + f + "] Transitional option '" + o + "'" + n + (e ? ". " + e : "")
        }
        return function(e, r, i) {
            if (!1 === o)
                throw new Error(t(r, " has been removed" + (n ? " in " + n : "")));
            return n && !u[r] && (u[r] = !0,
            console.warn(t(r, " has been deprecated since v" + n + " and will be removed in the near future"))),
            !o || o(e, r, i)
        }
    }
    ,
    e.exports = {
        assertOptions: i,
        validators: s
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/core/Axios", function(t, e, r, o, i) {
    "use strict";
    function s(t) {
        this.defaults = t,
        this.interceptors = {
            request: new h,
            response: new h
        }
    }
    var a = t("/axios$0.26.1/lib/utils")
      , n = t("/axios$0.26.1/lib/helpers/buildURL")
      , h = t("/axios$0.26.1/lib/core/InterceptorManager")
      , l = t("/axios$0.26.1/lib/core/dispatchRequest")
      , u = t("/axios$0.26.1/lib/core/mergeConfig")
      , f = t("/axios$0.26.1/lib/helpers/validator")
      , c = f.validators;
    s.prototype.request = function(t, e) {
        "string" == typeof t ? (e = e || {},
        e.url = t) : e = t || {},
        e = u(this.defaults, e),
        e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var r = e.transitional;
        void 0 !== r && f.assertOptions(r, {
            silentJSONParsing: c.transitional(c.boolean),
            forcedJSONParsing: c.transitional(c.boolean),
            clarifyTimeoutError: c.transitional(c.boolean)
        }, !1);
        var o = []
          , i = !0;
        this.interceptors.request.forEach(function(t) {
            "function" == typeof t.runWhen && !1 === t.runWhen(e) || (i = i && t.synchronous,
            o.unshift(t.fulfilled, t.rejected))
        });
        var s = [];
        this.interceptors.response.forEach(function(t) {
            s.push(t.fulfilled, t.rejected)
        });
        var a;
        if (!i) {
            var n = [l, void 0];
            for (Array.prototype.unshift.apply(n, o),
            n = n.concat(s),
            a = Promise.resolve(e); n.length; )
                a = a.then(n.shift(), n.shift());
            return a
        }
        for (var h = e; o.length; ) {
            var p = o.shift()
              , d = o.shift();
            try {
                h = p(h)
            } catch (t) {
                d(t);
                break
            }
        }
        try {
            a = l(h)
        } catch (t) {
            return Promise.reject(t)
        }
        for (; s.length; )
            a = a.then(s.shift(), s.shift());
        return a
    }
    ,
    s.prototype.getUri = function(t) {
        return t = u(this.defaults, t),
        n(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }
    ,
    a.forEach(["delete", "get", "head", "options"], function(t) {
        s.prototype[t] = function(e, r) {
            return this.request(u(r || {}, {
                method: t,
                url: e,
                data: (r || {}).data
            }))
        }
    }),
    a.forEach(["post", "put", "patch"], function(t) {
        s.prototype[t] = function(e, r, o) {
            return this.request(u(o || {}, {
                method: t,
                url: e,
                data: r
            }))
        }
    }),
    r.exports = s
});
$_mod_webchat.def("/axios$0.26.1/lib/cancel/CancelToken", function(e, n, s, t, i) {
    "use strict";
    function r(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function(e) {
            n = e
        }
        );
        var s = this;
        this.promise.then(function(e) {
            if (s._listeners) {
                var n, t = s._listeners.length;
                for (n = 0; n < t; n++)
                    s._listeners[n](e);
                s._listeners = null
            }
        }),
        this.promise.then = function(e) {
            var n, t = new Promise(function(e) {
                s.subscribe(e),
                n = e
            }
            ).then(e);
            return t.cancel = function() {
                s.unsubscribe(n)
            }
            ,
            t
        }
        ,
        e(function(e) {
            s.reason || (s.reason = new o(e),
            n(s.reason))
        })
    }
    var o = e("/axios$0.26.1/lib/cancel/Cancel");
    r.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    r.prototype.subscribe = function(e) {
        if (this.reason)
            return void e(this.reason);
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    ,
    r.prototype.unsubscribe = function(e) {
        if (this._listeners) {
            var n = this._listeners.indexOf(e);
            -1 !== n && this._listeners.splice(n, 1)
        }
    }
    ,
    r.source = function() {
        var e;
        return {
            token: new r(function(n) {
                e = n
            }
            ),
            cancel: e
        }
    }
    ,
    s.exports = r
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/spread", function(e, n, t, r, u) {
    "use strict";
    t.exports = function(e) {
        return function(n) {
            return e.apply(null, n)
        }
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/helpers/isAxiosError", function(i, r, s, o, t) {
    "use strict";
    var e = i("/axios$0.26.1/lib/utils");
    s.exports = function(i) {
        return e.isObject(i) && !0 === i.isAxiosError
    }
});
$_mod_webchat.def("/axios$0.26.1/lib/axios", function(e, i, o, s, a) {
    "use strict";
    function l(e) {
        var i = new t(e)
          , o = n(t.prototype.request, i);
        return r.extend(o, t.prototype, i),
        r.extend(o, i),
        o.create = function(i) {
            return l(x(e, i))
        }
        ,
        o
    }
    var r = e("/axios$0.26.1/lib/utils")
      , n = e("/axios$0.26.1/lib/helpers/bind")
      , t = e("/axios$0.26.1/lib/core/Axios")
      , x = e("/axios$0.26.1/lib/core/mergeConfig")
      , c = e("/axios$0.26.1/lib/defaults/index")
      , b = l(c);
    b.Axios = t,
    b.Cancel = e("/axios$0.26.1/lib/cancel/Cancel"),
    b.CancelToken = e("/axios$0.26.1/lib/cancel/CancelToken"),
    b.isCancel = e("/axios$0.26.1/lib/cancel/isCancel"),
    b.VERSION = e("/axios$0.26.1/lib/env/data").version,
    b.all = function(e) {
        return Promise.all(e)
    }
    ,
    b.spread = e("/axios$0.26.1/lib/helpers/spread"),
    b.isAxiosError = e("/axios$0.26.1/lib/helpers/isAxiosError"),
    o.exports = b,
    o.exports.default = b
});
$_mod_webchat.def("/axios$0.26.1/index", function(i, o, s, e, t) {
    "use strict";
    s.exports = i("/axios$0.26.1/lib/axios")
});
$_mod_webchat.main("/purecloud-webchat$2.0.0/src/logging", "");
$_mod_webchat.installed("purecloud-webchat$2.0.0", "raptor-logging", "1.1.3");
$_mod_webchat.main("/raptor-logging$1.1.3", "lib/index");
$_mod_webchat.installed("raptor-logging$1.1.3", "raptor-polyfill", "1.1.0");
$_mod_webchat.def("/raptor-polyfill$1.1.0/string/startsWith", function(t, r, s, i, n) {
    "use strict";
    String.prototype.startsWith || (String.prototype.startsWith = function(t, r) {
        var s = this;
        return r && (s = s.substring(r)),
        !(s.length < t.length) && s.substring(0, t.length) == t
    }
    )
});
$_mod_webchat.def("/raptor-logging$1.1.3/lib/Logger", function(e, t, i, n, l) {
    "use strict";
    function s(e, t, i) {
        this.logger = e,
        this.logLevel = t,
        this.args = r.call(i)
    }
    function o(e, t, i) {
        this._loggingModifiedFlag = g._modifiedFlag,
        this._loggerName = t,
        this._level = e.logLevel.level,
        this._appenders = i
    }
    var g, h, r = [].slice;
    s.prototype.getLoggerName = function() {
        return this.logger._loggerName
    }
    ,
    o.setLogging = function(e) {
        g = e
    }
    ,
    o.setLogLevel = function(e) {
        h = e
    }
    ,
    o.prototype = {
        _loggerName: void 0,
        _level: void 0,
        _appenders: void 0,
        _update: function() {
            this._loggingModifiedFlag !== g._modifiedFlag && o.call(this, g.getLoggerConfig(this._loggerName), this._loggerName, g.getAppenders())
        },
        getLogLevel: function() {
            return h.toLogLevel(this._level)
        },
        getLevel: function() {
            return this._update(),
            this._level
        },
        isTraceEnabled: function() {
            return this._update(),
            0 === this._level
        },
        isDebugEnabled: function() {
            return this._update(),
            this._level <= 1
        },
        isInfoEnabled: function() {
            return this._update(),
            this._level <= 2
        },
        isWarnEnabled: function() {
            return this._update(),
            this._level <= 3
        },
        isErrorEnabled: function() {
            return this._update(),
            this._level <= 4
        },
        isFatalEnabled: function() {
            return this._update(),
            this._level <= 5
        },
        dump: function(e, t, i) {
            if (this._update(),
            !(this._level > 1))
                for (var n = 0, l = this._appenders.length; n < l; n++) {
                    var s = this._appenders[n];
                    s && s.dump && s.dump(e, t, i)
                }
        },
        trace: function() {
            this._update(),
            this._level > 0 || this._log(new s(this,h.TRACE,arguments))
        },
        debug: function() {
            this._update(),
            this._level > 1 || this._log(new s(this,h.DEBUG,arguments))
        },
        info: function() {
            this._update(),
            this._level > 2 || this._log(new s(this,h.INFO,arguments))
        },
        warn: function() {
            this._update(),
            this._level > 3 || this._log(new s(this,h.WARN,arguments))
        },
        error: function() {
            this._update(),
            this._level > 4 || this._log(new s(this,h.ERROR,arguments))
        },
        fatal: function() {
            this._update(),
            this._level > 5 || this._log(new s(this,h.FATAL,arguments))
        },
        _log: function(e) {
            for (var t = 0, i = this._appenders.length; t < i; t++)
                this._appenders[t].log(e)
        }
    },
    i.exports = o
});
$_mod_webchat.installed("raptor-logging$1.1.3", "raptor-stacktraces", "1.0.1");
$_mod_webchat.main("/raptor-stacktraces$1.0.1", "lib/raptor-stacktraces");
$_mod_webchat.def("/raptor-stacktraces$1.0.1/lib/raptor-stacktraces", function(t, a, r, s, c) {
    "use strict";
    a.trace = function(t) {
        for (var a = []; t; )
            a.push((t.stack || t.message || t).toString()),
            (t = t._cause) && a.push("\n\nCaused by:\n");
        return a.join("")
    }
});
$_mod_webchat.def("/raptor-logging$1.1.3/lib/ConsoleAppender", function(o, e, r, l, a) {
    "use strict";
    function t(e) {
        var r = o("/raptor-stacktraces$1.0.1/lib/raptor-stacktraces");
        return r && r.trace ? r.trace(e) : e || ""
    }
    function c() {}
    var n = function() {
        return "undefined" == typeof console ? null : console.log.apply && console.log.call ? console : null
    }()
      , s = n ? null : function() {}
    ;
    c.prototype = {
        log: n ? function(o) {
            var e = o.logLevel
              , r = n[e.methodName] || n.log;
            if (r)
                try {
                    for (var l, a = o.args.slice(0), c = a.length, s = 0; s < c - 1; s++) {
                        var i = a[s];
                        i instanceof Error && (a[s] = t(i))
                    }
                    var g = a[c - 1];
                    g instanceof Error && (l = g,
                    a[c - 1] = "");
                    var u = [e.name + " " + o.getLoggerName() + ":"].concat(a);
                    if (r.apply(n, u),
                    l) {
                        r.call(n, l.stack || l.toString());
                        for (var f = l._cause; f; )
                            r.call(n, "Caused by:"),
                            r.call(n, f.stack || f.toString()),
                            f = f._cause
                    }
                    if (0 === e.level)
                        if (n.trace)
                            n.trace();
                        else {
                            var p = t();
                            p && n.log && n.log(p)
                        }
                } catch (o) {
                    r = n.error || r,
                    r.call(n, o)
                }
        }
        : s,
        dump: n ? function(o, e) {
            console.debug && (console.log((e ? "DUMP " + e : "DUMP") + ":"),
            console.debug(o))
        }
        : s
    },
    r.exports = c
});
$_mod_webchat.remap("/raptor-logging$1.1.3/lib/resolveLoggerName", "/raptor-logging$1.1.3/lib/resolveLoggerName-browser");
$_mod_webchat.def("/raptor-logging$1.1.3/lib/resolveLoggerName-browser", function(r, t, e, o, i) {
    "use strict";
    e.exports = function(r) {
        return r ? "string" == typeof r ? r : r.id || r.toString() : ""
    }
});
$_mod_webchat.def("/raptor-logging$1.1.3/lib/raptor-logging", function(r, e, n, o, a) {
    "use strict";
    var i = r("process")
      , t = function() {
        return !1
    }
      , g = {
        isTraceEnabled: t,
        isDebugEnabled: t,
        isInfoEnabled: t,
        isWarnEnabled: t,
        isErrorEnabled: t,
        isFatalEnabled: t,
        dump: t,
        trace: t,
        debug: t,
        info: t,
        warn: t,
        error: t,
        fatal: t
    }
      , l = {
        logger: function() {
            return g
        },
        configure: t,
        voidLogger: g
    };
    n.exports = l;
    if (!i.browser) {
        var s;
        try {
            s = r.resolve("./raptor-logging-impl")
        } catch (r) {}
        s && r(s)
    }
});
$_mod_webchat.def("/raptor-logging$1.1.3/lib/raptor-logging-impl", function(e, r, o, n, t) {
    "use strict";
    function g(e) {
        return e && e.toUpperCase ? v[e.toUpperCase()] || v.TRACE : v.TRACE
    }
    function i(e, r) {
        var o;
        o = "string" == typeof r ? r : r.levelName || r.level;
        var n = {
            levelName: o,
            loggerName: e.replace(/\./g, "/"),
            logLevel: g(o)
        };
        h[e] = n,
        "ROOT" === e && (s = n)
    }
    function l(e, r) {
        return r.loggerName.length - e.loggerName.length
    }
    function f() {
        p = [];
        for (var e in h)
            h.hasOwnProperty(e) && p.push(h[e]);
        p.sort(l)
    }
    var a = e("process")
      , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    e("/raptor-polyfill$1.1.0/string/startsWith");
    for (var p, s, c = e("/raptor-logging$1.1.3/lib/Logger"), d = ["TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "OFF"], v = {}, m = [], h = {}, y = e("/raptor-logging$1.1.3/lib/ConsoleAppender"), L = void 0 !== a ? a.env : null, A = e("/raptor-logging$1.1.3/lib/resolveLoggerName-browser"), R = 0; R < d.length; R++) {
        var b = d[R];
        v[b] = function(e, r) {
            return {
                name: e,
                level: r,
                methodName: e.toLowerCase(),
                toString: function() {
                    return e
                }
            }
        }(b, R)
    }
    v.toLogLevel = function(e) {
        return e.constructor === String ? this[e] : this[d[e]]
    }
    ,
    c.setLogLevel(v);
    var O = {
        _modifiedFlag: 0,
        LogLevel: v,
        getLoggerConfig: function(e) {
            for (var r, o, n = 0, t = p.length; n < t; n++)
                if (r = p[n],
                o = r.loggerName,
                e.startsWith(o))
                    return r;
            return s
        },
        getLoggerConfigs: function() {
            return p
        },
        getAppenders: function() {
            return m
        },
        addAppender: function(e) {
            m.push(e)
        },
        configureAppenders: function(e) {
            m = e,
            O._modifiedFlag++
        },
        logger: function(e) {
            if ("object" === (void 0 === e ? "undefined" : u(e))) {
                var r = e.filename || e.id;
                if (!r)
                    throw new Error("Invalid logger object. It must contain either a `filename` or `id` property.");
                e = A(r)
            }
            return new c(this.getLoggerConfig(e),e,m)
        },
        configureLogger: function(e, r) {
            i(e, r),
            f(),
            O._modifiedFlag++
        },
        configureLoggers: function(e) {
            var r = h;
            h = {};
            var o = !1;
            for (var n in e)
                e.hasOwnProperty(n) && ("ROOT" === n && (o = !0),
                i(n, e[n]));
            if (o || i("ROOT", "WARN"),
            L) {
                var t = function(e) {
                    var r = L[e] || L[e.toLowerCase()];
                    r && r.split(/\s*[,]\s*/).forEach(function(r) {
                        i(r, e)
                    })
                };
                t("TRACE"),
                t("DEBUG"),
                t("INFO"),
                t("WARN"),
                t("ERROR"),
                t("FATAL")
            }
            return f(),
            O._modifiedFlag++,
            r
        },
        configure: function(e) {
            e && (e.appenders && this.configureAppenders(e.appenders),
            e.loggers && this.configureLoggers(e.loggers))
        },
        ConsoleAppender: y,
        toString: function() {
            return "[raptor-logging]"
        }
    };
    c.setLogging(O),
    O.configure({
        loggers: {
            ROOT: {
                level: "WARN"
            }
        }
    }),
    "undefined" != typeof console && O.addAppender(new y);
    var N = e("/raptor-logging$1.1.3/lib/raptor-logging");
    for (var C in O)
        O.hasOwnProperty(C) && (N[C] = O[C])
});
$_mod_webchat.run("/raptor-logging$1.1.3/lib/raptor-logging-impl");
$_mod_webchat.def("/raptor-logging$1.1.3/lib/index", function(o, i, g, n, r) {
    "use strict";
    var t = "undefined" == typeof window ? global : window;
    g.exports = t.__RAPTOR_LOGGING || (t.__RAPTOR_LOGGING = o("/raptor-logging$1.1.3/lib/raptor-logging"))
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/logging/index", function(n, r, e, g, i) {
    "use strict";
    var o = n("/raptor-logging$1.1.3/lib/index");
    r.configure = function(n) {
        o.configure(n)
    }
    ,
    r.logger = function(n) {
        var r = void 0;
        return "string" == typeof n ? r = n : (n = n || e,
        r = n.filename,
        r.match(/\/src\//) && (r = r.substring("/src/".length))),
        o.logger(r)
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/performAutoJoin", function(e, t, r, n, a) {
    "use strict";
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                function n(a, u) {
                    try {
                        var c = t[a](u)
                          , i = c.value
                    } catch (e) {
                        return void r(e)
                    }
                    if (!c.done)
                        return Promise.resolve(i).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                    e(i)
                }
                return n("next")
            }
            )
        }
    }
    var c = function() {
        var e = u(regeneratorRuntime.mark(function e(t) {
            var r, n, a = t.config, u = t.reconnectData;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return r = new o({
                            request: s,
                            apiUrl: a.getWebchatServiceUrl().replace("realtime", "api"),
                            jwt: u.getHttpApiToken(),
                            conversationId: u.getConversationId(),
                            memberId: u.getMemberId(),
                            orgGuid: a.getOrgGuid()
                        }),
                        e.next = 3,
                        r.getMe();
                    case 3:
                        return n = e.sent,
                        e.abrupt("return", "CONNECTED" === n.state);
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()
      , i = e("/purecloud-webchat$2.0.0/src/lib/url/index")
      , o = e("/purecloud-webchat$2.0.0/src/v2/api-clients/chat-api")
      , s = e("/axios$0.26.1/index")
      , p = e("/purecloud-webchat$2.0.0/src/logging/index").logger(r);
    r.exports = function() {
        function e(e, r) {
            return t.apply(this, arguments)
        }
        var t = u(regeneratorRuntime.mark(function e(t, r) {
            var n, a, u, o, s, g, f, b, h, d, x, l, v;
            return regeneratorRuntime.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = t.getConfig(),
                        a = i.parse(n.getWebchatAppUrl()),
                        u = a.protocol,
                        o = a.host,
                        s = u + "//" + o,
                        g = t.getStorageClient(),
                        e.next = 6,
                        g.retrieveReconnectData(s);
                    case 6:
                        if (f = e.sent) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 9:
                        if (!f.getConversationEnded()) {
                            e.next = 11;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 11:
                        if ("http.v1" !== f.getChatApi()) {
                            e.next = 29;
                            break
                        }
                        return e.prev = 12,
                        e.next = 15,
                        c({
                            config: n,
                            reconnectData: f
                        });
                    case 15:
                        if (b = e.sent) {
                            e.next = 18;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 18:
                        return n.setReconnectData(f),
                        r.type = "frame",
                        e.next = 22,
                        t.render(r);
                    case 22:
                        return e.abrupt("return", !0);
                    case 25:
                        return e.prev = 25,
                        e.t0 = e.catch(12),
                        p.error("Unable to reconnect to with reconnectData:", e.t0.message),
                        e.abrupt("return", !1);
                    case 29:
                        if (f.getRealtimeReconnectToken()) {
                            e.next = 31;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 31:
                        if (h = f.getDecodedToken(),
                        d = h.exp,
                        !(Date.now() > 1e3 * d)) {
                            e.next = 34;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 34:
                        if (!((x = f.getWidgetType()) && x.isFrame() && r)) {
                            e.next = 50;
                            break
                        }
                        if (n.setReconnectData(f),
                        r.type = "frame",
                        !(l = t.getWebchatDeployment()) || !l.getAuthenticationRequired()) {
                            e.next = 47;
                            break
                        }
                        if (!(v = f.getGuestAuthenticationToken())) {
                            e.next = 45;
                            break
                        }
                        t.getConfig().setGuestAuthenticationToken(v),
                        e.next = 47;
                        break;
                    case 45:
                        return e.next = 47,
                        t.authenticateGuest();
                    case 47:
                        return e.next = 49,
                        t.render(r);
                    case 49:
                        return e.abrupt("return", !0);
                    case 50:
                        return e.abrupt("return", !1);
                    case 51:
                    case "end":
                        return e.stop()
                    }
            }, e, this, [[12, 25]])
        }));
        return e
    }()
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "fashion-model-defaults", "1.0.2");
$_mod_webchat.main("/fashion-model-defaults$1.0.2", "");
$_mod_webchat.def("/fashion-model-defaults$1.0.2/index", function(t, e, o, n, a) {
    "use strict";
    o.exports = {
        id: "apply-defaults",
        initType: function(t) {
            t.prototype.applyDefaults = function() {
                var e = this;
                t.forEachProperty(function(t) {
                    var o = t.getName();
                    if (void 0 === e.get(o)) {
                        var n = t.default;
                        null != n && n.constructor === Function && (n = n.call(e)),
                        e.set(o, n)
                    }
                })
            }
        }
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/models/WebchatDeployment", function(e, t, i, n, o) {
    "use strict";
    var r = e("/fashion-model-defaults$1.0.2/index")
      , a = e("/purecloud-webchat$2.0.0/src/models/Model");
    i.exports = a.extend({
        mixins: [r],
        properties: {
            deploymentKey: String,
            orgGuid: String,
            name: String,
            description: String,
            disabled: Boolean,
            authenticationRequired: Boolean,
            authenticationUrl: String,
            clientType: String,
            webChatConfig: Object,
            allowedDomains: Array
        }
    })
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/util/addNonceToUrl", function(t, r, c, e, o) {
    "use strict";
    var a = /^([^?#]*)([^#]*)(.*)$/;
    c.exports = function(t) {
        var r = t.match(a)
          , c = r[1]
          , e = r[2]
          , o = r[3];
        return e += (e ? "&" : "?") + "q=" + Math.random().toString().slice(2),
        "" + c + e + o
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/requestWebchatDeployment", function(n, t, e, r, o) {
    "use strict";
    function d(n) {
        return function() {
            var t = n.apply(this, arguments);
            return new Promise(function(n, e) {
                function r(o, d) {
                    try {
                        var c = t[o](d)
                          , u = c.value
                    } catch (n) {
                        return void e(n)
                    }
                    if (!c.done)
                        return Promise.resolve(u).then(function(n) {
                            r("next", n)
                        }, function(n) {
                            r("throw", n)
                        });
                    n(u)
                }
                return r("next")
            }
            )
        }
    }
    function c(n) {
        return a(n) || h() || null
    }
    function u(n) {
        var t = n.environment
          , e = n.region
          , r = n.orgGuid
          , o = n.deploymentKey;
        return e = e || m,
        t = t || p,
        "https://" + f[t][e].cdn + "/webchat/" + e + "/organizations/" + r + "/deployments/" + o
    }
    function a(n) {
        var t = n || {}
          , e = t.deploymentUrl
          , r = t.orgGuid
          , o = t.environment
          , d = t.region
          , c = t.webchatDeploymentKey;
        return e || (c && r ? u({
            environment: o,
            region: d,
            orgGuid: r,
            deploymentKey: c
        }) : null)
    }
    function h() {
        var n = document.getElementById("purecloud-webchat-js");
        if (n) {
            var t = n.getAttribute("deployment-url");
            if (t)
                return t;
            var e = n.getAttribute("org-guid")
              , r = n.getAttribute("deployment-key");
            if (r && e) {
                return u({
                    environment: n.getAttribute("env"),
                    region: n.getAttribute("region"),
                    orgGuid: e,
                    deploymentKey: r
                })
            }
            return null
        }
    }
    var l = n("/purecloud-webchat$2.0.0/src/models/WebchatDeployment")
      , i = n("/axios$0.26.1/index")
      , s = n("/purecloud-webchat$2.0.0/src/util/addNonceToUrl")
      , f = {
        dev: {
            "us-east-1": {
                cdn: "d1u860a7u56n1n.cloudfront.net"
            },
            use1: {
                cdn: "d1u860a7u56n1n.cloudfront.net"
            }
        },
        test: {
            "us-east-1": {
                cdn: "d2ksbr7hgnz143.cloudfront.net"
            },
            use1: {
                cdn: "d2ksbr7hgnz143.cloudfront.net"
            }
        },
        prod: {
            "us-east-1": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "eu-west-2": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "ap-northeast-2": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "ca-central-1": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "us-west-2": {
                cdn: "d1puvchl6q91un.cloudfront.net"
            },
            "eu-west-1": {
                cdn: "d3mbz7sg00v6j4.cloudfront.net"
            },
            "eu-central-1": {
                cdn: "d7auu4t966f9r.cloudfront.net"
            },
            "ap-northeast-1": {
                cdn: "dji3zmrclmseh.cloudfront.net"
            },
            "ap-southeast-2": {
                cdn: "d38o6ero4cmsrz.cloudfront.net"
            },
            "ap-south-1": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "sa-east-1": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "me-central-1": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "ap-northeast-3": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            "eu-central-2": {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            use1: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            euw2: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            apne2: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            cac1: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            usw2: {
                cdn: "d1puvchl6q91un.cloudfront.net"
            },
            euw1: {
                cdn: "d3mbz7sg00v6j4.cloudfront.net"
            },
            euc1: {
                cdn: "d7auu4t966f9r.cloudfront.net"
            },
            apne1: {
                cdn: "dji3zmrclmseh.cloudfront.net"
            },
            apse2: {
                cdn: "d38o6ero4cmsrz.cloudfront.net"
            },
            aps1: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            sae1: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            mec1: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            apne3: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            },
            euc2: {
                cdn: "d37hm4w715hh7d.cloudfront.net"
            }
        }
    }
      , m = "us-east-1"
      , p = "prod"
      , w = e.exports = function() {
        function n(n) {
            return t.apply(this, arguments)
        }
        var t = d(regeneratorRuntime.mark(function n(t) {
            var e, r, o, d;
            return regeneratorRuntime.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        if (!(e = w.findWebchatDeploymentUrl(t))) {
                            n.next = 14;
                            break
                        }
                        return n.prev = 2,
                        n.next = 5,
                        w.axios({
                            url: s(e),
                            method: "get",
                            responseType: "json",
                            headers: {
                                Accept: "application/json"
                            },
                            validateStatus: function(n) {
                                return n >= 200 && n < 300
                            }
                        });
                    case 5:
                        if (r = n.sent,
                        o = r.data,
                        "widget-deployment" === o.schemaVersion) {
                            d = o.clientConfig[o.clientType];
                            try {
                                o.authenticationUrl = d.authenticationUrl
                            } catch (n) {}
                            try {
                                o.webChatConfig = {},
                                o.webChatConfig.webChatSkin = d.webChatSkin
                            } catch (n) {}
                        }
                        return n.abrupt("return", new l(o));
                    case 11:
                        throw n.prev = 11,
                        n.t0 = n.catch(2),
                        new Error("Failed to load deployment: " + n.t0.message);
                    case 14:
                        return n.abrupt("return", null);
                    case 15:
                    case "end":
                        return n.stop()
                    }
            }, n, this, [[2, 11]])
        }));
        return n
    }();
    w.findWebchatDeploymentUrl = c,
    w.axios = i,
    w.DEFAULT_REGION = m,
    w.DEFAULT_ENVIRONMENT = p,
    w.DEPLOYMENT_DOMAINS = f
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/index", function(e, t, r, u, c) {
    "use strict";
    var o = e("/purecloud-webchat$2.0.0/src/jsapi/util/performAutoJoin")
      , i = e("/purecloud-webchat$2.0.0/src/jsapi/util/requestWebchatDeployment");
    r.exports = {
        performAutoJoin: o,
        requestWebchatDeployment: i
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/safeDefine", function(e, o, t, n, r) {
    "use strict";
    function i(e, o) {
        var t = e.split(".");
        t.reduce(function(n, r, i) {
            var f = i === t.length - 1
              , c = n[r];
            if (!f) {
                if (void 0 !== c && "object" !== (void 0 === c ? "undefined" : a(c)))
                    throw new Error("Error creating namespace: " + e + " (" + r + " already exists and is of type " + (void 0 === c ? "undefined" : a(c)) + " with a value of " + c + ")");
                return n[r] = c || {},
                n[r]
            }
            if (c)
                throw new Error("The property '" + r + "' of namespace '" + e + "' already exists and thus cannot be safely defined");
            n[r] = o
        }, window)
    }
    function f(e, o) {
        e.forEach(function(e) {
            i(e, o)
        })
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    t.exports = {
        safeDefine: i,
        safeDefineMultiple: f
    }
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/getContainerEl", function(t, e, n, u, c) {
    "use strict";
    function l(t) {
        return t ? "string" == typeof t ? document.getElementById(t) : t instanceof HTMLElement ? t : null : null
    }
    n.exports = l
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/util/detectWebchatApi", function(t, e, p, c, i) {
    "use strict";
    p.exports = function(t, e) {
        e && "v1-http" === e.getClientType() && (t.webchatApi = "http.v1"),
        t.webchatApi = t.webchatApi || "xmpp.v1"
    }
    ,
    p.exports.REALTIME_CHAT_API = "xmpp.v1",
    p.exports.HTTP_CHAT_API = "http.v1"
});
$_mod_webchat.installed("purecloud-webchat$2.0.0", "raptor-async", "1.1.3");
$_mod_webchat.def("/raptor-async$1.1.3/AsyncValue", function(t, i, s, e, o) {
    "use strict";
    function a(t) {
        this.data = void 0,
        this.error = void 0,
        this._callbacks = void 0,
        this._state = d,
        this._timestamp = void 0,
        t && (this._loader = t.loader,
        this._scope = t.scope,
        this._ttl = t.ttl || void 0)
    }
    function n(t, i, s) {
        var e = t._callbacks;
        if (void 0 !== e) {
            t._callbacks = void 0;
            for (var o = 0; o < e.length; o++) {
                var a = e[o];
                a.callback.call(a.scope, i, s)
            }
        }
    }
    function r(t) {
        t._state = u,
        t._loader.call(t._scope || t, function(i, s) {
            i ? t.reject(i) : t.resolve(s)
        })
    }
    function c(t, i, s) {
        void 0 === t._callbacks && (t._callbacks = []),
        t._callbacks.push({
            callback: i,
            scope: s || t._scope || t
        })
    }
    function l(t) {
        var i = t._ttl;
        return void 0 !== i && _() - t._timestamp > i && (t.unsettle(),
        !0)
    }
    var h = t("process")
      , d = 0
      , u = 1
      , _ = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    a.prototype = {
        isResolved: function() {
            return 2 === this._state && !l(this)
        },
        isRejected: function() {
            return 3 === this._state && !l(this)
        },
        isLoading: function() {
            return this._state === u
        },
        isSettled: function() {
            return this._state > u && !l(this)
        },
        load: function(t, i) {
            if (!this._loader)
                throw new Error("Cannot call load when loader is not configured");
            return this.isSettled() && this.unsettle(),
            t && c(this, t, i),
            this._state !== u && r(this),
            this.data
        },
        done: function(t, i) {
            if (!t || t.constructor !== Function)
                throw new Error("Invalid callback: " + t);
            if (this.isSettled())
                return t.call(i || this._scope || this, this.error, this.data);
            h.domain && (t = h.domain.bind(t)),
            c(this, t, i),
            this._loader && this._state !== u && r(this)
        },
        reject: function(t) {
            this.error = t,
            this.data = void 0,
            void 0 !== this._ttl && (this._timestamp = _()),
            this._state = this._loader ? d : 3,
            n(this, t, null)
        },
        resolve: function(t) {
            this.error = void 0,
            this.data = t,
            void 0 !== this._ttl && (this._timestamp = _()),
            this._state = 2,
            n(this, null, t)
        },
        reset: function() {
            this.unsettle(),
            this.callbacks = void 0
        },
        unsettle: function() {
            this._state = d,
            this.error = void 0,
            this.data = void 0,
            this._timestamp = void 0
        }
    },
    a.create = function(t) {
        return new a(t)
    }
    ,
    s.exports = a
});
$_mod_webchat.def("/purecloud-webchat$2.0.0/src/jsapi/v1", function(e, r, t, n, o) {
    "use strict";
    function c(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new Promise(function(e, t) {
                function n(o, c) {
                    try {
                        var i = r[o](c)
                          , a = i.value
                    } catch (e) {
                        return void t(e)
                    }
                    if (!i.done)
                        return Promise.resolve(a).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                    e(a)
                }
                return n("next")
            }
            )
        }
    }
    function i() {
        return new Promise(function(r, t) {
            e("/lasso-loader$3.0.2/src/index").async("_517af1", function(n) {
                if (n)
                    return t(n);
                r(e("/purecloud-webchat$2.0.0/src/jsapi/Webchat"))
            })
        }
        )
    }
    function a(e) {
        var r = document.getElementById("purecloud-webchat-js");
        r && (e.orgGuid = r.getAttribute("org-guid") || e.orgGuid,
        e.webchatDeploymentKey = r.getAttribute("deployment-key") || e.webchatDeploymentKey,
        e.environment = r.getAttribute("env") || e.environment,
        e.region = r.getAttribute("region") || e.region)
    }
    function u(e) {
        return new Promise(function(r, t) {
            v.done(function(n, o) {
                if (n)
                    return t(n);
                var c = new o({
                    config: e
                })
                  , i = e.containerEl || g
                  , a = w(i);
                if (!a)
                    return void t(new Error('promptForSecurityKey: Could not find containerEl "' + i + '"'));
                c.renderSecurityKeyPromptForm({
                    containerEl: a
                }),
                c.once(o.SUCCESS, function(e) {
                    c.close(),
                    r(e)
                }),
                c.once(o.FAIL, function(e) {
                    c.close(),
                    t(e)
                })
            })
        }
        )
    }
    e("/lasso-loader$3.0.2/src/index").setTimeout(1e4),
    e("/purecloud-webchat$2.0.0/src/polyfills/index");
    var s = e("/webrtcsupport$2.2.0/index-browser")
      , l = e("/purecloud-webchat$2.0.0/src/storage/index")
      , p = e("/purecloud-webchat$2.0.0/src/util/url-join")
      , d = e("/purecloud-webchat$2.0.0/src/jsapi/util/index")
      , f = e("/purecloud-webchat$2.0.0/src/jsapi/util/safeDefine")
      , b = f.safeDefineMultiple
      , h = e("/purecloud-webchat$2.0.0/src/logging/index").logger(t)
      , w = e("/purecloud-webchat$2.0.0/src/jsapi/util/getContainerEl")
      , g = "security-key-prompt"
      , y = e("/purecloud-webchat$2.0.0/src/jsapi/util/detectWebchatApi");
    b(["Genesys.PureCloud.webchat", "ININ.webchat"], {
        create: function() {
            function e(e, t) {
                return r.apply(this, arguments)
            }
            var r = c(regeneratorRuntime.mark(function e(r, t) {
                var n, o, c, u, s, f, b, w, g;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            i();
                        case 3:
                            return n = e.sent,
                            o = [],
                            a(r),
                            e.next = 8,
                            d.requestWebchatDeployment(r);
                        case 8:
                            if (c = e.sent,
                            y(r, c),
                            c && (r.webchatDeploymentKey = c.getDeploymentKey(),
                            (u = c.getWebChatConfig()) && (r = Object.assign({}, u, r))),
                            r.webChatSkin = r.webChatSkin || r.webchatSkin,
                            delete r.webchatSkin,
                            delete r.deploymentUrl,
                            delete r.environment,
                            delete r.region,
                            r = n.parseConfig(r, o),
                            !o.length) {
                                e.next = 19;
                                break
                            }
                            throw new Error("Invalid configuration: " + o.join(", "));
                        case 19:
                            if (s = void 0,
                            !r.getReconnectEnabled()) {
                                e.next = 32;
                                break
                            }
                            return e.prev = 21,
                            f = p(r.getWebchatAppUrl(), "storage") + "/",
                            e.next = 25,
                            l.createClient(f, r.getOrgGuid());
                        case 25:
                            s = e.sent,
                            e.next = 32;
                            break;
                        case 28:
                            e.prev = 28,
                            e.t0 = e.catch(21),
                            h.error("Failed to create storageClient", e.t0),
                            r.setReconnectEnabled(!1);
                        case 32:
                            if (b = new n({
                                config: r,
                                webchatDeployment: c,
                                storageClient: s
                            }),
                            w = window.PURECLOUD_WEBCHAT_FRAME_CONFIG,
                            !r.getReconnectEnabled()) {
                                e.next = 45;
                                break
                            }
                            return e.prev = 35,
                            e.next = 38,
                            d.performAutoJoin(b, w);
                        case 38:
                            g = e.sent,
                            b.setAutoJoined(g),
                            e.next = 45;
                            break;
                        case 42:
                            e.prev = 42,
                            e.t1 = e.catch(35),
                            h.error("Unable to perform auto join", e.t1);
                        case 45:
                            if (!t) {
                                e.next = 47;
                                break
                            }
                            return e.abrupt("return", t(null, b));
                        case 47:
                            return e.abrupt("return", b);
                        case 50:
                            if (e.prev = 50,
                            e.t2 = e.catch(0),
                            h.error("Failed to create webchat", e.t2),
                            !t) {
                                e.next = 55;
                                break
                            }
                            return e.abrupt("return", t(e.t2));
                        case 55:
                            throw e.t2;
                        case 56:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 50], [21, 28], [35, 42]])
            }));
            return e
        }()
    });
    var m = e("/raptor-async$1.1.3/AsyncValue").create({
        loader: function(r) {
            e("/lasso-loader$3.0.2/src/index").async("_24795c", function(t) {
                if (t)
                    return r(t);
                r(null, e("/purecloud-webchat$2.0.0/src/jsapi/Screenshare"))
            })
        }
    })
      , v = e("/raptor-async$1.1.3/AsyncValue").create({
        loader: function(r) {
            e("/lasso-loader$3.0.2/src/index").async("_72e985", function(t) {
                if (t)
                    return r(t);
                r(null, e("/purecloud-webchat$2.0.0/src/jsapi/SecurityKeyPrompt"))
            })
        }
    });
    b(["Genesys.PureCloud.cobrowse", "ININ.cobrowse"], {
        create: function(e, r) {
            return (e.promptForSecurityKey ? u(e) : Promise.resolve(void 0)).then(function(r) {
                if (r) {
                    var t = r.sourceCommunicationId
                      , n = r.conversationId;
                    e.conversationId = n,
                    e.participant = {
                        sourceCommunicationId: t
                    }
                }
                return delete e.promptForSecurityKey,
                window.PureCloud.cobrowse.startSharing(e)
            }).catch(function(e) {
                if (r)
                    return r(e);
                throw e
            }).then(function(e) {
                return r ? r(null, e) : e
            })
        }
    }),
    b(["Genesys.PureCloud.screenshare", "ININ.screenshare"], {
        create: function(e, r) {
            if (!s.supportRTCPeerConnection || !s.supportGetUserMedia || !s.supportScreenSharing) {
                var t = new Error("Unsupported Browser");
                return t.name = "UNSUPPORTED_BROWSER",
                t.details = s,
                r(t)
            }
            m.done(function(t, n) {
                if (t)
                    return r(t);
                var o = [];
                if (e = n.parseConfig(e, o),
                o.length)
                    return r(new Error("Invalid configuration: " + o.join(", ")));
                r(null, new n({
                    config: e
                }))
            })
        }
    })
});
$_mod_webchat.run("/purecloud-webchat$2.0.0/src/jsapi/v1", {
    wait: !1
});
