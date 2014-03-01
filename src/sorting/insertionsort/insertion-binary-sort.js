(function (exports) {

  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * Modified version of insertionsort. It uses binary search for finding
   * where the current element should be inserted. It's correct because
   * the binary search looks just in the first part of the array
   * which is actually sorted. It's complexity is O(n^2)
   *
   * @public
   * @param {array} array Input array
   * @param {array} array Sorted array
   */
  function insertionBinarySort(array, cmp) {
    cmp = cmp || comparator;
    var current,
        middle,
        left,
        right;
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

}(typeof exports === 'undefined' ? window : exports));