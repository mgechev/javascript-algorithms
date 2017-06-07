/**
 * Prim's algorithm is a greedy algorithm that finds a minimum
 * spanning tree for a connected weighted undirected graph.
 *
 * @example
 *
 * var Prim = require('path-to-algorithms/src/graphs/spanning-trees/prim');
 * var Graph = Prim.Graph;
 * var Edge = Prim.Edge;
 * var Vertex = Prim.Vertex;
 *
 * var graph, edges = [];
 * edges.push(new Edge(new Vertex(0), new Vertex(1), 4));
 * edges.push(new Edge(new Vertex(0), new Vertex(7), 8));
 * edges.push(new Edge(new Vertex(1), new Vertex(7), 11));
 * edges.push(new Edge(new Vertex(1), new Vertex(2), 8));
 * edges.push(new Edge(new Vertex(2), new Vertex(8), 2));
 * edges.push(new Edge(new Vertex(2), new Vertex(3), 7));
 * edges.push(new Edge(new Vertex(2), new Vertex(5), 4));
 * edges.push(new Edge(new Vertex(2), new Vertex(3), 7));
 * edges.push(new Edge(new Vertex(3), new Vertex(4), 9));
 * edges.push(new Edge(new Vertex(3), new Vertex(5), 14));
 * edges.push(new Edge(new Vertex(4), new Vertex(5), 10));
 * edges.push(new Edge(new Vertex(5), new Vertex(6), 2));
 * edges.push(new Edge(new Vertex(6), new Vertex(8), 6));
 * edges.push(new Edge(new Vertex(8), new Vertex(7), 7));
 * graph = new Graph(edges, edges.length);
 *
 * // { edges:
 * //    [ { e: '1', v: 0, distance: 4 },
 * //      { e: '2', v: 8, distance: 2 },
 * //      { e: '3', v: 2, distance: 7 },
 * //      { e: '4', v: 3, distance: 9 },
 * //      { e: '5', v: 2, distance: 4 },
 * //      { e: '6', v: 5, distance: 2 },
 * //      { e: '7', v: 0, distance: 8 },
 * //      { e: '8', v: 7, distance: 7 } ],
 * //   nodesCount: 0 }
 * var spanningTree = graph.prim();
 *
 * @module graphs/spanning-trees/prim
 */
(function (exports) {

  'use strict';

  var Heap = require('../../data-structures/heap').Heap;
  exports.Vertex = require('../../data-structures/vertex').Vertex;
  exports.Edge = require('../../data-structures/edge').Edge;

  /**
   * Graph.
   *
   * @constructor
   * @public
   * @param {Array} edges Array with graph edges.
   * @param {Number} nodesCount Number of nodes in graph.
   */
  exports.Graph = function (edges, nodesCount) {
    this.edges = edges || [];
    this.nodesCount = nodesCount || 0;
  };

  /**
   * Executes Prim's algorithm and returns minimum spanning tree.
   *
   * @public
   * @method
   * @return {Graph} Graph which is the minimum spanning tree.
   */
  exports.Graph.prototype.prim = (function () {
    var queue;

    /**
     * Used for comparitions in the heap
     *
     * @private
     * @param {Vertex} a First operand of the comparition.
     * @param {Vertex} b Second operand of the comparition.
     * @return {number} Number which which is equal, greater or
     *  less then zero and indicates whether the first vertex is
     *  "greater" than the second.
     */
    function compareEdges(a, b) {
      return b.distance - a.distance;
    }

    /**
     * Initialize the algorithm.
     *
     * @private
     */
    function init() {
      queue = new Heap(compareEdges);
    }

    return function () {
      init.call(this);
      var inTheTree = {};
      var startVertex = this.edges[0].e.id;
      var spannigTree = [];
      var parents = {};
      var distances = {};
      var current;
      inTheTree[startVertex] = true;
      queue.add({
        node: startVertex,
        distance: 0
      });
      const process = function (e) {
        if (inTheTree[e.v.id] && inTheTree[e.e.id]) {
          return;
        }
        var collection = queue.getCollection();
        var node;
        if (e.e.id === current) {
          node = e.v.id;
        } else if (e.v.id === current) {
          node = e.e.id;
        } else {
          return;
        }
        for (var i = 0; i < collection.length; i += 1) {
          if (collection[i].node === node) {
            if (collection[i].distance > e.distance) {
              queue.changeKey(i, {
                node: node,
                distance: e.distance
              });
              parents[node] = current;
              distances[node] = e.distance;
            }
            return;
          }
        }
        queue.add({
          node: node,
          distance: e.distance
        });
        parents[node] = current;
        distances[node] = e.distance;
      };
      for (var i = 0; i < this.nodesCount - 1; i += 1) {
        current = queue.extract().node;
        inTheTree[current] = true;
        this.edges.forEach(process);
      }
      for (var node in parents) {
        spannigTree.push(
          new exports.Edge(node, parents[node], distances[node]));
      }
      return new exports.Graph(spannigTree);
    };

  }());

})(typeof window === 'undefined' ? module.exports : window);
