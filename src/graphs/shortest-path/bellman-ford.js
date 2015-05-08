/**
 * Bellman–Ford algorithm computes shortest paths from a single source
 * vertex to all of the other vertices in a weighted digraph
 * (negative weights allowed).<br><br>
 * Time complexity: O(|V||E|) where V and E are the number of
 * vertices and edges respectively.
 *
 * @example
 *
 * var BellmanFord =
 *    require('path-to-algorithms/src/graphs/shortest-path/bellman-ford');
 * var Edge = BellmanFord.Edge;
 * var bellmanFord = BellmanFord.bellmanFord;
 * var edges = [];
 * var vertexes = [
 *   new Vertex(0),
 *   new Vertex(1),
 *   new Vertex(2),
 *   new Vertex(3),
 *   new Vertex(4)
 * ];
 *
 * edges.push(new Edge(0, 1, -1));
 * edges.push(new Edge(0, 2, 4));
 * edges.push(new Edge(1, 2, 3));
 * edges.push(new Edge(1, 3, 2));
 * edges.push(new Edge(3, 1, 1));
 * edges.push(new Edge(4, 3, -3));
 * edges.push(new Edge(1, 4, 2));
 * edges.push(new Edge(3, 2, 5));
 *
 * // {
 * //   parents:   { '0': null, '1':  0, '2': 1, '3':  4, '4': 1 },
 * //   distances: { '0': 0,    '1': -1, '2': 2, '3': -2, '4': 1 }
 * // }
 * var pathInfo = bellmanFord(vertexes, edges, 0);
 *
 * @module graphs/shortest-path/bellman-ford
 */
(function (exports) {

  'use strict';

  exports.Vertex = require('../../data-structures/vertex').Vertex;
  exports.Edge = require('../../data-structures/edge').Edge;

  /**
   * Computes shortest paths from a single source
   * vertex to all of the other vertices.
   *
   * @public
   * @param {Array} vertexes Vertices of the graph.
   * @param {Array} edges Edges of the graph.
   * @param {Number} source Start vertex.
   * @returns {Object} Object with two arrays (parents and distances)
   *   with shortest-path information or undefined if the graph
   *   has a negative cycle.
   */
  exports.bellmanFord = function (vertexes, edges, source) {
    var distances = {};
    var parents = {};
    var c;
    if (source) {
      for (var i = 0; i < vertexes.length; i += 1) {
        distances[vertexes[i].id] = Infinity;
        parents[vertexes[i].id] = null;
      }
      distances[source.id] = 0;
      for (i = 0; i < vertexes.length - 1; i += 1) {
        for (var j = 0; j < edges.length; j += 1) {
          c = edges[j];
          if (distances[c.from.id] + c.distance < distances[c.to.id]) {
            distances[c.to.id] = distances[c.from.id] + c.distance;
            parents[c.to.id] = c.from.id;
          }
        }
      }

      for (i = 0; i < edges.length; i += 1) {
        c = edges[i];
        if (distances[c.from.id] + c.distance < distances[c.to.id]) {
          return undefined;
        }
      }
    }

    return { parents: parents, distances: distances };
  };

})(typeof window === 'undefined' ? module.exports : window);
