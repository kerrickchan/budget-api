import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from './schemas';

/**
 * @deprecated fallback to use mongoose model directly.
 * Maybe useful for caching or other purposes.
 */
@Injectable()
export class TransactionRepository {
  @InjectModel(Transaction.name)
  private readonly transactionsModel: Model<TransactionDocument>;
}
