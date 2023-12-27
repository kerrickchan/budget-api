import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, isObjectIdOrHexString } from 'mongoose';
import { Currency } from '../schemas';

@Injectable()
export class CurrencyService {
  @InjectModel(Currency.name)
  private readonly currencyModel: Model<Currency>;

  async find(): Promise<Currency[]> {
    return this.currencyModel.find();
  }

  async findById(id: string): Promise<Currency> {
    if (isObjectIdOrHexString(id)) {
      return this.currencyModel.findById(new Types.ObjectId(id));
    }

    return null;
  }

  async findByCode(code: string): Promise<Currency> {
    return this.currencyModel.findOne({ code });
  }
}
