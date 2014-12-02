(function (exports) {
  'use strict';

  function Node(start, end, left, right) {
    this.interval = [start, end];
    this.max = -Infinity;
    this.parentNode = null;
    this.left = left;
    this.right = right;
  }

  function IntervalTree() {
    this.root = null;
  }

  function addNode(node, side, interval) {
    var child = new Node(interval[0], interval[1]);
    child.parentNode = node;
    node[side] = child;
    if (node.max < interval[1]) {
      while (child) {
        if (child.max < interval[1]) {
          child.max = interval[1];
        }
        child = child.parentNode;
      }
    }
  }

  function addHelper(node, interval) {
    if (node.interval[0] > interval[0]) {
      if (node.left) {
        addHelper(node.left, interval);
      } else {
        addNode(node, 'left', interval);
      }
    } else {
      if (node.right) {
        addHelper(node.right, interval);
      } else {
        addNode(node, 'right', interval);
      }
    }
  }

  IntervalTree.prototype.add = function (interval) {
    if (!this.root) {
      this.root = new Node(interval[0], interval[1]);
      return;
    }
    addHelper(this.root, interval);
  };

  function contains(point, node) {
    if (!node) {
      return false;
    }
    if (node.interval[0] <= point && node.interval[1] >= point) {
      return true;
    }
    var result = false, temp;
    ['left', 'right'].forEach(function (key) {
      temp = node[key];
      if (temp) {
        if (temp.max > point) {
          result = result || contains(point, temp);
        }
      }
    });
    return result;
  }

  IntervalTree.prototype.contains = function (point) {
    return contains(point, this.root);
  };

  function intersectsHelper(interval, node) {
    if (!node) {
      return false;
    }
    if (intersects(node.interval, interval)) {
      return true;
    }
    var result = false, temp;
    ['left', 'right'].forEach(function (side) {
      temp = node[side];
      if (temp && temp.max >= interval[0]) {
        result = result || intersectsHelper(interval, temp);
      }
    });
    return result;
  }

  function intersects(a, b) {
    return (a[0] <= b[0] && a[1] >= b[0]) || (a[0] <= b[1] && a[1] >= b[1]) ||
           (b[0] <= a[0] && b[1] >= a[0]) || (b[0] <= a[1] && b[1] >= a[1]);
  }

  IntervalTree.prototype.intersects = function (interval) {
    return intersectsHelper(interval, this.root);
  };

  function heightHelper(node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(heightHelper(node.left), heightHelper(node.right));
  }

  IntervalTree.prototype.height = function () {
    return heightHelper(this.root);
  };

  IntervalTree.prototype.findMax = function (node) {
    var stack = [node],
        current, max = -Infinity, maxNode;
    while (stack.length) {
      current = stack.pop();
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
      if (current.interval[1] > max) {
        max = current.interval[1];
        maxNode = current;
      }
    }
    return maxNode;
  };

  // adjust the max value
  IntervalTree.prototype._removeHelper = function (interval, node) {
    if (!node) {
      return;
    }
    if (node.interval[0] === interval[0] &&
        node.interval[1] === interval[1]) {
      // When left and right children exists
      if (node.left && node.right) {
        var replacement = node.left;
        while (replacement.left) {
          replacement = replacement.left;
        }
        var temp = replacement.interval;
        replacement.interval = node.interval;
        node.interval = temp;
        this._removeHelper(replacement.interval, node);
      } else {
        // When only left or right child exists
        var side = 'left';
        if (node.right) {
          side = 'right';
        }
        var parentNode = node.parentNode;
        if (parentNode) {
          if (parentNode.left === node) {
            parentNode.left = node[side];
          } else {
            parentNode.right = node[side];
          }
          if (node[side]) {
            node[side].parentNode = parentNode;
          }
        } else {
          this.root = node[side];
          // last node removed
          if (this.root) {
            this.root.parentNode = null;
          }
        }
      }
      // Adjust the max value
      var p = node.parentNode;
      if (p) {
        var maxNode = this.findMax(p),
            max = maxNode.interval[1];
        while (maxNode) {
          if (maxNode.max === node.interval[1]) {
            maxNode.max = max;
            maxNode = maxNode.parentNode;
          } else {
            maxNode = false;
          }
        }
      }
    } else {
      // could be optimized
      this._removeHelper(interval, node.left);
      this._removeHelper(interval, node.right);
    }
  };

  IntervalTree.prototype.remove = function (interval) {
    return this._removeHelper(interval, this.root);
  };

  exports.Node = Node;
  exports.IntervalTree = IntervalTree;

}(typeof exports === 'undefined' ? window : exports));
