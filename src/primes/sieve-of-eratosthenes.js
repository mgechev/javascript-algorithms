/**
 * Sieve of Eratosthenes
 *
 * Simple, ancient algorithm for finding all prime numbers up to any given limit
 */
(function (exports) {
    'use strict';

    /**
     * Returns Sieve of Eratosthenes for specified number
     *
     * Simple, ancient algorithm for finding all prime numbers up to any given
     * limit
     *
     * @param {Number} limit - algorithm will return list with prime numbers up
     *                         to given limit
     *
     * @returns {Array} - will return array with all prime numbers up to
     *                    provided limit
     */
    exports.sieveOfEratosthenes = function (limit) {
        var sieve = [],
            primes = [], k, l;

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