var longestCommonSubsequence =
  require('../../src/searching/' +
    'longest-common-subsequence')
    .longestCommonSubsequence;

describe('longest common subsequence', function () {
  'use strict';

  it('should work with empty strings', function () {
    expect(longestCommonSubsequence('', '')).toBe('');
  });

  it('should work with first string empty', function () {
    expect(longestCommonSubsequence('', 'abcd')).toBe('');
  });

  it('should work with second string empty', function () {
    expect(longestCommonSubsequence('abcd', '')).toBe('');
  });

  it('should work if there is no lcs', function () {
    expect(longestCommonSubsequence('qtwer', 'zvxcv')).toBe('');
  });

  it('should work if lcs is whole first string', function () {
    expect(longestCommonSubsequence('abc', 'abcdefghi')).toBe('abc');
  });

  it('should work if lcs is whole second string', function () {
    expect(longestCommonSubsequence('qwerty', 'rty')).toBe('rty');
  });

  it('should work with repeated letter', function () {
    expect(longestCommonSubsequence('AAATC', 'GGTAGGC')).toBe('AC');
  });

  it('should work with custom characters', function () {
    expect(longestCommonSubsequence(':-)', 'B-)')).toBe('-)');
  });

  it('should work with long strings', function () {
    expect(longestCommonSubsequence('this is the first string', 'that is second')).toBe('tht is sn');
  });

  it('should work with very long strings', function () {
    expect(longestCommonSubsequence('giiiiiiit1huuuuuu2bbb', 'zzxxcvasdfgmntplpliiggggu2b222')).toBe('giiu2b');
  });
});
