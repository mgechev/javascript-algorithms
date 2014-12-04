var topologicalSort = (function () {
  'use strict';

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

var graph = {
  '0': ['1', '2'],
  '1': ['2', '4'],
  '2': ['3'],
  '3': [],
  '4': ['5', '6'],
  '5': [],
  '6': ['3']
};

console.log(topologicalSort(graph));
