(function (global) {

  'use strict';

  function Node(key, value, left, right, isRed) {
    this._key = key;
    this._left = left;
    this._right = right;
    this._value = value;
    this._isRed = isRed;
  }

  Node.prototype.isRed = function () {
    return !!this._isRed;
  };

  Node.prototype.flipColor = function () {
    this._isRed = !this._isRed;
  };

  'key value left right'
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


  function RBTree() {
    this._root = null;
  }

  RBTree.prototype.put = function (key, value) {
    console.log(this._root);
    this._root = this._put(key, value, this._root);
    this._root.flipColor();
  };

  RBTree.prototype._put = function (key, value, node) {
    var newRoot = node;
    if (node === null) {
      return new Node(key, value, null, null, true);
    }
    if (node.getKey() > key) {
      this._put(key, value, node.getLeft());
    } else if (node.getKey() < key) {
      node.setLeft(this._put(key, value, node.getRight()));
    }
    if (this.isRed(node.getRight())) {
      node.setRight(this._rotateLeft(node));
    }
    if (this.isRed(node.getLeft()) && this.isRed(node.getLeft().getLeft())) {
      newRoot = this._rotateRight(node);
    }
    if (this.isRed(node.getLeft()) && this.isRed(node.getRight())) {
      this._flipColors();
    }
    return newRoot;
  };

  RBTree.prototype._flipColors = function (node) {
    node.getLeft().flipColor();
    node.getRight().flipColor();
  };

  RBTree.prototype._rotateLeft = function (node) {
    var x = node.getRight();
    if (x !== null) {
      var temp = x.getLeft();
      node.setRight(temp);
      x.setLeft(node);
    }
    return x;
  };

  RBTree.prototype._rotateRight = function (node) {
    var x = node.getLeft();
    if (x !== null) {
      var temp = x.getRight();
      node.setLeft(temp);
      x.setRight(node);
    }
    return x;
  };

  global.RBTree = RBTree;

}(typeof window === 'undefined' ? module.exports : window));
