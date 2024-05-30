class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Gets and sets the brand of the Car
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  // Gets and sets the motor of the Car
  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  // Gets and sets the color of the Car
  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  // Method that returns a new object of the Car
  cloneCar() {
    const NewObj = this.constructor || [Symbol.species];
    return new NewObj();
  }
}
export default Car;
