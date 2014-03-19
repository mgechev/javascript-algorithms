'use strict';

var sampleGraph = [[1, 1, 1, 0, 0, 0],
                   [0, 1, 1, 1, 0, 0],
                   [1, 0, 1, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 0, 1, 1, 1, 1],
                   [0, 0, 0, 0, 1, 1]];

var bfs = require('../../../src/graphs/searching/bfs').breadthFirstSearch;

describe('BFS', function () {

  it('should work with incorrect input', function () {
    expect(function () {
      bfs(null, [1, 1], [1, 1]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [-1, -1], [0, 0]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [0, -1], [-1, 0]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [0, 0], [-1, 0]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [0, 1000], [-1, 0]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [100000, 1000], [-1, 0]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [0, 0], [100, 100]);
    }).toThrow();
    expect(function () {
      bfs(sampleGraph, [0, 0], [5, 5]);
    }).not.toThrow();
  });

  it('should work with 1x1 matrix', function () {
    var graph = [[1]];
    expect(bfs(graph, [0, 0], [0, 0])).toBeTruthy();
    graph = [[0]];
    expect(bfs(graph, [0, 0], [0, 0])).toBeFalsy();
  });

  it('should work in the general case', function () {
    expect(bfs(sampleGraph, [0, 0], [1, 1])).toBeTruthy();
    expect(bfs(sampleGraph, [0, 0], [6, 5])).toBeTruthy();
    expect(bfs(sampleGraph, [0, 0], [0, 5])).toBeFalsy();
    expect(bfs(sampleGraph, [1, 1], [6, 5])).toBeTruthy();
    expect(bfs(sampleGraph, [1, 1], [0, 5])).toBeFalsy();
  });

});