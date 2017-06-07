var minCoinsChange =
  require('../../src/others/min-coins-change.js').minCoinsChange;

describe('Change making problem', function () {
  'use strict';

  it('should be defined', function () {
    expect(minCoinsChange).toBeDefined();
  });

  it('should work for 0 change', function () {
    expect(minCoinsChange([1, 2], 0)).toEqual([]);
  });

  it('should work for change equals to array element', function () {
    expect(minCoinsChange([1, 2], 1)).toEqual([1]);
  });

  it('should return the minimum amount of coins', function () {
    expect(minCoinsChange([1], 2)).toEqual([1, 1]);
    expect(minCoinsChange([1, 2], 3)).toEqual([1, 2]);
    // [2, 3, 2, 3] or [1, 3, 3, 3]
    expect(minCoinsChange([1, 2, 3], 10).length).toEqual(4);
  });

  it('should return undefined for combination, which is not possible', function () {
    expect(minCoinsChange([1, 2, 3], 0.5)).not.toBeDefined();
  });
});
