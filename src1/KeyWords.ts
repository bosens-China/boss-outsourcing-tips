import { _ReturnType } from "./chain";
import { KeyWords } from "./information";

const traverse = (dom: Element, fn: (el: ChildNode) => void): void => {
  const arr = Array.from(dom.childNodes);
  arr.forEach((item) => {
    if (item.nodeType === Node.ELEMENT_NODE) {
      traverse(item as Element, fn);
      return;
    }
    fn(item);
  });
};

export const keyWords = (): _ReturnType => {
  const selectors = [
    ".info-primary h1",
    ".job-detail-section .job-sec-text",
    ".job-detail-company .job-sec-text",
  ];
  const store: Set<string> = new Set();

  const effect = (el: ChildNode) => {
    if (el.nodeType !== Node.TEXT_NODE) {
      return;
    }
    let content = el.textContent || "";

    // 可能存在多个关键词都在一串文本出现
    KeyWords.forEach((k) => {
      const reg = new RegExp(k, "ig");
      if (!reg.test(content)) {
        return;
      }

      const str = reg.source;
      store.add(str);
      content = content.replace(reg, `<span style="color:red">${k}</span>`);
    });
    if (content === el.textContent) {
      return;
    }
    const fragment = document.createDocumentFragment();
    const span = document.createElement("span");
    span.innerHTML = content;
    while (span.firstChild) {
      fragment.appendChild(span.firstChild);
    }
    el.parentNode?.replaceChild(fragment, el);
  };

  selectors.forEach((text) => {
    const dom = document.body.querySelector(text);
    if (!dom) {
      return;
    }
    traverse(dom, effect);
  });

  // 如果没有匹配到，转移到下一个链条进行匹配
  if (!store.size) {
    return true;
  }

  return {
    grade: store.size === 1 ? 0 : 1,
    text: `该岗位描述符合外包定义，出现了：\n${[...store]
      .map((item, index) => {
        return `${index + 1}. ${item}`;
      })
      .join("\n")}`,
  };
};
