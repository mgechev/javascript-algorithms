var longestSubsequence = require('./longest-increasing-subsequence').longestSubsequence;

describe('longest subsequence', function () {

  beforeEach(function () {
    module.sequence = [5, 2, 8, 6, 3, 6, 9, 7, 11];
  });

  it('should give the right length', function () {
    console.log(longestSubsequence(module.sequence));
    expect(longestSubsequence(module.sequence).length).toBe(5);
  });
  
  it('should work with empty arrays', function () {
    expect(longestSubsequence([]).length).toBe(0);
  });

  it('should return the correct path', function () {
    expect(longestSubsequence(module.sequence).toString()).toBe([2,3,6,9,11].toString());
  });

});