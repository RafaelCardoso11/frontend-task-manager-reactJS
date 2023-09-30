import { Control } from "react-hook-form";
import { KeysOf } from "../../../helpers/keysOf";
import { ITask } from "../../../interfaces/task.interface";

export interface props {
  label: string;
  name: KeysOf<ITask>;
  control: Control<ITask>;
  minRows?: number;
  multiline?: boolean;
}
