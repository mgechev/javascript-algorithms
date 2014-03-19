'use strict';

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
    if (visited[current] ||
        current[0] < 0 || current[1] < 0 ||
        current[0] >= graph.length || current[1] >= graph[0].length ||
        !graph[current[0]][current[1]]) {
      return;
    }
    if (current[0] === target[0] &&
        current[1] === target[1]) {
      return true;
    }
    visited[current] = true;
    dfs([current[0] + 1, current[1]]);
    dfs([current[0] - 1, current[1]]);
    dfs([current[0], current[1] + 1]);
    dfs([current[0], current[1] - 1]);
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
    visited = {};
  }

  /**
   * Validates the params
   *
   * @param {array} graph A matrix representation of the graph
   * @param {array} source The source node
   * @param {array} destination The destination node
   */
  function validateParams(graph, source, destination) {
    if (!graph) {
      throw new Error('The graph should be represented as a matrix');
    }
    if (graph[0] === undefined) {
      throw new Error('The graph should be represented as ' +
              'a matrix, with size at least 1x1');
    }
    var width = graph[0].length;
    for (var i = 1; i < graph.length; i += 1) {
      if (graph[i].length !== width) {
        throw new Error('The graph should be represented as a matrix');
      }
    }
    source.concat(destination).filter(function (c, i) {
      if (c < 0) {
        throw new Error('The source and destination coordinates ' +
          'should be above zero');
      }
      if (i % 2 === 0) {
        if (c >= graph.length) {
          throw new Error('The source and destination coordinates ' +
                      'should not be above graph\'s size');
        }
      } else {
        if (c >= graph[0].length) {
          throw new Error('The source and destination coordinates ' +
                      'should not be above graph\'s size');
        }
      }
    });
    return true;
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
    validateParams(graph, source, destination);
    init(graph, destination);
    return dfs(source);
  };

}());
