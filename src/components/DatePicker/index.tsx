import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { IProps } from "./interfaces/props.interface";
import { ptBR } from "@mui/x-date-pickers";
import { Controller, FieldValues } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";
import dayjs from "dayjs";

export const DatePicker = <IType extends FieldValues>({
  control,
  name,
  label,
  minDate,
  disabled,
}: IProps<IType>) => {
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
        render={({ field, fieldState }) => {
          const value = dayjs(field.value as string);

          return (
            <FormControl fullWidth>
              <MuiDatePicker
                {...field}
                value={value}
                disabled={disabled}
                label={label}
                format="DD/MM/YYYY"
                minDate={minDate}
                slotProps={{ textField: { fullWidth: true } }}
              />
              {fieldState.error ? (
                <FormHelperText error>
                  {fieldState.error?.message}
                </FormHelperText>
              ) : null}
            </FormControl>
          );
        }}
      />
    </LocalizationProvider>
  );
};
