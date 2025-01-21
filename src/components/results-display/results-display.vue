<template>
  <teleport to=".btn-container" v-if="determine || probably">
    <n-tooltip trigger="hover">
      <template #trigger>
        <Btn :grade="determine ? 'determine' : 'probably'">
          <span v-if="determine">❌ 外包公司</span>
          <span v-if="probably">⚠️ 可能为外包公司</span>
          <span>「悬浮查看详情」</span>
        </Btn>
      </template>
      <p :style="{ whiteSpace: 'pre' }">
        <template v-if="result.grade === 'blacklist'">
          <p>公司名称为外包：{{ Array.from(result.reason)[0] }}</p>
        </template>
        <template v-if="result.grade === 'keyword'">
          <p>出现了以下关键词：</p>
          <p v-for="(item, index) of result.reason" :key="item">
            {{ index + 1 }}. 「{{ item }}」
          </p>
        </template>
      </p>
    </n-tooltip>
  </teleport>
</template>

<script setup lang="ts">
import { type Mark } from '@/hooks/use-highlight';
import Btn from './btn.vue';

const props = defineProps<{
  result: Mark;
}>();

// 确定为外包公司
const determine = computed(() => {
  const { reason, grade } = props.result;
  if (grade === 'blacklist') {
    return true;
  }
  return reason.size >= 3;
});

// 可能为外包公司
const probably = computed(() => {
  const { reason } = props.result;
  return reason.size < 3 && determine.value === false;
});
</script>

<style scoped>
p,
div {
  font-size: 16px;
}
</style>
