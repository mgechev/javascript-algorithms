var sortTestCase = require('./sort.testcase.js');
var shellSort = require('../../src/sorting/shellsort.js')
      .shellSort;

sortTestCase(shellSort, 'Shell sort');
