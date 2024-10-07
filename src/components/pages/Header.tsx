import { Form, FormInstance } from "antd";
import headerFields from "../../constants/headerFields";
import { HeaderDataTypes } from "../../types/HeaderTypes";

type props = {
  form: FormInstance<HeaderDataTypes>;
  formOnFinish: Function;
};

const Header: React.FC<props> = ({ form, formOnFinish }) => {
  return (
    <Form
      name="form"
      form={form}
      layout="vertical"
      onFinish={(values) => formOnFinish(values)}
    >
      <div className="row m-0 p-0">
        {headerFields.map((field, index) => (
          <div className={index === 3 ? "col-6" : "col-3"} key={field.name}>
            <Form.Item
              name={field.name}
              label={field.label}
              rules={field.rules}
            >
              {<field.component />}
            </Form.Item>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default Header;
