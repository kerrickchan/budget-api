import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './schemas';
import { CrudOneRepository } from '@libs/common/crud';

@Injectable()
export class TransactionRepository extends CrudOneRepository<Transaction> {
  @InjectModel(Transaction.name)
  public readonly model: Model<TransactionDocument>;
}
