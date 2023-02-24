import { Task } from '../entities/task/task';

export interface IFetchTaskByIdRepository {
  fetch(id: number): Promise<Task | undefined>;
}
