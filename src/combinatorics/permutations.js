(function (exports) {
  'use strict';
  var permutations = (function () {

    var res;

    function swap(arr, i, j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    function permutations(arr, current) {
      if (current >= arr.length) {
        return res.push(arr.slice());
      }
      for (var i = current; i < arr.length; i += 1) {
        swap(arr, i, current);
        permutations(arr, current + 1);
        swap(arr, i, current);
      }
    }

    /**
    * Finds all the permutations of given array.<br><br>
    * Permutation relates to the act of rearranging, or permuting,
    * all the members of a set into some sequence or order.
    * For example there are six permutations of the set {1,2,3}, namely:
    * (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).<br><br>
    * Complexity: O(N*N!).
    *
    * @example
    *
    * var permutations = require('path-to-algorithms/src/' +
    * 'combinatorics/permutations').permutations;
    * var result = permutations(['apple', 'orange', 'pear']);
    *
    * // [ [ 'apple', 'orange', 'pear' ],
    * //   [ 'apple', 'pear', 'orange' ],
    * //   [ 'orange', 'apple', 'pear' ],
    * //   [ 'orange', 'pear', 'apple' ],
    * //   [ 'pear', 'orange', 'apple' ],
    * //   [ 'pear', 'apple', 'orange' ] ]
    * console.log(result);
    *
    * @module combinatorics/permutations
    * @public
    * @param {Array} arr Array to find the permutations of.
    * @returns {Array} Array containing all the permutations.
    */
    return function (arr) {
      res = [];
      permutations(arr, 0);
      var temp = res;
      // Free the extra memory
      res = null;
      return temp;
    };
  }());

  exports.permutations = permutations;

}((typeof window === 'undefined') ? module.exports : window));
