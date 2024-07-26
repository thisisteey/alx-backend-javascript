const Utils = {
  calculateNumber(type, a, b) {
    const fstNum = Math.round(a);
    const scdNum = Math.round(b);

    if (type === 'SUM') {
      return fstNum + scdNum;
    }

    if (type === 'SUBTRACT') {
      return fstNum - scdNum;
    }

    if (type === 'DIVIDE') {
      return scdNum === 0 ? 'Error' : fstNum / scdNum;
    }
    return 0;
  }
};

module.exports = Utils;
