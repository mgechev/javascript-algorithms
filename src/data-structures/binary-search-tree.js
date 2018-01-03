/**
 * Binary search tree.
 *
 * @example
 * var BST = require('path-to-algorithms/src/data-structures'+
 * '/binary-search-tree');
 * var bst = new BST.BinaryTree();
 *
 * bst.insert(2000);
 * bst.insert(1989);
 * bst.insert(1991);
 * bst.insert(2001);
 * bst.insert(1966);
 *
 * var node = bst.find(1989);
 * console.log(node.value); // 1989
 *
 * var minNode = bst.findMin();
 * console.log(minNode.value); // 1966
 *
 * var maxNode = bst.findMax();
 * console.log(maxNode.value); //2001
 *
 * @module data-structures/binary-search-tree
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
   */
  exports.Node = function (value, left, right, parent) {
    /**
     * @member {Number|String}
     */
    this.value = value;
    this._left = left;
    this._right = right;
    this._parent = parent;
  };

  /**
   * Binary tree.
   *
   * @public
   * @constructor
   */
  exports.BinaryTree = function () {
    this._root = null;
  };

  /**
   * Inserts a node into the binary search tree.<br><br>
   * Time complexity: O(log N) in the average case
   * and O(N) in the worst case.
   *
   * @public
   * @method
   * @param {Number|String} value Node value.
   * @param {Node} current Current node.
   */
  exports.BinaryTree.prototype.insert = function (value, current) {
    if (this._root === null) {
      this._root = new exports.Node(value, null, null, null);
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
  exports.BinaryTree.prototype._inorder = function (current, callback) {
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
   * In-order traversal of the whole binary search tree.
   *
   * @public
   * @method
   * @param {Function} callback Callback which will be
   * called for each traversed node.
   */
  exports.BinaryTree.prototype.inorder = function (callback) {
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
  exports.BinaryTree.prototype._postorder = function (current, callback) {
    if (!current) {
      return;
    }
    this._postorder(current._left, callback);
    this._postorder(current._right, callback);
    if (typeof callback === 'function') {
      callback(current);
    }
  };

  /**
   * Post-order traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which
   * will be called for each traversed node.
   */
  exports.BinaryTree.prototype.postorder = function (callback) {
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
  exports.BinaryTree.prototype._preorder = function (current, callback) {
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
  exports.BinaryTree.prototype.preorder = function (callback) {
    return this._preorder(this._root, callback);
  };

  /**
   * Finds a node by it's value.<br><br>
   * Average time complexity: O(log N).
   *
   * @public
   * @param {Number|String} value of the node which should be found.
   */
  exports.BinaryTree.prototype.find = function (value) {
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
  exports.BinaryTree.prototype._find = function (value, current) {
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
  exports.BinaryTree.prototype._replaceChild = function (parent, oldChild, newChild) {
    if (!parent) {
      this._root = newChild;
      if (this._root !== null){
        this._root._parent = null;
      }
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
  exports.BinaryTree.prototype.remove = function (node) {
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
      if (node._left) {
        this._replaceChild(node._parent, node, node._left);
      } else if (node._right) {
        this._replaceChild(node._parent, node, node._right);
      } else {
        this._replaceChild(node._parent, node, null);
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
  exports.BinaryTree.prototype._findMin = function (node, current) {
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
  exports.BinaryTree.prototype._findMax = function (node, current) {
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
  exports.BinaryTree.prototype.findMin = function () {
    return this._findMin(this._root);
  };

  /**
   * Finds the node with maximum value in the whole tree.
   *
   * @public
   * @returns {Node} The maximum node of the tree.
   *
   */
  exports.BinaryTree.prototype.findMax = function () {
    return this._findMax(this._root);
  };

  /**
   * Checks if a given node is balanced.
   *
   * @private
   * @param {Node} current Node to have balance checked.
   * @returns {Boolean} Boolean of whether or not provided node is balanced.
   */
  exports.BinaryTree.prototype._isBalanced = function (current) {
    if (!current) {
      return true;
    }
    return this._isBalanced(current._left)  &&
           this._isBalanced(current._right) &&
          Math.abs(this._getHeight(current._left) -
            this._getHeight(current._right)) <= 1;
  };

  /**
   * Returns whether the BST is balanced.
   *
   * @public
   * @returns {Boolean} Whether the tree is balanced or not.
   */
  exports.BinaryTree.prototype.isBalanced = function () {
    return this._isBalanced(this._root);
  };

  /**
   * Finds the diameter of the binary tree.
   *
   * @public
   * @returns {Number} The longest path in the BST.
   */
  exports.BinaryTree.prototype.getDiameter = function () {
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
  exports.BinaryTree.prototype.getHeight = function () {
    return this._getHeight(this._root);
  };

  /**
   * Recursive worker function for getHeight()
   *
   * @private
   * @param {Node} node Node at current recursive frame.
   * @returns {Number} Height of the Node in the parameter.
   */
  exports.BinaryTree.prototype._getHeight = function (node) {
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
   * @param {Node} firstNode First node to be considered when checking
   * for ancestor.
   * @param {Node} secondNode Second node to be considered when checking
   * for ancestor.
   * @returns {Node} The lowest common ancestor of the two nodes or null.
   */
  exports.BinaryTree.prototype.lowestCommonAncestor = function (firstNode, secondNode) {
    return this._lowestCommonAncestor(firstNode, secondNode, this._root);
  };

  /**
   * Obtains the lowest common ancestor for the given nodes.
   *
   * @private
   * @param {Node} firstNode First node to be considered when checking
   * for ancestor.
   * @param {Node} secondNode Second node to be considered when checking
   * for ancestor.
   * @param {Node} current Current node.
   * @returns {Node} The lowest common ancestor of the two nodes or null.
   */
  exports.BinaryTree.prototype._lowestCommonAncestor = function (firstNode, secondNode, current) {
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

  /**
   * Checks if a given node exists in a subtree.
   *
   * @private
   * @param {Node} node Node to check for.
   * @param {Node} root Root node of a given subtree.
   * @returns {Node} The lowest common ancestor of the two nodes or null.
   */
  exports.BinaryTree.prototype._existsInSubtree = function (node, root) {
    if (!root) {
      return false;
    }
    if (node.value === root.value) {
      return true;
    }
    return this._existsInSubtree(node, root._left) ||
      this._existsInSubtree(node, root._right);
  };

})(typeof window === 'undefined' ? module.exports : window);
