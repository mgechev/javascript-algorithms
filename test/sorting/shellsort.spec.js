let sortTestCase = require('./sort.testcase.js');
let shellSort = require('../../src/sorting/shellsort.js')
      .shellSort;

sortTestCase(shellSort, 'Shell sort');
