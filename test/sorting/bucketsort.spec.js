var bs =
  require('../../src/sorting/bucketsort').bucketSort;

describe('bucketsort', function () {
  'use strict';

  it('should sort the empty array', function () {
    expect(bs([])).toEqual([]);
  });

  it('should return array with the same count of elements', function () {
    expect(bs([2, 3, 4]).length).toBe(3);
  });

  it('should sort the given array in ascending order', function () {
    expect(bs([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
