var variationsWithRepetion = (function () {
  'use strict';

  var res;

  function variations(arr, k, index, current) {
    if (k === index) {
      return res.push(current.slice());
    }
    for (var i = 0; i < arr.length; i += 1) {
      current[index] = arr[i];
      variations(arr, k, index + 1, current);
    }
  }

  return function (arr, k) {
    res = [];
    variations(arr, k, 0, []);
    var temp = res;
    res = undefined;
    return temp;
  };
}());

