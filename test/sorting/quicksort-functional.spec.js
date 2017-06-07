var sortTestCase = require('./sort.testcase.js');
var quickSort =
      require('../../src/sorting/quicksort-functional.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
