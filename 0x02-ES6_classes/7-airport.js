class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Gets and sets the name of the Airport
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Gets and sets the code of the Airport
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Gets the default string description of the Airport and returns the code
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
export default Airport;
