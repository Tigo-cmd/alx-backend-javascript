export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}