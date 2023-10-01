import { Control } from "react-hook-form";
import { ITask, ITaskKeyOf } from "../../../interfaces/task.interface";



interface Item {
    value: string;
    label: string
}

export interface props {
    label: string;
    name: ITaskKeyOf;
    items: Item[],
    control: Control<ITask>;
    disabled?: boolean;
}