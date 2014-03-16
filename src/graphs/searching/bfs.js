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
      queue = [];
      visited = {};
    }

    function addNode(node) {
      if (visited[node] ||
          node[0] < 0 || node[1] < 0 ||
          node[0] > graph.length || node[1] > graph[0].length ||
          !graph[node[0]] || !graph[node[0]]) {
        return;
      }
      queue.push(node);
    }

    /**
     * Process given node
     *
     * @param  {number} destination The destionation, which should be reached
     * @param  {number} current     The current node
     * @param  {number} node        Neighbour node
     */
    function processNode(destination, current) {
      if (destination.toString() === current.toString()) {
        return true;
      } else {
        addNode([current[0], current[1] + 1]);
        addNode([current[0], current[1] - 1]);
        addNode([current[0] + 1, current[1]]);
        addNode([current[0] - 1, current[1]]);
        return false;
      }
    }

    /**
     * Validates the graph
     *
     * @param {array} graph A matrix representation of the graph
     * @param {number} source The source node
     * @param {number} destination The destination node
     * @returns {boolean} true/false depending whether the params are valid
     */
    function validateParams(graph, source, destination) {
      if (!graph) {
        throw 'The graph should be represented as a matrix';
      }
      if (!graph[0]) {
        throw 'The graph should be represented as ' +
        'a matrix, with size at least 1x1';
      }
      var width = graph[0].length;
      for (var i = 0; i < graph.length; i += 1) {
        if (graph[i] !== width) {
          throw 'The graph should be represented as a matrix';
        }
      }
      source.concat(destination).filter(function (c, i) {
        if (c < 0) {
          throw 'The source and destination coordinates should be above zero';
        }
        if (i % 2 === 0) {
          if (c >= graph.length) {
            throw 'The source and destination coordinates ' +
            'should not be above graph\'s size';
          }
        } else {
          if (c >= graph[0].length) {
            throw 'The source and destination coordinates ' +
            'should not be above graph\'s size';
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
     * @param {array} source The source node
     * @param {array} destination The destination node
     * @returns {boolean} true/false depending whether there's
     *                               a path between the nodes
     */
    return function (graph, source, destination) {
      validateParams(graph, source, destination);
      init(graph, destination);
      var current;
      queue.push(source);
      while (queue.length > 0) {
        current = queue.shift();
        visited[current] = true;
        if (graph[current[0]][current[1]]) {
          var result = processNode(destination, current);
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
