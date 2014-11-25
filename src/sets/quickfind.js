(function (exports) {
  /**
   * Checks whether there is a path between two nodes.
   * The initialization is O(n).
   *
   * @constructor
   * @param {numner} size The count of the nodes
   */
  function QuickFind(size) {
    this._ids = [];
    for (var i = 0; i < size; i += 1) {
      this._ids[i] = i;
    }
  }

  /**
   * Connects two nodes - p and q.
   * Complexity O(n).
   *
   * @param {number} p The first node
   * @param {number} q The second node
   */
  QuickFind.prototype.union = function (p, q) {
    var size = this._ids.length,
        pval = this._ids[p],
        qval = this._ids[q];
    for (var i = 0; i < size; i += 1) {
      if (this._ids[i] === qval) {
        this._ids[i] = pval;
      }
    }
  };

  /**
   * Checks whether two nodes are connected.
   * Complexity O(1).
   *
   * @param {number} p The first node
   * @param {number} q The second node
   *
   */
  QuickFind.prototype.connected = function (p, q) {
    return this._ids[p] === this._ids[q];
  };

  exports.QuickFind = QuickFind;

  //var find = new QuickFind(10);
  //find.union(0, 1);
  //find.union(2, 1);
  //find.union(3, 4);
  //find.union(8, 9);
  //find.union(4, 8);
  //
  //console.log(find.connected(0, 9)); //expected false
  //console.log(find.connected(3, 9)); //expected true
}(typeof exports === 'undefined' ? window : exports));
