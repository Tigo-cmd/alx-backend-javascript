import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = new Currency()) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }

    /* eslint-disable no-underscore-dangle */
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a string');
    }
    this._amount = value;
  }

  set currency(value = new Currency()) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency._name} (${this._currency._code})`;
  }
}
