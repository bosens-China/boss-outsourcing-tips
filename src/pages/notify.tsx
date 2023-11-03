import { FunctionComponent } from "preact";
import { render } from "preact-render-to-string";

export interface Props {
  // 0 代表可能，1 代表是
  grade: 0 | 1;
}

const Notify: FunctionComponent<Props> = (props) => {
  const { grade } = props;
  const text = grade === 0 ? "⚠️ 可能为外包公司" : "❌ 外包公司";
  return (
    <a
      class="btn"
      style={{
        width: "auto",
        minWidth: "55px",
        color: grade === 0 ? "#faad14" : "#ff4d4f",
        padding: "0 12px",
        background: "transparent",
        borderColor: "transparent",
      }}
    >
      {text}
    </a>
  );
};

export const insertNotify = (props: Props) => {
  const html = render(<Notify {...props}></Notify>);

  const dom = document.body.querySelector(".btn-container");
  if (!dom) {
    return;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  dom.appendChild(div.firstElementChild!);
};
