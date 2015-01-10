(function (global) {

  'use strict';

  /**
   * Enum for the different colors
   */
  var Colors = {
    RED: 0,
    BLACK: 1
  };

  global.Colors = Colors;

  /**
   * Represents given node in the tree.
   *
   * @constructor
   */
  function Node(key, value, left, right, color) {
    this._key = key;
    this._left = left;
    this._right = right;
    this._value = value;
    this._color = color;
  }

  Node.prototype.isRed = function () {
    return this._color === Colors.RED;
  };

  Node.prototype.flipColor = function () {
    if (this._color === Colors.RED) {
      this._color = Colors.BLACK;
    } else {
      this._color = Colors.RED;
    }
  };

  /**
   * Creates getters and setters for the properties:
   * key, value, left, right and color.
   */
  'key value left right color'
  .split(' ')
  .forEach(function (key) {
    var valueName = key.substr(0, 1).toUpperCase() + key.substr(1, key.length);
    Node.prototype['get' + valueName] = function () {
      return this['_' + key];
    };
    Node.prototype['set' + valueName] = function (val) {
      this['_' + key] = val;
    };
  });

  global.Node = Node;


  /**
   * Represents a Red-Black Tree
   *
   * @constructor
   */
  function RBTree() {
    this._root = null;
  }

  /**
   * Adds value associated with given key.
   * Complexity O(log n)
   */
  RBTree.prototype.put = function (key, value) {
    this._root = this._put(key, value, this._root);
    this._root.setColor(Colors.BLACK);
  };

  /**
   * Returns true or false depending on whether
   * given node is red.
   */
  RBTree.prototype.isRed = function (node) {
    if (!node) {
      return false;
    }
    return node.isRed();
  };

  /**
   * Helper function for insertion of given key, value pair
   * into the red-black tree.
   */
  RBTree.prototype._put = function (key, value, node) {
    var newRoot = node;
    if (node === null) {
      return new Node(key, value, null, null, Colors.RED);
    }
    if (node.getKey() > key) {
      node.setLeft(this._put(key, value, node.getLeft()));
    } else if (node.getKey() < key) {
      node.setRight(this._put(key, value, node.getRight()));
    } else {
      node.setValue(value);
    }
    if (this.isRed(node.getRight()) && !this.isRed(node.getLeft())) {
      newRoot = this._rotateLeft(node);
    }
    if (this.isRed(node.getLeft()) && this.isRed(node.getLeft().getLeft())) {
      newRoot = this._rotateRight(node);
    }
    if (this.isRed(node.getLeft()) && this.isRed(node.getRight())) {
      this._flipColors(node);
    }
    return newRoot;
  };

  /**
   * Flip the colors of the both neighbours of given node.
   * Complexity O(1).
   */
  RBTree.prototype._flipColors = function (node) {
    node.getLeft().flipColor();
    node.getRight().flipColor();
  };

  /*
   * Rotates given node to left.
   * Complexity O(1).
   */
  RBTree.prototype._rotateLeft = function (node) {
    var x = node.getRight();
    if (x !== null) {
      var temp = x.getLeft();
      node.setRight(temp);
      x.setLeft(node);
      x.setColor(node.getColor());
      node.setColor(Colors.RED);
    }
    return x;
  };

  /*
   * Rotates given node to right.
   * Complexity O(1).
   */
  RBTree.prototype._rotateRight = function (node) {
    var x = node.getLeft();
    if (x !== null) {
      var temp = x.getRight();
      node.setLeft(temp);
      x.setRight(node);
      x.setColor(node.getColor());
      node.setColor(Colors.RED);
    }
    return x;
  };

  /**
   * Gets value by given key.
   * Complexity O(log n).
   *
   * @param {*} key A key to be searched for
   * @return {*}    A value which will be returned based on the passed key
   */
  RBTree.prototype.get = function (key) {
    return this._get(this._root, key);
  };

  RBTree.prototype._get = function (node, key) {
    if (node === null) {
      return undefined;
    }
    if (node.getKey() === key) {
      return node.getValue();
    }
    if (node.getKey() > key) {
      return this._get(node.getLeft(), key);
    } else {
      return this._get(node.getRight(), key);
    }
  };

  global.RBTree = RBTree;

}(typeof window === 'undefined' ? module.exports : window));

