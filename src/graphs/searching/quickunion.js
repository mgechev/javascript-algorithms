/**
 * Checks whether path between two nodes exists.
 * The initialization has O(n) complexity.
 *
 * @constructor
 * @param {number} n Nodes count
 *
 */
function QuickUnion(n) {
  this._ids = [];
  for (var i = 0; i < n; i += 1) {
    this._ids[i] = i;
  }
}

/**
 * Finds the root of given node.
 * Complexity O(n).
 *
 * @param {number} i The given node
 * @return {number} The root of the given node
 */
QuickUnion.prototype._root = function (i) {
  while (i !== this._ids[i]) i = this._ids[i];
  return i;
};

/**
 * Unions two nodes.
 * Complexity O(n).
 *
 * @param {number} p The first node
 * @param {number} q The second node
 */
QuickUnion.prototype.union = function (p, q) {
  var pRoot = this._root(p),
      qRoot = this._root(q);
  this._ids[pRoot] = qRoot;
};

/**
 * Checks whether two nodes are connected.
 * Complexity O(n).
 *
 * @param {number} p The first node.
 * @param {number} q The second node.
 * @return {boolean} True/false depending on whether the nodes are connected.
 */
QuickUnion.prototype.connected = function (p, q) {
  return this._root(p) === this._root(q);
};

//var union = new QuickUnion(10);
//union.union(0, 1);
//union.union(2, 1);
//union.union(3, 4);
//union.union(8, 9);
//union.union(4, 8);
//
//console.log(union.connected(0, 9)); //expected false
//console.log(union.connected(3, 9)); //expected true
