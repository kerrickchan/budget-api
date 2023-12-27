import { setupMongooseModuleDb } from '@libs/setup';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema, MongooseDatabaseName } from '../schemas';
import { CategoryService } from './category.service';

@Module({
  imports: [
    setupMongooseModuleDb(MongooseDatabaseName),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
