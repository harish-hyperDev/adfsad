// @observablehq/runtime v4.20.0 Copyright 2022 Observable, Inc.
function e(e, t, n) {
    n = n || {};
    var r = e.ownerDocument,
        i = r.defaultView.CustomEvent;
    "function" == typeof i ? (i = new i(t, { detail: n })) : ((i = r.createEvent("Event")).initEvent(t, !1, !1), (i.detail = n)), e.dispatchEvent(i);
}
function t(e) {
    return (
        Array.isArray(e) ||
        e instanceof Int8Array ||
        e instanceof Int16Array ||
        e instanceof Int32Array ||
        e instanceof Uint8Array ||
        e instanceof Uint8ClampedArray ||
        e instanceof Uint16Array ||
        e instanceof Uint32Array ||
        e instanceof Float32Array ||
        e instanceof Float64Array
    );
}
function n(e) {
    return e === (0 | e) + "";
}
function r(e) {
    const t = document.createElement("span");
    return (t.className = "observablehq--cellname"), (t.textContent = `${e} = `), t;
}
const i = Symbol.prototype.toString;
function o(e) {
    return i.call(e);
}
const {
        getOwnPropertySymbols: a,
        prototype: { hasOwnProperty: s },
    } = Object,
    { toStringTag: c } = Symbol,
    l = {},
    u = a;
function d(e, t) {
    return s.call(e, t);
}
function f(e) {
    return e[c] || (e.constructor && e.constructor.name) || "Object";
}
function p(e, t) {
    try {
        const n = e[t];
        return n && n.constructor, n;
    } catch (e) {
        return l;
    }
}
const h = [
    { symbol: "@@__IMMUTABLE_INDEXED__@@", name: "Indexed", modifier: !0 },
    { symbol: "@@__IMMUTABLE_KEYED__@@", name: "Keyed", modifier: !0 },
    { symbol: "@@__IMMUTABLE_LIST__@@", name: "List", arrayish: !0 },
    { symbol: "@@__IMMUTABLE_MAP__@@", name: "Map" },
    { symbol: "@@__IMMUTABLE_ORDERED__@@", name: "Ordered", modifier: !0, prefix: !0 },
    { symbol: "@@__IMMUTABLE_RECORD__@@", name: "Record" },
    { symbol: "@@__IMMUTABLE_SET__@@", name: "Set", arrayish: !0, setish: !0 },
    { symbol: "@@__IMMUTABLE_STACK__@@", name: "Stack", arrayish: !0 },
];
function m(e) {
    try {
        let t = h.filter(({ symbol: t }) => !0 === e[t]);
        if (!t.length) return;
        const n = t.find((e) => !e.modifier),
            r = "Map" === n.name && t.find((e) => e.modifier && e.prefix),
            i = t.some((e) => e.arrayish),
            o = t.some((e) => e.setish);
        return { name: `${r ? r.name : ""}${n.name}`, symbols: t, arrayish: i && !o, setish: o };
    } catch (e) {
        return null;
    }
}
const { getPrototypeOf: v, getOwnPropertyDescriptors: b } = Object,
    _ = v({});
function w(n, i, o, a) {
    let s,
        c,
        l,
        u,
        d = t(n);
    n instanceof Map
        ? n instanceof n.constructor
            ? ((s = `Map(${n.size})`), (c = y))
            : ((s = "Map()"), (c = N))
        : n instanceof Set
        ? n instanceof n.constructor
            ? ((s = `Set(${n.size})`), (c = g))
            : ((s = "Set()"), (c = N))
        : d
        ? ((s = `${n.constructor.name}(${n.length})`), (c = E))
        : (u = m(n))
        ? ((s = `Immutable.${u.name}${"Record" === u.name ? "" : `(${n.size})`}`), (d = u.arrayish), (c = u.arrayish ? C : u.setish ? x : $))
        : a
        ? ((s = f(n)), (c = j))
        : ((s = f(n)), (c = N));
    const p = document.createElement("span");
    (p.className = "observablehq--expanded"), o && p.appendChild(r(o));
    const h = p.appendChild(document.createElement("a"));
    (h.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>"),
        h.appendChild(document.createTextNode(`${s}${d ? " [" : " {"}`)),
        h.addEventListener("mouseup", function (e) {
            e.stopPropagation(), ae(p, O(n, null, o, a));
        }),
        (c = c(n));
    for (let e = 0; !(l = c.next()).done && e < 20; ++e) p.appendChild(l.value);
    if (!l.done) {
        const t = p.appendChild(document.createElement("a"));
        (t.className = "observablehq--field"),
            (t.style.display = "block"),
            t.appendChild(document.createTextNode("  … more")),
            t.addEventListener("mouseup", function (t) {
                t.stopPropagation(), p.insertBefore(l.value, p.lastChild.previousSibling);
                for (let e = 0; !(l = c.next()).done && e < 19; ++e) p.insertBefore(l.value, p.lastChild.previousSibling);
                l.done && p.removeChild(p.lastChild.previousSibling), e(p, "load");
            });
    }
    return p.appendChild(document.createTextNode(d ? "]" : "}")), p;
}
function* y(e) {
    for (const [t, n] of e) yield q(t, n);
    yield* N(e);
}
function* g(e) {
    for (const t of e) yield T(t);
    yield* N(e);
}
function* x(e) {
    for (const t of e) yield T(t);
}
function* E(e) {
    for (let t = 0, n = e.length; t < n; ++t) t in e && (yield S(t, p(e, t), "observablehq--index"));
    for (const t in e) !n(t) && d(e, t) && (yield S(t, p(e, t), "observablehq--key"));
    for (const t of u(e)) yield S(o(t), p(e, t), "observablehq--symbol");
}
function* C(e) {
    let t = 0;
    for (const n = e.size; t < n; ++t) yield S(t, e.get(t), !0);
}
function* j(e) {
    for (const t in b(e)) yield S(t, p(e, t), "observablehq--key");
    for (const t of u(e)) yield S(o(t), p(e, t), "observablehq--symbol");
    const t = v(e);
    t && t !== _ && (yield P(t));
}
function* N(e) {
    for (const t in e) d(e, t) && (yield S(t, p(e, t), "observablehq--key"));
    for (const t of u(e)) yield S(o(t), p(e, t), "observablehq--symbol");
    const t = v(e);
    t && t !== _ && (yield P(t));
}
function* $(e) {
    for (const [t, n] of e) yield S(t, n, "observablehq--key");
}
function P(e) {
    const t = document.createElement("div"),
        n = t.appendChild(document.createElement("span"));
    return (t.className = "observablehq--field"), (n.className = "observablehq--prototype-key"), (n.textContent = "  <prototype>"), t.appendChild(document.createTextNode(": ")), t.appendChild(oe(e, void 0, void 0, void 0, !0)), t;
}
function S(e, t, n) {
    const r = document.createElement("div"),
        i = r.appendChild(document.createElement("span"));
    return (r.className = "observablehq--field"), (i.className = n), (i.textContent = `  ${e}`), r.appendChild(document.createTextNode(": ")), r.appendChild(oe(t)), r;
}
function q(e, t) {
    const n = document.createElement("div");
    return (n.className = "observablehq--field"), n.appendChild(document.createTextNode("  ")), n.appendChild(oe(e)), n.appendChild(document.createTextNode(" => ")), n.appendChild(oe(t)), n;
}
function T(e) {
    const t = document.createElement("div");
    return (t.className = "observablehq--field"), t.appendChild(document.createTextNode("  ")), t.appendChild(oe(e)), t;
}
function A(e) {
    const t = window.getSelection();
    return "Range" === t.type && (t.containsNode(e, !0) || t.anchorNode.isSelfOrDescendant(e) || t.focusNode.isSelfOrDescendant(e));
}
function O(e, n, i, o) {
    let a,
        s,
        c,
        l,
        u = t(e);
    if (
        (e instanceof Map
            ? e instanceof e.constructor
                ? ((a = `Map(${e.size})`), (s = L))
                : ((a = "Map()"), (s = D))
            : e instanceof Set
            ? e instanceof e.constructor
                ? ((a = `Set(${e.size})`), (s = M))
                : ((a = "Set()"), (s = D))
            : u
            ? ((a = `${e.constructor.name}(${e.length})`), (s = R))
            : (l = m(e))
            ? ((a = `Immutable.${l.name}${"Record" === l.name ? "" : `(${e.size})`}`), (u = l.arrayish), (s = l.arrayish ? U : l.setish ? k : F))
            : ((a = f(e)), (s = D)),
        n)
    ) {
        const t = document.createElement("span");
        return (
            (t.className = "observablehq--shallow"),
            i && t.appendChild(r(i)),
            t.appendChild(document.createTextNode(a)),
            t.addEventListener("mouseup", function (n) {
                A(t) || (n.stopPropagation(), ae(t, O(e)));
            }),
            t
        );
    }
    const d = document.createElement("span");
    (d.className = "observablehq--collapsed"), i && d.appendChild(r(i));
    const p = d.appendChild(document.createElement("a"));
    (p.innerHTML = "<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>"),
        p.appendChild(document.createTextNode(`${a}${u ? " [" : " {"}`)),
        d.addEventListener(
            "mouseup",
            function (t) {
                A(d) || (t.stopPropagation(), ae(d, w(e, 0, i, o)));
            },
            !0
        ),
        (s = s(e));
    for (let e = 0; !(c = s.next()).done && e < 20; ++e) e > 0 && d.appendChild(document.createTextNode(", ")), d.appendChild(c.value);
    return c.done || d.appendChild(document.createTextNode(", …")), d.appendChild(document.createTextNode(u ? "]" : "}")), d;
}
function* L(e) {
    for (const [t, n] of e) yield B(t, n);
    yield* D(e);
}
function* M(e) {
    for (const t of e) yield oe(t, !0);
    yield* D(e);
}
function* k(e) {
    for (const t of e) yield oe(t, !0);
}
function* U(e) {
    let t = -1,
        n = 0;
    for (const r = e.size; n < r; ++n) n > t + 1 && (yield I(n - t - 1)), yield oe(e.get(n), !0), (t = n);
    n > t + 1 && (yield I(n - t - 1));
}
function* R(e) {
    let t = -1,
        r = 0;
    for (const n = e.length; r < n; ++r) r in e && (r > t + 1 && (yield I(r - t - 1)), yield oe(p(e, r), !0), (t = r));
    r > t + 1 && (yield I(r - t - 1));
    for (const t in e) !n(t) && d(e, t) && (yield z(t, p(e, t), "observablehq--key"));
    for (const t of u(e)) yield z(o(t), p(e, t), "observablehq--symbol");
}
function* D(e) {
    for (const t in e) d(e, t) && (yield z(t, p(e, t), "observablehq--key"));
    for (const t of u(e)) yield z(o(t), p(e, t), "observablehq--symbol");
}
function* F(e) {
    for (const [t, n] of e) yield z(t, n, "observablehq--key");
}
function I(e) {
    const t = document.createElement("span");
    return (t.className = "observablehq--empty"), (t.textContent = 1 === e ? "empty" : `empty × ${e}`), t;
}
function z(e, t, n) {
    const r = document.createDocumentFragment(),
        i = r.appendChild(document.createElement("span"));
    return (i.className = n), (i.textContent = e), r.appendChild(document.createTextNode(": ")), r.appendChild(oe(t, !0)), r;
}
function B(e, t) {
    const n = document.createDocumentFragment();
    return n.appendChild(oe(e, !0)), n.appendChild(document.createTextNode(" => ")), n.appendChild(oe(t, !0)), n;
}
function H(e, t) {
    if ((e instanceof Date || (e = new Date(+e)), isNaN(e))) return "function" == typeof t ? t(e) : t;
    const n = e.getUTCHours(),
        r = e.getUTCMinutes(),
        i = e.getUTCSeconds(),
        o = e.getUTCMilliseconds();
    return `${((a = e.getUTCFullYear()), a < 0 ? `-${W(-a, 6)}` : a > 9999 ? `+${W(a, 6)}` : W(a, 4))}-${W(e.getUTCMonth() + 1, 2)}-${W(e.getUTCDate(), 2)}${
        n || r || i || o ? `T${W(n, 2)}:${W(r, 2)}${i || o ? `:${W(i, 2)}${o ? `.${W(o, 3)}` : ""}` : ""}Z` : ""
    }`;
    var a;
}
function W(e, t) {
    return `${e}`.padStart(t, "0");
}
var Z = Error.prototype.toString;
var V = RegExp.prototype.toString;
function J(e) {
    return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g, Y);
}
function Y(e) {
    var t = e.charCodeAt(0);
    switch (t) {
        case 8:
            return "\\b";
        case 9:
            return "\\t";
        case 11:
            return "\\v";
        case 12:
            return "\\f";
        case 13:
            return "\\r";
    }
    return t < 16 ? "\\x0" + t.toString(16) : t < 32 ? "\\x" + t.toString(16) : "\\" + e;
}
function G(e, t) {
    for (var n = 0; t.exec(e); ) ++n;
    return n;
}
var K = Function.prototype.toString,
    Q = { prefix: "async ƒ" },
    X = { prefix: "async ƒ*" },
    ee = { prefix: "class" },
    te = { prefix: "ƒ" },
    ne = { prefix: "ƒ*" };
