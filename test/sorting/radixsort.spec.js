var rx =
      require('../../src/sorting/radixsort.js').radixSort;

describe('radixsort', function () {
  'use strict';

  it('should sort the empty array', function () {
    expect(rx([])).toEqual([]);
  });

  it('should return array with the same count of elements', function () {
    expect(rx([2, 3, 4]).length).toBe(3);
  });

  it('should sort the given array in ascending order', function () {
    expect(rx([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
