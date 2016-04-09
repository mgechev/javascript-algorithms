(function (exports) {
  'use strict';

  /**
   * Accepts an array and range. Finds the maximum sum of elements
   * around the middle of the range.
   * @private
   * @param {Array} array Input array.
   * @param {Number} left Left interval of the range.
   * @param {Number} middle Middle of the range.
   * @param {Number} right Right side of the range.
   * @return {Number} The maximum sum including the middle element.
   */
  function crossSubarray(array, left, middle, right) {
    var leftSum = -Infinity;
    var rightSum = -Infinity;
    var sum = 0;
    var i;

    for (i = middle; i >= left; i -= 1) {
      if (sum + array[i] >= leftSum) {
        leftSum = sum + array[i];
      }
      sum += array[i];
    }
    sum = 0;
    for (i = middle + 1; i < right; i += 1) {
      if (sum + array[i] >= rightSum) {
        rightSum = sum + array[i];
      }
      sum += array[i];
    }
    return leftSum + rightSum;
  }

  /**
   * @private
   * @param {Array} array Input array.
   * @param {Number} left Left side of the range.
   * @param {Number} right Right side of the range.
   * @return {Number} Maximum sum of the elements of
   * subarray whithin the given range.
   */
  function maxSubarrayPartitioner(array, left, right) {
    if (right - left <= 1) {
      return array[left];
    }
    var middle = Math.floor((left + right) / 2);
    var leftSum = maxSubarrayPartitioner(array, left, middle);
    var rightSum = maxSubarrayPartitioner(array, middle, right);
    var crossSum = crossSubarray(array, left, middle, right);

    return Math.max(crossSum, leftSum, rightSum);
  }

  /**
   * Finds the maximum sum of the elements of a subarray in a given array
   * using the divide and conquer algorithm by Bentley, Jon (1984).
   * For example, for the sequence of values -2, 1, -3, 4, -1, 2, 1, -5, 4
   * the contiguous subarray with the largest sum is 4, -1, 2, 1, with sum 6.
   * <br><br>
   * Time complexity: O(N log N).
   *
   * @example
   * var max = require('path-to-algorithms/src/searching/'+
   * 'maximum-subarray-divide-and-conquer').maxSubarray;
   * console.log(max([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
   *
   * @public
   * @module searching/maximum-subarray-divide-and-conquer
   * @param {Array} array Input array.
   * @return {Number} Maximum sum of the elements of a subarray.
   */
  function maxSubarray(array) {
    return maxSubarrayPartitioner(array, 0, array.length);
  }

  exports.maxSubarray = maxSubarray;

})(typeof window === 'undefined' ? module.exports : window);
