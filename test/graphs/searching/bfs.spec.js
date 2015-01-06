'use strict';

var sampleGraph = [[1, 1, 1, 0, 0, 0],
                   [0, 1, 1, 1, 0, 0],
                   [1, 0, 1, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 1, 0, 1, 1, 0],
                   [0, 0, 1, 1, 1, 1],
                   [0, 0, 0, 0, 1, 1]];

var bfs = require('../../../src/graphs/searching/bfs').bfs;

describe('BFS', function () {

  it('should work with empty graph', function () {
    expect(bfs([], 0, 0)).toEqual([0]);
  });

  it('should return the correct output when used with\
  source node equals target node', function () {

  });

});