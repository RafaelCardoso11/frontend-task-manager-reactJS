import { Control } from "react-hook-form";
import { ITask, ITaskKeyOf } from "../../../interfaces/task.interface";

export interface IProps {
  label: string;
  name: ITaskKeyOf;
  control: Control<ITask>;
  minRows?: number;
  multiline?: boolean;
  disabled?: boolean;
}
