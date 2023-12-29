import { Inject, Injectable } from '@nestjs/common';
import { Currency } from '../schemas';
import { CurrencyRepository } from './currency.repository';

@Injectable()
export class CurrencyService {
  @Inject(CurrencyRepository)
  private readonly currencyRepository: CurrencyRepository;

  async findById(id: string): Promise<Currency> {
    return this.currencyRepository.readOne(id);
  }

  async findByCode(code: string): Promise<Currency> {
    return this.currencyRepository.readOneBy({ code });
  }
}
