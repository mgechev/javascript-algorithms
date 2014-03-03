(function (exports) {

  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Recursive version of insertionsort. Complexity O(n^2).
   *
   * @public
   * @param {array} array Input array
   * @param {number} [max] Index of the element which place we should find
   *                       in the current function call
   */
  function recursiveInsertionSort(array, cmp, max) {
    cmp = cmp || compare;
    if (max <= 0) {
      return array;
    }
    if (max === undefined) {
      max = array.length - 1;
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

}(typeof exports === 'undefined' ? window : exports));