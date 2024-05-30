class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Gets and sets the code for the currency
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Gets and sets the name of the currency
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
