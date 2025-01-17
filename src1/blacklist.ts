import { _ReturnType } from "./chain";
import * as information from "./information";

export const blacklist = (): _ReturnType => {
  const dom = document.body.querySelector(
    `a[ka="job-detail-company_custompage"]`
  ) as HTMLAreaElement | null;

  if (!dom) {
    return true;
  }

  const content = dom.textContent || "";

  let text = "";

  const frequency = information.blacklist.some((KeyWord) => {
    if (content.includes(KeyWord)) {
      text = `公司名称为外包：${KeyWord}`;
      dom.style.color = "red";
      return true;
    }
    return false;
  });
  if (!frequency) {
    return true;
  }

  return { grade: 1, text };
};
