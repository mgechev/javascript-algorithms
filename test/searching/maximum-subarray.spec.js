var maxSubArray = require('../../src/searching/maximum-subarray').maxSubarray;

describe('Maximum subarray', function() {
  'use strict';

  it('should work with empty arrays', function() {
    expect(maxSubArray([])).toBeUndefined();
  });

  it('should return the only element when an array with single element is passed', function() {
    expect(maxSubArray([42])).toBe(42);
  });

  it('should return the only negative element when an array with single element is passed', function() {
    expect(maxSubArray([-42])).toBe(-42);
  });

  it('should return the zero when an array with single element, which is zero is passed', function() {
    expect(maxSubArray([0])).toBe(0);
  });

  it('should return the max sum of a subarray', function() {
    expect(maxSubArray([1, -1, 2, 3, -1])).toBe(5);
  });

  it('should return the max negative number when array with negative numbers is provided', function() {
    expect(maxSubArray([-10, -1, -2, -3, -1])).toBe(-1);
  });
});
