import { Controller } from "react-hook-form";
import { props } from "./interfaces/props";
import { TextField } from "@mui/material";

export const InputText = ({
  control,
  label,
  name,
  minRows = 4,
  multiline = false,
}: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          label={label}
          multiline={multiline}
          minRows={minRows}
          fullWidth
        />
      )}
    />
  );
};
