import { KeysOf } from "../helpers/keysOf.helper";

export interface ITask {
  id?: number;
  title: string;
  description?: string;
  priority: string;
  dueDate: string;
  completed?: boolean;
  createdAt?: string;
}

export type ITaskKeyOf = KeysOf<ITask>
