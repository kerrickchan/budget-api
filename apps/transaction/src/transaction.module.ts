import { CommonModule } from '@libs/common';
import { setupMongooseModuleDb } from '@libs/setup';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseDefinitions } from './schemas';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { CategoryModule } from './category/category.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    CommonModule,
    setupMongooseModuleDb('transaction'),
    MongooseModule.forFeature(MongooseDefinitions),
    CategoryModule,
    CurrencyModule,
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
