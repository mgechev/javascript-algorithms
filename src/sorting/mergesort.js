(function (exports) {
  'use strict';

  var mergeSort = (function () {

    function compare(a, b) {
      return a - b;
    }

    /**
     * Mergesort method which is recursively called for sorting the input array.
     *
     * @private
     * @param {array} array The array which should be sorted
     * @param {number} start Left side of the subarray
     * @param {number} end Right side of the subarray
     * @returns {array} Array with sorted subarray
     */
    function mergesort(array, start, end, cmp) {
      if (Math.abs(end - start) <= 1) {
        return [];
      }
      var middle = Math.ceil((start + end) / 2);

      mergesort(array, start, middle, cmp);
      mergesort(array, middle, end, cmp);

      return merge(array, start, middle, end, cmp);
    }

    /**
     * Devides and sort merges two subarrays of given array
     *
     * @private
     * @param {array} array The array which subarrays should be sorted
     * @param {number} start The start of the first subarray.
     *   This subarray is with end middle - 1.
     * @param {number} middle The start of the second array
     * @param {number} end end - 1 is the end of the second array
     * @returns {array} The array with sorted subarray
     */
    function merge(array, start, middle, end, cmp) {
      var left = [];
      var right = [];
      var leftSize = middle - start;
      var rightSize = end - middle;
      var maxSize = Math.max(leftSize, rightSize);
      var size = end - start;
      var i;

      for (i = 0; i < maxSize; i += 1) {
        if (i < leftSize) {
          left[i] = array[start + i];
        }
        if (i < rightSize) {
          right[i] = array[middle + i];
        }
      }
      i = 0;
      while (i < size) {
        if (left.length && right.length) {
          if (cmp(left[0], right[0]) > 0) {
            array[start + i] = right.shift();
          } else {
            array[start + i] = left.shift();
          }
        } else if (left.length) {
          array[start + i] = left.shift();
        } else {
          array[start + i] = right.shift();
        }
        i += 1;
      }
      return array;
    }

    /**
     * Merge sort algorithm.<br><br>
     * Time complexity: O(N log(N)).
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src' +
     * '/sorting/mergesort').mergesortSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/mergesort
     * @param {Array} array Input array.
     * @param {Function} cmp Optional. A function that defines an
     * alternative sort order. The function should return a negative,
     * zero, or positive value, depending on the arguments.
     * @return {Array} Sorted array.
     */
    return function (array, cmp) {
      cmp = cmp || compare;
      return mergesort(array, 0, array.length, cmp);
    };

  }());

  exports.mergeSort = mergeSort;

})(typeof window === 'undefined' ? module.exports : window);
