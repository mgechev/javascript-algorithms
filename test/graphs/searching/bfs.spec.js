'use strict';

var sampleGraph = [[1, 0, 1, 0, 0, 0],
                   [0, 1, 0, 1, 0, 0],
                   [1, 0, 1, 0, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 0, 1, 1, 1, 1],
                   [0, 0, 0, 0, 1, 1]];

var bfs = require('../../../src/graphs/searching/bfs').breadthFirstSearch;

describe('BFS', function () {

  var graph;

  it('should work with incorrect input', function () {
    expect(bfs(null, 1, 1)).toBe(false);
    expect(bfs(sampleGraph, [-1, -1], [0, 0])).toBe(false);
    expect(bfs(sampleGraph, [0, -1], [-1, 0])).toBe(false);
    expect(bfs(sampleGraph, [0, 0], [-1, 0])).toBe(false);
    expect(bfs(sampleGraph, [0, 1000], [-1, 0])).toBe(false);
    expect(bfs(sampleGraph, [100000, 1000], [-1, 0])).toBe(false);
    expect(bfs(sampleGraph, [0, 0], [100, 100])).toBe(false);
    expect(bfs(sampleGraph, [0, 0], [6, 6])).toBe(false);
  });

  it('should work with 1x1 matrix', function () {
    graph = [[1]];
    expect(bfs(graph, [0, 0], [0, 0])).toBeTruthy();
    graph = [[0]];
    expect(bfs(graph, [0, 0], [0, 0])).toBeFalsy();
  });

});