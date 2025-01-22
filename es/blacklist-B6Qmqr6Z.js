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
import { b as C, a as M } from "./main-DIH1-DvI.js";
import { _ as S, u as T } from "./data-CghoA-xH.js";
import { c as I } from "./lodash-es-CqrSZx9w.js";
import { c as y, i as j, B as _, k as U, l as z, m as H, n as J } from "./naive-ui-Ceukqjr2.js";
import { v as A } from "./uuid-DPrBhu07.js";
import { k as O, r as D, c as Q, e as E, J as G, Q as K, M as p, N, L as u, O as f, I as W, j as v, n as X } from "./vue-DUZbidQX.js";
const Y = {
  class: "flex items-center"
}, Z = {
  class: "flex-1"
}, re = /* @__PURE__ */ O({
  __name: "blacklist",
  props: {
    name: {}
  },
  setup(r, {
    expose: i
  }) {
    const a = D(null), n = D(I(C.value)), c = D(""), g = Q(() => n.value.filter((e) => c.value ? e.value.includes(c.value) : !0)), x = () => k(this, null, function* () {
      const t = (yield T("blacklist.json")).map((l) => ({
        id: A(),
        value: l
      }));
      M(t), n.value = I(C.value);
    }), s = E({}), d = /* @__PURE__ */ new Map(), m = [{
      title: "内容",
      key: "value",
      render(e) {
        if (!s[e.id])
          return e.value;
        const t = n.value.find((o) => o.id === e.id), l = "请输入关键词", b = n.value.findIndex((o) => o.id === e.id);
        return u("div", {
          class: `flex inp-${e.id}`
        }, [u(U, {
          class: "flex-1",
          label: "",
          path: `${b}.value`,
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
              if (n.value.filter((h) => h.id !== e.id).some((h) => h.value === B))
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
            default: () => `确定删除「${e.value}」吗？`
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
        C.value = e;
      }),
      name: r.name
    }), (e, t) => {
      const l = H, b = J;
      return G(), K(f(y), {
        vertical: ""
      }, {
        default: p(() => [N("div", Y, [N("div", Z, [u(f(y), null, {
          default: p(() => [u(f(j), {
            value: f(c),
            "onUpdate:value": t[0] || (t[0] = (o) => W(c) ? c.value = o : null),
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
          icon: p(() => t[2] || (t[2] = [N("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: p(() => [t[3] || (t[3] = v(" 添加"))]),
          _: 1
        })]), u(b, {
          "label-placement": "left",
          ref_key: "formRef",
          ref: a,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhY2tsaXN0LUI2UW1xcjZaLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9tYW5hZ2UvYmxhY2tsaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxuLXNwYWNlIHZlcnRpY2FsPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICA8bi1zcGFjZT5cbiAgICAgICAgICA8bi1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT1cImtleXdvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmkJzntKLnmoTlhbPplK7or41cIlxuICAgICAgICAgID48L24taW5wdXQ+XG4gICAgICAgICAgPFVwZGF0ZURhdGEgOnVwZGF0ZS1mdW5jdGlvbj1cInVwZGF0ZUZ1bmN0aW9uXCJcbiAgICAgICAgICAgID7ku47ku5PlupPmm7TmlrDmlbDmja48L1VwZGF0ZURhdGFcbiAgICAgICAgICA+XG4gICAgICAgIDwvbi1zcGFjZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPG4tYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwib25BZGRcIj5cbiAgICAgICAgPHRlbXBsYXRlICNpY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpLWJ5dGVzaXplLXBsdXMgbXQtLTNweFwiPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICDmt7vliqA8L24tYnV0dG9uXG4gICAgICA+XG4gICAgPC9kaXY+XG4gICAgPG4tZm9ybVxuICAgICAgbGFiZWwtcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICByZWY9XCJmb3JtUmVmXCJcbiAgICAgIGlubGluZVxuICAgICAgOm1vZGVsPVwiZGF0YVwiXG4gICAgICA6dGhlbWUtb3ZlcnJpZGVzPVwie1xuICAgICAgICBwZWVyczoge1xuICAgICAgICAgIGZlZWRiYWNrSGVpZ2h0OiAnMCcsXG4gICAgICAgIH0sXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8bi1kYXRhLXRhYmxlXG4gICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgIDpkYXRhPVwicHJlc2VudGF0aW9uRGF0YVwiXG4gICAgICAgIDpwYWdpbmF0aW9uPVwiZmFsc2VcIlxuICAgICAgICA6Ym9yZGVyZWQ9XCJmYWxzZVwiXG4gICAgICAgIDptYXgtaGVpZ2h0PVwiMjUwXCJcbiAgICAgIC8+XG4gICAgPC9uLWZvcm0+XG4gIDwvbi1zcGFjZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzeFwiPlxuaW1wb3J0IHR5cGUgeyBEYXRhVGFibGVDb2x1bW5zLCBGb3JtSW5zdCB9IGZyb20gJ25haXZlLXVpJztcbmltcG9ydCB7IE5CdXR0b24sIE5TcGFjZSwgTklucHV0LCBOUG9wY29uZmlybSwgTkZvcm1JdGVtIH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IHsgdjYgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgYmxhY2tsaXN0LCB0eXBlIEJsYWNrbGlzdCwgdXBkYXRlQmxhY2tsaXN0IH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgVXBkYXRlRGF0YSBmcm9tICcuL3VwZGF0ZS1kYXRhLnZ1ZSc7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSAnQC9hcGkvZGF0YSc7XG5cbmNvbnN0IGZvcm1SZWYgPSByZWY8Rm9ybUluc3QgfCBudWxsPihudWxsKTtcblxuY29uc3QgZGF0YSA9IHJlZihfLmNsb25lRGVlcChibGFja2xpc3QudmFsdWUpKTtcblxuY29uc3Qga2V5d29yZCA9IHJlZignJyk7XG5jb25zdCBwcmVzZW50YXRpb25EYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gZGF0YS52YWx1ZS5maWx0ZXIoKGYpID0+IHtcbiAgICBpZiAoa2V5d29yZC52YWx1ZSkge1xuICAgICAgcmV0dXJuIGYudmFsdWUuaW5jbHVkZXMoa2V5d29yZC52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn0pO1xuXG5jb25zdCB1cGRhdGVGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlRGF0YTxzdHJpbmdbXT4oJ2JsYWNrbGlzdC5qc29uJyk7XG4gIGNvbnN0IG5ld0RhdGEgPSByZXN1bHQubWFwKChpdGVtKTogQmxhY2tsaXN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIHZhbHVlOiBpdGVtLFxuICAgIH07XG4gIH0pO1xuICB1cGRhdGVCbGFja2xpc3QobmV3RGF0YSk7XG4gIGRhdGEudmFsdWUgPSBfLmNsb25lRGVlcChibGFja2xpc3QudmFsdWUpO1xufTtcblxuY29uc3QgZWRpdExpc3RzID0gcmVhY3RpdmU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHt9KTtcbi8vIOiusOW/huWAvO+8jOWPlua2iOS5i+WQjumcgOimgeaBouWkjVxuY29uc3QgY2FjaGVWYWx1ZSA9IG5ldyBNYXA8c3RyaW5nLCBCbGFja2xpc3Q+KCk7XG5cbmNvbnN0IGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbnM8QmxhY2tsaXN0PiA9IFtcbiAge1xuICAgIHRpdGxlOiAn5YaF5a65JyxcbiAgICBrZXk6ICd2YWx1ZScsXG5cbiAgICByZW5kZXIocm93KSB7XG4gICAgICBpZiAoIWVkaXRMaXN0c1tyb3cuaWRdKSB7XG4gICAgICAgIHJldHVybiByb3cudmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBjdXJyZW50ID0gZGF0YS52YWx1ZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpITtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gJ+ivt+i+k+WFpeWFs+mUruivjSc7XG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEudmFsdWUuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSByb3cuaWQpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz17YGZsZXggaW5wLSR7cm93LmlkfWB9PlxuICAgICAgICAgIDxORm9ybUl0ZW1cbiAgICAgICAgICAgIGNsYXNzPXsnZmxleC0xJ31cbiAgICAgICAgICAgIGxhYmVsPXsnJ31cbiAgICAgICAgICAgIHBhdGg9e2Ake2luZGV4fS52YWx1ZWB9XG4gICAgICAgICAgICBydWxlPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBbJ2lucHV0JywgJ2JsdXInXSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5YWz6ZSu6K+NIScsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBbJ2lucHV0JywgJ2JsdXInXSxcbiAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcjogYXN5bmMgKF8sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBkYXRhLnZhbHVlLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gcm93LmlkKTtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnIuc29tZSgoZikgPT4gZi52YWx1ZSA9PT0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg6buR5ZCN5Y2V44CMJHt2YWx1ZX3jgI3lt7LlrZjlnKjvvIFgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TklucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw6dmFsdWU9e2N1cnJlbnQudmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgID48L05JbnB1dD5cbiAgICAgICAgICA8L05Gb3JtSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB3aWR0aDogMjAwLFxuICAgIHRpdGxlOiAn5pON5L2cJyxcbiAgICBrZXk6ICdhY3Rpb25zJyxcbiAgICByZW5kZXIocm93KSB7XG4gICAgICBpZiAoZWRpdExpc3RzW3Jvdy5pZF0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TlNwYWNlPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybVJlZi52YWx1ZVxuICAgICAgICAgICAgICAgICAgPy52YWxpZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICA8L05CdXR0b24+XG4gICAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWNoZVZhbHVlLmdldChyb3cuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOWPlua2iFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgIDwvTlNwYWNlPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICA8TkJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgIGNhY2hlVmFsdWUuc2V0KHJvdy5pZCwgeyAuLi5yb3cgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOe8lui+kVxuICAgICAgICAgIDwvTkJ1dHRvbj5cblxuICAgICAgICAgIDxOUG9wY29uZmlybVxuICAgICAgICAgICAgb25Qb3NpdGl2ZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRhdGEudmFsdWUgPSBkYXRhLnZhbHVlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcm93LmlkKTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVkaXRMaXN0c1tyb3cuaWRdO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTmVnYXRpdmVDbGljaz17KCkgPT4ge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgdHJpZ2dlcjogKCkgPT4gPE5CdXR0b24gb25DbGljaz17KCkgPT4ge319PuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTjgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBCbGFja2xpc3QgPT4gISFmPy52YWx1ZSk7XG4gIGJsYWNrbGlzdC52YWx1ZSA9IGxvY2FsRGF0YTtcbn07XG5cbmNvbnN0IHsgbmFtZSB9ID0gZGVmaW5lUHJvcHM8eyBuYW1lOiBzdHJpbmcgfT4oKTtcblxuZGVmaW5lRXhwb3NlKHtcbiAgc2F2ZUFsbCxcbiAgbmFtZSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZm9ybVJlZiIsInJlZiIsImRhdGEiLCJfIiwiYmxhY2tsaXN0IiwidmFsdWUiLCJrZXl3b3JkIiwicHJlc2VudGF0aW9uRGF0YSIsImNvbXB1dGVkIiwiZmlsdGVyIiwiZiIsImluY2x1ZGVzIiwidXBkYXRlRnVuY3Rpb24iLCJfX2FzeW5jIiwibmV3RGF0YSIsInVwZGF0ZURhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1dWlkIiwidXBkYXRlQmxhY2tsaXN0IiwiZWRpdExpc3RzIiwicmVhY3RpdmUiLCJjYWNoZVZhbHVlIiwiTWFwIiwiY29sdW1ucyIsInRpdGxlIiwia2V5IiwicmVuZGVyIiwicm93IiwiY3VycmVudCIsImZpbmQiLCJwbGFjZWhvbGRlciIsImluZGV4IiwiZmluZEluZGV4IiwiX2NyZWF0ZVZOb2RlMiIsIk5Gb3JtSXRlbSIsInRyaWdnZXIiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJ0eXBlIiwidHJhbnNmb3JtIiwidHJpbSIsImFzeW5jVmFsaWRhdG9yIiwic29tZSIsIlByb21pc2UiLCJyZWplY3QiLCJkZWZhdWx0IiwiTklucHV0IiwiJGV2ZW50Iiwid2lkdGgiLCJOU3BhY2UiLCJOQnV0dG9uIiwib25DbGljayIsInZhbGlkYXRlIiwidGhlbiIsImNhdGNoIiwiX2NyZWF0ZVRleHRWTm9kZTIiLCJyZXN1bHQiLCJnZXQiLCJzZXQiLCJfX3NwcmVhZFZhbHVlcyIsIk5Qb3Bjb25maXJtIiwib25Qb3NpdGl2ZUNsaWNrIiwib25OZWdhdGl2ZUNsaWNrIiwib25BZGQiLCJwdXNoIiwibmV4dFRpY2siLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwiX19leHBvc2UiLCJzYXZlQWxsIiwibG9jYWxEYXRhIiwibmFtZSIsIl9fcHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQSxVQUFNQSxJQUFVQyxFQUFxQixJQUFJLEdBRW5DQyxJQUFPRCxFQUFJRSxFQUFZQyxFQUFVQyxLQUFLLENBQUMsR0FFdkNDLElBQVVMLEVBQUksRUFBRSxHQUNoQk0sSUFBbUJDLEVBQVMsTUFDekJOLEVBQUtHLE1BQU1JLE9BQVFDLENBQUFBLE1BQ3BCSixFQUFRRCxRQUNISyxFQUFFTCxNQUFNTSxTQUFTTCxFQUFRRCxLQUFLLElBRWhDLEVBQ1IsQ0FDRixHQUVLTyxJQUFpQixNQUFZQyxFQUFBO0FBRWpDLFlBQU1DLEtBRFMsTUFBTUMsRUFBcUIsZ0JBQWdCLEdBQ25DQyxJQUFLQyxDQUFBQSxPQUNuQjtBQUFBLFFBQ0xDLElBQUlDLEVBQU07QUFBQSxRQUNWZCxPQUFPWTtBQUFBQSxNQUNSLEVBQ0Y7QUFDREcsTUFBQUEsRUFBZ0JOLENBQU8sR0FDdkJaLEVBQUtHLFFBQVFGLEVBQVlDLEVBQVVDLEtBQUs7QUFBQSxJQUN6QyxJQUVLZ0IsSUFBWUMsRUFBa0MsRUFBRSxHQUVoREMsSUFBYSxvQkFBSUMsSUFBd0IsR0FFekNDLElBQXVDLENBQzNDO0FBQUEsTUFDRUMsT0FBTztBQUFBLE1BQ1BDLEtBQUs7QUFBQSxNQUVMQyxPQUFPQyxHQUFLO0FBQ1YsWUFBSSxDQUFDUixFQUFVUSxFQUFJWCxFQUFFO0FBQ25CLGlCQUFPVyxFQUFJeEI7QUFFYixjQUFNeUIsSUFBVTVCLEVBQUtHLE1BQU0wQixLQUFNZCxDQUFBQSxNQUFTQSxFQUFLQyxPQUFPVyxFQUFJWCxFQUFFLEdBQ3REYyxJQUFjLFVBQ2RDLElBQVEvQixFQUFLRyxNQUFNNkIsVUFBV2pCLENBQUFBLE1BQVNBLEVBQUtDLE9BQU9X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
