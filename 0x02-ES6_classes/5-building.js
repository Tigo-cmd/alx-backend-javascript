export default class Building {
  constructor(sqft) {
    // if (typeof this.evacuationWarningMessage !== 'function') {
    //   throw new Error('Class extending Building must override evacuationWarningMessage');
    // }
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
