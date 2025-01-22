var le = Object.defineProperty, ce = Object.defineProperties;
var fe = Object.getOwnPropertyDescriptors;
var ee = Object.getOwnPropertySymbols;
var de = Object.prototype.hasOwnProperty, ve = Object.prototype.propertyIsEnumerable;
var te = Math.pow, ne = (e, t, n) => t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, D = (e, t) => {
  for (var n in t || (t = {}))
    de.call(t, n) && ne(e, n, t[n]);
  if (ee)
    for (var n of ee(t))
      ve.call(t, n) && ne(e, n, t[n]);
  return e;
}, re = (e, t) => ce(e, fe(t));
var K = (e, t, n) => new Promise((a, i) => {
  var s = (u) => {
    try {
      r(n.next(u));
    } catch (o) {
      i(o);
    }
  }, l = (u) => {
    try {
      r(n.throw(u));
    } catch (o) {
      i(o);
    }
  }, r = (u) => u.done ? a(u.value) : Promise.resolve(u.value).then(s, l);
  r((n = n.apply(e, t)).next());
});
import { i as me, G as j, r as C, v as G, c as y, x as J, w as X, I as ge } from "./vue-DUZbidQX.js";
const he = {}, pe = Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"), Re = () => he, I = (e) => e, z = (e) => Array.isArray(e), Z = (e) => e !== null && typeof e == "object", k = (e) => e instanceof Function, F = (e) => e == null, q = typeof window == "undefined", ue = () => {
  var e;
  return q || F((e = window.document) === null || e === void 0 ? void 0 : e.visibilityState) ? !0 : window.document.visibilityState === "visible";
}, we = () => {
  var e, t;
  return (e = !q && ((t = window.navigator) === null || t === void 0 ? void 0 : t.onLine)) !== null && e !== void 0 ? e : !0;
}, V = () => new Promise(() => {
}), L = (e) => ge(e) ? e.value : e, Ee = (e) => Z(e) ? Object.assign(z(e) ? [] : {}, e) : e, M = /* @__PURE__ */ new Map(), Te = (e) => F(e) ? void 0 : M.get(e), be = (e, t, n) => {
  const a = M.get(e);
  a != null && a.timer && clearTimeout(a.timer);
  const i = setTimeout(() => M.delete(e), t);
  M.set(e, re(D({}, n), {
    timer: i
  }));
};
function ae(e, t, n) {
  let a, i, s, l, r, u, o = 0, m = !1, f = !1, T = !0;
  const d = !t && t !== 0 && typeof window.requestAnimationFrame == "function";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, Z(n) && (m = !!n.leading, f = "maxWait" in n, s = f ? Math.max(+n.maxWait || 0, t) : s, T = "trailing" in n ? !!n.trailing : T);
  function R(c) {
    const S = a, A = i;
    return a = i = void 0, o = c, l = e.apply(A, S), l;
  }
  function v(c, S) {
    return d ? (window.cancelAnimationFrame(r), window.requestAnimationFrame(c)) : setTimeout(c, S);
  }
  function E(c) {
    if (d)
      return window.cancelAnimationFrame(c);
    clearTimeout(c);
  }
  function g(c) {
    return o = c, r = v(w, t), m ? R(c) : l;
  }
  function p(c) {
    const S = c - u, A = c - o, _ = t - S;
    return f ? Math.min(_, s - A) : _;
  }
  function h(c) {
    const S = c - u, A = c - o;
    return u === void 0 || S >= t || S < 0 || f && A >= s;
  }
  function w() {
    const c = Date.now();
    if (h(c))
      return b(c);
    r = v(w, p(c));
  }
  function b(c) {
    return r = void 0, T && a ? R(c) : (a = i = void 0, l);
  }
  function P() {
    r !== void 0 && E(r), o = 0, a = u = i = r = void 0;
  }
  function x() {
    return r === void 0 ? l : b(Date.now());
  }
  function N() {
    return r !== void 0;
  }
  function O() {
    const c = Date.now(), S = h(c);
    for (var A = arguments.length, _ = new Array(A), W = 0; W < A; W++)
      _[W] = arguments[W];
    if (a = _, i = this, u = c, S) {
      if (r === void 0)
        return g(u);
      if (f)
        return r = v(w, t), R(u);
    }
    return r === void 0 && (r = v(w, t)), l;
  }
  return O.cancel = P, O.flush = x, O.pending = N, O;
}
function Ce(e, t, n) {
  let a = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  return Z(n) && (a = "leading" in n ? !!n.leading : a, i = "trailing" in n ? !!n.trailing : i), ae(e, t, {
    leading: a,
    trailing: i,
    maxWait: t
  });
}
var Se = I((e, t) => {
  let {
    debounceInterval: n,
    debounceOptions: a,
    manual: i
  } = t;
  const s = C(!1), l = C(), r = y(() => a), u = y(() => L(n)), o = C(e.context.runAsync);
  return i || (s.value = !0), J((m) => {
    F(u.value) || (l.value = ae((f) => f(), u.value, r.value), e.context.runAsync = function() {
      for (var f = arguments.length, T = new Array(f), d = 0; d < f; d++)
        T[d] = arguments[d];
      return new Promise((R, v) => {
        s.value ? (s.value = !1, o.value(...T).then(R).catch(v)) : l.value(() => {
          o.value(...T).then(R).catch(v);
        });
      });
    }, m(() => {
      var f;
      (f = l.value) === null || f === void 0 || f.cancel(), e.context.runAsync = o.value;
    }));
  }), {
    onCancel() {
      var m;
      (m = l.value) === null || m === void 0 || m.cancel();
    }
  };
}), Ae = I((e, t) => {
  let {
    errorRetryCount: n = 0,
    errorRetryInterval: a = 0
  } = t;
  const i = C(), s = C(0), l = y(() => L(n)), r = y(() => L(a));
  let u = !1;
  const o = () => {
    s.value = 0;
  }, m = y(() => {
    if (r.value) return r.value;
    const d = 1e3, E = Math.floor(Math.random() * te(2, Math.min(s.value, 9)) + 1);
    return d * E;
  }), f = () => {
    let d;
    const R = l.value === -1, v = s.value < l.value;
    return (R || v) && (R || (s.value += 1), d = setTimeout(() => {
      u = !0, e.context.refresh();
    }, m.value)), () => d && clearTimeout(d);
  }, T = () => {
    i.value && i.value();
  };
  return {
    onBefore() {
      u || o(), u = !1, T();
    },
    onSuccess() {
      o();
    },
    onError() {
      i.value = f();
    },
    onCancel() {
      o(), T();
    }
  };
}), Pe = I((e, t) => {
  let {
    ready: n = C(!0),
    manual: a,
    defaultParams: i = []
  } = t;
  return X(n, (s) => {
    !a && s && e.context.run(...i);
  }, {
    flush: "sync"
  }), {
    onBefore() {
      if (!(k(n) ? n() : n.value))
        return e.loading.value = !1, {
          isBreak: !0
        };
    }
  };
}), ye = I((e, t) => {
  let {
    refreshDeps: n,
    refreshDepsAction: a,
    manual: i
  } = t;
  if (n === void 0 || z(n) && n.length === 0) return {};
  const s = z(n) ? n : [n];
  return X(s, () => {
    a ? a() : !i && e.context.refresh();
  }), {};
}), xe = I((e, t) => {
  let {
    throttleInterval: n,
    throttleOptions: a
  } = t;
  const i = C(), s = y(() => L(n)), l = y(() => a), r = C(e.context.runAsync);
  return J((u) => {
    if (F(n)) return {};
    i.value = Ce((o) => o(), s.value, l.value), e.context.runAsync = function() {
      for (var o = arguments.length, m = new Array(o), f = 0; f < o; f++)
        m[f] = arguments[f];
      return new Promise((T, d) => {
        i.value(() => {
          r.value(...m).then(T).catch(d);
        });
      });
    }, u(() => {
      var o;
      (o = i.value) === null || o === void 0 || o.cancel(), e.context.runAsync = r.value;
    });
  }), {
    onCancel() {
      var u;
      (u = i.value) === null || u === void 0 || u.cancel();
    }
  };
});
const Oe = (e, t) => (n) => {
  Object.keys(n).forEach((a) => {
    e[a].value = n[a];
  }), t.forEach((a) => a(e));
}, Le = (e, t) => () => {
  let n = t;
  for (let a = e.length; a-- > 0; )
    n = e[a](n);
  return n();
}, Ie = (e, t, n) => {
  var a, i;
  const {
    initialData: s,
    onSuccess: l,
    onError: r,
    onBefore: u,
    onAfter: o
  } = t, m = C((a = void 0) !== null && a !== void 0 ? a : !1), f = G((i = void 0) !== null && i !== void 0 ? i : s), T = G(void 0), d = C(void 0), R = C([]), v = G("pending"), E = {}, g = Oe({
    status: v,
    loading: m,
    data: f,
    error: T,
    params: d
  }, []), p = function(w) {
    for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), x = 1; x < b; x++)
      P[x - 1] = arguments[x];
    if (w === "onQuery") {
      const N = R.value.map((O) => O.onQuery).filter(Boolean);
      return {
        servicePromise: Le(N, P[0])()
      };
    } else {
      const N = R.value.map((O) => {
        var c;
        return (c = O[w]) === null || c === void 0 ? void 0 : c.call(O, ...P);
      });
      return Object.assign({}, ...N);
    }
  }, h = C(0);
  return E.runAsync = function() {
    return K(this, arguments, function* () {
      for (var w = arguments.length, b = new Array(w), P = 0; P < w; P++)
        b[P] = arguments[P];
      g({
        loading: !0,
        params: b,
        status: "pending"
      }), h.value += 1;
      const x = h.value, {
        isBreak: N,
        breakResult: O = V()
      } = p("onBefore", b);
      if (N)
        return g({
          status: "settled"
        }), O;
      u == null || u(b);
      try {
        const c = () => new Promise((_) => _(e(...d.value)));
        let {
          servicePromise: S
        } = p("onQuery", c);
        S || (S = c());
        const A = yield S;
        return x !== h.value ? V() : (g({
          data: A,
          loading: !1,
          error: void 0,
          status: "settled"
        }), p("onSuccess", A, b), l == null || l(A, b), x === h.value && p("onAfter", b, A, void 0), o == null || o(b), A);
      } catch (c) {
        if (x !== h.value) return V();
        throw g({
          loading: !1,
          error: c,
          status: "settled"
        }), p("onError", c, b), r == null || r(c, b), x === h.value && p("onAfter", b, void 0, c), o == null || o(b), c;
      }
    });
  }, E.run = function() {
    E.runAsync(...arguments).catch((w) => {
      r || console.error(w);
    });
  }, E.cancel = () => {
    h.value += 1, g({
      loading: !1
    }), p("onCancel");
  }, E.refresh = () => {
    E.run(...d.value || []);
  }, E.refreshAsync = () => E.runAsync(...d.value || []), E.mutate = (w) => {
    const b = k(w) ? w(f.value) : w, P = Ee(b);
    g({
      data: P
    }), p("onMutate", P);
  }, {
    status: v,
    loading: m,
    data: f,
    error: T,
    params: d,
    plugins: R,
    context: E
  };
};
function Ne(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = me(pe, {}), i = D(D(D({}, Re()), a), t), {
    manual: s = !1,
    defaultParams: l = []
  } = i, r = Ie(e, i);
  if (r.plugins.value = n.map((u) => u(r, i)), !s) {
    const u = r.params.value || l;
    r.context.run(...u);
  }
  return j(() => {
    r.context.cancel();
  }), {
    loading: r.loading,
    data: r.data,
    error: r.error,
    params: r.params,
    cancel: r.context.cancel,
    refresh: r.context.refresh,
    refreshAsync: r.context.refreshAsync,
    mutate: r.context.mutate,
    run: r.context.run,
    runAsync: r.context.runAsync
  };
}
const Q = /* @__PURE__ */ new Map(), _e = (e, t) => {
  Q.set(e, t), t.then((n) => (Q.delete(e), n)).catch(() => {
    Q.delete(e);
  });
}, Be = (e) => Q.get(e), B = /* @__PURE__ */ new Map(), De = (e, t) => {
  B.has(e) && B.get(e).forEach((n) => n(t));
}, Fe = (e, t) => (B.has(e) ? B.get(e).push(t) : B.set(e, [t]), () => {
  const n = B.get(e).indexOf(t);
  B.get(e).splice(n, 1);
});
var We = I((e, t) => {
  let {
    cacheKey: n,
    cacheTime: a = 6e5,
    staleTime: i = 0,
    getCache: s,
    setCache: l
  } = t;
  if (!n) return {};
  const r = k(n) ? n : () => n, u = C(() => {
  });
  let o;
  const m = (g) => s ? s(g) : Te(g), f = (g, p, h) => {
    l ? l(g, h) : be(g, p, h), De(g, h.data);
  }, T = (g) => i === -1 || g + i > (/* @__PURE__ */ new Date()).getTime(), d = (g, p) => Object.prototype.hasOwnProperty.call(g, p), R = (g) => {
    const p = r(g);
    return Fe(p, (h) => {
      e.data.value = h;
    });
  }, v = r(), E = m(v);
  return E && d(E, "data") && (e.data.value = E.data, e.params.value = E.params), v && (u.value = R()), j(() => {
    u.value();
  }), {
    onBefore(g) {
      const p = r(g), h = m(p);
      if (!h || !d(h, "data"))
        return {};
      if (T(h.time))
        return e.data.value = h.data, e.loading.value = !1, {
          isBreak: !0,
          breakResult: h.data
        };
      e.data.value = h.data;
    },
    onQuery(g) {
      const p = e.params.value, h = r(p);
      let w = Be(h);
      return w && w !== o ? () => w : (w = g(), o = w, _e(h, w), () => w);
    },
    onSuccess(g, p) {
      const h = r(p);
      h && (u.value(), f(h, a, {
        data: g,
        params: p,
        time: (/* @__PURE__ */ new Date()).getTime()
      }), u.value = R(p));
    },
    onMutate(g) {
      const p = r(e.params.value);
      p && (u.value(), f(p, a, {
        data: g,
        params: e.params.value,
        time: (/* @__PURE__ */ new Date()).getTime()
      }), u.value = R(e.params.value));
    }
  };
});
function Me(e) {
  let t, n;
  class a extends Promise {
    constructor(s) {
      super(s), this.cancel = () => {
        n(), clearTimeout(t);
      };
    }
  }
  return new a((i) => {
    n = i, t = setTimeout(n, e);
  });
}
function U() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var Qe = I((e, t) => {
  let {
    loadingDelay: n = 0,
    loadingKeep: a = 0
  } = t;
  const i = C(() => {
  }), s = y(() => L(n)), l = y(() => L(a));
  let r = 0, u = {};
  const o = () => {
    let m;
    return s.value && (m = setTimeout(() => {
      e.status.value === "pending" && (e.loading.value = !0);
    }, s.value)), () => m && clearTimeout(m);
  };
  return {
    onBefore() {
      e.loading.value = !s.value, i.value(), i.value = o(), r = U();
    },
    onQuery(m) {
      if (!l.value) return () => m();
      u = Me(l.value + s.value);
      const f = () => K(this, null, function* () {
        try {
          const d = yield m();
          return U() - r <= s.value && u.cancel(), Promise.resolve(d);
        } catch (d) {
          return U() - r <= s.value && u.cancel(), Promise.reject(d);
        }
      }), T = Promise.allSettled([f(), u]).then((d) => {
        const R = d[0];
        return R.status === "fulfilled" ? R.value : Promise.reject(R.reason);
      });
      return () => T;
    },
    onCancel() {
      i.value();
    },
    onAfter() {
      i.value();
    }
  };
}), H;
const ie = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set(), $ = (e, t) => {
  let n;
  switch (e) {
    case "FOCUS_LISTENER":
      n = ie;
      break;
    case "RECONNECT_LISTENER":
      n = se;
      break;
    case "VISIBLE_LISTENER":
      n = oe;
      break;
  }
  if (!n.has(t))
    return n.add(t), () => {
      n.delete(t);
    };
}, Y = (e) => {
  e.forEach((t) => {
    t();
  });
};
!q && (H = window) !== null && H !== void 0 && H.addEventListener && (window.addEventListener("visibilitychange", () => {
  ue() && Y(oe);
}, !1), window.addEventListener("focus", () => Y(ie), !1), window.addEventListener("online", () => Y(se), !1));
var $e = I((e, t) => {
  let {
    pollingInterval: n,
    pollingWhenHidden: a = !1,
    pollingWhenOffline: i = !1,
    errorRetryCount: s = 0
  } = t;
  const l = C(), r = C(!1), u = y(() => L(n)), o = y(() => L(s)), m = [], f = (v) => {
    v && m.push(v);
  }, T = () => (
    // pollingWhenHidden = true or pollingWhenHidden = false and document is visibility
    (a || ue()) && // pollingWhenOffline = true or pollingWhenOffline = false and is online
    (i || we())
  ), d = (v) => {
    if (e.error.value && o.value !== 0) return;
    let E;
    if (!F(u.value) && u.value >= 0)
      if (T())
        E = setTimeout(v, u.value);
      else {
        r.value = !0;
        return;
      }
    return () => E && clearTimeout(E);
  }, R = () => {
    r.value && T() && (e.context.refresh(), r.value = !1);
  };
  return X(u, () => {
    l.value && (l.value(), l.value = d(() => e.context.refresh()));
  }), a || f($("VISIBLE_LISTENER", R)), i || f($("RECONNECT_LISTENER", R)), j(() => {
    m.forEach((v) => v());
  }), {
    onBefore() {
      var v;
      (v = l.value) === null || v === void 0 || v.call(l);
    },
    onCancel() {
      var v;
      (v = l.value) === null || v === void 0 || v.call(l);
    },
    onAfter() {
      l.value = d(() => e.context.refresh());
    }
  };
});
const je = (e, t) => {
  let n = !1;
  return function() {
    n || (n = !0, e(...arguments), setTimeout(() => {
      n = !1;
    }, t));
  };
};
var Ke = I((e, t) => {
  let {
    refreshOnWindowFocus: n = !1,
    refocusTimespan: a = 5e3
  } = t;
  const i = y(() => L(n)), s = y(() => L(a)), l = [], r = (o) => {
    o && l.push(o);
  }, u = () => {
    l.forEach((o) => o());
  };
  return J(() => {
    if (u(), i.value) {
      const o = je(e.context.refresh, s.value);
      r($("VISIBLE_LISTENER", o)), r($("FOCUS_LISTENER", o));
    }
  }), j(() => {
    u();
  }), {};
});
function Ue(e, t, n) {
  return Ne(e, t, [Qe, Ae, Se, $e, xe, Ke, ye, Pe, We]);
}
export {
  Ue as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXJlcXVlc3QtQ2pKS0MyLTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtcmVxdWVzdEAyLjAuNF92dWVAMy41LjEzX3R5cGVzY3JpcHRANS42LjNfL25vZGVfbW9kdWxlcy92dWUtcmVxdWVzdC9kaXN0L2luZGV4LmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUmVmLCByZWYsIGNvbXB1dGVkLCB3YXRjaEVmZmVjdCwgd2F0Y2gsIHNoYWxsb3dSZWYsIGluamVjdCwgb25Vbm1vdW50ZWQsIHByb3ZpZGUgfSBmcm9tICd2dWUtZGVtaSc7XG5cbmNvbnN0IEdMT0JBTF9PUFRJT05TID0ge307XG5jb25zdCBHTE9CQUxfT1BUSU9OU19QUk9WSURFX0tFWSA9IFN5bWJvbCgnR0xPQkFMX09QVElPTlNfUFJPVklERV9LRVknKTtcbmNvbnN0IHNldEdsb2JhbE9wdGlvbnMgPSBjb25maWcgPT4ge1xuICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICBHTE9CQUxfT1BUSU9OU1trZXldID0gY29uZmlnW2tleV07XG4gIH0pO1xufTtcbmNvbnN0IGdldEdsb2JhbE9wdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiBHTE9CQUxfT1BUSU9OUztcbn07XG5cbmNvbnN0IGRlZmluZVBsdWdpbiA9IG9wdGlvbnMgPT4ge1xuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmNvbnN0IG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHRvVHlwZVN0cmluZyA9IHZhbCA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbCk7XG5jb25zdCBpc1BsYWluT2JqZWN0ID0gdmFsID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcbmNvbnN0IGlzQXJyYXkgPSB2YWwgPT4gQXJyYXkuaXNBcnJheSh2YWwpO1xuY29uc3QgaXNPYmplY3QgPSB2YWwgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuY29uc3QgaXNGdW5jdGlvbiA9IGZuID0+IGZuIGluc3RhbmNlb2YgRnVuY3Rpb247XG5jb25zdCBpc05pbCA9IHZhbCA9PiB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuY29uc3QgaXNEb2N1bWVudFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIHZhciBfd2luZG93JGRvY3VtZW50O1xuICBpZiAoaXNTZXJ2ZXIgfHwgaXNOaWwoKF93aW5kb3ckZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQpID09PSBudWxsIHx8IF93aW5kb3ckZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF93aW5kb3ckZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZSc7XG59O1xuY29uc3QgaXNPbmxpbmUgPSAoKSA9PiB7XG4gIHZhciBfcmVmLCBfd2luZG93JG5hdmlnYXRvcjtcbiAgcmV0dXJuIChfcmVmID0gIWlzU2VydmVyICYmICgoX3dpbmRvdyRuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yKSA9PT0gbnVsbCB8fCBfd2luZG93JG5hdmlnYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRuYXZpZ2F0b3Iub25MaW5lKSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IHRydWU7XG59O1xuY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKHNvdXJjZSwgcGF0aCkge1xuICBsZXQgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIC8vIGFbM10uYiAtPiBhLjMuYlxuICBjb25zdCBwYXRocyA9IHBhdGgucmVwbGFjZSgvXFxbKFxcZCspXFxdL2csICcuJDEnKS5zcGxpdCgnLicpO1xuICBsZXQgcmVzdWx0ID0gc291cmNlO1xuICBmb3IgKGNvbnN0IHAgb2YgcGF0aHMpIHtcbiAgICByZXN1bHQgPSBPYmplY3QocmVzdWx0KVtwXTtcbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZnVuY3Rpb24gb21pdChvYmplY3QsIGtleXMpIHtcbiAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0KTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuY29uc3Qgd2FybmluZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGxldCB0aHJvd0Vycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgY29uc3QgbXNnID0gYFdhcm5pbmc6IFt2dWUtcmVxdWVzdF0gJHttZXNzYWdlfWA7XG4gIGlmICh0aHJvd0Vycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihtc2cpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgfVxufTtcbmNvbnN0IHJlZlRvUmF3ID0gdmFsdWUgPT4ge1xuICByZXR1cm4gaXNSZWYodmFsdWUpID8gdmFsdWUudmFsdWUgOiB2YWx1ZTtcbn07XG5jb25zdCBzaGFsbG93Q29weSA9IHZhbHVlID0+IHtcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGlzQXJyYXkodmFsdWUpID8gW10gOiB7fSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgQ0FDSEVfTUFQID0gbmV3IE1hcCgpO1xuY29uc3QgZ2V0Q2FjaGUgPSBjYWNoZUtleSA9PiB7XG4gIGlmIChpc05pbChjYWNoZUtleSkpIHJldHVybjtcbiAgY29uc3QgZGF0YSA9IENBQ0hFX01BUC5nZXQoY2FjaGVLZXkpO1xuICByZXR1cm4gZGF0YTtcbn07XG5jb25zdCBzZXRDYWNoZSA9IChjYWNoZUtleSwgY2FjaGVUaW1lLCBkYXRhKSA9PiB7XG4gIGNvbnN0IG9sZENhY2hlID0gQ0FDSEVfTUFQLmdldChjYWNoZUtleSk7XG4gIGlmIChvbGRDYWNoZSAhPT0gbnVsbCAmJiBvbGRDYWNoZSAhPT0gdm9pZCAwICYmIG9sZENhY2hlLnRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KG9sZENhY2hlLnRpbWVyKTtcbiAgfVxuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gQ0FDSEVfTUFQLmRlbGV0ZShjYWNoZUtleSksIGNhY2hlVGltZSk7XG4gIENBQ0hFX01BUC5zZXQoY2FjaGVLZXksIHtcbiAgICAuLi5kYXRhLFxuICAgIHRpbWVyXG4gIH0pO1xufTtcbmNvbnN0IGNsZWFyQ2FjaGUgPSBjYWNoZUtleSA9PiB7XG4gIGlmIChjYWNoZUtleSkge1xuICAgIHZhciBfQ0FDSEVfTUFQJGdldDtcbiAgICBjb25zdCB0aW1lciA9IChfQ0FDSEVfTUFQJGdldCA9IENBQ0hFX01BUC5nZXQoY2FjaGVLZXkpKSA9PT0gbnVsbCB8fCBfQ0FDSEVfTUFQJGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX0NBQ0hFX01BUCRnZXQudGltZXI7XG4gICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBDQUNIRV9NQVAuZGVsZXRlKGNhY2hlS2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciB0aW1lclxuICAgIENBQ0hFX01BUC5mb3JFYWNoKGkgPT4gaS50aW1lciAmJiBjbGVhclRpbWVvdXQoaS50aW1lcikpO1xuICAgIENBQ0hFX01BUC5jbGVhcigpO1xuICB9XG59O1xuXG4vKipcclxuICogc291cmNlIGJ5IGBsb2Rhc2hgXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoLmdpdFxyXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgbGV0IGxhc3RBcmdzLCBsYXN0VGhpcywgbWF4V2FpdCwgcmVzdWx0LCB0aW1lcklkLCBsYXN0Q2FsbFRpbWU7XG4gIGxldCBsYXN0SW52b2tlVGltZSA9IDA7XG4gIGxldCBsZWFkaW5nID0gZmFsc2U7XG4gIGxldCBtYXhpbmcgPSBmYWxzZTtcbiAgbGV0IHRyYWlsaW5nID0gdHJ1ZTtcbiAgLy8gQnlwYXNzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGJ5IGV4cGxpY2l0bHkgc2V0dGluZyBgd2FpdD0wYC5cbiAgY29uc3QgdXNlUkFGID0gIXdhaXQgJiYgd2FpdCAhPT0gMCAmJiB0eXBlb2Ygd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmdW5jdGlvbicpO1xuICB9XG4gIHdhaXQgPSArd2FpdCB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IE1hdGgubWF4KCtvcHRpb25zLm1heFdhaXQgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgY29uc3QgYXJncyA9IGxhc3RBcmdzO1xuICAgIGNvbnN0IHRoaXNBcmcgPSBsYXN0VGhpcztcbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUaW1lcihwZW5kaW5nRnVuYywgd2FpdCkge1xuICAgIGlmICh1c2VSQUYpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lcklkKTtcbiAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBlbmRpbmdGdW5jKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQocGVuZGluZ0Z1bmMsIHdhaXQpO1xuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbFRpbWVyKGlkKSB7XG4gICAgaWYgKHVzZVJBRikge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgfVxuICAgIGNsZWFyVGltZW91dChpZCk7XG4gIH1cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHN0YXJ0VGltZXIodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgY29uc3QgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lO1xuICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG4gICAgY29uc3QgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG4gICAgcmV0dXJuIG1heGluZyA/IE1hdGgubWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiB0aW1lV2FpdGluZztcbiAgfVxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZTtcbiAgICBjb25zdCB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8IHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQgfHwgdGltZVNpbmNlTGFzdENhbGwgPCAwIHx8IG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQ7XG4gIH1cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzdGFydFRpbWVyKHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbFRpbWVyKHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShEYXRlLm5vdygpKTtcbiAgfVxuICBmdW5jdGlvbiBwZW5kaW5nKCkge1xuICAgIHJldHVybiB0aW1lcklkICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzdGFydFRpbWVyKHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzdGFydFRpbWVyKHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIGRlYm91bmNlZC5wZW5kaW5nID0gcGVuZGluZztcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuZnVuY3Rpb24gYmFzZU1lcmdlKG9yaWdpbiwgdGFyZ2V0KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFpc09iamVjdCh0YXJnZXRba2V5XSkgfHxcbiAgICAvLyBgdGFyZ2V0W2tleV1gIGlzIG5vdCBhbiBvYmplY3RcbiAgICAhaXNPYmplY3Qob3JpZ2luW2tleV0pIHx8XG4gICAgLy8gYHRhcmdldFtrZXldYCBpcyBub3QgYW4gb2JqZWN0XG4gICAgIShrZXkgaW4gb3JpZ2luKSAvLyBga2V5YCBpcyBub3QgaW4gdGhlIG9yaWdpbiBvYmplY3RcbiAgICApIHtcbiAgICAgIG9yaWdpbltrZXldID0gdGFyZ2V0W2tleV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pIHx8IGlzQXJyYXkodGFyZ2V0W2tleV0pKSB7XG4gICAgICBiYXNlTWVyZ2Uob3JpZ2luW2tleV0sIHRhcmdldFtrZXldKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1lcmdlKG9yaWdpbikge1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW4pO1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgb3RoZXJzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBvdGhlcnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIGlmICghb3RoZXJzLmxlbmd0aCkgcmV0dXJuIHJlc3VsdDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIG90aGVycykge1xuICAgIGJhc2VNZXJnZShyZXN1bHQsIGl0ZW0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxyXG4gKiBzb3VyY2UgYnkgYGxvZGFzaGBcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2guZ2l0XHJcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICBsZXQgbGVhZGluZyA9IHRydWU7XG4gIGxldCB0cmFpbGluZyA9IHRydWU7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgZnVuY3Rpb24nKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgIGxlYWRpbmcsXG4gICAgdHJhaWxpbmcsXG4gICAgbWF4V2FpdDogd2FpdFxuICB9KTtcbn1cblxudmFyIHVzZURlYm91bmNlUGx1Z2luID0gZGVmaW5lUGx1Z2luKChxdWVyeUluc3RhbmNlLCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgZGVib3VuY2VJbnRlcnZhbCxcbiAgICBkZWJvdW5jZU9wdGlvbnMsXG4gICAgbWFudWFsXG4gIH0gPSBfcmVmO1xuICBjb25zdCBpbml0aWFsQXV0b1J1bkZsYWcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBkZWJvdW5jZWRSdW4gPSByZWYoKTtcbiAgY29uc3QgZGVib3VuY2VPcHRpb25zUmVmID0gY29tcHV0ZWQoKCkgPT4gZGVib3VuY2VPcHRpb25zKTtcbiAgY29uc3QgZGVib3VuY2VJbnRlcnZhbFJlZiA9IGNvbXB1dGVkKCgpID0+IHJlZlRvUmF3KGRlYm91bmNlSW50ZXJ2YWwpKTtcbiAgY29uc3Qgb3JpZ2luUnVuUmVmID0gcmVmKHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW5Bc3luYyk7XG4gIGlmICghbWFudWFsKSB7XG4gICAgaW5pdGlhbEF1dG9SdW5GbGFnLnZhbHVlID0gdHJ1ZTtcbiAgfVxuICB3YXRjaEVmZmVjdChvbkludmFsaWRhdGUgPT4ge1xuICAgIGlmIChpc05pbChkZWJvdW5jZUludGVydmFsUmVmLnZhbHVlKSkgcmV0dXJuO1xuICAgIGRlYm91bmNlZFJ1bi52YWx1ZSA9IGRlYm91bmNlKGNhbGxiYWNrID0+IGNhbGxiYWNrKCksIGRlYm91bmNlSW50ZXJ2YWxSZWYudmFsdWUsIGRlYm91bmNlT3B0aW9uc1JlZi52YWx1ZSk7XG4gICAgcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJ1bkFzeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAoaW5pdGlhbEF1dG9SdW5GbGFnLnZhbHVlKSB7XG4gICAgICAgICAgaW5pdGlhbEF1dG9SdW5GbGFnLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgb3JpZ2luUnVuUmVmLnZhbHVlKC4uLmFyZ3MpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJvdW5jZWRSdW4udmFsdWUoKCkgPT4ge1xuICAgICAgICAgICAgb3JpZ2luUnVuUmVmLnZhbHVlKC4uLmFyZ3MpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBvbkludmFsaWRhdGUoKCkgPT4ge1xuICAgICAgdmFyIF9kZWJvdW5jZWRSdW4kdmFsdWU7XG4gICAgICAoX2RlYm91bmNlZFJ1biR2YWx1ZSA9IGRlYm91bmNlZFJ1bi52YWx1ZSkgPT09IG51bGwgfHwgX2RlYm91bmNlZFJ1biR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlYm91bmNlZFJ1biR2YWx1ZS5jYW5jZWwoKTtcbiAgICAgIHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW5Bc3luYyA9IG9yaWdpblJ1blJlZi52YWx1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb25DYW5jZWwoKSB7XG4gICAgICB2YXIgX2RlYm91bmNlZFJ1biR2YWx1ZTI7XG4gICAgICAoX2RlYm91bmNlZFJ1biR2YWx1ZTIgPSBkZWJvdW5jZWRSdW4udmFsdWUpID09PSBudWxsIHx8IF9kZWJvdW5jZWRSdW4kdmFsdWUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVib3VuY2VkUnVuJHZhbHVlMi5jYW5jZWwoKTtcbiAgICB9XG4gIH07XG59KTtcblxudmFyIHVzZUVycm9yUmV0cnlQbHVnaW4gPSBkZWZpbmVQbHVnaW4oKHF1ZXJ5SW5zdGFuY2UsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBlcnJvclJldHJ5Q291bnQgPSAwLFxuICAgIGVycm9yUmV0cnlJbnRlcnZhbCA9IDBcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHJldHJ5VGltZXIgPSByZWYoKTtcbiAgY29uc3QgcmV0cmllZENvdW50ID0gcmVmKDApO1xuICBjb25zdCBlcnJvclJldHJ5Q291bnRSZWYgPSBjb21wdXRlZCgoKSA9PiByZWZUb1JhdyhlcnJvclJldHJ5Q291bnQpKTtcbiAgY29uc3QgZXJyb3JSZXRyeUludGVydmFsUmVmID0gY29tcHV0ZWQoKCkgPT4gcmVmVG9SYXcoZXJyb3JSZXRyeUludGVydmFsKSk7XG4gIGxldCBpc1JldHJ5aW5nID0gZmFsc2U7XG4gIC8vIHJlc2V0IHJldHJpZWQgY291bnRcbiAgY29uc3QgcmVzZXRSZXRyaWVkQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0cmllZENvdW50LnZhbHVlID0gMDtcbiAgfTtcbiAgY29uc3QgYWN0dWFsRXJyb3JSZXRyeUludGVydmFsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChlcnJvclJldHJ5SW50ZXJ2YWxSZWYudmFsdWUpIHJldHVybiBlcnJvclJldHJ5SW50ZXJ2YWxSZWYudmFsdWU7XG4gICAgY29uc3QgYmFzZVRpbWUgPSAxMDAwO1xuICAgIGNvbnN0IG1pbkNvZWZmaWNpZW50ID0gMTtcbiAgICBjb25zdCBtYXhDb2VmZmljaWVudCA9IDk7XG4gICAgLy8gV2hlbiByZXRyeWluZyBmb3IgdGhlIGZpcnN0IHRpbWUsIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBjb2VmZmljaWVudCBiZWluZyAwXG4gICAgLy8gc28gcmVwbGFjZSAwIHdpdGggMiwgdGhlIGNvZWZmaWNpZW50IHJhbmdlIHdpbGwgYmVjb21lIDEgLSAyXG4gICAgY29uc3QgY29lZmZpY2llbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICoqIE1hdGgubWluKHJldHJpZWRDb3VudC52YWx1ZSwgbWF4Q29lZmZpY2llbnQpICsgbWluQ29lZmZpY2llbnQpO1xuICAgIHJldHVybiBiYXNlVGltZSAqIGNvZWZmaWNpZW50O1xuICB9KTtcbiAgY29uc3QgZXJyb3JSZXRyeUhvb2tzID0gKCkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIGNvbnN0IGlzSW5maW5pdGVSZXRyeSA9IGVycm9yUmV0cnlDb3VudFJlZi52YWx1ZSA9PT0gLTE7XG4gICAgY29uc3QgaGFzUmV0cnlDb3VudCA9IHJldHJpZWRDb3VudC52YWx1ZSA8IGVycm9yUmV0cnlDb3VudFJlZi52YWx1ZTtcbiAgICAvLyBpZiBlcnJvclJldHJ5Q291bnQgaXMgLTEsIGl0IHdpbGwgcmV0cnkgdGhlIHJlcXVlc3QgdW50aWwgaXQgc3VjY2Vzc1xuICAgIGlmIChpc0luZmluaXRlUmV0cnkgfHwgaGFzUmV0cnlDb3VudCkge1xuICAgICAgaWYgKCFpc0luZmluaXRlUmV0cnkpIHJldHJpZWRDb3VudC52YWx1ZSArPSAxO1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpc1JldHJ5aW5nID0gdHJ1ZTtcbiAgICAgICAgcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJlZnJlc2goKTtcbiAgICAgIH0sIGFjdHVhbEVycm9yUmV0cnlJbnRlcnZhbC52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB0aW1lcklkICYmIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgfTtcbiAgLy8gY2xlYXIgcmV0cnlUaW1lclxuICBjb25zdCBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgIGlmIChyZXRyeVRpbWVyLnZhbHVlKSB7XG4gICAgICByZXRyeVRpbWVyLnZhbHVlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIG9uQmVmb3JlKCkge1xuICAgICAgaWYgKCFpc1JldHJ5aW5nKSB7XG4gICAgICAgIHJlc2V0UmV0cmllZENvdW50KCk7XG4gICAgICB9XG4gICAgICBpc1JldHJ5aW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVyKCk7XG4gICAgfSxcbiAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICByZXNldFJldHJpZWRDb3VudCgpO1xuICAgIH0sXG4gICAgb25FcnJvcigpIHtcbiAgICAgIHJldHJ5VGltZXIudmFsdWUgPSBlcnJvclJldHJ5SG9va3MoKTtcbiAgICB9LFxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgLy8gVE9ETzogV2hldGhlciB0byByZXNldCB0aGUgY291bnQgd2hlbiBgb25DYW5jZWxgXG4gICAgICByZXNldFJldHJpZWRDb3VudCgpO1xuICAgICAgY2xlYXJUaW1lcigpO1xuICAgIH1cbiAgfTtcbn0pO1xuXG52YXIgdXNlUmVhZHlQbHVnaW4gPSBkZWZpbmVQbHVnaW4oKHF1ZXJ5SW5zdGFuY2UsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICByZWFkeSA9IHJlZih0cnVlKSxcbiAgICBtYW51YWwsXG4gICAgZGVmYXVsdFBhcmFtcyA9IFtdXG4gIH0gPSBfcmVmO1xuICAvLyB3YXRjaCByZWFkeVxuICB3YXRjaChyZWFkeSwgdmFsID0+IHtcbiAgICBpZiAoIW1hbnVhbCAmJiB2YWwpIHtcbiAgICAgIHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW4oLi4uZGVmYXVsdFBhcmFtcyk7XG4gICAgfVxuICB9LCB7XG4gICAgZmx1c2g6ICdzeW5jJ1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBvbkJlZm9yZSgpIHtcbiAgICAgIGNvbnN0IHJlYWR5RmxhZyA9IGlzRnVuY3Rpb24ocmVhZHkpID8gcmVhZHkoKSA6IHJlYWR5LnZhbHVlO1xuICAgICAgaWYgKCFyZWFkeUZsYWcpIHtcbiAgICAgICAgcXVlcnlJbnN0YW5jZS5sb2FkaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG52YXIgdXNlUmVmcmVzaERlcHNQbHVnaW4gPSBkZWZpbmVQbHVnaW4oKHF1ZXJ5SW5zdGFuY2UsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICByZWZyZXNoRGVwcyxcbiAgICByZWZyZXNoRGVwc0FjdGlvbixcbiAgICBtYW51YWxcbiAgfSA9IF9yZWY7XG4gIGlmIChyZWZyZXNoRGVwcyA9PT0gdW5kZWZpbmVkIHx8IGlzQXJyYXkocmVmcmVzaERlcHMpICYmIHJlZnJlc2hEZXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHt9O1xuICBjb25zdCBkZXBzID0gaXNBcnJheShyZWZyZXNoRGVwcykgPyByZWZyZXNoRGVwcyA6IFtyZWZyZXNoRGVwc107XG4gIC8vIHdhdGNoIHJlZnJlc2hEZXBzXG4gIHdhdGNoKGRlcHMsICgpID0+IHtcbiAgICBpZiAocmVmcmVzaERlcHNBY3Rpb24pIHtcbiAgICAgIHJlZnJlc2hEZXBzQWN0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICFtYW51YWwgJiYgcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJlZnJlc2goKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge307XG59KTtcblxudmFyIHVzZVRocm90dGxlUGx1Z2luID0gZGVmaW5lUGx1Z2luKChxdWVyeUluc3RhbmNlLCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgdGhyb3R0bGVJbnRlcnZhbCxcbiAgICB0aHJvdHRsZU9wdGlvbnNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHRocm90dGxlZFJ1biA9IHJlZigpO1xuICBjb25zdCB0aHJvdHRsZUludGVydmFsUmVmID0gY29tcHV0ZWQoKCkgPT4gcmVmVG9SYXcodGhyb3R0bGVJbnRlcnZhbCkpO1xuICBjb25zdCB0aHJvdHRsZU9wdGlvbnNSZWYgPSBjb21wdXRlZCgoKSA9PiB0aHJvdHRsZU9wdGlvbnMpO1xuICBjb25zdCBvcmlnaW5SdW5SZWYgPSByZWYocXVlcnlJbnN0YW5jZS5jb250ZXh0LnJ1bkFzeW5jKTtcbiAgd2F0Y2hFZmZlY3Qob25JbnZhbGlkYXRlID0+IHtcbiAgICBpZiAoaXNOaWwodGhyb3R0bGVJbnRlcnZhbCkpIHJldHVybiB7fTtcbiAgICB0aHJvdHRsZWRSdW4udmFsdWUgPSB0aHJvdHRsZShjYWxsYmFjayA9PiBjYWxsYmFjaygpLCB0aHJvdHRsZUludGVydmFsUmVmLnZhbHVlLCB0aHJvdHRsZU9wdGlvbnNSZWYudmFsdWUpO1xuICAgIHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW5Bc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhyb3R0bGVkUnVuLnZhbHVlKCgpID0+IHtcbiAgICAgICAgICBvcmlnaW5SdW5SZWYudmFsdWUoLi4uYXJncykudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgb25JbnZhbGlkYXRlKCgpID0+IHtcbiAgICAgIHZhciBfdGhyb3R0bGVkUnVuJHZhbHVlO1xuICAgICAgKF90aHJvdHRsZWRSdW4kdmFsdWUgPSB0aHJvdHRsZWRSdW4udmFsdWUpID09PSBudWxsIHx8IF90aHJvdHRsZWRSdW4kdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aHJvdHRsZWRSdW4kdmFsdWUuY2FuY2VsKCk7XG4gICAgICBxdWVyeUluc3RhbmNlLmNvbnRleHQucnVuQXN5bmMgPSBvcmlnaW5SdW5SZWYudmFsdWU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgdmFyIF90aHJvdHRsZWRSdW4kdmFsdWUyO1xuICAgICAgKF90aHJvdHRsZWRSdW4kdmFsdWUyID0gdGhyb3R0bGVkUnVuLnZhbHVlKSA9PT0gbnVsbCB8fCBfdGhyb3R0bGVkUnVuJHZhbHVlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Rocm90dGxlZFJ1biR2YWx1ZTIuY2FuY2VsKCk7XG4gICAgfVxuICB9O1xufSk7XG5cbmNvbnN0IHNldFN0YXRlQmluZCA9IChvbGRTdGF0ZSwgcHVibGljQ2IpID0+IHtcbiAgcmV0dXJuIG5ld1N0YXRlID0+IHtcbiAgICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgb2xkU3RhdGVba2V5XS52YWx1ZSA9IG5ld1N0YXRlW2tleV07XG4gICAgfSk7XG4gICAgcHVibGljQ2IuZm9yRWFjaChmdW4gPT4gZnVuKG9sZFN0YXRlKSk7XG4gIH07XG59O1xuY29uc3QgY29tcG9zZU1pZGRsZXdhcmUgPSAobWlkZGxlQXJyYXksIGhvb2spID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgbmV4dCA9IGhvb2s7XG4gICAgZm9yIChsZXQgaSA9IG1pZGRsZUFycmF5Lmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIG5leHQgPSBtaWRkbGVBcnJheVtpXShuZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfTtcbn07XG5jb25zdCBjcmVhdGVRdWVyeSA9IChzZXJ2aWNlLCBjb25maWcsIGluaXRpYWxTdGF0ZSkgPT4ge1xuICB2YXIgX2luaXRpYWxTdGF0ZSRsb2FkaW5nLCBfaW5pdGlhbFN0YXRlJGRhdGE7XG4gIGNvbnN0IHtcbiAgICBpbml0aWFsRGF0YSxcbiAgICBvblN1Y2Nlc3MsXG4gICAgb25FcnJvcixcbiAgICBvbkJlZm9yZSxcbiAgICBvbkFmdGVyXG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IGxvYWRpbmcgPSByZWYoKF9pbml0aWFsU3RhdGUkbG9hZGluZyA9IGluaXRpYWxTdGF0ZSA9PT0gbnVsbCB8fCBpbml0aWFsU3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXRpYWxTdGF0ZS5sb2FkaW5nKSAhPT0gbnVsbCAmJiBfaW5pdGlhbFN0YXRlJGxvYWRpbmcgIT09IHZvaWQgMCA/IF9pbml0aWFsU3RhdGUkbG9hZGluZyA6IGZhbHNlKTtcbiAgY29uc3QgZGF0YSA9IHNoYWxsb3dSZWYoKF9pbml0aWFsU3RhdGUkZGF0YSA9IGluaXRpYWxTdGF0ZSA9PT0gbnVsbCB8fCBpbml0aWFsU3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXRpYWxTdGF0ZS5kYXRhKSAhPT0gbnVsbCAmJiBfaW5pdGlhbFN0YXRlJGRhdGEgIT09IHZvaWQgMCA/IF9pbml0aWFsU3RhdGUkZGF0YSA6IGluaXRpYWxEYXRhKTtcbiAgY29uc3QgZXJyb3IgPSBzaGFsbG93UmVmKGluaXRpYWxTdGF0ZSA9PT0gbnVsbCB8fCBpbml0aWFsU3RhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXRpYWxTdGF0ZS5lcnJvcik7XG4gIGNvbnN0IHBhcmFtcyA9IHJlZihpbml0aWFsU3RhdGUgPT09IG51bGwgfHwgaW5pdGlhbFN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbml0aWFsU3RhdGUucGFyYW1zKTtcbiAgY29uc3QgcGx1Z2lucyA9IHJlZihbXSk7XG4gIGNvbnN0IHN0YXR1cyA9IHNoYWxsb3dSZWYoJ3BlbmRpbmcnKTtcbiAgY29uc3QgY29udGV4dCA9IHt9O1xuICBjb25zdCBzZXRTdGF0ZSA9IHNldFN0YXRlQmluZCh7XG4gICAgc3RhdHVzLFxuICAgIGxvYWRpbmcsXG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBwYXJhbXNcbiAgfSwgW10pO1xuICBjb25zdCBlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChldmVudCA9PT0gJ29uUXVlcnknKSB7XG4gICAgICBjb25zdCBxdWVyeUZuID0gcGx1Z2lucy52YWx1ZS5tYXAoaSA9PiBpLm9uUXVlcnkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZpY2VQcm9taXNlOiBjb21wb3NlTWlkZGxld2FyZShxdWVyeUZuLCBhcmdzWzBdKSgpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCByZXMgPSBwbHVnaW5zLnZhbHVlLm1hcChpID0+IHtcbiAgICAgICAgdmFyIF9pJGV2ZW50O1xuICAgICAgICByZXR1cm4gKF9pJGV2ZW50ID0gaVtldmVudF0pID09PSBudWxsIHx8IF9pJGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaSRldmVudC5jYWxsKGksIC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgLi4ucmVzKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvdW50ID0gcmVmKDApO1xuICBjb250ZXh0LnJ1bkFzeW5jID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgcGFyYW1zOiBhcmdzLFxuICAgICAgc3RhdHVzOiAncGVuZGluZydcbiAgICB9KTtcbiAgICBjb3VudC52YWx1ZSArPSAxO1xuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGNvdW50LnZhbHVlO1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQnJlYWssXG4gICAgICBicmVha1Jlc3VsdCA9IHJlc29sdmVkUHJvbWlzZSgpXG4gICAgfSA9IGVtaXQoJ29uQmVmb3JlJywgYXJncyk7XG4gICAgaWYgKGlzQnJlYWspIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiAnc2V0dGxlZCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJyZWFrUmVzdWx0O1xuICAgIH1cbiAgICBvbkJlZm9yZSA9PT0gbnVsbCB8fCBvbkJlZm9yZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25CZWZvcmUoYXJncyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcnZpY2VXcmFwcGVyID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKHNlcnZpY2UoLi4ucGFyYW1zLnZhbHVlKSkpO1xuICAgICAgbGV0IHtcbiAgICAgICAgc2VydmljZVByb21pc2VcbiAgICAgIH0gPSBlbWl0KCdvblF1ZXJ5Jywgc2VydmljZVdyYXBwZXIpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICghc2VydmljZVByb21pc2UpIHtcbiAgICAgICAgc2VydmljZVByb21pc2UgPSBzZXJ2aWNlV3JhcHBlcigpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2VydmljZVByb21pc2U7XG4gICAgICBpZiAoY3VycmVudENvdW50ICE9PSBjb3VudC52YWx1ZSkgcmV0dXJuIHJlc29sdmVkUHJvbWlzZSgpO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiByZXMsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBzdGF0dXM6ICdzZXR0bGVkJ1xuICAgICAgfSk7XG4gICAgICBlbWl0KCdvblN1Y2Nlc3MnLCByZXMsIGFyZ3MpO1xuICAgICAgb25TdWNjZXNzID09PSBudWxsIHx8IG9uU3VjY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25TdWNjZXNzKHJlcywgYXJncyk7XG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSBjb3VudC52YWx1ZSkge1xuICAgICAgICBlbWl0KCdvbkFmdGVyJywgYXJncywgcmVzLCB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgICAgb25BZnRlciA9PT0gbnVsbCB8fCBvbkFmdGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkFmdGVyKGFyZ3MpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCAhPT0gY291bnQudmFsdWUpIHJldHVybiByZXNvbHZlZFByb21pc2UoKTtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgc3RhdHVzOiAnc2V0dGxlZCdcbiAgICAgIH0pO1xuICAgICAgZW1pdCgnb25FcnJvcicsIGVycm9yLCBhcmdzKTtcbiAgICAgIG9uRXJyb3IgPT09IG51bGwgfHwgb25FcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25FcnJvcihlcnJvciwgYXJncyk7XG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSBjb3VudC52YWx1ZSkge1xuICAgICAgICBlbWl0KCdvbkFmdGVyJywgYXJncywgdW5kZWZpbmVkLCBlcnJvcik7XG4gICAgICB9XG4gICAgICBvbkFmdGVyID09PSBudWxsIHx8IG9uQWZ0ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQWZ0ZXIoYXJncyk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG4gIGNvbnRleHQucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRleHQucnVuQXN5bmMoLi4uYXJndW1lbnRzKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBpZiAoIW9uRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnRleHQuY2FuY2VsID0gKCkgPT4ge1xuICAgIGNvdW50LnZhbHVlICs9IDE7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KTtcbiAgICBlbWl0KCdvbkNhbmNlbCcpO1xuICB9O1xuICBjb250ZXh0LnJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29udGV4dC5ydW4oLi4uKHBhcmFtcy52YWx1ZSB8fCBbXSkpO1xuICB9O1xuICBjb250ZXh0LnJlZnJlc2hBc3luYyA9ICgpID0+IHtcbiAgICByZXR1cm4gY29udGV4dC5ydW5Bc3luYyguLi4ocGFyYW1zLnZhbHVlIHx8IFtdKSk7XG4gIH07XG4gIGNvbnRleHQubXV0YXRlID0geCA9PiB7XG4gICAgY29uc3QgbXV0YXRlRGF0YSA9IGlzRnVuY3Rpb24oeCkgPyB4KGRhdGEudmFsdWUpIDogeDtcbiAgICBjb25zdCBfbXV0YXRlRGF0YSA9IHNoYWxsb3dDb3B5KG11dGF0ZURhdGEpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGRhdGE6IF9tdXRhdGVEYXRhXG4gICAgfSk7XG4gICAgZW1pdCgnb25NdXRhdGUnLCBfbXV0YXRlRGF0YSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgc3RhdHVzLFxuICAgIGxvYWRpbmcsXG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBwYXJhbXMsXG4gICAgcGx1Z2lucyxcbiAgICBjb250ZXh0XG4gIH07XG59O1xuXG5mdW5jdGlvbiB1c2VRdWVyeShzZXJ2aWNlKSB7XG4gIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgbGV0IHBsdWdpbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgaW5qZWN0ZWRHbG9iYWxPcHRpb25zID0gaW5qZWN0KEdMT0JBTF9PUFRJT05TX1BST1ZJREVfS0VZLCB7fSk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5nZXRHbG9iYWxPcHRpb25zKCksXG4gICAgLi4uaW5qZWN0ZWRHbG9iYWxPcHRpb25zLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3Qge1xuICAgIG1hbnVhbCA9IGZhbHNlLFxuICAgIGRlZmF1bHRQYXJhbXMgPSBbXVxuICB9ID0gY29uZmlnO1xuICBjb25zdCBxdWVyeUluc3RhbmNlID0gY3JlYXRlUXVlcnkoc2VydmljZSwgY29uZmlnKTtcbiAgcXVlcnlJbnN0YW5jZS5wbHVnaW5zLnZhbHVlID0gcGx1Z2lucy5tYXAoaSA9PiBpKHF1ZXJ5SW5zdGFuY2UsIGNvbmZpZykpO1xuICAvLyBpbml0aWFsIHJ1blxuICBpZiAoIW1hbnVhbCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5SW5zdGFuY2UucGFyYW1zLnZhbHVlIHx8IGRlZmF1bHRQYXJhbXM7XG4gICAgcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJ1biguLi5wYXJhbXMpO1xuICB9XG4gIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICBxdWVyeUluc3RhbmNlLmNvbnRleHQuY2FuY2VsKCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGxvYWRpbmc6IHF1ZXJ5SW5zdGFuY2UubG9hZGluZyxcbiAgICBkYXRhOiBxdWVyeUluc3RhbmNlLmRhdGEsXG4gICAgZXJyb3I6IHF1ZXJ5SW5zdGFuY2UuZXJyb3IsXG4gICAgcGFyYW1zOiBxdWVyeUluc3RhbmNlLnBhcmFtcyxcbiAgICBjYW5jZWw6IHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5jYW5jZWwsXG4gICAgcmVmcmVzaDogcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJlZnJlc2gsXG4gICAgcmVmcmVzaEFzeW5jOiBxdWVyeUluc3RhbmNlLmNvbnRleHQucmVmcmVzaEFzeW5jLFxuICAgIG11dGF0ZTogcXVlcnlJbnN0YW5jZS5jb250ZXh0Lm11dGF0ZSxcbiAgICBydW46IHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW4sXG4gICAgcnVuQXN5bmM6IHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5ydW5Bc3luY1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VMb2FkTW9yZShzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBpc05vTW9yZSxcbiAgICAuLi5yZXN0T3B0aW9uc1xuICB9ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge307XG4gIGNvbnN0IGRhdGEgPSBzaGFsbG93UmVmKCk7XG4gIGNvbnN0IGRhdGFMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHZhciBfZGF0YSR2YWx1ZTtcbiAgICByZXR1cm4gKChfZGF0YSR2YWx1ZSA9IGRhdGEudmFsdWUpID09PSBudWxsIHx8IF9kYXRhJHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGF0YSR2YWx1ZS5saXN0KSB8fCBbXTtcbiAgfSk7XG4gIGNvbnN0IGxvYWRpbmdNb3JlID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgaXNUcmlnZ2VyQnlMb2FkTW9yZSA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGNvdW50ID0gcmVmKDApO1xuICBjb25zdCB7XG4gICAgcnVuQXN5bmMsXG4gICAgcnVuLFxuICAgIGNhbmNlbDogX2NhbmNlbCxcbiAgICAuLi5yZXN0XG4gIH0gPSB1c2VRdWVyeShhc3luYyBsYXN0RGF0YSA9PiB7XG4gICAgY29uc3QgY3VycmVudENvdW50ID0gY291bnQudmFsdWU7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSBhd2FpdCBzZXJ2aWNlKGxhc3REYXRhKTtcbiAgICBpZiAoY3VycmVudENvdW50ID09PSBjb3VudC52YWx1ZSkge1xuICAgICAgaWYgKGxhc3REYXRhKSB7XG4gICAgICAgIGRhdGEudmFsdWUgPSB7XG4gICAgICAgICAgLi4uY3VycmVudERhdGEsXG4gICAgICAgICAgbGlzdDogWy4uLmxhc3REYXRhLmxpc3QsIC4uLmN1cnJlbnREYXRhLmxpc3RdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnZhbHVlID0gY3VycmVudERhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50RGF0YTtcbiAgfSwge1xuICAgIC4uLnJlc3RPcHRpb25zLFxuICAgIGRlZmF1bHRQYXJhbXM6IFtdLFxuICAgIHJlZnJlc2hEZXBzQWN0aW9uOiAoKSA9PiB7XG4gICAgICBpZiAocmVzdE9wdGlvbnMgIT09IG51bGwgJiYgcmVzdE9wdGlvbnMgIT09IHZvaWQgMCAmJiByZXN0T3B0aW9ucy5yZWZyZXNoRGVwc0FjdGlvbikge1xuICAgICAgICByZXN0T3B0aW9ucy5yZWZyZXNoRGVwc0FjdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgICAgdmFyIF9yZXN0T3B0aW9ucyRvbkVycm9yO1xuICAgICAgcmVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfcmVzdE9wdGlvbnMkb25FcnJvciA9IHJlc3RPcHRpb25zLm9uRXJyb3IpID09PSBudWxsIHx8IF9yZXN0T3B0aW9ucyRvbkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVzdE9wdGlvbnMkb25FcnJvci5jYWxsKHJlc3RPcHRpb25zLCBlcnJvcik7XG4gICAgfSxcbiAgICBvblN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgdmFyIF9yZXN0T3B0aW9ucyRvblN1Y2NlcztcbiAgICAgIHJlc3RPcHRpb25zID09PSBudWxsIHx8IHJlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3Jlc3RPcHRpb25zJG9uU3VjY2VzID0gcmVzdE9wdGlvbnMub25TdWNjZXNzKSA9PT0gbnVsbCB8fCBfcmVzdE9wdGlvbnMkb25TdWNjZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXN0T3B0aW9ucyRvblN1Y2Nlcy5jYWxsKHJlc3RPcHRpb25zLCBkYXRhKTtcbiAgICB9LFxuICAgIG9uQmVmb3JlOiAoKSA9PiB7XG4gICAgICB2YXIgX3Jlc3RPcHRpb25zJG9uQmVmb3JlO1xuICAgICAgY291bnQudmFsdWUgKz0gMTtcbiAgICAgIGlmIChpc1RyaWdnZXJCeUxvYWRNb3JlLnZhbHVlKSB7XG4gICAgICAgIGlzVHJpZ2dlckJ5TG9hZE1vcmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ01vcmUudmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfcmVzdE9wdGlvbnMkb25CZWZvcmUgPSByZXN0T3B0aW9ucy5vbkJlZm9yZSkgPT09IG51bGwgfHwgX3Jlc3RPcHRpb25zJG9uQmVmb3JlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVzdE9wdGlvbnMkb25CZWZvcmUuY2FsbChyZXN0T3B0aW9ucyk7XG4gICAgfSxcbiAgICBvbkFmdGVyOiAoKSA9PiB7XG4gICAgICB2YXIgX3Jlc3RPcHRpb25zJG9uQWZ0ZXI7XG4gICAgICBsb2FkaW5nTW9yZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgaXNUcmlnZ2VyQnlMb2FkTW9yZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgcmVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfcmVzdE9wdGlvbnMkb25BZnRlciA9IHJlc3RPcHRpb25zLm9uQWZ0ZXIpID09PSBudWxsIHx8IF9yZXN0T3B0aW9ucyRvbkFmdGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVzdE9wdGlvbnMkb25BZnRlci5jYWxsKHJlc3RPcHRpb25zKTtcbiAgICB9XG4gIH0sIFt1c2VFcnJvclJldHJ5UGx1Z2luLCB1c2VEZWJvdW5jZVBsdWdpbiwgdXNlVGhyb3R0bGVQbHVnaW4sIHVzZVJlZnJlc2hEZXBzUGx1Z2luLCB1c2VSZWFkeVBsdWdpbl0pO1xuICBjb25zdCBub01vcmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIGlzTm9Nb3JlICYmIGlzRnVuY3Rpb24oaXNOb01vcmUpID8gaXNOb01vcmUoZGF0YS52YWx1ZSkgOiBmYWxzZTtcbiAgfSk7XG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGxvYWRNb3JlQXN5bmMoKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH07XG4gIGNvbnN0IGxvYWRNb3JlQXN5bmMgPSAoKSA9PiB7XG4gICAgaWYgKG5vTW9yZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHdhcm5pbmcoJ05vIG1vcmUgZGF0YS4gWW91IG5lZWQgdG8gaWdub3JlIHRoaXMgZXJyb3IgYnkgY2hlY2tpbmcgaWYgYG5vTW9yZWAgaXMgZmFsc2UgYmVmb3JlIGNhbGxpbmcgYGxvYWRNb3JlQXN5bmNgJywgdHJ1ZSkpO1xuICAgIH1cbiAgICBpc1RyaWdnZXJCeUxvYWRNb3JlLnZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm4gcnVuQXN5bmMoZGF0YS52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHJlZnJlc2ggPSAoKSA9PiBydW4oKTtcbiAgY29uc3QgcmVmcmVzaEFzeW5jID0gKCkgPT4gcnVuQXN5bmMoKTtcbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNvdW50LnZhbHVlICs9IDE7XG4gICAgX2NhbmNlbCgpO1xuICAgIGxvYWRpbmdNb3JlLnZhbHVlID0gZmFsc2U7XG4gIH07XG4gIGNvbnN0IG11dGF0ZSA9IHggPT4ge1xuICAgIGNvbnN0IG11dGF0ZURhdGEgPSBpc0Z1bmN0aW9uKHgpID8geChkYXRhLnZhbHVlKSA6IHg7XG4gICAgY29uc3QgX211dGF0ZURhdGEgPSBzaGFsbG93Q29weShtdXRhdGVEYXRhKTtcbiAgICBkYXRhLnZhbHVlID0gX211dGF0ZURhdGE7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBkYXRhTGlzdCxcbiAgICBsb2FkaW5nTW9yZSxcbiAgICBub01vcmUsXG4gICAgY2FuY2VsLFxuICAgIG11dGF0ZSxcbiAgICByZWZyZXNoLFxuICAgIHJlZnJlc2hBc3luYyxcbiAgICBsb2FkTW9yZSxcbiAgICBsb2FkTW9yZUFzeW5jLFxuICAgIC4uLm9taXQocmVzdCwgWydyZWZyZXNoJywgJ3JlZnJlc2hBc3luYycsICdtdXRhdGUnLCAncGFyYW1zJywgJ2RhdGEnXSlcbiAgfTtcbn1cblxuY29uc3QgY2FjaGVRdWVyeSA9IG5ldyBNYXAoKTtcbmNvbnN0IHNldENhY2hlUXVlcnkgPSAoY2FjaGVLZXksIHF1ZXJ5KSA9PiB7XG4gIGNhY2hlUXVlcnkuc2V0KGNhY2hlS2V5LCBxdWVyeSk7XG4gIHF1ZXJ5LnRoZW4ocmVzID0+IHtcbiAgICBjYWNoZVF1ZXJ5LmRlbGV0ZShjYWNoZUtleSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSkuY2F0Y2goKCkgPT4ge1xuICAgIGNhY2hlUXVlcnkuZGVsZXRlKGNhY2hlS2V5KTtcbiAgfSk7XG59O1xuY29uc3QgZ2V0Q2FjaGVRdWVyeSA9IGNhY2hlS2V5ID0+IHtcbiAgcmV0dXJuIGNhY2hlUXVlcnkuZ2V0KGNhY2hlS2V5KTtcbn07XG5cbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRyaWdnZXIgPSAoa2V5LCBkYXRhKSA9PiB7XG4gIGlmIChsaXN0ZW5lcnMuaGFzKGtleSkpIHtcbiAgICBsaXN0ZW5lcnMuZ2V0KGtleSkuZm9yRWFjaChpdGVtID0+IGl0ZW0oZGF0YSkpO1xuICB9XG59O1xuY29uc3Qgc3Vic2NyaWJlID0gKGtleSwgbGlzdGVuZXIpID0+IHtcbiAgaWYgKCFsaXN0ZW5lcnMuaGFzKGtleSkpIHtcbiAgICBsaXN0ZW5lcnMuc2V0KGtleSwgW2xpc3RlbmVyXSk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdGVuZXJzLmdldChrZXkpLnB1c2gobGlzdGVuZXIpO1xuICB9XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuZ2V0KGtleSkuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzLmdldChrZXkpLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG59O1xuXG52YXIgdXNlQ2FjaGVQbHVnaW4gPSBkZWZpbmVQbHVnaW4oKHF1ZXJ5SW5zdGFuY2UsIF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBjYWNoZUtleTogY3VzdG9tQ2FjaGVLZXksXG4gICAgY2FjaGVUaW1lID0gNjAwMDAwLFxuICAgIHN0YWxlVGltZSA9IDAsXG4gICAgZ2V0Q2FjaGU6IGN1c3RvbUdldENhY2hlLFxuICAgIHNldENhY2hlOiBjdXN0b21TZXRDYWNoZVxuICB9ID0gX3JlZjtcbiAgaWYgKCFjdXN0b21DYWNoZUtleSkgcmV0dXJuIHt9O1xuICBjb25zdCBjYWNoZUtleSA9IGlzRnVuY3Rpb24oY3VzdG9tQ2FjaGVLZXkpID8gY3VzdG9tQ2FjaGVLZXkgOiAoKSA9PiBjdXN0b21DYWNoZUtleTtcbiAgY29uc3QgdW5TdWJzY3JpYmUgPSByZWYoKCkgPT4ge30pO1xuICBsZXQgY3VycmVudFF1ZXJ5O1xuICBjb25zdCBfZ2V0Q2FjaGUgPSBrZXkgPT4ge1xuICAgIGlmIChjdXN0b21HZXRDYWNoZSkge1xuICAgICAgcmV0dXJuIGN1c3RvbUdldENhY2hlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRDYWNoZShrZXkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX3NldENhY2hlID0gKGtleSwgdGltZSwgY2FjaGVEYXRhKSA9PiB7XG4gICAgaWYgKGN1c3RvbVNldENhY2hlKSB7XG4gICAgICBjdXN0b21TZXRDYWNoZShrZXksIGNhY2hlRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENhY2hlKGtleSwgdGltZSwgY2FjaGVEYXRhKTtcbiAgICB9XG4gICAgdHJpZ2dlcihrZXksIGNhY2hlRGF0YS5kYXRhKTtcbiAgfTtcbiAgY29uc3QgaXNGcmVzaCA9IHRpbWUgPT4gc3RhbGVUaW1lID09PSAtMSB8fCB0aW1lICsgc3RhbGVUaW1lID4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIC8vIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgc3BlY2lmaWVkIHByb3BlcnR5IGFzIGl0cyBvd24gcHJvcGVydHlcbiAgLy8gKGFzIG9wcG9zZWQgdG8gaW5oZXJpdGluZyBpdClcbiAgY29uc3QgaGFzUHJvcCA9IChvYmplY3QsIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3ApO1xuICBjb25zdCBzdWJzY3JpYmVDYWNoZSA9IHBhcmFtcyA9PiB7XG4gICAgY29uc3QgX2NhY2hlS2V5ID0gY2FjaGVLZXkocGFyYW1zKTtcbiAgICByZXR1cm4gc3Vic2NyaWJlKF9jYWNoZUtleSwgZGF0YSA9PiB7XG4gICAgICBxdWVyeUluc3RhbmNlLmRhdGEudmFsdWUgPSBkYXRhO1xuICAgIH0pO1xuICB9O1xuICAvLyBXaGVuIGluaXRpYWxpemluZywgcmVzdG9yZSBpZiB0aGVyZSBpcyBhIGNhY2hlXG4gIGNvbnN0IF9jYWNoZUtleSA9IGNhY2hlS2V5KCk7XG4gIGNvbnN0IGNhY2hlID0gX2dldENhY2hlKF9jYWNoZUtleSk7XG4gIGlmIChjYWNoZSAmJiBoYXNQcm9wKGNhY2hlLCAnZGF0YScpKSB7XG4gICAgcXVlcnlJbnN0YW5jZS5kYXRhLnZhbHVlID0gY2FjaGUuZGF0YTtcbiAgICBxdWVyeUluc3RhbmNlLnBhcmFtcy52YWx1ZSA9IGNhY2hlLnBhcmFtcztcbiAgfVxuICBpZiAoX2NhY2hlS2V5KSB7XG4gICAgdW5TdWJzY3JpYmUudmFsdWUgPSBzdWJzY3JpYmVDYWNoZSgpO1xuICB9XG4gIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICB1blN1YnNjcmliZS52YWx1ZSgpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBvbkJlZm9yZShwYXJhbXMpIHtcbiAgICAgIGNvbnN0IF9jYWNoZUtleSA9IGNhY2hlS2V5KHBhcmFtcyk7XG4gICAgICBjb25zdCBjYWNoZSA9IF9nZXRDYWNoZShfY2FjaGVLZXkpO1xuICAgICAgaWYgKCFjYWNoZSB8fCAhaGFzUHJvcChjYWNoZSwgJ2RhdGEnKSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICAvLyBJZiBpdCdzIGZyZXNoLCBzdG9wIHRoZSByZXF1ZXN0XG4gICAgICBpZiAoaXNGcmVzaChjYWNoZS50aW1lKSkge1xuICAgICAgICBxdWVyeUluc3RhbmNlLmRhdGEudmFsdWUgPSBjYWNoZS5kYXRhO1xuICAgICAgICBxdWVyeUluc3RhbmNlLmxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIGJyZWFrUmVzdWx0OiBjYWNoZS5kYXRhXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBpdCBpcyBub3QgZnJlc2gsIHNldCBkYXRhIGFuZCByZXF1ZXN0XG4gICAgICAgIHF1ZXJ5SW5zdGFuY2UuZGF0YS52YWx1ZSA9IGNhY2hlLmRhdGE7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblF1ZXJ5KHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5SW5zdGFuY2UucGFyYW1zLnZhbHVlO1xuICAgICAgY29uc3QgX2NhY2hlS2V5ID0gY2FjaGVLZXkocGFyYW1zKTtcbiAgICAgIGxldCBzZXJ2aWNlUHJvbWlzZSA9IGdldENhY2hlUXVlcnkoX2NhY2hlS2V5KTtcbiAgICAgIGlmIChzZXJ2aWNlUHJvbWlzZSAmJiBzZXJ2aWNlUHJvbWlzZSAhPT0gY3VycmVudFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlUHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VQcm9taXNlID0gc2VydmljZSgpO1xuICAgICAgY3VycmVudFF1ZXJ5ID0gc2VydmljZVByb21pc2U7XG4gICAgICBzZXRDYWNoZVF1ZXJ5KF9jYWNoZUtleSwgc2VydmljZVByb21pc2UpO1xuICAgICAgcmV0dXJuICgpID0+IHNlcnZpY2VQcm9taXNlO1xuICAgIH0sXG4gICAgb25TdWNjZXNzKGRhdGEsIHBhcmFtcykge1xuICAgICAgY29uc3QgX2NhY2hlS2V5ID0gY2FjaGVLZXkocGFyYW1zKTtcbiAgICAgIGlmIChfY2FjaGVLZXkpIHtcbiAgICAgICAgdW5TdWJzY3JpYmUudmFsdWUoKTtcbiAgICAgICAgX3NldENhY2hlKF9jYWNoZUtleSwgY2FjaGVUaW1lLCB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgfSk7XG4gICAgICAgIHVuU3Vic2NyaWJlLnZhbHVlID0gc3Vic2NyaWJlQ2FjaGUocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTXV0YXRlKGRhdGEpIHtcbiAgICAgIGNvbnN0IF9jYWNoZUtleSA9IGNhY2hlS2V5KHF1ZXJ5SW5zdGFuY2UucGFyYW1zLnZhbHVlKTtcbiAgICAgIGlmIChfY2FjaGVLZXkpIHtcbiAgICAgICAgdW5TdWJzY3JpYmUudmFsdWUoKTtcbiAgICAgICAgX3NldENhY2hlKF9jYWNoZUtleSwgY2FjaGVUaW1lLCB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBwYXJhbXM6IHF1ZXJ5SW5zdGFuY2UucGFyYW1zLnZhbHVlLFxuICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIH0pO1xuICAgICAgICB1blN1YnNjcmliZS52YWx1ZSA9IHN1YnNjcmliZUNhY2hlKHF1ZXJ5SW5zdGFuY2UucGFyYW1zLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KTtcblxuZnVuY3Rpb24gc2V0VGltZW91dFByb21pc2UoZHVyYXRpb24pIHtcbiAgbGV0IHRpbWVySWQsIHN0b3A7XG4gIGNsYXNzIFRpbWVyIGV4dGVuZHMgUHJvbWlzZSB7XG4gICAgY29uc3RydWN0b3IoZm4pIHtcbiAgICAgIHN1cGVyKGZuKTtcbiAgICAgIHRoaXMuY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBzdG9wKCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVGltZXIocmVzb2x2ZSA9PiB7XG4gICAgc3RvcCA9IHJlc29sdmU7XG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQoc3RvcCwgZHVyYXRpb24pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG52YXIgdXNlTG9hZGluZ0RlbGF5UGx1Z2luID0gZGVmaW5lUGx1Z2luKChxdWVyeUluc3RhbmNlLCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgbG9hZGluZ0RlbGF5ID0gMCxcbiAgICBsb2FkaW5nS2VlcCA9IDBcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGRlbGF5TG9hZGluZ1RpbWVyID0gcmVmKCgpID0+IHt9KTtcbiAgY29uc3QgbG9hZGluZ0RlbGF5UmVmID0gY29tcHV0ZWQoKCkgPT4gcmVmVG9SYXcobG9hZGluZ0RlbGF5KSk7XG4gIGNvbnN0IGxvYWRpbmdLZWVwUmVmID0gY29tcHV0ZWQoKCkgPT4gcmVmVG9SYXcobG9hZGluZ0tlZXApKTtcbiAgbGV0IHN0YXJ0VGltZSA9IDA7XG4gIGxldCB0aW1lb3V0UHJvbWlzZSA9IHt9O1xuICBjb25zdCBkZWxheUxvYWRpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgaWYgKGxvYWRpbmdEZWxheVJlZi52YWx1ZSkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAocXVlcnlJbnN0YW5jZS5zdGF0dXMudmFsdWUgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgIHF1ZXJ5SW5zdGFuY2UubG9hZGluZy52YWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGxvYWRpbmdEZWxheVJlZi52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB0aW1lcklkICYmIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvbkJlZm9yZSgpIHtcbiAgICAgIHF1ZXJ5SW5zdGFuY2UubG9hZGluZy52YWx1ZSA9ICFsb2FkaW5nRGVsYXlSZWYudmFsdWU7XG4gICAgICBkZWxheUxvYWRpbmdUaW1lci52YWx1ZSgpO1xuICAgICAgZGVsYXlMb2FkaW5nVGltZXIudmFsdWUgPSBkZWxheUxvYWRpbmcoKTtcbiAgICAgIHN0YXJ0VGltZSA9IGdldEN1cnJlbnRUaW1lKCk7XG4gICAgfSxcbiAgICBvblF1ZXJ5KHNlcnZpY2UpIHtcbiAgICAgIGlmICghbG9hZGluZ0tlZXBSZWYudmFsdWUpIHJldHVybiAoKSA9PiBzZXJ2aWNlKCk7XG4gICAgICB0aW1lb3V0UHJvbWlzZSA9IHNldFRpbWVvdXRQcm9taXNlKGxvYWRpbmdLZWVwUmVmLnZhbHVlICsgbG9hZGluZ0RlbGF5UmVmLnZhbHVlKTtcbiAgICAgIGNvbnN0IF9zZXJ2aWNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNlcnZpY2UoKTtcbiAgICAgICAgICBpZiAoZ2V0Q3VycmVudFRpbWUoKSAtIHN0YXJ0VGltZSA8PSBsb2FkaW5nRGVsYXlSZWYudmFsdWUpIHtcbiAgICAgICAgICAgIHRpbWVvdXRQcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGdldEN1cnJlbnRUaW1lKCkgLSBzdGFydFRpbWUgPD0gbG9hZGluZ0RlbGF5UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICB0aW1lb3V0UHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNlcnZpY2VQcm9taXNlID0gUHJvbWlzZS5hbGxTZXR0bGVkKFtfc2VydmljZSgpLCB0aW1lb3V0UHJvbWlzZV0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzWzBdO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXN1bHQucmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gKCkgPT4gc2VydmljZVByb21pc2U7XG4gICAgfSxcbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgIGRlbGF5TG9hZGluZ1RpbWVyLnZhbHVlKCk7XG4gICAgfSxcbiAgICBvbkFmdGVyKCkge1xuICAgICAgZGVsYXlMb2FkaW5nVGltZXIudmFsdWUoKTtcbiAgICB9XG4gIH07XG59KTtcblxudmFyIF93aW5kb3c7XG5jb25zdCBGT0NVU19MSVNURU5FUiA9IG5ldyBTZXQoKTtcbmNvbnN0IFZJU0lCTEVfTElTVEVORVIgPSBuZXcgU2V0KCk7XG5jb25zdCBSRUNPTk5FQ1RfTElTVEVORVIgPSBuZXcgU2V0KCk7XG5jb25zdCBzdWJzY3JpYmVyID0gKGxpc3RlbmVyVHlwZSwgZXZlbnQpID0+IHtcbiAgbGV0IGxpc3RlbmVycztcbiAgc3dpdGNoIChsaXN0ZW5lclR5cGUpIHtcbiAgICBjYXNlICdGT0NVU19MSVNURU5FUic6XG4gICAgICBsaXN0ZW5lcnMgPSBGT0NVU19MSVNURU5FUjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFQ09OTkVDVF9MSVNURU5FUic6XG4gICAgICBsaXN0ZW5lcnMgPSBSRUNPTk5FQ1RfTElTVEVORVI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdWSVNJQkxFX0xJU1RFTkVSJzpcbiAgICAgIGxpc3RlbmVycyA9IFZJU0lCTEVfTElTVEVORVI7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAobGlzdGVuZXJzLmhhcyhldmVudCkpIHJldHVybjtcbiAgbGlzdGVuZXJzLmFkZChldmVudCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShldmVudCk7XG4gIH07XG59O1xuY29uc3Qgb2JzZXJ2ZXIgPSBsaXN0ZW5lcnMgPT4ge1xuICBsaXN0ZW5lcnMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgZXZlbnQoKTtcbiAgfSk7XG59O1xuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbmlmICghaXNTZXJ2ZXIgJiYgKF93aW5kb3cgPSB3aW5kb3cpICE9PSBudWxsICYmIF93aW5kb3cgIT09IHZvaWQgMCAmJiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoaXNEb2N1bWVudFZpc2liaWxpdHkoKSkge1xuICAgICAgb2JzZXJ2ZXIoVklTSUJMRV9MSVNURU5FUik7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IG9ic2VydmVyKEZPQ1VTX0xJU1RFTkVSKSwgZmFsc2UpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgKCkgPT4gb2JzZXJ2ZXIoUkVDT05ORUNUX0xJU1RFTkVSKSwgZmFsc2UpO1xufVxuXG52YXIgdXNlUG9sbGluZ1BsdWdpbiA9IGRlZmluZVBsdWdpbigocXVlcnlJbnN0YW5jZSwgX3JlZikgPT4ge1xuICBsZXQge1xuICAgIHBvbGxpbmdJbnRlcnZhbCxcbiAgICBwb2xsaW5nV2hlbkhpZGRlbiA9IGZhbHNlLFxuICAgIHBvbGxpbmdXaGVuT2ZmbGluZSA9IGZhbHNlLFxuICAgIGVycm9yUmV0cnlDb3VudCA9IDBcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHBvbGxpbmdUaW1lciA9IHJlZigpO1xuICBjb25zdCBzdG9wUG9sbGluZ1doZW5IaWRkZW5Pck9mZmxpbmUgPSByZWYoZmFsc2UpO1xuICBjb25zdCBwb2xsaW5nSW50ZXJ2YWxSZWYgPSBjb21wdXRlZCgoKSA9PiByZWZUb1Jhdyhwb2xsaW5nSW50ZXJ2YWwpKTtcbiAgY29uc3QgZXJyb3JSZXRyeUNvdW50UmVmID0gY29tcHV0ZWQoKCkgPT4gcmVmVG9SYXcoZXJyb3JSZXRyeUNvdW50KSk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlTGlzdCA9IFtdO1xuICBjb25zdCBhZGRVbnN1YnNjcmliZUxpc3QgPSBldmVudCA9PiB7XG4gICAgZXZlbnQgJiYgdW5zdWJzY3JpYmVMaXN0LnB1c2goZXZlbnQpO1xuICB9O1xuICBjb25zdCBpc0tlZXBQb2xsaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAvLyBwb2xsaW5nV2hlbkhpZGRlbiA9IHRydWUgb3IgcG9sbGluZ1doZW5IaWRkZW4gPSBmYWxzZSBhbmQgZG9jdW1lbnQgaXMgdmlzaWJpbGl0eVxuICAgICAgKHBvbGxpbmdXaGVuSGlkZGVuIHx8IGlzRG9jdW1lbnRWaXNpYmlsaXR5KCkpICYmIChcbiAgICAgIC8vIHBvbGxpbmdXaGVuT2ZmbGluZSA9IHRydWUgb3IgcG9sbGluZ1doZW5PZmZsaW5lID0gZmFsc2UgYW5kIGlzIG9ubGluZVxuICAgICAgcG9sbGluZ1doZW5PZmZsaW5lIHx8IGlzT25saW5lKCkpXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgcG9sbGluZyA9IHBvbGxpbmdGdW5jID0+IHtcbiAgICAvLyBpZiBlcnJvclJldHJ5IGlzIGVuYWJsZWQsIHRoZW4gc2tpcCB0aGlzIG1ldGhvZFxuICAgIGlmIChxdWVyeUluc3RhbmNlLmVycm9yLnZhbHVlICYmIGVycm9yUmV0cnlDb3VudFJlZi52YWx1ZSAhPT0gMCkgcmV0dXJuO1xuICAgIGxldCB0aW1lcklkO1xuICAgIGlmICghaXNOaWwocG9sbGluZ0ludGVydmFsUmVmLnZhbHVlKSAmJiBwb2xsaW5nSW50ZXJ2YWxSZWYudmFsdWUgPj0gMCkge1xuICAgICAgaWYgKGlzS2VlcFBvbGxpbmcoKSkge1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dChwb2xsaW5nRnVuYywgcG9sbGluZ0ludGVydmFsUmVmLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0b3AgcG9sbGluZ1xuICAgICAgICBzdG9wUG9sbGluZ1doZW5IaWRkZW5Pck9mZmxpbmUudmFsdWUgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB0aW1lcklkICYmIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgfTtcbiAgY29uc3QgcmVQb2xsaW5nID0gKCkgPT4ge1xuICAgIGlmIChzdG9wUG9sbGluZ1doZW5IaWRkZW5Pck9mZmxpbmUudmFsdWUgJiYgaXNLZWVwUG9sbGluZygpKSB7XG4gICAgICBxdWVyeUluc3RhbmNlLmNvbnRleHQucmVmcmVzaCgpO1xuICAgICAgc3RvcFBvbGxpbmdXaGVuSGlkZGVuT3JPZmZsaW5lLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICB3YXRjaChwb2xsaW5nSW50ZXJ2YWxSZWYsICgpID0+IHtcbiAgICBpZiAocG9sbGluZ1RpbWVyLnZhbHVlKSB7XG4gICAgICBwb2xsaW5nVGltZXIudmFsdWUoKTtcbiAgICAgIHBvbGxpbmdUaW1lci52YWx1ZSA9IHBvbGxpbmcoKCkgPT4gcXVlcnlJbnN0YW5jZS5jb250ZXh0LnJlZnJlc2goKSk7XG4gICAgfVxuICB9KTtcbiAgLy8gc3Vic2NyaWJlIHBvbGxpbmdcbiAgaWYgKCFwb2xsaW5nV2hlbkhpZGRlbikge1xuICAgIGFkZFVuc3Vic2NyaWJlTGlzdChzdWJzY3JpYmVyKCdWSVNJQkxFX0xJU1RFTkVSJywgcmVQb2xsaW5nKSk7XG4gIH1cbiAgLy8gc3Vic2NyaWJlIG9ubGluZSB3aGVuIHBvbGxpbmdXaGVuT2ZmbGluZSBpcyBmYWxzZVxuICBpZiAoIXBvbGxpbmdXaGVuT2ZmbGluZSkge1xuICAgIGFkZFVuc3Vic2NyaWJlTGlzdChzdWJzY3JpYmVyKCdSRUNPTk5FQ1RfTElTVEVORVInLCByZVBvbGxpbmcpKTtcbiAgfVxuICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgdW5zdWJzY3JpYmVMaXN0LmZvckVhY2godW5zdWJzY3JpYmUgPT4gdW5zdWJzY3JpYmUoKSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG9uQmVmb3JlKCkge1xuICAgICAgdmFyIF9wb2xsaW5nVGltZXIkdmFsdWU7XG4gICAgICAoX3BvbGxpbmdUaW1lciR2YWx1ZSA9IHBvbGxpbmdUaW1lci52YWx1ZSkgPT09IG51bGwgfHwgX3BvbGxpbmdUaW1lciR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3BvbGxpbmdUaW1lciR2YWx1ZS5jYWxsKHBvbGxpbmdUaW1lcik7XG4gICAgfSxcbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgIHZhciBfcG9sbGluZ1RpbWVyJHZhbHVlMjtcbiAgICAgIChfcG9sbGluZ1RpbWVyJHZhbHVlMiA9IHBvbGxpbmdUaW1lci52YWx1ZSkgPT09IG51bGwgfHwgX3BvbGxpbmdUaW1lciR2YWx1ZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wb2xsaW5nVGltZXIkdmFsdWUyLmNhbGwocG9sbGluZ1RpbWVyKTtcbiAgICB9LFxuICAgIG9uQWZ0ZXIoKSB7XG4gICAgICBwb2xsaW5nVGltZXIudmFsdWUgPSBwb2xsaW5nKCgpID0+IHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5yZWZyZXNoKCkpO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5jb25zdCBsaW1pdFRyaWdnZXIgPSAoZm4sIHRpbWVJbnRlcnZhbCkgPT4ge1xuICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChydW5uaW5nKSByZXR1cm47XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgZm4oLi4uYXJndW1lbnRzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9LCB0aW1lSW50ZXJ2YWwpO1xuICB9O1xufTtcblxudmFyIHVzZVJlZnJlc2hPbldpbmRvd0ZvY3VzID0gZGVmaW5lUGx1Z2luKChxdWVyeUluc3RhbmNlLCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgcmVmcmVzaE9uV2luZG93Rm9jdXMgPSBmYWxzZSxcbiAgICByZWZvY3VzVGltZXNwYW4gPSA1MDAwXG4gIH0gPSBfcmVmO1xuICBjb25zdCByZWZyZXNoT25XaW5kb3dGb2N1c1JlZiA9IGNvbXB1dGVkKCgpID0+IHJlZlRvUmF3KHJlZnJlc2hPbldpbmRvd0ZvY3VzKSk7XG4gIGNvbnN0IHJlZm9jdXNUaW1lc3BhblJlZiA9IGNvbXB1dGVkKCgpID0+IHJlZlRvUmF3KHJlZm9jdXNUaW1lc3BhbikpO1xuICBjb25zdCB1bnN1YnNjcmliZUxpc3QgPSBbXTtcbiAgY29uc3QgYWRkVW5zdWJzY3JpYmVMaXN0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50ICYmIHVuc3Vic2NyaWJlTGlzdC5wdXNoKGV2ZW50KTtcbiAgfTtcbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgdW5zdWJzY3JpYmVMaXN0LmZvckVhY2goZm4gPT4gZm4oKSk7XG4gIH07XG4gIHdhdGNoRWZmZWN0KCgpID0+IHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICAgIGlmIChyZWZyZXNoT25XaW5kb3dGb2N1c1JlZi52YWx1ZSkge1xuICAgICAgY29uc3QgbGltaXRSZWZyZXNoID0gbGltaXRUcmlnZ2VyKHF1ZXJ5SW5zdGFuY2UuY29udGV4dC5yZWZyZXNoLCByZWZvY3VzVGltZXNwYW5SZWYudmFsdWUpO1xuICAgICAgYWRkVW5zdWJzY3JpYmVMaXN0KHN1YnNjcmliZXIoJ1ZJU0lCTEVfTElTVEVORVInLCBsaW1pdFJlZnJlc2gpKTtcbiAgICAgIGFkZFVuc3Vic2NyaWJlTGlzdChzdWJzY3JpYmVyKCdGT0NVU19MSVNURU5FUicsIGxpbWl0UmVmcmVzaCkpO1xuICAgIH1cbiAgfSk7XG4gIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9KTtcbiAgcmV0dXJuIHt9O1xufSk7XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3Qoc2VydmljZSwgb3B0aW9ucywgcGx1Z2lucykge1xuICByZXR1cm4gdXNlUXVlcnkoc2VydmljZSwgb3B0aW9ucywgWy4uLihwbHVnaW5zIHx8IFtdKSwgdXNlTG9hZGluZ0RlbGF5UGx1Z2luLCB1c2VFcnJvclJldHJ5UGx1Z2luLCB1c2VEZWJvdW5jZVBsdWdpbiwgdXNlUG9sbGluZ1BsdWdpbiwgdXNlVGhyb3R0bGVQbHVnaW4sIHVzZVJlZnJlc2hPbldpbmRvd0ZvY3VzLCB1c2VSZWZyZXNoRGVwc1BsdWdpbiwgdXNlUmVhZHlQbHVnaW4sIHVzZUNhY2hlUGx1Z2luXSk7XG59XG5cbmZ1bmN0aW9uIHVzZVBhZ2luYXRpb24oc2VydmljZSkge1xuICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIGNvbnN0IGRlZmF1bHRQYWdpbmF0aW9uT3B0aW9ucyA9IHtcbiAgICBjdXJyZW50S2V5OiAnY3VycmVudCcsXG4gICAgcGFnZVNpemVLZXk6ICdwYWdlU2l6ZScsXG4gICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgdG90YWxQYWdlS2V5OiAndG90YWxQYWdlJ1xuICB9O1xuICBjb25zdCBpbmplY3RlZEdsb2JhbE9wdGlvbnMgPSBpbmplY3QoR0xPQkFMX09QVElPTlNfUFJPVklERV9LRVksIHt9KTtcbiAgY29uc3Qge1xuICAgIHBhZ2luYXRpb24sXG4gICAgLi4ucmVzdE9wdGlvbnNcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHtcbiAgICBjdXJyZW50S2V5LFxuICAgIHBhZ2VTaXplS2V5LFxuICAgIHRvdGFsS2V5LFxuICAgIHRvdGFsUGFnZUtleVxuICB9ID0gbWVyZ2UoZGVmYXVsdFBhZ2luYXRpb25PcHRpb25zLCBnZXRHbG9iYWxPcHRpb25zKCkucGFnaW5hdGlvbiB8fCB7fSwgaW5qZWN0ZWRHbG9iYWxPcHRpb25zLnBhZ2luYXRpb24gfHwge30sIHBhZ2luYXRpb24gfHwge30pO1xuICBjb25zdCBmaW5hbGx5T3B0aW9ucyA9IG1lcmdlKHtcbiAgICBkZWZhdWx0UGFyYW1zOiBbe1xuICAgICAgW2N1cnJlbnRLZXldOiAxLFxuICAgICAgW3BhZ2VTaXplS2V5XTogMTBcbiAgICB9XVxuICB9LCByZXN0T3B0aW9ucyk7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIHBhcmFtcyxcbiAgICBydW4sXG4gICAgLi4ucmVzdFxuICB9ID0gdXNlUmVxdWVzdChzZXJ2aWNlLCBmaW5hbGx5T3B0aW9ucyk7XG4gIGNvbnN0IHBhZ2luZyA9IHBhZ2luYXRpb25QYXJhbXMgPT4ge1xuICAgIGNvbnN0IFtvbGRQYWdpbmF0aW9uUGFyYW1zLCAuLi5yZXN0UGFyYW1zXSA9IHBhcmFtcy52YWx1ZSB8fCBbXTtcbiAgICBjb25zdCBuZXdQYWdpbmF0aW9uUGFyYW1zID0ge1xuICAgICAgLi4ub2xkUGFnaW5hdGlvblBhcmFtcyxcbiAgICAgIC4uLnBhZ2luYXRpb25QYXJhbXNcbiAgICB9O1xuICAgIGNvbnN0IG1lcmdlclBhcmFtcyA9IFtuZXdQYWdpbmF0aW9uUGFyYW1zLCAuLi5yZXN0UGFyYW1zXTtcbiAgICBydW4oLi4ubWVyZ2VyUGFyYW1zKTtcbiAgfTtcbiAgLy8gY2hhbmdlQ3VycmVudFx0Y2hhbmdlIGN1cnJlbnQgcGFnZVx0KGN1cnJlbnQ6IG51bWJlcikgPT4gdm9pZFxuICBjb25zdCBjaGFuZ2VDdXJyZW50ID0gY3VycmVudCA9PiB7XG4gICAgcGFnaW5nKHtcbiAgICAgIFtjdXJyZW50S2V5XTogY3VycmVudFxuICAgIH0pO1xuICB9O1xuICAvLyBjaGFuZ2VQYWdlU2l6ZVx0Y2hhbmdlIHBhZ2VTaXplXHQocGFnZVNpemU6IG51bWJlcikgPT4gdm9pZFxuICBjb25zdCBjaGFuZ2VQYWdlU2l6ZSA9IHBhZ2VTaXplID0+IHtcbiAgICBwYWdpbmcoe1xuICAgICAgW3BhZ2VTaXplS2V5XTogcGFnZVNpemVcbiAgICB9KTtcbiAgfTtcbiAgLy8gY2hhbmdlUGFnaW5hdGlvblx0Y2hhbmdlIGN1cnJlbnQgYW5kIHBhZ2VTaXplXHQoY3VycmVudDogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSA9PiB2b2lkXG4gIGNvbnN0IGNoYW5nZVBhZ2luYXRpb24gPSAoY3VycmVudCwgcGFnZVNpemUpID0+IHtcbiAgICBwYWdpbmcoe1xuICAgICAgW2N1cnJlbnRLZXldOiBjdXJyZW50LFxuICAgICAgW3BhZ2VTaXplS2V5XTogcGFnZVNpemVcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdG90YWwgPSBjb21wdXRlZCgoKSA9PiBnZXQoZGF0YS52YWx1ZSwgdG90YWxLZXksIDApKTtcbiAgY29uc3QgY3VycmVudCA9IGNvbXB1dGVkKHtcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIHZhciBfcGFyYW1zJHZhbHVlJDAkY3VycmUsIF9wYXJhbXMkdmFsdWUsIF9wYXJhbXMkdmFsdWUkO1xuICAgICAgcmV0dXJuICgvLyBAdHMtaWdub3JlXG4gICAgICAgIChfcGFyYW1zJHZhbHVlJDAkY3VycmUgPSAoX3BhcmFtcyR2YWx1ZSA9IHBhcmFtcy52YWx1ZSkgPT09IG51bGwgfHwgX3BhcmFtcyR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9wYXJhbXMkdmFsdWUkID0gX3BhcmFtcyR2YWx1ZVswXSkgPT09IG51bGwgfHwgX3BhcmFtcyR2YWx1ZSQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wYXJhbXMkdmFsdWUkW2N1cnJlbnRLZXldKSAhPT0gbnVsbCAmJiBfcGFyYW1zJHZhbHVlJDAkY3VycmUgIT09IHZvaWQgMCA/IF9wYXJhbXMkdmFsdWUkMCRjdXJyZSA6IGZpbmFsbHlPcHRpb25zLmRlZmF1bHRQYXJhbXNbMF1bY3VycmVudEtleV1cbiAgICAgICk7XG4gICAgfSxcbiAgICBzZXQ6IHZhbCA9PiB7XG4gICAgICBjaGFuZ2VDdXJyZW50KHZhbCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcGFnZVNpemUgPSBjb21wdXRlZCh7XG4gICAgZ2V0OiAoKSA9PiB7XG4gICAgICB2YXIgX3BhcmFtcyR2YWx1ZSQwJHBhZ2VTLCBfcGFyYW1zJHZhbHVlMiwgX3BhcmFtcyR2YWx1ZTIkO1xuICAgICAgcmV0dXJuICgvLyBAdHMtaWdub3JlXG4gICAgICAgIChfcGFyYW1zJHZhbHVlJDAkcGFnZVMgPSAoX3BhcmFtcyR2YWx1ZTIgPSBwYXJhbXMudmFsdWUpID09PSBudWxsIHx8IF9wYXJhbXMkdmFsdWUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3BhcmFtcyR2YWx1ZTIkID0gX3BhcmFtcyR2YWx1ZTJbMF0pID09PSBudWxsIHx8IF9wYXJhbXMkdmFsdWUyJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3BhcmFtcyR2YWx1ZTIkW3BhZ2VTaXplS2V5XSkgIT09IG51bGwgJiYgX3BhcmFtcyR2YWx1ZSQwJHBhZ2VTICE9PSB2b2lkIDAgPyBfcGFyYW1zJHZhbHVlJDAkcGFnZVMgOiBmaW5hbGx5T3B0aW9ucy5kZWZhdWx0UGFyYW1zWzBdW3BhZ2VTaXplS2V5XVxuICAgICAgKTtcbiAgICB9LFxuICAgIHNldDogdmFsID0+IHtcbiAgICAgIGNoYW5nZVBhZ2VTaXplKHZhbCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdG90YWxQYWdlID0gY29tcHV0ZWQoKCkgPT4gZ2V0KGRhdGEudmFsdWUsIHRvdGFsUGFnZUtleSwgTWF0aC5jZWlsKHRvdGFsLnZhbHVlIC8gcGFnZVNpemUudmFsdWUpKSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBwYXJhbXMsXG4gICAgY3VycmVudCxcbiAgICBwYWdlU2l6ZSxcbiAgICB0b3RhbCxcbiAgICB0b3RhbFBhZ2UsXG4gICAgcnVuLFxuICAgIGNoYW5nZUN1cnJlbnQsXG4gICAgY2hhbmdlUGFnZVNpemUsXG4gICAgY2hhbmdlUGFnaW5hdGlvbixcbiAgICAuLi5yZXN0XG4gIH07XG59XG5cbnZhciB1c2VSZXF1ZXN0UHJvdmlkZXIgPSAoY29uZmlnID0+IHtcbiAgcHJvdmlkZShHTE9CQUxfT1BUSU9OU19QUk9WSURFX0tFWSwgY29uZmlnKTtcbn0pO1xuXG5leHBvcnQgeyBjbGVhckNhY2hlLCBkZWZpbmVQbHVnaW4sIHNldEdsb2JhbE9wdGlvbnMsIHVzZUxvYWRNb3JlLCB1c2VQYWdpbmF0aW9uLCB1c2VSZXF1ZXN0LCB1c2VSZXF1ZXN0UHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJHTE9CQUxfT1BUSU9OUyIsIkdMT0JBTF9PUFRJT05TX1BST1ZJREVfS0VZIiwiZ2V0R2xvYmFsT3B0aW9ucyIsImRlZmluZVBsdWdpbiIsIm9wdGlvbnMiLCJpc0FycmF5IiwidmFsIiwiaXNPYmplY3QiLCJpc0Z1bmN0aW9uIiwiZm4iLCJpc05pbCIsImlzU2VydmVyIiwiaXNEb2N1bWVudFZpc2liaWxpdHkiLCJfd2luZG93JGRvY3VtZW50IiwiaXNPbmxpbmUiLCJfcmVmIiwiX3dpbmRvdyRuYXZpZ2F0b3IiLCJyZXNvbHZlZFByb21pc2UiLCJyZWZUb1JhdyIsInZhbHVlIiwiaXNSZWYiLCJzaGFsbG93Q29weSIsIkNBQ0hFX01BUCIsImdldENhY2hlIiwiY2FjaGVLZXkiLCJzZXRDYWNoZSIsImNhY2hlVGltZSIsImRhdGEiLCJvbGRDYWNoZSIsInRpbWVyIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwicmVzdWx0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwidXNlUkFGIiwiaW52b2tlRnVuYyIsInRpbWUiLCJhcmdzIiwidGhpc0FyZyIsInN0YXJ0VGltZXIiLCJwZW5kaW5nRnVuYyIsImNhbmNlbFRpbWVyIiwiaWQiLCJsZWFkaW5nRWRnZSIsInRpbWVyRXhwaXJlZCIsInJlbWFpbmluZ1dhaXQiLCJ0aW1lU2luY2VMYXN0Q2FsbCIsInRpbWVTaW5jZUxhc3RJbnZva2UiLCJ0aW1lV2FpdGluZyIsInNob3VsZEludm9rZSIsInRyYWlsaW5nRWRnZSIsImNhbmNlbCIsImZsdXNoIiwicGVuZGluZyIsImRlYm91bmNlZCIsImlzSW52b2tpbmciLCJfbGVuIiwiX2tleSIsInRocm90dGxlIiwidXNlRGVib3VuY2VQbHVnaW4iLCJxdWVyeUluc3RhbmNlIiwiZGVib3VuY2VJbnRlcnZhbCIsImRlYm91bmNlT3B0aW9ucyIsIm1hbnVhbCIsImluaXRpYWxBdXRvUnVuRmxhZyIsInJlZiIsImRlYm91bmNlZFJ1biIsImRlYm91bmNlT3B0aW9uc1JlZiIsImNvbXB1dGVkIiwiZGVib3VuY2VJbnRlcnZhbFJlZiIsIm9yaWdpblJ1blJlZiIsIndhdGNoRWZmZWN0Iiwib25JbnZhbGlkYXRlIiwiY2FsbGJhY2siLCJyZXNvbHZlIiwicmVqZWN0IiwiX2RlYm91bmNlZFJ1biR2YWx1ZSIsIl9kZWJvdW5jZWRSdW4kdmFsdWUyIiwidXNlRXJyb3JSZXRyeVBsdWdpbiIsImVycm9yUmV0cnlDb3VudCIsImVycm9yUmV0cnlJbnRlcnZhbCIsInJldHJ5VGltZXIiLCJyZXRyaWVkQ291bnQiLCJlcnJvclJldHJ5Q291bnRSZWYiLCJlcnJvclJldHJ5SW50ZXJ2YWxSZWYiLCJpc1JldHJ5aW5nIiwicmVzZXRSZXRyaWVkQ291bnQiLCJhY3R1YWxFcnJvclJldHJ5SW50ZXJ2YWwiLCJiYXNlVGltZSIsImNvZWZmaWNpZW50IiwiX19wb3ciLCJlcnJvclJldHJ5SG9va3MiLCJpc0luZmluaXRlUmV0cnkiLCJoYXNSZXRyeUNvdW50IiwiY2xlYXJUaW1lciIsInVzZVJlYWR5UGx1Z2luIiwicmVhZHkiLCJkZWZhdWx0UGFyYW1zIiwid2F0Y2giLCJ1c2VSZWZyZXNoRGVwc1BsdWdpbiIsInJlZnJlc2hEZXBzIiwicmVmcmVzaERlcHNBY3Rpb24iLCJkZXBzIiwidXNlVGhyb3R0bGVQbHVnaW4iLCJ0aHJvdHRsZUludGVydmFsIiwidGhyb3R0bGVPcHRpb25zIiwidGhyb3R0bGVkUnVuIiwidGhyb3R0bGVJbnRlcnZhbFJlZiIsInRocm90dGxlT3B0aW9uc1JlZiIsIl90aHJvdHRsZWRSdW4kdmFsdWUiLCJfdGhyb3R0bGVkUnVuJHZhbHVlMiIsInNldFN0YXRlQmluZCIsIm9sZFN0YXRlIiwicHVibGljQ2IiLCJuZXdTdGF0ZSIsImtleSIsImZ1biIsImNvbXBvc2VNaWRkbGV3YXJlIiwibWlkZGxlQXJyYXkiLCJob29rIiwibmV4dCIsImkiLCJjcmVhdGVRdWVyeSIsInNlcnZpY2UiLCJjb25maWciLCJpbml0aWFsU3RhdGUiLCJfaW5pdGlhbFN0YXRlJGxvYWRpbmciLCJfaW5pdGlhbFN0YXRlJGRhdGEiLCJpbml0aWFsRGF0YSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJvbkJlZm9yZSIsIm9uQWZ0ZXIiLCJsb2FkaW5nIiwic2hhbGxvd1JlZiIsImVycm9yIiwicGFyYW1zIiwicGx1Z2lucyIsInN0YXR1cyIsImNvbnRleHQiLCJzZXRTdGF0ZSIsImVtaXQiLCJldmVudCIsInF1ZXJ5Rm4iLCJyZXMiLCJfaSRldmVudCIsImNvdW50IiwiX19hc3luYyIsIl9sZW4yIiwiX2tleTIiLCJjdXJyZW50Q291bnQiLCJpc0JyZWFrIiwiYnJlYWtSZXN1bHQiLCJzZXJ2aWNlV3JhcHBlciIsInNlcnZpY2VQcm9taXNlIiwieCIsIm11dGF0ZURhdGEiLCJfbXV0YXRlRGF0YSIsInVzZVF1ZXJ5IiwiaW5qZWN0ZWRHbG9iYWxPcHRpb25zIiwiaW5qZWN0Iiwib25Vbm1vdW50ZWQiLCJjYWNoZVF1ZXJ5Iiwic2V0Q2FjaGVRdWVyeSIsInF1ZXJ5IiwiZ2V0Q2FjaGVRdWVyeSIsImxpc3RlbmVycyIsInRyaWdnZXIiLCJpdGVtIiwic3Vic2NyaWJlIiwibGlzdGVuZXIiLCJpbmRleCIsInVzZUNhY2hlUGx1Z2luIiwiY3VzdG9tQ2FjaGVLZXkiLCJzdGFsZVRpbWUiLCJjdXN0b21HZXRDYWNoZSIsImN1c3RvbVNldENhY2hlIiwidW5TdWJzY3JpYmUiLCJjdXJyZW50UXVlcnkiLCJfZ2V0Q2FjaGUiLCJfc2V0Q2FjaGUiLCJjYWNoZURhdGEiLCJpc0ZyZXNoIiwiaGFzUHJvcCIsIm9iamVjdCIsInByb3AiLCJzdWJzY3JpYmVDYWNoZSIsIl9jYWNoZUtleSIsImNhY2hlIiwic2V0VGltZW91dFByb21pc2UiLCJkdXJhdGlvbiIsInN0b3AiLCJUaW1lciIsImdldEN1cnJlbnRUaW1lIiwidXNlTG9hZGluZ0RlbGF5UGx1Z2luIiwibG9hZGluZ0RlbGF5IiwibG9hZGluZ0tlZXAiLCJkZWxheUxvYWRpbmdUaW1lciIsImxvYWRpbmdEZWxheVJlZiIsImxvYWRpbmdLZWVwUmVmIiwic3RhcnRUaW1lIiwidGltZW91dFByb21pc2UiLCJkZWxheUxvYWRpbmciLCJfc2VydmljZSIsIl93aW5kb3ciLCJGT0NVU19MSVNURU5FUiIsIlZJU0lCTEVfTElTVEVORVIiLCJSRUNPTk5FQ1RfTElTVEVORVIiLCJzdWJzY3JpYmVyIiwibGlzdGVuZXJUeXBlIiwib2JzZXJ2ZXIiLCJ1c2VQb2xsaW5nUGx1Z2luIiwicG9sbGluZ0ludGVydmFsIiwicG9sbGluZ1doZW5IaWRkZW4iLCJwb2xsaW5nV2hlbk9mZmxpbmUiLCJwb2xsaW5nVGltZXIiLCJzdG9wUG9sbGluZ1doZW5IaWRkZW5Pck9mZmxpbmUiLCJwb2xsaW5nSW50ZXJ2YWxSZWYiLCJ1bnN1YnNjcmliZUxpc3QiLCJhZGRVbnN1YnNjcmliZUxpc3QiLCJpc0tlZXBQb2xsaW5nIiwicG9sbGluZyIsInBvbGxpbmdGdW5jIiwicmVQb2xsaW5nIiwidW5zdWJzY3JpYmUiLCJfcG9sbGluZ1RpbWVyJHZhbHVlIiwiX3BvbGxpbmdUaW1lciR2YWx1ZTIiLCJsaW1pdFRyaWdnZXIiLCJ0aW1lSW50ZXJ2YWwiLCJydW5uaW5nIiwidXNlUmVmcmVzaE9uV2luZG93Rm9jdXMiLCJyZWZyZXNoT25XaW5kb3dGb2N1cyIsInJlZm9jdXNUaW1lc3BhbiIsInJlZnJlc2hPbldpbmRvd0ZvY3VzUmVmIiwicmVmb2N1c1RpbWVzcGFuUmVmIiwibGltaXRSZWZyZXNoIiwidXNlUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxLQUFpQixDQUFFLEdBQ25CQyxLQUE2QixPQUFPLDRCQUE0QixHQU1oRUMsS0FBbUIsTUFDaEJGLElBR0hHLElBQWUsQ0FBQUMsTUFDWkEsR0FNSEMsSUFBVSxDQUFBQyxNQUFPLE1BQU0sUUFBUUEsQ0FBRyxHQUNsQ0MsSUFBVyxDQUFBRCxNQUFPQSxNQUFRLFFBQVEsT0FBT0EsS0FBUSxVQUNqREUsSUFBYSxDQUFBQyxNQUFNQSxhQUFjLFVBQ2pDQyxJQUFRLENBQUFKLE1BQU9BLEtBQVEsTUFDdkJLLElBQVcsT0FBTyxVQUFXLGFBQzdCQyxLQUF1QixNQUFNO0FBQ2pDLE1BQUlDO0FBQ0osU0FBSUYsS0FBWUQsR0FBT0csSUFBbUIsT0FBTyxjQUFjLFFBQVFBLE1BQXFCLFNBQVMsU0FBU0EsRUFBaUIsZUFBZSxJQUFVLEtBQ2pKLE9BQU8sU0FBUyxvQkFBb0I7QUFDN0MsR0FDTUMsS0FBVyxNQUFNO0FBQ3JCLE1BQUlDLEdBQU1DO0FBQ1YsVUFBUUQsSUFBTyxDQUFDSixPQUFjSyxJQUFvQixPQUFPLGVBQWUsUUFBUUEsTUFBc0IsU0FBUyxTQUFTQSxFQUFrQixhQUFhLFFBQVFELE1BQVMsU0FBU0EsSUFBTztBQUMxTCxHQUNNRSxJQUFrQixNQUFNLElBQUksUUFBUSxNQUFNO0NBQUUsR0E4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
