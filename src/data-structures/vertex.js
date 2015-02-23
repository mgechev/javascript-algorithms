(function (exports) {
  'use strict';

  /**
   * Graph vertex.
   *
   * @constructor
   * @public
   * @param {Number} id Id of the vertex.
   * @module data-structures/vertex
   */
  exports.Vertex = function (id) {
    this.id = id;
  };

})(typeof window === 'undefined' ? module.exports : window);
