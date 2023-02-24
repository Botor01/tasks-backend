export interface IDeleteTaskByIdRepository {
  delete(id: number): Promise<void>;
}
