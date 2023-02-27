import { describe, expect, it } from 'vitest';
import {
  IUpdateTaskByIdRepository,
  IFetchTaskByIdRepository,
} from '../../contracts';
import { Task } from '../../entities/task/task';
import { UpdateTaskByIdUsecase } from './update-task-by-id-use-case';

const taskProps = {
  id: 1,
  title: 'test',
  description: 'test',
  type: 'test',
  expirationDate: new Date(),
};

class FetchTaskByIdRepositorySpy implements IFetchTaskByIdRepository {
  async fetch(id: number): Promise<Task | undefined> {
    if (id === 1) {
      return undefined;
    }

    return new Task({
      id,
      type: 'test',
      title: 'test',
      description: 'test',
      expirationDate: new Date(),
    });
  }
}

class UpdateTaskByIdRepositorySpy implements IUpdateTaskByIdRepository {
  async update(task: Task): Promise<void> {}
}

const makeSut = () => {
  const fetchTaskByIdRepository = new FetchTaskByIdRepositorySpy();
  const updateTaskByIdRepository = new UpdateTaskByIdRepositorySpy();
  return new UpdateTaskByIdUsecase(
    fetchTaskByIdRepository,
    updateTaskByIdRepository
  );
};

const makeFetchTaskByIdRepositoryWithError = () => {
  class FetchTaskByIdRepositorySpy implements IFetchTaskByIdRepository {
    async fetch(id: number): Promise<Task | undefined> {
      throw new Error();
    }
  }

  return new FetchTaskByIdRepositorySpy();
};

const makeUpdateTaskByIdRepositoryWithError = () => {
  class UpdateTaskByIdRepositorySpy implements IUpdateTaskByIdRepository {
    async update(task: Task): Promise<void> {
      throw new Error();
    }
  }

  return new UpdateTaskByIdRepositorySpy();
};

describe('update task use case', () => {
  it('throw an error if the id is not provide', () => {
    const task = new Task({
      ...taskProps,
      id: 0,
    });

    const sut = makeSut(); // pegando a classe e jogar na variável
    expect(sut.execute(task)).rejects.toThrow(); //esperando a rejeição do caso de uso
  });

  it('throw an error if the task not exist', () => {
    const task = new Task({
      ...taskProps,
    });

    const sut = makeSut();
    expect(sut.execute(task)).rejects.toThrow();
  });

  it('should throw error if any dependency throws', () => {
    const task = new Task({
      ...taskProps,
      id: 2,
    });

    const sut = new UpdateTaskByIdUsecase(
      makeFetchTaskByIdRepositoryWithError(),
      makeUpdateTaskByIdRepositoryWithError()
    );

    expect(sut.execute(task)).rejects.toThrow();
  });
});
