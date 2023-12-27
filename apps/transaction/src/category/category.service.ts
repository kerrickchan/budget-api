import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas';
import { Model, isObjectIdOrHexString } from 'mongoose';

@Injectable()
export class CategoryService {
  @InjectModel(Category.name)
  private readonly categoryRepo: Model<Category>;

  async find(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  async findById(id: string): Promise<Category> {
    if (isObjectIdOrHexString(id)) {
      return this.categoryRepo.findById(id);
    }

    return null;
  }

  async findByCode(code: string): Promise<Category> {
    return this.categoryRepo.findOne({ code });
  }
}
