var sortTestCases = require('./sort.testcases.js');
var insertionSort = require('../../src/sorting/' +
      'insertionsort.js').insertionSort;

describe('Insertion sort', function () {
  sortTestCases(insertionSort);
});
