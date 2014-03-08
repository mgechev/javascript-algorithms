var sortTestCase = require('../sort.testcase.js'),
    shellSort = require('../../../src/sorting/shellsort/shellsort.js')
      .shellSort;

sortTestCase(shellSort, 'Shell sort');