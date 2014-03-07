var sortTestCase = require('../sort.testcase.js'),
    quickSort = require('../../../src/sorting/quicksort/quicksort-middle.js').quickSort;

sortTestCase(quickSort, 'Quick sort');