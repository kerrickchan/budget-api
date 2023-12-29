import { CrudOneRepository } from '@libs/common/crud';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Currency } from '../schemas';

@Injectable()
export class CurrencyRepository extends CrudOneRepository<Currency> {
  @InjectModel(Currency.name)
  public readonly model: Model<Currency>;
}
