function updateUniqueItems(mapItems) {
  if (!(mapItems instanceof Map)) {
    throw new Error('Cannot process');
  }
  mapItems.forEach((value, key) => {
    if (value === 1) {
      mapItems.set(key, 100);
    }
  });
}
export default updateUniqueItems;
