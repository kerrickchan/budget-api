import { Inject, Injectable } from '@nestjs/common';
import { Transaction } from './schemas';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  @Inject(TransactionRepository)
  private readonly transactionRepository: TransactionRepository;

  async create(transaction: Transaction) {
    const doc = await this.transactionRepository.createOne(transaction);
    return this.findById(doc._id.toString());
  }

  async findById(id: string) {
    return this.transactionRepository.model
      .findById(id)
      .populate(['category', 'currency'])
      .exec();
  }
}
