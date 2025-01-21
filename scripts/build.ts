import 'zx/globals';
import { type UserConfig, build } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import viteConfig from '../vite.config';
import * as _ from 'lodash-es';
import { $ } from 'zx';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

process.env.FORCE_COLOR = '1';

function mergeViteConfiguration(config: UserConfig) {
  return _.merge(viteConfig(), config);
}

const tasks: Array<UserConfig> = [
  {
    publicDir: false,
    build: {
      outDir: './dist/es',
      lib: {
        entry: './src/main.ts',
        formats: ['es'],
        fileName: `index`,
        name: 'main',
        cssFileName: 'style',
      },
      manifest: 'manifest.json',
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            'naive-ui': ['naive-ui'],
            axios: ['axios'],
            'lodash-es': ['lodash-es'],
            seroval: ['seroval'],
            uuid: ['uuid'],
            'vue-request': ['vue-request'],
          },
        },
      },
    },
  },
  {
    publicDir: false,
    build: {
      outDir: './dist/iife',
      lib: {
        entry: './src/main.ts',
        formats: ['iife'],
        fileName: `index`,
        name: 'main',
        cssFileName: 'style',
      },
      manifest: 'manifest.json',
    },
  },
];

for (const task of tasks) {
  process.env.TASK = JSON.stringify(task);
  await $`vite build`.verbose(true);
}
await build(
  mergeViteConfiguration({
    publicDir: false,
    build: {
      sourcemap: false,
      lib: {
        entry: path.join(__dirname, '../src/entrance.ts'),
        formats: ['iife'],
        name: 'entrance',
        fileName: 'entrance',
      },
      emptyOutDir: false,
      manifest: false,
    },
    plugins: [],
  }),
);
