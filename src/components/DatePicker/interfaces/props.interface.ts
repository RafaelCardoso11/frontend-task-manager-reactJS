import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Dayjs } from "dayjs";

export interface IProps<IType extends FieldValues = FieldValues> {
  label: string;
  control: Control<IType>;
  name: FieldPath<IType>;
  minDate: Dayjs;
  disabled?: boolean;
}
