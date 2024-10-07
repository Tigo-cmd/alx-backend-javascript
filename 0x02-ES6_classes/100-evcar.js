/* eslint-disable class-methods-use-this */
import Car from './10-car';
// import TypeChecker from './typecheck';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // TypeChecker('string', brand, 'Brand must be a sting');
    // TypeChecker('string', motor, 'Motor must be a sting');
    // TypeChecker('string', color, 'Color must be a sting');
    // TypeChecker('string', range, 'Range must be a sting');
    /* eslint-disable no-underscore-dangle */
    super(brand, motor, color);
    // this._brand = brand;
    // this._color = color;
    // this._motor = motor;
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}