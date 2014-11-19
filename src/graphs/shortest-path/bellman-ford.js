(function (global) {
  'use strict';

  function Edge(u, v, weight) {
    this.from = u;
    this.to = v;
    this.weight = weight;
  }

  // Complexity O(|V||E|)
  function bellmanFord(vertexes, edges, source) {
    var distances = {}, parents = {}, c;
    for (var i = 0; i < vertexes.length; i += 1) {
      distances[vertexes[i]] = Infinity;
      parents[vertexes[i]] = null;
    }
    distances[source] = 0;
    for (i = 0; i < vertexes.length - 1; i += 1) {
      for (var j = 0; j < edges.length; j += 1) {
        c = edges[j];
        if (distances[c.from] + c.weight < distances[c.to]) {
          distances[c.to] = distances[c.from] + c.weight;
          parents[c.to] = c.from;
        }
      }
    }

    for (i = 0; i < edges.length; i += 1) {
      c = edges[i];
      if (distances[c.from] + c.weight < distances[c.to]) {
        return undefined;
      }
    }

    return { parents: parents, distances: distances };
  }

  global.Edge = Edge;
  global.bellmanFord = bellmanFord;

}((typeof window === 'undefined') ? global : window));

// var glob = (typeof window === 'undefined') ? global : window;
// var Edge = glob.Edge;
// var bellmanFord = glob.bellmanFord;
// var edges = [];
// var vertexes = [0, 1, 2, 3, 4];
// edges.push(new Edge(0, 1, -1));
// edges.push(new Edge(0, 2, 4));
// edges.push(new Edge(1, 2, 3));
// edges.push(new Edge(1, 3, 2));
// edges.push(new Edge(3, 1, 1));
// edges.push(new Edge(4, 3, -3));
// edges.push(new Edge(1, 4, 2));
// edges.push(new Edge(3, 2, 5));
// 
// console.log(bellmanFord(vertexes, edges, 0));
