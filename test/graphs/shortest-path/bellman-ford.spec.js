var exported =
  require('../../../src/graphs/shortest-path/bellman-ford');
var bellmanFord = exported.bellmanFord;
var Vertex = exported.Vertex;
var Edge = exported.Edge;

describe('Bellman-Ford', function () {
  'use strict';
  it('should exports a method called bellmanFord', function () {
    expect(typeof bellmanFord).toBe('function');
  });

  it('should work for an empty graph', function () {
    var vs = [];
    var e = [];
    expect(bellmanFord(vs, e, undefined))
      .toEqual({ parents: {}, distances: {} });
  });

  it('should work for a graph with a single vertex', function () {
    var vs = [new Vertex(1)];
    var e = [];
    expect(bellmanFord(vs, e, vs[0]))
      .toEqual({ parents: { 1: null }, distances: { 1: 0 }});
  });

  it('should work in the general case', function () {
    var vs = [new Vertex(1), new Vertex(2), new Vertex(3)];
    var e = [new Edge(vs[0], vs[1], 2),
      new Edge(vs[0], vs[2], 10),
      new Edge(vs[1], vs[2], 1)
    ];
    var output = bellmanFord(vs, e, vs[0]);
    expect(output.distances['3']).toBe(3);
  });
});
