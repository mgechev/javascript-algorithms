var binarySearch =
  require('../../src/searching/recursive-binarysearch').binarySearch;

describe('Binary search', function () {
  'use strict';

  it('should find the element at position 0 ', function () {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should find the eleent in position arr.length', function () {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should work with arrays with 2 elements', function () {
    expect(binarySearch([1, 8], 1)).toBe(0);
    expect(binarySearch([1, 8], 8)).toBe(1);
  });

  it('should return a negative number for missing elements', function () {
    expect(binarySearch([1, 2, 3], 4)).toBeLessThan(0);
  });

  it('should work with empty arrays', function () {
    expect(binarySearch([], 4)).toBe(-1);
  });

});
