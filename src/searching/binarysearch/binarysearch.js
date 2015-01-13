(function (exports) {
  'use strict';

  /**
   * Searchs for specific element in a given array using
   * the binary search algorithm.<br><br>
   * Time complexity: O(log N).
   *
   * @example
   *
   * var search = require('path-to-algorithms/src/searching/'+
   * 'binarysearch/binarysearch').binarySearch;
   * console.log(search([1, 2, 3, 4, 5], 4)); // 3
   *
   * @public
   * @module searching/binarysearch/binarysearch
   * @param {Array} array Input array.
   * @param {Number} value Value of the element which index should be found.
   * @returns {Number} Index of the element or -1 if not found.
   */
  function binarySearch(array, value) {
    var middle = Math.floor(array.length / 2);
    var left = 0;
    var right = array.length;
    while (right >= left) {
      if (array[middle] === value) {
        return middle;
      } else if (array[middle] > value) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = Math.floor((left + right) / 2);
    }
    return -1;
  }

  exports.binarySearch = binarySearch;

})(typeof window === 'undefined' ? module.exports : window);
