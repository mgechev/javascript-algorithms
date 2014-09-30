(function (exports) {
  'use strict';

  var quicksort = (function () {

    function charAt(str, i) {
      return (i < str.length) ? str.charCodeAt(i) : -1;
    }

    function swap(arr, i, j) {
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }

    function quicksort(arr, lo, hi, d) {
      if (lo >= hi) {
        return;
      }
      var lowPointer = lo,
          highPointer = hi,
          p = charAt(arr[lo], d),
          i = lo + 1,
          current;

      while (i <= highPointer) {
        current = charAt(arr[i], d);
        if (current < p) {
          swap(arr, i, lowPointer);
          lowPointer += 1;
        } else if (current > p) {
          highPointer -= 1;
          i += 1;
        } else {
          i += 1;
        }
      }

      quicksort(arr, lo, lowPointer - 1, d);
      if (p >= 0) {
        quicksort(arr, lowPointer, highPointer, d + 1);
      }
      quicksort(arr, highPointer + 1, hi, d);
    }

    return function sort(arr) {
      quicksort(arr, 0, arr.length - 1, 0);
      return arr;
    };
  }());

  exports.quicksort = quicksort;

}(typeof exports === 'undefined' ? window : exports));
