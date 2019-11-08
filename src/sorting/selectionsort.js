(function (exports) {
  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Selection sort.<br><br>
   * Time complexity: O(N^2).
   *
   * @example
   *
   * var sort = require('path-to-algorithms/src/sorting/'+
   * 'selectionsort').selectionSort;
   * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
   *
   * @public
   * @module sorting/selectionsort
   * @param {Array} array Input array.
   * @param {Function} cmp Optional. A function that defines an
   * alternative sort order. The function should return a negative,
   * zero, or positive value, depending on the arguments.
   * @return {Array} Sorted array.
   */
  var selectionSort = function (array, cmp) {
    cmp = cmp || compare;
    var idx;
    var temp;
    for (var i = 0; i < array.length - 1; i += 1) {
      idx = i;
      for (var j = i + 1; j < array.length; j += 1) {
        if (cmp(array[idx], array[j]) > 0) {
          idx = j;
        }
      }
      temp = array[i];
      array[i] = array[idx];
      array[idx] = temp;
    }
    return array;
  };

  exports.selectionSort = selectionSort;

})(typeof window === 'undefined' ? module.exports : window);
