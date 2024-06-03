function hasValuesFromArray(set, array) {
  return array.every((boolValue) => set.has(boolValue));
}
export default hasValuesFromArray;
