var ne = Object.defineProperty, oe = Object.defineProperties;
var ae = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty, le = Object.prototype.propertyIsEnumerable;
var U = (o, e, s) => e in o ? ne(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s, T = (o, e) => {
  for (var s in e || (e = {}))
    re.call(e, s) && U(o, s, e[s]);
  if (F)
    for (var s of F(e))
      le.call(e, s) && U(o, s, e[s]);
  return o;
}, W = (o, e) => oe(o, ae(e));
var Z = (o, e, s) => new Promise((r, t) => {
  var a = (n) => {
    try {
      i(s.next(n));
    } catch (g) {
      t(g);
    }
  }, l = (n) => {
    try {
      i(s.throw(n));
    } catch (g) {
      t(g);
    }
  }, i = (n) => n.done ? r(n.value) : Promise.resolve(n.value).then(a, l);
  i((s = s.apply(o, e)).next());
});
import { k as z, r as L, J as p, K as v, L as c, M as u, N as k, j as $, O as f, I as J, F as I, P as E, s as ie, Q as M, S as ue, R as ce, U as N, e as pe, V as de, w as ee, o as me, c as D, q as _e, W as fe, X as S, Y as A, T as ge, Z as ye } from "./vue-DUZbidQX.js";
import { u as ve, N as he, _ as be, a as te, b as ke, B as we, c as xe, d as Se, e as Ce, f as Te, z as $e, g as Le, h as Ie } from "./naive-ui-BGg8odC1.js";
import { z as q, P as R } from "./seroval-Br9mmj59.js";
import { v as B } from "./uuid-DPrBhu07.js";
import { p as Q, i as Me } from "./lodash-es-CqrSZx9w.js";
const ze = { class: "min-h-350px" }, He = { class: "flex items-center" }, Ne = /* @__PURE__ */ z({
  __name: "manage",
  setup(o) {
    const e = L(!1), s = [
      {
        tab: "过滤关键词",
        name: "keyword",
        components: N(() => import("./keywords-F7z_tQQG.js"))
      },
      {
        tab: "黑名单（公司）",
        name: "blacklist",
        components: N(() => import("./blacklist-BgdSVsau.js"))
      },
      {
        tab: "白名单（公司）",
        name: "whiteList",
        components: N(() => import("./white-list-CuneWcGs.js"))
      }
    ], r = L(), t = L("keyword"), a = ve(), l = () => Z(this, null, function* () {
      var i;
      for (const { saveAll: n, name: g } of ((i = r.value) == null ? void 0 : i.toSorted((m, w) => {
        const h = s.findIndex((_) => _.name === m.name), b = s.findIndex((_) => _.name === w.name);
        return h - b;
      })) || [])
        try {
          yield n();
        } catch (m) {
          t.value = g;
          return;
        }
      e.value = !1, a.success("全部设置保存成功。");
    });
    return (i, n) => {
      const g = he, m = be, w = te, h = Ce, b = ke, _ = we, y = xe, C = Se;
      return p(), v(I, null, [
        c(w, { trigger: "hover" }, {
          trigger: u(() => [
            c(m, {
              right: "25px",
              top: "40vh",
              shape: "square",
              onClick: n[0] || (n[0] = (d) => e.value = !0),
              class: "z-100"
            }, {
              default: u(() => [
                c(g, null, {
                  default: u(() => n[4] || (n[4] = [
                    k("div", { class: "i-bytesize-settings text-size-xl" }, null, -1)
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: u(() => [
            n[5] || (n[5] = $(" 打开设置面板 "))
          ]),
          _: 1
        }),
        c(C, {
          class: "w-1000px",
          show: f(e),
          "onUpdate:show": n[3] || (n[3] = (d) => J(e) ? e.value = d : null),
          preset: "card",
          title: "BOSS直聘-外包标注 设置界面"
        }, {
          footer: u(() => [
            k("div", He, [
              n[9] || (n[9] = k("div", { class: "flex-1" }, null, -1)),
              c(y, null, {
                default: u(() => [
                  c(_, {
                    type: "primary",
                    onClick: l
                  }, {
                    default: u(() => n[7] || (n[7] = [
                      $("保存设置")
                    ])),
                    _: 1
                  }),
                  c(_, {
                    onClick: n[2] || (n[2] = (d) => e.value = !1)
                  }, {
                    default: u(() => n[8] || (n[8] = [
                      $("取消")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          default: u(() => [
            c(b, {
              type: "line",
              animated: "",
              placement: "left",
              value: f(t),
              "onUpdate:value": n[1] || (n[1] = (d) => J(t) ? t.value = d : null)
            }, {
              default: u(() => [
                (p(), v(I, null, E(s, (d) => c(h, ie({
                  key: d.name,
                  ref_for: !0
                }, d, { "display-directive": "show:lazy" }), {
                  default: u(() => [
                    k("div", ze, [
                      (p(), M(ue, null, {
                        fallback: u(() => n[6] || (n[6] = [
                          $(" Loading... ")
                        ])),
                        default: u(() => [
                          (p(), M(ce(d.components), {
                            ref_for: !0,
                            ref_key: "allRef",
                            ref: r,
                            name: d.name
                          }, null, 8, ["name"]))
                        ]),
                        _: 2
                      }, 1024))
                    ])
                  ]),
                  _: 2
                }, 1040)), 64))
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Ae = [
  {
    type: "string",
    value: "解决方案"
  },
  {
    type: "string",
    value: "技术服务"
  },
  {
    type: "string",
    value: "驻场"
  },
  {
    type: "string",
    value: "出差"
  },
  {
    type: "string",
    value: "现场"
  },
  {
    type: "string",
    value: "派遣"
  },
  {
    type: "string",
    value: "国内领先"
  },
  {
    type: "string",
    value: "服务提供商"
  },
  {
    type: "string",
    value: "数字化转型"
  },
  {
    type: "string",
    value: "定制化系统"
  },
  {
    type: "string",
    value: "一站式服务"
  },
  {
    type: "string",
    value: "为客户提供"
  },
  {
    type: "string",
    value: "一体化"
  },
  {
    type: "string",
    value: "晋升途径"
  },
  {
    type: "string",
    value: "工作地点"
  },
  {
    type: "string",
    value: "外派"
  },
  {
    type: "regexp",
    value: "/\\b(?!(?:node\\b))w*odw*\\b/g",
    describe: "匹配od，但是忽略node"
  },
  {
    type: "string",
    value: "学信网"
  }
], qe = [
  "博朗软件",
  "中软国际",
  "东软集团",
  "博彦科技",
  "中电金信",
  "法本信息",
  "浙大网新",
  "奥博杰天",
  "浪潮",
  "软通动力",
  "福瑞博德",
  "信必优",
  "大展科技",
  "恒生电子",
  "日电卓越软件",
  "大连华信",
  "中和软件",
  "新致软件",
  "艾斯克雷",
  "海隆软件",
  "大宇宙信息",
  "晟峰软件",
  "富士通信息",
  "NTTDATA",
  "宏智科技",
  "神州数码通用软件",
  "凌志软件",
  "音泰思",
  "微创软件",
  "开目佰钧成",
  "浩鲸智能",
  "诚迈科技",
  "润和软件",
  "ST 新海",
  "慧博云通",
  "天源迪科",
  "上海思芮",
  "塔塔"
], Re = [], V = "1.1.4", j = {
  blacklist: qe.map((o) => ({
    value: o,
    id: B()
  })),
  whitelist: Re.map((o) => ({
    value: o,
    id: B()
  })),
  keywords: Ae.map((o) => W(T({}, o), {
    type: o.type,
    id: B()
  }))
}, Be = `blacklist_${V}`, je = `whitelist_${V}`, De = `keywords_${V}`;
var X, Y, G;
const H = pe({
  blacklist: q((X = localStorage.getItem(Be)) != null ? X : "") || j.blacklist,
  whitelist: q((Y = localStorage.getItem(je)) != null ? Y : "") || j.whitelist,
  keywords: q((G = localStorage.getItem(De)) != null ? G : "") || j.keywords
}), { blacklist: P, whitelist: K, keywords: O } = de(H);
ee(
  () => H,
  () => {
    localStorage.setItem("blacklist", R(P.value)), localStorage.setItem("whitelist", R(K.value)), localStorage.setItem("keywords", R(O.value));
  },
  { deep: !0 }
);
const at = (o) => {
  for (const e of o) {
    const s = Q(e, ["type", "value"]);
    O.value.some(
      (t) => Me(Q(t, ["type", "value"]), s)
    ) || O.value.push(e);
  }
}, rt = (o) => {
  for (const e of o)
    P.value.some(({ value: r }) => r === e.value) || P.value.push(e);
}, lt = (o) => {
  for (const e of o)
    K.value.some(({ value: r }) => r === e.value) || K.value.push(e);
};
class Pe {
  /**
   * 高亮区域
   *
   * @param {string} text
   * @param {(HighlightText | HighlightText[])} highlightText
   * @return {*}
   * @memberof Highlight
   */
  highlightArea(e, s) {
    const t = (Array.isArray(s) ? s : [s]).map((l) => this.queryTheHighlightedPosition(e, l)).flat(2), a = this.mergeLocations(t);
    return {
      result: this.render(e, a),
      optimizeLocations: a,
      locations: t
    };
  }
  render(e, s) {
    let r = "", t = 0;
    for (const a of s) {
      const { start: l, end: i } = a;
      t < l && (r += e.slice(t, l)), r += `<span style="color: red;">${e.slice(
        l,
        i
      )}</span>`, t = i;
    }
    return t < e.length && (r += e.slice(t)), r;
  }
  /**
   *
   * 高亮文本位置查询
   * @private
   * @param {string} text
   * @param {HighlightText} highlight
   * @return {*}
   * @memberof Highlight
   */
  queryTheHighlightedPosition(e, s) {
    const r = [], t = s instanceof RegExp ? s : new RegExp(s, "g");
    let a = t.exec(e);
    for (; a; ) {
      const l = a[0];
      if (r.push({
        start: a.index,
        end: a.index + l.length,
        text: l
      }), !t.flags.includes("g"))
        break;
      a = t.exec(e);
    }
    return r;
  }
  /**
   * 位置规则合并
   * 1. 处理规则如下，如果起始位置相同则则合并最大位置
   * 2. 如果元素的开始结束位置与其他成员的位置大小相邻或者在内则合并
   * @param {Location[]} locations
   * @return {*}
   * @memberof Highlight
   */
  mergeLocations(e) {
    const s = e.toSorted(
      (a, l) => a.start - l.start || a.end - l.end
    );
    if (s.length <= 1)
      return s;
    const r = [];
    let t = null;
    for (const a of s)
      t ? a.start <= t.end ? t.end = Math.max(t.end, a.end) : (r.push(t), t = T({}, a)) : t = T({}, a);
    return t && r.push(t), r;
  }
}
const Ke = new Pe();
function Oe(o) {
  return new Function(`return ${o}`)();
}
const Ve = () => {
  const o = 'a[ka="job-detail-company_custompage"]', e = ".info-primary h1", s = ".job-detail-company .job-sec-text", r = ".job-detail-section .job-sec-text", t = document.querySelector(o), a = document.querySelector(e), l = document.querySelector(s), i = document.querySelector(r), n = {
    // 公司名称
    company: {
      html: (t == null ? void 0 : t.innerHTML) || "",
      text: ((t == null ? void 0 : t.textContent) || "").trim(),
      el: t,
      class: o
    },
    // 职位名称
    jobTitle: {
      html: (a == null ? void 0 : a.innerHTML) || "",
      text: (a == null ? void 0 : a.textContent) || "",
      el: a,
      class: e
    },
    // 职位描述
    jobDesc: {
      html: (l == null ? void 0 : l.innerHTML) || "",
      text: (l == null ? void 0 : l.textContent) || "",
      el: l,
      class: s
    },
    // 公司描述
    companyDesc: {
      html: (i == null ? void 0 : i.innerHTML) || "",
      text: (i == null ? void 0 : i.textContent) || "",
      el: i,
      class: r
    }
  }, g = () => {
    Object.values(n).forEach((h) => {
      const { class: b } = h, _ = document.querySelector(b);
      _ && (_.innerHTML = h.html), m.value = { reason: /* @__PURE__ */ new Set(), grade: "blacklist" };
    });
  }, m = L({ reason: /* @__PURE__ */ new Set(), grade: "blacklist" }), w = () => {
    g();
    const { blacklist: h, whitelist: b, keywords: _ } = H;
    if (!b.some((y) => y.value === n.company.text)) {
      if (h.some((y) => y.value === n.company.text)) {
        if (!n.company.el)
          return;
        m.value.grade = "blacklist", m.value.reason.add(n.company.text), n.company.el.innerHTML = `<span style="color: red">${n.company.text}</span>`;
        return;
      }
      [n.jobTitle, n.companyDesc, n.jobDesc].forEach((y) => {
        const { locations: C, result: d } = Ke.highlightArea(
          y.text,
          // 需要判断类型来取
          _.map((x) => x.type === "regexp" ? Oe(x.value) : x.value)
        );
        !C.length || !y.el || (y.el.innerHTML = d, C.forEach((x) => {
          m.value.grade = "keyword", m.value.reason.add(`${x.text}`);
        }));
      });
    }
  };
  return me(() => {
    w();
  }), {
    run: w,
    result: m
  };
}, Fe = /* @__PURE__ */ z({
  __name: "btn",
  props: {
    grade: {}
  },
  setup(o) {
    const e = o, s = D(() => ({
      width: "auto",
      minWidth: "55px",
      color: e.grade === "probably" ? "#faad14" : "#ff4d4f",
      padding: "0 12px",
      background: "transparent",
      borderColor: "transparent"
    }));
    return (r, t) => (p(), v("a", {
      class: "btn",
      style: fe(f(s))
    }, [
      _e(r.$slots, "default")
    ], 4));
  }
}), Ue = { key: 0 }, We = { key: 1 }, Ze = { style: { whiteSpace: "pre" } }, Je = { key: 0 }, Qe = /* @__PURE__ */ z({
  __name: "results-display",
  props: {
    result: {}
  },
  setup(o) {
    const e = o, s = D(() => {
      const { reason: t, grade: a } = e.result;
      return a === "blacklist" ? !0 : t.size >= 3;
    }), r = D(() => {
      const { reason: t } = e.result;
      return t.size < 3 && s.value === !1;
    });
    return (t, a) => {
      const l = te;
      return f(s) || f(r) ? (p(), M(ge, {
        key: 0,
        to: ".btn-container"
      }, [
        c(l, { trigger: "hover" }, {
          trigger: u(() => [
            c(Fe, {
              grade: f(s) ? "determine" : "probably"
            }, {
              default: u(() => [
                f(s) ? (p(), v("span", Ue, "❌ 外包公司")) : S("", !0),
                f(r) ? (p(), v("span", We, "⚠️ 可能为外包公司")) : S("", !0),
                a[0] || (a[0] = k("span", null, "「悬浮查看详情」", -1))
              ]),
              _: 1
            }, 8, ["grade"])
          ]),
          default: u(() => [
            k("p", Ze, [
              t.result.grade === "blacklist" ? (p(), v("p", Je, "公司名称为外包：" + A(Array.from(t.result.reason)[0]), 1)) : S("", !0),
              t.result.grade === "keyword" ? (p(), v(I, { key: 1 }, [
                a[1] || (a[1] = k("p", null, "出现了以下关键词：", -1)),
                (p(!0), v(I, null, E(t.result.reason, (i, n) => (p(), v("p", { key: i }, A(n + 1) + ". 「" + A(i) + "」 ", 1))), 128))
              ], 64)) : S("", !0)
            ])
          ]),
          _: 1
        })
      ])) : S("", !0);
    };
  }
}), Xe = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [r, t] of e)
    s[r] = t;
  return s;
}, Ye = /* @__PURE__ */ Xe(Qe, [["__scopeId", "data-v-ad128997"]]), Ge = /* @__PURE__ */ z({
  __name: "App",
  setup(o) {
    const e = {
      common: {
        primaryColor: "#42b883"
      },
      Form: {
        feedbackHeightMedium: "0"
      }
    }, { result: s, run: r } = Ve();
    return ee(
      () => H,
      () => {
        r();
      },
      { deep: !0 }
    ), (t, a) => {
      const l = Ie, i = Te;
      return p(), M(i, {
        "inline-theme-disabled": "",
        "theme-overrides": e,
        locale: f($e),
        "date-locale": f(Le)
      }, {
        default: u(() => [
          c(l, null, {
            default: u(() => [
              c(Ne),
              c(Ye, { result: f(s) }, null, 8, ["result"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["locale", "date-locale"]);
    };
  }
}), se = document.createElement("div");
document.body.appendChild(se);
ye(Ge).mount(se);
export {
  rt as a,
  P as b,
  lt as c,
  O as k,
  at as u,
  K as w
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12ZmVSX2Y3YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS52dWUiLCIuLi8uLi9zcmMvc3RvcmUudHMiLCIuLi8uLi9zcmMvdXRpbHMvaGlnaGxpZ2h0LnRzIiwiLi4vLi4vc3JjL2hvb2tzL3VzZS1oaWdobGlnaHQudHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9yZXN1bHRzLWRpc3BsYXkvYnRuLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMtZGlzcGxheS9yZXN1bHRzLWRpc3BsYXkudnVlIiwiLi4vLi4vc3JjL0FwcC52dWUiLCIuLi8uLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3Qgc2hvd01vZGFsID0gcmVmKGZhbHNlKTtcblxuY29uc3QgdGFicyA9IFtcbiAge1xuICAgIHRhYjogJ+i/h+a7pOWFs+mUruivjScsXG4gICAgbmFtZTogJ2tleXdvcmQnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9rZXl3b3Jkcy52dWUnKSksXG4gIH0sXG4gIHtcbiAgICB0YWI6ICfpu5HlkI3ljZXvvIjlhazlj7jvvIknLFxuICAgIG5hbWU6ICdibGFja2xpc3QnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9ibGFja2xpc3QudnVlJykpLFxuICB9LFxuICB7XG4gICAgdGFiOiAn55m95ZCN5Y2V77yI5YWs5Y+477yJJyxcbiAgICBuYW1lOiAnd2hpdGVMaXN0JyxcbiAgICBjb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4vd2hpdGUtbGlzdC52dWUnKSksXG4gIH0sXG5dO1xuXG5jb25zdCBhbGxSZWYgPSByZWY8XG4gIHtcbiAgICBzYXZlQWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVtdXG4+KCk7XG5jb25zdCBhY3RpdmVUYWIgPSByZWYoJ2tleXdvcmQnKTtcbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5cbmNvbnN0IG9uU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgZm9yIChjb25zdCB7IHNhdmVBbGwsIG5hbWUgfSBvZiBhbGxSZWYudmFsdWU/LnRvU29ydGVkKCh4LCB5KSA9PiB7XG4gICAgY29uc3QgeEluZGV4ID0gdGFicy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0geC5uYW1lKTtcbiAgICBjb25zdCB5SW5kZXggPSB0YWJzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSB5Lm5hbWUpO1xuICAgIHJldHVybiB4SW5kZXggLSB5SW5kZXg7XG4gIH0pIHx8IFtdKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNhdmVBbGwoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFjdGl2ZVRhYi52YWx1ZSA9IG5hbWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNob3dNb2RhbC52YWx1ZSA9IGZhbHNlO1xuICBtZXNzYWdlLnN1Y2Nlc3MoYOWFqOmDqOiuvue9ruS/neWtmOaIkOWKn+OAgmApO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxuLXRvb2x0aXAgdHJpZ2dlcj1cImhvdmVyXCI+XG4gICAgPHRlbXBsYXRlICN0cmlnZ2VyPlxuICAgICAgPG4tZmxvYXQtYnV0dG9uXG4gICAgICAgIHJpZ2h0PVwiMjVweFwiXG4gICAgICAgIHRvcD1cIjQwdmhcIlxuICAgICAgICBzaGFwZT1cInNxdWFyZVwiXG4gICAgICAgIEBjbGljaz1cInNob3dNb2RhbCA9IHRydWVcIlxuICAgICAgICBjbGFzcz1cInotMTAwXCJcbiAgICAgID5cbiAgICAgICAgPG4taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaS1ieXRlc2l6ZS1zZXR0aW5ncyB0ZXh0LXNpemUteGxcIj48L2Rpdj5cbiAgICAgICAgPC9uLWljb24+XG4gICAgICA8L24tZmxvYXQtYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG4gICAg5omT5byA6K6+572u6Z2i5p2/XG4gIDwvbi10b29sdGlwPlxuXG4gIDxuLW1vZGFsXG4gICAgY2xhc3M9XCJ3LTEwMDBweFwiXG4gICAgdi1tb2RlbDpzaG93PVwic2hvd01vZGFsXCJcbiAgICBwcmVzZXQ9XCJjYXJkXCJcbiAgICB0aXRsZT1cIkJPU1Pnm7TogZgt5aSW5YyF5qCH5rOoIOiuvue9rueVjOmdolwiXG4gID5cbiAgICA8bi10YWJzIHR5cGU9XCJsaW5lXCIgYW5pbWF0ZWQgcGxhY2VtZW50PVwibGVmdFwiIHYtbW9kZWw6dmFsdWU9XCJhY3RpdmVUYWJcIj5cbiAgICAgIDxuLXRhYi1wYW5lXG4gICAgICAgIHYtZm9yPVwiaXRlbSBvZiB0YWJzXCJcbiAgICAgICAgOmtleT1cIml0ZW0ubmFtZVwiXG4gICAgICAgIHYtYmluZD1cIml0ZW1cIlxuICAgICAgICBkaXNwbGF5LWRpcmVjdGl2ZT1cInNob3c6bGF6eVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaW4taC0zNTBweFwiPlxuICAgICAgICAgIDxTdXNwZW5zZT5cbiAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgOmlzPVwiaXRlbS5jb21wb25lbnRzXCJcbiAgICAgICAgICAgICAgcmVmPVwiYWxsUmVmXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgPjwvY29tcG9uZW50PlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2ZhbGxiYWNrPiBMb2FkaW5nLi4uIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L24tdGFiLXBhbmU+XG4gICAgPC9uLXRhYnM+XG4gICAgPHRlbXBsYXRlICNmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPjwvZGl2PlxuICAgICAgICA8bi1zcGFjZT5cbiAgICAgICAgICA8bi1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvblNhdmVcIj7kv53lrZjorr7nva48L24tYnV0dG9uPlxuICAgICAgICAgIDxuLWJ1dHRvbiBAY2xpY2s9XCJzaG93TW9kYWwgPSBmYWxzZVwiPuWPlua2iDwvbi1idXR0b24+XG4gICAgICAgIDwvbi1zcGFjZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvbi1tb2RhbD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQga2V5d29yZHNEYXRhIGZyb20gJ0AvY29uc3RhbnQva2V5d29yZHMuanNvbic7XG5pbXBvcnQgYmxhY2tsaXN0RGF0YSBmcm9tICdAL2NvbnN0YW50L2JsYWNrbGlzdC5qc29uJztcbmltcG9ydCB3aGl0ZUxpc3REYXRhIGZyb20gJ0AvY29uc3RhbnQvd2hpdGUtbGlzdC5qc29uJztcbmltcG9ydCB7IHNlcmlhbGl6ZSwgZGVzZXJpYWxpemUgfSBmcm9tICdzZXJvdmFsJztcbmltcG9ydCB7IHY2IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsYWNrbGlzdCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdoaXRlbGlzdCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5d29yZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6ICdzdHJpbmcnIHwgJ3JlZ2V4cCc7XG4gIGRlc2NyaWJlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlIHtcbiAgYmxhY2tsaXN0OiBCbGFja2xpc3RbXTtcbiAgd2hpdGVsaXN0OiBXaGl0ZWxpc3RbXTtcbiAga2V5d29yZHM6IEtleXdvcmRbXTtcbn1cblxuY29uc3QgZGVmYXVsdFN0b3JlOiBTdG9yZSA9IHtcbiAgYmxhY2tsaXN0OiBibGFja2xpc3REYXRhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICB2YWx1ZTogaXRlbSxcbiAgICBpZDogdXVpZCgpLFxuICB9KSksXG4gIHdoaXRlbGlzdDogd2hpdGVMaXN0RGF0YS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgdmFsdWU6IGl0ZW0sXG4gICAgaWQ6IHV1aWQoKSxcbiAgfSkpLFxuICBrZXl3b3Jkczoga2V5d29yZHNEYXRhLm1hcCgoZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5mLFxuICAgICAgdHlwZTogZi50eXBlIGFzIEtleXdvcmRbJ3R5cGUnXSxcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgfTtcbiAgfSksXG59O1xuXG5leHBvcnQgY29uc3QgYmxhY2tsaXN0S2V5ID0gYGJsYWNrbGlzdF8ke3ZlcnNpb259YDtcbmV4cG9ydCBjb25zdCB3aGl0ZWxpc3RLZXkgPSBgd2hpdGVsaXN0XyR7dmVyc2lvbn1gO1xuZXhwb3J0IGNvbnN0IGtleXdvcmRzS2V5ID0gYGtleXdvcmRzXyR7dmVyc2lvbn1gO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSByZWFjdGl2ZTxTdG9yZT4oe1xuICBibGFja2xpc3Q6XG4gICAgZGVzZXJpYWxpemUobG9jYWxTdG9yYWdlLmdldEl0ZW0oYmxhY2tsaXN0S2V5KSA/PyAnJykgfHxcbiAgICBkZWZhdWx0U3RvcmUuYmxhY2tsaXN0LFxuICB3aGl0ZWxpc3Q6XG4gICAgZGVzZXJpYWxpemUobG9jYWxTdG9yYWdlLmdldEl0ZW0od2hpdGVsaXN0S2V5KSA/PyAnJykgfHxcbiAgICBkZWZhdWx0U3RvcmUud2hpdGVsaXN0LFxuICBrZXl3b3JkczpcbiAgICBkZXNlcmlhbGl6ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXl3b3Jkc0tleSkgPz8gJycpIHx8XG4gICAgZGVmYXVsdFN0b3JlLmtleXdvcmRzLFxufSk7XG5cbmNvbnN0IHsgYmxhY2tsaXN0LCB3aGl0ZWxpc3QsIGtleXdvcmRzIH0gPSB0b1JlZnMoc3RvcmUpO1xuXG5leHBvcnQgeyBibGFja2xpc3QsIHdoaXRlbGlzdCwga2V5d29yZHMgfTtcblxuLy8g6Ieq5Yqo5L+d5a2Y5Yiw5pys5ZywXG53YXRjaChcbiAgKCkgPT4gc3RvcmUsXG4gICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmxhY2tsaXN0Jywgc2VyaWFsaXplKGJsYWNrbGlzdC52YWx1ZSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aGl0ZWxpc3QnLCBzZXJpYWxpemUod2hpdGVsaXN0LnZhbHVlKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tleXdvcmRzJywgc2VyaWFsaXplKGtleXdvcmRzLnZhbHVlKSk7XG4gIH0sXG4gIHsgZGVlcDogdHJ1ZSB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUtleXdvcmRzID0gKG5ld0RhdGE6IEtleXdvcmRbXSkgPT4ge1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbmV3RGF0YSkge1xuICAgIGNvbnN0IGRpZmZ2YWx1ZSA9IF8ucGljayhpdGVtLCBbJ3R5cGUnLCAndmFsdWUnXSk7XG4gICAgY29uc3QgcmVzdWx0ID0ga2V5d29yZHMudmFsdWUuc29tZSgoaXRlbSkgPT5cbiAgICAgIF8uaXNFcXVhbChfLnBpY2soaXRlbSwgWyd0eXBlJywgJ3ZhbHVlJ10pLCBkaWZmdmFsdWUpLFxuICAgICk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGtleXdvcmRzLnZhbHVlLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQmxhY2tsaXN0ID0gKG5ld0RhdGE6IEJsYWNrbGlzdFtdKSA9PiB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBuZXdEYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYmxhY2tsaXN0LnZhbHVlLnNvbWUoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGl0ZW0udmFsdWUpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBibGFja2xpc3QudmFsdWUucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVXaGl0ZWxpc3QgPSAobmV3RGF0YTogV2hpdGVsaXN0W10pID0+IHtcbiAgZm9yIChjb25zdCBpdGVtIG9mIG5ld0RhdGEpIHtcbiAgICBjb25zdCByZXN1bHQgPSB3aGl0ZWxpc3QudmFsdWUuc29tZSgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gaXRlbS52YWx1ZSk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHdoaXRlbGlzdC52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgSGlnaGxpZ2h0VGV4dCA9IHN0cmluZyB8IFJlZ0V4cDtcblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCB7XG4gIC8qKlxuICAgKiDpq5jkuq7ljLrln59cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHBhcmFtIHsoSGlnaGxpZ2h0VGV4dCB8IEhpZ2hsaWdodFRleHRbXSl9IGhpZ2hsaWdodFRleHRcbiAgICogQHJldHVybiB7Kn1cbiAgICogQG1lbWJlcm9mIEhpZ2hsaWdodFxuICAgKi9cbiAgaGlnaGxpZ2h0QXJlYSh0ZXh0OiBzdHJpbmcsIGhpZ2hsaWdodFRleHQ6IEhpZ2hsaWdodFRleHQgfCBIaWdobGlnaHRUZXh0W10pIHtcbiAgICBjb25zdCBhcnIgPSBBcnJheS5pc0FycmF5KGhpZ2hsaWdodFRleHQpID8gaGlnaGxpZ2h0VGV4dCA6IFtoaWdobGlnaHRUZXh0XTtcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBhcnJcbiAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlUaGVIaWdobGlnaHRlZFBvc2l0aW9uKHRleHQsIGl0ZW0pO1xuICAgICAgfSlcbiAgICAgIC5mbGF0KDIpO1xuXG4gICAgY29uc3Qgb3B0aW1pemVMb2NhdGlvbnMgPSB0aGlzLm1lcmdlTG9jYXRpb25zKGxvY2F0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogdGhpcy5yZW5kZXIodGV4dCwgb3B0aW1pemVMb2NhdGlvbnMpLFxuICAgICAgb3B0aW1pemVMb2NhdGlvbnM6IG9wdGltaXplTG9jYXRpb25zLFxuICAgICAgbG9jYXRpb25zLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcih0ZXh0OiBzdHJpbmcsIHJhbmdlczogTG9jYXRpb25bXSkge1xuICAgIGxldCBoaWdobGlnaHRlZFRleHQgPSAnJztcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHJhbmdlO1xuXG4gICAgICAvLyDmt7vliqDpnZ7pq5jkuq7pg6jliIZcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCBzdGFydCkge1xuICAgICAgICBoaWdobGlnaHRlZFRleHQgKz0gdGV4dC5zbGljZShjdXJyZW50SW5kZXgsIHN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgLy8g5re75Yqg6auY5Lqu6YOo5YiGXG4gICAgICBoaWdobGlnaHRlZFRleHQgKz0gYDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZDtcIj4ke3RleHQuc2xpY2UoXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQsXG4gICAgICApfTwvc3Bhbj5gO1xuICAgICAgY3VycmVudEluZGV4ID0gZW5kOyAvLyDmm7TmlrDlvZPliY3ntKLlvJVcbiAgICB9XG5cbiAgICAvLyDmt7vliqDliankvZnmnKrpq5jkuq7nmoTmlofmnKxcbiAgICBpZiAoY3VycmVudEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgIGhpZ2hsaWdodGVkVGV4dCArPSB0ZXh0LnNsaWNlKGN1cnJlbnRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiDpq5jkuq7mlofmnKzkvY3nva7mn6Xor6JcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHBhcmFtIHtIaWdobGlnaHRUZXh0fSBoaWdobGlnaHRcbiAgICogQHJldHVybiB7Kn1cbiAgICogQG1lbWJlcm9mIEhpZ2hsaWdodFxuICAgKi9cbiAgcHJpdmF0ZSBxdWVyeVRoZUhpZ2hsaWdodGVkUG9zaXRpb24odGV4dDogc3RyaW5nLCBoaWdobGlnaHQ6IEhpZ2hsaWdodFRleHQpIHtcbiAgICBjb25zdCBsb2NhdGlvblJlY29yZDogKExvY2F0aW9uICYgeyB0ZXh0OiBzdHJpbmcgfSlbXSA9IFtdO1xuICAgIGNvbnN0IHJlZyA9XG4gICAgICBoaWdobGlnaHQgaW5zdGFuY2VvZiBSZWdFeHAgPyBoaWdobGlnaHQgOiBuZXcgUmVnRXhwKGhpZ2hsaWdodCwgJ2cnKTtcblxuICAgIGxldCByZXN1bHQgPSByZWcuZXhlYyh0ZXh0KTtcblxuICAgIHdoaWxlIChyZXN1bHQpIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodFRleHQgPSByZXN1bHRbMF07XG4gICAgICBsb2NhdGlvblJlY29yZC5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHJlc3VsdC5pbmRleCxcbiAgICAgICAgZW5kOiByZXN1bHQuaW5kZXggKyBoaWdobGlnaHRUZXh0Lmxlbmd0aCxcbiAgICAgICAgdGV4dDogaGlnaGxpZ2h0VGV4dCxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZWcuZmxhZ3MuaW5jbHVkZXMoJ2cnKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHJlZy5leGVjKHRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb25SZWNvcmQ7XG4gIH1cblxuICAvKipcbiAgICog5L2N572u6KeE5YiZ5ZCI5bm2XG4gICAqIDEuIOWkhOeQhuinhOWImeWmguS4i++8jOWmguaenOi1t+Wni+S9jee9ruebuOWQjOWImeWImeWQiOW5tuacgOWkp+S9jee9rlxuICAgKiAyLiDlpoLmnpzlhYPntKDnmoTlvIDlp4vnu5PmnZ/kvY3nva7kuI7lhbbku5bmiJDlkZjnmoTkvY3nva7lpKflsI/nm7jpgrvmiJbogIXlnKjlhoXliJnlkIjlubZcbiAgICogQHBhcmFtIHtMb2NhdGlvbltdfSBsb2NhdGlvbnNcbiAgICogQHJldHVybiB7Kn1cbiAgICogQG1lbWJlcm9mIEhpZ2hsaWdodFxuICAgKi9cbiAgbWVyZ2VMb2NhdGlvbnMobG9jYXRpb25zOiBMb2NhdGlvbltdKSB7XG4gICAgLy8g5YWI5oyJIHN0YXJ0IOaOkuW6j++8jOWmguaenCBzdGFydCDnm7jlkIzmjIkgZW5kIOaOkuW6j1xuICAgIGNvbnN0IHJhbmdlcyA9IGxvY2F0aW9ucy50b1NvcnRlZChcbiAgICAgIChhLCBiKSA9PiBhLnN0YXJ0IC0gYi5zdGFydCB8fCBhLmVuZCAtIGIuZW5kLFxuICAgICk7XG4gICAgLy8g5aaC5p6c6IyD5Zu05pWw57uE5Li656m65oiW5Y+q5pyJ5LiA5Liq6IyD5Zu077yM55u05o6l6L+U5ZueXG4gICAgaWYgKHJhbmdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIHJhbmdlcztcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQ6IExvY2F0aW9uW10gPSBbXTtcbiAgICBsZXQgY3VycmVudDogbnVsbCB8IExvY2F0aW9uID0gbnVsbDtcblxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XG4gICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW56ys5LiA5Liq6IyD5Zu0XG4gICAgICAgIGN1cnJlbnQgPSB7IC4uLnJhbmdlIH07XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlLnN0YXJ0IDw9IGN1cnJlbnQuZW5kKSB7XG4gICAgICAgIC8vIOWmguaenOW9k+WJjeiMg+WbtOS4juaWsOiMg+WbtOmHjeWPoOaIluebuOmCu++8jOWQiOW5tlxuICAgICAgICBjdXJyZW50LmVuZCA9IE1hdGgubWF4KGN1cnJlbnQuZW5kLCByYW5nZS5lbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5aaC5p6c5LiN6YeN5Y+g77yM5L+d5a2Y5b2T5YmN6IyD5Zu05bm25pu05paw5Li65paw6IyD5Zu0XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0geyAuLi5yYW5nZSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOa3u+WKoOacgOWQjuS4gOS4quiMg+WbtFxuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHQgPSBuZXcgSGlnaGxpZ2h0KCk7XG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL3V0aWxzL2hpZ2hsaWdodCc7XG5cbmNvbnN0IGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQoKTtcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrIHtcbiAgcmVhc29uOiBTZXQ8c3RyaW5nPjtcbiAgZ3JhZGU6ICdrZXl3b3JkJyB8ICdibGFja2xpc3QnO1xufVxuXG5mdW5jdGlvbiBmcm9tUmVnZXhwKHZhbHVlOiBzdHJpbmcpOiBSZWdFeHAge1xuICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7dmFsdWV9YCk7XG4gIHJldHVybiBmbigpO1xufVxuXG5leHBvcnQgY29uc3QgdXNlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBjb21wYW55Q2xhc3MgPSBgYVtrYT1cImpvYi1kZXRhaWwtY29tcGFueV9jdXN0b21wYWdlXCJdYDtcblxuICBjb25zdCBqb2JUaXRsZUNsYXNzID0gJy5pbmZvLXByaW1hcnkgaDEnO1xuXG4gIGNvbnN0IGpvYkRlc2NDbGFzcyA9ICcuam9iLWRldGFpbC1jb21wYW55IC5qb2Itc2VjLXRleHQnO1xuXG4gIGNvbnN0IGNvbXBhbnlEZXNjQ2xhc3MgPSAnLmpvYi1kZXRhaWwtc2VjdGlvbiAuam9iLXNlYy10ZXh0JztcblxuICBjb25zdCBjb21wYW55RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29tcGFueUNsYXNzKTtcbiAgY29uc3Qgam9iVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JUaXRsZUNsYXNzKTtcbiAgY29uc3Qgam9iRGVzY0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYkRlc2NDbGFzcyk7XG4gIGNvbnN0IGNvbXBhbnlEZXNjRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29tcGFueURlc2NDbGFzcyk7XG5cbiAgY29uc3QgcnVsZXMgPSB7XG4gICAgLy8g5YWs5Y+45ZCN56ewXG4gICAgY29tcGFueToge1xuICAgICAgaHRtbDogY29tcGFueUVsZW1lbnQ/LmlubmVySFRNTCB8fCAnJyxcbiAgICAgIHRleHQ6IChjb21wYW55RWxlbWVudD8udGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKSxcbiAgICAgIGVsOiBjb21wYW55RWxlbWVudCxcbiAgICAgIGNsYXNzOiBjb21wYW55Q2xhc3MsXG4gICAgfSxcbiAgICAvLyDogYzkvY3lkI3np7BcbiAgICBqb2JUaXRsZToge1xuICAgICAgaHRtbDogam9iVGl0bGVFbGVtZW50Py5pbm5lckhUTUwgfHwgJycsXG4gICAgICB0ZXh0OiBqb2JUaXRsZUVsZW1lbnQ/LnRleHRDb250ZW50IHx8ICcnLFxuICAgICAgZWw6IGpvYlRpdGxlRWxlbWVudCxcbiAgICAgIGNsYXNzOiBqb2JUaXRsZUNsYXNzLFxuICAgIH0sXG4gICAgLy8g6IGM5L2N5o+P6L+wXG4gICAgam9iRGVzYzoge1xuICAgICAgaHRtbDogam9iRGVzY0VsZW1lbnQ/LmlubmVySFRNTCB8fCAnJyxcbiAgICAgIHRleHQ6IGpvYkRlc2NFbGVtZW50Py50ZXh0Q29udGVudCB8fCAnJyxcbiAgICAgIGVsOiBqb2JEZXNjRWxlbWVudCxcbiAgICAgIGNsYXNzOiBqb2JEZXNjQ2xhc3MsXG4gICAgfSxcbiAgICAvLyDlhazlj7jmj4/ov7BcbiAgICBjb21wYW55RGVzYzoge1xuICAgICAgaHRtbDogY29tcGFueURlc2NFbGVtZW50Py5pbm5lckhUTUwgfHwgJycsXG4gICAgICB0ZXh0OiBjb21wYW55RGVzY0VsZW1lbnQ/LnRleHRDb250ZW50IHx8ICcnLFxuICAgICAgZWw6IGNvbXBhbnlEZXNjRWxlbWVudCxcbiAgICAgIGNsYXNzOiBjb21wYW55RGVzY0NsYXNzLFxuICAgIH0sXG4gIH07XG5cbiAgLy8g6L+Y5Y6f5LmL5YmN55qE5qC35byPXG4gIGNvbnN0IHJlc3RvcmUgPSAoKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhydWxlcykuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lIH0gPSBydWxlO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcnVsZS5odG1sO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnZhbHVlID0geyByZWFzb246IG5ldyBTZXQoKSwgZ3JhZGU6ICdibGFja2xpc3QnIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0gcmVmPE1hcms+KHsgcmVhc29uOiBuZXcgU2V0KCksIGdyYWRlOiAnYmxhY2tsaXN0JyB9KTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgcmVzdG9yZSgpO1xuICAgIGNvbnN0IHsgYmxhY2tsaXN0LCB3aGl0ZWxpc3QsIGtleXdvcmRzIH0gPSBzdG9yZTtcbiAgICAvLyDlpoLmnpznmb3lkI3ljZXnm7TmjqXot7Pov4dcbiAgICBpZiAod2hpdGVsaXN0LnNvbWUoKGYpID0+IGYudmFsdWUgPT09IHJ1bGVzLmNvbXBhbnkudGV4dCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5aaC5p6c6buR5ZCN5Y2V55u05o6l5qCH6K6w5Ye65p2lXG4gICAgaWYgKGJsYWNrbGlzdC5zb21lKChmKSA9PiBmLnZhbHVlID09PSBydWxlcy5jb21wYW55LnRleHQpKSB7XG4gICAgICBpZiAoIXJ1bGVzLmNvbXBhbnkuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnZhbHVlLmdyYWRlID0gJ2JsYWNrbGlzdCc7XG5cbiAgICAgIHJlc3VsdC52YWx1ZS5yZWFzb24uYWRkKHJ1bGVzLmNvbXBhbnkudGV4dCk7XG5cbiAgICAgIHJ1bGVzLmNvbXBhbnkuZWwuaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPiR7cnVsZXMuY29tcGFueS50ZXh0fTwvc3Bhbj5gO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFtydWxlcy5qb2JUaXRsZSwgcnVsZXMuY29tcGFueURlc2MsIHJ1bGVzLmpvYkRlc2NdLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHsgbG9jYXRpb25zLCByZXN1bHQ6IGh0bWwgfSA9IGhpZ2hsaWdodC5oaWdobGlnaHRBcmVhKFxuICAgICAgICBydWxlLnRleHQsXG4gICAgICAgIC8vIOmcgOimgeWIpOaWreexu+Wei+adpeWPllxuICAgICAgICBrZXl3b3Jkcy5tYXAoKGYpID0+IHtcbiAgICAgICAgICBpZiAoZi50eXBlID09PSAncmVnZXhwJykge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21SZWdleHAoZi52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmLnZhbHVlO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgICBpZiAoIWxvY2F0aW9ucy5sZW5ndGggfHwgIXJ1bGUuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcnVsZS5lbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgbG9jYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgcmVzdWx0LnZhbHVlLmdyYWRlID0gJ2tleXdvcmQnO1xuICAgICAgICByZXN1bHQudmFsdWUucmVhc29uLmFkZChgJHtpdGVtLnRleHR9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHJ1bigpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJ1bixcbiAgICByZXN1bHQsXG4gIH07XG59O1xuIiwiPHRlbXBsYXRlPlxuICA8YSBjbGFzcz1cImJ0blwiIDpzdHlsZT1cInN0eWxlXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHR5cGUgeyBTdHlsZVZhbHVlIH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGdyYWRlOiAnZGV0ZXJtaW5lJyB8ICdwcm9iYWJseSc7XG59PigpO1xuXG5jb25zdCBzdHlsZSA9IGNvbXB1dGVkPFN0eWxlVmFsdWU+KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIG1pbldpZHRoOiAnNTVweCcsXG4gICAgY29sb3I6IHByb3BzLmdyYWRlID09PSAncHJvYmFibHknID8gJyNmYWFkMTQnIDogJyNmZjRkNGYnLFxuICAgIHBhZGRpbmc6ICcwIDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIH07XG59KTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8dGVsZXBvcnQgdG89XCIuYnRuLWNvbnRhaW5lclwiIHYtaWY9XCJkZXRlcm1pbmUgfHwgcHJvYmFibHlcIj5cbiAgICA8bi10b29sdGlwIHRyaWdnZXI9XCJob3ZlclwiPlxuICAgICAgPHRlbXBsYXRlICN0cmlnZ2VyPlxuICAgICAgICA8QnRuIDpncmFkZT1cImRldGVybWluZSA/ICdkZXRlcm1pbmUnIDogJ3Byb2JhYmx5J1wiPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJkZXRlcm1pbmVcIj7inYwg5aSW5YyF5YWs5Y+4PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJwcm9iYWJseVwiPuKaoO+4jyDlj6/og73kuLrlpJbljIXlhazlj7g8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+44CM5oKs5rWu5p+l55yL6K+m5oOF44CNPC9zcGFuPlxuICAgICAgICA8L0J0bj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8cCA6c3R5bGU9XCJ7IHdoaXRlU3BhY2U6ICdwcmUnIH1cIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyZXN1bHQuZ3JhZGUgPT09ICdibGFja2xpc3QnXCI+XG4gICAgICAgICAgPHA+5YWs5Y+45ZCN56ew5Li65aSW5YyF77yae3sgQXJyYXkuZnJvbShyZXN1bHQucmVhc29uKVswXSB9fTwvcD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyZXN1bHQuZ3JhZGUgPT09ICdrZXl3b3JkJ1wiPlxuICAgICAgICAgIDxwPuWHuueOsOS6huS7peS4i+WFs+mUruivje+8mjwvcD5cbiAgICAgICAgICA8cCB2LWZvcj1cIihpdGVtLCBpbmRleCkgb2YgcmVzdWx0LnJlYXNvblwiIDprZXk9XCJpdGVtXCI+XG4gICAgICAgICAgICB7eyBpbmRleCArIDEgfX0uIOOAjHt7IGl0ZW0gfX3jgI1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3A+XG4gICAgPC9uLXRvb2x0aXA+XG4gIDwvdGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdHlwZSBNYXJrIH0gZnJvbSAnQC9ob29rcy91c2UtaGlnaGxpZ2h0JztcbmltcG9ydCBCdG4gZnJvbSAnLi9idG4udnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHJlc3VsdDogTWFyaztcbn0+KCk7XG5cbi8vIOehruWumuS4uuWkluWMheWFrOWPuFxuY29uc3QgZGV0ZXJtaW5lID0gY29tcHV0ZWQoKCkgPT4ge1xuICBjb25zdCB7IHJlYXNvbiwgZ3JhZGUgfSA9IHByb3BzLnJlc3VsdDtcbiAgaWYgKGdyYWRlID09PSAnYmxhY2tsaXN0Jykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZWFzb24uc2l6ZSA+PSAzO1xufSk7XG5cbi8vIOWPr+iDveS4uuWkluWMheWFrOWPuFxuY29uc3QgcHJvYmFibHkgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGNvbnN0IHsgcmVhc29uIH0gPSBwcm9wcy5yZXN1bHQ7XG4gIHJldHVybiByZWFzb24uc2l6ZSA8IDMgJiYgZGV0ZXJtaW5lLnZhbHVlID09PSBmYWxzZTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5wLFxuZGl2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgdHlwZSB7IEdsb2JhbFRoZW1lT3ZlcnJpZGVzIH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IG1hbmFnZSBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS52dWUnO1xuaW1wb3J0IHsgZGF0ZVpoQ04sIHpoQ04gfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQgeyB1c2VIaWdobGlnaHQgfSBmcm9tICcuL2hvb2tzL3VzZS1oaWdobGlnaHQnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBSZXN1bHRzRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvcmVzdWx0cy1kaXNwbGF5L3Jlc3VsdHMtZGlzcGxheS52dWUnO1xuXG5jb25zdCB0aGVtZU92ZXJyaWRlczogR2xvYmFsVGhlbWVPdmVycmlkZXMgPSB7XG4gIGNvbW1vbjoge1xuICAgIHByaW1hcnlDb2xvcjogJyM0MmI4ODMnLFxuICB9LFxuICBGb3JtOiB7XG4gICAgZmVlZGJhY2tIZWlnaHRNZWRpdW06ICcwJyxcbiAgfSxcbn07XG5cbmNvbnN0IHsgcmVzdWx0LCBydW4gfSA9IHVzZUhpZ2hsaWdodCgpO1xuXG53YXRjaChcbiAgKCkgPT4gc3RvcmUsXG4gICgpID0+IHtcbiAgICBydW4oKTtcbiAgfSxcbiAgeyBkZWVwOiB0cnVlIH0sXG4pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPG4tY29uZmlnLXByb3ZpZGVyXG4gICAgaW5saW5lLXRoZW1lLWRpc2FibGVkXG4gICAgOnRoZW1lLW92ZXJyaWRlcz1cInRoZW1lT3ZlcnJpZGVzXCJcbiAgICA6bG9jYWxlPVwiemhDTlwiXG4gICAgOmRhdGUtbG9jYWxlPVwiZGF0ZVpoQ05cIlxuICA+XG4gICAgPG4tbWVzc2FnZS1wcm92aWRlcj5cbiAgICAgIDxtYW5hZ2U+PC9tYW5hZ2U+XG4gICAgICA8UmVzdWx0c0Rpc3BsYXkgOnJlc3VsdD1cInJlc3VsdFwiPjwvUmVzdWx0c0Rpc3BsYXk+XG4gICAgPC9uLW1lc3NhZ2UtcHJvdmlkZXI+XG4gIDwvbi1jb25maWctcHJvdmlkZXI+XG48L3RlbXBsYXRlPlxuXG48IS0tIDxzdHlsZT5cbi5qb2ItYm9keS13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjwvc3R5bGU+IC0tPlxuIiwiaW1wb3J0IFwidmlydHVhbDp1bm8uY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAudnVlXCI7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KGRpdik7XG4iXSwibmFtZXMiOlsic2hvd01vZGFsIiwicmVmIiwidGFicyIsImRlZmluZUFzeW5jQ29tcG9uZW50IiwiYWxsUmVmIiwiYWN0aXZlVGFiIiwibWVzc2FnZSIsInVzZU1lc3NhZ2UiLCJvblNhdmUiLCJfX2FzeW5jIiwic2F2ZUFsbCIsIm5hbWUiLCJfYSIsIngiLCJ5IiwieEluZGV4IiwiZiIsInlJbmRleCIsImUiLCJkZWZhdWx0U3RvcmUiLCJibGFja2xpc3REYXRhIiwiaXRlbSIsInV1aWQiLCJ3aGl0ZUxpc3REYXRhIiwia2V5d29yZHNEYXRhIiwiX19zcHJlYWRQcm9wcyIsIl9fc3ByZWFkVmFsdWVzIiwiYmxhY2tsaXN0S2V5IiwidmVyc2lvbiIsIndoaXRlbGlzdEtleSIsImtleXdvcmRzS2V5Iiwic3RvcmUiLCJyZWFjdGl2ZSIsImRlc2VyaWFsaXplIiwiX2IiLCJfYyIsImJsYWNrbGlzdCIsIndoaXRlbGlzdCIsImtleXdvcmRzIiwidG9SZWZzIiwid2F0Y2giLCJzZXJpYWxpemUiLCJ1cGRhdGVLZXl3b3JkcyIsIm5ld0RhdGEiLCJkaWZmdmFsdWUiLCJfLnBpY2siLCJfLmlzRXF1YWwiLCJ1cGRhdGVCbGFja2xpc3QiLCJ2YWx1ZSIsInVwZGF0ZVdoaXRlbGlzdCIsIkhpZ2hsaWdodCIsInRleHQiLCJoaWdobGlnaHRUZXh0IiwibG9jYXRpb25zIiwib3B0aW1pemVMb2NhdGlvbnMiLCJyYW5nZXMiLCJoaWdobGlnaHRlZFRleHQiLCJjdXJyZW50SW5kZXgiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiaGlnaGxpZ2h0IiwibG9jYXRpb25SZWNvcmQiLCJyZWciLCJyZXN1bHQiLCJiIiwiY3VycmVudCIsImZyb21SZWdleHAiLCJ1c2VIaWdobGlnaHQiLCJjb21wYW55Q2xhc3MiLCJqb2JUaXRsZUNsYXNzIiwiam9iRGVzY0NsYXNzIiwiY29tcGFueURlc2NDbGFzcyIsImNvbXBhbnlFbGVtZW50Iiwiam9iVGl0bGVFbGVtZW50Iiwiam9iRGVzY0VsZW1lbnQiLCJjb21wYW55RGVzY0VsZW1lbnQiLCJydWxlcyIsInJlc3RvcmUiLCJydWxlIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsInJ1biIsImh0bWwiLCJvbk1vdW50ZWQiLCJwcm9wcyIsIl9fcHJvcHMiLCJzdHlsZSIsImNvbXB1dGVkIiwiZGV0ZXJtaW5lIiwicmVhc29uIiwiZ3JhZGUiLCJwcm9iYWJseSIsInRoZW1lT3ZlcnJpZGVzIiwiZGl2IiwiY3JlYXRlQXBwIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxVQUFBQSxJQUFZQyxFQUFJLEVBQUssR0FFckJDLElBQU87QUFBQSxNQUNYO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixZQUFZQyxFQUFxQixNQUFNLE9BQU8sd0JBQWdCLENBQUM7QUFBQSxNQUNqRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLFlBQVlBLEVBQXFCLE1BQU0sT0FBTyx5QkFBaUIsQ0FBQztBQUFBLE1BQ2xFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sWUFBWUEsRUFBcUIsTUFBTSxPQUFPLDBCQUFrQixDQUFDO0FBQUEsTUFBQTtBQUFBLElBRXJFLEdBRU1DLElBQVNILEVBS2IsR0FDSUksSUFBWUosRUFBSSxTQUFTLEdBQ3pCSyxJQUFVQyxHQUFXLEdBRXJCQyxJQUFTLE1BQVlDLEVBQUE7O0FBQ2QsaUJBQUEsRUFBRSxTQUFBQyxHQUFTLE1BQUFDLFNBQVVDLElBQUFSLEVBQU8sVUFBUCxnQkFBQVEsRUFBYyxTQUFTLENBQUNDLEdBQUdDLE1BQU07QUFDekQsY0FBQUMsSUFBU2IsRUFBSyxVQUFVLENBQUNjLE1BQU1BLEVBQUUsU0FBU0gsRUFBRSxJQUFJLEdBQ2hESSxJQUFTZixFQUFLLFVBQVUsQ0FB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
