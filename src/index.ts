import { result } from "./chain";
import { getHtml } from "./notify";
import { addReminder } from "./utils";

(() => {
  if (typeof result === "boolean") {
    return;
  }
  const html = getHtml(result);
  const dom = document.body.querySelector(".btn-container");
  if (!dom) {
    return;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  dom.appendChild(div.firstElementChild!);

  addReminder(result.text);
})();
