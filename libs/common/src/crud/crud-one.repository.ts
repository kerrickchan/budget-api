import { Injectable } from '@nestjs/common';
import { FilterQuery, HydratedDocument, Model, ModifyResult } from 'mongoose';
import { ICrudOneRepository } from './crud-one.interface';

@Injectable()
export class CrudOneRepository<T> implements ICrudOneRepository<T> {
  public readonly model: Model<T>;

  async createOne(entity: T): Promise<HydratedDocument<T>> {
    return this.model.create(entity);
  }

  async readOne(id: string): Promise<T> {
    return this.model.findById(id);
  }

  async readOneBy(where: FilterQuery<T>): Promise<T> {
    return this.model.findOne(where);
  }

  async updateOne(entity: HydratedDocument<T>): Promise<T> {
    return this.model.findByIdAndUpdate(entity._id, entity as T);
  }

  async deleteOne(id: string): Promise<ModifyResult<HydratedDocument<T>>> {
    return this.model.findByIdAndDelete(id);
  }
}
