const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sums two integers', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('sums one float and integer as integers', () => {
    assert.strictEqual(calculateNumber(2, 4.0), 6);
  });

  it('sums two floats as integers', () => {
    assert.strictEqual(calculateNumber(9.0, 8.0), 17);
  });

  it('round down b and sum as integer', () => {
    assert.strictEqual(calculateNumber(3.0, 7.4), 10);
  });

  it('sums float b (round down) and integer as integer', () => {
    assert.strictEqual(calculateNumber(4, 5.2), 9);
  });

  it('round down a and sum as integer', () => {
    assert.strictEqual(calculateNumber(8.2, 6.0), 14);
  });

  it('sums float a (round down) and integer as integer', () => {
    assert.strictEqual(calculateNumber(9.1, 3), 12);
  });

  it('sum two floats (round down) as integer', () => {
    assert.strictEqual(calculateNumber(6.1, 7.3), 13);
  });

  it('round up b and sum as integer', () => {
    assert.strictEqual(calculateNumber(4.0, 6.5), 11);
  });

  it('sums float b (round up) and integer as integer', () => {
    assert.strictEqual(calculateNumber(6, 2.9), 9);
  });

  it('round up a and sum as integer', () => {
    assert.strictEqual(calculateNumber(5.7, 3.0), 9);
  });

  it('sums float a (round up) and integer as integer', () => {
    assert.strictEqual(calculateNumber(6.8, 8), 15);
  });

  it('sum two floats (round up) as integer', () => {
    assert.strictEqual(calculateNumber(7.6, 9.9), 18);
  });

  it('round trailing 9s and sums as integer', () => {
    assert.strictEqual(calculateNumber(2.499999, 6.499999), 8);
  });
});
