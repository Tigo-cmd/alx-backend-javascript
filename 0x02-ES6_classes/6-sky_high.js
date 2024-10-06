/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    } else if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get floors() { return this._floors; }

  get sqft() { return this._sqft; }

  evacuationWarningMessage() { return `Evacuate slowly the ${this._floors} floors`; }
}
