let exported =
  require('../../../src/graphs/shortest-path/bellman-ford');
let bellmanFord = exported.bellmanFord;
let Vertex = exported.Vertex;
let Edge = exported.Edge;

describe('Bellman-Ford', function () {
  'use strict';
  it('should exports a method called bellmanFord', function () {
    expect(typeof bellmanFord).toBe('function');
  });

  it('should work for an empty graph', function () {
    let vs = [];
    let e = [];
    expect(bellmanFord(vs, e, undefined))
      .toEqual({ parents: {}, distances: {} });
  });

  it('should work for a graph with a single vertex', function () {
    let vs = [new Vertex(1)];
    let e = [];
    expect(bellmanFord(vs, e, vs[0]))
      .toEqual({ parents: { 1: null }, distances: { 1: 0 }});
  });

  it('should work in the general case', function () {
    let vs = [new Vertex(1), new Vertex(2), new Vertex(3)];
    let e = [new Edge(vs[0], vs[1], 2),
      new Edge(vs[0], vs[2], 10),
      new Edge(vs[1], vs[2], 1)
    ];
    let output = bellmanFord(vs, e, vs[0]);
    expect(output.distances['3']).toBe(3);
  });
});
