/**
 * Returns the average of a list
 *
 * @public
 *
 * @example
 * var average = require('path-to-algorithms/src/others/average').average;
 * var list = [477, 360, 869, 334, 541]
 *
 * console.log(average(list)); // 516.2
 *
 * @param {array} the list that you want the average of.
 *
 * @module others/average
*/
(function (exports) {
  'use strict';

  function average(array) {
    const summed = this.sum(array);
    const average = summed / array.length;
    return average;
  }

  exports.average = average;
})(typeof window === 'undefined' ? module.exports : window);
