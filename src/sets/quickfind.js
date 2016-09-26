/**
 * Keeps track of a set of elements partitioned into a
 * number of disjoint (nonoverlapping) subsets.
 * Allows to check whether the path between two nodes exists.
 * The algorithm is inspired by Robert Sedgewick's Java implementation.
 * <br>
 * The algorithm is inspired by Robert Sedgewick's Java implementation.
 * {@link http://algs4.cs.princeton.edu/home/}
 *
 * @example
 *
 * var QuickFind = require('path-to-algorithms/src/sets/quickfind').QuickFind;
 *
 * var qfind = new QuickFind(10);
 * qfind.union(0, 1);
 * qfind.union(2, 1);
 * qfind.union(3, 4);
 * qfind.union(8, 9);
 * qfind.union(4, 8);
 *
 * console.log(qfind.connected(0, 9)); // false
 * console.log(qfind.connected(3, 9)); // true
 *
 * @public
 * @module sets/quickfind
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
  exports.QuickFind = function (size) {
    this._ids = [];
    for (var i = 0; i < size; i += 1) {
      this._ids[i] = i;
    }
  };

  /**
   * Connects two nodes - p and q.<br><br>
   * Time complexity: O(N).
   *
   * @public
   * @method
   * @param {Number} p The first node.
   * @param {Number} q The second node.
   */
  exports.QuickFind.prototype.union = function (p, q) {
    var size = this._ids.length;
    var pval = this._ids[p];
    var qval = this._ids[q];
    for (var i = 0; i < size; i += 1) {
      if (this._ids[i] === qval) {
        this._ids[i] = pval;
      }
    }
  };

  /**
   * Checks whether two nodes are connected.<br><br>
   * Time complexity: O(1).
   *
   * @public
   * @method
   * @param {Number} p The first node.
   * @param {Number} q The second node.
   * @return {Boolean}
   */
  exports.QuickFind.prototype.connected = function (p, q) {
    return this._ids[p] === this._ids[q];
  };
})(typeof window === 'undefined' ? module.exports : window);
