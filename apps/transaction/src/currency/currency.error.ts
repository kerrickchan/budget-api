export class CurrencyIdOrCodeRequiredError extends Error {
  constructor(message = 'currencyId or currencyCode is required') {
    super(message);
    this.name = 'CurrencyIdOrCodeRequiredError';
  }
}

export class CurrencyEmptyError extends Error {
  constructor(message = 'target currencyId or currencyCode not found') {
    super(message);
    this.name = 'CurrencyEmptyError';
  }
}
