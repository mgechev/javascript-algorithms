(function (exports) {
  'use strict';

  /**
   * Searchs for specific element in given array using
   * the binary search algorithm.
   * It's complexity is O(log n)
   *
   * @public
   * @param {array} array Input array
   * @param {number} key The key of the element which index we should find
   * @returns {number} index The index of the element or -1 if not found
   */
  function binarySearch(array, key) {
    var middle = Math.floor(array.length / 2);
    var left = 0;
    var right = array.length;
    while (right >= left) {
      if (array[middle] === key) {
        return middle;
      } else if (array[middle] > key) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = Math.floor((left + right) / 2);
    }
    return -1;
  }

  exports.binarySearch = binarySearch;

}(typeof exports === 'undefined' ? window : exports));
