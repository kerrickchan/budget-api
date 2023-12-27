import { setupMongooseModuleDb } from '@libs/setup';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Currency, CurrencySchema, MongooseDatabaseName } from '../schemas';
import { CurrencyService } from './currency.service';

@Module({
  imports: [
    setupMongooseModuleDb(MongooseDatabaseName),
    MongooseModule.forFeature([
      { name: Currency.name, schema: CurrencySchema },
    ]),
  ],
  providers: [CurrencyService],
  exports: [CurrencyService],
})
export class CurrencyModule {}
