import { Select, SelectProps } from "antd";
import { BaseOptionType } from "antd/es/select";
import { valueType } from "antd/es/statistic/utils";
import React from "react";

export interface SelectInputProps extends SelectProps {
  value: string;
  onChange?: (
    value: valueType,
    option: BaseOptionType | BaseOptionType[]
  ) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  onChange,
  options,
  className = "w-100",
  allowClear = true,
  ...rest
}) => {
  return (
    <Select
      onChange={onChange}
      className={className}
      allowClear={allowClear}
      options={options}
      {...rest}
    />
  );
};

export default SelectInput;
