export const addReminder = (text: string) => {
  const dom = document.body.querySelector(".job-detail");
  if (!dom) {
    return;
  }
  const t = document.createElement("p");
  t.innerHTML = text;
  t.style.cssText = `white-space: pre;`;
  dom.insertBefore(t, dom.firstChild);
};
