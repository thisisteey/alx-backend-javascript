function cleanSet(set, startString) {
  const resParts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const setValue of set.values()) {
    if (typeof setValue === 'string' && setValue.startsWith(startString)) {
      const suffix = setValue.substring(startString.length);
      if (suffix && suffix !== setValue) {
        resParts.push(suffix);
      }
    }
  }
  return resParts.join('-');
}
export default cleanSet;
