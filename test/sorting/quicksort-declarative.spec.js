let sortTestCase = require('./sort.testcase.js');
let quickSort =
      require('../../src/sorting/quicksort-declarative.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
