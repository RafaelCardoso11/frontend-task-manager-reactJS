import { Control, FieldPath, FieldValues } from "react-hook-form";
interface IItem {
    value: string;
    label: string
}

export interface IProps<IType extends FieldValues = FieldValues> {
    label: string;
    items: IItem[],
    control: Control<IType>;
    name: FieldPath<IType>;
    disabled?: boolean;
}