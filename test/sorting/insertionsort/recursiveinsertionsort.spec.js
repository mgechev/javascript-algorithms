var sortTestCase = require('../sort.testcase.js'),
    recursiveInsertionSort = require('../../../src/sorting/insertionsort/recursive-insertionsort.js').recursiveInsertionSort;

sortTestCase(recursiveInsertionSort, 'Recursive insertion sort');