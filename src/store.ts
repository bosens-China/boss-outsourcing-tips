import keywordsData from './constant/keywords.json';
import blacklistData from './constant/blacklist.json';
import whiteListData from './constant/white-list.json';
import { serialize, deserialize } from 'seroval';
import { v6 as uuid } from 'uuid';
import { version } from '../package.json';
import * as _ from 'lodash-es';

export interface Blacklist {
  value: string;
  id: string;
}
export interface Whitelist {
  value: string;
  id: string;
}

export interface Keyword {
  value: string;
  id: string;
  type: 'string' | 'regexp';
}

export interface Store {
  blacklist: Blacklist[];
  whitelist: Whitelist[];
  keywords: Keyword[];
}

const defaultStore: Store = {
  blacklist: blacklistData.map((item) => ({
    value: item,
    id: uuid(),
  })),
  whitelist: whiteListData.map((item) => ({
    value: item,
    id: uuid(),
  })),
  keywords: keywordsData.map((item) => ({
    value: item,
    type: 'string',
    id: uuid(),
  })),
};

export const blacklistKey = `blacklist_${version}`;
export const whitelistKey = `whitelist_${version}`;
export const keywordsKey = `keywords_${version}`;

export const store = reactive<Store>({
  blacklist:
    deserialize(localStorage.getItem(blacklistKey) ?? '') ||
    defaultStore.blacklist,
  whitelist:
    deserialize(localStorage.getItem(whitelistKey) ?? '') ||
    defaultStore.whitelist,
  keywords:
    deserialize(localStorage.getItem(keywordsKey) ?? '') ||
    defaultStore.keywords,
});

const { blacklist, whitelist, keywords } = toRefs(store);

export { blacklist, whitelist, keywords };

// 自动保存到本地
watch(
  () => store,
  () => {
    localStorage.setItem('blacklist', serialize(blacklist.value));
    localStorage.setItem('whitelist', serialize(whitelist.value));
    localStorage.setItem('keywords', serialize(keywords.value));
  },
  { deep: true },
);

export const updateKeywords = (newData: Keyword[]) => {
  for (const item of newData) {
    const diffvalue = _.pick(item, ['type', 'value']);
    const result = keywords.value.some((item) =>
      _.isEqual(_.pick(item, ['type', 'value']), diffvalue),
    );
    if (!result) {
      keywords.value.push(item);
    }
  }
};

export const updateBlacklist = (newData: Blacklist[]) => {
  for (const item of newData) {
    const result = blacklist.value.some(({ value }) => value === item.value);
    if (!result) {
      blacklist.value.push(item);
    }
  }
};

export const updateWhitelist = (newData: Whitelist[]) => {
  for (const item of newData) {
    const result = whitelist.value.some(({ value }) => value === item.value);
    if (!result) {
      whitelist.value.push(item);
    }
  }
};
