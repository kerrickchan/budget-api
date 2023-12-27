import { Long } from '@grpc/proto-loader';

export interface CreateTransactionDto {
  date: Long | Date;
  description: string;
  categoryId?: string;
  categoryCode?: string;
  amount: number;
  currencyId?: string;
  currencyCode?: string;
}
