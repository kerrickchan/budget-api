import { CommonModule } from '@libs/common';
import { setupMongooseModuleDb } from '@libs/setup';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { CurrencyModule } from './currency/currency.module';
import { MongooseDefinitions } from './schemas';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './transaction.repository';
import { TransactionService } from './transaction.service';

@Module({
  imports: [
    CommonModule,
    setupMongooseModuleDb('transaction'),
    MongooseModule.forFeature(MongooseDefinitions),
    CategoryModule,
    CurrencyModule,
  ],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionRepository],
})
export class TransactionModule {}
