var linearSearch =
  require('../../src/searching/linearSearch').linearSearch;

describe('Linear Search', function () {
  'use strict';

  it('should find the element at position 0 ', function () {
    expect(linearSearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should find the element in position arr.length - 1', function () {
    var arr = [1, 2, 3, 4, 6, 8];
    expect(linearSearch(arr, 8)).toBe(arr.length - 1);
  });

  it('should work with arrays with 2 elements', function () {
    expect(linearSearch([1, 8], 1)).toBe(0);
    expect(linearSearch([1, 8], 8)).toBe(1);
  });

  it('should return a negative number for missing elements', function () {
    expect(linearSearch([1, 2, 3], 4)).toBeLessThan(0);
  });

  it('should work with empty arrays', function () {
    expect(linearSearch([], 4)).toBe(-1);
  });
});
