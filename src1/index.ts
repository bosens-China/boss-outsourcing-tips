import { result } from "./chain";
import { insertNotify } from "./pages/notify";
import { addReminder } from "./pages/reminder";

(() => {
  if (typeof result === "boolean") {
    return;
  }
  insertNotify(result);
  addReminder(result.text);
})();
