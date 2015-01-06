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
     * Returns the shortest path between
     * startNode and targetNode.
     * Time complexity O(|V|*|V|), because we use adjust matrix.
     *
     * @param {array} graph The adjust matrix, which represents the graph
     * @param {number} startNode The start node
     * @param {number} targetNode The target, which should be reached
     * @returns {array} The shortest path from startNode to targetNode
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
