<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { resolver } from "./utils/resolver";
import test1 from "./assets/test1.html?raw";

const probably = [test1];

const title = document.title;
const deleteItem: Array<Node> = [];
const recoveryItem: Array<() => unknown> = [() => (document.title = title)];

const onSend = async (html: string) => {
  const result = resolver(html);
  const { cssLink, styles, body, title } = result;

  deleteItem.forEach((item) => {
    item.parentNode?.removeChild(item);
  });

  recoveryItem.forEach((item) => item());

  // 加载
  document.body.appendChild(body);
  // body?.forEach((item) => {
  //   document.body.appendChild(item);

  //   deleteItem.push(item);
  // });
  [...cssLink, ...styles].forEach((item) => {
    document.head.appendChild(item);
    deleteItem.push(item);
  });

  document.title = title;
};
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-space class="mb-24px">
      <n-button
        v-for="(item, index) of probably"
        :key="item"
        @click="onSend(item)"
      >
        链接{{ index + 1 }}</n-button
      >
    </n-space>
  </n-config-provider>
</template>
