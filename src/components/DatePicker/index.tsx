import * as React from "react";
import dayjs, { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { props } from "./interfaces/props";

export const DatePicker = ({ label }: props) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
        value={value}
        minDate={dayjs()}
        slotProps={{ textField: { fullWidth: true } }}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};
