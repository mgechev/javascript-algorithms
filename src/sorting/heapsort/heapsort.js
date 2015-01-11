(function (exports) {
  'use strict';

  function comparator(a, b) {
    return a - b;
  }

  /**
   * The heapsort algorithm. It's complexity is O(nlog n).
   *
   * @public
   */
  var heapSort = (function () {

    /**
     * Finds the correct place of given element in given max heap.
     *
     * @private
     * @param {array} array Array
     * @param {number} index Index of the element which palce in
     *                       the max heap should be found.
     */
    function heapify(array, index, heapSize, cmp) {
      var left = 2 * index + 1,
          right = 2 * index + 2,
          largest = index;

      if (left < heapSize && cmp(array[left], array[index]) > 0) {
        largest = left;
      }

      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
        largest = right;
      }

      if (largest !== index) {
        var temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        heapify(array, largest, heapSize, cmp);
      }
    }

    /**
     * Builds max heap from given array.
     *
     * @private
     * @param {array} array Array which should be turned into max heap
     * @returns {array} array Array turned into max heap
     */
    function buildMaxHeap(array, cmp) {
      for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, cmp);
      }
      return array;
    }

    /**
     * Heapsort. Turns the input array into max heap and after that sorts it.
     *
     * @public
     * @param {array} array Input array
     * @returns {array} array Sorted array
     */
    return function (array, cmp) {
      cmp = cmp || comparator;
      var size = array.length,
          temp;
      buildMaxHeap(array, cmp);
      for (var i = array.length - 1; i > 0; i -= 1) {
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        size -= 1;
        heapify(array, 0, size, cmp);
      }
      return array;
    };
  }());

  exports.heapSort = heapSort;

}(typeof exports === 'undefined' ? window : exports));
