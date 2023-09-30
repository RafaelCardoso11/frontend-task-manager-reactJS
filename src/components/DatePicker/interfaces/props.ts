import { Control } from "react-hook-form";
import { ITask } from "../../../interfaces/task.interface";
import { Dayjs } from "dayjs";
import { KeysOf } from "../../../helpers/keysOf";

export interface props {
  label: string;
  control: Control<ITask>;
  name: KeysOf<ITask>;
  minDate: Dayjs;
}
