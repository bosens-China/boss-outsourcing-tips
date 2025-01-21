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
import { u as m, B as f } from "./naive-ui-Ceukqjr2.js";
import { k as g, J as _, Q as y, M as d, N as B, q as b, O as k } from "./vue-DUZbidQX.js";
import { a as C } from "./axios-Cf3dPNiV.js";
const $ = /* @__PURE__ */ g({
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
      const t = f;
      return _(), y(t, {
        onClick: c,
        loading: k(r)
      }, {
        icon: d(() => o[0] || (o[0] = [
          B("div", { class: "i-bytesize-feed" }, null, -1)
        ])),
        default: d(() => [
          b(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["loading"]);
    };
  }
}), q = (n) => p(void 0, null, function* () {
  const e = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@dev/src/constant/${n}`, { data: s } = yield C.get(e);
  return s;
});
export {
  $ as _,
  q as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1CZDFhODdISi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbWFuYWdlL3VwZGF0ZS1kYXRhLnZ1ZSIsIi4uLy4uL3NyYy9hcGkvZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxuLWJ1dHRvbiBAY2xpY2s9XCJvblVwZGF0ZVwiIDpsb2FkaW5nPVwibG9hZGluZ1wiPlxuICAgIDx0ZW1wbGF0ZSAjaWNvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpLWJ5dGVzaXplLWZlZWRcIj48L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9uLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VSZXF1ZXN0IH0gZnJvbSAndnVlLXJlcXVlc3QnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdXBkYXRlRnVuY3Rpb246ICgpID0+IFByb21pc2U8dm9pZD47XG59PigpO1xuXG5jb25zdCBtZXNzYWdlID0gdXNlTWVzc2FnZSgpO1xuY29uc3QgeyBydW4sIGxvYWRpbmcgfSA9IHVzZVJlcXVlc3QocHJvcHMudXBkYXRlRnVuY3Rpb24sIHtcbiAgbWFudWFsOiB0cnVlLFxuICBvblN1Y2Nlc3MoKSB7XG4gICAgbWVzc2FnZS5zdWNjZXNzKGDmm7TmlrDlrozmiJDjgIJgKTtcbiAgfSxcbiAgb25FcnJvcihlcnIpIHtcbiAgICBtZXNzYWdlLmVycm9yKGVyci5tZXNzYWdlLnRvU3RyaW5nKCkpO1xuICB9LFxufSk7XG5cbmNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICBydW4oKTtcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qKlxuICog5LuO5LuT5bqT6I635Y+W5pu05paw5paH5Lu2XG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyA8VD4oZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL2Jvc2Vucy1DaGluYS9ib3NzLW91dHNvdXJjaW5nLXRpcHNAJHtfX0FQUF9CUkFOQ0hfX30vc3JjL2NvbnN0YW50LyR7ZmlsZVBhdGh9YDtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQ8VD4odXJsKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsicHJvcHMiLCJfX3Byb3BzIiwibWVzc2FnZSIsInVzZU1lc3NhZ2UiLCJydW4iLCJsb2FkaW5nIiwidXNlUmVxdWVzdCIsImVyciIsIm9uVXBkYXRlIiwiX19hc3luYyIsInVwZGF0ZURhdGEiLCJmaWxlUGF0aCIsInVybCIsImRhdGEiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxVQUFNQSxJQUFRQyxHQUlSQyxJQUFVQyxFQUFXLEdBQ3JCLEVBQUUsS0FBQUMsR0FBSyxTQUFBQyxFQUFBLElBQVlDLEVBQVdOLEVBQU0sZ0JBQWdCO0FBQUEsTUFDeEQsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUNWLFFBQUFFLEVBQVEsUUFBUSxPQUFPO0FBQUEsTUFDekI7QUFBQSxNQUNBLFFBQVFLLEdBQUs7QUFDWCxRQUFBTCxFQUFRLE1BQU1LLEVBQUksUUFBUSxTQUFBLENBQVU7QUFBQSxNQUFBO0FBQUEsSUFDdEMsQ0FDRCxHQUVLQyxJQUFXLE1BQVlDLEVBQUE7QUFDdkIsTUFBQUwsRUFBQTtBQUFBLElBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcEJhTSxJQUFhLENBQVVDLE1BQXFCRixFQUFBO0FBQ3ZELFFBQU1HLElBQU0sc0ZBQW9HRCxDQUFRLElBQ2xILEVBQUUsTUFBQUUsRUFBSyxJQUFJLE1BQU1DLEVBQU0sSUFBT0YsQ0FBRztBQUVoQyxTQUFBQztBQUNUOyJ9
