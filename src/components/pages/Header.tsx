import { Form } from "antd";
import headerFields from "../../constants/headerFields";
import { HeaderDataTypes } from "../../types/HeaderTypes";

const Header = () => {
  const [form] = Form.useForm<HeaderDataTypes>();

  return (
    <>
      <h3 className="text-black">Header</h3>
      <Form
        name="form"
        form={form}
        layout="vertical"
        onFinish={(values) => console.log(values)}
      >
        <div className="row">
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
    </>
  );
};

export default Header;
