var sortTestCases = require('./sort.testcases.js');
var bubbleSort =
      require('../../src/sorting/bubblesort.js').bubbleSort;

describe('Bubble sort', function () {
  sortTestCases(bubbleSort);
});
