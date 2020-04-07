var interpolationSearch = require('../../src/searching/interpolation-search')
  .interpolationSearch;

describe('Interpolation search', function() {
  'use strict';

  it('should find the element at position 0 ', function() {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should find the element at position 4 ', function() {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 6)).toBe(4);
  });

  it('should return -1 if element is not found', function() {
    expect(interpolationSearch([1, 2, 3, 4, 6, 8], 17)).toBe(-1);
  });

  it('should return -1 if array is empty', function() {
    expect(interpolationSearch([], 10)).toBe(-1);
  });
});
