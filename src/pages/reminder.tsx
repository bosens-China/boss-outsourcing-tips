import { FunctionComponent } from "preact";
import { render } from "preact-render-to-string";

interface Props {
  text: string;
}

const Reminder: FunctionComponent<Props> = ({ text }) => {
  return (
    <details>
      <summary style={{ cursor: "pointer" }}>查看具体判定规则</summary>
      <p style={{ whiteSpace: "pre" }}>{text}</p>
    </details>
  );
};

export const addReminder = (text: string) => {
  const dom = document.body.querySelector(".job-detail");
  if (!dom) {
    return;
  }
  const html = render(<Reminder text={text}></Reminder>);
  const t = document.createElement("div");
  t.innerHTML = html;
  dom.insertBefore(t, dom.firstChild);
};
