/**
 * Implementation of binary search tree.
 */

/**
 * A node of the tree
 *
 * @public
 * @constructor
 * @param {number|string} Value of the node
 * @param {Node} Left subling
 * @param {Node} Right sibling
 * @param {Node} Parent of the node
 */
function Node(value, left, right, parent) {
  this.value = value;
  this._left = left;
  this._right = right;
  this._parent = parent;
}

/**
 * Defines the binary tree
 *
 * @public
 * @constructor
 */
function BinaryTree() {
  this._root = null;
}

/**
 * Inserts a node into the binary tree. The method's complexity is O(log n) in the average case and
 * O(n) in the worst case.
 *
 * @public
 * @param {number|string} Value
 * @param {[Node]} Current node
 */
BinaryTree.prototype.insert = function (value, current) {
  if (this._root === null) {
    this._root = new Node(value, null, null, null);
    return;
  }
  var insertKey;
  current = current || this._root;
  if (current.value > value)
    insertKey = '_left';
  else
    insertKey = '_right';
  if (!current[insertKey])
    current[insertKey] = new Node(value, null, null, current);
  else
    this.insert(value, current[insertKey]);
};

/**
 * Prints the nodes of the tree in order. It starts the tree traversal from a given node.
 *
 * @private
 * @param {Node} Node from which to start the traversal
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype._inorder = function (current, callback) {
  if (!current)
    return;
  this._inorder(current._left, callback);
  if (typeof callback === 'function')
    callback(current);
  this._inorder(current._right, callback);
};

/**
 * Inorder traversal of the whole binary search tree
 *
 * @public
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype.inorder = function (callback) {
  return this._inorder(this._root, callback);
};

/**
 * Post-order traversal from given node
 *
 * @private
 * @param {Node} Node from which to start the traversal
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype._postorder = function (current, callback) {
  if (!current)
    return;
  if (typeof callback === 'function')
    callback(current);
  this._postorder(current._left, callback);
  this._postorder(current._right, callback);
};

/**
 * Post-order traversal of the whole tree
 *
 * @public
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype.postorder = function (callback) {
  return this._postorder(this._root, callback);
};

/**
 * Pre-order traversal of the tree from given node
 *
 * @private
 * @param {Node} Node from which to start the traversal
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype._preorder = function (current, callback) {
  if (!current)
    return;
  if (typeof callback === 'function')
    callback(current);
  this._preorder(current._left, callback);
  this._preorder(current._right, callback);
};

/**
 * Pre-order preorder traversal of the whole tree
 * 
 * @public
 * @param {Function} Callback which will be called for each traversed node
 */
BinaryTree.prototype.preorder = function (callback) {
  return this._preorder(this._root, callback);
};

/**
 * Finds a node by it's value. Average runtime complexity O(log n) 
 *
 * @public
 * @param {number|string} Value of the node which should be found
 */
BinaryTree.prototype.find = function (value) {
  return this._find(value, this._root);
};

/**
 * Finds a node by it's value in given sub-tree. Average runtime complexity: O(log n).
 *
 * @private
 * @param {number|string} Value of the node which should be found
 * @param {Node} Current node to be checked
 */
BinaryTree.prototype._find = function (value, current) {
  if (!current)
    return null;
 
  if (current.value === value)
    return current;
 
  if (current.value > value)
    return this._find(value, current._left);
 
  if (current.value < value)
    return this._find(value, current._right);
  
};

/**
 * Replaces given child with new one, for given parent
 *
 * @private
 * @param {Node} Parent node
 * @param {Node} Child to be replaced
 * @param {Node} Child replacement
 */
BinaryTree.prototype._replaceChild = function (parent, oldChild, newChild) {
  if (!parent) {
    this._root = newChild;
    this._root._parent = null;
  } else {

    if (parent._left === oldChild)
      parent._left = newChild;
    else
      parent._right = newChild;

    if (newChild) {
      newChild._parent = parent;
    }
  }
};

/**
 * Removes node from the tree. Average runtime complexity: O(log n).
 *
 * @public
 * @param {Node} Node to be removed
 * @returns {boolean} True/false depending on whether the given node is removed
 */
