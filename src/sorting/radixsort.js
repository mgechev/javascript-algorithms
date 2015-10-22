(function (exports) {
  'use strict';

  var radixSort = (function () {

    /**
     * Returns the digit of a number that is 'lsdOffset'
     * places from the least significant digit.
     *
     * @private
     * @param {Number} number Number
     * @param {Number} lsdOffset Offset of the digit to return, counting
     * from the position of the least significant digit (e.g. lsdOffset = 0
     * will return the least significant digit itself)
     * @return {String} digit The specified number digit. Returns 'undefined'
     * if lsdOffset is bigger or equal to the number of digits of the 'number'
     * argument.
     */
    var getDigit = function (number, lsdOffset) {
      var size = number.toString().length;
      var digit;

      if (lsdOffset >= 0 && lsdOffset < size) {
        digit = number.toString()[size - 1 - lsdOffset];
      }

      return digit;
    };

    /**
     * Least significant digit (LSD) Radix sort. A non-comparative,
     * stable integer sorting algorithm.<br><br>
     * Worst-case time complexity is O(N K) for N keys with K being
     * the average key length, measured in number of digits.
     *
     * @example
     * var sort = require('path-to-algorithms/src/' +
     * 'sorting/radixsort').radixSort;
     * console.log(sort([2, 5, 1, 3, 4])); // [ 1, 2, 3, 4, 5 ]
     *
     * @public
     * @module sorting/radixsort
     * @param {Array} array Input integer array
     * @return {Array} Sorted array
     */
    return function (array) {
      var size = array.length;
      var R = 10;   /* Alphabet size ([0-9] for integers) */
      var count;
      var digit;
      var i;
      var j;

      /* Find maximum key size */
      var maxKeySize = (array[0] || '').toString().length;
      for (i = 1; i < size; i += 1) {
        var numStr = array[i].toString();
        if (numStr.length > maxKeySize) {
          maxKeySize = numStr.length;
        }
      }

      for (i = 0; i < maxKeySize; i += 1) {
        /* Initialize count */
        count = [];
        for (j = 0; j < R; j += 1) {
          count[j] = 0;
        }

        /* Count frequency of each array element */
        for (j = 0; j < size; j += 1) {
          digit = getDigit(array[j], i) || 0;
          count[digit] += 1;
        }

        /* Compute cumulates */
        for (j = 1; j < R; j += 1) {
          count[j] += count[j - 1];
        }

        /* Move elements to auxiliary array */
        var aux = [];
        for (j = size - 1; j >= 0; j -= 1) {
          digit = getDigit(array[j], i) || 0;
          count[digit] -= 1;
          aux[count[digit]] = array[j];
        }

        /* Copy elements back from auxilary array */
        for (j = 0; j < size; j += 1) {
          array[j] = aux[j];
        }
      }
      return array;
    };
  })();

  exports.radixSort = radixSort;

})(typeof window === 'undefined' ? module.exports : window);
