/**
 * Quicksort algorithm. It's with complexity O(n log(n)).
 * In this version of quicksort I use the middle element of the
 * array for pivot.
 */

(function (exports) {

  'use strict';
    /**
     * Quicksort algorithm
     *
     * @public
     * @param {array} array Array which should be sorted.
     * @return {array} Sorted array.
     */
    var quickSort = (function () {

        /**
         * Partitions the array in two parts by the middle elements.
         * All elemnts which are less than the chosen one goes left from it
         * all which are greater goes right from it.
         *
         * @param {array} array Array which should be partitioned
         * @param {number} left Left part of the array
         * @param {number} right Right part of the array
         * @return {number}
         */
        function partition(array, left, right) {
            var pivot = array[Math.floor((left + right) / 2)],
                temp;
            while (left <= right) {
                while (array[left] < pivot)
                    left += 1;
                while (array[right] > pivot)
                    right -= 1;
                if (left <= right) {
                    temp = array[left];
                    array[left] = array[right];
                    array[right] = temp;
                    left += 1;
                    right -= 1;
                }
            }
            return left;
        }

        /**
         * Recursively calls itself with different values for
         * left/right part of the array which should be processed
         *
         * @private
         * @param {array} array Array which should be processed
         * @param {number} left Left part of the array which should be processed
         * @param {number} right Right part of the array which should be processed
         */
        function quicksort(array, left, right) {
            var mid = partition(array, left, right);
            if (left < mid - 1)
                quicksort(array, left, mid - 1);
            if (right > mid)
                quicksort(array, mid, right);
        }

        /**
         * Quicksort's initial point
         * @public
         */
        return function (array) {
            quicksort(array, 0, array.length - 1);
            return array;
        };

    }());

  exports.quickSort = quickSort;

}(typeof exports === 'undefined' ? window : exports));