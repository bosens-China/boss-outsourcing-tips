export const resolver = (html: string) => {
  // 创建DOMParser对象
  const parser = new DOMParser();

  // 解析HTML字符串
  const htmlDoc = parser.parseFromString(html, "text/html");

  // 获取标题
  const title = htmlDoc.querySelector("title")?.textContent || "";

  // // 获取body内容
  const b = htmlDoc.body;
  b.querySelectorAll("script").forEach((item) =>
    item.parentNode?.removeChild(item)
  );

  const body = b;

  // 获取所有link和style标签中的CSS资源和样式部分
  const cssLink: Array<HTMLLinkElement> = [];

  const styles: Array<HTMLStyleElement> = [];

  const styleElements = htmlDoc.querySelectorAll(
    'link[rel="stylesheet"], style'
  );
  styleElements.forEach(function (element) {
    if (element.nodeName === "LINK") {
      cssLink.push(element as HTMLLinkElement);
    } else if (element.nodeName === "STYLE") {
      styles.push(element as HTMLStyleElement);
    }
  });

  return {
    title: title.trim(),
    body,
    cssLink,
    styles,
  };
};
