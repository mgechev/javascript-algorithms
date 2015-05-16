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

  function fibonacci (n) {
    if (n > 97) {
      throw 'Input too large, results in inaccurate fibonacci value.';
    }
    var n1 = 0;
    var n2 = 1;
    var aux;

    while (n > 0) {
      aux = n1;
      n1 = n2;
      n2 += aux;
      n = n - 1;
    }

    return n1;
  }

  exports.fibonacci = fibonacci;
})(typeof window === 'undefined' ? module.exports : window);
