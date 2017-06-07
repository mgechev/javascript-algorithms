var mod = require('../../src/data-structures/size-balanced-tree.js');
var Node = mod.Node;
var Nil = mod.Nil;
var SBTree = mod.SBTree;
var updateChild = mod.updateChild;

describe('Node', function () {
  'use strict';

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
  'use strict';

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

  it('test updateChild', function () {
    checkNil();
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
    expect(root.left.size).toBe(1);
    checkNil();
  });
  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  it('push and get 100000 elements, remove the array by always remove the first/last element', function () {
    var sTree = new SBTree();
    for (var i = 0; i < 200000; i += 1) {
      sTree.push(i);
    }
    checkNil();
    for (var i = 0; i < 200000; i += 1) {
      var node = sTree.get(i);
      expect(node.value).toBe(i);
    }
    for (var i = 0; i < 200000; i += 1) {
      expect(sTree.get(0).value).toBe(i);
      var node = sTree.remove(0); // Always remove the first element;
      expect(node.value).toBe(i);
    }
    checkNil();
    expect(sTree._root).toBe(Nil);
    var count = 10000;
    for (var i = 0; i < count; i += 1) {
      sTree.insert(0, i);
    }
    for (var i = 0; i < count; i += 1) {
      var node = sTree.remove(count - i - 1); // Always remove the last element;
      expect(node.value).toBe(i);
      expect(sTree.size).toBe(count - i - 1);
    }
    checkNil();
    var expectedArray = [];
    for (var i = 0; i < 100000; i += 1) {
      var newPos = getRandomIntInclusive(0, sTree.size);
      sTree.insert(newPos, i);
      expectedArray.splice(newPos, 0, i);
    }
    expect(sTree.size).toBe(expectedArray.length);
    for (var i = 0; i < sTree.size; i += 1) {
      var node = sTree.get(i);
      expect(node.value).toBe(expectedArray[i]);
    }
    for (var i = 0; i < 90000; i += 1) {
      var removedPos = getRandomInt(0, sTree.size);
      sTree.remove(removedPos);
      expectedArray.splice(removedPos, 1);
    }
    for (var i = 0; i < sTree.size; i += 1) {
      var node = sTree.get(i);
      expect(node.value).toBe(expectedArray[i]);
    }
    checkNil();
  });

  it('test getIndex', function () {
    var sTree = new SBTree();
    for (var i = 0; i < 10000; i += 1) {
      var key = i.toString();
      sTree.push(key);
    }

    for (var i = 0; i < 100; i += 1) {
      var item = sTree.get(i);
      expect(item.value).toBe(i.toString());
      expect(sTree.getIndex(item)).toBe(i);
    }
  });

  it('test binary search', function () {
    var sTree = new SBTree();
    for (var i = 0; i < 10000; i += 1) {
      sTree.push(i);
    }
    var cmp = function (a, b) {
      return a - b;
    }
    expect(sTree.binarySearch(cmp, 10.5)).toBe(11)
    expect(sTree.binarySearch(cmp, 0)).toBe(1)
    expect(sTree.binarySearch(cmp, -1)).toBe(0)
    expect(sTree.binarySearch(cmp, 9999)).toBe(10000)
    expect(sTree.binarySearch(cmp, 10000)).toBe(10000)
  });
});
