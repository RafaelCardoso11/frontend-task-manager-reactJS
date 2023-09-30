import { Control } from "react-hook-form";
import { ITask } from "../../../interfaces/task.interface";
import { KeysOf } from "../../../helpers/keysOf";



interface Item {
    value: string;
    label: string
}

export interface props {
    label: string;
    name: KeysOf<ITask>;
    items: Item[],
    control: Control<ITask>;
}