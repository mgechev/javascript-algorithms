var sortTestCases = require('./sort.testcases.js');
var heapSort = require('../../src/sorting/heapsort.js').heapSort;

describe('Heap sort', function () {
  sortTestCases(heapSort);
});
