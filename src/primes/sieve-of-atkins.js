(function (exports) {
  'use strict';

  /**
   * Sieve of Atkins.
   *
   * Modern algorithm for finding all prime numbers up to a specified integer.
   *
   * Returns list of primes up to specified limit.
   *
   * For example, for limit 10 it should return following list of primes:
   * [2, 3, 5, 7].
   *
   * @module primes/sieve-of-atkins
   * @param {Number} limit - Algorithm will returns list of primes up to
   * specified limit.
   * @returns {Array} Will return list with all prime numbers up to provided.
   * limit.
   *
   * @example
   * var sieveOfAtkins =
   * require('path-to-algorithms/src/sieve-of-atkins').sieveOfAtkins;
   *
   * console.log(sieveOfAtkins(12)); // [2, 3, 5, 7, 11]
   */
  exports.sieveOfAtkins = function (limit) {
    if (limit <= 1) {
      return [];
    }

    const sieve = Array(limit + 1);

    const testingLimit = Math.ceil(Math.sqrt(limit));

    var i;
    var j;
    var n;

    for (i = 1; i < testingLimit; i += 1) {
      var ii = i * i;
      for (j = 1; j < testingLimit; j += 1) {
        var jj = j * j;
        if (ii + jj >= limit) {
	  break;
        }

        n = 4 * ii + jj;
        if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
          sieve[n] = !sieve[n];
        }

        n = 3 * ii + jj;
        if (n <= limit && (n % 12 === 7)) {
          sieve[n] = !sieve[n];
        }

        n = 3 * ii - jj;
        if (i > j && n <= limit && (n % 12 === 11)) {
          sieve[n] = !sieve[n];
        }
      }
    }

    for (n = 5; n <= testingLimit; n += 1) {
      if (sieve[n]) {
        j = n * n;
        for (i = j; i <= limit; i += j) {
          sieve[i] = false;
        }
      }
    }

    const primes = [2];

    if (limit > 2) {
      primes.push(3);
    }

    sieve.forEach(function (value, key) {
      if (value) {
        this.push(key);
      }
    }, primes);

    return primes;
  }
}(typeof exports === 'undefined' ? window : exports));
