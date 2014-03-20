'use strict';

var sampleGraph = [[1, 1, 1, 0, 0, 0],
                   [0, 1, 1, 1, 0, 0],
                   [1, 0, 1, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 0, 1, 1, 1, 1],
                   [0, 0, 0, 0, 1, 1]];

var dfs = require('../../../src/graphs/searching/dfs').depthFirstSearch;

describe('dfs', function () {

  it('should work with incorrect input', function () {
    expect(function () {
      dfs(null, [1, 1], [1, 1]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [-1, -1], [0, 0]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [0, -1], [-1, 0]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [0, 0], [-1, 0]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [0, 1000], [-1, 0]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [100000, 1000], [-1, 0]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [0, 0], [100, 100]);
    }).toThrow();
    expect(function () {
      dfs(sampleGraph, [0, 0], [5, 5]);
    }).not.toThrow();
  });

  it('should work with 1x1 matrix', function () {
    var graph = [[1]];
    expect(dfs(graph, [0, 0], [0, 0])).toBeTruthy();
    graph = [[0]];
    expect(dfs(graph, [0, 0], [0, 0])).toBeFalsy();
  });

  it('should work in the general case', function () {
    expect(dfs(sampleGraph, [0, 0], [1, 1])).toBeTruthy();
    expect(dfs(sampleGraph, [0, 0], [6, 5])).toBeTruthy();
    expect(dfs(sampleGraph, [0, 0], [0, 5])).toBeFalsy();
    expect(dfs(sampleGraph, [1, 1], [6, 5])).toBeTruthy();
    expect(dfs(sampleGraph, [1, 1], [0, 5])).toBeFalsy();
  });

});