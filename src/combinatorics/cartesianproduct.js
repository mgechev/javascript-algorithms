var cartesianProduct = (function () {
  'use strict';
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

  return function (sets) {
    result = [];
    cartesianProduct(sets, 0, []);
    return result;
  };
}());

