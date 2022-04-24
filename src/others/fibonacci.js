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

  function fibonacci (n , memo = []) {
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibonacci(n - 1, memo) + fibonacci( n - 2 , memo);
    return memo[n];
  }

  exports.fibonacci = fibonacci;
})(typeof window === 'undefined' ? module.exports : window);
