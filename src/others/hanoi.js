(function (exports) {
  'use strict';

  /**
   * Returns all movements needed to solve Hanoi Tower problem.
   *
   * @public
   * @module others/hanoi
   *
   * @example
   *
   * var hanoi = require('path-to-algorithms/src/others/hanoi').hanoi;
   * var movements = hanoi(3, 'a', 'b', 'c');
   *
   * // Move a to c
   * // Move a to b
   * // Move c to b
   * // Move a to c
   * // Move b to a
   * // Move b to c
   * // Move a to c
   * movements.forEach(function (move) {
   *   console.log('Move', move[0], 'to', move[1]);
   * });
   *
   * @param {Number} count Count of the plates/stones.
   * @param {String|Number} source Identifier of the 1st peg.
   * @param {String|Number} intermediate Identifier of the 2nd peg.
   * @param {String|Number} goal Identifier of the 3rd peg.
   * @return Array which contains all the moves required
   * in order to place all the plates onto the last peg.
   */
  function hanoi(count, source, intermediate, goal, result) {
    result = result || [];
    if (count === 1) {
      result.push([source, goal]);
    } else {
      hanoi(count - 1, source, goal, intermediate, result);
      result.push([source, goal]);
      hanoi(count - 1, intermediate, source, goal, result);
    }
    return result;
  }

  exports.hanoi = hanoi;

})(typeof window === 'undefined' ? module.exports : window);
