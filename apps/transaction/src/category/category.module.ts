import { CommonModule } from '@libs/common';
import { setupMongooseModuleDb } from '@libs/setup';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema, MongooseDatabaseName } from '../schemas';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [
    CommonModule,
    setupMongooseModuleDb(MongooseDatabaseName),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryService],
})
export class CategoryModule {}
