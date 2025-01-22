var L = Object.defineProperty;
var j = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var B = (i, u, a) => u in i ? L(i, u, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[u] = a, P = (i, u) => {
  for (var a in u || (u = {}))
    O.call(u, a) && B(i, a, u[a]);
  if (j)
    for (var a of j(u))
      T.call(u, a) && B(i, a, u[a]);
  return i;
};
var _ = (i, u, a) => new Promise((k, d) => {
  var x = (o) => {
    try {
      v(a.next(o));
    } catch (r) {
      d(r);
    }
  }, b = (o) => {
    try {
      v(a.throw(o));
    } catch (r) {
      d(r);
    }
  }, v = (o) => o.done ? k(o.value) : Promise.resolve(o.value).then(x, b);
  v((a = a.apply(i, u)).next());
});
import { k as D, u as q } from "./main-vfeR_f7a.js";
import { _ as z, u as E } from "./data-CX54v4WH.js";
import { c as F } from "./lodash-es-CqrSZx9w.js";
import { u as H, c as g, i as V, B as y, j as J, k as K, l as Q, m as G, n as W, o as X } from "./naive-ui-BGg8odC1.js";
import { v as I } from "./uuid-DPrBhu07.js";
import { k as Y, r as C, c as R, e as Z, J as w, Q as ee, M as f, N as $, L as n, O as p, I as te, j as c, n as ae } from "./vue-DUZbidQX.js";
const le = {
  class: "flex items-center"
}, ne = {
  class: "flex-1"
}, ve = /* @__PURE__ */ Y({
  __name: "keywords",
  props: {
    name: {}
  },
  setup(i, {
    expose: u
  }) {
    const a = C(F(D.value)), k = H(), d = C(""), x = R(() => a.value.filter((t) => d.value ? t.value.includes(d.value) : !0)), b = () => _(this, null, function* () {
      const e = (yield E("keywords.json")).map((l) => ({
        id: I(),
        value: l,
        type: "string"
      }));
      q(e), a.value = F(D.value);
    }), v = [{
      label: "文本",
      value: "string"
    }, {
      label: "正则",
      value: "regexp"
    }], o = C(null), r = Z({}), h = /* @__PURE__ */ new Map(), A = [{
      title: "内容",
      key: "value",
      render(t) {
        const e = a.value.find((s) => s.id === t.id);
        if (!r[t.id])
          return e.type === "regexp" ? n(J, null, {
            default: () => [c(" "), t.value, c(" ")]
          }) : t.value;
        const l = R(() => e.type === "string" ? "请输入关键词" : "请输入正则表达式"), N = a.value.findIndex((s) => s.id === t.id);
        return n("div", {
          class: "flex"
        }, [n(K, {
          class: "w-100px mr-12px",
          value: e.type,
          "onUpdate:value": (s) => e.type = s,
          options: v
        }, null), n(Q, {
          class: `flex-1 inp-${t.id}`,
          label: "",
          path: `${N}.value`,
          rule: [{
            asyncValidator() {
              return _(this, null, function* () {
                const s = e.value.trim(), U = a.value.filter((m) => m.type === e.type && m.id !== t.id);
                if (!s)
                  return Promise.reject(e.type === "string" ? "请输入关键词!" : "请输入正则表达式!");
                if (e.type === "regexp")
                  try {
                    return new RegExp(s), Promise.resolve();
                  } catch (m) {
                    return Promise.reject("请输入正确的正则表达式");
                  }
                if (U.some((m) => m.value === s))
                  return Promise.reject(e.type === "string" ? `关键词「${s}」已经存在！` : `正则表达式「${s}」已经存在！`);
              });
            },
            trigger: ["input", "blur"]
          }]
        }, {
          default: () => [n(V, {
            value: e.value,
            "onUpdate:value": (s) => e.value = s,
            placeholder: l.value
          }, null)]
        })]);
      }
    }, {
      title: "类型",
      key: "type",
      render(t) {
        var e;
        return (e = v.find((l) => l.value === t.type)) == null ? void 0 : e.label;
      },
      width: 80
    }, {
      title: "描述",
      key: "describe"
    }, {
      width: 200,
      title: "操作",
      key: "actions",
      render(t) {
        return r[t.id] ? n(g, null, {
          default: () => [n(y, {
            type: "primary",
            onClick: () => {
              var e;
              (e = o.value) == null || e.validate().then(() => {
                r[t.id] = !1;
              }).catch(() => {
              });
            }
          }, {
            default: () => [c("保存")]
          }), n(y, {
            onClick: () => {
              r[t.id] = !1;
              const e = h.get(t.id);
              if (!e) {
                a.value = a.value.filter((l) => l.id !== t.id);
                return;
              }
              a.value = a.value.map((l) => l.id === t.id ? e : l);
            }
          }, {
            default: () => [c("取消")]
          })]
        }) : n(g, null, {
          default: () => [n(y, {
            type: "primary",
            onClick: () => {
              r[t.id] = !0, h.set(t.id, P({}, t));
            }
          }, {
            default: () => [c("编辑")]
          }), n(G, {
            onPositiveClick: () => {
              a.value = a.value.filter((e) => e.id !== t.id), delete r[t.id], k.success("删除成功，保存设置后生效。");
            },
            onNegativeClick: () => {
            }
          }, {
            trigger: () => n(y, null, {
              default: () => [c("删除")]
            }),
            default: () => `确定删除关键词「${t.value}」吗？`
          })]
        });
      }
    }], M = () => {
      const t = I();
      a.value.push({
        type: "string",
        value: "",
        id: t
      }), r[t] = !0, ae(() => {
        document.querySelector(`.inp-${t} input`).focus();
      });
    };
    return u({
      saveAll: () => _(this, null, function* () {
        var e;
        yield (e = o.value) == null ? void 0 : e.validate();
        const t = a.value.map((l) => r[l.id] ? h.get(l.id) : l).filter((l) => !!(l != null && l.value));
        D.value = t;
      }),
      name: i.name
    }), (t, e) => {
      const l = W, N = X;
      return w(), ee(p(g), {
        vertical: ""
      }, {
        default: f(() => [$("div", le, [$("div", ne, [n(p(g), null, {
          default: f(() => [n(p(V), {
            value: p(d),
            "onUpdate:value": e[0] || (e[0] = (S) => te(d) ? d.value = S : null),
            placeholder: "请输入搜索的关键词"
          }, null, 8, ["value"]), n(z, {
            "update-function": b
          }, {
            default: f(() => e[1] || (e[1] = [c("从仓库更新数据")])),
            _: 1
          })]),
          _: 1
        })]), n(p(y), {
          type: "primary",
          onClick: M
        }, {
          icon: f(() => e[2] || (e[2] = [$("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: f(() => [e[3] || (e[3] = c(" 添加"))]),
          _: 1
        })]), n(N, {
          ref_key: "formRef",
          ref: o,
          "label-placement": "left",
          inline: "",
          model: p(a),
          "theme-overrides": {
            peers: {
              feedbackHeight: "0"
            }
          }
        }, {
          default: f(() => [n(l, {
            columns: A,
            data: p(x),
            pagination: !1,
            bordered: !1,
            "max-height": 250
          }, null, 8, ["data"])]),
          _: 1
        }, 8, ["model"])]),
        _: 1
      });
    };
  }
});
export {
  ve as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZHMtRjd6X3RRUUcuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hbmFnZS9rZXl3b3Jkcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bi1zcGFjZSB2ZXJ0aWNhbD5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgPG4tc3BhY2U+XG4gICAgICAgICAgPG4taW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9XCJrZXl3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5pCc57Si55qE5YWz6ZSu6K+NXCJcbiAgICAgICAgICA+PC9uLWlucHV0PlxuICAgICAgICAgIDxVcGRhdGVEYXRhIDp1cGRhdGUtZnVuY3Rpb249XCJ1cGRhdGVGdW5jdGlvblwiXG4gICAgICAgICAgICA+5LuO5LuT5bqT5pu05paw5pWw5o2uPC9VcGRhdGVEYXRhXG4gICAgICAgICAgPlxuICAgICAgICA8L24tc3BhY2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9uQWRkXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaS1ieXRlc2l6ZS1wbHVzIG10LS0zcHhcIj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAg5re75YqgPC9uLWJ1dHRvblxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxuLWZvcm1cbiAgICAgIHJlZj1cImZvcm1SZWZcIlxuICAgICAgbGFiZWwtcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICBpbmxpbmVcbiAgICAgIDptb2RlbD1cImRhdGFcIlxuICAgICAgOnRoZW1lLW92ZXJyaWRlcz1cIntcbiAgICAgICAgcGVlcnM6IHtcbiAgICAgICAgICBmZWVkYmFja0hlaWdodDogJzAnLFxuICAgICAgICB9LFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPG4tZGF0YS10YWJsZVxuICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICA6ZGF0YT1cInByZXNlbnRhdGlvbkRhdGFcIlxuICAgICAgICA6cGFnaW5hdGlvbj1cImZhbHNlXCJcbiAgICAgICAgOmJvcmRlcmVkPVwiZmFsc2VcIlxuICAgICAgICA6bWF4LWhlaWdodD1cIjI1MFwiXG4gICAgICAvPlxuICAgIDwvbi1mb3JtPlxuICA8L24tc3BhY2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c3hcIj5cbmltcG9ydCB0eXBlIHsgRGF0YVRhYmxlQ29sdW1ucywgRm9ybUluc3QgfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQge1xuICBOQnV0dG9uLFxuICBOU3BhY2UsXG4gIE5JbnB1dCxcbiAgTlNlbGVjdCxcbiAgTlBvcGNvbmZpcm0sXG4gIE5Gb3JtSXRlbSxcbn0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsga2V5d29yZHMsIHR5cGUgS2V5d29yZCwgdXBkYXRlS2V5d29yZHMgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCBVcGRhdGVEYXRhIGZyb20gJy4vdXBkYXRlLWRhdGEudnVlJztcblxuaW1wb3J0IHsgdjYgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdXBkYXRlRGF0YSB9IGZyb20gJ0AvYXBpL2RhdGEnO1xuXG5jb25zdCBkYXRhID0gcmVmKF8uY2xvbmVEZWVwKGtleXdvcmRzLnZhbHVlKSk7XG5jb25zdCBtZXNzYWdlID0gdXNlTWVzc2FnZSgpO1xuXG5jb25zdCBrZXl3b3JkID0gcmVmKCcnKTtcbmNvbnN0IHByZXNlbnRhdGlvbkRhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBkYXRhLnZhbHVlLmZpbHRlcigoZikgPT4ge1xuICAgIGlmIChrZXl3b3JkLnZhbHVlKSB7XG4gICAgICByZXR1cm4gZi52YWx1ZS5pbmNsdWRlcyhrZXl3b3JkLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHVwZGF0ZUZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVEYXRhPHN0cmluZ1tdPigna2V5d29yZHMuanNvbicpO1xuICBjb25zdCBuZXdEYXRhID0gcmVzdWx0Lm1hcCgoaXRlbSk6IEtleXdvcmQgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdXVpZCgpLFxuICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB9O1xuICB9KTtcbiAgdXBkYXRlS2V5d29yZHMobmV3RGF0YSk7XG4gIGRhdGEudmFsdWUgPSBfLmNsb25lRGVlcChrZXl3b3Jkcy52YWx1ZSk7XG59O1xuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAn5paH5pysJyxcbiAgICB2YWx1ZTogJ3N0cmluZycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ+ato+WImScsXG4gICAgdmFsdWU6ICdyZWdleHAnLFxuICB9LFxuXTtcbmNvbnN0IGZvcm1SZWYgPSByZWY8Rm9ybUluc3QgfCBudWxsPihudWxsKTtcblxuY29uc3QgZWRpdExpc3RzID0gcmVhY3RpdmU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHt9KTtcbi8vIOiusOW/huWAvO+8jOWPlua2iOS5i+WQjumcgOimgeaBouWkjVxuY29uc3QgY2FjaGVWYWx1ZSA9IG5ldyBNYXA8c3RyaW5nLCBLZXl3b3JkPigpO1xuXG5jb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5zPEtleXdvcmQ+ID0gW1xuICB7XG4gICAgdGl0bGU6ICflhoXlrrknLFxuICAgIGtleTogJ3ZhbHVlJyxcblxuICAgIHJlbmRlcihyb3cpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXRhLnZhbHVlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJvdy5pZCkhO1xuICAgICAgaWYgKCFlZGl0TGlzdHNbcm93LmlkXSkge1xuICAgICAgICBpZiAoY3VycmVudC50eXBlID09PSAncmVnZXhwJykge1xuICAgICAgICAgIHJldHVybiA8bi10YWc+IHtyb3cudmFsdWV9IDwvbi10YWc+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3cudmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmraPliJnooajovr7lvI8nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEudmFsdWUuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz17J2ZsZXgnfT5cbiAgICAgICAgICA8TlNlbGVjdFxuICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMHB4IG1yLTEycHhcIlxuICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT17Y3VycmVudC50eXBlfVxuICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgPjwvTlNlbGVjdD5cbiAgICAgICAgICA8TkZvcm1JdGVtXG4gICAgICAgICAgICBjbGFzcz17YGZsZXgtMSBpbnAtJHtyb3cuaWR9YH1cbiAgICAgICAgICAgIGxhYmVsPXsnJ31cbiAgICAgICAgICAgIHBhdGg9e2Ake2luZGV4fS52YWx1ZWB9XG4gICAgICAgICAgICBydWxlPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhc3luYyBhc3luY1ZhbGlkYXRvcigpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBkYXRhLnZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGYpID0+IGYudHlwZSA9PT0gY3VycmVudC50eXBlICYmIGYuaWQgIT09IHJvdy5pZCxcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+ivt+i+k+WFpeWFs+mUruivjSEnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfor7fovpPlhaXmraPliJnooajovr7lvI8hJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3JlZ2V4cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn6K+36L6T5YWl5q2j56Gu55qE5q2j5YiZ6KGo6L6+5byPJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcnIuc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGDlhbPplK7or43jgIwke3ZhbHVlfeOAjeW3sue7j+WtmOWcqO+8gWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYOato+WImeihqOi+vuW8j+OAjCR7dmFsdWV944CN5bey57uP5a2Y5Zyo77yBYCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFsnaW5wdXQnLCAnYmx1ciddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TklucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9e2N1cnJlbnQudmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlci52YWx1ZX1cbiAgICAgICAgICAgID48L05JbnB1dD5cbiAgICAgICAgICA8L05Gb3JtSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+exu+WeiycsXG4gICAga2V5OiAndHlwZScsXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgcmV0dXJuIHR5cGVPcHRpb25zLmZpbmQoKGYpID0+IGYudmFsdWUgPT09IHJvdy50eXBlKT8ubGFiZWw7XG4gICAgfSxcbiAgICB3aWR0aDogODAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+aPj+i/sCcsXG4gICAga2V5OiAnZGVzY3JpYmUnLFxuICB9LFxuICB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAga2V5OiAnYWN0aW9ucycsXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKGVkaXRMaXN0c1tyb3cuaWRdKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICAgIDxOQnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1SZWYudmFsdWVcbiAgICAgICAgICAgICAgICAgID8udmFsaWRhdGUoKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FjaGVWYWx1ZS5nZXQocm93LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IGRhdGEudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSByb3cuaWQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICAgIDwvTkJ1dHRvbj5cbiAgICAgICAgICA8L05TcGFjZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOU3BhY2U+XG4gICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICBjYWNoZVZhbHVlLnNldChyb3cuaWQsIHsgLi4ucm93IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDnvJbovpFcbiAgICAgICAgICA8L05CdXR0b24+XG5cbiAgICAgICAgICA8TlBvcGNvbmZpcm1cbiAgICAgICAgICAgIG9uUG9zaXRpdmVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlZGl0TGlzdHNbcm93LmlkXTtcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfliKDpmaTmiJDlip/vvIzkv53lrZjorr7nva7lkI7nlJ/mlYjjgIInKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk5lZ2F0aXZlQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgIHRyaWdnZXI6ICgpID0+IDxOQnV0dG9uPuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTlhbPplK7or43jgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBLZXl3b3JkID0+ICEhZj8udmFsdWUpO1xuXG4gIGtleXdvcmRzLnZhbHVlID0gbG9jYWxEYXRhO1xufTtcblxuY29uc3QgeyBuYW1lIH0gPSBkZWZpbmVQcm9wczx7IG5hbWU6IHN0cmluZyB9PigpO1xuXG5kZWZpbmVFeHBvc2Uoe1xuICBzYXZlQWxsLFxuICBuYW1lLFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJkYXRhIiwicmVmIiwiXyIsImtleXdvcmRzIiwidmFsdWUiLCJtZXNzYWdlIiwidXNlTWVzc2FnZSIsImtleXdvcmQiLCJwcmVzZW50YXRpb25EYXRhIiwiY29tcHV0ZWQiLCJmaWx0ZXIiLCJmIiwiaW5jbHVkZXMiLCJ1cGRhdGVGdW5jdGlvbiIsIl9fYXN5bmMiLCJuZXdEYXRhIiwidXBkYXRlRGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInV1aWQiLCJ0eXBlIiwidXBkYXRlS2V5d29yZHMiLCJ0eXBlT3B0aW9ucyIsImxhYmVsIiwiZm9ybVJlZiIsImVkaXRMaXN0cyIsInJlYWN0aXZlIiwiY2FjaGVWYWx1ZSIsIk1hcCIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsInJlbmRlciIsInJvdyIsImN1cnJlbnQiLCJmaW5kIiwiX2NyZWF0ZVZOb2RlMiIsIl9yZXNvbHZlQ29tcG9uZW50MiIsImRlZmF1bHQiLCJfY3JlYXRlVGV4dFZOb2RlMiIsInBsYWNlaG9sZGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJOU2VsZWN0IiwiJGV2ZW50IiwiTkZvcm1JdGVtIiwiYXN5bmNWYWxpZGF0b3IiLCJ0cmltIiwiYXJyIiwiUHJvbWlzZSIsInJlamVjdCIsIlJlZ0V4cCIsInJlc29sdmUiLCJlIiwic29tZSIsInRyaWdnZXIiLCJOSW5wdXQiLCJ3aWR0aCIsIk5TcGFjZSIsIk5CdXR0b24iLCJvbkNsaWNrIiwidmFsaWRhdGUiLCJ0aGVuIiwiY2F0Y2giLCJyZXN1bHQiLCJnZXQiLCJzZXQiLCJfX3NwcmVhZFZhbHVlcyIsIk5Qb3Bjb25maXJtIiwib25Qb3NpdGl2ZUNsaWNrIiwic3VjY2VzcyIsIm9uTmVnYXRpdmVDbGljayIsIm9uQWRkIiwicHVzaCIsIm5leHRUaWNrIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIl9fZXhwb3NlIiwic2F2ZUFsbCIsImxvY2FsRGF0YSIsIm5hbWUiLCJfX3Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsVUFBTUEsSUFBT0MsRUFBSUMsRUFBWUMsRUFBU0MsS0FBSyxDQUFDLEdBQ3RDQyxJQUFVQyxFQUFZLEdBRXRCQyxJQUFVTixFQUFJLEVBQUUsR0FDaEJPLElBQW1CQyxFQUFTLE1BQ3pCVCxFQUFLSSxNQUFNTSxPQUFRQyxDQUFBQSxNQUNwQkosRUFBUUgsUUFDSE8sRUFBRVAsTUFBTVEsU0FBU0wsRUFBUUgsS0FBSyxJQUVoQyxFQUNSLENBQ0YsR0FFS1MsSUFBaUIsTUFBWUMsRUFBQTtBQUVqQyxZQUFNQyxLQURTLE1BQU1DLEVBQXFCLGVBQWUsR0FDbENDLElBQUtDLENBQUFBLE9BQ25CO0FBQUEsUUFDTEMsSUFBSUMsRUFBTTtBQUFBLFFBQ1ZoQixPQUFPYztBQUFBQSxRQUNQRyxNQUFNO0FBQUEsTUFDUCxFQUNGO0FBQ0RDLE1BQUFBLEVBQWVQLENBQU8sR0FDdEJmLEVBQUtJLFFBQVFGLEVBQVlDLEVBQVNDLEtBQUs7QUFBQSxJQUN4QyxJQUVLbUIsSUFBYyxDQUNsQjtBQUFBLE1BQ0VDLE9BQU87QUFBQSxNQUNQcEIsT0FBTztBQUFBLElBQ1QsR0FDQTtBQUFBLE1BQ0VvQixPQUFPO0FBQUEsTUFDUHBCLE9BQU87QUFBQSxJQUNULENBQUMsR0FFR3FCLElBQVV4QixFQUFxQixJQUFJLEdBRW5DeUIsSUFBWUMsRUFBa0MsRUFBRSxHQUVoREMsSUFBYSxvQkFBSUMsSUFBc0IsR0FFdkNDLElBQXFDLENBQ3pDO0FBQUEsTUFDRUMsT0FBTztBQUFBLE1BQ1BDLEtBQUs7QUFBQSxNQUVMQyxPQUFPQyxHQUFLO0FBQ1YsY0FBTUMsSUFBVW5DLEVBQUtJLE1BQU1nQyxLQUFNbEIsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT2UsRUFBSWYsRUFBRTtBQUM1RCxZQUFJLENBQUNPLEVBQVVRLEVBQUlmLEVBQUU7QUFDbkIsaUJBQUlnQixFQUFRZCxTQUFTLFdBQ25CZ0IsRUFBQUMsR0FBQSxNQUFBO0FBQUEsWUFBQUMsU0FBQUEsTUFBQUMsQ0FBQUEsUUFBZ0JOLEVBQUk5QixPQUFLb0MsRUFBQSxHQUFBLENBQUE7QUFBQSxVQUFBLENBQUEsSUFFcEJOLEVBQUk5QjtBQUViLGNBQU1xQyxJQUFjaEMsRUFBUyxNQUN2QjBCLEVBQVFkLFNBQVMsV0FDWixXQUVGLFVBQ1IsR0FDS3FCLElBQVExQyxFQUFLSSxNQUFNdUMsVUFBV3pCLENBQUFBLE1BQVNBLEVBQUtDLE9BQU9lLEVBQUlmLEVBQUU7QUFDL0QsZUFBQWtCLEVBQUEsT0FBQTtBQUFBLFVBQUEsT0FDYztBQUFBLFdBQU1BLENBQUFBLEVBQUFPLEdBQUE7QUFBQSxVQUFBLE9BQUE7QUFBQSxVQUFBLE9BR0NULEVBQVFkO0FBQUFBLFVBQUksa0JBQUF3QixDQUFBQSxNQUFaVixFQUFRZCxPQUFJd0I7QUFBQUEsVUFBQSxTQUNsQnRCO0FBQUFBLFdBQVdjLElBQUFBLEdBQUFBLEVBQUFTLEdBQUE7QUFBQSxVQUFBLE9BR2IsY0FBY1osRUFBSWYsRUFBRTtBQUFBLFVBQUUsT0FDdEI7QUFBQSxVQUFFLE1BQ0gsR0FBR3VCLENBQUs7QUFBQSxVQUFRLE1BQ2hCLENBQ0o7QUFBQSxZQUNRSyxpQkFBaUI7QUFBQSxxQkFBQWpDLEVBQUE7QUFDckIsc0JBQU1WLElBQVErQixFQUFRL0IsTUFBTTRDLEtBQU0sR0FDNUJDLElBQU1qRCxFQUFLSSxNQUFNTSxPQUNwQkMsQ0FBQUEsTUFBTUEsRUFBRVUsU0FBU2MsRUFBUWQsUUFBUVYsRUFBRVEsT0FBT2UsRUFBSWYsRUFDakQ7QUFFQSxvQkFBSSxDQUFDZjtBQUNILHlCQUFPOEMsUUFBUUMsT0FDYmhCLEVBQVFkLFNBQVMsV0FDYixZQUNBLFdBQ047QUFHRixvQkFBSWMsRUFBUWQsU0FBUztBQUNuQixzQkFBSTtBQUNGLCtCQUFJK0IsT0FBT2hELENBQUssR0FDVDhDLFFBQVFHLFFBQVM7QUFBQSxrQkFDMUIsU0FBUUMsR0FBQTtBQUNOLDJCQUFPSixRQUFRQyxPQUFPLGFBQWE7QUFBQSxrQkFDckM7QUFFRixvQkFBSUYsRUFBSU0sS0FBTTVDLENBQUFBLE1BQU1BLEVBQUVQLFVBQVVBLENBQUs7QUFDbkMseUJBQU84QyxRQUFRQyxPQUNiaEIsRUFBUWQsU0FBUyxXQUNiLE9BQU9qQixDQUFLLFdBQ1osU0FBU0EsQ0FBSyxRQUNwQjtBQUFBLGNBRUg7QUFBQTtBQUFBLFlBQ0RvRCxTQUFTLENBQUMsU0FBUyxNQUFNO0FBQUEsVUFDMUIsQ0FBQTtBQUFBLFFBQ0YsR0FBQTtBQUFBLFVBQUFqQixTQUFBQSxNQUFBRixDQUFBQSxFQUFBb0IsR0FBQTtBQUFBLFlBQUEsT0FHZ0J0QixFQUFRL0I7QUFBQUEsWUFBSyxrQkFBQXlDLENBQUFBLE1BQWJWLEVBQVEvQixRQUFLeUM7QUFBQUEsWUFBQSxhQUNmSixFQUFZckM7QUFBQUEsVUFBSyxHQUFBLElBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxNQUt4QztBQUFBLElBQ0YsR0FDQTtBQUFBLE1BQ0UyQixPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BQ0xDLE9BQU9DLEdBQUs7O0FBQ1YsZ0JBQU9YLElBQUFBLEVBQVlhLEtBQU16QixDQUFBQSxNQUFNQSxFQUFFUCxVQUFVOEIsRUFBSWIsSUFBSSxNQUE1Q0UsZ0JBQUFBLEVBQStDQztBQUFBQSxNQUN2RDtBQUFBLE1BQ0RrQyxPQUFPO0FBQUEsSUFDVCxHQUNBO0FBQUEsTUFDRTNCLE9BQU87QUFBQSxNQUNQQyxLQUFLO0FBQUEsSUFDUCxHQUNBO0FBQUEsTUFDRTBCLE9BQU87QUFBQSxNQUNQM0IsT0FBTztBQUFBLE1BQ1BDLEtBQUs7QUFBQSxNQUNMQyxPQUFPQyxHQUFLO0FBQ1YsZUFBSVIsRUFBVVEsRUFBSWYsRUFBRSxJQUNsQmtCLEVBQUFzQixHQUFBLE1BQUE7QUFBQSxVQUFBcEIsU0FBQUEsTUFBQUYsQ0FBQUEsRUFBQXVCLEdBQUE7QUFBQSxZQUFBLE1BQUE7QUFBQSxZQUFBLFNBSWVDLE1BQU07O0FBQ2JwQyxlQUFBQSxJQUFBQSxFQUFRckIsVUFBUnFCLFFBQUFBLEVBQ0lxQyxXQUNEQyxLQUFLLE1BQU07QUFDVnJDLGdCQUFBQSxFQUFVUSxFQUFJZixFQUFFLElBQUk7QUFBQSxjQUN0QixHQUNDNkMsTUFBTSxNQUFNO0FBQUE7WUFDakI7QUFBQSxVQUFDLEdBQUE7QUFBQSxZQUFBekIsU0FBQUEsTUFBQSxDQUFBQyxFQUFBLElBQUEsQ0FBQTtBQUFBLFdBQUFILEdBQUFBLEVBQUF1QixHQUFBO0FBQUEsWUFBQSxTQUtRQyxNQUFNO0FBQ2JuQyxjQUFBQSxFQUFVUSxFQUFJZixFQUFFLElBQUk7QUFDcEIsb0JBQU04QyxJQUFTckMsRUFBV3NDLElBQUloQyxFQUFJZixFQUFFO0FBQ3BDLGtCQUFJLENBQUM4QyxHQUFRO0FBQ1hqRSxnQkFBQUEsRUFBS0ksUUFBUUosRUFBS0ksTUFBTU0sT0FBUVEsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT2UsRUFBSWYsRUFBRTtBQUMzRDtBQUFBLGNBQ0Y7QUFDQW5CLGNBQUFBLEVBQUtJLFFBQVFKLEVBQUtJLE1BQU1hLElBQUtDLENBQUFBLE1BQ3ZCQSxFQUFLQyxPQUFPZSxFQUFJZixLQUNYOEMsSUFFRi9DLENBQ1I7QUFBQSxZQUNIO0FBQUEsVUFBQyxHQUFBO0FBQUEsWUFBQXFCLFNBQUFBLE1BQUEsQ0FBQUMsRUFBQSxJQUFBLENBQUE7QUFBQSxVQUFBLENBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FBQSxJQU9USCxFQUFBc0IsR0FBQSxNQUFBO0FBQUEsVUFBQXBCLFNBQUFBLE1BQUFGLENBQUFBLEVBQUF1QixHQUFBO0FBQUEsWUFBQSxNQUFBO0FBQUEsWUFBQSxTQUllQyxNQUFNO0FBQ2JuQyxjQUFBQSxFQUFVUSxFQUFJZixFQUFFLElBQUksSUFDcEJTLEVBQVd1QyxJQUFJakMsRUFBSWYsSUFBSWlELEVBQUEsSUFBS2xDLEVBQUs7QUFBQSxZQUNuQztBQUFBLFVBQUMsR0FBQTtBQUFBLFlBQUFLLFNBQUFBLE1BQUEsQ0FBQUMsRUFBQSxJQUFBLENBQUE7QUFBQSxXQUFBSCxHQUFBQSxFQUFBZ0MsR0FBQTtBQUFBLFlBQUEsaUJBTWdCQyxNQUFNO0FBQ3JCdEUsY0FBQUEsRUFBS0ksUUFBUUosRUFBS0ksTUFBTU0sT0FBUVEsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT2UsRUFBSWYsRUFBRSxHQUMzRCxPQUFPTyxFQUFVUSxFQUFJZixFQUFFLEdBQ3ZCZCxFQUFRa0UsUUFBUSxlQUFlO0FBQUEsWUFDaEM7QUFBQSxZQUFBLGlCQUNnQkMsTUFBTTtBQUFBLFlBQUE7QUFBQSxVQUFFLEdBQUE7QUFBQSxZQUd2QmhCLFNBQVNBLE1BQUFuQixFQUFBdUIsR0FBQSxNQUFBO0FBQUEsY0FBQXJCLFNBQUFBLE1BQUEsQ0FBQUMsRUFBQSxJQUFBLENBQUE7QUFBQSxhQUEyQjtBQUFBLFlBQ3BDRCxTQUFTQSxNQUFNLFdBQVdMLEVBQUk5QixLQUFLO0FBQUEsVUFBSyxDQUFBLENBQUE7QUFBQSxRQUFBLENBQUE7QUFBQSxNQUtsRDtBQUFBLElBQ0YsQ0FBQyxHQUdHcUUsSUFBUUEsTUFBTTtBQUNsQixZQUFNdEQsSUFBS0MsRUFBTTtBQUNqQnBCLE1BQUFBLEVBQUtJLE1BQU1zRSxLQUFLO0FBQUEsUUFDZHJELE1BQU07QUFBQSxRQUNOakIsT0FBTztBQUFBLFFBQ1BlLElBQUFBO0FBQUFBLE1BQ0YsQ0FBQyxHQUNETyxFQUFVUCxDQUFFLElBQUksSUFDaEJ3RCxHQUFTLE1BQU07QUFFYkMsUUFEV0MsU0FBU0MsY0FBYyxRQUFRM0QsQ0FBRSxRQUFRLEVBQ2pENEQsTUFBTztBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0Y7QUFtQkRDLFdBQUFBLEVBQWE7QUFBQSxNQUNYQyxTQWxCYyxNQUFZbkUsRUFBQTs7QUFDMUIsZUFBTVcsSUFBQUEsRUFBUXJCLFVBQVJxQixnQkFBQUEsRUFBZXFDO0FBRXJCLGNBQU1vQixJQUFZbEYsRUFBS0ksTUFDcEJhLElBQUtDLENBQUFBLE1BQ0FRLEVBQVVSLEVBQUtDLEVBQUUsSUFDWlMsRUFBV3NDLElBQUloRCxFQUFLQyxFQUFFLElBRXhCRCxDQUNSLEVBQ0FSLE9BQVFDLENBQUFBLE1BQW9CLENBQUMsRUFBQ0EsS0FBQUEsUUFBQUEsRUFBR1AsTUFBSztBQUV6Q0QsUUFBQUEsRUFBU0MsUUFBUThFO0FBQUFBLE1BQ2xCO0FBQUEsTUFNQ0MsTUFBSUMsRUFBQUQ7QUFBQUEsSUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
