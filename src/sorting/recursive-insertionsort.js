(function (exports) {
  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Recursive version of insertion sort.<br><br>
   * Time complexity: O(N^2).
   *
   * @example
   *
   * var sort = require('path-to-algorithms/src/sorting/'+
   * 'recursive-insertionsort').recursiveInsertionSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/recursive-insertionsort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @param {Number} max Optional. Index of the element which place
   * we should find in the current function call.
   * @return {Array} Sorted array.
   */
  function recursiveInsertionSort(array, cmp, max) {
    cmp = cmp || compare;
    if (max === undefined) {
      max = array.length - 1;
    }
    if (max <= 0) {
      return array;
    }
    recursiveInsertionSort(array, cmp, max - 1);
    for (var i = max - 1, current = array[max];
        i >= 0 && cmp(current, array[i]) < 0; i -= 1) {
      array[i + 1] = array[i];
    }
    array[i + 1] = current;
    return array;
  }

  exports.recursiveInsertionSort = recursiveInsertionSort;

})(typeof window === 'undefined' ? module.exports : window);
