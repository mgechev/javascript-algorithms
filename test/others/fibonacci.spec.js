var mod = require('../../src/others/fibonacci.js');
var fibonacci = mod.fibonacci;

describe('fibonacci algorithm', function () {
  'use strict';

  it('should return value 1 with input 1.', function () {
    expect(fibonacci(1)).toBe(1);
  });
  it('should return value 1 with input 2.', function () {
    expect(fibonacci(2)).toBe(1);
  });
  it('should return value 2 with input 3.', function () {
    expect(fibonacci(3)).toBe(2);
  });
  it('should return value 3 with input 4.', function () {
    expect(fibonacci(4)).toBe(3);
  });
  it('should return value 5 with input 5.', function () {
    expect(fibonacci(5)).toBe(5);
  });
  it('should return value 6765 with input 20.', function () {
    expect(fibonacci(20)).toBe(6765);
  });
  
  it('should be 83621143489848422977 with input 97.', function () {
    expect(fibonacci(97)).toBe(83621143489848422977);
  });
  it('should be 135301852344706760000 with input 98.', function () {
    expect(fibonacci(98)).toBe(135301852344706760000);
  });
});
