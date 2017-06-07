var longestIncreasingSubsequence =
  require('../../src/searching/' +
    'longest-increasing-subsequence')
    .longestIncreasingSubsequence;

describe('longest increasing subsequence', function () {
  'use strict';

  var sequence;
  beforeEach(function () {
    sequence = [5, 2, 8, 6, 3, 6, 9, 7, 11];
  });

  it('should work with empty array', function () {
    expect(longestIncreasingSubsequence([]).length).toBe(0);
  });

  it('should return the only element in a single element array', function () {
    var array = [1];
    expect(longestIncreasingSubsequence(array)).toEqual([1]);
  });

  it('should give the right length', function () {
    expect(longestIncreasingSubsequence(sequence).length).toBe(5);
  });

  it('should work with empty arrays', function () {
    expect(longestIncreasingSubsequence([]).length).toBe(0);
  });

  it('should return the correct path', function () {
    expect(longestIncreasingSubsequence(sequence).toString())
      .toBe([2, 3, 6, 9, 11].toString());
  });

  it('should work with a custom comparator', function () {
    var cmp = function (a, b) {
      return b - a;
    };
    var seq = [1, 2, -1];
    var result = longestIncreasingSubsequence(seq, cmp);
    expect(result.length).toBe(2);
    expect(result).toEqual([1, -1]);
  });
});

