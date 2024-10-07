import { Button, ButtonProps } from "antd";

interface ButtonTypePprops extends ButtonProps {}

const CustomButton: React.FC<ButtonTypePprops> = ({ children, ...rest }) => {
  return (
    <>
      <Button {...rest}>{children}</Button>
    </>
  );
};

export default CustomButton;
