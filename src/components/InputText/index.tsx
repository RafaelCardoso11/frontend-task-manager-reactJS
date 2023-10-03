import { Controller } from "react-hook-form";
import { IProps } from "./interfaces/props.interface";
import { FormControl, FormHelperText, TextField } from "@mui/material";

export const InputText: React.FC<IProps> = ({
  control,
  label,
  name,
  minRows = 4,
  multiline = false,
  disabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const value = field.value ?? "";

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
