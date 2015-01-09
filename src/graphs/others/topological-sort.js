(function (exports) {
  'use strict';

  /**
   * Complexity O(|E|), where E is the set
   * which contains all edges and |E| is their count.
   */
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
     * Implements the topological sort algorithm.
     *
     * @public
     * @param {object} graph A graph represented with list of neighbors
     * @return {array} The list containing all nodes in topological sorted order
     */
    return function (graph) {
      var result = [],
          visited = [],
          temp = [];
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

