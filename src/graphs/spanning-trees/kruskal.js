// Kruskal's algorithm for minimal spanning tree implemented with the UnionFind datastructure.

(function(exports) {
  'use strict';

  let QuickUnion = require('../../sets/quickunion').QuickUnion;
  let mergeSort = require('../../sorting/mergesort').mergeSort;
  exports.Vertex = require('../../data-structures/vertex').Vertex;
  exports.Edge = require('../../data-structures/edge').Edge;

  exports.Graph = function (edges) {
    this.edges = edges || [];
  }

  exports.Graph.prototype.kruskal = (function () {
    let qunion;
    let spanningTree;
    let indexes;

    /**
     * Used for sorting the edges
     *
     * @private
     * @param {Vertex} a First operand of the comparison.
     * @param {Vertex} b Second operand of the comparison.
     * @return {number} Number which which is equal, greater or
     *  less then zero and indicates whether the first vertex is
     *  "smaller" than the second.
     */
    function compareEdges(a, b) {
      return a.distance - b.distance;
    }

    /**
     * Initialize the algorithm.
     *
     * @private
     */
    function init() {
      let edge;
      let i = 0;

      mergeSort(this.edges, compareEdges);
      spanningTree = [];
      indexes = {};

      // Create links from vertices to QuickUnion elements
      for (edge of this.edges) {
        if (!(edge.from.id in indexes)) {
          indexes[edge.from.id] = i;
          i += 1;
        }
        if (!(edge.to.id in indexes)) {
          indexes[edge.to.id] = i;
          i += 1;
        }
      }

      qunion = new QuickUnion(i);
    }

    return function () {
      init.call(this);

      let edge;

      for (edge of this.edges) {
        let from = indexes[edge.from.id];
        let to = indexes[edge.to.id];
        if (!qunion.connected(from, to)) {
          qunion.union(from, to);
          spanningTree.push(edge);
        }
      }

      return new exports.Graph(spanningTree);
    }

  })();

})(typeof window === 'undefined' ? module.exports : window);
