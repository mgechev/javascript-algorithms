(function (exports) {

  'use strict';

  /**
   * The quicksort algorithm (functional variant). It's complexity is O(nlog n).
   *
   * @public
   */
  var quickSort = (function () {

    /**
     * Sorts given array.
     *
     * @private
     * @param {array} array Array which should be sorted
     * @returns {array} array Sorted array
     */
    return function quickSort(array, left, right, cmp) {
      if ( arr.length < 1) {
        return arr;
      }

      var [x, ...rest] = arr;

      return [
          ...quickSort(rest.filter(v => v <= x)),
          x,
          ...quickSort(rest.filter(v => v  > x))
      ]
      return array;
    }

  }());

  exports.quickSort = quickSort;

}(typeof exports === 'undefined' ? window : exports));
