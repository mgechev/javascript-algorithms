(function (exports) {
  'use strict';
  var permutations = (function () {

    var res;

    function swap(arr, i, j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

   /**
    * Finds all the permutations of given array.
    * Complexity O(n*n!).
    *
    * @param {Array} arr Array to find the permutations of
    * @param {Number} current Current element
    * @returns {Array} Array containing all the permutations
    */
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

}(typeof exports === 'undefined' ? window : exports));
