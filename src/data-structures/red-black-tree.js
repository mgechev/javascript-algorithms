/**
 * Red-Black tree is a data structure which is
 * a type of self-balancing binary search tree.
 *
 * @example
 *
 * var RBTree = require('../src/data-structures/red-black-tree').RBTree;
 * var rbTree = new RBTree();
 *
 * rbTree.put(1981, {
 *   name: 'John',
 *   surname: 'Smith'
 * });
 * rbTree.put(2000, {
 *   name: 'Pavlo',
 *   surname: 'Popov'
 * });
 * rbTree.put(1989, {
 *   name: 'Garry',
 *   surname: 'Fisher'
 * });
 * rbTree.put(1990, {
 *   name: 'Derek',
 *   surname: 'Anderson'
 * });
 *
 * console.log(rbTree.get(1989)); // { name: 'Garry', surname: 'Fisher' }
 *
 * @module data-structures/red-black-tree
 */
(function (exports) {

  'use strict';

  /**
   * Enum for the different colors
   */
  var Colors = {
    RED: 0,
    BLACK: 1
  };
  exports.Colors = Colors;

  /**
   * Node of the Red-Black tree.
   *
   * @private
   * @constructor
   * @param {Number} key Key of the node.
   * @param {Object} value Value assigned to the node.
   * @param {Node} left Left node.
   * @param {Node} right Right node.
   * @param {Number} color Node color.
   */
  function Node(key, value, left, right, color) {
    this._key = key;
    this._left = left;
    this._right = right;
    this._value = value;
    this._color = color;
  }

  /**
   * Check or node is red.
   *
   * @private
   * @method
   * @return {Boolean} Returns true if node is red.
   */
  Node.prototype.isRed = function () {
    return this._color === Colors.RED;
  };

  /**
   * Changes node color.
   *
   * @private
   * @method
   */
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

  exports.Node = Node;

  /**
   * Red-Black Tree.
   *
   * @public
   * @constructor
   */
  exports.RBTree = function () {
    this._root = null;
  };

  /**
   * Add value associated with a given key.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @method
   * @param {Number} key Key.
   * @param {Object} value Value.
   */
  exports.RBTree.prototype.put = function (key, value) {
    this._root = this._put(key, value, this._root);
    this._root.setColor(Colors.BLACK);
  };

  /**
   * Returns true or false depending on whether
   * given node is red.
   *
   * @private
   * @method
   * @param {Node} node Node which sould be checked.
   * @return Returns true if node is red.
   */
  exports.RBTree.prototype.isRed = function (node) {
    if (!node) {
      return false;
    }
    return node.isRed();
  };

  /**
   * Helper function for insertion of given key,
   * value pair into the Red-Black tree.
   *
   * @private
   * @method
   * @param {Number} key Key.
   * @param {Object} value Value.
   * @param {Node} node Node.
   */
  exports.RBTree.prototype._put = function (key, value, node) {
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
   * Flip the colors of the both neighbours of given node.<br><br>
   * Complexity: O(1).
   *
   * @private
   * @method
   * @param {Node} node Node.
   */
  exports.RBTree.prototype._flipColors = function (node) {
    node.getLeft().flipColor();
    node.getRight().flipColor();
  };

  /*
   * Rotates given node to the left.<br><br>
   * Complexity: O(1).
   *
   * @private
   * @method
   * @param {Node} node Node.
   * @return {Node} Right node.
   */
  exports.RBTree.prototype._rotateLeft = function (node) {
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
   * Rotates given node to the right.<br><br>
   * Complexity: O(1).
   *
   * @private
   * @method
   * @param {Node} node Node.
   * @return {Node} Left node.
   */
  exports.RBTree.prototype._rotateRight = function (node) {
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
   * Get value by the given key.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @param {Number} key A key to be searched for.
   * @return {Object} A value which will be returned based on the key.
   */
  exports.RBTree.prototype.get = function (key) {
    return this._get(this._root, key);
  };

  /**
   * Get value by the given key.<br><br>
   *
   * @private
   * @param {Node} node Node to start with.
   * @param {Number} key A key to be searched for.
   * @return {Object} A value which will be returned based on the key.
   */
  exports.RBTree.prototype._get = function (node, key) {
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

  /**
  * Get Level Order Traversal for the given Red Black Tree,
  * returns 'Tree is empty' string when tree has no Nodes.
  * Complexity: O(N).
  *
  * @public
  * @return {String} The keys of the tree in level order traversal.
  *
  */
  exports.RBTree.prototype.levelOrderTraversal = function () {
    var queue = [];
    var levelOrderString = '';
    if (this._root){
      queue.push(this._root);
    } else {
      levelOrderString = ' Tree is empty';
    }
    while (queue.length !== 0){
      var tempNode = queue.shift();
      levelOrderString += ' ' + tempNode.getKey();
      if (tempNode.getLeft() !== null){
        queue.push(tempNode.getLeft());
      }
      if (tempNode.getRight() !== null){
        queue.push(tempNode.getRight());
      }
    }
    return 'Level Order Traversal -:' + levelOrderString;
  };

})(typeof window === 'undefined' ? module.exports : window);
