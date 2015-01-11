var sortTestCase = require('../sort.testcase.js');
var insertionSort = require('../../../src/sorting/insertionsort/' +
      'insertionsort.js').insertionSort;

sortTestCase(insertionSort, 'Insertion sort');
