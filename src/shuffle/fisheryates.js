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

//var array = [1,2,3,4,5,6,7,8,9];
//console.log(array);
//console.log(shuffle(array));
