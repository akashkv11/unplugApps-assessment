import DateInput from "../components/DateInput";
import NumberInput from "../components/NumberInput";
import TextInput from "../components/TextInput";
import { FormFieldTypes } from "../types/FormFieldTypes";

const headerFields: FormFieldTypes = [
  {
    name: "vr_no",
    label: "VR No",
    rules: [
      {
        required: true,
        message: "Please enter VR No",
      },
    ],
    component: NumberInput,
  },

  {
    name: "vr_date",
    label: "VR Date",
    rules: [
      {
        required: true,
        message: "Please enter VR Date",
      },
    ],
    component: DateInput,
  },
  {
    name: "status",
    label: "Status",
    rules: [
      {
        required: true,
        message: "Please enter Status",
      },
    ],
    component: TextInput,
  },
  {
    name: "ac_name",
    label: "Account Name",
    rules: [
      {
        required: true,
        message: "Please enter Account Name",
      },
    ],
    component: TextInput,
  },
  {
    name: "ac_amt",
    label: "Account Amount",
    rules: [
      {
        required: true,
        message: "Please enter Account Amount",
      },
    ],
    component: TextInput,
  },
];

export default headerFields;
