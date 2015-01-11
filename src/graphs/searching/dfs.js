(function (exports) {
  'use strict';

  var dfs = (function () {

    function hasPath(graph, current, goal) {
      var stack = [];
      var visited = [];
      var node;
      stack.push(current);
      visited[current] = true;
      while (stack.length) {
        node = stack.pop();
        if (node === goal) {
          return true;
        }
        for (var i = 0; i < graph[node].length; i += 1) {
          if (graph[node][i] && !visited[i]) {
            stack.push(i);
            visited[i] = true;
          }
        }
      }
      return false;
    }

    /**
     * Depth-First graph searching algorithm.
     * Returns whether there's a path between two nodes in a graph.<br><br>
     * Time complexity: O(|V|^2).
     *
     * @module graphs/searching/dfs
     * @public
     * @param {Array} graph Adjacency matrix, which represents the graph.
     * @param {Number} start Start node.
     * @param {Number} goal Target node.
     * @return {Boolean} Returns true if path between two nodes exists.
     *
     * @example
     * var dfs = require('../src/graphs/searching/dfs').dfs;
     * var graph = [[1, 1, 0, 0, 1, 0],
     *              [1, 0, 1, 0, 1, 0],
     *              [0, 1, 0, 1, 0, 0],
     *              [0, 0, 1, 0, 1, 1],
     *              [1, 1, 0, 1, 0, 0],
     *              [0, 0, 0, 1, 0, 0]];
     * var pathExists = dfs(graph, 1, 5); // true
     */
    return function (graph, start, goal) {
      return hasPath(graph, start, goal);
    };
  }());

  exports.dfs = dfs;

}(typeof exports === 'undefined' ? window : exports));
