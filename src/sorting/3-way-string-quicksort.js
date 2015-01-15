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
      var lowPointer = lo;
      var highPointer = hi;
      var p = charAt(arr[lo], d);
      var i = lo + 1;
      var current;

      while (i <= highPointer) {
        current = charAt(arr[i], d);
        if (current < p) {
          swap(arr, i, lowPointer);
          lowPointer += 1;
        } else if (current > p) {
          swap(arr, i, highPointer);
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

    /**
     * Effective inplace string sorting algorithm.
     * Algorithm is NOT stable.
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src/sorting'+
     * '/3-way-string-quicksort').quicksort;
     * console.log(sort(['bb', 'aa', 'cc'])); // [ 'aa', 'bb', 'cc' ]
     *
     * @public
     * @module sorting/3-way-string-quicksort
     * @param arr {Array} array which should be sorted.
     * @return {Array} Sorted array.
     */
    return function sort(arr) {
      quicksort(arr, 0, arr.length - 1, 0);
      return arr;
    };
  }());

  exports.quicksort = quicksort;

})(typeof window === 'undefined' ? module.exports : window);
