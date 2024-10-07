import { TableProps } from "antd";
import TextInput from "../components/TextInput";
import { TableDataType } from "../types/DetailsTypes";
import React from "react";
import NumberInput from "../components/NumberInput";
import { valueType } from "antd/es/statistic/utils";

export const renderTableColumns = (): TableProps<TableDataType>["columns"] => {
  return [
    {
      title: "Sr. No.",
      dataIndex: "sr_no",
      key: "sr_no",
    },
    {
      title: "Item Code",
      dataIndex: "item_code",
      key: "item_code",
      render: (value: string, record: TableDataType) =>
        React.createElement(TextInput, {
          type: "text",
          value: value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            record.item_code = e.target.value;
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
              record.amount = record.rate * record.qty;
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
              record.amount = record.rate * record.qty;
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
  ];
};

export const viewColumns =
  renderTableColumns()?.map(({ title, key }) => ({
    title,
    key,
    dataIndex: key,
  })) || [];
