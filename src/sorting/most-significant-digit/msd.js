(function (exports) {
  'use strict';

  function charCodeAt(str, i) {
    return (i < str.length) ? str.charCodeAt(i) : -1;
  }

  function sort(arr, lo, hi, d) {
    var temp = [];
    var count = [];
    var j;
    var idx;
    // Use Insertion sort when the
    // array is smaller than given threshold
    for (j = lo; j <= hi; j += 1) {
      idx = charCodeAt(arr[j], d) + 2;
      count[idx] = count[idx] || 0;
      count[idx] += 1;
    }
    for (j = 0; j < count.length - 1; j += 1) {
      count[j] = count[j] || 0;
      count[j + 1] = count[j + 1] || 0;
      count[j + 1] += count[j];
    }
    for (j = lo; j <= hi; j += 1) {
      idx = charCodeAt(arr[j], d) + 1;
      temp[count[idx]] = arr[j];
      count[idx] += 1;
    }
    for (j = lo; j <= hi; j += 1) {
      arr[j] = temp[j - lo];
    }
    for (j = 0; j < count.length - 2; j += 1) {
      sort(arr, lo + count[j], lo + count[j + 1] - 1, d + 1);
    }
  }

  /**
   * Sorts given array lexicographically.
   * The algorithms knows how to treat
   * differently length strings.
   * The algorithm is stable.
   *
   * Complexity O(n*m)
   *
   * @public
   * @param {Array} arr The array, which needs to be sorted
   * @param {Number} d The digit from which the sorting should start
   * @return {Array} The sorted array
   */

  function msd(arr, d) {
    d = d || 0;
    sort(arr, 0, arr.length - 1, d);
    return arr;
  }

  exports.msd = msd;
}(typeof exports === 'undefined' ? window : exports));
