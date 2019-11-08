(function (exports) {
  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * Bubble sort algorithm.<br><br>
   * Complexity: O(N^2).
   *
   * @example
   * var sort = require('path-to-algorithms/src/' +
   * 'sorting/bubblesort').bubbleSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/bubblesort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @return {Array} Sorted array.
   */
  function bubbleSort(array, cmp) {
    cmp = cmp || comparator;
    var temp;
    for (var i = 0; i < array.length - 1 ; i += 1) {
      var swapCount = 0;
      for (var j = 0; j < array.length - 1 - i; j += 1) {
        if (cmp(array[j], array[j + 1 ]) > 0) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapCount += 1;
        }
      }
      if (swapCount === 0){
        break;
      }
    }
    return array;
  }

  exports.bubbleSort = bubbleSort;

})(typeof window === 'undefined' ? module.exports : window);
