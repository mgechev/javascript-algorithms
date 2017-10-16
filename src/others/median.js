/**
 * Returns the median of a list
 *
 * @public
 *
 * @example
 * var median = require('path-to-algorithms/src/others/median').median;
 * var list = [477, 360, 869, 334, 541]
 *
 * console.log(median(list)); // 516.2
 *
 * @param {array} the list that you want the median of.
 *
 * @module others/median
*/
(function (exports) {
  'use strict';

  function median(array) {
    array.sort( (a, b) => a - b );
    const half = Math.floor(array.length / 2);
    if(array.length % 2) {
      return array[half];
    }
    else {
      return (array[half-1] + array[half]) / 2);
    }

  exports.median = median;
})(typeof window === 'undefined' ? module.exports : window);
