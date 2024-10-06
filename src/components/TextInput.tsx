import { Input, InputProps } from "antd";
import React from "react";

export interface TextInputProps extends InputProps {}

const TextInput: React.FC<TextInputProps> = (textInputProps) => {
  return (
    <>
      <Input {...textInputProps} />
    </>
  );
};

export default TextInput;
