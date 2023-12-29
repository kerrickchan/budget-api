import { HydratedDocument, Model, ModifyResult } from 'mongoose';

export interface ICrudOneRepository<T> {
  readonly model: Model<T>;

  createOne(entity: T): Promise<HydratedDocument<T>>;
  readOne(id: string): Promise<T>;
  updateOne(entity: HydratedDocument<T>): Promise<T>;
  deleteOne(id: string): Promise<ModifyResult<HydratedDocument<T>>>;
}
