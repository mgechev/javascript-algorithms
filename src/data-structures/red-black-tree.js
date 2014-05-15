(function (global) {

  'use strict';

  function Node(key, value, isRed) {
    this._key = key;
    this._value = value;
    this._isRed = isRed;
  }

  Node.prototype.isRed = function () {
    return !!this._isRed;
  };

  Node.prototype.getKey = function () {
    return this._key;
  };

  Node.prototype.getValue = function () {
    return this._value;
  };

  global.Node = Node;


  function RBTree() {
    this._root = null;
  }

  RBTree.prototype.put = function (key, value) {
    return this._put(key, value, this._root);
  };

  RBTree.prototype._put = function (key, value, node) {
    if (this._root === null) {
      return (this._root = new Node(key, value, false));
    }
  };

  global.RBTree = RBTree;

}(typeof window === 'undefined' ? module.exports : window));
