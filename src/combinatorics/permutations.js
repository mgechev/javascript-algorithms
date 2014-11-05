(function (exports) {
  'use strict';
  var permutations = (function () {

    var res;

    function swap(arr, i, j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    function permutations(arr, current) {
      if (current >= arr.length) {
        return res.push(arr.slice());
      }
      for (var i = current; i < arr.length; i += 1) {
        swap(arr, i, current);
        permutations(arr, current + 1);
        swap(arr, i, current);
      }
    }

    return function (arr) {
      res = [];
      permutations(arr, 0);
      return res;
    };
  }());

  exports.permutations = permutations;

}(typeof exports === 'undefined' ? window : exports));
