import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  server: {
    proxy: {
      "https://www.zhipin.com": {
        target: "https://www.zhipin.com",
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path);
          return path.replace(`https://www.zhipin.com`, "");
        },
      },
    },
  },
});
