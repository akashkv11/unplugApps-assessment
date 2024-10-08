import { Divider, Form } from "antd";
import { useState } from "react";
import ButtonType from "../components/CustomButton";
import Details from "../components/pages/Details";
import Header from "../components/pages/Header";
import { DetailsDataTypes, TableDataType } from "../types/DetailsTypes";
import { HeaderDataTypes } from "../types/HeaderTypes";
import uniqueKeyGenerator from "../utils/uniqueKeyGenerator";
import { PayloadDataType } from "../types/PayloadTypes";
import { api } from "../utils/axios";

const Sales = () => {
  const [form] = Form.useForm<HeaderDataTypes>();
  const [tableData, setTableData] = useState<TableDataType[]>([
    {
      key: uniqueKeyGenerator(),
      sr_no: 1,
    } as TableDataType,
  ]);

  const formOnFinish = async (values: HeaderDataTypes) => {
    const detail_table = tableData?.length
      ? tableData?.map((item) => {
          return {
            description: item.description,
            item_code: item.item_code,
            item_name: item.item_name,
            qty: item.qty,
            rate: item.rate,
            sr_no: item.sr_no,
            vr_no: values.vr_no,
          } as DetailsDataTypes;
        })
      : [];
    const payload: PayloadDataType = {
      header_table: values,
      detail_table,
    };
    try {
      const response = await api.post("header/multiple", payload);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
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

  const handleNewRow = () => {
    setTableData([
      ...tableData,
      {
        key: uniqueKeyGenerator(),
        sr_no: tableData.length + 1,
      } as TableDataType,
    ]);
  };

  return (
    <>
      <h3 className="text-black">Header</h3>
      <div className="d-flex gap-4" style={{ minHeight: "80dvh" }}>
        <div className="w-100">
          <Header form={form} formOnFinish={formOnFinish} />
          <Divider />
          <Details data={tableData} setTableData={setTableData} />
        </div>
        <div className="d-flex flex-column gap-2 justify-content-center ">
          <ButtonType type="primary" onClick={() => handleNewRow()}>
            New
          </ButtonType>
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
