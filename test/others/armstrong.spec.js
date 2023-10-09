var isArmstrong = require('../../src/others/armstrong.js').isArmstrong;

describe('isArmstrong', () => {
  'use strict';
  it('should return true for Armstrong numbers', () => {
    expect(isArmstrong(0)).toBe(true); // 0 is an Armstrong number
    expect(isArmstrong(1)).toBe(true); // 1 is an Armstrong number
    expect(isArmstrong(153)).toBe(true); // 153 is an Armstrong number
    expect(isArmstrong(9474)).toBe(true); // 9474 is an Armstrong number
  });

  it('should return false for non-Armstrong numbers', () => {
    expect(isArmstrong(10)).toBe(false); // 10 is not an Armstrong number
    expect(isArmstrong(123)).toBe(false); // 123 is not an Armstrong number
    expect(isArmstrong(1234)).toBe(false); // 1234 is not an Armstrong number
    expect(isArmstrong(9876)).toBe(false); // 9876 is not an Armstrong number
  });

  it('should return false for negative numbers', () => {
    expect(isArmstrong(-153)).toBe(false); // Negative numbers are not Armstrong numbers
    expect(isArmstrong(-9474)).toBe(false); // Negative numbers are not Armstrong numbers
  });

  it('should return true for single-digit numbers', () => {
    expect(isArmstrong(0)).toBe(true); // 0 is an Armstrong number
    expect(isArmstrong(1)).toBe(true); // 1 is an Armstrong number
    expect(isArmstrong(9)).toBe(true); // 9 is an Armstrong number
  });

  it('should return true for multi-digit Armstrong numbers', () => {
    expect(isArmstrong(153)).toBe(true); // 3^3 + 5^3 + 1^3 = 153
    expect(isArmstrong(9474)).toBe(true); // 9^4 + 4^4 + 7^4 + 4^4 = 9474
  });
});
