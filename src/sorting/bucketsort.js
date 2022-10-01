(function (exports) {

  'use strict';

  let bucketSort = (function () {

    /**
     * Insertionsort.
     *
     * @private
     * @param {array} array Input array
     * @returns {array} array Sorted input array
     */
    function insertionSort(array) {
      let current;
      let j;
      for (let i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && current < array[j]) {
          array[j + 1] = array[j];
          j -= 1;
        }
        array[j + 1] = current;
      }
      return array;
    }

    /**
     * Creates buckets for given array
     *
     * @private
     * @param {array} array Input array
     * @returns {array} buckets Array whith array for each bucket.
     *                          Each bucket contains an array with all elements
     *                          from the input which are with suitable size.
     */
    function createBuckets(array) {
      let buckets = [];
      let currentBucket;
      let current;
      for (let i = 0; i < array.length; i += 1) {
        current = array[i];
        currentBucket = Math.floor(current);
        buckets[currentBucket] = buckets[currentBucket] || [];
        buckets[currentBucket].push(current);
      }
      return buckets;
    }

    /**
     * Sorts the arrays from each bucket.
     *
     * @private
     * @param {array} buckets Given buckets
     * @returns {array} buckets Buckets with sorted arrays for each bucket
     */
    function sortBuckets(buckets) {
      for (let i = 0; i < buckets.length; i += 1) {
        if (buckets[i] !== undefined) {
          insertionSort(buckets[i]);
        }
      }
      return buckets;
    }

    /**
     * Unions all buckets' arrays
     *
     * @private
     * @param {array} buckets Input buckets
     * @returns {array} result Sorted array which contains
     *                         all elements form each bucket
     */
    function unionBuckets(buckets) {
      let result = [];
      let currentBucket;
      for (let i = 0; i < buckets.length; i += 1) {
        currentBucket = buckets[i];
        if (currentBucket !== undefined) {
          result = result.concat(currentBucket);
        }
      }
      return result;
    }

    /**
     * Sorts given array with bucketsort.<br><br>
     * Time complexity: O(N) in case the
     * data is with uniform distribution.
     *
     * @example
     *
     * var sort = require('path-to-algorithms/src/'+
     * 'sorting/bucketsort').bucketSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @module sorting/bucketsort
     * @param {Array} array Input array which should be sorted.
     * @return {Array} Sorted array.
     */
    return function (array) {
      let buckets = createBuckets(array);
      sortBuckets(buckets);
      return unionBuckets(buckets);
    };
  }());

  exports.bucketSort = bucketSort;

})(typeof window === 'undefined' ? module.exports : window);
