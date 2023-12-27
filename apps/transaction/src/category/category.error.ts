export class CategoryIdOrCodeRequiredError extends Error {
  constructor(message = 'categoryId or categoryCode is required') {
    super(message);
    this.name = 'CategoryIdOrCodeRequiredError';
  }
}

export class CategoryEmptyError extends Error {
  constructor(message = 'target categoryId or categoryCode not found') {
    super(message);
    this.name = 'CategoryEmptyError';
  }
}
