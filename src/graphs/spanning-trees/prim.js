var Heap = require('../../data-structures/heap').Heap;

/**
 * Graph vertex
 *
 * @constructor
 * @public
 * @param {number} id The id of the vertex
 */
function Vertex(id) {
  'use strict';
  this.id = id;
}

/**
 * Graph edge
 *
 * @constructor
 * @public
 * @param {Vertex} e Vertex which this edge connects
 * @param {Vertex} v Vertex which this edge connects
 * @param {number} distance Weight of the node
 */
function Edge(e, v, distance) {
  'use strict';
  this.e = e;
  this.v = v;
  this.distance = distance;
}

/**
 * Graph
 *
 * @constructor
 * @public
 */
function Graph(edges) {
  'use strict';
  this.edges = edges || [];
}

/**
 * Prim's algorithm for minimum spanning tree
 *
 * @public
 * @return {Graph} Graph which is the minimum spanning tree
 */
Graph.prototype.prim = (function () {
  'use strict';

  var queue;

  /**
   * Initialize the algorithm.
   *
   * @private
   */
  function init() {
    queue = new Heap(compareEdges);
    this.edges.forEach(function (e) {
      queue.add(e);
    });
  }

  /**
   * Used for comparitions in the heap
   *
   * @private
   * @param {Vertex} a First operand of the comparition
   * @param {Vertex} b Second operand of the comparition
   * @return {number} Number which which is equal, greater or less then zero and
   *  indicates whether the first vertex is "greater" than the second.
   */
  function compareEdges(a, b) {
    return b.distance - a.distance;
  }

  /**
   * Prim's algorithm implementation
   *
   * @public
   * @return {Graph} Minimum spanning tree.
   */
  return function () {
    init.call(this);
    var inTheTree = {},
        current = queue.extract(),
        spannigTree = [];
    spannigTree.push(current);
    inTheTree[current.e.id] = true;
    while (queue.isEmpty()) {
      current = queue.extract();
      if (!inTheTree[current.v.id] ||
        !inTheTree[current.e.id]) {
        spannigTree.push(current);
        inTheTree[current.e.id] = true;
        inTheTree[current.v.id] = true;
      }
    }
    return new Graph(spannigTree);
  };

}());

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * *  Sample graph * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 
var graph;

(function () {
    var edges = [];
   
    edges.push(new Edge(
        new Vertex(0),
        new Vertex(1),
        7
    )); 

    edges.push(new Edge(
        new Vertex(0),
        new Vertex(2),
        9
    )); 

    edges.push(new Edge(
        new Vertex(0),
        new Vertex(5),
        16 
    )); 

    edges.push(new Edge(
        new Vertex(1),
        new Vertex(2),
        10
    )); 

    edges.push(new Edge(
        new Vertex(1),
        new Vertex(3),
        15
    )); 

    edges.push(new Edge(
        new Vertex(2),
        new Vertex(3),
        11
    )); 

    edges.push(new Edge(
        new Vertex(2),
        new Vertex(5),
        2
    )); 

    edges.push(new Edge(
        new Vertex(3),
        new Vertex(4),
        6
    )); 

    edges.push(new Edge(
        new Vertex(4),
        new Vertex(5),
        9
    )); 

    graph = new Graph(edges);

}());

console.log(graph.prim());

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
