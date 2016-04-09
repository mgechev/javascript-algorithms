(function (exports) {
  'use strict';

  /**
   * Sieve of Eratosthenes.
   *
   * Simple, ancient algorithm for finding all prime numbers up to given limit.
   *
   * Returns list of primes up to specified limit.
   *
   * For example, for limit 10 it should return following list of primes:
   * [2, 3, 5, 7].
   *
   * @module primes/sieve-of-eratosthenes
   * @param {Number} limit - Algorithm will returns list of primes up to
   * specified limit.
   * @returns {Array} Will return list with all prime numbers up to provided.
   * limit.
   *
   * @example
   * var sieveOfEratosthenes =
   * require('path-to-algorithms/src/sieve-of-eratosthenes').sieveOfEratosthenes;
   *
   * console.log(sieveOfEratosthenes(12)); // [2, 3, 5, 7, 11]
   */
  exports.sieveOfEratosthenes = function (limit) {
    var sieve = [];
    var primes = [];
    var k;
    var l;

    sieve[1] = false;

    for (k = 2; k <= limit; k += 1) {
      sieve[k] = true;
    }

    for (k = 2; k * k <= limit; k += 1) {
      if (sieve[k] !== true) {
        continue;
      }

      for (l = k * k; l <= limit; l += k) {
        sieve[l] = false;
      }
    }

    sieve.forEach(function (value, key) {
      if (value) {
        this.push(key);
      }
    }, primes);

    return primes;
  };

}(typeof exports === 'undefined' ? window : exports));
