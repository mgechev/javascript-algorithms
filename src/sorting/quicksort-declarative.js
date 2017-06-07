(function (exports) {

  'use strict';

  function compare(a, b) {
    return a - b;
  }

  /**
   * Quicksort algorithm (declarative variant)
   *
   * @public
   * @param {array} array Array which should be sorted.
   * @return {array} Sorted array.
   */
  var quickSort = (function () {

    /**
     * Recursively calls itself.
     *
     * @private
     * @param {array} array Array which should be processed
     */
    function quicksort(array, cmp) {
      if (array.length < 1) {
        return array;
      }

      const [x, ...rest] = array;

      return [
        ...quicksort(rest.filter(v => cmp(v, x) < 0), cmp),
        x,
        ...quicksort(rest.filter(v => cmp(v, x) >= 0), cmp)
      ];
    }


    /**
     * Quicksort algorithm. In this version of quicksort used
     * declarative programming mechanisms.<br><br>
     * Time complexity: O(N log(N)).
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src' +
     * '/sorting/quicksort-declarative').quickSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/quicksort-declarative
     * @param {Array} array Input array.
     * @param {Function} cmp Optional. A function that defines an
     * alternative sort order. The function should return a negative,
     * zero, or positive value, depending on the arguments.
     * @return {Array} Sorted array.
     */
    return function (array, cmp) {
      cmp = cmp || compare;
      array = quicksort(array, cmp);
      return array;
    };

  }());

  exports.quickSort = quickSort;

}(typeof exports === 'undefined' ? window : exports));
