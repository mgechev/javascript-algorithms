var maxSubArray =
  require('../../src/searching/maximum-subarray-divide-and-conquer')
  .maxSubarray;

describe('Maximum subarray implemented with divide and conquer', function () {
  'use strict';

  it('should work with empty arrays', function () {
    expect(isNaN(maxSubArray([]))).toBeTruthy();
  });

  it('should return the only element when an array with' +
    'single element is passed', function () {
    expect(maxSubArray([42])).toBe(42);
  });

  it('should return the only negative element when an array with' +
    'single element is passed', function () {
    expect(maxSubArray([-42])).toBe(-42);
  });

  it('should return the zero when an array with' +
    'single element, which is zero is passed', function () {
    expect(maxSubArray([0])).toBe(0);
  });

  it('should return the max sum of a subarray', function () {
    expect(maxSubArray([1, -1, 2, 3, -1])).toBe(5);
  });

  it('should return the max nevative number when array' +
  'with nevative numbers is provided', function () {
    expect(maxSubArray([-10, -1, -2, -3, -1])).toBe(-1);
  });

});
