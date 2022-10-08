/**
 * Nth number of fibonacciMemory's sequence
 *
 * Returns the nth number of fibonacciMemory's sequence.
 *
 * @public
 *
 * @example
 * var fibonacciMemory = require('path-to-algorithms/src/others/fibonacciMemory').fibonacciMemory;
 * var nth = fibonacciMemory(20);
 *
 * console.log(nth); // 6765
 *
 * @param {Number} n The nth position in fibonacciMemory's sequence
 *
 * @module others/fibonacciMemory
*/
(function (exports) {
  'use strict';

  function fibonacciMemory(n) {
    var i = 0;
    var aux = [0, 1];
    while (n !== i) {
      aux[i + 2] = aux[i] + aux[i + 1];
      i += 1;
    }
    return aux[i];
  }

  exports.fibonacciMemory = fibonacciMemory;
})(typeof window === 'undefined' ? module.exports : window);
