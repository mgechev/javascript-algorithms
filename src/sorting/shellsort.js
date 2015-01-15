(function (exports) {
  'use strict';

  function compare(a, b) {
    return a - b;
  }

  var shellSort = (function () {

    var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    /**
     * Shellsort which uses the gaps 701, 301, 132, 57, 23, 10, 4, 1 and
     * insertion sort to sort sub-arrays which match for the different gaps.
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src/' +
     * 'sorting/shellsort').shellSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/shellsort
     * @param {Array} array Input array.
     * @param {Function} cmp Optional. A function that defines an
     * alternative sort order. The function should return a negative,
     * zero, or positive value, depending on the arguments.
     * @return {Array} Sorted array.
     */
    return function (array, cmp) {
      cmp = cmp || compare;

      var gap;
      var current;
      for (var k = 0; k < gaps.length; k += 1) {
        gap = gaps[k];
        for (var i = gap; i < array.length; i += gap) {
          current = array[i];
          for (var j = i;
              j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {
            array[j] = array[j - gap];
          }
          array[j] = current;
        }
      }
      return array;
    };

  }());

  exports.shellSort = shellSort;

}(typeof exports === 'undefined' ? window : exports));
