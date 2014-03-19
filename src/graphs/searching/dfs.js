'use strict';
/**
 * BUGGY DON'T USE
 */

/* * * * * * * * * * * * * * * * * *

        Sample graph

var graph = [[1,0,1,0,0,0],
             [0,1,0,1,0,0],
             [1,0,1,0,1,0],
             [0,1,0,1,1,0],
             [0,0,1,1,1,1],
             [0,0,0,0,1,1]];
* * * * * * * * * * * * * * * * * */

/**
 * Depth-first search algorithm for matrix representation of graph.
 * The algorithm finds whether there's a path between two given nodes.
 */
var depthFirstSearch = (function () {

  var visited = [],
      target,
      graph;

  /**
   * Returns whether the destination could be reached
   * from given node
   *
   * @private
   * @param {number} current Current node
   * @returns {boolean} True/false depending whether
   *      the destination can be reached from the current node
   */
  function dfs(current) {
    if (current === target) {
      return true;
    }
    visited[current] = true;
    for (var i = 0; i < graph.length; i += 1) {
      if (graph[current][i] === 1 &&
         !visited[i]) {
        return depthFirstSearch(i);
      }
    }
    return false;
  }

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
    for (var i = 0; i < graph.length; i += 1) {
      visited[i] = false;
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
   * @returns {boolean} true/false depending
   *                               whether there's a path between the nodes
   */
  return function (graph, source, destination) {
    init(graph, destination);
    return dfs(source);
  };

}());
