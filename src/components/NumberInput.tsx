import { InputNumber, InputNumberProps } from "antd";
import React from "react";

export interface NumberInputProps extends InputNumberProps {}

const NumberInput: React.FC<NumberInputProps> = ({
  className = "w-100",
  ...rest
}) => {
  return (
    <>
      <InputNumber className={className} {...rest} controls={false} />
    </>
  );
};

export default NumberInput;
