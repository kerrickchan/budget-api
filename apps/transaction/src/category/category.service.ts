import { Inject, Injectable } from '@nestjs/common';
import { Category } from '../schemas';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  @Inject(CategoryRepository)
  private readonly categoryRepository: CategoryRepository;

  async findById(id: string): Promise<Category> {
    return this.categoryRepository.readOne(id);
  }

  async findByCode(code: string): Promise<Category> {
    return this.categoryRepository.readOneBy({ code });
  }
}
