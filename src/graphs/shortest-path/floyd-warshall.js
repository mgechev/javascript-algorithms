(function (exports) {
  'use strict';

  var floydWarshall = (function () {

    /**
     * Matrix used for the algorithm.
     */
    var dist;

    /**
     * Initialize the distance matrix.
     *
     * @private
     * @param {array} graph Distance matrix of the array.
     * @return {array} Distance matrix used for the algorithm.
     */
    function init(graph) {
      var dist = [];
      var size = graph.length;
      for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
          if (i === j) {
            dist[i][j] = 0;
          } else if (isNaN(graph[i][j])) {
            dist[i][j] = Infinity;
          } else {
            dist[i][j] = graph[i][j];
          }
        }
      }
      return dist;
    }

    /**
     * Floyd-Warshall algorithm. Finds the shortest path between each two vertices.<br><br>
     * Complexity: O(|V|^3) where V is the number of vertices.
     *
     * @public
     * @module graphs/shortest-path/floyd-warshall
     * @param {Array} graph A distance matrix of the graph.
     * @return {Array} Array which contains the shortest distance between each two vertices.
     * 
     * @example
     * var floydWarshall = require('path-to-algorithms/src/graphs/shortest-path/floyd-warshall').floydWarshall;
     * var distMatrix = [[NaN, 7,   9,   NaN, NaN, 16],
     *                   [7,   NaN, 10,  15,  NaN, NaN],
     *                   [9,   10,  NaN, 11,  NaN, 2],
     *                   [NaN, 15,  11,  NaN, 6,   NaN],
     *                   [NaN, NaN, NaN, 6,   NaN, 9],
     *                   [16,  NaN, 2,   NaN, 9,   NaN]];
     *
     * // [ [ 0, 7, 9, 20, 20, 11 ],
     * //   [ 7, 0, 10, 15, 21, 12 ],
     * //   [ 9, 10, 0, 11, 11, 2 ],
     * //   [ 20, 15, 11, 0, 6, 13 ],
     * //   [ 20, 21, 11, 6, 0, 9 ],
     * //   [ 11, 12, 2, 13, 9, 0 ] ]
     * var shortestDists = floydWarshall(distMatrix);
     */
    return function (graph) {
      dist = init(graph);
      var size = graph.length;
      for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
          for (var j = 0; j < size; j += 1) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
            }
          }
        }
      }
      return dist;
    };
  }());

  exports.floydWarshall = floydWarshall;

})(typeof window === 'undefined' ? module.exports : window);