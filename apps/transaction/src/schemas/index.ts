import { ModelDefinition } from '@nestjs/mongoose';
import { CategorySchema, CurrencySchema, TransactionSchema } from '.';

export * from './category.schema';
export * from './currency.schema';
export * from './transaction.schema';

export const MongooseDatabaseName = 'transaction';
export const MongooseDefinitions: ModelDefinition[] = [
  { name: 'Currency', schema: CurrencySchema },
  { name: 'Category', schema: CategorySchema },
  { name: 'Transaction', schema: TransactionSchema },
];
