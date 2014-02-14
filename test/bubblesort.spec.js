var bubbleSort = require('../src/sorting/bubblesort/bubblesort.js')

describe('Bubble sort', function () {

  it('should work with empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should work with sorted arrays', function () {
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
  });

  it('should work with random non-sorted arrays', function () {

    function createRandomArray(options) {
      options = options || {};
      var size = options.size || 100,
          precision = options.precision || 2,
          multiplier = options.multiplier || 100;

      var result = [];
      for (var i = size; i > 0; i -= 1) {
        result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
      }
      return result;
    }

    var array = createRandomArray();
    bubbleSort(array);

    for (var i = 0; i < array.length - 1; i += 1) {
      expect(array[i] <= array[i + 1]).toBeTruthy();
    }
  });

});