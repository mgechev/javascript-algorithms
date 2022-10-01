let sortTestCase = require('./sort.testcase.js');
let insertionSort = require('../../src/sorting/' +
      'insertionsort.js').insertionSort;

sortTestCase(insertionSort, 'Insertion sort');
