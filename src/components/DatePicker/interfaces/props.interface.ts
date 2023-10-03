import { Control } from "react-hook-form";
import { ITask, ITaskKeyOf } from "../../../interfaces/task.interface";
import { Dayjs } from "dayjs";

export interface IProps {
  label: string;
  control: Control<ITask>;
  name: ITaskKeyOf;
  minDate: Dayjs;
  disabled?: boolean;
}
