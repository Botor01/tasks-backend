import { Task } from '../entities/task/task';

export interface IUpdateTaskByIdRepository {
  update(task: Task): Promise<void>;
}
