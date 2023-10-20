(function (exports) {
  'use strict';

  function id (val) { return val; }
  function get (key) { return function (val) { return val[key]; }; }

  /**
   * Searches for specific element in a given array using
   * the binary search algorithm.<br><br>
   * Time complexity: O(log N).
   *
   * @example
   *
   * var search = require('path-to-algorithms/src/searching/'+
   * 'binarysearch').binarySearch;
   * console.log(search([1, 2, 3, 4, 5], 4)); // 3
   *
   * @public
   * @module searching/binarysearch
   * @param {Array} array Input array.
   * @param {Number} value Value of the element which index should be found.
   * @returns {Number} Index of the element or -1 if not found.
   */
  function binarySearch(array, value, key = (val) => val) {
    value = key(value);
  let left = 0;
  let right = array.length;

  while (right >= left) {
    const middle = Math.floor((left + right) / 2);
    const middleValue = key(array[middle]);

    if (middleValue === value) {
      return middle; // Element found, return its index.
    } else if (middleValue > value) {
      right = middle - 1; // Adjust right pointer to search in the left half.
    } else {
      left = middle + 1; // Adjust left pointer to search in the right half.
    }
  }

    return -1;
  }

  exports.binarySearch = binarySearch;

})(typeof window === 'undefined' ? module.exports : window);
