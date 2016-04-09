(function (exports) {
  'use strict';

  /**
   * Graph edge.
   *
   * @constructor
   * @public
   * @param {Vertex} e Vertex which this edge connects.
   * @param {Vertex} v Vertex which this edge connects.
   * @param {Number} distance Weight of the edge.
   * @module data-structures/edge
   */
  exports.Edge = function (e, v, distance) {
    this.from = e;
    this.to = v;
    this.distance = distance;
  };

})(typeof window === 'undefined' ? module.exports : window);
