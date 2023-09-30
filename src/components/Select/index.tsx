import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { props } from "./interfaces/props";
import { Controller } from "react-hook-form";

export const Select = ({ control, name, label, items }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <MuiSelect
            variant="outlined"
            label="Prioridade"
            color="primary"
            {...field}
          >
            {items.map(({ value, label }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      )}
    />
  );
};
