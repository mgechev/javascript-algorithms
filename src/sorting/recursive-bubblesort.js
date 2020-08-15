

(function (exports) {
    'use strict';

    /**
     * Recursive Bubble sort algorithm.<br><br>
     * Complexity: O(N^2).
     *
     * @example
     * var sort = require('path-to-algorithms/src/' +
     * 'sorting/recursive-bubblesort').recursive-bubblesort;
     * console.log(sort([64,32,25,12,22,11,5])); // [5, 11, 12, 22, 25, 32, 64]
     *
     * @public
     * @module sorting/recursive-bubblesort
     * @param {Array} array Input array.
     * @return {Array} Sorted array.
     */
    function recursiveBubbleSort(array,n) {
        if (n == 1) {
            return;
        }
        for (var i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
            bubbleSort(array, n - 1);
        }
    }
    exports.recursiveBubbleSort = recursiveBubbleSort;
  
  })(typeof window === 'undefined' ? module.exports : window);