(function (exports) {
  'use strict';

  let countingSort = (function () {

    /**
     * Gets the count of the elements into the input array.
     *
     * @private
     * @param {Array} array The input array.
     * @return {Array} The count of each element from the input array.
     */
    function getCount(array) {
      let count = [];
      let current;
      for (let i = 0; i < array.length; i += 1) {
        current = array[i];
        count[current] = (count[current] || 0) + 1;
      }
      return count;
    }

    /**
     * Gets the count of the elements which are less than a given.
     *
     * @private
     * @param {Array} array The input array.
     * @return {Array} less The count of the elements which.
     * are less than each element from the input.
     */
    function getLessCount(array) {
      let less = [];
      let last;
      less[0] = array[0] || 0;
      for (let i = 1; i < array.length; i += 1) {
        last = array[i - 1] || 0;
        less[i] = last + less[i - 1];
      }
      return less;
    }

    /**
     * Sorts the input array.
     *
     * @private
     * @param {Array} array Input which should be sorted.
     * @param {Array} less Count of the less elements for each element.
     * @return {Array} The sorted input.
     */
    function sort(array, less) {
      let result = [];
      let currentPositions = [];
      let current;
      let position;
      for (let i = 0; i < array.length; i += 1) {
        current = array[i];
        position = less[current];
        if (currentPositions[current] === undefined) {
          currentPositions[current] = position;
        }
        result[currentPositions[current]] = current;
        currentPositions[current] += 1;
      }
      return result;
    }

    /**
     * Counting sort algorithm. It's correct only
     * for array of integers.<br><br>
     * Time complexity: O(N).
     *
     * @example
     * var sort = require('path-to-algorithms/src/' +
     * 'sorting/countingsort').countingSort;
     * console.log(sort([2, 5, 1, 3, 4])); // [ 1, 2, 3, 4, 5 ]
     *
     * @public
     * @module sorting/countingsort
     * @param {Array} array Array which should be sorted.
     * @return {Array} Sorted array.
     */
    return function (array) {
      let less = getLessCount(getCount(array));
      return sort(array, less);
    };
  }());

  exports.countingSort = countingSort;

})(typeof window === 'undefined' ? module.exports : window);
