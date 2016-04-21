var sortTestCases = require('./sort.testcases.js');
var recursiveInsertionSort = require('../../src/sorting/' +
      'recursive-insertionsort.js').recursiveInsertionSort;

describe('Recursive insertion sort', function () {
  sortTestCases(recursiveInsertionSort);
});
