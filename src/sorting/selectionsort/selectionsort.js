(function (exports) {
  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Selection sort. It's complexity is O(n^2)
   *
   * @public
   * @param {array} array Array to be sorted
   * @return {array} The sorted array
   */
  var selectionSort = function (array, cmp) {
    cmp = cmp || compare;
    var min, idx, temp;
    for (var i = 0; i < array.length; i += 1) {
      idx = i;
      min = array[i];
      for (var j = i + 1; j < array.length; j += 1) {
        if (cmp(min, array[j]) > 0) {
          min = array[j];
          idx = j;
        }
      }
      temp = array[i];
      array[i] = min;
      array[idx] = temp;
    }
    return array;
  };

  exports.selectionSort = selectionSort;

}(typeof exports === 'undefined' ? window : exports));