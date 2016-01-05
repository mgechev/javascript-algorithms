'use strict';

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

function CreateSBTreeClass (Node, Nil) {
  function updateChild(node, newChild) {
    var parent = node.parent;
    if (parent !== Nil) {
      if (parent.right === node) {
        parent.right = newChild;
      } else {
        parent.left = newChild;
      }
      parent.updateSize();
    }
    if (newChild !== Nil) {
      newChild.parent = parent;
    }
  }

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
    updateChild(node, childNode); //Access node.parent
    node.parent = childNode;
    node.updateSize();
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
    updateChild(node, childNode); //Access node.parent
    node.parent = childNode;
    node.updateSize();
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
    node.updateSize();
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

  function findRightMost(node) {
    while (node.right !== Nil) {
      node = node.right;
    }
    return node;
  }

  function findLeftMost(node) {
    while (node.left !== Nil) {
      node = node.left;
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
    updateChild: updateChild,
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

  /**
   * Push a value to the end of tree.
   * Complexity: O(log N).
   *
   * @public
   * @method
   * @param {Object} value Value.
   */
  SBTree.prototype.push = function (value) {
    var node = findRightMost(this._root);
    var newNode = new Node(value, node, Nil, Nil, 1);
    if (node !== Nil) {
      node.right = newNode;
    }
    this._root = maintainSizeBalancedTree(newNode);
    return newNode;
  };

  SBTree.prototype.get = function (pos) {
    if (pos >= this._root.size) {
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

  SBTree.prototype.insert = function (pos, value) {
    if (pos >= this._root.size) {
      return this.push(value);
    }
    var node = findNodeAtPos(this._root, pos);
    var newNode;
    if (node.left === Nil) {
      newNode = new Node(value, node, Nil, Nil, 1);
      node.left = newNode;
    } else {
      node = findRightMost(node.left);
      newNode = new Node(value, node, Nil, Nil, 1);
      node.right = newNode;
    }
    this._root = maintainSizeBalancedTree(newNode);
    return newNode;
  };

  SBTree.prototype.remove = function (pos) {
    if (pos >= this._root.size) {
      return Nil; // There is no element to remove
    }
    var node = findNodeAtPos(this._root, pos);
    var maintainNode;

    /*
      Before remove:
          P (node's parent, be notices,
          |   N either be left child or right child of P)
          |
          N(node)
         / \
        L   R
         \
          \
           LRM(Left-Rightmost)
            \
             Nil
      After remove node N:
            P(node's parent)
           /
          L
           \
            \
             LRM(Left-Rightmost)
              \
               R

        N(node) is wild node that was removed

    */
    if (node.left !== Nil){
      var LRM = findRightMost(node.left);
      updateChild(node, node.left);
      LRM.right = node.right;
      if (LRM.right === Nil) {
        maintainNode = LRM;
      } else {
        LRM.right.parent = LRM;
        maintainNode = LRM.right;
      }
    } else if (node.right !== Nil) {
      var RLM = findLeftMost(node.right);
      updateChild(node, node.right);
      RLM.left = node.left;
      if (RLM.left === Nil) {
        maintainNode = RLM;
      } else {
        RLM.left.parent = RLM;
        maintainNode = RLM.left;
      }
    } else {
      updateChild(node, Nil);
      maintainNode = node.parent;
    }
    this._root = maintainSizeBalancedTree(maintainNode);
    return node;
  };

  return SBTree;
}

(function (exports) {

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
    this.height = 0;
  };

  /**
   * Update node's size.
   *
   * @private
   * @method
   */
  var updateSize = function () {
    this.size = this.left.size + this.right.size + 1;
    this.height = Math.max(this.left.height, this.right.height) + 1;
  };

  var createNil = function (Node, value) {
    var Nil = new Node(value, null, null, null, 0);
    Nil.parent = Nil;
    Nil.left = Nil;
    Nil.right = Nil;
    return Nil;
  };

  var Node = function () {
    NodeConstructor.apply(this, arguments);
  };

  Node.prototype.updateSize = updateSize;

  var Nil = createNil(Node, null);

  exports.NodeConstructor = NodeConstructor;
  exports.createNil = createNil;
  exports.updateSize = updateSize;
  exports.CreateSBTreeClass = CreateSBTreeClass;

  exports.Node = Node;
  exports.Nil = Nil;
  exports.SBTree = CreateSBTreeClass(Node, Nil);
  exports.updateChild = exports.SBTree.prototype.updateChild;

})(typeof module === 'undefined' ? window : module.exports);
