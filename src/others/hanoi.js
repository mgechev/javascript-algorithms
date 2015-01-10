/*
 * Hanoi towers
 */
(function (exports) {
  'use strict';

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
