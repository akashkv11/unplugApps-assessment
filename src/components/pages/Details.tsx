import { renderTableColumns } from "../../constants/tableColumns";
import { TableDataType } from "../../types/DetailsTypes";
import CustomTable from "../CustomTable";

type props = {
  data: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
};

const Details: React.FC<props> = ({ data }) => {
  return (
    <>
      <CustomTable<TableDataType>
        data={data}
        tableColumns={renderTableColumns() || []}
      />
    </>
  );
};

export default Details;
