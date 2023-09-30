import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { props } from "./interfaces/props";
import { ptBR } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";

export const DatePicker = ({ control, name, label, minDate }: props) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiDatePicker
            label={label}
            format="DD/MM/YYYY"
            minDate={minDate}
            {...field}
            slotProps={{ textField: { fullWidth: true } }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
