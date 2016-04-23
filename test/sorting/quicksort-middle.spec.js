var sortTestCases = require('./sort.testcases.js');
var quickSort =
      require('../../src/sorting/quicksort-middle.js').quickSort;

describe('Quick sort middle', function () {
  sortTestCases(quickSort);
});
