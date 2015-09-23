'use strict';

var mod = require('../../src/data-structures/size-balanced-tree.js');
var Node = mod.Node;
var Nil = mod.Nil;
var SBTree = mod.SBTree;
var updateChild = mod.updateChild;

describe('Node', function () {
  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should be a construct properly', function () {
    var node = new Node(10, Nil, Nil, Nil, 1);
    expect(node.value).toBe(10);
    expect(node.left).toBe(Nil);
    expect(node.right).toBe(Nil);
    expect(node.parent).toBe(Nil);
    expect(node.size).toBe(1);
  });
  it('should reference children/parent properly', function () {
    var root = new Node(10, Nil, Nil, Nil, 1);
    var left = new Node(5, root, Nil, Nil, 1);
    var right = new Node(15, root, Nil, Nil, 1);
    root.left = left;
    root.right = right;
    expect(root.value).toBe(10);
    expect(root.left).toBe(left);
    expect(root.right).toBe(right);
    expect(root.parent).toBe(Nil);
    expect(right.parent).toBe(root);
    expect(left.parent).toBe(root);
    expect(right.size).toBe(1);
    expect(left.size).toBe(1);
    expect(root.size).toBe(1);
    root.updateSize();
    expect(root.size).toBe(3);
  });
});

describe('SBTree', function () {
  it('should be a constructor function', function () {
    expect(typeof SBTree).toBe('function');
  });
  it('should start with null root', function () {
    expect(new SBTree()._root).toBe(Nil);
  });
  it('should insert and remove correctly', function () {
    var sTree = new SBTree();
    expect(sTree.size).toBe(0);
    sTree.insert(0, 10);
    expect(sTree.size).toBe(1);
    sTree.remove(0);
    expect(sTree.size).toBe(0);
    expect(sTree._root).toBe(Nil);
  });

  function checkNil() {
    expect(Nil.size).toBe(0);
    expect(Nil.left).toBe(Nil);
    expect(Nil.right).toBe(Nil);
    expect(Nil.parent).toBe(Nil);
    expect(Nil.value).toBe(null);
  }
  it('test updateChild', function() {
    var e = updateChild(Nil, Nil);
    checkNil();
    expect(e).toBe(Nil);
    var root = new Node(10, Nil, Nil, Nil, 1);
    var left = new Node(5, root, Nil, Nil, 1);
    var right = new Node(15, root, Nil, Nil, 1);
    var leftLeft = new Node(10, left, Nil, Nil, 1);
    left.left = leftLeft;
    left.updateSize();
    root.left = left;
    root.right = right;
    root.updateSize();
    expect(root.size).toBe(4);

    updateChild(left, leftLeft);
    expect(leftLeft.parent).toBe(root);
    expect(root.left).toBe(leftLeft);
    updateChild(leftLeft, Nil);
    checkNil();
    expect(root.left).toBe(Nil);
    expect(root.size).toBe(2);
    updateChild(Nil, right);
    expect(right.parent).toBe(Nil);
    checkNil();
  });

  it('push and get 100000 elements, remove the array by always remove the first/last element', function () {
    var sTree = new SBTree();
    for (var i = 0; i < 2000000; ++i) {
      sTree.push(i);
    }
    checkNil();
    let maxHeight = 0;
    for (var i = 0; i < 2000000; ++i) {
      var node = sTree.get(i);
      maxHeight = Math.max(maxHeight, node.height);
      expect(node.value).toBe(i);
    }
    expect(maxHeight).toBe(21);
    for (var i = 0; i < 2000000; ++i) {
      expect(sTree.get(0).value).toBe(i);
      var node = sTree.remove(0); // Always remove the first element;
      expect(node.value).toBe(i);
    }
    checkNil();
    expect(sTree._root).toBe(Nil);
    var count = 10000;
    for (var i = 0; i < count; ++i) {
      sTree.insert(0, i);
    }
    for (var i = 0; i < count; ++i) {
      var node = sTree.remove(count - i - 1); // Always remove the last element;
      expect(node.value).toBe(i);
      expect(sTree.size).toBe(count - i - 1);
    }
    checkNil();
  });
});
