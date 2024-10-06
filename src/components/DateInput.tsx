import { DatePicker, DatePickerProps } from "antd";
import React from "react";

export interface DateInputProps extends DatePickerProps {}

const DateInput: React.FC<DateInputProps> = ({
  className = "w-100",
  ...PickerProps
}) => {
  return (
    <>
      <DatePicker {...PickerProps} className={className} />
    </>
  );
};

export default DateInput;
