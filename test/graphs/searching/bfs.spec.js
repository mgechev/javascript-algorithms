/* jshint multistr: true */

var graph = [[0, 0, 0, 0, 1],
             [0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0],
             [1, 0, 1, 0, 0],
             [0, 1, 0, 1, 0]];

var bfs = require('../../../src/graphs/searching/bfs').bfs;

describe('BFS', function () {
  'use strict';

  it('should work with empty graph', function () {
    expect(bfs([], 0, 0)).toEqual([0]);
  });

  it('should return the correct output when used with\
  source node equals target node', function () {
    expect(bfs(graph, 2, 2)).toEqual([2]);
  });

  it('should return work with cycles', function () {
    expect(bfs(graph, 0, 2)).toEqual([0, 4, 3, 2]);
  });

  it('should return falsy value when there\'s no path', function () {
    var graph = [[0, 0, 0, 0, 1],
                 [0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0],
                 [0, 1, 0, 1, 0]];
    expect(bfs(graph, 0, 2)).toBeFalsy();
  });

  /**
   * In this case the graph should not
   * update the parent of 2, in case it was called
   * with source 0 and target 2, after the first iteration.
   *
   *  0 ---> 1
   *   \     |
   *    \    v
   *      -> 2
   */
  it('should not update the parent node once set', function () {
    var graph = [[0, 1, 1],
                 [0, 0, 1],
                 [0, 0, 0]];
    expect(bfs(graph, 0, 2)).toEqual([0, 2]);
  });

});
