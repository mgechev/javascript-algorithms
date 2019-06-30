(function (exports) {

  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Quicksort algorithm
   *
   * @public
   * @param {array} array Array which should be sorted.
   * @return {array} Sorted array.
   */
  var quickSort = (function () {

    /**
     * Partitions the array in two parts by the middle elements.
     * All elements which are less than the chosen one goes left from it
     * all which are greater goes right from it.
     * Uses Hoare's partitioning algorithm.
     *
     * @param {array} array Array which should be partitioned
     * @param {number} left Left part of the array
     * @param {number} right Right part of the array
     * @return {number}
     */
    function partition(array, left, right, cmp) {
      var pivot = array[Math.floor((left + right) / 2)];
      var temp;
      while (left <= right) {
        while (cmp(array[left], pivot) < 0) {
          left += 1;
        }
        while (cmp(array[right], pivot) > 0) {
          right -= 1;
        }
        if (left <= right) {
          temp = array[left];
          array[left] = array[right];
          array[right] = temp;
          left += 1;
          right -= 1;
        }
      }
      return left;
    }

    /**
     * Recursively calls itself with different values for
     * left/right part of the array which should be processed
     *
     * @private
     * @param {array} array Array which should be processed
     * @param {number} left Left part of the array which should be processed
     * @param {number} right Right part of the array which should be processed
     */
    function quicksort(array, left, right, cmp) {
      var mid = partition(array, left, right, cmp);
      if (left < mid - 1) {
        quicksort(array, left, mid - 1, cmp);
      }
      if (right > mid) {
        quicksort(array, mid, right, cmp);
      }
    }

    /**
     * Quicksort algorithm. In this version of quicksort used
     * middle element of array for the pivot.<br><br>
     * Time complexity: O(N log(N)).
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src' +
     * '/sorting/quicksort-middle').quickSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/quicksort-middle
     * @param {Array} array Input array.
     * @param {Function} cmp Optional. A function that defines an
     * alternative sort order. The function should return a negative,
     * zero, or positive value, depending on the arguments.
     * @return {Array} Sorted array.
     */
    return function (array, cmp) {
      cmp = cmp || compare;
      quicksort(array, 0, array.length - 1, cmp);
      return array;
    };

  }());

  exports.quickSort = quickSort;

})(typeof window === 'undefined' ? module.exports : window);
