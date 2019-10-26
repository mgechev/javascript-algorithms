var jumpSearch = require('../../src/searching/jump-search').jumpSearch;

describe('Jump search', function() {
  'use strict';

  it('should find the element at position 0 ', function() {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 1)).toBe(0);
  });

  it('should find the element at position 4 ', function() {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 6)).toBe(4);
  });

  it('should return -1 ', function() {
    expect(jumpSearch([1, 2, 3, 4, 6, 8], 10)).toBe(-1);
  });

  it('should return -1 ', function() {
    expect(jumpSearch([], 10)).toBe(-1);
  });
});
