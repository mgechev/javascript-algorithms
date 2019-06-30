/**
 * Run-length encoding.
 * The idea of this algorithm is to remove the usless zeros and
 * give us representation of string in binary which in which the
 * zeros will be stripped and replaced with their count.
 */
(function (exports) {
  'use strict';

  var runLengthEncoding = (function () {

    /**
     * Converts a given string to sequence of numbers
     * This takes O(n).
     */
    function convertToAscii(str) {
      var result = [];
      var currentChar = '';
      var i = 0;
      for (; i < str.length; i += 1) {
        currentChar = str[i].charCodeAt(0).toString(2);
        currentChar = new Array(9 - currentChar.length).join('0') + currentChar;
        result.push(currentChar);
      }
      return result.join('');
    }

    /**
     * Encodes the binary string to run-length encoding.
     * Takes O(n^2).
     */
    function runLength(vector) {
      var result = [];
      var zeros = 0;
      var zerosTemp = '';
      var i = 0;
      for (; i < vector.length; i += 1) {
        if (vector[i] === '0') {
          zeros += 1;
        } else {
          zerosTemp = zeros.toString(2);
          result.push(new Array(zerosTemp.length).join('1'));
          result.push('0' + zerosTemp);
          zeros = 0;
        }
      }
      return result.join('');
    }

    /**
     * Accepts a string and returns it's run-length
     * encoded binary representation.
     * Takes O(n^2).
     */
    return function (str) {
      var asciiString = convertToAscii(str);
      return runLength(asciiString);
    };

  }());

  exports.runLength = runLengthEncoding;

}(typeof exports === 'undefined' ? window : exports));
