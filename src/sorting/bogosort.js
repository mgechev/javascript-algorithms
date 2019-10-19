(function (exports) {
    'use strict';
  
    function comparator(a, b) {
      return a - b;
    }
  
    /**
     * Bogo sort algorithm.<br><br>
     * Complexity: O(n(n-1)!).
     *
     * @example
     * var sort = require('path-to-algorithms/src/' +
     * 'sorting/bogosort').bogoSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/bogoSort
     * @param {Array} array Input array.
     * @return {Array} Sorted array.
     */

    function isSorted(arr) {
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    function bogoSort(array) {
      var isSorted = false;
      while (!isSorted(array)) {
          array = shuffle(array);
      }
      return array;
    }
  
    exports.bogoSort = bogoSort;
  
  })(typeof window === 'undefined' ? module.exports : window);