BinaryTree.prototype.remove = function (node) {
  if (!node)
    return false;

  if (node._left && node._right) {
    var min = this._findMin(node._right),
      temp = node.value;

    node.value = min.value;
    min.value = temp;
    return this.remove(min);
  } else {
    if (node._left)
      this._replaceChild(node._parent, node, node._left);
    else if (node._right)
      this._replaceChild(node._parent, node, node._right);
    else
      this._replaceChild(node._parent, node, null);
    return true;
  }
};

/**
 * Finds the node with minimum value in given sub-tree
 *
 * @private
 * @param {Node} Root of the sub-tree
 * @param {[number|string]} Current minimum value of the sub-tree
 * @returns {Node} The node with minimum value in the sub-tree
 */
BinaryTree.prototype._findMin = function (node, current) {
  current = current || { value: Infinity };
  if (!node)
    return current;
  if (current.value > node.value)
    current = node;
  return this._findMin(node._left, current);
};

/**
 * Finds the node with maximum value in given sub-tree
 *
 * @private
 * @param {Node} Root of the sub-tree
 * @param {[number|string]} Current maximum value of the sub-tree
 * @returns {Node} The node with maximum value in the sub-tree
 */
BinaryTree.prototype._findMax = function (node, current) {
  current = current || { value: -Infinity };
  if (!node)
    return current;
  if (current.value < node.value)
    current = node;
  return this._findMax(node._right, current);
};

/**
 * Finds the node with minimum value in the whole tree
 *
 * @public
 * @returns {Node} The minimum node of the tree
 */
BinaryTree.prototype.findMin = function () {
  return this._findMin(this._root);
};

/**
 * Finds the maximum node of the tree
 *
 * @public
 * @returns {Node} The maximum node of the tree
 *
 */
BinaryTree.prototype.findMax = function () {
  return this._findMax(this._root);
};


BinaryTree.prototype._isBalanced = function (current) {
  if (!current) {
    return true;
  }
  return this._isBalanced(current._left)  &&
         this._isBalanced(current._right) &&
        Math.abs(this._getHeight(current._left) -
          this._getHeight(current._right)) <= 1;
};

/**
 * Returns whether the BST is balanced
 *
 * @public
 * @returns {Boolean} Whether the tree is balanced or not
 */
BinaryTree.prototype.isBalanced = function () {
  return this._isBalanced(this._root);
};

/**
 * Finds the diameter of the binary tree
 *
 * @public
 * @returns {Number} The longest path in the BST
 */
BinaryTree.prototype.getDiameter = function () {
  function getDiameter(root) {
    if (!root) {
      return 0;
    }
    var leftHeight = this._getHeight(root._left),
        rightHeight = this._getHeight(root._right),
        path = leftHeight + rightHeight + 1;
    return Math.max(path, Math.max(getDiameter(root._left), getDiameter(root._right)));
  }
  getDiameter = getDiameter.bind(this);
  return getDiameter(this._root);
};

/**
 * Returns the height of the tree
 *
 * @public
 * @returns {Number} The height of the tree
 */
BinaryTree.prototype.getHeight = function () {
  return this._getHeight(this._root);
};

BinaryTree.prototype._getHeight = function (node) {
  if (!node) {
    return 0;
  }
  return 1 + Math.max(this._getHeight(node._left), this._getHeight(node._right));
};

/**
 * Finds the lowest common ancestor of two nodes.
 *
 * @public
 * @returns {Node} The lowest common ancestor of the two nodes or null
 */
BinaryTree.prototype.lowestCommonAncestor = function (firstNode, secondNode, current) {
  return this._lowestCommonAncestor(firstNode, secondNode, this._root);
};

BinaryTree.prototype._lowestCommonAncestor = function (firstNode, secondNode, current) {
  var firstNodeInLeft = this._existsInSubtree(firstNode, current._left),
      secondNodeInLeft = this._existsInSubtree(secondNode, current._left),
      firstNodeInRight = this._existsInSubtree(firstNode, current._right),
      secondNodeInRight = this._existsInSubtree(secondNode, current._right);
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

BinaryTree.prototype._existsInSubtree = function (node, root) {
  if (!root) {
    return false;
  }
  if (node === root.value) {
    return true;
  }
  return this._existsInSubtree(node, root._left) || this._existsInSubtree(node, root._right);
};

