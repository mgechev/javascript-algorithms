var tj = require('../../../src/graphs/others/tarjan-connected-components').tarjanConnectedComponents;

var nonConnected = {
  v1: [],
  v2: [],
  v3: [],
  v4: [],
  v5: []
};

var cyclicGraph = {
  v1: ['v2'],
  v2: ['v3'],
  v3: ['v4'],
  v4: ['v5'],
  v5: ['v1']
};

describe('Tarjan\'s algorithm for finding connected components', function () {
  'use strict';
  it('should be defined', function () {
    expect(typeof tj).toBe('function');
  });

  it('should return an array', function () {
    expect(tj() instanceof Array).toBeTruthy();
  });

  it('should work with non-connected graphs', function () {
    expect(tj(nonConnected)).toEqual([['v1'], ['v2'], ['v3'], ['v4'], ['v5']]);
  });

  it('should workw ith cycles', function () {
    expect(tj(cyclicGraph)).toEqual([['v5', 'v4', 'v3', 'v2', 'v1']]);
  });
});
