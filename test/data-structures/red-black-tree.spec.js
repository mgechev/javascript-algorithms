'use strict';

var mod = require('../../src/data-structures/red-black-tree.js'),
    Node = mod.Node,
    RBTree = mod.RBTree;

describe('Node', function () {
  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should set all properties via the constructor', function () {
    var node = new Node('key', 'value', true);
    expect(node.getKey()).toBe('key');
    expect(node.getValue()).toBe('value');
    expect(node.isRed()).toBeTruthy();
    node = new Node('key', 'value', undefined);
    //if we set isRed to falcy it should be turned to red
    expect(node.isRed()).toBe(false);
  });
});

describe('RBTree', function () {
  it('should be a constructor function', function () {
    expect(typeof RBTree).toBe('function');
  });
  it('should initialize root to null by default', function () {
    expect(new RBTree()._root).toBeNull();
  });
});
