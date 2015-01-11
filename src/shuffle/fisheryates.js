(function (exports) {
  'use strict';

  /**
   * The shuffling algorithm of
   * Fisher-Yates. Complexity O(n)
   *
   * @param {array} array The array which should be shuffled
   * @return {array} The shuffled array.
   */
  function shuffle(array) {
    var size = array.length,
      rand, temp;
    for (var i = 1; i < size; i += 1) {
      rand = Math.round(Math.random() * i);
      temp = array[rand];
      array[rand] = array[i];
      array[i] = temp;
    }
    return array;
  }

  exports.shuffle = shuffle;

}(typeof exports === 'undefined' ? window : exports));
