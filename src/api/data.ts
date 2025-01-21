import axios from 'axios';

/**
 * 从仓库获取更新文件
 *
 * @template T
 * @param {string} filePath
 * @return {*}
 */
export const updateData = async <T>(filePath: string) => {
  const url = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@${__APP_BRANCH__}/src/constant/${filePath}`;
  const { data } = await axios.get<T>(url);

  return data;
};
