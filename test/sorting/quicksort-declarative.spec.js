var sortTestCase = require('./sort.testcase.js');
var quickSort =
      require('../../src/sorting/quicksort-declarative.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
