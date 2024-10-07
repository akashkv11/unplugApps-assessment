export type DetailsDataTypes = {
  vr_no: number;
  sr_no: number;
  item_code: string;
  item_name: string;
  description: string;
  qty: number;
  rate: number;
};

export type TableDataType = DetailsDataTypes & {
  key: React.Key;
  amount: number;
};
