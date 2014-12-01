function Node(start, end, left, right) {
  this.interval = [start, end];
  this.maxRight = -Infinity;
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
  if (side === 'right' && node.maxRight < interval[1]) {
    while (child) {
      child.maxRight = interval[1];
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