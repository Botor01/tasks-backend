import {
  IFetchTaskByIdRepository,
  IDeleteTaskByIdRepository,
} from '../../contracts';

export class DeleteTaskByIdUseCase {
  constructor(
    private readonly fetchTaskByIdRepository: IFetchTaskByIdRepository,
    private readonly deleteTaskByIdRepository: IDeleteTaskByIdRepository
  ) {}

  async execute(id: number): Promise<void> {
    //Check if the id is not provided
    if (!id) {
      throw new Error();
    }

    const task = await this.fetchTaskByIdRepository.fetch(id);

    //Check if the task is not found
    if (!task) {
      throw new Error();
    }

    await this.deleteTaskByIdRepository.delete(id);
  }
}
