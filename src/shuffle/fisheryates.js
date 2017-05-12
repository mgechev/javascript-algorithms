(function (exports) {

  'use strict';

  /**
   * The shuffling algorithm of
   * Fisher-Yates.<br><br>
   * Time complexity: O(N).
   *
   * @example
   * var shuffle = require('path-to-algorithms/src/' +
   * 'shuffle/fisheryates').shuffle;
   * console.log(shuffle([1, 2, 3, 4, 5])); // shuffled array
   *
   * @public
   * @module shuffle/fisheryates
   * @param {Array} array Array which should be shuffled.
   * @return {Array} Shuffled array.
   */
  function shuffle(array) {
    var size = array.length;
    var rand;
    for (var i = 0; i < size; i += 1) {
      rand = Math.floor(i + Math.random() * (size - i));
      [array[rand], array[i]] = [array[i], array[rand]];
    }
    return array;
  }

  exports.shuffle = shuffle;

})(typeof window === 'undefined' ? module.exports : window);
