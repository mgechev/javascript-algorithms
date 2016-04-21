var sortTestCases = require('./sort.testcases.js');
var selectionSort =
      require('../../src/sorting/selectionsort.js')
      .selectionSort;

describe('Selection sort', function () {
  sortTestCases(selectionSort);
});
