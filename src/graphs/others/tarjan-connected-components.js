(function (exports) {
  'use strict';

  /**
   * Tarjan's algorithm for finding the connected components in a graph.<br><br>
   * Time complexity: O(|E| + |V|) where E is a number of edges and |V|
   * is the number of nodes.
   *
   * @public
   * @module graphs/others/tarjan-connected-components
   * @param {Array} graph Adjacency list, which represents the graph.
   * @returns {Array} Connected components.
   *
   * @example
   * var tarjanConnectedComponents =
   *  require('path-to-algorithms/src/graphs/' +
   * 'others/tarjan-connected-components').tarjanConnectedComponents;
   * var graph = {
   *     v1: ['v2', 'v5'],
   *     v2: [],
   *     v3: ['v1', 'v2', 'v4', 'v5'],
   *     v4: [],
   *     v5: []
   * };
   * var vertices = topsort(graph); // ['v3', 'v4', 'v1', 'v5', 'v2']
   */
  function tarjanConnectedComponents(graph) {
    graph = graph || {};
    const indexes = {};
    const lowIndexes = {};
    const onStack = {};
    const result = [];
    const stack = [];
    var index = 1;

    const connectedComponent = function (node) {
      stack.push(node);
      onStack[node] = true;
      indexes[node] = index;
      lowIndexes[node] = index;
      index += 1;
      graph[node].forEach(function (n) {
        if (indexes[n] === undefined) {
          connectedComponent(n);
          lowIndexes[node] = Math.min(lowIndexes[n], lowIndexes[node]);
        } else if (onStack[n]) {
          lowIndexes[node] = Math.min(lowIndexes[node], indexes[n]);
        }
      });
      // This is a "root" node
      const cc = [];
      if (indexes[node] === lowIndexes[node]) {
        var current;
        do {
          current = stack.pop();
          onStack[current] = false;
          cc.push(current);
        } while (stack.length > 0 && node !== current);
        result.push(cc);
      }
    };

    Object.keys(graph)
      .forEach(function (n) {
        if (!indexes[n]) {
          connectedComponent(n);
        }
      });

    return result;
  }

  exports.tarjanConnectedComponents = tarjanConnectedComponents;

}(typeof exports === 'undefined' ? window : exports));
