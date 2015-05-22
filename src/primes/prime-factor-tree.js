(function (exports) {
  'use strict';

  /**
   * Method will return list of all primes for provided number.
   * For example for number 18 it should return following list of primes
   * [2, 3, 3].
   *
   * @module primes/prime-factor-tree
   * @param {Number} number - Number for which method will find all primes.
   * @returns {Array} List of available primes for provided number.
   *
   * @example
   * var primeFactorTree = require('path-to-algorithms/src/prime-factor-tree')
   * .primeFactorTree;
   *
   * console.log(primeFactorTree(18)); // [2, 3, 3]
   * console.log(primeFactorTree(600851475143)); // [71, 839, 1471, 6857]
   */
  exports.primeFactorTree = function (number) {
    var array = [];
    var s = 6;
    while (number > 1 && number % 2 === 0) {
      number /= 2;
      array.push(2);
    }
    while (number > 2 && number % 3 === 0) {
      number /= 3;
      array.push(3);
    }
    while (number > 4) {
      var p = s - 1;
      var q = s + 1;
      while (number > 4 && number % p === 0) {
        number /= p;
        array.push(p);
      }
      while (number > 4 && number % q === 0) {
        number /= q;
        array.push(q);
      }
      s += 6;
    }
    return array;
  };

}(typeof exports === 'undefined' ? window : exports));
