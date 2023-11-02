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

export const getHtml = (props: Props) => {
  return render(<Notify {...props}></Notify>);
};
