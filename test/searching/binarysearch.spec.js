var binarySearch =
  require('../../src/searching/binarysearch').binarySearch;

describe('Binary search', function () {
  'use strict';

  it('should find the element at position 0 ', function () {
    expect(binarySearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should find the element in position arr.length - 1', function () {
    var arr = [1, 2, 3, 4, 6, 8];
    expect(binarySearch(arr, 8)).toBe(arr.length - 1);
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

  it('should work with a key string', function () {
    expect(binarySearch([{ x: 1 }, { x: 2 }, { x: 3 }], { x: 2 }, 'x')).toBe(1);
  });

  it('should work with a key function', function () {
    expect(binarySearch([{ x: 1 }, { x: 2 }, { x: 3 }],
        { x: 2 }, function (o) { return o.x; })).toBe(1);
  });
});
