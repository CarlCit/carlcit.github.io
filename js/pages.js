(() = >{
    var Oe = Object.create;
    var P = Object.defineProperty;
    var Re = Object.getOwnPropertyDescriptor;
    var xe = Object.getOwnPropertyNames;
    var Be = Object.getPrototypeOf,
    Fe = Object.prototype.hasOwnProperty;
    var Ue = e = >P(e, "__esModule", {
        value: !0
    });
    var ee = (e = >typeof require != "undefined" ? require: typeof Proxy != "undefined" ? new Proxy(e, {
        get: (t, n) = >(typeof require != "undefined" ? require: t)[n]
    }) : e)(function(e) {
        if (typeof require != "undefined") return require.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported')
    });
    var Pe = (e, t) = >() = >(t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var ze = (e, t, n) = >{
        if (t && typeof t == "object" || typeof t == "function") for (let o of xe(t)) ! Fe.call(e, o) && o !== "default" && P(e, o, {
            get: () = >t[o],
            enumerable: !(n = Re(t, o)) || n.enumerable
        });
        return e
    },
    z = e = >ze(Ue(P(e != null ? Oe(Be(e)) : {},
    "default", e && e.__esModule && "default" in e ? {
        get: () = >e.
    default,
        enumerable: !0
    }: {
        value: e,
        enumerable: !0
    })), e);
    var re = Pe((ie, O) = >{ (function(e) {
            "use strict";
            function t(r, m) {
                var s = (r & 65535) + (m & 65535),
                g = (r >> 16) + (m >> 16) + (s >> 16);
                return g << 16 | s & 65535
            }
            function n(r, m) {
                return r << m | r >>> 32 - m
            }
            function o(r, m, s, g, w, v) {
                return t(n(t(t(m, r), t(g, v)), w), s)
            }
            function i(r, m, s, g, w, v, E) {
                return o(m & s | ~m & g, r, m, w, v, E)
            }
            function a(r, m, s, g, w, v, E) {
                return o(m & g | s & ~g, r, m, w, v, E)
            }
            function h(r, m, s, g, w, v, E) {
                return o(m ^ s ^ g, r, m, w, v, E)
            }
            function f(r, m, s, g, w, v, E) {
                return o(s ^ (m | ~g), r, m, w, v, E)
            }
            function p(r, m) {
                r[m >> 5] |= 128 << m % 32,
                r[(m + 64 >>> 9 << 4) + 14] = m;
                var s, g, w, v, E, c = 1732584193,
                l = -271733879,
                u = -1732584194,
                d = 271733878;
                for (s = 0; s < r.length; s += 16) g = c,
                w = l,
                v = u,
                E = d,
                c = i(c, l, u, d, r[s], 7, -680876936),
                d = i(d, c, l, u, r[s + 1], 12, -389564586),
                u = i(u, d, c, l, r[s + 2], 17, 606105819),
                l = i(l, u, d, c, r[s + 3], 22, -1044525330),
                c = i(c, l, u, d, r[s + 4], 7, -176418897),
                d = i(d, c, l, u, r[s + 5], 12, 1200080426),
                u = i(u, d, c, l, r[s + 6], 17, -1473231341),
                l = i(l, u, d, c, r[s + 7], 22, -45705983),
                c = i(c, l, u, d, r[s + 8], 7, 1770035416),
                d = i(d, c, l, u, r[s + 9], 12, -1958414417),
                u = i(u, d, c, l, r[s + 10], 17, -42063),
                l = i(l, u, d, c, r[s + 11], 22, -1990404162),
                c = i(c, l, u, d, r[s + 12], 7, 1804603682),
                d = i(d, c, l, u, r[s + 13], 12, -40341101),
                u = i(u, d, c, l, r[s + 14], 17, -1502002290),
                l = i(l, u, d, c, r[s + 15], 22, 1236535329),
                c = a(c, l, u, d, r[s + 1], 5, -165796510),
                d = a(d, c, l, u, r[s + 6], 9, -1069501632),
                u = a(u, d, c, l, r[s + 11], 14, 643717713),
                l = a(l, u, d, c, r[s], 20, -373897302),
                c = a(c, l, u, d, r[s + 5], 5, -701558691),
                d = a(d, c, l, u, r[s + 10], 9, 38016083),
                u = a(u, d, c, l, r[s + 15], 14, -660478335),
                l = a(l, u, d, c, r[s + 4], 20, -405537848),
                c = a(c, l, u, d, r[s + 9], 5, 568446438),
                d = a(d, c, l, u, r[s + 14], 9, -1019803690),
                u = a(u, d, c, l, r[s + 3], 14, -187363961),
                l = a(l, u, d, c, r[s + 8], 20, 1163531501),
                c = a(c, l, u, d, r[s + 13], 5, -1444681467),
                d = a(d, c, l, u, r[s + 2], 9, -51403784),
                u = a(u, d, c, l, r[s + 7], 14, 1735328473),
                l = a(l, u, d, c, r[s + 12], 20, -1926607734),
                c = h(c, l, u, d, r[s + 5], 4, -378558),
                d = h(d, c, l, u, r[s + 8], 11, -2022574463),
                u = h(u, d, c, l, r[s + 11], 16, 1839030562),
                l = h(l, u, d, c, r[s + 14], 23, -35309556),
                c = h(c, l, u, d, r[s + 1], 4, -1530992060),
                d = h(d, c, l, u, r[s + 4], 11, 1272893353),
                u = h(u, d, c, l, r[s + 7], 16, -155497632),
                l = h(l, u, d, c, r[s + 10], 23, -1094730640),
                c = h(c, l, u, d, r[s + 13], 4, 681279174),
                d = h(d, c, l, u, r[s], 11, -358537222),
                u = h(u, d, c, l, r[s + 3], 16, -722521979),
                l = h(l, u, d, c, r[s + 6], 23, 76029189),
                c = h(c, l, u, d, r[s + 9], 4, -640364487),
                d = h(d, c, l, u, r[s + 12], 11, -421815835),
                u = h(u, d, c, l, r[s + 15], 16, 530742520),
                l = h(l, u, d, c, r[s + 2], 23, -995338651),
                c = f(c, l, u, d, r[s], 6, -198630844),
                d = f(d, c, l, u, r[s + 7], 10, 1126891415),
                u = f(u, d, c, l, r[s + 14], 15, -1416354905),
                l = f(l, u, d, c, r[s + 5], 21, -57434055),
                c = f(c, l, u, d, r[s + 12], 6, 1700485571),
                d = f(d, c, l, u, r[s + 3], 10, -1894986606),
                u = f(u, d, c, l, r[s + 10], 15, -1051523),
                l = f(l, u, d, c, r[s + 1], 21, -2054922799),
                c = f(c, l, u, d, r[s + 8], 6, 1873313359),
                d = f(d, c, l, u, r[s + 15], 10, -30611744),
                u = f(u, d, c, l, r[s + 6], 15, -1560198380),
                l = f(l, u, d, c, r[s + 13], 21, 1309151649),
                c = f(c, l, u, d, r[s + 4], 6, -145523070),
                d = f(d, c, l, u, r[s + 11], 10, -1120210379),
                u = f(u, d, c, l, r[s + 2], 15, 718787259),
                l = f(l, u, d, c, r[s + 9], 21, -343485551),
                c = t(c, g),
                l = t(l, w),
                u = t(u, v),
                d = t(d, E);
                return [c, l, u, d]
            }
            function b(r) {
                var m, s = "",
                g = r.length * 32;
                for (m = 0; m < g; m += 8) s += String.fromCharCode(r[m >> 5] >>> m % 32 & 255);
                return s
            }
            function S(r) {
                var m, s = [];
                for (s[(r.length >> 2) - 1] = void 0, m = 0; m < s.length; m += 1) s[m] = 0;
                var g = r.length * 8;
                for (m = 0; m < g; m += 8) s[m >> 5] |= (r.charCodeAt(m / 8) & 255) << m % 32;
                return s
            }
            function k(r) {
                return b(p(S(r), r.length * 8))
            }
            function H(r, m) {
                var s, g = S(r),
                w = [],
                v = [],
                E;
                for (w[15] = v[15] = void 0, g.length > 16 && (g = p(g, r.length * 8)), s = 0; s < 16; s += 1) w[s] = g[s] ^ 909522486,
                v[s] = g[s] ^ 1549556828;
                return E = p(w.concat(S(m)), 512 + m.length * 8),
                b(p(v.concat(E), 512 + 128))
            }
            function X(r) {
                var m = "0123456789abcdef",
                s = "",
                g, w;
                for (w = 0; w < r.length; w += 1) g = r.charCodeAt(w),
                s += m.charAt(g >>> 4 & 15) + m.charAt(g & 15);
                return s
            }
            function F(r) {
                return unescape(encodeURIComponent(r))
            }
            function Q(r) {
                return k(F(r))
            }
            function De(r) {
                return X(Q(r))
            }
            function Z(r, m) {
                return H(F(r), F(m))
            }
            function He(r, m) {
                return X(Z(r, m))
            }
            function U(r, m, s) {
                return m ? s ? Z(m, r) : He(m, r) : s ? Q(r) : De(r)
            }
            typeof define == "function" && define.amd ? define(function() {
                return U
            }) : typeof O == "object" && O.exports ? O.exports = U: e.md5 = U
        })(ie)
    });
    var q = document.documentElement;
    if (q.classList) {
        let n = function(i = !0) {
            i ? (q.classList.remove("light-theme"), q.classList.add("dark-theme"), o("dark"), sessionStorage["dark-theme"] = 1) : (q.classList.remove("dark-theme"), q.classList.add("light-theme"), o("light"), delete sessionStorage["dark-theme"]),
            e && e.checked !== i && (e.checked = !e.checked)
        },
        o = function(i) {
            let a = document.querySelectorAll("github-gist");
            for (let h = 0; h < a.length; h++) a[h].setAttribute("theme", i)
        };
        Pt = n,
        zt = o,
        /windows/i.test(navigator.userAgent) && document.body.classList.add("win");
        let e = document.getElementById("js-theme-toggle");
        e && e.addEventListener("change", i = >{
            n(i.target.checked)
        });
        let t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        e && t && sessionStorage["dark-theme"] && (sessionStorage["dark-theme"] = 1),
        n(Boolean(sessionStorage["dark-theme"]))
    }
    var Pt, zt;
    var J, Je = document.documentElement;
    window.Intl && window.Intl.RelativeTimeFormat && (J = new Intl.RelativeTimeFormat(Je.lang || "en", {
        numeric: "auto"
    }));
    function M(e, t) {
        return J ? J.format( - e, t) : e === 1 ? `$ {
            e
        }
        $ {
            t
        }
        ago`: `$ {
            e
        }
        $ {
            t
        }
        s ago`
    }
    function Ge(e) {
        let t = e.getAttribute("datetime"),
        n = Math.floor((new Date - new Date(t)) / 1e3),
        o = Math.floor(n / 2592e3);
        if (o > 3) return;
        let i = e.querySelector("a") || e;
        return o >= 1 ? i.textContent = M(o, "month") : (o = Math.floor(n / 86400), o >= 1 ? i.textContent = M(o, "day") : (o = Math.floor(n / 3600), o >= 1 ? i.textContent = M(o, "hour") : (o = Math.floor(n / 60), o >= 1 ? i.textContent = M(o, "minute") : i.textContent = M(n, "second"))))
    }
    var te = document.querySelectorAll("time.js-time");
    for (let e = 0; e < te.length; e++) Ge(te[e]);
    function Ye(e) {
        let t = e.getAttribute("aria-controls"),
        n = document.getElementById(t);
        e.addEventListener("click",
        function() {
            e.getAttribute("aria-expanded") === "false" ? (e.setAttribute("aria-expanded", "true"), n.classList.add("_expanded"), document.body.setAttribute("data-expanded-" + t, "true")) : (e.setAttribute("aria-expanded", "false"), n.classList.remove("_expanded"), document.body.removeAttribute("data-expanded-" + t))
        })
    }
    function Ve(e) {
        let t = e.getAttribute("aria-controls"),
        n = document.getElementById(t),
        o = document.querySelector('.js-toggle-menu[aria-controls="' + t + '"]');
        e.addEventListener("click",
        function() {
            n.classList.remove("_expanded"),
            o && o.setAttribute("aria-expanded", "false"),
            document.body.removeAttribute("data-expanded-" + t)
        })
    }
    var T, ne = document.querySelectorAll(".js-toggle-menu");
    for (T = 0; T < ne.length; T++) Ye(ne[T]);
    var oe = document.querySelectorAll(".js-backdrop");
    for (T = 0; T < oe.length; T++) Ve(oe[T]);
    var se = z(re()),
    We = "3TS0s5PHGBN6gHZyno4ChbaXtrjUDp";
    function I(e, t, n = {}) {
        let o = new XMLHttpRequest,
        i = n.method;
        if (i || (t ? i = "POST": i = "GET"), o.open(i, e, !0), !n.anonymous) {
            let a = Ke({
                method: i,
                url: Xe(e),
                scope: n.scope || "admin"
            });
            o.setRequestHeader("Authorization", "session " + a)
        }
        return n.timeout && (o.timeout = n.timeout),
        new Promise((a, h) = >{
            o.onreadystatechange = function() {
                if (o.readyState === 4) {
                    if (o.status === 200 || o.status === 201) a(JSON.parse(o.responseText));
                    else if (o.status === 400 && n.fail) {
                        let f = new Error("Bad Request");
                        f.data = JSON.parse(o.responseText),
                        h(f)
                    }
                }
            },
            o.ontimeout = function() {
                n.ontimeout && n.ontimeout(),
                o.abort(),
                h(new Error("Request Timeout"))
            },
            o.onerror = function() {
                h(new Error("Request Error"))
            },
            t ? (o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(t))) : o.send()
        })
    }
    function Ke(e) {
        let t = parseInt( + new Date / 1e3, 10),
        n = G(JSON.stringify({
            iat: t,
            alg: "T5"
        }));
        e.site_id = window.SITE.id;
        let o = G(JSON.stringify(e)),
        i = G((0, se.
    default)(`$ {
            n
        }.$ {
            o
        }.$ {
            We
        }`));
        return`$ {
            n
        }.$ {
            o
        }.$ {
            i
        }`
    }
    function G(e) {
        return btoa(e).replace(/=*$/, "")
    }
    function Xe(e) {
        return /^https?:\/\//.test(e) ? new URL(e).pathname: e
    }
    var ae = "https://typlog.com",
    ce = document.querySelector('meta[name="provider"]');
    ce && (ae = ce.content);
    function C(e, t, n = {}) {
        let o = ae + "/api/v3/browser/" + e;
        return I(o, t, n)
    }
    function Qe(e) {
        return C("subscribe", e)
    }
    function Ze(e, t) {
        return C("images", {
            id: e,
            images: t
        })
    }
    function et(e, t) {
        return C("reveal", {
            id: e,
            password: t
        })
    }
    function tt(e) {
        return C("stats", e)
    }
    function nt(e) {
        return C("search", {
            q: e
        })
    }
    function ot(e) {
        return C("message", e)
    }
    var A = {
        subscribe: Qe,
        collectImages: Ze,
        reveal: et,
        track: tt,
        search: nt,
        message: ot
    };
    var le = new URL(SITE.base_url).pathname + "-/collect",
    ue = {
        cs: "utm_source",
        cm: "utm_medium",
        cn: "utm_campaign",
        ck: "utm_term",
        cc: "utm_content"
    };
    function it() {
        let e = {
            ul: navigator.language.toLowerCase(),
            dl: location.href,
            dt: document.title,
            seg: "1",
            sct: st(),
            "ep.site_id": SITE.id
        };
        document.referrer && (e.dr = document.referrer);
        let t = sessionStorage.getItem("_sid");
        t || (t = Math.random().toString().slice(2), sessionStorage.setItem("_sid", t), e._ss = "1"),
        e.sid = t;
        let n = localStorage.getItem("_cid");
        if (n || (e.fv = "1", n = rt(), localStorage.setItem("_cid", n)), e.cid = n, window.URL) {
            let b = new URL(location.href);
            Object.keys(ue).forEach(S = >{
                let k = b.searchParams.get(ue[S]);
                k && (e[S] = k)
            })
        }
        let o = document.querySelector('meta[name="page:id"]'),
        i = document.querySelector('meta[name="page:type"]');
        o && i && (e["ep.page_id"] = o.content, e["ep.page_type"] = i.content);
        let a = document.querySelector('link[rel="canonical"]');
        a && (e.dl = a.href);
        let h = Math.round(visualViewport.width),
        f = Math.round(visualViewport.height);
        e.vp = `$ {
            h
        }
        x$ {
            f
        }`,
        e.sr = `$ {
            screen.width
        }
        x$ {
            screen.height
        }`,
        e.sd = `$ {
            screen.colorDepth
        } - bit`;
        let p = Object.assign({
            en: "page_view"
        },
        e);
        I(le, p, {
            anonymous: !0
        }),
        e["ep.page_id"] && at(e)
    }
    function rt() {
        let e = Math.random().toString(36).slice(2),
        t = parseInt(Date.now() / 1e3, 10).toString();
        return`$ {
            e
        }.$ {
            t
        }`
    }
    function st() {
        let e = parseInt(sessionStorage.getItem("_sct") || 0, 10);
        return sessionStorage.setItem("_sct", e + 1),
        e + 1
    }
    function at(e) {
        let t = e["ep.page_id"],
        n = document.querySelector(".js-enjoy"),
        o = document.createElement("i"),
        i = a = >{
            n && a.likes && (n.contains(o) || n.appendChild(o), o.textContent = a.likes)
        };
        if (A.track({
            view: t
        }).then(i), n) {
            let a = {};
            try {
                if (a = JSON.parse(localStorage.getItem("likes")) || {},
                a[t]) {
                    n.disabled = !0;
                    return
                }
            } catch {}
            n.addEventListener("click", () = >{
                n.disabled = !0;
                let h = Object.assign({
                    en: "like"
                },
                e);
                I(le, h, {
                    anonymous: !0
                }),
                A.track({
                    like: t
                }).then(i),
                a[t] = 1,
                localStorage.setItem("likes", JSON.stringify(a))
            })
        }
    }
    SITE.active && it();
    function de(e) {
        let t = e.getAttribute("data-src");
        t || (t = e.getAttribute("data-cover"));
        let n = "background-image:url(" + t + ")",
        o = e.getAttribute("data-width"),
        i = e.getAttribute("data-height");
        if (o && i) {
            let a = parseInt(i, 10) * 100 / parseInt(o, 10) + "vw";
            n += ";height:" + a
        }
        e.setAttribute("style", n)
    }
    var R = document.querySelectorAll(".js-cover");
    if ("IntersectionObserver" in window) {
        let e = new IntersectionObserver(function(t, n) {
            t.forEach(function(o) {
                o.isIntersecting && (de(o.target), e.unobserve(o.target))
            })
        });
        for (let t = 0; t < R.length; t++) e.observe(R[t])
    } else for (let e = 0; e < R.length; e++) de(R[e]);
    var ct = document.querySelector('meta[name="provider"]').content,
    me = document.querySelector(".js-check");
    me && SITE.active && me.addEventListener("click",
    function() {
        let e = document.querySelector('meta[name="page:id"]');
        e && (location.href = ct + "/r/read/" + e.content)
    });
    var he = class {
        constructor() {
            this._inserted = !1,
            this.el = Y("div", "overlay");
            let t = Y("div", "overlay_wrap");
            this.el.appendChild(t),
            this.wrapper = t;
            let n = Y("button", "overlay_close");
            n.setAttribute("aria-label", "Close"),
            n.innerHTML = '<svg viewBox="0 0 24 24"><path class="a" d="M.75 23.249l22.5-22.5M23.25 23.249L.75.749"></path></svg>',
            this.el.appendChild(n),
            n.addEventListener("click", o = >{
                o.preventDefault(),
                this.hide()
            })
        }
        appendChild(t) {
            this.wrapper.appendChild(t)
        }
        show() {
            this._inserted || (document.body.appendChild(this.el), this._inserted = !0),
            this.el.classList.add("active"),
            document.body.classList.add("overlay-active")
        }
        hide() {
            this.el.classList.remove("active"),
            document.body.classList.remove("overlay-active")
        }
    };
    function Y(e, t) {
        var n = document.createElement(e);
        return n.className = t,
        n
    }
    var L = he;
    function y(e, t) {
        var n, o = document.getElementsByTagName("head")[0];
        /\.css$/.test(e) ? (n = document.createElement("link"), n.setAttribute("rel", "stylesheet"), n.href = e) : (n = document.createElement("script"), n.src = e),
        t && (n.onload = t),
        o.appendChild(n)
    }
    function lt() {
        var e = "test-db",
        t = window.localStorage;
        if (!t) return ! 1;
        try {
            return t.setItem(e, "a"),
            t.removeItem(e),
            !0
        } catch {
            return ! 1
        }
    }
    var on = lt();
    var ut = "https://s3.typlog.com/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js",
    V = null;
    function $(e) {
        return SITE.algolia_id && SITE.algolia_key ? V ? fe(e) : new Promise((t, n) = >{
            y(ut, () = >{
                V = window.algoliasearch(SITE.algolia_id, SITE.algolia_key).initIndex(window.SITE.slug),
                fe(e).then(t).
                catch(n)
            })
        }) : dt(e)
    }
    function dt(e) {
        let t = new RegExp(e, "ig"),
        n = o = >o.replace(t, i = >"<em>" + i + "</em>");
        return A.search(e).then(o = >{
            let i = o.results.map(a = >(a.title = n(a.title), a.subtitle && (a.subtitle = n(a.subtitle)), a.cover && (a.image = a.cover.src), a));
            return {
                engine: "api",
                results: i
            }
        })
    }
    function fe(e) {
        return V.search(e, {
            attributesToHighlight: ["title", "subtitle"],
            attributesToSnippet: ["content"],
            snippetEllipsisText: "...",
            queryLanguages: ["zh", "ja", "en"]
        }).then(({
            hits: t
        }) = >{
            if (!t.length) return {
                engine: "algolia",
                results: []
            };
            let n = t.map(o = >{
                let i = {
                    title: o._highlightResult.title.value,
                    url: o.url,
                    image: o.image
                },
                a = o._highlightResult.subtitle;
                a && (i.subtitle = a.value);
                let h = o._snippetResult.content;
                return h && (i.content = h.value),
                i
            });
            return {
                engine: "algolia",
                results: n
            }
        })
    }
    var mt = "https://s3.typlog.com/npm/@typlog/ui@1.7.0/algolia.svg",
    ht = ` < div class = "algolia_logo" > <img src = "${mt}" > </div>`,W,pe=document.querySelectorAll(".js-search");for(let e=0;e<pe.length;e++)ft(pe[e]);function ft(e){e.nodeName==="INPUT"?e.addEventListener("focus",function(){ge(e)}):e.addEventListener("click",function(t){t.preventDefault(),ge(e)})}function ge(e){W||(W=new be(e)),W.show()}var be=class{constructor(t){this.el=t,this.overlay=new L;let n=we("input","search_input");n.type="search",n.placeholder="Type to search ...",this.overlay.appendChild(n),this.input=n,n.addEventListener("keyup",i=>{i.keyCode===13?this.search():i.keyCode===27&&this.overlay.hide()});let o=we("div","search_results");this.overlay.appendChild(o),this.container=o}show(){this.overlay.show(),this.input.focus()}search(){let t=this.input.value;!t||$(t).then(({engine:n,results:o})=>{let i=o.map(pt).join("");i||(i="<h2>No results</h2 > "),n==="algolia "&&(i+=ht),this.container.innerHTML=i}).catch(()=>{this.container.innerHTML=" < h2 > an error has occurred < h2 > "})}};function we(e,t){var n=document.createElement(e);return n.className=t,n}function pt(e){let t=e.url,n=`<h3>${e.title}</h3>`;e.subtitle&&(n+=`<h4>${e.subtitle}</h4>`),e.content&&(n+=`<p>${e.content}</p>`);let o='<div class="search_hit ">';return o+=`<a class="search_text " href="$ {
        t
    }
    ">${n}</a>`,e.image&&(o+=`
    <a class="search_image " href="$ {
        t
    }
    ">
      <img src="$ {
        e.image
    }
    " />
    </a>
    `),o+" < /div>"}var gt=0;function j(e){var t=bt(e);t.id="notice-"+gt++,this.el=t}j.prototype.show=function(){if(!document.getElementById(this.el.id)){var e=document.querySelector(".notice-container");e||(e=document.createElement("div"),e.className="notice-container",document.body.appendChild(e)),e.appendChild(this.el)}};j.prototype.hide=j.prototype.clear=function(){ve(this.el)};function bt(e){var t=document.createElement("div");t.className="notice-item",e.type&&(t.className+=" "+e.type);var n;e.url?(n=document.createElement("a"),n.href=e.url,n.target="_blank"):n=document.createElement("div"),n.className="notice-content",n.innerHTML=e.message;var o=document.createElement("span");o.className="notice-close",o.innerHTML="\xD7",t.appendChild(o),t.appendChild(n);var i=e.closeEvent||"click";return o.addEventListener(i,function(a){ve(t)}),t}function ve(e){e.className+=" notice-dismiss",setTimeout(function(){e&&e.parentNode&&e.parentNode.removeChild(e)},200)}function ye(e,t){if(!!e){e.message||(e={message:e});var n=e.duration||4e3,o=new j(e);o.show(),setTimeout(function(){o.clear(),t&&t()},n)}}ye.Notice=j;var x=ye;var N;function wt(){N||(N=new L,N.appendChild(vt())),N.show(),SITE.subscriber&&setTimeout(()=>{N.el.querySelector("input").focus()})}function vt(){let e=document.createElement("div");e.className="tp-subscribe";let t=document.createElement("div");t.className="tp-subscribe_head",SITE.icon?t.innerHTML=`<img src="${SITE.icon}" / > <h2 > $ {
        SITE.name
    } < /h2>`:t.innerHTML=`<h2>${SITE.name}</h2 > `,
    e.appendChild(t);
    let n = document.createElement("div");
    n.className = "tp-subscribe_main";
    let o = document.createElement("div"),
    i = encodeURIComponent(SITE.base_url + "feed.xml");
    o.className = "tp-subscribe_feed",
    o.innerHTML = ` < div class = "tp-subscribe_feed-url" > <input type = "url"value = "${SITE.base_url}feed.xml" / ></div>
  <a href="https:/ / feedly.com / i / subscription / feed / $ {
        i
    }
    " class="feedly " target="_blank ">Subscribe via Feedly</a>
  <a href="https: //www.inoreader.com/feed/${i}" class="inoreader" target="_blank">Subscribe via Inoreader</a>
    < a href = "https://feedbin.com/?subscribe=${i}"class = "feedbin"target = "_blank" > Subscribe via Feedbin < /a>
  `;let a=document.createElement("div");if(SITE.socials){a.className="tp-subscribe_social";let h=St(SITE.socials).map(f=>`<a href="${f.href}" target="_blank"><i class="icon icon-${f.icon}" aria-label="${f.name}"></i > </a>`).join("");a.innerHTML=h}if(SITE.subscriber){let h=document.createElement("div");h.className="tp-subscribe_tabs";let f=document.createElement("button");f.innerText="Email",f.className="mail",f.addEventListener("click",()=>{e.setAttribute("data-tab","mail"),setTimeout(()=>{e.querySelector("input").focus()})}),h.appendChild(f);let p=document.createElement("button");p.innerText="RSS",p.className="feed",p.addEventListener("click",()=>{e.setAttribute("data-tab","feed")}),h.appendChild(p),e.appendChild(h),e.setAttribute("data-tab","mail");let b=Et();n.appendChild(b)}else e.setAttribute("data-tab","feed");return n.appendChild(o),n.appendChild(a),e.appendChild(n),e}var yt=[["telegram","https:/ / t.me / ","Telegram "],["github ","https: //github.com/","GitHub"],["twitter","https://twitter.com/","Twitter"],["instagram","https://instagram.com/","Instagram"],["weibo","https://www.weibo.com/","\u5FAE\u535A"],["behance","https://www.behance.net/","Behance"],["linkedin","https://www.linkedin.com/in/","Linkedin"],["vsco","https://vsco.co/","VSCO"],["unsplash","https://unsplash.com/@","Unsplash"],["zhihu","https://www.zhihu.com/people/","\u77E5\u4E4E"]];function St(e){let t=[];return yt.forEach(n=>{let o=n[0];e[o]&&t.push({href:n[1]+e[o],name:n[2],icon:o})}),t}function Et(){let e=document.createElement("form");return e.className="tp-subscribe_mail",e.innerHTML=`
    < div > <label
    for = "sub_name" > Name < /label>
    <input id="sub_name" name="name" placeholder="Your name" required/ > </div>
  <div>
    <label for="sub_email">Email</label > <input id = "sub_email"type = "email"name = "email"placeholder = "Your email"required / ></div>
  <button>Subscribe</button > `,
    Se(e),
    e
}
function Se(e) {
    e.addEventListener("submit",
    function(t) {
        t.preventDefault();
        let n = e.querySelectorAll("input"),
        o = {};
        for (let i = 0; i < n.length; i++) o[n[i].name] = n[i].value;
        A.subscribe(o).then(function() {
            x("You have successfully subscribed to the mailing list.")
        })
    })
}
function At(e) {
    e.tagName === "FORM" ? Se(e) : e.addEventListener("click", () = >wt())
}
if (SITE.active) {
    let e = document.querySelectorAll(".js-subscribe");
    for (let t = 0; t < e.length; t++) At(e[t])
}
var K = document.querySelector("#comment_thread"), Ee = document.querySelector('meta[name="page:id"]'); SITE.active && K && Ee && (y("https://s.typlog.com/tc/index.d129ad16.js"), K.innerHTML = ` < tc - comment site - id = "${SITE.id}"page - id = "${Ee.content}" > </tc-comment>`);if(!K){let e=document.querySelector("#disqus_thread");if(e){let t=e.getAttribute("data-shortname");t&&(window.disqus_config=function(){this.page.url=document.querySelector('meta[property="og:url"]').content,this.page.title=document.querySelector('meta[property="og:title"]').content},Tt(t))}}function Tt(e){var t=document.createElement("script");t.type="text/javascript ",t.async=!0,t.src="https: //"+e+".disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),document.body.appendChild(t)}var Ae=document.querySelectorAll("form.js-message");function kt(e){let t=!1;e.addEventListener("submit",n=>{if(t)return;t=!0;let o={};n.preventDefault();for(let i=0;i<e.elements.length;i++){let a=e.elements[i];a.name&&(o[a.name]=a.value,a.value="")}A.message(o).then(function(){notice("Your message has been delivered."),t=!1})})}for(let e=0;e<Ae.length;e++)kt(Ae[e]);var Te=`
let channel;
function updateStyle(t) {
    if (t) {
        let e = document.getElementById("custom-style");
        e ? e.href = t: (e = document.createElement("link"), e.id = "custom-style", e.rel = "stylesheet", e.href = t, document.head.appendChild(e))
    } else {
        const e = document.getElementById("custom-style");
        e && document.head.removeChild(e)
    }
}
window.addEventListener("message",
function(t) {
    if (!channel && t.ports) {
        channel = t.ports[0];
        const e = t.data.timestamp;
        channel.postMessage({
            height: document.body.scrollHeight,
            timestamp: e
        }),
        t.data.stylesheet && updateStyle(t.data.stylesheet),
        t.data.theme && (document.documentElement.className = t.data.theme),
        channel.onmessage = function(s) {
            s.data.stylesheet !== void 0 && updateStyle(s.data.stylesheet),
            s.data.theme && (document.documentElement.className = s.data.theme)
        }
    }
});`;
var It = {
    dark: "https://s3.typlog.com/gh/lonekorean/gist-syntax-themes@848d6580/stylesheets/obsidian.css"
},
Ct = "html,body{margin:0;padding:0}body .gist .blob-code-inner{font-size:0.92em}body .gist .blob-num{font-size:0.86em}.gist .blob-wrapper tr:first-child td{padding-top:6px !important}"; customElements.define("github-gist", class extends HTMLElement {
    constructor() {
        super();
        this.ready = !1,
        this.channel = new MessageChannel
    }
    connectedCallback() {
        let e = this.attachShadow({
            mode: "closed"
        }),
        t = document.createElement("iframe"),
        n = Date.now(),
        o = this.getAttribute("path"),
        i = this.getAttribute("theme"),
        a = {};
        i && (a = ke(i)),
        a.timestamp = n,
        t.setAttribute("frameborder", "0"),
        t.setAttribute("width", "100%"),
        t.addEventListener("load", () = >{
            t.contentWindow.postMessage(a, "*", [this.channel.port2])
        }),
        this.channel.port1.onmessage = p = >{
            n == p.data.timestamp && (this.ready = !0, t.style.height = p.data.height + 20 + "px")
        };
        let h = getComputedStyle(this.parentElement).fontSize,
        f = ` < style > $ {
            Ct
        }
        body.gist.highlight {
            font - size: $ {
                h
            }
        } < /style>`;t.srcdoc=`${f}<script src="https:/ / gist.github.com / $ {
            o
        }.js "><\/script><script>${Te}<\/script>`,e.appendChild(t)}static get observedAttributes(){return["theme "]}attributeChangedCallback(e,t,n){this.ready&&e==="theme "&&this.ready&&this.channel.port1.postMessage(ke(n))}disconnectedCallback(){this.channel.port1.close()}});function ke(e){let t;return window.GIST_STYLESHEETS?t=window.GIST_STYLESHEETS[e]||null:t=It[e]||null,{stylesheet:t,theme:e}}function Ie(e){e.querySelectorAll("em ").forEach(_t),e.querySelectorAll("rt ").forEach(qt),e.querySelectorAll("code ").forEach(Ce("en ")),e.querySelectorAll(".block - code ").forEach(Ce("en "))}function Ce(e){return function(t){t.setAttribute("lang ",e)}}function Lt(e){if(!e.match(/[\u2E80-\u9FFF]/)){{if(e.match(/[\u3040-\u31FF]/))return"ja ";if(e.match(/[\u3130-\u318F]/))return"kr "}return"en "}}function _t(e){let t=e.textContent||e.innerText,n=Lt(t);n&&e.setAttribute("lang ",n)}function qt(e){(e.textContent||e.innerText).match(/([\u02C7-\u02CB\u02D9\u02EA-\u02EB\u3105-\u312D\u31A0-\u31BB])/)&&e.classList.add("bopomofo ")}var Mt="https: //platform.twitter.com/widgets.js";function Le(e){(e.querySelector("blockquote.twitter-tweet")||e.querySelector("a.twitter-moment"))&&!window.twttr&&y(Mt)}async function _e(e){y("https://s3.typlog.com/npm/photoswipe@5.2.7/dist/photoswipe.css");let n=(await import("https://s3.typlog.com/npm/photoswipe@5.2.7/dist/photoswipe-lightbox.esm.min.js")).default,o=e.querySelectorAll("figure > picture"),i=[],a=new n({gallery:e,children:o,pswpModule:()=>import("https://s3.typlog.com/npm/photoswipe@5.2.7/dist/photoswipe.esm.min.js")});function h(p,b){b.addEventListener("click",S=>{let k={x:S.clientX,y:S.clientY},H=a.applyFilters("clickedIndex",p,S,a);H>=0&&a.loadAndOpen(H,i,k)},!1)}function f(p){let b=p.querySelector("img"),S=document.createElement("picture");S.innerHTML=p.innerHTML,i.push({src:b.src,alt:b.getAttribute("alt"),width:b.getAttribute("width"),height:b.getAttribute("height"),element:p,picture:S})}for(let p=0;p<o.length;p++)f(o[p]),h(p,o[p])}function qe(e){let t=e.querySelectorAll("figure img");if(!t.length)return;let n=()=>{_e(e);let o=e.querySelectorAll(".gallery_column");for(let i=0;i<o.length;i++)Dt(o[i])};$t(t,n)||n()}function $t(e,t){let n=[],o=[];for(let i=0;i<e.length;i++){let a=e[i];a.getAttribute("width")?n.push({src:a.src,width:a.getAttribute("width"),height:a.getAttribute("height")}):o.push(a)}return o.length>0?(Promise.all(o.map(i=>jt(i.src,i))).then(i=>{let a=n.concat(i);Nt(a),t()}),!0):!1}function jt(e,t){return new Promise((n,o)=>{let i=new Image;i.src=e,i.onload=function(){t.setAttribute("width",i.naturalWidth),t.setAttribute("height",i.naturalHeight),n({src:e,width:i.naturalWidth,height:i.naturalHeight})},i.onerror=function(){o(new Error("load image error"))}})}function Nt(e){let t=document.querySelector('meta[name="page:id"]');if(t){let n=t.getAttribute("content");A.collectImages(n,e)}}function Dt(e){let t=e.querySelectorAll("img");if(t.length<2)return;let n=.01,o={},i,a,h,f;for(let b=0;b<t.length;b++)i=t[b],a=i.getAttribute("width"),h=i.getAttribute("height"),a&&h&&(f=parseInt(a,10)/parseInt(h,10),f>n&&(n=f),o[b]=f);let p=e.querySelectorAll("figure");for(let b=0;b<t.length;b++)i=t[b],f=o[b],f&&p[b].setAttribute("style","flex:"+f/n)}function Me(e){let t=e.querySelector(".js-audio");t&&Ht(t)}function B(e,t="og"){let n=`meta[property="${t}:${e}"]`,o=document.querySelector(n);return o?o.getAttribute("content"):""}function $e(e){let t=getComputedStyle(e).getPropertyValue("--t-on-primary"),n=e.querySelector("audio"),o=new window.Shikwasa({container:e,preload:"none",download:!0,fixed:{type:"static"},theme:/255/.test(t)?"light":"dark",themeColor:"rgb(var(--t-rc-primary))",audio:{src:n.src,artist:B("site_name"),title:n.getAttribute("data-title")||B("title"),cover:n.getAttribute("data-image")||B("image"),duration:n.getAttribute("data-duration")||B("duration","music")}});window.location.hash&&je(o),window.onhashchange=function(){o&&(je(o),o.audio.paused&&o.play())},window.shikwasa=o}function je(e){let t=window.location.hash.match(/#t=(\d?\d)?:?(\d\d):(\d\d)/);if(!t)return;let n=parseInt((t[1]||0)*3600)+parseInt(t[2]*60)+parseInt(t[3]);e.seek(n)}function Ht(e){if(window.Shikwasa)$e(e);else{let t="https://s3.typlog.com/npm/shikwasa@2.0.1/dist/shikwasa.min.js";y("https://s3.typlog.com/npm/shikwasa@2.0.1/dist/shikwasa.min.css"),y(t,function(){$e(e)})}}var Ot="https://s3.typlog.com/npm/qrious@4.0.2/dist/qrious.min.js",Rt={tw:"https://twitter.com/intent/tweet?text={t}&url={u}",fb:"http://www.facebook.com/sharer.php?u={u}",wb:"http://service.weibo.com/share/share.php?title={t}&url={u}",tg:"https://telegram.me/share/url?text={t}&url={u}"},D;function xt(e){D&&D.show(),D=new L,y(Ot,()=>{let t=new Image;new window.QRious({element:t,size:600,value:e}),t.setAttribute("style","width:300px;height:300px;");let n=document.createElement("div");n.setAttribute("style","text-align:center"),n.innerHTML="<h3>\u626B\u63CF\u4E8C\u7EF4\u7801\u5206\u4EAB\u5230\u5FAE\u4FE1</h3>",n.appendChild(t),D.appendChild(n)}),D.show()}function Ne(){let e=document.querySelector('meta[property="og:title"]').getAttribute("content"),t=document.querySelector('link[rel="canonical"]').getAttribute("href");function n(i){i.addEventListener("click",function(a){a.preventDefault();let h=i.getAttribute("data-type");if(h==="wx")return xt(t);let f=Rt[h],p=t;h==="tg"&&(p="https://"+SITE.slug+".typlog.io"+new URL(t).pathname,p="https://t.me/iv?url="+encodeURIComponent(p)+"&rhash=17f6269993c27f"),f=f.replace("{t}",encodeURIComponent(e)).replace("{u}",encodeURIComponent(p)),window.open(f,"_blank","width=615,height=505")})}let o=document.querySelectorAll("a.js-share");for(let i=0;i<o.length;i++)n(o[i])}var _=document.querySelector(".js-content");_&&(Ie(_),Le(_),Me(_),qe(_),Ft(_),Ne(),Bt());function Bt(){let e=document.querySelector("#f_form");e&&e.addEventListener("submit",t=>{t.preventDefault();let n=document.querySelector('meta[name="page:id"]').content,o=document.querySelector("#f_password").value;A.reveal(n,o).then(i=>{location.href=i.url}).catch(i=>{if(i.data&&i.data.message){let a=i.data;a.type="error",x(a)}})})}function Ft(e){e.querySelector(".math")&&(window.MathJax={tex:{inlineMath:[["$","$"]]},svg:{fontCache:"global"}},y("https://s3.typlog.com/npm/mathjax@3/es5/tex-mml-chtml.js"))}window.typlog={search:$};})();
        