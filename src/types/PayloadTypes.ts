import { DetailsDataTypes } from "./DetailsTypes";
import { HeaderDataTypes } from "./HeaderTypes";

export type PayloadDataType = {
  header_table: HeaderDataTypes;
  detail_table: DetailsDataTypes[];
};
