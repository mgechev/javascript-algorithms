'use strict';

var longestSubsequence =
  require('../../src/searching/' +
    'longest-subsequence')
    .longestSubsequence;

describe('longest subsequence', function () {

  var sequence;
  beforeEach(function () {
    sequence = [5, 2, 8, 6, 3, 6, 9, 7, 11];
  });

  it('should work with empty array', function () {
    expect(longestSubsequence([]).length).toBe(0);
  });

  it('should return the only element in a single element array', function () {
    var array = [1];
    expect(longestSubsequence(array)).toEqual([1]);
  });

  it('should give the right length', function () {
    expect(longestSubsequence(sequence).length).toBe(5);
  });

  it('should work with empty arrays', function () {
    expect(longestSubsequence([]).length).toBe(0);
  });

  it('should return the correct path', function () {
    expect(longestSubsequence(sequence).toString())
      .toBe([2, 3, 6, 9, 11].toString());
  });

  it('should work with a custom comparator', function () {
    var cmp = function (a, b) {
      return b - a;
    };
    var seq = [1, 2, -1];
    var result = longestSubsequence(seq, cmp);
    expect(result.length).toBe(2);
    expect(result).toEqual([1, -1]);
  });
});

