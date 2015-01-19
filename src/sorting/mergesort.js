(function (exports) {
  /**
   * Mergesort module.
   * @module sorting/mergesort
   */
  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Mergesort method which is recursively called for sorting the input array.
   *
   * @public
   * @param {array} array The array which should be sorted
   * @param {Function} cmp Compares two items in an array
   * @param {number} start Left side of the subarray
   * @param {number} end Right side of the subarray
   * @returns {array} Array with sorted subarray
   */
  function mergeSort(array, cmp, start, end) {
    cmp = cmp || compare;
    start = start || 0;
    end = end || array.length;
    if (Math.abs(end - start) <= 1) {
      return [];
    }
    var middle = Math.ceil((start + end) / 2);

    mergeSort(array, cmp, start, middle);
    mergeSort(array, cmp, middle, end);

    return mergeSort.merge(array, cmp, start, middle, end);
  }

  /**
   * Devides and sort merges two subarrays of given array
   *
   * @public
   * @param {array} array The array which subarrays should be sorted
   * @param {number} start The start of the first subarray.
   *   This subarray is with end middle - 1.
   * @param {number} middle The start of the second array
   * @param {number} end end - 1 is the end of the second array
   * @returns {array} The array with sorted subarray
   */
  mergeSort.merge = function (array, cmp, start, middle, end) {
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
  };

  exports.mergeSort = mergeSort;

}(typeof exports === 'undefined' ? window : exports));
