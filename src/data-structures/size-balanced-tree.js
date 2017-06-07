/**
 * Size balanced tree is a data structure which is
 * a type of self-balancing binary search tree that use
 * the tree size attribute for re-balancing the tree.
 *
 * @example
 *
 * var SBTree = require('../src/data-structures/size-balanced-tree').SBTree;
 * var sbTree = new SBTree();
 *
 * var treeNode = sbTree.push({
 *   name: 'John',
 *   surname: 'Smith'
 * });
 * sbTree.insert(0, {
 *   name: 'Pavlo',
 *   surname: 'Popov'
 * });
 * sbTree.insert(1, {
 *   name: 'Garry',
 *   surname: 'Fisher'
 * });
 * sbTree.insert(0, {
 *   name: 'Derek',
 *   surname: 'Anderson'
 * });
 *
 * console.log(sbTree.get(0)); // { name: 'Derek', surname: 'Anderson' }
 *
 * @module data-structures/size-balanced-tree
 */

function CreateSBTreeClass (Node, Nil, updateChild) {
  'use strict';

  function LeftRotate(node, childNode) {
    /*
      Before rotate:
       node
       / \
      NL childNode
         / \
        CL  CR
      After rotate:

        childNode
         /   \
       node  CR
       /  \
      NL  CL
    */
    node.right = childNode.left;
    if (node.right !== Nil) {
      node.right.parent = node;
    }
    childNode.left = node;
    // setting childNode's parent to node's parent
    updateChild(node, childNode);
    return childNode;
  }

  function RightRotate(node, childNode) {
    /*
      Before rotate:
          node
           / \
  childNode  NR
         / \
        CL  CR
      After rotate:

        childNode
         /   \
       CL    node
             / \
            CR  NR
    */
    node.left = childNode.right;
    if (node.left !== Nil) {
      node.left.parent = node;
    }
    childNode.right = node;
    // setting childNode's parent to node's parent
    updateChild(node, childNode);
    return childNode;
  }

  function maintain(node, leftChild) {
    if (node === Nil) {
      return node;
    }
    var savedNode = node;
    if (leftChild) {
      if (node.left.left.size > node.right.size) {
        node = RightRotate(node, node.left);
      } else if (node.left.right.size > node.right.size) {
        LeftRotate(node.left, node.left.right);
        node = RightRotate(node, node.left);
      }
    } else {
      if (node.right.right.size > node.left.size) {
        node = LeftRotate(node, node.right);
      } else if (node.right.left.size > node.left.size) {
        RightRotate(node.right, node.right.left);
        node = LeftRotate(node, node.right);
      }
    }
    if (node === savedNode) {
      return node;
    }
    maintain(node.left, false);
    maintain(node.right, true);
    node = maintain(node, true);
    node = maintain(node, false);
    return node;
  }

  function maintainSizeBalancedTree(node) {
    while (node.parent !== Nil) {
      var childNode = node;
      node = node.parent;
      if (node.left === childNode) {
        node = maintain(node, true);
      } else {
        node = maintain(node, false);
      }
    }
    return node;
  }

  function findNodeAtPos(node, pos) {
    while (pos !== node.left.size) {
      if (pos < node.left.size) {
        node = node.left;
      } else {
        pos -= node.left.size;
        pos -= 1; //The node element should be decrement by 1
        node = node.right;
      }
    }
    return node;
  }

  /**
   * Size Balanced Tree.
   *
   * @public
   * @constructor
   */
  var SBTree = function () {};

  SBTree.prototype = {
    _root: Nil,
    get size() {
      return this._root.size;
    },

    get root() {
      return this._root;
    },

    binarySearch: function (cmp, value) {
      var left = -1;
      var right = this.size;
      while (left + 1 < right) {
        var middle = (left + right) >> 1; // jshint ignore:line
        var result = cmp(this.get(middle).value, value);
        if (result <= 0) {
          left = middle;
        } else {
          right = middle;
        }
      }
      return left + 1;
    },
  };

  SBTree.prototype.get = function (pos) {
    if (pos >= this.size) {
      return Nil;
    }
    return findNodeAtPos(this._root, pos);
  };

  SBTree.prototype.getIndex = function (node) {
    var index = node.left.size;
    while (node !== this._root) {
      var parent = node.parent;
      if (parent.right === node) {
        index += parent.left.size + 1;
      }
      node = parent;
    }
    return index;
  };

  SBTree.prototype.shiftDown = function (node) {
    var direction = 0;
    while (true) {
      if (node.left !== Nil && node.right !== Nil) {
        switch (direction) {
          case 0:
            RightRotate(node, node.left);
            break;
          case 1:
            LeftRotate(node, node.right);
            break;
        }
        direction = 1 - direction;
      } else if (node.left !== Nil) {
        RightRotate(node, node.left);
      } else if (node.right !== Nil) {
        LeftRotate(node, node.right);
      } else {
        break; // The node could be able to removed
      }
    }
  };

  SBTree.prototype.insertLeafNode = function (node) {
    var parent = node.parent;
    while (parent !== Nil) {
      parent.size = parent.size + 1;
      parent = parent.parent;
    }
  };

  SBTree.prototype.removeLeafNode = function (node) {
    var parent = node.parent;
    while (parent !== Nil) {
      parent.size = parent.size - 1;
      parent = parent.parent;
    }
  };

  SBTree.prototype.insert = function (pos, value) {
    var node = Nil;
    var newNode = new Node(value, Nil, Nil, Nil, 1);
    if (pos === this.size) {
      if (pos > 0) {
        node = findNodeAtPos(this._root, pos - 1);
        node.right = newNode;
      }
    } else {
      node = findNodeAtPos(this._root, pos);
      if (node.left !== Nil) {
        this.shiftDown(node);
      }
      node.left = newNode;
    }
    newNode.parent = node;
    this.insertLeafNode(newNode);
    this._root = maintainSizeBalancedTree(newNode);
    return newNode;
  };

  /**
   * Push a value to the end of tree.
   * Complexity: O(log N).
   *
   * @public
   * @method
   * @param {Object} value Value.
   */
  SBTree.prototype.push = function (value) {
    this.insert(this.size, value);
  };

  SBTree.prototype.removeNode = function (node) {
    this.shiftDown(node);
    var maintainNode = node.parent;
    if (maintainNode.left === node) {
      maintainNode.left = Nil;
    } else if (maintainNode.right === node) {
      maintainNode.right = Nil;
    }
    this.removeLeafNode(node);
    this._root = maintainSizeBalancedTree(maintainNode);
    return node;
  };

  SBTree.prototype.remove = function (pos) {
    if (pos >= this._root.size) {
      return Nil; // There is no element to remove
    }
    var node = findNodeAtPos(this._root, pos);
    return this.removeNode(node);
  };

  return SBTree;
}

