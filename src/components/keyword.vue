<template>
  <n-space vertical>
    <div class="flex items-center">
      <div class="flex-1">
        <n-space>
          <n-input
            v-model:value="keyword"
            placeholder="请输入搜索的关键词"
          ></n-input>
          <n-button>
            <template #icon>
              <div class="i-bytesize-feed"></div>
            </template>
            从服务器更新关键词数据
          </n-button>
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
      ref="formRef"
      label-placement="left"
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
import {
  NButton,
  NSpace,
  NInput,
  NSelect,
  NPopconfirm,
  NFormItem,
} from 'naive-ui';
import { serialize, deserialize } from 'seroval';
import keywords from '../constant/Keywords.json';
import { v6 as uuid } from 'uuid';

interface Data {
  type: 'string' | 'regexp';
  value: string;
  id: string;
}

const key = '_keyword';
if (!window.localStorage.getItem(key)) {
  window.localStorage.setItem(
    key,
    serialize(
      keywords.map(
        (item): Data => ({
          type: 'string',
          value: item,
          id: uuid(),
        }),
      ),
    ),
  );
}

const data = ref(
  (deserialize(window.localStorage.getItem(key) || '') || []) as Data[],
);

const keyword = ref('');
const presentationData = computed(() => {
  return data.value.filter((f) => {
    if (keyword.value) {
      return f.value.includes(keyword.value);
    }
    return true;
  });
});

const typeOptions = [
  {
    label: '文本',
    value: 'string',
  },
  {
    label: '正则',
    value: 'regexp',
  },
];
const formRef = ref<FormInst | null>(null);

const editLists = reactive<Record<string, boolean>>({});
// 记忆值，取消之后需要恢复
const cacheValue = new Map<string, Data>();

const columns: DataTableColumns<Data> = [
  {
    title: '内容',
    key: 'value',

    render(row) {
      if (!editLists[row.id]) {
        return row.value;
      }
      const current = data.value.find((item) => item.id === row.id)!;
      const placeholder = computed(() => {
        if (current.type === 'string') {
          return '请输入关键词';
        }
        return '请输入正则表达式';
      });
      const index = data.value.findIndex((item) => item.id === row.id);
      return (
        <div class={'flex'}>
          <NSelect
            class="w-100px mr-12px"
            v-model:value={current.type}
            options={typeOptions}
          ></NSelect>
          <NFormItem
            class={`flex-1 inp-${row.id}`}
            label={''}
            path={`${index}.value`}
            rule={[
              {
                async asyncValidator() {
                  const value = current.value.trim();
                  if (!value) {
                    return Promise.reject(
                      current.type === 'string'
                        ? '请输入关键词!'
                        : '请输入正则表达式!',
                    );
                  }
                  if (current.type === 'regexp') {
                    try {
                      new RegExp(value);
                      return Promise.resolve();
                    } catch (e) {
                      return Promise.reject('请输入正确的正则表达式');
                    }
                  }
                },
                trigger: ['input', 'blur'],
              },
            ]}
          >
            <NInput
              v-model:value={current.value}
              placeholder={placeholder.value}
            ></NInput>
          </NFormItem>
        </div>
      );
    },
  },
  {
    title: '类型',
    key: 'type',
    render(row) {
      return typeOptions.find((f) => f.value === row.type)?.label;
    },
    width: 80,
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
    type: 'string',
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
    .filter((f) => f?.value);
  window.localStorage.setItem(key, serialize(localData));
};

const { name } = defineProps<{ name: string }>();

defineExpose({
  saveAll,
  name,
});
</script>
