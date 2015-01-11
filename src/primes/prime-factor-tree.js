/**
 * Method that will return list of all primes for provided number
 *
 * For example for number 18 it should return following list of primes [2, 3, 3]
 */
(function (exports) {
    'use strict';

    /**
     * Method will list of all primes for provided number
     *
     * @param {Number} number
     * @returns {Array}
     */
    exports.primeFactorTree = function (number) {
        var div = 2,
            array = [];

        while (number > 1) {
            if (number % div === 0) {
                number /= div;

                array.push(div);
            } else {
                div += 1;
            }
        }

        return array;
    };

}(typeof exports === 'undefined' ? window : exports));