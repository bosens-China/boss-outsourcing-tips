var K = ((e) => (e[e.AggregateError = 1] = "AggregateError", e[e.ArrowFunction = 2] = "ArrowFunction", e[e.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", e[e.ObjectAssign = 8] = "ObjectAssign", e[e.BigIntTypedArray = 16] = "BigIntTypedArray", e[e.AbortSignal = 32] = "AbortSignal", e))(K || {});
function U(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function g(e) {
  let t = "", s = 0, i;
  for (let a = 0, n = e.length; a < n; a++) i = U(e[a]), i && (t += e.slice(s, a) + i, s = a + 1);
  return s === 0 ? t = e : t += e.slice(s), t;
}
var d = "__SEROVAL_REFS__";
function S(e, t) {
  if (!e) throw t;
}
var j = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
function v(e) {
  return j.has(e);
}
function $(e) {
  return S(v(e), new we(e)), j.get(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, d, { value: b, configurable: !0, writable: !1, enumerable: !1 }) : typeof window != "undefined" ? Object.defineProperty(window, d, { value: b, configurable: !0, writable: !1, enumerable: !1 }) : typeof self != "undefined" ? Object.defineProperty(self, d, { value: b, configurable: !0, writable: !1, enumerable: !1 }) : typeof global != "undefined" && Object.defineProperty(global, d, { value: b, configurable: !0, writable: !1, enumerable: !1 });
function T(e, t) {
  for (let s = 0, i = t.length; s < i; s++) {
    let a = t[s];
    e.has(a) || (e.add(a), a.extends && T(e, a.extends));
  }
}
function L(e) {
  if (e) {
    let t = /* @__PURE__ */ new Set();
    return T(t, e), [...t];
  }
}
var Z = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" }, C = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 }, q = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" }, _ = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" }, r = void 0;
function c(e, t, s, i, a, n, l, u, o, h, f, W) {
  return { t: e, i: t, s, l: i, c: a, m: n, p: l, e: u, a: o, f: h, b: f, o: W };
}
function p(e) {
  return c(2, r, e, r, r, r, r, r, r, r, r, r);
}
var w = p(2), R = p(3), X = p(1), Y = p(0), G = p(4), H = p(5), J = p(6), Q = p(7);
function A(e) {
  return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function ee(e) {
  let t = _[A(e)];
  return e.name !== t ? { name: e.name } : e.constructor.name !== t ? { name: e.constructor.name } : {};
}
function x(e, t) {
  let s = ee(e), i = Object.getOwnPropertyNames(e);
  for (let a = 0, n = i.length, l; a < n; a++) l = i[a], l !== "name" && l !== "message" && (l === "stack" ? t & 4 && (s = s || {}, s[l] = e[l]) : (s = s || {}, s[l] = e[l]));
  return s;
}
function M(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function te(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return H;
    case Number.NEGATIVE_INFINITY:
      return J;
  }
  return e !== e ? Q : Object.is(e, -0) ? G : c(0, r, e, r, r, r, r, r, r, r, r, r);
}
function k(e) {
  return c(1, r, g(e), r, r, r, r, r, r, r, r, r);
}
function re(e) {
  return c(3, r, "" + e, r, r, r, r, r, r, r, r, r);
}
function se(e) {
  return c(4, e, r, r, r, r, r, r, r, r, r, r);
}
function ie(e, t) {
  return c(5, e, t.toISOString(), r, r, r, r, r, r, r, r, r);
}
function ae(e, t) {
  return c(6, e, r, r, g(t.source), t.flags, r, r, r, r, r, r);
}
function ne(e, t) {
  let s = new Uint8Array(t), i = s.length, a = new Array(i);
  for (let n = 0; n < i; n++) a[n] = s[n];
  return c(19, e, a, r, r, r, r, r, r, r, r, r);
}
function le(e, t) {
  return c(17, e, C[t], r, r, r, r, r, r, r, r, r);
}
function E(e, t) {
  return c(18, e, g($(t)), r, r, r, r, r, r, r, r, r);
}
function ue(e, t, s) {
  return c(25, e, s, r, g(t), r, r, r, r, r, r, r);
}
function ce(e, t, s) {
  return c(9, e, r, t.length, r, r, r, r, s, r, r, M(t));
}
function oe(e, t) {
  return c(21, e, r, r, r, r, r, r, r, t, r, r);
}
function he(e, t, s) {
  return c(15, e, r, t.length, t.constructor.name, r, r, r, r, s, t.byteOffset, r);
}
function fe(e, t, s) {
  return c(16, e, r, t.length, t.constructor.name, r, r, r, r, s, t.byteOffset, r);
}
function pe(e, t, s) {
  return c(20, e, r, t.byteLength, r, r, r, r, r, s, t.byteOffset, r);
}
function ge(e, t, s) {
  return c(13, e, A(t), r, r, g(t.message), s, r, r, r, r, r);
}
function de(e, t, s) {
  return c(14, e, A(t), r, r, g(t.message), s, r, r, r, r, r);
}
function me(e, t, s) {
  return c(7, e, r, t, r, r, r, r, s, r, r, r);
}
function ye(e, t) {
  return c(28, r, r, r, r, r, r, r, [e, t], r, r, r);
}
function be(e, t) {
  return c(30, r, r, r, r, r, r, r, [e, t], r, r, r);
}
function ze(e, t, s) {
  return c(31, e, r, r, r, r, r, r, s, t, r, r);
}
var { toString: I } = Object.prototype;
function Se(e, t) {
  return t instanceof Error ? `Seroval caught an error during the ${e} process.
  
${t.name}
${t.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${e} process.

"${I.call(t)}"

For more information, please check the "cause" property of this error.`;
}
var N = class extends Error {
  constructor(e, t) {
    super(Se(e, t)), this.cause = t;
  }
}, ve = class extends N {
  constructor(e) {
    super("parsing", e);
  }
}, Ae = class extends N {
  constructor(e) {
    super("serialization", e);
  }
}, z = class extends Error {
  constructor(e) {
    super(`The value ${I.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = e;
  }
}, m = class extends Error {
  constructor(e) {
    super('Unsupported node type "' + e.t + '".');
  }
}, Ie = class extends Error {
  constructor(e) {
    super('Missing plugin for tag "' + e + '".');
  }
}, we = class extends Error {
  constructor(e) {
    super('Missing reference for the value "' + I.call(e) + '" of type "' + typeof e + '"'), this.value = e;
  }
}, Re = class {
  constructor(e, t) {
    this.value = e, this.replacement = t;
  }
}, xe = {}, ke = {}, Ee = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
function Pe(e) {
  return "__SEROVAL_STREAM__" in e;
}
function Fe() {
  let e = /* @__PURE__ */ new Set(), t = [], s = !0, i = !0;
  function a(u) {
    for (let o of e.keys()) o.next(u);
  }
  function n(u) {
    for (let o of e.keys()) o.throw(u);
  }
  function l(u) {
    for (let o of e.keys()) o.return(u);
  }
  return { __SEROVAL_STREAM__: !0, on(u) {
    s && e.add(u);
    for (let o = 0, h = t.length; o < h; o++) {
      let f = t[o];
      o === h - 1 && !s ? i ? u.return(f) : u.throw(f) : u.next(f);
    }
    return () => {
      s && e.delete(u);
    };
  }, next(u) {
    s && (t.push(u), a(u));
  }, throw(u) {
    s && (t.push(u), n(u), s = !1, i = !1, e.clear());
  }, return(u) {
    s && (t.push(u), l(u), s = !1, i = !0, e.clear());
  } };
}
function Ve(e) {
  let t = [], s = -1, i = -1, a = e[Symbol.iterator]();
  for (; ; ) try {
    let n = a.next();
    if (t.push(n.value), n.done) {
      i = t.length - 1;
      break;
    }
  } catch (n) {
    s = t.length, t.push(n);
  }
  return { v: t, t: s, d: i };
}
var Oe = class {
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set(), this.plugins = e.plugins, this.features = 47 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  getIndexedValue(e) {
    let t = this.refs.get(e);
    if (t != null) return this.markRef(t), { type: 1, value: se(t) };
    let s = this.refs.size;
    return this.refs.set(e, s), { type: 0, value: s };
  }
  getReference(e) {
    let t = this.getIndexedValue(e);
    return t.type === 1 ? t : v(e) ? { type: 2, value: E(t.value, e) } : t;
  }
  getStrictReference(e) {
    S(v(e), new z(e));
    let t = this.getIndexedValue(e);
    return t.type === 1 ? t.value : E(t.value, e);
  }
  parseFunction(e) {
    return this.getStrictReference(e);
  }
  parseWellKnownSymbol(e) {
    let t = this.getReference(e);
    return t.type !== 0 ? t.value : (S(e in C, new z(e)), le(t.value, e));
  }
  parseSpecialReference(e) {
    let t = this.getIndexedValue(Ee[e]);
    return t.type === 1 ? t.value : c(26, t.value, e, r, r, r, r, r, r, r, r, r);
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(xe);
    return e.type === 1 ? e.value : c(27, e.value, r, r, r, r, r, r, r, this.parseWellKnownSymbol(Symbol.iterator), r, r);
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(ke);
    return e.type === 1 ? e.value : c(29, e.value, r, r, r, r, r, r, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], r, r, r);
  }
  createObjectNode(e, t, s, i) {
    return c(s ? 11 : 10, e, r, r, r, r, i, r, r, r, r, M(t));
  }
  createMapNode(e, t, s, i) {
    return c(8, e, r, r, r, r, r, { k: t, v: s, s: i }, r, this.parseSpecialReference(0), r, r);
  }
  createPromiseConstructorNode(e) {
    return c(22, e, r, r, r, r, r, r, r, this.parseSpecialReference(1), r, r);
  }
  createAbortSignalConstructorNode(e) {
    return c(35, e, r, r, r, r, r, r, r, this.parseSpecialReference(5), r, r);
  }
}, je = /^[$A-Z_][0-9A-Z_$]*$/i;
function P(e) {
  let t = e[0];
  return (t === "$" || t === "_" || t >= "A" && t <= "Z" || t >= "a" && t <= "z") && je.test(e);
}
function y(e) {
  switch (e.t) {
    case 0:
      return e.s + "=" + e.v;
    case 2:
      return e.s + ".set(" + e.k + "," + e.v + ")";
    case 1:
      return e.s + ".add(" + e.v + ")";
    case 3:
      return e.s + ".delete(" + e.k + ")";
  }
}
function Te(e) {
  let t = [], s = e[0];
  for (let i = 1, a = e.length, n, l = s; i < a; i++) n = e[i], n.t === 0 && n.v === l.v ? s = { t: 0, s: n.s, k: r, v: y(s) } : n.t === 2 && n.s === l.s ? s = { t: 2, s: y(s), k: n.k, v: n.v } : n.t === 1 && n.s === l.s ? s = { t: 1, s: y(s), k: r, v: n.v } : n.t === 3 && n.s === l.s ? s = { t: 3, s: y(s), k: n.k, v: r } : (t.push(s), s = n), l = n;
  return t.push(s), t;
}
function F(e) {
  if (e.length) {
    let t = "", s = Te(e);
    for (let i = 0, a = s.length; i < a; i++) t += y(s[i]) + ",";
    return t;
  }
  return r;
}
var Ce = "Object.create(null)", _e = "new Set", Me = "new Map", Ne = "Promise.resolve", De = "Promise.reject", Be = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: r }, We = class {
  constructor(e) {
    this.stack = [], this.flags = [], this.assignments = [], this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, t) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (t.startsWith("{") ? "(" + t + ")" : t) : "function(" + e.join(",") + "){return " + t + "}";
  }
  createEffectfulFunction(e, t) {
    return this.features & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + t + "}" : "function(" + e.join(",") + "){" + t + "}";
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, t) {
    e !== 0 && (this.markRef(t), this.flags.push({ type: e, value: this.getRefParam(t) }));
  }
  resolveFlags() {
    let e = "";
    for (let t = 0, s = this.flags, i = s.length; t < i; t++) {
      let a = s[t];
      e += Be[a.type] + "(" + a.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = F(this.assignments), t = this.resolveFlags();
    return e ? t ? e + t : e : t;
  }
  createAssignment(e, t) {
    this.assignments.push({ t: 0, s: e, k: r, v: t });
  }
  createAddAssignment(e, t) {
    this.assignments.push({ t: 1, s: this.getRefParam(e), k: r, v: t });
  }
  createSetAssignment(e, t, s) {
    this.assignments.push({ t: 2, s: this.getRefParam(e), k: t, v: s });
  }
  createDeleteAssignment(e, t) {
    this.assignments.push({ t: 3, s: this.getRefParam(e), k: t, v: r });
  }
  createArrayAssign(e, t, s) {
    this.createAssignment(this.getRefParam(e) + "[" + t + "]", s);
  }
  createObjectAssign(e, t, s) {
    this.createAssignment(this.getRefParam(e) + "." + t, s);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, d + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, t, s) {
    return t ? this.isIndexedValueInStack(t) ? (this.markRef(e), this.createArrayAssign(e, s, this.getRefParam(t.i)), "") : this.serialize(t) : "";
  }
  serializeArray(e) {
    let t = e.i;
    if (e.l) {
      this.stack.push(t);
      let s = e.a, i = this.serializeArrayItem(t, s[0], 0), a = i === "";
      for (let n = 1, l = e.l, u; n < l; n++) u = this.serializeArrayItem(t, s[n], n), i += "," + u, a = u === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(t, "[" + i + (a ? ",]" : "]"));
    }
    return this.assignIndexedValue(t, "[]");
  }
  serializeProperty(e, t, s) {
    if (typeof t == "string") {
      let i = Number(t), a = i >= 0 && i.toString() === t || P(t);
      if (this.isIndexedValueInStack(s)) {
        let n = this.getRefParam(s.i);
        return this.markRef(e.i), a && i !== i ? this.createObjectAssign(e.i, t, n) : this.createArrayAssign(e.i, a ? t : '"' + t + '"', n), "";
      }
      return (a ? t : '"' + t + '"') + ":" + this.serialize(s);
    }
    return "[" + this.serialize(t) + "]:" + this.serialize(s);
  }
  serializeProperties(e, t) {
    let s = t.s;
    if (s) {
      let i = t.k, a = t.v;
      this.stack.push(e.i);
      let n = this.serializeProperty(e, i[0], a[0]);
      for (let l = 1, u = n; l < s; l++) u = this.serializeProperty(e, i[l], a[l]), n += (u && n && ",") + u;
      return this.stack.pop(), "{" + n + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, t, s) {
    let i = this.serializeProperties(e, t);
    return i !== "{}" ? "Object.assign(" + s + "," + i + ")" : s;
  }
  serializeStringKeyAssignment(e, t, s, i) {
    let a = this.serialize(i), n = Number(s), l = n >= 0 && n.toString() === s || P(s);
    if (this.isIndexedValueInStack(i)) l && n !== n ? this.createObjectAssign(e.i, s, a) : this.createArrayAssign(e.i, l ? s : '"' + s + '"', a);
    else {
      let u = this.assignments;
      this.assignments = t, l && n !== n ? this.createObjectAssign(e.i, s, a) : this.createArrayAssign(e.i, l ? s : '"' + s + '"', a), this.assignments = u;
    }
  }
  serializeAssignment(e, t, s, i) {
    if (typeof s == "string") this.serializeStringKeyAssignment(e, t, s, i);
    else {
      let a = this.stack;
      this.stack = [];
      let n = this.serialize(i);
      this.stack = a;
      let l = this.assignments;
      this.assignments = t, this.createArrayAssign(e.i, this.serialize(s), n), this.assignments = l;
    }
  }
  serializeAssignments(e, t) {
    let s = t.s;
    if (s) {
      let i = [], a = t.k, n = t.v;
      this.stack.push(e.i);
      for (let l = 0; l < s; l++) this.serializeAssignment(e, i, a[l], n[l]);
      return this.stack.pop(), F(i);
    }
    return r;
  }
  serializeDictionary(e, t) {
    if (e.p) if (this.features & 8) t = this.serializeWithObjectAssign(e, e.p, t);
    else {
      this.markRef(e.i);
      let s = this.serializeAssignments(e, e.p);
      if (s) return "(" + this.assignIndexedValue(e.i, t) + "," + s + this.getRefParam(e.i) + ")";
    }
    return this.assignIndexedValue(e.i, t);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, Ce);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, t) {
    return this.isIndexedValueInStack(t) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(t.i)), "") : this.serialize(t);
  }
  serializeSet(e) {
    let t = _e, s = e.l, i = e.i;
    if (s) {
      let a = e.a;
      this.stack.push(i);
      let n = this.serializeSetItem(i, a[0]);
      for (let l = 1, u = n; l < s; l++) u = this.serializeSetItem(i, a[l]), n += (u && n && ",") + u;
      this.stack.pop(), n && (t += "([" + n + "])");
    }
    return this.assignIndexedValue(i, t);
  }
  serializeMapEntry(e, t, s, i) {
    if (this.isIndexedValueInStack(t)) {
      let a = this.getRefParam(t.i);
      if (this.markRef(e), this.isIndexedValueInStack(s)) {
        let l = this.getRefParam(s.i);
        return this.createSetAssignment(e, a, l), "";
      }
      if (s.t !== 4 && s.i != null && this.isMarked(s.i)) {
        let l = "(" + this.serialize(s) + ",[" + i + "," + i + "])";
        return this.createSetAssignment(e, a, this.getRefParam(s.i)), this.createDeleteAssignment(e, i), l;
      }
      let n = this.stack;
      return this.stack = [], this.createSetAssignment(e, a, this.serialize(s)), this.stack = n, "";
    }
    if (this.isIndexedValueInStack(s)) {
      let a = this.getRefParam(s.i);
      if (this.markRef(e), t.t !== 4 && t.i != null && this.isMarked(t.i)) {
        let l = "(" + this.serialize(t) + ",[" + i + "," + i + "])";
        return this.createSetAssignment(e, this.getRefParam(t.i), a), this.createDeleteAssignment(e, i), l;
      }
      let n = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(t), a), this.stack = n, "";
    }
    return "[" + this.serialize(t) + "," + this.serialize(s) + "]";
  }
  serializeMap(e) {
    let t = Me, s = e.e.s, i = e.i, a = e.f, n = this.getRefParam(a.i);
    if (s) {
      let l = e.e.k, u = e.e.v;
      this.stack.push(i);
      let o = this.serializeMapEntry(i, l[0], u[0], n);
      for (let h = 1, f = o; h < s; h++) f = this.serializeMapEntry(i, l[h], u[h], n), o += (f && o && ",") + f;
      this.stack.pop(), o && (t += "([" + o + "])");
    }
    return a.t === 26 && (this.markRef(a.i), t = "(" + this.serialize(a) + "," + t + ")"), this.assignIndexedValue(i, t);
  }
  serializeArrayBuffer(e) {
    let t = "new Uint8Array(", s = e.s, i = s.length;
    if (i) {
      t += "[" + s[0];
      for (let a = 1; a < i; a++) t += "," + s[a];
      t += "]";
    }
    return this.assignIndexedValue(e.i, t + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let t = e.i;
    this.stack.push(t);
    let s = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
    return this.stack.pop(), s;
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + _[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let t, s = e.f, i = e.i, a = e.s ? Ne : De;
    if (this.isIndexedValueInStack(s)) {
      let n = this.getRefParam(s.i);
      t = a + (e.s ? "().then(" + this.createFunction([], n) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + n) + ")");
    } else {
      this.stack.push(i);
      let n = this.serialize(s);
      this.stack.pop(), t = a + "(" + n + ")";
    }
    return this.assignIndexedValue(i, t);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, Z[e.s]);
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let t = this.plugins;
    if (t) for (let s = 0, i = t.length; s < i; s++) {
      let a = t[s];
      if (a.tag === e.c) return this.assignIndexedValue(e.i, a.serialize(e.s, this, { id: e.i }));
    }
    throw new Ie(e.c);
  }
  getConstructor(e) {
    let t = this.serialize(e);
    return t === this.getRefParam(e.i) ? t : "(" + t + ")";
  }
  serializePromiseConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReferenceValue(e) {
    switch (e) {
      case 0:
        return "[]";
      case 1:
        return this.createFunction(["s", "f", "p"], "((p=new Promise(" + this.createEffectfulFunction(["a", "b"], "s=a,f=b") + ")).s=s,p.f=f,p)");
      case 2:
        return this.createEffectfulFunction(["p", "d"], 'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');
      case 3:
        return this.createEffectfulFunction(["p", "d"], 'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');
      case 4:
        return this.createFunction(["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + this.createEffectfulFunction(["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + this.createEffectfulFunction(["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + this.createFunction(["o", "t"], "(a&&(l[t=p++]=o),n(o)," + this.createEffectfulFunction([], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + this.createFunction(["o"], "e(o)") + ",next:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + this.createEffectfulFunction(["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      case 5:
        return this.createFunction(["a", "s"], "((s=(a=new AbortController).signal).a=a,s)");
      case 6:
        return this.createEffectfulFunction(["s", "r"], "s.a.abort(r);delete s.a");
      default:
        return "";
    }
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, this.serializeSpecialReferenceValue(e.s));
  }
  serializeIteratorFactory(e) {
    let t = "", s = !1;
    return e.f.t !== 4 && (this.markRef(e.f.i), t = "(" + this.serialize(e.f) + ",", s = !0), t += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), s && (t += ")"), t;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let t = e.a[0], s = e.a[1], i = "";
    t.t !== 4 && (this.markRef(t.i), i += "(" + this.serialize(t)), s.t !== 4 && (this.markRef(s.i), i += (i ? "," : "(") + this.serialize(s)), i && (i += ",");
    let a = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(s.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(p.push(t=" + this.getRefParam(t.i) + "()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return i ? i + a + ")" : a;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let t = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), s = e.a.length;
    if (s) {
      let i = this.serialize(e.a[0]);
      for (let a = 1; a < s; a++) i += "," + this.serialize(e.a[a]);
      return "(" + t + "," + i + "," + this.getRefParam(e.i) + ")";
    }
    return t;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serializeAbortSignalSync(e) {
    return this.assignIndexedValue(e.i, "AbortSignal.abort(" + this.serialize(e.f) + ")");
  }
  serializeAbortSignalConstructor(e) {
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()");
  }
  serializeAbortSignalAbort(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serialize(e) {
    try {
      switch (e.t) {
        case 2:
          return q[e.s];
        case 0:
          return "" + e.s;
        case 1:
          return '"' + e.s + '"';
        case 3:
          return e.s + "n";
        case 4:
          return this.getRefParam(e.i);
        case 18:
          return this.serializeReference(e);
        case 9:
          return this.serializeArray(e);
        case 10:
          return this.serializeObject(e);
        case 11:
          return this.serializeNullConstructor(e);
        case 5:
          return this.serializeDate(e);
        case 6:
          return this.serializeRegExp(e);
        case 7:
          return this.serializeSet(e);
        case 8:
          return this.serializeMap(e);
        case 19:
          return this.serializeArrayBuffer(e);
        case 16:
        case 15:
          return this.serializeTypedArray(e);
        case 20:
          return this.serializeDataView(e);
        case 14:
          return this.serializeAggregateError(e);
        case 13:
          return this.serializeError(e);
        case 12:
          return this.serializePromise(e);
        case 17:
          return this.serializeWellKnownSymbol(e);
        case 21:
          return this.serializeBoxed(e);
        case 22:
          return this.serializePromiseConstructor(e);
        case 23:
          return this.serializePromiseResolve(e);
        case 24:
          return this.serializePromiseReject(e);
        case 25:
          return this.serializePlugin(e);
        case 26:
          return this.serializeSpecialReference(e);
        case 27:
          return this.serializeIteratorFactory(e);
        case 28:
          return this.serializeIteratorFactoryInstance(e);
        case 29:
          return this.serializeAsyncIteratorFactory(e);
        case 30:
          return this.serializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.serializeStreamConstructor(e);
        case 32:
          return this.serializeStreamNext(e);
        case 33:
          return this.serializeStreamThrow(e);
        case 34:
          return this.serializeStreamReturn(e);
        case 36:
          return this.serializeAbortSignalAbort(e);
        case 35:
          return this.serializeAbortSignalConstructor(e);
        case 37:
          return this.serializeAbortSignalSync(e);
        default:
          throw new m(e);
      }
    } catch (t) {
      throw new Ae(t);
    }
  }
}, Ke = class extends Oe {
  parseItems(e) {
    let t = [];
    for (let s = 0, i = e.length; s < i; s++) s in e && (t[s] = this.parse(e[s]));
    return t;
  }
  parseArray(e, t) {
    return ce(e, t, this.parseItems(t));
  }
  parseProperties(e) {
    let t = Object.entries(e), s = [], i = [];
    for (let n = 0, l = t.length; n < l; n++) s.push(g(t[n][0])), i.push(this.parse(t[n][1]));
    let a = Symbol.iterator;
    return a in e && (s.push(this.parseWellKnownSymbol(a)), i.push(ye(this.parseIteratorFactory(), this.parse(Ve(e))))), a = Symbol.asyncIterator, a in e && (s.push(this.parseWellKnownSymbol(a)), i.push(be(this.parseAsyncIteratorFactory(), this.parse(Fe())))), a = Symbol.toStringTag, a in e && (s.push(this.parseWellKnownSymbol(a)), i.push(k(e[a]))), a = Symbol.isConcatSpreadable, a in e && (s.push(this.parseWellKnownSymbol(a)), i.push(e[a] ? w : R)), { k: s, v: i, s: s.length };
  }
  parsePlainObject(e, t, s) {
    return this.createObjectNode(e, t, s, this.parseProperties(t));
  }
  parseBoxed(e, t) {
    return oe(e, this.parse(t.valueOf()));
  }
  parseTypedArray(e, t) {
    return he(e, t, this.parse(t.buffer));
  }
  parseBigIntTypedArray(e, t) {
    return fe(e, t, this.parse(t.buffer));
  }
  parseDataView(e, t) {
    return pe(e, t, this.parse(t.buffer));
  }
  parseError(e, t) {
    let s = x(t, this.features);
    return ge(e, t, s ? this.parseProperties(s) : r);
  }
  parseAggregateError(e, t) {
    let s = x(t, this.features);
    return de(e, t, s ? this.parseProperties(s) : r);
  }
  parseMap(e, t) {
    let s = [], i = [];
    for (let [a, n] of t.entries()) s.push(this.parse(a)), i.push(this.parse(n));
    return this.createMapNode(e, s, i, t.size);
  }
  parseSet(e, t) {
    let s = [];
    for (let i of t.keys()) s.push(this.parse(i));
    return me(e, t.size, s);
  }
  parsePlugin(e, t) {
    let s = this.plugins;
    if (s) for (let i = 0, a = s.length; i < a; i++) {
      let n = s[i];
      if (n.parse.sync && n.test(t)) return ue(e, n.tag, n.parse.sync(t, this, { id: e }));
    }
  }
  parseStream(e, t) {
    return ze(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, t) {
    return this.createPromiseConstructorNode(e);
  }
  parseAbortSignalSync(e, t) {
    return c(37, e, r, r, r, r, r, r, r, this.parse(t.reason), r, r);
  }
  parseAbortSignal(e, t) {
    return t.aborted ? this.parseAbortSignalSync(e, t) : this.createAbortSignalConstructorNode(e);
  }
  parseObject(e, t) {
    if (Array.isArray(t)) return this.parseArray(e, t);
    if (Pe(t)) return this.parseStream(e, t);
    let s = t.constructor;
    if (s === Re) return this.parse(t.replacement);
    let i = this.parsePlugin(e, t);
    if (i) return i;
    switch (s) {
      case Object:
        return this.parsePlainObject(e, t, !1);
      case void 0:
        return this.parsePlainObject(e, t, !0);
      case Date:
        return ie(e, t);
      case RegExp:
        return ae(e, t);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, t);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, t);
      case ArrayBuffer:
        return ne(e, t);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, t);
      case DataView:
        return this.parseDataView(e, t);
      case Map:
        return this.parseMap(e, t);
      case Set:
        return this.parseSet(e, t);
    }
    if (s === Promise || t instanceof Promise) return this.parsePromise(e, t);
    let a = this.features;
    if (a & 32 && typeof AbortSignal != "undefined" && s === AbortSignal) return this.parseAbortSignal(e, t);
    if (a & 16) switch (s) {
      case BigInt64Array:
      case BigUint64Array:
        return this.parseBigIntTypedArray(e, t);
    }
    if (a & 1 && typeof AggregateError != "undefined" && (s === AggregateError || t instanceof AggregateError)) return this.parseAggregateError(e, t);
    if (t instanceof Error) return this.parseError(e, t);
    if (Symbol.iterator in t || Symbol.asyncIterator in t) return this.parsePlainObject(e, t, !!s);
    throw new z(t);
  }
  parse(e) {
    try {
      switch (typeof e) {
        case "boolean":
          return e ? w : R;
        case "undefined":
          return X;
        case "string":
          return k(e);
        case "number":
          return te(e);
        case "bigint":
          return re(e);
        case "object": {
          if (e) {
            let t = this.getReference(e);
            return t.type === 0 ? this.parseObject(t.value, e) : t.value;
          }
          return Y;
        }
        case "symbol":
          return this.parseWellKnownSymbol(e);
        case "function":
          return this.parseFunction(e);
        default:
          throw new z(e);
      }
    } catch (t) {
      throw new ve(t);
    }
  }
}, D = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_", V = D.length, B = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_", O = B.length;
function Ue(e) {
  let t = e % V, s = D[t];
  for (e = (e - t) / V; e > 0; ) t = e % O, s += B[t], e = (e - t) / O;
  return s;
}
var $e = class extends We {
  constructor() {
    super(...arguments), this.mode = "vanilla", this.valid = /* @__PURE__ */ new Map(), this.vars = [];
  }
  getRefParam(e) {
    let t = this.valid.get(e);
    t == null && (t = this.valid.size, this.valid.set(e, t));
    let s = this.vars[t];
    return s == null && (s = Ue(t), this.vars[t] = s), s;
  }
  assignIndexedValue(e, t) {
    return this.isMarked(e) ? this.getRefParam(e) + "=" + t : t;
  }
  serializePromiseConstructor(e) {
    throw new m(e);
  }
  serializePromiseResolve(e) {
    throw new m(e);
  }
  serializePromiseReject(e) {
    throw new m(e);
  }
  serializeAbortSignalAbort(e) {
    throw new m(e);
  }
  serializeTop(e) {
    let t = this.serialize(e);
    if (e.i != null && this.vars.length) {
      let s = this.resolvePatches(), i = t;
      if (s) {
        let a = this.getRefParam(e.i);
        i = t + "," + s + a, t.startsWith(a + "=") || (i = a + "=" + i), i = "(" + i + ")";
      }
      return "(" + this.createFunction(this.vars, i) + ")()";
    }
    return e.t === 10 ? "(" + t + ")" : t;
  }
}, Le = class extends Ke {
  constructor() {
    super(...arguments), this.mode = "vanilla";
  }
};
function Ze(e, t = {}) {
  let s = L(t.plugins), i = new Le({ plugins: s, disabledFeatures: t.disabledFeatures }), a = i.parse(e);
  return new $e({ plugins: s, features: i.features, markedRefs: i.marked }).serializeTop(a);
}
function qe(e) {
  return (0, eval)(e);
}
export {
  Ze as P,
  qe as z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vyb3ZhbC1CcjltbWo1OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nlcm92YWxAMS4yLjAvbm9kZV9tb2R1bGVzL3Nlcm92YWwvZGlzdC9lc20vcHJvZHVjdGlvbi9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEY9KGk9PihpW2kuQWdncmVnYXRlRXJyb3I9MV09XCJBZ2dyZWdhdGVFcnJvclwiLGlbaS5BcnJvd0Z1bmN0aW9uPTJdPVwiQXJyb3dGdW5jdGlvblwiLGlbaS5FcnJvclByb3RvdHlwZVN0YWNrPTRdPVwiRXJyb3JQcm90b3R5cGVTdGFja1wiLGlbaS5PYmplY3RBc3NpZ249OF09XCJPYmplY3RBc3NpZ25cIixpW2kuQmlnSW50VHlwZWRBcnJheT0xNl09XCJCaWdJbnRUeXBlZEFycmF5XCIsaVtpLkFib3J0U2lnbmFsPTMyXT1cIkFib3J0U2lnbmFsXCIsaSkpKEZ8fHt9KTtmdW5jdGlvbiB5cihvKXtzd2l0Y2gobyl7Y2FzZSdcIic6cmV0dXJuJ1xcXFxcIic7Y2FzZVwiXFxcXFwiOnJldHVyblwiXFxcXFxcXFxcIjtjYXNlYFxuYDpyZXR1cm5cIlxcXFxuXCI7Y2FzZVwiXFxyXCI6cmV0dXJuXCJcXFxcclwiO2Nhc2VcIlxcYlwiOnJldHVyblwiXFxcXGJcIjtjYXNlXCJcdFwiOnJldHVyblwiXFxcXHRcIjtjYXNlXCJcXGZcIjpyZXR1cm5cIlxcXFxmXCI7Y2FzZVwiPFwiOnJldHVyblwiXFxcXHgzQ1wiO2Nhc2VcIlxcdTIwMjhcIjpyZXR1cm5cIlxcXFx1MjAyOFwiO2Nhc2VcIlxcdTIwMjlcIjpyZXR1cm5cIlxcXFx1MjAyOVwiO2RlZmF1bHQ6cmV0dXJufX1mdW5jdGlvbiBwKG8pe2xldCBlPVwiXCIscj0wLHM7Zm9yKGxldCBuPTAsYT1vLmxlbmd0aDtuPGE7bisrKXM9eXIob1tuXSkscyYmKGUrPW8uc2xpY2UocixuKStzLHI9bisxKTtyZXR1cm4gcj09PTA/ZT1vOmUrPW8uc2xpY2UociksZX1mdW5jdGlvbiB2cihvKXtzd2l0Y2gobyl7Y2FzZVwiXFxcXFxcXFxcIjpyZXR1cm5cIlxcXFxcIjtjYXNlJ1xcXFxcIic6cmV0dXJuJ1wiJztjYXNlXCJcXFxcblwiOnJldHVybmBcbmA7Y2FzZVwiXFxcXHJcIjpyZXR1cm5cIlxcclwiO2Nhc2VcIlxcXFxiXCI6cmV0dXJuXCJcXGJcIjtjYXNlXCJcXFxcdFwiOnJldHVyblwiXHRcIjtjYXNlXCJcXFxcZlwiOnJldHVyblwiXFxmXCI7Y2FzZVwiXFxcXHgzQ1wiOnJldHVyblwiPFwiO2Nhc2VcIlxcXFx1MjAyOFwiOnJldHVyblwiXFx1MjAyOFwiO2Nhc2VcIlxcXFx1MjAyOVwiOnJldHVyblwiXFx1MjAyOVwiO2RlZmF1bHQ6cmV0dXJuIG99fWZ1bmN0aW9uIGIobyl7cmV0dXJuIG8ucmVwbGFjZSgvKFxcXFxcXFxcfFxcXFxcInxcXFxcbnxcXFxccnxcXFxcYnxcXFxcdHxcXFxcZnxcXFxcdTIwMjh8XFxcXHUyMDI5fFxcXFx4M0MpL2csdnIpfXZhciBFPVwiX19TRVJPVkFMX1JFRlNfX1wiLFo9XCIkUlwiLG9lPWBzZWxmLiR7Wn1gO2Z1bmN0aW9uIE5yKG8pe3JldHVybiBvPT1udWxsP2Ake29lfT0ke29lfXx8W11gOmAoJHtvZX09JHtvZX18fHt9KVtcIiR7cChvKX1cIl09W11gfWZ1bmN0aW9uIG0obyxlKXtpZighbyl0aHJvdyBlfXZhciBCZT1uZXcgTWFwLFI9bmV3IE1hcDtmdW5jdGlvbiBicihvLGUpe3JldHVybiBCZS5zZXQoZSxvKSxSLnNldChvLGUpLGV9ZnVuY3Rpb24gbmUobyl7cmV0dXJuIEJlLmhhcyhvKX1mdW5jdGlvbiBBcihvKXtyZXR1cm4gUi5oYXMobyl9ZnVuY3Rpb24gV2Uobyl7cmV0dXJuIG0obmUobyksbmV3IGFlKG8pKSxCZS5nZXQobyl9ZnVuY3Rpb24gS2Uobyl7cmV0dXJuIG0oQXIobyksbmV3IGllKG8pKSxSLmdldChvKX10eXBlb2YgZ2xvYmFsVGhpcyE9XCJ1bmRlZmluZWRcIj9PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcyxFLHt2YWx1ZTpSLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExfSk6dHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIj9PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LEUse3ZhbHVlOlIsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiExLGVudW1lcmFibGU6ITF9KTp0eXBlb2Ygc2VsZiE9XCJ1bmRlZmluZWRcIj9PYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZixFLHt2YWx1ZTpSLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExfSk6dHlwZW9mIGdsb2JhbCE9XCJ1bmRlZmluZWRcIiYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCxFLHt2YWx1ZTpSLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMSxlbnVtZXJhYmxlOiExfSk7ZnVuY3Rpb24gV3Iobyl7cmV0dXJuIG99ZnVuY3Rpb24gSmUobyxlKXtmb3IobGV0IHI9MCxzPWUubGVuZ3RoO3I8cztyKyspe2xldCBuPWVbcl07by5oYXMobil8fChvLmFkZChuKSxuLmV4dGVuZHMmJkplKG8sbi5leHRlbmRzKSl9fWZ1bmN0aW9uIGYobyl7aWYobyl7bGV0IGU9bmV3IFNldDtyZXR1cm4gSmUoZSxvKSxbLi4uZV19fWZ1bmN0aW9uIFllKG8pe3JldHVybiBuZXcgUHJvbWlzZShlPT57by5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwoKT0+e2Uoby5yZWFzb24pfSx7b25jZTohMH0pfSl9dmFyICRlPXswOlwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIiwxOlwiU3ltYm9sLmhhc0luc3RhbmNlXCIsMjpcIlN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcIiwzOlwiU3ltYm9sLml0ZXJhdG9yXCIsNDpcIlN5bWJvbC5tYXRjaFwiLDU6XCJTeW1ib2wubWF0Y2hBbGxcIiw2OlwiU3ltYm9sLnJlcGxhY2VcIiw3OlwiU3ltYm9sLnNlYXJjaFwiLDg6XCJTeW1ib2wuc3BlY2llc1wiLDk6XCJTeW1ib2wuc3BsaXRcIiwxMDpcIlN5bWJvbC50b1ByaW1pdGl2ZVwiLDExOlwiU3ltYm9sLnRvU3RyaW5nVGFnXCIsMTI6XCJTeW1ib2wudW5zY29wYWJsZXNcIn0sbGU9e1tTeW1ib2wuYXN5bmNJdGVyYXRvcl06MCxbU3ltYm9sLmhhc0luc3RhbmNlXToxLFtTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlXToyLFtTeW1ib2wuaXRlcmF0b3JdOjMsW1N5bWJvbC5tYXRjaF06NCxbU3ltYm9sLm1hdGNoQWxsXTo1LFtTeW1ib2wucmVwbGFjZV06NixbU3ltYm9sLnNlYXJjaF06NyxbU3ltYm9sLnNwZWNpZXNdOjgsW1N5bWJvbC5zcGxpdF06OSxbU3ltYm9sLnRvUHJpbWl0aXZlXToxMCxbU3ltYm9sLnRvU3RyaW5nVGFnXToxMSxbU3ltYm9sLnVuc2NvcGFibGVzXToxMn0sR2U9ezA6U3ltYm9sLmFzeW5jSXRlcmF0b3IsMTpTeW1ib2wuaGFzSW5zdGFuY2UsMjpTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlLDM6U3ltYm9sLml0ZXJhdG9yLDQ6U3ltYm9sLm1hdGNoLDU6U3ltYm9sLm1hdGNoQWxsLDY6U3ltYm9sLnJlcGxhY2UsNzpTeW1ib2wuc2VhcmNoLDg6U3ltYm9sLnNwZWNpZXMsOTpTeW1ib2wuc3BsaXQsMTA6U3ltYm9sLnRvUHJpbWl0aXZlLDExOlN5bWJvbC50b1N0cmluZ1RhZywxMjpTeW1ib2wudW5zY29wYWJsZXN9LHFlPXsyOlwiITBcIiwzOlwiITFcIiwxOlwidm9pZCAwXCIsMDpcIm51bGxcIiw0OlwiLTBcIiw1OlwiMS8wXCIsNjpcIi0xLzBcIiw3OlwiMC8wXCJ9LEhlPXsyOiEwLDM6ITEsMTp2b2lkIDAsMDpudWxsLDQ6LTAsNTpOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksNjpOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksNzpOdW1iZXIuTmFOfTt2YXIgY2U9ezA6XCJFcnJvclwiLDE6XCJFdmFsRXJyb3JcIiwyOlwiUmFuZ2VFcnJvclwiLDM6XCJSZWZlcmVuY2VFcnJvclwiLDQ6XCJTeW50YXhFcnJvclwiLDU6XCJUeXBlRXJyb3JcIiw2OlwiVVJJRXJyb3JcIn0sWmU9ezA6RXJyb3IsMTpFdmFsRXJyb3IsMjpSYW5nZUVycm9yLDM6UmVmZXJlbmNlRXJyb3IsNDpTeW50YXhFcnJvciw1OlR5cGVFcnJvciw2OlVSSUVycm9yfSx0PXZvaWQgMDtmdW5jdGlvbiB1KG8sZSxyLHMsbixhLGksbCxjLGQsaCxIKXtyZXR1cm57dDpvLGk6ZSxzOnIsbDpzLGM6bixtOmEscDppLGU6bCxhOmMsZjpkLGI6aCxvOkh9fWZ1bmN0aW9uIEEobyl7cmV0dXJuIHUoMix0LG8sdCx0LHQsdCx0LHQsdCx0LHQpfXZhciB4PUEoMiksST1BKDMpLHVlPUEoMSksZGU9QSgwKSxYZT1BKDQpLFFlPUEoNSksZXI9QSg2KSxycj1BKDcpO2Z1bmN0aW9uIHBlKG8pe3JldHVybiBvIGluc3RhbmNlb2YgRXZhbEVycm9yPzE6byBpbnN0YW5jZW9mIFJhbmdlRXJyb3I/MjpvIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3I/MzpvIGluc3RhbmNlb2YgU3ludGF4RXJyb3I/NDpvIGluc3RhbmNlb2YgVHlwZUVycm9yPzU6byBpbnN0YW5jZW9mIFVSSUVycm9yPzY6MH1mdW5jdGlvbiB4cihvKXtsZXQgZT1jZVtwZShvKV07cmV0dXJuIG8ubmFtZSE9PWU/e25hbWU6by5uYW1lfTpvLmNvbnN0cnVjdG9yLm5hbWUhPT1lP3tuYW1lOm8uY29uc3RydWN0b3IubmFtZX06e319ZnVuY3Rpb24gVihvLGUpe2xldCByPXhyKG8pLHM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobyk7Zm9yKGxldCBuPTAsYT1zLmxlbmd0aCxpO248YTtuKyspaT1zW25dLGkhPT1cIm5hbWVcIiYmaSE9PVwibWVzc2FnZVwiJiYoaT09PVwic3RhY2tcIj9lJjQmJihyPXJ8fHt9LHJbaV09b1tpXSk6KHI9cnx8e30scltpXT1vW2ldKSk7cmV0dXJuIHJ9ZnVuY3Rpb24gZmUobyl7cmV0dXJuIE9iamVjdC5pc0Zyb3plbihvKT8zOk9iamVjdC5pc1NlYWxlZChvKT8yOk9iamVjdC5pc0V4dGVuc2libGUobyk/MDoxfWZ1bmN0aW9uIG1lKG8pe3N3aXRjaChvKXtjYXNlIE51bWJlci5QT1NJVElWRV9JTkZJTklUWTpyZXR1cm4gUWU7Y2FzZSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk6cmV0dXJuIGVyfXJldHVybiBvIT09bz9ycjpPYmplY3QuaXMobywtMCk/WGU6dSgwLHQsbyx0LHQsdCx0LHQsdCx0LHQsdCl9ZnVuY3Rpb24gdyhvKXtyZXR1cm4gdSgxLHQscChvKSx0LHQsdCx0LHQsdCx0LHQsdCl9ZnVuY3Rpb24gU2Uobyl7cmV0dXJuIHUoMyx0LFwiXCIrbyx0LHQsdCx0LHQsdCx0LHQsdCl9ZnVuY3Rpb24gc3Iobyl7cmV0dXJuIHUoNCxvLHQsdCx0LHQsdCx0LHQsdCx0LHQpfWZ1bmN0aW9uIGdlKG8sZSl7cmV0dXJuIHUoNSxvLGUudG9JU09TdHJpbmcoKSx0LHQsdCx0LHQsdCx0LHQsdCl9ZnVuY3Rpb24gaGUobyxlKXtyZXR1cm4gdSg2LG8sdCx0LHAoZS5zb3VyY2UpLGUuZmxhZ3MsdCx0LHQsdCx0LHQpfWZ1bmN0aW9uIHllKG8sZSl7bGV0IHI9bmV3IFVpbnQ4QXJyYXkoZSkscz1yLmxlbmd0aCxuPW5ldyBBcnJheShzKTtmb3IobGV0IGE9MDthPHM7YSsrKW5bYV09clthXTtyZXR1cm4gdSgxOSxvLG4sdCx0LHQsdCx0LHQsdCx0LHQpfWZ1bmN0aW9uIG9yKG8sZSl7cmV0dXJuIHUoMTcsbyxsZVtlXSx0LHQsdCx0LHQsdCx0LHQsdCl9ZnVuY3Rpb24gamUobyxlKXtyZXR1cm4gdSgxOCxvLHAoV2UoZSkpLHQsdCx0LHQsdCx0LHQsdCx0KX1mdW5jdGlvbiBEKG8sZSxyKXtyZXR1cm4gdSgyNSxvLHIsdCxwKGUpLHQsdCx0LHQsdCx0LHQpfWZ1bmN0aW9uIHZlKG8sZSxyKXtyZXR1cm4gdSg5LG8sdCxlLmxlbmd0aCx0LHQsdCx0LHIsdCx0LGZlKGUpKX1mdW5jdGlvbiBOZShvLGUpe3JldHVybiB1KDIxLG8sdCx0LHQsdCx0LHQsdCxlLHQsdCl9ZnVuY3Rpb24gYmUobyxlLHIpe3JldHVybiB1KDE1LG8sdCxlLmxlbmd0aCxlLmNvbnN0cnVjdG9yLm5hbWUsdCx0LHQsdCxyLGUuYnl0ZU9mZnNldCx0KX1mdW5jdGlvbiBBZShvLGUscil7cmV0dXJuIHUoMTYsbyx0LGUubGVuZ3RoLGUuY29uc3RydWN0b3IubmFtZSx0LHQsdCx0LHIsZS5ieXRlT2Zmc2V0LHQpfWZ1bmN0aW9uIHhlKG8sZSxyKXtyZXR1cm4gdSgyMCxvLHQsZS5ieXRlTGVuZ3RoLHQsdCx0LHQsdCxyLGUuYnl0ZU9mZnNldCx0KX1mdW5jdGlvbiBJZShvLGUscil7cmV0dXJuIHUoMTMsbyxwZShlKSx0LHQscChlLm1lc3NhZ2UpLHIsdCx0LHQsdCx0KX1mdW5jdGlvbiB3ZShvLGUscil7cmV0dXJuIHUoMTQsbyxwZShlKSx0LHQscChlLm1lc3NhZ2UpLHIsdCx0LHQsdCx0KX1mdW5jdGlvbiBFZShvLGUscil7cmV0dXJuIHUoNyxvLHQsZSx0LHQsdCx0LHIsdCx0LHQpfWZ1bmN0aW9uIEIobyxlKXtyZXR1cm4gdSgyOCx0LHQsdCx0LHQsdCx0LFtvLGVdLHQsdCx0KX1mdW5jdGlvbiBqKG8sZSl7cmV0dXJuIHUoMzAsdCx0LHQsdCx0LHQsdCxbbyxlXSx0LHQsdCl9ZnVuY3Rpb24gXyhvLGUscil7cmV0dXJuIHUoMzEsbyx0LHQsdCx0LHQsdCxyLGUsdCx0KX1mdW5jdGlvbiBSZShvLGUpe3JldHVybiB1KDMyLG8sdCx0LHQsdCx0LHQsdCxlLHQsdCl9ZnVuY3Rpb24gUGUobyxlKXtyZXR1cm4gdSgzMyxvLHQsdCx0LHQsdCx0LHQsZSx0LHQpfWZ1bmN0aW9uIENlKG8sZSl7cmV0dXJuIHUoMzQsbyx0LHQsdCx0LHQsdCx0LGUsdCx0KX12YXJ7dG9TdHJpbmc6X2V9PU9iamVjdC5wcm90b3R5cGU7ZnVuY3Rpb24gSXIobyxlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEVycm9yP2BTZXJvdmFsIGNhdWdodCBhbiBlcnJvciBkdXJpbmcgdGhlICR7b30gcHJvY2Vzcy5cbiAgXG4ke2UubmFtZX1cbiR7ZS5tZXNzYWdlfVxuXG4tIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgY2hlY2sgdGhlIFwiY2F1c2VcIiBwcm9wZXJ0eSBvZiB0aGlzIGVycm9yLlxuLSBJZiB5b3UgYmVsaWV2ZSB0aGlzIGlzIGFuIGVycm9yIGluIFNlcm92YWwsIHBsZWFzZSBzdWJtaXQgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2x4c21uc3ljL3Nlcm92YWwvaXNzdWVzL25ld2A6YFNlcm92YWwgY2F1Z2h0IGFuIGVycm9yIGR1cmluZyB0aGUgJHtvfSBwcm9jZXNzLlxuXG5cIiR7X2UuY2FsbChlKX1cIlxuXG5Gb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIGNoZWNrIHRoZSBcImNhdXNlXCIgcHJvcGVydHkgb2YgdGhpcyBlcnJvci5gfXZhciBYPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IocixzKXtzdXBlcihJcihyLHMpKTt0aGlzLmNhdXNlPXN9fSxNPWNsYXNzIGV4dGVuZHMgWHtjb25zdHJ1Y3RvcihlKXtzdXBlcihcInBhcnNpbmdcIixlKX19LHplPWNsYXNzIGV4dGVuZHMgWHtjb25zdHJ1Y3RvcihlKXtzdXBlcihcInNlcmlhbGl6YXRpb25cIixlKX19LE9lPWNsYXNzIGV4dGVuZHMgWHtjb25zdHJ1Y3RvcihlKXtzdXBlcihcImRlc2VyaWFsaXphdGlvblwiLGUpfX0sUz1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHIpe3N1cGVyKGBUaGUgdmFsdWUgJHtfZS5jYWxsKHIpfSBvZiB0eXBlIFwiJHt0eXBlb2Ygcn1cIiBjYW5ub3QgYmUgcGFyc2VkL3NlcmlhbGl6ZWQuXG4gICAgICBcblRoZXJlIGFyZSBmZXcgd29ya2Fyb3VuZHMgZm9yIHRoaXMgcHJvYmxlbTpcbi0gVHJhbnNmb3JtIHRoZSB2YWx1ZSBpbiBhIHdheSB0aGF0IGl0IGNhbiBiZSBzZXJpYWxpemVkLlxuLSBJZiB0aGUgcmVmZXJlbmNlIGlzIHByZXNlbnQgb24gbXVsdGlwbGUgcnVudGltZXMgKGlzb21vcnBoaWMpLCB5b3UgY2FuIHVzZSB0aGUgUmVmZXJlbmNlIEFQSSB0byBtYXAgdGhlIHJlZmVyZW5jZXMuYCk7dGhpcy52YWx1ZT1yfX0sZz1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKCdVbnN1cHBvcnRlZCBub2RlIHR5cGUgXCInK2UudCsnXCIuJyl9fSxVPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoJ01pc3NpbmcgcGx1Z2luIGZvciB0YWcgXCInK2UrJ1wiLicpfX0sdj1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKCdNaXNzaW5nIFwiJytlKydcIiBpbnN0YW5jZS4nKX19LGFlPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3Iocil7c3VwZXIoJ01pc3NpbmcgcmVmZXJlbmNlIGZvciB0aGUgdmFsdWUgXCInK19lLmNhbGwocikrJ1wiIG9mIHR5cGUgXCInK3R5cGVvZiByKydcIicpO3RoaXMudmFsdWU9cn19LGllPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoJ01pc3NpbmcgcmVmZXJlbmNlIGZvciBpZCBcIicrcChlKSsnXCInKX19LFRlPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoJ1Vua25vd24gVHlwZWRBcnJheSBcIicrZSsnXCInKX19O3ZhciBQPWNsYXNze2NvbnN0cnVjdG9yKGUscil7dGhpcy52YWx1ZT1lO3RoaXMucmVwbGFjZW1lbnQ9cn19O3ZhciBucj17fSxhcj17fTt2YXIgaXI9ezA6e30sMTp7fSwyOnt9LDM6e30sNDp7fSw1Ont9LDY6e319O2Z1bmN0aW9uIFEoKXtsZXQgbyxlO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChyLHMpPT57bz1yLGU9c30pLHJlc29sdmUocil7byhyKX0scmVqZWN0KHIpe2Uocil9fX1mdW5jdGlvbiBrZShvKXtyZXR1cm5cIl9fU0VST1ZBTF9TVFJFQU1fX1wiaW4gb31mdW5jdGlvbiBMKCl7bGV0IG89bmV3IFNldCxlPVtdLHI9ITAscz0hMDtmdW5jdGlvbiBuKGwpe2ZvcihsZXQgYyBvZiBvLmtleXMoKSljLm5leHQobCl9ZnVuY3Rpb24gYShsKXtmb3IobGV0IGMgb2Ygby5rZXlzKCkpYy50aHJvdyhsKX1mdW5jdGlvbiBpKGwpe2ZvcihsZXQgYyBvZiBvLmtleXMoKSljLnJldHVybihsKX1yZXR1cm57X19TRVJPVkFMX1NUUkVBTV9fOiEwLG9uKGwpe3ImJm8uYWRkKGwpO2ZvcihsZXQgYz0wLGQ9ZS5sZW5ndGg7YzxkO2MrKyl7bGV0IGg9ZVtjXTtjPT09ZC0xJiYhcj9zP2wucmV0dXJuKGgpOmwudGhyb3coaCk6bC5uZXh0KGgpfXJldHVybigpPT57ciYmby5kZWxldGUobCl9fSxuZXh0KGwpe3ImJihlLnB1c2gobCksbihsKSl9LHRocm93KGwpe3ImJihlLnB1c2gobCksYShsKSxyPSExLHM9ITEsby5jbGVhcigpKX0scmV0dXJuKGwpe3ImJihlLnB1c2gobCksaShsKSxyPSExLHM9ITAsby5jbGVhcigpKX19fWZ1bmN0aW9uIEZlKG8pe2xldCBlPUwoKSxyPW9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7YXN5bmMgZnVuY3Rpb24gcygpe3RyeXtsZXQgbj1hd2FpdCByLm5leHQoKTtuLmRvbmU/ZS5yZXR1cm4obi52YWx1ZSk6KGUubmV4dChuLnZhbHVlKSxhd2FpdCBzKCkpfWNhdGNoKG4pe2UudGhyb3cobil9fXJldHVybiBzKCkuY2F0Y2goKCk9Pnt9KSxlfWZ1bmN0aW9uIGxyKG8pe3JldHVybigpPT57bGV0IGU9W10scj1bXSxzPTAsbj0tMSxhPSExO2Z1bmN0aW9uIGkoKXtmb3IobGV0IGM9MCxkPXIubGVuZ3RoO2M8ZDtjKyspcltjXS5yZXNvbHZlKHtkb25lOiEwLHZhbHVlOnZvaWQgMH0pfW8ub24oe25leHQoYyl7bGV0IGQ9ci5zaGlmdCgpO2QmJmQucmVzb2x2ZSh7ZG9uZTohMSx2YWx1ZTpjfSksZS5wdXNoKGMpfSx0aHJvdyhjKXtsZXQgZD1yLnNoaWZ0KCk7ZCYmZC5yZWplY3QoYyksaSgpLG49ZS5sZW5ndGgsZS5wdXNoKGMpLGE9ITB9LHJldHVybihjKXtsZXQgZD1yLnNoaWZ0KCk7ZCYmZC5yZXNvbHZlKHtkb25lOiEwLHZhbHVlOmN9KSxpKCksbj1lLmxlbmd0aCxlLnB1c2goYyl9fSk7ZnVuY3Rpb24gbCgpe2xldCBjPXMrKyxkPWVbY107aWYoYyE9PW4pcmV0dXJue2RvbmU6ITEsdmFsdWU6ZH07aWYoYSl0aHJvdyBkO3JldHVybntkb25lOiEwLHZhbHVlOmR9fXJldHVybntbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCl7cmV0dXJuIHRoaXN9LGFzeW5jIG5leHQoKXtpZihuPT09LTEpe2xldCBjPXMrKztpZihjPj1lLmxlbmd0aCl7bGV0IGQ9USgpO3JldHVybiByLnB1c2goZCksYXdhaXQgZC5wcm9taXNlfXJldHVybntkb25lOiExLHZhbHVlOmVbY119fXJldHVybiBzPm4/e2RvbmU6ITAsdmFsdWU6dm9pZCAwfTpsKCl9fX19ZnVuY3Rpb24gVyhvKXtsZXQgZT1bXSxyPS0xLHM9LTEsbj1vW1N5bWJvbC5pdGVyYXRvcl0oKTtmb3IoOzspdHJ5e2xldCBhPW4ubmV4dCgpO2lmKGUucHVzaChhLnZhbHVlKSxhLmRvbmUpe3M9ZS5sZW5ndGgtMTticmVha319Y2F0Y2goYSl7cj1lLmxlbmd0aCxlLnB1c2goYSl9cmV0dXJue3Y6ZSx0OnIsZDpzfX1mdW5jdGlvbiBjcihvKXtyZXR1cm4oKT0+e2xldCBlPTA7cmV0dXJue1tTeW1ib2wuaXRlcmF0b3JdKCl7cmV0dXJuIHRoaXN9LG5leHQoKXtpZihlPm8uZClyZXR1cm57ZG9uZTohMCx2YWx1ZTp0fTtsZXQgcj1lKysscz1vLnZbcl07aWYocj09PW8udCl0aHJvdyBzO3JldHVybntkb25lOnI9PT1vLmQsdmFsdWU6c319fX19YXN5bmMgZnVuY3Rpb24gTWUobyl7dHJ5e3JldHVyblsxLGF3YWl0IG9dfWNhdGNoKGUpe3JldHVyblswLGVdfX12YXIgSz1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLm1hcmtlZD1uZXcgU2V0O3RoaXMucGx1Z2lucz1lLnBsdWdpbnMsdGhpcy5mZWF0dXJlcz00N14oZS5kaXNhYmxlZEZlYXR1cmVzfHwwKSx0aGlzLnJlZnM9ZS5yZWZzfHxuZXcgTWFwfW1hcmtSZWYoZSl7dGhpcy5tYXJrZWQuYWRkKGUpfWlzTWFya2VkKGUpe3JldHVybiB0aGlzLm1hcmtlZC5oYXMoZSl9Z2V0SW5kZXhlZFZhbHVlKGUpe2xldCByPXRoaXMucmVmcy5nZXQoZSk7aWYociE9bnVsbClyZXR1cm4gdGhpcy5tYXJrUmVmKHIpLHt0eXBlOjEsdmFsdWU6c3Iocil9O2xldCBzPXRoaXMucmVmcy5zaXplO3JldHVybiB0aGlzLnJlZnMuc2V0KGUscykse3R5cGU6MCx2YWx1ZTpzfX1nZXRSZWZlcmVuY2UoZSl7bGV0IHI9dGhpcy5nZXRJbmRleGVkVmFsdWUoZSk7cmV0dXJuIHIudHlwZT09PTE/cjpuZShlKT97dHlwZToyLHZhbHVlOmplKHIudmFsdWUsZSl9OnJ9Z2V0U3RyaWN0UmVmZXJlbmNlKGUpe20obmUoZSksbmV3IFMoZSkpO2xldCByPXRoaXMuZ2V0SW5kZXhlZFZhbHVlKGUpO3JldHVybiByLnR5cGU9PT0xP3IudmFsdWU6amUoci52YWx1ZSxlKX1wYXJzZUZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdldFN0cmljdFJlZmVyZW5jZShlKX1wYXJzZVdlbGxLbm93blN5bWJvbChlKXtsZXQgcj10aGlzLmdldFJlZmVyZW5jZShlKTtyZXR1cm4gci50eXBlIT09MD9yLnZhbHVlOihtKGUgaW4gbGUsbmV3IFMoZSkpLG9yKHIudmFsdWUsZSkpfXBhcnNlU3BlY2lhbFJlZmVyZW5jZShlKXtsZXQgcj10aGlzLmdldEluZGV4ZWRWYWx1ZShpcltlXSk7cmV0dXJuIHIudHlwZT09PTE/ci52YWx1ZTp1KDI2LHIudmFsdWUsZSx0LHQsdCx0LHQsdCx0LHQsdCl9cGFyc2VJdGVyYXRvckZhY3RvcnkoKXtsZXQgZT10aGlzLmdldEluZGV4ZWRWYWx1ZShucik7cmV0dXJuIGUudHlwZT09PTE/ZS52YWx1ZTp1KDI3LGUudmFsdWUsdCx0LHQsdCx0LHQsdCx0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKFN5bWJvbC5pdGVyYXRvciksdCx0KX1wYXJzZUFzeW5jSXRlcmF0b3JGYWN0b3J5KCl7bGV0IGU9dGhpcy5nZXRJbmRleGVkVmFsdWUoYXIpO3JldHVybiBlLnR5cGU9PT0xP2UudmFsdWU6dSgyOSxlLnZhbHVlLHQsdCx0LHQsdCx0LFt0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSgxKSx0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKFN5bWJvbC5hc3luY0l0ZXJhdG9yKV0sdCx0LHQpfWNyZWF0ZU9iamVjdE5vZGUoZSxyLHMsbil7cmV0dXJuIHUocz8xMToxMCxlLHQsdCx0LHQsbix0LHQsdCx0LGZlKHIpKX1jcmVhdGVNYXBOb2RlKGUscixzLG4pe3JldHVybiB1KDgsZSx0LHQsdCx0LHQse2s6cix2OnMsczpufSx0LHRoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDApLHQsdCl9Y3JlYXRlUHJvbWlzZUNvbnN0cnVjdG9yTm9kZShlKXtyZXR1cm4gdSgyMixlLHQsdCx0LHQsdCx0LHQsdGhpcy5wYXJzZVNwZWNpYWxSZWZlcmVuY2UoMSksdCx0KX1jcmVhdGVBYm9ydFNpZ25hbENvbnN0cnVjdG9yTm9kZShlKXtyZXR1cm4gdSgzNSxlLHQsdCx0LHQsdCx0LHQsdGhpcy5wYXJzZVNwZWNpYWxSZWZlcmVuY2UoNSksdCx0KX19O3ZhciBDPWNsYXNzIGV4dGVuZHMgS3thc3luYyBwYXJzZUl0ZW1zKGUpe2xldCByPVtdO2ZvcihsZXQgcz0wLG49ZS5sZW5ndGg7czxuO3MrKylzIGluIGUmJihyW3NdPWF3YWl0IHRoaXMucGFyc2UoZVtzXSkpO3JldHVybiByfWFzeW5jIHBhcnNlQXJyYXkoZSxyKXtyZXR1cm4gdmUoZSxyLGF3YWl0IHRoaXMucGFyc2VJdGVtcyhyKSl9YXN5bmMgcGFyc2VQcm9wZXJ0aWVzKGUpe2xldCByPU9iamVjdC5lbnRyaWVzKGUpLHM9W10sbj1bXTtmb3IobGV0IGk9MCxsPXIubGVuZ3RoO2k8bDtpKyspcy5wdXNoKHAocltpXVswXSkpLG4ucHVzaChhd2FpdCB0aGlzLnBhcnNlKHJbaV1bMV0pKTtsZXQgYT1TeW1ib2wuaXRlcmF0b3I7cmV0dXJuIGEgaW4gZSYmKHMucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGEpKSxuLnB1c2goQih0aGlzLnBhcnNlSXRlcmF0b3JGYWN0b3J5KCksYXdhaXQgdGhpcy5wYXJzZShXKGUpKSkpKSxhPVN5bWJvbC5hc3luY0l0ZXJhdG9yLGEgaW4gZSYmKHMucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGEpKSxuLnB1c2goaih0aGlzLnBhcnNlQXN5bmNJdGVyYXRvckZhY3RvcnkoKSxhd2FpdCB0aGlzLnBhcnNlKEZlKGUpKSkpKSxhPVN5bWJvbC50b1N0cmluZ1RhZyxhIGluIGUmJihzLnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChhKSksbi5wdXNoKHcoZVthXSkpKSxhPVN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUsYSBpbiBlJiYocy5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLG4ucHVzaChlW2FdP3g6SSkpLHtrOnMsdjpuLHM6cy5sZW5ndGh9fWFzeW5jIHBhcnNlUGxhaW5PYmplY3QoZSxyLHMpe3JldHVybiB0aGlzLmNyZWF0ZU9iamVjdE5vZGUoZSxyLHMsYXdhaXQgdGhpcy5wYXJzZVByb3BlcnRpZXMocikpfWFzeW5jIHBhcnNlQm94ZWQoZSxyKXtyZXR1cm4gTmUoZSxhd2FpdCB0aGlzLnBhcnNlKHIudmFsdWVPZigpKSl9YXN5bmMgcGFyc2VUeXBlZEFycmF5KGUscil7cmV0dXJuIGJlKGUscixhd2FpdCB0aGlzLnBhcnNlKHIuYnVmZmVyKSl9YXN5bmMgcGFyc2VCaWdJbnRUeXBlZEFycmF5KGUscil7cmV0dXJuIEFlKGUscixhd2FpdCB0aGlzLnBhcnNlKHIuYnVmZmVyKSl9YXN5bmMgcGFyc2VEYXRhVmlldyhlLHIpe3JldHVybiB4ZShlLHIsYXdhaXQgdGhpcy5wYXJzZShyLmJ1ZmZlcikpfWFzeW5jIHBhcnNlRXJyb3IoZSxyKXtsZXQgcz1WKHIsdGhpcy5mZWF0dXJlcyk7cmV0dXJuIEllKGUscixzP2F3YWl0IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHMpOnQpfWFzeW5jIHBhcnNlQWdncmVnYXRlRXJyb3IoZSxyKXtsZXQgcz1WKHIsdGhpcy5mZWF0dXJlcyk7cmV0dXJuIHdlKGUscixzP2F3YWl0IHRoaXMucGFyc2VQcm9wZXJ0aWVzKHMpOnQpfWFzeW5jIHBhcnNlTWFwKGUscil7bGV0IHM9W10sbj1bXTtmb3IobGV0W2EsaV1vZiByLmVudHJpZXMoKSlzLnB1c2goYXdhaXQgdGhpcy5wYXJzZShhKSksbi5wdXNoKGF3YWl0IHRoaXMucGFyc2UoaSkpO3JldHVybiB0aGlzLmNyZWF0ZU1hcE5vZGUoZSxzLG4sci5zaXplKX1hc3luYyBwYXJzZVNldChlLHIpe2xldCBzPVtdO2ZvcihsZXQgbiBvZiByLmtleXMoKSlzLnB1c2goYXdhaXQgdGhpcy5wYXJzZShuKSk7cmV0dXJuIEVlKGUsci5zaXplLHMpfWFzeW5jIHBhcnNlUHJvbWlzZShlLHIpe2xldFtzLG5dPWF3YWl0IE1lKHIpO3JldHVybiB1KDEyLGUscyx0LHQsdCx0LHQsdCxhd2FpdCB0aGlzLnBhcnNlKG4pLHQsdCl9YXN5bmMgcGFyc2VQbHVnaW4oZSxyKXtsZXQgcz10aGlzLnBsdWdpbnM7aWYocylmb3IobGV0IG49MCxhPXMubGVuZ3RoO248YTtuKyspe2xldCBpPXNbbl07aWYoaS5wYXJzZS5hc3luYyYmaS50ZXN0KHIpKXJldHVybiBEKGUsaS50YWcsYXdhaXQgaS5wYXJzZS5hc3luYyhyLHRoaXMse2lkOmV9KSl9cmV0dXJuIHR9YXN5bmMgcGFyc2VTdHJlYW0oZSxyKXtyZXR1cm4gXyhlLHRoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDQpLGF3YWl0IG5ldyBQcm9taXNlKChzLG4pPT57bGV0IGE9W10saT1yLm9uKHtuZXh0Omw9Pnt0aGlzLm1hcmtSZWYoZSksdGhpcy5wYXJzZShsKS50aGVuKGM9PnthLnB1c2goUmUoZSxjKSl9LGM9PntuKGMpLGkoKX0pfSx0aHJvdzpsPT57dGhpcy5tYXJrUmVmKGUpLHRoaXMucGFyc2UobCkudGhlbihjPT57YS5wdXNoKFBlKGUsYykpLHMoYSksaSgpfSxjPT57bihjKSxpKCl9KX0scmV0dXJuOmw9Pnt0aGlzLm1hcmtSZWYoZSksdGhpcy5wYXJzZShsKS50aGVuKGM9PnthLnB1c2goQ2UoZSxjKSkscyhhKSxpKCl9LGM9PntuKGMpLGkoKX0pfX0pfSkpfWFzeW5jIHBhcnNlQWJvcnRTaWduYWxTeW5jKGUscil7cmV0dXJuIHUoMzcsZSx0LHQsdCx0LHQsdCx0LGF3YWl0IHRoaXMucGFyc2Uoci5yZWFzb24pLHQsdCl9YXN5bmMgcGFyc2VBYm9ydFNpZ25hbChlLHIpe3JldHVybiByLmFib3J0ZWR8fGF3YWl0IFllKHIpLHRoaXMucGFyc2VBYm9ydFNpZ25hbFN5bmMoZSxyKX1hc3luYyBwYXJzZU9iamVjdChlLHIpe2lmKEFycmF5LmlzQXJyYXkocikpcmV0dXJuIHRoaXMucGFyc2VBcnJheShlLHIpO2lmKGtlKHIpKXJldHVybiB0aGlzLnBhcnNlU3RyZWFtKGUscik7bGV0IHM9ci5jb25zdHJ1Y3RvcjtpZihzPT09UClyZXR1cm4gdGhpcy5wYXJzZShyLnJlcGxhY2VtZW50KTtsZXQgbj1hd2FpdCB0aGlzLnBhcnNlUGx1Z2luKGUscik7aWYobilyZXR1cm4gbjtzd2l0Y2gocyl7Y2FzZSBPYmplY3Q6cmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLHIsITEpO2Nhc2UgdDpyZXR1cm4gdGhpcy5wYXJzZVBsYWluT2JqZWN0KGUsciwhMCk7Y2FzZSBEYXRlOnJldHVybiBnZShlLHIpO2Nhc2UgUmVnRXhwOnJldHVybiBoZShlLHIpO2Nhc2UgRXJyb3I6Y2FzZSBFdmFsRXJyb3I6Y2FzZSBSYW5nZUVycm9yOmNhc2UgUmVmZXJlbmNlRXJyb3I6Y2FzZSBTeW50YXhFcnJvcjpjYXNlIFR5cGVFcnJvcjpjYXNlIFVSSUVycm9yOnJldHVybiB0aGlzLnBhcnNlRXJyb3IoZSxyKTtjYXNlIE51bWJlcjpjYXNlIEJvb2xlYW46Y2FzZSBTdHJpbmc6Y2FzZSBCaWdJbnQ6cmV0dXJuIHRoaXMucGFyc2VCb3hlZChlLHIpO2Nhc2UgQXJyYXlCdWZmZXI6cmV0dXJuIHllKGUscik7Y2FzZSBJbnQ4QXJyYXk6Y2FzZSBJbnQxNkFycmF5OmNhc2UgSW50MzJBcnJheTpjYXNlIFVpbnQ4QXJyYXk6Y2FzZSBVaW50MTZBcnJheTpjYXNlIFVpbnQzMkFycmF5OmNhc2UgVWludDhDbGFtcGVkQXJyYXk6Y2FzZSBGbG9hdDMyQXJyYXk6Y2FzZSBGbG9hdDY0QXJyYXk6cmV0dXJuIHRoaXMucGFyc2VUeXBlZEFycmF5KGUscik7Y2FzZSBEYXRhVmlldzpyZXR1cm4gdGhpcy5wYXJzZURhdGFWaWV3KGUscik7Y2FzZSBNYXA6cmV0dXJuIHRoaXMucGFyc2VNYXAoZSxyKTtjYXNlIFNldDpyZXR1cm4gdGhpcy5wYXJzZVNldChlLHIpO2RlZmF1bHQ6YnJlYWt9aWYocz09PVByb21pc2V8fHIgaW5zdGFuY2VvZiBQcm9taXNlKXJldHVybiB0aGlzLnBhcnNlUHJvbWlzZShlLHIpO2xldCBhPXRoaXMuZmVhdHVyZXM7aWYoYSYzMiYmdHlwZW9mIEFib3J0U2lnbmFsIT1cInVuZGVmaW5lZFwiJiZzPT09QWJvcnRTaWduYWwpcmV0dXJuIHRoaXMucGFyc2VBYm9ydFNpZ25hbChlLHIpO2lmKGEmMTYpc3dpdGNoKHMpe2Nhc2UgQmlnSW50NjRBcnJheTpjYXNlIEJpZ1VpbnQ2NEFycmF5OnJldHVybiB0aGlzLnBhcnNlQmlnSW50VHlwZWRBcnJheShlLHIpO2RlZmF1bHQ6YnJlYWt9aWYoYSYxJiZ0eXBlb2YgQWdncmVnYXRlRXJyb3IhPVwidW5kZWZpbmVkXCImJihzPT09QWdncmVnYXRlRXJyb3J8fHIgaW5zdGFuY2VvZiBBZ2dyZWdhdGVFcnJvcikpcmV0dXJuIHRoaXMucGFyc2VBZ2dyZWdhdGVFcnJvcihlLHIpO2lmKHIgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdGhpcy5wYXJzZUVycm9yKGUscik7aWYoU3ltYm9sLml0ZXJhdG9yIGluIHJ8fFN5bWJvbC5hc3luY0l0ZXJhdG9yIGluIHIpcmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLHIsISFzKTt0aHJvdyBuZXcgUyhyKX1hc3luYyBwYXJzZShlKXt0cnl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJib29sZWFuXCI6cmV0dXJuIGU/eDpJO2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiB1ZTtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gdyhlKTtjYXNlXCJudW1iZXJcIjpyZXR1cm4gbWUoZSk7Y2FzZVwiYmlnaW50XCI6cmV0dXJuIFNlKGUpO2Nhc2VcIm9iamVjdFwiOntpZihlKXtsZXQgcj10aGlzLmdldFJlZmVyZW5jZShlKTtyZXR1cm4gci50eXBlPT09MD9hd2FpdCB0aGlzLnBhcnNlT2JqZWN0KHIudmFsdWUsZSk6ci52YWx1ZX1yZXR1cm4gZGV9Y2FzZVwic3ltYm9sXCI6cmV0dXJuIHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woZSk7Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKGUpO2RlZmF1bHQ6dGhyb3cgbmV3IFMoZSl9fWNhdGNoKHIpe3Rocm93IG5ldyBNKHIpfX19O3ZhciBKPWNsYXNzIGV4dGVuZHMgQ3tjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyk7dGhpcy5tb2RlPVwiY3Jvc3NcIn19O2Z1bmN0aW9uIHVyKG8pe3N3aXRjaChvKXtjYXNlXCJJbnQ4QXJyYXlcIjpyZXR1cm4gSW50OEFycmF5O2Nhc2VcIkludDE2QXJyYXlcIjpyZXR1cm4gSW50MTZBcnJheTtjYXNlXCJJbnQzMkFycmF5XCI6cmV0dXJuIEludDMyQXJyYXk7Y2FzZVwiVWludDhBcnJheVwiOnJldHVybiBVaW50OEFycmF5O2Nhc2VcIlVpbnQxNkFycmF5XCI6cmV0dXJuIFVpbnQxNkFycmF5O2Nhc2VcIlVpbnQzMkFycmF5XCI6cmV0dXJuIFVpbnQzMkFycmF5O2Nhc2VcIlVpbnQ4Q2xhbXBlZEFycmF5XCI6cmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5O2Nhc2VcIkZsb2F0MzJBcnJheVwiOnJldHVybiBGbG9hdDMyQXJyYXk7Y2FzZVwiRmxvYXQ2NEFycmF5XCI6cmV0dXJuIEZsb2F0NjRBcnJheTtjYXNlXCJCaWdJbnQ2NEFycmF5XCI6cmV0dXJuIEJpZ0ludDY0QXJyYXk7Y2FzZVwiQmlnVWludDY0QXJyYXlcIjpyZXR1cm4gQmlnVWludDY0QXJyYXk7ZGVmYXVsdDp0aHJvdyBuZXcgVGUobyl9fWZ1bmN0aW9uIGRyKG8sZSl7c3dpdGNoKGUpe2Nhc2UgMzpyZXR1cm4gT2JqZWN0LmZyZWV6ZShvKTtjYXNlIDE6cmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhvKTtjYXNlIDI6cmV0dXJuIE9iamVjdC5zZWFsKG8pO2RlZmF1bHQ6cmV0dXJuIG99fXZhciB6PWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMucGx1Z2lucz1lLnBsdWdpbnMsdGhpcy5yZWZzPWUucmVmc3x8bmV3IE1hcH1kZXNlcmlhbGl6ZVJlZmVyZW5jZShlKXtyZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLEtlKGIoZS5zKSkpfWRlc2VyaWFsaXplQXJyYXkoZSl7bGV0IHI9ZS5sLHM9dGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLG5ldyBBcnJheShyKSksbjtmb3IobGV0IGE9MDthPHI7YSsrKW49ZS5hW2FdLG4mJihzW2FdPXRoaXMuZGVzZXJpYWxpemUobikpO3JldHVybiBkcihzLGUubyksc31kZXNlcmlhbGl6ZVByb3BlcnRpZXMoZSxyKXtsZXQgcz1lLnM7aWYocyl7bGV0IG49ZS5rLGE9ZS52O2ZvcihsZXQgaT0wLGw7aTxzO2krKylsPW5baV0sdHlwZW9mIGw9PVwic3RyaW5nXCI/cltiKGwpXT10aGlzLmRlc2VyaWFsaXplKGFbaV0pOnJbdGhpcy5kZXNlcmlhbGl6ZShsKV09dGhpcy5kZXNlcmlhbGl6ZShhW2ldKX1yZXR1cm4gcn1kZXNlcmlhbGl6ZU9iamVjdChlKXtsZXQgcj10aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksZS50PT09MTA/e306T2JqZWN0LmNyZWF0ZShudWxsKSk7cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVQcm9wZXJ0aWVzKGUucCxyKSxkcihyLGUubykscn1kZXNlcmlhbGl6ZURhdGUoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgRGF0ZShlLnMpKX1kZXNlcmlhbGl6ZVJlZ0V4cChlKXtyZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLG5ldyBSZWdFeHAoYihlLmMpLGUubSkpfWRlc2VyaWFsaXplU2V0KGUpe2xldCByPXRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgU2V0KSxzPWUuYTtmb3IobGV0IG49MCxhPWUubDtuPGE7bisrKXIuYWRkKHRoaXMuZGVzZXJpYWxpemUoc1tuXSkpO3JldHVybiByfWRlc2VyaWFsaXplTWFwKGUpe2xldCByPXRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgTWFwKSxzPWUuZS5rLG49ZS5lLnY7Zm9yKGxldCBhPTAsaT1lLmUuczthPGk7YSsrKXIuc2V0KHRoaXMuZGVzZXJpYWxpemUoc1thXSksdGhpcy5kZXNlcmlhbGl6ZShuW2FdKSk7cmV0dXJuIHJ9ZGVzZXJpYWxpemVBcnJheUJ1ZmZlcihlKXtsZXQgcj1uZXcgVWludDhBcnJheShlLnMpO3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksci5idWZmZXIpfWRlc2VyaWFsaXplVHlwZWRBcnJheShlKXtsZXQgcj11cihlLmMpLHM9dGhpcy5kZXNlcmlhbGl6ZShlLmYpO3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksbmV3IHIocyxlLmIsZS5sKSl9ZGVzZXJpYWxpemVEYXRhVmlldyhlKXtsZXQgcj10aGlzLmRlc2VyaWFsaXplKGUuZik7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgRGF0YVZpZXcocixlLmIsZS5sKSl9ZGVzZXJpYWxpemVEaWN0aW9uYXJ5KGUscil7aWYoZS5wKXtsZXQgcz10aGlzLmRlc2VyaWFsaXplUHJvcGVydGllcyhlLnAse30pO09iamVjdC5hc3NpZ24ocixzKX1yZXR1cm4gcn1kZXNlcmlhbGl6ZUFnZ3JlZ2F0ZUVycm9yKGUpe2xldCByPXRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgQWdncmVnYXRlRXJyb3IoW10sYihlLm0pKSk7cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVEaWN0aW9uYXJ5KGUscil9ZGVzZXJpYWxpemVFcnJvcihlKXtsZXQgcj1aZVtlLnNdLHM9dGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLG5ldyByKGIoZS5tKSkpO3JldHVybiB0aGlzLmRlc2VyaWFsaXplRGljdGlvbmFyeShlLHMpfWRlc2VyaWFsaXplUHJvbWlzZShlKXtsZXQgcj1RKCkscz10aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksciksbj10aGlzLmRlc2VyaWFsaXplKGUuZik7cmV0dXJuIGUucz9yLnJlc29sdmUobik6ci5yZWplY3Qobikscy5wcm9taXNlfWRlc2VyaWFsaXplQm94ZWQoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxPYmplY3QodGhpcy5kZXNlcmlhbGl6ZShlLmYpKSl9ZGVzZXJpYWxpemVQbHVnaW4oZSl7bGV0IHI9dGhpcy5wbHVnaW5zO2lmKHIpe2xldCBzPWIoZS5jKTtmb3IobGV0IG49MCxhPXIubGVuZ3RoO248YTtuKyspe2xldCBpPXJbbl07aWYoaS50YWc9PT1zKXJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksaS5kZXNlcmlhbGl6ZShlLnMsdGhpcyx7aWQ6ZS5pfSkpfX10aHJvdyBuZXcgVShlLmMpfWRlc2VyaWFsaXplUHJvbWlzZUNvbnN0cnVjdG9yKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksUSgpKS5wcm9taXNlfWRlc2VyaWFsaXplUHJvbWlzZVJlc29sdmUoZSl7bGV0IHI9dGhpcy5yZWZzLmdldChlLmkpO20ocixuZXcgdihcIlByb21pc2VcIikpLHIucmVzb2x2ZSh0aGlzLmRlc2VyaWFsaXplKGUuYVsxXSkpfWRlc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKXtsZXQgcj10aGlzLnJlZnMuZ2V0KGUuaSk7bShyLG5ldyB2KFwiUHJvbWlzZVwiKSksci5yZWplY3QodGhpcy5kZXNlcmlhbGl6ZShlLmFbMV0pKX1kZXNlcmlhbGl6ZUl0ZXJhdG9yRmFjdG9yeUluc3RhbmNlKGUpe3RoaXMuZGVzZXJpYWxpemUoZS5hWzBdKTtsZXQgcj10aGlzLmRlc2VyaWFsaXplKGUuYVsxXSk7cmV0dXJuIGNyKHIpfWRlc2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKXt0aGlzLmRlc2VyaWFsaXplKGUuYVswXSk7bGV0IHI9dGhpcy5kZXNlcmlhbGl6ZShlLmFbMV0pO3JldHVybiBscihyKX1kZXNlcmlhbGl6ZVN0cmVhbUNvbnN0cnVjdG9yKGUpe2xldCByPXRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxMKCkpLHM9ZS5hLmxlbmd0aDtpZihzKWZvcihsZXQgbj0wO248cztuKyspdGhpcy5kZXNlcmlhbGl6ZShlLmFbbl0pO3JldHVybiByfWRlc2VyaWFsaXplU3RyZWFtTmV4dChlKXtsZXQgcj10aGlzLnJlZnMuZ2V0KGUuaSk7bShyLG5ldyB2KFwiU3RyZWFtXCIpKSxyLm5leHQodGhpcy5kZXNlcmlhbGl6ZShlLmYpKX1kZXNlcmlhbGl6ZVN0cmVhbVRocm93KGUpe2xldCByPXRoaXMucmVmcy5nZXQoZS5pKTttKHIsbmV3IHYoXCJTdHJlYW1cIikpLHIudGhyb3codGhpcy5kZXNlcmlhbGl6ZShlLmYpKX1kZXNlcmlhbGl6ZVN0cmVhbVJldHVybihlKXtsZXQgcj10aGlzLnJlZnMuZ2V0KGUuaSk7bShyLG5ldyB2KFwiU3RyZWFtXCIpKSxyLnJldHVybih0aGlzLmRlc2VyaWFsaXplKGUuZikpfWRlc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5KGUpe3RoaXMuZGVzZXJpYWxpemUoZS5mKX1kZXNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5KGUpe3RoaXMuZGVzZXJpYWxpemUoZS5hWzFdKX1kZXNlcmlhbGl6ZUFib3J0U2lnbmFsQ29uc3RydWN0b3IoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxuZXcgQWJvcnRDb250cm9sbGVyKS5zaWduYWx9ZGVzZXJpYWxpemVBYm9ydFNpZ25hbEFib3J0KGUpe2xldCByPXRoaXMucmVmcy5nZXQoZS5pKTttKHIsbmV3IHYoXCJBYm9ydFNpZ25hbFwiKSksci5hYm9ydCh0aGlzLmRlc2VyaWFsaXplKGUuYVsxXSkpfWRlc2VyaWFsaXplQWJvcnRTaWduYWxTeW5jKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksQWJvcnRTaWduYWwuYWJvcnQodGhpcy5kZXNlcmlhbGl6ZShlLmYpKSl9ZGVzZXJpYWxpemUoZSl7dHJ5e3N3aXRjaChlLnQpe2Nhc2UgMjpyZXR1cm4gSGVbZS5zXTtjYXNlIDA6cmV0dXJuIGUucztjYXNlIDE6cmV0dXJuIGIoZS5zKTtjYXNlIDM6cmV0dXJuIEJpZ0ludChlLnMpO2Nhc2UgNDpyZXR1cm4gdGhpcy5yZWZzLmdldChlLmkpO2Nhc2UgMTg6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVSZWZlcmVuY2UoZSk7Y2FzZSA5OnJldHVybiB0aGlzLmRlc2VyaWFsaXplQXJyYXkoZSk7Y2FzZSAxMDpjYXNlIDExOnJldHVybiB0aGlzLmRlc2VyaWFsaXplT2JqZWN0KGUpO2Nhc2UgNTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZURhdGUoZSk7Y2FzZSA2OnJldHVybiB0aGlzLmRlc2VyaWFsaXplUmVnRXhwKGUpO2Nhc2UgNzpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVNldChlKTtjYXNlIDg6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVNYXAoZSk7Y2FzZSAxOTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZUFycmF5QnVmZmVyKGUpO2Nhc2UgMTY6Y2FzZSAxNTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVR5cGVkQXJyYXkoZSk7Y2FzZSAyMDpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZURhdGFWaWV3KGUpO2Nhc2UgMTQ6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBZ2dyZWdhdGVFcnJvcihlKTtjYXNlIDEzOnJldHVybiB0aGlzLmRlc2VyaWFsaXplRXJyb3IoZSk7Y2FzZSAxMjpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVByb21pc2UoZSk7Y2FzZSAxNzpyZXR1cm4gR2VbZS5zXTtjYXNlIDIxOnJldHVybiB0aGlzLmRlc2VyaWFsaXplQm94ZWQoZSk7Y2FzZSAyNTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVBsdWdpbihlKTtjYXNlIDIyOnJldHVybiB0aGlzLmRlc2VyaWFsaXplUHJvbWlzZUNvbnN0cnVjdG9yKGUpO2Nhc2UgMjM6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVQcm9taXNlUmVzb2x2ZShlKTtjYXNlIDI0OnJldHVybiB0aGlzLmRlc2VyaWFsaXplUHJvbWlzZVJlamVjdChlKTtjYXNlIDI4OnJldHVybiB0aGlzLmRlc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7Y2FzZSAzMDpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7Y2FzZSAzMTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZVN0cmVhbUNvbnN0cnVjdG9yKGUpO2Nhc2UgMzI6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVTdHJlYW1OZXh0KGUpO2Nhc2UgMzM6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVTdHJlYW1UaHJvdyhlKTtjYXNlIDM0OnJldHVybiB0aGlzLmRlc2VyaWFsaXplU3RyZWFtUmV0dXJuKGUpO2Nhc2UgMjc6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVJdGVyYXRvckZhY3RvcnkoZSk7Y2FzZSAyOTpyZXR1cm4gdGhpcy5kZXNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5KGUpO2Nhc2UgMzY6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBYm9ydFNpZ25hbEFib3J0KGUpO2Nhc2UgMzU6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBYm9ydFNpZ25hbENvbnN0cnVjdG9yKGUpO2Nhc2UgMzc6cmV0dXJuIHRoaXMuZGVzZXJpYWxpemVBYm9ydFNpZ25hbFN5bmMoZSk7ZGVmYXVsdDp0aHJvdyBuZXcgZyhlKX19Y2F0Y2gocil7dGhyb3cgbmV3IE9lKHIpfX19O3ZhciBlZT1jbGFzcyBleHRlbmRzIHp7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpO3RoaXMubW9kZT1cImNyb3NzXCJ9YXNzaWduSW5kZXhlZFZhbHVlKHIscyl7cmV0dXJuIHRoaXMucmVmcy5oYXMocil8fHRoaXMucmVmcy5zZXQocixzKSxzfX07dmFyIEVyPS9eWyRBLVpfXVswLTlBLVpfJF0qJC9pO2Z1bmN0aW9uIFVlKG8pe2xldCBlPW9bMF07cmV0dXJuKGU9PT1cIiRcInx8ZT09PVwiX1wifHxlPj1cIkFcIiYmZTw9XCJaXCJ8fGU+PVwiYVwiJiZlPD1cInpcIikmJkVyLnRlc3Qobyl9ZnVuY3Rpb24gcmUobyl7c3dpdGNoKG8udCl7Y2FzZSAwOnJldHVybiBvLnMrXCI9XCIrby52O2Nhc2UgMjpyZXR1cm4gby5zK1wiLnNldChcIitvLmsrXCIsXCIrby52K1wiKVwiO2Nhc2UgMTpyZXR1cm4gby5zK1wiLmFkZChcIitvLnYrXCIpXCI7Y2FzZSAzOnJldHVybiBvLnMrXCIuZGVsZXRlKFwiK28uaytcIilcIn19ZnVuY3Rpb24gUnIobyl7bGV0IGU9W10scj1vWzBdO2ZvcihsZXQgcz0xLG49by5sZW5ndGgsYSxpPXI7czxuO3MrKylhPW9bc10sYS50PT09MCYmYS52PT09aS52P3I9e3Q6MCxzOmEucyxrOnQsdjpyZShyKX06YS50PT09MiYmYS5zPT09aS5zP3I9e3Q6MixzOnJlKHIpLGs6YS5rLHY6YS52fTphLnQ9PT0xJiZhLnM9PT1pLnM/cj17dDoxLHM6cmUociksazp0LHY6YS52fTphLnQ9PT0zJiZhLnM9PT1pLnM/cj17dDozLHM6cmUociksazphLmssdjp0fTooZS5wdXNoKHIpLHI9YSksaT1hO3JldHVybiBlLnB1c2gociksZX1mdW5jdGlvbiBwcihvKXtpZihvLmxlbmd0aCl7bGV0IGU9XCJcIixyPVJyKG8pO2ZvcihsZXQgcz0wLG49ci5sZW5ndGg7czxuO3MrKyllKz1yZShyW3NdKStcIixcIjtyZXR1cm4gZX1yZXR1cm4gdH12YXIgUHI9XCJPYmplY3QuY3JlYXRlKG51bGwpXCIsQ3I9XCJuZXcgU2V0XCIsenI9XCJuZXcgTWFwXCIsT3I9XCJQcm9taXNlLnJlc29sdmVcIixUcj1cIlByb21pc2UucmVqZWN0XCIsa3I9ezM6XCJPYmplY3QuZnJlZXplXCIsMjpcIk9iamVjdC5zZWFsXCIsMTpcIk9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc1wiLDA6dH0sTz1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLnN0YWNrPVtdO3RoaXMuZmxhZ3M9W107dGhpcy5hc3NpZ25tZW50cz1bXTt0aGlzLnBsdWdpbnM9ZS5wbHVnaW5zLHRoaXMuZmVhdHVyZXM9ZS5mZWF0dXJlcyx0aGlzLm1hcmtlZD1uZXcgU2V0KGUubWFya2VkUmVmcyl9Y3JlYXRlRnVuY3Rpb24oZSxyKXtyZXR1cm4gdGhpcy5mZWF0dXJlcyYyPyhlLmxlbmd0aD09PTE/ZVswXTpcIihcIitlLmpvaW4oXCIsXCIpK1wiKVwiKStcIj0+XCIrKHIuc3RhcnRzV2l0aChcIntcIik/XCIoXCIrcitcIilcIjpyKTpcImZ1bmN0aW9uKFwiK2Uuam9pbihcIixcIikrXCIpe3JldHVybiBcIityK1wifVwifWNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKGUscil7cmV0dXJuIHRoaXMuZmVhdHVyZXMmMj8oZS5sZW5ndGg9PT0xP2VbMF06XCIoXCIrZS5qb2luKFwiLFwiKStcIilcIikrXCI9PntcIityK1wifVwiOlwiZnVuY3Rpb24oXCIrZS5qb2luKFwiLFwiKStcIil7XCIrcitcIn1cIn1tYXJrUmVmKGUpe3RoaXMubWFya2VkLmFkZChlKX1pc01hcmtlZChlKXtyZXR1cm4gdGhpcy5tYXJrZWQuaGFzKGUpfXB1c2hPYmplY3RGbGFnKGUscil7ZSE9PTAmJih0aGlzLm1hcmtSZWYociksdGhpcy5mbGFncy5wdXNoKHt0eXBlOmUsdmFsdWU6dGhpcy5nZXRSZWZQYXJhbShyKX0pKX1yZXNvbHZlRmxhZ3MoKXtsZXQgZT1cIlwiO2ZvcihsZXQgcj0wLHM9dGhpcy5mbGFncyxuPXMubGVuZ3RoO3I8bjtyKyspe2xldCBhPXNbcl07ZSs9a3JbYS50eXBlXStcIihcIithLnZhbHVlK1wiKSxcIn1yZXR1cm4gZX1yZXNvbHZlUGF0Y2hlcygpe2xldCBlPXByKHRoaXMuYXNzaWdubWVudHMpLHI9dGhpcy5yZXNvbHZlRmxhZ3MoKTtyZXR1cm4gZT9yP2UrcjplOnJ9Y3JlYXRlQXNzaWdubWVudChlLHIpe3RoaXMuYXNzaWdubWVudHMucHVzaCh7dDowLHM6ZSxrOnQsdjpyfSl9Y3JlYXRlQWRkQXNzaWdubWVudChlLHIpe3RoaXMuYXNzaWdubWVudHMucHVzaCh7dDoxLHM6dGhpcy5nZXRSZWZQYXJhbShlKSxrOnQsdjpyfSl9Y3JlYXRlU2V0QXNzaWdubWVudChlLHIscyl7dGhpcy5hc3NpZ25tZW50cy5wdXNoKHt0OjIsczp0aGlzLmdldFJlZlBhcmFtKGUpLGs6cix2OnN9KX1jcmVhdGVEZWxldGVBc3NpZ25tZW50KGUscil7dGhpcy5hc3NpZ25tZW50cy5wdXNoKHt0OjMsczp0aGlzLmdldFJlZlBhcmFtKGUpLGs6cix2OnR9KX1jcmVhdGVBcnJheUFzc2lnbihlLHIscyl7dGhpcy5jcmVhdGVBc3NpZ25tZW50KHRoaXMuZ2V0UmVmUGFyYW0oZSkrXCJbXCIrcitcIl1cIixzKX1jcmVhdGVPYmplY3RBc3NpZ24oZSxyLHMpe3RoaXMuY3JlYXRlQXNzaWdubWVudCh0aGlzLmdldFJlZlBhcmFtKGUpK1wiLlwiK3Iscyl9aXNJbmRleGVkVmFsdWVJblN0YWNrKGUpe3JldHVybiBlLnQ9PT00JiZ0aGlzLnN0YWNrLmluY2x1ZGVzKGUuaSl9c2VyaWFsaXplUmVmZXJlbmNlKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksRSsnLmdldChcIicrZS5zKydcIiknKX1zZXJpYWxpemVBcnJheUl0ZW0oZSxyLHMpe3JldHVybiByP3RoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKHIpPyh0aGlzLm1hcmtSZWYoZSksdGhpcy5jcmVhdGVBcnJheUFzc2lnbihlLHMsdGhpcy5nZXRSZWZQYXJhbShyLmkpKSxcIlwiKTp0aGlzLnNlcmlhbGl6ZShyKTpcIlwifXNlcmlhbGl6ZUFycmF5KGUpe2xldCByPWUuaTtpZihlLmwpe3RoaXMuc3RhY2sucHVzaChyKTtsZXQgcz1lLmEsbj10aGlzLnNlcmlhbGl6ZUFycmF5SXRlbShyLHNbMF0sMCksYT1uPT09XCJcIjtmb3IobGV0IGk9MSxsPWUubCxjO2k8bDtpKyspYz10aGlzLnNlcmlhbGl6ZUFycmF5SXRlbShyLHNbaV0saSksbis9XCIsXCIrYyxhPWM9PT1cIlwiO3JldHVybiB0aGlzLnN0YWNrLnBvcCgpLHRoaXMucHVzaE9iamVjdEZsYWcoZS5vLGUuaSksdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUocixcIltcIituKyhhP1wiLF1cIjpcIl1cIikpfXJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShyLFwiW11cIil9c2VyaWFsaXplUHJvcGVydHkoZSxyLHMpe2lmKHR5cGVvZiByPT1cInN0cmluZ1wiKXtsZXQgbj1OdW1iZXIociksYT1uPj0wJiZuLnRvU3RyaW5nKCk9PT1yfHxVZShyKTtpZih0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhzKSl7bGV0IGk9dGhpcy5nZXRSZWZQYXJhbShzLmkpO3JldHVybiB0aGlzLm1hcmtSZWYoZS5pKSxhJiZuIT09bj90aGlzLmNyZWF0ZU9iamVjdEFzc2lnbihlLmkscixpKTp0aGlzLmNyZWF0ZUFycmF5QXNzaWduKGUuaSxhP3I6J1wiJytyKydcIicsaSksXCJcIn1yZXR1cm4oYT9yOidcIicrcisnXCInKStcIjpcIit0aGlzLnNlcmlhbGl6ZShzKX1yZXR1cm5cIltcIit0aGlzLnNlcmlhbGl6ZShyKStcIl06XCIrdGhpcy5zZXJpYWxpemUocyl9c2VyaWFsaXplUHJvcGVydGllcyhlLHIpe2xldCBzPXIucztpZihzKXtsZXQgbj1yLmssYT1yLnY7dGhpcy5zdGFjay5wdXNoKGUuaSk7bGV0IGk9dGhpcy5zZXJpYWxpemVQcm9wZXJ0eShlLG5bMF0sYVswXSk7Zm9yKGxldCBsPTEsYz1pO2w8cztsKyspYz10aGlzLnNlcmlhbGl6ZVByb3BlcnR5KGUsbltsXSxhW2xdKSxpKz0oYyYmaSYmXCIsXCIpK2M7cmV0dXJuIHRoaXMuc3RhY2sucG9wKCksXCJ7XCIraStcIn1cIn1yZXR1cm5cInt9XCJ9c2VyaWFsaXplT2JqZWN0KGUpe3JldHVybiB0aGlzLnB1c2hPYmplY3RGbGFnKGUubyxlLmkpLHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSx0aGlzLnNlcmlhbGl6ZVByb3BlcnRpZXMoZSxlLnApKX1zZXJpYWxpemVXaXRoT2JqZWN0QXNzaWduKGUscixzKXtsZXQgbj10aGlzLnNlcmlhbGl6ZVByb3BlcnRpZXMoZSxyKTtyZXR1cm4gbiE9PVwie31cIj9cIk9iamVjdC5hc3NpZ24oXCIrcytcIixcIituK1wiKVwiOnN9c2VyaWFsaXplU3RyaW5nS2V5QXNzaWdubWVudChlLHIscyxuKXtsZXQgYT10aGlzLnNlcmlhbGl6ZShuKSxpPU51bWJlcihzKSxsPWk+PTAmJmkudG9TdHJpbmcoKT09PXN8fFVlKHMpO2lmKHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKG4pKWwmJmkhPT1pP3RoaXMuY3JlYXRlT2JqZWN0QXNzaWduKGUuaSxzLGEpOnRoaXMuY3JlYXRlQXJyYXlBc3NpZ24oZS5pLGw/czonXCInK3MrJ1wiJyxhKTtlbHNle2xldCBjPXRoaXMuYXNzaWdubWVudHM7dGhpcy5hc3NpZ25tZW50cz1yLGwmJmkhPT1pP3RoaXMuY3JlYXRlT2JqZWN0QXNzaWduKGUuaSxzLGEpOnRoaXMuY3JlYXRlQXJyYXlBc3NpZ24oZS5pLGw/czonXCInK3MrJ1wiJyxhKSx0aGlzLmFzc2lnbm1lbnRzPWN9fXNlcmlhbGl6ZUFzc2lnbm1lbnQoZSxyLHMsbil7aWYodHlwZW9mIHM9PVwic3RyaW5nXCIpdGhpcy5zZXJpYWxpemVTdHJpbmdLZXlBc3NpZ25tZW50KGUscixzLG4pO2Vsc2V7bGV0IGE9dGhpcy5zdGFjazt0aGlzLnN0YWNrPVtdO2xldCBpPXRoaXMuc2VyaWFsaXplKG4pO3RoaXMuc3RhY2s9YTtsZXQgbD10aGlzLmFzc2lnbm1lbnRzO3RoaXMuYXNzaWdubWVudHM9cix0aGlzLmNyZWF0ZUFycmF5QXNzaWduKGUuaSx0aGlzLnNlcmlhbGl6ZShzKSxpKSx0aGlzLmFzc2lnbm1lbnRzPWx9fXNlcmlhbGl6ZUFzc2lnbm1lbnRzKGUscil7bGV0IHM9ci5zO2lmKHMpe2xldCBuPVtdLGE9ci5rLGk9ci52O3RoaXMuc3RhY2sucHVzaChlLmkpO2ZvcihsZXQgbD0wO2w8cztsKyspdGhpcy5zZXJpYWxpemVBc3NpZ25tZW50KGUsbixhW2xdLGlbbF0pO3JldHVybiB0aGlzLnN0YWNrLnBvcCgpLHByKG4pfXJldHVybiB0fXNlcmlhbGl6ZURpY3Rpb25hcnkoZSxyKXtpZihlLnApaWYodGhpcy5mZWF0dXJlcyY4KXI9dGhpcy5zZXJpYWxpemVXaXRoT2JqZWN0QXNzaWduKGUsZS5wLHIpO2Vsc2V7dGhpcy5tYXJrUmVmKGUuaSk7bGV0IHM9dGhpcy5zZXJpYWxpemVBc3NpZ25tZW50cyhlLGUucCk7aWYocylyZXR1cm5cIihcIit0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmkscikrXCIsXCIrcyt0aGlzLmdldFJlZlBhcmFtKGUuaSkrXCIpXCJ9cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxyKX1zZXJpYWxpemVOdWxsQ29uc3RydWN0b3IoZSl7cmV0dXJuIHRoaXMucHVzaE9iamVjdEZsYWcoZS5vLGUuaSksdGhpcy5zZXJpYWxpemVEaWN0aW9uYXJ5KGUsUHIpfXNlcmlhbGl6ZURhdGUoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSwnbmV3IERhdGUoXCInK2UucysnXCIpJyl9c2VyaWFsaXplUmVnRXhwKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksXCIvXCIrZS5jK1wiL1wiK2UubSl9c2VyaWFsaXplU2V0SXRlbShlLHIpe3JldHVybiB0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhyKT8odGhpcy5tYXJrUmVmKGUpLHRoaXMuY3JlYXRlQWRkQXNzaWdubWVudChlLHRoaXMuZ2V0UmVmUGFyYW0oci5pKSksXCJcIik6dGhpcy5zZXJpYWxpemUocil9c2VyaWFsaXplU2V0KGUpe2xldCByPUNyLHM9ZS5sLG49ZS5pO2lmKHMpe2xldCBhPWUuYTt0aGlzLnN0YWNrLnB1c2gobik7bGV0IGk9dGhpcy5zZXJpYWxpemVTZXRJdGVtKG4sYVswXSk7Zm9yKGxldCBsPTEsYz1pO2w8cztsKyspYz10aGlzLnNlcmlhbGl6ZVNldEl0ZW0obixhW2xdKSxpKz0oYyYmaSYmXCIsXCIpK2M7dGhpcy5zdGFjay5wb3AoKSxpJiYocis9XCIoW1wiK2krXCJdKVwiKX1yZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUobixyKX1zZXJpYWxpemVNYXBFbnRyeShlLHIscyxuKXtpZih0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhyKSl7bGV0IGE9dGhpcy5nZXRSZWZQYXJhbShyLmkpO2lmKHRoaXMubWFya1JlZihlKSx0aGlzLmlzSW5kZXhlZFZhbHVlSW5TdGFjayhzKSl7bGV0IGw9dGhpcy5nZXRSZWZQYXJhbShzLmkpO3JldHVybiB0aGlzLmNyZWF0ZVNldEFzc2lnbm1lbnQoZSxhLGwpLFwiXCJ9aWYocy50IT09NCYmcy5pIT1udWxsJiZ0aGlzLmlzTWFya2VkKHMuaSkpe2xldCBsPVwiKFwiK3RoaXMuc2VyaWFsaXplKHMpK1wiLFtcIituK1wiLFwiK24rXCJdKVwiO3JldHVybiB0aGlzLmNyZWF0ZVNldEFzc2lnbm1lbnQoZSxhLHRoaXMuZ2V0UmVmUGFyYW0ocy5pKSksdGhpcy5jcmVhdGVEZWxldGVBc3NpZ25tZW50KGUsbiksbH1sZXQgaT10aGlzLnN0YWNrO3JldHVybiB0aGlzLnN0YWNrPVtdLHRoaXMuY3JlYXRlU2V0QXNzaWdubWVudChlLGEsdGhpcy5zZXJpYWxpemUocykpLHRoaXMuc3RhY2s9aSxcIlwifWlmKHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKHMpKXtsZXQgYT10aGlzLmdldFJlZlBhcmFtKHMuaSk7aWYodGhpcy5tYXJrUmVmKGUpLHIudCE9PTQmJnIuaSE9bnVsbCYmdGhpcy5pc01hcmtlZChyLmkpKXtsZXQgbD1cIihcIit0aGlzLnNlcmlhbGl6ZShyKStcIixbXCIrbitcIixcIituK1wiXSlcIjtyZXR1cm4gdGhpcy5jcmVhdGVTZXRBc3NpZ25tZW50KGUsdGhpcy5nZXRSZWZQYXJhbShyLmkpLGEpLHRoaXMuY3JlYXRlRGVsZXRlQXNzaWdubWVudChlLG4pLGx9bGV0IGk9dGhpcy5zdGFjaztyZXR1cm4gdGhpcy5zdGFjaz1bXSx0aGlzLmNyZWF0ZVNldEFzc2lnbm1lbnQoZSx0aGlzLnNlcmlhbGl6ZShyKSxhKSx0aGlzLnN0YWNrPWksXCJcIn1yZXR1cm5cIltcIit0aGlzLnNlcmlhbGl6ZShyKStcIixcIit0aGlzLnNlcmlhbGl6ZShzKStcIl1cIn1zZXJpYWxpemVNYXAoZSl7bGV0IHI9enIscz1lLmUucyxuPWUuaSxhPWUuZixpPXRoaXMuZ2V0UmVmUGFyYW0oYS5pKTtpZihzKXtsZXQgbD1lLmUuayxjPWUuZS52O3RoaXMuc3RhY2sucHVzaChuKTtsZXQgZD10aGlzLnNlcmlhbGl6ZU1hcEVudHJ5KG4sbFswXSxjWzBdLGkpO2ZvcihsZXQgaD0xLEg9ZDtoPHM7aCsrKUg9dGhpcy5zZXJpYWxpemVNYXBFbnRyeShuLGxbaF0sY1toXSxpKSxkKz0oSCYmZCYmXCIsXCIpK0g7dGhpcy5zdGFjay5wb3AoKSxkJiYocis9XCIoW1wiK2QrXCJdKVwiKX1yZXR1cm4gYS50PT09MjYmJih0aGlzLm1hcmtSZWYoYS5pKSxyPVwiKFwiK3RoaXMuc2VyaWFsaXplKGEpK1wiLFwiK3IrXCIpXCIpLHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKG4scil9c2VyaWFsaXplQXJyYXlCdWZmZXIoZSl7bGV0IHI9XCJuZXcgVWludDhBcnJheShcIixzPWUucyxuPXMubGVuZ3RoO2lmKG4pe3IrPVwiW1wiK3NbMF07Zm9yKGxldCBhPTE7YTxuO2ErKylyKz1cIixcIitzW2FdO3IrPVwiXVwifXJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmkscitcIikuYnVmZmVyXCIpfXNlcmlhbGl6ZVR5cGVkQXJyYXkoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxcIm5ldyBcIitlLmMrXCIoXCIrdGhpcy5zZXJpYWxpemUoZS5mKStcIixcIitlLmIrXCIsXCIrZS5sK1wiKVwiKX1zZXJpYWxpemVEYXRhVmlldyhlKXtyZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLFwibmV3IERhdGFWaWV3KFwiK3RoaXMuc2VyaWFsaXplKGUuZikrXCIsXCIrZS5iK1wiLFwiK2UubCtcIilcIil9c2VyaWFsaXplQWdncmVnYXRlRXJyb3IoZSl7bGV0IHI9ZS5pO3RoaXMuc3RhY2sucHVzaChyKTtsZXQgcz10aGlzLnNlcmlhbGl6ZURpY3Rpb25hcnkoZSwnbmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLFwiJytlLm0rJ1wiKScpO3JldHVybiB0aGlzLnN0YWNrLnBvcCgpLHN9c2VyaWFsaXplRXJyb3IoZSl7cmV0dXJuIHRoaXMuc2VyaWFsaXplRGljdGlvbmFyeShlLFwibmV3IFwiK2NlW2Uuc10rJyhcIicrZS5tKydcIiknKX1zZXJpYWxpemVQcm9taXNlKGUpe2xldCByLHM9ZS5mLG49ZS5pLGE9ZS5zP09yOlRyO2lmKHRoaXMuaXNJbmRleGVkVmFsdWVJblN0YWNrKHMpKXtsZXQgaT10aGlzLmdldFJlZlBhcmFtKHMuaSk7cj1hKyhlLnM/XCIoKS50aGVuKFwiK3RoaXMuY3JlYXRlRnVuY3Rpb24oW10saSkrXCIpXCI6XCIoKS5jYXRjaChcIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtdLFwidGhyb3cgXCIraSkrXCIpXCIpfWVsc2V7dGhpcy5zdGFjay5wdXNoKG4pO2xldCBpPXRoaXMuc2VyaWFsaXplKHMpO3RoaXMuc3RhY2sucG9wKCkscj1hK1wiKFwiK2krXCIpXCJ9cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKG4scil9c2VyaWFsaXplV2VsbEtub3duU3ltYm9sKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksJGVbZS5zXSl9c2VyaWFsaXplQm94ZWQoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSxcIk9iamVjdChcIit0aGlzLnNlcmlhbGl6ZShlLmYpK1wiKVwiKX1zZXJpYWxpemVQbHVnaW4oZSl7bGV0IHI9dGhpcy5wbHVnaW5zO2lmKHIpZm9yKGxldCBzPTAsbj1yLmxlbmd0aDtzPG47cysrKXtsZXQgYT1yW3NdO2lmKGEudGFnPT09ZS5jKXJldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksYS5zZXJpYWxpemUoZS5zLHRoaXMse2lkOmUuaX0pKX10aHJvdyBuZXcgVShlLmMpfWdldENvbnN0cnVjdG9yKGUpe2xldCByPXRoaXMuc2VyaWFsaXplKGUpO3JldHVybiByPT09dGhpcy5nZXRSZWZQYXJhbShlLmkpP3I6XCIoXCIrcitcIilcIn1zZXJpYWxpemVQcm9taXNlQ29uc3RydWN0b3IoZSl7cmV0dXJuIHRoaXMuYXNzaWduSW5kZXhlZFZhbHVlKGUuaSx0aGlzLmdldENvbnN0cnVjdG9yKGUuZikrXCIoKVwiKX1zZXJpYWxpemVQcm9taXNlUmVzb2x2ZShlKXtyZXR1cm4gdGhpcy5nZXRDb25zdHJ1Y3RvcihlLmFbMF0pK1wiKFwiK3RoaXMuZ2V0UmVmUGFyYW0oZS5pKStcIixcIit0aGlzLnNlcmlhbGl6ZShlLmFbMV0pK1wiKVwifXNlcmlhbGl6ZVByb21pc2VSZWplY3QoZSl7cmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKStcIihcIit0aGlzLmdldFJlZlBhcmFtKGUuaSkrXCIsXCIrdGhpcy5zZXJpYWxpemUoZS5hWzFdKStcIilcIn1zZXJpYWxpemVTcGVjaWFsUmVmZXJlbmNlVmFsdWUoZSl7c3dpdGNoKGUpe2Nhc2UgMDpyZXR1cm5cIltdXCI7Y2FzZSAxOnJldHVybiB0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcInNcIixcImZcIixcInBcIl0sXCIoKHA9bmV3IFByb21pc2UoXCIrdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXCJhXCIsXCJiXCJdLFwicz1hLGY9YlwiKStcIikpLnM9cyxwLmY9ZixwKVwiKTtjYXNlIDI6cmV0dXJuIHRoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1wicFwiLFwiZFwiXSwncC5zKGQpLHAuc3RhdHVzPVwic3VjY2Vzc1wiLHAudmFsdWU9ZDtkZWxldGUgcC5zO2RlbGV0ZSBwLmYnKTtjYXNlIDM6cmV0dXJuIHRoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1wicFwiLFwiZFwiXSwncC5mKGQpLHAuc3RhdHVzPVwiZmFpbHVyZVwiLHAudmFsdWU9ZDtkZWxldGUgcC5zO2RlbGV0ZSBwLmYnKTtjYXNlIDQ6cmV0dXJuIHRoaXMuY3JlYXRlRnVuY3Rpb24oW1wiYlwiLFwiYVwiLFwic1wiLFwibFwiLFwicFwiLFwiZlwiLFwiZVwiLFwiblwiXSxcIihiPVtdLGE9ITAscz0hMSxsPVtdLHA9MCxmPVwiK3RoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1widlwiLFwibVwiLFwieFwiXSxcImZvcih4PTA7eDxwO3grKylsW3hdJiZsW3hdW21dKHYpXCIpK1wiLG49XCIrdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXCJvXCIsXCJ4XCIsXCJ6XCIsXCJjXCJdLCdmb3IoeD0wLHo9Yi5sZW5ndGg7eDx6O3grKykoYz1iW3hdLCghYSYmeD09PXotMSk/b1tzP1wicmV0dXJuXCI6XCJ0aHJvd1wiXShjKTpvLm5leHQoYykpJykrXCIsZT1cIit0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcIm9cIixcInRcIl0sXCIoYSYmKGxbdD1wKytdPW8pLG4obyksXCIrdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXSxcImEmJihsW3RdPXZvaWQgMClcIikrXCIpXCIpK1wiLHtfX1NFUk9WQUxfU1RSRUFNX186ITAsb246XCIrdGhpcy5jcmVhdGVGdW5jdGlvbihbXCJvXCJdLFwiZShvKVwiKStcIixuZXh0OlwiK3RoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1widlwiXSwnYSYmKGIucHVzaCh2KSxmKHYsXCJuZXh0XCIpKScpK1wiLHRocm93OlwiK3RoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1widlwiXSwnYSYmKGIucHVzaCh2KSxmKHYsXCJ0aHJvd1wiKSxhPXM9ITEsbC5sZW5ndGg9MCknKStcIixyZXR1cm46XCIrdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXCJ2XCJdLCdhJiYoYi5wdXNoKHYpLGYodixcInJldHVyblwiKSxhPSExLHM9ITAsbC5sZW5ndGg9MCknKStcIn0pXCIpO2Nhc2UgNTpyZXR1cm4gdGhpcy5jcmVhdGVGdW5jdGlvbihbXCJhXCIsXCJzXCJdLFwiKChzPShhPW5ldyBBYm9ydENvbnRyb2xsZXIpLnNpZ25hbCkuYT1hLHMpXCIpO2Nhc2UgNjpyZXR1cm4gdGhpcy5jcmVhdGVFZmZlY3RmdWxGdW5jdGlvbihbXCJzXCIsXCJyXCJdLFwicy5hLmFib3J0KHIpO2RlbGV0ZSBzLmFcIik7ZGVmYXVsdDpyZXR1cm5cIlwifX1zZXJpYWxpemVTcGVjaWFsUmVmZXJlbmNlKGUpe3JldHVybiB0aGlzLmFzc2lnbkluZGV4ZWRWYWx1ZShlLmksdGhpcy5zZXJpYWxpemVTcGVjaWFsUmVmZXJlbmNlVmFsdWUoZS5zKSl9c2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5KGUpe2xldCByPVwiXCIscz0hMTtyZXR1cm4gZS5mLnQhPT00JiYodGhpcy5tYXJrUmVmKGUuZi5pKSxyPVwiKFwiK3RoaXMuc2VyaWFsaXplKGUuZikrXCIsXCIscz0hMCkscis9dGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLHRoaXMuY3JlYXRlRnVuY3Rpb24oW1wic1wiXSx0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcImlcIixcImNcIixcImRcIixcInRcIl0sXCIoaT0wLHQ9e1tcIit0aGlzLmdldFJlZlBhcmFtKGUuZi5pKStcIl06XCIrdGhpcy5jcmVhdGVGdW5jdGlvbihbXSxcInRcIikrXCIsbmV4dDpcIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtdLFwiaWYoaT5zLmQpcmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfTtpZihkPXMudltjPWkrK10sYz09PXMudCl0aHJvdyBkO3JldHVybntkb25lOmM9PT1zLmQsdmFsdWU6ZH1cIikrXCJ9KVwiKSkpLHMmJihyKz1cIilcIikscn1zZXJpYWxpemVJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKXtyZXR1cm4gdGhpcy5nZXRDb25zdHJ1Y3RvcihlLmFbMF0pK1wiKFwiK3RoaXMuc2VyaWFsaXplKGUuYVsxXSkrXCIpXCJ9c2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnkoZSl7bGV0IHI9ZS5hWzBdLHM9ZS5hWzFdLG49XCJcIjtyLnQhPT00JiYodGhpcy5tYXJrUmVmKHIuaSksbis9XCIoXCIrdGhpcy5zZXJpYWxpemUocikpLHMudCE9PTQmJih0aGlzLm1hcmtSZWYocy5pKSxuKz0obj9cIixcIjpcIihcIikrdGhpcy5zZXJpYWxpemUocykpLG4mJihuKz1cIixcIik7bGV0IGE9dGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLHRoaXMuY3JlYXRlRnVuY3Rpb24oW1wic1wiXSx0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtcImJcIixcImNcIixcInBcIixcImRcIixcImVcIixcInRcIixcImZcIl0sXCIoYj1bXSxjPTAscD1bXSxkPS0xLGU9ITEsZj1cIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcImlcIixcImxcIl0sXCJmb3IoaT0wLGw9cC5sZW5ndGg7aTxsO2krKylwW2ldLnMoe2RvbmU6ITAsdmFsdWU6dm9pZCAwfSlcIikrXCIscy5vbih7bmV4dDpcIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIixcInRcIl0sXCJpZih0PXAuc2hpZnQoKSl0LnMoe2RvbmU6ITEsdmFsdWU6dn0pO2IucHVzaCh2KVwiKStcIix0aHJvdzpcIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcInZcIixcInRcIl0sXCJpZih0PXAuc2hpZnQoKSl0LmYodik7ZigpLGQ9Yi5sZW5ndGgsZT0hMCxiLnB1c2godilcIikrXCIscmV0dXJuOlwiK3RoaXMuY3JlYXRlRWZmZWN0ZnVsRnVuY3Rpb24oW1widlwiLFwidFwiXSxcImlmKHQ9cC5zaGlmdCgpKXQucyh7ZG9uZTohMCx2YWx1ZTp2fSk7ZigpLGQ9Yi5sZW5ndGgsYi5wdXNoKHYpXCIpK1wifSksdD17W1wiK3RoaXMuZ2V0UmVmUGFyYW0ocy5pKStcIl06XCIrdGhpcy5jcmVhdGVGdW5jdGlvbihbXSxcInRcIikrXCIsbmV4dDpcIit0aGlzLmNyZWF0ZUVmZmVjdGZ1bEZ1bmN0aW9uKFtcImlcIixcInRcIixcInZcIl0sXCJpZihkPT09LTEpe3JldHVybigoaT1jKyspPj1iLmxlbmd0aCk/KHAucHVzaCh0PVwiK3RoaXMuZ2V0UmVmUGFyYW0oci5pKStcIigpKSx0KTp7ZG9uZTohMSx2YWx1ZTpiW2ldfX1pZihjPmQpcmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfTtpZih2PWJbaT1jKytdLGkhPT1kKXJldHVybntkb25lOiExLHZhbHVlOnZ9O2lmKGUpdGhyb3cgdjtyZXR1cm57ZG9uZTohMCx2YWx1ZTp2fVwiKStcIn0pXCIpKSk7cmV0dXJuIG4/bithK1wiKVwiOmF9c2VyaWFsaXplQXN5bmNJdGVyYXRvckZhY3RvcnlJbnN0YW5jZShlKXtyZXR1cm4gdGhpcy5nZXRDb25zdHJ1Y3RvcihlLmFbMF0pK1wiKFwiK3RoaXMuc2VyaWFsaXplKGUuYVsxXSkrXCIpXCJ9c2VyaWFsaXplU3RyZWFtQ29uc3RydWN0b3IoZSl7bGV0IHI9dGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5mKStcIigpXCIpLHM9ZS5hLmxlbmd0aDtpZihzKXtsZXQgbj10aGlzLnNlcmlhbGl6ZShlLmFbMF0pO2ZvcihsZXQgYT0xO2E8czthKyspbis9XCIsXCIrdGhpcy5zZXJpYWxpemUoZS5hW2FdKTtyZXR1cm5cIihcIityK1wiLFwiK24rXCIsXCIrdGhpcy5nZXRSZWZQYXJhbShlLmkpK1wiKVwifXJldHVybiByfXNlcmlhbGl6ZVN0cmVhbU5leHQoZSl7cmV0dXJuIHRoaXMuZ2V0UmVmUGFyYW0oZS5pKStcIi5uZXh0KFwiK3RoaXMuc2VyaWFsaXplKGUuZikrXCIpXCJ9c2VyaWFsaXplU3RyZWFtVGhyb3coZSl7cmV0dXJuIHRoaXMuZ2V0UmVmUGFyYW0oZS5pKStcIi50aHJvdyhcIit0aGlzLnNlcmlhbGl6ZShlLmYpK1wiKVwifXNlcmlhbGl6ZVN0cmVhbVJldHVybihlKXtyZXR1cm4gdGhpcy5nZXRSZWZQYXJhbShlLmkpK1wiLnJldHVybihcIit0aGlzLnNlcmlhbGl6ZShlLmYpK1wiKVwifXNlcmlhbGl6ZUFib3J0U2lnbmFsU3luYyhlKXtyZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLFwiQWJvcnRTaWduYWwuYWJvcnQoXCIrdGhpcy5zZXJpYWxpemUoZS5mKStcIilcIil9c2VyaWFsaXplQWJvcnRTaWduYWxDb25zdHJ1Y3RvcihlKXtyZXR1cm4gdGhpcy5hc3NpZ25JbmRleGVkVmFsdWUoZS5pLHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5mKStcIigpXCIpfXNlcmlhbGl6ZUFib3J0U2lnbmFsQWJvcnQoZSl7cmV0dXJuIHRoaXMuZ2V0Q29uc3RydWN0b3IoZS5hWzBdKStcIihcIit0aGlzLmdldFJlZlBhcmFtKGUuaSkrXCIsXCIrdGhpcy5zZXJpYWxpemUoZS5hWzFdKStcIilcIn1zZXJpYWxpemUoZSl7dHJ5e3N3aXRjaChlLnQpe2Nhc2UgMjpyZXR1cm4gcWVbZS5zXTtjYXNlIDA6cmV0dXJuXCJcIitlLnM7Y2FzZSAxOnJldHVybidcIicrZS5zKydcIic7Y2FzZSAzOnJldHVybiBlLnMrXCJuXCI7Y2FzZSA0OnJldHVybiB0aGlzLmdldFJlZlBhcmFtKGUuaSk7Y2FzZSAxODpyZXR1cm4gdGhpcy5zZXJpYWxpemVSZWZlcmVuY2UoZSk7Y2FzZSA5OnJldHVybiB0aGlzLnNlcmlhbGl6ZUFycmF5KGUpO2Nhc2UgMTA6cmV0dXJuIHRoaXMuc2VyaWFsaXplT2JqZWN0KGUpO2Nhc2UgMTE6cmV0dXJuIHRoaXMuc2VyaWFsaXplTnVsbENvbnN0cnVjdG9yKGUpO2Nhc2UgNTpyZXR1cm4gdGhpcy5zZXJpYWxpemVEYXRlKGUpO2Nhc2UgNjpyZXR1cm4gdGhpcy5zZXJpYWxpemVSZWdFeHAoZSk7Y2FzZSA3OnJldHVybiB0aGlzLnNlcmlhbGl6ZVNldChlKTtjYXNlIDg6cmV0dXJuIHRoaXMuc2VyaWFsaXplTWFwKGUpO2Nhc2UgMTk6cmV0dXJuIHRoaXMuc2VyaWFsaXplQXJyYXlCdWZmZXIoZSk7Y2FzZSAxNjpjYXNlIDE1OnJldHVybiB0aGlzLnNlcmlhbGl6ZVR5cGVkQXJyYXkoZSk7Y2FzZSAyMDpyZXR1cm4gdGhpcy5zZXJpYWxpemVEYXRhVmlldyhlKTtjYXNlIDE0OnJldHVybiB0aGlzLnNlcmlhbGl6ZUFnZ3JlZ2F0ZUVycm9yKGUpO2Nhc2UgMTM6cmV0dXJuIHRoaXMuc2VyaWFsaXplRXJyb3IoZSk7Y2FzZSAxMjpyZXR1cm4gdGhpcy5zZXJpYWxpemVQcm9taXNlKGUpO2Nhc2UgMTc6cmV0dXJuIHRoaXMuc2VyaWFsaXplV2VsbEtub3duU3ltYm9sKGUpO2Nhc2UgMjE6cmV0dXJuIHRoaXMuc2VyaWFsaXplQm94ZWQoZSk7Y2FzZSAyMjpyZXR1cm4gdGhpcy5zZXJpYWxpemVQcm9taXNlQ29uc3RydWN0b3IoZSk7Y2FzZSAyMzpyZXR1cm4gdGhpcy5zZXJpYWxpemVQcm9taXNlUmVzb2x2ZShlKTtjYXNlIDI0OnJldHVybiB0aGlzLnNlcmlhbGl6ZVByb21pc2VSZWplY3QoZSk7Y2FzZSAyNTpyZXR1cm4gdGhpcy5zZXJpYWxpemVQbHVnaW4oZSk7Y2FzZSAyNjpyZXR1cm4gdGhpcy5zZXJpYWxpemVTcGVjaWFsUmVmZXJlbmNlKGUpO2Nhc2UgMjc6cmV0dXJuIHRoaXMuc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5KGUpO2Nhc2UgMjg6cmV0dXJuIHRoaXMuc2VyaWFsaXplSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7Y2FzZSAyOTpyZXR1cm4gdGhpcy5zZXJpYWxpemVBc3luY0l0ZXJhdG9yRmFjdG9yeShlKTtjYXNlIDMwOnJldHVybiB0aGlzLnNlcmlhbGl6ZUFzeW5jSXRlcmF0b3JGYWN0b3J5SW5zdGFuY2UoZSk7Y2FzZSAzMTpyZXR1cm4gdGhpcy5zZXJpYWxpemVTdHJlYW1Db25zdHJ1Y3RvcihlKTtjYXNlIDMyOnJldHVybiB0aGlzLnNlcmlhbGl6ZVN0cmVhbU5leHQoZSk7Y2FzZSAzMzpyZXR1cm4gdGhpcy5zZXJpYWxpemVTdHJlYW1UaHJvdyhlKTtjYXNlIDM0OnJldHVybiB0aGlzLnNlcmlhbGl6ZVN0cmVhbVJldHVybihlKTtjYXNlIDM2OnJldHVybiB0aGlzLnNlcmlhbGl6ZUFib3J0U2lnbmFsQWJvcnQoZSk7Y2FzZSAzNTpyZXR1cm4gdGhpcy5zZXJpYWxpemVBYm9ydFNpZ25hbENvbnN0cnVjdG9yKGUpO2Nhc2UgMzc6cmV0dXJuIHRoaXMuc2VyaWFsaXplQWJvcnRTaWduYWxTeW5jKGUpO2RlZmF1bHQ6dGhyb3cgbmV3IGcoZSl9fWNhdGNoKHIpe3Rocm93IG5ldyB6ZShyKX19fTt2YXIgVD1jbGFzcyBleHRlbmRzIE97Y29uc3RydWN0b3Iocil7c3VwZXIocik7dGhpcy5tb2RlPVwiY3Jvc3NcIjt0aGlzLnNjb3BlSWQ9ci5zY29wZUlkfWdldFJlZlBhcmFtKHIpe3JldHVybiBaK1wiW1wiK3IrXCJdXCJ9YXNzaWduSW5kZXhlZFZhbHVlKHIscyl7cmV0dXJuIHRoaXMuZ2V0UmVmUGFyYW0ocikrXCI9XCIrc31zZXJpYWxpemVUb3Aocil7bGV0IHM9dGhpcy5zZXJpYWxpemUociksbj1yLmk7aWYobj09bnVsbClyZXR1cm4gcztsZXQgYT10aGlzLnJlc29sdmVQYXRjaGVzKCksaT10aGlzLmdldFJlZlBhcmFtKG4pLGw9dGhpcy5zY29wZUlkPT1udWxsP1wiXCI6WixjPWE/XCIoXCIrcytcIixcIithK2krXCIpXCI6cztpZihsPT09XCJcIilyZXR1cm4gci50PT09MTAmJiFhP1wiKFwiK2MrXCIpXCI6YztsZXQgZD10aGlzLnNjb3BlSWQ9PW51bGw/XCIoKVwiOlwiKFwiK1orJ1tcIicrcCh0aGlzLnNjb3BlSWQpKydcIl0pJztyZXR1cm5cIihcIit0aGlzLmNyZWF0ZUZ1bmN0aW9uKFtsXSxjKStcIilcIitkfX07dmFyIE49Y2xhc3MgZXh0ZW5kcyBLe3BhcnNlSXRlbXMoZSl7bGV0IHI9W107Zm9yKGxldCBzPTAsbj1lLmxlbmd0aDtzPG47cysrKXMgaW4gZSYmKHJbc109dGhpcy5wYXJzZShlW3NdKSk7cmV0dXJuIHJ9cGFyc2VBcnJheShlLHIpe3JldHVybiB2ZShlLHIsdGhpcy5wYXJzZUl0ZW1zKHIpKX1wYXJzZVByb3BlcnRpZXMoZSl7bGV0IHI9T2JqZWN0LmVudHJpZXMoZSkscz1bXSxuPVtdO2ZvcihsZXQgaT0wLGw9ci5sZW5ndGg7aTxsO2krKylzLnB1c2gocChyW2ldWzBdKSksbi5wdXNoKHRoaXMucGFyc2UocltpXVsxXSkpO2xldCBhPVN5bWJvbC5pdGVyYXRvcjtyZXR1cm4gYSBpbiBlJiYocy5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLG4ucHVzaChCKHRoaXMucGFyc2VJdGVyYXRvckZhY3RvcnkoKSx0aGlzLnBhcnNlKFcoZSkpKSkpLGE9U3ltYm9sLmFzeW5jSXRlcmF0b3IsYSBpbiBlJiYocy5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLG4ucHVzaChqKHRoaXMucGFyc2VBc3luY0l0ZXJhdG9yRmFjdG9yeSgpLHRoaXMucGFyc2UoTCgpKSkpKSxhPVN5bWJvbC50b1N0cmluZ1RhZyxhIGluIGUmJihzLnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChhKSksbi5wdXNoKHcoZVthXSkpKSxhPVN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUsYSBpbiBlJiYocy5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woYSkpLG4ucHVzaChlW2FdP3g6SSkpLHtrOnMsdjpuLHM6cy5sZW5ndGh9fXBhcnNlUGxhaW5PYmplY3QoZSxyLHMpe3JldHVybiB0aGlzLmNyZWF0ZU9iamVjdE5vZGUoZSxyLHMsdGhpcy5wYXJzZVByb3BlcnRpZXMocikpfXBhcnNlQm94ZWQoZSxyKXtyZXR1cm4gTmUoZSx0aGlzLnBhcnNlKHIudmFsdWVPZigpKSl9cGFyc2VUeXBlZEFycmF5KGUscil7cmV0dXJuIGJlKGUscix0aGlzLnBhcnNlKHIuYnVmZmVyKSl9cGFyc2VCaWdJbnRUeXBlZEFycmF5KGUscil7cmV0dXJuIEFlKGUscix0aGlzLnBhcnNlKHIuYnVmZmVyKSl9cGFyc2VEYXRhVmlldyhlLHIpe3JldHVybiB4ZShlLHIsdGhpcy5wYXJzZShyLmJ1ZmZlcikpfXBhcnNlRXJyb3IoZSxyKXtsZXQgcz1WKHIsdGhpcy5mZWF0dXJlcyk7cmV0dXJuIEllKGUscixzP3RoaXMucGFyc2VQcm9wZXJ0aWVzKHMpOnQpfXBhcnNlQWdncmVnYXRlRXJyb3IoZSxyKXtsZXQgcz1WKHIsdGhpcy5mZWF0dXJlcyk7cmV0dXJuIHdlKGUscixzP3RoaXMucGFyc2VQcm9wZXJ0aWVzKHMpOnQpfXBhcnNlTWFwKGUscil7bGV0IHM9W10sbj1bXTtmb3IobGV0W2EsaV1vZiByLmVudHJpZXMoKSlzLnB1c2godGhpcy5wYXJzZShhKSksbi5wdXNoKHRoaXMucGFyc2UoaSkpO3JldHVybiB0aGlzLmNyZWF0ZU1hcE5vZGUoZSxzLG4sci5zaXplKX1wYXJzZVNldChlLHIpe2xldCBzPVtdO2ZvcihsZXQgbiBvZiByLmtleXMoKSlzLnB1c2godGhpcy5wYXJzZShuKSk7cmV0dXJuIEVlKGUsci5zaXplLHMpfXBhcnNlUGx1Z2luKGUscil7bGV0IHM9dGhpcy5wbHVnaW5zO2lmKHMpZm9yKGxldCBuPTAsYT1zLmxlbmd0aDtuPGE7bisrKXtsZXQgaT1zW25dO2lmKGkucGFyc2Uuc3luYyYmaS50ZXN0KHIpKXJldHVybiBEKGUsaS50YWcsaS5wYXJzZS5zeW5jKHIsdGhpcyx7aWQ6ZX0pKX19cGFyc2VTdHJlYW0oZSxyKXtyZXR1cm4gXyhlLHRoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDQpLFtdKX1wYXJzZVByb21pc2UoZSxyKXtyZXR1cm4gdGhpcy5jcmVhdGVQcm9taXNlQ29uc3RydWN0b3JOb2RlKGUpfXBhcnNlQWJvcnRTaWduYWxTeW5jKGUscil7cmV0dXJuIHUoMzcsZSx0LHQsdCx0LHQsdCx0LHRoaXMucGFyc2Uoci5yZWFzb24pLHQsdCl9cGFyc2VBYm9ydFNpZ25hbChlLHIpe3JldHVybiByLmFib3J0ZWQ/dGhpcy5wYXJzZUFib3J0U2lnbmFsU3luYyhlLHIpOnRoaXMuY3JlYXRlQWJvcnRTaWduYWxDb25zdHJ1Y3Rvck5vZGUoZSl9cGFyc2VPYmplY3QoZSxyKXtpZihBcnJheS5pc0FycmF5KHIpKXJldHVybiB0aGlzLnBhcnNlQXJyYXkoZSxyKTtpZihrZShyKSlyZXR1cm4gdGhpcy5wYXJzZVN0cmVhbShlLHIpO2xldCBzPXIuY29uc3RydWN0b3I7aWYocz09PVApcmV0dXJuIHRoaXMucGFyc2Uoci5yZXBsYWNlbWVudCk7bGV0IG49dGhpcy5wYXJzZVBsdWdpbihlLHIpO2lmKG4pcmV0dXJuIG47c3dpdGNoKHMpe2Nhc2UgT2JqZWN0OnJldHVybiB0aGlzLnBhcnNlUGxhaW5PYmplY3QoZSxyLCExKTtjYXNlIHZvaWQgMDpyZXR1cm4gdGhpcy5wYXJzZVBsYWluT2JqZWN0KGUsciwhMCk7Y2FzZSBEYXRlOnJldHVybiBnZShlLHIpO2Nhc2UgUmVnRXhwOnJldHVybiBoZShlLHIpO2Nhc2UgRXJyb3I6Y2FzZSBFdmFsRXJyb3I6Y2FzZSBSYW5nZUVycm9yOmNhc2UgUmVmZXJlbmNlRXJyb3I6Y2FzZSBTeW50YXhFcnJvcjpjYXNlIFR5cGVFcnJvcjpjYXNlIFVSSUVycm9yOnJldHVybiB0aGlzLnBhcnNlRXJyb3IoZSxyKTtjYXNlIE51bWJlcjpjYXNlIEJvb2xlYW46Y2FzZSBTdHJpbmc6Y2FzZSBCaWdJbnQ6cmV0dXJuIHRoaXMucGFyc2VCb3hlZChlLHIpO2Nhc2UgQXJyYXlCdWZmZXI6cmV0dXJuIHllKGUscik7Y2FzZSBJbnQ4QXJyYXk6Y2FzZSBJbnQxNkFycmF5OmNhc2UgSW50MzJBcnJheTpjYXNlIFVpbnQ4QXJyYXk6Y2FzZSBVaW50MTZBcnJheTpjYXNlIFVpbnQzMkFycmF5OmNhc2UgVWludDhDbGFtcGVkQXJyYXk6Y2FzZSBGbG9hdDMyQXJyYXk6Y2FzZSBGbG9hdDY0QXJyYXk6cmV0dXJuIHRoaXMucGFyc2VUeXBlZEFycmF5KGUscik7Y2FzZSBEYXRhVmlldzpyZXR1cm4gdGhpcy5wYXJzZURhdGFWaWV3KGUscik7Y2FzZSBNYXA6cmV0dXJuIHRoaXMucGFyc2VNYXAoZSxyKTtjYXNlIFNldDpyZXR1cm4gdGhpcy5wYXJzZVNldChlLHIpO2RlZmF1bHQ6YnJlYWt9aWYocz09PVByb21pc2V8fHIgaW5zdGFuY2VvZiBQcm9taXNlKXJldHVybiB0aGlzLnBhcnNlUHJvbWlzZShlLHIpO2xldCBhPXRoaXMuZmVhdHVyZXM7aWYoYSYzMiYmdHlwZW9mIEFib3J0U2lnbmFsIT1cInVuZGVmaW5lZFwiJiZzPT09QWJvcnRTaWduYWwpcmV0dXJuIHRoaXMucGFyc2VBYm9ydFNpZ25hbChlLHIpO2lmKGEmMTYpc3dpdGNoKHMpe2Nhc2UgQmlnSW50NjRBcnJheTpjYXNlIEJpZ1VpbnQ2NEFycmF5OnJldHVybiB0aGlzLnBhcnNlQmlnSW50VHlwZWRBcnJheShlLHIpO2RlZmF1bHQ6YnJlYWt9aWYoYSYxJiZ0eXBlb2YgQWdncmVnYXRlRXJyb3IhPVwidW5kZWZpbmVkXCImJihzPT09QWdncmVnYXRlRXJyb3J8fHIgaW5zdGFuY2VvZiBBZ2dyZWdhdGVFcnJvcikpcmV0dXJuIHRoaXMucGFyc2VBZ2dyZWdhdGVFcnJvcihlLHIpO2lmKHIgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdGhpcy5wYXJzZUVycm9yKGUscik7aWYoU3ltYm9sLml0ZXJhdG9yIGluIHJ8fFN5bWJvbC5hc3luY0l0ZXJhdG9yIGluIHIpcmV0dXJuIHRoaXMucGFyc2VQbGFpbk9iamVjdChlLHIsISFzKTt0aHJvdyBuZXcgUyhyKX1wYXJzZShlKXt0cnl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJib29sZWFuXCI6cmV0dXJuIGU/eDpJO2Nhc2VcInVuZGVmaW5lZFwiOnJldHVybiB1ZTtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gdyhlKTtjYXNlXCJudW1iZXJcIjpyZXR1cm4gbWUoZSk7Y2FzZVwiYmlnaW50XCI6cmV0dXJuIFNlKGUpO2Nhc2VcIm9iamVjdFwiOntpZihlKXtsZXQgcj10aGlzLmdldFJlZmVyZW5jZShlKTtyZXR1cm4gci50eXBlPT09MD90aGlzLnBhcnNlT2JqZWN0KHIudmFsdWUsZSk6ci52YWx1ZX1yZXR1cm4gZGV9Y2FzZVwic3ltYm9sXCI6cmV0dXJuIHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woZSk7Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKGUpO2RlZmF1bHQ6dGhyb3cgbmV3IFMoZSl9fWNhdGNoKHIpe3Rocm93IG5ldyBNKHIpfX19O3ZhciB0ZT1jbGFzcyBleHRlbmRzIE57Y29uc3RydWN0b3Iocil7c3VwZXIocik7dGhpcy5hbGl2ZT0hMDt0aGlzLnBlbmRpbmc9MDt0aGlzLmluaXRpYWw9ITA7dGhpcy5idWZmZXI9W107dGhpcy5vblBhcnNlQ2FsbGJhY2s9ci5vblBhcnNlLHRoaXMub25FcnJvckNhbGxiYWNrPXIub25FcnJvcix0aGlzLm9uRG9uZUNhbGxiYWNrPXIub25Eb25lfW9uUGFyc2VJbnRlcm5hbChyLHMpe3RyeXt0aGlzLm9uUGFyc2VDYWxsYmFjayhyLHMpfWNhdGNoKG4pe3RoaXMub25FcnJvcihuKX19Zmx1c2goKXtmb3IobGV0IHI9MCxzPXRoaXMuYnVmZmVyLmxlbmd0aDtyPHM7cisrKXRoaXMub25QYXJzZUludGVybmFsKHRoaXMuYnVmZmVyW3JdLCExKX1vblBhcnNlKHIpe3RoaXMuaW5pdGlhbD90aGlzLmJ1ZmZlci5wdXNoKHIpOnRoaXMub25QYXJzZUludGVybmFsKHIsITEpfW9uRXJyb3Iocil7aWYodGhpcy5vbkVycm9yQ2FsbGJhY2spdGhpcy5vbkVycm9yQ2FsbGJhY2socik7ZWxzZSB0aHJvdyByfW9uRG9uZSgpe3RoaXMub25Eb25lQ2FsbGJhY2smJnRoaXMub25Eb25lQ2FsbGJhY2soKX1wdXNoUGVuZGluZ1N0YXRlKCl7dGhpcy5wZW5kaW5nKyt9cG9wUGVuZGluZ1N0YXRlKCl7LS10aGlzLnBlbmRpbmc8PTAmJnRoaXMub25Eb25lKCl9cGFyc2VQcm9wZXJ0aWVzKHIpe2xldCBzPU9iamVjdC5lbnRyaWVzKHIpLG49W10sYT1bXTtmb3IobGV0IGw9MCxjPXMubGVuZ3RoO2w8YztsKyspbi5wdXNoKHAoc1tsXVswXSkpLGEucHVzaCh0aGlzLnBhcnNlKHNbbF1bMV0pKTtsZXQgaT1TeW1ib2wuaXRlcmF0b3I7cmV0dXJuIGkgaW4gciYmKG4ucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGkpKSxhLnB1c2goQih0aGlzLnBhcnNlSXRlcmF0b3JGYWN0b3J5KCksdGhpcy5wYXJzZShXKHIpKSkpKSxpPVN5bWJvbC5hc3luY0l0ZXJhdG9yLGkgaW4gciYmKG4ucHVzaCh0aGlzLnBhcnNlV2VsbEtub3duU3ltYm9sKGkpKSxhLnB1c2goaih0aGlzLnBhcnNlQXN5bmNJdGVyYXRvckZhY3RvcnkoKSx0aGlzLnBhcnNlKEZlKHIpKSkpKSxpPVN5bWJvbC50b1N0cmluZ1RhZyxpIGluIHImJihuLnB1c2godGhpcy5wYXJzZVdlbGxLbm93blN5bWJvbChpKSksYS5wdXNoKHcocltpXSkpKSxpPVN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUsaSBpbiByJiYobi5wdXNoKHRoaXMucGFyc2VXZWxsS25vd25TeW1ib2woaSkpLGEucHVzaChyW2ldP3g6SSkpLHtrOm4sdjphLHM6bi5sZW5ndGh9fXBhcnNlUHJvbWlzZShyLHMpe3JldHVybiBzLnRoZW4obj0+e2xldCBhPXRoaXMucGFyc2VXaXRoRXJyb3Iobik7YSYmdGhpcy5vblBhcnNlKHUoMjMscix0LHQsdCx0LHQsdCxbdGhpcy5wYXJzZVNwZWNpYWxSZWZlcmVuY2UoMiksYV0sdCx0LHQpKSx0aGlzLnBvcFBlbmRpbmdTdGF0ZSgpfSxuPT57aWYodGhpcy5hbGl2ZSl7bGV0IGE9dGhpcy5wYXJzZVdpdGhFcnJvcihuKTthJiZ0aGlzLm9uUGFyc2UodSgyNCxyLHQsdCx0LHQsdCx0LFt0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSgzKSxhXSx0LHQsdCkpfXRoaXMucG9wUGVuZGluZ1N0YXRlKCl9KSx0aGlzLnB1c2hQZW5kaW5nU3RhdGUoKSx0aGlzLmNyZWF0ZVByb21pc2VDb25zdHJ1Y3Rvck5vZGUocil9cGFyc2VQbHVnaW4ocixzKXtsZXQgbj10aGlzLnBsdWdpbnM7aWYobilmb3IobGV0IGE9MCxpPW4ubGVuZ3RoO2E8aTthKyspe2xldCBsPW5bYV07aWYobC5wYXJzZS5zdHJlYW0mJmwudGVzdChzKSlyZXR1cm4gRChyLGwudGFnLGwucGFyc2Uuc3RyZWFtKHMsdGhpcyx7aWQ6cn0pKX1yZXR1cm4gdH1wYXJzZVN0cmVhbShyLHMpe2xldCBuPV8ocix0aGlzLnBhcnNlU3BlY2lhbFJlZmVyZW5jZSg0KSxbXSk7cmV0dXJuIHRoaXMucHVzaFBlbmRpbmdTdGF0ZSgpLHMub24oe25leHQ6YT0+e2lmKHRoaXMuYWxpdmUpe2xldCBpPXRoaXMucGFyc2VXaXRoRXJyb3IoYSk7aSYmdGhpcy5vblBhcnNlKFJlKHIsaSkpfX0sdGhyb3c6YT0+e2lmKHRoaXMuYWxpdmUpe2xldCBpPXRoaXMucGFyc2VXaXRoRXJyb3IoYSk7aSYmdGhpcy5vblBhcnNlKFBlKHIsaSkpfXRoaXMucG9wUGVuZGluZ1N0YXRlKCl9LHJldHVybjphPT57aWYodGhpcy5hbGl2ZSl7bGV0IGk9dGhpcy5wYXJzZVdpdGhFcnJvcihhKTtpJiZ0aGlzLm9uUGFyc2UoQ2UocixpKSl9dGhpcy5wb3BQZW5kaW5nU3RhdGUoKX19KSxufXBhcnNlQWJvcnRTaWduYWwocixzKXtyZXR1cm4gcy5hYm9ydGVkP3RoaXMucGFyc2VBYm9ydFNpZ25hbFN5bmMocixzKToodGhpcy5wdXNoUGVuZGluZ1N0YXRlKCkscy5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwoKT0+e2lmKHRoaXMuYWxpdmUpe2xldCBuPXRoaXMucGFyc2VXaXRoRXJyb3Iocy5yZWFzb24pO24mJnRoaXMub25QYXJzZSh1KDM2LHIsdCx0LHQsdCx0LHQsW3RoaXMucGFyc2VTcGVjaWFsUmVmZXJlbmNlKDYpLG5dLHQsdCx0KSl9dGhpcy5wb3BQZW5kaW5nU3RhdGUoKX0se29uY2U6ITB9KSx0aGlzLmNyZWF0ZUFib3J0U2lnbmFsQ29uc3RydWN0b3JOb2RlKHIpKX1wYXJzZVdpdGhFcnJvcihyKXt0cnl7cmV0dXJuIHRoaXMucGFyc2Uocil9Y2F0Y2gocyl7cmV0dXJuIHRoaXMub25FcnJvcihzKSx0fX1zdGFydChyKXtsZXQgcz10aGlzLnBhcnNlV2l0aEVycm9yKHIpO3MmJih0aGlzLm9uUGFyc2VJbnRlcm5hbChzLCEwKSx0aGlzLmluaXRpYWw9ITEsdGhpcy5mbHVzaCgpLHRoaXMucGVuZGluZzw9MCYmdGhpcy5kZXN0cm95KCkpfWRlc3Ryb3koKXt0aGlzLmFsaXZlJiYodGhpcy5vbkRvbmUoKSx0aGlzLmFsaXZlPSExKX1pc0FsaXZlKCl7cmV0dXJuIHRoaXMuYWxpdmV9fTt2YXIgWT1jbGFzcyBleHRlbmRzIHRle2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKTt0aGlzLm1vZGU9XCJjcm9zc1wifX07dmFyICQ9Y2xhc3MgZXh0ZW5kcyBOe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKTt0aGlzLm1vZGU9XCJjcm9zc1wifX07ZnVuY3Rpb24gc28obyxlPXt9KXtsZXQgcj1mKGUucGx1Z2lucykscz1uZXcgJCh7cGx1Z2luczpyLGRpc2FibGVkRmVhdHVyZXM6ZS5kaXNhYmxlZEZlYXR1cmVzLHJlZnM6ZS5yZWZzfSksbj1zLnBhcnNlKG8pO3JldHVybiBuZXcgVCh7cGx1Z2luczpyLGZlYXR1cmVzOnMuZmVhdHVyZXMsc2NvcGVJZDplLnNjb3BlSWQsbWFya2VkUmVmczpzLm1hcmtlZH0pLnNlcmlhbGl6ZVRvcChuKX1hc3luYyBmdW5jdGlvbiBvbyhvLGU9e30pe2xldCByPWYoZS5wbHVnaW5zKSxzPW5ldyBKKHtwbHVnaW5zOnIsZGlzYWJsZWRGZWF0dXJlczplLmRpc2FibGVkRmVhdHVyZXMscmVmczplLnJlZnN9KSxuPWF3YWl0IHMucGFyc2Uobyk7cmV0dXJuIG5ldyBUKHtwbHVnaW5zOnIsZmVhdHVyZXM6cy5mZWF0dXJlcyxzY29wZUlkOmUuc2NvcGVJZCxtYXJrZWRSZWZzOnMubWFya2VkfSkuc2VyaWFsaXplVG9wKG4pfWZ1bmN0aW9uIG5vKG8sZT17fSl7bGV0IHI9ZihlLnBsdWdpbnMpO3JldHVybiBuZXcgJCh7cGx1Z2luczpyLGRpc2FibGVkRmVhdHVyZXM6ZS5kaXNhYmxlZEZlYXR1cmVzLHJlZnM6ZS5yZWZzfSkucGFyc2Uobyl9YXN5bmMgZnVuY3Rpb24gYW8obyxlPXt9KXtsZXQgcj1mKGUucGx1Z2lucyk7cmV0dXJuIGF3YWl0IG5ldyBKKHtwbHVnaW5zOnIsZGlzYWJsZWRGZWF0dXJlczplLmRpc2FibGVkRmVhdHVyZXMscmVmczplLnJlZnN9KS5wYXJzZShvKX1mdW5jdGlvbiBmcihvLGUpe2xldCByPWYoZS5wbHVnaW5zKSxzPW5ldyBZKHtwbHVnaW5zOnIscmVmczplLnJlZnMsZGlzYWJsZWRGZWF0dXJlczplLmRpc2FibGVkRmVhdHVyZXMsb25QYXJzZShuLGEpe2xldCBpPW5ldyBUKHtwbHVnaW5zOnIsZmVhdHVyZXM6cy5mZWF0dXJlcyxzY29wZUlkOmUuc2NvcGVJZCxtYXJrZWRSZWZzOnMubWFya2VkfSksbDt0cnl7bD1pLnNlcmlhbGl6ZVRvcChuKX1jYXRjaChjKXtlLm9uRXJyb3ImJmUub25FcnJvcihjKTtyZXR1cm59ZS5vblNlcmlhbGl6ZShsLGEpfSxvbkVycm9yOmUub25FcnJvcixvbkRvbmU6ZS5vbkRvbmV9KTtyZXR1cm4gcy5zdGFydChvKSwoKT0+e3MuZGVzdHJveSgpfX1mdW5jdGlvbiBpbyhvLGUpe2xldCByPWYoZS5wbHVnaW5zKSxzPW5ldyBZKHtwbHVnaW5zOnIscmVmczplLnJlZnMsZGlzYWJsZWRGZWF0dXJlczplLmRpc2FibGVkRmVhdHVyZXMsb25QYXJzZTplLm9uUGFyc2Usb25FcnJvcjplLm9uRXJyb3Isb25Eb25lOmUub25Eb25lfSk7cmV0dXJuIHMuc3RhcnQobyksKCk9PntzLmRlc3Ryb3koKX19ZnVuY3Rpb24gbG8obyxlKXtsZXQgcj1mKGUucGx1Z2lucyk7cmV0dXJuIG5ldyBlZSh7cGx1Z2luczpyLHJlZnM6ZS5yZWZzfSkuZGVzZXJpYWxpemUobyl9dmFyIEc9Y2xhc3MgZXh0ZW5kcyBDe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKTt0aGlzLm1vZGU9XCJ2YW5pbGxhXCJ9fTt2YXIgc2U9Y2xhc3MgZXh0ZW5kcyB6e2NvbnN0cnVjdG9yKHIpe3N1cGVyKHIpO3RoaXMubW9kZT1cInZhbmlsbGFcIjt0aGlzLm1hcmtlZD1uZXcgU2V0KHIubWFya2VkUmVmcyl9YXNzaWduSW5kZXhlZFZhbHVlKHIscyl7cmV0dXJuIHRoaXMubWFya2VkLmhhcyhyKSYmdGhpcy5yZWZzLnNldChyLHMpLHN9fTt2YXIgZ3I9XCJoamttb3F1eHpBQkNERUZHSElKS0xOUFFSVFVWV1hZWiRfXCIsbXI9Z3IubGVuZ3RoLGhyPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODkkX1wiLFNyPWhyLmxlbmd0aDtmdW5jdGlvbiBMZShvKXtsZXQgZT1vJW1yLHI9Z3JbZV07Zm9yKG89KG8tZSkvbXI7bz4wOyllPW8lU3Iscis9aHJbZV0sbz0oby1lKS9TcjtyZXR1cm4gcn12YXIgaz1jbGFzcyBleHRlbmRzIE97Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpO3RoaXMubW9kZT1cInZhbmlsbGFcIjt0aGlzLnZhbGlkPW5ldyBNYXA7dGhpcy52YXJzPVtdfWdldFJlZlBhcmFtKHIpe2xldCBzPXRoaXMudmFsaWQuZ2V0KHIpO3M9PW51bGwmJihzPXRoaXMudmFsaWQuc2l6ZSx0aGlzLnZhbGlkLnNldChyLHMpKTtsZXQgbj10aGlzLnZhcnNbc107cmV0dXJuIG49PW51bGwmJihuPUxlKHMpLHRoaXMudmFyc1tzXT1uKSxufWFzc2lnbkluZGV4ZWRWYWx1ZShyLHMpe3JldHVybiB0aGlzLmlzTWFya2VkKHIpP3RoaXMuZ2V0UmVmUGFyYW0ocikrXCI9XCIrczpzfXNlcmlhbGl6ZVByb21pc2VDb25zdHJ1Y3RvcihyKXt0aHJvdyBuZXcgZyhyKX1zZXJpYWxpemVQcm9taXNlUmVzb2x2ZShyKXt0aHJvdyBuZXcgZyhyKX1zZXJpYWxpemVQcm9taXNlUmVqZWN0KHIpe3Rocm93IG5ldyBnKHIpfXNlcmlhbGl6ZUFib3J0U2lnbmFsQWJvcnQocil7dGhyb3cgbmV3IGcocil9c2VyaWFsaXplVG9wKHIpe2xldCBzPXRoaXMuc2VyaWFsaXplKHIpO2lmKHIuaSE9bnVsbCYmdGhpcy52YXJzLmxlbmd0aCl7bGV0IG49dGhpcy5yZXNvbHZlUGF0Y2hlcygpLGE9cztpZihuKXtsZXQgaT10aGlzLmdldFJlZlBhcmFtKHIuaSk7YT1zK1wiLFwiK24raSxzLnN0YXJ0c1dpdGgoaStcIj1cIil8fChhPWkrXCI9XCIrYSksYT1cIihcIithK1wiKVwifXJldHVyblwiKFwiK3RoaXMuY3JlYXRlRnVuY3Rpb24odGhpcy52YXJzLGEpK1wiKSgpXCJ9cmV0dXJuIHIudD09PTEwP1wiKFwiK3MrXCIpXCI6c319O3ZhciBxPWNsYXNzIGV4dGVuZHMgTntjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyk7dGhpcy5tb2RlPVwidmFuaWxsYVwifX07ZnVuY3Rpb24gUG8obyxlPXt9KXtsZXQgcj1mKGUucGx1Z2lucykscz1uZXcgcSh7cGx1Z2luczpyLGRpc2FibGVkRmVhdHVyZXM6ZS5kaXNhYmxlZEZlYXR1cmVzfSksbj1zLnBhcnNlKG8pO3JldHVybiBuZXcgayh7cGx1Z2luczpyLGZlYXR1cmVzOnMuZmVhdHVyZXMsbWFya2VkUmVmczpzLm1hcmtlZH0pLnNlcmlhbGl6ZVRvcChuKX1hc3luYyBmdW5jdGlvbiBDbyhvLGU9e30pe2xldCByPWYoZS5wbHVnaW5zKSxzPW5ldyBHKHtwbHVnaW5zOnIsZGlzYWJsZWRGZWF0dXJlczplLmRpc2FibGVkRmVhdHVyZXN9KSxuPWF3YWl0IHMucGFyc2Uobyk7cmV0dXJuIG5ldyBrKHtwbHVnaW5zOnIsZmVhdHVyZXM6cy5mZWF0dXJlcyxtYXJrZWRSZWZzOnMubWFya2VkfSkuc2VyaWFsaXplVG9wKG4pfWZ1bmN0aW9uIHpvKG8pe3JldHVybigwLGV2YWwpKG8pfWZ1bmN0aW9uIE9vKG8sZT17fSl7bGV0IHI9ZihlLnBsdWdpbnMpLHM9bmV3IHEoe3BsdWdpbnM6cixkaXNhYmxlZEZlYXR1cmVzOmUuZGlzYWJsZWRGZWF0dXJlc30pO3JldHVybnt0OnMucGFyc2UobyksZjpzLmZlYXR1cmVzLG06QXJyYXkuZnJvbShzLm1hcmtlZCl9fWFzeW5jIGZ1bmN0aW9uIFRvKG8sZT17fSl7bGV0IHI9ZihlLnBsdWdpbnMpLHM9bmV3IEcoe3BsdWdpbnM6cixkaXNhYmxlZEZlYXR1cmVzOmUuZGlzYWJsZWRGZWF0dXJlc30pO3JldHVybnt0OmF3YWl0IHMucGFyc2UobyksZjpzLmZlYXR1cmVzLG06QXJyYXkuZnJvbShzLm1hcmtlZCl9fWZ1bmN0aW9uIGtvKG8sZT17fSl7bGV0IHI9ZihlLnBsdWdpbnMpO3JldHVybiBuZXcgayh7cGx1Z2luczpyLGZlYXR1cmVzOm8uZixtYXJrZWRSZWZzOm8ubX0pLnNlcmlhbGl6ZVRvcChvLnQpfWZ1bmN0aW9uIEZvKG8sZT17fSl7bGV0IHI9ZihlLnBsdWdpbnMpO3JldHVybiBuZXcgc2Uoe3BsdWdpbnM6cixtYXJrZWRSZWZzOm8ubX0pLmRlc2VyaWFsaXplKG8udCl9dmFyIERlPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMub3B0aW9ucz1lO3RoaXMuYWxpdmU9ITA7dGhpcy5mbHVzaGVkPSExO3RoaXMuZG9uZT0hMTt0aGlzLnBlbmRpbmc9MDt0aGlzLmNsZWFudXBzPVtdO3RoaXMucmVmcz1uZXcgTWFwO3RoaXMua2V5cz1uZXcgU2V0O3RoaXMuaWRzPTA7dGhpcy5wbHVnaW5zPWYoZS5wbHVnaW5zKX13cml0ZShlLHIpe3RoaXMuYWxpdmUmJiF0aGlzLmZsdXNoZWQmJih0aGlzLnBlbmRpbmcrKyx0aGlzLmtleXMuYWRkKGUpLHRoaXMuY2xlYW51cHMucHVzaChmcihyLHtwbHVnaW5zOnRoaXMucGx1Z2lucyxzY29wZUlkOnRoaXMub3B0aW9ucy5zY29wZUlkLHJlZnM6dGhpcy5yZWZzLGRpc2FibGVkRmVhdHVyZXM6dGhpcy5vcHRpb25zLmRpc2FibGVkRmVhdHVyZXMsb25FcnJvcjp0aGlzLm9wdGlvbnMub25FcnJvcixvblNlcmlhbGl6ZToocyxuKT0+e3RoaXMuYWxpdmUmJnRoaXMub3B0aW9ucy5vbkRhdGEobj90aGlzLm9wdGlvbnMuZ2xvYmFsSWRlbnRpZmllcisnW1wiJytwKGUpKydcIl09JytzOnMpfSxvbkRvbmU6KCk9Pnt0aGlzLmFsaXZlJiYodGhpcy5wZW5kaW5nLS0sdGhpcy5wZW5kaW5nPD0wJiZ0aGlzLmZsdXNoZWQmJiF0aGlzLmRvbmUmJnRoaXMub3B0aW9ucy5vbkRvbmUmJih0aGlzLm9wdGlvbnMub25Eb25lKCksdGhpcy5kb25lPSEwKSl9fSkpKX1nZXROZXh0SUQoKXtmb3IoO3RoaXMua2V5cy5oYXMoXCJcIit0aGlzLmlkcyk7KXRoaXMuaWRzKys7cmV0dXJuXCJcIit0aGlzLmlkc31wdXNoKGUpe2xldCByPXRoaXMuZ2V0TmV4dElEKCk7cmV0dXJuIHRoaXMud3JpdGUocixlKSxyfWZsdXNoKCl7dGhpcy5hbGl2ZSYmKHRoaXMuZmx1c2hlZD0hMCx0aGlzLnBlbmRpbmc8PTAmJiF0aGlzLmRvbmUmJnRoaXMub3B0aW9ucy5vbkRvbmUmJih0aGlzLm9wdGlvbnMub25Eb25lKCksdGhpcy5kb25lPSEwKSl9Y2xvc2UoKXtpZih0aGlzLmFsaXZlKXtmb3IobGV0IGU9MCxyPXRoaXMuY2xlYW51cHMubGVuZ3RoO2U8cjtlKyspdGhpcy5jbGVhbnVwc1tlXSgpOyF0aGlzLmRvbmUmJnRoaXMub3B0aW9ucy5vbkRvbmUmJih0aGlzLm9wdGlvbnMub25Eb25lKCksdGhpcy5kb25lPSEwKSx0aGlzLmFsaXZlPSExfX19O2V4cG9ydHtGIGFzIEZlYXR1cmUsUCBhcyBPcGFxdWVSZWZlcmVuY2UsRGUgYXMgU2VyaWFsaXplcixPZSBhcyBTZXJvdmFsRGVzZXJpYWxpemF0aW9uRXJyb3IsWCBhcyBTZXJvdmFsRXJyb3IsdiBhcyBTZXJvdmFsTWlzc2luZ0luc3RhbmNlRXJyb3IsVSBhcyBTZXJvdmFsTWlzc2luZ1BsdWdpbkVycm9yLGFlIGFzIFNlcm92YWxNaXNzaW5nUmVmZXJlbmNlRXJyb3IsaWUgYXMgU2Vyb3ZhbE1pc3NpbmdSZWZlcmVuY2VGb3JJZEVycm9yLE0gYXMgU2Vyb3ZhbFBhcnNlckVycm9yLHplIGFzIFNlcm92YWxTZXJpYWxpemF0aW9uRXJyb3IsVGUgYXMgU2Vyb3ZhbFVua25vd25UeXBlZEFycmF5RXJyb3IsZyBhcyBTZXJvdmFsVW5zdXBwb3J0ZWROb2RlRXJyb3IsUyBhcyBTZXJvdmFsVW5zdXBwb3J0ZWRUeXBlRXJyb3Isa28gYXMgY29tcGlsZUpTT04sV3IgYXMgY3JlYXRlUGx1Z2luLGJyIGFzIGNyZWF0ZVJlZmVyZW5jZSxMIGFzIGNyZWF0ZVN0cmVhbSxzbyBhcyBjcm9zc1NlcmlhbGl6ZSxvbyBhcyBjcm9zc1NlcmlhbGl6ZUFzeW5jLGZyIGFzIGNyb3NzU2VyaWFsaXplU3RyZWFtLHpvIGFzIGRlc2VyaWFsaXplLGxvIGFzIGZyb21Dcm9zc0pTT04sRm8gYXMgZnJvbUpTT04sTnIgYXMgZ2V0Q3Jvc3NSZWZlcmVuY2VIZWFkZXIsZiBhcyByZXNvbHZlUGx1Z2lucyxQbyBhcyBzZXJpYWxpemUsQ28gYXMgc2VyaWFsaXplQXN5bmMsbm8gYXMgdG9Dcm9zc0pTT04sYW8gYXMgdG9Dcm9zc0pTT05Bc3luYyxpbyBhcyB0b0Nyb3NzSlNPTlN0cmVhbSxPbyBhcyB0b0pTT04sVG8gYXMgdG9KU09OQXN5bmN9O1xuIl0sIm5hbWVzIjpbIkYiLCJpIiwieXIiLCJvIiwicCIsImUiLCJyIiwicyIsIm4iLCJhIiwiRSIsIm0iLCJCZSIsIlIiLCJuZSIsIldlIiwiYWUiLCJKZSIsImYiLCIkZSIsImxlIiwicWUiLCJjZSIsInQiLCJ1IiwibCIsImMiLCJkIiwiaCIsIkgiLCJBIiwieCIsIkkiLCJ1ZSIsImRlIiwiWGUiLCJRZSIsImVyIiwicnIiLCJwZSIsInhyIiwiViIsImZlIiwibWUiLCJ3IiwiU2UiLCJzciIsImdlIiwiaGUiLCJ5ZSIsIm9yIiwiamUiLCJEIiwidmUiLCJOZSIsImJlIiwiQWUiLCJ4ZSIsIkllIiwid2UiLCJFZSIsIkIiLCJqIiwiXyIsIl9lIiwiSXIiLCJYIiwiTSIsInplIiwiUyIsImciLCJVIiwiUCIsIm5yIiwiYXIiLCJpciIsImtlIiwiTCIsIlciLCJLIiwiRXIiLCJVZSIsInJlIiwiUnIiLCJwciIsIlByIiwiQ3IiLCJ6ciIsIk9yIiwiVHIiLCJrciIsIk8iLCJOIiwiZ3IiLCJtciIsImhyIiwiU3IiLCJMZSIsImsiLCJxIiwiUG8iLCJ6byJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBRyxDQUFBQyxPQUFJQSxFQUFFQSxFQUFFLGlCQUFlLENBQUMsSUFBRSxrQkFBaUJBLEVBQUVBLEVBQUUsZ0JBQWMsQ0FBQyxJQUFFLGlCQUFnQkEsRUFBRUEsRUFBRSxzQkFBb0IsQ0FBQyxJQUFFLHVCQUFzQkEsRUFBRUEsRUFBRSxlQUFhLENBQUMsSUFBRSxnQkFBZUEsRUFBRUEsRUFBRSxtQkFBaUIsRUFBRSxJQUFFLG9CQUFtQkEsRUFBRUEsRUFBRSxj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
