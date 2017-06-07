var mod = require('../../src/data-structures/splay-tree.js');
var Node = mod.Node;
var SplayTree = mod.SplayTree;

describe('Node', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should be a construct properly', function () {
    var node = new Node(10, null, null, null);
    expect(node.value).toBe(10);
    expect(node._left).toBe(null);
    expect(node._right).toBe(null);
    expect(node._parent).toBe(null);
  });
  it('should reference children/parent properly', function () {
    var root = new Node(10, null, null, null);
    var left = new Node(5, null, null, root);
    var right = new Node(15, null, null, root);
    root._left = left;
    root._right = right;
    expect(root.value).toBe(10);
    expect(root._left).toBe(left);
    expect(root._right).toBe(right);
    expect(root._parent).toBe(null);
  });
});

describe('SplayTree', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof SplayTree).toBe('function');
  });
  it('should start with null root', function () {
    expect(new SplayTree()._root).toBe(null);
  });
  it('should insert and remove correctly', function () {
    var sTree = new SplayTree();
    sTree.insert(10);
    sTree.remove(10);
    expect(sTree._root).toBe(null);
  });
  it('should splay correctly upon inserts', function () {
    var sTree = new SplayTree();
    sTree.insert(10);
    sTree.insert(5);
    sTree.insert(15);
    sTree.insert(7);
    sTree.insert(12);
    expect(sTree._root.value).toBe(12);
    expect(sTree._root._left.value).toBe(7);
    expect(sTree._root._right.value).toBe(15);
  });
  it('should splay correctly upon search', function () {
    var sTree = new SplayTree();
    sTree.insert(10);
    sTree.insert(5);
    sTree.insert(15);
    sTree.insert(7);
    sTree.insert(12);
    sTree.search(5);
    expect(sTree._root.value).toBe(5);
    expect(sTree._root._right.value).toBe(7);
    expect(sTree._root._right._right.value).toBe(12);
  });
  it('should splay correctly upon remove', function () {
    var sTree = new SplayTree();
    sTree.insert(10);
    sTree.insert(5);
    sTree.insert(15);
    sTree.insert(7);
    sTree.insert(12);
    sTree.remove(10);
    expect(sTree._root.value).toBe(7);
    expect(sTree._root._left.value).toBe(5);
    expect(sTree._root._right.value).toBe(12);
    expect(sTree._root._right._right.value).toBe(15);
  });
});
