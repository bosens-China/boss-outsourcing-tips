var L = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
var j = (i, r, a) => r in i ? L(i, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : i[r] = a, B = (i, r) => {
  for (var a in r || (r = {}))
    M.call(r, a) && j(i, a, r[a]);
  if ($)
    for (var a of $(r))
      O.call(r, a) && j(i, a, r[a]);
  return i;
};
var g = (i, r, a) => new Promise((o, _) => {
  var h = (u) => {
    try {
      d(a.next(u));
    } catch (c) {
      _(c);
    }
  }, k = (u) => {
    try {
      d(a.throw(u));
    } catch (c) {
      _(c);
    }
  }, d = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(h, k);
  d((a = a.apply(i, r)).next());
});
import { k as N, u as T } from "./main-DIH1-DvI.js";
import { _ as q, u as z } from "./data-CghoA-xH.js";
import { c as P } from "./lodash-es-CqrSZx9w.js";
import { c as x, i as F, B as y, j as E, k as H, l as J, m as K, n as Q } from "./naive-ui-Ceukqjr2.js";
import { v as V } from "./uuid-DPrBhu07.js";
import { k as G, r as C, c as I, e as W, J as X, Q as Y, M as v, N as D, L as n, O as p, I as Z, j as f, n as w } from "./vue-DUZbidQX.js";
const ee = {
  class: "flex items-center"
}, te = {
  class: "flex-1"
}, de = /* @__PURE__ */ G({
  __name: "keywords",
  props: {
    name: {}
  },
  setup(i, {
    expose: r
  }) {
    const a = C(P(N.value)), o = C(""), _ = I(() => a.value.filter((t) => o.value ? t.value.includes(o.value) : !0)), h = () => g(this, null, function* () {
      const e = (yield z("keywords.json")).map((l) => ({
        id: V(),
        value: l,
        type: "string"
      }));
      T(e), a.value = P(N.value);
    }), k = [{
      label: "文本",
      value: "string"
    }, {
      label: "正则",
      value: "regexp"
    }], d = C(null), u = W({}), c = /* @__PURE__ */ new Map(), R = [{
      title: "内容",
      key: "value",
      render(t) {
        if (!u[t.id])
          return t.value;
        const e = a.value.find((s) => s.id === t.id), l = I(() => e.type === "string" ? "请输入关键词" : "请输入正则表达式"), b = a.value.findIndex((s) => s.id === t.id);
        return n("div", {
          class: "flex"
        }, [n(E, {
          class: "w-100px mr-12px",
          value: e.type,
          "onUpdate:value": (s) => e.type = s,
          options: k
        }, null), n(H, {
          class: `flex-1 inp-${t.id}`,
          label: "",
          path: `${b}.value`,
          rule: [{
            asyncValidator() {
              return g(this, null, function* () {
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
          default: () => [n(F, {
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
        return (e = k.find((l) => l.value === t.type)) == null ? void 0 : e.label;
      },
      width: 80
    }, {
      width: 200,
      title: "操作",
      key: "actions",
      render(t) {
        return u[t.id] ? n(x, null, {
          default: () => [n(y, {
            type: "primary",
            onClick: () => {
              var e;
              (e = d.value) == null || e.validate().then(() => {
                u[t.id] = !1;
              }).catch(() => {
              });
            }
          }, {
            default: () => [f("保存")]
          }), n(y, {
            onClick: () => {
              u[t.id] = !1;
              const e = c.get(t.id);
              if (!e) {
                a.value = a.value.filter((l) => l.id !== t.id);
                return;
              }
              a.value = a.value.map((l) => l.id === t.id ? e : l);
            }
          }, {
            default: () => [f("取消")]
          })]
        }) : n(x, null, {
          default: () => [n(y, {
            type: "primary",
            onClick: () => {
              u[t.id] = !0, c.set(t.id, B({}, t));
            }
          }, {
            default: () => [f("编辑")]
          }), n(J, {
            onPositiveClick: () => {
              a.value = a.value.filter((e) => e.id !== t.id), delete u[t.id];
            },
            onNegativeClick: () => {
            }
          }, {
            trigger: () => n(y, {
              onClick: () => {
              }
            }, {
              default: () => [f("删除")]
            }),
            default: () => `确定删除关键词「${t.value}」吗？`
          })]
        });
      }
    }], A = () => {
      const t = V();
      a.value.push({
        type: "string",
        value: "",
        id: t
      }), u[t] = !0, w(() => {
        document.querySelector(`.inp-${t} input`).focus();
      });
    };
    return r({
      saveAll: () => g(this, null, function* () {
        var e;
        yield (e = d.value) == null ? void 0 : e.validate();
        const t = a.value.map((l) => u[l.id] ? c.get(l.id) : l).filter((l) => !!(l != null && l.value));
        N.value = t;
      }),
      name: i.name
    }), (t, e) => {
      const l = K, b = Q;
      return X(), Y(p(x), {
        vertical: ""
      }, {
        default: v(() => [D("div", ee, [D("div", te, [n(p(x), null, {
          default: v(() => [n(p(F), {
            value: p(o),
            "onUpdate:value": e[0] || (e[0] = (S) => Z(o) ? o.value = S : null),
            placeholder: "请输入搜索的关键词"
          }, null, 8, ["value"]), n(q, {
            "update-function": h
          }, {
            default: v(() => e[1] || (e[1] = [f("从仓库更新数据")])),
            _: 1
          })]),
          _: 1
        })]), n(p(y), {
          type: "primary",
          onClick: A
        }, {
          icon: v(() => e[2] || (e[2] = [D("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: v(() => [e[3] || (e[3] = f(" 添加"))]),
          _: 1
        })]), n(b, {
          ref_key: "formRef",
          ref: d,
          "label-placement": "left",
          inline: "",
          model: p(a),
          "theme-overrides": {
            peers: {
              feedbackHeight: "0"
            }
          }
        }, {
          default: v(() => [n(l, {
            columns: R,
            data: p(_),
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
  de as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZHMtQlN2bWZVUlkuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hbmFnZS9rZXl3b3Jkcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bi1zcGFjZSB2ZXJ0aWNhbD5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgPG4tc3BhY2U+XG4gICAgICAgICAgPG4taW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9XCJrZXl3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5pCc57Si55qE5YWz6ZSu6K+NXCJcbiAgICAgICAgICA+PC9uLWlucHV0PlxuICAgICAgICAgIDxVcGRhdGVEYXRhIDp1cGRhdGUtZnVuY3Rpb249XCJ1cGRhdGVGdW5jdGlvblwiXG4gICAgICAgICAgICA+5LuO5LuT5bqT5pu05paw5pWw5o2uPC9VcGRhdGVEYXRhXG4gICAgICAgICAgPlxuICAgICAgICA8L24tc3BhY2U+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cIm9uQWRkXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaS1ieXRlc2l6ZS1wbHVzIG10LS0zcHhcIj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAg5re75YqgPC9uLWJ1dHRvblxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxuLWZvcm1cbiAgICAgIHJlZj1cImZvcm1SZWZcIlxuICAgICAgbGFiZWwtcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICBpbmxpbmVcbiAgICAgIDptb2RlbD1cImRhdGFcIlxuICAgICAgOnRoZW1lLW92ZXJyaWRlcz1cIntcbiAgICAgICAgcGVlcnM6IHtcbiAgICAgICAgICBmZWVkYmFja0hlaWdodDogJzAnLFxuICAgICAgICB9LFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPG4tZGF0YS10YWJsZVxuICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICA6ZGF0YT1cInByZXNlbnRhdGlvbkRhdGFcIlxuICAgICAgICA6cGFnaW5hdGlvbj1cImZhbHNlXCJcbiAgICAgICAgOmJvcmRlcmVkPVwiZmFsc2VcIlxuICAgICAgICA6bWF4LWhlaWdodD1cIjI1MFwiXG4gICAgICAvPlxuICAgIDwvbi1mb3JtPlxuICA8L24tc3BhY2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c3hcIj5cbmltcG9ydCB0eXBlIHsgRGF0YVRhYmxlQ29sdW1ucywgRm9ybUluc3QgfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQge1xuICBOQnV0dG9uLFxuICBOU3BhY2UsXG4gIE5JbnB1dCxcbiAgTlNlbGVjdCxcbiAgTlBvcGNvbmZpcm0sXG4gIE5Gb3JtSXRlbSxcbn0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsga2V5d29yZHMsIHR5cGUgS2V5d29yZCwgdXBkYXRlS2V5d29yZHMgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCBVcGRhdGVEYXRhIGZyb20gJy4vdXBkYXRlLWRhdGEudnVlJztcblxuaW1wb3J0IHsgdjYgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdXBkYXRlRGF0YSB9IGZyb20gJ0AvYXBpL2RhdGEnO1xuXG5jb25zdCBkYXRhID0gcmVmKF8uY2xvbmVEZWVwKGtleXdvcmRzLnZhbHVlKSk7XG5cbmNvbnN0IGtleXdvcmQgPSByZWYoJycpO1xuY29uc3QgcHJlc2VudGF0aW9uRGF0YSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGRhdGEudmFsdWUuZmlsdGVyKChmKSA9PiB7XG4gICAgaWYgKGtleXdvcmQudmFsdWUpIHtcbiAgICAgIHJldHVybiBmLnZhbHVlLmluY2x1ZGVzKGtleXdvcmQudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59KTtcblxuY29uc3QgdXBkYXRlRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZURhdGE8c3RyaW5nW10+KCdrZXl3b3Jkcy5qc29uJyk7XG4gIGNvbnN0IG5ld0RhdGEgPSByZXN1bHQubWFwKChpdGVtKTogS2V5d29yZCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICB2YWx1ZTogaXRlbSxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIH07XG4gIH0pO1xuICB1cGRhdGVLZXl3b3JkcyhuZXdEYXRhKTtcbiAgZGF0YS52YWx1ZSA9IF8uY2xvbmVEZWVwKGtleXdvcmRzLnZhbHVlKTtcbn07XG5cbmNvbnN0IHR5cGVPcHRpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICfmlofmnKwnLFxuICAgIHZhbHVlOiAnc3RyaW5nJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAn5q2j5YiZJyxcbiAgICB2YWx1ZTogJ3JlZ2V4cCcsXG4gIH0sXG5dO1xuY29uc3QgZm9ybVJlZiA9IHJlZjxGb3JtSW5zdCB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBlZGl0TGlzdHMgPSByZWFjdGl2ZTxSZWNvcmQ8c3RyaW5nLCBib29sZWFuPj4oe30pO1xuLy8g6K6w5b+G5YC877yM5Y+W5raI5LmL5ZCO6ZyA6KaB5oGi5aSNXG5jb25zdCBjYWNoZVZhbHVlID0gbmV3IE1hcDxzdHJpbmcsIEtleXdvcmQ+KCk7XG5cbmNvbnN0IGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbnM8S2V5d29yZD4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+WGheWuuScsXG4gICAga2V5OiAndmFsdWUnLFxuXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKCFlZGl0TGlzdHNbcm93LmlkXSkge1xuICAgICAgICByZXR1cm4gcm93LnZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudCA9IGRhdGEudmFsdWUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm93LmlkKSE7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICfor7fovpPlhaXmraPliJnooajovr7lvI8nO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEudmFsdWUuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz17J2ZsZXgnfT5cbiAgICAgICAgICA8TlNlbGVjdFxuICAgICAgICAgICAgY2xhc3M9XCJ3LTEwMHB4IG1yLTEycHhcIlxuICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT17Y3VycmVudC50eXBlfVxuICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgPjwvTlNlbGVjdD5cbiAgICAgICAgICA8TkZvcm1JdGVtXG4gICAgICAgICAgICBjbGFzcz17YGZsZXgtMSBpbnAtJHtyb3cuaWR9YH1cbiAgICAgICAgICAgIGxhYmVsPXsnJ31cbiAgICAgICAgICAgIHBhdGg9e2Ake2luZGV4fS52YWx1ZWB9XG4gICAgICAgICAgICBydWxlPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhc3luYyBhc3luY1ZhbGlkYXRvcigpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBkYXRhLnZhbHVlLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGYpID0+IGYudHlwZSA9PT0gY3VycmVudC50eXBlICYmIGYuaWQgIT09IHJvdy5pZCxcbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ+ivt+i+k+WFpeWFs+mUruivjSEnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfor7fovpPlhaXmraPliJnooajovr7lvI8hJyxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3JlZ2V4cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn6K+36L6T5YWl5q2j56Gu55qE5q2j5YiZ6KGo6L6+5byPJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcnIuc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGDlhbPplK7or43jgIwke3ZhbHVlfeOAjeW3sue7j+WtmOWcqO+8gWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYOato+WImeihqOi+vuW8j+OAjCR7dmFsdWV944CN5bey57uP5a2Y5Zyo77yBYCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFsnaW5wdXQnLCAnYmx1ciddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TklucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9e2N1cnJlbnQudmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlci52YWx1ZX1cbiAgICAgICAgICAgID48L05JbnB1dD5cbiAgICAgICAgICA8L05Gb3JtSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ+exu+WeiycsXG4gICAga2V5OiAndHlwZScsXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgcmV0dXJuIHR5cGVPcHRpb25zLmZpbmQoKGYpID0+IGYudmFsdWUgPT09IHJvdy50eXBlKT8ubGFiZWw7XG4gICAgfSxcbiAgICB3aWR0aDogODAsXG4gIH0sXG4gIHtcbiAgICB3aWR0aDogMjAwLFxuICAgIHRpdGxlOiAn5pON5L2cJyxcbiAgICBrZXk6ICdhY3Rpb25zJyxcbiAgICByZW5kZXIocm93KSB7XG4gICAgICBpZiAoZWRpdExpc3RzW3Jvdy5pZF0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TlNwYWNlPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybVJlZi52YWx1ZVxuICAgICAgICAgICAgICAgICAgPy52YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICA8L05CdXR0b24+XG4gICAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWNoZVZhbHVlLmdldChyb3cuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgIDwvTlNwYWNlPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgIGNhY2hlVmFsdWUuc2V0KHJvdy5pZCwgeyAuLi5yb3cgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOe8lui+kVxuICAgICAgICAgIDwvTkJ1dHRvbj5cblxuICAgICAgICAgIDxOUG9wY29uZmlybVxuICAgICAgICAgICAgb25Qb3NpdGl2ZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcm93LmlkKTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVkaXRMaXN0c1tyb3cuaWRdO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTmVnYXRpdmVDbGljaz17KCkgPT4ge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgdHJpZ2dlcjogKCkgPT4gPE5CdXR0b24gb25DbGljaz17KCkgPT4ge319PuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTlhbPplK7or43jgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBLZXl3b3JkID0+ICEhZj8udmFsdWUpO1xuXG4gIGtleXdvcmRzLnZhbHVlID0gbG9jYWxEYXRhO1xufTtcblxuY29uc3QgeyBuYW1lIH0gPSBkZWZpbmVQcm9wczx7IG5hbWU6IHN0cmluZyB9PigpO1xuXG5kZWZpbmVFeHBvc2Uoe1xuICBzYXZlQWxsLFxuICBuYW1lLFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJkYXRhIiwicmVmIiwiXyIsImtleXdvcmRzIiwidmFsdWUiLCJrZXl3b3JkIiwicHJlc2VudGF0aW9uRGF0YSIsImNvbXB1dGVkIiwiZmlsdGVyIiwiZiIsImluY2x1ZGVzIiwidXBkYXRlRnVuY3Rpb24iLCJfX2FzeW5jIiwibmV3RGF0YSIsInVwZGF0ZURhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1dWlkIiwidHlwZSIsInVwZGF0ZUtleXdvcmRzIiwidHlwZU9wdGlvbnMiLCJsYWJlbCIsImZvcm1SZWYiLCJlZGl0TGlzdHMiLCJyZWFjdGl2ZSIsImNhY2hlVmFsdWUiLCJNYXAiLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJyZW5kZXIiLCJyb3ciLCJjdXJyZW50IiwiZmluZCIsInBsYWNlaG9sZGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJfY3JlYXRlVk5vZGUyIiwiTlNlbGVjdCIsIiRldmVudCIsIk5Gb3JtSXRlbSIsImFzeW5jVmFsaWRhdG9yIiwidHJpbSIsImFyciIsIlByb21pc2UiLCJyZWplY3QiLCJSZWdFeHAiLCJyZXNvbHZlIiwiZSIsInNvbWUiLCJ0cmlnZ2VyIiwiZGVmYXVsdCIsIk5JbnB1dCIsIndpZHRoIiwiTlNwYWNlIiwiTkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWxpZGF0ZSIsInRoZW4iLCJjYXRjaCIsIl9jcmVhdGVUZXh0Vk5vZGUyIiwicmVzdWx0IiwiZ2V0Iiwic2V0IiwiX19zcHJlYWRWYWx1ZXMiLCJOUG9wY29uZmlybSIsIm9uUG9zaXRpdmVDbGljayIsIm9uTmVnYXRpdmVDbGljayIsIm9uQWRkIiwicHVzaCIsIm5leHRUaWNrIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIl9fZXhwb3NlIiwic2F2ZUFsbCIsImxvY2FsRGF0YSIsIm5hbWUiLCJfX3Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsVUFBTUEsSUFBT0MsRUFBSUMsRUFBWUMsRUFBU0MsS0FBSyxDQUFDLEdBRXRDQyxJQUFVSixFQUFJLEVBQUUsR0FDaEJLLElBQW1CQyxFQUFTLE1BQ3pCUCxFQUFLSSxNQUFNSSxPQUFRQyxDQUFBQSxNQUNwQkosRUFBUUQsUUFDSEssRUFBRUwsTUFBTU0sU0FBU0wsRUFBUUQsS0FBSyxJQUVoQyxFQUNSLENBQ0YsR0FFS08sSUFBaUIsTUFBWUMsRUFBQTtBQUVqQyxZQUFNQyxLQURTLE1BQU1DLEVBQXFCLGVBQWUsR0FDbENDLElBQUtDLENBQUFBLE9BQ25CO0FBQUEsUUFDTEMsSUFBSUMsRUFBTTtBQUFBLFFBQ1ZkLE9BQU9ZO0FBQUFBLFFBQ1BHLE1BQU07QUFBQSxNQUNQLEVBQ0Y7QUFDREMsTUFBQUEsRUFBZVAsQ0FBTyxHQUN0QmIsRUFBS0ksUUFBUUYsRUFBWUMsRUFBU0MsS0FBSztBQUFBLElBQ3hDLElBRUtpQixJQUFjLENBQ2xCO0FBQUEsTUFDRUMsT0FBTztBQUFBLE1BQ1BsQixPQUFPO0FBQUEsSUFDVCxHQUNBO0FBQUEsTUFDRWtCLE9BQU87QUFBQSxNQUNQbEIsT0FBTztBQUFBLElBQ1QsQ0FBQyxHQUVHbUIsSUFBVXRCLEVBQXFCLElBQUksR0FFbkN1QixJQUFZQyxFQUFrQyxFQUFFLEdBRWhEQyxJQUFhLG9CQUFJQyxJQUFzQixHQUV2Q0MsSUFBcUMsQ0FDekM7QUFBQSxNQUNFQyxPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BRUxDLE9BQU9DLEdBQUs7QUFDVixZQUFJLENBQUNSLEVBQVVRLEVBQUlmLEVBQUU7QUFDbkIsaUJBQU9lLEVBQUk1QjtBQUViLGNBQU02QixJQUFVakMsRUFBS0ksTUFBTThCLEtBQU1sQixDQUFBQSxNQUFTQSxFQUFLQyxPQUFPZSxFQUFJZixFQUFFLEdBQ3REa0IsSUFBYzVCLEVBQVMsTUFDdkIwQixFQUFRZCxTQUFTLFdBQ1osV0FFRixVQUNSLEdBQ0tpQixJQUFRcEMsRUFBS0ksTUFBTWlDLFVBQVdyQixDQUFBQSxNQUFTQSxFQUFLQyxPQUFPZSxFQUFJZixFQUFFO0FBQy9ELGVBQUFxQixFQUFBLE9BQUE7QUFBQSxVQUFBLE9BQ2M7QUFBQSxXQUFNQSxDQUFBQSxFQUFBQyxHQUFBO0FBQUEsVUFBQSxPQUFBO0FBQUEsVUFBQSxPQUdDTixFQUFRZDtBQUFBQSxVQUFJLGtCQUFBcUIsQ0FBQUEsTUFBWlAsRUFBUWQsT0FBSXFCO0FBQUFBLFVBQUEsU0FDbEJuQjtBQUFBQSxXQUFXaUIsSUFBQUEsR0FBQUEsRUFBQUcsR0FBQTtBQUFBLFVBQUEsT0FHYixjQUFjVCxFQUFJZixFQUFFO0FBQUEsVUFBRSxPQUN0QjtBQUFBLFVBQUUsTUFDSCxHQUFHbUIsQ0FBSztBQUFBLFVBQVEsTUFDaEIsQ0FDSjtBQUFBLFlBQ1FNLGlCQUFpQjtBQUFBLHFCQUFBOUIsRUFBQTtBQUNyQixzQkFBTVIsSUFBUTZCLEVBQVE3QixNQUFNdUMsS0FBTSxHQUM1QkMsSUFBTTVDLEVBQUtJLE1BQU1JLE9BQ3BCQyxDQUFBQSxNQUFNQSxFQUFFVSxTQUFTYyxFQUFRZCxRQUFRVixFQUFFUSxPQUFPZSxFQUFJZixFQUNqRDtBQUVBLG9CQUFJLENBQUNiO0FBQ0gseUJBQU95QyxRQUFRQyxPQUNiYixFQUFRZCxTQUFTLFdBQ2IsWUFDQSxXQUNOO0FBR0Ysb0JBQUljLEVBQVFkLFNBQVM7QUFDbkIsc0JBQUk7QUFDRiwrQkFBSTRCLE9BQU8zQyxDQUFLLEdBQ1R5QyxRQUFRRyxRQUFTO0FBQUEsa0JBQzFCLFNBQVFDLEdBQUE7QUFDTiwyQkFBT0osUUFBUUMsT0FBTyxhQUFhO0FBQUEsa0JBQ3JDO0FBRUYsb0JBQUlGLEVBQUlNLEtBQU16QyxDQUFBQSxNQUFNQSxFQUFFTCxVQUFVQSxDQUFLO0FBQ25DLHlCQUFPeUMsUUFBUUMsT0FDYmIsRUFBUWQsU0FBUyxXQUNiLE9BQU9mLENBQUssV0FDWixTQUFTQSxDQUFLLFFBQ3BCO0FBQUEsY0FFSDtBQUFBO0FBQUEsWUFDRCtDLFNBQVMsQ0FBQyxTQUFTLE1BQU07QUFBQSxVQUMxQixDQUFBO0FBQUEsUUFDRixHQUFBO0FBQUEsVUFBQUMsU0FBQUEsTUFBQWQsQ0FBQUEsRUFBQWUsR0FBQTtBQUFBLFlBQUEsT0FHZ0JwQixFQUFRN0I7QUFBQUEsWUFBSyxrQkFBQW9DLENBQUFBLE1BQWJQLEVBQVE3QixRQUFLb0M7QUFBQUEsWUFBQSxhQUNmTCxFQUFZL0I7QUFBQUEsVUFBSyxHQUFBLElBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxNQUt4QztBQUFBLElBQ0YsR0FDQTtBQUFBLE1BQ0V5QixPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BQ0xDLE9BQU9DLEdBQUs7O0FBQ1YsZ0JBQU9YLElBQUFBLEVBQVlhLEtBQU16QixDQUFBQSxNQUFNQSxFQUFFTCxVQUFVNEIsRUFBSWIsSUFBSSxNQUE1Q0UsZ0JBQUFBLEVBQStDQztBQUFBQSxNQUN2RDtBQUFBLE1BQ0RnQyxPQUFPO0FBQUEsSUFDVCxHQUNBO0FBQUEsTUFDRUEsT0FBTztBQUFBLE1BQ1B6QixPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BQ0xDLE9BQU9DLEdBQUs7QUFDVixlQUFJUixFQUFVUSxFQUFJZixFQUFFLElBQ2xCcUIsRUFBQWlCLEdBQUEsTUFBQTtBQUFBLFVBQUFILFNBQUFBLE1BQUFkLENBQUFBLEVBQUFrQixHQUFBO0FBQUEsWUFBQSxNQUFBO0FBQUEsWUFBQSxTQUllQyxNQUFNOztBQUNibEMsZUFBQUEsSUFBQUEsRUFBUW5CLFVBQVJtQixRQUFBQSxFQUNJbUMsV0FDREMsS0FBSyxNQUFNO0FBQ1ZuQyxnQkFBQUEsRUFBVVEsRUFBSWYsRUFBRSxJQUFJO0FBQUEsY0FDdEIsR0FDQzJDLE1BQU0sTUFBTTtBQUFBO1lBQ2pCO0FBQUEsVUFBQyxHQUFBO0FBQUEsWUFBQVIsU0FBQUEsTUFBQSxDQUFBUyxFQUFBLElBQUEsQ0FBQTtBQUFBLFdBQUF2QixHQUFBQSxFQUFBa0IsR0FBQTtBQUFBLFlBQUEsU0FLUUMsTUFBTTtBQUNiakMsY0FBQUEsRUFBVVEsRUFBSWYsRUFBRSxJQUFJO0FBQ3BCLG9CQUFNNkMsSUFBU3BDLEVBQVdxQyxJQUFJL0IsRUFBSWYsRUFBRTtBQUNwQyxrQkFBSSxDQUFDNkMsR0FBUTtBQUNYOUQsZ0JBQUFBLEVBQUtJLFFBQVFKLEVBQUtJLE1BQU1JLE9BQVFRLENBQUFBLE1BQVNBLEVBQUtDLE9BQU9lLEVBQUlmLEVBQUU7QUFDM0Q7QUFBQSxjQUNGO0FBQ0FqQixjQUFBQSxFQUFLSSxRQUFRSixFQUFLSSxNQUFNVyxJQUFLQyxDQUFBQSxNQUN2QkEsRUFBS0MsT0FBT2UsRUFBSWYsS0FDWDZDLElBRUY5QyxDQUNSO0FBQUEsWUFDSDtBQUFBLFVBQUMsR0FBQTtBQUFBLFlBQUFvQyxTQUFBQSxNQUFBLENBQUFTLEVBQUEsSUFBQSxDQUFBO0FBQUEsVUFBQSxDQUFBLENBQUE7QUFBQSxRQUFBLENBQUEsSUFPVHZCLEVBQUFpQixHQUFBLE1BQUE7QUFBQSxVQUFBSCxTQUFBQSxNQUFBZCxDQUFBQSxFQUFBa0IsR0FBQTtBQUFBLFlBQUEsTUFBQTtBQUFBLFlBQUEsU0FJZUMsTUFBTTtBQUNiakMsY0FBQUEsRUFBVVEsRUFBSWYsRUFBRSxJQUFJLElBQ3BCUyxFQUFXc0MsSUFBSWhDLEVBQUlmLElBQUlnRCxFQUFBLElBQUtqQyxFQUFLO0FBQUEsWUFDbkM7QUFBQSxVQUFDLEdBQUE7QUFBQSxZQUFBb0IsU0FBQUEsTUFBQSxDQUFBUyxFQUFBLElBQUEsQ0FBQTtBQUFBLFdBQUF2QixHQUFBQSxFQUFBNEIsR0FBQTtBQUFBLFlBQUEsaUJBTWdCQyxNQUFNO0FBQ3JCbkUsY0FBQUEsRUFBS0ksUUFBUUosRUFBS0ksTUFBTUksT0FBUVEsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT2UsRUFBSWYsRUFBRSxHQUMzRCxPQUFPTyxFQUFVUSxFQUFJZixFQUFFO0FBQUEsWUFDeEI7QUFBQSxZQUFBLGlCQUNnQm1ELE1BQU07QUFBQSxZQUFBO0FBQUEsVUFBRSxHQUFBO0FBQUEsWUFHdkJqQixTQUFTQSxNQUFBYixFQUFBa0IsR0FBQTtBQUFBLGNBQUEsU0FBd0JDLE1BQU07QUFBQSxjQUFBO0FBQUEsWUFBRSxHQUFBO0FBQUEsY0FBQUwsU0FBQUEsTUFBQSxDQUFBUyxFQUFBLElBQUEsQ0FBQTtBQUFBLGFBQWM7QUFBQSxZQUN2RFQsU0FBU0EsTUFBTSxXQUFXcEIsRUFBSTVCLEtBQUs7QUFBQSxVQUFLLENBQUEsQ0FBQTtBQUFBLFFBQUEsQ0FBQTtBQUFBLE1BS2xEO0FBQUEsSUFDRixDQUFDLEdBR0dpRSxJQUFRQSxNQUFNO0FBQ2xCLFlBQU1wRCxJQUFLQyxFQUFNO0FBQ2pCbEIsTUFBQUEsRUFBS0ksTUFBTWtFLEtBQUs7QUFBQSxRQUNkbkQsTUFBTTtBQUFBLFFBQ05mLE9BQU87QUFBQSxRQUNQYSxJQUFBQTtBQUFBQSxNQUNGLENBQUMsR0FDRE8sRUFBVVAsQ0FBRSxJQUFJLElBQ2hCc0QsRUFBUyxNQUFNO0FBRWJDLFFBRFdDLFNBQVNDLGNBQWMsUUFBUXpELENBQUUsUUFBUSxFQUNqRDBELE1BQU87QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNGO0FBbUJEQyxXQUFBQSxFQUFhO0FBQUEsTUFDWEMsU0FsQmMsTUFBWWpFLEVBQUE7O0FBQzFCLGVBQU1XLElBQUFBLEVBQVFuQixVQUFSbUIsZ0JBQUFBLEVBQWVtQztBQUVyQixjQUFNb0IsSUFBWTlFLEVBQUtJLE1BQ3BCVyxJQUFLQyxDQUFBQSxNQUNBUSxFQUFVUixFQUFLQyxFQUFFLElBQ1pTLEVBQVdxQyxJQUFJL0MsRUFBS0MsRUFBRSxJQUV4QkQsQ0FDUixFQUNBUixPQUFRQyxDQUFBQSxNQUFvQixDQUFDLEVBQUNBLEtBQUFBLFFBQUFBLEVBQUdMLE1BQUs7QUFFekNELFFBQUFBLEVBQVNDLFFBQVEwRTtBQUFBQSxNQUNsQjtBQUFBLE1BTUNDLE1BQUlDLEVBQUFEO0FBQUFBLElBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
