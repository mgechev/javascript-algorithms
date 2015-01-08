(function (exports) {
  'use strict';

  function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  function LinkedList() {
    this.first = null;
    this.last = null;
  }

  LinkedList.prototype.push = function (data) {
    var node = new Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.last;
      this.last = node;
      node.prev = temp;
      temp.next = node;
    }
  };

  LinkedList.prototype.unshift = function (data) {
    var node = new Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.first;
      this.first = node;
      node.next = temp;
      temp.prev = node;
    }
  };

  LinkedList.prototype.inorder = function (cb) {
    var temp = this.first;
    while (temp) {
      cb(temp);
      temp = temp.next;
    }
  };

  LinkedList.prototype.remove = function (data) {
    if (this.first === null) {
      return false;
    }
    var temp = this.first,
        next, prev;
    while (temp) {
      if (temp.data === data) {
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

  LinkedList.prototype.hasCycle = function () {
    var fast = this.first,
        slow = this.first;
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

  LinkedList.prototype.pop = function () {
    if (this.last === null) {
      return null;
    }
    var temp = this.last;
    this.last = this.last.prev;
    return temp;
  };

  LinkedList.prototype.shift = function () {
    if (this.first === null) {
      return null;
    }
    var temp = this.first;
    this.first = this.first.next;
    return temp;
  };

  LinkedList.prototype.recursiveReverse = function () {

    function inverse(current, next) {
      if (!next) {
        return;
      }
      inverse(next, next.next);
      next.next = current;
    }

    if (!this.first) {
      return;
    }
    inverse(this.first, this.first.next);
    this.first.next = null;
    var temp = this.first;
    this.first = this.last;
    this.last = temp;
  };

  LinkedList.prototype.reverse = function () {
    if (!this.first || !this.first.next) {
      return;
    }
    var current = this.first.next,
        prev = this.first,
        temp;
    while (current) {
      temp = current.next;
      current.next = prev;
      prev.prev = current;
      prev = current;
      current = temp;
    }
    this.first.next = null;
    this.last.prev = null;
    temp = this.first;
    this.first = prev;
    this.last = temp;
  };

  exports.LinkedList = LinkedList;
  exports.Node = Node;

}(typeof exports === 'undefined' ? window : exports));

