(function (exports) {
  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * Modified version of insertion sort. It uses binary search for finding
   * where the current element should be inserted. It's correct because
   * the binary search looks just in the first part of the array
   * which is actually sorted.<br><br>
   * Time complexity: O(N^2).
   *
   * @example
   *
   * var sort = require('path-to-algorithms/src' +
   * '/sorting/insertion-binary-sort').insertionBinarySort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/insertion-binary-sort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @return {Array} Sorted array.
   */
  function insertionBinarySort(array, cmp) {
    cmp = cmp || comparator;
    var current;
    var middle;
    var left;
    var right;
    for (var i = 1; i < array.length; i += 1) {
      current = array[i];
      left = 0;
      right = i;
      middle = Math.floor((left + right) / 2);
      while (left <= right) {
        if (cmp(array[middle], current) <= 0) {
          left = middle + 1;
        } else if (cmp(array[middle], current) > 0) {
          right = middle - 1;
        }
        middle = Math.floor((right + left) / 2);
      }
      for (var j = i; j > left; j -= 1) {
        array[j] = array[j - 1];
      }
      array[j] = current;
    }
    return array;
  }

  exports.insertionBinarySort = insertionBinarySort;

})(typeof window === 'undefined' ? module.exports : window);
