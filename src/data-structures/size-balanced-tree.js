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
(function (exports) {

  'use strict';

  

  /**
   * Node of the Size-Balanced tree.
   *
   * @private
   * @constructor
   * @param {Object} value Value assigned to the node.
   * @param {Node} parent Parent node.
   * @param {Node} left Left node.
   * @param {Node} right Right node.
   * @param {Number} size Node's, means the Node count of this subtree.
   */
  function Node(value, parent, left, right, size) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.size = size;
  }

  /**
   * Update node's size.
   *
   * @private
   * @method
   */
  Node.prototype.updateSize = function () {
    this.size = this.left.size + this.right.size + 1;
  };

  exports.Node = Node;
  var Nil = new Node(null, null, null, null, 0);
  Nil.parent = Nil;
  Nil.left = Nil;
  Nil.right = Nil;
  exports.Nil = Nil;

  function updateChild(node, newChild) {
    let parent = node.parent;
    if (parent === Nil) {
      newChild.parent = parent;
      return newChild;
    }
    if (parent.right === node) {
      parent.right = newChild;
    } else {
      parent.left = newChild;
    }
    if (newChild === Nil) {
      return parent;
    }
    newChild.parent = parent;
    return newChild;
  }
  exports.updateChild = updateChild;

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
    if (node.right !== Nil) node.right.parent = node;
    childNode.left = node;
    updateChild(node, childNode) //Access node.parent
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
    if (node.left !== Nil) node.left.parent = node;
    childNode.right = node;
    updateChild(node, childNode) //Access node.parent
    node.parent = childNode;
    node.updateSize();
    return childNode;
  }

  function maintainSizeBalancedTree(node) {
    while (node.parent !== Nil) {
      let childNode = node;
      node = node.parent;
      if (node.right === childNode) {
        if (childNode.right.size > node.left.size) {
          node = LeftRotate(node, childNode);
        }
      } else {
        if (childNode.left.size > node.right.size) {
          node = RightRotate(node, childNode);
        }
      }
      node.updateSize();
    }
    return node;
  }

  function findRightMost(node) {
    while (node.right !== Nil) {
      node = node.right;
    }
    return node;
  }

  function findNodeAtPos(node, pos) {
    while (pos != node.left.size) {
      if (pos < node.left.size) {
        node = node.left;
      } else {
        pos -= node.left.size;
        --pos; //The node element should be decrement by 1
        node = node.right;
      }
    }
    return node;
  }

  /**
   * Red-Black Tree.
   *
   * @public
   * @constructor
   */
  exports.SBTree = function () {
    this._root = Nil;
  };

  
  exports.SBTree.prototype = {
    get size() {
      return this._root.size;
    },
  }
 
  /**
   * Push a value to the end of tree.<br><br>
   * Complexity: O(log N).
   *
   * @public
   * @method
   * @param {Object} value Value.
   */
  exports.SBTree.prototype.push = function (value) {
    let node = findRightMost(this._root);
    let newNode = new Node(value, node, Nil, Nil, 1);
    if (node !== Nil) node.right = newNode;
    this._root = maintainSizeBalancedTree(newNode);
    return newNode;
  };

  exports.SBTree.prototype.get = function(pos) {
    if (pos >= this._root.size) {
      return Nil;
    }
    return findNodeAtPos(this._root, pos);
  },

  exports.SBTree.prototype.insert = function(pos, value) {
    if (pos >= this._root.size) {
      return this.push(value)
    }
    let node = findNodeAtPos(this._root, pos);
    let newNode
    if (node.left === Nil) {
      newNode = new Node(value, node, Nil, Nil, 1);
      node.left = newNode;
    } else {
      node = findRightMost(node);
      newNode = new Node(value, node, Nil, Nil, 1);
      node.right = newNode;
    }
    this._root = maintainSizeBalancedTree(newNode);
    return newNode;
  };

  exports.SBTree.prototype.remove = function(pos) {
    if (pos >= this._root.size) {
      return Nil; // There is no element to remove
    }
    let node = findNodeAtPos(this._root, pos);
    let removedNode = node;
    let maintainNode;
    if (node.right === Nil) {
      maintainNode = updateChild(node, node.left)
    } else if (node.left === Nil) {
      maintainNode = updateChild(node, node.right)
    } else {
      /*
        Before remove:
            P(node's parent, be notices, N either be left child or right child of P)
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
      let LRM = findRightMost(node.left);
      updateChild(node, node.left)
      LRM.right = node.right
      LRM.right.parent = LRM;
      maintainNode = node.right;
    }
    this._root = maintainSizeBalancedTree(maintainNode);
    return removedNode;
  };


})(typeof window === 'undefined' ? module.exports : window);
