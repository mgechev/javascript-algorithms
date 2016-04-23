var sortTestCases = require('./sort.testcases.js');
var mergeSort =
      require('../../src/sorting/mergesort.js').mergeSort;

describe('Merge sort', function () {
  sortTestCases(mergeSort);
});
