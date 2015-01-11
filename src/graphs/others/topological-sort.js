(function (exports) {
  'use strict';

  var topologicalSort = (function () {

    function topologicalSortHelper(node, visited, temp, graph, result) {
      temp[node] = true;
      var neighbors = graph[node];
      for (var i = 0; i < neighbors.length; i += 1) {
        var n = neighbors[i];
        if (temp[n]) {
          throw new Error('The graph is not a DAG');
        }
        if (!visited[n]) {
          topologicalSortHelper(n, visited, temp, graph, result);
        }
      }
      temp[node] = false;
      visited[node] = true;
      result.push(node);
    }

    /**
     * Topological sort algorithm of a directed acyclic graph.<br><br>
     * Time complexity: O(|E|) where E is a number of edges.
     *
     * @public
     * @module graphs/others/topological-sort
     * @param {Array} graph Adjacency list, which represents the graph.
     * @returns {Array} Ordered vertices.
     *
     * @example
     * var topsort =
     *  require('path-to-algorithms/src/graphs/' +
     * 'others/topological-sort').topologicalSort;
     * var graph = {
     *     v1: ['v2', 'v5'],
     *     v2: [],
     *     v3: ['v1', 'v2', 'v4', 'v5'],
     *     v4: [],
     *     v5: []
     * };
     * var vertices = topsort(graph); // ['v3', 'v4', 'v1', 'v5', 'v2']
     */
    return function (graph) {
      var result = [];
      var visited = [];
      var temp = [];
      for (var node in graph) {
        if (!visited[node] && !temp[node]) {
          topologicalSortHelper(node, visited, temp, graph, result);
        }
      }
      return result.reverse();
    };
  }());

  exports.topologicalSort = topologicalSort;

}(typeof exports === 'undefined' ? window : exports));
