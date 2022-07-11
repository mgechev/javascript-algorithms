var mod = require('../../src/others/fibonacciMemory.js');
var fibonacci = mod.fibonacciMemory;

describe('fibonacci with Memory algorithm', function () {
  'use strict';

  it('should return value 1 with input 1.', function () {
    expect(fibonacci(1)).toBe(1);
  });
  it('should return value 6 with input 8.', function () {
    expect(fibonacci(6)).toBe(8);
  });
  it('should return value 7 with input 13.', function () {
    expect(fibonacci(7)).toBe(13);
  });
  it('should return value 8 with input 21.', function () {
    expect(fibonacci(8)).toBe(21);
  });
  it('should return value 9 with input 34.', function () {
    expect(fibonacci(9)).toBe(34);
  });
  it('should return value 10 with input 55.', function () {
    expect(fibonacci(10)).toBe(55);
  });  
  it('should be 135301852344706760000 with input 98.', function () {
    expect(fibonacci(98)).toBe(135301852344706760000);
  });
});
