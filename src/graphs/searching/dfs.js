/**
 * Depth-First Search graph searching algorithm.
 * Finds out whether there's a path between
 * two nodes - start node and a target.
 */

(function (exports) {
  'use strict';

  var dfs = (function () {

    /**
     * Implements an iterative DFS.
     * Complexity O(|V|^2), since it uses adjust matrix.
     */
    function hasPath(graph, current, goal) {
      var stack = [],
          visited = [],
          node;
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
     * Returns whether there's a path between two nodes
     * in a graph represented with adjust matrix.
     *
     * @public
     * @param {array} graph Adjust matrix representation of a graph
     * @param {number} start A start node
     * @param {number} goal The target node
     * @return {boolean} Returns whether there's a path between start and goal
     */
    return function (graph, start, goal) {
      return hasPath(graph, start, goal);
    };
  }());

  exports.dfs = dfs;

}(typeof exports === 'undefined' ? window : exports));
