import { Form } from "antd";
import { useState } from "react";
import ButtonType from "../components/CustomButton";
import Details from "../components/pages/Details";
import Header from "../components/pages/Header";
import { TableDataType } from "../types/DetailsTypes";
import { HeaderDataTypes } from "../types/HeaderTypes";
import uniqueKeyGenerator from "../utils/uniqueKeyGenerator";

const Sales = () => {
  const [form] = Form.useForm<HeaderDataTypes>();
  const [tableData, setTableData] = useState<TableDataType[]>([
    {
      key: uniqueKeyGenerator(),
      sr_no: 1,
    } as TableDataType,
  ]);

  const formOnFinish = (values: HeaderDataTypes) => {
    console.log(values);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then(() => {
        form.submit();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h3 className="text-black">Header</h3>
      <div className="d-flex">
        <div className="w-100">
          <Header form={form} formOnFinish={formOnFinish} />
          <Details data={tableData} setTableData={setTableData} />
        </div>
        <div className="d-flex flex-column gap-2 justify-content-center">
          <ButtonType type="primary">New</ButtonType>
          <ButtonType type="primary">Insert</ButtonType>
          <ButtonType type="primary" onClick={() => handleSave()}>
            Save
          </ButtonType>
          <ButtonType type="primary">Print</ButtonType>
        </div>
      </div>
    </>
  );
};

export default Sales;
