/**
 * AVL tree, a Binary Search Tree that satisfies the Height-Balance
 * Property.
 *
 * @example
 * var avlTree = require('path-to-algorithms/src/data-structures'+
 * '/avl-tree');
 * var avl = new avlTree.AVLTree();
 *
 * avl.insert(2000);
 * avl.insert(1989);
 * avl.insert(1991);
 * avl.insert(2001);
 * avl.insert(1966);
 *
 * @module data-structures/avl-tree
 */
(function (exports) {
  'use strict';

  /**
   * Node of the tree.
   *
   * @public
   * @constructor
   * @param {Number|String} value Value of the node.
   * @param {Node} left Left sibling.
   * @param {Node} right Right sibling.
   * @param {Node} parent Parent of the node.
   * @param {Number} height Height of the node.
   */
  exports.Node = function (value, left, right, parent, height) {
    /**
     * @member {Number|String}
     */
    this.value = value;
    this._left = left;
    this._right = right;
    this._parent = parent;
    this._height = height;
  };

  /**
   * AVL Tree.
   *
   * @public
   * @constructor
   */
  exports.AVLTree = function () {
    this._root = null;
  };

  /**
   * Calculates the height of a node based on height
   * property of children.
   *
   * @public
   * @method
   * @param {Node} node Given node's height is returned.
   */
  exports.AVLTree.prototype._getHeightAtNode = function (node) {
    if (node._left !== null && node._right !== null){
      var height = Math.max(node._left._height, node._right._height);
      height += 1;
      return height;
    }else if (node._left !== null){
      return node._left._height + 1;
    }else if (node._right !== null){
      return node._right._height + 1;
    }else {
      return 1;
    }
  };

  /**
   * Checks if a given node has an imbalance.
   *
   * @public
   * @method
   * @param {Node} node Given node's children are checked for
   * imbalance.
   */
  exports.AVLTree.prototype._isBalancedAtNode = function (node) {
    if (node._left !== null && node._right !== null){
      return (Math.abs(node._left._height - node._right._height) <= 1);
    }
    if (node._right !== null && node._left === null){
      return node._right._height < 2;
    }
    if (node._left !== null && node._right === null){
      return node._left._height < 2;
    }
    return true;
  };

  /**
   * Maintains the height balance property by
   * walking to root and checking for invalid height
   * differences between children and restructuring
   * appropriately.
   *
   * @public
   * @method
   * @param {Node} node Started node.
   */
  exports.AVLTree.prototype._maintainHeightBalanceProperty = function (node) {
    var current = node;
    var path = []; //During restructure, use last 3 nodes traveled.
    while (current !== null){
      path.push(current);
      current._height = this._getHeightAtNode(current);
      if (!this._isBalancedAtNode(current)){
        if (path.length >= 3){
          var nodesToRestructure = path.slice(0, 3);
          var x = nodesToRestructure[0];
          var y = nodesToRestructure[1];
          var z = nodesToRestructure[2];
          this._restructure(x, y, z);
        }
      }
      current = current._parent;
    }
  };

  /**
   * Identifies the pattern of given nodes, then calls
   * the appropriate pattern rotator.
   *
   * @public
   * @method
   * @param {Node} x node with lowest height to be restructured.
   * @param {Node} y parent of x parameter.
   * @param {Node} z grandparent of x, largest height.
   */
  exports.AVLTree.prototype._restructure = function (x, y, z) {
    //Determine Rotation Pattern
    if (z._right === y && y._right === x){
      this._rightRight(x, y, z);
    }else if (z._left === y && y._left === x){
      this._leftLeft(x, y, z);
    }else if (z._right === y && y._left === x){
      this._rightLeft(x, y, z);
    }else if (z._left === y && y._right === x){
      this._leftRight(x, y, z);
    }
  };

  /**
   * Rotates the given nodes from a right right pattern
   * to a parent, with 2 children.
   *
   * @public
   * @method
   * @param {Node} x node with lowest height to be restructured.
   * @param {Node} y parent of x parameter.
   * @param {Node} z grandparent of x, largest height.
   */
  exports.AVLTree.prototype._rightRight = function (x, y, z) {
    /*
    z
      y    =>    y
        x      z    x
    */
    // pass z parent to y and move y's left to z's right
    if (z._parent !== null){
      var orientation = (z._parent._left === z) ? '_left' : '_right';
      z._parent[orientation] = y;
      y._parent = z._parent;
    }else {
      this._root = y;
      y._parent = null;
    }
    // z adopts y's left.
    z._right = y._left;
    if (z._right !== null){
      z._right._parent = z;
    }
    // y adopts z
    y._left = z;
    z._parent = y;
    // Correct each nodes height - order matters, children first
    x._height = this._getHeightAtNode(x);
    z._height = this._getHeightAtNode(z);
    y._height = this._getHeightAtNode(y);
  };

  /**
   * Rotates the given nodes from a left left pattern
   * to a parent, with 2 children.
   *
   * @public
   * @method
   * @param {Node} x node with lowest height to be restructured.
   * @param {Node} y parent of x parameter.
   * @param {Node} z grandparent of x, largest height.
   */
  exports.AVLTree.prototype._leftLeft = function (x, y, z) {
    /*
          z
        y    =>    y
      x          x   z
    */
    //pass z parent to y and move y's right to z's left
    if (z._parent !== null){
      var orientation = (z._parent._left === z) ? '_left' : '_right';
      z._parent[orientation] = y;
      y._parent = z._parent;
    }else {
      this._root = y;
      y._parent = null;
    }
    z._left = y._right;
    if (z._left !== null) {
      z._left._parent = z;
    }
    //fix y right child
    y._right = z;
    z._parent = y;
    // Correct each nodes height - order matters, children first
    x._height = this._getHeightAtNode(x);
    z._height = this._getHeightAtNode(z);
    y._height = this._getHeightAtNode(y);
  };

  /**
   * Rotates the given nodes from a right left pattern
   * to a parent, with 2 children.
   *
   * @public
   * @method
   * @param {Node} x node with lowest height to be restructured.
   * @param {Node} y parent of x parameter.
   * @param {Node} z grandparent of x, largest height.
   */
  exports.AVLTree.prototype._rightLeft = function (x, y, z) {
    /*
     z
       y    =>    x
     x          z   y
     */
    //pass z parent to x
    if (z._parent !== null){
      var orientation = (z._parent._left === z) ? '_left' : '_right';
      z._parent[orientation] = x;
      x._parent = z._parent;
    }else {
      this._root = x;
      x._parent = null;
    }
    // Adoptions
    z._right = x._left;
    if (z._right !== null){
      z._right._parent = z;
    }
    y._left = x._right;
    if (y._left !== null){
      y._left._parent = y;
    }
    // Point to new children (x new parent)
    x._left = z;
    x._right = y;
    x._left._parent = x;
    x._right._parent = x;
    // Correct each nodes height - order matters, children first
    y._height = this._getHeightAtNode(y);
    z._height = this._getHeightAtNode(z);
    x._height = this._getHeightAtNode(x);
  };

  /**
   * Rotates the given nodes from a left right pattern
   * to a parent, with 2 children.
   *
   * @public
   * @method
   * @param {Node} x node with lowest height to be restructured.
   * @param {Node} y parent of x parameter.
   * @param {Node} z grandparent of x, largest height.
   */
  exports.AVLTree.prototype._leftRight = function (x, y, z) {
    /*
       z
     y    =>    x
       x      y   z
     */
    //pass z parent to x
    if (z._parent !== null){
      var orientation = (z._parent._left === z) ? '_left' : '_right';
      z._parent[orientation] = x;
      x._parent = z._parent;
    }else {
      this._root = x;
      x._parent = null;
    }
    // Adoptions
    z._left = x._right;
    if (z._left !== null){
      z._left._parent = z;
    }
    y._right = x._left;
    if (y._right !== null){
      y._right._parent = y;
    }
    // Point to new children (x new parent)
    x._right = z;
    x._left = y;
    x._left._parent = x;
    x._right._parent = x;
    // Correct each nodes height - order matters, children first
    y._height = this._getHeightAtNode(y);
    z._height = this._getHeightAtNode(z);
    x._height = this._getHeightAtNode(x);
  };

  /**
   * Inserts a node into the AVL Tree.<br><br>
   * Time complexity: O(log N) in the average case
   * and O(N) in the worst case.
   *
   * @public
   * @method
   * @param {Number|String} value Node value.
   * @param {Node} current Current node.
   */
  exports.AVLTree.prototype.insert = function (value, current) {
    if (this._root === null) {
      this._root = new exports.Node(value, null, null, null, 1);
      this._maintainHeightBalanceProperty(this._root);
      return;
    }
    var insertKey;
    current = current || this._root;
    if (current.value > value) {
      insertKey = '_left';
    } else {
      insertKey = '_right';
    }
    if (!current[insertKey]) {
      current[insertKey] = new exports.Node(value, null, null, current);
      this._maintainHeightBalanceProperty(current[insertKey]);
    } else {
      this.insert(value, current[insertKey]);
    }
  };

  /**
   * In-order traversal from the given node.
   *
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which
   *    will be called for each traversed node.
   */
  exports.AVLTree.prototype._inorder = function (current, callback) {
    if (!current) {
      return;
    }
    this._inorder(current._left, callback);
    if (typeof callback === 'function') {
      callback(current);
    }
    this._inorder(current._right, callback);
  };

  /**
   * In-order traversal of the whole AVL tree.
   *
   * @public
   * @method
   * @param {Function} callback Callback which will be
   * called for each traversed node.
   */
  exports.AVLTree.prototype.inorder = function (callback) {
    return this._inorder(this._root, callback);
  };

  /**
   * Post-order traversal from given node.
   *
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which will
   * be called for each traversed node
   */
  exports.AVLTree.prototype._postorder = function (current, callback) {
    if (!current) {
      return;
    }
    if (typeof callback === 'function') {
      callback(current);
    }
    this._postorder(current._left, callback);
    this._postorder(current._right, callback);
  };

  /**
   * Post-order traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which
   * will be called for each traversed node.
   */
  exports.AVLTree.prototype.postorder = function (callback) {
    return this._postorder(this._root, callback);
  };

  /**
   * Pre-order traversal of the tree from given node.
   *
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which
   * will be called for each traversed node.
   */
  exports.AVLTree.prototype._preorder = function (current, callback) {
    if (!current) {
      return;
    }
    if (typeof callback === 'function') {
      callback(current);
    }
    this._preorder(current._left, callback);
    this._preorder(current._right, callback);
  };

  /**
   * Pre-order preorder traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which will
   * be called for each traversed node.
   */
  exports.AVLTree.prototype.preorder = function (callback) {
    return this._preorder(this._root, callback);
  };

  /**
   * Finds a node by it's value.<br><br>
   * Average time complexity: O(log N).
   *
   * @public
   * @param {Number|String} value of the node which should be found.
   */
  exports.AVLTree.prototype.find = function (value) {
    return this._find(value, this._root);
  };

  /**
   * Finds a node by it's value in a given sub-tree.
   * Average time complexity: O(log N).
   *
   * @private
   * @param {Number|String} value of the node which should be found.
   * @param {Node} current node to be checked.
   */
  exports.AVLTree.prototype._find = function (value, current) {
    if (!current) {
      return null;
    }

    if (current.value === value) {
      return current;
    }

    if (current.value > value) {
      return this._find(value, current._left);
    }

    if (current.value < value) {
      return this._find(value, current._right);
    }
  };

  /**
   * Replaces given child with new one, for given parent.
   *
   * @private
   * @param {Node} parent Parent node.
   * @param {Node} oldChild Child to be replaced.
   * @param {Node} newChild Child replacement.
   */
  exports.AVLTree.prototype._replaceChild =
   function (parent, oldChild, newChild) {
    if (!parent) {
      this._root = newChild;
      this._root._parent = null;
    } else {
      if (parent._left === oldChild) {
        parent._left = newChild;
      } else {
        parent._right = newChild;
      }
      if (newChild) {
        newChild._parent = parent;
      }
    }
  };

  /**
   * Removes node from the tree. <br><br>
   * Average runtime complexity: O(log N).
   *
   * @public
   * @param {Node} node to be removed
   * @returns {Boolean} True/false depending
   *    on whether the given node is removed.
   */
  exports.AVLTree.prototype.remove = function (node) {
    if (!node) {
      return false;
    }

    if (node._left && node._right) {
      var min = this._findMin(node._right);
      var temp = node.value;

      node.value = min.value;
      min.value = temp;
      return this.remove(min);
    } else {
      if (node._parent !== null) {
        if (node._left) {
          this._replaceChild(node._parent, node, node._left);
        } else if (node._right) {
          this._replaceChild(node._parent, node, node._right);
        } else {
          this._replaceChild(node._parent, node, null);
        }
      }else {
        this._root = null;
      }
      return true;
    }
  };

  /**
   * Finds the node with minimum value in given sub-tree.
   *
   * @private
   * @param {Node} node Root of the sub-tree.
   * @param {Number|String} current Current minimum value of the sub-tree.
   * @returns {Node} Node with the minimum value in the sub-tree.
   */
  exports.AVLTree.prototype._findMin = function (node, current) {
    current = current || { value: Infinity };
    if (!node) {
      return current;
    }
    if (current.value > node.value) {
      current = node;
    }
    return this._findMin(node._left, current);
  };

  /**
   * Finds the node with maximum value in given sub-tree.
   *
   * @private
   * @param {Node} node Root of the sub-tree.
   * @param {Number|String} current Current maximum value of the sub-tree.
   * @returns {Node} Node with the maximum value in the sub-tree.
   */
  exports.AVLTree.prototype._findMax = function (node, current) {
    current = current || { value: -Infinity };
    if (!node) {
      return current;
    }
    if (current.value < node.value) {
      current = node;
    }
    return this._findMax(node._right, current);
  };

  /**
   * Finds the node with minimum value in the whole tree.
   *
   * @public
   * @returns {Node} The minimum node of the tree.
   */
  exports.AVLTree.prototype.findMin = function () {
    return this._findMin(this._root);
  };

  /**
   * Finds the node with maximum value in the whole tree.
   *
   * @public
   * @returns {Node} The maximum node of the tree.
   *
   */
  exports.AVLTree.prototype.findMax = function () {
    return this._findMax(this._root);
  };

  exports.AVLTree.prototype._isBalanced = function (current) {
    if (!current) {
      return true;
    }
    return this._isBalanced(current._left)  &&
           this._isBalanced(current._right) &&
          Math.abs(this._getHeight(current._left) -
            this._getHeight(current._right)) <= 1;
  };

  /**
   * Returns whether the AVL Tree is balanced.
   *
   * @public
   * @returns {Boolean} Whether the tree is balanced or not.
   */
  exports.AVLTree.prototype.isBalanced = function () {
    return this._isBalanced(this._root);
  };

  /**
   * Finds the diameter of the AVL tree.
   *
   * @public
   * @returns {Number} The longest path in the AVL Tree.
   */
  exports.AVLTree.prototype.getDiameter = function () {
    var getDiameter = function (root) {
      if (!root) {
        return 0;
      }
      var leftHeight = this._getHeight(root._left);
      var rightHeight = this._getHeight(root._right);
      var path = leftHeight + rightHeight + 1;
      return Math.max(path, getDiameter(root._left), getDiameter(root._right));
    }.bind(this);
    return getDiameter(this._root);
  };

  /**
   * Returns the height of the tree.
   *
   * @public
   * @returns {Number} The height of the tree.
   */
  exports.AVLTree.prototype.getTreeHeight = function () {
    return this._getHeight(this._root);
  };

  exports.AVLTree.prototype._getHeight = function (node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(this._getHeight(node._left),
        this._getHeight(node._right));
  };

  /**
   * Finds the lowest common ancestor of two nodes.
   *
   * @public
   * @returns {Node} The lowest common ancestor of the two nodes or null.
   */
  exports.AVLTree.prototype.lowestCommonAncestor =
   function (firstNode, secondNode) {
    return this._lowestCommonAncestor(firstNode, secondNode, this._root);
  };

  exports.AVLTree.prototype._lowestCommonAncestor =
   function (firstNode, secondNode, current) {
    var firstNodeInLeft = this._existsInSubtree(firstNode, current._left);
    var secondNodeInLeft = this._existsInSubtree(secondNode, current._left);
    var firstNodeInRight = this._existsInSubtree(firstNode, current._right);
    var secondNodeInRight = this._existsInSubtree(secondNode, current._right);
    if ((firstNodeInLeft && secondNodeInRight) ||
        (firstNodeInRight && secondNodeInLeft)) {
      return current;
    }
    if (secondNodeInLeft && firstNodeInLeft) {
      return this._lowestCommonAncestor(firstNode, secondNode, current._left);
    }
    if (secondNodeInRight && secondNodeInLeft) {
      return this._lowestCommonAncestor(firstNode, secondNode, current._right);
    }
    return null;
  };

  exports.AVLTree.prototype._existsInSubtree = function (node, root) {
    if (!root) {
      return false;
    }
    if (node === root.value) {
      return true;
    }
    return this._existsInSubtree(node, root._left) ||
      this._existsInSubtree(node, root._right);
  };

})(typeof window === 'undefined' ? module.exports : window);
