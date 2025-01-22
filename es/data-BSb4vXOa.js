var p = (n, e, s) => new Promise((u, r) => {
  var c = (t) => {
    try {
      o(s.next(t));
    } catch (i) {
      r(i);
    }
  }, a = (t) => {
    try {
      o(s.throw(t));
    } catch (i) {
      r(i);
    }
  }, o = (t) => t.done ? u(t.value) : Promise.resolve(t.value).then(c, a);
  o((s = s.apply(n, e)).next());
});
import { u as l } from "./vue-request-CjJKC2-2.js";
import { u as m, B as g } from "./naive-ui-Ceukqjr2.js";
import { k as f, J as _, Q as x, M as d, N as y, q as B, O as b } from "./vue-DUZbidQX.js";
const $ = /* @__PURE__ */ f({
  __name: "update-data",
  props: {
    updateFunction: { type: Function }
  },
  setup(n) {
    const e = n, s = m(), { run: u, loading: r } = l(e.updateFunction, {
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
    return (a, o) => {
      const t = g;
      return _(), x(t, {
        onClick: c,
        loading: b(r)
      }, {
        icon: d(() => o[0] || (o[0] = [
          y("div", { class: "i-bytesize-feed" }, null, -1)
        ])),
        default: d(() => [
          B(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["loading"]);
    };
  }
}), k = () => window.axios, w = k(), q = (n) => p(void 0, null, function* () {
  const e = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@master/src/constant/${n}`, { data: s } = yield w.get(e);
  return s;
});
export {
  $ as _,
  q as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1CU2I0dlhPYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL3VwZGF0ZS1kYXRhLnZ1ZSIsIi4uLy4uL3NyYy91dGlscy9yZXF1ZXN0LnRzIiwiLi4vLi4vc3JjL2FwaS9kYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG4tYnV0dG9uIEBjbGljaz1cIm9uVXBkYXRlXCIgOmxvYWRpbmc9XCJsb2FkaW5nXCI+XG4gICAgPHRlbXBsYXRlICNpY29uPlxuICAgICAgPGRpdiBjbGFzcz1cImktYnl0ZXNpemUtZmVlZFwiPjwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L24tYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZVJlcXVlc3QgfSBmcm9tICd2dWUtcmVxdWVzdCc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB1cGRhdGVGdW5jdGlvbjogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn0+KCk7XG5cbmNvbnN0IG1lc3NhZ2UgPSB1c2VNZXNzYWdlKCk7XG5jb25zdCB7IHJ1biwgbG9hZGluZyB9ID0gdXNlUmVxdWVzdChwcm9wcy51cGRhdGVGdW5jdGlvbiwge1xuICBtYW51YWw6IHRydWUsXG4gIG9uU3VjY2VzcygpIHtcbiAgICBtZXNzYWdlLnN1Y2Nlc3MoYOabtOaWsOWujOaIkOOAgmApO1xuICB9LFxuICBvbkVycm9yKGVycikge1xuICAgIG1lc3NhZ2UuZXJyb3IoZXJyLm1lc3NhZ2UudG9TdHJpbmcoKSk7XG4gIH0sXG59KTtcblxuY29uc3Qgb25VcGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIHJ1bigpO1xufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHR5cGUgeyBBeGlvcyB9IGZyb20gJ2F4aW9zJztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciDlv73nlaXmo4Dmn6VcbmV4cG9ydCBjb25zdCBnZXRBeGlvcyA9ICgpID0+IHdpbmRvdy5heGlvcyBhcyBBeGlvcztcbiIsImltcG9ydCB7IGdldEF4aW9zIH0gZnJvbSAnQC91dGlscy9yZXF1ZXN0JztcblxuY29uc3QgYXhpb3MgPSBnZXRBeGlvcygpO1xuXG4vKipcbiAqIOS7juS7k+W6k+iOt+WPluabtOaWsOaWh+S7tlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGhcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVEYXRhID0gYXN5bmMgPFQ+KGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vZmFzdGx5LmpzZGVsaXZyLm5ldC9naC9ib3NlbnMtQ2hpbmEvYm9zcy1vdXRzb3VyY2luZy10aXBzQCR7X19BUFBfQlJBTkNIX199L3NyYy9jb25zdGFudC8ke2ZpbGVQYXRofWA7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0PFQ+KHVybCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sIm5hbWVzIjpbInByb3BzIiwiX19wcm9wcyIsIm1lc3NhZ2UiLCJ1c2VNZXNzYWdlIiwicnVuIiwibG9hZGluZyIsInVzZVJlcXVlc3QiLCJlcnIiLCJvblVwZGF0ZSIsIl9fYXN5bmMiLCJnZXRBeGlvcyIsImF4aW9zIiwidXBkYXRlRGF0YSIsImZpbGVQYXRoIiwidXJsIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLFVBQU1BLElBQVFDLEdBSVJDLElBQVVDLEVBQVcsR0FDckIsRUFBRSxLQUFBQyxHQUFLLFNBQUFDLEVBQUEsSUFBWUMsRUFBV04sRUFBTSxnQkFBZ0I7QUFBQSxNQUN4RCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQ1YsUUFBQUUsRUFBUSxRQUFRLE9BQU87QUFBQSxNQUN6QjtBQUFBLE1BQ0EsUUFBUUssR0FBSztBQUNYLFFBQUFMLEVBQVEsTUFBTUssRUFBSSxRQUFRLFNBQUEsQ0FBVTtBQUFBLE1BQUE7QUFBQSxJQUN0QyxDQUNELEdBRUtDLElBQVcsTUFBWUMsRUFBQTtBQUN2QixNQUFBTCxFQUFBO0FBQUEsSUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxQmFNLElBQVcsTUFBTSxPQUFPLE9DRC9CQyxJQUFRRCxFQUFTLEdBU1ZFLElBQWEsQ0FBVUMsTUFBcUJKLEVBQUE7QUFDdkQsUUFBTUssSUFBTSx5RkFBb0dELENBQVEsSUFDbEgsRUFBRSxNQUFBRSxFQUFLLElBQUksTUFBTUosRUFBTSxJQUFPRyxDQUFHO0FBRWhDLFNBQUFDO0FBQ1Q7In0=
