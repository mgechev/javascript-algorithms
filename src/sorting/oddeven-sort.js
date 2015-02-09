(function (exports) {
  'use strict';

  /**
   * Odd even sort algorithm.<br><br>
   * Complexity: O(N^2).
   *
   * @example
   * var sort = require('path-to-algorithms/src/' +
   * 'sorting/oddeven-sort').oddEvenSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/oddeven-sort
   * @param {Array} array Input array.
   * @return {Array} Sorted array.
   */
  function oddEvenSort(arr) {
    function swap(arr, i, j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    var sorted = false;
    while (!sorted) {
      sorted = true;
      for (var i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          sorted = false;
        }
      }

      for (i = 0; i < arr.length - 1; i += 2) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          sorted = false;
        }
      }
    }
    return arr;
  }

  exports.oddEvenSort = oddEvenSort;

})(typeof window === 'undefined' ? module.exports : window);
