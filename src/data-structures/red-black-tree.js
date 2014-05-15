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

}(typeof window === 'undefined' ? module.exports : window));
