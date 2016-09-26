/**
 * Keeps track of a set of elements partitioned into a
 * number of disjoint (nonoverlapping) subsets.
 * Allows to check whether the path between two nodes exists.
 * <br>
 * The algorithm is inspired by Robert Sedgewick's Java implementation.
 * {@link http://algs4.cs.princeton.edu/home/}
 *
 * @example
 *
 * var QuickUnion = require('path-to-algorithms/' +
 * 'src/sets/weightquickunion').QuickUnion;
 *
 * var qunion = new QuickUnion(10);
 * qunion.union(0, 1);
 * qunion.union(2, 1);
 * qunion.union(3, 4);
 * qunion.union(8, 9);
 * qunion.union(4, 8);
 *
 * console.log(qunion.connected(0, 9)); // false
 * console.log(qunion.connected(3, 9)); // true
 *
 * @public
 * @module sets/weightquickunion
 */

(function (exports) {
  'use strict';

  /**
  * Initialization.<br><br>
  * Time complexity: O(N).
  *
  * @public
  * @constructor
  * @param {Numner} size Count of the nodes.
  */
  exports.QuickUnion = function (n) {
    this._ids = [];
    this._size = [];
    for (var i = 0; i < n; i += 1) {
      this._ids[i] = i;
      this._size[i] = 1;
    }
  };

  /**
  * Finds the root of given node.<br><br>
  * Time complexity: O(log N).
  * @private
  * @param {Number} i The given node.
  * @return {Number} Root of the given node.
  */
  exports.QuickUnion.prototype._root = function (i) {
    while (i !== this._ids[i]) {
      // this._ids[i] = this._ids[this._ids[i]]; //enables the path compression
      i = this._ids[i];
    }
    return i;
  };

  /**
  * Checks whether two nodes are connected.<br><br>
  * Time complexity: O(log N).
  *
  * @param {Number} p The first node.
  * @param {Number} q The second node.
  * @return {Boolean} True/false depending on whether the nodes are connected.
  */
  exports.QuickUnion.prototype.connected = function (p, q) {
    return this._root(p) === this._root(q);
  };

  /**
  * Connects two nodes - p and q.<br><br>
  * Time complexity: O(log N).
  *
  * @public
  * @method
  * @param {Number} p The first node.
  * @param {Number} q The second node.
  */
  exports.QuickUnion.prototype.union = function (p, q) {
    var pf = this._root(p);
    var qf = this._root(q);
    if (pf === qf) {
      return; // already linked
    }
    var psz = this._size[qf];
    var qsz = this._size[pf];
    if (psz < qsz) {
      this._ids[pf] = qf;
      this._size[qf] += psz;
    } else {
      this._ids[qf] = pf;
      this._size[pf] += qsz;
    }
  };

})(typeof window === 'undefined' ? module.exports : window);
