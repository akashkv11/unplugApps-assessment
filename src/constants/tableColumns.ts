import { TableProps } from "antd";
import { SelectProps } from "antd/es/select";
import { valueType } from "antd/es/statistic/utils";
import React from "react";
import NumberInput from "../components/NumberInput";
import SelectInput, { SelectInputProps } from "../components/SelectInput";
import TextInput from "../components/TextInput";
import { TableDataType } from "../types/DetailsTypes";
import CustomButton from "../components/CustomButton";
import { FaRegTrashAlt } from "react-icons/fa";

export const renderTableColumns = (
  options: SelectProps["options"] = [],
  cb?: Function
): TableProps<TableDataType>["columns"] => {
  return [
    {
      title: "Sr. No.",
      dataIndex: "sr_no",
      key: "sr_no",
      width: "5%",
      align: "center",
    },
    {
      title: "Item Code",
      dataIndex: "item_code",
      key: "item_code",
      width: "20%",
      render: (value: string, record: TableDataType) =>
        React.createElement<SelectInputProps>(SelectInput, {
          value: value,
          options: options,

          onChange: (e) => {
            if (typeof e !== "number") {
              record.item_code = e;
              cb?.(record);
            }
          },
        }),
    },
    {
      title: "Item Name",
      dataIndex: "item_name",
      key: "item_name",
      render: (value: string, record: TableDataType) =>
        React.createElement(TextInput, {
          type: "text",
          value: value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            record.item_name = e.target.value;
          },
        }),
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (value: string, record: TableDataType) =>
        React.createElement(NumberInput, {
          type: "text",
          value: value,
          onChange: (e: valueType | null) => {
            if (typeof e !== "string") {
              record.qty = e!;
              cb?.(record);
            }
          },
        }),
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (value: string, record: TableDataType) =>
        React.createElement(NumberInput, {
          type: "text",
          value: value,
          onChange: (e: valueType | null) => {
            if (typeof e !== "string") {
              record.rate = e!;
              cb?.(record);
            }
          },
        }),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value: string, _: TableDataType) =>
        React.createElement(NumberInput, {
          type: "text",
          value: value,
        }),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "5%",
      align: "center",
      render: (_: string, record: TableDataType) =>
        React.createElement(CustomButton, {
          icon: React.createElement(FaRegTrashAlt, {}),

          onClick: () => {
            cb?.(record, "delete");
          },
          shape: "circle",
        }),
    },
  ];
};

export const viewColumns =
  renderTableColumns()?.map(({ title, key }) => ({
    title,
    key,
    dataIndex: key,
  })) || [];
