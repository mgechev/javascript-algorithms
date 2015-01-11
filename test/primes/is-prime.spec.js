'use strict';

var isPrime = require('../../src/primes/is-prime').isPrime;

describe('Advanced (optimised) method that checks number on prime', function () {
    it('should give true for number 104743', function () {
        expect(isPrime(104743)).toBe(true);
    });

    it('should give false for number 104744', function () {
        expect(isPrime(104744)).toBe(false);
    });
});