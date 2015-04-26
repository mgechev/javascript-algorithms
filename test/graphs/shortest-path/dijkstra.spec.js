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

});
