class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Gets and sets the size of the HolbertonClass
  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  // Gets and sets the location of the HolbertonClass
  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  // Method that controls how the object is converted based on hint type
  [Symbol.toPrimitive](hintType) {
    switch (hintType) {
      case 'number':
        return this.size;
      case 'string':
        return this.location;
      default:
        return this;
    }
  }
}
export default HolbertonClass;
