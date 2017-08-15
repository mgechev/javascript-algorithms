var kruskal = require('../../../src/graphs/spanning-trees/kruskal');

describe('Kruskal', function() {
  'use strict';

  it('should define a function', function () {
    expect(kruskal).toBeDefined();
    expect(typeof kruskal).toBe('object');
    expect(typeof kruskal.Graph).toBe('function');
    expect(typeof kruskal.Edge).toBe('function');
    expect(typeof kruskal.Vertex).toBe('function');
  });

  it('should work with an empty graph', function() {
    var graph = new kruskal.Graph([], 0);
    var spanningTree = graph.kruskal();

    expect(spanningTree.edges.length).toEqual(0);
  });

  it('should correctly compute general example', function() {
    var nodes = [];
    var edges = [];
    var i;
    for (i = 0; i < 7; i += 1) {
      nodes[i] = new kruskal.Vertex(i);
    }

    edges.push(new kruskal.Edge(nodes[0], nodes[1], 7));
    edges.push(new kruskal.Edge(nodes[1], nodes[2], 8));
    edges.push(new kruskal.Edge(nodes[2], nodes[4], 5));
    edges.push(new kruskal.Edge(nodes[4], nodes[6], 9));
    edges.push(new kruskal.Edge(nodes[5], nodes[6], 11));
    edges.push(new kruskal.Edge(nodes[3], nodes[5], 6));
    edges.push(new kruskal.Edge(nodes[0], nodes[3], 5));
    edges.push(new kruskal.Edge(nodes[1], nodes[4], 7));
    edges.push(new kruskal.Edge(nodes[1], nodes[3], 9));
    edges.push(new kruskal.Edge(nodes[3], nodes[4], 15));
    edges.push(new kruskal.Edge(nodes[4], nodes[5], 8));

    var graph = new kruskal.Graph(edges);
    var spanningTree = graph.kruskal();

    expect(spanningTree.edges.length).toEqual(6);

    var sum = spanningTree.edges.reduce(function(acc, edge) {
      return acc += edge.distance;
    }, 0);

    expect(sum).toEqual(39);

  })
});
