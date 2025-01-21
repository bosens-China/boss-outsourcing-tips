import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintrcAutoImport from './.eslintrc-auto-import.json' with { type: 'json' };

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  {
    languageOptions: eslintrcAutoImport,
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,

        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
