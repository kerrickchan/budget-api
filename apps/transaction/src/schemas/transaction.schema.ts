import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from './category.schema';
import { Currency } from './currency.schema';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: Category.name, required: true })
  category: Category;

  @Prop({ required: true })
  amount: number;

  @Prop({ type: Types.ObjectId, ref: Currency.name, required: true })
  currency: Currency;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
