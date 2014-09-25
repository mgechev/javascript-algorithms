var msd = require('../../../src/sorting/most-significant-digit/msd.js').msd;

describe('Most-Significant Digit', function () {
  'use strict';

  it('should work with empty arrays', function () {
    expect(msd([]).length).toBe(0);
  });

  it('should work with arrays with a single element', function () {
    var arr = ['a'];
    msd(arr);
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe('a');
  });

  it('should work with arrays with equally length strings', function () {
    var arr = ['bb', 'aa', 'cc'];
    msd(arr);
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe('aa');
    expect(arr[1]).toBe('bb');
    expect(arr[2]).toBe('cc');
  });

  it('should work with arrays with equally length strings', function () {
    var arr = ['bb', 'aa', 'cc'];
    msd(arr);
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe('aa');
    expect(arr[1]).toBe('bb');
    expect(arr[2]).toBe('cc');
  });
});
