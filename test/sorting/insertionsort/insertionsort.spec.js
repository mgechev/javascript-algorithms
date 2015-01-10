var sortTestCase = require('../sort.testcase.js'),
    insertionSort = require('../../../src/sorting/insertionsort/' +
      'insertionsort.js').insertionSort;

sortTestCase(insertionSort, 'Insertion sort');