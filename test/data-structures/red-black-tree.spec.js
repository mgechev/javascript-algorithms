'use strict';

var mod = require('../../src/data-structures/red-black-tree.js'),
    Node = mod.Node;

describe('Node', function () {
  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
});
