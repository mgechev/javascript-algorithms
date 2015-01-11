'use strict';

var sieveOfEratosthenes =
    require('../../src/primes/sieve-of-eratosthenes').sieveOfEratosthenes;

describe('Sieve Of Eratosthenes', function () {
    it('should give the right sequence of primes for limit 12', function () {
        expect(sieveOfEratosthenes(12).toString())
            .toBe([2, 3, 5, 7, 11].toString());
    });

    it('should give the empty list for limit less or equal 1', function () {
        expect(sieveOfEratosthenes(-12).toString()).toBe([].toString());
        expect(sieveOfEratosthenes(0).toString()).toBe([].toString());
        expect(sieveOfEratosthenes(1).toString()).toBe([].toString());
    });
});