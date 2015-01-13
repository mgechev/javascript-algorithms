'use strict';

var longestSubsequence =
  require('../../src/searching/' +
    'longest-increasing-subsequence')
    .longestSubsequence;

describe('longest subsequence', function () {

  var sequence;
  beforeEach(function () {
    sequence = [5, 2, 8, 6, 3, 6, 9, 7, 11];
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
});
