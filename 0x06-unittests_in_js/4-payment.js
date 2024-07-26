const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const amountDue = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amountDue}`);
};

module.exports = sendPaymentRequestToApi;
