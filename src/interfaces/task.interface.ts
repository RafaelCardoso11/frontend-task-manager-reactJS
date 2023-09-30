export interface ITask {
  id: number;
  title: string;
  description?: string;
  priority: string;
  dueDate: string;
  completed?: boolean;
  createdAt?: string;
}
