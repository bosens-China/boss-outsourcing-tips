var p = (o, e, s) => new Promise((u, r) => {
  var c = (t) => {
    try {
      n(s.next(t));
    } catch (i) {
      r(i);
    }
  }, a = (t) => {
    try {
      n(s.throw(t));
    } catch (i) {
      r(i);
    }
  }, n = (t) => t.done ? u(t.value) : Promise.resolve(t.value).then(c, a);
  n((s = s.apply(o, e)).next());
});
import { u as l } from "./vue-request-CjJKC2-2.js";
import { u as m, B as f } from "./naive-ui-Ceukqjr2.js";
import { k as g, J as _, Q as y, M as d, N as B, q as b, O as k } from "./vue-DUZbidQX.js";
const S = /* @__PURE__ */ g({
  __name: "update-data",
  props: {
    updateFunction: { type: Function }
  },
  setup(o) {
    const e = o, s = m(), { run: u, loading: r } = l(e.updateFunction, {
      manual: !0,
      onSuccess() {
        s.success("更新完成。");
      },
      onError(a) {
        s.error(a.message.toString());
      }
    }), c = () => p(this, null, function* () {
      u();
    });
    return (a, n) => {
      const t = f;
      return _(), y(t, {
        onClick: c,
        loading: k(r)
      }, {
        icon: d(() => n[0] || (n[0] = [
          B("div", { class: "i-bytesize-feed" }, null, -1)
        ])),
        default: d(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["loading"]);
    };
  }
}), w = window.axios, $ = (o) => p(void 0, null, function* () {
  const e = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@master/src/constant/${o}`, { data: s } = yield w.get(e);
  return s;
});
export {
  S as _,
  $ as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1YRUU5LTRlRy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL3VwZGF0ZS1kYXRhLnZ1ZSIsIi4uLy4uL3NyYy91dGlscy9yZXF1ZXN0LnRzIiwiLi4vLi4vc3JjL2FwaS9kYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG4tYnV0dG9uIEBjbGljaz1cIm9uVXBkYXRlXCIgOmxvYWRpbmc9XCJsb2FkaW5nXCI+XG4gICAgPHRlbXBsYXRlICNpY29uPlxuICAgICAgPGRpdiBjbGFzcz1cImktYnl0ZXNpemUtZmVlZFwiPjwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L24tYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVJlcXVlc3QgfSBmcm9tICd2dWUtcmVxdWVzdCc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB1cGRhdGVGdW5jdGlvbjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn0+KCk7XG5cbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5jb25zdCB7IHJ1biwgbG9hZGluZyB9ID0gdXNlUmVxdWVzdChwcm9wcy51cGRhdGVGdW5jdGlvbiwge1xuICBtYW51YWw6IHRydWUsXG4gIG9uU3VjY2VzcygpIHtcbiAgICBtZXNzYWdlLnN1Y2Nlc3MoYOabtOaWsOWujOaIkOOAgmApO1xuICB9LFxuICBvbkVycm9yKGVycikge1xuICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UudG9TdHJpbmcoKSk7XG4gIH0sXG59KTtcblxuY29uc3Qgb25VcGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHJ1bigpO1xufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHR5cGUgeyBBeGlvcyB9IGZyb20gJ2F4aW9zJztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciDlv73nlaXmo4Dmn6VcbmV4cG9ydCBjb25zdCBheGlvcyA9IHdpbmRvdy5heGlvcyBhcyBBeGlvcztcbiIsImltcG9ydCB7IGF4aW9zIH0gZnJvbSAnQC91dGlscy9yZXF1ZXN0JztcblxuLyoqXG4gKiDku47ku5PlupPojrflj5bmm7TmlrDmlofku7ZcbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIDxUPihmaWxlUGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXQvZ2gvYm9zZW5zLUNoaW5hL2Jvc3Mtb3V0c291cmNpbmctdGlwc0Ake19fQVBQX0JSQU5DSF9ffS9zcmMvY29uc3RhbnQvJHtmaWxlUGF0aH1gO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldDxUPih1cmwpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJwcm9wcyIsIl9fcHJvcHMiLCJtZXNzYWdlIiwidXNlTWVzc2FnZSIsInJ1biIsImxvYWRpbmciLCJ1c2VSZXF1ZXN0IiwiZXJyIiwib25VcGRhdGUiLCJfX2FzeW5jIiwiYXhpb3MiLCJ1cGRhdGVEYXRhIiwiZmlsZVBhdGgiLCJ1cmwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsVUFBTUEsSUFBUUMsR0FJUkMsSUFBVUMsRUFBVyxHQUNyQixFQUFFLEtBQUFDLEdBQUssU0FBQUMsRUFBQSxJQUFZQyxFQUFXTixFQUFNLGdCQUFnQjtBQUFBLE1BQ3hELFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFDVixRQUFBRSxFQUFRLFFBQVEsT0FBTztBQUFBLE1BQ3pCO0FBQUEsTUFDQSxRQUFRSyxHQUFLO0FBQ1gsUUFBQUwsRUFBUSxNQUFNSyxFQUFJLFFBQVEsU0FBQSxDQUFVO0FBQUEsTUFBQTtBQUFBLElBQ3RDLENBQ0QsR0FFS0MsSUFBVyxNQUFZQyxFQUFBO0FBQ3ZCLE1BQUFMLEVBQUE7QUFBQSxJQUNOOzs7Ozs7Ozs7Ozs7Ozs7OztJQzFCYU0sSUFBUSxPQUFPLE9DTWZDLElBQWEsQ0FBVUMsTUFBcUJILEVBQUE7QUFDdkQsUUFBTUksSUFBTSx5RkFBb0dELENBQVEsSUFDbEgsRUFBRSxNQUFBRSxFQUFLLElBQUksTUFBTUosRUFBTSxJQUFPRyxDQUFHO0FBRWhDLFNBQUFDO0FBQ1Q7In0=
