let sortTestCase = require('./sort.testcase.js');
let recursiveInsertionSort = require('../../src/sorting/' +
      'recursive-insertionsort.js').recursiveInsertionSort;

sortTestCase(recursiveInsertionSort, 'Recursive insertion sort');
