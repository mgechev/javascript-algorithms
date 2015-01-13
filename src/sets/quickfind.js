/**
 * Keeps track of a set of elements partitioned into a
 * number of disjoint (nonoverlapping) subsets.
 *
 * @example
 *
 * var QuickFind = require('path-to-algorithms/src/sets/quickfind').QuickFind;
 *
 * var find = new QuickFind(10);
 * find.union(0, 1);
 * find.union(2, 1);
 * find.union(3, 4);
 * find.union(8, 9);
 * find.union(4, 8);
 *
 * console.log(find.connected(0, 9)); // false
 * console.log(find.connected(3, 9)); // true
 *
 * @public
 * @module sets/quickfind
 */
(function (exports) {
  'use strict';

  /**
   * Initialization.<br><br>
   * Complexity: O(N).
   *
   * @constructor
   * @param {Numner} size Count of the nodes.
   */
  function QuickFind(size) {
    this._ids = [];
    for (var i = 0; i < size; i += 1) {
      this._ids[i] = i;
    }
  }

  /**
   * Connects two nodes - p and q.<br><br>
   * Complexity: O(N).
   *
   * @param {Number} p The first node.
   * @param {Number} q The second node.
   */
  QuickFind.prototype.union = function (p, q) {
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
   * Complexity: O(1).
   *
   * @param {number} p The first node.
   * @param {number} q The second node.
   *
   */
  QuickFind.prototype.connected = function (p, q) {
    return this._ids[p] === this._ids[q];
  };

  exports.QuickFind = QuickFind;

})(typeof window === 'undefined' ? module.exports : window);