function re(e, t, n) {
    var i = document.createElement("span");
    (i.className = "observablehq--function"), n && i.appendChild(r(n));
    var o = i.appendChild(document.createElement("span"));
    return (o.className = "observablehq--keyword"), (o.textContent = e.prefix), i.appendChild(document.createTextNode(t)), i;
}
const {
    prototype: { toString: ie },
} = Object;
function oe(e, t, n, i, a) {
    let s = typeof e;
    switch (s) {
        case "boolean":
        case "undefined":
            e += "";
            break;
        case "number":
            e = 0 === e && 1 / e < 0 ? "-0" : e + "";
            break;
        case "bigint":
            e += "n";
            break;
        case "symbol":
            e = o(e);
            break;
        case "function":
            return (function (e, t) {
                var n,
                    r,
                    i = K.call(e);
                switch (e.constructor && e.constructor.name) {
                    case "AsyncFunction":
                        n = Q;
                        break;
                    case "AsyncGeneratorFunction":
                        n = X;
                        break;
                    case "GeneratorFunction":
                        n = ne;
                        break;
                    default:
                        n = /^class\b/.test(i) ? ee : te;
                }
                return n === ee
                    ? re(n, "", t)
                    : (r = /^(?:async\s*)?(\w+)\s*=>/.exec(i))
                    ? re(n, "(" + r[1] + ")", t)
                    : (r = /^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i)) || (r = /^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(i))
                    ? re(n, r[1] ? "(" + r[1].replace(/\s*,\s*/g, ", ") + ")" : "()", t)
                    : re(n, "(…)", t);
            })(e, i);
        case "string":
            return (function (e, t, n, i) {
                if (!1 === t) {
                    if (G(e, /["\n]/g) <= G(e, /`|\${/g)) {
                        const t = document.createElement("span");
                        i && t.appendChild(r(i));
                        const n = t.appendChild(document.createElement("span"));
                        return (n.className = "observablehq--string"), (n.textContent = JSON.stringify(e)), t;
                    }
                    const o = e.split("\n");
                    if (o.length > 20 && !n) {
                        const n = document.createElement("div");
                        i && n.appendChild(r(i));
                        const a = n.appendChild(document.createElement("span"));
                        (a.className = "observablehq--string"), (a.textContent = "`" + J(o.slice(0, 20).join("\n")));
                        const s = n.appendChild(document.createElement("span")),
                            c = o.length - 20;
                        return (
                            (s.textContent = `Show ${c} truncated line${c > 1 ? "s" : ""}`),
                            (s.className = "observablehq--string-expand"),
                            s.addEventListener("mouseup", function (r) {
                                r.stopPropagation(), ae(n, oe(e, t, !0, i));
                            }),
                            n
                        );
                    }
                    const a = document.createElement("span");
                    i && a.appendChild(r(i));
                    const s = a.appendChild(document.createElement("span"));
                    return (s.className = "observablehq--string" + (n ? " observablehq--expanded" : "")), (s.textContent = "`" + J(e) + "`"), a;
                }
                const o = document.createElement("span");
                i && o.appendChild(r(i));
                const a = o.appendChild(document.createElement("span"));
                return (a.className = "observablehq--string"), (a.textContent = JSON.stringify(e.length > 100 ? `${e.slice(0, 50)}…${e.slice(-49)}` : e)), o;
            })(e, t, n, i);
        default:
            if (null === e) {
                (s = null), (e = "null");
                break;
            }
            if (e instanceof Date) {
                (s = "date"), (e = H(e, "Invalid Date"));
                break;
            }
            if (e === l) {
                (s = "forbidden"), (e = "[forbidden]");
                break;
            }
            switch (ie.call(e)) {
                case "[object RegExp]":
                    (s = "regexp"),
                        (e = (function (e) {
                            return V.call(e);
                        })(e));
                    break;
                case "[object Error]":
                case "[object DOMException]":
                    (s = "error"),
                        (e = (function (e) {
                            return e.stack || Z.call(e);
                        })(e));
                    break;
                default:
                    return (n ? w : O)(e, t, i, a);
            }
    }
    const c = document.createElement("span");
    i && c.appendChild(r(i));
    const u = c.appendChild(document.createElement("span"));
    return (u.className = `observablehq--${s}`), (u.textContent = e), c;
}
function ae(t, n) {
    t.classList.contains("observablehq--inspect") && n.classList.add("observablehq--inspect"), t.parentNode.replaceChild(n, t), e(n, "load");
}
const se = /\s+\(\d+:\d+\)$/m;
class ce {
    constructor(e) {
        if (!e) throw new Error("invalid node");
        (this._node = e), e.classList.add("observablehq");
    }
    pending() {
        const { _node: e } = this;
        e.classList.remove("observablehq--error"), e.classList.add("observablehq--running");
    }
    fulfilled(t, n) {
        const { _node: r } = this;
        if (
            ((!(function (e) {
                return (e instanceof Element || e instanceof Text) && e instanceof e.constructor;
            })(t) ||
                (t.parentNode && t.parentNode !== r)) &&
                (t = oe(t, !1, r.firstChild && r.firstChild.classList && r.firstChild.classList.contains("observablehq--expanded"), n)).classList.add("observablehq--inspect"),
            r.classList.remove("observablehq--running", "observablehq--error"),
            r.firstChild !== t)
        )
            if (r.firstChild) {
                for (; r.lastChild !== r.firstChild; ) r.removeChild(r.lastChild);
                r.replaceChild(t, r.firstChild);
            } else r.appendChild(t);
        e(r, "update");
    }
    rejected(t, n) {
        const { _node: i } = this;
        for (i.classList.remove("observablehq--running"), i.classList.add("observablehq--error"); i.lastChild; ) i.removeChild(i.lastChild);
        var o = document.createElement("div");
        (o.className = "observablehq--inspect"), n && o.appendChild(r(n)), o.appendChild(document.createTextNode((t + "").replace(se, ""))), i.appendChild(o), e(i, "error", { error: t });
    }
}
ce.into = function (e) {
    if ("string" == typeof e && null == (e = document.querySelector(e))) throw new Error("container not found");
    return function () {
        return new ce(e.appendChild(document.createElement("div")));
    };
};
var le = {},
    ue = {};
function de(e) {
    return new Function(
        "d",
        "return {" +
            e
                .map(function (e, t) {
                    return JSON.stringify(e) + ": d[" + t + '] || ""';
                })
                .join(",") +
            "}"
    );
}
function fe(e) {
    var t = Object.create(null),
        n = [];
    return (
        e.forEach(function (e) {
            for (var r in e) r in t || n.push((t[r] = r));
        }),
        n
    );
}
function pe(e, t) {
    var n = e + "",
        r = n.length;
    return r < t ? new Array(t - r + 1).join(0) + n : n;
}
function he(e) {
    var t,
        n = e.getUTCHours(),
        r = e.getUTCMinutes(),
        i = e.getUTCSeconds(),
        o = e.getUTCMilliseconds();
    return isNaN(e)
        ? "Invalid Date"
        : ((t = e.getUTCFullYear()) < 0 ? "-" + pe(-t, 6) : t > 9999 ? "+" + pe(t, 6) : pe(t, 4)) +
              "-" +
              pe(e.getUTCMonth() + 1, 2) +
              "-" +
              pe(e.getUTCDate(), 2) +
              (o ? "T" + pe(n, 2) + ":" + pe(r, 2) + ":" + pe(i, 2) + "." + pe(o, 3) + "Z" : i ? "T" + pe(n, 2) + ":" + pe(r, 2) + ":" + pe(i, 2) + "Z" : r || n ? "T" + pe(n, 2) + ":" + pe(r, 2) + "Z" : "");
}
function me(e) {
    var t = new RegExp('["' + e + "\n\r]"),
        n = e.charCodeAt(0);
    function r(e, t) {
        var r,
            i = [],
            o = e.length,
            a = 0,
            s = 0,
            c = o <= 0,
            l = !1;
        function u() {
            if (c) return ue;
            if (l) return (l = !1), le;
            var t,
                r,
                i = a;
            if (34 === e.charCodeAt(i)) {
                for (; (a++ < o && 34 !== e.charCodeAt(a)) || 34 === e.charCodeAt(++a); );
                return (t = a) >= o ? (c = !0) : 10 === (r = e.charCodeAt(a++)) ? (l = !0) : 13 === r && ((l = !0), 10 === e.charCodeAt(a) && ++a), e.slice(i + 1, t - 1).replace(/""/g, '"');
            }
            for (; a < o; ) {
                if (10 === (r = e.charCodeAt((t = a++)))) l = !0;
                else if (13 === r) (l = !0), 10 === e.charCodeAt(a) && ++a;
                else if (r !== n) continue;
                return e.slice(i, t);
            }
            return (c = !0), e.slice(i, o);
        }
        for (10 === e.charCodeAt(o - 1) && --o, 13 === e.charCodeAt(o - 1) && --o; (r = u()) !== ue; ) {
            for (var d = []; r !== le && r !== ue; ) d.push(r), (r = u());
            (t && null == (d = t(d, s++))) || i.push(d);
        }
        return i;
    }
    function i(t, n) {
        return t.map(function (t) {
            return n
                .map(function (e) {
                    return a(t[e]);
                })
                .join(e);
        });
    }
    function o(t) {
        return t.map(a).join(e);
    }
    function a(e) {
        return null == e ? "" : e instanceof Date ? he(e) : t.test((e += "")) ? '"' + e.replace(/"/g, '""') + '"' : e;
    }
    return {
        parse: function (e, t) {
            var n,
                i,
                o = r(e, function (e, r) {
                    if (n) return n(e, r - 1);
                    (i = e),
                        (n = t
                            ? (function (e, t) {
                                  var n = de(e);
                                  return function (r, i) {
                                      return t(n(r), i, e);
                                  };
                              })(e, t)
                            : de(e));
                });
            return (o.columns = i || []), o;
        },
        parseRows: r,
        format: function (t, n) {
            return null == n && (n = fe(t)), [n.map(a).join(e)].concat(i(t, n)).join("\n");
        },
        formatBody: function (e, t) {
            return null == t && (t = fe(e)), i(e, t).join("\n");
        },
        formatRows: function (e) {
            return e.map(o).join("\n");
        },
        formatRow: o,
        formatValue: a,
    };
}
var ve = me(","),
    be = ve.parse,
    _e = ve.parseRows,
    we = me("\t"),
    ye = we.parse,
    ge = we.parseRows;
function xe(e) {
    for (var t in e) {
        var n,
            r,
            i = e[t].trim();
        if (i)
            if ("true" === i) i = !0;
            else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN((n = +i))) {
                if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
                Ee && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), (i = new Date(i));
            } else i = n;
        else i = null;
        e[t] = i;
    }
    return e;
}
const Ee = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours(),
    Ce = new Map(),
    je = [],
    Ne = je.map,
    $e = je.some,
    Pe = je.hasOwnProperty,
    Se = "https://cdn.jsdelivr.net/npm/",
    qe = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/,
    Te = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/,
    Ae = /\.[^/]*$/,
    Oe = ["unpkg", "jsdelivr", "browser", "main"];
