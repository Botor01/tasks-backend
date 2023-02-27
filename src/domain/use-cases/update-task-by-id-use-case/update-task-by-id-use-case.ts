import {
  IUpdateTaskByIdRepository,
  IFetchTaskByIdRepository,
} from '../../contracts';
import { Task } from '../../entities/task/task';

export class UpdateTaskByIdUsecase {
  constructor(
    private readonly fetchTaskByIdRepository: IFetchTaskByIdRepository,
    private readonly updateTaskByIdRepository: IUpdateTaskByIdRepository
  ) {}
  //classe de teste para o erro
  async execute(newTask: Task): Promise<void> {
    //execução do id -- promise para termino da execução void
    if (!newTask.getId) {
      throw new Error();
    }

    const task = await this.fetchTaskByIdRepository.fetch(newTask.getId);

    if (!task) {
      throw new Error();
    }

    await this.updateTaskByIdRepository.update(newTask);
  }
}
