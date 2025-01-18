<script setup lang="ts">
const showModal = ref(false);

const tabs = [
  {
    tab: '关键词',
    name: 'keyword',
    components: defineAsyncComponent(() => import('./keyword.vue')),
  },
  {
    tab: '黑名单',
    name: 'blacklist',
    components: defineAsyncComponent(() => import('./blacklist.vue')),
  },
  {
    tab: '白名单',
    name: 'whiteList',
    components: defineAsyncComponent(() => import('./white-list.vue')),
  },
];

const activeTab = ref('keyword');
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-float-button
        right="25px"
        top="40vh"
        shape="square"
        @click="showModal = true"
        class="z-100"
      >
        <n-icon>
          <div class="i-bytesize-settings text-size-xl"></div>
        </n-icon>
      </n-float-button>
    </template>
    boss 外包提示设置
  </n-tooltip>

  <n-modal
    class="w-1000px"
    v-model:show="showModal"
    preset="card"
    title="boss 外包提示设置"
  >
    <n-tabs type="line" animated placement="left" v-model:value="activeTab">
      <n-tab-pane v-for="item of tabs" :key="item.name" v-bind="item">
        <Suspense>
          <component :is="item.components"></component>

          <template #fallback> Loading... </template>
        </Suspense>
      </n-tab-pane>
    </n-tabs>
    <template #footer>
      <div class="flex items-center">
        <div class="flex-1"></div>
        <n-space>
          <n-button type="primary">保存设置</n-button>
          <n-button @click="showModal = false">取消</n-button>
        </n-space>
      </div>
    </template>
  </n-modal>
</template>