(function (exports) {
  'use strict';

  /**
   * Node constructor of the Size-Balanced tree.
   *
   * @private
   * @constructor
   * @param {Object} value Value assigned to the node.
   * @param {Node} parent Parent node.
   * @param {Node} left Left node.
   * @param {Node} right Right node.
   * @param {Number} size Node's, means the Node count of this  .
   */
  var NodeConstructor = function (value, parent, left, right, size) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.size = size;
  };

  var createNil = function (Node, value) {
    var Nil = new Node(value, null, null, null, 0);
    Nil.parent = Nil;
    Nil.left = Nil;
    Nil.right = Nil;
    return Nil;
  };

  /**
   * Update node's size.
   *
   * @private
   * @method
   */
  var updateSize = function () {
    this.size = this.left.size + this.right.size + 1;
  };

  // node, childNode must not be Nil,
  // if the childNode turn out to be the root, the parent should be Nil
  var updateChild = function (node, childNode) {
    var parent = node.parent;
    node.parent = childNode;
    childNode.parent = parent;

    node.updateSize();
    childNode.updateSize();
    if (parent.right === node) {
      parent.right = childNode;
      parent.updateSize();
    } else if (parent.left === node) {
      parent.left = childNode;
      parent.updateSize();
    } // otherwise parent is Nil
  };

  var Node = function () {
    NodeConstructor.apply(this, arguments);
  };

  Node.prototype.updateSize = updateSize;

  var Nil = createNil(Node, null);

  exports.NodeConstructor = NodeConstructor;
  exports.createNil = createNil;
  exports.updateSize = updateSize;
  exports.updateChild = updateChild;
  exports.CreateSBTreeClass = CreateSBTreeClass;

  exports.Node = Node;
  exports.Nil = Nil;
  exports.SBTree = CreateSBTreeClass(Node, Nil, updateChild);

})(typeof module === 'undefined' ? window : module.exports);
