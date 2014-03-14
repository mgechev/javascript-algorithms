/* * * * * * * * * * * * * * * * * *

        Sample graph

var graph = [[1,0,1,0,0,0],
             [0,1,0,1,0,0],
             [1,0,1,0,1,0],
             [0,1,0,1,1,0],
             [0,0,1,1,1,1],
             [0,0,0,0,1,1]];
* * * * * * * * * * * * * * * * * */

(function (exports) {

  'use strict';

  /**
   * Breadth-first search algorithm for matrix representation of graph.
   * The algorithm finds whether there's a path between two given nodes.
   */
  var breadthFirstSearch = (function () {

    var visited = [],
        queue = [],
        target,
        graph;

    /**
     * Initializes the algorithm
     *
     * @private
     * @param {array} inputGraph The input matrix of the graph
     * @param {number} destination The destination
     */
    function init(inputGraph, destination) {
      graph = inputGraph;
      target = destination;
      visited = [];
      queue = [];
      for (var i = 0; i < graph.length; i += 1) {
        visited[i] = false;
      }
    }

    /**
     * Process given node
     *
     * @param  {number} destination The destionation, which should be reached
     * @param  {number} current     The current node
     * @param  {number} node        Neighbour node
     */
    function processNode(destination, current, node) {
      if (graph[current][node]) {
        if (node === destination) {
          return true;
        }
        if (!visited[node]) {
          queue.push(node);
        }
      }
    }

    /**
     * Finds whether there's a path between a given start node
     * to given destination
     *
     * @public
     * @param {array} graph A matrix representation of the graph
     * @param {number} source The source node
     * @param {number} destination The destination node
     * @returns {boolean} true/false depending whether there's
     *                               a path between the nodes
     */
    return function (graph, source, destination) {
      init(graph, destination);
      var current;
      queue.push(source);
      while (queue.length > 0) {
        current = queue.shift();
        visited[current] = true;
        for (var i = 0; i < graph.length; i += 1) {
          var result = processNode(destination, current, i);
          if (result) {
            return true;
          }
        }
      }
      return false;
    };
  }());

  exports.breadthFirstSearch = breadthFirstSearch;

}(typeof exports === 'undefined' ? window : exports));
