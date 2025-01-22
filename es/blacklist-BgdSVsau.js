var R = Object.defineProperty;
var $ = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var F = (r, i, t) => i in r ? R(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t, V = (r, i) => {
  for (var t in i || (i = {}))
    q.call(i, t) && F(r, t, i[t]);
  if ($)
    for (var t of $(i))
      L.call(i, t) && F(r, t, i[t]);
  return r;
};
var k = (r, i, t) => new Promise((y, n) => {
  var d = (u) => {
    try {
      m(t.next(u));
    } catch (c) {
      n(c);
    }
  }, x = (u) => {
    try {
      m(t.throw(u));
    } catch (c) {
      n(c);
    }
  }, m = (u) => u.done ? y(u.value) : Promise.resolve(u.value).then(d, x);
  m((t = t.apply(r, i)).next());
});
import { b as D, a as S } from "./main-vfeR_f7a.js";
import { _ as T, u as U } from "./data-CX54v4WH.js";
import { c as I } from "./lodash-es-CqrSZx9w.js";
import { u as z, c as g, i as j, B as _, l as H, m as J, n as O, o as Q } from "./naive-ui-BGg8odC1.js";
import { v as A } from "./uuid-DPrBhu07.js";
import { k as E, r as N, c as G, e as K, J as W, Q as X, M as p, N as C, L as s, O as f, I as Y, j as v, n as Z } from "./vue-DUZbidQX.js";
const w = {
  class: "flex items-center"
}, ee = {
  class: "flex-1"
}, de = /* @__PURE__ */ E({
  __name: "blacklist",
  props: {
    name: {}
  },
  setup(r, {
    expose: i
  }) {
    const t = N(null), y = z(), n = N(I(D.value)), d = N(""), x = G(() => n.value.filter((e) => d.value ? e.value.includes(d.value) : !0)), m = () => k(this, null, function* () {
      const a = (yield U("blacklist.json")).map((l) => ({
        id: A(),
        value: l
      }));
      S(a), n.value = I(D.value);
    }), u = K({}), c = /* @__PURE__ */ new Map(), M = [{
      title: "内容",
      key: "value",
      render(e) {
        if (!u[e.id])
          return e.value;
        const a = n.value.find((o) => o.id === e.id), l = "请输入关键词", b = n.value.findIndex((o) => o.id === e.id);
        return s("div", {
          class: `flex inp-${e.id}`
        }, [s(H, {
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
          default: () => [s(j, {
            value: a.value,
            "onUpdate:value": (o) => a.value = o,
            placeholder: l
          }, null)]
        })]);
      }
    }, {
      width: 200,
      title: "操作",
      key: "actions",
      render(e) {
        return u[e.id] ? s(g, null, {
          default: () => [s(_, {
            type: "primary",
            onClick: () => {
              var a;
              (a = t.value) == null || a.validate().then(() => {
                u[e.id] = !1;
              }).catch(() => {
              });
            }
          }, {
            default: () => [v("保存")]
          }), s(_, {
            onClick: () => {
              u[e.id] = !1;
              const a = c.get(e.id);
              if (!a) {
                n.value = n.value.filter((l) => l.id !== e.id);
                return;
              }
              n.value = n.value.map((l) => l.id === e.id ? a : l);
            }
          }, {
            default: () => [v("取消")]
          })]
        }) : s(g, null, {
          default: () => [s(_, {
            type: "primary",
            onClick: () => {
              u[e.id] = !0, c.set(e.id, V({}, e));
            }
          }, {
            default: () => [v("编辑")]
          }), s(J, {
            onPositiveClick: () => {
              n.value = n.value.filter((a) => a.id !== e.id), delete u[e.id], y.success("删除成功，保存设置后生效。");
            },
            onNegativeClick: () => {
            }
          }, {
            trigger: () => s(_, null, {
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
      }), u[e] = !0, Z(() => {
        document.querySelector(`.inp-${e} input`).focus();
      });
    };
    return i({
      saveAll: () => k(this, null, function* () {
        var a;
        yield (a = t.value) == null ? void 0 : a.validate();
        const e = n.value.map((l) => u[l.id] ? c.get(l.id) : l).filter((l) => !!(l != null && l.value));
        D.value = e;
      }),
      name: r.name
    }), (e, a) => {
      const l = O, b = Q;
      return W(), X(f(g), {
        vertical: ""
      }, {
        default: p(() => [C("div", w, [C("div", ee, [s(f(g), null, {
          default: p(() => [s(f(j), {
            value: f(d),
            "onUpdate:value": a[0] || (a[0] = (o) => Y(d) ? d.value = o : null),
            placeholder: "请输入搜索的关键词"
          }, null, 8, ["value"]), s(T, {
            "update-function": m
          }, {
            default: p(() => a[1] || (a[1] = [v("从仓库更新数据")])),
            _: 1
          })]),
          _: 1
        })]), s(f(_), {
          type: "primary",
          onClick: P
        }, {
          icon: p(() => a[2] || (a[2] = [C("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: p(() => [a[3] || (a[3] = v(" 添加"))]),
          _: 1
        })]), s(b, {
          "label-placement": "left",
          ref_key: "formRef",
          ref: t,
          inline: "",
          model: f(n),
          "theme-overrides": {
            peers: {
              feedbackHeight: "0"
            }
          }
        }, {
          default: p(() => [s(l, {
            columns: M,
            data: f(x),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhY2tsaXN0LUJnZFNWc2F1LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9tYW5hZ2UvYmxhY2tsaXN0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxuLXNwYWNlIHZlcnRpY2FsPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICA8bi1zcGFjZT5cbiAgICAgICAgICA8bi1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbDp2YWx1ZT1cImtleXdvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmkJzntKLnmoTlhbPplK7or41cIlxuICAgICAgICAgID48L24taW5wdXQ+XG4gICAgICAgICAgPFVwZGF0ZURhdGEgOnVwZGF0ZS1mdW5jdGlvbj1cInVwZGF0ZUZ1bmN0aW9uXCJcbiAgICAgICAgICAgID7ku47ku5PlupPmm7TmlrDmlbDmja48L1VwZGF0ZURhdGFcbiAgICAgICAgICA+XG4gICAgICAgIDwvbi1zcGFjZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPG4tYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwib25BZGRcIj5cbiAgICAgICAgPHRlbXBsYXRlICNpY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpLWJ5dGVzaXplLXBsdXMgbXQtLTNweFwiPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICDmt7vliqA8L24tYnV0dG9uXG4gICAgICA+XG4gICAgPC9kaXY+XG4gICAgPG4tZm9ybVxuICAgICAgbGFiZWwtcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICByZWY9XCJmb3JtUmVmXCJcbiAgICAgIGlubGluZVxuICAgICAgOm1vZGVsPVwiZGF0YVwiXG4gICAgICA6dGhlbWUtb3ZlcnJpZGVzPVwie1xuICAgICAgICBwZWVyczoge1xuICAgICAgICAgIGZlZWRiYWNrSGVpZ2h0OiAnMCcsXG4gICAgICAgIH0sXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8bi1kYXRhLXRhYmxlXG4gICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgIDpkYXRhPVwicHJlc2VudGF0aW9uRGF0YVwiXG4gICAgICAgIDpwYWdpbmF0aW9uPVwiZmFsc2VcIlxuICAgICAgICA6Ym9yZGVyZWQ9XCJmYWxzZVwiXG4gICAgICAgIDptYXgtaGVpZ2h0PVwiMjUwXCJcbiAgICAgIC8+XG4gICAgPC9uLWZvcm0+XG4gIDwvbi1zcGFjZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzeFwiPlxuaW1wb3J0IHR5cGUgeyBEYXRhVGFibGVDb2x1bW5zLCBGb3JtSW5zdCB9IGZyb20gJ25haXZlLXVpJztcbmltcG9ydCB7IE5CdXR0b24sIE5TcGFjZSwgTklucHV0LCBOUG9wY29uZmlybSwgTkZvcm1JdGVtIH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IHsgdjYgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgYmxhY2tsaXN0LCB0eXBlIEJsYWNrbGlzdCwgdXBkYXRlQmxhY2tsaXN0IH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgVXBkYXRlRGF0YSBmcm9tICcuL3VwZGF0ZS1kYXRhLnZ1ZSc7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSAnQC9hcGkvZGF0YSc7XG5cbmNvbnN0IGZvcm1SZWYgPSByZWY8Rm9ybUluc3QgfCBudWxsPihudWxsKTtcbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5cbmNvbnN0IGRhdGEgPSByZWYoXy5jbG9uZURlZXAoYmxhY2tsaXN0LnZhbHVlKSk7XG5cbmNvbnN0IGtleXdvcmQgPSByZWYoJycpO1xuY29uc3QgcHJlc2VudGF0aW9uRGF0YSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGRhdGEudmFsdWUuZmlsdGVyKChmKSA9PiB7XG4gICAgaWYgKGtleXdvcmQudmFsdWUpIHtcbiAgICAgIHJldHVybiBmLnZhbHVlLmluY2x1ZGVzKGtleXdvcmQudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59KTtcblxuY29uc3QgdXBkYXRlRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZURhdGE8c3RyaW5nW10+KCdibGFja2xpc3QuanNvbicpO1xuICBjb25zdCBuZXdEYXRhID0gcmVzdWx0Lm1hcCgoaXRlbSk6IEJsYWNrbGlzdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICB2YWx1ZTogaXRlbSxcbiAgICB9O1xuICB9KTtcbiAgdXBkYXRlQmxhY2tsaXN0KG5ld0RhdGEpO1xuICBkYXRhLnZhbHVlID0gXy5jbG9uZURlZXAoYmxhY2tsaXN0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGVkaXRMaXN0cyA9IHJlYWN0aXZlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7fSk7XG4vLyDorrDlv4blgLzvvIzlj5bmtojkuYvlkI7pnIDopoHmgaLlpI1cbmNvbnN0IGNhY2hlVmFsdWUgPSBuZXcgTWFwPHN0cmluZywgQmxhY2tsaXN0PigpO1xuXG5jb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5zPEJsYWNrbGlzdD4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+WGheWuuScsXG4gICAga2V5OiAndmFsdWUnLFxuXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKCFlZGl0TGlzdHNbcm93LmlkXSkge1xuICAgICAgICByZXR1cm4gcm93LnZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudCA9IGRhdGEudmFsdWUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm93LmlkKSE7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgY29uc3QgaW5kZXggPSBkYXRhLnZhbHVlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm93LmlkKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9e2BmbGV4IGlucC0ke3Jvdy5pZH1gfT5cbiAgICAgICAgICA8TkZvcm1JdGVtXG4gICAgICAgICAgICBjbGFzcz17J2ZsZXgtMSd9XG4gICAgICAgICAgICBsYWJlbD17Jyd9XG4gICAgICAgICAgICBwYXRoPXtgJHtpbmRleH0udmFsdWVgfVxuICAgICAgICAgICAgcnVsZT17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogWydpbnB1dCcsICdibHVyJ10sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeWFs+mUruivjSEnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogWydpbnB1dCcsICdibHVyJ10sXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3I6IGFzeW5jIChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gZGF0YS52YWx1ZS5maWx0ZXIoKGYpID0+IGYuaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyLnNvbWUoKGYpID0+IGYudmFsdWUgPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYOm7keWQjeWNleOAjCR7dmFsdWV944CN5bey5a2Y5Zyo77yBYCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5JbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsOnZhbHVlPXtjdXJyZW50LnZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA+PC9OSW5wdXQ+XG4gICAgICAgICAgPC9ORm9ybUl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAga2V5OiAnYWN0aW9ucycsXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKGVkaXRMaXN0c1tyb3cuaWRdKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICAgIDxOQnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1SZWYudmFsdWVcbiAgICAgICAgICAgICAgICAgID8udmFsaWRhdGUoKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FjaGVWYWx1ZS5nZXQocm93LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IGRhdGEudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSByb3cuaWQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICAgIDwvTkJ1dHRvbj5cbiAgICAgICAgICA8L05TcGFjZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOU3BhY2U+XG4gICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICBjYWNoZVZhbHVlLnNldChyb3cuaWQsIHsgLi4ucm93IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDnvJbovpFcbiAgICAgICAgICA8L05CdXR0b24+XG5cbiAgICAgICAgICA8TlBvcGNvbmZpcm1cbiAgICAgICAgICAgIG9uUG9zaXRpdmVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlZGl0TGlzdHNbcm93LmlkXTtcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfliKDpmaTmiJDlip/vvIzkv53lrZjorr7nva7lkI7nlJ/mlYjjgIInKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk5lZ2F0aXZlQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgIHRyaWdnZXI6ICgpID0+IDxOQnV0dG9uPuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTjgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBCbGFja2xpc3QgPT4gISFmPy52YWx1ZSk7XG4gIGJsYWNrbGlzdC52YWx1ZSA9IGxvY2FsRGF0YTtcbn07XG5cbmNvbnN0IHsgbmFtZSB9ID0gZGVmaW5lUHJvcHM8eyBuYW1lOiBzdHJpbmcgfT4oKTtcblxuZGVmaW5lRXhwb3NlKHtcbiAgc2F2ZUFsbCxcbiAgbmFtZSxcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZm9ybVJlZiIsInJlZiIsIm1lc3NhZ2UiLCJ1c2VNZXNzYWdlIiwiZGF0YSIsIl8iLCJibGFja2xpc3QiLCJ2YWx1ZSIsImtleXdvcmQiLCJwcmVzZW50YXRpb25EYXRhIiwiY29tcHV0ZWQiLCJmaWx0ZXIiLCJmIiwiaW5jbHVkZXMiLCJ1cGRhdGVGdW5jdGlvbiIsIl9fYXN5bmMiLCJuZXdEYXRhIiwidXBkYXRlRGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInV1aWQiLCJ1cGRhdGVCbGFja2xpc3QiLCJlZGl0TGlzdHMiLCJyZWFjdGl2ZSIsImNhY2hlVmFsdWUiLCJNYXAiLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJyZW5kZXIiLCJyb3ciLCJjdXJyZW50IiwiZmluZCIsInBsYWNlaG9sZGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJfY3JlYXRlVk5vZGUyIiwiTkZvcm1JdGVtIiwidHJpZ2dlciIsInJlcXVpcmVkIiwidHlwZSIsInRyYW5zZm9ybSIsInRyaW0iLCJhc3luY1ZhbGlkYXRvciIsInNvbWUiLCJQcm9taXNlIiwicmVqZWN0IiwiZGVmYXVsdCIsIk5JbnB1dCIsIiRldmVudCIsIndpZHRoIiwiTlNwYWNlIiwiTkJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWxpZGF0ZSIsInRoZW4iLCJjYXRjaCIsIl9jcmVhdGVUZXh0Vk5vZGUyIiwicmVzdWx0IiwiZ2V0Iiwic2V0IiwiX19zcHJlYWRWYWx1ZXMiLCJOUG9wY29uZmlybSIsIm9uUG9zaXRpdmVDbGljayIsInN1Y2Nlc3MiLCJvbk5lZ2F0aXZlQ2xpY2siLCJvbkFkZCIsInB1c2giLCJuZXh0VGljayIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJfX2V4cG9zZSIsInNhdmVBbGwiLCJsb2NhbERhdGEiLCJuYW1lIiwiX19wcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLFVBQU1BLElBQVVDLEVBQXFCLElBQUksR0FDbkNDLElBQVVDLEVBQVksR0FFdEJDLElBQU9ILEVBQUlJLEVBQVlDLEVBQVVDLEtBQUssQ0FBQyxHQUV2Q0MsSUFBVVAsRUFBSSxFQUFFLEdBQ2hCUSxJQUFtQkMsRUFBUyxNQUN6Qk4sRUFBS0csTUFBTUksT0FBUUMsQ0FBQUEsTUFDcEJKLEVBQVFELFFBQ0hLLEVBQUVMLE1BQU1NLFNBQVNMLEVBQVFELEtBQUssSUFFaEMsRUFDUixDQUNGLEdBRUtPLElBQWlCLE1BQVlDLEVBQUE7QUFFakMsWUFBTUMsS0FEUyxNQUFNQyxFQUFxQixnQkFBZ0IsR0FDbkNDLElBQUtDLENBQUFBLE9BQ25CO0FBQUEsUUFDTEMsSUFBSUMsRUFBTTtBQUFBLFFBQ1ZkLE9BQU9ZO0FBQUFBLE1BQ1IsRUFDRjtBQUNERyxNQUFBQSxFQUFnQk4sQ0FBTyxHQUN2QlosRUFBS0csUUFBUUYsRUFBWUMsRUFBVUMsS0FBSztBQUFBLElBQ3pDLElBRUtnQixJQUFZQyxFQUFrQyxFQUFFLEdBRWhEQyxJQUFhLG9CQUFJQyxJQUF3QixHQUV6Q0MsSUFBdUMsQ0FDM0M7QUFBQSxNQUNFQyxPQUFPO0FBQUEsTUFDUEMsS0FBSztBQUFBLE1BRUxDLE9BQU9DLEdBQUs7QUFDVixZQUFJLENBQUNSLEVBQVVRLEVBQUlYLEVBQUU7QUFDbkIsaUJBQU9XLEVBQUl4QjtBQUViLGNBQU15QixJQUFVNUIsRUFBS0csTUFBTTBCLEtBQU1kLENBQUFBLE1BQVNBLEVBQUtDLE9BQU9XLEVBQUlYLEVBQUUsR0FDdERjLElBQWMsVUFDZEMsSUFBUS9CLEVBQUtHLE1BQU02QixVQUFXakIsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT1csRUFBSVgsRUFBRTtBQUMvRCxlQUFBaUIsRUFBQSxPQUFBO0FBQUEsVUFBQSxPQUNjLFlBQVlOLEVBQUlYLEVBQUU7QUFBQSxXQUFFaUIsQ0FBQUEsRUFBQUMsR0FBQTtBQUFBLFVBQUEsT0FFckI7QUFBQSxVQUFRLE9BQ1I7QUFBQSxVQUFFLE1BQ0gsR0FBR0gsQ0FBSztBQUFBLFVBQVEsTUFDaEIsQ0FDSjtBQUFBLFlBQ0VJLFNBQVMsQ0FBQyxTQUFTLE1BQU07QUFBQSxZQUN6QnJDLFNBQVM7QUFBQSxZQUNUc0MsVUFBVTtBQUFBLFlBQ1ZDLE1BQU07QUFBQSxZQUNOQyxVQUFVbkMsR0FBTztBQUNmLHFCQUFPQSxFQUFNb0MsS0FBTTtBQUFBLFlBQ3JCO0FBQUEsVUFDRixHQUNBO0FBQUEsWUFDRUosU0FBUyxDQUFDLFNBQVMsTUFBTTtBQUFBLFlBQ3pCSyxnQkFBZ0IsQ0FBT3ZDLEdBQUdFLE1BQVVRLEVBQUE7QUFFbEMsa0JBRFlYLEVBQUtHLE1BQU1JLE9BQVFDLENBQUFBLE1BQU1BLEVBQUVRLE9BQU9XLEVBQUlYLEVBQUUsRUFDNUN5QixLQUFNakMsQ0FBQUEsTUFBTUEsRUFBRUwsVUFBVUEsQ0FBSztBQUNuQyx1QkFBT3VDLFFBQVFDLE9BQU8sT0FBT3hDLENBQUssT0FBTztBQUFBLFlBRTdDO0FBQUEsVUFDRCxDQUFBO0FBQUEsUUFDRixHQUFBO0FBQUEsVUFBQXlDLFNBQUFBLE1BQUFYLENBQUFBLEVBQUFZLEdBQUE7QUFBQSxZQUFBLE9BR2dCakIsRUFBUXpCO0FBQUFBLFlBQUssa0JBQUEyQyxDQUFBQSxNQUFibEIsRUFBUXpCLFFBQUsyQztBQUFBQSxZQUFBLGFBQ2ZoQjtBQUFBQSxVQUFXLEdBQUEsSUFBQSxDQUFBO0FBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQTtBQUFBLE1BS2xDO0FBQUEsSUFDRixHQUNBO0FBQUEsTUFDRWlCLE9BQU87QUFBQSxNQUNQdkIsT0FBTztBQUFBLE1BQ1BDLEtBQUs7QUFBQSxNQUNMQyxPQUFPQyxHQUFLO0FBQ1YsZUFBSVIsRUFBVVEsRUFBSVgsRUFBRSxJQUNsQmlCLEVBQUFlLEdBQUEsTUFBQTtBQUFBLFVBQUFKLFNBQUFBLE1BQUFYLENBQUFBLEVBQUFnQixHQUFBO0FBQUEsWUFBQSxNQUFBO0FBQUEsWUFBQSxTQUllQyxNQUFNOztBQUNidEQsZUFBQUEsSUFBQUEsRUFBUU8sVUFBUlAsUUFBQUEsRUFDSXVELFdBQ0RDLEtBQUssTUFBTTtBQUNWakMsZ0JBQUFBLEVBQVVRLEVBQUlYLEVBQUUsSUFBSTtBQUFBLGNBQ3RCLEdBQ0NxQyxNQUFNLE1BQU07QUFBQTtZQUNqQjtBQUFBLFVBQUMsR0FBQTtBQUFBLFlBQUFULFNBQUFBLE1BQUEsQ0FBQVUsRUFBQSxJQUFBLENBQUE7QUFBQSxXQUFBckIsR0FBQUEsRUFBQWdCLEdBQUE7QUFBQSxZQUFBLFNBS1FDLE1BQU07QUFDYi9CLGNBQUFBLEVBQVVRLEVBQUlYLEVBQUUsSUFBSTtBQUNwQixvQkFBTXVDLElBQVNsQyxFQUFXbUMsSUFBSTdCLEVBQUlYLEVBQUU7QUFDcEMsa0JBQUksQ0FBQ3VDLEdBQVE7QUFDWHZELGdCQUFBQSxFQUFLRyxRQUFRSCxFQUFLRyxNQUFNSSxPQUFRUSxDQUFBQSxNQUFTQSxFQUFLQyxPQUFPVyxFQUFJWCxFQUFFO0FBQzNEO0FBQUEsY0FDRjtBQUNBaEIsY0FBQUEsRUFBS0csUUFBUUgsRUFBS0csTUFBTVcsSUFBS0MsQ0FBQUEsTUFDdkJBLEVBQUtDLE9BQU9XLEVBQUlYLEtBQ1h1QyxJQUVGeEMsQ0FDUjtBQUFBLFlBQ0g7QUFBQSxVQUFDLEdBQUE7QUFBQSxZQUFBNkIsU0FBQUEsTUFBQSxDQUFBVSxFQUFBLElBQUEsQ0FBQTtBQUFBLFVBQUEsQ0FBQSxDQUFBO0FBQUEsUUFBQSxDQUFBLElBT1RyQixFQUFBZSxHQUFBLE1BQUE7QUFBQSxVQUFBSixTQUFBQSxNQUFBWCxDQUFBQSxFQUFBZ0IsR0FBQTtBQUFBLFlBQUEsTUFBQTtBQUFBLFlBQUEsU0FJZUMsTUFBTTtBQUNiL0IsY0FBQUEsRUFBVVEsRUFBSVgsRUFBRSxJQUFJLElBQ3BCSyxFQUFXb0MsSUFBSTlCLEVBQUlYLElBQUkwQyxFQUFBLElBQUsvQixFQUFLO0FBQUEsWUFDbkM7QUFBQSxVQUFDLEdBQUE7QUFBQSxZQUFBaUIsU0FBQUEsTUFBQSxDQUFBVSxFQUFBLElBQUEsQ0FBQTtBQUFBLFdBQUFyQixHQUFBQSxFQUFBMEIsR0FBQTtBQUFBLFlBQUEsaUJBTWdCQyxNQUFNO0FBQ3JCNUQsY0FBQUEsRUFBS0csUUFBUUgsRUFBS0csTUFBTUksT0FBUVEsQ0FBQUEsTUFBU0EsRUFBS0MsT0FBT1csRUFBSVgsRUFBRSxHQUMzRCxPQUFPRyxFQUFVUSxFQUFJWCxFQUFFLEdBQ3ZCbEIsRUFBUStELFFBQVEsZUFBZTtBQUFBLFlBQ2hDO0FBQUEsWUFBQSxpQkFDZ0JDLE1BQU07QUFBQSxZQUFBO0FBQUEsVUFBRSxHQUFBO0FBQUEsWUFHdkIzQixTQUFTQSxNQUFBRixFQUFBZ0IsR0FBQSxNQUFBO0FBQUEsY0FBQUwsU0FBQUEsTUFBQSxDQUFBVSxFQUFBLElBQUEsQ0FBQTtBQUFBLGFBQTJCO0FBQUEsWUFDcENWLFNBQVNBLE1BQU0sUUFBUWpCLEVBQUl4QixLQUFLO0FBQUEsVUFBSyxDQUFBLENBQUE7QUFBQSxRQUFBLENBQUE7QUFBQSxNQUsvQztBQUFBLElBQ0YsQ0FBQyxHQUdHNEQsSUFBUUEsTUFBTTtBQUNsQixZQUFNL0MsSUFBS0MsRUFBTTtBQUNqQmpCLE1BQUFBLEVBQUtHLE1BQU02RCxLQUFLO0FBQUEsUUFDZDdELE9BQU87QUFBQSxRQUNQYSxJQUFBQTtBQUFBQSxNQUNGLENBQUMsR0FDREcsRUFBVUgsQ0FBRSxJQUFJLElBQ2hCaUQsRUFBUyxNQUFNO0FBRWJDLFFBRFdDLFNBQVNDLGNBQWMsUUFBUXBELENBQUUsUUFBUSxFQUNqRHFELE1BQU87QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNGO0FBa0JEQyxXQUFBQSxFQUFhO0FBQUEsTUFDWEMsU0FqQmMsTUFBWTVELEVBQUE7O0FBQzFCLGVBQU1mLElBQUFBLEVBQVFPLFVBQVJQLGdCQUFBQSxFQUFldUQ7QUFFckIsY0FBTXFCLElBQVl4RSxFQUFLRyxNQUNwQlcsSUFBS0MsQ0FBQUEsTUFDQUksRUFBVUosRUFBS0MsRUFBRSxJQUNaSyxFQUFXbUMsSUFBSXpDLEVBQUtDLEVBQUUsSUFFeEJELENBQ1IsRUFDQVIsT0FBUUMsQ0FBQUEsTUFBc0IsQ0FBQyxFQUFDQSxLQUFBQSxRQUFBQSxFQUFHTCxNQUFLO0FBQzNDRCxRQUFBQSxFQUFVQyxRQUFRcUU7QUFBQUEsTUFDbkI7QUFBQSxNQU1DQyxNQUFJQyxFQUFBRDtBQUFBQSxJQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
