(function(exports) {
  'use strict';
  /**
   * Searches for specific element in a given array using
   * the interpolation search algorithm.<br><br>
   * Time complexity: O(log log N) when elements are uniformly
   * distributed, and O(N) in the worst case
   *
   * @example
   *
   * var search = require('path-to-algorithms/src/searching/'+
   * 'interpolation-search').interpolationSearch;
   * console.log(search([1, 2, 3, 4, 5], 4)); // 3
   *
   * @public
   * @module searching/interpolation-search
   * @param {Array} sortedArray Input array.
   * @param {Number} seekIndex of the element which index should be found.
   * @returns {Number} Index of the element or -1 if not found.
   */
  function interpolationSearch(sortedArray, seekIndex) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
      const rangeDiff = sortedArray[rightIndex] - sortedArray[leftIndex];
      const indexDiff = rightIndex - leftIndex;
      const valueDiff = seekIndex - sortedArray[leftIndex];

      if (valueDiff < 0) {
        return -1;
      }

      if (!rangeDiff) {
        return sortedArray[leftIndex] === seekIndex ? leftIndex : -1;
      }

      const middleIndex =
        leftIndex + Math.floor((valueDiff * indexDiff) / rangeDiff);

      if (sortedArray[middleIndex] === seekIndex) {
        return middleIndex;
      }

      if (sortedArray[middleIndex] < seekIndex) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }

    return -1;
  }
  exports.interpolationSearch = interpolationSearch;
})(typeof window === 'undefined' ? module.exports : window);
