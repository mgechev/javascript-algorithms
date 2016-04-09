var lsd = require('../../src/sorting/lsd.js').lsd;

describe('Least-Significant Digit', function () {
  'use strict';

  it('should work with empty arrays', function () {
    expect(lsd([]).length).toBe(0);
  });

  it('should work with arrays with a single element', function () {
    var arr = ['a'];
    lsd(arr);
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe('a');
  });

  it('should work with arrays with equally length strings', function () {
    var arr = ['bb', 'aa', 'cc'];
    lsd(arr);
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe('aa');
    expect(arr[1]).toBe('bb');
    expect(arr[2]).toBe('cc');
  });

  it('should work with arrays with equally length strings', function () {
    var arr = ['bbb', 'aac', 'aaa'];
    lsd(arr, 3);
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe('aaa');
    expect(arr[1]).toBe('aac');
    expect(arr[2]).toBe('bbb');
  });
});
