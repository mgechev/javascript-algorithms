(function (exports) {
  'use strict';

  /**
   * Advanced (optimised) method for checking if provided number is prime.
   * For example for number 104743 it should return true, for 104744 - false.
   *
   * @module primes/is-prime
   * @param {Number} number - Number that we check on prime.
   * @returns {Boolean} Will return true if provided number is prime.
   *
   * @example
   * var isPrime = require('path-to-algorithms/src/is-prime').isPrime;
   *
   * console.log(isPrime(7)); // true
   * console.log(isPrime(18)); // false
   */
  exports.isPrime = function (number) {
    if (number === 1) {
      return false;

    } else if (number < 4) {
      /**
       * 2 and 3 are prime
       */
      return true;

    } else if (number % 2 === 0) {
      return false;

    } else if (number < 9) {
      /**
       * We have already excluded 4,6 and 8
       */
      return true;

    } else if (number % 3 === 0) {
      return false;

    } else {
      /**
       * 'number' rounded to the greatest integer 'rounded' so that:
       * rounded * rounded <= number
       */
      var rounded = Math.floor(Math.sqrt(number));
      var factor = 5;
      while (factor <= rounded) {
        if (number % factor === 0) {
          return false;
        }
        if (number % (factor + 2) === 0) {
          return false;
        }
        factor += 6;
      }
    }

    return true;
  };

}(typeof exports === 'undefined' ? window : exports));
