(function (exports) {
  'use strict';

  var combinations = (function () {
    var res = [];

    function combinations(arr, k, start, idx, current) {
      if (idx === k) {
        res.push(current.slice());
        return;
      }
      for (var i = start; i < arr.length; i += 1) {
        current[idx] = arr[i];
        combinations(arr, k, i + 1, idx + 1, current);
      }
    }

    /**
     * Finds all the combinations of given array.<br><br>
     * A combination is a way of selecting members from a grouping,
     * such that (unlike permutations) the order of selection does not matter.
     * For example given three fruits, say an apple, an orange and a pear,
     * there are three combinations of two that can be drawn from this set:
     * an apple and a pear; an apple and an orange; or a pear and an orange.
     *
     * @example
     *
     * var combinations = require('path-to-algorithms/src/' +
     * 'combinatorics/combinations').combinations;
     * var result = combinations(['apple', 'orange', 'pear'], 2);
     * // [['apple', 'orange'],
     * //  ['apple', 'pear'],
     * //  ['orange', 'pear']]
     * console.log(result);
     *
     * @module combinatorics/combinations
     * @public
     * @param arr {Array} Set of items.
     * @param k {Number} Size of each combination.
     * @return {Array} Returns all combinations.
     */
    return function (arr, k) {
      res = [];
      combinations(arr, k, 0, 0, []);
      var temp = res;
      // Free the extra memory
      res = null;
      return temp;
    };
  }());

  exports.combinations = combinations;

}((typeof window === 'undefined') ? module.exports : window));
