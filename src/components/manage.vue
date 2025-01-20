<script setup lang="ts">
const showModal = ref(false);

const tabs = [
  {
    tab: '过滤关键词',
    name: 'keyword',
    components: defineAsyncComponent(() => import('./keyword.vue')),
  },
  {
    tab: '黑名单（公司）',
    name: 'blacklist',
    components: defineAsyncComponent(() => import('./blacklist.vue')),
  },
  {
    tab: '白名单（公司）',
    name: 'whiteList',
    components: defineAsyncComponent(() => import('./white-list.vue')),
  },
];

const allRef = ref<
  {
    saveAll: () => Promise<void>;
    name: string;
  }[]
>();
const activeTab = ref('keyword');

const onSave = async () => {
  for (const { saveAll, name } of allRef.value?.toSorted((x, y) => {
    const xIndex = tabs.findIndex((f) => f.name === x.name);
    const yIndex = tabs.findIndex((f) => f.name === y.name);
    return xIndex - yIndex;
  }) || []) {
    try {
      await saveAll();
    } catch (e) {
      activeTab.value = name;
      return;
    }
  }
};
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
      <n-tab-pane
        v-for="item of tabs"
        :key="item.name"
        v-bind="item"
        display-directive="show:lazy"
      >
        <div class="min-h-350px">
          <Suspense>
            <component
              :is="item.components"
              ref="allRef"
              :name="item.name"
            ></component>

            <template #fallback> Loading... </template>
          </Suspense>
        </div>
      </n-tab-pane>
    </n-tabs>
    <template #footer>
      <div class="flex items-center">
        <div class="flex-1"></div>
        <n-space>
          <n-button type="primary" @click="onSave">保存设置</n-button>
          <n-button @click="showModal = false">取消</n-button>
        </n-space>
      </div>
    </template>
  </n-modal>
</template>
