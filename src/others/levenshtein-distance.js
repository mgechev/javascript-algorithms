(function (exports) {
  'use strict';

  var levenshteinDistance = (function () {

    function levenshteinDistance(s, ls, t, lt) {
      if (ls === 0) {
        return lt;
      }
      if (lt === 0) {
        return ls;
      }
      var cost;
      if (s[ls - 1] === t[lt - 1]) {
        cost = 0;
      } else {
        cost = 1;
      }
      return Math.min(levenshteinDistance(s, ls - 1, t,     lt) + 1,
                      levenshteinDistance(s, ls,     t, lt - 1) + 1,
                      levenshteinDistance(s, ls - 1, t, lt - 1) + cost);
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
