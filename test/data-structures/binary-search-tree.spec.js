let mod = require('../../src/data-structures/binary-search-tree.js');
let Node = mod.Node;
let BinaryTree = mod.BinaryTree;

describe('Node', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
});

describe('Binary Tree', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof BinaryTree).toBe('function');
  });
  it('should start with null root', function () {
    expect(new BinaryTree()._root).toBe(null);
  });
  it('should insert and remove single node properly', function () {
    let bTree = new BinaryTree();
    bTree.insert(15);
    let node = bTree.find(15);
    bTree.remove(node);
    expect(bTree._root).toBe(null);
  });
  it('should remove root and replace with valid child', function () {
    let bTree = new BinaryTree();
    bTree.insert(15);
    bTree.insert(30);
    bTree.insert(45);
    let node = bTree.find(15);
    bTree.remove(node);
    expect(bTree._root.value).toBe(30);
  });
  it('should insert multiple nodes properly', function () {
    let bTree = new BinaryTree();
    bTree.insert(10);
    bTree.insert(5);
    bTree.insert(15);
    bTree.insert(4);
    bTree.insert(6);
    bTree.insert(14);
    bTree.insert(16);
    let leftRootChild = bTree._root._left;
    let rightRootChild = bTree._root._right;
    expect(bTree._root.value).toBe(10);
    expect(leftRootChild.value).toBe(5);
    expect(rightRootChild.value).toBe(15);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(6);
    expect(rightRootChild._left.value).toBe(14);
    expect(rightRootChild._right.value).toBe(16);
  });
  it('should remove multiple nodes properly', function () {
    let bTree = new BinaryTree();
    bTree.insert(10);
    bTree.insert(5);
    bTree.insert(15);
    bTree.insert(4);
    bTree.insert(6);
    bTree.insert(7);
    bTree.insert(14);
    bTree.insert(16);
    let leftRootChild = bTree._root._left;
    let rightRootChild = bTree._root._right;
    let sixteen = bTree.find(16);
    bTree.remove(sixteen);
    expect(bTree._root.value).toBe(10);
    expect(leftRootChild.value).toBe(5);
    expect(rightRootChild.value).toBe(15);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(6);
    expect(leftRootChild._right._right.value).toBe(7);
    expect(rightRootChild._left.value).toBe(14);
    expect(rightRootChild._right).toBe(null);
    let fourteen = bTree.find(14);
    bTree.remove(fourteen);
    expect(rightRootChild._left).toBe(null);
    let five = bTree.find(5);
    bTree.remove(five);
    expect(leftRootChild.value).toBe(6);
    expect(leftRootChild._left.value).toBe(4);
    expect(leftRootChild._right.value).toBe(7);
  });
});
