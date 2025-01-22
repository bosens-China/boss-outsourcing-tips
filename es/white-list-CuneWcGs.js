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
var g = (r, i, a) => new Promise((k, n) => {
  var d = (u) => {
    try {
      m(a.next(u));
    } catch (c) {
      n(c);
    }
  }, x = (u) => {
    try {
      m(a.throw(u));
    } catch (c) {
      n(c);
    }
  }, m = (u) => u.done ? k(u.value) : Promise.resolve(u.value).then(d, x);
  m((a = a.apply(r, i)).next());
});
import { w as N, c as S } from "./main-vfeR_f7a.js";
import { _ as T, u as U } from "./data-CX54v4WH.js";
import { c as I } from "./lodash-es-CqrSZx9w.js";
import { u as z, c as y, i as j, B as _, l as H, m as J, n as O, o as Q } from "./naive-ui-BGg8odC1.js";
import { v as A } from "./uuid-DPrBhu07.js";
import { k as W, r as b, c as E, e as G, J as K, Q as X, M as p, N as C, L as s, O as f, I as Y, j as v, n as Z } from "./vue-DUZbidQX.js";
const w = {
  class: "flex items-center"
}, ee = {
  class: "flex-1"
}, de = /* @__PURE__ */ W({
  __name: "white-list",
  props: {
    name: {}
  },
  setup(r, {
    expose: i
  }) {
    const a = b(null), k = z(), n = b(I(N.value)), d = b(""), x = E(() => n.value.filter((e) => d.value ? e.value.includes(d.value) : !0)), m = () => g(this, null, function* () {
      const t = (yield U("white-list.json")).map((l) => ({
        id: A(),
        value: l
      }));
      S(t), n.value = I(N.value);
    }), u = G({}), c = /* @__PURE__ */ new Map(), M = [{
      title: "内容",
      key: "value",
      render(e) {
        if (!u[e.id])
          return e.value;
        const t = n.value.find((o) => o.id === e.id), l = "请输入关键词", h = n.value.findIndex((o) => o.id === e.id);
        return s("div", {
          class: "flex"
        }, [s(H, {
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
            asyncValidator: (o, B) => g(this, null, function* () {
              if (n.value.filter((D) => D.id !== e.id).some((D) => D.value === B))
                return Promise.reject(`黑名单「${B}」已存在！`);
            })
          }]
        }, {
          default: () => [s(j, {
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
        return u[e.id] ? s(y, null, {
          default: () => [s(_, {
            type: "primary",
            onClick: () => {
              var t;
              (t = a.value) == null || t.validate().then(() => {
                u[e.id] = !1;
              }).catch(() => {
              });
            }
          }, {
            default: () => [v("保存")]
          }), s(_, {
            onClick: () => {
              u[e.id] = !1;
              const t = c.get(e.id);
              if (!t) {
                n.value = n.value.filter((l) => l.id !== e.id);
                return;
              }
              n.value = n.value.map((l) => l.id === e.id ? t : l);
            }
          }, {
            default: () => [v("取消")]
          })]
        }) : s(y, null, {
          default: () => [s(_, {
            type: "primary",
            onClick: () => {
              u[e.id] = !0, c.set(e.id, V({}, e));
            }
          }, {
            default: () => [v("编辑")]
          }), s(J, {
            onPositiveClick: () => {
              n.value = n.value.filter((t) => t.id !== e.id), delete u[e.id], k.success("删除成功，保存设置后生效。");
            },
            onNegativeClick: () => {
            }
          }, {
            trigger: () => s(_, null, {
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
      }), u[e] = !0, Z(() => {
        document.querySelector(`.inp-${e} input`).focus();
      });
    };
    return i({
      saveAll: () => g(this, null, function* () {
        var t;
        yield (t = a.value) == null ? void 0 : t.validate();
        const e = n.value.map((l) => u[l.id] ? c.get(l.id) : l).filter((l) => !!(l != null && l.value));
        N.value = e;
      }),
      name: r.name
    }), (e, t) => {
      const l = O, h = Q;
      return K(), X(f(y), {
        vertical: ""
      }, {
        default: p(() => [C("div", w, [C("div", ee, [s(f(y), null, {
          default: p(() => [s(f(j), {
            value: f(d),
            "onUpdate:value": t[0] || (t[0] = (o) => Y(d) ? d.value = o : null),
            placeholder: "请输入搜索的关键词"
          }, null, 8, ["value"]), s(T, {
            "update-function": m
          }, {
            default: p(() => t[1] || (t[1] = [v("从仓库更新数据")])),
            _: 1
          })]),
          _: 1
        })]), s(f(_), {
          type: "primary",
          onClick: P
        }, {
          icon: p(() => t[2] || (t[2] = [C("div", {
            class: "i-bytesize-plus mt--3px"
          }, null, -1)])),
          default: p(() => [t[3] || (t[3] = v(" 添加"))]),
          _: 1
        })]), s(h, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hpdGUtbGlzdC1DdW5lV2NHcy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL3doaXRlLWxpc3QudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG4tc3BhY2UgdmVydGljYWw+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XG4gICAgICAgIDxuLXNwYWNlPlxuICAgICAgICAgIDxuLWlucHV0XG4gICAgICAgICAgICB2LW1vZGVsOnZhbHVlPVwia2V5d29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaQnOe0oueahOWFs+mUruivjVwiXG4gICAgICAgICAgPjwvbi1pbnB1dD5cbiAgICAgICAgICA8VXBkYXRlRGF0YSA6dXBkYXRlLWZ1bmN0aW9uPVwidXBkYXRlRnVuY3Rpb25cIlxuICAgICAgICAgICAgPuS7juS7k+W6k+abtOaWsOaVsOaNrjwvVXBkYXRlRGF0YVxuICAgICAgICAgID5cbiAgICAgICAgPC9uLXNwYWNlPlxuICAgICAgPC9kaXY+XG4gICAgICA8bi1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJvbkFkZFwiPlxuICAgICAgICA8dGVtcGxhdGUgI2ljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImktYnl0ZXNpemUtcGx1cyBtdC0tM3B4XCI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIOa3u+WKoDwvbi1idXR0b25cbiAgICAgID5cbiAgICA8L2Rpdj5cbiAgICA8bi1mb3JtXG4gICAgICByZWY9XCJmb3JtUmVmXCJcbiAgICAgIGxhYmVsLXBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgaW5saW5lXG4gICAgICA6bW9kZWw9XCJkYXRhXCJcbiAgICAgIDp0aGVtZS1vdmVycmlkZXM9XCJ7XG4gICAgICAgIHBlZXJzOiB7XG4gICAgICAgICAgZmVlZGJhY2tIZWlnaHQ6ICcwJyxcbiAgICAgICAgfSxcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxuLWRhdGEtdGFibGVcbiAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgOmRhdGE9XCJwcmVzZW50YXRpb25EYXRhXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJmYWxzZVwiXG4gICAgICAgIDpib3JkZXJlZD1cImZhbHNlXCJcbiAgICAgICAgOm1heC1oZWlnaHQ9XCIyNTBcIlxuICAgICAgLz5cbiAgICA8L24tZm9ybT5cbiAgPC9uLXNwYWNlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHN4XCI+XG5pbXBvcnQgdHlwZSB7IERhdGFUYWJsZUNvbHVtbnMsIEZvcm1JbnN0IH0gZnJvbSAnbmFpdmUtdWknO1xuaW1wb3J0IHsgTkJ1dHRvbiwgTlNwYWNlLCBOSW5wdXQsIE5Qb3Bjb25maXJtLCBORm9ybUl0ZW0gfSBmcm9tICduYWl2ZS11aSc7XG5pbXBvcnQgeyB2NiBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB3aGl0ZWxpc3QsIHR5cGUgV2hpdGVsaXN0LCB1cGRhdGVXaGl0ZWxpc3QgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCBVcGRhdGVEYXRhIGZyb20gJy4vdXBkYXRlLWRhdGEudnVlJztcbmltcG9ydCB7IHVwZGF0ZURhdGEgfSBmcm9tICdAL2FwaS9kYXRhJztcblxuY29uc3QgZm9ybVJlZiA9IHJlZjxGb3JtSW5zdCB8IG51bGw+KG51bGwpO1xuY29uc3QgbWVzc2FnZSA9IHVzZU1lc3NhZ2UoKTtcblxuY29uc3QgZGF0YSA9IHJlZihfLmNsb25lRGVlcCh3aGl0ZWxpc3QudmFsdWUpKTtcblxuY29uc3Qga2V5d29yZCA9IHJlZignJyk7XG5jb25zdCBwcmVzZW50YXRpb25EYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gZGF0YS52YWx1ZS5maWx0ZXIoKGYpID0+IHtcbiAgICBpZiAoa2V5d29yZC52YWx1ZSkge1xuICAgICAgcmV0dXJuIGYudmFsdWUuaW5jbHVkZXMoa2V5d29yZC52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn0pO1xuXG5jb25zdCB1cGRhdGVGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlRGF0YTxzdHJpbmdbXT4oJ3doaXRlLWxpc3QuanNvbicpO1xuICBjb25zdCBuZXdEYXRhID0gcmVzdWx0Lm1hcCgoaXRlbSk6IFdoaXRlbGlzdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICB2YWx1ZTogaXRlbSxcbiAgICB9O1xuICB9KTtcbiAgdXBkYXRlV2hpdGVsaXN0KG5ld0RhdGEpO1xuICBkYXRhLnZhbHVlID0gXy5jbG9uZURlZXAod2hpdGVsaXN0LnZhbHVlKTtcbn07XG5cbmNvbnN0IGVkaXRMaXN0cyA9IHJlYWN0aXZlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7fSk7XG4vLyDorrDlv4blgLzvvIzlj5bmtojkuYvlkI7pnIDopoHmgaLlpI1cbmNvbnN0IGNhY2hlVmFsdWUgPSBuZXcgTWFwPHN0cmluZywgV2hpdGVsaXN0PigpO1xuXG5jb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5zPFdoaXRlbGlzdD4gPSBbXG4gIHtcbiAgICB0aXRsZTogJ+WGheWuuScsXG4gICAga2V5OiAndmFsdWUnLFxuXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKCFlZGl0TGlzdHNbcm93LmlkXSkge1xuICAgICAgICByZXR1cm4gcm93LnZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudCA9IGRhdGEudmFsdWUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm93LmlkKSE7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9ICfor7fovpPlhaXlhbPplK7or40nO1xuICAgICAgY29uc3QgaW5kZXggPSBkYXRhLnZhbHVlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm93LmlkKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9eydmbGV4J30+XG4gICAgICAgICAgPE5Gb3JtSXRlbVxuICAgICAgICAgICAgY2xhc3M9e2BmbGV4LTEgaW5wLSR7cm93LmlkfWB9XG4gICAgICAgICAgICBsYWJlbD17Jyd9XG4gICAgICAgICAgICBwYXRoPXtgJHtpbmRleH0udmFsdWVgfVxuICAgICAgICAgICAgcnVsZT17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogWydpbnB1dCcsICdibHVyJ10sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeWFs+mUruivjSEnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogWydpbnB1dCcsICdibHVyJ10sXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3I6IGFzeW5jIChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gZGF0YS52YWx1ZS5maWx0ZXIoKGYpID0+IGYuaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyLnNvbWUoKGYpID0+IGYudmFsdWUgPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYOm7keWQjeWNleOAjCR7dmFsdWV944CN5bey5a2Y5Zyo77yBYCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5JbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsOnZhbHVlPXtjdXJyZW50LnZhbHVlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA+PC9OSW5wdXQ+XG4gICAgICAgICAgPC9ORm9ybUl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICB0aXRsZTogJ+aTjeS9nCcsXG4gICAga2V5OiAnYWN0aW9ucycsXG4gICAgcmVuZGVyKHJvdykge1xuICAgICAgaWYgKGVkaXRMaXN0c1tyb3cuaWRdKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5TcGFjZT5cbiAgICAgICAgICAgIDxOQnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1SZWYudmFsdWVcbiAgICAgICAgICAgICAgICAgID8udmFsaWRhdGUoKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlZGl0TGlzdHNbcm93LmlkXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgPC9OQnV0dG9uPlxuICAgICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRMaXN0c1tyb3cuaWRdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FjaGVWYWx1ZS5nZXQocm93LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IGRhdGEudmFsdWUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSByb3cuaWQpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICAgIDwvTkJ1dHRvbj5cbiAgICAgICAgICA8L05TcGFjZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOU3BhY2U+XG4gICAgICAgICAgPE5CdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZWRpdExpc3RzW3Jvdy5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICBjYWNoZVZhbHVlLnNldChyb3cuaWQsIHsgLi4ucm93IH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDnvJbovpFcbiAgICAgICAgICA8L05CdXR0b24+XG5cbiAgICAgICAgICA8TlBvcGNvbmZpcm1cbiAgICAgICAgICAgIG9uUG9zaXRpdmVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gZGF0YS52YWx1ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHJvdy5pZCk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlZGl0TGlzdHNbcm93LmlkXTtcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfliKDpmaTmiJDlip/vvIzkv53lrZjorr7nva7lkI7nlJ/mlYjjgIInKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk5lZ2F0aXZlQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgIHRyaWdnZXI6ICgpID0+IDxOQnV0dG9uPuWIoOmZpDwvTkJ1dHRvbj4sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGDnoa7lrprliKDpmaTpu5HlkI3ljZXjgIwke3Jvdy52YWx1ZX3jgI3lkJfvvJ9gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L05Qb3Bjb25maXJtPlxuICAgICAgICA8L05TcGFjZT5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IG9uQWRkID0gKCkgPT4ge1xuICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgZGF0YS52YWx1ZS5wdXNoKHtcbiAgICB2YWx1ZTogJycsXG4gICAgaWQsXG4gIH0pO1xuICBlZGl0TGlzdHNbaWRdID0gdHJ1ZTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmlucC0ke2lkfSBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgZWwuZm9jdXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlQWxsID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpO1xuICAvLyDmlbDmja7lhpnlhaXliLDmnKzlnLDvvIzmjpLpmaTmiYDmnInmraPlnKjnvJbovpHnmoTmlbDmja5cbiAgY29uc3QgbG9jYWxEYXRhID0gZGF0YS52YWx1ZVxuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChlZGl0TGlzdHNbaXRlbS5pZF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlVmFsdWUuZ2V0KGl0ZW0uaWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSlcbiAgICAuZmlsdGVyKChmKTogZiBpcyBXaGl0ZWxpc3QgPT4gISFmPy52YWx1ZSk7XG5cbiAgd2hpdGVsaXN0LnZhbHVlID0gbG9jYWxEYXRhO1xufTtcblxuY29uc3QgeyBuYW1lIH0gPSBkZWZpbmVQcm9wczx7IG5hbWU6IHN0cmluZyB9PigpO1xuXG5kZWZpbmVFeHBvc2Uoe1xuICBzYXZlQWxsLFxuICBuYW1lLFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJmb3JtUmVmIiwicmVmIiwibWVzc2FnZSIsInVzZU1lc3NhZ2UiLCJkYXRhIiwiXyIsIndoaXRlbGlzdCIsInZhbHVlIiwia2V5d29yZCIsInByZXNlbnRhdGlvbkRhdGEiLCJjb21wdXRlZCIsImZpbHRlciIsImYiLCJpbmNsdWRlcyIsInVwZGF0ZUZ1bmN0aW9uIiwiX19hc3luYyIsIm5ld0RhdGEiLCJ1cGRhdGVEYXRhIiwibWFwIiwiaXRlbSIsImlkIiwidXVpZCIsInVwZGF0ZVdoaXRlbGlzdCIsImVkaXRMaXN0cyIsInJlYWN0aXZlIiwiY2FjaGVWYWx1ZSIsIk1hcCIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsInJlbmRlciIsInJvdyIsImN1cnJlbnQiLCJmaW5kIiwicGxhY2Vob2xkZXIiLCJpbmRleCIsImZpbmRJbmRleCIsIl9jcmVhdGVWTm9kZTIiLCJORm9ybUl0ZW0iLCJ0cmlnZ2VyIiwicmVxdWlyZWQiLCJ0eXBlIiwidHJhbnNmb3JtIiwidHJpbSIsImFzeW5jVmFsaWRhdG9yIiwic29tZSIsIlByb21pc2UiLCJyZWplY3QiLCJkZWZhdWx0IiwiTklucHV0IiwiJGV2ZW50Iiwid2lkdGgiLCJOU3BhY2UiLCJOQnV0dG9uIiwib25DbGljayIsInZhbGlkYXRlIiwidGhlbiIsImNhdGNoIiwiX2NyZWF0ZVRleHRWTm9kZTIiLCJyZXN1bHQiLCJnZXQiLCJzZXQiLCJfX3NwcmVhZFZhbHVlcyIsIk5Qb3Bjb25maXJtIiwib25Qb3NpdGl2ZUNsaWNrIiwic3VjY2VzcyIsIm9uTmVnYXRpdmVDbGljayIsIm9uQWRkIiwicHVzaCIsIm5leHRUaWNrIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIl9fZXhwb3NlIiwic2F2ZUFsbCIsImxvY2FsRGF0YSIsIm5hbWUiLCJfX3Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREEsVUFBTUEsSUFBVUMsRUFBcUIsSUFBSSxHQUNuQ0MsSUFBVUMsRUFBWSxHQUV0QkMsSUFBT0gsRUFBSUksRUFBWUMsRUFBVUMsS0FBSyxDQUFDLEdBRXZDQyxJQUFVUCxFQUFJLEVBQUUsR0FDaEJRLElBQW1CQyxFQUFTLE1BQ3pCTixFQUFLRyxNQUFNSSxPQUFRQyxDQUFBQSxNQUNwQkosRUFBUUQsUUFDSEssRUFBRUwsTUFBTU0sU0FBU0wsRUFBUUQsS0FBSyxJQUVoQyxFQUNSLENBQ0YsR0FFS08sSUFBaUIsTUFBWUMsRUFBQTtBQUVqQyxZQUFNQyxLQURTLE1BQU1DLEVBQXFCLGlCQUFpQixHQUNwQ0MsSUFBS0MsQ0FBQUEsT0FDbkI7QUFBQSxRQUNMQyxJQUFJQyxFQUFNO0FBQUEsUUFDVmQsT0FBT1k7QUFBQUEsTUFDUixFQUNGO0FBQ0RHLE1BQUFBLEVBQWdCTixDQUFPLEdBQ3ZCWixFQUFLRyxRQUFRRixFQUFZQyxFQUFVQyxLQUFLO0FBQUEsSUFDekMsSUFFS2dCLElBQVlDLEVBQWtDLEVBQUUsR0FFaERDLElBQWEsb0JBQUlDLElBQXdCLEdBRXpDQyxJQUF1QyxDQUMzQztBQUFBLE1BQ0VDLE9BQU87QUFBQSxNQUNQQyxLQUFLO0FBQUEsTUFFTEMsT0FBT0MsR0FBSztBQUNWLFlBQUksQ0FBQ1IsRUFBVVEsRUFBSVgsRUFBRTtBQUNuQixpQkFBT1csRUFBSXhC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
