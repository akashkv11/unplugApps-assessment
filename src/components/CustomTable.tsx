import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table";

interface CustomTableProps<T> extends TableProps {
  data: T[];
  tableColumns: ColumnsType<T>;
}

const CustomTable = <T extends {}>({
  tableColumns,
  data,
  pagination = false,
  ...props
}: CustomTableProps<T>) => {
  return (
    <Table
      columns={tableColumns}
      pagination={pagination}
      dataSource={data}
      {...props}
    />
  );
};

export default CustomTable;
