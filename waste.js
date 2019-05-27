(function() {
    var d, g = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        l = function(a, b) {
            if (b) {
                var c = k;
                a = a.split(".");
                for (var e = 0; e < a.length - 1; e++) {
                    var f = a[e];
                    f in c || (c[f] = {});
                    c = c[f]
                }
                a = a[a.length - 1];
                e = c[a];
                b = b(e);
                b != e && null != b && g(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        },
        p = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        q = function() {
            q = function() {};
            k.Symbol || (k.Symbol = t)
        },
        u = function(a, b) {
            this.T = a;
            g(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    u.prototype.toString = function() {
        return this.T
    };
    var t = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new u("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        x = function() {
            q();
            var a = k.Symbol.iterator;
            a || (a = k.Symbol.iterator = k.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && g(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return w(p(this))
                }
            });
            x = function() {}
        },
        w = function(a) {
            x();
            a = {
                next: a
            };
            a[k.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        y = function(a,
            b) {
            x();
            a instanceof String && (a += "");
            var c = 0,
                e = {
                    next: function() {
                        if (c < a.length) {
                            var f = c++;
                            return {
                                value: b(f, a[f]),
                                done: !1
                            }
                        }
                        e.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        };
                        return e.next()
                    }
                };
            e[Symbol.iterator] = function() {
                return e
            };
            return e
        };
    l("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return y(this, function(b) {
                return b
            })
        }
    }, "es6", "es3");
    l("Array.prototype.values", function(a) {
        return a ? a : function() {
            return y(this, function(b, c) {
                return c
            })
        }
    }, "es8", "es3");
    var z = this || self,
        A = function(a, b, c) {
            a = a.split(".");
            c = c || z;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} : c[e] = b
        },
        B = Date.now || function() {
            return +new Date
        };
    var C = function() {
        this.O = ""
    };
    C.prototype.toString = function() {
        return "SafeScript{" + this.O + "}"
    };
    C.prototype.c = function(a) {
        this.O = a;
        return this
    };
    (new C).c("");
    var D = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    var E = function() {
        this.R = ""
    };
    E.prototype.toString = function() {
        return "SafeStyle{" + this.R + "}"
    };
    E.prototype.c = function(a) {
        this.R = a;
        return this
    };
    (new E).c("");
    var F = function() {
        this.P = ""
    };
    F.prototype.toString = function() {
        return "SafeStyleSheet{" + this.P + "}"
    };
    F.prototype.c = function(a) {
        this.P = a;
        return this
    };
    (new F).c("");
    var G = function() {
        this.N = ""
    };
    G.prototype.toString = function() {
        return "SafeHtml{" + this.N + "}"
    };
    G.prototype.c = function(a) {
        this.N = a;
        return this
    };
    (new G).c("<!DOCTYPE html>", 0);
    (new G).c("", 0);
    (new G).c("<br>", 0);
    var I = function(a) {
        this.F = a || {
            cookie: ""
        }
    };
    d = I.prototype;
    d.isEnabled = function() {
        return navigator.cookieEnabled
    };
    d.ga = function(a) {
        return !/[;=\s]/.test(a)
    };
    d.ha = function(a) {
        return !/[;\r\n]/.test(a)
    };
    d.set = function(a, b, c, e, f, h) {
        if (!this.ga(a)) throw Error('Invalid cookie name "' + a + '"');
        if (!this.ha(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 !== c || (c = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        h = h ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(B() + 1E3 * c)).toUTCString();
        this.na(a + "=" + b + f + e + c + h)
    };
    d.aa = function() {
        return this.I().keys
    };
    d.da = function() {
        return this.I().values
    };
    d.na = function(a) {
        this.F.cookie = a
    };
    d.ba = function() {
        return (this.F.cookie || "").split(";")
    };
    d.I = function() {
        for (var a = this.ba(), b = [], c = [], e, f, h = 0; h < a.length; h++) f = D(a[h]), e = f.indexOf("="), -1 == e ? (b.push(""), c.push(f)) : (b.push(f.substring(0, e)), c.push(f.substring(e + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var J = {},
        K = function(a, b, c) {
            this.b = a;
            this.K = b;
            this.D = c;
            this.v = Math.floor((new Date).getTime() / 1E3);
            this.o = 8035200;
            this.j = void 0
        };
    K.prototype.qa = function() {
        return this.b + "$" + this.K + ":" + this.D
    };
    K.prototype.ra = function() {
        var a = this.b + "$" + this.K + ":" + this.v + ":" + this.o;
        "string" == typeof this.j && (a = a.concat(":", this.j));
        return a
    };
    K.prototype.pa = function(a, b, c) {
        this.v = a;
        this.o = b;
        this.j = c
    };
    K.prototype.fa = function() {
        return (new Date).getTime() > (new Date(1E3 * (this.v + this.o))).getTime()
    };
    var M = function(a) {
            var b = {},
                c = new I(document);
            if (!c.isEnabled()) return b;
            var e = c.aa();
            c = c.da();
            if (null == e || null == c) return b;
            for (var f = 0; f < e.length; f++)
                if ("__utmx" == e[f])
                    for (var h = L(c[f], a), n = 0; n < h.length; n++) {
                        var m = /([^$]+)\$([^:]+):(.*)/.exec(h[n]);
                        null !== m && 4 == m.length && (m = new K(m[1], m[2], m[3]), b[m.b] = m)
                    }
            f = {};
            for (h = 0; h < e.length; h++)
                if ("__utmxx" == e[h])
                    for (n = L(c[h], a), m = 0; m < n.length; m++) {
                        var r = /([^$]+)\$([^:]+):([^:]+):([^:]+):?(.*)/.exec(n[m]);
                        if (null !== r && 5 <= r.length) {
                            var H = r[1],
                                v = b[H];
                            "undefined" !=
                            typeof v && (v.pa(parseInt(r[3], 10), parseInt(r[4], 10), 6 == r.length ? r[5] : void 0), v.fa() || (f[H] = v))
                        }
                    }
            return f
        },
        L = function(a, b) {
            a = a.split(".");
            return "string" == typeof b && 0 < a.length && a[0] != b ? [] : a.slice(1)
        };
    var N = function(a, b, c, e, f) {
        this.b = f || N.DEFAULT_ID;
        this.a = a;
        this.h = b;
        this.i = c;
        this.g = e;
        this.M = !1
    };
    N.experiments_ = {
        "o4fsvC-oSj2s51o6aFEamA": {
            "api_version": "V1",
            "method": "experiments.get",
            "data": {
                "kind": "cx/api#experiment",
                "id": "o4fsvC-oSj2s51o6aFEamA",
                "self_link": "/cx/api/V1/experiments/o4fsvC-oSj2s51o6aFEamA",
                "participation": 1,
                "items": [{
                    "kind": "cx/api#combination",
                    "id": "0",
                    "weight": 0.5,
                    "disabled": false
                }, {
                    "kind": "cx/api#combination",
                    "id": "1",
                    "weight": 0.5,
                    "disabled": false
                }]
            }
        }
    };
    N.DEFAULT_ID = "o4fsvC-oSj2s51o6aFEamA";
    d = N.prototype;
    d.u = function(a) {
        if (!this.m() && !this.J()) {
            var b = new I(document);
            if (O(b.isEnabled(), "Unable to write cookies")) {
                var c = this.w(a),
                    e = this.H(),
                    f = M(e);
                f[this.b] = new K(this.b, "0", c);
                c = e;
                for (var h in f) {
                    var n = f[h];
                    c = c.concat(".", n.qa());
                    e = e.concat(".", n.ra())
                }
                b.set("__utmx", c, this.g, this.h, this.l());
                b.set("__utmxx", e, this.g, this.h, this.l()); - 2 != a[0] && this.S(a)
            }
        }
    };
    d.S = function(a) {
        window.gaData || (window.gaData = {});
        window.gaData.expId = this.b;
        window.gaData.expVar = this.w(a)
    };
    d.l = function() {
        if ("string" == typeof this.a && "" != this.a && "none" != this.a && "auto" != this.a) return this.a;
        if ("none" == this.a) return null;
        var a = "" + document.domain;
        return 0 == a.indexOf("www.") ? a.substring(4) : a
    };
    d.H = function() {
        if (!this.i) return "1";
        var a = this.l();
        if (a) {
            var b = 1,
                c;
            if (a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var e = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + e + (e << 14);
                    e = b & 266338304;
                    b = 0 != e ? b ^ e >> 21 : b
                }
            a = String(b)
        } else a = "1";
        return a
    };
    d.w = function(a) {
        for (var b = 0; b < a.length; b++)
            if (-2 == a[b]) return "";
        return a.join("-")
    };
    d.s = function(a) {
        if (0 == a.length) return -2;
        a = a.split("-");
        for (var b = [], c = 0; c < a.length; c++) b[c] = parseInt(a[c], 10);
        return b
    };
    var O = function(a, b) {
        !a && b && console && console.error && console.error(b);
        return a
    };
    d = N.prototype;
    d.m = function() {
        var a = window._gaUserPrefs;
        return a && a.ioo && a.ioo() || document.getElementById("__gaOptOutExtension")
    };
    d.L = function() {
        if (!this.M) {
            var a = N.experiments_[this.b];
            this.M = !0;
            if (!O("object" == typeof a, "Could not load experiment") || a.error) return !1;
            this.f = a.data
        }
        return O("object" === typeof this.f, "Could not load experiment")
    };
    d.G = function() {
        if (this.m()) return -2;
        var a = this.J();
        if (a) return a;
        a = M(this.H())[this.b];
        if (!a) return -1;
        a = this.s(a.D); - 2 != a && this.S(a);
        return a
    };
    d.X = function() {
        if (this.m() || !this.L()) return 0;
        var a = this.G();
        if (-2 == a || this.ea(a)) return 0;
        if (-1 !== a) return a;
        if (!this.ca()) return this.u([-2]), 0;
        a = this.ia();
        this.u(a);
        return a
    };
    d.ca = function(a) {
        return ("number" == typeof a ? a : Math.random()) < this.f.participation
    };
    d.ia = function(a) {
        O("undefined" === typeof _gaq, "Variations should be chosen before hit is sent to GA");
        a = "number" == typeof a ? a : Math.random();
        for (var b = 0; b < this.f.items.length; b++) {
            var c = this.f.items[b];
            if (a < c.weight) return this.s(c.id);
            a -= c.weight
        }
        O(!1, "The combinations weights did not add up to 1");
        return [0]
    };
    d.$ = function(a) {
        return this.L() && O(0 <= a && a < this.f.items.length) ? this.f.items[a] : null
    };
    d.J = function() {
        var a = /#utmxid=[-_a-zA-Z0-9]{22};utmxpreview=(\d{1,2});/.exec(window.location.hash);
        return a ? (a = this.$(parseInt(a[1], 10)), this.s(a.id)) : null
    };
    d.ea = function(a) {
        if ("number" === typeof a) return !1;
        a = this.w(a);
        for (var b = 0; b < this.f.items.length; b++) {
            var c = this.f.items[b];
            if (c.id == a) return c.disabled
        }
        O(!1, "Unable to locate combination with id " + a);
        return !0
    };
    J = J || {};
    J.W = 0;
    A("cxApi.ORIGINAL_VARIATION", J.W, void 0);
    J.V = -1;
    A("cxApi.NO_CHOSEN_VARIATION", J.V, void 0);
    J.U = -2;
    A("cxApi.NOT_PARTICIPATING", J.U, void 0);
    J.B = "auto";
    A("cxApi.DEFAULT_DOMAIN", J.B, void 0);
    J.C = 48211200;
    A("cxApi.DEFAULT_EXPIRATION_SECONDS", J.C, void 0);
    J.A = "/";
    A("cxApi.DEFAULT_COOKIE_PATH", J.A, void 0);
    J.a = J.B;
    J.h = J.A;
    J.i = !0;
    J.g = J.C;
    J.ka = function(a, b) {
        O("string" == typeof b || "undefined" == typeof b, "Invalid experiment id: " + b) && (new N(J.a, J.h, J.i, J.g, b)).u([a])
    };
    A("cxApi.setChosenVariation", J.ka, void 0);
    J.oa = function(a) {
        O("string" == typeof a, "Invalid domain name: " + a) && (J.a = a)
    };
    A("cxApi.setDomainName", J.oa, void 0);
    J.ma = function(a) {
        O("string" == typeof a, "Invalid cookie path: " + a) && (J.h = a)
    };
    A("cxApi.setCookiePath", J.ma, void 0);
    J.ja = function(a) {
        O("boolean" == typeof a, "Invalid value for allowHash: " + typeof a) && (J.i = a)
    };
    A("cxApi.setAllowHash", J.ja, void 0);
    J.la = function(a) {
        O("number" == typeof a, "Invalid cookieExpirationSeconds: " + a) && (J.g = a)
    };
    A("cxApi.setCookieExpirationSeconds", J.la, void 0);
    J.Y = function(a) {
        O("string" == typeof a || "undefined" == typeof a, "Invalid experiment id: " + a);
        a = (new N(J.a, J.h, J.i, J.g, a)).X();
        return "number" === typeof a ? a : a[0]
    };
    A("cxApi.chooseVariation", J.Y, void 0);
    J.Z = function(a) {
        O("string" == typeof a || "undefined" == typeof a, "Invalid experiment id: " + a);
        a = (new N(J.a, J.h, J.i, J.g, a)).G();
        return "number" === typeof a ? a : a[0]
    };
    A("cxApi.getChosenVariation", J.Z, void 0);
}).call(this);