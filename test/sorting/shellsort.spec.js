var sortTestCases = require('./sort.testcases.js');
var shellSort = require('../../src/sorting/shellsort.js')
      .shellSort;

describe('Shell sort', function () {
  sortTestCases(shellSort);
});
