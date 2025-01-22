var R = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var F = (r, i, a) => i in r ? R(r, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[i] = a, V = (r, i) => {
  for (var a in i || (i = {}))
    q.call(i, a) && F(r, a, i[a]);
  if ($)
    for (var a of $(i))
      L.call(i, a) && F(r, a, i[a]);
  return r;
};
var k = (r, i, a) => new Promise((n, c) => {
  var g = (d) => {
    try {
      s(a.next(d));
    } catch (m) {
      c(m);
    }
  }, x = (d) => {
    try {
      s(a.throw(d));
    } catch (m) {
      c(m);
    }
  }, s = (d) => d.done ? n(d.value) : Promise.resolve(d.value).then(g, x);
  s((a = a.apply(r, i)).next());
});
import { w as D, c as M } from "./main-DIH1-DvI.js";
import { _ as S, u as T } from "./data-CghoA-xH.js";
import { c as I } from "./lodash-es-CqrSZx9w.js";
import { c as y, i as j, B as _, k as U, l as z, m as H, n as J } from "./naive-ui-Ceukqjr2.js";
import { v as A } from "./uuid-DPrBhu07.js";
import { k as O, r as N, c as Q, e as W, J as E, Q as G, M as p, N as b, L as u, O as f, I as K, j as v, n as X } from "./vue-DUZbidQX.js";
const Y = {
  class: "flex items-center"
}, Z = {
  class: "flex-1"
}, re = /* @__PURE__ */ O({
  __name: "white-list",
  props: {
    name: {}
  },
  setup(r, {
    expose: i
  }) {
    const a = N(null), n = N(I(D.value)), c = N(""), g = Q(() => n.value.filter((e) => c.value ? e.value.includes(c.value) : !0)), x = () => k(this, null, function* () {
      const t = (yield T("white-list.json")).map((l) => ({
        id: A(),
        value: l
      }));
      M(t), n.value = I(D.value);
    }), s = W({}), d = /* @__PURE__ */ new Map(), m = [{
      title: "内容",
      key: "value",
      render(e) {
        if (!s[e.id])
          return e.value;
        const t = n.value.find((o) => o.id === e.id), l = "请输入关键词", h = n.value.findIndex((o) => o.id === e.id);
        return u("div", {
          class: "flex"
        }, [u(U, {
          class: `flex-1 inp-${e.id}`,
          label: "",
          path: `${h}.value`,
          rule: [{
            trigger: ["input", "blur"],
            message: "请输入关键词!",
            required: !0,
            type: "string",
            transform(o) {
              return o.trim();
            }
          }, {
            trigger: ["input", "blur"],
            asyncValidator: (o, B) => k(this, null, function* () {
              if (n.value.filter((C) => C.id !== e.id).some((C) => C.value === B))
                return Promise.reject(`黑名单「${B}」已存在！`);
            })
          }]
        }, {
          default: () => [u(j, {
            value: t.value,
            "onUpdate:value": (o) => t.value = o,
            placeholder: l
          }, null)]
        })]);
      }
    }, {
      width: 200,
      title: "操作",
      key: "actions",
      render(e) {
        return s[e.id] ? u(y, null, {
          default: () => [u(_, {
            type: "primary",
            onClick: () => {
              var t;
              (t = a.value) == null || t.validate().then(() => {
                s[e.id] = !1;
              }).catch(() => {
              });
            }
          }, {
            default: () => [v("保存")]
          }), u(_, {
            onClick: () => {
              s[e.id] = !1;
              const t = d.get(e.id);
              if (!t) {
                n.value = n.value.filter((l) => l.id !== e.id);
                return;
              }
              n.value = n.value.map((l) => l.id === e.id ? t : l);
            }
          }, {
            default: () => [v("取消")]
          })]
        }) : u(y, null, {
          default: () => [u(_, {
            type: "primary",
            onClick: () => {
              s[e.id] = !0, d.set(e.id, V({}, e));
            }
          }, {
            default: () => [v("编辑")]
          }), u(z, {
            onPositiveClick: () => {
              n.value = n.value.filter((t) => t.id !== e.id), delete s[e.id];
            },
            onNegativeClick: () => {
            }
          }, {
            trigger: () => u(_, {
              onClick: () => {
              }
            }, {
              default: () => [v("删除")]
            }),
            default: () => `确定删除黑名单「${e.value}」吗？`
          })]
        });
      }
    }], P = () => {
      const e = A();
      n.value.push({
        value: "",
        id: e
      }), s[e] = !0, X(() => {
        document.querySelector(`.inp-${e} input`).focus();
      });
    };
    return i({
      saveAll: () => k(this, null, function* () {
        var t;
        yield (t = a.value) == null ? void 0 : t.validate();
        const e = n.value.map((l) => s[l.id] ? d.get(l.id) : l).filter((l) => !!(l != null && l.value));
        D.value = e;
      }),
      name: r.name
    }), (e, t) => {
      const l = H, h = J;
      return E(), G(f(y), {
        vertical: ""
      }, {
        default: p(() => [b("div", Y, [b("div", Z, [u(f(y), null, {
          default: p(() => [u(f(j), {
            value: f(c),
            "onUpdate:value": t[0] || (t[0] = (o) => K(c) ? c.value = o : null),
            placeholder: "请输入搜索的关键词"
          }, null, 8, ["value"]), u(S, {
            "update-function": x
          }, {
            default: p(() => t[1] || (t[1] = [v("从仓库更新数据")])),
            _: 1
          })]),
          _: 1
        })]), u(f(_), {
          type: "primary",
          onClick: P
        }, {
          icon: p(() => t[2] || (t[2] = [b("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: p(() => [t[3] || (t[3] = v(" 添加"))]),
          _: 1
        })]), u(h, {
          ref_key: "formRef",
          ref: a,
          "label-placement": "left",
          inline: "",
          model: f(n),
          "theme-overrides": {
            peers: {
              feedbackHeight: "0"
            }
          }
        }, {
          default: p(() => [u(l, {
            columns: m,
            data: f(g),
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
  re as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGUtbGlzdC1CM01fNlFxSC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL3doaXRlLWxpc3QudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG4tc3BhY2UgdmVydGljYWw+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XG4gICAgICAgIDxuLXNwYWNlPlxuICAgICAgICAgIDxuLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsOnZhbHVlPVwia2V5d29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaQnOe0oueahOWFs+mUruivjVwiXG4gICAgICAgICAgPjwvbi1pbnB1dD5cbiAgICAgICAgICA8VXBkYXRlRGF0YSA6dXBkYXRlLWZ1bmN0aW9uPVwidXBkYXRlRnVuY3Rpb25cIlxuICAgICAgICAgICAgPuS7juS7k+W6k+abtOaWsOaVsOaNrjwvVXBkYXRlRGF0YVxuICAgICAgICAgID5cbiAgICAgICAgPC9uLXNwYWNlPlxuICAgICAgPC9kaXY+XG4gICAgICA8bi1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvbkFkZFwiPlxuICAgICAgICA8dGVtcGxhdGUgI2ljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImktYnl0ZXNpemUtcGx1cyBtdC0tM3B4XCI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIOa3u+WKoDwvbi1idXR0b25cbiAgICAgID5cbiAgICA8L2Rpdj5cbiAgICA8bi1mb3JtXG4gICAgICByZWY9XCJmb3JtUmVmXCJcbiAgICAgIGxhYmVsLXBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgaW5saW5lXG4gICAgICA6bW9kZWw9XCJkYXRhXCJcbiAgICAgIDp0aGVtZS1vdmVycmlkZXM9XCJ7XG4gICAgICAgIHBlZXJzOiB7XG4gICAgICAgICAgZmVlZGJhY2tIZWlnaHQ6ICcwJyxcbiAgICAgICAgfSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxuLWRhdGEtdGFibGVcbiAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgOmRhdGE9XCJwcmVzZW50YXRpb25EYXRhXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJmYWxzZVwiXG4gICAgICAgIDpib3JkZXJlZD1cImZhbHNlXCJcbiAgICAgICAgOm1heC1oZWlnaHQ9XCIyNTBcIlxuICAgICAgLz5cbiAgICA8L24tZm9ybT5cbiAgPC9uLXNwYWNlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHN4XCI+XG5pbXBvcnQgdHlwZSB7IERhdGFUYWJsZUNvbHVtbnMsIEZvcm1JbnN0IH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IHsgTkJ1dHRvbiwgTlNwYWNlLCBOSW5wdXQsIE5Qb3Bjb25maXJtLCBORm9ybUl0ZW0gfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQgeyB2NiBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB3aGl0ZWxpc3QsIHR5cGUgV2hpdGVsaXN0LCB1cGRhdGVXaGl0ZWxpc3QgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCBVcGRhdGVEYXRhIGZyb20gJy4vdXBkYXRlLWRhdGEudnVlJztcbmltcG9ydCB7IHVwZGF0ZURhdGEgfSBmcm9tICdAL2FwaS9kYXRhJztcblxuY29uc3QgZm9ybVJlZiA9IHJlZjxGb3JtSW5zdCB8IG51bGw+KG51bGwpO1xuXG5jb25zdCBkYXRhID0gcmVmKF8uY2xvbmVEZWVwKHdoaXRlbGlzdC52YWx1ZSkpO1xuXG5jb25zdCBrZXl3b3JkID0gcmVmKCcnKTtcbmNvbnN0IHByZXNlbnRhdGlvbkRhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBkYXRhLnZhbHVlLmZpbHRlcigoZikgPT4ge1xuICAgIGlmIChrZXl3b3JkLnZhbHVlKSB7XG4gICAgICByZXR1cm4gZi52YWx1ZS5pbmNsdWRlcyhrZXl3b3JkLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHVwZGF0ZUZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVEYXRhPHN0cmluZ1tdPignd2hpdGUtbGlzdC5qc29uJyk7XG4gIGNvbnN0IG5ld0RhdGEgPSByZXN1bHQubWFwKChpdGVtKTogV2hpdGVsaXN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIHZhbHVlOiBpdGVtLFxuICAgIH07XG4gIH0pO1xuICB1cGRhdGVXaGl0ZWxpc3QobmV3RGF0YSk7XG4gIGRhdGEudmFsdWUgPSBfLmNsb25lRGVlcCh3aGl0ZWxpc3QudmFsdWUpO1xufTtcblxuY29uc3QgZWRpdExpc3RzID0gcmVhY3RpdmU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHt9KTtcbi8vIOiusOW/huWAvO+8jOWPlua2iOS5i+WQjumcgOimgeaBouWkjVxuY29uc3QgY2FjaGVWYWx1ZSA9IG5ldyBNYXA8c3RyaW5nLCBXaGl0ZWxpc3Q+KCk7XG5cbmNvbnN0IGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbnM8V2hpdGVsaXN0PiA9IFtcbiAge1xuICAgIHRpdGxlOiAn5YaF5a65JyxcbiAgICBrZXk6ICd2YWx1ZScsXG5cbiAgICByZW5kZXIocm93KSB7XG4gICAgICBpZiAoIWVkaXRMaXN0c1tyb3cuaWRdKSB7XG4gICAgICAgIHJldHVybiByb3cudmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50ID0gZGF0YS52YWx1ZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpITtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEudmFsdWUuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz17J2ZsZXgnfT5cbiAgICAgICAgICA8TkZvcm1JdGVtXG4gICAgICAgICAgICBjbGFzcz17YGZsZXgtMSBpbnAtJHtyb3cuaWR9YH1cbiAgICAgICAgICAgIGxhYmVsPXsnJ31cbiAgICAgICAgICAgIHBhdGg9e2Ake2luZGV4fS52YWx1ZWB9XG4gICAgICAgICAgICBydWxlPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBbJ2lucHV0JywgJ2JsdXInXSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5YWz6ZSu6K+NIScsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBbJ2lucHV0JywgJ2JsdXInXSxcbiAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcjogYXN5bmMgKF8sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBkYXRhLnZhbHVlLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gcm93LmlkKTtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnIuc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg6buR5ZCN5Y2V44CMJHt2YWx1ZX3jgI3lt7LlrZjlnKjvvIFgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TklucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9e2N1cnJlbnQudmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgID48L05JbnB1dD5cbiAgICAgICAgICA8L05Gb3JtSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB3aWR0aDogMjAwLFxuICAgIHRpdGxlOiAn5pON5L2cJyxcbiAgICBrZXk6ICdhY3Rpb25zJyxcbiAgICByZW5kZXIocm93KSB7XG4gICAgICBpZiAoZWRpdExpc3RzW3Jvdy5pZF0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TlNwYWNlPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybVJlZi52YWx1ZVxuICAgICAgICAgICAgICAgICAgPy52YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICA8L05CdXR0b24+XG4gICAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWNoZVZhbHVlLmdldChyb3cuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgIDwvTlNwYWNlPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgIGNhY2hlVmFsdWUuc2V0KHJvdy5pZCwgeyAuLi5yb3cgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOe8lui+kVxuICAgICAgICAgIDwvTkJ1dHRvbj5cblxuICAgICAgICAgIDxOUG9wY29uZmlybVxuICAgICAgICAgICAgb25Qb3NpdGl2ZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcm93LmlkKTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVkaXRMaXN0c1tyb3cuaWRdO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTmVnYXRpdmVDbGljaz17KCkgPT4ge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgdHJpZ2dlcjogKCkgPT4gPE5CdXR0b24gb25DbGljaz17KCkgPT4ge319PuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTpu5HlkI3ljZXjgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBXaGl0ZWxpc3QgPT4gISFmPy52YWx1ZSk7XG5cbiAgd2hpdGVsaXN0LnZhbHVlID0gbG9jYWxEYXRhO1xufTtcblxuY29uc3QgeyBuYW1lIH0gPSBkZWZpbmVQcm9wczx7IG5hbWU6IHN0cmluZyB9PigpO1xuXG5kZWZpbmVFeHBvc2Uoe1xuICBzYXZlQWxsLFxuICBuYW1lLFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJmb3JtUmVmIiwicmVmIiwiZGF0YSIsIl8iLCJ3aGl0ZWxpc3QiLCJ2YWx1ZSIsImtleXdvcmQiLCJwcmVzZW50YXRpb25EYXRhIiwiY29tcHV0ZWQiLCJmaWx0ZXIiLCJmIiwiaW5jbHVkZXMiLCJ1cGRhdGVGdW5jdGlvbiIsIl9fYXN5bmMiLCJuZXdEYXRhIiwidXBkYXRlRGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInV1aWQiLCJ1cGRhdGVXaGl0ZWxpc3QiLCJlZGl0TGlzdHMiLCJyZWFjdGl2ZSIsImNhY2hlVmFsdWUiLCJNYXAiLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJyZW5kZXIiLCJyb3ciLCJjdXJyZW50IiwiZmluZCIsInBsYWNlaG9sZGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJfY3JlYXRlVk5vZGUyIiwiTkZvcm1JdGVtIiwidHJpZ2dlciIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInR5cGUiLCJ0cmFuc2Zvcm0iLCJ0cmltIiwiYXN5bmNWYWxpZGF0b3IiLCJzb21lIiwiUHJvbWlzZSIsInJlamVjdCIsImRlZmF1bHQiLCJOSW5wdXQiLCIkZXZlbnQiLCJ3aWR0aCIsIk5TcGFjZSIsIk5CdXR0b24iLCJvbkNsaWNrIiwidmFsaWRhdGUiLCJ0aGVuIiwiY2F0Y2giLCJfY3JlYXRlVGV4dFZOb2RlMiIsInJlc3VsdCIsImdldCIsInNldCIsIl9fc3ByZWFkVmFsdWVzIiwiTlBvcGNvbmZpcm0iLCJvblBvc2l0aXZlQ2xpY2siLCJvbk5lZ2F0aXZlQ2xpY2siLCJvbkFkZCIsInB1c2giLCJuZXh0VGljayIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJfX2V4cG9zZSIsInNhdmVBbGwiLCJsb2NhbERhdGEiLCJuYW1lIiwiX19wcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLFVBQU1BLElBQVVDLEVBQXFCLElBQUksR0FFbkNDLElBQU9ELEVBQUlFLEVBQVlDLEVBQVVDLEtBQUssQ0FBQyxHQUV2Q0MsSUFBVUwsRUFBSSxFQUFFLEdBQ2hCTSxJQUFtQkMsRUFBUyxNQUN6Qk4sRUFBS0csTUFBTUksT0FBUUMsQ0FBQUEsTUFDcEJKLEVBQVFELFFBQ0hLLEVBQUVMLE1BQU1NLFNBQVNMLEVBQVFELEtBQUssSUFFaEMsRUFDUixDQUNGLEdBRUtPLElBQWlCLE1BQVlDLEVBQUE7QUFFakMsWUFBTUMsS0FEUyxNQUFNQyxFQUFxQixpQkFBaUIsR0FDcENDLElBQUtDLENBQUFBLE9BQ25CO0FBQUEsUUFDTEMsSUFBSUMsRUFBTTtBQUFBLFFBQ1ZkLE9BQU9ZO0FBQUFBLE1BQ1IsRUFDRjtBQUNERyxNQUFBQSxFQUFnQk4sQ0FBTyxHQUN2QlosRUFBS0csUUFBUUYsRUFBWUMsRUFBVUMsS0FBSztBQUFBLElBQ3pDLElBRUtnQixJQUFZQyxFQUFrQyxFQUFFLEdBRWhEQyxJQUFhLG9CQUFJQyxJQUF3QixHQUV6Q0MsSUFBdUMsQ0FDM0M7QUFBQSxNQUNFQyxPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BRUxDLE9BQU9DLEdBQUs7QUFDVixZQUFJLENBQUNSLEVBQVVRLEVBQUlYLEVBQUU7QUFDbkIsaUJBQU9XLEVBQUl4QjtBQUViLGNBQU15QixJQUFVNUIsRUFBS0csTUFBTTBCLEtBQU1kLENBQUFBLE1BQVNBLEVBQUtDLE9BQU9XLEVBQUlYLEVBQUUsR0FDdERjLElBQWMsVUFDZEMsSUFBUS9CLEVBQUtHLE1BQU02QixVQUFXakIsQ0FBQUEsTUFB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
