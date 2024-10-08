import { SelectProps } from "antd/es/select";
import { useEffect, useState } from "react";
import { renderTableColumns } from "../../constants/tableColumns";
import { TableDataType } from "../../types/DetailsTypes";
import { api } from "../../utils/axios";
import CustomTable from "../CustomTable";
import uniqueKeyGenerator from "../../utils/uniqueKeyGenerator";

type props = {
  data: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
};

const Details: React.FC<props> = ({ data, setTableData }) => {
  const [items, setItems] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.get("item");
      if (response.status === 200) {
        setItems(
          response?.data?.map((item: any) => ({
            label: item.item_code,
            value: item.item_code,
          }))
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataChange = (record: TableDataType, type?: "delete") => {
    if (type === "delete") {
      setTableData(
        data.length === 1
          ? [{ key: uniqueKeyGenerator(), sr_no: 1 } as TableDataType]
          : data.filter((item) => item.key !== record.key)
      );
      return;
    }

    let { qty = 0, rate = 0 } = record;
    let amount = qty * rate;

    let itemName =
      (items?.find((item) => item.value === record.item_code)
        ?.value as string) || "";

    if (!record?.item_code) {
      amount = 0;
      (qty = 0), (rate = 0);
      itemName = "";
    }

    setTableData(
      data.map((item) => {
        if (item.key !== record.key) return item;
        item.amount = amount;
        item.item_name = itemName;
        item.qty = qty;
        item.rate = rate;
        return item;
      })
    );
  };

  return (
    <>
      <CustomTable<TableDataType>
        data={data}
        tableColumns={renderTableColumns(items, handleDataChange) || []}
      />
    </>
  );
};

export default Details;
