export default class Airport {
  constructor(name, code) {
    /* eslint-disable no-underscore-dangle */
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }

    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}