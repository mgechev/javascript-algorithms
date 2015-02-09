var oes =
  require('../../src/sorting/oddeven-sort').oddEvenSort;

describe('oddeven-sort', function () {
  'use strict';

  it('should sort the empty array', function () {
    expect(oes([])).toEqual([]);
  });

  it('should return array with the same count of elements', function () {
    expect(oes([2, 3, 4]).length).toBe(3);
  });

  it('should sort the given array in ascending order', function () {
    expect(oes([42, 3, 10])).toEqual([3, 10, 42]);
  });
});
