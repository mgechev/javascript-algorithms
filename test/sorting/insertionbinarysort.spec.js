var sortTestCases = require('./sort.testcases.js');
var insertionBinarySort =
      require('../../src/sorting/' +
      'insertion-binary-sort.js').insertionBinarySort;

describe('Insertion binary sort', function () {
  sortTestCases(insertionBinarySort);
});
