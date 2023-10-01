import axios from "./api";
import { ITask } from "../interfaces/task.interface";

const baseURL = "task"
export class TaskService {
  
  async create(task: ITask) {
    const { data } = await axios.post(baseURL, task);

    return data;
  }

  async findAll(): Promise<ITask[]> {
    const {
      data: { data },
    } = await axios.get(baseURL);

    return data;
  }

  async findOne(id: number) {
    const {
      data: { data },
    } = await axios.get(`${baseURL}/${id}`);

    return data;
  }

  async update(task: ITask) {
    const {
      data: { data },
    } = await axios.put(`${baseURL}/${task.id}`, task);

    return data;
  }

  async remove(id: number) {
    const {
      data: { data },
    } = await axios.delete(`${baseURL}/${id}`);

    return data;
  }

  async completeMultipleTask(ids: number[]): Promise<ITask[]> {
    const {
      data: { data },
    } = await axios.patch(`${baseURL}/complete`, {
      taskIds: ids,
    });

    return data;
  }
}
