module.exports = function (sort, algorithmName, options) {
  'use strict';

  options = options || {
    integers: false,
    reverse: true
  };

  describe(algorithmName, function () {

    function createRandomArray(config) {
      config = config || {};
      var size = config.size || 100;
      var precision = config.precision || 2;
      var multiplier = config.multiplier || 100;
      var result = [];

      for (var i = size; i > 0; i -= 1) {
        result.push(parseFloat((Math.random() *
            multiplier).toFixed(precision)));
      }
      return result;
    }

    it('should work with empty array', function () {
      expect(sort([])).toEqual([]);
    });

    it('should work with sorted arrays', function () {
      expect(sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should work with random non-sorted arrays', function () {
      var array;
      if (options.integers) {
        array = createRandomArray();
      } else {
        array = createRandomArray({
          precision: 0
        });
      }
      array = sort(array);
      for (var i = 0; i < array.length - 1; i += 1) {
        expect(array[i] <= array[i + 1]).toBeTruthy();
      }
    });

    if (options.reverse) {
      it('should sort the numbers in descending order ' +
          'when such comparator is provided', function () {
        function comparator(a, b) {
          return b - a;
        }

        var array = createRandomArray();
        array = sort(array, comparator);

        for (var i = 0; i < array.length - 1; i += 1) {
          expect(array[i] >= array[i + 1]).toBeTruthy();
        }
      });
    }

  });
};
