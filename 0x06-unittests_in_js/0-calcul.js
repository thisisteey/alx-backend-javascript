const calculateNumber = (a, b) => {
  const fstNum = Math.round(a);
  const scdNum = Math.round(b);
  const totalInt = fstNum + scdNum;
  return totalInt;
};

module.exports = calculateNumber;
