import { Control } from "react-hook-form";
import { ITask, ITaskKeyOf } from "../../../interfaces/task.interface";

export interface props {
  label: string;
  name: ITaskKeyOf;
  control: Control<ITask>;
  minRows?: number;
  multiline?: boolean;
  disabled?: boolean;
}
