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

