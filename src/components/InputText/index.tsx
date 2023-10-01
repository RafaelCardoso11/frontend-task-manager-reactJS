import { Controller } from "react-hook-form";
import { props } from "./interfaces/props";
import { FormControl, FormHelperText, TextField } from "@mui/material";

export const InputText = ({
  control,
  label,
  name,
  minRows = 4,
  multiline = false,
  disabled = false,
}: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const value = (field.value ?? '');

        return (
          <FormControl fullWidth>
            <TextField
              {...field}
              value={value}
              label={label}
              variant="outlined"
              multiline={multiline}
              disabled={disabled}
              minRows={minRows}
              fullWidth
            />
            {fieldState.error ? (
              <FormHelperText error>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        );
      }}
    />
  );
};