class RequireError extends Error {
    constructor(e) {
        super(e);
    }
}
function Le(e) {
    const t = qe.exec(e);
    return t && { name: t[1], version: t[2], path: t[3] };
}
function Me(e) {
    const t = `${Se}${e.name}${e.version ? `@${e.version}` : ""}/package.json`;
    let n = Ce.get(t);
    return (
        n ||
            Ce.set(
                t,
                (n = fetch(t).then((e) => {
                    if (!e.ok) throw new RequireError("unable to load package.json");
                    return e.redirected && !Ce.has(e.url) && Ce.set(e.url, n), e.json();
                }))
            ),
        n
    );
}
RequireError.prototype.name = RequireError.name;
var ke = Ue(async function (e, t) {
    if ((e.startsWith(Se) && (e = e.substring(Se.length)), /^(\w+:)|\/\//i.test(e))) return e;
    if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
    if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new RequireError("illegal name");
    const n = Le(e);
    if (!n) return `${Se}${e}`;
    if (!n.version && null != t && t.startsWith(Se)) {
        const e = await Me(Le(t.substring(Se.length)));
        n.version = (e.dependencies && e.dependencies[n.name]) || (e.peerDependencies && e.peerDependencies[n.name]);
    }
    if ((n.path && !Ae.test(n.path) && (n.path += ".js"), n.path && n.version && Te.test(n.version))) return `${Se}${n.name}@${n.version}/${n.path}`;
    const r = await Me(n);
    return `${Se}${r.name}@${r.version}/${
        n.path ||
        (function (e) {
            for (const t of Oe) {
                const n = e[t];
                if ("string" == typeof n) return Ae.test(n) ? n : `${n}.js`;
            }
        })(r) ||
        "index.js"
    }`;
});
function Ue(e) {
    const t = new Map(),
        n = i(null);
    function r(e) {
        if ("string" != typeof e) return e;
        let n = t.get(e);
        return (
            n ||
                t.set(
                    e,
                    (n = new Promise((t, n) => {
                        const r = document.createElement("script");
                        (r.onload = () => {
                            try {
                                t(je.pop()(i(e)));
                            } catch (e) {
                                n(new RequireError("invalid module"));
                            }
                            r.remove();
                        }),
                            (r.onerror = () => {
                                n(new RequireError("unable to load module")), r.remove();
                            }),
                            (r.async = !0),
                            (r.src = e),
                            (window.define = Ie),
                            document.head.appendChild(r);
                    }))
                ),
            n
        );
    }
    function i(t) {
        return (n) => Promise.resolve(e(n, t)).then(r);
    }
    function o(e) {
        return arguments.length > 1 ? Promise.all(Ne.call(arguments, n)).then(Re) : n(e);
    }
    return (
        (o.alias = function (t) {
            return Ue((n, r) => (n in t && ((r = null), "string" != typeof (n = t[n])) ? n : e(n, r)));
        }),
        (o.resolve = e),
        o
    );
}
function Re(e) {
    const t = {};
    for (const n of e) for (const e in n) Pe.call(n, e) && (null == n[e] ? Object.defineProperty(t, e, { get: De(n, e) }) : (t[e] = n[e]));
    return t;
}
function De(e, t) {
    return () => e[t];
}
function Fe(e) {
    return "exports" === (e += "") || "module" === e;
}
function Ie(e, t, n) {
    const r = arguments.length;
    r < 2 ? ((n = e), (t = [])) : r < 3 && ((n = t), (t = "string" == typeof e ? [] : e)),
        je.push(
            $e.call(t, Fe)
                ? (e) => {
                      const r = {},
                          i = { exports: r };
                      return Promise.all(Ne.call(t, (t) => ("exports" === (t += "") ? r : "module" === t ? i : e(t)))).then((e) => (n.apply(null, e), i.exports));
                  }
                : (e) => Promise.all(Ne.call(t, e)).then((e) => ("function" == typeof n ? n.apply(null, e) : n))
        );
}
function ze(e, t, n) {
    return { resolve: (r = n) => `https://cdn.jsdelivr.net/npm/${e}@${t}/${r}` };
}
Ie.amd = {};
const Be = ze("d3", "7.4.4", "dist/d3.min.js"),
    He = ze("@observablehq/inputs", "0.10.4", "dist/inputs.min.js"),
    We = ze("@observablehq/plot", "0.4.3", "dist/plot.umd.min.js"),
    Ze = ze("@observablehq/graphviz", "0.2.1", "dist/graphviz.min.js"),
    Ve = ze("@observablehq/highlight.js", "2.0.0", "highlight.min.js"),
    Je = ze("@observablehq/katex", "0.11.1", "dist/katex.min.js"),
    Ye = ze("lodash", "4.17.21", "lodash.min.js"),
    Ge = ze("htl", "0.3.1", "dist/htl.min.js"),
    Ke = ze("jszip", "3.9.1", "dist/jszip.min.js"),
    Qe = ze("marked", "0.3.12", "marked.min.js"),
    Xe = ze("sql.js", "1.6.2", "dist/sql-wasm.js"),
    et = ze("vega", "5.22.1", "build/vega.min.js"),
    tt = ze("vega-lite", "5.2.0", "build/vega-lite.min.js"),
    nt = ze("vega-lite-api", "5.0.0", "build/vega-lite-api.min.js"),
    rt = ze("apache-arrow", "4.0.1", "Arrow.es2015.min.js"),
    it = ze("arquero", "4.8.8", "dist/arquero.min.js"),
    ot = ze("topojson-client", "3.1.0", "dist/topojson-client.min.js"),
    at = ze("exceljs", "4.3.0", "dist/exceljs.min.js"),
    st = ze("mermaid", "9.0.0", "dist/mermaid.min.js"),
    ct = ze("leaflet", "1.8.0", "dist/leaflet.js");
async function lt(e) {
    return (await e(Xe.resolve()))({ locateFile: (e) => Xe.resolve(`dist/${e}`) });
}
class SQLiteDatabaseClient {
    constructor(e) {
        Object.defineProperties(this, { _db: { value: e } });
    }
    static async open(e) {
        const [t, n] = await Promise.all([lt(ke), Promise.resolve(e).then(ut)]);
        return new SQLiteDatabaseClient(new t.Database(n));
    }
    async query(e, t) {
        return await (async function (e, t, n) {
            const [r] = await e.exec(t, n);
            if (!r) return [];
            const { columns: i, values: o } = r,
                a = o.map((e) => Object.fromEntries(e.map((e, t) => [i[t], e])));
            return (a.columns = i), a;
        })(this._db, e, t);
    }
    async queryRow(e, t) {
        return (await this.query(e, t))[0] || null;
    }
    async explain(e, t) {
        return dt("pre", { className: "observablehq--inspect" }, [ft((await this.query(`EXPLAIN QUERY PLAN ${e}`, t)).map((e) => e.detail).join("\n"))]);
    }
    async describe(e) {
        const t = await (void 0 === e ? this.query("SELECT name FROM sqlite_master WHERE type = 'table'") : this.query("SELECT * FROM pragma_table_info(?)", [e]));
        if (!t.length) throw new Error("Not found");
        const { columns: n } = t;
        return dt("table", { value: t }, [
            dt("thead", [
                dt(
                    "tr",
                    n.map((e) => dt("th", [ft(e)]))
                ),
            ]),
            dt(
                "tbody",
                t.map((e) =>
                    dt(
                        "tr",
                        n.map((t) => dt("td", [ft(e[t])]))
                    )
                )
            ),
        ]);
    }
    async sql(e, ...t) {
        return this.query(e.join("?"), t);
    }
}
function ut(e) {
    return "string" == typeof e ? fetch(e).then(ut) : e instanceof Response || e instanceof Blob ? e.arrayBuffer().then(ut) : e instanceof ArrayBuffer ? new Uint8Array(e) : e;
}
function dt(e, t, n) {
    2 === arguments.length && ((n = t), (t = void 0));
    const r = document.createElement(e);
    if (void 0 !== t) for (const e in t) r[e] = t[e];
    if (void 0 !== n) for (const e of n) r.appendChild(e);
    return r;
}
function ft(e) {
    return document.createTextNode(e);
}
Object.defineProperty(SQLiteDatabaseClient.prototype, "dialect", { value: "sqlite" });
class Workbook {
    constructor(e) {
        Object.defineProperties(this, { _: { value: e }, sheetNames: { value: e.worksheets.map((e) => e.name), enumerable: !0 } });
    }
    sheet(e, t) {
        const n = "number" == typeof e ? this.sheetNames[e] : this.sheetNames.includes((e += "")) ? e : null;
        if (null == n) throw new Error(`Sheet not found: ${e}`);
        return (function (e, { range: t, headers: n } = {}) {
            let [[r, i], [o, a]] = (function (e = ":", { columnCount: t, rowCount: n }) {
                if (!(e += "").match(/^[A-Z]*\d*:[A-Z]*\d*$/)) throw new Error("Malformed range specifier");
                const [[r = 0, i = 0], [o = t - 1, a = n - 1]] = e.split(":").map(vt);
                return [
                    [r, i],
                    [o, a],
                ];
            })(t, e);
            const s = n ? e._rows[i++] : null;
            let c = new Set(["#"]);
            for (let e = r; e <= o; e++) {
                const t = s ? pt(s.findCell(e + 1)) : null;
                let n = (t && t + "") || mt(e);
                for (; c.has(n); ) n += "_";
                c.add(n);
            }
            c = new Array(r).concat(Array.from(c));
            const l = new Array(a - i + 1);
            for (let t = i; t <= a; t++) {
                const n = (l[t - i] = Object.create(null, { "#": { value: t + 1 } })),
                    a = e.getRow(t + 1);
                if (a.hasValues)
                    for (let e = r; e <= o; e++) {
                        const t = pt(a.findCell(e + 1));
                        null != t && (n[c[e + 1]] = t);
                    }
            }
            return (l.columns = c.filter(() => !0)), l;
        })(this._.getWorksheet(n), t);
    }
}
function pt(e) {
    if (!e) return;
    const { value: t } = e;
    if (t && "object" == typeof t && !(t instanceof Date)) {
        if (t.formula || t.sharedFormula) return t.result && t.result.error ? NaN : t.result;
        if (t.richText) return ht(t);
        if (t.text) {
            let { text: e } = t;
            return e.richText && (e = ht(e)), t.hyperlink && t.hyperlink !== e ? `${t.hyperlink} ${e}` : e;
        }
        return t;
    }
    return t;
}
function ht(e) {
    return e.richText.map((e) => e.text).join("");
}
function mt(e) {
    let t = "";
    e++;
    do {
        t = String.fromCharCode(64 + (e % 26 || 26)) + t;
    } while ((e = Math.floor((e - 1) / 26)));
    return t;
}
function vt(e) {
    const [, t, n] = e.match(/^([A-Z]*)(\d*)$/);
    let r = 0;
    if (t) for (let e = 0; e < t.length; e++) r += Math.pow(26, t.length - e - 1) * (t.charCodeAt(e) - 64);
    return [r ? r - 1 : void 0, n ? +n - 1 : void 0];
}
async function bt(e) {
    const t = await fetch(await e.url());
    if (!t.ok) throw new Error(`Unable to load file: ${e.name}`);
    return t;
}
async function _t(e, t, { array: n = !1, typed: r = !1 } = {}) {
    const i = await e.text();
    return ("\t" === t ? (n ? ge : ye) : n ? _e : be)(i, r && xe);
}
class wt {
    constructor(e, t) {
        Object.defineProperty(this, "name", { value: e, enumerable: !0 }), void 0 !== t && Object.defineProperty(this, "mimeType", { value: t + "", enumerable: !0 });
    }
    async blob() {
        return (await bt(this)).blob();
    }
    async arrayBuffer() {
        return (await bt(this)).arrayBuffer();
    }
    async text() {
        return (await bt(this)).text();
    }
    async json() {
        return (await bt(this)).json();
    }
    async stream() {
        return (await bt(this)).body;
    }
    async csv(e) {
        return _t(this, ",", e);
    }
    async tsv(e) {
        return _t(this, "\t", e);
    }
    async image(e) {
        const t = await this.url();
        return new Promise((n, r) => {
            const i = new Image();
            new URL(t, document.baseURI).origin !== new URL(location).origin && (i.crossOrigin = "anonymous"), Object.assign(i, e), (i.onload = () => n(i)), (i.onerror = () => r(new Error(`Unable to load file: ${this.name}`))), (i.src = t);
        });
    }
    async arrow() {
        const [e, t] = await Promise.all([ke(rt.resolve()), bt(this)]);
        return e.Table.from(t);
    }
    async sqlite() {
        return SQLiteDatabaseClient.open(bt(this));
    }
    async zip() {
        const [e, t] = await Promise.all([ke(Ke.resolve()), this.arrayBuffer()]);
        return new ZipArchive(await e.loadAsync(t));
    }
    async xml(e = "application/xml") {
        return new DOMParser().parseFromString(await this.text(), e);
    }
    async html() {
        return this.xml("text/html");
    }
    async xlsx() {
        const [e, t] = await Promise.all([ke(at.resolve()), this.arrayBuffer()]);
        return new Workbook(await new e.Workbook().xlsx.load(t));
    }
}
class FileAttachment extends wt {
    constructor(e, t, n) {
        super(t, n), Object.defineProperty(this, "_url", { value: e });
    }
    async url() {
        return (await this._url) + "";
    }
}
function yt(e) {
    throw new Error(`File not found: ${e}`);
}
class ZipArchive {
    constructor(e) {
        Object.defineProperty(this, "_", { value: e }), (this.filenames = Object.keys(e.files).filter((t) => !e.files[t].dir));
    }
    file(e) {
        const t = this._.file((e += ""));
        if (!t || t.dir) throw new Error(`file not found: ${e}`);
        return new ZipArchiveEntry(t);
    }
}
class ZipArchiveEntry extends wt {
    constructor(e) {
        super(e.name), Object.defineProperty(this, "_", { value: e }), Object.defineProperty(this, "_url", { writable: !0 });
    }
    async url() {
        return this._url || (this._url = this.blob().then(URL.createObjectURL));
    }
    async blob() {
        return this._.async("blob");
    }
    async arrayBuffer() {
        return this._.async("arraybuffer");
    }
    async text() {
        return this._.async("text");
    }
    async json() {
        return JSON.parse(await this.text());
    }
}
var gt = {
    math: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
};
var xt = 0;
function Et(e) {
    return new Ct("O-" + (null == e ? "" : e + "-") + ++xt);
}
function Ct(e) {
    (this.id = e), (this.href = new URL(`#${e}`, location) + "");
}
Ct.prototype.toString = function () {
    return "url(" + this.href + ")";
};
var jt = {
    canvas: function (e, t) {
        var n = document.createElement("canvas");
        return (n.width = e), (n.height = t), n;
    },
    context2d: function (e, t, n) {
        null == n && (n = devicePixelRatio);
        var r = document.createElement("canvas");
        (r.width = e * n), (r.height = t * n), (r.style.width = e + "px");
        var i = r.getContext("2d");
        return i.scale(n, n), i;
    },
    download: function (e, t = "untitled", n = "Save") {
        const r = document.createElement("a"),
            i = r.appendChild(document.createElement("button"));
        async function o() {
            await new Promise(requestAnimationFrame), URL.revokeObjectURL(r.href), r.removeAttribute("href"), (i.textContent = n), (i.disabled = !1);
        }
        return (
            (i.textContent = n),
            (r.download = t),
            (r.onclick = async (t) => {
                if (((i.disabled = !0), r.href)) return o();
                i.textContent = "Saving…";
                try {
                    const t = await ("function" == typeof e ? e() : e);
                    (i.textContent = "Download"), (r.href = URL.createObjectURL(t));
                } catch (e) {
                    i.textContent = n;
                }
                if (t.eventPhase) return o();
                i.disabled = !1;
            }),
            r
        );
    },
    element: function (e, t) {
        var n,
            r = (e += ""),
            i = r.indexOf(":");
        i >= 0 && "xmlns" !== (r = e.slice(0, i)) && (e = e.slice(i + 1));
        var o = gt.hasOwnProperty(r) ? document.createElementNS(gt[r], e) : document.createElement(e);
        if (t) for (var a in t) (i = (r = a).indexOf(":")), (n = t[a]), i >= 0 && "xmlns" !== (r = a.slice(0, i)) && (a = a.slice(i + 1)), gt.hasOwnProperty(r) ? o.setAttributeNS(gt[r], a, n) : o.setAttribute(a, n);
        return o;
    },
    input: function (e) {
        var t = document.createElement("input");
        return null != e && (t.type = e), t;
    },
    range: function (e, t, n) {
        1 === arguments.length && ((t = e), (e = null));
        var r = document.createElement("input");
        return (r.min = e = null == e ? 0 : +e), (r.max = t = null == t ? 1 : +t), (r.step = null == n ? "any" : (n = +n)), (r.type = "range"), r;
    },
    select: function (e) {
        var t = document.createElement("select");
        return (
            Array.prototype.forEach.call(e, function (e) {
                var n = document.createElement("option");
                (n.value = n.textContent = e), t.appendChild(n);
            }),
            t
        );
    },
    svg: function (e, t) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        return n.setAttribute("viewBox", [0, 0, e, t]), n.setAttribute("width", e), n.setAttribute("height", t), n;
    },
    text: function (e) {
        return document.createTextNode(e);
    },
    uid: Et,
};
var Nt = {
    buffer: function (e) {
        return new Promise(function (t, n) {
            var r = new FileReader();
            (r.onload = function () {
                t(r.result);
            }),
                (r.onerror = n),
                r.readAsArrayBuffer(e);
        });
    },
    text: function (e) {
        return new Promise(function (t, n) {
            var r = new FileReader();
            (r.onload = function () {
                t(r.result);
            }),
                (r.onerror = n),
                r.readAsText(e);
        });
    },
    url: function (e) {
        return new Promise(function (t, n) {
            var r = new FileReader();
            (r.onload = function () {
                t(r.result);
            }),
                (r.onerror = n),
                r.readAsDataURL(e);
        });
    },
};
function $t() {
    return this;
}
function Pt(e, t) {
    let n = !1;
    if ("function" != typeof t) throw new Error("dispose is not a function");
    return { [Symbol.iterator]: $t, next: () => (n ? { done: !0 } : ((n = !0), { done: !1, value: e })), return: () => ((n = !0), t(e), { done: !0 }), throw: () => ({ done: (n = !0) }) };
}
function St(e) {
    let t,
        n,
        r = !1;
    const i = e(function (e) {
        n ? (n(e), (n = null)) : (r = !0);
        return (t = e);
    });
    if (null != i && "function" != typeof i) throw new Error("function" == typeof i.then ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
    return {
        [Symbol.iterator]: $t,
        throw: () => ({ done: !0 }),
        return: () => (null != i && i(), { done: !0 }),
        next: function () {
            return { done: !1, value: r ? ((r = !1), Promise.resolve(t)) : new Promise((e) => (n = e)) };
        },
    };
}
function qt(e) {
    switch (e.type) {
        case "range":
        case "number":
            return e.valueAsNumber;
        case "date":
            return e.valueAsDate;
        case "checkbox":
            return e.checked;
        case "file":
            return e.multiple ? e.files : e.files[0];
        case "select-multiple":
            return Array.from(e.selectedOptions, (e) => e.value);
        default:
            return e.value;
    }
}
var Tt = {
    disposable: Pt,
    filter: function* (e, t) {
        for (var n, r = -1; !(n = e.next()).done; ) t(n.value, ++r) && (yield n.value);
    },
    input: function (e) {
        return St(function (t) {
            var n = (function (e) {
                    switch (e.type) {
                        case "button":
                        case "submit":
                        case "checkbox":
                            return "click";
                        case "file":
                            return "change";
                        default:
                            return "input";
                    }
                })(e),
                r = qt(e);
            function i() {
                t(qt(e));
            }
            return (
                e.addEventListener(n, i),
                void 0 !== r && t(r),
                function () {
                    e.removeEventListener(n, i);
                }
            );
        });
    },
    map: function* (e, t) {
        for (var n, r = -1; !(n = e.next()).done; ) yield t(n.value, ++r);
    },
    observe: St,
    queue: function (e) {
        let t;
        const n = [],
            r = e(function (e) {
                n.push(e), t && (t(n.shift()), (t = null));
                return e;
            });
        if (null != r && "function" != typeof r) throw new Error("function" == typeof r.then ? "async initializers are not supported" : "initializer returned something, but not a dispose function");
        return {
            [Symbol.iterator]: $t,
            throw: () => ({ done: !0 }),
            return: () => (null != r && r(), { done: !0 }),
            next: function () {
                return { done: !1, value: n.length ? Promise.resolve(n.shift()) : new Promise((e) => (t = e)) };
            },
        };
    },
    range: function* (e, t, n) {
        (e = +e), (t = +t), (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n);
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - e) / n)); ++r < i; ) yield e + r * n;
    },
    valueAt: function (e, t) {
        if (!(!isFinite((t = +t)) || t < 0 || (t != t) | 0)) for (var n, r = -1; !(n = e.next()).done; ) if (++r === t) return n.value;
    },
    worker: function (e) {
        const t = URL.createObjectURL(new Blob([e], { type: "text/javascript" })),
            n = new Worker(t);
        return Pt(n, () => {
            n.terminate(), URL.revokeObjectURL(t);
        });
    },
};
function At(e, t) {
    return function (n) {
        var r,
            i,
            o,
            a,
            s,
            c,
            l,
            u,
            d = n[0],
            f = [],
            p = null,
            h = -1;
        for (s = 1, c = arguments.length; s < c; ++s) {
            if ((r = arguments[s]) instanceof Node) (f[++h] = r), (d += "\x3c!--o:" + h + "--\x3e");
            else if (Array.isArray(r)) {
                for (l = 0, u = r.length; l < u; ++l) (i = r[l]) instanceof Node ? (null === p && ((f[++h] = p = document.createDocumentFragment()), (d += "\x3c!--o:" + h + "--\x3e")), p.appendChild(i)) : ((p = null), (d += i));
                p = null;
            } else d += r;
            d += n[s];
        }
        if (((p = e(d)), ++h > 0)) {
            for (o = new Array(h), a = document.createTreeWalker(p, NodeFilter.SHOW_COMMENT, null, !1); a.nextNode(); ) (i = a.currentNode), /^o:/.test(i.nodeValue) && (o[+i.nodeValue.slice(2)] = i);
            for (s = 0; s < h; ++s) (i = o[s]) && i.parentNode.replaceChild(f[s], i);
        }
        return 1 === p.childNodes.length ? p.removeChild(p.firstChild) : 11 === p.nodeType ? ((i = t()).appendChild(p), i) : p;
    };
}
var Ot = At(
    function (e) {
        var t = document.createElement("template");
        return (t.innerHTML = e.trim()), document.importNode(t.content, !0);
    },
    function () {
        return document.createElement("span");
    }
);
function Lt(e) {
    let t;
    Object.defineProperties(this, {
        generator: {
            value: St((e) => {
                t = e;
            }),
        },
        value: { get: () => e, set: (n) => t((e = n)) },
    }),
        void 0 !== e && t(e);
}
function* Mt() {
    for (;;) yield Date.now();
}
var kt = new Map();
function Ut(e, t) {
    var n;
    return (n = kt.get((e = +e)))
        ? n.then(() => t)
        : (n = Date.now()) >= e
        ? Promise.resolve(t)
        : (function (e, t) {
              var n = new Promise(function (n) {
                  kt.delete(t);
                  var r = t - e;
                  if (!(r > 0)) throw new Error("invalid time");
                  if (r > 2147483647) throw new Error("too long to wait");
                  setTimeout(n, r);
              });
              return kt.set(t, n), n;
          })(n, e).then(() => t);
}
var Rt = {
    delay: function (e, t) {
        return new Promise(function (n) {
            setTimeout(function () {
                n(t);
            }, e);
        });
    },
    tick: function (e, t) {
        return Ut(Math.ceil((Date.now() + 1) / e) * e, t);
    },
    when: Ut,
};
function Dt(e, t) {
    if (/^(\w+:)|\/\//i.test(e)) return e;
    if (/^[.]{0,2}\//i.test(e)) return new URL(e, null == t ? location : t).href;
    if (!e.length || /^[\s._]/.test(e) || /\s$/.test(e)) throw new Error("illegal name");
    return "https://unpkg.com/" + e;
}
function Ft(e) {
    return null == e ? ke : Ue(e);
}
var It = At(
        function (e) {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
            return (t.innerHTML = e.trim()), t;
        },
        function () {
            return document.createElementNS("http://www.w3.org/2000/svg", "g");
        }
    ),
    zt = String.raw;
function Bt() {
    return St(function (e) {
        var t = e(document.body.clientWidth);
        function n() {
            var n = document.body.clientWidth;
            n !== t && e((t = n));
        }
        return (
            window.addEventListener("resize", n),
            function () {
                window.removeEventListener("resize", n);
            }
        );
    });
}
var Ht = Object.assign(
    function (e) {
        const t = Ft(e);
        var n;
        Object.defineProperties(
            this,
            ((n = {
                FileAttachment: () => yt,
                Mutable: () => Lt,
                now: Mt,
                width: Bt,
                dot: () => t(Ze.resolve()),
                htl: () => t(Ge.resolve()),
                html: () => Ot,
                md: () =>
                    (function (e) {
                        return e(Qe.resolve()).then(function (t) {
                            return At(
                                function (n) {
                                    var r = document.createElement("div");
                                    r.innerHTML = t(n, { langPrefix: "" }).trim();
                                    var i = r.querySelectorAll("pre code[class]");
                                    return (
                                        i.length > 0 &&
                                            e(Ve.resolve()).then(function (t) {
                                                i.forEach(function (n) {
                                                    function r() {
                                                        t.highlightBlock(n), n.parentNode.classList.add("observablehq--md-pre");
                                                    }
                                                    t.getLanguage(n.className)
                                                        ? r()
                                                        : e(Ve.resolve("async-languages/index.js"))
                                                              .then((r) => {
                                                                  if (r.has(n.className))
                                                                      return e(Ve.resolve("async-languages/" + r.get(n.className))).then((e) => {
                                                                          t.registerLanguage(n.className, e);
                                                                      });
                                                              })
                                                              .then(r, r);
                                                });
                                            }),
                                        r
                                    );
                                },
                                function () {
                                    return document.createElement("div");
                                }
                            );
                        });
                    })(t),
                svg: () => It,
                tex: () =>
                    (function (e) {
                        return Promise.all([
                            e(Je.resolve()),
                            ((t = Je.resolve("dist/katex.min.css")),
                            new Promise(function (e, n) {
                                var r = document.createElement("link");
                                (r.rel = "stylesheet"), (r.href = t), (r.onerror = n), (r.onload = e), document.head.appendChild(r);
                            })),
                        ]).then(function (e) {
                            var t = e[0],
                                n = r();
                            function r(e) {
                                return function () {
                                    var n = document.createElement("div");
                                    return t.render(zt.apply(String, arguments), n, e), n.removeChild(n.firstChild);
                                };
                            }
                            return (n.options = r), (n.block = r({ displayMode: !0 })), n;
                        });
                        var t;
                    })(t),
                _: () => t(Ye.resolve()),
                aq: () => t.alias({ "apache-arrow": rt.resolve() })(it.resolve()),
                Arrow: () => t(rt.resolve()),
                d3: () => t(Be.resolve()),
                Inputs: () => t(He.resolve()).then((e) => ({ ...e, file: e.fileOf(wt) })),
                L: () =>
                    (async function (e) {
                        const t = await e(ct.resolve());
                        if (!t._style) {
                            const e = document.createElement("link");
                            (e.rel = "stylesheet"), (e.href = ct.resolve("dist/leaflet.css")), (t._style = document.head.appendChild(e));
                        }
                        return t;
                    })(t),
                mermaid: () =>
                    (async function (e) {
                        const t = await e(st.resolve());
                        return (
                            t.initialize({ securityLevel: "loose", theme: "neutral" }),
                            function () {
                                const e = document.createElement("div");
                                return (e.innerHTML = t.render(Et().id, String.raw.apply(String, arguments))), e.removeChild(e.firstChild);
                            }
                        );
                    })(t),
                Plot: () => t(We.resolve()),
                require: () => t,
                resolve: () => Dt,
                SQLite: () => lt(t),
                SQLiteDatabaseClient: () => SQLiteDatabaseClient,
                topojson: () => t(ot.resolve()),
                vl: () =>
                    (async function (e) {
                        const [t, n, r] = await Promise.all([et, tt, nt].map((t) => e(t.resolve())));
                        return r.register(t, n);
                    })(t),
                aapl: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9").csv({ typed: !0 }),
                alphabet: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d").csv({ typed: !0 }),
                cars: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6").csv({ typed: !0 }),
                citywages: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a").csv({ typed: !0 }),
                diamonds: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252").csv({ typed: !0 }),
                industries: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f").csv({ typed: !0 }),
                olympians: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c").csv({ typed: !0 }),
                penguins: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a").csv({ typed: !0 }),
                weather: () =>
                    new FileAttachment("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f").csv({ typed: !0 }),
                DOM: jt,
                Files: Nt,
                Generators: Tt,
                Promises: Rt,
            }),
            Object.fromEntries(Object.entries(n).map(Wt)))
        );
    },
    { resolve: ke.resolve }
);
function Wt([e, t]) {
    return [e, { value: t, writable: !0, enumerable: !0 }];
}
function Zt(e, t) {
    (this.message = e + ""), (this.input = t);
}
(Zt.prototype = Object.create(Error.prototype)), (Zt.prototype.name = "RuntimeError"), (Zt.prototype.constructor = Zt);
var Vt = Array.prototype,
    Jt = Vt.map,
    Yt = Vt.forEach;
function Gt(e) {
    return function () {
        return e;
    };
}
function Kt(e) {
    return e;
}
function Qt() {}
var Xt = {};
function en(e, t, n) {
    var r;
    n || (n = Xt),
        Object.defineProperties(this, {
            _observer: { value: n, writable: !0 },
            _definition: { value: rn, writable: !0 },
            _duplicate: { value: void 0, writable: !0 },
            _duplicates: { value: void 0, writable: !0 },
            _indegree: { value: NaN, writable: !0 },
            _inputs: { value: [], writable: !0 },
            _invalidate: { value: Qt, writable: !0 },
            _module: { value: t },
            _name: { value: null, writable: !0 },
            _outputs: { value: new Set(), writable: !0 },
            _promise: { value: Promise.resolve(void 0), writable: !0 },
            _reachable: { value: n !== Xt, writable: !0 },
            _rejector: {
                value:
                    ((r = this),
                    function (e) {
                        if (e === rn) throw new Zt(r._name + " is not defined", r._name);
                        if (e instanceof Error && e.message) throw new Zt(e.message, r._name);
                        throw new Zt(r._name + " could not be resolved", r._name);
                    }),
            },
            _type: { value: e },
            _value: { value: void 0, writable: !0 },
            _version: { value: 0, writable: !0 },
        });
}
function tn(e) {
    e._module._runtime._dirty.add(e), e._outputs.add(this);
}
function nn(e) {
    e._module._runtime._dirty.add(e), e._outputs.delete(this);
}
function rn() {
    throw rn;
}
function on(e) {
    return function () {
        throw new Zt(e + " is defined more than once");
    };
}
function an(e, t, n) {
    var r = this._module._scope,
        i = this._module._runtime;
    if ((this._inputs.forEach(nn, this), t.forEach(tn, this), (this._inputs = t), (this._definition = n), (this._value = void 0), n === Qt ? i._variables.delete(this) : i._variables.add(this), e !== this._name || r.get(e) !== this)) {
        var o, a;
        if (this._name)
            if (this._outputs.size)
                r.delete(this._name),
                    ((a = this._module._resolve(this._name))._outputs = this._outputs),
                    (this._outputs = new Set()),
                    a._outputs.forEach(function (e) {
                        e._inputs[e._inputs.indexOf(this)] = a;
                    }, this),
                    a._outputs.forEach(i._updates.add, i._updates),
                    i._dirty.add(a).add(this),
                    r.set(this._name, a);
            else if ((a = r.get(this._name)) === this) r.delete(this._name);
            else {
                if (3 !== a._type) throw new Error();
                a._duplicates.delete(this),
                    (this._duplicate = void 0),
                    1 === a._duplicates.size &&
                        ((a = a._duplicates.keys().next().value),
                        (o = r.get(this._name)),
                        (a._outputs = o._outputs),
                        (o._outputs = new Set()),
                        a._outputs.forEach(function (e) {
                            e._inputs[e._inputs.indexOf(o)] = a;
                        }),
                        (a._definition = a._duplicate),
                        (a._duplicate = void 0),
                        i._dirty.add(o).add(a),
                        i._updates.add(a),
                        r.set(this._name, a));
            }
        if (this._outputs.size) throw new Error();
        e &&
            ((a = r.get(e))
                ? 3 === a._type
                    ? ((this._definition = on(e)), (this._duplicate = n), a._duplicates.add(this))
                    : 2 === a._type
                    ? ((this._outputs = a._outputs),
                      (a._outputs = new Set()),
                      this._outputs.forEach(function (e) {
                          e._inputs[e._inputs.indexOf(a)] = this;
                      }, this),
                      i._dirty.add(a).add(this),
                      r.set(e, this))
                    : ((a._duplicate = a._definition),
                      (this._duplicate = n),
                      ((o = new en(3, this._module))._name = e),
                      (o._definition = this._definition = a._definition = on(e)),
                      (o._outputs = a._outputs),
                      (a._outputs = new Set()),
                      o._outputs.forEach(function (e) {
                          e._inputs[e._inputs.indexOf(a)] = o;
                      }),
                      (o._duplicates = new Set([this, a])),
                      i._dirty.add(a).add(o),
                      i._updates.add(a).add(o),
                      r.set(e, o))
                : r.set(e, this)),
            (this._name = e);
    }
    return i._updates.add(this), i._compute(), this;
}
function sn(e, t = []) {
    Object.defineProperties(this, { _runtime: { value: e }, _scope: { value: new Map() }, _builtins: { value: new Map([["invalidation", un], ["visibility", dn], ...t]) }, _source: { value: null, writable: !0 } });
}
function cn(e) {
    return e._name;
}
Object.defineProperties(en.prototype, {
    _pending: {
        value: function () {
            this._observer.pending && this._observer.pending();
        },
        writable: !0,
        configurable: !0,
    },
    _fulfilled: {
        value: function (e) {
            this._observer.fulfilled && this._observer.fulfilled(e, this._name);
        },
        writable: !0,
        configurable: !0,
    },
    _rejected: {
        value: function (e) {
            this._observer.rejected && this._observer.rejected(e, this._name);
        },
        writable: !0,
        configurable: !0,
    },
    define: {
        value: function (e, t, n) {
            switch (arguments.length) {
                case 1:
                    (n = e), (e = t = null);
                    break;
                case 2:
                    (n = t), "string" == typeof e ? (t = null) : ((t = e), (e = null));
            }
            return an.call(this, null == e ? null : e + "", null == t ? [] : Jt.call(t, this._module._resolve, this._module), "function" == typeof n ? n : Gt(n));
        },
        writable: !0,
        configurable: !0,
    },
    delete: {
        value: function () {
            return an.call(this, null, [], Qt);
        },
        writable: !0,
        configurable: !0,
    },
    import: {
        value: function (e, t, n) {
            arguments.length < 3 && ((n = t), (t = e));
            return an.call(this, t + "", [n._resolve(e + "")], Kt);
        },
        writable: !0,
        configurable: !0,
    },
}),
    Object.defineProperties(sn.prototype, {
        _copy: {
            value: function (e, t) {
                (e._source = this), t.set(this, e);
                for (const [o, a] of this._scope) {
                    var n = e._scope.get(o);
                    if (!n || 1 !== n._type)
                        if (a._definition === Kt) {
                            var r = a._inputs[0],
                                i = r._module;
                            e.import(r._name, o, t.get(i) || (i._source ? i._copy(new sn(e._runtime, e._builtins), t) : i));
                        } else e.define(o, a._inputs.map(cn), a._definition);
                }
                return e;
            },
            writable: !0,
            configurable: !0,
        },
        _resolve: {
            value: function (e) {
                var t,
                    n = this._scope.get(e);
                if (!n)
                    if (((n = new en(2, this)), this._builtins.has(e))) n.define(e, Gt(this._builtins.get(e)));
                    else if (this._runtime._builtin._scope.has(e)) n.import(e, this._runtime._builtin);
                    else {
                        try {
                            t = this._runtime._global(e);
                        } catch (t) {
                            return n.define(
                                e,
                                ((r = t),
                                function () {
                                    throw r;
                                })
                            );
                        }
                        void 0 === t ? this._scope.set((n._name = e), n) : n.define(e, Gt(t));
                    }
                var r;
                return n;
            },
            writable: !0,
            configurable: !0,
        },
        redefine: {
            value: function (e) {
                var t = this._scope.get(e);
                if (!t) throw new Zt(e + " is not defined");
                if (3 === t._type) throw new Zt(e + " is defined more than once");
                return t.define.apply(t, arguments);
            },
            writable: !0,
            configurable: !0,
        },
        define: {
            value: function () {
                var e = new en(1, this);
                return e.define.apply(e, arguments);
            },
            writable: !0,
            configurable: !0,
        },
        derive: {
            value: function (e, t) {
                var n = new sn(this._runtime, this._builtins);
                return (
                    (n._source = this),
                    Yt.call(e, function (e) {
                        "object" != typeof e && (e = { name: e + "" }), null == e.alias && (e.alias = e.name), n.import(e.name, e.alias, t);
                    }),
                    Promise.resolve().then(() => {
                        const e = new Set([this]);
                        for (const t of e)
                            for (const n of t._scope.values())
                                if (n._definition === Kt) {
                                    const t = n._inputs[0]._module,
                                        r = t._source || t;
                                    if (r === this) return void console.warn("circular module definition; ignoring");
                                    e.add(r);
                                }
                        this._copy(n, new Map());
                    }),
                    n
                );
            },
            writable: !0,
            configurable: !0,
        },
        import: {
            value: function () {
                var e = new en(1, this);
                return e.import.apply(e, arguments);
            },
            writable: !0,
            configurable: !0,
        },
        value: {
            value: async function (e) {
                var t = this._scope.get(e);
                if (!t) throw new Zt(e + " is not defined");
                t._observer === Xt && ((t._observer = !0), this._runtime._dirty.add(t));
                return await this._runtime._compute(), t._promise;
            },
            writable: !0,
            configurable: !0,
        },
        variable: {
            value: function (e) {
                return new en(1, this, e);
            },
            writable: !0,
            configurable: !0,
        },
        builtin: {
            value: function (e, t) {
                this._builtins.set(e, t);
            },
            writable: !0,
            configurable: !0,
        },
    });
const ln = "function" == typeof requestAnimationFrame ? requestAnimationFrame : "function" == typeof setImmediate ? setImmediate : (e) => setTimeout(e, 0);
var un = {},
    dn = {};
function fn(e = new Ht(), t = gn) {
    var n = this.module();
    if (
        (Object.defineProperties(this, {
            _dirty: { value: new Set() },
            _updates: { value: new Set() },
            _precomputes: { value: [], writable: !0 },
            _computing: { value: null, writable: !0 },
            _init: { value: null, writable: !0 },
            _modules: { value: new Map() },
            _variables: { value: new Set() },
            _disposed: { value: !1, writable: !0 },
            _builtin: { value: n },
            _global: { value: t },
        }),
        e)
    )
        for (var r in e) new en(2, n).define(r, [], e[r]);
}
function pn(e) {
    const t = new Set(e._inputs);
    for (const n of t) {
        if (n === e) return !0;
        n._inputs.forEach(t.add, t);
    }
    return !1;
}
function hn(e) {
    ++e._indegree;
}
function mn(e) {
    --e._indegree;
}
function vn(e) {
    return e._promise.catch(e._rejector);
}
function bn(e) {
    return new Promise(function (t) {
        e._invalidate = t;
    });
}
function _n(e, t) {
    let n,
        r,
        i = "function" == typeof IntersectionObserver && t._observer && t._observer._node,
        o = !i,
        a = Qt,
        s = Qt;
    return (
        i && ((r = new IntersectionObserver(([e]) => (o = e.isIntersecting) && ((n = null), a()))), r.observe(i), e.then(() => (r.disconnect(), (r = null), s()))),
        function (e) {
            return o ? Promise.resolve(e) : r ? (n || (n = new Promise((e, t) => ((a = e), (s = t)))), n.then(() => e)) : Promise.reject();
        }
    );
}
function wn(e) {
    e._invalidate(), (e._invalidate = Qt), e._pending();
    const t = e._value,
        n = ++e._version;
    let r = null;
    const i = (e._promise = (e._inputs.length
        ? Promise.all(e._inputs.map(vn)).then(function (i) {
              if (e._version !== n) return;
              for (var o = 0, a = i.length; o < a; ++o)
                  switch (i[o]) {
                      case un:
                          i[o] = r = bn(e);
                          break;
                      case dn:
                          r || (r = bn(e)), (i[o] = _n(r, e));
                  }
              return e._definition.apply(t, i);
          })
        : new Promise((n) => n(e._definition.call(t)))
    ).then(function (t) {
        if (
            (function (e) {
                return e && "function" == typeof e.next && "function" == typeof e.return;
            })(t)
        )
            return e._version !== n
                ? void t.return()
                : ((r || bn(e)).then(
                      ((i = t),
                      function () {
                          i.return();
                      })
                  ),
                  (function (e, t, n) {
                      const r = e._module._runtime;
                      let i;
                      function o(e) {
                          return new Promise((e) => e(n.next(i))).then(({ done: t, value: n }) => (t ? void 0 : Promise.resolve(n).then(e)));
                      }
                      function a() {
                          const n = o((o) => {
                              if (e._version === t) return (i = o), s(o, n).then(() => r._precompute(a)), e._fulfilled(o), o;
                          });
                          n.catch((r) => {
                              e._version === t && (s(void 0, n), e._rejected(r));
                          });
                      }
                      function s(t, n) {
                          return (e._value = t), (e._promise = n), e._outputs.forEach(r._updates.add, r._updates), r._compute();
                      }
                      return o((n) => {
                          if (e._version === t) return (i = n), r._precompute(a), n;
                      });
                  })(e, n, t));
        var i;
        return t;
    }));
    i.then(
        (t) => {
            e._version === n && ((e._value = t), e._fulfilled(t));
        },
        (t) => {
            e._version === n && ((e._value = void 0), e._rejected(t));
        }
    );
}
function yn(e, t) {
    e._invalidate(), (e._invalidate = Qt), e._pending(), ++e._version, (e._indegree = NaN), (e._promise = Promise.reject(t)).catch(Qt), (e._value = void 0), e._rejected(t);
}
function gn(e) {
    return window[e];
}
Object.defineProperties(fn, {
    load: {
        value: function (e, t, n) {
            if (("function" == typeof t && ((n = t), (t = null)), "function" != typeof n)) throw new Error("invalid observer");
            null == t && (t = new Ht());
            const { modules: r, id: i } = e,
                o = new Map(),
                a = new fn(t),
                s = c(i);
            function c(e) {
                let t = o.get(e);
                return t || o.set(e, (t = a.module())), t;
            }
            for (const e of r) {
                const t = c(e.id);
                let r = 0;
                for (const i of e.variables) i.from ? t.import(i.remote, i.name, c(i.from)) : t === s ? t.variable(n(i, r, e.variables)).define(i.name, i.inputs, i.value) : t.define(i.name, i.inputs, i.value), ++r;
            }
            return a;
        },
        writable: !0,
        configurable: !0,
    },
}),
    Object.defineProperties(fn.prototype, {
        _precompute: {
            value: function (e) {
                this._precomputes.push(e), this._compute();
            },
            writable: !0,
            configurable: !0,
        },
        _compute: {
            value: function () {
                return this._computing || (this._computing = this._computeSoon());
            },
            writable: !0,
            configurable: !0,
        },
        _computeSoon: {
            value: function () {
                return new Promise(ln).then(() => (this._disposed ? void 0 : this._computeNow()));
            },
            writable: !0,
            configurable: !0,
        },
        _computeNow: {
            value: async function () {
                var e,
                    t,
                    n = [],
                    r = this._precomputes;
                if (r.length) {
                    this._precomputes = [];
                    for (const e of r) e();
                    await (function (e = 0) {
                        let t = Promise.resolve();
                        for (let n = 0; n < e; ++n) t = t.then(() => {});
                        return t;
                    })(3);
                }
                (e = new Set(this._dirty)).forEach(function (t) {
                    t._inputs.forEach(e.add, e);
                    const n = (function (e) {
                        if (e._observer !== Xt) return !0;
                        var t = new Set(e._outputs);
                        for (const e of t) {
                            if (e._observer !== Xt) return !0;
                            e._outputs.forEach(t.add, t);
                        }
                        return !1;
                    })(t);
                    n > t._reachable ? this._updates.add(t) : n < t._reachable && t._invalidate(), (t._reachable = n);
                }, this),
                    (e = new Set(this._updates)).forEach(function (t) {
                        t._reachable ? ((t._indegree = 0), t._outputs.forEach(e.add, e)) : ((t._indegree = NaN), e.delete(t));
                    }),
                    (this._computing = null),
                    this._updates.clear(),
                    this._dirty.clear(),
                    e.forEach(function (e) {
                        e._outputs.forEach(hn);
                    });
                do {
                    for (
                        e.forEach(function (e) {
                            0 === e._indegree && n.push(e);
                        });
                        (t = n.pop());

                    )
                        wn(t), t._outputs.forEach(i), e.delete(t);
                    e.forEach(function (t) {
                        pn(t) && (yn(t, new Zt("circular definition")), t._outputs.forEach(mn), e.delete(t));
                    });
                } while (e.size);
                function i(e) {
                    0 == --e._indegree && n.push(e);
                }
            },
            writable: !0,
            configurable: !0,
        },
        dispose: {
            value: function () {
                (this._computing = Promise.resolve()),
                    (this._disposed = !0),
                    this._variables.forEach((e) => {
                        e._invalidate(), (e._version = NaN);
                    });
            },
            writable: !0,
            configurable: !0,
        },
        module: {
            value: function (e, t = Qt) {
                let n;
                if (void 0 === e) return (n = this._init) ? ((this._init = null), n) : new sn(this);
                if (((n = this._modules.get(e)), n)) return n;
                (this._init = n = new sn(this)), this._modules.set(e, n);
                try {
                    e(this, t);
                } finally {
                    this._init = null;
                }
                return n;
            },
            writable: !0,
            configurable: !0,
        },
        fileAttachments: {
            value: function (e) {
                return Object.assign(
                    (t) => {
                        const n = e((t += ""));
                        if (null == n) throw new Error(`File not found: ${t}`);
                        if ("object" == typeof n && "url" in n) {
                            const { url: e, mimeType: r } = n;
                            return new FileAttachment(e, t, r);
                        }
                        return new FileAttachment(n, t);
                    },
                    { prototype: FileAttachment.prototype }
                );
            },
            writable: !0,
            configurable: !0,
        },
    });
export { ce as Inspector, Ht as Library, fn as Runtime, Zt as RuntimeError };
