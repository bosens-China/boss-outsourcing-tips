/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = {}, at = [], Be = () => {
}, $i = () => !1, hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ns = (e) => e.startsWith("onUpdate:"), le = Object.assign, ss = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ji = Object.prototype.hasOwnProperty, J = (e, t) => ji.call(e, t), N = Array.isArray, dt = (e) => pn(e) === "[object Map]", ar = (e) => pn(e) === "[object Set]", H = (e) => typeof e == "function", re = (e) => typeof e == "string", Ue = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", dr = (e) => (te(e) || H(e)) && H(e.then) && H(e.catch), hr = Object.prototype.toString, pn = (e) => hr.call(e), Vi = (e) => pn(e).slice(8, -1), pr = (e) => pn(e) === "[object Object]", rs = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rt = /* @__PURE__ */ ts(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ui = /-(\w)/g, Ee = gn(
  (e) => e.replace(Ui, (t, n) => n ? n.toUpperCase() : "")
), Ki = /\B([A-Z])/g, ft = gn(
  (e) => e.replace(Ki, "-$1").toLowerCase()
), mn = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sn = gn(
  (e) => e ? `on${mn(e)}` : ""
), Ye = (e, t) => !Object.is(e, t), En = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Wi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mr = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let As;
const _n = () => As || (As = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function is(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = re(s) ? Ji(s) : is(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (re(e) || te(e))
    return e;
}
const ki = /;(?![^(]*\))/g, Gi = /:([^]+)/, qi = /\/\*[^]*?\*\//g;
function Ji(e) {
  const t = {};
  return e.replace(qi, "").split(ki).forEach((n) => {
    if (n) {
      const s = n.split(Gi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ls(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = ls(e[n]);
      s && (t += s + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xi = /* @__PURE__ */ ts(Yi);
function _r(e) {
  return !!e || e === "";
}
const br = (e) => !!(e && e.__v_isRef === !0), Zi = (e) => re(e) ? e : e == null ? "" : N(e) || te(e) && (e.toString === hr || !H(e.toString)) ? br(e) ? Zi(e.value) : JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => br(t) ? yr(e, t.value) : dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[wn(s, i) + " =>"] = r, n),
    {}
  )
} : ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => wn(n))
} : Ue(t) ? wn(t) : te(t) && !N(t) && !pr(t) ? String(t) : t, wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ue(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ce;
class Qi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ce, !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zi() {
  return Ce;
}
let ee;
const An = /* @__PURE__ */ new WeakSet();
class vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, An.has(this) && (An.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fs(this), Tr(this);
    const t = ee, n = Ae;
    ee = this, Ae = !0;
    try {
      return this.fn();
    } finally {
      Sr(this), ee = t, Ae = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cs(t);
      this.deps = this.depsTail = void 0, Fs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? An.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $n(this) && this.run();
  }
  get dirty() {
    return $n(this);
  }
}
let xr = 0, It, Ot;
function Cr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ot, Ot = e;
    return;
  }
  e.next = It, It = e;
}
function os() {
  xr++;
}
function fs() {
  if (--xr > 0)
    return;
  if (Ot) {
    let t = Ot;
    for (Ot = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Sr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), cs(s), el(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function $n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Er(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Er(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nt))
    return;
  e.globalVersion = Nt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !$n(e)) {
    e.flags &= -3;
    return;
  }
  const n = ee, s = Ae;
  ee = e, Ae = !0;
  try {
    Tr(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ye(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ee = n, Ae = s, Sr(e), e.flags &= -3;
  }
}
function cs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      cs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function el(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ae = !0;
const wr = [];
function Ze() {
  wr.push(Ae), Ae = !1;
}
function Qe() {
  const e = wr.pop();
  Ae = e === void 0 ? !0 : e;
}
function Fs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = n;
    }
  }
}
let Nt = 0;
class tl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!ee || !Ae || ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ee)
      n = this.activeLink = new tl(ee, this), ee.deps ? (n.prevDep = ee.depsTail, ee.depsTail.nextDep = n, ee.depsTail = n) : ee.deps = ee.depsTail = n, Ar(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ee.depsTail, n.nextDep = void 0, ee.depsTail.nextDep = n, ee.depsTail = n, ee.deps === n && (ee.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nt++, this.notify(t);
  }
  notify(t) {
    os();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fs();
    }
  }
}
function Ar(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ar(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const nn = /* @__PURE__ */ new WeakMap(), it = Symbol(
  ""
), jn = Symbol(
  ""
), Bt = Symbol(
  ""
);
function ae(e, t, n) {
  if (Ae && ee) {
    let s = nn.get(e);
    s || nn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new us()), r.map = s, r.key = n), r.track();
  }
}
function je(e, t, n, s, r, i) {
  const l = nn.get(e);
  if (!l) {
    Nt++;
    return;
  }
  const o = (f) => {
    f && f.trigger();
  };
  if (os(), t === "clear")
    l.forEach(o);
  else {
    const f = N(e), a = f && rs(n);
    if (f && n === "length") {
      const c = Number(s);
      l.forEach((h, p) => {
        (p === "length" || p === Bt || !Ue(p) && p >= c) && o(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), a && o(l.get(Bt)), t) {
        case "add":
          f ? a && o(l.get("length")) : (o(l.get(it)), dt(e) && o(l.get(jn)));
          break;
        case "delete":
          f || (o(l.get(it)), dt(e) && o(l.get(jn)));
          break;
        case "set":
          dt(e) && o(l.get(it));
          break;
      }
  }
  fs();
}
function nl(e, t) {
  const n = nn.get(e);
  return n && n.get(t);
}
function ct(e) {
  const t = W(e);
  return t === e ? t : (ae(t, "iterate", Bt), Se(e) ? t : t.map(de));
}
function bn(e) {
  return ae(e = W(e), "iterate", Bt), e;
}
const sl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return ct(this).concat(
      ...e.map((t) => N(t) ? ct(t) : t)
    );
  },
  entries() {
    return Fn(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return He(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mn(this, "includes", e);
  },
  indexOf(...e) {
    return Mn(this, "indexOf", e);
  },
  join(e) {
    return ct(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Mn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ms(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ms(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
  },
  toReversed() {
    return ct(this).toReversed();
  },
  toSorted(e) {
    return ct(this).toSorted(e);
  },
  toSpliced(...e) {
    return ct(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return Fn(this, "values", de);
  }
};
function Fn(e, t, n) {
  const s = bn(e), r = s[t]();
  return s !== e && !Se(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const rl = Array.prototype;
function He(e, t, n, s, r, i) {
  const l = bn(e), o = l !== e && !Se(e), f = l[t];
  if (f !== rl[t]) {
    const h = f.apply(e, i);
    return o ? de(h) : h;
  }
  let a = n;
  l !== e && (o ? a = function(h, p) {
    return n.call(this, de(h), p, e);
  } : n.length > 2 && (a = function(h, p) {
    return n.call(this, h, p, e);
  }));
  const c = f.call(l, a, s);
  return o && r ? r(c) : c;
}
function Ms(e, t, n, s) {
  const r = bn(e);
  let i = n;
  return r !== e && (Se(e) ? n.length > 3 && (i = function(l, o, f) {
    return n.call(this, l, o, f, e);
  }) : i = function(l, o, f) {
    return n.call(this, l, de(o), f, e);
  }), r[t](i, ...s);
}
function Mn(e, t, n) {
  const s = W(e);
  ae(s, "iterate", Bt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ps(n[0]) ? (n[0] = W(n[0]), s[t](...n)) : r;
}
function wt(e, t, n = []) {
  Ze(), os();
  const s = W(e)[t].apply(e, n);
  return fs(), Qe(), s;
}
const il = /* @__PURE__ */ ts("__proto__,__v_isRef,__isVue"), Fr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ue)
);
function ll(e) {
  Ue(e) || (e = String(e));
  const t = W(this);
  return ae(t, "has", e), t.hasOwnProperty(e);
}
class Mr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? ml : Pr : i ? Or : Ir).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = N(t);
    if (!r) {
      let f;
      if (l && (f = sl[n]))
        return f;
      if (n === "hasOwnProperty")
        return ll;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : s
    );
    return (Ue(n) ? Fr.has(n) : il(n)) || (r || ae(t, "get", n), i) ? o : ce(o) ? l && rs(n) ? o : o.value : te(o) ? r ? Lr(o) : ds(o) : o;
  }
}
class Rr extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const f = lt(i);
      if (!Se(s) && !lt(s) && (i = W(i), s = W(s)), !N(t) && ce(i) && !ce(s))
        return f ? !1 : (i.value = s, !0);
    }
    const l = N(t) && rs(n) ? Number(n) < t.length : J(t, n), o = Reflect.set(
      t,
      n,
      s,
      ce(t) ? t : r
    );
    return t === W(r) && (l ? Ye(s, i) && je(t, "set", n, s) : je(t, "add", n, s)), o;
  }
  deleteProperty(t, n) {
    const s = J(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && je(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ue(n) || !Fr.has(n)) && ae(t, "has", n), s;
  }
  ownKeys(t) {
    return ae(
      t,
      "iterate",
      N(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class ol extends Mr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const fl = /* @__PURE__ */ new Rr(), cl = /* @__PURE__ */ new ol(), ul = /* @__PURE__ */ new Rr(!0);
const Vn = (e) => e, Gt = (e) => Reflect.getPrototypeOf(e);
function al(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = W(r), l = dt(i), o = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, a = r[e](...s), c = n ? Vn : t ? Un : de;
    return !t && ae(
      i,
      "iterate",
      f ? jn : it
    ), {
      // iterator protocol
      next() {
        const { value: h, done: p } = a.next();
        return p ? { value: h, done: p } : {
          value: o ? [c(h[0]), c(h[1])] : c(h),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, l = W(i), o = W(r);
      e || (Ye(r, o) && ae(l, "get", r), ae(l, "get", o));
      const { has: f } = Gt(l), a = t ? Vn : e ? Un : de;
      if (f.call(l, r))
        return a(i.get(r));
      if (f.call(l, o))
        return a(i.get(o));
      i !== l && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ae(W(r), "iterate", it), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, l = W(i), o = W(r);
      return e || (Ye(r, o) && ae(l, "has", r), ae(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o);
    },
    forEach(r, i) {
      const l = this, o = l.__v_raw, f = W(o), a = t ? Vn : e ? Un : de;
      return !e && ae(f, "iterate", it), o.forEach((c, h) => r.call(i, a(c), a(h), l));
    }
  };
  return le(
    n,
    e ? {
      add: qt("add"),
      set: qt("set"),
      delete: qt("delete"),
      clear: qt("clear")
    } : {
      add(r) {
        !t && !Se(r) && !lt(r) && (r = W(r));
        const i = W(this);
        return Gt(i).has.call(i, r) || (i.add(r), je(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Se(i) && !lt(i) && (i = W(i));
        const l = W(this), { has: o, get: f } = Gt(l);
        let a = o.call(l, r);
        a || (r = W(r), a = o.call(l, r));
        const c = f.call(l, r);
        return l.set(r, i), a ? Ye(i, c) && je(l, "set", r, i) : je(l, "add", r, i), this;
      },
      delete(r) {
        const i = W(this), { has: l, get: o } = Gt(i);
        let f = l.call(i, r);
        f || (r = W(r), f = l.call(i, r)), o && o.call(i, r);
        const a = i.delete(r);
        return f && je(i, "delete", r, void 0), a;
      },
      clear() {
        const r = W(this), i = r.size !== 0, l = r.clear();
        return i && je(
          r,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = al(r, e, t);
  }), n;
}
function as(e, t) {
  const n = dl(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    J(n, r) && r in s ? n : s,
    r,
    i
  );
}
const hl = {
  get: /* @__PURE__ */ as(!1, !1)
}, pl = {
  get: /* @__PURE__ */ as(!1, !0)
}, gl = {
  get: /* @__PURE__ */ as(!0, !1)
};
const Ir = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap();
function _l(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function bl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _l(Vi(e));
}
function ds(e) {
  return lt(e) ? e : hs(
    e,
    !1,
    fl,
    hl,
    Ir
  );
}
function yl(e) {
  return hs(
    e,
    !1,
    ul,
    pl,
    Or
  );
}
function Lr(e) {
  return hs(
    e,
    !0,
    cl,
    gl,
    Pr
  );
}
function hs(e, t, n, s, r) {
  if (!te(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = bl(e);
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, o), o;
}
function ht(e) {
  return lt(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function lt(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function ps(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function vl(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && gr(e, "__v_skip", !0), e;
}
const de = (e) => te(e) ? ds(e) : e, Un = (e) => te(e) ? Lr(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Zt(e) {
  return Dr(e, !1);
}
function Af(e) {
  return Dr(e, !0);
}
function Dr(e, t) {
  return ce(e) ? e : new xl(e, t);
}
class xl {
  constructor(t, n) {
    this.dep = new us(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : de(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Se(t) || lt(t);
    t = s ? t : W(t), Ye(t, n) && (this._rawValue = t, this._value = s ? t : de(t), this.dep.trigger());
  }
}
function Cl(e) {
  return ce(e) ? e.value : e;
}
const Tl = {
  get: (e, t, n) => t === "__v_raw" ? e : Cl(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ce(r) && !ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Nr(e) {
  return ht(e) ? e : new Proxy(e, Tl);
}
function Ff(e) {
  const t = N(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Br(e, n);
  return t;
}
class Sl {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return nl(W(this._object), this._key);
  }
}
class El {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Mf(e, t, n) {
  return ce(e) ? e : H(e) ? new El(e) : te(e) && arguments.length > 1 ? Br(e, t, n) : Zt(e);
}
function Br(e, t, n) {
  const s = e[t];
  return ce(s) ? s : new Sl(e, t, n);
}
class wl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return Cr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Er(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Al(e, t, n = !1) {
  let s, r;
  return H(e) ? s = e : (s = e.get, r = e.set), new wl(s, r, n);
}
const Jt = {}, sn = /* @__PURE__ */ new WeakMap();
let rt;
function Fl(e, t = !1, n = rt) {
  if (n) {
    let s = sn.get(n);
    s || sn.set(n, s = []), s.push(e);
  }
}
function Ml(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: l, augmentJob: o, call: f } = n, a = (R) => r ? R : Se(R) || r === !1 || r === 0 ? Ve(R, 1) : Ve(R);
  let c, h, p, _, C = !1, x = !1;
  if (ce(e) ? (h = () => e.value, C = Se(e)) : ht(e) ? (h = () => a(e), C = !0) : N(e) ? (x = !0, C = e.some((R) => ht(R) || Se(R)), h = () => e.map((R) => {
    if (ce(R))
      return R.value;
    if (ht(R))
      return a(R);
    if (H(R))
      return f ? f(R, 2) : R();
  })) : H(e) ? t ? h = f ? () => f(e, 2) : e : h = () => {
    if (p) {
      Ze();
      try {
        p();
      } finally {
        Qe();
      }
    }
    const R = rt;
    rt = c;
    try {
      return f ? f(e, 3, [_]) : e(_);
    } finally {
      rt = R;
    }
  } : h = Be, t && r) {
    const R = h, F = r === !0 ? 1 / 0 : r;
    h = () => Ve(R(), F);
  }
  const V = zi(), I = () => {
    c.stop(), V && V.active && ss(V.effects, c);
  };
  if (i && t) {
    const R = t;
    t = (...F) => {
      R(...F), I();
    };
  }
  let j = x ? new Array(e.length).fill(Jt) : Jt;
  const L = (R) => {
    if (!(!(c.flags & 1) || !c.dirty && !R))
      if (t) {
        const F = c.run();
        if (r || C || (x ? F.some((O, k) => Ye(O, j[k])) : Ye(F, j))) {
          p && p();
          const O = rt;
          rt = c;
          try {
            const k = [
              F,
              // pass undefined as the old value when it's changed for the first time
              j === Jt ? void 0 : x && j[0] === Jt ? [] : j,
              _
            ];
            f ? f(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            ), j = F;
          } finally {
            rt = O;
          }
        }
      } else
        c.run();
  };
  return o && o(L), c = new vr(h), c.scheduler = l ? () => l(L, !1) : L, _ = (R) => Fl(R, !1, c), p = c.onStop = () => {
    const R = sn.get(c);
    if (R) {
      if (f)
        f(R, 4);
      else
        for (const F of R) F();
      sn.delete(c);
    }
  }, t ? s ? L(!0) : j = c.run() : l ? l(L.bind(null, !0), !0) : c.run(), I.pause = c.pause.bind(c), I.resume = c.resume.bind(c), I.stop = I, I;
}
function Ve(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    Ve(e.value, t, n);
  else if (N(e))
    for (let s = 0; s < e.length; s++)
      Ve(e[s], t, n);
  else if (ar(e) || dt(e))
    e.forEach((s) => {
      Ve(s, t, n);
    });
  else if (pr(e)) {
    for (const s in e)
      Ve(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ve(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Vt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Ct(r, t, n);
  }
}
function Fe(e, t, n, s) {
  if (H(e)) {
    const r = Vt(e, t, n, s);
    return r && dr(r) && r.catch((i) => {
      Ct(i, t, n);
    }), r;
  }
  if (N(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, n, s));
    return r;
  }
}
function Ct(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || X;
  if (t) {
    let o = t.parent;
    const f = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, f, a) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      Ze(), Vt(i, null, 10, [
        e,
        f,
        a
      ]), Qe();
      return;
    }
  }
  Rl(e, n, r, s, l);
}
function Rl(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ge = [];
let De = -1;
const pt = [];
let Ge = null, ut = 0;
const Hr = /* @__PURE__ */ Promise.resolve();
let rn = null;
function Il(e) {
  const t = rn || Hr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ol(e) {
  let t = De + 1, n = ge.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ge[s], i = Ht(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function gs(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = ge[ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? ge.push(e) : ge.splice(Ol(t), 0, e), e.flags |= 1, $r();
  }
}
function $r() {
  rn || (rn = Hr.then(Vr));
}
function Kn(e) {
  N(e) ? pt.push(...e) : Ge && e.id === -1 ? Ge.splice(ut + 1, 0, e) : e.flags & 1 || (pt.push(e), e.flags |= 1), $r();
}
function Rs(e, t, n = De + 1) {
  for (; n < ge.length; n++) {
    const s = ge[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ge.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function jr(e) {
  if (pt.length) {
    const t = [...new Set(pt)].sort(
      (n, s) => Ht(n) - Ht(s)
    );
    if (pt.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, ut = 0; ut < Ge.length; ut++) {
      const n = Ge[ut];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ge = null, ut = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vr(e) {
  try {
    for (De = 0; De < ge.length; De++) {
      const t = ge[De];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Vt(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; De < ge.length; De++) {
      const t = ge[De];
      t && (t.flags &= -2);
    }
    De = -1, ge.length = 0, jr(), rn = null, (ge.length || pt.length) && Vr();
  }
}
let fe = null, Ur = null;
function ln(e) {
  const t = fe;
  return fe = e, Ur = e && e.type.__scopeId || null, t;
}
function Pl(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Gs(-1);
    const i = ln(t);
    let l;
    try {
      l = e(...r);
    } finally {
      ln(i), s._d && Gs(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Rf(e, t) {
  if (fe === null)
    return e;
  const n = Cn(fe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, l, o, f = X] = t[r];
    i && (H(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ve(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: f
    }));
  }
  return e;
}
function tt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    i && (o.oldValue = i[l].value);
    let f = o.dir[s];
    f && (Ze(), Fe(f, n, 8, [
      e.el,
      o,
      e,
      t
    ]), Qe());
  }
}
const Kr = Symbol("_vte"), Wr = (e) => e.__isTeleport, Pt = (e) => e && (e.disabled || e.disabled === ""), Is = (e) => e && (e.defer || e.defer === ""), Os = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement, Ps = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Wn = (e, t) => {
  const n = e && e.to;
  return re(n) ? t ? t(n) : null : n;
}, kr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, i, l, o, f, a) {
    const {
      mc: c,
      pc: h,
      pbc: p,
      o: { insert: _, querySelector: C, createText: x, createComment: V }
    } = a, I = Pt(t.props);
    let { shapeFlag: j, children: L, dynamicChildren: R } = t;
    if (e == null) {
      const F = t.el = x(""), O = t.anchor = x("");
      _(F, n, s), _(O, n, s);
      const k = (M, B) => {
        j & 16 && (r && r.isCE && (r.ce._teleportTarget = M), c(
          L,
          M,
          B,
          r,
          i,
          l,
          o,
          f
        ));
      }, G = () => {
        const M = t.target = Wn(t.props, C), B = Gr(M, t, x, _);
        M && (l !== "svg" && Os(M) ? l = "svg" : l !== "mathml" && Ps(M) && (l = "mathml"), I || (k(M, B), Qt(t, !1)));
      };
      I && (k(n, O), Qt(t, !0)), Is(t.props) ? pe(() => {
        G(), t.el.__isMounted = !0;
      }, i) : G();
    } else {
      if (Is(t.props) && !e.el.__isMounted) {
        pe(() => {
          kr.process(
            e,
            t,
            n,
            s,
            r,
            i,
            l,
            o,
            f,
            a
          ), delete e.el.__isMounted;
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const F = t.anchor = e.anchor, O = t.target = e.target, k = t.targetAnchor = e.targetAnchor, G = Pt(e.props), M = G ? n : O, B = G ? F : k;
      if (l === "svg" || Os(O) ? l = "svg" : (l === "mathml" || Ps(O)) && (l = "mathml"), R ? (p(
        e.dynamicChildren,
        R,
        M,
        r,
        i,
        l,
        o
      ), ys(e, t, !0)) : f || h(
        e,
        t,
        M,
        B,
        r,
        i,
        l,
        o,
        !1
      ), I)
        G ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Yt(
          t,
          n,
          F,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const U = t.target = Wn(
          t.props,
          C
        );
        U && Yt(
          t,
          U,
          null,
          a,
          0
        );
      } else G && Yt(
        t,
        O,
        k,
        a,
        1
      );
      Qt(t, I);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, i) {
    const {
      shapeFlag: l,
      children: o,
      anchor: f,
      targetStart: a,
      targetAnchor: c,
      target: h,
      props: p
    } = e;
    if (h && (r(a), r(c)), i && r(f), l & 16) {
      const _ = i || !Pt(p);
      for (let C = 0; C < o.length; C++) {
        const x = o[C];
        s(
          x,
          t,
          n,
          _,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: Yt,
  hydrate: Ll
};
function Yt(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: o, shapeFlag: f, children: a, props: c } = e, h = i === 2;
  if (h && s(l, t, n), (!h || Pt(c)) && f & 16)
    for (let p = 0; p < a.length; p++)
      r(
        a[p],
        t,
        n,
        2
      );
  h && s(o, t, n);
}
function Ll(e, t, n, s, r, i, {
  o: { nextSibling: l, parentNode: o, querySelector: f, insert: a, createText: c }
}, h) {
  const p = t.target = Wn(
    t.props,
    f
  );
  if (p) {
    const _ = Pt(t.props), C = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        t.anchor = h(
          l(e),
          t,
          o(e),
          n,
          s,
          r,
          i
        ), t.targetStart = C, t.targetAnchor = C && l(C);
      else {
        t.anchor = l(e);
        let x = C;
        for (; x; ) {
          if (x && x.nodeType === 8) {
            if (x.data === "teleport start anchor")
              t.targetStart = x;
            else if (x.data === "teleport anchor") {
              t.targetAnchor = x, p._lpa = t.targetAnchor && l(t.targetAnchor);
              break;
            }
          }
          x = l(x);
        }
        t.targetAnchor || Gr(p, t, c, a), h(
          C && l(C),
          t,
          p,
          n,
          s,
          r,
          i
        );
      }
    Qt(t, _);
  }
  return t.anchor && l(t.anchor);
}
const If = kr;
function Qt(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (t ? (s = e.el, r = e.anchor) : (s = e.targetStart, r = e.targetAnchor); s && s !== r; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Gr(e, t, n, s) {
  const r = t.targetStart = n(""), i = t.targetAnchor = n("");
  return r[Kr] = i, e && (s(r, e), s(i, e)), i;
}
const qe = Symbol("_leaveCb"), Xt = Symbol("_enterCb");
function qr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return zr(() => {
    e.isMounted = !0;
  }), ti(() => {
    e.isUnmounting = !0;
  }), e;
}
const Te = [Function, Array], Jr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Te,
  onEnter: Te,
  onAfterEnter: Te,
  onEnterCancelled: Te,
  // leave
  onBeforeLeave: Te,
  onLeave: Te,
  onAfterLeave: Te,
  onLeaveCancelled: Te,
  // appear
  onBeforeAppear: Te,
  onAppear: Te,
  onAfterAppear: Te,
  onAppearCancelled: Te
}, Yr = (e) => {
  const t = e.subTree;
  return t.component ? Yr(t.component) : t;
}, Dl = {
  name: "BaseTransition",
  props: Jr,
  setup(e, { slots: t }) {
    const n = wi(), s = qr();
    return () => {
      const r = t.default && ms(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = Xr(r), l = W(e), { mode: o } = l;
      if (s.isLeaving)
        return Rn(i);
      const f = Ls(i);
      if (!f)
        return Rn(i);
      let a = $t(
        f,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => a = h
      );
      f.type !== ue && ot(f, a);
      let c = n.subTree && Ls(n.subTree);
      if (c && c.type !== ue && !Ne(f, c) && Yr(n).type !== ue) {
        let h = $t(
          c,
          l,
          s,
          n
        );
        if (ot(c, h), o === "out-in" && f.type !== ue)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, Rn(i);
        o === "in-out" && f.type !== ue ? h.delayLeave = (p, _, C) => {
          const x = Zr(
            s,
            c
          );
          x[String(c.key)] = c, p[qe] = () => {
            _(), p[qe] = void 0, delete a.delayedLeave, c = void 0;
          }, a.delayedLeave = () => {
            C(), delete a.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Xr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ue) {
        t = n;
        break;
      }
  }
  return t;
}
const Nl = Dl;
function Zr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function $t(e, t, n, s, r) {
  const {
    appear: i,
    mode: l,
    persisted: o = !1,
    onBeforeEnter: f,
    onEnter: a,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: p,
    onLeave: _,
    onAfterLeave: C,
    onLeaveCancelled: x,
    onBeforeAppear: V,
    onAppear: I,
    onAfterAppear: j,
    onAppearCancelled: L
  } = t, R = String(e.key), F = Zr(n, e), O = (M, B) => {
    M && Fe(
      M,
      s,
      9,
      B
    );
  }, k = (M, B) => {
    const U = B[1];
    O(M, B), N(M) ? M.every((w) => w.length <= 1) && U() : M.length <= 1 && U();
  }, G = {
    mode: l,
    persisted: o,
    beforeEnter(M) {
      let B = f;
      if (!n.isMounted)
        if (i)
          B = V || f;
        else
          return;
      M[qe] && M[qe](
        !0
        /* cancelled */
      );
      const U = F[R];
      U && Ne(e, U) && U.el[qe] && U.el[qe](), O(B, [M]);
    },
    enter(M) {
      let B = a, U = c, w = h;
      if (!n.isMounted)
        if (i)
          B = I || a, U = j || c, w = L || h;
        else
          return;
      let q = !1;
      const se = M[Xt] = (me) => {
        q || (q = !0, me ? O(w, [M]) : O(U, [M]), G.delayedLeave && G.delayedLeave(), M[Xt] = void 0);
      };
      B ? k(B, [M, se]) : se();
    },
    leave(M, B) {
      const U = String(e.key);
      if (M[Xt] && M[Xt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      O(p, [M]);
      let w = !1;
      const q = M[qe] = (se) => {
        w || (w = !0, B(), se ? O(x, [M]) : O(C, [M]), M[qe] = void 0, F[U] === e && delete F[U]);
      };
      F[U] = e, _ ? k(_, [M, q]) : q();
    },
    clone(M) {
      const B = $t(
        M,
        t,
        n,
        s,
        r
      );
      return r && r(B), B;
    }
  };
  return G;
}
function Rn(e) {
  if (Ut(e))
    return e = Xe(e), e.children = null, e;
}
function Ls(e) {
  if (!Ut(e))
    return Wr(e.type) && e.children ? Xr(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && H(n.default))
      return n.default();
  }
}
function ot(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ot(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ms(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const o = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === be ? (l.patchFlag & 128 && r++, s = s.concat(
      ms(l.children, t, o)
    )) : (t || l.type !== ue) && s.push(o != null ? Xe(l, { key: o }) : l);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bl(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function _s(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function on(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach(
      (C, x) => on(
        C,
        t && (N(t) ? t[x] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (gt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && on(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Cn(s.component) : s.el, l = r ? null : i, { i: o, r: f } = e, a = t && t.r, c = o.refs === X ? o.refs = {} : o.refs, h = o.setupState, p = W(h), _ = h === X ? () => !1 : (C) => J(p, C);
  if (a != null && a !== f && (re(a) ? (c[a] = null, _(a) && (h[a] = null)) : ce(a) && (a.value = null)), H(f))
    Vt(f, o, 12, [l, c]);
  else {
    const C = re(f), x = ce(f);
    if (C || x) {
      const V = () => {
        if (e.f) {
          const I = C ? _(f) ? h[f] : c[f] : f.value;
          r ? N(I) && ss(I, i) : N(I) ? I.includes(i) || I.push(i) : C ? (c[f] = [i], _(f) && (h[f] = c[f])) : (f.value = [i], e.k && (c[e.k] = f.value));
        } else C ? (c[f] = l, _(f) && (h[f] = l)) : x && (f.value = l, e.k && (c[e.k] = l));
      };
      l ? (V.id = -1, pe(V, n)) : V();
    }
  }
}
const Ds = (e) => e.nodeType === 8;
_n().requestIdleCallback;
_n().cancelIdleCallback;
function Hl(e, t) {
  if (Ds(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Ds(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const gt = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Of(e) {
  H(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: i,
    timeout: l,
    // undefined = never times out
    suspensible: o = !0,
    onError: f
  } = e;
  let a = null, c, h = 0;
  const p = () => (h++, a = null, _()), _ = () => {
    let C;
    return a || (C = a = t().catch((x) => {
      if (x = x instanceof Error ? x : new Error(String(x)), f)
        return new Promise((V, I) => {
          f(x, () => V(p()), () => I(x), h + 1);
        });
      throw x;
    }).then((x) => C !== a && a ? a : (x && (x.__esModule || x[Symbol.toStringTag] === "Module") && (x = x.default), c = x, x)));
  };
  return /* @__PURE__ */ Bl({
    name: "AsyncComponentWrapper",
    __asyncLoader: _,
    __asyncHydrate(C, x, V) {
      const I = i ? () => {
        const j = i(
          V,
          (L) => Hl(C, L)
        );
        j && (x.bum || (x.bum = [])).push(j);
      } : V;
      c ? I() : _().then(() => !x.isUnmounted && I());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const C = oe;
      if (_s(C), c)
        return () => In(c, C);
      const x = (L) => {
        a = null, Ct(
          L,
          C,
          13,
          !s
        );
      };
      if (o && C.suspense || vt)
        return _().then((L) => () => In(L, C)).catch((L) => (x(L), () => s ? ie(s, {
          error: L
        }) : null));
      const V = Zt(!1), I = Zt(), j = Zt(!!r);
      return r && setTimeout(() => {
        j.value = !1;
      }, r), l != null && setTimeout(() => {
        if (!V.value && !I.value) {
          const L = new Error(
            `Async component timed out after ${l}ms.`
          );
          x(L), I.value = L;
        }
      }, l), _().then(() => {
        V.value = !0, C.parent && Ut(C.parent.vnode) && C.parent.update();
      }).catch((L) => {
        x(L), I.value = L;
      }), () => {
        if (V.value && c)
          return In(c, C);
        if (I.value && s)
          return ie(s, {
            error: I.value
          });
        if (n && !j.value)
          return ie(n);
      };
    }
  });
}
function In(e, t) {
  const { ref: n, props: s, children: r, ce: i } = t.vnode, l = ie(e, s, r);
  return l.ref = n, l.ce = i, delete t.vnode.ce, l;
}
const Ut = (e) => e.type.__isKeepAlive;
function $l(e, t) {
  Qr(e, "a", t);
}
function jl(e, t) {
  Qr(e, "da", t);
}
function Qr(e, t, n = oe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (yn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ut(r.parent.vnode) && Vl(s, t, n, r), r = r.parent;
  }
}
function Vl(e, t, n, s) {
  const r = yn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ni(() => {
    ss(s[t], r);
  }, n);
}
function yn(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      Ze();
      const o = Kt(n), f = Fe(t, n, e, l);
      return o(), Qe(), f;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ke = (e) => (t, n = oe) => {
  (!vt || e === "sp") && yn(e, (...s) => t(...s), n);
}, Ul = Ke("bm"), zr = Ke("m"), Kl = Ke(
  "bu"
), ei = Ke("u"), ti = Ke(
  "bum"
), ni = Ke("um"), Wl = Ke(
  "sp"
), kl = Ke("rtg"), Gl = Ke("rtc");
function ql(e, t = oe) {
  yn("ec", e, t);
}
const Jl = "components", si = Symbol.for("v-ndc");
function Pf(e) {
  return re(e) ? Yl(Jl, e, !1) || e : e || si;
}
function Yl(e, t, n = !0, s = !1) {
  const r = fe || oe;
  if (r) {
    const i = r.type;
    {
      const o = Ko(
        i,
        !1
      );
      if (o && (o === t || o === Ee(t) || o === mn(Ee(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ns(r[e] || i[e], t) || // global registration
      Ns(r.appContext[e], t)
    );
    return !l && s ? i : l;
  }
}
function Ns(e, t) {
  return e && (e[t] || e[Ee(t)] || e[mn(Ee(t))]);
}
function Lf(e, t, n, s) {
  let r;
  const i = n, l = N(e);
  if (l || re(e)) {
    const o = l && ht(e);
    let f = !1;
    o && (f = !Se(e), e = bn(e)), r = new Array(e.length);
    for (let a = 0, c = e.length; a < c; a++)
      r[a] = t(
        f ? de(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, i);
  } else if (te(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, f) => t(o, f, void 0, i)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let f = 0, a = o.length; f < a; f++) {
        const c = o[f];
        r[f] = t(e[c], c, f, i);
      }
    }
  else
    r = [];
  return r;
}
function Df(e, t, n = {}, s, r) {
  if (fe.ce || fe.parent && gt(fe.parent) && fe.parent.ce)
    return cn(), Xn(
      be,
      null,
      [ie("slot", n, s)],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), cn();
  const l = i && ri(i(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  l && l.key, f = Xn(
    be,
    {
      key: (o && !Ue(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      ""
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function ri(e) {
  return e.some((t) => yt(t) ? !(t.type === ue || t.type === be && !ri(t.children)) : !0) ? e : null;
}
const kn = (e) => e ? Ai(e) ? Cn(e) : kn(e.parent) : null, Lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => kn(e.parent),
    $root: (e) => kn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Il.bind(e.proxy)),
    $watch: (e) => bo.bind(e)
  })
), On = (e, t) => e !== X && !e.__isScriptSetup && J(e, t), Xl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: l, type: o, appContext: f } = e;
    let a;
    if (t[0] !== "$") {
      const _ = l[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (On(s, t))
          return l[t] = 1, s[t];
        if (r !== X && J(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && J(a, t)
        )
          return l[t] = 3, i[t];
        if (n !== X && J(n, t))
          return l[t] = 4, n[t];
        Gn && (l[t] = 0);
      }
    }
    const c = Lt[t];
    let h, p;
    if (c)
      return t === "$attrs" && ae(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== X && J(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      p = f.config.globalProperties, J(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return On(r, t) ? (r[t] = n, !0) : s !== X && J(s, t) ? (s[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, l) {
    let o;
    return !!n[l] || e !== X && J(e, l) || On(t, l) || (o = i[0]) && J(o, l) || J(s, l) || J(Lt, l) || J(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Bs(e) {
  return N(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Gn = !0;
function Zl(e) {
  const t = li(e), n = e.proxy, s = e.ctx;
  Gn = !1, t.beforeCreate && Hs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: o,
    provide: f,
    inject: a,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: p,
    beforeUpdate: _,
    updated: C,
    activated: x,
    deactivated: V,
    beforeDestroy: I,
    beforeUnmount: j,
    destroyed: L,
    unmounted: R,
    render: F,
    renderTracked: O,
    renderTriggered: k,
    errorCaptured: G,
    serverPrefetch: M,
    // public API
    expose: B,
    inheritAttrs: U,
    // assets
    components: w,
    directives: q,
    filters: se
  } = t;
  if (a && Ql(a, s, null), l)
    for (const Z in l) {
      const Q = l[Z];
      H(Q) && (s[Z] = Q.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    te(Z) && (e.data = ds(Z));
  }
  if (Gn = !0, i)
    for (const Z in i) {
      const Q = i[Z], ze = H(Q) ? Q.bind(n, n) : H(Q.get) ? Q.get.bind(n, n) : Be, Wt = !H(Q) && H(Q.set) ? Q.set.bind(n) : Be, et = ko({
        get: ze,
        set: Wt
      });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Me) => et.value = Me
      });
    }
  if (o)
    for (const Z in o)
      ii(o[Z], s, n, Z);
  if (f) {
    const Z = H(f) ? f.call(n) : f;
    Reflect.ownKeys(Z).forEach((Q) => {
      ro(Q, Z[Q]);
    });
  }
  c && Hs(c, e, "c");
  function ne(Z, Q) {
    N(Q) ? Q.forEach((ze) => Z(ze.bind(n))) : Q && Z(Q.bind(n));
  }
  if (ne(Ul, h), ne(zr, p), ne(Kl, _), ne(ei, C), ne($l, x), ne(jl, V), ne(ql, G), ne(Gl, O), ne(kl, k), ne(ti, j), ne(ni, R), ne(Wl, M), N(B))
    if (B.length) {
      const Z = e.exposed || (e.exposed = {});
      B.forEach((Q) => {
        Object.defineProperty(Z, Q, {
          get: () => n[Q],
          set: (ze) => n[Q] = ze
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Be && (e.render = F), U != null && (e.inheritAttrs = U), w && (e.components = w), q && (e.directives = q), M && _s(e);
}
function Ql(e, t, n = Be) {
  N(e) && (e = qn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    te(r) ? "default" in r ? i = zt(
      r.from || s,
      r.default,
      !0
    ) : i = zt(r.from || s) : i = zt(r), ce(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Hs(e, t, n) {
  Fe(
    N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ii(e, t, n, s) {
  let r = s.includes(".") ? bi(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    H(i) && Ln(r, i);
  } else if (H(e))
    Ln(r, e.bind(n));
  else if (te(e))
    if (N(e))
      e.forEach((i) => ii(i, t, n, s));
    else {
      const i = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(i) && Ln(r, i, e);
    }
}
function li(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let f;
  return o ? f = o : !r.length && !n && !s ? f = t : (f = {}, r.length && r.forEach(
    (a) => fn(f, a, l, !0)
  ), fn(f, t, l)), te(t) && i.set(t, f), f;
}
function fn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && fn(e, i, n, !0), r && r.forEach(
    (l) => fn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const o = zl[l] || n && n[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const zl = {
  data: $s,
  props: js,
  emits: js,
  // objects
  methods: Mt,
  computed: Mt,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Mt,
  directives: Mt,
  // watch
  watch: to,
  // provide / inject
  provide: $s,
  inject: eo
};
function $s(e, t) {
  return t ? e ? function() {
    return le(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function eo(e, t) {
  return Mt(qn(e), qn(t));
}
function qn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function js(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Bs(e),
    Bs(t != null ? t : {})
  ) : t;
}
function to(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = he(e[s], t[s]);
  return n;
}
function oi() {
  return {
    app: null,
    config: {
      isNativeTag: $i,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let no = 0;
function so(e, t) {
  return function(s, r = null) {
    H(s) || (s = le({}, s)), r != null && !te(r) && (r = null);
    const i = oi(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let f = !1;
    const a = i.app = {
      _uid: no++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qo,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return l.has(c) || (c && H(c.install) ? (l.add(c), c.install(a, ...h)) : H(c) && (l.add(c), c(a, ...h))), a;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a;
      },
      component(c, h) {
        return h ? (i.components[c] = h, a) : i.components[c];
      },
      directive(c, h) {
        return h ? (i.directives[c] = h, a) : i.directives[c];
      },
      mount(c, h, p) {
        if (!f) {
          const _ = a._ceVNode || ie(s, r);
          return _.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(_, c, p), f = !0, a._container = c, c.__vue_app__ = a, Cn(_.component);
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        f && (Fe(
          o,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, a;
      },
      runWithContext(c) {
        const h = mt;
        mt = a;
        try {
          return c();
        } finally {
          mt = h;
        }
      }
    };
    return a;
  };
}
let mt = null;
function ro(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), n[e] = t;
  }
}
function zt(e, t, n = !1) {
  const s = oe || fe;
  if (s || mt) {
    const r = mt ? mt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(s && s.proxy) : t;
  }
}
const fi = {}, ci = () => Object.create(fi), ui = (e) => Object.getPrototypeOf(e) === fi;
function io(e, t, n, s = !1) {
  const r = {}, i = ci();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : yl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function lo(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = W(r), [f] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let p = c[h];
        if (vn(e.emitsOptions, p))
          continue;
        const _ = t[p];
        if (f)
          if (J(i, p))
            _ !== i[p] && (i[p] = _, a = !0);
          else {
            const C = Ee(p);
            r[C] = Jn(
              f,
              o,
              C,
              _,
              e,
              !1
            );
          }
        else
          _ !== i[p] && (i[p] = _, a = !0);
      }
    }
  } else {
    ai(e, t, r, i) && (a = !0);
    let c;
    for (const h in o)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = ft(h)) === h || !J(t, c))) && (f ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[h] = Jn(
        f,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== o)
      for (const h in i)
        (!t || !J(t, h)) && (delete i[h], a = !0);
  }
  a && je(e.attrs, "set", "");
}
function ai(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let f in t) {
      if (Rt(f))
        continue;
      const a = t[f];
      let c;
      r && J(r, c = Ee(f)) ? !i || !i.includes(c) ? n[c] = a : (o || (o = {}))[c] = a : vn(e.emitsOptions, f) || (!(f in s) || a !== s[f]) && (s[f] = a, l = !0);
    }
  if (i) {
    const f = W(n), a = o || X;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = Jn(
        r,
        f,
        h,
        a[h],
        e,
        !J(a, h)
      );
    }
  }
  return l;
}
function Jn(e, t, n, s, r, i) {
  const l = e[n];
  if (l != null) {
    const o = J(l, "default");
    if (o && s === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && H(f)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const c = Kt(r);
          s = a[n] = f.call(
            null,
            t
          ), c();
        }
      } else
        s = f;
      r.ce && r.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ft(n)) && (s = !0));
  }
  return s;
}
const oo = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
  const s = n ? oo : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, o = [];
  let f = !1;
  if (!H(e)) {
    const c = (h) => {
      f = !0;
      const [p, _] = di(h, t, !0);
      le(l, p), _ && o.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return te(e) && s.set(e, at), at;
  if (N(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ee(i[c]);
      Vs(h) && (l[h] = X);
    }
  else if (i)
    for (const c in i) {
      const h = Ee(c);
      if (Vs(h)) {
        const p = i[c], _ = l[h] = N(p) || H(p) ? { type: p } : le({}, p), C = _.type;
        let x = !1, V = !0;
        if (N(C))
          for (let I = 0; I < C.length; ++I) {
            const j = C[I], L = H(j) && j.name;
            if (L === "Boolean") {
              x = !0;
              break;
            } else L === "String" && (V = !1);
          }
        else
          x = H(C) && C.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = x, _[
          1
          /* shouldCastTrue */
        ] = V, (x || J(_, "default")) && o.push(h);
      }
    }
  const a = [l, o];
  return te(e) && s.set(e, a), a;
}
function Vs(e) {
  return e[0] !== "$" && !Rt(e);
}
const hi = (e) => e[0] === "_" || e === "$stable", bs = (e) => N(e) ? e.map(we) : [we(e)], fo = (e, t, n) => {
  if (t._n)
    return t;
  const s = Pl((...r) => bs(t(...r)), n);
  return s._c = !1, s;
}, pi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (hi(r)) continue;
    const i = e[r];
    if (H(i))
      t[r] = fo(r, i, s);
    else if (i != null) {
      const l = bs(i);
      t[r] = () => l;
    }
  }
}, gi = (e, t) => {
  const n = bs(t);
  e.slots.default = () => n;
}, mi = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, co = (e, t, n) => {
  const s = e.slots = ci();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (mi(s, t, n), n && gr(s, "_", r, !0)) : pi(t, s);
  } else t && gi(e, t);
}, uo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, l = X;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : mi(r, t, n) : (i = !t.$stable, pi(t, r)), l = t;
  } else t && (gi(e, t), l = { default: 1 });
  if (i)
    for (const o in r)
      !hi(o) && l[o] == null && delete r[o];
}, pe = Ro;
function ao(e) {
  return ho(e);
}
function ho(e, t) {
  const n = _n();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: f,
    setText: a,
    setElementText: c,
    parentNode: h,
    nextSibling: p,
    setScopeId: _ = Be,
    insertStaticContent: C
  } = e, x = (u, d, g, y = null, m = null, b = null, E = void 0, S = null, T = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Ne(u, d) && (y = kt(u), Me(u, m, b, !0), u = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: v, ref: D, shapeFlag: A } = d;
    switch (v) {
      case xn:
        V(u, d, g, y);
        break;
      case ue:
        I(u, d, g, y);
        break;
      case Dn:
        u == null && j(d, g, y, E);
        break;
      case be:
        w(
          u,
          d,
          g,
          y,
          m,
          b,
          E,
          S,
          T
        );
        break;
      default:
        A & 1 ? F(
          u,
          d,
          g,
          y,
          m,
          b,
          E,
          S,
          T
        ) : A & 6 ? q(
          u,
          d,
          g,
          y,
          m,
          b,
          E,
          S,
          T
        ) : (A & 64 || A & 128) && v.process(
          u,
          d,
          g,
          y,
          m,
          b,
          E,
          S,
          T,
          St
        );
    }
    D != null && m && on(D, u && u.ref, b, d || u, !d);
  }, V = (u, d, g, y) => {
    if (u == null)
      s(
        d.el = o(d.children),
        g,
        y
      );
    else {
      const m = d.el = u.el;
      d.children !== u.children && a(m, d.children);
    }
  }, I = (u, d, g, y) => {
    u == null ? s(
      d.el = f(d.children || ""),
      g,
      y
    ) : d.el = u.el;
  }, j = (u, d, g, y) => {
    [u.el, u.anchor] = C(
      u.children,
      d,
      g,
      y,
      u.el,
      u.anchor
    );
  }, L = ({ el: u, anchor: d }, g, y) => {
    let m;
    for (; u && u !== d; )
      m = p(u), s(u, g, y), u = m;
    s(d, g, y);
  }, R = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, F = (u, d, g, y, m, b, E, S, T) => {
    d.type === "svg" ? E = "svg" : d.type === "math" && (E = "mathml"), u == null ? O(
      d,
      g,
      y,
      m,
      b,
      E,
      S,
      T
    ) : M(
      u,
      d,
      m,
      b,
      E,
      S,
      T
    );
  }, O = (u, d, g, y, m, b, E, S) => {
    let T, v;
    const { props: D, shapeFlag: A, transition: P, dirs: $ } = u;
    if (T = u.el = l(
      u.type,
      b,
      D && D.is,
      D
    ), A & 8 ? c(T, u.children) : A & 16 && G(
      u.children,
      T,
      null,
      y,
      m,
      Pn(u, b),
      E,
      S
    ), $ && tt(u, null, y, "created"), k(T, u, u.scopeId, E, y), D) {
      for (const z in D)
        z !== "value" && !Rt(z) && i(T, z, null, D[z], b, y);
      "value" in D && i(T, "value", null, D.value, b), (v = D.onVnodeBeforeMount) && Pe(v, y, u);
    }
    $ && tt(u, null, y, "beforeMount");
    const K = po(m, P);
    K && P.beforeEnter(T), s(T, d, g), ((v = D && D.onVnodeMounted) || K || $) && pe(() => {
      v && Pe(v, y, u), K && P.enter(T), $ && tt(u, null, y, "mounted");
    }, m);
  }, k = (u, d, g, y, m) => {
    if (g && _(u, g), y)
      for (let b = 0; b < y.length; b++)
        _(u, y[b]);
    if (m) {
      let b = m.subTree;
      if (d === b || vi(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const E = m.vnode;
        k(
          u,
          E,
          E.scopeId,
          E.slotScopeIds,
          m.parent
        );
      }
    }
  }, G = (u, d, g, y, m, b, E, S, T = 0) => {
    for (let v = T; v < u.length; v++) {
      const D = u[v] = S ? Je(u[v]) : we(u[v]);
      x(
        null,
        D,
        d,
        g,
        y,
        m,
        b,
        E,
        S
      );
    }
  }, M = (u, d, g, y, m, b, E) => {
    const S = d.el = u.el;
    let { patchFlag: T, dynamicChildren: v, dirs: D } = d;
    T |= u.patchFlag & 16;
    const A = u.props || X, P = d.props || X;
    let $;
    if (g && nt(g, !1), ($ = P.onVnodeBeforeUpdate) && Pe($, g, d, u), D && tt(d, u, g, "beforeUpdate"), g && nt(g, !0), (A.innerHTML && P.innerHTML == null || A.textContent && P.textContent == null) && c(S, ""), v ? B(
      u.dynamicChildren,
      v,
      S,
      g,
      y,
      Pn(d, m),
      b
    ) : E || Q(
      u,
      d,
      S,
      null,
      g,
      y,
      Pn(d, m),
      b,
      !1
    ), T > 0) {
      if (T & 16)
        U(S, A, P, g, m);
      else if (T & 2 && A.class !== P.class && i(S, "class", null, P.class, m), T & 4 && i(S, "style", A.style, P.style, m), T & 8) {
        const K = d.dynamicProps;
        for (let z = 0; z < K.length; z++) {
          const Y = K[z], ve = A[Y], _e = P[Y];
          (_e !== ve || Y === "value") && i(S, Y, ve, _e, m, g);
        }
      }
      T & 1 && u.children !== d.children && c(S, d.children);
    } else !E && v == null && U(S, A, P, g, m);
    (($ = P.onVnodeUpdated) || D) && pe(() => {
      $ && Pe($, g, d, u), D && tt(d, u, g, "updated");
    }, y);
  }, B = (u, d, g, y, m, b, E) => {
    for (let S = 0; S < d.length; S++) {
      const T = u[S], v = d[S], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ne(T, v) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 70) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      x(
        T,
        v,
        D,
        null,
        y,
        m,
        b,
        E,
        !0
      );
    }
  }, U = (u, d, g, y, m) => {
    if (d !== g) {
      if (d !== X)
        for (const b in d)
          !Rt(b) && !(b in g) && i(
            u,
            b,
            d[b],
            null,
            m,
            y
          );
      for (const b in g) {
        if (Rt(b)) continue;
        const E = g[b], S = d[b];
        E !== S && b !== "value" && i(u, b, S, E, m, y);
      }
      "value" in g && i(u, "value", d.value, g.value, m);
    }
  }, w = (u, d, g, y, m, b, E, S, T) => {
    const v = d.el = u ? u.el : o(""), D = d.anchor = u ? u.anchor : o("");
    let { patchFlag: A, dynamicChildren: P, slotScopeIds: $ } = d;
    $ && (S = S ? S.concat($) : $), u == null ? (s(v, g, y), s(D, g, y), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      D,
      m,
      b,
      E,
      S,
      T
    )) : A > 0 && A & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (B(
      u.dynamicChildren,
      P,
      g,
      m,
      b,
      E,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || m && d === m.subTree) && ys(
      u,
      d,
      !0
      /* shallow */
    )) : Q(
      u,
      d,
      g,
      D,
      m,
      b,
      E,
      S,
      T
    );
  }, q = (u, d, g, y, m, b, E, S, T) => {
    d.slotScopeIds = S, u == null ? d.shapeFlag & 512 ? m.ctx.activate(
      d,
      g,
      y,
      E,
      T
    ) : se(
      d,
      g,
      y,
      m,
      b,
      E,
      T
    ) : me(u, d, T);
  }, se = (u, d, g, y, m, b, E) => {
    const S = u.component = Ho(
      u,
      y,
      m
    );
    if (Ut(u) && (S.ctx.renderer = St), $o(S, !1, E), S.asyncDep) {
      if (m && m.registerDep(S, ne, E), !u.el) {
        const T = S.subTree = ie(ue);
        I(null, T, d, g);
      }
    } else
      ne(
        S,
        u,
        d,
        g,
        m,
        b,
        E
      );
  }, me = (u, d, g) => {
    const y = d.component = u.component;
    if (So(u, d, g))
      if (y.asyncDep && !y.asyncResolved) {
        Z(y, d, g);
        return;
      } else
        y.next = d, y.update();
    else
      d.el = u.el, y.vnode = d;
  }, ne = (u, d, g, y, m, b, E) => {
    const S = () => {
      if (u.isMounted) {
        let { next: A, bu: P, u: $, parent: K, vnode: z } = u;
        {
          const Ie = _i(u);
          if (Ie) {
            A && (A.el = z.el, Z(u, A, E)), Ie.asyncDep.then(() => {
              u.isUnmounted || S();
            });
            return;
          }
        }
        let Y = A, ve;
        nt(u, !1), A ? (A.el = z.el, Z(u, A, E)) : A = z, P && En(P), (ve = A.props && A.props.onVnodeBeforeUpdate) && Pe(ve, K, A, z), nt(u, !0);
        const _e = Ks(u), Re = u.subTree;
        u.subTree = _e, x(
          Re,
          _e,
          // parent may have changed if it's in a teleport
          h(Re.el),
          // anchor may have changed if it's in a fragment
          kt(Re),
          u,
          m,
          b
        ), A.el = _e.el, Y === null && xs(u, _e.el), $ && pe($, m), (ve = A.props && A.props.onVnodeUpdated) && pe(
          () => Pe(ve, K, A, z),
          m
        );
      } else {
        let A;
        const { el: P, props: $ } = d, { bm: K, m: z, parent: Y, root: ve, type: _e } = u, Re = gt(d);
        nt(u, !1), K && En(K), !Re && (A = $ && $.onVnodeBeforeMount) && Pe(A, Y, d), nt(u, !0);
        {
          ve.ce && ve.ce._injectChildStyle(_e);
          const Ie = u.subTree = Ks(u);
          x(
            null,
            Ie,
            g,
            y,
            u,
            m,
            b
          ), d.el = Ie.el;
        }
        if (z && pe(z, m), !Re && (A = $ && $.onVnodeMounted)) {
          const Ie = d;
          pe(
            () => Pe(A, Y, Ie),
            m
          );
        }
        (d.shapeFlag & 256 || Y && gt(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && pe(u.a, m), u.isMounted = !0, d = g = y = null;
      }
    };
    u.scope.on();
    const T = u.effect = new vr(S);
    u.scope.off();
    const v = u.update = T.run.bind(T), D = u.job = T.runIfDirty.bind(T);
    D.i = u, D.id = u.uid, T.scheduler = () => gs(D), nt(u, !0), v();
  }, Z = (u, d, g) => {
    d.component = u;
    const y = u.vnode.props;
    u.vnode = d, u.next = null, lo(u, d.props, y, g), uo(u, d.children, g), Ze(), Rs(u), Qe();
  }, Q = (u, d, g, y, m, b, E, S, T = !1) => {
    const v = u && u.children, D = u ? u.shapeFlag : 0, A = d.children, { patchFlag: P, shapeFlag: $ } = d;
    if (P > 0) {
      if (P & 128) {
        Wt(
          v,
          A,
          g,
          y,
          m,
          b,
          E,
          S,
          T
        );
        return;
      } else if (P & 256) {
        ze(
          v,
          A,
          g,
          y,
          m,
          b,
          E,
          S,
          T
        );
        return;
      }
    }
    $ & 8 ? (D & 16 && Tt(v, m, b), A !== v && c(g, A)) : D & 16 ? $ & 16 ? Wt(
      v,
      A,
      g,
      y,
      m,
      b,
      E,
      S,
      T
    ) : Tt(v, m, b, !0) : (D & 8 && c(g, ""), $ & 16 && G(
      A,
      g,
      y,
      m,
      b,
      E,
      S,
      T
    ));
  }, ze = (u, d, g, y, m, b, E, S, T) => {
    u = u || at, d = d || at;
    const v = u.length, D = d.length, A = Math.min(v, D);
    let P;
    for (P = 0; P < A; P++) {
      const $ = d[P] = T ? Je(d[P]) : we(d[P]);
      x(
        u[P],
        $,
        g,
        null,
        m,
        b,
        E,
        S,
        T
      );
    }
    v > D ? Tt(
      u,
      m,
      b,
      !0,
      !1,
      A
    ) : G(
      d,
      g,
      y,
      m,
      b,
      E,
      S,
      T,
      A
    );
  }, Wt = (u, d, g, y, m, b, E, S, T) => {
    let v = 0;
    const D = d.length;
    let A = u.length - 1, P = D - 1;
    for (; v <= A && v <= P; ) {
      const $ = u[v], K = d[v] = T ? Je(d[v]) : we(d[v]);
      if (Ne($, K))
        x(
          $,
          K,
          g,
          null,
          m,
          b,
          E,
          S,
          T
        );
      else
        break;
      v++;
    }
    for (; v <= A && v <= P; ) {
      const $ = u[A], K = d[P] = T ? Je(d[P]) : we(d[P]);
      if (Ne($, K))
        x(
          $,
          K,
          g,
          null,
          m,
          b,
          E,
          S,
          T
        );
      else
        break;
      A--, P--;
    }
    if (v > A) {
      if (v <= P) {
        const $ = P + 1, K = $ < D ? d[$].el : y;
        for (; v <= P; )
          x(
            null,
            d[v] = T ? Je(d[v]) : we(d[v]),
            g,
            K,
            m,
            b,
            E,
            S,
            T
          ), v++;
      }
    } else if (v > P)
      for (; v <= A; )
        Me(u[v], m, b, !0), v++;
    else {
      const $ = v, K = v, z = /* @__PURE__ */ new Map();
      for (v = K; v <= P; v++) {
        const xe = d[v] = T ? Je(d[v]) : we(d[v]);
        xe.key != null && z.set(xe.key, v);
      }
      let Y, ve = 0;
      const _e = P - K + 1;
      let Re = !1, Ie = 0;
      const Et = new Array(_e);
      for (v = 0; v < _e; v++) Et[v] = 0;
      for (v = $; v <= A; v++) {
        const xe = u[v];
        if (ve >= _e) {
          Me(xe, m, b, !0);
          continue;
        }
        let Oe;
        if (xe.key != null)
          Oe = z.get(xe.key);
        else
          for (Y = K; Y <= P; Y++)
            if (Et[Y - K] === 0 && Ne(xe, d[Y])) {
              Oe = Y;
              break;
            }
        Oe === void 0 ? Me(xe, m, b, !0) : (Et[Oe - K] = v + 1, Oe >= Ie ? Ie = Oe : Re = !0, x(
          xe,
          d[Oe],
          g,
          null,
          m,
          b,
          E,
          S,
          T
        ), ve++);
      }
      const Es = Re ? go(Et) : at;
      for (Y = Es.length - 1, v = _e - 1; v >= 0; v--) {
        const xe = K + v, Oe = d[xe], ws = xe + 1 < D ? d[xe + 1].el : y;
        Et[v] === 0 ? x(
          null,
          Oe,
          g,
          ws,
          m,
          b,
          E,
          S,
          T
        ) : Re && (Y < 0 || v !== Es[Y] ? et(Oe, g, ws, 2) : Y--);
      }
    }
  }, et = (u, d, g, y, m = null) => {
    const { el: b, type: E, transition: S, children: T, shapeFlag: v } = u;
    if (v & 6) {
      et(u.component.subTree, d, g, y);
      return;
    }
    if (v & 128) {
      u.suspense.move(d, g, y);
      return;
    }
    if (v & 64) {
      E.move(u, d, g, St);
      return;
    }
    if (E === be) {
      s(b, d, g);
      for (let A = 0; A < T.length; A++)
        et(T[A], d, g, y);
      s(u.anchor, d, g);
      return;
    }
    if (E === Dn) {
      L(u, d, g);
      return;
    }
    if (y !== 2 && v & 1 && S)
      if (y === 0)
        S.beforeEnter(b), s(b, d, g), pe(() => S.enter(b), m);
      else {
        const { leave: A, delayLeave: P, afterLeave: $ } = S, K = () => s(b, d, g), z = () => {
          A(b, () => {
            K(), $ && $();
          });
        };
        P ? P(b, K, z) : z();
      }
    else
      s(b, d, g);
  }, Me = (u, d, g, y = !1, m = !1) => {
    const {
      type: b,
      props: E,
      ref: S,
      children: T,
      dynamicChildren: v,
      shapeFlag: D,
      patchFlag: A,
      dirs: P,
      cacheIndex: $
    } = u;
    if (A === -2 && (m = !1), S != null && on(S, null, g, u, !0), $ != null && (d.renderCache[$] = void 0), D & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const K = D & 1 && P, z = !gt(u);
    let Y;
    if (z && (Y = E && E.onVnodeBeforeUnmount) && Pe(Y, d, u), D & 6)
      Hi(u.component, g, y);
    else {
      if (D & 128) {
        u.suspense.unmount(g, y);
        return;
      }
      K && tt(u, null, d, "beforeUnmount"), D & 64 ? u.type.remove(
        u,
        d,
        g,
        St,
        y
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== be || A > 0 && A & 64) ? Tt(
        v,
        d,
        g,
        !1,
        !0
      ) : (b === be && A & 384 || !m && D & 16) && Tt(T, d, g), y && Ts(u);
    }
    (z && (Y = E && E.onVnodeUnmounted) || K) && pe(() => {
      Y && Pe(Y, d, u), K && tt(u, null, d, "unmounted");
    }, g);
  }, Ts = (u) => {
    const { type: d, el: g, anchor: y, transition: m } = u;
    if (d === be) {
      Bi(g, y);
      return;
    }
    if (d === Dn) {
      R(u);
      return;
    }
    const b = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: E, delayLeave: S } = m, T = () => E(g, b);
      S ? S(u.el, b, T) : T();
    } else
      b();
  }, Bi = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, Hi = (u, d, g) => {
    const { bum: y, scope: m, job: b, subTree: E, um: S, m: T, a: v } = u;
    Us(T), Us(v), y && En(y), m.stop(), b && (b.flags |= 8, Me(E, u, d, g)), S && pe(S, d), pe(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Tt = (u, d, g, y = !1, m = !1, b = 0) => {
    for (let E = b; E < u.length; E++)
      Me(u[E], d, g, y, m);
  }, kt = (u) => {
    if (u.shapeFlag & 6)
      return kt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[Kr];
    return g ? p(g) : d;
  };
  let Tn = !1;
  const Ss = (u, d, g) => {
    u == null ? d._vnode && Me(d._vnode, null, null, !0) : x(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, Tn || (Tn = !0, Rs(), jr(), Tn = !1);
  }, St = {
    p: x,
    um: Me,
    m: et,
    r: Ts,
    mt: se,
    mc: G,
    pc: Q,
    pbc: B,
    n: kt,
    o: e
  };
  return {
    render: Ss,
    hydrate: void 0,
    createApp: so(Ss)
  };
}
function Pn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function po(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ys(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (N(s) && N(r))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let o = r[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Je(r[i]), o.el = l.el), !n && o.patchFlag !== -2 && ys(l, o)), o.type === xn && (o.el = l.el);
    }
}
function go(e) {
  const t = e.slice(), n = [0];
  let s, r, i, l, o;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        o = i + l >> 1, e[n[o]] < a ? i = o + 1 : l = o;
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function _i(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
function Us(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const mo = Symbol.for("v-scx"), _o = () => zt(mo);
function Nf(e, t) {
  return vs(e, null, t);
}
function Ln(e, t, n) {
  return vs(e, t, n);
}
function vs(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: l } = n, o = le({}, n), f = t && s || !t && i !== "post";
  let a;
  if (vt) {
    if (i === "sync") {
      const _ = _o();
      a = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!f) {
      const _ = () => {
      };
      return _.stop = Be, _.resume = Be, _.pause = Be, _;
    }
  }
  const c = oe;
  o.call = (_, C, x) => Fe(_, c, C, x);
  let h = !1;
  i === "post" ? o.scheduler = (_) => {
    pe(_, c && c.suspense);
  } : i !== "sync" && (h = !0, o.scheduler = (_, C) => {
    C ? _() : gs(_);
  }), o.augmentJob = (_) => {
    t && (_.flags |= 4), h && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
  };
  const p = Ml(e, t, o);
  return vt && (a ? a.push(p) : f && p()), p;
}
function bo(e, t, n) {
  const s = this.proxy, r = re(e) ? e.includes(".") ? bi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  H(t) ? i = t : (i = t.handler, n = t);
  const l = Kt(this), o = vs(r, i.bind(s), n);
  return l(), o;
}
function bi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const yo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${ft(t)}Modifiers`];
function vo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let r = n;
  const i = t.startsWith("update:"), l = i && yo(s, t.slice(7));
  l && (l.trim && (r = n.map((c) => re(c) ? c.trim() : c)), l.number && (r = n.map(Wi)));
  let o, f = s[o = Sn(t)] || // also try camelCase event handler (#2249)
  s[o = Sn(Ee(t))];
  !f && i && (f = s[o = Sn(ft(t))]), f && Fe(
    f,
    e,
    6,
    r
  );
  const a = s[o + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Fe(
      a,
      e,
      6,
      r
    );
  }
}
function yi(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, o = !1;
  if (!H(e)) {
    const f = (a) => {
      const c = yi(a, t, !0);
      c && (o = !0, le(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !o ? (te(e) && s.set(e, null), null) : (N(i) ? i.forEach((f) => l[f] = null) : le(l, i), te(e) && s.set(e, l), l);
}
function vn(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, ft(t)) || J(e, t));
}
function Ks(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: f,
    render: a,
    renderCache: c,
    props: h,
    data: p,
    setupState: _,
    ctx: C,
    inheritAttrs: x
  } = e, V = ln(e);
  let I, j;
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, F = R;
      I = we(
        a.call(
          F,
          R,
          c,
          h,
          _,
          p,
          C
        )
      ), j = o;
    } else {
      const R = t;
      I = we(
        R.length > 1 ? R(
          h,
          { attrs: o, slots: l, emit: f }
        ) : R(
          h,
          null
        )
      ), j = t.props ? o : Co(o);
    }
  } catch (R) {
    Dt.length = 0, Ct(R, e, 1), I = ie(ue);
  }
  let L = I;
  if (j && x !== !1) {
    const R = Object.keys(j), { shapeFlag: F } = L;
    R.length && F & 7 && (i && R.some(ns) && (j = To(
      j,
      i
    )), L = Xe(L, j, !1, !0));
  }
  return n.dirs && (L = Xe(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && ot(L, n.transition), I = L, ln(V), I;
}
function xo(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (yt(r)) {
      if (r.type !== ue || r.children === "v-if") {
        if (n)
          return;
        n = r;
      }
    } else
      return;
  }
  return n;
}
const Co = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, To = (e, t) => {
  const n = {};
  for (const s in e)
    (!ns(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function So(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: l, children: o, patchFlag: f } = t, a = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? Ws(s, l, a) : !!l;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (l[p] !== s[p] && !vn(a, p))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Ws(s, l, a) : !0 : !!l;
  return !1;
}
function Ws(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !vn(n, i))
      return !0;
  }
  return !1;
}
function xs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vi = (e) => e.__isSuspense;
let Yn = 0;
const Eo = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, r, i, l, o, f, a) {
    if (e == null)
      wo(
        t,
        n,
        s,
        r,
        i,
        l,
        o,
        f,
        a
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Ao(
        e,
        t,
        n,
        s,
        r,
        l,
        o,
        f,
        a
      );
    }
  },
  hydrate: Fo,
  normalize: Mo
}, Bf = Eo;
function jt(e, t) {
  const n = e.props && e.props[t];
  H(n) && n();
}
function wo(e, t, n, s, r, i, l, o, f) {
  const {
    p: a,
    o: { createElement: c }
  } = f, h = c("div"), p = e.suspense = xi(
    e,
    r,
    s,
    t,
    h,
    n,
    i,
    l,
    o,
    f
  );
  a(
    null,
    p.pendingBranch = e.ssContent,
    h,
    null,
    s,
    p,
    i,
    l
  ), p.deps > 0 ? (jt(e, "onPending"), jt(e, "onFallback"), a(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    l
  ), _t(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Ao(e, t, n, s, r, i, l, o, { p: f, um: a, o: { createElement: c } }) {
  const h = t.suspense = e.suspense;
  h.vnode = t, t.el = e.el;
  const p = t.ssContent, _ = t.ssFallback, { activeBranch: C, pendingBranch: x, isInFallback: V, isHydrating: I } = h;
  if (x)
    h.pendingBranch = p, Ne(p, x) ? (f(
      x,
      p,
      h.hiddenContainer,
      null,
      r,
      h,
      i,
      l,
      o
    ), h.deps <= 0 ? h.resolve() : V && (I || (f(
      C,
      _,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      i,
      l,
      o
    ), _t(h, _)))) : (h.pendingId = Yn++, I ? (h.isHydrating = !1, h.activeBranch = x) : a(x, r, h), h.deps = 0, h.effects.length = 0, h.hiddenContainer = c("div"), V ? (f(
      null,
      p,
      h.hiddenContainer,
      null,
      r,
      h,
      i,
      l,
      o
    ), h.deps <= 0 ? h.resolve() : (f(
      C,
      _,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      i,
      l,
      o
    ), _t(h, _))) : C && Ne(p, C) ? (f(
      C,
      p,
      n,
      s,
      r,
      h,
      i,
      l,
      o
    ), h.resolve(!0)) : (f(
      null,
      p,
      h.hiddenContainer,
      null,
      r,
      h,
      i,
      l,
      o
    ), h.deps <= 0 && h.resolve()));
  else if (C && Ne(p, C))
    f(
      C,
      p,
      n,
      s,
      r,
      h,
      i,
      l,
      o
    ), _t(h, p);
  else if (jt(t, "onPending"), h.pendingBranch = p, p.shapeFlag & 512 ? h.pendingId = p.component.suspenseId : h.pendingId = Yn++, f(
    null,
    p,
    h.hiddenContainer,
    null,
    r,
    h,
    i,
    l,
    o
  ), h.deps <= 0)
    h.resolve();
  else {
    const { timeout: j, pendingId: L } = h;
    j > 0 ? setTimeout(() => {
      h.pendingId === L && h.fallback(_);
    }, j) : j === 0 && h.fallback(_);
  }
}
function xi(e, t, n, s, r, i, l, o, f, a, c = !1) {
  const {
    p: h,
    m: p,
    um: _,
    n: C,
    o: { parentNode: x, remove: V }
  } = a;
  let I;
  const j = Io(e);
  j && t && t.pendingBranch && (I = t.pendingId, t.deps++);
  const L = e.props ? mr(e.props.timeout) : void 0, R = i, F = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: l,
    container: s,
    hiddenContainer: r,
    deps: 0,
    pendingId: Yn++,
    timeout: typeof L == "number" ? L : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !c,
    isHydrating: c,
    isUnmounted: !1,
    effects: [],
    resolve(O = !1, k = !1) {
      const {
        vnode: G,
        activeBranch: M,
        pendingBranch: B,
        pendingId: U,
        effects: w,
        parentComponent: q,
        container: se
      } = F;
      let me = !1;
      F.isHydrating ? F.isHydrating = !1 : O || (me = M && B.transition && B.transition.mode === "out-in", me && (M.transition.afterLeave = () => {
        U === F.pendingId && (p(
          B,
          se,
          i === R ? C(M) : i,
          0
        ), Kn(w));
      }), M && (x(M.el) === se && (i = C(M)), _(M, q, F, !0)), me || p(B, se, i, 0)), _t(F, B), F.pendingBranch = null, F.isInFallback = !1;
      let ne = F.parent, Z = !1;
      for (; ne; ) {
        if (ne.pendingBranch) {
          ne.effects.push(...w), Z = !0;
          break;
        }
        ne = ne.parent;
      }
      !Z && !me && Kn(w), F.effects = [], j && t && t.pendingBranch && I === t.pendingId && (t.deps--, t.deps === 0 && !k && t.resolve()), jt(G, "onResolve");
    },
    fallback(O) {
      if (!F.pendingBranch)
        return;
      const { vnode: k, activeBranch: G, parentComponent: M, container: B, namespace: U } = F;
      jt(k, "onFallback");
      const w = C(G), q = () => {
        F.isInFallback && (h(
          null,
          O,
          B,
          w,
          M,
          null,
          // fallback tree will not have suspense context
          U,
          o,
          f
        ), _t(F, O));
      }, se = O.transition && O.transition.mode === "out-in";
      se && (G.transition.afterLeave = q), F.isInFallback = !0, _(
        G,
        M,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), se || q();
    },
    move(O, k, G) {
      F.activeBranch && p(F.activeBranch, O, k, G), F.container = O;
    },
    next() {
      return F.activeBranch && C(F.activeBranch);
    },
    registerDep(O, k, G) {
      const M = !!F.pendingBranch;
      M && F.deps++;
      const B = O.vnode.el;
      O.asyncDep.catch((U) => {
        Ct(U, O, 0);
      }).then((U) => {
        if (O.isUnmounted || F.isUnmounted || F.pendingId !== O.suspenseId)
          return;
        O.asyncResolved = !0;
        const { vnode: w } = O;
        Qn(O, U), B && (w.el = B);
        const q = !B && O.subTree.el;
        k(
          O,
          w,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          x(B || O.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          B ? null : C(O.subTree),
          F,
          l,
          G
        ), q && V(q), xs(O, w.el), M && --F.deps === 0 && F.resolve();
      });
    },
    unmount(O, k) {
      F.isUnmounted = !0, F.activeBranch && _(
        F.activeBranch,
        n,
        O,
        k
      ), F.pendingBranch && _(
        F.pendingBranch,
        n,
        O,
        k
      );
    }
  };
  return F;
}
function Fo(e, t, n, s, r, i, l, o, f) {
  const a = t.suspense = xi(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    r,
    i,
    l,
    o,
    !0
  ), c = f(
    e,
    a.pendingBranch = t.ssContent,
    n,
    a,
    i,
    l
  );
  return a.deps === 0 && a.resolve(!1, !0), c;
}
function Mo(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = ks(
    s ? n.default : n
  ), e.ssFallback = s ? ks(n.fallback) : ie(ue);
}
function ks(e) {
  let t;
  if (H(e)) {
    const n = bt && e._c;
    n && (e._d = !1, cn()), e = e(), n && (e._d = !0, t = ye, Ci());
  }
  return N(e) && (e = xo(e)), e = we(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Ro(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Kn(e);
}
function _t(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, s && s.subTree === n && (s.vnode.el = r, xs(s, r));
}
function Io(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const be = Symbol.for("v-fgt"), xn = Symbol.for("v-txt"), ue = Symbol.for("v-cmt"), Dn = Symbol.for("v-stc"), Dt = [];
let ye = null;
function cn(e = !1) {
  Dt.push(ye = e ? null : []);
}
function Ci() {
  Dt.pop(), ye = Dt[Dt.length - 1] || null;
}
let bt = 1;
function Gs(e, t = !1) {
  bt += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Ti(e) {
  return e.dynamicChildren = bt > 0 ? ye || at : null, Ci(), bt > 0 && ye && ye.push(e), e;
}
function Hf(e, t, n, s, r, i) {
  return Ti(
    Ei(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Xn(e, t, n, s, r) {
  return Ti(
    ie(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function yt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ne(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Si = ({ key: e }) => e != null ? e : null, en = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || ce(e) || H(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function Ei(e, t = null, n = null, s = 0, r = null, i = e === be ? 0 : 1, l = !1, o = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Si(t),
    ref: t && en(t),
    scopeId: Ur,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return o ? (Cs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= re(n) ? 8 : 16), bt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const ie = Oo;
function Oo(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === si) && (e = ue), yt(e)) {
    const o = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cs(o, n), bt > 0 && !i && ye && (o.shapeFlag & 6 ? ye[ye.indexOf(e)] = o : ye.push(o)), o.patchFlag = -2, o;
  }
  if (Wo(e) && (e = e.__vccOpts), t) {
    t = Po(t);
    let { class: o, style: f } = t;
    o && !re(o) && (t.class = ls(o)), te(f) && (ps(f) && !N(f) && (f = le({}, f)), t.style = is(f));
  }
  const l = re(e) ? 1 : vi(e) ? 128 : Wr(e) ? 64 : te(e) ? 4 : H(e) ? 2 : 0;
  return Ei(
    e,
    t,
    n,
    s,
    r,
    l,
    i,
    !0
  );
}
function Po(e) {
  return e ? ps(e) || ui(e) ? le({}, e) : e : null;
}
function Xe(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: l, children: o, transition: f } = e, a = t ? Do(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Si(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? N(i) ? i.concat(en(t)) : [i, en(t)] : en(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && ot(
    c,
    f.clone(c)
  ), c;
}
function Lo(e = " ", t = 0) {
  return ie(xn, null, e, t);
}
function $f(e = "", t = !1) {
  return t ? (cn(), Xn(ue, null, e)) : ie(ue, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean" ? ie(ue) : N(e) ? ie(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : yt(e) ? Je(e) : ie(xn, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Cs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ui(t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Do(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = ls([t.class, s.class]));
      else if (r === "style")
        t.style = is([t.style, s.style]);
      else if (hn(r)) {
        const i = t[r], l = s[r];
        l && i !== l && !(N(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const No = oi();
let Bo = 0;
function Ho(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || No, i = {
    uid: Bo++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: di(s, r),
    emitsOptions: yi(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = vo.bind(null, i), e.ce && e.ce(i), i;
}
let oe = null;
const wi = () => oe || fe;
let un, Zn;
{
  const e = _n(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), Zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => vt = n
  );
}
const Kt = (e) => {
  const t = oe;
  return un(e), e.scope.on(), () => {
    e.scope.off(), un(t);
  };
}, qs = () => {
  oe && oe.scope.off(), un(null);
};
function Ai(e) {
  return e.vnode.shapeFlag & 4;
}
let vt = !1;
function $o(e, t = !1, n = !1) {
  t && Zn(t);
  const { props: s, children: r } = e.vnode, i = Ai(e);
  io(e, s, i, t), co(e, r, n);
  const l = i ? jo(e, t) : void 0;
  return t && Zn(!1), l;
}
function jo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xl);
  const { setup: s } = n;
  if (s) {
    Ze();
    const r = e.setupContext = s.length > 1 ? Uo(e) : null, i = Kt(e), l = Vt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), o = dr(l);
    if (Qe(), i(), (o || e.sp) && !gt(e) && _s(e), o) {
      if (l.then(qs, qs), t)
        return l.then((f) => {
          Qn(e, f);
        }).catch((f) => {
          Ct(f, e, 0);
        });
      e.asyncDep = l;
    } else
      Qn(e, l);
  } else
    Fi(e);
}
function Qn(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = Nr(t)), Fi(e);
}
function Fi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Be);
  {
    const r = Kt(e);
    Ze();
    try {
      Zl(e);
    } finally {
      Qe(), r();
    }
  }
}
const Vo = {
  get(e, t) {
    return ae(e, "get", ""), e[t];
  }
};
function Uo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nr(vl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Lt)
        return Lt[n](e);
    },
    has(t, n) {
      return n in t || n in Lt;
    }
  })) : e.proxy;
}
function Ko(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wo(e) {
  return H(e) && "__vccOpts" in e;
}
const ko = (e, t) => Al(e, t, vt);
function Go(e, t, n) {
  const s = arguments.length;
  return s === 2 ? te(t) && !N(t) ? yt(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && yt(n) && (n = [n]), ie(e, t, n));
}
const qo = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zn;
const Js = typeof window != "undefined" && window.trustedTypes;
if (Js)
  try {
    zn = /* @__PURE__ */ Js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
  }
const Mi = zn ? (e) => zn.createHTML(e) : (e) => e, Jo = "http://www.w3.org/2000/svg", Yo = "http://www.w3.org/1998/Math/MathML", $e = typeof document != "undefined" ? document : null, Ys = $e && /* @__PURE__ */ $e.createElement("template"), Xo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? $e.createElementNS(Jo, e) : t === "mathml" ? $e.createElementNS(Yo, e) : n ? $e.createElement(e, { is: n }) : $e.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => $e.createTextNode(e),
  createComment: (e) => $e.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $e.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Ys.innerHTML = Mi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ys.content;
      if (s === "svg" || s === "mathml") {
        const f = o.firstChild;
        for (; f.firstChild; )
          o.appendChild(f.firstChild);
        o.removeChild(f);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, We = "transition", At = "animation", xt = Symbol("_vtc"), Ri = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ii = /* @__PURE__ */ le(
  {},
  Jr,
  Ri
), Zo = (e) => (e.displayName = "Transition", e.props = Ii, e), jf = /* @__PURE__ */ Zo(
  (e, { slots: t }) => Go(Nl, Oi(e), t)
), st = (e, t = []) => {
  N(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Xs = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Oi(e) {
  const t = {};
  for (const w in e)
    w in Ri || (t[w] = e[w]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: o = `${n}-enter-to`,
    appearFromClass: f = i,
    appearActiveClass: a = l,
    appearToClass: c = o,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: _ = `${n}-leave-to`
  } = e, C = Qo(r), x = C && C[0], V = C && C[1], {
    onBeforeEnter: I,
    onEnter: j,
    onEnterCancelled: L,
    onLeave: R,
    onLeaveCancelled: F,
    onBeforeAppear: O = I,
    onAppear: k = j,
    onAppearCancelled: G = L
  } = t, M = (w, q, se, me) => {
    w._enterCancelled = me, ke(w, q ? c : o), ke(w, q ? a : l), se && se();
  }, B = (w, q) => {
    w._isLeaving = !1, ke(w, h), ke(w, _), ke(w, p), q && q();
  }, U = (w) => (q, se) => {
    const me = w ? k : j, ne = () => M(q, w, se);
    st(me, [q, ne]), Zs(() => {
      ke(q, w ? f : i), Le(q, w ? c : o), Xs(me) || Qs(q, s, x, ne);
    });
  };
  return le(t, {
    onBeforeEnter(w) {
      st(I, [w]), Le(w, i), Le(w, l);
    },
    onBeforeAppear(w) {
      st(O, [w]), Le(w, f), Le(w, a);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(w, q) {
      w._isLeaving = !0;
      const se = () => B(w, q);
      Le(w, h), w._enterCancelled ? (Le(w, p), es()) : (es(), Le(w, p)), Zs(() => {
        w._isLeaving && (ke(w, h), Le(w, _), Xs(R) || Qs(w, s, V, se));
      }), st(R, [w, se]);
    },
    onEnterCancelled(w) {
      M(w, !1, void 0, !0), st(L, [w]);
    },
    onAppearCancelled(w) {
      M(w, !0, void 0, !0), st(G, [w]);
    },
    onLeaveCancelled(w) {
      B(w), st(F, [w]);
    }
  });
}
function Qo(e) {
  if (e == null)
    return null;
  if (te(e))
    return [Nn(e.enter), Nn(e.leave)];
  {
    const t = Nn(e);
    return [t, t];
  }
}
function Nn(e) {
  return mr(e);
}
function Le(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[xt] || (e[xt] = /* @__PURE__ */ new Set())).add(t);
}
function ke(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[xt];
  n && (n.delete(t), n.size || (e[xt] = void 0));
}
function Zs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let zo = 0;
function Qs(e, t, n, s) {
  const r = e._endId = ++zo, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: o, propCount: f } = Pi(e, t);
  if (!l)
    return s();
  const a = l + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(a, p), i();
  }, p = (_) => {
    _.target === e && ++c >= f && h();
  };
  setTimeout(() => {
    c < f && h();
  }, o + 1), e.addEventListener(a, p);
}
function Pi(e, t) {
  const n = window.getComputedStyle(e), s = (C) => (n[C] || "").split(", "), r = s(`${We}Delay`), i = s(`${We}Duration`), l = zs(r, i), o = s(`${At}Delay`), f = s(`${At}Duration`), a = zs(o, f);
  let c = null, h = 0, p = 0;
  t === We ? l > 0 && (c = We, h = l, p = i.length) : t === At ? a > 0 && (c = At, h = a, p = f.length) : (h = Math.max(l, a), c = h > 0 ? l > a ? We : At : null, p = c ? c === We ? i.length : f.length : 0);
  const _ = c === We && /\b(transform|all)(,|$)/.test(
    s(`${We}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: p,
    hasTransform: _
  };
}
function zs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => er(n) + er(e[s])));
}
function er(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function es() {
  return document.body.offsetHeight;
}
function ef(e, t, n) {
  const s = e[xt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const an = Symbol("_vod"), Li = Symbol("_vsh"), Vf = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[an] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ft(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ft(e, !0), s.enter(e)) : s.leave(e, () => {
      Ft(e, !1);
    }) : Ft(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ft(e, t);
  }
};
function Ft(e, t) {
  e.style.display = t ? e[an] : "none", e[Li] = !t;
}
const tf = Symbol(""), nf = /(^|;)\s*display\s*:/;
function sf(e, t, n) {
  const s = e.style, r = re(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (re(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && tn(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && tn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), tn(s, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = s[tf];
      l && (n += ";" + l), s.cssText = n, i = nf.test(n);
    }
  } else t && e.removeAttribute("style");
  an in e && (e[an] = i ? s.display : "", e[Li] && (s.display = "none"));
}
const tr = /\s*!important$/;
function tn(e, t, n) {
  if (N(n))
    n.forEach((s) => tn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = rf(e, t);
    tr.test(n) ? e.setProperty(
      ft(s),
      n.replace(tr, ""),
      "important"
    ) : e[s] = n;
  }
}
const nr = ["Webkit", "Moz", "ms"], Bn = {};
function rf(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let s = Ee(t);
  if (s !== "filter" && s in e)
    return Bn[t] = s;
  s = mn(s);
  for (let r = 0; r < nr.length; r++) {
    const i = nr[r] + s;
    if (i in e)
      return Bn[t] = i;
  }
  return t;
}
const sr = "http://www.w3.org/1999/xlink";
function rr(e, t, n, s, r, i = Xi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sr, t.slice(6, t.length)) : e.setAttributeNS(sr, t, n) : n == null || i && !_r(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ue(n) ? String(n) : n
  );
}
function ir(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = _r(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (o) {
  }
  l && e.removeAttribute(r || t);
}
function lf(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function of(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const lr = Symbol("_vei");
function ff(e, t, n, s, r = null) {
  const i = e[lr] || (e[lr] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [o, f] = cf(t);
    if (s) {
      const a = i[t] = df(
        s,
        r
      );
      lf(e, o, a, f);
    } else l && (of(e, o, l, f), i[t] = void 0);
  }
}
const or = /(?:Once|Passive|Capture)$/;
function cf(e) {
  let t;
  if (or.test(e)) {
    t = {};
    let s;
    for (; s = e.match(or); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ft(e.slice(2)), t];
}
let Hn = 0;
const uf = /* @__PURE__ */ Promise.resolve(), af = () => Hn || (uf.then(() => Hn = 0), Hn = Date.now());
function df(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Fe(
      hf(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = af(), n;
}
function hf(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pf = (e, t, n, s, r, i) => {
  const l = r === "svg";
  t === "class" ? ef(e, s, l) : t === "style" ? sf(e, n, s) : hn(t) ? ns(t) || ff(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gf(e, t, s, l)) ? (ir(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rr(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? ir(e, Ee(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), rr(e, t, s, l));
};
function gf(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fr(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return fr(t) && re(n) ? !1 : t in e;
}
const Di = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), dn = Symbol("_moveCb"), cr = Symbol("_enterCb"), mf = (e) => (delete e.props.mode, e), _f = /* @__PURE__ */ mf({
  name: "TransitionGroup",
  props: /* @__PURE__ */ le({}, Ii, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = wi(), s = qr();
    let r, i;
    return ei(() => {
      if (!r.length)
        return;
      const l = e.moveClass || `${e.name || "v"}-move`;
      if (!xf(
        r[0].el,
        n.vnode.el,
        l
      ))
        return;
      r.forEach(bf), r.forEach(yf);
      const o = r.filter(vf);
      es(), o.forEach((f) => {
        const a = f.el, c = a.style;
        Le(a, l), c.transform = c.webkitTransform = c.transitionDuration = "";
        const h = a[dn] = (p) => {
          p && p.target !== a || (!p || /transform$/.test(p.propertyName)) && (a.removeEventListener("transitionend", h), a[dn] = null, ke(a, l));
        };
        a.addEventListener("transitionend", h);
      });
    }), () => {
      const l = W(e), o = Oi(l);
      let f = l.tag || be;
      if (r = [], i)
        for (let a = 0; a < i.length; a++) {
          const c = i[a];
          c.el && c.el instanceof Element && (r.push(c), ot(
            c,
            $t(
              c,
              o,
              s,
              n
            )
          ), Di.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      i = t.default ? ms(t.default()) : [];
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        c.key != null && ot(
          c,
          $t(c, o, s, n)
        );
      }
      return ie(f, null, i);
    };
  }
}), Uf = _f;
function bf(e) {
  const t = e.el;
  t[dn] && t[dn](), t[cr] && t[cr]();
}
function yf(e) {
  Ni.set(e, e.el.getBoundingClientRect());
}
function vf(e) {
  const t = Di.get(e), n = Ni.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${r}px)`, i.transitionDuration = "0s", e;
  }
}
function xf(e, t, n) {
  const s = e.cloneNode(), r = e[xt];
  r && r.forEach((o) => {
    o.split(/\s+/).forEach((f) => f && s.classList.remove(f));
  }), n.split(/\s+/).forEach((o) => o && s.classList.add(o)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: l } = Pi(s);
  return i.removeChild(s), l;
}
const Cf = /* @__PURE__ */ le({ patchProp: pf }, Xo);
let ur;
function Tf() {
  return ur || (ur = ao(Cf));
}
const Kf = (...e) => {
  const t = Tf().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Ef(s);
    if (!r) return;
    const i = t._component;
    !H(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const l = n(r, !1, Sf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Sf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ef(e) {
  return re(e) ? document.querySelector(e) : e;
}
export {
  Vf as A,
  Xe as B,
  ue as C,
  xn as D,
  vl as E,
  be as F,
  ni as G,
  ls as H,
  ce as I,
  cn as J,
  Hf as K,
  ie as L,
  Pl as M,
  Ei as N,
  Cl as O,
  Lf as P,
  Xn as Q,
  Pf as R,
  Bf as S,
  If as T,
  Of as U,
  Ff as V,
  is as W,
  $f as X,
  Zi as Y,
  Kf as Z,
  Lr as a,
  ti as b,
  ko as c,
  Ul as d,
  ds as e,
  $l as f,
  wi as g,
  jl as h,
  zt as i,
  Lo as j,
  Bl as k,
  Rf as l,
  Go as m,
  Il as n,
  zr as o,
  ro as p,
  Df as q,
  Zt as r,
  Do as s,
  Mf as t,
  yt as u,
  Af as v,
  Ln as w,
  Nf as x,
  jf as y,
  Uf as z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLURVWmJpZFFYLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHZ1ZStzaGFyZWRAMy41LjEzL25vZGVfbW9kdWxlcy9AdnVlL3NoYXJlZC9kaXN0L3NoYXJlZC5lc20tYnVuZGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AdnVlK3JlYWN0aXZpdHlAMy41LjEzL25vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvZGlzdC9yZWFjdGl2aXR5LmVzbS1idW5kbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B2dWUrcnVudGltZS1jb3JlQDMuNS4xMy9ub2RlX21vZHVsZXMvQHZ1ZS9ydW50aW1lLWNvcmUvZGlzdC9ydW50aW1lLWNvcmUuZXNtLWJ1bmRsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHZ1ZStydW50aW1lLWRvbUAzLjUuMTMvbm9kZV9tb2R1bGVzL0B2dWUvcnVudGltZS1kb20vZGlzdC9ydW50aW1lLWRvbS5lc20tYnVuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQHZ1ZS9zaGFyZWQgdjMuNS4xM1xuKiAoYykgMjAxOC1wcmVzZW50IFl1eGkgKEV2YW4pIFlvdSBhbmQgVnVlIGNvbnRyaWJ1dG9yc1xuKiBAbGljZW5zZSBNSVRcbioqL1xuLyohICNfX05PX1NJREVfRUZGRUNUU19fICovXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcbiAgY29uc3QgbWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZvciAoY29uc3Qga2V5IG9mIHN0ci5zcGxpdChcIixcIikpIG1hcFtrZXldID0gMTtcbiAgcmV0dXJuICh2YWwpID0+IHZhbCBpbiBtYXA7XG59XG5cbmNvbnN0IEVNUFRZX09CSiA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBPYmplY3QuZnJlZXplKHt9KSA6IHt9O1xuY29uc3QgRU1QVFlfQVJSID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IE9iamVjdC5mcmVlemUoW10pIDogW107XG5jb25zdCBOT09QID0gKCkgPT4ge1xufTtcbmNvbnN0IE5PID0gKCkgPT4gZmFsc2U7XG5jb25zdCBpc09uID0gKGtleSkgPT4ga2V5LmNoYXJDb2RlQXQoMCkgPT09IDExMSAmJiBrZXkuY2hhckNvZGVBdCgxKSA9PT0gMTEwICYmIC8vIHVwcGVyY2FzZSBsZXR0ZXJcbihrZXkuY2hhckNvZGVBdCgyKSA+IDEyMiB8fCBrZXkuY2hhckNvZGVBdCgyKSA8IDk3KTtcbmNvbnN0IGlzTW9kZWxMaXN0ZW5lciA9IChrZXkpID0+IGtleS5zdGFydHNXaXRoKFwib25VcGRhdGU6XCIpO1xuY29uc3QgZXh0ZW5kID0gT2JqZWN0LmFzc2lnbjtcbmNvbnN0IHJlbW92ZSA9IChhcnIsIGVsKSA9PiB7XG4gIGNvbnN0IGkgPSBhcnIuaW5kZXhPZihlbCk7XG4gIGlmIChpID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGksIDEpO1xuICB9XG59O1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNNYXAgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IE1hcF1cIjtcbmNvbnN0IGlzU2V0ID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBTZXRdXCI7XG5jb25zdCBpc0RhdGUgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG5jb25zdCBpc1JlZ0V4cCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgUmVnRXhwXVwiO1xuY29uc3QgaXNGdW5jdGlvbiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbmNvbnN0IGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbmNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCI7XG5jb25zdCBpc1Byb21pc2UgPSAodmFsKSA9PiB7XG4gIHJldHVybiAoaXNPYmplY3QodmFsKSB8fCBpc0Z1bmN0aW9uKHZhbCkpICYmIGlzRnVuY3Rpb24odmFsLnRoZW4pICYmIGlzRnVuY3Rpb24odmFsLmNhdGNoKTtcbn07XG5jb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCB0b1R5cGVTdHJpbmcgPSAodmFsdWUpID0+IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuY29uc3QgdG9SYXdUeXBlID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0b1R5cGVTdHJpbmcodmFsdWUpLnNsaWNlKDgsIC0xKTtcbn07XG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG5jb25zdCBpc0ludGVnZXJLZXkgPSAoa2V5KSA9PiBpc1N0cmluZyhrZXkpICYmIGtleSAhPT0gXCJOYU5cIiAmJiBrZXlbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChrZXksIDEwKSA9PT0ga2V5O1xuY29uc3QgaXNSZXNlcnZlZFByb3AgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcbiAgLy8gdGhlIGxlYWRpbmcgY29tbWEgaXMgaW50ZW50aW9uYWwgc28gZW1wdHkgc3RyaW5nIFwiXCIgaXMgYWxzbyBpbmNsdWRlZFxuICBcIixrZXkscmVmLHJlZl9mb3IscmVmX2tleSxvblZub2RlQmVmb3JlTW91bnQsb25Wbm9kZU1vdW50ZWQsb25Wbm9kZUJlZm9yZVVwZGF0ZSxvblZub2RlVXBkYXRlZCxvblZub2RlQmVmb3JlVW5tb3VudCxvblZub2RlVW5tb3VudGVkXCJcbik7XG5jb25zdCBpc0J1aWx0SW5EaXJlY3RpdmUgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcbiAgXCJiaW5kLGNsb2FrLGVsc2UtaWYsZWxzZSxmb3IsaHRtbCxpZixtb2RlbCxvbixvbmNlLHByZSxzaG93LHNsb3QsdGV4dCxtZW1vXCJcbik7XG5jb25zdCBjYWNoZVN0cmluZ0Z1bmN0aW9uID0gKGZuKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoc3RyKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gIH07XG59O1xuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbmNvbnN0IGNhbWVsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbihcbiAgKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xuICB9XG4pO1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvXFxCKFtBLVpdKS9nO1xuY29uc3QgaHlwaGVuYXRlID0gY2FjaGVTdHJpbmdGdW5jdGlvbihcbiAgKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKClcbik7XG5jb25zdCBjYXBpdGFsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59KTtcbmNvbnN0IHRvSGFuZGxlcktleSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oXG4gIChzdHIpID0+IHtcbiAgICBjb25zdCBzID0gc3RyID8gYG9uJHtjYXBpdGFsaXplKHN0cil9YCA6IGBgO1xuICAgIHJldHVybiBzO1xuICB9XG4pO1xuY29uc3QgaGFzQ2hhbmdlZCA9ICh2YWx1ZSwgb2xkVmFsdWUpID0+ICFPYmplY3QuaXModmFsdWUsIG9sZFZhbHVlKTtcbmNvbnN0IGludm9rZUFycmF5Rm5zID0gKGZucywgLi4uYXJnKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgZm5zW2ldKC4uLmFyZyk7XG4gIH1cbn07XG5jb25zdCBkZWYgPSAob2JqLCBrZXksIHZhbHVlLCB3cml0YWJsZSA9IGZhbHNlKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZSxcbiAgICB2YWx1ZVxuICB9KTtcbn07XG5jb25zdCBsb29zZVRvTnVtYmVyID0gKHZhbCkgPT4ge1xuICBjb25zdCBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuO1xufTtcbmNvbnN0IHRvTnVtYmVyID0gKHZhbCkgPT4ge1xuICBjb25zdCBuID0gaXNTdHJpbmcodmFsKSA/IE51bWJlcih2YWwpIDogTmFOO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuO1xufTtcbmxldCBfZ2xvYmFsVGhpcztcbmNvbnN0IGdldEdsb2JhbFRoaXMgPSAoKSA9PiB7XG4gIHJldHVybiBfZ2xvYmFsVGhpcyB8fCAoX2dsb2JhbFRoaXMgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHt9KTtcbn07XG5jb25zdCBpZGVudFJFID0gL15bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKiQvO1xuZnVuY3Rpb24gZ2VuUHJvcHNBY2Nlc3NFeHAobmFtZSkge1xuICByZXR1cm4gaWRlbnRSRS50ZXN0KG5hbWUpID8gYF9fcHJvcHMuJHtuYW1lfWAgOiBgX19wcm9wc1ske0pTT04uc3RyaW5naWZ5KG5hbWUpfV1gO1xufVxuZnVuY3Rpb24gZ2VuQ2FjaGVLZXkoc291cmNlLCBvcHRpb25zKSB7XG4gIHJldHVybiBzb3VyY2UgKyBKU09OLnN0cmluZ2lmeShcbiAgICBvcHRpb25zLFxuICAgIChfLCB2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIiA/IHZhbC50b1N0cmluZygpIDogdmFsXG4gICk7XG59XG5cbmNvbnN0IFBhdGNoRmxhZ3MgPSB7XG4gIFwiVEVYVFwiOiAxLFxuICBcIjFcIjogXCJURVhUXCIsXG4gIFwiQ0xBU1NcIjogMixcbiAgXCIyXCI6IFwiQ0xBU1NcIixcbiAgXCJTVFlMRVwiOiA0LFxuICBcIjRcIjogXCJTVFlMRVwiLFxuICBcIlBST1BTXCI6IDgsXG4gIFwiOFwiOiBcIlBST1BTXCIsXG4gIFwiRlVMTF9QUk9QU1wiOiAxNixcbiAgXCIxNlwiOiBcIkZVTExfUFJPUFNcIixcbiAgXCJORUVEX0hZRFJBVElPTlwiOiAzMixcbiAgXCIzMlwiOiBcIk5FRURfSFlEUkFUSU9OXCIsXG4gIFwiU1RBQkxFX0ZSQUdNRU5UXCI6IDY0LFxuICBcIjY0XCI6IFwiU1RBQkxFX0ZSQUdNRU5UXCIsXG4gIFwiS0VZRURfRlJBR01FTlRcIjogMTI4LFxuICBcIjEyOFwiOiBcIktFWUVEX0ZSQUdNRU5UXCIsXG4gIFwiVU5LRVlFRF9GUkFHTUVOVFwiOiAyNTYsXG4gIFwiMjU2XCI6IFwiVU5LRVlFRF9GUkFHTUVOVFwiLFxuICBcIk5FRURfUEFUQ0hcIjogNTEyLFxuICBcIjUxMlwiOiBcIk5FRURfUEFUQ0hcIixcbiAgXCJEWU5BTUlDX1NMT1RTXCI6IDEwMjQsXG4gIFwiMTAyNFwiOiBcIkRZTkFNSUNfU0xPVFNcIixcbiAgXCJERVZfUk9PVF9GUkFHTUVOVFwiOiAyMDQ4LFxuICBcIjIwNDhcIjogXCJERVZfUk9PVF9GUkFHTUVOVFwiLFxuICBcIkNBQ0hFRFwiOiAtMSxcbiAgXCItMVwiOiBcIkNBQ0hFRFwiLFxuICBcIkJBSUxcIjogLTIsXG4gIFwiLTJcIjogXCJCQUlMXCJcbn07XG5jb25zdCBQYXRjaEZsYWdOYW1lcyA9IHtcbiAgWzFdOiBgVEVYVGAsXG4gIFsyXTogYENMQVNTYCxcbiAgWzRdOiBgU1RZTEVgLFxuICBbOF06IGBQUk9QU2AsXG4gIFsxNl06IGBGVUxMX1BST1BTYCxcbiAgWzMyXTogYE5FRURfSFlEUkFUSU9OYCxcbiAgWzY0XTogYFNUQUJMRV9GUkFHTUVOVGAsXG4gIFsxMjhdOiBgS0VZRURfRlJBR01FTlRgLFxuICBbMjU2XTogYFVOS0VZRURfRlJBR01FTlRgLFxuICBbNTEyXTogYE5FRURfUEFUQ0hgLFxuICBbMTAyNF06IGBEWU5BTUlDX1NMT1RTYCxcbiAgWzIwNDhdOiBgREVWX1JPT1RfRlJBR01FTlRgLFxuICBbLTFdOiBgSE9JU1RFRGAsXG4gIFstMl06IGBCQUlMYFxufTtcblxuY29uc3QgU2hhcGVGbGFncyA9IHtcbiAgXCJFTEVNRU5UXCI6IDEsXG4gIFwiMVwiOiBcIkVMRU1FTlRcIixcbiAgXCJGVU5DVElPTkFMX0NPTVBPTkVOVFwiOiAyLFxuICBcIjJcIjogXCJGVU5DVElPTkFMX0NPTVBPTkVOVFwiLFxuICBcIlNUQVRFRlVMX0NPTVBPTkVOVFwiOiA0LFxuICBcIjRcIjogXCJTVEFURUZVTF9DT01QT05FTlRcIixcbiAgXCJURVhUX0NISUxEUkVOXCI6IDgsXG4gIFwiOFwiOiBcIlRFWFRfQ0hJTERSRU5cIixcbiAgXCJBUlJBWV9DSElMRFJFTlwiOiAxNixcbiAgXCIxNlwiOiBcIkFSUkFZX0NISUxEUkVOXCIsXG4gIFwiU0xPVFNfQ0hJTERSRU5cIjogMzIsXG4gIFwiMzJcIjogXCJTTE9UU19DSElMRFJFTlwiLFxuICBcIlRFTEVQT1JUXCI6IDY0LFxuICBcIjY0XCI6IFwiVEVMRVBPUlRcIixcbiAgXCJTVVNQRU5TRVwiOiAxMjgsXG4gIFwiMTI4XCI6IFwiU1VTUEVOU0VcIixcbiAgXCJDT01QT05FTlRfU0hPVUxEX0tFRVBfQUxJVkVcIjogMjU2LFxuICBcIjI1NlwiOiBcIkNPTVBPTkVOVF9TSE9VTERfS0VFUF9BTElWRVwiLFxuICBcIkNPTVBPTkVOVF9LRVBUX0FMSVZFXCI6IDUxMixcbiAgXCI1MTJcIjogXCJDT01QT05FTlRfS0VQVF9BTElWRVwiLFxuICBcIkNPTVBPTkVOVFwiOiA2LFxuICBcIjZcIjogXCJDT01QT05FTlRcIlxufTtcblxuY29uc3QgU2xvdEZsYWdzID0ge1xuICBcIlNUQUJMRVwiOiAxLFxuICBcIjFcIjogXCJTVEFCTEVcIixcbiAgXCJEWU5BTUlDXCI6IDIsXG4gIFwiMlwiOiBcIkRZTkFNSUNcIixcbiAgXCJGT1JXQVJERURcIjogMyxcbiAgXCIzXCI6IFwiRk9SV0FSREVEXCJcbn07XG5jb25zdCBzbG90RmxhZ3NUZXh0ID0ge1xuICBbMV06IFwiU1RBQkxFXCIsXG4gIFsyXTogXCJEWU5BTUlDXCIsXG4gIFszXTogXCJGT1JXQVJERURcIlxufTtcblxuY29uc3QgR0xPQkFMU19BTExPV0VEID0gXCJJbmZpbml0eSx1bmRlZmluZWQsTmFOLGlzRmluaXRlLGlzTmFOLHBhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LE1hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCxCaWdJbnQsY29uc29sZSxFcnJvcixTeW1ib2xcIjtcbmNvbnN0IGlzR2xvYmFsbHlBbGxvd2VkID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoR0xPQkFMU19BTExPV0VEKTtcbmNvbnN0IGlzR2xvYmFsbHlXaGl0ZWxpc3RlZCA9IGlzR2xvYmFsbHlBbGxvd2VkO1xuXG5jb25zdCByYW5nZSA9IDI7XG5mdW5jdGlvbiBnZW5lcmF0ZUNvZGVGcmFtZShzb3VyY2UsIHN0YXJ0ID0gMCwgZW5kID0gc291cmNlLmxlbmd0aCkge1xuICBzdGFydCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHN0YXJ0LCBzb3VyY2UubGVuZ3RoKSk7XG4gIGVuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGVuZCwgc291cmNlLmxlbmd0aCkpO1xuICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBcIlwiO1xuICBsZXQgbGluZXMgPSBzb3VyY2Uuc3BsaXQoLyhcXHI/XFxuKS8pO1xuICBjb25zdCBuZXdsaW5lU2VxdWVuY2VzID0gbGluZXMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAlIDIgPT09IDEpO1xuICBsaW5lcyA9IGxpbmVzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggJSAyID09PSAwKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3QgcmVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3VudCArPSBsaW5lc1tpXS5sZW5ndGggKyAobmV3bGluZVNlcXVlbmNlc1tpXSAmJiBuZXdsaW5lU2VxdWVuY2VzW2ldLmxlbmd0aCB8fCAwKTtcbiAgICBpZiAoY291bnQgPj0gc3RhcnQpIHtcbiAgICAgIGZvciAobGV0IGogPSBpIC0gcmFuZ2U7IGogPD0gaSArIHJhbmdlIHx8IGVuZCA+IGNvdW50OyBqKyspIHtcbiAgICAgICAgaWYgKGogPCAwIHx8IGogPj0gbGluZXMubGVuZ3RoKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgbGluZSA9IGogKyAxO1xuICAgICAgICByZXMucHVzaChcbiAgICAgICAgICBgJHtsaW5lfSR7XCIgXCIucmVwZWF0KE1hdGgubWF4KDMgLSBTdHJpbmcobGluZSkubGVuZ3RoLCAwKSl9fCAgJHtsaW5lc1tqXX1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxpbmVMZW5ndGggPSBsaW5lc1tqXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG5ld0xpbmVTZXFMZW5ndGggPSBuZXdsaW5lU2VxdWVuY2VzW2pdICYmIG5ld2xpbmVTZXF1ZW5jZXNbal0ubGVuZ3RoIHx8IDA7XG4gICAgICAgIGlmIChqID09PSBpKSB7XG4gICAgICAgICAgY29uc3QgcGFkID0gc3RhcnQgLSAoY291bnQgLSAobGluZUxlbmd0aCArIG5ld0xpbmVTZXFMZW5ndGgpKTtcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBlbmQgPiBjb3VudCA/IGxpbmVMZW5ndGggLSBwYWQgOiBlbmQgLSBzdGFydFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVzLnB1c2goYCAgIHwgIGAgKyBcIiBcIi5yZXBlYXQocGFkKSArIFwiXlwiLnJlcGVhdChsZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID4gaSkge1xuICAgICAgICAgIGlmIChlbmQgPiBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5taW4oZW5kIC0gY291bnQsIGxpbmVMZW5ndGgpLCAxKTtcbiAgICAgICAgICAgIHJlcy5wdXNoKGAgICB8ICBgICsgXCJeXCIucmVwZWF0KGxlbmd0aCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCArPSBsaW5lTGVuZ3RoICsgbmV3TGluZVNlcUxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXMuam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGUodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGlzU3RyaW5nKGl0ZW0pID8gcGFyc2VTdHJpbmdTdHlsZShpdGVtKSA6IG5vcm1hbGl6ZVN0eWxlKGl0ZW0pO1xuICAgICAgaWYgKG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbm9ybWFsaXplZCkge1xuICAgICAgICAgIHJlc1trZXldID0gbm9ybWFsaXplZFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuY29uc3QgbGlzdERlbGltaXRlclJFID0gLzsoPyFbXihdKlxcKSkvZztcbmNvbnN0IHByb3BlcnR5RGVsaW1pdGVyUkUgPSAvOihbXl0rKS87XG5jb25zdCBzdHlsZUNvbW1lbnRSRSA9IC9cXC9cXCpbXl0qP1xcKlxcLy9nO1xuZnVuY3Rpb24gcGFyc2VTdHJpbmdTdHlsZShjc3NUZXh0KSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuICBjc3NUZXh0LnJlcGxhY2Uoc3R5bGVDb21tZW50UkUsIFwiXCIpLnNwbGl0KGxpc3REZWxpbWl0ZXJSRSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyUkUpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJldFt0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlTdHlsZShzdHlsZXMpIHtcbiAgaWYgKCFzdHlsZXMpIHJldHVybiBcIlwiO1xuICBpZiAoaXNTdHJpbmcoc3R5bGVzKSkgcmV0dXJuIHN0eWxlcztcbiAgbGV0IHJldCA9IFwiXCI7XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXkgPSBrZXkuc3RhcnRzV2l0aChgLS1gKSA/IGtleSA6IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgcmV0ICs9IGAke25vcm1hbGl6ZWRLZXl9OiR7dmFsdWV9O2A7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDbGFzcyh2YWx1ZSkge1xuICBsZXQgcmVzID0gXCJcIjtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHJlcyA9IHZhbHVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUNsYXNzKHZhbHVlW2ldKTtcbiAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgIHJlcyArPSBub3JtYWxpemVkICsgXCIgXCI7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlW25hbWVdKSB7XG4gICAgICAgIHJlcyArPSBuYW1lICsgXCIgXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXMudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMocHJvcHMpIHtcbiAgaWYgKCFwcm9wcykgcmV0dXJuIG51bGw7XG4gIGxldCB7IGNsYXNzOiBrbGFzcywgc3R5bGUgfSA9IHByb3BzO1xuICBpZiAoa2xhc3MgJiYgIWlzU3RyaW5nKGtsYXNzKSkge1xuICAgIHByb3BzLmNsYXNzID0gbm9ybWFsaXplQ2xhc3Moa2xhc3MpO1xuICB9XG4gIGlmIChzdHlsZSkge1xuICAgIHByb3BzLnN0eWxlID0gbm9ybWFsaXplU3R5bGUoc3R5bGUpO1xuICB9XG4gIHJldHVybiBwcm9wcztcbn1cblxuY29uc3QgSFRNTF9UQUdTID0gXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsaDEsaDIsaDMsaDQsaDUsaDYsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsc3VtbWFyeSx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiO1xuY29uc3QgU1ZHX1RBR1MgPSBcInN2ZyxhbmltYXRlLGFuaW1hdGVNb3Rpb24sYW5pbWF0ZVRyYW5zZm9ybSxjaXJjbGUsY2xpcFBhdGgsY29sb3ItcHJvZmlsZSxkZWZzLGRlc2MsZGlzY2FyZCxlbGxpcHNlLGZlQmxlbmQsZmVDb2xvck1hdHJpeCxmZUNvbXBvbmVudFRyYW5zZmVyLGZlQ29tcG9zaXRlLGZlQ29udm9sdmVNYXRyaXgsZmVEaWZmdXNlTGlnaHRpbmcsZmVEaXNwbGFjZW1lbnRNYXAsZmVEaXN0YW50TGlnaHQsZmVEcm9wU2hhZG93LGZlRmxvb2QsZmVGdW5jQSxmZUZ1bmNCLGZlRnVuY0csZmVGdW5jUixmZUdhdXNzaWFuQmx1cixmZUltYWdlLGZlTWVyZ2UsZmVNZXJnZU5vZGUsZmVNb3JwaG9sb2d5LGZlT2Zmc2V0LGZlUG9pbnRMaWdodCxmZVNwZWN1bGFyTGlnaHRpbmcsZmVTcG90TGlnaHQsZmVUaWxlLGZlVHVyYnVsZW5jZSxmaWx0ZXIsZm9yZWlnbk9iamVjdCxnLGhhdGNoLGhhdGNocGF0aCxpbWFnZSxsaW5lLGxpbmVhckdyYWRpZW50LG1hcmtlcixtYXNrLG1lc2gsbWVzaGdyYWRpZW50LG1lc2hwYXRjaCxtZXNocm93LG1ldGFkYXRhLG1wYXRoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJhZGlhbEdyYWRpZW50LHJlY3Qsc2V0LHNvbGlkY29sb3Isc3RvcCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dFBhdGgsdGl0bGUsdHNwYW4sdW5rbm93bix1c2Usdmlld1wiO1xuY29uc3QgTUFUSF9UQUdTID0gXCJhbm5vdGF0aW9uLGFubm90YXRpb24teG1sLG1hY3Rpb24sbWFsaWduZ3JvdXAsbWFsaWdubWFyayxtYXRoLG1lbmNsb3NlLG1lcnJvcixtZmVuY2VkLG1mcmFjLG1mcmFjdGlvbixtZ2x5cGgsbWksbWxhYmVsZWR0cixtbG9uZ2RpdixtbXVsdGlzY3JpcHRzLG1uLG1vLG1vdmVyLG1wYWRkZWQsbXBoYW50b20sbXByZXNjcmlwdHMsbXJvb3QsbXJvdyxtcyxtc2NhcnJpZXMsbXNjYXJyeSxtc2dyb3VwLG1zbGluZSxtc3BhY2UsbXNxcnQsbXNyb3csbXN0YWNrLG1zdHlsZSxtc3ViLG1zdWJzdXAsbXN1cCxtdGFibGUsbXRkLG10ZXh0LG10cixtdW5kZXIsbXVuZGVyb3Zlcixub25lLHNlbWFudGljc1wiO1xuY29uc3QgVk9JRF9UQUdTID0gXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiO1xuY29uc3QgaXNIVE1MVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoSFRNTF9UQUdTKTtcbmNvbnN0IGlzU1ZHVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoU1ZHX1RBR1MpO1xuY29uc3QgaXNNYXRoTUxUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChNQVRIX1RBR1MpO1xuY29uc3QgaXNWb2lkVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoVk9JRF9UQUdTKTtcblxuY29uc3Qgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xuY29uc3QgaXNTcGVjaWFsQm9vbGVhbkF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzKTtcbmNvbnN0IGlzQm9vbGVhbkF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcbiAgc3BlY2lhbEJvb2xlYW5BdHRycyArIGAsYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNvbnRyb2xzLGRlZmF1bHQsZGVmZXIsZGlzYWJsZWQsaGlkZGVuLGluZXJ0LGxvb3Asb3BlbixyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3MsY2hlY2tlZCxtdXRlZCxtdWx0aXBsZSxzZWxlY3RlZGBcbik7XG5mdW5jdGlvbiBpbmNsdWRlQm9vbGVhbkF0dHIodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgfHwgdmFsdWUgPT09IFwiXCI7XG59XG5jb25zdCB1bnNhZmVBdHRyQ2hhclJFID0gL1s+Lz1cIidcXHUwMDA5XFx1MDAwYVxcdTAwMGNcXHUwMDIwXS87XG5jb25zdCBhdHRyVmFsaWRhdGlvbkNhY2hlID0ge307XG5mdW5jdGlvbiBpc1NTUlNhZmVBdHRyTmFtZShuYW1lKSB7XG4gIGlmIChhdHRyVmFsaWRhdGlvbkNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcmV0dXJuIGF0dHJWYWxpZGF0aW9uQ2FjaGVbbmFtZV07XG4gIH1cbiAgY29uc3QgaXNVbnNhZmUgPSB1bnNhZmVBdHRyQ2hhclJFLnRlc3QobmFtZSk7XG4gIGlmIChpc1Vuc2FmZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYHVuc2FmZSBhdHRyaWJ1dGUgbmFtZTogJHtuYW1lfWApO1xuICB9XG4gIHJldHVybiBhdHRyVmFsaWRhdGlvbkNhY2hlW25hbWVdID0gIWlzVW5zYWZlO1xufVxuY29uc3QgcHJvcHNUb0F0dHJNYXAgPSB7XG4gIGFjY2VwdENoYXJzZXQ6IFwiYWNjZXB0LWNoYXJzZXRcIixcbiAgY2xhc3NOYW1lOiBcImNsYXNzXCIsXG4gIGh0bWxGb3I6IFwiZm9yXCIsXG4gIGh0dHBFcXVpdjogXCJodHRwLWVxdWl2XCJcbn07XG5jb25zdCBpc0tub3duSHRtbEF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcbiAgYGFjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsbG93LGFsdCxhc3luYyxhdXRvY2FwaXRhbGl6ZSxhdXRvY29tcGxldGUsYXV0b2ZvY3VzLGF1dG9wbGF5LGJhY2tncm91bmQsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2FwdHVyZSxjaGFsbGVuZ2UsY2hhcnNldCxjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGNyb3Nzb3JpZ2luLGNzcCxkYXRhLGRhdGV0aW1lLGRlY29kaW5nLGRlZmF1bHQsZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsZW50ZXJrZXloaW50LGZvcixmb3JtLGZvcm1hY3Rpb24sZm9ybWVuY3R5cGUsZm9ybW1ldGhvZCxmb3Jtbm92YWxpZGF0ZSxmb3JtdGFyZ2V0LGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixoaWdoLGhyZWYsaHJlZmxhbmcsaHR0cC1lcXVpdixpY29uLGlkLGltcG9ydGFuY2UsaW5lcnQsaW50ZWdyaXR5LGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxvYWRpbmcsbGlzdCxsb29wLGxvdyxtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1pbmxlbmd0aCxtZWRpYSxtaW4sbXVsdGlwbGUsbXV0ZWQsbmFtZSxub3ZhbGlkYXRlLG9wZW4sb3B0aW11bSxwYXR0ZXJuLHBpbmcscGxhY2Vob2xkZXIscG9zdGVyLHByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWZlcnJlcnBvbGljeSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsc2NvcGUsc2NvcGVkLHNlbGVjdGVkLHNoYXBlLHNpemUsc2l6ZXMsc2xvdCxzcGFuLHNwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsdGFyZ2V0LHRpdGxlLHRyYW5zbGF0ZSx0eXBlLHVzZW1hcCx2YWx1ZSx3aWR0aCx3cmFwYFxuKTtcbmNvbnN0IGlzS25vd25TdmdBdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIGB4bWxucyxhY2NlbnQtaGVpZ2h0LGFjY3VtdWxhdGUsYWRkaXRpdmUsYWxpZ25tZW50LWJhc2VsaW5lLGFscGhhYmV0aWMsYW1wbGl0dWRlLGFyYWJpYy1mb3JtLGFzY2VudCxhdHRyaWJ1dGVOYW1lLGF0dHJpYnV0ZVR5cGUsYXppbXV0aCxiYXNlRnJlcXVlbmN5LGJhc2VsaW5lLXNoaWZ0LGJhc2VQcm9maWxlLGJib3gsYmVnaW4sYmlhcyxieSxjYWxjTW9kZSxjYXAtaGVpZ2h0LGNsYXNzLGNsaXAsY2xpcFBhdGhVbml0cyxjbGlwLXBhdGgsY2xpcC1ydWxlLGNvbG9yLGNvbG9yLWludGVycG9sYXRpb24sY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzLGNvbG9yLXByb2ZpbGUsY29sb3ItcmVuZGVyaW5nLGNvbnRlbnRTY3JpcHRUeXBlLGNvbnRlbnRTdHlsZVR5cGUsY3Jvc3NvcmlnaW4sY3Vyc29yLGN4LGN5LGQsZGVjZWxlcmF0ZSxkZXNjZW50LGRpZmZ1c2VDb25zdGFudCxkaXJlY3Rpb24sZGlzcGxheSxkaXZpc29yLGRvbWluYW50LWJhc2VsaW5lLGR1cixkeCxkeSxlZGdlTW9kZSxlbGV2YXRpb24sZW5hYmxlLWJhY2tncm91bmQsZW5kLGV4cG9uZW50LGZpbGwsZmlsbC1vcGFjaXR5LGZpbGwtcnVsZSxmaWx0ZXIsZmlsdGVyUmVzLGZpbHRlclVuaXRzLGZsb29kLWNvbG9yLGZsb29kLW9wYWNpdHksZm9udC1mYW1pbHksZm9udC1zaXplLGZvbnQtc2l6ZS1hZGp1c3QsZm9udC1zdHJldGNoLGZvbnQtc3R5bGUsZm9udC12YXJpYW50LGZvbnQtd2VpZ2h0LGZvcm1hdCxmcm9tLGZyLGZ4LGZ5LGcxLGcyLGdseXBoLW5hbWUsZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCxnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCxnbHlwaFJlZixncmFkaWVudFRyYW5zZm9ybSxncmFkaWVudFVuaXRzLGhhbmdpbmcsaGVpZ2h0LGhyZWYsaHJlZmxhbmcsaG9yaXotYWR2LXgsaG9yaXotb3JpZ2luLXgsaWQsaWRlb2dyYXBoaWMsaW1hZ2UtcmVuZGVyaW5nLGluLGluMixpbnRlcmNlcHQsayxrMSxrMixrMyxrNCxrZXJuZWxNYXRyaXgsa2VybmVsVW5pdExlbmd0aCxrZXJuaW5nLGtleVBvaW50cyxrZXlTcGxpbmVzLGtleVRpbWVzLGxhbmcsbGVuZ3RoQWRqdXN0LGxldHRlci1zcGFjaW5nLGxpZ2h0aW5nLWNvbG9yLGxpbWl0aW5nQ29uZUFuZ2xlLGxvY2FsLG1hcmtlci1lbmQsbWFya2VyLW1pZCxtYXJrZXItc3RhcnQsbWFya2VySGVpZ2h0LG1hcmtlclVuaXRzLG1hcmtlcldpZHRoLG1hc2ssbWFza0NvbnRlbnRVbml0cyxtYXNrVW5pdHMsbWF0aGVtYXRpY2FsLG1heCxtZWRpYSxtZXRob2QsbWluLG1vZGUsbmFtZSxudW1PY3RhdmVzLG9mZnNldCxvcGFjaXR5LG9wZXJhdG9yLG9yZGVyLG9yaWVudCxvcmllbnRhdGlvbixvcmlnaW4sb3ZlcmZsb3csb3ZlcmxpbmUtcG9zaXRpb24sb3ZlcmxpbmUtdGhpY2tuZXNzLHBhbm9zZS0xLHBhaW50LW9yZGVyLHBhdGgscGF0aExlbmd0aCxwYXR0ZXJuQ29udGVudFVuaXRzLHBhdHRlcm5UcmFuc2Zvcm0scGF0dGVyblVuaXRzLHBpbmcscG9pbnRlci1ldmVudHMscG9pbnRzLHBvaW50c0F0WCxwb2ludHNBdFkscG9pbnRzQXRaLHByZXNlcnZlQWxwaGEscHJlc2VydmVBc3BlY3RSYXRpbyxwcmltaXRpdmVVbml0cyxyLHJhZGl1cyxyZWZlcnJlclBvbGljeSxyZWZYLHJlZlkscmVsLHJlbmRlcmluZy1pbnRlbnQscmVwZWF0Q291bnQscmVwZWF0RHVyLHJlcXVpcmVkRXh0ZW5zaW9ucyxyZXF1aXJlZEZlYXR1cmVzLHJlc3RhcnQscmVzdWx0LHJvdGF0ZSxyeCxyeSxzY2FsZSxzZWVkLHNoYXBlLXJlbmRlcmluZyxzbG9wZSxzcGFjaW5nLHNwZWN1bGFyQ29uc3RhbnQsc3BlY3VsYXJFeHBvbmVudCxzcGVlZCxzcHJlYWRNZXRob2Qsc3RhcnRPZmZzZXQsc3RkRGV2aWF0aW9uLHN0ZW1oLHN0ZW12LHN0aXRjaFRpbGVzLHN0b3AtY29sb3Isc3RvcC1vcGFjaXR5LHN0cmlrZXRocm91Z2gtcG9zaXRpb24sc3RyaWtldGhyb3VnaC10aGlja25lc3Msc3RyaW5nLHN0cm9rZSxzdHJva2UtZGFzaGFycmF5LHN0cm9rZS1kYXNob2Zmc2V0LHN0cm9rZS1saW5lY2FwLHN0cm9rZS1saW5lam9pbixzdHJva2UtbWl0ZXJsaW1pdCxzdHJva2Utb3BhY2l0eSxzdHJva2Utd2lkdGgsc3R5bGUsc3VyZmFjZVNjYWxlLHN5c3RlbUxhbmd1YWdlLHRhYmluZGV4LHRhYmxlVmFsdWVzLHRhcmdldCx0YXJnZXRYLHRhcmdldFksdGV4dC1hbmNob3IsdGV4dC1kZWNvcmF0aW9uLHRleHQtcmVuZGVyaW5nLHRleHRMZW5ndGgsdG8sdHJhbnNmb3JtLHRyYW5zZm9ybS1vcmlnaW4sdHlwZSx1MSx1Mix1bmRlcmxpbmUtcG9zaXRpb24sdW5kZXJsaW5lLXRoaWNrbmVzcyx1bmljb2RlLHVuaWNvZGUtYmlkaSx1bmljb2RlLXJhbmdlLHVuaXRzLXBlci1lbSx2LWFscGhhYmV0aWMsdi1oYW5naW5nLHYtaWRlb2dyYXBoaWMsdi1tYXRoZW1hdGljYWwsdmFsdWVzLHZlY3Rvci1lZmZlY3QsdmVyc2lvbix2ZXJ0LWFkdi15LHZlcnQtb3JpZ2luLXgsdmVydC1vcmlnaW4teSx2aWV3Qm94LHZpZXdUYXJnZXQsdmlzaWJpbGl0eSx3aWR0aCx3aWR0aHMsd29yZC1zcGFjaW5nLHdyaXRpbmctbW9kZSx4LHgtaGVpZ2h0LHgxLHgyLHhDaGFubmVsU2VsZWN0b3IseGxpbms6YWN0dWF0ZSx4bGluazphcmNyb2xlLHhsaW5rOmhyZWYseGxpbms6cm9sZSx4bGluazpzaG93LHhsaW5rOnRpdGxlLHhsaW5rOnR5cGUseG1sbnM6eGxpbmsseG1sOmJhc2UseG1sOmxhbmcseG1sOnNwYWNlLHkseTEseTIseUNoYW5uZWxTZWxlY3Rvcix6LHpvb21BbmRQYW5gXG4pO1xuY29uc3QgaXNLbm93bk1hdGhNTEF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcbiAgYGFjY2VudCxhY2NlbnR1bmRlcixhY3Rpb250eXBlLGFsaWduLGFsaWdubWVudHNjb3BlLGFsdGltZyxhbHRpbWctaGVpZ2h0LGFsdGltZy12YWxpZ24sYWx0aW1nLXdpZHRoLGFsdHRleHQsYmV2ZWxsZWQsY2xvc2UsY29sdW1uc2FsaWduLGNvbHVtbmxpbmVzLGNvbHVtbnNwYW4sZGVub21hbGlnbixkZXB0aCxkaXIsZGlzcGxheSxkaXNwbGF5c3R5bGUsZW5jb2RpbmcsZXF1YWxjb2x1bW5zLGVxdWFscm93cyxmZW5jZSxmb250c3R5bGUsZm9udHdlaWdodCxmb3JtLGZyYW1lLGZyYW1lc3BhY2luZyxncm91cGFsaWduLGhlaWdodCxocmVmLGlkLGluZGVudGFsaWduLGluZGVudGFsaWduZmlyc3QsaW5kZW50YWxpZ25sYXN0LGluZGVudHNoaWZ0LGluZGVudHNoaWZ0Zmlyc3QsaW5kZW50c2hpZnRsYXN0LGluZGV4dHlwZSxqdXN0aWZ5LGxhcmdldG9wLGxhcmdlb3AsbHF1b3RlLGxzcGFjZSxtYXRoYmFja2dyb3VuZCxtYXRoY29sb3IsbWF0aHNpemUsbWF0aHZhcmlhbnQsbWF4c2l6ZSxtaW5sYWJlbHNwYWNpbmcsbW9kZSxvdGhlcixvdmVyZmxvdyxwb3NpdGlvbixyb3dhbGlnbixyb3dsaW5lcyxyb3dzcGFuLHJxdW90ZSxyc3BhY2Usc2NyaXB0bGV2ZWwsc2NyaXB0bWluc2l6ZSxzY3JpcHRzaXplbXVsdGlwbGllcixzZWxlY3Rpb24sc2VwYXJhdG9yLHNlcGFyYXRvcnMsc2hpZnQsc2lkZSxzcmMsc3RhY2thbGlnbixzdHJldGNoeSxzdWJzY3JpcHRzaGlmdCxzdXBlcnNjcmlwdHNoaWZ0LHN5bW1ldHJpYyx2b2Zmc2V0LHdpZHRoLHdpZHRocyx4bGluazpocmVmLHhsaW5rOnNob3cseGxpbms6dHlwZSx4bWxuc2Bcbik7XG5mdW5jdGlvbiBpc1JlbmRlcmFibGVBdHRyVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcImJvb2xlYW5cIjtcbn1cblxuY29uc3QgZXNjYXBlUkUgPSAvW1wiJyY8Pl0vO1xuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgY29uc3Qgc3RyID0gXCJcIiArIHN0cmluZztcbiAgY29uc3QgbWF0Y2ggPSBlc2NhcGVSRS5leGVjKHN0cik7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIGxldCBodG1sID0gXCJcIjtcbiAgbGV0IGVzY2FwZWQ7XG4gIGxldCBpbmRleDtcbiAgbGV0IGxhc3RJbmRleCA9IDA7XG4gIGZvciAoaW5kZXggPSBtYXRjaC5pbmRleDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICAgIGVzY2FwZWQgPSBcIiZxdW90O1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGVzY2FwZWQgPSBcIiZhbXA7XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTpcbiAgICAgICAgZXNjYXBlZCA9IFwiJiMzOTtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYwOlxuICAgICAgICBlc2NhcGVkID0gXCImbHQ7XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MjpcbiAgICAgICAgZXNjYXBlZCA9IFwiJmd0O1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc2xpY2UobGFzdEluZGV4LCBpbmRleCk7XG4gICAgfVxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZWQ7XG4gIH1cbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXggPyBodG1sICsgc3RyLnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpIDogaHRtbDtcbn1cbmNvbnN0IGNvbW1lbnRTdHJpcFJFID0gL14tPz58PCEtLXwtLT58LS0hPnw8IS0kL2c7XG5mdW5jdGlvbiBlc2NhcGVIdG1sQ29tbWVudChzcmMpIHtcbiAgcmV0dXJuIHNyYy5yZXBsYWNlKGNvbW1lbnRTdHJpcFJFLCBcIlwiKTtcbn1cbmNvbnN0IGNzc1Zhck5hbWVFc2NhcGVTeW1ib2xzUkUgPSAvWyAhXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX5dL2c7XG5mdW5jdGlvbiBnZXRFc2NhcGVkQ3NzVmFyTmFtZShrZXksIGRvdWJsZUVzY2FwZSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoXG4gICAgY3NzVmFyTmFtZUVzY2FwZVN5bWJvbHNSRSxcbiAgICAocykgPT4gZG91YmxlRXNjYXBlID8gcyA9PT0gJ1wiJyA/ICdcXFxcXFxcXFxcXFxcIicgOiBgXFxcXFxcXFwke3N9YCA6IGBcXFxcJHtzfWBcbiAgKTtcbn1cblxuZnVuY3Rpb24gbG9vc2VDb21wYXJlQXJyYXlzKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBsZXQgZXF1YWwgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgZXF1YWwgJiYgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBlcXVhbCA9IGxvb3NlRXF1YWwoYVtpXSwgYltpXSk7XG4gIH1cbiAgcmV0dXJuIGVxdWFsO1xufVxuZnVuY3Rpb24gbG9vc2VFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgbGV0IGFWYWxpZFR5cGUgPSBpc0RhdGUoYSk7XG4gIGxldCBiVmFsaWRUeXBlID0gaXNEYXRlKGIpO1xuICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgcmV0dXJuIGFWYWxpZFR5cGUgJiYgYlZhbGlkVHlwZSA/IGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKSA6IGZhbHNlO1xuICB9XG4gIGFWYWxpZFR5cGUgPSBpc1N5bWJvbChhKTtcbiAgYlZhbGlkVHlwZSA9IGlzU3ltYm9sKGIpO1xuICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cbiAgYVZhbGlkVHlwZSA9IGlzQXJyYXkoYSk7XG4gIGJWYWxpZFR5cGUgPSBpc0FycmF5KGIpO1xuICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgcmV0dXJuIGFWYWxpZFR5cGUgJiYgYlZhbGlkVHlwZSA/IGxvb3NlQ29tcGFyZUFycmF5cyhhLCBiKSA6IGZhbHNlO1xuICB9XG4gIGFWYWxpZFR5cGUgPSBpc09iamVjdChhKTtcbiAgYlZhbGlkVHlwZSA9IGlzT2JqZWN0KGIpO1xuICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgaWYgKCFhVmFsaWRUeXBlIHx8ICFiVmFsaWRUeXBlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFLZXlzQ291bnQgPSBPYmplY3Qua2V5cyhhKS5sZW5ndGg7XG4gICAgY29uc3QgYktleXNDb3VudCA9IE9iamVjdC5rZXlzKGIpLmxlbmd0aDtcbiAgICBpZiAoYUtleXNDb3VudCAhPT0gYktleXNDb3VudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhKSB7XG4gICAgICBjb25zdCBhSGFzS2V5ID0gYS5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgY29uc3QgYkhhc0tleSA9IGIuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIGlmIChhSGFzS2V5ICYmICFiSGFzS2V5IHx8ICFhSGFzS2V5ICYmIGJIYXNLZXkgfHwgIWxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpO1xufVxuZnVuY3Rpb24gbG9vc2VJbmRleE9mKGFyciwgdmFsKSB7XG4gIHJldHVybiBhcnIuZmluZEluZGV4KChpdGVtKSA9PiBsb29zZUVxdWFsKGl0ZW0sIHZhbCkpO1xufVxuXG5jb25zdCBpc1JlZiA9ICh2YWwpID0+IHtcbiAgcmV0dXJuICEhKHZhbCAmJiB2YWxbXCJfX3ZfaXNSZWZcIl0gPT09IHRydWUpO1xufTtcbmNvbnN0IHRvRGlzcGxheVN0cmluZyA9ICh2YWwpID0+IHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbCkgPyB2YWwgOiB2YWwgPT0gbnVsbCA/IFwiXCIgOiBpc0FycmF5KHZhbCkgfHwgaXNPYmplY3QodmFsKSAmJiAodmFsLnRvU3RyaW5nID09PSBvYmplY3RUb1N0cmluZyB8fCAhaXNGdW5jdGlvbih2YWwudG9TdHJpbmcpKSA/IGlzUmVmKHZhbCkgPyB0b0Rpc3BsYXlTdHJpbmcodmFsLnZhbHVlKSA6IEpTT04uc3RyaW5naWZ5KHZhbCwgcmVwbGFjZXIsIDIpIDogU3RyaW5nKHZhbCk7XG59O1xuY29uc3QgcmVwbGFjZXIgPSAoX2tleSwgdmFsKSA9PiB7XG4gIGlmIChpc1JlZih2YWwpKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VyKF9rZXksIHZhbC52YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsKSkge1xuICAgIHJldHVybiB7XG4gICAgICBbYE1hcCgke3ZhbC5zaXplfSlgXTogWy4uLnZhbC5lbnRyaWVzKCldLnJlZHVjZShcbiAgICAgICAgKGVudHJpZXMsIFtrZXksIHZhbDJdLCBpKSA9PiB7XG4gICAgICAgICAgZW50cmllc1tzdHJpbmdpZnlTeW1ib2woa2V5LCBpKSArIFwiID0+XCJdID0gdmFsMjtcbiAgICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzU2V0KHZhbCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BTZXQoJHt2YWwuc2l6ZX0pYF06IFsuLi52YWwudmFsdWVzKCldLm1hcCgodikgPT4gc3RyaW5naWZ5U3ltYm9sKHYpKVxuICAgIH07XG4gIH0gZWxzZSBpZiAoaXNTeW1ib2wodmFsKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlTeW1ib2wodmFsKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpICYmICFpc0FycmF5KHZhbCkgJiYgIWlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufTtcbmNvbnN0IHN0cmluZ2lmeVN5bWJvbCA9ICh2LCBpID0gXCJcIikgPT4ge1xuICB2YXIgX2E7XG4gIHJldHVybiAoXG4gICAgLy8gU3ltYm9sLmRlc2NyaXB0aW9uIGluIGVzMjAxOSsgc28gd2UgbmVlZCB0byBjYXN0IGhlcmUgdG8gcGFzc1xuICAgIC8vIHRoZSBsaWI6IGVzMjAxNiBjaGVja1xuICAgIGlzU3ltYm9sKHYpID8gYFN5bWJvbCgkeyhfYSA9IHYuZGVzY3JpcHRpb24pICE9IG51bGwgPyBfYSA6IGl9KWAgOiB2XG4gICk7XG59O1xuXG5leHBvcnQgeyBFTVBUWV9BUlIsIEVNUFRZX09CSiwgTk8sIE5PT1AsIFBhdGNoRmxhZ05hbWVzLCBQYXRjaEZsYWdzLCBTaGFwZUZsYWdzLCBTbG90RmxhZ3MsIGNhbWVsaXplLCBjYXBpdGFsaXplLCBjc3NWYXJOYW1lRXNjYXBlU3ltYm9sc1JFLCBkZWYsIGVzY2FwZUh0bWwsIGVzY2FwZUh0bWxDb21tZW50LCBleHRlbmQsIGdlbkNhY2hlS2V5LCBnZW5Qcm9wc0FjY2Vzc0V4cCwgZ2VuZXJhdGVDb2RlRnJhbWUsIGdldEVzY2FwZWRDc3NWYXJOYW1lLCBnZXRHbG9iYWxUaGlzLCBoYXNDaGFuZ2VkLCBoYXNPd24sIGh5cGhlbmF0ZSwgaW5jbHVkZUJvb2xlYW5BdHRyLCBpbnZva2VBcnJheUZucywgaXNBcnJheSwgaXNCb29sZWFuQXR0ciwgaXNCdWlsdEluRGlyZWN0aXZlLCBpc0RhdGUsIGlzRnVuY3Rpb24sIGlzR2xvYmFsbHlBbGxvd2VkLCBpc0dsb2JhbGx5V2hpdGVsaXN0ZWQsIGlzSFRNTFRhZywgaXNJbnRlZ2VyS2V5LCBpc0tub3duSHRtbEF0dHIsIGlzS25vd25NYXRoTUxBdHRyLCBpc0tub3duU3ZnQXR0ciwgaXNNYXAsIGlzTWF0aE1MVGFnLCBpc01vZGVsTGlzdGVuZXIsIGlzT2JqZWN0LCBpc09uLCBpc1BsYWluT2JqZWN0LCBpc1Byb21pc2UsIGlzUmVnRXhwLCBpc1JlbmRlcmFibGVBdHRyVmFsdWUsIGlzUmVzZXJ2ZWRQcm9wLCBpc1NTUlNhZmVBdHRyTmFtZSwgaXNTVkdUYWcsIGlzU2V0LCBpc1NwZWNpYWxCb29sZWFuQXR0ciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc1ZvaWRUYWcsIGxvb3NlRXF1YWwsIGxvb3NlSW5kZXhPZiwgbG9vc2VUb051bWJlciwgbWFrZU1hcCwgbm9ybWFsaXplQ2xhc3MsIG5vcm1hbGl6ZVByb3BzLCBub3JtYWxpemVTdHlsZSwgb2JqZWN0VG9TdHJpbmcsIHBhcnNlU3RyaW5nU3R5bGUsIHByb3BzVG9BdHRyTWFwLCByZW1vdmUsIHNsb3RGbGFnc1RleHQsIHN0cmluZ2lmeVN0eWxlLCB0b0Rpc3BsYXlTdHJpbmcsIHRvSGFuZGxlcktleSwgdG9OdW1iZXIsIHRvUmF3VHlwZSwgdG9UeXBlU3RyaW5nIH07XG4iLCIvKipcbiogQHZ1ZS9yZWFjdGl2aXR5IHYzLjUuMTNcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmltcG9ydCB7IGhhc0NoYW5nZWQsIGV4dGVuZCwgaXNBcnJheSwgaXNJbnRlZ2VyS2V5LCBpc1N5bWJvbCwgaXNNYXAsIGhhc093biwgaXNPYmplY3QsIG1ha2VNYXAsIHRvUmF3VHlwZSwgY2FwaXRhbGl6ZSwgZGVmLCBpc0Z1bmN0aW9uLCBFTVBUWV9PQkosIGlzU2V0LCBpc1BsYWluT2JqZWN0LCBOT09QLCByZW1vdmUgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5cbmZ1bmN0aW9uIHdhcm4obXNnLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybihgW1Z1ZSB3YXJuXSAke21zZ31gLCAuLi5hcmdzKTtcbn1cblxubGV0IGFjdGl2ZUVmZmVjdFNjb3BlO1xuY2xhc3MgRWZmZWN0U2NvcGUge1xuICBjb25zdHJ1Y3RvcihkZXRhY2hlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZXRhY2hlZCA9IGRldGFjaGVkO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5lZmZlY3RzID0gW107XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5jbGVhbnVwcyA9IFtdO1xuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5wYXJlbnQgPSBhY3RpdmVFZmZlY3RTY29wZTtcbiAgICBpZiAoIWRldGFjaGVkICYmIGFjdGl2ZUVmZmVjdFNjb3BlKSB7XG4gICAgICB0aGlzLmluZGV4ID0gKGFjdGl2ZUVmZmVjdFNjb3BlLnNjb3BlcyB8fCAoYWN0aXZlRWZmZWN0U2NvcGUuc2NvcGVzID0gW10pKS5wdXNoKFxuICAgICAgICB0aGlzXG4gICAgICApIC0gMTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIGxldCBpLCBsO1xuICAgICAgaWYgKHRoaXMuc2NvcGVzKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSB0aGlzLnNjb3Blcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnNjb3Blc1tpXS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5lZmZlY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmVmZmVjdHNbaV0ucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlc3VtZXMgdGhlIGVmZmVjdCBzY29wZSwgaW5jbHVkaW5nIGFsbCBjaGlsZCBzY29wZXMgYW5kIGVmZmVjdHMuXG4gICAqL1xuICByZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBpLCBsO1xuICAgICAgICBpZiAodGhpcy5zY29wZXMpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5zY29wZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3Blc1tpXS5yZXN1bWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmVmZmVjdHNbaV0ucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcnVuKGZuKSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgY29uc3QgY3VycmVudEVmZmVjdFNjb3BlID0gYWN0aXZlRWZmZWN0U2NvcGU7XG4gICAgICB0cnkge1xuICAgICAgICBhY3RpdmVFZmZlY3RTY29wZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYWN0aXZlRWZmZWN0U2NvcGUgPSBjdXJyZW50RWZmZWN0U2NvcGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuKGBjYW5ub3QgcnVuIGFuIGluYWN0aXZlIGVmZmVjdCBzY29wZS5gKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIG5vbi1kZXRhY2hlZCBzY29wZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbigpIHtcbiAgICBhY3RpdmVFZmZlY3RTY29wZSA9IHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIG5vbi1kZXRhY2hlZCBzY29wZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvZmYoKSB7XG4gICAgYWN0aXZlRWZmZWN0U2NvcGUgPSB0aGlzLnBhcmVudDtcbiAgfVxuICBzdG9wKGZyb21QYXJlbnQpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxldCBpLCBsO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5lZmZlY3RzW2ldLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWZmZWN0cy5sZW5ndGggPSAwO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuY2xlYW51cHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cHNbaV0oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYW51cHMubGVuZ3RoID0gMDtcbiAgICAgIGlmICh0aGlzLnNjb3Blcykge1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5zY29wZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5zY29wZXNbaV0uc3RvcCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3Blcy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmRldGFjaGVkICYmIHRoaXMucGFyZW50ICYmICFmcm9tUGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnBhcmVudC5zY29wZXMucG9wKCk7XG4gICAgICAgIGlmIChsYXN0ICYmIGxhc3QgIT09IHRoaXMpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5zY29wZXNbdGhpcy5pbmRleF0gPSBsYXN0O1xuICAgICAgICAgIGxhc3QuaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnBhcmVudCA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVmZmVjdFNjb3BlKGRldGFjaGVkKSB7XG4gIHJldHVybiBuZXcgRWZmZWN0U2NvcGUoZGV0YWNoZWQpO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gYWN0aXZlRWZmZWN0U2NvcGU7XG59XG5mdW5jdGlvbiBvblNjb3BlRGlzcG9zZShmbiwgZmFpbFNpbGVudGx5ID0gZmFsc2UpIHtcbiAgaWYgKGFjdGl2ZUVmZmVjdFNjb3BlKSB7XG4gICAgYWN0aXZlRWZmZWN0U2NvcGUuY2xlYW51cHMucHVzaChmbik7XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhZmFpbFNpbGVudGx5KSB7XG4gICAgd2FybihcbiAgICAgIGBvblNjb3BlRGlzcG9zZSgpIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIG5vIGFjdGl2ZSBlZmZlY3Qgc2NvcGUgdG8gYmUgYXNzb2NpYXRlZCB3aXRoLmBcbiAgICApO1xuICB9XG59XG5cbmxldCBhY3RpdmVTdWI7XG5jb25zdCBFZmZlY3RGbGFncyA9IHtcbiAgXCJBQ1RJVkVcIjogMSxcbiAgXCIxXCI6IFwiQUNUSVZFXCIsXG4gIFwiUlVOTklOR1wiOiAyLFxuICBcIjJcIjogXCJSVU5OSU5HXCIsXG4gIFwiVFJBQ0tJTkdcIjogNCxcbiAgXCI0XCI6IFwiVFJBQ0tJTkdcIixcbiAgXCJOT1RJRklFRFwiOiA4LFxuICBcIjhcIjogXCJOT1RJRklFRFwiLFxuICBcIkRJUlRZXCI6IDE2LFxuICBcIjE2XCI6IFwiRElSVFlcIixcbiAgXCJBTExPV19SRUNVUlNFXCI6IDMyLFxuICBcIjMyXCI6IFwiQUxMT1dfUkVDVVJTRVwiLFxuICBcIlBBVVNFRFwiOiA2NCxcbiAgXCI2NFwiOiBcIlBBVVNFRFwiXG59O1xuY29uc3QgcGF1c2VkUXVldWVFZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jbGFzcyBSZWFjdGl2ZUVmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKGZuKSB7XG4gICAgdGhpcy5mbiA9IGZuO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuZGVwcyA9IHZvaWQgMDtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLmRlcHNUYWlsID0gdm9pZCAwO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuZmxhZ3MgPSAxIHwgNDtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLm5leHQgPSB2b2lkIDA7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5jbGVhbnVwID0gdm9pZCAwO1xuICAgIHRoaXMuc2NoZWR1bGVyID0gdm9pZCAwO1xuICAgIGlmIChhY3RpdmVFZmZlY3RTY29wZSAmJiBhY3RpdmVFZmZlY3RTY29wZS5hY3RpdmUpIHtcbiAgICAgIGFjdGl2ZUVmZmVjdFNjb3BlLmVmZmVjdHMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5mbGFncyB8PSA2NDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiA2NCkge1xuICAgICAgdGhpcy5mbGFncyAmPSB+NjQ7XG4gICAgICBpZiAocGF1c2VkUXVldWVFZmZlY3RzLmhhcyh0aGlzKSkge1xuICAgICAgICBwYXVzZWRRdWV1ZUVmZmVjdHMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbm90aWZ5KCkge1xuICAgIGlmICh0aGlzLmZsYWdzICYgMiAmJiAhKHRoaXMuZmxhZ3MgJiAzMikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEodGhpcy5mbGFncyAmIDgpKSB7XG4gICAgICBiYXRjaCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgcnVuKCkge1xuICAgIGlmICghKHRoaXMuZmxhZ3MgJiAxKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm4oKTtcbiAgICB9XG4gICAgdGhpcy5mbGFncyB8PSAyO1xuICAgIGNsZWFudXBFZmZlY3QodGhpcyk7XG4gICAgcHJlcGFyZURlcHModGhpcyk7XG4gICAgY29uc3QgcHJldkVmZmVjdCA9IGFjdGl2ZVN1YjtcbiAgICBjb25zdCBwcmV2U2hvdWxkVHJhY2sgPSBzaG91bGRUcmFjaztcbiAgICBhY3RpdmVTdWIgPSB0aGlzO1xuICAgIHNob3VsZFRyYWNrID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgYWN0aXZlU3ViICE9PSB0aGlzKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJBY3RpdmUgZWZmZWN0IHdhcyBub3QgcmVzdG9yZWQgY29ycmVjdGx5IC0gdGhpcyBpcyBsaWtlbHkgYSBWdWUgaW50ZXJuYWwgYnVnLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwRGVwcyh0aGlzKTtcbiAgICAgIGFjdGl2ZVN1YiA9IHByZXZFZmZlY3Q7XG4gICAgICBzaG91bGRUcmFjayA9IHByZXZTaG91bGRUcmFjaztcbiAgICAgIHRoaXMuZmxhZ3MgJj0gfjI7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiAxKSB7XG4gICAgICBmb3IgKGxldCBsaW5rID0gdGhpcy5kZXBzOyBsaW5rOyBsaW5rID0gbGluay5uZXh0RGVwKSB7XG4gICAgICAgIHJlbW92ZVN1YihsaW5rKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVwcyA9IHRoaXMuZGVwc1RhaWwgPSB2b2lkIDA7XG4gICAgICBjbGVhbnVwRWZmZWN0KHRoaXMpO1xuICAgICAgdGhpcy5vblN0b3AgJiYgdGhpcy5vblN0b3AoKTtcbiAgICAgIHRoaXMuZmxhZ3MgJj0gfjE7XG4gICAgfVxuICB9XG4gIHRyaWdnZXIoKSB7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiA2NCkge1xuICAgICAgcGF1c2VkUXVldWVFZmZlY3RzLmFkZCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bklmRGlydHkoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcnVuSWZEaXJ0eSgpIHtcbiAgICBpZiAoaXNEaXJ0eSh0aGlzKSkge1xuICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpcnR5KCkge1xuICAgIHJldHVybiBpc0RpcnR5KHRoaXMpO1xuICB9XG59XG5sZXQgYmF0Y2hEZXB0aCA9IDA7XG5sZXQgYmF0Y2hlZFN1YjtcbmxldCBiYXRjaGVkQ29tcHV0ZWQ7XG5mdW5jdGlvbiBiYXRjaChzdWIsIGlzQ29tcHV0ZWQgPSBmYWxzZSkge1xuICBzdWIuZmxhZ3MgfD0gODtcbiAgaWYgKGlzQ29tcHV0ZWQpIHtcbiAgICBzdWIubmV4dCA9IGJhdGNoZWRDb21wdXRlZDtcbiAgICBiYXRjaGVkQ29tcHV0ZWQgPSBzdWI7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN1Yi5uZXh0ID0gYmF0Y2hlZFN1YjtcbiAgYmF0Y2hlZFN1YiA9IHN1Yjtcbn1cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gIGJhdGNoRGVwdGgrKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoKCkge1xuICBpZiAoLS1iYXRjaERlcHRoID4gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYmF0Y2hlZENvbXB1dGVkKSB7XG4gICAgbGV0IGUgPSBiYXRjaGVkQ29tcHV0ZWQ7XG4gICAgYmF0Y2hlZENvbXB1dGVkID0gdm9pZCAwO1xuICAgIHdoaWxlIChlKSB7XG4gICAgICBjb25zdCBuZXh0ID0gZS5uZXh0O1xuICAgICAgZS5uZXh0ID0gdm9pZCAwO1xuICAgICAgZS5mbGFncyAmPSB+ODtcbiAgICAgIGUgPSBuZXh0O1xuICAgIH1cbiAgfVxuICBsZXQgZXJyb3I7XG4gIHdoaWxlIChiYXRjaGVkU3ViKSB7XG4gICAgbGV0IGUgPSBiYXRjaGVkU3ViO1xuICAgIGJhdGNoZWRTdWIgPSB2b2lkIDA7XG4gICAgd2hpbGUgKGUpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBlLm5leHQ7XG4gICAgICBlLm5leHQgPSB2b2lkIDA7XG4gICAgICBlLmZsYWdzICY9IH44O1xuICAgICAgaWYgKGUuZmxhZ3MgJiAxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGUudHJpZ2dlcigpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSA9IG5leHQ7XG4gICAgfVxuICB9XG4gIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG59XG5mdW5jdGlvbiBwcmVwYXJlRGVwcyhzdWIpIHtcbiAgZm9yIChsZXQgbGluayA9IHN1Yi5kZXBzOyBsaW5rOyBsaW5rID0gbGluay5uZXh0RGVwKSB7XG4gICAgbGluay52ZXJzaW9uID0gLTE7XG4gICAgbGluay5wcmV2QWN0aXZlTGluayA9IGxpbmsuZGVwLmFjdGl2ZUxpbms7XG4gICAgbGluay5kZXAuYWN0aXZlTGluayA9IGxpbms7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsZWFudXBEZXBzKHN1Yikge1xuICBsZXQgaGVhZDtcbiAgbGV0IHRhaWwgPSBzdWIuZGVwc1RhaWw7XG4gIGxldCBsaW5rID0gdGFpbDtcbiAgd2hpbGUgKGxpbmspIHtcbiAgICBjb25zdCBwcmV2ID0gbGluay5wcmV2RGVwO1xuICAgIGlmIChsaW5rLnZlcnNpb24gPT09IC0xKSB7XG4gICAgICBpZiAobGluayA9PT0gdGFpbCkgdGFpbCA9IHByZXY7XG4gICAgICByZW1vdmVTdWIobGluayk7XG4gICAgICByZW1vdmVEZXAobGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBsaW5rO1xuICAgIH1cbiAgICBsaW5rLmRlcC5hY3RpdmVMaW5rID0gbGluay5wcmV2QWN0aXZlTGluaztcbiAgICBsaW5rLnByZXZBY3RpdmVMaW5rID0gdm9pZCAwO1xuICAgIGxpbmsgPSBwcmV2O1xuICB9XG4gIHN1Yi5kZXBzID0gaGVhZDtcbiAgc3ViLmRlcHNUYWlsID0gdGFpbDtcbn1cbmZ1bmN0aW9uIGlzRGlydHkoc3ViKSB7XG4gIGZvciAobGV0IGxpbmsgPSBzdWIuZGVwczsgbGluazsgbGluayA9IGxpbmsubmV4dERlcCkge1xuICAgIGlmIChsaW5rLmRlcC52ZXJzaW9uICE9PSBsaW5rLnZlcnNpb24gfHwgbGluay5kZXAuY29tcHV0ZWQgJiYgKHJlZnJlc2hDb21wdXRlZChsaW5rLmRlcC5jb21wdXRlZCkgfHwgbGluay5kZXAudmVyc2lvbiAhPT0gbGluay52ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChzdWIuX2RpcnR5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gcmVmcmVzaENvbXB1dGVkKGNvbXB1dGVkKSB7XG4gIGlmIChjb21wdXRlZC5mbGFncyAmIDQgJiYgIShjb21wdXRlZC5mbGFncyAmIDE2KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wdXRlZC5mbGFncyAmPSB+MTY7XG4gIGlmIChjb21wdXRlZC5nbG9iYWxWZXJzaW9uID09PSBnbG9iYWxWZXJzaW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXB1dGVkLmdsb2JhbFZlcnNpb24gPSBnbG9iYWxWZXJzaW9uO1xuICBjb25zdCBkZXAgPSBjb21wdXRlZC5kZXA7XG4gIGNvbXB1dGVkLmZsYWdzIHw9IDI7XG4gIGlmIChkZXAudmVyc2lvbiA+IDAgJiYgIWNvbXB1dGVkLmlzU1NSICYmIGNvbXB1dGVkLmRlcHMgJiYgIWlzRGlydHkoY29tcHV0ZWQpKSB7XG4gICAgY29tcHV0ZWQuZmxhZ3MgJj0gfjI7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByZXZTdWIgPSBhY3RpdmVTdWI7XG4gIGNvbnN0IHByZXZTaG91bGRUcmFjayA9IHNob3VsZFRyYWNrO1xuICBhY3RpdmVTdWIgPSBjb21wdXRlZDtcbiAgc2hvdWxkVHJhY2sgPSB0cnVlO1xuICB0cnkge1xuICAgIHByZXBhcmVEZXBzKGNvbXB1dGVkKTtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbXB1dGVkLmZuKGNvbXB1dGVkLl92YWx1ZSk7XG4gICAgaWYgKGRlcC52ZXJzaW9uID09PSAwIHx8IGhhc0NoYW5nZWQodmFsdWUsIGNvbXB1dGVkLl92YWx1ZSkpIHtcbiAgICAgIGNvbXB1dGVkLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgZGVwLnZlcnNpb24rKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlcC52ZXJzaW9uKys7XG4gICAgdGhyb3cgZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIGFjdGl2ZVN1YiA9IHByZXZTdWI7XG4gICAgc2hvdWxkVHJhY2sgPSBwcmV2U2hvdWxkVHJhY2s7XG4gICAgY2xlYW51cERlcHMoY29tcHV0ZWQpO1xuICAgIGNvbXB1dGVkLmZsYWdzICY9IH4yO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVTdWIobGluaywgc29mdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgZGVwLCBwcmV2U3ViLCBuZXh0U3ViIH0gPSBsaW5rO1xuICBpZiAocHJldlN1Yikge1xuICAgIHByZXZTdWIubmV4dFN1YiA9IG5leHRTdWI7XG4gICAgbGluay5wcmV2U3ViID0gdm9pZCAwO1xuICB9XG4gIGlmIChuZXh0U3ViKSB7XG4gICAgbmV4dFN1Yi5wcmV2U3ViID0gcHJldlN1YjtcbiAgICBsaW5rLm5leHRTdWIgPSB2b2lkIDA7XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgZGVwLnN1YnNIZWFkID09PSBsaW5rKSB7XG4gICAgZGVwLnN1YnNIZWFkID0gbmV4dFN1YjtcbiAgfVxuICBpZiAoZGVwLnN1YnMgPT09IGxpbmspIHtcbiAgICBkZXAuc3VicyA9IHByZXZTdWI7XG4gICAgaWYgKCFwcmV2U3ViICYmIGRlcC5jb21wdXRlZCkge1xuICAgICAgZGVwLmNvbXB1dGVkLmZsYWdzICY9IH40O1xuICAgICAgZm9yIChsZXQgbCA9IGRlcC5jb21wdXRlZC5kZXBzOyBsOyBsID0gbC5uZXh0RGVwKSB7XG4gICAgICAgIHJlbW92ZVN1YihsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFzb2Z0ICYmICEtLWRlcC5zYyAmJiBkZXAubWFwKSB7XG4gICAgZGVwLm1hcC5kZWxldGUoZGVwLmtleSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZURlcChsaW5rKSB7XG4gIGNvbnN0IHsgcHJldkRlcCwgbmV4dERlcCB9ID0gbGluaztcbiAgaWYgKHByZXZEZXApIHtcbiAgICBwcmV2RGVwLm5leHREZXAgPSBuZXh0RGVwO1xuICAgIGxpbmsucHJldkRlcCA9IHZvaWQgMDtcbiAgfVxuICBpZiAobmV4dERlcCkge1xuICAgIG5leHREZXAucHJldkRlcCA9IHByZXZEZXA7XG4gICAgbGluay5uZXh0RGVwID0gdm9pZCAwO1xuICB9XG59XG5mdW5jdGlvbiBlZmZlY3QoZm4sIG9wdGlvbnMpIHtcbiAgaWYgKGZuLmVmZmVjdCBpbnN0YW5jZW9mIFJlYWN0aXZlRWZmZWN0KSB7XG4gICAgZm4gPSBmbi5lZmZlY3QuZm47XG4gIH1cbiAgY29uc3QgZSA9IG5ldyBSZWFjdGl2ZUVmZmVjdChmbik7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgZXh0ZW5kKGUsIG9wdGlvbnMpO1xuICB9XG4gIHRyeSB7XG4gICAgZS5ydW4oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZS5zdG9wKCk7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGNvbnN0IHJ1bm5lciA9IGUucnVuLmJpbmQoZSk7XG4gIHJ1bm5lci5lZmZlY3QgPSBlO1xuICByZXR1cm4gcnVubmVyO1xufVxuZnVuY3Rpb24gc3RvcChydW5uZXIpIHtcbiAgcnVubmVyLmVmZmVjdC5zdG9wKCk7XG59XG5sZXQgc2hvdWxkVHJhY2sgPSB0cnVlO1xuY29uc3QgdHJhY2tTdGFjayA9IFtdO1xuZnVuY3Rpb24gcGF1c2VUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZVRyYWNraW5nKCkge1xuICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICBzaG91bGRUcmFjayA9IHRydWU7XG59XG5mdW5jdGlvbiByZXNldFRyYWNraW5nKCkge1xuICBjb25zdCBsYXN0ID0gdHJhY2tTdGFjay5wb3AoKTtcbiAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbn1cbmZ1bmN0aW9uIG9uRWZmZWN0Q2xlYW51cChmbiwgZmFpbFNpbGVudGx5ID0gZmFsc2UpIHtcbiAgaWYgKGFjdGl2ZVN1YiBpbnN0YW5jZW9mIFJlYWN0aXZlRWZmZWN0KSB7XG4gICAgYWN0aXZlU3ViLmNsZWFudXAgPSBmbjtcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFmYWlsU2lsZW50bHkpIHtcbiAgICB3YXJuKFxuICAgICAgYG9uRWZmZWN0Q2xlYW51cCgpIHdhcyBjYWxsZWQgd2hlbiB0aGVyZSB3YXMgbm8gYWN0aXZlIGVmZmVjdCB0byBhc3NvY2lhdGUgd2l0aC5gXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xlYW51cEVmZmVjdChlKSB7XG4gIGNvbnN0IHsgY2xlYW51cCB9ID0gZTtcbiAgZS5jbGVhbnVwID0gdm9pZCAwO1xuICBpZiAoY2xlYW51cCkge1xuICAgIGNvbnN0IHByZXZTdWIgPSBhY3RpdmVTdWI7XG4gICAgYWN0aXZlU3ViID0gdm9pZCAwO1xuICAgIHRyeSB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGFjdGl2ZVN1YiA9IHByZXZTdWI7XG4gICAgfVxuICB9XG59XG5cbmxldCBnbG9iYWxWZXJzaW9uID0gMDtcbmNsYXNzIExpbmsge1xuICBjb25zdHJ1Y3RvcihzdWIsIGRlcCkge1xuICAgIHRoaXMuc3ViID0gc3ViO1xuICAgIHRoaXMuZGVwID0gZGVwO1xuICAgIHRoaXMudmVyc2lvbiA9IGRlcC52ZXJzaW9uO1xuICAgIHRoaXMubmV4dERlcCA9IHRoaXMucHJldkRlcCA9IHRoaXMubmV4dFN1YiA9IHRoaXMucHJldlN1YiA9IHRoaXMucHJldkFjdGl2ZUxpbmsgPSB2b2lkIDA7XG4gIH1cbn1cbmNsYXNzIERlcCB7XG4gIGNvbnN0cnVjdG9yKGNvbXB1dGVkKSB7XG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgIHRoaXMudmVyc2lvbiA9IDA7XG4gICAgLyoqXG4gICAgICogTGluayBiZXR3ZWVuIHRoaXMgZGVwIGFuZCB0aGUgY3VycmVudCBhY3RpdmUgZWZmZWN0XG4gICAgICovXG4gICAgdGhpcy5hY3RpdmVMaW5rID0gdm9pZCAwO1xuICAgIC8qKlxuICAgICAqIERvdWJseSBsaW5rZWQgbGlzdCByZXByZXNlbnRpbmcgdGhlIHN1YnNjcmliaW5nIGVmZmVjdHMgKHRhaWwpXG4gICAgICovXG4gICAgdGhpcy5zdWJzID0gdm9pZCAwO1xuICAgIC8qKlxuICAgICAqIEZvciBvYmplY3QgcHJvcGVydHkgZGVwcyBjbGVhbnVwXG4gICAgICovXG4gICAgdGhpcy5tYXAgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlciBjb3VudGVyXG4gICAgICovXG4gICAgdGhpcy5zYyA9IDA7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHRoaXMuc3Vic0hlYWQgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIHRyYWNrKGRlYnVnSW5mbykge1xuICAgIGlmICghYWN0aXZlU3ViIHx8ICFzaG91bGRUcmFjayB8fCBhY3RpdmVTdWIgPT09IHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFjdGl2ZUxpbms7XG4gICAgaWYgKGxpbmsgPT09IHZvaWQgMCB8fCBsaW5rLnN1YiAhPT0gYWN0aXZlU3ViKSB7XG4gICAgICBsaW5rID0gdGhpcy5hY3RpdmVMaW5rID0gbmV3IExpbmsoYWN0aXZlU3ViLCB0aGlzKTtcbiAgICAgIGlmICghYWN0aXZlU3ViLmRlcHMpIHtcbiAgICAgICAgYWN0aXZlU3ViLmRlcHMgPSBhY3RpdmVTdWIuZGVwc1RhaWwgPSBsaW5rO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluay5wcmV2RGVwID0gYWN0aXZlU3ViLmRlcHNUYWlsO1xuICAgICAgICBhY3RpdmVTdWIuZGVwc1RhaWwubmV4dERlcCA9IGxpbms7XG4gICAgICAgIGFjdGl2ZVN1Yi5kZXBzVGFpbCA9IGxpbms7XG4gICAgICB9XG4gICAgICBhZGRTdWIobGluayk7XG4gICAgfSBlbHNlIGlmIChsaW5rLnZlcnNpb24gPT09IC0xKSB7XG4gICAgICBsaW5rLnZlcnNpb24gPSB0aGlzLnZlcnNpb247XG4gICAgICBpZiAobGluay5uZXh0RGVwKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBsaW5rLm5leHREZXA7XG4gICAgICAgIG5leHQucHJldkRlcCA9IGxpbmsucHJldkRlcDtcbiAgICAgICAgaWYgKGxpbmsucHJldkRlcCkge1xuICAgICAgICAgIGxpbmsucHJldkRlcC5uZXh0RGVwID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLnByZXZEZXAgPSBhY3RpdmVTdWIuZGVwc1RhaWw7XG4gICAgICAgIGxpbmsubmV4dERlcCA9IHZvaWQgMDtcbiAgICAgICAgYWN0aXZlU3ViLmRlcHNUYWlsLm5leHREZXAgPSBsaW5rO1xuICAgICAgICBhY3RpdmVTdWIuZGVwc1RhaWwgPSBsaW5rO1xuICAgICAgICBpZiAoYWN0aXZlU3ViLmRlcHMgPT09IGxpbmspIHtcbiAgICAgICAgICBhY3RpdmVTdWIuZGVwcyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgYWN0aXZlU3ViLm9uVHJhY2spIHtcbiAgICAgIGFjdGl2ZVN1Yi5vblRyYWNrKFxuICAgICAgICBleHRlbmQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWZmZWN0OiBhY3RpdmVTdWJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlYnVnSW5mb1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbGluaztcbiAgfVxuICB0cmlnZ2VyKGRlYnVnSW5mbykge1xuICAgIHRoaXMudmVyc2lvbisrO1xuICAgIGdsb2JhbFZlcnNpb24rKztcbiAgICB0aGlzLm5vdGlmeShkZWJ1Z0luZm8pO1xuICB9XG4gIG5vdGlmeShkZWJ1Z0luZm8pIHtcbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGZvciAobGV0IGhlYWQgPSB0aGlzLnN1YnNIZWFkOyBoZWFkOyBoZWFkID0gaGVhZC5uZXh0U3ViKSB7XG4gICAgICAgICAgaWYgKGhlYWQuc3ViLm9uVHJpZ2dlciAmJiAhKGhlYWQuc3ViLmZsYWdzICYgOCkpIHtcbiAgICAgICAgICAgIGhlYWQuc3ViLm9uVHJpZ2dlcihcbiAgICAgICAgICAgICAgZXh0ZW5kKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVmZmVjdDogaGVhZC5zdWJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlYnVnSW5mb1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgbGluayA9IHRoaXMuc3ViczsgbGluazsgbGluayA9IGxpbmsucHJldlN1Yikge1xuICAgICAgICBpZiAobGluay5zdWIubm90aWZ5KCkpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgbGluay5zdWIuZGVwLm5vdGlmeSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBhZGRTdWIobGluaykge1xuICBsaW5rLmRlcC5zYysrO1xuICBpZiAobGluay5zdWIuZmxhZ3MgJiA0KSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBsaW5rLmRlcC5jb21wdXRlZDtcbiAgICBpZiAoY29tcHV0ZWQgJiYgIWxpbmsuZGVwLnN1YnMpIHtcbiAgICAgIGNvbXB1dGVkLmZsYWdzIHw9IDQgfCAxNjtcbiAgICAgIGZvciAobGV0IGwgPSBjb21wdXRlZC5kZXBzOyBsOyBsID0gbC5uZXh0RGVwKSB7XG4gICAgICAgIGFkZFN1YihsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRhaWwgPSBsaW5rLmRlcC5zdWJzO1xuICAgIGlmIChjdXJyZW50VGFpbCAhPT0gbGluaykge1xuICAgICAgbGluay5wcmV2U3ViID0gY3VycmVudFRhaWw7XG4gICAgICBpZiAoY3VycmVudFRhaWwpIGN1cnJlbnRUYWlsLm5leHRTdWIgPSBsaW5rO1xuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBsaW5rLmRlcC5zdWJzSGVhZCA9PT0gdm9pZCAwKSB7XG4gICAgICBsaW5rLmRlcC5zdWJzSGVhZCA9IGxpbms7XG4gICAgfVxuICAgIGxpbmsuZGVwLnN1YnMgPSBsaW5rO1xuICB9XG59XG5jb25zdCB0YXJnZXRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IElURVJBVEVfS0VZID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gXCJPYmplY3QgaXRlcmF0ZVwiIDogXCJcIlxuKTtcbmNvbnN0IE1BUF9LRVlfSVRFUkFURV9LRVkgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBcIk1hcCBrZXlzIGl0ZXJhdGVcIiA6IFwiXCJcbik7XG5jb25zdCBBUlJBWV9JVEVSQVRFX0tFWSA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IFwiQXJyYXkgaXRlcmF0ZVwiIDogXCJcIlxuKTtcbmZ1bmN0aW9uIHRyYWNrKHRhcmdldCwgdHlwZSwga2V5KSB7XG4gIGlmIChzaG91bGRUcmFjayAmJiBhY3RpdmVTdWIpIHtcbiAgICBsZXQgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgICBpZiAoIWRlcHNNYXApIHtcbiAgICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCBkZXBzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICAgIGlmICghZGVwKSB7XG4gICAgICBkZXBzTWFwLnNldChrZXksIGRlcCA9IG5ldyBEZXAoKSk7XG4gICAgICBkZXAubWFwID0gZGVwc01hcDtcbiAgICAgIGRlcC5rZXkgPSBrZXk7XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBkZXAudHJhY2soe1xuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGtleVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlcC50cmFjaygpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdHJpZ2dlcih0YXJnZXQsIHR5cGUsIGtleSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBvbGRUYXJnZXQpIHtcbiAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFkZXBzTWFwKSB7XG4gICAgZ2xvYmFsVmVyc2lvbisrO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBydW4gPSAoZGVwKSA9PiB7XG4gICAgaWYgKGRlcCkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgZGVwLnRyaWdnZXIoe1xuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgICBvbGRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXAudHJpZ2dlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc3RhcnRCYXRjaCgpO1xuICBpZiAodHlwZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKHJ1bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFyZ2V0SXNBcnJheSA9IGlzQXJyYXkodGFyZ2V0KTtcbiAgICBjb25zdCBpc0FycmF5SW5kZXggPSB0YXJnZXRJc0FycmF5ICYmIGlzSW50ZWdlcktleShrZXkpO1xuICAgIGlmICh0YXJnZXRJc0FycmF5ICYmIGtleSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgY29uc3QgbmV3TGVuZ3RoID0gTnVtYmVyKG5ld1ZhbHVlKTtcbiAgICAgIGRlcHNNYXAuZm9yRWFjaCgoZGVwLCBrZXkyKSA9PiB7XG4gICAgICAgIGlmIChrZXkyID09PSBcImxlbmd0aFwiIHx8IGtleTIgPT09IEFSUkFZX0lURVJBVEVfS0VZIHx8ICFpc1N5bWJvbChrZXkyKSAmJiBrZXkyID49IG5ld0xlbmd0aCkge1xuICAgICAgICAgIHJ1bihkZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleSAhPT0gdm9pZCAwIHx8IGRlcHNNYXAuaGFzKHZvaWQgMCkpIHtcbiAgICAgICAgcnVuKGRlcHNNYXAuZ2V0KGtleSkpO1xuICAgICAgfVxuICAgICAgaWYgKGlzQXJyYXlJbmRleCkge1xuICAgICAgICBydW4oZGVwc01hcC5nZXQoQVJSQVlfSVRFUkFURV9LRVkpKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgICAgaWYgKCF0YXJnZXRJc0FycmF5KSB7XG4gICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJ1bihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5SW5kZXgpIHtcbiAgICAgICAgICAgIHJ1bihkZXBzTWFwLmdldChcImxlbmd0aFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgICAgaWYgKCF0YXJnZXRJc0FycmF5KSB7XG4gICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJ1bihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJ1bihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZW5kQmF0Y2goKTtcbn1cbmZ1bmN0aW9uIGdldERlcEZyb21SZWFjdGl2ZShvYmplY3QsIGtleSkge1xuICBjb25zdCBkZXBNYXAgPSB0YXJnZXRNYXAuZ2V0KG9iamVjdCk7XG4gIHJldHVybiBkZXBNYXAgJiYgZGVwTWFwLmdldChrZXkpO1xufVxuXG5mdW5jdGlvbiByZWFjdGl2ZVJlYWRBcnJheShhcnJheSkge1xuICBjb25zdCByYXcgPSB0b1JhdyhhcnJheSk7XG4gIGlmIChyYXcgPT09IGFycmF5KSByZXR1cm4gcmF3O1xuICB0cmFjayhyYXcsIFwiaXRlcmF0ZVwiLCBBUlJBWV9JVEVSQVRFX0tFWSk7XG4gIHJldHVybiBpc1NoYWxsb3coYXJyYXkpID8gcmF3IDogcmF3Lm1hcCh0b1JlYWN0aXZlKTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dSZWFkQXJyYXkoYXJyKSB7XG4gIHRyYWNrKGFyciA9IHRvUmF3KGFyciksIFwiaXRlcmF0ZVwiLCBBUlJBWV9JVEVSQVRFX0tFWSk7XG4gIHJldHVybiBhcnI7XG59XG5jb25zdCBhcnJheUluc3RydW1lbnRhdGlvbnMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIFN5bWJvbC5pdGVyYXRvciwgdG9SZWFjdGl2ZSk7XG4gIH0sXG4gIGNvbmNhdCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLmNvbmNhdChcbiAgICAgIC4uLmFyZ3MubWFwKCh4KSA9PiBpc0FycmF5KHgpID8gcmVhY3RpdmVSZWFkQXJyYXkoeCkgOiB4KVxuICAgICk7XG4gIH0sXG4gIGVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIFwiZW50cmllc1wiLCAodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlWzFdID0gdG9SZWFjdGl2ZSh2YWx1ZVsxXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gIH0sXG4gIGV2ZXJ5KGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZXZlcnlcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmlsdGVyKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZmlsdGVyXCIsIGZuLCB0aGlzQXJnLCAodikgPT4gdi5tYXAodG9SZWFjdGl2ZSksIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGZpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kXCIsIGZuLCB0aGlzQXJnLCB0b1JlYWN0aXZlLCBhcmd1bWVudHMpO1xuICB9LFxuICBmaW5kSW5kZXgoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kSW5kZXhcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmluZExhc3QoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kTGFzdFwiLCBmbiwgdGhpc0FyZywgdG9SZWFjdGl2ZSwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmluZExhc3RJbmRleChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBhcHBseSh0aGlzLCBcImZpbmRMYXN0SW5kZXhcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgLy8gZmxhdCwgZmxhdE1hcCBjb3VsZCBiZW5lZml0IGZyb20gQVJSQVlfSVRFUkFURSBidXQgYXJlIG5vdCBzdHJhaWdodC1mb3J3YXJkIHRvIGltcGxlbWVudFxuICBmb3JFYWNoKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZm9yRWFjaFwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBpbmNsdWRlcyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHNlYXJjaFByb3h5KHRoaXMsIFwiaW5jbHVkZXNcIiwgYXJncyk7XG4gIH0sXG4gIGluZGV4T2YoLi4uYXJncykge1xuICAgIHJldHVybiBzZWFyY2hQcm94eSh0aGlzLCBcImluZGV4T2ZcIiwgYXJncyk7XG4gIH0sXG4gIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLmpvaW4oc2VwYXJhdG9yKTtcbiAgfSxcbiAgLy8ga2V5cygpIGl0ZXJhdG9yIG9ubHkgcmVhZHMgYGxlbmd0aGAsIG5vIG9wdGltaXNhdGlvbiByZXF1aXJlZFxuICBsYXN0SW5kZXhPZiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHNlYXJjaFByb3h5KHRoaXMsIFwibGFzdEluZGV4T2ZcIiwgYXJncyk7XG4gIH0sXG4gIG1hcChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBhcHBseSh0aGlzLCBcIm1hcFwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBwb3AoKSB7XG4gICAgcmV0dXJuIG5vVHJhY2tpbmcodGhpcywgXCJwb3BcIik7XG4gIH0sXG4gIHB1c2goLi4uYXJncykge1xuICAgIHJldHVybiBub1RyYWNraW5nKHRoaXMsIFwicHVzaFwiLCBhcmdzKTtcbiAgfSxcbiAgcmVkdWNlKGZuLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBcInJlZHVjZVwiLCBmbiwgYXJncyk7XG4gIH0sXG4gIHJlZHVjZVJpZ2h0KGZuLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBcInJlZHVjZVJpZ2h0XCIsIGZuLCBhcmdzKTtcbiAgfSxcbiAgc2hpZnQoKSB7XG4gICAgcmV0dXJuIG5vVHJhY2tpbmcodGhpcywgXCJzaGlmdFwiKTtcbiAgfSxcbiAgLy8gc2xpY2UgY291bGQgdXNlIEFSUkFZX0lURVJBVEUgYnV0IGFsc28gc2VlbXMgdG8gYmVnIGZvciByYW5nZSB0cmFja2luZ1xuICBzb21lKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwic29tZVwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBzcGxpY2UoLi4uYXJncykge1xuICAgIHJldHVybiBub1RyYWNraW5nKHRoaXMsIFwic3BsaWNlXCIsIGFyZ3MpO1xuICB9LFxuICB0b1JldmVyc2VkKCkge1xuICAgIHJldHVybiByZWFjdGl2ZVJlYWRBcnJheSh0aGlzKS50b1JldmVyc2VkKCk7XG4gIH0sXG4gIHRvU29ydGVkKGNvbXBhcmVyKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLnRvU29ydGVkKGNvbXBhcmVyKTtcbiAgfSxcbiAgdG9TcGxpY2VkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gcmVhY3RpdmVSZWFkQXJyYXkodGhpcykudG9TcGxpY2VkKC4uLmFyZ3MpO1xuICB9LFxuICB1bnNoaWZ0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbm9UcmFja2luZyh0aGlzLCBcInVuc2hpZnRcIiwgYXJncyk7XG4gIH0sXG4gIHZhbHVlcygpIHtcbiAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgXCJ2YWx1ZXNcIiwgdG9SZWFjdGl2ZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBpdGVyYXRvcihzZWxmLCBtZXRob2QsIHdyYXBWYWx1ZSkge1xuICBjb25zdCBhcnIgPSBzaGFsbG93UmVhZEFycmF5KHNlbGYpO1xuICBjb25zdCBpdGVyID0gYXJyW21ldGhvZF0oKTtcbiAgaWYgKGFyciAhPT0gc2VsZiAmJiAhaXNTaGFsbG93KHNlbGYpKSB7XG4gICAgaXRlci5fbmV4dCA9IGl0ZXIubmV4dDtcbiAgICBpdGVyLm5leHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBpdGVyLl9uZXh0KCk7XG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHdyYXBWYWx1ZShyZXN1bHQudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG4gIHJldHVybiBpdGVyO1xufVxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGFwcGx5KHNlbGYsIG1ldGhvZCwgZm4sIHRoaXNBcmcsIHdyYXBwZWRSZXRGbiwgYXJncykge1xuICBjb25zdCBhcnIgPSBzaGFsbG93UmVhZEFycmF5KHNlbGYpO1xuICBjb25zdCBuZWVkc1dyYXAgPSBhcnIgIT09IHNlbGYgJiYgIWlzU2hhbGxvdyhzZWxmKTtcbiAgY29uc3QgbWV0aG9kRm4gPSBhcnJbbWV0aG9kXTtcbiAgaWYgKG1ldGhvZEZuICE9PSBhcnJheVByb3RvW21ldGhvZF0pIHtcbiAgICBjb25zdCByZXN1bHQyID0gbWV0aG9kRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgcmV0dXJuIG5lZWRzV3JhcCA/IHRvUmVhY3RpdmUocmVzdWx0MikgOiByZXN1bHQyO1xuICB9XG4gIGxldCB3cmFwcGVkRm4gPSBmbjtcbiAgaWYgKGFyciAhPT0gc2VsZikge1xuICAgIGlmIChuZWVkc1dyYXApIHtcbiAgICAgIHdyYXBwZWRGbiA9IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRvUmVhY3RpdmUoaXRlbSksIGluZGV4LCBzZWxmKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmbi5sZW5ndGggPiAyKSB7XG4gICAgICB3cmFwcGVkRm4gPSBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBpdGVtLCBpbmRleCwgc2VsZik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCByZXN1bHQgPSBtZXRob2RGbi5jYWxsKGFyciwgd3JhcHBlZEZuLCB0aGlzQXJnKTtcbiAgcmV0dXJuIG5lZWRzV3JhcCAmJiB3cmFwcGVkUmV0Rm4gPyB3cmFwcGVkUmV0Rm4ocmVzdWx0KSA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHJlZHVjZShzZWxmLCBtZXRob2QsIGZuLCBhcmdzKSB7XG4gIGNvbnN0IGFyciA9IHNoYWxsb3dSZWFkQXJyYXkoc2VsZik7XG4gIGxldCB3cmFwcGVkRm4gPSBmbjtcbiAgaWYgKGFyciAhPT0gc2VsZikge1xuICAgIGlmICghaXNTaGFsbG93KHNlbGYpKSB7XG4gICAgICB3cmFwcGVkRm4gPSBmdW5jdGlvbihhY2MsIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGFjYywgdG9SZWFjdGl2ZShpdGVtKSwgaW5kZXgsIHNlbGYpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZuLmxlbmd0aCA+IDMpIHtcbiAgICAgIHdyYXBwZWRGbiA9IGZ1bmN0aW9uKGFjYywgaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgYWNjLCBpdGVtLCBpbmRleCwgc2VsZik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyW21ldGhvZF0od3JhcHBlZEZuLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIHNlYXJjaFByb3h5KHNlbGYsIG1ldGhvZCwgYXJncykge1xuICBjb25zdCBhcnIgPSB0b1JhdyhzZWxmKTtcbiAgdHJhY2soYXJyLCBcIml0ZXJhdGVcIiwgQVJSQVlfSVRFUkFURV9LRVkpO1xuICBjb25zdCByZXMgPSBhcnJbbWV0aG9kXSguLi5hcmdzKTtcbiAgaWYgKChyZXMgPT09IC0xIHx8IHJlcyA9PT0gZmFsc2UpICYmIGlzUHJveHkoYXJnc1swXSkpIHtcbiAgICBhcmdzWzBdID0gdG9SYXcoYXJnc1swXSk7XG4gICAgcmV0dXJuIGFyclttZXRob2RdKC4uLmFyZ3MpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBub1RyYWNraW5nKHNlbGYsIG1ldGhvZCwgYXJncyA9IFtdKSB7XG4gIHBhdXNlVHJhY2tpbmcoKTtcbiAgc3RhcnRCYXRjaCgpO1xuICBjb25zdCByZXMgPSB0b1JhdyhzZWxmKVttZXRob2RdLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICBlbmRCYXRjaCgpO1xuICByZXNldFRyYWNraW5nKCk7XG4gIHJldHVybiByZXM7XG59XG5cbmNvbnN0IGlzTm9uVHJhY2thYmxlS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKGBfX3Byb3RvX18sX192X2lzUmVmLF9faXNWdWVgKTtcbmNvbnN0IGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChcbiAgLyogQF9fUFVSRV9fICovIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gXCJhcmd1bWVudHNcIiAmJiBrZXkgIT09IFwiY2FsbGVyXCIpLm1hcCgoa2V5KSA9PiBTeW1ib2xba2V5XSkuZmlsdGVyKGlzU3ltYm9sKVxuKTtcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KGtleSkge1xuICBpZiAoIWlzU3ltYm9sKGtleSkpIGtleSA9IFN0cmluZyhrZXkpO1xuICBjb25zdCBvYmogPSB0b1Jhdyh0aGlzKTtcbiAgdHJhY2sob2JqLCBcImhhc1wiLCBrZXkpO1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KGtleSk7XG59XG5jbGFzcyBCYXNlUmVhY3RpdmVIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoX2lzUmVhZG9ubHkgPSBmYWxzZSwgX2lzU2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgdGhpcy5faXNSZWFkb25seSA9IF9pc1JlYWRvbmx5O1xuICAgIHRoaXMuX2lzU2hhbGxvdyA9IF9pc1NoYWxsb3c7XG4gIH1cbiAgZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgIGlmIChrZXkgPT09IFwiX192X3NraXBcIikgcmV0dXJuIHRhcmdldFtcIl9fdl9za2lwXCJdO1xuICAgIGNvbnN0IGlzUmVhZG9ubHkyID0gdGhpcy5faXNSZWFkb25seSwgaXNTaGFsbG93MiA9IHRoaXMuX2lzU2hhbGxvdztcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTI7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHkyO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1NoYWxsb3dcIikge1xuICAgICAgcmV0dXJuIGlzU2hhbGxvdzI7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IChpc1JlYWRvbmx5MiA/IGlzU2hhbGxvdzIgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IGlzU2hhbGxvdzIgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkgfHwgLy8gcmVjZWl2ZXIgaXMgbm90IHRoZSByZWFjdGl2ZSBwcm94eSwgYnV0IGhhcyB0aGUgc2FtZSBwcm90b3R5cGVcbiAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIHJlY2VpdmVyIGlzIGEgdXNlciBwcm94eSBvZiB0aGUgcmVhY3RpdmUgcHJveHlcbiAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVjZWl2ZXIpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgaWYgKCFpc1JlYWRvbmx5Mikge1xuICAgICAgbGV0IGZuO1xuICAgICAgaWYgKHRhcmdldElzQXJyYXkgJiYgKGZuID0gYXJyYXlJbnN0cnVtZW50YXRpb25zW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiaGFzT3duUHJvcGVydHlcIikge1xuICAgICAgICByZXR1cm4gaGFzT3duUHJvcGVydHk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IFJlZmxlY3QuZ2V0KFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHByb3h5IHdyYXBwaW5nIGEgcmVmLCByZXR1cm4gbWV0aG9kcyB1c2luZyB0aGUgcmF3IHJlZlxuICAgICAgLy8gYXMgcmVjZWl2ZXIgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgYHRvUmF3YCBvbiB0aGUgcmVmIGluIGFsbFxuICAgICAgLy8gaXRzIGNsYXNzIG1ldGhvZHNcbiAgICAgIGlzUmVmKHRhcmdldCkgPyB0YXJnZXQgOiByZWNlaXZlclxuICAgICk7XG4gICAgaWYgKGlzU3ltYm9sKGtleSkgPyBidWlsdEluU3ltYm9scy5oYXMoa2V5KSA6IGlzTm9uVHJhY2thYmxlS2V5cyhrZXkpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhZG9ubHkyKSB7XG4gICAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgfVxuICAgIGlmIChpc1NoYWxsb3cyKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoaXNSZWYocmVzKSkge1xuICAgICAgcmV0dXJuIHRhcmdldElzQXJyYXkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyByZXMgOiByZXMudmFsdWU7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTIgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuY2xhc3MgTXV0YWJsZVJlYWN0aXZlSGFuZGxlciBleHRlbmRzIEJhc2VSZWFjdGl2ZUhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihpc1NoYWxsb3cyID0gZmFsc2UpIHtcbiAgICBzdXBlcihmYWxzZSwgaXNTaGFsbG93Mik7XG4gIH1cbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoIXRoaXMuX2lzU2hhbGxvdykge1xuICAgICAgY29uc3QgaXNPbGRWYWx1ZVJlYWRvbmx5ID0gaXNSZWFkb25seShvbGRWYWx1ZSk7XG4gICAgICBpZiAoIWlzU2hhbGxvdyh2YWx1ZSkgJiYgIWlzUmVhZG9ubHkodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlID0gdG9SYXcob2xkVmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIGlmIChpc09sZFZhbHVlUmVhZG9ubHkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYWRLZXkgPSBpc0FycmF5KHRhcmdldCkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgdmFsdWUsXG4gICAgICBpc1JlZih0YXJnZXQpID8gdGFyZ2V0IDogcmVjZWl2ZXJcbiAgICApO1xuICAgIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaGFzKHRhcmdldCwga2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICAgIGlmICghaXNTeW1ib2woa2V5KSB8fCAhYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBvd25LZXlzKHRhcmdldCkge1xuICAgIHRyYWNrKFxuICAgICAgdGFyZ2V0LFxuICAgICAgXCJpdGVyYXRlXCIsXG4gICAgICBpc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVlcbiAgICApO1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgfVxufVxuY2xhc3MgUmVhZG9ubHlSZWFjdGl2ZUhhbmRsZXIgZXh0ZW5kcyBCYXNlUmVhY3RpdmVIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoaXNTaGFsbG93MiA9IGZhbHNlKSB7XG4gICAgc3VwZXIodHJ1ZSwgaXNTaGFsbG93Mik7XG4gIH1cbiAgc2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCxcbiAgICAgICAgdGFyZ2V0XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBgRGVsZXRlIG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsXG4gICAgICAgIHRhcmdldFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmNvbnN0IG11dGFibGVIYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTXV0YWJsZVJlYWN0aXZlSGFuZGxlcigpO1xuY29uc3QgcmVhZG9ubHlIYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUmVhZG9ubHlSZWFjdGl2ZUhhbmRsZXIoKTtcbmNvbnN0IHNoYWxsb3dSZWFjdGl2ZUhhbmRsZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNdXRhYmxlUmVhY3RpdmVIYW5kbGVyKHRydWUpO1xuY29uc3Qgc2hhbGxvd1JlYWRvbmx5SGFuZGxlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlYWRvbmx5UmVhY3RpdmVIYW5kbGVyKHRydWUpO1xuXG5jb25zdCB0b1NoYWxsb3cgPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3QgZ2V0UHJvdG8gPSAodikgPT4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih2KTtcbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgaXNSZWFkb25seTIsIGlzU2hhbGxvdzIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1wiX192X3Jhd1wiXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldElzTWFwID0gaXNNYXAocmF3VGFyZ2V0KTtcbiAgICBjb25zdCBpc1BhaXIgPSBtZXRob2QgPT09IFwiZW50cmllc1wiIHx8IG1ldGhvZCA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlzS2V5T25seSA9IG1ldGhvZCA9PT0gXCJrZXlzXCIgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaW5uZXJJdGVyYXRvciA9IHRhcmdldFttZXRob2RdKC4uLmFyZ3MpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cyID8gdG9TaGFsbG93IDogaXNSZWFkb25seTIgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAhaXNSZWFkb25seTIgJiYgdHJhY2soXG4gICAgICByYXdUYXJnZXQsXG4gICAgICBcIml0ZXJhdGVcIixcbiAgICAgIGlzS2V5T25seSA/IE1BUF9LRVlfSVRFUkFURV9LRVkgOiBJVEVSQVRFX0tFWVxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGl0ZXJhdG9yIHByb3RvY29sXG4gICAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIGRvbmUgPyB7IHZhbHVlLCBkb25lIH0gOiB7XG4gICAgICAgICAgdmFsdWU6IGlzUGFpciA/IFt3cmFwKHZhbHVlWzBdKSwgd3JhcCh2YWx1ZVsxXSldIDogd3JhcCh2YWx1ZSksXG4gICAgICAgICAgZG9uZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC8vIGl0ZXJhYmxlIHByb3RvY29sXG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWRvbmx5TWV0aG9kKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgd2FybihcbiAgICAgICAgYCR7Y2FwaXRhbGl6ZSh0eXBlKX0gb3BlcmF0aW9uICR7a2V5fWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsXG4gICAgICAgIHRvUmF3KHRoaXMpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZSA9PT0gXCJkZWxldGVcIiA/IGZhbHNlIDogdHlwZSA9PT0gXCJjbGVhclwiID8gdm9pZCAwIDogdGhpcztcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbnMocmVhZG9ubHksIHNoYWxsb3cpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1wiX192X3Jhd1wiXTtcbiAgICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICAgICAgaWYgKCFyZWFkb25seSkge1xuICAgICAgICBpZiAoaGFzQ2hhbmdlZChrZXksIHJhd0tleSkpIHtcbiAgICAgICAgICB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCByYXdLZXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBoYXMgfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gICAgICBjb25zdCB3cmFwID0gc2hhbGxvdyA/IHRvU2hhbGxvdyA6IHJlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgICBpZiAoaGFzLmNhbGwocmF3VGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQoa2V5KSk7XG4gICAgICB9IGVsc2UgaWYgKGhhcy5jYWxsKHJhd1RhcmdldCwgcmF3S2V5KSkge1xuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KHJhd0tleSkpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHJhd1RhcmdldCkge1xuICAgICAgICB0YXJnZXQuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgICAgIXJlYWRvbmx5ICYmIHRyYWNrKHRvUmF3KHRhcmdldCksIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBcInNpemVcIiwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICAgIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gICAgICBpZiAoIXJlYWRvbmx5KSB7XG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKGtleSwgcmF3S2V5KSkge1xuICAgICAgICAgIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIHJhd0tleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xuICAgIH0sXG4gICAgZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZWQgPSB0aGlzO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICAgIGNvbnN0IHdyYXAgPSBzaGFsbG93ID8gdG9TaGFsbG93IDogcmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAgICFyZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgICByZXR1cm4gdGFyZ2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgd3JhcCh2YWx1ZSksIHdyYXAoa2V5KSwgb2JzZXJ2ZWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBleHRlbmQoXG4gICAgaW5zdHJ1bWVudGF0aW9ucyxcbiAgICByZWFkb25seSA/IHtcbiAgICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJhZGRcIiksXG4gICAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwic2V0XCIpLFxuICAgICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImRlbGV0ZVwiKSxcbiAgICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImNsZWFyXCIpXG4gICAgfSA6IHtcbiAgICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXNoYWxsb3cgJiYgIWlzU2hhbGxvdyh2YWx1ZSkgJiYgIWlzUmVhZG9ubHkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gICAgICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaGFkS2V5ID0gcHJvdG8uaGFzLmNhbGwodGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFzaGFsbG93ICYmICFpc1NoYWxsb3codmFsdWUpICYmICFpc1JlYWRvbmx5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICAgICAgICBjb25zdCB7IGhhcywgZ2V0IH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgICAgICAgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhcywga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldC5jYWxsKHRhcmdldCwga2V5KTtcbiAgICAgICAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICAgICAgICBjb25zdCB7IGhhcywgZ2V0IH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgICAgICAgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhcywga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldCA/IGdldC5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICAgICAgICBpZiAoaGFkS2V5KSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gICAgICAgIGNvbnN0IGhhZEl0ZW1zID0gdGFyZ2V0LnNpemUgIT09IDA7XG4gICAgICAgIGNvbnN0IG9sZFRhcmdldCA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBpc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpIDogdm9pZCAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgaWYgKGhhZEl0ZW1zKSB7XG4gICAgICAgICAgdHJpZ2dlcihcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIFwiY2xlYXJcIixcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIG9sZFRhcmdldFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGNvbnN0IGl0ZXJhdG9yTWV0aG9kcyA9IFtcbiAgICBcImtleXNcIixcbiAgICBcInZhbHVlc1wiLFxuICAgIFwiZW50cmllc1wiLFxuICAgIFN5bWJvbC5pdGVyYXRvclxuICBdO1xuICBpdGVyYXRvck1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1ttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCByZWFkb25seSwgc2hhbGxvdyk7XG4gIH0pO1xuICByZXR1cm4gaW5zdHJ1bWVudGF0aW9ucztcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihpc1JlYWRvbmx5Miwgc2hhbGxvdykge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0gY3JlYXRlSW5zdHJ1bWVudGF0aW9ucyhpc1JlYWRvbmx5Miwgc2hhbGxvdyk7XG4gIHJldHVybiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHkyO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5MjtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmdldChcbiAgICAgIGhhc093bihpbnN0cnVtZW50YXRpb25zLCBrZXkpICYmIGtleSBpbiB0YXJnZXQgPyBpbnN0cnVtZW50YXRpb25zIDogdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgcmVjZWl2ZXJcbiAgICApO1xuICB9O1xufVxuY29uc3QgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGZhbHNlLCBmYWxzZSlcbn07XG5jb25zdCBzaGFsbG93Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoZmFsc2UsIHRydWUpXG59O1xuY29uc3QgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCBmYWxzZSlcbn07XG5jb25zdCBzaGFsbG93UmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCB0cnVlKVxufTtcbmZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzLCBrZXkpIHtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKHJhd0tleSAhPT0ga2V5ICYmIGhhcy5jYWxsKHRhcmdldCwgcmF3S2V5KSkge1xuICAgIGNvbnN0IHR5cGUgPSB0b1Jhd1R5cGUodGFyZ2V0KTtcbiAgICB3YXJuKFxuICAgICAgYFJlYWN0aXZlICR7dHlwZX0gY29udGFpbnMgYm90aCB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBvYmplY3Qke3R5cGUgPT09IGBNYXBgID8gYCBhcyBrZXlzYCA6IGBgfSwgd2hpY2ggY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW5jaWVzLiBBdm9pZCBkaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiBhbiBvYmplY3QgYW5kIG9ubHkgdXNlIHRoZSByZWFjdGl2ZSB2ZXJzaW9uIGlmIHBvc3NpYmxlLmBcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHJlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCBzaGFsbG93UmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCBzaGFsbG93UmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHRhcmdldFR5cGVNYXAocmF3VHlwZSkge1xuICBzd2l0Y2ggKHJhd1R5cGUpIHtcbiAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICByZXR1cm4gMSAvKiBDT01NT04gKi87XG4gICAgY2FzZSBcIk1hcFwiOlxuICAgIGNhc2UgXCJTZXRcIjpcbiAgICBjYXNlIFwiV2Vha01hcFwiOlxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICByZXR1cm4gMiAvKiBDT0xMRUNUSU9OICovO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMCAvKiBJTlZBTElEICovO1xuICB9XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVtcIl9fdl9za2lwXCJdIHx8ICFPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSA/IDAgLyogSU5WQUxJRCAqLyA6IHRhcmdldFR5cGVNYXAodG9SYXdUeXBlKHZhbHVlKSk7XG59XG5mdW5jdGlvbiByZWFjdGl2ZSh0YXJnZXQpIHtcbiAgaWYgKGlzUmVhZG9ubHkodGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICBmYWxzZSxcbiAgICBtdXRhYmxlSGFuZGxlcnMsXG4gICAgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyxcbiAgICByZWFjdGl2ZU1hcFxuICApO1xufVxuZnVuY3Rpb24gc2hhbGxvd1JlYWN0aXZlKHRhcmdldCkge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QoXG4gICAgdGFyZ2V0LFxuICAgIGZhbHNlLFxuICAgIHNoYWxsb3dSZWFjdGl2ZUhhbmRsZXJzLFxuICAgIHNoYWxsb3dDb2xsZWN0aW9uSGFuZGxlcnMsXG4gICAgc2hhbGxvd1JlYWN0aXZlTWFwXG4gICk7XG59XG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICB0cnVlLFxuICAgIHJlYWRvbmx5SGFuZGxlcnMsXG4gICAgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMsXG4gICAgcmVhZG9ubHlNYXBcbiAgKTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dSZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICB0cnVlLFxuICAgIHNoYWxsb3dSZWFkb25seUhhbmRsZXJzLFxuICAgIHNoYWxsb3dSZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyxcbiAgICBzaGFsbG93UmVhZG9ubHlNYXBcbiAgKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgaXNSZWFkb25seTIsIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybihcbiAgICAgICAgYHZhbHVlIGNhbm5vdCBiZSBtYWRlICR7aXNSZWFkb25seTIgPyBcInJlYWRvbmx5XCIgOiBcInJlYWN0aXZlXCJ9OiAke1N0cmluZyhcbiAgICAgICAgICB0YXJnZXRcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGlmICh0YXJnZXRbXCJfX3ZfcmF3XCJdICYmICEoaXNSZWFkb25seTIgJiYgdGFyZ2V0W1wiX192X2lzUmVhY3RpdmVcIl0pKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBleGlzdGluZ1Byb3h5ID0gcHJveHlNYXAuZ2V0KHRhcmdldCk7XG4gIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGdldFRhcmdldFR5cGUodGFyZ2V0KTtcbiAgaWYgKHRhcmdldFR5cGUgPT09IDAgLyogSU5WQUxJRCAqLykge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoXG4gICAgdGFyZ2V0LFxuICAgIHRhcmdldFR5cGUgPT09IDIgLyogQ09MTEVDVElPTiAqLyA/IGNvbGxlY3Rpb25IYW5kbGVycyA6IGJhc2VIYW5kbGVyc1xuICApO1xuICBwcm94eU1hcC5zZXQodGFyZ2V0LCBwcm94eSk7XG4gIHJldHVybiBwcm94eTtcbn1cbmZ1bmN0aW9uIGlzUmVhY3RpdmUodmFsdWUpIHtcbiAgaWYgKGlzUmVhZG9ubHkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzUmVhY3RpdmUodmFsdWVbXCJfX3ZfcmF3XCJdKTtcbiAgfVxuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbXCJfX3ZfaXNSZWFjdGl2ZVwiXSk7XG59XG5mdW5jdGlvbiBpc1JlYWRvbmx5KHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZVtcIl9fdl9pc1JlYWRvbmx5XCJdKTtcbn1cbmZ1bmN0aW9uIGlzU2hhbGxvdyh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbXCJfX3ZfaXNTaGFsbG93XCJdKTtcbn1cbmZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gISF2YWx1ZVtcIl9fdl9yYXdcIl0gOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRvUmF3KG9ic2VydmVkKSB7XG4gIGNvbnN0IHJhdyA9IG9ic2VydmVkICYmIG9ic2VydmVkW1wiX192X3Jhd1wiXTtcbiAgcmV0dXJuIHJhdyA/IHRvUmF3KHJhdykgOiBvYnNlcnZlZDtcbn1cbmZ1bmN0aW9uIG1hcmtSYXcodmFsdWUpIHtcbiAgaWYgKCFoYXNPd24odmFsdWUsIFwiX192X3NraXBcIikgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkpIHtcbiAgICBkZWYodmFsdWUsIFwiX192X3NraXBcIiwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuY29uc3QgdG9SZWFjdGl2ZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhY3RpdmUodmFsdWUpIDogdmFsdWU7XG5jb25zdCB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFkb25seSh2YWx1ZSkgOiB2YWx1ZTtcblxuZnVuY3Rpb24gaXNSZWYocikge1xuICByZXR1cm4gciA/IHJbXCJfX3ZfaXNSZWZcIl0gPT09IHRydWUgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHJlZih2YWx1ZSkge1xuICByZXR1cm4gY3JlYXRlUmVmKHZhbHVlLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBzaGFsbG93UmVmKHZhbHVlKSB7XG4gIHJldHVybiBjcmVhdGVSZWYodmFsdWUsIHRydWUpO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVmKHJhd1ZhbHVlLCBzaGFsbG93KSB7XG4gIGlmIChpc1JlZihyYXdWYWx1ZSkpIHtcbiAgICByZXR1cm4gcmF3VmFsdWU7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWZJbXBsKHJhd1ZhbHVlLCBzaGFsbG93KTtcbn1cbmNsYXNzIFJlZkltcGwge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSwgaXNTaGFsbG93Mikge1xuICAgIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICAgIHRoaXNbXCJfX3ZfaXNSZWZcIl0gPSB0cnVlO1xuICAgIHRoaXNbXCJfX3ZfaXNTaGFsbG93XCJdID0gZmFsc2U7XG4gICAgdGhpcy5fcmF3VmFsdWUgPSBpc1NoYWxsb3cyID8gdmFsdWUgOiB0b1Jhdyh2YWx1ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSBpc1NoYWxsb3cyID8gdmFsdWUgOiB0b1JlYWN0aXZlKHZhbHVlKTtcbiAgICB0aGlzW1wiX192X2lzU2hhbGxvd1wiXSA9IGlzU2hhbGxvdzI7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB0aGlzLmRlcC50cmFjayh7XG4gICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAga2V5OiBcInZhbHVlXCJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcC50cmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl9yYXdWYWx1ZTtcbiAgICBjb25zdCB1c2VEaXJlY3RWYWx1ZSA9IHRoaXNbXCJfX3ZfaXNTaGFsbG93XCJdIHx8IGlzU2hhbGxvdyhuZXdWYWx1ZSkgfHwgaXNSZWFkb25seShuZXdWYWx1ZSk7XG4gICAgbmV3VmFsdWUgPSB1c2VEaXJlY3RWYWx1ZSA/IG5ld1ZhbHVlIDogdG9SYXcobmV3VmFsdWUpO1xuICAgIGlmIChoYXNDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVzZURpcmVjdFZhbHVlID8gbmV3VmFsdWUgOiB0b1JlYWN0aXZlKG5ld1ZhbHVlKTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIHRoaXMuZGVwLnRyaWdnZXIoe1xuICAgICAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgICAgIG5ld1ZhbHVlLFxuICAgICAgICAgIG9sZFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXAudHJpZ2dlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdHJpZ2dlclJlZihyZWYyKSB7XG4gIGlmIChyZWYyLmRlcCkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICByZWYyLmRlcC50cmlnZ2VyKHtcbiAgICAgICAgdGFyZ2V0OiByZWYyLFxuICAgICAgICB0eXBlOiBcInNldFwiLFxuICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgbmV3VmFsdWU6IHJlZjIuX3ZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmMi5kZXAudHJpZ2dlcigpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdW5yZWYocmVmMikge1xuICByZXR1cm4gaXNSZWYocmVmMikgPyByZWYyLnZhbHVlIDogcmVmMjtcbn1cbmZ1bmN0aW9uIHRvVmFsdWUoc291cmNlKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHNvdXJjZSkgPyBzb3VyY2UoKSA6IHVucmVmKHNvdXJjZSk7XG59XG5jb25zdCBzaGFsbG93VW53cmFwSGFuZGxlcnMgPSB7XG4gIGdldDogKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ga2V5ID09PSBcIl9fdl9yYXdcIiA/IHRhcmdldCA6IHVucmVmKFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikpLFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIHByb3h5UmVmcyhvYmplY3RXaXRoUmVmcykge1xuICByZXR1cm4gaXNSZWFjdGl2ZShvYmplY3RXaXRoUmVmcykgPyBvYmplY3RXaXRoUmVmcyA6IG5ldyBQcm94eShvYmplY3RXaXRoUmVmcywgc2hhbGxvd1Vud3JhcEhhbmRsZXJzKTtcbn1cbmNsYXNzIEN1c3RvbVJlZkltcGwge1xuICBjb25zdHJ1Y3RvcihmYWN0b3J5KSB7XG4gICAgdGhpc1tcIl9fdl9pc1JlZlwiXSA9IHRydWU7XG4gICAgdGhpcy5fdmFsdWUgPSB2b2lkIDA7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXAgPSBuZXcgRGVwKCk7XG4gICAgY29uc3QgeyBnZXQsIHNldCB9ID0gZmFjdG9yeShkZXAudHJhY2suYmluZChkZXApLCBkZXAudHJpZ2dlci5iaW5kKGRlcCkpO1xuICAgIHRoaXMuX2dldCA9IGdldDtcbiAgICB0aGlzLl9zZXQgPSBzZXQ7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSA9IHRoaXMuX2dldCgpO1xuICB9XG4gIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICB0aGlzLl9zZXQobmV3VmFsKTtcbiAgfVxufVxuZnVuY3Rpb24gY3VzdG9tUmVmKGZhY3RvcnkpIHtcbiAgcmV0dXJuIG5ldyBDdXN0b21SZWZJbXBsKGZhY3RvcnkpO1xufVxuZnVuY3Rpb24gdG9SZWZzKG9iamVjdCkge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNQcm94eShvYmplY3QpKSB7XG4gICAgd2FybihgdG9SZWZzKCkgZXhwZWN0cyBhIHJlYWN0aXZlIG9iamVjdCBidXQgcmVjZWl2ZWQgYSBwbGFpbiBvbmUuYCk7XG4gIH1cbiAgY29uc3QgcmV0ID0gaXNBcnJheShvYmplY3QpID8gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpIDoge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJldFtrZXldID0gcHJvcGVydHlUb1JlZihvYmplY3QsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbmNsYXNzIE9iamVjdFJlZkltcGwge1xuICBjb25zdHJ1Y3Rvcihfb2JqZWN0LCBfa2V5LCBfZGVmYXVsdFZhbHVlKSB7XG4gICAgdGhpcy5fb2JqZWN0ID0gX29iamVjdDtcbiAgICB0aGlzLl9rZXkgPSBfa2V5O1xuICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IF9kZWZhdWx0VmFsdWU7XG4gICAgdGhpc1tcIl9fdl9pc1JlZlwiXSA9IHRydWU7XG4gICAgdGhpcy5fdmFsdWUgPSB2b2lkIDA7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX29iamVjdFt0aGlzLl9rZXldO1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSA9IHZhbCA9PT0gdm9pZCAwID8gdGhpcy5fZGVmYXVsdFZhbHVlIDogdmFsO1xuICB9XG4gIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICB0aGlzLl9vYmplY3RbdGhpcy5fa2V5XSA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgZGVwKCkge1xuICAgIHJldHVybiBnZXREZXBGcm9tUmVhY3RpdmUodG9SYXcodGhpcy5fb2JqZWN0KSwgdGhpcy5fa2V5KTtcbiAgfVxufVxuY2xhc3MgR2V0dGVyUmVmSW1wbCB7XG4gIGNvbnN0cnVjdG9yKF9nZXR0ZXIpIHtcbiAgICB0aGlzLl9nZXR0ZXIgPSBfZ2V0dGVyO1xuICAgIHRoaXNbXCJfX3ZfaXNSZWZcIl0gPSB0cnVlO1xuICAgIHRoaXNbXCJfX3ZfaXNSZWFkb25seVwiXSA9IHRydWU7XG4gICAgdGhpcy5fdmFsdWUgPSB2b2lkIDA7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSA9IHRoaXMuX2dldHRlcigpO1xuICB9XG59XG5mdW5jdGlvbiB0b1JlZihzb3VyY2UsIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChpc1JlZihzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNvdXJjZSkpIHtcbiAgICByZXR1cm4gbmV3IEdldHRlclJlZkltcGwoc291cmNlKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChzb3VyY2UpICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5VG9SZWYoc291cmNlLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZihzb3VyY2UpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9wZXJ0eVRvUmVmKHNvdXJjZSwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgY29uc3QgdmFsID0gc291cmNlW2tleV07XG4gIHJldHVybiBpc1JlZih2YWwpID8gdmFsIDogbmV3IE9iamVjdFJlZkltcGwoc291cmNlLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG59XG5cbmNsYXNzIENvbXB1dGVkUmVmSW1wbCB7XG4gIGNvbnN0cnVjdG9yKGZuLCBzZXR0ZXIsIGlzU1NSKSB7XG4gICAgdGhpcy5mbiA9IGZuO1xuICAgIHRoaXMuc2V0dGVyID0gc2V0dGVyO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuX3ZhbHVlID0gdm9pZCAwO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuZGVwID0gbmV3IERlcCh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgLy8gVE9ETyBpc29sYXRlZERlY2xhcmF0aW9ucyBcIl9fdl9pc1JlYWRvbmx5XCJcbiAgICAvLyBBIGNvbXB1dGVkIGlzIGFsc28gYSBzdWJzY3JpYmVyIHRoYXQgdHJhY2tzIG90aGVyIGRlcHNcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLmRlcHMgPSB2b2lkIDA7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5kZXBzVGFpbCA9IHZvaWQgMDtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLmZsYWdzID0gMTY7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxWZXJzaW9uID0gZ2xvYmFsVmVyc2lvbiAtIDE7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5uZXh0ID0gdm9pZCAwO1xuICAgIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgdGhpcy5lZmZlY3QgPSB0aGlzO1xuICAgIHRoaXNbXCJfX3ZfaXNSZWFkb25seVwiXSA9ICFzZXR0ZXI7XG4gICAgdGhpcy5pc1NTUiA9IGlzU1NSO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5vdGlmeSgpIHtcbiAgICB0aGlzLmZsYWdzIHw9IDE2O1xuICAgIGlmICghKHRoaXMuZmxhZ3MgJiA4KSAmJiAvLyBhdm9pZCBpbmZpbml0ZSBzZWxmIHJlY3Vyc2lvblxuICAgIGFjdGl2ZVN1YiAhPT0gdGhpcykge1xuICAgICAgYmF0Y2godGhpcywgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIDtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgY29uc3QgbGluayA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyB0aGlzLmRlcC50cmFjayh7XG4gICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICB0eXBlOiBcImdldFwiLFxuICAgICAga2V5OiBcInZhbHVlXCJcbiAgICB9KSA6IHRoaXMuZGVwLnRyYWNrKCk7XG4gICAgcmVmcmVzaENvbXB1dGVkKHRoaXMpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBsaW5rLnZlcnNpb24gPSB0aGlzLmRlcC52ZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2V0dGVyKSB7XG4gICAgICB0aGlzLnNldHRlcihuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuKFwiV3JpdGUgb3BlcmF0aW9uIGZhaWxlZDogY29tcHV0ZWQgdmFsdWUgaXMgcmVhZG9ubHlcIik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjb21wdXRlZChnZXR0ZXJPck9wdGlvbnMsIGRlYnVnT3B0aW9ucywgaXNTU1IgPSBmYWxzZSkge1xuICBsZXQgZ2V0dGVyO1xuICBsZXQgc2V0dGVyO1xuICBpZiAoaXNGdW5jdGlvbihnZXR0ZXJPck9wdGlvbnMpKSB7XG4gICAgZ2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIGdldHRlciA9IGdldHRlck9yT3B0aW9ucy5nZXQ7XG4gICAgc2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zLnNldDtcbiAgfVxuICBjb25zdCBjUmVmID0gbmV3IENvbXB1dGVkUmVmSW1wbChnZXR0ZXIsIHNldHRlciwgaXNTU1IpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBkZWJ1Z09wdGlvbnMgJiYgIWlzU1NSKSB7XG4gICAgY1JlZi5vblRyYWNrID0gZGVidWdPcHRpb25zLm9uVHJhY2s7XG4gICAgY1JlZi5vblRyaWdnZXIgPSBkZWJ1Z09wdGlvbnMub25UcmlnZ2VyO1xuICB9XG4gIHJldHVybiBjUmVmO1xufVxuXG5jb25zdCBUcmFja09wVHlwZXMgPSB7XG4gIFwiR0VUXCI6IFwiZ2V0XCIsXG4gIFwiSEFTXCI6IFwiaGFzXCIsXG4gIFwiSVRFUkFURVwiOiBcIml0ZXJhdGVcIlxufTtcbmNvbnN0IFRyaWdnZXJPcFR5cGVzID0ge1xuICBcIlNFVFwiOiBcInNldFwiLFxuICBcIkFERFwiOiBcImFkZFwiLFxuICBcIkRFTEVURVwiOiBcImRlbGV0ZVwiLFxuICBcIkNMRUFSXCI6IFwiY2xlYXJcIlxufTtcbmNvbnN0IFJlYWN0aXZlRmxhZ3MgPSB7XG4gIFwiU0tJUFwiOiBcIl9fdl9za2lwXCIsXG4gIFwiSVNfUkVBQ1RJVkVcIjogXCJfX3ZfaXNSZWFjdGl2ZVwiLFxuICBcIklTX1JFQURPTkxZXCI6IFwiX192X2lzUmVhZG9ubHlcIixcbiAgXCJJU19TSEFMTE9XXCI6IFwiX192X2lzU2hhbGxvd1wiLFxuICBcIlJBV1wiOiBcIl9fdl9yYXdcIixcbiAgXCJJU19SRUZcIjogXCJfX3ZfaXNSZWZcIlxufTtcblxuY29uc3QgV2F0Y2hFcnJvckNvZGVzID0ge1xuICBcIldBVENIX0dFVFRFUlwiOiAyLFxuICBcIjJcIjogXCJXQVRDSF9HRVRURVJcIixcbiAgXCJXQVRDSF9DQUxMQkFDS1wiOiAzLFxuICBcIjNcIjogXCJXQVRDSF9DQUxMQkFDS1wiLFxuICBcIldBVENIX0NMRUFOVVBcIjogNCxcbiAgXCI0XCI6IFwiV0FUQ0hfQ0xFQU5VUFwiXG59O1xuY29uc3QgSU5JVElBTF9XQVRDSEVSX1ZBTFVFID0ge307XG5jb25zdCBjbGVhbnVwTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5sZXQgYWN0aXZlV2F0Y2hlciA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdldEN1cnJlbnRXYXRjaGVyKCkge1xuICByZXR1cm4gYWN0aXZlV2F0Y2hlcjtcbn1cbmZ1bmN0aW9uIG9uV2F0Y2hlckNsZWFudXAoY2xlYW51cEZuLCBmYWlsU2lsZW50bHkgPSBmYWxzZSwgb3duZXIgPSBhY3RpdmVXYXRjaGVyKSB7XG4gIGlmIChvd25lcikge1xuICAgIGxldCBjbGVhbnVwcyA9IGNsZWFudXBNYXAuZ2V0KG93bmVyKTtcbiAgICBpZiAoIWNsZWFudXBzKSBjbGVhbnVwTWFwLnNldChvd25lciwgY2xlYW51cHMgPSBbXSk7XG4gICAgY2xlYW51cHMucHVzaChjbGVhbnVwRm4pO1xuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWZhaWxTaWxlbnRseSkge1xuICAgIHdhcm4oXG4gICAgICBgb25XYXRjaGVyQ2xlYW51cCgpIHdhcyBjYWxsZWQgd2hlbiB0aGVyZSB3YXMgbm8gYWN0aXZlIHdhdGNoZXIgdG8gYXNzb2NpYXRlIHdpdGguYFxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIHdhdGNoKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgY29uc3QgeyBpbW1lZGlhdGUsIGRlZXAsIG9uY2UsIHNjaGVkdWxlciwgYXVnbWVudEpvYiwgY2FsbCB9ID0gb3B0aW9ucztcbiAgY29uc3Qgd2FybkludmFsaWRTb3VyY2UgPSAocykgPT4ge1xuICAgIChvcHRpb25zLm9uV2FybiB8fCB3YXJuKShcbiAgICAgIGBJbnZhbGlkIHdhdGNoIHNvdXJjZTogYCxcbiAgICAgIHMsXG4gICAgICBgQSB3YXRjaCBzb3VyY2UgY2FuIG9ubHkgYmUgYSBnZXR0ZXIvZWZmZWN0IGZ1bmN0aW9uLCBhIHJlZiwgYSByZWFjdGl2ZSBvYmplY3QsIG9yIGFuIGFycmF5IG9mIHRoZXNlIHR5cGVzLmBcbiAgICApO1xuICB9O1xuICBjb25zdCByZWFjdGl2ZUdldHRlciA9IChzb3VyY2UyKSA9PiB7XG4gICAgaWYgKGRlZXApIHJldHVybiBzb3VyY2UyO1xuICAgIGlmIChpc1NoYWxsb3coc291cmNlMikgfHwgZGVlcCA9PT0gZmFsc2UgfHwgZGVlcCA9PT0gMClcbiAgICAgIHJldHVybiB0cmF2ZXJzZShzb3VyY2UyLCAxKTtcbiAgICByZXR1cm4gdHJhdmVyc2Uoc291cmNlMik7XG4gIH07XG4gIGxldCBlZmZlY3Q7XG4gIGxldCBnZXR0ZXI7XG4gIGxldCBjbGVhbnVwO1xuICBsZXQgYm91bmRDbGVhbnVwO1xuICBsZXQgZm9yY2VUcmlnZ2VyID0gZmFsc2U7XG4gIGxldCBpc011bHRpU291cmNlID0gZmFsc2U7XG4gIGlmIChpc1JlZihzb3VyY2UpKSB7XG4gICAgZ2V0dGVyID0gKCkgPT4gc291cmNlLnZhbHVlO1xuICAgIGZvcmNlVHJpZ2dlciA9IGlzU2hhbGxvdyhzb3VyY2UpO1xuICB9IGVsc2UgaWYgKGlzUmVhY3RpdmUoc291cmNlKSkge1xuICAgIGdldHRlciA9ICgpID0+IHJlYWN0aXZlR2V0dGVyKHNvdXJjZSk7XG4gICAgZm9yY2VUcmlnZ2VyID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHNvdXJjZSkpIHtcbiAgICBpc011bHRpU291cmNlID0gdHJ1ZTtcbiAgICBmb3JjZVRyaWdnZXIgPSBzb3VyY2Uuc29tZSgocykgPT4gaXNSZWFjdGl2ZShzKSB8fCBpc1NoYWxsb3cocykpO1xuICAgIGdldHRlciA9ICgpID0+IHNvdXJjZS5tYXAoKHMpID0+IHtcbiAgICAgIGlmIChpc1JlZihzKSkge1xuICAgICAgICByZXR1cm4gcy52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZWFjdGl2ZShzKSkge1xuICAgICAgICByZXR1cm4gcmVhY3RpdmVHZXR0ZXIocyk7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ocykpIHtcbiAgICAgICAgcmV0dXJuIGNhbGwgPyBjYWxsKHMsIDIpIDogcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuSW52YWxpZFNvdXJjZShzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNvdXJjZSkpIHtcbiAgICBpZiAoY2IpIHtcbiAgICAgIGdldHRlciA9IGNhbGwgPyAoKSA9PiBjYWxsKHNvdXJjZSwgMikgOiBzb3VyY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldHRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNsZWFudXApIHtcbiAgICAgICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50RWZmZWN0ID0gYWN0aXZlV2F0Y2hlcjtcbiAgICAgICAgYWN0aXZlV2F0Y2hlciA9IGVmZmVjdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gY2FsbCA/IGNhbGwoc291cmNlLCAzLCBbYm91bmRDbGVhbnVwXSkgOiBzb3VyY2UoYm91bmRDbGVhbnVwKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBhY3RpdmVXYXRjaGVyID0gY3VycmVudEVmZmVjdDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2V0dGVyID0gTk9PUDtcbiAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm5JbnZhbGlkU291cmNlKHNvdXJjZSk7XG4gIH1cbiAgaWYgKGNiICYmIGRlZXApIHtcbiAgICBjb25zdCBiYXNlR2V0dGVyID0gZ2V0dGVyO1xuICAgIGNvbnN0IGRlcHRoID0gZGVlcCA9PT0gdHJ1ZSA/IEluZmluaXR5IDogZGVlcDtcbiAgICBnZXR0ZXIgPSAoKSA9PiB0cmF2ZXJzZShiYXNlR2V0dGVyKCksIGRlcHRoKTtcbiAgfVxuICBjb25zdCBzY29wZSA9IGdldEN1cnJlbnRTY29wZSgpO1xuICBjb25zdCB3YXRjaEhhbmRsZSA9ICgpID0+IHtcbiAgICBlZmZlY3Quc3RvcCgpO1xuICAgIGlmIChzY29wZSAmJiBzY29wZS5hY3RpdmUpIHtcbiAgICAgIHJlbW92ZShzY29wZS5lZmZlY3RzLCBlZmZlY3QpO1xuICAgIH1cbiAgfTtcbiAgaWYgKG9uY2UgJiYgY2IpIHtcbiAgICBjb25zdCBfY2IgPSBjYjtcbiAgICBjYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBfY2IoLi4uYXJncyk7XG4gICAgICB3YXRjaEhhbmRsZSgpO1xuICAgIH07XG4gIH1cbiAgbGV0IG9sZFZhbHVlID0gaXNNdWx0aVNvdXJjZSA/IG5ldyBBcnJheShzb3VyY2UubGVuZ3RoKS5maWxsKElOSVRJQUxfV0FUQ0hFUl9WQUxVRSkgOiBJTklUSUFMX1dBVENIRVJfVkFMVUU7XG4gIGNvbnN0IGpvYiA9IChpbW1lZGlhdGVGaXJzdFJ1bikgPT4ge1xuICAgIGlmICghKGVmZmVjdC5mbGFncyAmIDEpIHx8ICFlZmZlY3QuZGlydHkgJiYgIWltbWVkaWF0ZUZpcnN0UnVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYikge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBlZmZlY3QucnVuKCk7XG4gICAgICBpZiAoZGVlcCB8fCBmb3JjZVRyaWdnZXIgfHwgKGlzTXVsdGlTb3VyY2UgPyBuZXdWYWx1ZS5zb21lKCh2LCBpKSA9PiBoYXNDaGFuZ2VkKHYsIG9sZFZhbHVlW2ldKSkgOiBoYXNDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkpKSB7XG4gICAgICAgIGlmIChjbGVhbnVwKSB7XG4gICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXYXRjaGVyID0gYWN0aXZlV2F0Y2hlcjtcbiAgICAgICAgYWN0aXZlV2F0Y2hlciA9IGVmZmVjdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhcmdzID0gW1xuICAgICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgICAvLyBwYXNzIHVuZGVmaW5lZCBhcyB0aGUgb2xkIHZhbHVlIHdoZW4gaXQncyBjaGFuZ2VkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgb2xkVmFsdWUgPT09IElOSVRJQUxfV0FUQ0hFUl9WQUxVRSA/IHZvaWQgMCA6IGlzTXVsdGlTb3VyY2UgJiYgb2xkVmFsdWVbMF0gPT09IElOSVRJQUxfV0FUQ0hFUl9WQUxVRSA/IFtdIDogb2xkVmFsdWUsXG4gICAgICAgICAgICBib3VuZENsZWFudXBcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNhbGwgPyBjYWxsKGNiLCAzLCBhcmdzKSA6IChcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIGNiKC4uLmFyZ3MpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvbGRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGFjdGl2ZVdhdGNoZXIgPSBjdXJyZW50V2F0Y2hlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlZmZlY3QucnVuKCk7XG4gICAgfVxuICB9O1xuICBpZiAoYXVnbWVudEpvYikge1xuICAgIGF1Z21lbnRKb2Ioam9iKTtcbiAgfVxuICBlZmZlY3QgPSBuZXcgUmVhY3RpdmVFZmZlY3QoZ2V0dGVyKTtcbiAgZWZmZWN0LnNjaGVkdWxlciA9IHNjaGVkdWxlciA/ICgpID0+IHNjaGVkdWxlcihqb2IsIGZhbHNlKSA6IGpvYjtcbiAgYm91bmRDbGVhbnVwID0gKGZuKSA9PiBvbldhdGNoZXJDbGVhbnVwKGZuLCBmYWxzZSwgZWZmZWN0KTtcbiAgY2xlYW51cCA9IGVmZmVjdC5vblN0b3AgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xlYW51cHMgPSBjbGVhbnVwTWFwLmdldChlZmZlY3QpO1xuICAgIGlmIChjbGVhbnVwcykge1xuICAgICAgaWYgKGNhbGwpIHtcbiAgICAgICAgY2FsbChjbGVhbnVwcywgNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGNsZWFudXAyIG9mIGNsZWFudXBzKSBjbGVhbnVwMigpO1xuICAgICAgfVxuICAgICAgY2xlYW51cE1hcC5kZWxldGUoZWZmZWN0KTtcbiAgICB9XG4gIH07XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgZWZmZWN0Lm9uVHJhY2sgPSBvcHRpb25zLm9uVHJhY2s7XG4gICAgZWZmZWN0Lm9uVHJpZ2dlciA9IG9wdGlvbnMub25UcmlnZ2VyO1xuICB9XG4gIGlmIChjYikge1xuICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgIGpvYih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSBlZmZlY3QucnVuKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNjaGVkdWxlcikge1xuICAgIHNjaGVkdWxlcihqb2IuYmluZChudWxsLCB0cnVlKSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZWZmZWN0LnJ1bigpO1xuICB9XG4gIHdhdGNoSGFuZGxlLnBhdXNlID0gZWZmZWN0LnBhdXNlLmJpbmQoZWZmZWN0KTtcbiAgd2F0Y2hIYW5kbGUucmVzdW1lID0gZWZmZWN0LnJlc3VtZS5iaW5kKGVmZmVjdCk7XG4gIHdhdGNoSGFuZGxlLnN0b3AgPSB3YXRjaEhhbmRsZTtcbiAgcmV0dXJuIHdhdGNoSGFuZGxlO1xufVxuZnVuY3Rpb24gdHJhdmVyc2UodmFsdWUsIGRlcHRoID0gSW5maW5pdHksIHNlZW4pIHtcbiAgaWYgKGRlcHRoIDw9IDAgfHwgIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZVtcIl9fdl9za2lwXCJdKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHNlZW4gPSBzZWVuIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgc2Vlbi5hZGQodmFsdWUpO1xuICBkZXB0aC0tO1xuICBpZiAoaXNSZWYodmFsdWUpKSB7XG4gICAgdHJhdmVyc2UodmFsdWUudmFsdWUsIGRlcHRoLCBzZWVuKTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlW2ldLCBkZXB0aCwgc2Vlbik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzU2V0KHZhbHVlKSB8fCBpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICB0cmF2ZXJzZSh2LCBkZXB0aCwgc2Vlbik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgdHJhdmVyc2UodmFsdWVba2V5XSwgZGVwdGgsIHNlZW4pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHZhbHVlKSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICB0cmF2ZXJzZSh2YWx1ZVtrZXldLCBkZXB0aCwgc2Vlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IHsgQVJSQVlfSVRFUkFURV9LRVksIEVmZmVjdEZsYWdzLCBFZmZlY3RTY29wZSwgSVRFUkFURV9LRVksIE1BUF9LRVlfSVRFUkFURV9LRVksIFJlYWN0aXZlRWZmZWN0LCBSZWFjdGl2ZUZsYWdzLCBUcmFja09wVHlwZXMsIFRyaWdnZXJPcFR5cGVzLCBXYXRjaEVycm9yQ29kZXMsIGNvbXB1dGVkLCBjdXN0b21SZWYsIGVmZmVjdCwgZWZmZWN0U2NvcGUsIGVuYWJsZVRyYWNraW5nLCBnZXRDdXJyZW50U2NvcGUsIGdldEN1cnJlbnRXYXRjaGVyLCBpc1Byb3h5LCBpc1JlYWN0aXZlLCBpc1JlYWRvbmx5LCBpc1JlZiwgaXNTaGFsbG93LCBtYXJrUmF3LCBvbkVmZmVjdENsZWFudXAsIG9uU2NvcGVEaXNwb3NlLCBvbldhdGNoZXJDbGVhbnVwLCBwYXVzZVRyYWNraW5nLCBwcm94eVJlZnMsIHJlYWN0aXZlLCByZWFjdGl2ZVJlYWRBcnJheSwgcmVhZG9ubHksIHJlZiwgcmVzZXRUcmFja2luZywgc2hhbGxvd1JlYWN0aXZlLCBzaGFsbG93UmVhZEFycmF5LCBzaGFsbG93UmVhZG9ubHksIHNoYWxsb3dSZWYsIHN0b3AsIHRvUmF3LCB0b1JlYWN0aXZlLCB0b1JlYWRvbmx5LCB0b1JlZiwgdG9SZWZzLCB0b1ZhbHVlLCB0cmFjaywgdHJhdmVyc2UsIHRyaWdnZXIsIHRyaWdnZXJSZWYsIHVucmVmLCB3YXRjaCB9O1xuIiwiLyoqXG4qIEB2dWUvcnVudGltZS1jb3JlIHYzLjUuMTNcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmltcG9ydCB7IHBhdXNlVHJhY2tpbmcsIHJlc2V0VHJhY2tpbmcsIGlzUmVmLCB0b1JhdywgdHJhdmVyc2UsIHNoYWxsb3dSZWYsIHJlYWRvbmx5LCBpc1JlYWN0aXZlLCByZWYsIGlzU2hhbGxvdywgc2hhbGxvd1JlYWRBcnJheSwgdG9SZWFjdGl2ZSwgc2hhbGxvd1JlYWRvbmx5LCB0cmFjaywgcmVhY3RpdmUsIHNoYWxsb3dSZWFjdGl2ZSwgdHJpZ2dlciwgUmVhY3RpdmVFZmZlY3QsIHdhdGNoIGFzIHdhdGNoJDEsIGN1c3RvbVJlZiwgaXNQcm94eSwgcHJveHlSZWZzLCBtYXJrUmF3LCBFZmZlY3RTY29wZSwgY29tcHV0ZWQgYXMgY29tcHV0ZWQkMSwgaXNSZWFkb25seSB9IGZyb20gJ0B2dWUvcmVhY3Rpdml0eSc7XG5leHBvcnQgeyBFZmZlY3RTY29wZSwgUmVhY3RpdmVFZmZlY3QsIFRyYWNrT3BUeXBlcywgVHJpZ2dlck9wVHlwZXMsIGN1c3RvbVJlZiwgZWZmZWN0LCBlZmZlY3RTY29wZSwgZ2V0Q3VycmVudFNjb3BlLCBnZXRDdXJyZW50V2F0Y2hlciwgaXNQcm94eSwgaXNSZWFjdGl2ZSwgaXNSZWFkb25seSwgaXNSZWYsIGlzU2hhbGxvdywgbWFya1Jhdywgb25TY29wZURpc3Bvc2UsIG9uV2F0Y2hlckNsZWFudXAsIHByb3h5UmVmcywgcmVhY3RpdmUsIHJlYWRvbmx5LCByZWYsIHNoYWxsb3dSZWFjdGl2ZSwgc2hhbGxvd1JlYWRvbmx5LCBzaGFsbG93UmVmLCBzdG9wLCB0b1JhdywgdG9SZWYsIHRvUmVmcywgdG9WYWx1ZSwgdHJpZ2dlclJlZiwgdW5yZWYgfSBmcm9tICdAdnVlL3JlYWN0aXZpdHknO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzRnVuY3Rpb24sIGlzUHJvbWlzZSwgaXNBcnJheSwgRU1QVFlfT0JKLCBOT09QLCBnZXRHbG9iYWxUaGlzLCBleHRlbmQsIGlzQnVpbHRJbkRpcmVjdGl2ZSwgaGFzT3duLCByZW1vdmUsIGRlZiwgaXNPbiwgaXNSZXNlcnZlZFByb3AsIG5vcm1hbGl6ZUNsYXNzLCBzdHJpbmdpZnlTdHlsZSwgbm9ybWFsaXplU3R5bGUsIGlzS25vd25TdmdBdHRyLCBpc0Jvb2xlYW5BdHRyLCBpc0tub3duSHRtbEF0dHIsIGluY2x1ZGVCb29sZWFuQXR0ciwgaXNSZW5kZXJhYmxlQXR0clZhbHVlLCBnZXRFc2NhcGVkQ3NzVmFyTmFtZSwgaXNPYmplY3QsIGlzUmVnRXhwLCBpbnZva2VBcnJheUZucywgdG9IYW5kbGVyS2V5LCBjYXBpdGFsaXplLCBjYW1lbGl6ZSwgaXNTeW1ib2wsIGlzR2xvYmFsbHlBbGxvd2VkLCBOTywgaHlwaGVuYXRlLCBFTVBUWV9BUlIsIHRvUmF3VHlwZSwgbWFrZU1hcCwgaGFzQ2hhbmdlZCwgbG9vc2VUb051bWJlciwgaXNNb2RlbExpc3RlbmVyLCB0b051bWJlciB9IGZyb20gJ0B2dWUvc2hhcmVkJztcbmV4cG9ydCB7IGNhbWVsaXplLCBjYXBpdGFsaXplLCBub3JtYWxpemVDbGFzcywgbm9ybWFsaXplUHJvcHMsIG5vcm1hbGl6ZVN0eWxlLCB0b0Rpc3BsYXlTdHJpbmcsIHRvSGFuZGxlcktleSB9IGZyb20gJ0B2dWUvc2hhcmVkJztcblxuY29uc3Qgc3RhY2sgPSBbXTtcbmZ1bmN0aW9uIHB1c2hXYXJuaW5nQ29udGV4dCh2bm9kZSkge1xuICBzdGFjay5wdXNoKHZub2RlKTtcbn1cbmZ1bmN0aW9uIHBvcFdhcm5pbmdDb250ZXh0KCkge1xuICBzdGFjay5wb3AoKTtcbn1cbmxldCBpc1dhcm5pbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHdhcm4kMShtc2csIC4uLmFyZ3MpIHtcbiAgaWYgKGlzV2FybmluZykgcmV0dXJuO1xuICBpc1dhcm5pbmcgPSB0cnVlO1xuICBwYXVzZVRyYWNraW5nKCk7XG4gIGNvbnN0IGluc3RhbmNlID0gc3RhY2subGVuZ3RoID8gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0uY29tcG9uZW50IDogbnVsbDtcbiAgY29uc3QgYXBwV2FybkhhbmRsZXIgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5hcHBDb250ZXh0LmNvbmZpZy53YXJuSGFuZGxlcjtcbiAgY29uc3QgdHJhY2UgPSBnZXRDb21wb25lbnRUcmFjZSgpO1xuICBpZiAoYXBwV2FybkhhbmRsZXIpIHtcbiAgICBjYWxsV2l0aEVycm9ySGFuZGxpbmcoXG4gICAgICBhcHBXYXJuSGFuZGxlcixcbiAgICAgIGluc3RhbmNlLFxuICAgICAgMTEsXG4gICAgICBbXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBtc2cgKyBhcmdzLm1hcCgoYSkgPT4ge1xuICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IGEudG9TdHJpbmcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKGEpKSAhPSBudWxsID8gX2IgOiBKU09OLnN0cmluZ2lmeShhKTtcbiAgICAgICAgfSkuam9pbihcIlwiKSxcbiAgICAgICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UucHJveHksXG4gICAgICAgIHRyYWNlLm1hcChcbiAgICAgICAgICAoeyB2bm9kZSB9KSA9PiBgYXQgPCR7Zm9ybWF0Q29tcG9uZW50TmFtZShpbnN0YW5jZSwgdm5vZGUudHlwZSl9PmBcbiAgICAgICAgKS5qb2luKFwiXFxuXCIpLFxuICAgICAgICB0cmFjZVxuICAgICAgXVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgd2FybkFyZ3MgPSBbYFtWdWUgd2Fybl06ICR7bXNnfWAsIC4uLmFyZ3NdO1xuICAgIGlmICh0cmFjZS5sZW5ndGggJiYgLy8gYXZvaWQgc3BhbW1pbmcgY29uc29sZSBkdXJpbmcgdGVzdHNcbiAgICB0cnVlKSB7XG4gICAgICB3YXJuQXJncy5wdXNoKGBcbmAsIC4uLmZvcm1hdFRyYWNlKHRyYWNlKSk7XG4gICAgfVxuICAgIGNvbnNvbGUud2FybiguLi53YXJuQXJncyk7XG4gIH1cbiAgcmVzZXRUcmFja2luZygpO1xuICBpc1dhcm5pbmcgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldENvbXBvbmVudFRyYWNlKCkge1xuICBsZXQgY3VycmVudFZOb2RlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gIGlmICghY3VycmVudFZOb2RlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWRTdGFjayA9IFtdO1xuICB3aGlsZSAoY3VycmVudFZOb2RlKSB7XG4gICAgY29uc3QgbGFzdCA9IG5vcm1hbGl6ZWRTdGFja1swXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LnZub2RlID09PSBjdXJyZW50Vk5vZGUpIHtcbiAgICAgIGxhc3QucmVjdXJzZUNvdW50Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vcm1hbGl6ZWRTdGFjay5wdXNoKHtcbiAgICAgICAgdm5vZGU6IGN1cnJlbnRWTm9kZSxcbiAgICAgICAgcmVjdXJzZUNvdW50OiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50SW5zdGFuY2UgPSBjdXJyZW50Vk5vZGUuY29tcG9uZW50ICYmIGN1cnJlbnRWTm9kZS5jb21wb25lbnQucGFyZW50O1xuICAgIGN1cnJlbnRWTm9kZSA9IHBhcmVudEluc3RhbmNlICYmIHBhcmVudEluc3RhbmNlLnZub2RlO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkU3RhY2s7XG59XG5mdW5jdGlvbiBmb3JtYXRUcmFjZSh0cmFjZSkge1xuICBjb25zdCBsb2dzID0gW107XG4gIHRyYWNlLmZvckVhY2goKGVudHJ5LCBpKSA9PiB7XG4gICAgbG9ncy5wdXNoKC4uLmkgPT09IDAgPyBbXSA6IFtgXG5gXSwgLi4uZm9ybWF0VHJhY2VFbnRyeShlbnRyeSkpO1xuICB9KTtcbiAgcmV0dXJuIGxvZ3M7XG59XG5mdW5jdGlvbiBmb3JtYXRUcmFjZUVudHJ5KHsgdm5vZGUsIHJlY3Vyc2VDb3VudCB9KSB7XG4gIGNvbnN0IHBvc3RmaXggPSByZWN1cnNlQ291bnQgPiAwID8gYC4uLiAoJHtyZWN1cnNlQ291bnR9IHJlY3Vyc2l2ZSBjYWxscylgIDogYGA7XG4gIGNvbnN0IGlzUm9vdCA9IHZub2RlLmNvbXBvbmVudCA/IHZub2RlLmNvbXBvbmVudC5wYXJlbnQgPT0gbnVsbCA6IGZhbHNlO1xuICBjb25zdCBvcGVuID0gYCBhdCA8JHtmb3JtYXRDb21wb25lbnROYW1lKFxuICAgIHZub2RlLmNvbXBvbmVudCxcbiAgICB2bm9kZS50eXBlLFxuICAgIGlzUm9vdFxuICApfWA7XG4gIGNvbnN0IGNsb3NlID0gYD5gICsgcG9zdGZpeDtcbiAgcmV0dXJuIHZub2RlLnByb3BzID8gW29wZW4sIC4uLmZvcm1hdFByb3BzKHZub2RlLnByb3BzKSwgY2xvc2VdIDogW29wZW4gKyBjbG9zZV07XG59XG5mdW5jdGlvbiBmb3JtYXRQcm9wcyhwcm9wcykge1xuICBjb25zdCByZXMgPSBbXTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAga2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXMucHVzaCguLi5mb3JtYXRQcm9wKGtleSwgcHJvcHNba2V5XSkpO1xuICB9KTtcbiAgaWYgKGtleXMubGVuZ3RoID4gMykge1xuICAgIHJlcy5wdXNoKGAgLi4uYCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGZvcm1hdFByb3Aoa2V5LCB2YWx1ZSwgcmF3KSB7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICByZXR1cm4gcmF3ID8gdmFsdWUgOiBbYCR7a2V5fT0ke3ZhbHVlfWBdO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gcmF3ID8gdmFsdWUgOiBbYCR7a2V5fT0ke3ZhbHVlfWBdO1xuICB9IGVsc2UgaWYgKGlzUmVmKHZhbHVlKSkge1xuICAgIHZhbHVlID0gZm9ybWF0UHJvcChrZXksIHRvUmF3KHZhbHVlLnZhbHVlKSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHJhdyA/IHZhbHVlIDogW2Ake2tleX09UmVmPGAsIHZhbHVlLCBgPmBdO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIFtgJHtrZXl9PWZuJHt2YWx1ZS5uYW1lID8gYDwke3ZhbHVlLm5hbWV9PmAgOiBgYH1gXTtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgICByZXR1cm4gcmF3ID8gdmFsdWUgOiBbYCR7a2V5fT1gLCB2YWx1ZV07XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydE51bWJlcih2YWwsIHR5cGUpIHtcbiAgaWYgKCEhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47XG4gIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSBcIm51bWJlclwiKSB7XG4gICAgd2FybiQxKGAke3R5cGV9IGlzIG5vdCBhIHZhbGlkIG51bWJlciAtIGdvdCAke0pTT04uc3RyaW5naWZ5KHZhbCl9LmApO1xuICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICB3YXJuJDEoYCR7dHlwZX0gaXMgTmFOIC0gdGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LmApO1xuICB9XG59XG5cbmNvbnN0IEVycm9yQ29kZXMgPSB7XG4gIFwiU0VUVVBfRlVOQ1RJT05cIjogMCxcbiAgXCIwXCI6IFwiU0VUVVBfRlVOQ1RJT05cIixcbiAgXCJSRU5ERVJfRlVOQ1RJT05cIjogMSxcbiAgXCIxXCI6IFwiUkVOREVSX0ZVTkNUSU9OXCIsXG4gIFwiTkFUSVZFX0VWRU5UX0hBTkRMRVJcIjogNSxcbiAgXCI1XCI6IFwiTkFUSVZFX0VWRU5UX0hBTkRMRVJcIixcbiAgXCJDT01QT05FTlRfRVZFTlRfSEFORExFUlwiOiA2LFxuICBcIjZcIjogXCJDT01QT05FTlRfRVZFTlRfSEFORExFUlwiLFxuICBcIlZOT0RFX0hPT0tcIjogNyxcbiAgXCI3XCI6IFwiVk5PREVfSE9PS1wiLFxuICBcIkRJUkVDVElWRV9IT09LXCI6IDgsXG4gIFwiOFwiOiBcIkRJUkVDVElWRV9IT09LXCIsXG4gIFwiVFJBTlNJVElPTl9IT09LXCI6IDksXG4gIFwiOVwiOiBcIlRSQU5TSVRJT05fSE9PS1wiLFxuICBcIkFQUF9FUlJPUl9IQU5ETEVSXCI6IDEwLFxuICBcIjEwXCI6IFwiQVBQX0VSUk9SX0hBTkRMRVJcIixcbiAgXCJBUFBfV0FSTl9IQU5ETEVSXCI6IDExLFxuICBcIjExXCI6IFwiQVBQX1dBUk5fSEFORExFUlwiLFxuICBcIkZVTkNUSU9OX1JFRlwiOiAxMixcbiAgXCIxMlwiOiBcIkZVTkNUSU9OX1JFRlwiLFxuICBcIkFTWU5DX0NPTVBPTkVOVF9MT0FERVJcIjogMTMsXG4gIFwiMTNcIjogXCJBU1lOQ19DT01QT05FTlRfTE9BREVSXCIsXG4gIFwiU0NIRURVTEVSXCI6IDE0LFxuICBcIjE0XCI6IFwiU0NIRURVTEVSXCIsXG4gIFwiQ09NUE9ORU5UX1VQREFURVwiOiAxNSxcbiAgXCIxNVwiOiBcIkNPTVBPTkVOVF9VUERBVEVcIixcbiAgXCJBUFBfVU5NT1VOVF9DTEVBTlVQXCI6IDE2LFxuICBcIjE2XCI6IFwiQVBQX1VOTU9VTlRfQ0xFQU5VUFwiXG59O1xuY29uc3QgRXJyb3JUeXBlU3RyaW5ncyQxID0ge1xuICBbXCJzcFwiXTogXCJzZXJ2ZXJQcmVmZXRjaCBob29rXCIsXG4gIFtcImJjXCJdOiBcImJlZm9yZUNyZWF0ZSBob29rXCIsXG4gIFtcImNcIl06IFwiY3JlYXRlZCBob29rXCIsXG4gIFtcImJtXCJdOiBcImJlZm9yZU1vdW50IGhvb2tcIixcbiAgW1wibVwiXTogXCJtb3VudGVkIGhvb2tcIixcbiAgW1wiYnVcIl06IFwiYmVmb3JlVXBkYXRlIGhvb2tcIixcbiAgW1widVwiXTogXCJ1cGRhdGVkXCIsXG4gIFtcImJ1bVwiXTogXCJiZWZvcmVVbm1vdW50IGhvb2tcIixcbiAgW1widW1cIl06IFwidW5tb3VudGVkIGhvb2tcIixcbiAgW1wiYVwiXTogXCJhY3RpdmF0ZWQgaG9va1wiLFxuICBbXCJkYVwiXTogXCJkZWFjdGl2YXRlZCBob29rXCIsXG4gIFtcImVjXCJdOiBcImVycm9yQ2FwdHVyZWQgaG9va1wiLFxuICBbXCJydGNcIl06IFwicmVuZGVyVHJhY2tlZCBob29rXCIsXG4gIFtcInJ0Z1wiXTogXCJyZW5kZXJUcmlnZ2VyZWQgaG9va1wiLFxuICBbMF06IFwic2V0dXAgZnVuY3Rpb25cIixcbiAgWzFdOiBcInJlbmRlciBmdW5jdGlvblwiLFxuICBbMl06IFwid2F0Y2hlciBnZXR0ZXJcIixcbiAgWzNdOiBcIndhdGNoZXIgY2FsbGJhY2tcIixcbiAgWzRdOiBcIndhdGNoZXIgY2xlYW51cCBmdW5jdGlvblwiLFxuICBbNV06IFwibmF0aXZlIGV2ZW50IGhhbmRsZXJcIixcbiAgWzZdOiBcImNvbXBvbmVudCBldmVudCBoYW5kbGVyXCIsXG4gIFs3XTogXCJ2bm9kZSBob29rXCIsXG4gIFs4XTogXCJkaXJlY3RpdmUgaG9va1wiLFxuICBbOV06IFwidHJhbnNpdGlvbiBob29rXCIsXG4gIFsxMF06IFwiYXBwIGVycm9ySGFuZGxlclwiLFxuICBbMTFdOiBcImFwcCB3YXJuSGFuZGxlclwiLFxuICBbMTJdOiBcInJlZiBmdW5jdGlvblwiLFxuICBbMTNdOiBcImFzeW5jIGNvbXBvbmVudCBsb2FkZXJcIixcbiAgWzE0XTogXCJzY2hlZHVsZXIgZmx1c2hcIixcbiAgWzE1XTogXCJjb21wb25lbnQgdXBkYXRlXCIsXG4gIFsxNl06IFwiYXBwIHVubW91bnQgY2xlYW51cCBmdW5jdGlvblwiXG59O1xuZnVuY3Rpb24gY2FsbFdpdGhFcnJvckhhbmRsaW5nKGZuLCBpbnN0YW5jZSwgdHlwZSwgYXJncykge1xuICB0cnkge1xuICAgIHJldHVybiBhcmdzID8gZm4oLi4uYXJncykgOiBmbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBoYW5kbGVFcnJvcihlcnIsIGluc3RhbmNlLCB0eXBlKTtcbiAgfVxufVxuZnVuY3Rpb24gY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoZm4sIGluc3RhbmNlLCB0eXBlLCBhcmdzKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgIGNvbnN0IHJlcyA9IGNhbGxXaXRoRXJyb3JIYW5kbGluZyhmbiwgaW5zdGFuY2UsIHR5cGUsIGFyZ3MpO1xuICAgIGlmIChyZXMgJiYgaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcy5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVyciwgaW5zdGFuY2UsIHR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYgKGlzQXJyYXkoZm4pKSB7XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzLnB1c2goY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoZm5baV0sIGluc3RhbmNlLCB0eXBlLCBhcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHdhcm4kMShcbiAgICAgIGBJbnZhbGlkIHZhbHVlIHR5cGUgcGFzc2VkIHRvIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKCk6ICR7dHlwZW9mIGZufWBcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIsIGluc3RhbmNlLCB0eXBlLCB0aHJvd0luRGV2ID0gdHJ1ZSkge1xuICBjb25zdCBjb250ZXh0Vk5vZGUgPSBpbnN0YW5jZSA/IGluc3RhbmNlLnZub2RlIDogbnVsbDtcbiAgY29uc3QgeyBlcnJvckhhbmRsZXIsIHRocm93VW5oYW5kbGVkRXJyb3JJblByb2R1Y3Rpb24gfSA9IGluc3RhbmNlICYmIGluc3RhbmNlLmFwcENvbnRleHQuY29uZmlnIHx8IEVNUFRZX09CSjtcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgbGV0IGN1ciA9IGluc3RhbmNlLnBhcmVudDtcbiAgICBjb25zdCBleHBvc2VkSW5zdGFuY2UgPSBpbnN0YW5jZS5wcm94eTtcbiAgICBjb25zdCBlcnJvckluZm8gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gRXJyb3JUeXBlU3RyaW5ncyQxW3R5cGVdIDogYGh0dHBzOi8vdnVlanMub3JnL2Vycm9yLXJlZmVyZW5jZS8jcnVudGltZS0ke3R5cGV9YDtcbiAgICB3aGlsZSAoY3VyKSB7XG4gICAgICBjb25zdCBlcnJvckNhcHR1cmVkSG9va3MgPSBjdXIuZWM7XG4gICAgICBpZiAoZXJyb3JDYXB0dXJlZEhvb2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JDYXB0dXJlZEhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGVycm9yQ2FwdHVyZWRIb29rc1tpXShlcnIsIGV4cG9zZWRJbnN0YW5jZSwgZXJyb3JJbmZvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1ciA9IGN1ci5wYXJlbnQ7XG4gICAgfVxuICAgIGlmIChlcnJvckhhbmRsZXIpIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIGNhbGxXaXRoRXJyb3JIYW5kbGluZyhlcnJvckhhbmRsZXIsIG51bGwsIDEwLCBbXG4gICAgICAgIGVycixcbiAgICAgICAgZXhwb3NlZEluc3RhbmNlLFxuICAgICAgICBlcnJvckluZm9cbiAgICAgIF0pO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHR5cGUsIGNvbnRleHRWTm9kZSwgdGhyb3dJbkRldiwgdGhyb3dVbmhhbmRsZWRFcnJvckluUHJvZHVjdGlvbik7XG59XG5mdW5jdGlvbiBsb2dFcnJvcihlcnIsIHR5cGUsIGNvbnRleHRWTm9kZSwgdGhyb3dJbkRldiA9IHRydWUsIHRocm93SW5Qcm9kID0gZmFsc2UpIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBjb25zdCBpbmZvID0gRXJyb3JUeXBlU3RyaW5ncyQxW3R5cGVdO1xuICAgIGlmIChjb250ZXh0Vk5vZGUpIHtcbiAgICAgIHB1c2hXYXJuaW5nQ29udGV4dChjb250ZXh0Vk5vZGUpO1xuICAgIH1cbiAgICB3YXJuJDEoYFVuaGFuZGxlZCBlcnJvciR7aW5mbyA/IGAgZHVyaW5nIGV4ZWN1dGlvbiBvZiAke2luZm99YCA6IGBgfWApO1xuICAgIGlmIChjb250ZXh0Vk5vZGUpIHtcbiAgICAgIHBvcFdhcm5pbmdDb250ZXh0KCk7XG4gICAgfVxuICAgIGlmICh0aHJvd0luRGV2KSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGhyb3dJblByb2QpIHtcbiAgICB0aHJvdyBlcnI7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmNvbnN0IHF1ZXVlID0gW107XG5sZXQgZmx1c2hJbmRleCA9IC0xO1xuY29uc3QgcGVuZGluZ1Bvc3RGbHVzaENicyA9IFtdO1xubGV0IGFjdGl2ZVBvc3RGbHVzaENicyA9IG51bGw7XG5sZXQgcG9zdEZsdXNoSW5kZXggPSAwO1xuY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xubGV0IGN1cnJlbnRGbHVzaFByb21pc2UgPSBudWxsO1xuY29uc3QgUkVDVVJTSU9OX0xJTUlUID0gMTAwO1xuZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgY29uc3QgcCA9IGN1cnJlbnRGbHVzaFByb21pc2UgfHwgcmVzb2x2ZWRQcm9taXNlO1xuICByZXR1cm4gZm4gPyBwLnRoZW4odGhpcyA/IGZuLmJpbmQodGhpcykgOiBmbikgOiBwO1xufVxuZnVuY3Rpb24gZmluZEluc2VydGlvbkluZGV4KGlkKSB7XG4gIGxldCBzdGFydCA9IGZsdXNoSW5kZXggKyAxO1xuICBsZXQgZW5kID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCBtaWRkbGUgPSBzdGFydCArIGVuZCA+Pj4gMTtcbiAgICBjb25zdCBtaWRkbGVKb2IgPSBxdWV1ZVttaWRkbGVdO1xuICAgIGNvbnN0IG1pZGRsZUpvYklkID0gZ2V0SWQobWlkZGxlSm9iKTtcbiAgICBpZiAobWlkZGxlSm9iSWQgPCBpZCB8fCBtaWRkbGVKb2JJZCA9PT0gaWQgJiYgbWlkZGxlSm9iLmZsYWdzICYgMikge1xuICAgICAgc3RhcnQgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmQgPSBtaWRkbGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGFydDtcbn1cbmZ1bmN0aW9uIHF1ZXVlSm9iKGpvYikge1xuICBpZiAoIShqb2IuZmxhZ3MgJiAxKSkge1xuICAgIGNvbnN0IGpvYklkID0gZ2V0SWQoam9iKTtcbiAgICBjb25zdCBsYXN0Sm9iID0gcXVldWVbcXVldWUubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFsYXN0Sm9iIHx8IC8vIGZhc3QgcGF0aCB3aGVuIHRoZSBqb2IgaWQgaXMgbGFyZ2VyIHRoYW4gdGhlIHRhaWxcbiAgICAhKGpvYi5mbGFncyAmIDIpICYmIGpvYklkID49IGdldElkKGxhc3RKb2IpKSB7XG4gICAgICBxdWV1ZS5wdXNoKGpvYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXVlLnNwbGljZShmaW5kSW5zZXJ0aW9uSW5kZXgoam9iSWQpLCAwLCBqb2IpO1xuICAgIH1cbiAgICBqb2IuZmxhZ3MgfD0gMTtcbiAgICBxdWV1ZUZsdXNoKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghY3VycmVudEZsdXNoUHJvbWlzZSkge1xuICAgIGN1cnJlbnRGbHVzaFByb21pc2UgPSByZXNvbHZlZFByb21pc2UudGhlbihmbHVzaEpvYnMpO1xuICB9XG59XG5mdW5jdGlvbiBxdWV1ZVBvc3RGbHVzaENiKGNiKSB7XG4gIGlmICghaXNBcnJheShjYikpIHtcbiAgICBpZiAoYWN0aXZlUG9zdEZsdXNoQ2JzICYmIGNiLmlkID09PSAtMSkge1xuICAgICAgYWN0aXZlUG9zdEZsdXNoQ2JzLnNwbGljZShwb3N0Rmx1c2hJbmRleCArIDEsIDAsIGNiKTtcbiAgICB9IGVsc2UgaWYgKCEoY2IuZmxhZ3MgJiAxKSkge1xuICAgICAgcGVuZGluZ1Bvc3RGbHVzaENicy5wdXNoKGNiKTtcbiAgICAgIGNiLmZsYWdzIHw9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBlbmRpbmdQb3N0Rmx1c2hDYnMucHVzaCguLi5jYik7XG4gIH1cbiAgcXVldWVGbHVzaCgpO1xufVxuZnVuY3Rpb24gZmx1c2hQcmVGbHVzaENicyhpbnN0YW5jZSwgc2VlbiwgaSA9IGZsdXNoSW5kZXggKyAxKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgc2VlbiA9IHNlZW4gfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2IgPSBxdWV1ZVtpXTtcbiAgICBpZiAoY2IgJiYgY2IuZmxhZ3MgJiAyKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgY2IuaWQgIT09IGluc3RhbmNlLnVpZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBjYikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICBpLS07XG4gICAgICBpZiAoY2IuZmxhZ3MgJiA0KSB7XG4gICAgICAgIGNiLmZsYWdzICY9IH4xO1xuICAgICAgfVxuICAgICAgY2IoKTtcbiAgICAgIGlmICghKGNiLmZsYWdzICYgNCkpIHtcbiAgICAgICAgY2IuZmxhZ3MgJj0gfjE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBmbHVzaFBvc3RGbHVzaENicyhzZWVuKSB7XG4gIGlmIChwZW5kaW5nUG9zdEZsdXNoQ2JzLmxlbmd0aCkge1xuICAgIGNvbnN0IGRlZHVwZWQgPSBbLi4ubmV3IFNldChwZW5kaW5nUG9zdEZsdXNoQ2JzKV0uc29ydChcbiAgICAgIChhLCBiKSA9PiBnZXRJZChhKSAtIGdldElkKGIpXG4gICAgKTtcbiAgICBwZW5kaW5nUG9zdEZsdXNoQ2JzLmxlbmd0aCA9IDA7XG4gICAgaWYgKGFjdGl2ZVBvc3RGbHVzaENicykge1xuICAgICAgYWN0aXZlUG9zdEZsdXNoQ2JzLnB1c2goLi4uZGVkdXBlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZVBvc3RGbHVzaENicyA9IGRlZHVwZWQ7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHNlZW4gPSBzZWVuIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGZvciAocG9zdEZsdXNoSW5kZXggPSAwOyBwb3N0Rmx1c2hJbmRleCA8IGFjdGl2ZVBvc3RGbHVzaENicy5sZW5ndGg7IHBvc3RGbHVzaEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNiID0gYWN0aXZlUG9zdEZsdXNoQ2JzW3Bvc3RGbHVzaEluZGV4XTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBjYikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2IuZmxhZ3MgJiA0KSB7XG4gICAgICAgIGNiLmZsYWdzICY9IH4xO1xuICAgICAgfVxuICAgICAgaWYgKCEoY2IuZmxhZ3MgJiA4KSkgY2IoKTtcbiAgICAgIGNiLmZsYWdzICY9IH4xO1xuICAgIH1cbiAgICBhY3RpdmVQb3N0Rmx1c2hDYnMgPSBudWxsO1xuICAgIHBvc3RGbHVzaEluZGV4ID0gMDtcbiAgfVxufVxuY29uc3QgZ2V0SWQgPSAoam9iKSA9PiBqb2IuaWQgPT0gbnVsbCA/IGpvYi5mbGFncyAmIDIgPyAtMSA6IEluZmluaXR5IDogam9iLmlkO1xuZnVuY3Rpb24gZmx1c2hKb2JzKHNlZW4pIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBzZWVuID0gc2VlbiB8fCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICB9XG4gIGNvbnN0IGNoZWNrID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IChqb2IpID0+IGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBqb2IpIDogTk9PUDtcbiAgdHJ5IHtcbiAgICBmb3IgKGZsdXNoSW5kZXggPSAwOyBmbHVzaEluZGV4IDwgcXVldWUubGVuZ3RoOyBmbHVzaEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGpvYiA9IHF1ZXVlW2ZsdXNoSW5kZXhdO1xuICAgICAgaWYgKGpvYiAmJiAhKGpvYi5mbGFncyAmIDgpKSB7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrKGpvYikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoam9iLmZsYWdzICYgNCkge1xuICAgICAgICAgIGpvYi5mbGFncyAmPSB+MTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsV2l0aEVycm9ySGFuZGxpbmcoXG4gICAgICAgICAgam9iLFxuICAgICAgICAgIGpvYi5pLFxuICAgICAgICAgIGpvYi5pID8gMTUgOiAxNFxuICAgICAgICApO1xuICAgICAgICBpZiAoIShqb2IuZmxhZ3MgJiA0KSkge1xuICAgICAgICAgIGpvYi5mbGFncyAmPSB+MTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBmb3IgKDsgZmx1c2hJbmRleCA8IHF1ZXVlLmxlbmd0aDsgZmx1c2hJbmRleCsrKSB7XG4gICAgICBjb25zdCBqb2IgPSBxdWV1ZVtmbHVzaEluZGV4XTtcbiAgICAgIGlmIChqb2IpIHtcbiAgICAgICAgam9iLmZsYWdzICY9IH4xO1xuICAgICAgfVxuICAgIH1cbiAgICBmbHVzaEluZGV4ID0gLTE7XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBmbHVzaFBvc3RGbHVzaENicyhzZWVuKTtcbiAgICBjdXJyZW50Rmx1c2hQcm9taXNlID0gbnVsbDtcbiAgICBpZiAocXVldWUubGVuZ3RoIHx8IHBlbmRpbmdQb3N0Rmx1c2hDYnMubGVuZ3RoKSB7XG4gICAgICBmbHVzaEpvYnMoc2Vlbik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjaGVja1JlY3Vyc2l2ZVVwZGF0ZXMoc2VlbiwgZm4pIHtcbiAgY29uc3QgY291bnQgPSBzZWVuLmdldChmbikgfHwgMDtcbiAgaWYgKGNvdW50ID4gUkVDVVJTSU9OX0xJTUlUKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBmbi5pO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBpbnN0YW5jZSAmJiBnZXRDb21wb25lbnROYW1lKGluc3RhbmNlLnR5cGUpO1xuICAgIGhhbmRsZUVycm9yKFxuICAgICAgYE1heGltdW0gcmVjdXJzaXZlIHVwZGF0ZXMgZXhjZWVkZWQke2NvbXBvbmVudE5hbWUgPyBgIGluIGNvbXBvbmVudCA8JHtjb21wb25lbnROYW1lfT5gIDogYGB9LiBUaGlzIG1lYW5zIHlvdSBoYXZlIGEgcmVhY3RpdmUgZWZmZWN0IHRoYXQgaXMgbXV0YXRpbmcgaXRzIG93biBkZXBlbmRlbmNpZXMgYW5kIHRodXMgcmVjdXJzaXZlbHkgdHJpZ2dlcmluZyBpdHNlbGYuIFBvc3NpYmxlIHNvdXJjZXMgaW5jbHVkZSBjb21wb25lbnQgdGVtcGxhdGUsIHJlbmRlciBmdW5jdGlvbiwgdXBkYXRlZCBob29rIG9yIHdhdGNoZXIgc291cmNlIGZ1bmN0aW9uLmAsXG4gICAgICBudWxsLFxuICAgICAgMTBcbiAgICApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHNlZW4uc2V0KGZuLCBjb3VudCArIDEpO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmxldCBpc0htclVwZGF0aW5nID0gZmFsc2U7XG5jb25zdCBobXJEaXJ0eUNvbXBvbmVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgZ2V0R2xvYmFsVGhpcygpLl9fVlVFX0hNUl9SVU5USU1FX18gPSB7XG4gICAgY3JlYXRlUmVjb3JkOiB0cnlXcmFwKGNyZWF0ZVJlY29yZCksXG4gICAgcmVyZW5kZXI6IHRyeVdyYXAocmVyZW5kZXIpLFxuICAgIHJlbG9hZDogdHJ5V3JhcChyZWxvYWQpXG4gIH07XG59XG5jb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuZnVuY3Rpb24gcmVnaXN0ZXJITVIoaW5zdGFuY2UpIHtcbiAgY29uc3QgaWQgPSBpbnN0YW5jZS50eXBlLl9faG1ySWQ7XG4gIGxldCByZWNvcmQgPSBtYXAuZ2V0KGlkKTtcbiAgaWYgKCFyZWNvcmQpIHtcbiAgICBjcmVhdGVSZWNvcmQoaWQsIGluc3RhbmNlLnR5cGUpO1xuICAgIHJlY29yZCA9IG1hcC5nZXQoaWQpO1xuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuYWRkKGluc3RhbmNlKTtcbn1cbmZ1bmN0aW9uIHVucmVnaXN0ZXJITVIoaW5zdGFuY2UpIHtcbiAgbWFwLmdldChpbnN0YW5jZS50eXBlLl9faG1ySWQpLmluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UpO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVjb3JkKGlkLCBpbml0aWFsRGVmKSB7XG4gIGlmIChtYXAuaGFzKGlkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBtYXAuc2V0KGlkLCB7XG4gICAgaW5pdGlhbERlZjogbm9ybWFsaXplQ2xhc3NDb21wb25lbnQoaW5pdGlhbERlZiksXG4gICAgaW5zdGFuY2VzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpXG4gIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpID8gY29tcG9uZW50Ll9fdmNjT3B0cyA6IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIHJlcmVuZGVyKGlkLCBuZXdSZW5kZXIpIHtcbiAgY29uc3QgcmVjb3JkID0gbWFwLmdldChpZCk7XG4gIGlmICghcmVjb3JkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlY29yZC5pbml0aWFsRGVmLnJlbmRlciA9IG5ld1JlbmRlcjtcbiAgWy4uLnJlY29yZC5pbnN0YW5jZXNdLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgaWYgKG5ld1JlbmRlcikge1xuICAgICAgaW5zdGFuY2UucmVuZGVyID0gbmV3UmVuZGVyO1xuICAgICAgbm9ybWFsaXplQ2xhc3NDb21wb25lbnQoaW5zdGFuY2UudHlwZSkucmVuZGVyID0gbmV3UmVuZGVyO1xuICAgIH1cbiAgICBpbnN0YW5jZS5yZW5kZXJDYWNoZSA9IFtdO1xuICAgIGlzSG1yVXBkYXRpbmcgPSB0cnVlO1xuICAgIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgIGlzSG1yVXBkYXRpbmcgPSBmYWxzZTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZWxvYWQoaWQsIG5ld0NvbXApIHtcbiAgY29uc3QgcmVjb3JkID0gbWFwLmdldChpZCk7XG4gIGlmICghcmVjb3JkKSByZXR1cm47XG4gIG5ld0NvbXAgPSBub3JtYWxpemVDbGFzc0NvbXBvbmVudChuZXdDb21wKTtcbiAgdXBkYXRlQ29tcG9uZW50RGVmKHJlY29yZC5pbml0aWFsRGVmLCBuZXdDb21wKTtcbiAgY29uc3QgaW5zdGFuY2VzID0gWy4uLnJlY29yZC5pbnN0YW5jZXNdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzW2ldO1xuICAgIGNvbnN0IG9sZENvbXAgPSBub3JtYWxpemVDbGFzc0NvbXBvbmVudChpbnN0YW5jZS50eXBlKTtcbiAgICBsZXQgZGlydHlJbnN0YW5jZXMgPSBobXJEaXJ0eUNvbXBvbmVudHMuZ2V0KG9sZENvbXApO1xuICAgIGlmICghZGlydHlJbnN0YW5jZXMpIHtcbiAgICAgIGlmIChvbGRDb21wICE9PSByZWNvcmQuaW5pdGlhbERlZikge1xuICAgICAgICB1cGRhdGVDb21wb25lbnREZWYob2xkQ29tcCwgbmV3Q29tcCk7XG4gICAgICB9XG4gICAgICBobXJEaXJ0eUNvbXBvbmVudHMuc2V0KG9sZENvbXAsIGRpcnR5SW5zdGFuY2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gICAgfVxuICAgIGRpcnR5SW5zdGFuY2VzLmFkZChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuYXBwQ29udGV4dC5wcm9wc0NhY2hlLmRlbGV0ZShpbnN0YW5jZS50eXBlKTtcbiAgICBpbnN0YW5jZS5hcHBDb250ZXh0LmVtaXRzQ2FjaGUuZGVsZXRlKGluc3RhbmNlLnR5cGUpO1xuICAgIGluc3RhbmNlLmFwcENvbnRleHQub3B0aW9uc0NhY2hlLmRlbGV0ZShpbnN0YW5jZS50eXBlKTtcbiAgICBpZiAoaW5zdGFuY2UuY2VSZWxvYWQpIHtcbiAgICAgIGRpcnR5SW5zdGFuY2VzLmFkZChpbnN0YW5jZSk7XG4gICAgICBpbnN0YW5jZS5jZVJlbG9hZChuZXdDb21wLnN0eWxlcyk7XG4gICAgICBkaXJ0eUluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UpO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UucGFyZW50KSB7XG4gICAgICBxdWV1ZUpvYigoKSA9PiB7XG4gICAgICAgIGlzSG1yVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5wYXJlbnQudXBkYXRlKCk7XG4gICAgICAgIGlzSG1yVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgZGlydHlJbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuYXBwQ29udGV4dC5yZWxvYWQpIHtcbiAgICAgIGluc3RhbmNlLmFwcENvbnRleHQucmVsb2FkKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJbSE1SXSBSb290IG9yIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UgbW9kaWZpZWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLlwiXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uucm9vdC5jZSAmJiBpbnN0YW5jZSAhPT0gaW5zdGFuY2Uucm9vdCkge1xuICAgICAgaW5zdGFuY2Uucm9vdC5jZS5fcmVtb3ZlQ2hpbGRTdHlsZShvbGRDb21wKTtcbiAgICB9XG4gIH1cbiAgcXVldWVQb3N0Rmx1c2hDYigoKSA9PiB7XG4gICAgaG1yRGlydHlDb21wb25lbnRzLmNsZWFyKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50RGVmKG9sZENvbXAsIG5ld0NvbXApIHtcbiAgZXh0ZW5kKG9sZENvbXAsIG5ld0NvbXApO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvbGRDb21wKSB7XG4gICAgaWYgKGtleSAhPT0gXCJfX2ZpbGVcIiAmJiAhKGtleSBpbiBuZXdDb21wKSkge1xuICAgICAgZGVsZXRlIG9sZENvbXBba2V5XTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRyeVdyYXAoZm4pIHtcbiAgcmV0dXJuIChpZCwgYXJnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmbihpZCwgYXJnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgW0hNUl0gU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIFZ1ZSBjb21wb25lbnQgaG90LXJlbG9hZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuYFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmxldCBkZXZ0b29scyQxO1xubGV0IGJ1ZmZlciA9IFtdO1xubGV0IGRldnRvb2xzTm90SW5zdGFsbGVkID0gZmFsc2U7XG5mdW5jdGlvbiBlbWl0JDEoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgaWYgKGRldnRvb2xzJDEpIHtcbiAgICBkZXZ0b29scyQxLmVtaXQoZXZlbnQsIC4uLmFyZ3MpO1xuICB9IGVsc2UgaWYgKCFkZXZ0b29sc05vdEluc3RhbGxlZCkge1xuICAgIGJ1ZmZlci5wdXNoKHsgZXZlbnQsIGFyZ3MgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldERldnRvb2xzSG9vayQxKGhvb2ssIHRhcmdldCkge1xuICB2YXIgX2EsIF9iO1xuICBkZXZ0b29scyQxID0gaG9vaztcbiAgaWYgKGRldnRvb2xzJDEpIHtcbiAgICBkZXZ0b29scyQxLmVuYWJsZWQgPSB0cnVlO1xuICAgIGJ1ZmZlci5mb3JFYWNoKCh7IGV2ZW50LCBhcmdzIH0pID0+IGRldnRvb2xzJDEuZW1pdChldmVudCwgLi4uYXJncykpO1xuICAgIGJ1ZmZlciA9IFtdO1xuICB9IGVsc2UgaWYgKFxuICAgIC8vIGhhbmRsZSBsYXRlIGRldnRvb2xzIGluamVjdGlvbiAtIG9ubHkgZG8gdGhpcyBpZiB3ZSBhcmUgaW4gYW4gYWN0dWFsXG4gICAgLy8gYnJvd3NlciBlbnZpcm9ubWVudCB0byBhdm9pZCB0aGUgdGltZXIgaGFuZGxlIHN0YWxsaW5nIHRlc3QgcnVubmVyIGV4aXRcbiAgICAvLyAoIzQ4MTUpXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAvLyBzb21lIGVudnMgbW9jayB3aW5kb3cgYnV0IG5vdCBmdWxseVxuICAgIHdpbmRvdy5IVE1MRWxlbWVudCAmJiAvLyBhbHNvIGV4Y2x1ZGUganNkb21cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAhKChfYiA9IChfYSA9IHdpbmRvdy5uYXZpZ2F0b3IpID09IG51bGwgPyB2b2lkIDAgOiBfYS51c2VyQWdlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcyhcImpzZG9tXCIpKVxuICApIHtcbiAgICBjb25zdCByZXBsYXkgPSB0YXJnZXQuX19WVUVfREVWVE9PTFNfSE9PS19SRVBMQVlfXyA9IHRhcmdldC5fX1ZVRV9ERVZUT09MU19IT09LX1JFUExBWV9fIHx8IFtdO1xuICAgIHJlcGxheS5wdXNoKChuZXdIb29rKSA9PiB7XG4gICAgICBzZXREZXZ0b29sc0hvb2skMShuZXdIb29rLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCFkZXZ0b29scyQxKSB7XG4gICAgICAgIHRhcmdldC5fX1ZVRV9ERVZUT09MU19IT09LX1JFUExBWV9fID0gbnVsbDtcbiAgICAgICAgZGV2dG9vbHNOb3RJbnN0YWxsZWQgPSB0cnVlO1xuICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgIH1cbiAgICB9LCAzZTMpO1xuICB9IGVsc2Uge1xuICAgIGRldnRvb2xzTm90SW5zdGFsbGVkID0gdHJ1ZTtcbiAgICBidWZmZXIgPSBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZGV2dG9vbHNJbml0QXBwKGFwcCwgdmVyc2lvbikge1xuICBlbWl0JDEoXCJhcHA6aW5pdFwiIC8qIEFQUF9JTklUICovLCBhcHAsIHZlcnNpb24sIHtcbiAgICBGcmFnbWVudCxcbiAgICBUZXh0LFxuICAgIENvbW1lbnQsXG4gICAgU3RhdGljXG4gIH0pO1xufVxuZnVuY3Rpb24gZGV2dG9vbHNVbm1vdW50QXBwKGFwcCkge1xuICBlbWl0JDEoXCJhcHA6dW5tb3VudFwiIC8qIEFQUF9VTk1PVU5UICovLCBhcHApO1xufVxuY29uc3QgZGV2dG9vbHNDb21wb25lbnRBZGRlZCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEZXZ0b29sc0NvbXBvbmVudEhvb2soXCJjb21wb25lbnQ6YWRkZWRcIiAvKiBDT01QT05FTlRfQURERUQgKi8pO1xuY29uc3QgZGV2dG9vbHNDb21wb25lbnRVcGRhdGVkID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURldnRvb2xzQ29tcG9uZW50SG9vayhcImNvbXBvbmVudDp1cGRhdGVkXCIgLyogQ09NUE9ORU5UX1VQREFURUQgKi8pO1xuY29uc3QgX2RldnRvb2xzQ29tcG9uZW50UmVtb3ZlZCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEZXZ0b29sc0NvbXBvbmVudEhvb2soXG4gIFwiY29tcG9uZW50OnJlbW92ZWRcIiAvKiBDT01QT05FTlRfUkVNT1ZFRCAqL1xuKTtcbmNvbnN0IGRldnRvb2xzQ29tcG9uZW50UmVtb3ZlZCA9IChjb21wb25lbnQpID0+IHtcbiAgaWYgKGRldnRvb2xzJDEgJiYgdHlwZW9mIGRldnRvb2xzJDEuY2xlYW51cEJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIC8vIHJlbW92ZSB0aGUgY29tcG9uZW50IGlmIGl0IHdhc24ndCBidWZmZXJlZFxuICAhZGV2dG9vbHMkMS5jbGVhbnVwQnVmZmVyKGNvbXBvbmVudCkpIHtcbiAgICBfZGV2dG9vbHNDb21wb25lbnRSZW1vdmVkKGNvbXBvbmVudCk7XG4gIH1cbn07XG4vKiEgI19fTk9fU0lERV9FRkZFQ1RTX18gKi9cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBjcmVhdGVEZXZ0b29sc0NvbXBvbmVudEhvb2soaG9vaykge1xuICByZXR1cm4gKGNvbXBvbmVudCkgPT4ge1xuICAgIGVtaXQkMShcbiAgICAgIGhvb2ssXG4gICAgICBjb21wb25lbnQuYXBwQ29udGV4dC5hcHAsXG4gICAgICBjb21wb25lbnQudWlkLFxuICAgICAgY29tcG9uZW50LnBhcmVudCA/IGNvbXBvbmVudC5wYXJlbnQudWlkIDogdm9pZCAwLFxuICAgICAgY29tcG9uZW50XG4gICAgKTtcbiAgfTtcbn1cbmNvbnN0IGRldnRvb2xzUGVyZlN0YXJ0ID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZURldnRvb2xzUGVyZm9ybWFuY2VIb29rKFwicGVyZjpzdGFydFwiIC8qIFBFUkZPUk1BTkNFX1NUQVJUICovKTtcbmNvbnN0IGRldnRvb2xzUGVyZkVuZCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEZXZ0b29sc1BlcmZvcm1hbmNlSG9vayhcInBlcmY6ZW5kXCIgLyogUEVSRk9STUFOQ0VfRU5EICovKTtcbmZ1bmN0aW9uIGNyZWF0ZURldnRvb2xzUGVyZm9ybWFuY2VIb29rKGhvb2spIHtcbiAgcmV0dXJuIChjb21wb25lbnQsIHR5cGUsIHRpbWUpID0+IHtcbiAgICBlbWl0JDEoaG9vaywgY29tcG9uZW50LmFwcENvbnRleHQuYXBwLCBjb21wb25lbnQudWlkLCBjb21wb25lbnQsIHR5cGUsIHRpbWUpO1xuICB9O1xufVxuZnVuY3Rpb24gZGV2dG9vbHNDb21wb25lbnRFbWl0KGNvbXBvbmVudCwgZXZlbnQsIHBhcmFtcykge1xuICBlbWl0JDEoXG4gICAgXCJjb21wb25lbnQ6ZW1pdFwiIC8qIENPTVBPTkVOVF9FTUlUICovLFxuICAgIGNvbXBvbmVudC5hcHBDb250ZXh0LmFwcCxcbiAgICBjb21wb25lbnQsXG4gICAgZXZlbnQsXG4gICAgcGFyYW1zXG4gICk7XG59XG5cbmxldCBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xubGV0IGN1cnJlbnRTY29wZUlkID0gbnVsbDtcbmZ1bmN0aW9uIHNldEN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZShpbnN0YW5jZSkge1xuICBjb25zdCBwcmV2ID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgY3VycmVudFNjb3BlSWQgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS50eXBlLl9fc2NvcGVJZCB8fCBudWxsO1xuICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIHB1c2hTY29wZUlkKGlkKSB7XG4gIGN1cnJlbnRTY29wZUlkID0gaWQ7XG59XG5mdW5jdGlvbiBwb3BTY29wZUlkKCkge1xuICBjdXJyZW50U2NvcGVJZCA9IG51bGw7XG59XG5jb25zdCB3aXRoU2NvcGVJZCA9IChfaWQpID0+IHdpdGhDdHg7XG5mdW5jdGlvbiB3aXRoQ3R4KGZuLCBjdHggPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UsIGlzTm9uU2NvcGVkU2xvdCkge1xuICBpZiAoIWN0eCkgcmV0dXJuIGZuO1xuICBpZiAoZm4uX24pIHtcbiAgICByZXR1cm4gZm47XG4gIH1cbiAgY29uc3QgcmVuZGVyRm5XaXRoQ29udGV4dCA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKHJlbmRlckZuV2l0aENvbnRleHQuX2QpIHtcbiAgICAgIHNldEJsb2NrVHJhY2tpbmcoLTEpO1xuICAgIH1cbiAgICBjb25zdCBwcmV2SW5zdGFuY2UgPSBzZXRDdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UoY3R4KTtcbiAgICBsZXQgcmVzO1xuICAgIHRyeSB7XG4gICAgICByZXMgPSBmbiguLi5hcmdzKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0Q3VycmVudFJlbmRlcmluZ0luc3RhbmNlKHByZXZJbnN0YW5jZSk7XG4gICAgICBpZiAocmVuZGVyRm5XaXRoQ29udGV4dC5fZCkge1xuICAgICAgICBzZXRCbG9ja1RyYWNraW5nKDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgIGRldnRvb2xzQ29tcG9uZW50VXBkYXRlZChjdHgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuICByZW5kZXJGbldpdGhDb250ZXh0Ll9uID0gdHJ1ZTtcbiAgcmVuZGVyRm5XaXRoQ29udGV4dC5fYyA9IHRydWU7XG4gIHJlbmRlckZuV2l0aENvbnRleHQuX2QgPSB0cnVlO1xuICByZXR1cm4gcmVuZGVyRm5XaXRoQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEaXJlY3RpdmVOYW1lKG5hbWUpIHtcbiAgaWYgKGlzQnVpbHRJbkRpcmVjdGl2ZShuYW1lKSkge1xuICAgIHdhcm4kMShcIkRvIG5vdCB1c2UgYnVpbHQtaW4gZGlyZWN0aXZlIGlkcyBhcyBjdXN0b20gZGlyZWN0aXZlIGlkOiBcIiArIG5hbWUpO1xuICB9XG59XG5mdW5jdGlvbiB3aXRoRGlyZWN0aXZlcyh2bm9kZSwgZGlyZWN0aXZlcykge1xuICBpZiAoY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID09PSBudWxsKSB7XG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoYHdpdGhEaXJlY3RpdmVzIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHJlbmRlciBmdW5jdGlvbnMuYCk7XG4gICAgcmV0dXJuIHZub2RlO1xuICB9XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0Q29tcG9uZW50UHVibGljSW5zdGFuY2UoY3VycmVudFJlbmRlcmluZ0luc3RhbmNlKTtcbiAgY29uc3QgYmluZGluZ3MgPSB2bm9kZS5kaXJzIHx8ICh2bm9kZS5kaXJzID0gW10pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcmVjdGl2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW2RpciwgdmFsdWUsIGFyZywgbW9kaWZpZXJzID0gRU1QVFlfT0JKXSA9IGRpcmVjdGl2ZXNbaV07XG4gICAgaWYgKGRpcikge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oZGlyKSkge1xuICAgICAgICBkaXIgPSB7XG4gICAgICAgICAgbW91bnRlZDogZGlyLFxuICAgICAgICAgIHVwZGF0ZWQ6IGRpclxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGRpci5kZWVwKSB7XG4gICAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGJpbmRpbmdzLnB1c2goe1xuICAgICAgICBkaXIsXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2xkVmFsdWU6IHZvaWQgMCxcbiAgICAgICAgYXJnLFxuICAgICAgICBtb2RpZmllcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdm5vZGU7XG59XG5mdW5jdGlvbiBpbnZva2VEaXJlY3RpdmVIb29rKHZub2RlLCBwcmV2Vk5vZGUsIGluc3RhbmNlLCBuYW1lKSB7XG4gIGNvbnN0IGJpbmRpbmdzID0gdm5vZGUuZGlycztcbiAgY29uc3Qgb2xkQmluZGluZ3MgPSBwcmV2Vk5vZGUgJiYgcHJldlZOb2RlLmRpcnM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ3NbaV07XG4gICAgaWYgKG9sZEJpbmRpbmdzKSB7XG4gICAgICBiaW5kaW5nLm9sZFZhbHVlID0gb2xkQmluZGluZ3NbaV0udmFsdWU7XG4gICAgfVxuICAgIGxldCBob29rID0gYmluZGluZy5kaXJbbmFtZV07XG4gICAgaWYgKGhvb2spIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKGhvb2ssIGluc3RhbmNlLCA4LCBbXG4gICAgICAgIHZub2RlLmVsLFxuICAgICAgICBiaW5kaW5nLFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgcHJldlZOb2RlXG4gICAgICBdKTtcbiAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgVGVsZXBvcnRFbmRLZXkgPSBTeW1ib2woXCJfdnRlXCIpO1xuY29uc3QgaXNUZWxlcG9ydCA9ICh0eXBlKSA9PiB0eXBlLl9faXNUZWxlcG9ydDtcbmNvbnN0IGlzVGVsZXBvcnREaXNhYmxlZCA9IChwcm9wcykgPT4gcHJvcHMgJiYgKHByb3BzLmRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkID09PSBcIlwiKTtcbmNvbnN0IGlzVGVsZXBvcnREZWZlcnJlZCA9IChwcm9wcykgPT4gcHJvcHMgJiYgKHByb3BzLmRlZmVyIHx8IHByb3BzLmRlZmVyID09PSBcIlwiKTtcbmNvbnN0IGlzVGFyZ2V0U1ZHID0gKHRhcmdldCkgPT4gdHlwZW9mIFNWR0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbmNvbnN0IGlzVGFyZ2V0TWF0aE1MID0gKHRhcmdldCkgPT4gdHlwZW9mIE1hdGhNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIiAmJiB0YXJnZXQgaW5zdGFuY2VvZiBNYXRoTUxFbGVtZW50O1xuY29uc3QgcmVzb2x2ZVRhcmdldCA9IChwcm9wcywgc2VsZWN0KSA9PiB7XG4gIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gcHJvcHMgJiYgcHJvcHMudG87XG4gIGlmIChpc1N0cmluZyh0YXJnZXRTZWxlY3RvcikpIHtcbiAgICBpZiAoIXNlbGVjdCkge1xuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoXG4gICAgICAgIGBDdXJyZW50IHJlbmRlcmVyIGRvZXMgbm90IHN1cHBvcnQgc3RyaW5nIHRhcmdldCBmb3IgVGVsZXBvcnRzLiAobWlzc2luZyBxdWVyeVNlbGVjdG9yIHJlbmRlcmVyIG9wdGlvbilgXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHNlbGVjdCh0YXJnZXRTZWxlY3Rvcik7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhdGFyZ2V0ICYmICFpc1RlbGVwb3J0RGlzYWJsZWQocHJvcHMpKSB7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvY2F0ZSBUZWxlcG9ydCB0YXJnZXQgd2l0aCBzZWxlY3RvciBcIiR7dGFyZ2V0U2VsZWN0b3J9XCIuIE5vdGUgdGhlIHRhcmdldCBlbGVtZW50IG11c3QgZXhpc3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCAtIGkuZS4gdGhlIHRhcmdldCBjYW5ub3QgYmUgcmVuZGVyZWQgYnkgdGhlIGNvbXBvbmVudCBpdHNlbGYsIGFuZCBpZGVhbGx5IHNob3VsZCBiZSBvdXRzaWRlIG9mIHRoZSBlbnRpcmUgVnVlIGNvbXBvbmVudCB0cmVlLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICF0YXJnZXRTZWxlY3RvciAmJiAhaXNUZWxlcG9ydERpc2FibGVkKHByb3BzKSkge1xuICAgICAgd2FybiQxKGBJbnZhbGlkIFRlbGVwb3J0IHRhcmdldDogJHt0YXJnZXRTZWxlY3Rvcn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFNlbGVjdG9yO1xuICB9XG59O1xuY29uc3QgVGVsZXBvcnRJbXBsID0ge1xuICBuYW1lOiBcIlRlbGVwb3J0XCIsXG4gIF9faXNUZWxlcG9ydDogdHJ1ZSxcbiAgcHJvY2VzcyhuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkLCBpbnRlcm5hbHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYzogbW91bnRDaGlsZHJlbixcbiAgICAgIHBjOiBwYXRjaENoaWxkcmVuLFxuICAgICAgcGJjOiBwYXRjaEJsb2NrQ2hpbGRyZW4sXG4gICAgICBvOiB7IGluc2VydCwgcXVlcnlTZWxlY3RvciwgY3JlYXRlVGV4dCwgY3JlYXRlQ29tbWVudCB9XG4gICAgfSA9IGludGVybmFscztcbiAgICBjb25zdCBkaXNhYmxlZCA9IGlzVGVsZXBvcnREaXNhYmxlZChuMi5wcm9wcyk7XG4gICAgbGV0IHsgc2hhcGVGbGFnLCBjaGlsZHJlbiwgZHluYW1pY0NoaWxkcmVuIH0gPSBuMjtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBpc0htclVwZGF0aW5nKSB7XG4gICAgICBvcHRpbWl6ZWQgPSBmYWxzZTtcbiAgICAgIGR5bmFtaWNDaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IG4yLmVsID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGNyZWF0ZUNvbW1lbnQoXCJ0ZWxlcG9ydCBzdGFydFwiKSA6IGNyZWF0ZVRleHQoXCJcIik7XG4gICAgICBjb25zdCBtYWluQW5jaG9yID0gbjIuYW5jaG9yID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGNyZWF0ZUNvbW1lbnQoXCJ0ZWxlcG9ydCBlbmRcIikgOiBjcmVhdGVUZXh0KFwiXCIpO1xuICAgICAgaW5zZXJ0KHBsYWNlaG9sZGVyLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICBpbnNlcnQobWFpbkFuY2hvciwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgY29uc3QgbW91bnQgPSAoY29udGFpbmVyMiwgYW5jaG9yMikgPT4ge1xuICAgICAgICBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgICAgICBpZiAocGFyZW50Q29tcG9uZW50ICYmIHBhcmVudENvbXBvbmVudC5pc0NFKSB7XG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQuY2UuX3RlbGVwb3J0VGFyZ2V0ID0gY29udGFpbmVyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW91bnRDaGlsZHJlbihcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgY29udGFpbmVyMixcbiAgICAgICAgICAgIGFuY2hvcjIsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBtb3VudFRvVGFyZ2V0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBuMi50YXJnZXQgPSByZXNvbHZlVGFyZ2V0KG4yLnByb3BzLCBxdWVyeVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0QW5jaG9yID0gcHJlcGFyZUFuY2hvcih0YXJnZXQsIG4yLCBjcmVhdGVUZXh0LCBpbnNlcnQpO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZSAhPT0gXCJzdmdcIiAmJiBpc1RhcmdldFNWRyh0YXJnZXQpKSB7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBcInN2Z1wiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlICE9PSBcIm1hdGhtbFwiICYmIGlzVGFyZ2V0TWF0aE1MKHRhcmdldCkpIHtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IFwibWF0aG1sXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIG1vdW50KHRhcmdldCwgdGFyZ2V0QW5jaG9yKTtcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcnMobjIsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBcIkludmFsaWQgVGVsZXBvcnQgdGFyZ2V0IG9uIG1vdW50OlwiLFxuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgYCgke3R5cGVvZiB0YXJnZXR9KWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIG1vdW50KGNvbnRhaW5lciwgbWFpbkFuY2hvcik7XG4gICAgICAgIHVwZGF0ZUNzc1ZhcnMobjIsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzVGVsZXBvcnREZWZlcnJlZChuMi5wcm9wcykpIHtcbiAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICBtb3VudFRvVGFyZ2V0KCk7XG4gICAgICAgICAgbjIuZWwuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3VudFRvVGFyZ2V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1RlbGVwb3J0RGVmZXJyZWQobjIucHJvcHMpICYmICFuMS5lbC5fX2lzTW91bnRlZCkge1xuICAgICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgIFRlbGVwb3J0SW1wbC5wcm9jZXNzKFxuICAgICAgICAgICAgbjEsXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkLFxuICAgICAgICAgICAgaW50ZXJuYWxzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkZWxldGUgbjEuZWwuX19pc01vdW50ZWQ7XG4gICAgICAgIH0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbjIuZWwgPSBuMS5lbDtcbiAgICAgIG4yLnRhcmdldFN0YXJ0ID0gbjEudGFyZ2V0U3RhcnQ7XG4gICAgICBjb25zdCBtYWluQW5jaG9yID0gbjIuYW5jaG9yID0gbjEuYW5jaG9yO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gbjIudGFyZ2V0ID0gbjEudGFyZ2V0O1xuICAgICAgY29uc3QgdGFyZ2V0QW5jaG9yID0gbjIudGFyZ2V0QW5jaG9yID0gbjEudGFyZ2V0QW5jaG9yO1xuICAgICAgY29uc3Qgd2FzRGlzYWJsZWQgPSBpc1RlbGVwb3J0RGlzYWJsZWQobjEucHJvcHMpO1xuICAgICAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IHdhc0Rpc2FibGVkID8gY29udGFpbmVyIDogdGFyZ2V0O1xuICAgICAgY29uc3QgY3VycmVudEFuY2hvciA9IHdhc0Rpc2FibGVkID8gbWFpbkFuY2hvciA6IHRhcmdldEFuY2hvcjtcbiAgICAgIGlmIChuYW1lc3BhY2UgPT09IFwic3ZnXCIgfHwgaXNUYXJnZXRTVkcodGFyZ2V0KSkge1xuICAgICAgICBuYW1lc3BhY2UgPSBcInN2Z1wiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lc3BhY2UgPT09IFwibWF0aG1sXCIgfHwgaXNUYXJnZXRNYXRoTUwodGFyZ2V0KSkge1xuICAgICAgICBuYW1lc3BhY2UgPSBcIm1hdGhtbFwiO1xuICAgICAgfVxuICAgICAgaWYgKGR5bmFtaWNDaGlsZHJlbikge1xuICAgICAgICBwYXRjaEJsb2NrQ2hpbGRyZW4oXG4gICAgICAgICAgbjEuZHluYW1pY0NoaWxkcmVuLFxuICAgICAgICAgIGR5bmFtaWNDaGlsZHJlbixcbiAgICAgICAgICBjdXJyZW50Q29udGFpbmVyLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzXG4gICAgICAgICk7XG4gICAgICAgIHRyYXZlcnNlU3RhdGljQ2hpbGRyZW4objEsIG4yLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGltaXplZCkge1xuICAgICAgICBwYXRjaENoaWxkcmVuKFxuICAgICAgICAgIG4xLFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGN1cnJlbnRDb250YWluZXIsXG4gICAgICAgICAgY3VycmVudEFuY2hvcixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIGlmICghd2FzRGlzYWJsZWQpIHtcbiAgICAgICAgICBtb3ZlVGVsZXBvcnQoXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIG1haW5BbmNob3IsXG4gICAgICAgICAgICBpbnRlcm5hbHMsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobjIucHJvcHMgJiYgbjEucHJvcHMgJiYgbjIucHJvcHMudG8gIT09IG4xLnByb3BzLnRvKSB7XG4gICAgICAgICAgICBuMi5wcm9wcy50byA9IG4xLnByb3BzLnRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChuMi5wcm9wcyAmJiBuMi5wcm9wcy50bykgIT09IChuMS5wcm9wcyAmJiBuMS5wcm9wcy50bykpIHtcbiAgICAgICAgICBjb25zdCBuZXh0VGFyZ2V0ID0gbjIudGFyZ2V0ID0gcmVzb2x2ZVRhcmdldChcbiAgICAgICAgICAgIG4yLnByb3BzLFxuICAgICAgICAgICAgcXVlcnlTZWxlY3RvclxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKG5leHRUYXJnZXQpIHtcbiAgICAgICAgICAgIG1vdmVUZWxlcG9ydChcbiAgICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICAgIG5leHRUYXJnZXQsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIGludGVybmFscyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgICAgXCJJbnZhbGlkIFRlbGVwb3J0IHRhcmdldCBvbiB1cGRhdGU6XCIsXG4gICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgYCgke3R5cGVvZiB0YXJnZXR9KWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdhc0Rpc2FibGVkKSB7XG4gICAgICAgICAgbW92ZVRlbGVwb3J0KFxuICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0YXJnZXRBbmNob3IsXG4gICAgICAgICAgICBpbnRlcm5hbHMsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXBkYXRlQ3NzVmFycyhuMiwgZGlzYWJsZWQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlKHZub2RlLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCB7IHVtOiB1bm1vdW50LCBvOiB7IHJlbW92ZTogaG9zdFJlbW92ZSB9IH0sIGRvUmVtb3ZlKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2hhcGVGbGFnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhbmNob3IsXG4gICAgICB0YXJnZXRTdGFydCxcbiAgICAgIHRhcmdldEFuY2hvcixcbiAgICAgIHRhcmdldCxcbiAgICAgIHByb3BzXG4gICAgfSA9IHZub2RlO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGhvc3RSZW1vdmUodGFyZ2V0U3RhcnQpO1xuICAgICAgaG9zdFJlbW92ZSh0YXJnZXRBbmNob3IpO1xuICAgIH1cbiAgICBkb1JlbW92ZSAmJiBob3N0UmVtb3ZlKGFuY2hvcik7XG4gICAgaWYgKHNoYXBlRmxhZyAmIDE2KSB7XG4gICAgICBjb25zdCBzaG91bGRSZW1vdmUgPSBkb1JlbW92ZSB8fCAhaXNUZWxlcG9ydERpc2FibGVkKHByb3BzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgdW5tb3VudChcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgc2hvdWxkUmVtb3ZlLFxuICAgICAgICAgICEhY2hpbGQuZHluYW1pY0NoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3ZlOiBtb3ZlVGVsZXBvcnQsXG4gIGh5ZHJhdGU6IGh5ZHJhdGVUZWxlcG9ydFxufTtcbmZ1bmN0aW9uIG1vdmVUZWxlcG9ydCh2bm9kZSwgY29udGFpbmVyLCBwYXJlbnRBbmNob3IsIHsgbzogeyBpbnNlcnQgfSwgbTogbW92ZSB9LCBtb3ZlVHlwZSA9IDIpIHtcbiAgaWYgKG1vdmVUeXBlID09PSAwKSB7XG4gICAgaW5zZXJ0KHZub2RlLnRhcmdldEFuY2hvciwgY29udGFpbmVyLCBwYXJlbnRBbmNob3IpO1xuICB9XG4gIGNvbnN0IHsgZWwsIGFuY2hvciwgc2hhcGVGbGFnLCBjaGlsZHJlbiwgcHJvcHMgfSA9IHZub2RlO1xuICBjb25zdCBpc1Jlb3JkZXIgPSBtb3ZlVHlwZSA9PT0gMjtcbiAgaWYgKGlzUmVvcmRlcikge1xuICAgIGluc2VydChlbCwgY29udGFpbmVyLCBwYXJlbnRBbmNob3IpO1xuICB9XG4gIGlmICghaXNSZW9yZGVyIHx8IGlzVGVsZXBvcnREaXNhYmxlZChwcm9wcykpIHtcbiAgICBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbW92ZShcbiAgICAgICAgICBjaGlsZHJlbltpXSxcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgcGFyZW50QW5jaG9yLFxuICAgICAgICAgIDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGlzUmVvcmRlcikge1xuICAgIGluc2VydChhbmNob3IsIGNvbnRhaW5lciwgcGFyZW50QW5jaG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZVRlbGVwb3J0KG5vZGUsIHZub2RlLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCwge1xuICBvOiB7IG5leHRTaWJsaW5nLCBwYXJlbnROb2RlLCBxdWVyeVNlbGVjdG9yLCBpbnNlcnQsIGNyZWF0ZVRleHQgfVxufSwgaHlkcmF0ZUNoaWxkcmVuKSB7XG4gIGNvbnN0IHRhcmdldCA9IHZub2RlLnRhcmdldCA9IHJlc29sdmVUYXJnZXQoXG4gICAgdm5vZGUucHJvcHMsXG4gICAgcXVlcnlTZWxlY3RvclxuICApO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSBpc1RlbGVwb3J0RGlzYWJsZWQodm5vZGUucHJvcHMpO1xuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0YXJnZXQuX2xwYSB8fCB0YXJnZXQuZmlyc3RDaGlsZDtcbiAgICBpZiAodm5vZGUuc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB2bm9kZS5hbmNob3IgPSBoeWRyYXRlQ2hpbGRyZW4oXG4gICAgICAgICAgbmV4dFNpYmxpbmcobm9kZSksXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgcGFyZW50Tm9kZShub2RlKSxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgICB2bm9kZS50YXJnZXRTdGFydCA9IHRhcmdldE5vZGU7XG4gICAgICAgIHZub2RlLnRhcmdldEFuY2hvciA9IHRhcmdldE5vZGUgJiYgbmV4dFNpYmxpbmcodGFyZ2V0Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZS5hbmNob3IgPSBuZXh0U2libGluZyhub2RlKTtcbiAgICAgICAgbGV0IHRhcmdldEFuY2hvciA9IHRhcmdldE5vZGU7XG4gICAgICAgIHdoaWxlICh0YXJnZXRBbmNob3IpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0QW5jaG9yICYmIHRhcmdldEFuY2hvci5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldEFuY2hvci5kYXRhID09PSBcInRlbGVwb3J0IHN0YXJ0IGFuY2hvclwiKSB7XG4gICAgICAgICAgICAgIHZub2RlLnRhcmdldFN0YXJ0ID0gdGFyZ2V0QW5jaG9yO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRBbmNob3IuZGF0YSA9PT0gXCJ0ZWxlcG9ydCBhbmNob3JcIikge1xuICAgICAgICAgICAgICB2bm9kZS50YXJnZXRBbmNob3IgPSB0YXJnZXRBbmNob3I7XG4gICAgICAgICAgICAgIHRhcmdldC5fbHBhID0gdm5vZGUudGFyZ2V0QW5jaG9yICYmIG5leHRTaWJsaW5nKHZub2RlLnRhcmdldEFuY2hvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXRBbmNob3IgPSBuZXh0U2libGluZyh0YXJnZXRBbmNob3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdm5vZGUudGFyZ2V0QW5jaG9yKSB7XG4gICAgICAgICAgcHJlcGFyZUFuY2hvcih0YXJnZXQsIHZub2RlLCBjcmVhdGVUZXh0LCBpbnNlcnQpO1xuICAgICAgICB9XG4gICAgICAgIGh5ZHJhdGVDaGlsZHJlbihcbiAgICAgICAgICB0YXJnZXROb2RlICYmIG5leHRTaWJsaW5nKHRhcmdldE5vZGUpLFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVDc3NWYXJzKHZub2RlLCBkaXNhYmxlZCk7XG4gIH1cbiAgcmV0dXJuIHZub2RlLmFuY2hvciAmJiBuZXh0U2libGluZyh2bm9kZS5hbmNob3IpO1xufVxuY29uc3QgVGVsZXBvcnQgPSBUZWxlcG9ydEltcGw7XG5mdW5jdGlvbiB1cGRhdGVDc3NWYXJzKHZub2RlLCBpc0Rpc2FibGVkKSB7XG4gIGNvbnN0IGN0eCA9IHZub2RlLmN0eDtcbiAgaWYgKGN0eCAmJiBjdHgudXQpIHtcbiAgICBsZXQgbm9kZSwgYW5jaG9yO1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBub2RlID0gdm5vZGUuZWw7XG4gICAgICBhbmNob3IgPSB2bm9kZS5hbmNob3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSB2bm9kZS50YXJnZXRTdGFydDtcbiAgICAgIGFuY2hvciA9IHZub2RlLnRhcmdldEFuY2hvcjtcbiAgICB9XG4gICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gYW5jaG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXYtb3duZXJcIiwgY3R4LnVpZCk7XG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICB9XG4gICAgY3R4LnV0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByZXBhcmVBbmNob3IodGFyZ2V0LCB2bm9kZSwgY3JlYXRlVGV4dCwgaW5zZXJ0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXJ0ID0gdm5vZGUudGFyZ2V0U3RhcnQgPSBjcmVhdGVUZXh0KFwiXCIpO1xuICBjb25zdCB0YXJnZXRBbmNob3IgPSB2bm9kZS50YXJnZXRBbmNob3IgPSBjcmVhdGVUZXh0KFwiXCIpO1xuICB0YXJnZXRTdGFydFtUZWxlcG9ydEVuZEtleV0gPSB0YXJnZXRBbmNob3I7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBpbnNlcnQodGFyZ2V0U3RhcnQsIHRhcmdldCk7XG4gICAgaW5zZXJ0KHRhcmdldEFuY2hvciwgdGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0QW5jaG9yO1xufVxuXG5jb25zdCBsZWF2ZUNiS2V5ID0gU3ltYm9sKFwiX2xlYXZlQ2JcIik7XG5jb25zdCBlbnRlckNiS2V5ID0gU3ltYm9sKFwiX2VudGVyQ2JcIik7XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uU3RhdGUoKSB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgaXNMZWF2aW5nOiBmYWxzZSxcbiAgICBpc1VubW91bnRpbmc6IGZhbHNlLFxuICAgIGxlYXZpbmdWTm9kZXM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKClcbiAgfTtcbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBzdGF0ZS5pc01vdW50ZWQgPSB0cnVlO1xuICB9KTtcbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBzdGF0ZS5pc1VubW91bnRpbmcgPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuY29uc3QgVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IgPSBbRnVuY3Rpb24sIEFycmF5XTtcbmNvbnN0IEJhc2VUcmFuc2l0aW9uUHJvcHNWYWxpZGF0b3JzID0ge1xuICBtb2RlOiBTdHJpbmcsXG4gIGFwcGVhcjogQm9vbGVhbixcbiAgcGVyc2lzdGVkOiBCb29sZWFuLFxuICAvLyBlbnRlclxuICBvbkJlZm9yZUVudGVyOiBUcmFuc2l0aW9uSG9va1ZhbGlkYXRvcixcbiAgb25FbnRlcjogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IsXG4gIG9uQWZ0ZXJFbnRlcjogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IsXG4gIG9uRW50ZXJDYW5jZWxsZWQ6IFRyYW5zaXRpb25Ib29rVmFsaWRhdG9yLFxuICAvLyBsZWF2ZVxuICBvbkJlZm9yZUxlYXZlOiBUcmFuc2l0aW9uSG9va1ZhbGlkYXRvcixcbiAgb25MZWF2ZTogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IsXG4gIG9uQWZ0ZXJMZWF2ZTogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IsXG4gIG9uTGVhdmVDYW5jZWxsZWQ6IFRyYW5zaXRpb25Ib29rVmFsaWRhdG9yLFxuICAvLyBhcHBlYXJcbiAgb25CZWZvcmVBcHBlYXI6IFRyYW5zaXRpb25Ib29rVmFsaWRhdG9yLFxuICBvbkFwcGVhcjogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IsXG4gIG9uQWZ0ZXJBcHBlYXI6IFRyYW5zaXRpb25Ib29rVmFsaWRhdG9yLFxuICBvbkFwcGVhckNhbmNlbGxlZDogVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3Jcbn07XG5jb25zdCByZWN1cnNpdmVHZXRTdWJ0cmVlID0gKGluc3RhbmNlKSA9PiB7XG4gIGNvbnN0IHN1YlRyZWUgPSBpbnN0YW5jZS5zdWJUcmVlO1xuICByZXR1cm4gc3ViVHJlZS5jb21wb25lbnQgPyByZWN1cnNpdmVHZXRTdWJ0cmVlKHN1YlRyZWUuY29tcG9uZW50KSA6IHN1YlRyZWU7XG59O1xuY29uc3QgQmFzZVRyYW5zaXRpb25JbXBsID0ge1xuICBuYW1lOiBgQmFzZVRyYW5zaXRpb25gLFxuICBwcm9wczogQmFzZVRyYW5zaXRpb25Qcm9wc1ZhbGlkYXRvcnMsXG4gIHNldHVwKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICAgIGNvbnN0IHN0YXRlID0gdXNlVHJhbnNpdGlvblN0YXRlKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gc2xvdHMuZGVmYXVsdCAmJiBnZXRUcmFuc2l0aW9uUmF3Q2hpbGRyZW4oc2xvdHMuZGVmYXVsdCgpLCB0cnVlKTtcbiAgICAgIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZCA9IGZpbmROb25Db21tZW50Q2hpbGQoY2hpbGRyZW4pO1xuICAgICAgY29uc3QgcmF3UHJvcHMgPSB0b1Jhdyhwcm9wcyk7XG4gICAgICBjb25zdCB7IG1vZGUgfSA9IHJhd1Byb3BzO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgbW9kZSAmJiBtb2RlICE9PSBcImluLW91dFwiICYmIG1vZGUgIT09IFwib3V0LWluXCIgJiYgbW9kZSAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgd2FybiQxKGBpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAke21vZGV9YCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuaXNMZWF2aW5nKSB7XG4gICAgICAgIHJldHVybiBlbXB0eVBsYWNlaG9sZGVyKGNoaWxkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlubmVyQ2hpbGQgPSBnZXRJbm5lckNoaWxkJDEoY2hpbGQpO1xuICAgICAgaWYgKCFpbm5lckNoaWxkKSB7XG4gICAgICAgIHJldHVybiBlbXB0eVBsYWNlaG9sZGVyKGNoaWxkKTtcbiAgICAgIH1cbiAgICAgIGxldCBlbnRlckhvb2tzID0gcmVzb2x2ZVRyYW5zaXRpb25Ib29rcyhcbiAgICAgICAgaW5uZXJDaGlsZCxcbiAgICAgICAgcmF3UHJvcHMsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgLy8gIzExMDYxLCBlbnN1cmUgZW50ZXJIb29rcyBpcyBmcmVzaCBhZnRlciBjbG9uZVxuICAgICAgICAoaG9va3MpID0+IGVudGVySG9va3MgPSBob29rc1xuICAgICAgKTtcbiAgICAgIGlmIChpbm5lckNoaWxkLnR5cGUgIT09IENvbW1lbnQpIHtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkhvb2tzKGlubmVyQ2hpbGQsIGVudGVySG9va3MpO1xuICAgICAgfVxuICAgICAgbGV0IG9sZElubmVyQ2hpbGQgPSBpbnN0YW5jZS5zdWJUcmVlICYmIGdldElubmVyQ2hpbGQkMShpbnN0YW5jZS5zdWJUcmVlKTtcbiAgICAgIGlmIChvbGRJbm5lckNoaWxkICYmIG9sZElubmVyQ2hpbGQudHlwZSAhPT0gQ29tbWVudCAmJiAhaXNTYW1lVk5vZGVUeXBlKGlubmVyQ2hpbGQsIG9sZElubmVyQ2hpbGQpICYmIHJlY3Vyc2l2ZUdldFN1YnRyZWUoaW5zdGFuY2UpLnR5cGUgIT09IENvbW1lbnQpIHtcbiAgICAgICAgbGV0IGxlYXZpbmdIb29rcyA9IHJlc29sdmVUcmFuc2l0aW9uSG9va3MoXG4gICAgICAgICAgb2xkSW5uZXJDaGlsZCxcbiAgICAgICAgICByYXdQcm9wcyxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICApO1xuICAgICAgICBzZXRUcmFuc2l0aW9uSG9va3Mob2xkSW5uZXJDaGlsZCwgbGVhdmluZ0hvb2tzKTtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwib3V0LWluXCIgJiYgaW5uZXJDaGlsZC50eXBlICE9PSBDb21tZW50KSB7XG4gICAgICAgICAgc3RhdGUuaXNMZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgICBsZWF2aW5nSG9va3MuYWZ0ZXJMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmlzTGVhdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCEoaW5zdGFuY2Uuam9iLmZsYWdzICYgOCkpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgbGVhdmluZ0hvb2tzLmFmdGVyTGVhdmU7XG4gICAgICAgICAgICBvbGRJbm5lckNoaWxkID0gdm9pZCAwO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGVtcHR5UGxhY2Vob2xkZXIoY2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiaW4tb3V0XCIgJiYgaW5uZXJDaGlsZC50eXBlICE9PSBDb21tZW50KSB7XG4gICAgICAgICAgbGVhdmluZ0hvb2tzLmRlbGF5TGVhdmUgPSAoZWwsIGVhcmx5UmVtb3ZlLCBkZWxheWVkTGVhdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlYXZpbmdWTm9kZXNDYWNoZSA9IGdldExlYXZpbmdOb2Rlc0ZvclR5cGUoXG4gICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICBvbGRJbm5lckNoaWxkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGVhdmluZ1ZOb2Rlc0NhY2hlW1N0cmluZyhvbGRJbm5lckNoaWxkLmtleSldID0gb2xkSW5uZXJDaGlsZDtcbiAgICAgICAgICAgIGVsW2xlYXZlQ2JLZXldID0gKCkgPT4ge1xuICAgICAgICAgICAgICBlYXJseVJlbW92ZSgpO1xuICAgICAgICAgICAgICBlbFtsZWF2ZUNiS2V5XSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgZGVsZXRlIGVudGVySG9va3MuZGVsYXllZExlYXZlO1xuICAgICAgICAgICAgICBvbGRJbm5lckNoaWxkID0gdm9pZCAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVudGVySG9va3MuZGVsYXllZExlYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICBkZWxheWVkTGVhdmUoKTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVudGVySG9va3MuZGVsYXllZExlYXZlO1xuICAgICAgICAgICAgICBvbGRJbm5lckNoaWxkID0gdm9pZCAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZElubmVyQ2hpbGQgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkSW5uZXJDaGlsZCkge1xuICAgICAgICBvbGRJbm5lckNoaWxkID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH07XG4gIH1cbn07XG5mdW5jdGlvbiBmaW5kTm9uQ29tbWVudENoaWxkKGNoaWxkcmVuKSB7XG4gIGxldCBjaGlsZCA9IGNoaWxkcmVuWzBdO1xuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIGxldCBoYXNGb3VuZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgYyBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGMudHlwZSAhPT0gQ29tbWVudCkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBoYXNGb3VuZCkge1xuICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgIFwiPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudCBvciBjb21wb25lbnQuIFVzZSA8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IGM7XG4gICAgICAgIGhhc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKCEhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkO1xufVxuY29uc3QgQmFzZVRyYW5zaXRpb24gPSBCYXNlVHJhbnNpdGlvbkltcGw7XG5mdW5jdGlvbiBnZXRMZWF2aW5nTm9kZXNGb3JUeXBlKHN0YXRlLCB2bm9kZSkge1xuICBjb25zdCB7IGxlYXZpbmdWTm9kZXMgfSA9IHN0YXRlO1xuICBsZXQgbGVhdmluZ1ZOb2Rlc0NhY2hlID0gbGVhdmluZ1ZOb2Rlcy5nZXQodm5vZGUudHlwZSk7XG4gIGlmICghbGVhdmluZ1ZOb2Rlc0NhY2hlKSB7XG4gICAgbGVhdmluZ1ZOb2Rlc0NhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbGVhdmluZ1ZOb2Rlcy5zZXQodm5vZGUudHlwZSwgbGVhdmluZ1ZOb2Rlc0NhY2hlKTtcbiAgfVxuICByZXR1cm4gbGVhdmluZ1ZOb2Rlc0NhY2hlO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVRyYW5zaXRpb25Ib29rcyh2bm9kZSwgcHJvcHMsIHN0YXRlLCBpbnN0YW5jZSwgcG9zdENsb25lKSB7XG4gIGNvbnN0IHtcbiAgICBhcHBlYXIsXG4gICAgbW9kZSxcbiAgICBwZXJzaXN0ZWQgPSBmYWxzZSxcbiAgICBvbkJlZm9yZUVudGVyLFxuICAgIG9uRW50ZXIsXG4gICAgb25BZnRlckVudGVyLFxuICAgIG9uRW50ZXJDYW5jZWxsZWQsXG4gICAgb25CZWZvcmVMZWF2ZSxcbiAgICBvbkxlYXZlLFxuICAgIG9uQWZ0ZXJMZWF2ZSxcbiAgICBvbkxlYXZlQ2FuY2VsbGVkLFxuICAgIG9uQmVmb3JlQXBwZWFyLFxuICAgIG9uQXBwZWFyLFxuICAgIG9uQWZ0ZXJBcHBlYXIsXG4gICAgb25BcHBlYXJDYW5jZWxsZWRcbiAgfSA9IHByb3BzO1xuICBjb25zdCBrZXkgPSBTdHJpbmcodm5vZGUua2V5KTtcbiAgY29uc3QgbGVhdmluZ1ZOb2Rlc0NhY2hlID0gZ2V0TGVhdmluZ05vZGVzRm9yVHlwZShzdGF0ZSwgdm5vZGUpO1xuICBjb25zdCBjYWxsSG9vayA9IChob29rLCBhcmdzKSA9PiB7XG4gICAgaG9vayAmJiBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhcbiAgICAgIGhvb2ssXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIDksXG4gICAgICBhcmdzXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgY2FsbEFzeW5jSG9vayA9IChob29rLCBhcmdzKSA9PiB7XG4gICAgY29uc3QgZG9uZSA9IGFyZ3NbMV07XG4gICAgY2FsbEhvb2soaG9vaywgYXJncyk7XG4gICAgaWYgKGlzQXJyYXkoaG9vaykpIHtcbiAgICAgIGlmIChob29rLmV2ZXJ5KChob29rMikgPT4gaG9vazIubGVuZ3RoIDw9IDEpKSBkb25lKCk7XG4gICAgfSBlbHNlIGlmIChob29rLmxlbmd0aCA8PSAxKSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBob29rcyA9IHtcbiAgICBtb2RlLFxuICAgIHBlcnNpc3RlZCxcbiAgICBiZWZvcmVFbnRlcihlbCkge1xuICAgICAgbGV0IGhvb2sgPSBvbkJlZm9yZUVudGVyO1xuICAgICAgaWYgKCFzdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICAgIGhvb2sgPSBvbkJlZm9yZUFwcGVhciB8fCBvbkJlZm9yZUVudGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGVsW2xlYXZlQ2JLZXldKSB7XG4gICAgICAgIGVsW2xlYXZlQ2JLZXldKFxuICAgICAgICAgIHRydWVcbiAgICAgICAgICAvKiBjYW5jZWxsZWQgKi9cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlYXZpbmdWTm9kZSA9IGxlYXZpbmdWTm9kZXNDYWNoZVtrZXldO1xuICAgICAgaWYgKGxlYXZpbmdWTm9kZSAmJiBpc1NhbWVWTm9kZVR5cGUodm5vZGUsIGxlYXZpbmdWTm9kZSkgJiYgbGVhdmluZ1ZOb2RlLmVsW2xlYXZlQ2JLZXldKSB7XG4gICAgICAgIGxlYXZpbmdWTm9kZS5lbFtsZWF2ZUNiS2V5XSgpO1xuICAgICAgfVxuICAgICAgY2FsbEhvb2soaG9vaywgW2VsXSk7XG4gICAgfSxcbiAgICBlbnRlcihlbCkge1xuICAgICAgbGV0IGhvb2sgPSBvbkVudGVyO1xuICAgICAgbGV0IGFmdGVySG9vayA9IG9uQWZ0ZXJFbnRlcjtcbiAgICAgIGxldCBjYW5jZWxIb29rID0gb25FbnRlckNhbmNlbGxlZDtcbiAgICAgIGlmICghc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgICBob29rID0gb25BcHBlYXIgfHwgb25FbnRlcjtcbiAgICAgICAgICBhZnRlckhvb2sgPSBvbkFmdGVyQXBwZWFyIHx8IG9uQWZ0ZXJFbnRlcjtcbiAgICAgICAgICBjYW5jZWxIb29rID0gb25BcHBlYXJDYW5jZWxsZWQgfHwgb25FbnRlckNhbmNlbGxlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGRvbmUgPSBlbFtlbnRlckNiS2V5XSA9IChjYW5jZWxsZWQpID0+IHtcbiAgICAgICAgaWYgKGNhbGxlZCkgcmV0dXJuO1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgY2FsbEhvb2soY2FuY2VsSG9vaywgW2VsXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbEhvb2soYWZ0ZXJIb29rLCBbZWxdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9va3MuZGVsYXllZExlYXZlKSB7XG4gICAgICAgICAgaG9va3MuZGVsYXllZExlYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxbZW50ZXJDYktleV0gPSB2b2lkIDA7XG4gICAgICB9O1xuICAgICAgaWYgKGhvb2spIHtcbiAgICAgICAgY2FsbEFzeW5jSG9vayhob29rLCBbZWwsIGRvbmVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxlYXZlKGVsLCByZW1vdmUpIHtcbiAgICAgIGNvbnN0IGtleTIgPSBTdHJpbmcodm5vZGUua2V5KTtcbiAgICAgIGlmIChlbFtlbnRlckNiS2V5XSkge1xuICAgICAgICBlbFtlbnRlckNiS2V5XShcbiAgICAgICAgICB0cnVlXG4gICAgICAgICAgLyogY2FuY2VsbGVkICovXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuaXNVbm1vdW50aW5nKSB7XG4gICAgICAgIHJldHVybiByZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGNhbGxIb29rKG9uQmVmb3JlTGVhdmUsIFtlbF0pO1xuICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZG9uZSA9IGVsW2xlYXZlQ2JLZXldID0gKGNhbmNlbGxlZCkgPT4ge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgY2FsbEhvb2sob25MZWF2ZUNhbmNlbGxlZCwgW2VsXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbEhvb2sob25BZnRlckxlYXZlLCBbZWxdKTtcbiAgICAgICAgfVxuICAgICAgICBlbFtsZWF2ZUNiS2V5XSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGxlYXZpbmdWTm9kZXNDYWNoZVtrZXkyXSA9PT0gdm5vZGUpIHtcbiAgICAgICAgICBkZWxldGUgbGVhdmluZ1ZOb2Rlc0NhY2hlW2tleTJdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbGVhdmluZ1ZOb2Rlc0NhY2hlW2tleTJdID0gdm5vZGU7XG4gICAgICBpZiAob25MZWF2ZSkge1xuICAgICAgICBjYWxsQXN5bmNIb29rKG9uTGVhdmUsIFtlbCwgZG9uZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvbmUodm5vZGUyKSB7XG4gICAgICBjb25zdCBob29rczIgPSByZXNvbHZlVHJhbnNpdGlvbkhvb2tzKFxuICAgICAgICB2bm9kZTIsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIHBvc3RDbG9uZVxuICAgICAgKTtcbiAgICAgIGlmIChwb3N0Q2xvbmUpIHBvc3RDbG9uZShob29rczIpO1xuICAgICAgcmV0dXJuIGhvb2tzMjtcbiAgICB9XG4gIH07XG4gIHJldHVybiBob29rcztcbn1cbmZ1bmN0aW9uIGVtcHR5UGxhY2Vob2xkZXIodm5vZGUpIHtcbiAgaWYgKGlzS2VlcEFsaXZlKHZub2RlKSkge1xuICAgIHZub2RlID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgdm5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgIHJldHVybiB2bm9kZTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0SW5uZXJDaGlsZCQxKHZub2RlKSB7XG4gIGlmICghaXNLZWVwQWxpdmUodm5vZGUpKSB7XG4gICAgaWYgKGlzVGVsZXBvcnQodm5vZGUudHlwZSkgJiYgdm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBmaW5kTm9uQ29tbWVudENoaWxkKHZub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHZub2RlLmNvbXBvbmVudCkge1xuICAgIHJldHVybiB2bm9kZS5jb21wb25lbnQuc3ViVHJlZTtcbiAgfVxuICBjb25zdCB7IHNoYXBlRmxhZywgY2hpbGRyZW4gfSA9IHZub2RlO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlblswXTtcbiAgICB9XG4gICAgaWYgKHNoYXBlRmxhZyAmIDMyICYmIGlzRnVuY3Rpb24oY2hpbGRyZW4uZGVmYXVsdCkpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbi5kZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uSG9va3Modm5vZGUsIGhvb2tzKSB7XG4gIGlmICh2bm9kZS5zaGFwZUZsYWcgJiA2ICYmIHZub2RlLmNvbXBvbmVudCkge1xuICAgIHZub2RlLnRyYW5zaXRpb24gPSBob29rcztcbiAgICBzZXRUcmFuc2l0aW9uSG9va3Modm5vZGUuY29tcG9uZW50LnN1YlRyZWUsIGhvb2tzKTtcbiAgfSBlbHNlIGlmICh2bm9kZS5zaGFwZUZsYWcgJiAxMjgpIHtcbiAgICB2bm9kZS5zc0NvbnRlbnQudHJhbnNpdGlvbiA9IGhvb2tzLmNsb25lKHZub2RlLnNzQ29udGVudCk7XG4gICAgdm5vZGUuc3NGYWxsYmFjay50cmFuc2l0aW9uID0gaG9va3MuY2xvbmUodm5vZGUuc3NGYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdm5vZGUudHJhbnNpdGlvbiA9IGhvb2tzO1xuICB9XG59XG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUmF3Q2hpbGRyZW4oY2hpbGRyZW4sIGtlZXBDb21tZW50ID0gZmFsc2UsIHBhcmVudEtleSkge1xuICBsZXQgcmV0ID0gW107XG4gIGxldCBrZXllZEZyYWdtZW50Q291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgY29uc3Qga2V5ID0gcGFyZW50S2V5ID09IG51bGwgPyBjaGlsZC5rZXkgOiBTdHJpbmcocGFyZW50S2V5KSArIFN0cmluZyhjaGlsZC5rZXkgIT0gbnVsbCA/IGNoaWxkLmtleSA6IGkpO1xuICAgIGlmIChjaGlsZC50eXBlID09PSBGcmFnbWVudCkge1xuICAgICAgaWYgKGNoaWxkLnBhdGNoRmxhZyAmIDEyOCkga2V5ZWRGcmFnbWVudENvdW50Kys7XG4gICAgICByZXQgPSByZXQuY29uY2F0KFxuICAgICAgICBnZXRUcmFuc2l0aW9uUmF3Q2hpbGRyZW4oY2hpbGQuY2hpbGRyZW4sIGtlZXBDb21tZW50LCBrZXkpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoa2VlcENvbW1lbnQgfHwgY2hpbGQudHlwZSAhPT0gQ29tbWVudCkge1xuICAgICAgcmV0LnB1c2goa2V5ICE9IG51bGwgPyBjbG9uZVZOb2RlKGNoaWxkLCB7IGtleSB9KSA6IGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgaWYgKGtleWVkRnJhZ21lbnRDb3VudCA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2ldLnBhdGNoRmxhZyA9IC0yO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKiEgI19fTk9fU0lERV9FRkZFQ1RTX18gKi9cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBkZWZpbmVDb21wb25lbnQob3B0aW9ucywgZXh0cmFPcHRpb25zKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKG9wdGlvbnMpID8gKFxuICAgIC8vICM4MjM2OiBleHRlbmQgY2FsbCBhbmQgb3B0aW9ucy5uYW1lIGFjY2VzcyBhcmUgY29uc2lkZXJlZCBzaWRlLWVmZmVjdHNcbiAgICAvLyBieSBSb2xsdXAsIHNvIHdlIGhhdmUgdG8gd3JhcCBpdCBpbiBhIHB1cmUtYW5ub3RhdGVkIElJRkUuXG4gICAgLyogQF9fUFVSRV9fICovICgoKSA9PiBleHRlbmQoeyBuYW1lOiBvcHRpb25zLm5hbWUgfSwgZXh0cmFPcHRpb25zLCB7IHNldHVwOiBvcHRpb25zIH0pKSgpXG4gICkgOiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgY29uc3QgaSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBpZiAoaSkge1xuICAgIHJldHVybiAoaS5hcHBDb250ZXh0LmNvbmZpZy5pZFByZWZpeCB8fCBcInZcIikgKyBcIi1cIiArIGkuaWRzWzBdICsgaS5pZHNbMV0rKztcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FybiQxKFxuICAgICAgYHVzZUlkKCkgaXMgY2FsbGVkIHdoZW4gdGhlcmUgaXMgbm8gYWN0aXZlIGNvbXBvbmVudCBpbnN0YW5jZSB0byBiZSBhc3NvY2lhdGVkIHdpdGguYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5mdW5jdGlvbiBtYXJrQXN5bmNCb3VuZGFyeShpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5pZHMgPSBbaW5zdGFuY2UuaWRzWzBdICsgaW5zdGFuY2UuaWRzWzJdKysgKyBcIi1cIiwgMCwgMF07XG59XG5cbmNvbnN0IGtub3duVGVtcGxhdGVSZWZzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5mdW5jdGlvbiB1c2VUZW1wbGF0ZVJlZihrZXkpIHtcbiAgY29uc3QgaSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBjb25zdCByID0gc2hhbGxvd1JlZihudWxsKTtcbiAgaWYgKGkpIHtcbiAgICBjb25zdCByZWZzID0gaS5yZWZzID09PSBFTVBUWV9PQkogPyBpLnJlZnMgPSB7fSA6IGkucmVmcztcbiAgICBsZXQgZGVzYztcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVmcywga2V5KSkgJiYgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICB3YXJuJDEoYHVzZVRlbXBsYXRlUmVmKCcke2tleX0nKSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlZnMsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6ICgpID0+IHIudmFsdWUsXG4gICAgICAgIHNldDogKHZhbCkgPT4gci52YWx1ZSA9IHZhbFxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuJDEoXG4gICAgICBgdXNlVGVtcGxhdGVSZWYoKSBpcyBjYWxsZWQgd2hlbiB0aGVyZSBpcyBubyBhY3RpdmUgY29tcG9uZW50IGluc3RhbmNlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aC5gXG4gICAgKTtcbiAgfVxuICBjb25zdCByZXQgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gcmVhZG9ubHkocikgOiByO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGtub3duVGVtcGxhdGVSZWZzLmFkZChyZXQpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFJlZihyYXdSZWYsIG9sZFJhd1JlZiwgcGFyZW50U3VzcGVuc2UsIHZub2RlLCBpc1VubW91bnQgPSBmYWxzZSkge1xuICBpZiAoaXNBcnJheShyYXdSZWYpKSB7XG4gICAgcmF3UmVmLmZvckVhY2goXG4gICAgICAociwgaSkgPT4gc2V0UmVmKFxuICAgICAgICByLFxuICAgICAgICBvbGRSYXdSZWYgJiYgKGlzQXJyYXkob2xkUmF3UmVmKSA/IG9sZFJhd1JlZltpXSA6IG9sZFJhd1JlZiksXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgaXNVbm1vdW50XG4gICAgICApXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXN5bmNXcmFwcGVyKHZub2RlKSAmJiAhaXNVbm1vdW50KSB7XG4gICAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDUxMiAmJiB2bm9kZS50eXBlLl9fYXN5bmNSZXNvbHZlZCAmJiB2bm9kZS5jb21wb25lbnQuc3ViVHJlZS5jb21wb25lbnQpIHtcbiAgICAgIHNldFJlZihyYXdSZWYsIG9sZFJhd1JlZiwgcGFyZW50U3VzcGVuc2UsIHZub2RlLmNvbXBvbmVudC5zdWJUcmVlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHJlZlZhbHVlID0gdm5vZGUuc2hhcGVGbGFnICYgNCA/IGdldENvbXBvbmVudFB1YmxpY0luc3RhbmNlKHZub2RlLmNvbXBvbmVudCkgOiB2bm9kZS5lbDtcbiAgY29uc3QgdmFsdWUgPSBpc1VubW91bnQgPyBudWxsIDogcmVmVmFsdWU7XG4gIGNvbnN0IHsgaTogb3duZXIsIHI6IHJlZiB9ID0gcmF3UmVmO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhb3duZXIpIHtcbiAgICB3YXJuJDEoXG4gICAgICBgTWlzc2luZyByZWYgb3duZXIgY29udGV4dC4gcmVmIGNhbm5vdCBiZSB1c2VkIG9uIGhvaXN0ZWQgdm5vZGVzLiBBIHZub2RlIHdpdGggcmVmIG11c3QgYmUgY3JlYXRlZCBpbnNpZGUgdGhlIHJlbmRlciBmdW5jdGlvbi5gXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb2xkUmVmID0gb2xkUmF3UmVmICYmIG9sZFJhd1JlZi5yO1xuICBjb25zdCByZWZzID0gb3duZXIucmVmcyA9PT0gRU1QVFlfT0JKID8gb3duZXIucmVmcyA9IHt9IDogb3duZXIucmVmcztcbiAgY29uc3Qgc2V0dXBTdGF0ZSA9IG93bmVyLnNldHVwU3RhdGU7XG4gIGNvbnN0IHJhd1NldHVwU3RhdGUgPSB0b1JhdyhzZXR1cFN0YXRlKTtcbiAgY29uc3QgY2FuU2V0U2V0dXBSZWYgPSBzZXR1cFN0YXRlID09PSBFTVBUWV9PQkogPyAoKSA9PiBmYWxzZSA6IChrZXkpID0+IHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgaWYgKGhhc093bihyYXdTZXR1cFN0YXRlLCBrZXkpICYmICFpc1JlZihyYXdTZXR1cFN0YXRlW2tleV0pKSB7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBgVGVtcGxhdGUgcmVmIFwiJHtrZXl9XCIgdXNlZCBvbiBhIG5vbi1yZWYgdmFsdWUuIEl0IHdpbGwgbm90IHdvcmsgaW4gdGhlIHByb2R1Y3Rpb24gYnVpbGQuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGtub3duVGVtcGxhdGVSZWZzLmhhcyhyYXdTZXR1cFN0YXRlW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc093bihyYXdTZXR1cFN0YXRlLCBrZXkpO1xuICB9O1xuICBpZiAob2xkUmVmICE9IG51bGwgJiYgb2xkUmVmICE9PSByZWYpIHtcbiAgICBpZiAoaXNTdHJpbmcob2xkUmVmKSkge1xuICAgICAgcmVmc1tvbGRSZWZdID0gbnVsbDtcbiAgICAgIGlmIChjYW5TZXRTZXR1cFJlZihvbGRSZWYpKSB7XG4gICAgICAgIHNldHVwU3RhdGVbb2xkUmVmXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1JlZihvbGRSZWYpKSB7XG4gICAgICBvbGRSZWYudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgY2FsbFdpdGhFcnJvckhhbmRsaW5nKHJlZiwgb3duZXIsIDEyLCBbdmFsdWUsIHJlZnNdKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBfaXNTdHJpbmcgPSBpc1N0cmluZyhyZWYpO1xuICAgIGNvbnN0IF9pc1JlZiA9IGlzUmVmKHJlZik7XG4gICAgaWYgKF9pc1N0cmluZyB8fCBfaXNSZWYpIHtcbiAgICAgIGNvbnN0IGRvU2V0ID0gKCkgPT4ge1xuICAgICAgICBpZiAocmF3UmVmLmYpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IF9pc1N0cmluZyA/IGNhblNldFNldHVwUmVmKHJlZikgPyBzZXR1cFN0YXRlW3JlZl0gOiByZWZzW3JlZl0gOiByZWYudmFsdWU7XG4gICAgICAgICAgaWYgKGlzVW5tb3VudCkge1xuICAgICAgICAgICAgaXNBcnJheShleGlzdGluZykgJiYgcmVtb3ZlKGV4aXN0aW5nLCByZWZWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNBcnJheShleGlzdGluZykpIHtcbiAgICAgICAgICAgICAgaWYgKF9pc1N0cmluZykge1xuICAgICAgICAgICAgICAgIHJlZnNbcmVmXSA9IFtyZWZWYWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhblNldFNldHVwUmVmKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgIHNldHVwU3RhdGVbcmVmXSA9IHJlZnNbcmVmXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVmLnZhbHVlID0gW3JlZlZhbHVlXTtcbiAgICAgICAgICAgICAgICBpZiAocmF3UmVmLmspIHJlZnNbcmF3UmVmLmtdID0gcmVmLnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFleGlzdGluZy5pbmNsdWRlcyhyZWZWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChyZWZWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF9pc1N0cmluZykge1xuICAgICAgICAgIHJlZnNbcmVmXSA9IHZhbHVlO1xuICAgICAgICAgIGlmIChjYW5TZXRTZXR1cFJlZihyZWYpKSB7XG4gICAgICAgICAgICBzZXR1cFN0YXRlW3JlZl0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX2lzUmVmKSB7XG4gICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgaWYgKHJhd1JlZi5rKSByZWZzW3Jhd1JlZi5rXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoXCJJbnZhbGlkIHRlbXBsYXRlIHJlZiB0eXBlOlwiLCByZWYsIGAoJHt0eXBlb2YgcmVmfSlgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBkb1NldC5pZCA9IC0xO1xuICAgICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoZG9TZXQsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvU2V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuJDEoXCJJbnZhbGlkIHRlbXBsYXRlIHJlZiB0eXBlOlwiLCByZWYsIGAoJHt0eXBlb2YgcmVmfSlgKTtcbiAgICB9XG4gIH1cbn1cblxubGV0IGhhc0xvZ2dlZE1pc21hdGNoRXJyb3IgPSBmYWxzZTtcbmNvbnN0IGxvZ01pc21hdGNoRXJyb3IgPSAoKSA9PiB7XG4gIGlmIChoYXNMb2dnZWRNaXNtYXRjaEVycm9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoXCJIeWRyYXRpb24gY29tcGxldGVkIGJ1dCBjb250YWlucyBtaXNtYXRjaGVzLlwiKTtcbiAgaGFzTG9nZ2VkTWlzbWF0Y2hFcnJvciA9IHRydWU7XG59O1xuY29uc3QgaXNTVkdDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiBjb250YWluZXIubmFtZXNwYWNlVVJJLmluY2x1ZGVzKFwic3ZnXCIpICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSBcImZvcmVpZ25PYmplY3RcIjtcbmNvbnN0IGlzTWF0aE1MQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4gY29udGFpbmVyLm5hbWVzcGFjZVVSSS5pbmNsdWRlcyhcIk1hdGhNTFwiKTtcbmNvbnN0IGdldENvbnRhaW5lclR5cGUgPSAoY29udGFpbmVyKSA9PiB7XG4gIGlmIChjb250YWluZXIubm9kZVR5cGUgIT09IDEpIHJldHVybiB2b2lkIDA7XG4gIGlmIChpc1NWR0NvbnRhaW5lcihjb250YWluZXIpKSByZXR1cm4gXCJzdmdcIjtcbiAgaWYgKGlzTWF0aE1MQ29udGFpbmVyKGNvbnRhaW5lcikpIHJldHVybiBcIm1hdGhtbFwiO1xuICByZXR1cm4gdm9pZCAwO1xufTtcbmNvbnN0IGlzQ29tbWVudCA9IChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4O1xuZnVuY3Rpb24gY3JlYXRlSHlkcmF0aW9uRnVuY3Rpb25zKHJlbmRlcmVySW50ZXJuYWxzKSB7XG4gIGNvbnN0IHtcbiAgICBtdDogbW91bnRDb21wb25lbnQsXG4gICAgcDogcGF0Y2gsXG4gICAgbzoge1xuICAgICAgcGF0Y2hQcm9wLFxuICAgICAgY3JlYXRlVGV4dCxcbiAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgcGFyZW50Tm9kZSxcbiAgICAgIHJlbW92ZSxcbiAgICAgIGluc2VydCxcbiAgICAgIGNyZWF0ZUNvbW1lbnRcbiAgICB9XG4gIH0gPSByZW5kZXJlckludGVybmFscztcbiAgY29uc3QgaHlkcmF0ZSA9ICh2bm9kZSwgY29udGFpbmVyKSA9PiB7XG4gICAgaWYgKCFjb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0hZRFJBVElPTl9NSVNNQVRDSF9ERVRBSUxTX18pICYmIHdhcm4kMShcbiAgICAgICAgYEF0dGVtcHRpbmcgdG8gaHlkcmF0ZSBleGlzdGluZyBtYXJrdXAgYnV0IGNvbnRhaW5lciBpcyBlbXB0eS4gUGVyZm9ybWluZyBmdWxsIG1vdW50IGluc3RlYWQuYFxuICAgICAgKTtcbiAgICAgIHBhdGNoKG51bGwsIHZub2RlLCBjb250YWluZXIpO1xuICAgICAgZmx1c2hQb3N0Rmx1c2hDYnMoKTtcbiAgICAgIGNvbnRhaW5lci5fdm5vZGUgPSB2bm9kZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaHlkcmF0ZU5vZGUoY29udGFpbmVyLmZpcnN0Q2hpbGQsIHZub2RlLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICBmbHVzaFBvc3RGbHVzaENicygpO1xuICAgIGNvbnRhaW5lci5fdm5vZGUgPSB2bm9kZTtcbiAgfTtcbiAgY29uc3QgaHlkcmF0ZU5vZGUgPSAobm9kZSwgdm5vZGUsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkID0gZmFsc2UpID0+IHtcbiAgICBvcHRpbWl6ZWQgPSBvcHRpbWl6ZWQgfHwgISF2bm9kZS5keW5hbWljQ2hpbGRyZW47XG4gICAgY29uc3QgaXNGcmFnbWVudFN0YXJ0ID0gaXNDb21tZW50KG5vZGUpICYmIG5vZGUuZGF0YSA9PT0gXCJbXCI7XG4gICAgY29uc3Qgb25NaXNtYXRjaCA9ICgpID0+IGhhbmRsZU1pc21hdGNoKFxuICAgICAgbm9kZSxcbiAgICAgIHZub2RlLFxuICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICBzbG90U2NvcGVJZHMsXG4gICAgICBpc0ZyYWdtZW50U3RhcnRcbiAgICApO1xuICAgIGNvbnN0IHsgdHlwZSwgcmVmLCBzaGFwZUZsYWcsIHBhdGNoRmxhZyB9ID0gdm5vZGU7XG4gICAgbGV0IGRvbVR5cGUgPSBub2RlLm5vZGVUeXBlO1xuICAgIHZub2RlLmVsID0gbm9kZTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgIGRlZihub2RlLCBcIl9fdm5vZGVcIiwgdm5vZGUsIHRydWUpO1xuICAgICAgZGVmKG5vZGUsIFwiX192dWVQYXJlbnRDb21wb25lbnRcIiwgcGFyZW50Q29tcG9uZW50LCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHBhdGNoRmxhZyA9PT0gLTIpIHtcbiAgICAgIG9wdGltaXplZCA9IGZhbHNlO1xuICAgICAgdm5vZGUuZHluYW1pY0NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5leHROb2RlID0gbnVsbDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgVGV4dDpcbiAgICAgICAgaWYgKGRvbVR5cGUgIT09IDMpIHtcbiAgICAgICAgICBpZiAodm5vZGUuY2hpbGRyZW4gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGluc2VydCh2bm9kZS5lbCA9IGNyZWF0ZVRleHQoXCJcIiksIHBhcmVudE5vZGUobm9kZSksIG5vZGUpO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG9uTWlzbWF0Y2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5vZGUuZGF0YSAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXykgJiYgd2FybiQxKFxuICAgICAgICAgICAgICBgSHlkcmF0aW9uIHRleHQgbWlzbWF0Y2ggaW5gLFxuICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgIGBcbiAgLSByZW5kZXJlZCBvbiBzZXJ2ZXI6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhXG4gICAgICAgICAgICAgICl9XG4gIC0gZXhwZWN0ZWQgb24gY2xpZW50OiAke0pTT04uc3RyaW5naWZ5KHZub2RlLmNoaWxkcmVuKX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nTWlzbWF0Y2hFcnJvcigpO1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHROb2RlID0gbmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENvbW1lbnQ6XG4gICAgICAgIGlmIChpc1RlbXBsYXRlTm9kZShub2RlKSkge1xuICAgICAgICAgIG5leHROb2RlID0gbmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgICAgcmVwbGFjZU5vZGUoXG4gICAgICAgICAgICB2bm9kZS5lbCA9IG5vZGUuY29udGVudC5maXJzdENoaWxkLFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9tVHlwZSAhPT0gOCB8fCBpc0ZyYWdtZW50U3RhcnQpIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IG9uTWlzbWF0Y2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRTaWJsaW5nKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdGF0aWM6XG4gICAgICAgIGlmIChpc0ZyYWdtZW50U3RhcnQpIHtcbiAgICAgICAgICBub2RlID0gbmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgICAgZG9tVHlwZSA9IG5vZGUubm9kZVR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbVR5cGUgPT09IDEgfHwgZG9tVHlwZSA9PT0gMykge1xuICAgICAgICAgIG5leHROb2RlID0gbm9kZTtcbiAgICAgICAgICBjb25zdCBuZWVkVG9BZG9wdENvbnRlbnQgPSAhdm5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm5vZGUuc3RhdGljQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5lZWRUb0Fkb3B0Q29udGVudClcbiAgICAgICAgICAgICAgdm5vZGUuY2hpbGRyZW4gKz0gbmV4dE5vZGUubm9kZVR5cGUgPT09IDEgPyBuZXh0Tm9kZS5vdXRlckhUTUwgOiBuZXh0Tm9kZS5kYXRhO1xuICAgICAgICAgICAgaWYgKGkgPT09IHZub2RlLnN0YXRpY0NvdW50IC0gMSkge1xuICAgICAgICAgICAgICB2bm9kZS5hbmNob3IgPSBuZXh0Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFNpYmxpbmcobmV4dE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXNGcmFnbWVudFN0YXJ0ID8gbmV4dFNpYmxpbmcobmV4dE5vZGUpIDogbmV4dE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25NaXNtYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGcmFnbWVudDpcbiAgICAgICAgaWYgKCFpc0ZyYWdtZW50U3RhcnQpIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IG9uTWlzbWF0Y2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IGh5ZHJhdGVGcmFnbWVudChcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzaGFwZUZsYWcgJiAxKSB7XG4gICAgICAgICAgaWYgKChkb21UeXBlICE9PSAxIHx8IHZub2RlLnR5cGUudG9Mb3dlckNhc2UoKSAhPT0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpICYmICFpc1RlbXBsYXRlTm9kZShub2RlKSkge1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBvbk1pc21hdGNoKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb2RlID0gaHlkcmF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgIHZub2RlLFxuICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgNikge1xuICAgICAgICAgIHZub2RlLnNsb3RTY29wZUlkcyA9IHNsb3RTY29wZUlkcztcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBwYXJlbnROb2RlKG5vZGUpO1xuICAgICAgICAgIGlmIChpc0ZyYWdtZW50U3RhcnQpIHtcbiAgICAgICAgICAgIG5leHROb2RlID0gbG9jYXRlQ2xvc2luZ0FuY2hvcihub2RlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ29tbWVudChub2RlKSAmJiBub2RlLmRhdGEgPT09IFwidGVsZXBvcnQgc3RhcnRcIikge1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBsb2NhdGVDbG9zaW5nQW5jaG9yKG5vZGUsIG5vZGUuZGF0YSwgXCJ0ZWxlcG9ydCBlbmRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1vdW50Q29tcG9uZW50KFxuICAgICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBnZXRDb250YWluZXJUeXBlKGNvbnRhaW5lciksXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpc0FzeW5jV3JhcHBlcih2bm9kZSkgJiYgIXZub2RlLnR5cGUuX19hc3luY1Jlc29sdmVkKSB7XG4gICAgICAgICAgICBsZXQgc3ViVHJlZTtcbiAgICAgICAgICAgIGlmIChpc0ZyYWdtZW50U3RhcnQpIHtcbiAgICAgICAgICAgICAgc3ViVHJlZSA9IGNyZWF0ZVZOb2RlKEZyYWdtZW50KTtcbiAgICAgICAgICAgICAgc3ViVHJlZS5hbmNob3IgPSBuZXh0Tm9kZSA/IG5leHROb2RlLnByZXZpb3VzU2libGluZyA6IGNvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWJUcmVlID0gbm9kZS5ub2RlVHlwZSA9PT0gMyA/IGNyZWF0ZVRleHRWTm9kZShcIlwiKSA6IGNyZWF0ZVZOb2RlKFwiZGl2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ViVHJlZS5lbCA9IG5vZGU7XG4gICAgICAgICAgICB2bm9kZS5jb21wb25lbnQuc3ViVHJlZSA9IHN1YlRyZWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoYXBlRmxhZyAmIDY0KSB7XG4gICAgICAgICAgaWYgKGRvbVR5cGUgIT09IDgpIHtcbiAgICAgICAgICAgIG5leHROb2RlID0gb25NaXNtYXRjaCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IHZub2RlLnR5cGUuaHlkcmF0ZShcbiAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgICAgb3B0aW1pemVkLFxuICAgICAgICAgICAgICByZW5kZXJlckludGVybmFscyxcbiAgICAgICAgICAgICAgaHlkcmF0ZUNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGFwZUZsYWcgJiAxMjgpIHtcbiAgICAgICAgICBuZXh0Tm9kZSA9IHZub2RlLnR5cGUuaHlkcmF0ZShcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgZ2V0Q29udGFpbmVyVHlwZShwYXJlbnROb2RlKG5vZGUpKSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZCxcbiAgICAgICAgICAgIHJlbmRlcmVySW50ZXJuYWxzLFxuICAgICAgICAgICAgaHlkcmF0ZU5vZGVcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fKSB7XG4gICAgICAgICAgd2FybiQxKFwiSW52YWxpZCBIb3N0Vk5vZGUgdHlwZTpcIiwgdHlwZSwgYCgke3R5cGVvZiB0eXBlfSlgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgIHNldFJlZihyZWYsIG51bGwsIHBhcmVudFN1c3BlbnNlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgfTtcbiAgY29uc3QgaHlkcmF0ZUVsZW1lbnQgPSAoZWwsIHZub2RlLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIG9wdGltaXplZCA9IG9wdGltaXplZCB8fCAhIXZub2RlLmR5bmFtaWNDaGlsZHJlbjtcbiAgICBjb25zdCB7IHR5cGUsIHByb3BzLCBwYXRjaEZsYWcsIHNoYXBlRmxhZywgZGlycywgdHJhbnNpdGlvbiB9ID0gdm5vZGU7XG4gICAgY29uc3QgZm9yY2VQYXRjaCA9IHR5cGUgPT09IFwiaW5wdXRcIiB8fCB0eXBlID09PSBcIm9wdGlvblwiO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZvcmNlUGF0Y2ggfHwgcGF0Y2hGbGFnICE9PSAtMSkge1xuICAgICAgaWYgKGRpcnMpIHtcbiAgICAgICAgaW52b2tlRGlyZWN0aXZlSG9vayh2bm9kZSwgbnVsbCwgcGFyZW50Q29tcG9uZW50LCBcImNyZWF0ZWRcIik7XG4gICAgICB9XG4gICAgICBsZXQgbmVlZENhbGxUcmFuc2l0aW9uSG9va3MgPSBmYWxzZTtcbiAgICAgIGlmIChpc1RlbXBsYXRlTm9kZShlbCkpIHtcbiAgICAgICAgbmVlZENhbGxUcmFuc2l0aW9uSG9va3MgPSBuZWVkVHJhbnNpdGlvbihcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIC8vIG5vIG5lZWQgY2hlY2sgcGFyZW50U3VzcGVuc2UgaW4gaHlkcmF0aW9uXG4gICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICApICYmIHBhcmVudENvbXBvbmVudCAmJiBwYXJlbnRDb21wb25lbnQudm5vZGUucHJvcHMgJiYgcGFyZW50Q29tcG9uZW50LnZub2RlLnByb3BzLmFwcGVhcjtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5iZWZvcmVFbnRlcihjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXBsYWNlTm9kZShjb250ZW50LCBlbCwgcGFyZW50Q29tcG9uZW50KTtcbiAgICAgICAgdm5vZGUuZWwgPSBlbCA9IGNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoc2hhcGVGbGFnICYgMTYgJiYgLy8gc2tpcCBpZiBlbGVtZW50IGhhcyBpbm5lckhUTUwgLyB0ZXh0Q29udGVudFxuICAgICAgIShwcm9wcyAmJiAocHJvcHMuaW5uZXJIVE1MIHx8IHByb3BzLnRleHRDb250ZW50KSkpIHtcbiAgICAgICAgbGV0IG5leHQgPSBoeWRyYXRlQ2hpbGRyZW4oXG4gICAgICAgICAgZWwuZmlyc3RDaGlsZCxcbiAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICBlbCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgICBsZXQgaGFzV2FybmVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICAgICAgaWYgKCFpc01pc21hdGNoQWxsb3dlZChlbCwgMSAvKiBDSElMRFJFTiAqLykpIHtcbiAgICAgICAgICAgIGlmICgoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0hZRFJBVElPTl9NSVNNQVRDSF9ERVRBSUxTX18pICYmICFoYXNXYXJuZWQpIHtcbiAgICAgICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgICAgIGBIeWRyYXRpb24gY2hpbGRyZW4gbWlzbWF0Y2ggb25gLFxuICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgIGBcblNlcnZlciByZW5kZXJlZCBlbGVtZW50IGNvbnRhaW5zIG1vcmUgY2hpbGQgbm9kZXMgdGhhbiBjbGllbnQgdmRvbS5gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGhhc1dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dNaXNtYXRjaEVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGN1ciA9IG5leHQ7XG4gICAgICAgICAgbmV4dCA9IG5leHQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgcmVtb3ZlKGN1cik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgOCkge1xuICAgICAgICBsZXQgY2xpZW50VGV4dCA9IHZub2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoY2xpZW50VGV4dFswXSA9PT0gXCJcXG5cIiAmJiAoZWwudGFnTmFtZSA9PT0gXCJQUkVcIiB8fCBlbC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpKSB7XG4gICAgICAgICAgY2xpZW50VGV4dCA9IGNsaWVudFRleHQuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLnRleHRDb250ZW50ICE9PSBjbGllbnRUZXh0KSB7XG4gICAgICAgICAgaWYgKCFpc01pc21hdGNoQWxsb3dlZChlbCwgMCAvKiBURVhUICovKSkge1xuICAgICAgICAgICAgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fKSAmJiB3YXJuJDEoXG4gICAgICAgICAgICAgIGBIeWRyYXRpb24gdGV4dCBjb250ZW50IG1pc21hdGNoIG9uYCxcbiAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgIGBcbiAgLSByZW5kZXJlZCBvbiBzZXJ2ZXI6ICR7ZWwudGV4dENvbnRlbnR9XG4gIC0gZXhwZWN0ZWQgb24gY2xpZW50OiAke3Zub2RlLmNoaWxkcmVufWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dNaXNtYXRjaEVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcykge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0hZRFJBVElPTl9NSVNNQVRDSF9ERVRBSUxTX18gfHwgZm9yY2VQYXRjaCB8fCAhb3B0aW1pemVkIHx8IHBhdGNoRmxhZyAmICgxNiB8IDMyKSkge1xuICAgICAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fKSAmJiAvLyAjMTExODkgc2tpcCBpZiB0aGlzIG5vZGUgaGFzIGRpcmVjdGl2ZXMgdGhhdCBoYXZlIGNyZWF0ZWQgaG9va3NcbiAgICAgICAgICAgIC8vIGFzIGl0IGNvdWxkIGhhdmUgbXV0YXRlZCB0aGUgRE9NIGluIGFueSBwb3NzaWJsZSB3YXlcbiAgICAgICAgICAgICEoZGlycyAmJiBkaXJzLnNvbWUoKGQpID0+IGQuZGlyLmNyZWF0ZWQpKSAmJiBwcm9wSGFzTWlzbWF0Y2goZWwsIGtleSwgcHJvcHNba2V5XSwgdm5vZGUsIHBhcmVudENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgbG9nTWlzbWF0Y2hFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZvcmNlUGF0Y2ggJiYgKGtleS5lbmRzV2l0aChcInZhbHVlXCIpIHx8IGtleSA9PT0gXCJpbmRldGVybWluYXRlXCIpIHx8IGlzT24oa2V5KSAmJiAhaXNSZXNlcnZlZFByb3Aoa2V5KSB8fCAvLyBmb3JjZSBoeWRyYXRlIHYtYmluZCB3aXRoIC5wcm9wIG1vZGlmaWVyc1xuICAgICAgICAgICAga2V5WzBdID09PSBcIi5cIiB8fCBpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcGF0Y2hQcm9wKGVsLCBrZXksIG51bGwsIHByb3BzW2tleV0sIHZvaWQgMCwgcGFyZW50Q29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgICAgIHBhdGNoUHJvcChcbiAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvcHMub25DbGljayxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocGF0Y2hGbGFnICYgNCAmJiBpc1JlYWN0aXZlKHByb3BzLnN0eWxlKSkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzLnN0eWxlKSBwcm9wcy5zdHlsZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgdm5vZGVIb29rcztcbiAgICAgIGlmICh2bm9kZUhvb2tzID0gcHJvcHMgJiYgcHJvcHMub25Wbm9kZUJlZm9yZU1vdW50KSB7XG4gICAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2tzLCBwYXJlbnRDb21wb25lbnQsIHZub2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXJzKSB7XG4gICAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJiZWZvcmVNb3VudFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICgodm5vZGVIb29rcyA9IHByb3BzICYmIHByb3BzLm9uVm5vZGVNb3VudGVkKSB8fCBkaXJzIHx8IG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzKSB7XG4gICAgICAgIHF1ZXVlRWZmZWN0V2l0aFN1c3BlbnNlKCgpID0+IHtcbiAgICAgICAgICB2bm9kZUhvb2tzICYmIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2tzLCBwYXJlbnRDb21wb25lbnQsIHZub2RlKTtcbiAgICAgICAgICBuZWVkQ2FsbFRyYW5zaXRpb25Ib29rcyAmJiB0cmFuc2l0aW9uLmVudGVyKGVsKTtcbiAgICAgICAgICBkaXJzICYmIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJtb3VudGVkXCIpO1xuICAgICAgICB9LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbC5uZXh0U2libGluZztcbiAgfTtcbiAgY29uc3QgaHlkcmF0ZUNoaWxkcmVuID0gKG5vZGUsIHBhcmVudFZOb2RlLCBjb250YWluZXIsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgb3B0aW1pemVkID0gb3B0aW1pemVkIHx8ICEhcGFyZW50Vk5vZGUuZHluYW1pY0NoaWxkcmVuO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgbCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBsZXQgaGFzV2FybmVkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHZub2RlID0gb3B0aW1pemVkID8gY2hpbGRyZW5baV0gOiBjaGlsZHJlbltpXSA9IG5vcm1hbGl6ZVZOb2RlKGNoaWxkcmVuW2ldKTtcbiAgICAgIGNvbnN0IGlzVGV4dCA9IHZub2RlLnR5cGUgPT09IFRleHQ7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBpZiAoaXNUZXh0ICYmICFvcHRpbWl6ZWQpIHtcbiAgICAgICAgICBpZiAoaSArIDEgPCBsICYmIG5vcm1hbGl6ZVZOb2RlKGNoaWxkcmVuW2kgKyAxXSkudHlwZSA9PT0gVGV4dCkge1xuICAgICAgICAgICAgaW5zZXJ0KFxuICAgICAgICAgICAgICBjcmVhdGVUZXh0KFxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YS5zbGljZSh2bm9kZS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgbmV4dFNpYmxpbmcobm9kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IGh5ZHJhdGVOb2RlKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUZXh0ICYmICF2bm9kZS5jaGlsZHJlbikge1xuICAgICAgICBpbnNlcnQodm5vZGUuZWwgPSBjcmVhdGVUZXh0KFwiXCIpLCBjb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc01pc21hdGNoQWxsb3dlZChjb250YWluZXIsIDEgLyogQ0hJTERSRU4gKi8pKSB7XG4gICAgICAgICAgaWYgKCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXykgJiYgIWhhc1dhcm5lZCkge1xuICAgICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgICBgSHlkcmF0aW9uIGNoaWxkcmVuIG1pc21hdGNoIG9uYCxcbiAgICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgICBgXG5TZXJ2ZXIgcmVuZGVyZWQgZWxlbWVudCBjb250YWlucyBmZXdlciBjaGlsZCBub2RlcyB0aGFuIGNsaWVudCB2ZG9tLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dNaXNtYXRjaEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyVHlwZShjb250YWluZXIpLFxuICAgICAgICAgIHNsb3RTY29wZUlkc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgY29uc3QgaHlkcmF0ZUZyYWdtZW50ID0gKG5vZGUsIHZub2RlLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGNvbnN0IHsgc2xvdFNjb3BlSWRzOiBmcmFnbWVudFNsb3RTY29wZUlkcyB9ID0gdm5vZGU7XG4gICAgaWYgKGZyYWdtZW50U2xvdFNjb3BlSWRzKSB7XG4gICAgICBzbG90U2NvcGVJZHMgPSBzbG90U2NvcGVJZHMgPyBzbG90U2NvcGVJZHMuY29uY2F0KGZyYWdtZW50U2xvdFNjb3BlSWRzKSA6IGZyYWdtZW50U2xvdFNjb3BlSWRzO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBwYXJlbnROb2RlKG5vZGUpO1xuICAgIGNvbnN0IG5leHQgPSBoeWRyYXRlQ2hpbGRyZW4oXG4gICAgICBuZXh0U2libGluZyhub2RlKSxcbiAgICAgIHZub2RlLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICBzbG90U2NvcGVJZHMsXG4gICAgICBvcHRpbWl6ZWRcbiAgICApO1xuICAgIGlmIChuZXh0ICYmIGlzQ29tbWVudChuZXh0KSAmJiBuZXh0LmRhdGEgPT09IFwiXVwiKSB7XG4gICAgICByZXR1cm4gbmV4dFNpYmxpbmcodm5vZGUuYW5jaG9yID0gbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ01pc21hdGNoRXJyb3IoKTtcbiAgICAgIGluc2VydCh2bm9kZS5hbmNob3IgPSBjcmVhdGVDb21tZW50KGBdYCksIGNvbnRhaW5lciwgbmV4dCk7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZU1pc21hdGNoID0gKG5vZGUsIHZub2RlLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBzbG90U2NvcGVJZHMsIGlzRnJhZ21lbnQpID0+IHtcbiAgICBpZiAoIWlzTWlzbWF0Y2hBbGxvd2VkKG5vZGUucGFyZW50RWxlbWVudCwgMSAvKiBDSElMRFJFTiAqLykpIHtcbiAgICAgICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXykgJiYgd2FybiQxKFxuICAgICAgICBgSHlkcmF0aW9uIG5vZGUgbWlzbWF0Y2g6XG4tIHJlbmRlcmVkIG9uIHNlcnZlcjpgLFxuICAgICAgICBub2RlLFxuICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzID8gYCh0ZXh0KWAgOiBpc0NvbW1lbnQobm9kZSkgJiYgbm9kZS5kYXRhID09PSBcIltcIiA/IGAoc3RhcnQgb2YgZnJhZ21lbnQpYCA6IGBgLFxuICAgICAgICBgXG4tIGV4cGVjdGVkIG9uIGNsaWVudDpgLFxuICAgICAgICB2bm9kZS50eXBlXG4gICAgICApO1xuICAgICAgbG9nTWlzbWF0Y2hFcnJvcigpO1xuICAgIH1cbiAgICB2bm9kZS5lbCA9IG51bGw7XG4gICAgaWYgKGlzRnJhZ21lbnQpIHtcbiAgICAgIGNvbnN0IGVuZCA9IGxvY2F0ZUNsb3NpbmdBbmNob3Iobm9kZSk7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBuZXh0MiA9IG5leHRTaWJsaW5nKG5vZGUpO1xuICAgICAgICBpZiAobmV4dDIgJiYgbmV4dDIgIT09IGVuZCkge1xuICAgICAgICAgIHJlbW92ZShuZXh0Mik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV4dCA9IG5leHRTaWJsaW5nKG5vZGUpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudE5vZGUobm9kZSk7XG4gICAgcmVtb3ZlKG5vZGUpO1xuICAgIHBhdGNoKFxuICAgICAgbnVsbCxcbiAgICAgIHZub2RlLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgbmV4dCxcbiAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgZ2V0Q29udGFpbmVyVHlwZShjb250YWluZXIpLFxuICAgICAgc2xvdFNjb3BlSWRzXG4gICAgKTtcbiAgICBpZiAocGFyZW50Q29tcG9uZW50KSB7XG4gICAgICBwYXJlbnRDb21wb25lbnQudm5vZGUuZWwgPSB2bm9kZS5lbDtcbiAgICAgIHVwZGF0ZUhPQ0hvc3RFbChwYXJlbnRDb21wb25lbnQsIHZub2RlLmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQ7XG4gIH07XG4gIGNvbnN0IGxvY2F0ZUNsb3NpbmdBbmNob3IgPSAobm9kZSwgb3BlbiA9IFwiW1wiLCBjbG9zZSA9IFwiXVwiKSA9PiB7XG4gICAgbGV0IG1hdGNoID0gMDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgbm9kZSA9IG5leHRTaWJsaW5nKG5vZGUpO1xuICAgICAgaWYgKG5vZGUgJiYgaXNDb21tZW50KG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IG9wZW4pIG1hdGNoKys7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IGNsb3NlKSB7XG4gICAgICAgICAgaWYgKG1hdGNoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dFNpYmxpbmcobm9kZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGNoLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICBjb25zdCByZXBsYWNlTm9kZSA9IChuZXdOb2RlLCBvbGROb2RlLCBwYXJlbnRDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlMiA9IG9sZE5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZTIpIHtcbiAgICAgIHBhcmVudE5vZGUyLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBvbGROb2RlKTtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IHBhcmVudENvbXBvbmVudDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LnZub2RlLmVsID09PSBvbGROb2RlKSB7XG4gICAgICAgIHBhcmVudC52bm9kZS5lbCA9IHBhcmVudC5zdWJUcmVlLmVsID0gbmV3Tm9kZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICB9O1xuICBjb25zdCBpc1RlbXBsYXRlTm9kZSA9IChub2RlKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS50YWdOYW1lID09PSBcIlRFTVBMQVRFXCI7XG4gIH07XG4gIHJldHVybiBbaHlkcmF0ZSwgaHlkcmF0ZU5vZGVdO1xufVxuZnVuY3Rpb24gcHJvcEhhc01pc21hdGNoKGVsLCBrZXksIGNsaWVudFZhbHVlLCB2bm9kZSwgaW5zdGFuY2UpIHtcbiAgbGV0IG1pc21hdGNoVHlwZTtcbiAgbGV0IG1pc21hdGNoS2V5O1xuICBsZXQgYWN0dWFsO1xuICBsZXQgZXhwZWN0ZWQ7XG4gIGlmIChrZXkgPT09IFwiY2xhc3NcIikge1xuICAgIGFjdHVhbCA9IGVsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgIGV4cGVjdGVkID0gbm9ybWFsaXplQ2xhc3MoY2xpZW50VmFsdWUpO1xuICAgIGlmICghaXNTZXRFcXVhbCh0b0NsYXNzU2V0KGFjdHVhbCB8fCBcIlwiKSwgdG9DbGFzc1NldChleHBlY3RlZCkpKSB7XG4gICAgICBtaXNtYXRjaFR5cGUgPSAyIC8qIENMQVNTICovO1xuICAgICAgbWlzbWF0Y2hLZXkgPSBgY2xhc3NgO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09IFwic3R5bGVcIikge1xuICAgIGFjdHVhbCA9IGVsLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCI7XG4gICAgZXhwZWN0ZWQgPSBpc1N0cmluZyhjbGllbnRWYWx1ZSkgPyBjbGllbnRWYWx1ZSA6IHN0cmluZ2lmeVN0eWxlKG5vcm1hbGl6ZVN0eWxlKGNsaWVudFZhbHVlKSk7XG4gICAgY29uc3QgYWN0dWFsTWFwID0gdG9TdHlsZU1hcChhY3R1YWwpO1xuICAgIGNvbnN0IGV4cGVjdGVkTWFwID0gdG9TdHlsZU1hcChleHBlY3RlZCk7XG4gICAgaWYgKHZub2RlLmRpcnMpIHtcbiAgICAgIGZvciAoY29uc3QgeyBkaXIsIHZhbHVlIH0gb2Ygdm5vZGUuZGlycykge1xuICAgICAgICBpZiAoZGlyLm5hbWUgPT09IFwic2hvd1wiICYmICF2YWx1ZSkge1xuICAgICAgICAgIGV4cGVjdGVkTWFwLnNldChcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgcmVzb2x2ZUNzc1ZhcnMoaW5zdGFuY2UsIHZub2RlLCBleHBlY3RlZE1hcCk7XG4gICAgfVxuICAgIGlmICghaXNNYXBFcXVhbChhY3R1YWxNYXAsIGV4cGVjdGVkTWFwKSkge1xuICAgICAgbWlzbWF0Y2hUeXBlID0gMyAvKiBTVFlMRSAqLztcbiAgICAgIG1pc21hdGNoS2V5ID0gXCJzdHlsZVwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgaXNLbm93blN2Z0F0dHIoa2V5KSB8fCBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIChpc0Jvb2xlYW5BdHRyKGtleSkgfHwgaXNLbm93bkh0bWxBdHRyKGtleSkpKSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIoa2V5KSkge1xuICAgICAgYWN0dWFsID0gZWwuaGFzQXR0cmlidXRlKGtleSk7XG4gICAgICBleHBlY3RlZCA9IGluY2x1ZGVCb29sZWFuQXR0cihjbGllbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChjbGllbnRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBhY3R1YWwgPSBlbC5oYXNBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIGV4cGVjdGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoa2V5KSkge1xuICAgICAgICBhY3R1YWwgPSBlbC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInZhbHVlXCIgJiYgZWwudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSB7XG4gICAgICAgIGFjdHVhbCA9IGVsLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0dWFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBleHBlY3RlZCA9IGlzUmVuZGVyYWJsZUF0dHJWYWx1ZShjbGllbnRWYWx1ZSkgPyBTdHJpbmcoY2xpZW50VmFsdWUpIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgICBtaXNtYXRjaFR5cGUgPSA0IC8qIEFUVFJJQlVURSAqLztcbiAgICAgIG1pc21hdGNoS2V5ID0ga2V5O1xuICAgIH1cbiAgfVxuICBpZiAobWlzbWF0Y2hUeXBlICE9IG51bGwgJiYgIWlzTWlzbWF0Y2hBbGxvd2VkKGVsLCBtaXNtYXRjaFR5cGUpKSB7XG4gICAgY29uc3QgZm9ybWF0ID0gKHYpID0+IHYgPT09IGZhbHNlID8gYChub3QgcmVuZGVyZWQpYCA6IGAke21pc21hdGNoS2V5fT1cIiR7dn1cImA7XG4gICAgY29uc3QgcHJlU2VnbWVudCA9IGBIeWRyYXRpb24gJHtNaXNtYXRjaFR5cGVTdHJpbmdbbWlzbWF0Y2hUeXBlXX0gbWlzbWF0Y2ggb25gO1xuICAgIGNvbnN0IHBvc3RTZWdtZW50ID0gYFxuICAtIHJlbmRlcmVkIG9uIHNlcnZlcjogJHtmb3JtYXQoYWN0dWFsKX1cbiAgLSBleHBlY3RlZCBvbiBjbGllbnQ6ICR7Zm9ybWF0KGV4cGVjdGVkKX1cbiAgTm90ZTogdGhpcyBtaXNtYXRjaCBpcyBjaGVjay1vbmx5LiBUaGUgRE9NIHdpbGwgbm90IGJlIHJlY3RpZmllZCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwZXJmb3JtYW5jZSBvdmVyaGVhZC5cbiAgWW91IHNob3VsZCBmaXggdGhlIHNvdXJjZSBvZiB0aGUgbWlzbWF0Y2guYDtcbiAgICB7XG4gICAgICB3YXJuJDEocHJlU2VnbWVudCwgZWwsIHBvc3RTZWdtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdG9DbGFzc1NldChzdHIpIHtcbiAgcmV0dXJuIG5ldyBTZXQoc3RyLnRyaW0oKS5zcGxpdCgvXFxzKy8pKTtcbn1cbmZ1bmN0aW9uIGlzU2V0RXF1YWwoYSwgYikge1xuICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChjb25zdCBzIG9mIGEpIHtcbiAgICBpZiAoIWIuaGFzKHMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdG9TdHlsZU1hcChzdHIpIHtcbiAgY29uc3Qgc3R5bGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RyLnNwbGl0KFwiO1wiKSkge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KFwiOlwiKTtcbiAgICBrZXkgPSBrZXkudHJpbSgpO1xuICAgIHZhbHVlID0gdmFsdWUgJiYgdmFsdWUudHJpbSgpO1xuICAgIGlmIChrZXkgJiYgdmFsdWUpIHtcbiAgICAgIHN0eWxlTWFwLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlTWFwO1xufVxuZnVuY3Rpb24gaXNNYXBFcXVhbChhLCBiKSB7XG4gIGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBhKSB7XG4gICAgaWYgKHZhbHVlICE9PSBiLmdldChrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUNzc1ZhcnMoaW5zdGFuY2UsIHZub2RlLCBleHBlY3RlZE1hcCkge1xuICBjb25zdCByb290ID0gaW5zdGFuY2Uuc3ViVHJlZTtcbiAgaWYgKGluc3RhbmNlLmdldENzc1ZhcnMgJiYgKHZub2RlID09PSByb290IHx8IHJvb3QgJiYgcm9vdC50eXBlID09PSBGcmFnbWVudCAmJiByb290LmNoaWxkcmVuLmluY2x1ZGVzKHZub2RlKSkpIHtcbiAgICBjb25zdCBjc3NWYXJzID0gaW5zdGFuY2UuZ2V0Q3NzVmFycygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNzc1ZhcnMpIHtcbiAgICAgIGV4cGVjdGVkTWFwLnNldChcbiAgICAgICAgYC0tJHtnZXRFc2NhcGVkQ3NzVmFyTmFtZShrZXksIGZhbHNlKX1gLFxuICAgICAgICBTdHJpbmcoY3NzVmFyc1trZXldKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZub2RlID09PSByb290ICYmIGluc3RhbmNlLnBhcmVudCkge1xuICAgIHJlc29sdmVDc3NWYXJzKGluc3RhbmNlLnBhcmVudCwgaW5zdGFuY2Uudm5vZGUsIGV4cGVjdGVkTWFwKTtcbiAgfVxufVxuY29uc3QgYWxsb3dNaXNtYXRjaEF0dHIgPSBcImRhdGEtYWxsb3ctbWlzbWF0Y2hcIjtcbmNvbnN0IE1pc21hdGNoVHlwZVN0cmluZyA9IHtcbiAgWzAgLyogVEVYVCAqL106IFwidGV4dFwiLFxuICBbMSAvKiBDSElMRFJFTiAqL106IFwiY2hpbGRyZW5cIixcbiAgWzIgLyogQ0xBU1MgKi9dOiBcImNsYXNzXCIsXG4gIFszIC8qIFNUWUxFICovXTogXCJzdHlsZVwiLFxuICBbNCAvKiBBVFRSSUJVVEUgKi9dOiBcImF0dHJpYnV0ZVwiXG59O1xuZnVuY3Rpb24gaXNNaXNtYXRjaEFsbG93ZWQoZWwsIGFsbG93ZWRUeXBlKSB7XG4gIGlmIChhbGxvd2VkVHlwZSA9PT0gMCAvKiBURVhUICovIHx8IGFsbG93ZWRUeXBlID09PSAxIC8qIENISUxEUkVOICovKSB7XG4gICAgd2hpbGUgKGVsICYmICFlbC5oYXNBdHRyaWJ1dGUoYWxsb3dNaXNtYXRjaEF0dHIpKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIGNvbnN0IGFsbG93ZWRBdHRyID0gZWwgJiYgZWwuZ2V0QXR0cmlidXRlKGFsbG93TWlzbWF0Y2hBdHRyKTtcbiAgaWYgKGFsbG93ZWRBdHRyID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoYWxsb3dlZEF0dHIgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsaXN0ID0gYWxsb3dlZEF0dHIuc3BsaXQoXCIsXCIpO1xuICAgIGlmIChhbGxvd2VkVHlwZSA9PT0gMCAvKiBURVhUICovICYmIGxpc3QuaW5jbHVkZXMoXCJjaGlsZHJlblwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBhbGxvd2VkQXR0ci5zcGxpdChcIixcIikuaW5jbHVkZXMoTWlzbWF0Y2hUeXBlU3RyaW5nW2FsbG93ZWRUeXBlXSk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IGdldEdsb2JhbFRoaXMoKS5yZXF1ZXN0SWRsZUNhbGxiYWNrIHx8ICgoY2IpID0+IHNldFRpbWVvdXQoY2IsIDEpKTtcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IGdldEdsb2JhbFRoaXMoKS5jYW5jZWxJZGxlQ2FsbGJhY2sgfHwgKChpZCkgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XG5jb25zdCBoeWRyYXRlT25JZGxlID0gKHRpbWVvdXQgPSAxZTQpID0+IChoeWRyYXRlKSA9PiB7XG4gIGNvbnN0IGlkID0gcmVxdWVzdElkbGVDYWxsYmFjayhoeWRyYXRlLCB7IHRpbWVvdXQgfSk7XG4gIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWQpO1xufTtcbmZ1bmN0aW9uIGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0KGVsKSB7XG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuICByZXR1cm4gKHRvcCA+IDAgJiYgdG9wIDwgaW5uZXJIZWlnaHQgfHwgYm90dG9tID4gMCAmJiBib3R0b20gPCBpbm5lckhlaWdodCkgJiYgKGxlZnQgPiAwICYmIGxlZnQgPCBpbm5lcldpZHRoIHx8IHJpZ2h0ID4gMCAmJiByaWdodCA8IGlubmVyV2lkdGgpO1xufVxuY29uc3QgaHlkcmF0ZU9uVmlzaWJsZSA9IChvcHRzKSA9PiAoaHlkcmF0ZSwgZm9yRWFjaCkgPT4ge1xuICBjb25zdCBvYiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGZvciAoY29uc3QgZSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIWUuaXNJbnRlcnNlY3RpbmcpIGNvbnRpbnVlO1xuICAgICAgb2IuZGlzY29ubmVjdCgpO1xuICAgICAgaHlkcmF0ZSgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBvcHRzKTtcbiAgZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm47XG4gICAgaWYgKGVsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0KGVsKSkge1xuICAgICAgaHlkcmF0ZSgpO1xuICAgICAgb2IuZGlzY29ubmVjdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYi5vYnNlcnZlKGVsKTtcbiAgfSk7XG4gIHJldHVybiAoKSA9PiBvYi5kaXNjb25uZWN0KCk7XG59O1xuY29uc3QgaHlkcmF0ZU9uTWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKGh5ZHJhdGUpID0+IHtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgY29uc3QgbXFsID0gbWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICBoeWRyYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGh5ZHJhdGUsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiAoKSA9PiBtcWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoeWRyYXRlKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBoeWRyYXRlT25JbnRlcmFjdGlvbiA9IChpbnRlcmFjdGlvbnMgPSBbXSkgPT4gKGh5ZHJhdGUsIGZvckVhY2gpID0+IHtcbiAgaWYgKGlzU3RyaW5nKGludGVyYWN0aW9ucykpIGludGVyYWN0aW9ucyA9IFtpbnRlcmFjdGlvbnNdO1xuICBsZXQgaGFzSHlkcmF0ZWQgPSBmYWxzZTtcbiAgY29uc3QgZG9IeWRyYXRlID0gKGUpID0+IHtcbiAgICBpZiAoIWhhc0h5ZHJhdGVkKSB7XG4gICAgICBoYXNIeWRyYXRlZCA9IHRydWU7XG4gICAgICB0ZWFyZG93bigpO1xuICAgICAgaHlkcmF0ZSgpO1xuICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgZS5jb25zdHJ1Y3RvcihlLnR5cGUsIGUpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRlYXJkb3duID0gKCkgPT4ge1xuICAgIGZvckVhY2goKGVsKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgaW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoaSwgZG9IeWRyYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yRWFjaCgoZWwpID0+IHtcbiAgICBmb3IgKGNvbnN0IGkgb2YgaW50ZXJhY3Rpb25zKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGksIGRvSHlkcmF0ZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0ZWFyZG93bjtcbn07XG5mdW5jdGlvbiBmb3JFYWNoRWxlbWVudChub2RlLCBjYikge1xuICBpZiAoaXNDb21tZW50KG5vZGUpICYmIG5vZGUuZGF0YSA9PT0gXCJbXCIpIHtcbiAgICBsZXQgZGVwdGggPSAxO1xuICAgIGxldCBuZXh0ID0gbm9kZS5uZXh0U2libGluZztcbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2IobmV4dCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNDb21tZW50KG5leHQpKSB7XG4gICAgICAgIGlmIChuZXh0LmRhdGEgPT09IFwiXVwiKSB7XG4gICAgICAgICAgaWYgKC0tZGVwdGggPT09IDApIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHQuZGF0YSA9PT0gXCJbXCIpIHtcbiAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZXh0ID0gbmV4dC5uZXh0U2libGluZztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2Iobm9kZSk7XG4gIH1cbn1cblxuY29uc3QgaXNBc3luY1dyYXBwZXIgPSAoaSkgPT4gISFpLnR5cGUuX19hc3luY0xvYWRlcjtcbi8qISAjX19OT19TSURFX0VGRkVDVFNfXyAqL1xuLy8gQF9fTk9fU0lERV9FRkZFQ1RTX19cbmZ1bmN0aW9uIGRlZmluZUFzeW5jQ29tcG9uZW50KHNvdXJjZSkge1xuICBpZiAoaXNGdW5jdGlvbihzb3VyY2UpKSB7XG4gICAgc291cmNlID0geyBsb2FkZXI6IHNvdXJjZSB9O1xuICB9XG4gIGNvbnN0IHtcbiAgICBsb2FkZXIsXG4gICAgbG9hZGluZ0NvbXBvbmVudCxcbiAgICBlcnJvckNvbXBvbmVudCxcbiAgICBkZWxheSA9IDIwMCxcbiAgICBoeWRyYXRlOiBoeWRyYXRlU3RyYXRlZ3ksXG4gICAgdGltZW91dCxcbiAgICAvLyB1bmRlZmluZWQgPSBuZXZlciB0aW1lcyBvdXRcbiAgICBzdXNwZW5zaWJsZSA9IHRydWUsXG4gICAgb25FcnJvcjogdXNlck9uRXJyb3JcbiAgfSA9IHNvdXJjZTtcbiAgbGV0IHBlbmRpbmdSZXF1ZXN0ID0gbnVsbDtcbiAgbGV0IHJlc29sdmVkQ29tcDtcbiAgbGV0IHJldHJpZXMgPSAwO1xuICBjb25zdCByZXRyeSA9ICgpID0+IHtcbiAgICByZXRyaWVzKys7XG4gICAgcGVuZGluZ1JlcXVlc3QgPSBudWxsO1xuICAgIHJldHVybiBsb2FkKCk7XG4gIH07XG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbGV0IHRoaXNSZXF1ZXN0O1xuICAgIHJldHVybiBwZW5kaW5nUmVxdWVzdCB8fCAodGhpc1JlcXVlc3QgPSBwZW5kaW5nUmVxdWVzdCA9IGxvYWRlcigpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGVyciA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgIGlmICh1c2VyT25FcnJvcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXJSZXRyeSA9ICgpID0+IHJlc29sdmUocmV0cnkoKSk7XG4gICAgICAgICAgY29uc3QgdXNlckZhaWwgPSAoKSA9PiByZWplY3QoZXJyKTtcbiAgICAgICAgICB1c2VyT25FcnJvcihlcnIsIHVzZXJSZXRyeSwgdXNlckZhaWwsIHJldHJpZXMgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSkudGhlbigoY29tcCkgPT4ge1xuICAgICAgaWYgKHRoaXNSZXF1ZXN0ICE9PSBwZW5kaW5nUmVxdWVzdCAmJiBwZW5kaW5nUmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gcGVuZGluZ1JlcXVlc3Q7XG4gICAgICB9XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhY29tcCkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYEFzeW5jIGNvbXBvbmVudCBsb2FkZXIgcmVzb2x2ZWQgdG8gdW5kZWZpbmVkLiBJZiB5b3UgYXJlIHVzaW5nIHJldHJ5KCksIG1ha2Ugc3VyZSB0byByZXR1cm4gaXRzIHJldHVybiB2YWx1ZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcCAmJiAoY29tcC5fX2VzTW9kdWxlIHx8IGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gXCJNb2R1bGVcIikpIHtcbiAgICAgICAgY29tcCA9IGNvbXAuZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNvbXAgJiYgIWlzT2JqZWN0KGNvbXApICYmICFpc0Z1bmN0aW9uKGNvbXApKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhc3luYyBjb21wb25lbnQgbG9hZCByZXN1bHQ6ICR7Y29tcH1gKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmVkQ29tcCA9IGNvbXA7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9KSk7XG4gIH07XG4gIHJldHVybiBkZWZpbmVDb21wb25lbnQoe1xuICAgIG5hbWU6IFwiQXN5bmNDb21wb25lbnRXcmFwcGVyXCIsXG4gICAgX19hc3luY0xvYWRlcjogbG9hZCxcbiAgICBfX2FzeW5jSHlkcmF0ZShlbCwgaW5zdGFuY2UsIGh5ZHJhdGUpIHtcbiAgICAgIGNvbnN0IGRvSHlkcmF0ZSA9IGh5ZHJhdGVTdHJhdGVneSA/ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVhcmRvd24gPSBoeWRyYXRlU3RyYXRlZ3koXG4gICAgICAgICAgaHlkcmF0ZSxcbiAgICAgICAgICAoY2IpID0+IGZvckVhY2hFbGVtZW50KGVsLCBjYilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRlYXJkb3duKSB7XG4gICAgICAgICAgKGluc3RhbmNlLmJ1bSB8fCAoaW5zdGFuY2UuYnVtID0gW10pKS5wdXNoKHRlYXJkb3duKTtcbiAgICAgICAgfVxuICAgICAgfSA6IGh5ZHJhdGU7XG4gICAgICBpZiAocmVzb2x2ZWRDb21wKSB7XG4gICAgICAgIGRvSHlkcmF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZCgpLnRoZW4oKCkgPT4gIWluc3RhbmNlLmlzVW5tb3VudGVkICYmIGRvSHlkcmF0ZSgpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldCBfX2FzeW5jUmVzb2x2ZWQoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRDb21wO1xuICAgIH0sXG4gICAgc2V0dXAoKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgICAgIG1hcmtBc3luY0JvdW5kYXJ5KGluc3RhbmNlKTtcbiAgICAgIGlmIChyZXNvbHZlZENvbXApIHtcbiAgICAgICAgcmV0dXJuICgpID0+IGNyZWF0ZUlubmVyQ29tcChyZXNvbHZlZENvbXAsIGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHBlbmRpbmdSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgaGFuZGxlRXJyb3IoXG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgICFlcnJvckNvbXBvbmVudFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGlmIChzdXNwZW5zaWJsZSAmJiBpbnN0YW5jZS5zdXNwZW5zZSB8fCBpc0luU1NSQ29tcG9uZW50U2V0dXApIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoKS50aGVuKChjb21wKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNyZWF0ZUlubmVyQ29tcChjb21wLCBpbnN0YW5jZSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGVycm9yQ29tcG9uZW50ID8gY3JlYXRlVk5vZGUoZXJyb3JDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICB9KSA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgbG9hZGVkID0gcmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGVycm9yID0gcmVmKCk7XG4gICAgICBjb25zdCBkZWxheWVkID0gcmVmKCEhZGVsYXkpO1xuICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRlbGF5ZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZC52YWx1ZSAmJiAhZXJyb3IudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYEFzeW5jIGNvbXBvbmVudCB0aW1lZCBvdXQgYWZ0ZXIgJHt0aW1lb3V0fW1zLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgICBlcnJvci52YWx1ZSA9IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgbG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsb2FkZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICBpZiAoaW5zdGFuY2UucGFyZW50ICYmIGlzS2VlcEFsaXZlKGluc3RhbmNlLnBhcmVudC52bm9kZSkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICBlcnJvci52YWx1ZSA9IGVycjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxvYWRlZC52YWx1ZSAmJiByZXNvbHZlZENvbXApIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlSW5uZXJDb21wKHJlc29sdmVkQ29tcCwgaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnZhbHVlICYmIGVycm9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZVZOb2RlKGVycm9yQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2FkaW5nQ29tcG9uZW50ICYmICFkZWxheWVkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZVZOb2RlKGxvYWRpbmdDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVJbm5lckNvbXAoY29tcCwgcGFyZW50KSB7XG4gIGNvbnN0IHsgcmVmOiByZWYyLCBwcm9wcywgY2hpbGRyZW4sIGNlIH0gPSBwYXJlbnQudm5vZGU7XG4gIGNvbnN0IHZub2RlID0gY3JlYXRlVk5vZGUoY29tcCwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgdm5vZGUucmVmID0gcmVmMjtcbiAgdm5vZGUuY2UgPSBjZTtcbiAgZGVsZXRlIHBhcmVudC52bm9kZS5jZTtcbiAgcmV0dXJuIHZub2RlO1xufVxuXG5jb25zdCBpc0tlZXBBbGl2ZSA9ICh2bm9kZSkgPT4gdm5vZGUudHlwZS5fX2lzS2VlcEFsaXZlO1xuY29uc3QgS2VlcEFsaXZlSW1wbCA9IHtcbiAgbmFtZTogYEtlZXBBbGl2ZWAsXG4gIC8vIE1hcmtlciBmb3Igc3BlY2lhbCBoYW5kbGluZyBpbnNpZGUgdGhlIHJlbmRlcmVyLiBXZSBhcmUgbm90IHVzaW5nIGEgPT09XG4gIC8vIGNoZWNrIGRpcmVjdGx5IG9uIEtlZXBBbGl2ZSBpbiB0aGUgcmVuZGVyZXIsIGJlY2F1c2UgaW1wb3J0aW5nIGl0IGRpcmVjdGx5XG4gIC8vIHdvdWxkIHByZXZlbnQgaXQgZnJvbSBiZWluZyB0cmVlLXNoYWtlbi5cbiAgX19pc0tlZXBBbGl2ZTogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XSxcbiAgICBleGNsdWRlOiBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XSxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcbiAgc2V0dXAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKCk7XG4gICAgY29uc3Qgc2hhcmVkQ29udGV4dCA9IGluc3RhbmNlLmN0eDtcbiAgICBpZiAoIXNoYXJlZENvbnRleHQucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gc2xvdHMuZGVmYXVsdCAmJiBzbG90cy5kZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGtleXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgIGxldCBjdXJyZW50ID0gbnVsbDtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgIGluc3RhbmNlLl9fdl9jYWNoZSA9IGNhY2hlO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRTdXNwZW5zZSA9IGluc3RhbmNlLnN1c3BlbnNlO1xuICAgIGNvbnN0IHtcbiAgICAgIHJlbmRlcmVyOiB7XG4gICAgICAgIHA6IHBhdGNoLFxuICAgICAgICBtOiBtb3ZlLFxuICAgICAgICB1bTogX3VubW91bnQsXG4gICAgICAgIG86IHsgY3JlYXRlRWxlbWVudCB9XG4gICAgICB9XG4gICAgfSA9IHNoYXJlZENvbnRleHQ7XG4gICAgY29uc3Qgc3RvcmFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hhcmVkQ29udGV4dC5hY3RpdmF0ZSA9ICh2bm9kZSwgY29udGFpbmVyLCBhbmNob3IsIG5hbWVzcGFjZSwgb3B0aW1pemVkKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZTIgPSB2bm9kZS5jb21wb25lbnQ7XG4gICAgICBtb3ZlKHZub2RlLCBjb250YWluZXIsIGFuY2hvciwgMCwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgcGF0Y2goXG4gICAgICAgIGluc3RhbmNlMi52bm9kZSxcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBpbnN0YW5jZTIsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHZub2RlLnNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2UyLmlzRGVhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGluc3RhbmNlMi5hKSB7XG4gICAgICAgICAgaW52b2tlQXJyYXlGbnMoaW5zdGFuY2UyLmEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZub2RlSG9vayA9IHZub2RlLnByb3BzICYmIHZub2RlLnByb3BzLm9uVm5vZGVNb3VudGVkO1xuICAgICAgICBpZiAodm5vZGVIb29rKSB7XG4gICAgICAgICAgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgaW5zdGFuY2UyLnBhcmVudCwgdm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgICAgZGV2dG9vbHNDb21wb25lbnRBZGRlZChpbnN0YW5jZTIpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2hhcmVkQ29udGV4dC5kZWFjdGl2YXRlID0gKHZub2RlKSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZTIgPSB2bm9kZS5jb21wb25lbnQ7XG4gICAgICBpbnZhbGlkYXRlTW91bnQoaW5zdGFuY2UyLm0pO1xuICAgICAgaW52YWxpZGF0ZU1vdW50KGluc3RhbmNlMi5hKTtcbiAgICAgIG1vdmUodm5vZGUsIHN0b3JhZ2VDb250YWluZXIsIG51bGwsIDEsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZTIuZGEpIHtcbiAgICAgICAgICBpbnZva2VBcnJheUZucyhpbnN0YW5jZTIuZGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZub2RlSG9vayA9IHZub2RlLnByb3BzICYmIHZub2RlLnByb3BzLm9uVm5vZGVVbm1vdW50ZWQ7XG4gICAgICAgIGlmICh2bm9kZUhvb2spIHtcbiAgICAgICAgICBpbnZva2VWTm9kZUhvb2sodm5vZGVIb29rLCBpbnN0YW5jZTIucGFyZW50LCB2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UyLmlzRGVhY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgfSwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9ERVZUT09MU19fKSB7XG4gICAgICAgIGRldnRvb2xzQ29tcG9uZW50QWRkZWQoaW5zdGFuY2UyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVubW91bnQodm5vZGUpIHtcbiAgICAgIHJlc2V0U2hhcGVGbGFnKHZub2RlKTtcbiAgICAgIF91bm1vdW50KHZub2RlLCBpbnN0YW5jZSwgcGFyZW50U3VzcGVuc2UsIHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcnVuZUNhY2hlKGZpbHRlcikge1xuICAgICAgY2FjaGUuZm9yRWFjaCgodm5vZGUsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh2bm9kZS50eXBlKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJ1bmVDYWNoZUVudHJ5KGtleSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICBpZiAoY2FjaGVkICYmICghY3VycmVudCB8fCAhaXNTYW1lVk5vZGVUeXBlKGNhY2hlZCwgY3VycmVudCkpKSB7XG4gICAgICAgIHVubW91bnQoY2FjaGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCkge1xuICAgICAgICByZXNldFNoYXBlRmxhZyhjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAga2V5cy5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBbcHJvcHMuaW5jbHVkZSwgcHJvcHMuZXhjbHVkZV0sXG4gICAgICAoW2luY2x1ZGUsIGV4Y2x1ZGVdKSA9PiB7XG4gICAgICAgIGluY2x1ZGUgJiYgcHJ1bmVDYWNoZSgobmFtZSkgPT4gbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSk7XG4gICAgICAgIGV4Y2x1ZGUgJiYgcHJ1bmVDYWNoZSgobmFtZSkgPT4gIW1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpO1xuICAgICAgfSxcbiAgICAgIC8vIHBydW5lIHBvc3QtcmVuZGVyIGFmdGVyIGBjdXJyZW50YCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgICB7IGZsdXNoOiBcInBvc3RcIiwgZGVlcDogdHJ1ZSB9XG4gICAgKTtcbiAgICBsZXQgcGVuZGluZ0NhY2hlS2V5ID0gbnVsbDtcbiAgICBjb25zdCBjYWNoZVN1YnRyZWUgPSAoKSA9PiB7XG4gICAgICBpZiAocGVuZGluZ0NhY2hlS2V5ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzU3VzcGVuc2UoaW5zdGFuY2Uuc3ViVHJlZS50eXBlKSkge1xuICAgICAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjYWNoZS5zZXQocGVuZGluZ0NhY2hlS2V5LCBnZXRJbm5lckNoaWxkKGluc3RhbmNlLnN1YlRyZWUpKTtcbiAgICAgICAgICB9LCBpbnN0YW5jZS5zdWJUcmVlLnN1c3BlbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWNoZS5zZXQocGVuZGluZ0NhY2hlS2V5LCBnZXRJbm5lckNoaWxkKGluc3RhbmNlLnN1YlRyZWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgb25Nb3VudGVkKGNhY2hlU3VidHJlZSk7XG4gICAgb25VcGRhdGVkKGNhY2hlU3VidHJlZSk7XG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNhY2hlLmZvckVhY2goKGNhY2hlZCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN1YlRyZWUsIHN1c3BlbnNlIH0gPSBpbnN0YW5jZTtcbiAgICAgICAgY29uc3Qgdm5vZGUgPSBnZXRJbm5lckNoaWxkKHN1YlRyZWUpO1xuICAgICAgICBpZiAoY2FjaGVkLnR5cGUgPT09IHZub2RlLnR5cGUgJiYgY2FjaGVkLmtleSA9PT0gdm5vZGUua2V5KSB7XG4gICAgICAgICAgcmVzZXRTaGFwZUZsYWcodm5vZGUpO1xuICAgICAgICAgIGNvbnN0IGRhID0gdm5vZGUuY29tcG9uZW50LmRhO1xuICAgICAgICAgIGRhICYmIHF1ZXVlUG9zdFJlbmRlckVmZmVjdChkYSwgc3VzcGVuc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1bm1vdW50KGNhY2hlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcGVuZGluZ0NhY2hlS2V5ID0gbnVsbDtcbiAgICAgIGlmICghc2xvdHMuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3RzLmRlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHJhd1ZOb2RlID0gY2hpbGRyZW5bMF07XG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHdhcm4kMShgS2VlcEFsaXZlIHNob3VsZCBjb250YWluIGV4YWN0bHkgb25lIGNvbXBvbmVudCBjaGlsZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgfSBlbHNlIGlmICghaXNWTm9kZShyYXdWTm9kZSkgfHwgIShyYXdWTm9kZS5zaGFwZUZsYWcgJiA0KSAmJiAhKHJhd1ZOb2RlLnNoYXBlRmxhZyAmIDEyOCkpIHtcbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiByYXdWTm9kZTtcbiAgICAgIH1cbiAgICAgIGxldCB2bm9kZSA9IGdldElubmVyQ2hpbGQocmF3Vk5vZGUpO1xuICAgICAgaWYgKHZub2RlLnR5cGUgPT09IENvbW1lbnQpIHtcbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbXAgPSB2bm9kZS50eXBlO1xuICAgICAgY29uc3QgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoXG4gICAgICAgIGlzQXN5bmNXcmFwcGVyKHZub2RlKSA/IHZub2RlLnR5cGUuX19hc3luY1Jlc29sdmVkIHx8IHt9IDogY29tcFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHsgaW5jbHVkZSwgZXhjbHVkZSwgbWF4IH0gPSBwcm9wcztcbiAgICAgIGlmIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkgfHwgZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpIHtcbiAgICAgICAgdm5vZGUuc2hhcGVGbGFnICY9IH4yNTY7XG4gICAgICAgIGN1cnJlbnQgPSB2bm9kZTtcbiAgICAgICAgcmV0dXJuIHJhd1ZOb2RlO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdm5vZGUua2V5ID09IG51bGwgPyBjb21wIDogdm5vZGUua2V5O1xuICAgICAgY29uc3QgY2FjaGVkVk5vZGUgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICAgIGlmICh2bm9kZS5lbCkge1xuICAgICAgICB2bm9kZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgICAgICBpZiAocmF3Vk5vZGUuc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICAgICAgcmF3Vk5vZGUuc3NDb250ZW50ID0gdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBlbmRpbmdDYWNoZUtleSA9IGtleTtcbiAgICAgIGlmIChjYWNoZWRWTm9kZSkge1xuICAgICAgICB2bm9kZS5lbCA9IGNhY2hlZFZOb2RlLmVsO1xuICAgICAgICB2bm9kZS5jb21wb25lbnQgPSBjYWNoZWRWTm9kZS5jb21wb25lbnQ7XG4gICAgICAgIGlmICh2bm9kZS50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkhvb2tzKHZub2RlLCB2bm9kZS50cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2bm9kZS5zaGFwZUZsYWcgfD0gNTEyO1xuICAgICAgICBrZXlzLmRlbGV0ZShrZXkpO1xuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICAgICAgaWYgKG1heCAmJiBrZXlzLnNpemUgPiBwYXJzZUludChtYXgsIDEwKSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShrZXlzLnZhbHVlcygpLm5leHQoKS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZub2RlLnNoYXBlRmxhZyB8PSAyNTY7XG4gICAgICBjdXJyZW50ID0gdm5vZGU7XG4gICAgICByZXR1cm4gaXNTdXNwZW5zZShyYXdWTm9kZS50eXBlKSA/IHJhd1ZOb2RlIDogdm5vZGU7XG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IEtlZXBBbGl2ZSA9IEtlZXBBbGl2ZUltcGw7XG5mdW5jdGlvbiBtYXRjaGVzKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKGlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zb21lKChwKSA9PiBtYXRjaGVzKHAsIG5hbWUpKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KFwiLFwiKS5pbmNsdWRlcyhuYW1lKTtcbiAgfSBlbHNlIGlmIChpc1JlZ0V4cChwYXR0ZXJuKSkge1xuICAgIHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uQWN0aXZhdGVkKGhvb2ssIHRhcmdldCkge1xuICByZWdpc3RlcktlZXBBbGl2ZUhvb2soaG9vaywgXCJhXCIsIHRhcmdldCk7XG59XG5mdW5jdGlvbiBvbkRlYWN0aXZhdGVkKGhvb2ssIHRhcmdldCkge1xuICByZWdpc3RlcktlZXBBbGl2ZUhvb2soaG9vaywgXCJkYVwiLCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJLZWVwQWxpdmVIb29rKGhvb2ssIHR5cGUsIHRhcmdldCA9IGN1cnJlbnRJbnN0YW5jZSkge1xuICBjb25zdCB3cmFwcGVkSG9vayA9IGhvb2suX193ZGMgfHwgKGhvb2suX193ZGMgPSAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0YXJnZXQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50LmlzRGVhY3RpdmF0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gaG9vaygpO1xuICB9KTtcbiAgaW5qZWN0SG9vayh0eXBlLCB3cmFwcGVkSG9vaywgdGFyZ2V0KTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGxldCBjdXJyZW50ID0gdGFyZ2V0LnBhcmVudDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50LnBhcmVudCkge1xuICAgICAgaWYgKGlzS2VlcEFsaXZlKGN1cnJlbnQucGFyZW50LnZub2RlKSkge1xuICAgICAgICBpbmplY3RUb0tlZXBBbGl2ZVJvb3Qod3JhcHBlZEhvb2ssIHR5cGUsIHRhcmdldCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBpbmplY3RUb0tlZXBBbGl2ZVJvb3QoaG9vaywgdHlwZSwgdGFyZ2V0LCBrZWVwQWxpdmVSb290KSB7XG4gIGNvbnN0IGluamVjdGVkID0gaW5qZWN0SG9vayhcbiAgICB0eXBlLFxuICAgIGhvb2ssXG4gICAga2VlcEFsaXZlUm9vdCxcbiAgICB0cnVlXG4gICAgLyogcHJlcGVuZCAqL1xuICApO1xuICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgcmVtb3ZlKGtlZXBBbGl2ZVJvb3RbdHlwZV0sIGluamVjdGVkKTtcbiAgfSwgdGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIHJlc2V0U2hhcGVGbGFnKHZub2RlKSB7XG4gIHZub2RlLnNoYXBlRmxhZyAmPSB+MjU2O1xuICB2bm9kZS5zaGFwZUZsYWcgJj0gfjUxMjtcbn1cbmZ1bmN0aW9uIGdldElubmVyQ2hpbGQodm5vZGUpIHtcbiAgcmV0dXJuIHZub2RlLnNoYXBlRmxhZyAmIDEyOCA/IHZub2RlLnNzQ29udGVudCA6IHZub2RlO1xufVxuXG5mdW5jdGlvbiBpbmplY3RIb29rKHR5cGUsIGhvb2ssIHRhcmdldCA9IGN1cnJlbnRJbnN0YW5jZSwgcHJlcGVuZCA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBob29rcyA9IHRhcmdldFt0eXBlXSB8fCAodGFyZ2V0W3R5cGVdID0gW10pO1xuICAgIGNvbnN0IHdyYXBwZWRIb29rID0gaG9vay5fX3dlaCB8fCAoaG9vay5fX3dlaCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjb25zdCByZXNldCA9IHNldEN1cnJlbnRJbnN0YW5jZSh0YXJnZXQpO1xuICAgICAgY29uc3QgcmVzID0gY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoaG9vaywgdGFyZ2V0LCB0eXBlLCBhcmdzKTtcbiAgICAgIHJlc2V0KCk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICBob29rcy51bnNoaWZ0KHdyYXBwZWRIb29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaG9va3MucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVkSG9vaztcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc3QgYXBpTmFtZSA9IHRvSGFuZGxlcktleShFcnJvclR5cGVTdHJpbmdzJDFbdHlwZV0ucmVwbGFjZSgvIGhvb2skLywgXCJcIikpO1xuICAgIHdhcm4kMShcbiAgICAgIGAke2FwaU5hbWV9IGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIG5vIGFjdGl2ZSBjb21wb25lbnQgaW5zdGFuY2UgdG8gYmUgYXNzb2NpYXRlZCB3aXRoLiBMaWZlY3ljbGUgaW5qZWN0aW9uIEFQSXMgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgZXhlY3V0aW9uIG9mIHNldHVwKCkuYCArIChgIElmIHlvdSBhcmUgdXNpbmcgYXN5bmMgc2V0dXAoKSwgbWFrZSBzdXJlIHRvIHJlZ2lzdGVyIGxpZmVjeWNsZSBob29rcyBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0IHN0YXRlbWVudC5gIClcbiAgICApO1xuICB9XG59XG5jb25zdCBjcmVhdGVIb29rID0gKGxpZmVjeWNsZSkgPT4gKGhvb2ssIHRhcmdldCA9IGN1cnJlbnRJbnN0YW5jZSkgPT4ge1xuICBpZiAoIWlzSW5TU1JDb21wb25lbnRTZXR1cCB8fCBsaWZlY3ljbGUgPT09IFwic3BcIikge1xuICAgIGluamVjdEhvb2sobGlmZWN5Y2xlLCAoLi4uYXJncykgPT4gaG9vayguLi5hcmdzKSwgdGFyZ2V0KTtcbiAgfVxufTtcbmNvbnN0IG9uQmVmb3JlTW91bnQgPSBjcmVhdGVIb29rKFwiYm1cIik7XG5jb25zdCBvbk1vdW50ZWQgPSBjcmVhdGVIb29rKFwibVwiKTtcbmNvbnN0IG9uQmVmb3JlVXBkYXRlID0gY3JlYXRlSG9vayhcbiAgXCJidVwiXG4pO1xuY29uc3Qgb25VcGRhdGVkID0gY3JlYXRlSG9vayhcInVcIik7XG5jb25zdCBvbkJlZm9yZVVubW91bnQgPSBjcmVhdGVIb29rKFxuICBcImJ1bVwiXG4pO1xuY29uc3Qgb25Vbm1vdW50ZWQgPSBjcmVhdGVIb29rKFwidW1cIik7XG5jb25zdCBvblNlcnZlclByZWZldGNoID0gY3JlYXRlSG9vayhcbiAgXCJzcFwiXG4pO1xuY29uc3Qgb25SZW5kZXJUcmlnZ2VyZWQgPSBjcmVhdGVIb29rKFwicnRnXCIpO1xuY29uc3Qgb25SZW5kZXJUcmFja2VkID0gY3JlYXRlSG9vayhcInJ0Y1wiKTtcbmZ1bmN0aW9uIG9uRXJyb3JDYXB0dXJlZChob29rLCB0YXJnZXQgPSBjdXJyZW50SW5zdGFuY2UpIHtcbiAgaW5qZWN0SG9vayhcImVjXCIsIGhvb2ssIHRhcmdldCk7XG59XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBcImNvbXBvbmVudHNcIjtcbmNvbnN0IERJUkVDVElWRVMgPSBcImRpcmVjdGl2ZXNcIjtcbmZ1bmN0aW9uIHJlc29sdmVDb21wb25lbnQobmFtZSwgbWF5YmVTZWxmUmVmZXJlbmNlKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQoQ09NUE9ORU5UUywgbmFtZSwgdHJ1ZSwgbWF5YmVTZWxmUmVmZXJlbmNlKSB8fCBuYW1lO1xufVxuY29uc3QgTlVMTF9EWU5BTUlDX0NPTVBPTkVOVCA9IFN5bWJvbC5mb3IoXCJ2LW5kY1wiKTtcbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoaXNTdHJpbmcoY29tcG9uZW50KSkge1xuICAgIHJldHVybiByZXNvbHZlQXNzZXQoQ09NUE9ORU5UUywgY29tcG9uZW50LCBmYWxzZSkgfHwgY29tcG9uZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb21wb25lbnQgfHwgTlVMTF9EWU5BTUlDX0NPTVBPTkVOVDtcbiAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShuYW1lKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQoRElSRUNUSVZFUywgbmFtZSk7XG59XG5mdW5jdGlvbiByZXNvbHZlQXNzZXQodHlwZSwgbmFtZSwgd2Fybk1pc3NpbmcgPSB0cnVlLCBtYXliZVNlbGZSZWZlcmVuY2UgPSBmYWxzZSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSB8fCBjdXJyZW50SW5zdGFuY2U7XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIGNvbnN0IENvbXBvbmVudCA9IGluc3RhbmNlLnR5cGU7XG4gICAgaWYgKHR5cGUgPT09IENPTVBPTkVOVFMpIHtcbiAgICAgIGNvbnN0IHNlbGZOYW1lID0gZ2V0Q29tcG9uZW50TmFtZShcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIGlmIChzZWxmTmFtZSAmJiAoc2VsZk5hbWUgPT09IG5hbWUgfHwgc2VsZk5hbWUgPT09IGNhbWVsaXplKG5hbWUpIHx8IHNlbGZOYW1lID09PSBjYXBpdGFsaXplKGNhbWVsaXplKG5hbWUpKSkpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVzID0gKFxuICAgICAgLy8gbG9jYWwgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBjaGVjayBpbnN0YW5jZVt0eXBlXSBmaXJzdCB3aGljaCBpcyByZXNvbHZlZCBmb3Igb3B0aW9ucyBBUElcbiAgICAgIHJlc29sdmUoaW5zdGFuY2VbdHlwZV0gfHwgQ29tcG9uZW50W3R5cGVdLCBuYW1lKSB8fCAvLyBnbG9iYWwgcmVnaXN0cmF0aW9uXG4gICAgICByZXNvbHZlKGluc3RhbmNlLmFwcENvbnRleHRbdHlwZV0sIG5hbWUpXG4gICAgKTtcbiAgICBpZiAoIXJlcyAmJiBtYXliZVNlbGZSZWZlcmVuY2UpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnQ7XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICAgIGNvbnN0IGV4dHJhID0gdHlwZSA9PT0gQ09NUE9ORU5UUyA/IGBcbklmIHRoaXMgaXMgYSBuYXRpdmUgY3VzdG9tIGVsZW1lbnQsIG1ha2Ugc3VyZSB0byBleGNsdWRlIGl0IGZyb20gY29tcG9uZW50IHJlc29sdXRpb24gdmlhIGNvbXBpbGVyT3B0aW9ucy5pc0N1c3RvbUVsZW1lbnQuYCA6IGBgO1xuICAgICAgd2FybiQxKGBGYWlsZWQgdG8gcmVzb2x2ZSAke3R5cGUuc2xpY2UoMCwgLTEpfTogJHtuYW1lfSR7ZXh0cmF9YCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHdhcm4kMShcbiAgICAgIGByZXNvbHZlJHtjYXBpdGFsaXplKHR5cGUuc2xpY2UoMCwgLTEpKX0gY2FuIG9ubHkgYmUgdXNlZCBpbiByZW5kZXIoKSBvciBzZXR1cCgpLmBcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiByZXNvbHZlKHJlZ2lzdHJ5LCBuYW1lKSB7XG4gIHJldHVybiByZWdpc3RyeSAmJiAocmVnaXN0cnlbbmFtZV0gfHwgcmVnaXN0cnlbY2FtZWxpemUobmFtZSldIHx8IHJlZ2lzdHJ5W2NhcGl0YWxpemUoY2FtZWxpemUobmFtZSkpXSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3Qoc291cmNlLCByZW5kZXJJdGVtLCBjYWNoZSwgaW5kZXgpIHtcbiAgbGV0IHJldDtcbiAgY29uc3QgY2FjaGVkID0gY2FjaGUgJiYgY2FjaGVbaW5kZXhdO1xuICBjb25zdCBzb3VyY2VJc0FycmF5ID0gaXNBcnJheShzb3VyY2UpO1xuICBpZiAoc291cmNlSXNBcnJheSB8fCBpc1N0cmluZyhzb3VyY2UpKSB7XG4gICAgY29uc3Qgc291cmNlSXNSZWFjdGl2ZUFycmF5ID0gc291cmNlSXNBcnJheSAmJiBpc1JlYWN0aXZlKHNvdXJjZSk7XG4gICAgbGV0IG5lZWRzV3JhcCA9IGZhbHNlO1xuICAgIGlmIChzb3VyY2VJc1JlYWN0aXZlQXJyYXkpIHtcbiAgICAgIG5lZWRzV3JhcCA9ICFpc1NoYWxsb3coc291cmNlKTtcbiAgICAgIHNvdXJjZSA9IHNoYWxsb3dSZWFkQXJyYXkoc291cmNlKTtcbiAgICB9XG4gICAgcmV0ID0gbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc291cmNlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVySXRlbShcbiAgICAgICAgbmVlZHNXcmFwID8gdG9SZWFjdGl2ZShzb3VyY2VbaV0pIDogc291cmNlW2ldLFxuICAgICAgICBpLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGNhY2hlZCAmJiBjYWNoZWRbaV1cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhTnVtYmVyLmlzSW50ZWdlcihzb3VyY2UpKSB7XG4gICAgICB3YXJuJDEoYFRoZSB2LWZvciByYW5nZSBleHBlY3QgYW4gaW50ZWdlciB2YWx1ZSBidXQgZ290ICR7c291cmNlfS5gKTtcbiAgICB9XG4gICAgcmV0ID0gbmV3IEFycmF5KHNvdXJjZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2U7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVySXRlbShpICsgMSwgaSwgdm9pZCAwLCBjYWNoZWQgJiYgY2FjaGVkW2ldKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGlmIChzb3VyY2VbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gQXJyYXkuZnJvbShcbiAgICAgICAgc291cmNlLFxuICAgICAgICAoaXRlbSwgaSkgPT4gcmVuZGVySXRlbShpdGVtLCBpLCB2b2lkIDAsIGNhY2hlZCAmJiBjYWNoZWRbaV0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtpXSA9IHJlbmRlckl0ZW0oc291cmNlW2tleV0sIGtleSwgaSwgY2FjaGVkICYmIGNhY2hlZFtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldCA9IFtdO1xuICB9XG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlW2luZGV4XSA9IHJldDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbG90cyhzbG90cywgZHluYW1pY1Nsb3RzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHluYW1pY1Nsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2xvdCA9IGR5bmFtaWNTbG90c1tpXTtcbiAgICBpZiAoaXNBcnJheShzbG90KSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzbG90Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHNsb3RzW3Nsb3Rbal0ubmFtZV0gPSBzbG90W2pdLmZuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xvdCkge1xuICAgICAgc2xvdHNbc2xvdC5uYW1lXSA9IHNsb3Qua2V5ID8gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gc2xvdC5mbiguLi5hcmdzKTtcbiAgICAgICAgaWYgKHJlcykgcmVzLmtleSA9IHNsb3Qua2V5O1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSA6IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIHJldHVybiBzbG90cztcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2xvdChzbG90cywgbmFtZSwgcHJvcHMgPSB7fSwgZmFsbGJhY2ssIG5vU2xvdHRlZCkge1xuICBpZiAoY3VycmVudFJlbmRlcmluZ0luc3RhbmNlLmNlIHx8IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZS5wYXJlbnQgJiYgaXNBc3luY1dyYXBwZXIoY3VycmVudFJlbmRlcmluZ0luc3RhbmNlLnBhcmVudCkgJiYgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlLnBhcmVudC5jZSkge1xuICAgIGlmIChuYW1lICE9PSBcImRlZmF1bHRcIikgcHJvcHMubmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIFtjcmVhdGVWTm9kZShcInNsb3RcIiwgcHJvcHMsIGZhbGxiYWNrICYmIGZhbGxiYWNrKCkpXSxcbiAgICAgIDY0XG4gICAgKTtcbiAgfVxuICBsZXQgc2xvdCA9IHNsb3RzW25hbWVdO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBzbG90ICYmIHNsb3QubGVuZ3RoID4gMSkge1xuICAgIHdhcm4kMShcbiAgICAgIGBTU1Itb3B0aW1pemVkIHNsb3QgZnVuY3Rpb24gZGV0ZWN0ZWQgaW4gYSBub24tU1NSLW9wdGltaXplZCByZW5kZXIgZnVuY3Rpb24uIFlvdSBuZWVkIHRvIG1hcmsgdGhpcyBjb21wb25lbnQgd2l0aCAkZHluYW1pYy1zbG90cyBpbiB0aGUgcGFyZW50IHRlbXBsYXRlLmBcbiAgICApO1xuICAgIHNsb3QgPSAoKSA9PiBbXTtcbiAgfVxuICBpZiAoc2xvdCAmJiBzbG90Ll9jKSB7XG4gICAgc2xvdC5fZCA9IGZhbHNlO1xuICB9XG4gIG9wZW5CbG9jaygpO1xuICBjb25zdCB2YWxpZFNsb3RDb250ZW50ID0gc2xvdCAmJiBlbnN1cmVWYWxpZFZOb2RlKHNsb3QocHJvcHMpKTtcbiAgY29uc3Qgc2xvdEtleSA9IHByb3BzLmtleSB8fCAvLyBzbG90IGNvbnRlbnQgYXJyYXkgb2YgYSBkeW5hbWljIGNvbmRpdGlvbmFsIHNsb3QgbWF5IGhhdmUgYSBicmFuY2hcbiAgLy8ga2V5IGF0dGFjaGVkIGluIHRoZSBgY3JlYXRlU2xvdHNgIGhlbHBlciwgcmVzcGVjdCB0aGF0XG4gIHZhbGlkU2xvdENvbnRlbnQgJiYgdmFsaWRTbG90Q29udGVudC5rZXk7XG4gIGNvbnN0IHJlbmRlcmVkID0gY3JlYXRlQmxvY2soXG4gICAgRnJhZ21lbnQsXG4gICAge1xuICAgICAga2V5OiAoc2xvdEtleSAmJiAhaXNTeW1ib2woc2xvdEtleSkgPyBzbG90S2V5IDogYF8ke25hbWV9YCkgKyAvLyAjNzI1NiBmb3JjZSBkaWZmZXJlbnRpYXRlIGZhbGxiYWNrIGNvbnRlbnQgZnJvbSBhY3R1YWwgY29udGVudFxuICAgICAgKCF2YWxpZFNsb3RDb250ZW50ICYmIGZhbGxiYWNrID8gXCJfZmJcIiA6IFwiXCIpXG4gICAgfSxcbiAgICB2YWxpZFNsb3RDb250ZW50IHx8IChmYWxsYmFjayA/IGZhbGxiYWNrKCkgOiBbXSksXG4gICAgdmFsaWRTbG90Q29udGVudCAmJiBzbG90cy5fID09PSAxID8gNjQgOiAtMlxuICApO1xuICBpZiAoIW5vU2xvdHRlZCAmJiByZW5kZXJlZC5zY29wZUlkKSB7XG4gICAgcmVuZGVyZWQuc2xvdFNjb3BlSWRzID0gW3JlbmRlcmVkLnNjb3BlSWQgKyBcIi1zXCJdO1xuICB9XG4gIGlmIChzbG90ICYmIHNsb3QuX2MpIHtcbiAgICBzbG90Ll9kID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVuZGVyZWQ7XG59XG5mdW5jdGlvbiBlbnN1cmVWYWxpZFZOb2RlKHZub2Rlcykge1xuICByZXR1cm4gdm5vZGVzLnNvbWUoKGNoaWxkKSA9PiB7XG4gICAgaWYgKCFpc1ZOb2RlKGNoaWxkKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IENvbW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gRnJhZ21lbnQgJiYgIWVuc3VyZVZhbGlkVk5vZGUoY2hpbGQuY2hpbGRyZW4pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KSA/IHZub2RlcyA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHRvSGFuZGxlcnMob2JqLCBwcmVzZXJ2ZUNhc2VJZk5lY2Vzc2FyeSkge1xuICBjb25zdCByZXQgPSB7fTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWlzT2JqZWN0KG9iaikpIHtcbiAgICB3YXJuJDEoYHYtb24gd2l0aCBubyBhcmd1bWVudCBleHBlY3RzIGFuIG9iamVjdCB2YWx1ZS5gKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIHJldFtwcmVzZXJ2ZUNhc2VJZk5lY2Vzc2FyeSAmJiAvW0EtWl0vLnRlc3Qoa2V5KSA/IGBvbjoke2tleX1gIDogdG9IYW5kbGVyS2V5KGtleSldID0gb2JqW2tleV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuY29uc3QgZ2V0UHVibGljSW5zdGFuY2UgPSAoaSkgPT4ge1xuICBpZiAoIWkpIHJldHVybiBudWxsO1xuICBpZiAoaXNTdGF0ZWZ1bENvbXBvbmVudChpKSkgcmV0dXJuIGdldENvbXBvbmVudFB1YmxpY0luc3RhbmNlKGkpO1xuICByZXR1cm4gZ2V0UHVibGljSW5zdGFuY2UoaS5wYXJlbnQpO1xufTtcbmNvbnN0IHB1YmxpY1Byb3BlcnRpZXNNYXAgPSAoXG4gIC8vIE1vdmUgUFVSRSBtYXJrZXIgdG8gbmV3IGxpbmUgdG8gd29ya2Fyb3VuZCBjb21waWxlciBkaXNjYXJkaW5nIGl0XG4gIC8vIGR1ZSB0byB0eXBlIGFubm90YXRpb25cbiAgLyogQF9fUFVSRV9fICovIGV4dGVuZCgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuICAgICQ6IChpKSA9PiBpLFxuICAgICRlbDogKGkpID0+IGkudm5vZGUuZWwsXG4gICAgJGRhdGE6IChpKSA9PiBpLmRhdGEsXG4gICAgJHByb3BzOiAoaSkgPT4gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNoYWxsb3dSZWFkb25seShpLnByb3BzKSA6IGkucHJvcHMsXG4gICAgJGF0dHJzOiAoaSkgPT4gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNoYWxsb3dSZWFkb25seShpLmF0dHJzKSA6IGkuYXR0cnMsXG4gICAgJHNsb3RzOiAoaSkgPT4gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNoYWxsb3dSZWFkb25seShpLnNsb3RzKSA6IGkuc2xvdHMsXG4gICAgJHJlZnM6IChpKSA9PiAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KGkucmVmcykgOiBpLnJlZnMsXG4gICAgJHBhcmVudDogKGkpID0+IGdldFB1YmxpY0luc3RhbmNlKGkucGFyZW50KSxcbiAgICAkcm9vdDogKGkpID0+IGdldFB1YmxpY0luc3RhbmNlKGkucm9vdCksXG4gICAgJGhvc3Q6IChpKSA9PiBpLmNlLFxuICAgICRlbWl0OiAoaSkgPT4gaS5lbWl0LFxuICAgICRvcHRpb25zOiAoaSkgPT4gX19WVUVfT1BUSU9OU19BUElfXyA/IHJlc29sdmVNZXJnZWRPcHRpb25zKGkpIDogaS50eXBlLFxuICAgICRmb3JjZVVwZGF0ZTogKGkpID0+IGkuZiB8fCAoaS5mID0gKCkgPT4ge1xuICAgICAgcXVldWVKb2IoaS51cGRhdGUpO1xuICAgIH0pLFxuICAgICRuZXh0VGljazogKGkpID0+IGkubiB8fCAoaS5uID0gbmV4dFRpY2suYmluZChpLnByb3h5KSksXG4gICAgJHdhdGNoOiAoaSkgPT4gX19WVUVfT1BUSU9OU19BUElfXyA/IGluc3RhbmNlV2F0Y2guYmluZChpKSA6IE5PT1BcbiAgfSlcbik7XG5jb25zdCBpc1Jlc2VydmVkUHJlZml4ID0gKGtleSkgPT4ga2V5ID09PSBcIl9cIiB8fCBrZXkgPT09IFwiJFwiO1xuY29uc3QgaGFzU2V0dXBCaW5kaW5nID0gKHN0YXRlLCBrZXkpID0+IHN0YXRlICE9PSBFTVBUWV9PQkogJiYgIXN0YXRlLl9faXNTY3JpcHRTZXR1cCAmJiBoYXNPd24oc3RhdGUsIGtleSk7XG5jb25zdCBQdWJsaWNJbnN0YW5jZVByb3h5SGFuZGxlcnMgPSB7XG4gIGdldCh7IF86IGluc3RhbmNlIH0sIGtleSkge1xuICAgIGlmIChrZXkgPT09IFwiX192X3NraXBcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHsgY3R4LCBzZXR1cFN0YXRlLCBkYXRhLCBwcm9wcywgYWNjZXNzQ2FjaGUsIHR5cGUsIGFwcENvbnRleHQgfSA9IGluc3RhbmNlO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGtleSA9PT0gXCJfX2lzVnVlXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsZXQgbm9ybWFsaXplZFByb3BzO1xuICAgIGlmIChrZXlbMF0gIT09IFwiJFwiKSB7XG4gICAgICBjb25zdCBuID0gYWNjZXNzQ2FjaGVba2V5XTtcbiAgICAgIGlmIChuICE9PSB2b2lkIDApIHtcbiAgICAgICAgc3dpdGNoIChuKSB7XG4gICAgICAgICAgY2FzZSAxIC8qIFNFVFVQICovOlxuICAgICAgICAgICAgcmV0dXJuIHNldHVwU3RhdGVba2V5XTtcbiAgICAgICAgICBjYXNlIDIgLyogREFUQSAqLzpcbiAgICAgICAgICAgIHJldHVybiBkYXRhW2tleV07XG4gICAgICAgICAgY2FzZSA0IC8qIENPTlRFWFQgKi86XG4gICAgICAgICAgICByZXR1cm4gY3R4W2tleV07XG4gICAgICAgICAgY2FzZSAzIC8qIFBST1BTICovOlxuICAgICAgICAgICAgcmV0dXJuIHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFzU2V0dXBCaW5kaW5nKHNldHVwU3RhdGUsIGtleSkpIHtcbiAgICAgICAgYWNjZXNzQ2FjaGVba2V5XSA9IDEgLyogU0VUVVAgKi87XG4gICAgICAgIHJldHVybiBzZXR1cFN0YXRlW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgIT09IEVNUFRZX09CSiAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgICBhY2Nlc3NDYWNoZVtrZXldID0gMiAvKiBEQVRBICovO1xuICAgICAgICByZXR1cm4gZGF0YVtrZXldO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgLy8gb25seSBjYWNoZSBvdGhlciBwcm9wZXJ0aWVzIHdoZW4gaW5zdGFuY2UgaGFzIGRlY2xhcmVkICh0aHVzIHN0YWJsZSlcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgKG5vcm1hbGl6ZWRQcm9wcyA9IGluc3RhbmNlLnByb3BzT3B0aW9uc1swXSkgJiYgaGFzT3duKG5vcm1hbGl6ZWRQcm9wcywga2V5KVxuICAgICAgKSB7XG4gICAgICAgIGFjY2Vzc0NhY2hlW2tleV0gPSAzIC8qIFBST1BTICovO1xuICAgICAgICByZXR1cm4gcHJvcHNba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoY3R4ICE9PSBFTVBUWV9PQkogJiYgaGFzT3duKGN0eCwga2V5KSkge1xuICAgICAgICBhY2Nlc3NDYWNoZVtrZXldID0gNCAvKiBDT05URVhUICovO1xuICAgICAgICByZXR1cm4gY3R4W2tleV07XG4gICAgICB9IGVsc2UgaWYgKCFfX1ZVRV9PUFRJT05TX0FQSV9fIHx8IHNob3VsZENhY2hlQWNjZXNzKSB7XG4gICAgICAgIGFjY2Vzc0NhY2hlW2tleV0gPSAwIC8qIE9USEVSICovO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwdWJsaWNHZXR0ZXIgPSBwdWJsaWNQcm9wZXJ0aWVzTWFwW2tleV07XG4gICAgbGV0IGNzc01vZHVsZSwgZ2xvYmFsUHJvcGVydGllcztcbiAgICBpZiAocHVibGljR2V0dGVyKSB7XG4gICAgICBpZiAoa2V5ID09PSBcIiRhdHRyc1wiKSB7XG4gICAgICAgIHRyYWNrKGluc3RhbmNlLmF0dHJzLCBcImdldFwiLCBcIlwiKTtcbiAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBtYXJrQXR0cnNBY2Nlc3NlZCgpO1xuICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGtleSA9PT0gXCIkc2xvdHNcIikge1xuICAgICAgICB0cmFjayhpbnN0YW5jZSwgXCJnZXRcIiwga2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwdWJsaWNHZXR0ZXIoaW5zdGFuY2UpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBjc3MgbW9kdWxlIChpbmplY3RlZCBieSB2dWUtbG9hZGVyKVxuICAgICAgKGNzc01vZHVsZSA9IHR5cGUuX19jc3NNb2R1bGVzKSAmJiAoY3NzTW9kdWxlID0gY3NzTW9kdWxlW2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4gY3NzTW9kdWxlO1xuICAgIH0gZWxzZSBpZiAoY3R4ICE9PSBFTVBUWV9PQkogJiYgaGFzT3duKGN0eCwga2V5KSkge1xuICAgICAgYWNjZXNzQ2FjaGVba2V5XSA9IDQgLyogQ09OVEVYVCAqLztcbiAgICAgIHJldHVybiBjdHhba2V5XTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gZ2xvYmFsIHByb3BlcnRpZXNcbiAgICAgIGdsb2JhbFByb3BlcnRpZXMgPSBhcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLCBoYXNPd24oZ2xvYmFsUHJvcGVydGllcywga2V5KVxuICAgICkge1xuICAgICAge1xuICAgICAgICByZXR1cm4gZ2xvYmFsUHJvcGVydGllc1trZXldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgJiYgKCFpc1N0cmluZyhrZXkpIHx8IC8vICMxMDkxIGF2b2lkIGludGVybmFsIGlzUmVmL2lzVk5vZGUgY2hlY2tzIG9uIGNvbXBvbmVudCBpbnN0YW5jZSBsZWFkaW5nXG4gICAgLy8gdG8gaW5maW5pdGUgd2FybmluZyBsb29wXG4gICAga2V5LmluZGV4T2YoXCJfX3ZcIikgIT09IDApKSB7XG4gICAgICBpZiAoZGF0YSAhPT0gRU1QVFlfT0JKICYmIGlzUmVzZXJ2ZWRQcmVmaXgoa2V5WzBdKSAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYFByb3BlcnR5ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICApfSBtdXN0IGJlIGFjY2Vzc2VkIHZpYSAkZGF0YSBiZWNhdXNlIGl0IHN0YXJ0cyB3aXRoIGEgcmVzZXJ2ZWQgY2hhcmFjdGVyIChcIiRcIiBvciBcIl9cIikgYW5kIGlzIG5vdCBwcm94aWVkIG9uIHRoZSByZW5kZXIgY29udGV4dC5gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGluc3RhbmNlID09PSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UpIHtcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIGBQcm9wZXJ0eSAke0pTT04uc3RyaW5naWZ5KGtleSl9IHdhcyBhY2Nlc3NlZCBkdXJpbmcgcmVuZGVyIGJ1dCBpcyBub3QgZGVmaW5lZCBvbiBpbnN0YW5jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXQoeyBfOiBpbnN0YW5jZSB9LCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgeyBkYXRhLCBzZXR1cFN0YXRlLCBjdHggfSA9IGluc3RhbmNlO1xuICAgIGlmIChoYXNTZXR1cEJpbmRpbmcoc2V0dXBTdGF0ZSwga2V5KSkge1xuICAgICAgc2V0dXBTdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2V0dXBTdGF0ZS5fX2lzU2NyaXB0U2V0dXAgJiYgaGFzT3duKHNldHVwU3RhdGUsIGtleSkpIHtcbiAgICAgIHdhcm4kMShgQ2Fubm90IG11dGF0ZSA8c2NyaXB0IHNldHVwPiBiaW5kaW5nIFwiJHtrZXl9XCIgZnJvbSBPcHRpb25zIEFQSS5gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgIT09IEVNUFRZX09CSiAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGhhc093bihpbnN0YW5jZS5wcm9wcywga2V5KSkge1xuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoYEF0dGVtcHRpbmcgdG8gbXV0YXRlIHByb3AgXCIke2tleX1cIi4gUHJvcHMgYXJlIHJlYWRvbmx5LmApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoa2V5WzBdID09PSBcIiRcIiAmJiBrZXkuc2xpY2UoMSkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybiQxKFxuICAgICAgICBgQXR0ZW1wdGluZyB0byBtdXRhdGUgcHVibGljIHByb3BlcnR5IFwiJHtrZXl9XCIuIFByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCAkIGFyZSByZXNlcnZlZCBhbmQgcmVhZG9ubHkuYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYga2V5IGluIGluc3RhbmNlLmFwcENvbnRleHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0eCwga2V5LCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHhba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgaGFzKHtcbiAgICBfOiB7IGRhdGEsIHNldHVwU3RhdGUsIGFjY2Vzc0NhY2hlLCBjdHgsIGFwcENvbnRleHQsIHByb3BzT3B0aW9ucyB9XG4gIH0sIGtleSkge1xuICAgIGxldCBub3JtYWxpemVkUHJvcHM7XG4gICAgcmV0dXJuICEhYWNjZXNzQ2FjaGVba2V5XSB8fCBkYXRhICE9PSBFTVBUWV9PQkogJiYgaGFzT3duKGRhdGEsIGtleSkgfHwgaGFzU2V0dXBCaW5kaW5nKHNldHVwU3RhdGUsIGtleSkgfHwgKG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzT3B0aW9uc1swXSkgJiYgaGFzT3duKG5vcm1hbGl6ZWRQcm9wcywga2V5KSB8fCBoYXNPd24oY3R4LCBrZXkpIHx8IGhhc093bihwdWJsaWNQcm9wZXJ0aWVzTWFwLCBrZXkpIHx8IGhhc093bihhcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLCBrZXkpO1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChkZXNjcmlwdG9yLmdldCAhPSBudWxsKSB7XG4gICAgICB0YXJnZXQuXy5hY2Nlc3NDYWNoZVtrZXldID0gMDtcbiAgICB9IGVsc2UgaWYgKGhhc093bihkZXNjcmlwdG9yLCBcInZhbHVlXCIpKSB7XG4gICAgICB0aGlzLnNldCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvci52YWx1ZSwgbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufTtcbmlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHRydWUpIHtcbiAgUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzLm93bktleXMgPSAodGFyZ2V0KSA9PiB7XG4gICAgd2FybiQxKFxuICAgICAgYEF2b2lkIGFwcCBsb2dpYyB0aGF0IHJlbGllcyBvbiBlbnVtZXJhdGluZyBrZXlzIG9uIGEgY29tcG9uZW50IGluc3RhbmNlLiBUaGUga2V5cyB3aWxsIGJlIGVtcHR5IGluIHByb2R1Y3Rpb24gbW9kZSB0byBhdm9pZCBwZXJmb3JtYW5jZSBvdmVyaGVhZC5gXG4gICAgKTtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gIH07XG59XG5jb25zdCBSdW50aW1lQ29tcGlsZWRQdWJsaWNJbnN0YW5jZVByb3h5SGFuZGxlcnMgPSAvKiBAX19QVVJFX18gKi8gZXh0ZW5kKHt9LCBQdWJsaWNJbnN0YW5jZVByb3h5SGFuZGxlcnMsIHtcbiAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gU3ltYm9sLnVuc2NvcGFibGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJsaWNJbnN0YW5jZVByb3h5SGFuZGxlcnMuZ2V0KHRhcmdldCwga2V5LCB0YXJnZXQpO1xuICB9LFxuICBoYXMoXywga2V5KSB7XG4gICAgY29uc3QgaGFzID0ga2V5WzBdICE9PSBcIl9cIiAmJiAhaXNHbG9iYWxseUFsbG93ZWQoa2V5KTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaGFzICYmIFB1YmxpY0luc3RhbmNlUHJveHlIYW5kbGVycy5oYXMoXywga2V5KSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgUHJvcGVydHkgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICBrZXlcbiAgICAgICAgKX0gc2hvdWxkIG5vdCBzdGFydCB3aXRoIF8gd2hpY2ggaXMgYSByZXNlcnZlZCBwcmVmaXggZm9yIFZ1ZSBpbnRlcm5hbHMuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhcztcbiAgfVxufSk7XG5mdW5jdGlvbiBjcmVhdGVEZXZSZW5kZXJDb250ZXh0KGluc3RhbmNlKSB7XG4gIGNvbnN0IHRhcmdldCA9IHt9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBgX2AsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiAoKSA9PiBpbnN0YW5jZVxuICB9KTtcbiAgT2JqZWN0LmtleXMocHVibGljUHJvcGVydGllc01hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogKCkgPT4gcHVibGljUHJvcGVydGllc01hcFtrZXldKGluc3RhbmNlKSxcbiAgICAgIC8vIGludGVyY2VwdGVkIGJ5IHRoZSBwcm94eSBzbyBubyBuZWVkIGZvciBpbXBsZW1lbnRhdGlvbixcbiAgICAgIC8vIGJ1dCBuZWVkZWQgdG8gcHJldmVudCBzZXQgZXJyb3JzXG4gICAgICBzZXQ6IE5PT1BcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBleHBvc2VQcm9wc09uUmVuZGVyQ29udGV4dChpbnN0YW5jZSkge1xuICBjb25zdCB7XG4gICAgY3R4LFxuICAgIHByb3BzT3B0aW9uczogW3Byb3BzT3B0aW9uc11cbiAgfSA9IGluc3RhbmNlO1xuICBpZiAocHJvcHNPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMocHJvcHNPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gaW5zdGFuY2UucHJvcHNba2V5XSxcbiAgICAgICAgc2V0OiBOT09QXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZXhwb3NlU2V0dXBTdGF0ZU9uUmVuZGVyQ29udGV4dChpbnN0YW5jZSkge1xuICBjb25zdCB7IGN0eCwgc2V0dXBTdGF0ZSB9ID0gaW5zdGFuY2U7XG4gIE9iamVjdC5rZXlzKHRvUmF3KHNldHVwU3RhdGUpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXNldHVwU3RhdGUuX19pc1NjcmlwdFNldHVwKSB7XG4gICAgICBpZiAoaXNSZXNlcnZlZFByZWZpeChrZXlbMF0pKSB7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBgc2V0dXAoKSByZXR1cm4gcHJvcGVydHkgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICl9IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBcIiRcIiBvciBcIl9cIiB3aGljaCBhcmUgcmVzZXJ2ZWQgcHJlZml4ZXMgZm9yIFZ1ZSBpbnRlcm5hbHMuYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBrZXksIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6ICgpID0+IHNldHVwU3RhdGVba2V5XSxcbiAgICAgICAgc2V0OiBOT09QXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCB3YXJuUnVudGltZVVzYWdlID0gKG1ldGhvZCkgPT4gd2FybiQxKFxuICBgJHttZXRob2R9KCkgaXMgYSBjb21waWxlci1oaW50IGhlbHBlciB0aGF0IGlzIG9ubHkgdXNhYmxlIGluc2lkZSA8c2NyaXB0IHNldHVwPiBvZiBhIHNpbmdsZSBmaWxlIGNvbXBvbmVudC4gSXRzIGFyZ3VtZW50cyBzaG91bGQgYmUgY29tcGlsZWQgYXdheSBhbmQgcGFzc2luZyBpdCBhdCBydW50aW1lIGhhcyBubyBlZmZlY3QuYFxuKTtcbmZ1bmN0aW9uIGRlZmluZVByb3BzKCkge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHdhcm5SdW50aW1lVXNhZ2UoYGRlZmluZVByb3BzYCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBkZWZpbmVFbWl0cygpIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuUnVudGltZVVzYWdlKGBkZWZpbmVFbWl0c2ApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZGVmaW5lRXhwb3NlKGV4cG9zZWQpIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuUnVudGltZVVzYWdlKGBkZWZpbmVFeHBvc2VgKTtcbiAgfVxufVxuZnVuY3Rpb24gZGVmaW5lT3B0aW9ucyhvcHRpb25zKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FyblJ1bnRpbWVVc2FnZShgZGVmaW5lT3B0aW9uc2ApO1xuICB9XG59XG5mdW5jdGlvbiBkZWZpbmVTbG90cygpIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuUnVudGltZVVzYWdlKGBkZWZpbmVTbG90c2ApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZGVmaW5lTW9kZWwoKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FyblJ1bnRpbWVVc2FnZShcImRlZmluZU1vZGVsXCIpO1xuICB9XG59XG5mdW5jdGlvbiB3aXRoRGVmYXVsdHMocHJvcHMsIGRlZmF1bHRzKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FyblJ1bnRpbWVVc2FnZShgd2l0aERlZmF1bHRzYCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB1c2VTbG90cygpIHtcbiAgcmV0dXJuIGdldENvbnRleHQoKS5zbG90cztcbn1cbmZ1bmN0aW9uIHVzZUF0dHJzKCkge1xuICByZXR1cm4gZ2V0Q29udGV4dCgpLmF0dHJzO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgY29uc3QgaSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaSkge1xuICAgIHdhcm4kMShgdXNlQ29udGV4dCgpIGNhbGxlZCB3aXRob3V0IGFjdGl2ZSBpbnN0YW5jZS5gKTtcbiAgfVxuICByZXR1cm4gaS5zZXR1cENvbnRleHQgfHwgKGkuc2V0dXBDb250ZXh0ID0gY3JlYXRlU2V0dXBDb250ZXh0KGkpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzT3JFbWl0cyhwcm9wcykge1xuICByZXR1cm4gaXNBcnJheShwcm9wcykgPyBwcm9wcy5yZWR1Y2UoXG4gICAgKG5vcm1hbGl6ZWQsIHApID0+IChub3JtYWxpemVkW3BdID0gbnVsbCwgbm9ybWFsaXplZCksXG4gICAge31cbiAgKSA6IHByb3BzO1xufVxuZnVuY3Rpb24gbWVyZ2VEZWZhdWx0cyhyYXcsIGRlZmF1bHRzKSB7XG4gIGNvbnN0IHByb3BzID0gbm9ybWFsaXplUHJvcHNPckVtaXRzKHJhdyk7XG4gIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFwiX19za2lwXCIpKSBjb250aW51ZTtcbiAgICBsZXQgb3B0ID0gcHJvcHNba2V5XTtcbiAgICBpZiAob3B0KSB7XG4gICAgICBpZiAoaXNBcnJheShvcHQpIHx8IGlzRnVuY3Rpb24ob3B0KSkge1xuICAgICAgICBvcHQgPSBwcm9wc1trZXldID0geyB0eXBlOiBvcHQsIGRlZmF1bHQ6IGRlZmF1bHRzW2tleV0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdC5kZWZhdWx0ID0gZGVmYXVsdHNba2V5XTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdCA9PT0gbnVsbCkge1xuICAgICAgb3B0ID0gcHJvcHNba2V5XSA9IHsgZGVmYXVsdDogZGVmYXVsdHNba2V5XSB9O1xuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybiQxKGBwcm9wcyBkZWZhdWx0IGtleSBcIiR7a2V5fVwiIGhhcyBubyBjb3JyZXNwb25kaW5nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cbiAgICBpZiAob3B0ICYmIGRlZmF1bHRzW2BfX3NraXBfJHtrZXl9YF0pIHtcbiAgICAgIG9wdC5za2lwRmFjdG9yeSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wcztcbn1cbmZ1bmN0aW9uIG1lcmdlTW9kZWxzKGEsIGIpIHtcbiAgaWYgKCFhIHx8ICFiKSByZXR1cm4gYSB8fCBiO1xuICBpZiAoaXNBcnJheShhKSAmJiBpc0FycmF5KGIpKSByZXR1cm4gYS5jb25jYXQoYik7XG4gIHJldHVybiBleHRlbmQoe30sIG5vcm1hbGl6ZVByb3BzT3JFbWl0cyhhKSwgbm9ybWFsaXplUHJvcHNPckVtaXRzKGIpKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb3BzUmVzdFByb3h5KHByb3BzLCBleGNsdWRlZEtleXMpIHtcbiAgY29uc3QgcmV0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKCFleGNsdWRlZEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJldCwga2V5LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gcHJvcHNba2V5XVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiB3aXRoQXN5bmNDb250ZXh0KGdldEF3YWl0YWJsZSkge1xuICBjb25zdCBjdHggPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWN0eCkge1xuICAgIHdhcm4kMShcbiAgICAgIGB3aXRoQXN5bmNDb250ZXh0IGNhbGxlZCB3aXRob3V0IGFjdGl2ZSBjdXJyZW50IGluc3RhbmNlLiBUaGlzIGlzIGxpa2VseSBhIGJ1Zy5gXG4gICAgKTtcbiAgfVxuICBsZXQgYXdhaXRhYmxlID0gZ2V0QXdhaXRhYmxlKCk7XG4gIHVuc2V0Q3VycmVudEluc3RhbmNlKCk7XG4gIGlmIChpc1Byb21pc2UoYXdhaXRhYmxlKSkge1xuICAgIGF3YWl0YWJsZSA9IGF3YWl0YWJsZS5jYXRjaCgoZSkgPT4ge1xuICAgICAgc2V0Q3VycmVudEluc3RhbmNlKGN0eCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBbYXdhaXRhYmxlLCAoKSA9PiBzZXRDdXJyZW50SW5zdGFuY2UoY3R4KV07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1cGxpY2F0ZUNoZWNrZXIoKSB7XG4gIGNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAodHlwZSwga2V5KSA9PiB7XG4gICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgIHdhcm4kMShgJHt0eXBlfSBwcm9wZXJ0eSBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiAke2NhY2hlW2tleV19LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVtrZXldID0gdHlwZTtcbiAgICB9XG4gIH07XG59XG5sZXQgc2hvdWxkQ2FjaGVBY2Nlc3MgPSB0cnVlO1xuZnVuY3Rpb24gYXBwbHlPcHRpb25zKGluc3RhbmNlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSByZXNvbHZlTWVyZ2VkT3B0aW9ucyhpbnN0YW5jZSk7XG4gIGNvbnN0IHB1YmxpY1RoaXMgPSBpbnN0YW5jZS5wcm94eTtcbiAgY29uc3QgY3R4ID0gaW5zdGFuY2UuY3R4O1xuICBzaG91bGRDYWNoZUFjY2VzcyA9IGZhbHNlO1xuICBpZiAob3B0aW9ucy5iZWZvcmVDcmVhdGUpIHtcbiAgICBjYWxsSG9vayhvcHRpb25zLmJlZm9yZUNyZWF0ZSwgaW5zdGFuY2UsIFwiYmNcIik7XG4gIH1cbiAgY29uc3Qge1xuICAgIC8vIHN0YXRlXG4gICAgZGF0YTogZGF0YU9wdGlvbnMsXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkT3B0aW9ucyxcbiAgICBtZXRob2RzLFxuICAgIHdhdGNoOiB3YXRjaE9wdGlvbnMsXG4gICAgcHJvdmlkZTogcHJvdmlkZU9wdGlvbnMsXG4gICAgaW5qZWN0OiBpbmplY3RPcHRpb25zLFxuICAgIC8vIGxpZmVjeWNsZVxuICAgIGNyZWF0ZWQsXG4gICAgYmVmb3JlTW91bnQsXG4gICAgbW91bnRlZCxcbiAgICBiZWZvcmVVcGRhdGUsXG4gICAgdXBkYXRlZCxcbiAgICBhY3RpdmF0ZWQsXG4gICAgZGVhY3RpdmF0ZWQsXG4gICAgYmVmb3JlRGVzdHJveSxcbiAgICBiZWZvcmVVbm1vdW50LFxuICAgIGRlc3Ryb3llZCxcbiAgICB1bm1vdW50ZWQsXG4gICAgcmVuZGVyLFxuICAgIHJlbmRlclRyYWNrZWQsXG4gICAgcmVuZGVyVHJpZ2dlcmVkLFxuICAgIGVycm9yQ2FwdHVyZWQsXG4gICAgc2VydmVyUHJlZmV0Y2gsXG4gICAgLy8gcHVibGljIEFQSVxuICAgIGV4cG9zZSxcbiAgICBpbmhlcml0QXR0cnMsXG4gICAgLy8gYXNzZXRzXG4gICAgY29tcG9uZW50cyxcbiAgICBkaXJlY3RpdmVzLFxuICAgIGZpbHRlcnNcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNoZWNrRHVwbGljYXRlUHJvcGVydGllcyA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBjcmVhdGVEdXBsaWNhdGVDaGVja2VyKCkgOiBudWxsO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGNvbnN0IFtwcm9wc09wdGlvbnNdID0gaW5zdGFuY2UucHJvcHNPcHRpb25zO1xuICAgIGlmIChwcm9wc09wdGlvbnMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzT3B0aW9ucykge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZVByb3BlcnRpZXMoXCJQcm9wc1wiIC8qIFBST1BTICovLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoaW5qZWN0T3B0aW9ucykge1xuICAgIHJlc29sdmVJbmplY3Rpb25zKGluamVjdE9wdGlvbnMsIGN0eCwgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzKTtcbiAgfVxuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGNvbnN0IG1ldGhvZEhhbmRsZXIgPSBtZXRob2RzW2tleV07XG4gICAgICBpZiAoaXNGdW5jdGlvbihtZXRob2RIYW5kbGVyKSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IG1ldGhvZEhhbmRsZXIuYmluZChwdWJsaWNUaGlzKSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eFtrZXldID0gbWV0aG9kSGFuZGxlci5iaW5kKHB1YmxpY1RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzKFwiTWV0aG9kc1wiIC8qIE1FVEhPRFMgKi8sIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYE1ldGhvZCBcIiR7a2V5fVwiIGhhcyB0eXBlIFwiJHt0eXBlb2YgbWV0aG9kSGFuZGxlcn1cIiBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uIERpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGF0YU9wdGlvbnMpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNGdW5jdGlvbihkYXRhT3B0aW9ucykpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYFRoZSBkYXRhIG9wdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb24uIFBsYWluIG9iamVjdCB1c2FnZSBpcyBubyBsb25nZXIgc3VwcG9ydGVkLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBkYXRhT3B0aW9ucy5jYWxsKHB1YmxpY1RoaXMsIHB1YmxpY1RoaXMpO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzUHJvbWlzZShkYXRhKSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgZGF0YSgpIHJldHVybmVkIGEgUHJvbWlzZSAtIG5vdGUgZGF0YSgpIGNhbm5vdCBiZSBhc3luYzsgSWYgeW91IGludGVuZCB0byBwZXJmb3JtIGRhdGEgZmV0Y2hpbmcgYmVmb3JlIGNvbXBvbmVudCByZW5kZXJzLCB1c2UgYXN5bmMgc2V0dXAoKSArIDxTdXNwZW5zZT4uYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoYGRhdGEoKSBzaG91bGQgcmV0dXJuIGFuIG9iamVjdC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UuZGF0YSA9IHJlYWN0aXZlKGRhdGEpO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGNoZWNrRHVwbGljYXRlUHJvcGVydGllcyhcIkRhdGFcIiAvKiBEQVRBICovLCBrZXkpO1xuICAgICAgICAgIGlmICghaXNSZXNlcnZlZFByZWZpeChrZXlbMF0pKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBrZXksIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQ6ICgpID0+IGRhdGFba2V5XSxcbiAgICAgICAgICAgICAgc2V0OiBOT09QXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvdWxkQ2FjaGVBY2Nlc3MgPSB0cnVlO1xuICBpZiAoY29tcHV0ZWRPcHRpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29tcHV0ZWRPcHRpb25zKSB7XG4gICAgICBjb25zdCBvcHQgPSBjb21wdXRlZE9wdGlvbnNba2V5XTtcbiAgICAgIGNvbnN0IGdldCA9IGlzRnVuY3Rpb24ob3B0KSA/IG9wdC5iaW5kKHB1YmxpY1RoaXMsIHB1YmxpY1RoaXMpIDogaXNGdW5jdGlvbihvcHQuZ2V0KSA/IG9wdC5nZXQuYmluZChwdWJsaWNUaGlzLCBwdWJsaWNUaGlzKSA6IE5PT1A7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBnZXQgPT09IE5PT1ApIHtcbiAgICAgICAgd2FybiQxKGBDb21wdXRlZCBwcm9wZXJ0eSBcIiR7a2V5fVwiIGhhcyBubyBnZXR0ZXIuYCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXQgPSAhaXNGdW5jdGlvbihvcHQpICYmIGlzRnVuY3Rpb24ob3B0LnNldCkgPyBvcHQuc2V0LmJpbmQocHVibGljVGhpcykgOiAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gKCkgPT4ge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYFdyaXRlIG9wZXJhdGlvbiBmYWlsZWQ6IGNvbXB1dGVkIHByb3BlcnR5IFwiJHtrZXl9XCIgaXMgcmVhZG9ubHkuYFxuICAgICAgICApO1xuICAgICAgfSA6IE5PT1A7XG4gICAgICBjb25zdCBjID0gY29tcHV0ZWQoe1xuICAgICAgICBnZXQsXG4gICAgICAgIHNldFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBrZXksIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6ICgpID0+IGMudmFsdWUsXG4gICAgICAgIHNldDogKHYpID0+IGMudmFsdWUgPSB2XG4gICAgICB9KTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGNoZWNrRHVwbGljYXRlUHJvcGVydGllcyhcIkNvbXB1dGVkXCIgLyogQ09NUFVURUQgKi8sIGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh3YXRjaE9wdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB3YXRjaE9wdGlvbnMpIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIod2F0Y2hPcHRpb25zW2tleV0sIGN0eCwgcHVibGljVGhpcywga2V5KTtcbiAgICB9XG4gIH1cbiAgaWYgKHByb3ZpZGVPcHRpb25zKSB7XG4gICAgY29uc3QgcHJvdmlkZXMgPSBpc0Z1bmN0aW9uKHByb3ZpZGVPcHRpb25zKSA/IHByb3ZpZGVPcHRpb25zLmNhbGwocHVibGljVGhpcykgOiBwcm92aWRlT3B0aW9ucztcbiAgICBSZWZsZWN0Lm93bktleXMocHJvdmlkZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgcHJvdmlkZShrZXksIHByb3ZpZGVzW2tleV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChjcmVhdGVkKSB7XG4gICAgY2FsbEhvb2soY3JlYXRlZCwgaW5zdGFuY2UsIFwiY1wiKTtcbiAgfVxuICBmdW5jdGlvbiByZWdpc3RlckxpZmVjeWNsZUhvb2socmVnaXN0ZXIsIGhvb2spIHtcbiAgICBpZiAoaXNBcnJheShob29rKSkge1xuICAgICAgaG9vay5mb3JFYWNoKChfaG9vaykgPT4gcmVnaXN0ZXIoX2hvb2suYmluZChwdWJsaWNUaGlzKSkpO1xuICAgIH0gZWxzZSBpZiAoaG9vaykge1xuICAgICAgcmVnaXN0ZXIoaG9vay5iaW5kKHB1YmxpY1RoaXMpKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uQmVmb3JlTW91bnQsIGJlZm9yZU1vdW50KTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uTW91bnRlZCwgbW91bnRlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvbkJlZm9yZVVwZGF0ZSwgYmVmb3JlVXBkYXRlKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uVXBkYXRlZCwgdXBkYXRlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvbkFjdGl2YXRlZCwgYWN0aXZhdGVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uRGVhY3RpdmF0ZWQsIGRlYWN0aXZhdGVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uRXJyb3JDYXB0dXJlZCwgZXJyb3JDYXB0dXJlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvblJlbmRlclRyYWNrZWQsIHJlbmRlclRyYWNrZWQpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25SZW5kZXJUcmlnZ2VyZWQsIHJlbmRlclRyaWdnZXJlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvbkJlZm9yZVVubW91bnQsIGJlZm9yZVVubW91bnQpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25Vbm1vdW50ZWQsIHVubW91bnRlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvblNlcnZlclByZWZldGNoLCBzZXJ2ZXJQcmVmZXRjaCk7XG4gIGlmIChpc0FycmF5KGV4cG9zZSkpIHtcbiAgICBpZiAoZXhwb3NlLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhwb3NlZCA9IGluc3RhbmNlLmV4cG9zZWQgfHwgKGluc3RhbmNlLmV4cG9zZWQgPSB7fSk7XG4gICAgICBleHBvc2UuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvc2VkLCBrZXksIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHB1YmxpY1RoaXNba2V5XSxcbiAgICAgICAgICBzZXQ6ICh2YWwpID0+IHB1YmxpY1RoaXNba2V5XSA9IHZhbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWluc3RhbmNlLmV4cG9zZWQpIHtcbiAgICAgIGluc3RhbmNlLmV4cG9zZWQgPSB7fTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIgPT09IE5PT1ApIHtcbiAgICBpbnN0YW5jZS5yZW5kZXIgPSByZW5kZXI7XG4gIH1cbiAgaWYgKGluaGVyaXRBdHRycyAhPSBudWxsKSB7XG4gICAgaW5zdGFuY2UuaW5oZXJpdEF0dHJzID0gaW5oZXJpdEF0dHJzO1xuICB9XG4gIGlmIChjb21wb25lbnRzKSBpbnN0YW5jZS5jb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgaWYgKGRpcmVjdGl2ZXMpIGluc3RhbmNlLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICBpZiAoc2VydmVyUHJlZmV0Y2gpIHtcbiAgICBtYXJrQXN5bmNCb3VuZGFyeShpbnN0YW5jZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3Rpb25zKGluamVjdE9wdGlvbnMsIGN0eCwgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzID0gTk9PUCkge1xuICBpZiAoaXNBcnJheShpbmplY3RPcHRpb25zKSkge1xuICAgIGluamVjdE9wdGlvbnMgPSBub3JtYWxpemVJbmplY3QoaW5qZWN0T3B0aW9ucyk7XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gaW5qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IG9wdCA9IGluamVjdE9wdGlvbnNba2V5XTtcbiAgICBsZXQgaW5qZWN0ZWQ7XG4gICAgaWYgKGlzT2JqZWN0KG9wdCkpIHtcbiAgICAgIGlmIChcImRlZmF1bHRcIiBpbiBvcHQpIHtcbiAgICAgICAgaW5qZWN0ZWQgPSBpbmplY3QoXG4gICAgICAgICAgb3B0LmZyb20gfHwga2V5LFxuICAgICAgICAgIG9wdC5kZWZhdWx0LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluamVjdGVkID0gaW5qZWN0KG9wdC5mcm9tIHx8IGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluamVjdGVkID0gaW5qZWN0KG9wdCk7XG4gICAgfVxuICAgIGlmIChpc1JlZihpbmplY3RlZCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gaW5qZWN0ZWQudmFsdWUsXG4gICAgICAgIHNldDogKHYpID0+IGluamVjdGVkLnZhbHVlID0gdlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eFtrZXldID0gaW5qZWN0ZWQ7XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBjaGVja0R1cGxpY2F0ZVByb3BlcnRpZXMoXCJJbmplY3RcIiAvKiBJTkpFQ1QgKi8sIGtleSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjYWxsSG9vayhob29rLCBpbnN0YW5jZSwgdHlwZSkge1xuICBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhcbiAgICBpc0FycmF5KGhvb2spID8gaG9vay5tYXAoKGgpID0+IGguYmluZChpbnN0YW5jZS5wcm94eSkpIDogaG9vay5iaW5kKGluc3RhbmNlLnByb3h5KSxcbiAgICBpbnN0YW5jZSxcbiAgICB0eXBlXG4gICk7XG59XG5mdW5jdGlvbiBjcmVhdGVXYXRjaGVyKHJhdywgY3R4LCBwdWJsaWNUaGlzLCBrZXkpIHtcbiAgbGV0IGdldHRlciA9IGtleS5pbmNsdWRlcyhcIi5cIikgPyBjcmVhdGVQYXRoR2V0dGVyKHB1YmxpY1RoaXMsIGtleSkgOiAoKSA9PiBwdWJsaWNUaGlzW2tleV07XG4gIGlmIChpc1N0cmluZyhyYXcpKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGN0eFtyYXddO1xuICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICB7XG4gICAgICAgIHdhdGNoKGdldHRlciwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuJDEoYEludmFsaWQgd2F0Y2ggaGFuZGxlciBzcGVjaWZpZWQgYnkga2V5IFwiJHtyYXd9XCJgLCBoYW5kbGVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihyYXcpKSB7XG4gICAge1xuICAgICAgd2F0Y2goZ2V0dGVyLCByYXcuYmluZChwdWJsaWNUaGlzKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHJhdykpIHtcbiAgICBpZiAoaXNBcnJheShyYXcpKSB7XG4gICAgICByYXcuZm9yRWFjaCgocikgPT4gY3JlYXRlV2F0Y2hlcihyLCBjdHgsIHB1YmxpY1RoaXMsIGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gaXNGdW5jdGlvbihyYXcuaGFuZGxlcikgPyByYXcuaGFuZGxlci5iaW5kKHB1YmxpY1RoaXMpIDogY3R4W3Jhdy5oYW5kbGVyXTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgIHdhdGNoKGdldHRlciwgaGFuZGxlciwgcmF3KTtcbiAgICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICB3YXJuJDEoYEludmFsaWQgd2F0Y2ggaGFuZGxlciBzcGVjaWZpZWQgYnkga2V5IFwiJHtyYXcuaGFuZGxlcn1cImAsIGhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FybiQxKGBJbnZhbGlkIHdhdGNoIG9wdGlvbjogXCIke2tleX1cImAsIHJhdyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVNZXJnZWRPcHRpb25zKGluc3RhbmNlKSB7XG4gIGNvbnN0IGJhc2UgPSBpbnN0YW5jZS50eXBlO1xuICBjb25zdCB7IG1peGlucywgZXh0ZW5kczogZXh0ZW5kc09wdGlvbnMgfSA9IGJhc2U7XG4gIGNvbnN0IHtcbiAgICBtaXhpbnM6IGdsb2JhbE1peGlucyxcbiAgICBvcHRpb25zQ2FjaGU6IGNhY2hlLFxuICAgIGNvbmZpZzogeyBvcHRpb25NZXJnZVN0cmF0ZWdpZXMgfVxuICB9ID0gaW5zdGFuY2UuYXBwQ29udGV4dDtcbiAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KGJhc2UpO1xuICBsZXQgcmVzb2x2ZWQ7XG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXNvbHZlZCA9IGNhY2hlZDtcbiAgfSBlbHNlIGlmICghZ2xvYmFsTWl4aW5zLmxlbmd0aCAmJiAhbWl4aW5zICYmICFleHRlbmRzT3B0aW9ucykge1xuICAgIHtcbiAgICAgIHJlc29sdmVkID0gYmFzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzb2x2ZWQgPSB7fTtcbiAgICBpZiAoZ2xvYmFsTWl4aW5zLmxlbmd0aCkge1xuICAgICAgZ2xvYmFsTWl4aW5zLmZvckVhY2goXG4gICAgICAgIChtKSA9PiBtZXJnZU9wdGlvbnMocmVzb2x2ZWQsIG0sIG9wdGlvbk1lcmdlU3RyYXRlZ2llcywgdHJ1ZSlcbiAgICAgICk7XG4gICAgfVxuICAgIG1lcmdlT3B0aW9ucyhyZXNvbHZlZCwgYmFzZSwgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzKTtcbiAgfVxuICBpZiAoaXNPYmplY3QoYmFzZSkpIHtcbiAgICBjYWNoZS5zZXQoYmFzZSwgcmVzb2x2ZWQpO1xuICB9XG4gIHJldHVybiByZXNvbHZlZDtcbn1cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyh0bywgZnJvbSwgc3RyYXRzLCBhc01peGluID0gZmFsc2UpIHtcbiAgY29uc3QgeyBtaXhpbnMsIGV4dGVuZHM6IGV4dGVuZHNPcHRpb25zIH0gPSBmcm9tO1xuICBpZiAoZXh0ZW5kc09wdGlvbnMpIHtcbiAgICBtZXJnZU9wdGlvbnModG8sIGV4dGVuZHNPcHRpb25zLCBzdHJhdHMsIHRydWUpO1xuICB9XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaChcbiAgICAgIChtKSA9PiBtZXJnZU9wdGlvbnModG8sIG0sIHN0cmF0cywgdHJ1ZSlcbiAgICApO1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICBpZiAoYXNNaXhpbiAmJiBrZXkgPT09IFwiZXhwb3NlXCIpIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybiQxKFxuICAgICAgICBgXCJleHBvc2VcIiBvcHRpb24gaXMgaWdub3JlZCB3aGVuIGRlY2xhcmVkIGluIG1peGlucyBvciBleHRlbmRzLiBJdCBzaG91bGQgb25seSBiZSBkZWNsYXJlZCBpbiB0aGUgYmFzZSBjb21wb25lbnQgaXRzZWxmLmBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0cmF0ID0gaW50ZXJuYWxPcHRpb25NZXJnZVN0cmF0c1trZXldIHx8IHN0cmF0cyAmJiBzdHJhdHNba2V5XTtcbiAgICAgIHRvW2tleV0gPSBzdHJhdCA/IHN0cmF0KHRvW2tleV0sIGZyb21ba2V5XSkgOiBmcm9tW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cbmNvbnN0IGludGVybmFsT3B0aW9uTWVyZ2VTdHJhdHMgPSB7XG4gIGRhdGE6IG1lcmdlRGF0YUZuLFxuICBwcm9wczogbWVyZ2VFbWl0c09yUHJvcHNPcHRpb25zLFxuICBlbWl0czogbWVyZ2VFbWl0c09yUHJvcHNPcHRpb25zLFxuICAvLyBvYmplY3RzXG4gIG1ldGhvZHM6IG1lcmdlT2JqZWN0T3B0aW9ucyxcbiAgY29tcHV0ZWQ6IG1lcmdlT2JqZWN0T3B0aW9ucyxcbiAgLy8gbGlmZWN5Y2xlXG4gIGJlZm9yZUNyZWF0ZTogbWVyZ2VBc0FycmF5LFxuICBjcmVhdGVkOiBtZXJnZUFzQXJyYXksXG4gIGJlZm9yZU1vdW50OiBtZXJnZUFzQXJyYXksXG4gIG1vdW50ZWQ6IG1lcmdlQXNBcnJheSxcbiAgYmVmb3JlVXBkYXRlOiBtZXJnZUFzQXJyYXksXG4gIHVwZGF0ZWQ6IG1lcmdlQXNBcnJheSxcbiAgYmVmb3JlRGVzdHJveTogbWVyZ2VBc0FycmF5LFxuICBiZWZvcmVVbm1vdW50OiBtZXJnZUFzQXJyYXksXG4gIGRlc3Ryb3llZDogbWVyZ2VBc0FycmF5LFxuICB1bm1vdW50ZWQ6IG1lcmdlQXNBcnJheSxcbiAgYWN0aXZhdGVkOiBtZXJnZUFzQXJyYXksXG4gIGRlYWN0aXZhdGVkOiBtZXJnZUFzQXJyYXksXG4gIGVycm9yQ2FwdHVyZWQ6IG1lcmdlQXNBcnJheSxcbiAgc2VydmVyUHJlZmV0Y2g6IG1lcmdlQXNBcnJheSxcbiAgLy8gYXNzZXRzXG4gIGNvbXBvbmVudHM6IG1lcmdlT2JqZWN0T3B0aW9ucyxcbiAgZGlyZWN0aXZlczogbWVyZ2VPYmplY3RPcHRpb25zLFxuICAvLyB3YXRjaFxuICB3YXRjaDogbWVyZ2VXYXRjaE9wdGlvbnMsXG4gIC8vIHByb3ZpZGUgLyBpbmplY3RcbiAgcHJvdmlkZTogbWVyZ2VEYXRhRm4sXG4gIGluamVjdDogbWVyZ2VJbmplY3Rcbn07XG5mdW5jdGlvbiBtZXJnZURhdGFGbih0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHtcbiAgICByZXR1cm4gdG87XG4gIH1cbiAgaWYgKCF0bykge1xuICAgIHJldHVybiBmcm9tO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4oKSB7XG4gICAgcmV0dXJuIChleHRlbmQpKFxuICAgICAgaXNGdW5jdGlvbih0bykgPyB0by5jYWxsKHRoaXMsIHRoaXMpIDogdG8sXG4gICAgICBpc0Z1bmN0aW9uKGZyb20pID8gZnJvbS5jYWxsKHRoaXMsIHRoaXMpIDogZnJvbVxuICAgICk7XG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZUluamVjdCh0bywgZnJvbSkge1xuICByZXR1cm4gbWVyZ2VPYmplY3RPcHRpb25zKG5vcm1hbGl6ZUluamVjdCh0byksIG5vcm1hbGl6ZUluamVjdChmcm9tKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QocmF3KSB7XG4gIGlmIChpc0FycmF5KHJhdykpIHtcbiAgICBjb25zdCByZXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzW3Jhd1tpXV0gPSByYXdbaV07XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgcmV0dXJuIHJhdztcbn1cbmZ1bmN0aW9uIG1lcmdlQXNBcnJheSh0bywgZnJvbSkge1xuICByZXR1cm4gdG8gPyBbLi4ubmV3IFNldChbXS5jb25jYXQodG8sIGZyb20pKV0gOiBmcm9tO1xufVxuZnVuY3Rpb24gbWVyZ2VPYmplY3RPcHRpb25zKHRvLCBmcm9tKSB7XG4gIHJldHVybiB0byA/IGV4dGVuZCgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSwgdG8sIGZyb20pIDogZnJvbTtcbn1cbmZ1bmN0aW9uIG1lcmdlRW1pdHNPclByb3BzT3B0aW9ucyh0bywgZnJvbSkge1xuICBpZiAodG8pIHtcbiAgICBpZiAoaXNBcnJheSh0bykgJiYgaXNBcnJheShmcm9tKSkge1xuICAgICAgcmV0dXJuIFsuLi4vKiBAX19QVVJFX18gKi8gbmV3IFNldChbLi4udG8sIC4uLmZyb21dKV07XG4gICAgfVxuICAgIHJldHVybiBleHRlbmQoXG4gICAgICAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIG5vcm1hbGl6ZVByb3BzT3JFbWl0cyh0byksXG4gICAgICBub3JtYWxpemVQcm9wc09yRW1pdHMoZnJvbSAhPSBudWxsID8gZnJvbSA6IHt9KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZyb207XG4gIH1cbn1cbmZ1bmN0aW9uIG1lcmdlV2F0Y2hPcHRpb25zKHRvLCBmcm9tKSB7XG4gIGlmICghdG8pIHJldHVybiBmcm9tO1xuICBpZiAoIWZyb20pIHJldHVybiB0bztcbiAgY29uc3QgbWVyZ2VkID0gZXh0ZW5kKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpLCB0byk7XG4gIGZvciAoY29uc3Qga2V5IGluIGZyb20pIHtcbiAgICBtZXJnZWRba2V5XSA9IG1lcmdlQXNBcnJheSh0b1trZXldLCBmcm9tW2tleV0pO1xuICB9XG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwcENvbnRleHQoKSB7XG4gIHJldHVybiB7XG4gICAgYXBwOiBudWxsLFxuICAgIGNvbmZpZzoge1xuICAgICAgaXNOYXRpdmVUYWc6IE5PLFxuICAgICAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgZ2xvYmFsUHJvcGVydGllczoge30sXG4gICAgICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IHt9LFxuICAgICAgZXJyb3JIYW5kbGVyOiB2b2lkIDAsXG4gICAgICB3YXJuSGFuZGxlcjogdm9pZCAwLFxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7fVxuICAgIH0sXG4gICAgbWl4aW5zOiBbXSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBkaXJlY3RpdmVzOiB7fSxcbiAgICBwcm92aWRlczogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgb3B0aW9uc0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICBwcm9wc0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICBlbWl0c0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxuICB9O1xufVxubGV0IHVpZCQxID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZUFwcEFQSShyZW5kZXIsIGh5ZHJhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUFwcChyb290Q29tcG9uZW50LCByb290UHJvcHMgPSBudWxsKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKHJvb3RDb21wb25lbnQpKSB7XG4gICAgICByb290Q29tcG9uZW50ID0gZXh0ZW5kKHt9LCByb290Q29tcG9uZW50KTtcbiAgICB9XG4gICAgaWYgKHJvb3RQcm9wcyAhPSBudWxsICYmICFpc09iamVjdChyb290UHJvcHMpKSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4kMShgcm9vdCBwcm9wcyBwYXNzZWQgdG8gYXBwLm1vdW50KCkgbXVzdCBiZSBhbiBvYmplY3QuYCk7XG4gICAgICByb290UHJvcHMgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQXBwQ29udGV4dCgpO1xuICAgIGNvbnN0IGluc3RhbGxlZFBsdWdpbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcbiAgICBjb25zdCBwbHVnaW5DbGVhbnVwRm5zID0gW107XG4gICAgbGV0IGlzTW91bnRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGFwcCA9IGNvbnRleHQuYXBwID0ge1xuICAgICAgX3VpZDogdWlkJDErKyxcbiAgICAgIF9jb21wb25lbnQ6IHJvb3RDb21wb25lbnQsXG4gICAgICBfcHJvcHM6IHJvb3RQcm9wcyxcbiAgICAgIF9jb250YWluZXI6IG51bGwsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9pbnN0YW5jZTogbnVsbCxcbiAgICAgIHZlcnNpb24sXG4gICAgICBnZXQgY29uZmlnKCkge1xuICAgICAgICByZXR1cm4gY29udGV4dC5jb25maWc7XG4gICAgICB9LFxuICAgICAgc2V0IGNvbmZpZyh2KSB7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYGFwcC5jb25maWcgY2Fubm90IGJlIHJlcGxhY2VkLiBNb2RpZnkgaW5kaXZpZHVhbCBvcHRpb25zIGluc3RlYWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1c2UocGx1Z2luLCAuLi5vcHRpb25zKSB7XG4gICAgICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmhhcyhwbHVnaW4pKSB7XG4gICAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoYFBsdWdpbiBoYXMgYWxyZWFkeSBiZWVuIGFwcGxpZWQgdG8gdGFyZ2V0IGFwcC5gKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4gJiYgaXNGdW5jdGlvbihwbHVnaW4uaW5zdGFsbCkpIHtcbiAgICAgICAgICBpbnN0YWxsZWRQbHVnaW5zLmFkZChwbHVnaW4pO1xuICAgICAgICAgIHBsdWdpbi5pbnN0YWxsKGFwcCwgLi4ub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihwbHVnaW4pKSB7XG4gICAgICAgICAgaW5zdGFsbGVkUGx1Z2lucy5hZGQocGx1Z2luKTtcbiAgICAgICAgICBwbHVnaW4oYXBwLCAuLi5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYEEgcGx1Z2luIG11c3QgZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IHdpdGggYW4gXCJpbnN0YWxsXCIgZnVuY3Rpb24uYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICAgIH0sXG4gICAgICBtaXhpbihtaXhpbikge1xuICAgICAgICBpZiAoX19WVUVfT1BUSU9OU19BUElfXykge1xuICAgICAgICAgIGlmICghY29udGV4dC5taXhpbnMuaW5jbHVkZXMobWl4aW4pKSB7XG4gICAgICAgICAgICBjb250ZXh0Lm1peGlucy5wdXNoKG1peGluKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgICAgXCJNaXhpbiBoYXMgYWxyZWFkeSBiZWVuIGFwcGxpZWQgdG8gdGFyZ2V0IGFwcFwiICsgKG1peGluLm5hbWUgPyBgOiAke21peGluLm5hbWV9YCA6IFwiXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKFwiTWl4aW5zIGFyZSBvbmx5IGF2YWlsYWJsZSBpbiBidWlsZHMgc3VwcG9ydGluZyBPcHRpb25zIEFQSVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSwgY29udGV4dC5jb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuY29tcG9uZW50c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjb250ZXh0LmNvbXBvbmVudHNbbmFtZV0pIHtcbiAgICAgICAgICB3YXJuJDEoYENvbXBvbmVudCBcIiR7bmFtZX1cIiBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgaW4gdGFyZ2V0IGFwcC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICAgIHJldHVybiBhcHA7XG4gICAgICB9LFxuICAgICAgZGlyZWN0aXZlKG5hbWUsIGRpcmVjdGl2ZSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHZhbGlkYXRlRGlyZWN0aXZlTmFtZShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRpcmVjdGl2ZSkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpcmVjdGl2ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY29udGV4dC5kaXJlY3RpdmVzW25hbWVdKSB7XG4gICAgICAgICAgd2FybiQxKGBEaXJlY3RpdmUgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIGluIHRhcmdldCBhcHAuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5kaXJlY3RpdmVzW25hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIG1vdW50KHJvb3RDb250YWluZXIsIGlzSHlkcmF0ZSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIGlmICghaXNNb3VudGVkKSB7XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgcm9vdENvbnRhaW5lci5fX3Z1ZV9hcHBfXykge1xuICAgICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgICBgVGhlcmUgaXMgYWxyZWFkeSBhbiBhcHAgaW5zdGFuY2UgbW91bnRlZCBvbiB0aGUgaG9zdCBjb250YWluZXIuXG4gSWYgeW91IHdhbnQgdG8gbW91bnQgYW5vdGhlciBhcHAgb24gdGhlIHNhbWUgaG9zdCBjb250YWluZXIsIHlvdSBuZWVkIHRvIHVubW91bnQgdGhlIHByZXZpb3VzIGFwcCBieSBjYWxsaW5nIFxcYGFwcC51bm1vdW50KClcXGAgZmlyc3QuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgdm5vZGUgPSBhcHAuX2NlVk5vZGUgfHwgY3JlYXRlVk5vZGUocm9vdENvbXBvbmVudCwgcm9vdFByb3BzKTtcbiAgICAgICAgICB2bm9kZS5hcHBDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBcInN2Z1wiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgICAgY29udGV4dC5yZWxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbmRlcihcbiAgICAgICAgICAgICAgICBjbG9uZVZOb2RlKHZub2RlKSxcbiAgICAgICAgICAgICAgICByb290Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzSHlkcmF0ZSAmJiBoeWRyYXRlKSB7XG4gICAgICAgICAgICBoeWRyYXRlKHZub2RlLCByb290Q29udGFpbmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyKHZub2RlLCByb290Q29udGFpbmVyLCBuYW1lc3BhY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGFwcC5fY29udGFpbmVyID0gcm9vdENvbnRhaW5lcjtcbiAgICAgICAgICByb290Q29udGFpbmVyLl9fdnVlX2FwcF9fID0gYXBwO1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykge1xuICAgICAgICAgICAgYXBwLl9pbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudDtcbiAgICAgICAgICAgIGRldnRvb2xzSW5pdEFwcChhcHAsIHZlcnNpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50UHVibGljSW5zdGFuY2Uodm5vZGUuY29tcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYEFwcCBoYXMgYWxyZWFkeSBiZWVuIG1vdW50ZWQuXG5JZiB5b3Ugd2FudCB0byByZW1vdW50IHRoZSBzYW1lIGFwcCwgbW92ZSB5b3VyIGFwcCBjcmVhdGlvbiBsb2dpYyBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiBhbmQgY3JlYXRlIGZyZXNoIGFwcCBpbnN0YW5jZXMgZm9yIGVhY2ggbW91bnQgLSBlLmcuIFxcYGNvbnN0IGNyZWF0ZU15QXBwID0gKCkgPT4gY3JlYXRlQXBwKEFwcClcXGBgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVW5tb3VudChjbGVhbnVwRm4pIHtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdHlwZW9mIGNsZWFudXBGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYEV4cGVjdGVkIGZ1bmN0aW9uIGFzIGZpcnN0IGFyZ3VtZW50IHRvIGFwcC5vblVubW91bnQoKSwgYnV0IGdvdCAke3R5cGVvZiBjbGVhbnVwRm59YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcGx1Z2luQ2xlYW51cEZucy5wdXNoKGNsZWFudXBGbik7XG4gICAgICB9LFxuICAgICAgdW5tb3VudCgpIHtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xuICAgICAgICAgIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKFxuICAgICAgICAgICAgcGx1Z2luQ2xlYW51cEZucyxcbiAgICAgICAgICAgIGFwcC5faW5zdGFuY2UsXG4gICAgICAgICAgICAxNlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVuZGVyKG51bGwsIGFwcC5fY29udGFpbmVyKTtcbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgICAgICAgIGFwcC5faW5zdGFuY2UgPSBudWxsO1xuICAgICAgICAgICAgZGV2dG9vbHNVbm1vdW50QXBwKGFwcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBhcHAuX2NvbnRhaW5lci5fX3Z1ZV9hcHBfXztcbiAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKGBDYW5ub3QgdW5tb3VudCBhbiBhcHAgdGhhdCBpcyBub3QgbW91bnRlZC5gKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3ZpZGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBrZXkgaW4gY29udGV4dC5wcm92aWRlcykge1xuICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgIGBBcHAgYWxyZWFkeSBwcm92aWRlcyBwcm9wZXJ0eSB3aXRoIGtleSBcIiR7U3RyaW5nKGtleSl9XCIuIEl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2l0aCB0aGUgbmV3IHZhbHVlLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQucHJvdmlkZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIHJ1bldpdGhDb250ZXh0KGZuKSB7XG4gICAgICAgIGNvbnN0IGxhc3RBcHAgPSBjdXJyZW50QXBwO1xuICAgICAgICBjdXJyZW50QXBwID0gYXBwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGN1cnJlbnRBcHAgPSBsYXN0QXBwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gYXBwO1xuICB9O1xufVxubGV0IGN1cnJlbnRBcHAgPSBudWxsO1xuXG5mdW5jdGlvbiBwcm92aWRlKGtleSwgdmFsdWUpIHtcbiAgaWYgKCFjdXJyZW50SW5zdGFuY2UpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybiQxKGBwcm92aWRlKCkgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgc2V0dXAoKS5gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IHByb3ZpZGVzID0gY3VycmVudEluc3RhbmNlLnByb3ZpZGVzO1xuICAgIGNvbnN0IHBhcmVudFByb3ZpZGVzID0gY3VycmVudEluc3RhbmNlLnBhcmVudCAmJiBjdXJyZW50SW5zdGFuY2UucGFyZW50LnByb3ZpZGVzO1xuICAgIGlmIChwYXJlbnRQcm92aWRlcyA9PT0gcHJvdmlkZXMpIHtcbiAgICAgIHByb3ZpZGVzID0gY3VycmVudEluc3RhbmNlLnByb3ZpZGVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRQcm92aWRlcyk7XG4gICAgfVxuICAgIHByb3ZpZGVzW2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaW5qZWN0KGtleSwgZGVmYXVsdFZhbHVlLCB0cmVhdERlZmF1bHRBc0ZhY3RvcnkgPSBmYWxzZSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSB8fCBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGlmIChpbnN0YW5jZSB8fCBjdXJyZW50QXBwKSB7XG4gICAgY29uc3QgcHJvdmlkZXMgPSBjdXJyZW50QXBwID8gY3VycmVudEFwcC5fY29udGV4dC5wcm92aWRlcyA6IGluc3RhbmNlID8gaW5zdGFuY2UucGFyZW50ID09IG51bGwgPyBpbnN0YW5jZS52bm9kZS5hcHBDb250ZXh0ICYmIGluc3RhbmNlLnZub2RlLmFwcENvbnRleHQucHJvdmlkZXMgOiBpbnN0YW5jZS5wYXJlbnQucHJvdmlkZXMgOiB2b2lkIDA7XG4gICAgaWYgKHByb3ZpZGVzICYmIGtleSBpbiBwcm92aWRlcykge1xuICAgICAgcmV0dXJuIHByb3ZpZGVzW2tleV07XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRyZWF0RGVmYXVsdEFzRmFjdG9yeSAmJiBpc0Z1bmN0aW9uKGRlZmF1bHRWYWx1ZSkgPyBkZWZhdWx0VmFsdWUuY2FsbChpbnN0YW5jZSAmJiBpbnN0YW5jZS5wcm94eSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB3YXJuJDEoYGluamVjdGlvbiBcIiR7U3RyaW5nKGtleSl9XCIgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FybiQxKGBpbmplY3QoKSBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBzZXR1cCgpIG9yIGZ1bmN0aW9uYWwgY29tcG9uZW50cy5gKTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzSW5qZWN0aW9uQ29udGV4dCgpIHtcbiAgcmV0dXJuICEhKGN1cnJlbnRJbnN0YW5jZSB8fCBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgfHwgY3VycmVudEFwcCk7XG59XG5cbmNvbnN0IGludGVybmFsT2JqZWN0UHJvdG8gPSB7fTtcbmNvbnN0IGNyZWF0ZUludGVybmFsT2JqZWN0ID0gKCkgPT4gT2JqZWN0LmNyZWF0ZShpbnRlcm5hbE9iamVjdFByb3RvKTtcbmNvbnN0IGlzSW50ZXJuYWxPYmplY3QgPSAob2JqKSA9PiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gaW50ZXJuYWxPYmplY3RQcm90bztcblxuZnVuY3Rpb24gaW5pdFByb3BzKGluc3RhbmNlLCByYXdQcm9wcywgaXNTdGF0ZWZ1bCwgaXNTU1IgPSBmYWxzZSkge1xuICBjb25zdCBwcm9wcyA9IHt9O1xuICBjb25zdCBhdHRycyA9IGNyZWF0ZUludGVybmFsT2JqZWN0KCk7XG4gIGluc3RhbmNlLnByb3BzRGVmYXVsdHMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc2V0RnVsbFByb3BzKGluc3RhbmNlLCByYXdQcm9wcywgcHJvcHMsIGF0dHJzKTtcbiAgZm9yIChjb25zdCBrZXkgaW4gaW5zdGFuY2UucHJvcHNPcHRpb25zWzBdKSB7XG4gICAgaWYgKCEoa2V5IGluIHByb3BzKSkge1xuICAgICAgcHJvcHNba2V5XSA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB2YWxpZGF0ZVByb3BzKHJhd1Byb3BzIHx8IHt9LCBwcm9wcywgaW5zdGFuY2UpO1xuICB9XG4gIGlmIChpc1N0YXRlZnVsKSB7XG4gICAgaW5zdGFuY2UucHJvcHMgPSBpc1NTUiA/IHByb3BzIDogc2hhbGxvd1JlYWN0aXZlKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWluc3RhbmNlLnR5cGUucHJvcHMpIHtcbiAgICAgIGluc3RhbmNlLnByb3BzID0gYXR0cnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICB9XG4gIGluc3RhbmNlLmF0dHJzID0gYXR0cnM7XG59XG5mdW5jdGlvbiBpc0luSG1yQ29udGV4dChpbnN0YW5jZSkge1xuICB3aGlsZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UudHlwZS5fX2htcklkKSByZXR1cm4gdHJ1ZTtcbiAgICBpbnN0YW5jZSA9IGluc3RhbmNlLnBhcmVudDtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlUHJvcHMoaW5zdGFuY2UsIHJhd1Byb3BzLCByYXdQcmV2UHJvcHMsIG9wdGltaXplZCkge1xuICBjb25zdCB7XG4gICAgcHJvcHMsXG4gICAgYXR0cnMsXG4gICAgdm5vZGU6IHsgcGF0Y2hGbGFnIH1cbiAgfSA9IGluc3RhbmNlO1xuICBjb25zdCByYXdDdXJyZW50UHJvcHMgPSB0b1Jhdyhwcm9wcyk7XG4gIGNvbnN0IFtvcHRpb25zXSA9IGluc3RhbmNlLnByb3BzT3B0aW9ucztcbiAgbGV0IGhhc0F0dHJzQ2hhbmdlZCA9IGZhbHNlO1xuICBpZiAoXG4gICAgLy8gYWx3YXlzIGZvcmNlIGZ1bGwgZGlmZiBpbiBkZXZcbiAgICAvLyAtICMxOTQyIGlmIGhtciBpcyBlbmFibGVkIHdpdGggc2ZjIGNvbXBvbmVudFxuICAgIC8vIC0gdml0ZSM4NzIgbm9uLXNmYyBjb21wb25lbnQgdXNlZCBieSBzZmMgY29tcG9uZW50XG4gICAgISghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSW5IbXJDb250ZXh0KGluc3RhbmNlKSkgJiYgKG9wdGltaXplZCB8fCBwYXRjaEZsYWcgPiAwKSAmJiAhKHBhdGNoRmxhZyAmIDE2KVxuICApIHtcbiAgICBpZiAocGF0Y2hGbGFnICYgOCkge1xuICAgICAgY29uc3QgcHJvcHNUb1VwZGF0ZSA9IGluc3RhbmNlLnZub2RlLmR5bmFtaWNQcm9wcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHNUb1VwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gcHJvcHNUb1VwZGF0ZVtpXTtcbiAgICAgICAgaWYgKGlzRW1pdExpc3RlbmVyKGluc3RhbmNlLmVtaXRzT3B0aW9ucywga2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmF3UHJvcHNba2V5XTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoaGFzT3duKGF0dHJzLCBrZXkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IGF0dHJzW2tleV0pIHtcbiAgICAgICAgICAgICAgYXR0cnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICBoYXNBdHRyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICAgICAgcHJvcHNbY2FtZWxpemVkS2V5XSA9IHJlc29sdmVQcm9wVmFsdWUoXG4gICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgIHJhd0N1cnJlbnRQcm9wcyxcbiAgICAgICAgICAgICAgY2FtZWxpemVkS2V5LFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IGF0dHJzW2tleV0pIHtcbiAgICAgICAgICAgIGF0dHJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGhhc0F0dHJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChzZXRGdWxsUHJvcHMoaW5zdGFuY2UsIHJhd1Byb3BzLCBwcm9wcywgYXR0cnMpKSB7XG4gICAgICBoYXNBdHRyc0NoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQga2ViYWJLZXk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmF3Q3VycmVudFByb3BzKSB7XG4gICAgICBpZiAoIXJhd1Byb3BzIHx8IC8vIGZvciBjYW1lbENhc2VcbiAgICAgICFoYXNPd24ocmF3UHJvcHMsIGtleSkgJiYgLy8gaXQncyBwb3NzaWJsZSB0aGUgb3JpZ2luYWwgcHJvcHMgd2FzIHBhc3NlZCBpbiBhcyBrZWJhYi1jYXNlXG4gICAgICAvLyBhbmQgY29udmVydGVkIHRvIGNhbWVsQ2FzZSAoIzk1NSlcbiAgICAgICgoa2ViYWJLZXkgPSBoeXBoZW5hdGUoa2V5KSkgPT09IGtleSB8fCAhaGFzT3duKHJhd1Byb3BzLCBrZWJhYktleSkpKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKHJhd1ByZXZQcm9wcyAmJiAvLyBmb3IgY2FtZWxDYXNlXG4gICAgICAgICAgKHJhd1ByZXZQcm9wc1trZXldICE9PSB2b2lkIDAgfHwgLy8gZm9yIGtlYmFiLWNhc2VcbiAgICAgICAgICByYXdQcmV2UHJvcHNba2ViYWJLZXldICE9PSB2b2lkIDApKSB7XG4gICAgICAgICAgICBwcm9wc1trZXldID0gcmVzb2x2ZVByb3BWYWx1ZShcbiAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgcmF3Q3VycmVudFByb3BzLFxuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhdHRycyAhPT0gcmF3Q3VycmVudFByb3BzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoIXJhd1Byb3BzIHx8ICFoYXNPd24ocmF3UHJvcHMsIGtleSkgJiYgdHJ1ZSkge1xuICAgICAgICAgIGRlbGV0ZSBhdHRyc1trZXldO1xuICAgICAgICAgIGhhc0F0dHJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGhhc0F0dHJzQ2hhbmdlZCkge1xuICAgIHRyaWdnZXIoaW5zdGFuY2UuYXR0cnMsIFwic2V0XCIsIFwiXCIpO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhyYXdQcm9wcyB8fCB7fSwgcHJvcHMsIGluc3RhbmNlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0RnVsbFByb3BzKGluc3RhbmNlLCByYXdQcm9wcywgcHJvcHMsIGF0dHJzKSB7XG4gIGNvbnN0IFtvcHRpb25zLCBuZWVkQ2FzdEtleXNdID0gaW5zdGFuY2UucHJvcHNPcHRpb25zO1xuICBsZXQgaGFzQXR0cnNDaGFuZ2VkID0gZmFsc2U7XG4gIGxldCByYXdDYXN0VmFsdWVzO1xuICBpZiAocmF3UHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcmF3UHJvcHMpIHtcbiAgICAgIGlmIChpc1Jlc2VydmVkUHJvcChrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSByYXdQcm9wc1trZXldO1xuICAgICAgbGV0IGNhbWVsS2V5O1xuICAgICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsIGNhbWVsS2V5ID0gY2FtZWxpemUoa2V5KSkpIHtcbiAgICAgICAgaWYgKCFuZWVkQ2FzdEtleXMgfHwgIW5lZWRDYXN0S2V5cy5pbmNsdWRlcyhjYW1lbEtleSkpIHtcbiAgICAgICAgICBwcm9wc1tjYW1lbEtleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAocmF3Q2FzdFZhbHVlcyB8fCAocmF3Q2FzdFZhbHVlcyA9IHt9KSlbY2FtZWxLZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzRW1pdExpc3RlbmVyKGluc3RhbmNlLmVtaXRzT3B0aW9ucywga2V5KSkge1xuICAgICAgICBpZiAoIShrZXkgaW4gYXR0cnMpIHx8IHZhbHVlICE9PSBhdHRyc1trZXldKSB7XG4gICAgICAgICAgYXR0cnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIGhhc0F0dHJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG5lZWRDYXN0S2V5cykge1xuICAgIGNvbnN0IHJhd0N1cnJlbnRQcm9wcyA9IHRvUmF3KHByb3BzKTtcbiAgICBjb25zdCBjYXN0VmFsdWVzID0gcmF3Q2FzdFZhbHVlcyB8fCBFTVBUWV9PQko7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWVkQ2FzdEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IG5lZWRDYXN0S2V5c1tpXTtcbiAgICAgIHByb3BzW2tleV0gPSByZXNvbHZlUHJvcFZhbHVlKFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICByYXdDdXJyZW50UHJvcHMsXG4gICAgICAgIGtleSxcbiAgICAgICAgY2FzdFZhbHVlc1trZXldLFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgIWhhc093bihjYXN0VmFsdWVzLCBrZXkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaGFzQXR0cnNDaGFuZ2VkO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVByb3BWYWx1ZShvcHRpb25zLCBwcm9wcywga2V5LCB2YWx1ZSwgaW5zdGFuY2UsIGlzQWJzZW50KSB7XG4gIGNvbnN0IG9wdCA9IG9wdGlvbnNba2V5XTtcbiAgaWYgKG9wdCAhPSBudWxsKSB7XG4gICAgY29uc3QgaGFzRGVmYXVsdCA9IGhhc093bihvcHQsIFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoaGFzRGVmYXVsdCAmJiB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBvcHQuZGVmYXVsdDtcbiAgICAgIGlmIChvcHQudHlwZSAhPT0gRnVuY3Rpb24gJiYgIW9wdC5za2lwRmFjdG9yeSAmJiBpc0Z1bmN0aW9uKGRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwcm9wc0RlZmF1bHRzIH0gPSBpbnN0YW5jZTtcbiAgICAgICAgaWYgKGtleSBpbiBwcm9wc0RlZmF1bHRzKSB7XG4gICAgICAgICAgdmFsdWUgPSBwcm9wc0RlZmF1bHRzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzZXQgPSBzZXRDdXJyZW50SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgICAgICAgIHZhbHVlID0gcHJvcHNEZWZhdWx0c1trZXldID0gZGVmYXVsdFZhbHVlLmNhbGwoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvcHNcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGluc3RhbmNlLmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmNlLl9zZXRQcm9wKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0WzAgLyogc2hvdWxkQ2FzdCAqL10pIHtcbiAgICAgIGlmIChpc0Fic2VudCAmJiAhaGFzRGVmYXVsdCkge1xuICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChvcHRbMSAvKiBzaG91bGRDYXN0VHJ1ZSAqL10gJiYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkpIHtcbiAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5jb25zdCBtaXhpblByb3BzQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzT3B0aW9ucyhjb21wLCBhcHBDb250ZXh0LCBhc01peGluID0gZmFsc2UpIHtcbiAgY29uc3QgY2FjaGUgPSBfX1ZVRV9PUFRJT05TX0FQSV9fICYmIGFzTWl4aW4gPyBtaXhpblByb3BzQ2FjaGUgOiBhcHBDb250ZXh0LnByb3BzQ2FjaGU7XG4gIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChjb21wKTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgY29uc3QgcmF3ID0gY29tcC5wcm9wcztcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xuICBjb25zdCBuZWVkQ2FzdEtleXMgPSBbXTtcbiAgbGV0IGhhc0V4dGVuZHMgPSBmYWxzZTtcbiAgaWYgKF9fVlVFX09QVElPTlNfQVBJX18gJiYgIWlzRnVuY3Rpb24oY29tcCkpIHtcbiAgICBjb25zdCBleHRlbmRQcm9wcyA9IChyYXcyKSA9PiB7XG4gICAgICBoYXNFeHRlbmRzID0gdHJ1ZTtcbiAgICAgIGNvbnN0IFtwcm9wcywga2V5c10gPSBub3JtYWxpemVQcm9wc09wdGlvbnMocmF3MiwgYXBwQ29udGV4dCwgdHJ1ZSk7XG4gICAgICBleHRlbmQobm9ybWFsaXplZCwgcHJvcHMpO1xuICAgICAgaWYgKGtleXMpIG5lZWRDYXN0S2V5cy5wdXNoKC4uLmtleXMpO1xuICAgIH07XG4gICAgaWYgKCFhc01peGluICYmIGFwcENvbnRleHQubWl4aW5zLmxlbmd0aCkge1xuICAgICAgYXBwQ29udGV4dC5taXhpbnMuZm9yRWFjaChleHRlbmRQcm9wcyk7XG4gICAgfVxuICAgIGlmIChjb21wLmV4dGVuZHMpIHtcbiAgICAgIGV4dGVuZFByb3BzKGNvbXAuZXh0ZW5kcyk7XG4gICAgfVxuICAgIGlmIChjb21wLm1peGlucykge1xuICAgICAgY29tcC5taXhpbnMuZm9yRWFjaChleHRlbmRQcm9wcyk7XG4gICAgfVxuICB9XG4gIGlmICghcmF3ICYmICFoYXNFeHRlbmRzKSB7XG4gICAgaWYgKGlzT2JqZWN0KGNvbXApKSB7XG4gICAgICBjYWNoZS5zZXQoY29tcCwgRU1QVFlfQVJSKTtcbiAgICB9XG4gICAgcmV0dXJuIEVNUFRZX0FSUjtcbiAgfVxuICBpZiAoaXNBcnJheShyYXcpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpc1N0cmluZyhyYXdbaV0pKSB7XG4gICAgICAgIHdhcm4kMShgcHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LmAsIHJhd1tpXSk7XG4gICAgICB9XG4gICAgICBjb25zdCBub3JtYWxpemVkS2V5ID0gY2FtZWxpemUocmF3W2ldKTtcbiAgICAgIGlmICh2YWxpZGF0ZVByb3BOYW1lKG5vcm1hbGl6ZWRLZXkpKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbbm9ybWFsaXplZEtleV0gPSBFTVBUWV9PQko7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJhdykge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpc09iamVjdChyYXcpKSB7XG4gICAgICB3YXJuJDEoYGludmFsaWQgcHJvcHMgb3B0aW9uc2AsIHJhdyk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHJhdykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICBpZiAodmFsaWRhdGVQcm9wTmFtZShub3JtYWxpemVkS2V5KSkge1xuICAgICAgICBjb25zdCBvcHQgPSByYXdba2V5XTtcbiAgICAgICAgY29uc3QgcHJvcCA9IG5vcm1hbGl6ZWRbbm9ybWFsaXplZEtleV0gPSBpc0FycmF5KG9wdCkgfHwgaXNGdW5jdGlvbihvcHQpID8geyB0eXBlOiBvcHQgfSA6IGV4dGVuZCh7fSwgb3B0KTtcbiAgICAgICAgY29uc3QgcHJvcFR5cGUgPSBwcm9wLnR5cGU7XG4gICAgICAgIGxldCBzaG91bGRDYXN0ID0gZmFsc2U7XG4gICAgICAgIGxldCBzaG91bGRDYXN0VHJ1ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0FycmF5KHByb3BUeXBlKSkge1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9wVHlwZS5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwcm9wVHlwZVtpbmRleF07XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IGlzRnVuY3Rpb24odHlwZSkgJiYgdHlwZS5uYW1lO1xuICAgICAgICAgICAgaWYgKHR5cGVOYW1lID09PSBcIkJvb2xlYW5cIikge1xuICAgICAgICAgICAgICBzaG91bGRDYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVOYW1lID09PSBcIlN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHNob3VsZENhc3RUcnVlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3VsZENhc3QgPSBpc0Z1bmN0aW9uKHByb3BUeXBlKSAmJiBwcm9wVHlwZS5uYW1lID09PSBcIkJvb2xlYW5cIjtcbiAgICAgICAgfVxuICAgICAgICBwcm9wWzAgLyogc2hvdWxkQ2FzdCAqL10gPSBzaG91bGRDYXN0O1xuICAgICAgICBwcm9wWzEgLyogc2hvdWxkQ2FzdFRydWUgKi9dID0gc2hvdWxkQ2FzdFRydWU7XG4gICAgICAgIGlmIChzaG91bGRDYXN0IHx8IGhhc093bihwcm9wLCBcImRlZmF1bHRcIikpIHtcbiAgICAgICAgICBuZWVkQ2FzdEtleXMucHVzaChub3JtYWxpemVkS2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCByZXMgPSBbbm9ybWFsaXplZCwgbmVlZENhc3RLZXlzXTtcbiAgaWYgKGlzT2JqZWN0KGNvbXApKSB7XG4gICAgY2FjaGUuc2V0KGNvbXAsIHJlcyk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcE5hbWUoa2V5KSB7XG4gIGlmIChrZXlbMF0gIT09IFwiJFwiICYmICFpc1Jlc2VydmVkUHJvcChrZXkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHdhcm4kMShgSW52YWxpZCBwcm9wIG5hbWU6IFwiJHtrZXl9XCIgaXMgYSByZXNlcnZlZCBwcm9wZXJ0eS5gKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRUeXBlKGN0b3IpIHtcbiAgaWYgKGN0b3IgPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIH1cbiAgaWYgKHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gY3Rvci5uYW1lIHx8IFwiXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGN0b3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBuYW1lID0gY3Rvci5jb25zdHJ1Y3RvciAmJiBjdG9yLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUgfHwgXCJcIjtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMocmF3UHJvcHMsIHByb3BzLCBpbnN0YW5jZSkge1xuICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IHRvUmF3KHByb3BzKTtcbiAgY29uc3Qgb3B0aW9ucyA9IGluc3RhbmNlLnByb3BzT3B0aW9uc1swXTtcbiAgY29uc3QgY2FtZWxpemVQcm9wc0tleSA9IE9iamVjdC5rZXlzKHJhd1Byb3BzKS5tYXAoKGtleSkgPT4gY2FtZWxpemUoa2V5KSk7XG4gIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0ID0gb3B0aW9uc1trZXldO1xuICAgIGlmIChvcHQgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFsaWRhdGVQcm9wKFxuICAgICAga2V5LFxuICAgICAgcmVzb2x2ZWRWYWx1ZXNba2V5XSxcbiAgICAgIG9wdCxcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkocmVzb2x2ZWRWYWx1ZXMpIDogcmVzb2x2ZWRWYWx1ZXMsXG4gICAgICAhY2FtZWxpemVQcm9wc0tleS5pbmNsdWRlcyhrZXkpXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wKG5hbWUsIHZhbHVlLCBwcm9wLCBwcm9wcywgaXNBYnNlbnQpIHtcbiAgY29uc3QgeyB0eXBlLCByZXF1aXJlZCwgdmFsaWRhdG9yLCBza2lwQ2hlY2sgfSA9IHByb3A7XG4gIGlmIChyZXF1aXJlZCAmJiBpc0Fic2VudCkge1xuICAgIHdhcm4kMSgnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFyZXF1aXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZSAhPSBudWxsICYmIHR5cGUgIT09IHRydWUgJiYgIXNraXBDaGVjaykge1xuICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgdHlwZXMgPSBpc0FycmF5KHR5cGUpID8gdHlwZSA6IFt0eXBlXTtcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGggJiYgIWlzVmFsaWQ7IGkrKykge1xuICAgICAgY29uc3QgeyB2YWxpZCwgZXhwZWN0ZWRUeXBlIH0gPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlc1tpXSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goZXhwZWN0ZWRUeXBlIHx8IFwiXCIpO1xuICAgICAgaXNWYWxpZCA9IHZhbGlkO1xuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHdhcm4kMShnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKHZhbGlkYXRvciAmJiAhdmFsaWRhdG9yKHZhbHVlLCBwcm9wcykpIHtcbiAgICB3YXJuJDEoJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nKTtcbiAgfVxufVxuY29uc3QgaXNTaW1wbGVUeXBlID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIFwiU3RyaW5nLE51bWJlcixCb29sZWFuLEZ1bmN0aW9uLFN5bWJvbCxCaWdJbnRcIlxuKTtcbmZ1bmN0aW9uIGFzc2VydFR5cGUodmFsdWUsIHR5cGUpIHtcbiAgbGV0IHZhbGlkO1xuICBjb25zdCBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoZXhwZWN0ZWRUeXBlID09PSBcIm51bGxcIikge1xuICAgIHZhbGlkID0gdmFsdWUgPT09IG51bGw7XG4gIH0gZWxzZSBpZiAoaXNTaW1wbGVUeXBlKGV4cGVjdGVkVHlwZSkpIHtcbiAgICBjb25zdCB0ID0gdHlwZW9mIHZhbHVlO1xuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcIk9iamVjdFwiKSB7XG4gICAgdmFsaWQgPSBpc09iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcIkFycmF5XCIpIHtcbiAgICB2YWxpZCA9IGlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlXG4gIH07XG59XG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGBQcm9wIHR5cGUgW10gZm9yIHByb3AgXCIke25hbWV9XCIgd29uJ3QgbWF0Y2ggYW55dGhpbmcuIERpZCB5b3UgbWVhbiB0byB1c2UgdHlwZSBBcnJheSBpbnN0ZWFkP2A7XG4gIH1cbiAgbGV0IG1lc3NhZ2UgPSBgSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIiR7bmFtZX1cIi4gRXhwZWN0ZWQgJHtleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKFwiIHwgXCIpfWA7XG4gIGNvbnN0IGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gIGNvbnN0IHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIGNvbnN0IGV4cGVjdGVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpO1xuICBjb25zdCByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTtcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBgIHdpdGggdmFsdWUgJHtleHBlY3RlZFZhbHVlfWA7XG4gIH1cbiAgbWVzc2FnZSArPSBgLCBnb3QgJHtyZWNlaXZlZFR5cGV9IGA7XG4gIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gYHdpdGggdmFsdWUgJHtyZWNlaXZlZFZhbHVlfS5gO1xuICB9XG4gIHJldHVybiBtZXNzYWdlO1xufVxuZnVuY3Rpb24gc3R5bGVWYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJTdHJpbmdcIikge1xuICAgIHJldHVybiBgXCIke3ZhbHVlfVwiYDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk51bWJlclwiKSB7XG4gICAgcmV0dXJuIGAke051bWJlcih2YWx1ZSl9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgfVxufVxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlKHR5cGUpIHtcbiAgY29uc3QgZXhwbGljaXRUeXBlcyA9IFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIl07XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoKGVsZW0pID0+IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbSk7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW4oLi4uYXJncykge1xuICByZXR1cm4gYXJncy5zb21lKChlbGVtKSA9PiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09IFwiYm9vbGVhblwiKTtcbn1cblxuY29uc3QgaXNJbnRlcm5hbEtleSA9IChrZXkpID0+IGtleVswXSA9PT0gXCJfXCIgfHwga2V5ID09PSBcIiRzdGFibGVcIjtcbmNvbnN0IG5vcm1hbGl6ZVNsb3RWYWx1ZSA9ICh2YWx1ZSkgPT4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVk5vZGUpIDogW25vcm1hbGl6ZVZOb2RlKHZhbHVlKV07XG5jb25zdCBub3JtYWxpemVTbG90ID0gKGtleSwgcmF3U2xvdCwgY3R4KSA9PiB7XG4gIGlmIChyYXdTbG90Ll9uKSB7XG4gICAgcmV0dXJuIHJhd1Nsb3Q7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZCA9IHdpdGhDdHgoKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjdXJyZW50SW5zdGFuY2UgJiYgKCFjdHggfHwgY3R4LnJvb3QgPT09IGN1cnJlbnRJbnN0YW5jZS5yb290KSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgU2xvdCBcIiR7a2V5fVwiIGludm9rZWQgb3V0c2lkZSBvZiB0aGUgcmVuZGVyIGZ1bmN0aW9uOiB0aGlzIHdpbGwgbm90IHRyYWNrIGRlcGVuZGVuY2llcyB1c2VkIGluIHRoZSBzbG90LiBJbnZva2UgdGhlIHNsb3QgZnVuY3Rpb24gaW5zaWRlIHRoZSByZW5kZXIgZnVuY3Rpb24gaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplU2xvdFZhbHVlKHJhd1Nsb3QoLi4uYXJncykpO1xuICB9LCBjdHgpO1xuICBub3JtYWxpemVkLl9jID0gZmFsc2U7XG4gIHJldHVybiBub3JtYWxpemVkO1xufTtcbmNvbnN0IG5vcm1hbGl6ZU9iamVjdFNsb3RzID0gKHJhd1Nsb3RzLCBzbG90cywgaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgY3R4ID0gcmF3U2xvdHMuX2N0eDtcbiAgZm9yIChjb25zdCBrZXkgaW4gcmF3U2xvdHMpIHtcbiAgICBpZiAoaXNJbnRlcm5hbEtleShrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IHJhd1Nsb3RzW2tleV07XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICBzbG90c1trZXldID0gbm9ybWFsaXplU2xvdChrZXksIHZhbHVlLCBjdHgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdHJ1ZSkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYE5vbi1mdW5jdGlvbiB2YWx1ZSBlbmNvdW50ZXJlZCBmb3Igc2xvdCBcIiR7a2V5fVwiLiBQcmVmZXIgZnVuY3Rpb24gc2xvdHMgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xvdFZhbHVlKHZhbHVlKTtcbiAgICAgIHNsb3RzW2tleV0gPSAoKSA9PiBub3JtYWxpemVkO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IG5vcm1hbGl6ZVZOb2RlU2xvdHMgPSAoaW5zdGFuY2UsIGNoaWxkcmVuKSA9PiB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpc0tlZXBBbGl2ZShpbnN0YW5jZS52bm9kZSkgJiYgdHJ1ZSkge1xuICAgIHdhcm4kMShcbiAgICAgIGBOb24tZnVuY3Rpb24gdmFsdWUgZW5jb3VudGVyZWQgZm9yIGRlZmF1bHQgc2xvdC4gUHJlZmVyIGZ1bmN0aW9uIHNsb3RzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuYFxuICAgICk7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNsb3RWYWx1ZShjaGlsZHJlbik7XG4gIGluc3RhbmNlLnNsb3RzLmRlZmF1bHQgPSAoKSA9PiBub3JtYWxpemVkO1xufTtcbmNvbnN0IGFzc2lnblNsb3RzID0gKHNsb3RzLCBjaGlsZHJlbiwgb3B0aW1pemVkKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIGNoaWxkcmVuKSB7XG4gICAgaWYgKG9wdGltaXplZCB8fCBrZXkgIT09IFwiX1wiKSB7XG4gICAgICBzbG90c1trZXldID0gY2hpbGRyZW5ba2V5XTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBpbml0U2xvdHMgPSAoaW5zdGFuY2UsIGNoaWxkcmVuLCBvcHRpbWl6ZWQpID0+IHtcbiAgY29uc3Qgc2xvdHMgPSBpbnN0YW5jZS5zbG90cyA9IGNyZWF0ZUludGVybmFsT2JqZWN0KCk7XG4gIGlmIChpbnN0YW5jZS52bm9kZS5zaGFwZUZsYWcgJiAzMikge1xuICAgIGNvbnN0IHR5cGUgPSBjaGlsZHJlbi5fO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBhc3NpZ25TbG90cyhzbG90cywgY2hpbGRyZW4sIG9wdGltaXplZCk7XG4gICAgICBpZiAob3B0aW1pemVkKSB7XG4gICAgICAgIGRlZihzbG90cywgXCJfXCIsIHR5cGUsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWxpemVPYmplY3RTbG90cyhjaGlsZHJlbiwgc2xvdHMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIG5vcm1hbGl6ZVZOb2RlU2xvdHMoaW5zdGFuY2UsIGNoaWxkcmVuKTtcbiAgfVxufTtcbmNvbnN0IHVwZGF0ZVNsb3RzID0gKGluc3RhbmNlLCBjaGlsZHJlbiwgb3B0aW1pemVkKSA9PiB7XG4gIGNvbnN0IHsgdm5vZGUsIHNsb3RzIH0gPSBpbnN0YW5jZTtcbiAgbGV0IG5lZWREZWxldGlvbkNoZWNrID0gdHJ1ZTtcbiAgbGV0IGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IEVNUFRZX09CSjtcbiAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDMyKSB7XG4gICAgY29uc3QgdHlwZSA9IGNoaWxkcmVuLl87XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcpIHtcbiAgICAgICAgYXNzaWduU2xvdHMoc2xvdHMsIGNoaWxkcmVuLCBvcHRpbWl6ZWQpO1xuICAgICAgICB0cmlnZ2VyKGluc3RhbmNlLCBcInNldFwiLCBcIiRzbG90c1wiKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW1pemVkICYmIHR5cGUgPT09IDEpIHtcbiAgICAgICAgbmVlZERlbGV0aW9uQ2hlY2sgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnblNsb3RzKHNsb3RzLCBjaGlsZHJlbiwgb3B0aW1pemVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmVlZERlbGV0aW9uQ2hlY2sgPSAhY2hpbGRyZW4uJHN0YWJsZTtcbiAgICAgIG5vcm1hbGl6ZU9iamVjdFNsb3RzKGNoaWxkcmVuLCBzbG90cyk7XG4gICAgfVxuICAgIGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgbm9ybWFsaXplVk5vZGVTbG90cyhpbnN0YW5jZSwgY2hpbGRyZW4pO1xuICAgIGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IHsgZGVmYXVsdDogMSB9O1xuICB9XG4gIGlmIChuZWVkRGVsZXRpb25DaGVjaykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICBpZiAoIWlzSW50ZXJuYWxLZXkoa2V5KSAmJiBkZWxldGlvbkNvbXBhcmlzb25UYXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBzbG90c1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxubGV0IHN1cHBvcnRlZDtcbmxldCBwZXJmO1xuZnVuY3Rpb24gc3RhcnRNZWFzdXJlKGluc3RhbmNlLCB0eXBlKSB7XG4gIGlmIChpbnN0YW5jZS5hcHBDb250ZXh0LmNvbmZpZy5wZXJmb3JtYW5jZSAmJiBpc1N1cHBvcnRlZCgpKSB7XG4gICAgcGVyZi5tYXJrKGB2dWUtJHt0eXBlfS0ke2luc3RhbmNlLnVpZH1gKTtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICBkZXZ0b29sc1BlcmZTdGFydChpbnN0YW5jZSwgdHlwZSwgaXNTdXBwb3J0ZWQoKSA/IHBlcmYubm93KCkgOiBEYXRlLm5vdygpKTtcbiAgfVxufVxuZnVuY3Rpb24gZW5kTWVhc3VyZShpbnN0YW5jZSwgdHlwZSkge1xuICBpZiAoaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcucGVyZm9ybWFuY2UgJiYgaXNTdXBwb3J0ZWQoKSkge1xuICAgIGNvbnN0IHN0YXJ0VGFnID0gYHZ1ZS0ke3R5cGV9LSR7aW5zdGFuY2UudWlkfWA7XG4gICAgY29uc3QgZW5kVGFnID0gc3RhcnRUYWcgKyBgOmVuZGA7XG4gICAgcGVyZi5tYXJrKGVuZFRhZyk7XG4gICAgcGVyZi5tZWFzdXJlKFxuICAgICAgYDwke2Zvcm1hdENvbXBvbmVudE5hbWUoaW5zdGFuY2UsIGluc3RhbmNlLnR5cGUpfT4gJHt0eXBlfWAsXG4gICAgICBzdGFydFRhZyxcbiAgICAgIGVuZFRhZ1xuICAgICk7XG4gICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICBkZXZ0b29sc1BlcmZFbmQoaW5zdGFuY2UsIHR5cGUsIGlzU3VwcG9ydGVkKCkgPyBwZXJmLm5vdygpIDogRGF0ZS5ub3coKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICBpZiAoc3VwcG9ydGVkICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gc3VwcG9ydGVkO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgcGVyZiA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gc3VwcG9ydGVkO1xufVxuXG5mdW5jdGlvbiBpbml0RmVhdHVyZUZsYWdzKCkge1xuICBjb25zdCBuZWVkV2FybiA9IFtdO1xuICBpZiAodHlwZW9mIF9fVlVFX09QVElPTlNfQVBJX18gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBuZWVkV2Fybi5wdXNoKGBfX1ZVRV9PUFRJT05TX0FQSV9fYCk7XG4gICAgZ2V0R2xvYmFsVGhpcygpLl9fVlVFX09QVElPTlNfQVBJX18gPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgX19WVUVfUFJPRF9ERVZUT09MU19fICE9PSBcImJvb2xlYW5cIikge1xuICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgbmVlZFdhcm4ucHVzaChgX19WVUVfUFJPRF9ERVZUT09MU19fYCk7XG4gICAgZ2V0R2xvYmFsVGhpcygpLl9fVlVFX1BST0RfREVWVE9PTFNfXyA9IGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fICE9PSBcImJvb2xlYW5cIikge1xuICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgbmVlZFdhcm4ucHVzaChgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fYCk7XG4gICAgZ2V0R2xvYmFsVGhpcygpLl9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXyA9IGZhbHNlO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIG5lZWRXYXJuLmxlbmd0aCkge1xuICAgIGNvbnN0IG11bHRpID0gbmVlZFdhcm4ubGVuZ3RoID4gMTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgRmVhdHVyZSBmbGFnJHttdWx0aSA/IGBzYCA6IGBgfSAke25lZWRXYXJuLmpvaW4oXCIsIFwiKX0gJHttdWx0aSA/IGBhcmVgIDogYGlzYH0gbm90IGV4cGxpY2l0bHkgZGVmaW5lZC4gWW91IGFyZSBydW5uaW5nIHRoZSBlc20tYnVuZGxlciBidWlsZCBvZiBWdWUsIHdoaWNoIGV4cGVjdHMgdGhlc2UgY29tcGlsZS10aW1lIGZlYXR1cmUgZmxhZ3MgdG8gYmUgZ2xvYmFsbHkgaW5qZWN0ZWQgdmlhIHRoZSBidW5kbGVyIGNvbmZpZyBpbiBvcmRlciB0byBnZXQgYmV0dGVyIHRyZWUtc2hha2luZyBpbiB0aGUgcHJvZHVjdGlvbiBidW5kbGUuXG5cbkZvciBtb3JlIGRldGFpbHMsIHNlZSBodHRwczovL2xpbmsudnVlanMub3JnL2ZlYXR1cmUtZmxhZ3MuYFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgcXVldWVQb3N0UmVuZGVyRWZmZWN0ID0gcXVldWVFZmZlY3RXaXRoU3VzcGVuc2UgO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXIob3B0aW9ucykge1xuICByZXR1cm4gYmFzZUNyZWF0ZVJlbmRlcmVyKG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gY3JlYXRlSHlkcmF0aW9uUmVuZGVyZXIob3B0aW9ucykge1xuICByZXR1cm4gYmFzZUNyZWF0ZVJlbmRlcmVyKG9wdGlvbnMsIGNyZWF0ZUh5ZHJhdGlvbkZ1bmN0aW9ucyk7XG59XG5mdW5jdGlvbiBiYXNlQ3JlYXRlUmVuZGVyZXIob3B0aW9ucywgY3JlYXRlSHlkcmF0aW9uRm5zKSB7XG4gIHtcbiAgICBpbml0RmVhdHVyZUZsYWdzKCk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0ID0gZ2V0R2xvYmFsVGhpcygpO1xuICB0YXJnZXQuX19WVUVfXyA9IHRydWU7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykge1xuICAgIHNldERldnRvb2xzSG9vayQxKHRhcmdldC5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLCB0YXJnZXQpO1xuICB9XG4gIGNvbnN0IHtcbiAgICBpbnNlcnQ6IGhvc3RJbnNlcnQsXG4gICAgcmVtb3ZlOiBob3N0UmVtb3ZlLFxuICAgIHBhdGNoUHJvcDogaG9zdFBhdGNoUHJvcCxcbiAgICBjcmVhdGVFbGVtZW50OiBob3N0Q3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVUZXh0OiBob3N0Q3JlYXRlVGV4dCxcbiAgICBjcmVhdGVDb21tZW50OiBob3N0Q3JlYXRlQ29tbWVudCxcbiAgICBzZXRUZXh0OiBob3N0U2V0VGV4dCxcbiAgICBzZXRFbGVtZW50VGV4dDogaG9zdFNldEVsZW1lbnRUZXh0LFxuICAgIHBhcmVudE5vZGU6IGhvc3RQYXJlbnROb2RlLFxuICAgIG5leHRTaWJsaW5nOiBob3N0TmV4dFNpYmxpbmcsXG4gICAgc2V0U2NvcGVJZDogaG9zdFNldFNjb3BlSWQgPSBOT09QLFxuICAgIGluc2VydFN0YXRpY0NvbnRlbnQ6IGhvc3RJbnNlcnRTdGF0aWNDb250ZW50XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYXRjaCA9IChuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yID0gbnVsbCwgcGFyZW50Q29tcG9uZW50ID0gbnVsbCwgcGFyZW50U3VzcGVuc2UgPSBudWxsLCBuYW1lc3BhY2UgPSB2b2lkIDAsIHNsb3RTY29wZUlkcyA9IG51bGwsIG9wdGltaXplZCA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgaXNIbXJVcGRhdGluZyA/IGZhbHNlIDogISFuMi5keW5hbWljQ2hpbGRyZW4pID0+IHtcbiAgICBpZiAobjEgPT09IG4yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuMSAmJiAhaXNTYW1lVk5vZGVUeXBlKG4xLCBuMikpIHtcbiAgICAgIGFuY2hvciA9IGdldE5leHRIb3N0Tm9kZShuMSk7XG4gICAgICB1bm1vdW50KG4xLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCB0cnVlKTtcbiAgICAgIG4xID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG4yLnBhdGNoRmxhZyA9PT0gLTIpIHtcbiAgICAgIG9wdGltaXplZCA9IGZhbHNlO1xuICAgICAgbjIuZHluYW1pY0NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyB0eXBlLCByZWYsIHNoYXBlRmxhZyB9ID0gbjI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFRleHQ6XG4gICAgICAgIHByb2Nlc3NUZXh0KG4xLCBuMiwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ29tbWVudDpcbiAgICAgICAgcHJvY2Vzc0NvbW1lbnROb2RlKG4xLCBuMiwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RhdGljOlxuICAgICAgICBpZiAobjEgPT0gbnVsbCkge1xuICAgICAgICAgIG1vdW50U3RhdGljTm9kZShuMiwgY29udGFpbmVyLCBhbmNob3IsIG5hbWVzcGFjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHBhdGNoU3RhdGljTm9kZShuMSwgbjIsIGNvbnRhaW5lciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRnJhZ21lbnQ6XG4gICAgICAgIHByb2Nlc3NGcmFnbWVudChcbiAgICAgICAgICBuMSxcbiAgICAgICAgICBuMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzaGFwZUZsYWcgJiAxKSB7XG4gICAgICAgICAgcHJvY2Vzc0VsZW1lbnQoXG4gICAgICAgICAgICBuMSxcbiAgICAgICAgICAgIG4yLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNoYXBlRmxhZyAmIDYpIHtcbiAgICAgICAgICBwcm9jZXNzQ29tcG9uZW50KFxuICAgICAgICAgICAgbjEsXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGFwZUZsYWcgJiA2NCkge1xuICAgICAgICAgIHR5cGUucHJvY2VzcyhcbiAgICAgICAgICAgIG4xLFxuICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZCxcbiAgICAgICAgICAgIGludGVybmFsc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICAgICAgdHlwZS5wcm9jZXNzKFxuICAgICAgICAgICAgbjEsXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkLFxuICAgICAgICAgICAgaW50ZXJuYWxzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgd2FybiQxKFwiSW52YWxpZCBWTm9kZSB0eXBlOlwiLCB0eXBlLCBgKCR7dHlwZW9mIHR5cGV9KWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWYgIT0gbnVsbCAmJiBwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgIHNldFJlZihyZWYsIG4xICYmIG4xLnJlZiwgcGFyZW50U3VzcGVuc2UsIG4yIHx8IG4xLCAhbjIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1RleHQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvcikgPT4ge1xuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBob3N0SW5zZXJ0KFxuICAgICAgICBuMi5lbCA9IGhvc3RDcmVhdGVUZXh0KG4yLmNoaWxkcmVuKSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBhbmNob3JcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsID0gbjIuZWwgPSBuMS5lbDtcbiAgICAgIGlmIChuMi5jaGlsZHJlbiAhPT0gbjEuY2hpbGRyZW4pIHtcbiAgICAgICAgaG9zdFNldFRleHQoZWwsIG4yLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NDb21tZW50Tm9kZSA9IChuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yKSA9PiB7XG4gICAgaWYgKG4xID09IG51bGwpIHtcbiAgICAgIGhvc3RJbnNlcnQoXG4gICAgICAgIG4yLmVsID0gaG9zdENyZWF0ZUNvbW1lbnQobjIuY2hpbGRyZW4gfHwgXCJcIiksXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYW5jaG9yXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuMi5lbCA9IG4xLmVsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbW91bnRTdGF0aWNOb2RlID0gKG4yLCBjb250YWluZXIsIGFuY2hvciwgbmFtZXNwYWNlKSA9PiB7XG4gICAgW24yLmVsLCBuMi5hbmNob3JdID0gaG9zdEluc2VydFN0YXRpY0NvbnRlbnQoXG4gICAgICBuMi5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGFuY2hvcixcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIG4yLmVsLFxuICAgICAgbjIuYW5jaG9yXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgcGF0Y2hTdGF0aWNOb2RlID0gKG4xLCBuMiwgY29udGFpbmVyLCBuYW1lc3BhY2UpID0+IHtcbiAgICBpZiAobjIuY2hpbGRyZW4gIT09IG4xLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBhbmNob3IgPSBob3N0TmV4dFNpYmxpbmcobjEuYW5jaG9yKTtcbiAgICAgIHJlbW92ZVN0YXRpY05vZGUobjEpO1xuICAgICAgW24yLmVsLCBuMi5hbmNob3JdID0gaG9zdEluc2VydFN0YXRpY0NvbnRlbnQoXG4gICAgICAgIG4yLmNoaWxkcmVuLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgbmFtZXNwYWNlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuMi5lbCA9IG4xLmVsO1xuICAgICAgbjIuYW5jaG9yID0gbjEuYW5jaG9yO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbW92ZVN0YXRpY05vZGUgPSAoeyBlbCwgYW5jaG9yIH0sIGNvbnRhaW5lciwgbmV4dFNpYmxpbmcpID0+IHtcbiAgICBsZXQgbmV4dDtcbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGFuY2hvcikge1xuICAgICAgbmV4dCA9IGhvc3ROZXh0U2libGluZyhlbCk7XG4gICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIG5leHRTaWJsaW5nKTtcbiAgICAgIGVsID0gbmV4dDtcbiAgICB9XG4gICAgaG9zdEluc2VydChhbmNob3IsIGNvbnRhaW5lciwgbmV4dFNpYmxpbmcpO1xuICB9O1xuICBjb25zdCByZW1vdmVTdGF0aWNOb2RlID0gKHsgZWwsIGFuY2hvciB9KSA9PiB7XG4gICAgbGV0IG5leHQ7XG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBhbmNob3IpIHtcbiAgICAgIG5leHQgPSBob3N0TmV4dFNpYmxpbmcoZWwpO1xuICAgICAgaG9zdFJlbW92ZShlbCk7XG4gICAgICBlbCA9IG5leHQ7XG4gICAgfVxuICAgIGhvc3RSZW1vdmUoYW5jaG9yKTtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGlmIChuMi50eXBlID09PSBcInN2Z1wiKSB7XG4gICAgICBuYW1lc3BhY2UgPSBcInN2Z1wiO1xuICAgIH0gZWxzZSBpZiAobjIudHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgIG5hbWVzcGFjZSA9IFwibWF0aG1sXCI7XG4gICAgfVxuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBtb3VudEVsZW1lbnQoXG4gICAgICAgIG4yLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0Y2hFbGVtZW50KFxuICAgICAgICBuMSxcbiAgICAgICAgbjIsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBtb3VudEVsZW1lbnQgPSAodm5vZGUsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgbGV0IGVsO1xuICAgIGxldCB2bm9kZUhvb2s7XG4gICAgY29uc3QgeyBwcm9wcywgc2hhcGVGbGFnLCB0cmFuc2l0aW9uLCBkaXJzIH0gPSB2bm9kZTtcbiAgICBlbCA9IHZub2RlLmVsID0gaG9zdENyZWF0ZUVsZW1lbnQoXG4gICAgICB2bm9kZS50eXBlLFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgcHJvcHMgJiYgcHJvcHMuaXMsXG4gICAgICBwcm9wc1xuICAgICk7XG4gICAgaWYgKHNoYXBlRmxhZyAmIDgpIHtcbiAgICAgIGhvc3RTZXRFbGVtZW50VGV4dChlbCwgdm5vZGUuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgIG1vdW50Q2hpbGRyZW4oXG4gICAgICAgIHZub2RlLmNoaWxkcmVuLFxuICAgICAgICBlbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgcmVzb2x2ZUNoaWxkcmVuTmFtZXNwYWNlKHZub2RlLCBuYW1lc3BhY2UpLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGRpcnMpIHtcbiAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJjcmVhdGVkXCIpO1xuICAgIH1cbiAgICBzZXRTY29wZUlkKGVsLCB2bm9kZSwgdm5vZGUuc2NvcGVJZCwgc2xvdFNjb3BlSWRzLCBwYXJlbnRDb21wb25lbnQpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gXCJ2YWx1ZVwiICYmICFpc1Jlc2VydmVkUHJvcChrZXkpKSB7XG4gICAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwga2V5LCBudWxsLCBwcm9wc1trZXldLCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcInZhbHVlXCIgaW4gcHJvcHMpIHtcbiAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwgXCJ2YWx1ZVwiLCBudWxsLCBwcm9wcy52YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh2bm9kZUhvb2sgPSBwcm9wcy5vblZub2RlQmVmb3JlTW91bnQpIHtcbiAgICAgICAgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykge1xuICAgICAgZGVmKGVsLCBcIl9fdm5vZGVcIiwgdm5vZGUsIHRydWUpO1xuICAgICAgZGVmKGVsLCBcIl9fdnVlUGFyZW50Q29tcG9uZW50XCIsIHBhcmVudENvbXBvbmVudCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChkaXJzKSB7XG4gICAgICBpbnZva2VEaXJlY3RpdmVIb29rKHZub2RlLCBudWxsLCBwYXJlbnRDb21wb25lbnQsIFwiYmVmb3JlTW91bnRcIik7XG4gICAgfVxuICAgIGNvbnN0IG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzID0gbmVlZFRyYW5zaXRpb24ocGFyZW50U3VzcGVuc2UsIHRyYW5zaXRpb24pO1xuICAgIGlmIChuZWVkQ2FsbFRyYW5zaXRpb25Ib29rcykge1xuICAgICAgdHJhbnNpdGlvbi5iZWZvcmVFbnRlcihlbCk7XG4gICAgfVxuICAgIGhvc3RJbnNlcnQoZWwsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICBpZiAoKHZub2RlSG9vayA9IHByb3BzICYmIHByb3BzLm9uVm5vZGVNb3VudGVkKSB8fCBuZWVkQ2FsbFRyYW5zaXRpb25Ib29rcyB8fCBkaXJzKSB7XG4gICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2bm9kZUhvb2sgJiYgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgICAgIG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzICYmIHRyYW5zaXRpb24uZW50ZXIoZWwpO1xuICAgICAgICBkaXJzICYmIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJtb3VudGVkXCIpO1xuICAgICAgfSwgcGFyZW50U3VzcGVuc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0U2NvcGVJZCA9IChlbCwgdm5vZGUsIHNjb3BlSWQsIHNsb3RTY29wZUlkcywgcGFyZW50Q29tcG9uZW50KSA9PiB7XG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgIGhvc3RTZXRTY29wZUlkKGVsLCBzY29wZUlkKTtcbiAgICB9XG4gICAgaWYgKHNsb3RTY29wZUlkcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90U2NvcGVJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaG9zdFNldFNjb3BlSWQoZWwsIHNsb3RTY29wZUlkc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnRDb21wb25lbnQpIHtcbiAgICAgIGxldCBzdWJUcmVlID0gcGFyZW50Q29tcG9uZW50LnN1YlRyZWU7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBzdWJUcmVlLnBhdGNoRmxhZyA+IDAgJiYgc3ViVHJlZS5wYXRjaEZsYWcgJiAyMDQ4KSB7XG4gICAgICAgIHN1YlRyZWUgPSBmaWx0ZXJTaW5nbGVSb290KHN1YlRyZWUuY2hpbGRyZW4pIHx8IHN1YlRyZWU7XG4gICAgICB9XG4gICAgICBpZiAodm5vZGUgPT09IHN1YlRyZWUgfHwgaXNTdXNwZW5zZShzdWJUcmVlLnR5cGUpICYmIChzdWJUcmVlLnNzQ29udGVudCA9PT0gdm5vZGUgfHwgc3ViVHJlZS5zc0ZhbGxiYWNrID09PSB2bm9kZSkpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Vk5vZGUgPSBwYXJlbnRDb21wb25lbnQudm5vZGU7XG4gICAgICAgIHNldFNjb3BlSWQoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgcGFyZW50Vk5vZGUsXG4gICAgICAgICAgcGFyZW50Vk5vZGUuc2NvcGVJZCxcbiAgICAgICAgICBwYXJlbnRWTm9kZS5zbG90U2NvcGVJZHMsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LnBhcmVudFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgbW91bnRDaGlsZHJlbiA9IChjaGlsZHJlbiwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzLCBvcHRpbWl6ZWQsIHN0YXJ0ID0gMCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldID0gb3B0aW1pemVkID8gY2xvbmVJZk1vdW50ZWQoY2hpbGRyZW5baV0pIDogbm9ybWFsaXplVk5vZGUoY2hpbGRyZW5baV0pO1xuICAgICAgcGF0Y2goXG4gICAgICAgIG51bGwsXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdGNoRWxlbWVudCA9IChuMSwgbjIsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzLCBvcHRpbWl6ZWQpID0+IHtcbiAgICBjb25zdCBlbCA9IG4yLmVsID0gbjEuZWw7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9ERVZUT09MU19fKSB7XG4gICAgICBlbC5fX3Zub2RlID0gbjI7XG4gICAgfVxuICAgIGxldCB7IHBhdGNoRmxhZywgZHluYW1pY0NoaWxkcmVuLCBkaXJzIH0gPSBuMjtcbiAgICBwYXRjaEZsYWcgfD0gbjEucGF0Y2hGbGFnICYgMTY7XG4gICAgY29uc3Qgb2xkUHJvcHMgPSBuMS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgbmV3UHJvcHMgPSBuMi5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgbGV0IHZub2RlSG9vaztcbiAgICBwYXJlbnRDb21wb25lbnQgJiYgdG9nZ2xlUmVjdXJzZShwYXJlbnRDb21wb25lbnQsIGZhbHNlKTtcbiAgICBpZiAodm5vZGVIb29rID0gbmV3UHJvcHMub25Wbm9kZUJlZm9yZVVwZGF0ZSkge1xuICAgICAgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCBuMiwgbjEpO1xuICAgIH1cbiAgICBpZiAoZGlycykge1xuICAgICAgaW52b2tlRGlyZWN0aXZlSG9vayhuMiwgbjEsIHBhcmVudENvbXBvbmVudCwgXCJiZWZvcmVVcGRhdGVcIik7XG4gICAgfVxuICAgIHBhcmVudENvbXBvbmVudCAmJiB0b2dnbGVSZWN1cnNlKHBhcmVudENvbXBvbmVudCwgdHJ1ZSk7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgaXNIbXJVcGRhdGluZykge1xuICAgICAgcGF0Y2hGbGFnID0gMDtcbiAgICAgIG9wdGltaXplZCA9IGZhbHNlO1xuICAgICAgZHluYW1pY0NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG9sZFByb3BzLmlubmVySFRNTCAmJiBuZXdQcm9wcy5pbm5lckhUTUwgPT0gbnVsbCB8fCBvbGRQcm9wcy50ZXh0Q29udGVudCAmJiBuZXdQcm9wcy50ZXh0Q29udGVudCA9PSBudWxsKSB7XG4gICAgICBob3N0U2V0RWxlbWVudFRleHQoZWwsIFwiXCIpO1xuICAgIH1cbiAgICBpZiAoZHluYW1pY0NoaWxkcmVuKSB7XG4gICAgICBwYXRjaEJsb2NrQ2hpbGRyZW4oXG4gICAgICAgIG4xLmR5bmFtaWNDaGlsZHJlbixcbiAgICAgICAgZHluYW1pY0NoaWxkcmVuLFxuICAgICAgICBlbCxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgcmVzb2x2ZUNoaWxkcmVuTmFtZXNwYWNlKG4yLCBuYW1lc3BhY2UpLFxuICAgICAgICBzbG90U2NvcGVJZHNcbiAgICAgICk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICB0cmF2ZXJzZVN0YXRpY0NoaWxkcmVuKG4xLCBuMik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghb3B0aW1pemVkKSB7XG4gICAgICBwYXRjaENoaWxkcmVuKFxuICAgICAgICBuMSxcbiAgICAgICAgbjIsXG4gICAgICAgIGVsLFxuICAgICAgICBudWxsLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICByZXNvbHZlQ2hpbGRyZW5OYW1lc3BhY2UobjIsIG5hbWVzcGFjZSksXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwYXRjaEZsYWcgPiAwKSB7XG4gICAgICBpZiAocGF0Y2hGbGFnICYgMTYpIHtcbiAgICAgICAgcGF0Y2hQcm9wcyhlbCwgb2xkUHJvcHMsIG5ld1Byb3BzLCBwYXJlbnRDb21wb25lbnQsIG5hbWVzcGFjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0Y2hGbGFnICYgMikge1xuICAgICAgICAgIGlmIChvbGRQcm9wcy5jbGFzcyAhPT0gbmV3UHJvcHMuY2xhc3MpIHtcbiAgICAgICAgICAgIGhvc3RQYXRjaFByb3AoZWwsIFwiY2xhc3NcIiwgbnVsbCwgbmV3UHJvcHMuY2xhc3MsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRjaEZsYWcgJiA0KSB7XG4gICAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwgXCJzdHlsZVwiLCBvbGRQcm9wcy5zdHlsZSwgbmV3UHJvcHMuc3R5bGUsIG5hbWVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGNoRmxhZyAmIDgpIHtcbiAgICAgICAgICBjb25zdCBwcm9wc1RvVXBkYXRlID0gbjIuZHluYW1pY1Byb3BzO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHNUb1VwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcHJvcHNUb1VwZGF0ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBvbGRQcm9wc1trZXldO1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5ld1Byb3BzW2tleV07XG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gcHJldiB8fCBrZXkgPT09IFwidmFsdWVcIikge1xuICAgICAgICAgICAgICBob3N0UGF0Y2hQcm9wKGVsLCBrZXksIHByZXYsIG5leHQsIG5hbWVzcGFjZSwgcGFyZW50Q29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXRjaEZsYWcgJiAxKSB7XG4gICAgICAgIGlmIChuMS5jaGlsZHJlbiAhPT0gbjIuY2hpbGRyZW4pIHtcbiAgICAgICAgICBob3N0U2V0RWxlbWVudFRleHQoZWwsIG4yLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIW9wdGltaXplZCAmJiBkeW5hbWljQ2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgcGF0Y2hQcm9wcyhlbCwgb2xkUHJvcHMsIG5ld1Byb3BzLCBwYXJlbnRDb21wb25lbnQsIG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmICgodm5vZGVIb29rID0gbmV3UHJvcHMub25Wbm9kZVVwZGF0ZWQpIHx8IGRpcnMpIHtcbiAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZub2RlSG9vayAmJiBpbnZva2VWTm9kZUhvb2sodm5vZGVIb29rLCBwYXJlbnRDb21wb25lbnQsIG4yLCBuMSk7XG4gICAgICAgIGRpcnMgJiYgaW52b2tlRGlyZWN0aXZlSG9vayhuMiwgbjEsIHBhcmVudENvbXBvbmVudCwgXCJ1cGRhdGVkXCIpO1xuICAgICAgfSwgcGFyZW50U3VzcGVuc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF0Y2hCbG9ja0NoaWxkcmVuID0gKG9sZENoaWxkcmVuLCBuZXdDaGlsZHJlbiwgZmFsbGJhY2tDb250YWluZXIsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcbiAgICAgIGNvbnN0IG5ld1ZOb2RlID0gbmV3Q2hpbGRyZW5baV07XG4gICAgICBjb25zdCBjb250YWluZXIgPSAoXG4gICAgICAgIC8vIG9sZFZOb2RlIG1heSBiZSBhbiBlcnJvcmVkIGFzeW5jIHNldHVwKCkgY29tcG9uZW50IGluc2lkZSBTdXNwZW5zZVxuICAgICAgICAvLyB3aGljaCB3aWxsIG5vdCBoYXZlIGEgbW91bnRlZCBlbGVtZW50XG4gICAgICAgIG9sZFZOb2RlLmVsICYmIC8vIC0gSW4gdGhlIGNhc2Ugb2YgYSBGcmFnbWVudCwgd2UgbmVlZCB0byBwcm92aWRlIHRoZSBhY3R1YWwgcGFyZW50XG4gICAgICAgIC8vIG9mIHRoZSBGcmFnbWVudCBpdHNlbGYgc28gaXQgY2FuIG1vdmUgaXRzIGNoaWxkcmVuLlxuICAgICAgICAob2xkVk5vZGUudHlwZSA9PT0gRnJhZ21lbnQgfHwgLy8gLSBJbiB0aGUgY2FzZSBvZiBkaWZmZXJlbnQgbm9kZXMsIHRoZXJlIGlzIGdvaW5nIHRvIGJlIGEgcmVwbGFjZW1lbnRcbiAgICAgICAgLy8gd2hpY2ggYWxzbyByZXF1aXJlcyB0aGUgY29ycmVjdCBwYXJlbnQgY29udGFpbmVyXG4gICAgICAgICFpc1NhbWVWTm9kZVR5cGUob2xkVk5vZGUsIG5ld1ZOb2RlKSB8fCAvLyAtIEluIHRoZSBjYXNlIG9mIGEgY29tcG9uZW50LCBpdCBjb3VsZCBjb250YWluIGFueXRoaW5nLlxuICAgICAgICBvbGRWTm9kZS5zaGFwZUZsYWcgJiAoNiB8IDY0KSkgPyBob3N0UGFyZW50Tm9kZShvbGRWTm9kZS5lbCkgOiAoXG4gICAgICAgICAgLy8gSW4gb3RoZXIgY2FzZXMsIHRoZSBwYXJlbnQgY29udGFpbmVyIGlzIG5vdCBhY3R1YWxseSB1c2VkIHNvIHdlXG4gICAgICAgICAgLy8ganVzdCBwYXNzIHRoZSBibG9jayBlbGVtZW50IGhlcmUgdG8gYXZvaWQgYSBET00gcGFyZW50Tm9kZSBjYWxsLlxuICAgICAgICAgIGZhbGxiYWNrQ29udGFpbmVyXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBwYXRjaChcbiAgICAgICAgb2xkVk5vZGUsXG4gICAgICAgIG5ld1ZOb2RlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF0Y2hQcm9wcyA9IChlbCwgb2xkUHJvcHMsIG5ld1Byb3BzLCBwYXJlbnRDb21wb25lbnQsIG5hbWVzcGFjZSkgPT4ge1xuICAgIGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMpIHtcbiAgICAgIGlmIChvbGRQcm9wcyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9sZFByb3BzKSB7XG4gICAgICAgICAgaWYgKCFpc1Jlc2VydmVkUHJvcChrZXkpICYmICEoa2V5IGluIG5ld1Byb3BzKSkge1xuICAgICAgICAgICAgaG9zdFBhdGNoUHJvcChcbiAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgb2xkUHJvcHNba2V5XSxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdQcm9wcykge1xuICAgICAgICBpZiAoaXNSZXNlcnZlZFByb3Aoa2V5KSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IG5leHQgPSBuZXdQcm9wc1trZXldO1xuICAgICAgICBjb25zdCBwcmV2ID0gb2xkUHJvcHNba2V5XTtcbiAgICAgICAgaWYgKG5leHQgIT09IHByZXYgJiYga2V5ICE9PSBcInZhbHVlXCIpIHtcbiAgICAgICAgICBob3N0UGF0Y2hQcm9wKGVsLCBrZXksIHByZXYsIG5leHQsIG5hbWVzcGFjZSwgcGFyZW50Q29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFwidmFsdWVcIiBpbiBuZXdQcm9wcykge1xuICAgICAgICBob3N0UGF0Y2hQcm9wKGVsLCBcInZhbHVlXCIsIG9sZFByb3BzLnZhbHVlLCBuZXdQcm9wcy52YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NGcmFnbWVudCA9IChuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnRTdGFydEFuY2hvciA9IG4yLmVsID0gbjEgPyBuMS5lbCA6IGhvc3RDcmVhdGVUZXh0KFwiXCIpO1xuICAgIGNvbnN0IGZyYWdtZW50RW5kQW5jaG9yID0gbjIuYW5jaG9yID0gbjEgPyBuMS5hbmNob3IgOiBob3N0Q3JlYXRlVGV4dChcIlwiKTtcbiAgICBsZXQgeyBwYXRjaEZsYWcsIGR5bmFtaWNDaGlsZHJlbiwgc2xvdFNjb3BlSWRzOiBmcmFnbWVudFNsb3RTY29wZUlkcyB9ID0gbjI7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgLy8gIzU1MjMgZGV2IHJvb3QgZnJhZ21lbnQgbWF5IGluaGVyaXQgZGlyZWN0aXZlc1xuICAgIChpc0htclVwZGF0aW5nIHx8IHBhdGNoRmxhZyAmIDIwNDgpKSB7XG4gICAgICBwYXRjaEZsYWcgPSAwO1xuICAgICAgb3B0aW1pemVkID0gZmFsc2U7XG4gICAgICBkeW5hbWljQ2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZnJhZ21lbnRTbG90U2NvcGVJZHMpIHtcbiAgICAgIHNsb3RTY29wZUlkcyA9IHNsb3RTY29wZUlkcyA/IHNsb3RTY29wZUlkcy5jb25jYXQoZnJhZ21lbnRTbG90U2NvcGVJZHMpIDogZnJhZ21lbnRTbG90U2NvcGVJZHM7XG4gICAgfVxuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBob3N0SW5zZXJ0KGZyYWdtZW50U3RhcnRBbmNob3IsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgIGhvc3RJbnNlcnQoZnJhZ21lbnRFbmRBbmNob3IsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgIG1vdW50Q2hpbGRyZW4oXG4gICAgICAgIC8vICMxMDAwN1xuICAgICAgICAvLyBzdWNoIGZyYWdtZW50IGxpa2UgYDw+PC8+YCB3aWxsIGJlIGNvbXBpbGVkIGludG9cbiAgICAgICAgLy8gYSBmcmFnbWVudCB3aGljaCBkb2Vzbid0IGhhdmUgYSBjaGlsZHJlbi5cbiAgICAgICAgLy8gSW4gdGhpcyBjYXNlIGZhbGxiYWNrIHRvIGFuIGVtcHR5IGFycmF5XG4gICAgICAgIG4yLmNoaWxkcmVuIHx8IFtdLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGZyYWdtZW50RW5kQW5jaG9yLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGF0Y2hGbGFnID4gMCAmJiBwYXRjaEZsYWcgJiA2NCAmJiBkeW5hbWljQ2hpbGRyZW4gJiYgLy8gIzI3MTUgdGhlIHByZXZpb3VzIGZyYWdtZW50IGNvdWxkJ3ZlIGJlZW4gYSBCQUlMZWQgb25lIGFzIGEgcmVzdWx0XG4gICAgICAvLyBvZiByZW5kZXJTbG90KCkgd2l0aCBubyB2YWxpZCBjaGlsZHJlblxuICAgICAgbjEuZHluYW1pY0NoaWxkcmVuKSB7XG4gICAgICAgIHBhdGNoQmxvY2tDaGlsZHJlbihcbiAgICAgICAgICBuMS5keW5hbWljQ2hpbGRyZW4sXG4gICAgICAgICAgZHluYW1pY0NoaWxkcmVuLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkc1xuICAgICAgICApO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHRyYXZlcnNlU3RhdGljQ2hpbGRyZW4objEsIG4yKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAvLyAjMjA4MCBpZiB0aGUgc3RhYmxlIGZyYWdtZW50IGhhcyBhIGtleSwgaXQncyBhIDx0ZW1wbGF0ZSB2LWZvcj4gdGhhdCBtYXlcbiAgICAgICAgICAvLyAgZ2V0IG1vdmVkIGFyb3VuZC4gTWFrZSBzdXJlIGFsbCByb290IGxldmVsIHZub2RlcyBpbmhlcml0IGVsLlxuICAgICAgICAgIC8vICMyMTM0IG9yIGlmIGl0J3MgYSBjb21wb25lbnQgcm9vdCwgaXQgbWF5IGFsc28gZ2V0IG1vdmVkIGFyb3VuZFxuICAgICAgICAgIC8vIGFzIHRoZSBjb21wb25lbnQgaXMgYmVpbmcgbW92ZWQuXG4gICAgICAgICAgbjIua2V5ICE9IG51bGwgfHwgcGFyZW50Q29tcG9uZW50ICYmIG4yID09PSBwYXJlbnRDb21wb25lbnQuc3ViVHJlZVxuICAgICAgICApIHtcbiAgICAgICAgICB0cmF2ZXJzZVN0YXRpY0NoaWxkcmVuKFxuICAgICAgICAgICAgbjEsXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIC8qIHNoYWxsb3cgKi9cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRjaENoaWxkcmVuKFxuICAgICAgICAgIG4xLFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBmcmFnbWVudEVuZEFuY2hvcixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NDb21wb25lbnQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIG4yLnNsb3RTY29wZUlkcyA9IHNsb3RTY29wZUlkcztcbiAgICBpZiAobjEgPT0gbnVsbCkge1xuICAgICAgaWYgKG4yLnNoYXBlRmxhZyAmIDUxMikge1xuICAgICAgICBwYXJlbnRDb21wb25lbnQuY3R4LmFjdGl2YXRlKFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW91bnRDb21wb25lbnQoXG4gICAgICAgICAgbjIsXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVDb21wb25lbnQobjEsIG4yLCBvcHRpbWl6ZWQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbW91bnRDb21wb25lbnQgPSAoaW5pdGlhbFZOb2RlLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBvcHRpbWl6ZWQpID0+IHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IChpbml0aWFsVk5vZGUuY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2UoXG4gICAgICBpbml0aWFsVk5vZGUsXG4gICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICBwYXJlbnRTdXNwZW5zZVxuICAgICkpO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGluc3RhbmNlLnR5cGUuX19obXJJZCkge1xuICAgICAgcmVnaXN0ZXJITVIoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgcHVzaFdhcm5pbmdDb250ZXh0KGluaXRpYWxWTm9kZSk7XG4gICAgICBzdGFydE1lYXN1cmUoaW5zdGFuY2UsIGBtb3VudGApO1xuICAgIH1cbiAgICBpZiAoaXNLZWVwQWxpdmUoaW5pdGlhbFZOb2RlKSkge1xuICAgICAgaW5zdGFuY2UuY3R4LnJlbmRlcmVyID0gaW50ZXJuYWxzO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICBzdGFydE1lYXN1cmUoaW5zdGFuY2UsIGBpbml0YCk7XG4gICAgICB9XG4gICAgICBzZXR1cENvbXBvbmVudChpbnN0YW5jZSwgZmFsc2UsIG9wdGltaXplZCk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICBlbmRNZWFzdXJlKGluc3RhbmNlLCBgaW5pdGApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuYXN5bmNEZXApIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcpIGluaXRpYWxWTm9kZS5lbCA9IG51bGw7XG4gICAgICBwYXJlbnRTdXNwZW5zZSAmJiBwYXJlbnRTdXNwZW5zZS5yZWdpc3RlckRlcChpbnN0YW5jZSwgc2V0dXBSZW5kZXJFZmZlY3QsIG9wdGltaXplZCk7XG4gICAgICBpZiAoIWluaXRpYWxWTm9kZS5lbCkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGluc3RhbmNlLnN1YlRyZWUgPSBjcmVhdGVWTm9kZShDb21tZW50KTtcbiAgICAgICAgcHJvY2Vzc0NvbW1lbnROb2RlKG51bGwsIHBsYWNlaG9sZGVyLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldHVwUmVuZGVyRWZmZWN0KFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgaW5pdGlhbFZOb2RlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgcG9wV2FybmluZ0NvbnRleHQoKTtcbiAgICAgIGVuZE1lYXN1cmUoaW5zdGFuY2UsIGBtb3VudGApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gKG4xLCBuMiwgb3B0aW1pemVkKSA9PiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuMi5jb21wb25lbnQgPSBuMS5jb21wb25lbnQ7XG4gICAgaWYgKHNob3VsZFVwZGF0ZUNvbXBvbmVudChuMSwgbjIsIG9wdGltaXplZCkpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5hc3luY0RlcCAmJiAhaW5zdGFuY2UuYXN5bmNSZXNvbHZlZCkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHB1c2hXYXJuaW5nQ29udGV4dChuMik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQ29tcG9uZW50UHJlUmVuZGVyKGluc3RhbmNlLCBuMiwgb3B0aW1pemVkKTtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBwb3BXYXJuaW5nQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLm5leHQgPSBuMjtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG4yLmVsID0gbjEuZWw7XG4gICAgICBpbnN0YW5jZS52bm9kZSA9IG4yO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2V0dXBSZW5kZXJFZmZlY3QgPSAoaW5zdGFuY2UsIGluaXRpYWxWTm9kZSwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIG9wdGltaXplZCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFVwZGF0ZUZuID0gKCkgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5pc01vdW50ZWQpIHtcbiAgICAgICAgbGV0IHZub2RlSG9vaztcbiAgICAgICAgY29uc3QgeyBlbCwgcHJvcHMgfSA9IGluaXRpYWxWTm9kZTtcbiAgICAgICAgY29uc3QgeyBibSwgbSwgcGFyZW50LCByb290LCB0eXBlIH0gPSBpbnN0YW5jZTtcbiAgICAgICAgY29uc3QgaXNBc3luY1dyYXBwZXJWTm9kZSA9IGlzQXN5bmNXcmFwcGVyKGluaXRpYWxWTm9kZSk7XG4gICAgICAgIHRvZ2dsZVJlY3Vyc2UoaW5zdGFuY2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKGJtKSB7XG4gICAgICAgICAgaW52b2tlQXJyYXlGbnMoYm0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNBc3luY1dyYXBwZXJWTm9kZSAmJiAodm5vZGVIb29rID0gcHJvcHMgJiYgcHJvcHMub25Wbm9kZUJlZm9yZU1vdW50KSkge1xuICAgICAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudCwgaW5pdGlhbFZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVSZWN1cnNlKGluc3RhbmNlLCB0cnVlKTtcbiAgICAgICAgaWYgKGVsICYmIGh5ZHJhdGVOb2RlKSB7XG4gICAgICAgICAgY29uc3QgaHlkcmF0ZVN1YlRyZWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgICAgICBzdGFydE1lYXN1cmUoaW5zdGFuY2UsIGByZW5kZXJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3RhbmNlLnN1YlRyZWUgPSByZW5kZXJDb21wb25lbnRSb290KGluc3RhbmNlKTtcbiAgICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgICAgIGVuZE1lYXN1cmUoaW5zdGFuY2UsIGByZW5kZXJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYGh5ZHJhdGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh5ZHJhdGVOb2RlKFxuICAgICAgICAgICAgICBlbCxcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3ViVHJlZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYGh5ZHJhdGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc0FzeW5jV3JhcHBlclZOb2RlICYmIHR5cGUuX19hc3luY0h5ZHJhdGUpIHtcbiAgICAgICAgICAgIHR5cGUuX19hc3luY0h5ZHJhdGUoXG4gICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgaHlkcmF0ZVN1YlRyZWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh5ZHJhdGVTdWJUcmVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyb290LmNlKSB7XG4gICAgICAgICAgICByb290LmNlLl9pbmplY3RDaGlsZFN0eWxlKHR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgICAgc3RhcnRNZWFzdXJlKGluc3RhbmNlLCBgcmVuZGVyYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHN1YlRyZWUgPSBpbnN0YW5jZS5zdWJUcmVlID0gcmVuZGVyQ29tcG9uZW50Um9vdChpbnN0YW5jZSk7XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIGVuZE1lYXN1cmUoaW5zdGFuY2UsIGByZW5kZXJgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhdGNoKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHN1YlRyZWUsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluaXRpYWxWTm9kZS5lbCA9IHN1YlRyZWUuZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QobSwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNBc3luY1dyYXBwZXJWTm9kZSAmJiAodm5vZGVIb29rID0gcHJvcHMgJiYgcHJvcHMub25Wbm9kZU1vdW50ZWQpKSB7XG4gICAgICAgICAgY29uc3Qgc2NvcGVkSW5pdGlhbFZOb2RlID0gaW5pdGlhbFZOb2RlO1xuICAgICAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdChcbiAgICAgICAgICAgICgpID0+IGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudCwgc2NvcGVkSW5pdGlhbFZOb2RlKSxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdGlhbFZOb2RlLnNoYXBlRmxhZyAmIDI1NiB8fCBwYXJlbnQgJiYgaXNBc3luY1dyYXBwZXIocGFyZW50LnZub2RlKSAmJiBwYXJlbnQudm5vZGUuc2hhcGVGbGFnICYgMjU2KSB7XG4gICAgICAgICAgaW5zdGFuY2UuYSAmJiBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoaW5zdGFuY2UuYSwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykge1xuICAgICAgICAgIGRldnRvb2xzQ29tcG9uZW50QWRkZWQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxWTm9kZSA9IGNvbnRhaW5lciA9IGFuY2hvciA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgeyBuZXh0LCBidSwgdSwgcGFyZW50LCB2bm9kZSB9ID0gaW5zdGFuY2U7XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBub25IeWRyYXRlZEFzeW5jUm9vdCA9IGxvY2F0ZU5vbkh5ZHJhdGVkQXN5bmNSb290KGluc3RhbmNlKTtcbiAgICAgICAgICBpZiAobm9uSHlkcmF0ZWRBc3luY1Jvb3QpIHtcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgIG5leHQuZWwgPSB2bm9kZS5lbDtcbiAgICAgICAgICAgICAgdXBkYXRlQ29tcG9uZW50UHJlUmVuZGVyKGluc3RhbmNlLCBuZXh0LCBvcHRpbWl6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9uSHlkcmF0ZWRBc3luY1Jvb3QuYXN5bmNEZXAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRVcGRhdGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaWdpbk5leHQgPSBuZXh0O1xuICAgICAgICBsZXQgdm5vZGVIb29rO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHB1c2hXYXJuaW5nQ29udGV4dChuZXh0IHx8IGluc3RhbmNlLnZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVSZWN1cnNlKGluc3RhbmNlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgbmV4dC5lbCA9IHZub2RlLmVsO1xuICAgICAgICAgIHVwZGF0ZUNvbXBvbmVudFByZVJlbmRlcihpbnN0YW5jZSwgbmV4dCwgb3B0aW1pemVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0ID0gdm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1KSB7XG4gICAgICAgICAgaW52b2tlQXJyYXlGbnMoYnUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bm9kZUhvb2sgPSBuZXh0LnByb3BzICYmIG5leHQucHJvcHMub25Wbm9kZUJlZm9yZVVwZGF0ZSkge1xuICAgICAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudCwgbmV4dCwgdm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZVJlY3Vyc2UoaW5zdGFuY2UsIHRydWUpO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHJlbmRlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHRUcmVlID0gcmVuZGVyQ29tcG9uZW50Um9vdChpbnN0YW5jZSk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYHJlbmRlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZUcmVlID0gaW5zdGFuY2Uuc3ViVHJlZTtcbiAgICAgICAgaW5zdGFuY2Uuc3ViVHJlZSA9IG5leHRUcmVlO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgcHJldlRyZWUsXG4gICAgICAgICAgbmV4dFRyZWUsXG4gICAgICAgICAgLy8gcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgaWYgaXQncyBpbiBhIHRlbGVwb3J0XG4gICAgICAgICAgaG9zdFBhcmVudE5vZGUocHJldlRyZWUuZWwpLFxuICAgICAgICAgIC8vIGFuY2hvciBtYXkgaGF2ZSBjaGFuZ2VkIGlmIGl0J3MgaW4gYSBmcmFnbWVudFxuICAgICAgICAgIGdldE5leHRIb3N0Tm9kZShwcmV2VHJlZSksXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dC5lbCA9IG5leHRUcmVlLmVsO1xuICAgICAgICBpZiAob3JpZ2luTmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHVwZGF0ZUhPQ0hvc3RFbChpbnN0YW5jZSwgbmV4dFRyZWUuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KHUsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm5vZGVIb29rID0gbmV4dC5wcm9wcyAmJiBuZXh0LnByb3BzLm9uVm5vZGVVcGRhdGVkKSB7XG4gICAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KFxuICAgICAgICAgICAgKCkgPT4gaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50LCBuZXh0LCB2bm9kZSksXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgX19WVUVfUFJPRF9ERVZUT09MU19fKSB7XG4gICAgICAgICAgZGV2dG9vbHNDb21wb25lbnRVcGRhdGVkKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHBvcFdhcm5pbmdDb250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluc3RhbmNlLnNjb3BlLm9uKCk7XG4gICAgY29uc3QgZWZmZWN0ID0gaW5zdGFuY2UuZWZmZWN0ID0gbmV3IFJlYWN0aXZlRWZmZWN0KGNvbXBvbmVudFVwZGF0ZUZuKTtcbiAgICBpbnN0YW5jZS5zY29wZS5vZmYoKTtcbiAgICBjb25zdCB1cGRhdGUgPSBpbnN0YW5jZS51cGRhdGUgPSBlZmZlY3QucnVuLmJpbmQoZWZmZWN0KTtcbiAgICBjb25zdCBqb2IgPSBpbnN0YW5jZS5qb2IgPSBlZmZlY3QucnVuSWZEaXJ0eS5iaW5kKGVmZmVjdCk7XG4gICAgam9iLmkgPSBpbnN0YW5jZTtcbiAgICBqb2IuaWQgPSBpbnN0YW5jZS51aWQ7XG4gICAgZWZmZWN0LnNjaGVkdWxlciA9ICgpID0+IHF1ZXVlSm9iKGpvYik7XG4gICAgdG9nZ2xlUmVjdXJzZShpbnN0YW5jZSwgdHJ1ZSk7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIGVmZmVjdC5vblRyYWNrID0gaW5zdGFuY2UucnRjID8gKGUpID0+IGludm9rZUFycmF5Rm5zKGluc3RhbmNlLnJ0YywgZSkgOiB2b2lkIDA7XG4gICAgICBlZmZlY3Qub25UcmlnZ2VyID0gaW5zdGFuY2UucnRnID8gKGUpID0+IGludm9rZUFycmF5Rm5zKGluc3RhbmNlLnJ0ZywgZSkgOiB2b2lkIDA7XG4gICAgfVxuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCB1cGRhdGVDb21wb25lbnRQcmVSZW5kZXIgPSAoaW5zdGFuY2UsIG5leHRWTm9kZSwgb3B0aW1pemVkKSA9PiB7XG4gICAgbmV4dFZOb2RlLmNvbXBvbmVudCA9IGluc3RhbmNlO1xuICAgIGNvbnN0IHByZXZQcm9wcyA9IGluc3RhbmNlLnZub2RlLnByb3BzO1xuICAgIGluc3RhbmNlLnZub2RlID0gbmV4dFZOb2RlO1xuICAgIGluc3RhbmNlLm5leHQgPSBudWxsO1xuICAgIHVwZGF0ZVByb3BzKGluc3RhbmNlLCBuZXh0Vk5vZGUucHJvcHMsIHByZXZQcm9wcywgb3B0aW1pemVkKTtcbiAgICB1cGRhdGVTbG90cyhpbnN0YW5jZSwgbmV4dFZOb2RlLmNoaWxkcmVuLCBvcHRpbWl6ZWQpO1xuICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICBmbHVzaFByZUZsdXNoQ2JzKGluc3RhbmNlKTtcbiAgICByZXNldFRyYWNraW5nKCk7XG4gIH07XG4gIGNvbnN0IHBhdGNoQ2hpbGRyZW4gPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgYzEgPSBuMSAmJiBuMS5jaGlsZHJlbjtcbiAgICBjb25zdCBwcmV2U2hhcGVGbGFnID0gbjEgPyBuMS5zaGFwZUZsYWcgOiAwO1xuICAgIGNvbnN0IGMyID0gbjIuY2hpbGRyZW47XG4gICAgY29uc3QgeyBwYXRjaEZsYWcsIHNoYXBlRmxhZyB9ID0gbjI7XG4gICAgaWYgKHBhdGNoRmxhZyA+IDApIHtcbiAgICAgIGlmIChwYXRjaEZsYWcgJiAxMjgpIHtcbiAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKFxuICAgICAgICAgIGMxLFxuICAgICAgICAgIGMyLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAocGF0Y2hGbGFnICYgMjU2KSB7XG4gICAgICAgIHBhdGNoVW5rZXllZENoaWxkcmVuKFxuICAgICAgICAgIGMxLFxuICAgICAgICAgIGMyLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNoYXBlRmxhZyAmIDgpIHtcbiAgICAgIGlmIChwcmV2U2hhcGVGbGFnICYgMTYpIHtcbiAgICAgICAgdW5tb3VudENoaWxkcmVuKGMxLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjMiAhPT0gYzEpIHtcbiAgICAgICAgaG9zdFNldEVsZW1lbnRUZXh0KGNvbnRhaW5lciwgYzIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldlNoYXBlRmxhZyAmIDE2KSB7XG4gICAgICAgIGlmIChzaGFwZUZsYWcgJiAxNikge1xuICAgICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihcbiAgICAgICAgICAgIGMxLFxuICAgICAgICAgICAgYzIsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5tb3VudENoaWxkcmVuKGMxLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZXZTaGFwZUZsYWcgJiA4KSB7XG4gICAgICAgICAgaG9zdFNldEVsZW1lbnRUZXh0KGNvbnRhaW5lciwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXBlRmxhZyAmIDE2KSB7XG4gICAgICAgICAgbW91bnRDaGlsZHJlbihcbiAgICAgICAgICAgIGMyLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBwYXRjaFVua2V5ZWRDaGlsZHJlbiA9IChjMSwgYzIsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgYzEgPSBjMSB8fCBFTVBUWV9BUlI7XG4gICAgYzIgPSBjMiB8fCBFTVBUWV9BUlI7XG4gICAgY29uc3Qgb2xkTGVuZ3RoID0gYzEubGVuZ3RoO1xuICAgIGNvbnN0IG5ld0xlbmd0aCA9IGMyLmxlbmd0aDtcbiAgICBjb25zdCBjb21tb25MZW5ndGggPSBNYXRoLm1pbihvbGRMZW5ndGgsIG5ld0xlbmd0aCk7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0Q2hpbGQgPSBjMltpXSA9IG9wdGltaXplZCA/IGNsb25lSWZNb3VudGVkKGMyW2ldKSA6IG5vcm1hbGl6ZVZOb2RlKGMyW2ldKTtcbiAgICAgIHBhdGNoKFxuICAgICAgICBjMVtpXSxcbiAgICAgICAgbmV4dENoaWxkLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvbGRMZW5ndGggPiBuZXdMZW5ndGgpIHtcbiAgICAgIHVubW91bnRDaGlsZHJlbihcbiAgICAgICAgYzEsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIHRydWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBjb21tb25MZW5ndGhcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdW50Q2hpbGRyZW4oXG4gICAgICAgIGMyLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZCxcbiAgICAgICAgY29tbW9uTGVuZ3RoXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF0Y2hLZXllZENoaWxkcmVuID0gKGMxLCBjMiwgY29udGFpbmVyLCBwYXJlbnRBbmNob3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzLCBvcHRpbWl6ZWQpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbDIgPSBjMi5sZW5ndGg7XG4gICAgbGV0IGUxID0gYzEubGVuZ3RoIC0gMTtcbiAgICBsZXQgZTIgPSBsMiAtIDE7XG4gICAgd2hpbGUgKGkgPD0gZTEgJiYgaSA8PSBlMikge1xuICAgICAgY29uc3QgbjEgPSBjMVtpXTtcbiAgICAgIGNvbnN0IG4yID0gYzJbaV0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjMltpXSkgOiBub3JtYWxpemVWTm9kZShjMltpXSk7XG4gICAgICBpZiAoaXNTYW1lVk5vZGVUeXBlKG4xLCBuMikpIHtcbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgbjEsXG4gICAgICAgICAgbjIsXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgd2hpbGUgKGkgPD0gZTEgJiYgaSA8PSBlMikge1xuICAgICAgY29uc3QgbjEgPSBjMVtlMV07XG4gICAgICBjb25zdCBuMiA9IGMyW2UyXSA9IG9wdGltaXplZCA/IGNsb25lSWZNb3VudGVkKGMyW2UyXSkgOiBub3JtYWxpemVWTm9kZShjMltlMl0pO1xuICAgICAgaWYgKGlzU2FtZVZOb2RlVHlwZShuMSwgbjIpKSB7XG4gICAgICAgIHBhdGNoKFxuICAgICAgICAgIG4xLFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlMS0tO1xuICAgICAgZTItLTtcbiAgICB9XG4gICAgaWYgKGkgPiBlMSkge1xuICAgICAgaWYgKGkgPD0gZTIpIHtcbiAgICAgICAgY29uc3QgbmV4dFBvcyA9IGUyICsgMTtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gbmV4dFBvcyA8IGwyID8gYzJbbmV4dFBvc10uZWwgOiBwYXJlbnRBbmNob3I7XG4gICAgICAgIHdoaWxlIChpIDw9IGUyKSB7XG4gICAgICAgICAgcGF0Y2goXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgYzJbaV0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjMltpXSkgOiBub3JtYWxpemVWTm9kZShjMltpXSksXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpID4gZTIpIHtcbiAgICAgIHdoaWxlIChpIDw9IGUxKSB7XG4gICAgICAgIHVubW91bnQoYzFbaV0sIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIHRydWUpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHMxID0gaTtcbiAgICAgIGNvbnN0IHMyID0gaTtcbiAgICAgIGNvbnN0IGtleVRvTmV3SW5kZXhNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgZm9yIChpID0gczI7IGkgPD0gZTI7IGkrKykge1xuICAgICAgICBjb25zdCBuZXh0Q2hpbGQgPSBjMltpXSA9IG9wdGltaXplZCA/IGNsb25lSWZNb3VudGVkKGMyW2ldKSA6IG5vcm1hbGl6ZVZOb2RlKGMyW2ldKTtcbiAgICAgICAgaWYgKG5leHRDaGlsZC5rZXkgIT0gbnVsbCkge1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGtleVRvTmV3SW5kZXhNYXAuaGFzKG5leHRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICAgIGBEdXBsaWNhdGUga2V5cyBmb3VuZCBkdXJpbmcgdXBkYXRlOmAsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG5leHRDaGlsZC5rZXkpLFxuICAgICAgICAgICAgICBgTWFrZSBzdXJlIGtleXMgYXJlIHVuaXF1ZS5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXlUb05ld0luZGV4TWFwLnNldChuZXh0Q2hpbGQua2V5LCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGo7XG4gICAgICBsZXQgcGF0Y2hlZCA9IDA7XG4gICAgICBjb25zdCB0b0JlUGF0Y2hlZCA9IGUyIC0gczIgKyAxO1xuICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XG4gICAgICBsZXQgbWF4TmV3SW5kZXhTb0ZhciA9IDA7XG4gICAgICBjb25zdCBuZXdJbmRleFRvT2xkSW5kZXhNYXAgPSBuZXcgQXJyYXkodG9CZVBhdGNoZWQpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRvQmVQYXRjaGVkOyBpKyspIG5ld0luZGV4VG9PbGRJbmRleE1hcFtpXSA9IDA7XG4gICAgICBmb3IgKGkgPSBzMTsgaSA8PSBlMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByZXZDaGlsZCA9IGMxW2ldO1xuICAgICAgICBpZiAocGF0Y2hlZCA+PSB0b0JlUGF0Y2hlZCkge1xuICAgICAgICAgIHVubW91bnQocHJldkNoaWxkLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCB0cnVlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3SW5kZXg7XG4gICAgICAgIGlmIChwcmV2Q2hpbGQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGtleVRvTmV3SW5kZXhNYXAuZ2V0KHByZXZDaGlsZC5rZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoaiA9IHMyOyBqIDw9IGUyOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleFRvT2xkSW5kZXhNYXBbaiAtIHMyXSA9PT0gMCAmJiBpc1NhbWVWTm9kZVR5cGUocHJldkNoaWxkLCBjMltqXSkpIHtcbiAgICAgICAgICAgICAgbmV3SW5kZXggPSBqO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0luZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgICB1bm1vdW50KHByZXZDaGlsZCwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SW5kZXhUb09sZEluZGV4TWFwW25ld0luZGV4IC0gczJdID0gaSArIDE7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ID49IG1heE5ld0luZGV4U29GYXIpIHtcbiAgICAgICAgICAgIG1heE5ld0luZGV4U29GYXIgPSBuZXdJbmRleDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRjaChcbiAgICAgICAgICAgIHByZXZDaGlsZCxcbiAgICAgICAgICAgIGMyW25ld0luZGV4XSxcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBpbmNyZWFzaW5nTmV3SW5kZXhTZXF1ZW5jZSA9IG1vdmVkID8gZ2V0U2VxdWVuY2UobmV3SW5kZXhUb09sZEluZGV4TWFwKSA6IEVNUFRZX0FSUjtcbiAgICAgIGogPSBpbmNyZWFzaW5nTmV3SW5kZXhTZXF1ZW5jZS5sZW5ndGggLSAxO1xuICAgICAgZm9yIChpID0gdG9CZVBhdGNoZWQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBzMiArIGk7XG4gICAgICAgIGNvbnN0IG5leHRDaGlsZCA9IGMyW25leHRJbmRleF07XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IG5leHRJbmRleCArIDEgPCBsMiA/IGMyW25leHRJbmRleCArIDFdLmVsIDogcGFyZW50QW5jaG9yO1xuICAgICAgICBpZiAobmV3SW5kZXhUb09sZEluZGV4TWFwW2ldID09PSAwKSB7XG4gICAgICAgICAgcGF0Y2goXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbmV4dENoaWxkLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgaWYgKGogPCAwIHx8IGkgIT09IGluY3JlYXNpbmdOZXdJbmRleFNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICBtb3ZlKG5leHRDaGlsZCwgY29udGFpbmVyLCBhbmNob3IsIDIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBtb3ZlID0gKHZub2RlLCBjb250YWluZXIsIGFuY2hvciwgbW92ZVR5cGUsIHBhcmVudFN1c3BlbnNlID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHsgZWwsIHR5cGUsIHRyYW5zaXRpb24sIGNoaWxkcmVuLCBzaGFwZUZsYWcgfSA9IHZub2RlO1xuICAgIGlmIChzaGFwZUZsYWcgJiA2KSB7XG4gICAgICBtb3ZlKHZub2RlLmNvbXBvbmVudC5zdWJUcmVlLCBjb250YWluZXIsIGFuY2hvciwgbW92ZVR5cGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICB2bm9kZS5zdXNwZW5zZS5tb3ZlKGNvbnRhaW5lciwgYW5jaG9yLCBtb3ZlVHlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzaGFwZUZsYWcgJiA2NCkge1xuICAgICAgdHlwZS5tb3ZlKHZub2RlLCBjb250YWluZXIsIGFuY2hvciwgaW50ZXJuYWxzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IEZyYWdtZW50KSB7XG4gICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vdmUoY2hpbGRyZW5baV0sIGNvbnRhaW5lciwgYW5jaG9yLCBtb3ZlVHlwZSk7XG4gICAgICB9XG4gICAgICBob3N0SW5zZXJ0KHZub2RlLmFuY2hvciwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gU3RhdGljKSB7XG4gICAgICBtb3ZlU3RhdGljTm9kZSh2bm9kZSwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZWVkVHJhbnNpdGlvbjIgPSBtb3ZlVHlwZSAhPT0gMiAmJiBzaGFwZUZsYWcgJiAxICYmIHRyYW5zaXRpb247XG4gICAgaWYgKG5lZWRUcmFuc2l0aW9uMikge1xuICAgICAgaWYgKG1vdmVUeXBlID09PSAwKSB7XG4gICAgICAgIHRyYW5zaXRpb24uYmVmb3JlRW50ZXIoZWwpO1xuICAgICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB0cmFuc2l0aW9uLmVudGVyKGVsKSwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsZWF2ZSwgZGVsYXlMZWF2ZSwgYWZ0ZXJMZWF2ZSB9ID0gdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcmVtb3ZlMiA9ICgpID0+IGhvc3RJbnNlcnQoZWwsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgICAgY29uc3QgcGVyZm9ybUxlYXZlID0gKCkgPT4ge1xuICAgICAgICAgIGxlYXZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmUyKCk7XG4gICAgICAgICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICAgICAgICBkZWxheUxlYXZlKGVsLCByZW1vdmUyLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvc3RJbnNlcnQoZWwsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVubW91bnQgPSAodm5vZGUsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlID0gZmFsc2UsIG9wdGltaXplZCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIHByb3BzLFxuICAgICAgcmVmLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkeW5hbWljQ2hpbGRyZW4sXG4gICAgICBzaGFwZUZsYWcsXG4gICAgICBwYXRjaEZsYWcsXG4gICAgICBkaXJzLFxuICAgICAgY2FjaGVJbmRleFxuICAgIH0gPSB2bm9kZTtcbiAgICBpZiAocGF0Y2hGbGFnID09PSAtMikge1xuICAgICAgb3B0aW1pemVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgc2V0UmVmKHJlZiwgbnVsbCwgcGFyZW50U3VzcGVuc2UsIHZub2RlLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGNhY2hlSW5kZXggIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29tcG9uZW50LnJlbmRlckNhY2hlW2NhY2hlSW5kZXhdID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoc2hhcGVGbGFnICYgMjU2KSB7XG4gICAgICBwYXJlbnRDb21wb25lbnQuY3R4LmRlYWN0aXZhdGUodm5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGRJbnZva2VEaXJzID0gc2hhcGVGbGFnICYgMSAmJiBkaXJzO1xuICAgIGNvbnN0IHNob3VsZEludm9rZVZub2RlSG9vayA9ICFpc0FzeW5jV3JhcHBlcih2bm9kZSk7XG4gICAgbGV0IHZub2RlSG9vaztcbiAgICBpZiAoc2hvdWxkSW52b2tlVm5vZGVIb29rICYmICh2bm9kZUhvb2sgPSBwcm9wcyAmJiBwcm9wcy5vblZub2RlQmVmb3JlVW5tb3VudCkpIHtcbiAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudENvbXBvbmVudCwgdm5vZGUpO1xuICAgIH1cbiAgICBpZiAoc2hhcGVGbGFnICYgNikge1xuICAgICAgdW5tb3VudENvbXBvbmVudCh2bm9kZS5jb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBkb1JlbW92ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzaGFwZUZsYWcgJiAxMjgpIHtcbiAgICAgICAgdm5vZGUuc3VzcGVuc2UudW5tb3VudChwYXJlbnRTdXNwZW5zZSwgZG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkSW52b2tlRGlycykge1xuICAgICAgICBpbnZva2VEaXJlY3RpdmVIb29rKHZub2RlLCBudWxsLCBwYXJlbnRDb21wb25lbnQsIFwiYmVmb3JlVW5tb3VudFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGFwZUZsYWcgJiA2NCkge1xuICAgICAgICB2bm9kZS50eXBlLnJlbW92ZShcbiAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgaW50ZXJuYWxzLFxuICAgICAgICAgIGRvUmVtb3ZlXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGR5bmFtaWNDaGlsZHJlbiAmJiAvLyAjNTE1NFxuICAgICAgLy8gd2hlbiB2LW9uY2UgaXMgdXNlZCBpbnNpZGUgYSBibG9jaywgc2V0QmxvY2tUcmFja2luZygtMSkgbWFya3MgdGhlXG4gICAgICAvLyBwYXJlbnQgYmxvY2sgd2l0aCBoYXNPbmNlOiB0cnVlXG4gICAgICAvLyBzbyB0aGF0IGl0IGRvZXNuJ3QgdGFrZSB0aGUgZmFzdCBwYXRoIGR1cmluZyB1bm1vdW50IC0gb3RoZXJ3aXNlXG4gICAgICAvLyBjb21wb25lbnRzIG5lc3RlZCBpbiB2LW9uY2UgYXJlIG5ldmVyIHVubW91bnRlZC5cbiAgICAgICFkeW5hbWljQ2hpbGRyZW4uaGFzT25jZSAmJiAvLyAjMTE1MzogZmFzdCBwYXRoIHNob3VsZCBub3QgYmUgdGFrZW4gZm9yIG5vbi1zdGFibGUgKHYtZm9yKSBmcmFnbWVudHNcbiAgICAgICh0eXBlICE9PSBGcmFnbWVudCB8fCBwYXRjaEZsYWcgPiAwICYmIHBhdGNoRmxhZyAmIDY0KSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4oXG4gICAgICAgICAgZHluYW1pY0NoaWxkcmVuLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEZyYWdtZW50ICYmIHBhdGNoRmxhZyAmICgxMjggfCAyNTYpIHx8ICFvcHRpbWl6ZWQgJiYgc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgICAgdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkb1JlbW92ZSkge1xuICAgICAgICByZW1vdmUodm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkSW52b2tlVm5vZGVIb29rICYmICh2bm9kZUhvb2sgPSBwcm9wcyAmJiBwcm9wcy5vblZub2RlVW5tb3VudGVkKSB8fCBzaG91bGRJbnZva2VEaXJzKSB7XG4gICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2bm9kZUhvb2sgJiYgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgICAgIHNob3VsZEludm9rZURpcnMgJiYgaW52b2tlRGlyZWN0aXZlSG9vayh2bm9kZSwgbnVsbCwgcGFyZW50Q29tcG9uZW50LCBcInVubW91bnRlZFwiKTtcbiAgICAgIH0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZSA9ICh2bm9kZSkgPT4ge1xuICAgIGNvbnN0IHsgdHlwZSwgZWwsIGFuY2hvciwgdHJhbnNpdGlvbiB9ID0gdm5vZGU7XG4gICAgaWYgKHR5cGUgPT09IEZyYWdtZW50KSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB2bm9kZS5wYXRjaEZsYWcgPiAwICYmIHZub2RlLnBhdGNoRmxhZyAmIDIwNDggJiYgdHJhbnNpdGlvbiAmJiAhdHJhbnNpdGlvbi5wZXJzaXN0ZWQpIHtcbiAgICAgICAgdm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gQ29tbWVudCkge1xuICAgICAgICAgICAgaG9zdFJlbW92ZShjaGlsZC5lbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZShjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUZyYWdtZW50KGVsLCBhbmNob3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gU3RhdGljKSB7XG4gICAgICByZW1vdmVTdGF0aWNOb2RlKHZub2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGVyZm9ybVJlbW92ZSA9ICgpID0+IHtcbiAgICAgIGhvc3RSZW1vdmUoZWwpO1xuICAgICAgaWYgKHRyYW5zaXRpb24gJiYgIXRyYW5zaXRpb24ucGVyc2lzdGVkICYmIHRyYW5zaXRpb24uYWZ0ZXJMZWF2ZSkge1xuICAgICAgICB0cmFuc2l0aW9uLmFmdGVyTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICh2bm9kZS5zaGFwZUZsYWcgJiAxICYmIHRyYW5zaXRpb24gJiYgIXRyYW5zaXRpb24ucGVyc2lzdGVkKSB7XG4gICAgICBjb25zdCB7IGxlYXZlLCBkZWxheUxlYXZlIH0gPSB0cmFuc2l0aW9uO1xuICAgICAgY29uc3QgcGVyZm9ybUxlYXZlID0gKCkgPT4gbGVhdmUoZWwsIHBlcmZvcm1SZW1vdmUpO1xuICAgICAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICAgICAgZGVsYXlMZWF2ZSh2bm9kZS5lbCwgcGVyZm9ybVJlbW92ZSwgcGVyZm9ybUxlYXZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZXJmb3JtUmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVGcmFnbWVudCA9IChjdXIsIGVuZCkgPT4ge1xuICAgIGxldCBuZXh0O1xuICAgIHdoaWxlIChjdXIgIT09IGVuZCkge1xuICAgICAgbmV4dCA9IGhvc3ROZXh0U2libGluZyhjdXIpO1xuICAgICAgaG9zdFJlbW92ZShjdXIpO1xuICAgICAgY3VyID0gbmV4dDtcbiAgICB9XG4gICAgaG9zdFJlbW92ZShlbmQpO1xuICB9O1xuICBjb25zdCB1bm1vdW50Q29tcG9uZW50ID0gKGluc3RhbmNlLCBwYXJlbnRTdXNwZW5zZSwgZG9SZW1vdmUpID0+IHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBpbnN0YW5jZS50eXBlLl9faG1ySWQpIHtcbiAgICAgIHVucmVnaXN0ZXJITVIoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBjb25zdCB7IGJ1bSwgc2NvcGUsIGpvYiwgc3ViVHJlZSwgdW0sIG0sIGEgfSA9IGluc3RhbmNlO1xuICAgIGludmFsaWRhdGVNb3VudChtKTtcbiAgICBpbnZhbGlkYXRlTW91bnQoYSk7XG4gICAgaWYgKGJ1bSkge1xuICAgICAgaW52b2tlQXJyYXlGbnMoYnVtKTtcbiAgICB9XG4gICAgc2NvcGUuc3RvcCgpO1xuICAgIGlmIChqb2IpIHtcbiAgICAgIGpvYi5mbGFncyB8PSA4O1xuICAgICAgdW5tb3VudChzdWJUcmVlLCBpbnN0YW5jZSwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlKTtcbiAgICB9XG4gICAgaWYgKHVtKSB7XG4gICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QodW0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICB9XG4gICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KCgpID0+IHtcbiAgICAgIGluc3RhbmNlLmlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgaWYgKHBhcmVudFN1c3BlbnNlICYmIHBhcmVudFN1c3BlbnNlLnBlbmRpbmdCcmFuY2ggJiYgIXBhcmVudFN1c3BlbnNlLmlzVW5tb3VudGVkICYmIGluc3RhbmNlLmFzeW5jRGVwICYmICFpbnN0YW5jZS5hc3luY1Jlc29sdmVkICYmIGluc3RhbmNlLnN1c3BlbnNlSWQgPT09IHBhcmVudFN1c3BlbnNlLnBlbmRpbmdJZCkge1xuICAgICAgcGFyZW50U3VzcGVuc2UuZGVwcy0tO1xuICAgICAgaWYgKHBhcmVudFN1c3BlbnNlLmRlcHMgPT09IDApIHtcbiAgICAgICAgcGFyZW50U3VzcGVuc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgIGRldnRvb2xzQ29tcG9uZW50UmVtb3ZlZChpbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB1bm1vdW50Q2hpbGRyZW4gPSAoY2hpbGRyZW4sIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlID0gZmFsc2UsIG9wdGltaXplZCA9IGZhbHNlLCBzdGFydCA9IDApID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdW5tb3VudChjaGlsZHJlbltpXSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgZG9SZW1vdmUsIG9wdGltaXplZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXROZXh0SG9zdE5vZGUgPSAodm5vZGUpID0+IHtcbiAgICBpZiAodm5vZGUuc2hhcGVGbGFnICYgNikge1xuICAgICAgcmV0dXJuIGdldE5leHRIb3N0Tm9kZSh2bm9kZS5jb21wb25lbnQuc3ViVHJlZSk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5zaGFwZUZsYWcgJiAxMjgpIHtcbiAgICAgIHJldHVybiB2bm9kZS5zdXNwZW5zZS5uZXh0KCk7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gaG9zdE5leHRTaWJsaW5nKHZub2RlLmFuY2hvciB8fCB2bm9kZS5lbCk7XG4gICAgY29uc3QgdGVsZXBvcnRFbmQgPSBlbCAmJiBlbFtUZWxlcG9ydEVuZEtleV07XG4gICAgcmV0dXJuIHRlbGVwb3J0RW5kID8gaG9zdE5leHRTaWJsaW5nKHRlbGVwb3J0RW5kKSA6IGVsO1xuICB9O1xuICBsZXQgaXNGbHVzaGluZyA9IGZhbHNlO1xuICBjb25zdCByZW5kZXIgPSAodm5vZGUsIGNvbnRhaW5lciwgbmFtZXNwYWNlKSA9PiB7XG4gICAgaWYgKHZub2RlID09IG51bGwpIHtcbiAgICAgIGlmIChjb250YWluZXIuX3Zub2RlKSB7XG4gICAgICAgIHVubW91bnQoY29udGFpbmVyLl92bm9kZSwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGNoKFxuICAgICAgICBjb250YWluZXIuX3Zub2RlIHx8IG51bGwsXG4gICAgICAgIHZub2RlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG5hbWVzcGFjZVxuICAgICAgKTtcbiAgICB9XG4gICAgY29udGFpbmVyLl92bm9kZSA9IHZub2RlO1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICBmbHVzaFByZUZsdXNoQ2JzKCk7XG4gICAgICBmbHVzaFBvc3RGbHVzaENicygpO1xuICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaW50ZXJuYWxzID0ge1xuICAgIHA6IHBhdGNoLFxuICAgIHVtOiB1bm1vdW50LFxuICAgIG06IG1vdmUsXG4gICAgcjogcmVtb3ZlLFxuICAgIG10OiBtb3VudENvbXBvbmVudCxcbiAgICBtYzogbW91bnRDaGlsZHJlbixcbiAgICBwYzogcGF0Y2hDaGlsZHJlbixcbiAgICBwYmM6IHBhdGNoQmxvY2tDaGlsZHJlbixcbiAgICBuOiBnZXROZXh0SG9zdE5vZGUsXG4gICAgbzogb3B0aW9uc1xuICB9O1xuICBsZXQgaHlkcmF0ZTtcbiAgbGV0IGh5ZHJhdGVOb2RlO1xuICBpZiAoY3JlYXRlSHlkcmF0aW9uRm5zKSB7XG4gICAgW2h5ZHJhdGUsIGh5ZHJhdGVOb2RlXSA9IGNyZWF0ZUh5ZHJhdGlvbkZucyhcbiAgICAgIGludGVybmFsc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgaHlkcmF0ZSxcbiAgICBjcmVhdGVBcHA6IGNyZWF0ZUFwcEFQSShyZW5kZXIsIGh5ZHJhdGUpXG4gIH07XG59XG5mdW5jdGlvbiByZXNvbHZlQ2hpbGRyZW5OYW1lc3BhY2UoeyB0eXBlLCBwcm9wcyB9LCBjdXJyZW50TmFtZXNwYWNlKSB7XG4gIHJldHVybiBjdXJyZW50TmFtZXNwYWNlID09PSBcInN2Z1wiICYmIHR5cGUgPT09IFwiZm9yZWlnbk9iamVjdFwiIHx8IGN1cnJlbnROYW1lc3BhY2UgPT09IFwibWF0aG1sXCIgJiYgdHlwZSA9PT0gXCJhbm5vdGF0aW9uLXhtbFwiICYmIHByb3BzICYmIHByb3BzLmVuY29kaW5nICYmIHByb3BzLmVuY29kaW5nLmluY2x1ZGVzKFwiaHRtbFwiKSA/IHZvaWQgMCA6IGN1cnJlbnROYW1lc3BhY2U7XG59XG5mdW5jdGlvbiB0b2dnbGVSZWN1cnNlKHsgZWZmZWN0LCBqb2IgfSwgYWxsb3dlZCkge1xuICBpZiAoYWxsb3dlZCkge1xuICAgIGVmZmVjdC5mbGFncyB8PSAzMjtcbiAgICBqb2IuZmxhZ3MgfD0gNDtcbiAgfSBlbHNlIHtcbiAgICBlZmZlY3QuZmxhZ3MgJj0gfjMyO1xuICAgIGpvYi5mbGFncyAmPSB+NDtcbiAgfVxufVxuZnVuY3Rpb24gbmVlZFRyYW5zaXRpb24ocGFyZW50U3VzcGVuc2UsIHRyYW5zaXRpb24pIHtcbiAgcmV0dXJuICghcGFyZW50U3VzcGVuc2UgfHwgcGFyZW50U3VzcGVuc2UgJiYgIXBhcmVudFN1c3BlbnNlLnBlbmRpbmdCcmFuY2gpICYmIHRyYW5zaXRpb24gJiYgIXRyYW5zaXRpb24ucGVyc2lzdGVkO1xufVxuZnVuY3Rpb24gdHJhdmVyc2VTdGF0aWNDaGlsZHJlbihuMSwgbjIsIHNoYWxsb3cgPSBmYWxzZSkge1xuICBjb25zdCBjaDEgPSBuMS5jaGlsZHJlbjtcbiAgY29uc3QgY2gyID0gbjIuY2hpbGRyZW47XG4gIGlmIChpc0FycmF5KGNoMSkgJiYgaXNBcnJheShjaDIpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaDEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGMxID0gY2gxW2ldO1xuICAgICAgbGV0IGMyID0gY2gyW2ldO1xuICAgICAgaWYgKGMyLnNoYXBlRmxhZyAmIDEgJiYgIWMyLmR5bmFtaWNDaGlsZHJlbikge1xuICAgICAgICBpZiAoYzIucGF0Y2hGbGFnIDw9IDAgfHwgYzIucGF0Y2hGbGFnID09PSAzMikge1xuICAgICAgICAgIGMyID0gY2gyW2ldID0gY2xvbmVJZk1vdW50ZWQoY2gyW2ldKTtcbiAgICAgICAgICBjMi5lbCA9IGMxLmVsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hhbGxvdyAmJiBjMi5wYXRjaEZsYWcgIT09IC0yKVxuICAgICAgICAgIHRyYXZlcnNlU3RhdGljQ2hpbGRyZW4oYzEsIGMyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjMi50eXBlID09PSBUZXh0KSB7XG4gICAgICAgIGMyLmVsID0gYzEuZWw7XG4gICAgICB9XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjMi50eXBlID09PSBDb21tZW50ICYmICFjMi5lbCkge1xuICAgICAgICBjMi5lbCA9IGMxLmVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0U2VxdWVuY2UoYXJyKSB7XG4gIGNvbnN0IHAgPSBhcnIuc2xpY2UoKTtcbiAgY29uc3QgcmVzdWx0ID0gWzBdO1xuICBsZXQgaSwgaiwgdSwgdiwgYztcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYXJySSA9IGFycltpXTtcbiAgICBpZiAoYXJySSAhPT0gMCkge1xuICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYXJyW2pdIDwgYXJySSkge1xuICAgICAgICBwW2ldID0gajtcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdSA9IDA7XG4gICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAodSA8IHYpIHtcbiAgICAgICAgYyA9IHUgKyB2ID4+IDE7XG4gICAgICAgIGlmIChhcnJbcmVzdWx0W2NdXSA8IGFyckkpIHtcbiAgICAgICAgICB1ID0gYyArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IGM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcnJJIDwgYXJyW3Jlc3VsdFt1XV0pIHtcbiAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W3VdID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdSA9IHJlc3VsdC5sZW5ndGg7XG4gIHYgPSByZXN1bHRbdSAtIDFdO1xuICB3aGlsZSAodS0tID4gMCkge1xuICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgdiA9IHBbdl07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGxvY2F0ZU5vbkh5ZHJhdGVkQXN5bmNSb290KGluc3RhbmNlKSB7XG4gIGNvbnN0IHN1YkNvbXBvbmVudCA9IGluc3RhbmNlLnN1YlRyZWUuY29tcG9uZW50O1xuICBpZiAoc3ViQ29tcG9uZW50KSB7XG4gICAgaWYgKHN1YkNvbXBvbmVudC5hc3luY0RlcCAmJiAhc3ViQ29tcG9uZW50LmFzeW5jUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBzdWJDb21wb25lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhdGVOb25IeWRyYXRlZEFzeW5jUm9vdChzdWJDb21wb25lbnQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaW52YWxpZGF0ZU1vdW50KGhvb2tzKSB7XG4gIGlmIChob29rcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspXG4gICAgICBob29rc1tpXS5mbGFncyB8PSA4O1xuICB9XG59XG5cbmNvbnN0IHNzckNvbnRleHRLZXkgPSBTeW1ib2wuZm9yKFwidi1zY3hcIik7XG5jb25zdCB1c2VTU1JDb250ZXh0ID0gKCkgPT4ge1xuICB7XG4gICAgY29uc3QgY3R4ID0gaW5qZWN0KHNzckNvbnRleHRLZXkpO1xuICAgIGlmICghY3R4KSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4kMShcbiAgICAgICAgYFNlcnZlciByZW5kZXJpbmcgY29udGV4dCBub3QgcHJvdmlkZWQuIE1ha2Ugc3VyZSB0byBvbmx5IGNhbGwgdXNlU1NSQ29udGV4dCgpIGNvbmRpdGlvbmFsbHkgaW4gdGhlIHNlcnZlciBidWlsZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuXG5mdW5jdGlvbiB3YXRjaEVmZmVjdChlZmZlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRvV2F0Y2goZWZmZWN0LCBudWxsLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHdhdGNoUG9zdEVmZmVjdChlZmZlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRvV2F0Y2goXG4gICAgZWZmZWN0LFxuICAgIG51bGwsXG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IGV4dGVuZCh7fSwgb3B0aW9ucywgeyBmbHVzaDogXCJwb3N0XCIgfSkgOiB7IGZsdXNoOiBcInBvc3RcIiB9XG4gICk7XG59XG5mdW5jdGlvbiB3YXRjaFN5bmNFZmZlY3QoZWZmZWN0LCBvcHRpb25zKSB7XG4gIHJldHVybiBkb1dhdGNoKFxuICAgIGVmZmVjdCxcbiAgICBudWxsLFxuICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBleHRlbmQoe30sIG9wdGlvbnMsIHsgZmx1c2g6IFwic3luY1wiIH0pIDogeyBmbHVzaDogXCJzeW5jXCIgfVxuICApO1xufVxuZnVuY3Rpb24gd2F0Y2goc291cmNlLCBjYiwgb3B0aW9ucykge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNGdW5jdGlvbihjYikpIHtcbiAgICB3YXJuJDEoXG4gICAgICBgXFxgd2F0Y2goZm4sIG9wdGlvbnM/KVxcYCBzaWduYXR1cmUgaGFzIGJlZW4gbW92ZWQgdG8gYSBzZXBhcmF0ZSBBUEkuIFVzZSBcXGB3YXRjaEVmZmVjdChmbiwgb3B0aW9ucz8pXFxgIGluc3RlYWQuIFxcYHdhdGNoXFxgIG5vdyBvbmx5IHN1cHBvcnRzIFxcYHdhdGNoKHNvdXJjZSwgY2IsIG9wdGlvbnM/KSBzaWduYXR1cmUuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGRvV2F0Y2goc291cmNlLCBjYiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBkb1dhdGNoKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgY29uc3QgeyBpbW1lZGlhdGUsIGRlZXAsIGZsdXNoLCBvbmNlIH0gPSBvcHRpb25zO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhY2IpIHtcbiAgICBpZiAoaW1tZWRpYXRlICE9PSB2b2lkIDApIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYHdhdGNoKCkgXCJpbW1lZGlhdGVcIiBvcHRpb24gaXMgb25seSByZXNwZWN0ZWQgd2hlbiB1c2luZyB0aGUgd2F0Y2goc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucz8pIHNpZ25hdHVyZS5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZGVlcCAhPT0gdm9pZCAwKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGB3YXRjaCgpIFwiZGVlcFwiIG9wdGlvbiBpcyBvbmx5IHJlc3BlY3RlZCB3aGVuIHVzaW5nIHRoZSB3YXRjaChzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zPykgc2lnbmF0dXJlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvbmNlICE9PSB2b2lkIDApIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYHdhdGNoKCkgXCJvbmNlXCIgb3B0aW9uIGlzIG9ubHkgcmVzcGVjdGVkIHdoZW4gdXNpbmcgdGhlIHdhdGNoKHNvdXJjZSwgY2FsbGJhY2ssIG9wdGlvbnM/KSBzaWduYXR1cmUuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYmFzZVdhdGNoT3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSBiYXNlV2F0Y2hPcHRpb25zLm9uV2FybiA9IHdhcm4kMTtcbiAgY29uc3QgcnVuc0ltbWVkaWF0ZWx5ID0gY2IgJiYgaW1tZWRpYXRlIHx8ICFjYiAmJiBmbHVzaCAhPT0gXCJwb3N0XCI7XG4gIGxldCBzc3JDbGVhbnVwO1xuICBpZiAoaXNJblNTUkNvbXBvbmVudFNldHVwKSB7XG4gICAgaWYgKGZsdXNoID09PSBcInN5bmNcIikge1xuICAgICAgY29uc3QgY3R4ID0gdXNlU1NSQ29udGV4dCgpO1xuICAgICAgc3NyQ2xlYW51cCA9IGN0eC5fX3dhdGNoZXJIYW5kbGVzIHx8IChjdHguX193YXRjaGVySGFuZGxlcyA9IFtdKTtcbiAgICB9IGVsc2UgaWYgKCFydW5zSW1tZWRpYXRlbHkpIHtcbiAgICAgIGNvbnN0IHdhdGNoU3RvcEhhbmRsZSA9ICgpID0+IHtcbiAgICAgIH07XG4gICAgICB3YXRjaFN0b3BIYW5kbGUuc3RvcCA9IE5PT1A7XG4gICAgICB3YXRjaFN0b3BIYW5kbGUucmVzdW1lID0gTk9PUDtcbiAgICAgIHdhdGNoU3RvcEhhbmRsZS5wYXVzZSA9IE5PT1A7XG4gICAgICByZXR1cm4gd2F0Y2hTdG9wSGFuZGxlO1xuICAgIH1cbiAgfVxuICBjb25zdCBpbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgYmFzZVdhdGNoT3B0aW9ucy5jYWxsID0gKGZuLCB0eXBlLCBhcmdzKSA9PiBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhmbiwgaW5zdGFuY2UsIHR5cGUsIGFyZ3MpO1xuICBsZXQgaXNQcmUgPSBmYWxzZTtcbiAgaWYgKGZsdXNoID09PSBcInBvc3RcIikge1xuICAgIGJhc2VXYXRjaE9wdGlvbnMuc2NoZWR1bGVyID0gKGpvYikgPT4ge1xuICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KGpvYiwgaW5zdGFuY2UgJiYgaW5zdGFuY2Uuc3VzcGVuc2UpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoZmx1c2ggIT09IFwic3luY1wiKSB7XG4gICAgaXNQcmUgPSB0cnVlO1xuICAgIGJhc2VXYXRjaE9wdGlvbnMuc2NoZWR1bGVyID0gKGpvYiwgaXNGaXJzdFJ1bikgPT4ge1xuICAgICAgaWYgKGlzRmlyc3RSdW4pIHtcbiAgICAgICAgam9iKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUpvYihqb2IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgYmFzZVdhdGNoT3B0aW9ucy5hdWdtZW50Sm9iID0gKGpvYikgPT4ge1xuICAgIGlmIChjYikge1xuICAgICAgam9iLmZsYWdzIHw9IDQ7XG4gICAgfVxuICAgIGlmIChpc1ByZSkge1xuICAgICAgam9iLmZsYWdzIHw9IDI7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgam9iLmlkID0gaW5zdGFuY2UudWlkO1xuICAgICAgICBqb2IuaSA9IGluc3RhbmNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgd2F0Y2hIYW5kbGUgPSB3YXRjaCQxKHNvdXJjZSwgY2IsIGJhc2VXYXRjaE9wdGlvbnMpO1xuICBpZiAoaXNJblNTUkNvbXBvbmVudFNldHVwKSB7XG4gICAgaWYgKHNzckNsZWFudXApIHtcbiAgICAgIHNzckNsZWFudXAucHVzaCh3YXRjaEhhbmRsZSk7XG4gICAgfSBlbHNlIGlmIChydW5zSW1tZWRpYXRlbHkpIHtcbiAgICAgIHdhdGNoSGFuZGxlKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3YXRjaEhhbmRsZTtcbn1cbmZ1bmN0aW9uIGluc3RhbmNlV2F0Y2goc291cmNlLCB2YWx1ZSwgb3B0aW9ucykge1xuICBjb25zdCBwdWJsaWNUaGlzID0gdGhpcy5wcm94eTtcbiAgY29uc3QgZ2V0dGVyID0gaXNTdHJpbmcoc291cmNlKSA/IHNvdXJjZS5pbmNsdWRlcyhcIi5cIikgPyBjcmVhdGVQYXRoR2V0dGVyKHB1YmxpY1RoaXMsIHNvdXJjZSkgOiAoKSA9PiBwdWJsaWNUaGlzW3NvdXJjZV0gOiBzb3VyY2UuYmluZChwdWJsaWNUaGlzLCBwdWJsaWNUaGlzKTtcbiAgbGV0IGNiO1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBjYiA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNiID0gdmFsdWUuaGFuZGxlcjtcbiAgICBvcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgY29uc3QgcmVzZXQgPSBzZXRDdXJyZW50SW5zdGFuY2UodGhpcyk7XG4gIGNvbnN0IHJlcyA9IGRvV2F0Y2goZ2V0dGVyLCBjYi5iaW5kKHB1YmxpY1RoaXMpLCBvcHRpb25zKTtcbiAgcmVzZXQoKTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGhHZXR0ZXIoY3R4LCBwYXRoKSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGN1ciA9IGN0eDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aCAmJiBjdXI7IGkrKykge1xuICAgICAgY3VyID0gY3VyW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTW9kZWwocHJvcHMsIG5hbWUsIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgY29uc3QgaSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaSkge1xuICAgIHdhcm4kMShgdXNlTW9kZWwoKSBjYWxsZWQgd2l0aG91dCBhY3RpdmUgaW5zdGFuY2UuYCk7XG4gICAgcmV0dXJuIHJlZigpO1xuICB9XG4gIGNvbnN0IGNhbWVsaXplZE5hbWUgPSBjYW1lbGl6ZShuYW1lKTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWkucHJvcHNPcHRpb25zWzBdW2NhbWVsaXplZE5hbWVdKSB7XG4gICAgd2FybiQxKGB1c2VNb2RlbCgpIGNhbGxlZCB3aXRoIHByb3AgXCIke25hbWV9XCIgd2hpY2ggaXMgbm90IGRlY2xhcmVkLmApO1xuICAgIHJldHVybiByZWYoKTtcbiAgfVxuICBjb25zdCBoeXBoZW5hdGVkTmFtZSA9IGh5cGhlbmF0ZShuYW1lKTtcbiAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kZWxNb2RpZmllcnMocHJvcHMsIGNhbWVsaXplZE5hbWUpO1xuICBjb25zdCByZXMgPSBjdXN0b21SZWYoKHRyYWNrLCB0cmlnZ2VyKSA9PiB7XG4gICAgbGV0IGxvY2FsVmFsdWU7XG4gICAgbGV0IHByZXZTZXRWYWx1ZSA9IEVNUFRZX09CSjtcbiAgICBsZXQgcHJldkVtaXR0ZWRWYWx1ZTtcbiAgICB3YXRjaFN5bmNFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgcHJvcFZhbHVlID0gcHJvcHNbY2FtZWxpemVkTmFtZV07XG4gICAgICBpZiAoaGFzQ2hhbmdlZChsb2NhbFZhbHVlLCBwcm9wVmFsdWUpKSB7XG4gICAgICAgIGxvY2FsVmFsdWUgPSBwcm9wVmFsdWU7XG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICB0cmFjaygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXQgPyBvcHRpb25zLmdldChsb2NhbFZhbHVlKSA6IGxvY2FsVmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZWRWYWx1ZSA9IG9wdGlvbnMuc2V0ID8gb3B0aW9ucy5zZXQodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIGlmICghaGFzQ2hhbmdlZChlbWl0dGVkVmFsdWUsIGxvY2FsVmFsdWUpICYmICEocHJldlNldFZhbHVlICE9PSBFTVBUWV9PQkogJiYgaGFzQ2hhbmdlZCh2YWx1ZSwgcHJldlNldFZhbHVlKSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF3UHJvcHMgPSBpLnZub2RlLnByb3BzO1xuICAgICAgICBpZiAoIShyYXdQcm9wcyAmJiAvLyBjaGVjayBpZiBwYXJlbnQgaGFzIHBhc3NlZCB2LW1vZGVsXG4gICAgICAgIChuYW1lIGluIHJhd1Byb3BzIHx8IGNhbWVsaXplZE5hbWUgaW4gcmF3UHJvcHMgfHwgaHlwaGVuYXRlZE5hbWUgaW4gcmF3UHJvcHMpICYmIChgb25VcGRhdGU6JHtuYW1lfWAgaW4gcmF3UHJvcHMgfHwgYG9uVXBkYXRlOiR7Y2FtZWxpemVkTmFtZX1gIGluIHJhd1Byb3BzIHx8IGBvblVwZGF0ZToke2h5cGhlbmF0ZWROYW1lfWAgaW4gcmF3UHJvcHMpKSkge1xuICAgICAgICAgIGxvY2FsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB0cmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaS5lbWl0KGB1cGRhdGU6JHtuYW1lfWAsIGVtaXR0ZWRWYWx1ZSk7XG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBlbWl0dGVkVmFsdWUpICYmIGhhc0NoYW5nZWQodmFsdWUsIHByZXZTZXRWYWx1ZSkgJiYgIWhhc0NoYW5nZWQoZW1pdHRlZFZhbHVlLCBwcmV2RW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2U2V0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcHJldkVtaXR0ZWRWYWx1ZSA9IGVtaXR0ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgcmVzW1N5bWJvbC5pdGVyYXRvcl0gPSAoKSA9PiB7XG4gICAgbGV0IGkyID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKGkyIDwgMikge1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBpMisrID8gbW9kaWZpZXJzIHx8IEVNUFRZX09CSiA6IHJlcywgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICByZXR1cm4gcmVzO1xufVxuY29uc3QgZ2V0TW9kZWxNb2RpZmllcnMgPSAocHJvcHMsIG1vZGVsTmFtZSkgPT4ge1xuICByZXR1cm4gbW9kZWxOYW1lID09PSBcIm1vZGVsVmFsdWVcIiB8fCBtb2RlbE5hbWUgPT09IFwibW9kZWwtdmFsdWVcIiA/IHByb3BzLm1vZGVsTW9kaWZpZXJzIDogcHJvcHNbYCR7bW9kZWxOYW1lfU1vZGlmaWVyc2BdIHx8IHByb3BzW2Ake2NhbWVsaXplKG1vZGVsTmFtZSl9TW9kaWZpZXJzYF0gfHwgcHJvcHNbYCR7aHlwaGVuYXRlKG1vZGVsTmFtZSl9TW9kaWZpZXJzYF07XG59O1xuXG5mdW5jdGlvbiBlbWl0KGluc3RhbmNlLCBldmVudCwgLi4ucmF3QXJncykge1xuICBpZiAoaW5zdGFuY2UuaXNVbm1vdW50ZWQpIHJldHVybjtcbiAgY29uc3QgcHJvcHMgPSBpbnN0YW5jZS52bm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc3Qge1xuICAgICAgZW1pdHNPcHRpb25zLFxuICAgICAgcHJvcHNPcHRpb25zOiBbcHJvcHNPcHRpb25zXVxuICAgIH0gPSBpbnN0YW5jZTtcbiAgICBpZiAoZW1pdHNPcHRpb25zKSB7XG4gICAgICBpZiAoIShldmVudCBpbiBlbWl0c09wdGlvbnMpICYmIHRydWUpIHtcbiAgICAgICAgaWYgKCFwcm9wc09wdGlvbnMgfHwgISh0b0hhbmRsZXJLZXkoY2FtZWxpemUoZXZlbnQpKSBpbiBwcm9wc09wdGlvbnMpKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYENvbXBvbmVudCBlbWl0dGVkIGV2ZW50IFwiJHtldmVudH1cIiBidXQgaXQgaXMgbmVpdGhlciBkZWNsYXJlZCBpbiB0aGUgZW1pdHMgb3B0aW9uIG5vciBhcyBhbiBcIiR7dG9IYW5kbGVyS2V5KGNhbWVsaXplKGV2ZW50KSl9XCIgcHJvcC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gZW1pdHNPcHRpb25zW2V2ZW50XTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdG9yKSkge1xuICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0b3IoLi4ucmF3QXJncyk7XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICAgIGBJbnZhbGlkIGV2ZW50IGFyZ3VtZW50czogZXZlbnQgdmFsaWRhdGlvbiBmYWlsZWQgZm9yIGV2ZW50IFwiJHtldmVudH1cIi5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgYXJncyA9IHJhd0FyZ3M7XG4gIGNvbnN0IGlzTW9kZWxMaXN0ZW5lciA9IGV2ZW50LnN0YXJ0c1dpdGgoXCJ1cGRhdGU6XCIpO1xuICBjb25zdCBtb2RpZmllcnMgPSBpc01vZGVsTGlzdGVuZXIgJiYgZ2V0TW9kZWxNb2RpZmllcnMocHJvcHMsIGV2ZW50LnNsaWNlKDcpKTtcbiAgaWYgKG1vZGlmaWVycykge1xuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgYXJncyA9IHJhd0FyZ3MubWFwKChhKSA9PiBpc1N0cmluZyhhKSA/IGEudHJpbSgpIDogYSk7XG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICBhcmdzID0gcmF3QXJncy5tYXAobG9vc2VUb051bWJlcik7XG4gICAgfVxuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykge1xuICAgIGRldnRvb2xzQ29tcG9uZW50RW1pdChpbnN0YW5jZSwgZXZlbnQsIGFyZ3MpO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc3QgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgcHJvcHNbdG9IYW5kbGVyS2V5KGxvd2VyQ2FzZUV2ZW50KV0pIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYEV2ZW50IFwiJHtsb3dlckNhc2VFdmVudH1cIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCAke2Zvcm1hdENvbXBvbmVudE5hbWUoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgaW5zdGFuY2UudHlwZVxuICAgICAgICApfSBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXCIke2V2ZW50fVwiLiBOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSB2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXCIke2h5cGhlbmF0ZShcbiAgICAgICAgICBldmVudFxuICAgICAgICApfVwiIGluc3RlYWQgb2YgXCIke2V2ZW50fVwiLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGxldCBoYW5kbGVyTmFtZTtcbiAgbGV0IGhhbmRsZXIgPSBwcm9wc1toYW5kbGVyTmFtZSA9IHRvSGFuZGxlcktleShldmVudCldIHx8IC8vIGFsc28gdHJ5IGNhbWVsQ2FzZSBldmVudCBoYW5kbGVyICgjMjI0OSlcbiAgcHJvcHNbaGFuZGxlck5hbWUgPSB0b0hhbmRsZXJLZXkoY2FtZWxpemUoZXZlbnQpKV07XG4gIGlmICghaGFuZGxlciAmJiBpc01vZGVsTGlzdGVuZXIpIHtcbiAgICBoYW5kbGVyID0gcHJvcHNbaGFuZGxlck5hbWUgPSB0b0hhbmRsZXJLZXkoaHlwaGVuYXRlKGV2ZW50KSldO1xuICB9XG4gIGlmIChoYW5kbGVyKSB7XG4gICAgY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoXG4gICAgICBoYW5kbGVyLFxuICAgICAgaW5zdGFuY2UsXG4gICAgICA2LFxuICAgICAgYXJnc1xuICAgICk7XG4gIH1cbiAgY29uc3Qgb25jZUhhbmRsZXIgPSBwcm9wc1toYW5kbGVyTmFtZSArIGBPbmNlYF07XG4gIGlmIChvbmNlSGFuZGxlcikge1xuICAgIGlmICghaW5zdGFuY2UuZW1pdHRlZCkge1xuICAgICAgaW5zdGFuY2UuZW1pdHRlZCA9IHt9O1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuZW1pdHRlZFtoYW5kbGVyTmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5zdGFuY2UuZW1pdHRlZFtoYW5kbGVyTmFtZV0gPSB0cnVlO1xuICAgIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKFxuICAgICAgb25jZUhhbmRsZXIsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIDYsXG4gICAgICBhcmdzXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRW1pdHNPcHRpb25zKGNvbXAsIGFwcENvbnRleHQsIGFzTWl4aW4gPSBmYWxzZSkge1xuICBjb25zdCBjYWNoZSA9IGFwcENvbnRleHQuZW1pdHNDYWNoZTtcbiAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KGNvbXApO1xuICBpZiAoY2FjaGVkICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG4gIGNvbnN0IHJhdyA9IGNvbXAuZW1pdHM7XG4gIGxldCBub3JtYWxpemVkID0ge307XG4gIGxldCBoYXNFeHRlbmRzID0gZmFsc2U7XG4gIGlmIChfX1ZVRV9PUFRJT05TX0FQSV9fICYmICFpc0Z1bmN0aW9uKGNvbXApKSB7XG4gICAgY29uc3QgZXh0ZW5kRW1pdHMgPSAocmF3MikgPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZyb21FeHRlbmQgPSBub3JtYWxpemVFbWl0c09wdGlvbnMocmF3MiwgYXBwQ29udGV4dCwgdHJ1ZSk7XG4gICAgICBpZiAobm9ybWFsaXplZEZyb21FeHRlbmQpIHtcbiAgICAgICAgaGFzRXh0ZW5kcyA9IHRydWU7XG4gICAgICAgIGV4dGVuZChub3JtYWxpemVkLCBub3JtYWxpemVkRnJvbUV4dGVuZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoIWFzTWl4aW4gJiYgYXBwQ29udGV4dC5taXhpbnMubGVuZ3RoKSB7XG4gICAgICBhcHBDb250ZXh0Lm1peGlucy5mb3JFYWNoKGV4dGVuZEVtaXRzKTtcbiAgICB9XG4gICAgaWYgKGNvbXAuZXh0ZW5kcykge1xuICAgICAgZXh0ZW5kRW1pdHMoY29tcC5leHRlbmRzKTtcbiAgICB9XG4gICAgaWYgKGNvbXAubWl4aW5zKSB7XG4gICAgICBjb21wLm1peGlucy5mb3JFYWNoKGV4dGVuZEVtaXRzKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFyYXcgJiYgIWhhc0V4dGVuZHMpIHtcbiAgICBpZiAoaXNPYmplY3QoY29tcCkpIHtcbiAgICAgIGNhY2hlLnNldChjb21wLCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGlzQXJyYXkocmF3KSkge1xuICAgIHJhdy5mb3JFYWNoKChrZXkpID0+IG5vcm1hbGl6ZWRba2V5XSA9IG51bGwpO1xuICB9IGVsc2Uge1xuICAgIGV4dGVuZChub3JtYWxpemVkLCByYXcpO1xuICB9XG4gIGlmIChpc09iamVjdChjb21wKSkge1xuICAgIGNhY2hlLnNldChjb21wLCBub3JtYWxpemVkKTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cbmZ1bmN0aW9uIGlzRW1pdExpc3RlbmVyKG9wdGlvbnMsIGtleSkge1xuICBpZiAoIW9wdGlvbnMgfHwgIWlzT24oa2V5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBrZXkgPSBrZXkuc2xpY2UoMikucmVwbGFjZSgvT25jZSQvLCBcIlwiKTtcbiAgcmV0dXJuIGhhc093bihvcHRpb25zLCBrZXlbMF0udG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgxKSkgfHwgaGFzT3duKG9wdGlvbnMsIGh5cGhlbmF0ZShrZXkpKSB8fCBoYXNPd24ob3B0aW9ucywga2V5KTtcbn1cblxubGV0IGFjY2Vzc2VkQXR0cnMgPSBmYWxzZTtcbmZ1bmN0aW9uIG1hcmtBdHRyc0FjY2Vzc2VkKCkge1xuICBhY2Nlc3NlZEF0dHJzID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudFJvb3QoaW5zdGFuY2UpIHtcbiAgY29uc3Qge1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICB2bm9kZSxcbiAgICBwcm94eSxcbiAgICB3aXRoUHJveHksXG4gICAgcHJvcHNPcHRpb25zOiBbcHJvcHNPcHRpb25zXSxcbiAgICBzbG90cyxcbiAgICBhdHRycyxcbiAgICBlbWl0LFxuICAgIHJlbmRlcixcbiAgICByZW5kZXJDYWNoZSxcbiAgICBwcm9wcyxcbiAgICBkYXRhLFxuICAgIHNldHVwU3RhdGUsXG4gICAgY3R4LFxuICAgIGluaGVyaXRBdHRyc1xuICB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IHByZXYgPSBzZXRDdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UoaW5zdGFuY2UpO1xuICBsZXQgcmVzdWx0O1xuICBsZXQgZmFsbHRocm91Z2hBdHRycztcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBhY2Nlc3NlZEF0dHJzID0gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAodm5vZGUuc2hhcGVGbGFnICYgNCkge1xuICAgICAgY29uc3QgcHJveHlUb1VzZSA9IHdpdGhQcm94eSB8fCBwcm94eTtcbiAgICAgIGNvbnN0IHRoaXNQcm94eSA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2V0dXBTdGF0ZS5fX2lzU2NyaXB0U2V0dXAgPyBuZXcgUHJveHkocHJveHlUb1VzZSwge1xuICAgICAgICBnZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYFByb3BlcnR5ICcke1N0cmluZyhcbiAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICApfScgd2FzIGFjY2Vzc2VkIHZpYSAndGhpcycuIEF2b2lkIHVzaW5nICd0aGlzJyBpbiB0ZW1wbGF0ZXMuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gICAgICAgIH1cbiAgICAgIH0pIDogcHJveHlUb1VzZTtcbiAgICAgIHJlc3VsdCA9IG5vcm1hbGl6ZVZOb2RlKFxuICAgICAgICByZW5kZXIuY2FsbChcbiAgICAgICAgICB0aGlzUHJveHksXG4gICAgICAgICAgcHJveHlUb1VzZSxcbiAgICAgICAgICByZW5kZXJDYWNoZSxcbiAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KHByb3BzKSA6IHByb3BzLFxuICAgICAgICAgIHNldHVwU3RhdGUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBjdHhcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGZhbGx0aHJvdWdoQXR0cnMgPSBhdHRycztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVuZGVyMiA9IENvbXBvbmVudDtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGF0dHJzID09PSBwcm9wcykge1xuICAgICAgICBtYXJrQXR0cnNBY2Nlc3NlZCgpO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gbm9ybWFsaXplVk5vZGUoXG4gICAgICAgIHJlbmRlcjIubGVuZ3RoID4gMSA/IHJlbmRlcjIoXG4gICAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNoYWxsb3dSZWFkb25seShwcm9wcykgOiBwcm9wcyxcbiAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8ge1xuICAgICAgICAgICAgZ2V0IGF0dHJzKCkge1xuICAgICAgICAgICAgICBtYXJrQXR0cnNBY2Nlc3NlZCgpO1xuICAgICAgICAgICAgICByZXR1cm4gc2hhbGxvd1JlYWRvbmx5KGF0dHJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbG90cyxcbiAgICAgICAgICAgIGVtaXRcbiAgICAgICAgICB9IDogeyBhdHRycywgc2xvdHMsIGVtaXQgfVxuICAgICAgICApIDogcmVuZGVyMihcbiAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KHByb3BzKSA6IHByb3BzLFxuICAgICAgICAgIG51bGxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGZhbGx0aHJvdWdoQXR0cnMgPSBDb21wb25lbnQucHJvcHMgPyBhdHRycyA6IGdldEZ1bmN0aW9uYWxGYWxsdGhyb3VnaChhdHRycyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBibG9ja1N0YWNrLmxlbmd0aCA9IDA7XG4gICAgaGFuZGxlRXJyb3IoZXJyLCBpbnN0YW5jZSwgMSk7XG4gICAgcmVzdWx0ID0gY3JlYXRlVk5vZGUoQ29tbWVudCk7XG4gIH1cbiAgbGV0IHJvb3QgPSByZXN1bHQ7XG4gIGxldCBzZXRSb290ID0gdm9pZCAwO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiByZXN1bHQucGF0Y2hGbGFnID4gMCAmJiByZXN1bHQucGF0Y2hGbGFnICYgMjA0OCkge1xuICAgIFtyb290LCBzZXRSb290XSA9IGdldENoaWxkUm9vdChyZXN1bHQpO1xuICB9XG4gIGlmIChmYWxsdGhyb3VnaEF0dHJzICYmIGluaGVyaXRBdHRycyAhPT0gZmFsc2UpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZmFsbHRocm91Z2hBdHRycyk7XG4gICAgY29uc3QgeyBzaGFwZUZsYWcgfSA9IHJvb3Q7XG4gICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICBpZiAoc2hhcGVGbGFnICYgKDEgfCA2KSkge1xuICAgICAgICBpZiAocHJvcHNPcHRpb25zICYmIGtleXMuc29tZShpc01vZGVsTGlzdGVuZXIpKSB7XG4gICAgICAgICAgZmFsbHRocm91Z2hBdHRycyA9IGZpbHRlck1vZGVsTGlzdGVuZXJzKFxuICAgICAgICAgICAgZmFsbHRocm91Z2hBdHRycyxcbiAgICAgICAgICAgIHByb3BzT3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdCA9IGNsb25lVk5vZGUocm9vdCwgZmFsbHRocm91Z2hBdHRycywgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFhY2Nlc3NlZEF0dHJzICYmIHJvb3QudHlwZSAhPT0gQ29tbWVudCkge1xuICAgICAgICBjb25zdCBhbGxBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICAgICAgY29uc3QgZXZlbnRBdHRycyA9IFtdO1xuICAgICAgICBjb25zdCBleHRyYUF0dHJzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYWxsQXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYWxsQXR0cnNbaV07XG4gICAgICAgICAgaWYgKGlzT24oa2V5KSkge1xuICAgICAgICAgICAgaWYgKCFpc01vZGVsTGlzdGVuZXIoa2V5KSkge1xuICAgICAgICAgICAgICBldmVudEF0dHJzLnB1c2goa2V5WzJdLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHRyYUF0dHJzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dHJhQXR0cnMubGVuZ3RoKSB7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYEV4dHJhbmVvdXMgbm9uLXByb3BzIGF0dHJpYnV0ZXMgKCR7ZXh0cmFBdHRycy5qb2luKFwiLCBcIil9KSB3ZXJlIHBhc3NlZCB0byBjb21wb25lbnQgYnV0IGNvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGluaGVyaXRlZCBiZWNhdXNlIGNvbXBvbmVudCByZW5kZXJzIGZyYWdtZW50IG9yIHRleHQgb3IgdGVsZXBvcnQgcm9vdCBub2Rlcy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnRBdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgRXh0cmFuZW91cyBub24tZW1pdHMgZXZlbnQgbGlzdGVuZXJzICgke2V2ZW50QXR0cnMuam9pbihcIiwgXCIpfSkgd2VyZSBwYXNzZWQgdG8gY29tcG9uZW50IGJ1dCBjb3VsZCBub3QgYmUgYXV0b21hdGljYWxseSBpbmhlcml0ZWQgYmVjYXVzZSBjb21wb25lbnQgcmVuZGVycyBmcmFnbWVudCBvciB0ZXh0IHJvb3Qgbm9kZXMuIElmIHRoZSBsaXN0ZW5lciBpcyBpbnRlbmRlZCB0byBiZSBhIGNvbXBvbmVudCBjdXN0b20gZXZlbnQgbGlzdGVuZXIgb25seSwgZGVjbGFyZSBpdCB1c2luZyB0aGUgXCJlbWl0c1wiIG9wdGlvbi5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodm5vZGUuZGlycykge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpc0VsZW1lbnRSb290KHJvb3QpKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGBSdW50aW1lIGRpcmVjdGl2ZSB1c2VkIG9uIGNvbXBvbmVudCB3aXRoIG5vbi1lbGVtZW50IHJvb3Qgbm9kZS4gVGhlIGRpcmVjdGl2ZXMgd2lsbCBub3QgZnVuY3Rpb24gYXMgaW50ZW5kZWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcm9vdCA9IGNsb25lVk5vZGUocm9vdCwgbnVsbCwgZmFsc2UsIHRydWUpO1xuICAgIHJvb3QuZGlycyA9IHJvb3QuZGlycyA/IHJvb3QuZGlycy5jb25jYXQodm5vZGUuZGlycykgOiB2bm9kZS5kaXJzO1xuICB9XG4gIGlmICh2bm9kZS50cmFuc2l0aW9uKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWlzRWxlbWVudFJvb3Qocm9vdCkpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYENvbXBvbmVudCBpbnNpZGUgPFRyYW5zaXRpb24+IHJlbmRlcnMgbm9uLWVsZW1lbnQgcm9vdCBub2RlIHRoYXQgY2Fubm90IGJlIGFuaW1hdGVkLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHNldFRyYW5zaXRpb25Ib29rcyhyb290LCB2bm9kZS50cmFuc2l0aW9uKTtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBzZXRSb290KSB7XG4gICAgc2V0Um9vdChyb290KTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSByb290O1xuICB9XG4gIHNldEN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZShwcmV2KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IGdldENoaWxkUm9vdCA9ICh2bm9kZSkgPT4ge1xuICBjb25zdCByYXdDaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICBjb25zdCBkeW5hbWljQ2hpbGRyZW4gPSB2bm9kZS5keW5hbWljQ2hpbGRyZW47XG4gIGNvbnN0IGNoaWxkUm9vdCA9IGZpbHRlclNpbmdsZVJvb3QocmF3Q2hpbGRyZW4sIGZhbHNlKTtcbiAgaWYgKCFjaGlsZFJvb3QpIHtcbiAgICByZXR1cm4gW3Zub2RlLCB2b2lkIDBdO1xuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY2hpbGRSb290LnBhdGNoRmxhZyA+IDAgJiYgY2hpbGRSb290LnBhdGNoRmxhZyAmIDIwNDgpIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRSb290KGNoaWxkUm9vdCk7XG4gIH1cbiAgY29uc3QgaW5kZXggPSByYXdDaGlsZHJlbi5pbmRleE9mKGNoaWxkUm9vdCk7XG4gIGNvbnN0IGR5bmFtaWNJbmRleCA9IGR5bmFtaWNDaGlsZHJlbiA/IGR5bmFtaWNDaGlsZHJlbi5pbmRleE9mKGNoaWxkUm9vdCkgOiAtMTtcbiAgY29uc3Qgc2V0Um9vdCA9ICh1cGRhdGVkUm9vdCkgPT4ge1xuICAgIHJhd0NoaWxkcmVuW2luZGV4XSA9IHVwZGF0ZWRSb290O1xuICAgIGlmIChkeW5hbWljQ2hpbGRyZW4pIHtcbiAgICAgIGlmIChkeW5hbWljSW5kZXggPiAtMSkge1xuICAgICAgICBkeW5hbWljQ2hpbGRyZW5bZHluYW1pY0luZGV4XSA9IHVwZGF0ZWRSb290O1xuICAgICAgfSBlbHNlIGlmICh1cGRhdGVkUm9vdC5wYXRjaEZsYWcgPiAwKSB7XG4gICAgICAgIHZub2RlLmR5bmFtaWNDaGlsZHJlbiA9IFsuLi5keW5hbWljQ2hpbGRyZW4sIHVwZGF0ZWRSb290XTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBbbm9ybWFsaXplVk5vZGUoY2hpbGRSb290KSwgc2V0Um9vdF07XG59O1xuZnVuY3Rpb24gZmlsdGVyU2luZ2xlUm9vdChjaGlsZHJlbiwgcmVjdXJzZSA9IHRydWUpIHtcbiAgbGV0IHNpbmdsZVJvb3Q7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgIT09IENvbW1lbnQgfHwgY2hpbGQuY2hpbGRyZW4gPT09IFwidi1pZlwiKSB7XG4gICAgICAgIGlmIChzaW5nbGVSb290KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbmdsZVJvb3QgPSBjaGlsZDtcbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiByZWN1cnNlICYmIHNpbmdsZVJvb3QucGF0Y2hGbGFnID4gMCAmJiBzaW5nbGVSb290LnBhdGNoRmxhZyAmIDIwNDgpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJTaW5nbGVSb290KHNpbmdsZVJvb3QuY2hpbGRyZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHJldHVybiBzaW5nbGVSb290O1xufVxuY29uc3QgZ2V0RnVuY3Rpb25hbEZhbGx0aHJvdWdoID0gKGF0dHJzKSA9PiB7XG4gIGxldCByZXM7XG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGtleSA9PT0gXCJjbGFzc1wiIHx8IGtleSA9PT0gXCJzdHlsZVwiIHx8IGlzT24oa2V5KSkge1xuICAgICAgKHJlcyB8fCAocmVzID0ge30pKVtrZXldID0gYXR0cnNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5jb25zdCBmaWx0ZXJNb2RlbExpc3RlbmVycyA9IChhdHRycywgcHJvcHMpID0+IHtcbiAgY29uc3QgcmVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKCFpc01vZGVsTGlzdGVuZXIoa2V5KSB8fCAhKGtleS5zbGljZSg5KSBpbiBwcm9wcykpIHtcbiAgICAgIHJlc1trZXldID0gYXR0cnNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5jb25zdCBpc0VsZW1lbnRSb290ID0gKHZub2RlKSA9PiB7XG4gIHJldHVybiB2bm9kZS5zaGFwZUZsYWcgJiAoNiB8IDEpIHx8IHZub2RlLnR5cGUgPT09IENvbW1lbnQ7XG59O1xuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZWTm9kZSwgbmV4dFZOb2RlLCBvcHRpbWl6ZWQpIHtcbiAgY29uc3QgeyBwcm9wczogcHJldlByb3BzLCBjaGlsZHJlbjogcHJldkNoaWxkcmVuLCBjb21wb25lbnQgfSA9IHByZXZWTm9kZTtcbiAgY29uc3QgeyBwcm9wczogbmV4dFByb3BzLCBjaGlsZHJlbjogbmV4dENoaWxkcmVuLCBwYXRjaEZsYWcgfSA9IG5leHRWTm9kZTtcbiAgY29uc3QgZW1pdHMgPSBjb21wb25lbnQuZW1pdHNPcHRpb25zO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAocHJldkNoaWxkcmVuIHx8IG5leHRDaGlsZHJlbikgJiYgaXNIbXJVcGRhdGluZykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChuZXh0Vk5vZGUuZGlycyB8fCBuZXh0Vk5vZGUudHJhbnNpdGlvbikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChvcHRpbWl6ZWQgJiYgcGF0Y2hGbGFnID49IDApIHtcbiAgICBpZiAocGF0Y2hGbGFnICYgMTAyNCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChwYXRjaEZsYWcgJiAxNikge1xuICAgICAgaWYgKCFwcmV2UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICEhbmV4dFByb3BzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc1Byb3BzQ2hhbmdlZChwcmV2UHJvcHMsIG5leHRQcm9wcywgZW1pdHMpO1xuICAgIH0gZWxzZSBpZiAocGF0Y2hGbGFnICYgOCkge1xuICAgICAgY29uc3QgZHluYW1pY1Byb3BzID0gbmV4dFZOb2RlLmR5bmFtaWNQcm9wcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHluYW1pY1Byb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGR5bmFtaWNQcm9wc1tpXTtcbiAgICAgICAgaWYgKG5leHRQcm9wc1trZXldICE9PSBwcmV2UHJvcHNba2V5XSAmJiAhaXNFbWl0TGlzdGVuZXIoZW1pdHMsIGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocHJldkNoaWxkcmVuIHx8IG5leHRDaGlsZHJlbikge1xuICAgICAgaWYgKCFuZXh0Q2hpbGRyZW4gfHwgIW5leHRDaGlsZHJlbi4kc3RhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldlByb3BzID09PSBuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFwcmV2UHJvcHMpIHtcbiAgICAgIHJldHVybiAhIW5leHRQcm9wcztcbiAgICB9XG4gICAgaWYgKCFuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzUHJvcHNDaGFuZ2VkKHByZXZQcm9wcywgbmV4dFByb3BzLCBlbWl0cyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaGFzUHJvcHNDaGFuZ2VkKHByZXZQcm9wcywgbmV4dFByb3BzLCBlbWl0c09wdGlvbnMpIHtcbiAgY29uc3QgbmV4dEtleXMgPSBPYmplY3Qua2V5cyhuZXh0UHJvcHMpO1xuICBpZiAobmV4dEtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwcmV2UHJvcHMpLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBuZXh0S2V5c1tpXTtcbiAgICBpZiAobmV4dFByb3BzW2tleV0gIT09IHByZXZQcm9wc1trZXldICYmICFpc0VtaXRMaXN0ZW5lcihlbWl0c09wdGlvbnMsIGtleSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB1cGRhdGVIT0NIb3N0RWwoeyB2bm9kZSwgcGFyZW50IH0sIGVsKSB7XG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBjb25zdCByb290ID0gcGFyZW50LnN1YlRyZWU7XG4gICAgaWYgKHJvb3Quc3VzcGVuc2UgJiYgcm9vdC5zdXNwZW5zZS5hY3RpdmVCcmFuY2ggPT09IHZub2RlKSB7XG4gICAgICByb290LmVsID0gdm5vZGUuZWw7XG4gICAgfVxuICAgIGlmIChyb290ID09PSB2bm9kZSkge1xuICAgICAgKHZub2RlID0gcGFyZW50LnZub2RlKS5lbCA9IGVsO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGlzU3VzcGVuc2UgPSAodHlwZSkgPT4gdHlwZS5fX2lzU3VzcGVuc2U7XG5sZXQgc3VzcGVuc2VJZCA9IDA7XG5jb25zdCBTdXNwZW5zZUltcGwgPSB7XG4gIG5hbWU6IFwiU3VzcGVuc2VcIixcbiAgLy8gSW4gb3JkZXIgdG8gbWFrZSBTdXNwZW5zZSB0cmVlLXNoYWthYmxlLCB3ZSBuZWVkIHRvIGF2b2lkIGltcG9ydGluZyBpdFxuICAvLyBkaXJlY3RseSBpbiB0aGUgcmVuZGVyZXIuIFRoZSByZW5kZXJlciBjaGVja3MgZm9yIHRoZSBfX2lzU3VzcGVuc2UgZmxhZ1xuICAvLyBvbiBhIHZub2RlJ3MgdHlwZSBhbmQgY2FsbHMgdGhlIGBwcm9jZXNzYCBtZXRob2QsIHBhc3NpbmcgaW4gcmVuZGVyZXJcbiAgLy8gaW50ZXJuYWxzLlxuICBfX2lzU3VzcGVuc2U6IHRydWUsXG4gIHByb2Nlc3MobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCwgcmVuZGVyZXJJbnRlcm5hbHMpIHtcbiAgICBpZiAobjEgPT0gbnVsbCkge1xuICAgICAgbW91bnRTdXNwZW5zZShcbiAgICAgICAgbjIsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkLFxuICAgICAgICByZW5kZXJlckludGVybmFsc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmVudFN1c3BlbnNlICYmIHBhcmVudFN1c3BlbnNlLmRlcHMgPiAwICYmICFuMS5zdXNwZW5zZS5pc0luRmFsbGJhY2spIHtcbiAgICAgICAgbjIuc3VzcGVuc2UgPSBuMS5zdXNwZW5zZTtcbiAgICAgICAgbjIuc3VzcGVuc2Uudm5vZGUgPSBuMjtcbiAgICAgICAgbjIuZWwgPSBuMS5lbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGF0Y2hTdXNwZW5zZShcbiAgICAgICAgbjEsXG4gICAgICAgIG4yLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkLFxuICAgICAgICByZW5kZXJlckludGVybmFsc1xuICAgICAgKTtcbiAgICB9XG4gIH0sXG4gIGh5ZHJhdGU6IGh5ZHJhdGVTdXNwZW5zZSxcbiAgbm9ybWFsaXplOiBub3JtYWxpemVTdXNwZW5zZUNoaWxkcmVuXG59O1xuY29uc3QgU3VzcGVuc2UgPSBTdXNwZW5zZUltcGwgO1xuZnVuY3Rpb24gdHJpZ2dlckV2ZW50KHZub2RlLCBuYW1lKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB2bm9kZS5wcm9wcyAmJiB2bm9kZS5wcm9wc1tuYW1lXTtcbiAgaWYgKGlzRnVuY3Rpb24oZXZlbnRMaXN0ZW5lcikpIHtcbiAgICBldmVudExpc3RlbmVyKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1vdW50U3VzcGVuc2Uodm5vZGUsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkLCByZW5kZXJlckludGVybmFscykge1xuICBjb25zdCB7XG4gICAgcDogcGF0Y2gsXG4gICAgbzogeyBjcmVhdGVFbGVtZW50IH1cbiAgfSA9IHJlbmRlcmVySW50ZXJuYWxzO1xuICBjb25zdCBoaWRkZW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdXNwZW5zZSA9IHZub2RlLnN1c3BlbnNlID0gY3JlYXRlU3VzcGVuc2VCb3VuZGFyeShcbiAgICB2bm9kZSxcbiAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgY29udGFpbmVyLFxuICAgIGhpZGRlbkNvbnRhaW5lcixcbiAgICBhbmNob3IsXG4gICAgbmFtZXNwYWNlLFxuICAgIHNsb3RTY29wZUlkcyxcbiAgICBvcHRpbWl6ZWQsXG4gICAgcmVuZGVyZXJJbnRlcm5hbHNcbiAgKTtcbiAgcGF0Y2goXG4gICAgbnVsbCxcbiAgICBzdXNwZW5zZS5wZW5kaW5nQnJhbmNoID0gdm5vZGUuc3NDb250ZW50LFxuICAgIGhpZGRlbkNvbnRhaW5lcixcbiAgICBudWxsLFxuICAgIHBhcmVudENvbXBvbmVudCxcbiAgICBzdXNwZW5zZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgc2xvdFNjb3BlSWRzXG4gICk7XG4gIGlmIChzdXNwZW5zZS5kZXBzID4gMCkge1xuICAgIHRyaWdnZXJFdmVudCh2bm9kZSwgXCJvblBlbmRpbmdcIik7XG4gICAgdHJpZ2dlckV2ZW50KHZub2RlLCBcIm9uRmFsbGJhY2tcIik7XG4gICAgcGF0Y2goXG4gICAgICBudWxsLFxuICAgICAgdm5vZGUuc3NGYWxsYmFjayxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGFuY2hvcixcbiAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgIG51bGwsXG4gICAgICAvLyBmYWxsYmFjayB0cmVlIHdpbGwgbm90IGhhdmUgc3VzcGVuc2UgY29udGV4dFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgc2xvdFNjb3BlSWRzXG4gICAgKTtcbiAgICBzZXRBY3RpdmVCcmFuY2goc3VzcGVuc2UsIHZub2RlLnNzRmFsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHN1c3BlbnNlLnJlc29sdmUoZmFsc2UsIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBwYXRjaFN1c3BlbnNlKG4xLCBuMiwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudENvbXBvbmVudCwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCwgeyBwOiBwYXRjaCwgdW06IHVubW91bnQsIG86IHsgY3JlYXRlRWxlbWVudCB9IH0pIHtcbiAgY29uc3Qgc3VzcGVuc2UgPSBuMi5zdXNwZW5zZSA9IG4xLnN1c3BlbnNlO1xuICBzdXNwZW5zZS52bm9kZSA9IG4yO1xuICBuMi5lbCA9IG4xLmVsO1xuICBjb25zdCBuZXdCcmFuY2ggPSBuMi5zc0NvbnRlbnQ7XG4gIGNvbnN0IG5ld0ZhbGxiYWNrID0gbjIuc3NGYWxsYmFjaztcbiAgY29uc3QgeyBhY3RpdmVCcmFuY2gsIHBlbmRpbmdCcmFuY2gsIGlzSW5GYWxsYmFjaywgaXNIeWRyYXRpbmcgfSA9IHN1c3BlbnNlO1xuICBpZiAocGVuZGluZ0JyYW5jaCkge1xuICAgIHN1c3BlbnNlLnBlbmRpbmdCcmFuY2ggPSBuZXdCcmFuY2g7XG4gICAgaWYgKGlzU2FtZVZOb2RlVHlwZShuZXdCcmFuY2gsIHBlbmRpbmdCcmFuY2gpKSB7XG4gICAgICBwYXRjaChcbiAgICAgICAgcGVuZGluZ0JyYW5jaCxcbiAgICAgICAgbmV3QnJhbmNoLFxuICAgICAgICBzdXNwZW5zZS5oaWRkZW5Db250YWluZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgc3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICk7XG4gICAgICBpZiAoc3VzcGVuc2UuZGVwcyA8PSAwKSB7XG4gICAgICAgIHN1c3BlbnNlLnJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNJbkZhbGxiYWNrKSB7XG4gICAgICAgIGlmICghaXNIeWRyYXRpbmcpIHtcbiAgICAgICAgICBwYXRjaChcbiAgICAgICAgICAgIGFjdGl2ZUJyYW5jaCxcbiAgICAgICAgICAgIG5ld0ZhbGxiYWNrLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRyZWUgd2lsbCBub3QgaGF2ZSBzdXNwZW5zZSBjb250ZXh0XG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldEFjdGl2ZUJyYW5jaChzdXNwZW5zZSwgbmV3RmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1c3BlbnNlLnBlbmRpbmdJZCA9IHN1c3BlbnNlSWQrKztcbiAgICAgIGlmIChpc0h5ZHJhdGluZykge1xuICAgICAgICBzdXNwZW5zZS5pc0h5ZHJhdGluZyA9IGZhbHNlO1xuICAgICAgICBzdXNwZW5zZS5hY3RpdmVCcmFuY2ggPSBwZW5kaW5nQnJhbmNoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5tb3VudChwZW5kaW5nQnJhbmNoLCBwYXJlbnRDb21wb25lbnQsIHN1c3BlbnNlKTtcbiAgICAgIH1cbiAgICAgIHN1c3BlbnNlLmRlcHMgPSAwO1xuICAgICAgc3VzcGVuc2UuZWZmZWN0cy5sZW5ndGggPSAwO1xuICAgICAgc3VzcGVuc2UuaGlkZGVuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChpc0luRmFsbGJhY2spIHtcbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBuZXdCcmFuY2gsXG4gICAgICAgICAgc3VzcGVuc2UuaGlkZGVuQ29udGFpbmVyLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChzdXNwZW5zZS5kZXBzIDw9IDApIHtcbiAgICAgICAgICBzdXNwZW5zZS5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0Y2goXG4gICAgICAgICAgICBhY3RpdmVCcmFuY2gsXG4gICAgICAgICAgICBuZXdGYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAvLyBmYWxsYmFjayB0cmVlIHdpbGwgbm90IGhhdmUgc3VzcGVuc2UgY29udGV4dFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRBY3RpdmVCcmFuY2goc3VzcGVuc2UsIG5ld0ZhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVCcmFuY2ggJiYgaXNTYW1lVk5vZGVUeXBlKG5ld0JyYW5jaCwgYWN0aXZlQnJhbmNoKSkge1xuICAgICAgICBwYXRjaChcbiAgICAgICAgICBhY3RpdmVCcmFuY2gsXG4gICAgICAgICAgbmV3QnJhbmNoLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICAgIHN1c3BlbnNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRjaChcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIG5ld0JyYW5jaCxcbiAgICAgICAgICBzdXNwZW5zZS5oaWRkZW5Db250YWluZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgc3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHN1c3BlbnNlLmRlcHMgPD0gMCkge1xuICAgICAgICAgIHN1c3BlbnNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYWN0aXZlQnJhbmNoICYmIGlzU2FtZVZOb2RlVHlwZShuZXdCcmFuY2gsIGFjdGl2ZUJyYW5jaCkpIHtcbiAgICAgIHBhdGNoKFxuICAgICAgICBhY3RpdmVCcmFuY2gsXG4gICAgICAgIG5ld0JyYW5jaCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBhbmNob3IsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgc3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICk7XG4gICAgICBzZXRBY3RpdmVCcmFuY2goc3VzcGVuc2UsIG5ld0JyYW5jaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXJFdmVudChuMiwgXCJvblBlbmRpbmdcIik7XG4gICAgICBzdXNwZW5zZS5wZW5kaW5nQnJhbmNoID0gbmV3QnJhbmNoO1xuICAgICAgaWYgKG5ld0JyYW5jaC5zaGFwZUZsYWcgJiA1MTIpIHtcbiAgICAgICAgc3VzcGVuc2UucGVuZGluZ0lkID0gbmV3QnJhbmNoLmNvbXBvbmVudC5zdXNwZW5zZUlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VzcGVuc2UucGVuZGluZ0lkID0gc3VzcGVuc2VJZCsrO1xuICAgICAgfVxuICAgICAgcGF0Y2goXG4gICAgICAgIG51bGwsXG4gICAgICAgIG5ld0JyYW5jaCxcbiAgICAgICAgc3VzcGVuc2UuaGlkZGVuQ29udGFpbmVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgICAgaWYgKHN1c3BlbnNlLmRlcHMgPD0gMCkge1xuICAgICAgICBzdXNwZW5zZS5yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IHRpbWVvdXQsIHBlbmRpbmdJZCB9ID0gc3VzcGVuc2U7XG4gICAgICAgIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN1c3BlbnNlLnBlbmRpbmdJZCA9PT0gcGVuZGluZ0lkKSB7XG4gICAgICAgICAgICAgIHN1c3BlbnNlLmZhbGxiYWNrKG5ld0ZhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgc3VzcGVuc2UuZmFsbGJhY2sobmV3RmFsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgaGFzV2FybmVkID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVTdXNwZW5zZUJvdW5kYXJ5KHZub2RlLCBwYXJlbnRTdXNwZW5zZSwgcGFyZW50Q29tcG9uZW50LCBjb250YWluZXIsIGhpZGRlbkNvbnRhaW5lciwgYW5jaG9yLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkLCByZW5kZXJlckludGVybmFscywgaXNIeWRyYXRpbmcgPSBmYWxzZSkge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB0cnVlICYmICFoYXNXYXJuZWQpIHtcbiAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gXCJpbmZvXCIgOiBcImxvZ1wiXShcbiAgICAgIGA8U3VzcGVuc2U+IGlzIGFuIGV4cGVyaW1lbnRhbCBmZWF0dXJlIGFuZCBpdHMgQVBJIHdpbGwgbGlrZWx5IGNoYW5nZS5gXG4gICAgKTtcbiAgfVxuICBjb25zdCB7XG4gICAgcDogcGF0Y2gsXG4gICAgbTogbW92ZSxcbiAgICB1bTogdW5tb3VudCxcbiAgICBuOiBuZXh0LFxuICAgIG86IHsgcGFyZW50Tm9kZSwgcmVtb3ZlIH1cbiAgfSA9IHJlbmRlcmVySW50ZXJuYWxzO1xuICBsZXQgcGFyZW50U3VzcGVuc2VJZDtcbiAgY29uc3QgaXNTdXNwZW5zaWJsZSA9IGlzVk5vZGVTdXNwZW5zaWJsZSh2bm9kZSk7XG4gIGlmIChpc1N1c3BlbnNpYmxlKSB7XG4gICAgaWYgKHBhcmVudFN1c3BlbnNlICYmIHBhcmVudFN1c3BlbnNlLnBlbmRpbmdCcmFuY2gpIHtcbiAgICAgIHBhcmVudFN1c3BlbnNlSWQgPSBwYXJlbnRTdXNwZW5zZS5wZW5kaW5nSWQ7XG4gICAgICBwYXJlbnRTdXNwZW5zZS5kZXBzKys7XG4gICAgfVxuICB9XG4gIGNvbnN0IHRpbWVvdXQgPSB2bm9kZS5wcm9wcyA/IHRvTnVtYmVyKHZub2RlLnByb3BzLnRpbWVvdXQpIDogdm9pZCAwO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGFzc2VydE51bWJlcih0aW1lb3V0LCBgU3VzcGVuc2UgdGltZW91dGApO1xuICB9XG4gIGNvbnN0IGluaXRpYWxBbmNob3IgPSBhbmNob3I7XG4gIGNvbnN0IHN1c3BlbnNlID0ge1xuICAgIHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50U3VzcGVuc2UsXG4gICAgcGFyZW50Q29tcG9uZW50LFxuICAgIG5hbWVzcGFjZSxcbiAgICBjb250YWluZXIsXG4gICAgaGlkZGVuQ29udGFpbmVyLFxuICAgIGRlcHM6IDAsXG4gICAgcGVuZGluZ0lkOiBzdXNwZW5zZUlkKyssXG4gICAgdGltZW91dDogdHlwZW9mIHRpbWVvdXQgPT09IFwibnVtYmVyXCIgPyB0aW1lb3V0IDogLTEsXG4gICAgYWN0aXZlQnJhbmNoOiBudWxsLFxuICAgIHBlbmRpbmdCcmFuY2g6IG51bGwsXG4gICAgaXNJbkZhbGxiYWNrOiAhaXNIeWRyYXRpbmcsXG4gICAgaXNIeWRyYXRpbmcsXG4gICAgaXNVbm1vdW50ZWQ6IGZhbHNlLFxuICAgIGVmZmVjdHM6IFtdLFxuICAgIHJlc29sdmUocmVzdW1lID0gZmFsc2UsIHN5bmMgPSBmYWxzZSkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgaWYgKCFyZXN1bWUgJiYgIXN1c3BlbnNlLnBlbmRpbmdCcmFuY2gpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgc3VzcGVuc2UucmVzb2x2ZSgpIGlzIGNhbGxlZCB3aXRob3V0IGEgcGVuZGluZyBicmFuY2guYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1c3BlbnNlLmlzVW5tb3VudGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYHN1c3BlbnNlLnJlc29sdmUoKSBpcyBjYWxsZWQgb24gYW4gYWxyZWFkeSB1bm1vdW50ZWQgc3VzcGVuc2UgYm91bmRhcnkuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdm5vZGU6IHZub2RlMixcbiAgICAgICAgYWN0aXZlQnJhbmNoLFxuICAgICAgICBwZW5kaW5nQnJhbmNoLFxuICAgICAgICBwZW5kaW5nSWQsXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIHBhcmVudENvbXBvbmVudDogcGFyZW50Q29tcG9uZW50MixcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIyXG4gICAgICB9ID0gc3VzcGVuc2U7XG4gICAgICBsZXQgZGVsYXlFbnRlciA9IGZhbHNlO1xuICAgICAgaWYgKHN1c3BlbnNlLmlzSHlkcmF0aW5nKSB7XG4gICAgICAgIHN1c3BlbnNlLmlzSHlkcmF0aW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKCFyZXN1bWUpIHtcbiAgICAgICAgZGVsYXlFbnRlciA9IGFjdGl2ZUJyYW5jaCAmJiBwZW5kaW5nQnJhbmNoLnRyYW5zaXRpb24gJiYgcGVuZGluZ0JyYW5jaC50cmFuc2l0aW9uLm1vZGUgPT09IFwib3V0LWluXCI7XG4gICAgICAgIGlmIChkZWxheUVudGVyKSB7XG4gICAgICAgICAgYWN0aXZlQnJhbmNoLnRyYW5zaXRpb24uYWZ0ZXJMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nSWQgPT09IHN1c3BlbnNlLnBlbmRpbmdJZCkge1xuICAgICAgICAgICAgICBtb3ZlKFxuICAgICAgICAgICAgICAgIHBlbmRpbmdCcmFuY2gsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyMixcbiAgICAgICAgICAgICAgICBhbmNob3IgPT09IGluaXRpYWxBbmNob3IgPyBuZXh0KGFjdGl2ZUJyYW5jaCkgOiBhbmNob3IsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBxdWV1ZVBvc3RGbHVzaENiKGVmZmVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUJyYW5jaCkge1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlKGFjdGl2ZUJyYW5jaC5lbCkgPT09IGNvbnRhaW5lcjIpIHtcbiAgICAgICAgICAgIGFuY2hvciA9IG5leHQoYWN0aXZlQnJhbmNoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdW5tb3VudChhY3RpdmVCcmFuY2gsIHBhcmVudENvbXBvbmVudDIsIHN1c3BlbnNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5RW50ZXIpIHtcbiAgICAgICAgICBtb3ZlKHBlbmRpbmdCcmFuY2gsIGNvbnRhaW5lcjIsIGFuY2hvciwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldEFjdGl2ZUJyYW5jaChzdXNwZW5zZSwgcGVuZGluZ0JyYW5jaCk7XG4gICAgICBzdXNwZW5zZS5wZW5kaW5nQnJhbmNoID0gbnVsbDtcbiAgICAgIHN1c3BlbnNlLmlzSW5GYWxsYmFjayA9IGZhbHNlO1xuICAgICAgbGV0IHBhcmVudCA9IHN1c3BlbnNlLnBhcmVudDtcbiAgICAgIGxldCBoYXNVbnJlc29sdmVkQW5jZXN0b3IgPSBmYWxzZTtcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5wZW5kaW5nQnJhbmNoKSB7XG4gICAgICAgICAgcGFyZW50LmVmZmVjdHMucHVzaCguLi5lZmZlY3RzKTtcbiAgICAgICAgICBoYXNVbnJlc29sdmVkQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIWhhc1VucmVzb2x2ZWRBbmNlc3RvciAmJiAhZGVsYXlFbnRlcikge1xuICAgICAgICBxdWV1ZVBvc3RGbHVzaENiKGVmZmVjdHMpO1xuICAgICAgfVxuICAgICAgc3VzcGVuc2UuZWZmZWN0cyA9IFtdO1xuICAgICAgaWYgKGlzU3VzcGVuc2libGUpIHtcbiAgICAgICAgaWYgKHBhcmVudFN1c3BlbnNlICYmIHBhcmVudFN1c3BlbnNlLnBlbmRpbmdCcmFuY2ggJiYgcGFyZW50U3VzcGVuc2VJZCA9PT0gcGFyZW50U3VzcGVuc2UucGVuZGluZ0lkKSB7XG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UuZGVwcy0tO1xuICAgICAgICAgIGlmIChwYXJlbnRTdXNwZW5zZS5kZXBzID09PSAwICYmICFzeW5jKSB7XG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZS5yZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cmlnZ2VyRXZlbnQodm5vZGUyLCBcIm9uUmVzb2x2ZVwiKTtcbiAgICB9LFxuICAgIGZhbGxiYWNrKGZhbGxiYWNrVk5vZGUpIHtcbiAgICAgIGlmICghc3VzcGVuc2UucGVuZGluZ0JyYW5jaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZub2RlOiB2bm9kZTIsIGFjdGl2ZUJyYW5jaCwgcGFyZW50Q29tcG9uZW50OiBwYXJlbnRDb21wb25lbnQyLCBjb250YWluZXI6IGNvbnRhaW5lcjIsIG5hbWVzcGFjZTogbmFtZXNwYWNlMiB9ID0gc3VzcGVuc2U7XG4gICAgICB0cmlnZ2VyRXZlbnQodm5vZGUyLCBcIm9uRmFsbGJhY2tcIik7XG4gICAgICBjb25zdCBhbmNob3IyID0gbmV4dChhY3RpdmVCcmFuY2gpO1xuICAgICAgY29uc3QgbW91bnRGYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzdXNwZW5zZS5pc0luRmFsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxsYmFja1ZOb2RlLFxuICAgICAgICAgIGNvbnRhaW5lcjIsXG4gICAgICAgICAgYW5jaG9yMixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQyLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgLy8gZmFsbGJhY2sgdHJlZSB3aWxsIG5vdCBoYXZlIHN1c3BlbnNlIGNvbnRleHRcbiAgICAgICAgICBuYW1lc3BhY2UyLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgICAgc2V0QWN0aXZlQnJhbmNoKHN1c3BlbnNlLCBmYWxsYmFja1ZOb2RlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBkZWxheUVudGVyID0gZmFsbGJhY2tWTm9kZS50cmFuc2l0aW9uICYmIGZhbGxiYWNrVk5vZGUudHJhbnNpdGlvbi5tb2RlID09PSBcIm91dC1pblwiO1xuICAgICAgaWYgKGRlbGF5RW50ZXIpIHtcbiAgICAgICAgYWN0aXZlQnJhbmNoLnRyYW5zaXRpb24uYWZ0ZXJMZWF2ZSA9IG1vdW50RmFsbGJhY2s7XG4gICAgICB9XG4gICAgICBzdXNwZW5zZS5pc0luRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgdW5tb3VudChcbiAgICAgICAgYWN0aXZlQnJhbmNoLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQyLFxuICAgICAgICBudWxsLFxuICAgICAgICAvLyBubyBzdXNwZW5zZSBzbyB1bm1vdW50IGhvb2tzIGZpcmUgbm93XG4gICAgICAgIHRydWVcbiAgICAgICAgLy8gc2hvdWxkUmVtb3ZlXG4gICAgICApO1xuICAgICAgaWYgKCFkZWxheUVudGVyKSB7XG4gICAgICAgIG1vdW50RmFsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdmUoY29udGFpbmVyMiwgYW5jaG9yMiwgdHlwZSkge1xuICAgICAgc3VzcGVuc2UuYWN0aXZlQnJhbmNoICYmIG1vdmUoc3VzcGVuc2UuYWN0aXZlQnJhbmNoLCBjb250YWluZXIyLCBhbmNob3IyLCB0eXBlKTtcbiAgICAgIHN1c3BlbnNlLmNvbnRhaW5lciA9IGNvbnRhaW5lcjI7XG4gICAgfSxcbiAgICBuZXh0KCkge1xuICAgICAgcmV0dXJuIHN1c3BlbnNlLmFjdGl2ZUJyYW5jaCAmJiBuZXh0KHN1c3BlbnNlLmFjdGl2ZUJyYW5jaCk7XG4gICAgfSxcbiAgICByZWdpc3RlckRlcChpbnN0YW5jZSwgc2V0dXBSZW5kZXJFZmZlY3QsIG9wdGltaXplZDIpIHtcbiAgICAgIGNvbnN0IGlzSW5QZW5kaW5nU3VzcGVuc2UgPSAhIXN1c3BlbnNlLnBlbmRpbmdCcmFuY2g7XG4gICAgICBpZiAoaXNJblBlbmRpbmdTdXNwZW5zZSkge1xuICAgICAgICBzdXNwZW5zZS5kZXBzKys7XG4gICAgICB9XG4gICAgICBjb25zdCBoeWRyYXRlZEVsID0gaW5zdGFuY2Uudm5vZGUuZWw7XG4gICAgICBpbnN0YW5jZS5hc3luY0RlcC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVyciwgaW5zdGFuY2UsIDApO1xuICAgICAgfSkudGhlbigoYXN5bmNTZXR1cFJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoaW5zdGFuY2UuaXNVbm1vdW50ZWQgfHwgc3VzcGVuc2UuaXNVbm1vdW50ZWQgfHwgc3VzcGVuc2UucGVuZGluZ0lkICE9PSBpbnN0YW5jZS5zdXNwZW5zZUlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLmFzeW5jUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCB7IHZub2RlOiB2bm9kZTIgfSA9IGluc3RhbmNlO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHB1c2hXYXJuaW5nQ29udGV4dCh2bm9kZTIpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVNldHVwUmVzdWx0KGluc3RhbmNlLCBhc3luY1NldHVwUmVzdWx0LCBmYWxzZSk7XG4gICAgICAgIGlmIChoeWRyYXRlZEVsKSB7XG4gICAgICAgICAgdm5vZGUyLmVsID0gaHlkcmF0ZWRFbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9ICFoeWRyYXRlZEVsICYmIGluc3RhbmNlLnN1YlRyZWUuZWw7XG4gICAgICAgIHNldHVwUmVuZGVyRWZmZWN0KFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIHZub2RlMixcbiAgICAgICAgICAvLyBjb21wb25lbnQgbWF5IGhhdmUgYmVlbiBtb3ZlZCBiZWZvcmUgcmVzb2x2ZS5cbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIGh5ZHJhdGlvbiwgaW5zdGFuY2Uuc3ViVHJlZSB3aWxsIGJlIHRoZSBjb21tZW50XG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXIuXG4gICAgICAgICAgcGFyZW50Tm9kZShoeWRyYXRlZEVsIHx8IGluc3RhbmNlLnN1YlRyZWUuZWwpLFxuICAgICAgICAgIC8vIGFuY2hvciB3aWxsIG5vdCBiZSB1c2VkIGlmIHRoaXMgaXMgaHlkcmF0aW9uLCBzbyBvbmx5IG5lZWQgdG9cbiAgICAgICAgICAvLyBjb25zaWRlciB0aGUgY29tbWVudCBwbGFjZWhvbGRlciBjYXNlLlxuICAgICAgICAgIGh5ZHJhdGVkRWwgPyBudWxsIDogbmV4dChpbnN0YW5jZS5zdWJUcmVlKSxcbiAgICAgICAgICBzdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgb3B0aW1pemVkMlxuICAgICAgICApO1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICByZW1vdmUocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUhPQ0hvc3RFbChpbnN0YW5jZSwgdm5vZGUyLmVsKTtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBwb3BXYXJuaW5nQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0luUGVuZGluZ1N1c3BlbnNlICYmIC0tc3VzcGVuc2UuZGVwcyA9PT0gMCkge1xuICAgICAgICAgIHN1c3BlbnNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB1bm1vdW50KHBhcmVudFN1c3BlbnNlMiwgZG9SZW1vdmUpIHtcbiAgICAgIHN1c3BlbnNlLmlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgIGlmIChzdXNwZW5zZS5hY3RpdmVCcmFuY2gpIHtcbiAgICAgICAgdW5tb3VudChcbiAgICAgICAgICBzdXNwZW5zZS5hY3RpdmVCcmFuY2gsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlMixcbiAgICAgICAgICBkb1JlbW92ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHN1c3BlbnNlLnBlbmRpbmdCcmFuY2gpIHtcbiAgICAgICAgdW5tb3VudChcbiAgICAgICAgICBzdXNwZW5zZS5wZW5kaW5nQnJhbmNoLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZTIsXG4gICAgICAgICAgZG9SZW1vdmVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBzdXNwZW5zZTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVTdXNwZW5zZShub2RlLCB2bm9kZSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCwgcmVuZGVyZXJJbnRlcm5hbHMsIGh5ZHJhdGVOb2RlKSB7XG4gIGNvbnN0IHN1c3BlbnNlID0gdm5vZGUuc3VzcGVuc2UgPSBjcmVhdGVTdXNwZW5zZUJvdW5kYXJ5KFxuICAgIHZub2RlLFxuICAgIHBhcmVudFN1c3BlbnNlLFxuICAgIHBhcmVudENvbXBvbmVudCxcbiAgICBub2RlLnBhcmVudE5vZGUsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgbnVsbCxcbiAgICBuYW1lc3BhY2UsXG4gICAgc2xvdFNjb3BlSWRzLFxuICAgIG9wdGltaXplZCxcbiAgICByZW5kZXJlckludGVybmFscyxcbiAgICB0cnVlXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IGh5ZHJhdGVOb2RlKFxuICAgIG5vZGUsXG4gICAgc3VzcGVuc2UucGVuZGluZ0JyYW5jaCA9IHZub2RlLnNzQ29udGVudCxcbiAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgc3VzcGVuc2UsXG4gICAgc2xvdFNjb3BlSWRzLFxuICAgIG9wdGltaXplZFxuICApO1xuICBpZiAoc3VzcGVuc2UuZGVwcyA9PT0gMCkge1xuICAgIHN1c3BlbnNlLnJlc29sdmUoZmFsc2UsIHRydWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTdXNwZW5zZUNoaWxkcmVuKHZub2RlKSB7XG4gIGNvbnN0IHsgc2hhcGVGbGFnLCBjaGlsZHJlbiB9ID0gdm5vZGU7XG4gIGNvbnN0IGlzU2xvdENoaWxkcmVuID0gc2hhcGVGbGFnICYgMzI7XG4gIHZub2RlLnNzQ29udGVudCA9IG5vcm1hbGl6ZVN1c3BlbnNlU2xvdChcbiAgICBpc1Nsb3RDaGlsZHJlbiA/IGNoaWxkcmVuLmRlZmF1bHQgOiBjaGlsZHJlblxuICApO1xuICB2bm9kZS5zc0ZhbGxiYWNrID0gaXNTbG90Q2hpbGRyZW4gPyBub3JtYWxpemVTdXNwZW5zZVNsb3QoY2hpbGRyZW4uZmFsbGJhY2spIDogY3JlYXRlVk5vZGUoQ29tbWVudCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTdXNwZW5zZVNsb3Qocykge1xuICBsZXQgYmxvY2s7XG4gIGlmIChpc0Z1bmN0aW9uKHMpKSB7XG4gICAgY29uc3QgdHJhY2tCbG9jayA9IGlzQmxvY2tUcmVlRW5hYmxlZCAmJiBzLl9jO1xuICAgIGlmICh0cmFja0Jsb2NrKSB7XG4gICAgICBzLl9kID0gZmFsc2U7XG4gICAgICBvcGVuQmxvY2soKTtcbiAgICB9XG4gICAgcyA9IHMoKTtcbiAgICBpZiAodHJhY2tCbG9jaykge1xuICAgICAgcy5fZCA9IHRydWU7XG4gICAgICBibG9jayA9IGN1cnJlbnRCbG9jaztcbiAgICAgIGNsb3NlQmxvY2soKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQXJyYXkocykpIHtcbiAgICBjb25zdCBzaW5nbGVDaGlsZCA9IGZpbHRlclNpbmdsZVJvb3Qocyk7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIXNpbmdsZUNoaWxkICYmIHMuZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQgIT09IE5VTExfRFlOQU1JQ19DT01QT05FTlQpLmxlbmd0aCA+IDApIHtcbiAgICAgIHdhcm4kMShgPFN1c3BlbnNlPiBzbG90cyBleHBlY3QgYSBzaW5nbGUgcm9vdCBub2RlLmApO1xuICAgIH1cbiAgICBzID0gc2luZ2xlQ2hpbGQ7XG4gIH1cbiAgcyA9IG5vcm1hbGl6ZVZOb2RlKHMpO1xuICBpZiAoYmxvY2sgJiYgIXMuZHluYW1pY0NoaWxkcmVuKSB7XG4gICAgcy5keW5hbWljQ2hpbGRyZW4gPSBibG9jay5maWx0ZXIoKGMpID0+IGMgIT09IHMpO1xuICB9XG4gIHJldHVybiBzO1xufVxuZnVuY3Rpb24gcXVldWVFZmZlY3RXaXRoU3VzcGVuc2UoZm4sIHN1c3BlbnNlKSB7XG4gIGlmIChzdXNwZW5zZSAmJiBzdXNwZW5zZS5wZW5kaW5nQnJhbmNoKSB7XG4gICAgaWYgKGlzQXJyYXkoZm4pKSB7XG4gICAgICBzdXNwZW5zZS5lZmZlY3RzLnB1c2goLi4uZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXNwZW5zZS5lZmZlY3RzLnB1c2goZm4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVBvc3RGbHVzaENiKGZuKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0QWN0aXZlQnJhbmNoKHN1c3BlbnNlLCBicmFuY2gpIHtcbiAgc3VzcGVuc2UuYWN0aXZlQnJhbmNoID0gYnJhbmNoO1xuICBjb25zdCB7IHZub2RlLCBwYXJlbnRDb21wb25lbnQgfSA9IHN1c3BlbnNlO1xuICBsZXQgZWwgPSBicmFuY2guZWw7XG4gIHdoaWxlICghZWwgJiYgYnJhbmNoLmNvbXBvbmVudCkge1xuICAgIGJyYW5jaCA9IGJyYW5jaC5jb21wb25lbnQuc3ViVHJlZTtcbiAgICBlbCA9IGJyYW5jaC5lbDtcbiAgfVxuICB2bm9kZS5lbCA9IGVsO1xuICBpZiAocGFyZW50Q29tcG9uZW50ICYmIHBhcmVudENvbXBvbmVudC5zdWJUcmVlID09PSB2bm9kZSkge1xuICAgIHBhcmVudENvbXBvbmVudC52bm9kZS5lbCA9IGVsO1xuICAgIHVwZGF0ZUhPQ0hvc3RFbChwYXJlbnRDb21wb25lbnQsIGVsKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNWTm9kZVN1c3BlbnNpYmxlKHZub2RlKSB7XG4gIGNvbnN0IHN1c3BlbnNpYmxlID0gdm5vZGUucHJvcHMgJiYgdm5vZGUucHJvcHMuc3VzcGVuc2libGU7XG4gIHJldHVybiBzdXNwZW5zaWJsZSAhPSBudWxsICYmIHN1c3BlbnNpYmxlICE9PSBmYWxzZTtcbn1cblxuY29uc3QgRnJhZ21lbnQgPSBTeW1ib2wuZm9yKFwidi1mZ3RcIik7XG5jb25zdCBUZXh0ID0gU3ltYm9sLmZvcihcInYtdHh0XCIpO1xuY29uc3QgQ29tbWVudCA9IFN5bWJvbC5mb3IoXCJ2LWNtdFwiKTtcbmNvbnN0IFN0YXRpYyA9IFN5bWJvbC5mb3IoXCJ2LXN0Y1wiKTtcbmNvbnN0IGJsb2NrU3RhY2sgPSBbXTtcbmxldCBjdXJyZW50QmxvY2sgPSBudWxsO1xuZnVuY3Rpb24gb3BlbkJsb2NrKGRpc2FibGVUcmFja2luZyA9IGZhbHNlKSB7XG4gIGJsb2NrU3RhY2sucHVzaChjdXJyZW50QmxvY2sgPSBkaXNhYmxlVHJhY2tpbmcgPyBudWxsIDogW10pO1xufVxuZnVuY3Rpb24gY2xvc2VCbG9jaygpIHtcbiAgYmxvY2tTdGFjay5wb3AoKTtcbiAgY3VycmVudEJsb2NrID0gYmxvY2tTdGFja1tibG9ja1N0YWNrLmxlbmd0aCAtIDFdIHx8IG51bGw7XG59XG5sZXQgaXNCbG9ja1RyZWVFbmFibGVkID0gMTtcbmZ1bmN0aW9uIHNldEJsb2NrVHJhY2tpbmcodmFsdWUsIGluVk9uY2UgPSBmYWxzZSkge1xuICBpc0Jsb2NrVHJlZUVuYWJsZWQgKz0gdmFsdWU7XG4gIGlmICh2YWx1ZSA8IDAgJiYgY3VycmVudEJsb2NrICYmIGluVk9uY2UpIHtcbiAgICBjdXJyZW50QmxvY2suaGFzT25jZSA9IHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldHVwQmxvY2sodm5vZGUpIHtcbiAgdm5vZGUuZHluYW1pY0NoaWxkcmVuID0gaXNCbG9ja1RyZWVFbmFibGVkID4gMCA/IGN1cnJlbnRCbG9jayB8fCBFTVBUWV9BUlIgOiBudWxsO1xuICBjbG9zZUJsb2NrKCk7XG4gIGlmIChpc0Jsb2NrVHJlZUVuYWJsZWQgPiAwICYmIGN1cnJlbnRCbG9jaykge1xuICAgIGN1cnJlbnRCbG9jay5wdXNoKHZub2RlKTtcbiAgfVxuICByZXR1cm4gdm5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QmxvY2sodHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBwYXRjaEZsYWcsIGR5bmFtaWNQcm9wcywgc2hhcGVGbGFnKSB7XG4gIHJldHVybiBzZXR1cEJsb2NrKFxuICAgIGNyZWF0ZUJhc2VWTm9kZShcbiAgICAgIHR5cGUsXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcGF0Y2hGbGFnLFxuICAgICAgZHluYW1pY1Byb3BzLFxuICAgICAgc2hhcGVGbGFnLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrKHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgcGF0Y2hGbGFnLCBkeW5hbWljUHJvcHMpIHtcbiAgcmV0dXJuIHNldHVwQmxvY2soXG4gICAgY3JlYXRlVk5vZGUoXG4gICAgICB0eXBlLFxuICAgICAgcHJvcHMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHBhdGNoRmxhZyxcbiAgICAgIGR5bmFtaWNQcm9wcyxcbiAgICAgIHRydWVcbiAgICApXG4gICk7XG59XG5mdW5jdGlvbiBpc1ZOb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHZhbHVlLl9fdl9pc1ZOb2RlID09PSB0cnVlIDogZmFsc2U7XG59XG5mdW5jdGlvbiBpc1NhbWVWTm9kZVR5cGUobjEsIG4yKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIG4yLnNoYXBlRmxhZyAmIDYgJiYgbjEuY29tcG9uZW50KSB7XG4gICAgY29uc3QgZGlydHlJbnN0YW5jZXMgPSBobXJEaXJ0eUNvbXBvbmVudHMuZ2V0KG4yLnR5cGUpO1xuICAgIGlmIChkaXJ0eUluc3RhbmNlcyAmJiBkaXJ0eUluc3RhbmNlcy5oYXMobjEuY29tcG9uZW50KSkge1xuICAgICAgbjEuc2hhcGVGbGFnICY9IH4yNTY7XG4gICAgICBuMi5zaGFwZUZsYWcgJj0gfjUxMjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG4xLnR5cGUgPT09IG4yLnR5cGUgJiYgbjEua2V5ID09PSBuMi5rZXk7XG59XG5sZXQgdm5vZGVBcmdzVHJhbnNmb3JtZXI7XG5mdW5jdGlvbiB0cmFuc2Zvcm1WTm9kZUFyZ3ModHJhbnNmb3JtZXIpIHtcbiAgdm5vZGVBcmdzVHJhbnNmb3JtZXIgPSB0cmFuc2Zvcm1lcjtcbn1cbmNvbnN0IGNyZWF0ZVZOb2RlV2l0aEFyZ3NUcmFuc2Zvcm0gPSAoLi4uYXJncykgPT4ge1xuICByZXR1cm4gX2NyZWF0ZVZOb2RlKFxuICAgIC4uLnZub2RlQXJnc1RyYW5zZm9ybWVyID8gdm5vZGVBcmdzVHJhbnNmb3JtZXIoYXJncywgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlKSA6IGFyZ3NcbiAgKTtcbn07XG5jb25zdCBub3JtYWxpemVLZXkgPSAoeyBrZXkgfSkgPT4ga2V5ICE9IG51bGwgPyBrZXkgOiBudWxsO1xuY29uc3Qgbm9ybWFsaXplUmVmID0gKHtcbiAgcmVmLFxuICByZWZfa2V5LFxuICByZWZfZm9yXG59KSA9PiB7XG4gIGlmICh0eXBlb2YgcmVmID09PSBcIm51bWJlclwiKSB7XG4gICAgcmVmID0gXCJcIiArIHJlZjtcbiAgfVxuICByZXR1cm4gcmVmICE9IG51bGwgPyBpc1N0cmluZyhyZWYpIHx8IGlzUmVmKHJlZikgfHwgaXNGdW5jdGlvbihyZWYpID8geyBpOiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UsIHI6IHJlZiwgazogcmVmX2tleSwgZjogISFyZWZfZm9yIH0gOiByZWYgOiBudWxsO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VWTm9kZSh0eXBlLCBwcm9wcyA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCwgcGF0Y2hGbGFnID0gMCwgZHluYW1pY1Byb3BzID0gbnVsbCwgc2hhcGVGbGFnID0gdHlwZSA9PT0gRnJhZ21lbnQgPyAwIDogMSwgaXNCbG9ja05vZGUgPSBmYWxzZSwgbmVlZEZ1bGxDaGlsZHJlbk5vcm1hbGl6YXRpb24gPSBmYWxzZSkge1xuICBjb25zdCB2bm9kZSA9IHtcbiAgICBfX3ZfaXNWTm9kZTogdHJ1ZSxcbiAgICBfX3Zfc2tpcDogdHJ1ZSxcbiAgICB0eXBlLFxuICAgIHByb3BzLFxuICAgIGtleTogcHJvcHMgJiYgbm9ybWFsaXplS2V5KHByb3BzKSxcbiAgICByZWY6IHByb3BzICYmIG5vcm1hbGl6ZVJlZihwcm9wcyksXG4gICAgc2NvcGVJZDogY3VycmVudFNjb3BlSWQsXG4gICAgc2xvdFNjb3BlSWRzOiBudWxsLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBzdXNwZW5zZTogbnVsbCxcbiAgICBzc0NvbnRlbnQ6IG51bGwsXG4gICAgc3NGYWxsYmFjazogbnVsbCxcbiAgICBkaXJzOiBudWxsLFxuICAgIHRyYW5zaXRpb246IG51bGwsXG4gICAgZWw6IG51bGwsXG4gICAgYW5jaG9yOiBudWxsLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0YXJnZXRTdGFydDogbnVsbCxcbiAgICB0YXJnZXRBbmNob3I6IG51bGwsXG4gICAgc3RhdGljQ291bnQ6IDAsXG4gICAgc2hhcGVGbGFnLFxuICAgIHBhdGNoRmxhZyxcbiAgICBkeW5hbWljUHJvcHMsXG4gICAgZHluYW1pY0NoaWxkcmVuOiBudWxsLFxuICAgIGFwcENvbnRleHQ6IG51bGwsXG4gICAgY3R4OiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2VcbiAgfTtcbiAgaWYgKG5lZWRGdWxsQ2hpbGRyZW5Ob3JtYWxpemF0aW9uKSB7XG4gICAgbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuKTtcbiAgICBpZiAoc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICB0eXBlLm5vcm1hbGl6ZSh2bm9kZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgdm5vZGUuc2hhcGVGbGFnIHw9IGlzU3RyaW5nKGNoaWxkcmVuKSA/IDggOiAxNjtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB2bm9kZS5rZXkgIT09IHZub2RlLmtleSkge1xuICAgIHdhcm4kMShgVk5vZGUgY3JlYXRlZCB3aXRoIGludmFsaWQga2V5IChOYU4pLiBWTm9kZSB0eXBlOmAsIHZub2RlLnR5cGUpO1xuICB9XG4gIGlmIChpc0Jsb2NrVHJlZUVuYWJsZWQgPiAwICYmIC8vIGF2b2lkIGEgYmxvY2sgbm9kZSBmcm9tIHRyYWNraW5nIGl0c2VsZlxuICAhaXNCbG9ja05vZGUgJiYgLy8gaGFzIGN1cnJlbnQgcGFyZW50IGJsb2NrXG4gIGN1cnJlbnRCbG9jayAmJiAvLyBwcmVzZW5jZSBvZiBhIHBhdGNoIGZsYWcgaW5kaWNhdGVzIHRoaXMgbm9kZSBuZWVkcyBwYXRjaGluZyBvbiB1cGRhdGVzLlxuICAvLyBjb21wb25lbnQgbm9kZXMgYWxzbyBzaG91bGQgYWx3YXlzIGJlIHBhdGNoZWQsIGJlY2F1c2UgZXZlbiBpZiB0aGVcbiAgLy8gY29tcG9uZW50IGRvZXNuJ3QgbmVlZCB0byB1cGRhdGUsIGl0IG5lZWRzIHRvIHBlcnNpc3QgdGhlIGluc3RhbmNlIG9uIHRvXG4gIC8vIHRoZSBuZXh0IHZub2RlIHNvIHRoYXQgaXQgY2FuIGJlIHByb3Blcmx5IHVubW91bnRlZCBsYXRlci5cbiAgKHZub2RlLnBhdGNoRmxhZyA+IDAgfHwgc2hhcGVGbGFnICYgNikgJiYgLy8gdGhlIEVWRU5UUyBmbGFnIGlzIG9ubHkgZm9yIGh5ZHJhdGlvbiBhbmQgaWYgaXQgaXMgdGhlIG9ubHkgZmxhZywgdGhlXG4gIC8vIHZub2RlIHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBkeW5hbWljIGR1ZSB0byBoYW5kbGVyIGNhY2hpbmcuXG4gIHZub2RlLnBhdGNoRmxhZyAhPT0gMzIpIHtcbiAgICBjdXJyZW50QmxvY2sucHVzaCh2bm9kZSk7XG4gIH1cbiAgcmV0dXJuIHZub2RlO1xufVxuY29uc3QgY3JlYXRlVk5vZGUgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gY3JlYXRlVk5vZGVXaXRoQXJnc1RyYW5zZm9ybSA6IF9jcmVhdGVWTm9kZTtcbmZ1bmN0aW9uIF9jcmVhdGVWTm9kZSh0eXBlLCBwcm9wcyA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCwgcGF0Y2hGbGFnID0gMCwgZHluYW1pY1Byb3BzID0gbnVsbCwgaXNCbG9ja05vZGUgPSBmYWxzZSkge1xuICBpZiAoIXR5cGUgfHwgdHlwZSA9PT0gTlVMTF9EWU5BTUlDX0NPTVBPTkVOVCkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICF0eXBlKSB7XG4gICAgICB3YXJuJDEoYEludmFsaWQgdm5vZGUgdHlwZSB3aGVuIGNyZWF0aW5nIHZub2RlOiAke3R5cGV9LmApO1xuICAgIH1cbiAgICB0eXBlID0gQ29tbWVudDtcbiAgfVxuICBpZiAoaXNWTm9kZSh0eXBlKSkge1xuICAgIGNvbnN0IGNsb25lZCA9IGNsb25lVk5vZGUoXG4gICAgICB0eXBlLFxuICAgICAgcHJvcHMsXG4gICAgICB0cnVlXG4gICAgICAvKiBtZXJnZVJlZjogdHJ1ZSAqL1xuICAgICk7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBub3JtYWxpemVDaGlsZHJlbihjbG9uZWQsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKGlzQmxvY2tUcmVlRW5hYmxlZCA+IDAgJiYgIWlzQmxvY2tOb2RlICYmIGN1cnJlbnRCbG9jaykge1xuICAgICAgaWYgKGNsb25lZC5zaGFwZUZsYWcgJiA2KSB7XG4gICAgICAgIGN1cnJlbnRCbG9ja1tjdXJyZW50QmxvY2suaW5kZXhPZih0eXBlKV0gPSBjbG9uZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50QmxvY2sucHVzaChjbG9uZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZWQucGF0Y2hGbGFnID0gLTI7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBpZiAoaXNDbGFzc0NvbXBvbmVudCh0eXBlKSkge1xuICAgIHR5cGUgPSB0eXBlLl9fdmNjT3B0cztcbiAgfVxuICBpZiAocHJvcHMpIHtcbiAgICBwcm9wcyA9IGd1YXJkUmVhY3RpdmVQcm9wcyhwcm9wcyk7XG4gICAgbGV0IHsgY2xhc3M6IGtsYXNzLCBzdHlsZSB9ID0gcHJvcHM7XG4gICAgaWYgKGtsYXNzICYmICFpc1N0cmluZyhrbGFzcykpIHtcbiAgICAgIHByb3BzLmNsYXNzID0gbm9ybWFsaXplQ2xhc3Moa2xhc3MpO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3Qoc3R5bGUpKSB7XG4gICAgICBpZiAoaXNQcm94eShzdHlsZSkgJiYgIWlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAgIHN0eWxlID0gZXh0ZW5kKHt9LCBzdHlsZSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5zdHlsZSA9IG5vcm1hbGl6ZVN0eWxlKHN0eWxlKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGVGbGFnID0gaXNTdHJpbmcodHlwZSkgPyAxIDogaXNTdXNwZW5zZSh0eXBlKSA/IDEyOCA6IGlzVGVsZXBvcnQodHlwZSkgPyA2NCA6IGlzT2JqZWN0KHR5cGUpID8gNCA6IGlzRnVuY3Rpb24odHlwZSkgPyAyIDogMDtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2hhcGVGbGFnICYgNCAmJiBpc1Byb3h5KHR5cGUpKSB7XG4gICAgdHlwZSA9IHRvUmF3KHR5cGUpO1xuICAgIHdhcm4kMShcbiAgICAgIGBWdWUgcmVjZWl2ZWQgYSBDb21wb25lbnQgdGhhdCB3YXMgbWFkZSBhIHJlYWN0aXZlIG9iamVjdC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSBwZXJmb3JtYW5jZSBvdmVyaGVhZCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgYnkgbWFya2luZyB0aGUgY29tcG9uZW50IHdpdGggXFxgbWFya1Jhd1xcYCBvciB1c2luZyBcXGBzaGFsbG93UmVmXFxgIGluc3RlYWQgb2YgXFxgcmVmXFxgLmAsXG4gICAgICBgXG5Db21wb25lbnQgdGhhdCB3YXMgbWFkZSByZWFjdGl2ZTogYCxcbiAgICAgIHR5cGVcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGVCYXNlVk5vZGUoXG4gICAgdHlwZSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBwYXRjaEZsYWcsXG4gICAgZHluYW1pY1Byb3BzLFxuICAgIHNoYXBlRmxhZyxcbiAgICBpc0Jsb2NrTm9kZSxcbiAgICB0cnVlXG4gICk7XG59XG5mdW5jdGlvbiBndWFyZFJlYWN0aXZlUHJvcHMocHJvcHMpIHtcbiAgaWYgKCFwcm9wcykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBpc1Byb3h5KHByb3BzKSB8fCBpc0ludGVybmFsT2JqZWN0KHByb3BzKSA/IGV4dGVuZCh7fSwgcHJvcHMpIDogcHJvcHM7XG59XG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZub2RlLCBleHRyYVByb3BzLCBtZXJnZVJlZiA9IGZhbHNlLCBjbG9uZVRyYW5zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCB7IHByb3BzLCByZWYsIHBhdGNoRmxhZywgY2hpbGRyZW4sIHRyYW5zaXRpb24gfSA9IHZub2RlO1xuICBjb25zdCBtZXJnZWRQcm9wcyA9IGV4dHJhUHJvcHMgPyBtZXJnZVByb3BzKHByb3BzIHx8IHt9LCBleHRyYVByb3BzKSA6IHByb3BzO1xuICBjb25zdCBjbG9uZWQgPSB7XG4gICAgX192X2lzVk5vZGU6IHRydWUsXG4gICAgX192X3NraXA6IHRydWUsXG4gICAgdHlwZTogdm5vZGUudHlwZSxcbiAgICBwcm9wczogbWVyZ2VkUHJvcHMsXG4gICAga2V5OiBtZXJnZWRQcm9wcyAmJiBub3JtYWxpemVLZXkobWVyZ2VkUHJvcHMpLFxuICAgIHJlZjogZXh0cmFQcm9wcyAmJiBleHRyYVByb3BzLnJlZiA/IChcbiAgICAgIC8vICMyMDc4IGluIHRoZSBjYXNlIG9mIDxjb21wb25lbnQgOmlzPVwidm5vZGVcIiByZWY9XCJleHRyYVwiLz5cbiAgICAgIC8vIGlmIHRoZSB2bm9kZSBpdHNlbGYgYWxyZWFkeSBoYXMgYSByZWYsIGNsb25lVk5vZGUgd2lsbCBuZWVkIHRvIG1lcmdlXG4gICAgICAvLyB0aGUgcmVmcyBzbyB0aGUgc2luZ2xlIHZub2RlIGNhbiBiZSBzZXQgb24gbXVsdGlwbGUgcmVmc1xuICAgICAgbWVyZ2VSZWYgJiYgcmVmID8gaXNBcnJheShyZWYpID8gcmVmLmNvbmNhdChub3JtYWxpemVSZWYoZXh0cmFQcm9wcykpIDogW3JlZiwgbm9ybWFsaXplUmVmKGV4dHJhUHJvcHMpXSA6IG5vcm1hbGl6ZVJlZihleHRyYVByb3BzKVxuICAgICkgOiByZWYsXG4gICAgc2NvcGVJZDogdm5vZGUuc2NvcGVJZCxcbiAgICBzbG90U2NvcGVJZHM6IHZub2RlLnNsb3RTY29wZUlkcyxcbiAgICBjaGlsZHJlbjogISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBwYXRjaEZsYWcgPT09IC0xICYmIGlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4ubWFwKGRlZXBDbG9uZVZOb2RlKSA6IGNoaWxkcmVuLFxuICAgIHRhcmdldDogdm5vZGUudGFyZ2V0LFxuICAgIHRhcmdldFN0YXJ0OiB2bm9kZS50YXJnZXRTdGFydCxcbiAgICB0YXJnZXRBbmNob3I6IHZub2RlLnRhcmdldEFuY2hvcixcbiAgICBzdGF0aWNDb3VudDogdm5vZGUuc3RhdGljQ291bnQsXG4gICAgc2hhcGVGbGFnOiB2bm9kZS5zaGFwZUZsYWcsXG4gICAgLy8gaWYgdGhlIHZub2RlIGlzIGNsb25lZCB3aXRoIGV4dHJhIHByb3BzLCB3ZSBjYW4gbm8gbG9uZ2VyIGFzc3VtZSBpdHNcbiAgICAvLyBleGlzdGluZyBwYXRjaCBmbGFnIHRvIGJlIHJlbGlhYmxlIGFuZCBuZWVkIHRvIGFkZCB0aGUgRlVMTF9QUk9QUyBmbGFnLlxuICAgIC8vIG5vdGU6IHByZXNlcnZlIGZsYWcgZm9yIGZyYWdtZW50cyBzaW5jZSB0aGV5IHVzZSB0aGUgZmxhZyBmb3IgY2hpbGRyZW5cbiAgICAvLyBmYXN0IHBhdGhzIG9ubHkuXG4gICAgcGF0Y2hGbGFnOiBleHRyYVByb3BzICYmIHZub2RlLnR5cGUgIT09IEZyYWdtZW50ID8gcGF0Y2hGbGFnID09PSAtMSA/IDE2IDogcGF0Y2hGbGFnIHwgMTYgOiBwYXRjaEZsYWcsXG4gICAgZHluYW1pY1Byb3BzOiB2bm9kZS5keW5hbWljUHJvcHMsXG4gICAgZHluYW1pY0NoaWxkcmVuOiB2bm9kZS5keW5hbWljQ2hpbGRyZW4sXG4gICAgYXBwQ29udGV4dDogdm5vZGUuYXBwQ29udGV4dCxcbiAgICBkaXJzOiB2bm9kZS5kaXJzLFxuICAgIHRyYW5zaXRpb24sXG4gICAgLy8gVGhlc2Ugc2hvdWxkIHRlY2huaWNhbGx5IG9ubHkgYmUgbm9uLW51bGwgb24gbW91bnRlZCBWTm9kZXMuIEhvd2V2ZXIsXG4gICAgLy8gdGhleSAqc2hvdWxkKiBiZSBjb3BpZWQgZm9yIGtlcHQtYWxpdmUgdm5vZGVzLiBTbyB3ZSBqdXN0IGFsd2F5cyBjb3B5XG4gICAgLy8gdGhlbSBzaW5jZSB0aGVtIGJlaW5nIG5vbi1udWxsIGR1cmluZyBhIG1vdW50IGRvZXNuJ3QgYWZmZWN0IHRoZSBsb2dpYyBhc1xuICAgIC8vIHRoZXkgd2lsbCBzaW1wbHkgYmUgb3ZlcndyaXR0ZW4uXG4gICAgY29tcG9uZW50OiB2bm9kZS5jb21wb25lbnQsXG4gICAgc3VzcGVuc2U6IHZub2RlLnN1c3BlbnNlLFxuICAgIHNzQ29udGVudDogdm5vZGUuc3NDb250ZW50ICYmIGNsb25lVk5vZGUodm5vZGUuc3NDb250ZW50KSxcbiAgICBzc0ZhbGxiYWNrOiB2bm9kZS5zc0ZhbGxiYWNrICYmIGNsb25lVk5vZGUodm5vZGUuc3NGYWxsYmFjayksXG4gICAgZWw6IHZub2RlLmVsLFxuICAgIGFuY2hvcjogdm5vZGUuYW5jaG9yLFxuICAgIGN0eDogdm5vZGUuY3R4LFxuICAgIGNlOiB2bm9kZS5jZVxuICB9O1xuICBpZiAodHJhbnNpdGlvbiAmJiBjbG9uZVRyYW5zaXRpb24pIHtcbiAgICBzZXRUcmFuc2l0aW9uSG9va3MoXG4gICAgICBjbG9uZWQsXG4gICAgICB0cmFuc2l0aW9uLmNsb25lKGNsb25lZClcbiAgICApO1xuICB9XG4gIHJldHVybiBjbG9uZWQ7XG59XG5mdW5jdGlvbiBkZWVwQ2xvbmVWTm9kZSh2bm9kZSkge1xuICBjb25zdCBjbG9uZWQgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgaWYgKGlzQXJyYXkodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgY2xvbmVkLmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW4ubWFwKGRlZXBDbG9uZVZOb2RlKTtcbiAgfVxuICByZXR1cm4gY2xvbmVkO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQgPSBcIiBcIiwgZmxhZyA9IDApIHtcbiAgcmV0dXJuIGNyZWF0ZVZOb2RlKFRleHQsIG51bGwsIHRleHQsIGZsYWcpO1xufVxuZnVuY3Rpb24gY3JlYXRlU3RhdGljVk5vZGUoY29udGVudCwgbnVtYmVyT2ZOb2Rlcykge1xuICBjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKFN0YXRpYywgbnVsbCwgY29udGVudCk7XG4gIHZub2RlLnN0YXRpY0NvdW50ID0gbnVtYmVyT2ZOb2RlcztcbiAgcmV0dXJuIHZub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudFZOb2RlKHRleHQgPSBcIlwiLCBhc0Jsb2NrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGFzQmxvY2sgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKENvbW1lbnQsIG51bGwsIHRleHQpKSA6IGNyZWF0ZVZOb2RlKENvbW1lbnQsIG51bGwsIHRleHQpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVk5vZGUoY2hpbGQpIHtcbiAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShDb21tZW50KTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGNoaWxkKSkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIC8vICMzNjY2LCBhdm9pZCByZWZlcmVuY2UgcG9sbHV0aW9uIHdoZW4gcmV1c2luZyB2bm9kZVxuICAgICAgY2hpbGQuc2xpY2UoKVxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNWTm9kZShjaGlsZCkpIHtcbiAgICByZXR1cm4gY2xvbmVJZk1vdW50ZWQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShUZXh0LCBudWxsLCBTdHJpbmcoY2hpbGQpKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xvbmVJZk1vdW50ZWQoY2hpbGQpIHtcbiAgcmV0dXJuIGNoaWxkLmVsID09PSBudWxsICYmIGNoaWxkLnBhdGNoRmxhZyAhPT0gLTEgfHwgY2hpbGQubWVtbyA/IGNoaWxkIDogY2xvbmVWTm9kZShjaGlsZCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4pIHtcbiAgbGV0IHR5cGUgPSAwO1xuICBjb25zdCB7IHNoYXBlRmxhZyB9ID0gdm5vZGU7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgdHlwZSA9IDE2O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChzaGFwZUZsYWcgJiAoMSB8IDY0KSkge1xuICAgICAgY29uc3Qgc2xvdCA9IGNoaWxkcmVuLmRlZmF1bHQ7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBzbG90Ll9jICYmIChzbG90Ll9kID0gZmFsc2UpO1xuICAgICAgICBub3JtYWxpemVDaGlsZHJlbih2bm9kZSwgc2xvdCgpKTtcbiAgICAgICAgc2xvdC5fYyAmJiAoc2xvdC5fZCA9IHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gMzI7XG4gICAgICBjb25zdCBzbG90RmxhZyA9IGNoaWxkcmVuLl87XG4gICAgICBpZiAoIXNsb3RGbGFnICYmICFpc0ludGVybmFsT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbi5fY3R4ID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICAgICAgfSBlbHNlIGlmIChzbG90RmxhZyA9PT0gMyAmJiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZS5zbG90cy5fID09PSAxKSB7XG4gICAgICAgICAgY2hpbGRyZW4uXyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRyZW4uXyA9IDI7XG4gICAgICAgICAgdm5vZGUucGF0Y2hGbGFnIHw9IDEwMjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbiA9IHsgZGVmYXVsdDogY2hpbGRyZW4sIF9jdHg6IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSB9O1xuICAgIHR5cGUgPSAzMjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbiA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgaWYgKHNoYXBlRmxhZyAmIDY0KSB7XG4gICAgICB0eXBlID0gMTY7XG4gICAgICBjaGlsZHJlbiA9IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IDg7XG4gICAgfVxuICB9XG4gIHZub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHZub2RlLnNoYXBlRmxhZyB8PSB0eXBlO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wcyguLi5hcmdzKSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b01lcmdlID0gYXJnc1tpXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b01lcmdlKSB7XG4gICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgaWYgKHJldC5jbGFzcyAhPT0gdG9NZXJnZS5jbGFzcykge1xuICAgICAgICAgIHJldC5jbGFzcyA9IG5vcm1hbGl6ZUNsYXNzKFtyZXQuY2xhc3MsIHRvTWVyZ2UuY2xhc3NdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwic3R5bGVcIikge1xuICAgICAgICByZXQuc3R5bGUgPSBub3JtYWxpemVTdHlsZShbcmV0LnN0eWxlLCB0b01lcmdlLnN0eWxlXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT24oa2V5KSkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHJldFtrZXldO1xuICAgICAgICBjb25zdCBpbmNvbWluZyA9IHRvTWVyZ2Vba2V5XTtcbiAgICAgICAgaWYgKGluY29taW5nICYmIGV4aXN0aW5nICE9PSBpbmNvbWluZyAmJiAhKGlzQXJyYXkoZXhpc3RpbmcpICYmIGV4aXN0aW5nLmluY2x1ZGVzKGluY29taW5nKSkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBpbmNvbWluZykgOiBpbmNvbWluZztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0W2tleV0gPSB0b01lcmdlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBpbnZva2VWTm9kZUhvb2soaG9vaywgaW5zdGFuY2UsIHZub2RlLCBwcmV2Vk5vZGUgPSBudWxsKSB7XG4gIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKGhvb2ssIGluc3RhbmNlLCA3LCBbXG4gICAgdm5vZGUsXG4gICAgcHJldlZOb2RlXG4gIF0pO1xufVxuXG5jb25zdCBlbXB0eUFwcENvbnRleHQgPSBjcmVhdGVBcHBDb250ZXh0KCk7XG5sZXQgdWlkID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlKHZub2RlLCBwYXJlbnQsIHN1c3BlbnNlKSB7XG4gIGNvbnN0IHR5cGUgPSB2bm9kZS50eXBlO1xuICBjb25zdCBhcHBDb250ZXh0ID0gKHBhcmVudCA/IHBhcmVudC5hcHBDb250ZXh0IDogdm5vZGUuYXBwQ29udGV4dCkgfHwgZW1wdHlBcHBDb250ZXh0O1xuICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB1aWQ6IHVpZCsrLFxuICAgIHZub2RlLFxuICAgIHR5cGUsXG4gICAgcGFyZW50LFxuICAgIGFwcENvbnRleHQsXG4gICAgcm9vdDogbnVsbCxcbiAgICAvLyB0byBiZSBpbW1lZGlhdGVseSBzZXRcbiAgICBuZXh0OiBudWxsLFxuICAgIHN1YlRyZWU6IG51bGwsXG4gICAgLy8gd2lsbCBiZSBzZXQgc3luY2hyb25vdXNseSByaWdodCBhZnRlciBjcmVhdGlvblxuICAgIGVmZmVjdDogbnVsbCxcbiAgICB1cGRhdGU6IG51bGwsXG4gICAgLy8gd2lsbCBiZSBzZXQgc3luY2hyb25vdXNseSByaWdodCBhZnRlciBjcmVhdGlvblxuICAgIGpvYjogbnVsbCxcbiAgICBzY29wZTogbmV3IEVmZmVjdFNjb3BlKFxuICAgICAgdHJ1ZVxuICAgICAgLyogZGV0YWNoZWQgKi9cbiAgICApLFxuICAgIHJlbmRlcjogbnVsbCxcbiAgICBwcm94eTogbnVsbCxcbiAgICBleHBvc2VkOiBudWxsLFxuICAgIGV4cG9zZVByb3h5OiBudWxsLFxuICAgIHdpdGhQcm94eTogbnVsbCxcbiAgICBwcm92aWRlczogcGFyZW50ID8gcGFyZW50LnByb3ZpZGVzIDogT2JqZWN0LmNyZWF0ZShhcHBDb250ZXh0LnByb3ZpZGVzKSxcbiAgICBpZHM6IHBhcmVudCA/IHBhcmVudC5pZHMgOiBbXCJcIiwgMCwgMF0sXG4gICAgYWNjZXNzQ2FjaGU6IG51bGwsXG4gICAgcmVuZGVyQ2FjaGU6IFtdLFxuICAgIC8vIGxvY2FsIHJlc29sdmVkIGFzc2V0c1xuICAgIGNvbXBvbmVudHM6IG51bGwsXG4gICAgZGlyZWN0aXZlczogbnVsbCxcbiAgICAvLyByZXNvbHZlZCBwcm9wcyBhbmQgZW1pdHMgb3B0aW9uc1xuICAgIHByb3BzT3B0aW9uczogbm9ybWFsaXplUHJvcHNPcHRpb25zKHR5cGUsIGFwcENvbnRleHQpLFxuICAgIGVtaXRzT3B0aW9uczogbm9ybWFsaXplRW1pdHNPcHRpb25zKHR5cGUsIGFwcENvbnRleHQpLFxuICAgIC8vIGVtaXRcbiAgICBlbWl0OiBudWxsLFxuICAgIC8vIHRvIGJlIHNldCBpbW1lZGlhdGVseVxuICAgIGVtaXR0ZWQ6IG51bGwsXG4gICAgLy8gcHJvcHMgZGVmYXVsdCB2YWx1ZVxuICAgIHByb3BzRGVmYXVsdHM6IEVNUFRZX09CSixcbiAgICAvLyBpbmhlcml0QXR0cnNcbiAgICBpbmhlcml0QXR0cnM6IHR5cGUuaW5oZXJpdEF0dHJzLFxuICAgIC8vIHN0YXRlXG4gICAgY3R4OiBFTVBUWV9PQkosXG4gICAgZGF0YTogRU1QVFlfT0JKLFxuICAgIHByb3BzOiBFTVBUWV9PQkosXG4gICAgYXR0cnM6IEVNUFRZX09CSixcbiAgICBzbG90czogRU1QVFlfT0JKLFxuICAgIHJlZnM6IEVNUFRZX09CSixcbiAgICBzZXR1cFN0YXRlOiBFTVBUWV9PQkosXG4gICAgc2V0dXBDb250ZXh0OiBudWxsLFxuICAgIC8vIHN1c3BlbnNlIHJlbGF0ZWRcbiAgICBzdXNwZW5zZSxcbiAgICBzdXNwZW5zZUlkOiBzdXNwZW5zZSA/IHN1c3BlbnNlLnBlbmRpbmdJZCA6IDAsXG4gICAgYXN5bmNEZXA6IG51bGwsXG4gICAgYXN5bmNSZXNvbHZlZDogZmFsc2UsXG4gICAgLy8gbGlmZWN5Y2xlIGhvb2tzXG4gICAgLy8gbm90IHVzaW5nIGVudW1zIGhlcmUgYmVjYXVzZSBpdCByZXN1bHRzIGluIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgIGlzVW5tb3VudGVkOiBmYWxzZSxcbiAgICBpc0RlYWN0aXZhdGVkOiBmYWxzZSxcbiAgICBiYzogbnVsbCxcbiAgICBjOiBudWxsLFxuICAgIGJtOiBudWxsLFxuICAgIG06IG51bGwsXG4gICAgYnU6IG51bGwsXG4gICAgdTogbnVsbCxcbiAgICB1bTogbnVsbCxcbiAgICBidW06IG51bGwsXG4gICAgZGE6IG51bGwsXG4gICAgYTogbnVsbCxcbiAgICBydGc6IG51bGwsXG4gICAgcnRjOiBudWxsLFxuICAgIGVjOiBudWxsLFxuICAgIHNwOiBudWxsXG4gIH07XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgaW5zdGFuY2UuY3R4ID0gY3JlYXRlRGV2UmVuZGVyQ29udGV4dChpbnN0YW5jZSk7XG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2UuY3R4ID0geyBfOiBpbnN0YW5jZSB9O1xuICB9XG4gIGluc3RhbmNlLnJvb3QgPSBwYXJlbnQgPyBwYXJlbnQucm9vdCA6IGluc3RhbmNlO1xuICBpbnN0YW5jZS5lbWl0ID0gZW1pdC5iaW5kKG51bGwsIGluc3RhbmNlKTtcbiAgaWYgKHZub2RlLmNlKSB7XG4gICAgdm5vZGUuY2UoaW5zdGFuY2UpO1xuICB9XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbmxldCBjdXJyZW50SW5zdGFuY2UgPSBudWxsO1xuY29uc3QgZ2V0Q3VycmVudEluc3RhbmNlID0gKCkgPT4gY3VycmVudEluc3RhbmNlIHx8IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZTtcbmxldCBpbnRlcm5hbFNldEN1cnJlbnRJbnN0YW5jZTtcbmxldCBzZXRJblNTUlNldHVwU3RhdGU7XG57XG4gIGNvbnN0IGcgPSBnZXRHbG9iYWxUaGlzKCk7XG4gIGNvbnN0IHJlZ2lzdGVyR2xvYmFsU2V0dGVyID0gKGtleSwgc2V0dGVyKSA9PiB7XG4gICAgbGV0IHNldHRlcnM7XG4gICAgaWYgKCEoc2V0dGVycyA9IGdba2V5XSkpIHNldHRlcnMgPSBnW2tleV0gPSBbXTtcbiAgICBzZXR0ZXJzLnB1c2goc2V0dGVyKTtcbiAgICByZXR1cm4gKHYpID0+IHtcbiAgICAgIGlmIChzZXR0ZXJzLmxlbmd0aCA+IDEpIHNldHRlcnMuZm9yRWFjaCgoc2V0KSA9PiBzZXQodikpO1xuICAgICAgZWxzZSBzZXR0ZXJzWzBdKHYpO1xuICAgIH07XG4gIH07XG4gIGludGVybmFsU2V0Q3VycmVudEluc3RhbmNlID0gcmVnaXN0ZXJHbG9iYWxTZXR0ZXIoXG4gICAgYF9fVlVFX0lOU1RBTkNFX1NFVFRFUlNfX2AsXG4gICAgKHYpID0+IGN1cnJlbnRJbnN0YW5jZSA9IHZcbiAgKTtcbiAgc2V0SW5TU1JTZXR1cFN0YXRlID0gcmVnaXN0ZXJHbG9iYWxTZXR0ZXIoXG4gICAgYF9fVlVFX1NTUl9TRVRURVJTX19gLFxuICAgICh2KSA9PiBpc0luU1NSQ29tcG9uZW50U2V0dXAgPSB2XG4gICk7XG59XG5jb25zdCBzZXRDdXJyZW50SW5zdGFuY2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgcHJldiA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgaW50ZXJuYWxTZXRDdXJyZW50SW5zdGFuY2UoaW5zdGFuY2UpO1xuICBpbnN0YW5jZS5zY29wZS5vbigpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGluc3RhbmNlLnNjb3BlLm9mZigpO1xuICAgIGludGVybmFsU2V0Q3VycmVudEluc3RhbmNlKHByZXYpO1xuICB9O1xufTtcbmNvbnN0IHVuc2V0Q3VycmVudEluc3RhbmNlID0gKCkgPT4ge1xuICBjdXJyZW50SW5zdGFuY2UgJiYgY3VycmVudEluc3RhbmNlLnNjb3BlLm9mZigpO1xuICBpbnRlcm5hbFNldEN1cnJlbnRJbnN0YW5jZShudWxsKTtcbn07XG5jb25zdCBpc0J1aWx0SW5UYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChcInNsb3QsY29tcG9uZW50XCIpO1xuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUsIHsgaXNOYXRpdmVUYWcgfSkge1xuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGlzTmF0aXZlVGFnKG5hbWUpKSB7XG4gICAgd2FybiQxKFxuICAgICAgXCJEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50IGlkOiBcIiArIG5hbWVcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBpc1N0YXRlZnVsQ29tcG9uZW50KGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZS52bm9kZS5zaGFwZUZsYWcgJiA0O1xufVxubGV0IGlzSW5TU1JDb21wb25lbnRTZXR1cCA9IGZhbHNlO1xuZnVuY3Rpb24gc2V0dXBDb21wb25lbnQoaW5zdGFuY2UsIGlzU1NSID0gZmFsc2UsIG9wdGltaXplZCA9IGZhbHNlKSB7XG4gIGlzU1NSICYmIHNldEluU1NSU2V0dXBTdGF0ZShpc1NTUik7XG4gIGNvbnN0IHsgcHJvcHMsIGNoaWxkcmVuIH0gPSBpbnN0YW5jZS52bm9kZTtcbiAgY29uc3QgaXNTdGF0ZWZ1bCA9IGlzU3RhdGVmdWxDb21wb25lbnQoaW5zdGFuY2UpO1xuICBpbml0UHJvcHMoaW5zdGFuY2UsIHByb3BzLCBpc1N0YXRlZnVsLCBpc1NTUik7XG4gIGluaXRTbG90cyhpbnN0YW5jZSwgY2hpbGRyZW4sIG9wdGltaXplZCk7XG4gIGNvbnN0IHNldHVwUmVzdWx0ID0gaXNTdGF0ZWZ1bCA/IHNldHVwU3RhdGVmdWxDb21wb25lbnQoaW5zdGFuY2UsIGlzU1NSKSA6IHZvaWQgMDtcbiAgaXNTU1IgJiYgc2V0SW5TU1JTZXR1cFN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIHNldHVwUmVzdWx0O1xufVxuZnVuY3Rpb24gc2V0dXBTdGF0ZWZ1bENvbXBvbmVudChpbnN0YW5jZSwgaXNTU1IpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBDb21wb25lbnQgPSBpbnN0YW5jZS50eXBlO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGlmIChDb21wb25lbnQubmFtZSkge1xuICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKENvbXBvbmVudC5uYW1lLCBpbnN0YW5jZS5hcHBDb250ZXh0LmNvbmZpZyk7XG4gICAgfVxuICAgIGlmIChDb21wb25lbnQuY29tcG9uZW50cykge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhDb21wb25lbnQuY29tcG9uZW50cyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lc1tpXSwgaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQ29tcG9uZW50LmRpcmVjdGl2ZXMpIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoQ29tcG9uZW50LmRpcmVjdGl2ZXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWxpZGF0ZURpcmVjdGl2ZU5hbWUobmFtZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQ29tcG9uZW50LmNvbXBpbGVyT3B0aW9ucyAmJiBpc1J1bnRpbWVPbmx5KCkpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYFwiY29tcGlsZXJPcHRpb25zXCIgaXMgb25seSBzdXBwb3J0ZWQgd2hlbiB1c2luZyBhIGJ1aWxkIG9mIFZ1ZSB0aGF0IGluY2x1ZGVzIHRoZSBydW50aW1lIGNvbXBpbGVyLiBTaW5jZSB5b3UgYXJlIHVzaW5nIGEgcnVudGltZS1vbmx5IGJ1aWxkLCB0aGUgb3B0aW9ucyBzaG91bGQgYmUgcGFzc2VkIHZpYSB5b3VyIGJ1aWxkIHRvb2wgY29uZmlnIGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaW5zdGFuY2UuYWNjZXNzQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaW5zdGFuY2UucHJveHkgPSBuZXcgUHJveHkoaW5zdGFuY2UuY3R4LCBQdWJsaWNJbnN0YW5jZVByb3h5SGFuZGxlcnMpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGV4cG9zZVByb3BzT25SZW5kZXJDb250ZXh0KGluc3RhbmNlKTtcbiAgfVxuICBjb25zdCB7IHNldHVwIH0gPSBDb21wb25lbnQ7XG4gIGlmIChzZXR1cCkge1xuICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICBjb25zdCBzZXR1cENvbnRleHQgPSBpbnN0YW5jZS5zZXR1cENvbnRleHQgPSBzZXR1cC5sZW5ndGggPiAxID8gY3JlYXRlU2V0dXBDb250ZXh0KGluc3RhbmNlKSA6IG51bGw7XG4gICAgY29uc3QgcmVzZXQgPSBzZXRDdXJyZW50SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIGNvbnN0IHNldHVwUmVzdWx0ID0gY2FsbFdpdGhFcnJvckhhbmRsaW5nKFxuICAgICAgc2V0dXAsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIDAsXG4gICAgICBbXG4gICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkoaW5zdGFuY2UucHJvcHMpIDogaW5zdGFuY2UucHJvcHMsXG4gICAgICAgIHNldHVwQ29udGV4dFxuICAgICAgXVxuICAgICk7XG4gICAgY29uc3QgaXNBc3luY1NldHVwID0gaXNQcm9taXNlKHNldHVwUmVzdWx0KTtcbiAgICByZXNldFRyYWNraW5nKCk7XG4gICAgcmVzZXQoKTtcbiAgICBpZiAoKGlzQXN5bmNTZXR1cCB8fCBpbnN0YW5jZS5zcCkgJiYgIWlzQXN5bmNXcmFwcGVyKGluc3RhbmNlKSkge1xuICAgICAgbWFya0FzeW5jQm91bmRhcnkoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBpZiAoaXNBc3luY1NldHVwKSB7XG4gICAgICBzZXR1cFJlc3VsdC50aGVuKHVuc2V0Q3VycmVudEluc3RhbmNlLCB1bnNldEN1cnJlbnRJbnN0YW5jZSk7XG4gICAgICBpZiAoaXNTU1IpIHtcbiAgICAgICAgcmV0dXJuIHNldHVwUmVzdWx0LnRoZW4oKHJlc29sdmVkUmVzdWx0KSA9PiB7XG4gICAgICAgICAgaGFuZGxlU2V0dXBSZXN1bHQoaW5zdGFuY2UsIHJlc29sdmVkUmVzdWx0LCBpc1NTUik7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgaW5zdGFuY2UsIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmFzeW5jRGVwID0gc2V0dXBSZXN1bHQ7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpbnN0YW5jZS5zdXNwZW5zZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSAoX2EgPSBDb21wb25lbnQubmFtZSkgIT0gbnVsbCA/IF9hIDogXCJBbm9ueW1vdXNcIjtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgQ29tcG9uZW50IDwke25hbWV9Pjogc2V0dXAgZnVuY3Rpb24gcmV0dXJuZWQgYSBwcm9taXNlLCBidXQgbm8gPFN1c3BlbnNlPiBib3VuZGFyeSB3YXMgZm91bmQgaW4gdGhlIHBhcmVudCBjb21wb25lbnQgdHJlZS4gQSBjb21wb25lbnQgd2l0aCBhc3luYyBzZXR1cCgpIG11c3QgYmUgbmVzdGVkIGluIGEgPFN1c3BlbnNlPiBpbiBvcmRlciB0byBiZSByZW5kZXJlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVTZXR1cFJlc3VsdChpbnN0YW5jZSwgc2V0dXBSZXN1bHQsIGlzU1NSKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZmluaXNoQ29tcG9uZW50U2V0dXAoaW5zdGFuY2UsIGlzU1NSKTtcbiAgfVxufVxuZnVuY3Rpb24gaGFuZGxlU2V0dXBSZXN1bHQoaW5zdGFuY2UsIHNldHVwUmVzdWx0LCBpc1NTUikge1xuICBpZiAoaXNGdW5jdGlvbihzZXR1cFJlc3VsdCkpIHtcbiAgICBpZiAoaW5zdGFuY2UudHlwZS5fX3NzcklubGluZVJlbmRlcikge1xuICAgICAgaW5zdGFuY2Uuc3NyUmVuZGVyID0gc2V0dXBSZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnJlbmRlciA9IHNldHVwUmVzdWx0O1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChzZXR1cFJlc3VsdCkpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBpc1ZOb2RlKHNldHVwUmVzdWx0KSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgc2V0dXAoKSBzaG91bGQgbm90IHJldHVybiBWTm9kZXMgZGlyZWN0bHkgLSByZXR1cm4gYSByZW5kZXIgZnVuY3Rpb24gaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgIGluc3RhbmNlLmRldnRvb2xzUmF3U2V0dXBTdGF0ZSA9IHNldHVwUmVzdWx0O1xuICAgIH1cbiAgICBpbnN0YW5jZS5zZXR1cFN0YXRlID0gcHJveHlSZWZzKHNldHVwUmVzdWx0KTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgZXhwb3NlU2V0dXBTdGF0ZU9uUmVuZGVyQ29udGV4dChpbnN0YW5jZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2V0dXBSZXN1bHQgIT09IHZvaWQgMCkge1xuICAgIHdhcm4kMShcbiAgICAgIGBzZXR1cCgpIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0LiBSZWNlaXZlZDogJHtzZXR1cFJlc3VsdCA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIHNldHVwUmVzdWx0fWBcbiAgICApO1xuICB9XG4gIGZpbmlzaENvbXBvbmVudFNldHVwKGluc3RhbmNlLCBpc1NTUik7XG59XG5sZXQgY29tcGlsZTtcbmxldCBpbnN0YWxsV2l0aFByb3h5O1xuZnVuY3Rpb24gcmVnaXN0ZXJSdW50aW1lQ29tcGlsZXIoX2NvbXBpbGUpIHtcbiAgY29tcGlsZSA9IF9jb21waWxlO1xuICBpbnN0YWxsV2l0aFByb3h5ID0gKGkpID0+IHtcbiAgICBpZiAoaS5yZW5kZXIuX3JjKSB7XG4gICAgICBpLndpdGhQcm94eSA9IG5ldyBQcm94eShpLmN0eCwgUnVudGltZUNvbXBpbGVkUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzKTtcbiAgICB9XG4gIH07XG59XG5jb25zdCBpc1J1bnRpbWVPbmx5ID0gKCkgPT4gIWNvbXBpbGU7XG5mdW5jdGlvbiBmaW5pc2hDb21wb25lbnRTZXR1cChpbnN0YW5jZSwgaXNTU1IsIHNraXBPcHRpb25zKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGluc3RhbmNlLnR5cGU7XG4gIGlmICghaW5zdGFuY2UucmVuZGVyKSB7XG4gICAgaWYgKCFpc1NTUiAmJiBjb21waWxlICYmICFDb21wb25lbnQucmVuZGVyKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IENvbXBvbmVudC50ZW1wbGF0ZSB8fCBfX1ZVRV9PUFRJT05TX0FQSV9fICYmIHJlc29sdmVNZXJnZWRPcHRpb25zKGluc3RhbmNlKS50ZW1wbGF0ZTtcbiAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYGNvbXBpbGVgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlzQ3VzdG9tRWxlbWVudCwgY29tcGlsZXJPcHRpb25zIH0gPSBpbnN0YW5jZS5hcHBDb250ZXh0LmNvbmZpZztcbiAgICAgICAgY29uc3QgeyBkZWxpbWl0ZXJzLCBjb21waWxlck9wdGlvbnM6IGNvbXBvbmVudENvbXBpbGVyT3B0aW9ucyB9ID0gQ29tcG9uZW50O1xuICAgICAgICBjb25zdCBmaW5hbENvbXBpbGVyT3B0aW9ucyA9IGV4dGVuZChcbiAgICAgICAgICBleHRlbmQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudCxcbiAgICAgICAgICAgICAgZGVsaW1pdGVyc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uc1xuICAgICAgICAgICksXG4gICAgICAgICAgY29tcG9uZW50Q29tcGlsZXJPcHRpb25zXG4gICAgICAgICk7XG4gICAgICAgIENvbXBvbmVudC5yZW5kZXIgPSBjb21waWxlKHRlbXBsYXRlLCBmaW5hbENvbXBpbGVyT3B0aW9ucyk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYGNvbXBpbGVgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5yZW5kZXIgPSBDb21wb25lbnQucmVuZGVyIHx8IE5PT1A7XG4gICAgaWYgKGluc3RhbGxXaXRoUHJveHkpIHtcbiAgICAgIGluc3RhbGxXaXRoUHJveHkoaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuICBpZiAoX19WVUVfT1BUSU9OU19BUElfXyAmJiB0cnVlKSB7XG4gICAgY29uc3QgcmVzZXQgPSBzZXRDdXJyZW50SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICB0cnkge1xuICAgICAgYXBwbHlPcHRpb25zKGluc3RhbmNlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgcmVzZXQoKTtcbiAgICB9XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIUNvbXBvbmVudC5yZW5kZXIgJiYgaW5zdGFuY2UucmVuZGVyID09PSBOT09QICYmICFpc1NTUikge1xuICAgIGlmICghY29tcGlsZSAmJiBDb21wb25lbnQudGVtcGxhdGUpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYENvbXBvbmVudCBwcm92aWRlZCB0ZW1wbGF0ZSBvcHRpb24gYnV0IHJ1bnRpbWUgY29tcGlsYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJ1aWxkIG9mIFZ1ZS5gICsgKGAgQ29uZmlndXJlIHlvdXIgYnVuZGxlciB0byBhbGlhcyBcInZ1ZVwiIHRvIFwidnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzXCIuYCApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuJDEoYENvbXBvbmVudCBpcyBtaXNzaW5nIHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbjogYCwgQ29tcG9uZW50KTtcbiAgICB9XG4gIH1cbn1cbmNvbnN0IGF0dHJzUHJveHlIYW5kbGVycyA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyB7XG4gIGdldCh0YXJnZXQsIGtleSkge1xuICAgIG1hcmtBdHRyc0FjY2Vzc2VkKCk7XG4gICAgdHJhY2sodGFyZ2V0LCBcImdldFwiLCBcIlwiKTtcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldCgpIHtcbiAgICB3YXJuJDEoYHNldHVwQ29udGV4dC5hdHRycyBpcyByZWFkb25seS5gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KCkge1xuICAgIHdhcm4kMShgc2V0dXBDb250ZXh0LmF0dHJzIGlzIHJlYWRvbmx5LmApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSA6IHtcbiAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgdHJhY2sodGFyZ2V0LCBcImdldFwiLCBcIlwiKTtcbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH1cbn07XG5mdW5jdGlvbiBnZXRTbG90c1Byb3h5KGluc3RhbmNlKSB7XG4gIHJldHVybiBuZXcgUHJveHkoaW5zdGFuY2Uuc2xvdHMsIHtcbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHRyYWNrKGluc3RhbmNlLCBcImdldFwiLCBcIiRzbG90c1wiKTtcbiAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU2V0dXBDb250ZXh0KGluc3RhbmNlKSB7XG4gIGNvbnN0IGV4cG9zZSA9IChleHBvc2VkKSA9PiB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5leHBvc2VkKSB7XG4gICAgICAgIHdhcm4kMShgZXhwb3NlKCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UgcGVyIHNldHVwKCkuYCk7XG4gICAgICB9XG4gICAgICBpZiAoZXhwb3NlZCAhPSBudWxsKSB7XG4gICAgICAgIGxldCBleHBvc2VkVHlwZSA9IHR5cGVvZiBleHBvc2VkO1xuICAgICAgICBpZiAoZXhwb3NlZFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShleHBvc2VkKSkge1xuICAgICAgICAgICAgZXhwb3NlZFR5cGUgPSBcImFycmF5XCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1JlZihleHBvc2VkKSkge1xuICAgICAgICAgICAgZXhwb3NlZFR5cGUgPSBcInJlZlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwb3NlZFR5cGUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgZXhwb3NlKCkgc2hvdWxkIGJlIHBhc3NlZCBhIHBsYWluIG9iamVjdCwgcmVjZWl2ZWQgJHtleHBvc2VkVHlwZX0uYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuZXhwb3NlZCA9IGV4cG9zZWQgfHwge307XG4gIH07XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgbGV0IGF0dHJzUHJveHk7XG4gICAgbGV0IHNsb3RzUHJveHk7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgZ2V0IGF0dHJzKCkge1xuICAgICAgICByZXR1cm4gYXR0cnNQcm94eSB8fCAoYXR0cnNQcm94eSA9IG5ldyBQcm94eShpbnN0YW5jZS5hdHRycywgYXR0cnNQcm94eUhhbmRsZXJzKSk7XG4gICAgICB9LFxuICAgICAgZ2V0IHNsb3RzKCkge1xuICAgICAgICByZXR1cm4gc2xvdHNQcm94eSB8fCAoc2xvdHNQcm94eSA9IGdldFNsb3RzUHJveHkoaW5zdGFuY2UpKTtcbiAgICAgIH0sXG4gICAgICBnZXQgZW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudCwgLi4uYXJncykgPT4gaW5zdGFuY2UuZW1pdChldmVudCwgLi4uYXJncyk7XG4gICAgICB9LFxuICAgICAgZXhwb3NlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dHJzOiBuZXcgUHJveHkoaW5zdGFuY2UuYXR0cnMsIGF0dHJzUHJveHlIYW5kbGVycyksXG4gICAgICBzbG90czogaW5zdGFuY2Uuc2xvdHMsXG4gICAgICBlbWl0OiBpbnN0YW5jZS5lbWl0LFxuICAgICAgZXhwb3NlXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50UHVibGljSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgaWYgKGluc3RhbmNlLmV4cG9zZWQpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuZXhwb3NlUHJveHkgfHwgKGluc3RhbmNlLmV4cG9zZVByb3h5ID0gbmV3IFByb3h5KHByb3h5UmVmcyhtYXJrUmF3KGluc3RhbmNlLmV4cG9zZWQpKSwge1xuICAgICAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSBpbiBwdWJsaWNQcm9wZXJ0aWVzTWFwKSB7XG4gICAgICAgICAgcmV0dXJuIHB1YmxpY1Byb3BlcnRpZXNNYXBba2V5XShpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYXModGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSBpbiB0YXJnZXQgfHwga2V5IGluIHB1YmxpY1Byb3BlcnRpZXNNYXA7XG4gICAgICB9XG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnN0YW5jZS5wcm94eTtcbiAgfVxufVxuY29uc3QgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbmNvbnN0IGNsYXNzaWZ5ID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoY2xhc3NpZnlSRSwgKGMpID0+IGMudG9VcHBlckNhc2UoKSkucmVwbGFjZSgvWy1fXS9nLCBcIlwiKTtcbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50LCBpbmNsdWRlSW5mZXJyZWQgPSB0cnVlKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKENvbXBvbmVudCkgPyBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgOiBDb21wb25lbnQubmFtZSB8fCBpbmNsdWRlSW5mZXJyZWQgJiYgQ29tcG9uZW50Ll9fbmFtZTtcbn1cbmZ1bmN0aW9uIGZvcm1hdENvbXBvbmVudE5hbWUoaW5zdGFuY2UsIENvbXBvbmVudCwgaXNSb290ID0gZmFsc2UpIHtcbiAgbGV0IG5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCk7XG4gIGlmICghbmFtZSAmJiBDb21wb25lbnQuX19maWxlKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBDb21wb25lbnQuX19maWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLlxcdyskLyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBuYW1lID0gbWF0Y2hbMV07XG4gICAgfVxuICB9XG4gIGlmICghbmFtZSAmJiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5wYXJlbnQpIHtcbiAgICBjb25zdCBpbmZlckZyb21SZWdpc3RyeSA9IChyZWdpc3RyeSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKHJlZ2lzdHJ5W2tleV0gPT09IENvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIG5hbWUgPSBpbmZlckZyb21SZWdpc3RyeShcbiAgICAgIGluc3RhbmNlLmNvbXBvbmVudHMgfHwgaW5zdGFuY2UucGFyZW50LnR5cGUuY29tcG9uZW50c1xuICAgICkgfHwgaW5mZXJGcm9tUmVnaXN0cnkoaW5zdGFuY2UuYXBwQ29udGV4dC5jb21wb25lbnRzKTtcbiAgfVxuICByZXR1cm4gbmFtZSA/IGNsYXNzaWZ5KG5hbWUpIDogaXNSb290ID8gYEFwcGAgOiBgQW5vbnltb3VzYDtcbn1cbmZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQodmFsdWUpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUpICYmIFwiX192Y2NPcHRzXCIgaW4gdmFsdWU7XG59XG5cbmNvbnN0IGNvbXB1dGVkID0gKGdldHRlck9yT3B0aW9ucywgZGVidWdPcHRpb25zKSA9PiB7XG4gIGNvbnN0IGMgPSBjb21wdXRlZCQxKGdldHRlck9yT3B0aW9ucywgZGVidWdPcHRpb25zLCBpc0luU1NSQ29tcG9uZW50U2V0dXApO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGNvbnN0IGkgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgICBpZiAoaSAmJiBpLmFwcENvbnRleHQuY29uZmlnLndhcm5SZWN1cnNpdmVDb21wdXRlZCkge1xuICAgICAgYy5fd2FyblJlY3Vyc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjO1xufTtcblxuZnVuY3Rpb24gaCh0eXBlLCBwcm9wc09yQ2hpbGRyZW4sIGNoaWxkcmVuKSB7XG4gIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICBpZiAobCA9PT0gMikge1xuICAgIGlmIChpc09iamVjdChwcm9wc09yQ2hpbGRyZW4pICYmICFpc0FycmF5KHByb3BzT3JDaGlsZHJlbikpIHtcbiAgICAgIGlmIChpc1ZOb2RlKHByb3BzT3JDaGlsZHJlbikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZOb2RlKHR5cGUsIG51bGwsIFtwcm9wc09yQ2hpbGRyZW5dKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wc09yQ2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbnVsbCwgcHJvcHNPckNoaWxkcmVuKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGwgPiAzKSB7XG4gICAgICBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgfSBlbHNlIGlmIChsID09PSAzICYmIGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wc09yQ2hpbGRyZW4sIGNoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q3VzdG9tRm9ybWF0dGVyKCkge1xuICBpZiAoISEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2dWVTdHlsZSA9IHsgc3R5bGU6IFwiY29sb3I6IzNiYTc3NlwiIH07XG4gIGNvbnN0IG51bWJlclN0eWxlID0geyBzdHlsZTogXCJjb2xvcjojMTY3N2ZmXCIgfTtcbiAgY29uc3Qgc3RyaW5nU3R5bGUgPSB7IHN0eWxlOiBcImNvbG9yOiNmNTIyMmRcIiB9O1xuICBjb25zdCBrZXl3b3JkU3R5bGUgPSB7IHN0eWxlOiBcImNvbG9yOiNlYjJmOTZcIiB9O1xuICBjb25zdCBmb3JtYXR0ZXIgPSB7XG4gICAgX192dWVfY3VzdG9tX2Zvcm1hdHRlcjogdHJ1ZSxcbiAgICBoZWFkZXIob2JqKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAob2JqLl9faXNWdWUpIHtcbiAgICAgICAgcmV0dXJuIFtcImRpdlwiLCB2dWVTdHlsZSwgYFZ1ZUluc3RhbmNlYF07XG4gICAgICB9IGVsc2UgaWYgKGlzUmVmKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIFtcInNwYW5cIiwgdnVlU3R5bGUsIGdlblJlZkZsYWcob2JqKV0sXG4gICAgICAgICAgXCI8XCIsXG4gICAgICAgICAgLy8gYXZvaWQgZGVidWdnZXIgYWNjZXNzaW5nIHZhbHVlIGFmZmVjdGluZyBiZWhhdmlvclxuICAgICAgICAgIGZvcm1hdFZhbHVlKFwiX3ZhbHVlXCIgaW4gb2JqID8gb2JqLl92YWx1ZSA6IG9iaiksXG4gICAgICAgICAgYD5gXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgaWYgKGlzUmVhY3RpdmUob2JqKSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge30sXG4gICAgICAgICAgW1wic3BhblwiLCB2dWVTdHlsZSwgaXNTaGFsbG93KG9iaikgPyBcIlNoYWxsb3dSZWFjdGl2ZVwiIDogXCJSZWFjdGl2ZVwiXSxcbiAgICAgICAgICBcIjxcIixcbiAgICAgICAgICBmb3JtYXRWYWx1ZShvYmopLFxuICAgICAgICAgIGA+JHtpc1JlYWRvbmx5KG9iaikgPyBgIChyZWFkb25seSlgIDogYGB9YFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIGlmIChpc1JlYWRvbmx5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIFtcInNwYW5cIiwgdnVlU3R5bGUsIGlzU2hhbGxvdyhvYmopID8gXCJTaGFsbG93UmVhZG9ubHlcIiA6IFwiUmVhZG9ubHlcIl0sXG4gICAgICAgICAgXCI8XCIsXG4gICAgICAgICAgZm9ybWF0VmFsdWUob2JqKSxcbiAgICAgICAgICBcIj5cIlxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBoYXNCb2R5KG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19pc1Z1ZTtcbiAgICB9LFxuICAgIGJvZHkob2JqKSB7XG4gICAgICBpZiAob2JqICYmIG9iai5fX2lzVnVlKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7fSxcbiAgICAgICAgICAuLi5mb3JtYXRJbnN0YW5jZShvYmouJClcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIGZvcm1hdEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgY29uc3QgYmxvY2tzID0gW107XG4gICAgaWYgKGluc3RhbmNlLnR5cGUucHJvcHMgJiYgaW5zdGFuY2UucHJvcHMpIHtcbiAgICAgIGJsb2Nrcy5wdXNoKGNyZWF0ZUluc3RhbmNlQmxvY2soXCJwcm9wc1wiLCB0b1JhdyhpbnN0YW5jZS5wcm9wcykpKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnNldHVwU3RhdGUgIT09IEVNUFRZX09CSikge1xuICAgICAgYmxvY2tzLnB1c2goY3JlYXRlSW5zdGFuY2VCbG9jayhcInNldHVwXCIsIGluc3RhbmNlLnNldHVwU3RhdGUpKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmRhdGEgIT09IEVNUFRZX09CSikge1xuICAgICAgYmxvY2tzLnB1c2goY3JlYXRlSW5zdGFuY2VCbG9jayhcImRhdGFcIiwgdG9SYXcoaW5zdGFuY2UuZGF0YSkpKTtcbiAgICB9XG4gICAgY29uc3QgY29tcHV0ZWQgPSBleHRyYWN0S2V5cyhpbnN0YW5jZSwgXCJjb21wdXRlZFwiKTtcbiAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgIGJsb2Nrcy5wdXNoKGNyZWF0ZUluc3RhbmNlQmxvY2soXCJjb21wdXRlZFwiLCBjb21wdXRlZCkpO1xuICAgIH1cbiAgICBjb25zdCBpbmplY3RlZCA9IGV4dHJhY3RLZXlzKGluc3RhbmNlLCBcImluamVjdFwiKTtcbiAgICBpZiAoaW5qZWN0ZWQpIHtcbiAgICAgIGJsb2Nrcy5wdXNoKGNyZWF0ZUluc3RhbmNlQmxvY2soXCJpbmplY3RlZFwiLCBpbmplY3RlZCkpO1xuICAgIH1cbiAgICBibG9ja3MucHVzaChbXG4gICAgICBcImRpdlwiLFxuICAgICAge30sXG4gICAgICBbXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IGtleXdvcmRTdHlsZS5zdHlsZSArIFwiO29wYWNpdHk6MC42NlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiJCAoaW50ZXJuYWwpOiBcIlxuICAgICAgXSxcbiAgICAgIFtcIm9iamVjdFwiLCB7IG9iamVjdDogaW5zdGFuY2UgfV1cbiAgICBdKTtcbiAgICByZXR1cm4gYmxvY2tzO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlQmxvY2sodHlwZSwgdGFyZ2V0KSB7XG4gICAgdGFyZ2V0ID0gZXh0ZW5kKHt9LCB0YXJnZXQpO1xuICAgIGlmICghT2JqZWN0LmtleXModGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXCJzcGFuXCIsIHt9XTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0eWxlOiBcImxpbmUtaGVpZ2h0OjEuMjVlbTttYXJnaW4tYm90dG9tOjAuNmVtXCIgfSxcbiAgICAgIFtcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiBcImNvbG9yOiM0NzY1ODJcIlxuICAgICAgICB9LFxuICAgICAgICB0eXBlXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IFwicGFkZGluZy1sZWZ0OjEuMjVlbVwiXG4gICAgICAgIH0sXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKHRhcmdldCkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgW1wic3BhblwiLCBrZXl3b3JkU3R5bGUsIGtleSArIFwiOiBcIl0sXG4gICAgICAgICAgICBmb3JtYXRWYWx1ZSh0YXJnZXRba2V5XSwgZmFsc2UpXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICBdO1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdFZhbHVlKHYsIGFzUmF3ID0gdHJ1ZSkge1xuICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIFtcInNwYW5cIiwgbnVtYmVyU3R5bGUsIHZdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBbXCJzcGFuXCIsIHN0cmluZ1N0eWxlLCBKU09OLnN0cmluZ2lmeSh2KV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBbXCJzcGFuXCIsIGtleXdvcmRTdHlsZSwgdl07XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2KSkge1xuICAgICAgcmV0dXJuIFtcIm9iamVjdFwiLCB7IG9iamVjdDogYXNSYXcgPyB0b1Jhdyh2KSA6IHYgfV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXCJzcGFuXCIsIHN0cmluZ1N0eWxlLCBTdHJpbmcodildO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBleHRyYWN0S2V5cyhpbnN0YW5jZSwgdHlwZSkge1xuICAgIGNvbnN0IENvbXAgPSBpbnN0YW5jZS50eXBlO1xuICAgIGlmIChpc0Z1bmN0aW9uKENvbXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4dHJhY3RlZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGluc3RhbmNlLmN0eCkge1xuICAgICAgaWYgKGlzS2V5T2ZUeXBlKENvbXAsIGtleSwgdHlwZSkpIHtcbiAgICAgICAgZXh0cmFjdGVkW2tleV0gPSBpbnN0YW5jZS5jdHhba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhY3RlZDtcbiAgfVxuICBmdW5jdGlvbiBpc0tleU9mVHlwZShDb21wLCBrZXksIHR5cGUpIHtcbiAgICBjb25zdCBvcHRzID0gQ29tcFt0eXBlXTtcbiAgICBpZiAoaXNBcnJheShvcHRzKSAmJiBvcHRzLmluY2x1ZGVzKGtleSkgfHwgaXNPYmplY3Qob3B0cykgJiYga2V5IGluIG9wdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ29tcC5leHRlbmRzICYmIGlzS2V5T2ZUeXBlKENvbXAuZXh0ZW5kcywga2V5LCB0eXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChDb21wLm1peGlucyAmJiBDb21wLm1peGlucy5zb21lKChtKSA9PiBpc0tleU9mVHlwZShtLCBrZXksIHR5cGUpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdlblJlZkZsYWcodikge1xuICAgIGlmIChpc1NoYWxsb3codikpIHtcbiAgICAgIHJldHVybiBgU2hhbGxvd1JlZmA7XG4gICAgfVxuICAgIGlmICh2LmVmZmVjdCkge1xuICAgICAgcmV0dXJuIGBDb21wdXRlZFJlZmA7XG4gICAgfVxuICAgIHJldHVybiBgUmVmYDtcbiAgfVxuICBpZiAod2luZG93LmRldnRvb2xzRm9ybWF0dGVycykge1xuICAgIHdpbmRvdy5kZXZ0b29sc0Zvcm1hdHRlcnMucHVzaChmb3JtYXR0ZXIpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kZXZ0b29sc0Zvcm1hdHRlcnMgPSBbZm9ybWF0dGVyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXRoTWVtbyhtZW1vLCByZW5kZXIsIGNhY2hlLCBpbmRleCkge1xuICBjb25zdCBjYWNoZWQgPSBjYWNoZVtpbmRleF07XG4gIGlmIChjYWNoZWQgJiYgaXNNZW1vU2FtZShjYWNoZWQsIG1lbW8pKSB7XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfVxuICBjb25zdCByZXQgPSByZW5kZXIoKTtcbiAgcmV0Lm1lbW8gPSBtZW1vLnNsaWNlKCk7XG4gIHJldC5jYWNoZUluZGV4ID0gaW5kZXg7XG4gIHJldHVybiBjYWNoZVtpbmRleF0gPSByZXQ7XG59XG5mdW5jdGlvbiBpc01lbW9TYW1lKGNhY2hlZCwgbWVtbykge1xuICBjb25zdCBwcmV2ID0gY2FjaGVkLm1lbW87XG4gIGlmIChwcmV2Lmxlbmd0aCAhPSBtZW1vLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2hhbmdlZChwcmV2W2ldLCBtZW1vW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNCbG9ja1RyZWVFbmFibGVkID4gMCAmJiBjdXJyZW50QmxvY2spIHtcbiAgICBjdXJyZW50QmxvY2sucHVzaChjYWNoZWQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCB2ZXJzaW9uID0gXCIzLjUuMTNcIjtcbmNvbnN0IHdhcm4gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gd2FybiQxIDogTk9PUDtcbmNvbnN0IEVycm9yVHlwZVN0cmluZ3MgPSBFcnJvclR5cGVTdHJpbmdzJDEgO1xuY29uc3QgZGV2dG9vbHMgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IHRydWUgPyBkZXZ0b29scyQxIDogdm9pZCAwO1xuY29uc3Qgc2V0RGV2dG9vbHNIb29rID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCB0cnVlID8gc2V0RGV2dG9vbHNIb29rJDEgOiBOT09QO1xuY29uc3QgX3NzclV0aWxzID0ge1xuICBjcmVhdGVDb21wb25lbnRJbnN0YW5jZSxcbiAgc2V0dXBDb21wb25lbnQsXG4gIHJlbmRlckNvbXBvbmVudFJvb3QsXG4gIHNldEN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSxcbiAgaXNWTm9kZTogaXNWTm9kZSxcbiAgbm9ybWFsaXplVk5vZGUsXG4gIGdldENvbXBvbmVudFB1YmxpY0luc3RhbmNlLFxuICBlbnN1cmVWYWxpZFZOb2RlLFxuICBwdXNoV2FybmluZ0NvbnRleHQsXG4gIHBvcFdhcm5pbmdDb250ZXh0XG59O1xuY29uc3Qgc3NyVXRpbHMgPSBfc3NyVXRpbHMgO1xuY29uc3QgcmVzb2x2ZUZpbHRlciA9IG51bGw7XG5jb25zdCBjb21wYXRVdGlscyA9IG51bGw7XG5jb25zdCBEZXByZWNhdGlvblR5cGVzID0gbnVsbDtcblxuZXhwb3J0IHsgQmFzZVRyYW5zaXRpb24sIEJhc2VUcmFuc2l0aW9uUHJvcHNWYWxpZGF0b3JzLCBDb21tZW50LCBEZXByZWNhdGlvblR5cGVzLCBFcnJvckNvZGVzLCBFcnJvclR5cGVTdHJpbmdzLCBGcmFnbWVudCwgS2VlcEFsaXZlLCBTdGF0aWMsIFN1c3BlbnNlLCBUZWxlcG9ydCwgVGV4dCwgYXNzZXJ0TnVtYmVyLCBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZywgY2FsbFdpdGhFcnJvckhhbmRsaW5nLCBjbG9uZVZOb2RlLCBjb21wYXRVdGlscywgY29tcHV0ZWQsIGNyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQmFzZVZOb2RlIGFzIGNyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlSHlkcmF0aW9uUmVuZGVyZXIsIGNyZWF0ZVByb3BzUmVzdFByb3h5LCBjcmVhdGVSZW5kZXJlciwgY3JlYXRlU2xvdHMsIGNyZWF0ZVN0YXRpY1ZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZVZOb2RlLCBkZWZpbmVBc3luY0NvbXBvbmVudCwgZGVmaW5lQ29tcG9uZW50LCBkZWZpbmVFbWl0cywgZGVmaW5lRXhwb3NlLCBkZWZpbmVNb2RlbCwgZGVmaW5lT3B0aW9ucywgZGVmaW5lUHJvcHMsIGRlZmluZVNsb3RzLCBkZXZ0b29scywgZ2V0Q3VycmVudEluc3RhbmNlLCBnZXRUcmFuc2l0aW9uUmF3Q2hpbGRyZW4sIGd1YXJkUmVhY3RpdmVQcm9wcywgaCwgaGFuZGxlRXJyb3IsIGhhc0luamVjdGlvbkNvbnRleHQsIGh5ZHJhdGVPbklkbGUsIGh5ZHJhdGVPbkludGVyYWN0aW9uLCBoeWRyYXRlT25NZWRpYVF1ZXJ5LCBoeWRyYXRlT25WaXNpYmxlLCBpbml0Q3VzdG9tRm9ybWF0dGVyLCBpbmplY3QsIGlzTWVtb1NhbWUsIGlzUnVudGltZU9ubHksIGlzVk5vZGUsIG1lcmdlRGVmYXVsdHMsIG1lcmdlTW9kZWxzLCBtZXJnZVByb3BzLCBuZXh0VGljaywgb25BY3RpdmF0ZWQsIG9uQmVmb3JlTW91bnQsIG9uQmVmb3JlVW5tb3VudCwgb25CZWZvcmVVcGRhdGUsIG9uRGVhY3RpdmF0ZWQsIG9uRXJyb3JDYXB0dXJlZCwgb25Nb3VudGVkLCBvblJlbmRlclRyYWNrZWQsIG9uUmVuZGVyVHJpZ2dlcmVkLCBvblNlcnZlclByZWZldGNoLCBvblVubW91bnRlZCwgb25VcGRhdGVkLCBvcGVuQmxvY2ssIHBvcFNjb3BlSWQsIHByb3ZpZGUsIHB1c2hTY29wZUlkLCBxdWV1ZVBvc3RGbHVzaENiLCByZWdpc3RlclJ1bnRpbWVDb21waWxlciwgcmVuZGVyTGlzdCwgcmVuZGVyU2xvdCwgcmVzb2x2ZUNvbXBvbmVudCwgcmVzb2x2ZURpcmVjdGl2ZSwgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQsIHJlc29sdmVGaWx0ZXIsIHJlc29sdmVUcmFuc2l0aW9uSG9va3MsIHNldEJsb2NrVHJhY2tpbmcsIHNldERldnRvb2xzSG9vaywgc2V0VHJhbnNpdGlvbkhvb2tzLCBzc3JDb250ZXh0S2V5LCBzc3JVdGlscywgdG9IYW5kbGVycywgdHJhbnNmb3JtVk5vZGVBcmdzLCB1c2VBdHRycywgdXNlSWQsIHVzZU1vZGVsLCB1c2VTU1JDb250ZXh0LCB1c2VTbG90cywgdXNlVGVtcGxhdGVSZWYsIHVzZVRyYW5zaXRpb25TdGF0ZSwgdmVyc2lvbiwgd2Fybiwgd2F0Y2gsIHdhdGNoRWZmZWN0LCB3YXRjaFBvc3RFZmZlY3QsIHdhdGNoU3luY0VmZmVjdCwgd2l0aEFzeW5jQ29udGV4dCwgd2l0aEN0eCwgd2l0aERlZmF1bHRzLCB3aXRoRGlyZWN0aXZlcywgd2l0aE1lbW8sIHdpdGhTY29wZUlkIH07XG4iLCIvKipcbiogQHZ1ZS9ydW50aW1lLWRvbSB2My41LjEzXG4qIChjKSAyMDE4LXByZXNlbnQgWXV4aSAoRXZhbikgWW91IGFuZCBWdWUgY29udHJpYnV0b3JzXG4qIEBsaWNlbnNlIE1JVFxuKiovXG5pbXBvcnQgeyB3YXJuLCBoLCBCYXNlVHJhbnNpdGlvbiwgYXNzZXJ0TnVtYmVyLCBCYXNlVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycywgZ2V0Q3VycmVudEluc3RhbmNlLCBvbkJlZm9yZVVwZGF0ZSwgcXVldWVQb3N0Rmx1c2hDYiwgb25Nb3VudGVkLCB3YXRjaCwgb25Vbm1vdW50ZWQsIEZyYWdtZW50LCBTdGF0aWMsIGNhbWVsaXplLCBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZywgZGVmaW5lQ29tcG9uZW50LCBuZXh0VGljaywgdW5yZWYsIGNyZWF0ZVZOb2RlLCB1c2VUcmFuc2l0aW9uU3RhdGUsIG9uVXBkYXRlZCwgdG9SYXcsIGdldFRyYW5zaXRpb25SYXdDaGlsZHJlbiwgc2V0VHJhbnNpdGlvbkhvb2tzLCByZXNvbHZlVHJhbnNpdGlvbkhvb2tzLCBUZXh0LCBpc1J1bnRpbWVPbmx5LCBjcmVhdGVSZW5kZXJlciwgY3JlYXRlSHlkcmF0aW9uUmVuZGVyZXIgfSBmcm9tICdAdnVlL3J1bnRpbWUtY29yZSc7XG5leHBvcnQgKiBmcm9tICdAdnVlL3J1bnRpbWUtY29yZSc7XG5pbXBvcnQgeyBleHRlbmQsIGlzT2JqZWN0LCB0b051bWJlciwgaXNBcnJheSwgTk9PUCwgaXNTdHJpbmcsIGh5cGhlbmF0ZSwgY2FwaXRhbGl6ZSwgaW5jbHVkZUJvb2xlYW5BdHRyLCBpc1N5bWJvbCwgaXNTcGVjaWFsQm9vbGVhbkF0dHIsIGlzRnVuY3Rpb24sIGlzT24sIGlzTW9kZWxMaXN0ZW5lciwgY2FtZWxpemUgYXMgY2FtZWxpemUkMSwgaXNQbGFpbk9iamVjdCwgaGFzT3duLCBFTVBUWV9PQkosIGxvb3NlVG9OdW1iZXIsIGxvb3NlSW5kZXhPZiwgaXNTZXQsIGxvb3NlRXF1YWwsIGludm9rZUFycmF5Rm5zLCBpc0hUTUxUYWcsIGlzU1ZHVGFnLCBpc01hdGhNTFRhZyB9IGZyb20gJ0B2dWUvc2hhcmVkJztcblxubGV0IHBvbGljeSA9IHZvaWQgMDtcbmNvbnN0IHR0ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cudHJ1c3RlZFR5cGVzO1xuaWYgKHR0KSB7XG4gIHRyeSB7XG4gICAgcG9saWN5ID0gLyogQF9fUFVSRV9fICovIHR0LmNyZWF0ZVBvbGljeShcInZ1ZVwiLCB7XG4gICAgICBjcmVhdGVIVE1MOiAodmFsKSA9PiB2YWxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybihgRXJyb3IgY3JlYXRpbmcgdHJ1c3RlZCB0eXBlcyBwb2xpY3k6ICR7ZX1gKTtcbiAgfVxufVxuY29uc3QgdW5zYWZlVG9UcnVzdGVkSFRNTCA9IHBvbGljeSA/ICh2YWwpID0+IHBvbGljeS5jcmVhdGVIVE1MKHZhbCkgOiAodmFsKSA9PiB2YWw7XG5jb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmNvbnN0IG1hdGhtbE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XG5jb25zdCBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudCA6IG51bGw7XG5jb25zdCB0ZW1wbGF0ZUNvbnRhaW5lciA9IGRvYyAmJiAvKiBAX19QVVJFX18gKi8gZG9jLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmNvbnN0IG5vZGVPcHMgPSB7XG4gIGluc2VydDogKGNoaWxkLCBwYXJlbnQsIGFuY2hvcikgPT4ge1xuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIGFuY2hvciB8fCBudWxsKTtcbiAgfSxcbiAgcmVtb3ZlOiAoY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVFbGVtZW50OiAodGFnLCBuYW1lc3BhY2UsIGlzLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IGVsID0gbmFtZXNwYWNlID09PSBcInN2Z1wiID8gZG9jLmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKSA6IG5hbWVzcGFjZSA9PT0gXCJtYXRobWxcIiA/IGRvYy5jcmVhdGVFbGVtZW50TlMobWF0aG1sTlMsIHRhZykgOiBpcyA/IGRvYy5jcmVhdGVFbGVtZW50KHRhZywgeyBpcyB9KSA6IGRvYy5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKHRhZyA9PT0gXCJzZWxlY3RcIiAmJiBwcm9wcyAmJiBwcm9wcy5tdWx0aXBsZSAhPSBudWxsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBwcm9wcy5tdWx0aXBsZSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSxcbiAgY3JlYXRlVGV4dDogKHRleHQpID0+IGRvYy5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgY3JlYXRlQ29tbWVudDogKHRleHQpID0+IGRvYy5jcmVhdGVDb21tZW50KHRleHQpLFxuICBzZXRUZXh0OiAobm9kZSwgdGV4dCkgPT4ge1xuICAgIG5vZGUubm9kZVZhbHVlID0gdGV4dDtcbiAgfSxcbiAgc2V0RWxlbWVudFRleHQ6IChlbCwgdGV4dCkgPT4ge1xuICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfSxcbiAgcGFyZW50Tm9kZTogKG5vZGUpID0+IG5vZGUucGFyZW50Tm9kZSxcbiAgbmV4dFNpYmxpbmc6IChub2RlKSA9PiBub2RlLm5leHRTaWJsaW5nLFxuICBxdWVyeVNlbGVjdG9yOiAoc2VsZWN0b3IpID0+IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgc2V0U2NvcGVJZChlbCwgaWQpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoaWQsIFwiXCIpO1xuICB9LFxuICAvLyBfX1VOU0FGRV9fXG4gIC8vIFJlYXNvbjogaW5uZXJIVE1MLlxuICAvLyBTdGF0aWMgY29udGVudCBoZXJlIGNhbiBvbmx5IGNvbWUgZnJvbSBjb21waWxlZCB0ZW1wbGF0ZXMuXG4gIC8vIEFzIGxvbmcgYXMgdGhlIHVzZXIgb25seSB1c2VzIHRydXN0ZWQgdGVtcGxhdGVzLCB0aGlzIGlzIHNhZmUuXG4gIGluc2VydFN0YXRpY0NvbnRlbnQoY29udGVudCwgcGFyZW50LCBhbmNob3IsIG5hbWVzcGFjZSwgc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGFuY2hvciA/IGFuY2hvci5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnQubGFzdENoaWxkO1xuICAgIGlmIChzdGFydCAmJiAoc3RhcnQgPT09IGVuZCB8fCBzdGFydC5uZXh0U2libGluZykpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoc3RhcnQuY2xvbmVOb2RlKHRydWUpLCBhbmNob3IpO1xuICAgICAgICBpZiAoc3RhcnQgPT09IGVuZCB8fCAhKHN0YXJ0ID0gc3RhcnQubmV4dFNpYmxpbmcpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGxhdGVDb250YWluZXIuaW5uZXJIVE1MID0gdW5zYWZlVG9UcnVzdGVkSFRNTChcbiAgICAgICAgbmFtZXNwYWNlID09PSBcInN2Z1wiID8gYDxzdmc+JHtjb250ZW50fTwvc3ZnPmAgOiBuYW1lc3BhY2UgPT09IFwibWF0aG1sXCIgPyBgPG1hdGg+JHtjb250ZW50fTwvbWF0aD5gIDogY29udGVudFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVDb250YWluZXIuY29udGVudDtcbiAgICAgIGlmIChuYW1lc3BhY2UgPT09IFwic3ZnXCIgfHwgbmFtZXNwYWNlID09PSBcIm1hdGhtbFwiKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB0ZW1wbGF0ZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUodGVtcGxhdGUsIGFuY2hvcik7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAvLyBmaXJzdFxuICAgICAgYmVmb3JlID8gYmVmb3JlLm5leHRTaWJsaW5nIDogcGFyZW50LmZpcnN0Q2hpbGQsXG4gICAgICAvLyBsYXN0XG4gICAgICBhbmNob3IgPyBhbmNob3IucHJldmlvdXNTaWJsaW5nIDogcGFyZW50Lmxhc3RDaGlsZFxuICAgIF07XG4gIH1cbn07XG5cbmNvbnN0IFRSQU5TSVRJT04gPSBcInRyYW5zaXRpb25cIjtcbmNvbnN0IEFOSU1BVElPTiA9IFwiYW5pbWF0aW9uXCI7XG5jb25zdCB2dGNLZXkgPSBTeW1ib2woXCJfdnRjXCIpO1xuY29uc3QgRE9NVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycyA9IHtcbiAgbmFtZTogU3RyaW5nLFxuICB0eXBlOiBTdHJpbmcsXG4gIGNzczoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuICBkdXJhdGlvbjogW1N0cmluZywgTnVtYmVyLCBPYmplY3RdLFxuICBlbnRlckZyb21DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGVudGVyVG9DbGFzczogU3RyaW5nLFxuICBhcHBlYXJGcm9tQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBsZWF2ZUZyb21DbGFzczogU3RyaW5nLFxuICBsZWF2ZUFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nXG59O1xuY29uc3QgVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycyA9IC8qIEBfX1BVUkVfXyAqLyBleHRlbmQoXG4gIHt9LFxuICBCYXNlVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycyxcbiAgRE9NVHJhbnNpdGlvblByb3BzVmFsaWRhdG9yc1xuKTtcbmNvbnN0IGRlY29yYXRlJDEgPSAodCkgPT4ge1xuICB0LmRpc3BsYXlOYW1lID0gXCJUcmFuc2l0aW9uXCI7XG4gIHQucHJvcHMgPSBUcmFuc2l0aW9uUHJvcHNWYWxpZGF0b3JzO1xuICByZXR1cm4gdDtcbn07XG5jb25zdCBUcmFuc2l0aW9uID0gLyogQF9fUFVSRV9fICovIGRlY29yYXRlJDEoXG4gIChwcm9wcywgeyBzbG90cyB9KSA9PiBoKEJhc2VUcmFuc2l0aW9uLCByZXNvbHZlVHJhbnNpdGlvblByb3BzKHByb3BzKSwgc2xvdHMpXG4pO1xuY29uc3QgY2FsbEhvb2sgPSAoaG9vaywgYXJncyA9IFtdKSA9PiB7XG4gIGlmIChpc0FycmF5KGhvb2spKSB7XG4gICAgaG9vay5mb3JFYWNoKChoMikgPT4gaDIoLi4uYXJncykpO1xuICB9IGVsc2UgaWYgKGhvb2spIHtcbiAgICBob29rKC4uLmFyZ3MpO1xuICB9XG59O1xuY29uc3QgaGFzRXhwbGljaXRDYWxsYmFjayA9IChob29rKSA9PiB7XG4gIHJldHVybiBob29rID8gaXNBcnJheShob29rKSA/IGhvb2suc29tZSgoaDIpID0+IGgyLmxlbmd0aCA+IDEpIDogaG9vay5sZW5ndGggPiAxIDogZmFsc2U7XG59O1xuZnVuY3Rpb24gcmVzb2x2ZVRyYW5zaXRpb25Qcm9wcyhyYXdQcm9wcykge1xuICBjb25zdCBiYXNlUHJvcHMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gcmF3UHJvcHMpIHtcbiAgICBpZiAoIShrZXkgaW4gRE9NVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycykpIHtcbiAgICAgIGJhc2VQcm9wc1trZXldID0gcmF3UHJvcHNba2V5XTtcbiAgICB9XG4gIH1cbiAgaWYgKHJhd1Byb3BzLmNzcyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gYmFzZVByb3BzO1xuICB9XG4gIGNvbnN0IHtcbiAgICBuYW1lID0gXCJ2XCIsXG4gICAgdHlwZSxcbiAgICBkdXJhdGlvbixcbiAgICBlbnRlckZyb21DbGFzcyA9IGAke25hbWV9LWVudGVyLWZyb21gLFxuICAgIGVudGVyQWN0aXZlQ2xhc3MgPSBgJHtuYW1lfS1lbnRlci1hY3RpdmVgLFxuICAgIGVudGVyVG9DbGFzcyA9IGAke25hbWV9LWVudGVyLXRvYCxcbiAgICBhcHBlYXJGcm9tQ2xhc3MgPSBlbnRlckZyb21DbGFzcyxcbiAgICBhcHBlYXJBY3RpdmVDbGFzcyA9IGVudGVyQWN0aXZlQ2xhc3MsXG4gICAgYXBwZWFyVG9DbGFzcyA9IGVudGVyVG9DbGFzcyxcbiAgICBsZWF2ZUZyb21DbGFzcyA9IGAke25hbWV9LWxlYXZlLWZyb21gLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3MgPSBgJHtuYW1lfS1sZWF2ZS1hY3RpdmVgLFxuICAgIGxlYXZlVG9DbGFzcyA9IGAke25hbWV9LWxlYXZlLXRvYFxuICB9ID0gcmF3UHJvcHM7XG4gIGNvbnN0IGR1cmF0aW9ucyA9IG5vcm1hbGl6ZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgY29uc3QgZW50ZXJEdXJhdGlvbiA9IGR1cmF0aW9ucyAmJiBkdXJhdGlvbnNbMF07XG4gIGNvbnN0IGxlYXZlRHVyYXRpb24gPSBkdXJhdGlvbnMgJiYgZHVyYXRpb25zWzFdO1xuICBjb25zdCB7XG4gICAgb25CZWZvcmVFbnRlcixcbiAgICBvbkVudGVyLFxuICAgIG9uRW50ZXJDYW5jZWxsZWQsXG4gICAgb25MZWF2ZSxcbiAgICBvbkxlYXZlQ2FuY2VsbGVkLFxuICAgIG9uQmVmb3JlQXBwZWFyID0gb25CZWZvcmVFbnRlcixcbiAgICBvbkFwcGVhciA9IG9uRW50ZXIsXG4gICAgb25BcHBlYXJDYW5jZWxsZWQgPSBvbkVudGVyQ2FuY2VsbGVkXG4gIH0gPSBiYXNlUHJvcHM7XG4gIGNvbnN0IGZpbmlzaEVudGVyID0gKGVsLCBpc0FwcGVhciwgZG9uZSwgaXNDYW5jZWxsZWQpID0+IHtcbiAgICBlbC5fZW50ZXJDYW5jZWxsZWQgPSBpc0NhbmNlbGxlZDtcbiAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGlzQXBwZWFyID8gYXBwZWFyVG9DbGFzcyA6IGVudGVyVG9DbGFzcyk7XG4gICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBpc0FwcGVhciA/IGFwcGVhckFjdGl2ZUNsYXNzIDogZW50ZXJBY3RpdmVDbGFzcyk7XG4gICAgZG9uZSAmJiBkb25lKCk7XG4gIH07XG4gIGNvbnN0IGZpbmlzaExlYXZlID0gKGVsLCBkb25lKSA9PiB7XG4gICAgZWwuX2lzTGVhdmluZyA9IGZhbHNlO1xuICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVGcm9tQ2xhc3MpO1xuICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgIGRvbmUgJiYgZG9uZSgpO1xuICB9O1xuICBjb25zdCBtYWtlRW50ZXJIb29rID0gKGlzQXBwZWFyKSA9PiB7XG4gICAgcmV0dXJuIChlbCwgZG9uZSkgPT4ge1xuICAgICAgY29uc3QgaG9vayA9IGlzQXBwZWFyID8gb25BcHBlYXIgOiBvbkVudGVyO1xuICAgICAgY29uc3QgcmVzb2x2ZSA9ICgpID0+IGZpbmlzaEVudGVyKGVsLCBpc0FwcGVhciwgZG9uZSk7XG4gICAgICBjYWxsSG9vayhob29rLCBbZWwsIHJlc29sdmVdKTtcbiAgICAgIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgaXNBcHBlYXIgPyBhcHBlYXJGcm9tQ2xhc3MgOiBlbnRlckZyb21DbGFzcyk7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgaXNBcHBlYXIgPyBhcHBlYXJUb0NsYXNzIDogZW50ZXJUb0NsYXNzKTtcbiAgICAgICAgaWYgKCFoYXNFeHBsaWNpdENhbGxiYWNrKGhvb2spKSB7XG4gICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBlbnRlckR1cmF0aW9uLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGV4dGVuZChiYXNlUHJvcHMsIHtcbiAgICBvbkJlZm9yZUVudGVyKGVsKSB7XG4gICAgICBjYWxsSG9vayhvbkJlZm9yZUVudGVyLCBbZWxdKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgZW50ZXJGcm9tQ2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBlbnRlckFjdGl2ZUNsYXNzKTtcbiAgICB9LFxuICAgIG9uQmVmb3JlQXBwZWFyKGVsKSB7XG4gICAgICBjYWxsSG9vayhvbkJlZm9yZUFwcGVhciwgW2VsXSk7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFwcGVhckZyb21DbGFzcyk7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFwcGVhckFjdGl2ZUNsYXNzKTtcbiAgICB9LFxuICAgIG9uRW50ZXI6IG1ha2VFbnRlckhvb2soZmFsc2UpLFxuICAgIG9uQXBwZWFyOiBtYWtlRW50ZXJIb29rKHRydWUpLFxuICAgIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgICAgIGVsLl9pc0xlYXZpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgcmVzb2x2ZSA9ICgpID0+IGZpbmlzaExlYXZlKGVsLCBkb25lKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVGcm9tQ2xhc3MpO1xuICAgICAgaWYgKCFlbC5fZW50ZXJDYW5jZWxsZWQpIHtcbiAgICAgICAgZm9yY2VSZWZsb3coKTtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICAgIGZvcmNlUmVmbG93KCk7XG4gICAgICB9XG4gICAgICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIWVsLl9pc0xlYXZpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUZyb21DbGFzcyk7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgaWYgKCFoYXNFeHBsaWNpdENhbGxiYWNrKG9uTGVhdmUpKSB7XG4gICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBsZWF2ZUR1cmF0aW9uLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjYWxsSG9vayhvbkxlYXZlLCBbZWwsIHJlc29sdmVdKTtcbiAgICB9LFxuICAgIG9uRW50ZXJDYW5jZWxsZWQoZWwpIHtcbiAgICAgIGZpbmlzaEVudGVyKGVsLCBmYWxzZSwgdm9pZCAwLCB0cnVlKTtcbiAgICAgIGNhbGxIb29rKG9uRW50ZXJDYW5jZWxsZWQsIFtlbF0pO1xuICAgIH0sXG4gICAgb25BcHBlYXJDYW5jZWxsZWQoZWwpIHtcbiAgICAgIGZpbmlzaEVudGVyKGVsLCB0cnVlLCB2b2lkIDAsIHRydWUpO1xuICAgICAgY2FsbEhvb2sob25BcHBlYXJDYW5jZWxsZWQsIFtlbF0pO1xuICAgIH0sXG4gICAgb25MZWF2ZUNhbmNlbGxlZChlbCkge1xuICAgICAgZmluaXNoTGVhdmUoZWwpO1xuICAgICAgY2FsbEhvb2sob25MZWF2ZUNhbmNlbGxlZCwgW2VsXSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoZHVyYXRpb24pKSB7XG4gICAgcmV0dXJuIFtOdW1iZXJPZihkdXJhdGlvbi5lbnRlciksIE51bWJlck9mKGR1cmF0aW9uLmxlYXZlKV07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbiA9IE51bWJlck9mKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gW24sIG5dO1xuICB9XG59XG5mdW5jdGlvbiBOdW1iZXJPZih2YWwpIHtcbiAgY29uc3QgcmVzID0gdG9OdW1iZXIodmFsKTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBhc3NlcnROdW1iZXIocmVzLCBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBkdXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoYykgPT4gYyAmJiBlbC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgKGVsW3Z0Y0tleV0gfHwgKGVsW3Z0Y0tleV0gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKSkuYWRkKGNscyk7XG59XG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGNscykge1xuICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKChjKSA9PiBjICYmIGVsLmNsYXNzTGlzdC5yZW1vdmUoYykpO1xuICBjb25zdCBfdnRjID0gZWxbdnRjS2V5XTtcbiAgaWYgKF92dGMpIHtcbiAgICBfdnRjLmRlbGV0ZShjbHMpO1xuICAgIGlmICghX3Z0Yy5zaXplKSB7XG4gICAgICBlbFt2dGNLZXldID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbmV4dEZyYW1lKGNiKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgfSk7XG59XG5sZXQgZW5kSWQgPSAwO1xuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzKGVsLCBleHBlY3RlZFR5cGUsIGV4cGxpY2l0VGltZW91dCwgcmVzb2x2ZSkge1xuICBjb25zdCBpZCA9IGVsLl9lbmRJZCA9ICsrZW5kSWQ7XG4gIGNvbnN0IHJlc29sdmVJZk5vdFN0YWxlID0gKCkgPT4ge1xuICAgIGlmIChpZCA9PT0gZWwuX2VuZElkKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9O1xuICBpZiAoZXhwbGljaXRUaW1lb3V0ICE9IG51bGwpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlSWZOb3RTdGFsZSwgZXhwbGljaXRUaW1lb3V0KTtcbiAgfVxuICBjb25zdCB7IHR5cGUsIHRpbWVvdXQsIHByb3BDb3VudCB9ID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVybiByZXNvbHZlKCk7XG4gIH1cbiAgY29uc3QgZW5kRXZlbnQgPSB0eXBlICsgXCJlbmRcIjtcbiAgbGV0IGVuZGVkID0gMDtcbiAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZW5kRXZlbnQsIG9uRW5kKTtcbiAgICByZXNvbHZlSWZOb3RTdGFsZSgpO1xuICB9O1xuICBjb25zdCBvbkVuZCA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCAmJiArK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZW5kZWQgPCBwcm9wQ291bnQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfSwgdGltZW91dCArIDEpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGVuZEV2ZW50LCBvbkVuZCk7XG59XG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyhlbCwgZXhwZWN0ZWRUeXBlKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgY29uc3QgZ2V0U3R5bGVQcm9wZXJ0aWVzID0gKGtleSkgPT4gKHN0eWxlc1trZXldIHx8IFwiXCIpLnNwbGl0KFwiLCBcIik7XG4gIGNvbnN0IHRyYW5zaXRpb25EZWxheXMgPSBnZXRTdHlsZVByb3BlcnRpZXMoYCR7VFJBTlNJVElPTn1EZWxheWApO1xuICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb25zID0gZ2V0U3R5bGVQcm9wZXJ0aWVzKGAke1RSQU5TSVRJT059RHVyYXRpb25gKTtcbiAgY29uc3QgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICBjb25zdCBhbmltYXRpb25EZWxheXMgPSBnZXRTdHlsZVByb3BlcnRpZXMoYCR7QU5JTUFUSU9OfURlbGF5YCk7XG4gIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9ucyA9IGdldFN0eWxlUHJvcGVydGllcyhgJHtBTklNQVRJT059RHVyYXRpb25gKTtcbiAgY29uc3QgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuICBsZXQgdHlwZSA9IG51bGw7XG4gIGxldCB0aW1lb3V0ID0gMDtcbiAgbGV0IHByb3BDb3VudCA9IDA7XG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICB0eXBlID0gdGltZW91dCA+IDAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXQgPyBUUkFOU0lUSU9OIDogQU5JTUFUSU9OIDogbnVsbDtcbiAgICBwcm9wQ291bnQgPSB0eXBlID8gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aCA6IDA7XG4gIH1cbiAgY29uc3QgaGFzVHJhbnNmb3JtID0gdHlwZSA9PT0gVFJBTlNJVElPTiAmJiAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvLnRlc3QoXG4gICAgZ2V0U3R5bGVQcm9wZXJ0aWVzKGAke1RSQU5TSVRJT059UHJvcGVydHlgKS50b1N0cmluZygpXG4gICk7XG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICB0aW1lb3V0LFxuICAgIHByb3BDb3VudCxcbiAgICBoYXNUcmFuc2Zvcm1cbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFRpbWVvdXQoZGVsYXlzLCBkdXJhdGlvbnMpIHtcbiAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCguLi5kdXJhdGlvbnMubWFwKChkLCBpKSA9PiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pKSk7XG59XG5mdW5jdGlvbiB0b01zKHMpIHtcbiAgaWYgKHMgPT09IFwiYXV0b1wiKSByZXR1cm4gMDtcbiAgcmV0dXJuIE51bWJlcihzLnNsaWNlKDAsIC0xKS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpICogMWUzO1xufVxuZnVuY3Rpb24gZm9yY2VSZWZsb3coKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcbn1cblxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhlbCwgdmFsdWUsIGlzU1ZHKSB7XG4gIGNvbnN0IHRyYW5zaXRpb25DbGFzc2VzID0gZWxbdnRjS2V5XTtcbiAgaWYgKHRyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgdmFsdWUgPSAodmFsdWUgPyBbdmFsdWUsIC4uLnRyYW5zaXRpb25DbGFzc2VzXSA6IFsuLi50cmFuc2l0aW9uQ2xhc3Nlc10pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gIH0gZWxzZSBpZiAoaXNTVkcpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZWwuY2xhc3NOYW1lID0gdmFsdWU7XG4gIH1cbn1cblxuY29uc3QgdlNob3dPcmlnaW5hbERpc3BsYXkgPSBTeW1ib2woXCJfdm9kXCIpO1xuY29uc3QgdlNob3dIaWRkZW4gPSBTeW1ib2woXCJfdnNoXCIpO1xuY29uc3QgdlNob3cgPSB7XG4gIGJlZm9yZU1vdW50KGVsLCB7IHZhbHVlIH0sIHsgdHJhbnNpdGlvbiB9KSB7XG4gICAgZWxbdlNob3dPcmlnaW5hbERpc3BsYXldID0gZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZWwuc3R5bGUuZGlzcGxheTtcbiAgICBpZiAodHJhbnNpdGlvbiAmJiB2YWx1ZSkge1xuICAgICAgdHJhbnNpdGlvbi5iZWZvcmVFbnRlcihlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc3BsYXkoZWwsIHZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoZWwsIHsgdmFsdWUgfSwgeyB0cmFuc2l0aW9uIH0pIHtcbiAgICBpZiAodHJhbnNpdGlvbiAmJiB2YWx1ZSkge1xuICAgICAgdHJhbnNpdGlvbi5lbnRlcihlbCk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVkKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSB9LCB7IHRyYW5zaXRpb24gfSkge1xuICAgIGlmICghdmFsdWUgPT09ICFvbGRWYWx1ZSkgcmV0dXJuO1xuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5iZWZvcmVFbnRlcihlbCk7XG4gICAgICAgIHNldERpc3BsYXkoZWwsIHRydWUpO1xuICAgICAgICB0cmFuc2l0aW9uLmVudGVyKGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24ubGVhdmUoZWwsICgpID0+IHtcbiAgICAgICAgICBzZXREaXNwbGF5KGVsLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXREaXNwbGF5KGVsLCB2YWx1ZSk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVVbm1vdW50KGVsLCB7IHZhbHVlIH0pIHtcbiAgICBzZXREaXNwbGF5KGVsLCB2YWx1ZSk7XG4gIH1cbn07XG5pZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICB2U2hvdy5uYW1lID0gXCJzaG93XCI7XG59XG5mdW5jdGlvbiBzZXREaXNwbGF5KGVsLCB2YWx1ZSkge1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbFt2U2hvd09yaWdpbmFsRGlzcGxheV0gOiBcIm5vbmVcIjtcbiAgZWxbdlNob3dIaWRkZW5dID0gIXZhbHVlO1xufVxuZnVuY3Rpb24gaW5pdFZTaG93Rm9yU1NSKCkge1xuICB2U2hvdy5nZXRTU1JQcm9wcyA9ICh7IHZhbHVlIH0pID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4geyBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9IH07XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBDU1NfVkFSX1RFWFQgPSBTeW1ib2woISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IFwiQ1NTX1ZBUl9URVhUXCIgOiBcIlwiKTtcbmZ1bmN0aW9uIHVzZUNzc1ZhcnMoZ2V0dGVyKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKCk7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4oYHVzZUNzc1ZhcnMgaXMgY2FsbGVkIHdpdGhvdXQgY3VycmVudCBhY3RpdmUgY29tcG9uZW50IGluc3RhbmNlLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB1cGRhdGVUZWxlcG9ydHMgPSBpbnN0YW5jZS51dCA9ICh2YXJzID0gZ2V0dGVyKGluc3RhbmNlLnByb3h5KSkgPT4ge1xuICAgIEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS12LW93bmVyPVwiJHtpbnN0YW5jZS51aWR9XCJdYClcbiAgICApLmZvckVhY2goKG5vZGUpID0+IHNldFZhcnNPbk5vZGUobm9kZSwgdmFycykpO1xuICB9O1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGluc3RhbmNlLmdldENzc1ZhcnMgPSAoKSA9PiBnZXR0ZXIoaW5zdGFuY2UucHJveHkpO1xuICB9XG4gIGNvbnN0IHNldFZhcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFycyA9IGdldHRlcihpbnN0YW5jZS5wcm94eSk7XG4gICAgaWYgKGluc3RhbmNlLmNlKSB7XG4gICAgICBzZXRWYXJzT25Ob2RlKGluc3RhbmNlLmNlLCB2YXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFyc09uVk5vZGUoaW5zdGFuY2Uuc3ViVHJlZSwgdmFycyk7XG4gICAgfVxuICAgIHVwZGF0ZVRlbGVwb3J0cyh2YXJzKTtcbiAgfTtcbiAgb25CZWZvcmVVcGRhdGUoKCkgPT4ge1xuICAgIHF1ZXVlUG9zdEZsdXNoQ2Ioc2V0VmFycyk7XG4gIH0pO1xuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHdhdGNoKHNldFZhcnMsIE5PT1AsIHsgZmx1c2g6IFwicG9zdFwiIH0pO1xuICAgIGNvbnN0IG9iID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoc2V0VmFycyk7XG4gICAgb2Iub2JzZXJ2ZShpbnN0YW5jZS5zdWJUcmVlLmVsLnBhcmVudE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIG9uVW5tb3VudGVkKCgpID0+IG9iLmRpc2Nvbm5lY3QoKSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2V0VmFyc09uVk5vZGUodm5vZGUsIHZhcnMpIHtcbiAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDEyOCkge1xuICAgIGNvbnN0IHN1c3BlbnNlID0gdm5vZGUuc3VzcGVuc2U7XG4gICAgdm5vZGUgPSBzdXNwZW5zZS5hY3RpdmVCcmFuY2g7XG4gICAgaWYgKHN1c3BlbnNlLnBlbmRpbmdCcmFuY2ggJiYgIXN1c3BlbnNlLmlzSHlkcmF0aW5nKSB7XG4gICAgICBzdXNwZW5zZS5lZmZlY3RzLnB1c2goKCkgPT4ge1xuICAgICAgICBzZXRWYXJzT25WTm9kZShzdXNwZW5zZS5hY3RpdmVCcmFuY2gsIHZhcnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHdoaWxlICh2bm9kZS5jb21wb25lbnQpIHtcbiAgICB2bm9kZSA9IHZub2RlLmNvbXBvbmVudC5zdWJUcmVlO1xuICB9XG4gIGlmICh2bm9kZS5zaGFwZUZsYWcgJiAxICYmIHZub2RlLmVsKSB7XG4gICAgc2V0VmFyc09uTm9kZSh2bm9kZS5lbCwgdmFycyk7XG4gIH0gZWxzZSBpZiAodm5vZGUudHlwZSA9PT0gRnJhZ21lbnQpIHtcbiAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjKSA9PiBzZXRWYXJzT25WTm9kZShjLCB2YXJzKSk7XG4gIH0gZWxzZSBpZiAodm5vZGUudHlwZSA9PT0gU3RhdGljKSB7XG4gICAgbGV0IHsgZWwsIGFuY2hvciB9ID0gdm5vZGU7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBzZXRWYXJzT25Ob2RlKGVsLCB2YXJzKTtcbiAgICAgIGlmIChlbCA9PT0gYW5jaG9yKSBicmVhaztcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBzZXRWYXJzT25Ob2RlKGVsLCB2YXJzKSB7XG4gIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGNvbnN0IHN0eWxlID0gZWwuc3R5bGU7XG4gICAgbGV0IGNzc1RleHQgPSBcIlwiO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHZhcnMpIHtcbiAgICAgIHN0eWxlLnNldFByb3BlcnR5KGAtLSR7a2V5fWAsIHZhcnNba2V5XSk7XG4gICAgICBjc3NUZXh0ICs9IGAtLSR7a2V5fTogJHt2YXJzW2tleV19O2A7XG4gICAgfVxuICAgIHN0eWxlW0NTU19WQVJfVEVYVF0gPSBjc3NUZXh0O1xuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlSRSA9IC8oXnw7KVxccypkaXNwbGF5XFxzKjovO1xuZnVuY3Rpb24gcGF0Y2hTdHlsZShlbCwgcHJldiwgbmV4dCkge1xuICBjb25zdCBzdHlsZSA9IGVsLnN0eWxlO1xuICBjb25zdCBpc0Nzc1N0cmluZyA9IGlzU3RyaW5nKG5leHQpO1xuICBsZXQgaGFzQ29udHJvbGxlZERpc3BsYXkgPSBmYWxzZTtcbiAgaWYgKG5leHQgJiYgIWlzQ3NzU3RyaW5nKSB7XG4gICAgaWYgKHByZXYpIHtcbiAgICAgIGlmICghaXNTdHJpbmcocHJldikpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJldikge1xuICAgICAgICAgIGlmIChuZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0U3R5bGUoc3R5bGUsIGtleSwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IHByZXZTdHlsZSBvZiBwcmV2LnNwbGl0KFwiO1wiKSkge1xuICAgICAgICAgIGNvbnN0IGtleSA9IHByZXZTdHlsZS5zbGljZSgwLCBwcmV2U3R5bGUuaW5kZXhPZihcIjpcIikpLnRyaW0oKTtcbiAgICAgICAgICBpZiAobmV4dFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFN0eWxlKHN0eWxlLCBrZXksIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXh0KSB7XG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BsYXlcIikge1xuICAgICAgICBoYXNDb250cm9sbGVkRGlzcGxheSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzZXRTdHlsZShzdHlsZSwga2V5LCBuZXh0W2tleV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNDc3NTdHJpbmcpIHtcbiAgICAgIGlmIChwcmV2ICE9PSBuZXh0KSB7XG4gICAgICAgIGNvbnN0IGNzc1ZhclRleHQgPSBzdHlsZVtDU1NfVkFSX1RFWFRdO1xuICAgICAgICBpZiAoY3NzVmFyVGV4dCkge1xuICAgICAgICAgIG5leHQgKz0gXCI7XCIgKyBjc3NWYXJUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmNzc1RleHQgPSBuZXh0O1xuICAgICAgICBoYXNDb250cm9sbGVkRGlzcGxheSA9IGRpc3BsYXlSRS50ZXN0KG5leHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJldikge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgfVxuICB9XG4gIGlmICh2U2hvd09yaWdpbmFsRGlzcGxheSBpbiBlbCkge1xuICAgIGVsW3ZTaG93T3JpZ2luYWxEaXNwbGF5XSA9IGhhc0NvbnRyb2xsZWREaXNwbGF5ID8gc3R5bGUuZGlzcGxheSA6IFwiXCI7XG4gICAgaWYgKGVsW3ZTaG93SGlkZGVuXSkge1xuICAgICAgc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuY29uc3Qgc2VtaWNvbG9uUkUgPSAvW15cXFxcXTtcXHMqJC87XG5jb25zdCBpbXBvcnRhbnRSRSA9IC9cXHMqIWltcG9ydGFudCQvO1xuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIG5hbWUsIHZhbCkge1xuICBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgdmFsLmZvckVhY2goKHYpID0+IHNldFN0eWxlKHN0eWxlLCBuYW1lLCB2KSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB2YWwgPSBcIlwiO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBpZiAoc2VtaWNvbG9uUkUudGVzdCh2YWwpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgYFVuZXhwZWN0ZWQgc2VtaWNvbG9uIGF0IHRoZSBlbmQgb2YgJyR7bmFtZX0nIHN0eWxlIHZhbHVlOiAnJHt2YWx9J2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKSB7XG4gICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IGF1dG9QcmVmaXgoc3R5bGUsIG5hbWUpO1xuICAgICAgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICBoeXBoZW5hdGUocHJlZml4ZWQpLFxuICAgICAgICAgIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCBcIlwiKSxcbiAgICAgICAgICBcImltcG9ydGFudFwiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZVtwcmVmaXhlZF0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jb25zdCBwcmVmaXhlcyA9IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdO1xuY29uc3QgcHJlZml4Q2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGF1dG9QcmVmaXgoc3R5bGUsIHJhd05hbWUpIHtcbiAgY29uc3QgY2FjaGVkID0gcHJlZml4Q2FjaGVbcmF3TmFtZV07XG4gIGlmIChjYWNoZWQpIHtcbiAgICByZXR1cm4gY2FjaGVkO1xuICB9XG4gIGxldCBuYW1lID0gY2FtZWxpemUocmF3TmFtZSk7XG4gIGlmIChuYW1lICE9PSBcImZpbHRlclwiICYmIG5hbWUgaW4gc3R5bGUpIHtcbiAgICByZXR1cm4gcHJlZml4Q2FjaGVbcmF3TmFtZV0gPSBuYW1lO1xuICB9XG4gIG5hbWUgPSBjYXBpdGFsaXplKG5hbWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIG5hbWU7XG4gICAgaWYgKHByZWZpeGVkIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gcHJlZml4Q2FjaGVbcmF3TmFtZV0gPSBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd05hbWU7XG59XG5cbmNvbnN0IHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmZ1bmN0aW9uIHBhdGNoQXR0cihlbCwga2V5LCB2YWx1ZSwgaXNTVkcsIGluc3RhbmNlLCBpc0Jvb2xlYW4gPSBpc1NwZWNpYWxCb29sZWFuQXR0cihrZXkpKSB7XG4gIGlmIChpc1NWRyAmJiBrZXkuc3RhcnRzV2l0aChcInhsaW5rOlwiKSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXkuc2xpY2UoNiwga2V5Lmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgaXNCb29sZWFuICYmICFpbmNsdWRlQm9vbGVhbkF0dHIodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKFxuICAgICAgICBrZXksXG4gICAgICAgIGlzQm9vbGVhbiA/IFwiXCIgOiBpc1N5bWJvbCh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoRE9NUHJvcChlbCwga2V5LCB2YWx1ZSwgcGFyZW50Q29tcG9uZW50LCBhdHRyTmFtZSkge1xuICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiIHx8IGtleSA9PT0gXCJ0ZXh0Q29udGVudFwiKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIGVsW2tleV0gPSBrZXkgPT09IFwiaW5uZXJIVE1MXCIgPyB1bnNhZmVUb1RydXN0ZWRIVE1MKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZTtcbiAgaWYgKGtleSA9PT0gXCJ2YWx1ZVwiICYmIHRhZyAhPT0gXCJQUk9HUkVTU1wiICYmIC8vIGN1c3RvbSBlbGVtZW50cyBtYXkgdXNlIF92YWx1ZSBpbnRlcm5hbGx5XG4gICF0YWcuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YWcgPT09IFwiT1BUSU9OXCIgPyBlbC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSB8fCBcIlwiIDogZWwudmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gKFxuICAgICAgLy8gIzExNjQ3OiB2YWx1ZSBzaG91bGQgYmUgc2V0IGFzIGVtcHR5IHN0cmluZyBmb3IgbnVsbCBhbmQgdW5kZWZpbmVkLFxuICAgICAgLy8gYnV0IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4gc2hvdWxkIGJlIHNldCBhcyAnb24nLlxuICAgICAgZWwudHlwZSA9PT0gXCJjaGVja2JveFwiID8gXCJvblwiIDogXCJcIlxuICAgICkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUgfHwgIShcIl92YWx1ZVwiIGluIGVsKSkge1xuICAgICAgZWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH1cbiAgICBlbC5fdmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IG5lZWRSZW1vdmUgPSBmYWxzZTtcbiAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGVsW2tleV07XG4gICAgaWYgKHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICB2YWx1ZSA9IGluY2x1ZGVCb29sZWFuQXR0cih2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsICYmIHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgIG5lZWRSZW1vdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdmFsdWUgPSAwO1xuICAgICAgbmVlZFJlbW92ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgZWxba2V5XSA9IHZhbHVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIW5lZWRSZW1vdmUpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGBGYWlsZWQgc2V0dGluZyBwcm9wIFwiJHtrZXl9XCIgb24gPCR7dGFnLnRvTG93ZXJDYXNlKCl9PjogdmFsdWUgJHt2YWx1ZX0gaXMgaW52YWxpZC5gLFxuICAgICAgICBlXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBuZWVkUmVtb3ZlICYmIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSB8fCBrZXkpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuY29uc3QgdmVpS2V5ID0gU3ltYm9sKFwiX3ZlaVwiKTtcbmZ1bmN0aW9uIHBhdGNoRXZlbnQoZWwsIHJhd05hbWUsIHByZXZWYWx1ZSwgbmV4dFZhbHVlLCBpbnN0YW5jZSA9IG51bGwpIHtcbiAgY29uc3QgaW52b2tlcnMgPSBlbFt2ZWlLZXldIHx8IChlbFt2ZWlLZXldID0ge30pO1xuICBjb25zdCBleGlzdGluZ0ludm9rZXIgPSBpbnZva2Vyc1tyYXdOYW1lXTtcbiAgaWYgKG5leHRWYWx1ZSAmJiBleGlzdGluZ0ludm9rZXIpIHtcbiAgICBleGlzdGluZ0ludm9rZXIudmFsdWUgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2FuaXRpemVFdmVudFZhbHVlKG5leHRWYWx1ZSwgcmF3TmFtZSkgOiBuZXh0VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgW25hbWUsIG9wdGlvbnNdID0gcGFyc2VOYW1lKHJhd05hbWUpO1xuICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGludm9rZXIgPSBpbnZva2Vyc1tyYXdOYW1lXSA9IGNyZWF0ZUludm9rZXIoXG4gICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzYW5pdGl6ZUV2ZW50VmFsdWUobmV4dFZhbHVlLCByYXdOYW1lKSA6IG5leHRWYWx1ZSxcbiAgICAgICAgaW5zdGFuY2VcbiAgICAgICk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKGVsLCBuYW1lLCBpbnZva2VyLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0aW5nSW52b2tlcikge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgbmFtZSwgZXhpc3RpbmdJbnZva2VyLCBvcHRpb25zKTtcbiAgICAgIGludm9rZXJzW3Jhd05hbWVdID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuY29uc3Qgb3B0aW9uc01vZGlmaWVyUkUgPSAvKD86T25jZXxQYXNzaXZlfENhcHR1cmUpJC87XG5mdW5jdGlvbiBwYXJzZU5hbWUobmFtZSkge1xuICBsZXQgb3B0aW9ucztcbiAgaWYgKG9wdGlvbnNNb2RpZmllclJFLnRlc3QobmFtZSkpIHtcbiAgICBvcHRpb25zID0ge307XG4gICAgbGV0IG07XG4gICAgd2hpbGUgKG0gPSBuYW1lLm1hdGNoKG9wdGlvbnNNb2RpZmllclJFKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSBtWzBdLmxlbmd0aCk7XG4gICAgICBvcHRpb25zW21bMF0udG9Mb3dlckNhc2UoKV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICBjb25zdCBldmVudCA9IG5hbWVbMl0gPT09IFwiOlwiID8gbmFtZS5zbGljZSgzKSA6IGh5cGhlbmF0ZShuYW1lLnNsaWNlKDIpKTtcbiAgcmV0dXJuIFtldmVudCwgb3B0aW9uc107XG59XG5sZXQgY2FjaGVkTm93ID0gMDtcbmNvbnN0IHAgPSAvKiBAX19QVVJFX18gKi8gUHJvbWlzZS5yZXNvbHZlKCk7XG5jb25zdCBnZXROb3cgPSAoKSA9PiBjYWNoZWROb3cgfHwgKHAudGhlbigoKSA9PiBjYWNoZWROb3cgPSAwKSwgY2FjaGVkTm93ID0gRGF0ZS5ub3coKSk7XG5mdW5jdGlvbiBjcmVhdGVJbnZva2VyKGluaXRpYWxWYWx1ZSwgaW5zdGFuY2UpIHtcbiAgY29uc3QgaW52b2tlciA9IChlKSA9PiB7XG4gICAgaWYgKCFlLl92dHMpIHtcbiAgICAgIGUuX3Z0cyA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIGlmIChlLl92dHMgPD0gaW52b2tlci5hdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhcbiAgICAgIHBhdGNoU3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKGUsIGludm9rZXIudmFsdWUpLFxuICAgICAgaW5zdGFuY2UsXG4gICAgICA1LFxuICAgICAgW2VdXG4gICAgKTtcbiAgfTtcbiAgaW52b2tlci52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgaW52b2tlci5hdHRhY2hlZCA9IGdldE5vdygpO1xuICByZXR1cm4gaW52b2tlcjtcbn1cbmZ1bmN0aW9uIHNhbml0aXplRXZlbnRWYWx1ZSh2YWx1ZSwgcHJvcE5hbWUpIHtcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHdhcm4oXG4gICAgYFdyb25nIHR5cGUgcGFzc2VkIGFzIGV2ZW50IGhhbmRsZXIgdG8gJHtwcm9wTmFtZX0gLSBkaWQgeW91IGZvcmdldCBAIG9yIDogaW4gZnJvbnQgb2YgeW91ciBwcm9wP1xuRXhwZWN0ZWQgZnVuY3Rpb24gb3IgYXJyYXkgb2YgZnVuY3Rpb25zLCByZWNlaXZlZCB0eXBlICR7dHlwZW9mIHZhbHVlfS5gXG4gICk7XG4gIHJldHVybiBOT09QO1xufVxuZnVuY3Rpb24gcGF0Y2hTdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oZSwgdmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxTdG9wID0gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSAoKSA9PiB7XG4gICAgICBvcmlnaW5hbFN0b3AuY2FsbChlKTtcbiAgICAgIGUuX3N0b3BwZWQgPSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlLm1hcChcbiAgICAgIChmbikgPT4gKGUyKSA9PiAhZTIuX3N0b3BwZWQgJiYgZm4gJiYgZm4oZTIpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuY29uc3QgaXNOYXRpdmVPbiA9IChrZXkpID0+IGtleS5jaGFyQ29kZUF0KDApID09PSAxMTEgJiYga2V5LmNoYXJDb2RlQXQoMSkgPT09IDExMCAmJiAvLyBsb3dlcmNhc2UgbGV0dGVyXG5rZXkuY2hhckNvZGVBdCgyKSA+IDk2ICYmIGtleS5jaGFyQ29kZUF0KDIpIDwgMTIzO1xuY29uc3QgcGF0Y2hQcm9wID0gKGVsLCBrZXksIHByZXZWYWx1ZSwgbmV4dFZhbHVlLCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCkgPT4ge1xuICBjb25zdCBpc1NWRyA9IG5hbWVzcGFjZSA9PT0gXCJzdmdcIjtcbiAgaWYgKGtleSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgcGF0Y2hDbGFzcyhlbCwgbmV4dFZhbHVlLCBpc1NWRyk7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHtcbiAgICBwYXRjaFN0eWxlKGVsLCBwcmV2VmFsdWUsIG5leHRWYWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPbihrZXkpKSB7XG4gICAgaWYgKCFpc01vZGVsTGlzdGVuZXIoa2V5KSkge1xuICAgICAgcGF0Y2hFdmVudChlbCwga2V5LCBwcmV2VmFsdWUsIG5leHRWYWx1ZSwgcGFyZW50Q29tcG9uZW50KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5WzBdID09PSBcIi5cIiA/IChrZXkgPSBrZXkuc2xpY2UoMSksIHRydWUpIDoga2V5WzBdID09PSBcIl5cIiA/IChrZXkgPSBrZXkuc2xpY2UoMSksIGZhbHNlKSA6IHNob3VsZFNldEFzUHJvcChlbCwga2V5LCBuZXh0VmFsdWUsIGlzU1ZHKSkge1xuICAgIHBhdGNoRE9NUHJvcChlbCwga2V5LCBuZXh0VmFsdWUpO1xuICAgIGlmICghZWwudGFnTmFtZS5pbmNsdWRlcyhcIi1cIikgJiYgKGtleSA9PT0gXCJ2YWx1ZVwiIHx8IGtleSA9PT0gXCJjaGVja2VkXCIgfHwga2V5ID09PSBcInNlbGVjdGVkXCIpKSB7XG4gICAgICBwYXRjaEF0dHIoZWwsIGtleSwgbmV4dFZhbHVlLCBpc1NWRywgcGFyZW50Q29tcG9uZW50LCBrZXkgIT09IFwidmFsdWVcIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIC8vICMxMTA4MSBmb3JjZSBzZXQgcHJvcHMgZm9yIHBvc3NpYmxlIGFzeW5jIGN1c3RvbSBlbGVtZW50XG4gICAgZWwuX2lzVnVlQ0UgJiYgKC9bQS1aXS8udGVzdChrZXkpIHx8ICFpc1N0cmluZyhuZXh0VmFsdWUpKVxuICApIHtcbiAgICBwYXRjaERPTVByb3AoZWwsIGNhbWVsaXplJDEoa2V5KSwgbmV4dFZhbHVlLCBwYXJlbnRDb21wb25lbnQsIGtleSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleSA9PT0gXCJ0cnVlLXZhbHVlXCIpIHtcbiAgICAgIGVsLl90cnVlVmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiZmFsc2UtdmFsdWVcIikge1xuICAgICAgZWwuX2ZhbHNlVmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgfVxuICAgIHBhdGNoQXR0cihlbCwga2V5LCBuZXh0VmFsdWUsIGlzU1ZHKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHNob3VsZFNldEFzUHJvcChlbCwga2V5LCB2YWx1ZSwgaXNTVkcpIHtcbiAgaWYgKGlzU1ZHKSB7XG4gICAgaWYgKGtleSA9PT0gXCJpbm5lckhUTUxcIiB8fCBrZXkgPT09IFwidGV4dENvbnRlbnRcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChrZXkgaW4gZWwgJiYgaXNOYXRpdmVPbihrZXkpICYmIGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChrZXkgPT09IFwic3BlbGxjaGVja1wiIHx8IGtleSA9PT0gXCJkcmFnZ2FibGVcIiB8fCBrZXkgPT09IFwidHJhbnNsYXRlXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJmb3JtXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJsaXN0XCIgJiYgZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChrZXkgPT09IFwidHlwZVwiICYmIGVsLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIndpZHRoXCIgfHwga2V5ID09PSBcImhlaWdodFwiKSB7XG4gICAgY29uc3QgdGFnID0gZWwudGFnTmFtZTtcbiAgICBpZiAodGFnID09PSBcIklNR1wiIHx8IHRhZyA9PT0gXCJWSURFT1wiIHx8IHRhZyA9PT0gXCJDQU5WQVNcIiB8fCB0YWcgPT09IFwiU09VUkNFXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzTmF0aXZlT24oa2V5KSAmJiBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGtleSBpbiBlbDtcbn1cblxuY29uc3QgUkVNT1ZBTCA9IHt9O1xuLyohICNfX05PX1NJREVfRUZGRUNUU19fICovXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudChvcHRpb25zLCBleHRyYU9wdGlvbnMsIF9jcmVhdGVBcHApIHtcbiAgY29uc3QgQ29tcCA9IGRlZmluZUNvbXBvbmVudChvcHRpb25zLCBleHRyYU9wdGlvbnMpO1xuICBpZiAoaXNQbGFpbk9iamVjdChDb21wKSkgZXh0ZW5kKENvbXAsIGV4dHJhT3B0aW9ucyk7XG4gIGNsYXNzIFZ1ZUN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBWdWVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsUHJvcHMpIHtcbiAgICAgIHN1cGVyKENvbXAsIGluaXRpYWxQcm9wcywgX2NyZWF0ZUFwcCk7XG4gICAgfVxuICB9XG4gIFZ1ZUN1c3RvbUVsZW1lbnQuZGVmID0gQ29tcDtcbiAgcmV0dXJuIFZ1ZUN1c3RvbUVsZW1lbnQ7XG59XG4vKiEgI19fTk9fU0lERV9FRkZFQ1RTX18gKi9cbmNvbnN0IGRlZmluZVNTUkN1c3RvbUVsZW1lbnQgPSAvKiBAX19OT19TSURFX0VGRkVDVFNfXyAqLyAob3B0aW9ucywgZXh0cmFPcHRpb25zKSA9PiB7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gZGVmaW5lQ3VzdG9tRWxlbWVudChvcHRpb25zLCBleHRyYU9wdGlvbnMsIGNyZWF0ZVNTUkFwcCk7XG59O1xuY29uc3QgQmFzZUNsYXNzID0gdHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gSFRNTEVsZW1lbnQgOiBjbGFzcyB7XG59O1xuY2xhc3MgVnVlRWxlbWVudCBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKF9kZWYsIF9wcm9wcyA9IHt9LCBfY3JlYXRlQXBwID0gY3JlYXRlQXBwKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9kZWYgPSBfZGVmO1xuICAgIHRoaXMuX3Byb3BzID0gX3Byb3BzO1xuICAgIHRoaXMuX2NyZWF0ZUFwcCA9IF9jcmVhdGVBcHA7XG4gICAgdGhpcy5faXNWdWVDRSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuX2FwcCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy5fbm9uY2UgPSB0aGlzLl9kZWYubm9uY2U7XG4gICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9udW1iZXJQcm9wcyA9IG51bGw7XG4gICAgdGhpcy5fc3R5bGVDaGlsZHJlbiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuICAgIHRoaXMuX29iID0gbnVsbDtcbiAgICBpZiAodGhpcy5zaGFkb3dSb290ICYmIF9jcmVhdGVBcHAgIT09IGNyZWF0ZUFwcCkge1xuICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgYEN1c3RvbSBlbGVtZW50IGhhcyBwcmUtcmVuZGVyZWQgZGVjbGFyYXRpdmUgc2hhZG93IHJvb3QgYnV0IGlzIG5vdCBkZWZpbmVkIGFzIGh5ZHJhdGFibGUuIFVzZSBcXGBkZWZpbmVTU1JDdXN0b21FbGVtZW50XFxgLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChfZGVmLnNoYWRvd1Jvb3QgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb290ID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kZWYuX19hc3luY0xvYWRlcikge1xuICAgICAgdGhpcy5fcmVzb2x2ZVByb3BzKHRoaXMuX2RlZik7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICB0aGlzLl9wYXJzZVNsb3RzKCk7XG4gICAgfVxuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG4gICAgd2hpbGUgKHBhcmVudCA9IHBhcmVudCAmJiAocGFyZW50LnBhcmVudE5vZGUgfHwgcGFyZW50Lmhvc3QpKSB7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgVnVlRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICBpZiAodGhpcy5fcmVzb2x2ZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0UGFyZW50KCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuX3BlbmRpbmdSZXNvbHZlKSB7XG4gICAgICAgICAgdGhpcy5fcGVuZGluZ1Jlc29sdmUgPSBwYXJlbnQuX3BlbmRpbmdSZXNvbHZlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1Jlc29sdmUgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlRGVmKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZURlZigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9zZXRQYXJlbnQocGFyZW50ID0gdGhpcy5fcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UucGFyZW50ID0gcGFyZW50Ll9pbnN0YW5jZTtcbiAgICAgIHRoaXMuX2luc3RhbmNlLnByb3ZpZGVzID0gcGFyZW50Ll9pbnN0YW5jZS5wcm92aWRlcztcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX29iKSB7XG4gICAgICAgICAgdGhpcy5fb2IuZGlzY29ubmVjdCgpO1xuICAgICAgICAgIHRoaXMuX29iID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hcHAgJiYgdGhpcy5fYXBwLnVubW91bnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB0aGlzLl9pbnN0YW5jZS5jZSA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5fYXBwID0gdGhpcy5faW5zdGFuY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiByZXNvbHZlIGlubmVyIGNvbXBvbmVudCBkZWZpbml0aW9uIChoYW5kbGUgcG9zc2libGUgYXN5bmMgY29tcG9uZW50KVxuICAgKi9cbiAgX3Jlc29sdmVEZWYoKSB7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdSZXNvbHZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyKHRoaXMuYXR0cmlidXRlc1tpXS5uYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fb2IgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG0gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NldEF0dHIobS5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9vYi5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICBjb25zdCByZXNvbHZlID0gKGRlZiwgaXNBc3luYyA9IGZhbHNlKSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlZCA9IHRydWU7XG4gICAgICB0aGlzLl9wZW5kaW5nUmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgIGNvbnN0IHsgcHJvcHMsIHN0eWxlcyB9ID0gZGVmO1xuICAgICAgbGV0IG51bWJlclByb3BzO1xuICAgICAgaWYgKHByb3BzICYmICFpc0FycmF5KHByb3BzKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgIGNvbnN0IG9wdCA9IHByb3BzW2tleV07XG4gICAgICAgICAgaWYgKG9wdCA9PT0gTnVtYmVyIHx8IG9wdCAmJiBvcHQudHlwZSA9PT0gTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMuX3Byb3BzKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Byb3BzW2tleV0gPSB0b051bWJlcih0aGlzLl9wcm9wc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChudW1iZXJQcm9wcyB8fCAobnVtYmVyUHJvcHMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSkpW2NhbWVsaXplJDEoa2V5KV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fbnVtYmVyUHJvcHMgPSBudW1iZXJQcm9wcztcbiAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVQcm9wcyhkZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICB0aGlzLl9hcHBseVN0eWxlcyhzdHlsZXMpO1xuICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHN0eWxlcykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiQ3VzdG9tIGVsZW1lbnQgc3R5bGUgaW5qZWN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiB1c2luZyBzaGFkb3dSb290OiBmYWxzZVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tb3VudChkZWYpO1xuICAgIH07XG4gICAgY29uc3QgYXN5bmNEZWYgPSB0aGlzLl9kZWYuX19hc3luY0xvYWRlcjtcbiAgICBpZiAoYXN5bmNEZWYpIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXNvbHZlID0gYXN5bmNEZWYoKS50aGVuKFxuICAgICAgICAoZGVmKSA9PiByZXNvbHZlKHRoaXMuX2RlZiA9IGRlZiwgdHJ1ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUodGhpcy5fZGVmKTtcbiAgICB9XG4gIH1cbiAgX21vdW50KGRlZikge1xuICAgIGlmICgoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pICYmICFkZWYubmFtZSkge1xuICAgICAgZGVmLm5hbWUgPSBcIlZ1ZUVsZW1lbnRcIjtcbiAgICB9XG4gICAgdGhpcy5fYXBwID0gdGhpcy5fY3JlYXRlQXBwKGRlZik7XG4gICAgaWYgKGRlZi5jb25maWd1cmVBcHApIHtcbiAgICAgIGRlZi5jb25maWd1cmVBcHAodGhpcy5fYXBwKTtcbiAgICB9XG4gICAgdGhpcy5fYXBwLl9jZVZOb2RlID0gdGhpcy5fY3JlYXRlVk5vZGUoKTtcbiAgICB0aGlzLl9hcHAubW91bnQodGhpcy5fcm9vdCk7XG4gICAgY29uc3QgZXhwb3NlZCA9IHRoaXMuX2luc3RhbmNlICYmIHRoaXMuX2luc3RhbmNlLmV4cG9zZWQ7XG4gICAgaWYgKCFleHBvc2VkKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZXhwb3NlZCkge1xuICAgICAgaWYgKCFoYXNPd24odGhpcywga2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgLy8gdW53cmFwIHJlZiB0byBiZSBjb25zaXN0ZW50IHdpdGggcHVibGljIGluc3RhbmNlIGJlaGF2aW9yXG4gICAgICAgICAgZ2V0OiAoKSA9PiB1bnJlZihleHBvc2VkW2tleV0pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIHdhcm4oYEV4cG9zZWQgcHJvcGVydHkgXCIke2tleX1cIiBhbHJlYWR5IGV4aXN0cyBvbiBjdXN0b20gZWxlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX3Jlc29sdmVQcm9wcyhkZWYpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSBkZWY7XG4gICAgY29uc3QgZGVjbGFyZWRQcm9wS2V5cyA9IGlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBPYmplY3Qua2V5cyhwcm9wcyB8fCB7fSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcykpIHtcbiAgICAgIGlmIChrZXlbMF0gIT09IFwiX1wiICYmIGRlY2xhcmVkUHJvcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICB0aGlzLl9zZXRQcm9wKGtleSwgdGhpc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZGVjbGFyZWRQcm9wS2V5cy5tYXAoY2FtZWxpemUkMSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRQcm9wKGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9zZXRQcm9wKGtleSwgdmFsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9zZXRBdHRyKGtleSkge1xuICAgIGlmIChrZXkuc3RhcnRzV2l0aChcImRhdGEtdi1cIikpIHJldHVybjtcbiAgICBjb25zdCBoYXMgPSB0aGlzLmhhc0F0dHJpYnV0ZShrZXkpO1xuICAgIGxldCB2YWx1ZSA9IGhhcyA/IHRoaXMuZ2V0QXR0cmlidXRlKGtleSkgOiBSRU1PVkFMO1xuICAgIGNvbnN0IGNhbWVsS2V5ID0gY2FtZWxpemUkMShrZXkpO1xuICAgIGlmIChoYXMgJiYgdGhpcy5fbnVtYmVyUHJvcHMgJiYgdGhpcy5fbnVtYmVyUHJvcHNbY2FtZWxLZXldKSB7XG4gICAgICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcChjYW1lbEtleSwgdmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcHNba2V5XTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc2V0UHJvcChrZXksIHZhbCwgc2hvdWxkUmVmbGVjdCA9IHRydWUsIHNob3VsZFVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fcHJvcHNba2V5XSkge1xuICAgICAgaWYgKHZhbCA9PT0gUkVNT1ZBTCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fcHJvcHNba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Byb3BzW2tleV0gPSB2YWw7XG4gICAgICAgIGlmIChrZXkgPT09IFwia2V5XCIgJiYgdGhpcy5fYXBwKSB7XG4gICAgICAgICAgdGhpcy5fYXBwLl9jZVZOb2RlLmtleSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSAmJiB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRSZWZsZWN0KSB7XG4gICAgICAgIGNvbnN0IG9iID0gdGhpcy5fb2I7XG4gICAgICAgIG9iICYmIG9iLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGh5cGhlbmF0ZShrZXkpLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShoeXBoZW5hdGUoa2V5KSwgdmFsICsgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGh5cGhlbmF0ZShrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBvYiAmJiBvYi5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX3VwZGF0ZSgpIHtcbiAgICByZW5kZXIodGhpcy5fY3JlYXRlVk5vZGUoKSwgdGhpcy5fcm9vdCk7XG4gIH1cbiAgX2NyZWF0ZVZOb2RlKCkge1xuICAgIGNvbnN0IGJhc2VQcm9wcyA9IHt9O1xuICAgIGlmICghdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICBiYXNlUHJvcHMub25Wbm9kZU1vdW50ZWQgPSBiYXNlUHJvcHMub25Wbm9kZVVwZGF0ZWQgPSB0aGlzLl9yZW5kZXJTbG90cy5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKHRoaXMuX2RlZiwgZXh0ZW5kKGJhc2VQcm9wcywgdGhpcy5fcHJvcHMpKTtcbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB2bm9kZS5jZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICBpbnN0YW5jZS5jZSA9IHRoaXM7XG4gICAgICAgIGluc3RhbmNlLmlzQ0UgPSB0cnVlO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIGluc3RhbmNlLmNlUmVsb2FkID0gKG5ld1N0eWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0eWxlcykge1xuICAgICAgICAgICAgICB0aGlzLl9zdHlsZXMuZm9yRWFjaCgocykgPT4gdGhpcy5fcm9vdC5yZW1vdmVDaGlsZChzKSk7XG4gICAgICAgICAgICAgIHRoaXMuX3N0eWxlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXBwbHlTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzcGF0Y2ggPSAoZXZlbnQsIGFyZ3MpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICBpc1BsYWluT2JqZWN0KGFyZ3NbMF0pID8gZXh0ZW5kKHsgZGV0YWlsOiBhcmdzIH0sIGFyZ3NbMF0pIDogeyBkZXRhaWw6IGFyZ3MgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIGluc3RhbmNlLmVtaXQgPSAoZXZlbnQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChldmVudCwgYXJncyk7XG4gICAgICAgICAgaWYgKGh5cGhlbmF0ZShldmVudCkgIT09IGV2ZW50KSB7XG4gICAgICAgICAgICBkaXNwYXRjaChoeXBoZW5hdGUoZXZlbnQpLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFBhcmVudCgpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xuICB9XG4gIF9hcHBseVN0eWxlcyhzdHlsZXMsIG93bmVyKSB7XG4gICAgaWYgKCFzdHlsZXMpIHJldHVybjtcbiAgICBpZiAob3duZXIpIHtcbiAgICAgIGlmIChvd25lciA9PT0gdGhpcy5fZGVmIHx8IHRoaXMuX3N0eWxlQ2hpbGRyZW4uaGFzKG93bmVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdHlsZUNoaWxkcmVuLmFkZChvd25lcik7XG4gICAgfVxuICAgIGNvbnN0IG5vbmNlID0gdGhpcy5fbm9uY2U7XG4gICAgZm9yIChsZXQgaSA9IHN0eWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGlmIChub25jZSkgcy5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICBzLnRleHRDb250ZW50ID0gc3R5bGVzW2ldO1xuICAgICAgdGhpcy5zaGFkb3dSb290LnByZXBlbmQocyk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICBpZiAob3duZXIpIHtcbiAgICAgICAgICBpZiAob3duZXIuX19obXJJZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGlsZFN0eWxlcykgdGhpcy5fY2hpbGRTdHlsZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgICAgICAgICAgbGV0IGVudHJ5ID0gdGhpcy5fY2hpbGRTdHlsZXMuZ2V0KG93bmVyLl9faG1ySWQpO1xuICAgICAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgICB0aGlzLl9jaGlsZFN0eWxlcy5zZXQob3duZXIuX19obXJJZCwgZW50cnkgPSBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5wdXNoKHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAodGhpcy5fc3R5bGVzIHx8ICh0aGlzLl9zdHlsZXMgPSBbXSkpLnB1c2gocyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE9ubHkgY2FsbGVkIHdoZW4gc2hhZG93Um9vdCBpcyBmYWxzZVxuICAgKi9cbiAgX3BhcnNlU2xvdHMoKSB7XG4gICAgY29uc3Qgc2xvdHMgPSB0aGlzLl9zbG90cyA9IHt9O1xuICAgIGxldCBuO1xuICAgIHdoaWxlIChuID0gdGhpcy5maXJzdENoaWxkKSB7XG4gICAgICBjb25zdCBzbG90TmFtZSA9IG4ubm9kZVR5cGUgPT09IDEgJiYgbi5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpIHx8IFwiZGVmYXVsdFwiO1xuICAgICAgKHNsb3RzW3Nsb3ROYW1lXSB8fCAoc2xvdHNbc2xvdE5hbWVdID0gW10pKS5wdXNoKG4pO1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE9ubHkgY2FsbGVkIHdoZW4gc2hhZG93Um9vdCBpcyBmYWxzZVxuICAgKi9cbiAgX3JlbmRlclNsb3RzKCkge1xuICAgIGNvbnN0IG91dGxldHMgPSAodGhpcy5fdGVsZXBvcnRUYXJnZXQgfHwgdGhpcykucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIik7XG4gICAgY29uc3Qgc2NvcGVJZCA9IHRoaXMuX2luc3RhbmNlLnR5cGUuX19zY29wZUlkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0bGV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbyA9IG91dGxldHNbaV07XG4gICAgICBjb25zdCBzbG90TmFtZSA9IG8uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSB8fCBcImRlZmF1bHRcIjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9zbG90c1tzbG90TmFtZV07XG4gICAgICBjb25zdCBwYXJlbnQgPSBvLnBhcmVudE5vZGU7XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IG4gb2YgY29udGVudCkge1xuICAgICAgICAgIGlmIChzY29wZUlkICYmIG4ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc2NvcGVJZCArIFwiLXNcIjtcbiAgICAgICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobiwgMSk7XG4gICAgICAgICAgICBuLnNldEF0dHJpYnV0ZShpZCwgXCJcIik7XG4gICAgICAgICAgICBsZXQgY2hpbGQ7XG4gICAgICAgICAgICB3aGlsZSAoY2hpbGQgPSB3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoaWQsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG4sIG8pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoby5maXJzdENoaWxkKSBwYXJlbnQuaW5zZXJ0QmVmb3JlKG8uZmlyc3RDaGlsZCwgbyk7XG4gICAgICB9XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pbmplY3RDaGlsZFN0eWxlKGNvbXApIHtcbiAgICB0aGlzLl9hcHBseVN0eWxlcyhjb21wLnN0eWxlcywgY29tcCk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3JlbW92ZUNoaWxkU3R5bGUoY29tcCkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICB0aGlzLl9zdHlsZUNoaWxkcmVuLmRlbGV0ZShjb21wKTtcbiAgICAgIGlmICh0aGlzLl9jaGlsZFN0eWxlcyAmJiBjb21wLl9faG1ySWQpIHtcbiAgICAgICAgY29uc3Qgb2xkU3R5bGVzID0gdGhpcy5fY2hpbGRTdHlsZXMuZ2V0KGNvbXAuX19obXJJZCk7XG4gICAgICAgIGlmIChvbGRTdHlsZXMpIHtcbiAgICAgICAgICBvbGRTdHlsZXMuZm9yRWFjaCgocykgPT4gdGhpcy5fcm9vdC5yZW1vdmVDaGlsZChzKSk7XG4gICAgICAgICAgb2xkU3R5bGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZUhvc3QoY2FsbGVyKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKCk7XG4gIGNvbnN0IGVsID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuY2U7XG4gIGlmIChlbCkge1xuICAgIHJldHVybiBlbDtcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgd2FybihcbiAgICAgICAgYCR7Y2FsbGVyIHx8IFwidXNlSG9zdFwifSBjYWxsZWQgd2l0aG91dCBhbiBhY3RpdmUgY29tcG9uZW50IGluc3RhbmNlLmBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGAke2NhbGxlciB8fCBcInVzZUhvc3RcIn0gY2FuIG9ubHkgYmUgdXNlZCBpbiBjb21wb25lbnRzIGRlZmluZWQgdmlhIGRlZmluZUN1c3RvbUVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiB1c2VTaGFkb3dSb290KCkge1xuICBjb25zdCBlbCA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyB1c2VIb3N0KFwidXNlU2hhZG93Um9vdFwiKSA6IHVzZUhvc3QoKTtcbiAgcmV0dXJuIGVsICYmIGVsLnNoYWRvd1Jvb3Q7XG59XG5cbmZ1bmN0aW9uIHVzZUNzc01vZHVsZShuYW1lID0gXCIkc3R5bGVcIikge1xuICB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4oYHVzZUNzc01vZHVsZSBtdXN0IGJlIGNhbGxlZCBpbnNpZGUgc2V0dXAoKWApO1xuICAgICAgcmV0dXJuIEVNUFRZX09CSjtcbiAgICB9XG4gICAgY29uc3QgbW9kdWxlcyA9IGluc3RhbmNlLnR5cGUuX19jc3NNb2R1bGVzO1xuICAgIGlmICghbW9kdWxlcykge1xuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuKGBDdXJyZW50IGluc3RhbmNlIGRvZXMgbm90IGhhdmUgQ1NTIG1vZHVsZXMgaW5qZWN0ZWQuYCk7XG4gICAgICByZXR1cm4gRU1QVFlfT0JKO1xuICAgIH1cbiAgICBjb25zdCBtb2QgPSBtb2R1bGVzW25hbWVdO1xuICAgIGlmICghbW9kKSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4oYEN1cnJlbnQgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBDU1MgbW9kdWxlIG5hbWVkIFwiJHtuYW1lfVwiLmApO1xuICAgICAgcmV0dXJuIEVNUFRZX09CSjtcbiAgICB9XG4gICAgcmV0dXJuIG1vZDtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvbk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgbmV3UG9zaXRpb25NYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG1vdmVDYktleSA9IFN5bWJvbChcIl9tb3ZlQ2JcIik7XG5jb25zdCBlbnRlckNiS2V5ID0gU3ltYm9sKFwiX2VudGVyQ2JcIik7XG5jb25zdCBkZWNvcmF0ZSA9ICh0KSA9PiB7XG4gIGRlbGV0ZSB0LnByb3BzLm1vZGU7XG4gIHJldHVybiB0O1xufTtcbmNvbnN0IFRyYW5zaXRpb25Hcm91cEltcGwgPSAvKiBAX19QVVJFX18gKi8gZGVjb3JhdGUoe1xuICBuYW1lOiBcIlRyYW5zaXRpb25Hcm91cFwiLFxuICBwcm9wczogLyogQF9fUFVSRV9fICovIGV4dGVuZCh7fSwgVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycywge1xuICAgIHRhZzogU3RyaW5nLFxuICAgIG1vdmVDbGFzczogU3RyaW5nXG4gIH0pLFxuICBzZXR1cChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHVzZVRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIGxldCBwcmV2Q2hpbGRyZW47XG4gICAgbGV0IGNoaWxkcmVuO1xuICAgIG9uVXBkYXRlZCgoKSA9PiB7XG4gICAgICBpZiAoIXByZXZDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbW92ZUNsYXNzID0gcHJvcHMubW92ZUNsYXNzIHx8IGAke3Byb3BzLm5hbWUgfHwgXCJ2XCJ9LW1vdmVgO1xuICAgICAgaWYgKCFoYXNDU1NUcmFuc2Zvcm0oXG4gICAgICAgIHByZXZDaGlsZHJlblswXS5lbCxcbiAgICAgICAgaW5zdGFuY2Uudm5vZGUuZWwsXG4gICAgICAgIG1vdmVDbGFzc1xuICAgICAgKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcmV2Q2hpbGRyZW4uZm9yRWFjaChjYWxsUGVuZGluZ0Nicyk7XG4gICAgICBwcmV2Q2hpbGRyZW4uZm9yRWFjaChyZWNvcmRQb3NpdGlvbik7XG4gICAgICBjb25zdCBtb3ZlZENoaWxkcmVuID0gcHJldkNoaWxkcmVuLmZpbHRlcihhcHBseVRyYW5zbGF0aW9uKTtcbiAgICAgIGZvcmNlUmVmbG93KCk7XG4gICAgICBtb3ZlZENoaWxkcmVuLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjLmVsO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsLnN0eWxlO1xuICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGNiID0gZWxbbW92ZUNiS2V5XSA9IChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IGVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGNiKTtcbiAgICAgICAgICAgIGVsW21vdmVDYktleV0gPSBudWxsO1xuICAgICAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgY2IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHJhd1Byb3BzID0gdG9SYXcocHJvcHMpO1xuICAgICAgY29uc3QgY3NzVHJhbnNpdGlvblByb3BzID0gcmVzb2x2ZVRyYW5zaXRpb25Qcm9wcyhyYXdQcm9wcyk7XG4gICAgICBsZXQgdGFnID0gcmF3UHJvcHMudGFnIHx8IEZyYWdtZW50O1xuICAgICAgcHJldkNoaWxkcmVuID0gW107XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgaWYgKGNoaWxkLmVsICYmIGNoaWxkLmVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgcHJldkNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkhvb2tzKFxuICAgICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgICAgcmVzb2x2ZVRyYW5zaXRpb25Ib29rcyhcbiAgICAgICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgICAgICBjc3NUcmFuc2l0aW9uUHJvcHMsXG4gICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBvc2l0aW9uTWFwLnNldChcbiAgICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICAgIGNoaWxkLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hpbGRyZW4gPSBzbG90cy5kZWZhdWx0ID8gZ2V0VHJhbnNpdGlvblJhd0NoaWxkcmVuKHNsb3RzLmRlZmF1bHQoKSkgOiBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGNoaWxkLmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkhvb2tzKFxuICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICByZXNvbHZlVHJhbnNpdGlvbkhvb2tzKGNoaWxkLCBjc3NUcmFuc2l0aW9uUHJvcHMsIHN0YXRlLCBpbnN0YW5jZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY2hpbGQudHlwZSAhPT0gVGV4dCkge1xuICAgICAgICAgIHdhcm4oYDxUcmFuc2l0aW9uR3JvdXA+IGNoaWxkcmVuIG11c3QgYmUga2V5ZWQuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVWTm9kZSh0YWcsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9O1xuICB9XG59KTtcbmNvbnN0IFRyYW5zaXRpb25Hcm91cCA9IFRyYW5zaXRpb25Hcm91cEltcGw7XG5mdW5jdGlvbiBjYWxsUGVuZGluZ0NicyhjKSB7XG4gIGNvbnN0IGVsID0gYy5lbDtcbiAgaWYgKGVsW21vdmVDYktleV0pIHtcbiAgICBlbFttb3ZlQ2JLZXldKCk7XG4gIH1cbiAgaWYgKGVsW2VudGVyQ2JLZXldKSB7XG4gICAgZWxbZW50ZXJDYktleV0oKTtcbiAgfVxufVxuZnVuY3Rpb24gcmVjb3JkUG9zaXRpb24oYykge1xuICBuZXdQb3NpdGlvbk1hcC5zZXQoYywgYy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG59XG5mdW5jdGlvbiBhcHBseVRyYW5zbGF0aW9uKGMpIHtcbiAgY29uc3Qgb2xkUG9zID0gcG9zaXRpb25NYXAuZ2V0KGMpO1xuICBjb25zdCBuZXdQb3MgPSBuZXdQb3NpdGlvbk1hcC5nZXQoYyk7XG4gIGNvbnN0IGR4ID0gb2xkUG9zLmxlZnQgLSBuZXdQb3MubGVmdDtcbiAgY29uc3QgZHkgPSBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcDtcbiAgaWYgKGR4IHx8IGR5KSB7XG4gICAgY29uc3QgcyA9IGMuZWwuc3R5bGU7XG4gICAgcy50cmFuc2Zvcm0gPSBzLndlYmtpdFRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtkeH1weCwke2R5fXB4KWA7XG4gICAgcy50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjBzXCI7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhc0NTU1RyYW5zZm9ybShlbCwgcm9vdCwgbW92ZUNsYXNzKSB7XG4gIGNvbnN0IGNsb25lID0gZWwuY2xvbmVOb2RlKCk7XG4gIGNvbnN0IF92dGMgPSBlbFt2dGNLZXldO1xuICBpZiAoX3Z0Yykge1xuICAgIF92dGMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKChjKSA9PiBjICYmIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgIH0pO1xuICB9XG4gIG1vdmVDbGFzcy5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGMpID0+IGMgJiYgY2xvbmUuY2xhc3NMaXN0LmFkZChjKSk7XG4gIGNsb25lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgY29udGFpbmVyID0gcm9vdC5ub2RlVHlwZSA9PT0gMSA/IHJvb3QgOiByb290LnBhcmVudE5vZGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gIGNvbnN0IHsgaGFzVHJhbnNmb3JtIH0gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjbG9uZSk7XG4gIHJldHVybiBoYXNUcmFuc2Zvcm07XG59XG5cbmNvbnN0IGdldE1vZGVsQXNzaWduZXIgPSAodm5vZGUpID0+IHtcbiAgY29uc3QgZm4gPSB2bm9kZS5wcm9wc1tcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIl0gfHwgZmFsc2U7XG4gIHJldHVybiBpc0FycmF5KGZuKSA/ICh2YWx1ZSkgPT4gaW52b2tlQXJyYXlGbnMoZm4sIHZhbHVlKSA6IGZuO1xufTtcbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydChlKSB7XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IHRydWU7XG59XG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kKGUpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgdGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcbiAgfVxufVxuY29uc3QgYXNzaWduS2V5ID0gU3ltYm9sKFwiX2Fzc2lnblwiKTtcbmNvbnN0IHZNb2RlbFRleHQgPSB7XG4gIGNyZWF0ZWQoZWwsIHsgbW9kaWZpZXJzOiB7IGxhenksIHRyaW0sIG51bWJlciB9IH0sIHZub2RlKSB7XG4gICAgZWxbYXNzaWduS2V5XSA9IGdldE1vZGVsQXNzaWduZXIodm5vZGUpO1xuICAgIGNvbnN0IGNhc3RUb051bWJlciA9IG51bWJlciB8fCB2bm9kZS5wcm9wcyAmJiB2bm9kZS5wcm9wcy50eXBlID09PSBcIm51bWJlclwiO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGxhenkgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuO1xuICAgICAgbGV0IGRvbVZhbHVlID0gZWwudmFsdWU7XG4gICAgICBpZiAodHJpbSkge1xuICAgICAgICBkb21WYWx1ZSA9IGRvbVZhbHVlLnRyaW0oKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXN0VG9OdW1iZXIpIHtcbiAgICAgICAgZG9tVmFsdWUgPSBsb29zZVRvTnVtYmVyKGRvbVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsW2Fzc2lnbktleV0oZG9tVmFsdWUpO1xuICAgIH0pO1xuICAgIGlmICh0cmltKSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKGVsLCBcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIGVsLnZhbHVlID0gZWwudmFsdWUudHJpbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghbGF6eSkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgXCJjb21wb3NpdGlvbnN0YXJ0XCIsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKGVsLCBcImNvbXBvc2l0aW9uZW5kXCIsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgXCJjaGFuZ2VcIiwgb25Db21wb3NpdGlvbkVuZCk7XG4gICAgfVxuICB9LFxuICAvLyBzZXQgdmFsdWUgb24gbW91bnRlZCBzbyBpdCdzIGFmdGVyIG1pbi9tYXggZm9yIHR5cGU9XCJyYW5nZVwiXG4gIG1vdW50ZWQoZWwsIHsgdmFsdWUgfSkge1xuICAgIGVsLnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTtcbiAgfSxcbiAgYmVmb3JlVXBkYXRlKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSwgbW9kaWZpZXJzOiB7IGxhenksIHRyaW0sIG51bWJlciB9IH0sIHZub2RlKSB7XG4gICAgZWxbYXNzaWduS2V5XSA9IGdldE1vZGVsQXNzaWduZXIodm5vZGUpO1xuICAgIGlmIChlbC5jb21wb3NpbmcpIHJldHVybjtcbiAgICBjb25zdCBlbFZhbHVlID0gKG51bWJlciB8fCBlbC50eXBlID09PSBcIm51bWJlclwiKSAmJiAhL14wXFxkLy50ZXN0KGVsLnZhbHVlKSA/IGxvb3NlVG9OdW1iZXIoZWwudmFsdWUpIDogZWwudmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlO1xuICAgIGlmIChlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwgJiYgZWwudHlwZSAhPT0gXCJyYW5nZVwiKSB7XG4gICAgICBpZiAobGF6eSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRyaW0gJiYgZWwudmFsdWUudHJpbSgpID09PSBuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGVsLnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cbn07XG5jb25zdCB2TW9kZWxDaGVja2JveCA9IHtcbiAgLy8gIzQwOTYgYXJyYXkgY2hlY2tib3hlcyBuZWVkIHRvIGJlIGRlZXAgdHJhdmVyc2VkXG4gIGRlZXA6IHRydWUsXG4gIGNyZWF0ZWQoZWwsIF8sIHZub2RlKSB7XG4gICAgZWxbYXNzaWduS2V5XSA9IGdldE1vZGVsQXNzaWduZXIodm5vZGUpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBlbC5fbW9kZWxWYWx1ZTtcbiAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IGdldFZhbHVlKGVsKTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbC5jaGVja2VkO1xuICAgICAgY29uc3QgYXNzaWduID0gZWxbYXNzaWduS2V5XTtcbiAgICAgIGlmIChpc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbG9vc2VJbmRleE9mKG1vZGVsVmFsdWUsIGVsZW1lbnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gaW5kZXggIT09IC0xO1xuICAgICAgICBpZiAoY2hlY2tlZCAmJiAhZm91bmQpIHtcbiAgICAgICAgICBhc3NpZ24obW9kZWxWYWx1ZS5jb25jYXQoZWxlbWVudFZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWQgJiYgZm91bmQpIHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IFsuLi5tb2RlbFZhbHVlXTtcbiAgICAgICAgICBmaWx0ZXJlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGFzc2lnbihmaWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNTZXQobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gbmV3IFNldChtb2RlbFZhbHVlKTtcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICBjbG9uZWQuYWRkKGVsZW1lbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvbmVkLmRlbGV0ZShlbGVtZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2lnbihjbG9uZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzaWduKGdldENoZWNrYm94VmFsdWUoZWwsIGNoZWNrZWQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLy8gc2V0IGluaXRpYWwgY2hlY2tlZCBvbiBtb3VudCB0byB3YWl0IGZvciB0cnVlLXZhbHVlL2ZhbHNlLXZhbHVlXG4gIG1vdW50ZWQ6IHNldENoZWNrZWQsXG4gIGJlZm9yZVVwZGF0ZShlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBlbFthc3NpZ25LZXldID0gZ2V0TW9kZWxBc3NpZ25lcih2bm9kZSk7XG4gICAgc2V0Q2hlY2tlZChlbCwgYmluZGluZywgdm5vZGUpO1xuICB9XG59O1xuZnVuY3Rpb24gc2V0Q2hlY2tlZChlbCwgeyB2YWx1ZSwgb2xkVmFsdWUgfSwgdm5vZGUpIHtcbiAgZWwuX21vZGVsVmFsdWUgPSB2YWx1ZTtcbiAgbGV0IGNoZWNrZWQ7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGNoZWNrZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIHZub2RlLnByb3BzLnZhbHVlKSA+IC0xO1xuICB9IGVsc2UgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgIGNoZWNrZWQgPSB2YWx1ZS5oYXModm5vZGUucHJvcHMudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICBjaGVja2VkID0gbG9vc2VFcXVhbCh2YWx1ZSwgZ2V0Q2hlY2tib3hWYWx1ZShlbCwgdHJ1ZSkpO1xuICB9XG4gIGlmIChlbC5jaGVja2VkICE9PSBjaGVja2VkKSB7XG4gICAgZWwuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cbn1cbmNvbnN0IHZNb2RlbFJhZGlvID0ge1xuICBjcmVhdGVkKGVsLCB7IHZhbHVlIH0sIHZub2RlKSB7XG4gICAgZWwuY2hlY2tlZCA9IGxvb3NlRXF1YWwodmFsdWUsIHZub2RlLnByb3BzLnZhbHVlKTtcbiAgICBlbFthc3NpZ25LZXldID0gZ2V0TW9kZWxBc3NpZ25lcih2bm9kZSk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZWxbYXNzaWduS2V5XShnZXRWYWx1ZShlbCkpO1xuICAgIH0pO1xuICB9LFxuICBiZWZvcmVVcGRhdGUoZWwsIHsgdmFsdWUsIG9sZFZhbHVlIH0sIHZub2RlKSB7XG4gICAgZWxbYXNzaWduS2V5XSA9IGdldE1vZGVsQXNzaWduZXIodm5vZGUpO1xuICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIGVsLmNoZWNrZWQgPSBsb29zZUVxdWFsKHZhbHVlLCB2bm9kZS5wcm9wcy52YWx1ZSk7XG4gICAgfVxuICB9XG59O1xuY29uc3Qgdk1vZGVsU2VsZWN0ID0ge1xuICAvLyA8c2VsZWN0IG11bHRpcGxlPiB2YWx1ZSBuZWVkIHRvIGJlIGRlZXAgdHJhdmVyc2VkXG4gIGRlZXA6IHRydWUsXG4gIGNyZWF0ZWQoZWwsIHsgdmFsdWUsIG1vZGlmaWVyczogeyBudW1iZXIgfSB9LCB2bm9kZSkge1xuICAgIGNvbnN0IGlzU2V0TW9kZWwgPSBpc1NldCh2YWx1ZSk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWwub3B0aW9ucywgKG8pID0+IG8uc2VsZWN0ZWQpLm1hcChcbiAgICAgICAgKG8pID0+IG51bWJlciA/IGxvb3NlVG9OdW1iZXIoZ2V0VmFsdWUobykpIDogZ2V0VmFsdWUobylcbiAgICAgICk7XG4gICAgICBlbFthc3NpZ25LZXldKFxuICAgICAgICBlbC5tdWx0aXBsZSA/IGlzU2V0TW9kZWwgPyBuZXcgU2V0KHNlbGVjdGVkVmFsKSA6IHNlbGVjdGVkVmFsIDogc2VsZWN0ZWRWYWxbMF1cbiAgICAgICk7XG4gICAgICBlbC5fYXNzaWduaW5nID0gdHJ1ZTtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZWwuX2Fzc2lnbmluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWxbYXNzaWduS2V5XSA9IGdldE1vZGVsQXNzaWduZXIodm5vZGUpO1xuICB9LFxuICAvLyBzZXQgdmFsdWUgaW4gbW91bnRlZCAmIHVwZGF0ZWQgYmVjYXVzZSA8c2VsZWN0PiByZWxpZXMgb24gaXRzIGNoaWxkcmVuXG4gIC8vIDxvcHRpb24+cy5cbiAgbW91bnRlZChlbCwgeyB2YWx1ZSB9KSB7XG4gICAgc2V0U2VsZWN0ZWQoZWwsIHZhbHVlKTtcbiAgfSxcbiAgYmVmb3JlVXBkYXRlKGVsLCBfYmluZGluZywgdm5vZGUpIHtcbiAgICBlbFthc3NpZ25LZXldID0gZ2V0TW9kZWxBc3NpZ25lcih2bm9kZSk7XG4gIH0sXG4gIHVwZGF0ZWQoZWwsIHsgdmFsdWUgfSkge1xuICAgIGlmICghZWwuX2Fzc2lnbmluZykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBzZXRTZWxlY3RlZChlbCwgdmFsdWUpIHtcbiAgY29uc3QgaXNNdWx0aXBsZSA9IGVsLm11bHRpcGxlO1xuICBjb25zdCBpc0FycmF5VmFsdWUgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzTXVsdGlwbGUgJiYgIWlzQXJyYXlWYWx1ZSAmJiAhaXNTZXQodmFsdWUpKSB7XG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuKFxuICAgICAgYDxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD4gZXhwZWN0cyBhbiBBcnJheSBvciBTZXQgdmFsdWUgZm9yIGl0cyBiaW5kaW5nLCBidXQgZ290ICR7T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSl9LmBcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGdldFZhbHVlKG9wdGlvbik7XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChpc0FycmF5VmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uVHlwZSA9IHR5cGVvZiBvcHRpb25WYWx1ZTtcbiAgICAgICAgaWYgKG9wdGlvblR5cGUgPT09IFwic3RyaW5nXCIgfHwgb3B0aW9uVHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLnNvbWUoKHYpID0+IFN0cmluZyh2KSA9PT0gU3RyaW5nKG9wdGlvblZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gbG9vc2VJbmRleE9mKHZhbHVlLCBvcHRpb25WYWx1ZSkgPiAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaGFzKG9wdGlvblZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XG4gICAgICBpZiAoZWwuc2VsZWN0ZWRJbmRleCAhPT0gaSkgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmICghaXNNdWx0aXBsZSAmJiBlbC5zZWxlY3RlZEluZGV4ICE9PSAtMSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0VmFsdWUoZWwpIHtcbiAgcmV0dXJuIFwiX3ZhbHVlXCIgaW4gZWwgPyBlbC5fdmFsdWUgOiBlbC52YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldENoZWNrYm94VmFsdWUoZWwsIGNoZWNrZWQpIHtcbiAgY29uc3Qga2V5ID0gY2hlY2tlZCA/IFwiX3RydWVWYWx1ZVwiIDogXCJfZmFsc2VWYWx1ZVwiO1xuICByZXR1cm4ga2V5IGluIGVsID8gZWxba2V5XSA6IGNoZWNrZWQ7XG59XG5jb25zdCB2TW9kZWxEeW5hbWljID0ge1xuICBjcmVhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNhbGxNb2RlbEhvb2soZWwsIGJpbmRpbmcsIHZub2RlLCBudWxsLCBcImNyZWF0ZWRcIik7XG4gIH0sXG4gIG1vdW50ZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgY2FsbE1vZGVsSG9vayhlbCwgYmluZGluZywgdm5vZGUsIG51bGwsIFwibW91bnRlZFwiKTtcbiAgfSxcbiAgYmVmb3JlVXBkYXRlKGVsLCBiaW5kaW5nLCB2bm9kZSwgcHJldlZOb2RlKSB7XG4gICAgY2FsbE1vZGVsSG9vayhlbCwgYmluZGluZywgdm5vZGUsIHByZXZWTm9kZSwgXCJiZWZvcmVVcGRhdGVcIik7XG4gIH0sXG4gIHVwZGF0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLCBwcmV2Vk5vZGUpIHtcbiAgICBjYWxsTW9kZWxIb29rKGVsLCBiaW5kaW5nLCB2bm9kZSwgcHJldlZOb2RlLCBcInVwZGF0ZWRcIik7XG4gIH1cbn07XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY01vZGVsKHRhZ05hbWUsIHR5cGUpIHtcbiAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcIlNFTEVDVFwiOlxuICAgICAgcmV0dXJuIHZNb2RlbFNlbGVjdDtcbiAgICBjYXNlIFwiVEVYVEFSRUFcIjpcbiAgICAgIHJldHVybiB2TW9kZWxUZXh0O1xuICAgIGRlZmF1bHQ6XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgcmV0dXJuIHZNb2RlbENoZWNrYm94O1xuICAgICAgICBjYXNlIFwicmFkaW9cIjpcbiAgICAgICAgICByZXR1cm4gdk1vZGVsUmFkaW87XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHZNb2RlbFRleHQ7XG4gICAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNhbGxNb2RlbEhvb2soZWwsIGJpbmRpbmcsIHZub2RlLCBwcmV2Vk5vZGUsIGhvb2spIHtcbiAgY29uc3QgbW9kZWxUb1VzZSA9IHJlc29sdmVEeW5hbWljTW9kZWwoXG4gICAgZWwudGFnTmFtZSxcbiAgICB2bm9kZS5wcm9wcyAmJiB2bm9kZS5wcm9wcy50eXBlXG4gICk7XG4gIGNvbnN0IGZuID0gbW9kZWxUb1VzZVtob29rXTtcbiAgZm4gJiYgZm4oZWwsIGJpbmRpbmcsIHZub2RlLCBwcmV2Vk5vZGUpO1xufVxuZnVuY3Rpb24gaW5pdFZNb2RlbEZvclNTUigpIHtcbiAgdk1vZGVsVGV4dC5nZXRTU1JQcm9wcyA9ICh7IHZhbHVlIH0pID0+ICh7IHZhbHVlIH0pO1xuICB2TW9kZWxSYWRpby5nZXRTU1JQcm9wcyA9ICh7IHZhbHVlIH0sIHZub2RlKSA9PiB7XG4gICAgaWYgKHZub2RlLnByb3BzICYmIGxvb3NlRXF1YWwodm5vZGUucHJvcHMudmFsdWUsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHsgY2hlY2tlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfTtcbiAgdk1vZGVsQ2hlY2tib3guZ2V0U1NSUHJvcHMgPSAoeyB2YWx1ZSB9LCB2bm9kZSkgPT4ge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZub2RlLnByb3BzICYmIGxvb3NlSW5kZXhPZih2YWx1ZSwgdm5vZGUucHJvcHMudmFsdWUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHsgY2hlY2tlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgICBpZiAodm5vZGUucHJvcHMgJiYgdmFsdWUuaGFzKHZub2RlLnByb3BzLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4geyBjaGVja2VkOiB0cnVlIH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgY2hlY2tlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfTtcbiAgdk1vZGVsRHluYW1pYy5nZXRTU1JQcm9wcyA9IChiaW5kaW5nLCB2bm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygdm5vZGUudHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbFRvVXNlID0gcmVzb2x2ZUR5bmFtaWNNb2RlbChcbiAgICAgIC8vIHJlc29sdmVEeW5hbWljTW9kZWwgZXhwZWN0cyBhbiB1cHBlcmNhc2UgdGFnIG5hbWUsIGJ1dCB2bm9kZS50eXBlIGlzIGxvd2VyY2FzZVxuICAgICAgdm5vZGUudHlwZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgdm5vZGUucHJvcHMgJiYgdm5vZGUucHJvcHMudHlwZVxuICAgICk7XG4gICAgaWYgKG1vZGVsVG9Vc2UuZ2V0U1NSUHJvcHMpIHtcbiAgICAgIHJldHVybiBtb2RlbFRvVXNlLmdldFNTUlByb3BzKGJpbmRpbmcsIHZub2RlKTtcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IHN5c3RlbU1vZGlmaWVycyA9IFtcImN0cmxcIiwgXCJzaGlmdFwiLCBcImFsdFwiLCBcIm1ldGFcIl07XG5jb25zdCBtb2RpZmllckd1YXJkcyA9IHtcbiAgc3RvcDogKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gIHByZXZlbnQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXG4gIHNlbGY6IChlKSA9PiBlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0LFxuICBjdHJsOiAoZSkgPT4gIWUuY3RybEtleSxcbiAgc2hpZnQ6IChlKSA9PiAhZS5zaGlmdEtleSxcbiAgYWx0OiAoZSkgPT4gIWUuYWx0S2V5LFxuICBtZXRhOiAoZSkgPT4gIWUubWV0YUtleSxcbiAgbGVmdDogKGUpID0+IFwiYnV0dG9uXCIgaW4gZSAmJiBlLmJ1dHRvbiAhPT0gMCxcbiAgbWlkZGxlOiAoZSkgPT4gXCJidXR0b25cIiBpbiBlICYmIGUuYnV0dG9uICE9PSAxLFxuICByaWdodDogKGUpID0+IFwiYnV0dG9uXCIgaW4gZSAmJiBlLmJ1dHRvbiAhPT0gMixcbiAgZXhhY3Q6IChlLCBtb2RpZmllcnMpID0+IHN5c3RlbU1vZGlmaWVycy5zb21lKChtKSA9PiBlW2Ake219S2V5YF0gJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhtKSlcbn07XG5jb25zdCB3aXRoTW9kaWZpZXJzID0gKGZuLCBtb2RpZmllcnMpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBmbi5fd2l0aE1vZHMgfHwgKGZuLl93aXRoTW9kcyA9IHt9KTtcbiAgY29uc3QgY2FjaGVLZXkgPSBtb2RpZmllcnMuam9pbihcIi5cIik7XG4gIHJldHVybiBjYWNoZVtjYWNoZUtleV0gfHwgKGNhY2hlW2NhY2hlS2V5XSA9IChldmVudCwgLi4uYXJncykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBndWFyZCA9IG1vZGlmaWVyR3VhcmRzW21vZGlmaWVyc1tpXV07XG4gICAgICBpZiAoZ3VhcmQgJiYgZ3VhcmQoZXZlbnQsIG1vZGlmaWVycykpIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGZuKGV2ZW50LCAuLi5hcmdzKTtcbiAgfSk7XG59O1xuY29uc3Qga2V5TmFtZXMgPSB7XG4gIGVzYzogXCJlc2NhcGVcIixcbiAgc3BhY2U6IFwiIFwiLFxuICB1cDogXCJhcnJvdy11cFwiLFxuICBsZWZ0OiBcImFycm93LWxlZnRcIixcbiAgcmlnaHQ6IFwiYXJyb3ctcmlnaHRcIixcbiAgZG93bjogXCJhcnJvdy1kb3duXCIsXG4gIGRlbGV0ZTogXCJiYWNrc3BhY2VcIlxufTtcbmNvbnN0IHdpdGhLZXlzID0gKGZuLCBtb2RpZmllcnMpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBmbi5fd2l0aEtleXMgfHwgKGZuLl93aXRoS2V5cyA9IHt9KTtcbiAgY29uc3QgY2FjaGVLZXkgPSBtb2RpZmllcnMuam9pbihcIi5cIik7XG4gIHJldHVybiBjYWNoZVtjYWNoZUtleV0gfHwgKGNhY2hlW2NhY2hlS2V5XSA9IChldmVudCkgPT4ge1xuICAgIGlmICghKFwia2V5XCIgaW4gZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50S2V5ID0gaHlwaGVuYXRlKGV2ZW50LmtleSk7XG4gICAgaWYgKG1vZGlmaWVycy5zb21lKFxuICAgICAgKGspID0+IGsgPT09IGV2ZW50S2V5IHx8IGtleU5hbWVzW2tdID09PSBldmVudEtleVxuICAgICkpIHtcbiAgICAgIHJldHVybiBmbihldmVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlcmVyT3B0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBleHRlbmQoeyBwYXRjaFByb3AgfSwgbm9kZU9wcyk7XG5sZXQgcmVuZGVyZXI7XG5sZXQgZW5hYmxlZEh5ZHJhdGlvbiA9IGZhbHNlO1xuZnVuY3Rpb24gZW5zdXJlUmVuZGVyZXIoKSB7XG4gIHJldHVybiByZW5kZXJlciB8fCAocmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcihyZW5kZXJlck9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGVuc3VyZUh5ZHJhdGlvblJlbmRlcmVyKCkge1xuICByZW5kZXJlciA9IGVuYWJsZWRIeWRyYXRpb24gPyByZW5kZXJlciA6IGNyZWF0ZUh5ZHJhdGlvblJlbmRlcmVyKHJlbmRlcmVyT3B0aW9ucyk7XG4gIGVuYWJsZWRIeWRyYXRpb24gPSB0cnVlO1xuICByZXR1cm4gcmVuZGVyZXI7XG59XG5jb25zdCByZW5kZXIgPSAoLi4uYXJncykgPT4ge1xuICBlbnN1cmVSZW5kZXJlcigpLnJlbmRlciguLi5hcmdzKTtcbn07XG5jb25zdCBoeWRyYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgZW5zdXJlSHlkcmF0aW9uUmVuZGVyZXIoKS5oeWRyYXRlKC4uLmFyZ3MpO1xufTtcbmNvbnN0IGNyZWF0ZUFwcCA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGVuc3VyZVJlbmRlcmVyKCkuY3JlYXRlQXBwKC4uLmFyZ3MpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGluamVjdE5hdGl2ZVRhZ0NoZWNrKGFwcCk7XG4gICAgaW5qZWN0Q29tcGlsZXJPcHRpb25zQ2hlY2soYXBwKTtcbiAgfVxuICBjb25zdCB7IG1vdW50IH0gPSBhcHA7XG4gIGFwcC5tb3VudCA9IChjb250YWluZXJPclNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbm9ybWFsaXplQ29udGFpbmVyKGNvbnRhaW5lck9yU2VsZWN0b3IpO1xuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG4gICAgY29uc3QgY29tcG9uZW50ID0gYXBwLl9jb21wb25lbnQ7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGNvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5yZW5kZXIgJiYgIWNvbXBvbmVudC50ZW1wbGF0ZSkge1xuICAgICAgY29tcG9uZW50LnRlbXBsYXRlID0gY29udGFpbmVyLmlubmVySFRNTDtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgcHJveHkgPSBtb3VudChjb250YWluZXIsIGZhbHNlLCByZXNvbHZlUm9vdE5hbWVzcGFjZShjb250YWluZXIpKTtcbiAgICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInYtY2xvYWtcIik7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12LWFwcFwiLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuICByZXR1cm4gYXBwO1xufTtcbmNvbnN0IGNyZWF0ZVNTUkFwcCA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGVuc3VyZUh5ZHJhdGlvblJlbmRlcmVyKCkuY3JlYXRlQXBwKC4uLmFyZ3MpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGluamVjdE5hdGl2ZVRhZ0NoZWNrKGFwcCk7XG4gICAgaW5qZWN0Q29tcGlsZXJPcHRpb25zQ2hlY2soYXBwKTtcbiAgfVxuICBjb25zdCB7IG1vdW50IH0gPSBhcHA7XG4gIGFwcC5tb3VudCA9IChjb250YWluZXJPclNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbm9ybWFsaXplQ29udGFpbmVyKGNvbnRhaW5lck9yU2VsZWN0b3IpO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHJldHVybiBtb3VudChjb250YWluZXIsIHRydWUsIHJlc29sdmVSb290TmFtZXNwYWNlKGNvbnRhaW5lcikpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGFwcDtcbn07XG5mdW5jdGlvbiByZXNvbHZlUm9vdE5hbWVzcGFjZShjb250YWluZXIpIHtcbiAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICByZXR1cm4gXCJzdmdcIjtcbiAgfVxuICBpZiAodHlwZW9mIE1hdGhNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBjb250YWluZXIgaW5zdGFuY2VvZiBNYXRoTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIFwibWF0aG1sXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdE5hdGl2ZVRhZ0NoZWNrKGFwcCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwLmNvbmZpZywgXCJpc05hdGl2ZVRhZ1wiLCB7XG4gICAgdmFsdWU6ICh0YWcpID0+IGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHVGFnKHRhZykgfHwgaXNNYXRoTUxUYWcodGFnKSxcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG59XG5mdW5jdGlvbiBpbmplY3RDb21waWxlck9wdGlvbnNDaGVjayhhcHApIHtcbiAgaWYgKGlzUnVudGltZU9ubHkoKSkge1xuICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGFwcC5jb25maWcuaXNDdXN0b21FbGVtZW50O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcHAuY29uZmlnLCBcImlzQ3VzdG9tRWxlbWVudFwiLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBpc0N1c3RvbUVsZW1lbnQ7XG4gICAgICB9LFxuICAgICAgc2V0KCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGBUaGUgXFxgaXNDdXN0b21FbGVtZW50XFxgIGNvbmZpZyBvcHRpb24gaXMgZGVwcmVjYXRlZC4gVXNlIFxcYGNvbXBpbGVyT3B0aW9ucy5pc0N1c3RvbUVsZW1lbnRcXGAgaW5zdGVhZC5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY29tcGlsZXJPcHRpb25zID0gYXBwLmNvbmZpZy5jb21waWxlck9wdGlvbnM7XG4gICAgY29uc3QgbXNnID0gYFRoZSBcXGBjb21waWxlck9wdGlvbnNcXGAgY29uZmlnIG9wdGlvbiBpcyBvbmx5IHJlc3BlY3RlZCB3aGVuIHVzaW5nIGEgYnVpbGQgb2YgVnVlLmpzIHRoYXQgaW5jbHVkZXMgdGhlIHJ1bnRpbWUgY29tcGlsZXIgKGFrYSBcImZ1bGwgYnVpbGRcIikuIFNpbmNlIHlvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCwgXFxgY29tcGlsZXJPcHRpb25zXFxgIG11c3QgYmUgcGFzc2VkIHRvIFxcYEB2dWUvY29tcGlsZXItZG9tXFxgIGluIHRoZSBidWlsZCBzZXR1cCBpbnN0ZWFkLlxuLSBGb3IgdnVlLWxvYWRlcjogcGFzcyBpdCB2aWEgdnVlLWxvYWRlcidzIFxcYGNvbXBpbGVyT3B0aW9uc1xcYCBsb2FkZXIgb3B0aW9uLlxuLSBGb3IgdnVlLWNsaTogc2VlIGh0dHBzOi8vY2xpLnZ1ZWpzLm9yZy9ndWlkZS93ZWJwYWNrLmh0bWwjbW9kaWZ5aW5nLW9wdGlvbnMtb2YtYS1sb2FkZXJcbi0gRm9yIHZpdGU6IHBhc3MgaXQgdmlhIEB2aXRlanMvcGx1Z2luLXZ1ZSBvcHRpb25zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlLXBsdWdpbi12dWUvdHJlZS9tYWluL3BhY2thZ2VzL3BsdWdpbi12dWUjZXhhbXBsZS1mb3ItcGFzc2luZy1vcHRpb25zLXRvLXZ1ZWNvbXBpbGVyLXNmY2A7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwcC5jb25maWcsIFwiY29tcGlsZXJPcHRpb25zXCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgd2Fybihtc2cpO1xuICAgICAgICByZXR1cm4gY29tcGlsZXJPcHRpb25zO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHtcbiAgICAgICAgd2Fybihtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGlmIChpc1N0cmluZyhjb250YWluZXIpKSB7XG4gICAgY29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFyZXMpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGBGYWlsZWQgdG8gbW91bnQgYXBwOiBtb3VudCB0YXJnZXQgc2VsZWN0b3IgXCIke2NvbnRhaW5lcn1cIiByZXR1cm5lZCBudWxsLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2luZG93LlNoYWRvd1Jvb3QgJiYgY29udGFpbmVyIGluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3QgJiYgY29udGFpbmVyLm1vZGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICB3YXJuKFxuICAgICAgYG1vdW50aW5nIG9uIGEgU2hhZG93Um9vdCB3aXRoIFxcYHttb2RlOiBcImNsb3NlZFwifVxcYCBtYXkgbGVhZCB0byB1bnByZWRpY3RhYmxlIGJ1Z3NgXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyO1xufVxubGV0IHNzckRpcmVjdGl2ZUluaXRpYWxpemVkID0gZmFsc2U7XG5jb25zdCBpbml0RGlyZWN0aXZlc0ZvclNTUiA9ICgpID0+IHtcbiAgaWYgKCFzc3JEaXJlY3RpdmVJbml0aWFsaXplZCkge1xuICAgIHNzckRpcmVjdGl2ZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBpbml0Vk1vZGVsRm9yU1NSKCk7XG4gICAgaW5pdFZTaG93Rm9yU1NSKCk7XG4gIH1cbn0gO1xuXG5leHBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAsIFZ1ZUVsZW1lbnQsIGNyZWF0ZUFwcCwgY3JlYXRlU1NSQXBwLCBkZWZpbmVDdXN0b21FbGVtZW50LCBkZWZpbmVTU1JDdXN0b21FbGVtZW50LCBoeWRyYXRlLCBpbml0RGlyZWN0aXZlc0ZvclNTUiwgcmVuZGVyLCB1c2VDc3NNb2R1bGUsIHVzZUNzc1ZhcnMsIHVzZUhvc3QsIHVzZVNoYWRvd1Jvb3QsIHZNb2RlbENoZWNrYm94LCB2TW9kZWxEeW5hbWljLCB2TW9kZWxSYWRpbywgdk1vZGVsU2VsZWN0LCB2TW9kZWxUZXh0LCB2U2hvdywgd2l0aEtleXMsIHdpdGhNb2RpZmllcnMgfTtcbiJdLCJuYW1lcyI6WyJtYWtlTWFwIiwic3RyIiwibWFwIiwia2V5IiwidmFsIiwiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiTk9PUCIsIk5PIiwiaXNPbiIsImlzTW9kZWxMaXN0ZW5lciIsImV4dGVuZCIsInJlbW92ZSIsImFyciIsImVsIiwiaSIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwiaXNBcnJheSIsImlzTWFwIiwidG9UeXBlU3RyaW5nIiwiaXNTZXQiLCJpc0Z1bmN0aW9uIiwiaXNTdHJpbmciLCJpc1N5bWJvbCIsImlzT2JqZWN0IiwiaXNQcm9taXNlIiwib2JqZWN0VG9TdHJpbmciLCJ2YWx1ZSIsInRvUmF3VHlwZSIsImlzUGxhaW5PYmplY3QiLCJpc0ludGVnZXJLZXkiLCJpc1Jlc2VydmVkUHJvcCIsImNhY2hlU3RyaW5nRnVuY3Rpb24iLCJmbiIsImNhY2hlIiwiY2FtZWxpemVSRSIsImNhbWVsaXplIiwiXyIsImMiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsImNhcGl0YWxpemUiLCJ0b0hhbmRsZXJLZXkiLCJoYXNDaGFuZ2VkIiwib2xkVmFsdWUiLCJpbnZva2VBcnJheUZucyIsImZucyIsImFyZyIsImRlZiIsIm9iaiIsIndyaXRhYmxlIiwibG9vc2VUb051bWJlciIsIm4iLCJ0b051bWJlciIsIl9nbG9iYWxUaGlzIiwiZ2V0R2xvYmFsVGhpcyIsIm5vcm1hbGl6ZVN0eWxlIiwicmVzIiwiaXRlbSIsIm5vcm1hbGl6ZWQiLCJwYXJzZVN0cmluZ1N0eWxlIiwibGlzdERlbGltaXRlclJFIiwicHJvcGVydHlEZWxpbWl0ZXJSRSIsInN0eWxlQ29tbWVudFJFIiwiY3NzVGV4dCIsInJldCIsInRtcCIsIm5vcm1hbGl6ZUNsYXNzIiwibmFtZSIsInNwZWNpYWxCb29sZWFuQXR0cnMiLCJpc1NwZWNpYWxCb29sZWFuQXR0ciIsImluY2x1ZGVCb29sZWFuQXR0ciIsImlzUmVmIiwidG9EaXNwbGF5U3RyaW5nIiwicmVwbGFjZXIiLCJfa2V5IiwiZW50cmllcyIsInZhbDIiLCJzdHJpbmdpZnlTeW1ib2wiLCJ2IiwiX2EiLCJhY3RpdmVFZmZlY3RTY29wZSIsIkVmZmVjdFNjb3BlIiwiZGV0YWNoZWQiLCJsIiwiY3VycmVudEVmZmVjdFNjb3BlIiwiZnJvbVBhcmVudCIsImxhc3QiLCJnZXRDdXJyZW50U2NvcGUiLCJhY3RpdmVTdWIiLCJwYXVzZWRRdWV1ZUVmZmVjdHMiLCJSZWFjdGl2ZUVmZmVjdCIsImJhdGNoIiwiY2xlYW51cEVmZmVjdCIsInByZXBhcmVEZXBzIiwicHJldkVmZmVjdCIsInByZXZTaG91bGRUcmFjayIsInNob3VsZFRyYWNrIiwiY2xlYW51cERlcHMiLCJsaW5rIiwicmVtb3ZlU3ViIiwiaXNEaXJ0eSIsImJhdGNoRGVwdGgiLCJiYXRjaGVkU3ViIiwiYmF0Y2hlZENvbXB1dGVkIiwic3ViIiwiaXNDb21wdXRlZCIsInN0YXJ0QmF0Y2giLCJlbmRCYXRjaCIsImUiLCJuZXh0IiwiZXJyb3IiLCJlcnIiLCJoZWFkIiwidGFpbCIsInByZXYiLCJyZW1vdmVEZXAiLCJyZWZyZXNoQ29tcHV0ZWQiLCJjb21wdXRlZCIsImdsb2JhbFZlcnNpb24iLCJkZXAiLCJwcmV2U3ViIiwic29mdCIsIm5leHRTdWIiLCJwcmV2RGVwIiwibmV4dERlcCIsInRyYWNrU3RhY2siLCJwYXVzZVRyYWNraW5nIiwicmVzZXRUcmFja2luZyIsImNsZWFudXAiLCJMaW5rIiwiRGVwIiwiZGVidWdJbmZvIiwiYWRkU3ViIiwiY3VycmVudFRhaWwiLCJ0YXJnZXRNYXAiLCJJVEVSQVRFX0tFWSIsIk1BUF9LRVlfSVRFUkFURV9LRVkiLCJBUlJBWV9JVEVSQVRFX0tFWSIsInRyYWNrIiwidGFyZ2V0IiwidHlwZSIsImRlcHNNYXAiLCJ0cmlnZ2VyIiwibmV3VmFsdWUiLCJvbGRUYXJnZXQiLCJydW4iLCJ0YXJnZXRJc0FycmF5IiwiaXNBcnJheUluZGV4IiwibmV3TGVuZ3RoIiwia2V5MiIsImdldERlcEZyb21SZWFjdGl2ZSIsIm9iamVjdCIsImRlcE1hcCIsInJlYWN0aXZlUmVhZEFycmF5IiwiYXJyYXkiLCJyYXciLCJ0b1JhdyIsImlzU2hhbGxvdyIsInRvUmVhY3RpdmUiLCJzaGFsbG93UmVhZEFycmF5IiwiYXJyYXlJbnN0cnVtZW50YXRpb25zIiwiaXRlcmF0b3IiLCJhcmdzIiwieCIsInRoaXNBcmciLCJhcHBseSIsInNlYXJjaFByb3h5Iiwic2VwYXJhdG9yIiwibm9UcmFja2luZyIsInJlZHVjZSIsImNvbXBhcmVyIiwic2VsZiIsIm1ldGhvZCIsIndyYXBWYWx1ZSIsIml0ZXIiLCJyZXN1bHQiLCJhcnJheVByb3RvIiwid3JhcHBlZFJldEZuIiwibmVlZHNXcmFwIiwibWV0aG9kRm4iLCJyZXN1bHQyIiwid3JhcHBlZEZuIiwiaW5kZXgiLCJhY2MiLCJpc1Byb3h5IiwiaXNOb25UcmFja2FibGVLZXlzIiwiYnVpbHRJblN5bWJvbHMiLCJCYXNlUmVhY3RpdmVIYW5kbGVyIiwiX2lzUmVhZG9ubHkiLCJfaXNTaGFsbG93IiwicmVjZWl2ZXIiLCJpc1JlYWRvbmx5MiIsImlzU2hhbGxvdzIiLCJzaGFsbG93UmVhZG9ubHlNYXAiLCJyZWFkb25seU1hcCIsInNoYWxsb3dSZWFjdGl2ZU1hcCIsInJlYWN0aXZlTWFwIiwicmVhZG9ubHkiLCJyZWFjdGl2ZSIsIk11dGFibGVSZWFjdGl2ZUhhbmRsZXIiLCJpc09sZFZhbHVlUmVhZG9ubHkiLCJpc1JlYWRvbmx5IiwiaGFkS2V5IiwiUmVhZG9ubHlSZWFjdGl2ZUhhbmRsZXIiLCJtdXRhYmxlSGFuZGxlcnMiLCJyZWFkb25seUhhbmRsZXJzIiwic2hhbGxvd1JlYWN0aXZlSGFuZGxlcnMiLCJ0b1NoYWxsb3ciLCJnZXRQcm90byIsImNyZWF0ZUl0ZXJhYmxlTWV0aG9kIiwicmF3VGFyZ2V0IiwidGFyZ2V0SXNNYXAiLCJpc1BhaXIiLCJpc0tleU9ubHkiLCJpbm5lckl0ZXJhdG9yIiwid3JhcCIsInRvUmVhZG9ubHkiLCJkb25lIiwiY3JlYXRlUmVhZG9ubHlNZXRob2QiLCJjcmVhdGVJbnN0cnVtZW50YXRpb25zIiwic2hhbGxvdyIsImluc3RydW1lbnRhdGlvbnMiLCJyYXdLZXkiLCJoYXMiLCJjYWxsYmFjayIsIm9ic2VydmVkIiwiZ2V0IiwiaGFkSXRlbXMiLCJjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIiLCJtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzIiwic2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycyIsInJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzIiwidGFyZ2V0VHlwZU1hcCIsInJhd1R5cGUiLCJnZXRUYXJnZXRUeXBlIiwiY3JlYXRlUmVhY3RpdmVPYmplY3QiLCJzaGFsbG93UmVhY3RpdmUiLCJiYXNlSGFuZGxlcnMiLCJjb2xsZWN0aW9uSGFuZGxlcnMiLCJwcm94eU1hcCIsImV4aXN0aW5nUHJveHkiLCJ0YXJnZXRUeXBlIiwicHJveHkiLCJpc1JlYWN0aXZlIiwibWFya1JhdyIsInIiLCJyZWYiLCJjcmVhdGVSZWYiLCJzaGFsbG93UmVmIiwicmF3VmFsdWUiLCJSZWZJbXBsIiwidXNlRGlyZWN0VmFsdWUiLCJ1bnJlZiIsInJlZjIiLCJzaGFsbG93VW53cmFwSGFuZGxlcnMiLCJwcm94eVJlZnMiLCJvYmplY3RXaXRoUmVmcyIsInRvUmVmcyIsInByb3BlcnR5VG9SZWYiLCJPYmplY3RSZWZJbXBsIiwiX29iamVjdCIsIl9kZWZhdWx0VmFsdWUiLCJuZXdWYWwiLCJHZXR0ZXJSZWZJbXBsIiwiX2dldHRlciIsInRvUmVmIiwic291cmNlIiwiZGVmYXVsdFZhbHVlIiwiQ29tcHV0ZWRSZWZJbXBsIiwic2V0dGVyIiwiaXNTU1IiLCJnZXR0ZXJPck9wdGlvbnMiLCJkZWJ1Z09wdGlvbnMiLCJnZXR0ZXIiLCJJTklUSUFMX1dBVENIRVJfVkFMVUUiLCJjbGVhbnVwTWFwIiwiYWN0aXZlV2F0Y2hlciIsIm9uV2F0Y2hlckNsZWFudXAiLCJjbGVhbnVwRm4iLCJmYWlsU2lsZW50bHkiLCJvd25lciIsImNsZWFudXBzIiwid2F0Y2giLCJjYiIsIm9wdGlvbnMiLCJpbW1lZGlhdGUiLCJkZWVwIiwib25jZSIsInNjaGVkdWxlciIsImF1Z21lbnRKb2IiLCJjYWxsIiwicmVhY3RpdmVHZXR0ZXIiLCJzb3VyY2UyIiwidHJhdmVyc2UiLCJlZmZlY3QiLCJib3VuZENsZWFudXAiLCJmb3JjZVRyaWdnZXIiLCJpc011bHRpU291cmNlIiwicyIsImN1cnJlbnRFZmZlY3QiLCJiYXNlR2V0dGVyIiwiZGVwdGgiLCJzY29wZSIsIndhdGNoSGFuZGxlIiwiX2NiIiwiam9iIiwiaW1tZWRpYXRlRmlyc3RSdW4iLCJjdXJyZW50V2F0Y2hlciIsImNsZWFudXAyIiwic2VlbiIsImNhbGxXaXRoRXJyb3JIYW5kbGluZyIsImluc3RhbmNlIiwiaGFuZGxlRXJyb3IiLCJjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyIsInZhbHVlcyIsInRocm93SW5EZXYiLCJjb250ZXh0Vk5vZGUiLCJlcnJvckhhbmRsZXIiLCJ0aHJvd1VuaGFuZGxlZEVycm9ySW5Qcm9kdWN0aW9uIiwiY3VyIiwiZXhwb3NlZEluc3RhbmNlIiwiZXJyb3JJbmZvIiwiZXJyb3JDYXB0dXJlZEhvb2tzIiwibG9nRXJyb3IiLCJ0aHJvd0luUHJvZCIsInF1ZXVlIiwiZmx1c2hJbmRleCIsInBlbmRpbmdQb3N0Rmx1c2hDYnMiLCJhY3RpdmVQb3N0Rmx1c2hDYnMiLCJwb3N0Rmx1c2hJbmRleCIsInJlc29sdmVkUHJvbWlzZSIsImN1cnJlbnRGbHVzaFByb21pc2UiLCJuZXh0VGljayIsInAiLCJmaW5kSW5zZXJ0aW9uSW5kZXgiLCJpZCIsInN0YXJ0IiwiZW5kIiwibWlkZGxlIiwibWlkZGxlSm9iIiwibWlkZGxlSm9iSWQiLCJnZXRJZCIsInF1ZXVlSm9iIiwiam9iSWQiLCJsYXN0Sm9iIiwicXVldWVGbHVzaCIsImZsdXNoSm9icyIsInF1ZXVlUG9zdEZsdXNoQ2IiLCJmbHVzaFByZUZsdXNoQ2JzIiwiZmx1c2hQb3N0Rmx1c2hDYnMiLCJkZWR1cGVkIiwiYSIsImIiLCJjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UiLCJjdXJyZW50U2NvcGVJZCIsInNldEN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSIsIndpdGhDdHgiLCJjdHgiLCJpc05vblNjb3BlZFNsb3QiLCJyZW5kZXJGbldpdGhDb250ZXh0Iiwic2V0QmxvY2tUcmFja2luZyIsInByZXZJbnN0YW5jZSIsIndpdGhEaXJlY3RpdmVzIiwidm5vZGUiLCJkaXJlY3RpdmVzIiwiZ2V0Q29tcG9uZW50UHVibGljSW5zdGFuY2UiLCJiaW5kaW5ncyIsImRpciIsIm1vZGlmaWVycyIsImludm9rZURpcmVjdGl2ZUhvb2siLCJwcmV2Vk5vZGUiLCJvbGRCaW5kaW5ncyIsImJpbmRpbmciLCJob29rIiwiVGVsZXBvcnRFbmRLZXkiLCJpc1RlbGVwb3J0IiwiaXNUZWxlcG9ydERpc2FibGVkIiwicHJvcHMiLCJpc1RlbGVwb3J0RGVmZXJyZWQiLCJpc1RhcmdldFNWRyIsImlzVGFyZ2V0TWF0aE1MIiwicmVzb2x2ZVRhcmdldCIsInNlbGVjdCIsInRhcmdldFNlbGVjdG9yIiwiVGVsZXBvcnRJbXBsIiwibjEiLCJuMiIsImNvbnRhaW5lciIsImFuY2hvciIsInBhcmVudENvbXBvbmVudCIsInBhcmVudFN1c3BlbnNlIiwibmFtZXNwYWNlIiwic2xvdFNjb3BlSWRzIiwib3B0aW1pemVkIiwiaW50ZXJuYWxzIiwibW91bnRDaGlsZHJlbiIsInBhdGNoQ2hpbGRyZW4iLCJwYXRjaEJsb2NrQ2hpbGRyZW4iLCJpbnNlcnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlVGV4dCIsImNyZWF0ZUNvbW1lbnQiLCJkaXNhYmxlZCIsInNoYXBlRmxhZyIsImNoaWxkcmVuIiwiZHluYW1pY0NoaWxkcmVuIiwicGxhY2Vob2xkZXIiLCJtYWluQW5jaG9yIiwibW91bnQiLCJjb250YWluZXIyIiwiYW5jaG9yMiIsIm1vdW50VG9UYXJnZXQiLCJ0YXJnZXRBbmNob3IiLCJwcmVwYXJlQW5jaG9yIiwidXBkYXRlQ3NzVmFycyIsInF1ZXVlUG9zdFJlbmRlckVmZmVjdCIsIndhc0Rpc2FibGVkIiwiY3VycmVudENvbnRhaW5lciIsImN1cnJlbnRBbmNob3IiLCJ0cmF2ZXJzZVN0YXRpY0NoaWxkcmVuIiwibW92ZVRlbGVwb3J0IiwibmV4dFRhcmdldCIsInVubW91bnQiLCJob3N0UmVtb3ZlIiwiZG9SZW1vdmUiLCJ0YXJnZXRTdGFydCIsInNob3VsZFJlbW92ZSIsImNoaWxkIiwiaHlkcmF0ZVRlbGVwb3J0IiwicGFyZW50QW5jaG9yIiwibW92ZSIsIm1vdmVUeXBlIiwiaXNSZW9yZGVyIiwibm9kZSIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsImh5ZHJhdGVDaGlsZHJlbiIsInRhcmdldE5vZGUiLCJUZWxlcG9ydCIsImlzRGlzYWJsZWQiLCJsZWF2ZUNiS2V5IiwiZW50ZXJDYktleSIsInVzZVRyYW5zaXRpb25TdGF0ZSIsInN0YXRlIiwib25Nb3VudGVkIiwib25CZWZvcmVVbm1vdW50IiwiVHJhbnNpdGlvbkhvb2tWYWxpZGF0b3IiLCJCYXNlVHJhbnNpdGlvblByb3BzVmFsaWRhdG9ycyIsInJlY3Vyc2l2ZUdldFN1YnRyZWUiLCJzdWJUcmVlIiwiQmFzZVRyYW5zaXRpb25JbXBsIiwic2xvdHMiLCJnZXRDdXJyZW50SW5zdGFuY2UiLCJnZXRUcmFuc2l0aW9uUmF3Q2hpbGRyZW4iLCJmaW5kTm9uQ29tbWVudENoaWxkIiwicmF3UHJvcHMiLCJtb2RlIiwiZW1wdHlQbGFjZWhvbGRlciIsImlubmVyQ2hpbGQiLCJnZXRJbm5lckNoaWxkJDEiLCJlbnRlckhvb2tzIiwicmVzb2x2ZVRyYW5zaXRpb25Ib29rcyIsImhvb2tzIiwiQ29tbWVudCIsInNldFRyYW5zaXRpb25Ib29rcyIsIm9sZElubmVyQ2hpbGQiLCJpc1NhbWVWTm9kZVR5cGUiLCJsZWF2aW5nSG9va3MiLCJlYXJseVJlbW92ZSIsImRlbGF5ZWRMZWF2ZSIsImxlYXZpbmdWTm9kZXNDYWNoZSIsImdldExlYXZpbmdOb2Rlc0ZvclR5cGUiLCJCYXNlVHJhbnNpdGlvbiIsImxlYXZpbmdWTm9kZXMiLCJwb3N0Q2xvbmUiLCJhcHBlYXIiLCJwZXJzaXN0ZWQiLCJvbkJlZm9yZUVudGVyIiwib25FbnRlciIsIm9uQWZ0ZXJFbnRlciIsIm9uRW50ZXJDYW5jZWxsZWQiLCJvbkJlZm9yZUxlYXZlIiwib25MZWF2ZSIsIm9uQWZ0ZXJMZWF2ZSIsIm9uTGVhdmVDYW5jZWxsZWQiLCJvbkJlZm9yZUFwcGVhciIsIm9uQXBwZWFyIiwib25BZnRlckFwcGVhciIsIm9uQXBwZWFyQ2FuY2VsbGVkIiwiY2FsbEhvb2siLCJjYWxsQXN5bmNIb29rIiwiaG9vazIiLCJsZWF2aW5nVk5vZGUiLCJhZnRlckhvb2siLCJjYW5jZWxIb29rIiwiY2FsbGVkIiwiY2FuY2VsbGVkIiwidm5vZGUyIiwiaG9va3MyIiwiaXNLZWVwQWxpdmUiLCJjbG9uZVZOb2RlIiwia2VlcENvbW1lbnQiLCJwYXJlbnRLZXkiLCJrZXllZEZyYWdtZW50Q291bnQiLCJGcmFnbWVudCIsImRlZmluZUNvbXBvbmVudCIsImV4dHJhT3B0aW9ucyIsIm1hcmtBc3luY0JvdW5kYXJ5Iiwic2V0UmVmIiwicmF3UmVmIiwib2xkUmF3UmVmIiwiaXNVbm1vdW50IiwiaXNBc3luY1dyYXBwZXIiLCJyZWZWYWx1ZSIsIm9sZFJlZiIsInJlZnMiLCJzZXR1cFN0YXRlIiwicmF3U2V0dXBTdGF0ZSIsImNhblNldFNldHVwUmVmIiwiX2lzU3RyaW5nIiwiX2lzUmVmIiwiZG9TZXQiLCJleGlzdGluZyIsImlzQ29tbWVudCIsImZvckVhY2hFbGVtZW50IiwiZGVmaW5lQXN5bmNDb21wb25lbnQiLCJsb2FkZXIiLCJsb2FkaW5nQ29tcG9uZW50IiwiZXJyb3JDb21wb25lbnQiLCJkZWxheSIsImh5ZHJhdGVTdHJhdGVneSIsInRpbWVvdXQiLCJzdXNwZW5zaWJsZSIsInVzZXJPbkVycm9yIiwicGVuZGluZ1JlcXVlc3QiLCJyZXNvbHZlZENvbXAiLCJyZXRyaWVzIiwicmV0cnkiLCJsb2FkIiwidGhpc1JlcXVlc3QiLCJyZXNvbHZlIiwicmVqZWN0IiwiY29tcCIsImh5ZHJhdGUiLCJkb0h5ZHJhdGUiLCJ0ZWFyZG93biIsImN1cnJlbnRJbnN0YW5jZSIsImNyZWF0ZUlubmVyQ29tcCIsIm9uRXJyb3IiLCJpc0luU1NSQ29tcG9uZW50U2V0dXAiLCJjcmVhdGVWTm9kZSIsImxvYWRlZCIsImRlbGF5ZWQiLCJwYXJlbnQiLCJjZSIsIm9uQWN0aXZhdGVkIiwicmVnaXN0ZXJLZWVwQWxpdmVIb29rIiwib25EZWFjdGl2YXRlZCIsIndyYXBwZWRIb29rIiwiY3VycmVudCIsImluamVjdEhvb2siLCJpbmplY3RUb0tlZXBBbGl2ZVJvb3QiLCJrZWVwQWxpdmVSb290IiwiaW5qZWN0ZWQiLCJvblVubW91bnRlZCIsInByZXBlbmQiLCJyZXNldCIsInNldEN1cnJlbnRJbnN0YW5jZSIsImNyZWF0ZUhvb2siLCJsaWZlY3ljbGUiLCJvbkJlZm9yZU1vdW50Iiwib25CZWZvcmVVcGRhdGUiLCJvblVwZGF0ZWQiLCJvblNlcnZlclByZWZldGNoIiwib25SZW5kZXJUcmlnZ2VyZWQiLCJvblJlbmRlclRyYWNrZWQiLCJvbkVycm9yQ2FwdHVyZWQiLCJDT01QT05FTlRTIiwiTlVMTF9EWU5BTUlDX0NPTVBPTkVOVCIsInJlc29sdmVEeW5hbWljQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzb2x2ZUFzc2V0Iiwid2Fybk1pc3NpbmciLCJtYXliZVNlbGZSZWZlcmVuY2UiLCJDb21wb25lbnQiLCJzZWxmTmFtZSIsImdldENvbXBvbmVudE5hbWUiLCJyZWdpc3RyeSIsInJlbmRlckxpc3QiLCJyZW5kZXJJdGVtIiwiY2FjaGVkIiwic291cmNlSXNBcnJheSIsInNvdXJjZUlzUmVhY3RpdmVBcnJheSIsImtleXMiLCJyZW5kZXJTbG90IiwiZmFsbGJhY2siLCJub1Nsb3R0ZWQiLCJvcGVuQmxvY2siLCJjcmVhdGVCbG9jayIsInNsb3QiLCJ2YWxpZFNsb3RDb250ZW50IiwiZW5zdXJlVmFsaWRWTm9kZSIsInNsb3RLZXkiLCJyZW5kZXJlZCIsInZub2RlcyIsImlzVk5vZGUiLCJnZXRQdWJsaWNJbnN0YW5jZSIsImlzU3RhdGVmdWxDb21wb25lbnQiLCJwdWJsaWNQcm9wZXJ0aWVzTWFwIiwicmVzb2x2ZU1lcmdlZE9wdGlvbnMiLCJpbnN0YW5jZVdhdGNoIiwiaGFzU2V0dXBCaW5kaW5nIiwiUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzIiwiZGF0YSIsImFjY2Vzc0NhY2hlIiwiYXBwQ29udGV4dCIsIm5vcm1hbGl6ZWRQcm9wcyIsInNob3VsZENhY2hlQWNjZXNzIiwicHVibGljR2V0dGVyIiwiY3NzTW9kdWxlIiwiZ2xvYmFsUHJvcGVydGllcyIsInByb3BzT3B0aW9ucyIsImRlc2NyaXB0b3IiLCJub3JtYWxpemVQcm9wc09yRW1pdHMiLCJhcHBseU9wdGlvbnMiLCJwdWJsaWNUaGlzIiwiZGF0YU9wdGlvbnMiLCJjb21wdXRlZE9wdGlvbnMiLCJtZXRob2RzIiwid2F0Y2hPcHRpb25zIiwicHJvdmlkZU9wdGlvbnMiLCJpbmplY3RPcHRpb25zIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwibW91bnRlZCIsImJlZm9yZVVwZGF0ZSIsInVwZGF0ZWQiLCJhY3RpdmF0ZWQiLCJkZWFjdGl2YXRlZCIsImJlZm9yZURlc3Ryb3kiLCJiZWZvcmVVbm1vdW50IiwiZGVzdHJveWVkIiwidW5tb3VudGVkIiwicmVuZGVyIiwicmVuZGVyVHJhY2tlZCIsInJlbmRlclRyaWdnZXJlZCIsImVycm9yQ2FwdHVyZWQiLCJzZXJ2ZXJQcmVmZXRjaCIsImV4cG9zZSIsImluaGVyaXRBdHRycyIsImNvbXBvbmVudHMiLCJmaWx0ZXJzIiwicmVzb2x2ZUluamVjdGlvbnMiLCJtZXRob2RIYW5kbGVyIiwib3B0Iiwic2V0IiwiY3JlYXRlV2F0Y2hlciIsInByb3ZpZGVzIiwicHJvdmlkZSIsInJlZ2lzdGVyTGlmZWN5Y2xlSG9vayIsInJlZ2lzdGVyIiwiX2hvb2siLCJleHBvc2VkIiwiY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzIiwibm9ybWFsaXplSW5qZWN0IiwiaW5qZWN0IiwiaCIsImNyZWF0ZVBhdGhHZXR0ZXIiLCJoYW5kbGVyIiwiYmFzZSIsIm1peGlucyIsImV4dGVuZHNPcHRpb25zIiwiZ2xvYmFsTWl4aW5zIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwicmVzb2x2ZWQiLCJtIiwibWVyZ2VPcHRpb25zIiwidG8iLCJmcm9tIiwic3RyYXRzIiwiYXNNaXhpbiIsInN0cmF0IiwiaW50ZXJuYWxPcHRpb25NZXJnZVN0cmF0cyIsIm1lcmdlRGF0YUZuIiwibWVyZ2VFbWl0c09yUHJvcHNPcHRpb25zIiwibWVyZ2VPYmplY3RPcHRpb25zIiwibWVyZ2VBc0FycmF5IiwibWVyZ2VXYXRjaE9wdGlvbnMiLCJtZXJnZUluamVjdCIsIm1lcmdlZCIsImNyZWF0ZUFwcENvbnRleHQiLCJ1aWQkMSIsImNyZWF0ZUFwcEFQSSIsInJvb3RDb21wb25lbnQiLCJyb290UHJvcHMiLCJjb250ZXh0IiwiaW5zdGFsbGVkUGx1Z2lucyIsInBsdWdpbkNsZWFudXBGbnMiLCJpc01vdW50ZWQiLCJhcHAiLCJ2ZXJzaW9uIiwicGx1Z2luIiwibWl4aW4iLCJkaXJlY3RpdmUiLCJyb290Q29udGFpbmVyIiwiaXNIeWRyYXRlIiwibGFzdEFwcCIsImN1cnJlbnRBcHAiLCJwYXJlbnRQcm92aWRlcyIsInRyZWF0RGVmYXVsdEFzRmFjdG9yeSIsImludGVybmFsT2JqZWN0UHJvdG8iLCJjcmVhdGVJbnRlcm5hbE9iamVjdCIsImlzSW50ZXJuYWxPYmplY3QiLCJpbml0UHJvcHMiLCJpc1N0YXRlZnVsIiwiYXR0cnMiLCJzZXRGdWxsUHJvcHMiLCJ1cGRhdGVQcm9wcyIsInJhd1ByZXZQcm9wcyIsInBhdGNoRmxhZyIsInJhd0N1cnJlbnRQcm9wcyIsImhhc0F0dHJzQ2hhbmdlZCIsInByb3BzVG9VcGRhdGUiLCJpc0VtaXRMaXN0ZW5lciIsImNhbWVsaXplZEtleSIsInJlc29sdmVQcm9wVmFsdWUiLCJrZWJhYktleSIsIm5lZWRDYXN0S2V5cyIsInJhd0Nhc3RWYWx1ZXMiLCJjYW1lbEtleSIsImNhc3RWYWx1ZXMiLCJpc0Fic2VudCIsImhhc0RlZmF1bHQiLCJwcm9wc0RlZmF1bHRzIiwibWl4aW5Qcm9wc0NhY2hlIiwibm9ybWFsaXplUHJvcHNPcHRpb25zIiwiaGFzRXh0ZW5kcyIsImV4dGVuZFByb3BzIiwicmF3MiIsIm5vcm1hbGl6ZWRLZXkiLCJ2YWxpZGF0ZVByb3BOYW1lIiwicHJvcCIsInByb3BUeXBlIiwic2hvdWxkQ2FzdCIsInNob3VsZENhc3RUcnVlIiwidHlwZU5hbWUiLCJpc0ludGVybmFsS2V5Iiwibm9ybWFsaXplU2xvdFZhbHVlIiwibm9ybWFsaXplVk5vZGUiLCJub3JtYWxpemVTbG90IiwicmF3U2xvdCIsIm5vcm1hbGl6ZU9iamVjdFNsb3RzIiwicmF3U2xvdHMiLCJub3JtYWxpemVWTm9kZVNsb3RzIiwiYXNzaWduU2xvdHMiLCJpbml0U2xvdHMiLCJ1cGRhdGVTbG90cyIsIm5lZWREZWxldGlvbkNoZWNrIiwiZGVsZXRpb25Db21wYXJpc29uVGFyZ2V0IiwicXVldWVFZmZlY3RXaXRoU3VzcGVuc2UiLCJjcmVhdGVSZW5kZXJlciIsImJhc2VDcmVhdGVSZW5kZXJlciIsImNyZWF0ZUh5ZHJhdGlvbkZucyIsImhvc3RJbnNlcnQiLCJob3N0UGF0Y2hQcm9wIiwiaG9zdENyZWF0ZUVsZW1lbnQiLCJob3N0Q3JlYXRlVGV4dCIsImhvc3RDcmVhdGVDb21tZW50IiwiaG9zdFNldFRleHQiLCJob3N0U2V0RWxlbWVudFRleHQiLCJob3N0UGFyZW50Tm9kZSIsImhvc3ROZXh0U2libGluZyIsImhvc3RTZXRTY29wZUlkIiwiaG9zdEluc2VydFN0YXRpY0NvbnRlbnQiLCJwYXRjaCIsImdldE5leHRIb3N0Tm9kZSIsIlRleHQiLCJwcm9jZXNzVGV4dCIsInByb2Nlc3NDb21tZW50Tm9kZSIsIlN0YXRpYyIsIm1vdW50U3RhdGljTm9kZSIsInByb2Nlc3NGcmFnbWVudCIsInByb2Nlc3NFbGVtZW50IiwicHJvY2Vzc0NvbXBvbmVudCIsIm1vdmVTdGF0aWNOb2RlIiwicmVtb3ZlU3RhdGljTm9kZSIsIm1vdW50RWxlbWVudCIsInBhdGNoRWxlbWVudCIsInZub2RlSG9vayIsInRyYW5zaXRpb24iLCJkaXJzIiwicmVzb2x2ZUNoaWxkcmVuTmFtZXNwYWNlIiwic2V0U2NvcGVJZCIsImludm9rZVZOb2RlSG9vayIsIm5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzIiwibmVlZFRyYW5zaXRpb24iLCJzY29wZUlkIiwiaXNTdXNwZW5zZSIsInBhcmVudFZOb2RlIiwiY2xvbmVJZk1vdW50ZWQiLCJvbGRQcm9wcyIsIm5ld1Byb3BzIiwidG9nZ2xlUmVjdXJzZSIsInBhdGNoUHJvcHMiLCJvbGRDaGlsZHJlbiIsIm5ld0NoaWxkcmVuIiwiZmFsbGJhY2tDb250YWluZXIiLCJvbGRWTm9kZSIsIm5ld1ZOb2RlIiwiZnJhZ21lbnRTdGFydEFuY2hvciIsImZyYWdtZW50RW5kQW5jaG9yIiwiZnJhZ21lbnRTbG90U2NvcGVJZHMiLCJtb3VudENvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudCIsImluaXRpYWxWTm9kZSIsImNyZWF0ZUNvbXBvbmVudEluc3RhbmNlIiwic2V0dXBDb21wb25lbnQiLCJzZXR1cFJlbmRlckVmZmVjdCIsInNob3VsZFVwZGF0ZUNvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudFByZVJlbmRlciIsImNvbXBvbmVudFVwZGF0ZUZuIiwiYnUiLCJ1Iiwibm9uSHlkcmF0ZWRBc3luY1Jvb3QiLCJsb2NhdGVOb25IeWRyYXRlZEFzeW5jUm9vdCIsIm9yaWdpbk5leHQiLCJuZXh0VHJlZSIsInJlbmRlckNvbXBvbmVudFJvb3QiLCJwcmV2VHJlZSIsInVwZGF0ZUhPQ0hvc3RFbCIsImJtIiwicm9vdCIsImlzQXN5bmNXcmFwcGVyVk5vZGUiLCJzY29wZWRJbml0aWFsVk5vZGUiLCJ1cGRhdGUiLCJuZXh0Vk5vZGUiLCJwcmV2UHJvcHMiLCJjMSIsInByZXZTaGFwZUZsYWciLCJjMiIsInBhdGNoS2V5ZWRDaGlsZHJlbiIsInBhdGNoVW5rZXllZENoaWxkcmVuIiwidW5tb3VudENoaWxkcmVuIiwib2xkTGVuZ3RoIiwiY29tbW9uTGVuZ3RoIiwibmV4dENoaWxkIiwibDIiLCJlMSIsImUyIiwibmV4dFBvcyIsInMxIiwiczIiLCJrZXlUb05ld0luZGV4TWFwIiwiaiIsInBhdGNoZWQiLCJ0b0JlUGF0Y2hlZCIsIm1vdmVkIiwibWF4TmV3SW5kZXhTb0ZhciIsIm5ld0luZGV4VG9PbGRJbmRleE1hcCIsInByZXZDaGlsZCIsIm5ld0luZGV4IiwiaW5jcmVhc2luZ05ld0luZGV4U2VxdWVuY2UiLCJnZXRTZXF1ZW5jZSIsIm5leHRJbmRleCIsImxlYXZlIiwiZGVsYXlMZWF2ZSIsImFmdGVyTGVhdmUiLCJyZW1vdmUyIiwicGVyZm9ybUxlYXZlIiwiY2FjaGVJbmRleCIsInNob3VsZEludm9rZURpcnMiLCJzaG91bGRJbnZva2VWbm9kZUhvb2siLCJ1bm1vdW50Q29tcG9uZW50IiwicmVtb3ZlRnJhZ21lbnQiLCJwZXJmb3JtUmVtb3ZlIiwiYnVtIiwidW0iLCJpbnZhbGlkYXRlTW91bnQiLCJ0ZWxlcG9ydEVuZCIsImlzRmx1c2hpbmciLCJjdXJyZW50TmFtZXNwYWNlIiwiYWxsb3dlZCIsImNoMSIsImNoMiIsImxlbiIsImFyckkiLCJzdWJDb21wb25lbnQiLCJzc3JDb250ZXh0S2V5IiwidXNlU1NSQ29udGV4dCIsIndhdGNoRWZmZWN0IiwiZG9XYXRjaCIsImZsdXNoIiwiYmFzZVdhdGNoT3B0aW9ucyIsInJ1bnNJbW1lZGlhdGVseSIsInNzckNsZWFudXAiLCJ3YXRjaFN0b3BIYW5kbGUiLCJpc1ByZSIsImlzRmlyc3RSdW4iLCJ3YXRjaCQxIiwicGF0aCIsInNlZ21lbnRzIiwiZ2V0TW9kZWxNb2RpZmllcnMiLCJtb2RlbE5hbWUiLCJlbWl0IiwiZXZlbnQiLCJyYXdBcmdzIiwiaGFuZGxlck5hbWUiLCJvbmNlSGFuZGxlciIsIm5vcm1hbGl6ZUVtaXRzT3B0aW9ucyIsImV4dGVuZEVtaXRzIiwibm9ybWFsaXplZEZyb21FeHRlbmQiLCJ3aXRoUHJveHkiLCJyZW5kZXJDYWNoZSIsImZhbGx0aHJvdWdoQXR0cnMiLCJwcm94eVRvVXNlIiwidGhpc1Byb3h5IiwicmVuZGVyMiIsImdldEZ1bmN0aW9uYWxGYWxsdGhyb3VnaCIsImJsb2NrU3RhY2siLCJmaWx0ZXJNb2RlbExpc3RlbmVycyIsImZpbHRlclNpbmdsZVJvb3QiLCJyZWN1cnNlIiwic2luZ2xlUm9vdCIsInByZXZDaGlsZHJlbiIsIm5leHRQcm9wcyIsIm5leHRDaGlsZHJlbiIsImVtaXRzIiwiaGFzUHJvcHNDaGFuZ2VkIiwiZHluYW1pY1Byb3BzIiwiZW1pdHNPcHRpb25zIiwibmV4dEtleXMiLCJzdXNwZW5zZUlkIiwiU3VzcGVuc2VJbXBsIiwicmVuZGVyZXJJbnRlcm5hbHMiLCJtb3VudFN1c3BlbnNlIiwicGF0Y2hTdXNwZW5zZSIsImh5ZHJhdGVTdXNwZW5zZSIsIm5vcm1hbGl6ZVN1c3BlbnNlQ2hpbGRyZW4iLCJTdXNwZW5zZSIsInRyaWdnZXJFdmVudCIsImV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFbGVtZW50IiwiaGlkZGVuQ29udGFpbmVyIiwic3VzcGVuc2UiLCJjcmVhdGVTdXNwZW5zZUJvdW5kYXJ5Iiwic2V0QWN0aXZlQnJhbmNoIiwibmV3QnJhbmNoIiwibmV3RmFsbGJhY2siLCJhY3RpdmVCcmFuY2giLCJwZW5kaW5nQnJhbmNoIiwiaXNJbkZhbGxiYWNrIiwiaXNIeWRyYXRpbmciLCJwZW5kaW5nSWQiLCJwYXJlbnRTdXNwZW5zZUlkIiwiaXNTdXNwZW5zaWJsZSIsImlzVk5vZGVTdXNwZW5zaWJsZSIsImluaXRpYWxBbmNob3IiLCJyZXN1bWUiLCJzeW5jIiwiZWZmZWN0cyIsInBhcmVudENvbXBvbmVudDIiLCJkZWxheUVudGVyIiwiaGFzVW5yZXNvbHZlZEFuY2VzdG9yIiwiZmFsbGJhY2tWTm9kZSIsIm5hbWVzcGFjZTIiLCJtb3VudEZhbGxiYWNrIiwib3B0aW1pemVkMiIsImlzSW5QZW5kaW5nU3VzcGVuc2UiLCJoeWRyYXRlZEVsIiwiYXN5bmNTZXR1cFJlc3VsdCIsImhhbmRsZVNldHVwUmVzdWx0IiwicGFyZW50U3VzcGVuc2UyIiwiaHlkcmF0ZU5vZGUiLCJpc1Nsb3RDaGlsZHJlbiIsIm5vcm1hbGl6ZVN1c3BlbnNlU2xvdCIsImJsb2NrIiwidHJhY2tCbG9jayIsImlzQmxvY2tUcmVlRW5hYmxlZCIsImN1cnJlbnRCbG9jayIsImNsb3NlQmxvY2siLCJicmFuY2giLCJkaXNhYmxlVHJhY2tpbmciLCJpblZPbmNlIiwic2V0dXBCbG9jayIsImNyZWF0ZUVsZW1lbnRCbG9jayIsImNyZWF0ZUJhc2VWTm9kZSIsIm5vcm1hbGl6ZUtleSIsIm5vcm1hbGl6ZVJlZiIsInJlZl9rZXkiLCJyZWZfZm9yIiwiaXNCbG9ja05vZGUiLCJuZWVkRnVsbENoaWxkcmVuTm9ybWFsaXphdGlvbiIsIm5vcm1hbGl6ZUNoaWxkcmVuIiwiX2NyZWF0ZVZOb2RlIiwiY2xvbmVkIiwiaXNDbGFzc0NvbXBvbmVudCIsImd1YXJkUmVhY3RpdmVQcm9wcyIsImtsYXNzIiwic3R5bGUiLCJleHRyYVByb3BzIiwibWVyZ2VSZWYiLCJjbG9uZVRyYW5zaXRpb24iLCJtZXJnZWRQcm9wcyIsIm1lcmdlUHJvcHMiLCJjcmVhdGVUZXh0Vk5vZGUiLCJ0ZXh0IiwiZmxhZyIsImNyZWF0ZUNvbW1lbnRWTm9kZSIsImFzQmxvY2siLCJzbG90RmxhZyIsInRvTWVyZ2UiLCJpbmNvbWluZyIsImVtcHR5QXBwQ29udGV4dCIsInVpZCIsImludGVybmFsU2V0Q3VycmVudEluc3RhbmNlIiwic2V0SW5TU1JTZXR1cFN0YXRlIiwiZyIsInJlZ2lzdGVyR2xvYmFsU2V0dGVyIiwic2V0dGVycyIsInVuc2V0Q3VycmVudEluc3RhbmNlIiwic2V0dXBSZXN1bHQiLCJzZXR1cFN0YXRlZnVsQ29tcG9uZW50Iiwic2V0dXAiLCJzZXR1cENvbnRleHQiLCJjcmVhdGVTZXR1cENvbnRleHQiLCJpc0FzeW5jU2V0dXAiLCJyZXNvbHZlZFJlc3VsdCIsImZpbmlzaENvbXBvbmVudFNldHVwIiwic2tpcE9wdGlvbnMiLCJhdHRyc1Byb3h5SGFuZGxlcnMiLCJpbmNsdWRlSW5mZXJyZWQiLCJjb21wdXRlZCQxIiwicHJvcHNPckNoaWxkcmVuIiwicG9saWN5IiwidHQiLCJ1bnNhZmVUb1RydXN0ZWRIVE1MIiwic3ZnTlMiLCJtYXRobWxOUyIsImRvYyIsInRlbXBsYXRlQ29udGFpbmVyIiwibm9kZU9wcyIsInRhZyIsImlzIiwic2VsZWN0b3IiLCJjb250ZW50IiwiYmVmb3JlIiwidGVtcGxhdGUiLCJ3cmFwcGVyIiwiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInZ0Y0tleSIsIkRPTVRyYW5zaXRpb25Qcm9wc1ZhbGlkYXRvcnMiLCJUcmFuc2l0aW9uUHJvcHNWYWxpZGF0b3JzIiwiZGVjb3JhdGUkMSIsInQiLCJUcmFuc2l0aW9uIiwicmVzb2x2ZVRyYW5zaXRpb25Qcm9wcyIsImgyIiwiaGFzRXhwbGljaXRDYWxsYmFjayIsImJhc2VQcm9wcyIsImR1cmF0aW9uIiwiZW50ZXJGcm9tQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwiZW50ZXJUb0NsYXNzIiwiYXBwZWFyRnJvbUNsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwibGVhdmVGcm9tQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwiZHVyYXRpb25zIiwibm9ybWFsaXplRHVyYXRpb24iLCJlbnRlckR1cmF0aW9uIiwibGVhdmVEdXJhdGlvbiIsImZpbmlzaEVudGVyIiwiaXNBcHBlYXIiLCJpc0NhbmNlbGxlZCIsInJlbW92ZVRyYW5zaXRpb25DbGFzcyIsImZpbmlzaExlYXZlIiwibWFrZUVudGVySG9vayIsIm5leHRGcmFtZSIsImFkZFRyYW5zaXRpb25DbGFzcyIsIndoZW5UcmFuc2l0aW9uRW5kcyIsImZvcmNlUmVmbG93IiwiTnVtYmVyT2YiLCJjbHMiLCJfdnRjIiwiZW5kSWQiLCJleHBlY3RlZFR5cGUiLCJleHBsaWNpdFRpbWVvdXQiLCJyZXNvbHZlSWZOb3RTdGFsZSIsInByb3BDb3VudCIsImdldFRyYW5zaXRpb25JbmZvIiwiZW5kRXZlbnQiLCJlbmRlZCIsIm9uRW5kIiwic3R5bGVzIiwiZ2V0U3R5bGVQcm9wZXJ0aWVzIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwiaGFzVHJhbnNmb3JtIiwiZGVsYXlzIiwiZCIsInRvTXMiLCJwYXRjaENsYXNzIiwiaXNTVkciLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsInZTaG93T3JpZ2luYWxEaXNwbGF5IiwidlNob3dIaWRkZW4iLCJ2U2hvdyIsInNldERpc3BsYXkiLCJDU1NfVkFSX1RFWFQiLCJkaXNwbGF5UkUiLCJwYXRjaFN0eWxlIiwiaXNDc3NTdHJpbmciLCJoYXNDb250cm9sbGVkRGlzcGxheSIsInByZXZTdHlsZSIsInNldFN0eWxlIiwiY3NzVmFyVGV4dCIsImltcG9ydGFudFJFIiwicHJlZml4ZWQiLCJhdXRvUHJlZml4IiwicHJlZml4ZXMiLCJwcmVmaXhDYWNoZSIsInJhd05hbWUiLCJ4bGlua05TIiwicGF0Y2hBdHRyIiwiaXNCb29sZWFuIiwicGF0Y2hET01Qcm9wIiwiYXR0ck5hbWUiLCJuZWVkUmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2ZWlLZXkiLCJwYXRjaEV2ZW50IiwicHJldlZhbHVlIiwibmV4dFZhbHVlIiwiaW52b2tlcnMiLCJleGlzdGluZ0ludm9rZXIiLCJwYXJzZU5hbWUiLCJpbnZva2VyIiwiY3JlYXRlSW52b2tlciIsIm9wdGlvbnNNb2RpZmllclJFIiwiY2FjaGVkTm93IiwiZ2V0Tm93IiwiaW5pdGlhbFZhbHVlIiwicGF0Y2hTdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJvcmlnaW5hbFN0b3AiLCJpc05hdGl2ZU9uIiwicGF0Y2hQcm9wIiwic2hvdWxkU2V0QXNQcm9wIiwiY2FtZWxpemUkMSIsInBvc2l0aW9uTWFwIiwibmV3UG9zaXRpb25NYXAiLCJtb3ZlQ2JLZXkiLCJkZWNvcmF0ZSIsIlRyYW5zaXRpb25Hcm91cEltcGwiLCJtb3ZlQ2xhc3MiLCJoYXNDU1NUcmFuc2Zvcm0iLCJjYWxsUGVuZGluZ0NicyIsInJlY29yZFBvc2l0aW9uIiwibW92ZWRDaGlsZHJlbiIsImFwcGx5VHJhbnNsYXRpb24iLCJjc3NUcmFuc2l0aW9uUHJvcHMiLCJUcmFuc2l0aW9uR3JvdXAiLCJvbGRQb3MiLCJuZXdQb3MiLCJkeCIsImR5IiwiY2xvbmUiLCJyZW5kZXJlck9wdGlvbnMiLCJyZW5kZXJlciIsImVuc3VyZVJlbmRlcmVyIiwiY3JlYXRlQXBwIiwiY29udGFpbmVyT3JTZWxlY3RvciIsIm5vcm1hbGl6ZUNvbnRhaW5lciIsInJlc29sdmVSb290TmFtZXNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUVBLFNBQVNBLEdBQVFDLEdBQUs7QUFDZCxRQUFBQyxJQUE2Qix1QkFBQSxPQUFPLElBQUk7QUFDOUMsYUFBV0MsS0FBT0YsRUFBSSxNQUFNLEdBQUcsRUFBRyxDQUFBQyxFQUFJQyxDQUFHLElBQUk7QUFDdEMsU0FBQSxDQUFDQyxNQUFRQSxLQUFPRjtBQUN6QjtBQUVBLE1BQU1HLElBQTRFLENBQUMsR0FDN0VDLEtBQTRFLENBQUMsR0FDN0VDLEtBQU8sTUFBTTtBQUNuQixHQUNNQyxLQUFLLE1BQU0sSUFDWEMsS0FBTyxDQUFDTixNQUFRQSxFQUFJLFdBQVcsQ0FBQyxNQUFNLE9BQU9BLEVBQUksV0FBVyxDQUFDLE1BQU07QUFBQSxDQUN4RUEsRUFBSSxXQUFXLENBQUMsSUFBSSxPQUFPQSxFQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQzFDTyxLQUFrQixDQUFDUCxNQUFRQSxFQUFJLFdBQVcsV0FBVyxHQUNyRFEsS0FBUyxPQUFPLFFBQ2hCQyxLQUFTLENBQUNDLEdBQUtDLE1BQU87QUFDcEIsUUFBQUMsSUFBSUYsRUFBSSxRQUFRQyxDQUFFO0FBQ3hCLEVBQUlDLElBQUksTUFDRkYsRUFBQSxPQUFPRSxHQUFHLENBQUM7QUFFbkIsR0FDTUMsS0FBaUIsT0FBTyxVQUFVLGdCQUNsQ0MsSUFBUyxDQUFDYixHQUFLRCxNQUFRYSxHQUFlLEtBQUtaLEdBQUtELENBQUcsR0FDbkRlLElBQVUsTUFBTSxTQUNoQkMsS0FBUSxDQUFDZixNQUFRZ0IsR0FBYWhCLENBQUcsTUFBTSxnQkFDdkNpQixLQUFRLENBQUNqQixNQUFRZ0IsR0FBYWhCLENBQUcsTUFBTSxnQkFHdkNrQixJQUFhLENBQUNsQixNQUFRLE9BQU9BLEtBQVEsWUFDckNtQixLQUFXLENBQUNuQixNQUFRLE9BQU9BLEtBQVEsVUFDbkNvQixLQUFXLENBQUNwQixNQUFRLE9BQU9BLEtBQVEsVUFDbkNxQixLQUFXLENBQUNyQixNQUFRQSxNQUFRLFFBQVEsT0FBT0EsS0FBUSxVQUNuRHNCLEtBQVksQ0FBQ3RCLE9BQ1RxQixHQUFTckIsQ0FBRyxLQUFLa0IsRUFBV2xCLENBQUcsTUFBTWtCLEVBQVdsQixFQUFJLElBQUksS0FBS2tCLEVBQVdsQixFQUFJLEtBQUssR0FFckZ1QixLQUFpQixPQUFPLFVBQVUsVUFDbENQLEtBQWUsQ0FBQ1EsTUFBVUQsR0FBZSxLQUFLQyxDQUFLLEdBQ25EQyxLQUFZLENBQUNELE1BQ1ZSLEdBQWFRLENBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxHQUVsQ0UsS0FBZ0IsQ0FBQzFCLE1BQVFnQixHQUFhaEIsQ0FBRyxNQUFNLG1CQUMvQzJCLEtBQWUsQ0FBQzVCLE1BQVFvQixHQUFTcEIsQ0FBRyxLQUFLQSxNQUFRLFNBQVNBLEVBQUksQ0FBQyxNQUFNLE9BQU8sS0FBSyxTQUFTQSxHQUFLLEVBQUUsTUFBTUEsR0FDdkc2QixLQUFpQyxnQkFBQWhDO0FBQUE7QUFBQSxFQUVyQztBQUNGLEdBSU1pQyxLQUFzQixDQUFDQyxNQUFPO0FBQzVCLFFBQUFDLElBQStCLHVCQUFBLE9BQU8sSUFBSTtBQUNoRCxTQUFPLENBQUNsQyxNQUNNa0MsRUFBTWxDLENBQUcsTUFDTmtDLEVBQU1sQyxDQUFHLElBQUlpQyxFQUFHakMsQ0FBRztBQUV0QyxHQUNNbUMsS0FBYSxVQUNiQyxLQUFXSjtBQUFBLEVBQ2YsQ0FBQ2hDLE1BQ1FBLEVBQUksUUFBUW1DLElBQVksQ0FBQ0UsR0FBR0MsTUFBTUEsSUFBSUEsRUFBRSxZQUFZLElBQUksRUFBRTtBQUVyRSxHQUNNQyxLQUFjLGNBQ2RDLEtBQVlSO0FBQUEsRUFDaEIsQ0FBQ2hDLE1BQVFBLEVBQUksUUFBUXVDLElBQWEsS0FBSyxFQUFFLFlBQVk7QUFDdkQsR0FDTUUsS0FBYVQsR0FBb0IsQ0FBQ2hDLE1BQy9CQSxFQUFJLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQkEsRUFBSSxNQUFNLENBQUMsQ0FDakQsR0FDSzBDLEtBQWVWO0FBQUEsRUFDbkIsQ0FBQ2hDLE1BQ1dBLElBQU0sS0FBS3lDLEdBQVd6QyxDQUFHLENBQUMsS0FBSztBQUc3QyxHQUNNMkMsS0FBYSxDQUFDaEIsR0FBT2lCLE1BQWEsQ0FBQyxPQUFPLEdBQUdqQixHQUFPaUIsQ0FBUSxHQUM1REMsS0FBaUIsQ0FBQ0MsTUFBUUMsTUFBUTtBQUN0QyxXQUFTakMsSUFBSSxHQUFHQSxJQUFJZ0MsRUFBSSxRQUFRaEM7QUFDMUIsSUFBQWdDLEVBQUFoQyxDQUFDLEVBQUUsR0FBR2lDLENBQUc7QUFFakIsR0FDTUMsS0FBTSxDQUFDQyxHQUFLL0MsR0FBS3lCLEdBQU91QixJQUFXLE9BQVU7QUFDMUMsU0FBQSxlQUFlRCxHQUFLL0MsR0FBSztBQUFBLElBQzlCLGNBQWM7QUFBQSxJQUNkLFlBQVk7QUFBQSxJQUNaLFVBQUFnRDtBQUFBLElBQ0EsT0FBQXZCO0FBQUEsRUFBQSxDQUNEO0FBQ0gsR0FDTXdCLEtBQWdCLENBQUNoRCxNQUFRO0FBQ3ZCLFFBQUFpRCxJQUFJLFdBQVdqRCxDQUFHO0FBQ2pCLFNBQUEsTUFBTWlELENBQUMsSUFBSWpELElBQU1pRDtBQUMxQixHQUNNQyxLQUFXLENBQUNsRCxNQUFRO0FBQ3hCLFFBQU1pRCxJQUFJOUIsR0FBU25CLENBQUcsSUFBSSxPQUFPQSxDQUFHLElBQUk7QUFDakMsU0FBQSxNQUFNaUQsQ0FBQyxJQUFJakQsSUFBTWlEO0FBQzFCO0FBQ0EsSUFBSUU7QUFDSixNQUFNQyxLQUFnQixNQUNiRCxPQUFnQkEsS0FBYyxPQUFPLGNBQWUsY0FBYyxhQUFhLE9BQU8sUUFBUyxjQUFjLE9BQU8sT0FBTyxVQUFXLGNBQWMsU0FBUyxPQUFPLFVBQVcsY0FBYyxTQUFTO0FBaUovTSxTQUFTRSxHQUFlN0IsR0FBTztBQUN6QixNQUFBVixFQUFRVSxDQUFLLEdBQUc7QUFDbEIsVUFBTThCLElBQU0sQ0FBQztBQUNiLGFBQVMzQyxJQUFJLEdBQUdBLElBQUlhLEVBQU0sUUFBUWIsS0FBSztBQUMvQixZQUFBNEMsSUFBTy9CLEVBQU1iLENBQUMsR0FDZDZDLElBQWFyQyxHQUFTb0MsQ0FBSSxJQUFJRSxHQUFpQkYsQ0FBSSxJQUFJRixHQUFlRSxDQUFJO0FBQ2hGLFVBQUlDO0FBQ0YsbUJBQVd6RCxLQUFPeUQ7QUFDWixVQUFBRixFQUFBdkQsQ0FBRyxJQUFJeUQsRUFBV3pELENBQUc7QUFBQSxJQUU3QjtBQUVLLFdBQUF1RDtBQUFBLGFBQ0VuQyxHQUFTSyxDQUFLLEtBQUtILEdBQVNHLENBQUs7QUFDbkMsV0FBQUE7QUFFWDtBQUNBLE1BQU1rQyxLQUFrQixpQkFDbEJDLEtBQXNCLFdBQ3RCQyxLQUFpQjtBQUN2QixTQUFTSCxHQUFpQkksR0FBUztBQUNqQyxRQUFNQyxJQUFNLENBQUM7QUFDTCxTQUFBRCxFQUFBLFFBQVFELElBQWdCLEVBQUUsRUFBRSxNQUFNRixFQUFlLEVBQUUsUUFBUSxDQUFDSCxNQUFTO0FBQzNFLFFBQUlBLEdBQU07QUFDRixZQUFBUSxJQUFNUixFQUFLLE1BQU1JLEVBQW1CO0FBQzFDLE1BQUFJLEVBQUksU0FBUyxNQUFNRCxFQUFJQyxFQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSUEsRUFBSSxDQUFDLEVBQUUsS0FBSztBQUFBLElBQUE7QUFBQSxFQUN0RCxDQUNELEdBQ01EO0FBQ1Q7QUFjQSxTQUFTRSxHQUFleEMsR0FBTztBQUM3QixNQUFJOEIsSUFBTTtBQUNOLE1BQUFuQyxHQUFTSyxDQUFLO0FBQ1YsSUFBQThCLElBQUE5QjtBQUFBLFdBQ0dWLEVBQVFVLENBQUs7QUFDdEIsYUFBU2IsSUFBSSxHQUFHQSxJQUFJYSxFQUFNLFFBQVFiLEtBQUs7QUFDckMsWUFBTTZDLElBQWFRLEdBQWV4QyxFQUFNYixDQUFDLENBQUM7QUFDMUMsTUFBSTZDLE1BQ0ZGLEtBQU9FLElBQWE7QUFBQSxJQUN0QjtBQUFBLFdBRU9uQyxHQUFTRyxDQUFLO0FBQ3ZCLGVBQVd5QyxLQUFRekM7QUFDYixNQUFBQSxFQUFNeUMsQ0FBSSxNQUNaWCxLQUFPVyxJQUFPO0FBSXBCLFNBQU9YLEVBQUksS0FBSztBQUNsQjtBQXNCQSxNQUFNWSxLQUFzQiwrRUFDdEJDLHdCQUErQ0QsRUFBbUI7QUFJeEUsU0FBU0UsR0FBbUI1QyxHQUFPO0FBQzFCLFNBQUEsQ0FBQyxDQUFDQSxLQUFTQSxNQUFVO0FBQzlCO0FBeUlBLE1BQU02QyxLQUFRLENBQUNyRSxNQUNOLENBQUMsRUFBRUEsS0FBT0EsRUFBSSxjQUFpQixLQUVsQ3NFLEtBQWtCLENBQUN0RSxNQUNoQm1CLEdBQVNuQixDQUFHLElBQUlBLElBQU1BLEtBQU8sT0FBTyxLQUFLYyxFQUFRZCxDQUFHLEtBQUtxQixHQUFTckIsQ0FBRyxNQUFNQSxFQUFJLGFBQWF1QixNQUFrQixDQUFDTCxFQUFXbEIsRUFBSSxRQUFRLEtBQUtxRSxHQUFNckUsQ0FBRyxJQUFJc0UsR0FBZ0J0RSxFQUFJLEtBQUssSUFBSSxLQUFLLFVBQVVBLEdBQUt1RSxJQUFVLENBQUMsSUFBSSxPQUFPdkUsQ0FBRyxHQUVyT3VFLEtBQVcsQ0FBQ0MsR0FBTXhFLE1BQ2xCcUUsR0FBTXJFLENBQUcsSUFDSnVFLEdBQVNDLEdBQU14RSxFQUFJLEtBQUssSUFDdEJlLEdBQU1mLENBQUcsSUFDWDtBQUFBLEVBQ0wsQ0FBQyxPQUFPQSxFQUFJLElBQUksR0FBRyxHQUFHLENBQUMsR0FBR0EsRUFBSSxRQUFTLENBQUEsRUFBRTtBQUFBLElBQ3ZDLENBQUN5RSxHQUFTLENBQUMxRSxHQUFLMkUsQ0FBSSxHQUFHLE9BQ3JCRCxFQUFRRSxHQUFnQjVFLEdBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTJFLEdBQ3BDRDtBQUFBLElBRVQsQ0FBQTtBQUFBLEVBQUM7QUFFTCxJQUNTeEQsR0FBTWpCLENBQUcsSUFDWDtBQUFBLEVBQ0wsQ0FBQyxPQUFPQSxFQUFJLElBQUksR0FBRyxHQUFHLENBQUMsR0FBR0EsRUFBSSxPQUFBLENBQVEsRUFBRSxJQUFJLENBQUM0RSxNQUFNRCxHQUFnQkMsQ0FBQyxDQUFDO0FBQ3ZFLElBQ1N4RCxHQUFTcEIsQ0FBRyxJQUNkMkUsR0FBZ0IzRSxDQUFHLElBQ2pCcUIsR0FBU3JCLENBQUcsS0FBSyxDQUFDYyxFQUFRZCxDQUFHLEtBQUssQ0FBQzBCLEdBQWMxQixDQUFHLElBQ3RELE9BQU9BLENBQUcsSUFFWkEsR0FFSDJFLEtBQWtCLENBQUNDLEdBQUdqRSxJQUFJLE9BQU87QUFDakMsTUFBQWtFO0FBQ0o7QUFBQTtBQUFBO0FBQUEsSUFHRXpELEdBQVN3RCxDQUFDLElBQUksV0FBV0MsSUFBS0QsRUFBRSxnQkFBZ0IsT0FBT0MsSUFBS2xFLENBQUMsTUFBTWlFO0FBQUE7QUFFdkU7QUNwZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQSxJQUFJRTtBQUNKLE1BQU1DLEdBQVk7QUFBQSxFQUNoQixZQUFZQyxJQUFXLElBQU87QUFDNUIsU0FBSyxXQUFXQSxHQUloQixLQUFLLFVBQVUsSUFJZixLQUFLLFVBQVUsQ0FBQyxHQUloQixLQUFLLFdBQVcsQ0FBQyxHQUNqQixLQUFLLFlBQVksSUFDakIsS0FBSyxTQUFTRixJQUNWLENBQUNFLEtBQVlGLE9BQ2YsS0FBSyxTQUFTQSxHQUFrQixXQUFXQSxHQUFrQixTQUFTLENBQUssSUFBQTtBQUFBLE1BQ3pFO0FBQUEsSUFBQSxJQUNFO0FBQUEsRUFDTjtBQUFBLEVBRUYsSUFBSSxTQUFTO0FBQ1gsV0FBTyxLQUFLO0FBQUEsRUFBQTtBQUFBLEVBRWQsUUFBUTtBQUNOLFFBQUksS0FBSyxTQUFTO0FBQ2hCLFdBQUssWUFBWTtBQUNqQixVQUFJbkUsR0FBR3NFO0FBQ1AsVUFBSSxLQUFLO0FBQ0YsYUFBQXRFLElBQUksR0FBR3NFLElBQUksS0FBSyxPQUFPLFFBQVF0RSxJQUFJc0UsR0FBR3RFO0FBQ3BDLGVBQUEsT0FBT0EsQ0FBQyxFQUFFLE1BQU07QUFHcEIsV0FBQUEsSUFBSSxHQUFHc0UsSUFBSSxLQUFLLFFBQVEsUUFBUXRFLElBQUlzRSxHQUFHdEU7QUFDckMsYUFBQSxRQUFRQSxDQUFDLEVBQUUsTUFBTTtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0YsU0FBUztBQUNQLFFBQUksS0FBSyxXQUNILEtBQUssV0FBVztBQUNsQixXQUFLLFlBQVk7QUFDakIsVUFBSUEsR0FBR3NFO0FBQ1AsVUFBSSxLQUFLO0FBQ0YsYUFBQXRFLElBQUksR0FBR3NFLElBQUksS0FBSyxPQUFPLFFBQVF0RSxJQUFJc0UsR0FBR3RFO0FBQ3BDLGVBQUEsT0FBT0EsQ0FBQyxFQUFFLE9BQU87QUFHckIsV0FBQUEsSUFBSSxHQUFHc0UsSUFBSSxLQUFLLFFBQVEsUUFBUXRFLElBQUlzRSxHQUFHdEU7QUFDckMsYUFBQSxRQUFRQSxDQUFDLEVBQUUsT0FBTztBQUFBLElBQ3pCO0FBQUEsRUFFSjtBQUFBLEVBRUYsSUFBSW1CLEdBQUk7QUFDTixRQUFJLEtBQUssU0FBUztBQUNoQixZQUFNb0QsSUFBcUJKO0FBQ3ZCLFVBQUE7QUFDa0IsZUFBQUEsS0FBQSxNQUNiaEQsRUFBRztBQUFBLE1BQUEsVUFDVjtBQUNvQixRQUFBZ0QsS0FBQUk7QUFBQSxNQUFBO0FBQUEsSUFDdEI7QUFBQSxFQUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1GLEtBQUs7QUFDaUIsSUFBQUosS0FBQTtBQUFBLEVBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTXRCLE1BQU07QUFDSixJQUFBQSxLQUFvQixLQUFLO0FBQUEsRUFBQTtBQUFBLEVBRTNCLEtBQUtLLEdBQVk7QUFDZixRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFVBQVU7QUFDZixVQUFJeEUsR0FBR3NFO0FBQ0YsV0FBQXRFLElBQUksR0FBR3NFLElBQUksS0FBSyxRQUFRLFFBQVF0RSxJQUFJc0UsR0FBR3RFO0FBQ3JDLGFBQUEsUUFBUUEsQ0FBQyxFQUFFLEtBQUs7QUFHbEIsV0FETCxLQUFLLFFBQVEsU0FBUyxHQUNqQkEsSUFBSSxHQUFHc0UsSUFBSSxLQUFLLFNBQVMsUUFBUXRFLElBQUlzRSxHQUFHdEU7QUFDdEMsYUFBQSxTQUFTQSxDQUFDLEVBQUU7QUFHbkIsVUFEQSxLQUFLLFNBQVMsU0FBUyxHQUNuQixLQUFLLFFBQVE7QUFDVixhQUFBQSxJQUFJLEdBQUdzRSxJQUFJLEtBQUssT0FBTyxRQUFRdEUsSUFBSXNFLEdBQUd0RTtBQUN6QyxlQUFLLE9BQU9BLENBQUMsRUFBRSxLQUFLLEVBQUk7QUFFMUIsYUFBSyxPQUFPLFNBQVM7QUFBQSxNQUFBO0FBRXZCLFVBQUksQ0FBQyxLQUFLLFlBQVksS0FBSyxVQUFVLENBQUN3RSxHQUFZO0FBQ2hELGNBQU1DLElBQU8sS0FBSyxPQUFPLE9BQU8sSUFBSTtBQUNoQyxRQUFBQSxLQUFRQSxNQUFTLFNBQ25CLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxJQUFJQSxHQUNqQ0EsRUFBSyxRQUFRLEtBQUs7QUFBQSxNQUNwQjtBQUVGLFdBQUssU0FBUztBQUFBLElBQUE7QUFBQSxFQUNoQjtBQUVKO0FBSUEsU0FBU0MsS0FBa0I7QUFDbEIsU0FBQVA7QUFDVDtBQVdBLElBQUlRO0FBaUJKLE1BQU1DLHlCQUF5QyxRQUFRO0FBQ3ZELE1BQU1DLEdBQWU7QUFBQSxFQUNuQixZQUFZMUQsR0FBSTtBQUNkLFNBQUssS0FBS0EsR0FJVixLQUFLLE9BQU8sUUFJWixLQUFLLFdBQVcsUUFJaEIsS0FBSyxRQUFRLEdBSWIsS0FBSyxPQUFPLFFBSVosS0FBSyxVQUFVLFFBQ2YsS0FBSyxZQUFZLFFBQ2JnRCxNQUFxQkEsR0FBa0IsVUFDdkJBLEdBQUEsUUFBUSxLQUFLLElBQUk7QUFBQSxFQUNyQztBQUFBLEVBRUYsUUFBUTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQUE7QUFBQSxFQUVoQixTQUFTO0FBQ0gsSUFBQSxLQUFLLFFBQVEsT0FDZixLQUFLLFNBQVMsS0FDVlMsR0FBbUIsSUFBSSxJQUFJLE1BQzdCQSxHQUFtQixPQUFPLElBQUksR0FDOUIsS0FBSyxRQUFRO0FBQUEsRUFFakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtGLFNBQVM7QUFDUCxJQUFJLEtBQUssUUFBUSxLQUFLLEVBQUUsS0FBSyxRQUFRLE9BRy9CLEtBQUssUUFBUSxLQUNqQkUsR0FBTSxJQUFJO0FBQUEsRUFDWjtBQUFBLEVBRUYsTUFBTTtBQUNBLFFBQUEsRUFBRSxLQUFLLFFBQVE7QUFDakIsYUFBTyxLQUFLLEdBQUc7QUFFakIsU0FBSyxTQUFTLEdBQ2RDLEdBQWMsSUFBSSxHQUNsQkMsR0FBWSxJQUFJO0FBQ2hCLFVBQU1DLElBQWFOLElBQ2JPLElBQWtCQztBQUNaLElBQUFSLEtBQUEsTUFDRVEsS0FBQTtBQUNWLFFBQUE7QUFDRixhQUFPLEtBQUssR0FBRztBQUFBLElBQUEsVUFDZjtBQU1BLE1BQUFDLEdBQVksSUFBSSxHQUNKVCxLQUFBTSxHQUNFRSxLQUFBRCxHQUNkLEtBQUssU0FBUztBQUFBLElBQUM7QUFBQSxFQUNqQjtBQUFBLEVBRUYsT0FBTztBQUNELFFBQUEsS0FBSyxRQUFRLEdBQUc7QUFDbEIsZUFBU0csSUFBTyxLQUFLLE1BQU1BLEdBQU1BLElBQU9BLEVBQUs7QUFDM0MsUUFBQUMsR0FBVUQsQ0FBSTtBQUVYLFdBQUEsT0FBTyxLQUFLLFdBQVcsUUFDNUJOLEdBQWMsSUFBSSxHQUNiLEtBQUEsVUFBVSxLQUFLLE9BQU8sR0FDM0IsS0FBSyxTQUFTO0FBQUEsSUFBQztBQUFBLEVBQ2pCO0FBQUEsRUFFRixVQUFVO0FBQ0osSUFBQSxLQUFLLFFBQVEsS0FDZkgsR0FBbUIsSUFBSSxJQUFJLElBQ2xCLEtBQUssWUFDZCxLQUFLLFVBQVUsSUFFZixLQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0YsYUFBYTtBQUNQLElBQUFXLEdBQVEsSUFBSSxLQUNkLEtBQUssSUFBSTtBQUFBLEVBQ1g7QUFBQSxFQUVGLElBQUksUUFBUTtBQUNWLFdBQU9BLEdBQVEsSUFBSTtBQUFBLEVBQUE7QUFFdkI7QUFDQSxJQUFJQyxLQUFhLEdBQ2JDLElBQ0FDO0FBQ0osU0FBU1osR0FBTWEsR0FBS0MsSUFBYSxJQUFPO0FBRXRDLE1BREFELEVBQUksU0FBUyxHQUNUQyxHQUFZO0FBQ2QsSUFBQUQsRUFBSSxPQUFPRCxJQUNPQSxLQUFBQztBQUNsQjtBQUFBLEVBQUE7QUFFRixFQUFBQSxFQUFJLE9BQU9GLElBQ0VBLEtBQUFFO0FBQ2Y7QUFDQSxTQUFTRSxLQUFhO0FBQ3BCLEVBQUFMO0FBQ0Y7QUFDQSxTQUFTTSxLQUFXO0FBQ2QsTUFBQSxFQUFFTixLQUFhO0FBQ2pCO0FBRUYsTUFBSUUsSUFBaUI7QUFDbkIsUUFBSUssSUFBSUw7QUFFUixTQURrQkEsS0FBQSxRQUNYSyxLQUFHO0FBQ1IsWUFBTUMsSUFBT0QsRUFBRTtBQUNmLE1BQUFBLEVBQUUsT0FBTyxRQUNUQSxFQUFFLFNBQVMsSUFDUEEsSUFBQUM7QUFBQSxJQUFBO0FBQUEsRUFDTjtBQUVFLE1BQUFDO0FBQ0osU0FBT1IsTUFBWTtBQUNqQixRQUFJTSxJQUFJTjtBQUVSLFNBRGFBLEtBQUEsUUFDTk0sS0FBRztBQUNSLFlBQU1DLElBQU9ELEVBQUU7QUFHWCxVQUZKQSxFQUFFLE9BQU8sUUFDVEEsRUFBRSxTQUFTLElBQ1BBLEVBQUUsUUFBUTtBQUNSLFlBQUE7QUFFRixVQUFBQSxFQUFFLFFBQVE7QUFBQSxpQkFDSEcsR0FBSztBQUNSLFVBQUNELE1BQWVBLElBQUFDO0FBQUEsUUFBQTtBQUdwQixNQUFBSCxJQUFBQztBQUFBLElBQUE7QUFBQSxFQUNOO0FBRUYsTUFBSUMsRUFBYSxPQUFBQTtBQUNuQjtBQUNBLFNBQVNqQixHQUFZVyxHQUFLO0FBQ3hCLFdBQVNOLElBQU9NLEVBQUksTUFBTU4sR0FBTUEsSUFBT0EsRUFBSztBQUMxQyxJQUFBQSxFQUFLLFVBQVUsSUFDVkEsRUFBQSxpQkFBaUJBLEVBQUssSUFBSSxZQUMvQkEsRUFBSyxJQUFJLGFBQWFBO0FBRTFCO0FBQ0EsU0FBU0QsR0FBWU8sR0FBSztBQUNwQixNQUFBUSxHQUNBQyxJQUFPVCxFQUFJLFVBQ1hOLElBQU9lO0FBQ1gsU0FBT2YsS0FBTTtBQUNYLFVBQU1nQixJQUFPaEIsRUFBSztBQUNkLElBQUFBLEVBQUssWUFBWSxNQUNmQSxNQUFTZSxNQUFhQSxJQUFBQyxJQUMxQmYsR0FBVUQsQ0FBSSxHQUNkaUIsR0FBVWpCLENBQUksS0FFUGMsSUFBQWQsR0FFSkEsRUFBQSxJQUFJLGFBQWFBLEVBQUssZ0JBQzNCQSxFQUFLLGlCQUFpQixRQUNmQSxJQUFBZ0I7QUFBQSxFQUFBO0FBRVQsRUFBQVYsRUFBSSxPQUFPUSxHQUNYUixFQUFJLFdBQVdTO0FBQ2pCO0FBQ0EsU0FBU2IsR0FBUUksR0FBSztBQUNwQixXQUFTTixJQUFPTSxFQUFJLE1BQU1OLEdBQU1BLElBQU9BLEVBQUs7QUFDMUMsUUFBSUEsRUFBSyxJQUFJLFlBQVlBLEVBQUssV0FBV0EsRUFBSyxJQUFJLGFBQWFrQixHQUFnQmxCLEVBQUssSUFBSSxRQUFRLEtBQUtBLEVBQUssSUFBSSxZQUFZQSxFQUFLO0FBQ3RILGFBQUE7QUFHWCxTQUFJLEVBQUFNLEVBQUk7QUFJVjtBQUNBLFNBQVNZLEdBQWdCQyxHQUFVO0FBSzdCQSxNQUpBQSxFQUFTLFFBQVEsS0FBSyxFQUFFQSxFQUFTLFFBQVEsUUFHN0NBLEVBQVMsU0FBUyxLQUNkQSxFQUFTLGtCQUFrQkM7QUFDN0I7QUFFRkQsRUFBQUEsRUFBUyxnQkFBZ0JDO0FBQ3pCLFFBQU1DLElBQU1GLEVBQVM7QUFFakIsTUFESkEsRUFBUyxTQUFTLEdBQ2RFLEVBQUksVUFBVSxLQUFLLENBQUNGLEVBQVMsU0FBU0EsRUFBUyxRQUFRLENBQUNqQixHQUFRaUIsQ0FBUSxHQUFHO0FBQzdFQSxJQUFBQSxFQUFTLFNBQVM7QUFDbEI7QUFBQSxFQUFBO0FBRUYsUUFBTUcsSUFBVWhDLElBQ1ZPLElBQWtCQztBQUNacUIsRUFBQUEsS0FBQUEsR0FDRXJCLEtBQUE7QUFDVixNQUFBO0FBQ0YsSUFBQUgsR0FBWXdCLENBQVE7QUFDcEIsVUFBTTNGLElBQVEyRixFQUFTLEdBQUdBLEVBQVMsTUFBTTtBQUN6QyxLQUFJRSxFQUFJLFlBQVksS0FBSzdFLEdBQVdoQixHQUFPMkYsRUFBUyxNQUFNLE9BQ3hEQSxFQUFTLFNBQVMzRixHQUNkNkYsRUFBQTtBQUFBLFdBRUNSLEdBQUs7QUFDUixVQUFBUSxFQUFBLFdBQ0VSO0FBQUEsRUFBQSxVQUNOO0FBQ1ksSUFBQXZCLEtBQUFnQyxHQUNFeEIsS0FBQUQsR0FDZEUsR0FBWW9CLENBQVEsR0FDcEJBLEVBQVMsU0FBUztBQUFBLEVBQUM7QUFFdkI7QUFDQSxTQUFTbEIsR0FBVUQsR0FBTXVCLElBQU8sSUFBTztBQUNyQyxRQUFNLEVBQUUsS0FBQUYsR0FBSyxTQUFBQyxHQUFTLFNBQUFFLEVBQVksSUFBQXhCO0FBWTlCLE1BWEFzQixNQUNGQSxFQUFRLFVBQVVFLEdBQ2xCeEIsRUFBSyxVQUFVLFNBRWJ3QixNQUNGQSxFQUFRLFVBQVVGLEdBQ2xCdEIsRUFBSyxVQUFVLFNBS2JxQixFQUFJLFNBQVNyQixNQUNmcUIsRUFBSSxPQUFPQyxHQUNQLENBQUNBLEtBQVdELEVBQUksV0FBVTtBQUN4QixJQUFBQSxFQUFBLFNBQVMsU0FBUztBQUN0QixhQUFTcEMsSUFBSW9DLEVBQUksU0FBUyxNQUFNcEMsR0FBR0EsSUFBSUEsRUFBRTtBQUN2QyxNQUFBZ0IsR0FBVWhCLEdBQUcsRUFBSTtBQUFBLEVBQ25CO0FBR0osRUFBSSxDQUFDc0MsS0FBUSxDQUFDLEVBQUVGLEVBQUksTUFBTUEsRUFBSSxPQUN4QkEsRUFBQSxJQUFJLE9BQU9BLEVBQUksR0FBRztBQUUxQjtBQUNBLFNBQVNKLEdBQVVqQixHQUFNO0FBQ2pCLFFBQUEsRUFBRSxTQUFBeUIsR0FBUyxTQUFBQyxFQUFBLElBQVkxQjtBQUM3QixFQUFJeUIsTUFDRkEsRUFBUSxVQUFVQyxHQUNsQjFCLEVBQUssVUFBVSxTQUViMEIsTUFDRkEsRUFBUSxVQUFVRCxHQUNsQnpCLEVBQUssVUFBVTtBQUVuQjtBQXNCQSxJQUFJRixLQUFjO0FBQ2xCLE1BQU02QixLQUFhLENBQUM7QUFDcEIsU0FBU0MsS0FBZ0I7QUFDdkIsRUFBQUQsR0FBVyxLQUFLN0IsRUFBVyxHQUNiQSxLQUFBO0FBQ2hCO0FBS0EsU0FBUytCLEtBQWdCO0FBQ2pCLFFBQUF6QyxJQUFPdUMsR0FBVyxJQUFJO0FBQ2QsRUFBQTdCLEtBQUFWLE1BQVMsU0FBUyxLQUFPQTtBQUN6QztBQVVBLFNBQVNNLEdBQWMsR0FBRztBQUNsQixRQUFBLEVBQUUsU0FBQW9DLE1BQVk7QUFFcEIsTUFEQSxFQUFFLFVBQVUsUUFDUkEsR0FBUztBQUNYLFVBQU1SLElBQVVoQztBQUNKLElBQUFBLEtBQUE7QUFDUixRQUFBO0FBQ00sTUFBQXdDLEVBQUE7QUFBQSxJQUFBLFVBQ1I7QUFDWSxNQUFBeEMsS0FBQWdDO0FBQUEsSUFBQTtBQUFBLEVBQ2Q7QUFFSjtBQUVBLElBQUlGLEtBQWdCO0FBQ3BCLE1BQU1XLEdBQUs7QUFBQSxFQUNULFlBQVl6QixHQUFLZSxHQUFLO0FBQ3BCLFNBQUssTUFBTWYsR0FDWCxLQUFLLE1BQU1lLEdBQ1gsS0FBSyxVQUFVQSxFQUFJLFNBQ2QsS0FBQSxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssaUJBQWlCO0FBQUEsRUFBQTtBQUV0RjtBQUNBLE1BQU1XLEdBQUk7QUFBQSxFQUNSLFlBQVliLEdBQVU7QUFDcEIsU0FBSyxXQUFXQSxHQUNoQixLQUFLLFVBQVUsR0FJZixLQUFLLGFBQWEsUUFJbEIsS0FBSyxPQUFPLFFBSVosS0FBSyxNQUFNLFFBQ1gsS0FBSyxNQUFNLFFBSVgsS0FBSyxLQUFLO0FBQUEsRUFHVjtBQUFBLEVBRUYsTUFBTWMsR0FBVztBQUNmLFFBQUksQ0FBQzNDLE1BQWEsQ0FBQ1EsTUFBZVIsT0FBYyxLQUFLO0FBQ25EO0FBRUYsUUFBSVUsSUFBTyxLQUFLO0FBQ2hCLFFBQUlBLE1BQVMsVUFBVUEsRUFBSyxRQUFRVjtBQUNsQyxNQUFBVSxJQUFPLEtBQUssYUFBYSxJQUFJK0IsR0FBS3pDLElBQVcsSUFBSSxHQUM1Q0EsR0FBVSxRQUdiVSxFQUFLLFVBQVVWLEdBQVUsVUFDekJBLEdBQVUsU0FBUyxVQUFVVSxHQUM3QlYsR0FBVSxXQUFXVSxLQUpYVixHQUFBLE9BQU9BLEdBQVUsV0FBV1UsR0FNeENrQyxHQUFPbEMsQ0FBSTtBQUFBLGFBQ0ZBLEVBQUssWUFBWSxPQUMxQkEsRUFBSyxVQUFVLEtBQUssU0FDaEJBLEVBQUssVUFBUztBQUNoQixZQUFNVyxJQUFPWCxFQUFLO0FBQ2xCLE1BQUFXLEVBQUssVUFBVVgsRUFBSyxTQUNoQkEsRUFBSyxZQUNQQSxFQUFLLFFBQVEsVUFBVVcsSUFFekJYLEVBQUssVUFBVVYsR0FBVSxVQUN6QlUsRUFBSyxVQUFVLFFBQ2ZWLEdBQVUsU0FBUyxVQUFVVSxHQUM3QlYsR0FBVSxXQUFXVSxHQUNqQlYsR0FBVSxTQUFTVSxNQUNyQlYsR0FBVSxPQUFPcUI7QUFBQSxJQUNuQjtBQWFHLFdBQUFYO0FBQUEsRUFBQTtBQUFBLEVBRVQsUUFBUWlDLEdBQVc7QUFDWixTQUFBLFdBQ0xiLE1BQ0EsS0FBSyxPQUFPYSxDQUFTO0FBQUEsRUFBQTtBQUFBLEVBRXZCLE9BQU9BLEdBQVc7QUFDTCxJQUFBekIsR0FBQTtBQUNQLFFBQUE7QUFlRixlQUFTUixJQUFPLEtBQUssTUFBTUEsR0FBTUEsSUFBT0EsRUFBSztBQUN2QyxRQUFBQSxFQUFLLElBQUksWUFFTkEsRUFBQSxJQUFJLElBQUksT0FBTztBQUFBLElBRXhCLFVBQ0E7QUFDUyxNQUFBUyxHQUFBO0FBQUEsSUFBQTtBQUFBLEVBQ1g7QUFFSjtBQUNBLFNBQVN5QixHQUFPbEMsR0FBTTtBQUVoQixNQURKQSxFQUFLLElBQUksTUFDTEEsRUFBSyxJQUFJLFFBQVEsR0FBRztBQUNoQm1CLFVBQUFBLElBQVduQixFQUFLLElBQUk7QUFDMUIsUUFBSW1CLEtBQVksQ0FBQ25CLEVBQUssSUFBSSxNQUFNO0FBQzlCbUIsTUFBQUEsRUFBUyxTQUFTO0FBQ2xCLGVBQVNsQyxJQUFJa0MsRUFBUyxNQUFNbEMsR0FBR0EsSUFBSUEsRUFBRTtBQUNuQyxRQUFBaUQsR0FBT2pELENBQUM7QUFBQSxJQUNWO0FBRUksVUFBQWtELElBQWNuQyxFQUFLLElBQUk7QUFDN0IsSUFBSW1DLE1BQWdCbkMsTUFDbEJBLEVBQUssVUFBVW1DLEdBQ1hBLFFBQXlCLFVBQVVuQyxLQUt6Q0EsRUFBSyxJQUFJLE9BQU9BO0FBQUEsRUFBQTtBQUVwQjtBQUNBLE1BQU1vQyx5QkFBZ0MsUUFBUSxHQUN4Q0MsS0FBYztBQUFBLEVBQzZDO0FBQ2pFLEdBQ01DLEtBQXNCO0FBQUEsRUFDdUM7QUFDbkUsR0FDTUMsS0FBb0I7QUFBQSxFQUNzQztBQUNoRTtBQUNBLFNBQVNDLEdBQU1DLEdBQVFDLEdBQU0zSSxHQUFLO0FBQ2hDLE1BQUkrRixNQUFlUixJQUFXO0FBQ3hCLFFBQUFxRCxJQUFVUCxHQUFVLElBQUlLLENBQU07QUFDbEMsSUFBS0UsS0FDSFAsR0FBVSxJQUFJSyxHQUFRRSxJQUEwQixvQkFBSSxLQUFLO0FBRXZELFFBQUF0QixJQUFNc0IsRUFBUSxJQUFJNUksQ0FBRztBQUN6QixJQUFLc0gsTUFDSHNCLEVBQVEsSUFBSTVJLEdBQUtzSCxJQUFNLElBQUlXLElBQUssR0FDaENYLEVBQUksTUFBTXNCLEdBQ1Z0QixFQUFJLE1BQU10SCxJQVNWc0gsRUFBSSxNQUFNO0FBQUEsRUFDWjtBQUVKO0FBQ0EsU0FBU3VCLEdBQVFILEdBQVFDLEdBQU0zSSxHQUFLOEksR0FBVXBHLEdBQVVxRyxHQUFXO0FBQzNELFFBQUFILElBQVVQLEdBQVUsSUFBSUssQ0FBTTtBQUNwQyxNQUFJLENBQUNFLEdBQVM7QUFDWixJQUFBdkI7QUFDQTtBQUFBLEVBQUE7QUFFSSxRQUFBMkIsSUFBTSxDQUFDMUIsTUFBUTtBQUNuQixJQUFJQSxLQVdBQSxFQUFJLFFBQVE7QUFBQSxFQUdsQjtBQUVBLE1BRFdiLEdBQUEsR0FDUGtDLE1BQVM7QUFDWCxJQUFBQyxFQUFRLFFBQVFJLENBQUc7QUFBQSxPQUNkO0FBQ0MsVUFBQUMsSUFBZ0JsSSxFQUFRMkgsQ0FBTSxHQUM5QlEsSUFBZUQsS0FBaUJySCxHQUFhNUIsQ0FBRztBQUNsRCxRQUFBaUosS0FBaUJqSixNQUFRLFVBQVU7QUFDL0IsWUFBQW1KLElBQVksT0FBT0wsQ0FBUTtBQUN6QixNQUFBRixFQUFBLFFBQVEsQ0FBQ3RCLEdBQUs4QixNQUFTO0FBQ3pCLFNBQUFBLE1BQVMsWUFBWUEsTUFBU1osTUFBcUIsQ0FBQ25ILEdBQVMrSCxDQUFJLEtBQUtBLEtBQVFELE1BQ2hGSCxFQUFJMUIsQ0FBRztBQUFBLE1BQ1QsQ0FDRDtBQUFBLElBQUE7QUFRRCxlQU5JdEgsTUFBUSxVQUFVNEksRUFBUSxJQUFJLE1BQU0sTUFDbENJLEVBQUFKLEVBQVEsSUFBSTVJLENBQUcsQ0FBQyxHQUVsQmtKLEtBQ0VGLEVBQUFKLEVBQVEsSUFBSUosRUFBaUIsQ0FBQyxHQUU1QkcsR0FBTTtBQUFBLFFBQ1osS0FBSztBQUNILFVBQUtNLElBS01DLEtBQ0xGLEVBQUFKLEVBQVEsSUFBSSxRQUFRLENBQUMsS0FMckJJLEVBQUFKLEVBQVEsSUFBSU4sRUFBVyxDQUFDLEdBQ3hCdEgsR0FBTTBILENBQU0sS0FDVk0sRUFBQUosRUFBUSxJQUFJTCxFQUFtQixDQUFDO0FBS3hDO0FBQUEsUUFDRixLQUFLO0FBQ0gsVUFBS1UsTUFDQ0QsRUFBQUosRUFBUSxJQUFJTixFQUFXLENBQUMsR0FDeEJ0SCxHQUFNMEgsQ0FBTSxLQUNWTSxFQUFBSixFQUFRLElBQUlMLEVBQW1CLENBQUM7QUFHeEM7QUFBQSxRQUNGLEtBQUs7QUFDQyxVQUFBdkgsR0FBTTBILENBQU0sS0FDVk0sRUFBQUosRUFBUSxJQUFJTixFQUFXLENBQUM7QUFFOUI7QUFBQSxNQUFBO0FBQUEsRUFFTjtBQUVPLEVBQUE1QixHQUFBO0FBQ1g7QUFDQSxTQUFTMkMsR0FBbUJDLEdBQVF0SixHQUFLO0FBQ2pDLFFBQUF1SixJQUFTbEIsR0FBVSxJQUFJaUIsQ0FBTTtBQUM1QixTQUFBQyxLQUFVQSxFQUFPLElBQUl2SixDQUFHO0FBQ2pDO0FBRUEsU0FBU3dKLEdBQWtCQyxHQUFPO0FBQzFCLFFBQUFDLElBQU1DLEVBQU1GLENBQUs7QUFDbkIsU0FBQUMsTUFBUUQsSUFBY0MsS0FDcEJqQixHQUFBaUIsR0FBSyxXQUFXbEIsRUFBaUIsR0FDaENvQixHQUFVSCxDQUFLLElBQUlDLElBQU1BLEVBQUksSUFBSUcsRUFBVTtBQUNwRDtBQUNBLFNBQVNDLEdBQWlCcEosR0FBSztBQUM3QixTQUFBK0gsR0FBTS9ILElBQU1pSixFQUFNakosQ0FBRyxHQUFHLFdBQVc4SCxFQUFpQixHQUM3QzlIO0FBQ1Q7QUFDQSxNQUFNcUosS0FBd0I7QUFBQSxFQUM1QixXQUFXO0FBQUEsRUFDWCxDQUFDLE9BQU8sUUFBUSxJQUFJO0FBQ2xCLFdBQU9DLEdBQVMsTUFBTSxPQUFPLFVBQVVILEVBQVU7QUFBQSxFQUNuRDtBQUFBLEVBQ0EsVUFBVUksR0FBTTtBQUNQLFdBQUFULEdBQWtCLElBQUksRUFBRTtBQUFBLE1BQzdCLEdBQUdTLEVBQUssSUFBSSxDQUFDQyxNQUFNbkosRUFBUW1KLENBQUMsSUFBSVYsR0FBa0JVLENBQUMsSUFBSUEsQ0FBQztBQUFBLElBQzFEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUNSLFdBQU9GLEdBQVMsTUFBTSxXQUFXLENBQUN2SSxPQUNoQ0EsRUFBTSxDQUFDLElBQUlvSSxHQUFXcEksRUFBTSxDQUFDLENBQUMsR0FDdkJBLEVBQ1I7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFNTSxHQUFJb0ksR0FBUztBQUNqQixXQUFPQyxHQUFNLE1BQU0sU0FBU3JJLEdBQUlvSSxHQUFTLFFBQVEsU0FBUztBQUFBLEVBQzVEO0FBQUEsRUFDQSxPQUFPcEksR0FBSW9JLEdBQVM7QUFDWCxXQUFBQyxHQUFNLE1BQU0sVUFBVXJJLEdBQUlvSSxHQUFTLENBQUN0RixNQUFNQSxFQUFFLElBQUlnRixFQUFVLEdBQUcsU0FBUztBQUFBLEVBQy9FO0FBQUEsRUFDQSxLQUFLOUgsR0FBSW9JLEdBQVM7QUFDaEIsV0FBT0MsR0FBTSxNQUFNLFFBQVFySSxHQUFJb0ksR0FBU04sSUFBWSxTQUFTO0FBQUEsRUFDL0Q7QUFBQSxFQUNBLFVBQVU5SCxHQUFJb0ksR0FBUztBQUNyQixXQUFPQyxHQUFNLE1BQU0sYUFBYXJJLEdBQUlvSSxHQUFTLFFBQVEsU0FBUztBQUFBLEVBQ2hFO0FBQUEsRUFDQSxTQUFTcEksR0FBSW9JLEdBQVM7QUFDcEIsV0FBT0MsR0FBTSxNQUFNLFlBQVlySSxHQUFJb0ksR0FBU04sSUFBWSxTQUFTO0FBQUEsRUFDbkU7QUFBQSxFQUNBLGNBQWM5SCxHQUFJb0ksR0FBUztBQUN6QixXQUFPQyxHQUFNLE1BQU0saUJBQWlCckksR0FBSW9JLEdBQVMsUUFBUSxTQUFTO0FBQUEsRUFDcEU7QUFBQTtBQUFBLEVBRUEsUUFBUXBJLEdBQUlvSSxHQUFTO0FBQ25CLFdBQU9DLEdBQU0sTUFBTSxXQUFXckksR0FBSW9JLEdBQVMsUUFBUSxTQUFTO0FBQUEsRUFDOUQ7QUFBQSxFQUNBLFlBQVlGLEdBQU07QUFDVCxXQUFBSSxHQUFZLE1BQU0sWUFBWUosQ0FBSTtBQUFBLEVBQzNDO0FBQUEsRUFDQSxXQUFXQSxHQUFNO0FBQ1IsV0FBQUksR0FBWSxNQUFNLFdBQVdKLENBQUk7QUFBQSxFQUMxQztBQUFBLEVBQ0EsS0FBS0ssR0FBVztBQUNkLFdBQU9kLEdBQWtCLElBQUksRUFBRSxLQUFLYyxDQUFTO0FBQUEsRUFDL0M7QUFBQTtBQUFBLEVBRUEsZUFBZUwsR0FBTTtBQUNaLFdBQUFJLEdBQVksTUFBTSxlQUFlSixDQUFJO0FBQUEsRUFDOUM7QUFBQSxFQUNBLElBQUlsSSxHQUFJb0ksR0FBUztBQUNmLFdBQU9DLEdBQU0sTUFBTSxPQUFPckksR0FBSW9JLEdBQVMsUUFBUSxTQUFTO0FBQUEsRUFDMUQ7QUFBQSxFQUNBLE1BQU07QUFDRyxXQUFBSSxHQUFXLE1BQU0sS0FBSztBQUFBLEVBQy9CO0FBQUEsRUFDQSxRQUFRTixHQUFNO0FBQ0wsV0FBQU0sR0FBVyxNQUFNLFFBQVFOLENBQUk7QUFBQSxFQUN0QztBQUFBLEVBQ0EsT0FBT2xJLE1BQU9rSSxHQUFNO0FBQ2xCLFdBQU9PLEdBQU8sTUFBTSxVQUFVekksR0FBSWtJLENBQUk7QUFBQSxFQUN4QztBQUFBLEVBQ0EsWUFBWWxJLE1BQU9rSSxHQUFNO0FBQ3ZCLFdBQU9PLEdBQU8sTUFBTSxlQUFlekksR0FBSWtJLENBQUk7QUFBQSxFQUM3QztBQUFBLEVBQ0EsUUFBUTtBQUNDLFdBQUFNLEdBQVcsTUFBTSxPQUFPO0FBQUEsRUFDakM7QUFBQTtBQUFBLEVBRUEsS0FBS3hJLEdBQUlvSSxHQUFTO0FBQ2hCLFdBQU9DLEdBQU0sTUFBTSxRQUFRckksR0FBSW9JLEdBQVMsUUFBUSxTQUFTO0FBQUEsRUFDM0Q7QUFBQSxFQUNBLFVBQVVGLEdBQU07QUFDUCxXQUFBTSxHQUFXLE1BQU0sVUFBVU4sQ0FBSTtBQUFBLEVBQ3hDO0FBQUEsRUFDQSxhQUFhO0FBQ0osV0FBQVQsR0FBa0IsSUFBSSxFQUFFLFdBQVc7QUFBQSxFQUM1QztBQUFBLEVBQ0EsU0FBU2lCLEdBQVU7QUFDakIsV0FBT2pCLEdBQWtCLElBQUksRUFBRSxTQUFTaUIsQ0FBUTtBQUFBLEVBQ2xEO0FBQUEsRUFDQSxhQUFhUixHQUFNO0FBQ2pCLFdBQU9ULEdBQWtCLElBQUksRUFBRSxVQUFVLEdBQUdTLENBQUk7QUFBQSxFQUNsRDtBQUFBLEVBQ0EsV0FBV0EsR0FBTTtBQUNSLFdBQUFNLEdBQVcsTUFBTSxXQUFXTixDQUFJO0FBQUEsRUFDekM7QUFBQSxFQUNBLFNBQVM7QUFDQSxXQUFBRCxHQUFTLE1BQU0sVUFBVUgsRUFBVTtBQUFBLEVBQUE7QUFFOUM7QUFDQSxTQUFTRyxHQUFTVSxHQUFNQyxHQUFRQyxHQUFXO0FBQ25DLFFBQUFsSyxJQUFNb0osR0FBaUJZLENBQUksR0FDM0JHLElBQU9uSyxFQUFJaUssQ0FBTSxFQUFFO0FBQ3pCLFNBQUlqSyxNQUFRZ0ssS0FBUSxDQUFDZCxHQUFVYyxDQUFJLE1BQ2pDRyxFQUFLLFFBQVFBLEVBQUssTUFDbEJBLEVBQUssT0FBTyxNQUFNO0FBQ1YsVUFBQUMsSUFBU0QsRUFBSyxNQUFNO0FBQzFCLFdBQUlDLEVBQU8sVUFDRkEsRUFBQSxRQUFRRixFQUFVRSxFQUFPLEtBQUssSUFFaENBO0FBQUEsRUFDVCxJQUVLRDtBQUNUO0FBQ0EsTUFBTUUsS0FBYSxNQUFNO0FBQ3pCLFNBQVNYLEdBQU1NLEdBQU1DLEdBQVE1SSxHQUFJb0ksR0FBU2EsR0FBY2YsR0FBTTtBQUN0RCxRQUFBdkosSUFBTW9KLEdBQWlCWSxDQUFJLEdBQzNCTyxJQUFZdkssTUFBUWdLLEtBQVEsQ0FBQ2QsR0FBVWMsQ0FBSSxHQUMzQ1EsSUFBV3hLLEVBQUlpSyxDQUFNO0FBQ3ZCLE1BQUFPLE1BQWFILEdBQVdKLENBQU0sR0FBRztBQUNuQyxVQUFNUSxJQUFVRCxFQUFTLE1BQU1SLEdBQU1ULENBQUk7QUFDbEMsV0FBQWdCLElBQVlwQixHQUFXc0IsQ0FBTyxJQUFJQTtBQUFBLEVBQUE7QUFFM0MsTUFBSUMsSUFBWXJKO0FBQ2hCLEVBQUlyQixNQUFRZ0ssTUFDTk8sSUFDVUcsSUFBQSxTQUFTNUgsR0FBTTZILEdBQU87QUFDaEMsV0FBT3RKLEVBQUcsS0FBSyxNQUFNOEgsR0FBV3JHLENBQUksR0FBRzZILEdBQU9YLENBQUk7QUFBQSxFQUNwRCxJQUNTM0ksRUFBRyxTQUFTLE1BQ1RxSixJQUFBLFNBQVM1SCxHQUFNNkgsR0FBTztBQUNoQyxXQUFPdEosRUFBRyxLQUFLLE1BQU15QixHQUFNNkgsR0FBT1gsQ0FBSTtBQUFBLEVBQ3hDO0FBR0osUUFBTUksSUFBU0ksRUFBUyxLQUFLeEssR0FBSzBLLEdBQVdqQixDQUFPO0FBQ3BELFNBQU9jLEtBQWFELElBQWVBLEVBQWFGLENBQU0sSUFBSUE7QUFDNUQ7QUFDQSxTQUFTTixHQUFPRSxHQUFNQyxHQUFRNUksR0FBSWtJLEdBQU07QUFDaEMsUUFBQXZKLElBQU1vSixHQUFpQlksQ0FBSTtBQUNqQyxNQUFJVSxJQUFZcko7QUFDaEIsU0FBSXJCLE1BQVFnSyxNQUNMZCxHQUFVYyxDQUFJLElBSVIzSSxFQUFHLFNBQVMsTUFDVHFKLElBQUEsU0FBU0UsR0FBSzlILEdBQU02SCxHQUFPO0FBQ3JDLFdBQU90SixFQUFHLEtBQUssTUFBTXVKLEdBQUs5SCxHQUFNNkgsR0FBT1gsQ0FBSTtBQUFBLEVBQzdDLEtBTllVLElBQUEsU0FBU0UsR0FBSzlILEdBQU02SCxHQUFPO0FBQzlCLFdBQUF0SixFQUFHLEtBQUssTUFBTXVKLEdBQUt6QixHQUFXckcsQ0FBSSxHQUFHNkgsR0FBT1gsQ0FBSTtBQUFBLEVBQ3pELElBT0doSyxFQUFJaUssQ0FBTSxFQUFFUyxHQUFXLEdBQUduQixDQUFJO0FBQ3ZDO0FBQ0EsU0FBU0ksR0FBWUssR0FBTUMsR0FBUVYsR0FBTTtBQUNqQyxRQUFBdkosSUFBTWlKLEVBQU1lLENBQUk7QUFDaEIsRUFBQWpDLEdBQUEvSCxHQUFLLFdBQVc4SCxFQUFpQjtBQUN2QyxRQUFNakYsSUFBTTdDLEVBQUlpSyxDQUFNLEVBQUUsR0FBR1YsQ0FBSTtBQUMxQixVQUFBMUcsTUFBUSxNQUFNQSxNQUFRLE9BQVVnSSxHQUFRdEIsRUFBSyxDQUFDLENBQUMsS0FDbERBLEVBQUssQ0FBQyxJQUFJTixFQUFNTSxFQUFLLENBQUMsQ0FBQyxHQUNoQnZKLEVBQUlpSyxDQUFNLEVBQUUsR0FBR1YsQ0FBSSxLQUVyQjFHO0FBQ1Q7QUFDQSxTQUFTZ0gsR0FBV0csR0FBTUMsR0FBUVYsSUFBTyxDQUFBLEdBQUk7QUFDN0IsRUFBQXBDLEdBQUEsR0FDSHBCLEdBQUE7QUFDTCxRQUFBbEQsSUFBTW9HLEVBQU1lLENBQUksRUFBRUMsQ0FBTSxFQUFFLE1BQU1ELEdBQU1ULENBQUk7QUFDdkMsU0FBQXZELEdBQUEsR0FDS29CLEdBQUEsR0FDUHZFO0FBQ1Q7QUFFQSxNQUFNaUksd0JBQTZDLDZCQUE2QixHQUMxRUMsS0FBaUIsSUFBSTtBQUFBLEVBQ1QsdUJBQU8sb0JBQW9CLE1BQU0sRUFBRSxPQUFPLENBQUN6TCxNQUFRQSxNQUFRLGVBQWVBLE1BQVEsUUFBUSxFQUFFLElBQUksQ0FBQ0EsTUFBUSxPQUFPQSxDQUFHLENBQUMsRUFBRSxPQUFPcUIsRUFBUTtBQUN2SjtBQUNBLFNBQVNSLEdBQWViLEdBQUs7QUFDM0IsRUFBS3FCLEdBQVNyQixDQUFHLE1BQUdBLElBQU0sT0FBT0EsQ0FBRztBQUM5QixRQUFBK0MsSUFBTTRHLEVBQU0sSUFBSTtBQUNoQixTQUFBbEIsR0FBQTFGLEdBQUssT0FBTy9DLENBQUcsR0FDZCtDLEVBQUksZUFBZS9DLENBQUc7QUFDL0I7QUFDQSxNQUFNMEwsR0FBb0I7QUFBQSxFQUN4QixZQUFZQyxJQUFjLElBQU9DLElBQWEsSUFBTztBQUNuRCxTQUFLLGNBQWNELEdBQ25CLEtBQUssYUFBYUM7QUFBQSxFQUFBO0FBQUEsRUFFcEIsSUFBSWxELEdBQVExSSxHQUFLNkwsR0FBVTtBQUN6QixRQUFJN0wsTUFBUSxXQUFtQixRQUFBMEksRUFBTztBQUN0QyxVQUFNb0QsSUFBYyxLQUFLLGFBQWFDLElBQWEsS0FBSztBQUN4RCxRQUFJL0wsTUFBUTtBQUNWLGFBQU8sQ0FBQzhMO0FBQ1YsUUFBVzlMLE1BQVE7QUFDVixhQUFBOEw7QUFDVCxRQUFXOUwsTUFBUTtBQUNWLGFBQUErTDtBQUNULFFBQVcvTCxNQUFRO0FBQ2IsYUFBQTZMLE9BQWNDLElBQWNDLElBQWFDLEtBQXFCQyxLQUFjRixJQUFhRyxLQUFxQkMsSUFBYSxJQUFJekQsQ0FBTTtBQUFBO0FBQUEsTUFFekksT0FBTyxlQUFlQSxDQUFNLE1BQU0sT0FBTyxlQUFlbUQsQ0FBUSxJQUN2RG5ELElBRVQ7QUFFSSxVQUFBTyxJQUFnQmxJLEVBQVEySCxDQUFNO0FBQ3BDLFFBQUksQ0FBQ29ELEdBQWE7QUFDWixVQUFBL0o7QUFDSixVQUFJa0gsTUFBa0JsSCxJQUFLZ0ksR0FBc0IvSixDQUFHO0FBQzNDLGVBQUErQjtBQUVULFVBQUkvQixNQUFRO0FBQ0gsZUFBQWE7QUFBQSxJQUNUO0FBRUYsVUFBTTBDLElBQU0sUUFBUTtBQUFBLE1BQ2xCbUY7QUFBQSxNQUNBMUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlBc0UsR0FBTW9FLENBQU0sSUFBSUEsSUFBU21EO0FBQUEsSUFDM0I7QUFPQSxZQU5JeEssR0FBU3JCLENBQUcsSUFBSXlMLEdBQWUsSUFBSXpMLENBQUcsSUFBSXdMLEdBQW1CeEwsQ0FBRyxPQUcvRDhMLEtBQ0dyRCxHQUFBQyxHQUFRLE9BQU8xSSxDQUFHLEdBRXRCK0wsS0FDS3hJLElBRUxlLEdBQU1mLENBQUcsSUFDSjBGLEtBQWlCckgsR0FBYTVCLENBQUcsSUFBSXVELElBQU1BLEVBQUksUUFFcERqQyxHQUFTaUMsQ0FBRyxJQUNQdUksSUFBY00sR0FBUzdJLENBQUcsSUFBSThJLEdBQVM5SSxDQUFHLElBRTVDQTtBQUFBLEVBQUE7QUFFWDtBQUNBLE1BQU0rSSxXQUErQlosR0FBb0I7QUFBQSxFQUN2RCxZQUFZSyxJQUFhLElBQU87QUFDOUIsVUFBTSxJQUFPQSxDQUFVO0FBQUEsRUFBQTtBQUFBLEVBRXpCLElBQUlyRCxHQUFRMUksR0FBS3lCLEdBQU9vSyxHQUFVO0FBQzVCLFFBQUFuSixJQUFXZ0csRUFBTzFJLENBQUc7QUFDckIsUUFBQSxDQUFDLEtBQUssWUFBWTtBQUNkLFlBQUF1TSxJQUFxQkMsR0FBVzlKLENBQVE7QUFLMUMsVUFKQSxDQUFDa0gsR0FBVW5JLENBQUssS0FBSyxDQUFDK0ssR0FBVy9LLENBQUssTUFDeENpQixJQUFXaUgsRUFBTWpILENBQVEsR0FDekJqQixJQUFRa0ksRUFBTWxJLENBQUssSUFFakIsQ0FBQ1YsRUFBUTJILENBQU0sS0FBS3BFLEdBQU01QixDQUFRLEtBQUssQ0FBQzRCLEdBQU03QyxDQUFLO0FBQ3JELGVBQUk4SyxJQUNLLE1BRVA3SixFQUFTLFFBQVFqQixHQUNWO0FBQUEsSUFFWDtBQUVGLFVBQU1nTCxJQUFTMUwsRUFBUTJILENBQU0sS0FBSzlHLEdBQWE1QixDQUFHLElBQUksT0FBT0EsQ0FBRyxJQUFJMEksRUFBTyxTQUFTNUgsRUFBTzRILEdBQVExSSxDQUFHLEdBQ2hHOEssSUFBUyxRQUFRO0FBQUEsTUFDckJwQztBQUFBLE1BQ0ExSTtBQUFBLE1BQ0F5QjtBQUFBLE1BQ0E2QyxHQUFNb0UsQ0FBTSxJQUFJQSxJQUFTbUQ7QUFBQSxJQUMzQjtBQUNJLFdBQUFuRCxNQUFXaUIsRUFBTWtDLENBQVEsTUFDdEJZLElBRU1oSyxHQUFXaEIsR0FBT2lCLENBQVEsS0FDbkNtRyxHQUFRSCxHQUFRLE9BQU8xSSxHQUFLeUIsQ0FBZSxJQUZuQ29ILEdBQUFILEdBQVEsT0FBTzFJLEdBQUt5QixDQUFLLElBSzlCcUo7QUFBQSxFQUFBO0FBQUEsRUFFVCxlQUFlcEMsR0FBUTFJLEdBQUs7QUFDcEIsVUFBQXlNLElBQVMzTCxFQUFPNEgsR0FBUTFJLENBQUc7QUFDaEIsSUFBQTBJLEVBQU8xSSxDQUFHO0FBQzNCLFVBQU04SyxJQUFTLFFBQVEsZUFBZXBDLEdBQVExSSxDQUFHO0FBQ2pELFdBQUk4SyxLQUFVMkIsS0FDWjVELEdBQVFILEdBQVEsVUFBVTFJLEdBQUssTUFBZ0IsR0FFMUM4SztBQUFBLEVBQUE7QUFBQSxFQUVULElBQUlwQyxHQUFRMUksR0FBSztBQUNmLFVBQU04SyxJQUFTLFFBQVEsSUFBSXBDLEdBQVExSSxDQUFHO0FBQ2xDLFlBQUEsQ0FBQ3FCLEdBQVNyQixDQUFHLEtBQUssQ0FBQ3lMLEdBQWUsSUFBSXpMLENBQUcsTUFDckN5SSxHQUFBQyxHQUFRLE9BQU8xSSxDQUFHLEdBRW5COEs7QUFBQSxFQUFBO0FBQUEsRUFFVCxRQUFRcEMsR0FBUTtBQUNkLFdBQUFEO0FBQUEsTUFDRUM7QUFBQSxNQUNBO0FBQUEsTUFDQTNILEVBQVEySCxDQUFNLElBQUksV0FBV0o7QUFBQSxJQUMvQixHQUNPLFFBQVEsUUFBUUksQ0FBTTtBQUFBLEVBQUE7QUFFakM7QUFDQSxNQUFNZ0UsV0FBZ0NoQixHQUFvQjtBQUFBLEVBQ3hELFlBQVlLLElBQWEsSUFBTztBQUM5QixVQUFNLElBQU1BLENBQVU7QUFBQSxFQUFBO0FBQUEsRUFFeEIsSUFBSXJELEdBQVExSSxHQUFLO0FBT1IsV0FBQTtBQUFBLEVBQUE7QUFBQSxFQUVULGVBQWUwSSxHQUFRMUksR0FBSztBQU9uQixXQUFBO0FBQUEsRUFBQTtBQUVYO0FBQ0EsTUFBTTJNLHlCQUFzQ0wsR0FBdUIsR0FDN0RNLHlCQUF1Q0YsR0FBd0IsR0FDL0RHLEtBQThDLG9CQUFBUCxHQUF1QixFQUFJO0FBRy9FLE1BQU1RLEtBQVksQ0FBQ3JMLE1BQVVBLEdBQ3ZCc0wsS0FBVyxDQUFDbEksTUFBTSxRQUFRLGVBQWVBLENBQUM7QUFDaEQsU0FBU21JLEdBQXFCckMsR0FBUW1CLEdBQWFDLEdBQVk7QUFDN0QsU0FBTyxZQUFZOUIsR0FBTTtBQUNqQixVQUFBdkIsSUFBUyxLQUFLLFNBQ2R1RSxJQUFZdEQsRUFBTWpCLENBQU0sR0FDeEJ3RSxJQUFjbE0sR0FBTWlNLENBQVMsR0FDN0JFLElBQVN4QyxNQUFXLGFBQWFBLE1BQVcsT0FBTyxZQUFZdUMsR0FDL0RFLElBQVl6QyxNQUFXLFVBQVV1QyxHQUNqQ0csSUFBZ0IzRSxFQUFPaUMsQ0FBTSxFQUFFLEdBQUdWLENBQUksR0FDdENxRCxJQUFPdkIsSUFBYWUsS0FBWWhCLElBQWN5QixLQUFhMUQ7QUFDakUsWUFBQ2lDLEtBQWVyRDtBQUFBLE1BQ2R3RTtBQUFBLE1BQ0E7QUFBQSxNQUNBRyxJQUFZN0UsS0FBc0JEO0FBQUEsSUFDcEMsR0FDTztBQUFBO0FBQUEsTUFFTCxPQUFPO0FBQ0wsY0FBTSxFQUFFLE9BQUE3RyxHQUFPLE1BQUErTCxNQUFTSCxFQUFjLEtBQUs7QUFDM0MsZUFBT0csSUFBTyxFQUFFLE9BQUEvTCxHQUFPLE1BQUErTCxNQUFTO0FBQUEsVUFDOUIsT0FBT0wsSUFBUyxDQUFDRyxFQUFLN0wsRUFBTSxDQUFDLENBQUMsR0FBRzZMLEVBQUs3TCxFQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk2TCxFQUFLN0wsQ0FBSztBQUFBLFVBQzdELE1BQUErTDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLENBQUMsT0FBTyxRQUFRLElBQUk7QUFDWCxlQUFBO0FBQUEsTUFBQTtBQUFBLElBRVg7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTQyxHQUFxQjlFLEdBQU07QUFDbEMsU0FBTyxZQUFZc0IsR0FBTTtBQVF2QixXQUFPdEIsTUFBUyxXQUFXLEtBQVFBLE1BQVMsVUFBVSxTQUFTO0FBQUEsRUFDakU7QUFDRjtBQUNBLFNBQVMrRSxHQUF1QnRCLEdBQVV1QixHQUFTO0FBQ2pELFFBQU1DLElBQW1CO0FBQUEsSUFDdkIsSUFBSTVOLEdBQUs7QUFDRCxZQUFBMEksSUFBUyxLQUFLLFNBQ2R1RSxJQUFZdEQsRUFBTWpCLENBQU0sR0FDeEJtRixJQUFTbEUsRUFBTTNKLENBQUc7QUFDeEIsTUFBS29NLE1BQ0MzSixHQUFXekMsR0FBSzZOLENBQU0sS0FDbEJwRixHQUFBd0UsR0FBVyxPQUFPak4sQ0FBRyxHQUV2QnlJLEdBQUF3RSxHQUFXLE9BQU9ZLENBQU07QUFFaEMsWUFBTSxFQUFFLEtBQUFDLEVBQUEsSUFBUWYsR0FBU0UsQ0FBUyxHQUM1QkssSUFBT0ssSUFBVWIsS0FBWVYsSUFBV21CLEtBQWExRDtBQUMzRCxVQUFJaUUsRUFBSSxLQUFLYixHQUFXak4sQ0FBRztBQUN6QixlQUFPc04sRUFBSzVFLEVBQU8sSUFBSTFJLENBQUcsQ0FBQztBQUNsQixVQUFBOE4sRUFBSSxLQUFLYixHQUFXWSxDQUFNO0FBQ25DLGVBQU9QLEVBQUs1RSxFQUFPLElBQUltRixDQUFNLENBQUM7QUFDaEMsTUFBV25GLE1BQVd1RSxLQUNwQnZFLEVBQU8sSUFBSTFJLENBQUc7QUFBQSxJQUVsQjtBQUFBLElBQ0EsSUFBSSxPQUFPO0FBQ0gsWUFBQTBJLElBQVMsS0FBSztBQUNwQixjQUFDMEQsS0FBWTNELEdBQU1rQixFQUFNakIsQ0FBTSxHQUFHLFdBQVdKLEVBQVcsR0FDakQsUUFBUSxJQUFJSSxHQUFRLFFBQVFBLENBQU07QUFBQSxJQUMzQztBQUFBLElBQ0EsSUFBSTFJLEdBQUs7QUFDRCxZQUFBMEksSUFBUyxLQUFLLFNBQ2R1RSxJQUFZdEQsRUFBTWpCLENBQU0sR0FDeEJtRixJQUFTbEUsRUFBTTNKLENBQUc7QUFDeEIsYUFBS29NLE1BQ0MzSixHQUFXekMsR0FBSzZOLENBQU0sS0FDbEJwRixHQUFBd0UsR0FBVyxPQUFPak4sQ0FBRyxHQUV2QnlJLEdBQUF3RSxHQUFXLE9BQU9ZLENBQU0sSUFFekI3TixNQUFRNk4sSUFBU25GLEVBQU8sSUFBSTFJLENBQUcsSUFBSTBJLEVBQU8sSUFBSTFJLENBQUcsS0FBSzBJLEVBQU8sSUFBSW1GLENBQU07QUFBQSxJQUNoRjtBQUFBLElBQ0EsUUFBUUUsR0FBVTVELEdBQVM7QUFDekIsWUFBTTZELElBQVcsTUFDWHRGLElBQVNzRixFQUFTLFNBQ2xCZixJQUFZdEQsRUFBTWpCLENBQU0sR0FDeEI0RSxJQUFPSyxJQUFVYixLQUFZVixJQUFXbUIsS0FBYTFEO0FBQzNELGNBQUN1QyxLQUFZM0QsR0FBTXdFLEdBQVcsV0FBVzNFLEVBQVcsR0FDN0NJLEVBQU8sUUFBUSxDQUFDakgsR0FBT3pCLE1BQ3JCK04sRUFBUyxLQUFLNUQsR0FBU21ELEVBQUs3TCxDQUFLLEdBQUc2TCxFQUFLdE4sQ0FBRyxHQUFHZ08sQ0FBUSxDQUMvRDtBQUFBLElBQUE7QUFBQSxFQUVMO0FBQ0EsU0FBQXhOO0FBQUEsSUFDRW9OO0FBQUEsSUFDQXhCLElBQVc7QUFBQSxNQUNULEtBQUtxQixHQUFxQixLQUFLO0FBQUEsTUFDL0IsS0FBS0EsR0FBcUIsS0FBSztBQUFBLE1BQy9CLFFBQVFBLEdBQXFCLFFBQVE7QUFBQSxNQUNyQyxPQUFPQSxHQUFxQixPQUFPO0FBQUEsSUFBQSxJQUNqQztBQUFBLE1BQ0YsSUFBSWhNLEdBQU87QUFDTCxRQUFBLENBQUNrTSxLQUFXLENBQUMvRCxHQUFVbkksQ0FBSyxLQUFLLENBQUMrSyxHQUFXL0ssQ0FBSyxNQUNwREEsSUFBUWtJLEVBQU1sSSxDQUFLO0FBRWYsY0FBQWlILElBQVNpQixFQUFNLElBQUk7QUFHekIsZUFGY29ELEdBQVNyRSxDQUFNLEVBQ1IsSUFBSSxLQUFLQSxHQUFRakgsQ0FBSyxNQUV6Q2lILEVBQU8sSUFBSWpILENBQUssR0FDUm9ILEdBQUFILEdBQVEsT0FBT2pILEdBQU9BLENBQUssSUFFOUI7QUFBQSxNQUNUO0FBQUEsTUFDQSxJQUFJekIsR0FBS3lCLEdBQU87QUFDVixRQUFBLENBQUNrTSxLQUFXLENBQUMvRCxHQUFVbkksQ0FBSyxLQUFLLENBQUMrSyxHQUFXL0ssQ0FBSyxNQUNwREEsSUFBUWtJLEVBQU1sSSxDQUFLO0FBRWYsY0FBQWlILElBQVNpQixFQUFNLElBQUksR0FDbkIsRUFBRSxLQUFBbUUsR0FBSyxLQUFBRyxNQUFRbEIsR0FBU3JFLENBQU07QUFDcEMsWUFBSStELElBQVNxQixFQUFJLEtBQUtwRixHQUFRMUksQ0FBRztBQUNqQyxRQUFLeU0sTUFDSHpNLElBQU0ySixFQUFNM0osQ0FBRyxHQUNOeU0sSUFBQXFCLEVBQUksS0FBS3BGLEdBQVExSSxDQUFHO0FBSS9CLGNBQU0wQyxJQUFXdUwsRUFBSSxLQUFLdkYsR0FBUTFJLENBQUc7QUFDOUIsZUFBQTBJLEVBQUEsSUFBSTFJLEdBQUt5QixDQUFLLEdBQ2hCZ0wsSUFFTWhLLEdBQVdoQixHQUFPaUIsQ0FBUSxLQUNuQ21HLEdBQVFILEdBQVEsT0FBTzFJLEdBQUt5QixDQUFlLElBRm5Db0gsR0FBQUgsR0FBUSxPQUFPMUksR0FBS3lCLENBQUssR0FJNUI7QUFBQSxNQUNUO0FBQUEsTUFDQSxPQUFPekIsR0FBSztBQUNKLGNBQUEwSSxJQUFTaUIsRUFBTSxJQUFJLEdBQ25CLEVBQUUsS0FBQW1FLEdBQUssS0FBQUcsTUFBUWxCLEdBQVNyRSxDQUFNO0FBQ3BDLFlBQUkrRCxJQUFTcUIsRUFBSSxLQUFLcEYsR0FBUTFJLENBQUc7QUFDakMsUUFBS3lNLE1BQ0h6TSxJQUFNMkosRUFBTTNKLENBQUcsR0FDTnlNLElBQUFxQixFQUFJLEtBQUtwRixHQUFRMUksQ0FBRyxJQUlkaU8sS0FBTUEsRUFBSSxLQUFLdkYsR0FBUTFJLENBQUc7QUFDckMsY0FBQThLLElBQVNwQyxFQUFPLE9BQU8xSSxDQUFHO0FBQ2hDLGVBQUl5TSxLQUNGNUQsR0FBUUgsR0FBUSxVQUFVMUksR0FBSyxNQUFnQixHQUUxQzhLO0FBQUEsTUFDVDtBQUFBLE1BQ0EsUUFBUTtBQUNBLGNBQUFwQyxJQUFTaUIsRUFBTSxJQUFJLEdBQ25CdUUsSUFBV3hGLEVBQU8sU0FBUyxHQUUzQm9DLElBQVNwQyxFQUFPLE1BQU07QUFDNUIsZUFBSXdGLEtBQ0ZyRjtBQUFBLFVBQ0VIO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFFRixHQUVLb0M7QUFBQSxNQUFBO0FBQUEsSUFDVDtBQUFBLEVBRUosR0FDd0I7QUFBQSxJQUN0QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDVCxFQUNnQixRQUFRLENBQUNILE1BQVc7QUFDbEMsSUFBQWlELEVBQWlCakQsQ0FBTSxJQUFJcUMsR0FBcUJyQyxHQUFReUIsR0FBVXVCLENBQU87QUFBQSxFQUFBLENBQzFFLEdBQ01DO0FBQ1Q7QUFDQSxTQUFTTyxHQUE0QnJDLEdBQWE2QixHQUFTO0FBQ25ELFFBQUFDLElBQW1CRixHQUF1QjVCLEdBQWE2QixDQUFPO0FBQzdELFNBQUEsQ0FBQ2pGLEdBQVExSSxHQUFLNkwsTUFDZjdMLE1BQVEsbUJBQ0gsQ0FBQzhMLElBQ0M5TCxNQUFRLG1CQUNWOEwsSUFDRTlMLE1BQVEsWUFDVjBJLElBRUYsUUFBUTtBQUFBLElBQ2I1SCxFQUFPOE0sR0FBa0I1TixDQUFHLEtBQUtBLEtBQU8wSSxJQUFTa0YsSUFBbUJsRjtBQUFBLElBQ3BFMUk7QUFBQSxJQUNBNkw7QUFBQSxFQUNGO0FBRUo7QUFDQSxNQUFNdUMsS0FBNEI7QUFBQSxFQUNoQyxLQUFpRCxnQkFBQUQsR0FBQSxJQUFPLEVBQUs7QUFDL0QsR0FDTUUsS0FBNEI7QUFBQSxFQUNoQyxLQUFpRCxnQkFBQUYsR0FBQSxJQUFPLEVBQUk7QUFDOUQsR0FDTUcsS0FBNkI7QUFBQSxFQUNqQyxLQUFpRCxnQkFBQUgsR0FBQSxJQUFNLEVBQUs7QUFDOUQ7QUFjQSxNQUFNaEMseUJBQWtDLFFBQVEsR0FDMUNELHlCQUF5QyxRQUFRLEdBQ2pERCx5QkFBa0MsUUFBUSxHQUMxQ0QseUJBQXlDLFFBQVE7QUFDdkQsU0FBU3VDLEdBQWNDLEdBQVM7QUFDOUIsVUFBUUEsR0FBUztBQUFBLElBQ2YsS0FBSztBQUFBLElBQ0wsS0FBSztBQUNJLGFBQUE7QUFBQSxJQUNULEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFDSSxhQUFBO0FBQUEsSUFDVDtBQUNTLGFBQUE7QUFBQSxFQUFBO0FBRWI7QUFDQSxTQUFTQyxHQUFjaE4sR0FBTztBQUM1QixTQUFPQSxFQUFNLFlBQWUsQ0FBQyxPQUFPLGFBQWFBLENBQUssSUFBSSxJQUFrQjhNLEdBQWM3TSxHQUFVRCxDQUFLLENBQUM7QUFDNUc7QUFDQSxTQUFTNEssR0FBUzNELEdBQVE7QUFDcEIsU0FBQThELEdBQVc5RCxDQUFNLElBQ1pBLElBRUZnRztBQUFBLElBQ0xoRztBQUFBLElBQ0E7QUFBQSxJQUNBaUU7QUFBQSxJQUNBeUI7QUFBQSxJQUNBakM7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTd0MsR0FBZ0JqRyxHQUFRO0FBQ3hCLFNBQUFnRztBQUFBLElBQ0xoRztBQUFBLElBQ0E7QUFBQSxJQUNBbUU7QUFBQSxJQUNBd0I7QUFBQSxJQUNBbkM7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxTQUFTRSxHQUFTMUQsR0FBUTtBQUNqQixTQUFBZ0c7QUFBQSxJQUNMaEc7QUFBQSxJQUNBO0FBQUEsSUFDQWtFO0FBQUEsSUFDQTBCO0FBQUEsSUFDQXJDO0FBQUEsRUFDRjtBQUNGO0FBVUEsU0FBU3lDLEdBQXFCaEcsR0FBUW9ELEdBQWE4QyxHQUFjQyxHQUFvQkMsR0FBVTtBQVc3RixNQVZJLENBQUN4TixHQUFTb0gsQ0FBTSxLQVVoQkEsRUFBTyxXQUFjLEVBQUVvRCxLQUFlcEQsRUFBTztBQUN4QyxXQUFBQTtBQUVILFFBQUFxRyxJQUFnQkQsRUFBUyxJQUFJcEcsQ0FBTTtBQUN6QyxNQUFJcUc7QUFDSyxXQUFBQTtBQUVILFFBQUFDLElBQWFQLEdBQWMvRixDQUFNO0FBQ3ZDLE1BQUlzRyxNQUFlO0FBQ1YsV0FBQXRHO0FBRVQsUUFBTXVHLElBQVEsSUFBSTtBQUFBLElBQ2hCdkc7QUFBQSxJQUNBc0csTUFBZSxJQUFxQkgsSUFBcUJEO0FBQUEsRUFDM0Q7QUFDUyxTQUFBRSxFQUFBLElBQUlwRyxHQUFRdUcsQ0FBSyxHQUNuQkE7QUFDVDtBQUNBLFNBQVNDLEdBQVd6TixHQUFPO0FBQ3JCLFNBQUErSyxHQUFXL0ssQ0FBSyxJQUNYeU4sR0FBV3pOLEVBQU0sT0FBVSxJQUU3QixDQUFDLEVBQUVBLEtBQVNBLEVBQU07QUFDM0I7QUFDQSxTQUFTK0ssR0FBVy9LLEdBQU87QUFDekIsU0FBTyxDQUFDLEVBQUVBLEtBQVNBLEVBQU07QUFDM0I7QUFDQSxTQUFTbUksR0FBVW5JLEdBQU87QUFDeEIsU0FBTyxDQUFDLEVBQUVBLEtBQVNBLEVBQU07QUFDM0I7QUFDQSxTQUFTOEosR0FBUTlKLEdBQU87QUFDdEIsU0FBT0EsSUFBUSxDQUFDLENBQUNBLEVBQU0sVUFBYTtBQUN0QztBQUNBLFNBQVNrSSxFQUFNcUUsR0FBVTtBQUNqQixRQUFBdEUsSUFBTXNFLEtBQVlBLEVBQVM7QUFDMUIsU0FBQXRFLElBQU1DLEVBQU1ELENBQUcsSUFBSXNFO0FBQzVCO0FBQ0EsU0FBU21CLEdBQVExTixHQUFPO0FBQ2xCLFNBQUEsQ0FBQ1gsRUFBT1csR0FBTyxVQUFVLEtBQUssT0FBTyxhQUFhQSxDQUFLLEtBQ3JEcUIsR0FBQXJCLEdBQU8sWUFBWSxFQUFJLEdBRXRCQTtBQUNUO0FBQ0EsTUFBTW9JLEtBQWEsQ0FBQ3BJLE1BQVVILEdBQVNHLENBQUssSUFBSTRLLEdBQVM1SyxDQUFLLElBQUlBLEdBQzVEOEwsS0FBYSxDQUFDOUwsTUFBVUgsR0FBU0csQ0FBSyxJQUFJMkssR0FBUzNLLENBQUssSUFBSUE7QUFFbEUsU0FBUzZDLEdBQU04SyxHQUFHO0FBQ2hCLFNBQU9BLElBQUlBLEVBQUUsY0FBaUIsS0FBTztBQUN2QztBQUNBLFNBQVNDLEdBQUk1TixHQUFPO0FBQ1gsU0FBQTZOLEdBQVU3TixHQUFPLEVBQUs7QUFDL0I7QUFDQSxTQUFTOE4sR0FBVzlOLEdBQU87QUFDbEIsU0FBQTZOLEdBQVU3TixHQUFPLEVBQUk7QUFDOUI7QUFDQSxTQUFTNk4sR0FBVUUsR0FBVTdCLEdBQVM7QUFDaEMsU0FBQXJKLEdBQU1rTCxDQUFRLElBQ1RBLElBRUYsSUFBSUMsR0FBUUQsR0FBVTdCLENBQU87QUFDdEM7QUFDQSxNQUFNOEIsR0FBUTtBQUFBLEVBQ1osWUFBWWhPLEdBQU9zSyxHQUFZO0FBQ3hCLFNBQUEsTUFBTSxJQUFJOUQsR0FBSSxHQUNuQixLQUFLLFlBQWUsSUFDcEIsS0FBSyxnQkFBbUIsSUFDeEIsS0FBSyxZQUFZOEQsSUFBYXRLLElBQVFrSSxFQUFNbEksQ0FBSyxHQUNqRCxLQUFLLFNBQVNzSyxJQUFhdEssSUFBUW9JLEdBQVdwSSxDQUFLLEdBQ25ELEtBQUssZ0JBQW1Cc0s7QUFBQSxFQUFBO0FBQUEsRUFFMUIsSUFBSSxRQUFRO0FBUVIsZ0JBQUssSUFBSSxNQUFNLEdBRVYsS0FBSztBQUFBLEVBQUE7QUFBQSxFQUVkLElBQUksTUFBTWpELEdBQVU7QUFDbEIsVUFBTXBHLElBQVcsS0FBSyxXQUNoQmdOLElBQWlCLEtBQUssaUJBQW9COUYsR0FBVWQsQ0FBUSxLQUFLMEQsR0FBVzFELENBQVE7QUFDL0UsSUFBQUEsSUFBQTRHLElBQWlCNUcsSUFBV2EsRUFBTWIsQ0FBUSxHQUNqRHJHLEdBQVdxRyxHQUFVcEcsQ0FBUSxNQUMvQixLQUFLLFlBQVlvRyxHQUNqQixLQUFLLFNBQVM0RyxJQUFpQjVHLElBQVdlLEdBQVdmLENBQVEsR0FVM0QsS0FBSyxJQUFJLFFBQVE7QUFBQSxFQUVyQjtBQUVKO0FBZUEsU0FBUzZHLEdBQU1DLEdBQU07QUFDbkIsU0FBT3RMLEdBQU1zTCxDQUFJLElBQUlBLEVBQUssUUFBUUE7QUFDcEM7QUFJQSxNQUFNQyxLQUF3QjtBQUFBLEVBQzVCLEtBQUssQ0FBQ25ILEdBQVExSSxHQUFLNkwsTUFBYTdMLE1BQVEsWUFBWTBJLElBQVNpSCxHQUFNLFFBQVEsSUFBSWpILEdBQVExSSxHQUFLNkwsQ0FBUSxDQUFDO0FBQUEsRUFDckcsS0FBSyxDQUFDbkQsR0FBUTFJLEdBQUt5QixHQUFPb0ssTUFBYTtBQUMvQixVQUFBbkosSUFBV2dHLEVBQU8xSSxDQUFHO0FBQzNCLFdBQUlzRSxHQUFNNUIsQ0FBUSxLQUFLLENBQUM0QixHQUFNN0MsQ0FBSyxLQUNqQ2lCLEVBQVMsUUFBUWpCLEdBQ1YsTUFFQSxRQUFRLElBQUlpSCxHQUFRMUksR0FBS3lCLEdBQU9vSyxDQUFRO0FBQUEsRUFDakQ7QUFFSjtBQUNBLFNBQVNpRSxHQUFVQyxHQUFnQjtBQUNqQyxTQUFPYixHQUFXYSxDQUFjLElBQUlBLElBQWlCLElBQUksTUFBTUEsR0FBZ0JGLEVBQXFCO0FBQ3RHO0FBb0JBLFNBQVNHLEdBQU8xRyxHQUFRO0FBSWhCLFFBQUF2RixJQUFNaEQsRUFBUXVJLENBQU0sSUFBSSxJQUFJLE1BQU1BLEVBQU8sTUFBTSxJQUFJLENBQUM7QUFDMUQsYUFBV3RKLEtBQU9zSjtBQUNoQixJQUFBdkYsRUFBSS9ELENBQUcsSUFBSWlRLEdBQWMzRyxHQUFRdEosQ0FBRztBQUUvQixTQUFBK0Q7QUFDVDtBQUNBLE1BQU1tTSxHQUFjO0FBQUEsRUFDbEIsWUFBWUMsR0FBUzFMLEdBQU0yTCxHQUFlO0FBQ3hDLFNBQUssVUFBVUQsR0FDZixLQUFLLE9BQU8xTCxHQUNaLEtBQUssZ0JBQWdCMkwsR0FDckIsS0FBSyxZQUFlLElBQ3BCLEtBQUssU0FBUztBQUFBLEVBQUE7QUFBQSxFQUVoQixJQUFJLFFBQVE7QUFDVixVQUFNblEsSUFBTSxLQUFLLFFBQVEsS0FBSyxJQUFJO0FBQ2xDLFdBQU8sS0FBSyxTQUFTQSxNQUFRLFNBQVMsS0FBSyxnQkFBZ0JBO0FBQUEsRUFBQTtBQUFBLEVBRTdELElBQUksTUFBTW9RLEdBQVE7QUFDWCxTQUFBLFFBQVEsS0FBSyxJQUFJLElBQUlBO0FBQUEsRUFBQTtBQUFBLEVBRTVCLElBQUksTUFBTTtBQUNSLFdBQU9oSCxHQUFtQk0sRUFBTSxLQUFLLE9BQU8sR0FBRyxLQUFLLElBQUk7QUFBQSxFQUFBO0FBRTVEO0FBQ0EsTUFBTTJHLEdBQWM7QUFBQSxFQUNsQixZQUFZQyxHQUFTO0FBQ25CLFNBQUssVUFBVUEsR0FDZixLQUFLLFlBQWUsSUFDcEIsS0FBSyxpQkFBb0IsSUFDekIsS0FBSyxTQUFTO0FBQUEsRUFBQTtBQUFBLEVBRWhCLElBQUksUUFBUTtBQUNILFdBQUEsS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQUE7QUFFdEM7QUFDQSxTQUFTQyxHQUFNQyxHQUFRelEsR0FBSzBRLEdBQWM7QUFDcEMsU0FBQXBNLEdBQU1tTSxDQUFNLElBQ1BBLElBQ0V0UCxFQUFXc1AsQ0FBTSxJQUNuQixJQUFJSCxHQUFjRyxDQUFNLElBQ3RCblAsR0FBU21QLENBQU0sS0FBSyxVQUFVLFNBQVMsSUFDekNSLEdBQWNRLEdBQVF6USxHQUFLMFEsQ0FBWSxJQUV2Q3JCLEdBQUlvQixDQUFNO0FBRXJCO0FBQ0EsU0FBU1IsR0FBY1EsR0FBUXpRLEdBQUswUSxHQUFjO0FBQzFDLFFBQUF6USxJQUFNd1EsRUFBT3pRLENBQUc7QUFDZixTQUFBc0UsR0FBTXJFLENBQUcsSUFBSUEsSUFBTSxJQUFJaVEsR0FBY08sR0FBUXpRLEdBQUswUSxDQUFZO0FBQ3ZFO0FBRUEsTUFBTUMsR0FBZ0I7QUFBQSxFQUNwQixZQUFZNU8sR0FBSTZPLEdBQVFDLEdBQU87QUFDN0IsU0FBSyxLQUFLOU8sR0FDVixLQUFLLFNBQVM2TyxHQUlkLEtBQUssU0FBUyxRQUlULEtBQUEsTUFBTSxJQUFJM0ksR0FBSSxJQUFJLEdBSXZCLEtBQUssWUFBWSxJQU1qQixLQUFLLE9BQU8sUUFJWixLQUFLLFdBQVcsUUFJaEIsS0FBSyxRQUFRLElBSWIsS0FBSyxnQkFBZ0JaLEtBQWdCLEdBSXJDLEtBQUssT0FBTyxRQUVaLEtBQUssU0FBUyxNQUNULEtBQUEsaUJBQW9CLENBQUN1SixHQUMxQixLQUFLLFFBQVFDO0FBQUEsRUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2YsU0FBUztBQUVILFFBREosS0FBSyxTQUFTLElBQ1YsRUFBRSxLQUFLLFFBQVE7QUFBQSxJQUNuQnRMLE9BQWM7QUFDWixhQUFBRyxHQUFNLE1BQU0sRUFBSSxHQUNUO0FBQUEsRUFDNkM7QUFBQSxFQUV4RCxJQUFJLFFBQVE7QUFDVixVQUFNTyxJQUlELEtBQUssSUFBSSxNQUFNO0FBQ3BCLFdBQUFrQixHQUFnQixJQUFJLEdBQ2hCbEIsTUFDR0EsRUFBQSxVQUFVLEtBQUssSUFBSSxVQUVuQixLQUFLO0FBQUEsRUFBQTtBQUFBLEVBRWQsSUFBSSxNQUFNNkMsR0FBVTtBQUNsQixJQUFJLEtBQUssVUFDUCxLQUFLLE9BQU9BLENBQVE7QUFBQSxFQUd0QjtBQUVKO0FBQ0EsU0FBUzFCLEdBQVMwSixHQUFpQkMsR0FBY0YsSUFBUSxJQUFPO0FBQzFELE1BQUFHLEdBQ0FKO0FBQ0EsU0FBQXpQLEVBQVcyUCxDQUFlLElBQ25CRSxJQUFBRixLQUVURSxJQUFTRixFQUFnQixLQUN6QkYsSUFBU0UsRUFBZ0IsTUFFZCxJQUFJSCxHQUFnQkssR0FBUUosR0FBUUMsQ0FBSztBQU14RDtBQThCQSxNQUFNSSxLQUF3QixDQUFDLEdBQ3pCQyx5QkFBaUMsUUFBUTtBQUMvQyxJQUFJQztBQUlKLFNBQVNDLEdBQWlCQyxHQUFXQyxJQUFlLElBQU9DLElBQVFKLElBQWU7QUFDaEYsTUFBSUksR0FBTztBQUNMLFFBQUFDLElBQVdOLEdBQVcsSUFBSUssQ0FBSztBQUNuQyxJQUFLQyxLQUFVTixHQUFXLElBQUlLLEdBQU9DLElBQVcsRUFBRSxHQUNsREEsRUFBUyxLQUFLSCxDQUFTO0FBQUEsRUFBQTtBQU0zQjtBQUNBLFNBQVNJLEdBQU1oQixHQUFRaUIsR0FBSUMsSUFBVXpSLEdBQVc7QUFDOUMsUUFBTSxFQUFFLFdBQUEwUixHQUFXLE1BQUFDLEdBQU0sTUFBQUMsR0FBTSxXQUFBQyxHQUFXLFlBQUFDLEdBQVksTUFBQUMsTUFBU04sR0FRekRPLElBQWlCLENBQUNDLE1BQ2xCTixJQUFhTSxJQUNidkksR0FBVXVJLENBQU8sS0FBS04sTUFBUyxNQUFTQSxNQUFTLElBQzVDTyxHQUFTRCxHQUFTLENBQUMsSUFDckJDLEdBQVNELENBQU87QUFFckJFLE1BQUFBLEdBQ0FyQixHQUNBakosR0FDQXVLLEdBQ0FDLElBQWUsSUFDZkMsSUFBZ0I7QUErQ3BCLE1BOUNJbE8sR0FBTW1NLENBQU0sS0FDZE8sSUFBUyxNQUFNUCxFQUFPLE9BQ3RCOEIsSUFBZTNJLEdBQVU2RyxDQUFNLEtBQ3RCdkIsR0FBV3VCLENBQU0sS0FDakJPLElBQUEsTUFBTWtCLEVBQWV6QixDQUFNLEdBQ3JCOEIsSUFBQSxNQUNOeFIsRUFBUTBQLENBQU0sS0FDUCtCLElBQUEsSUFDREQsSUFBQTlCLEVBQU8sS0FBSyxDQUFDZ0MsTUFBTXZELEdBQVd1RCxDQUFDLEtBQUs3SSxHQUFVNkksQ0FBQyxDQUFDLEdBQy9EekIsSUFBUyxNQUFNUCxFQUFPLElBQUksQ0FBQ2dDLE1BQU07QUFDM0IsUUFBQW5PLEdBQU1tTyxDQUFDO0FBQ1QsYUFBT0EsRUFBRTtBQUNYLFFBQVd2RCxHQUFXdUQsQ0FBQztBQUNyQixhQUFPUCxFQUFlTyxDQUFDO0FBQ3pCLFFBQVd0UixFQUFXc1IsQ0FBQztBQUNyQixhQUFPUixJQUFPQSxFQUFLUSxHQUFHLENBQUMsSUFBSUEsRUFBRTtBQUFBLEVBRy9CLENBQ0QsS0FDUXRSLEVBQVdzUCxDQUFNLElBQ3RCaUIsSUFDRlYsSUFBU2lCLElBQU8sTUFBTUEsRUFBS3hCLEdBQVEsQ0FBQyxJQUFJQSxJQUV4Q08sSUFBUyxNQUFNO0FBQ2IsUUFBSWpKLEdBQVM7QUFDRyxNQUFBRixHQUFBO0FBQ1YsVUFBQTtBQUNNLFFBQUFFLEVBQUE7QUFBQSxNQUFBLFVBQ1I7QUFDYyxRQUFBRCxHQUFBO0FBQUEsTUFBQTtBQUFBLElBQ2hCO0FBRUYsVUFBTTRLLElBQWdCdkI7QUFDTmtCLElBQUFBLEtBQUFBO0FBQ1osUUFBQTtBQUNLLGFBQUFKLElBQU9BLEVBQUt4QixHQUFRLEdBQUcsQ0FBQzZCLENBQVksQ0FBQyxJQUFJN0IsRUFBTzZCLENBQVk7QUFBQSxJQUFBLFVBQ25FO0FBQ2dCLE1BQUFuQixLQUFBdUI7QUFBQSxJQUFBO0FBQUEsRUFFcEIsSUFHTzFCLElBQUE1USxJQUdQc1IsS0FBTUcsR0FBTTtBQUNkLFVBQU1jLElBQWEzQixHQUNiNEIsSUFBUWYsTUFBUyxLQUFPLFFBQVdBO0FBQ3pDLElBQUFiLElBQVMsTUFBTW9CLEdBQVNPLEVBQVcsR0FBR0MsQ0FBSztBQUFBLEVBQUE7QUFFN0MsUUFBTUMsSUFBUXZOLEdBQWdCLEdBQ3hCd04sSUFBYyxNQUFNO0FBQ3hCVCxJQUFBQSxFQUFPLEtBQUssR0FDUlEsS0FBU0EsRUFBTSxVQUNWcFMsR0FBQW9TLEVBQU0sU0FBU1IsQ0FBTTtBQUFBLEVBRWhDO0FBQ0EsTUFBSVAsS0FBUUosR0FBSTtBQUNkLFVBQU1xQixJQUFNckI7QUFDWixJQUFBQSxJQUFLLElBQUl6SCxNQUFTO0FBQ2hCLE1BQUE4SSxFQUFJLEdBQUc5SSxDQUFJLEdBQ0M2SSxFQUFBO0FBQUEsSUFDZDtBQUFBLEVBQUE7QUFFRSxNQUFBcFEsSUFBVzhQLElBQWdCLElBQUksTUFBTS9CLEVBQU8sTUFBTSxFQUFFLEtBQUtRLEVBQXFCLElBQUlBO0FBQ2hGLFFBQUErQixJQUFNLENBQUNDLE1BQXNCO0FBQzdCLFFBQUEsSUFBRVosRUFBTyxRQUFRLE1BQU0sQ0FBQ0EsRUFBTyxTQUFTLENBQUNZO0FBRzdDLFVBQUl2QixHQUFJO0FBQ0EsY0FBQTVJLElBQVd1SixFQUFPLElBQUk7QUFDNUIsWUFBSVIsS0FBUVUsTUFBaUJDLElBQWdCMUosRUFBUyxLQUFLLENBQUNqRSxHQUFHakUsTUFBTTZCLEdBQVdvQyxHQUFHbkMsRUFBUzlCLENBQUMsQ0FBQyxDQUFDLElBQUk2QixHQUFXcUcsR0FBVXBHLENBQVEsSUFBSTtBQUNsSSxVQUFJcUYsS0FDTUEsRUFBQTtBQUVWLGdCQUFNbUwsSUFBaUIvQjtBQUNQa0IsVUFBQUEsS0FBQUE7QUFDWixjQUFBO0FBQ0Ysa0JBQU1wSSxJQUFPO0FBQUEsY0FDWG5CO0FBQUE7QUFBQSxjQUVBcEcsTUFBYXVPLEtBQXdCLFNBQVN1QixLQUFpQjlQLEVBQVMsQ0FBQyxNQUFNdU8sS0FBd0IsQ0FBQSxJQUFLdk87QUFBQSxjQUM1RzRQO0FBQUEsWUFDRjtBQUNPLFlBQUFMLElBQUFBLEVBQUtQLEdBQUksR0FBR3pILENBQUk7QUFBQTtBQUFBLGNBRXJCeUgsRUFBRyxHQUFHekgsQ0FBSTtBQUFBLGVBRUR2SCxJQUFBb0c7QUFBQSxVQUFBLFVBQ1g7QUFDZ0IsWUFBQXFJLEtBQUErQjtBQUFBLFVBQUE7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFFQWIsUUFBQUEsRUFBTyxJQUFJO0FBQUEsRUFFZjtBQUNBLFNBQUlMLEtBQ0ZBLEVBQVdnQixDQUFHLEdBRWhCWCxJQUFTLElBQUk1TSxHQUFldUwsQ0FBTSxHQUNsQ3FCLEVBQU8sWUFBWU4sSUFBWSxNQUFNQSxFQUFVaUIsR0FBSyxFQUFLLElBQUlBLEdBQzdEVixJQUFlLENBQUN2USxNQUFPcVAsR0FBaUJyUCxHQUFJLElBQU9zUSxDQUFNLEdBQy9DQSxJQUFBQSxFQUFPLFNBQVMsTUFBTTtBQUN4QixVQUFBYixJQUFXTixHQUFXLElBQUltQixDQUFNO0FBQ3RDLFFBQUliLEdBQVU7QUFDWixVQUFJUztBQUNGLFFBQUFBLEVBQUtULEdBQVUsQ0FBQztBQUFBO0FBRUwsbUJBQUEyQixLQUFZM0IsRUFBbUIsQ0FBQTJCLEVBQUE7QUFFNUMsTUFBQWpDLEdBQVcsT0FBT21CLENBQU07QUFBQSxJQUFBO0FBQUEsRUFFNUIsR0FLSVgsSUFDRUUsSUFDRm9CLEVBQUksRUFBSSxJQUVSdFEsSUFBVzJQLEVBQU8sSUFBSSxJQUVmTixJQUNUQSxFQUFVaUIsRUFBSSxLQUFLLE1BQU0sRUFBSSxHQUFHLEVBQUksSUFFcENYLEVBQU8sSUFBSSxHQUViUyxFQUFZLFFBQVFULEVBQU8sTUFBTSxLQUFLQSxDQUFNLEdBQzVDUyxFQUFZLFNBQVNULEVBQU8sT0FBTyxLQUFLQSxDQUFNLEdBQzlDUyxFQUFZLE9BQU9BLEdBQ1pBO0FBQ1Q7QUFDQSxTQUFTVixHQUFTM1EsR0FBT21SLElBQVEsT0FBVVEsR0FBTTtBQUszQyxNQUpBUixLQUFTLEtBQUssQ0FBQ3RSLEdBQVNHLENBQUssS0FBS0EsRUFBTSxhQUdyQzJSLElBQUFBLHlCQUE0QixJQUFJLEdBQ25DQSxFQUFLLElBQUkzUixDQUFLO0FBQ1QsV0FBQUE7QUFJTCxNQUZKMlIsRUFBSyxJQUFJM1IsQ0FBSyxHQUNkbVIsS0FDSXRPLEdBQU03QyxDQUFLO0FBQ0osSUFBQTJRLEdBQUEzUSxFQUFNLE9BQU9tUixHQUFPUSxDQUFJO0FBQUEsV0FDeEJyUyxFQUFRVSxDQUFLO0FBQ3RCLGFBQVNiLElBQUksR0FBR0EsSUFBSWEsRUFBTSxRQUFRYjtBQUNoQyxNQUFBd1IsR0FBUzNRLEVBQU1iLENBQUMsR0FBR2dTLEdBQU9RLENBQUk7QUFBQSxXQUV2QmxTLEdBQU1PLENBQUssS0FBS1QsR0FBTVMsQ0FBSztBQUM5QixJQUFBQSxFQUFBLFFBQVEsQ0FBQ29ELE1BQU07QUFDVixNQUFBdU4sR0FBQXZOLEdBQUcrTixHQUFPUSxDQUFJO0FBQUEsSUFBQSxDQUN4QjtBQUFBLFdBQ1F6UixHQUFjRixDQUFLLEdBQUc7QUFDL0IsZUFBV3pCLEtBQU95QjtBQUNoQixNQUFBMlEsR0FBUzNRLEVBQU16QixDQUFHLEdBQUc0UyxHQUFPUSxDQUFJO0FBRWxDLGVBQVdwVCxLQUFPLE9BQU8sc0JBQXNCeUIsQ0FBSztBQUNsRCxNQUFJLE9BQU8sVUFBVSxxQkFBcUIsS0FBS0EsR0FBT3pCLENBQUcsS0FDdkRvUyxHQUFTM1EsRUFBTXpCLENBQUcsR0FBRzRTLEdBQU9RLENBQUk7QUFBQSxFQUVwQztBQUVLLFNBQUEzUjtBQUNUO0FDcjJEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb01BLFNBQVM0UixHQUFzQnRSLEdBQUl1UixHQUFVM0ssR0FBTXNCLEdBQU07QUFDbkQsTUFBQTtBQUNGLFdBQU9BLElBQU9sSSxFQUFHLEdBQUdrSSxDQUFJLElBQUlsSSxFQUFHO0FBQUEsV0FDeEIrRSxHQUFLO0FBQ0EsSUFBQXlNLEdBQUF6TSxHQUFLd00sR0FBVTNLLENBQUk7QUFBQSxFQUFBO0FBRW5DO0FBQ0EsU0FBUzZLLEdBQTJCelIsR0FBSXVSLEdBQVUzSyxHQUFNc0IsR0FBTTtBQUN4RCxNQUFBOUksRUFBV1ksQ0FBRSxHQUFHO0FBQ2xCLFVBQU13QixJQUFNOFAsR0FBc0J0UixHQUFJdVIsR0FBVTNLLEdBQU1zQixDQUFJO0FBQ3RELFdBQUExRyxLQUFPaEMsR0FBVWdDLENBQUcsS0FDbEJBLEVBQUEsTUFBTSxDQUFDdUQsTUFBUTtBQUNMLE1BQUF5TSxHQUFBek0sR0FBS3dNLEdBQVUzSyxDQUFJO0FBQUEsSUFBQSxDQUNoQyxHQUVJcEY7QUFBQSxFQUFBO0FBRUwsTUFBQXhDLEVBQVFnQixDQUFFLEdBQUc7QUFDZixVQUFNMFIsSUFBUyxDQUFDO0FBQ2hCLGFBQVMsSUFBSSxHQUFHLElBQUkxUixFQUFHLFFBQVE7QUFDdEIsTUFBQTBSLEVBQUEsS0FBS0QsR0FBMkJ6UixFQUFHLENBQUMsR0FBR3VSLEdBQVUzSyxHQUFNc0IsQ0FBSSxDQUFDO0FBRTlELFdBQUF3SjtBQUFBLEVBQUE7QUFNWDtBQUNBLFNBQVNGLEdBQVl6TSxHQUFLd00sR0FBVTNLLEdBQU0rSyxJQUFhLElBQU07QUFDckQsUUFBQUMsSUFBZUwsSUFBV0EsRUFBUyxRQUFRLE1BQzNDLEVBQUUsY0FBQU0sR0FBYyxpQ0FBQUMsTUFBb0NQLEtBQVlBLEVBQVMsV0FBVyxVQUFVcFQ7QUFDcEcsTUFBSW9ULEdBQVU7QUFDWixRQUFJUSxJQUFNUixFQUFTO0FBQ25CLFVBQU1TLElBQWtCVCxFQUFTLE9BQzNCVSxJQUFtRiw4Q0FBOENyTCxDQUFJO0FBQzNJLFdBQU9tTCxLQUFLO0FBQ1YsWUFBTUcsSUFBcUJILEVBQUk7QUFDL0IsVUFBSUc7QUFDRixpQkFBU3JULElBQUksR0FBR0EsSUFBSXFULEVBQW1CLFFBQVFyVDtBQUM3QyxjQUFJcVQsRUFBbUJyVCxDQUFDLEVBQUVrRyxHQUFLaU4sR0FBaUJDLENBQVMsTUFBTTtBQUM3RDtBQUFBO0FBSU4sTUFBQUYsSUFBTUEsRUFBSTtBQUFBLElBQUE7QUFFWixRQUFJRixHQUFjO0FBQ0YsTUFBQS9MLEdBQUEsR0FDUXdMLEdBQUFPLEdBQWMsTUFBTSxJQUFJO0FBQUEsUUFDNUM5TTtBQUFBLFFBQ0FpTjtBQUFBLFFBQ0FDO0FBQUEsTUFBQSxDQUNELEdBQ2FsTSxHQUFBO0FBQ2Q7QUFBQSxJQUFBO0FBQUEsRUFDRjtBQUVGLEVBQUFvTSxHQUFTcE4sR0FBSzZCLEdBQU1nTCxHQUFjRCxHQUFZRyxDQUErQjtBQUMvRTtBQUNBLFNBQVNLLEdBQVNwTixHQUFLNkIsR0FBTWdMLEdBQWNELElBQWEsSUFBTVMsSUFBYyxJQUFPO01BZXRFQTtBQUNILFVBQUFyTjtBQUVOLFVBQVEsTUFBTUEsQ0FBRztBQUVyQjtBQUVBLE1BQU1zTixLQUFRLENBQUM7QUFDZixJQUFJQyxLQUFhO0FBQ2pCLE1BQU1DLEtBQXNCLENBQUM7QUFDN0IsSUFBSUMsS0FBcUIsTUFDckJDLEtBQWlCO0FBQ3JCLE1BQU1DLDZCQUEwQyxRQUFRO0FBQ3hELElBQUlDLEtBQXNCO0FBRTFCLFNBQVNDLEdBQVM1UyxHQUFJO0FBQ3BCLFFBQU02UyxJQUFJRixNQUF1QkQ7QUFDMUIsU0FBQTFTLElBQUs2UyxFQUFFLEtBQUssT0FBTzdTLEVBQUcsS0FBSyxJQUFJLElBQUlBLENBQUUsSUFBSTZTO0FBQ2xEO0FBQ0EsU0FBU0MsR0FBbUJDLEdBQUk7QUFDOUIsTUFBSUMsSUFBUVYsS0FBYSxHQUNyQlcsSUFBTVosR0FBTTtBQUNoQixTQUFPVyxJQUFRQyxLQUFLO0FBQ1osVUFBQUMsSUFBU0YsSUFBUUMsTUFBUSxHQUN6QkUsSUFBWWQsR0FBTWEsQ0FBTSxHQUN4QkUsSUFBY0MsR0FBTUYsQ0FBUztBQUNuQyxJQUFJQyxJQUFjTCxLQUFNSyxNQUFnQkwsS0FBTUksRUFBVSxRQUFRLElBQzlESCxJQUFRRSxJQUFTLElBRVhELElBQUFDO0FBQUEsRUFDUjtBQUVLLFNBQUFGO0FBQ1Q7QUFDQSxTQUFTTSxHQUFTckMsR0FBSztBQUNqQixNQUFBLEVBQUVBLEVBQUksUUFBUSxJQUFJO0FBQ2QsVUFBQXNDLElBQVFGLEdBQU1wQyxDQUFHLEdBQ2pCdUMsSUFBVW5CLEdBQU1BLEdBQU0sU0FBUyxDQUFDO0FBQ3RDLElBQUksQ0FBQ21CO0FBQUEsSUFDTCxFQUFFdkMsRUFBSSxRQUFRLE1BQU1zQyxLQUFTRixHQUFNRyxDQUFPLElBQ3hDbkIsR0FBTSxLQUFLcEIsQ0FBRyxJQUVkb0IsR0FBTSxPQUFPUyxHQUFtQlMsQ0FBSyxHQUFHLEdBQUd0QyxDQUFHLEdBRWhEQSxFQUFJLFNBQVMsR0FDRndDLEdBQUE7QUFBQSxFQUFBO0FBRWY7QUFDQSxTQUFTQSxLQUFhO0FBQ3BCLEVBQUtkLE9BQ21CQSxLQUFBRCxHQUFnQixLQUFLZ0IsRUFBUztBQUV4RDtBQUNBLFNBQVNDLEdBQWlCaEUsR0FBSTtBQUN4QixFQUFDM1EsRUFBUTJRLENBQUUsSUFRTzRDLEdBQUEsS0FBSyxHQUFHNUMsQ0FBRSxJQVAxQjZDLE1BQXNCN0MsRUFBRyxPQUFPLEtBQ2xDNkMsR0FBbUIsT0FBT0MsS0FBaUIsR0FBRyxHQUFHOUMsQ0FBRSxJQUN4Q0EsRUFBRyxRQUFRLE1BQ3RCNEMsR0FBb0IsS0FBSzVDLENBQUUsR0FDM0JBLEVBQUcsU0FBUyxJQUtMOEQsR0FBQTtBQUNiO0FBQ0EsU0FBU0csR0FBaUJyQyxHQUFVRixHQUFNeFMsSUFBSXlULEtBQWEsR0FBRztBQUlyRCxTQUFBelQsSUFBSXdULEdBQU0sUUFBUXhULEtBQUs7QUFDdEIsVUFBQThRLElBQUswQyxHQUFNeFQsQ0FBQztBQUNkLFFBQUE4USxLQUFNQSxFQUFHLFFBQVEsR0FBRztBQUN0QixVQUFJNEIsS0FBWTVCLEVBQUcsT0FBTzRCLEVBQVM7QUFDakM7QUFLSSxNQUFBYyxHQUFBLE9BQU94VCxHQUFHLENBQUMsR0FDakJBLEtBQ0k4USxFQUFHLFFBQVEsTUFDYkEsRUFBRyxTQUFTLEtBRVhBLEVBQUEsR0FDR0EsRUFBRyxRQUFRLE1BQ2ZBLEVBQUcsU0FBUztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBRUo7QUFDQSxTQUFTa0UsR0FBa0J4QyxHQUFNO0FBQy9CLE1BQUlrQixHQUFvQixRQUFRO0FBQzlCLFVBQU11QixJQUFVLENBQUMsR0FBRyxJQUFJLElBQUl2QixFQUFtQixDQUFDLEVBQUU7QUFBQSxNQUNoRCxDQUFDd0IsR0FBR0MsTUFBTVgsR0FBTVUsQ0FBQyxJQUFJVixHQUFNVyxDQUFDO0FBQUEsSUFDOUI7QUFFQSxRQURBekIsR0FBb0IsU0FBUyxHQUN6QkMsSUFBb0I7QUFDSCxNQUFBQSxHQUFBLEtBQUssR0FBR3NCLENBQU87QUFDbEM7QUFBQSxJQUFBO0FBTUYsU0FKcUJ0QixLQUFBc0IsR0FJaEJyQixLQUFpQixHQUFHQSxLQUFpQkQsR0FBbUIsUUFBUUMsTUFBa0I7QUFDL0UsWUFBQTlDLElBQUs2QyxHQUFtQkMsRUFBYztBQUl4QyxNQUFBOUMsRUFBRyxRQUFRLE1BQ2JBLEVBQUcsU0FBUyxLQUVSQSxFQUFHLFFBQVEsS0FBT0EsRUFBQSxHQUN4QkEsRUFBRyxTQUFTO0FBQUEsSUFBQztBQUVNLElBQUE2QyxLQUFBLE1BQ0pDLEtBQUE7QUFBQSxFQUFBO0FBRXJCO0FBQ0EsTUFBTVksS0FBUSxDQUFDcEMsTUFBUUEsRUFBSSxNQUFNLE9BQU9BLEVBQUksUUFBUSxJQUFJLEtBQUssUUFBV0EsRUFBSTtBQUM1RSxTQUFTeUMsR0FBVXJDLEdBQU07QUFLbkIsTUFBQTtBQUNGLFNBQUtpQixLQUFhLEdBQUdBLEtBQWFELEdBQU0sUUFBUUMsTUFBYztBQUN0RCxZQUFBckIsSUFBTW9CLEdBQU1DLEVBQVU7QUFDNUIsTUFBSXJCLEtBQU8sRUFBRUEsRUFBSSxRQUFRLE9BSW5CQSxFQUFJLFFBQVEsTUFDZEEsRUFBSSxTQUFTLEtBRWZLO0FBQUEsUUFDRUw7QUFBQSxRQUNBQSxFQUFJO0FBQUEsUUFDSkEsRUFBSSxJQUFJLEtBQUs7QUFBQSxNQUNmLEdBQ01BLEVBQUksUUFBUSxNQUNoQkEsRUFBSSxTQUFTO0FBQUEsSUFFakI7QUFBQSxFQUNGLFVBQ0E7QUFDTyxXQUFBcUIsS0FBYUQsR0FBTSxRQUFRQyxNQUFjO0FBQ3hDLFlBQUFyQixJQUFNb0IsR0FBTUMsRUFBVTtBQUM1QixNQUFJckIsTUFDRkEsRUFBSSxTQUFTO0FBQUEsSUFDZjtBQUVXLElBQUFxQixLQUFBLElBQ2JELEdBQU0sU0FBUyxHQUNmd0IsR0FBc0IsR0FDQWxCLEtBQUEsT0FDbEJOLEdBQU0sVUFBVUUsR0FBb0IsV0FDdENtQixHQUFjO0FBQUEsRUFDaEI7QUFFSjtBQXdPQSxJQUFJTyxLQUEyQixNQUMzQkMsS0FBaUI7QUFDckIsU0FBU0MsR0FBNEI1QyxHQUFVO0FBQzdDLFFBQU1yTSxJQUFPK087QUFDYyxTQUFBQSxLQUFBMUMsR0FDVjJDLEtBQUEzQyxLQUFZQSxFQUFTLEtBQUssYUFBYSxNQUNqRHJNO0FBQ1Q7QUFRQSxTQUFTa1AsR0FBUXBVLEdBQUlxVSxJQUFNSixJQUEwQkssR0FBaUI7QUFFcEUsTUFESSxDQUFDRCxLQUNEclUsRUFBRztBQUNFLFdBQUFBO0FBRUgsUUFBQXVVLElBQXNCLElBQUlyTSxNQUFTO0FBQ3ZDLElBQUlxTSxFQUFvQixNQUN0QkMsR0FBaUIsRUFBRTtBQUVmLFVBQUFDLElBQWVOLEdBQTRCRSxDQUFHO0FBQ2hELFFBQUE3UztBQUNBLFFBQUE7QUFDSSxNQUFBQSxJQUFBeEIsRUFBRyxHQUFHa0ksQ0FBSTtBQUFBLElBQUEsVUFDaEI7QUFDQSxNQUFBaU0sR0FBNEJNLENBQVksR0FDcENGLEVBQW9CLE1BQ3RCQyxHQUFpQixDQUFDO0FBQUEsSUFDcEI7QUFLSyxXQUFBaFQ7QUFBQSxFQUNUO0FBQ0EsU0FBQStTLEVBQW9CLEtBQUssSUFDekJBLEVBQW9CLEtBQUssSUFDekJBLEVBQW9CLEtBQUssSUFDbEJBO0FBQ1Q7QUFPQSxTQUFTRyxHQUFlQyxHQUFPQyxHQUFZO0FBQ3pDLE1BQUlYLE9BQTZCO0FBRXhCLFdBQUFVO0FBRUgsUUFBQXBELElBQVdzRCxHQUEyQlosRUFBd0IsR0FDOURhLElBQVdILEVBQU0sU0FBU0EsRUFBTSxPQUFPLENBQUE7QUFDN0MsV0FBUzlWLElBQUksR0FBR0EsSUFBSStWLEVBQVcsUUFBUS9WLEtBQUs7QUFDdEMsUUFBQSxDQUFDa1csR0FBS3JWLEdBQU9vQixHQUFLa1UsSUFBWTdXLENBQVMsSUFBSXlXLEVBQVcvVixDQUFDO0FBQzNELElBQUlrVyxNQUNFM1YsRUFBVzJWLENBQUcsTUFDVkEsSUFBQTtBQUFBLE1BQ0osU0FBU0E7QUFBQSxNQUNULFNBQVNBO0FBQUEsSUFDWCxJQUVFQSxFQUFJLFFBQ04xRSxHQUFTM1EsQ0FBSyxHQUVoQm9WLEVBQVMsS0FBSztBQUFBLE1BQ1osS0FBQUM7QUFBQSxNQUNBLFVBQUF4RDtBQUFBLE1BQ0EsT0FBQTdSO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixLQUFBb0I7QUFBQSxNQUNBLFdBQUFrVTtBQUFBLElBQUEsQ0FDRDtBQUFBLEVBQ0g7QUFFSyxTQUFBTDtBQUNUO0FBQ0EsU0FBU00sR0FBb0JOLEdBQU9PLEdBQVczRCxHQUFVcFAsR0FBTTtBQUM3RCxRQUFNMlMsSUFBV0gsRUFBTSxNQUNqQlEsSUFBY0QsS0FBYUEsRUFBVTtBQUMzQyxXQUFTclcsSUFBSSxHQUFHQSxJQUFJaVcsRUFBUyxRQUFRalcsS0FBSztBQUNsQyxVQUFBdVcsSUFBVU4sRUFBU2pXLENBQUM7QUFDMUIsSUFBSXNXLE1BQ01DLEVBQUEsV0FBV0QsRUFBWXRXLENBQUMsRUFBRTtBQUVoQyxRQUFBd1csSUFBT0QsRUFBUSxJQUFJalQsQ0FBSTtBQUMzQixJQUFJa1QsTUFDWXZQLEdBQUEsR0FDYTJMLEdBQUE0RCxHQUFNOUQsR0FBVSxHQUFHO0FBQUEsTUFDNUNvRCxFQUFNO0FBQUEsTUFDTlM7QUFBQSxNQUNBVDtBQUFBLE1BQ0FPO0FBQUEsSUFBQSxDQUNELEdBQ2FuUCxHQUFBO0FBQUEsRUFDaEI7QUFFSjtBQUVBLE1BQU11UCxLQUFpQixPQUFPLE1BQU0sR0FDOUJDLEtBQWEsQ0FBQzNPLE1BQVNBLEVBQUssY0FDNUI0TyxLQUFxQixDQUFDQyxNQUFVQSxNQUFVQSxFQUFNLFlBQVlBLEVBQU0sYUFBYSxLQUMvRUMsS0FBcUIsQ0FBQ0QsTUFBVUEsTUFBVUEsRUFBTSxTQUFTQSxFQUFNLFVBQVUsS0FDekVFLEtBQWMsQ0FBQ2hQLE1BQVcsT0FBTyxjQUFlLGVBQWVBLGFBQWtCLFlBQ2pGaVAsS0FBaUIsQ0FBQ2pQLE1BQVcsT0FBTyxpQkFBa0IsY0FBY0EsYUFBa0IsZUFDdEZrUCxLQUFnQixDQUFDSixHQUFPSyxNQUFXO0FBQ2pDLFFBQUFDLElBQWlCTixLQUFTQSxFQUFNO0FBQ2xDLFNBQUFwVyxHQUFTMFcsQ0FBYyxJQUNwQkQsSUFNWUEsRUFBT0MsQ0FBYyxJQUY3QixPQWNGQTtBQUVYLEdBQ01DLEtBQWU7QUFBQSxFQUNuQixNQUFNO0FBQUEsRUFDTixjQUFjO0FBQUEsRUFDZCxRQUFRQyxHQUFJQyxHQUFJQyxHQUFXQyxHQUFRQyxHQUFpQkMsR0FBZ0JDLEdBQVdDLEdBQWNDLEdBQVdDLEdBQVc7QUFDM0csVUFBQTtBQUFBLE1BQ0osSUFBSUM7QUFBQSxNQUNKLElBQUlDO0FBQUEsTUFDSixLQUFLQztBQUFBLE1BQ0wsR0FBRyxFQUFFLFFBQUFDLEdBQVEsZUFBQUMsR0FBZSxZQUFBQyxHQUFZLGVBQUFDLEVBQWM7QUFBQSxJQUFBLElBQ3BEUCxHQUNFUSxJQUFXMUIsR0FBbUJVLEVBQUcsS0FBSztBQUM1QyxRQUFJLEVBQUUsV0FBQWlCLEdBQVcsVUFBQUMsR0FBVSxpQkFBQUMsRUFBb0IsSUFBQW5CO0FBSy9DLFFBQUlELEtBQU0sTUFBTTtBQUNSLFlBQUFxQixJQUFjcEIsRUFBRyxLQUFtRmMsRUFBVyxFQUFFLEdBQ2pITyxJQUFhckIsRUFBRyxTQUFxRmMsRUFBVyxFQUFFO0FBQ2pILE1BQUFGLEVBQUFRLEdBQWFuQixHQUFXQyxDQUFNLEdBQzlCVSxFQUFBUyxHQUFZcEIsR0FBV0MsQ0FBTTtBQUM5QixZQUFBb0IsSUFBUSxDQUFDQyxHQUFZQyxNQUFZO0FBQ3JDLFFBQUlQLElBQVksT0FDVmQsS0FBbUJBLEVBQWdCLFNBQ3JDQSxFQUFnQixHQUFHLGtCQUFrQm9CLElBRXZDZDtBQUFBLFVBQ0VTO0FBQUEsVUFDQUs7QUFBQSxVQUNBQztBQUFBLFVBQ0FyQjtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsUUFDRjtBQUFBLE1BRUosR0FDTWtCLElBQWdCLE1BQU07QUFDMUIsY0FBTWhSLElBQVN1UCxFQUFHLFNBQVNMLEdBQWNLLEVBQUcsT0FBT2EsQ0FBYSxHQUMxRGEsSUFBZUMsR0FBY2xSLEdBQVF1UCxHQUFJYyxHQUFZRixDQUFNO0FBQ2pFLFFBQUluUSxNQUNFNFAsTUFBYyxTQUFTWixHQUFZaFAsQ0FBTSxJQUMvQjRQLElBQUEsUUFDSEEsTUFBYyxZQUFZWCxHQUFlalAsQ0FBTSxNQUM1QzRQLElBQUEsV0FFVFcsTUFDSE0sRUFBTTdRLEdBQVFpUixDQUFZLEdBQzFCRSxHQUFjNUIsR0FBSSxFQUFLO0FBQUEsTUFTN0I7QUFDQSxNQUFJZ0IsTUFDRk0sRUFBTXJCLEdBQVdvQixDQUFVLEdBQzNCTyxHQUFjNUIsR0FBSSxFQUFJLElBRXBCUixHQUFtQlEsRUFBRyxLQUFLLElBQzdCNkIsR0FBc0IsTUFBTTtBQUNaLFFBQUFKLEVBQUEsR0FDZHpCLEVBQUcsR0FBRyxjQUFjO0FBQUEsU0FDbkJJLENBQWMsSUFFSHFCLEVBQUE7QUFBQSxJQUNoQixPQUNLO0FBQ0wsVUFBSWpDLEdBQW1CUSxFQUFHLEtBQUssS0FBSyxDQUFDRCxFQUFHLEdBQUcsYUFBYTtBQUN0RCxRQUFBOEIsR0FBc0IsTUFBTTtBQUNiLFVBQUEvQixHQUFBO0FBQUEsWUFDWEM7QUFBQSxZQUNBQztBQUFBLFlBQ0FDO0FBQUEsWUFDQUM7QUFBQSxZQUNBQztBQUFBLFlBQ0FDO0FBQUEsWUFDQUM7QUFBQSxZQUNBQztBQUFBLFlBQ0FDO0FBQUEsWUFDQUM7QUFBQSxVQUNGLEdBQ0EsT0FBT1QsRUFBRyxHQUFHO0FBQUEsV0FDWkssQ0FBYztBQUNqQjtBQUFBLE1BQUE7QUFFRixNQUFBSixFQUFHLEtBQUtELEVBQUcsSUFDWEMsRUFBRyxjQUFjRCxFQUFHO0FBQ2QsWUFBQXNCLElBQWFyQixFQUFHLFNBQVNELEVBQUcsUUFDNUJ0UCxJQUFTdVAsRUFBRyxTQUFTRCxFQUFHLFFBQ3hCMkIsSUFBZTFCLEVBQUcsZUFBZUQsRUFBRyxjQUNwQytCLElBQWN4QyxHQUFtQlMsRUFBRyxLQUFLLEdBQ3pDZ0MsSUFBbUJELElBQWM3QixJQUFZeFAsR0FDN0N1UixJQUFnQkYsSUFBY1QsSUFBYUs7QUE4QmpELFVBN0JJckIsTUFBYyxTQUFTWixHQUFZaFAsQ0FBTSxJQUMvQjRQLElBQUEsU0FDSEEsTUFBYyxZQUFZWCxHQUFlalAsQ0FBTSxPQUM1QzRQLElBQUEsV0FFVmMsS0FDRlI7QUFBQSxRQUNFWixFQUFHO0FBQUEsUUFDSG9CO0FBQUEsUUFDQVk7QUFBQSxRQUNBNUI7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxNQUNGLEdBQ3VCMkIsR0FBQWxDLEdBQUlDLEdBQUksRUFBSSxLQUN6Qk8sS0FDVkc7QUFBQSxRQUNFWDtBQUFBLFFBQ0FDO0FBQUEsUUFDQStCO0FBQUEsUUFDQUM7QUFBQSxRQUNBN0I7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBO0FBQUEsTUFDRixHQUVFVTtBQUNGLFFBQUtjLElBU0M5QixFQUFHLFNBQVNELEVBQUcsU0FBU0MsRUFBRyxNQUFNLE9BQU9ELEVBQUcsTUFBTSxPQUNoREMsRUFBQSxNQUFNLEtBQUtELEVBQUcsTUFBTSxNQVR6Qm1DO0FBQUEsVUFDRWxDO0FBQUEsVUFDQUM7QUFBQSxVQUNBb0I7QUFBQSxVQUNBYjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsZ0JBT0dSLEVBQUcsU0FBU0EsRUFBRyxNQUFNLFNBQVNELEVBQUcsU0FBU0EsRUFBRyxNQUFNLEtBQUs7QUFDckQsY0FBQW9DLElBQWFuQyxFQUFHLFNBQVNMO0FBQUEsVUFDN0JLLEVBQUc7QUFBQSxVQUNIYTtBQUFBLFFBQ0Y7QUFDQSxRQUFJc0IsS0FDRkQ7QUFBQSxVQUNFbEM7QUFBQSxVQUNBbUM7QUFBQSxVQUNBO0FBQUEsVUFDQTNCO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxhQVFPc0IsS0FDVEk7QUFBQSxRQUNFbEM7QUFBQSxRQUNBdlA7QUFBQSxRQUNBaVI7QUFBQSxRQUNBbEI7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUdKLE1BQUFvQixHQUFjNUIsR0FBSWdCLENBQVE7QUFBQSxJQUFBO0FBQUEsRUFFOUI7QUFBQSxFQUNBLE9BQU92QyxHQUFPMEIsR0FBaUJDLEdBQWdCLEVBQUUsSUFBSWdDLEdBQVMsR0FBRyxFQUFFLFFBQVFDLEVBQVcsRUFBQSxHQUFLQyxHQUFVO0FBQzdGLFVBQUE7QUFBQSxNQUNKLFdBQUFyQjtBQUFBLE1BQ0EsVUFBQUM7QUFBQSxNQUNBLFFBQUFoQjtBQUFBLE1BQ0EsYUFBQXFDO0FBQUEsTUFDQSxjQUFBYjtBQUFBLE1BQ0EsUUFBQWpSO0FBQUEsTUFDQSxPQUFBOE87QUFBQSxJQUFBLElBQ0VkO0FBTUosUUFMSWhPLE1BQ0Y0UixFQUFXRSxDQUFXLEdBQ3RCRixFQUFXWCxDQUFZLElBRXpCWSxLQUFZRCxFQUFXbkMsQ0FBTSxHQUN6QmUsSUFBWSxJQUFJO0FBQ2xCLFlBQU11QixJQUFlRixLQUFZLENBQUNoRCxHQUFtQkMsQ0FBSztBQUMxRCxlQUFTNVcsSUFBSSxHQUFHQSxJQUFJdVksRUFBUyxRQUFRdlksS0FBSztBQUNsQyxjQUFBOFosSUFBUXZCLEVBQVN2WSxDQUFDO0FBQ3hCLFFBQUF5WjtBQUFBLFVBQ0VLO0FBQUEsVUFDQXRDO0FBQUEsVUFDQUM7QUFBQSxVQUNBb0M7QUFBQSxVQUNBLENBQUMsQ0FBQ0MsRUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUFBO0FBQUEsSUFDRjtBQUFBLEVBRUo7QUFBQSxFQUNBLE1BQU1QO0FBQUEsRUFDTixTQUFTUTtBQUNYO0FBQ0EsU0FBU1IsR0FBYXpELEdBQU93QixHQUFXMEMsR0FBYyxFQUFFLEdBQUcsRUFBRSxRQUFBL0IsRUFBQSxHQUFVLEdBQUdnQyxLQUFRQyxJQUFXLEdBQUc7QUFDOUYsRUFBSUEsTUFBYSxLQUNSakMsRUFBQW5DLEVBQU0sY0FBY3dCLEdBQVcwQyxDQUFZO0FBRXBELFFBQU0sRUFBRSxJQUFBamEsR0FBSSxRQUFBd1gsR0FBUSxXQUFBZSxHQUFXLFVBQUFDLEdBQVUsT0FBQTNCLE1BQVVkLEdBQzdDcUUsSUFBWUQsTUFBYTtBQUkvQixNQUhJQyxLQUNLbEMsRUFBQWxZLEdBQUl1WCxHQUFXMEMsQ0FBWSxJQUVoQyxDQUFDRyxLQUFheEQsR0FBbUJDLENBQUssTUFDcEMwQixJQUFZO0FBQ2QsYUFBU3RZLElBQUksR0FBR0EsSUFBSXVZLEVBQVMsUUFBUXZZO0FBQ25DLE1BQUFpYTtBQUFBLFFBQ0UxQixFQUFTdlksQ0FBQztBQUFBLFFBQ1ZzWDtBQUFBLFFBQ0EwQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBSU4sRUFBSUcsS0FDS2xDLEVBQUFWLEdBQVFELEdBQVcwQyxDQUFZO0FBRTFDO0FBQ0EsU0FBU0QsR0FBZ0JLLEdBQU10RSxHQUFPMEIsR0FBaUJDLEdBQWdCRSxHQUFjQyxHQUFXO0FBQUEsRUFDOUYsR0FBRyxFQUFFLGFBQUF5QyxHQUFhLFlBQUFDLEdBQVksZUFBQXBDLEdBQWUsUUFBQUQsR0FBUSxZQUFBRSxFQUFXO0FBQ2xFLEdBQUdvQyxHQUFpQjtBQUNaLFFBQUF6UyxJQUFTZ08sRUFBTSxTQUFTa0I7QUFBQSxJQUM1QmxCLEVBQU07QUFBQSxJQUNOb0M7QUFBQSxFQUNGO0FBQ0EsTUFBSXBRLEdBQVE7QUFDSixVQUFBdVEsSUFBVzFCLEdBQW1CYixFQUFNLEtBQUssR0FDekMwRSxJQUFhMVMsRUFBTyxRQUFRQSxFQUFPO0FBQ3JDLFFBQUFnTyxFQUFNLFlBQVk7QUFDcEIsVUFBSXVDO0FBQ0YsUUFBQXZDLEVBQU0sU0FBU3lFO0FBQUEsVUFDYkYsRUFBWUQsQ0FBSTtBQUFBLFVBQ2hCdEU7QUFBQSxVQUNBd0UsRUFBV0YsQ0FBSTtBQUFBLFVBQ2Y1QztBQUFBLFVBQ0FDO0FBQUEsVUFDQUU7QUFBQSxVQUNBQztBQUFBLFFBQ0YsR0FDQTlCLEVBQU0sY0FBYzBFLEdBQ2QxRSxFQUFBLGVBQWUwRSxLQUFjSCxFQUFZRyxDQUFVO0FBQUEsV0FDcEQ7QUFDQyxRQUFBMUUsRUFBQSxTQUFTdUUsRUFBWUQsQ0FBSTtBQUMvQixZQUFJckIsSUFBZXlCO0FBQ25CLGVBQU96QixLQUFjO0FBQ2YsY0FBQUEsS0FBZ0JBLEVBQWEsYUFBYTtBQUN4QyxnQkFBQUEsRUFBYSxTQUFTO0FBQ3hCLGNBQUFqRCxFQUFNLGNBQWNpRDtBQUFBLHFCQUNYQSxFQUFhLFNBQVMsbUJBQW1CO0FBQ2xELGNBQUFqRCxFQUFNLGVBQWVpRCxHQUNyQmpSLEVBQU8sT0FBT2dPLEVBQU0sZ0JBQWdCdUUsRUFBWXZFLEVBQU0sWUFBWTtBQUNsRTtBQUFBLFlBQUE7QUFBQTtBQUdKLFVBQUFpRCxJQUFlc0IsRUFBWXRCLENBQVk7QUFBQSxRQUFBO0FBRXJDLFFBQUNqRCxFQUFNLGdCQUNLa0QsR0FBQWxSLEdBQVFnTyxHQUFPcUMsR0FBWUYsQ0FBTSxHQUVqRHNDO0FBQUEsVUFDRUMsS0FBY0gsRUFBWUcsQ0FBVTtBQUFBLFVBQ3BDMUU7QUFBQSxVQUNBaE87QUFBQSxVQUNBMFA7QUFBQSxVQUNBQztBQUFBLFVBQ0FFO0FBQUEsVUFDQUM7QUFBQSxRQUNGO0FBQUEsTUFBQTtBQUdKLElBQUFxQixHQUFjbkQsR0FBT3VDLENBQVE7QUFBQSxFQUFBO0FBRS9CLFNBQU92QyxFQUFNLFVBQVV1RSxFQUFZdkUsRUFBTSxNQUFNO0FBQ2pEO0FBQ0EsTUFBTTJFLEtBQVd0RDtBQUNqQixTQUFTOEIsR0FBY25ELEdBQU80RSxHQUFZO0FBQ3hDLFFBQU1sRixJQUFNTSxFQUFNO0FBQ2QsTUFBQU4sS0FBT0EsRUFBSSxJQUFJO0FBQ2pCLFFBQUk0RSxHQUFNN0M7QUFRSCxTQVBIbUQsS0FDRk4sSUFBT3RFLEVBQU0sSUFDYnlCLElBQVN6QixFQUFNLFdBRWZzRSxJQUFPdEUsRUFBTSxhQUNieUIsSUFBU3pCLEVBQU0sZUFFVnNFLEtBQVFBLE1BQVM3QztBQUN0QixNQUFJNkMsRUFBSyxhQUFhLE9BQVEsYUFBYSxnQkFBZ0I1RSxFQUFJLEdBQUcsR0FDbEU0RSxJQUFPQSxFQUFLO0FBRWQsSUFBQTVFLEVBQUksR0FBRztBQUFBLEVBQUE7QUFFWDtBQUNBLFNBQVN3RCxHQUFjbFIsR0FBUWdPLEdBQU9xQyxHQUFZRixHQUFRO0FBQ3hELFFBQU0yQixJQUFjOUQsRUFBTSxjQUFjcUMsRUFBVyxFQUFFLEdBQy9DWSxJQUFlakQsRUFBTSxlQUFlcUMsRUFBVyxFQUFFO0FBQ3ZELFNBQUF5QixFQUFZbkQsRUFBYyxJQUFJc0MsR0FDMUJqUixNQUNGbVEsRUFBTzJCLEdBQWE5UixDQUFNLEdBQzFCbVEsRUFBT2MsR0FBY2pSLENBQU0sSUFFdEJpUjtBQUNUO0FBRUEsTUFBTTRCLEtBQWEsT0FBTyxVQUFVLEdBQzlCQyxLQUFhLE9BQU8sVUFBVTtBQUNwQyxTQUFTQyxLQUFxQjtBQUM1QixRQUFNQyxJQUFRO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxtQ0FBbUMsSUFBSTtBQUFBLEVBQ3pDO0FBQ0EsU0FBQUMsR0FBVSxNQUFNO0FBQ2QsSUFBQUQsRUFBTSxZQUFZO0FBQUEsRUFBQSxDQUNuQixHQUNERSxHQUFnQixNQUFNO0FBQ3BCLElBQUFGLEVBQU0sZUFBZTtBQUFBLEVBQUEsQ0FDdEIsR0FDTUE7QUFDVDtBQUNBLE1BQU1HLEtBQTBCLENBQUMsVUFBVSxLQUFLLEdBQzFDQyxLQUFnQztBQUFBLEVBQ3BDLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQTtBQUFBLEVBRVgsZUFBZUQ7QUFBQSxFQUNmLFNBQVNBO0FBQUEsRUFDVCxjQUFjQTtBQUFBLEVBQ2Qsa0JBQWtCQTtBQUFBO0FBQUEsRUFFbEIsZUFBZUE7QUFBQSxFQUNmLFNBQVNBO0FBQUEsRUFDVCxjQUFjQTtBQUFBLEVBQ2Qsa0JBQWtCQTtBQUFBO0FBQUEsRUFFbEIsZ0JBQWdCQTtBQUFBLEVBQ2hCLFVBQVVBO0FBQUEsRUFDVixlQUFlQTtBQUFBLEVBQ2YsbUJBQW1CQTtBQUNyQixHQUNNRSxLQUFzQixDQUFDekksTUFBYTtBQUN4QyxRQUFNMEksSUFBVTFJLEVBQVM7QUFDekIsU0FBTzBJLEVBQVEsWUFBWUQsR0FBb0JDLEVBQVEsU0FBUyxJQUFJQTtBQUN0RSxHQUNNQyxLQUFxQjtBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE9BQU9IO0FBQUEsRUFDUCxNQUFNdEUsR0FBTyxFQUFFLE9BQUEwRSxLQUFTO0FBQ3RCLFVBQU01SSxJQUFXNkksR0FBbUIsR0FDOUJULElBQVFELEdBQW1CO0FBQ2pDLFdBQU8sTUFBTTtBQUNYLFlBQU10QyxJQUFXK0MsRUFBTSxXQUFXRSxHQUF5QkYsRUFBTSxXQUFXLEVBQUk7QUFDaEYsVUFBSSxDQUFDL0MsS0FBWSxDQUFDQSxFQUFTO0FBQ3pCO0FBRUksWUFBQXVCLElBQVEyQixHQUFvQmxELENBQVEsR0FDcENtRCxJQUFXM1MsRUFBTTZOLENBQUssR0FDdEIsRUFBRSxNQUFBK0UsTUFBU0Q7QUFJakIsVUFBSVosRUFBTTtBQUNSLGVBQU9jLEdBQWlCOUIsQ0FBSztBQUV6QixZQUFBK0IsSUFBYUMsR0FBZ0JoQyxDQUFLO0FBQ3hDLFVBQUksQ0FBQytCO0FBQ0gsZUFBT0QsR0FBaUI5QixDQUFLO0FBRS9CLFVBQUlpQyxJQUFhQztBQUFBLFFBQ2ZIO0FBQUEsUUFDQUg7QUFBQSxRQUNBWjtBQUFBLFFBQ0FwSTtBQUFBO0FBQUEsUUFFQSxDQUFDdUosTUFBVUYsSUFBYUU7QUFBQSxNQUMxQjtBQUNJLE1BQUFKLEVBQVcsU0FBU0ssTUFDdEJDLEdBQW1CTixHQUFZRSxDQUFVO0FBRTNDLFVBQUlLLElBQWdCMUosRUFBUyxXQUFXb0osR0FBZ0JwSixFQUFTLE9BQU87QUFDeEUsVUFBSTBKLEtBQWlCQSxFQUFjLFNBQVNGLE1BQVcsQ0FBQ0csR0FBZ0JSLEdBQVlPLENBQWEsS0FBS2pCLEdBQW9CekksQ0FBUSxFQUFFLFNBQVN3SixJQUFTO0FBQ3BKLFlBQUlJLElBQWVOO0FBQUEsVUFDakJJO0FBQUEsVUFDQVY7QUFBQSxVQUNBWjtBQUFBLFVBQ0FwSTtBQUFBLFFBQ0Y7QUFFQSxZQURBeUosR0FBbUJDLEdBQWVFLENBQVksR0FDMUNYLE1BQVMsWUFBWUUsRUFBVyxTQUFTSztBQUMzQyxpQkFBQXBCLEVBQU0sWUFBWSxJQUNsQndCLEVBQWEsYUFBYSxNQUFNO0FBQzlCLFlBQUF4QixFQUFNLFlBQVksSUFDWnBJLEVBQVMsSUFBSSxRQUFRLEtBQ3pCQSxFQUFTLE9BQU8sR0FFbEIsT0FBTzRKLEVBQWEsWUFDSkYsSUFBQTtBQUFBLFVBQ2xCLEdBQ09SLEdBQWlCOUIsQ0FBSztBQUNwQixRQUFBNkIsTUFBUyxZQUFZRSxFQUFXLFNBQVNLLEtBQ2xESSxFQUFhLGFBQWEsQ0FBQ3ZjLEdBQUl3YyxHQUFhQyxNQUFpQjtBQUMzRCxnQkFBTUMsSUFBcUJDO0FBQUEsWUFDekI1QjtBQUFBLFlBQ0FzQjtBQUFBLFVBQ0Y7QUFDQSxVQUFBSyxFQUFtQixPQUFPTCxFQUFjLEdBQUcsQ0FBQyxJQUFJQSxHQUM3Q3JjLEVBQUE0YSxFQUFVLElBQUksTUFBTTtBQUNULFlBQUE0QixFQUFBLEdBQ1p4YyxFQUFHNGEsRUFBVSxJQUFJLFFBQ2pCLE9BQU9vQixFQUFXLGNBQ0ZLLElBQUE7QUFBQSxVQUNsQixHQUNBTCxFQUFXLGVBQWUsTUFBTTtBQUNqQixZQUFBUyxFQUFBLEdBQ2IsT0FBT1QsRUFBVyxjQUNGSyxJQUFBO0FBQUEsVUFDbEI7QUFBQSxRQUNGLElBRWdCQSxJQUFBO0FBQUEsYUFFVEEsTUFDT0EsSUFBQTtBQUVYLGFBQUF0QztBQUFBLElBQ1Q7QUFBQSxFQUFBO0FBRUo7QUFDQSxTQUFTMkIsR0FBb0JsRCxHQUFVO0FBQ2pDLE1BQUF1QixJQUFRdkIsRUFBUyxDQUFDO0FBQ2xCLE1BQUFBLEVBQVMsU0FBUztBQUVwQixlQUFXL1csS0FBSytXO0FBQ1YsVUFBQS9XLEVBQUUsU0FBUzBhLElBQVM7QUFPZCxRQUFBcEMsSUFBQXRZO0FBRXdDO0FBQUEsTUFBQTtBQUFBO0FBSS9DLFNBQUFzWTtBQUNUO0FBQ0EsTUFBTTZDLEtBQWlCdEI7QUFDdkIsU0FBU3FCLEdBQXVCNUIsR0FBT2hGLEdBQU87QUFDdEMsUUFBQSxFQUFFLGVBQUE4RyxNQUFrQjlCO0FBQzFCLE1BQUkyQixJQUFxQkcsRUFBYyxJQUFJOUcsRUFBTSxJQUFJO0FBQ3JELFNBQUsyRyxNQUNrQ0EsSUFBQSx1QkFBTyxPQUFPLElBQUksR0FDekNHLEVBQUEsSUFBSTlHLEVBQU0sTUFBTTJHLENBQWtCLElBRTNDQTtBQUNUO0FBQ0EsU0FBU1QsR0FBdUJsRyxHQUFPYyxHQUFPa0UsR0FBT3BJLEdBQVVtSyxHQUFXO0FBQ2xFLFFBQUE7QUFBQSxJQUNKLFFBQUFDO0FBQUEsSUFDQSxNQUFBbkI7QUFBQSxJQUNBLFdBQUFvQixJQUFZO0FBQUEsSUFDWixlQUFBQztBQUFBLElBQ0EsU0FBQUM7QUFBQSxJQUNBLGNBQUFDO0FBQUEsSUFDQSxrQkFBQUM7QUFBQSxJQUNBLGVBQUFDO0FBQUEsSUFDQSxTQUFBQztBQUFBLElBQ0EsY0FBQUM7QUFBQSxJQUNBLGtCQUFBQztBQUFBLElBQ0EsZ0JBQUFDO0FBQUEsSUFDQSxVQUFBQztBQUFBLElBQ0EsZUFBQUM7QUFBQSxJQUNBLG1CQUFBQztBQUFBLEVBQUEsSUFDRS9HLEdBQ0V4WCxJQUFNLE9BQU8wVyxFQUFNLEdBQUcsR0FDdEIyRyxJQUFxQkMsR0FBdUI1QixHQUFPaEYsQ0FBSyxHQUN4RDhILElBQVcsQ0FBQ3BILEdBQU1uTixNQUFTO0FBQ3ZCLElBQUFtTixLQUFBNUQ7QUFBQSxNQUNONEQ7QUFBQSxNQUNBOUQ7QUFBQSxNQUNBO0FBQUEsTUFDQXJKO0FBQUEsSUFDRjtBQUFBLEVBQ0YsR0FDTXdVLElBQWdCLENBQUNySCxHQUFNbk4sTUFBUztBQUM5QixVQUFBdUQsSUFBT3ZELEVBQUssQ0FBQztBQUNuQnVVLElBQUFBLEVBQVNwSCxHQUFNbk4sQ0FBSSxHQUNmbEosRUFBUXFXLENBQUksSUFDVkEsRUFBSyxNQUFNLENBQUNzSCxNQUFVQSxFQUFNLFVBQVUsQ0FBQyxLQUFRbFIsRUFBQSxJQUMxQzRKLEVBQUssVUFBVSxLQUNuQjVKLEVBQUE7QUFBQSxFQUVULEdBQ01xUCxJQUFRO0FBQUEsSUFDWixNQUFBTjtBQUFBLElBQ0EsV0FBQW9CO0FBQUEsSUFDQSxZQUFZaGQsR0FBSTtBQUNkLFVBQUl5VyxJQUFPd0c7QUFDUCxVQUFBLENBQUNsQyxFQUFNO0FBQ1QsWUFBSWdDO0FBQ0YsVUFBQXRHLElBQU9nSCxLQUFrQlI7QUFBQTtBQUV6QjtBQUdBLE1BQUFqZCxFQUFHNGEsRUFBVSxLQUNmNWEsRUFBRzRhLEVBQVU7QUFBQSxRQUNYO0FBQUE7QUFBQSxNQUVGO0FBRUksWUFBQW9ELElBQWV0QixFQUFtQnJkLENBQUc7QUFDdkMsTUFBQTJlLEtBQWdCMUIsR0FBZ0J2RyxHQUFPaUksQ0FBWSxLQUFLQSxFQUFhLEdBQUdwRCxFQUFVLEtBQ3ZFb0QsRUFBQSxHQUFHcEQsRUFBVSxFQUFFLEdBRTlCaUQsRUFBU3BILEdBQU0sQ0FBQ3pXLENBQUUsQ0FBQztBQUFBLElBQ3JCO0FBQUEsSUFDQSxNQUFNQSxHQUFJO0FBQ1IsVUFBSXlXLElBQU95RyxHQUNQZSxJQUFZZCxHQUNaZSxJQUFhZDtBQUNiLFVBQUEsQ0FBQ3JDLEVBQU07QUFDVCxZQUFJZ0M7QUFDRixVQUFBdEcsSUFBT2lILEtBQVlSLEdBQ25CZSxJQUFZTixLQUFpQlIsR0FDN0JlLElBQWFOLEtBQXFCUjtBQUFBO0FBRWxDO0FBR0osVUFBSWUsSUFBUztBQUNiLFlBQU10UixLQUFPN00sRUFBRzZhLEVBQVUsSUFBSSxDQUFDdUQsT0FBYztBQUMzQyxRQUFJRCxNQUNLQSxJQUFBLElBQ0xDLEtBQ0ZQLEVBQVNLLEdBQVksQ0FBQ2xlLENBQUUsQ0FBQyxJQUV6QjZkLEVBQVNJLEdBQVcsQ0FBQ2plLENBQUUsQ0FBQyxHQUV0QmtjLEVBQU0sZ0JBQ1JBLEVBQU0sYUFBYSxHQUVyQmxjLEVBQUc2YSxFQUFVLElBQUk7QUFBQSxNQUNuQjtBQUNBLE1BQUlwRSxJQUNGcUgsRUFBY3JILEdBQU0sQ0FBQ3pXLEdBQUk2TSxFQUFJLENBQUMsSUFFekJBLEdBQUE7QUFBQSxJQUVUO0FBQUEsSUFDQSxNQUFNN00sR0FBSUYsR0FBUTtBQUNWLFlBQUEySSxJQUFPLE9BQU9zTixFQUFNLEdBQUc7QUFPN0IsVUFOSS9WLEVBQUc2YSxFQUFVLEtBQ2Y3YSxFQUFHNmEsRUFBVTtBQUFBLFFBQ1g7QUFBQTtBQUFBLE1BRUYsR0FFRUUsRUFBTTtBQUNSLGVBQU9qYixFQUFPO0FBRWhCK2QsTUFBQUEsRUFBU1IsR0FBZSxDQUFDcmQsQ0FBRSxDQUFDO0FBQzVCLFVBQUltZSxJQUFTO0FBQ2IsWUFBTXRSLElBQU83TSxFQUFHNGEsRUFBVSxJQUFJLENBQUN3RCxPQUFjO0FBQzNDLFFBQUlELE1BQ0tBLElBQUEsSUFDVHJlLEVBQU8sR0FDSHNlLEtBQ0ZQLEVBQVNMLEdBQWtCLENBQUN4ZCxDQUFFLENBQUMsSUFFL0I2ZCxFQUFTTixHQUFjLENBQUN2ZCxDQUFFLENBQUMsR0FFN0JBLEVBQUc0YSxFQUFVLElBQUksUUFDYjhCLEVBQW1CalUsQ0FBSSxNQUFNc04sS0FDL0IsT0FBTzJHLEVBQW1CalUsQ0FBSTtBQUFBLE1BRWxDO0FBQ0EsTUFBQWlVLEVBQW1CalUsQ0FBSSxJQUFJc04sR0FDdkJ1SCxJQUNGUSxFQUFjUixHQUFTLENBQUN0ZCxHQUFJNk0sQ0FBSSxDQUFDLElBRTVCQSxFQUFBO0FBQUEsSUFFVDtBQUFBLElBQ0EsTUFBTXdSLEdBQVE7QUFDWixZQUFNQyxJQUFTckM7QUFBQSxRQUNib0M7QUFBQSxRQUNBeEg7QUFBQSxRQUNBa0U7QUFBQSxRQUNBcEk7QUFBQSxRQUNBbUs7QUFBQSxNQUNGO0FBQ0ksYUFBQUEsT0FBcUJ3QixDQUFNLEdBQ3hCQTtBQUFBLElBQUE7QUFBQSxFQUVYO0FBQ08sU0FBQXBDO0FBQ1Q7QUFDQSxTQUFTTCxHQUFpQjlGLEdBQU87QUFDM0IsTUFBQXdJLEdBQVl4SSxDQUFLO0FBQ25CLFdBQUFBLElBQVF5SSxHQUFXekksQ0FBSyxHQUN4QkEsRUFBTSxXQUFXLE1BQ1ZBO0FBRVg7QUFDQSxTQUFTZ0csR0FBZ0JoRyxHQUFPO0FBQzFCLE1BQUEsQ0FBQ3dJLEdBQVl4SSxDQUFLO0FBQ3BCLFdBQUlZLEdBQVdaLEVBQU0sSUFBSSxLQUFLQSxFQUFNLFdBQzNCMkYsR0FBb0IzRixFQUFNLFFBQVEsSUFFcENBO0FBS0gsUUFBQSxFQUFFLFdBQUF3QyxHQUFXLFVBQUFDLEVBQUEsSUFBYXpDO0FBQ2hDLE1BQUl5QyxHQUFVO0FBQ1osUUFBSUQsSUFBWTtBQUNkLGFBQU9DLEVBQVMsQ0FBQztBQUVuQixRQUFJRCxJQUFZLE1BQU0vWCxFQUFXZ1ksRUFBUyxPQUFPO0FBQy9DLGFBQU9BLEVBQVMsUUFBUTtBQUFBLEVBQzFCO0FBRUo7QUFDQSxTQUFTNEQsR0FBbUJyRyxHQUFPbUcsR0FBTztBQUN4QyxFQUFJbkcsRUFBTSxZQUFZLEtBQUtBLEVBQU0sYUFDL0JBLEVBQU0sYUFBYW1HLEdBQ0FFLEdBQUFyRyxFQUFNLFVBQVUsU0FBU21HLENBQUssS0FDeENuRyxFQUFNLFlBQVksT0FDM0JBLEVBQU0sVUFBVSxhQUFhbUcsRUFBTSxNQUFNbkcsRUFBTSxTQUFTLEdBQ3hEQSxFQUFNLFdBQVcsYUFBYW1HLEVBQU0sTUFBTW5HLEVBQU0sVUFBVSxLQUUxREEsRUFBTSxhQUFhbUc7QUFFdkI7QUFDQSxTQUFTVCxHQUF5QmpELEdBQVVpRyxJQUFjLElBQU9DLEdBQVc7QUFDMUUsTUFBSXRiLElBQU0sQ0FBQyxHQUNQdWIsSUFBcUI7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSW5HLEVBQVMsUUFBUSxLQUFLO0FBQ3BDLFFBQUF1QixJQUFRdkIsRUFBUyxDQUFDO0FBQ3RCLFVBQU1uWixJQUFNcWYsS0FBYSxPQUFPM0UsRUFBTSxNQUFNLE9BQU8yRSxDQUFTLElBQUksT0FBTzNFLEVBQU0sT0FBTyxPQUFPQSxFQUFNLE1BQU0sQ0FBQztBQUNwRyxJQUFBQSxFQUFNLFNBQVM2RSxNQUNiN0UsRUFBTSxZQUFZLE9BQUs0RSxLQUMzQnZiLElBQU1BLEVBQUk7QUFBQSxNQUNScVksR0FBeUIxQixFQUFNLFVBQVUwRSxHQUFhcGYsQ0FBRztBQUFBLElBQzNELE1BQ1NvZixLQUFlMUUsRUFBTSxTQUFTb0MsT0FDbkMvWSxFQUFBLEtBQUsvRCxLQUFPLE9BQU9tZixHQUFXekUsR0FBTyxFQUFFLEtBQUExYSxHQUFLLElBQUkwYSxDQUFLO0FBQUEsRUFDM0Q7QUFFRixNQUFJNEUsSUFBcUI7QUFDdkIsYUFBUyxJQUFJLEdBQUcsSUFBSXZiLEVBQUksUUFBUTtBQUMxQixNQUFBQSxFQUFBLENBQUMsRUFBRSxZQUFZO0FBR2hCLFNBQUFBO0FBQ1Q7QUFFQTtBQUFBO0FBRUEsU0FBU3liLEdBQWdCN04sR0FBUzhOLEdBQWM7QUFDOUMsU0FBT3RlLEVBQVd3USxDQUFPO0FBQUE7QUFBQTtBQUFBLElBR0FuUixHQUFPLEVBQUUsTUFBTW1SLEVBQVEsS0FBUSxHQUFBOE4sR0FBYyxFQUFFLE9BQU85TixHQUFTO0FBQUEsTUFDcEZBO0FBQ047QUFhQSxTQUFTK04sR0FBa0JwTSxHQUFVO0FBQ25DLEVBQUFBLEVBQVMsTUFBTSxDQUFDQSxFQUFTLElBQUksQ0FBQyxJQUFJQSxFQUFTLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO0FBQ2pFO0FBOEJBLFNBQVNxTSxHQUFPQyxHQUFRQyxHQUFXeEgsR0FBZ0IzQixHQUFPb0osSUFBWSxJQUFPO0FBQ3ZFLE1BQUEvZSxFQUFRNmUsQ0FBTSxHQUFHO0FBQ1osSUFBQUEsRUFBQTtBQUFBLE1BQ0wsQ0FBQ3hRLEdBQUd4TyxNQUFNK2U7QUFBQSxRQUNSdlE7QUFBQSxRQUNBeVEsTUFBYzllLEVBQVE4ZSxDQUFTLElBQUlBLEVBQVVqZixDQUFDLElBQUlpZjtBQUFBLFFBQ2xEeEg7QUFBQSxRQUNBM0I7QUFBQSxRQUNBb0o7QUFBQSxNQUFBO0FBQUEsSUFFSjtBQUNBO0FBQUEsRUFBQTtBQUVGLE1BQUlDLEdBQWVySixDQUFLLEtBQUssQ0FBQ29KLEdBQVc7QUFDbkMsSUFBQXBKLEVBQU0sWUFBWSxPQUFPQSxFQUFNLEtBQUssbUJBQW1CQSxFQUFNLFVBQVUsUUFBUSxhQUNqRmlKLEdBQU9DLEdBQVFDLEdBQVd4SCxHQUFnQjNCLEVBQU0sVUFBVSxPQUFPO0FBRW5FO0FBQUEsRUFBQTtBQUVJLFFBQUFzSixJQUFXdEosRUFBTSxZQUFZLElBQUlFLEdBQTJCRixFQUFNLFNBQVMsSUFBSUEsRUFBTSxJQUNyRmpWLElBQVFxZSxJQUFZLE9BQU9FLEdBQzNCLEVBQUUsR0FBR3pPLEdBQU8sR0FBR2xDLEVBQVEsSUFBQXVRLEdBT3ZCSyxJQUFTSixLQUFhQSxFQUFVLEdBQ2hDSyxJQUFPM08sRUFBTSxTQUFTclIsSUFBWXFSLEVBQU0sT0FBTyxLQUFLQSxFQUFNLE1BQzFENE8sSUFBYTVPLEVBQU0sWUFDbkI2TyxJQUFnQnpXLEVBQU13VyxDQUFVLEdBQ2hDRSxJQUFpQkYsTUFBZWpnQixJQUFZLE1BQU0sS0FBUSxDQUFDRixNQVd4RGMsRUFBT3NmLEdBQWVwZ0IsQ0FBRztBQVk5QixNQVZBaWdCLEtBQVUsUUFBUUEsTUFBVzVRLE1BQzNCak8sR0FBUzZlLENBQU0sS0FDakJDLEVBQUtELENBQU0sSUFBSSxNQUNYSSxFQUFlSixDQUFNLE1BQ3ZCRSxFQUFXRixDQUFNLElBQUksU0FFZDNiLEdBQU0yYixDQUFNLE1BQ3JCQSxFQUFPLFFBQVEsUUFHZjllLEVBQVdrTyxDQUFHO0FBQ2hCLElBQUFnRSxHQUFzQmhFLEdBQUtrQyxHQUFPLElBQUksQ0FBQzlQLEdBQU95ZSxDQUFJLENBQUM7QUFBQSxPQUM5QztBQUNDLFVBQUFJLElBQVlsZixHQUFTaU8sQ0FBRyxHQUN4QmtSLElBQVNqYyxHQUFNK0ssQ0FBRztBQUN4QixRQUFJaVIsS0FBYUMsR0FBUTtBQUN2QixZQUFNQyxJQUFRLE1BQU07QUFDbEIsWUFBSVosRUFBTyxHQUFHO0FBQ04sZ0JBQUFhLElBQVdILElBQVlELEVBQWVoUixDQUFHLElBQUk4USxFQUFXOVEsQ0FBRyxJQUFJNlEsRUFBSzdRLENBQUcsSUFBSUEsRUFBSTtBQUNyRixVQUFJeVEsSUFDRi9lLEVBQVEwZixDQUFRLEtBQUtoZ0IsR0FBT2dnQixHQUFVVCxDQUFRLElBRXpDamYsRUFBUTBmLENBQVEsSUFVVEEsRUFBUyxTQUFTVCxDQUFRLEtBQ3BDUyxFQUFTLEtBQUtULENBQVEsSUFWbEJNLEtBQ0dqUixFQUFBQSxDQUFHLElBQUksQ0FBQzJRLENBQVEsR0FDakJLLEVBQWVoUixDQUFHLE1BQ1RBLEVBQUFBLENBQUcsSUFBSTZRLEVBQUs3USxDQUFHLE9BRzVCQSxFQUFJLFFBQVEsQ0FBQzJRLENBQVEsR0FDakJKLEVBQU8sTUFBR00sRUFBS04sRUFBTyxDQUFDLElBQUl2USxFQUFJO0FBQUEsZUFNaENpUixLQUNUSixFQUFLN1EsQ0FBRyxJQUFJNU4sR0FDUjRlLEVBQWVoUixDQUFHLE1BQ3BCOFEsRUFBVzlRLENBQUcsSUFBSTVOLE1BRVg4ZSxNQUNUbFIsRUFBSSxRQUFRNU4sR0FDUm1lLEVBQU8sTUFBUU0sRUFBQU4sRUFBTyxDQUFDLElBQUluZTtBQUFBLE1BSW5DO0FBQ0EsTUFBSUEsS0FDRitlLEVBQU0sS0FBSyxJQUNYMUcsR0FBc0IwRyxHQUFPbkksQ0FBYyxLQUVyQ21JLEVBQUE7QUFBQSxJQUNSO0FBQUEsRUFHRjtBQUVKO0FBa0JBLE1BQU1FLEtBQVksQ0FBQzFGLE1BQVNBLEVBQUssYUFBYTtBQXFuQmxCM1gsR0FBZ0IsRUFBQTtBQUNqQkEsR0FBYyxFQUFFO0FBa0UzQyxTQUFTc2QsR0FBZTNGLEdBQU10SixHQUFJO0FBQ2hDLE1BQUlnUCxHQUFVMUYsQ0FBSSxLQUFLQSxFQUFLLFNBQVMsS0FBSztBQUN4QyxRQUFJcEksSUFBUSxHQUNSaE0sSUFBT29VLEVBQUs7QUFDaEIsV0FBT3BVLEtBQU07QUFDUCxVQUFBQSxFQUFLLGFBQWE7QUFFcEIsWUFEZThLLEVBQUc5SyxDQUFJLE1BQ1A7QUFDYjtBQUFBLGlCQUVPOFosR0FBVTlaLENBQUk7QUFDbkIsWUFBQUEsRUFBSyxTQUFTO0FBQ1osY0FBQSxFQUFFZ00sTUFBVSxFQUFHO0FBQUEsY0FDckIsQ0FBV2hNLEVBQUssU0FBUyxPQUN2QmdNO0FBR0osTUFBQWhNLElBQU9BLEVBQUs7QUFBQSxJQUFBO0FBQUEsRUFDZDtBQUVBLElBQUE4SyxFQUFHc0osQ0FBSTtBQUVYO0FBRUEsTUFBTStFLEtBQWlCLENBQUNuZixNQUFNLENBQUMsQ0FBQ0EsRUFBRSxLQUFLO0FBQ3ZDO0FBQUE7QUFFQSxTQUFTZ2dCLEdBQXFCblEsR0FBUTtBQUNoQyxFQUFBdFAsRUFBV3NQLENBQU0sTUFDVkEsSUFBQSxFQUFFLFFBQVFBLEVBQU87QUFFdEIsUUFBQTtBQUFBLElBQ0osUUFBQW9RO0FBQUEsSUFDQSxrQkFBQUM7QUFBQSxJQUNBLGdCQUFBQztBQUFBLElBQ0EsT0FBQUMsSUFBUTtBQUFBLElBQ1IsU0FBU0M7QUFBQSxJQUNULFNBQUFDO0FBQUE7QUFBQSxJQUVBLGFBQUFDLElBQWM7QUFBQSxJQUNkLFNBQVNDO0FBQUEsRUFBQSxJQUNQM1E7QUFDSixNQUFJNFEsSUFBaUIsTUFDakJDLEdBQ0FDLElBQVU7QUFDZCxRQUFNQyxJQUFRLE9BQ1pELEtBQ2lCRixJQUFBLE1BQ1ZJLEVBQUssSUFFUkEsSUFBTyxNQUFNO0FBQ2IsUUFBQUM7QUFDSixXQUFPTCxNQUFtQkssSUFBY0wsSUFBaUJSLElBQVMsTUFBTSxDQUFDL1osTUFBUTtBQUUvRSxVQURBQSxJQUFNQSxhQUFlLFFBQVFBLElBQU0sSUFBSSxNQUFNLE9BQU9BLENBQUcsQ0FBQyxHQUNwRHNhO0FBQ0YsZUFBTyxJQUFJLFFBQVEsQ0FBQ08sR0FBU0MsTUFBVztBQUd0QyxVQUFBUixFQUFZdGEsR0FGTSxNQUFNNmEsRUFBUUgsR0FBTyxHQUN0QixNQUFNSSxFQUFPOWEsQ0FBRyxHQUNLeWEsSUFBVSxDQUFDO0FBQUEsUUFBQSxDQUNsRDtBQUVLLFlBQUF6YTtBQUFBLElBQ1IsQ0FDRCxFQUFFLEtBQUssQ0FBQythLE1BQ0hILE1BQWdCTCxLQUFrQkEsSUFDN0JBLEtBT0xRLE1BQVNBLEVBQUssY0FBY0EsRUFBSyxPQUFPLFdBQVcsTUFBTSxjQUMzREEsSUFBT0EsRUFBSyxVQUtDUCxJQUFBTyxHQUNSQSxFQUNSO0FBQUEsRUFDSDtBQUNBLFNBQXVCLGdCQUFBckMsR0FBQTtBQUFBLElBQ3JCLE1BQU07QUFBQSxJQUNOLGVBQWVpQztBQUFBLElBQ2YsZUFBZTlnQixHQUFJMlMsR0FBVXdPLEdBQVM7QUFDOUIsWUFBQUMsSUFBWWQsSUFBa0IsTUFBTTtBQUN4QyxjQUFNZSxJQUFXZjtBQUFBLFVBQ2ZhO0FBQUEsVUFDQSxDQUFDcFEsTUFBT2lQLEdBQWVoZ0IsR0FBSStRLENBQUU7QUFBQSxRQUMvQjtBQUNBLFFBQUlzUSxNQUNEMU8sRUFBUyxRQUFRQSxFQUFTLE1BQU0sS0FBSyxLQUFLME8sQ0FBUTtBQUFBLE1BQ3JELElBQ0VGO0FBQ0osTUFBSVIsSUFDUVMsRUFBQSxJQUVWTixFQUFBLEVBQU8sS0FBSyxNQUFNLENBQUNuTyxFQUFTLGVBQWV5TyxHQUFXO0FBQUEsSUFFMUQ7QUFBQSxJQUNBLElBQUksa0JBQWtCO0FBQ2IsYUFBQVQ7QUFBQSxJQUNUO0FBQUEsSUFDQSxRQUFRO0FBQ04sWUFBTWhPLElBQVcyTztBQUVqQixVQURBdkMsR0FBa0JwTSxDQUFRLEdBQ3RCZ087QUFDSyxlQUFBLE1BQU1ZLEdBQWdCWixHQUFjaE8sQ0FBUTtBQUUvQyxZQUFBNk8sSUFBVSxDQUFDcmIsTUFBUTtBQUNOLFFBQUF1YSxJQUFBLE1BQ2pCOU47QUFBQSxVQUNFek07QUFBQSxVQUNBd007QUFBQSxVQUNBO0FBQUEsVUFDQSxDQUFDeU47QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUNJLFVBQUFJLEtBQWU3TixFQUFTLFlBQVk4TztBQUN0QyxlQUFPWCxFQUFLLEVBQUUsS0FBSyxDQUFDSSxNQUNYLE1BQU1LLEdBQWdCTCxHQUFNdk8sQ0FBUSxDQUM1QyxFQUFFLE1BQU0sQ0FBQ3hNLE9BQ1JxYixFQUFRcmIsQ0FBRyxHQUNKLE1BQU1pYSxJQUFpQnNCLEdBQVl0QixHQUFnQjtBQUFBLFVBQ3hELE9BQU9qYTtBQUFBLFFBQ1IsQ0FBQSxJQUFJLEtBQ047QUFFRyxZQUFBd2IsSUFBU2pULEdBQUksRUFBSyxHQUNsQnhJLElBQVF3SSxHQUFJLEdBQ1prVCxJQUFVbFQsR0FBSSxDQUFDLENBQUMyUixDQUFLO0FBQzNCLGFBQUlBLEtBQ0YsV0FBVyxNQUFNO0FBQ2YsUUFBQXVCLEVBQVEsUUFBUTtBQUFBLFNBQ2Z2QixDQUFLLEdBRU5FLEtBQVcsUUFDYixXQUFXLE1BQU07QUFDZixZQUFJLENBQUNvQixFQUFPLFNBQVMsQ0FBQ3piLEVBQU0sT0FBTztBQUNqQyxnQkFBTUMsSUFBTSxJQUFJO0FBQUEsWUFDZCxtQ0FBbUNvYSxDQUFPO0FBQUEsVUFDNUM7QUFDQSxVQUFBaUIsRUFBUXJiLENBQUcsR0FDWEQsRUFBTSxRQUFRQztBQUFBLFFBQUE7QUFBQSxTQUVmb2EsQ0FBTyxHQUVQTyxFQUFBLEVBQUUsS0FBSyxNQUFNO0FBQ2hCLFFBQUFhLEVBQU8sUUFBUSxJQUNYaFAsRUFBUyxVQUFVNEwsR0FBWTVMLEVBQVMsT0FBTyxLQUFLLEtBQ3REQSxFQUFTLE9BQU8sT0FBTztBQUFBLE1BQ3pCLENBQ0QsRUFBRSxNQUFNLENBQUN4TSxNQUFRO0FBQ2hCLFFBQUFxYixFQUFRcmIsQ0FBRyxHQUNYRCxFQUFNLFFBQVFDO0FBQUEsTUFBQSxDQUNmLEdBQ00sTUFBTTtBQUNQLFlBQUF3YixFQUFPLFNBQVNoQjtBQUNYLGlCQUFBWSxHQUFnQlosR0FBY2hPLENBQVE7QUFDL0MsWUFBV3pNLEVBQU0sU0FBU2thO0FBQ3hCLGlCQUFPc0IsR0FBWXRCLEdBQWdCO0FBQUEsWUFDakMsT0FBT2xhLEVBQU07QUFBQSxVQUFBLENBQ2Q7QUFDUSxZQUFBaWEsS0FBb0IsQ0FBQ3lCLEVBQVE7QUFDdEMsaUJBQU9GLEdBQVl2QixDQUFnQjtBQUFBLE1BRXZDO0FBQUEsSUFBQTtBQUFBLEVBQ0YsQ0FDRDtBQUNIO0FBQ0EsU0FBU29CLEdBQWdCTCxHQUFNVyxHQUFRO0FBQ3JDLFFBQU0sRUFBRSxLQUFLNVMsR0FBTSxPQUFBNEgsR0FBTyxVQUFBMkIsR0FBVSxJQUFBc0osRUFBQSxJQUFPRCxFQUFPLE9BQzVDOUwsSUFBUTJMLEdBQVlSLEdBQU1ySyxHQUFPMkIsQ0FBUTtBQUMvQyxTQUFBekMsRUFBTSxNQUFNOUcsR0FDWjhHLEVBQU0sS0FBSytMLEdBQ1gsT0FBT0QsRUFBTyxNQUFNLElBQ2I5TDtBQUNUO0FBRUEsTUFBTXdJLEtBQWMsQ0FBQ3hJLE1BQVVBLEVBQU0sS0FBSztBQXdOMUMsU0FBU2dNLEdBQVl0TCxHQUFNMU8sR0FBUTtBQUNYLEVBQUFpYSxHQUFBdkwsR0FBTSxLQUFLMU8sQ0FBTTtBQUN6QztBQUNBLFNBQVNrYSxHQUFjeEwsR0FBTTFPLEdBQVE7QUFDYixFQUFBaWEsR0FBQXZMLEdBQU0sTUFBTTFPLENBQU07QUFDMUM7QUFDQSxTQUFTaWEsR0FBc0J2TCxHQUFNek8sR0FBTUQsSUFBU3VaLElBQWlCO0FBQ25FLFFBQU1ZLElBQWN6TCxFQUFLLFVBQVVBLEVBQUssUUFBUSxNQUFNO0FBQ3BELFFBQUkwTCxJQUFVcGE7QUFDZCxXQUFPb2EsS0FBUztBQUNkLFVBQUlBLEVBQVE7QUFDVjtBQUVGLE1BQUFBLElBQVVBLEVBQVE7QUFBQSxJQUFBO0FBRXBCLFdBQU8xTCxFQUFLO0FBQUEsRUFBQTtBQUdkLE1BRFcyTCxHQUFBcGEsR0FBTWthLEdBQWFuYSxDQUFNLEdBQ2hDQSxHQUFRO0FBQ1YsUUFBSW9hLElBQVVwYSxFQUFPO0FBQ2QsV0FBQW9hLEtBQVdBLEVBQVE7QUFDeEIsTUFBSTVELEdBQVk0RCxFQUFRLE9BQU8sS0FBSyxLQUNaRSxHQUFBSCxHQUFhbGEsR0FBTUQsR0FBUW9hLENBQU8sR0FFMURBLElBQVVBLEVBQVE7QUFBQSxFQUNwQjtBQUVKO0FBQ0EsU0FBU0UsR0FBc0I1TCxHQUFNek8sR0FBTUQsR0FBUXVhLEdBQWU7QUFDaEUsUUFBTUMsSUFBV0g7QUFBQSxJQUNmcGE7QUFBQSxJQUNBeU87QUFBQSxJQUNBNkw7QUFBQSxJQUNBO0FBQUE7QUFBQSxFQUVGO0FBQ0EsRUFBQUUsR0FBWSxNQUFNO0FBQ1QsSUFBQTFpQixHQUFBd2lCLEVBQWN0YSxDQUFJLEdBQUd1YSxDQUFRO0FBQUEsS0FDbkN4YSxDQUFNO0FBQ1g7QUFTQSxTQUFTcWEsR0FBV3BhLEdBQU15TyxHQUFNMU8sSUFBU3VaLElBQWlCbUIsSUFBVSxJQUFPO0FBQ3pFLE1BQUkxYSxHQUFRO0FBQ1YsVUFBTW1VLElBQVFuVSxFQUFPQyxDQUFJLE1BQU1ELEVBQU9DLENBQUksSUFBSSxLQUN4Q2thLElBQWN6TCxFQUFLLFVBQVVBLEVBQUssUUFBUSxJQUFJbk4sTUFBUztBQUM3QyxNQUFBcEMsR0FBQTtBQUNSLFlBQUF3YixJQUFRQyxHQUFtQjVhLENBQU0sR0FDakNuRixJQUFNaVEsR0FBMkI0RCxHQUFNMU8sR0FBUUMsR0FBTXNCLENBQUk7QUFDekQsYUFBQW9aLEVBQUEsR0FDUXZiLEdBQUEsR0FDUHZFO0FBQUEsSUFBQTtBQUVULFdBQUk2ZixJQUNGdkcsRUFBTSxRQUFRZ0csQ0FBVyxJQUV6QmhHLEVBQU0sS0FBS2dHLENBQVcsR0FFakJBO0FBQUEsRUFBQTtBQU9YO0FBQ0EsTUFBTVUsS0FBYSxDQUFDQyxNQUFjLENBQUNwTSxHQUFNMU8sSUFBU3VaLE9BQW9CO0FBQ2hFLEdBQUEsQ0FBQ0csTUFBeUJvQixNQUFjLFNBQzFDVCxHQUFXUyxHQUFXLElBQUl2WixNQUFTbU4sRUFBSyxHQUFHbk4sQ0FBSSxHQUFHdkIsQ0FBTTtBQUU1RCxHQUNNK2EsS0FBZ0JGLEdBQVcsSUFBSSxHQUMvQjVILEtBQVk0SCxHQUFXLEdBQUcsR0FDMUJHLEtBQWlCSDtBQUFBLEVBQ3JCO0FBQ0YsR0FDTUksS0FBWUosR0FBVyxHQUFHLEdBQzFCM0gsS0FBa0IySDtBQUFBLEVBQ3RCO0FBQ0YsR0FDTUosS0FBY0ksR0FBVyxJQUFJLEdBQzdCSyxLQUFtQkw7QUFBQSxFQUN2QjtBQUNGLEdBQ01NLEtBQW9CTixHQUFXLEtBQUssR0FDcENPLEtBQWtCUCxHQUFXLEtBQUs7QUFDeEMsU0FBU1EsR0FBZ0IzTSxHQUFNMU8sSUFBU3VaLElBQWlCO0FBQzVDLEVBQUFjLEdBQUEsTUFBTTNMLEdBQU0xTyxDQUFNO0FBQy9CO0FBRUEsTUFBTXNiLEtBQWEsY0FLYkMsS0FBeUIsT0FBTyxJQUFJLE9BQU87QUFDakQsU0FBU0MsR0FBd0JDLEdBQVc7QUFDdEMsU0FBQS9pQixHQUFTK2lCLENBQVMsSUFDYkMsR0FBYUosSUFBWUcsR0FBVyxFQUFLLEtBQUtBLElBRTlDQSxLQUFhRjtBQUV4QjtBQUlBLFNBQVNHLEdBQWF6YixHQUFNekUsR0FBTW1nQixJQUFjLElBQU1DLElBQXFCLElBQU87QUFDaEYsUUFBTWhSLElBQVcwQyxNQUE0QmlNO0FBQzdDLE1BQUkzTyxHQUFVO0FBQ1osVUFBTWlSLElBQVlqUixFQUFTO0FBQ0Y7QUFDdkIsWUFBTWtSLElBQVdDO0FBQUEsUUFDZkY7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUNBLFVBQUlDLE1BQWFBLE1BQWF0Z0IsS0FBUXNnQixNQUFhdGlCLEdBQVNnQyxDQUFJLEtBQUtzZ0IsTUFBYWppQixHQUFXTCxHQUFTZ0MsQ0FBSSxDQUFDO0FBQ2xHLGVBQUFxZ0I7QUFBQSxJQUNUO0FBRUksVUFBQWhoQjtBQUFBO0FBQUE7QUFBQSxNQUdKb2UsR0FBUXJPLEVBQVMzSyxDQUFJLEtBQUs0YixFQUFVNWIsQ0FBSSxHQUFHekUsQ0FBSTtBQUFBLE1BQy9DeWQsR0FBUXJPLEVBQVMsV0FBVzNLLENBQUksR0FBR3pFLENBQUk7QUFBQTtBQUVyQyxXQUFBLENBQUNYLEtBQU8rZ0IsSUFDSEMsSUFPRmhoQjtBQUFBLEVBQUE7QUFNWDtBQUNBLFNBQVNvZSxHQUFRK0MsR0FBVXhnQixHQUFNO0FBQy9CLFNBQU93Z0IsTUFBYUEsRUFBU3hnQixDQUFJLEtBQUt3Z0IsRUFBU3hpQixHQUFTZ0MsQ0FBSSxDQUFDLEtBQUt3Z0IsRUFBU25pQixHQUFXTCxHQUFTZ0MsQ0FBSSxDQUFDLENBQUM7QUFDdkc7QUFFQSxTQUFTeWdCLEdBQVdsVSxHQUFRbVUsR0FBWTVpQixHQUFPcUosR0FBTztBQUNoRCxNQUFBdEg7QUFDRSxRQUFBOGdCLElBQVM3aUIsR0FDVDhpQixJQUFnQi9qQixFQUFRMFAsQ0FBTTtBQUNoQyxNQUFBcVUsS0FBaUIxakIsR0FBU3FQLENBQU0sR0FBRztBQUMvQixVQUFBc1UsSUFBd0JELEtBQWlCNVYsR0FBV3VCLENBQU07QUFDaEUsUUFBSXhGLElBQVk7QUFDaEIsSUFBSThaLE1BQ1U5WixJQUFBLENBQUNyQixHQUFVNkcsQ0FBTSxHQUM3QkEsSUFBUzNHLEdBQWlCMkcsQ0FBTSxJQUU1QjFNLElBQUEsSUFBSSxNQUFNME0sRUFBTyxNQUFNO0FBQzdCLGFBQVM3UCxJQUFJLEdBQUdzRSxJQUFJdUwsRUFBTyxRQUFRN1AsSUFBSXNFLEdBQUd0RTtBQUN4QyxNQUFBbUQsRUFBSW5ELENBQUMsSUFBSWdrQjtBQUFBLFFBQ1AzWixJQUFZcEIsR0FBVzRHLEVBQU83UCxDQUFDLENBQUMsSUFBSTZQLEVBQU83UCxDQUFDO0FBQUEsUUFDNUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0Fpa0I7QUFBQSxNQUNGO0FBQUEsRUFDRixXQUNTLE9BQU9wVSxLQUFXLFVBQVU7QUFJL0IsSUFBQTFNLElBQUEsSUFBSSxNQUFNME0sQ0FBTTtBQUN0QixhQUFTN1AsSUFBSSxHQUFHQSxJQUFJNlAsR0FBUTdQO0FBQ3RCLE1BQUFtRCxFQUFBbkQsQ0FBQyxJQUFJZ2tCLEVBQVdoa0IsSUFBSSxHQUFHQSxHQUFHLFFBQVFpa0IsQ0FBbUI7QUFBQSxFQUMzRCxXQUNTdmpCLEdBQVNtUCxDQUFNO0FBQ3BCLFFBQUFBLEVBQU8sT0FBTyxRQUFRO0FBQ3hCLE1BQUExTSxJQUFNLE1BQU07QUFBQSxRQUNWME07QUFBQSxRQUNBLENBQUNqTixHQUFNNUMsTUFBTWdrQixFQUFXcGhCLEdBQU01QyxHQUFHLFFBQVFpa0IsQ0FBbUI7QUFBQSxNQUM5RDtBQUFBLFNBQ0s7QUFDQyxZQUFBRyxJQUFPLE9BQU8sS0FBS3ZVLENBQU07QUFDekIsTUFBQTFNLElBQUEsSUFBSSxNQUFNaWhCLEVBQUssTUFBTTtBQUMzQixlQUFTcGtCLElBQUksR0FBR3NFLElBQUk4ZixFQUFLLFFBQVFwa0IsSUFBSXNFLEdBQUd0RSxLQUFLO0FBQ3JDLGNBQUFaLElBQU1nbEIsRUFBS3BrQixDQUFDO0FBQ2QsUUFBQW1ELEVBQUFuRCxDQUFDLElBQUlna0IsRUFBV25VLEVBQU96USxDQUFHLEdBQUdBLEdBQUtZLEdBQUdpa0IsQ0FBbUI7QUFBQSxNQUFBO0FBQUEsSUFDOUQ7QUFBQTtBQUdGLElBQUE5Z0IsSUFBTSxDQUFDO0FBS0YsU0FBQUE7QUFDVDtBQW9CQSxTQUFTa2hCLEdBQVcvSSxHQUFPaFksR0FBTXNULElBQVEsQ0FBQyxHQUFHME4sR0FBVUMsR0FBVztBQUM1RCxNQUFBblAsR0FBeUIsTUFBTUEsR0FBeUIsVUFBVStKLEdBQWUvSixHQUF5QixNQUFNLEtBQUtBLEdBQXlCLE9BQU87QUFFdkosV0FBT29QLEdBQWEsR0FBQUM7QUFBQSxNQUNsQjlGO0FBQUEsTUFDQTtBQUFBLE1BQ0EsQ0FBQzhDLEdBQVksUUFBUTdLLEdBQU8wTixDQUFzQixDQUFDO0FBQUEsTUFDbkQ7QUFBQSxJQUNGO0FBRUUsTUFBQUksSUFBT3BKLEVBQU1oWSxDQUFJO0FBT2pCLEVBQUFvaEIsS0FBUUEsRUFBSyxPQUNmQSxFQUFLLEtBQUssS0FFRkYsR0FBQTtBQUNWLFFBQU1HLElBQW1CRCxLQUFRRSxHQUFpQkYsRUFBSzlOLENBQUssQ0FBQyxHQUN2RGlPLElBQVVqTyxFQUFNO0FBQUE7QUFBQSxFQUV0QitOLEtBQW9CQSxFQUFpQixLQUMvQkcsSUFBV0w7QUFBQSxJQUNmOUY7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNa0csS0FBVyxDQUFDcGtCLEdBQVNva0IsQ0FBTyxJQUFJQSxJQUFVLElBQUl2aEIsQ0FBSTtBQUFBLE1BQ2Y7QUFBQSxJQUMzQztBQUFBLElBQ0FxaEIsS0FBNkMsQ0FBQTtBQUFBLElBQzdDQSxLQUFvQnJKLEVBQU0sTUFBTSxJQUFJLEtBQUs7QUFBQSxFQUMzQztBQUNJLFNBQWN3SixFQUFTLFlBQ3pCQSxFQUFTLGVBQWUsQ0FBQ0EsRUFBUyxVQUFVLElBQUksSUFFOUNKLEtBQVFBLEVBQUssT0FDZkEsRUFBSyxLQUFLLEtBRUxJO0FBQ1Q7QUFDQSxTQUFTRixHQUFpQkcsR0FBUTtBQUN6QixTQUFBQSxFQUFPLEtBQUssQ0FBQ2pMLE1BQ2JrTCxHQUFRbEwsQ0FBSyxJQUNkLEVBQUFBLEVBQU0sU0FBU29DLE1BQ2ZwQyxFQUFNLFNBQVM2RSxNQUFZLENBQUNpRyxHQUFpQjlLLEVBQU0sUUFBUSxLQUZuQyxFQUs3QixJQUFJaUwsSUFBUztBQUNoQjtBQWNBLE1BQU1FLEtBQW9CLENBQUNqbEIsTUFDcEJBLElBQ0RrbEIsR0FBb0JsbEIsQ0FBQyxJQUFVZ1csR0FBMkJoVyxDQUFDLElBQ3hEaWxCLEdBQWtCamxCLEVBQUUsTUFBTSxJQUZsQixNQUlYbWxCO0FBQUE7QUFBQTtBQUFBLEVBR21DLGdCQUFBdmxCLEdBQUEsdUJBQU8sT0FBTyxJQUFJLEdBQUc7QUFBQSxJQUMxRCxHQUFHLENBQUNJLE1BQU1BO0FBQUEsSUFDVixLQUFLLENBQUNBLE1BQU1BLEVBQUUsTUFBTTtBQUFBLElBQ3BCLE9BQU8sQ0FBQ0EsTUFBTUEsRUFBRTtBQUFBLElBQ2hCLFFBQVEsQ0FBQ0EsTUFBNkVBLEVBQUU7QUFBQSxJQUN4RixRQUFRLENBQUNBLE1BQTZFQSxFQUFFO0FBQUEsSUFDeEYsUUFBUSxDQUFDQSxNQUE2RUEsRUFBRTtBQUFBLElBQ3hGLE9BQU8sQ0FBQ0EsTUFBNEVBLEVBQUU7QUFBQSxJQUN0RixTQUFTLENBQUNBLE1BQU1pbEIsR0FBa0JqbEIsRUFBRSxNQUFNO0FBQUEsSUFDMUMsT0FBTyxDQUFDQSxNQUFNaWxCLEdBQWtCamxCLEVBQUUsSUFBSTtBQUFBLElBQ3RDLE9BQU8sQ0FBQ0EsTUFBTUEsRUFBRTtBQUFBLElBQ2hCLE9BQU8sQ0FBQ0EsTUFBTUEsRUFBRTtBQUFBLElBQ2hCLFVBQVUsQ0FBQ0EsTUFBNEJvbEIsR0FBcUJwbEIsQ0FBQztBQUFBLElBQzdELGNBQWMsQ0FBQ0EsTUFBTUEsRUFBRSxNQUFNQSxFQUFFLElBQUksTUFBTTtBQUN2QyxNQUFBeVUsR0FBU3pVLEVBQUUsTUFBTTtBQUFBLElBQUE7QUFBQSxJQUVuQixXQUFXLENBQUNBLE1BQU1BLEVBQUUsTUFBTUEsRUFBRSxJQUFJK1QsR0FBUyxLQUFLL1QsRUFBRSxLQUFLO0FBQUEsSUFDckQsUUFBUSxDQUFDQSxNQUE0QnFsQixHQUFjLEtBQUtybEIsQ0FBQztBQUFBLEVBQzFELENBQUE7QUFBQSxHQUdHc2xCLEtBQWtCLENBQUN4SyxHQUFPMWIsTUFBUTBiLE1BQVV4YixLQUFhLENBQUN3YixFQUFNLG1CQUFtQjVhLEVBQU80YSxHQUFPMWIsQ0FBRyxHQUNwR21tQixLQUE4QjtBQUFBLEVBQ2xDLElBQUksRUFBRSxHQUFHN1MsRUFBQSxHQUFZdFQsR0FBSztBQUN4QixRQUFJQSxNQUFRO0FBQ0gsYUFBQTtBQUVILFVBQUEsRUFBRSxLQUFBb1csR0FBSyxZQUFBK0osR0FBWSxNQUFBaUcsR0FBTSxPQUFBNU8sR0FBTyxhQUFBNk8sR0FBYSxNQUFBMWQsR0FBTSxZQUFBMmQsTUFBZWhUO0FBSXBFLFFBQUFpVDtBQUNBLFFBQUF2bUIsRUFBSSxDQUFDLE1BQU0sS0FBSztBQUNaLFlBQUFrRCxJQUFJbWpCLEVBQVlybUIsQ0FBRztBQUN6QixVQUFJa0QsTUFBTTtBQUNSLGdCQUFRQSxHQUFHO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU9pZCxFQUFXbmdCLENBQUc7QUFBQSxVQUN2QixLQUFLO0FBQ0gsbUJBQU9vbUIsRUFBS3BtQixDQUFHO0FBQUEsVUFDakIsS0FBSztBQUNILG1CQUFPb1csRUFBSXBXLENBQUc7QUFBQSxVQUNoQixLQUFLO0FBQ0gsbUJBQU93WCxFQUFNeFgsQ0FBRztBQUFBLFFBQUE7QUFBQSxXQUVYO0FBQUEsWUFBQWttQixHQUFnQi9GLEdBQVluZ0IsQ0FBRztBQUN4QyxpQkFBQXFtQixFQUFZcm1CLENBQUcsSUFBSSxHQUNabWdCLEVBQVduZ0IsQ0FBRztZQUNab21CLE1BQVNsbUIsS0FBYVksRUFBT3NsQixHQUFNcG1CLENBQUc7QUFDL0MsaUJBQUFxbUIsRUFBWXJtQixDQUFHLElBQUksR0FDWm9tQixFQUFLcG1CLENBQUc7QUFDakI7QUFBQTtBQUFBO0FBQUEsV0FHR3VtQixJQUFrQmpULEVBQVMsYUFBYSxDQUFDLE1BQU14UyxFQUFPeWxCLEdBQWlCdm1CLENBQUc7QUFBQTtBQUUzRSxpQkFBQXFtQixFQUFZcm1CLENBQUcsSUFBSSxHQUNad1gsRUFBTXhYLENBQUc7WUFDUG9XLE1BQVFsVyxLQUFhWSxFQUFPc1YsR0FBS3BXLENBQUc7QUFDN0MsaUJBQUFxbUIsRUFBWXJtQixDQUFHLElBQUksR0FDWm9XLEVBQUlwVyxDQUFHO1FBQ21Cd21CLE9BQ2pDSCxFQUFZcm1CLENBQUcsSUFBSTtBQUFBO0FBQUEsSUFDckI7QUFFSSxVQUFBeW1CLElBQWVWLEdBQW9CL2xCLENBQUc7QUFDNUMsUUFBSTBtQixHQUFXQztBQUNmLFFBQUlGO0FBQ0YsYUFBSXptQixNQUFRLFlBQ0p5SSxHQUFBNkssRUFBUyxPQUFPLE9BQU8sRUFBRSxHQUsxQm1ULEVBQWFuVCxDQUFRO0FBQzlCO0FBQUE7QUFBQSxPQUVHb1QsSUFBWS9kLEVBQUssa0JBQWtCK2QsSUFBWUEsRUFBVTFtQixDQUFHO0FBQUE7QUFFdEQsYUFBQTBtQjtRQUNFdFEsTUFBUWxXLEtBQWFZLEVBQU9zVixHQUFLcFcsQ0FBRztBQUM3QyxhQUFBcW1CLEVBQVlybUIsQ0FBRyxJQUFJLEdBQ1pvVyxFQUFJcFcsQ0FBRztBQUNoQjtBQUFBO0FBQUEsTUFFRTJtQixJQUFtQkwsRUFBVyxPQUFPLGtCQUFrQnhsQixFQUFPNmxCLEdBQWtCM21CLENBQUc7QUFBQTtBQUdqRixhQUFPMm1CLEVBQWlCM21CLENBQUc7QUFBQSxFQWlCakM7QUFBQSxFQUNBLElBQUksRUFBRSxHQUFHc1QsRUFBUyxHQUFHdFQsR0FBS3lCLEdBQU87QUFDL0IsVUFBTSxFQUFFLE1BQUEya0IsR0FBTSxZQUFBakcsR0FBWSxLQUFBL0osRUFBUSxJQUFBOUM7QUFDOUIsV0FBQTRTLEdBQWdCL0YsR0FBWW5nQixDQUFHLEtBQ2pDbWdCLEVBQVduZ0IsQ0FBRyxJQUFJeUIsR0FDWCxNQUlFMmtCLE1BQVNsbUIsS0FBYVksRUFBT3NsQixHQUFNcG1CLENBQUcsS0FDL0NvbUIsRUFBS3BtQixDQUFHLElBQUl5QixHQUNMLE1BQ0VYLEVBQU93UyxFQUFTLE9BQU90VCxDQUFHLEtBSWpDQSxFQUFJLENBQUMsTUFBTSxPQUFPQSxFQUFJLE1BQU0sQ0FBQyxLQUFLc1QsSUFJN0IsTUFTTDhDLEVBQUlwVyxDQUFHLElBQUl5QixHQUdSO0FBQUEsRUFDVDtBQUFBLEVBQ0EsSUFBSTtBQUFBLElBQ0YsR0FBRyxFQUFFLE1BQUEya0IsR0FBTSxZQUFBakcsR0FBWSxhQUFBa0csR0FBYSxLQUFBalEsR0FBSyxZQUFBa1EsR0FBWSxjQUFBTSxFQUFhO0FBQUEsS0FDakU1bUIsR0FBSztBQUNGLFFBQUF1bUI7QUFDSixXQUFPLENBQUMsQ0FBQ0YsRUFBWXJtQixDQUFHLEtBQUtvbUIsTUFBU2xtQixLQUFhWSxFQUFPc2xCLEdBQU1wbUIsQ0FBRyxLQUFLa21CLEdBQWdCL0YsR0FBWW5nQixDQUFHLE1BQU11bUIsSUFBa0JLLEVBQWEsQ0FBQyxNQUFNOWxCLEVBQU95bEIsR0FBaUJ2bUIsQ0FBRyxLQUFLYyxFQUFPc1YsR0FBS3BXLENBQUcsS0FBS2MsRUFBT2lsQixJQUFxQi9sQixDQUFHLEtBQUtjLEVBQU93bEIsRUFBVyxPQUFPLGtCQUFrQnRtQixDQUFHO0FBQUEsRUFDM1I7QUFBQSxFQUNBLGVBQWUwSSxHQUFRMUksR0FBSzZtQixHQUFZO0FBQ2xDLFdBQUFBLEVBQVcsT0FBTyxPQUNibmUsRUFBQSxFQUFFLFlBQVkxSSxDQUFHLElBQUksSUFDbkJjLEVBQU8rbEIsR0FBWSxPQUFPLEtBQ25DLEtBQUssSUFBSW5lLEdBQVExSSxHQUFLNm1CLEVBQVcsT0FBTyxJQUFJLEdBRXZDLFFBQVEsZUFBZW5lLEdBQVExSSxHQUFLNm1CLENBQVU7QUFBQSxFQUFBO0FBRXpEO0FBNElBLFNBQVNDLEdBQXNCdFAsR0FBTztBQUM3QixTQUFBelcsRUFBUXlXLENBQUssSUFBSUEsRUFBTTtBQUFBLElBQzVCLENBQUMvVCxHQUFZbVIsT0FBT25SLEVBQVdtUixDQUFDLElBQUksTUFBTW5SO0FBQUEsSUFDMUMsQ0FBQTtBQUFBLEVBQUMsSUFDQytUO0FBQ047QUFvRUEsSUFBSWdQLEtBQW9CO0FBQ3hCLFNBQVNPLEdBQWF6VCxHQUFVO0FBQ3hCLFFBQUEzQixJQUFVcVUsR0FBcUIxUyxDQUFRLEdBQ3ZDMFQsSUFBYTFULEVBQVMsT0FDdEI4QyxJQUFNOUMsRUFBUztBQUNELEVBQUFrVCxLQUFBLElBQ2hCN1UsRUFBUSxnQkFDRDZNLEdBQUE3TSxFQUFRLGNBQWMyQixHQUFVLElBQUk7QUFFekMsUUFBQTtBQUFBO0FBQUEsSUFFSixNQUFNMlQ7QUFBQSxJQUNOLFVBQVVDO0FBQUEsSUFDVixTQUFBQztBQUFBLElBQ0EsT0FBT0M7QUFBQSxJQUNQLFNBQVNDO0FBQUEsSUFDVCxRQUFRQztBQUFBO0FBQUEsSUFFUixTQUFBQztBQUFBLElBQ0EsYUFBQUM7QUFBQSxJQUNBLFNBQUFDO0FBQUEsSUFDQSxjQUFBQztBQUFBLElBQ0EsU0FBQUM7QUFBQSxJQUNBLFdBQUFDO0FBQUEsSUFDQSxhQUFBQztBQUFBLElBQ0EsZUFBQUM7QUFBQSxJQUNBLGVBQUFDO0FBQUEsSUFDQSxXQUFBQztBQUFBLElBQ0EsV0FBQUM7QUFBQSxJQUNBLFFBQUFDO0FBQUEsSUFDQSxlQUFBQztBQUFBLElBQ0EsaUJBQUFDO0FBQUEsSUFDQSxlQUFBQztBQUFBLElBQ0EsZ0JBQUFDO0FBQUE7QUFBQSxJQUVBLFFBQUFDO0FBQUEsSUFDQSxjQUFBQztBQUFBO0FBQUEsSUFFQSxZQUFBQztBQUFBLElBQ0EsWUFBQTlSO0FBQUEsSUFDQSxTQUFBK1I7QUFBQSxFQUFBLElBQ0UvVztBQWFKLE1BSEkyVixLQUNnQnFCLEdBQUFyQixHQUFlbFIsR0FWcUUsSUFVeEMsR0FFNUQrUTtBQUNGLGVBQVdubkIsS0FBT21uQixHQUFTO0FBQ25CLFlBQUF5QixJQUFnQnpCLEVBQVFubkIsQ0FBRztBQUM3QixNQUFBbUIsRUFBV3luQixDQUFhLE1BU3hCeFMsRUFBSXBXLENBQUcsSUFBSTRvQixFQUFjLEtBQUs1QixDQUFVO0FBQUEsSUFTNUM7QUFHSixNQUFJQyxHQUFhO0FBTWYsVUFBTWIsSUFBT2EsRUFBWSxLQUFLRCxHQUFZQSxDQUFVO0FBTWhELElBQUMxbEIsR0FBUzhrQixDQUFJLE1BR1A5UyxFQUFBLE9BQU9qSCxHQUFTK1osQ0FBSTtBQUFBLEVBYy9CO0FBR0YsTUFEb0JJLEtBQUEsSUFDaEJVO0FBQ0YsZUFBV2xuQixLQUFPa25CLEdBQWlCO0FBQzNCLFlBQUEyQixJQUFNM0IsRUFBZ0JsbkIsQ0FBRyxHQUN6QmlPLEtBQU05TSxFQUFXMG5CLENBQUcsSUFBSUEsRUFBSSxLQUFLN0IsR0FBWUEsQ0FBVSxJQUFJN2xCLEVBQVcwbkIsRUFBSSxHQUFHLElBQUlBLEVBQUksSUFBSSxLQUFLN0IsR0FBWUEsQ0FBVSxJQUFJNW1CLElBSXhIMG9CLEtBQU0sQ0FBQzNuQixFQUFXMG5CLENBQUcsS0FBSzFuQixFQUFXMG5CLEVBQUksR0FBRyxJQUFJQSxFQUFJLElBQUksS0FBSzdCLENBQVUsSUFJekU1bUIsSUFDRWdDLEtBQUlnRixHQUFTO0FBQUEsUUFDakIsS0FBQTZHO0FBQUEsUUFDQSxLQUFBNmE7QUFBQSxNQUFBLENBQ0Q7QUFDTSxhQUFBLGVBQWUxUyxHQUFLcFcsR0FBSztBQUFBLFFBQzlCLFlBQVk7QUFBQSxRQUNaLGNBQWM7QUFBQSxRQUNkLEtBQUssTUFBTW9DLEdBQUU7QUFBQSxRQUNiLEtBQUssQ0FBQ3lDLE9BQU16QyxHQUFFLFFBQVF5QztBQUFBLE1BQUEsQ0FDdkI7QUFBQSxJQUdEO0FBR0osTUFBSXVpQjtBQUNGLGVBQVdwbkIsS0FBT29uQjtBQUNoQixNQUFBMkIsR0FBYzNCLEVBQWFwbkIsQ0FBRyxHQUFHb1csR0FBSzRRLEdBQVlobkIsQ0FBRztBQUd6RCxNQUFJcW5CLEdBQWdCO0FBQ2xCLFVBQU0yQixJQUFXN25CLEVBQVdrbUIsQ0FBYyxJQUFJQSxFQUFlLEtBQUtMLENBQVUsSUFBSUs7QUFDaEYsWUFBUSxRQUFRMkIsQ0FBUSxFQUFFLFFBQVEsQ0FBQ2hwQixNQUFRO0FBQ2pDLE1BQUFpcEIsR0FBQWpwQixHQUFLZ3BCLEVBQVNocEIsQ0FBRyxDQUFDO0FBQUEsSUFBQSxDQUMzQjtBQUFBLEVBQUE7QUFFSCxFQUFJdW5CLEtBQ08vSSxHQUFBK0ksR0FBU2pVLEdBQVUsR0FBRztBQUV4QixXQUFBNFYsR0FBc0JDLEdBQVUvUixHQUFNO0FBQ3pDLElBQUFyVyxFQUFRcVcsQ0FBSSxJQUNUQSxFQUFBLFFBQVEsQ0FBQ2dTLE9BQVVELEVBQVNDLEdBQU0sS0FBS3BDLENBQVUsQ0FBQyxDQUFDLElBQy9DNVAsS0FDQStSLEVBQUEvUixFQUFLLEtBQUs0UCxDQUFVLENBQUM7QUFBQSxFQUNoQztBQWNFLE1BWkprQyxHQUFzQnpGLElBQWUrRCxDQUFXLEdBQ2hEMEIsR0FBc0J2TixJQUFXOEwsQ0FBTyxHQUN4Q3lCLEdBQXNCeEYsSUFBZ0JnRSxDQUFZLEdBQ2xEd0IsR0FBc0J2RixJQUFXZ0UsQ0FBTyxHQUN4Q3VCLEdBQXNCeEcsSUFBYWtGLENBQVMsR0FDNUNzQixHQUFzQnRHLElBQWVpRixDQUFXLEdBQ2hEcUIsR0FBc0JuRixJQUFpQnNFLENBQWEsR0FDcERhLEdBQXNCcEYsSUFBaUJxRSxDQUFhLEdBQ3BEZSxHQUFzQnJGLElBQW1CdUUsQ0FBZSxHQUN4RGMsR0FBc0J0TixJQUFpQm1NLENBQWEsR0FDcERtQixHQUFzQi9GLElBQWE4RSxDQUFTLEdBQzVDaUIsR0FBc0J0RixJQUFrQjBFLENBQWMsR0FDbER2bkIsRUFBUXduQixDQUFNO0FBQ2hCLFFBQUlBLEVBQU8sUUFBUTtBQUNqQixZQUFNYyxJQUFVL1YsRUFBUyxZQUFZQSxFQUFTLFVBQVUsQ0FBQTtBQUNqRCxNQUFBaVYsRUFBQSxRQUFRLENBQUN2b0IsTUFBUTtBQUNmLGVBQUEsZUFBZXFwQixHQUFTcnBCLEdBQUs7QUFBQSxVQUNsQyxLQUFLLE1BQU1nbkIsRUFBV2huQixDQUFHO0FBQUEsVUFDekIsS0FBSyxDQUFDQyxPQUFRK21CLEVBQVdobkIsQ0FBRyxJQUFJQztBQUFBLFFBQUEsQ0FDakM7QUFBQSxNQUFBLENBQ0Y7QUFBQSxJQUFBLE1BQ0gsQ0FBWXFULEVBQVMsWUFDbkJBLEVBQVMsVUFBVSxDQUFDO0FBR3BCLEVBQUE0VSxLQUFVNVUsRUFBUyxXQUFXbFQsT0FDaENrVCxFQUFTLFNBQVM0VSxJQUVoQk0sS0FBZ0IsU0FDbEJsVixFQUFTLGVBQWVrVixJQUV0QkMsUUFBcUIsYUFBYUEsSUFDbEM5UixRQUFxQixhQUFhQSxJQUNsQzJSLEtBQ0Y1SSxHQUFrQnBNLENBQVE7QUFFOUI7QUFDQSxTQUFTcVYsR0FBa0JyQixHQUFlbFIsR0FBS2tULElBQTJCbHBCLElBQU07QUFDMUUsRUFBQVcsRUFBUXVtQixDQUFhLE1BQ3ZCQSxJQUFnQmlDLEdBQWdCakMsQ0FBYTtBQUUvQyxhQUFXdG5CLEtBQU9zbkIsR0FBZTtBQUN6QixVQUFBdUIsSUFBTXZCLEVBQWN0bkIsQ0FBRztBQUN6QixRQUFBa2pCO0FBQ0EsSUFBQTVoQixHQUFTdW5CLENBQUcsSUFDVixhQUFhQSxJQUNKM0YsSUFBQXNHO0FBQUEsTUFDVFgsRUFBSSxRQUFRN29CO0FBQUEsTUFDWjZvQixFQUFJO0FBQUEsTUFDSjtBQUFBLElBQ0YsSUFFVzNGLElBQUFzRyxHQUFPWCxFQUFJLFFBQVE3b0IsQ0FBRyxJQUduQ2tqQixJQUFXc0csR0FBT1gsQ0FBRyxHQUVuQnZrQixHQUFNNGUsQ0FBUSxJQUNULE9BQUEsZUFBZTlNLEdBQUtwVyxHQUFLO0FBQUEsTUFDOUIsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsS0FBSyxNQUFNa2pCLEVBQVM7QUFBQSxNQUNwQixLQUFLLENBQUNyZSxNQUFNcWUsRUFBUyxRQUFRcmU7QUFBQSxJQUFBLENBQzlCLElBRUR1UixFQUFJcFcsQ0FBRyxJQUFJa2pCO0FBQUEsRUFJYjtBQUVKO0FBQ0EsU0FBUzFFLEdBQVNwSCxHQUFNOUQsR0FBVTNLLEdBQU07QUFDdEMsRUFBQTZLO0FBQUEsSUFDRXpTLEVBQVFxVyxDQUFJLElBQUlBLEVBQUssSUFBSSxDQUFDcVMsTUFBTUEsRUFBRSxLQUFLblcsRUFBUyxLQUFLLENBQUMsSUFBSThELEVBQUssS0FBSzlELEVBQVMsS0FBSztBQUFBLElBQ2xGQTtBQUFBLElBQ0EzSztBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVNvZ0IsR0FBY3JmLEdBQUswTSxHQUFLNFEsR0FBWWhuQixHQUFLO0FBQzVDLE1BQUFnUixJQUFTaFIsRUFBSSxTQUFTLEdBQUcsSUFBSTBwQixHQUFpQjFDLEdBQVlobkIsQ0FBRyxJQUFJLE1BQU1nbkIsRUFBV2huQixDQUFHO0FBQ3JGLE1BQUFvQixHQUFTc0ksQ0FBRyxHQUFHO0FBQ1gsVUFBQWlnQixJQUFVdlQsRUFBSTFNLENBQUc7QUFDbkIsSUFBQXZJLEVBQVd3b0IsQ0FBTyxLQUVsQmxZLEdBQU1ULEdBQVEyWSxDQUFPO0FBQUEsRUFJekIsV0FDU3hvQixFQUFXdUksQ0FBRztBQUVyQixJQUFBK0gsR0FBTVQsR0FBUXRILEVBQUksS0FBS3NkLENBQVUsQ0FBQztBQUFBLFdBRTNCMWxCLEdBQVNvSSxDQUFHO0FBQ2pCLFFBQUEzSSxFQUFRMkksQ0FBRztBQUNULE1BQUFBLEVBQUEsUUFBUSxDQUFDMEYsTUFBTTJaLEdBQWMzWixHQUFHZ0gsR0FBSzRRLEdBQVlobkIsQ0FBRyxDQUFDO0FBQUEsU0FDcEQ7QUFDTCxZQUFNMnBCLElBQVV4b0IsRUFBV3VJLEVBQUksT0FBTyxJQUFJQSxFQUFJLFFBQVEsS0FBS3NkLENBQVUsSUFBSTVRLEVBQUkxTSxFQUFJLE9BQU87QUFDcEYsTUFBQXZJLEVBQVd3b0IsQ0FBTyxLQUNkbFksR0FBQVQsR0FBUTJZLEdBQVNqZ0IsQ0FBRztBQUFBLElBRzVCO0FBS047QUFDQSxTQUFTc2MsR0FBcUIxUyxHQUFVO0FBQ3RDLFFBQU1zVyxJQUFPdFcsRUFBUyxNQUNoQixFQUFFLFFBQUF1VyxHQUFRLFNBQVNDLEVBQW1CLElBQUFGLEdBQ3RDO0FBQUEsSUFDSixRQUFRRztBQUFBLElBQ1IsY0FBYy9uQjtBQUFBLElBQ2QsUUFBUSxFQUFFLHVCQUFBZ29CLEVBQXNCO0FBQUEsTUFDOUIxVyxFQUFTLFlBQ1B1UixJQUFTN2lCLEVBQU0sSUFBSTRuQixDQUFJO0FBQ3pCLE1BQUFLO0FBQ0osU0FBSXBGLElBQ1NvRixJQUFBcEYsSUFDRixDQUFDa0YsRUFBYSxVQUFVLENBQUNGLEtBQVUsQ0FBQ0MsSUFFaENHLElBQUFMLEtBR2JLLElBQVcsQ0FBQyxHQUNSRixFQUFhLFVBQ0ZBLEVBQUE7QUFBQSxJQUNYLENBQUNHLE1BQU1DLEdBQWFGLEdBQVVDLEdBQUdGLEdBQXVCLEVBQUk7QUFBQSxFQUM5RCxHQUVXRyxHQUFBRixHQUFVTCxHQUFNSSxDQUFxQixJQUVoRDFvQixHQUFTc29CLENBQUksS0FDVDVuQixFQUFBLElBQUk0bkIsR0FBTUssQ0FBUSxHQUVuQkE7QUFDVDtBQUNBLFNBQVNFLEdBQWFDLEdBQUlDLEdBQU1DLEdBQVFDLElBQVUsSUFBTztBQUN2RCxRQUFNLEVBQUUsUUFBQVYsR0FBUSxTQUFTQyxFQUFtQixJQUFBTztBQUM1QyxFQUFJUCxLQUNXSyxHQUFBQyxHQUFJTixHQUFnQlEsR0FBUSxFQUFJLEdBRTNDVCxLQUNLQSxFQUFBO0FBQUEsSUFDTCxDQUFDSyxNQUFNQyxHQUFhQyxHQUFJRixHQUFHSSxHQUFRLEVBQUk7QUFBQSxFQUN6QztBQUVGLGFBQVd0cUIsS0FBT3FxQjtBQUNaLFFBQUEsRUFBQUUsS0FBV3ZxQixNQUFRLFdBSWhCO0FBQ0wsWUFBTXdxQixJQUFRQyxHQUEwQnpxQixDQUFHLEtBQUtzcUIsS0FBVUEsRUFBT3RxQixDQUFHO0FBQ3BFLE1BQUFvcUIsRUFBR3BxQixDQUFHLElBQUl3cUIsSUFBUUEsRUFBTUosRUFBR3BxQixDQUFHLEdBQUdxcUIsRUFBS3JxQixDQUFHLENBQUMsSUFBSXFxQixFQUFLcnFCLENBQUc7QUFBQSxJQUFBO0FBR25ELFNBQUFvcUI7QUFDVDtBQUNBLE1BQU1LLEtBQTRCO0FBQUEsRUFDaEMsTUFBTUM7QUFBQSxFQUNOLE9BQU9DO0FBQUEsRUFDUCxPQUFPQTtBQUFBO0FBQUEsRUFFUCxTQUFTQztBQUFBLEVBQ1QsVUFBVUE7QUFBQTtBQUFBLEVBRVYsY0FBY0M7QUFBQSxFQUNkLFNBQVNBO0FBQUEsRUFDVCxhQUFhQTtBQUFBLEVBQ2IsU0FBU0E7QUFBQSxFQUNULGNBQWNBO0FBQUEsRUFDZCxTQUFTQTtBQUFBLEVBQ1QsZUFBZUE7QUFBQSxFQUNmLGVBQWVBO0FBQUEsRUFDZixXQUFXQTtBQUFBLEVBQ1gsV0FBV0E7QUFBQSxFQUNYLFdBQVdBO0FBQUEsRUFDWCxhQUFhQTtBQUFBLEVBQ2IsZUFBZUE7QUFBQSxFQUNmLGdCQUFnQkE7QUFBQTtBQUFBLEVBRWhCLFlBQVlEO0FBQUEsRUFDWixZQUFZQTtBQUFBO0FBQUEsRUFFWixPQUFPRTtBQUFBO0FBQUEsRUFFUCxTQUFTSjtBQUFBLEVBQ1QsUUFBUUs7QUFDVjtBQUNBLFNBQVNMLEdBQVlOLEdBQUlDLEdBQU07QUFDN0IsU0FBS0EsSUFHQUQsSUFHRSxXQUF3QjtBQUNyQixXQUFBNXBCO0FBQUEsTUFDTlcsRUFBV2lwQixDQUFFLElBQUlBLEVBQUcsS0FBSyxNQUFNLElBQUksSUFBSUE7QUFBQSxNQUN2Q2pwQixFQUFXa3BCLENBQUksSUFBSUEsRUFBSyxLQUFLLE1BQU0sSUFBSSxJQUFJQTtBQUFBLElBQzdDO0FBQUEsRUFDRixJQVBTQSxJQUhBRDtBQVdYO0FBQ0EsU0FBU1csR0FBWVgsR0FBSUMsR0FBTTtBQUM3QixTQUFPTyxHQUFtQnJCLEdBQWdCYSxDQUFFLEdBQUdiLEdBQWdCYyxDQUFJLENBQUM7QUFDdEU7QUFDQSxTQUFTZCxHQUFnQjdmLEdBQUs7QUFDeEIsTUFBQTNJLEVBQVEySSxDQUFHLEdBQUc7QUFDaEIsVUFBTW5HLElBQU0sQ0FBQztBQUNiLGFBQVMzQyxJQUFJLEdBQUdBLElBQUk4SSxFQUFJLFFBQVE5STtBQUM5QixNQUFBMkMsRUFBSW1HLEVBQUk5SSxDQUFDLENBQUMsSUFBSThJLEVBQUk5SSxDQUFDO0FBRWQsV0FBQTJDO0FBQUEsRUFBQTtBQUVGLFNBQUFtRztBQUNUO0FBQ0EsU0FBU21oQixHQUFhVCxHQUFJQyxHQUFNO0FBQzlCLFNBQU9ELElBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFBLEVBQUcsT0FBT0EsR0FBSUMsQ0FBSSxDQUFDLENBQUMsSUFBSUE7QUFDbEQ7QUFDQSxTQUFTTyxHQUFtQlIsR0FBSUMsR0FBTTtBQUM3QixTQUFBRCxJQUFLNXBCLEdBQThCLHVCQUFBLE9BQU8sSUFBSSxHQUFHNHBCLEdBQUlDLENBQUksSUFBSUE7QUFDdEU7QUFDQSxTQUFTTSxHQUF5QlAsR0FBSUMsR0FBTTtBQUMxQyxTQUFJRCxJQUNFcnBCLEVBQVFxcEIsQ0FBRSxLQUFLcnBCLEVBQVFzcEIsQ0FBSSxJQUN0QixDQUFDLEdBQW1CLG9CQUFJLElBQUksQ0FBQyxHQUFHRCxHQUFJLEdBQUdDLENBQUksQ0FBQyxDQUFDLElBRS9DN3BCO0FBQUEsSUFDVyx1QkFBTyxPQUFPLElBQUk7QUFBQSxJQUNsQ3NtQixHQUFzQnNELENBQUU7QUFBQSxJQUN4QnRELEdBQXNCdUQsS0FBUSxPQUFPQSxJQUFPLENBQUUsQ0FBQTtBQUFBLEVBQ2hELElBRU9BO0FBRVg7QUFDQSxTQUFTUyxHQUFrQlYsR0FBSUMsR0FBTTtBQUMvQixNQUFBLENBQUNELEVBQVcsUUFBQUM7QUFDWixNQUFBLENBQUNBLEVBQWEsUUFBQUQ7QUFDbEIsUUFBTVksSUFBU3hxQixHQUF1Qix1QkFBTyxPQUFPLElBQUksR0FBRzRwQixDQUFFO0FBQzdELGFBQVdwcUIsS0FBT3FxQjtBQUNULElBQUFXLEVBQUFockIsQ0FBRyxJQUFJNnFCLEdBQWFULEVBQUdwcUIsQ0FBRyxHQUFHcXFCLEVBQUtycUIsQ0FBRyxDQUFDO0FBRXhDLFNBQUFnckI7QUFDVDtBQUVBLFNBQVNDLEtBQW1CO0FBQ25CLFNBQUE7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLGFBQWE1cUI7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGtCQUFrQixDQUFDO0FBQUEsTUFDbkIsdUJBQXVCLENBQUM7QUFBQSxNQUN4QixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixpQkFBaUIsQ0FBQTtBQUFBLElBQ25CO0FBQUEsSUFDQSxRQUFRLENBQUM7QUFBQSxJQUNULFlBQVksQ0FBQztBQUFBLElBQ2IsWUFBWSxDQUFDO0FBQUEsSUFDYixVQUFpQyx1QkFBQSxPQUFPLElBQUk7QUFBQSxJQUM1QyxrQ0FBa0MsUUFBUTtBQUFBLElBQzFDLGdDQUFnQyxRQUFRO0FBQUEsSUFDeEMsZ0NBQWdDLFFBQVE7QUFBQSxFQUMxQztBQUNGO0FBQ0EsSUFBSTZxQixLQUFRO0FBQ1osU0FBU0MsR0FBYWpELEdBQVFwRyxHQUFTO0FBQ3JDLFNBQU8sU0FBbUJzSixHQUFlQyxJQUFZLE1BQU07QUFDckQsSUFBQ2xxQixFQUFXaXFCLENBQWEsTUFDWEEsSUFBQTVxQixHQUFPLENBQUMsR0FBRzRxQixDQUFhLElBRXRDQyxLQUFhLFFBQVEsQ0FBQy9wQixHQUFTK3BCLENBQVMsTUFFOUJBLElBQUE7QUFFZCxVQUFNQyxJQUFVTCxHQUFpQixHQUMzQk0sd0JBQXVDLFFBQVEsR0FDL0NDLElBQW1CLENBQUM7QUFDMUIsUUFBSUMsSUFBWTtBQUNWLFVBQUFDLElBQU1KLEVBQVEsTUFBTTtBQUFBLE1BQ3hCLE1BQU1KO0FBQUEsTUFDTixZQUFZRTtBQUFBLE1BQ1osUUFBUUM7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFVBQVVDO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxTQUFBSztBQUFBLE1BQ0EsSUFBSSxTQUFTO0FBQ1gsZUFBT0wsRUFBUTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxJQUFJLE9BQU96bUIsR0FBRztBQUFBLE1BTWQ7QUFBQSxNQUNBLElBQUkrbUIsTUFBV2phLEdBQVM7QUFDbEIsZUFBQTRaLEVBQWlCLElBQUlLLENBQU0sTUFFcEJBLEtBQVV6cUIsRUFBV3lxQixFQUFPLE9BQU8sS0FDNUNMLEVBQWlCLElBQUlLLENBQU0sR0FDcEJBLEVBQUEsUUFBUUYsR0FBSyxHQUFHL1osQ0FBTyxLQUNyQnhRLEVBQVd5cUIsQ0FBTSxNQUMxQkwsRUFBaUIsSUFBSUssQ0FBTSxHQUNwQkEsRUFBQUYsR0FBSyxHQUFHL1osQ0FBTyxLQU1qQitaO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTUcsR0FBTztBQUVULGVBQUtQLEVBQVEsT0FBTyxTQUFTTyxDQUFLLEtBQ3hCUCxFQUFBLE9BQU8sS0FBS08sQ0FBSyxHQVN0Qkg7QUFBQSxNQUNUO0FBQUEsTUFDQSxVQUFVeG5CLEdBQU1pZ0IsR0FBVztBQUl6QixlQUFLQSxLQU1HbUgsRUFBQSxXQUFXcG5CLENBQUksSUFBSWlnQixHQUNwQnVILEtBTkVKLEVBQVEsV0FBV3BuQixDQUFJO0FBQUEsTUFPbEM7QUFBQSxNQUNBLFVBQVVBLEdBQU00bkIsR0FBVztBQUl6QixlQUFLQSxLQU1HUixFQUFBLFdBQVdwbkIsQ0FBSSxJQUFJNG5CLEdBQ3BCSixLQU5FSixFQUFRLFdBQVdwbkIsQ0FBSTtBQUFBLE1BT2xDO0FBQUEsTUFDQSxNQUFNNm5CLEdBQWVDLEdBQVcxVCxHQUFXO0FBQ3pDLFlBQUksQ0FBQ21ULEdBQVc7QUFPZCxnQkFBTS9VLElBQVFnVixFQUFJLFlBQVlySixHQUFZK0ksR0FBZUMsQ0FBUztBQUNsRSxpQkFBQTNVLEVBQU0sYUFBYTRVLEdBQ2ZoVCxNQUFjLEtBQ0pBLElBQUEsUUFDSEEsTUFBYyxPQUNYQSxJQUFBLFNBY0w0UCxFQUFBeFIsR0FBT3FWLEdBQWV6VCxDQUFTLEdBRTVCbVQsSUFBQSxJQUNaQyxFQUFJLGFBQWFLLEdBQ2pCQSxFQUFjLGNBQWNMLEdBS3JCOVUsR0FBMkJGLEVBQU0sU0FBUztBQUFBLFFBQUE7QUFBQSxNQU9yRDtBQUFBLE1BQ0EsVUFBVXJGLEdBQVc7QUFNbkIsUUFBQW1hLEVBQWlCLEtBQUtuYSxDQUFTO0FBQUEsTUFDakM7QUFBQSxNQUNBLFVBQVU7QUFDUixRQUFJb2EsTUFDRmpZO0FBQUEsVUFDRWdZO0FBQUEsVUFDQUUsRUFBSTtBQUFBLFVBQ0o7QUFBQSxRQUNGLEdBQ094RCxFQUFBLE1BQU13RCxFQUFJLFVBQVUsR0FLM0IsT0FBT0EsRUFBSSxXQUFXO0FBQUEsTUFJMUI7QUFBQSxNQUNBLFFBQVExckIsR0FBS3lCLEdBQU87QUFNVixlQUFBNnBCLEVBQUEsU0FBU3RyQixDQUFHLElBQUl5QixHQUNqQmlxQjtBQUFBLE1BQ1Q7QUFBQSxNQUNBLGVBQWUzcEIsR0FBSTtBQUNqQixjQUFNa3FCLElBQVVDO0FBQ0gsUUFBQUEsS0FBQVI7QUFDVCxZQUFBO0FBQ0YsaUJBQU8zcEIsRUFBRztBQUFBLFFBQUEsVUFDVjtBQUNhLFVBQUFtcUIsS0FBQUQ7QUFBQSxRQUFBO0FBQUEsTUFDZjtBQUFBLElBRUo7QUFDTyxXQUFBUDtBQUFBLEVBQ1Q7QUFDRjtBQUNBLElBQUlRLEtBQWE7QUFFakIsU0FBU2pELEdBQVFqcEIsR0FBS3lCLEdBQU87QUFDM0IsTUFBS3dnQixJQUlFO0FBQ0wsUUFBSStHLElBQVcvRyxHQUFnQjtBQUMvQixVQUFNa0ssSUFBaUJsSyxHQUFnQixVQUFVQSxHQUFnQixPQUFPO0FBQ3hFLElBQUlrSyxNQUFtQm5ELE1BQ3JCQSxJQUFXL0csR0FBZ0IsV0FBVyxPQUFPLE9BQU9rSyxDQUFjLElBRXBFbkQsRUFBU2hwQixDQUFHLElBQUl5QjtBQUFBLEVBQUE7QUFFcEI7QUFDQSxTQUFTK25CLEdBQU94cEIsR0FBSzBRLEdBQWMwYixJQUF3QixJQUFPO0FBQ2hFLFFBQU05WSxJQUFXMk8sTUFBbUJqTTtBQUNwQyxNQUFJMUMsS0FBWTRZLElBQVk7QUFDMUIsVUFBTWxELElBQVdrRCxLQUFhQSxHQUFXLFNBQVMsV0FBVzVZLElBQVdBLEVBQVMsVUFBVSxPQUFPQSxFQUFTLE1BQU0sY0FBY0EsRUFBUyxNQUFNLFdBQVcsV0FBV0EsRUFBUyxPQUFPLFdBQVc7QUFDM0wsUUFBQTBWLEtBQVlocEIsS0FBT2dwQjtBQUNyQixhQUFPQSxFQUFTaHBCLENBQUc7QUFDckIsUUFBVyxVQUFVLFNBQVM7QUFDckIsYUFBQW9zQixLQUF5QmpyQixFQUFXdVAsQ0FBWSxJQUFJQSxFQUFhLEtBQUs0QyxLQUFZQSxFQUFTLEtBQUssSUFBSTVDO0FBQUEsRUFHN0c7QUFJSjtBQUtBLE1BQU0yYixLQUFzQixDQUFDLEdBQ3ZCQyxLQUF1QixNQUFNLE9BQU8sT0FBT0QsRUFBbUIsR0FDOURFLEtBQW1CLENBQUN4cEIsTUFBUSxPQUFPLGVBQWVBLENBQUcsTUFBTXNwQjtBQUVqRSxTQUFTRyxHQUFVbFosR0FBVWdKLEdBQVVtUSxHQUFZNWIsSUFBUSxJQUFPO0FBQ2hFLFFBQU0yRyxJQUFRLENBQUMsR0FDVGtWLElBQVFKLEdBQXFCO0FBQzFCLEVBQUFoWixFQUFBLGdCQUF1Qyx1QkFBQSxPQUFPLElBQUksR0FDOUNxWixHQUFBclosR0FBVWdKLEdBQVU5RSxHQUFPa1YsQ0FBSztBQUM3QyxhQUFXMXNCLEtBQU9zVCxFQUFTLGFBQWEsQ0FBQztBQUNuQyxJQUFFdFQsS0FBT3dYLE1BQ1hBLEVBQU14WCxDQUFHLElBQUk7QUFNakIsRUFBSXlzQixJQUNGblosRUFBUyxRQUFRekMsSUFBUTJHLElBQVE3SSxHQUFnQjZJLENBQUssSUFFakRsRSxFQUFTLEtBQUssUUFHakJBLEVBQVMsUUFBUWtFLElBRmpCbEUsRUFBUyxRQUFRb1osR0FLckJwWixFQUFTLFFBQVFvWjtBQUNuQjtBQU9BLFNBQVNFLEdBQVl0WixHQUFVZ0osR0FBVXVRLEdBQWNyVSxHQUFXO0FBQzFELFFBQUE7QUFBQSxJQUNKLE9BQUFoQjtBQUFBLElBQ0EsT0FBQWtWO0FBQUEsSUFDQSxPQUFPLEVBQUUsV0FBQUksRUFBVTtBQUFBLEVBQUEsSUFDakJ4WixHQUNFeVosSUFBa0JwakIsRUFBTTZOLENBQUssR0FDN0IsQ0FBQzdGLENBQU8sSUFBSTJCLEVBQVM7QUFDM0IsTUFBSTBaLElBQWtCO0FBQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJK0V4VSxLQUFhc1UsSUFBWSxNQUFNLEVBQUVBLElBQVk7QUFBQTtBQUUxSCxRQUFJQSxJQUFZLEdBQUc7QUFDWCxZQUFBRyxJQUFnQjNaLEVBQVMsTUFBTTtBQUNyQyxlQUFTMVMsSUFBSSxHQUFHQSxJQUFJcXNCLEVBQWMsUUFBUXJzQixLQUFLO0FBQ3pDLFlBQUFaLElBQU1pdEIsRUFBY3JzQixDQUFDO0FBQ3pCLFlBQUlzc0IsR0FBZTVaLEVBQVMsY0FBY3RULENBQUc7QUFDM0M7QUFFSSxjQUFBeUIsSUFBUTZhLEVBQVN0YyxDQUFHO0FBQzFCLFlBQUkyUjtBQUNFLGNBQUE3USxFQUFPNHJCLEdBQU8xc0IsQ0FBRztBQUNmLFlBQUF5QixNQUFVaXJCLEVBQU0xc0IsQ0FBRyxNQUNyQjBzQixFQUFNMXNCLENBQUcsSUFBSXlCLEdBQ0t1ckIsSUFBQTtBQUFBLGVBRWY7QUFDQyxrQkFBQUcsSUFBZWpyQixHQUFTbEMsQ0FBRztBQUNqQyxZQUFBd1gsRUFBTTJWLENBQVksSUFBSUM7QUFBQSxjQUNwQnpiO0FBQUEsY0FDQW9iO0FBQUEsY0FDQUk7QUFBQSxjQUNBMXJCO0FBQUEsY0FDQTZSO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUFBO0FBQUE7QUFHRSxVQUFBN1IsTUFBVWlyQixFQUFNMXNCLENBQUcsTUFDckIwc0IsRUFBTTFzQixDQUFHLElBQUl5QixHQUNLdXJCLElBQUE7QUFBQSxNQUV0QjtBQUFBLElBQ0Y7QUFBQSxTQUVHO0FBQ0wsSUFBSUwsR0FBYXJaLEdBQVVnSixHQUFVOUUsR0FBT2tWLENBQUssTUFDN0JNLElBQUE7QUFFaEIsUUFBQUs7QUFDSixlQUFXcnRCLEtBQU8rc0I7QUFDaEIsT0FBSSxDQUFDelE7QUFBQSxNQUNMLENBQUN4YixFQUFPd2IsR0FBVXRjLENBQUc7QUFBQTtBQUFBLFFBRW5CcXRCLElBQVcvcUIsR0FBVXRDLENBQUcsT0FBT0EsS0FBTyxDQUFDYyxFQUFPd2IsR0FBVStRLENBQVEsUUFDNUQxYixJQUNFa2I7QUFBQSxPQUNIQSxFQUFhN3NCLENBQUcsTUFBTTtBQUFBLE1BQ3ZCNnNCLEVBQWFRLENBQVEsTUFBTSxZQUN6QjdWLEVBQU14WCxDQUFHLElBQUlvdEI7QUFBQSxRQUNYemI7QUFBQSxRQUNBb2I7QUFBQSxRQUNBL3NCO0FBQUEsUUFDQTtBQUFBLFFBQ0FzVDtBQUFBLFFBQ0E7QUFBQSxNQUNGLEtBR0YsT0FBT2tFLEVBQU14WCxDQUFHO0FBSXRCLFFBQUkwc0IsTUFBVUs7QUFDWixpQkFBVy9zQixLQUFPMHNCO0FBQ2hCLFNBQUksQ0FBQ3BRLEtBQVksQ0FBQ3hiLEVBQU93YixHQUFVdGMsQ0FBRyxPQUNwQyxPQUFPMHNCLEVBQU0xc0IsQ0FBRyxHQUNFZ3RCLElBQUE7QUFBQSxFQUd4QjtBQUVGLEVBQUlBLEtBQ01ua0IsR0FBQXlLLEVBQVMsT0FBTyxPQUFPLEVBQUU7QUFLckM7QUFDQSxTQUFTcVosR0FBYXJaLEdBQVVnSixHQUFVOUUsR0FBT2tWLEdBQU87QUFDdEQsUUFBTSxDQUFDL2EsR0FBUzJiLENBQVksSUFBSWhhLEVBQVM7QUFDekMsTUFBSTBaLElBQWtCLElBQ2xCTztBQUNKLE1BQUlqUjtBQUNGLGFBQVN0YyxLQUFPc2MsR0FBVTtBQUNwQixVQUFBemEsR0FBZTdCLENBQUc7QUFDcEI7QUFFSSxZQUFBeUIsSUFBUTZhLEVBQVN0YyxDQUFHO0FBQ3RCLFVBQUF3dEI7QUFDSixNQUFJN2IsS0FBVzdRLEVBQU82USxHQUFTNmIsSUFBV3RyQixHQUFTbEMsQ0FBRyxDQUFDLElBQ2pELENBQUNzdEIsS0FBZ0IsQ0FBQ0EsRUFBYSxTQUFTRSxDQUFRLElBQ2xEaFcsRUFBTWdXLENBQVEsSUFBSS9yQixLQUVqQjhyQixNQUFrQkEsSUFBZ0IsQ0FBQyxJQUFJQyxDQUFRLElBQUkvckIsSUFFNUN5ckIsR0FBZTVaLEVBQVMsY0FBY3RULENBQUcsTUFDL0MsRUFBRUEsS0FBTzBzQixNQUFVanJCLE1BQVVpckIsRUFBTTFzQixDQUFHLE9BQ3hDMHNCLEVBQU0xc0IsQ0FBRyxJQUFJeUIsR0FDS3VyQixJQUFBO0FBQUEsSUFFdEI7QUFHSixNQUFJTSxHQUFjO0FBQ1YsVUFBQVAsSUFBa0JwakIsRUFBTTZOLENBQUssR0FDN0JpVyxJQUFhRixLQUFpQnJ0QjtBQUNwQyxhQUFTVSxJQUFJLEdBQUdBLElBQUkwc0IsRUFBYSxRQUFRMXNCLEtBQUs7QUFDdEMsWUFBQVosSUFBTXN0QixFQUFhMXNCLENBQUM7QUFDMUIsTUFBQTRXLEVBQU14WCxDQUFHLElBQUlvdEI7QUFBQSxRQUNYemI7QUFBQSxRQUNBb2I7QUFBQSxRQUNBL3NCO0FBQUEsUUFDQXl0QixFQUFXenRCLENBQUc7QUFBQSxRQUNkc1Q7QUFBQSxRQUNBLENBQUN4UyxFQUFPMnNCLEdBQVl6dEIsQ0FBRztBQUFBLE1BQ3pCO0FBQUEsSUFBQTtBQUFBLEVBQ0Y7QUFFSyxTQUFBZ3RCO0FBQ1Q7QUFDQSxTQUFTSSxHQUFpQnpiLEdBQVM2RixHQUFPeFgsR0FBS3lCLEdBQU82UixHQUFVb2EsR0FBVTtBQUNsRSxRQUFBN0UsSUFBTWxYLEVBQVEzUixDQUFHO0FBQ3ZCLE1BQUk2b0IsS0FBTyxNQUFNO0FBQ1QsVUFBQThFLElBQWE3c0IsRUFBTytuQixHQUFLLFNBQVM7QUFDcEMsUUFBQThFLEtBQWNsc0IsTUFBVSxRQUFRO0FBQ2xDLFlBQU1pUCxJQUFlbVksRUFBSTtBQUNyQixVQUFBQSxFQUFJLFNBQVMsWUFBWSxDQUFDQSxFQUFJLGVBQWUxbkIsRUFBV3VQLENBQVksR0FBRztBQUNuRSxjQUFBLEVBQUUsZUFBQWtkLE1BQWtCdGE7QUFDMUIsWUFBSXRULEtBQU80dEI7QUFDVCxVQUFBbnNCLElBQVFtc0IsRUFBYzV0QixDQUFHO0FBQUEsYUFDcEI7QUFDQyxnQkFBQXFqQixJQUFRQyxHQUFtQmhRLENBQVE7QUFDakMsVUFBQTdSLElBQUFtc0IsRUFBYzV0QixDQUFHLElBQUkwUSxFQUFhO0FBQUEsWUFDeEM7QUFBQSxZQUNBOEc7QUFBQSxVQUNGLEdBQ002TCxFQUFBO0FBQUEsUUFBQTtBQUFBLE1BQ1I7QUFFUSxRQUFBNWhCLElBQUFpUDtBQUVWLE1BQUk0QyxFQUFTLE1BQ0ZBLEVBQUEsR0FBRyxTQUFTdFQsR0FBS3lCLENBQUs7QUFBQSxJQUNqQztBQUVFLElBQUFvbkI7QUFBQSxNQUFJO0FBQUE7QUFBQSxJQUFBLE1BQ0Y2RSxLQUFZLENBQUNDLElBQ1Bsc0IsSUFBQSxLQUNDb25CO0FBQUEsTUFBSTtBQUFBO0FBQUEsSUFBQSxNQUE0QnBuQixNQUFVLE1BQU1BLE1BQVVhLEdBQVV0QyxDQUFHLE9BQ3hFeUIsSUFBQTtBQUFBLEVBRVo7QUFFSyxTQUFBQTtBQUNUO0FBQ0EsTUFBTW9zQix5QkFBc0MsUUFBUTtBQUNwRCxTQUFTQyxHQUFzQmpNLEdBQU15RSxHQUFZaUUsSUFBVSxJQUFPO0FBQzFELFFBQUF2b0IsSUFBK0J1b0IsSUFBVXNELEtBQWtCdkgsRUFBVyxZQUN0RXpCLElBQVM3aUIsRUFBTSxJQUFJNmYsQ0FBSTtBQUM3QixNQUFJZ0Q7QUFDSyxXQUFBQTtBQUVULFFBQU1uYixJQUFNbVksRUFBSyxPQUNYcGUsSUFBYSxDQUFDLEdBQ2Q2cEIsSUFBZSxDQUFDO0FBQ3RCLE1BQUlTLElBQWE7QUFDVSxNQUFBLENBQUM1c0IsRUFBVzBnQixDQUFJLEdBQUc7QUFDdEMsVUFBQW1NLElBQWMsQ0FBQ0MsTUFBUztBQUNmLE1BQUFGLElBQUE7QUFDYixZQUFNLENBQUN2VyxHQUFPd04sQ0FBSSxJQUFJOEksR0FBc0JHLEdBQU0zSCxHQUFZLEVBQUk7QUFDbEUsTUFBQTlsQixHQUFPaUQsR0FBWStULENBQUssR0FDcEJ3TixLQUFNc0ksRUFBYSxLQUFLLEdBQUd0SSxDQUFJO0FBQUEsSUFDckM7QUFDQSxJQUFJLENBQUN1RixLQUFXakUsRUFBVyxPQUFPLFVBQ3JCQSxFQUFBLE9BQU8sUUFBUTBILENBQVcsR0FFbkNuTSxFQUFLLFdBQ1BtTSxFQUFZbk0sRUFBSyxPQUFPLEdBRXRCQSxFQUFLLFVBQ0ZBLEVBQUEsT0FBTyxRQUFRbU0sQ0FBVztBQUFBLEVBQ2pDO0FBRUUsTUFBQSxDQUFDdGtCLEtBQU8sQ0FBQ3FrQjtBQUNQLFdBQUF6c0IsR0FBU3VnQixDQUFJLEtBQ1Q3ZixFQUFBLElBQUk2ZixHQUFNMWhCLEVBQVMsR0FFcEJBO0FBRUwsTUFBQVksRUFBUTJJLENBQUc7QUFDYixhQUFTOUksSUFBSSxHQUFHQSxJQUFJOEksRUFBSSxRQUFROUksS0FBSztBQUluQyxZQUFNc3RCLElBQWdCaHNCLEdBQVN3SCxFQUFJOUksQ0FBQyxDQUFDO0FBQ2pDLE1BQUF1dEIsR0FBaUJELENBQWEsTUFDaEN6cUIsRUFBV3lxQixDQUFhLElBQUlodUI7QUFBQSxJQUM5QjtBQUFBLFdBRU93SjtBQUlULGVBQVcxSixLQUFPMEosR0FBSztBQUNmLFlBQUF3a0IsSUFBZ0Joc0IsR0FBU2xDLENBQUc7QUFDOUIsVUFBQW11QixHQUFpQkQsQ0FBYSxHQUFHO0FBQzdCLGNBQUFyRixJQUFNbmYsRUFBSTFKLENBQUcsR0FDYm91QixJQUFPM3FCLEVBQVd5cUIsQ0FBYSxJQUFJbnRCLEVBQVE4bkIsQ0FBRyxLQUFLMW5CLEVBQVcwbkIsQ0FBRyxJQUFJLEVBQUUsTUFBTUEsTUFBUXJvQixHQUFPLElBQUlxb0IsQ0FBRyxHQUNuR3dGLElBQVdELEVBQUs7QUFDdEIsWUFBSUUsSUFBYSxJQUNiQyxJQUFpQjtBQUNqQixZQUFBeHRCLEVBQVFzdEIsQ0FBUTtBQUNsQixtQkFBU2hqQixJQUFRLEdBQUdBLElBQVFnakIsRUFBUyxRQUFRLEVBQUVoakIsR0FBTztBQUM5QyxrQkFBQTFDLElBQU8wbEIsRUFBU2hqQixDQUFLLEdBQ3JCbWpCLElBQVdydEIsRUFBV3dILENBQUksS0FBS0EsRUFBSztBQUMxQyxnQkFBSTZsQixNQUFhLFdBQVc7QUFDYixjQUFBRixJQUFBO0FBQ2I7QUFBQSxZQUFBLE1BQ0YsQ0FBV0UsTUFBYSxhQUNMRCxJQUFBO0FBQUEsVUFDbkI7QUFBQTtBQUdGLFVBQUFELElBQWFudEIsRUFBV2t0QixDQUFRLEtBQUtBLEVBQVMsU0FBUztBQUV6RCxRQUFBRDtBQUFBLFVBQUs7QUFBQTtBQUFBLFFBQUEsSUFBc0JFLEdBQzNCRjtBQUFBLFVBQUs7QUFBQTtBQUFBLFFBQUEsSUFBMEJHLElBQzNCRCxLQUFjeHRCLEVBQU9zdEIsR0FBTSxTQUFTLE1BQ3RDZCxFQUFhLEtBQUtZLENBQWE7QUFBQSxNQUNqQztBQUFBLElBQ0Y7QUFHRSxRQUFBM3FCLElBQU0sQ0FBQ0UsR0FBWTZwQixDQUFZO0FBQ2pDLFNBQUFoc0IsR0FBU3VnQixDQUFJLEtBQ1Q3ZixFQUFBLElBQUk2ZixHQUFNdGUsQ0FBRyxHQUVkQTtBQUNUO0FBQ0EsU0FBUzRxQixHQUFpQm51QixHQUFLO0FBQzdCLFNBQUlBLEVBQUksQ0FBQyxNQUFNLE9BQU8sQ0FBQzZCLEdBQWU3QixDQUFHO0FBTTNDO0FBcUhBLE1BQU15dUIsS0FBZ0IsQ0FBQ3p1QixNQUFRQSxFQUFJLENBQUMsTUFBTSxPQUFPQSxNQUFRLFdBQ25EMHVCLEtBQXFCLENBQUNqdEIsTUFBVVYsRUFBUVUsQ0FBSyxJQUFJQSxFQUFNLElBQUlrdEIsRUFBYyxJQUFJLENBQUNBLEdBQWVsdEIsQ0FBSyxDQUFDLEdBQ25HbXRCLEtBQWdCLENBQUM1dUIsR0FBSzZ1QixHQUFTelksTUFBUTtBQUMzQyxNQUFJeVksRUFBUTtBQUNILFdBQUFBO0FBRUgsUUFBQXByQixJQUFhMFMsR0FBUSxJQUFJbE0sTUFNdEJ5a0IsR0FBbUJHLEVBQVEsR0FBRzVrQixDQUFJLENBQUMsR0FDekNtTSxDQUFHO0FBQ04sU0FBQTNTLEVBQVcsS0FBSyxJQUNUQTtBQUNULEdBQ01xckIsS0FBdUIsQ0FBQ0MsR0FBVTdTLEdBQU81SSxNQUFhO0FBQzFELFFBQU04QyxJQUFNMlksRUFBUztBQUNyQixhQUFXL3VCLEtBQU8rdUIsR0FBVTtBQUN0QixRQUFBTixHQUFjenVCLENBQUcsRUFBRztBQUNsQixVQUFBeUIsSUFBUXN0QixFQUFTL3VCLENBQUc7QUFDdEIsUUFBQW1CLEVBQVdNLENBQUs7QUFDbEIsTUFBQXlhLEVBQU1sYyxDQUFHLElBQUk0dUIsR0FBYzV1QixHQUFLeUIsR0FBTzJVLENBQUc7QUFBQSxhQUNqQzNVLEtBQVMsTUFBTTtBQU1sQixZQUFBZ0MsSUFBYWlyQixHQUFtQmp0QixDQUFLO0FBQ3JDLE1BQUF5YSxFQUFBbGMsQ0FBRyxJQUFJLE1BQU15RDtBQUFBLElBQUE7QUFBQSxFQUNyQjtBQUVKLEdBQ011ckIsS0FBc0IsQ0FBQzFiLEdBQVU2RixNQUFhO0FBTTVDLFFBQUExVixJQUFhaXJCLEdBQW1CdlYsQ0FBUTtBQUNyQyxFQUFBN0YsRUFBQSxNQUFNLFVBQVUsTUFBTTdQO0FBQ2pDLEdBQ013ckIsS0FBYyxDQUFDL1MsR0FBTy9DLEdBQVVYLE1BQWM7QUFDbEQsYUFBV3hZLEtBQU9tWjtBQUNaLEtBQUFYLEtBQWF4WSxNQUFRLFNBQ2pCa2MsRUFBQWxjLENBQUcsSUFBSW1aLEVBQVNuWixDQUFHO0FBRy9CLEdBQ01rdkIsS0FBWSxDQUFDNWIsR0FBVTZGLEdBQVVYLE1BQWM7QUFDN0MsUUFBQTBELElBQVE1SSxFQUFTLFFBQVFnWixHQUFxQjtBQUNoRCxNQUFBaFosRUFBUyxNQUFNLFlBQVksSUFBSTtBQUNqQyxVQUFNM0ssSUFBT3dRLEVBQVM7QUFDdEIsSUFBSXhRLEtBQ1VzbUIsR0FBQS9TLEdBQU8vQyxHQUFVWCxDQUFTLEdBQ2xDQSxLQUNFMVYsR0FBQW9aLEdBQU8sS0FBS3ZULEdBQU0sRUFBSSxLQUc1Qm1tQixHQUFxQjNWLEdBQVUrQyxDQUFLO0FBQUEsU0FFN0IvQyxLQUNUNlYsR0FBb0IxYixHQUFVNkYsQ0FBUTtBQUUxQyxHQUNNZ1csS0FBYyxDQUFDN2IsR0FBVTZGLEdBQVVYLE1BQWM7QUFDL0MsUUFBQSxFQUFFLE9BQUE5QixHQUFPLE9BQUF3RixFQUFBLElBQVU1STtBQUN6QixNQUFJOGIsSUFBb0IsSUFDcEJDLElBQTJCbnZCO0FBQzNCLE1BQUF3VyxFQUFNLFlBQVksSUFBSTtBQUN4QixVQUFNL04sSUFBT3dRLEVBQVM7QUFDdEIsSUFBSXhRLElBSVM2UCxLQUFhN1AsTUFBUyxJQUNYeW1CLElBQUEsS0FFUkgsR0FBQS9TLEdBQU8vQyxHQUFVWCxDQUFTLEtBR3hDNFcsSUFBb0IsQ0FBQ2pXLEVBQVMsU0FDOUIyVixHQUFxQjNWLEdBQVUrQyxDQUFLLElBRVhtVCxJQUFBbFc7QUFBQSxTQUNsQkEsTUFDVDZWLEdBQW9CMWIsR0FBVTZGLENBQVEsR0FDWGtXLElBQUEsRUFBRSxTQUFTLEVBQUU7QUFFMUMsTUFBSUQ7QUFDRixlQUFXcHZCLEtBQU9rYztBQUNoQixNQUFJLENBQUN1UyxHQUFjenVCLENBQUcsS0FBS3F2QixFQUF5QnJ2QixDQUFHLEtBQUssUUFDMUQsT0FBT2tjLEVBQU1sYyxDQUFHO0FBSXhCLEdBa0VNOFosS0FBd0J3VjtBQUM5QixTQUFTQyxHQUFlNWQsR0FBUztBQUMvQixTQUFPNmQsR0FBbUI3ZCxDQUFPO0FBQ25DO0FBSUEsU0FBUzZkLEdBQW1CN2QsR0FBUzhkLEdBQW9CO0FBSXZELFFBQU0vbUIsSUFBU3JGLEdBQWM7QUFDN0IsRUFBQXFGLEVBQU8sVUFBVTtBQUlYLFFBQUE7QUFBQSxJQUNKLFFBQVFnbkI7QUFBQSxJQUNSLFFBQVFwVjtBQUFBLElBQ1IsV0FBV3FWO0FBQUEsSUFDWCxlQUFlQztBQUFBLElBQ2YsWUFBWUM7QUFBQSxJQUNaLGVBQWVDO0FBQUEsSUFDZixTQUFTQztBQUFBLElBQ1QsZ0JBQWdCQztBQUFBLElBQ2hCLFlBQVlDO0FBQUEsSUFDWixhQUFhQztBQUFBLElBQ2IsWUFBWUMsSUFBaUIvdkI7QUFBQSxJQUM3QixxQkFBcUJnd0I7QUFBQSxFQUFBLElBQ25CemUsR0FDRTBlLElBQVEsQ0FBQ3JZLEdBQUlDLEdBQUlDLEdBQVdDLElBQVMsTUFBTUMsSUFBa0IsTUFBTUMsSUFBaUIsTUFBTUMsSUFBWSxRQUFRQyxJQUFlLE1BQU1DLElBQWlGLENBQUMsQ0FBQ1AsRUFBRyxvQkFBb0I7QUFDalAsUUFBSUQsTUFBT0M7QUFDVDtBQUVGLElBQUlELEtBQU0sQ0FBQ2lGLEdBQWdCakYsR0FBSUMsQ0FBRSxNQUMvQkUsSUFBU21ZLEdBQWdCdFksQ0FBRSxHQUNuQnFDLEdBQUFyQyxHQUFJSSxHQUFpQkMsR0FBZ0IsRUFBSSxHQUM1Q0wsSUFBQSxPQUVIQyxFQUFHLGNBQWMsT0FDUE8sSUFBQSxJQUNaUCxFQUFHLGtCQUFrQjtBQUV2QixVQUFNLEVBQUUsTUFBQXRQLEdBQU0sS0FBQTBHLEdBQUssV0FBQTZKLEVBQWMsSUFBQWpCO0FBQ2pDLFlBQVF0UCxHQUFNO0FBQUEsTUFDWixLQUFLNG5CO0FBQ1MsUUFBQUMsRUFBQXhZLEdBQUlDLEdBQUlDLEdBQVdDLENBQU07QUFDckM7QUFBQSxNQUNGLEtBQUsyRTtBQUNnQixRQUFBMlQsRUFBQXpZLEdBQUlDLEdBQUlDLEdBQVdDLENBQU07QUFDNUM7QUFBQSxNQUNGLEtBQUt1WTtBQUNILFFBQUkxWSxLQUFNLFFBQ1EyWSxFQUFBMVksR0FBSUMsR0FBV0MsR0FBUUcsQ0FBUztBQUlsRDtBQUFBLE1BQ0YsS0FBS2lIO0FBQ0gsUUFBQXFSO0FBQUEsVUFDRTVZO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFFBQ0Y7QUFDQTtBQUFBLE1BQ0Y7QUFDRSxRQUFJVSxJQUFZLElBQ2QyWDtBQUFBLFVBQ0U3WTtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxRQUNGLElBQ1NVLElBQVksSUFDckI0WDtBQUFBLFVBQ0U5WTtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxRQUNGLEtBQ1NVLElBQVksTUFhWkEsSUFBWSxRQUNoQnZRLEVBQUE7QUFBQSxVQUNIcVA7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxRQUNGO0FBQUEsSUFHRjtBQUVBcEosSUFBQUEsS0FBTyxRQUFRK0ksS0FDVi9JLEdBQUFBLEdBQUsySSxLQUFNQSxFQUFHLEtBQUtLLEdBQWdCSixLQUFNRCxHQUFJLENBQUNDLENBQUU7QUFBQSxFQUUzRCxHQUNNdVksSUFBYyxDQUFDeFksR0FBSUMsR0FBSUMsR0FBV0MsTUFBVztBQUNqRCxRQUFJSCxLQUFNO0FBQ1IsTUFBQTBYO0FBQUEsUUFDRXpYLEVBQUcsS0FBSzRYLEVBQWU1WCxFQUFHLFFBQVE7QUFBQSxRQUNsQ0M7QUFBQSxRQUNBQztBQUFBLE1BQ0Y7QUFBQSxTQUNLO0FBQ0MsWUFBQXhYLElBQUtzWCxFQUFHLEtBQUtELEVBQUc7QUFDbEIsTUFBQUMsRUFBRyxhQUFhRCxFQUFHLFlBQ1QrWCxFQUFBcHZCLEdBQUlzWCxFQUFHLFFBQVE7QUFBQSxJQUM3QjtBQUFBLEVBRUosR0FDTXdZLElBQXFCLENBQUN6WSxHQUFJQyxHQUFJQyxHQUFXQyxNQUFXO0FBQ3hELElBQUlILEtBQU0sT0FDUjBYO0FBQUEsTUFDRXpYLEVBQUcsS0FBSzZYLEVBQWtCN1gsRUFBRyxZQUFZLEVBQUU7QUFBQSxNQUMzQ0M7QUFBQSxNQUNBQztBQUFBLElBQ0YsSUFFQUYsRUFBRyxLQUFLRCxFQUFHO0FBQUEsRUFFZixHQUNNMlksSUFBa0IsQ0FBQzFZLEdBQUlDLEdBQVdDLEdBQVFHLE1BQWM7QUFDNUQsS0FBQ0wsRUFBRyxJQUFJQSxFQUFHLE1BQU0sSUFBSW1ZO0FBQUEsTUFDbkJuWSxFQUFHO0FBQUEsTUFDSEM7QUFBQSxNQUNBQztBQUFBLE1BQ0FHO0FBQUEsTUFDQUwsRUFBRztBQUFBLE1BQ0hBLEVBQUc7QUFBQSxJQUNMO0FBQUEsRUFDRixHQWdCTThZLElBQWlCLENBQUMsRUFBRSxJQUFBcHdCLEdBQUksUUFBQXdYLEVBQU8sR0FBR0QsR0FBVytDLE1BQWdCO0FBQzdELFFBQUFyVTtBQUNHLFdBQUFqRyxLQUFNQSxNQUFPd1g7QUFDbEIsTUFBQXZSLElBQU9zcEIsRUFBZ0J2dkIsQ0FBRSxHQUNkK3VCLEVBQUEvdUIsR0FBSXVYLEdBQVcrQyxDQUFXLEdBQ2hDdGEsSUFBQWlHO0FBRUksSUFBQThvQixFQUFBdlgsR0FBUUQsR0FBVytDLENBQVc7QUFBQSxFQUMzQyxHQUNNK1YsSUFBbUIsQ0FBQyxFQUFFLElBQUFyd0IsR0FBSSxRQUFBd1gsUUFBYTtBQUN2QyxRQUFBdlI7QUFDRyxXQUFBakcsS0FBTUEsTUFBT3dYO0FBQ2xCLE1BQUF2UixJQUFPc3BCLEVBQWdCdnZCLENBQUUsR0FDekIyWixFQUFXM1osQ0FBRSxHQUNSQSxJQUFBaUc7QUFFUCxJQUFBMFQsRUFBV25DLENBQU07QUFBQSxFQUNuQixHQUNNMFksSUFBaUIsQ0FBQzdZLEdBQUlDLEdBQUlDLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsTUFBYztBQUNySCxJQUFBUCxFQUFHLFNBQVMsUUFDRkssSUFBQSxRQUNITCxFQUFHLFNBQVMsV0FDVEssSUFBQSxXQUVWTixLQUFNLE9BQ1JpWjtBQUFBLE1BQ0VoWjtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsSUFDRixJQUVBMFk7QUFBQSxNQUNFbFo7QUFBQSxNQUNBQztBQUFBLE1BQ0FHO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxJQUNGO0FBQUEsRUFFSixHQUNNeVksSUFBZSxDQUFDdmEsR0FBT3dCLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsTUFBYztBQUNsSCxRQUFBN1gsR0FDQXd3QjtBQUNKLFVBQU0sRUFBRSxPQUFBM1osR0FBTyxXQUFBMEIsR0FBVyxZQUFBa1ksR0FBWSxNQUFBQyxFQUFTLElBQUEzYTtBQXlCL0MsUUF4QkEvVixJQUFLK1YsRUFBTSxLQUFLa1o7QUFBQSxNQUNkbFosRUFBTTtBQUFBLE1BQ040QjtBQUFBLE1BQ0FkLEtBQVNBLEVBQU07QUFBQSxNQUNmQTtBQUFBLElBQ0YsR0FDSTBCLElBQVksSUFDSzhXLEVBQUFydkIsR0FBSStWLEVBQU0sUUFBUSxJQUM1QndDLElBQVksTUFDckJSO0FBQUEsTUFDRWhDLEVBQU07QUFBQSxNQUNOL1Y7QUFBQSxNQUNBO0FBQUEsTUFDQXlYO0FBQUEsTUFDQUM7QUFBQSxNQUNBaVosR0FBeUI1YSxHQUFPNEIsQ0FBUztBQUFBLE1BQ3pDQztBQUFBLE1BQ0FDO0FBQUEsSUFDRixHQUVFNlksS0FDa0JyYSxHQUFBTixHQUFPLE1BQU0wQixHQUFpQixTQUFTLEdBRTdEbVosRUFBVzV3QixHQUFJK1YsR0FBT0EsRUFBTSxTQUFTNkIsR0FBY0gsQ0FBZSxHQUM5RFosR0FBTztBQUNULGlCQUFXeFgsS0FBT3dYO0FBQ2hCLFFBQUl4WCxNQUFRLFdBQVcsQ0FBQzZCLEdBQWU3QixDQUFHLEtBQ3hDMnZCLEVBQWNodkIsR0FBSVgsR0FBSyxNQUFNd1gsRUFBTXhYLENBQUcsR0FBR3NZLEdBQVdGLENBQWU7QUFHdkUsTUFBSSxXQUFXWixLQUNibVksRUFBY2h2QixHQUFJLFNBQVMsTUFBTTZXLEVBQU0sT0FBT2MsQ0FBUyxJQUVyRDZZLElBQVkzWixFQUFNLHVCQUNKZ2EsR0FBQUwsR0FBVy9ZLEdBQWlCMUIsQ0FBSztBQUFBLElBQ25EO0FBTUYsSUFBSTJhLEtBQ2tCcmEsR0FBQU4sR0FBTyxNQUFNMEIsR0FBaUIsYUFBYTtBQUUzRCxVQUFBcVosSUFBMEJDLEdBQWVyWixHQUFnQitZLENBQVU7QUFDekUsSUFBSUssS0FDRkwsRUFBVyxZQUFZendCLENBQUUsR0FFaEIrdUIsRUFBQS91QixHQUFJdVgsR0FBV0MsQ0FBTSxLQUMzQmdaLElBQVkzWixLQUFTQSxFQUFNLG1CQUFtQmlhLEtBQTJCSixNQUM1RXZYLEdBQXNCLE1BQU07QUFDYixNQUFBcVgsS0FBQUssR0FBZ0JMLEdBQVcvWSxHQUFpQjFCLENBQUssR0FDbkMrYSxLQUFBTCxFQUFXLE1BQU16d0IsQ0FBRSxHQUM5QzB3QixLQUFRcmEsR0FBb0JOLEdBQU8sTUFBTTBCLEdBQWlCLFNBQVM7QUFBQSxPQUNsRUMsQ0FBYztBQUFBLEVBRXJCLEdBQ01rWixJQUFhLENBQUM1d0IsR0FBSStWLEdBQU9pYixHQUFTcFosR0FBY0gsTUFBb0I7QUFJeEUsUUFISXVaLEtBQ0Z4QixFQUFleHZCLEdBQUlneEIsQ0FBTyxHQUV4QnBaO0FBQ0YsZUFBUzNYLElBQUksR0FBR0EsSUFBSTJYLEVBQWEsUUFBUTNYO0FBQ3hCLFFBQUF1dkIsRUFBQXh2QixHQUFJNFgsRUFBYTNYLENBQUMsQ0FBQztBQUd0QyxRQUFJd1gsR0FBaUI7QUFDbkIsVUFBSTRELElBQVU1RCxFQUFnQjtBQUkxQixVQUFBMUIsTUFBVXNGLEtBQVc0VixHQUFXNVYsRUFBUSxJQUFJLE1BQU1BLEVBQVEsY0FBY3RGLEtBQVNzRixFQUFRLGVBQWV0RixJQUFRO0FBQ2xILGNBQU1tYixJQUFjelosRUFBZ0I7QUFDcEMsUUFBQW1aO0FBQUEsVUFDRTV3QjtBQUFBLFVBQ0FreEI7QUFBQSxVQUNBQSxFQUFZO0FBQUEsVUFDWkEsRUFBWTtBQUFBLFVBQ1p6WixFQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFBQTtBQUFBLElBQ0Y7QUFBQSxFQUVKLEdBQ01NLElBQWdCLENBQUNTLEdBQVVqQixHQUFXQyxHQUFRQyxHQUFpQkMsR0FBZ0JDLEdBQVdDLEdBQWNDLEdBQVd6RCxJQUFRLE1BQU07QUFDckksYUFBU25VLElBQUltVSxHQUFPblUsSUFBSXVZLEVBQVMsUUFBUXZZLEtBQUs7QUFDNUMsWUFBTThaLElBQVF2QixFQUFTdlksQ0FBQyxJQUFJNFgsSUFBWXNaLEdBQWUzWSxFQUFTdlksQ0FBQyxDQUFDLElBQUkrdEIsR0FBZXhWLEVBQVN2WSxDQUFDLENBQUM7QUFDaEcsTUFBQXl2QjtBQUFBLFFBQ0U7QUFBQSxRQUNBM1Y7QUFBQSxRQUNBeEM7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxNQUNGO0FBQUEsSUFBQTtBQUFBLEVBRUosR0FDTTBZLElBQWUsQ0FBQ2xaLEdBQUlDLEdBQUlHLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsTUFBYztBQUM5RixVQUFBN1gsSUFBS3NYLEVBQUcsS0FBS0QsRUFBRztBQUl0QixRQUFJLEVBQUUsV0FBQThVLEdBQVcsaUJBQUExVCxHQUFpQixNQUFBaVksRUFBUyxJQUFBcFo7QUFDM0MsSUFBQTZVLEtBQWE5VSxFQUFHLFlBQVk7QUFDdEIsVUFBQStaLElBQVcvWixFQUFHLFNBQVM5WCxHQUN2Qjh4QixJQUFXL1osRUFBRyxTQUFTL1g7QUFDekIsUUFBQWl4QjtBQTJDSixRQTFDbUIvWSxLQUFBNlosR0FBYzdaLEdBQWlCLEVBQUssSUFDbkQrWSxJQUFZYSxFQUFTLHdCQUNQUixHQUFBTCxHQUFXL1ksR0FBaUJILEdBQUlELENBQUUsR0FFaERxWixLQUNrQnJhLEdBQUFpQixHQUFJRCxHQUFJSSxHQUFpQixjQUFjLEdBRTFDQSxLQUFBNlosR0FBYzdaLEdBQWlCLEVBQUksSUFNbEQyWixFQUFTLGFBQWFDLEVBQVMsYUFBYSxRQUFRRCxFQUFTLGVBQWVDLEVBQVMsZUFBZSxTQUN0R2hDLEVBQW1CcnZCLEdBQUksRUFBRSxHQUV2QnlZLElBQ0ZSO0FBQUEsTUFDRVosRUFBRztBQUFBLE1BQ0hvQjtBQUFBLE1BQ0F6WTtBQUFBLE1BQ0F5WDtBQUFBLE1BQ0FDO0FBQUEsTUFDQWlaLEdBQXlCclosR0FBSUssQ0FBUztBQUFBLE1BQ3RDQztBQUFBLElBQ0YsSUFJVUMsS0FDVkc7QUFBQSxNQUNFWDtBQUFBLE1BQ0FDO0FBQUEsTUFDQXRYO0FBQUEsTUFDQTtBQUFBLE1BQ0F5WDtBQUFBLE1BQ0FDO0FBQUEsTUFDQWlaLEdBQXlCclosR0FBSUssQ0FBUztBQUFBLE1BQ3RDQztBQUFBLE1BQ0E7QUFBQSxJQUNGLEdBRUV1VSxJQUFZLEdBQUc7QUFDakIsVUFBSUEsSUFBWTtBQUNkLFFBQUFvRixFQUFXdnhCLEdBQUlveEIsR0FBVUMsR0FBVTVaLEdBQWlCRSxDQUFTO0FBQUEsZUFFekR3VSxJQUFZLEtBQ1ZpRixFQUFTLFVBQVVDLEVBQVMsU0FDOUJyQyxFQUFjaHZCLEdBQUksU0FBUyxNQUFNcXhCLEVBQVMsT0FBTzFaLENBQVMsR0FHMUR3VSxJQUFZLEtBQ2Q2QyxFQUFjaHZCLEdBQUksU0FBU294QixFQUFTLE9BQU9DLEVBQVMsT0FBTzFaLENBQVMsR0FFbEV3VSxJQUFZLEdBQUc7QUFDakIsY0FBTUcsSUFBZ0JoVixFQUFHO0FBQ3pCLGlCQUFTclgsSUFBSSxHQUFHQSxJQUFJcXNCLEVBQWMsUUFBUXJzQixLQUFLO0FBQ3ZDLGdCQUFBWixJQUFNaXRCLEVBQWNyc0IsQ0FBQyxHQUNyQnFHLEtBQU84cUIsRUFBUy94QixDQUFHLEdBQ25CNEcsS0FBT29yQixFQUFTaHlCLENBQUc7QUFDckIsV0FBQTRHLE9BQVNLLE1BQVFqSCxNQUFRLFlBQzNCMnZCLEVBQWNodkIsR0FBSVgsR0FBS2lILElBQU1MLElBQU0wUixHQUFXRixDQUFlO0FBQUEsUUFDL0Q7QUFBQSxNQUNGO0FBR0osTUFBSTBVLElBQVksS0FDVjlVLEVBQUcsYUFBYUMsRUFBRyxZQUNGK1gsRUFBQXJ2QixHQUFJc1gsRUFBRyxRQUFRO0FBQUEsSUFHN0IsTUFBQSxDQUFBLENBQUNPLEtBQWFZLEtBQW1CLFFBQzFDOFksRUFBV3Z4QixHQUFJb3hCLEdBQVVDLEdBQVU1WixHQUFpQkUsQ0FBUztBQUUxRCxNQUFBNlksSUFBWWEsRUFBUyxtQkFBbUJYLE1BQzNDdlgsR0FBc0IsTUFBTTtBQUMxQixNQUFBcVgsS0FBYUssR0FBZ0JMLEdBQVcvWSxHQUFpQkgsR0FBSUQsQ0FBRSxHQUMvRHFaLEtBQVFyYSxHQUFvQmlCLEdBQUlELEdBQUlJLEdBQWlCLFNBQVM7QUFBQSxPQUM3REMsQ0FBYztBQUFBLEVBRXJCLEdBQ01PLElBQXFCLENBQUN1WixHQUFhQyxHQUFhQyxHQUFtQmphLEdBQWlCQyxHQUFnQkMsR0FBV0MsTUFBaUI7QUFDcEksYUFBUzNYLElBQUksR0FBR0EsSUFBSXd4QixFQUFZLFFBQVF4eEIsS0FBSztBQUNyQyxZQUFBMHhCLElBQVdILEVBQVl2eEIsQ0FBQyxHQUN4QjJ4QixJQUFXSCxFQUFZeHhCLENBQUMsR0FDeEJzWDtBQUFBO0FBQUE7QUFBQSxRQUdKb2EsRUFBUztBQUFBO0FBQUEsU0FFUkEsRUFBUyxTQUFTL1M7QUFBQTtBQUFBLFFBRW5CLENBQUN0QyxHQUFnQnFWLEdBQVVDLENBQVE7QUFBQSxRQUNuQ0QsRUFBUyxZQUFhLE1BQVdyQyxFQUFlcUMsRUFBUyxFQUFFO0FBQUE7QUFBQTtBQUFBLFVBR3pERDtBQUFBO0FBQUE7QUFHSixNQUFBaEM7QUFBQSxRQUNFaUM7QUFBQSxRQUNBQztBQUFBLFFBQ0FyYTtBQUFBLFFBQ0E7QUFBQSxRQUNBRTtBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFBQTtBQUFBLEVBRUosR0FDTTJaLElBQWEsQ0FBQ3Z4QixHQUFJb3hCLEdBQVVDLEdBQVU1WixHQUFpQkUsTUFBYztBQUN6RSxRQUFJeVosTUFBYUMsR0FBVTtBQUN6QixVQUFJRCxNQUFhN3hCO0FBQ2YsbUJBQVdGLEtBQU8reEI7QUFDaEIsVUFBSSxDQUFDbHdCLEdBQWU3QixDQUFHLEtBQUssRUFBRUEsS0FBT2d5QixNQUNuQ3JDO0FBQUEsWUFDRWh2QjtBQUFBLFlBQ0FYO0FBQUEsWUFDQSt4QixFQUFTL3hCLENBQUc7QUFBQSxZQUNaO0FBQUEsWUFDQXNZO0FBQUEsWUFDQUY7QUFBQSxVQUNGO0FBSU4saUJBQVdwWSxLQUFPZ3lCLEdBQVU7QUFDdEIsWUFBQW53QixHQUFlN0IsQ0FBRyxFQUFHO0FBQ25CLGNBQUE0RyxJQUFPb3JCLEVBQVNoeUIsQ0FBRyxHQUNuQmlILElBQU84cUIsRUFBUy94QixDQUFHO0FBQ3JCLFFBQUE0RyxNQUFTSyxLQUFRakgsTUFBUSxXQUMzQjJ2QixFQUFjaHZCLEdBQUlYLEdBQUtpSCxHQUFNTCxHQUFNMFIsR0FBV0YsQ0FBZTtBQUFBLE1BQy9EO0FBRUYsTUFBSSxXQUFXNFosS0FDYnJDLEVBQWNodkIsR0FBSSxTQUFTb3hCLEVBQVMsT0FBT0MsRUFBUyxPQUFPMVosQ0FBUztBQUFBLElBQ3RFO0FBQUEsRUFFSixHQUNNc1ksSUFBa0IsQ0FBQzVZLEdBQUlDLEdBQUlDLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsTUFBYztBQUMxSCxVQUFNZ2EsSUFBc0J2YSxFQUFHLEtBQUtELElBQUtBLEVBQUcsS0FBSzZYLEVBQWUsRUFBRSxHQUM1RDRDLElBQW9CeGEsRUFBRyxTQUFTRCxJQUFLQSxFQUFHLFNBQVM2WCxFQUFlLEVBQUU7QUFDeEUsUUFBSSxFQUFFLFdBQUEvQyxHQUFXLGlCQUFBMVQsR0FBaUIsY0FBY3NaLEVBQXlCLElBQUF6YTtBQU96RSxJQUFJeWEsTUFDRm5hLElBQWVBLElBQWVBLEVBQWEsT0FBT21hLENBQW9CLElBQUlBLElBRXhFMWEsS0FBTSxRQUNHMFgsRUFBQThDLEdBQXFCdGEsR0FBV0MsQ0FBTSxHQUN0Q3VYLEVBQUErQyxHQUFtQnZhLEdBQVdDLENBQU0sR0FDL0NPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtFVCxFQUFHLFlBQVksQ0FBQztBQUFBLE1BQ2hCQztBQUFBLE1BQ0F1YTtBQUFBLE1BQ0FyYTtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsSUFDRixLQUVJc1UsSUFBWSxLQUFLQSxJQUFZLE1BQU0xVDtBQUFBO0FBQUEsSUFFdkNwQixFQUFHLG1CQUNEWTtBQUFBLE1BQ0VaLEVBQUc7QUFBQSxNQUNIb0I7QUFBQSxNQUNBbEI7QUFBQSxNQUNBRTtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFTixFQUFHLE9BQU8sUUFBUUcsS0FBbUJILE1BQU9HLEVBQWdCLFlBRTVEOEI7QUFBQSxNQUNFbEM7QUFBQSxNQUNBQztBQUFBLE1BQ0E7QUFBQTtBQUFBLElBRUYsS0FHRlU7QUFBQSxNQUNFWDtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBdWE7QUFBQSxNQUNBcmE7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0Y7QUFBQSxFQUdOLEdBQ01zWSxJQUFtQixDQUFDOVksR0FBSUMsR0FBSUMsR0FBV0MsR0FBUUMsR0FBaUJDLEdBQWdCQyxHQUFXQyxHQUFjQyxNQUFjO0FBQzNILElBQUFQLEVBQUcsZUFBZU0sR0FDZFAsS0FBTSxPQUNKQyxFQUFHLFlBQVksTUFDakJHLEVBQWdCLElBQUk7QUFBQSxNQUNsQkg7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUc7QUFBQSxNQUNBRTtBQUFBLElBQ0YsSUFFQW1hO0FBQUEsTUFDRTFhO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FFO0FBQUEsSUFDRixJQUdjb2EsR0FBQTVhLEdBQUlDLEdBQUlPLENBQVM7QUFBQSxFQUVyQyxHQUNNbWEsS0FBaUIsQ0FBQ0UsR0FBYzNhLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0UsTUFBYztBQUMzRyxVQUFBbEYsSUFBWXVmLEVBQWEsWUFBWUM7QUFBQSxNQUN6Q0Q7QUFBQSxNQUNBemE7QUFBQSxNQUNBQztBQUFBLElBQ0Y7QUFvQkEsUUFaSTZHLEdBQVkyVCxDQUFZLE1BQzFCdmYsRUFBUyxJQUFJLFdBQVdtRixLQU1Uc2EsR0FBQXpmLEdBQVUsSUFBT2tGLENBQVMsR0FLdkNsRixFQUFTO0FBR1AsVUFESitFLEtBQWtCQSxFQUFlLFlBQVkvRSxHQUFVMGYsSUFBbUJ4YSxDQUFTLEdBQy9FLENBQUNxYSxFQUFhLElBQUk7QUFDcEIsY0FBTXhaLElBQWMvRixFQUFTLFVBQVUrTyxHQUFZdkYsRUFBTztBQUN2QyxRQUFBMlQsRUFBQSxNQUFNcFgsR0FBYW5CLEdBQVdDLENBQU07QUFBQSxNQUFBO0FBQUE7QUFHekQsTUFBQTZhO0FBQUEsUUFDRTFmO0FBQUEsUUFDQXVmO0FBQUEsUUFDQTNhO0FBQUEsUUFDQUM7QUFBQSxRQUNBRTtBQUFBLFFBQ0FDO0FBQUEsUUFDQUU7QUFBQSxNQUNGO0FBQUEsRUFNSixHQUNNb2EsS0FBa0IsQ0FBQzVhLEdBQUlDLEdBQUlPLE1BQWM7QUFDdkMsVUFBQWxGLElBQVcyRSxFQUFHLFlBQVlELEVBQUc7QUFDbkMsUUFBSWliLEdBQXNCamIsR0FBSUMsR0FBSU8sQ0FBUztBQUN6QyxVQUFJbEYsRUFBUyxZQUFZLENBQUNBLEVBQVMsZUFBZTtBQUl2QixRQUFBNGYsRUFBQTVmLEdBQVUyRSxHQUFJTyxDQUFTO0FBSWhEO0FBQUEsTUFBQTtBQUVBLFFBQUFsRixFQUFTLE9BQU8yRSxHQUNoQjNFLEVBQVMsT0FBTztBQUFBO0FBR2xCLE1BQUEyRSxFQUFHLEtBQUtELEVBQUcsSUFDWDFFLEVBQVMsUUFBUTJFO0FBQUEsRUFFckIsR0FDTSthLEtBQW9CLENBQUMxZixHQUFVdWYsR0FBYzNhLEdBQVdDLEdBQVFFLEdBQWdCQyxHQUFXRSxNQUFjO0FBQzdHLFVBQU0yYSxJQUFvQixNQUFNO0FBQzFCLFVBQUM3ZixFQUFTLFdBMkZQO0FBQ0wsWUFBSSxFQUFFLE1BQUExTSxHQUFNLElBQUF3c0IsR0FBSSxHQUFBQyxHQUFHLFFBQUE3USxHQUFRLE9BQUE5TCxNQUFVcEQ7QUFDckM7QUFDUSxnQkFBQWdnQixLQUF1QkMsR0FBMkJqZ0IsQ0FBUTtBQUNoRSxjQUFJZ2dCLElBQXNCO0FBQ3hCLFlBQUkxc0IsTUFDRkEsRUFBSyxLQUFLOFAsRUFBTSxJQUNTd2MsRUFBQTVmLEdBQVUxTSxHQUFNNFIsQ0FBUyxJQUUvQjhhLEdBQUEsU0FBUyxLQUFLLE1BQU07QUFDbkMsY0FBQ2hnQixFQUFTLGVBQ002ZixFQUFBO0FBQUEsWUFDcEIsQ0FDRDtBQUNEO0FBQUEsVUFBQTtBQUFBLFFBQ0Y7QUFFRixZQUFJSyxJQUFhNXNCLEdBQ2J1cUI7QUFJSixRQUFBYyxHQUFjM2UsR0FBVSxFQUFLLEdBQ3pCMU0sS0FDRkEsRUFBSyxLQUFLOFAsRUFBTSxJQUNTd2MsRUFBQTVmLEdBQVUxTSxHQUFNNFIsQ0FBUyxLQUUzQzVSLElBQUE4UCxHQUVMMGMsS0FDRnp3QixHQUFleXdCLENBQUUsSUFFZmpDLEtBQVl2cUIsRUFBSyxTQUFTQSxFQUFLLE1BQU0sd0JBQ3ZCNHFCLEdBQUFMLElBQVczTyxHQUFRNWIsR0FBTThQLENBQUssR0FFaER1YixHQUFjM2UsR0FBVSxFQUFJO0FBSXRCLGNBQUFtZ0IsS0FBV0MsR0FBb0JwZ0IsQ0FBUSxHQUl2Q3FnQixLQUFXcmdCLEVBQVM7QUFDMUIsUUFBQUEsRUFBUyxVQUFVbWdCLElBSW5CcEQ7QUFBQSxVQUNFc0Q7QUFBQSxVQUNBRjtBQUFBO0FBQUEsVUFFQXhELEVBQWUwRCxHQUFTLEVBQUU7QUFBQTtBQUFBLFVBRTFCckQsR0FBZ0JxRCxFQUFRO0FBQUEsVUFDeEJyZ0I7QUFBQSxVQUNBK0U7QUFBQSxVQUNBQztBQUFBLFFBQ0YsR0FJQTFSLEVBQUssS0FBSzZzQixHQUFTLElBQ2ZELE1BQWUsUUFDREksR0FBQXRnQixHQUFVbWdCLEdBQVMsRUFBRSxHQUVuQ0osS0FDRnZaLEdBQXNCdVosR0FBR2hiLENBQWMsSUFFckM4WSxLQUFZdnFCLEVBQUssU0FBU0EsRUFBSyxNQUFNLG1CQUN2Q2tUO0FBQUEsVUFDRSxNQUFNMFgsR0FBZ0JMLElBQVczTyxHQUFRNWIsR0FBTThQLENBQUs7QUFBQSxVQUNwRDJCO0FBQUEsUUFDRjtBQUFBLE1BT0YsT0EzS3VCO0FBQ25CLFlBQUE4WTtBQUNFLGNBQUEsRUFBRSxJQUFBeHdCLEdBQUksT0FBQTZXLEVBQUEsSUFBVXFiLEdBQ2hCLEVBQUUsSUFBQWdCLEdBQUksR0FBQTNKLEdBQUcsUUFBQTFILEdBQVEsTUFBQXNSLElBQU0sTUFBQW5yQixPQUFTMkssR0FDaEN5Z0IsS0FBc0JoVSxHQUFlOFMsQ0FBWTtBQUN2RCxRQUFBWixHQUFjM2UsR0FBVSxFQUFLLEdBQ3pCdWdCLEtBQ0ZseEIsR0FBZWt4QixDQUFFLEdBRWYsQ0FBQ0UsT0FBd0I1QyxJQUFZM1osS0FBU0EsRUFBTSx1QkFDdENnYSxHQUFBTCxHQUFXM08sR0FBUXFRLENBQVksR0FFakRaLEdBQWMzZSxHQUFVLEVBQUk7QUFpQ3JCO0FBQ0wsVUFBSXdnQixHQUFLLE1BQ0ZBLEdBQUEsR0FBRyxrQkFBa0JuckIsRUFBSTtBQUtoQyxnQkFBTXFULEtBQVUxSSxFQUFTLFVBQVVvZ0IsR0FBb0JwZ0IsQ0FBUTtBQU8vRCxVQUFBK2M7QUFBQSxZQUNFO0FBQUEsWUFDQXJVO0FBQUEsWUFDQTlEO0FBQUEsWUFDQUM7QUFBQSxZQUNBN0U7QUFBQSxZQUNBK0U7QUFBQSxZQUNBQztBQUFBLFVBQ0YsR0FJQXVhLEVBQWEsS0FBSzdXLEdBQVE7QUFBQSxRQUFBO0FBSzVCLFlBSElrTyxLQUNGcFEsR0FBc0JvUSxHQUFHN1IsQ0FBYyxHQUVyQyxDQUFDMGIsT0FBd0I1QyxJQUFZM1osS0FBU0EsRUFBTSxpQkFBaUI7QUFDdkUsZ0JBQU13YyxLQUFxQm5CO0FBQzNCLFVBQUEvWTtBQUFBLFlBQ0UsTUFBTTBYLEdBQWdCTCxHQUFXM08sR0FBUXdSLEVBQWtCO0FBQUEsWUFDM0QzYjtBQUFBLFVBQ0Y7QUFBQSxRQUFBO0FBRUUsU0FBQXdhLEVBQWEsWUFBWSxPQUFPclEsS0FBVXpDLEdBQWV5QyxFQUFPLEtBQUssS0FBS0EsRUFBTyxNQUFNLFlBQVksUUFDckdsUCxFQUFTLEtBQUt3RyxHQUFzQnhHLEVBQVMsR0FBRytFLENBQWMsR0FFaEUvRSxFQUFTLFlBQVksSUFJckJ1ZixJQUFlM2EsSUFBWUMsSUFBUztBQUFBLE1BQUE7QUFBQSxJQW1GeEM7QUFDQSxJQUFBN0UsRUFBUyxNQUFNLEdBQUc7QUFDbEIsVUFBTWpCLElBQVNpQixFQUFTLFNBQVMsSUFBSTdOLEdBQWUwdEIsQ0FBaUI7QUFDckUsSUFBQTdmLEVBQVMsTUFBTSxJQUFJO0FBQ25CLFVBQU0yZ0IsSUFBUzNnQixFQUFTLFNBQVNqQixFQUFPLElBQUksS0FBS0EsQ0FBTSxHQUNqRFcsSUFBTU0sRUFBUyxNQUFNakIsRUFBTyxXQUFXLEtBQUtBLENBQU07QUFDeEQsSUFBQVcsRUFBSSxJQUFJTSxHQUNSTixFQUFJLEtBQUtNLEVBQVMsS0FDbEJqQixFQUFPLFlBQVksTUFBTWdELEdBQVNyQyxDQUFHLEdBQ3JDaWYsR0FBYzNlLEdBQVUsRUFBSSxHQUtyQjJnQixFQUFBO0FBQUEsRUFDVCxHQUNNZixJQUEyQixDQUFDNWYsR0FBVTRnQixHQUFXMWIsTUFBYztBQUNuRSxJQUFBMGIsRUFBVSxZQUFZNWdCO0FBQ2hCLFVBQUE2Z0IsSUFBWTdnQixFQUFTLE1BQU07QUFDakMsSUFBQUEsRUFBUyxRQUFRNGdCLEdBQ2pCNWdCLEVBQVMsT0FBTyxNQUNoQnNaLEdBQVl0WixHQUFVNGdCLEVBQVUsT0FBT0MsR0FBVzNiLENBQVMsR0FDL0MyVyxHQUFBN2IsR0FBVTRnQixFQUFVLFVBQVUxYixDQUFTLEdBQ3JDM1EsR0FBQSxHQUNkOE4sR0FBaUJyQyxDQUFRLEdBQ1h4TCxHQUFBO0FBQUEsRUFDaEIsR0FDTTZRLElBQWdCLENBQUNYLEdBQUlDLEdBQUlDLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsSUFBWSxPQUFVO0FBQzFILFVBQUE0YixJQUFLcGMsS0FBTUEsRUFBRyxVQUNkcWMsSUFBZ0JyYyxJQUFLQSxFQUFHLFlBQVksR0FDcENzYyxJQUFLcmMsRUFBRyxVQUNSLEVBQUUsV0FBQTZVLEdBQVcsV0FBQTVULEVBQUEsSUFBY2pCO0FBQ2pDLFFBQUk2VSxJQUFZO0FBQ2QsVUFBSUEsSUFBWSxLQUFLO0FBQ25CLFFBQUF5SDtBQUFBLFVBQ0VIO0FBQUEsVUFDQUU7QUFBQSxVQUNBcGM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxRQUNGO0FBQ0E7QUFBQSxNQUFBLFdBQ1NzVSxJQUFZLEtBQUs7QUFDMUIsUUFBQTBIO0FBQUEsVUFDRUo7QUFBQSxVQUNBRTtBQUFBLFVBQ0FwYztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFFBQ0Y7QUFDQTtBQUFBLE1BQUE7QUFBQTtBQUdKLElBQUlVLElBQVksS0FDVm1iLElBQWdCLE1BQ0ZJLEdBQUFMLEdBQUloYyxHQUFpQkMsQ0FBYyxHQUVqRGljLE1BQU9GLEtBQ1RwRSxFQUFtQjlYLEdBQVdvYyxDQUFFLEtBRzlCRCxJQUFnQixLQUNkbmIsSUFBWSxLQUNkcWI7QUFBQSxNQUNFSDtBQUFBLE1BQ0FFO0FBQUEsTUFDQXBjO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsSUFDRixJQUVnQmljLEdBQUFMLEdBQUloYyxHQUFpQkMsR0FBZ0IsRUFBSSxLQUd2RGdjLElBQWdCLEtBQ2xCckUsRUFBbUI5WCxHQUFXLEVBQUUsR0FFOUJnQixJQUFZLE1BQ2RSO0FBQUEsTUFDRTRiO0FBQUEsTUFDQXBjO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsSUFDRjtBQUFBLEVBSVIsR0FDTWdjLEtBQXVCLENBQUNKLEdBQUlFLEdBQUlwYyxHQUFXQyxHQUFRQyxHQUFpQkMsR0FBZ0JDLEdBQVdDLEdBQWNDLE1BQWM7QUFDL0gsSUFBQTRiLElBQUtBLEtBQU1qMEIsSUFDWG0wQixJQUFLQSxLQUFNbjBCO0FBQ1gsVUFBTXUwQixJQUFZTixFQUFHLFFBQ2ZqckIsSUFBWW1yQixFQUFHLFFBQ2ZLLElBQWUsS0FBSyxJQUFJRCxHQUFXdnJCLENBQVM7QUFDOUMsUUFBQXZJO0FBQ0osU0FBS0EsSUFBSSxHQUFHQSxJQUFJK3pCLEdBQWMvekIsS0FBSztBQUNqQyxZQUFNZzBCLElBQVlOLEVBQUcxekIsQ0FBQyxJQUFJNFgsSUFBWXNaLEdBQWV3QyxFQUFHMXpCLENBQUMsQ0FBQyxJQUFJK3RCLEdBQWUyRixFQUFHMXpCLENBQUMsQ0FBQztBQUNsRixNQUFBeXZCO0FBQUEsUUFDRStELEVBQUd4ekIsQ0FBQztBQUFBLFFBQ0pnMEI7QUFBQSxRQUNBMWM7QUFBQSxRQUNBO0FBQUEsUUFDQUU7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLE1BQ0Y7QUFBQSxJQUFBO0FBRUYsSUFBSWtjLElBQVl2ckIsSUFDZHNyQjtBQUFBLE1BQ0VMO0FBQUEsTUFDQWhjO0FBQUEsTUFDQUM7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0FzYztBQUFBLElBQ0YsSUFFQWpjO0FBQUEsTUFDRTRiO0FBQUEsTUFDQXBjO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0FDO0FBQUEsTUFDQW1jO0FBQUEsSUFDRjtBQUFBLEVBRUosR0FDTUosS0FBcUIsQ0FBQ0gsR0FBSUUsR0FBSXBjLEdBQVcwQyxHQUFjeEMsR0FBaUJDLEdBQWdCQyxHQUFXQyxHQUFjQyxNQUFjO0FBQ25JLFFBQUk1WCxJQUFJO0FBQ1IsVUFBTWkwQixJQUFLUCxFQUFHO0FBQ1YsUUFBQVEsSUFBS1YsRUFBRyxTQUFTLEdBQ2pCVyxJQUFLRixJQUFLO0FBQ1AsV0FBQWowQixLQUFLazBCLEtBQU1sMEIsS0FBS20wQixLQUFJO0FBQ25CLFlBQUEvYyxJQUFLb2MsRUFBR3h6QixDQUFDLEdBQ1RxWCxJQUFLcWMsRUFBRzF6QixDQUFDLElBQUk0WCxJQUFZc1osR0FBZXdDLEVBQUcxekIsQ0FBQyxDQUFDLElBQUkrdEIsR0FBZTJGLEVBQUcxekIsQ0FBQyxDQUFDO0FBQ3ZFLFVBQUFxYyxHQUFnQmpGLEdBQUlDLENBQUU7QUFDeEIsUUFBQW9ZO0FBQUEsVUFDRXJZO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0E7QUFBQSxVQUNBRTtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsUUFDRjtBQUFBO0FBRUE7QUFFRixNQUFBNVg7QUFBQSxJQUFBO0FBRUssV0FBQUEsS0FBS2swQixLQUFNbDBCLEtBQUttMEIsS0FBSTtBQUNuQixZQUFBL2MsSUFBS29jLEVBQUdVLENBQUUsR0FDVjdjLElBQUtxYyxFQUFHUyxDQUFFLElBQUl2YyxJQUFZc1osR0FBZXdDLEVBQUdTLENBQUUsQ0FBQyxJQUFJcEcsR0FBZTJGLEVBQUdTLENBQUUsQ0FBQztBQUMxRSxVQUFBOVgsR0FBZ0JqRixHQUFJQyxDQUFFO0FBQ3hCLFFBQUFvWTtBQUFBLFVBQ0VyWTtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBO0FBQUEsVUFDQUU7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFFBQ0Y7QUFBQTtBQUVBO0FBRUYsTUFBQXNjLEtBQ0FDO0FBQUEsSUFBQTtBQUVGLFFBQUluMEIsSUFBSWswQjtBQUNOLFVBQUlsMEIsS0FBS20wQixHQUFJO0FBQ1gsY0FBTUMsSUFBVUQsSUFBSyxHQUNmNWMsSUFBUzZjLElBQVVILElBQUtQLEVBQUdVLENBQU8sRUFBRSxLQUFLcGE7QUFDL0MsZUFBT2hhLEtBQUttMEI7QUFDVixVQUFBMUU7QUFBQSxZQUNFO0FBQUEsWUFDQWlFLEVBQUcxekIsQ0FBQyxJQUFJNFgsSUFBWXNaLEdBQWV3QyxFQUFHMXpCLENBQUMsQ0FBQyxJQUFJK3RCLEdBQWUyRixFQUFHMXpCLENBQUMsQ0FBQztBQUFBLFlBQ2hFc1g7QUFBQSxZQUNBQztBQUFBLFlBQ0FDO0FBQUEsWUFDQUM7QUFBQSxZQUNBQztBQUFBLFlBQ0FDO0FBQUEsWUFDQUM7QUFBQSxVQUNGLEdBQ0E1WDtBQUFBLE1BQ0Y7QUFBQSxlQUVPQSxJQUFJbTBCO0FBQ2IsYUFBT24wQixLQUFLazBCO0FBQ1YsUUFBQXphLEdBQVErWixFQUFHeHpCLENBQUMsR0FBR3dYLEdBQWlCQyxHQUFnQixFQUFJLEdBQ3BEelg7QUFBQSxTQUVHO0FBQ0wsWUFBTXEwQixJQUFLcjBCLEdBQ0xzMEIsSUFBS3QwQixHQUNMdTBCLHdCQUF1QyxJQUFJO0FBQ2pELFdBQUt2MEIsSUFBSXMwQixHQUFJdDBCLEtBQUttMEIsR0FBSW4wQixLQUFLO0FBQ3pCLGNBQU1nMEIsS0FBWU4sRUFBRzF6QixDQUFDLElBQUk0WCxJQUFZc1osR0FBZXdDLEVBQUcxekIsQ0FBQyxDQUFDLElBQUkrdEIsR0FBZTJGLEVBQUcxekIsQ0FBQyxDQUFDO0FBQzlFLFFBQUFnMEIsR0FBVSxPQUFPLFFBUUZPLEVBQUEsSUFBSVAsR0FBVSxLQUFLaDBCLENBQUM7QUFBQSxNQUN2QztBQUVFLFVBQUF3MEIsR0FDQUMsS0FBVTtBQUNSLFlBQUFDLEtBQWNQLElBQUtHLElBQUs7QUFDOUIsVUFBSUssS0FBUSxJQUNSQyxLQUFtQjtBQUNqQixZQUFBQyxLQUF3QixJQUFJLE1BQU1ILEVBQVc7QUFDbkQsV0FBSzEwQixJQUFJLEdBQUdBLElBQUkwMEIsSUFBYTEwQixJQUFLLENBQUE2MEIsR0FBc0I3MEIsQ0FBQyxJQUFJO0FBQzdELFdBQUtBLElBQUlxMEIsR0FBSXIwQixLQUFLazBCLEdBQUlsMEIsS0FBSztBQUNuQixjQUFBODBCLEtBQVl0QixFQUFHeHpCLENBQUM7QUFDdEIsWUFBSXkwQixNQUFXQyxJQUFhO0FBQ2xCLFVBQUFqYixHQUFBcWIsSUFBV3RkLEdBQWlCQyxHQUFnQixFQUFJO0FBQ3hEO0FBQUEsUUFBQTtBQUVFLFlBQUFzZDtBQUNBLFlBQUFELEdBQVUsT0FBTztBQUNSLFVBQUFDLEtBQUFSLEVBQWlCLElBQUlPLEdBQVUsR0FBRztBQUFBO0FBRTdDLGVBQUtOLElBQUlGLEdBQUlFLEtBQUtMLEdBQUlLO0FBQ2hCLGdCQUFBSyxHQUFzQkwsSUFBSUYsQ0FBRSxNQUFNLEtBQUtqWSxHQUFnQnlZLElBQVdwQixFQUFHYyxDQUFDLENBQUMsR0FBRztBQUNqRSxjQUFBTyxLQUFBUDtBQUNYO0FBQUEsWUFBQTtBQUlOLFFBQUlPLE9BQWEsU0FDUHRiLEdBQUFxYixJQUFXdGQsR0FBaUJDLEdBQWdCLEVBQUksS0FFbENvZCxHQUFBRSxLQUFXVCxDQUFFLElBQUl0MEIsSUFBSSxHQUN2QyswQixNQUFZSCxLQUNLQSxLQUFBRyxLQUVYSixLQUFBLElBRVZsRjtBQUFBLFVBQ0VxRjtBQUFBLFVBQ0FwQixFQUFHcUIsRUFBUTtBQUFBLFVBQ1h6ZDtBQUFBLFVBQ0E7QUFBQSxVQUNBRTtBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsUUFDRixHQUNBNmM7QUFBQSxNQUNGO0FBRUYsWUFBTU8sS0FBNkJMLEtBQVFNLEdBQVlKLEVBQXFCLElBQUl0MUI7QUFFaEYsV0FEQWkxQixJQUFJUSxHQUEyQixTQUFTLEdBQ25DaDFCLElBQUkwMEIsS0FBYyxHQUFHMTBCLEtBQUssR0FBR0EsS0FBSztBQUNyQyxjQUFNazFCLEtBQVlaLElBQUt0MEIsR0FDakJnMEIsS0FBWU4sRUFBR3dCLEVBQVMsR0FDeEIzZCxLQUFTMmQsS0FBWSxJQUFJakIsSUFBS1AsRUFBR3dCLEtBQVksQ0FBQyxFQUFFLEtBQUtsYjtBQUN2RCxRQUFBNmEsR0FBc0I3MEIsQ0FBQyxNQUFNLElBQy9CeXZCO0FBQUEsVUFDRTtBQUFBLFVBQ0F1RTtBQUFBLFVBQ0ExYztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFVBQ0FDO0FBQUEsVUFDQUM7QUFBQSxVQUNBQztBQUFBLFFBQ0YsSUFDUytjLE9BQ0xILElBQUksS0FBS3gwQixNQUFNZzFCLEdBQTJCUixDQUFDLElBQ3hDdmEsR0FBQStaLElBQVcxYyxHQUFXQyxJQUFRLENBQUMsSUFFcENpZDtBQUFBLE1BRUo7QUFBQSxJQUNGO0FBQUEsRUFFSixHQUNNdmEsS0FBTyxDQUFDbkUsR0FBT3dCLEdBQVdDLEdBQVEyQyxHQUFVekMsSUFBaUIsU0FBUztBQUMxRSxVQUFNLEVBQUUsSUFBQTFYLEdBQUksTUFBQWdJLEdBQU0sWUFBQXlvQixHQUFZLFVBQUFqWSxHQUFVLFdBQUFELE1BQWN4QztBQUN0RCxRQUFJd0MsSUFBWSxHQUFHO0FBQ2pCLE1BQUEyQixHQUFLbkUsRUFBTSxVQUFVLFNBQVN3QixHQUFXQyxHQUFRMkMsQ0FBUTtBQUN6RDtBQUFBLElBQUE7QUFFRixRQUFJNUIsSUFBWSxLQUFLO0FBQ25CLE1BQUF4QyxFQUFNLFNBQVMsS0FBS3dCLEdBQVdDLEdBQVEyQyxDQUFRO0FBQy9DO0FBQUEsSUFBQTtBQUVGLFFBQUk1QixJQUFZLElBQUk7QUFDbEIsTUFBQXZRLEVBQUssS0FBSytOLEdBQU93QixHQUFXQyxHQUFRTSxFQUFTO0FBQzdDO0FBQUEsSUFBQTtBQUVGLFFBQUk5UCxNQUFTNFcsSUFBVTtBQUNWLE1BQUFtUSxFQUFBL3VCLEdBQUl1WCxHQUFXQyxDQUFNO0FBQ2hDLGVBQVN2WCxJQUFJLEdBQUdBLElBQUl1WSxFQUFTLFFBQVF2WTtBQUNuQyxRQUFBaWEsR0FBSzFCLEVBQVN2WSxDQUFDLEdBQUdzWCxHQUFXQyxHQUFRMkMsQ0FBUTtBQUVwQyxNQUFBNFUsRUFBQWhaLEVBQU0sUUFBUXdCLEdBQVdDLENBQU07QUFDMUM7QUFBQSxJQUFBO0FBRUYsUUFBSXhQLE1BQVMrbkIsSUFBUTtBQUNKLE1BQUFLLEVBQUFyYSxHQUFPd0IsR0FBV0MsQ0FBTTtBQUN2QztBQUFBLElBQUE7QUFHRixRQUR3QjJDLE1BQWEsS0FBSzVCLElBQVksS0FBS2tZO0FBRXpELFVBQUl0VyxNQUFhO0FBQ2YsUUFBQXNXLEVBQVcsWUFBWXp3QixDQUFFLEdBQ2QrdUIsRUFBQS91QixHQUFJdVgsR0FBV0MsQ0FBTSxHQUNoQzJCLEdBQXNCLE1BQU1zWCxFQUFXLE1BQU16d0IsQ0FBRSxHQUFHMFgsQ0FBYztBQUFBLFdBQzNEO0FBQ0wsY0FBTSxFQUFFLE9BQUEwZCxHQUFPLFlBQUFDLEdBQVksWUFBQUMsRUFBZSxJQUFBN0UsR0FDcEM4RSxJQUFVLE1BQU14RyxFQUFXL3VCLEdBQUl1WCxHQUFXQyxDQUFNLEdBQ2hEZ2UsSUFBZSxNQUFNO0FBQ3pCLFVBQUFKLEVBQU1wMUIsR0FBSSxNQUFNO0FBQ2R1MUIsWUFBQUEsRUFBUSxHQUNSRCxLQUFjQSxFQUFXO0FBQUEsVUFBQSxDQUMxQjtBQUFBLFFBQ0g7QUFDQSxRQUFJRCxJQUNTQSxFQUFBcjFCLEdBQUl1MUIsR0FBU0MsQ0FBWSxJQUV2QkEsRUFBQTtBQUFBLE1BQ2Y7QUFBQTtBQUdTLE1BQUF6RyxFQUFBL3VCLEdBQUl1WCxHQUFXQyxDQUFNO0FBQUEsRUFFcEMsR0FDTWtDLEtBQVUsQ0FBQzNELEdBQU8wQixHQUFpQkMsR0FBZ0JrQyxJQUFXLElBQU8vQixJQUFZLE9BQVU7QUFDekYsVUFBQTtBQUFBLE1BQ0osTUFBQTdQO0FBQUEsTUFDQSxPQUFBNk87QUFBQSxNQUNBLEtBQUFuSTtBQUFBQSxNQUNBLFVBQUE4SjtBQUFBLE1BQ0EsaUJBQUFDO0FBQUEsTUFDQSxXQUFBRjtBQUFBLE1BQ0EsV0FBQTRUO0FBQUEsTUFDQSxNQUFBdUU7QUFBQSxNQUNBLFlBQUErRTtBQUFBLElBQUEsSUFDRTFmO0FBVUosUUFUSW9XLE1BQWMsT0FDSnRVLElBQUEsS0FFVm5KLEtBQU8sUUFDVHNRLEdBQU90USxHQUFLLE1BQU1nSixHQUFnQjNCLEdBQU8sRUFBSSxHQUUzQzBmLEtBQWMsU0FDQWhlLEVBQUEsWUFBWWdlLENBQVUsSUFBSSxTQUV4Q2xkLElBQVksS0FBSztBQUNILE1BQUFkLEVBQUEsSUFBSSxXQUFXMUIsQ0FBSztBQUNwQztBQUFBLElBQUE7QUFFSSxVQUFBMmYsSUFBbUJuZCxJQUFZLEtBQUttWSxHQUNwQ2lGLElBQXdCLENBQUN2VyxHQUFlckosQ0FBSztBQUMvQyxRQUFBeWE7QUFJSixRQUhJbUYsTUFBMEJuRixJQUFZM1osS0FBU0EsRUFBTSx5QkFDdkNnYSxHQUFBTCxHQUFXL1ksR0FBaUIxQixDQUFLLEdBRS9Dd0MsSUFBWTtBQUNHLE1BQUFxZCxHQUFBN2YsRUFBTSxXQUFXMkIsR0FBZ0JrQyxDQUFRO0FBQUEsU0FDckQ7QUFDTCxVQUFJckIsSUFBWSxLQUFLO0FBQ2IsUUFBQXhDLEVBQUEsU0FBUyxRQUFRMkIsR0FBZ0JrQyxDQUFRO0FBQy9DO0FBQUEsTUFBQTtBQUVGLE1BQUk4YixLQUNrQnJmLEdBQUFOLEdBQU8sTUFBTTBCLEdBQWlCLGVBQWUsR0FFL0RjLElBQVksS0FDZHhDLEVBQU0sS0FBSztBQUFBLFFBQ1RBO0FBQUEsUUFDQTBCO0FBQUEsUUFDQUM7QUFBQSxRQUNBSTtBQUFBLFFBQ0E4QjtBQUFBLE1BQ0YsSUFDU25CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtYLENBQUNBLEVBQWdCO0FBQUEsT0FDaEJ6USxNQUFTNFcsTUFBWXVOLElBQVksS0FBS0EsSUFBWSxNQUNqRDJIO0FBQUEsUUFDRXJiO0FBQUEsUUFDQWhCO0FBQUEsUUFDQUM7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0YsS0FDUzFQLE1BQVM0VyxNQUFZdU4sSUFBYSxPQUFjLENBQUN0VSxLQUFhVSxJQUFZLE9BQ25FdWIsR0FBQXRiLEdBQVVmLEdBQWlCQyxDQUFjLEdBRXZEa0MsS0FDRjlaLEdBQU9pVyxDQUFLO0FBQUEsSUFDZDtBQUVGLEtBQUk0ZixNQUEwQm5GLElBQVkzWixLQUFTQSxFQUFNLHFCQUFxQjZlLE1BQzVFdmMsR0FBc0IsTUFBTTtBQUNiLE1BQUFxWCxLQUFBSyxHQUFnQkwsR0FBVy9ZLEdBQWlCMUIsQ0FBSyxHQUM5RDJmLEtBQW9CcmYsR0FBb0JOLEdBQU8sTUFBTTBCLEdBQWlCLFdBQVc7QUFBQSxPQUNoRkMsQ0FBYztBQUFBLEVBRXJCLEdBQ001WCxLQUFTLENBQUNpVyxNQUFVO0FBQ3hCLFVBQU0sRUFBRSxNQUFBL04sR0FBTSxJQUFBaEksR0FBSSxRQUFBd1gsR0FBUSxZQUFBaVosRUFBZSxJQUFBMWE7QUFDekMsUUFBSS9OLE1BQVM0VyxJQUFVO0FBVW5CLE1BQUFpWCxHQUFlNzFCLEdBQUl3WCxDQUFNO0FBRTNCO0FBQUEsSUFBQTtBQUVGLFFBQUl4UCxNQUFTK25CLElBQVE7QUFDbkIsTUFBQU0sRUFBaUJ0YSxDQUFLO0FBQ3RCO0FBQUEsSUFBQTtBQUVGLFVBQU0rZixJQUFnQixNQUFNO0FBQzFCLE1BQUFuYyxFQUFXM1osQ0FBRSxHQUNUeXdCLEtBQWMsQ0FBQ0EsRUFBVyxhQUFhQSxFQUFXLGNBQ3BEQSxFQUFXLFdBQVc7QUFBQSxJQUUxQjtBQUNBLFFBQUkxYSxFQUFNLFlBQVksS0FBSzBhLEtBQWMsQ0FBQ0EsRUFBVyxXQUFXO0FBQ3hELFlBQUEsRUFBRSxPQUFBMkUsR0FBTyxZQUFBQyxFQUFBLElBQWU1RSxHQUN4QitFLElBQWUsTUFBTUosRUFBTXAxQixHQUFJODFCLENBQWE7QUFDbEQsTUFBSVQsSUFDU0EsRUFBQXRmLEVBQU0sSUFBSStmLEdBQWVOLENBQVksSUFFbkNBLEVBQUE7QUFBQSxJQUNmO0FBRWMsTUFBQU0sRUFBQTtBQUFBLEVBRWxCLEdBQ01ELEtBQWlCLENBQUMxaUIsR0FBS2tCLE1BQVE7QUFDL0IsUUFBQXBPO0FBQ0osV0FBT2tOLE1BQVFrQjtBQUNiLE1BQUFwTyxJQUFPc3BCLEVBQWdCcGMsQ0FBRyxHQUMxQndHLEVBQVd4RyxDQUFHLEdBQ1JBLElBQUFsTjtBQUVSLElBQUEwVCxFQUFXdEYsQ0FBRztBQUFBLEVBQ2hCLEdBQ011aEIsS0FBbUIsQ0FBQ2pqQixHQUFVK0UsR0FBZ0JrQyxNQUFhO0FBSXpELFVBQUEsRUFBRSxLQUFBbWMsR0FBSyxPQUFBN2pCLEdBQU8sS0FBQUcsR0FBSyxTQUFBZ0osR0FBUyxJQUFBMmEsR0FBSSxHQUFBek0sR0FBRyxHQUFBcFUsTUFBTXhDO0FBQy9DLElBQUFzakIsR0FBZ0IxTSxDQUFDLEdBQ2pCME0sR0FBZ0I5Z0IsQ0FBQyxHQUNiNGdCLEtBQ0YvekIsR0FBZSt6QixDQUFHLEdBRXBCN2pCLEVBQU0sS0FBSyxHQUNQRyxNQUNGQSxFQUFJLFNBQVMsR0FDTHFILEdBQUEyQixHQUFTMUksR0FBVStFLEdBQWdCa0MsQ0FBUSxJQUVqRG9jLEtBQ0Y3YyxHQUFzQjZjLEdBQUl0ZSxDQUFjLEdBRTFDeUIsR0FBc0IsTUFBTTtBQUMxQixNQUFBeEcsRUFBUyxjQUFjO0FBQUEsT0FDdEIrRSxDQUFjLEdBQ2JBLEtBQWtCQSxFQUFlLGlCQUFpQixDQUFDQSxFQUFlLGVBQWUvRSxFQUFTLFlBQVksQ0FBQ0EsRUFBUyxpQkFBaUJBLEVBQVMsZUFBZStFLEVBQWUsY0FDM0pBLEVBQUEsUUFDWEEsRUFBZSxTQUFTLEtBQzFCQSxFQUFlLFFBQVE7QUFBQSxFQU03QixHQUNNb2MsS0FBa0IsQ0FBQ3RiLEdBQVVmLEdBQWlCQyxHQUFnQmtDLElBQVcsSUFBTy9CLElBQVksSUFBT3pELElBQVEsTUFBTTtBQUNySCxhQUFTblUsSUFBSW1VLEdBQU9uVSxJQUFJdVksRUFBUyxRQUFRdlk7QUFDdkMsTUFBQXlaLEdBQVFsQixFQUFTdlksQ0FBQyxHQUFHd1gsR0FBaUJDLEdBQWdCa0MsR0FBVS9CLENBQVM7QUFBQSxFQUU3RSxHQUNNOFgsS0FBa0IsQ0FBQzVaLE1BQVU7QUFDN0IsUUFBQUEsRUFBTSxZQUFZO0FBQ2IsYUFBQTRaLEdBQWdCNVosRUFBTSxVQUFVLE9BQU87QUFFNUMsUUFBQUEsRUFBTSxZQUFZO0FBQ2IsYUFBQUEsRUFBTSxTQUFTLEtBQUs7QUFFN0IsVUFBTS9WLElBQUt1dkIsRUFBZ0J4WixFQUFNLFVBQVVBLEVBQU0sRUFBRSxHQUM3Q21nQixJQUFjbDJCLEtBQU1BLEVBQUcwVyxFQUFjO0FBQ3BDLFdBQUF3ZixJQUFjM0csRUFBZ0IyRyxDQUFXLElBQUlsMkI7QUFBQSxFQUN0RDtBQUNBLE1BQUltMkIsS0FBYTtBQUNqQixRQUFNNU8sS0FBUyxDQUFDeFIsR0FBT3dCLEdBQVdJLE1BQWM7QUFDOUMsSUFBSTVCLEtBQVMsT0FDUHdCLEVBQVUsVUFDWm1DLEdBQVFuQyxFQUFVLFFBQVEsTUFBTSxNQUFNLEVBQUksSUFHNUNtWTtBQUFBLE1BQ0VuWSxFQUFVLFVBQVU7QUFBQSxNQUNwQnhCO0FBQUEsTUFDQXdCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQUk7QUFBQSxJQUNGLEdBRUZKLEVBQVUsU0FBU3hCLEdBQ2RvZ0IsT0FDVUEsS0FBQSxJQUNJbmhCLEdBQUEsR0FDQ0MsR0FBQSxHQUNMa2hCLEtBQUE7QUFBQSxFQUVqQixHQUNNcmUsS0FBWTtBQUFBLElBQ2hCLEdBQUc0WDtBQUFBLElBQ0gsSUFBSWhXO0FBQUEsSUFDSixHQUFHUTtBQUFBLElBQ0gsR0FBR3BhO0FBQUFBLElBQ0gsSUFBSWt5QjtBQUFBLElBQ0osSUFBSWphO0FBQUEsSUFDSixJQUFJQztBQUFBLElBQ0osS0FBS0M7QUFBQSxJQUNMLEdBQUcwWDtBQUFBLElBQ0gsR0FBRzNlO0FBQUEsRUFDTDtBQVFPLFNBQUE7QUFBQSxJQUNMLFFBQUF1VztBQUFBLElBQ0EsU0FURTtBQUFBLElBVUYsV0FBV2lELEdBQWFqRCxFQUFlO0FBQUEsRUFDekM7QUFDRjtBQUNBLFNBQVNvSixHQUF5QixFQUFFLE1BQUEzb0IsR0FBTSxPQUFBNk8sRUFBQSxHQUFTdWYsR0FBa0I7QUFDbkUsU0FBT0EsTUFBcUIsU0FBU3B1QixNQUFTLG1CQUFtQm91QixNQUFxQixZQUFZcHVCLE1BQVMsb0JBQW9CNk8sS0FBU0EsRUFBTSxZQUFZQSxFQUFNLFNBQVMsU0FBUyxNQUFNLElBQUksU0FBU3VmO0FBQ3ZNO0FBQ0EsU0FBUzlFLEdBQWMsRUFBRSxRQUFBNWYsR0FBUSxLQUFBVyxFQUFBLEdBQU9na0IsR0FBUztBQUMvQyxFQUFJQSxLQUNGM2tCLEVBQU8sU0FBUyxJQUNoQlcsRUFBSSxTQUFTLE1BRWJYLEVBQU8sU0FBUyxLQUNoQlcsRUFBSSxTQUFTO0FBRWpCO0FBQ0EsU0FBUzBlLEdBQWVyWixHQUFnQitZLEdBQVk7QUFDMUMsVUFBQSxDQUFDL1ksS0FBa0JBLEtBQWtCLENBQUNBLEVBQWUsa0JBQWtCK1ksS0FBYyxDQUFDQSxFQUFXO0FBQzNHO0FBQ0EsU0FBU2xYLEdBQXVCbEMsR0FBSUMsR0FBSXRLLElBQVUsSUFBTztBQUN2RCxRQUFNc3BCLElBQU1qZixFQUFHLFVBQ1RrZixJQUFNamYsRUFBRztBQUNmLE1BQUlsWCxFQUFRazJCLENBQUcsS0FBS2wyQixFQUFRbTJCLENBQUc7QUFDN0IsYUFBUyxJQUFJLEdBQUcsSUFBSUQsRUFBSSxRQUFRLEtBQUs7QUFDN0IsWUFBQTdDLElBQUs2QyxFQUFJLENBQUM7QUFDWixVQUFBM0MsSUFBSzRDLEVBQUksQ0FBQztBQUNkLE1BQUk1QyxFQUFHLFlBQVksS0FBSyxDQUFDQSxFQUFHLHFCQUN0QkEsRUFBRyxhQUFhLEtBQUtBLEVBQUcsY0FBYyxRQUN4Q0EsSUFBSzRDLEVBQUksQ0FBQyxJQUFJcEYsR0FBZW9GLEVBQUksQ0FBQyxDQUFDLEdBQ25DNUMsRUFBRyxLQUFLRixFQUFHLEtBRVQsQ0FBQ3ptQixLQUFXMm1CLEVBQUcsY0FBYyxNQUMvQnBhLEdBQXVCa2EsR0FBSUUsQ0FBRSxJQUU3QkEsRUFBRyxTQUFTL0QsT0FDZCtELEVBQUcsS0FBS0YsRUFBRztBQUFBLElBSWI7QUFHTjtBQUNBLFNBQVN5QixHQUFZbjFCLEdBQUs7QUFDbEIsUUFBQWtVLElBQUlsVSxFQUFJLE1BQU0sR0FDZG9LLElBQVMsQ0FBQyxDQUFDO0FBQ2IsTUFBQWxLLEdBQUd3MEIsR0FBRy9CLEdBQUd4dUIsR0FBR3pDO0FBQ2hCLFFBQU0rMEIsSUFBTXoyQixFQUFJO0FBQ2hCLE9BQUtFLElBQUksR0FBR0EsSUFBSXUyQixHQUFLdjJCLEtBQUs7QUFDbEIsVUFBQXcyQixJQUFPMTJCLEVBQUlFLENBQUM7QUFDbEIsUUFBSXcyQixNQUFTLEdBQUc7QUFFVixVQURBaEMsSUFBQXRxQixFQUFPQSxFQUFPLFNBQVMsQ0FBQyxHQUN4QnBLLEVBQUkwMEIsQ0FBQyxJQUFJZ0MsR0FBTTtBQUNqQixRQUFBeGlCLEVBQUVoVSxDQUFDLElBQUl3MEIsR0FDUHRxQixFQUFPLEtBQUtsSyxDQUFDO0FBQ2I7QUFBQSxNQUFBO0FBSUYsV0FGSXl5QixJQUFBLEdBQ0p4dUIsSUFBSWlHLEVBQU8sU0FBUyxHQUNidW9CLElBQUl4dUI7QUFDVCxRQUFBekMsSUFBSWl4QixJQUFJeHVCLEtBQUssR0FDVG5FLEVBQUlvSyxFQUFPMUksQ0FBQyxDQUFDLElBQUlnMUIsSUFDbkIvRCxJQUFJanhCLElBQUksSUFFSnlDLElBQUF6QztBQUdSLE1BQUlnMUIsSUFBTzEyQixFQUFJb0ssRUFBT3VvQixDQUFDLENBQUMsTUFDbEJBLElBQUksTUFDTnplLEVBQUVoVSxDQUFDLElBQUlrSyxFQUFPdW9CLElBQUksQ0FBQyxJQUVyQnZvQixFQUFPdW9CLENBQUMsSUFBSXp5QjtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBSUYsT0FGQXl5QixJQUFJdm9CLEVBQU8sUUFDUGpHLElBQUFpRyxFQUFPdW9CLElBQUksQ0FBQyxHQUNUQSxNQUFNO0FBQ1gsSUFBQXZvQixFQUFPdW9CLENBQUMsSUFBSXh1QixHQUNaQSxJQUFJK1AsRUFBRS9QLENBQUM7QUFFRixTQUFBaUc7QUFDVDtBQUNBLFNBQVN5b0IsR0FBMkJqZ0IsR0FBVTtBQUN0QyxRQUFBK2pCLElBQWUvakIsRUFBUyxRQUFRO0FBQ3RDLE1BQUkrakI7QUFDRixXQUFJQSxFQUFhLFlBQVksQ0FBQ0EsRUFBYSxnQkFDbENBLElBRUE5RCxHQUEyQjhELENBQVk7QUFHcEQ7QUFDQSxTQUFTVCxHQUFnQi9aLEdBQU87QUFDOUIsTUFBSUE7QUFDRixhQUFTamMsSUFBSSxHQUFHQSxJQUFJaWMsRUFBTSxRQUFRamM7QUFDMUIsTUFBQWljLEVBQUFqYyxDQUFDLEVBQUUsU0FBUztBQUV4QjtBQUVBLE1BQU0wMkIsS0FBZ0IsT0FBTyxJQUFJLE9BQU8sR0FDbENDLEtBQWdCLE1BRU4vTixHQUFPOE4sRUFBYTtBQVVwQyxTQUFTRSxHQUFZbmxCLEdBQVFWLEdBQVM7QUFDN0IsU0FBQThsQixHQUFRcGxCLEdBQVEsTUFBTVYsQ0FBTztBQUN0QztBQWVBLFNBQVNGLEdBQU1oQixHQUFRaUIsR0FBSUMsR0FBUztBQU0zQixTQUFBOGxCLEdBQVFobkIsR0FBUWlCLEdBQUlDLENBQU87QUFDcEM7QUFDQSxTQUFTOGxCLEdBQVFobkIsR0FBUWlCLEdBQUlDLElBQVV6UixHQUFXO0FBQ2hELFFBQU0sRUFBRSxXQUFBMFIsR0FBVyxNQUFBQyxHQUFNLE9BQUE2bEIsR0FBTyxNQUFBNWxCLEVBQVMsSUFBQUgsR0FrQm5DZ21CLElBQW1CbjNCLEdBQU8sQ0FBQyxHQUFHbVIsQ0FBTyxHQUVyQ2ltQixJQUFrQmxtQixLQUFNRSxLQUFhLENBQUNGLEtBQU1nbUIsTUFBVTtBQUN4RCxNQUFBRztBQUNKLE1BQUl6VjtBQUNGLFFBQUlzVixNQUFVLFFBQVE7QUFDcEIsWUFBTXRoQixJQUFNbWhCLEdBQWM7QUFDMUIsTUFBQU0sSUFBYXpoQixFQUFJLHFCQUFxQkEsRUFBSSxtQkFBbUIsQ0FBQTtBQUFBLElBQUMsV0FDckQsQ0FBQ3doQixHQUFpQjtBQUMzQixZQUFNRSxJQUFrQixNQUFNO0FBQUEsTUFDOUI7QUFDQSxhQUFBQSxFQUFnQixPQUFPMTNCLElBQ3ZCMDNCLEVBQWdCLFNBQVMxM0IsSUFDekIwM0IsRUFBZ0IsUUFBUTEzQixJQUNqQjAzQjtBQUFBLElBQUE7QUFBQTtBQUdYLFFBQU14a0IsSUFBVzJPO0FBQ0EsRUFBQTBWLEVBQUEsT0FBTyxDQUFDNTFCLEdBQUk0RyxHQUFNc0IsTUFBU3VKLEdBQTJCelIsR0FBSXVSLEdBQVUzSyxHQUFNc0IsQ0FBSTtBQUMvRixNQUFJOHRCLElBQVE7QUFDWixFQUFJTCxNQUFVLFNBQ0tDLEVBQUEsWUFBWSxDQUFDM2tCLE1BQVE7QUFDZCxJQUFBOEcsR0FBQTlHLEdBQUtNLEtBQVlBLEVBQVMsUUFBUTtBQUFBLEVBQzFELElBQ1Nva0IsTUFBVSxXQUNYSyxJQUFBLElBQ1NKLEVBQUEsWUFBWSxDQUFDM2tCLEdBQUtnbEIsTUFBZTtBQUNoRCxJQUFJQSxJQUNFaGxCLEVBQUEsSUFFSnFDLEdBQVNyQyxDQUFHO0FBQUEsRUFFaEIsSUFFZTJrQixFQUFBLGFBQWEsQ0FBQzNrQixNQUFRO0FBQ3JDLElBQUl0QixNQUNGc0IsRUFBSSxTQUFTLElBRVgra0IsTUFDRi9rQixFQUFJLFNBQVMsR0FDVE0sTUFDRk4sRUFBSSxLQUFLTSxFQUFTLEtBQ2xCTixFQUFJLElBQUlNO0FBQUEsRUFHZDtBQUNBLFFBQU1SLElBQWNtbEIsR0FBUXhuQixHQUFRaUIsR0FBSWltQixDQUFnQjtBQUN4RCxTQUFJdlYsT0FDRXlWLElBQ0ZBLEVBQVcsS0FBSy9rQixDQUFXLElBQ2xCOGtCLEtBQ0c5a0IsRUFBQSxJQUdUQTtBQUNUO0FBQ0EsU0FBU21ULEdBQWN4VixHQUFRaFAsR0FBT2tRLEdBQVM7QUFDN0MsUUFBTXFWLElBQWEsS0FBSyxPQUNsQmhXLElBQVM1UCxHQUFTcVAsQ0FBTSxJQUFJQSxFQUFPLFNBQVMsR0FBRyxJQUFJaVosR0FBaUIxQyxHQUFZdlcsQ0FBTSxJQUFJLE1BQU11VyxFQUFXdlcsQ0FBTSxJQUFJQSxFQUFPLEtBQUt1VyxHQUFZQSxDQUFVO0FBQ3pKLE1BQUF0VjtBQUNBLEVBQUF2USxFQUFXTSxDQUFLLElBQ2JpUSxJQUFBalEsS0FFTGlRLElBQUtqUSxFQUFNLFNBQ0RrUSxJQUFBbFE7QUFFTixRQUFBNGhCLElBQVFDLEdBQW1CLElBQUksR0FDL0IvZixJQUFNazBCLEdBQVF6bUIsR0FBUVUsRUFBRyxLQUFLc1YsQ0FBVSxHQUFHclYsQ0FBTztBQUNsRCxTQUFBMFIsRUFBQSxHQUNDOWY7QUFDVDtBQUNBLFNBQVNtbUIsR0FBaUJ0VCxHQUFLOGhCLEdBQU07QUFDN0IsUUFBQUMsSUFBV0QsRUFBSyxNQUFNLEdBQUc7QUFDL0IsU0FBTyxNQUFNO0FBQ1gsUUFBSXBrQixJQUFNc0M7QUFDVixhQUFTeFYsSUFBSSxHQUFHQSxJQUFJdTNCLEVBQVMsVUFBVXJrQixHQUFLbFQ7QUFDcEMsTUFBQWtULElBQUFBLEVBQUlxa0IsRUFBU3YzQixDQUFDLENBQUM7QUFFaEIsV0FBQWtUO0FBQUEsRUFDVDtBQUNGO0FBaUVBLE1BQU1za0IsS0FBb0IsQ0FBQzVnQixHQUFPNmdCLE1BQ3pCQSxNQUFjLGdCQUFnQkEsTUFBYyxnQkFBZ0I3Z0IsRUFBTSxpQkFBaUJBLEVBQU0sR0FBRzZnQixDQUFTLFdBQVcsS0FBSzdnQixFQUFNLEdBQUd0VixHQUFTbTJCLENBQVMsQ0FBQyxXQUFXLEtBQUs3Z0IsRUFBTSxHQUFHbFYsR0FBVSsxQixDQUFTLENBQUMsV0FBVztBQUdsTixTQUFTQyxHQUFLaGxCLEdBQVVpbEIsTUFBVUMsR0FBUztBQUN6QyxNQUFJbGxCLEVBQVMsWUFBYTtBQUNwQixRQUFBa0UsSUFBUWxFLEVBQVMsTUFBTSxTQUFTcFQ7QUEwQnRDLE1BQUkrSixJQUFPdXVCO0FBQ0xqNEIsUUFBQUEsSUFBa0JnNEIsRUFBTSxXQUFXLFNBQVMsR0FDNUN4aEIsSUFBWXhXLEtBQW1CNjNCLEdBQWtCNWdCLEdBQU8rZ0IsRUFBTSxNQUFNLENBQUMsQ0FBQztBQUM1RSxFQUFJeGhCLE1BQ0VBLEVBQVUsU0FDTDlNLElBQUF1dUIsRUFBUSxJQUFJLENBQUMxaUIsTUFBTTFVLEdBQVMwVSxDQUFDLElBQUlBLEVBQUUsS0FBSyxJQUFJQSxDQUFDLElBRWxEaUIsRUFBVSxXQUNMOU0sSUFBQXV1QixFQUFRLElBQUl2MUIsRUFBYTtBQW1CaEMsTUFBQXcxQixHQUNBOU8sSUFBVW5TLEVBQU1paEIsSUFBY2oyQixHQUFhKzFCLENBQUssQ0FBQztBQUFBLEVBQ3JEL2dCLEVBQU1paEIsSUFBY2oyQixHQUFhTixHQUFTcTJCLENBQUssQ0FBQyxDQUFDO0FBQzdDLEVBQUEsQ0FBQzVPLEtBQVdwcEIsTUFDZG9wQixJQUFVblMsRUFBTWloQixJQUFjajJCLEdBQWFGLEdBQVVpMkIsQ0FBSyxDQUFDLENBQUMsSUFFMUQ1TyxLQUNGblc7QUFBQSxJQUNFbVc7QUFBQSxJQUNBclc7QUFBQSxJQUNBO0FBQUEsSUFDQXJKO0FBQUEsRUFDRjtBQUVJLFFBQUF5dUIsSUFBY2xoQixFQUFNaWhCLElBQWMsTUFBTTtBQUM5QyxNQUFJQyxHQUFhO0FBQ1gsUUFBQSxDQUFDcGxCLEVBQVM7QUFDWixNQUFBQSxFQUFTLFVBQVUsQ0FBQztBQUFBLGFBQ1hBLEVBQVMsUUFBUW1sQixDQUFXO0FBQ3JDO0FBRU8sSUFBQW5sQixFQUFBLFFBQVFtbEIsQ0FBVyxJQUFJLElBQ2hDamxCO0FBQUEsTUFDRWtsQjtBQUFBLE1BQ0FwbEI7QUFBQSxNQUNBO0FBQUEsTUFDQXJKO0FBQUEsSUFDRjtBQUFBLEVBQUE7QUFFSjtBQUNBLFNBQVMwdUIsR0FBc0I5VyxHQUFNeUUsR0FBWWlFLElBQVUsSUFBTztBQUNoRSxRQUFNdm9CLElBQVFza0IsRUFBVyxZQUNuQnpCLElBQVM3aUIsRUFBTSxJQUFJNmYsQ0FBSTtBQUM3QixNQUFJZ0QsTUFBVztBQUNOLFdBQUFBO0FBRVQsUUFBTW5iLElBQU1tWSxFQUFLO0FBQ2pCLE1BQUlwZSxJQUFhLENBQUMsR0FDZHNxQixJQUFhO0FBQ1UsTUFBQSxDQUFDNXNCLEVBQVcwZ0IsQ0FBSSxHQUFHO0FBQ3RDLFVBQUErVyxJQUFjLENBQUMzSyxNQUFTO0FBQzVCLFlBQU00SyxJQUF1QkYsR0FBc0IxSyxHQUFNM0gsR0FBWSxFQUFJO0FBQ3pFLE1BQUl1UyxNQUNXOUssSUFBQSxJQUNidnRCLEdBQU9pRCxHQUFZbzFCLENBQW9CO0FBQUEsSUFFM0M7QUFDQSxJQUFJLENBQUN0TyxLQUFXakUsRUFBVyxPQUFPLFVBQ3JCQSxFQUFBLE9BQU8sUUFBUXNTLENBQVcsR0FFbkMvVyxFQUFLLFdBQ1ArVyxFQUFZL1csRUFBSyxPQUFPLEdBRXRCQSxFQUFLLFVBQ0ZBLEVBQUEsT0FBTyxRQUFRK1csQ0FBVztBQUFBLEVBQ2pDO0FBRUUsU0FBQSxDQUFDbHZCLEtBQU8sQ0FBQ3FrQixLQUNQenNCLEdBQVN1Z0IsQ0FBSSxLQUNUN2YsRUFBQSxJQUFJNmYsR0FBTSxJQUFJLEdBRWYsU0FFTDlnQixFQUFRMkksQ0FBRyxJQUNiQSxFQUFJLFFBQVEsQ0FBQzFKLE1BQVF5RCxFQUFXekQsQ0FBRyxJQUFJLElBQUksSUFFM0NRLEdBQU9pRCxHQUFZaUcsQ0FBRyxHQUVwQnBJLEdBQVN1Z0IsQ0FBSSxLQUNUN2YsRUFBQSxJQUFJNmYsR0FBTXBlLENBQVUsR0FFckJBO0FBQ1Q7QUFDQSxTQUFTeXBCLEdBQWV2YixHQUFTM1IsR0FBSztBQUNwQyxTQUFJLENBQUMyUixLQUFXLENBQUNyUixHQUFLTixDQUFHLElBQ2hCLE1BRVRBLElBQU1BLEVBQUksTUFBTSxDQUFDLEVBQUUsUUFBUSxTQUFTLEVBQUUsR0FDL0JjLEVBQU82USxHQUFTM1IsRUFBSSxDQUFDLEVBQUUsWUFBWSxJQUFJQSxFQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUtjLEVBQU82USxHQUFTclAsR0FBVXRDLENBQUcsQ0FBQyxLQUFLYyxFQUFPNlEsR0FBUzNSLENBQUc7QUFDdkg7QUFNQSxTQUFTMHpCLEdBQW9CcGdCLEdBQVU7QUFDL0IsUUFBQTtBQUFBLElBQ0osTUFBTWlSO0FBQUEsSUFDTixPQUFBN047QUFBQSxJQUNBLE9BQUF6SDtBQUFBLElBQ0EsV0FBQTZwQjtBQUFBLElBQ0EsY0FBYyxDQUFDbFMsQ0FBWTtBQUFBLElBQzNCLE9BQUExSztBQUFBLElBQ0EsT0FBQXdRO0FBQUEsSUFDQSxNQUFBNEw7QUFBQUEsSUFDQSxRQUFBcFE7QUFBQSxJQUNBLGFBQUE2UTtBQUFBLElBQ0EsT0FBQXZoQjtBQUFBLElBQ0EsTUFBQTRPO0FBQUEsSUFDQSxZQUFBakc7QUFBQSxJQUNBLEtBQUEvSjtBQUFBLElBQ0EsY0FBQW9TO0FBQUEsRUFBQSxJQUNFbFYsR0FDRXJNLElBQU9pUCxHQUE0QjVDLENBQVE7QUFDN0MsTUFBQXhJLEdBQ0FrdUI7QUFJQSxNQUFBO0FBQ0UsUUFBQXRpQixFQUFNLFlBQVksR0FBRztBQUN2QixZQUFNdWlCLElBQWFILEtBQWE3cEIsR0FDMUJpcUIsSUFTREQ7QUFDSSxNQUFBbnVCLElBQUE2akI7QUFBQSxRQUNQekcsRUFBTztBQUFBLFVBQ0xnUjtBQUFBLFVBQ0FEO0FBQUEsVUFDQUY7QUFBQSxVQUNxRXZoQjtBQUFBLFVBQ3JFMkk7QUFBQSxVQUNBaUc7QUFBQSxVQUNBaFE7QUFBQSxRQUFBO0FBQUEsTUFFSixHQUNtQjRpQixJQUFBdE07QUFBQSxJQUFBLE9BQ2Q7QUFDTCxZQUFNeU0sSUFBVTVVO0FBSVAsTUFBQXpaLElBQUE2akI7QUFBQSxRQUNQd0ssRUFBUSxTQUFTLElBQUlBO0FBQUEsVUFDa0QzaEI7QUFBQSxVQVFqRSxFQUFFLE9BQUFrVixHQUFPLE9BQUF4USxHQUFPLE1BQUFvYyxFQUFLO0FBQUEsUUFBQSxJQUN2QmE7QUFBQSxVQUNtRTNoQjtBQUFBLFVBQ3JFO0FBQUEsUUFBQTtBQUFBLE1BRUosR0FDQXdoQixJQUFtQnpVLEVBQVUsUUFBUW1JLElBQVEwTSxHQUF5QjFNLENBQUs7QUFBQSxJQUFBO0FBQUEsV0FFdEU1bEIsR0FBSztBQUNaLElBQUF1eUIsR0FBVyxTQUFTLEdBQ1I5bEIsR0FBQXpNLEdBQUt3TSxHQUFVLENBQUMsR0FDNUJ4SSxJQUFTdVgsR0FBWXZGLEVBQU87QUFBQSxFQUFBO0FBRTlCLE1BQUlnWCxJQUFPaHBCO0FBS1AsTUFBQWt1QixLQUFvQnhRLE1BQWlCLElBQU87QUFDeEMsVUFBQXhELElBQU8sT0FBTyxLQUFLZ1UsQ0FBZ0IsR0FDbkMsRUFBRSxXQUFBOWYsTUFBYzRhO0FBQ3RCLElBQUk5TyxFQUFLLFVBQ0g5TCxJQUFhLE1BQ1gwTixLQUFnQjVCLEVBQUssS0FBS3prQixFQUFlLE1BQ3hCeTRCLElBQUFNO0FBQUEsTUFDakJOO0FBQUEsTUFDQXBTO0FBQUEsSUFDRixJQUVGa04sSUFBTzNVLEdBQVcyVSxHQUFNa0YsR0FBa0IsSUFBTyxFQUFJO0FBQUEsRUEwQnpEO0FBRUYsU0FBSXRpQixFQUFNLFNBTVJvZCxJQUFPM1UsR0FBVzJVLEdBQU0sTUFBTSxJQUFPLEVBQUksR0FDcENBLEVBQUEsT0FBT0EsRUFBSyxPQUFPQSxFQUFLLEtBQUssT0FBT3BkLEVBQU0sSUFBSSxJQUFJQSxFQUFNLE9BRTNEQSxFQUFNLGNBTVdxRyxHQUFBK1csR0FBTXBkLEVBQU0sVUFBVSxHQUtoQzVMLElBQUFncEIsR0FFWDVkLEdBQTRCalAsQ0FBSSxHQUN6QjZEO0FBQ1Q7QUF3QkEsU0FBU3l1QixHQUFpQnBnQixHQUFVcWdCLElBQVUsSUFBTTtBQUM5QyxNQUFBQztBQUNKLFdBQVM3NEIsSUFBSSxHQUFHQSxJQUFJdVksRUFBUyxRQUFRdlksS0FBSztBQUNsQyxVQUFBOFosSUFBUXZCLEVBQVN2WSxDQUFDO0FBQ3BCLFFBQUFnbEIsR0FBUWxMLENBQUs7QUFDZixVQUFJQSxFQUFNLFNBQVNvQyxNQUFXcEMsRUFBTSxhQUFhLFFBQVE7QUFDdkQsWUFBSStlO0FBQ0Y7QUFFYSxRQUFBQSxJQUFBL2U7QUFBQSxNQUlmO0FBQUE7QUFHRjtBQUFBLEVBQ0Y7QUFFSyxTQUFBK2U7QUFDVDtBQUNBLE1BQU1MLEtBQTJCLENBQUMxTSxNQUFVO0FBQ3RDLE1BQUFucEI7QUFDSixhQUFXdkQsS0FBTzBzQjtBQUNoQixLQUFJMXNCLE1BQVEsV0FBV0EsTUFBUSxXQUFXTSxHQUFLTixDQUFHLFFBQy9DdUQsTUFBUUEsSUFBTSxLQUFLdkQsQ0FBRyxJQUFJMHNCLEVBQU0xc0IsQ0FBRztBQUdqQyxTQUFBdUQ7QUFDVCxHQUNNKzFCLEtBQXVCLENBQUM1TSxHQUFPbFYsTUFBVTtBQUM3QyxRQUFNalUsSUFBTSxDQUFDO0FBQ2IsYUFBV3ZELEtBQU8wc0I7QUFDWixLQUFBLENBQUNuc0IsR0FBZ0JQLENBQUcsS0FBSyxFQUFFQSxFQUFJLE1BQU0sQ0FBQyxLQUFLd1gsUUFDekNqVSxFQUFBdkQsQ0FBRyxJQUFJMHNCLEVBQU0xc0IsQ0FBRztBQUdqQixTQUFBdUQ7QUFDVDtBQUlBLFNBQVMwdkIsR0FBc0JoYyxHQUFXaWQsR0FBVzFiLEdBQVc7QUFDOUQsUUFBTSxFQUFFLE9BQU8yYixHQUFXLFVBQVV1RixHQUFjLFdBQUF2VixNQUFjbE4sR0FDMUQsRUFBRSxPQUFPMGlCLEdBQVcsVUFBVUMsR0FBYyxXQUFBOU0sTUFBY29ILEdBQzFEMkYsSUFBUTFWLEVBQVU7QUFJcEIsTUFBQStQLEVBQVUsUUFBUUEsRUFBVTtBQUN2QixXQUFBO0FBRUwsTUFBQTFiLEtBQWFzVSxLQUFhLEdBQUc7QUFDL0IsUUFBSUEsSUFBWTtBQUNQLGFBQUE7QUFFVCxRQUFJQSxJQUFZO0FBQ2QsYUFBS3FILElBR0UyRixHQUFnQjNGLEdBQVd3RixHQUFXRSxDQUFLLElBRnpDLENBQUMsQ0FBQ0Y7QUFHYixRQUFXN00sSUFBWSxHQUFHO0FBQ3hCLFlBQU1pTixJQUFlN0YsRUFBVTtBQUMvQixlQUFTdHpCLElBQUksR0FBR0EsSUFBSW01QixFQUFhLFFBQVFuNUIsS0FBSztBQUN0QyxjQUFBWixJQUFNKzVCLEVBQWFuNUIsQ0FBQztBQUN0QixZQUFBKzRCLEVBQVUzNUIsQ0FBRyxNQUFNbTBCLEVBQVVuMEIsQ0FBRyxLQUFLLENBQUNrdEIsR0FBZTJNLEdBQU83NUIsQ0FBRztBQUMxRCxpQkFBQTtBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFlBQUkwNUIsS0FBZ0JFLE9BQ2QsQ0FBQ0EsS0FBZ0IsQ0FBQ0EsRUFBYSxXQUMxQixLQUdQekYsTUFBY3dGLElBQ1QsS0FFSnhGLElBR0F3RixJQUdFRyxHQUFnQjNGLEdBQVd3RixHQUFXRSxDQUFLLElBRnpDLEtBSEEsQ0FBQyxDQUFDRjtBQU9OLFNBQUE7QUFDVDtBQUNBLFNBQVNHLEdBQWdCM0YsR0FBV3dGLEdBQVdLLEdBQWM7QUFDckQsUUFBQUMsSUFBVyxPQUFPLEtBQUtOLENBQVM7QUFDdEMsTUFBSU0sRUFBUyxXQUFXLE9BQU8sS0FBSzlGLENBQVMsRUFBRTtBQUN0QyxXQUFBO0FBRVQsV0FBU3Z6QixJQUFJLEdBQUdBLElBQUlxNUIsRUFBUyxRQUFRcjVCLEtBQUs7QUFDbEMsVUFBQVosSUFBTWk2QixFQUFTcjVCLENBQUM7QUFDbEIsUUFBQSs0QixFQUFVMzVCLENBQUcsTUFBTW0wQixFQUFVbjBCLENBQUcsS0FBSyxDQUFDa3RCLEdBQWU4TSxHQUFjaDZCLENBQUc7QUFDakUsYUFBQTtBQUFBLEVBQ1Q7QUFFSyxTQUFBO0FBQ1Q7QUFDQSxTQUFTNHpCLEdBQWdCLEVBQUUsT0FBQWxkLEdBQU8sUUFBQThMLEVBQUEsR0FBVTdoQixHQUFJO0FBQzlDLFNBQU82aEIsS0FBUTtBQUNiLFVBQU1zUixJQUFPdFIsRUFBTztBQUlwQixRQUhJc1IsRUFBSyxZQUFZQSxFQUFLLFNBQVMsaUJBQWlCcGQsTUFDbERvZCxFQUFLLEtBQUtwZCxFQUFNLEtBRWRvZCxNQUFTcGQ7QUFDVixPQUFBQSxJQUFROEwsRUFBTyxPQUFPLEtBQUs3aEIsR0FDNUI2aEIsSUFBU0EsRUFBTztBQUFBO0FBRWhCO0FBQUEsRUFDRjtBQUVKO0FBRUEsTUFBTW9QLEtBQWEsQ0FBQ2pwQixNQUFTQSxFQUFLO0FBQ2xDLElBQUl1eEIsS0FBYTtBQUNqQixNQUFNQyxLQUFlO0FBQUEsRUFDbkIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLTixjQUFjO0FBQUEsRUFDZCxRQUFRbmlCLEdBQUlDLEdBQUlDLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsR0FBVzRoQixHQUFtQjtBQUN6SCxRQUFJcGlCLEtBQU07QUFDUixNQUFBcWlCO0FBQUEsUUFDRXBpQjtBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQTRoQjtBQUFBLE1BQ0Y7QUFBQSxTQUNLO0FBQ0wsVUFBSS9oQixLQUFrQkEsRUFBZSxPQUFPLEtBQUssQ0FBQ0wsRUFBRyxTQUFTLGNBQWM7QUFDMUUsUUFBQUMsRUFBRyxXQUFXRCxFQUFHLFVBQ2pCQyxFQUFHLFNBQVMsUUFBUUEsR0FDcEJBLEVBQUcsS0FBS0QsRUFBRztBQUNYO0FBQUEsTUFBQTtBQUVGLE1BQUFzaUI7QUFBQSxRQUNFdGlCO0FBQUEsUUFDQUM7QUFBQSxRQUNBQztBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBRTtBQUFBLFFBQ0FDO0FBQUEsUUFDQUM7QUFBQSxRQUNBNGhCO0FBQUEsTUFDRjtBQUFBLElBQUE7QUFBQSxFQUVKO0FBQUEsRUFDQSxTQUFTRztBQUFBLEVBQ1QsV0FBV0M7QUFDYixHQUNNQyxLQUFXTjtBQUNqQixTQUFTTyxHQUFhaGtCLEdBQU94UyxHQUFNO0FBQ2pDLFFBQU15MkIsSUFBZ0Jqa0IsRUFBTSxTQUFTQSxFQUFNLE1BQU14UyxDQUFJO0FBQ2pELEVBQUEvQyxFQUFXdzVCLENBQWEsS0FDWkEsRUFBQTtBQUVsQjtBQUNBLFNBQVNOLEdBQWMzakIsR0FBT3dCLEdBQVdDLEdBQVFDLEdBQWlCQyxHQUFnQkMsR0FBV0MsR0FBY0MsR0FBVzRoQixHQUFtQjtBQUNqSSxRQUFBO0FBQUEsSUFDSixHQUFHL0o7QUFBQSxJQUNILEdBQUcsRUFBRSxlQUFBdUssRUFBYztBQUFBLEVBQUEsSUFDakJSLEdBQ0VTLElBQWtCRCxFQUFjLEtBQUssR0FDckNFLElBQVdwa0IsRUFBTSxXQUFXcWtCO0FBQUEsSUFDaENya0I7QUFBQSxJQUNBMkI7QUFBQSxJQUNBRDtBQUFBLElBQ0FGO0FBQUEsSUFDQTJpQjtBQUFBLElBQ0ExaUI7QUFBQSxJQUNBRztBQUFBLElBQ0FDO0FBQUEsSUFDQUM7QUFBQSxJQUNBNGhCO0FBQUEsRUFDRjtBQUNBLEVBQUEvSjtBQUFBLElBQ0U7QUFBQSxJQUNBeUssRUFBUyxnQkFBZ0Jwa0IsRUFBTTtBQUFBLElBQy9CbWtCO0FBQUEsSUFDQTtBQUFBLElBQ0F6aUI7QUFBQSxJQUNBMGlCO0FBQUEsSUFDQXhpQjtBQUFBLElBQ0FDO0FBQUEsRUFDRixHQUNJdWlCLEVBQVMsT0FBTyxLQUNsQkosR0FBYWhrQixHQUFPLFdBQVcsR0FDL0Jna0IsR0FBYWhrQixHQUFPLFlBQVksR0FDaEMyWjtBQUFBLElBQ0U7QUFBQSxJQUNBM1osRUFBTTtBQUFBLElBQ053QjtBQUFBLElBQ0FDO0FBQUEsSUFDQUM7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUVBRTtBQUFBLElBQ0FDO0FBQUEsRUFDRixHQUNnQnlpQixHQUFBRixHQUFVcGtCLEVBQU0sVUFBVSxLQUVqQ29rQixFQUFBLFFBQVEsSUFBTyxFQUFJO0FBRWhDO0FBQ0EsU0FBU1IsR0FBY3RpQixHQUFJQyxHQUFJQyxHQUFXQyxHQUFRQyxHQUFpQkUsR0FBV0MsR0FBY0MsR0FBVyxFQUFFLEdBQUc2WCxHQUFPLElBQUloVyxHQUFTLEdBQUcsRUFBRSxlQUFBdWdCLEVBQUEsS0FBbUI7QUFDaEosUUFBQUUsSUFBVzdpQixFQUFHLFdBQVdELEVBQUc7QUFDbEMsRUFBQThpQixFQUFTLFFBQVE3aUIsR0FDakJBLEVBQUcsS0FBS0QsRUFBRztBQUNYLFFBQU1pakIsSUFBWWhqQixFQUFHLFdBQ2ZpakIsSUFBY2pqQixFQUFHLFlBQ2pCLEVBQUUsY0FBQWtqQixHQUFjLGVBQUFDLEdBQWUsY0FBQUMsR0FBYyxhQUFBQyxFQUFnQixJQUFBUjtBQUNuRSxNQUFJTTtBQUNGLElBQUFOLEVBQVMsZ0JBQWdCRyxHQUNyQmhlLEdBQWdCZ2UsR0FBV0csQ0FBYSxLQUMxQy9LO0FBQUEsTUFDRStLO0FBQUEsTUFDQUg7QUFBQSxNQUNBSCxFQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0ExaUI7QUFBQSxNQUNBMGlCO0FBQUEsTUFDQXhpQjtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxJQUNGLEdBQ0lzaUIsRUFBUyxRQUFRLElBQ25CQSxFQUFTLFFBQVEsSUFDUk8sTUFDSkMsTUFDSGpMO0FBQUEsTUFDRThLO0FBQUEsTUFDQUQ7QUFBQSxNQUNBaGpCO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUFFO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0YsR0FDQXdpQixHQUFnQkYsR0FBVUksQ0FBVyxRQUl6Q0osRUFBUyxZQUFZWixNQUNqQm9CLEtBQ0ZSLEVBQVMsY0FBYyxJQUN2QkEsRUFBUyxlQUFlTSxLQUVoQi9nQixFQUFBK2dCLEdBQWVoakIsR0FBaUIwaUIsQ0FBUSxHQUVsREEsRUFBUyxPQUFPLEdBQ2hCQSxFQUFTLFFBQVEsU0FBUyxHQUNqQkEsRUFBQSxrQkFBa0JGLEVBQWMsS0FBSyxHQUMxQ1MsS0FDRmhMO0FBQUEsTUFDRTtBQUFBLE1BQ0E0SztBQUFBLE1BQ0FILEVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTFpQjtBQUFBLE1BQ0EwaUI7QUFBQSxNQUNBeGlCO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0YsR0FDSXNpQixFQUFTLFFBQVEsSUFDbkJBLEVBQVMsUUFBUSxLQUVqQnpLO0FBQUEsTUFDRThLO0FBQUEsTUFDQUQ7QUFBQSxNQUNBaGpCO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUFFO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0YsR0FDQXdpQixHQUFnQkYsR0FBVUksQ0FBVyxNQUU5QkMsS0FBZ0JsZSxHQUFnQmdlLEdBQVdFLENBQVksS0FDaEU5SztBQUFBLE1BQ0U4SztBQUFBLE1BQ0FGO0FBQUEsTUFDQS9pQjtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxNQUNBMGlCO0FBQUEsTUFDQXhpQjtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxJQUNGLEdBQ0FzaUIsRUFBUyxRQUFRLEVBQUksTUFFckJ6SztBQUFBLE1BQ0U7QUFBQSxNQUNBNEs7QUFBQSxNQUNBSCxFQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0ExaUI7QUFBQSxNQUNBMGlCO0FBQUEsTUFDQXhpQjtBQUFBLE1BQ0FDO0FBQUEsTUFDQUM7QUFBQSxJQUNGLEdBQ0lzaUIsRUFBUyxRQUFRLEtBQ25CQSxFQUFTLFFBQVE7QUFBQSxXQUtuQkssS0FBZ0JsZSxHQUFnQmdlLEdBQVdFLENBQVk7QUFDekQsSUFBQTlLO0FBQUEsTUFDRThLO0FBQUEsTUFDQUY7QUFBQSxNQUNBL2lCO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLE1BQ0EwaUI7QUFBQSxNQUNBeGlCO0FBQUEsTUFDQUM7QUFBQSxNQUNBQztBQUFBLElBQ0YsR0FDQXdpQixHQUFnQkYsR0FBVUcsQ0FBUztBQUFBLFdBRW5DUCxHQUFhemlCLEdBQUksV0FBVyxHQUM1QjZpQixFQUFTLGdCQUFnQkcsR0FDckJBLEVBQVUsWUFBWSxNQUNmSCxFQUFBLFlBQVlHLEVBQVUsVUFBVSxhQUV6Q0gsRUFBUyxZQUFZWixNQUV2QjdKO0FBQUEsSUFDRTtBQUFBLElBQ0E0SztBQUFBLElBQ0FILEVBQVM7QUFBQSxJQUNUO0FBQUEsSUFDQTFpQjtBQUFBLElBQ0EwaUI7QUFBQSxJQUNBeGlCO0FBQUEsSUFDQUM7QUFBQSxJQUNBQztBQUFBLEVBQ0YsR0FDSXNpQixFQUFTLFFBQVE7QUFDbkIsSUFBQUEsRUFBUyxRQUFRO0FBQUEsT0FDWjtBQUNDLFVBQUEsRUFBRSxTQUFBNVosR0FBUyxXQUFBcWEsRUFBQSxJQUFjVDtBQUMvQixJQUFJNVosSUFBVSxJQUNaLFdBQVcsTUFBTTtBQUNYLE1BQUE0WixFQUFTLGNBQWNTLEtBQ3pCVCxFQUFTLFNBQVNJLENBQVc7QUFBQSxPQUU5QmhhLENBQU8sSUFDREEsTUFBWSxLQUNyQjRaLEVBQVMsU0FBU0ksQ0FBVztBQUFBLEVBQy9CO0FBSVI7QUFFQSxTQUFTSCxHQUF1QnJrQixHQUFPMkIsR0FBZ0JELEdBQWlCRixHQUFXMmlCLEdBQWlCMWlCLEdBQVFHLEdBQVdDLEdBQWNDLEdBQVc0aEIsR0FBbUJrQixJQUFjLElBQU87QUFPaEwsUUFBQTtBQUFBLElBQ0osR0FBR2pMO0FBQUEsSUFDSCxHQUFHeFY7QUFBQSxJQUNILElBQUlSO0FBQUEsSUFDSixHQUFHelQ7QUFBQSxJQUNILEdBQUcsRUFBRSxZQUFBc1UsR0FBWSxRQUFBemEsRUFBTztBQUFBLEVBQUEsSUFDdEIyNUI7QUFDQSxNQUFBb0I7QUFDRSxRQUFBQyxJQUFnQkMsR0FBbUJobEIsQ0FBSztBQUM5QyxFQUFJK2tCLEtBQ0VwakIsS0FBa0JBLEVBQWUsa0JBQ25DbWpCLElBQW1CbmpCLEVBQWUsV0FDbkJBLEVBQUE7QUFHbkIsUUFBTTZJLElBQVV4SyxFQUFNLFFBQVF2VCxHQUFTdVQsRUFBTSxNQUFNLE9BQU8sSUFBSSxRQUl4RGlsQixJQUFnQnhqQixHQUNoQjJpQixJQUFXO0FBQUEsSUFDZixPQUFBcGtCO0FBQUEsSUFDQSxRQUFRMkI7QUFBQSxJQUNSLGlCQUFBRDtBQUFBLElBQ0EsV0FBQUU7QUFBQSxJQUNBLFdBQUFKO0FBQUEsSUFDQSxpQkFBQTJpQjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sV0FBV1g7QUFBQSxJQUNYLFNBQVMsT0FBT2haLEtBQVksV0FBV0EsSUFBVTtBQUFBLElBQ2pELGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxJQUNmLGNBQWMsQ0FBQ29hO0FBQUEsSUFDZixhQUFBQTtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDO0FBQUEsSUFDVixRQUFRTSxJQUFTLElBQU9DLElBQU8sSUFBTztBQWE5QixZQUFBO0FBQUEsUUFDSixPQUFPN2M7QUFBQSxRQUNQLGNBQUFtYztBQUFBLFFBQ0EsZUFBQUM7QUFBQSxRQUNBLFdBQUFHO0FBQUEsUUFDQSxTQUFBTztBQUFBLFFBQ0EsaUJBQWlCQztBQUFBLFFBQ2pCLFdBQVd2aUI7QUFBQSxNQUFBLElBQ1RzaEI7QUFDSixVQUFJa0IsS0FBYTtBQUNqQixNQUFJbEIsRUFBUyxjQUNYQSxFQUFTLGNBQWMsS0FDYmMsTUFDVkksS0FBYWIsS0FBZ0JDLEVBQWMsY0FBY0EsRUFBYyxXQUFXLFNBQVMsVUFDdkZZLE9BQ1diLEVBQUEsV0FBVyxhQUFhLE1BQU07QUFDckMsUUFBQUksTUFBY1QsRUFBUyxjQUN6QmpnQjtBQUFBLFVBQ0V1Z0I7QUFBQSxVQUNBNWhCO0FBQUEsVUFDQXJCLE1BQVd3akIsSUFBZ0IvMEIsRUFBS3UwQixDQUFZLElBQUloakI7QUFBQSxVQUNoRDtBQUFBLFFBQ0YsR0FDQXpDLEdBQWlCb21CLENBQU87QUFBQSxNQUU1QixJQUVFWCxNQUNFamdCLEVBQVdpZ0IsRUFBYSxFQUFFLE1BQU0zaEIsT0FDbENyQixJQUFTdlIsRUFBS3UwQixDQUFZLElBRXBCOWdCLEVBQUE4Z0IsR0FBY1ksR0FBa0JqQixHQUFVLEVBQUksSUFFbkRrQixNQUNFbmhCLEVBQUF1Z0IsR0FBZTVoQixJQUFZckIsR0FBUSxDQUFDLElBRzdDNmlCLEdBQWdCRixHQUFVTSxDQUFhLEdBQ3ZDTixFQUFTLGdCQUFnQixNQUN6QkEsRUFBUyxlQUFlO0FBQ3hCLFVBQUl0WSxLQUFTc1ksRUFBUyxRQUNsQm1CLElBQXdCO0FBQzVCLGFBQU96WixNQUFRO0FBQ2IsWUFBSUEsR0FBTyxlQUFlO0FBQ2pCLFVBQUFBLEdBQUEsUUFBUSxLQUFLLEdBQUdzWixDQUFPLEdBQ05HLElBQUE7QUFDeEI7QUFBQSxRQUFBO0FBRUYsUUFBQXpaLEtBQVNBLEdBQU87QUFBQSxNQUFBO0FBRWQsTUFBQSxDQUFDeVosS0FBeUIsQ0FBQ0QsTUFDN0J0bUIsR0FBaUJvbUIsQ0FBTyxHQUUxQmhCLEVBQVMsVUFBVSxDQUFDLEdBQ2hCVyxLQUNFcGpCLEtBQWtCQSxFQUFlLGlCQUFpQm1qQixNQUFxQm5qQixFQUFlLGNBQ3pFQSxFQUFBLFFBQ1hBLEVBQWUsU0FBUyxLQUFLLENBQUN3akIsS0FDaEN4akIsRUFBZSxRQUFRLElBSTdCcWlCLEdBQWExYixHQUFRLFdBQVc7QUFBQSxJQUNsQztBQUFBLElBQ0EsU0FBU2tkLEdBQWU7QUFDbEIsVUFBQSxDQUFDcEIsRUFBUztBQUNaO0FBRUksWUFBQSxFQUFFLE9BQU85YixHQUFRLGNBQUFtYyxHQUFjLGlCQUFpQlksR0FBa0IsV0FBV3ZpQixHQUFZLFdBQVcyaUIsRUFBZSxJQUFBckI7QUFDekgsTUFBQUosR0FBYTFiLEdBQVEsWUFBWTtBQUMzQixZQUFBdkYsSUFBVTdTLEVBQUt1MEIsQ0FBWSxHQUMzQmlCLElBQWdCLE1BQU07QUFDdEIsUUFBQ3RCLEVBQVMsaUJBR2R6SztBQUFBLFVBQ0U7QUFBQSxVQUNBNkw7QUFBQSxVQUNBMWlCO0FBQUEsVUFDQUM7QUFBQSxVQUNBc2lCO0FBQUEsVUFDQTtBQUFBO0FBQUEsVUFFQUk7QUFBQSxVQUNBNWpCO0FBQUEsVUFDQUM7QUFBQSxRQUNGLEdBQ0F3aUIsR0FBZ0JGLEdBQVVvQixDQUFhO0FBQUEsTUFDekMsR0FDTUYsS0FBYUUsRUFBYyxjQUFjQSxFQUFjLFdBQVcsU0FBUztBQUNqRixNQUFJRixPQUNGYixFQUFhLFdBQVcsYUFBYWlCLElBRXZDdEIsRUFBUyxlQUFlLElBQ3hCemdCO0FBQUEsUUFDRThnQjtBQUFBLFFBQ0FZO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFFQTtBQUFBO0FBQUEsTUFFRixHQUNLQyxNQUNXSSxFQUFBO0FBQUEsSUFFbEI7QUFBQSxJQUNBLEtBQUs1aUIsR0FBWUMsR0FBUzlRLEdBQU07QUFDOUIsTUFBQW15QixFQUFTLGdCQUFnQmpnQixFQUFLaWdCLEVBQVMsY0FBY3RoQixHQUFZQyxHQUFTOVEsQ0FBSSxHQUM5RW15QixFQUFTLFlBQVl0aEI7QUFBQSxJQUN2QjtBQUFBLElBQ0EsT0FBTztBQUNMLGFBQU9zaEIsRUFBUyxnQkFBZ0JsMEIsRUFBS2swQixFQUFTLFlBQVk7QUFBQSxJQUM1RDtBQUFBLElBQ0EsWUFBWXhuQixHQUFVMGYsR0FBbUJxSixHQUFZO0FBQzdDLFlBQUFDLElBQXNCLENBQUMsQ0FBQ3hCLEVBQVM7QUFDdkMsTUFBSXdCLEtBQ094QixFQUFBO0FBRUwsWUFBQXlCLElBQWFqcEIsRUFBUyxNQUFNO0FBQ3pCLE1BQUFBLEVBQUEsU0FBUyxNQUFNLENBQUN4TSxNQUFRO0FBQ25CLFFBQUF5TSxHQUFBek0sR0FBS3dNLEdBQVUsQ0FBQztBQUFBLE1BQUEsQ0FDN0IsRUFBRSxLQUFLLENBQUNrcEIsTUFBcUI7QUFDNUIsWUFBSWxwQixFQUFTLGVBQWV3bkIsRUFBUyxlQUFlQSxFQUFTLGNBQWN4bkIsRUFBUztBQUNsRjtBQUVGLFFBQUFBLEVBQVMsZ0JBQWdCO0FBQ25CLGNBQUEsRUFBRSxPQUFPMEwsRUFBQSxJQUFXMUw7QUFJUixRQUFBbXBCLEdBQUFucEIsR0FBVWtwQixDQUF1QixHQUMvQ0QsTUFDRnZkLEVBQU8sS0FBS3VkO0FBRWQsY0FBTWxqQixJQUFjLENBQUNrakIsS0FBY2pwQixFQUFTLFFBQVE7QUFDcEQsUUFBQTBmO0FBQUEsVUFDRTFmO0FBQUEsVUFDQTBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJQTlELEVBQVdxaEIsS0FBY2pwQixFQUFTLFFBQVEsRUFBRTtBQUFBO0FBQUE7QUFBQSxVQUc1Q2lwQixJQUFhLE9BQU8zMUIsRUFBSzBNLEVBQVMsT0FBTztBQUFBLFVBQ3pDd25CO0FBQUEsVUFDQXhpQjtBQUFBLFVBQ0ErakI7QUFBQSxRQUNGLEdBQ0loakIsS0FDRjVZLEVBQU80WSxDQUFXLEdBRUp1YSxHQUFBdGdCLEdBQVUwTCxFQUFPLEVBQUUsR0FJL0JzZCxLQUF1QixFQUFFeEIsRUFBUyxTQUFTLEtBQzdDQSxFQUFTLFFBQVE7QUFBQSxNQUNuQixDQUNEO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTRCLEdBQWlCbmlCLEdBQVU7QUFDakMsTUFBQXVnQixFQUFTLGNBQWMsSUFDbkJBLEVBQVMsZ0JBQ1h6Z0I7QUFBQSxRQUNFeWdCLEVBQVM7QUFBQSxRQUNUMWlCO0FBQUEsUUFDQXNrQjtBQUFBLFFBQ0FuaUI7QUFBQSxNQUNGLEdBRUV1Z0IsRUFBUyxpQkFDWHpnQjtBQUFBLFFBQ0V5Z0IsRUFBUztBQUFBLFFBQ1QxaUI7QUFBQSxRQUNBc2tCO0FBQUEsUUFDQW5pQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFFSjtBQUNPLFNBQUF1Z0I7QUFDVDtBQUNBLFNBQVNQLEdBQWdCdmYsR0FBTXRFLEdBQU8wQixHQUFpQkMsR0FBZ0JDLEdBQVdDLEdBQWNDLEdBQVc0aEIsR0FBbUJ1QyxHQUFhO0FBQ25JLFFBQUE3QixJQUFXcGtCLEVBQU0sV0FBV3FrQjtBQUFBLElBQ2hDcmtCO0FBQUEsSUFDQTJCO0FBQUEsSUFDQUQ7QUFBQSxJQUNBNEMsRUFBSztBQUFBO0FBQUEsSUFFTCxTQUFTLGNBQWMsS0FBSztBQUFBLElBQzVCO0FBQUEsSUFDQTFDO0FBQUEsSUFDQUM7QUFBQSxJQUNBQztBQUFBLElBQ0E0aEI7QUFBQSxJQUNBO0FBQUEsRUFDRixHQUNNdHZCLElBQVM2eEI7QUFBQSxJQUNiM2hCO0FBQUEsSUFDQThmLEVBQVMsZ0JBQWdCcGtCLEVBQU07QUFBQSxJQUMvQjBCO0FBQUEsSUFDQTBpQjtBQUFBLElBQ0F2aUI7QUFBQSxJQUNBQztBQUFBLEVBQ0Y7QUFDSSxTQUFBc2lCLEVBQVMsU0FBUyxLQUNYQSxFQUFBLFFBQVEsSUFBTyxFQUFJLEdBRXZCaHdCO0FBQ1Q7QUFDQSxTQUFTMHZCLEdBQTBCOWpCLEdBQU87QUFDbEMsUUFBQSxFQUFFLFdBQUF3QyxHQUFXLFVBQUFDLEVBQUEsSUFBYXpDLEdBQzFCa21CLElBQWlCMWpCLElBQVk7QUFDbkMsRUFBQXhDLEVBQU0sWUFBWW1tQjtBQUFBLElBQ2hCRCxJQUFpQnpqQixFQUFTLFVBQVVBO0FBQUEsRUFDdEMsR0FDQXpDLEVBQU0sYUFBYWttQixJQUFpQkMsR0FBc0IxakIsRUFBUyxRQUFRLElBQUlrSixHQUFZdkYsRUFBTztBQUNwRztBQUNBLFNBQVMrZixHQUFzQnBxQixHQUFHO0FBQzVCLE1BQUFxcUI7QUFDQSxNQUFBMzdCLEVBQVdzUixDQUFDLEdBQUc7QUFDWCxVQUFBc3FCLElBQWFDLE1BQXNCdnFCLEVBQUU7QUFDM0MsSUFBSXNxQixNQUNGdHFCLEVBQUUsS0FBSyxJQUNHMlMsR0FBQSxJQUVaM1MsSUFBSUEsRUFBRSxHQUNGc3FCLE1BQ0Z0cUIsRUFBRSxLQUFLLElBQ0NxcUIsSUFBQUcsSUFDR0MsR0FBQTtBQUFBLEVBQ2I7QUFFRSxTQUFBbjhCLEVBQVEwUixDQUFDLE1BS1BBLElBSmdCOG1CLEdBQWlCOW1CLENBQUMsSUFNeENBLElBQUlrYyxHQUFlbGMsQ0FBQyxHQUNoQnFxQixLQUFTLENBQUNycUIsRUFBRSxvQkFDZEEsRUFBRSxrQkFBa0JxcUIsRUFBTSxPQUFPLENBQUMxNkIsTUFBTUEsTUFBTXFRLENBQUMsSUFFMUNBO0FBQ1Q7QUFDQSxTQUFTNmMsR0FBd0J2dEIsR0FBSSs0QixHQUFVO0FBQ3pDLEVBQUFBLEtBQVlBLEVBQVMsZ0JBQ25CLzVCLEVBQVFnQixDQUFFLElBQ0grNEIsRUFBQSxRQUFRLEtBQUssR0FBRy80QixDQUFFLElBRWxCKzRCLEVBQUEsUUFBUSxLQUFLLzRCLENBQUUsSUFHMUIyVCxHQUFpQjNULENBQUU7QUFFdkI7QUFDQSxTQUFTaTVCLEdBQWdCRixHQUFVcUMsR0FBUTtBQUN6QyxFQUFBckMsRUFBUyxlQUFlcUM7QUFDbEIsUUFBQSxFQUFFLE9BQUF6bUIsR0FBTyxpQkFBQTBCLEVBQUEsSUFBb0IwaUI7QUFDbkMsTUFBSW42QixJQUFLdzhCLEVBQU87QUFDVCxTQUFBLENBQUN4OEIsS0FBTXc4QixFQUFPO0FBQ25CLElBQUFBLElBQVNBLEVBQU8sVUFBVSxTQUMxQng4QixJQUFLdzhCLEVBQU87QUFFZCxFQUFBem1CLEVBQU0sS0FBSy9WLEdBQ1B5WCxLQUFtQkEsRUFBZ0IsWUFBWTFCLE1BQ2pEMEIsRUFBZ0IsTUFBTSxLQUFLelgsR0FDM0JpekIsR0FBZ0J4YixHQUFpQnpYLENBQUU7QUFFdkM7QUFDQSxTQUFTKzZCLEdBQW1CaGxCLEdBQU87QUFDakMsUUFBTXlLLElBQWN6SyxFQUFNLFNBQVNBLEVBQU0sTUFBTTtBQUN4QyxTQUFBeUssS0FBZSxRQUFRQSxNQUFnQjtBQUNoRDtBQUVNLE1BQUE1QixLQUFXLE9BQU8sSUFBSSxPQUFPLEdBQzdCZ1IsS0FBTyxPQUFPLElBQUksT0FBTyxHQUN6QnpULEtBQVUsT0FBTyxJQUFJLE9BQU8sR0FDNUI0VCxLQUFTLE9BQU8sSUFBSSxPQUFPLEdBQzNCMkksS0FBYSxDQUFDO0FBQ3BCLElBQUk0RCxLQUFlO0FBQ25CLFNBQVM3WCxHQUFVZ1ksSUFBa0IsSUFBTztBQUMxQyxFQUFBL0QsR0FBVyxLQUFLNEQsS0FBZUcsSUFBa0IsT0FBTyxDQUFBLENBQUU7QUFDNUQ7QUFDQSxTQUFTRixLQUFhO0FBQ3BCLEVBQUE3RCxHQUFXLElBQUksR0FDZjRELEtBQWU1RCxHQUFXQSxHQUFXLFNBQVMsQ0FBQyxLQUFLO0FBQ3REO0FBQ0EsSUFBSTJELEtBQXFCO0FBQ3pCLFNBQVN6bUIsR0FBaUI5VSxHQUFPNDdCLElBQVUsSUFBTztBQUMxQixFQUFBTCxNQUFBdjdCLEdBQ2xCQSxJQUFRLEtBQUt3N0IsTUFBZ0JJLE1BQy9CSixHQUFhLFVBQVU7QUFFM0I7QUFDQSxTQUFTSyxHQUFXNW1CLEdBQU87QUFDekIsU0FBQUEsRUFBTSxrQkFBa0JzbUIsS0FBcUIsSUFBSUMsTUFBZ0I5OEIsS0FBWSxNQUNsRSs4QixHQUFBLEdBQ1BGLEtBQXFCLEtBQUtDLE1BQzVCQSxHQUFhLEtBQUt2bUIsQ0FBSyxHQUVsQkE7QUFDVDtBQUNBLFNBQVM2bUIsR0FBbUI1MEIsR0FBTTZPLEdBQU8yQixHQUFVMlQsR0FBV2lOLEdBQWM3Z0IsR0FBVztBQUM5RSxTQUFBb2tCO0FBQUEsSUFDTEU7QUFBQSxNQUNFNzBCO0FBQUEsTUFDQTZPO0FBQUEsTUFDQTJCO0FBQUEsTUFDQTJUO0FBQUEsTUFDQWlOO0FBQUEsTUFDQTdnQjtBQUFBLE1BQ0E7QUFBQSxJQUFBO0FBQUEsRUFFSjtBQUNGO0FBQ0EsU0FBU21NLEdBQVkxYyxHQUFNNk8sR0FBTzJCLEdBQVUyVCxHQUFXaU4sR0FBYztBQUM1RCxTQUFBdUQ7QUFBQSxJQUNMamI7QUFBQSxNQUNFMVo7QUFBQSxNQUNBNk87QUFBQSxNQUNBMkI7QUFBQSxNQUNBMlQ7QUFBQSxNQUNBaU47QUFBQSxNQUNBO0FBQUEsSUFBQTtBQUFBLEVBRUo7QUFDRjtBQUNBLFNBQVNuVSxHQUFRbmtCLEdBQU87QUFDZixTQUFBQSxJQUFRQSxFQUFNLGdCQUFnQixLQUFPO0FBQzlDO0FBQ0EsU0FBU3diLEdBQWdCakYsR0FBSUMsR0FBSTtBQVMvQixTQUFPRCxFQUFHLFNBQVNDLEVBQUcsUUFBUUQsRUFBRyxRQUFRQyxFQUFHO0FBQzlDO0FBVUEsTUFBTXdsQixLQUFlLENBQUMsRUFBRSxLQUFBejlCLFFBQVVBLEtBQU8sT0FBT0EsSUFBTSxNQUNoRDA5QixLQUFlLENBQUM7QUFBQSxFQUNwQixLQUFBcnVCO0FBQUFBLEVBQ0EsU0FBQXN1QjtBQUFBLEVBQ0EsU0FBQUM7QUFDRixPQUNNLE9BQU92dUIsS0FBUSxhQUNqQkEsSUFBTSxLQUFLQSxJQUVOQSxLQUFPLE9BQU9qTyxHQUFTaU8sQ0FBRyxLQUFLL0ssR0FBTStLLENBQUcsS0FBS2xPLEVBQVdrTyxDQUFHLElBQUksRUFBRSxHQUFHMkcsSUFBMEIsR0FBRzNHLEdBQUssR0FBR3N1QixHQUFTLEdBQUcsQ0FBQyxDQUFDQyxNQUFZdnVCLElBQU07QUFFbEosU0FBU211QixHQUFnQjcwQixHQUFNNk8sSUFBUSxNQUFNMkIsSUFBVyxNQUFNMlQsSUFBWSxHQUFHaU4sSUFBZSxNQUFNN2dCLElBQVl2USxNQUFTNFcsS0FBVyxJQUFJLEdBQUdzZSxJQUFjLElBQU9DLElBQWdDLElBQU87QUFDbk0sUUFBTXBuQixJQUFRO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixNQUFBL047QUFBQSxJQUNBLE9BQUE2TztBQUFBLElBQ0EsS0FBS0EsS0FBU2ltQixHQUFham1CLENBQUs7QUFBQSxJQUNoQyxLQUFLQSxLQUFTa21CLEdBQWFsbUIsQ0FBSztBQUFBLElBQ2hDLFNBQVN2QjtBQUFBLElBQ1QsY0FBYztBQUFBLElBQ2QsVUFBQWtEO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsSUFDYixXQUFBRDtBQUFBLElBQ0EsV0FBQTRUO0FBQUEsSUFDQSxjQUFBaU47QUFBQSxJQUNBLGlCQUFpQjtBQUFBLElBQ2pCLFlBQVk7QUFBQSxJQUNaLEtBQUsvakI7QUFBQSxFQUNQO0FBQ0EsU0FBSThuQixLQUNGQyxHQUFrQnJuQixHQUFPeUMsQ0FBUSxHQUM3QkQsSUFBWSxPQUNkdlEsRUFBSyxVQUFVK04sQ0FBSyxLQUVieUMsTUFDVHpDLEVBQU0sYUFBYXRWLEdBQVMrWCxDQUFRLElBQUksSUFBSSxLQUsxQzZqQixLQUFxQjtBQUFBLEVBQ3pCLENBQUNhO0FBQUEsRUFDRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUlDdm1CLEVBQU0sWUFBWSxLQUFLd0MsSUFBWTtBQUFBO0FBQUEsRUFFcEN4QyxFQUFNLGNBQWMsTUFDbEJ1bUIsR0FBYSxLQUFLdm1CLENBQUssR0FFbEJBO0FBQ1Q7QUFDTSxNQUFBMkwsS0FBeUYyYjtBQUMvRixTQUFTQSxHQUFhcjFCLEdBQU02TyxJQUFRLE1BQU0yQixJQUFXLE1BQU0yVCxJQUFZLEdBQUdpTixJQUFlLE1BQU04RCxJQUFjLElBQU87QUFPOUcsT0FOQSxDQUFDbDFCLEtBQVFBLE1BQVNzYixRQUlidGIsSUFBQW1VLEtBRUw4SSxHQUFRamQsQ0FBSSxHQUFHO0FBQ2pCLFVBQU1zMUIsSUFBUzllO0FBQUEsTUFDYnhXO0FBQUEsTUFDQTZPO0FBQUEsTUFDQTtBQUFBO0FBQUEsSUFFRjtBQUNBLFdBQUkyQixLQUNGNGtCLEdBQWtCRSxHQUFROWtCLENBQVEsR0FFaEM2akIsS0FBcUIsS0FBSyxDQUFDYSxLQUFlWixPQUN4Q2dCLEVBQU8sWUFBWSxJQUNyQmhCLEdBQWFBLEdBQWEsUUFBUXQwQixDQUFJLENBQUMsSUFBSXMxQixJQUUzQ2hCLEdBQWEsS0FBS2dCLENBQU0sSUFHNUJBLEVBQU8sWUFBWSxJQUNaQTtBQUFBLEVBQUE7QUFLVCxNQUhJQyxHQUFpQnYxQixDQUFJLE1BQ3ZCQSxJQUFPQSxFQUFLLFlBRVY2TyxHQUFPO0FBQ1QsSUFBQUEsSUFBUTJtQixHQUFtQjNtQixDQUFLO0FBQ2hDLFFBQUksRUFBRSxPQUFPNG1CLEdBQU8sT0FBQUMsRUFBVSxJQUFBN21CO0FBQzlCLElBQUk0bUIsS0FBUyxDQUFDaDlCLEdBQVNnOUIsQ0FBSyxNQUNwQjVtQixFQUFBLFFBQVF2VCxHQUFlbTZCLENBQUssSUFFaEM5OEIsR0FBUys4QixDQUFLLE1BQ1o5eUIsR0FBUTh5QixDQUFLLEtBQUssQ0FBQ3Q5QixFQUFRczlCLENBQUssTUFDMUJBLElBQUE3OUIsR0FBTyxDQUFDLEdBQUc2OUIsQ0FBSyxJQUVwQjdtQixFQUFBLFFBQVFsVSxHQUFlKzZCLENBQUs7QUFBQSxFQUNwQztBQUVJLFFBQUFubEIsSUFBWTlYLEdBQVN1SCxDQUFJLElBQUksSUFBSWlwQixHQUFXanBCLENBQUksSUFBSSxNQUFNMk8sR0FBVzNPLENBQUksSUFBSSxLQUFLckgsR0FBU3FILENBQUksSUFBSSxJQUFJeEgsRUFBV3dILENBQUksSUFBSSxJQUFJO0FBVTdILFNBQUE2MEI7QUFBQSxJQUNMNzBCO0FBQUEsSUFDQTZPO0FBQUEsSUFDQTJCO0FBQUEsSUFDQTJUO0FBQUEsSUFDQWlOO0FBQUEsSUFDQTdnQjtBQUFBLElBQ0Eya0I7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBQ0EsU0FBU00sR0FBbUIzbUIsR0FBTztBQUM3QixTQUFDQSxJQUNFak0sR0FBUWlNLENBQUssS0FBSytVLEdBQWlCL1UsQ0FBSyxJQUFJaFgsR0FBTyxDQUFBLEdBQUlnWCxDQUFLLElBQUlBLElBRHBEO0FBRXJCO0FBQ0EsU0FBUzJILEdBQVd6SSxHQUFPNG5CLEdBQVlDLElBQVcsSUFBT0MsSUFBa0IsSUFBTztBQUNoRixRQUFNLEVBQUUsT0FBQWhuQixHQUFPLEtBQUFuSSxHQUFLLFdBQUF5ZCxHQUFXLFVBQUEzVCxHQUFVLFlBQUFpWSxNQUFlMWEsR0FDbEQrbkIsSUFBY0gsSUFBYUksR0FBV2xuQixLQUFTLENBQUMsR0FBRzhtQixDQUFVLElBQUk5bUIsR0FDakV5bUIsSUFBUztBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLElBQ1YsTUFBTXZuQixFQUFNO0FBQUEsSUFDWixPQUFPK25CO0FBQUEsSUFDUCxLQUFLQSxLQUFlaEIsR0FBYWdCLENBQVc7QUFBQSxJQUM1QyxLQUFLSCxLQUFjQSxFQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJNUJDLEtBQVlsdkIsSUFBTXRPLEVBQVFzTyxDQUFHLElBQUlBLEVBQUksT0FBT3F1QixHQUFhWSxDQUFVLENBQUMsSUFBSSxDQUFDanZCLEdBQUtxdUIsR0FBYVksQ0FBVSxDQUFDLElBQUlaLEdBQWFZLENBQVU7QUFBQSxRQUMvSGp2QjtBQUFBQSxJQUNKLFNBQVNxSCxFQUFNO0FBQUEsSUFDZixjQUFjQSxFQUFNO0FBQUEsSUFDcEIsVUFBOEh5QztBQUFBLElBQzlILFFBQVF6QyxFQUFNO0FBQUEsSUFDZCxhQUFhQSxFQUFNO0FBQUEsSUFDbkIsY0FBY0EsRUFBTTtBQUFBLElBQ3BCLGFBQWFBLEVBQU07QUFBQSxJQUNuQixXQUFXQSxFQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtqQixXQUFXNG5CLEtBQWM1bkIsRUFBTSxTQUFTNkksS0FBV3VOLE1BQWMsS0FBSyxLQUFLQSxJQUFZLEtBQUtBO0FBQUEsSUFDNUYsY0FBY3BXLEVBQU07QUFBQSxJQUNwQixpQkFBaUJBLEVBQU07QUFBQSxJQUN2QixZQUFZQSxFQUFNO0FBQUEsSUFDbEIsTUFBTUEsRUFBTTtBQUFBLElBQ1osWUFBQTBhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtBLFdBQVcxYSxFQUFNO0FBQUEsSUFDakIsVUFBVUEsRUFBTTtBQUFBLElBQ2hCLFdBQVdBLEVBQU0sYUFBYXlJLEdBQVd6SSxFQUFNLFNBQVM7QUFBQSxJQUN4RCxZQUFZQSxFQUFNLGNBQWN5SSxHQUFXekksRUFBTSxVQUFVO0FBQUEsSUFDM0QsSUFBSUEsRUFBTTtBQUFBLElBQ1YsUUFBUUEsRUFBTTtBQUFBLElBQ2QsS0FBS0EsRUFBTTtBQUFBLElBQ1gsSUFBSUEsRUFBTTtBQUFBLEVBQ1o7QUFDQSxTQUFJMGEsS0FBY29OLEtBQ2hCemhCO0FBQUEsSUFDRWtoQjtBQUFBLElBQ0E3TSxFQUFXLE1BQU02TSxDQUFNO0FBQUEsRUFDekIsR0FFS0E7QUFDVDtBQVFBLFNBQVNVLEdBQWdCQyxJQUFPLEtBQUtDLElBQU8sR0FBRztBQUM3QyxTQUFPeGMsR0FBWWtPLElBQU0sTUFBTXFPLEdBQU1DLENBQUk7QUFDM0M7QUFNQSxTQUFTQyxHQUFtQkYsSUFBTyxJQUFJRyxJQUFVLElBQU87QUFDL0MsU0FBQUEsS0FBVzNaLE1BQWFDLEdBQVl2SSxJQUFTLE1BQU04aEIsQ0FBSSxLQUFLdmMsR0FBWXZGLElBQVMsTUFBTThoQixDQUFJO0FBQ3BHO0FBQ0EsU0FBU2pRLEdBQWVqVSxHQUFPO0FBQzdCLFNBQUlBLEtBQVMsUUFBUSxPQUFPQSxLQUFVLFlBQzdCMkgsR0FBWXZGLEVBQU8sSUFDakIvYixFQUFRMlosQ0FBSyxJQUNmMkg7QUFBQSxJQUNMOUM7QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUVBN0UsRUFBTSxNQUFNO0FBQUEsRUFDZCxJQUNTa0wsR0FBUWxMLENBQUssSUFDZm9YLEdBQWVwWCxDQUFLLElBRXBCMkgsR0FBWWtPLElBQU0sTUFBTSxPQUFPN1YsQ0FBSyxDQUFDO0FBRWhEO0FBQ0EsU0FBU29YLEdBQWVwWCxHQUFPO0FBQ3RCLFNBQUFBLEVBQU0sT0FBTyxRQUFRQSxFQUFNLGNBQWMsTUFBTUEsRUFBTSxPQUFPQSxJQUFReUUsR0FBV3pFLENBQUs7QUFDN0Y7QUFDQSxTQUFTcWpCLEdBQWtCcm5CLEdBQU95QyxHQUFVO0FBQzFDLE1BQUl4USxJQUFPO0FBQ0wsUUFBQSxFQUFFLFdBQUF1USxNQUFjeEM7QUFDdEIsTUFBSXlDLEtBQVk7QUFDSCxJQUFBQSxJQUFBO0FBQUEsV0FDRnBZLEVBQVFvWSxDQUFRO0FBQ2xCLElBQUF4USxJQUFBO0FBQUEsV0FDRSxPQUFPd1EsS0FBYTtBQUN6QixRQUFBRCxJQUFhLElBQVM7QUFDeEIsWUFBTW9NLElBQU9uTSxFQUFTO0FBQ3RCLE1BQUltTSxNQUNHQSxFQUFBLE9BQU9BLEVBQUssS0FBSyxLQUNKeVksR0FBQXJuQixHQUFPNE8sR0FBTSxHQUMxQkEsRUFBQSxPQUFPQSxFQUFLLEtBQUs7QUFFeEI7QUFBQSxJQUFBLE9BQ0s7QUFDRSxNQUFBM2MsSUFBQTtBQUNQLFlBQU1xMkIsSUFBVzdsQixFQUFTO0FBQzFCLE1BQUksQ0FBQzZsQixLQUFZLENBQUN6UyxHQUFpQnBULENBQVEsSUFDekNBLEVBQVMsT0FBT25ELEtBQ1BncEIsTUFBYSxLQUFLaHBCLE9BQ3ZCQSxHQUF5QixNQUFNLE1BQU0sSUFDdkNtRCxFQUFTLElBQUksS0FFYkEsRUFBUyxJQUFJLEdBQ2J6QyxFQUFNLGFBQWE7QUFBQSxJQUV2QjtBQUFBLE1BRUosQ0FBV3ZWLEVBQVdnWSxDQUFRLEtBQzVCQSxJQUFXLEVBQUUsU0FBU0EsR0FBVSxNQUFNbkQsR0FBeUIsR0FDeERyTixJQUFBLE9BRVB3USxJQUFXLE9BQU9BLENBQVEsR0FDdEJELElBQVksTUFDUHZRLElBQUEsSUFDSXdRLElBQUEsQ0FBQ3dsQixHQUFnQnhsQixDQUFRLENBQUMsS0FFOUJ4USxJQUFBO0FBR1gsRUFBQStOLEVBQU0sV0FBV3lDLEdBQ2pCekMsRUFBTSxhQUFhL047QUFDckI7QUFDQSxTQUFTKzFCLE1BQWN6MEIsR0FBTTtBQUMzQixRQUFNbEcsSUFBTSxDQUFDO0FBQ2IsV0FBU25ELElBQUksR0FBR0EsSUFBSXFKLEVBQUssUUFBUXJKLEtBQUs7QUFDOUIsVUFBQXErQixJQUFVaDFCLEVBQUtySixDQUFDO0FBQ3RCLGVBQVdaLEtBQU9pL0I7QUFDaEIsVUFBSWovQixNQUFRO0FBQ04sUUFBQStELEVBQUksVUFBVWs3QixFQUFRLFVBQ3hCbDdCLEVBQUksUUFBUUUsR0FBZSxDQUFDRixFQUFJLE9BQU9rN0IsRUFBUSxLQUFLLENBQUM7QUFBQSxlQUU5Q2ovQixNQUFRO0FBQ2pCLFFBQUErRCxFQUFJLFFBQVFULEdBQWUsQ0FBQ1MsRUFBSSxPQUFPazdCLEVBQVEsS0FBSyxDQUFDO0FBQUEsZUFDNUMzK0IsR0FBS04sQ0FBRyxHQUFHO0FBQ2QsY0FBQXlnQixJQUFXMWMsRUFBSS9ELENBQUcsR0FDbEJrL0IsSUFBV0QsRUFBUWovQixDQUFHO0FBQ3hCLFFBQUFrL0IsS0FBWXplLE1BQWF5ZSxLQUFZLEVBQUVuK0IsRUFBUTBmLENBQVEsS0FBS0EsRUFBUyxTQUFTeWUsQ0FBUSxPQUNwRm43QixFQUFBL0QsQ0FBRyxJQUFJeWdCLElBQVcsQ0FBQSxFQUFHLE9BQU9BLEdBQVV5ZSxDQUFRLElBQUlBO0FBQUEsTUFDeEQsTUFDRixDQUFXbC9CLE1BQVEsT0FDYitELEVBQUEvRCxDQUFHLElBQUlpL0IsRUFBUWovQixDQUFHO0FBQUEsRUFFMUI7QUFFSyxTQUFBK0Q7QUFDVDtBQUNBLFNBQVN5dEIsR0FBZ0JwYSxHQUFNOUQsR0FBVW9ELEdBQU9PLElBQVksTUFBTTtBQUNyQyxFQUFBekQsR0FBQTRELEdBQU05RCxHQUFVLEdBQUc7QUFBQSxJQUM1Q29EO0FBQUEsSUFDQU87QUFBQSxFQUFBLENBQ0Q7QUFDSDtBQUVBLE1BQU1rb0IsS0FBa0JsVSxHQUFpQjtBQUN6QyxJQUFJbVUsS0FBTTtBQUNWLFNBQVN0TSxHQUF3QnBjLEdBQU84TCxHQUFRc1ksR0FBVTtBQUN4RCxRQUFNbnlCLElBQU8rTixFQUFNLE1BQ2I0UCxLQUFjOUQsSUFBU0EsRUFBTyxhQUFhOUwsRUFBTSxlQUFleW9CLElBQ2hFN3JCLElBQVc7QUFBQSxJQUNmLEtBQUs4ckI7QUFBQSxJQUNMLE9BQUExb0I7QUFBQSxJQUNBLE1BQUEvTjtBQUFBLElBQ0EsUUFBQTZaO0FBQUEsSUFDQSxZQUFBOEQ7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBO0FBQUEsSUFFVCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUE7QUFBQSxJQUVSLEtBQUs7QUFBQSxJQUNMLE9BQU8sSUFBSXRoQjtBQUFBLE1BQ1Q7QUFBQTtBQUFBLElBRUY7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFVBQVV3ZCxJQUFTQSxFQUFPLFdBQVcsT0FBTyxPQUFPOEQsRUFBVyxRQUFRO0FBQUEsSUFDdEUsS0FBSzlELElBQVNBLEVBQU8sTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDcEMsYUFBYTtBQUFBLElBQ2IsYUFBYSxDQUFDO0FBQUE7QUFBQSxJQUVkLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQTtBQUFBLElBRVosY0FBY3NMLEdBQXNCbmxCLEdBQU0yZCxDQUFVO0FBQUEsSUFDcEQsY0FBY3FTLEdBQXNCaHdCLEdBQU0yZCxDQUFVO0FBQUE7QUFBQSxJQUVwRCxNQUFNO0FBQUE7QUFBQSxJQUVOLFNBQVM7QUFBQTtBQUFBLElBRVQsZUFBZXBtQjtBQUFBO0FBQUEsSUFFZixjQUFjeUksRUFBSztBQUFBO0FBQUEsSUFFbkIsS0FBS3pJO0FBQUEsSUFDTCxNQUFNQTtBQUFBLElBQ04sT0FBT0E7QUFBQSxJQUNQLE9BQU9BO0FBQUEsSUFDUCxPQUFPQTtBQUFBLElBQ1AsTUFBTUE7QUFBQSxJQUNOLFlBQVlBO0FBQUEsSUFDWixjQUFjO0FBQUE7QUFBQSxJQUVkLFVBQUE0NkI7QUFBQSxJQUNBLFlBQVlBLElBQVdBLEVBQVMsWUFBWTtBQUFBLElBQzVDLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQTtBQUFBO0FBQUEsSUFHZixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxJQUFJO0FBQUEsSUFDSixLQUFLO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsRUFDTjtBQUlXLFNBQUF4bkIsRUFBQSxNQUFNLEVBQUUsR0FBR0EsRUFBUyxHQUV0QkEsRUFBQSxPQUFPa1AsSUFBU0EsRUFBTyxPQUFPbFAsR0FDdkNBLEVBQVMsT0FBT2dsQixHQUFLLEtBQUssTUFBTWhsQixDQUFRLEdBQ3BDb0QsRUFBTSxNQUNSQSxFQUFNLEdBQUdwRCxDQUFRLEdBRVpBO0FBQ1Q7QUFDQSxJQUFJMk8sS0FBa0I7QUFDaEIsTUFBQTlGLEtBQXFCLE1BQU04RixNQUFtQmpNO0FBQ3BELElBQUlxcEIsSUFDQUM7QUFDSjtBQUNFLFFBQU1DLElBQUlsOEIsR0FBYyxHQUNsQm04QixJQUF1QixDQUFDeC9CLEdBQUs0USxNQUFXO0FBQ3hDLFFBQUE2dUI7QUFDQSxZQUFFQSxJQUFVRixFQUFFdi9CLENBQUcsT0FBY3kvQixJQUFBRixFQUFFdi9CLENBQUcsSUFBSSxDQUFDLElBQzdDeS9CLEVBQVEsS0FBSzd1QixDQUFNLEdBQ1osQ0FBQy9MLE1BQU07QUFDUixNQUFBNDZCLEVBQVEsU0FBUyxJQUFHQSxFQUFRLFFBQVEsQ0FBQzNXLE1BQVFBLEVBQUlqa0IsQ0FBQyxDQUFDLElBQ2xENDZCLEVBQVEsQ0FBQyxFQUFFNTZCLENBQUM7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDNkIsRUFBQXc2QixLQUFBRztBQUFBLElBQzNCO0FBQUEsSUFDQSxDQUFDMzZCLE1BQU1vZCxLQUFrQnBkO0FBQUEsRUFDM0IsR0FDcUJ5NkIsS0FBQUU7QUFBQSxJQUNuQjtBQUFBLElBQ0EsQ0FBQzM2QixNQUFNdWQsS0FBd0J2ZDtBQUFBLEVBQ2pDO0FBQ0Y7QUFDQSxNQUFNeWUsS0FBcUIsQ0FBQ2hRLE1BQWE7QUFDdkMsUUFBTXJNLElBQU9nYjtBQUNiLFNBQUFvZCxHQUEyQi9yQixDQUFRLEdBQ25DQSxFQUFTLE1BQU0sR0FBRyxHQUNYLE1BQU07QUFDWCxJQUFBQSxFQUFTLE1BQU0sSUFBSSxHQUNuQityQixHQUEyQnA0QixDQUFJO0FBQUEsRUFDakM7QUFDRixHQUNNeTRCLEtBQXVCLE1BQU07QUFDZCxFQUFBemQsTUFBQUEsR0FBZ0IsTUFBTSxJQUFJLEdBQzdDb2QsR0FBMkIsSUFBSTtBQUNqQztBQVNBLFNBQVN2WixHQUFvQnhTLEdBQVU7QUFDOUIsU0FBQUEsRUFBUyxNQUFNLFlBQVk7QUFDcEM7QUFDQSxJQUFJOE8sS0FBd0I7QUFDNUIsU0FBUzJRLEdBQWV6ZixHQUFVekMsSUFBUSxJQUFPMkgsSUFBWSxJQUFPO0FBQ2xFLEVBQUEzSCxLQUFTeXVCLEdBQW1CenVCLENBQUs7QUFDakMsUUFBTSxFQUFFLE9BQUEyRyxHQUFPLFVBQUEyQixFQUFTLElBQUk3RixFQUFTLE9BQy9CbVosSUFBYTNHLEdBQW9CeFMsQ0FBUTtBQUNyQyxFQUFBa1osR0FBQWxaLEdBQVVrRSxHQUFPaVYsR0FBWTViLENBQUssR0FDbENxZSxHQUFBNWIsR0FBVTZGLEdBQVVYLENBQVM7QUFDdkMsUUFBTW1uQixJQUFjbFQsSUFBYW1ULEdBQXVCdHNCLEdBQVV6QyxDQUFLLElBQUk7QUFDM0UsU0FBQUEsS0FBU3l1QixHQUFtQixFQUFLLEdBQzFCSztBQUNUO0FBQ0EsU0FBU0MsR0FBdUJ0c0IsR0FBVXpDLEdBQU87QUFFL0MsUUFBTTBULElBQVlqUixFQUFTO0FBdUJsQixFQUFBQSxFQUFBLGNBQXFDLHVCQUFBLE9BQU8sSUFBSSxHQUN6REEsRUFBUyxRQUFRLElBQUksTUFBTUEsRUFBUyxLQUFLNlMsRUFBMkI7QUFJOUQsUUFBQSxFQUFFLE9BQUEwWixNQUFVdGI7QUFDbEIsTUFBSXNiLEdBQU87QUFDSyxJQUFBaDRCLEdBQUE7QUFDUixVQUFBaTRCLElBQWV4c0IsRUFBUyxlQUFldXNCLEVBQU0sU0FBUyxJQUFJRSxHQUFtQnpzQixDQUFRLElBQUksTUFDekYrUCxJQUFRQyxHQUFtQmhRLENBQVEsR0FDbkNxc0IsSUFBY3RzQjtBQUFBLE1BQ2xCd3NCO0FBQUEsTUFDQXZzQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsUUFDZ0ZBLEVBQVM7QUFBQSxRQUN2RndzQjtBQUFBLE1BQUE7QUFBQSxJQUVKLEdBQ01FLElBQWV6K0IsR0FBVW8rQixDQUFXO0FBTTFDLFFBTGM3M0IsR0FBQSxHQUNSdWIsRUFBQSxJQUNEMmMsS0FBZ0Ixc0IsRUFBUyxPQUFPLENBQUN5TSxHQUFlek0sQ0FBUSxLQUMzRG9NLEdBQWtCcE0sQ0FBUSxHQUV4QjBzQixHQUFjO0FBRWhCLFVBRFlMLEVBQUEsS0FBS0QsSUFBc0JBLEVBQW9CLEdBQ3ZEN3VCO0FBQ0ssZUFBQTh1QixFQUFZLEtBQUssQ0FBQ00sTUFBbUI7QUFDeEIsVUFBQXhELEdBQUFucEIsR0FBVTJzQixDQUFxQjtBQUFBLFFBQUEsQ0FDbEQsRUFBRSxNQUFNLENBQUN0NUIsTUFBTTtBQUNGLFVBQUE0TSxHQUFBNU0sR0FBRzJNLEdBQVUsQ0FBQztBQUFBLFFBQUEsQ0FDM0I7QUFFRCxNQUFBQSxFQUFTLFdBQVdxc0I7QUFBQSxJQU90QjtBQUVrQixNQUFBbEQsR0FBQW5wQixHQUFVcXNCLENBQWtCO0FBQUEsRUFDaEQ7QUFFQSxJQUFBTyxHQUFxQjVzQixDQUFlO0FBRXhDO0FBQ0EsU0FBU21wQixHQUFrQm5wQixHQUFVcXNCLEdBQWE5dUIsR0FBTztBQUNuRCxFQUFBMVAsRUFBV3crQixDQUFXLElBQ3BCcnNCLEVBQVMsS0FBSyxvQkFDaEJBLEVBQVMsWUFBWXFzQixJQUVyQnJzQixFQUFTLFNBQVNxc0IsSUFFWHIrQixHQUFTcStCLENBQVcsTUFTcEJyc0IsRUFBQSxhQUFheEQsR0FBVTZ2QixDQUFXLElBUzdDTyxHQUFxQjVzQixDQUFlO0FBQ3RDO0FBWUEsU0FBUzRzQixHQUFxQjVzQixHQUFVekMsR0FBT3N2QixHQUFhO0FBQzFELFFBQU01YixJQUFZalIsRUFBUztBQUN2QixFQUFDQSxFQUFTLFdBeUJIQSxFQUFBLFNBQVNpUixFQUFVLFVBQVVua0I7QUFLUDtBQUN6QixVQUFBaWpCLElBQVFDLEdBQW1CaFEsQ0FBUTtBQUMzQixJQUFBekwsR0FBQTtBQUNWLFFBQUE7QUFDRixNQUFBa2YsR0FBYXpULENBQVE7QUFBQSxJQUFBLFVBQ3JCO0FBQ2MsTUFBQXhMLEdBQUEsR0FDUnViLEVBQUE7QUFBQSxJQUFBO0FBQUEsRUFDUjtBQVdKO0FBQ0EsTUFBTStjLEtBY0Y7QUFBQSxFQUNGLElBQUkxM0IsR0FBUTFJLEdBQUs7QUFDVCxXQUFBeUksR0FBQUMsR0FBUSxPQUFPLEVBQUUsR0FDaEJBLEVBQU8xSSxDQUFHO0FBQUEsRUFBQTtBQUVyQjtBQVNBLFNBQVMrL0IsR0FBbUJ6c0IsR0FBVTtBQUM5QixRQUFBaVYsSUFBUyxDQUFDYyxNQUFZO0FBcUJqQixJQUFBL1YsRUFBQSxVQUFVK1YsS0FBVyxDQUFDO0FBQUEsRUFDakM7QUFpQlMsU0FBQTtBQUFBLElBQ0wsT0FBTyxJQUFJLE1BQU0vVixFQUFTLE9BQU84c0IsRUFBa0I7QUFBQSxJQUNuRCxPQUFPOXNCLEVBQVM7QUFBQSxJQUNoQixNQUFNQSxFQUFTO0FBQUEsSUFDZixRQUFBaVY7QUFBQSxFQUNGO0FBRUo7QUFDQSxTQUFTM1IsR0FBMkJ0RCxHQUFVO0FBQzVDLFNBQUlBLEVBQVMsVUFDSkEsRUFBUyxnQkFBZ0JBLEVBQVMsY0FBYyxJQUFJLE1BQU14RCxHQUFVWCxHQUFRbUUsRUFBUyxPQUFPLENBQUMsR0FBRztBQUFBLElBQ3JHLElBQUk1SyxHQUFRMUksR0FBSztBQUNmLFVBQUlBLEtBQU8wSTtBQUNULGVBQU9BLEVBQU8xSSxDQUFHO0FBQ25CLFVBQVdBLEtBQU8rbEI7QUFDVCxlQUFBQSxHQUFvQi9sQixDQUFHLEVBQUVzVCxDQUFRO0FBQUEsSUFFNUM7QUFBQSxJQUNBLElBQUk1SyxHQUFRMUksR0FBSztBQUNSLGFBQUFBLEtBQU8wSSxLQUFVMUksS0FBTytsQjtBQUFBLElBQUE7QUFBQSxFQUNqQyxDQUNELEtBRU16UyxFQUFTO0FBRXBCO0FBR0EsU0FBU21SLEdBQWlCRixHQUFXOGIsSUFBa0IsSUFBTTtBQUNwRCxTQUFBbC9CLEVBQVdvakIsQ0FBUyxJQUFJQSxFQUFVLGVBQWVBLEVBQVUsT0FBT0EsRUFBVSxRQUFROGIsS0FBbUI5YixFQUFVO0FBQzFIO0FBdUJBLFNBQVMyWixHQUFpQno4QixHQUFPO0FBQ3hCLFNBQUFOLEVBQVdNLENBQUssS0FBSyxlQUFlQTtBQUM3QztBQUVNLE1BQUEyRixLQUFXLENBQUMwSixHQUFpQkMsTUFDdkJ1dkIsR0FBV3h2QixHQUFpQkMsR0FBY3FSLEVBQXFCO0FBVTNFLFNBQVNxSCxHQUFFOWdCLEdBQU00M0IsR0FBaUJwbkIsR0FBVTtBQUMxQyxRQUFNalUsSUFBSSxVQUFVO0FBQ3BCLFNBQUlBLE1BQU0sSUFDSjVELEdBQVNpL0IsQ0FBZSxLQUFLLENBQUN4L0IsRUFBUXcvQixDQUFlLElBQ25EM2EsR0FBUTJhLENBQWUsSUFDbEJsZSxHQUFZMVosR0FBTSxNQUFNLENBQUM0M0IsQ0FBZSxDQUFDLElBRTNDbGUsR0FBWTFaLEdBQU00M0IsQ0FBZSxJQUVqQ2xlLEdBQVkxWixHQUFNLE1BQU00M0IsQ0FBZSxLQUc1Q3I3QixJQUFJLElBQ05pVSxJQUFXLE1BQU0sVUFBVSxNQUFNLEtBQUssV0FBVyxDQUFDLElBQ3pDalUsTUFBTSxLQUFLMGdCLEdBQVF6TSxDQUFRLE1BQ3BDQSxJQUFXLENBQUNBLENBQVEsSUFFZmtKLEdBQVkxWixHQUFNNDNCLEdBQWlCcG5CLENBQVE7QUFFdEQ7QUE4TUEsTUFBTXdTLEtBQVU7QUM1c1FoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsSUFBSTZVO0FBQ0osTUFBTUMsS0FBSyxPQUFPLFVBQVcsZUFBZSxPQUFPO0FBQ25ELElBQUlBO0FBQ0UsTUFBQTtBQUN1QixJQUFBRCxLQUFBLGdCQUFBQyxHQUFHLGFBQWEsT0FBTztBQUFBLE1BQzlDLFlBQVksQ0FBQ3hnQyxNQUFRQTtBQUFBLElBQUEsQ0FDdEI7QUFBQSxXQUNNLEdBQUc7QUFBQSxFQUFBO0FBSWQsTUFBTXlnQyxLQUFzQkYsS0FBUyxDQUFDdmdDLE1BQVF1Z0MsR0FBTyxXQUFXdmdDLENBQUcsSUFBSSxDQUFDQSxNQUFRQSxHQUMxRTBnQyxLQUFRLDhCQUNSQyxLQUFXLHNDQUNYQyxLQUFNLE9BQU8sWUFBYSxjQUFjLFdBQVcsTUFDbkRDLEtBQW9CRCxNQUEyQixnQkFBQUEsR0FBQSxjQUFjLFVBQVUsR0FDdkVFLEtBQVU7QUFBQSxFQUNkLFFBQVEsQ0FBQ3JtQixHQUFPOEgsR0FBUXJLLE1BQVc7QUFDMUIsSUFBQXFLLEVBQUEsYUFBYTlILEdBQU92QyxLQUFVLElBQUk7QUFBQSxFQUMzQztBQUFBLEVBQ0EsUUFBUSxDQUFDdUMsTUFBVTtBQUNqQixVQUFNOEgsSUFBUzlILEVBQU07QUFDckIsSUFBSThILEtBQ0ZBLEVBQU8sWUFBWTlILENBQUs7QUFBQSxFQUU1QjtBQUFBLEVBQ0EsZUFBZSxDQUFDc21CLEdBQUsxb0IsR0FBVzJvQixHQUFJenBCLE1BQVU7QUFDdEMsVUFBQTdXLElBQUsyWCxNQUFjLFFBQVF1b0IsR0FBSSxnQkFBZ0JGLElBQU9LLENBQUcsSUFBSTFvQixNQUFjLFdBQVd1b0IsR0FBSSxnQkFBZ0JELElBQVVJLENBQUcsSUFBSUMsSUFBS0osR0FBSSxjQUFjRyxHQUFLLEVBQUUsSUFBQUMsR0FBSSxJQUFJSixHQUFJLGNBQWNHLENBQUc7QUFDNUwsV0FBSUEsTUFBUSxZQUFZeHBCLEtBQVNBLEVBQU0sWUFBWSxRQUM5QzdXLEVBQUEsYUFBYSxZQUFZNlcsRUFBTSxRQUFRLEdBRXJDN1c7QUFBQSxFQUNUO0FBQUEsRUFDQSxZQUFZLENBQUNpK0IsTUFBU2lDLEdBQUksZUFBZWpDLENBQUk7QUFBQSxFQUM3QyxlQUFlLENBQUNBLE1BQVNpQyxHQUFJLGNBQWNqQyxDQUFJO0FBQUEsRUFDL0MsU0FBUyxDQUFDNWpCLEdBQU00akIsTUFBUztBQUN2QixJQUFBNWpCLEVBQUssWUFBWTRqQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxnQkFBZ0IsQ0FBQ2orQixHQUFJaStCLE1BQVM7QUFDNUIsSUFBQWorQixFQUFHLGNBQWNpK0I7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsWUFBWSxDQUFDNWpCLE1BQVNBLEVBQUs7QUFBQSxFQUMzQixhQUFhLENBQUNBLE1BQVNBLEVBQUs7QUFBQSxFQUM1QixlQUFlLENBQUNrbUIsTUFBYUwsR0FBSSxjQUFjSyxDQUFRO0FBQUEsRUFDdkQsV0FBV3ZnQyxHQUFJbVUsR0FBSTtBQUNkLElBQUFuVSxFQUFBLGFBQWFtVSxHQUFJLEVBQUU7QUFBQSxFQUN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxvQkFBb0Jxc0IsR0FBUzNlLEdBQVFySyxHQUFRRyxHQUFXdkQsR0FBT0MsR0FBSztBQUNsRSxVQUFNb3NCLElBQVNqcEIsSUFBU0EsRUFBTyxrQkFBa0JxSyxFQUFPO0FBQ3hELFFBQUl6TixNQUFVQSxNQUFVQyxLQUFPRCxFQUFNO0FBQ25DLGFBQ0V5TixFQUFPLGFBQWF6TixFQUFNLFVBQVUsRUFBSSxHQUFHb0QsQ0FBTSxHQUM3QyxFQUFBcEQsTUFBVUMsS0FBTyxFQUFFRCxJQUFRQSxFQUFNO0FBQXJDO0FBQUEsU0FFRztBQUNMLE1BQUErckIsR0FBa0IsWUFBWUo7QUFBQSxRQUM1QnBvQixNQUFjLFFBQVEsUUFBUTZvQixDQUFPLFdBQVc3b0IsTUFBYyxXQUFXLFNBQVM2b0IsQ0FBTyxZQUFZQTtBQUFBLE1BQ3ZHO0FBQ0EsWUFBTUUsSUFBV1AsR0FBa0I7QUFDL0IsVUFBQXhvQixNQUFjLFNBQVNBLE1BQWMsVUFBVTtBQUNqRCxjQUFNZ3BCLElBQVVELEVBQVM7QUFDekIsZUFBT0MsRUFBUTtBQUNKLFVBQUFELEVBQUEsWUFBWUMsRUFBUSxVQUFVO0FBRXpDLFFBQUFELEVBQVMsWUFBWUMsQ0FBTztBQUFBLE1BQUE7QUFFdkIsTUFBQTllLEVBQUEsYUFBYTZlLEdBQVVscEIsQ0FBTTtBQUFBLElBQUE7QUFFL0IsV0FBQTtBQUFBO0FBQUEsTUFFTGlwQixJQUFTQSxFQUFPLGNBQWM1ZSxFQUFPO0FBQUE7QUFBQSxNQUVyQ3JLLElBQVNBLEVBQU8sa0JBQWtCcUssRUFBTztBQUFBLElBQzNDO0FBQUEsRUFBQTtBQUVKLEdBRU0rZSxLQUFhLGNBQ2JDLEtBQVksYUFDWkMsS0FBUyxPQUFPLE1BQU0sR0FDdEJDLEtBQStCO0FBQUEsRUFDbkMsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFVBQVUsQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLEVBQ2pDLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGNBQWM7QUFBQSxFQUNkLGlCQUFpQjtBQUFBLEVBQ2pCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGNBQWM7QUFDaEIsR0FDTUMsS0FBNEMsZ0JBQUFuaEM7QUFBQSxFQUNoRCxDQUFDO0FBQUEsRUFDRHNiO0FBQUEsRUFDQTRsQjtBQUNGLEdBQ01FLEtBQWEsQ0FBQ0MsT0FDbEJBLEVBQUUsY0FBYyxjQUNoQkEsRUFBRSxRQUFRRixJQUNIRSxJQUVIQyxLQUE2QixnQkFBQUY7QUFBQSxFQUNqQyxDQUFDcHFCLEdBQU8sRUFBRSxPQUFBMEUsUUFBWXVOLEdBQUVsTSxJQUFnQndrQixHQUF1QnZxQixDQUFLLEdBQUcwRSxDQUFLO0FBQzlFLEdBQ01zQyxLQUFXLENBQUNwSCxHQUFNbk4sSUFBTyxPQUFPO0FBQ2hDLEVBQUFsSixFQUFRcVcsQ0FBSSxJQUNkQSxFQUFLLFFBQVEsQ0FBQzRxQixNQUFPQSxFQUFHLEdBQUcvM0IsQ0FBSSxDQUFDLElBQ3ZCbU4sS0FDVEEsRUFBSyxHQUFHbk4sQ0FBSTtBQUVoQixHQUNNZzRCLEtBQXNCLENBQUM3cUIsTUFDcEJBLElBQU9yVyxFQUFRcVcsQ0FBSSxJQUFJQSxFQUFLLEtBQUssQ0FBQzRxQixNQUFPQSxFQUFHLFNBQVMsQ0FBQyxJQUFJNXFCLEVBQUssU0FBUyxJQUFJO0FBRXJGLFNBQVMycUIsR0FBdUJ6bEIsR0FBVTtBQUN4QyxRQUFNNGxCLElBQVksQ0FBQztBQUNuQixhQUFXbGlDLEtBQU9zYztBQUNaLElBQUV0YyxLQUFPMGhDLE9BQ0RRLEVBQUFsaUMsQ0FBRyxJQUFJc2MsRUFBU3RjLENBQUc7QUFHN0IsTUFBQXNjLEVBQVMsUUFBUTtBQUNaLFdBQUE0bEI7QUFFSCxRQUFBO0FBQUEsSUFDSixNQUFBaCtCLElBQU87QUFBQSxJQUNQLE1BQUF5RTtBQUFBLElBQ0EsVUFBQXc1QjtBQUFBLElBQ0EsZ0JBQUFDLElBQWlCLEdBQUdsK0IsQ0FBSTtBQUFBLElBQ3hCLGtCQUFBbStCLElBQW1CLEdBQUduK0IsQ0FBSTtBQUFBLElBQzFCLGNBQUFvK0IsSUFBZSxHQUFHcCtCLENBQUk7QUFBQSxJQUN0QixpQkFBQXErQixJQUFrQkg7QUFBQSxJQUNsQixtQkFBQUksSUFBb0JIO0FBQUEsSUFDcEIsZUFBQUksSUFBZ0JIO0FBQUEsSUFDaEIsZ0JBQUFJLElBQWlCLEdBQUd4K0IsQ0FBSTtBQUFBLElBQ3hCLGtCQUFBeStCLElBQW1CLEdBQUd6K0IsQ0FBSTtBQUFBLElBQzFCLGNBQUEwK0IsSUFBZSxHQUFHMStCLENBQUk7QUFBQSxFQUFBLElBQ3BCb1ksR0FDRXVtQixJQUFZQyxHQUFrQlgsQ0FBUSxHQUN0Q1ksSUFBZ0JGLEtBQWFBLEVBQVUsQ0FBQyxHQUN4Q0csSUFBZ0JILEtBQWFBLEVBQVUsQ0FBQyxHQUN4QztBQUFBLElBQ0osZUFBQWpsQjtBQUFBLElBQ0EsU0FBQUM7QUFBQSxJQUNBLGtCQUFBRTtBQUFBLElBQ0EsU0FBQUU7QUFBQSxJQUNBLGtCQUFBRTtBQUFBLElBQ0EsZ0JBQUFDLElBQWlCUjtBQUFBLElBQ2pCLFVBQUFTLElBQVdSO0FBQUEsSUFDWCxtQkFBQVUsSUFBb0JSO0FBQUEsRUFBQSxJQUNsQm1rQixHQUNFZSxJQUFjLENBQUN0aUMsR0FBSXVpQyxHQUFVMTFCLElBQU0yMUIsT0FBZ0I7QUFDdkQsSUFBQXhpQyxFQUFHLGtCQUFrQndpQyxJQUNDQyxHQUFBemlDLEdBQUl1aUMsSUFBV1QsSUFBZ0JILENBQVksR0FDM0NjLEdBQUF6aUMsR0FBSXVpQyxJQUFXVixJQUFvQkgsQ0FBZ0IsR0FDekU3MEIsTUFBUUEsR0FBSztBQUFBLEVBQ2YsR0FDTTYxQixJQUFjLENBQUMxaUMsR0FBSTZNLE1BQVM7QUFDaEMsSUFBQTdNLEVBQUcsYUFBYSxJQUNoQnlpQyxHQUFzQnppQyxHQUFJK2hDLENBQWMsR0FDeENVLEdBQXNCemlDLEdBQUlpaUMsQ0FBWSxHQUN0Q1EsR0FBc0J6aUMsR0FBSWdpQyxDQUFnQixHQUMxQ24xQixLQUFRQSxFQUFLO0FBQUEsRUFDZixHQUNNODFCLElBQWdCLENBQUNKLE1BQ2QsQ0FBQ3ZpQyxHQUFJNk0sT0FBUztBQUNiLFVBQUE0SixLQUFPOHJCLElBQVc3a0IsSUFBV1IsR0FDN0I4RCxLQUFVLE1BQU1zaEIsRUFBWXRpQyxHQUFJdWlDLEdBQVUxMUIsRUFBSTtBQUNwRCxJQUFBZ1IsR0FBU3BILElBQU0sQ0FBQ3pXLEdBQUlnaEIsRUFBTyxDQUFDLEdBQzVCNGhCLEdBQVUsTUFBTTtBQUNRLE1BQUFILEdBQUF6aUMsR0FBSXVpQyxJQUFXWCxJQUFrQkgsQ0FBYyxHQUNsRG9CLEdBQUE3aUMsR0FBSXVpQyxJQUFXVCxJQUFnQkgsQ0FBWSxHQUN6REwsR0FBb0I3cUIsRUFBSSxLQUNScXNCLEdBQUE5aUMsR0FBSWdJLEdBQU1vNkIsR0FBZXBoQixFQUFPO0FBQUEsSUFDckQsQ0FDRDtBQUFBLEVBQ0g7QUFFRixTQUFPbmhCLEdBQU8waEMsR0FBVztBQUFBLElBQ3ZCLGNBQWN2aEMsR0FBSTtBQUNQLE1BQUE2ZCxHQUFBWixHQUFlLENBQUNqZCxDQUFFLENBQUMsR0FDNUI2aUMsR0FBbUI3aUMsR0FBSXloQyxDQUFjLEdBQ3JDb0IsR0FBbUI3aUMsR0FBSTBoQyxDQUFnQjtBQUFBLElBQ3pDO0FBQUEsSUFDQSxlQUFlMWhDLEdBQUk7QUFDUixNQUFBNmQsR0FBQUosR0FBZ0IsQ0FBQ3pkLENBQUUsQ0FBQyxHQUM3QjZpQyxHQUFtQjdpQyxHQUFJNGhDLENBQWUsR0FDdENpQixHQUFtQjdpQyxHQUFJNmhDLENBQWlCO0FBQUEsSUFDMUM7QUFBQSxJQUNBLFNBQVNjLEVBQWMsRUFBSztBQUFBLElBQzVCLFVBQVVBLEVBQWMsRUFBSTtBQUFBLElBQzVCLFFBQVEzaUMsR0FBSTZNLEdBQU07QUFDaEIsTUFBQTdNLEVBQUcsYUFBYTtBQUNoQixZQUFNZ2hCLEtBQVUsTUFBTTBoQixFQUFZMWlDLEdBQUk2TSxDQUFJO0FBQzFDLE1BQUFnMkIsR0FBbUI3aUMsR0FBSStoQyxDQUFjLEdBQ2hDL2hDLEVBQUcsbUJBSU42aUMsR0FBbUI3aUMsR0FBSWdpQyxDQUFnQixHQUMzQmUsR0FBQSxNQUpBQSxHQUFBLEdBQ1pGLEdBQW1CN2lDLEdBQUlnaUMsQ0FBZ0IsSUFLekNZLEdBQVUsTUFBTTtBQUNWLFFBQUM1aUMsRUFBRyxlQUdSeWlDLEdBQXNCemlDLEdBQUkraEMsQ0FBYyxHQUN4Q2MsR0FBbUI3aUMsR0FBSWlpQyxDQUFZLEdBQzlCWCxHQUFvQmhrQixDQUFPLEtBQ1h3bEIsR0FBQTlpQyxHQUFJZ0ksR0FBTXE2QixHQUFlcmhCLEVBQU87QUFBQSxNQUNyRCxDQUNELEdBQ0RuRCxHQUFTUCxHQUFTLENBQUN0ZCxHQUFJZ2hCLEVBQU8sQ0FBQztBQUFBLElBQ2pDO0FBQUEsSUFDQSxpQkFBaUJoaEIsR0FBSTtBQUNQLE1BQUFzaUMsRUFBQXRpQyxHQUFJLElBQU8sUUFBUSxFQUFJLEdBQzFCNmQsR0FBQVQsR0FBa0IsQ0FBQ3BkLENBQUUsQ0FBQztBQUFBLElBQ2pDO0FBQUEsSUFDQSxrQkFBa0JBLEdBQUk7QUFDUixNQUFBc2lDLEVBQUF0aUMsR0FBSSxJQUFNLFFBQVEsRUFBSSxHQUN6QjZkLEdBQUFELEdBQW1CLENBQUM1ZCxDQUFFLENBQUM7QUFBQSxJQUNsQztBQUFBLElBQ0EsaUJBQWlCQSxHQUFJO0FBQ25CLE1BQUEwaUMsRUFBWTFpQyxDQUFFLEdBQ0w2ZCxHQUFBTCxHQUFrQixDQUFDeGQsQ0FBRSxDQUFDO0FBQUEsSUFBQTtBQUFBLEVBQ2pDLENBQ0Q7QUFDSDtBQUNBLFNBQVNtaUMsR0FBa0JYLEdBQVU7QUFDbkMsTUFBSUEsS0FBWTtBQUNQLFdBQUE7QUFDVCxNQUFXN2dDLEdBQVM2Z0MsQ0FBUTtBQUNuQixXQUFBLENBQUN3QixHQUFTeEIsRUFBUyxLQUFLLEdBQUd3QixHQUFTeEIsRUFBUyxLQUFLLENBQUM7QUFDckQ7QUFDQyxVQUFBai9CLElBQUl5Z0MsR0FBU3hCLENBQVE7QUFDcEIsV0FBQSxDQUFDai9CLEdBQUdBLENBQUM7QUFBQSxFQUFBO0FBRWhCO0FBQ0EsU0FBU3lnQyxHQUFTMWpDLEdBQUs7QUFLZCxTQUpLa0QsR0FBU2xELENBQUc7QUFLMUI7QUFDQSxTQUFTdWpDLEdBQW1CN2lDLEdBQUlpakMsR0FBSztBQUMvQixFQUFBQSxFQUFBLE1BQU0sS0FBSyxFQUFFLFFBQVEsQ0FBQ3hoQyxNQUFNQSxLQUFLekIsRUFBRyxVQUFVLElBQUl5QixDQUFDLENBQUMsSUFDdkR6QixFQUFHOGdDLEVBQU0sTUFBTTlnQyxFQUFHOGdDLEVBQU0sSUFBd0Isb0JBQUEsSUFBUSxJQUFBLElBQUltQyxDQUFHO0FBQ2xFO0FBQ0EsU0FBU1IsR0FBc0J6aUMsR0FBSWlqQyxHQUFLO0FBQ2xDLEVBQUFBLEVBQUEsTUFBTSxLQUFLLEVBQUUsUUFBUSxDQUFDeGhDLE1BQU1BLEtBQUt6QixFQUFHLFVBQVUsT0FBT3lCLENBQUMsQ0FBQztBQUNyRCxRQUFBeWhDLElBQU9sakMsRUFBRzhnQyxFQUFNO0FBQ3RCLEVBQUlvQyxNQUNGQSxFQUFLLE9BQU9ELENBQUcsR0FDVkMsRUFBSyxTQUNSbGpDLEVBQUc4Z0MsRUFBTSxJQUFJO0FBR25CO0FBQ0EsU0FBUzhCLEdBQVU3eEIsR0FBSTtBQUNyQix3QkFBc0IsTUFBTTtBQUMxQiwwQkFBc0JBLENBQUU7QUFBQSxFQUFBLENBQ3pCO0FBQ0g7QUFDQSxJQUFJb3lCLEtBQVE7QUFDWixTQUFTTCxHQUFtQjlpQyxHQUFJb2pDLEdBQWNDLEdBQWlCcmlCLEdBQVM7QUFDaEUsUUFBQTdNLElBQUtuVSxFQUFHLFNBQVMsRUFBRW1qQyxJQUNuQkcsSUFBb0IsTUFBTTtBQUMxQixJQUFBbnZCLE1BQU9uVSxFQUFHLFVBQ0pnaEIsRUFBQTtBQUFBLEVBRVo7QUFDQSxNQUFJcWlCLEtBQW1CO0FBQ2QsV0FBQSxXQUFXQyxHQUFtQkQsQ0FBZTtBQUV0RCxRQUFNLEVBQUUsTUFBQXI3QixHQUFNLFNBQUF1WSxHQUFTLFdBQUFnakIsRUFBYyxJQUFBQyxHQUFrQnhqQyxHQUFJb2pDLENBQVk7QUFDdkUsTUFBSSxDQUFDcDdCO0FBQ0gsV0FBT2daLEVBQVE7QUFFakIsUUFBTXlpQixJQUFXejdCLElBQU87QUFDeEIsTUFBSTA3QixJQUFRO0FBQ1osUUFBTXJ2QixJQUFNLE1BQU07QUFDYixJQUFBclUsRUFBQSxvQkFBb0J5akMsR0FBVUUsQ0FBSyxHQUNwQkwsRUFBQTtBQUFBLEVBQ3BCLEdBQ01LLElBQVEsQ0FBQzM5QixNQUFNO0FBQ25CLElBQUlBLEVBQUUsV0FBV2hHLEtBQU0sRUFBRTBqQyxLQUFTSCxLQUM1Qmx2QixFQUFBO0FBQUEsRUFFUjtBQUNBLGFBQVcsTUFBTTtBQUNmLElBQUlxdkIsSUFBUUgsS0FDTmx2QixFQUFBO0FBQUEsRUFDTixHQUNDa00sSUFBVSxDQUFDLEdBQ1h2Z0IsRUFBQSxpQkFBaUJ5akMsR0FBVUUsQ0FBSztBQUNyQztBQUNBLFNBQVNILEdBQWtCeGpDLEdBQUlvakMsR0FBYztBQUNyQyxRQUFBUSxJQUFTLE9BQU8saUJBQWlCNWpDLENBQUUsR0FDbkM2akMsSUFBcUIsQ0FBQ3hrQyxPQUFTdWtDLEVBQU92a0MsQ0FBRyxLQUFLLElBQUksTUFBTSxJQUFJLEdBQzVEeWtDLElBQW1CRCxFQUFtQixHQUFHakQsRUFBVSxPQUFPLEdBQzFEbUQsSUFBc0JGLEVBQW1CLEdBQUdqRCxFQUFVLFVBQVUsR0FDaEVvRCxJQUFvQkMsR0FBV0gsR0FBa0JDLENBQW1CLEdBQ3BFRyxJQUFrQkwsRUFBbUIsR0FBR2hELEVBQVMsT0FBTyxHQUN4RHNELElBQXFCTixFQUFtQixHQUFHaEQsRUFBUyxVQUFVLEdBQzlEdUQsSUFBbUJILEdBQVdDLEdBQWlCQyxDQUFrQjtBQUN2RSxNQUFJbjhCLElBQU8sTUFDUHVZLElBQVUsR0FDVmdqQixJQUFZO0FBQ2hCLEVBQUlILE1BQWlCeEMsS0FDZm9ELElBQW9CLE1BQ2ZoOEIsSUFBQTQ0QixJQUNHcmdCLElBQUF5akIsR0FDVlQsSUFBWVEsRUFBb0IsVUFFekJYLE1BQWlCdkMsS0FDdEJ1RCxJQUFtQixNQUNkcDhCLElBQUE2NEIsSUFDR3RnQixJQUFBNmpCLEdBQ1ZiLElBQVlZLEVBQW1CLFdBR3ZCNWpCLElBQUEsS0FBSyxJQUFJeWpCLEdBQW1CSSxDQUFnQixHQUN0RHA4QixJQUFPdVksSUFBVSxJQUFJeWpCLElBQW9CSSxJQUFtQnhELEtBQWFDLEtBQVksTUFDckYwQyxJQUFZdjdCLElBQU9BLE1BQVM0NEIsS0FBYW1ELEVBQW9CLFNBQVNJLEVBQW1CLFNBQVM7QUFFOUYsUUFBQUUsSUFBZXI4QixNQUFTNDRCLE1BQWMseUJBQXlCO0FBQUEsSUFDbkVpRCxFQUFtQixHQUFHakQsRUFBVSxVQUFVLEVBQUUsU0FBUztBQUFBLEVBQ3ZEO0FBQ08sU0FBQTtBQUFBLElBQ0wsTUFBQTU0QjtBQUFBLElBQ0EsU0FBQXVZO0FBQUEsSUFDQSxXQUFBZ2pCO0FBQUEsSUFDQSxjQUFBYztBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVNKLEdBQVdLLEdBQVFwQyxHQUFXO0FBQzlCLFNBQUFvQyxFQUFPLFNBQVNwQyxFQUFVO0FBQ3RCLElBQUFvQyxJQUFBQSxFQUFPLE9BQU9BLENBQU07QUFFL0IsU0FBTyxLQUFLLElBQUksR0FBR3BDLEVBQVUsSUFBSSxDQUFDcUMsR0FBR3RrQyxNQUFNdWtDLEdBQUtELENBQUMsSUFBSUMsR0FBS0YsRUFBT3JrQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFO0FBQ0EsU0FBU3VrQyxHQUFLMXlCLEdBQUc7QUFDWCxTQUFBQSxNQUFNLFNBQWUsSUFDbEIsT0FBT0EsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLFFBQVEsS0FBSyxHQUFHLENBQUMsSUFBSTtBQUNwRDtBQUNBLFNBQVNpeEIsS0FBYztBQUNyQixTQUFPLFNBQVMsS0FBSztBQUN2QjtBQUVBLFNBQVMwQixHQUFXemtDLEdBQUljLEdBQU80akMsR0FBTztBQUM5QixRQUFBQyxJQUFvQjNrQyxFQUFHOGdDLEVBQU07QUFDbkMsRUFBSTZELE1BQ083akMsS0FBQUEsSUFBUSxDQUFDQSxHQUFPLEdBQUc2akMsQ0FBaUIsSUFBSSxDQUFDLEdBQUdBLENBQWlCLEdBQUcsS0FBSyxHQUFHLElBRS9FN2pDLEtBQVMsT0FDWGQsRUFBRyxnQkFBZ0IsT0FBTyxJQUNqQjBrQyxJQUNOMWtDLEVBQUEsYUFBYSxTQUFTYyxDQUFLLElBRTlCZCxFQUFHLFlBQVljO0FBRW5CO0FBRUEsTUFBTThqQyxLQUF1QixPQUFPLE1BQU0sR0FDcENDLEtBQWMsT0FBTyxNQUFNLEdBQzNCQyxLQUFRO0FBQUEsRUFDWixZQUFZOWtDLEdBQUksRUFBRSxPQUFBYyxLQUFTLEVBQUUsWUFBQTJ2QixLQUFjO0FBQ3RDLElBQUF6d0IsRUFBQTRrQyxFQUFvQixJQUFJNWtDLEVBQUcsTUFBTSxZQUFZLFNBQVMsS0FBS0EsRUFBRyxNQUFNLFNBQ25FeXdCLEtBQWMzdkIsSUFDaEIydkIsRUFBVyxZQUFZendCLENBQUUsSUFFekIra0MsR0FBVy9rQyxHQUFJYyxDQUFLO0FBQUEsRUFFeEI7QUFBQSxFQUNBLFFBQVFkLEdBQUksRUFBRSxPQUFBYyxLQUFTLEVBQUUsWUFBQTJ2QixLQUFjO0FBQ3JDLElBQUlBLEtBQWMzdkIsS0FDaEIydkIsRUFBVyxNQUFNendCLENBQUU7QUFBQSxFQUV2QjtBQUFBLEVBQ0EsUUFBUUEsR0FBSSxFQUFFLE9BQUFjLEdBQU8sVUFBQWlCLEVBQVksR0FBQSxFQUFFLFlBQUEwdUIsS0FBYztBQUMzQyxJQUFBLENBQUMzdkIsS0FBVSxDQUFDaUIsTUFDWjB1QixJQUNFM3ZCLEtBQ0YydkIsRUFBVyxZQUFZendCLENBQUUsR0FDekIra0MsR0FBVy9rQyxHQUFJLEVBQUksR0FDbkJ5d0IsRUFBVyxNQUFNendCLENBQUUsS0FFUnl3QixFQUFBLE1BQU16d0IsR0FBSSxNQUFNO0FBQ3pCLE1BQUEra0MsR0FBVy9rQyxHQUFJLEVBQUs7QUFBQSxJQUFBLENBQ3JCLElBR0gra0MsR0FBVy9rQyxHQUFJYyxDQUFLO0FBQUEsRUFFeEI7QUFBQSxFQUNBLGNBQWNkLEdBQUksRUFBRSxPQUFBYyxLQUFTO0FBQzNCLElBQUFpa0MsR0FBVy9rQyxHQUFJYyxDQUFLO0FBQUEsRUFBQTtBQUV4QjtBQUlBLFNBQVNpa0MsR0FBVy9rQyxHQUFJYyxHQUFPO0FBQzdCLEVBQUFkLEVBQUcsTUFBTSxVQUFVYyxJQUFRZCxFQUFHNGtDLEVBQW9CLElBQUksUUFDbkQ1a0MsRUFBQTZrQyxFQUFXLElBQUksQ0FBQy9qQztBQUNyQjtBQVNBLE1BQU1ra0MsS0FBZSxPQUFvRSxFQUFFLEdBd0VyRkMsS0FBWTtBQUNsQixTQUFTQyxHQUFXbGxDLEdBQUlzRyxHQUFNTCxHQUFNO0FBQ2xDLFFBQU15M0IsSUFBUTE5QixFQUFHLE9BQ1htbEMsSUFBYzFrQyxHQUFTd0YsQ0FBSTtBQUNqQyxNQUFJbS9CLElBQXVCO0FBQ3ZCLE1BQUFuL0IsS0FBUSxDQUFDay9CLEdBQWE7QUFDeEIsUUFBSTcrQjtBQUNFLFVBQUM3RixHQUFTNkYsQ0FBSTtBQU9oQixtQkFBVysrQixLQUFhLytCLEVBQUssTUFBTSxHQUFHLEdBQUc7QUFDakMsZ0JBQUFqSCxJQUFNZ21DLEVBQVUsTUFBTSxHQUFHQSxFQUFVLFFBQVEsR0FBRyxDQUFDLEVBQUUsS0FBSztBQUN4RCxVQUFBcC9CLEVBQUs1RyxDQUFHLEtBQUssUUFDTmltQyxHQUFBNUgsR0FBT3IrQixHQUFLLEVBQUU7QUFBQSxRQUN6QjtBQUFBO0FBVkYsbUJBQVdBLEtBQU9pSDtBQUNaLFVBQUFMLEVBQUs1RyxDQUFHLEtBQUssUUFDTmltQyxHQUFBNUgsR0FBT3IrQixHQUFLLEVBQUU7QUFZL0IsZUFBV0EsS0FBTzRHO0FBQ2hCLE1BQUk1RyxNQUFRLGNBQ2ErbEMsSUFBQSxLQUV6QkUsR0FBUzVILEdBQU9yK0IsR0FBSzRHLEVBQUs1RyxDQUFHLENBQUM7QUFBQSxFQUNoQyxXQUVJOGxDO0FBQ0YsUUFBSTcrQixNQUFTTCxHQUFNO0FBQ1gsWUFBQXMvQixJQUFhN0gsRUFBTXNILEVBQVk7QUFDckMsTUFBSU8sTUFDRnQvQixLQUFRLE1BQU1zL0IsSUFFaEI3SCxFQUFNLFVBQVV6M0IsR0FDT20vQixJQUFBSCxHQUFVLEtBQUtoL0IsQ0FBSTtBQUFBLElBQUE7QUFBQSxTQUVuQ0ssS0FDVHRHLEVBQUcsZ0JBQWdCLE9BQU87QUFHOUIsRUFBSTRrQyxNQUF3QjVrQyxNQUMxQkEsRUFBRzRrQyxFQUFvQixJQUFJUSxJQUF1QjFILEVBQU0sVUFBVSxJQUM5RDE5QixFQUFHNmtDLEVBQVcsTUFDaEJuSCxFQUFNLFVBQVU7QUFHdEI7QUFFQSxNQUFNOEgsS0FBYztBQUNwQixTQUFTRixHQUFTNUgsR0FBT242QixHQUFNakUsR0FBSztBQUM5QixNQUFBYyxFQUFRZCxDQUFHO0FBQ2IsSUFBQUEsRUFBSSxRQUFRLENBQUM0RSxNQUFNb2hDLEdBQVM1SCxHQUFPbjZCLEdBQU1XLENBQUMsQ0FBQztBQUFBLFdBRXZDNUUsS0FBTyxTQUFZQSxJQUFBLEtBUW5CaUUsRUFBSyxXQUFXLElBQUk7QUFDaEIsSUFBQW02QixFQUFBLFlBQVluNkIsR0FBTWpFLENBQUc7QUFBQSxPQUN0QjtBQUNDLFVBQUFtbUMsSUFBV0MsR0FBV2hJLEdBQU9uNkIsQ0FBSTtBQUNuQyxJQUFBaWlDLEdBQVksS0FBS2xtQyxDQUFHLElBQ2hCbytCLEVBQUE7QUFBQSxNQUNKLzdCLEdBQVU4akMsQ0FBUTtBQUFBLE1BQ2xCbm1DLEVBQUksUUFBUWttQyxJQUFhLEVBQUU7QUFBQSxNQUMzQjtBQUFBLElBQ0YsSUFFQTlILEVBQU0rSCxDQUFRLElBQUlubUM7QUFBQSxFQUNwQjtBQUdOO0FBQ0EsTUFBTXFtQyxLQUFXLENBQUMsVUFBVSxPQUFPLElBQUksR0FDakNDLEtBQWMsQ0FBQztBQUNyQixTQUFTRixHQUFXaEksR0FBT21JLEdBQVM7QUFDNUIsUUFBQTNoQixJQUFTMGhCLEdBQVlDLENBQU87QUFDbEMsTUFBSTNoQjtBQUNLLFdBQUFBO0FBRUwsTUFBQTNnQixJQUFPaEMsR0FBU3NrQyxDQUFPO0FBQ3ZCLE1BQUF0aUMsTUFBUyxZQUFZQSxLQUFRbTZCO0FBQ3hCLFdBQUFrSSxHQUFZQyxDQUFPLElBQUl0aUM7QUFFaEMsRUFBQUEsSUFBTzNCLEdBQVcyQixDQUFJO0FBQ3RCLFdBQVN0RCxJQUFJLEdBQUdBLElBQUkwbEMsR0FBUyxRQUFRMWxDLEtBQUs7QUFDbEMsVUFBQXdsQyxJQUFXRSxHQUFTMWxDLENBQUMsSUFBSXNEO0FBQy9CLFFBQUlraUMsS0FBWS9IO0FBQ1AsYUFBQWtJLEdBQVlDLENBQU8sSUFBSUo7QUFBQSxFQUNoQztBQUVLLFNBQUFJO0FBQ1Q7QUFFQSxNQUFNQyxLQUFVO0FBQ2hCLFNBQVNDLEdBQVUvbEMsR0FBSVgsR0FBS3lCLEdBQU80akMsR0FBTy94QixHQUFVcXpCLElBQVl2aUMsR0FBcUJwRSxDQUFHLEdBQUc7QUFDekYsRUFBSXFsQyxLQUFTcmxDLEVBQUksV0FBVyxRQUFRLElBQzlCeUIsS0FBUyxPQUNYZCxFQUFHLGtCQUFrQjhsQyxJQUFTem1DLEVBQUksTUFBTSxHQUFHQSxFQUFJLE1BQU0sQ0FBQyxJQUVuRFcsRUFBQSxlQUFlOGxDLElBQVN6bUMsR0FBS3lCLENBQUssSUFHbkNBLEtBQVMsUUFBUWtsQyxLQUFhLENBQUN0aUMsR0FBbUI1QyxDQUFLLElBQ3pEZCxFQUFHLGdCQUFnQlgsQ0FBRyxJQUVuQlcsRUFBQTtBQUFBLElBQ0RYO0FBQUEsSUFDQTJtQyxJQUFZLEtBQUt0bEMsR0FBU0ksQ0FBSyxJQUFJLE9BQU9BLENBQUssSUFBSUE7QUFBQSxFQUNyRDtBQUdOO0FBRUEsU0FBU21sQyxHQUFham1DLEdBQUlYLEdBQUt5QixHQUFPMlcsR0FBaUJ5dUIsR0FBVTtBQUMzRCxNQUFBN21DLE1BQVEsZUFBZUEsTUFBUSxlQUFlO0FBQ2hELElBQUl5QixLQUFTLFNBQ1hkLEVBQUdYLENBQUcsSUFBSUEsTUFBUSxjQUFjMGdDLEdBQW9Cai9CLENBQUssSUFBSUE7QUFFL0Q7QUFBQSxFQUFBO0FBRUYsUUFBTXUvQixJQUFNcmdDLEVBQUc7QUFDWCxNQUFBWCxNQUFRLFdBQVdnaEMsTUFBUTtBQUFBLEVBQy9CLENBQUNBLEVBQUksU0FBUyxHQUFHLEdBQUc7QUFDWixVQUFBdCtCLElBQVdzK0IsTUFBUSxXQUFXcmdDLEVBQUcsYUFBYSxPQUFPLEtBQUssS0FBS0EsRUFBRyxPQUNsRW1JLElBQVdySCxLQUFTO0FBQUE7QUFBQTtBQUFBLE1BR3hCZCxFQUFHLFNBQVMsYUFBYSxPQUFPO0FBQUEsUUFDOUIsT0FBT2MsQ0FBSztBQUNoQixLQUFJaUIsTUFBYW9HLEtBQVksRUFBRSxZQUFZbkksUUFDekNBLEVBQUcsUUFBUW1JLElBRVRySCxLQUFTLFFBQ1hkLEVBQUcsZ0JBQWdCWCxDQUFHLEdBRXhCVyxFQUFHLFNBQVNjO0FBQ1o7QUFBQSxFQUFBO0FBRUYsTUFBSXFsQyxJQUFhO0FBQ2IsTUFBQXJsQyxNQUFVLE1BQU1BLEtBQVMsTUFBTTtBQUMzQixVQUFBa0gsSUFBTyxPQUFPaEksRUFBR1gsQ0FBRztBQUMxQixJQUFJMkksTUFBUyxZQUNYbEgsSUFBUTRDLEdBQW1CNUMsQ0FBSyxJQUN2QkEsS0FBUyxRQUFRa0gsTUFBUyxZQUMzQmxILElBQUEsSUFDS3FsQyxJQUFBLE1BQ0puK0IsTUFBUyxhQUNWbEgsSUFBQSxHQUNLcWxDLElBQUE7QUFBQSxFQUNmO0FBRUUsTUFBQTtBQUNGLElBQUFubUMsRUFBR1gsQ0FBRyxJQUFJeUI7QUFBQSxXQUNIa0YsR0FBRztBQUFBLEVBTVY7QUFFWSxFQUFBbWdDLEtBQUFubUMsRUFBRyxnQkFBZ0JrbUMsS0FBWTdtQyxDQUFHO0FBQ2xEO0FBRUEsU0FBUyttQyxHQUFpQnBtQyxHQUFJNDNCLEdBQU81TyxHQUFTaFksR0FBUztBQUNsRCxFQUFBaFIsRUFBQSxpQkFBaUI0M0IsR0FBTzVPLEdBQVNoWSxDQUFPO0FBQzdDO0FBQ0EsU0FBU3ExQixHQUFvQnJtQyxHQUFJNDNCLEdBQU81TyxHQUFTaFksR0FBUztBQUNyRCxFQUFBaFIsRUFBQSxvQkFBb0I0M0IsR0FBTzVPLEdBQVNoWSxDQUFPO0FBQ2hEO0FBQ0EsTUFBTXMxQixLQUFTLE9BQU8sTUFBTTtBQUM1QixTQUFTQyxHQUFXdm1DLEdBQUk2bEMsR0FBU1csR0FBV0MsR0FBVzl6QixJQUFXLE1BQU07QUFDdEUsUUFBTSt6QixJQUFXMW1DLEVBQUdzbUMsRUFBTSxNQUFNdG1DLEVBQUdzbUMsRUFBTSxJQUFJLEtBQ3ZDSyxJQUFrQkQsRUFBU2IsQ0FBTztBQUN4QyxNQUFJWSxLQUFhRTtBQUNmLElBQUFBLEVBQWdCLFFBQTZGRjtBQUFBLE9BQ3hHO0FBQ0wsVUFBTSxDQUFDbGpDLEdBQU15TixDQUFPLElBQUk0MUIsR0FBVWYsQ0FBTztBQUN6QyxRQUFJWSxHQUFXO0FBQ1AsWUFBQUksSUFBVUgsRUFBU2IsQ0FBTyxJQUFJaUI7QUFBQSxRQUNtREw7QUFBQSxRQUNyRjl6QjtBQUFBLE1BQ0Y7QUFDaUIsTUFBQXl6QixHQUFBcG1DLEdBQUl1RCxHQUFNc2pDLEdBQVM3MUIsQ0FBTztBQUFBLFdBQ2xDMjFCLE1BQ1dOLEdBQUFybUMsR0FBSXVELEdBQU1vakMsR0FBaUIzMUIsQ0FBTyxHQUN0RDAxQixFQUFTYixDQUFPLElBQUk7QUFBQSxFQUN0QjtBQUVKO0FBQ0EsTUFBTWtCLEtBQW9CO0FBQzFCLFNBQVNILEdBQVVyakMsR0FBTTtBQUNuQixNQUFBeU47QUFDQSxNQUFBKzFCLEdBQWtCLEtBQUt4akMsQ0FBSSxHQUFHO0FBQ2hDLElBQUF5TixJQUFVLENBQUM7QUFDUCxRQUFBdVk7QUFDSixXQUFPQSxJQUFJaG1CLEVBQUssTUFBTXdqQyxFQUFpQjtBQUM5QixNQUFBeGpDLElBQUFBLEVBQUssTUFBTSxHQUFHQSxFQUFLLFNBQVNnbUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUM5Q3ZZLEVBQVF1WSxFQUFFLENBQUMsRUFBRSxZQUFBLENBQWEsSUFBSTtBQUFBLEVBQ2hDO0FBR0ssU0FBQSxDQURPaG1CLEVBQUssQ0FBQyxNQUFNLE1BQU1BLEVBQUssTUFBTSxDQUFDLElBQUk1QixHQUFVNEIsRUFBSyxNQUFNLENBQUMsQ0FBQyxHQUN4RHlOLENBQU87QUFDeEI7QUFDQSxJQUFJZzJCLEtBQVk7QUFDaEIsTUFBTS95Qiw2QkFBNEIsUUFBUSxHQUNwQ2d6QixLQUFTLE1BQU1ELE9BQWMveUIsR0FBRSxLQUFLLE1BQU0reUIsS0FBWSxDQUFDLEdBQUdBLEtBQVksS0FBSyxJQUFJO0FBQ3JGLFNBQVNGLEdBQWNJLEdBQWN2MEIsR0FBVTtBQUN2QyxRQUFBazBCLElBQVUsQ0FBQzdnQyxNQUFNO0FBQ2pCLFFBQUEsQ0FBQ0EsRUFBRTtBQUNILE1BQUFBLEVBQUEsT0FBTyxLQUFLLElBQUk7QUFBQSxhQUNUQSxFQUFFLFFBQVE2Z0MsRUFBUTtBQUMzQjtBQUVGLElBQUFoMEI7QUFBQSxNQUNFczBCLEdBQThCbmhDLEdBQUc2Z0MsRUFBUSxLQUFLO0FBQUEsTUFDOUNsMEI7QUFBQSxNQUNBO0FBQUEsTUFDQSxDQUFDM00sQ0FBQztBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQ0EsU0FBQTZnQyxFQUFRLFFBQVFLLEdBQ2hCTCxFQUFRLFdBQVdJLEdBQU8sR0FDbkJKO0FBQ1Q7QUFXQSxTQUFTTSxHQUE4QixHQUFHcm1DLEdBQU87QUFDM0MsTUFBQVYsRUFBUVUsQ0FBSyxHQUFHO0FBQ2xCLFVBQU1zbUMsSUFBZSxFQUFFO0FBQ3ZCLGFBQUUsMkJBQTJCLE1BQU07QUFDakMsTUFBQUEsRUFBYSxLQUFLLENBQUMsR0FDbkIsRUFBRSxXQUFXO0FBQUEsSUFDZixHQUNPdG1DLEVBQU07QUFBQSxNQUNYLENBQUNNLE1BQU8sQ0FBQ2d6QixNQUFPLENBQUNBLEVBQUcsWUFBWWh6QixLQUFNQSxFQUFHZ3pCLENBQUU7QUFBQSxJQUM3QztBQUFBLEVBQUE7QUFFTyxXQUFBdHpCO0FBRVg7QUFFQSxNQUFNdW1DLEtBQWEsQ0FBQ2hvQyxNQUFRQSxFQUFJLFdBQVcsQ0FBQyxNQUFNLE9BQU9BLEVBQUksV0FBVyxDQUFDLE1BQU07QUFDL0VBLEVBQUksV0FBVyxDQUFDLElBQUksTUFBTUEsRUFBSSxXQUFXLENBQUMsSUFBSSxLQUN4Q2lvQyxLQUFZLENBQUN0bkMsR0FBSVgsR0FBS21uQyxHQUFXQyxHQUFXOXVCLEdBQVdGLE1BQW9CO0FBQy9FLFFBQU1pdEIsSUFBUS9zQixNQUFjO0FBQzVCLEVBQUl0WSxNQUFRLFVBQ0NvbEMsR0FBQXprQyxHQUFJeW1DLEdBQVcvQixDQUFLLElBQ3RCcmxDLE1BQVEsVUFDTjZsQyxHQUFBbGxDLEdBQUl3bUMsR0FBV0MsQ0FBUyxJQUMxQjltQyxHQUFLTixDQUFHLElBQ1pPLEdBQWdCUCxDQUFHLEtBQ3RCa25DLEdBQVd2bUMsR0FBSVgsR0FBS21uQyxHQUFXQyxHQUFXaHZCLENBQWUsS0FFbERwWSxFQUFJLENBQUMsTUFBTSxPQUFPQSxJQUFNQSxFQUFJLE1BQU0sQ0FBQyxHQUFHLE1BQVFBLEVBQUksQ0FBQyxNQUFNLE9BQU9BLElBQU1BLEVBQUksTUFBTSxDQUFDLEdBQUcsTUFBU2tvQyxHQUFnQnZuQyxHQUFJWCxHQUFLb25DLEdBQVcvQixDQUFLLE1BQ2xJdUIsR0FBQWptQyxHQUFJWCxHQUFLb25DLENBQVMsR0FDM0IsQ0FBQ3ptQyxFQUFHLFFBQVEsU0FBUyxHQUFHLE1BQU1YLE1BQVEsV0FBV0EsTUFBUSxhQUFhQSxNQUFRLGVBQ2hGMG1DLEdBQVUvbEMsR0FBSVgsR0FBS29uQyxHQUFXL0IsR0FBT2p0QixHQUFpQnBZLE1BQVEsT0FBTyxvRUFJdkVXLEVBQUcsYUFBYSxRQUFRLEtBQUtYLENBQUcsS0FBSyxDQUFDb0IsR0FBU2dtQyxDQUFTLEtBRXhEUixHQUFham1DLEdBQUl3bkMsR0FBV25vQyxDQUFHLEdBQUdvbkMsR0FBV2h2QixHQUFpQnBZLENBQUcsS0FFN0RBLE1BQVEsZUFDVlcsRUFBRyxhQUFheW1DLElBQ1BwbkMsTUFBUSxrQkFDakJXLEVBQUcsY0FBY3ltQyxJQUVUVixHQUFBL2xDLEdBQUlYLEdBQUtvbkMsR0FBVy9CLENBQUs7QUFFdkM7QUFDQSxTQUFTNkMsR0FBZ0J2bkMsR0FBSVgsR0FBS3lCLEdBQU80akMsR0FBTztBQUM5QyxNQUFJQTtBQUlGLFdBSEksR0FBQXJsQyxNQUFRLGVBQWVBLE1BQVEsaUJBRy9CQSxLQUFPVyxLQUFNcW5DLEdBQVdob0MsQ0FBRyxLQUFLbUIsRUFBV00sQ0FBSztBQWN0RCxNQVRJekIsTUFBUSxnQkFBZ0JBLE1BQVEsZUFBZUEsTUFBUSxlQUd2REEsTUFBUSxVQUdSQSxNQUFRLFVBQVVXLEVBQUcsWUFBWSxXQUdqQ1gsTUFBUSxVQUFVVyxFQUFHLFlBQVk7QUFDNUIsV0FBQTtBQUVMLE1BQUFYLE1BQVEsV0FBV0EsTUFBUSxVQUFVO0FBQ3ZDLFVBQU1naEMsSUFBTXJnQyxFQUFHO0FBQ2YsUUFBSXFnQyxNQUFRLFNBQVNBLE1BQVEsV0FBV0EsTUFBUSxZQUFZQSxNQUFRO0FBQzNELGFBQUE7QUFBQSxFQUNUO0FBRUYsU0FBSWdILEdBQVdob0MsQ0FBRyxLQUFLb0IsR0FBU0ssQ0FBSyxJQUM1QixLQUVGekIsS0FBT1c7QUFDaEI7QUFzYkEsTUFBTXluQyx5QkFBa0MsUUFBUSxHQUMxQ0MseUJBQXFDLFFBQVEsR0FDN0NDLEtBQVksT0FBTyxTQUFTLEdBQzVCOXNCLEtBQWEsT0FBTyxVQUFVLEdBQzlCK3NCLEtBQVcsQ0FBQzFHLE9BQ2hCLE9BQU9BLEVBQUUsTUFBTSxNQUNSQSxJQUVIMkcsS0FBK0MsZ0JBQUFELEdBQUE7QUFBQSxFQUNuRCxNQUFNO0FBQUEsRUFDTixPQUF1QixnQkFBQS9uQyxHQUFPLENBQUMsR0FBR21oQyxJQUEyQjtBQUFBLElBQzNELEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUFBLENBQ1o7QUFBQSxFQUNELE1BQU1ucUIsR0FBTyxFQUFFLE9BQUEwRSxLQUFTO0FBQ3RCLFVBQU01SSxJQUFXNkksR0FBbUIsR0FDOUJULElBQVFELEdBQW1CO0FBQzdCLFFBQUFpZSxHQUNBdmdCO0FBQ0osV0FBQXdLLEdBQVUsTUFBTTtBQUNWLFVBQUEsQ0FBQytWLEVBQWE7QUFDaEI7QUFFRixZQUFNK08sSUFBWWp4QixFQUFNLGFBQWEsR0FBR0EsRUFBTSxRQUFRLEdBQUc7QUFDekQsVUFBSSxDQUFDa3hCO0FBQUEsUUFDSGhQLEVBQWEsQ0FBQyxFQUFFO0FBQUEsUUFDaEJwbUIsRUFBUyxNQUFNO0FBQUEsUUFDZm0xQjtBQUFBLE1BQUE7QUFFQTtBQUVGLE1BQUEvTyxFQUFhLFFBQVFpUCxFQUFjLEdBQ25DalAsRUFBYSxRQUFRa1AsRUFBYztBQUM3QixZQUFBQyxJQUFnQm5QLEVBQWEsT0FBT29QLEVBQWdCO0FBQzlDLE1BQUFwRixHQUFBLEdBQ0VtRixFQUFBLFFBQVEsQ0FBQ3ptQyxNQUFNO0FBQzNCLGNBQU16QixJQUFLeUIsRUFBRSxJQUNQaThCLElBQVExOUIsRUFBRztBQUNqQixRQUFBNmlDLEdBQW1CN2lDLEdBQUk4bkMsQ0FBUyxHQUNoQ3BLLEVBQU0sWUFBWUEsRUFBTSxrQkFBa0JBLEVBQU0scUJBQXFCO0FBQ3JFLGNBQU0zc0IsSUFBSy9RLEVBQUcybkMsRUFBUyxJQUFJLENBQUMzaEMsTUFBTTtBQUM1QixVQUFBQSxLQUFLQSxFQUFFLFdBQVdoRyxNQUdsQixDQUFDZ0csS0FBSyxhQUFhLEtBQUtBLEVBQUUsWUFBWSxPQUNyQ2hHLEVBQUEsb0JBQW9CLGlCQUFpQitRLENBQUUsR0FDMUMvUSxFQUFHMm5DLEVBQVMsSUFBSSxNQUNoQmxGLEdBQXNCemlDLEdBQUk4bkMsQ0FBUztBQUFBLFFBRXZDO0FBQ0csUUFBQTluQyxFQUFBLGlCQUFpQixpQkFBaUIrUSxDQUFFO0FBQUEsTUFBQSxDQUN4QztBQUFBLElBQUEsQ0FDRixHQUNNLE1BQU07QUFDTCxZQUFBNEssSUFBVzNTLEVBQU02TixDQUFLLEdBQ3RCdXhCLElBQXFCaEgsR0FBdUJ6bEIsQ0FBUTtBQUN0RCxVQUFBMGtCLElBQU0xa0IsRUFBUyxPQUFPaUQ7QUFFMUIsVUFEQW1hLElBQWUsQ0FBQyxHQUNadmdCO0FBQ0YsaUJBQVN2WSxJQUFJLEdBQUdBLElBQUl1WSxFQUFTLFFBQVF2WSxLQUFLO0FBQ2xDLGdCQUFBOFosSUFBUXZCLEVBQVN2WSxDQUFDO0FBQ3hCLFVBQUk4WixFQUFNLE1BQU1BLEVBQU0sY0FBYyxZQUNsQ2dmLEVBQWEsS0FBS2hmLENBQUssR0FDdkJxQztBQUFBLFlBQ0VyQztBQUFBLFlBQ0FrQztBQUFBLGNBQ0VsQztBQUFBLGNBQ0FxdUI7QUFBQSxjQUNBcnRCO0FBQUEsY0FDQXBJO0FBQUEsWUFBQTtBQUFBLFVBRUosR0FDWTgwQixHQUFBO0FBQUEsWUFDVjF0QjtBQUFBLFlBQ0FBLEVBQU0sR0FBRyxzQkFBc0I7QUFBQSxVQUNqQztBQUFBLFFBQ0Y7QUFHSixNQUFBdkIsSUFBVytDLEVBQU0sVUFBVUUsR0FBeUJGLEVBQU0sUUFBUyxDQUFBLElBQUksQ0FBQztBQUN4RSxlQUFTdGIsSUFBSSxHQUFHQSxJQUFJdVksRUFBUyxRQUFRdlksS0FBSztBQUNsQyxjQUFBOFosSUFBUXZCLEVBQVN2WSxDQUFDO0FBQ3BCLFFBQUE4WixFQUFNLE9BQU8sUUFDZnFDO0FBQUEsVUFDRXJDO0FBQUEsVUFDQWtDLEdBQXVCbEMsR0FBT3F1QixHQUFvQnJ0QixHQUFPcEksQ0FBUTtBQUFBLFFBQ25FO0FBQUEsTUFHRjtBQUVLLGFBQUErTyxHQUFZMmUsR0FBSyxNQUFNN25CLENBQVE7QUFBQSxJQUN4QztBQUFBLEVBQUE7QUFFSixDQUFDLEdBQ0s2dkIsS0FBa0JSO0FBQ3hCLFNBQVNHLEdBQWV2bUMsR0FBRztBQUN6QixRQUFNekIsSUFBS3lCLEVBQUU7QUFDVCxFQUFBekIsRUFBRzJuQyxFQUFTLEtBQ2QzbkMsRUFBRzJuQyxFQUFTLEVBQUUsR0FFWjNuQyxFQUFHNmEsRUFBVSxLQUNmN2EsRUFBRzZhLEVBQVUsRUFBRTtBQUVuQjtBQUNBLFNBQVNvdEIsR0FBZXhtQyxHQUFHO0FBQ3pCLEVBQUFpbUMsR0FBZSxJQUFJam1DLEdBQUdBLEVBQUUsR0FBRyx1QkFBdUI7QUFDcEQ7QUFDQSxTQUFTMG1DLEdBQWlCMW1DLEdBQUc7QUFDckIsUUFBQTZtQyxJQUFTYixHQUFZLElBQUlobUMsQ0FBQyxHQUMxQjhtQyxJQUFTYixHQUFlLElBQUlqbUMsQ0FBQyxHQUM3QittQyxJQUFLRixFQUFPLE9BQU9DLEVBQU8sTUFDMUJFLElBQUtILEVBQU8sTUFBTUMsRUFBTztBQUMvQixNQUFJQyxLQUFNQyxHQUFJO0FBQ04sVUFBQTMyQixJQUFJclEsRUFBRSxHQUFHO0FBQ2YsV0FBQXFRLEVBQUUsWUFBWUEsRUFBRSxrQkFBa0IsYUFBYTAyQixDQUFFLE1BQU1DLENBQUUsT0FDekQzMkIsRUFBRSxxQkFBcUIsTUFDaEJyUTtBQUFBLEVBQUE7QUFFWDtBQUNBLFNBQVNzbUMsR0FBZ0IvbkMsR0FBSW16QixHQUFNMlUsR0FBVztBQUN0QyxRQUFBWSxJQUFRMW9DLEVBQUcsVUFBVSxHQUNyQmtqQyxJQUFPbGpDLEVBQUc4Z0MsRUFBTTtBQUN0QixFQUFJb0MsS0FDR0EsRUFBQSxRQUFRLENBQUNELE1BQVE7QUFDaEIsSUFBQUEsRUFBQSxNQUFNLEtBQUssRUFBRSxRQUFRLENBQUN4aEMsTUFBTUEsS0FBS2luQyxFQUFNLFVBQVUsT0FBT2puQyxDQUFDLENBQUM7QUFBQSxFQUFBLENBQy9ELEdBRU9xbUMsRUFBQSxNQUFNLEtBQUssRUFBRSxRQUFRLENBQUNybUMsTUFBTUEsS0FBS2luQyxFQUFNLFVBQVUsSUFBSWpuQyxDQUFDLENBQUMsR0FDakVpbkMsRUFBTSxNQUFNLFVBQVU7QUFDdEIsUUFBTW54QixJQUFZNGIsRUFBSyxhQUFhLElBQUlBLElBQU9BLEVBQUs7QUFDcEQsRUFBQTViLEVBQVUsWUFBWW14QixDQUFLO0FBQzNCLFFBQU0sRUFBRSxjQUFBckUsRUFBQSxJQUFpQmIsR0FBa0JrRixDQUFLO0FBQ2hELFNBQUFueEIsRUFBVSxZQUFZbXhCLENBQUssR0FDcEJyRTtBQUNUO0FBNFVBLE1BQU1zRSxLQUFrQyxnQkFBQTlvQyxHQUFPLEVBQUUsV0FBQXluQyxHQUFBLEdBQWFsSCxFQUFPO0FBQ3JFLElBQUl3STtBQUVKLFNBQVNDLEtBQWlCO0FBQ2pCLFNBQUFELE9BQWFBLEtBQVdoYSxHQUFlK1osRUFBZTtBQUMvRDtBQVlNLE1BQUFHLEtBQVksSUFBSXgvQixNQUFTO0FBQzdCLFFBQU15aEIsSUFBTThkLEdBQUEsRUFBaUIsVUFBVSxHQUFHdi9CLENBQUksR0FLeEMsRUFBRSxPQUFBc1AsTUFBVW1TO0FBQ2QsU0FBQUEsRUFBQSxRQUFRLENBQUNnZSxNQUF3QjtBQUM3QixVQUFBeHhCLElBQVl5eEIsR0FBbUJELENBQW1CO0FBQ3hELFFBQUksQ0FBQ3h4QixFQUFXO0FBQ2hCLFVBQU1pTSxJQUFZdUgsRUFBSTtBQUNsQixJQUFBLENBQUN2cUIsRUFBV2dqQixDQUFTLEtBQUssQ0FBQ0EsRUFBVSxVQUFVLENBQUNBLEVBQVUsYUFDNURBLEVBQVUsV0FBV2pNLEVBQVUsWUFFN0JBLEVBQVUsYUFBYSxNQUN6QkEsRUFBVSxjQUFjO0FBRTFCLFVBQU1qSixJQUFRc0ssRUFBTXJCLEdBQVcsSUFBTzB4QixHQUFxQjF4QixDQUFTLENBQUM7QUFDckUsV0FBSUEsYUFBcUIsWUFDdkJBLEVBQVUsZ0JBQWdCLFNBQVMsR0FDekJBLEVBQUEsYUFBYSxjQUFjLEVBQUUsSUFFbENqSjtBQUFBLEVBQ1QsR0FDT3ljO0FBQ1Q7QUFnQkEsU0FBU2tlLEdBQXFCMXhCLEdBQVc7QUFDdkMsTUFBSUEsYUFBcUI7QUFDaEIsV0FBQTtBQUVULE1BQUksT0FBTyxpQkFBa0IsY0FBY0EsYUFBcUI7QUFDdkQsV0FBQTtBQUVYO0FBb0NBLFNBQVN5eEIsR0FBbUJ6eEIsR0FBVztBQUNqQyxTQUFBOVcsR0FBUzhXLENBQVMsSUFDUixTQUFTLGNBQWNBLENBQVMsSUFhdkNBO0FBQ1Q7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDNdfQ==
