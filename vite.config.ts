import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { execSync } from 'child_process';
import * as _ from 'lodash-es';

function getCurrentGitBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf8',
    }).trim();
    return branch;
  } catch {
    return null;
  }
}
const TASK: UserConfig = process.env.TASK ? JSON.parse(process.env.TASK) : {};

// vite.config.ts
// https://vitejs.dev/config/
export default defineConfig(() => {
  const config: UserConfig = {
    define: {
      __APP_BRANCH__: JSON.stringify(getCurrentGitBranch()),
      'process.env.NODE_ENV': JSON.stringify('production'),
    },

    plugins: [
      vue(),
      AutoImport({
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: 'readable',
        },
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      UnoCSS(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: './dist/',
      target: ['es2015'],
      sourcemap: 'inline',
    },
  };

  return _.merge(config, TASK);
});
