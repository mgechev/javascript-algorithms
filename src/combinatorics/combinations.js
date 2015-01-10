(function (exports) {
  'use strict';

  var combinations = (function () {
    var res = [];

    function combinations(arr, k, start, idx, current) {
      if (idx === k) {
        res.push(current.slice());
        return;
      }
      for (var i = start; i < arr.length; i += 1) {
        current[idx] = arr[i];
        combinations(arr, k, i + 1, idx + 1, current);
      }
    }

    return function (arr, k) {
      res = [];
      combinations(arr, k, 0, 0, []);
      var temp = res;
      // Free the extra memory
      res = null;
      return temp;
    };
  }());

  exports.combinations = combinations;

}(typeof exports === 'undefined' ? window : exports));

