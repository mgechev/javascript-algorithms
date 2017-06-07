var sieveOfEratosthenes =
  require('../../src/primes/sieve-of-eratosthenes').sieveOfEratosthenes;

describe('Sieve Of Eratosthenes', function () {
  'use strict';

  it('should give the right sequence of primes for limit 12', function () {
    expect(sieveOfEratosthenes(12).toString())
      .toEqual([2, 3, 5, 7, 11].toString());
  });

  it('should give the empty list for limit less or equal 1', function () {
    expect(sieveOfEratosthenes(-12).toString()).toEqual([].toString());
    expect(sieveOfEratosthenes(0).toString()).toEqual([].toString());
    expect(sieveOfEratosthenes(1).toString()).toEqual([].toString());
  });

  it('sum of prime numbers up to 2000000 limit should be 142913828922', function () {
    var sieve = sieveOfEratosthenes(2000000);
    var sumOfPrimes = sieve.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });

    expect(sumOfPrimes).toEqual(142913828922);
  });
});
