(function (exports) {

  'use strict';

  /**
   * The quicksort algorithm. It's complexity is O(nlog n).
   *
   * @public
   */
  var quickSort = (function () {

    function compare(a, b) {
      return a - b;
    }

    /**
     * Swap the places of two elements
     *
     * @private
     * @param {array} array The array which contains the elements
     * @param {number} i The index of the first element
     * @param {number} j The index of the second element
     * @returns {array} array The array with swapped elements
     */
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }

    /**
     * Partitions given subarray using Lomuto's partitioning algorithm.
     *
     * @private
     * @param {array} array Input array
     * @param {number} left The start of the subarray
     * @param {number} right The end of the subarray
     */
    function partition(array, left, right, compare) {
      var cmp = array[right - 1];
      var minEnd = left;
      var maxEnd;
      for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
        if (compare(array[maxEnd], cmp) < 0) {
          swap(array, maxEnd, minEnd);
          minEnd += 1;
        }
      }
      swap(array, minEnd, right - 1);
      return minEnd;
    }

    /**
     * Sorts given array.
     *
     * @private
     * @param {array} array Array which should be sorted
     * @param {number} left The start of the subarray which should be handled
     * @param {number} right The end of the subarray which should be handled
     * @returns {array} array Sorted array
     */
    function quickSort(array, left, right, cmp) {
      if (left < right) {
        var p = partition(array, left, right, cmp);
        quickSort(array, left, p, cmp);
        quickSort(array, p + 1, right, cmp);
      }
      return array;
    }

    /**
     * Calls the quicksort function with it's initial values.
     *
     * @public
     * @param {array} array The input array which should be sorted
     * @returns {array} array Sorted array
     */
    return function (array, cmp) {
      cmp = cmp || compare;
      return quickSort(array, 0, array.length, cmp);
    };
  }());

  exports.quickSort = quickSort;

}(typeof exports === 'undefined' ? window : exports));
