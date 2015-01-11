(function (exports) {
  'use strict';

  var cartesianProduct = (function () {
    var result;

    function cartesianProduct(sets, index, current) {
      if (index === sets.length) {
        return result.push(current.slice());
      }
      for (var i = 0; i < sets[index].length; i += 1) {
        current[index] = sets[index][i];
        cartesianProduct(sets, index + 1, current);
      }
    }

    /**
     * Calculates Cartesian product of provided sets.
     *
     * @module combinatorics/cartesianproduct
     * @public
     * @param {Array} sets Array of sets.
     * @return {Array} Cartesian product of provided sets.
     *
     * @example
     * var product = require('path-to-algorithms/src/combinatorics/' +
     * 'cartesianproduct').cartesianProduct;
     * var result = product([[1, 2, 3], [3, 2, 1]]);
     * // [ [ 1, 3 ],
     * //   [ 1, 2 ],
     * //   [ 1, 1 ],
     * //   [ 2, 3 ],
     * //   [ 2, 2 ],
     * //   [ 2, 1 ],
     * //   [ 3, 3 ],
     * //   [ 3, 2 ],
     * //   [ 3, 1 ] ]
     * console.log(result);
     */
    return function (sets) {
      result = [];
      cartesianProduct(sets, 0, []);
      return result;
    };
  }());

  exports.cartesianProduct = cartesianProduct;

}((typeof window === 'undefined') ? module.exports : window));
