'use strict';

var mod = require('../../src/data-structures/red-black-tree.js'),
    Node = mod.Node,
    RBTree = mod.RBTree,
    Colors = mod.Colors;

describe('Node', function () {

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });

  it('should set all properties via the constructor', function () {
    var node = new Node('key', 'value', 1, 2, Colors.RED);
    expect(node.getKey()).toBe('key');
    expect(node.getLeft()).toBe(1);
    expect(node.getRight()).toBe(2);
    expect(node.getValue()).toBe('value');
    expect(node.isRed()).toBeTruthy();
  });

  describe('Node flipColor', function () {
    it('should has method flipColor', function () {
      var node = new Node();
      expect(typeof node.flipColor).toBe('function');
    });
    it('should work properly', function () {
      var node = new Node();
      expect(node.isRed()).toBe(false);
      node.flipColor();
      expect(node.isRed()).toBe(true);
      node.flipColor();
      expect(node.isRed()).toBe(false);
    });
  });
});

describe('RBTree', function () {
  it('should be a constructor function', function () {
    expect(typeof RBTree).toBe('function');
  });
  it('should initialize root to null by default', function () {
    expect(new RBTree()._root).toBeNull();
  });

  describe('node insertion', function () {
    it('should be able to insert a node in empty tree', function () {
      var tree = new RBTree();
      tree.put('foo', 'bar');
      expect(tree._root.getKey()).toBe('foo');
      expect(tree._root.getValue()).toBe('bar');
    });

    it('should be able to insert a node in 1 level tree', function () {
      var tree = new RBTree();
      tree.put(1, 'bar');
      tree.put(0, 'baz');
      expect(tree._root._left).not.toBeNull();
      expect(tree._root._left.isRed()).toBeTruthy();
      tree.put(2, 'baz');
      expect(tree._root._right).not.toBeNull();
      expect(tree._root._right._isRed).toBeFalsy();

      tree = new RBTree();
      tree.put(1, 'bar');
      tree.put(2, 'foo');
      tree.put(3, 'baz');
      expect(tree._root._right).not.toBeNull();
      expect(tree._root._left).not.toBeNull();
      expect(tree._root._isRed).toBeFalsy();
      expect(tree._root._right._isRed).toBeFalsy();
      expect(tree._root._left._isRed).toBeFalsy();
    });

  });

  describe('get method', function () {
    var tree = new RBTree();
    expect(tree.get(1)).toBeUndefined();
  });

});
