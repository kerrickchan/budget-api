/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { CommonService } from '@libs/common';
import { Controller, Get, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CategoryEmptyError,
  CategoryIdOrCodeRequiredError,
} from './category/category.error';
import { CategoryService } from './category/category.service';
import {
  CurrencyEmptyError,
  CurrencyIdOrCodeRequiredError,
} from './currency/currency.error';
import { CurrencyService } from './currency/currency.service';
import { CreateTransactionDto } from './dtos';
import { TransactionDocument } from './schemas';
import { TransactionService } from './transaction.service';
import { Long } from '@grpc/proto-loader';

@Controller()
export class TransactionController {
  @Inject(CommonService)
  private readonly commonService: CommonService;

  @Inject(CategoryService)
  private readonly categoryService: CategoryService;

  @Inject(CurrencyService)
  private readonly currencyService: CurrencyService;

  @Inject(TransactionService)
  private readonly transactionService: TransactionService;

  @Get()
  getHello(): string {
    return this.commonService.getHello();
  }

  @GrpcMethod('TransactionService', 'Add')
  async add(
    data: CreateTransactionDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<TransactionDocument> {
    const date = new Date((data.date as Long).toNumber() * 1000);
    const description = data?.description ?? '';

    let category = null;
    if (
      (data.categoryId && data.categoryCode) ||
      (!data.categoryId && !data.categoryCode)
    ) {
      throw new CategoryIdOrCodeRequiredError();
    } else if (data.categoryId) {
      category = await this.categoryService.findById(data.categoryId);
    } else if (data.categoryCode) {
      category = await this.categoryService.findByCode(data.categoryCode);
    }
    if (!category) {
      throw new CategoryEmptyError();
    }

    const amount = data.amount;

    let currency = null;
    if (
      (data.currencyId && data.currencyCode) ||
      (!data.currencyId && !data.currencyCode)
    ) {
      throw new CurrencyIdOrCodeRequiredError();
    } else if (data.currencyId) {
      currency = await this.currencyService.findById(data.currencyId);
    } else if (data.currencyCode) {
      currency = await this.currencyService.findByCode(data.currencyCode);
    }
    if (!currency) {
      throw new CurrencyEmptyError();
    }

    return this.transactionService.create({
      date,
      description,
      category,
      amount,
      currency,
    });
  }
}
