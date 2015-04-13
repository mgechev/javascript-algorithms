(function (exports) {
  'use strict';

  /**
   * Returns the n-th smallest element of list within
   * lo..hi inclusive (i.e. lo <= n <= hi).<br><br>
   * Time complexity: O(N).
   *
   * @example
   *
   * var quickselect = require('path-to-algorithms/src/searching/'+
   * 'quickselect').quickselect;
   * var result = quickselect([5, 1, 2, 2, 0, 3], 1, 0, 5);
   * console.log(result); // 1
   *
   * @public
   * @module searching/quickselect
   * @param {Array} arr Input array.
   * @param {Number} n A number of an element.
   * @param {Number} lo Low index.
   * @param {Number} hi High index.
   * @return Returns n-th smallest element.
   */
  function quickselect(arr, n, lo, hi) {
    function partition(arr, lo, hi, pivotIdx) {
      function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      var pivot = arr[pivotIdx];
      swap(arr, pivotIdx, hi);
      for (var i = lo; i < hi; i += 1) {
        if (arr[i] < pivot) {
          swap(arr, i, lo);
          lo += 1;
        }
      }
      swap(arr, hi, lo);
      return lo;
    }

    if (arr.length <= n) {
      return undefined;
    }
    lo = lo || 0;
    hi = hi || arr.length - 1;
    if (lo === hi) {
      return arr[lo];
    }
    while (hi >= lo) {
      var pivotIdx =
      partition(arr, lo, hi, lo + Math.floor(Math.random() * (hi - lo + 1)));
      if (n === pivotIdx) {
        return arr[pivotIdx];
      }
      if (n < pivotIdx) {
        hi = pivotIdx - 1;
      } else {
        lo = pivotIdx + 1;
      }
    }
    return undefined;
  }
  exports.quickselect = quickselect;

})(typeof window === 'undefined' ? module.exports : window);
