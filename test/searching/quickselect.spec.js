var quickselect = require('../../src/searching/quickselect').quickselect;

describe('quickselect', function () {
  'use strict';

  it('should be defined as function', function () {
    expect(typeof quickselect).toBe('function');
  });

  it('should work with empty array', function () {
    expect(quickselect([], 1)).toBe(undefined);
  });

  it('should find the only element in the list', function () {
    expect(quickselect([1], 0)).toBe(1);
  });

  it('should return undefined if the list is smaller than the index',
    function () {
      expect(quickselect([2, 1], 3)).toBeUndefined();
    });

  it('should find the element if in sorted order', function () {
    expect(quickselect([1, 2], 0)).toBe(1);
    expect(quickselect([1, 2], 1)).toBe(2);
  });

  it('should fine the element if not in sorted order', function () {
    expect(quickselect([2, 1, 9, 6], 3)).toBe(9);
  });
});
