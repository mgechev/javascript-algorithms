var dfs = require('../../../src/graphs/searching/dfs').dfs;

describe('dfs', function () {
  'use strict';

  it('should work with empty graph', function () {
    expect(dfs([[]])).toBeTruthy();
  });

  it('should always find a path between node and itself', function () {
    expect(dfs([[0]]), 0, 0).toBeTruthy();
  });

  it('should always find a path between two directly connected nodes', function () {
    expect(dfs([[0, 1], [1, 0]], 0, 1)).toBeTruthy();
    expect(dfs([[0, 1], [1, 0]], 1, 0)).toBeTruthy();
  });

  it('should always find a path between two directly connected' +
    'connected nodes in a directed graph', function () {
    expect(dfs([[0, 0], [1, 0]], 1, 0)).toBeTruthy();
  });

  it('should always find a path between two indirectly connected nodes', function () {
    expect(dfs([[0, 1, 0], [0, 0, 1], [0, 0, 0]], 0, 2)).toBeTruthy();
  });

  it('should not find a path between two nodes, which are not connected', function () {
    expect(dfs([[0, 0], [1, 0]], 0, 1)).toBeFalsy();
    expect(dfs([[0, 0, 0], [0, 0, 1], [0, 0, 0]], 0, 2)).toBeFalsy();
  });
});
