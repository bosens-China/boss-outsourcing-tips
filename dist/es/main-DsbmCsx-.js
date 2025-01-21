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
import { v as j } from "./uuid-DPrBhu07.js";
import { p as J, i as $e } from "./lodash-es-CqrSZx9w.js";
const Le = { class: "min-h-350px" }, Ie = { class: "flex items-center" }, Me = /* @__PURE__ */ I({
  __name: "manage",
  setup(a) {
    const e = T(!1), s = [
      {
        tab: "过滤关键词",
        name: "keyword",
        components: N(() => import("./keywords-TBrlew5K.js"))
      },
      {
        tab: "黑名单（公司）",
        name: "blacklist",
        components: N(() => import("./blacklist-CpZE96jZ.js"))
      },
      {
        tab: "白名单（公司）",
        name: "whiteList",
        components: N(() => import("./white-list-iQwcEqFP.js"))
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
          title: "boss 外包提示设置界面"
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
], Ne = [], O = "1.1.0", B = {
  blacklist: He.map((a) => ({
    value: a,
    id: j()
  })),
  whitelist: Ne.map((a) => ({
    value: a,
    id: j()
  })),
  keywords: ze.map((a) => ({
    value: a,
    type: "string",
    id: j()
  }))
}, Ae = `blacklist_${O}`, qe = `whitelist_${O}`, Re = `keywords_${O}`;
var Q, X, Y;
const M = ce({
  blacklist: q((Q = localStorage.getItem(Ae)) != null ? Q : "") || B.blacklist,
  whitelist: q((X = localStorage.getItem(qe)) != null ? X : "") || B.whitelist,
  keywords: q((Y = localStorage.getItem(Re)) != null ? Y : "") || B.keywords
}), { blacklist: P, whitelist: K, keywords: V } = ie(M);
E(
  () => M,
  () => {
    localStorage.setItem("blacklist", R(P.value)), localStorage.setItem("whitelist", R(K.value)), localStorage.setItem("keywords", R(V.value));
  },
  { deep: !0 }
);
const tt = (a) => {
  for (const e of a) {
    const s = J(e, ["type", "value"]);
    V.value.some(
      (t) => $e(J(t, ["type", "value"]), s)
    ) || V.value.push(e);
  }
}, st = (a) => {
  for (const e of a)
    P.value.some(({ value: r }) => r === e.value) || P.value.push(e);
}, nt = (a) => {
  for (const e of a)
    K.value.some(({ value: r }) => r === e.value) || K.value.push(e);
};
class je {
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
const Be = new je(), De = () => {
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
        const { locations: S, result: p } = Be.highlightArea(
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
}), Ke = { key: 0 }, Ve = { key: 1 }, Oe = { style: { whiteSpace: "pre" } }, Fe = { key: 0 }, Ue = /* @__PURE__ */ I({
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
                f(r) ? (d(), v("span", Ve, "⚠️ 可能为外包公司")) : x("", !0),
                o[0] || (o[0] = b("span", null, "「悬浮查看详情」", -1))
              ]),
              _: 1
            }, 8, ["grade"])
          ]),
          default: i(() => [
            b("p", Oe, [
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
  V as k,
  tt as u,
  K as w
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1Ec2JtQ3N4LS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS52dWUiLCIuLi8uLi9zcmMvc3RvcmUudHMiLCIuLi8uLi9zcmMvdXRpbHMvaGlnaGxpZ2h0LnRzIiwiLi4vLi4vc3JjL2hvb2tzL3VzZS1oaWdobGlnaHQudHMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9yZXN1bHRzLWRpc3BsYXkvYnRuLnZ1ZSIsIi4uLy4uL3NyYy9jb21wb25lbnRzL3Jlc3VsdHMtZGlzcGxheS9yZXN1bHRzLWRpc3BsYXkudnVlIiwiLi4vLi4vc3JjL0FwcC52dWUiLCIuLi8uLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuY29uc3Qgc2hvd01vZGFsID0gcmVmKGZhbHNlKTtcblxuY29uc3QgdGFicyA9IFtcbiAge1xuICAgIHRhYjogJ+i/h+a7pOWFs+mUruivjScsXG4gICAgbmFtZTogJ2tleXdvcmQnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9rZXl3b3Jkcy52dWUnKSksXG4gIH0sXG4gIHtcbiAgICB0YWI6ICfpu5HlkI3ljZXvvIjlhazlj7jvvIknLFxuICAgIG5hbWU6ICdibGFja2xpc3QnLFxuICAgIGNvbXBvbmVudHM6IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IGltcG9ydCgnLi9ibGFja2xpc3QudnVlJykpLFxuICB9LFxuICB7XG4gICAgdGFiOiAn55m95ZCN5Y2V77yI5YWs5Y+477yJJyxcbiAgICBuYW1lOiAnd2hpdGVMaXN0JyxcbiAgICBjb21wb25lbnRzOiBkZWZpbmVBc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4vd2hpdGUtbGlzdC52dWUnKSksXG4gIH0sXG5dO1xuXG5jb25zdCBhbGxSZWYgPSByZWY8XG4gIHtcbiAgICBzYXZlQWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVtdXG4+KCk7XG5jb25zdCBhY3RpdmVUYWIgPSByZWYoJ2tleXdvcmQnKTtcbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5cbmNvbnN0IG9uU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgZm9yIChjb25zdCB7IHNhdmVBbGwsIG5hbWUgfSBvZiBhbGxSZWYudmFsdWU/LnRvU29ydGVkKCh4LCB5KSA9PiB7XG4gICAgY29uc3QgeEluZGV4ID0gdGFicy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0geC5uYW1lKTtcbiAgICBjb25zdCB5SW5kZXggPSB0YWJzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSB5Lm5hbWUpO1xuICAgIHJldHVybiB4SW5kZXggLSB5SW5kZXg7XG4gIH0pIHx8IFtdKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNhdmVBbGwoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGFjdGl2ZVRhYi52YWx1ZSA9IG5hbWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNob3dNb2RhbC52YWx1ZSA9IGZhbHNlO1xuICBtZXNzYWdlLnN1Y2Nlc3MoYOS/neWtmOWFqOmDqOiuvue9ruaIkOWKn+OAgmApO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxuLXRvb2x0aXAgdHJpZ2dlcj1cImhvdmVyXCI+XG4gICAgPHRlbXBsYXRlICN0cmlnZ2VyPlxuICAgICAgPG4tZmxvYXQtYnV0dG9uXG4gICAgICAgIHJpZ2h0PVwiMjVweFwiXG4gICAgICAgIHRvcD1cIjQwdmhcIlxuICAgICAgICBzaGFwZT1cInNxdWFyZVwiXG4gICAgICAgIEBjbGljaz1cInNob3dNb2RhbCA9IHRydWVcIlxuICAgICAgICBjbGFzcz1cInotMTAwXCJcbiAgICAgID5cbiAgICAgICAgPG4taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaS1ieXRlc2l6ZS1zZXR0aW5ncyB0ZXh0LXNpemUteGxcIj48L2Rpdj5cbiAgICAgICAgPC9uLWljb24+XG4gICAgICA8L24tZmxvYXQtYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG4gICAg5omT5byA6K6+572u6Z2i5p2/XG4gIDwvbi10b29sdGlwPlxuXG4gIDxuLW1vZGFsXG4gICAgY2xhc3M9XCJ3LTEwMDBweFwiXG4gICAgdi1tb2RlbDpzaG93PVwic2hvd01vZGFsXCJcbiAgICBwcmVzZXQ9XCJjYXJkXCJcbiAgICB0aXRsZT1cImJvc3Mg5aSW5YyF5o+Q56S66K6+572u55WM6Z2iXCJcbiAgPlxuICAgIDxuLXRhYnMgdHlwZT1cImxpbmVcIiBhbmltYXRlZCBwbGFjZW1lbnQ9XCJsZWZ0XCIgdi1tb2RlbDp2YWx1ZT1cImFjdGl2ZVRhYlwiPlxuICAgICAgPG4tdGFiLXBhbmVcbiAgICAgICAgdi1mb3I9XCJpdGVtIG9mIHRhYnNcIlxuICAgICAgICA6a2V5PVwiaXRlbS5uYW1lXCJcbiAgICAgICAgdi1iaW5kPVwiaXRlbVwiXG4gICAgICAgIGRpc3BsYXktZGlyZWN0aXZlPVwic2hvdzpsYXp5XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi1oLTM1MHB4XCI+XG4gICAgICAgICAgPFN1c3BlbnNlPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICA6aXM9XCJpdGVtLmNvbXBvbmVudHNcIlxuICAgICAgICAgICAgICByZWY9XCJhbGxSZWZcIlxuICAgICAgICAgICAgICA6bmFtZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgICA+PC9jb21wb25lbnQ+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZmFsbGJhY2s+IExvYWRpbmcuLi4gPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbi10YWItcGFuZT5cbiAgICA8L24tdGFicz5cbiAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCI+PC9kaXY+XG4gICAgICAgIDxuLXNwYWNlPlxuICAgICAgICAgIDxuLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9uU2F2ZVwiPuS/neWtmOiuvue9rjwvbi1idXR0b24+XG4gICAgICAgICAgPG4tYnV0dG9uIEBjbGljaz1cInNob3dNb2RhbCA9IGZhbHNlXCI+5Y+W5raIPC9uLWJ1dHRvbj5cbiAgICAgICAgPC9uLXNwYWNlPlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9uLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbiIsImltcG9ydCBrZXl3b3Jkc0RhdGEgZnJvbSAnLi9jb25zdGFudC9rZXl3b3Jkcy5qc29uJztcbmltcG9ydCBibGFja2xpc3REYXRhIGZyb20gJy4vY29uc3RhbnQvYmxhY2tsaXN0Lmpzb24nO1xuaW1wb3J0IHdoaXRlTGlzdERhdGEgZnJvbSAnLi9jb25zdGFudC93aGl0ZS1saXN0Lmpzb24nO1xuaW1wb3J0IHsgc2VyaWFsaXplLCBkZXNlcmlhbGl6ZSB9IGZyb20gJ3Nlcm92YWwnO1xuaW1wb3J0IHsgdjYgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxhY2tsaXN0IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2hpdGVsaXN0IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLZXl3b3JkIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogJ3N0cmluZycgfCAncmVnZXhwJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdG9yZSB7XG4gIGJsYWNrbGlzdDogQmxhY2tsaXN0W107XG4gIHdoaXRlbGlzdDogV2hpdGVsaXN0W107XG4gIGtleXdvcmRzOiBLZXl3b3JkW107XG59XG5cbmNvbnN0IGRlZmF1bHRTdG9yZTogU3RvcmUgPSB7XG4gIGJsYWNrbGlzdDogYmxhY2tsaXN0RGF0YS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgdmFsdWU6IGl0ZW0sXG4gICAgaWQ6IHV1aWQoKSxcbiAgfSkpLFxuICB3aGl0ZWxpc3Q6IHdoaXRlTGlzdERhdGEubWFwKChpdGVtKSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtLFxuICAgIGlkOiB1dWlkKCksXG4gIH0pKSxcbiAga2V5d29yZHM6IGtleXdvcmRzRGF0YS5tYXAoKGl0ZW0pID0+ICh7XG4gICAgdmFsdWU6IGl0ZW0sXG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgaWQ6IHV1aWQoKSxcbiAgfSkpLFxufTtcblxuZXhwb3J0IGNvbnN0IGJsYWNrbGlzdEtleSA9IGBibGFja2xpc3RfJHt2ZXJzaW9ufWA7XG5leHBvcnQgY29uc3Qgd2hpdGVsaXN0S2V5ID0gYHdoaXRlbGlzdF8ke3ZlcnNpb259YDtcbmV4cG9ydCBjb25zdCBrZXl3b3Jkc0tleSA9IGBrZXl3b3Jkc18ke3ZlcnNpb259YDtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gcmVhY3RpdmU8U3RvcmU+KHtcbiAgYmxhY2tsaXN0OlxuICAgIGRlc2VyaWFsaXplKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGJsYWNrbGlzdEtleSkgPz8gJycpIHx8XG4gICAgZGVmYXVsdFN0b3JlLmJsYWNrbGlzdCxcbiAgd2hpdGVsaXN0OlxuICAgIGRlc2VyaWFsaXplKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHdoaXRlbGlzdEtleSkgPz8gJycpIHx8XG4gICAgZGVmYXVsdFN0b3JlLndoaXRlbGlzdCxcbiAga2V5d29yZHM6XG4gICAgZGVzZXJpYWxpemUobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5d29yZHNLZXkpID8/ICcnKSB8fFxuICAgIGRlZmF1bHRTdG9yZS5rZXl3b3Jkcyxcbn0pO1xuXG5jb25zdCB7IGJsYWNrbGlzdCwgd2hpdGVsaXN0LCBrZXl3b3JkcyB9ID0gdG9SZWZzKHN0b3JlKTtcblxuZXhwb3J0IHsgYmxhY2tsaXN0LCB3aGl0ZWxpc3QsIGtleXdvcmRzIH07XG5cbi8vIOiHquWKqOS/neWtmOWIsOacrOWcsFxud2F0Y2goXG4gICgpID0+IHN0b3JlLFxuICAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JsYWNrbGlzdCcsIHNlcmlhbGl6ZShibGFja2xpc3QudmFsdWUpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2hpdGVsaXN0Jywgc2VyaWFsaXplKHdoaXRlbGlzdC52YWx1ZSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXl3b3JkcycsIHNlcmlhbGl6ZShrZXl3b3Jkcy52YWx1ZSkpO1xuICB9LFxuICB7IGRlZXA6IHRydWUgfSxcbik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVLZXl3b3JkcyA9IChuZXdEYXRhOiBLZXl3b3JkW10pID0+IHtcbiAgZm9yIChjb25zdCBpdGVtIG9mIG5ld0RhdGEpIHtcbiAgICBjb25zdCBkaWZmdmFsdWUgPSBfLnBpY2soaXRlbSwgWyd0eXBlJywgJ3ZhbHVlJ10pO1xuICAgIGNvbnN0IHJlc3VsdCA9IGtleXdvcmRzLnZhbHVlLnNvbWUoKGl0ZW0pID0+XG4gICAgICBfLmlzRXF1YWwoXy5waWNrKGl0ZW0sIFsndHlwZScsICd2YWx1ZSddKSwgZGlmZnZhbHVlKSxcbiAgICApO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBrZXl3b3Jkcy52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsYWNrbGlzdCA9IChuZXdEYXRhOiBCbGFja2xpc3RbXSkgPT4ge1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbmV3RGF0YSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJsYWNrbGlzdC52YWx1ZS5zb21lKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBpdGVtLnZhbHVlKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgYmxhY2tsaXN0LnZhbHVlLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlV2hpdGVsaXN0ID0gKG5ld0RhdGE6IFdoaXRlbGlzdFtdKSA9PiB7XG4gIGZvciAoY29uc3QgaXRlbSBvZiBuZXdEYXRhKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gd2hpdGVsaXN0LnZhbHVlLnNvbWUoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGl0ZW0udmFsdWUpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB3aGl0ZWxpc3QudmFsdWUucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbn07XG4iLCJleHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEhpZ2hsaWdodFRleHQgPSBzdHJpbmcgfCBSZWdFeHA7XG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQge1xuICAvKipcbiAgICog6auY5Lqu5Yy65Z+fXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqIEBwYXJhbSB7KEhpZ2hsaWdodFRleHQgfCBIaWdobGlnaHRUZXh0W10pfSBoaWdobGlnaHRUZXh0XG4gICAqIEByZXR1cm4geyp9XG4gICAqIEBtZW1iZXJvZiBIaWdobGlnaHRcbiAgICovXG4gIGhpZ2hsaWdodEFyZWEodGV4dDogc3RyaW5nLCBoaWdobGlnaHRUZXh0OiBIaWdobGlnaHRUZXh0IHwgSGlnaGxpZ2h0VGV4dFtdKSB7XG4gICAgY29uc3QgYXJyID0gQXJyYXkuaXNBcnJheShoaWdobGlnaHRUZXh0KSA/IGhpZ2hsaWdodFRleHQgOiBbaGlnaGxpZ2h0VGV4dF07XG4gICAgY29uc3QgbG9jYXRpb25zID0gYXJyXG4gICAgICAubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5VGhlSGlnaGxpZ2h0ZWRQb3NpdGlvbih0ZXh0LCBpdGVtKTtcbiAgICAgIH0pXG4gICAgICAuZmxhdCgyKTtcblxuICAgIGNvbnN0IG9wdGltaXplTG9jYXRpb25zID0gdGhpcy5tZXJnZUxvY2F0aW9ucyhsb2NhdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IHRoaXMucmVuZGVyKHRleHQsIG9wdGltaXplTG9jYXRpb25zKSxcbiAgICAgIG9wdGltaXplTG9jYXRpb25zOiBvcHRpbWl6ZUxvY2F0aW9ucyxcbiAgICAgIGxvY2F0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIodGV4dDogc3RyaW5nLCByYW5nZXM6IExvY2F0aW9uW10pIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRUZXh0ID0gJyc7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSByYW5nZTtcblxuICAgICAgLy8g5re75Yqg6Z2e6auY5Lqu6YOo5YiGXG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgc3RhcnQpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRUZXh0ICs9IHRleHQuc2xpY2UoY3VycmVudEluZGV4LCBzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIC8vIOa3u+WKoOmrmOS6rumDqOWIhlxuICAgICAgaGlnaGxpZ2h0ZWRUZXh0ICs9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+JHt0ZXh0LnNsaWNlKFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kLFxuICAgICAgKX08L3NwYW4+YDtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGVuZDsgLy8g5pu05paw5b2T5YmN57Si5byVXG4gICAgfVxuXG4gICAgLy8g5re75Yqg5Ymp5L2Z5pyq6auY5Lqu55qE5paH5pysXG4gICAgaWYgKGN1cnJlbnRJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICBoaWdobGlnaHRlZFRleHQgKz0gdGV4dC5zbGljZShjdXJyZW50SW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFRleHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICog6auY5Lqu5paH5pys5L2N572u5p+l6K+iXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0VGV4dH0gaGlnaGxpZ2h0XG4gICAqIEByZXR1cm4geyp9XG4gICAqIEBtZW1iZXJvZiBIaWdobGlnaHRcbiAgICovXG4gIHByaXZhdGUgcXVlcnlUaGVIaWdobGlnaHRlZFBvc2l0aW9uKHRleHQ6IHN0cmluZywgaGlnaGxpZ2h0OiBIaWdobGlnaHRUZXh0KSB7XG4gICAgY29uc3QgbG9jYXRpb25SZWNvcmQ6IChMb2NhdGlvbiAmIHsgdGV4dDogc3RyaW5nIH0pW10gPSBbXTtcbiAgICBjb25zdCByZWcgPVxuICAgICAgaGlnaGxpZ2h0IGluc3RhbmNlb2YgUmVnRXhwID8gaGlnaGxpZ2h0IDogbmV3IFJlZ0V4cChoaWdobGlnaHQsICdnJyk7XG5cbiAgICBsZXQgcmVzdWx0ID0gcmVnLmV4ZWModGV4dCk7XG5cbiAgICB3aGlsZSAocmVzdWx0KSB7XG4gICAgICBjb25zdCBoaWdobGlnaHRUZXh0ID0gcmVzdWx0WzBdO1xuICAgICAgbG9jYXRpb25SZWNvcmQucHVzaCh7XG4gICAgICAgIHN0YXJ0OiByZXN1bHQuaW5kZXgsXG4gICAgICAgIGVuZDogcmVzdWx0LmluZGV4ICsgaGlnaGxpZ2h0VGV4dC5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGhpZ2hsaWdodFRleHQsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVnLmZsYWdzLmluY2x1ZGVzKCdnJykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSByZWcuZXhlYyh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uUmVjb3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIOS9jee9ruinhOWImeWQiOW5tlxuICAgKiAxLiDlpITnkIbop4TliJnlpoLkuIvvvIzlpoLmnpzotbflp4vkvY3nva7nm7jlkIzliJnliJnlkIjlubbmnIDlpKfkvY3nva5cbiAgICogMi4g5aaC5p6c5YWD57Sg55qE5byA5aeL57uT5p2f5L2N572u5LiO5YW25LuW5oiQ5ZGY55qE5L2N572u5aSn5bCP55u46YK75oiW6ICF5Zyo5YaF5YiZ5ZCI5bm2XG4gICAqIEBwYXJhbSB7TG9jYXRpb25bXX0gbG9jYXRpb25zXG4gICAqIEByZXR1cm4geyp9XG4gICAqIEBtZW1iZXJvZiBIaWdobGlnaHRcbiAgICovXG4gIG1lcmdlTG9jYXRpb25zKGxvY2F0aW9uczogTG9jYXRpb25bXSkge1xuICAgIC8vIOWFiOaMiSBzdGFydCDmjpLluo/vvIzlpoLmnpwgc3RhcnQg55u45ZCM5oyJIGVuZCDmjpLluo9cbiAgICBjb25zdCByYW5nZXMgPSBsb2NhdGlvbnMudG9Tb3J0ZWQoXG4gICAgICAoYSwgYikgPT4gYS5zdGFydCAtIGIuc3RhcnQgfHwgYS5lbmQgLSBiLmVuZCxcbiAgICApO1xuICAgIC8vIOWmguaenOiMg+WbtOaVsOe7hOS4uuepuuaIluWPquacieS4gOS4quiMg+WbtO+8jOebtOaOpei/lOWbnlxuICAgIGlmIChyYW5nZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiByYW5nZXM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBMb2NhdGlvbltdID0gW107XG4gICAgbGV0IGN1cnJlbnQ6IG51bGwgfCBMb2NhdGlvbiA9IG51bGw7XG5cbiAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIC8vIOWIneWni+WMluesrOS4gOS4quiMg+WbtFxuICAgICAgICBjdXJyZW50ID0geyAuLi5yYW5nZSB9O1xuICAgICAgfSBlbHNlIGlmIChyYW5nZS5zdGFydCA8PSBjdXJyZW50LmVuZCkge1xuICAgICAgICAvLyDlpoLmnpzlvZPliY3ojIPlm7TkuI7mlrDojIPlm7Tph43lj6DmiJbnm7jpgrvvvIzlkIjlubZcbiAgICAgICAgY3VycmVudC5lbmQgPSBNYXRoLm1heChjdXJyZW50LmVuZCwgcmFuZ2UuZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWmguaenOS4jemHjeWPoO+8jOS/neWtmOW9k+WJjeiMg+WbtOW5tuabtOaWsOS4uuaWsOiMg+WbtFxuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IHsgLi4ucmFuZ2UgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmt7vliqDmnIDlkI7kuIDkuKrojIPlm7RcbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodCgpO1xuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi91dGlscy9oaWdobGlnaHQnO1xuXG5jb25zdCBoaWdobGlnaHQgPSBuZXcgSGlnaGxpZ2h0KCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFyayB7XG4gIHJlYXNvbjogU2V0PHN0cmluZz47XG4gIGdyYWRlOiAna2V5d29yZCcgfCAnYmxhY2tsaXN0Jztcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUhpZ2hsaWdodCA9ICgpID0+IHtcbiAgY29uc3QgY29tcGFueUNsYXNzID0gYGFba2E9XCJqb2ItZGV0YWlsLWNvbXBhbnlfY3VzdG9tcGFnZVwiXWA7XG5cbiAgY29uc3Qgam9iVGl0bGVDbGFzcyA9ICcuaW5mby1wcmltYXJ5IGgxJztcblxuICBjb25zdCBqb2JEZXNjQ2xhc3MgPSAnLmpvYi1kZXRhaWwtY29tcGFueSAuam9iLXNlYy10ZXh0JztcblxuICBjb25zdCBjb21wYW55RGVzY0NsYXNzID0gJy5qb2ItZGV0YWlsLXNlY3Rpb24gLmpvYi1zZWMtdGV4dCc7XG5cbiAgY29uc3QgY29tcGFueUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbXBhbnlDbGFzcyk7XG4gIGNvbnN0IGpvYlRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iVGl0bGVDbGFzcyk7XG4gIGNvbnN0IGpvYkRlc2NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JEZXNjQ2xhc3MpO1xuICBjb25zdCBjb21wYW55RGVzY0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbXBhbnlEZXNjQ2xhc3MpO1xuXG4gIGNvbnN0IHJ1bGVzID0ge1xuICAgIC8vIOWFrOWPuOWQjeensFxuICAgIGNvbXBhbnk6IHtcbiAgICAgIGh0bWw6IGNvbXBhbnlFbGVtZW50Py5pbm5lckhUTUwgfHwgJycsXG4gICAgICB0ZXh0OiAoY29tcGFueUVsZW1lbnQ/LnRleHRDb250ZW50IHx8ICcnKS50cmltKCksXG4gICAgICBlbDogY29tcGFueUVsZW1lbnQsXG4gICAgICBjbGFzczogY29tcGFueUNsYXNzLFxuICAgIH0sXG4gICAgLy8g6IGM5L2N5ZCN56ewXG4gICAgam9iVGl0bGU6IHtcbiAgICAgIGh0bWw6IGpvYlRpdGxlRWxlbWVudD8uaW5uZXJIVE1MIHx8ICcnLFxuICAgICAgdGV4dDogam9iVGl0bGVFbGVtZW50Py50ZXh0Q29udGVudCB8fCAnJyxcbiAgICAgIGVsOiBqb2JUaXRsZUVsZW1lbnQsXG4gICAgICBjbGFzczogam9iVGl0bGVDbGFzcyxcbiAgICB9LFxuICAgIC8vIOiBjOS9jeaPj+i/sFxuICAgIGpvYkRlc2M6IHtcbiAgICAgIGh0bWw6IGpvYkRlc2NFbGVtZW50Py5pbm5lckhUTUwgfHwgJycsXG4gICAgICB0ZXh0OiBqb2JEZXNjRWxlbWVudD8udGV4dENvbnRlbnQgfHwgJycsXG4gICAgICBlbDogam9iRGVzY0VsZW1lbnQsXG4gICAgICBjbGFzczogam9iRGVzY0NsYXNzLFxuICAgIH0sXG4gICAgLy8g5YWs5Y+45o+P6L+wXG4gICAgY29tcGFueURlc2M6IHtcbiAgICAgIGh0bWw6IGNvbXBhbnlEZXNjRWxlbWVudD8uaW5uZXJIVE1MIHx8ICcnLFxuICAgICAgdGV4dDogY29tcGFueURlc2NFbGVtZW50Py50ZXh0Q29udGVudCB8fCAnJyxcbiAgICAgIGVsOiBjb21wYW55RGVzY0VsZW1lbnQsXG4gICAgICBjbGFzczogY29tcGFueURlc2NDbGFzcyxcbiAgICB9LFxuICB9O1xuXG4gIC8vIOi/mOWOn+S5i+WJjeeahOagt+W8j1xuICBjb25zdCByZXN0b3JlID0gKCkgPT4ge1xuICAgIE9iamVjdC52YWx1ZXMocnVsZXMpLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xhc3M6IGNsYXNzTmFtZSB9ID0gcnVsZTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHJ1bGUuaHRtbDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC52YWx1ZSA9IHsgcmVhc29uOiBuZXcgU2V0KCksIGdyYWRlOiAnYmxhY2tsaXN0JyB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IHJlZjxNYXJrPih7IHJlYXNvbjogbmV3IFNldCgpLCBncmFkZTogJ2JsYWNrbGlzdCcgfSk7XG5cbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHJlc3RvcmUoKTtcbiAgICBjb25zdCB7IGJsYWNrbGlzdCwgd2hpdGVsaXN0LCBrZXl3b3JkcyB9ID0gc3RvcmU7XG4gICAgLy8g5aaC5p6c55m95ZCN5Y2V55u05o6l6Lez6L+HXG4gICAgaWYgKHdoaXRlbGlzdC5zb21lKChmKSA9PiBmLnZhbHVlID09PSBydWxlcy5jb21wYW55LnRleHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIOWmguaenOm7keWQjeWNleebtOaOpeagh+iusOWHuuadpVxuICAgIGlmIChibGFja2xpc3Quc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gcnVsZXMuY29tcGFueS50ZXh0KSkge1xuICAgICAgaWYgKCFydWxlcy5jb21wYW55LmVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC52YWx1ZS5ncmFkZSA9ICdibGFja2xpc3QnO1xuXG4gICAgICByZXN1bHQudmFsdWUucmVhc29uLmFkZChydWxlcy5jb21wYW55LnRleHQpO1xuXG4gICAgICBydWxlcy5jb21wYW55LmVsLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIj4ke3J1bGVzLmNvbXBhbnkudGV4dH08L3NwYW4+YDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBbcnVsZXMuam9iVGl0bGUsIHJ1bGVzLmNvbXBhbnlEZXNjLCBydWxlcy5qb2JEZXNjXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCB7IGxvY2F0aW9ucywgcmVzdWx0OiBodG1sIH0gPSBoaWdobGlnaHQuaGlnaGxpZ2h0QXJlYShcbiAgICAgICAgcnVsZS50ZXh0LFxuICAgICAgICBrZXl3b3Jkcy5tYXAoKGYpID0+IGYudmFsdWUpLFxuICAgICAgKTtcbiAgICAgIGlmICghbG9jYXRpb25zLmxlbmd0aCB8fCAhcnVsZS5lbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBydWxlLmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICBsb2NhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICByZXN1bHQudmFsdWUuZ3JhZGUgPSAna2V5d29yZCc7XG4gICAgICAgIHJlc3VsdC52YWx1ZS5yZWFzb24uYWRkKGAke2l0ZW0udGV4dH1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgcnVuKCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcnVuLFxuICAgIHJlc3VsdCxcbiAgfTtcbn07XG4iLCI8dGVtcGxhdGU+XG4gIDxhIGNsYXNzPVwiYnRuXCIgOnN0eWxlPVwic3R5bGVcIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgdHlwZSB7IFN0eWxlVmFsdWUgfSBmcm9tICd2dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgZ3JhZGU6ICdkZXRlcm1pbmUnIHwgJ3Byb2JhYmx5Jztcbn0+KCk7XG5cbmNvbnN0IHN0eWxlID0gY29tcHV0ZWQ8U3R5bGVWYWx1ZT4oKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbWluV2lkdGg6ICc1NXB4JyxcbiAgICBjb2xvcjogcHJvcHMuZ3JhZGUgPT09ICdwcm9iYWJseScgPyAnI2ZhYWQxNCcgOiAnI2ZmNGQ0ZicsXG4gICAgcGFkZGluZzogJzAgMTJweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgfTtcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDx0ZWxlcG9ydCB0bz1cIi5idG4tY29udGFpbmVyXCIgdi1pZj1cImRldGVybWluZSB8fCBwcm9iYWJseVwiPlxuICAgIDxuLXRvb2x0aXAgdHJpZ2dlcj1cImhvdmVyXCI+XG4gICAgICA8dGVtcGxhdGUgI3RyaWdnZXI+XG4gICAgICAgIDxCdG4gOmdyYWRlPVwiZGV0ZXJtaW5lID8gJ2RldGVybWluZScgOiAncHJvYmFibHknXCI+XG4gICAgICAgICAgPHNwYW4gdi1pZj1cImRldGVybWluZVwiPuKdjCDlpJbljIXlhazlj7g8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gdi1pZj1cInByb2JhYmx5XCI+4pqg77iPIOWPr+iDveS4uuWkluWMheWFrOWPuDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7jgIzmgqzmta7mn6XnnIvor6bmg4XjgI08L3NwYW4+XG4gICAgICAgIDwvQnRuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxwIDpzdHlsZT1cInsgd2hpdGVTcGFjZTogJ3ByZScgfVwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInJlc3VsdC5ncmFkZSA9PT0gJ2JsYWNrbGlzdCdcIj5cbiAgICAgICAgICA8cD7lhazlj7jlkI3np7DkuLrlpJbljIXvvJp7eyBBcnJheS5mcm9tKHJlc3VsdC5yZWFzb24pWzBdIH19PC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInJlc3VsdC5ncmFkZSA9PT0gJ2tleXdvcmQnXCI+XG4gICAgICAgICAgPHA+5Ye6546w5LqG5Lul5LiL5YWz6ZSu6K+N77yaPC9wPlxuICAgICAgICAgIDxwIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBvZiByZXN1bHQucmVhc29uXCIgOmtleT1cIml0ZW1cIj5cbiAgICAgICAgICAgIHt7IGluZGV4ICsgMSB9fS4g44CMe3sgaXRlbSB9feOAjVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcD5cbiAgICA8L24tdG9vbHRpcD5cbiAgPC90ZWxlcG9ydD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB0eXBlIE1hcmsgfSBmcm9tICdAL2hvb2tzL3VzZS1oaWdobGlnaHQnO1xuaW1wb3J0IEJ0biBmcm9tICcuL2J0bi52dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgcmVzdWx0OiBNYXJrO1xufT4oKTtcblxuLy8g56Gu5a6a5Li65aSW5YyF5YWs5Y+4XG5jb25zdCBkZXRlcm1pbmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGNvbnN0IHsgcmVhc29uLCBncmFkZSB9ID0gcHJvcHMucmVzdWx0O1xuICBpZiAoZ3JhZGUgPT09ICdibGFja2xpc3QnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlYXNvbi5zaXplID49IDM7XG59KTtcblxuLy8g5Y+v6IO95Li65aSW5YyF5YWs5Y+4XG5jb25zdCBwcm9iYWJseSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgY29uc3QgeyByZWFzb24gfSA9IHByb3BzLnJlc3VsdDtcbiAgcmV0dXJuIHJlYXNvbi5zaXplIDwgMyAmJiBkZXRlcm1pbmUudmFsdWUgPT09IGZhbHNlO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbnAsXG5kaXYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG48L3N0eWxlPlxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB0eXBlIHsgR2xvYmFsVGhlbWVPdmVycmlkZXMgfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQgbWFuYWdlIGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLnZ1ZSc7XG5pbXBvcnQgeyBkYXRlWmhDTiwgemhDTiB9IGZyb20gJ25haXZlLXVpJztcbmltcG9ydCB7IHVzZUhpZ2hsaWdodCB9IGZyb20gJy4vaG9va3MvdXNlLWhpZ2hsaWdodCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IFJlc3VsdHNEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9yZXN1bHRzLWRpc3BsYXkvcmVzdWx0cy1kaXNwbGF5LnZ1ZSc7XG5cbmNvbnN0IHRoZW1lT3ZlcnJpZGVzOiBHbG9iYWxUaGVtZU92ZXJyaWRlcyA9IHtcbiAgY29tbW9uOiB7XG4gICAgcHJpbWFyeUNvbG9yOiAnIzQyYjg4MycsXG4gIH0sXG4gIEZvcm06IHtcbiAgICBmZWVkYmFja0hlaWdodE1lZGl1bTogJzAnLFxuICB9LFxufTtcblxuY29uc3QgeyByZXN1bHQsIHJ1biB9ID0gdXNlSGlnaGxpZ2h0KCk7XG5cbndhdGNoKFxuICAoKSA9PiBzdG9yZSxcbiAgKCkgPT4ge1xuICAgIHJ1bigpO1xuICB9LFxuICB7IGRlZXA6IHRydWUgfSxcbik7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8bi1jb25maWctcHJvdmlkZXJcbiAgICBpbmxpbmUtdGhlbWUtZGlzYWJsZWRcbiAgICA6dGhlbWUtb3ZlcnJpZGVzPVwidGhlbWVPdmVycmlkZXNcIlxuICAgIDpsb2NhbGU9XCJ6aENOXCJcbiAgICA6ZGF0ZS1sb2NhbGU9XCJkYXRlWmhDTlwiXG4gID5cbiAgICA8bi1tZXNzYWdlLXByb3ZpZGVyPlxuICAgICAgPG1hbmFnZT48L21hbmFnZT5cbiAgICAgIDxSZXN1bHRzRGlzcGxheSA6cmVzdWx0PVwicmVzdWx0XCI+PC9SZXN1bHRzRGlzcGxheT5cbiAgICA8L24tbWVzc2FnZS1wcm92aWRlcj5cbiAgPC9uLWNvbmZpZy1wcm92aWRlcj5cbjwvdGVtcGxhdGU+XG5cbjwhLS0gPHN0eWxlPlxuLmpvYi1ib2R5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuPC9zdHlsZT4gLS0+XG4iLCJpbXBvcnQgXCJ2aXJ0dWFsOnVuby5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gXCJ2dWVcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC52dWVcIjtcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuY3JlYXRlQXBwKEFwcCkubW91bnQoZGl2KTtcbiJdLCJuYW1lcyI6WyJzaG93TW9kYWwiLCJyZWYiLCJ0YWJzIiwiZGVmaW5lQXN5bmNDb21wb25lbnQiLCJhbGxSZWYiLCJhY3RpdmVUYWIiLCJtZXNzYWdlIiwidXNlTWVzc2FnZSIsIm9uU2F2ZSIsIl9fYXN5bmMiLCJzYXZlQWxsIiwibmFtZSIsIl9hIiwieCIsInkiLCJ4SW5kZXgiLCJmIiwieUluZGV4IiwiZSIsImRlZmF1bHRTdG9yZSIsImJsYWNrbGlzdERhdGEiLCJpdGVtIiwidXVpZCIsIndoaXRlTGlzdERhdGEiLCJrZXl3b3Jkc0RhdGEiLCJibGFja2xpc3RLZXkiLCJ2ZXJzaW9uIiwid2hpdGVsaXN0S2V5Iiwia2V5d29yZHNLZXkiLCJzdG9yZSIsInJlYWN0aXZlIiwiZGVzZXJpYWxpemUiLCJfYiIsIl9jIiwiYmxhY2tsaXN0Iiwid2hpdGVsaXN0Iiwia2V5d29yZHMiLCJ0b1JlZnMiLCJ3YXRjaCIsInNlcmlhbGl6ZSIsInVwZGF0ZUtleXdvcmRzIiwibmV3RGF0YSIsImRpZmZ2YWx1ZSIsIl8ucGljayIsIl8uaXNFcXVhbCIsInVwZGF0ZUJsYWNrbGlzdCIsInZhbHVlIiwidXBkYXRlV2hpdGVsaXN0IiwiSGlnaGxpZ2h0IiwidGV4dCIsImhpZ2hsaWdodFRleHQiLCJsb2NhdGlvbnMiLCJvcHRpbWl6ZUxvY2F0aW9ucyIsInJhbmdlcyIsImhpZ2hsaWdodGVkVGV4dCIsImN1cnJlbnRJbmRleCIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJoaWdobGlnaHQiLCJsb2NhdGlvblJlY29yZCIsInJlZyIsInJlc3VsdCIsImEiLCJiIiwiY3VycmVudCIsIl9fc3ByZWFkVmFsdWVzIiwidXNlSGlnaGxpZ2h0IiwiY29tcGFueUNsYXNzIiwiam9iVGl0bGVDbGFzcyIsImpvYkRlc2NDbGFzcyIsImNvbXBhbnlEZXNjQ2xhc3MiLCJjb21wYW55RWxlbWVudCIsImpvYlRpdGxlRWxlbWVudCIsImpvYkRlc2NFbGVtZW50IiwiY29tcGFueURlc2NFbGVtZW50IiwicnVsZXMiLCJyZXN0b3JlIiwicnVsZSIsImNsYXNzTmFtZSIsImVsZW1lbnQiLCJydW4iLCJodG1sIiwib25Nb3VudGVkIiwicHJvcHMiLCJfX3Byb3BzIiwic3R5bGUiLCJjb21wdXRlZCIsImRldGVybWluZSIsInJlYXNvbiIsImdyYWRlIiwicHJvYmFibHkiLCJ0aGVtZU92ZXJyaWRlcyIsImRpdiIsImNyZWF0ZUFwcCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxVQUFBQSxJQUFZQyxFQUFJLEVBQUssR0FFckJDLElBQU87QUFBQSxNQUNYO0FBQUEs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
