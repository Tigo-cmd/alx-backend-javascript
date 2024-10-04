export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'number') {
      throw new TypeError('Code must be a string');
    }
    if (typeof code !== 'number') {
      throw new TypeError('Code must be a string');
    }
    /* eslint-disable no-underscore-dangle */
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Code must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
