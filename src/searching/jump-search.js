(function(exports) {
  'use strict';
  /**
   * Searches for specific element in a given array using
   * the jump search algorithm.<br><br>
   * Time complexity: O(log N).
   *
   * @example
   *
   * var search = require('path-to-algorithms/src/searching/'+
   * 'jump-search').jumpSearch;
   * console.log(search([1, 2, 3, 4, 5], 4)); // 3
   *
   * @public
   * @module searching/jumpsearch
   * @param {Array} sortedArray Input array.
   * @param {Number} seekIndex of the element which index should be found.
   * @returns {Number} Index of the element or -1 if not found.
   */
  function jumpSearch(sortedArray, seekIndex) {
    // exit if array empty
    const arrayLength = sortedArray.length;
    if (!arrayLength) {
      return -1;
    }

    // set jumpSize
    const jumpSize = Math.floor(Math.sqrt(arrayLength));

    let blockStart = 0;
    let blockEnd = jumpSize;

    while (seekIndex > sortedArray[Math.min(blockEnd, arrayLength) - 1]) {
      blockStart = blockEnd;
      blockEnd += jumpSize;

      //  if out of array bounds exit
      if (blockStart > arrayLength) {
        return -1;
      }
    }

    let currentIndex = blockStart;
    while (currentIndex < Math.min(blockEnd, arrayLength)) {
      if (sortedArray[currentIndex] === seekIndex) {
        return currentIndex;
      }

      currentIndex += 1;
    }

    return -1;
  }

  exports.jumpSearch = jumpSearch;
})(typeof window === 'undefined' ? module.exports : window);
