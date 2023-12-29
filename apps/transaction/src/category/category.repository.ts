import { CrudOneRepository } from '@libs/common/crud';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schemas';

@Injectable()
export class CategoryRepository extends CrudOneRepository<Category> {
  @InjectModel(Category.name)
  public readonly model: Model<Category>;
}
