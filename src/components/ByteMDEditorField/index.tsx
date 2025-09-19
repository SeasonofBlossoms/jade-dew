import { Editor } from "@bytemd/react";
import zhHans from "bytemd/lib/locales/zh_Hans.json";
import "bytemd/dist/index.css";
import "highlight.js/styles/vs.css";
import { plugins } from "./plugins";

// 自定义表单控件 - ByteMD 编辑器
const ByteMDEditorField = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <Editor
      locale={zhHans}
      value={value || ""}
      plugins={plugins}
      onChange={onChange}
    />
  );
};

export default ByteMDEditorField;
