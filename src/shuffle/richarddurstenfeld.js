(function (exports) {

  'use strict';

  /**
   * Shuffle of an array elements.
   * This algorithm is modified version of Fisher-Yates shuffle
   * algorithm and is introduced by Richard Durstenfeld.<br><br>
   * Time complexity: O(N).
   *
   * @example
   * var shuffle = require('path-to-algorithms/src/shuffle' +
   * '/richarddurstenfeld').shuffle;
   * console.log(shuffle([1, 2, 3, 4, 5])); // random shuffled
   *
   * @public
   * @module shuffle/richarddurstenfeld
   * @param {Array} array An array which should be shuffled.
   * @return {Array} Shuffled array.
   */
  function shuffle(array) {
    var arraySize = array.length - 1;
    var rand;
    var temp;
    for (var i = arraySize; i >= 0; i -= 1) {
      rand = Math.round(Math.random() * arraySize);
      temp = array[i];
      array[i] = array[rand];
      array[rand] = temp;
    }
    return array;
  }

  exports.shuffle = shuffle;

}(typeof exports === 'undefined' ? window : exports));
