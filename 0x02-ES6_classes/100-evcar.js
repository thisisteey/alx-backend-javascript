import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // Gets and sets range of EVCar
  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  // Method that returns an instance of Car instead of EVCar due to privacy reasons
  cloneCar() {
    const NewObj = super.constructor || super[Symbol.species];
    return new NewObj();
  }
}
export default EVCar;
