let sortTestCase = require('./sort.testcase.js');
let quickSort =
      require('../../src/sorting/quicksort-middle.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
