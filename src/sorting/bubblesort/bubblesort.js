(function (exports) {
  /**
   * The bubblesort algorithm. Complexity O(n^2).
   *
   * @public
   * @param {array} array Input array
   * @returns {array} array Sorted array
   */
  function bubbleSort(array) {
    var temp;
    for (var i = 0; i < array.length; i += 1) {
      for (var j = i; j > 0; j -= 1) {
        if (array[j] < array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
    return array;
  }

  module.exports = bubbleSort;

}(typeof exports === 'undefined' ? window : exports));
