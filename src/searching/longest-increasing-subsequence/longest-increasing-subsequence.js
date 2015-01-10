(function (exports) {
  'use strict';

  /**
   * Algorithm from dynamic programming.
   * It finds the longest sub-sequence of
   * increasing numbers. It is not required
   * the numbers to be neighboring.
   *
   * Example:
   *     1,5,2
   * The longest sub-sequence is 1,2.
   */
  exports.longestSubsequence = (function () {

   /**
    * Find the index of the first largest element in array.
    * Complexity O(n).
    *
    * @param {Array}    array The array in which the largest
    *  element should be found
    * @param {Function} cmp   Function used for comparison
    * @return {number}        The index of the first largest element
    */
    function max(array, cmp) {
      if (!array || !array.length) {
        return -1;
      }
      if (!cmp) {
        cmp = function (a, b) { return a - b; };
      }
      var maxIdx = 0;
      for (var i = 1; i < array.length; i += 1) {
        if (cmp(array[maxIdx], array[i]) < 0) {
          maxIdx = i;
        }
      }
      return maxIdx;
    }

   /**
    * Default comparison method.
    */
    function cmp(a, b) {
      return a.distance - b.distance;
    }

   /**
    * Creates directed graph from given array.
    * Each element's neighbours are the elements which can be
    * after the element in the resulting sequence.
    * Complexity O(n^2).
    *
    * @param  {Array} array The input array
    * @return {Object}      Graph represented with list of neighbours
    */
    function buildDag(array) {
      var result = [];
      for (var i = 0; i < array.length; i += 1) {
        result[i] = [];
        for (var j = i + 1; j < array.length; j += 1) {
          if (array[i] < array[j]) {
            result[i].push(j);
          }
        }
      }
      return result;
    }

   /**
    * Finds the longest sub-sequence for given node.
    * O(n^n).
    *
    * @param {Object} dag  Graph represented with list of neighbours.
    * @param {number} node The current node.
    * @return {object}     The longest sub-sequence for given node.
    */
    function find(dag, node) {
      node = node || 0;
      if (find.memo[node]) {
        return find.memo[node];
      }
      var neighbours = dag[node],
          neighboursDistance = [],
          maxDist, maxNode, distance, result;

      if (!neighbours.length) {
        return { distance: 1, neighbour: undefined, node: node };
      }

      for (var i = 0; i < neighbours.length; i += 1) {
        neighboursDistance[i] = find(dag, neighbours[i]);
      }

      maxDist = max(neighboursDistance, cmp);
      maxNode = neighbours[maxDist];
      distance = 1 + neighboursDistance[maxDist].distance;
      find.memo[node] = result = {
        distance: distance,
        neighbour: neighboursDistance[maxDist],
        node: node
      };
      return result;
    }

    return function (array) {
      var results = [],
          dag = buildDag(array),
          maxPath;
      find.memo = [];
      for (var i = 0; i < array.length; i += 1) {
        results.push(find(dag, i));
      }
      maxPath = results[max(results, cmp)];
      results = [];
      while (maxPath) {
        results.push(array[maxPath.node]);
        maxPath = maxPath.neighbour;
      }
      return results;
    };
  })();

}(typeof exports === 'undefined' ? exports : this));
