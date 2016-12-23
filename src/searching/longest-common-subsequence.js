(function (exports) {
  'use strict';

  exports.longestCommonSubsequence = (function () {

    function getLcsLengths(str1, str2) {
      var result = [];
      for (var i = -1; i < str1.length; i = i + 1) {
        result[i] = [];
        for (var j = -1; j < str2.length; j = j + 1) {
          if (i === -1 || j === -1) {
            result[i][j] = 0;
          } else if (str1[i] === str2[j]) {
            result[i][j] = result[i - 1][j - 1] + 1;
          } else {
            result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
          }
        }
      }
      return result;
    }

    function getLcs(str1, str2, lcsLengthsMatrix) {
      var execute = function (i, j) {
        if (!lcsLengthsMatrix[i][j]) {
          return '';
        } else if (str1[i] === str2[j]) {
          return execute(i - 1, j - 1) + str1[i];
        } else if (lcsLengthsMatrix[i][j - 1] > lcsLengthsMatrix[i - 1][j]) {
          return execute(i, j - 1);
        } else {
          return execute(i - 1, j);
        }
      };
      return execute(str1.length - 1, str2.length - 1);
    }

    return function (str1, str2) {
      var lcsLengthsMatrix = getLcsLengths(str1, str2);
      return getLcs(str1, str2, lcsLengthsMatrix);
    };
  })();

})(typeof window === 'undefined' ? module.exports : window);
