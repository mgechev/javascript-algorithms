/**
 * Linked list.
 *
 * @example
 *
 * var LL = require('path-to-algorithms/src/data-structures/linked-list');
 *
 * var linkedList = new LL.LinkedList();
 *
 * linkedList.push({
 *   name: 'John',
 *   birthyear: 1981
 * });
 * linkedList.push({
 *   name: 'Pavlo',
 *   birthyear: 2000
 * });
 * linkedList.push({
 *   name: 'Garry',
 *   birthyear: 1989
 * });
 * linkedList.push({
 *   name: 'Derek',
 *   birthyear: 1990
 * });
 * linkedList.push({
 *   name: 'Ivan',
 *   birthyear: 1966
 * });
 *
 * console.log(linkedList.shift().data); // { name: 'John', birthyear: 1981 }
 * console.log(linkedList.pop().data);   // { name: 'Ivan', birthyear: 1966 }
 *
 * @module data-structures/linked-list
 */
(function (exports) {

  'use strict';

  /**
   * Linked list node.
   *
   * @public
   * @constructor
   * @param {Object} data Data of the node.
   */
  exports.Node = function (data) {
    /**
     * Data of the node.
     * @member {Object}
     */
    this.data = data;
    /**
     * Next node.
     * @member {Node}
     */
    this.next = null;
    /**
     * Previous node.
     * @member {Node}
     */
    this.prev = null;
  };

  /**
   * Linked list.
   *
   * @public
   * @constructor
   */
  exports.LinkedList = function () {
    this.first = null;
    this.last = null;
  };

  /**
   * Add data to the end of linked list.
   *
   * @public
   * @method
   * @param {Object} data Data which should be added.
   */
  exports.LinkedList.prototype.push = function (data) {
    var node = new exports.Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.last;
      this.last = node;
      node.prev = temp;
      temp.next = node;
    }
  };

  /**
   * Add data to the beginning of linked list.
   *
   * @public
   * @method
   * @param {Object} data Data which should be added.
   */
  exports.LinkedList.prototype.unshift = function (data) {
    var node = new exports.Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.first;
      this.first = node;
      node.next = temp;
      temp.prev = node;
    }
  };

  /**
   * In order traversal of the linked list.
   *
   * @public
   * @method
   * @param {Function} cb Callback which should be executed on each node.
   */
  exports.LinkedList.prototype.inorder = function (cb) {
    var temp = this.first;
    while (temp) {
      cb(temp);
      temp = temp.next;
    }
  };

  /**
   * Remove data from the linked list.
   *
   * @public
   * @method
   * @param {Object} data Data which should be removed.
   * @return {Boolean} Returns true if data has been removed.
   */
  exports.LinkedList.prototype.remove = function (data, equals) {
    if (this.first === null) {
      return false;
    }
    var temp = this.first;
    var next;
    var prev;
    while (temp) {
      var dataFound = equals ? equals(temp.data, data) : temp.data === data;
      if (dataFound) {
        next = temp.next;
        prev = temp.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (temp === this.first) {
          this.first = next;
        }
        if (temp === this.last) {
          this.last = prev;
        }
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  /**
   * Check if linked list contains cycle.
   *
   * @public
   * @method
   * @return {Boolean} Returns true if linked list contains cycle.
   */
  exports.LinkedList.prototype.hasCycle = function () {
    var fast = this.first;
    var slow = this.first;
    while (true) {
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
  };

  /**
   * Return last node from the linked list.
   *
   * @public
   * @method
   * @return {Node} Last node.
   */
  exports.LinkedList.prototype.pop = function () {
    if (this.last === null) {
      return null;
    }
    var temp = this.last;
    this.last = this.last.prev;
    return temp;
  };

  /**
   * Return first node from the linked list.
   *
   * @public
   * @method
   * @return {Node} First node.
   */
  exports.LinkedList.prototype.shift = function () {
    if (this.first === null) {
      return null;
    }
    var temp = this.first;
    this.first = this.first.next;
    return temp;
  };

  /**
   * Reverses the linked list recursively
   *
   * @public
   * @method
   */
  exports.LinkedList.prototype.recursiveReverse = function () {

    function inverse(current, next) {
      if (!next) {
        return;
      }
      inverse(next, next.next);
      next.prev = next.next;
      next.next = current;
    }

    if (!this.first) {
      return;
    }
    inverse(this.first, this.first.next);
    this.first.prev = this.first.next;
    this.first.next = null;
    var temp = this.first;
    this.first = this.last;
    this.last = temp;
  };

  /**
   * Reverses the linked list iteratively
   *
   * @public
   * @method
   */
  exports.LinkedList.prototype.reverse = function () {
    if (!this.first || !this.first.next) {
      return;
    }
    var current = this.first
    var next

    do {
      next = current.next
      current.next = current.prev
      current.prev = next
      current = next
    } while (next)

    var tmp = this.first
    this.first = this.last
    this.last = tmp
  };

})(typeof window === 'undefined' ? module.exports : window);
