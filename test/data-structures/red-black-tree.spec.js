'use strict';

var mod = require('../../src/data-structures/red-black-tree.js'),
    Node = mod.Node;

describe('Node', function () {
  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should set all properties via the constructor', function () {
    var node = new Node('key', 'value', true);
    expect(node.getKey()).toBe('key');
    expect(node.getValue()).toBe('value');
    expect(node.isRed()).toBeTruthy();
  });
});
