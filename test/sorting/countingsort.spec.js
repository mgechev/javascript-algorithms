var cs =
  require('../../src/sorting/countingsort').countingSort;

describe('countingsort', function () {
  'use strict';

  it('should sort the empty array', function () {
    expect(cs([])).toEqual([]);
  });

  it('should return array with the same count of elements', function () {
    expect(cs([2, 3, 4]).length).toBe(3);
  });

  it('should sort the given array in ascending order', function () {
    expect(cs([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
