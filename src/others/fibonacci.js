/**
 * Nth number of fibonacci's sequence
 *
 * Returns the nth number of fibonacci's sequence.
 *
 * @public
 *
 * @example
 * var fibonacci = require('path-to-algorithms/src/others/fibonacci').fibonacci;
 * var nth = fibonacci(20);
 *
 * console.log(nth); // 6765
 *
 * @param {Number} n The nth position in fibonacci's sequence
 *
 * @module others/fibonacci
*/
(function (exports) {
  'use strict';

  function fibonacci(number) {
    if (number <= 1) {
      return number;
    }

    function recursion(length, originalLength, previous, next) {
      if (length === originalLength)
        return previous + next;

      return recursion(length + 1, originalLength, next, previous + next);
    }

    return recursion(1, number - 1, 0, 1);
  }

  exports.fibonacci = fibonacci;
})(typeof window === 'undefined' ? module.exports : window);
