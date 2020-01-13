var mod = require('../../src/data-structures/avl-tree.js');
var Node = mod.Node;
var AVLTree = mod.AVLTree;

describe('Node', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
});

describe('AVL Tree', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof AVLTree).toBe('function');
  });
  it('should start with null root', function () {
    expect(new AVLTree()._root).toBe(null);
  });
  it('should insert and single rotate (leftRight) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(66);
    avlTree.insert(3);
    avlTree.insert(5);
    expect(avlTree._root.value).toBe(5);
    expect(avlTree._root._left.value).toBe(3);
    expect(avlTree._root._right.value).toBe(66);

    expect(avlTree._root._height).toBe(2);
    expect(avlTree._root._left._height).toBe(1);
    expect(avlTree._root._right._height).toBe(1);
  });
  it('should insert and single rotate (rightLeft) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(60);
    expect(avlTree._root.value).toBe(60);
    expect(avlTree._root._left.value).toBe(50);
    expect(avlTree._root._right.value).toBe(75);

    expect(avlTree._root._height).toBe(2);
    expect(avlTree._root._left._height).toBe(1);
    expect(avlTree._root._right._height).toBe(1);
  });
  it('should insert and double rotate (leftLeft) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(25);
    avlTree.insert(10);
    expect(avlTree._root.value).toBe(25);
    expect(avlTree._root._left.value).toBe(10);
    expect(avlTree._root._right.value).toBe(50);

    expect(avlTree._root._height).toBe(2);
    expect(avlTree._root._left._height).toBe(1);
    expect(avlTree._root._right._height).toBe(1);
  });
  it('should insert and double rotate (rightRight) properly', function () {
    var avlTree = new AVLTree();
    avlTree.insert(50);
    avlTree.insert(75);
    avlTree.insert(100);
    expect(avlTree._root.value).toBe(75);
    expect(avlTree._root._left.value).toBe(50);
    expect(avlTree._root._right.value).toBe(100);

    expect(avlTree._root._height).toBe(2);
    expect(avlTree._root._left._height).toBe(1);
    expect(avlTree._root._right._height).toBe(1);
  });
  it('should insert multiple nodes and balance properly (1)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(30);
    avlTree.insert(15);
    avlTree.insert(60);
    avlTree.insert(90);
    avlTree.insert(100);
    expect(avlTree._root.value).toBe(30);
    expect(avlTree._root._left.value).toBe(15);
    expect(avlTree._root._right.value).toBe(90);
    expect(avlTree._root._right._left.value).toBe(60);
    expect(avlTree._root._right._right.value).toBe(100);

    expect(avlTree._root._height).toBe(3);
    expect(avlTree._root._left._height).toBe(1);
    expect(avlTree._root._right._height).toBe(2);
    expect(avlTree._root._right._left._height).toBe(1);
    expect(avlTree._root._right._right._height).toBe(1);
  });
  it('should insert multiple nodes and balance properly (2)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(24);
    avlTree.insert(67);
    avlTree.insert(33);
    avlTree.insert(52);
    avlTree.insert(11);
    avlTree.insert(15);
    avlTree.insert(26);
    avlTree.insert(27);
    // depth 1
    expect(avlTree._root.value).toBe(33);
    expect(avlTree._root._height).toBe(4);
    // depth 2
    expect(avlTree._root._left.value).toBe(15);
    expect(avlTree._root._left._height).toBe(3);

    expect(avlTree._root._right.value).toBe(67);
    expect(avlTree._root._right._height).toBe(2);
    // depth 3
    expect(avlTree._root._left._left.value).toBe(11);
    expect(avlTree._root._left._left._height).toBe(1);

    expect(avlTree._root._left._right.value).toBe(26);
    expect(avlTree._root._left._right._height).toBe(2);

    expect(avlTree._root._right._left.value).toBe(52);
    expect(avlTree._root._right._left._height).toBe(1);
    // depth 4
    expect(avlTree._root._left._right._left.value).toBe(24);
    expect(avlTree._root._left._right._left._height).toBe(1);

    expect(avlTree._root._left._right._right.value).toBe(27);
    expect(avlTree._root._left._right._right._height).toBe(1);
  });
  it('should remove nodes and balance properly (1)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(30);
    avlTree.insert(15);
    avlTree.insert(60);
    avlTree.insert(90);
    avlTree.insert(100);
    avlTree.remove(15);
    // depth 1
    expect(avlTree._root.value).toBe(90);
    expect(avlTree._root._height).toBe(3);
    // depth 2
    expect(avlTree._root._left.value).toBe(30);
    expect(avlTree._root._left._height).toBe(2);

    expect(avlTree._root._right.value).toBe(100);
    expect(avlTree._root._right._height).toBe(1);
    // depth 3
    expect(avlTree._root._left._right.value).toBe(60);
    expect(avlTree._root._left._right._height).toBe(1);
  });
  it('should remove nodes and balance properly (2)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(55);
    avlTree.insert(25);
    avlTree.insert(11);
    avlTree.insert(1);
    avlTree.remove(55);
    // depth 1
    expect(avlTree._root.value).toBe(11);
    expect(avlTree._root._height).toBe(2);
    // depth 2
    expect(avlTree._root._left.value).toBe(1);
    expect(avlTree._root._left._height).toBe(1);

    expect(avlTree._root._right.value).toBe(25);
    expect(avlTree._root._right._height).toBe(1);
  });
  it('should remove nodes and balance properly (3)', function () {
    var avlTree = new AVLTree();
    avlTree.insert(55);
    avlTree.insert(25);
    avlTree.insert(11);
    avlTree.insert(1);
    avlTree.remove(55);
    avlTree.insert(32);
    avlTree.insert(37);
    avlTree.insert(41);
    avlTree.insert(8);
    avlTree.insert(44);
    avlTree.insert(6);
    avlTree.remove(32);
    avlTree.remove(11);
    avlTree.remove(25);    
    
    // depth 1
    expect(avlTree._root.value).toBe(37);
    expect(avlTree._root._height).toBe(4);
    // depth 2
    expect(avlTree._root._left.value).toBe(6);
    expect(avlTree._root._left._height).toBe(3);

    expect(avlTree._root._right.value).toBe(41);
    expect(avlTree._root._right._height).toBe(2);
  });
});
