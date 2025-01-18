<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import manage from './components/manage.vue';
import { dateZhCN, zhCN } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#42b883',
  },
};
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <manage></manage>
  </n-config-provider>
</template>
