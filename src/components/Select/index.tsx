import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { props } from "./interfaces/props";
import { Controller } from "react-hook-form";

export const Select = ({ control, name, label, items, disabled = false }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <MuiSelect
            {...field}
            variant="outlined"
            label="Prioridade"
            color="primary"
            disabled={disabled}
          >
            {items.map(({ value, label }) => (
              <MenuItem  key={value+label} value={value}>{label}</MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      )}
    />
  );
};
