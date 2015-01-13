var sortTestCase = require('./sort.testcase.js');
var recursiveInsertionSort = require('../../src/sorting/' +
      'recursive-insertionsort.js').recursiveInsertionSort;

sortTestCase(recursiveInsertionSort, 'Recursive insertion sort');
