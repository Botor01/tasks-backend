import { describe, expect, it } from 'vitest';
import { Task } from '../../entities/task/task';
import { DeleteTaskByIdUseCase } from './delete-task-by-id';
import {
  IDeleteTaskByIdRepository,
  IFetchTaskByIdRepository,
} from '../../contracts';

class FetchTaskByIdRepositorySpy implements IFetchTaskByIdRepository {
  async fetch(id: number): Promise<Task | undefined> {
    if (id === 1) {
      return undefined;
    }

    return new Task({
      id,
      title: 'Test',
      description: 'Test',
      type: 'Test',
      expirationDate: new Date(),
    });
  }
}

class DeleteTaskByIdRepositorySpy implements IDeleteTaskByIdRepository {
  async delete(id: number): Promise<void> {}
}

const makeFetchTaskByIdRepositoryWithError = () => {
  class FetchTaskByIdRepositorySpy implements IFetchTaskByIdRepository {
    async fetch(id: number): Promise<Task | undefined> {
      throw new Error();
    }
  }

  return new FetchTaskByIdRepositorySpy();
};

const makeDeleteTaskByIdRepositoryWithError = () => {
  class DeleteTaskByIdRepositorySpy implements IDeleteTaskByIdRepository {
    async delete(id: number): Promise<void> {
      throw new Error();
    }
  }

  return new DeleteTaskByIdRepositorySpy();
};

describe('Delete Task Use Case', () => {
  it('should throw an error if the id is not provided', () => {
    const fetchTaskByIdRepository = new FetchTaskByIdRepositorySpy();
    const deleteTaskByIdRepository = new DeleteTaskByIdRepositorySpy();
    const sut = new DeleteTaskByIdUseCase(
      fetchTaskByIdRepository,
      deleteTaskByIdRepository
    );

    expect(sut.execute(0)).rejects.toThrow();
  });

  it('should throw an error if the task is not found', () => {
    const fetchTaskByIdRepository = new FetchTaskByIdRepositorySpy();
    const deleteTaskByIdRepository = new DeleteTaskByIdRepositorySpy();
    const sut = new DeleteTaskByIdUseCase(
      fetchTaskByIdRepository,
      deleteTaskByIdRepository
    );

    expect(sut.execute(1)).rejects.toThrow();
  });

  it('should throw error if any dependency throws', () => {
    const sut = new DeleteTaskByIdUseCase(
      makeFetchTaskByIdRepositoryWithError(),
      makeDeleteTaskByIdRepositoryWithError()
    );

    expect(sut.execute(2)).rejects.toThrow();
  });
});
