'use strict';

var mod = require('../../src/data-structures/red-black-tree.js'),
    Node = mod.Node,
    RBTree = mod.RBTree;

describe('Node', function () {
  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should set all properties via the constructor', function () {
    var node = new Node('key', 'value', 1, 2, true);
    expect(node.getKey()).toBe('key');
    expect(node.getLeft()).toBe(1);
    expect(node.getRight()).toBe(2);
    expect(node.getValue()).toBe('value');
    expect(node.isRed()).toBeTruthy();
    node = new Node('key', 'value', null, null, undefined);
    //if we set isRed to falcy it should be turned to red
    expect(node.isRed()).toBe(false);
  });
  it('should has method flipColor', function () {
    var node = new Node();
    expect(typeof node.flipColor).toBe('function');
  });
});

describe('RBTree', function () {
  it('should be a constructor function', function () {
    expect(typeof RBTree).toBe('function');
  });
  it('should initialize root to null by default', function () {
    expect(new RBTree()._root).toBeNull();
  });

  describe('RBTree node insertion', function () {
    it('should be able to insert a node in empty tree', function () {
      var tree = new RBTree();
      tree.put('foo', 'bar');
      expect(tree._root.getKey()).toBe('foo');
      expect(tree._root.getValue()).toBe('bar');
    });
  });
});
