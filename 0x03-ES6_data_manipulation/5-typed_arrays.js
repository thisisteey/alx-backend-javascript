function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arrDataView = new DataView(new ArrayBuffer(length), 0, length);
  arrDataView.setInt8(position, value);
  return arrDataView;
}
export default createInt8TypedArray;
