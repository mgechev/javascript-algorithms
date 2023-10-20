var mod = require('../../src/combinatorics/permutations');
var permutations = mod.permutations;

describe('permutations', function () {
  'use strict';

  it('should return array of length 2 for 2 value permutation.', function () {
    const result = permutations(['hello', 'world']);
    expect(result.length).toBe(2);
    expect(result).toEqual([['hello', 'world'], ['world', 'hello']]);
  });

  it('should return array of length 6 for 3 value permutations.', function () {
    const result = permutations(['apple', 'orange', 'pear']);
    expect(result.length).toBe(6);
    expect(result).toEqual([['apple', 'orange', 'pear'], ['apple', 'pear', 'orange'], ['orange', 'apple', 'pear'], ['orange', 'pear', 'apple'], ['pear', 'orange', 'apple'], ['pear', 'apple', 'orange']]);
  });

  it('should return array of length 24 for 4 value permutations.', function () {
    expect(permutations(['apple', 'mango', 'orange', 'pear']).length).toBe(24);
  });
});
