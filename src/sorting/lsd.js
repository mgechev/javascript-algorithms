(function (exports) {
  'use strict';

  /**
   * Sorts strings lexicographically.<br><br>
   * Time complexity: O(N*M) for N keys which have M or fewer digits.
   *
   * @example
   *
   * var sort = require('../src/sorting/lsd').lsd;
   * // [ 'aab', 'aaa', 'acc', 'bbb', 'bcc' ]
   * console.log(sort(['aab', 'bbb', 'aaa', 'acc', 'bcc']));
   *
   * @public
   * @module sorting/lsd
   * @param {Array} arr Array which should be sorted.
   * @param {Number} letterIdx Optional. Index to start sorting from.
   * @return {Array} Sorted array.
   */
  function lsd(arr, letterIdx) {
    let temp;
    let count;
    letterIdx = letterIdx || 1;
    for (let i = letterIdx - 1; i >= 0; i -= 1) {
      count = [];
      temp = [];
      for (let j = 0; j < arr.length; j += 1) {
        let charCode = arr[j].charCodeAt(i);
        let old = count[charCode + 1] || 0;
        count[charCode + 1] = old + 1;
      }
      for (let c = 0; c < count.length - 1; c += 1) {
        count[c] = count[c] || 0;
        count[c + 1] = count[c + 1] || 0;
        count[c + 1] += count[c];
      }
      for (let j = 0; j < arr.length; j += 1) {
        let code = arr[j].charCodeAt(i);
        temp[count[code]] = arr[j];
        count[code] += 1;
      }
      for (let j = 0; j < arr.length; j += 1) {
        arr[j] = temp[j];
      }
    }
    return arr;
  }

  exports.lsd = lsd;

})(typeof window === 'undefined' ? module.exports : window);
