(function (exports) {
  'use strict';

  var levenshteinDistance = (function () {

    function levenshteinDistance (s, ls, t, lt) {
      var memo = [];
      var currRowMemo;
      var i;
      var k;

      for (k = 0; k <= lt; k += 1) {
        memo[k] = k;
      }

      for (i = 1; i <= ls; i += 1) {
        currRowMemo = [i];

        for (k = 1; k <= lt; k += 1) {
          currRowMemo[k] = Math.min(
            currRowMemo[k - 1] + 1,
            memo[k] + 1,
            memo[k - 1] + (s[i - 1] !== t[k - 1] ? 1 : 0)
          );
        }

        memo = currRowMemo;
      }

      return memo[lt];
    }

    /**
     * The Levenshtein distance between two strings is a minimum number
     * of edits needed to transform one string into the other, with the
     * allowable edit operations being insertion, deletion,
     * or substitution of a single character.
     *
     * @public
     * @module others/levenshtein-distance
     *
     * @example
     *
     * var dist = require('path-to-algorithms/src/others/' +
     * 'levenshtein-distance').levenshteinDistance;
     * console.log(dist('kitten', 'sitting')); // 3
     *
     * @param {String} s Source string.
     * @param {String} t Target string.
     * @return {Number} Minimum number of edits needed
     * to transform source string into the target string.
     */
    return function (s, t) {
      return levenshteinDistance(s, s.length, t, t.length);
    };
  }());

  exports.levenshteinDistance = levenshteinDistance;

}(typeof exports === 'undefined' ? window : exports));

