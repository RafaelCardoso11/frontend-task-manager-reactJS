import axios from "./api";
import { ITask } from "../interfaces/task.interface";

export class TaskService {
   readonly base = "task";

  async create(task: ITask) {
    const {
      data,
    } = await axios.post(this.base, task);

    return data;
  }

  async findAll(): Promise<ITask[]> {
    const {
      data: { data },
    } = await axios.get(this.base);

    return data;
  }

  async findOne(id: number) {
    const {
      data: { data },
    } = await axios.get(`${this.base}/${id}`);

    return data;
  }

  async update(id: number, task: ITask) {
    const {
      data: { data },
    } = await axios.put(`${this.base}/${id}`, task);

    return data;
  }

  async remove(id: number) {
    const {
      data: { data },
    } = await axios.delete(`${this.base}/${id}`);

    return data;
  }

  async completeMultipleTask(ids: number[] ):  Promise<ITask[]> {
    const {
      data: { data },
    } = await axios.patch(`${this.base}/complete`, {
      taskIds: ids,
    });

    return data;
  }
}
