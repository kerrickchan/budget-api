import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './schemas';

@Injectable()
export class TransactionService {
  @InjectModel(Transaction.name)
  private readonly transactionRepo: Model<Transaction>;

  async create(transaction: Transaction) {
    const doc = await this.transactionRepo.create(transaction);
    return this.findById(doc._id.toString());
  }

  async find() {
    return this.transactionRepo.find();
  }

  async findById(id: string) {
    return this.transactionRepo
      .findById(id)
      .populate(['category', 'currency'])
      .exec();
  }

  async findByIdAndUpdate(id: string, transaction: Transaction) {
    return this.transactionRepo.findByIdAndUpdate(id, transaction);
  }

  async findByIdAndDelete(id: string) {
    return this.transactionRepo.findByIdAndDelete(id);
  }
}
