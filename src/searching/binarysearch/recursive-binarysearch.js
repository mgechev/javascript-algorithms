(function (exports) {
  'use strict';

  var binarySearch = (function () {
    /**
     * Binary search.
     *
     * @pivate
     * @param {array} array Array where we should find the index of the element
     * @param {number} value Value of the element which index should be found
     * @param {number} left Left index
     * @param {number} right Right index
     * @returns {number} index The index of the element or -1 if not found
     *
     */
    function recursiveBinarySearch(array, value, left, right) {
      if (left > right) {
        return -1;
      }
      var middle = Math.floor((right + left) / 2);
      if (array[middle] === value) {
        return middle;
      } else if (array[middle] > value) {
        return recursiveBinarySearch(array, value, left, middle - 1);
      } else {
        return recursiveBinarySearch(array, value, middle + 1, right);
      }
    }

    /**
     * Recursive version of binary search.
     * Searchs for specific element in a given array using
     * the binary search algorithm.<br><br>
     * Time complexity: O(log N).
     *
     * @example
     *
     * var search = require('path-to-algorithms/src/searching/'+
     * 'binarysearch/recursive-binarysearch').binarySearch;
     * console.log(search([1, 2, 3, 4, 5], 4)); // 3
     *
     * @public
     * @module searching/binarysearch/recursive-binarysearch
     * @param {Array} array Input array.
     * @param {Number} value Value of the element which index should be found.
     * @returns {Number} Index of the element or -1 if not found.
     */
    return function (array, value) {
      return recursiveBinarySearch(array, value, 0, array.length);
    };

  }());

  exports.binarySearch = binarySearch;

})(typeof window === 'undefined' ? module.exports : window);
