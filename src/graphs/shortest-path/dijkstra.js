(function (exports) {
  'use strict';

  var dijkstra = (function () {

    var Heap = require('../../data-structures/heap.js').Heap;
    var current;
    var visited;
    var distance;
    var unvisited;

    /**
     * Creates a new node instance.
     *
     * @constructor
     * @private
     * @param {Number} id Id of the node.
     * @param {Number} distance Distance from the beginning.
     */
    function Node(id, distance) {
      this.node = id;
      this.distance = distance;
    }

    /**
     * Compares the distances between two nodes.
     *
     * @private
     * @param {Node} a 1st node.
     * @param {Node} b 2nd node.
     * @returns {number} diff between node distances.
     */
    function compareNodesDistance(a, b) {
      return b.distance - a.distance;
    }

    /**
     * Initialize all variables used for the algorithm.
     *
     * @private
     * @param {number} src Start node.
     * @param {Array} graph A distance matrix of the graph.
     */
    function init(src, graph) {
      var currentTemp;
      current = {};
      visited = [];
      distance = [];
      unvisited = new Heap(compareNodesDistance);
      for (var i = 0; i < graph.length; i += 1) {
        currentTemp = new Node();
        if (src === i) {
          currentTemp.distance = 0;
        } else {
          currentTemp.distance = Infinity;
        }
        currentTemp.node = i;
        visited[i] = false;
        distance[i] = currentTemp;
        unvisited.add(currentTemp);
      }
      current.node = src;
      current.distance = 0;
    }

    /**
     * Dijkstra's shortest path algorithm. Finds the minimum
     * distance between two given nodes using a distance matrix.<br><br>
     * For the implementation is not used the most suitable data structure
     * (Fibonacci heap) but the Binary heap gives also good results.<br><br>
     *
     * Time complexity: O(|E|+|V|log(|V|)) where V and E are the number of
     * vertices and edges respectively.
     *
     * @public
     * @module graphs/shortest-path/dijkstra
     * @param {Number} src Source node.
     * @param {Number} dest Destination node.
     * @param {Array} graph A distance matrix of the graph.
     * @returns {Number} The shortest distance between two nodes.
     *
     * @example
     * var dijkstra =
     * require('path-to-algorithms/src/graphs/shortest-path/dijkstra').dijkstra;
     * var distMatrix =
     *    [[Infinity, 7,        9,        Infinity, Infinity, 16],
     *     [7,        Infinity, 10,       15,       Infinity, Infinity],
     *     [9,        10,       Infinity, 11,       Infinity, 2],
     *     [Infinity, 15,       11,       Infinity, 6,        Infinity],
     *     [Infinity, Infinity, Infinity, 6,        Infinity, 9],
     *     [16,       Infinity, 2,        Infinity, 9,        Infinity]];
     * var shortestDist = dijkstra(0, 2, distMatrix); // 9
     */
    return function (src, dest, graph) {
      var  tempDistance = 0;
      init(src, graph);
      while (current.node !== dest && isFinite(current.distance)) {
        for (var i = 0; i < graph.length; i += 1) {
          if (current.node !== i && //if it's not the current node
            !visited[i] && //and if we haven't visited this node
            //and this node is sibling of the current...
            Number.isFinite(graph[i][current.node])) {

            tempDistance = current.distance + graph[i][current.node];
            if (tempDistance < distance[i].distance) {
              distance[i].distance = tempDistance;
              current.distance = tempDistance;
              unvisited.update(current);
            }
          }
        }
        visited[current.node] = true;
        current = unvisited.extract();
      }
      return distance[dest].distance;
    };

  })();

  exports.dijkstra = dijkstra;

})(typeof window === 'undefined' ? module.exports : window);
