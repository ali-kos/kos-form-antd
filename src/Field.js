import * as KosForm from "kos-form";
import { Form as AntDForm } from "antd";

export default KosForm.FieldHOC({
  FieldWrapper: AntDForm.Item,
  FieldProps: formItemLayout
});
