(function (exports) {
  'use strict';

  var bfs = (function () {

    function buildPath(parents, targetNode) {
      var result = [targetNode];
      while (parents[targetNode] !== null) {
        targetNode = parents[targetNode];
        result.push(targetNode);
      }
      return result.reverse();
    }

    /**
     * Breath-First graph searching algorithm.
     * Returns the shortest path between startNode and targetNode.<br><br>
     * Time complexity: O(|V|^2).
     * @public
     * @module graphs/searching/bfs
     * @param {Array} graph Adjacency matrix, which represents the graph.
     * @param {Number} startNode Start node.
     * @param {Number} targetNode Target, which should be reached.
     * @returns {Array} Shortest path from startNode to targetNode.
     */
    return function (graph, startNode, targetNode) {
      var parents = [],
          queue = [],
          visited = [],
          current;
      queue.push(startNode);
      parents[startNode] = null;
      visited[startNode] = true;
      while (queue.length) {
        current = queue.shift();
        if (current === targetNode) {
          return buildPath(parents, targetNode);
        }
        for (var i = 0; i < graph.length; i += 1) {
          if (i !== current && graph[current][i] && !visited[i]) {
            parents[i] = current;
            visited[i] = true;
            queue.push(i);
          }
        }
      }
      return null;
    };
  }());

  exports.bfs = bfs;

}((typeof window === 'undefined') ? module.exports : window));