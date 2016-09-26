/**
 * Splay Tree.
 *
 * @example
 * var STree = require('path-to-algorithms/src/data-structures'+
 * '/splay-tree');
 * var sTree = new STree.SplayTree();
 * sTree.insert(10);
 * sTree.insert(5);
 * sTree.insert(15);
 * sTree.insert(7);
 * sTree.insert(12);
 * sTree.search(10);
 * console.log(sTree._root);
 * sTree.remove(10);
 * console.log(sTree._root);
 * sTree.search(15);
 * console.log(sTree._root);
 *
 * @module data-structures/splay-tree
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
   * Splay tree.
   * {@link http://en.wikipedia.org/wiki/Splay_tree}
   * @public
   * @constructor
   */
  exports.SplayTree = function () {
    this._root = null;
  };

  /**
   * Splays a node to the root.<br><br>
   *
   * @private
   * @method
   * @param {Node} node Node to be splayed.
   * @returns {Node} The same node from the parameter, post splayed.
   */
  exports.SplayTree.prototype._splay = function (node) {
    while (this._root !== node) {
      var hasParent = node._parent !== null;
      var hasGrandparent = (hasParent && node._parent._parent !== null);
      if (hasParent && hasGrandparent) {
        var isLeftChild = node._parent._left === node;
        var isParentLeftChild = node._parent._parent._left === node._parent;
        if (
          (isLeftChild && isParentLeftChild) ||
          (!isLeftChild && !isParentLeftChild)
        ) {
          node = this._zigZig(node);
        } else {
          node = this._zigZag(node);
        }
      } else {
        node = this._zig(node);
      }
    }
    return node;
  };

  /**
   * Performs a zig-zig splay pattern<br><br>
   *
   * @private
   * @method
   * @param {Node} node Node to be zig-zig'd.
   * @returns {Node} The same node from the parameter, post splayed.
   */
  exports.SplayTree.prototype._zigZig = function (node) {

    var parent = node._parent;
    var grandParent = node._parent._parent;
    var greatGrandParent = grandParent._parent !== undefined ?
      grandParent._parent : null;

    var orientation = (parent._right === node) ? '_right' : '_left';
    var oppositeOrientation = (orientation === '_left') ? '_right' : '_left';
    var grandParentOrientation = (greatGrandParent !== null &&
      greatGrandParent._left === grandParent) ? '_left' : '_right';

    // Fix grandparent & great if it exists/not root
    if (this._root === grandParent) {
      this._root = node;
    } else {
      greatGrandParent[grandParentOrientation] = node;
    }
    grandParent._parent = parent;
    // Fix grandparent subtree
    grandParent[orientation] = parent[oppositeOrientation];
    if (grandParent[orientation] !== null) {
      grandParent[orientation]._parent = grandParent;
    }
    // Fix Parent
    parent[oppositeOrientation] = grandParent;
    parent[orientation] = node[oppositeOrientation];
    if (parent[orientation] !== null) {
      parent[orientation]._parent = parent;
    }
    parent._parent = node;
    // Fix Curr Node
    node[oppositeOrientation] = parent;
    if (node === this._root) {
      node._parent = null;
    } else if (greatGrandParent !== null) {
      node._parent = greatGrandParent;
    }

    return node;
  };

  /**
   * Performs a zig-zag splay pattern<br><br>
   *
   * @private
   * @method
   * @param {Node} node Node to be zig-zag'd.
   * @returns {Node} The same node from the parameter, post splayed.
   */
  exports.SplayTree.prototype._zigZag = function (node) {

    var parent = node._parent;
    var grandParent = parent._parent;
    var greatGrandParent = grandParent._parent !== undefined ?
      grandParent._parent : null;

    var orientation = (parent._left === node) ? '_left' : '_right';
    var oppositeOrientation = (orientation === '_right') ? '_left' : '_right';
    var grandParentOrientation = (greatGrandParent !== null &&
      greatGrandParent._left === grandParent) ? '_left' : '_right';

    // Fix GrandParent
    if (this._root === grandParent) {
      this._root = node;
    } else {
      greatGrandParent[grandParentOrientation] = node;
    }
    grandParent._parent = node;
    // Fix GrandParent subtree
    grandParent[oppositeOrientation] = node[orientation];
    if (grandParent[oppositeOrientation] !== null) {
      grandParent[oppositeOrientation]._parent = grandParent;
    }
    // Fix Parent
    parent[orientation] = node[oppositeOrientation];
    if (parent[orientation] !== null) {
      parent[orientation]._parent = parent;
    }
    parent._parent = node;
    // Fix Curr Node
    node[orientation] = grandParent;
    node[oppositeOrientation] = parent;
    if (this._root === node) {
      node._parent = null;
    } else if (greatGrandParent !== null) {
      node._parent = greatGrandParent;
    }

    return node;
  };

  /**
   * Performs a zig splay pattern<br><br>
   *
   * @private
   * @method
   * @param {Node} node Node to be zig'd.
   * @returns {Node} The same node from the parameter, post splayed.
   */
  exports.SplayTree.prototype._zig = function (node) {

    var parent = node._parent;
    var orientation = (parent._right === node) ? '_right' : '_left';
    var oppositeOrientation = (orientation === '_right') ? '_left' : '_right';

    if (this._root === parent) {
      this._root = node;
    }
    // Fix Parent
    parent[orientation] = node[oppositeOrientation];
    if (parent[orientation] !== null) {
      parent[orientation]._parent = parent;
    }
    parent._parent = node;
    // Fix Curr Node
    node[oppositeOrientation] = parent;
    node._parent = null;

    return node;
  };

  /**
   * Inserts a node into the splay tree.<br><br>
   * Time complexity: O(log N) in the average case
   * and amortized O(log n) in the worst case.
   *
   * @public
   * @method
   * @param {Number|String} value Node value.
   * @param {Node} current Current node.
   */
  exports.SplayTree.prototype.insert = function (value, current) {
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
      this._splay(current[insertKey]);
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
  exports.SplayTree.prototype._inorder = function (current, callback) {
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
   * In-order traversal of the whole Splay Tree.
   *
   * @public
   * @method
   * @param {Function} callback Callback which will be
   * called for each traversed node.
   */
  exports.SplayTree.prototype.inorder = function (callback) {
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
  exports.SplayTree.prototype._postorder = function (current, callback) {
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
  exports.SplayTree.prototype.postorder = function (callback) {
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
  exports.SplayTree.prototype._preorder = function (current, callback) {
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
  exports.SplayTree.prototype.preorder = function (callback) {
    return this._preorder(this._root, callback);
  };

  /**
   * Finds a node by it's value.<br><br>
   * Average time complexity: O(log N).
   *
   * @public
   * @param {Number|String} value of the node which should be found.
   */
  exports.SplayTree.prototype.search = function (value) {
    var node = this._search(value, this._root);
    return this._splay(node);
  };

  /**
   * Finds a node by it's value.<br><br>
   * Average time complexity: O(log N).
   *
   * @public
   * @param {Number|String} value of the node which should be found.
   */
  exports.SplayTree.prototype._splaylessSearch = function (value) {
    return this._search(value, this._root);
  };

  /**
   * Finds a node by it's value in a given sub-tree.
   * Average time complexity: O(log N).
   *
   * @private
   * @param {Number|String} value of the node which should be found.
   * @param {Node} current node to be checked.
   */
  exports.SplayTree.prototype._search = function (value, current) {
    if (!current) {
      return null;
    }

    if (current.value === value) {
      return current;
    }

    if (current.value > value) {
      return this._search(value, current._left);
    }

    if (current.value < value) {
      return this._search(value, current._right);
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
  exports.SplayTree.prototype._replaceChild =
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
   * Removes node with given value from the tree. <br><br>
   * Average runtime complexity: O(log N).
   *
   * @public
   * @param {Number|String} value Value to be removed
   * @returns {Boolean} True/false depending
   *    on whether the given node is removed.
   */
  exports.SplayTree.prototype.remove = function (value) {
    var node = this._splaylessSearch(value);
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
        this._splay(node._parent);
      } else {
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
  exports.SplayTree.prototype._findMin = function (node, current) {
    current = current || {
      value: Infinity
    };
    if (!node) {
      return current;
    }
    if (current.value > node.value) {
      current = node;
    }
    return this._findMin(node._left, current);
  };

  exports.SplayTree.prototype._isBalanced = function (current) {
    if (!current) {
      return true;
    }
    return this._isBalanced(current._left) &&
      this._isBalanced(current._right) &&
      Math.abs(this._getHeight(current._left) -
        this._getHeight(current._right)) <= 1;
  };

  /**
   * Returns whether the Splay Tree is balanced.
   *
   * @public
   * @returns {Boolean} Whether the tree is balanced or not.
   */
  exports.SplayTree.prototype.isBalanced = function () {
    return this._isBalanced(this._root);
  };

  /**
   * Finds the diameter of the Splay Tree.
   *
   * @public
   * @returns {Number} The longest path in the tree.
   */
  exports.SplayTree.prototype.getDiameter = function () {
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
  exports.SplayTree.prototype.getHeight = function () {
    return this._getHeight(this._root);
  };

  /**
   * Recursive worker function for getHeight()
   *
   * @public
   * @param {Node} node The node of the current recursive frame.
   * @returns {Number} The height of the tree.
   */
  exports.SplayTree.prototype._getHeight = function (node) {
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
  exports.SplayTree.prototype.lowestCommonAncestor =
    function (firstNode, secondNode) {
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
  exports.SplayTree.prototype._lowestCommonAncestor =
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
        return this._lowestCommonAncestor(firstNode, secondNode,
          current._right);
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
  exports.SplayTree.prototype._existsInSubtree = function (node, root) {
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
