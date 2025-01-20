<template>
  <n-space vertical>
    <div class="flex items-center">
      <div class="flex-1">
        <n-space>
          <n-input
            v-model:value="keyword"
            placeholder="请输入搜索的关键词"
          ></n-input>
          <UpdateData :update-function="updateFunction"
            >从服务器更新黑名单列表</UpdateData
          >
        </n-space>
      </div>
      <n-button type="primary" @click="onAdd">
        <template #icon>
          <div class="i-bytesize-plus mt--3px"></div>
        </template>
        添加</n-button
      >
    </div>
    <n-form
      label-placement="left"
      ref="formRef"
      inline
      :model="data"
      :theme-overrides="{
        peers: {
          feedbackHeight: '0',
        },
      }"
    >
      <n-data-table
        :columns="columns"
        :data="presentationData"
        :pagination="false"
        :bordered="false"
        :max-height="250"
      />
    </n-form>
  </n-space>
</template>

<script setup lang="tsx">
import type { DataTableColumns, FormInst } from 'naive-ui';
import { NButton, NSpace, NInput, NPopconfirm, NFormItem } from 'naive-ui';
import { v6 as uuid } from 'uuid';
import * as _ from 'lodash-es';
import { blacklist, type Blacklist, updateBlacklist } from '../store';
import UpdateData from './update-data.vue';
import { updateData } from '../api/data';

const formRef = ref<FormInst | null>(null);

const data = ref(_.cloneDeep(blacklist.value));

const keyword = ref('');
const presentationData = computed(() => {
  return data.value.filter((f) => {
    if (keyword.value) {
      return f.value.includes(keyword.value);
    }
    return true;
  });
});

const updateFunction = async () => {
  const result = await updateData<string[]>('blacklist.json');
  const newData = result.map((item): Blacklist => {
    return {
      id: uuid(),
      value: item,
    };
  });
  updateBlacklist(newData);
  data.value = _.cloneDeep(blacklist.value);
};

const editLists = reactive<Record<string, boolean>>({});
// 记忆值，取消之后需要恢复
const cacheValue = new Map<string, Blacklist>();

const columns: DataTableColumns<Blacklist> = [
  {
    title: '内容',
    key: 'value',

    render(row) {
      if (!editLists[row.id]) {
        return row.value;
      }
      const current = data.value.find((item) => item.id === row.id)!;
      const placeholder = '请输入关键词';
      const index = data.value.findIndex((item) => item.id === row.id);
      return (
        <div class={`flex inp-${row.id}`}>
          <NFormItem
            class={'flex-1'}
            label={''}
            path={`${index}.value`}
            rule={[
              {
                trigger: ['input', 'blur'],
                message: '请输入关键词!',
                required: true,
                type: 'string',
                transform(value) {
                  return value.trim();
                },
              },
              {
                trigger: ['input', 'blur'],
                asyncValidator: async (_, value) => {
                  const arr = data.value.filter((f) => f.id !== row.id);
                  if (arr.some((f) => f.value === value)) {
                    return Promise.reject(`黑名单「${value}」已存在！`);
                  }
                },
              },
            ]}
          >
            <NInput
              v-model:value={current.value}
              placeholder={placeholder}
            ></NInput>
          </NFormItem>
        </div>
      );
    },
  },
  {
    width: 200,
    title: '操作',
    key: 'actions',
    render(row) {
      if (editLists[row.id]) {
        return (
          <NSpace>
            <NButton
              type="primary"
              onClick={() => {
                formRef.value
                  ?.validate()
                  .then(() => {
                    editLists[row.id] = false;
                  })
                  .catch(() => {});
              }}
            >
              保存
            </NButton>
            <NButton
              onClick={() => {
                editLists[row.id] = false;
                const result = cacheValue.get(row.id);
                if (!result) {
                  data.value = data.value.filter((item) => item.id !== row.id);
                  return;
                }
                data.value = data.value.map((item) => {
                  if (item.id === row.id) {
                    return result;
                  }
                  return item;
                });
              }}
            >
              取消
            </NButton>
          </NSpace>
        );
      }
      return (
        <NSpace>
          <NButton
            type="primary"
            onClick={() => {
              editLists[row.id] = true;
              cacheValue.set(row.id, { ...row });
            }}
          >
            编辑
          </NButton>

          <NPopconfirm
            onPositiveClick={() => {
              data.value = data.value.filter((item) => item.id !== row.id);
              delete editLists[row.id];
            }}
            onNegativeClick={() => {}}
          >
            {{
              trigger: () => <NButton onClick={() => {}}>删除</NButton>,
              default: () => '确定删除当前关键词吗？',
            }}
          </NPopconfirm>
        </NSpace>
      );
    },
  },
];

const onAdd = () => {
  const id = uuid();
  data.value.push({
    value: '',
    id,
  });
  editLists[id] = true;
  nextTick(() => {
    const el = document.querySelector(`.inp-${id} input`) as HTMLInputElement;
    el.focus();
  });
};

const saveAll = async () => {
  await formRef.value?.validate();
  // 数据写入到本地，排除所有正在编辑的数据
  const localData = data.value
    .map((item) => {
      if (editLists[item.id]) {
        return cacheValue.get(item.id);
      }
      return item;
    })
    .filter((f): f is Blacklist => !!f?.value);
  blacklist.value = localData;
};

const { name } = defineProps<{ name: string }>();

defineExpose({
  saveAll,
  name,
});
</script>
