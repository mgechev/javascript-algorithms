/**
 * Check if a number is an Armstrong number.
 *
 * Returns true if the number is an Armstrong number, false otherwise.
 *
 * @public
 *
 * @example
 * var isArmstrong = require('path-to-algorithms/src/others/armstrong').isArmstrong;
 * var result = isArmstrong(153);
 *
 * console.log(result); // true
 *
 * @param {Number} num The number to check.
 * @returns {boolean} True if the number is an Armstrong number, false otherwise.
 *
 * @module others/armstrong
 */
(function (exports) {
  'use strict';

  function isArmstrongNumber(num) {
    if (num < 0) {
      return false; // Armstrong numbers are non-negative
    }

    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i], 10);
      sum += Math.pow(digit, numDigits);
    }

    return sum === num;
  }

  exports.isArmstrong = isArmstrongNumber;
})(typeof window === 'undefined' ? module.exports : window);
