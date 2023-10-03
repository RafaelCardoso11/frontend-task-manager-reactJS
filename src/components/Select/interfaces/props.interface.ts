import { Control } from "react-hook-form";
import { ITask, ITaskKeyOf } from "@/interfaces/task.interface";



interface IItem {
    value: string;
    label: string
}

export interface IProps {
    label: string;
    name: ITaskKeyOf;
    items: IItem[],
    control: Control<ITask>;
    disabled?: boolean;
}