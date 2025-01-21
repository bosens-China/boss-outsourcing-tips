<template>
  <a class="btn" :style="style">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';

const props = defineProps<{
  grade: 'determine' | 'probably';
}>();

const style = computed<StyleValue>(() => {
  return {
    width: 'auto',
    minWidth: '55px',
    color: props.grade === 'probably' ? '#faad14' : '#ff4d4f',
    padding: '0 12px',
    background: 'transparent',
    borderColor: 'transparent',
  };
});
</script>
