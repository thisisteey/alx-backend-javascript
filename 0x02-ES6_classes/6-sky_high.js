import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Gets and sets the floor of the SkyHighBuilding
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  // Method override to return new message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
export default SkyHighBuilding;
