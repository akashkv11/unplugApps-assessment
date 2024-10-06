import { FormItemProps } from "antd";

export type FormFieldTypes = Array<
  FormItemProps & { component: React.FC<any> }
>;
