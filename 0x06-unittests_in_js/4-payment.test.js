const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let utilsStub;
  let consoleSpy;

  beforeEach(() => {
    utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('use Utils.calculateNumber with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

  it('use Utils.calculateNumber with negative arguments', () => {
    sendPaymentRequestToApi(-100, 20);
    expect(utilsStub.calledWith('SUM', -100, 20)).to.be.true;
    expect(utilsStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

  it('use Utils.calculateNumber with non-number argument', () => {
    sendPaymentRequestToApi(100, 'num');
    expect(utilsStub.calledWith('SUM', 100, sinon.match.any)).to.be.true;
    expect(utilsStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
