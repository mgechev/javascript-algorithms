(function (exports) {
  'use strict';

  /**
   * Sorts strings lexicographically.
   * Complexity O(n*m)
   *
   * @public
   * @param {Array} arr Input array
   * @param {Number} letterIdx Index to start sorting from
   * @returns {Array} Sorted array
   */
  function lsd(arr, letterIdx) {
    var temp, count;
    letterIdx = letterIdx || 1;
    for (var i = letterIdx - 1; i >= 0; i -= 1) {
      count = [];
      temp = [];
      for (var j = 0; j < arr.length; j += 1) {
        var charCode = arr[j].charCodeAt(i);
        var old = count[charCode + 1] || 0;
        count[charCode + 1] = old + 1;
      }
      for (var c = 0; c < count.length - 1; c += 1) {
        count[c] = count[c] || 0;
        count[c + 1] = count[c + 1] || 0;
        count[c + 1] += count[c];
      }
      for (j = 0; j < arr.length; j += 1) {
        var code = arr[j].charCodeAt(i);
        temp[count[code]] = arr[j];
        count[code] += 1;
      }
      for (j = 0; j < arr.length; j += 1) {
        arr[j] = temp[j];
      }
    }
    return arr;
  }

  exports.lsd = lsd;

}(typeof exports === 'undefined' ? window : exports));

