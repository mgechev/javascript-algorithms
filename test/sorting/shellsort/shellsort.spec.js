var sortTestCase = require('../sort.testcase.js');
var shellSort = require('../../../src/sorting/shellsort/shellsort.js')
      .shellSort;

sortTestCase(shellSort, 'Shell sort');
