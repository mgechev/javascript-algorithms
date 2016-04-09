var dijkstra =
  require('../../../src/graphs/shortest-path/dijkstra').dijkstra;

describe('dijkstra', function () {
  'use strict';
  it('should define a function', function () {
    expect(dijkstra).toBeDefined();
    expect(typeof dijkstra).toBe('function');
  });

  it('should work with empty graph', function () {
    expect(dijkstra(0, 0, [])).toBe(Infinity);
  });

  it('should work when the src and dest are the same', function () {
    expect(dijkstra(0, 0, [[0]])).toBe(0);
  });

  it('should work when there\'s no path', function () {
    expect(dijkstra(0, 1, [[0, Infinity], [Infinity, 0]])).toBe(Infinity);
  });

  it('should find the shortest path', function () {
    expect(dijkstra(0, 2, [[0, 1, 4], [1, 0, 1], [4, 1, 0]])).toBe(2);
  });
});
