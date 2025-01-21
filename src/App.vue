<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import manage from './components/manage/manage.vue';
import { dateZhCN, zhCN } from 'naive-ui';
import { useHighlight } from './hooks/use-highlight';
import { store } from './store';
import ResultsDisplay from './components/results-display/results-display.vue';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#42b883',
  },
  Form: {
    feedbackHeightMedium: '0',
  },
};

const { result, run } = useHighlight();

watch(
  () => store,
  () => {
    run();
  },
  { deep: true },
);
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-message-provider>
      <manage></manage>
      <ResultsDisplay :result="result"></ResultsDisplay>
    </n-message-provider>
  </n-config-provider>
</template>

<!-- <style>
.job-body-wrapper {
  display: none;
}
</style> -->
