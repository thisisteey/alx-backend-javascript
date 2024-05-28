export default function appendToEachArrayValue(array, appendString) {
  const rtnArray = [];
  for (const value of array) {
    rtnArray.push(appendString + value);
  }

  return rtnArray;
}
