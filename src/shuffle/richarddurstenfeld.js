/**
 * Shuffle of an array elements.
 * This algorithm is modified version of Fisher-Yates shuffle
 * algorithm and is introduced by Richard Durstenfeld.
 */

/**
 * Shuffles an array. Complexity O(n).
 *
 * @param {array} array An array which should be shuffled
 * @returns {array} Shuffled array
 */
function shuffle(array) {
  'use strict';
  var arraySize = array.length - 1,
      rand, temp;
  for (var i = arraySize; i >= 0; i -= 1) {
    rand = Math.round(Math.random() * arraySize);
    temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }
  return array;
}
