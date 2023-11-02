import { _ReturnType } from "./chain";
import information from "./information.json";

export const blacklist = (): _ReturnType => {
  const content =
    document.body.querySelector(`a[ka="job-detail-company_custompage"]`)
      ?.textContent || "";

  let text = "";

  const frequency = information.blacklist.some((KeyWord) => {
    if (content.includes(KeyWord)) {
      text = `公司名称为外包：${KeyWord}`;
      return true;
    }
    return false;
  });
  if (!frequency) {
    return true;
  }

  return { grade: 1, text };
};
