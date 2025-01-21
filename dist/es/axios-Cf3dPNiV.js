var ct = Object.defineProperty, ut = Object.defineProperties;
var lt = Object.getOwnPropertyDescriptors;
var Re = Object.getOwnPropertySymbols;
var ft = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable;
var j = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pt = (e) => {
  throw TypeError(e);
};
var Se = (e, t, n) => t in e ? ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, H = (e, t) => {
  for (var n in t || (t = {}))
    ft.call(t, n) && Se(e, n, t[n]);
  if (Re)
    for (var n of Re(t))
      dt.call(t, n) && Se(e, n, t[n]);
  return e;
}, ge = (e, t) => ut(e, lt(t));
var L = (e, t, n) => new Promise((r, s) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (u) {
      s(u);
    }
  }, i = (f) => {
    try {
      c(n.throw(f));
    } catch (u) {
      s(u);
    }
  }, c = (f) => f.done ? r(f.value) : Promise.resolve(f.value).then(o, i);
  c((n = n.apply(e, t)).next());
}), B = function(e, t) {
  this[0] = e, this[1] = t;
}, re = (e, t, n) => {
  var r = (i, c, f, u) => {
    try {
      var l = n[i](c), d = (c = l.value) instanceof B, w = l.done;
      Promise.resolve(d ? c[0] : c).then((b) => d ? r(i === "return" ? i : "next", c[1] ? { done: b.done, value: b.value } : b, f, u) : f({ value: b, done: w })).catch((b) => r("throw", b, f, u));
    } catch (b) {
      u(b);
    }
  }, s = (i) => o[i] = (c) => new Promise((f, u) => r(i, c, f, u)), o = {};
  return n = n.apply(e, t), o[j("asyncIterator")] = () => o, s("next"), s("throw"), s("return"), o;
}, se = (e) => {
  var t = e[j("asyncIterator")], n = !1, r, s = {};
  return t == null ? (t = e[j("iterator")](), r = (o) => s[o] = (i) => t[o](i)) : (t = t.call(e), r = (o) => s[o] = (i) => {
    if (n) {
      if (n = !1, o === "throw") throw i;
      return i;
    }
    return n = !0, {
      done: !1,
      value: new B(new Promise((c) => {
        var f = t[o](i);
        f instanceof Object || pt("Object expected"), c(f);
      }), 1)
    };
  }), s[j("iterator")] = () => s, r("next"), "throw" in t ? r("throw") : s.throw = (o) => {
    throw o;
  }, "return" in t && r("return"), s;
}, Oe = (e, t, n) => (t = e[j("asyncIterator")]) ? t.call(e) : (e = e[j("iterator")](), t = {}, n = (r, s) => (s = e[r]) && (t[r] = (o) => new Promise((i, c, f) => (o = s.call(e, o), f = o.done, Promise.resolve(o.value).then((u) => i({ value: u, done: f }), c)))), n("next"), n("return"), t);
function qe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ht } = Object.prototype, { getPrototypeOf: me } = Object, Q = /* @__PURE__ */ ((e) => (t) => {
  const n = ht.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => Q(t) === e), Z = (e) => (t) => typeof t === e, { isArray: q } = Array, z = Z("undefined");
function mt(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ie = C("ArrayBuffer");
function yt(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ie(e.buffer), t;
}
const bt = Z("string"), x = Z("function"), He = Z("number"), Y = (e) => e !== null && typeof e == "object", wt = (e) => e === !0 || e === !1, W = (e) => {
  if (Q(e) !== "object")
    return !1;
  const t = me(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Et = C("Date"), Rt = C("File"), St = C("Blob"), gt = C("FileList"), Ot = (e) => Y(e) && x(e.pipe), Tt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = Q(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, At = C("URLSearchParams"), [xt, Ct, Nt, Pt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), _t = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), q(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Me(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const D = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, ze = (e) => !z(e) && e !== D;
function ue() {
  const { caseless: e } = ze(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Me(t, s) || s;
    W(t[o]) && W(r) ? t[o] = ue(t[o], r) : W(r) ? t[o] = ue({}, r) : q(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && J(arguments[r], n);
  return t;
}
const Ft = (e, t, n, { allOwnKeys: r } = {}) => (J(t, (s, o) => {
  n && x(s) ? e[o] = qe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Lt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Dt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && me(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ut = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, kt = (e) => {
  if (!e) return null;
  if (q(e)) return e;
  let t = e.length;
  if (!He(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, jt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && me(Uint8Array)), qt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, It = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ht = C("HTMLFormElement"), Mt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Te = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), zt = C("RegExp"), Je = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  J(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Jt = (e) => {
  Je(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Vt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return q(e) ? r(e) : r(String(e).split(t)), n;
}, $t = () => {
}, Wt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, oe = "abcdefghijklmnopqrstuvwxyz", Ae = "0123456789", Ve = {
  DIGIT: Ae,
  ALPHA: oe,
  ALPHA_DIGIT: oe + oe.toUpperCase() + Ae
}, Kt = (e = 16, t = Ve.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function vt(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Xt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = q(r) ? [] : {};
        return J(r, (i, c) => {
          const f = n(i, s + 1);
          !z(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Gt = C("AsyncFunction"), Qt = (e) => e && (Y(e) || x(e)) && x(e.then) && x(e.catch), $e = ((e, t) => e ? setImmediate : t ? ((n, r) => (D.addEventListener("message", ({ source: s, data: o }) => {
  s === D && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), D.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(D.postMessage)
), Zt = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(D) : typeof process != "undefined" && process.nextTick || $e, a = {
  isArray: q,
  isArrayBuffer: Ie,
  isBuffer: mt,
  isFormData: Tt,
  isArrayBufferView: yt,
  isString: bt,
  isNumber: He,
  isBoolean: wt,
  isObject: Y,
  isPlainObject: W,
  isReadableStream: xt,
  isRequest: Ct,
  isResponse: Nt,
  isHeaders: Pt,
  isUndefined: z,
  isDate: Et,
  isFile: Rt,
  isBlob: St,
  isRegExp: zt,
  isFunction: x,
  isStream: Ot,
  isURLSearchParams: At,
  isTypedArray: jt,
  isFileList: gt,
  forEach: J,
  merge: ue,
  extend: Ft,
  trim: _t,
  stripBOM: Lt,
  inherits: Bt,
  toFlatObject: Dt,
  kindOf: Q,
  kindOfTest: C,
  endsWith: Ut,
  toArray: kt,
  forEachEntry: qt,
  matchAll: It,
  isHTMLForm: Ht,
  hasOwnProperty: Te,
  hasOwnProp: Te,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Je,
  freezeMethods: Jt,
  toObjectSet: Vt,
  toCamelCase: Mt,
  noop: $t,
  toFiniteNumber: Wt,
  findKey: Me,
  global: D,
  isContextDefined: ze,
  ALPHABET: Ve,
  generateString: Kt,
  isSpecCompliantForm: vt,
  toJSONObject: Xt,
  isAsyncFn: Gt,
  isThenable: Qt,
  setImmediate: $e,
  asap: Zt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const We = m.prototype, Ke = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ke[e] = { value: e };
});
Object.defineProperties(m, Ke);
Object.defineProperty(We, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(We);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Yt = null;
function le(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ve(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function xe(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ve(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function en(e) {
  return a.isArray(e) && !e.some(le);
}
const tn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ee(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !a.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob != "undefined" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, h) {
    let E = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && en(p) || (a.isFileList(p) || a.endsWith(y, "[]")) && (E = a.toArray(p)))
        return y = ve(y), E.forEach(function(g, P) {
          !(a.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? xe([y], P, o) : i === null ? y : y + "[]",
            u(g)
          );
        }), !1;
    }
    return le(p) ? !0 : (t.append(xe(h, y, o), u(p)), !1);
  }
  const d = [], w = Object.assign(tn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: le
  });
  function b(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(E, R) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(R) ? R.trim() : R,
          y,
          w
        )) === !0 && b(E, y ? y.concat(R) : [R]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Ce(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ye(e, t) {
  this._pairs = [], e && ee(e, this, t);
}
const Xe = ye.prototype;
Xe.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ce);
  } : Ce;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function nn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ge(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || nn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ye(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ne {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Qe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rn = typeof URLSearchParams != "undefined" ? URLSearchParams : ye, sn = typeof FormData != "undefined" ? FormData : null, on = typeof Blob != "undefined" ? Blob : null, an = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rn,
    FormData: sn,
    Blob: on
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, be = typeof window != "undefined" && typeof document != "undefined", fe = typeof navigator == "object" && navigator || void 0, cn = be && (!fe || ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0), un = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ln = be && window.location.href || "http://localhost", fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: be,
  hasStandardBrowserEnv: cn,
  hasStandardBrowserWebWorkerEnv: un,
  navigator: fe,
  origin: ln
}, Symbol.toStringTag, { value: "Module" })), O = H(H({}, fn), an);
function dn(e, t) {
  return ee(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function pn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function hn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = hn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(pn(r), s, n, 0);
    }), n;
  }
  return null;
}
function mn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const V = {
  transitional: Qe,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ze(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return dn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return ee(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), mn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || V.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  V.headers[e] = {};
});
const yn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), bn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && yn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Pe = Symbol("internals");
function M(e) {
  return e && String(e).trim().toLowerCase();
}
function K(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(K) : String(e);
}
function wn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const En = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ie(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Rn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Sn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = M(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || f] = K(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !En(t))
      i(bn(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return wn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ie(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = M(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ie(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ie(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = K(s), delete n[o];
        return;
      }
      const c = t ? Rn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = K(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = M(i);
      r[c] || (Sn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function ae(e, t) {
  const n = this || V, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ye(e) {
  return !!(e && e.__CANCEL__);
}
function I(e, t, n) {
  m.call(this, e == null ? "canceled" : e, m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(I, m, {
  __CANCEL__: !0
});
function et(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function gn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function On(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let d = o, w = 0;
    for (; d !== s; )
      w += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const b = l && u - l;
    return b ? Math.round(w * 1e3 / b) : void 0;
  };
}
function Tn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const X = (e, t, n = 3) => {
  let r = 0;
  const s = On(50, 250);
  return Tn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, _e = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Fe = (e) => (...t) => a.asap(() => e(...t)), An = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, xn = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Cn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tt(e, t) {
  return e && !Cn(t) ? Nn(e, t) : t;
}
const Le = (e) => e instanceof A ? H({}, e) : e;
function k(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d, w) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: w }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d, w) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, d, w);
    } else return r(u, l, d, w);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l, d) => s(Le(u), Le(l), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || s, w = d(e[l], t[l], l);
    a.isUndefined(w) && d !== c || (n[l] = w);
  }), n;
}
const nt = (e) => {
  const t = k({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = A.from(i), t.url = Ge(tt(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && An(t.url))) {
    const u = s && o && xn.read(o);
    u && i.set(s, u);
  }
  return t;
}, Pn = typeof XMLHttpRequest != "undefined", _n = Pn && function(e) {
  return new Promise(function(n, r) {
    const s = nt(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, d, w, b, p;
    function y() {
      b && b(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const g = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      et(function(F) {
        n(F), y();
      }, function(F) {
        r(F), y();
      }, T), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let P = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || Qe;
      s.timeoutErrorMessage && (P = s.timeoutErrorMessage), r(new m(
        P,
        T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(P, T) {
      h.setRequestHeader(T, P);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([w, p] = X(u, !0), h.addEventListener("progress", w)), f && h.upload && ([d, b] = X(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (l = (g) => {
      h && (r(!g || g.type ? new I(null, e, h) : g), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const R = gn(s.url);
    if (R && O.protocols.indexOf(R) === -1) {
      r(new m("Unsupported protocol " + R + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, Fn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new I(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, Ln = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Bn = function(e, t) {
  return re(this, null, function* () {
    try {
      for (var n = Oe(Dn(e)), r, s, o; r = !(s = yield new B(n.next())).done; r = !1) {
        const i = s.value;
        yield* se(Ln(i, t));
      }
    } catch (s) {
      o = [s];
    } finally {
      try {
        r && (s = n.return) && (yield new B(s.call(n)));
      } finally {
        if (o)
          throw o[0];
      }
    }
  });
}, Dn = function(e) {
  return re(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* se(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: n, value: r } = yield new B(t.read());
        if (n)
          break;
        yield r;
      }
    } finally {
      yield new B(t.cancel());
    }
  });
}, Be = (e, t, n, r) => {
  const s = Bn(e, t);
  let o = 0, i, c = (u) => {
    i || (i = !0, r && r(u));
  };
  return new ReadableStream({
    pull(u) {
      return L(this, null, function* () {
        try {
          const { done: l, value: d } = yield s.next();
          if (l) {
            c(), u.close();
            return;
          }
          let w = d.byteLength;
          if (n) {
            let b = o += w;
            n(b);
          }
          u.enqueue(new Uint8Array(d));
        } catch (l) {
          throw c(l), l;
        }
      });
    },
    cancel(u) {
      return c(u), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, te = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", rt = te && typeof ReadableStream == "function", Un = te && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => L(void 0, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), st = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (n) {
    return !1;
  }
}, kn = rt && st(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), De = 64 * 1024, de = rt && st(() => a.isReadableStream(new Response("").body)), G = {
  stream: de && ((e) => e.body)
};
te && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !G[t] && (G[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const jn = (e) => L(void 0, null, function* () {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (yield new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (yield Un(e)).byteLength;
}), qn = (e, t) => L(void 0, null, function* () {
  const n = a.toFiniteNumber(e.getContentLength());
  return n == null ? jn(t) : n;
}), In = te && ((e) => L(void 0, null, function* () {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: w
  } = nt(e);
  u = u ? (u + "").toLowerCase() : "text";
  let b = Fn([s, o && o.toAbortSignal()], i), p;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let h;
  try {
    if (f && kn && n !== "get" && n !== "head" && (h = yield qn(l, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), _;
      if (a.isFormData(r) && (_ = T.headers.get("content-type")) && l.setContentType(_), T.body) {
        const [F, $] = _e(
          h,
          X(Fe(f))
        );
        r = Be(T.body, De, F, $);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    p = new Request(t, ge(H({}, w), {
      signal: b,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    }));
    let R = yield fetch(p);
    const g = de && (u === "stream" || u === "response");
    if (de && (c || g && y)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((Ee) => {
        T[Ee] = R[Ee];
      });
      const _ = a.toFiniteNumber(R.headers.get("content-length")), [F, $] = c && _e(
        _,
        X(Fe(c), !0)
      ) || [];
      R = new Response(
        Be(R.body, De, F, () => {
          $ && $(), y && y();
        }),
        T
      );
    }
    u = u || "text";
    let P = yield G[a.findKey(G, u) || "text"](R, e);
    return !g && y && y(), yield new Promise((T, _) => {
      et(T, _, {
        data: P,
        headers: A.from(R.headers),
        status: R.status,
        statusText: R.statusText,
        config: e,
        request: p
      });
    });
  } catch (E) {
    throw y && y(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: E.cause || E
      }
    ) : m.from(E, E && E.code, e, p);
  }
})), pe = {
  http: Yt,
  xhr: _n,
  fetch: In
};
a.forEach(pe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (n) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ue = (e) => `- ${e}`, Hn = (e) => a.isFunction(e) || e === null || e === !1, ot = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Hn(n) && (r = pe[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ue).join(`
`) : " " + Ue(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: pe
};
function ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new I(null, e);
}
function ke(e) {
  return ce(e), e.headers = A.from(e.headers), e.data = ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ot.getAdapter(e.adapter || V.adapter)(e).then(function(r) {
    return ce(e), r.data = ae.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return Ye(r) || (ce(e), r && r.response && (r.response.data = ae.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const it = "1.7.9", ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ne[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const je = {};
ne.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + it + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !je[i] && (je[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
ne.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Mn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const v = {
  assertOptions: Mn,
  validators: ne
}, N = v.validators;
class U {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ne(),
      response: new Ne()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    return L(this, null, function* () {
      try {
        return yield this._request(t, n);
      } catch (r) {
        if (r instanceof Error) {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
          try {
            r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
          } catch (i) {
          }
        }
        throw r;
      }
    });
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = k(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && v.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : v.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), v.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = A.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, w;
    if (!f) {
      const p = [ke.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), w = p.length, l = Promise.resolve(n); d < w; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    w = c.length;
    let b = n;
    for (d = 0; d < w; ) {
      const p = c[d++], y = c[d++];
      try {
        b = p(b);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      l = ke.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, w = u.length; d < w; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = k(this.defaults, t);
    const n = tt(t.baseURL, t.url);
    return Ge(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  U.prototype[t] = function(n, r) {
    return this.request(k(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(k(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  U.prototype[t] = n(), U.prototype[t + "Form"] = n(!0);
});
class we {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new I(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new we(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function zn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Jn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const he = {
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
Object.entries(he).forEach(([e, t]) => {
  he[t] = e;
});
function at(e) {
  const t = new U(e), n = qe(U.prototype.request, t);
  return a.extend(n, U.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return at(k(e, s));
  }, n;
}
const S = at(V);
S.Axios = U;
S.CanceledError = I;
S.CancelToken = we;
S.isCancel = Ye;
S.VERSION = it;
S.toFormData = ee;
S.AxiosError = m;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = zn;
S.isAxiosError = Jn;
S.mergeConfig = k;
S.AxiosHeaders = A;
S.formToJSON = (e) => Ze(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = ot.getAdapter;
S.HttpStatusCode = he;
S.default = S;
export {
  S as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MtQ2YzZFBOaVYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9udWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9jb21tb24vdXRpbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0hlYWRlcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcGVlZG9tZXRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdGhyb3R0bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tcG9zZVNpZ25hbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RyYWNrU3RyZWFtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvZmV0Y2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYXhpb3NAMS43Ljkvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2F4aW9zQDEuNy45L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9heGlvc0AxLjcuOS9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGxldCBraW5kO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHwgKFxuICAgICAgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIChcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgICAgICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gICAgICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuY29uc3QgW2lzUmVhZGFibGVTdHJlYW0sIGlzUmVxdWVzdCwgaXNSZXNwb25zZSwgaXNIZWFkZXJzXSA9IFsnUmVhZGFibGVTdHJlYW0nLCAnUmVxdWVzdCcsICdSZXNwb25zZScsICdIZWFkZXJzJ10ubWFwKGtpbmRPZlRlc3QpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4gc3RyLnRyaW0gP1xuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHthbGxPd25LZXlzID0gZmFsc2V9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG59KSgpO1xuXG5jb25zdCBpc0NvbnRleHREZWZpbmVkID0gKGNvbnRleHQpID0+ICFpc1VuZGVmaW5lZChjb250ZXh0KSAmJiBjb250ZXh0ICE9PSBfZ2xvYmFsO1xuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIGNvbnN0IHtjYXNlbGVzc30gPSBpc0NvbnRleHREZWZpbmVkKHRoaXMpICYmIHRoaXMgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRbdGFyZ2V0S2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcmd1bWVudHNbaV0gJiYgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHthbGxPd25LZXlzfT0ge30pID0+IHtcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcbiAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge2FsbE93bktleXN9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbZGVzY3JpcHRvcnNdXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpO1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbj0gMF1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PiB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA+IHN0ci5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW1N5bWJvbC5pdGVyYXRvcl07XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IHBhaXIgPSByZXN1bHQudmFsdWU7XG4gICAgZm4uY2FsbChvYmosIHBhaXJbMF0sIHBhaXJbMV0pO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgc3RyaW5nLCBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxib29sZWFuPn1cbiAqL1xuY29uc3QgbWF0Y2hBbGwgPSAocmVnRXhwLCBzdHIpID0+IHtcbiAgbGV0IG1hdGNoZXM7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgYXJyLnB1c2gobWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG4vKiBDaGVja2luZyBpZiB0aGUga2luZE9mVGVzdCBmdW5jdGlvbiByZXR1cm5zIHRydWUgd2hlbiBwYXNzZWQgYW4gSFRNTEZvcm1FbGVtZW50LiAqL1xuY29uc3QgaXNIVE1MRm9ybSA9IGtpbmRPZlRlc3QoJ0hUTUxGb3JtRWxlbWVudCcpO1xuXG5jb25zdCB0b0NhbWVsQ2FzZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9cXHNdKFthLXpcXGRdKShcXHcqKS9nLFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xuICAgICAgcmV0dXJuIHAxLnRvVXBwZXJDYXNlKCkgKyBwMjtcbiAgICB9XG4gICk7XG59O1xuXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9ICgoe2hhc093blByb3BlcnR5fSkgPT4gKG9iaiwgcHJvcCkgPT4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKShPYmplY3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5cbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gIGNvbnN0IHJlZHVjZWREZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZvckVhY2goZGVzY3JpcHRvcnMsIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSByZXQgfHwgZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUgPSArdmFsdWUpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmNvbnN0IEFMUEhBID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J1xuXG5jb25zdCBESUdJVCA9ICcwMTIzNDU2Nzg5JztcblxuY29uc3QgQUxQSEFCRVQgPSB7XG4gIERJR0lULFxuICBBTFBIQSxcbiAgQUxQSEFfRElHSVQ6IEFMUEhBICsgQUxQSEEudG9VcHBlckNhc2UoKSArIERJR0lUXG59XG5cbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IHtsZW5ndGh9ID0gYWxwaGFiZXQ7XG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBzdHIgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGxlbmd0aHwwXVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdGhpbmcgaXMgYSBGb3JtRGF0YSBvYmplY3QsIHJldHVybiB0cnVlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gY2hlY2suXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3BlY0NvbXBsaWFudEZvcm0odGhpbmcpIHtcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl0pO1xufVxuXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IEFycmF5KDEwKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcblxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighKCd0b0pTT04nIGluIHNvdXJjZSkpIHtcbiAgICAgICAgc3RhY2tbaV0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcbiAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGFja1tpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdmlzaXQob2JqLCAwKTtcbn1cblxuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxuICB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24odGhpbmcpKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRoZW4pICYmIGlzRnVuY3Rpb24odGhpbmcuY2F0Y2gpO1xuXG4vLyBvcmlnaW5hbCBjb2RlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGlnaXRhbEJyYWluSlMvQXhpb3NQcm9taXNlL2Jsb2IvMTZkZWFiMTM3MTBlYzA5Nzc5OTIyMTMxZjNmYTU5NTQzMjBmODNhYi9saWIvdXRpbHMuanMjTDExLUwzNFxuXG5jb25zdCBfc2V0SW1tZWRpYXRlID0gKChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQsIHBvc3RNZXNzYWdlU3VwcG9ydGVkKSA9PiB7XG4gIGlmIChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlO1xuICB9XG5cbiAgcmV0dXJuIHBvc3RNZXNzYWdlU3VwcG9ydGVkID8gKCh0b2tlbiwgY2FsbGJhY2tzKSA9PiB7XG4gICAgX2dsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoe3NvdXJjZSwgZGF0YX0pID0+IHtcbiAgICAgIGlmIChzb3VyY2UgPT09IF9nbG9iYWwgJiYgZGF0YSA9PT0gdG9rZW4pIHtcbiAgICAgICAgY2FsbGJhY2tzLmxlbmd0aCAmJiBjYWxsYmFja3Muc2hpZnQoKSgpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiAoY2IpID0+IHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgIF9nbG9iYWwucG9zdE1lc3NhZ2UodG9rZW4sIFwiKlwiKTtcbiAgICB9XG4gIH0pKGBheGlvc0Ake01hdGgucmFuZG9tKCl9YCwgW10pIDogKGNiKSA9PiBzZXRUaW1lb3V0KGNiKTtcbn0pKFxuICB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLFxuICBpc0Z1bmN0aW9uKF9nbG9iYWwucG9zdE1lc3NhZ2UpXG4pO1xuXG5jb25zdCBhc2FwID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrICE9PSAndW5kZWZpbmVkJyA/XG4gIHF1ZXVlTWljcm90YXNrLmJpbmQoX2dsb2JhbCkgOiAoIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5leHRUaWNrIHx8IF9zZXRJbW1lZGlhdGUpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKipcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNSZWFkYWJsZVN0cmVhbSxcbiAgaXNSZXF1ZXN0LFxuICBpc1Jlc3BvbnNlLFxuICBpc0hlYWRlcnMsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGUsXG4gIHNldEltbWVkaWF0ZTogX3NldEltbWVkaWF0ZSxcbiAgYXNhcFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICBpZiAocmVzcG9uc2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXMgPyByZXNwb25zZS5zdGF0dXMgOiBudWxsO1xuICB9XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHV0aWxzLnRvSlNPTk9iamVjdCh0aGlzLmNvbmZpZyksXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zRXJyb3IucHJvdG90eXBlO1xuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcblxuW1xuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxuICAnRVJSX0JBRF9PUFRJT04nLFxuICAnRUNPTk5BQk9SVEVEJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFUlJfTkVUV09SSycsXG4gICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJyxcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcbiAgJ0VSUl9CQURfUkVTUE9OU0UnLFxuICAnRVJSX0JBRF9SRVFVRVNUJyxcbiAgJ0VSUl9DQU5DRUxFRCcsXG4gICdFUlJfTk9UX1NVUFBPUlQnLFxuICAnRVJSX0lOVkFMSURfVVJMJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChjb2RlID0+IHtcbiAgZGVzY3JpcHRvcnNbY29kZV0gPSB7dmFsdWU6IGNvZGV9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEF4aW9zRXJyb3IsIGRlc2NyaXB0b3JzKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcbiAgY29uc3QgYXhpb3NFcnJvciA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcblxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBFcnJvci5wcm90b3R5cGU7XG4gIH0sIHByb3AgPT4ge1xuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcbiAgfSk7XG5cbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gIGF4aW9zRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuICBheGlvc0Vycm9yLm5hbWUgPSBlcnJvci5uYW1lO1xuXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuXG4gIHJldHVybiBheGlvc0Vycm9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuLy8gdGVtcG9yYXJ5IGhvdGZpeCB0byBhdm9pZCBjaXJjdWxhciByZWZlcmVuY2VzIHVudGlsIEF4aW9zVVJMU2VhcmNoUGFyYW1zIGlzIHJlZmFjdG9yZWRcbmltcG9ydCBQbGF0Zm9ybUZvcm1EYXRhIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3Qob3B0aW9ucywge1xuICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgaW5kZXhlczogZmFsc2VcbiAgfSwgZmFsc2UsIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xuICBjb25zdCB1c2VCbG9iID0gX0Jsb2IgJiYgdXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHVzZUJsb2IgJiYgdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgIXBhdGggJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IG1ldGFUb2tlbnMgPyBrZXkgOiBrZXkuc2xpY2UoMCwgLTIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxuICAgICAgICAoKHV0aWxzLmlzRmlsZUxpc3QodmFsdWUpIHx8IHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykpICYmIChhcnIgPSB1dGlscy50b0FycmF5KHZhbHVlKSlcbiAgICAgICAgKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcblxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xuICAgICAgICAgICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGluZGV4ZXMgPT09IHRydWUgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKSA6IChpbmRleGVzID09PSBudWxsID8ga2V5IDoga2V5ICsgJ1tdJyksXG4gICAgICAgICAgICBjb252ZXJ0VmFsdWUoZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICBjb25zdCBleHBvc2VkSGVscGVycyA9IE9iamVjdC5hc3NpZ24ocHJlZGljYXRlcywge1xuICAgIGRlZmF1bHRWaXNpdG9yLFxuICAgIGNvbnZlcnRWYWx1ZSxcbiAgICBpc1Zpc2l0YWJsZVxuICB9KTtcblxuICBmdW5jdGlvbiBidWlsZCh2YWx1ZSwgcGF0aCkge1xuICAgIGlmICh1dGlscy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHJldHVybjtcblxuICAgIGlmIChzdGFjay5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcblxuICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIGVhY2goZWwsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIHZpc2l0b3IuY2FsbChcbiAgICAgICAgZm9ybURhdGEsIGVsLCB1dGlscy5pc1N0cmluZyhrZXkpID8ga2V5LnRyaW0oKSA6IGtleSwgcGF0aCwgZXhwb3NlZEhlbHBlcnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICBidWlsZChvYmopO1xuXG4gIHJldHVybiBmb3JtRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Gb3JtRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBJdCBlbmNvZGVzIGEgc3RyaW5nIGJ5IHJlcGxhY2luZyBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgaW4gdGhlIHVucmVzZXJ2ZWQgc2V0IHdpdGhcbiAqIHRoZWlyIHBlcmNlbnQtZW5jb2RlZCBlcXVpdmFsZW50c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgY29uc3QgY2hhck1hcCA9IHtcbiAgICAnISc6ICclMjEnLFxuICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAnKCc6ICclMjgnLFxuICAgICcpJzogJyUyOScsXG4gICAgJ34nOiAnJTdFJyxcbiAgICAnJTIwJzogJysnLFxuICAgICclMDAnOiAnXFx4MDAnXG4gIH07XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKX5dfCUyMHwlMDAvZywgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGFyYW1zIG9iamVjdCBhbmQgY29udmVydHMgaXQgdG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIGNvbnZlcnRlZCB0byBhIEZvcm1EYXRhIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIEF4aW9zIGNvbnN0cnVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5fcGFpcnMgPSBbXTtcblxuICBwYXJhbXMgJiYgdG9Gb3JtRGF0YShwYXJhbXMsIHRoaXMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc1VSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG5cbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcbn07XG5cbnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kZXIpIHtcbiAgY29uc3QgX2VuY29kZSA9IGVuY29kZXIgPyBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVyLmNhbGwodGhpcywgdmFsdWUsIGVuY29kZSk7XG4gIH0gOiBlbmNvZGU7XG5cbiAgcmV0dXJuIHRoaXMuX3BhaXJzLm1hcChmdW5jdGlvbiBlYWNoKHBhaXIpIHtcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gIH0sICcnKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcblxuLyoqXG4gKiBJdCByZXBsYWNlcyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjaGFyYWN0ZXJzIGA6YCwgYCRgLCBgLGAsIGArYCwgYFtgLCBhbmQgYF1gIHdpdGggdGhlaXJcbiAqIFVSSSBlbmNvZGVkIGNvdW50ZXJwYXJ0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgVGhlIHZhbHVlIHRvIGJlIGVuY29kZWQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0gez8ob2JqZWN0fEZ1bmN0aW9uKX0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodXRpbHMuaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBzZXJpYWxpemU6IG9wdGlvbnNcbiAgICB9O1xuICB9IFxuXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSA/XG4gICAgICBwYXJhbXMudG9TdHJpbmcoKSA6XG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgY29uc3QgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2lsZW50SlNPTlBhcnNpbmc6IHRydWUsXG4gIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICBjbGFyaWZ5VGltZW91dEVycm9yOiBmYWxzZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iIDogbnVsbFxuIiwiaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tICcuL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzJ1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vY2xhc3Nlcy9Gb3JtRGF0YS5qcydcbmltcG9ydCBCbG9iIGZyb20gJy4vY2xhc3Nlcy9CbG9iLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQnJvd3NlcjogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YSxcbiAgICBCbG9iXG4gIH0sXG4gIHByb3RvY29sczogWydodHRwJywgJ2h0dHBzJywgJ2ZpbGUnLCAnYmxvYicsICd1cmwnLCAnZGF0YSddXG59O1xuIiwiY29uc3QgaGFzQnJvd3NlckVudiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IF9uYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3IgfHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyRW52ID0gaGFzQnJvd3NlckVudiAmJlxuICAoIV9uYXZpZ2F0b3IgfHwgWydSZWFjdE5hdGl2ZScsICdOYXRpdmVTY3JpcHQnLCAnTlMnXS5pbmRleE9mKF9uYXZpZ2F0b3IucHJvZHVjdCkgPCAwKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgd2ViV29ya2VyIGVudmlyb25tZW50XG4gKlxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XG4gKiBgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXJgLCB0aGUgV2ViV29ya2VyIHdpbGwgc3RpbGwgYmVcbiAqIGZpbHRlcmVkIG91dCBkdWUgdG8gaXRzIGp1ZGdtZW50IHN0YW5kYXJkXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXG4gKiBUaGlzIGxlYWRzIHRvIGEgcHJvYmxlbSB3aGVuIGF4aW9zIHBvc3QgYEZvcm1EYXRhYCBpbiB3ZWJXb3JrZXJcbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gICAgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufSkoKTtcblxuY29uc3Qgb3JpZ2luID0gaGFzQnJvd3NlckVudiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnaHR0cDovL2xvY2FsaG9zdCc7XG5cbmV4cG9ydCB7XG4gIGhhc0Jyb3dzZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyRW52LFxuICBfbmF2aWdhdG9yIGFzIG5hdmlnYXRvcixcbiAgb3JpZ2luXG59XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi9ub2RlL2luZGV4LmpzJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi51dGlscyxcbiAgLi4ucGxhdGZvcm1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvRm9ybURhdGEoZGF0YSwgbmV3IHBsYXRmb3JtLmNsYXNzZXMuVVJMU2VhcmNoUGFyYW1zKCksIE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2l0b3I6IGZ1bmN0aW9uKHZhbHVlLCBrZXksIHBhdGgsIGhlbHBlcnMpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscGVycy5kZWZhdWx0VmlzaXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcbiAgLy8gZm9vW3hdW3ldW3pdXG4gIC8vIGZvby54LnkuelxuICAvLyBmb28teC15LXpcbiAgLy8gZm9vIHggeSB6XG4gIHJldHVybiB1dGlscy5tYXRjaEFsbCgvXFx3K3xcXFsoXFx3KildL2csIG5hbWUpLm1hcChtYXRjaCA9PiB7XG4gICAgcmV0dXJuIG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY29udmVydCB0byBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpO1xuICBsZXQgaTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGxldCBrZXk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgb2JqW2tleV0gPSBhcnJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgRm9ybURhdGEgb2JqZWN0IGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXG4gKlxuICogQHJldHVybnMge09iamVjdDxzdHJpbmcsIGFueT4gfCBudWxsfSBUaGUgY29udmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZm9ybURhdGFUb0pTT04oZm9ybURhdGEpIHtcbiAgZnVuY3Rpb24gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xuXG4gICAgaWYgKG5hbWUgPT09ICdfX3Byb3RvX18nKSByZXR1cm4gdHJ1ZTtcblxuICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IE51bWJlci5pc0Zpbml0ZSgrbmFtZSk7XG4gICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPj0gcGF0aC5sZW5ndGg7XG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuXG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSBbdGFyZ2V0W25hbWVdLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRbbmFtZV0gfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0W25hbWVdLCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gYXJyYXlUb09iamVjdCh0YXJnZXRbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzLmlzRnVuY3Rpb24oZm9ybURhdGEuZW50cmllcykpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2hFbnRyeShmb3JtRGF0YSwgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBidWlsZFBhdGgocGFyc2VQcm9wUGF0aChuYW1lKSwgdmFsdWUsIG9iaiwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1EYXRhVG9KU09OO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IFsneGhyJywgJ2h0dHAnLCAnZmV0Y2gnXSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkgfHwgJyc7XG4gICAgY29uc3QgaGFzSlNPTkNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTE7XG4gICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkICYmIHV0aWxzLmlzSFRNTEZvcm0oZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XG5cbiAgICBpZiAoaXNGb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzUmVhZGFibGVTdHJlYW0oZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IGlzRmlsZUxpc3Q7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xuICAgICAgICBjb25zdCBfRm9ybURhdGEgPSB0aGlzLmVudiAmJiB0aGlzLmVudi5Gb3JtRGF0YTtcblxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICBpc0ZpbGVMaXN0ID8geydmaWxlc1tdJzogZGF0YX0gOiBkYXRhLFxuICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlICkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgY29uc3QgSlNPTlJlcXVlc3RlZCA9IHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAodXRpbHMuaXNSZXNwb25zZShkYXRhKSB8fCB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiAoKGZvcmNlZEpTT05QYXJzaW5nICYmICF0aGlzLnJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIChtZXRob2QpID0+IHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXSk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdIZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgaWYgKCFrZXkgfHwgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mW2tleV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0pIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBhcnNlSGVhZGVycyBmcm9tICcuLi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyc7XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIgJiYgU3RyaW5nKGhlYWRlcikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkpIHtcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBpc1ZhbGlkSGVhZGVyTmFtZSA9IChzdHIpID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG5cbmZ1bmN0aW9uIG1hdGNoSGVhZGVyVmFsdWUoY29udGV4dCwgdmFsdWUsIGhlYWRlciwgZmlsdGVyLCBpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgICB2YWx1ZSA9IGhlYWRlcjtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSByZXR1cm47XG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc1JlZ0V4cChmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFjY2Vzc29ycyhvYmosIGhlYWRlcikge1xuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xuXG4gIFsnZ2V0JywgJ3NldCcsICdoYXMnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZigha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IChfcmV3cml0ZSA9PT0gdW5kZWZpbmVkICYmIHNlbGZba2V5XSAhPT0gZmFsc2UpKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0hlYWRlcnMoaGVhZGVyKSkge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgaGVhZGVyLmVudHJpZXMoKSkge1xuICAgICAgICBzZXRIZWFkZXIodmFsdWUsIGtleSwgcmV3cml0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShrZXkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKG1hdGNoZXIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIsIHRydWUpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gZnJlcVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBmcmVxKSB7XG4gIGxldCB0aW1lc3RhbXAgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMTAwMCAvIGZyZXE7XG4gIGxldCBsYXN0QXJncztcbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IGludm9rZSA9IChhcmdzLCBub3cgPSBEYXRlLm5vdygpKSA9PiB7XG4gICAgdGltZXN0YW1wID0gbm93O1xuICAgIGxhc3RBcmdzID0gbnVsbDtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHBhc3NlZCA9IG5vdyAtIHRpbWVzdGFtcDtcbiAgICBpZiAoIHBhc3NlZCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgIGludm9rZShsYXN0QXJncylcbiAgICAgICAgfSwgdGhyZXNob2xkIC0gcGFzc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBmbHVzaCA9ICgpID0+IGxhc3RBcmdzICYmIGludm9rZShsYXN0QXJncyk7XG5cbiAgcmV0dXJuIFt0aHJvdHRsZWQsIGZsdXNoXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhyb3R0bGU7XG4iLCJpbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSBcIi4vc3BlZWRvbWV0ZXIuanNcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwiLi90aHJvdHRsZS5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIHRocm90dGxlKGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxuICAgICAgW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddOiB0cnVlXG4gICAgfTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9LCBmcmVxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzRXZlbnREZWNvcmF0b3IgPSAodG90YWwsIHRocm90dGxlZCkgPT4ge1xuICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdG90YWwgIT0gbnVsbDtcblxuICByZXR1cm4gWyhsb2FkZWQpID0+IHRocm90dGxlZFswXSh7XG4gICAgbGVuZ3RoQ29tcHV0YWJsZSxcbiAgICB0b3RhbCxcbiAgICBsb2FkZWRcbiAgfSksIHRocm90dGxlZFsxXV07XG59XG5cbmV4cG9ydCBjb25zdCBhc3luY0RlY29yYXRvciA9IChmbikgPT4gKC4uLmFyZ3MpID0+IHV0aWxzLmFzYXAoKCkgPT4gZm4oLi4uYXJncykpO1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID8gKChvcmlnaW4sIGlzTVNJRSkgPT4gKHVybCkgPT4ge1xuICB1cmwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcblxuICByZXR1cm4gKFxuICAgIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmXG4gICAgb3JpZ2luLmhvc3QgPT09IHVybC5ob3N0ICYmXG4gICAgKGlzTVNJRSB8fCBvcmlnaW4ucG9ydCA9PT0gdXJsLnBvcnQpXG4gICk7XG59KShcbiAgbmV3IFVSTChwbGF0Zm9ybS5vcmlnaW4pLFxuICBwbGF0Zm9ybS5uYXZpZ2F0b3IgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChwbGF0Zm9ybS5uYXZpZ2F0b3IudXNlckFnZW50KVxuKSA6ICgpID0+IHRydWU7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLz9cXC8kLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vQXhpb3NIZWFkZXJzLmpzXCI7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB7IC4uLnRoaW5nIH0gOiB0aGluZztcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UsIHByb3AsIGNhc2VsZXNzKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZS5jYWxsKHtjYXNlbGVzc30sIHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhhLCBiLCBwcm9wICwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgcHJvcCAsIGNhc2VsZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgcHJvcCAsIGNhc2VsZXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lcmdlTWFwID0ge1xuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBtZXRob2Q6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgZGF0YTogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXRNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoWFNSRlRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlRW5jb2Rpbmc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdmFsaWRhdGVTdGF0dXM6IG1lcmdlRGlyZWN0S2V5cyxcbiAgICBoZWFkZXJzOiAoYSwgYiAsIHByb3ApID0+IG1lcmdlRGVlcFByb3BlcnRpZXMoaGVhZGVyc1RvT2JqZWN0KGEpLCBoZWFkZXJzVG9PYmplY3QoYikscHJvcCwgdHJ1ZSlcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZzEsIGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSBcIi4uL3BsYXRmb3JtL2luZGV4LmpzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgaXNVUkxTYW1lT3JpZ2luIGZyb20gXCIuL2lzVVJMU2FtZU9yaWdpbi5qc1wiO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSBcIi4vY29va2llcy5qc1wiO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSBcIi4uL2NvcmUvYnVpbGRGdWxsUGF0aC5qc1wiO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gXCIuLi9jb3JlL21lcmdlQ29uZmlnLmpzXCI7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gXCIuL2J1aWxkVVJMLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb25maWcpID0+IHtcbiAgY29uc3QgbmV3Q29uZmlnID0gbWVyZ2VDb25maWcoe30sIGNvbmZpZyk7XG5cbiAgbGV0IHtkYXRhLCB3aXRoWFNSRlRva2VuLCB4c3JmSGVhZGVyTmFtZSwgeHNyZkNvb2tpZU5hbWUsIGhlYWRlcnMsIGF1dGh9ID0gbmV3Q29uZmlnO1xuXG4gIG5ld0NvbmZpZy5oZWFkZXJzID0gaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGhlYWRlcnMpO1xuXG4gIG5ld0NvbmZpZy51cmwgPSBidWlsZFVSTChidWlsZEZ1bGxQYXRoKG5ld0NvbmZpZy5iYXNlVVJMLCBuZXdDb25maWcudXJsKSwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuXG4gIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgaWYgKGF1dGgpIHtcbiAgICBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICtcbiAgICAgIGJ0b2EoKGF1dGgudXNlcm5hbWUgfHwgJycpICsgJzonICsgKGF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYXV0aC5wYXNzd29yZCkpIDogJycpKVxuICAgICk7XG4gIH1cblxuICBsZXQgY29udGVudFR5cGU7XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkpIHtcbiAgICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudikge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSh1bmRlZmluZWQpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfSBlbHNlIGlmICgoY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkpICE9PSBmYWxzZSkge1xuICAgICAgLy8gZml4IHNlbWljb2xvbiBkdXBsaWNhdGlvbiBpc3N1ZSBmb3IgUmVhY3ROYXRpdmUgRm9ybURhdGEgaW1wbGVtZW50YXRpb25cbiAgICAgIGNvbnN0IFt0eXBlLCAuLi50b2tlbnNdID0gY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZShbdHlwZSB8fCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC4uLnRva2Vuc10uam9pbignOyAnKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuXG4gIGlmIChwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYpIHtcbiAgICB3aXRoWFNSRlRva2VuICYmIHV0aWxzLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikgJiYgKHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKG5ld0NvbmZpZykpO1xuXG4gICAgaWYgKHdpdGhYU1JGVG9rZW4gfHwgKHdpdGhYU1JGVG9rZW4gIT09IGZhbHNlICYmIGlzVVJMU2FtZU9yaWdpbihuZXdDb25maWcudXJsKSkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgY29uc3QgeHNyZlZhbHVlID0geHNyZkhlYWRlck5hbWUgJiYgeHNyZkNvb2tpZU5hbWUgJiYgY29va2llcy5yZWFkKHhzcmZDb29raWVOYW1lKTtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICBoZWFkZXJzLnNldCh4c3JmSGVhZGVyTmFtZSwgeHNyZlZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3Q29uZmlnO1xufVxuXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IHBhcnNlUHJvdG9jb2wgZnJvbSAnLi4vaGVscGVycy9wYXJzZVByb3RvY29sLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCB7cHJvZ3Jlc3NFdmVudFJlZHVjZXJ9IGZyb20gJy4uL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanMnO1xuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSBcIi4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qc1wiO1xuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IF9jb25maWcgPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gX2NvbmZpZy5kYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oX2NvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBsZXQge3Jlc3BvbnNlVHlwZSwgb25VcGxvYWRQcm9ncmVzcywgb25Eb3dubG9hZFByb2dyZXNzfSA9IF9jb25maWc7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgbGV0IHVwbG9hZFRocm90dGxlZCwgZG93bmxvYWRUaHJvdHRsZWQ7XG4gICAgbGV0IGZsdXNoVXBsb2FkLCBmbHVzaERvd25sb2FkO1xuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGZsdXNoVXBsb2FkICYmIGZsdXNoVXBsb2FkKCk7IC8vIGZsdXNoIGV2ZW50c1xuICAgICAgZmx1c2hEb3dubG9hZCAmJiBmbHVzaERvd25sb2FkKCk7IC8vIGZsdXNoIGV2ZW50c1xuXG4gICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG5cbiAgICAgIF9jb25maWcuc2lnbmFsICYmIF9jb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub3BlbihfY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBfY29uZmlnLnVybCwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IF9jb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBfY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgX2NvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IF9jb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKF9jb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICB0cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/IEF4aW9zRXJyb3IuRVRJTUVET1VUIDogQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycy50b0pTT04oKSwgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhX2NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gX2NvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmIChvbkRvd25sb2FkUHJvZ3Jlc3MpIHtcbiAgICAgIChbZG93bmxvYWRUaHJvdHRsZWQsIGZsdXNoRG93bmxvYWRdID0gcHJvZ3Jlc3NFdmVudFJlZHVjZXIob25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKSk7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZG93bmxvYWRUaHJvdHRsZWQpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKG9uVXBsb2FkUHJvZ3Jlc3MgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIChbdXBsb2FkVGhyb3R0bGVkLCBmbHVzaFVwbG9hZF0gPSBwcm9ncmVzc0V2ZW50UmVkdWNlcihvblVwbG9hZFByb2dyZXNzKSk7XG5cbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdXBsb2FkVGhyb3R0bGVkKTtcblxuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZsdXNoVXBsb2FkKTtcbiAgICB9XG5cbiAgICBpZiAoX2NvbmZpZy5jYW5jZWxUb2tlbiB8fCBfY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBjYW5jZWwgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIF9jb25maWcuY2FuY2VsVG9rZW4gJiYgX2NvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoX2NvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgX2NvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IF9jb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKF9jb25maWcudXJsKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBwbGF0Zm9ybS5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tIFwiLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanNcIjtcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gXCIuLi9jb3JlL0F4aW9zRXJyb3IuanNcIjtcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbmNvbnN0IGNvbXBvc2VTaWduYWxzID0gKHNpZ25hbHMsIHRpbWVvdXQpID0+IHtcbiAgY29uc3Qge2xlbmd0aH0gPSAoc2lnbmFscyA9IHNpZ25hbHMgPyBzaWduYWxzLmZpbHRlcihCb29sZWFuKSA6IFtdKTtcblxuICBpZiAodGltZW91dCB8fCBsZW5ndGgpIHtcbiAgICBsZXQgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGxldCBhYm9ydGVkO1xuXG4gICAgY29uc3Qgb25hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGlmICghYWJvcnRlZCkge1xuICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgY29uc3QgZXJyID0gcmVhc29uIGluc3RhbmNlb2YgRXJyb3IgPyByZWFzb24gOiB0aGlzLnJlYXNvbjtcbiAgICAgICAgY29udHJvbGxlci5hYm9ydChlcnIgaW5zdGFuY2VvZiBBeGlvc0Vycm9yID8gZXJyIDogbmV3IENhbmNlbGVkRXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IGVycikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0aW1lciA9IHRpbWVvdXQgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBvbmFib3J0KG5ldyBBeGlvc0Vycm9yKGB0aW1lb3V0ICR7dGltZW91dH0gb2YgbXMgZXhjZWVkZWRgLCBBeGlvc0Vycm9yLkVUSU1FRE9VVCkpXG4gICAgfSwgdGltZW91dClcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgaWYgKHNpZ25hbHMpIHtcbiAgICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICBzaWduYWxzLmZvckVhY2goc2lnbmFsID0+IHtcbiAgICAgICAgICBzaWduYWwudW5zdWJzY3JpYmUgPyBzaWduYWwudW5zdWJzY3JpYmUob25hYm9ydCkgOiBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNpZ25hbHMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNpZ25hbHMuZm9yRWFjaCgoc2lnbmFsKSA9PiBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KSk7XG5cbiAgICBjb25zdCB7c2lnbmFsfSA9IGNvbnRyb2xsZXI7XG5cbiAgICBzaWduYWwudW5zdWJzY3JpYmUgPSAoKSA9PiB1dGlscy5hc2FwKHVuc3Vic2NyaWJlKTtcblxuICAgIHJldHVybiBzaWduYWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZVNpZ25hbHM7XG4iLCJcbmV4cG9ydCBjb25zdCBzdHJlYW1DaHVuayA9IGZ1bmN0aW9uKiAoY2h1bmssIGNodW5rU2l6ZSkge1xuICBsZXQgbGVuID0gY2h1bmsuYnl0ZUxlbmd0aDtcblxuICBpZiAoIWNodW5rU2l6ZSB8fCBsZW4gPCBjaHVua1NpemUpIHtcbiAgICB5aWVsZCBjaHVuaztcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcG9zID0gMDtcbiAgbGV0IGVuZDtcblxuICB3aGlsZSAocG9zIDwgbGVuKSB7XG4gICAgZW5kID0gcG9zICsgY2h1bmtTaXplO1xuICAgIHlpZWxkIGNodW5rLnNsaWNlKHBvcywgZW5kKTtcbiAgICBwb3MgPSBlbmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlYWRCeXRlcyA9IGFzeW5jIGZ1bmN0aW9uKiAoaXRlcmFibGUsIGNodW5rU2l6ZSkge1xuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRTdHJlYW0oaXRlcmFibGUpKSB7XG4gICAgeWllbGQqIHN0cmVhbUNodW5rKGNodW5rLCBjaHVua1NpemUpO1xuICB9XG59XG5cbmNvbnN0IHJlYWRTdHJlYW0gPSBhc3luYyBmdW5jdGlvbiogKHN0cmVhbSkge1xuICBpZiAoc3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgIHlpZWxkKiBzdHJlYW07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHtkb25lLCB2YWx1ZX0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgcmVhZGVyLmNhbmNlbCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja1N0cmVhbSA9IChzdHJlYW0sIGNodW5rU2l6ZSwgb25Qcm9ncmVzcywgb25GaW5pc2gpID0+IHtcbiAgY29uc3QgaXRlcmF0b3IgPSByZWFkQnl0ZXMoc3RyZWFtLCBjaHVua1NpemUpO1xuXG4gIGxldCBieXRlcyA9IDA7XG4gIGxldCBkb25lO1xuICBsZXQgX29uRmluaXNoID0gKGUpID0+IHtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgYXN5bmMgcHVsbChjb250cm9sbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZG9uZSwgdmFsdWV9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICBfb25GaW5pc2goKTtcbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IHZhbHVlLmJ5dGVMZW5ndGg7XG4gICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgbGV0IGxvYWRlZEJ5dGVzID0gYnl0ZXMgKz0gbGVuO1xuICAgICAgICAgIG9uUHJvZ3Jlc3MobG9hZGVkQnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShuZXcgVWludDhBcnJheSh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9vbkZpbmlzaChlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSxcbiAgICBjYW5jZWwocmVhc29uKSB7XG4gICAgICBfb25GaW5pc2gocmVhc29uKTtcbiAgICAgIHJldHVybiBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBoaWdoV2F0ZXJNYXJrOiAyXG4gIH0pXG59XG4iLCJpbXBvcnQgcGxhdGZvcm0gZnJvbSBcIi4uL3BsYXRmb3JtL2luZGV4LmpzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5pbXBvcnQgY29tcG9zZVNpZ25hbHMgZnJvbSBcIi4uL2hlbHBlcnMvY29tcG9zZVNpZ25hbHMuanNcIjtcbmltcG9ydCB7dHJhY2tTdHJlYW19IGZyb20gXCIuLi9oZWxwZXJzL3RyYWNrU3RyZWFtLmpzXCI7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xuaW1wb3J0IHtwcm9ncmVzc0V2ZW50UmVkdWNlciwgcHJvZ3Jlc3NFdmVudERlY29yYXRvciwgYXN5bmNEZWNvcmF0b3J9IGZyb20gXCIuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZUNvbmZpZyBmcm9tIFwiLi4vaGVscGVycy9yZXNvbHZlQ29uZmlnLmpzXCI7XG5pbXBvcnQgc2V0dGxlIGZyb20gXCIuLi9jb3JlL3NldHRsZS5qc1wiO1xuXG5jb25zdCBpc0ZldGNoU3VwcG9ydGVkID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBSZXF1ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgPSBpc0ZldGNoU3VwcG9ydGVkICYmIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ2Z1bmN0aW9uJztcblxuLy8gdXNlZCBvbmx5IGluc2lkZSB0aGUgZmV0Y2ggYWRhcHRlclxuY29uc3QgZW5jb2RlVGV4dCA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgKHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgKChlbmNvZGVyKSA9PiAoc3RyKSA9PiBlbmNvZGVyLmVuY29kZShzdHIpKShuZXcgVGV4dEVuY29kZXIoKSkgOlxuICAgIGFzeW5jIChzdHIpID0+IG5ldyBVaW50OEFycmF5KGF3YWl0IG5ldyBSZXNwb25zZShzdHIpLmFycmF5QnVmZmVyKCkpXG4pO1xuXG5jb25zdCB0ZXN0ID0gKGZuLCAuLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZm4oLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBzdXBwb3J0c1JlcXVlc3RTdHJlYW0gPSBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmIHRlc3QoKCkgPT4ge1xuICBsZXQgZHVwbGV4QWNjZXNzZWQgPSBmYWxzZTtcblxuICBjb25zdCBoYXNDb250ZW50VHlwZSA9IG5ldyBSZXF1ZXN0KHBsYXRmb3JtLm9yaWdpbiwge1xuICAgIGJvZHk6IG5ldyBSZWFkYWJsZVN0cmVhbSgpLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGdldCBkdXBsZXgoKSB7XG4gICAgICBkdXBsZXhBY2Nlc3NlZCA9IHRydWU7XG4gICAgICByZXR1cm4gJ2hhbGYnO1xuICAgIH0sXG4gIH0pLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKTtcblxuICByZXR1cm4gZHVwbGV4QWNjZXNzZWQgJiYgIWhhc0NvbnRlbnRUeXBlO1xufSk7XG5cbmNvbnN0IERFRkFVTFRfQ0hVTktfU0laRSA9IDY0ICogMTAyNDtcblxuY29uc3Qgc3VwcG9ydHNSZXNwb25zZVN0cmVhbSA9IGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgJiZcbiAgdGVzdCgoKSA9PiB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKG5ldyBSZXNwb25zZSgnJykuYm9keSkpO1xuXG5cbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgc3RyZWFtOiBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmICgocmVzKSA9PiByZXMuYm9keSlcbn07XG5cbmlzRmV0Y2hTdXBwb3J0ZWQgJiYgKCgocmVzKSA9PiB7XG4gIFsndGV4dCcsICdhcnJheUJ1ZmZlcicsICdibG9iJywgJ2Zvcm1EYXRhJywgJ3N0cmVhbSddLmZvckVhY2godHlwZSA9PiB7XG4gICAgIXJlc29sdmVyc1t0eXBlXSAmJiAocmVzb2x2ZXJzW3R5cGVdID0gdXRpbHMuaXNGdW5jdGlvbihyZXNbdHlwZV0pID8gKHJlcykgPT4gcmVzW3R5cGVdKCkgOlxuICAgICAgKF8sIGNvbmZpZykgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgUmVzcG9uc2UgdHlwZSAnJHt0eXBlfScgaXMgbm90IHN1cHBvcnRlZGAsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULCBjb25maWcpO1xuICAgICAgfSlcbiAgfSk7XG59KShuZXcgUmVzcG9uc2UpKTtcblxuY29uc3QgZ2V0Qm9keUxlbmd0aCA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGlmIChib2R5ID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzQmxvYihib2R5KSkge1xuICAgIHJldHVybiBib2R5LnNpemU7XG4gIH1cblxuICBpZih1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGJvZHkpKSB7XG4gICAgY29uc3QgX3JlcXVlc3QgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keSxcbiAgICB9KTtcbiAgICByZXR1cm4gKGF3YWl0IF9yZXF1ZXN0LmFycmF5QnVmZmVyKCkpLmJ5dGVMZW5ndGg7XG4gIH1cblxuICBpZih1dGlscy5pc0FycmF5QnVmZmVyVmlldyhib2R5KSB8fCB1dGlscy5pc0FycmF5QnVmZmVyKGJvZHkpKSB7XG4gICAgcmV0dXJuIGJvZHkuYnl0ZUxlbmd0aDtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG4gICAgYm9keSA9IGJvZHkgKyAnJztcbiAgfVxuXG4gIGlmKHV0aWxzLmlzU3RyaW5nKGJvZHkpKSB7XG4gICAgcmV0dXJuIChhd2FpdCBlbmNvZGVUZXh0KGJvZHkpKS5ieXRlTGVuZ3RoO1xuICB9XG59XG5cbmNvbnN0IHJlc29sdmVCb2R5TGVuZ3RoID0gYXN5bmMgKGhlYWRlcnMsIGJvZHkpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIoaGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuXG4gIHJldHVybiBsZW5ndGggPT0gbnVsbCA/IGdldEJvZHlMZW5ndGgoYm9keSkgOiBsZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgKGFzeW5jIChjb25maWcpID0+IHtcbiAgbGV0IHtcbiAgICB1cmwsXG4gICAgbWV0aG9kLFxuICAgIGRhdGEsXG4gICAgc2lnbmFsLFxuICAgIGNhbmNlbFRva2VuLFxuICAgIHRpbWVvdXQsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3MsXG4gICAgcmVzcG9uc2VUeXBlLFxuICAgIGhlYWRlcnMsXG4gICAgd2l0aENyZWRlbnRpYWxzID0gJ3NhbWUtb3JpZ2luJyxcbiAgICBmZXRjaE9wdGlvbnNcbiAgfSA9IHJlc29sdmVDb25maWcoY29uZmlnKTtcblxuICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgPyAocmVzcG9uc2VUeXBlICsgJycpLnRvTG93ZXJDYXNlKCkgOiAndGV4dCc7XG5cbiAgbGV0IGNvbXBvc2VkU2lnbmFsID0gY29tcG9zZVNpZ25hbHMoW3NpZ25hbCwgY2FuY2VsVG9rZW4gJiYgY2FuY2VsVG9rZW4udG9BYm9ydFNpZ25hbCgpXSwgdGltZW91dCk7XG5cbiAgbGV0IHJlcXVlc3Q7XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSBjb21wb3NlZFNpZ25hbCAmJiBjb21wb3NlZFNpZ25hbC51bnN1YnNjcmliZSAmJiAoKCkgPT4ge1xuICAgICAgY29tcG9zZWRTaWduYWwudW5zdWJzY3JpYmUoKTtcbiAgfSk7XG5cbiAgbGV0IHJlcXVlc3RDb250ZW50TGVuZ3RoO1xuXG4gIHRyeSB7XG4gICAgaWYgKFxuICAgICAgb25VcGxvYWRQcm9ncmVzcyAmJiBzdXBwb3J0c1JlcXVlc3RTdHJlYW0gJiYgbWV0aG9kICE9PSAnZ2V0JyAmJiBtZXRob2QgIT09ICdoZWFkJyAmJlxuICAgICAgKHJlcXVlc3RDb250ZW50TGVuZ3RoID0gYXdhaXQgcmVzb2x2ZUJvZHlMZW5ndGgoaGVhZGVycywgZGF0YSkpICE9PSAwXG4gICAgKSB7XG4gICAgICBsZXQgX3JlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIGR1cGxleDogXCJoYWxmXCJcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY29udGVudFR5cGVIZWFkZXI7XG5cbiAgICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpICYmIChjb250ZW50VHlwZUhlYWRlciA9IF9yZXF1ZXN0LmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkpIHtcbiAgICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZShjb250ZW50VHlwZUhlYWRlcilcbiAgICAgIH1cblxuICAgICAgaWYgKF9yZXF1ZXN0LmJvZHkpIHtcbiAgICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9IHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXG4gICAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25VcGxvYWRQcm9ncmVzcykpXG4gICAgICAgICk7XG5cbiAgICAgICAgZGF0YSA9IHRyYWNrU3RyZWFtKF9yZXF1ZXN0LmJvZHksIERFRkFVTFRfQ0hVTktfU0laRSwgb25Qcm9ncmVzcywgZmx1c2gpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdXRpbHMuaXNTdHJpbmcod2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgd2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ29taXQnO1xuICAgIH1cblxuICAgIC8vIENsb3VkZmxhcmUgV29ya2VycyB0aHJvd3Mgd2hlbiBjcmVkZW50aWFscyBhcmUgZGVmaW5lZFxuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2xvdWRmbGFyZS93b3JrZXJkL2lzc3Vlcy85MDJcbiAgICBjb25zdCBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID0gXCJjcmVkZW50aWFsc1wiIGluIFJlcXVlc3QucHJvdG90eXBlO1xuICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHtcbiAgICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICAgIHNpZ25hbDogY29tcG9zZWRTaWduYWwsXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgaGVhZGVyczogaGVhZGVycy5ub3JtYWxpemUoKS50b0pTT04oKSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgICBkdXBsZXg6IFwiaGFsZlwiLFxuICAgICAgY3JlZGVudGlhbHM6IGlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQgPyB3aXRoQ3JlZGVudGlhbHMgOiB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuXG4gICAgY29uc3QgaXNTdHJlYW1SZXNwb25zZSA9IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgKHJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScgfHwgcmVzcG9uc2VUeXBlID09PSAncmVzcG9uc2UnKTtcblxuICAgIGlmIChzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIChvbkRvd25sb2FkUHJvZ3Jlc3MgfHwgKGlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUpKSkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBbJ3N0YXR1cycsICdzdGF0dXNUZXh0JywgJ2hlYWRlcnMnXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBvcHRpb25zW3Byb3BdID0gcmVzcG9uc2VbcHJvcF07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VDb250ZW50TGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJykpO1xuXG4gICAgICBjb25zdCBbb25Qcm9ncmVzcywgZmx1c2hdID0gb25Eb3dubG9hZFByb2dyZXNzICYmIHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXG4gICAgICAgIHJlc3BvbnNlQ29udGVudExlbmd0aCxcbiAgICAgICAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25Eb3dubG9hZFByb2dyZXNzKSwgdHJ1ZSlcbiAgICAgICkgfHwgW107XG5cbiAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKFxuICAgICAgICB0cmFja1N0cmVhbShyZXNwb25zZS5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsICgpID0+IHtcbiAgICAgICAgICBmbHVzaCAmJiBmbHVzaCgpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSB8fCAndGV4dCc7XG5cbiAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzb2x2ZXJzW3V0aWxzLmZpbmRLZXkocmVzb2x2ZXJzLCByZXNwb25zZVR5cGUpIHx8ICd0ZXh0J10ocmVzcG9uc2UsIGNvbmZpZyk7XG5cbiAgICAhaXNTdHJlYW1SZXNwb25zZSAmJiB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBoZWFkZXJzOiBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfSlcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgaWYgKGVyciAmJiBlcnIubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgL2ZldGNoL2kudGVzdChlcnIubWVzc2FnZSkpIHtcbiAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSxcbiAgICAgICAge1xuICAgICAgICAgIGNhdXNlOiBlcnIuY2F1c2UgfHwgZXJyXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZXJyLCBlcnIgJiYgZXJyLmNvZGUsIGNvbmZpZywgcmVxdWVzdCk7XG4gIH1cbn0pO1xuXG5cbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCBmZXRjaEFkYXB0ZXIgZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXIsXG4gIGZldGNoOiBmZXRjaEFkYXB0ZXJcbn1cblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge3ZhbHVlfSk7XG4gIH1cbn0pO1xuXG5jb25zdCByZW5kZXJSZWFzb24gPSAocmVhc29uKSA9PiBgLSAke3JlYXNvbn1gO1xuXG5jb25zdCBpc1Jlc29sdmVkSGFuZGxlID0gKGFkYXB0ZXIpID0+IHV0aWxzLmlzRnVuY3Rpb24oYWRhcHRlcikgfHwgYWRhcHRlciA9PT0gbnVsbCB8fCBhZGFwdGVyID09PSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBZGFwdGVyOiAoYWRhcHRlcnMpID0+IHtcbiAgICBhZGFwdGVycyA9IHV0aWxzLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuXG4gICAgY29uc3Qge2xlbmd0aH0gPSBhZGFwdGVycztcbiAgICBsZXQgbmFtZU9yQWRhcHRlcjtcbiAgICBsZXQgYWRhcHRlcjtcblxuICAgIGNvbnN0IHJlamVjdGVkUmVhc29ucyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgICAgbGV0IGlkO1xuXG4gICAgICBhZGFwdGVyID0gbmFtZU9yQWRhcHRlcjtcblxuICAgICAgaWYgKCFpc1Jlc29sdmVkSGFuZGxlKG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICAgIGFkYXB0ZXIgPSBrbm93bkFkYXB0ZXJzWyhpZCA9IFN0cmluZyhuYW1lT3JBZGFwdGVyKSkudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKGBVbmtub3duIGFkYXB0ZXIgJyR7aWR9J2ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZWplY3RlZFJlYXNvbnNbaWQgfHwgJyMnICsgaV0gPSBhZGFwdGVyO1xuICAgIH1cblxuICAgIGlmICghYWRhcHRlcikge1xuXG4gICAgICBjb25zdCByZWFzb25zID0gT2JqZWN0LmVudHJpZXMocmVqZWN0ZWRSZWFzb25zKVxuICAgICAgICAubWFwKChbaWQsIHN0YXRlXSkgPT4gYGFkYXB0ZXIgJHtpZH0gYCArXG4gICAgICAgICAgKHN0YXRlID09PSBmYWxzZSA/ICdpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudCcgOiAnaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGQnKVxuICAgICAgICApO1xuXG4gICAgICBsZXQgcyA9IGxlbmd0aCA/XG4gICAgICAgIChyZWFzb25zLmxlbmd0aCA+IDEgPyAnc2luY2UgOlxcbicgKyByZWFzb25zLm1hcChyZW5kZXJSZWFzb24pLmpvaW4oJ1xcbicpIDogJyAnICsgcmVuZGVyUmVhc29uKHJlYXNvbnNbMF0pKSA6XG4gICAgICAgICdhcyBubyBhZGFwdGVyIHNwZWNpZmllZCc7XG5cbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBgVGhlcmUgaXMgbm8gc3VpdGFibGUgYWRhcHRlciB0byBkaXNwYXRjaCB0aGUgcmVxdWVzdCBgICsgcyxcbiAgICAgICAgJ0VSUl9OT1RfU1VQUE9SVCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG4gIH0sXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxLjcuOVwiOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxudmFsaWRhdG9ycy5zcGVsbGluZyA9IGZ1bmN0aW9uIHNwZWxsaW5nKGNvcnJlY3RTcGVsbGluZykge1xuICByZXR1cm4gKHZhbHVlLCBvcHQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgJHtvcHR9IGlzIGxpa2VseSBhIG1pc3NwZWxsaW5nIG9mICR7Y29ycmVjdFNwZWxsaW5nfWApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtib29sZWFuP30gYWxsb3dVbmtub3duXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmNsYXNzIEF4aW9zIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIGFzeW5jIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBsZXQgZHVtbXkgPSB7fTtcblxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA/IEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGR1bW15KSA6IChkdW1teSA9IG5ldyBFcnJvcigpKTtcblxuICAgICAgICAvLyBzbGljZSBvZmYgdGhlIEVycm9yOiAuLi4gbGluZVxuICAgICAgICBjb25zdCBzdGFjayA9IGR1bW15LnN0YWNrID8gZHVtbXkuc3RhY2sucmVwbGFjZSgvXi4rXFxuLywgJycpIDogJyc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGVyci5zdGFjayA9IHN0YWNrO1xuICAgICAgICAgICAgLy8gbWF0Y2ggd2l0aG91dCB0aGUgMiB0b3Agc3RhY2sgbGluZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrICYmICFTdHJpbmcoZXJyLnN0YWNrKS5lbmRzV2l0aChzdGFjay5yZXBsYWNlKC9eLitcXG4uK1xcbi8sICcnKSkpIHtcbiAgICAgICAgICAgIGVyci5zdGFjayArPSAnXFxuJyArIHN0YWNrXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlIHRoZSBjYXNlIHdoZXJlIFwic3RhY2tcIiBpcyBhbiB1bi13cml0YWJsZSBwcm9wZXJ0eVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBfcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICAgIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgICBjb25maWcudXJsID0gY29uZmlnT3JVcmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICAgIH1cblxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgICBjb25zdCB7dHJhbnNpdGlvbmFsLCBwYXJhbXNTZXJpYWxpemVyLCBoZWFkZXJzfSA9IGNvbmZpZztcblxuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyICE9IG51bGwpIHtcbiAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcmFtc1NlcmlhbGl6ZXIpKSB7XG4gICAgICAgIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZTogcGFyYW1zU2VyaWFsaXplclxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxuICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhjb25maWcsIHtcbiAgICAgIGJhc2VVcmw6IHZhbGlkYXRvcnMuc3BlbGxpbmcoJ2Jhc2VVUkwnKSxcbiAgICAgIHdpdGhYc3JmVG9rZW46IHZhbGlkYXRvcnMuc3BlbGxpbmcoJ3dpdGhYU1JGVG9rZW4nKVxuICAgIH0sIHRydWUpO1xuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxuICAgICAgaGVhZGVycy5jb21tb24sXG4gICAgICBoZWFkZXJzW2NvbmZpZy5tZXRob2RdXG4gICAgKTtcblxuICAgIGhlYWRlcnMgJiYgdXRpbHMuZm9yRWFjaChcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgbGV0IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGxlbiA9IGNoYWluLmxlbmd0aDtcblxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICBsZXQgbmV3Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogaXNGb3JtID8ge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kICsgJ0Zvcm0nXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9DYW5jZWxlZEVycm9yLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVQcm9taXNlO1xuXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSBvbmZ1bGZpbGxlZCA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICB0b0Fib3J0U2lnbmFsKCkge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBjb25zdCBhYm9ydCA9IChlcnIpID0+IHtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJzY3JpYmUoYWJvcnQpO1xuXG4gICAgY29udHJvbGxlci5zaWduYWwudW5zdWJzY3JpYmUgPSAoKSA9PiB0aGlzLnVuc3Vic2NyaWJlKGFib3J0KTtcblxuICAgIHJldHVybiBjb250cm9sbGVyLnNpZ25hbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gICAqL1xuICBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgY2FuY2VsID0gYztcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICBjYW5jZWxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMuaXNPYmplY3QocGF5bG9hZCkgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn1cbiIsImNvbnN0IEh0dHBTdGF0dXNDb2RlID0ge1xuICBDb250aW51ZTogMTAwLFxuICBTd2l0Y2hpbmdQcm90b2NvbHM6IDEwMSxcbiAgUHJvY2Vzc2luZzogMTAyLFxuICBFYXJseUhpbnRzOiAxMDMsXG4gIE9rOiAyMDAsXG4gIENyZWF0ZWQ6IDIwMSxcbiAgQWNjZXB0ZWQ6IDIwMixcbiAgTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uOiAyMDMsXG4gIE5vQ29udGVudDogMjA0LFxuICBSZXNldENvbnRlbnQ6IDIwNSxcbiAgUGFydGlhbENvbnRlbnQ6IDIwNixcbiAgTXVsdGlTdGF0dXM6IDIwNyxcbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXG4gIEltVXNlZDogMjI2LFxuICBNdWx0aXBsZUNob2ljZXM6IDMwMCxcbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxuICBGb3VuZDogMzAyLFxuICBTZWVPdGhlcjogMzAzLFxuICBOb3RNb2RpZmllZDogMzA0LFxuICBVc2VQcm94eTogMzA1LFxuICBVbnVzZWQ6IDMwNixcbiAgVGVtcG9yYXJ5UmVkaXJlY3Q6IDMwNyxcbiAgUGVybWFuZW50UmVkaXJlY3Q6IDMwOCxcbiAgQmFkUmVxdWVzdDogNDAwLFxuICBVbmF1dGhvcml6ZWQ6IDQwMSxcbiAgUGF5bWVudFJlcXVpcmVkOiA0MDIsXG4gIEZvcmJpZGRlbjogNDAzLFxuICBOb3RGb3VuZDogNDA0LFxuICBNZXRob2ROb3RBbGxvd2VkOiA0MDUsXG4gIE5vdEFjY2VwdGFibGU6IDQwNixcbiAgUHJveHlBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA0MDcsXG4gIFJlcXVlc3RUaW1lb3V0OiA0MDgsXG4gIENvbmZsaWN0OiA0MDksXG4gIEdvbmU6IDQxMCxcbiAgTGVuZ3RoUmVxdWlyZWQ6IDQxMSxcbiAgUHJlY29uZGl0aW9uRmFpbGVkOiA0MTIsXG4gIFBheWxvYWRUb29MYXJnZTogNDEzLFxuICBVcmlUb29Mb25nOiA0MTQsXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgSW1BVGVhcG90OiA0MTgsXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxuICBVbnByb2Nlc3NhYmxlRW50aXR5OiA0MjIsXG4gIExvY2tlZDogNDIzLFxuICBGYWlsZWREZXBlbmRlbmN5OiA0MjQsXG4gIFRvb0Vhcmx5OiA0MjUsXG4gIFVwZ3JhZGVSZXF1aXJlZDogNDI2LFxuICBQcmVjb25kaXRpb25SZXF1aXJlZDogNDI4LFxuICBUb29NYW55UmVxdWVzdHM6IDQyOSxcbiAgUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlOiA0MzEsXG4gIFVuYXZhaWxhYmxlRm9yTGVnYWxSZWFzb25zOiA0NTEsXG4gIEludGVybmFsU2VydmVyRXJyb3I6IDUwMCxcbiAgTm90SW1wbGVtZW50ZWQ6IDUwMSxcbiAgQmFkR2F0ZXdheTogNTAyLFxuICBTZXJ2aWNlVW5hdmFpbGFibGU6IDUwMyxcbiAgR2F0ZXdheVRpbWVvdXQ6IDUwNCxcbiAgSHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ6IDUwNSxcbiAgVmFyaWFudEFsc29OZWdvdGlhdGVzOiA1MDYsXG4gIEluc3VmZmljaWVudFN0b3JhZ2U6IDUwNyxcbiAgTG9vcERldGVjdGVkOiA1MDgsXG4gIE5vdEV4dGVuZGVkOiA1MTAsXG4gIE5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkOiA1MTEsXG59O1xuXG5PYmplY3QuZW50cmllcyhIdHRwU3RhdHVzQ29kZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gIEh0dHBTdGF0dXNDb2RlW3ZhbHVlXSA9IGtleTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIdHRwU3RhdHVzQ29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5jb25zdCBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbGVkRXJyb3IgPSBDYW5jZWxlZEVycm9yO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcbmF4aW9zLmlzQ2FuY2VsID0gaXNDYW5jZWw7XG5heGlvcy5WRVJTSU9OID0gVkVSU0lPTjtcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xuXG4vLyBFeHBvc2UgQXhpb3NFcnJvciBjbGFzc1xuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XG5cbi8vIGFsaWFzIGZvciBDYW5jZWxlZEVycm9yIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSBzcHJlYWQ7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IGlzQXhpb3NFcnJvcjtcblxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXG5heGlvcy5tZXJnZUNvbmZpZyA9IG1lcmdlQ29uZmlnO1xuXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5cbmF4aW9zLmZvcm1Ub0pTT04gPSB0aGluZyA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLmdldEFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiJdLCJuYW1lcyI6WyJiaW5kIiwiZm4iLCJ0aGlzQXJnIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImtpbmRPZiIsImNhY2hlIiwidGhpbmciLCJzdHIiLCJraW5kT2ZUZXN0IiwidHlwZSIsInR5cGVPZlRlc3QiLCJpc0FycmF5IiwiaXNVbmRlZmluZWQiLCJpc0J1ZmZlciIsInZhbCIsImlzRnVuY3Rpb24iLCJpc0FycmF5QnVmZmVyIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJyZXN1bHQiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNPYmplY3QiLCJpc0Jvb2xlYW4iLCJpc1BsYWluT2JqZWN0IiwicHJvdG90eXBlIiwiaXNEYXRlIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNGaWxlTGlzdCIsImlzU3RyZWFtIiwiaXNGb3JtRGF0YSIsImtpbmQiLCJpc1VSTFNlYXJjaFBhcmFtcyIsImlzUmVhZGFibGVTdHJlYW0iLCJpc1JlcXVlc3QiLCJpc1Jlc3BvbnNlIiwiaXNIZWFkZXJzIiwidHJpbSIsImZvckVhY2giLCJvYmoiLCJhbGxPd25LZXlzIiwiaSIsImwiLCJrZXlzIiwibGVuIiwia2V5IiwiZmluZEtleSIsIl9rZXkiLCJfZ2xvYmFsIiwiaXNDb250ZXh0RGVmaW5lZCIsImNvbnRleHQiLCJtZXJnZSIsImNhc2VsZXNzIiwiYXNzaWduVmFsdWUiLCJ0YXJnZXRLZXkiLCJleHRlbmQiLCJhIiwiYiIsInN0cmlwQk9NIiwiY29udGVudCIsImluaGVyaXRzIiwiY29uc3RydWN0b3IiLCJzdXBlckNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZXNjcmlwdG9ycyIsInRvRmxhdE9iamVjdCIsInNvdXJjZU9iaiIsImRlc3RPYmoiLCJmaWx0ZXIiLCJwcm9wRmlsdGVyIiwicHJvcCIsIm1lcmdlZCIsImVuZHNXaXRoIiwic2VhcmNoU3RyaW5nIiwicG9zaXRpb24iLCJsYXN0SW5kZXgiLCJ0b0FycmF5IiwiYXJyIiwiaXNUeXBlZEFycmF5IiwiVHlwZWRBcnJheSIsImZvckVhY2hFbnRyeSIsIml0ZXJhdG9yIiwicGFpciIsIm1hdGNoQWxsIiwicmVnRXhwIiwibWF0Y2hlcyIsImlzSFRNTEZvcm0iLCJ0b0NhbWVsQ2FzZSIsIm0iLCJwMSIsInAyIiwiaGFzT3duUHJvcGVydHkiLCJpc1JlZ0V4cCIsInJlZHVjZURlc2NyaXB0b3JzIiwicmVkdWNlciIsInJlZHVjZWREZXNjcmlwdG9ycyIsImRlc2NyaXB0b3IiLCJuYW1lIiwicmV0IiwiZnJlZXplTWV0aG9kcyIsInZhbHVlIiwidG9PYmplY3RTZXQiLCJhcnJheU9yU3RyaW5nIiwiZGVsaW1pdGVyIiwiZGVmaW5lIiwibm9vcCIsInRvRmluaXRlTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwiQUxQSEEiLCJESUdJVCIsIkFMUEhBQkVUIiwiZ2VuZXJhdGVTdHJpbmciLCJzaXplIiwiYWxwaGFiZXQiLCJsZW5ndGgiLCJpc1NwZWNDb21wbGlhbnRGb3JtIiwidG9KU09OT2JqZWN0Iiwic3RhY2siLCJ2aXNpdCIsInNvdXJjZSIsInRhcmdldCIsInJlZHVjZWRWYWx1ZSIsImlzQXN5bmNGbiIsImlzVGhlbmFibGUiLCJfc2V0SW1tZWRpYXRlIiwic2V0SW1tZWRpYXRlU3VwcG9ydGVkIiwicG9zdE1lc3NhZ2VTdXBwb3J0ZWQiLCJ0b2tlbiIsImNhbGxiYWNrcyIsImRhdGEiLCJjYiIsImFzYXAiLCJ1dGlscyQxIiwiQXhpb3NFcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiY29uZmlnIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXRpbHMiLCJlcnJvciIsImN1c3RvbVByb3BzIiwiYXhpb3NFcnJvciIsImh0dHBBZGFwdGVyIiwiaXNWaXNpdGFibGUiLCJyZW1vdmVCcmFja2V0cyIsInJlbmRlcktleSIsInBhdGgiLCJkb3RzIiwiaXNGbGF0QXJyYXkiLCJwcmVkaWNhdGVzIiwidG9Gb3JtRGF0YSIsImZvcm1EYXRhIiwib3B0aW9ucyIsIm9wdGlvbiIsIm1ldGFUb2tlbnMiLCJ2aXNpdG9yIiwiZGVmYXVsdFZpc2l0b3IiLCJpbmRleGVzIiwidXNlQmxvYiIsImNvbnZlcnRWYWx1ZSIsImVsIiwiaW5kZXgiLCJleHBvc2VkSGVscGVycyIsImJ1aWxkIiwiZW5jb2RlIiwiY2hhck1hcCIsIm1hdGNoIiwiQXhpb3NVUkxTZWFyY2hQYXJhbXMiLCJwYXJhbXMiLCJlbmNvZGVyIiwiX2VuY29kZSIsImJ1aWxkVVJMIiwidXJsIiwic2VyaWFsaXplRm4iLCJzZXJpYWxpemVkUGFyYW1zIiwiaGFzaG1hcmtJbmRleCIsIkludGVyY2VwdG9yTWFuYWdlciIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiaWQiLCJoIiwidHJhbnNpdGlvbmFsRGVmYXVsdHMiLCJVUkxTZWFyY2hQYXJhbXMkMSIsIkZvcm1EYXRhJDEiLCJCbG9iJDEiLCJwbGF0Zm9ybSQxIiwiVVJMU2VhcmNoUGFyYW1zIiwiRm9ybURhdGEiLCJCbG9iIiwiaGFzQnJvd3NlckVudiIsIl9uYXZpZ2F0b3IiLCJoYXNTdGFuZGFyZEJyb3dzZXJFbnYiLCJoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYiLCJvcmlnaW4iLCJwbGF0Zm9ybSIsIl9fc3ByZWFkVmFsdWVzIiwidG9VUkxFbmNvZGVkRm9ybSIsImhlbHBlcnMiLCJwYXJzZVByb3BQYXRoIiwiYXJyYXlUb09iamVjdCIsImZvcm1EYXRhVG9KU09OIiwiYnVpbGRQYXRoIiwiaXNOdW1lcmljS2V5IiwiaXNMYXN0Iiwic3RyaW5naWZ5U2FmZWx5IiwicmF3VmFsdWUiLCJwYXJzZXIiLCJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29udGVudFR5cGUiLCJoYXNKU09OQ29udGVudFR5cGUiLCJpc09iamVjdFBheWxvYWQiLCJfRm9ybURhdGEiLCJ0cmFuc2l0aW9uYWwiLCJmb3JjZWRKU09OUGFyc2luZyIsIkpTT05SZXF1ZXN0ZWQiLCJzdHJpY3RKU09OUGFyc2luZyIsInN0YXR1cyIsIm1ldGhvZCIsImlnbm9yZUR1cGxpY2F0ZU9mIiwicGFyc2VIZWFkZXJzIiwicmF3SGVhZGVycyIsInBhcnNlZCIsImxpbmUiLCIkaW50ZXJuYWxzIiwibm9ybWFsaXplSGVhZGVyIiwiaGVhZGVyIiwibm9ybWFsaXplVmFsdWUiLCJwYXJzZVRva2VucyIsInRva2VucyIsInRva2Vuc1JFIiwiaXNWYWxpZEhlYWRlck5hbWUiLCJtYXRjaEhlYWRlclZhbHVlIiwiaXNIZWFkZXJOYW1lRmlsdGVyIiwiZm9ybWF0SGVhZGVyIiwidyIsImNoYXIiLCJidWlsZEFjY2Vzc29ycyIsImFjY2Vzc29yTmFtZSIsIm1ldGhvZE5hbWUiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJBeGlvc0hlYWRlcnMiLCJ2YWx1ZU9yUmV3cml0ZSIsInJld3JpdGUiLCJzZWxmIiwic2V0SGVhZGVyIiwiX3ZhbHVlIiwiX2hlYWRlciIsIl9yZXdyaXRlIiwibEhlYWRlciIsInNldEhlYWRlcnMiLCJtYXRjaGVyIiwiZGVsZXRlZCIsImRlbGV0ZUhlYWRlciIsImZvcm1hdCIsIm5vcm1hbGl6ZWQiLCJ0YXJnZXRzIiwiYXNTdHJpbmdzIiwiZmlyc3QiLCJjb21wdXRlZCIsImFjY2Vzc29ycyIsImRlZmluZUFjY2Vzc29yIiwibWFwcGVkIiwiaGVhZGVyVmFsdWUiLCJ0cmFuc2Zvcm1EYXRhIiwiZm5zIiwiaXNDYW5jZWwiLCJDYW5jZWxlZEVycm9yIiwic2V0dGxlIiwicmVzb2x2ZSIsInJlamVjdCIsInZhbGlkYXRlU3RhdHVzIiwicGFyc2VQcm90b2NvbCIsInNwZWVkb21ldGVyIiwic2FtcGxlc0NvdW50IiwibWluIiwiYnl0ZXMiLCJ0aW1lc3RhbXBzIiwiaGVhZCIsInRhaWwiLCJmaXJzdFNhbXBsZVRTIiwiY2h1bmtMZW5ndGgiLCJub3ciLCJzdGFydGVkQXQiLCJieXRlc0NvdW50IiwicGFzc2VkIiwidGhyb3R0bGUiLCJmcmVxIiwidGltZXN0YW1wIiwidGhyZXNob2xkIiwibGFzdEFyZ3MiLCJ0aW1lciIsImludm9rZSIsImFyZ3MiLCJwcm9ncmVzc0V2ZW50UmVkdWNlciIsImxpc3RlbmVyIiwiaXNEb3dubG9hZFN0cmVhbSIsImJ5dGVzTm90aWZpZWQiLCJfc3BlZWRvbWV0ZXIiLCJsb2FkZWQiLCJ0b3RhbCIsInByb2dyZXNzQnl0ZXMiLCJyYXRlIiwiaW5SYW5nZSIsInByb2dyZXNzRXZlbnREZWNvcmF0b3IiLCJ0aHJvdHRsZWQiLCJsZW5ndGhDb21wdXRhYmxlIiwiYXN5bmNEZWNvcmF0b3IiLCJpc1VSTFNhbWVPcmlnaW4iLCJpc01TSUUiLCJjb29raWVzIiwiZXhwaXJlcyIsImRvbWFpbiIsInNlY3VyZSIsImNvb2tpZSIsImlzQWJzb2x1dGVVUkwiLCJjb21iaW5lVVJMcyIsImJhc2VVUkwiLCJyZWxhdGl2ZVVSTCIsImJ1aWxkRnVsbFBhdGgiLCJyZXF1ZXN0ZWRVUkwiLCJoZWFkZXJzVG9PYmplY3QiLCJtZXJnZUNvbmZpZyIsImNvbmZpZzEiLCJjb25maWcyIiwiZ2V0TWVyZ2VkVmFsdWUiLCJtZXJnZURlZXBQcm9wZXJ0aWVzIiwidmFsdWVGcm9tQ29uZmlnMiIsImRlZmF1bHRUb0NvbmZpZzIiLCJtZXJnZURpcmVjdEtleXMiLCJtZXJnZU1hcCIsImNvbmZpZ1ZhbHVlIiwicmVzb2x2ZUNvbmZpZyIsIm5ld0NvbmZpZyIsIndpdGhYU1JGVG9rZW4iLCJ4c3JmSGVhZGVyTmFtZSIsInhzcmZDb29raWVOYW1lIiwiYXV0aCIsInhzcmZWYWx1ZSIsImlzWEhSQWRhcHRlclN1cHBvcnRlZCIsInhockFkYXB0ZXIiLCJfY29uZmlnIiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsInJlc3BvbnNlVHlwZSIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJvbkNhbmNlbGVkIiwidXBsb2FkVGhyb3R0bGVkIiwiZG93bmxvYWRUaHJvdHRsZWQiLCJmbHVzaFVwbG9hZCIsImZsdXNoRG93bmxvYWQiLCJkb25lIiwib25sb2FkZW5kIiwicmVzcG9uc2VIZWFkZXJzIiwiZXJyIiwidGltZW91dEVycm9yTWVzc2FnZSIsImNhbmNlbCIsInByb3RvY29sIiwiY29tcG9zZVNpZ25hbHMiLCJzaWduYWxzIiwidGltZW91dCIsImNvbnRyb2xsZXIiLCJhYm9ydGVkIiwib25hYm9ydCIsInJlYXNvbiIsInVuc3Vic2NyaWJlIiwic2lnbmFsIiwic3RyZWFtQ2h1bmsiLCJjaHVuayIsImNodW5rU2l6ZSIsInBvcyIsImVuZCIsInJlYWRCeXRlcyIsIml0ZXJhYmxlIiwiX19hc3luY0dlbmVyYXRvciIsIml0ZXIiLCJfX2ZvckF3YWl0IiwicmVhZFN0cmVhbSIsIm1vcmUiLCJ0ZW1wIiwiX19hd2FpdCIsIl9feWllbGRTdGFyIiwic3RyZWFtIiwicmVhZGVyIiwidHJhY2tTdHJlYW0iLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJfb25GaW5pc2giLCJfX2FzeW5jIiwibG9hZGVkQnl0ZXMiLCJpc0ZldGNoU3VwcG9ydGVkIiwiaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCIsImVuY29kZVRleHQiLCJ0ZXN0Iiwic3VwcG9ydHNSZXF1ZXN0U3RyZWFtIiwiZHVwbGV4QWNjZXNzZWQiLCJoYXNDb250ZW50VHlwZSIsIkRFRkFVTFRfQ0hVTktfU0laRSIsInN1cHBvcnRzUmVzcG9uc2VTdHJlYW0iLCJyZXNvbHZlcnMiLCJyZXMiLCJfIiwiZ2V0Qm9keUxlbmd0aCIsImJvZHkiLCJyZXNvbHZlQm9keUxlbmd0aCIsImZldGNoQWRhcHRlciIsImNhbmNlbFRva2VuIiwid2l0aENyZWRlbnRpYWxzIiwiZmV0Y2hPcHRpb25zIiwiY29tcG9zZWRTaWduYWwiLCJyZXF1ZXN0Q29udGVudExlbmd0aCIsIl9yZXF1ZXN0IiwiY29udGVudFR5cGVIZWFkZXIiLCJmbHVzaCIsImlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQiLCJfX3NwcmVhZFByb3BzIiwiaXNTdHJlYW1SZXNwb25zZSIsInJlc3BvbnNlQ29udGVudExlbmd0aCIsInJlc3BvbnNlRGF0YSIsImtub3duQWRhcHRlcnMiLCJyZW5kZXJSZWFzb24iLCJpc1Jlc29sdmVkSGFuZGxlIiwiYWRhcHRlciIsImFkYXB0ZXJzIiwibmFtZU9yQWRhcHRlciIsInJlamVjdGVkUmVhc29ucyIsInJlYXNvbnMiLCJzdGF0ZSIsInMiLCJ0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiVkVSU0lPTiIsInZhbGlkYXRvcnMiLCJkZXByZWNhdGVkV2FybmluZ3MiLCJ2YWxpZGF0b3IiLCJ2ZXJzaW9uIiwiZm9ybWF0TWVzc2FnZSIsIm9wdCIsImRlc2MiLCJvcHRzIiwiY29ycmVjdFNwZWxsaW5nIiwiYXNzZXJ0T3B0aW9ucyIsInNjaGVtYSIsImFsbG93VW5rbm93biIsIkF4aW9zIiwiaW5zdGFuY2VDb25maWciLCJjb25maWdPclVybCIsImR1bW15IiwicGFyYW1zU2VyaWFsaXplciIsImNvbnRleHRIZWFkZXJzIiwicmVxdWVzdEludGVyY2VwdG9yQ2hhaW4iLCJzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiIsInByb21pc2UiLCJjaGFpbiIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImZ1bGxQYXRoIiwiZ2VuZXJhdGVIVFRQTWV0aG9kIiwiaXNGb3JtIiwiQ2FuY2VsVG9rZW4iLCJleGVjdXRvciIsInJlc29sdmVQcm9taXNlIiwib25mdWxmaWxsZWQiLCJfcmVzb2x2ZSIsImFib3J0IiwiYyIsInNwcmVhZCIsImNhbGxiYWNrIiwiaXNBeGlvc0Vycm9yIiwicGF5bG9hZCIsIkh0dHBTdGF0dXNDb2RlIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiaW5zdGFuY2UiLCJheGlvcyIsInByb21pc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxHQUFLQyxHQUFJQyxHQUFTO0FBQ3hDLFNBQU8sV0FBZ0I7QUFDckIsV0FBT0QsRUFBRyxNQUFNQyxHQUFTLFNBQVM7QUFBQSxFQUNuQztBQUNIO0FDQUEsTUFBTSxFQUFDLFVBQUFDLEdBQVEsSUFBSSxPQUFPLFdBQ3BCLEVBQUMsZ0JBQUFDLEdBQWMsSUFBSSxRQUVuQkMsSUFBVSxrQkFBQUMsTUFBUyxDQUFBQyxNQUFT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R0FBSSxDQUFDLEdBR3hEOGEsRUFBUyxTQUFTLFNBQWdCOUIsR0FBZ0I7QUFDaEQsV0FBTzRCLEdBQWV4SixFQUFZeUosR0FBZTdCLENBQWMsQ0FBQztBQUFBLEVBQ2pFLEdBRU04QjtBQUNUO0FBR0ssTUFBQ0MsSUFBUUgsR0FBZTdRLENBQVE7QUFHckNnUixFQUFNLFFBQVFoQztBQUdkZ0MsRUFBTSxnQkFBZ0JsTjtBQUN0QmtOLEVBQU0sY0FBY2Y7QUFDcEJlLEVBQU0sV0FBV25OO0FBQ2pCbU4sRUFBTSxVQUFVN0M7QUFDaEI2QyxFQUFNLGFBQWExVTtBQUduQjBVLEVBQU0sYUFBYTVWO0FBR25CNFYsRUFBTSxTQUFTQSxFQUFNO0FBR3JCQSxFQUFNLE1BQU0sU0FBYUMsR0FBVTtBQUNqQyxTQUFPLFFBQVEsSUFBSUEsQ0FBUTtBQUM3QjtBQUVBRCxFQUFNLFNBQVNSO0FBR2ZRLEVBQU0sZUFBZU47QUFHckJNLEVBQU0sY0FBYzNKO0FBRXBCMkosRUFBTSxlQUFlNU87QUFFckI0TyxFQUFNLGFBQWEsQ0FBQTNkLE1BQVNtTSxHQUFlOUQsRUFBTSxXQUFXckksQ0FBSyxJQUFJLElBQUksU0FBU0EsQ0FBSyxJQUFJQSxDQUFLO0FBRWhHMmQsRUFBTSxhQUFhckQsR0FBUztBQUU1QnFELEVBQU0saUJBQWlCSjtBQUV2QkksRUFBTSxVQUFVQTsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OF19
