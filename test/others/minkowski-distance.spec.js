var mod = require('../../src/others/minkowski-distance.js');
var minkowskiDistance = mod.minkowskiDistance;

describe('Minkowski Distance', function () {
  'use strict';

  it('should return 1 with points (0, 1), (1, 1) in order 1.', function () {
    expect(minkowskiDistance([0, 1], [1, 1], 1)).toBe(1);
  });
  it('should return 2 with points (0, 1), (1, 1) in order 2.', function () {
    expect(minkowskiDistance([0, 1], [1, 1], 2)).toBe(1);
  });
  it('should return 2 with points (0, 1, 4), (1, 1, 6) in order Positive Infinity.', function () {
    expect(minkowskiDistance([0, 1, 4], [1, 1, 6], Number.POSITIVE_INFINITY)).toBe(2);
  });
  it('should return 0 with points (0, 1, 4), (1, 1, 6) in order Negative Infinity.', function () {
    expect(minkowskiDistance([0, 1, 4], [1, 1, 6], Number.NEGATIVE_INFINITY)).toBe(0);
  });
  it('should return 8.372966759705923 with points (0, 3, 4, 5), (7, 6, 3, -1) in order 3.', function () {
    expect(minkowskiDistance([0, 3, 4, 5], [7, 6, 3, -1], 3)).toBe(8.372966759705923);
  });
  it('should throw when both vectors don\'t have same dimension', function () {
    expect(function () {
      minkowskiDistance([1, 2], [1], 1)
    }).toThrow('Both vectors should have same dimension');
  });
  it('should throw when p is not defined', function () {
    expect(function () {
      minkowskiDistance([1, 2], [1, 2])
    }).toThrow('The order "p" must be a number');
  });
  it('should throw when p is not a number', function () {
    expect(function () {
      minkowskiDistance([1, 2], [1, 2], NaN)
    }).toThrow('The order "p" must be a number');
  });
  it('should throw when p is less than 1', function () {
    expect(function () {
      minkowskiDistance([1, 2], [1, 2], 0)
    }).toThrow('Order less than 1 will violate the triangle inequality');
  });
});
