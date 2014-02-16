module.exports = function (sort) {
  describe('Bubble sort', function () {

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

    it('should work with empty array', function () {
      expect(sort([])).toEqual([]);
    });

    it('should work with sorted arrays', function () {
      expect(sort([1,2,3,4])).toEqual([1,2,3,4]);
    });

    it('should work with random non-sorted arrays', function () {

      var array = createRandomArray();
      sort(array);

      for (var i = 0; i < array.length - 1; i += 1) {
        expect(array[i] <= array[i + 1]).toBeTruthy();
      }
    });

    it('should sort the numbers in descending order when such comparator is provided', function () {
      function comparator(a, b) {
        return b - a;
      }

      var array = createRandomArray();
      sort(array, comparator);

      for (var i = 0; i < array.length - 1; i += 1) {
        expect(array[i] >= array[i + 1]).toBeTruthy();
      }
    });

  });
};