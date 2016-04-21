var sortTestCases = require('./sort.testcases.js');
var quickSort =
      require('../../src/sorting/quicksort.js').quickSort;

describe('Quick sort', function () {
  sortTestCases(quickSort);
});
