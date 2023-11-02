import { _ReturnType } from "./chain";
import information from "./information.json";

export const keyWords = (): _ReturnType => {
  const selectors = [
    ".job-banner",
    ".job-detail-section",
    ".job-detail-company",
  ];
  const content = selectors.reduce((text, selector) => {
    const dom = document.body.querySelector(selector);
    return text + (dom?.textContent ?? "");
  }, "");
  // 如果出现一个则提示存在高危风险，两个则直接提示为外包公司谨慎选择
  let text = "该岗位描述符合外包定义，具体如下：\n";
  const frequency = information.KeyWords.reduce((count, KeyWord) => {
    if (content.includes(KeyWord)) {
      text += `${count + 1}. ${KeyWord}\n`;
      return count + 1;
    }
    return count;
  }, 0);
  // 如果没有匹配到，转移到下一个链条进行匹配
  if (!frequency) {
    return true;
  }

  return { grade: frequency === 1 ? 0 : 1, text: text.trim() };
};
