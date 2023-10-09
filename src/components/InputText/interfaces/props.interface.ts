import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface IProps<IType extends FieldValues > {
  label: string;
  name: FieldPath<IType>;
  control: Control<IType>;
  minRows?: number;
  multiline?: boolean;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute
}
