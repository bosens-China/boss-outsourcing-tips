<template>
  <n-button @click="onUpdate" :loading="loading">
    <template #icon>
      <div class="i-bytesize-feed"></div>
    </template>
    <slot></slot>
  </n-button>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-request';

const props = defineProps<{
  updateFunction: () => Promise<void>;
}>();

const message = useMessage();
const { run, loading } = useRequest(props.updateFunction, {
  manual: true,
  onSuccess() {
    message.success(`更新完成。`);
  },
  onError(err) {
    message.error(err.message.toString());
  },
});

const onUpdate = async () => {
  run();
};
</script>
