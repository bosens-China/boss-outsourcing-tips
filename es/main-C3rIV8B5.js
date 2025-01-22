var se = Object.defineProperty;
var F = Object.getOwnPropertySymbols;
var ne = Object.prototype.hasOwnProperty, oe = Object.prototype.propertyIsEnumerable;
var U = (a, e, s) => e in a ? se(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s, H = (a, e) => {
  for (var s in e || (e = {}))
    ne.call(e, s) && U(a, s, e[s]);
  if (F)
    for (var s of F(e))
      oe.call(e, s) && U(a, s, e[s]);
  return a;
};
var W = (a, e, s) => new Promise((r, t) => {
  var o = (n) => {
    try {
      c(s.next(n));
    } catch (g) {
      t(g);
    }
  }, l = (n) => {
    try {
      c(s.throw(n));
    } catch (g) {
      t(g);
    }
  }, c = (n) => n.done ? r(n.value) : Promise.resolve(n.value).then(o, l);
  c((s = s.apply(a, e)).next());
});
import { k as I, r as T, J as d, K as v, L as u, M as i, N as b, j as C, O as f, I as Z, F as $, P as G, s as ae, Q as L, S as re, R as le, U as N, e as ce, V as ie, w as E, o as ue, c as D, q as de, W as pe, X as x, Y as A, T as me, Z as _e } from "./vue-DUZbidQX.js";
import { u as fe, N as ge, _ as ye, a as ee, b as ve, B as he, c as ke, d as be, e as we, f as xe, z as Se, g as Ce, h as Te } from "./naive-ui-Ceukqjr2.js";
import { z as q, P as R } from "./seroval-Br9mmj59.js";
import { v as B } from "./uuid-DPrBhu07.js";
import { p as J, i as $e } from "./lodash-es-CqrSZx9w.js";
const Le = { class: "min-h-350px" }, Ie = { class: "flex items-center" }, Me = /* @__PURE__ */ I({
  __name: "manage",
  setup(a) {
    const e = T(!1), s = [
      {
        tab: "过滤关键词",
        name: "keyword",
        components: N(() => import("./keywords-CPuOz6dd.js"))
      },
      {
        tab: "黑名单（公司）",
        name: "blacklist",
        components: N(() => import("./blacklist-x9Qj_g1v.js"))
      },
      {
        tab: "白名单（公司）",
        name: "whiteList",
        components: N(() => import("./white-list-Dw4vF4nA.js"))
      }
    ], r = T(), t = T("keyword"), o = fe(), l = () => W(this, null, function* () {
      var c;
      for (const { saveAll: n, name: g } of ((c = r.value) == null ? void 0 : c.toSorted((m, w) => {
        const h = s.findIndex((_) => _.name === m.name), k = s.findIndex((_) => _.name === w.name);
        return h - k;
      })) || [])
        try {
          yield n();
        } catch (m) {
          t.value = g;
          return;
        }
      e.value = !1, o.success("保存全部设置成功。");
    });
    return (c, n) => {
      const g = ge, m = ye, w = ee, h = we, k = ve, _ = he, y = ke, S = be;
      return d(), v($, null, [
        u(w, { trigger: "hover" }, {
          trigger: i(() => [
            u(m, {
              right: "25px",
              top: "40vh",
              shape: "square",
              onClick: n[0] || (n[0] = (p) => e.value = !0),
              class: "z-100"
            }, {
              default: i(() => [
                u(g, null, {
                  default: i(() => n[4] || (n[4] = [
                    b("div", { class: "i-bytesize-settings text-size-xl" }, null, -1)
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          default: i(() => [
            n[5] || (n[5] = C(" 打开设置面板 "))
          ]),
          _: 1
        }),
        u(S, {
          class: "w-1000px",
          show: f(e),
          "onUpdate:show": n[3] || (n[3] = (p) => Z(e) ? e.value = p : null),
          preset: "card",
          title: "BOSS直聘-外包标注 设置界面"
        }, {
          footer: i(() => [
            b("div", Ie, [
              n[9] || (n[9] = b("div", { class: "flex-1" }, null, -1)),
              u(y, null, {
                default: i(() => [
                  u(_, {
                    type: "primary",
                    onClick: l
                  }, {
                    default: i(() => n[7] || (n[7] = [
                      C("保存设置")
                    ])),
                    _: 1
                  }),
                  u(_, {
                    onClick: n[2] || (n[2] = (p) => e.value = !1)
                  }, {
                    default: i(() => n[8] || (n[8] = [
                      C("取消")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          default: i(() => [
            u(k, {
              type: "line",
              animated: "",
              placement: "left",
              value: f(t),
              "onUpdate:value": n[1] || (n[1] = (p) => Z(t) ? t.value = p : null)
            }, {
              default: i(() => [
                (d(), v($, null, G(s, (p) => u(h, ae({
                  key: p.name,
                  ref_for: !0
                }, p, { "display-directive": "show:lazy" }), {
                  default: i(() => [
                    b("div", Le, [
                      (d(), L(re, null, {
                        fallback: i(() => n[6] || (n[6] = [
                          C(" Loading... ")
                        ])),
                        default: i(() => [
                          (d(), L(le(p.components), {
                            ref_for: !0,
                            ref_key: "allRef",
                            ref: r,
                            name: p.name
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
}), ze = [
  "解决方案",
  "技术服务",
  "驻场",
  "出差",
  "现场",
  "派遣",
  "国内领先",
  "服务提供商",
  "数字化转型",
  "定制化系统",
  "一站式服务",
  "为客户提供",
  "一体化",
  "晋升途径",
  "工作地点",
  "外派",
  "od",
  "学信网"
], He = [
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
], Ne = [], V = "1.1.1", j = {
  blacklist: He.map((a) => ({
    value: a,
    id: B()
  })),
  whitelist: Ne.map((a) => ({
    value: a,
    id: B()
  })),
  keywords: ze.map((a) => ({
    value: a,
    type: "string",
    id: B()
  }))
}, Ae = `blacklist_${V}`, qe = `whitelist_${V}`, Re = `keywords_${V}`;
var Q, X, Y;
const M = ce({
  blacklist: q((Q = localStorage.getItem(Ae)) != null ? Q : "") || j.blacklist,
  whitelist: q((X = localStorage.getItem(qe)) != null ? X : "") || j.whitelist,
  keywords: q((Y = localStorage.getItem(Re)) != null ? Y : "") || j.keywords
}), { blacklist: P, whitelist: K, keywords: O } = ie(M);
E(
  () => M,
  () => {
    localStorage.setItem("blacklist", R(P.value)), localStorage.setItem("whitelist", R(K.value)), localStorage.setItem("keywords", R(O.value));
  },
  { deep: !0 }
);
const tt = (a) => {
  for (const e of a) {
    const s = J(e, ["type", "value"]);
    O.value.some(
      (t) => $e(J(t, ["type", "value"]), s)
    ) || O.value.push(e);
  }
}, st = (a) => {
  for (const e of a)
    P.value.some(({ value: r }) => r === e.value) || P.value.push(e);
}, nt = (a) => {
  for (const e of a)
    K.value.some(({ value: r }) => r === e.value) || K.value.push(e);
};
class Be {
  /**
   * 高亮区域
   *
   * @param {string} text
   * @param {(HighlightText | HighlightText[])} highlightText
   * @return {*}
   * @memberof Highlight
   */
  highlightArea(e, s) {
    const t = (Array.isArray(s) ? s : [s]).map((l) => this.queryTheHighlightedPosition(e, l)).flat(2), o = this.mergeLocations(t);
    return {
      result: this.render(e, o),
      optimizeLocations: o,
      locations: t
    };
  }
  render(e, s) {
    let r = "", t = 0;
    for (const o of s) {
      const { start: l, end: c } = o;
      t < l && (r += e.slice(t, l)), r += `<span style="color: red;">${e.slice(
        l,
        c
      )}</span>`, t = c;
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
    let o = t.exec(e);
    for (; o; ) {
      const l = o[0];
      if (r.push({
        start: o.index,
        end: o.index + l.length,
        text: l
      }), !t.flags.includes("g"))
        break;
      o = t.exec(e);
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
      (o, l) => o.start - l.start || o.end - l.end
    );
    if (s.length <= 1)
      return s;
    const r = [];
    let t = null;
    for (const o of s)
      t ? o.start <= t.end ? t.end = Math.max(t.end, o.end) : (r.push(t), t = H({}, o)) : t = H({}, o);
    return t && r.push(t), r;
  }
}
const je = new Be(), De = () => {
  const a = 'a[ka="job-detail-company_custompage"]', e = ".info-primary h1", s = ".job-detail-company .job-sec-text", r = ".job-detail-section .job-sec-text", t = document.querySelector(a), o = document.querySelector(e), l = document.querySelector(s), c = document.querySelector(r), n = {
    // 公司名称
    company: {
      html: (t == null ? void 0 : t.innerHTML) || "",
      text: ((t == null ? void 0 : t.textContent) || "").trim(),
      el: t,
      class: a
    },
    // 职位名称
    jobTitle: {
      html: (o == null ? void 0 : o.innerHTML) || "",
      text: (o == null ? void 0 : o.textContent) || "",
      el: o,
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
      html: (c == null ? void 0 : c.innerHTML) || "",
      text: (c == null ? void 0 : c.textContent) || "",
      el: c,
      class: r
    }
  }, g = () => {
    Object.values(n).forEach((h) => {
      const { class: k } = h, _ = document.querySelector(k);
      _ && (_.innerHTML = h.html), m.value = { reason: /* @__PURE__ */ new Set(), grade: "blacklist" };
    });
  }, m = T({ reason: /* @__PURE__ */ new Set(), grade: "blacklist" }), w = () => {
    g();
    const { blacklist: h, whitelist: k, keywords: _ } = M;
    if (!k.some((y) => y.value === n.company.text)) {
      if (h.some((y) => y.value === n.company.text)) {
        if (!n.company.el)
          return;
        m.value.grade = "blacklist", m.value.reason.add(n.company.text), n.company.el.innerHTML = `<span style="color: red">${n.company.text}</span>`;
        return;
      }
      [n.jobTitle, n.companyDesc, n.jobDesc].forEach((y) => {
        const { locations: S, result: p } = je.highlightArea(
          y.text,
          _.map((z) => z.value)
        );
        !S.length || !y.el || (y.el.innerHTML = p, S.forEach((z) => {
          m.value.grade = "keyword", m.value.reason.add(`${z.text}`);
        }));
      });
    }
  };
  return ue(() => {
    w();
  }), {
    run: w,
    result: m
  };
}, Pe = /* @__PURE__ */ I({
  __name: "btn",
  props: {
    grade: {}
  },
  setup(a) {
    const e = a, s = D(() => ({
      width: "auto",
      minWidth: "55px",
      color: e.grade === "probably" ? "#faad14" : "#ff4d4f",
      padding: "0 12px",
      background: "transparent",
      borderColor: "transparent"
    }));
    return (r, t) => (d(), v("a", {
      class: "btn",
      style: pe(f(s))
    }, [
      de(r.$slots, "default")
    ], 4));
  }
}), Ke = { key: 0 }, Oe = { key: 1 }, Ve = { style: { whiteSpace: "pre" } }, Fe = { key: 0 }, Ue = /* @__PURE__ */ I({
  __name: "results-display",
  props: {
    result: {}
  },
  setup(a) {
    const e = a, s = D(() => {
      const { reason: t, grade: o } = e.result;
      return o === "blacklist" ? !0 : t.size >= 3;
    }), r = D(() => {
      const { reason: t } = e.result;
      return t.size < 3 && s.value === !1;
    });
    return (t, o) => {
      const l = ee;
      return f(s) || f(r) ? (d(), L(me, {
        key: 0,
        to: ".btn-container"
      }, [
        u(l, { trigger: "hover" }, {
          trigger: i(() => [
            u(Pe, {
              grade: f(s) ? "determine" : "probably"
            }, {
              default: i(() => [
                f(s) ? (d(), v("span", Ke, "❌ 外包公司")) : x("", !0),
                f(r) ? (d(), v("span", Oe, "⚠️ 可能为外包公司")) : x("", !0),
                o[0] || (o[0] = b("span", null, "「悬浮查看详情」", -1))
              ]),
              _: 1
            }, 8, ["grade"])
          ]),
          default: i(() => [
            b("p", Ve, [
              t.result.grade === "blacklist" ? (d(), v("p", Fe, "公司名称为外包：" + A(Array.from(t.result.reason)[0]), 1)) : x("", !0),
              t.result.grade === "keyword" ? (d(), v($, { key: 1 }, [
                o[1] || (o[1] = b("p", null, "出现了以下关键词：", -1)),
                (d(!0), v($, null, G(t.result.reason, (c, n) => (d(), v("p", { key: c }, A(n + 1) + ". 「" + A(c) + "」 ", 1))), 128))
              ], 64)) : x("", !0)
            ])
          ]),
          _: 1
        })
      ])) : x("", !0);
    };
  }
}), We = (a, e) => {
  const s = a.__vccOpts || a;
  for (const [r, t] of e)
    s[r] = t;
  return s;
}, Ze = /* @__PURE__ */ We(Ue, [["__scopeId", "data-v-ad128997"]]), Je = /* @__PURE__ */ I({
  __name: "App",
  setup(a) {
    const e = {
      common: {
        primaryColor: "#42b883"
      },
      Form: {
        feedbackHeightMedium: "0"
      }
    }, { result: s, run: r } = De();
    return E(
      () => M,
      () => {
        r();
      },
      { deep: !0 }
    ), (t, o) => {
      const l = Te, c = xe;
      return d(), L(c, {
        "inline-theme-disabled": "",
        "theme-overrides": e,
        locale: f(Se),
        "date-locale": f(Ce)
      }, {
        default: i(() => [
          u(l, null, {
            default: i(() => [
              u(Me),
              u(Ze, { result: f(s) }, null, 8, ["result"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["locale", "date-locale"]);
    };
  }
}), te = document.createElement("div");
document.body.appendChild(te);
_e(Je).mount(te);
export {
  st as a,
  P as b,
  nt as c,
  O as k,
  tt as u,
  K as w
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1DM3JJVjhCNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS52dWUiLCIuLi8uLi9zcmMvc3RvcmUudHMiLCIuLi8uLi9zcmMvdXRpbHMvaGlnaGxpZ2h0LnRzIiwiLi4vLi4vc3JjL2hvb2tzL3VzZS1oaWdobGlnaHQudHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9yZXN1bHRzLWRpc3BsYXkvYnRuLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMtZGlzcGxheS9yZXN1bHRzLWRpc3BsYXkudnVlIiwiLi4vLi4vc3JjL0FwcC52dWUiLCIuLi8uLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3Qgc2hvd01vZGFsID0gcmVmKGZhbHNlKTtcblxuY29uc3QgdGFicyA9IFtcbiAge1xuICAgIHRhYjogJ+i/h+a7pOWFs+mUruivjScsXG4gICAgbmFtZTogJ2tleXdvcmQnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9rZXl3b3Jkcy52dWUnKSksXG4gIH0sXG4gIHtcbiAgICB0YWI6ICfpu5HlkI3ljZXvvIjlhazlj7jvvIknLFxuICAgIG5hbWU6ICdibGFja2xpc3QnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9ibGFja2xpc3QudnVlJykpLFxuICB9LFxuICB7XG4gICAgdGFiOiAn55m95ZCN5Y2V77yI5YWs5Y+477yJJyxcbiAgICBuYW1lOiAnd2hpdGVMaXN0JyxcbiAgICBjb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4vd2hpdGUtbGlzdC52dWUnKSksXG4gIH0sXG5dO1xuXG5jb25zdCBhbGxSZWYgPSByZWY8XG4gIHtcbiAgICBzYXZlQWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVtdXG4+KCk7XG5jb25zdCBhY3RpdmVUYWIgPSByZWYoJ2tleXdvcmQnKTtcbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5cbmNvbnN0IG9uU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgZm9yIChjb25zdCB7IHNhdmVBbGwsIG5hbWUgfSBvZiBhbGxSZWYudmFsdWU/LnRvU29ydGVkKCh4LCB5KSA9PiB7XG4gICAgY29uc3QgeEluZGV4ID0gdGFicy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0geC5uYW1lKTtcbiAgICBjb25zdCB5SW5kZXggPSB0YWJzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSB5Lm5hbWUpO1xuICAgIHJldHVybiB4SW5kZXggLSB5SW5kZXg7XG4gIH0pIHx8IFtdKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNhdmVBbGwoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFjdGl2ZVRhYi52YWx1ZSA9IG5hbWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNob3dNb2RhbC52YWx1ZSA9IGZhbHNlO1xuICBtZXNzYWdlLnN1Y2Nlc3MoYOS/neWtmOWFqOmDqOiuvue9ruaIkOWKn+OAgmApO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxuLXRvb2x0aXAgdHJpZ2dlcj1cImhvdmVyXCI+XG4gICAgPHRlbXBsYXRlICN0cmlnZ2VyPlxuICAgICAgPG4tZmxvYXQtYnV0dG9uXG4gICAgICAgIHJpZ2h0PVwiMjVweFwiXG4gICAgICAgIHRvcD1cIjQwdmhcIlxuICAgICAgICBzaGFwZT1cInNxdWFyZVwiXG4gICAgICAgIEBjbGljaz1cInNob3dNb2RhbCA9IHRydWVcIlxuICAgICAgICBjbGFzcz1cInotMTAwXCJcbiAgICAgID5cbiAgICAgICAgPG4taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaS1ieXRlc2l6ZS1zZXR0aW5ncyB0ZXh0LXNpemUteGxcIj48L2Rpdj5cbiAgICAgICAgPC9uLWljb24+XG4gICAgICA8L24tZmxvYXQtYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG4gICAg5omT5byA6K6+572u6Z2i5p2/XG4gIDwvbi10b29sdGlwPlxuXG4gIDxuLW1vZGFsXG4gICAgY2xhc3M9XCJ3LTEwMDBweFwiXG4gICAgdi1tb2RlbDpzaG93PVwic2hvd01vZGFsXCJcbiAgICBwcmVzZXQ9XCJjYXJkXCJcbiAgICB0aXRsZT1cIkJPU1Pnm7TogZgt5aSW5YyF5qCH5rOoIOiuvue9rueVjOmdolwiXG4gID5cbiAgICA8bi10YWJzIHR5cGU9XCJsaW5lXCIgYW5pbWF0ZWQgcGxhY2VtZW50PVwibGVmdFwiIHYtbW9kZWw6dmFsdWU9XCJhY3RpdmVUYWJcIj5cbiAgICAgIDxuLXRhYi1wYW5lXG4gICAgICAgIHYtZm9yPVwiaXRlbSBvZiB0YWJzXCJcbiAgICAgICAgOmtleT1cIml0ZW0ubmFtZVwiXG4gICAgICAgIHYtYmluZD1cIml0ZW1cIlxuICAgICAgICBkaXNwbGF5LWRpcmVjdGl2ZT1cInNob3c6bGF6eVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtaW4taC0zNTBweFwiPlxuICAgICAgICAgIDxTdXNwZW5zZT5cbiAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgOmlzPVwiaXRlbS5jb21wb25lbnRzXCJcbiAgICAgICAgICAgICAgcmVmPVwiYWxsUmVmXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgPjwvY29tcG9uZW50PlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2ZhbGxiYWNrPiBMb2FkaW5nLi4uIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L24tdGFiLXBhbmU+XG4gICAgPC9uLXRhYnM+XG4gICAgPHRlbXBsYXRlICNmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPjwvZGl2PlxuICAgICAgICA8bi1zcGFjZT5cbiAgICAgICAgICA8bi1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvblNhdmVcIj7kv53lrZjorr7nva48L24tYnV0dG9uPlxuICAgICAgICAgIDxuLWJ1dHRvbiBAY2xpY2s9XCJzaG93TW9kYWwgPSBmYWxzZVwiPuWPlua2iDwvbi1idXR0b24+XG4gICAgICAgIDwvbi1zcGFjZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvbi1tb2RhbD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQga2V5d29yZHNEYXRhIGZyb20gJ0AvY29uc3RhbnQva2V5d29yZHMuanNvbic7XG5pbXBvcnQgYmxhY2tsaXN0RGF0YSBmcm9tICdAL2NvbnN0YW50L2JsYWNrbGlzdC5qc29uJztcbmltcG9ydCB3aGl0ZUxpc3REYXRhIGZyb20gJ0AvY29uc3RhbnQvd2hpdGUtbGlzdC5qc29uJztcbmltcG9ydCB7IHNlcmlhbGl6ZSwgZGVzZXJpYWxpemUgfSBmcm9tICdzZXJvdmFsJztcbmltcG9ydCB7IHY2IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsYWNrbGlzdCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdoaXRlbGlzdCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5d29yZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6ICdzdHJpbmcnIHwgJ3JlZ2V4cCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmUge1xuICBibGFja2xpc3Q6IEJsYWNrbGlzdFtdO1xuICB3aGl0ZWxpc3Q6IFdoaXRlbGlzdFtdO1xuICBrZXl3b3JkczogS2V5d29yZFtdO1xufVxuXG5jb25zdCBkZWZhdWx0U3RvcmU6IFN0b3JlID0ge1xuICBibGFja2xpc3Q6IGJsYWNrbGlzdERhdGEubWFwKChpdGVtKSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtLFxuICAgIGlkOiB1dWlkKCksXG4gIH0pKSxcbiAgd2hpdGVsaXN0OiB3aGl0ZUxpc3REYXRhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICB2YWx1ZTogaXRlbSxcbiAgICBpZDogdXVpZCgpLFxuICB9KSksXG4gIGtleXdvcmRzOiBrZXl3b3Jkc0RhdGEubWFwKChpdGVtKSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGlkOiB1dWlkKCksXG4gIH0pKSxcbn07XG5cbmV4cG9ydCBjb25zdCBibGFja2xpc3RLZXkgPSBgYmxhY2tsaXN0XyR7dmVyc2lvbn1gO1xuZXhwb3J0IGNvbnN0IHdoaXRlbGlzdEtleSA9IGB3aGl0ZWxpc3RfJHt2ZXJzaW9ufWA7XG5leHBvcnQgY29uc3Qga2V5d29yZHNLZXkgPSBga2V5d29yZHNfJHt2ZXJzaW9ufWA7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IHJlYWN0aXZlPFN0b3JlPih7XG4gIGJsYWNrbGlzdDpcbiAgICBkZXNlcmlhbGl6ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShibGFja2xpc3RLZXkpID8/ICcnKSB8fFxuICAgIGRlZmF1bHRTdG9yZS5ibGFja2xpc3QsXG4gIHdoaXRlbGlzdDpcbiAgICBkZXNlcmlhbGl6ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh3aGl0ZWxpc3RLZXkpID8/ICcnKSB8fFxuICAgIGRlZmF1bHRTdG9yZS53aGl0ZWxpc3QsXG4gIGtleXdvcmRzOlxuICAgIGRlc2VyaWFsaXplKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXdvcmRzS2V5KSA/PyAnJykgfHxcbiAgICBkZWZhdWx0U3RvcmUua2V5d29yZHMsXG59KTtcblxuY29uc3QgeyBibGFja2xpc3QsIHdoaXRlbGlzdCwga2V5d29yZHMgfSA9IHRvUmVmcyhzdG9yZSk7XG5cbmV4cG9ydCB7IGJsYWNrbGlzdCwgd2hpdGVsaXN0LCBrZXl3b3JkcyB9O1xuXG4vLyDoh6rliqjkv53lrZjliLDmnKzlnLBcbndhdGNoKFxuICAoKSA9PiBzdG9yZSxcbiAgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibGFja2xpc3QnLCBzZXJpYWxpemUoYmxhY2tsaXN0LnZhbHVlKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3doaXRlbGlzdCcsIHNlcmlhbGl6ZSh3aGl0ZWxpc3QudmFsdWUpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2V5d29yZHMnLCBzZXJpYWxpemUoa2V5d29yZHMudmFsdWUpKTtcbiAgfSxcbiAgeyBkZWVwOiB0cnVlIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlS2V5d29yZHMgPSAobmV3RGF0YTogS2V5d29yZFtdKSA9PiB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBuZXdEYXRhKSB7XG4gICAgY29uc3QgZGlmZnZhbHVlID0gXy5waWNrKGl0ZW0sIFsndHlwZScsICd2YWx1ZSddKTtcbiAgICBjb25zdCByZXN1bHQgPSBrZXl3b3Jkcy52YWx1ZS5zb21lKChpdGVtKSA9PlxuICAgICAgXy5pc0VxdWFsKF8ucGljayhpdGVtLCBbJ3R5cGUnLCAndmFsdWUnXSksIGRpZmZ2YWx1ZSksXG4gICAgKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAga2V5d29yZHMudmFsdWUucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCbGFja2xpc3QgPSAobmV3RGF0YTogQmxhY2tsaXN0W10pID0+IHtcbiAgZm9yIChjb25zdCBpdGVtIG9mIG5ld0RhdGEpIHtcbiAgICBjb25zdCByZXN1bHQgPSBibGFja2xpc3QudmFsdWUuc29tZSgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gaXRlbS52YWx1ZSk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGJsYWNrbGlzdC52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVdoaXRlbGlzdCA9IChuZXdEYXRhOiBXaGl0ZWxpc3RbXSkgPT4ge1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbmV3RGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHdoaXRlbGlzdC52YWx1ZS5zb21lKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBpdGVtLnZhbHVlKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgd2hpdGVsaXN0LnZhbHVlLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBIaWdobGlnaHRUZXh0ID0gc3RyaW5nIHwgUmVnRXhwO1xuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IHtcbiAgLyoqXG4gICAqIOmrmOS6ruWMuuWfn1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcGFyYW0geyhIaWdobGlnaHRUZXh0IHwgSGlnaGxpZ2h0VGV4dFtdKX0gaGlnaGxpZ2h0VGV4dFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKiBAbWVtYmVyb2YgSGlnaGxpZ2h0XG4gICAqL1xuICBoaWdobGlnaHRBcmVhKHRleHQ6IHN0cmluZywgaGlnaGxpZ2h0VGV4dDogSGlnaGxpZ2h0VGV4dCB8IEhpZ2hsaWdodFRleHRbXSkge1xuICAgIGNvbnN0IGFyciA9IEFycmF5LmlzQXJyYXkoaGlnaGxpZ2h0VGV4dCkgPyBoaWdobGlnaHRUZXh0IDogW2hpZ2hsaWdodFRleHRdO1xuICAgIGNvbnN0IGxvY2F0aW9ucyA9IGFyclxuICAgICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVRoZUhpZ2hsaWdodGVkUG9zaXRpb24odGV4dCwgaXRlbSk7XG4gICAgICB9KVxuICAgICAgLmZsYXQoMik7XG5cbiAgICBjb25zdCBvcHRpbWl6ZUxvY2F0aW9ucyA9IHRoaXMubWVyZ2VMb2NhdGlvbnMobG9jYXRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiB0aGlzLnJlbmRlcih0ZXh0LCBvcHRpbWl6ZUxvY2F0aW9ucyksXG4gICAgICBvcHRpbWl6ZUxvY2F0aW9uczogb3B0aW1pemVMb2NhdGlvbnMsXG4gICAgICBsb2NhdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKHRleHQ6IHN0cmluZywgcmFuZ2VzOiBMb2NhdGlvbltdKSB7XG4gICAgbGV0IGhpZ2hsaWdodGVkVGV4dCA9ICcnO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcmFuZ2U7XG5cbiAgICAgIC8vIOa3u+WKoOmdnumrmOS6rumDqOWIhlxuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHN0YXJ0KSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVGV4dCArPSB0ZXh0LnNsaWNlKGN1cnJlbnRJbmRleCwgc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICAvLyDmt7vliqDpq5jkuq7pg6jliIZcbiAgICAgIGhpZ2hsaWdodGVkVGV4dCArPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkO1wiPiR7dGV4dC5zbGljZShcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICl9PC9zcGFuPmA7XG4gICAgICBjdXJyZW50SW5kZXggPSBlbmQ7IC8vIOabtOaWsOW9k+WJjee0ouW8lVxuICAgIH1cblxuICAgIC8vIOa3u+WKoOWJqeS9meacqumrmOS6rueahOaWh+acrFxuICAgIGlmIChjdXJyZW50SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgaGlnaGxpZ2h0ZWRUZXh0ICs9IHRleHQuc2xpY2UoY3VycmVudEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRUZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIOmrmOS6ruaWh+acrOS9jee9ruafpeivolxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodFRleHR9IGhpZ2hsaWdodFxuICAgKiBAcmV0dXJuIHsqfVxuICAgKiBAbWVtYmVyb2YgSGlnaGxpZ2h0XG4gICAqL1xuICBwcml2YXRlIHF1ZXJ5VGhlSGlnaGxpZ2h0ZWRQb3NpdGlvbih0ZXh0OiBzdHJpbmcsIGhpZ2hsaWdodDogSGlnaGxpZ2h0VGV4dCkge1xuICAgIGNvbnN0IGxvY2F0aW9uUmVjb3JkOiAoTG9jYXRpb24gJiB7IHRleHQ6IHN0cmluZyB9KVtdID0gW107XG4gICAgY29uc3QgcmVnID1cbiAgICAgIGhpZ2hsaWdodCBpbnN0YW5jZW9mIFJlZ0V4cCA/IGhpZ2hsaWdodCA6IG5ldyBSZWdFeHAoaGlnaGxpZ2h0LCAnZycpO1xuXG4gICAgbGV0IHJlc3VsdCA9IHJlZy5leGVjKHRleHQpO1xuXG4gICAgd2hpbGUgKHJlc3VsdCkge1xuICAgICAgY29uc3QgaGlnaGxpZ2h0VGV4dCA9IHJlc3VsdFswXTtcbiAgICAgIGxvY2F0aW9uUmVjb3JkLnB1c2goe1xuICAgICAgICBzdGFydDogcmVzdWx0LmluZGV4LFxuICAgICAgICBlbmQ6IHJlc3VsdC5pbmRleCArIGhpZ2hsaWdodFRleHQubGVuZ3RoLFxuICAgICAgICB0ZXh0OiBoaWdobGlnaHRUZXh0LFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlZy5mbGFncy5pbmNsdWRlcygnZycpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gcmVnLmV4ZWModGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvblJlY29yZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDkvY3nva7op4TliJnlkIjlubZcbiAgICogMS4g5aSE55CG6KeE5YiZ5aaC5LiL77yM5aaC5p6c6LW35aeL5L2N572u55u45ZCM5YiZ5YiZ5ZCI5bm25pyA5aSn5L2N572uXG4gICAqIDIuIOWmguaenOWFg+e0oOeahOW8gOWni+e7k+adn+S9jee9ruS4juWFtuS7luaIkOWRmOeahOS9jee9ruWkp+Wwj+ebuOmCu+aIluiAheWcqOWGheWImeWQiOW5tlxuICAgKiBAcGFyYW0ge0xvY2F0aW9uW119IGxvY2F0aW9uc1xuICAgKiBAcmV0dXJuIHsqfVxuICAgKiBAbWVtYmVyb2YgSGlnaGxpZ2h0XG4gICAqL1xuICBtZXJnZUxvY2F0aW9ucyhsb2NhdGlvbnM6IExvY2F0aW9uW10pIHtcbiAgICAvLyDlhYjmjIkgc3RhcnQg5o6S5bqP77yM5aaC5p6cIHN0YXJ0IOebuOWQjOaMiSBlbmQg5o6S5bqPXG4gICAgY29uc3QgcmFuZ2VzID0gbG9jYXRpb25zLnRvU29ydGVkKFxuICAgICAgKGEsIGIpID0+IGEuc3RhcnQgLSBiLnN0YXJ0IHx8IGEuZW5kIC0gYi5lbmQsXG4gICAgKTtcbiAgICAvLyDlpoLmnpzojIPlm7TmlbDnu4TkuLrnqbrmiJblj6rmnInkuIDkuKrojIPlm7TvvIznm7TmjqXov5Tlm55cbiAgICBpZiAocmFuZ2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICByZXR1cm4gcmFuZ2VzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdDogTG9jYXRpb25bXSA9IFtdO1xuICAgIGxldCBjdXJyZW50OiBudWxsIHwgTG9jYXRpb24gPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAvLyDliJ3lp4vljJbnrKzkuIDkuKrojIPlm7RcbiAgICAgICAgY3VycmVudCA9IHsgLi4ucmFuZ2UgfTtcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2Uuc3RhcnQgPD0gY3VycmVudC5lbmQpIHtcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN6IyD5Zu05LiO5paw6IyD5Zu06YeN5Y+g5oiW55u46YK777yM5ZCI5bm2XG4gICAgICAgIGN1cnJlbnQuZW5kID0gTWF0aC5tYXgoY3VycmVudC5lbmQsIHJhbmdlLmVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpzkuI3ph43lj6DvvIzkv53lrZjlvZPliY3ojIPlm7Tlubbmm7TmlrDkuLrmlrDojIPlm7RcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSB7IC4uLnJhbmdlIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5re75Yqg5pyA5ZCO5LiA5Liq6IyD5Zu0XG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQoKTtcbiIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vdXRpbHMvaGlnaGxpZ2h0JztcblxuY29uc3QgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmsge1xuICByZWFzb246IFNldDxzdHJpbmc+O1xuICBncmFkZTogJ2tleXdvcmQnIHwgJ2JsYWNrbGlzdCc7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VIaWdobGlnaHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXBhbnlDbGFzcyA9IGBhW2thPVwiam9iLWRldGFpbC1jb21wYW55X2N1c3RvbXBhZ2VcIl1gO1xuXG4gIGNvbnN0IGpvYlRpdGxlQ2xhc3MgPSAnLmluZm8tcHJpbWFyeSBoMSc7XG5cbiAgY29uc3Qgam9iRGVzY0NsYXNzID0gJy5qb2ItZGV0YWlsLWNvbXBhbnkgLmpvYi1zZWMtdGV4dCc7XG5cbiAgY29uc3QgY29tcGFueURlc2NDbGFzcyA9ICcuam9iLWRldGFpbC1zZWN0aW9uIC5qb2Itc2VjLXRleHQnO1xuXG4gIGNvbnN0IGNvbXBhbnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb21wYW55Q2xhc3MpO1xuICBjb25zdCBqb2JUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlRpdGxlQ2xhc3MpO1xuICBjb25zdCBqb2JEZXNjRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iRGVzY0NsYXNzKTtcbiAgY29uc3QgY29tcGFueURlc2NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb21wYW55RGVzY0NsYXNzKTtcblxuICBjb25zdCBydWxlcyA9IHtcbiAgICAvLyDlhazlj7jlkI3np7BcbiAgICBjb21wYW55OiB7XG4gICAgICBodG1sOiBjb21wYW55RWxlbWVudD8uaW5uZXJIVE1MIHx8ICcnLFxuICAgICAgdGV4dDogKGNvbXBhbnlFbGVtZW50Py50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpLFxuICAgICAgZWw6IGNvbXBhbnlFbGVtZW50LFxuICAgICAgY2xhc3M6IGNvbXBhbnlDbGFzcyxcbiAgICB9LFxuICAgIC8vIOiBjOS9jeWQjeensFxuICAgIGpvYlRpdGxlOiB7XG4gICAgICBodG1sOiBqb2JUaXRsZUVsZW1lbnQ/LmlubmVySFRNTCB8fCAnJyxcbiAgICAgIHRleHQ6IGpvYlRpdGxlRWxlbWVudD8udGV4dENvbnRlbnQgfHwgJycsXG4gICAgICBlbDogam9iVGl0bGVFbGVtZW50LFxuICAgICAgY2xhc3M6IGpvYlRpdGxlQ2xhc3MsXG4gICAgfSxcbiAgICAvLyDogYzkvY3mj4/ov7BcbiAgICBqb2JEZXNjOiB7XG4gICAgICBodG1sOiBqb2JEZXNjRWxlbWVudD8uaW5uZXJIVE1MIHx8ICcnLFxuICAgICAgdGV4dDogam9iRGVzY0VsZW1lbnQ/LnRleHRDb250ZW50IHx8ICcnLFxuICAgICAgZWw6IGpvYkRlc2NFbGVtZW50LFxuICAgICAgY2xhc3M6IGpvYkRlc2NDbGFzcyxcbiAgICB9LFxuICAgIC8vIOWFrOWPuOaPj+i/sFxuICAgIGNvbXBhbnlEZXNjOiB7XG4gICAgICBodG1sOiBjb21wYW55RGVzY0VsZW1lbnQ/LmlubmVySFRNTCB8fCAnJyxcbiAgICAgIHRleHQ6IGNvbXBhbnlEZXNjRWxlbWVudD8udGV4dENvbnRlbnQgfHwgJycsXG4gICAgICBlbDogY29tcGFueURlc2NFbGVtZW50LFxuICAgICAgY2xhc3M6IGNvbXBhbnlEZXNjQ2xhc3MsXG4gICAgfSxcbiAgfTtcblxuICAvLyDov5jljp/kuYvliY3nmoTmoLflvI9cbiAgY29uc3QgcmVzdG9yZSA9ICgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKHJ1bGVzKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCB7IGNsYXNzOiBjbGFzc05hbWUgfSA9IHJ1bGU7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBydWxlLmh0bWw7XG4gICAgICB9XG4gICAgICByZXN1bHQudmFsdWUgPSB7IHJlYXNvbjogbmV3IFNldCgpLCBncmFkZTogJ2JsYWNrbGlzdCcgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZXN1bHQgPSByZWY8TWFyaz4oeyByZWFzb246IG5ldyBTZXQoKSwgZ3JhZGU6ICdibGFja2xpc3QnIH0pO1xuXG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICByZXN0b3JlKCk7XG4gICAgY29uc3QgeyBibGFja2xpc3QsIHdoaXRlbGlzdCwga2V5d29yZHMgfSA9IHN0b3JlO1xuICAgIC8vIOWmguaenOeZveWQjeWNleebtOaOpei3s+i/h1xuICAgIGlmICh3aGl0ZWxpc3Quc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gcnVsZXMuY29tcGFueS50ZXh0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDlpoLmnpzpu5HlkI3ljZXnm7TmjqXmoIforrDlh7rmnaVcbiAgICBpZiAoYmxhY2tsaXN0LnNvbWUoKGYpID0+IGYudmFsdWUgPT09IHJ1bGVzLmNvbXBhbnkudGV4dCkpIHtcbiAgICAgIGlmICghcnVsZXMuY29tcGFueS5lbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXN1bHQudmFsdWUuZ3JhZGUgPSAnYmxhY2tsaXN0JztcblxuICAgICAgcmVzdWx0LnZhbHVlLnJlYXNvbi5hZGQocnVsZXMuY29tcGFueS50ZXh0KTtcblxuICAgICAgcnVsZXMuY29tcGFueS5lbC5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+JHtydWxlcy5jb21wYW55LnRleHR9PC9zcGFuPmA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgW3J1bGVzLmpvYlRpdGxlLCBydWxlcy5jb21wYW55RGVzYywgcnVsZXMuam9iRGVzY10uZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgeyBsb2NhdGlvbnMsIHJlc3VsdDogaHRtbCB9ID0gaGlnaGxpZ2h0LmhpZ2hsaWdodEFyZWEoXG4gICAgICAgIHJ1bGUudGV4dCxcbiAgICAgICAga2V5d29yZHMubWFwKChmKSA9PiBmLnZhbHVlKSxcbiAgICAgICk7XG4gICAgICBpZiAoIWxvY2F0aW9ucy5sZW5ndGggfHwgIXJ1bGUuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcnVsZS5lbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgbG9jYXRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgcmVzdWx0LnZhbHVlLmdyYWRlID0gJ2tleXdvcmQnO1xuICAgICAgICByZXN1bHQudmFsdWUucmVhc29uLmFkZChgJHtpdGVtLnRleHR9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHJ1bigpO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJ1bixcbiAgICByZXN1bHQsXG4gIH07XG59O1xuIiwiPHRlbXBsYXRlPlxuICA8YSBjbGFzcz1cImJ0blwiIDpzdHlsZT1cInN0eWxlXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHR5cGUgeyBTdHlsZVZhbHVlIH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGdyYWRlOiAnZGV0ZXJtaW5lJyB8ICdwcm9iYWJseSc7XG59PigpO1xuXG5jb25zdCBzdHlsZSA9IGNvbXB1dGVkPFN0eWxlVmFsdWU+KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIG1pbldpZHRoOiAnNTVweCcsXG4gICAgY29sb3I6IHByb3BzLmdyYWRlID09PSAncHJvYmFibHknID8gJyNmYWFkMTQnIDogJyNmZjRkNGYnLFxuICAgIHBhZGRpbmc6ICcwIDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIH07XG59KTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8dGVsZXBvcnQgdG89XCIuYnRuLWNvbnRhaW5lclwiIHYtaWY9XCJkZXRlcm1pbmUgfHwgcHJvYmFibHlcIj5cbiAgICA8bi10b29sdGlwIHRyaWdnZXI9XCJob3ZlclwiPlxuICAgICAgPHRlbXBsYXRlICN0cmlnZ2VyPlxuICAgICAgICA8QnRuIDpncmFkZT1cImRldGVybWluZSA/ICdkZXRlcm1pbmUnIDogJ3Byb2JhYmx5J1wiPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJkZXRlcm1pbmVcIj7inYwg5aSW5YyF5YWs5Y+4PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJwcm9iYWJseVwiPuKaoO+4jyDlj6/og73kuLrlpJbljIXlhazlj7g8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+44CM5oKs5rWu5p+l55yL6K+m5oOF44CNPC9zcGFuPlxuICAgICAgICA8L0J0bj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8cCA6c3R5bGU9XCJ7IHdoaXRlU3BhY2U6ICdwcmUnIH1cIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyZXN1bHQuZ3JhZGUgPT09ICdibGFja2xpc3QnXCI+XG4gICAgICAgICAgPHA+5YWs5Y+45ZCN56ew5Li65aSW5YyF77yae3sgQXJyYXkuZnJvbShyZXN1bHQucmVhc29uKVswXSB9fTwvcD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJyZXN1bHQuZ3JhZGUgPT09ICdrZXl3b3JkJ1wiPlxuICAgICAgICAgIDxwPuWHuueOsOS6huS7peS4i+WFs+mUruivje+8mjwvcD5cbiAgICAgICAgICA8cCB2LWZvcj1cIihpdGVtLCBpbmRleCkgb2YgcmVzdWx0LnJlYXNvblwiIDprZXk9XCJpdGVtXCI+XG4gICAgICAgICAgICB7eyBpbmRleCArIDEgfX0uIOOAjHt7IGl0ZW0gfX3jgI1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3A+XG4gICAgPC9uLXRvb2x0aXA+XG4gIDwvdGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdHlwZSBNYXJrIH0gZnJvbSAnQC9ob29rcy91c2UtaGlnaGxpZ2h0JztcbmltcG9ydCBCdG4gZnJvbSAnLi9idG4udnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHJlc3VsdDogTWFyaztcbn0+KCk7XG5cbi8vIOehruWumuS4uuWkluWMheWFrOWPuFxuY29uc3QgZGV0ZXJtaW5lID0gY29tcHV0ZWQoKCkgPT4ge1xuICBjb25zdCB7IHJlYXNvbiwgZ3JhZGUgfSA9IHByb3BzLnJlc3VsdDtcbiAgaWYgKGdyYWRlID09PSAnYmxhY2tsaXN0Jykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZWFzb24uc2l6ZSA+PSAzO1xufSk7XG5cbi8vIOWPr+iDveS4uuWkluWMheWFrOWPuFxuY29uc3QgcHJvYmFibHkgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGNvbnN0IHsgcmVhc29uIH0gPSBwcm9wcy5yZXN1bHQ7XG4gIHJldHVybiByZWFzb24uc2l6ZSA8IDMgJiYgZGV0ZXJtaW5lLnZhbHVlID09PSBmYWxzZTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5wLFxuZGl2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgdHlwZSB7IEdsb2JhbFRoZW1lT3ZlcnJpZGVzIH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IG1hbmFnZSBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS52dWUnO1xuaW1wb3J0IHsgZGF0ZVpoQ04sIHpoQ04gfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQgeyB1c2VIaWdobGlnaHQgfSBmcm9tICcuL2hvb2tzL3VzZS1oaWdobGlnaHQnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBSZXN1bHRzRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvcmVzdWx0cy1kaXNwbGF5L3Jlc3VsdHMtZGlzcGxheS52dWUnO1xuXG5jb25zdCB0aGVtZU92ZXJyaWRlczogR2xvYmFsVGhlbWVPdmVycmlkZXMgPSB7XG4gIGNvbW1vbjoge1xuICAgIHByaW1hcnlDb2xvcjogJyM0MmI4ODMnLFxuICB9LFxuICBGb3JtOiB7XG4gICAgZmVlZGJhY2tIZWlnaHRNZWRpdW06ICcwJyxcbiAgfSxcbn07XG5cbmNvbnN0IHsgcmVzdWx0LCBydW4gfSA9IHVzZUhpZ2hsaWdodCgpO1xuXG53YXRjaChcbiAgKCkgPT4gc3RvcmUsXG4gICgpID0+IHtcbiAgICBydW4oKTtcbiAgfSxcbiAgeyBkZWVwOiB0cnVlIH0sXG4pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPG4tY29uZmlnLXByb3ZpZGVyXG4gICAgaW5saW5lLXRoZW1lLWRpc2FibGVkXG4gICAgOnRoZW1lLW92ZXJyaWRlcz1cInRoZW1lT3ZlcnJpZGVzXCJcbiAgICA6bG9jYWxlPVwiemhDTlwiXG4gICAgOmRhdGUtbG9jYWxlPVwiZGF0ZVpoQ05cIlxuICA+XG4gICAgPG4tbWVzc2FnZS1wcm92aWRlcj5cbiAgICAgIDxtYW5hZ2U+PC9tYW5hZ2U+XG4gICAgICA8UmVzdWx0c0Rpc3BsYXkgOnJlc3VsdD1cInJlc3VsdFwiPjwvUmVzdWx0c0Rpc3BsYXk+XG4gICAgPC9uLW1lc3NhZ2UtcHJvdmlkZXI+XG4gIDwvbi1jb25maWctcHJvdmlkZXI+XG48L3RlbXBsYXRlPlxuXG48IS0tIDxzdHlsZT5cbi5qb2ItYm9keS13cmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjwvc3R5bGU+IC0tPlxuIiwiaW1wb3J0IFwidmlydHVhbDp1bm8uY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAudnVlXCI7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KGRpdik7XG4iXSwibmFtZXMiOlsic2hvd01vZGFsIiwicmVmIiwidGFicyIsImRlZmluZUFzeW5jQ29tcG9uZW50IiwiYWxsUmVmIiwiYWN0aXZlVGFiIiwibWVzc2FnZSIsInVzZU1lc3NhZ2UiLCJvblNhdmUiLCJfX2FzeW5jIiwic2F2ZUFsbCIsIm5hbWUiLCJfYSIsIngiLCJ5IiwieEluZGV4IiwiZiIsInlJbmRleCIsImUiLCJkZWZhdWx0U3RvcmUiLCJibGFja2xpc3REYXRhIiwiaXRlbSIsInV1aWQiLCJ3aGl0ZUxpc3REYXRhIiwia2V5d29yZHNEYXRhIiwiYmxhY2tsaXN0S2V5IiwidmVyc2lvbiIsIndoaXRlbGlzdEtleSIsImtleXdvcmRzS2V5Iiwic3RvcmUiLCJyZWFjdGl2ZSIsImRlc2VyaWFsaXplIiwiX2IiLCJfYyIsImJsYWNrbGlzdCIsIndoaXRlbGlzdCIsImtleXdvcmRzIiwidG9SZWZzIiwid2F0Y2giLCJzZXJpYWxpemUiLCJ1cGRhdGVLZXl3b3JkcyIsIm5ld0RhdGEiLCJkaWZmdmFsdWUiLCJfLnBpY2siLCJfLmlzRXF1YWwiLCJ1cGRhdGVCbGFja2xpc3QiLCJ2YWx1ZSIsInVwZGF0ZVdoaXRlbGlzdCIsIkhpZ2hsaWdodCIsInRleHQiLCJoaWdobGlnaHRUZXh0IiwibG9jYXRpb25zIiwib3B0aW1pemVMb2NhdGlvbnMiLCJyYW5nZXMiLCJoaWdobGlnaHRlZFRleHQiLCJjdXJyZW50SW5kZXgiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwiaGlnaGxpZ2h0IiwibG9jYXRpb25SZWNvcmQiLCJyZWciLCJyZXN1bHQiLCJhIiwiYiIsImN1cnJlbnQiLCJfX3NwcmVhZFZhbHVlcyIsInVzZUhpZ2hsaWdodCIsImNvbXBhbnlDbGFzcyIsImpvYlRpdGxlQ2xhc3MiLCJqb2JEZXNjQ2xhc3MiLCJjb21wYW55RGVzY0NsYXNzIiwiY29tcGFueUVsZW1lbnQiLCJqb2JUaXRsZUVsZW1lbnQiLCJqb2JEZXNjRWxlbWVudCIsImNvbXBhbnlEZXNjRWxlbWVudCIsInJ1bGVzIiwicmVzdG9yZSIsInJ1bGUiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwicnVuIiwiaHRtbCIsIm9uTW91bnRlZCIsInByb3BzIiwiX19wcm9wcyIsInN0eWxlIiwiY29tcHV0ZWQiLCJkZXRlcm1pbmUiLCJyZWFzb24iLCJncmFkZSIsInByb2JhYmx5IiwidGhlbWVPdmVycmlkZXMiLCJkaXYiLCJjcmVhdGVBcHAiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sVUFBQUEsSUFBWUMsRUFBSSxFQUFLLEdBRXJCQyxJQUFPO0FBQUEsTUFD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
