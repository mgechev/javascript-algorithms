(function (global) {

  'use strict';

  function Node(key, left, right, value, isRed) {
    this._key = key;
    this._left = left;
    this._right = right;
    this._value = value;
    this._isRed = isRed;
  }

  Node.prototype.isRed = function () {
    return !!this._isRed;
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
    return this._put(key, value, this._root);
  };

  RBTree.prototype._put = function (key, value, node) {
    if (this._root === null) {
      return (this._root = new Node(key, null, null, value, false));
    }
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
