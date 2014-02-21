(function (exports) {

  'use strict';

  var mergeSort = (function () {

    /**
     * Mergesort method which is recursively called for sorting the input array.
     *
     * @private
     * @param {array} array The array which should be sorted
     * @param {number} start Left side of the subarray
     * @param {number} end Right side of the subarray
     * @returns {array} Array with sorted subarray
     */
    function mergesort(array, start, end) {
      if (Math.abs(end - start) <= 1) {
        return [];
      }
      var middle = Math.ceil((start + end) / 2);

      mergesort(array, start, middle);
      mergesort(array, middle, end);

      return merge(array, start, middle, end);
    }

    /**
     * Devides and sort merges two subarrays of given array
     *
     * @private
     * @param {array} array The array which subarrays should be sorted
     * @param {number} start The start of the first subarray. This subarray is with end middle - 1.
     * @param {number} middle The start of the second array
     * @param {number} end end - 1 is the end of the second array
     * @returns {array} The array with sorted subarray
     */
    function merge(array, start, middle, end) {
      var left = [],
          right = [],
          leftSize = middle - start,
          rightSize = end - middle,
          maxSize = Math.max(leftSize, rightSize),
          size = end - start,
          i;

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
          if (left[0] >= right[0]) {
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
     * Initial call to the mergesort method
     *
     * @public
     * @param {array} array The array which will be sorted
     * @returns {array} Sorted array
     */
    return function (array) {
      return mergesort(array, 0, array.length);
    };

  }());

  exports.mergeSort = mergeSort;

}(typeof exports === 'undefined' ? window : exports));
