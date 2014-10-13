(function (exports) {
  'use strict';

  // O(n)
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
      return NaN;
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
    return null;
  }
  exports.quickselect = quickselect;

}(typeof exports === 'undefined' ? window : exports));
