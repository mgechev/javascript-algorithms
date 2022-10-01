(function (exports) {
  'use strict';

  exports.longestIncreasingSubsequence = (function () {

    /**
    * Find the index of the first largest element in array.
    * Complexity: O(N).
    *
    * @private
    * @param {Array} array The array in which the largest
    *  element should be found.
    * @return {Number} index of the first largest element
    */
    function max(array) {
      if (!array || !array.length) {
        return -1;
      }
      let maxIdx = 0;
      for (let i = 1; i < array.length; i += 1) {
        if (array[maxIdx].distance < array[i].distance) {
          maxIdx = i;
        }
      }
      return maxIdx;
    }

    /**
    * Default comparison method.
    * @private
    */
    function asc(a, b) {
      return a - b;
    }

    /**
    * Creates directed graph from given array.
    * Each element's neighbours are the elements which can be
    * after the element in the resulting sequence.<br><br>
    * Complexity: O(N^2).
    * @private
    * @param  {Array} array The input array.
    * @param  {Function} cmp Comparator.
    * @return {Object} Graph represented with list of neighbours.
    */
    function buildDag(array, cmp) {
      let result = [];
      for (let i = 0; i < array.length; i += 1) {
        result[i] = [];
        for (let j = i + 1; j < array.length; j += 1) {
          if (cmp(array[i], array[j]) < 0) {
            result[i].push(j);
          }
        }
      }
      return result;
    }

    /**
    * Finds the longest increasing sub-sequence for given node.<br><br>
    * Complexity: O(N^N).
    * @private
    * @param {Object} dag  Graph represented with list of neighbours.
    * @param {number} node The current node.
    * @return {object} The longest increasing sub-sequence for given node.
    */
    function find(dag, node) {
      node = node || 0;
      if (find.memo[node]) {
        return find.memo[node];
      }
      let neighbours = dag[node];
      let neighboursDistance = [];
      let maxDist;
      // var maxNode;
      let distance;
      let result;

      if (!neighbours.length) {
        return { distance: 1, neighbour: undefined, node: node };
      }

      for (let i = 0; i < neighbours.length; i += 1) {
        neighboursDistance[i] = find(dag, neighbours[i]);
      }

      maxDist = max(neighboursDistance);
      // maxNode = neighbours[maxDist];
      distance = 1 + neighboursDistance[maxDist].distance;
      find.memo[node] = result = {
        distance: distance,
        neighbour: neighboursDistance[maxDist],
        node: node
      };
      return result;
    }

    /**
    * Algorithm from dynamic programming. It finds the longest
    * sub-sequence of increasing numbers. It is not required
    * the numbers to be neighboring. For example for 1, 5, 2
    * sequence the longest sub-sequence is 1, 2.
    *
    * @example
    * var subsequence = require('path-to-algorithms/src/searching/'+
    * 'longest-increasing-subsequence').longestIncreasingSubsequence;
    * console.log(subsequence([1, 0, 4, 3, 5])); // 1, 4, 5
    *
    * @public
    * @module searching/longest-increasing-subsequence
    * @param {Array} array Input sequence.
    * @param {Function} cmp Comparator.
    * @return {Array} Longest increasing subsequence.
    */
    return function (array, cmp) {
      cmp = cmp || asc;
      let results = [];
      let dag = buildDag(array, cmp);
      let maxPath;
      find.memo = [];
      for (let i = 0; i < array.length; i += 1) {
        results.push(find(dag, i));
      }
      maxPath = results[max(results)];
      results = [];
      while (maxPath) {
        results.push(array[maxPath.node]);
        maxPath = maxPath.neighbour;
      }
      return results;
    };
  })();

})(typeof window === 'undefined' ? module.exports : window);

