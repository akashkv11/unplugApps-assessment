import { InputNumber, InputNumberProps } from "antd";
import React from "react";

export interface NumberInputProps extends InputNumberProps {}

const NumberInput: React.FC<NumberInputProps> = ({
  className = "w-100",
  precision = 2,
  ...rest
}) => {
  return (
    <>
      <InputNumber
        className={className}
        precision={precision}
        {...rest}
        controls={false}
      />
    </>
  );
};

export default NumberInput;
